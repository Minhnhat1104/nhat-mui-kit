// Fetch signature hook for mod_sig
(function () {
    'use strict';

    if (!window || !window.fetch) return;
    if (!window.Promise) return;
    if (window.fetch.__hanSigWrapped) return;

    var SIG_COOKIE_NAME = 'HANBIRO_GW';
    var SIGNER_WAIT_TIMEOUT_MS = 3000;
    var SIGNER_WAIT_BOOTSTRAP_TIMEOUT_MS = 15000;
    var SIGNER_WAIT_STEP_MS = 30;
    var _nativeFetch = window.fetch;
    var _fetch = function () {
        return _nativeFetch.apply(window, arguments);
    };

    function shouldSign(url, headers) {
        if (!url) return false;
        if (/^\/sig\//.test(url)) return false;
        if (headers && (headers['X-Sig-Value'] || headers['x-sig-value'])) return false;
        return true;
    }

    function getCurrentDirname() {
        var p = window.location.pathname || '/';
        if (p.slice(-1) === '/') return p;
        var i = p.lastIndexOf('/');
        return i >= 0 ? p.slice(0, i + 1) : '/';
    }

    function getCurrentOrigin() {
        if (window.location.origin) return window.location.origin;
        return window.location.protocol + '//' + window.location.host;
    }

    function resolveUrl(inputUrl) {
        var raw = String(inputUrl || '');
        var absolute = raw;
        var hasScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(raw);
        if (!hasScheme && raw.indexOf('//') !== 0) {
            if (raw.slice(0, 1) === '/') {
                absolute = getCurrentOrigin() + raw;
            } else {
                absolute = getCurrentOrigin() + getCurrentDirname() + raw;
            }
        }

        var parser = document.createElement('a');
        parser.href = absolute;
        var pathname = parser.pathname || '/';
        if (pathname.slice(0, 1) !== '/') pathname = '/' + pathname;

        return {
            host: parser.host || window.location.host,
            pathname: pathname,
            search: parser.search || ''
        };
    }

    function cloneInitObject(source) {
        var out = {};
        if (!source) return out;
        for (var k in source) {
            if (Object.prototype.hasOwnProperty.call(source, k)) {
                out[k] = source[k];
            }
        }
        return out;
    }

    function normalizeHeaders(headers) {
        var out = {};
        if (!headers) return out;

        if (typeof Headers !== 'undefined' && headers instanceof Headers) {
            headers.forEach(function (v, k) { out[k] = v; });
            return out;
        }

        if (Array.isArray(headers)) {
            headers.forEach(function (pair) {
                if (pair && pair.length >= 2) out[pair[0]] = pair[1];
            });
            return out;
        }

        for (var k in headers) {
            if (Object.prototype.hasOwnProperty.call(headers, k)) {
                out[k] = headers[k];
            }
        }
        return out;
    }

    function isHybrid() {
        return (typeof isHybridApp === 'function' && isHybridApp());
    }

    function isAssistantBootstrapUrl(url) {
        var raw = String(url || '');
        return /\/assistant\/bootstrap(?:\?|$)/.test(raw);
    }

    function getSignerCommon() {
        var signer = window.HanSigCommon;
        if (!signer || typeof signer.buildSigHeadersFromParts !== 'function') return null;
        return signer;
    }

    function waitForSignerCommon(timeoutMs) {
        var signer = getSignerCommon();
        if (signer) return Promise.resolve(signer);
        var maxWait = parseInt(timeoutMs, 10);
        if (!maxWait || maxWait < SIGNER_WAIT_STEP_MS) maxWait = SIGNER_WAIT_TIMEOUT_MS;

        return new Promise(function (resolve) {
            var elapsed = 0;
            var timer = window.setInterval(function () {
                var readySigner = getSignerCommon();
                if (readySigner) {
                    window.clearInterval(timer);
                    resolve(readySigner);
                    return;
                }
                elapsed += SIGNER_WAIT_STEP_MS;
                if (elapsed >= maxWait) {
                    window.clearInterval(timer);
                    resolve(null);
                }
            }, SIGNER_WAIT_STEP_MS);
        });
    }

    function buildSigHeaders(url, method) {
        if (!window.crypto || !window.crypto.subtle) return Promise.resolve(null);
        var waitTimeout = isAssistantBootstrapUrl(url) ? SIGNER_WAIT_BOOTSTRAP_TIMEOUT_MS : SIGNER_WAIT_TIMEOUT_MS;
        return waitForSignerCommon(waitTimeout).then(function (signer) {
            if (!signer) return null;

            var u = resolveUrl(url);
            var payload = {
                method: String(method || 'GET').toUpperCase(),
                host: u.host,
                path: u.pathname,
                query: (u.search ? u.search.slice(1) : ''),
                gw: (typeof signer.getCookieRaw === 'function')
                    ? signer.getCookieRaw(SIG_COOKIE_NAME)
                    : undefined
            };

            if (!isHybrid() && typeof signer.ensureRegisterOnce === 'function') {
                return Promise.resolve()
                    .then(function () {
                        return signer.ensureRegisterOnce();
                    })
                    .then(function () {
                        return signer.buildSigHeadersFromParts(payload);
                    });
            }

            return Promise.resolve(signer.buildSigHeadersFromParts(payload));
        });
    }

    window.fetch = function (input, init) {
        var reqUrl = '';
        var reqMethod = 'GET';
        var reqHeaders = {};

        if (typeof Request !== 'undefined' && input instanceof Request) {
            reqUrl = input.url || '';
            reqMethod = input.method || 'GET';
            reqHeaders = normalizeHeaders(input.headers);
        } else {
            reqUrl = String(input || '');
            reqMethod = (init && init.method) ? init.method : 'GET';
            reqHeaders = normalizeHeaders(init && init.headers);
        }

        if (!shouldSign(reqUrl, reqHeaders)) {
            return _fetch(input, init);
        }

        return Promise.resolve()
            .then(function () {
                return buildSigHeaders(reqUrl, reqMethod);
            })
            .then(function (sigHeaders) {
                if (!sigHeaders) {
                    return _fetch(input, init);
                }

                var nextInit = cloneInitObject(init || {});
                var mergedHeaders = normalizeHeaders(nextInit.headers);
                for (var k in sigHeaders) {
                    if (Object.prototype.hasOwnProperty.call(sigHeaders, k)) {
                        mergedHeaders[k] = sigHeaders[k];
                    }
                }
                nextInit.headers = mergedHeaders;

                if (typeof Request !== 'undefined' && input instanceof Request) {
                    var req = new Request(input, nextInit);
                    return _fetch(req);
                }
                return _fetch(input, nextInit);
            })
            .catch(function () {
                // Signature failure should not block request by default.
                return _fetch(input, init);
            });
    };

    window.fetch.__hanSigWrapped = true;
})();

(function () {
    if (window.__HB_AI_WIDGET2__) return;
    window.__HB_AI_WIDGET2__ = true;

    var STORAGE_KEY = 'hb_ai_widget_conversations_v2';
    var MAX_UI_CONVERSATIONS = 40;
    var MAX_MESSAGES_PER_CONVERSATION = 200;
    var MAX_REQUEST_HISTORY = 12;
    var MAX_REQUEST_SUMMARY_LINES = 28;
    var MAX_REQUEST_SUMMARY_LINE_CHARS = 220;
    var MAX_REQUEST_SUMMARY_CHARS = 3600;
    var MAX_REQUEST_SUMMARY_HEAD_LINES = 6;
    var MAX_AUTO_WORKLOG_ROWS = 180;
    var MAX_AUTO_WORKLOG_SCOPES = 8;
    var MAX_AUTO_WORKLOG_DETAIL_FALLBACK_ITEMS = 36;
    var MY_DIARY_PAGE_SIZE = 200;
    var DEPT_DIARY_PAGE_SIZE = 200;
    var DIARY_SCOPE_CACHE_TTL_MS = 3 * 60 * 1000;
    var MAX_AUTO_WORKLOG_DETAIL_ITEMS = 140;
    var MAX_WORKLOG_DETAIL_CHARS = 9000;
    var DIARY_SCOPE_ALIAS_MAP = [
        { a: 'groupware', b: '그룹웨어' },
        { a: 'software', b: '소프트웨어' },
        { a: 'support', b: '지원' },
        { a: 'server', b: '서버' },
        { a: 'sales', b: '영업' },
        { a: 'mobile', b: '모바일' },
        { a: 'linux', b: '리눅스' }
    ];
    var MAIL_LIST_PAGE_SIZE = 100;
    var MAX_MAIL_LIST_ITEMS = 100;
    var MAX_MAIL_DETAIL_ITEMS = 100;
    var MAX_MAIL_DETAIL_CHARS = 1400;
    var MAX_CUSTOMER_SEARCH_ROWS = 30;
    var MAX_CUSTOMER_ACTIVITY_CUSTOMERS = 30;
    var MAX_CUSTOMER_ACTIVITY_ITEMS = 20;
    var CUSTOMER_ACTIVITY_LIMIT = 100;
    var CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD = 10000;
    var CUSTOMER_ACTIVITY_TYPES_ALL = ['call', 'task', 'meeting', 'appointment', 'post', 'email', 'fax', 'sms', 'ticket', 'livechat'];
    var CUSTOMER_DETAIL_FETCH_CONCURRENCY = 6;
    var MAX_CUSTOMER_DETAIL_PREVIEW_CHARS = 500;
    var MAX_CUSTOMER_LIVECHAT_PREVIEW_CHARS = 12000;
    var MAX_CUSTOMER_LIVECHAT_PREVIEW_ITEMS = 300;
    var MAX_CUSTOMER_CALL_RECORD_TEXT_CHARS = 900;
    var MAX_CUSTOMER_CALL_RECORD_SUMMARY_CHARS = 500;
    var REMOTE_SYNC_DEBOUNCE_MS = 900;
    var REMOTE_SYNC_MIN_INTERVAL_MS = 8000;
    var REMOTE_SYNC_BACKOFF_BASE_MS = 30000;
    var REMOTE_SYNC_BACKOFF_MAX_MS = 300000;
    var SERVER_WAIT_PULSE_INTERVAL_MS = 3000;
    var MAX_WEB_CONTEXT_CHARS = 2400;
    var MAX_MENU_SEARCH_ROWS = 30;
    var DEFAULT_BROWSER_AUTO_SCAN_PAGES = 1;
    var MAX_BROWSER_AUTO_SCAN_PAGES = 5;
    var MAX_MENU_DETAIL_ITEMS = 10;
    var MAX_MENU_DETAIL_CHARS = 1800;
    var MAX_ATTACHMENTS = 4;
    var MAX_ATTACHMENT_SIZE_BYTES = 5 * 1024 * 1024;
    var MAX_ATTACHMENT_DATA_URL_CHARS = 8 * 1024 * 1024;
    var MAX_INLINE_MARKDOWN_CACHE_ITEMS = 600;
    var MAX_MARKDOWN_HTML_CACHE_ITEMS = 240;
    // Keep progress/system messages after request completion.
    var KEEP_EPHEMERAL_PROGRESS_MESSAGES = true;
    var PANEL_LAYOUT_KEY = 'hb_ai_widget_layout_v1';
    var FAB_LAYOUT_KEY = 'hb_ai_widget_fab_layout_v1';
    var LAST_USED_MODEL_KEY = 'hb_ai_widget_last_used_model_v1';
    var PROGRESS_VERBOSITY_KEY = 'hb_ai_widget_progress_verbosity_v1';
    var MCP_SSE_DEBUG_KEY = 'hb_ai_widget_mcp_sse_debug_v1';
    var PANEL_MIN_WIDTH = 340;
    var PANEL_MIN_HEIGHT = 420;
    var PANEL_VIEW_MARGIN = 8;
    var FAB_VIEW_MARGIN = 8;
    var MAIL_DETAIL_FETCH_CONCURRENCY = 6;
    var WORKLOG_DETAIL_FETCH_CONCURRENCY = 6;

    var REASONING_LEVELS = [
        { value: 'low', label: 'Low', labelKey: 'assistant.ui.reasoning.low' },
        { value: 'medium', label: 'Medium', labelKey: 'assistant.ui.reasoning.medium' },
        { value: 'high', label: 'High', labelKey: 'assistant.ui.reasoning.high' },
        { value: 'xhigh', label: 'Very High', labelKey: 'assistant.ui.reasoning.xhigh' }
    ];

    var MODEL_OPTIONS = [
        { key: 'openai:gpt-5.3-codex', provider: 'openai', model: 'gpt-5.3-codex', label: 'GPT-5.3-Codex', reasoning_levels: ['low', 'medium', 'high', 'xhigh'], default_reasoning: 'medium' },
        { key: 'openai:gpt-5.3-codex-spark', provider: 'openai', model: 'gpt-5.3-codex-spark', label: 'GPT-5.3-Codex-Spark', reasoning_levels: ['low', 'medium', 'high', 'xhigh'], default_reasoning: 'medium' },
        { key: 'openai:gpt-5.2-codex', provider: 'openai', model: 'gpt-5.2-codex', label: 'GPT-5.2-Codex', reasoning_levels: ['low', 'medium', 'high', 'xhigh'], default_reasoning: 'medium' },
        { key: 'openai:gpt-5.1-codex-max', provider: 'openai', model: 'gpt-5.1-codex-max', label: 'GPT-5.1-Codex-Max', reasoning_levels: ['low', 'medium', 'high', 'xhigh'], default_reasoning: 'medium' },
        { key: 'openai:gpt-5.2', provider: 'openai', model: 'gpt-5.2', label: 'GPT-5.2', reasoning_levels: ['low', 'medium', 'high', 'xhigh'], default_reasoning: 'medium' },
        { key: 'openai:gpt-5.1-codex-mini', provider: 'openai', model: 'gpt-5.1-codex-mini', label: 'GPT-5.1-Codex-Mini', reasoning_levels: ['low', 'medium'], default_reasoning: 'medium' },
        { key: 'google:gemini-3-pro-preview', provider: 'google', model: 'gemini-3-pro-preview', label: 'Gemini 3 Pro Preview', reasoning_levels: [] },
        { key: 'google:gemini-3-flash-preview', provider: 'google', model: 'gemini-3-flash-preview', label: 'Gemini 3 Flash Preview', reasoning_levels: [] },
        { key: 'google:gemini-2.5-pro', provider: 'google', model: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro', reasoning_levels: [] },
        { key: 'ollama:default', provider: 'ollama', model: '', label: 'Ollama (Local)', reasoning_levels: [] },
        { key: 'vllm:default', provider: 'vllm', model: '', label: 'vLLM (Local)', reasoning_levels: [] },
        { key: 'local_openai:default', provider: 'local_openai', model: '', label: 'OpenAI-Compatible Local', reasoning_levels: [] }
    ];
    var BASE_MODEL_OPTIONS = MODEL_OPTIONS.slice(0);

    function installLegacyPolyfills() {
        if (!Date.now) {
            Date.now = function () {
                return new Date().getTime();
            };
        }
        if (!Array.isArray) {
            Array.isArray = function (value) {
                return Object.prototype.toString.call(value) === '[object Array]';
            };
        }
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }

        if (typeof window.Promise !== 'function') {
            var PENDING = 0;
            var FULFILLED = 1;
            var REJECTED = 2;

            function asyncCall(fn) {
                window.setTimeout(fn, 0);
            }

            function isFn(fn) {
                return typeof fn === 'function';
            }

            function settlePromise(promise, state, value) {
                if (promise._state !== PENDING) return;
                if (state === FULFILLED && value === promise) {
                    state = REJECTED;
                    value = new TypeError('Cannot resolve promise with itself');
                }
                if (state === FULFILLED && value && (typeof value === 'object' || isFn(value))) {
                    var then = null;
                    try {
                        then = value.then;
                    } catch (e) {
                        settlePromise(promise, REJECTED, e);
                        return;
                    }
                    if (isFn(then)) {
                        var called = false;
                        try {
                            then.call(value, function (nextValue) {
                                if (called) return;
                                called = true;
                                settlePromise(promise, FULFILLED, nextValue);
                            }, function (reason) {
                                if (called) return;
                                called = true;
                                settlePromise(promise, REJECTED, reason);
                            });
                        } catch (e2) {
                            if (!called) {
                                settlePromise(promise, REJECTED, e2);
                            }
                        }
                        return;
                    }
                }

                promise._state = state;
                promise._value = value;
                flushPromiseHandlers(promise);
            }

            function flushPromiseHandlers(promise) {
                if (!promise._handlers.length) return;
                asyncCall(function () {
                    while (promise._handlers.length) {
                        handlePromise(promise, promise._handlers.shift());
                    }
                });
            }

            function handlePromise(promise, handler) {
                if (promise._state === PENDING) {
                    promise._handlers.push(handler);
                    return;
                }
                asyncCall(function () {
                    var callback = promise._state === FULFILLED ? handler.onFulfilled : handler.onRejected;
                    if (!isFn(callback)) {
                        if (promise._state === FULFILLED) {
                            handler.resolve(promise._value);
                        } else {
                            handler.reject(promise._value);
                        }
                        return;
                    }
                    try {
                        var result = callback(promise._value);
                        handler.resolve(result);
                    } catch (e) {
                        handler.reject(e);
                    }
                });
            }

            function PromisePolyfill(executor) {
                if (!isFn(executor)) {
                    throw new TypeError('Promise executor is not a function');
                }
                this._state = PENDING;
                this._value = undefined;
                this._handlers = [];

                var self = this;
                function resolve(value) {
                    settlePromise(self, FULFILLED, value);
                }
                function reject(reason) {
                    settlePromise(self, REJECTED, reason);
                }

                try {
                    executor(resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }

            PromisePolyfill.prototype.then = function (onFulfilled, onRejected) {
                var self = this;
                return new PromisePolyfill(function (resolve, reject) {
                    handlePromise(self, {
                        onFulfilled: onFulfilled,
                        onRejected: onRejected,
                        resolve: resolve,
                        reject: reject
                    });
                });
            };

            PromisePolyfill.prototype['catch'] = function (onRejected) {
                return this.then(null, onRejected);
            };

            PromisePolyfill.resolve = function (value) {
                return new PromisePolyfill(function (resolve) {
                    resolve(value);
                });
            };

            PromisePolyfill.reject = function (reason) {
                return new PromisePolyfill(function (_, reject) {
                    reject(reason);
                });
            };

            PromisePolyfill.all = function (items) {
                return new PromisePolyfill(function (resolve, reject) {
                    if (!items || typeof items.length !== 'number') {
                        resolve([]);
                        return;
                    }
                    var len = items.length;
                    if (!len) {
                        resolve([]);
                        return;
                    }
                    var out = new Array(len);
                    var remaining = len;
                    var i;
                    for (i = 0; i < len; i++) {
                        (function (index) {
                            PromisePolyfill.resolve(items[index]).then(function (value) {
                                out[index] = value;
                                remaining--;
                                if (remaining === 0) resolve(out);
                            }, reject);
                        })(i);
                    }
                });
            };

            window.Promise = PromisePolyfill;
        }

        if (typeof window.fetch !== 'function' && typeof window.XMLHttpRequest === 'function') {
            function parseHeaderMap(rawHeaders) {
                var map = {};
                if (!rawHeaders) return map;
                var lines = rawHeaders.replace(/\r/g, '').split('\n');
                var i;
                for (i = 0; i < lines.length; i++) {
                    var line = lines[i] || '';
                    if (!line) continue;
                    var sep = line.indexOf(':');
                    if (sep <= 0) continue;
                    var key = line.substring(0, sep).toLowerCase();
                    var value = line.substring(sep + 1).replace(/^\s+|\s+$/g, '');
                    if (!key) continue;
                    if (map[key]) {
                        map[key] += ', ' + value;
                    } else {
                        map[key] = value;
                    }
                }
                return map;
            }

            window.fetch = function (url, options) {
                return new window.Promise(function (resolve, reject) {
                    var requestUrl = url == null ? '' : String(url);
                    var opts = options || {};
                    var method = (opts.method || 'GET').toUpperCase();
                    var xhr = new window.XMLHttpRequest();

                    try {
                        xhr.open(method, requestUrl, true);
                    } catch (openErr) {
                        reject(openErr);
                        return;
                    }

                    if (opts.credentials === 'include') {
                        try {
                            xhr.withCredentials = true;
                        } catch (e) {
                            // ignore
                        }
                    }

                    var headers = opts.headers || {};
                    var key;
                    if (headers && typeof headers.length === 'number') {
                        var i;
                        for (i = 0; i < headers.length; i++) {
                            var pair = headers[i];
                            if (!pair || typeof pair.length !== 'number' || pair.length < 2) continue;
                            try {
                                xhr.setRequestHeader(String(pair[0]), String(pair[1]));
                            } catch (setErr) {
                                // ignore
                            }
                        }
                    } else {
                        for (key in headers) {
                            if (!Object.prototype.hasOwnProperty.call(headers, key)) continue;
                            try {
                                xhr.setRequestHeader(key, headers[key]);
                            } catch (setErr2) {
                                // ignore
                            }
                        }
                    }

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState !== 4) return;
                        var status = xhr.status === 1223 ? 204 : xhr.status;
                        var bodyText = xhr.responseText || '';
                        var headerMap = parseHeaderMap(xhr.getAllResponseHeaders ? xhr.getAllResponseHeaders() : '');
                        var response = {
                            ok: status >= 200 && status < 300,
                            status: status,
                            statusText: xhr.statusText || '',
                            url: requestUrl,
                            headers: {
                                get: function (name) {
                                    var lookup = String(name || '').toLowerCase();
                                    return Object.prototype.hasOwnProperty.call(headerMap, lookup) ? headerMap[lookup] : null;
                                }
                            },
                            text: function () {
                                return window.Promise.resolve(bodyText);
                            },
                            json: function () {
                                return new window.Promise(function (resolveJson, rejectJson) {
                                    try {
                                        resolveJson(JSON.parse(bodyText));
                                    } catch (jsonErr) {
                                        rejectJson(jsonErr);
                                    }
                                });
                            }
                        };
                        resolve(response);
                    };

                    xhr.onerror = function () {
                        reject(new Error('Network request failed'));
                    };

                    xhr.ontimeout = function () {
                        reject(new Error('Network request timed out'));
                    };

                    try {
                        xhr.send(typeof opts.body === 'undefined' ? null : opts.body);
                    } catch (sendErr) {
                        reject(sendErr);
                    }
                });
            };
        }
    }

    installLegacyPolyfills();

    function detectBasePath() {
        // 1) explicit override
        if (window && typeof window.HB_ASSISTANT_BASE_PATH === 'string') {
            var override = window.HB_ASSISTANT_BASE_PATH.trim();
            if (override) {
                if (override.slice(-1) !== '/') override += '/';
                if (override.slice(0, 1) !== '/') override = '/' + override;
                if (/^\/v3(?:\/|$)/i.test(override)) return '/ngw/';
                return override;
            }
        }

        // 2) shared groupware config (same convention as main app)
        var gwconf = window && window.GWCONF ? window.GWCONF : null;
        if (gwconf && typeof gwconf === 'object') {
            var gwUrl = gwconf.groupwareUrl || gwconf.groupware_url || gwconf.groupwareBaseUrl || '';
            if (typeof gwUrl === 'string' && gwUrl) {
                var trimmed = gwUrl.trim();
                try {
                    var parser = document.createElement('a');
                    parser.href = trimmed;
                    var gwPath = parser.pathname || '';
                    if (gwPath) {
                        if (gwPath.slice(-1) !== '/') gwPath += '/';
                        if (gwPath.slice(0, 1) !== '/') gwPath = '/' + gwPath;
                        if (/^\/v3(?:\/|$)/i.test(gwPath)) return '/ngw/';
                        return gwPath;
                    }
                } catch (e) {
                    // ignore and continue fallback chain
                }
            }
        }

        // 3) path-based detection
        var path = window.location.pathname || '/';
        var appPos = path.indexOf('/app/');
        if (appPos >= 0) return path.substring(0, appPos + 1);

        // 4) ngw root detection
        var ngwPos = path.indexOf('/ngw/');
        if (ngwPos >= 0) return path.substring(0, ngwPos + 5);

        // 5) v3 shell routes use groupware backend under /ngw
        if (/^\/v3(?:\/|$)/i.test(path)) return '/ngw/';

        // 6) derive from script src as last resort
        var currentScript = document.currentScript;
        if (currentScript && currentScript.getAttribute) {
            var src = currentScript.getAttribute('src') || '';
            if (src) {
                var cleanSrc = src.split('#')[0].split('?')[0];
                var jsPos = cleanSrc.indexOf('/js/');
                if (jsPos >= 0) {
                    var fromScript = cleanSrc.substring(0, jsPos + 1);
                    if (fromScript.slice(0, 1) !== '/') fromScript = '/' + fromScript;
                    return fromScript;
                }
            }
        }

        // 7) final fallback
        return '/';
    }

    function now() {
        return new Date().getTime();
    }

    function collapseText(value) {
        if (value === null || typeof value === 'undefined') return '';
        var text = (typeof value === 'string') ? value : String(value);
        return text.replace(/\s+/g, ' ').trim();
    }

    function normalizeAssistantLang(value) {
        var code = collapseText(value || '').toLowerCase();
        if (!code) return '';
        code = code.replace(/_/g, '-');
        if (code.indexOf('ko') === 0 || code === 'kr') return 'ko';
        if (code.indexOf('en') === 0) return 'en';
        if (code.indexOf('vi') === 0) return 'vi';
        if (code.indexOf('ja') === 0 || code.indexOf('jp') === 0) return 'jp';
        if (code === 'zh-tw' || code === 'zh-hant') return 'ch';
        if (code === 'zh-cn' || code === 'zh-hans' || code.indexOf('zh') === 0) return 'zh';
        if (code.indexOf('th') === 0) return 'th';
        if (code.indexOf('pt') === 0) return 'pt';
        if (code.indexOf('id') === 0 || code.indexOf('in') === 0) return 'id';
        if (code.indexOf('es') === 0) return 'es';
        if (code.indexOf('de') === 0) return 'de';
        if (code.indexOf('ph') === 0 || code.indexOf('tl') === 0 || code.indexOf('fil') === 0) return 'ph';
        return '';
    }

    function resolveAssistantLangCode() {
        var candidates = [];
        var gwconf = window && window.GWCONF ? window.GWCONF : null;
        if (gwconf && typeof gwconf === 'object') {
            candidates.push(gwconf.lang);
            candidates.push(gwconf.language);
            candidates.push(gwconf.lang_code);
            candidates.push(gwconf.langCode);
        }
        if (document && document.documentElement) {
            candidates.push(document.documentElement.lang);
        }
        if (navigator) {
            candidates.push(navigator.language);
            if (navigator.languages && navigator.languages.length) {
                candidates.push(navigator.languages[0]);
            }
        }

        var i;
        for (i = 0; i < candidates.length; i++) {
            var normalized = normalizeAssistantLang(candidates[i]);
            if (normalized) return normalized;
        }
        return 'en';
    }

    function normalizeAssistantI18nRows(raw) {
        var out = {};
        if (!raw) return out;

        if (Array.isArray(raw)) {
            var i;
            for (i = 0; i < raw.length; i++) {
                var row = raw[i];
                if (!row || typeof row !== 'object') continue;
                var key = collapseText(row.key || row.key_lang || row.id || '');
                if (!key) continue;
                var value = row.value;
                if (typeof value !== 'string') value = row.text;
                if (typeof value !== 'string') value = row.label;
                if (typeof value !== 'string') value = row.message;
                if (typeof value !== 'string') continue;
                out[key] = value;
            }
            return out;
        }

        if (typeof raw !== 'object') return out;
        var keyName;
        for (keyName in raw) {
            if (!Object.prototype.hasOwnProperty.call(raw, keyName)) continue;
            if (typeof raw[keyName] === 'string') {
                out[keyName] = raw[keyName];
            }
        }
        return out;
    }

    function tr(key, fallback) {
        var k = collapseText(key || '');
        if (k && state && state.i18n && typeof state.i18n[k] === 'string' && state.i18n[k] !== '') {
            return state.i18n[k];
        }
        // Fallback text is intentionally ignored: missing translation should expose key.
        return k;
    }

    function trf(key, replacements) {
        var text = tr(key);
        var map = replacements && typeof replacements === 'object' ? replacements : {};
        var name;
        for (name in map) {
            if (!Object.prototype.hasOwnProperty.call(map, name)) continue;
            var token = '{' + name + '}';
            var value = map[name];
            if (value == null) value = '';
            text = text.split(token).join(String(value));
        }
        return text;
    }

    function trff(key, fallback, replacements) {
        var text = tr(key, fallback);
        var map = replacements && typeof replacements === 'object' ? replacements : {};
        var name;
        for (name in map) {
            if (!Object.prototype.hasOwnProperty.call(map, name)) continue;
            var token = '{' + name + '}';
            var value = map[name];
            if (value == null) value = '';
            text = text.split(token).join(String(value));
        }
        return text;
    }

    function normalizeProgressVerbosity(value) {
        var text = collapseText(value || '').toLowerCase();
        if (text === 'minimal' || text === 'min' || text === 'low') return 'minimal';
        if (text === 'normal' || text === 'medium' || text === 'default') return 'normal';
        if (text === 'detailed' || text === 'detail' || text === 'verbose' || text === 'high') return 'detailed';
        return 'detailed';
    }

    function loadProgressVerbosity() {
        var value = '';
        try {
            if (window && window.localStorage) {
                value = window.localStorage.getItem(PROGRESS_VERBOSITY_KEY) || '';
            }
        } catch (e) {
            value = '';
        }
        if (!value && window && typeof window.HBAI_PROGRESS_VERBOSITY === 'string') {
            value = window.HBAI_PROGRESS_VERBOSITY;
        }
        return normalizeProgressVerbosity(value || 'detailed');
    }

    function saveProgressVerbosity(level) {
        var normalized = normalizeProgressVerbosity(level || '');
        try {
            if (window && window.localStorage) {
                window.localStorage.setItem(PROGRESS_VERBOSITY_KEY, normalized);
            }
        } catch (e) {
            // ignore storage errors
        }
        return normalized;
    }

    function loadMcpSseDebugFlag() {
        var value = '';
        try {
            if (window && window.localStorage) {
                value = window.localStorage.getItem(MCP_SSE_DEBUG_KEY) || '';
            }
        } catch (e) {
            value = '';
        }
        if (!value && window && typeof window.HBAI_MCP_SSE_DEBUG !== 'undefined') {
            value = window.HBAI_MCP_SSE_DEBUG;
        }
        return !!toBooleanFlag(value);
    }

    function saveMcpSseDebugFlag(enabled) {
        var normalized = !!toBooleanFlag(enabled);
        try {
            if (window && window.localStorage) {
                window.localStorage.setItem(MCP_SSE_DEBUG_KEY, normalized ? '1' : '0');
            }
        } catch (e) {
            // ignore storage errors
        }
        return normalized;
    }

    function normalizeProgressMessageText(text) {
        var raw = text == null ? '' : String(text);
        if (!raw) return '';
        var lines = raw.replace(/\r\n?/g, '\n').split('\n');
        var out = [];
        var i;
        for (i = 0; i < lines.length; i++) {
            var line = String(lines[i] || '')
                .replace(/[ \t\f\v]+/g, ' ')
                .replace(/^\s+|\s+$/g, '');
            if (!line) continue;
            out.push(line);
        }
        return out.join('\n');
    }

    function normalizeProgressDetailText(text) {
        var raw = text == null ? '' : String(text);
        if (!raw) return '';
        var lines = raw.replace(/\r\n?/g, '\n').split('\n');
        var out = [];
        var blankRun = 0;
        var i;
        for (i = 0; i < lines.length; i++) {
            var line = String(lines[i] || '').replace(/[ \t\f\v]+$/g, '');
            if (!line.replace(/\s+/g, '')) {
                blankRun++;
                if (blankRun <= 1) {
                    out.push('');
                }
                continue;
            }
            blankRun = 0;
            out.push(line);
        }
        return out.join('\n').replace(/^\n+|\n+$/g, '');
    }

    function addProgressMessage(conversationId, text, level, meta) {
        if (!conversationId) return;
        var message = normalizeProgressMessageText(text || '');
        if (!message) return;
        var opts = { uiTone: 'subtle' };
        var row = meta && typeof meta === 'object' ? meta : {};
        var mergeKey = collapseText(row.mergeKey || '').toLowerCase();
        if (mergeKey) opts.mergeKey = mergeKey;
        var progressPulse = row.progressPulse === true || toBooleanFlag(row.progressPulse);
        if (progressPulse) {
            opts.progressPulse = true;
        } else {
            opts.clearProgressPulse = true;
        }
        if (toBooleanFlag(row.progressGroupHeader)) {
            opts.progressGroupHeader = true;
            if (row.progressGroupCollapsed === true || toBooleanFlag(row.progressGroupCollapsed)) {
                opts.progressGroupCollapsed = true;
            }
        }
        var collapsibleDetail = normalizeProgressDetailText(row.collapsibleDetail || '');
        if (collapsibleDetail) {
            opts.collapsibleDetail = collapsibleDetail;
            var collapsibleTitle = collapseText(row.collapsibleTitle || '');
            if (collapsibleTitle) opts.collapsibleTitle = collapsibleTitle;
            if (row.collapsibleCollapsed === true || toBooleanFlag(row.collapsibleCollapsed)) {
                opts.collapsibleCollapsed = true;
            }
        }
        if (!toBooleanFlag(row.persist)) {
            opts.progressEphemeral = true;
        }
        addConversationMessage('system', message, conversationId, opts);
    }

    function objectValuesArray(value) {
        if (!value || typeof value !== 'object' || Array.isArray(value)) return [];
        var out = [];
        var key;
        for (key in value) {
            if (!Object.prototype.hasOwnProperty.call(value, key)) continue;
            out.push(value[key]);
        }
        return out;
    }

    function truncateText(value, maxLen) {
        var text = collapseText(value);
        if (text.length <= maxLen) return text;
        return text.substring(0, maxLen) + '...';
    }

    function escapeHtml(value) {
        return (value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function toBooleanFlag(value) {
        if (value === true || value === 1 || value === '1') return true;
        var text = collapseText(value || '').toLowerCase();
        if (!text) return false;
        return text === 'true' || text === 'yes' || text === 'y' || text === 'on';
    }

    function sanitizeIntentKeyword(value, maxLength) {
        var text = collapseText(value || '');
        if (!text) return '';
        text = text.replace(/^["'`]+|["'`]+$/g, '').trim();
        var limit = parseInt(maxLength, 10);
        if (isNaN(limit) || limit < 1) limit = 100;
        if (text.length > limit) text = text.substring(0, limit);
        return text;
    }

    function sanitizeCustomerKeyword(keyword) {
        var text = collapseText(keyword || '');
        if (!text) return '';
        text = text
            .replace(/^[\s"'`\[\](){}<>]+/, '')
            .replace(/[\s"'`\[\](){}<>]+$/, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (text.length > 80) text = text.substring(0, 80);
        return text;
    }

    function sanitizeCustomerIssueKeyword(keyword) {
        var text = collapseText(keyword || '');
        if (!text) return '';
        text = text
            .replace(/^[\s"'`\[\](){}<>]+/, '')
            .replace(/[\s"'`\[\](){}<>]+$/, '')
            .replace(/\s+/g, ' ')
            .trim();
        if (text.length > 120) text = text.substring(0, 120);
        return text;
    }

    function normalizeCustomerActivityTypesCsv(value) {
        var raw = collapseText(value || '').toLowerCase();
        if (!raw) return '';
        var parts = raw.split(/[,\s|;]+/);
        var synonyms = {
            calls: 'call',
            phone: 'call',
            phones: 'call',
            chat: 'livechat',
            'live-chat': 'livechat',
            'live_chat': 'livechat',
            livechats: 'livechat',
            'e-mail': 'email',
            emails: 'email',
            tickets: 'ticket'
        };
        var allowMap = {};
        var i;
        for (i = 0; i < CUSTOMER_ACTIVITY_TYPES_ALL.length; i++) {
            allowMap[CUSTOMER_ACTIVITY_TYPES_ALL[i]] = true;
        }
        var seen = {};
        var out = [];
        for (i = 0; i < parts.length; i++) {
            var token = collapseText(parts[i] || '').toLowerCase();
            if (!token) continue;
            token = token.replace(/[^a-z_-]+/g, '');
            if (!token) continue;
            if (Object.prototype.hasOwnProperty.call(synonyms, token)) {
                token = synonyms[token];
            }
            if (!allowMap[token] || seen[token]) continue;
            seen[token] = true;
            out.push(token);
        }
        return out.join(',');
    }

    function sanitizeActionPlanOperation(value) {
        var text = collapseText(value || '').toLowerCase();
        if (!text) return 'search';
        if (/^(search|find|lookup|query|list)$/.test(text)) return 'search';
        if (/^(view|detail|open|read|inspect)$/.test(text)) return 'view';
        if (/^(summary|summarize|aggregate|report|stats|analyze)$/.test(text)) return 'summary';
        return 'search';
    }

    function normalizeActionPlanSource(value, defaultSource) {
        var text = collapseText(value || '').toLowerCase();
        if (!text) text = collapseText(defaultSource || '').toLowerCase();
        if (!text) text = 'browser_ajax';
        if (/^(browser_ajax|browser|ajax|client)$/.test(text)) return 'browser_ajax';
        if (/^(mcp|mcp_server|mcp_bridge)$/.test(text)) return 'mcp';
        if (/^(server_external|external|web|server)$/.test(text)) return 'server_external';
        return 'browser_ajax';
    }

    function sanitizeActionPlanMenuKey(value, allowedKeys) {
        var text = collapseText(value || '').toLowerCase();
        if (!text) return '';
        text = text.replace(/[^a-z0-9_-]+/g, '').replace(/^[_-]+|[_-]+$/g, '');
        if (!text) return '';
        if (text.length > 40) text = text.substring(0, 40);
        var keys = Array.isArray(allowedKeys) ? allowedKeys : [];
        if (keys.length && keys.indexOf(text) < 0) return '';
        return text;
    }

    function normalizeActionPlanParams(value, operation) {
        var params = (value && typeof value === 'object' && !Array.isArray(value)) ? value : {};
        var out = {};

        function parseBoundedInt(rawValue, min, max, fallbackValue) {
            var parsed = parseInt(rawValue, 10);
            if (isNaN(parsed)) return fallbackValue;
            if (typeof min === 'number' && parsed < min) parsed = min;
            if (typeof max === 'number' && parsed > max) parsed = max;
            return parsed;
        }

        if (params.keyword) {
            var keyword = sanitizeIntentKeyword(params.keyword, 120);
            if (keyword) out.keyword = keyword;
        }
        if (params.issue_keyword || params.issue) {
            var issueKeyword = sanitizeCustomerIssueKeyword(params.issue_keyword || params.issue || '');
            if (issueKeyword) out.issue_keyword = issueKeyword;
        }
        if (params.activity_types || params.activityTypes) {
            var activityTypes = normalizeCustomerActivityTypesCsv(params.activity_types || params.activityTypes || '');
            if (activityTypes) out.activity_types = activityTypes;
        }
        if (Object.prototype.hasOwnProperty.call(params, 'has_period')) {
            out.has_period = toBooleanFlag(params.has_period);
        }
        if (params.query) {
            var query = sanitizeIntentKeyword(params.query, 120);
            if (query) out.query = query;
        }
        if (params.id) {
            var id = sanitizeIntentKeyword(params.id, 160);
            if (id) out.id = id;
        }
        if (params.folder) {
            var folder = sanitizeIntentKeyword(params.folder, 120);
            if (folder) out.folder = folder;
        }
        if (params.btype) {
            var btype = sanitizeIntentKeyword(params.btype, 120);
            if (btype) out.btype = btype;
        }
        if (params.title) {
            var title = sanitizeIntentKeyword(params.title, 160);
            if (title) out.title = title;
        }
        if (params.writer) {
            var writer = sanitizeIntentKeyword(params.writer, 120);
            if (writer) out.writer = writer;
        }
        if (params.content) {
            var content = sanitizeIntentKeyword(params.content, 200);
            if (content) out.content = content;
        }
        if (params.file_name) {
            var fileName = sanitizeIntentKeyword(params.file_name, 160);
            if (fileName) out.file_name = fileName;
        }
        if (params.category) {
            var category = sanitizeIntentKeyword(params.category, 120);
            if (category) out.category = category;
        }
        if (params.url) {
            var url = collapseText(params.url || '');
            if (url.length > 1000) url = url.substring(0, 1000);
            if (url) out.url = url;
        }
        if (params.target_board) {
            var targetBoard = sanitizeIntentKeyword(params.target_board, 80);
            if (targetBoard) out.target_board = targetBoard;
        }
        if (Object.prototype.hasOwnProperty.call(params, 'need_detail')) {
            out.need_detail = toBooleanFlag(params.need_detail);
        }
        if (params.from_date) out.from_date = collapseText(params.from_date);
        if (params.to_date) out.to_date = collapseText(params.to_date);
        if (params.scope_type) {
            var scopeType = collapseText(params.scope_type).toLowerCase();
            if (scopeType) out.scope_type = scopeType;
        }
        if (params.scope_id) {
            var scopeId = collapseText(params.scope_id).toLowerCase();
            if (scopeId) out.scope_id = scopeId;
        }
        if (Array.isArray(params.scopes)) {
            var scopes = [];
            var scopeSeen = {};
            var i;
            for (i = 0; i < params.scopes.length; i++) {
                var row = params.scopes[i] || {};
                if (!row || typeof row !== 'object') continue;
                var t = collapseText(row.type || row.scope_type || '').toLowerCase();
                var id = collapseText(row.id || row.scope_id || '').toLowerCase();
                if (!t) continue;
                if (!id) {
                    if (t === 'progress') id = 'ireq';
                    else if (t === 'my' || t === 'complete') id = 'default';
                    else if (t === 'refer') id = 'rdocu';
                }
                if (!id) continue;
                var hash = t + '/' + id;
                if (scopeSeen[hash]) continue;
                scopeSeen[hash] = true;
                scopes.push({ type: t, id: id });
                if (scopes.length >= 8) break;
            }
            if (scopes.length) out.scopes = scopes;
        }

        var maxItems = parseBoundedInt(firstNonEmptyText(params.max_items, params.maxItems), 1, 200, 0);
        if (maxItems > 0) {
            out.max_items = maxItems;
        }
        var offset = parseBoundedInt(params.offset, 0, 1000000, -1);
        if (offset >= 0) {
            out.offset = offset;
        }
        var page = parseBoundedInt(params.page, 1, 1000000, -1);
        if (page >= 1) {
            out.page = page;
        }
        var limit = parseBoundedInt(firstNonEmptyText(params.limit, params.page_size, params.pageSize), 1, 500, 0);
        if (limit > 0) {
            out.limit = limit;
            out.page_size = limit;
        }
        var maxPages = parseBoundedInt(firstNonEmptyText(params.max_pages, params.maxPages), 1, 10, 0);
        if (maxPages > 0) {
            out.max_pages = maxPages;
        }

        if (sanitizeActionPlanOperation(operation) === 'view') {
            out.need_detail = true;
        }
        return out;
    }

    function escapeTextForContext(value) {
        return collapseText(value || '').replace(/[;\n\r]/g, ' ').trim();
    }

    function htmlToPlainText(html) {
        var source = html == null ? '' : String(html);
        if (!source) return '';
        try {
            if (window.DOMParser) {
                var doc = new window.DOMParser().parseFromString(source, 'text/html');
                return collapseText((doc && doc.body && doc.body.textContent) || '');
            }
            var div = document.createElement('div');
            div.innerHTML = source;
            return collapseText(div.textContent || div.innerText || '');
        } catch (e) {
            return collapseText(source.replace(/<[^>]+>/g, ' '));
        }
    }

    function normalizeStructuredTextBlock(value) {
        var source = value == null ? '' : String(value);
        if (!source) return '';
        var lines = source
            .replace(/\r\n?/g, '\n')
            .replace(/\u00a0/g, ' ')
            .split('\n');
        var out = [];
        var blankRun = 0;
        var i;
        for (i = 0; i < lines.length; i++) {
            var line = String(lines[i] || '').replace(/[ \t\f\v]+$/g, '');
            if (!line.replace(/\s+/g, '')) {
                blankRun++;
                if (blankRun <= 1) out.push('');
                continue;
            }
            blankRun = 0;
            out.push(line);
        }
        return out.join('\n').replace(/^\n+|\n+$/g, '');
    }

    function looksLikeHtmlContent(value) {
        var text = String(value == null ? '' : value).trim();
        if (!text) return false;
        if (text.indexOf('<') < 0 || text.indexOf('>') < 0) return false;
        var lower = text.toLowerCase();
        if (lower.indexOf('<!doctype html') >= 0) return true;
        return /<(html|body|div|span|p|br|table|thead|tbody|tr|td|th|ul|ol|li|blockquote|pre|code|a|img|article|section|header|footer|main|h[1-6]|strong|em|b|i)\b/i.test(text);
    }

    function repeatTextUnit(unit, count) {
        var text = String(unit || '');
        var num = parseInt(count, 10);
        if (!text || isNaN(num) || num < 1) return '';
        return new Array(num + 1).join(text);
    }

    function getHtmlNodeTagName(node) {
        if (!node || typeof node !== 'object') return '';
        var name = node.tagName || node.nodeName || '';
        return String(name || '').toLowerCase();
    }

    function isHtmlBlockTag(tag) {
        var name = String(tag || '').toLowerCase();
        return name === 'div'
            || name === 'section'
            || name === 'article'
            || name === 'main'
            || name === 'header'
            || name === 'footer'
            || name === 'aside'
            || name === 'nav'
            || name === 'form';
    }

    function splitMarkdownLines(content) {
        var text = normalizeStructuredTextBlock(content || '');
        if (!text) return [];
        var rawLines = text.split('\n');
        var out = [];
        var i;
        for (i = 0; i < rawLines.length; i++) {
            var line = String(rawLines[i] || '').trim();
            if (!line) continue;
            out.push(line);
        }
        return out;
    }

    function cleanupMarkdownText(raw) {
        var value = normalizeStructuredTextBlock(raw || '');
        if (!value) return '';
        var lines = value.split('\n');
        var out = [];
        var blankRun = 0;
        var inFence = false;
        var i;
        for (i = 0; i < lines.length; i++) {
            var line = String(lines[i] || '').replace(/[ \t]+$/g, '');
            var trimmed = line.trim();
            if (trimmed.indexOf('```') === 0) {
                inFence = !inFence;
                out.push(trimmed);
                blankRun = 0;
                continue;
            }
            if (!inFence) {
                line = line.replace(/[ \t\f\v]+/g, ' ');
                trimmed = line.trim();
                if (!trimmed) {
                    blankRun++;
                    if (blankRun <= 1) out.push('');
                    continue;
                }
                blankRun = 0;
                out.push(trimmed);
                continue;
            }
            out.push(line);
            blankRun = 0;
        }
        return out.join('\n').replace(/^\n+|\n+$/g, '');
    }

    function findHtmlAttr(node, key) {
        if (!node || !key) return '';
        try {
            if (typeof node.getAttribute === 'function') {
                var value = node.getAttribute(key);
                return value == null ? '' : String(value).trim();
            }
        } catch (e) {
            return '';
        }
        return '';
    }

    function hasHtmlParentTag(node, tag) {
        var target = String(tag || '').toLowerCase();
        if (!node || !target) return false;
        var current = node.parentNode;
        while (current) {
            if (getHtmlNodeTagName(current) === target) return true;
            current = current.parentNode;
        }
        return false;
    }

    function renderHtmlChildrenMarkdown(node, listDepth, inPre) {
        if (!node) return '';
        var out = [];
        var child = node.firstChild;
        while (child) {
            renderHtmlNodeMarkdown(out, child, listDepth, inPre);
            child = child.nextSibling;
        }
        return out.join('');
    }

    function writeHtmlListMarkdown(out, listNode, listDepth, ordered) {
        if (!out || !listNode) return;
        var number = 1;
        var child = listNode.firstChild;
        while (child) {
            if (child.nodeType === 1 && getHtmlNodeTagName(child) === 'li') {
                var content = cleanupMarkdownText(renderHtmlChildrenMarkdown(child, listDepth + 1, false));
                var lines = splitMarkdownLines(content);
                if (lines.length) {
                    var indent = repeatTextUnit('  ', listDepth);
                    var marker = ordered ? (number + '. ') : '- ';
                    var idx;
                    out.push(indent + marker + lines[0] + '\n');
                    for (idx = 1; idx < lines.length; idx++) {
                        out.push(indent + '   ' + lines[idx] + '\n');
                    }
                    number += 1;
                }
            }
            child = child.nextSibling;
        }
    }

    function renderHtmlTableMarkdown(tableNode) {
        if (!tableNode) return '';
        var rows = [];

        function walk(node) {
            if (!node) return;
            if (node.nodeType === 1 && getHtmlNodeTagName(node) === 'tr') {
                var row = [];
                var child = node.firstChild;
                while (child) {
                    if (child.nodeType === 1) {
                        var tag = getHtmlNodeTagName(child);
                        if (tag === 'th' || tag === 'td') {
                            var cell = cleanupMarkdownText(renderHtmlChildrenMarkdown(child, 0, false));
                            cell = cell.replace(/\n/g, '<br>').replace(/\|/g, '\\|');
                            row.push(String(cell || '').trim());
                        }
                    }
                    child = child.nextSibling;
                }
                if (row.length) rows.push(row);
                return;
            }
            var next = node.firstChild;
            while (next) {
                walk(next);
                next = next.nextSibling;
            }
        }

        walk(tableNode);
        if (!rows.length) return '';

        var maxCols = 0;
        var i;
        for (i = 0; i < rows.length; i++) {
            if (rows[i].length > maxCols) maxCols = rows[i].length;
        }
        if (maxCols < 1) return '';

        for (i = 0; i < rows.length; i++) {
            while (rows[i].length < maxCols) rows[i].push('');
        }

        var out = [];
        out.push('| ' + rows[0].join(' | ') + ' |\n');
        var separators = [];
        for (i = 0; i < maxCols; i++) separators.push('---');
        out.push('| ' + separators.join(' | ') + ' |\n');
        for (i = 1; i < rows.length; i++) {
            out.push('| ' + rows[i].join(' | ') + ' |\n');
        }
        return String(out.join('')).replace(/\n+$/g, '');
    }

    function renderHtmlNodeMarkdown(out, node, listDepth, inPre) {
        if (!out || !node) return;
        if (node.nodeType === 9 || node.nodeType === 11) {
            var docChild = node.firstChild;
            while (docChild) {
                renderHtmlNodeMarkdown(out, docChild, listDepth, inPre);
                docChild = docChild.nextSibling;
            }
            return;
        }
        if (node.nodeType === 3) {
            var text = node.nodeValue || '';
            if (!text) return;
            text = text.replace(/\u00a0/g, ' ');
            if (!inPre) text = text.replace(/[ \t\f\v]+/g, ' ');
            out.push(text);
            return;
        }
        if (node.nodeType !== 1) return;

        var tag = getHtmlNodeTagName(node);
        var content = '';
        var lines;
        var idx;
        if (tag === 'script' || tag === 'style' || tag === 'noscript') return;
        if (tag === 'br') {
            out.push('\n');
            return;
        }
        if (tag === 'p') {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, false));
            if (!content) return;
            out.push(content + '\n\n');
            return;
        }
        if (/^h[1-6]$/.test(tag)) {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, false));
            if (!content) return;
            out.push(repeatTextUnit('#', parseInt(tag.substring(1), 10)) + ' ' + content + '\n\n');
            return;
        }
        if (tag === 'strong' || tag === 'b') {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, inPre));
            if (!content) return;
            out.push('**' + content + '**');
            return;
        }
        if (tag === 'em' || tag === 'i') {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, inPre));
            if (!content) return;
            out.push('*' + content + '*');
            return;
        }
        if (tag === 'code') {
            content = renderHtmlChildrenMarkdown(node, listDepth, true);
            if (!content) return;
            if (hasHtmlParentTag(node, 'pre')) {
                out.push(content);
                return;
            }
            out.push('`' + String(content).replace(/`/g, '\\`').trim() + '`');
            return;
        }
        if (tag === 'pre') {
            content = renderHtmlChildrenMarkdown(node, listDepth, true);
            content = String(content || '').replace(/^\n+|\n+$/g, '');
            if (!content) return;
            out.push('```\n' + content + '\n```\n\n');
            return;
        }
        if (tag === 'blockquote') {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, inPre));
            if (!content) return;
            lines = content.split('\n');
            for (idx = 0; idx < lines.length; idx++) {
                var quoteLine = String(lines[idx] || '').trim();
                if (!quoteLine) continue;
                out.push('> ' + quoteLine + '\n');
            }
            out.push('\n');
            return;
        }
        if (tag === 'ul') {
            writeHtmlListMarkdown(out, node, listDepth, false);
            out.push('\n');
            return;
        }
        if (tag === 'ol') {
            writeHtmlListMarkdown(out, node, listDepth, true);
            out.push('\n');
            return;
        }
        if (tag === 'li') {
            content = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth + 1, inPre));
            if (!content) return;
            out.push(repeatTextUnit('  ', listDepth) + '- ' + content + '\n');
            return;
        }
        if (tag === 'a') {
            var linkText = cleanupMarkdownText(renderHtmlChildrenMarkdown(node, listDepth, inPre));
            var href = findHtmlAttr(node, 'href');
            if (!linkText) linkText = href;
            if (!linkText) return;
            if (!href) {
                out.push(linkText);
                return;
            }
            out.push('[' + linkText + '](' + href + ')');
            return;
        }
        if (tag === 'img') {
            var src = findHtmlAttr(node, 'src');
            if (!src) return;
            out.push('![' + findHtmlAttr(node, 'alt') + '](' + src + ')');
            return;
        }
        if (tag === 'table') {
            content = renderHtmlTableMarkdown(node);
            if (!content) return;
            out.push(content + '\n\n');
            return;
        }

        content = renderHtmlChildrenMarkdown(node, listDepth, inPre);
        if (!String(content || '').trim()) return;
        out.push(content);
        if (isHtmlBlockTag(tag)) out.push('\n\n');
    }

    function extractHtmlNodeMarkdown(node) {
        if (!node) return '';
        var out = [];
        renderHtmlNodeMarkdown(out, node, 0, false);
        return cleanupMarkdownText(out.join(''));
    }

    function htmlToMarkdownText(html) {
        var source = html == null ? '' : String(html);
        if (!source) return '';
        try {
            if (!window.DOMParser) return '';
            var doc = new window.DOMParser().parseFromString(source, 'text/html');
            var body = doc && doc.body ? doc.body : doc;
            var out = [];
            var child = body ? body.firstChild : null;
            while (child) {
                renderHtmlNodeMarkdown(out, child, 0, false);
                child = child.nextSibling;
            }
            return cleanupMarkdownText(out.join(''));
        } catch (e) {
            return '';
        }
    }

    function normalizeCollectedBrowserContextText(value) {
        var source = value == null ? '' : String(value);
        if (!source) return '';
        if (looksLikeHtmlContent(source)) {
            var markdown = htmlToMarkdownText(source);
            if (markdown) return markdown;
            return normalizeStructuredTextBlock(htmlToPlainText(source));
        }
        return normalizeStructuredTextBlock(source);
    }

    function truncateStructuredText(value, maxLen) {
        var text = normalizeCollectedBrowserContextText(value);
        var limit = parseInt(maxLen, 10);
        if (!text) return '';
        if (isNaN(limit) || limit < 1 || text.length <= limit) return text;
        return text.substring(0, limit) + '...';
    }

    function parseJsonSafely(rawText) {
        var text = rawText == null ? '' : String(rawText);
        text = text.replace(/^\uFEFF/, '').trim();
        if (!text) return null;
        try {
            return JSON.parse(text);
        } catch (e) {
            var firstObj = text.indexOf('{');
            var lastObj = text.lastIndexOf('}');
            if (firstObj >= 0 && lastObj > firstObj) {
                try {
                    return JSON.parse(text.substring(firstObj, lastObj + 1));
                } catch (e2) {
                    // ignore
                }
            }
            var firstArr = text.indexOf('[');
            var lastArr = text.lastIndexOf(']');
            if (firstArr >= 0 && lastArr > firstArr) {
                try {
                    return JSON.parse(text.substring(firstArr, lastArr + 1));
                } catch (e3) {
                    // ignore
                }
            }
            return null;
        }
    }

    function prettyPrintJsonText(rawText) {
        var parsed = parseJsonSafely(rawText);
        if (!parsed) return rawText == null ? '' : String(rawText);
        try {
            return JSON.stringify(parsed, null, 2);
        } catch (e) {
            return rawText == null ? '' : String(rawText);
        }
    }

    function escapeRegExpText(value) {
        return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function splitPromptDebugMessage(rawMessage) {
        var text = rawMessage == null ? '' : String(rawMessage).replace(/\r\n?/g, '\n');
        text = text.replace(/^\n+|\n+$/g, '');
        if (!text) {
            return { title: '', detail: '' };
        }

        var lines = text.split('\n');
        var firstLine = collapseText(lines.shift() || '');
        var detail = String(lines.join('\n') || '').replace(/^\n+|\n+$/g, '');
        if (detail) {
            return { title: firstLine, detail: detail };
        }

        var inlineMatch = text.match(/^(\[[^\]]+\])(?:\s+([\s\S]*))?$/);
        if (inlineMatch) {
            return {
                title: collapseText(inlineMatch[1] || ''),
                detail: String(inlineMatch[2] || '').replace(/^\n+|\n+$/g, '')
            };
        }

        return { title: firstLine, detail: detail };
    }

    function findPromptDebugSectionIndex(text, startIndex) {
        var labels = [
            'Intent-planning rules:',
            'Tool-selection rules:',
            'Agent-loop rules:',
            'Context-compression rules:',
            'User prompt:',
            'Request context:',
            'Available internal menus:',
            'Draft actions:',
            'Available MCP servers and tools:',
            'Completed actions so far:',
            'Collected results so far:',
            'Non-executable actions detected:',
            'Action plan:',
            'Conversation memory snapshot:',
            'Collected context:'
        ];
        var minIndex = -1;
        var i;
        for (i = 0; i < labels.length; i++) {
            var idx = String(text || '').indexOf(labels[i], startIndex || 0);
            if (idx < 0) continue;
            if (minIndex < 0 || idx < minIndex) {
                minIndex = idx;
            }
        }
        return minIndex;
    }

    function formatPromptDebugSections(rawText) {
        var text = rawText == null ? '' : String(rawText).replace(/\r\n?/g, '\n');
        if (!text) return '';

        var labels = [
            'User prompt:',
            'Request context:',
            'Available internal menus:',
            'Draft actions:',
            'Available MCP servers and tools:',
            'Completed actions so far:',
            'Collected results so far:',
            'Non-executable actions detected:',
            'Action plan:',
            'Conversation memory snapshot:',
            'Collected context:',
            'Intent-planning rules:',
            'Tool-selection rules:',
            'Agent-loop rules:',
            'Context-compression rules:'
        ];
        var i;
        for (i = 0; i < labels.length; i++) {
            var label = labels[i];
            var pattern = new RegExp('\\s*' + escapeRegExpText(label) + '\\s*', 'g');
            text = text.replace(pattern, '\n\n' + label + '\n');
        }

        text = text.replace(/\.\s+(?=Return ONLY one JSON object with this schema:)/g, '.\n');
        text = text.replace(/:\s+-\s+/g, ':\n- ');
        text = text.replace(/\s-\s(?=(?:[A-Z][A-Za-z-]*|menu=|server_id=|diary|mail|approval|report|schedule|project|board|todo|whisper|circular|addrbook|helpdesk|customer|external))/g, '\n- ');
        text = text.replace(/\n{3,}/g, '\n\n');
        return text.replace(/^\n+|\n+$/g, '');
    }

    function formatPromptDebugText(title, rawText) {
        var text = rawText == null ? '' : String(rawText).replace(/\r\n?/g, '\n');
        text = text.replace(/^\n+|\n+$/g, '');
        if (!text) return '';

        if (/\/response\]$/i.test(title)) {
            return prettyPrintJsonText(text);
        }
        if (!/\/(?:system_prompt|user_prompt)\]$/i.test(title)) {
            return text;
        }

        var schemaMarker = 'Return ONLY one JSON object with this schema:';
        var schemaIndex = text.indexOf(schemaMarker);
        if (schemaIndex < 0) {
            return formatPromptDebugSections(text);
        }

        var before = text.substring(0, schemaIndex).replace(/^\n+|\n+$/g, '');
        var afterSchemaStart = schemaIndex + schemaMarker.length;
        var nextSectionIndex = findPromptDebugSectionIndex(text, afterSchemaStart);
        var schemaText = nextSectionIndex >= 0
            ? text.substring(afterSchemaStart, nextSectionIndex)
            : text.substring(afterSchemaStart);
        var after = nextSectionIndex >= 0 ? text.substring(nextSectionIndex) : '';

        schemaText = prettyPrintJsonText(schemaText.replace(/^\s+|\s+$/g, ''));
        after = formatPromptDebugSections(after);

        var parts = [];
        if (before) parts.push(formatPromptDebugSections(before));
        parts.push(schemaMarker);
        if (schemaText) parts.push(schemaText);
        if (after) parts.push(after);
        return parts.join('\n\n').replace(/\n{3,}/g, '\n\n');
    }

    function decodeUriPart(value) {
        var text = String(value || '');
        if (!text) return '';
        try {
            return decodeURIComponent(text);
        } catch (e) {
            return text;
        }
    }

    var inlineMarkdownCacheStore = Object.create ? Object.create(null) : {};
    var inlineMarkdownCacheOrder = [];
    var markdownHtmlCacheStore = Object.create ? Object.create(null) : {};
    var markdownHtmlCacheOrder = [];
    var MARKDOWN_SANITIZE_ALLOWED_TAGS = {
        P: true,
        BR: true,
        H1: true,
        H2: true,
        H3: true,
        H4: true,
        H5: true,
        H6: true,
        UL: true,
        OL: true,
        LI: true,
        BLOCKQUOTE: true,
        A: true,
        IMG: true,
        CODE: true,
        PRE: true,
        STRONG: true,
        EM: true,
        DEL: true,
        TABLE: true,
        THEAD: true,
        TBODY: true,
        TR: true,
        TH: true,
        TD: true,
        HR: true
    };
    var MARKDOWN_SANITIZE_DROP_TAGS = {
        SCRIPT: true,
        STYLE: true,
        IFRAME: true,
        OBJECT: true,
        EMBED: true,
        LINK: true,
        META: true,
        BASE: true,
        FORM: true,
        INPUT: true,
        BUTTON: true,
        TEXTAREA: true,
        SELECT: true,
        OPTION: true,
        SVG: true,
        MATH: true
    };
    var CODE_LANGUAGE_ALIAS_MAP = {
        cplusplus: 'cpp',
        'c++': 'cpp',
        cxx: 'cpp',
        cc: 'cpp',
        csharp: 'csharp',
        'c#': 'csharp',
        cs: 'csharp',
        objc: 'objectivec',
        'obj-c': 'objectivec',
        'objective-c': 'objectivec',
        sh: 'bash',
        shell: 'bash',
        zsh: 'bash',
        py: 'python',
        js: 'javascript',
        ts: 'typescript',
        yml: 'yaml',
        md: 'markdown'
    };

    function readSimpleCache(store, order, key) {
        if (!Object.prototype.hasOwnProperty.call(store, key)) return null;
        var value = store[key];
        var idx = order.indexOf(key);
        if (idx >= 0 && idx !== (order.length - 1)) {
            order.splice(idx, 1);
            order.push(key);
        }
        return value;
    }

    function writeSimpleCache(store, order, key, value, maxItems) {
        if (!key) return;
        if (!Object.prototype.hasOwnProperty.call(store, key)) {
            order.push(key);
        } else {
            var idx = order.indexOf(key);
            if (idx >= 0 && idx !== (order.length - 1)) {
                order.splice(idx, 1);
                order.push(key);
            }
        }
        store[key] = value;
        while (order.length > maxItems) {
            var dropKey = order.shift();
            if (!dropKey) continue;
            delete store[dropKey];
        }
    }

    function sanitizeMarkdownUrl(url) {
        var value = (url || '').trim();
        if (!value) return '';
        if (/^https?:\/\//i.test(value)) return value;
        if (/^mailto:/i.test(value)) return value;
        return '';
    }

    function sanitizeMarkdownImageUrl(url) {
        var value = (url || '').trim();
        if (!value) return '';
        if (/^https?:\/\//i.test(value)) return value;
        if (/^blob:/i.test(value)) return value;
        if (/^data:image\/(png|jpe?g|gif|webp|bmp);base64,[a-z0-9+\/=\s]+$/i.test(value)) {
            return value.replace(/\s+/g, '');
        }
        return '';
    }

    function isLikelyImageUrl(url) {
        var value = (url || '').trim();
        if (!value) return false;
        if (/^data:image\//i.test(value)) return true;
        return /\.(png|jpe?g|gif|webp|bmp)(?:[?#].*)?$/i.test(value);
    }

    function shouldSkipOpenSourceMarkdownParser(sourceText) {
        var text = sourceText == null ? '' : String(sourceText);
        if (!text) return false;
        if (/^\s*(```|~~~)/m.test(text)) return true;

        var lines = text.replace(/\r\n?/g, '\n').split('\n');
        var i;
        for (i = 0; i < lines.length - 1; i++) {
            var headerLine = lines[i];
            if (headerLine.indexOf('|') < 0) continue;
            var headerCells = parseMarkdownTableCells(headerLine);
            if (headerCells.length < 2) continue;
            if (parseMarkdownTableDivider(lines[i + 1], headerCells.length)) {
                return true;
            }
        }
        return false;
    }

    function sanitizeMarkdownRenderedHtml(rawHtml) {
        var html = rawHtml == null ? '' : String(rawHtml);
        if (!html) return '';
        if (!document || !document.createElement) return '';

        var sourceWrap = document.createElement('div');
        var cleanWrap = document.createElement('div');
        sourceWrap.innerHTML = html;
        appendSanitizedMarkdownChildren(sourceWrap, cleanWrap);
        return cleanWrap.innerHTML || '';
    }

    function appendSanitizedMarkdownChildren(sourceNode, targetNode) {
        if (!sourceNode || !targetNode) return;
        var doc = targetNode.ownerDocument || document;
        var child = sourceNode.firstChild;
        while (child) {
            var next = child.nextSibling;
            var cleanNode = sanitizeSingleMarkdownNode(child, doc);
            if (cleanNode) {
                targetNode.appendChild(cleanNode);
            }
            child = next;
        }
    }

    function sanitizeSingleMarkdownNode(node, doc) {
        if (!node || !doc) return null;
        if (node.nodeType === 3) {
            return doc.createTextNode(node.nodeValue || '');
        }
        if (node.nodeType !== 1) {
            return null;
        }

        var tag = ((node.tagName || '').toUpperCase());
        if (!tag) return null;
        if (MARKDOWN_SANITIZE_DROP_TAGS[tag]) return null;
        if (!MARKDOWN_SANITIZE_ALLOWED_TAGS[tag]) {
            var unwrap = doc.createDocumentFragment();
            appendSanitizedMarkdownChildren(node, unwrap);
            return unwrap;
        }

        if (tag === 'A') {
            var href = sanitizeMarkdownUrl(node.getAttribute('href') || '');
            if (!href) {
                var plain = doc.createDocumentFragment();
                appendSanitizedMarkdownChildren(node, plain);
                return plain;
            }
            var link = doc.createElement('a');
            link.setAttribute('href', href);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            appendSanitizedMarkdownChildren(node, link);
            return link;
        }

        if (tag === 'IMG') {
            var src = sanitizeMarkdownImageUrl(node.getAttribute('src') || '');
            if (!src) return null;
            var img = doc.createElement('img');
            img.setAttribute('src', src);
            var alt = node.getAttribute('alt');
            if (alt) img.setAttribute('alt', alt);
            img.setAttribute('loading', 'lazy');
            img.className = 'hb-ai-inline-image';
            return img;
        }

        var el = doc.createElement(tag.toLowerCase());

        if (tag === 'OL') {
            var start = parseInt(node.getAttribute('start'), 10);
            if (start > 0) {
                el.setAttribute('start', String(start));
            }
        } else if (tag === 'CODE') {
            var cls = collapseText(node.getAttribute('class') || '');
            if (/^language-[a-z0-9_-]+$/i.test(cls)) {
                el.setAttribute('class', cls);
            }
        } else if (tag === 'TH' || tag === 'TD') {
            var align = collapseText((node.getAttribute('align') || '')).toLowerCase();
            if (!align) {
                var styleValue = (node.getAttribute('style') || '');
                var match = styleValue.match(/text-align\s*:\s*(left|right|center)\b/i);
                if (match && match[1]) align = match[1].toLowerCase();
            }
            if (align === 'left' || align === 'center' || align === 'right') {
                el.setAttribute('style', 'text-align:' + align + ';');
            }
        }

        appendSanitizedMarkdownChildren(node, el);
        return el;
    }

    function renderMarkdownWithOpenSourceParser(markdownText) {
        var source = markdownText == null ? '' : String(markdownText);
        if (!source.trim()) return '';
        if (shouldSkipOpenSourceMarkdownParser(source)) return '';
        if (!window.markdown || typeof window.markdown.toHTML !== 'function') return '';

        var rendered = '';
        try {
            rendered = window.markdown.toHTML(source);
        } catch (e) {
            return '';
        }

        if (!rendered) return '';
        return sanitizeMarkdownRenderedHtml(rendered);
    }

    function renderInlineMarkdown(text, options) {
        var source = text == null ? '' : String(text);
        if (!source) return '';
        var opts = options && typeof options === 'object' ? options : {};
        var allowInlineHtml = !!opts.allowInlineHtml;
        var cacheKey = (allowInlineHtml ? 'h1|' : 'h0|') + source;
        var cached = readSimpleCache(inlineMarkdownCacheStore, inlineMarkdownCacheOrder, cacheKey);
        if (cached !== null) return cached;

        var codeTokens = [];
        var linkTokens = [];
        var rawHtmlTokens = [];

        source = source.replace(/`([^`\n]+)`/g, function (_, codeText) {
            var token = '[[HBCODETOKEN' + codeTokens.length + ']]';
            codeTokens.push('<code>' + escapeHtml(codeText) + '</code>');
            return token;
        });

        if (allowInlineHtml) {
            source = source.replace(/<\/?[a-zA-Z][^>\n]*>/g, function (rawTag) {
                var token = '[[HBRAWTAGTOKEN' + rawHtmlTokens.length + ']]';
                rawHtmlTokens.push(rawTag);
                return token;
            });
        }

        source = escapeHtml(source);

        function protectLinkHtml(html) {
            var token = '[[HBLINKTOKEN' + linkTokens.length + ']]';
            linkTokens.push(html);
            return token;
        }

        source = source.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (_, alt, url) {
            var safeUrl = sanitizeMarkdownImageUrl(url);
            if (!safeUrl) return alt;
            return protectLinkHtml('<img class="hb-ai-inline-image" src="' + escapeHtml(safeUrl) + '" alt="' + alt + '" loading="lazy">');
        });

        source = source.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, url) {
            var safeUrl = sanitizeMarkdownUrl(url);
            if (!safeUrl) return label;
            var safeLabel = label;
            var normalizedLabel = collapseText(decodeUrlEntitiesForDisplay(label || ''));
            var normalizedUrl = collapseText(decodeUrlEntitiesForDisplay(url || ''));
            if (!safeLabel || normalizedLabel === normalizedUrl || /^https?:\/\//i.test(normalizedLabel)) {
                safeLabel = escapeHtml(buildHumanReadableUrlLabel(safeUrl) || decodeUrlEntitiesForDisplay(safeUrl));
            }
            return protectLinkHtml('<a href="' + escapeHtml(safeUrl) + '" target="_blank" rel="noopener noreferrer">' + safeLabel + '</a>');
        });

        source = source.replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, function (m, prefix, url) {
            var safeUrl = sanitizeMarkdownUrl(url);
            if (!safeUrl) return m;
            var imageUrl = sanitizeMarkdownImageUrl(url);
            if (imageUrl && isLikelyImageUrl(imageUrl)) {
                return prefix + protectLinkHtml('<img class="hb-ai-inline-image" src="' + escapeHtml(imageUrl) + '" alt="image" loading="lazy">');
            }
            var readable = buildHumanReadableUrlLabel(safeUrl) || decodeUrlEntitiesForDisplay(safeUrl);
            return prefix + protectLinkHtml('<a href="' + escapeHtml(safeUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(readable) + '</a>');
        });

        source = source
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/__([^_]+)__/g, '<strong>$1</strong>')
            .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
            .replace(/_([^_\n]+)_/g, '<em>$1</em>')
            .replace(/~~([^~]+)~~/g, '<del>$1</del>');

        source = source.replace(/\[\[HBCODETOKEN(\d+)\]\]/g, function (_, idx) {
            var i = parseInt(idx, 10);
            return codeTokens[i] || '';
        });

        source = source.replace(/\[\[HBLINKTOKEN(\d+)\]\]/g, function (_, idx) {
            var i = parseInt(idx, 10);
            return linkTokens[i] || '';
        });

        if (allowInlineHtml && rawHtmlTokens.length) {
            source = source.replace(/\[\[HBRAWTAGTOKEN(\d+)\]\]/g, function (_, idx) {
                var i = parseInt(idx, 10);
                return rawHtmlTokens[i] || '';
            });
            source = sanitizeMarkdownRenderedHtml(source) || source;
        }

        writeSimpleCache(
            inlineMarkdownCacheStore,
            inlineMarkdownCacheOrder,
            cacheKey,
            source,
            MAX_INLINE_MARKDOWN_CACHE_ITEMS
        );
        return source;
    }

    function parseMarkdownTableCells(line) {
        var source = line == null ? '' : String(line);
        source = source.replace(/\r\n?/g, '\n').trim();
        if (!source) return [];

        if (source.charAt(0) === '|') source = source.substring(1);
        if (source.charAt(source.length - 1) === '|') source = source.substring(0, source.length - 1);

        var cells = [];
        var current = '';
        var escaped = false;
        var i;
        for (i = 0; i < source.length; i++) {
            var ch = source.charAt(i);
            if (escaped) {
                current += ch;
                escaped = false;
                continue;
            }
            if (ch === '\\') {
                escaped = true;
                continue;
            }
            if (ch === '|') {
                cells.push(current.replace(/^\s+|\s+$/g, ''));
                current = '';
                continue;
            }
            current += ch;
        }
        if (escaped) current += '\\';
        cells.push(current.replace(/^\s+|\s+$/g, ''));
        return cells;
    }

    function normalizeMarkdownTableRow(rowCells, expectedLength) {
        var cells = Array.isArray(rowCells) ? rowCells : [];
        var out = [];
        var i;
        for (i = 0; i < expectedLength; i++) {
            out.push(cells[i] != null ? String(cells[i]) : '');
        }
        return out;
    }

    function parseMarkdownTableDivider(line, expectedLength) {
        var cells = parseMarkdownTableCells(line);
        if (!cells.length) return null;
        if (expectedLength && cells.length !== expectedLength) return null;

        var aligns = [];
        var i;
        for (i = 0; i < cells.length; i++) {
            var token = (cells[i] || '').replace(/\s+/g, '');
            if (!/^:?-{3,}:?$/.test(token)) return null;
            var leftColon = token.charAt(0) === ':';
            var rightColon = token.charAt(token.length - 1) === ':';
            if (leftColon && rightColon) aligns.push('center');
            else if (leftColon) aligns.push('left');
            else if (rightColon) aligns.push('right');
            else aligns.push('');
        }
        return aligns;
    }

    function isMarkdownTableRow(line, expectedLength) {
        var source = line == null ? '' : String(line);
        if (!source.trim()) return false;
        if (source.indexOf('|') < 0) return false;
        var cells = parseMarkdownTableCells(source);
        if (!cells.length) return false;
        if (expectedLength && cells.length !== expectedLength) return false;
        return true;
    }

    function countMarkdownIndent(rawIndent) {
        var source = rawIndent == null ? '' : String(rawIndent);
        if (!source) return 0;
        var width = 0;
        var i;
        for (i = 0; i < source.length; i++) {
            width += source.charAt(i) === '\t' ? 4 : 1;
        }
        return width;
    }

    function parseMarkdownListItem(line) {
        var source = line == null ? '' : String(line);
        var match = source.match(/^([ \t]*)([-*+]|\d+\.)\s+(.+)$/);
        if (!match) return null;
        return {
            indent: countMarkdownIndent(match[1] || ''),
            type: /\d+\.$/.test(match[2]) ? 'ol' : 'ul',
            text: match[3] || ''
        };
    }

    function renderMarkdownListFrame(frame) {
        if (!frame || !frame.type || !frame.items || !frame.items.length) return '';
        var rows = [];
        var i;
        var j;
        for (i = 0; i < frame.items.length; i++) {
            var item = frame.items[i] || {};
            var itemHtml = renderInlineMarkdown(item.text != null ? String(item.text) : '');
            var children = Array.isArray(item.children) ? item.children : [];
            for (j = 0; j < children.length; j++) {
                itemHtml += renderMarkdownListFrame(children[j]);
            }
            rows.push('<li>' + itemHtml + '</li>');
        }
        return '<' + frame.type + '>' + rows.join('') + '</' + frame.type + '>';
    }

    function escapeIdentifierUnderscoresForMarkdown(text) {
        var source = text == null ? '' : String(text);
        if (!source) return '';

        var protectedTokens = [];
        source = source.replace(/```[\s\S]*?```/g, function (block) {
            var token = '[[HBMDCODEBLOCK' + protectedTokens.length + ']]';
            protectedTokens.push(block);
            return token;
        });
        source = source.replace(/`[^`\n]+`/g, function (inlineCode) {
            var token = '[[HBMDCODEINLINE' + protectedTokens.length + ']]';
            protectedTokens.push(inlineCode);
            return token;
        });

        source = source.replace(/\b([A-Za-z0-9]+(?:_[A-Za-z0-9]+){2,})\b/g, function (_, tokenText) {
            return tokenText.replace(/_/g, '\\_');
        });

        source = source.replace(/\[\[HBMDCODE(?:BLOCK|INLINE)(\d+)\]\]/g, function (_, idx) {
            var i = parseInt(idx, 10);
            return protectedTokens[i] || '';
        });
        return source;
    }

    function markdownToHtml(markdownText) {
        var text = markdownText == null ? '' : String(markdownText);
        text = text.replace(/\r\n?/g, '\n');
        text = escapeIdentifierUnderscoresForMarkdown(text);
        if (!text.trim()) return '';
        var cacheKey = text;
        var cached = readSimpleCache(markdownHtmlCacheStore, markdownHtmlCacheOrder, cacheKey);
        if (cached !== null) return cached;

        var openSourceRendered = renderMarkdownWithOpenSourceParser(text);
        if (openSourceRendered) {
            writeSimpleCache(
                markdownHtmlCacheStore,
                markdownHtmlCacheOrder,
                cacheKey,
                openSourceRendered,
                MAX_MARKDOWN_HTML_CACHE_ITEMS
            );
            return openSourceRendered;
        }

        var lines = text.split('\n');
        var html = [];
        var paragraph = [];
        var listStack = [];
        var quoteLines = [];
        var inCode = false;
        var codeLines = [];
        var codeLang = '';
        var tableHeader = [];
        var tableAlign = [];
        var tableRows = [];

        function flushParagraph() {
            if (!paragraph.length) return;
            var parts = [];
            var j;
            for (j = 0; j < paragraph.length; j++) {
                parts.push(renderInlineMarkdown(paragraph[j]));
            }
            html.push('<p>' + parts.join('<br>') + '</p>');
            paragraph = [];
        }

        function flushList() {
            if (!listStack.length) return;
            html.push(renderMarkdownListFrame(listStack[0]));
            listStack = [];
        }

        function shouldKeepListOnBlankLine(nextIdx) {
            if (!listStack.length) return false;
            var look = nextIdx;
            while (look < lines.length && !lines[look].trim()) {
                look++;
            }
            if (look >= lines.length) return false;
            return !!parseMarkdownListItem(lines[look] || '');
        }

        function appendListItem(parsedItem) {
            if (!parsedItem) return;

            while (listStack.length) {
                var topFrame = listStack[listStack.length - 1];
                if (parsedItem.indent < topFrame.indent) {
                    if (listStack.length === 1) {
                        flushList();
                        break;
                    }
                    listStack.pop();
                    continue;
                }
                if (parsedItem.indent === topFrame.indent && parsedItem.type !== topFrame.type) {
                    if (listStack.length === 1) {
                        flushList();
                        break;
                    }
                    listStack.pop();
                    continue;
                }
                break;
            }

            var frame = listStack.length ? listStack[listStack.length - 1] : null;
            if (!frame) {
                frame = { type: parsedItem.type, indent: parsedItem.indent, items: [] };
                listStack.push(frame);
            } else if (parsedItem.indent > frame.indent) {
                var parentItem = frame.items.length ? frame.items[frame.items.length - 1] : null;
                if (parentItem) {
                    if (!Array.isArray(parentItem.children)) {
                        parentItem.children = [];
                    }
                    frame = { type: parsedItem.type, indent: parsedItem.indent, items: [] };
                    parentItem.children.push(frame);
                    listStack.push(frame);
                } else {
                    frame = { type: parsedItem.type, indent: frame.indent, items: frame.items };
                    listStack[listStack.length - 1] = frame;
                }
            } else if (parsedItem.type !== frame.type) {
                frame = { type: parsedItem.type, indent: parsedItem.indent, items: [] };
                if (listStack.length) {
                    listStack[listStack.length - 1] = frame;
                } else {
                    listStack.push(frame);
                }
            }

            frame.items.push({ text: parsedItem.text, children: [] });
        }

        function flushQuote() {
            if (!quoteLines.length) return;
            var parts = [];
            var j;
            for (j = 0; j < quoteLines.length; j++) {
                parts.push(renderInlineMarkdown(quoteLines[j]));
            }
            html.push('<blockquote>' + parts.join('<br>') + '</blockquote>');
            quoteLines = [];
        }

        function flushCode() {
            if (!inCode) return;
            var langClass = codeLang ? ' class="language-' + escapeHtml(codeLang) + '"' : '';
            html.push('<pre><code' + langClass + '>' + escapeHtml(codeLines.join('\n')) + '</code></pre>');
            inCode = false;
            codeLang = '';
            codeLines = [];
        }

        function flushTable() {
            if (!tableHeader.length) return;
            var i;
            var j;
            var head = [];
            for (i = 0; i < tableHeader.length; i++) {
                var headAlign = tableAlign[i] || '';
                var headStyle = headAlign ? ' style="text-align:' + headAlign + ';"' : '';
                head.push('<th' + headStyle + '>' + renderInlineMarkdown(tableHeader[i], { allowInlineHtml: true }) + '</th>');
            }

            var body = [];
            for (i = 0; i < tableRows.length; i++) {
                var row = tableRows[i] || [];
                var cols = [];
                for (j = 0; j < tableHeader.length; j++) {
                    var colAlign = tableAlign[j] || '';
                    var colStyle = colAlign ? ' style="text-align:' + colAlign + ';"' : '';
                    cols.push('<td' + colStyle + '>' + renderInlineMarkdown(row[j] || '', { allowInlineHtml: true }) + '</td>');
                }
                body.push('<tr>' + cols.join('') + '</tr>');
            }

            var tableHtml = '<table><thead><tr>' + head.join('') + '</tr></thead>';
            if (body.length) tableHtml += '<tbody>' + body.join('') + '</tbody>';
            tableHtml += '</table>';
            html.push(tableHtml);
            tableHeader = [];
            tableAlign = [];
            tableRows = [];
        }

        var idx;
        for (idx = 0; idx < lines.length; idx++) {
            var line = lines[idx];

            if (inCode) {
                if (/^\s*```/.test(line)) {
                    flushCode();
                } else {
                    codeLines.push(line);
                }
                continue;
            }

            var fenceMatch = line.match(/^\s*```([a-zA-Z0-9_-]+)?\s*$/);
            if (fenceMatch) {
                flushParagraph();
                flushList();
                flushQuote();
                flushTable();
                inCode = true;
                codeLang = fenceMatch[1] || '';
                codeLines = [];
                continue;
            }

            if (tableHeader.length) {
                if (isMarkdownTableRow(line, tableHeader.length)) {
                    tableRows.push(normalizeMarkdownTableRow(parseMarkdownTableCells(line), tableHeader.length));
                    continue;
                }
                flushTable();
            }

            if (!line.trim()) {
                flushParagraph();
                flushQuote();
                flushTable();
                if (!shouldKeepListOnBlankLine(idx + 1)) {
                    flushList();
                }
                continue;
            }

            if (line.indexOf('|') >= 0 && idx + 1 < lines.length) {
                var headerCells = parseMarkdownTableCells(line);
                var dividerAlign = parseMarkdownTableDivider(lines[idx + 1], headerCells.length);
                if (headerCells.length >= 2 && dividerAlign) {
                    flushParagraph();
                    flushList();
                    flushQuote();
                    flushTable();
                    tableHeader = normalizeMarkdownTableRow(headerCells, headerCells.length);
                    tableAlign = dividerAlign;
                    tableRows = [];
                    idx += 1;
                    continue;
                }
            }

            var headingMatch = line.match(/^\s*(#{1,6})\s+(.+)\s*$/);
            if (headingMatch) {
                flushParagraph();
                flushList();
                flushQuote();
                flushTable();
                var level = headingMatch[1].length;
                html.push('<h' + level + '>' + renderInlineMarkdown(headingMatch[2]) + '</h' + level + '>');
                continue;
            }

            var quoteMatch = line.match(/^\s*>\s?(.*)$/);
            if (quoteMatch) {
                flushParagraph();
                flushList();
                quoteLines.push(quoteMatch[1]);
                continue;
            }
            flushQuote();

            var listItem = parseMarkdownListItem(line);
            if (listItem) {
                flushParagraph();
                appendListItem(listItem);
                continue;
            }

            flushList();
            paragraph.push(line);
        }

        if (inCode) flushCode();
        flushTable();
        flushParagraph();
        flushList();
        flushQuote();

        var rendered = html.join('');
        writeSimpleCache(
            markdownHtmlCacheStore,
            markdownHtmlCacheOrder,
            cacheKey,
            rendered,
            MAX_MARKDOWN_HTML_CACHE_ITEMS
        );
        return rendered;
    }

    function makeId() {
        return 'c_' + now() + '_' + Math.floor(Math.random() * 1000000);
    }

    function detectAssistant2ApiBase() {
        var override = '';
        if (window && typeof window.HB_ASSISTANT2_API_BASE === 'string') {
            override = collapseText(window.HB_ASSISTANT2_API_BASE);
        }
        if (override) {
            var forcedBase = String(override).replace(/\/+$/, '');
            var forcedOrigin = extractOriginFromUrl(forcedBase);
            if (forcedOrigin && /\/ngw(?:\/|$)/i.test(forcedBase)) {
                return forcedOrigin.replace(/\/+$/, '') + '/v3/api/ai/assistant/';
            }
            forcedBase = forcedBase.replace(/^\/ngw(?=\/|$)/i, '');
            return forcedBase + '/';
        }

        var apiUrl = getBaseConfigApiUrl();
        if (apiUrl) {
            var normalizedApi = String(apiUrl).replace(/\/+$/, '');
            var apiOrigin = extractOriginFromUrl(normalizedApi);
            if (apiOrigin) {
                return apiOrigin.replace(/\/+$/, '') + '/v3/api/ai/assistant/';
            }
            normalizedApi = normalizedApi.replace(/^\/ngw(?=\/|$)/i, '');
            if (/\/v3\/api$/i.test(normalizedApi)) {
                return normalizedApi + '/ai/assistant/';
            }
            if (/\/api$/i.test(normalizedApi)) {
                return normalizedApi.replace(/\/api$/i, '/v3/api') + '/ai/assistant/';
            }
            return '/v3/api/ai/assistant/';
        }

        return '/v3/api/ai/assistant/';
    }

    var basePath = detectBasePath();
    var apiBase = basePath + 'assistant/';
    var assistant2ApiBase = detectAssistant2ApiBase();

    var state = {
        open: false,
        sending: false,
        providers: {},
        providersLoaded: false,
        assistantEnabled: false,
        mcpToolLoopEnabled: false,
        bootstrapLoaded: false,
        pendingOAuth: {},
        deviceOAuthPollers: {},
        conversations: [],
        activeConversationId: '',
        historyKeyword: '',
        serverConversationsLoaded: false,
        pendingAttachments: [],
        requestQueue: [],
        activeRequests: {},
        activeRequest: null,
        requestSerial: 0,
        diaryScopeCache: null,
        domainContextEngine: null,
        domainContextEngineFactory: null,
        inputRecall: {
            conversationKey: '',
            index: -1,
            draft: ''
        },
        inputRecallApplying: false,
        modelReasoningSelections: {},
        panelLayout: null,
        fabLayout: null,
        selectedProviderId: '',
        providerDefaultInitialized: false,
        settingsMethodByFamily: {},
        personalAiAllowed: true,
        assistantAdmin: false,
        usagePanelOpen: false,
        quotaByProvider: {},
        usageRefreshSeqByFamily: {},
        selectedQuotaStatus: null,
        i18n: {},
        i18nLoaded: false,
        i18nLang: '',
        domainIntentCache: {},
        progressVerbosity: loadProgressVerbosity(),
        mcpSseDebug: loadMcpSseDebugFlag(),
        lastUsedModel: null
    };
    var PROVIDER_ID_ALIASES = {
        openai_api: 'openai',
        google_api: 'google',
        gemini: 'google',
        'z.ai': 'zai',
        'z-ai': 'zai',
        qwen: 'qwen-portal',
        'kimi-code': 'kimi-coding',
        'opencode-zen': 'opencode',
        'aws-bedrock': 'amazon-bedrock',
        bedrock: 'amazon-bedrock',
        bytedance: 'volcengine',
        doubao: 'volcengine',
        vercel_ai_gateway: 'vercel-ai-gateway',
        cloudflare_ai_gateway: 'cloudflare-ai-gateway',
        kimi_coding: 'kimi-coding',
        minimax_portal: 'minimax-portal',
        minimax_portal_cn: 'minimax-portal-cn',
        copilotproxy: 'copilot-proxy',
        moonshot_cn: 'moonshot-cn',
        zai_coding_global: 'zai-coding-global',
        zai_coding_cn: 'zai-coding-cn',
        zai_global: 'zai-global',
        zai_cn: 'zai-cn'
    };
    var MERGED_PROVIDER_FAMILIES = {
        openai: ['openai', 'openai_api'],
        google: ['google', 'gemini', 'google_api']
    };
    var MERGED_PROVIDER_LABELS = {
        openai: 'OpenAI',
        google: 'Google'
    };
    var remoteSyncTimer = 0;
    var remoteLoadPromise = null;
    var applyingServerConversations = false;
    var remoteSyncInFlight = false;
    var remoteSyncPendingSnapshot = null;
    var remoteSyncLastSentAt = 0;
    var remoteSyncBackoffUntil = 0;
    var remoteSync429Count = 0;

    var style = document.createElement('style');
    style.textContent = ''
        + '.hb-ai-fab{position:fixed;right:20px;bottom:20px;width:46px;height:46px;border-radius:23px;background:#1f6feb;color:#fff;border:none;cursor:pointer;z-index:999999;box-shadow:0 6px 20px rgba(0,0,0,.25);font-weight:700;font-size:14px;touch-action:none;}'
        + '.hb-ai-fab.hb-ai-dragging{cursor:grabbing;}'
        + '.hb-ai-panel{position:fixed;right:20px;bottom:76px;width:390px;max-width:calc(100vw - 24px);height:620px;max-height:80vh;background:#fff;border:1px solid #d7dce2;border-radius:10px;box-shadow:0 18px 38px rgba(0,0,0,.2);z-index:999999;display:none;overflow:hidden;}'
        + '.hb-ai-drag-shield{position:fixed;left:0;top:0;width:100vw;height:100vh;border:0;padding:0;margin:0;background:transparent;display:none;z-index:999998;}'
        + '.hb-ai-drag-shield.active{display:block;}'
        + '.hb-ai-drag-shield.hb-ai-shield-drag{cursor:grabbing;}'
        + '.hb-ai-drag-shield.hb-ai-shield-resize{cursor:nwse-resize;}'
        + '.hb-ai-panel.open{display:flex;flex-direction:column;}'
        + '.hb-ai-panel.hb-ai-dragging,.hb-ai-panel.hb-ai-resizing{user-select:none;}'
        + '.hb-ai-head{padding:10px 12px;border-bottom:1px solid #ebedf0;background:#f8fafc;position:relative;}'
        + '.hb-ai-head.hb-ai-draggable{cursor:move;}'
        + '.hb-ai-head.hb-ai-draggable button,.hb-ai-head.hb-ai-draggable input,.hb-ai-head.hb-ai-draggable select,.hb-ai-head.hb-ai-draggable textarea,.hb-ai-head.hb-ai-draggable a{cursor:pointer;}'
        + '.hb-ai-head-top{display:flex;gap:8px;align-items:center;justify-content:space-between;min-width:0;}'
        + '.hb-ai-title{font-size:13px;font-weight:700;color:#111827;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
        + '.hb-ai-head-actions{display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end;min-width:0;}'
        + '.hb-ai-mini-btn{height:30px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:6px;padding:0 10px;font-size:12px;cursor:pointer;flex-shrink:0;}'
        + '.hb-ai-mini-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-icon-btn{width:30px;min-width:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;}'
        + '.hb-ai-btn-icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;}'
        + '.hb-ai-btn-icon svg{display:block;width:18px;height:18px;fill:none;stroke:#64748b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-history-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-size:12px;font-weight:400;line-height:1;width:30px;min-width:30px;padding:0;}'
        + '.hb-ai-history-count{display:none;position:relative;box-sizing:border-box;min-width:18px;height:18px;line-height:18px;padding:0 4px;border-radius:999px;background:#1f6feb;color:#fff;font-size:10px;font-weight:700;text-align:center;font-variant-numeric:tabular-nums;}'
        + '.hb-ai-history-btn.has-count .hb-ai-history-count{display:inline-block;}'
        + '.hb-ai-history-btn.hb-ai-processing .hb-ai-history-count:after{content:"";position:absolute;left:1px;top:1px;right:1px;bottom:1px;border:2px solid rgba(255,255,255,.55);border-top-color:#ffffff;border-radius:999px;animation:hb-ai-spin .8s linear infinite;pointer-events:none;}'
        + '.hb-ai-history-btn.hb-ai-processing .hb-ai-btn-icon{display:none;}'
        + '.hb-ai-status{margin-top:8px;}'
        + '.hb-ai-status-text{font-size:11px;color:#374151;line-height:1.2;min-height:14px;}'
        + '.hb-ai-settings-menu{position:absolute;right:12px;top:40px;border:1px solid #d1d5db;background:#fff;border-radius:8px;box-shadow:0 10px 24px rgba(0,0,0,.12);display:none;z-index:5;min-width:220px;padding:6px;}'
        + '.hb-ai-settings-menu.open{display:block;}'
        + '.hb-ai-settings-item{display:block;width:100%;border:0;background:#fff;text-align:left;padding:8px 10px;font-size:12px;color:#111827;cursor:pointer;border-radius:8px;}'
        + '.hb-ai-settings-item:hover{background:#f3f4f6;}'
        + '.hb-ai-settings-item[disabled]{opacity:.55;cursor:not-allowed;background:#fff;}'
        + '.hb-ai-settings-flow{display:none;padding:6px 2px 2px;border-top:1px solid #e5e7eb;margin-top:6px;}'
        + '.hb-ai-settings-flow.open{display:block;}'
        + '.hb-ai-settings-row{display:flex;align-items:center;gap:8px;margin-bottom:8px;}'
        + '.hb-ai-settings-label{width:64px;flex:0 0 64px;font-size:11px;color:#374151;}'
        + '.hb-ai-settings-select{flex:1;height:30px;border:1px solid #d1d5db;border-radius:6px;padding:0 8px;font-size:12px;min-width:0;}'
        + '.hb-ai-settings-actions{display:flex;gap:6px;justify-content:flex-end;}'
        + '.hb-ai-settings-actions .hb-ai-settings-item{width:auto;min-width:76px;text-align:center;padding:7px 10px;border:1px solid #d1d5db;}'
        + '.hb-ai-history-pane{position:absolute;left:0;top:0;width:100%;height:100%;background:#fff;border-right:1px solid #e5e7eb;z-index:4;transform:translateX(-102%);transition:transform .2s ease;display:flex;flex-direction:column;}'
        + '.hb-ai-history-pane.open{transform:translateX(0);}'
        + '.hb-ai-history-top{padding:10px 10px 8px;border-bottom:1px solid #e5e7eb;background:#f8fafc;display:flex;gap:6px;align-items:center;}'
        + '.hb-ai-history-search{flex:1;height:30px;border:1px solid #d1d5db;border-radius:6px;padding:0 8px;font-size:12px;}'
        + '.hb-ai-history-close{height:30px;width:30px;min-width:30px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:6px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;}'
        + '.hb-ai-history-close svg{display:block;width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-history-list{flex:1;overflow:auto;padding:6px 8px;background:#fff;}'
        + '.hb-ai-history-item{border:1px solid #e5e7eb;border-radius:8px;padding:8px 9px;margin-bottom:6px;cursor:pointer;background:#fff;}'
        + '.hb-ai-history-item.active{border-color:#1f6feb;background:#eef5ff;}'
        + '.hb-ai-history-line{display:flex;align-items:center;justify-content:space-between;gap:10px;}'
        + '.hb-ai-history-title{font-size:12px;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:190px;}'
        + '.hb-ai-history-meta{display:flex;align-items:center;gap:6px;flex-shrink:0;}'
        + '.hb-ai-history-time{font-size:11px;color:#6b7280;white-space:nowrap;}'
        + '.hb-ai-history-delete{height:20px;min-width:20px;border:1px solid #d1d5db;background:#fff;color:#6b7280;border-radius:5px;padding:0 5px;font-size:11px;line-height:1;cursor:pointer;}'
        + '.hb-ai-history-delete:hover{background:#fef2f2;color:#b91c1c;border-color:#fecaca;}'
        + '.hb-ai-history-sub{font-size:11px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:4px;}'
        + '.hb-ai-history-empty{font-size:12px;color:#6b7280;padding:10px 4px;}'
        + '.hb-ai-messages{flex:1;overflow:auto;padding:10px 12px;background:#fff;}'
        + '.hb-ai-msg{margin:8px 0;padding:8px 10px;border-radius:8px;white-space:pre-wrap;word-break:break-word;font-size:12px;line-height:1.45;}'
        + '.hb-ai-msg.user{background:#e8f0ff;color:#0f172a;margin-left:20px;}'
        + '.hb-ai-msg.assistant{background:#f3f4f6;color:#111827;margin-right:20px;white-space:normal;}'
        + '.hb-ai-msg.system{background:#fff7ed;color:#9a3412;border:1px solid #fed7aa;}'
        + '.hb-ai-msg.system.hb-ai-msg-subtle{background:transparent;color:#94a3b8;border:0;margin:4px 0;padding:2px 4px;font-size:11px;line-height:1.35;}'
        + '.hb-ai-msg.system.hb-ai-msg-subtle[data-hb-step-header="1"]{font-size:12px !important;}'
        + '.hb-ai-step-toggle{display:flex;align-items:center;gap:6px;width:100%;border:0;background:transparent;color:inherit;padding:0;text-align:left;cursor:pointer;font:inherit;font-size:12px !important;line-height:1.35;}'
        + '.hb-ai-step-toggle span{font-size:12px !important;}'
        + '.hb-ai-step-toggle[aria-expanded="false"]{opacity:.9;}'
        + '.hb-ai-step-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;min-width:16px;color:inherit;line-height:1;box-sizing:border-box;padding:0;}'
        + '.hb-ai-step-icon svg{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-msg.system.hb-ai-msg-subtle.hb-ai-step-owned{padding-left:22px;}'
        + '.hb-ai-step-detail{margin-top:4px;padding-left:18px;white-space:pre-wrap;word-break:break-word;color:inherit;}'
        + '.hb-ai-md p{margin:0 0 8px;}'
        + '.hb-ai-md p:last-child{margin-bottom:0;}'
        + '.hb-ai-md h1,.hb-ai-md h2,.hb-ai-md h3,.hb-ai-md h4,.hb-ai-md h5,.hb-ai-md h6{margin:0 0 8px;line-height:1.3;font-weight:700;}'
        + '.hb-ai-md h1{font-size:16px;}.hb-ai-md h2{font-size:15px;}.hb-ai-md h3{font-size:14px;}.hb-ai-md h4,.hb-ai-md h5,.hb-ai-md h6{font-size:13px;}'
        + '.hb-ai-md ul,.hb-ai-md ol{margin:0 0 8px 18px;padding:0;}'
        + '.hb-ai-md ul ul,.hb-ai-md ul ol,.hb-ai-md ol ul,.hb-ai-md ol ol{margin-top:4px;margin-bottom:4px;}'
        + '.hb-ai-md li{margin:3px 0;}'
        + '.hb-ai-md table{width:100%;border-collapse:collapse;margin:0 0 8px;font-size:12px;}'
        + '.hb-ai-md th,.hb-ai-md td{border:1px solid #d1d5db;padding:6px 8px;vertical-align:top;text-align:left;}'
        + '.hb-ai-md thead th{background:#f8fafc;font-weight:700;}'
        + '.hb-ai-md tbody tr:nth-child(even){background:#fafafa;}'
        + '.hb-ai-md blockquote{margin:0 0 8px;padding:6px 10px;border-left:3px solid #cbd5e1;background:#f8fafc;color:#334155;border-radius:4px;}'
        + '.hb-ai-md hr{border:0;border-top:1px solid #d1d5db;margin:8px 0;}'
        + '.hb-ai-md a{color:#1d4ed8;text-decoration:underline;}'
        + '.hb-ai-md img{display:block;max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;margin:6px 0;background:#fff;}'
        + '.hb-ai-md .hb-ai-inline-image{display:block;max-width:100%;height:auto;border:1px solid #e5e7eb;border-radius:8px;margin:6px 0;background:#fff;}'
        + '.hb-ai-md code{font-family:Consolas,Monaco,monospace;font-size:12px;background:#1f2937;color:#e6edf3;padding:1px 5px;border-radius:4px;text-shadow:none !important;}'
        + '.hb-ai-md pre{margin:0 0 8px;padding:10px 12px;background:#0d1117 !important;color:#c9d1d9 !important;border:1px solid #30363d;border-radius:8px;overflow:auto;white-space:pre;}'
        + '.hb-ai-md pre code{display:block;min-width:100%;background:transparent !important;padding:0;font-size:12px;line-height:1.55;text-shadow:none !important;}'
        + '.hb-ai-md pre code.hljs{padding:0;background:transparent !important;color:inherit !important;text-shadow:none !important;}'
        + '.hb-ai-md pre code *,.hb-ai-md .hljs *,.hb-ai-md code[class*=\"language-\"] *{text-shadow:none !important;filter:none !important;}'
        + '.hb-ai-md .hljs{color:inherit !important;background:transparent !important;text-shadow:none !important;}'
        + '.hb-ai-msg-meta{margin-top:6px;font-size:10px;color:#6b7280;text-align:right;}'
        + '.hb-ai-msg-actions{margin-top:8px;display:flex;justify-content:flex-end;}'
        + '.hb-ai-msg-action-btn{height:24px;border:1px solid #cbd5e1;background:#fff;color:#334155;border-radius:6px;padding:0 8px;font-size:11px;cursor:pointer;}'
        + '.hb-ai-msg-action-btn:hover{background:#f8fafc;}'
        + '.hb-ai-msg-action-icon{width:24px;min-width:24px;padding:0;display:inline-flex;align-items:center;justify-content:center;}'
        + '.hb-ai-copy-icon{position:relative;display:inline-block;width:12px;height:12px;}'
        + '.hb-ai-copy-icon:before,.hb-ai-copy-icon:after{content:\"\";position:absolute;box-sizing:border-box;border:1.5px solid #475569;border-radius:2px;background:transparent;}'
        + '.hb-ai-copy-icon:before{left:0;top:2px;width:8px;height:8px;}'
        + '.hb-ai-copy-icon:after{left:3px;top:-1px;width:8px;height:8px;}'
        + '.hb-ai-close-btn{width:30px;min-width:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;}'
        + '.hb-ai-close-btn svg{display:block;width:18px;height:18px;fill:none;stroke:#64748b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-foot{border-top:1px solid #ebedf0;padding:8px;background:#fff;position:relative;}'
        + '.hb-ai-context-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px 2px;}'
        + '.hb-ai-context{display:block;margin:0;font-size:11px;color:#374151;}'
        + '.hb-ai-attach-btn{height:24px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:6px;padding:0 8px;font-size:11px;cursor:pointer;}'
        + '.hb-ai-attach-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-input-wrap{position:relative;}'
        + '.hb-ai-attach-hint{position:absolute;right:10px;bottom:16px;max-width:62%;font-size:11px;color:#64748b;background:rgba(248,250,252,.96);border:1px solid #e2e8f0;border-radius:999px;padding:2px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;}'
        + '.hb-ai-attach-list{display:flex;flex-wrap:wrap;gap:5px;margin:0 0 6px;}'
        + '.hb-ai-attach-chip{display:inline-flex;align-items:center;gap:6px;max-width:100%;border:1px solid #c7d2fe;background:#eef2ff;border-radius:999px;padding:3px 8px;font-size:11px;color:#1e3a8a;}'
        + '.hb-ai-attach-chip-name{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
        + '.hb-ai-attach-chip-size{color:#475569;}'
        + '.hb-ai-attach-chip-remove{border:0;background:transparent;color:#475569;font-size:12px;line-height:1;cursor:pointer;padding:0;}'
        + '.hb-ai-attach-chip-remove:hover{color:#1e3a8a;}'
        + '.hb-ai-queue-wrap{display:none;margin:0 0 6px;border:1px solid #e5e7eb;border-radius:8px;background:#f8fafc;}'
        + '.hb-ai-queue-wrap.open{display:block;}'
        + '.hb-ai-queue-top{padding:6px 8px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#334155;font-weight:600;}'
        + '.hb-ai-queue-list{max-height:132px;overflow:auto;padding:4px 6px;}'
        + '.hb-ai-queue-item{display:flex;align-items:center;gap:6px;padding:5px 2px;}'
        + '.hb-ai-queue-text{flex:1;min-width:0;font-size:11px;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
        + '.hb-ai-queue-actions{display:flex;align-items:center;gap:4px;flex-shrink:0;}'
        + '.hb-ai-queue-btn{height:22px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:999px;padding:0 8px;font-size:11px;cursor:pointer;}'
        + '.hb-ai-queue-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-queue-btn.delete{padding:0 6px;color:#9a3412;}'
        + '.hb-ai-queue-empty{font-size:11px;color:#6b7280;padding:8px 2px;}'
        + '.hb-ai-input{width:100%;height:86px;resize:none;border:1px solid #d1d5db;border-radius:8px;padding:8px;font-size:12px;line-height:1.4;box-sizing:border-box;}'
        + '.hb-ai-input-wrap.hb-ai-hint-hidden .hb-ai-attach-hint{display:none;}'
        + '.hb-ai-bottom-row{display:flex;gap:6px;align-items:center;margin-top:6px;min-width:0;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;}'
        + '.hb-ai-provider-btn{height:30px;width:30px;min-width:30px;border:1px solid #d1d5db;background:#fff;color:#475569;border-radius:7px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}'
        + '.hb-ai-provider-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-usage-toggle-btn{height:30px;width:30px;min-width:30px;border:1px solid #d1d5db;background:#fff;color:#475569;border-radius:7px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}'
        + '.hb-ai-usage-toggle-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-usage-toggle-btn.active{background:#e8f0ff;border-color:#93c5fd;color:#1d4ed8;}'
        + '.hb-ai-usage-toggle-btn svg{display:block;width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-usage-toggle-btn[disabled]{opacity:.55;cursor:not-allowed;background:#f8fafc;color:#94a3b8;}'
        + '.hb-ai-provider-menu{position:absolute;left:8px;bottom:44px;min-width:170px;max-width:220px;border:1px solid #d1d5db;background:#fff;border-radius:8px;box-shadow:0 10px 24px rgba(0,0,0,.12);display:none;z-index:6;padding:6px;}'
        + '.hb-ai-provider-menu.open{display:block;}'
        + '.hb-ai-provider-item{display:block;width:100%;border:0;background:#fff;text-align:left;padding:7px 8px;font-size:12px;color:#111827;cursor:pointer;border-radius:6px;}'
        + '.hb-ai-provider-item:hover{background:#f3f4f6;}'
        + '.hb-ai-provider-item.active{background:#e8f0ff;color:#1d4ed8;}'
        + '.hb-ai-provider-divider{height:1px;background:#e5e7eb;margin:6px 2px;}'
        + '.hb-ai-provider-empty{padding:8px 6px;font-size:11px;color:#6b7280;}'
        + '.hb-ai-usage{display:none;margin:6px 0 0;border:1px solid #e5e7eb;border-radius:8px;background:#f8fafc;padding:6px 8px;}'
        + '.hb-ai-usage.open{display:block;}'
        + '.hb-ai-usage-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px;}'
        + '.hb-ai-usage-title{font-size:10px;font-weight:600;color:#334155;margin:0;}'
        + '.hb-ai-usage-refresh-btn{height:18px;width:18px;min-width:18px;border:1px solid #d1d5db;background:#fff;color:#64748b;border-radius:999px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}'
        + '.hb-ai-usage-refresh-btn:hover{background:#f3f4f6;color:#1f2937;}'
        + '.hb-ai-usage-refresh-btn svg{display:block;width:11px;height:11px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-usage-refresh-btn[disabled]{opacity:.55;cursor:not-allowed;background:#f8fafc;color:#94a3b8;}'
        + '.hb-ai-usage-note{font-size:10px;color:#6b7280;}'
        + '.hb-ai-usage-row{margin-top:6px;}'
        + '.hb-ai-usage-top{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:10px;color:#334155;}'
        + '.hb-ai-usage-label{color:#475569;font-size:10px;}'
        + '.hb-ai-usage-value{font-variant-numeric:tabular-nums;color:#111827;font-size:10px;}'
        + '.hb-ai-usage-bar{height:6px;border-radius:999px;background:#e5e7eb;overflow:hidden;margin-top:3px;}'
        + '.hb-ai-usage-fill{height:100%;background:#3b82f6;width:0%;transition:width .18s ease;}'
        + '.hb-ai-usage-fill.warn{background:#f59e0b;}'
        + '.hb-ai-usage-fill.danger{background:#ef4444;}'
        + '.hb-ai-option-compact-btn{display:none;height:30px;width:30px;min-width:30px;border:1px solid #d1d5db;background:#fff;color:#475569;border-radius:7px;padding:0;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}'
        + '.hb-ai-option-compact-btn:hover{background:#f3f4f6;}'
        + '.hb-ai-option-compact-btn svg{display:block;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-option-compact-menu{position:absolute;right:46px;bottom:44px;min-width:120px;max-width:170px;border:1px solid #d1d5db;background:#fff;border-radius:8px;box-shadow:0 10px 24px rgba(0,0,0,.12);display:none;z-index:6;padding:6px;}'
        + '.hb-ai-option-compact-menu.open{display:block;}'
        + '.hb-ai-option-compact-item{display:block;width:100%;border:0;background:#fff;text-align:left;padding:7px 8px;font-size:12px;color:#111827;cursor:pointer;border-radius:6px;}'
        + '.hb-ai-option-compact-item:hover{background:#f3f4f6;}'
        + '.hb-ai-option-compact-item.active{background:#e8f0ff;color:#1d4ed8;}'
        + '.hb-ai-model{height:30px;border:1px solid #d1d5db;border-radius:6px;padding:0 22px 0 6px;background:#fff;font-size:12px;flex:1 1 180px;min-width:0;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
        + '.hb-ai-option-wrap{display:none;align-items:center;gap:4px;min-width:0;flex:0 1 auto;}'
        + '.hb-ai-option-wrap.open{display:flex;}'
        + '.hb-ai-bottom-row.hb-ai-bottom-row-compact .hb-ai-option-wrap.open{display:none;}'
        + '.hb-ai-bottom-row.hb-ai-bottom-row-compact .hb-ai-option-compact-btn{display:inline-flex;}'
        + '.hb-ai-option-label{font-size:11px;color:#374151;white-space:nowrap;flex-shrink:0;}'
        + '.hb-ai-option-select{height:30px;border:1px solid #d1d5db;border-radius:6px;padding:0 18px 0 6px;background:#fff;font-size:12px;min-width:72px;max-width:112px;}'
        + '.hb-ai-stop{height:30px;width:30px;min-width:30px;border:1px solid #cbd5e1;background:#e5e7eb;border-radius:7px;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:background .16s ease,border-color .16s ease,box-shadow .16s ease,transform .16s ease;}'
        + '.hb-ai-stop:hover{background:#dbe1e8;}'
        + '.hb-ai-stop[disabled]{opacity:1;background:#eef2f7;border-color:#cbd5e1;cursor:not-allowed;box-shadow:inset 0 0 0 1px #e2e8f0;}'
        + '.hb-ai-stop[disabled] .hb-ai-stop-icon{background:#94a3b8;}'
        + '.hb-ai-stop.is-active{background:#dc2626;border-color:#b91c1c;box-shadow:0 0 0 2px rgba(220,38,38,.20),0 0 14px rgba(220,38,38,.45);animation:hb-ai-stop-pulse 1.1s ease-in-out infinite;}'
        + '.hb-ai-stop.is-active:hover{background:#ef4444;transform:translateY(-1px);}'
        + '.hb-ai-stop.is-active .hb-ai-stop-icon{background:#fff;}'
        + '.hb-ai-stop-icon{display:inline-block;width:10px;height:10px;background:#64748b;border-radius:2px;transition:background .16s ease;}'
        + '.hb-ai-send{height:30px;width:30px;min-width:30px;border:1px solid #1f6feb;background:#1f6feb;color:#fff;border-radius:7px;padding:0;font-size:12px;cursor:pointer;white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;transition:background .16s ease,border-color .16s ease,box-shadow .16s ease,transform .16s ease;}'
        + '.hb-ai-send:hover{background:#3b82f6;border-color:#2563eb;transform:translateY(-1px);}'
        + '.hb-ai-send.is-disabled,.hb-ai-send[disabled]{opacity:1;background:#eef2f7;border-color:#cbd5e1;color:#94a3b8;cursor:not-allowed;box-shadow:inset 0 0 0 1px #e2e8f0;transform:none;}'
        + '.hb-ai-send.is-disabled:hover,.hb-ai-send[disabled]:hover{background:#eef2f7;border-color:#cbd5e1;transform:none;}'
        + '.hb-ai-send-icon{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;}'
        + '.hb-ai-send-icon svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}'
        + '.hb-ai-resize-handle{position:absolute;right:1px;bottom:1px;width:14px;height:14px;cursor:nwse-resize;z-index:6;border-radius:2px;background:linear-gradient(135deg, transparent 0 54%, #64748b 54% 63%, transparent 63% 100%),linear-gradient(135deg, transparent 0 70%, #64748b 70% 77%, transparent 77% 100%);opacity:.95;}'
        + '.hb-ai-resize-handle:hover{opacity:1;background:linear-gradient(135deg, transparent 0 54%, #475569 54% 63%, transparent 63% 100%),linear-gradient(135deg, transparent 0 70%, #475569 70% 77%, transparent 77% 100%);}'
        + '@keyframes hb-ai-spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}'
        + '@keyframes hb-ai-stop-pulse{0%{box-shadow:0 0 0 2px rgba(220,38,38,.20),0 0 0 rgba(220,38,38,0);}70%{box-shadow:0 0 0 2px rgba(220,38,38,.24),0 0 0 8px rgba(220,38,38,0);}100%{box-shadow:0 0 0 2px rgba(220,38,38,.20),0 0 0 rgba(220,38,38,0);}}'
        + '@media (max-width: 460px){.hb-ai-panel{right:8px;left:8px;width:auto;max-width:none;bottom:64px;height:72vh;}.hb-ai-head-top{align-items:flex-start;gap:6px;}.hb-ai-head-actions{width:100%;}.hb-ai-bottom-row{align-items:center;flex-wrap:nowrap;}.hb-ai-model{flex:1 1 auto;min-width:0;}.hb-ai-option-wrap{flex:0 0 auto;min-width:0;}.hb-ai-option-wrap.open{flex:0 0 72px;min-width:72px;}.hb-ai-option-label{display:none;}.hb-ai-option-select{min-width:0;max-width:none;width:100%;padding-right:14px;font-size:11px;}.hb-ai-option-compact-menu{right:46px;bottom:44px;}.hb-ai-stop,.hb-ai-send{width:32px;min-width:32px;height:30px;padding:0;}.hb-ai-send-icon,.hb-ai-send-icon svg{width:20px;height:20px;}.hb-ai-resize-handle{display:none;}}';
    document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.className = 'hb-ai-fab';
    fab.title = tr('assistant.ui.fab.title', 'AI Assistant');
    fab.textContent = 'AI';
    fab.style.display = 'none';

    var panel = document.createElement('div');
    panel.className = 'hb-ai-panel';

    var dragShield = document.createElement('div');
    dragShield.className = 'hb-ai-drag-shield';

    var head = document.createElement('div');
    head.className = 'hb-ai-head';

    var headTop = document.createElement('div');
    headTop.className = 'hb-ai-head-top';

    var title = document.createElement('div');
    title.className = 'hb-ai-title';
    title.textContent = tr('assistant.ui.title', 'AI Assistant');

    var headActions = document.createElement('div');
    headActions.className = 'hb-ai-head-actions';

    function createHeadActionIconSvg(pathD) {
        return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + pathD + '"></path></svg>';
    }

    var historyBtn = document.createElement('button');
    historyBtn.className = 'hb-ai-mini-btn hb-ai-history-btn';
    var historyBtnIcon = document.createElement('span');
    historyBtnIcon.className = 'hb-ai-btn-icon';
    historyBtnIcon.setAttribute('aria-hidden', 'true');
    historyBtnIcon.innerHTML = createHeadActionIconSvg('M12 6v6l4 2m6.75-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z');
    var historyBtnCount = document.createElement('span');
    historyBtnCount.className = 'hb-ai-history-count';
    historyBtnCount.textContent = '0';
    historyBtn.title = tr('assistant.ui.history', 'History');
    historyBtn.setAttribute('aria-label', tr('assistant.ui.history', 'History'));
    historyBtn.appendChild(historyBtnIcon);
    historyBtn.appendChild(historyBtnCount);

    var settingsBtn = document.createElement('button');
    settingsBtn.className = 'hb-ai-mini-btn hb-ai-icon-btn';
    settingsBtn.title = tr('assistant.ui.settings', 'Settings');
    settingsBtn.setAttribute('aria-label', tr('assistant.ui.settings', 'Settings'));
    var settingsBtnIcon = document.createElement('span');
    settingsBtnIcon.className = 'hb-ai-btn-icon';
    settingsBtnIcon.setAttribute('aria-hidden', 'true');
    settingsBtnIcon.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>';
    settingsBtn.appendChild(settingsBtnIcon);

    var newChatBtn = document.createElement('button');
    newChatBtn.className = 'hb-ai-mini-btn hb-ai-icon-btn';
    newChatBtn.title = tr('assistant.ui.new_chat', 'New Chat');
    newChatBtn.setAttribute('aria-label', tr('assistant.ui.new_chat', 'New Chat'));
    var newChatBtnIcon = document.createElement('span');
    newChatBtnIcon.className = 'hb-ai-btn-icon';
    newChatBtnIcon.setAttribute('aria-hidden', 'true');
    newChatBtnIcon.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16.862 4.487a2.25 2.25 0 1 1 3.182 3.182L9.75 17.963 6 18l.037-3.75L16.862 4.487z"></path><path d="M19.5 14.25v4.125A2.625 2.625 0 0 1 16.875 21H5.625A2.625 2.625 0 0 1 3 18.375V7.125A2.625 2.625 0 0 1 5.625 4.5H9.75"></path></svg>';
    newChatBtn.appendChild(newChatBtnIcon);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'hb-ai-mini-btn hb-ai-close-btn';
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18L18 6M6 6l12 12"></path></svg>';
    closeBtn.title = tr('assistant.ui.close', 'Close');
    closeBtn.setAttribute('aria-label', tr('assistant.ui.close', 'Close'));

    headActions.appendChild(historyBtn);
    headActions.appendChild(settingsBtn);
    headActions.appendChild(newChatBtn);
    headActions.appendChild(closeBtn);

    headTop.appendChild(title);
    headTop.appendChild(headActions);

    var statusRow = document.createElement('div');
    statusRow.className = 'hb-ai-status';

    var statusText = document.createElement('div');
    statusText.className = 'hb-ai-status-text';
    setStatusTextWithProgress(tr('assistant.ui.status.loading_provider', 'Loading provider info.'));

    statusRow.appendChild(statusText);

    var settingsMenu = document.createElement('div');
    settingsMenu.className = 'hb-ai-settings-menu';
    var aiConnectBtn = document.createElement('button');
    aiConnectBtn.className = 'hb-ai-settings-item';
    aiConnectBtn.textContent = tr('assistant.ui.ai_connect', 'AI Connect');
    var settingsFlow = document.createElement('div');
    settingsFlow.className = 'hb-ai-settings-flow';
    var settingsProviderRow = document.createElement('div');
    settingsProviderRow.className = 'hb-ai-settings-row';
    var settingsProviderLabel = document.createElement('span');
    settingsProviderLabel.className = 'hb-ai-settings-label';
    settingsProviderLabel.textContent = 'Provider';
    var settingsProviderSelect = document.createElement('select');
    settingsProviderSelect.className = 'hb-ai-settings-select';
    settingsProviderRow.appendChild(settingsProviderLabel);
    settingsProviderRow.appendChild(settingsProviderSelect);
    var settingsMethodRow = document.createElement('div');
    settingsMethodRow.className = 'hb-ai-settings-row';
    var settingsMethodLabel = document.createElement('span');
    settingsMethodLabel.className = 'hb-ai-settings-label';
    settingsMethodLabel.textContent = 'Method';
    var settingsMethodSelect = document.createElement('select');
    settingsMethodSelect.className = 'hb-ai-settings-select';
    settingsMethodSelect.disabled = true;
    settingsMethodRow.appendChild(settingsMethodLabel);
    settingsMethodRow.appendChild(settingsMethodSelect);
    var settingsActionRow = document.createElement('div');
    settingsActionRow.className = 'hb-ai-settings-actions';
    var connectBtn = document.createElement('button');
    connectBtn.className = 'hb-ai-settings-item';
    connectBtn.textContent = 'Connect';
    var logoutBtn = document.createElement('button');
    logoutBtn.className = 'hb-ai-settings-item';
    logoutBtn.textContent = tr('assistant.ui.logout', 'Logout');
    settingsActionRow.appendChild(connectBtn);
    settingsActionRow.appendChild(logoutBtn);
    settingsFlow.appendChild(settingsProviderRow);
    settingsFlow.appendChild(settingsMethodRow);
    settingsFlow.appendChild(settingsActionRow);
    settingsMenu.appendChild(aiConnectBtn);
    settingsMenu.appendChild(settingsFlow);

    head.appendChild(headTop);
    head.appendChild(statusRow);
    head.appendChild(settingsMenu);
    head.className = 'hb-ai-head hb-ai-draggable';

    var historyPane = document.createElement('div');
    historyPane.className = 'hb-ai-history-pane';

    var historyTop = document.createElement('div');
    historyTop.className = 'hb-ai-history-top';

    var historySearch = document.createElement('input');
    historySearch.className = 'hb-ai-history-search';
    historySearch.type = 'text';
    historySearch.placeholder = tr('assistant.ui.history_search.placeholder', 'Search conversations');

    var historyCloseBtn = document.createElement('button');
    historyCloseBtn.type = 'button';
    historyCloseBtn.className = 'hb-ai-history-close';
    historyCloseBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 18L18 6M6 6l12 12"></path></svg>';

    historyTop.appendChild(historySearch);
    historyTop.appendChild(historyCloseBtn);

    var historyList = document.createElement('div');
    historyList.className = 'hb-ai-history-list';

    historyPane.appendChild(historyTop);
    historyPane.appendChild(historyList);

    var messages = document.createElement('div');
    messages.className = 'hb-ai-messages';

    var foot = document.createElement('div');
    foot.className = 'hb-ai-foot';

    var contextLabel = document.createElement('label');
    contextLabel.className = 'hb-ai-context';
    var contextCheckbox = document.createElement('input');
    contextCheckbox.type = 'checkbox';
    contextCheckbox.checked = false;
    contextLabel.appendChild(contextCheckbox);
    contextLabel.appendChild(document.createTextNode(' ' + tr('assistant.ui.include_page_text', 'Include current page text')));

    var contextRow = document.createElement('div');
    contextRow.className = 'hb-ai-context-row';

    var attachBtn = document.createElement('button');
    attachBtn.type = 'button';
    attachBtn.className = 'hb-ai-attach-btn';
    attachBtn.textContent = tr('assistant.ui.attach_file', 'Attach File');

    var attachHint = document.createElement('div');
    attachHint.className = 'hb-ai-attach-hint';
    attachHint.textContent = tr('assistant.ui.attach_hint', 'You can paste/drag images');

    var attachInput = document.createElement('input');
    attachInput.type = 'file';
    attachInput.multiple = true;
    attachInput.style.display = 'none';

    var attachList = document.createElement('div');
    attachList.className = 'hb-ai-attach-list';

    var queueWrap = document.createElement('div');
    queueWrap.className = 'hb-ai-queue-wrap';
    var queueTop = document.createElement('div');
    queueTop.className = 'hb-ai-queue-top';
    queueTop.textContent = tr('assistant.ui.queue', 'Queue');
    var queueList = document.createElement('div');
    queueList.className = 'hb-ai-queue-list';
    queueWrap.appendChild(queueTop);
    queueWrap.appendChild(queueList);

    function createUsageMetricRow(labelText) {
        var row = document.createElement('div');
        row.className = 'hb-ai-usage-row';
        var top = document.createElement('div');
        top.className = 'hb-ai-usage-top';
        var label = document.createElement('span');
        label.className = 'hb-ai-usage-label';
        label.textContent = labelText;
        var value = document.createElement('span');
        value.className = 'hb-ai-usage-value';
        value.textContent = '-';
        top.appendChild(label);
        top.appendChild(value);
        var bar = document.createElement('div');
        bar.className = 'hb-ai-usage-bar';
        var fill = document.createElement('div');
        fill.className = 'hb-ai-usage-fill';
        bar.appendChild(fill);
        row.appendChild(top);
        row.appendChild(bar);
        return {
            row: row,
            label: label,
            value: value,
            fill: fill
        };
    }

    var usageWrap = document.createElement('div');
    usageWrap.className = 'hb-ai-usage';
    var usageHead = document.createElement('div');
    usageHead.className = 'hb-ai-usage-head';
    var usageTitle = document.createElement('div');
    usageTitle.className = 'hb-ai-usage-title';
    usageTitle.textContent = tr('assistant.ui.usage.title');
    var usageRefreshBtn = document.createElement('button');
    usageRefreshBtn.type = 'button';
    usageRefreshBtn.className = 'hb-ai-usage-refresh-btn';
    usageRefreshBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 12a8 8 0 0 0-14.38-4.86"></path><path d="M4 4v4h4"></path><path d="M4 12a8 8 0 0 0 14.38 4.86"></path><path d="M20 20v-4h-4"></path></svg>';
    usageRefreshBtn.title = tr('assistant.ui.usage.refresh', 'Refresh usage status');
    usageRefreshBtn.setAttribute('aria-label', tr('assistant.ui.usage.refresh', 'Refresh usage status'));
    var usageNote = document.createElement('div');
    usageNote.className = 'hb-ai-usage-note';
    usageNote.textContent = '';
    var usageSessionMetric = createUsageMetricRow(tr('assistant.ui.usage.session'));
    var usageWeeklyMetric = createUsageMetricRow(tr('assistant.ui.usage.weekly'));
    var usageExtraMetric = createUsageMetricRow(tr('assistant.ui.usage.extra'));
    usageHead.appendChild(usageTitle);
    usageHead.appendChild(usageRefreshBtn);
    usageWrap.appendChild(usageHead);
    usageWrap.appendChild(usageNote);
    usageWrap.appendChild(usageSessionMetric.row);
    usageWrap.appendChild(usageWeeklyMetric.row);
    usageWrap.appendChild(usageExtraMetric.row);

    var input = document.createElement('textarea');
    input.className = 'hb-ai-input';
    input.placeholder = tr('assistant.ui.input.placeholder', 'Example: Summarize my worklogs from last week');
    var inputWrap = document.createElement('div');
    inputWrap.className = 'hb-ai-input-wrap';
    inputWrap.appendChild(input);
    inputWrap.appendChild(attachHint);

    var bottomRow = document.createElement('div');
    bottomRow.className = 'hb-ai-bottom-row';

    var providerBtn = document.createElement('button');
    providerBtn.type = 'button';
    providerBtn.className = 'hb-ai-provider-btn';
    providerBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.25 3V4.5M4.5 8.25H3M21 8.25H19.5M4.5 12H3M21 12H19.5M4.5 15.75H3M21 15.75H19.5M8.25 19.5V21M12 3V4.5M12 19.5V21M15.75 3V4.5M15.75 19.5V21M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z"></path></svg>';
    providerBtn.setAttribute('aria-label', 'AI Provider');
    providerBtn.title = 'AI Provider';
    var usageToggleBtn = document.createElement('button');
    usageToggleBtn.type = 'button';
    usageToggleBtn.className = 'hb-ai-usage-toggle-btn';
    usageToggleBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 3v18h18"></path><path d="M7 15.5V12"></path><path d="M12 15.5V9"></path><path d="M17 15.5V6"></path></svg>';
    usageToggleBtn.title = tr('assistant.ui.usage.toggle');
    usageToggleBtn.setAttribute('aria-label', tr('assistant.ui.usage.toggle'));

    var modelSelect = document.createElement('select');
    modelSelect.className = 'hb-ai-model';

    var reasoningWrap = document.createElement('div');
    reasoningWrap.className = 'hb-ai-option-wrap';
    var reasoningLabel = document.createElement('span');
    reasoningLabel.className = 'hb-ai-option-label';
    reasoningLabel.textContent = tr('assistant.ui.reasoning', 'Reasoning');
    var reasoningSelect = document.createElement('select');
    reasoningSelect.className = 'hb-ai-option-select';
    reasoningWrap.appendChild(reasoningLabel);
    reasoningWrap.appendChild(reasoningSelect);
    var reasoningCompactBtn = document.createElement('button');
    reasoningCompactBtn.type = 'button';
    reasoningCompactBtn.className = 'hb-ai-option-compact-btn';
    reasoningCompactBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"></path></svg>';

    var sendBtn = document.createElement('button');
    sendBtn.type = 'button';
    sendBtn.className = 'hb-ai-send';
    sendBtn.innerHTML = '<span class="hb-ai-send-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M9 12.75 12 9.75m0 0 3 3m-3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg></span>';

    var stopBtn = document.createElement('button');
    stopBtn.type = 'button';
    stopBtn.className = 'hb-ai-stop';
    stopBtn.title = tr('assistant.ui.stop.active', 'Stop current response');
    stopBtn.setAttribute('aria-label', tr('assistant.ui.stop.active', 'Stop current response'));
    var stopBtnIcon = document.createElement('span');
    stopBtnIcon.className = 'hb-ai-stop-icon';
    stopBtn.appendChild(stopBtnIcon);

    bottomRow.appendChild(providerBtn);
    bottomRow.appendChild(usageToggleBtn);
    bottomRow.appendChild(modelSelect);
    bottomRow.appendChild(reasoningWrap);
    bottomRow.appendChild(reasoningCompactBtn);
    bottomRow.appendChild(stopBtn);
    bottomRow.appendChild(sendBtn);

    contextRow.appendChild(contextLabel);
    contextRow.appendChild(attachBtn);
    foot.appendChild(contextRow);
    foot.appendChild(attachList);
    foot.appendChild(queueWrap);
    foot.appendChild(attachInput);
    foot.appendChild(inputWrap);
    foot.appendChild(bottomRow);
    foot.appendChild(usageWrap);

    var providerMenu = document.createElement('div');
    providerMenu.className = 'hb-ai-provider-menu';
    foot.appendChild(providerMenu);
    var reasoningCompactMenu = document.createElement('div');
    reasoningCompactMenu.className = 'hb-ai-option-compact-menu';
    foot.appendChild(reasoningCompactMenu);

    panel.appendChild(head);
    panel.appendChild(historyPane);
    panel.appendChild(messages);
    panel.appendChild(foot);

    var resizeHandle = document.createElement('div');
    resizeHandle.className = 'hb-ai-resize-handle';
    resizeHandle.title = tr('assistant.ui.resize', 'Resize');
    panel.appendChild(resizeHandle);

    document.body.appendChild(dragShield);
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    function applyStaticUiTranslations() {
        fab.title = tr('assistant.ui.fab.title', 'AI Assistant');
        title.textContent = tr('assistant.ui.title', 'AI Assistant');
        historyBtn.title = tr('assistant.ui.history', 'History');
        historyBtn.setAttribute('aria-label', tr('assistant.ui.history', 'History'));
        settingsBtn.title = tr('assistant.ui.settings', 'Settings');
        settingsBtn.setAttribute('aria-label', tr('assistant.ui.settings', 'Settings'));
        newChatBtn.title = tr('assistant.ui.new_chat', 'New Chat');
        newChatBtn.setAttribute('aria-label', tr('assistant.ui.new_chat', 'New Chat'));
        closeBtn.title = tr('assistant.ui.close', 'Close');
        closeBtn.setAttribute('aria-label', tr('assistant.ui.close', 'Close'));
        aiConnectBtn.textContent = tr('assistant.ui.ai_connect', 'AI Connect');
        settingsProviderLabel.textContent = tr('assistant.ui.provider', 'Provider');
        settingsMethodLabel.textContent = tr('assistant.ui.connect_method', 'Method');
        connectBtn.textContent = tr('assistant.ui.connection_setup', 'Connection Setup');
        logoutBtn.textContent = tr('assistant.ui.logout', 'Logout');
        providerBtn.title = tr('assistant.ui.provider', 'Provider');
        providerBtn.setAttribute('aria-label', tr('assistant.ui.provider', 'Provider'));
        usageToggleBtn.title = tr('assistant.ui.usage.toggle');
        usageToggleBtn.setAttribute('aria-label', tr('assistant.ui.usage.toggle'));
        usageRefreshBtn.title = tr('assistant.ui.usage.refresh', 'Refresh usage status');
        usageRefreshBtn.setAttribute('aria-label', tr('assistant.ui.usage.refresh', 'Refresh usage status'));
        var reasoningButtonLabel = tr('assistant.ui.reasoning', 'Reasoning');
        reasoningCompactBtn.title = reasoningButtonLabel;
        reasoningCompactBtn.setAttribute('aria-label', reasoningButtonLabel);
        historySearch.placeholder = tr('assistant.ui.history_search.placeholder', 'Search conversations');
        historyCloseBtn.title = tr('assistant.ui.close', 'Close');
        historyCloseBtn.setAttribute('aria-label', tr('assistant.ui.close', 'Close'));
        attachBtn.textContent = tr('assistant.ui.attach_file', 'Attach File');
        if (!state.pendingAttachments.length) {
            attachHint.textContent = tr('assistant.ui.attach_hint', 'You can paste/drag images');
        }
        if (!state.requestQueue.length) {
            queueTop.textContent = tr('assistant.ui.queue', 'Queue');
        }
        usageTitle.textContent = tr('assistant.ui.usage.title');
        usageSessionMetric.label.textContent = tr('assistant.ui.usage.session');
        usageWeeklyMetric.label.textContent = tr('assistant.ui.usage.weekly');
        usageExtraMetric.label.textContent = tr('assistant.ui.usage.extra');
        input.placeholder = tr('assistant.ui.input.placeholder', 'Example: Summarize my worklogs from last week');
        reasoningLabel.textContent = tr('assistant.ui.reasoning', 'Reasoning');
        var sendLabel = tr('assistant.ui.send', 'Send');
        sendBtn.title = sendLabel;
        sendBtn.setAttribute('aria-label', sendLabel);
        rebuildReasoningCompactMenu(reasoningOptionsForModel(selectedModelOption()));
        if (resizeHandle) resizeHandle.title = tr('assistant.ui.resize', 'Resize');
        if (contextLabel.lastChild) {
            contextLabel.removeChild(contextLabel.lastChild);
        }
        contextLabel.appendChild(document.createTextNode(' ' + tr('assistant.ui.include_page_text', 'Include current page text')));
        if (!state.providersLoaded) {
            setStatusTextWithProgress(tr('assistant.ui.status.loading_provider', 'Loading provider info.'));
        }
        applyPersonalAiAllowedUi();
    }

    function loadAssistantI18n(force) {
        if (state.i18nLoaded && !force) return Promise.resolve(state.i18n);
        if (!window.fetch) {
            state.i18nLoaded = true;
            applyStaticUiTranslations();
            return Promise.resolve(state.i18n);
        }
        var url = apiBase + 'i18n';
        return fetch(url, { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                var rows = normalizeAssistantI18nRows(res && (res.rows || res.data) ? (res.rows || res.data) : {});
                state.i18n = rows || {};
                state.i18nLang = normalizeAssistantLang(res && res.lang ? res.lang : '');
                state.i18nLoaded = true;
                applyStaticUiTranslations();
                updateReasoningSelectForModel();
                updateModelSelectTooltip();
                renderHistoryButtonState();
                updateStopButtonState();
                renderAttachmentList();
                renderRequestQueue();
                return state.i18n;
            })
            .catch(function () {
                state.i18nLoaded = true;
                applyStaticUiTranslations();
                return state.i18n;
            });
    }

    var panelPointerState = null;
    var panelBodyUserSelectBackup = '';
    var dragShieldMode = '';
    var fabPointerState = null;
    var fabBodyUserSelectBackup = '';
    var fabDragMoved = false;
    var fabIgnoreClickUntil = 0;

    function remapLegacyProviderId(providerId) {
        var id = collapseText(providerId || '').toLowerCase();
        if (id && Object.prototype.hasOwnProperty.call(PROVIDER_ID_ALIASES, id)) {
            return PROVIDER_ID_ALIASES[id];
        }
        return id;
    }

    function remapLegacyModelKey(key) {
        var raw = collapseText(key || '');
        if (!raw || raw.indexOf(':') < 0) return raw;
        var parts = raw.split(':');
        if (!parts.length) return raw;
        var provider = remapLegacyProviderId(parts.shift());
        var model = parts.join(':');
        model = resolveProviderModelAlias(provider, model);
        return provider + ':' + model;
    }

    function findModelOption(key) {
        var rawKey = collapseText(key || '');
        for (var idx = 0; idx < MODEL_OPTIONS.length; idx++) {
            if (MODEL_OPTIONS[idx].key === rawKey) return MODEL_OPTIONS[idx];
        }
        var remappedKey = remapLegacyModelKey(rawKey);
        if (remappedKey && remappedKey !== rawKey) {
            for (var i = 0; i < MODEL_OPTIONS.length; i++) {
                if (MODEL_OPTIONS[i].key === remappedKey) return MODEL_OPTIONS[i];
            }
        }
        return null;
    }

    function selectedModelOption() {
        var key = modelSelect.value || defaultModelKey();
        if (!key) return null;
        return findModelOption(key);
    }

    function reasoningOptionsForModel(modelOption) {
        if (!modelOption || !modelOption.reasoning_levels || !modelOption.reasoning_levels.length) return [];
        var rows = [];
        var i;
        for (i = 0; i < modelOption.reasoning_levels.length; i++) {
            var levelKey = modelOption.reasoning_levels[i];
            var j;
            for (j = 0; j < REASONING_LEVELS.length; j++) {
                if (REASONING_LEVELS[j].value !== levelKey) continue;
                rows.push({
                    value: REASONING_LEVELS[j].value,
                    label: tr(REASONING_LEVELS[j].labelKey || '', REASONING_LEVELS[j].label)
                });
                break;
            }
        }
        return rows;
    }

    function hasReasoningOption(modelOption, value) {
        var options = reasoningOptionsForModel(modelOption);
        var i;
        for (i = 0; i < options.length; i++) {
            if (options[i].value === value) return true;
        }
        return false;
    }

    function resolveReasoningValue(modelOption) {
        if (!modelOption) return '';
        var rows = reasoningOptionsForModel(modelOption);
        if (!rows.length) return '';

        var remembered = state.modelReasoningSelections[modelOption.key] || '';
        if (remembered && hasReasoningOption(modelOption, remembered)) return remembered;

        var preferred = modelOption.default_reasoning || '';
        if (preferred && hasReasoningOption(modelOption, preferred)) return preferred;

        if (hasReasoningOption(modelOption, 'medium')) return 'medium';
        return rows[0].value || '';
    }

    function closeReasoningCompactMenu() {
        reasoningCompactMenu.className = 'hb-ai-option-compact-menu';
    }

    function applyReasoningSelection(value) {
        var option = selectedModelOption();
        if (!option) return;
        var selectedValue = collapseText(value || '');
        if (!selectedValue || !hasReasoningOption(option, selectedValue)) return;
        reasoningSelect.value = selectedValue;
        state.modelReasoningSelections[option.key] = selectedValue;
    }

    function rebuildReasoningCompactMenu(rows) {
        reasoningCompactMenu.innerHTML = '';
        if (!rows || !rows.length) return;
        var selectedValue = collapseText(reasoningSelect.value || '');
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i];
            var item = document.createElement('button');
            item.type = 'button';
            item.className = 'hb-ai-option-compact-item' + (selectedValue === row.value ? ' active' : '');
            item.setAttribute('data-value', row.value);
            item.textContent = row.label;
            item.addEventListener('click', function () {
                var value = this.getAttribute('data-value') || '';
                applyReasoningSelection(value);
                rebuildReasoningCompactMenu(reasoningOptionsForModel(selectedModelOption()));
                closeReasoningCompactMenu();
            });
            reasoningCompactMenu.appendChild(item);
        }
    }

    function updateBottomRowCompactMode() {
        removeClassName(bottomRow, 'hb-ai-bottom-row-compact');
        var hasReasoning = reasoningWrap.className.indexOf('open') >= 0;
        if (!hasReasoning) {
            closeReasoningCompactMenu();
            return;
        }
        var rowWidth = bottomRow.clientWidth || 0;
        var modelWidth = modelSelect.clientWidth || 0;
        var shouldCompact = (
            bottomRow.scrollWidth > (rowWidth + 4)
            || rowWidth < 390
            || modelWidth < 130
        );
        if (shouldCompact) {
            addClassName(bottomRow, 'hb-ai-bottom-row-compact');
            return;
        }
        closeReasoningCompactMenu();
    }

    function updateReasoningSelectForModel() {
        var option = selectedModelOption();
        var rows = reasoningOptionsForModel(option);
        reasoningSelect.innerHTML = '';
        if (!rows.length) {
            reasoningWrap.className = 'hb-ai-option-wrap';
            rebuildReasoningCompactMenu([]);
            updateBottomRowCompactMode();
            return;
        }

        var i;
        for (i = 0; i < rows.length; i++) {
            var opt = document.createElement('option');
            opt.value = rows[i].value;
            opt.textContent = rows[i].label;
            reasoningSelect.appendChild(opt);
        }

        var selectedValue = resolveReasoningValue(option);
        if (selectedValue) {
            reasoningSelect.value = selectedValue;
            state.modelReasoningSelections[option.key] = selectedValue;
        }
        reasoningWrap.className = 'hb-ai-option-wrap open';
        rebuildReasoningCompactMenu(rows);
        setTimeout(updateBottomRowCompactMode, 0);
    }

    function addClassName(el, className) {
        if (!el || !className) return;
        if (el.classList && el.classList.add) {
            el.classList.add(className);
            return;
        }
        var cur = String(el.className || '');
        if (new RegExp('(^|\\s)' + className + '(\\s|$)').test(cur)) return;
        el.className = cur ? (cur + ' ' + className) : className;
    }

    function removeClassName(el, className) {
        if (!el || !className) return;
        if (el.classList && el.classList.remove) {
            el.classList.remove(className);
            return;
        }
        var cur = String(el.className || '');
        if (!cur) return;
        var next = cur
            .replace(new RegExp('(^|\\s)' + className + '(?=\\s|$)', 'g'), ' ')
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/g, '');
        el.className = next;
    }

    function providerInfo(providerId) {
        return state.providers[providerId] || null;
    }

    function providerLabel(providerId) {
        var info = providerInfo(providerId);
        return info && info.name ? info.name : providerId;
    }

    function resolveProviderModelAlias(providerId, modelName) {
        var provider = remapLegacyProviderId(providerId || '');
        var model = collapseText(modelName || '');
        if (!provider || !model) return model;
        var info = providerInfo(provider);
        var aliases = info && info.model_aliases && typeof info.model_aliases === 'object'
            ? info.model_aliases
            : null;
        if (!aliases) return model;
        var lowerModel = model.toLowerCase();
        if (Object.prototype.hasOwnProperty.call(aliases, model)) {
            return collapseText(aliases[model] || '') || model;
        }
        if (Object.prototype.hasOwnProperty.call(aliases, lowerModel)) {
            return collapseText(aliases[lowerModel] || '') || model;
        }
        for (var aliasKey in aliases) {
            if (!Object.prototype.hasOwnProperty.call(aliases, aliasKey)) continue;
            if ((aliasKey || '').toLowerCase() !== lowerModel) continue;
            return collapseText(aliases[aliasKey] || '') || model;
        }
        return model;
    }

    function resolveProviderModelLabel(providerId, modelName) {
        var provider = remapLegacyProviderId(providerId || '');
        var model = collapseText(modelName || '');
        if (!provider || !model) return '';
        var info = providerInfo(provider);
        var labels = info && info.model_labels && typeof info.model_labels === 'object'
            ? info.model_labels
            : null;
        if (!labels) return '';
        if (Object.prototype.hasOwnProperty.call(labels, model)) {
            return collapseText(labels[model] || '');
        }
        var lowerModel = model.toLowerCase();
        for (var labelKey in labels) {
            if (!Object.prototype.hasOwnProperty.call(labels, labelKey)) continue;
            if ((labelKey || '').toLowerCase() !== lowerModel) continue;
            return collapseText(labels[labelKey] || '');
        }
        return '';
    }

    function isMergedProviderFamily(providerId) {
        return !!MERGED_PROVIDER_FAMILIES[providerId];
    }

    function providerFamilyKey(providerId) {
        var id = collapseText(providerId || '');
        if (!id) return '';
        if (isMergedProviderFamily(id)) return id;
        for (var familyId in MERGED_PROVIDER_FAMILIES) {
            if (!Object.prototype.hasOwnProperty.call(MERGED_PROVIDER_FAMILIES, familyId)) continue;
            var members = MERGED_PROVIDER_FAMILIES[familyId];
            if (!Array.isArray(members)) continue;
            for (var i = 0; i < members.length; i++) {
                if (members[i] === id) return familyId;
            }
        }
        return id;
    }

    function providerFamilyLabel(familyId) {
        var id = collapseText(familyId || '');
        if (!id) return '';
        if (MERGED_PROVIDER_LABELS[id]) return MERGED_PROVIDER_LABELS[id];
        return providerLabel(id);
    }

    function providerFamilyMembers(familyId) {
        var id = collapseText(familyId || '');
        if (!id) return [];
        var out = [];
        var seen = {};
        var configured = MERGED_PROVIDER_FAMILIES[id];
        var i;
        if (Array.isArray(configured)) {
            for (i = 0; i < configured.length; i++) {
                var memberId = collapseText(configured[i] || '');
                if (!memberId || seen[memberId] || !providerInfo(memberId)) continue;
                seen[memberId] = true;
                out.push(memberId);
            }
        }
        for (var providerId in state.providers) {
            if (!Object.prototype.hasOwnProperty.call(state.providers, providerId)) continue;
            if (providerFamilyKey(providerId) !== id) continue;
            if (seen[providerId]) continue;
            seen[providerId] = true;
            out.push(providerId);
        }
        if (!out.length && providerInfo(id)) {
            out.push(id);
        }
        return out;
    }

    function providerMethodLabel(mode) {
        var normalized = collapseText(mode || '');
        if (normalized === 'local') return 'Local API';
        if (normalized === 'api_key') return 'API Key';
        if (normalized === 'sigv4') return 'Access Key';
        return 'OAuth';
    }

    function providerFamilyMethodRows(familyId) {
        var members = providerFamilyMembers(familyId);
        var rowsByMode = {};
        var order = ['oauth', 'api_key', 'local', 'sigv4'];
        var i;
        for (i = 0; i < members.length; i++) {
            var providerId = members[i];
            var info = providerInfo(providerId);
            if (!info) continue;
            var activeMode = collapseText(info.connect_mode || 'oauth') || 'oauth';
            var declaredModes = Array.isArray(info.connect_modes) && info.connect_modes.length
                ? info.connect_modes
                : [activeMode];
            var modeAvailabilityMap = (info && info.connect_mode_available && typeof info.connect_mode_available === 'object')
                ? info.connect_mode_available
                : null;
            var modeReasonMap = (info && info.connect_mode_reason && typeof info.connect_mode_reason === 'object')
                ? info.connect_mode_reason
                : null;
            var j;
            for (j = 0; j < declaredModes.length; j++) {
                var mode = collapseText(declaredModes[j] || '');
                if (!mode) continue;
                var modeLinked = !!(info.linked && activeMode === mode);
                var modeAvailable = modeAvailabilityMap && Object.prototype.hasOwnProperty.call(modeAvailabilityMap, mode)
                    ? !!modeAvailabilityMap[mode]
                    : !!info.available;
                var modeReason = modeReasonMap && Object.prototype.hasOwnProperty.call(modeReasonMap, mode)
                    ? collapseText(modeReasonMap[mode] || '')
                    : collapseText(info.reason || '');
                var score = 0;
                if (modeAvailable) score += 10;
                if (modeLinked) score += 100;
                if (activeMode === mode) score += 20;
                var current = rowsByMode[mode];
                if (!current || score > current._score) {
                    rowsByMode[mode] = {
                        mode: mode,
                        provider: providerId,
                        info: info,
                        linked: modeLinked,
                        available: modeAvailable,
                        reason: modeReason,
                        _score: score
                    };
                }
            }
        }

        var rows = [];
        for (i = 0; i < order.length; i++) {
            if (rowsByMode[order[i]]) rows.push(rowsByMode[order[i]]);
            delete rowsByMode[order[i]];
        }
        for (var modeKey in rowsByMode) {
            if (!Object.prototype.hasOwnProperty.call(rowsByMode, modeKey)) continue;
            rows.push(rowsByMode[modeKey]);
        }
        return rows;
    }

    function resolveDefaultMethodForFamily(familyId) {
        var family = collapseText(familyId || '');
        var rows = providerFamilyMethodRows(family);
        if (!rows.length) return '';

        var remembered = collapseText(state.settingsMethodByFamily[family] || '');
        if (remembered) {
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].mode === remembered) return remembered;
            }
        }

        var preferredOrder = ['oauth', 'api_key', 'local', 'sigv4'];
        var i;
        for (i = 0; i < rows.length; i++) {
            if (rows[i].available && rows[i].linked) return rows[i].mode;
        }
        for (i = 0; i < preferredOrder.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (rows[j].mode === preferredOrder[i] && rows[j].available) return rows[j].mode;
            }
        }
        for (i = 0; i < preferredOrder.length; i++) {
            for (var k = 0; k < rows.length; k++) {
                if (rows[k].mode === preferredOrder[i]) return rows[k].mode;
            }
        }
        return rows[0].mode || '';
    }

    function resolveProviderForFamilyMethod(familyId, method) {
        var family = collapseText(familyId || '');
        if (!family) return '';
        var rows = providerFamilyMethodRows(family);
        if (!rows.length) {
            return providerInfo(family) ? family : '';
        }

        var targetMethod = collapseText(method || '');
        if (!targetMethod) targetMethod = resolveDefaultMethodForFamily(family);
        var candidate = '';
        var bestScore = -1;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row || !row.provider) continue;
            if (targetMethod && row.mode !== targetMethod) continue;
            var score = 0;
            if (row.available) score += 10;
            if (row.linked) score += 100;
            if (score > bestScore) {
                bestScore = score;
                candidate = row.provider;
            }
        }
        if (candidate) return candidate;
        return rows[0].provider || '';
    }

    function resolveProviderForFamilyDefault(familyId) {
        var family = collapseText(familyId || '');
        if (!family) return '';
        var method = resolveDefaultMethodForFamily(family);
        var providerId = resolveProviderForFamilyMethod(family, method);
        if (providerId) return providerId;
        var members = providerFamilyMembers(family);
        if (members.length) return members[0];
        return providerInfo(family) ? family : '';
    }

    function isProviderFamilyLinked(familyId) {
        var rows = providerFamilyMethodRows(familyId);
        for (var i = 0; i < rows.length; i++) {
            if (rows[i] && rows[i].linked) return true;
        }
        return false;
    }

    function isProviderFamilyAvailable(familyId) {
        var rows = providerFamilyMethodRows(familyId);
        for (var i = 0; i < rows.length; i++) {
            if (rows[i] && rows[i].available) return true;
        }
        return false;
    }

    function providerFamilyUnavailableReason(familyId) {
        var rows = providerFamilyMethodRows(familyId);
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i] || null;
            if (!row) continue;
            if (row.available) return '';
            if (row.reason) return row.reason;
        }
        return '';
    }

    function isCompanyProviderInfo(info) {
        if (!info || typeof info !== 'object') return false;
        if (collapseText(info.scope || '').toLowerCase() === 'company') return true;
        var entryId = parseInt(info.company_provider_id, 10);
        return !!(isFinite(entryId) && entryId > 0);
    }

    function isCompanyProviderFamily(familyId) {
        var members = providerFamilyMembers(familyId);
        var i;
        for (i = 0; i < members.length; i++) {
            var info = providerInfo(members[i]);
            if (isCompanyProviderInfo(info)) return true;
        }
        return false;
    }

    function applyPersonalAiAllowedUi() {
        var allowed = state.personalAiAllowed !== false;
        settingsBtn.style.display = allowed ? '' : 'none';
        if (!allowed) {
            toggleSettings(false);
        }
    }

    function formatUsageMetricText(used, limit, remaining) {
        var u = parseInt(used, 10);
        if (!isFinite(u) || u < 0) u = 0;
        var l = parseInt(limit, 10);
        if (!isFinite(l) || l < 0) l = 0;
        var r = parseInt(remaining, 10);
        if (!isFinite(r) || r < 0) r = 0;
        var formatNumber = function(value) {
            var num = parseInt(value, 10);
            if (!isFinite(num) || num < 0) num = 0;
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
        if (l <= 0) {
            return formatNumber(u) + ' / -';
        }
        var pct = Math.max(0, Math.min(100, (u * 100) / l));
        return formatNumber(u) + ' / ' + formatNumber(l) + ' (' + pct.toFixed(1) + '%, ' + formatNumber(r) + ' ' + tr('assistant.ui.usage.remaining', 'remaining') + ')';
    }

    function formatUsageSessionRemainingMinutes(seconds) {
        var value = parseInt(seconds, 10);
        var hourUnit = tr('assistant.ui.usage.unit.hour', 'h');
        var minuteUnit = tr('assistant.ui.usage.unit.minute', 'm');
        if (!isFinite(value) || value <= 0) return '0' + minuteUnit;
        var totalMinutes = Math.floor(value / 60);
        if (totalMinutes <= 0) totalMinutes = 1;
        if (totalMinutes >= 60) {
            var hours = Math.floor(totalMinutes / 60);
            var minutes = totalMinutes % 60;
            return hours + hourUnit + ' ' + minutes + minuteUnit;
        }
        return totalMinutes + minuteUnit;
    }

    function parseUsageDateTime(raw) {
        var text = collapseText(raw || '');
        if (!text) return null;
        var normalized = text.replace(' ', 'T');
        var dt = new Date(normalized);
        if (!dt || isNaN(dt.getTime())) return null;
        return dt;
    }

    function formatUsageSessionTime(raw) {
        var dt = parseUsageDateTime(raw);
        if (!dt) return '';
        var hh = ('0' + dt.getHours()).slice(-2);
        var mi = ('0' + dt.getMinutes()).slice(-2);
        return hh + ':' + mi;
    }

    function formatUsageWeekEndDate(raw) {
        var dt = parseUsageDateTime(raw);
        if (!dt) return '';
        var mm = ('0' + (dt.getMonth() + 1)).slice(-2);
        var dd = ('0' + dt.getDate()).slice(-2);
        return mm + '/' + dd;
    }

    function formatUsageSessionMetricLabel(status) {
        var base = tr('assistant.ui.usage.session');
        var session = status && status.session && typeof status.session === 'object' ? status.session : {};
        if (session.active === false) return base;
        var endAtText = formatUsageSessionTime(session.expires_at || '');
        if (!endAtText) return base;
        var remainText = formatUsageSessionRemainingMinutes(session.remaining_seconds);
        return base + ' ~ ' + endAtText + ' (' + remainText + ')';
    }

    function formatUsageWeeklyMetricLabel(status) {
        var base = tr('assistant.ui.usage.weekly');
        var weekly = status && status.weekly && typeof status.weekly === 'object' ? status.weekly : {};
        var endAtText = formatUsageWeekEndDate(weekly.week_end_at || '');
        if (!endAtText) return base;
        return base + ' ~ ' + endAtText;
    }

    function updateUsageMetricRow(metric, used, limit, remaining) {
        if (!metric) return;
        var u = parseInt(used, 10);
        if (!isFinite(u) || u < 0) u = 0;
        var l = parseInt(limit, 10);
        if (!isFinite(l) || l < 0) l = 0;
        var r = parseInt(remaining, 10);
        if (!isFinite(r) || r < 0) r = 0;

        metric.value.textContent = formatUsageMetricText(u, l, r);
        var ratio = 0;
        if (l > 0) {
            ratio = Math.max(0, Math.min(100, (u * 100) / l));
        }
        metric.fill.style.width = ratio.toFixed(2) + '%';
        metric.fill.className = 'hb-ai-usage-fill';
        if (ratio >= 100) addClassName(metric.fill, 'danger');
        else if (ratio >= 80) addClassName(metric.fill, 'warn');
    }

    function renderUsageQuotaStatus() {
        var selected = selectedModelOption();
        var providerId = selected && selected.provider ? selected.provider : '';
        var info = providerId ? providerInfo(providerId) : null;
        var companyProvider = !!(info && isCompanyProviderInfo(info));
        usageSessionMetric.label.textContent = tr('assistant.ui.usage.session');
        usageWeeklyMetric.label.textContent = tr('assistant.ui.usage.weekly');
        usageExtraMetric.label.textContent = tr('assistant.ui.usage.extra');
        usageToggleBtn.style.display = companyProvider ? 'inline-flex' : 'none';
        usageToggleBtn.disabled = !companyProvider;
        usageRefreshBtn.disabled = !companyProvider;
        if (!companyProvider && state.usagePanelOpen) {
            state.usagePanelOpen = false;
        }
        usageToggleBtn.className = 'hb-ai-usage-toggle-btn' + (state.usagePanelOpen && companyProvider ? ' active' : '');

        if (!state.usagePanelOpen) {
            usageWrap.className = 'hb-ai-usage';
            usageNote.textContent = '';
            return;
        }
        if (!info || !isCompanyProviderInfo(info)) {
            usageWrap.className = 'hb-ai-usage';
            usageNote.textContent = '';
            return;
        }

        usageWrap.className = 'hb-ai-usage open';
        var family = providerFamilyKey(providerId);
        var status = state.selectedQuotaStatus;
        if (!status && family && state.quotaByProvider && state.quotaByProvider[family]) {
            status = state.quotaByProvider[family];
        }
        if (!status || typeof status !== 'object') {
            usageNote.textContent = tr('assistant.ui.usage.loading');
            usageSessionMetric.row.style.display = '';
            usageWeeklyMetric.row.style.display = '';
            usageExtraMetric.row.style.display = 'none';
            updateUsageMetricRow(usageSessionMetric, 0, 0, 0);
            updateUsageMetricRow(usageWeeklyMetric, 0, 0, 0);
            return;
        }

        if (status.enabled === false) {
            var isUnlimitedPolicy = !!(status.policy && status.policy.unlimited);
            usageNote.textContent = isUnlimitedPolicy
                ? tr('assistant.ui.usage.unlimited')
                : tr('assistant.ui.usage.disabled');
            usageSessionMetric.row.style.display = 'none';
            usageWeeklyMetric.row.style.display = 'none';
            usageExtraMetric.row.style.display = 'none';
            return;
        }

        var usageNoteParts = [];
        if (status.allowed === false) {
            var rawMessage = collapseText(status.message || '');
            if (!rawMessage) {
                usageNoteParts.push(tr('assistant.ui.usage.exceeded'));
            } else if (rawMessage === 'Token quota exceeded.') {
                usageNoteParts.push(tr('assistant.ui.usage.exceeded'));
            } else {
                usageNoteParts.push(rawMessage);
            }
        }
        usageNote.textContent = usageNoteParts.join(' / ');

        var session = status.session || {};
        var weekly = status.weekly || {};
        var extra = status.extra || {};
        usageSessionMetric.label.textContent = formatUsageSessionMetricLabel(status);
        usageWeeklyMetric.label.textContent = formatUsageWeeklyMetricLabel(status);
        usageSessionMetric.row.style.display = '';
        usageWeeklyMetric.row.style.display = '';
        updateUsageMetricRow(usageSessionMetric, session.used, session.limit, session.remaining);
        updateUsageMetricRow(usageWeeklyMetric, weekly.used, weekly.limit, weekly.remaining);

        if (extra && extra.enabled) {
            usageExtraMetric.row.style.display = '';
            updateUsageMetricRow(usageExtraMetric, extra.used, extra.limit, extra.remaining);
        } else {
            usageExtraMetric.row.style.display = 'none';
        }
    }

    function setQuotaStatusForProvider(providerId, quotaStatus) {
        var family = providerFamilyKey(providerId || '');
        if (!family) return;
        if (!state.quotaByProvider || typeof state.quotaByProvider !== 'object') {
            state.quotaByProvider = {};
        }
        if (quotaStatus && typeof quotaStatus === 'object') {
            state.quotaByProvider[family] = quotaStatus;
        } else {
            delete state.quotaByProvider[family];
        }
        var selected = selectedModelOption();
        var selectedFamily = selected && selected.provider ? providerFamilyKey(selected.provider) : providerFamilyKey(state.selectedProviderId || '');
        if (selectedFamily === family) {
            state.selectedQuotaStatus = quotaStatus && typeof quotaStatus === 'object' ? quotaStatus : null;
            renderUsageQuotaStatus();
        }
    }

    function refreshUsageStatusForProvider(providerId, force, conversationId) {
        providerId = collapseText(providerId || '');
        if (!providerId) {
            var emptySelected = selectedModelOption();
            if (!emptySelected || !emptySelected.provider) {
                state.selectedQuotaStatus = null;
                renderUsageQuotaStatus();
            }
            return Promise.resolve();
        }
        var info = providerInfo(providerId);
        if (!info || !isCompanyProviderInfo(info)) {
            var selectedFamilyForInvalid = providerFamilyKey((selectedModelOption() && selectedModelOption().provider) || '');
            if (selectedFamilyForInvalid === providerFamilyKey(providerId)) {
                state.selectedQuotaStatus = null;
                renderUsageQuotaStatus();
            }
            return Promise.resolve();
        }
        var companyProviderId = parseInt(info.company_provider_id, 10);
        if (!isFinite(companyProviderId) || companyProviderId <= 0) {
            var selectedFamilyForMissing = providerFamilyKey((selectedModelOption() && selectedModelOption().provider) || '');
            if (selectedFamilyForMissing === providerFamilyKey(providerId)) {
                state.selectedQuotaStatus = null;
                renderUsageQuotaStatus();
            }
            return Promise.resolve();
        }

        var family = providerFamilyKey(providerId);
        if (!force && state.quotaByProvider && state.quotaByProvider[family]) {
            if (providerFamilyKey((selectedModelOption() && selectedModelOption().provider) || '') === family) {
                state.selectedQuotaStatus = state.quotaByProvider[family];
                renderUsageQuotaStatus();
            }
            return Promise.resolve(state.quotaByProvider[family]);
        }

        if (!window.fetch) {
            if (providerFamilyKey((selectedModelOption() && selectedModelOption().provider) || '') === family) {
                state.selectedQuotaStatus = null;
                renderUsageQuotaStatus();
            }
            return Promise.resolve();
        }

        if (state.usagePanelOpen && providerFamilyKey((selectedModelOption() && selectedModelOption().provider) || '') === family) {
            usageWrap.className = 'hb-ai-usage open';
            usageNote.textContent = tr('assistant.ui.usage.loading');
        }
        if (!state.usageRefreshSeqByFamily || typeof state.usageRefreshSeqByFamily !== 'object') {
            state.usageRefreshSeqByFamily = {};
        }
        var requestSeq = (parseInt(state.usageRefreshSeqByFamily[family], 10) || 0) + 1;
        state.usageRefreshSeqByFamily[family] = requestSeq;
        var url = apiBase + 'usage_status?company_provider_id=' + encodeURIComponent(companyProviderId);
        var normalizedConversationId = collapseText(conversationId || '');
        if (normalizedConversationId) {
            url += '&conversation_id=' + encodeURIComponent(normalizedConversationId);
        }
        return fetch(url, { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if ((parseInt(state.usageRefreshSeqByFamily[family], 10) || 0) !== requestSeq) {
                    return state.quotaByProvider && state.quotaByProvider[family] ? state.quotaByProvider[family] : null;
                }
                if (!res || !res.success || !res.quota) {
                    setQuotaStatusForProvider(providerId, null);
                    return null;
                }
                setQuotaStatusForProvider(providerId, res.quota);
                return res.quota;
            })
            .catch(function () {
                if ((parseInt(state.usageRefreshSeqByFamily[family], 10) || 0) !== requestSeq) {
                    return state.quotaByProvider && state.quotaByProvider[family] ? state.quotaByProvider[family] : null;
                }
                setQuotaStatusForProvider(providerId, null);
                return null;
            });
    }

    function refreshUsageStatusForSelectedProvider(force) {
        var selected = selectedModelOption();
        var providerId = selected && selected.provider ? selected.provider : '';
        var activeConversation = getConversationById(state.activeConversationId);
        return refreshUsageStatusForProvider(
            providerId,
            force,
            activeConversation && activeConversation.id ? activeConversation.id : ''
        );
    }

    function isManualOAuthProvider(info) {
        return !!(info && info.manual_oauth_complete);
    }

    function clearDeviceOAuthPoller(providerId) {
        var id = collapseText(providerId || '');
        if (!id || !state.deviceOAuthPollers || !state.deviceOAuthPollers[id]) return;
        var current = state.deviceOAuthPollers[id];
        if (current && current.timerId) {
            try {
                window.clearTimeout(current.timerId);
            } catch (e) {
                // ignore timer clear errors
            }
        }
        delete state.deviceOAuthPollers[id];
    }

    function clearAllDeviceOAuthPollers() {
        if (!state.deviceOAuthPollers) return;
        for (var providerId in state.deviceOAuthPollers) {
            if (!Object.prototype.hasOwnProperty.call(state.deviceOAuthPollers, providerId)) continue;
            clearDeviceOAuthPoller(providerId);
        }
    }

    function hasPendingOAuth(providerId) {
        return !!(state.pendingOAuth && state.pendingOAuth[providerId]);
    }

    function setPendingOAuth(providerId, isPending) {
        if (!providerId) return;
        state.pendingOAuth[providerId] = !!isPending;
        if (!isPending) {
            clearDeviceOAuthPoller(providerId);
        }
    }

    function isLocalProviderInfo(info) {
        return !!(info && info.connect_mode === 'local');
    }

    function isApiKeyProviderInfo(info) {
        return !!(info && info.connect_mode === 'api_key');
    }

    function isSigV4ProviderInfo(info) {
        return !!(info && info.connect_mode === 'sigv4');
    }

    function normalizeModelOptionKey(provider, model) {
        return provider + ':' + (model ? model : 'default');
    }

    function buildProviderModelOption(providerId, providerInfoRow, modelValue) {
        var normalizedModel = resolveProviderModelAlias(providerId, collapseText(modelValue || ''));
        var optionKey = normalizeModelOptionKey(providerId, normalizedModel);
        var templateProviderId = remapLegacyProviderId((providerInfoRow && providerInfoRow.provider) ? providerInfoRow.provider : providerId);
        var template = null;
        var i;
        for (i = 0; i < BASE_MODEL_OPTIONS.length; i++) {
            var item = BASE_MODEL_OPTIONS[i];
            if (!item || item.provider !== templateProviderId) continue;
            if ((item.model || '') === normalizedModel) {
                template = item;
                break;
            }
            if (!template && !item.model && !normalizedModel) {
                template = item;
            }
        }

        var providerName = providerFamilyLabel(providerFamilyKey(providerId));
        if (!providerName) {
            providerName = (providerInfoRow && providerInfoRow.name) ? providerInfoRow.name : providerId;
        }
        var backendModelLabel = resolveProviderModelLabel(providerId, normalizedModel);
        var modelLabel = backendModelLabel || (template && template.label ? template.label : normalizedModel);
        var label = '';
        if (normalizedModel) {
            label = providerName + ' - ' + modelLabel;
        } else if (template && template.label) {
            label = template.label;
        } else {
            label = providerName;
        }

        var defaultReasoning = (template && template.default_reasoning) ? template.default_reasoning : '';
        var providerDefaultReasoning = collapseText(
            (providerInfoRow && providerInfoRow.default_reasoning_effort) ? providerInfoRow.default_reasoning_effort : ''
        ).toLowerCase();
        if (!providerDefaultReasoning && providerInfoRow && providerInfoRow.settings && typeof providerInfoRow.settings === 'object') {
            providerDefaultReasoning = collapseText(providerInfoRow.settings.default_reasoning_effort || '').toLowerCase();
        }
        if (providerDefaultReasoning && template && Array.isArray(template.reasoning_levels)) {
            for (i = 0; i < template.reasoning_levels.length; i++) {
                if ((template.reasoning_levels[i] || '').toLowerCase() !== providerDefaultReasoning) continue;
                defaultReasoning = template.reasoning_levels[i];
                break;
            }
        }

        return {
            key: optionKey,
            provider: providerId,
            model: normalizedModel,
            label: label,
            reasoning_levels: (template && template.reasoning_levels && template.reasoning_levels.slice)
                ? template.reasoning_levels.slice(0)
                : [],
            default_reasoning: defaultReasoning
        };
    }

    function rebuildModelOptionsFromProviders() {
        var rebuilt = [];
        var seen = {};
        var providerId;

        for (providerId in state.providers) {
            if (!Object.prototype.hasOwnProperty.call(state.providers, providerId)) continue;
            var info = state.providers[providerId];
            if (!info) continue;

            var models = [];
            if (Array.isArray(info.models) && info.models.length) {
                var idx;
                for (idx = 0; idx < info.models.length; idx++) {
                    var modelName = collapseText(info.models[idx] || '');
                    if (!modelName) continue;
                    models.push(modelName);
                }
            }
            if (!models.length) {
                var preferred = collapseText(info.model || '');
                if (preferred) models.push(preferred);
            }
            if (!models.length) {
                models.push('');
            }
            models = models.map(function (modelName) {
                return resolveProviderModelAlias(providerId, modelName);
            });

            var j;
            for (j = 0; j < models.length; j++) {
                var option = buildProviderModelOption(providerId, info, models[j]);
                if (!option || !option.key || seen[option.key]) continue;
                seen[option.key] = true;
                rebuilt.push(option);
            }
        }

        if (!rebuilt.length) {
            MODEL_OPTIONS = BASE_MODEL_OPTIONS.slice(0);
            return;
        }
        MODEL_OPTIONS = rebuilt;
    }

    function connectedProviderIds() {
        var out = [];
        var seen = {};
        for (var providerId in state.providers) {
            if (!Object.prototype.hasOwnProperty.call(state.providers, providerId)) continue;
            var info = state.providers[providerId];
            if (!info || !info.available || !info.linked) continue;
            var familyId = providerFamilyKey(providerId);
            if (!familyId || seen[familyId]) continue;
            seen[familyId] = true;
            out.push(familyId);
        }
        out.sort(function (a, b) {
            var ac = isCompanyProviderFamily(a) ? 0 : 1;
            var bc = isCompanyProviderFamily(b) ? 0 : 1;
            if (ac !== bc) return ac - bc;
            var la = providerFamilyLabel(a).toLowerCase();
            var lb = providerFamilyLabel(b).toLowerCase();
            if (la < lb) return -1;
            if (la > lb) return 1;
            return 0;
        });
        return out;
    }

    function modelOptionsForProvider(providerId, connectedOnly) {
        var out = [];
        var targetProvider = providerFamilyKey(providerId || '');
        var linkedOnly = connectedOnly !== false;
        var i;
        for (i = 0; i < MODEL_OPTIONS.length; i++) {
            var option = MODEL_OPTIONS[i];
            if (!option) continue;
            if (targetProvider && providerFamilyKey(option.provider) !== targetProvider) continue;
            if (linkedOnly) {
                var info = providerInfo(option.provider);
                if (!info || !info.available || !info.linked) continue;
            }
            out.push(option);
        }
        return out;
    }

    function normalizeLastUsedModel(raw) {
        if (!raw || typeof raw !== 'object') return null;
        var modelKey = collapseText(raw.modelKey || '');
        if (!modelKey) return null;
        var option = findModelOption(modelKey);
        var providerId = providerFamilyKey(raw.providerId || '');
        if (option && option.provider) {
            modelKey = option.key;
            if (!providerId) providerId = providerFamilyKey(option.provider);
        } else if (!providerId) {
            var parsedProviderId = collapseText(modelKey.split(':')[0] || '');
            if (parsedProviderId) providerId = providerFamilyKey(parsedProviderId);
        }
        if (!providerId) return null;
        return {
            providerId: providerId,
            modelKey: modelKey
        };
    }

    function loadLastUsedModel() {
        state.lastUsedModel = null;
        try {
            var raw = localStorage.getItem(LAST_USED_MODEL_KEY);
            if (!raw) return;
            var parsed = JSON.parse(raw);
            state.lastUsedModel = normalizeLastUsedModel(parsed);
        } catch (e) {
            state.lastUsedModel = null;
        }
    }

    function saveLastUsedModel(providerId, modelKey) {
        var normalized = normalizeLastUsedModel({
            providerId: providerId,
            modelKey: modelKey
        });
        if (!normalized) return;
        state.lastUsedModel = normalized;
        try {
            localStorage.setItem(LAST_USED_MODEL_KEY, JSON.stringify(normalized));
        } catch (e) {
            // ignore storage errors
        }
    }

    function resolveAvailableLastUsedModel() {
        var saved = state.lastUsedModel && typeof state.lastUsedModel === 'object'
            ? state.lastUsedModel
            : null;
        if (!saved) return null;
        var option = findModelOption(saved.modelKey || '');
        if (!option || !option.provider) return null;
        var familyId = providerFamilyKey(option.provider);
        if (!familyId || familyId !== saved.providerId) return null;
        if (state.providersLoaded) {
            var connected = connectedProviderIds();
            if (connected.indexOf(familyId) < 0) return null;
            var visible = modelOptionsForProvider(familyId, true);
            if (!hasModelKey(visible, option.key)) return null;
        }
        return {
            providerId: familyId,
            modelKey: option.key
        };
    }

    function ensureSelectedProvider() {
        var lastUsed = resolveAvailableLastUsedModel();
        if (!state.providersLoaded) {
            if (state.selectedProviderId) return state.selectedProviderId;
            var active0 = getConversationById(state.activeConversationId);
            if (active0 && active0.modelKey) {
                var activeOpt0 = findModelOption(active0.modelKey);
                if (activeOpt0 && activeOpt0.provider) {
                    state.selectedProviderId = providerFamilyKey(activeOpt0.provider);
                    return state.selectedProviderId;
                }
            }
            if (lastUsed && lastUsed.providerId) {
                state.selectedProviderId = lastUsed.providerId;
                return state.selectedProviderId;
            }
            if (MODEL_OPTIONS.length && MODEL_OPTIONS[0].provider) {
                state.selectedProviderId = providerFamilyKey(MODEL_OPTIONS[0].provider);
                return state.selectedProviderId;
            }
            return '';
        }
        var connected = connectedProviderIds();
        if (!connected.length) {
            state.selectedProviderId = '';
            return '';
        }
        if (state.selectedProviderId && connected.indexOf(state.selectedProviderId) >= 0) {
            return state.selectedProviderId;
        }
        var active = getConversationById(state.activeConversationId);
        if (!active && state.conversations.length > 0) {
            active = state.conversations[0];
        }
        if (active && active.modelKey) {
            var activeOpt = findModelOption(active.modelKey);
            var activeFamily = activeOpt && activeOpt.provider ? providerFamilyKey(activeOpt.provider) : '';
            if (activeFamily && connected.indexOf(activeFamily) >= 0) {
                state.selectedProviderId = activeFamily;
                return state.selectedProviderId;
            }
        }
        if (lastUsed && connected.indexOf(lastUsed.providerId) >= 0) {
            state.selectedProviderId = lastUsed.providerId;
            return state.selectedProviderId;
        }
        state.selectedProviderId = connected[0];
        return state.selectedProviderId;
    }

    function visibleModelOptions() {
        if (!state.providersLoaded) {
            return MODEL_OPTIONS.slice(0);
        }
        var providerId = ensureSelectedProvider();
        if (!providerId) return [];
        return modelOptionsForProvider(providerId, true);
    }

    function defaultModelKey() {
        var visible = visibleModelOptions();
        var lastUsed = resolveAvailableLastUsedModel();
        if (lastUsed && hasModelKey(visible, lastUsed.modelKey)) {
            return lastUsed.modelKey;
        }
        if (visible.length) return visible[0].key;
        if (MODEL_OPTIONS.length) return MODEL_OPTIONS[0].key;
        return '';
    }

    function makeAttachmentId() {
        return 'a_' + now() + '_' + Math.floor(Math.random() * 1000000);
    }

    function formatAttachmentSize(size) {
        var value = parseInt(size, 10);
        if (!value || value < 0) return '-';
        if (value < 1024) return value + 'B';
        if (value < 1024 * 1024) return (value / 1024).toFixed(1) + 'KB';
        return (value / (1024 * 1024)).toFixed(1) + 'MB';
    }

    function sanitizeAttachmentName(name) {
        var value = collapseText(name || '');
        if (!value) value = 'attachment';
        if (value.length > 120) value = value.substring(0, 120);
        return value;
    }

    function isImageAttachmentType(mimeType) {
        var type = (mimeType || '').toLowerCase();
        return /^image\//.test(type);
    }

    function isTextAttachmentType(mimeType) {
        var type = (mimeType || '').toLowerCase();
        if (!type) return false;
        if (/^text\//.test(type)) return true;
        return /^(application\/(json|xml|x-www-form-urlencoded|javascript|x-javascript|typescript|x-typescript|x-httpd-php|sql|csv)|text\/csv)$/.test(type);
    }

    function looksLikeTextExtension(fileName) {
        var name = (fileName || '').toLowerCase();
        return /\.(txt|md|csv|json|xml|yml|yaml|log|ini|cfg|conf|sql|js|ts|php|py|java|c|cc|cpp|h|hpp|cs|rb|go|rs|sh|bat|html|htm|css)$/i.test(name);
    }

    function guessAttachmentKind(mimeType, fileName) {
        if (isImageAttachmentType(mimeType)) return 'image';
        if (isTextAttachmentType(mimeType) || looksLikeTextExtension(fileName)) return 'text';
        return 'binary';
    }

    function trimAttachmentText(value) {
        var text = value == null ? '' : String(value);
        text = text.replace(/\r\n?/g, '\n');
        return text;
    }

    function readFileAsDataUrl(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve((reader.result || '').toString());
            };
            reader.onerror = function () {
                reject(new Error(trff('assistant.message.attachment.read_failed', 'Failed to read attachment: {name}', {
                    name: sanitizeAttachmentName(file && file.name)
                })));
            };
            reader.readAsDataURL(file);
        });
    }

    function readFileAsText(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve((reader.result || '').toString());
            };
            reader.onerror = function () {
                reject(new Error(trff('assistant.message.attachment.read_text_failed', 'Failed to read text file: {name}', {
                    name: sanitizeAttachmentName(file && file.name)
                })));
            };
            reader.readAsText(file);
        });
    }

    function buildAttachmentFromFile(file, source) {
        return new Promise(function (resolve, reject) {
            if (!file) {
                resolve(null);
                return;
            }

            var size = parseInt(file.size, 10) || 0;
            var name = sanitizeAttachmentName(file.name);
            var mimeType = (file.type || '').toLowerCase();
            var kind = guessAttachmentKind(mimeType, name);
            if (kind !== 'text' && size > MAX_ATTACHMENT_SIZE_BYTES) {
                reject(new Error(trff('assistant.message.attachment.limit_exceeded', 'Attachment exceeds limit {limit}: {name}', {
                    limit: formatAttachmentSize(MAX_ATTACHMENT_SIZE_BYTES),
                    name: sanitizeAttachmentName(file.name)
                })));
                return;
            }

            var base = {
                id: makeAttachmentId(),
                name: name,
                mimeType: mimeType || 'application/octet-stream',
                size: size,
                kind: kind,
                source: source || 'file',
                dataUrl: '',
                textContent: ''
            };

            if (kind === 'image') {
                readFileAsDataUrl(file).then(function (dataUrl) {
                    if (!dataUrl || dataUrl.length > MAX_ATTACHMENT_DATA_URL_CHARS) {
                        reject(new Error(trff('assistant.message.attachment.image_too_large', 'Image attachment is too large: {name}', {
                            name: name
                        })));
                        return;
                    }
                    base.dataUrl = dataUrl;
                    resolve(base);
                }).catch(reject);
                return;
            }

            if (kind === 'text') {
                readFileAsText(file).then(function (text) {
                    base.textContent = trimAttachmentText(text);
                    resolve(base);
                }).catch(reject);
                return;
            }

            resolve(base);
        });
    }

    function addPendingAttachment(item) {
        if (!item || typeof item !== 'object') return false;
        if (state.pendingAttachments.length >= MAX_ATTACHMENTS) return false;

        var i;
        for (i = 0; i < state.pendingAttachments.length; i++) {
            var row = state.pendingAttachments[i];
            if (!row) continue;
            if ((row.name || '') === (item.name || '') && parseInt(row.size || 0, 10) === parseInt(item.size || 0, 10)) {
                return false;
            }
        }

        state.pendingAttachments.push(item);
        renderAttachmentList();
        return true;
    }

    function removePendingAttachment(id) {
        var target = (id || '').toString();
        if (!target) return;
        var next = [];
        var i;
        for (i = 0; i < state.pendingAttachments.length; i++) {
            var row = state.pendingAttachments[i];
            if (!row || row.id === target) continue;
            next.push(row);
        }
        state.pendingAttachments = next;
        renderAttachmentList();
    }

    function clearPendingAttachments() {
        state.pendingAttachments = [];
        renderAttachmentList();
    }

    function renderAttachmentList() {
        attachList.innerHTML = '';
        if (!state.pendingAttachments.length) {
            attachHint.textContent = tr('assistant.ui.attach_hint', 'You can paste/drag images');
            return;
        }

        attachHint.textContent = tr('assistant.ui.attach_count', 'Attachments') + ' ' + state.pendingAttachments.length + '/' + MAX_ATTACHMENTS;
        var i;
        for (i = 0; i < state.pendingAttachments.length; i++) {
            var item = state.pendingAttachments[i];
            if (!item) continue;

            var chip = document.createElement('div');
            chip.className = 'hb-ai-attach-chip';

            var nm = document.createElement('span');
            nm.className = 'hb-ai-attach-chip-name';
            nm.textContent = item.name || ('attachment-' + (i + 1));

            var sz = document.createElement('span');
            sz.className = 'hb-ai-attach-chip-size';
            sz.textContent = formatAttachmentSize(item.size);

            var rm = document.createElement('button');
            rm.type = 'button';
            rm.className = 'hb-ai-attach-chip-remove';
            rm.textContent = 'x';
            rm.setAttribute('data-id', item.id || '');
            rm.addEventListener('click', function () {
                var id = this.getAttribute('data-id') || '';
                removePendingAttachment(id);
            });

            chip.appendChild(nm);
            chip.appendChild(sz);
            chip.appendChild(rm);
            attachList.appendChild(chip);
        }
    }

    function findQueuedRequestById(id) {
        var target = (id || '').toString();
        if (!target) return null;
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var row = state.requestQueue[i];
            if (!row || row.id !== target) continue;
            return row;
        }
        return null;
    }

    function removeQueuedRequestById(id) {
        var target = (id || '').toString();
        if (!target) return null;

        var next = [];
        var removed = null;
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var row = state.requestQueue[i];
            if (!row) continue;
            if (!removed && row.id === target) {
                removed = row;
                continue;
            }
            next.push(row);
        }
        if (!removed) return null;
        state.requestQueue = next;
        return removed;
    }

    function queueItemPreviewText(item) {
        if (!item || typeof item !== 'object') return '';
        var text = collapseText(item.userViewText || item.prompt || '');
        if (!text) text = tr('assistant.message.empty_request', '(empty request)');
        var preview = truncateText(text, 60);
        if (item.steering) {
            preview += ' | ' + tr('assistant.ui.steering', 'Steering') + ': ' + truncateText(collapseText(item.steering), 28);
        }
        return preview;
    }

    function normalizeProviderForModelCompare(providerId) {
        var id = remapLegacyProviderId(providerId || '');
        if (!id) return '';
        return providerFamilyKey(id) || id;
    }

    function buildModelCompareKey(providerId, modelName, modelKey) {
        var rawModelKey = collapseText(modelKey || '');
        if (rawModelKey) {
            var normalizedKey = remapLegacyModelKey(rawModelKey).toLowerCase();
            var sep = normalizedKey.indexOf(':');
            if (sep > 0) {
                var p = normalizeProviderForModelCompare(normalizedKey.substring(0, sep));
                var m = collapseText(normalizedKey.substring(sep + 1)).toLowerCase();
                if (p || m) return p + '|' + m;
            }
            return normalizedKey;
        }
        var provider = normalizeProviderForModelCompare(providerId);
        var model = collapseText(modelName || '').toLowerCase();
        if (!provider && !model) return '';
        return provider + '|' + model;
    }

    function buildModelDisplayLabel(providerId, modelName, modelKey) {
        var option = null;
        var key = collapseText(modelKey || '');
        if (key) {
            option = findModelOption(key);
        }
        if (!option) {
            var provider = remapLegacyProviderId(providerId || '');
            var model = collapseText(modelName || '');
            if (provider) {
                var normalizedKey = normalizeModelOptionKey(provider, model);
                option = findModelOption(normalizedKey);
            }
        }
        if (option && option.label) {
            return option.label;
        }

        var familyProvider = normalizeProviderForModelCompare(providerId);
        var providerLabelText = familyProvider ? providerFamilyLabel(familyProvider) : '';
        var modelLabelText = collapseText(modelName || '');
        if (providerLabelText && modelLabelText) {
            return providerLabelText + ' - ' + modelLabelText;
        }
        if (providerLabelText) return providerLabelText;
        if (modelLabelText) return modelLabelText;
        return tr('assistant.message.unknown_model', 'unknown model');
    }

    function queuedRequestModelInfo(item) {
        if (!item || typeof item !== 'object') {
            return { key: '', label: '' };
        }
        var provider = collapseText(item.provider || '');
        var model = collapseText(item.model || '');
        var modelKey = collapseText(item.modelKey || '');
        return {
            key: buildModelCompareKey(provider, model, modelKey),
            label: buildModelDisplayLabel(provider, model, modelKey)
        };
    }

    function lastAssistantModelInfo(conversation) {
        if (!conversation || !conversation.messages || !conversation.messages.length) {
            return { key: '', label: '' };
        }
        var i;
        for (i = conversation.messages.length - 1; i >= 0; i--) {
            var row = conversation.messages[i];
            if (!row || row.role !== 'assistant') continue;
            var meta = row.aiMeta && typeof row.aiMeta === 'object' ? row.aiMeta : null;
            if (!meta) continue;
            var provider = collapseText(meta.provider || '');
            var model = collapseText(meta.model || '');
            var key = buildModelCompareKey(provider, model, '');
            if (!key) continue;
            return {
                key: key,
                label: buildModelDisplayLabel(provider, model, '')
            };
        }
        return { key: '', label: '' };
    }

    function notifyQueuedModelSwitchIfNeeded(item) {
        if (!item || typeof item !== 'object') return;
        var conversation = getConversationById(item.conversationId);
        if (!conversation) return;

        var previous = lastAssistantModelInfo(conversation);
        if (!previous.key) return;
        var next = queuedRequestModelInfo(item);
        if (!next.key) return;
        if (previous.key === next.key) return;
        addConversationMessage('system', trff('assistant.message.model_switch_notice', 'Using {model} model.', {
            model: next.label
        }), item.conversationId, {
            uiTone: 'subtle',
            aiMeta: {
                notice_type: 'model_switch',
                model_label: next.label
            }
        });
    }

    function requestConversationKey(conversationId) {
        var key = collapseText(conversationId || '');
        if (!key) key = '__default__';
        return key;
    }

    function resolveActiveRequestStatusText(stage) {
        var key = collapseText(stage || '').toLowerCase();
        if (!key || key === 'working') {
            return tr('assistant.ui.progress.working', 'Processing your request...');
        }
        if (key === 'plan') {
            return tr('assistant.ui.progress.plan', 'Analyzing your request...');
        }
        if (key === 'collect') {
            return tr('assistant.ui.progress.collect', 'Collecting related internal data... (AJAX/MCP)');
        }
        if (key === 'generate') {
            return tr('assistant.ui.progress.generate', 'Generating the answer...');
        }
        return tr('assistant.ui.progress.working', 'Processing your request...');
    }

    function resolveQueuedRequestStatusText(queueCount) {
        var count = parseInt(queueCount, 10);
        if (!isFinite(count) || count < 1) count = 1;
        var template = tr('assistant.ui.progress.queued', 'Request is queued ({count} ahead)');
        return template.replace('{count}', String(count));
    }

    function renderProcessingStatusIfNeeded() {
        if (!statusText) return false;
        var conversationId = collapseText(state.activeConversationId || '');
        if (!conversationId) return false;

        var active = getActiveRequestByConversationId(conversationId);
        if (active) {
            statusText.textContent = resolveActiveRequestStatusText(active.stage || '');
            return true;
        }

        var queued = queuedRequestsForConversation(conversationId);
        if (queued.length > 0) {
            statusText.textContent = resolveQueuedRequestStatusText(queued.length);
            return true;
        }

        return false;
    }

    function activeRequestCount() {
        var count = 0;
        var rows = state.activeRequests || {};
        for (var key in rows) {
            if (!Object.prototype.hasOwnProperty.call(rows, key)) continue;
            if (!rows[key]) continue;
            count += 1;
        }
        return count;
    }

    function getActiveRequestByConversationId(conversationId) {
        var key = requestConversationKey(conversationId);
        if (!state.activeRequests) return null;
        return state.activeRequests[key] || null;
    }

    function getAnyActiveRequest() {
        var rows = state.activeRequests || {};
        for (var key in rows) {
            if (!Object.prototype.hasOwnProperty.call(rows, key)) continue;
            if (rows[key]) return rows[key];
        }
        return null;
    }

    function hasAnyActiveRequests() {
        return activeRequestCount() > 0;
    }

    function hasActiveRequestForCurrentConversation() {
        var conversationId = collapseText(state.activeConversationId || '');
        if (!conversationId) return false;
        return !!getActiveRequestByConversationId(conversationId);
    }

    function hasQueuedRequestForConversationId(conversationId) {
        var key = requestConversationKey(conversationId);
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var item = state.requestQueue[i];
            if (!item) continue;
            if (requestConversationKey(item.conversationId) === key) return true;
        }
        return false;
    }

    function queuedRequestsForConversation(conversationId) {
        var key = requestConversationKey(conversationId);
        var out = [];
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var item = state.requestQueue[i];
            if (!item) continue;
            if (requestConversationKey(item.conversationId) !== key) continue;
            out.push(item);
        }
        return out;
    }

    function isConversationBusy(conversationId) {
        return !!(getActiveRequestByConversationId(conversationId) || hasQueuedRequestForConversationId(conversationId));
    }

    function setActiveRequestStage(active, stage) {
        if (!active || active.canceled) return;
        var key = active.conversationKey || requestConversationKey(active.item && active.item.conversationId ? active.item.conversationId : '');
        var current = state.activeRequests && state.activeRequests[key];
        if (!current || current.id !== active.id) return;
        current.stage = collapseText(stage || 'working').toLowerCase() || 'working';
        active.stage = current.stage;
        renderProcessingStatusIfNeeded();
    }

    function syncPrimaryActiveRequest() {
        state.activeRequest = getAnyActiveRequest();
        updateStopButtonState();
        if (!renderProcessingStatusIfNeeded()) {
            updateConnectionUi();
        }
    }

    function processingRequestCount() {
        return activeRequestCount();
    }

    function renderHistoryButtonState() {
        var count = processingRequestCount();
        var displayCount = '0';
        if (count > 0) {
            displayCount = count > 9 ? '9+' : String(count);
        }
        historyBtnCount.textContent = displayCount;
        if (count > 0) {
            addClassName(historyBtn, 'has-count');
        } else {
            removeClassName(historyBtn, 'has-count');
        }
        if (count > 0) {
            addClassName(historyBtn, 'hb-ai-processing');
        } else {
            removeClassName(historyBtn, 'hb-ai-processing');
        }
        if (count > 0) {
            historyBtn.title = tr('assistant.ui.history.processing', 'History') + ' (' + count + ')';
        } else {
            historyBtn.title = tr('assistant.ui.history', 'History');
        }
    }

    function renderRequestQueue() {
        var visibleQueue = queuedRequestsForConversation(state.activeConversationId);
        queueList.innerHTML = '';
        if (!visibleQueue.length) {
            queueTop.textContent = tr('assistant.ui.queue', 'Queue');
            queueWrap.className = 'hb-ai-queue-wrap';
            renderHistoryButtonState();
            if (!renderProcessingStatusIfNeeded()) {
                updateConnectionUi();
            }
            return;
        }

        queueTop.textContent = tr('assistant.ui.queue', 'Queue') + ' ' + visibleQueue.length;
        queueWrap.className = 'hb-ai-queue-wrap open';
        var fragment = document.createDocumentFragment ? document.createDocumentFragment() : null;
        var target = fragment || queueList;

        var i;
        for (i = 0; i < visibleQueue.length; i++) {
            var item = visibleQueue[i];
            if (!item) continue;

            var row = document.createElement('div');
            row.className = 'hb-ai-queue-item';

            var text = document.createElement('div');
            text.className = 'hb-ai-queue-text';
            text.textContent = queueItemPreviewText(item);

            var actions = document.createElement('div');
            actions.className = 'hb-ai-queue-actions';

            var steerBtn = document.createElement('button');
            steerBtn.type = 'button';
            steerBtn.className = 'hb-ai-queue-btn';
            steerBtn.textContent = tr('assistant.ui.steering', 'Steering');
            steerBtn.setAttribute('data-id', item.id || '');
            steerBtn.addEventListener('click', function (e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                editQueuedRequestSteering(this.getAttribute('data-id') || '');
            });
            actions.appendChild(steerBtn);

            var deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'hb-ai-queue-btn delete';
            deleteBtn.textContent = tr('assistant.ui.delete', 'Delete');
            deleteBtn.setAttribute('data-id', item.id || '');
            deleteBtn.addEventListener('click', function (e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                deleteQueuedRequest(this.getAttribute('data-id') || '');
            });
            actions.appendChild(deleteBtn);

            row.appendChild(text);
            row.appendChild(actions);
            target.appendChild(row);
        }
        if (fragment) queueList.appendChild(fragment);
        renderHistoryButtonState();
        renderProcessingStatusIfNeeded();
    }

    function buildAttachmentSummaryLine(attachments) {
        var list = Array.isArray(attachments) ? attachments : [];
        if (!list.length) return '';
        var names = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var name = sanitizeAttachmentName(list[i] && list[i].name);
            if (!name) continue;
            names.push(name);
            if (names.length >= 3) break;
        }
        var extra = '';
        if (list.length > names.length) {
            extra = trff('assistant.message.attachment.summary_extra', ' +{count} more', {
                count: list.length - names.length
            });
        }
        return trff('assistant.message.attachment.summary', '[Attachments {count}] {names}{extra}', {
            count: list.length,
            names: names.join(', '),
            extra: extra
        });
    }

    function buildAttachmentPayload(attachments) {
        var list = Array.isArray(attachments) ? attachments : [];
        var out = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i];
            if (!row || typeof row !== 'object') continue;
            var payload = {
                name: sanitizeAttachmentName(row.name),
                mime_type: (row.mimeType || 'application/octet-stream').toLowerCase(),
                size: parseInt(row.size, 10) || 0,
                kind: row.kind || guessAttachmentKind(row.mimeType, row.name)
            };
            if (payload.kind === 'image' && row.dataUrl) {
                payload.data_url = row.dataUrl;
            }
            if (payload.kind === 'text' && row.textContent) {
                payload.text_content = trimAttachmentText(row.textContent);
            }
            out.push(payload);
        }
        return out;
    }

    function handleAttachmentFiles(fileList, source) {
        var rows = [];
        var i;
        if (fileList && typeof fileList.length === 'number') {
            for (i = 0; i < fileList.length; i++) {
                if (fileList[i]) rows.push(fileList[i]);
            }
        }
        if (!rows.length) return Promise.resolve(0);

        if (state.pendingAttachments.length >= MAX_ATTACHMENTS) {
            pushSystemMessage(trff('assistant.message.attachment.max_reached', 'You can attach up to {max} files.', {
                max: MAX_ATTACHMENTS
            }));
            return Promise.resolve(0);
        }

        var available = MAX_ATTACHMENTS - state.pendingAttachments.length;
        if (rows.length > available) {
            rows = rows.slice(0, available);
            pushSystemMessage(trff('assistant.message.attachment.max_partial', 'You can attach up to {max} files. Only first {available} file(s) were added.', {
                max: MAX_ATTACHMENTS,
                available: available
            }));
        }

        var added = 0;
        var chain = Promise.resolve();
        for (i = 0; i < rows.length; i++) {
            (function (file) {
                chain = chain.then(function () {
                    return buildAttachmentFromFile(file, source);
                }).then(function (attachment) {
                    if (attachment && addPendingAttachment(attachment)) {
                        added++;
                    }
                }).catch(function (err) {
                    pushSystemMessage(err && err.message ? err.message : tr('assistant.message.attachment.process_error', 'An error occurred while processing attachment files.'));
                });
            })(rows[i]);
        }
        return chain.then(function () {
            return added;
        });
    }

    function extractClipboardFiles(event) {
        var files = [];
        var items = event && event.clipboardData && event.clipboardData.items ? event.clipboardData.items : null;
        var i;
        if (!items || typeof items.length !== 'number') return files;
        for (i = 0; i < items.length; i++) {
            var item = items[i];
            if (!item || item.kind !== 'file') continue;
            var file = item.getAsFile ? item.getAsFile() : null;
            if (file) files.push(file);
        }
        return files;
    }

    function sortConversations() {
        state.conversations.sort(function (a, b) {
            return (b.updatedAt || 0) - (a.updatedAt || 0);
        });
    }

    function clampNumber(value, min, max) {
        var num = parseFloat(value);
        var lower = parseFloat(min);
        var upper = parseFloat(max);
        if (isNaN(num)) num = 0;
        if (isNaN(lower)) lower = 0;
        if (isNaN(upper)) upper = lower;
        if (upper < lower) upper = lower;
        if (num < lower) return lower;
        if (num > upper) return upper;
        return num;
    }

    function isCompactPanelViewport() {
        var ww = window.innerWidth || document.documentElement.clientWidth || 0;
        return ww <= 460;
    }

    function resetPanelInlineLayout() {
        panel.style.left = '';
        panel.style.top = '';
        panel.style.width = '';
        panel.style.height = '';
        panel.style.right = '';
        panel.style.bottom = '';
    }

    function normalizePanelLayout(layout) {
        if (!layout || typeof layout !== 'object') return null;
        var ww = window.innerWidth || document.documentElement.clientWidth || 0;
        var wh = window.innerHeight || document.documentElement.clientHeight || 0;
        if (!ww || !wh) return null;

        var margin = PANEL_VIEW_MARGIN;
        var availableWidth = Math.max(240, ww - (margin * 2));
        var availableHeight = Math.max(260, wh - (margin * 2));
        var minWidth = Math.min(PANEL_MIN_WIDTH, availableWidth);
        var minHeight = Math.min(PANEL_MIN_HEIGHT, availableHeight);

        var width = clampNumber(layout.width, minWidth, availableWidth);
        var height = clampNumber(layout.height, minHeight, availableHeight);
        var maxLeft = ww - width - margin;
        var maxTop = wh - height - margin;
        var left = clampNumber(layout.left, margin, maxLeft);
        var top = clampNumber(layout.top, margin, maxTop);

        return {
            left: Math.round(left),
            top: Math.round(top),
            width: Math.round(width),
            height: Math.round(height)
        };
    }

    function captureCurrentPanelLayout() {
        var rect = panel.getBoundingClientRect();
        if (!rect || !rect.width || !rect.height) return null;
        return normalizePanelLayout({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        });
    }

    function loadPanelLayout() {
        state.panelLayout = null;
        try {
            var raw = localStorage.getItem(PANEL_LAYOUT_KEY);
            if (!raw) return;
            var parsed = JSON.parse(raw);
            var normalized = normalizePanelLayout(parsed);
            if (normalized) state.panelLayout = normalized;
        } catch (e) {
            state.panelLayout = null;
        }
    }

    function savePanelLayout() {
        if (!state.panelLayout) return;
        try {
            localStorage.setItem(PANEL_LAYOUT_KEY, JSON.stringify(state.panelLayout));
        } catch (e) {
            // ignore storage errors
        }
    }

    function applyPanelLayout() {
        if (isCompactPanelViewport()) {
            resetPanelInlineLayout();
            setTimeout(updateBottomRowCompactMode, 0);
            return;
        }
        if (!state.panelLayout) {
            resetPanelInlineLayout();
            setTimeout(updateBottomRowCompactMode, 0);
            return;
        }
        var normalized = normalizePanelLayout(state.panelLayout);
        if (!normalized) {
            resetPanelInlineLayout();
            setTimeout(updateBottomRowCompactMode, 0);
            return;
        }
        state.panelLayout = normalized;
        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
        panel.style.left = normalized.left + 'px';
        panel.style.top = normalized.top + 'px';
        panel.style.width = normalized.width + 'px';
        panel.style.height = normalized.height + 'px';
        setTimeout(updateBottomRowCompactMode, 0);
    }

    function showDragShield(mode) {
        dragShieldMode = mode === 'resize' ? 'resize' : 'drag';
        dragShield.className = 'hb-ai-drag-shield active';
        addClassName(dragShield, dragShieldMode === 'resize' ? 'hb-ai-shield-resize' : 'hb-ai-shield-drag');
    }

    function hideDragShield() {
        dragShieldMode = '';
        dragShield.className = 'hb-ai-drag-shield';
    }

    function releasePanelPointerState() {
        if (!panelPointerState) return;
        document.removeEventListener('mousemove', onPanelPointerMove);
        document.removeEventListener('mouseup', releasePanelPointerState);
        window.removeEventListener('blur', releasePanelPointerState);
        hideDragShield();
        removeClassName(panel, 'hb-ai-dragging');
        removeClassName(panel, 'hb-ai-resizing');
        if (document.body) {
            document.body.style.userSelect = panelBodyUserSelectBackup;
        }
        panelBodyUserSelectBackup = '';
        panelPointerState = null;
        savePanelLayout();
    }

    function onPanelPointerMove(event) {
        if (!panelPointerState) return;
        var dx = event.clientX - panelPointerState.startX;
        var dy = event.clientY - panelPointerState.startY;
        var next = null;

        if (panelPointerState.mode === 'drag') {
            next = {
                left: panelPointerState.left + dx,
                top: panelPointerState.top + dy,
                width: panelPointerState.width,
                height: panelPointerState.height
            };
        } else if (panelPointerState.mode === 'resize') {
            next = {
                left: panelPointerState.left,
                top: panelPointerState.top,
                width: panelPointerState.width + dx,
                height: panelPointerState.height + dy
            };
        }

        if (!next) return;
        var normalized = normalizePanelLayout(next);
        if (!normalized) return;
        state.panelLayout = normalized;
        applyPanelLayout();
        event.preventDefault();
    }

    function startPanelPointer(mode, event) {
        if (!state.open) return;
        if (isCompactPanelViewport()) return;
        if (!event || event.button !== 0) return;

        var current = captureCurrentPanelLayout();
        if (!current) return;
        state.panelLayout = current;
        applyPanelLayout();

        panelPointerState = {
            mode: mode,
            startX: event.clientX,
            startY: event.clientY,
            left: current.left,
            top: current.top,
            width: current.width,
            height: current.height
        };

        removeClassName(panel, 'hb-ai-dragging');
        removeClassName(panel, 'hb-ai-resizing');
        if (mode === 'drag') addClassName(panel, 'hb-ai-dragging');
        if (mode === 'resize') addClassName(panel, 'hb-ai-resizing');

        if (document.body) {
            panelBodyUserSelectBackup = document.body.style.userSelect || '';
            document.body.style.userSelect = 'none';
        }
        showDragShield(mode);
        document.addEventListener('mousemove', onPanelPointerMove);
        document.addEventListener('mouseup', releasePanelPointerState);
        window.addEventListener('blur', releasePanelPointerState);
        event.preventDefault();
    }

    function openPanel() {
        if (state.open) return;
        state.open = true;
        panel.className = 'hb-ai-panel open';
        applyPanelLayout();
        loadProviders();
        loadServerConversations();
        renderHistoryList();
        renderMessages();
        renderRequestQueue();
        setTimeout(updateBottomRowCompactMode, 0);
        setTimeout(function () { input.focus(); }, 0);
    }

    function closePanel() {
        releasePanelPointerState();
        state.open = false;
        panel.className = 'hb-ai-panel';
        toggleHistoryPane(false);
        toggleSettings(false);
        closeProviderMenu();
    }

    function resetFabInlineLayout() {
        fab.style.left = '';
        fab.style.top = '';
        fab.style.right = '';
        fab.style.bottom = '';
    }

    function getFabSize() {
        var rect = fab.getBoundingClientRect ? fab.getBoundingClientRect() : null;
        var width = rect && rect.width ? rect.width : 46;
        var height = rect && rect.height ? rect.height : 46;
        if (!width || width < 10) width = 46;
        if (!height || height < 10) height = 46;
        return { width: width, height: height };
    }

    function normalizeFabLayout(layout) {
        if (!layout || typeof layout !== 'object') return null;
        var ww = window.innerWidth || document.documentElement.clientWidth || 0;
        var wh = window.innerHeight || document.documentElement.clientHeight || 0;
        if (!ww || !wh) return null;

        var size = getFabSize();
        var maxLeft = Math.max(FAB_VIEW_MARGIN, ww - size.width - FAB_VIEW_MARGIN);
        var maxTop = Math.max(FAB_VIEW_MARGIN, wh - size.height - FAB_VIEW_MARGIN);
        var left = clampNumber(layout.left, FAB_VIEW_MARGIN, maxLeft);
        var top = clampNumber(layout.top, FAB_VIEW_MARGIN, maxTop);

        return {
            left: Math.round(left),
            top: Math.round(top)
        };
    }

    function captureCurrentFabLayout() {
        var rect = fab.getBoundingClientRect ? fab.getBoundingClientRect() : null;
        if (!rect || !rect.width || !rect.height) return null;
        return normalizeFabLayout({
            left: rect.left,
            top: rect.top
        });
    }

    function loadFabLayout() {
        state.fabLayout = null;
        try {
            var raw = localStorage.getItem(FAB_LAYOUT_KEY);
            if (!raw) return;
            var parsed = JSON.parse(raw);
            var normalized = normalizeFabLayout(parsed);
            if (normalized) state.fabLayout = normalized;
        } catch (e) {
            state.fabLayout = null;
        }
    }

    function saveFabLayout() {
        if (!state.fabLayout) return;
        try {
            localStorage.setItem(FAB_LAYOUT_KEY, JSON.stringify(state.fabLayout));
        } catch (e) {
            // ignore storage errors
        }
    }

    function applyFabLayout() {
        if (!state.fabLayout) {
            resetFabInlineLayout();
            return;
        }
        var normalized = normalizeFabLayout(state.fabLayout);
        if (!normalized) {
            resetFabInlineLayout();
            return;
        }
        state.fabLayout = normalized;
        fab.style.right = 'auto';
        fab.style.bottom = 'auto';
        fab.style.left = normalized.left + 'px';
        fab.style.top = normalized.top + 'px';
    }

    function releaseFabPointerState() {
        if (!fabPointerState) return;
        document.removeEventListener('mousemove', onFabPointerMove);
        document.removeEventListener('mouseup', releaseFabPointerState);
        window.removeEventListener('blur', releaseFabPointerState);
        hideDragShield();
        removeClassName(fab, 'hb-ai-dragging');
        if (document.body) {
            document.body.style.userSelect = fabBodyUserSelectBackup;
        }
        fabBodyUserSelectBackup = '';
        fabPointerState = null;
        if (fabDragMoved) {
            saveFabLayout();
            fabIgnoreClickUntil = now() + 250;
        }
        fabDragMoved = false;
    }

    function onFabPointerMove(event) {
        if (!fabPointerState) return;
        var dx = event.clientX - fabPointerState.startX;
        var dy = event.clientY - fabPointerState.startY;
        if (!fabDragMoved && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
            fabDragMoved = true;
        }
        var normalized = normalizeFabLayout({
            left: fabPointerState.left + dx,
            top: fabPointerState.top + dy
        });
        if (!normalized) return;
        state.fabLayout = normalized;
        applyFabLayout();
        event.preventDefault();
    }

    function startFabPointer(event) {
        if (!state.assistantEnabled) return;
        if (!event || event.button !== 0) return;
        var current = captureCurrentFabLayout();
        if (!current) return;

        state.fabLayout = current;
        applyFabLayout();
        fabDragMoved = false;
        fabPointerState = {
            startX: event.clientX,
            startY: event.clientY,
            left: current.left,
            top: current.top
        };
        addClassName(fab, 'hb-ai-dragging');
        if (document.body) {
            fabBodyUserSelectBackup = document.body.style.userSelect || '';
            document.body.style.userSelect = 'none';
        }
        showDragShield('drag');
        document.addEventListener('mousemove', onFabPointerMove);
        document.addEventListener('mouseup', releaseFabPointerState);
        window.addEventListener('blur', releaseFabPointerState);
        event.preventDefault();
    }

    function exportConversationForSync(conversation) {
        if (!conversation || typeof conversation !== 'object') return null;
        var modelKey = collapseText(conversation.modelKey || '');
        if (!modelKey) modelKey = defaultModelKey();
        var normalizedOption = modelKey ? findModelOption(modelKey) : null;
        if (normalizedOption && normalizedOption.key) {
            modelKey = normalizedOption.key;
        }
        var createdAt = parseInt(conversation.createdAt, 10);
        var updatedAt = parseInt(conversation.updatedAt, 10);
        if (!createdAt) createdAt = now();
        if (!updatedAt) updatedAt = createdAt;

        var messages = [];
        if (conversation.messages && typeof conversation.messages.length === 'number') {
            var start = conversation.messages.length > MAX_MESSAGES_PER_CONVERSATION
                ? (conversation.messages.length - MAX_MESSAGES_PER_CONVERSATION)
                : 0;
            var i;
            for (i = start; i < conversation.messages.length; i++) {
                var msg = conversation.messages[i];
                if (!msg || typeof msg !== 'object') continue;
                var role = (msg.role || '').toLowerCase();
                if (role !== 'user' && role !== 'assistant' && role !== 'system') continue;
                var content = (msg.content || '').toString();
                if (!content) continue;
                messages.push({
                    id: msg.id || makeId(),
                    role: role,
                    content: content,
                    ts: msg.ts || updatedAt,
                    parentMessageId: msg.parentMessageId || '',
                    durationMs: parseInt(msg.durationMs, 10) || 0,
                    aiMeta: sanitizeMessageAiMeta(msg.aiMeta),
                    uiTone: collapseText(msg.uiTone || '').toLowerCase() === 'subtle' ? 'subtle' : '',
                    mergeKey: collapseText(msg.mergeKey || '').toLowerCase(),
                    progressEphemeral: !!msg.progressEphemeral,
                    progressPulse: !!msg.progressPulse,
                    progressGroupHeader: !!msg.progressGroupHeader,
                    progressGroupCollapsed: !!msg.progressGroupCollapsed,
                    stepGroupId: collapseText(msg.stepGroupId || ''),
                    stepOwnerId: collapseText(msg.stepOwnerId || ''),
                    stepCollapsed: !!msg.stepCollapsed,
                    collapsibleTitle: collapseText(msg.collapsibleTitle || ''),
                    collapsibleDetail: normalizeProgressDetailText(msg.collapsibleDetail || ''),
                    collapsibleCollapsed: !!msg.collapsibleCollapsed
                });
            }
        }
        if (!messages.length) return null;

        return {
            id: conversation.id || makeId(),
            title: conversation.title || deriveConversationTitle(conversation),
            modelKey: modelKey,
            createdAt: createdAt,
            updatedAt: updatedAt,
            messages: messages,
            summary: normalizeConversationSummaryText(conversation.summary || '')
        };
    }

    function buildConversationSnapshot() {
        sortConversations();
        var snapshot = [];
        var i;
        for (i = 0; i < state.conversations.length && snapshot.length < MAX_UI_CONVERSATIONS; i++) {
            var row = exportConversationForSync(state.conversations[i]);
            if (row) snapshot.push(row);
        }
        return snapshot;
    }

    function syncConversationsToServer(snapshot) {
        if (!state.assistantEnabled) return Promise.resolve();
        if (!window.fetch || !snapshot || !snapshot.length) return Promise.resolve();
        return fetch(apiBase + 'conversations_sync', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rows: snapshot })
        }).catch(function () {
            return { ok: false, status: 0, retryAfterMs: 0 };
        }).then(function (response) {
            if (!response || typeof response !== 'object' || typeof response.status !== 'number') {
                return response;
            }
            var retryAfterMs = 0;
            try {
                if (response.headers && typeof response.headers.get === 'function') {
                    var retryAfterRaw = collapseText(response.headers.get('Retry-After') || '');
                    if (retryAfterRaw) {
                        var asSeconds = parseInt(retryAfterRaw, 10);
                        if (!isNaN(asSeconds) && asSeconds >= 0) {
                            retryAfterMs = asSeconds * 1000;
                        } else {
                            var parsedDate = Date.parse(retryAfterRaw);
                            if (!isNaN(parsedDate)) {
                                retryAfterMs = parsedDate - now();
                            }
                        }
                    }
                }
            } catch (e) {
                retryAfterMs = 0;
            }
            if (retryAfterMs < 0) retryAfterMs = 0;
            return {
                ok: !!response.ok,
                status: response.status || 0,
                retryAfterMs: retryAfterMs
            };
        });
    }

    function resolveRemoteSyncBackoffMs(result) {
        var row = result && typeof result === 'object' ? result : {};
        if ((parseInt(row.status, 10) || 0) !== 429) {
            remoteSync429Count = 0;
            remoteSyncBackoffUntil = 0;
            return 0;
        }
        remoteSync429Count += 1;
        var retryAfterMs = parseInt(row.retryAfterMs, 10);
        if (isNaN(retryAfterMs) || retryAfterMs < 0) retryAfterMs = 0;
        if (!retryAfterMs) {
            var exp = REMOTE_SYNC_BACKOFF_BASE_MS * Math.pow(2, Math.max(0, remoteSync429Count - 1));
            retryAfterMs = exp;
        }
        if (retryAfterMs > REMOTE_SYNC_BACKOFF_MAX_MS) {
            retryAfterMs = REMOTE_SYNC_BACKOFF_MAX_MS;
        }
        remoteSyncBackoffUntil = now() + retryAfterMs;
        return retryAfterMs;
    }

    function flushScheduledConversationSync() {
        remoteSyncTimer = 0;
        if (!state.assistantEnabled || !window.fetch || applyingServerConversations) return;
        if (remoteSyncInFlight) return;

        var currentNow = now();
        var minIntervalWait = remoteSyncLastSentAt > 0
            ? (REMOTE_SYNC_MIN_INTERVAL_MS - (currentNow - remoteSyncLastSentAt))
            : 0;
        var backoffWait = remoteSyncBackoffUntil > currentNow
            ? (remoteSyncBackoffUntil - currentNow)
            : 0;
        var waitMs = Math.max(0, minIntervalWait, backoffWait);
        if (waitMs > 0) {
            remoteSyncTimer = window.setTimeout(flushScheduledConversationSync, waitMs);
            return;
        }

        var payload = (remoteSyncPendingSnapshot && remoteSyncPendingSnapshot.length)
            ? remoteSyncPendingSnapshot
            : buildConversationSnapshot();
        remoteSyncPendingSnapshot = null;
        if (!payload || !payload.length) return;

        remoteSyncInFlight = true;
        syncConversationsToServer(payload).then(function (result) {
            remoteSyncLastSentAt = now();
            resolveRemoteSyncBackoffMs(result);
            remoteSyncInFlight = false;
            if (remoteSyncPendingSnapshot && remoteSyncPendingSnapshot.length) {
                scheduleConversationSync(remoteSyncPendingSnapshot);
            }
        });
    }

    function scheduleConversationSync(snapshot) {
        if (!state.assistantEnabled || !window.fetch || applyingServerConversations) return;
        var payload = snapshot && snapshot.length ? snapshot : buildConversationSnapshot();
        if (!payload || !payload.length) return;
        remoteSyncPendingSnapshot = payload;
        if (remoteSyncTimer) return;
        remoteSyncTimer = window.setTimeout(flushScheduledConversationSync, REMOTE_SYNC_DEBOUNCE_MS);
    }

    function conversationHasSubtleSystemTone(conversation) {
        if (!conversation || !conversation.messages || typeof conversation.messages.length !== 'number') {
            return false;
        }
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var row = conversation.messages[i];
            if (!row || typeof row !== 'object') continue;
            if ((row.role || '').toLowerCase() !== 'system') continue;
            if (collapseText(row.uiTone || '').toLowerCase() === 'subtle') return true;
        }
        return false;
    }

    function loadServerConversations(force) {
        if (!state.assistantEnabled) return Promise.resolve();
        if (!window.fetch) return Promise.resolve();
        if (state.serverConversationsLoaded && !force) return Promise.resolve();
        if (remoteLoadPromise && !force) return remoteLoadPromise;

        remoteLoadPromise = fetch(apiBase + 'conversations', { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                state.serverConversationsLoaded = true;
                if (!res || !res.success || !res.rows || typeof res.rows.length !== 'number') return;

                var loaded = [];
                var i;
                for (i = 0; i < res.rows.length; i++) {
                    var convo = normalizeConversation(res.rows[i]);
                    if (convo && isPersistableConversation(convo)) loaded.push(convo);
                }
                var local = state.conversations.slice(0);
                var needSync = false;

                for (i = 0; i < local.length; i++) {
                    var localConvo = normalizeConversation(local[i]);
                    if (!localConvo || !isPersistableConversation(localConvo)) continue;
                    var found = false;
                    var j;
                    for (j = 0; j < loaded.length; j++) {
                        if (loaded[j].id !== localConvo.id) continue;
                        found = true;
                        var localUpdatedAt = localConvo.updatedAt || 0;
                        var loadedUpdatedAt = loaded[j].updatedAt || 0;
                        if (localUpdatedAt > loadedUpdatedAt) {
                            loaded[j] = localConvo;
                            needSync = true;
                        } else if (
                            localUpdatedAt === loadedUpdatedAt
                            && conversationHasSubtleSystemTone(localConvo)
                            && !conversationHasSubtleSystemTone(loaded[j])
                        ) {
                            // Keep richer local presentation metadata and push it back to server.
                            loaded[j] = localConvo;
                            needSync = true;
                        }
                        loaded[j].summary = mergeConversationSummaryText(loaded[j].summary || '', localConvo.summary || '');
                        break;
                    }
                    if (!found) {
                        loaded.push(localConvo);
                        needSync = true;
                    }
                }
                if (!loaded.length) return;

                applyingServerConversations = true;
                state.conversations = loaded;
                sortConversations();
                if (!getConversationById(state.activeConversationId)) {
                    state.activeConversationId = state.conversations[0].id;
                }
                saveConversations(true);
                renderHistoryList();
                renderMessages();
                populateModelSelect();
                updateConnectionUi();
                applyingServerConversations = false;
                if (needSync) {
                    scheduleConversationSync(buildConversationSnapshot());
                }
            })
            .catch(function () {
                state.serverConversationsLoaded = true;
            })
            .then(function () {
                remoteLoadPromise = null;
            });
        return remoteLoadPromise;
    }

    function saveConversations(skipRemoteSync) {
        try {
            sortConversations();
            var snapshot = [];
            var i;
            for (i = 0; i < state.conversations.length && snapshot.length < MAX_UI_CONVERSATIONS; i++) {
                var row = normalizeConversation(state.conversations[i]);
                if (!row || !isPersistableConversation(row)) continue;
                snapshot.push(row);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
            if (!skipRemoteSync) {
                scheduleConversationSync(snapshot);
            }
        } catch (e) {
            // ignore storage errors
        }
    }

    function normalizeConversation(raw) {
        if (!raw || typeof raw !== 'object') return null;
        var rawModelKey = collapseText(raw.modelKey || '');
        var convo = {
            id: raw.id || makeId(),
            title: raw.title || tr('assistant.ui.new_chat', 'New Chat'),
            modelKey: rawModelKey || defaultModelKey(),
            createdAt: raw.createdAt || now(),
            updatedAt: raw.updatedAt || raw.createdAt || now(),
            summary: normalizeConversationSummaryText(raw.summary || raw.conversationSummary || ''),
            messages: []
        };

        if (raw.messages && raw.messages.length && typeof raw.messages.length === 'number') {
            for (var m = 0; m < raw.messages.length; m++) {
                var msg = raw.messages[m];
                if (!msg || typeof msg !== 'object') continue;
                var role = (msg.role || '').toLowerCase();
                var content = (msg.content || '').toString();
                if (!content) continue;
                if (role !== 'user' && role !== 'assistant' && role !== 'system') continue;
                var messageId = collapseText(msg.id || '');
                if (!messageId) messageId = makeId();
                var progressGroupHeader = toBooleanFlag(msg.progressGroupHeader);
                var stepCollapsed = msg.stepCollapsed === true || toBooleanFlag(msg.stepCollapsed);
                var progressGroupCollapsed = msg.progressGroupCollapsed === true || toBooleanFlag(msg.progressGroupCollapsed);
                // Past conversations should open with progress details folded by default.
                if (progressGroupHeader) {
                    progressGroupCollapsed = true;
                    stepCollapsed = true;
                }
                convo.messages.push({
                    id: messageId,
                    role: role,
                    content: content,
                    ts: msg.ts || convo.updatedAt,
                    parentMessageId: collapseText(msg.parentMessageId || ''),
                    durationMs: parseInt(msg.durationMs, 10) || 0,
                    aiMeta: sanitizeMessageAiMeta(msg.aiMeta),
                    uiTone: collapseText(msg.uiTone || '').toLowerCase() === 'subtle' ? 'subtle' : '',
                    mergeKey: collapseText(msg.mergeKey || '').toLowerCase(),
                    progressEphemeral: !!msg.progressEphemeral,
                    progressPulse: !!msg.progressPulse,
                    progressGroupHeader: progressGroupHeader === true,
                    progressGroupCollapsed: progressGroupCollapsed === true,
                    stepGroupId: collapseText(msg.stepGroupId || ''),
                    stepOwnerId: collapseText(msg.stepOwnerId || ''),
                    stepCollapsed: stepCollapsed === true,
                    collapsibleTitle: collapseText(msg.collapsibleTitle || ''),
                    collapsibleDetail: normalizeProgressDetailText(msg.collapsibleDetail || ''),
                    collapsibleCollapsed: msg.collapsibleCollapsed === true || toBooleanFlag(msg.collapsibleCollapsed)
                });
            }
        }
        var normalizedOption = convo.modelKey ? findModelOption(convo.modelKey) : null;
        if (normalizedOption && normalizedOption.key) {
            convo.modelKey = normalizedOption.key;
        } else if (!convo.modelKey) {
            convo.modelKey = defaultModelKey();
        }
        return convo;
    }

    function isPersistableConversation(conversation) {
        if (!conversation || !conversation.messages || !conversation.messages.length) return false;
        for (var i2 = 0; i2 < conversation.messages.length; i2++) {
            var msg = conversation.messages[i2];
            if (!msg || typeof msg !== 'object') continue;
            var role = (msg.role || '').toLowerCase();
            if (role !== 'user' && role !== 'assistant' && role !== 'system') continue;
            if (collapseText(msg.content || '') !== '') return true;
        }
        return false;
    }

    function pruneTransientEmptyConversations() {
        if (!state.conversations || !state.conversations.length) return;
        var keep = [];
        var i2;
        for (i2 = 0; i2 < state.conversations.length; i2++) {
            var convo = normalizeConversation(state.conversations[i2]);
            if (!convo) continue;
            if (!isPersistableConversation(convo)) continue;
            keep.push(convo);
        }
        state.conversations = keep;
    }

    function loadConversations() {
        state.conversations = [];
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            var arr = JSON.parse(raw);
            if (!arr || typeof arr.length !== 'number') return;
            for (var i3 = 0; i3 < arr.length; i3++) {
                var convo = normalizeConversation(arr[i3]);
                if (convo && isPersistableConversation(convo)) state.conversations.push(convo);
            }
            sortConversations();
        } catch (e) {
            state.conversations = [];
        }
    }

    function getConversationById(id) {
        for (var i4 = 0; i4 < state.conversations.length; i4++) {
            if (state.conversations[i4].id === id) return state.conversations[i4];
        }
        return null;
    }

    function deriveConversationTitle(conversation) {
        if (!conversation || !conversation.messages) return tr('assistant.ui.new_chat', 'New Chat');
        for (var i5 = 0; i5 < conversation.messages.length; i5++) {
            var row = conversation.messages[i5];
            if (row.role === 'user' && collapseText(row.content) !== '') {
                return truncateText(row.content, 26);
            }
        }
        return tr('assistant.ui.new_chat', 'New Chat');
    }

    function createConversation(modelKey) {
        pruneTransientEmptyConversations();
        var convo = {
            id: makeId(),
            title: tr('assistant.ui.new_chat', 'New Chat'),
            modelKey: modelKey || (modelSelect.value || defaultModelKey()),
            createdAt: now(),
            updatedAt: now(),
            summary: '',
            messages: []
        };
        state.conversations.unshift(convo);
        state.activeConversationId = convo.id;
        return convo;
    }

    function ensureConversation() {
        var current = getConversationById(state.activeConversationId);
        if (current) return current;
        if (state.conversations.length === 0) {
            return createConversation(modelSelect.value || defaultModelKey());
        }
        state.activeConversationId = state.conversations[0].id;
        return state.conversations[0];
    }

    function buildEditorInsertPayload(text) {
        var raw = text == null ? '' : String(text);
        raw = raw.replace(/\r\n?/g, '\n').trim();
        if (!raw) return { text: '', html: '' };
        var html = markdownToHtml(raw);
        if (!html) html = '<p>' + escapeHtml(raw).replace(/\n/g, '<br>') + '</p>';
        return { text: raw, html: html };
    }

    function isElementVisibleForEditorInsert(el) {
        if (!el || el.nodeType !== 1) return false;
        if (panel && panel.contains(el)) return false;
        var styleObj = null;
        try {
            styleObj = window.getComputedStyle ? window.getComputedStyle(el) : null;
        } catch (e) {
            styleObj = null;
        }
        if (styleObj) {
            if (styleObj.display === 'none' || styleObj.visibility === 'hidden') return false;
            if (parseFloat(styleObj.opacity || '1') === 0) return false;
        }
        var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
        if (!rect) return false;
        if (rect.width < 2 || rect.height < 2) return false;
        return true;
    }

    function dispatchDomEvent(target, typeName) {
        if (!target || !target.dispatchEvent || !typeName) return;
        try {
            target.dispatchEvent(new Event(typeName, { bubbles: true }));
            return;
        } catch (e) {
            // ignore
        }
        try {
            var evt = document.createEvent('Event');
            evt.initEvent(typeName, true, false);
            target.dispatchEvent(evt);
        } catch (e2) {
            // ignore
        }
    }

    function dispatchInputLikeEvents(target) {
        dispatchDomEvent(target, 'input');
        dispatchDomEvent(target, 'change');
    }

    function isSelectionInsideElement(doc, el) {
        if (!doc || !el) return false;
        try {
            var sel = doc.getSelection ? doc.getSelection() : null;
            if (!sel || !sel.rangeCount) return false;
            var anchor = sel.anchorNode;
            if (!anchor) return false;
            return el === anchor || (el.contains && el.contains(anchor));
        } catch (e) {
            return false;
        }
    }

    function moveCaretToEnd(el) {
        if (!el) return false;
        var doc = el.ownerDocument || document;
        try {
            var range = doc.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = doc.getSelection ? doc.getSelection() : null;
            if (!sel) return false;
            sel.removeAllRanges();
            sel.addRange(range);
            return true;
        } catch (e) {
            return false;
        }
    }

    function createRangeFragment(doc, range, html) {
        if (!doc || !range) return null;
        if (range.createContextualFragment) {
            try {
                return range.createContextualFragment(html);
            } catch (e) {
                // fallback below
            }
        }
        try {
            var wrap = doc.createElement('div');
            wrap.innerHTML = html;
            var frag = doc.createDocumentFragment();
            while (wrap.firstChild) {
                frag.appendChild(wrap.firstChild);
            }
            return frag;
        } catch (e2) {
            return null;
        }
    }

    function insertHtmlWithSelection(doc, html, plainText) {
        if (!doc) return false;
        try {
            var sel = doc.getSelection ? doc.getSelection() : null;
            if (sel && sel.rangeCount > 0) {
                var range = sel.getRangeAt(0);
                range.deleteContents();
                var fragment = createRangeFragment(doc, range, html);
                if (fragment) {
                    var lastNode = fragment.lastChild;
                    range.insertNode(fragment);
                    if (lastNode) {
                        range = doc.createRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    return true;
                }
            }
        } catch (e) {
            // fallback below
        }

        try {
            if (doc.execCommand && doc.execCommand('insertHTML', false, html)) {
                return true;
            }
        } catch (e2) {
            // ignore
        }
        try {
            if (doc.execCommand && doc.execCommand('insertText', false, plainText)) {
                return true;
            }
        } catch (e3) {
            // ignore
        }
        return false;
    }

    function insertIntoContentEditableElement(el, payload) {
        if (!el || !payload || !payload.text) return false;
        if (!el.isContentEditable) return false;
        try {
            el.focus();
        } catch (e) {
            // ignore
        }
        var doc = el.ownerDocument || document;
        if (!isSelectionInsideElement(doc, el)) {
            moveCaretToEnd(el);
        }
        if (insertHtmlWithSelection(doc, payload.html, payload.text)) {
            dispatchInputLikeEvents(el);
            return true;
        }

        try {
            el.innerHTML = (el.innerHTML || '') + payload.html;
            dispatchInputLikeEvents(el);
            return true;
        } catch (e2) {
            return false;
        }
    }

    function isTextInputTag(tagName, inputType) {
        var tag = (tagName || '').toLowerCase();
        if (tag === 'textarea') return true;
        if (tag !== 'input') return false;
        var type = (inputType || 'text').toLowerCase();
        return type === 'text' || type === 'search' || type === 'email' || type === 'url' || type === 'tel';
    }

    function insertIntoTextField(el, plainText) {
        if (!el || !isTextInputTag(el.tagName, el.type)) return false;
        if (!isElementVisibleForEditorInsert(el)) return false;
        var value = (el.value || '').toString();
        var start = typeof el.selectionStart === 'number' ? el.selectionStart : value.length;
        var end = typeof el.selectionEnd === 'number' ? el.selectionEnd : value.length;
        if (start < 0) start = value.length;
        if (end < start) end = start;
        var inserted = plainText || '';
        el.value = value.substring(0, start) + inserted + value.substring(end);
        var pos = start + inserted.length;
        try {
            if (el.setSelectionRange) el.setSelectionRange(pos, pos);
            el.focus();
        } catch (e) {
            // ignore
        }
        dispatchInputLikeEvents(el);
        return true;
    }

    function findBestCandidate(elements) {
        var list = elements || [];
        var active = document.activeElement;
        var best = null;
        var bestScore = -1;
        var i;
        for (i = 0; i < list.length; i++) {
            var el = list[i];
            if (!isElementVisibleForEditorInsert(el)) continue;
            var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
            var score = rect ? (rect.width * rect.height) : 0;
            if (active && (active === el || (el.contains && el.contains(active)))) {
                score += 1000000000;
            }
            if (score > bestScore) {
                bestScore = score;
                best = el;
            }
        }
        return best;
    }

    function findBestContentEditableElement() {
        var nodes = document.querySelectorAll('[contenteditable="true"], [contenteditable=""], [contenteditable="plaintext-only"]');
        var rows = [];
        var i;
        for (i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (!node || !node.isContentEditable) continue;
            rows.push(node);
        }
        return findBestCandidate(rows);
    }

    function getEditableIframeDocument(iframe) {
        if (!iframe || !isElementVisibleForEditorInsert(iframe)) return null;
        var doc = null;
        try {
            doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document) || null;
        } catch (e) {
            return null;
        }
        if (!doc || !doc.body) return null;
        var mode = (doc.designMode || '').toLowerCase();
        var body = doc.body;
        var editable = body.isContentEditable || mode === 'on' || body.getAttribute('contenteditable') === 'true';
        if (!editable) return null;
        return doc;
    }

    function insertIntoIframeElement(iframe, payload) {
        var doc = getEditableIframeDocument(iframe);
        if (!doc || !payload || !payload.text) return false;
        try {
            if (iframe.contentWindow && iframe.contentWindow.focus) iframe.contentWindow.focus();
            if (doc.body && doc.body.focus) doc.body.focus();
        } catch (e) {
            // ignore
        }
        if (!isSelectionInsideElement(doc, doc.body)) {
            moveCaretToEnd(doc.body);
        }
        if (insertHtmlWithSelection(doc, payload.html, payload.text)) {
            dispatchInputLikeEvents(doc.body);
            return true;
        }
        try {
            doc.body.innerHTML = (doc.body.innerHTML || '') + payload.html;
            dispatchInputLikeEvents(doc.body);
            return true;
        } catch (e2) {
            return false;
        }
    }

    function findBestCkeditorInstance() {
        if (!window.CKEDITOR || !window.CKEDITOR.instances) return null;
        var active = document.activeElement;
        var fallback = null;
        var instanceId;
        for (instanceId in window.CKEDITOR.instances) {
            if (!Object.prototype.hasOwnProperty.call(window.CKEDITOR.instances, instanceId)) continue;
            var instance = window.CKEDITOR.instances[instanceId];
            if (!instance) continue;

            var container = instance.container && instance.container.$ ? instance.container.$ : null;
            var editableObj = null;
            var editableEl = null;
            try {
                editableObj = instance.editable ? instance.editable() : null;
                editableEl = editableObj && editableObj.$ ? editableObj.$ : null;
            } catch (e) {
                editableEl = null;
            }

            if (!fallback) {
                if ((container && isElementVisibleForEditorInsert(container)) || (editableEl && isElementVisibleForEditorInsert(editableEl))) {
                    fallback = instance;
                }
            }
            try {
                if (instance.focusManager && instance.focusManager.hasFocus) {
                    return instance;
                }
            } catch (e2) {
                // ignore
            }
            if (active) {
                if (container && container.contains && container.contains(active)) return instance;
                if (editableEl && editableEl.contains && editableEl.contains(active)) return instance;
            }
        }
        return fallback;
    }

    function insertIntoCkeditor(payload) {
        var instance = findBestCkeditorInstance();
        if (!instance || !payload || !payload.text) return false;
        try {
            if (instance.focus) instance.focus();
            if (instance.insertHtml) {
                instance.insertHtml(payload.html);
            } else if (instance.insertText) {
                instance.insertText(payload.text);
            } else {
                return false;
            }
            if (instance.fire) instance.fire('change');
            return true;
        } catch (e) {
            return false;
        }
    }

    function insertIntoTinyMce(payload) {
        if (!window.tinymce || !payload || !payload.text) return false;
        var editor = null;
        try {
            editor = window.tinymce.activeEditor || null;
        } catch (e) {
            editor = null;
        }
        if (!editor) return false;
        try {
            if (editor.focus) editor.focus();
            if (editor.insertContent) {
                editor.insertContent(payload.html);
            } else if (editor.execCommand) {
                editor.execCommand('mceInsertContent', false, payload.html);
            } else {
                return false;
            }
            if (editor.fire) editor.fire('change');
            return true;
        } catch (e2) {
            return false;
        }
    }

    function tryInsertIntoPageEditor(text) {
        var payload = buildEditorInsertPayload(text);
        if (!payload.text) {
            return { ok: false, msg: tr('assistant.message.editor.insert.no_content', 'There is no content to insert into the editor.') };
        }

        if (insertIntoCkeditor(payload)) {
            return { ok: true, msg: tr('assistant.message.editor.insert.success_ckeditor', 'Inserted summary into editor. (CKEditor)') };
        }
        if (insertIntoTinyMce(payload)) {
            return { ok: true, msg: tr('assistant.message.editor.insert.success_tinymce', 'Inserted summary into editor. (TinyMCE)') };
        }

        var active = document.activeElement;
        var activeTag = ((active && active.tagName) || '').toLowerCase();
        if (active && !panel.contains(active)) {
            if (activeTag === 'iframe' && insertIntoIframeElement(active, payload)) {
                return { ok: true, msg: tr('assistant.message.editor.insert.success_iframe', 'Inserted summary into editor. (iframe editor)') };
            }
            if (active.isContentEditable && insertIntoContentEditableElement(active, payload)) {
                return { ok: true, msg: tr('assistant.message.editor.insert.success_contenteditable', 'Inserted summary into editor. (contenteditable)') };
            }
            if (isTextInputTag(activeTag, active.type) && insertIntoTextField(active, payload.text)) {
                return { ok: true, msg: tr('assistant.message.editor.insert.success_input', 'Inserted summary into input field.') };
            }
        }

        var editable = findBestContentEditableElement();
        if (editable && insertIntoContentEditableElement(editable, payload)) {
            return { ok: true, msg: tr('assistant.message.editor.insert.success_contenteditable', 'Inserted summary into editor. (contenteditable)') };
        }

        var iframes = document.querySelectorAll('iframe');
        var iframeRows = [];
        var i;
        for (i = 0; i < iframes.length; i++) {
            if (getEditableIframeDocument(iframes[i])) iframeRows.push(iframes[i]);
        }
        var iframeTarget = findBestCandidate(iframeRows);
        if (iframeTarget && insertIntoIframeElement(iframeTarget, payload)) {
            return { ok: true, msg: tr('assistant.message.editor.insert.success_iframe', 'Inserted summary into editor. (iframe editor)') };
        }

        var textareas = document.querySelectorAll('textarea');
        var textareaRows = [];
        for (i = 0; i < textareas.length; i++) {
            var ta = textareas[i];
            if (!isElementVisibleForEditorInsert(ta)) continue;
            var rect = ta.getBoundingClientRect ? ta.getBoundingClientRect() : null;
            if (!rect || rect.height < 60) continue;
            textareaRows.push(ta);
        }
        var textareaTarget = findBestCandidate(textareaRows);
        if (textareaTarget && insertIntoTextField(textareaTarget, payload.text)) {
            return { ok: true, msg: tr('assistant.message.editor.insert.success_input', 'Inserted summary into input field.') };
        }

        return {
            ok: false,
            msg: tr('assistant.message.editor.insert.editor_not_found', 'Editor not found. Click the body editor once to focus, then try again.')
        };
    }

    function findLastAssistantMessageText(conversation) {
        if (!conversation || !conversation.messages || !conversation.messages.length) return '';
        var i;
        for (i = conversation.messages.length - 1; i >= 0; i--) {
            var row = conversation.messages[i];
            if (!row || row.role !== 'assistant') continue;
            var content = (row.content || '').toString().trim();
            if (content) return content;
        }
        return '';
    }

    function isInsertIntoEditorIntent(prompt) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.isInsertIntoEditorIntent === 'function') {
            return !!analyzer.isInsertIntoEditorIntent(prompt);
        }
        return false;
    }

    function copyTextToClipboard(text) {
        var value = text == null ? '' : String(text);
        if (!value) return Promise.resolve(false);

        if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            return navigator.clipboard.writeText(value)
                .then(function () { return true; })
                .catch(function () { return false; });
        }

        return new Promise(function (resolve) {
            var ta = document.createElement('textarea');
            ta.value = value;
            ta.setAttribute('readonly', 'readonly');
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            ta.style.top = '0';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            ta.setSelectionRange(0, ta.value.length);
            var ok = false;
            try {
                ok = !!(document.execCommand && document.execCommand('copy'));
            } catch (e) {
                ok = false;
            }
            document.body.removeChild(ta);
            resolve(ok);
        });
    }

    function formatArtifactSize(size) {
        var value = parseInt(size, 10);
        if (!value || value < 0) return '';
        if (value < 1024) return value + 'B';
        if (value < 1024 * 1024) return (value / 1024).toFixed(1) + 'KB';
        return (value / (1024 * 1024)).toFixed(1) + 'MB';
    }

    function normalizeServerArtifacts(rows) {
        var list = Array.isArray(rows) ? rows : [];
        var out = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i];
            if (!row || typeof row !== 'object') continue;

            var fileName = collapseText(row.file_name || row.name || '');
            if (!fileName) fileName = 'artifact.bin';
            var downloadUrl = sanitizeMarkdownUrl(row.download_url || row.url || '');
            var mimeType = (row.mime_type || row.mimeType || '').toString();
            var size = parseInt(row.size, 10);
            if (!downloadUrl) continue;

            out.push({
                fileName: fileName,
                downloadUrl: downloadUrl,
                mimeType: mimeType,
                size: isNaN(size) ? 0 : size
            });
        }
        return out;
    }

    function appendArtifactLinksToAnswer(answerText, artifactRows) {
        var artifacts = normalizeServerArtifacts(artifactRows);
        var base = (answerText == null ? '' : String(answerText)).trim();
        if (!artifacts.length) return base;

        var lines = ['[생성 파일]'];
        var i;
        for (i = 0; i < artifacts.length; i++) {
            var item = artifacts[i];
            if (!item) continue;
            var sizeText = formatArtifactSize(item.size);
            var label = item.fileName;
            if (sizeText) {
                label += ' (' + sizeText + ')';
            }
            lines.push('- [' + label + '](' + item.downloadUrl + ')');
        }
        if (lines.length === 1) return base;
        if (base) {
            return base + '\n\n' + lines.join('\n');
        }
        return lines.join('\n');
    }

    function normalizeTopLevelOrderedLists(container) {
        if (!container || !container.children || !container.children.length) return;
        var nextStart = 1;
        var inListGroup = false;
        var i;
        for (i = 0; i < container.children.length; i++) {
            var child = container.children[i];
            if (!child || child.nodeType !== 1) continue;
            var tag = (child.tagName || '').toUpperCase();

            if (tag === 'OL') {
                var liCount = 0;
                var j;
                for (j = 0; j < child.children.length; j++) {
                    var liTag = child.children[j] && child.children[j].tagName ? child.children[j].tagName.toUpperCase() : '';
                    if (liTag === 'LI') liCount++;
                }
                if (!liCount) liCount = 1;

                child.setAttribute('start', String(nextStart));
                nextStart += liCount;
                inListGroup = true;
                continue;
            }

            if (tag === 'UL' && inListGroup) {
                // Keep numbering across orphan bullet blocks between split ordered-list blocks.
                continue;
            }

            inListGroup = false;
            nextStart = 1;
        }
    }

    function normalizeCodeLanguageName(value) {
        var token = collapseText(value || '').toLowerCase();
        if (!token) return '';
        if (token.indexOf('language-') === 0) token = token.substring(9);
        else if (token.indexOf('lang-') === 0) token = token.substring(5);
        token = token.replace(/^[^a-z0-9#+-]+|[^a-z0-9#+-]+$/g, '');
        if (!token) return '';
        if (Object.prototype.hasOwnProperty.call(CODE_LANGUAGE_ALIAS_MAP, token)) {
            return CODE_LANGUAGE_ALIAS_MAP[token];
        }
        return token;
    }

    function extractCodeLanguageFromClassName(className) {
        var text = collapseText(className || '');
        if (!text) return '';
        var tokens = text.split(/\s+/);
        var i;
        for (i = 0; i < tokens.length; i++) {
            var lang = normalizeCodeLanguageName(tokens[i]);
            if (lang) return lang;
        }
        return '';
    }

    function stripCodeLanguageClasses(codeEl) {
        if (!codeEl) return;
        var text = collapseText(codeEl.className || '');
        if (!text) {
            codeEl.className = '';
            return;
        }
        var tokens = text.split(/\s+/);
        var keep = [];
        var i;
        for (i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (!token) continue;
            if (/^(language|lang)-/i.test(token)) continue;
            keep.push(token);
        }
        codeEl.className = keep.join(' ');
    }

    function resolveCodeLanguageForHighlight(codeEl, hljs) {
        if (!codeEl) return '';
        var requested = extractCodeLanguageFromClassName(codeEl.className || '');
        if (!requested) return '';
        if (!hljs || typeof hljs.getLanguage !== 'function') return requested;
        if (hljs.getLanguage(requested)) return requested;
        var dashed = requested.replace(/_/g, '-');
        if (dashed && hljs.getLanguage(dashed)) return dashed;
        var compact = requested.replace(/-/g, '');
        if (compact && hljs.getLanguage(compact)) return compact;
        return '';
    }

    function highlightAssistantCodeBlocks(container) {
        if (!container || !container.querySelectorAll) return;
        var hljs = window.hljs;
        if (!hljs) return;
        var blocks = container.querySelectorAll('pre code');
        var i;
        for (i = 0; i < blocks.length; i++) {
            var codeEl = blocks[i];
            if (!codeEl || codeEl.getAttribute('data-hb-highlighted') === '1') continue;
            var lang = resolveCodeLanguageForHighlight(codeEl, hljs);
            stripCodeLanguageClasses(codeEl);
            var sourceText = codeEl.textContent || '';
            try {
                if (lang && typeof hljs.highlight === 'function') {
                    var explicit = hljs.highlight(sourceText, { language: lang, ignoreIllegals: true });
                    codeEl.innerHTML = explicit && typeof explicit.value === 'string' ? explicit.value : escapeHtml(sourceText);
                    codeEl.className = collapseText((codeEl.className || '') + ' hljs hb-lang-' + lang);
                } else if (typeof hljs.highlightAuto === 'function') {
                    var auto = hljs.highlightAuto(sourceText);
                    codeEl.innerHTML = auto && typeof auto.value === 'string' ? auto.value : escapeHtml(sourceText);
                    codeEl.className = collapseText((codeEl.className || '') + ' hljs');
                } else if (typeof hljs.highlightElement === 'function') {
                    hljs.highlightElement(codeEl);
                } else {
                    continue;
                }
                codeEl.setAttribute('data-hb-highlighted', '1');
            } catch (e) {
                // keep plain text rendering when highlighting fails.
            }
        }
    }

    function formatMessageElapsed(durationMs) {
        var value = parseInt(durationMs, 10);
        if (!value || value < 0) return '';
        if (value < 1000) return trff('assistant.ui.elapsed.ms', '{value}ms elapsed', { value: value });
        if (value >= 60000) {
            var totalSec = Math.round(value / 1000);
            var mins = Math.floor(totalSec / 60);
            var secs = totalSec % 60;
            if (secs === 0) return trff('assistant.ui.elapsed.min_only', '{mins}m elapsed', { mins: mins });
            return trff('assistant.ui.elapsed.min_sec', '{mins}m {secs}s elapsed', { mins: mins, secs: secs });
        }
        var sec = Math.round(value / 100) / 10;
        if (Math.abs(sec - Math.round(sec)) < 0.05) sec = Math.round(sec);
        return trff('assistant.ui.elapsed.sec', '{secs}s elapsed', { secs: sec });
    }

    function sanitizeMessageAiMeta(meta) {
        if (!meta || typeof meta !== 'object') return null;
        try {
            var raw = JSON.stringify(meta);
            if (!raw || raw === '{}') return null;
            if (raw.length <= 12000) return JSON.parse(raw);
            return {
                truncated: true,
                originalChars: raw.length,
                provider: collapseText(meta.provider || ''),
                model: collapseText(meta.model || ''),
                request: (meta.request && typeof meta.request === 'object') ? meta.request : {},
                usage: (meta.usage && typeof meta.usage === 'object') ? meta.usage : {},
                autofetch: (meta.autofetch && typeof meta.autofetch === 'object') ? meta.autofetch : {}
            };
        } catch (e) {
            return null;
        }
    }

    function parseStepToggleMessage(text) {
        var raw = String(text || '').replace(/\r\n?/g, '\n');
        if (!raw) return null;
        var lines = raw.split('\n');
        if (!lines.length) return null;
        var firstLine = collapseText(lines[0] || '');
        if (!/^\[\s*\d+\s*\/\s*\d+\s*\]/.test(firstLine)) return null;
        return {
            title: firstLine,
            detail: lines.slice(1).join('\n').trim()
        };
    }

    function setStepToggleExpanded(btn, detailEl, expanded) {
        if (!btn) return;
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        if (!detailEl) return;
        detailEl.style.display = expanded ? 'block' : 'none';
    }

    function setStepGroupRowsVisible(stepRow, visible) {
        if (!stepRow) return;
        var stepId = stepRow.getAttribute ? collapseText(stepRow.getAttribute('data-hb-step-id') || '') : '';
        if (!stepId) return;
        var parent = stepRow.parentNode;
        if (!parent || !parent.childNodes) return;
        var i;
        for (i = 0; i < parent.childNodes.length; i++) {
            var cur = parent.childNodes[i];
            if (!cur || cur.nodeType !== 1) continue;
            var owner = cur.getAttribute ? collapseText(cur.getAttribute('data-hb-step-owner') || '') : '';
            if (owner !== stepId) continue;
            cur.style.display = visible ? '' : 'none';
        }
    }

    function findLastStepHeaderRow(container) {
        var parent = container || messages;
        if (!parent || !parent.childNodes) return null;
        for (var i = parent.childNodes.length - 1; i >= 0; i--) {
            var row = parent.childNodes[i];
            if (!row || row.nodeType !== 1) continue;
            if (row.getAttribute && row.getAttribute('data-hb-step-header') === '1') {
                return row;
            }
        }
        return null;
    }

    function isStepHeaderExpanded(stepRow) {
        if (!stepRow) return true;
        var btns = stepRow.getElementsByTagName ? stepRow.getElementsByTagName('button') : [];
        if (!btns || !btns.length) return true;
        var expanded = btns[0].getAttribute ? btns[0].getAttribute('aria-expanded') : 'true';
        return expanded !== 'false';
    }

    function buildStepIconSvg(state) {
        var kind = collapseText(state || '').toLowerCase();
        var body = '';
        if (kind === 'plus') {
            body = '<path d="M12 7.5v9m4.5-4.5h-9"></path><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>';
        } else if (kind === 'minus') {
            body = '<path d="M16.5 12h-9"></path><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>';
        } else {
            body = '<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path>';
        }
        return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + body + '</svg>';
    }

    function resolveStepHeaderId(row, meta) {
        var id = collapseText(
            (meta && typeof meta === 'object' && (meta.stepGroupId || meta.id))
            || ''
        );
        if (!id) id = makeId();
        if (meta && typeof meta === 'object') {
            meta.stepGroupId = id;
        }
        if (row && row.setAttribute) {
            row.setAttribute('data-hb-step-id', id);
        }
        return id;
    }

    function getStepHeaderId(stepRow) {
        if (!stepRow || !stepRow.getAttribute) return '';
        return collapseText(stepRow.getAttribute('data-hb-step-id') || '');
    }

    function bindRowToStepOwner(row, stepRow) {
        if (!row || !row.setAttribute || !stepRow) return '';
        var stepId = getStepHeaderId(stepRow);
        if (!stepId) return '';
        row.setAttribute('data-hb-step-owner', stepId);
        addClassName(row, 'hb-ai-step-owned');
        return stepId;
    }

    function countOwnedRowsForStep(stepRow) {
        if (!stepRow) return 0;
        var stepId = getStepHeaderId(stepRow);
        if (!stepId) return 0;
        var parent = stepRow.parentNode;
        if (!parent || !parent.childNodes) return 0;
        var count = 0;
        var i;
        for (i = 0; i < parent.childNodes.length; i++) {
            var row = parent.childNodes[i];
            if (!row || row.nodeType !== 1) continue;
            var owner = row.getAttribute ? collapseText(row.getAttribute('data-hb-step-owner') || '') : '';
            if (owner === stepId) count++;
        }
        return count;
    }

    function isStepExpandable(stepRow) {
        if (!stepRow) return false;
        var btns = stepRow.getElementsByTagName ? stepRow.getElementsByTagName('button') : [];
        var btn = btns && btns.length ? btns[0] : null;
        var hasInlineDetail = btn && btn.getAttribute && btn.getAttribute('data-hb-has-detail') === '1';
        return !!(hasInlineDetail || countOwnedRowsForStep(stepRow) > 0);
    }

    function refreshStepHeaderIndicator(stepRow) {
        if (!stepRow) return;
        var btns = stepRow.getElementsByTagName ? stepRow.getElementsByTagName('button') : [];
        var btn = btns && btns.length ? btns[0] : null;
        if (!btn) return;
        var icons = btn.getElementsByTagName ? btn.getElementsByTagName('span') : [];
        var icon = icons && icons.length ? icons[0] : null;
        if (!icon) return;

        var expandable = isStepExpandable(stepRow);
        if (!expandable) {
            icon.innerHTML = buildStepIconSvg('empty');
            btn.setAttribute('data-hb-expandable', '0');
            return;
        }

        btn.setAttribute('data-hb-expandable', '1');
        icon.innerHTML = buildStepIconSvg(isStepHeaderExpanded(stepRow) ? 'minus' : 'plus');
    }

    function findStepHeaderById(container, stepId) {
        var parent = container || messages;
        var targetId = collapseText(stepId || '');
        if (!parent || !parent.childNodes || !targetId) return null;
        for (var i = parent.childNodes.length - 1; i >= 0; i--) {
            var row = parent.childNodes[i];
            if (!row || row.nodeType !== 1) continue;
            if (!row.getAttribute || row.getAttribute('data-hb-step-header') !== '1') continue;
            if (collapseText(row.getAttribute('data-hb-step-id') || '') === targetId) return row;
        }
        return null;
    }

    function getOwningStepRowForMessage(container, meta) {
        var parent = container || messages;
        if (!parent) return null;
        var ownerId = collapseText(meta && meta.stepOwnerId ? meta.stepOwnerId : '');
        if (ownerId) {
            var ownerRow = findStepHeaderById(parent, ownerId);
            if (ownerRow) return ownerRow;
        }
        return findLastStepHeaderRow(parent);
    }

    function bindMessageToOwningStepIfNeeded(container, row, role, uiTone, meta) {
        if (!row || role !== 'system' || uiTone !== 'subtle') return;
        var ownerStepRow = getOwningStepRowForMessage(container, meta);
        if (!ownerStepRow) return;
        var ownerStepId = bindRowToStepOwner(row, ownerStepRow);
        if (!ownerStepId) return;
        if (meta && typeof meta === 'object') {
            meta.stepOwnerId = ownerStepId;
        }
        row.style.display = isStepHeaderExpanded(ownerStepRow) ? '' : 'none';
        refreshStepHeaderIndicator(ownerStepRow);
    }

    function rebindConversationStepOwners(conversation) {
        if (!conversation || !Array.isArray(conversation.messages)) return false;
        var currentStepId = '';
        var changed = false;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var msg = conversation.messages[i];
            if (!msg || typeof msg !== 'object') continue;
            var role = collapseText(msg.role || '').toLowerCase();
            var tone = collapseText(msg.uiTone || '').toLowerCase();
            var isProgressGroupHeader = (role === 'system' && toBooleanFlag(msg.progressGroupHeader));
            if (role === 'system' && (parseStepToggleMessage(msg.content || '') || isProgressGroupHeader)) {
                if (!!msg.progressGroupHeader !== isProgressGroupHeader) {
                    msg.progressGroupHeader = isProgressGroupHeader;
                    changed = true;
                }
                var stepId = collapseText(msg.stepGroupId || msg.id || '');
                if (!stepId) {
                    stepId = makeId();
                    msg.stepGroupId = stepId;
                    changed = true;
                }
                if (typeof msg.stepCollapsed !== 'boolean') {
                    msg.stepCollapsed = isProgressGroupHeader ? !!msg.progressGroupCollapsed : true;
                    changed = true;
                }
                if (isProgressGroupHeader) {
                    var normalizedGroupCollapsed = toBooleanFlag(msg.progressGroupCollapsed);
                    if (msg.progressGroupCollapsed !== normalizedGroupCollapsed) {
                        msg.progressGroupCollapsed = normalizedGroupCollapsed;
                        changed = true;
                    }
                    if (msg.stepCollapsed !== normalizedGroupCollapsed) {
                        msg.stepCollapsed = normalizedGroupCollapsed;
                        changed = true;
                    }
                }
                currentStepId = stepId;
                continue;
            }
            if (role === 'system' && tone === 'subtle') {
                var existingOwner = collapseText(msg.stepOwnerId || '');
                if (currentStepId) {
                    if (existingOwner !== currentStepId) {
                        msg.stepOwnerId = currentStepId;
                        changed = true;
                    }
                } else if (existingOwner) {
                    msg.stepOwnerId = '';
                    changed = true;
                }
            }
        }
        return changed;
    }

    function appendMessageRow(role, text, targetContainer, meta) {
        var container = targetContainer || messages;
        var row = document.createElement('div');
        row.className = 'hb-ai-msg ' + role;
        var uiTone = collapseText(meta && meta.uiTone ? meta.uiTone : '').toLowerCase();
        if (uiTone === 'subtle') row.className += ' hb-ai-msg-subtle';
        if (role === 'assistant') {
            var mdWrap = document.createElement('div');
            mdWrap.className = 'hb-ai-md';
            mdWrap.innerHTML = markdownToHtml(text);
            normalizeTopLevelOrderedLists(mdWrap);
            if (!mdWrap.innerHTML) {
                mdWrap.textContent = text;
            }
            highlightAssistantCodeBlocks(mdWrap);
            row.appendChild(mdWrap);

            var actions = document.createElement('div');
            actions.className = 'hb-ai-msg-actions';
            var insertBtn = document.createElement('button');
            insertBtn.type = 'button';
            insertBtn.className = 'hb-ai-msg-action-btn';
            insertBtn.textContent = tr('assistant.ui.insert_to_editor', 'Insert to Editor');
            insertBtn.addEventListener('click', function (e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                var result = tryInsertIntoPageEditor(text);
                pushSystemMessage(result.msg);
            });
            actions.appendChild(insertBtn);

            var copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'hb-ai-msg-action-btn hb-ai-msg-action-icon';
            copyBtn.title = tr('assistant.ui.copy', 'Copy');
            copyBtn.setAttribute('aria-label', tr('assistant.ui.copy', 'Copy'));
            copyBtn.innerHTML = '<span class="hb-ai-copy-icon" aria-hidden="true"></span>';
            copyBtn.addEventListener('click', function (e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                copyTextToClipboard(text).then(function (ok) {
                    if (ok) {
                        pushSystemMessage(tr('assistant.message.copy.success', 'Copied answer to clipboard.'));
                    } else {
                        pushSystemMessage(tr('assistant.message.copy.failed', 'Failed to copy to clipboard. Check browser permissions.'));
                    }
                });
            });
            actions.appendChild(copyBtn);

            var elapsedText = formatMessageElapsed(meta && meta.durationMs);
            if (elapsedText) {
                var metaRow = document.createElement('div');
                metaRow.className = 'hb-ai-msg-meta';
                metaRow.textContent = elapsedText;
                row.appendChild(metaRow);
            }
            row.appendChild(actions);
        } else {
            var isProgressGroupHeader = role === 'system'
                && meta
                && typeof meta === 'object'
                && meta.progressGroupHeader === true;
            if (isProgressGroupHeader) {
                row.setAttribute('data-hb-step-header', '1');
                resolveStepHeaderId(row, meta);
                var progressToggleBtn = document.createElement('button');
                progressToggleBtn.type = 'button';
                progressToggleBtn.className = 'hb-ai-step-toggle';
                progressToggleBtn.innerHTML = '<span class="hb-ai-step-icon" aria-hidden="true"></span><span></span>';
                var progressLabel = progressToggleBtn.getElementsByTagName('span')[1];
                if (progressLabel) progressLabel.textContent = text;
                progressToggleBtn.setAttribute('data-hb-has-detail', '0');
                var progressExpanded = true;
                if (meta && typeof meta === 'object' && (meta.progressGroupCollapsed === true || meta.stepCollapsed === true)) {
                    progressExpanded = false;
                }
                setStepToggleExpanded(progressToggleBtn, null, progressExpanded);
                progressToggleBtn.addEventListener('click', function () {
                    if (this.getAttribute && this.getAttribute('data-hb-expandable') === '0') {
                        return;
                    }
                    var nextExpanded = this.getAttribute('aria-expanded') !== 'true';
                    setStepToggleExpanded(this, null, nextExpanded);
                    setStepGroupRowsVisible(row, nextExpanded);
                    refreshStepHeaderIndicator(row);
                    if (meta && typeof meta === 'object') {
                        meta.progressGroupCollapsed = !nextExpanded;
                        meta.stepCollapsed = !nextExpanded;
                    }
                });
                row.appendChild(progressToggleBtn);
                refreshStepHeaderIndicator(row);
            } else {
                var collapsibleDetail = '';
                var collapsibleTitle = '';
                if (role === 'system' && meta && typeof meta === 'object') {
                    collapsibleDetail = normalizeProgressDetailText(meta.collapsibleDetail || '');
                    collapsibleTitle = collapseText(meta.collapsibleTitle || '');
                }
                if (collapsibleDetail) {
                    var inlineToggleBtn = document.createElement('button');
                    inlineToggleBtn.type = 'button';
                    inlineToggleBtn.className = 'hb-ai-step-toggle';
                    inlineToggleBtn.innerHTML = '<span class="hb-ai-step-icon" aria-hidden="true"></span><span></span>';
                    var inlineLabel = inlineToggleBtn.getElementsByTagName('span')[1];
                    if (inlineLabel) inlineLabel.textContent = collapsibleTitle || text;

                    var inlineDetailEl = document.createElement('div');
                    inlineDetailEl.className = 'hb-ai-step-detail';
                    inlineDetailEl.textContent = collapsibleDetail;

                    var inlineExpanded = !(meta && typeof meta === 'object' && meta.collapsibleCollapsed === true);
                    setStepToggleExpanded(inlineToggleBtn, inlineDetailEl, inlineExpanded);
                    var inlineIcon = inlineToggleBtn.getElementsByTagName('span')[0];
                    if (inlineIcon) inlineIcon.innerHTML = buildStepIconSvg(inlineExpanded ? 'minus' : 'plus');

                    inlineToggleBtn.addEventListener('click', function () {
                        var nextExpanded = this.getAttribute('aria-expanded') !== 'true';
                        setStepToggleExpanded(this, inlineDetailEl, nextExpanded);
                        if (inlineIcon) inlineIcon.innerHTML = buildStepIconSvg(nextExpanded ? 'minus' : 'plus');
                        if (meta && typeof meta === 'object') {
                            meta.collapsibleCollapsed = !nextExpanded;
                        }
                    });
                    row.appendChild(inlineToggleBtn);
                    row.appendChild(inlineDetailEl);
                    bindMessageToOwningStepIfNeeded(container, row, role, uiTone, meta);
                } else {
                    var stepInfo = role === 'system' ? parseStepToggleMessage(text) : null;
                    if (stepInfo) {
                        row.setAttribute('data-hb-step-header', '1');
                        resolveStepHeaderId(row, meta);
                        var toggleBtn = document.createElement('button');
                        toggleBtn.type = 'button';
                        toggleBtn.className = 'hb-ai-step-toggle';
                        toggleBtn.innerHTML = '<span class="hb-ai-step-icon" aria-hidden="true"></span><span></span>';
                        var toggleLabel = toggleBtn.getElementsByTagName('span')[1];
                        if (toggleLabel) toggleLabel.textContent = stepInfo.title;
                        toggleBtn.setAttribute('data-hb-has-detail', stepInfo.detail ? '1' : '0');

                        var detailEl = null;
                        if (stepInfo.detail) {
                            detailEl = document.createElement('div');
                            detailEl.className = 'hb-ai-step-detail';
                            detailEl.textContent = stepInfo.detail;
                        }

                        var expanded = true;
                        if (meta && typeof meta === 'object' && meta.stepCollapsed === true) {
                            expanded = false;
                        }
                        setStepToggleExpanded(toggleBtn, detailEl, expanded);
                        toggleBtn.addEventListener('click', function () {
                            if (this.getAttribute && this.getAttribute('data-hb-expandable') === '0') {
                                return;
                            }
                            var nextExpanded = this.getAttribute('aria-expanded') !== 'true';
                            setStepToggleExpanded(this, detailEl, nextExpanded);
                            setStepGroupRowsVisible(row, nextExpanded);
                            refreshStepHeaderIndicator(row);
                            if (meta && typeof meta === 'object') {
                                meta.stepCollapsed = !nextExpanded;
                            }
                        });
                        row.appendChild(toggleBtn);
                        if (detailEl) row.appendChild(detailEl);
                        refreshStepHeaderIndicator(row);
                    } else {
                        row.textContent = text;
                        bindMessageToOwningStepIfNeeded(container, row, role, uiTone, meta);
                    }
                }
            }
        }
        container.appendChild(row);
    }

    function scrollMessagesBottom() {
        messages.scrollTop = messages.scrollHeight;
    }

    function renderMessages() {
        messages.innerHTML = '';
        var fragment = document.createDocumentFragment ? document.createDocumentFragment() : null;
        var target = fragment || messages;
        var conversation = ensureConversation();
        var didRebindStepOwners = rebindConversationStepOwners(conversation);
        if (didRebindStepOwners) {
            saveConversations(true);
        }
        if (!conversation.messages.length) {
            appendMessageRow('system', tr('assistant.message.new_chat_started', 'A new conversation started. Enter your message.'), target);
            if (fragment) messages.appendChild(fragment);
            scrollMessagesBottom();
            return;
        }
        for (var i5 = 0; i5 < conversation.messages.length; i5++) {
            var message = conversation.messages[i5];
            appendMessageRow(message.role, message.content, target, message);
        }
        if (fragment) messages.appendChild(fragment);
        scrollMessagesBottom();
    }

    function pushSystemMessage(text) {
        appendMessageRow('system', text);
        scrollMessagesBottom();
    }

    function ensureConversationMessageIds(conversation) {
        if (!conversation || !conversation.messages || typeof conversation.messages.length !== 'number') return;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var msg = conversation.messages[i];
            if (!msg || typeof msg !== 'object') continue;
            var id = collapseText(msg.id || '');
            msg.id = id || makeId();
            msg.parentMessageId = collapseText(msg.parentMessageId || '');
        }
    }

    function findConversationMessageIndexById(conversation, messageId) {
        if (!conversation || !conversation.messages || typeof conversation.messages.length !== 'number') return -1;
        var targetId = collapseText(messageId || '');
        if (!targetId) return -1;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var msg = conversation.messages[i];
            if (!msg || typeof msg !== 'object') continue;
            if (collapseText(msg.id || '') === targetId) return i;
        }
        return -1;
    }

    function resolveConversationMessageInsertIndex(conversation, parentMessageId) {
        if (!conversation || !conversation.messages || typeof conversation.messages.length !== 'number') return 0;
        var parentId = collapseText(parentMessageId || '');
        if (!parentId) return conversation.messages.length;
        var parentIndex = findConversationMessageIndexById(conversation, parentId);
        if (parentIndex < 0) return conversation.messages.length;
        var idx = parentIndex + 1;
        while (idx < conversation.messages.length) {
            var row = conversation.messages[idx];
            if (!row || typeof row !== 'object') break;
            if (collapseText(row.parentMessageId || '') !== parentId) break;
            idx++;
        }
        return idx;
    }

    function normalizeSystemMessageTextForMerge(text) {
        return collapseText(String(text || '').replace(/\r\n?/g, '\n').trim()).toLowerCase();
    }

    function resolveSystemMessageCategoryKey(text) {
        var raw = String(text || '').replace(/\r\n?/g, '\n').trim();
        if (!raw) return '';
        var firstLine = raw.split('\n')[0] || '';
        var m = firstLine.match(/^\[([^\]]+)\]/);
        var label = collapseText(m && m[1] ? m[1] : '').toLowerCase();
        if (!label) return '';
        if (/(수집\s*예정|planned)/i.test(label)) return 'collection_planned';
        if (/(수집\s*결과|collection\s*result|result)/i.test(label)) return 'collection_result';
        if (/(자료\s*수집\s*상세|collection\s*detail|step)/i.test(label)) return 'collection_detail';
        return label;
    }

    function applyMergedSystemMessageMeta(target, incoming, incomingTone, incomingMergeKey) {
        if (!target || !incoming) return;
        target.content = incoming.content;
        target.ts = incoming.ts;
        target.uiTone = incomingTone === 'subtle' ? 'subtle' : '';
        target.mergeKey = incomingMergeKey || '';
        target.progressEphemeral = !!incoming.progressEphemeral;
        target.progressPulse = incoming.progressPulse === true;
        target.progressGroupHeader = incoming.progressGroupHeader === true;
        target.progressGroupCollapsed = incoming.progressGroupCollapsed === true;
        target.collapsibleTitle = collapseText(incoming.collapsibleTitle || '');
        target.collapsibleDetail = normalizeProgressDetailText(incoming.collapsibleDetail || '');
        target.collapsibleCollapsed = incoming.collapsibleCollapsed === true;
    }

    function pruneConversationProgressPulseMessages(conversation) {
        if (!conversation || !Array.isArray(conversation.messages) || !conversation.messages.length) return 0;
        var kept = [];
        var removed = 0;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var row = conversation.messages[i];
            if (!row || typeof row !== 'object') continue;
            var role = collapseText(row.role || '').toLowerCase();
            if (role === 'system' && row.progressPulse === true) {
                removed++;
                continue;
            }
            kept.push(row);
        }
        if (!removed) return 0;
        conversation.messages = kept;
        return removed;
    }

    function clearConversationProgressPulseMessages(conversationId) {
        var targetId = conversationId ? String(conversationId) : '';
        if (!targetId) return 0;
        var conversation = getConversationById(targetId);
        if (!conversation || !Array.isArray(conversation.messages) || !conversation.messages.length) return 0;
        var removed = pruneConversationProgressPulseMessages(conversation);
        if (!removed) return 0;
        conversation.updatedAt = now();
        conversation.title = deriveConversationTitle(conversation);
        saveConversations(true);
        renderHistoryList();
        if (conversation.id === state.activeConversationId) {
            renderMessages();
        }
        return removed;
    }

    function tryMergeSystemMessage(conversation, incoming) {
        if (!conversation || !incoming || typeof incoming !== 'object') return null;
        if (incoming.role !== 'system') return null;
        var incomingTone = collapseText(incoming.uiTone || '').toLowerCase();
        var incomingMergeKey = collapseText(incoming.mergeKey || '').toLowerCase();

        var list = Array.isArray(conversation.messages) ? conversation.messages : [];
        if (!list.length) return null;
        var incomingText = normalizeSystemMessageTextForMerge(incoming.content || '');
        if (!incomingText) return null;
        var incomingCategory = resolveSystemMessageCategoryKey(incoming.content || '');

        if (incomingMergeKey) {
            var lastIndex = list.length - 1;
            var last = list[lastIndex];
            if (!last || typeof last !== 'object') return null;
            if (last.role !== 'system') return null;
            var lastMergeKey = collapseText(last.mergeKey || '').toLowerCase();
            if (!lastMergeKey || lastMergeKey !== incomingMergeKey) return null;
            applyMergedSystemMessageMeta(last, incoming, incomingTone, incomingMergeKey);
            return { index: lastIndex, messageId: collapseText(last.id || '') || incoming.id };
        }

        var i;
        for (i = list.length - 1; i >= 0; i--) {
            var prev = list[i];
            if (!prev || typeof prev !== 'object') continue;

            if (prev.role === 'assistant' || prev.role === 'user') {
                break;
            }
            if (prev.role !== 'system') continue;

            if (incomingTone === 'subtle') return null;
            if (collapseText(prev.uiTone || '').toLowerCase() === 'subtle') continue;

            var prevText = normalizeSystemMessageTextForMerge(prev.content || '');
            if (prevText && prevText === incomingText) {
                applyMergedSystemMessageMeta(prev, incoming, incomingTone, incomingMergeKey);
                return { index: i, messageId: collapseText(prev.id || '') || incoming.id };
            }

            var prevCategory = resolveSystemMessageCategoryKey(prev.content || '');
            if (incomingCategory && prevCategory && incomingCategory === prevCategory) {
                applyMergedSystemMessageMeta(prev, incoming, incomingTone, incomingMergeKey);
                return { index: i, messageId: collapseText(prev.id || '') || incoming.id };
            }
        }
        return null;
    }

    function addConversationMessage(role, text, conversationId, options) {
        var targetId = conversationId ? String(conversationId) : '';
        var conversation = targetId ? getConversationById(targetId) : null;
        if (!conversation) {
            conversation = ensureConversation();
        }
        ensureConversationMessageIds(conversation);

        var opts = options && typeof options === 'object' ? options : {};
        var message = {
            id: collapseText(opts.messageId || '') || makeId(),
            role: role,
            content: text,
            ts: now(),
            parentMessageId: collapseText(opts.parentMessageId || ''),
            durationMs: parseInt(opts.durationMs, 10) || 0,
            aiMeta: sanitizeMessageAiMeta(opts.aiMeta),
            uiTone: collapseText(opts.uiTone || '').toLowerCase() === 'subtle' ? 'subtle' : '',
            mergeKey: collapseText(opts.mergeKey || '').toLowerCase(),
            progressEphemeral: !!opts.progressEphemeral,
            progressPulse: opts.progressPulse === true,
            progressGroupHeader: opts.progressGroupHeader === true,
            progressGroupCollapsed: opts.progressGroupCollapsed === true,
            collapsibleTitle: collapseText(opts.collapsibleTitle || ''),
            collapsibleDetail: normalizeProgressDetailText(opts.collapsibleDetail || ''),
            collapsibleCollapsed: opts.collapsibleCollapsed === true
        };
        var skipRemoteSyncForMessage = !!message.progressEphemeral;
        var removedProgressPulseCount = 0;
        if (opts.clearProgressPulse === true && message.progressPulse !== true) {
            removedProgressPulseCount = pruneConversationProgressPulseMessages(conversation);
        }

        var mergedSystem = tryMergeSystemMessage(conversation, message);
        if (mergedSystem) {
            conversation.updatedAt = now();
            conversation.title = deriveConversationTitle(conversation);
            saveConversations(skipRemoteSyncForMessage);
            renderHistoryList();
            if (conversation.id === state.activeConversationId) {
                renderMessages();
            }
            return {
                conversationId: conversation.id,
                messageId: mergedSystem.messageId,
                index: mergedSystem.index
            };
        }

        var insertIndex = resolveConversationMessageInsertIndex(conversation, message.parentMessageId);
        var appendedToTail = insertIndex >= conversation.messages.length;
        if (appendedToTail) {
            conversation.messages.push(message);
        } else {
            conversation.messages.splice(insertIndex, 0, message);
        }

        var didTrim = false;
        if (conversation.messages.length > MAX_MESSAGES_PER_CONVERSATION) {
            var overflow = conversation.messages.length - MAX_MESSAGES_PER_CONVERSATION;
            if (overflow > 0) {
                foldConversationMessagesIntoSummary(conversation, conversation.messages.slice(0, overflow));
                conversation.messages = conversation.messages.slice(overflow);
                insertIndex = insertIndex - overflow;
                if (insertIndex < 0) insertIndex = 0;
                didTrim = true;
            }
        }
        conversation.updatedAt = now();
        conversation.title = deriveConversationTitle(conversation);
        saveConversations(skipRemoteSyncForMessage);
        renderHistoryList();
        if (conversation.id === state.activeConversationId) {
            if (appendedToTail && !didTrim && removedProgressPulseCount < 1) {
                appendMessageRow(role, text, null, message);
                scrollMessagesBottom();
            } else {
                renderMessages();
            }
        }
        return {
            conversationId: conversation.id,
            messageId: message.id,
            index: insertIndex
        };
    }

    function clearEphemeralProgressMessages(conversationId) {
        if (KEEP_EPHEMERAL_PROGRESS_MESSAGES) {
            return 0;
        }
        var targetId = conversationId ? String(conversationId) : '';
        if (!targetId) return 0;
        var conversation = getConversationById(targetId);
        if (!conversation || !Array.isArray(conversation.messages) || !conversation.messages.length) return 0;

        var kept = [];
        var removed = 0;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var row = conversation.messages[i];
            if (!row || typeof row !== 'object') continue;
            var role = collapseText(row.role || '').toLowerCase();
            if (role === 'system' && !!row.progressEphemeral) {
                removed++;
                continue;
            }
            kept.push(row);
        }
        if (!removed) return 0;

        conversation.messages = kept;
        conversation.updatedAt = now();
        conversation.title = deriveConversationTitle(conversation);
        saveConversations(true);
        renderHistoryList();
        if (conversation.id === state.activeConversationId) {
            renderMessages();
        }
        return removed;
    }

    function collapseConversationStepMessages(conversationId) {
        var targetId = conversationId ? String(conversationId) : '';
        if (!targetId) return 0;
        var conversation = getConversationById(targetId);
        if (!conversation || !Array.isArray(conversation.messages) || !conversation.messages.length) return 0;

        var changed = 0;
        var i;
        for (i = 0; i < conversation.messages.length; i++) {
            var row = conversation.messages[i];
            if (!row || typeof row !== 'object') continue;
            if (collapseText(row.role || '').toLowerCase() !== 'system') continue;
            var isStepHeader = !!parseStepToggleMessage(row.content || '');
            var isProgressHeader = toBooleanFlag(row.progressGroupHeader);
            if (!isStepHeader && !isProgressHeader) continue;
            var didChange = false;
            if (row.stepCollapsed !== true) {
                row.stepCollapsed = true;
                didChange = true;
            }
            if (isProgressHeader && row.progressGroupCollapsed !== true) {
                row.progressGroupCollapsed = true;
                didChange = true;
            }
            if (!didChange) continue;
            changed++;
        }
        if (!changed) return 0;

        conversation.updatedAt = now();
        saveConversations(true);
        if (conversation.id === state.activeConversationId) {
            renderMessages();
        }
        return changed;
    }

    function formatRelativeTime(ts) {
        var value = parseInt(ts, 10);
        if (!value) return '-';
        var diff = now() - value;
        if (diff < 60000) return tr('assistant.ui.time.just_now', 'just now');
        var mins = Math.floor(diff / 60000);
        if (mins < 60) return trff('assistant.ui.time.minutes_ago', '{count}m ago', { count: mins });
        var hours = Math.floor(mins / 60);
        if (hours < 24) return trff('assistant.ui.time.hours_ago', '{count}h ago', { count: hours });
        var days = Math.floor(hours / 24);
        if (days < 7) return trff('assistant.ui.time.days_ago', '{count}d ago', { count: days });
        var d = new Date(value);
        var yyyy = d.getFullYear();
        var mm = ('0' + (d.getMonth() + 1)).slice(-2);
        var dd = ('0' + d.getDate()).slice(-2);
        return yyyy + '-' + mm + '-' + dd;
    }

    function conversationSnippet(conversation) {
        if (!conversation || !conversation.messages || !conversation.messages.length) return '';
        for (var i6 = conversation.messages.length - 1; i6 >= 0; i6--) {
            var msg = conversation.messages[i6];
            if (msg.role === 'user' || msg.role === 'assistant') {
                return truncateText(msg.content, 40);
            }
        }
        return '';
    }

    function matchesHistoryKeyword(conversation) {
        var keyword = collapseText(state.historyKeyword).toLowerCase();
        if (!keyword) return true;
        if (collapseText(conversation.title).toLowerCase().indexOf(keyword) >= 0) return true;
        var snippet = conversationSnippet(conversation).toLowerCase();
        return snippet.indexOf(keyword) >= 0;
    }

    function renderHistoryList() {
        historyList.innerHTML = '';
        var hasRow = false;
        var fragment = document.createDocumentFragment ? document.createDocumentFragment() : null;
        var target = fragment || historyList;

        sortConversations();
        for (var i8 = 0; i8 < state.conversations.length; i8++) {
            var conversation = state.conversations[i8];
            if (!isPersistableConversation(conversation)) continue;
            if (!matchesHistoryKeyword(conversation)) continue;
            hasRow = true;

            var item = document.createElement('div');
            item.className = 'hb-ai-history-item' + (conversation.id === state.activeConversationId ? ' active' : '');
            item.setAttribute('data-id', conversation.id);

            var line = document.createElement('div');
            line.className = 'hb-ai-history-line';

            var t = document.createElement('div');
            t.className = 'hb-ai-history-title';
            t.textContent = conversation.title || tr('assistant.ui.new_chat', 'New Chat');

            var tm = document.createElement('div');
            tm.className = 'hb-ai-history-time';
            tm.textContent = formatRelativeTime(conversation.updatedAt);

            var meta = document.createElement('div');
            meta.className = 'hb-ai-history-meta';
            meta.appendChild(tm);

            var delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'hb-ai-history-delete';
            delBtn.textContent = 'x';
            delBtn.title = tr('assistant.ui.delete', 'Delete');
            delBtn.setAttribute('data-id', conversation.id);
            delBtn.addEventListener('click', function (e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                deleteConversation(this.getAttribute('data-id') || '');
            });
            meta.appendChild(delBtn);

            line.appendChild(t);
            line.appendChild(meta);

            var sub = document.createElement('div');
            sub.className = 'hb-ai-history-sub';
            sub.textContent = conversationSnippet(conversation);

            item.appendChild(line);
            item.appendChild(sub);

            item.addEventListener('click', function () {
                var id = this.getAttribute('data-id');
                setActiveConversation(id);
                toggleHistoryPane(false);
            });

            target.appendChild(item);
        }

        if (!hasRow) {
            var empty = document.createElement('div');
            empty.className = 'hb-ai-history-empty';
            empty.textContent = tr('assistant.ui.history.empty', 'No conversations to display.');
            target.appendChild(empty);
        }
        if (fragment) historyList.appendChild(fragment);
    }

    function updateReasoningVisibility() {
        updateReasoningSelectForModel();
    }

    function refreshProviderButton() {
        var providerId = ensureSelectedProvider();
        if (!providerId) {
            providerBtn.disabled = true;
            providerBtn.title = tr('assistant.ui.provider', 'Provider');
            providerBtn.setAttribute('aria-label', tr('assistant.ui.provider', 'Provider'));
            return;
        }
        providerBtn.disabled = false;
        var label = providerFamilyLabel(providerId);
        providerBtn.title = label;
        providerBtn.setAttribute('aria-label', label);
    }

    function renderProviderMenu() {
        providerMenu.innerHTML = '';
        var providers = connectedProviderIds();
        if (!providers.length) {
            var empty = document.createElement('div');
            empty.className = 'hb-ai-provider-empty';
            empty.textContent = tr('assistant.ui.status.connect_required', 'requires connection');
            providerMenu.appendChild(empty);
            return;
        }
        var companyProviders = [];
        var personalProviders = [];
        var i;
        for (i = 0; i < providers.length; i++) {
            if (isCompanyProviderFamily(providers[i])) companyProviders.push(providers[i]);
            else personalProviders.push(providers[i]);
        }

        function appendProviderButton(providerId) {
            var item = document.createElement('button');
            item.type = 'button';
            item.className = 'hb-ai-provider-item' + (providerId === state.selectedProviderId ? ' active' : '');
            item.setAttribute('data-provider', providerId);
            item.textContent = providerFamilyLabel(providerId);
            item.addEventListener('click', function () {
                var pid = this.getAttribute('data-provider') || '';
                state.selectedProviderId = pid;
                closeProviderMenu();
                populateModelSelect();
                var convo = ensureConversation();
                if (convo) {
                    convo.modelKey = modelSelect.value || '';
                    convo.updatedAt = now();
                    saveConversations();
                    renderHistoryList();
                }
                refreshUsageStatusForSelectedProvider(true);
                updateConnectionUi();
            });
            providerMenu.appendChild(item);
        }

        for (i = 0; i < companyProviders.length; i++) {
            appendProviderButton(companyProviders[i]);
        }
        if (companyProviders.length && personalProviders.length) {
            var divider = document.createElement('div');
            divider.className = 'hb-ai-provider-divider';
            providerMenu.appendChild(divider);
        }
        for (i = 0; i < personalProviders.length; i++) {
            appendProviderButton(personalProviders[i]);
        }
    }

    function closeProviderMenu() {
        providerMenu.className = 'hb-ai-provider-menu';
    }

    function toggleProviderMenu(forceOpen) {
        var shouldOpen = typeof forceOpen === 'boolean'
            ? forceOpen
            : providerMenu.className.indexOf('open') < 0;
        if (!shouldOpen) {
            closeProviderMenu();
            return;
        }
        renderProviderMenu();
        providerMenu.className = 'hb-ai-provider-menu open';
    }

    function hasModelKey(list, key) {
        if (!key || !list || !list.length) return false;
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] && list[i].key === key) return true;
        }
        return false;
    }

    function populateModelSelect() {
        var current = modelSelect.value || '';
        var visible = visibleModelOptions();
        modelSelect.innerHTML = '';

        for (var i9 = 0; i9 < visible.length; i9++) {
            var modelOption = visible[i9];
            var el = document.createElement('option');
            el.value = modelOption.key;
            var optionLabel = modelOption.label;
            el.textContent = truncateText(optionLabel, 34);
            el.title = optionLabel;
            modelSelect.appendChild(el);
        }

        var active = getConversationById(state.activeConversationId);
        if (!active && state.conversations.length > 0) {
            active = state.conversations[0];
        }
        var activeKey = active && active.modelKey ? active.modelKey : '';
        if (activeKey && hasModelKey(visible, activeKey)) {
            modelSelect.value = activeKey;
        } else if (current && hasModelKey(visible, current)) {
            modelSelect.value = current;
        } else if (visible.length) {
            modelSelect.value = visible[0].key;
        } else {
            modelSelect.value = '';
        }

        refreshProviderButton();
        updateReasoningVisibility();
        updateModelSelectTooltip();
        renderUsageQuotaStatus();
    }

    function updateModelSelectTooltip() {
        var selected = selectedModelOption();
        if (!selected) {
            modelSelect.title = '';
            return;
        }
        modelSelect.title = selected.label || '';
    }

    function currentRecallConversationKey() {
        return requestConversationKey(state.activeConversationId || '');
    }

    function resetInputRecallState() {
        if (!state.inputRecall || typeof state.inputRecall !== 'object') {
            state.inputRecall = { conversationKey: '', index: -1, draft: '' };
        }
        state.inputRecall.conversationKey = currentRecallConversationKey();
        state.inputRecall.index = -1;
        state.inputRecall.draft = String((input && input.value) || '');
    }

    function conversationUserInputHistory(conversationId) {
        var conversation = getConversationById(conversationId);
        if (!conversation || !Array.isArray(conversation.messages)) return [];

        var history = [];
        var i;
        for (i = conversation.messages.length - 1; i >= 0; i--) {
            var msg = conversation.messages[i];
            if (!msg || msg.role !== 'user') continue;
            var text = String(msg.content || '').replace(/\r\n?/g, '\n').trim();
            if (!text) continue;
            history.push(text);
        }
        return history;
    }

    function placeInputCaretToEnd() {
        if (!input || typeof input.focus !== 'function') return;
        var value = String(input.value || '');
        input.focus();
        if (typeof input.setSelectionRange === 'function') {
            try {
                input.setSelectionRange(value.length, value.length);
            } catch (e) {
                // ignore selection errors
            }
        }
    }

    function applyInputRecallValue(value) {
        state.inputRecallApplying = true;
        input.value = String(value || '');
        placeInputCaretToEnd();
        updateAttachHintVisibility();
        state.inputRecallApplying = false;
    }

    function updateAttachHintVisibility() {
        var hasText = collapseText(String(input && input.value ? input.value : '')) !== '';
        updateSendButtonState();
        if (!inputWrap || !inputWrap.className) return;
        if (hasText) addClassName(inputWrap, 'hb-ai-hint-hidden');
        else removeClassName(inputWrap, 'hb-ai-hint-hidden');
    }

    function navigateInputRecall(direction) {
        if (!input) return false;
        var conversation = ensureConversation();
        var conversationId = conversation && conversation.id ? conversation.id : '';
        if (!conversationId) return false;

        var key = requestConversationKey(conversationId);
        if (!state.inputRecall || state.inputRecall.conversationKey !== key) {
            resetInputRecallState();
        }

        var history = conversationUserInputHistory(conversationId);
        if (!history.length) return false;

        if (direction < 0) {
            if (state.inputRecall.index < 0) {
                state.inputRecall.draft = String(input.value || '');
                state.inputRecall.index = 0;
            } else if (state.inputRecall.index < history.length - 1) {
                state.inputRecall.index += 1;
            } else {
                return true;
            }
            applyInputRecallValue(history[state.inputRecall.index] || '');
            return true;
        }

        if (direction > 0) {
            if (state.inputRecall.index < 0) return false;
            if (state.inputRecall.index === 0) {
                state.inputRecall.index = -1;
                applyInputRecallValue(state.inputRecall.draft || '');
                return true;
            }
            state.inputRecall.index -= 1;
            applyInputRecallValue(history[state.inputRecall.index] || '');
            return true;
        }

        return false;
    }

    function setActiveConversation(id) {
        var conversation = getConversationById(id);
        if (!conversation) return;
        state.activeConversationId = conversation.id;
        var conversationOption = findModelOption(conversation.modelKey || '');
        if (conversationOption && conversationOption.provider) {
            state.selectedProviderId = providerFamilyKey(conversationOption.provider);
        }
        populateModelSelect();
        if (conversation.modelKey && findModelOption(conversation.modelKey)) {
            modelSelect.value = conversation.modelKey;
        }
        resetInputRecallState();
        updateReasoningVisibility();
        renderMessages();
        renderHistoryList();
        renderRequestQueue();
        updateModelSelectTooltip();
        updateStopButtonState();
        refreshUsageStatusForSelectedProvider(false);
        updateConnectionUi();
    }

    function removeConversationLocal(id) {
        var targetId = (id || '').toString();
        if (!targetId) return false;
        interruptActiveRequest('', targetId);

        var next = [];
        var removed = false;
        var i;
        for (i = 0; i < state.conversations.length; i++) {
            var row = state.conversations[i];
            if (!row) continue;
            if (row.id === targetId) {
                removed = true;
                continue;
            }
            next.push(row);
        }
        if (!removed) return false;

        state.conversations = next;
        var queueNext = [];
        for (i = 0; i < state.requestQueue.length; i++) {
            if (!state.requestQueue[i]) continue;
            if (state.requestQueue[i].conversationId === targetId) continue;
            queueNext.push(state.requestQueue[i]);
        }
        state.requestQueue = queueNext;
        renderRequestQueue();
        if (!state.conversations.length) {
            var created = createConversation(modelSelect.value || defaultModelKey());
            state.activeConversationId = created.id;
            saveConversations();
            renderMessages();
            renderHistoryList();
            updateStopButtonState();
            updateModelSelectTooltip();
            updateConnectionUi();
            return true;
        }

        if (!getConversationById(state.activeConversationId)) {
            state.activeConversationId = state.conversations[0].id;
        }
        saveConversations();
        renderHistoryList();
        setActiveConversation(state.activeConversationId);
        return true;
    }

    function deleteConversation(id) {
        var targetId = (id || '').toString();
        if (!targetId) return;
        if (!window.confirm(tr('assistant.confirm.delete_conversation', 'Delete this conversation?'))) return;
        if (!removeConversationLocal(targetId)) return;

        if (!window.fetch || !state.assistantEnabled) return;
        fetch(apiBase + 'conversations_delete', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: targetId })
        }).catch(function () {
            // best-effort sync only
        });
    }

    function newConversation() {
        var conversation = createConversation(modelSelect.value || defaultModelKey());
        state.activeConversationId = conversation.id;
        clearPendingAttachments();
        resetInputRecallState();
        renderMessages();
        renderHistoryList();
        renderRequestQueue();
        updateStopButtonState();
        updateModelSelectTooltip();
        refreshUsageStatusForSelectedProvider(false);
        updateConnectionUi();
        setTimeout(function () { input.focus(); }, 0);
    }

    function toggleHistoryPane(forceOpen) {
        var shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : historyPane.className.indexOf('open') < 0;
        if (shouldOpen) {
            historyPane.className = 'hb-ai-history-pane open';
            renderHistoryList();
            setTimeout(function () { historySearch.focus(); }, 0);
        } else {
            historyPane.className = 'hb-ai-history-pane';
        }
    }

    function toggleSettings(forceOpen) {
        if (state.personalAiAllowed === false) {
            settingsMenu.className = 'hb-ai-settings-menu';
            settingsFlow.className = 'hb-ai-settings-flow';
            return;
        }
        var shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : settingsMenu.className.indexOf('open') < 0;
        settingsMenu.className = shouldOpen ? 'hb-ai-settings-menu open' : 'hb-ai-settings-menu';
        if (shouldOpen) {
            populateSettingsProviderSelect();
            updateConnectionUi();
        } else {
            settingsFlow.className = 'hb-ai-settings-flow';
        }
    }

    function toggleSettingsFlow(forceOpen) {
        if (state.personalAiAllowed === false) {
            settingsFlow.className = 'hb-ai-settings-flow';
            return;
        }
        var shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : settingsFlow.className.indexOf('open') < 0;
        settingsFlow.className = shouldOpen ? 'hb-ai-settings-flow open' : 'hb-ai-settings-flow';
        if (shouldOpen) {
            populateSettingsProviderSelect();
            updateConnectionUi();
        }
    }

    function getPageContext() {
        try {
            var text = document.body ? (document.body.innerText || '') : '';
            text = text.replace(/\s+/g, ' ').trim();
            return text.length > 6000 ? text.substring(0, 6000) : text;
        } catch (e) {
            return '';
        }
    }

    function resolveActionPlanRequestLang() {
        var lang = normalizeAssistantLang(state.i18nLang || '');
        if (lang) return lang;
        return resolveAssistantLangCode();
    }

    function getMenuContextDefinitions() {
        return [
            { key: 'approval', label: 'Approval (전자결재)', aliases: ['전자결재', '결재', 'approval'] },
            { key: 'report', label: 'Report (업무보고)', aliases: ['업무보고', '업무 보고', '보고서', 'report'] },
            { key: 'schedule', label: 'Schedule (일정)', aliases: ['일정', '캘린더', 'calendar', '스케줄'] },
            { key: 'project', label: 'Project (프로젝트)', aliases: ['프로젝트', 'project'] },
            { key: 'board', label: 'Board (게시판)', aliases: ['게시판', 'board'] },
            { key: 'todo', label: 'Todo (할일)', aliases: ['todo', 'to-do', 'to do', '할일', '할 일'] },
            { key: 'circular', label: 'Circular (회람판)', aliases: ['회람판', '회람', 'circular'] },
            { key: 'whisper', label: 'Whisper (쪽지)', aliases: ['쪽지', '메모', 'whisper', '위스퍼'] },
            { key: 'addrbook', label: 'AddressBook (주소록)', aliases: ['주소록', '연락처', 'contact', 'addrbook'] },
            { key: 'helpdesk', label: 'Helpdesk (헬프데스크)', aliases: ['헬프데스크', 'helpdesk', 'support ticket', '지원티켓', '고객지원티켓'] }
        ];
    }

    function buildActionPlanMenuCatalogPayload() {
        var defs = getMenuContextDefinitions();
        var map = {};
        var orderedKeys = [];
        var i;

        function ensureMenuEntry(key, label, aliases, defaultSource) {
            var menuKey = sanitizeActionPlanMenuKey(key, []);
            if (!menuKey) return;
            if (!map[menuKey]) {
                map[menuKey] = {
                    key: menuKey,
                    label: collapseText(label || menuKey),
                    aliases: [],
                    default_source: normalizeActionPlanSource(defaultSource || 'browser_ajax', 'browser_ajax')
                };
                orderedKeys.push(menuKey);
            }
            var list = Array.isArray(aliases) ? aliases : [];
            var j;
            for (j = 0; j < list.length; j++) {
                var alias = collapseText(list[j] || '');
                if (!alias) continue;
                if (map[menuKey].aliases.indexOf(alias) >= 0) continue;
                map[menuKey].aliases.push(alias);
            }
        }

        for (i = 0; i < defs.length; i++) {
            var def = defs[i] || {};
            ensureMenuEntry(def.key || '', def.label || def.key || '', def.aliases || [], 'browser_ajax');
        }

        ensureMenuEntry('diary', 'Worklog (업무일지)', ['업무일지', '업무 일지', '일지', 'worklog', 'daily log'], state.mcpToolLoopEnabled ? 'mcp' : 'browser_ajax');
        ensureMenuEntry('mail', 'Mail (메일)', ['메일', '이메일', 'mail', 'email'], 'browser_ajax');
        ensureMenuEntry('customer', 'Customer (고객관리)', ['고객', '고객관리', 'customer', 'crm', 'account'], 'browser_ajax');
        ensureMenuEntry('external', 'External Web (외부웹)', ['외부', '웹', '인터넷', '뉴스', '환율', '주가', 'external', 'web'], 'server_external');
        ensureMenuEntry('workreport', 'Work Report (업무보고)', ['work report', 'workreport'], 'browser_ajax');

        var menus = [];
        for (i = 0; i < orderedKeys.length; i++) {
            menus.push(map[orderedKeys[i]]);
        }
        return {
            menus: menus,
            map: map,
            keys: orderedKeys.slice(0)
        };
    }

    function buildBrowserToolsPayload() {
        var catalog = buildActionPlanMenuCatalogPayload();
        var menus = (catalog && Array.isArray(catalog.menus)) ? catalog.menus : [];
        var tools = [];
        var i;
        var j;
        var defaultOperations = ['search', 'view', 'summary'];
        for (i = 0; i < menus.length; i++) {
            var row = menus[i] || {};
            var menuKey = sanitizeActionPlanMenuKey(row.key || row.menu_key || '', []);
            if (!menuKey) continue;
            if (menuKey === 'diary') continue;
            var source = normalizeActionPlanSource(row.default_source || row.source || 'browser_ajax', 'browser_ajax');
            var aliases = Array.isArray(row.aliases) ? row.aliases.slice(0) : [];
            var operations = Array.isArray(row.operations) && row.operations.length
                ? row.operations.slice(0)
                : defaultOperations.slice(0);
            for (j = 0; j < operations.length; j++) {
                var op = sanitizeActionPlanOperation(operations[j] || '');
                var toolName = 'browser.' + menuKey + '.' + op;
                tools.push({
                    name: toolName,
                    menu_key: menuKey,
                    operation: op,
                    label: collapseText(row.label || menuKey),
                    description: collapseText((row.label || menuKey) + ' / ' + op),
                    aliases: aliases.slice(0),
                    source: source,
                    operations: [op],
                    input_schema: {
                        type: 'object',
                        properties: {
                            keyword: { type: 'string' },
                            query: { type: 'string' },
                            need_detail: { type: 'boolean' },
                            latest: { type: 'boolean' },
                            limit: { type: 'number' }
                        }
                    }
                });
            }
        }
        return tools;
    }

    function buildIntentFromActionPlan(actions, fallbackIntent) {
        var intent = {
            worklog: false,
            mail: false,
            customer: false,
            workReport: false,
            external: false,
            menuKey: '',
            menuKeys: [],
            menuHints: {},
            actionParams: {},
            worklogParams: null,
            mailParams: null,
            customerParams: null,
            externalParams: null,
            keyword: '',
            needDetail: false,
            confidence: 0,
            source: 'action_plan'
        };
        if (fallbackIntent && typeof fallbackIntent === 'object') {
            intent.worklog = !!fallbackIntent.worklog;
            intent.mail = !!fallbackIntent.mail;
            intent.customer = !!fallbackIntent.customer;
            intent.workReport = !!fallbackIntent.workReport;
            intent.external = !!fallbackIntent.external;
            intent.menuKey = collapseText(fallbackIntent.menuKey || '');
            intent.menuKeys = Array.isArray(fallbackIntent.menuKeys) ? fallbackIntent.menuKeys.slice(0) : [];
            intent.menuHints = (fallbackIntent.menuHints && typeof fallbackIntent.menuHints === 'object')
                ? fallbackIntent.menuHints
                : {};
            intent.actionParams = (fallbackIntent.actionParams && typeof fallbackIntent.actionParams === 'object')
                ? fallbackIntent.actionParams
                : {};
            intent.worklogParams = (fallbackIntent.worklogParams && typeof fallbackIntent.worklogParams === 'object')
                ? fallbackIntent.worklogParams
                : null;
            intent.mailParams = (fallbackIntent.mailParams && typeof fallbackIntent.mailParams === 'object')
                ? fallbackIntent.mailParams
                : null;
            intent.customerParams = (fallbackIntent.customerParams && typeof fallbackIntent.customerParams === 'object')
                ? fallbackIntent.customerParams
                : null;
            intent.externalParams = (fallbackIntent.externalParams && typeof fallbackIntent.externalParams === 'object')
                ? fallbackIntent.externalParams
                : null;
            intent.keyword = sanitizeIntentKeyword(fallbackIntent.keyword || '', 120);
            intent.needDetail = !!fallbackIntent.needDetail;
            var rawConfidence = parseFloat(fallbackIntent.confidence);
            if (!isNaN(rawConfidence)) intent.confidence = rawConfidence;
            if (fallbackIntent.source) intent.source = collapseText(fallbackIntent.source);
        }

        var rows = Array.isArray(actions) ? actions : [];
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var menuKey = collapseText(row.menu_key || row.menuKey || '').toLowerCase();
            var op = sanitizeActionPlanOperation(row.operation || row.op || '');
            var params = (row.params && typeof row.params === 'object' && !Array.isArray(row.params)) ? row.params : {};
            if (!menuKey) continue;
            if (intent.menuKeys.indexOf(menuKey) < 0 && (menuKey === 'helpdesk' || menuKey === 'approval' || menuKey === 'todo' || menuKey === 'circular' || menuKey === 'whisper' || menuKey === 'report' || menuKey === 'schedule' || menuKey === 'project' || menuKey === 'board' || menuKey === 'addrbook')) {
                intent.menuKeys.push(menuKey);
            }
            if (!intent.menuHints[menuKey]) {
                intent.menuHints[menuKey] = { keyword: '', needDetail: false };
            }
            if (!intent.actionParams[menuKey] || typeof intent.actionParams[menuKey] !== 'object') {
                intent.actionParams[menuKey] = {};
            }
            var paramKey;
            for (paramKey in params) {
                if (!Object.prototype.hasOwnProperty.call(params, paramKey)) continue;
                intent.actionParams[menuKey][paramKey] = params[paramKey];
            }
            if (params.keyword) {
                var menuKeyword = sanitizeIntentKeyword(params.keyword, 120);
                if (menuKeyword && !intent.menuHints[menuKey].keyword) {
                    intent.menuHints[menuKey].keyword = menuKeyword;
                }
            }
            if (op === 'view' || toBooleanFlag(params.need_detail)) {
                intent.menuHints[menuKey].needDetail = true;
            }
            if (menuKey === 'diary') intent.worklog = true;
            if (menuKey === 'mail') intent.mail = true;
            if (menuKey === 'customer') intent.customer = true;
            if (menuKey === 'external') intent.external = true;
            if (menuKey === 'workreport' || menuKey === 'report') intent.workReport = true;
            if (menuKey === 'diary' && !intent.worklogParams) {
                intent.worklogParams = intent.actionParams[menuKey];
            }
            if (menuKey === 'mail' && !intent.mailParams) {
                intent.mailParams = intent.actionParams[menuKey];
            }
            if (menuKey === 'customer' && !intent.customerParams) {
                intent.customerParams = intent.actionParams[menuKey];
            }
            if (menuKey === 'external' && !intent.externalParams) {
                intent.externalParams = intent.actionParams[menuKey];
            }
            if (!intent.menuKey && intent.menuKeys.indexOf(menuKey) >= 0) {
                intent.menuKey = menuKey;
            }
            if (!intent.keyword && params.keyword) {
                intent.keyword = sanitizeIntentKeyword(params.keyword, 120);
            }
            if (op === 'view' || toBooleanFlag(params.need_detail)) {
                intent.needDetail = true;
            }
        }
        if (intent.workReport && intent.worklog) {
            intent.worklog = false;
        }
        if (!intent.menuKey && intent.menuKeys.length) {
            intent.menuKey = intent.menuKeys[0];
        }
        return intent;
    }

    function normalizeActionPlanResponse(res, catalogInfo) {
        var empty = {
            actions: [],
            intent: {
                worklog: false,
                mail: false,
                customer: false,
                workReport: false,
                external: false,
                menuKey: '',
                keyword: '',
                needDetail: false,
                confidence: 0,
                source: 'none'
            },
            confidence: 0,
            notice: ''
        };
        if (!res || typeof res !== 'object') return empty;

        var map = (catalogInfo && catalogInfo.map && typeof catalogInfo.map === 'object') ? catalogInfo.map : {};
        var allowed = (catalogInfo && Array.isArray(catalogInfo.keys)) ? catalogInfo.keys : [];
        var rawActions = Array.isArray(res.actions) ? res.actions : [];
        var actions = [];
        var seen = {};
        var i;

        function getMenuLabel(menuKey) {
            var key = collapseText(menuKey || '').toLowerCase();
            if (!key || !map[key]) return key;
            return collapseText(map[key].label || key);
        }

        for (i = 0; i < rawActions.length; i++) {
            var row = rawActions[i] || {};
            var menuKey = sanitizeActionPlanMenuKey(row.menu_key || row.menuKey || row.menu || row.module || '', allowed);
            if (!menuKey) continue;
            var op = sanitizeActionPlanOperation(row.operation || row.op || row.action || row.type || '');
            var defaultSource = (map[menuKey] && map[menuKey].default_source) ? map[menuKey].default_source : 'browser_ajax';
            var source = normalizeActionPlanSource(row.source || row.data_source || row.dataSource || '', defaultSource);
            var params = normalizeActionPlanParams(row.params || row, op);
            var label = collapseText(row.label || '');
            if (!label) {
                var opLabel = (op === 'view') ? 'View detail' : (op === 'summary' ? 'Summary' : 'Search');
                var kw = params.keyword ? (' (' + params.keyword + ')') : '';
                label = getMenuLabel(menuKey) + ' - ' + opLabel + kw;
            }

            var hashKey = menuKey + '|' + op + '|' + source + '|' + JSON.stringify(params);
            if (seen[hashKey]) continue;
            seen[hashKey] = true;

            actions.push({
                menu_key: menuKey,
                operation: op,
                source: source,
                label: label,
                params: params
            });
        }

        var confidence = parseFloat(res.confidence);
        if (isNaN(confidence)) confidence = 0;
        if (confidence < 0) confidence = 0;
        if (confidence > 1) confidence = 1;

        var intent = buildIntentFromActionPlan(actions, res.intent || {});
        if (confidence > intent.confidence) intent.confidence = confidence;
        var notice = (typeof res.notice === 'string') ? res.notice : '';
        if (notice) {
            notice = notice.replace(/\r\n?/g, '\n').trim();
        }
        return {
            actions: actions,
            intent: intent,
            confidence: confidence,
            notice: notice
        };
    }

    function actionPlanSourceText(source) {
        var src = normalizeActionPlanSource(source || '', 'browser_ajax');
        if (src === 'mcp') return tr('assistant.ui.collection.source.mcp');
        if (src === 'server_external') return tr('assistant.ui.collection.source.external_web');
        return tr('assistant.ui.collection.source.internal_data');
    }

    function actionPlanOperationText(operation) {
        var op = sanitizeActionPlanOperation(operation || '');
        if (op === 'view') return tr('assistant.ui.collection.operation.view', 'View');
        if (op === 'summary') return tr('assistant.ui.collection.operation.summary', 'Summary');
        return tr('assistant.ui.collection.operation.search', 'Search');
    }

    function actionPlanMenuText(menuKey) {
        var key = collapseText(menuKey || '').toLowerCase();
        if (key === 'diary') return tr('assistant.ui.collection.menu.diary');
        if (key === 'mail') return tr('assistant.ui.collection.menu.mail');
        if (key === 'customer') return tr('assistant.ui.collection.menu.customer');
        if (key === 'external') return tr('assistant.ui.collection.menu.external');
        if (key === 'workreport' || key === 'report') return tr('assistant.ui.collection.menu.workreport');
        if (key === 'approval') return tr('assistant.ui.collection.menu.approval', 'Approval');
        if (key === 'schedule' || key === 'calendar') return tr('assistant.ui.collection.menu.schedule', 'Schedule');
        if (key === 'project') return tr('assistant.ui.collection.menu.project', 'Project');
        if (key === 'board') return tr('assistant.ui.collection.menu.board', 'Board');
        if (key === 'todo') return tr('assistant.ui.collection.menu.todo', 'Todo');
        if (key === 'circular') return tr('assistant.ui.collection.menu.circular', 'Circular');
        if (key === 'whisper') return tr('assistant.ui.collection.menu.whisper', 'Whisper');
        if (key === 'addrbook' || key === 'contact' || key === 'addressbook') return tr('assistant.ui.collection.menu.addrbook', 'Address Book');
        if (key === 'helpdesk') return tr('assistant.ui.collection.menu.helpdesk', 'Helpdesk');
        return key || tr('assistant.ui.collection.menu.default');
    }

    function normalizeCollectorMenuKeyAlias(menuKey) {
        var key = collapseText(menuKey || '').toLowerCase();
        if (key === 'workreport' || key === 'work_report') return 'report';
        if (key === 'calendar') return 'schedule';
        if (key === 'contact' || key === 'addressbook') return 'addrbook';
        if (key === 'email' || key === 'e-mail') return 'mail';
        if (key === 'memo') return 'whisper';
        return key;
    }

    function resolveCollectorMenuKeyFromText(text) {
        var raw = collapseText(text || '');
        if (!raw) return '';
        var lower = raw.toLowerCase();
        if (/(메일|이메일|mail|email)/i.test(lower)) return 'mail';
        if (/(업무일지|일지|worklog|daily\s*log)/i.test(lower)) return 'diary';
        if (/(전자결재|결재|approval)/i.test(lower)) return 'approval';
        if (/(업무보고|보고서|report)/i.test(lower)) return 'report';
        if (/(일정|캘린더|calendar|schedule)/i.test(lower)) return 'schedule';
        if (/(프로젝트|project)/i.test(lower)) return 'project';
        if (/(게시판|board)/i.test(lower)) return 'board';
        if (/(할일|todo|to-?do)/i.test(lower)) return 'todo';
        if (/(회람|회람판|circular)/i.test(lower)) return 'circular';
        if (/(쪽지|메모|whisper)/i.test(lower)) return 'whisper';
        if (/(주소록|연락처|address\s*book|addrbook|contact)/i.test(lower)) return 'addrbook';
        if (/(헬프데스크|helpdesk|ticket|support)/i.test(lower)) return 'helpdesk';
        if (/(고객|고객관리|customer|crm|account)/i.test(lower)) return 'customer';
        if (/(외부|웹|인터넷|뉴스|환율|주가|external|web|internet)/i.test(lower)) return 'external';
        return '';
    }

    function normalizeCollectorMenuKey(action) {
        var row = action && typeof action === 'object' ? action : {};
        var rawMenu = collapseText(row.menu_key || row.menuKey || row.menu || row.module || '');
        var key = normalizeCollectorMenuKeyAlias(sanitizeActionPlanMenuKey(rawMenu, []));
        if (key) return key;
        key = normalizeCollectorMenuKeyAlias(resolveCollectorMenuKeyFromText(rawMenu));
        if (key) return key;
        key = normalizeCollectorMenuKeyAlias(resolveCollectorMenuKeyFromText(row.label || row.title || row.name || ''));
        if (key) return key;
        return normalizeCollectorMenuKeyAlias(collapseText(rawMenu || '').toLowerCase());
    }

    function actionPlanReasonText(reason) {
        var key = collapseText(reason || '').toLowerCase();
        if (key === 'external_context_empty') return tr('assistant.ui.collection.reason.external_context_empty');
        if (key === 'mcp_empty') return tr('assistant.ui.collection.reason.mcp_empty');
        if (key === 'mcp_no_rows') return tr('assistant.ui.collection.reason.mcp_no_rows');
        if (key === 'mcp_scope_unresolved') return tr('assistant.ui.collection.reason.mcp_scope_unresolved', 'No matching department scope found');
        if (key === 'no_context') return tr('assistant.ui.collection.reason.no_context');
        if (key === 'browser_collector_unavailable') return tr('assistant.ui.collection.reason.browser_collector_unavailable', 'No browser AJAX collector available');
        if (key === 'model_autofetch_blacklisted') return tr('assistant.ui.collection.reason.model_autofetch_blacklisted');
        return key || tr('assistant.ui.collection.reason.unknown');
    }

    function buildActionPlanPreviewText(actions, title) {
        var rows = Array.isArray(actions) ? actions : [];
        if (!rows.length) return '';
        var lines = [];
        var defaultTitle = tr('assistant_notice_collection_plan_title');
        lines.push(collapseText(title || defaultTitle) || defaultTitle);
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var menuText = actionPlanMenuText(row.menu_key || row.menuKey || '');
            var opText = actionPlanOperationText(row.operation || row.op || '');
            var srcText = actionPlanSourceText(row.source || '');
            var params = (row.params && typeof row.params === 'object' && !Array.isArray(row.params)) ? row.params : {};
            var hints = [];
            if (params.id) hints.push('id=' + sanitizeIntentKeyword(params.id, 80));
            if (params.keyword) hints.push('keyword=' + sanitizeIntentKeyword(params.keyword, 80));
            if (params.issue_keyword) hints.push('issue=' + sanitizeIntentKeyword(params.issue_keyword, 80));
            if (params.query) hints.push('query=' + sanitizeIntentKeyword(params.query, 80));
            if (params.target_board) hints.push('board=' + sanitizeIntentKeyword(params.target_board, 40));
            if (params.scope_type) hints.push('scope_type=' + collapseText(params.scope_type));
            if (params.scope_id) hints.push('scope_id=' + collapseText(params.scope_id));
            if (Array.isArray(params.scopes) && params.scopes.length) {
                var scopeLabels = [];
                var k;
                for (k = 0; k < params.scopes.length && k < 3; k++) {
                    var scopeRow = params.scopes[k] || {};
                    var scopeType = collapseText(scopeRow.type || scopeRow.scope_type || '').toLowerCase();
                    var scopeId = collapseText(scopeRow.id || scopeRow.scope_id || '').toLowerCase();
                    if (!scopeType) continue;
                    scopeLabels.push(scopeType + '/' + (scopeId || 'default'));
                }
                if (scopeLabels.length) hints.push('scopes=' + scopeLabels.join(','));
            }
            if (params.from_date) hints.push('from=' + collapseText(params.from_date));
            if (params.to_date) hints.push('to=' + collapseText(params.to_date));
            if (Object.prototype.hasOwnProperty.call(params, 'offset')) hints.push('offset=' + collapseText(params.offset));
            if (Object.prototype.hasOwnProperty.call(params, 'page')) hints.push('page=' + collapseText(params.page));
            if (Object.prototype.hasOwnProperty.call(params, 'limit')) hints.push('limit=' + collapseText(params.limit));
            if (Object.prototype.hasOwnProperty.call(params, 'page_size')) hints.push('page_size=' + collapseText(params.page_size));
            if (Object.prototype.hasOwnProperty.call(params, 'max_pages')) hints.push('max_pages=' + collapseText(params.max_pages));
            if (Object.prototype.hasOwnProperty.call(params, 'need_detail') && toBooleanFlag(params.need_detail)) {
                hints.push('detail=true');
            }

            var line = (i + 1) + '. ' + menuText + ' / ' + opText + ' / ' + srcText;
            if (hints.length) line += ' / ' + hints.join(', ');
            lines.push(line);
        }
        return lines.join('\n');
    }

    function buildCollectionStepNoticeText(collectionBundle) {
        var row = collectionBundle && typeof collectionBundle === 'object' ? collectionBundle : null;
        if (!row) return '';
        var steps = Array.isArray(row.steps) ? row.steps : [];
        if (!steps.length) return '';
        var lines = [];
        lines.push(trf('assistant_notice_collection_steps_title', {
            total: steps.length
        }));
        var verbosity = 'detailed';
        var maxItems = steps.length;
        if (verbosity === 'normal' && maxItems > 14) maxItems = 14;
        if (verbosity === 'minimal' && maxItems > 6) maxItems = 6;
        if (verbosity === 'detailed' && maxItems > 40) maxItems = 40;
        var i;
        for (i = 0; i < maxItems; i++) {
            var stepLine = buildCollectionStepLineText(steps[i] || {});
            if (!stepLine) continue;
            lines.push((i + 1) + '. ' + stepLine);
        }
        if (steps.length > maxItems) {
            lines.push('... +' + (steps.length - maxItems));
        }
        return lines.join('\n');
    }

    function buildCollectionStepLineText(step) {
        var row = step && typeof step === 'object' ? step : {};
        var pass = parseInt(row.pass, 10);
        if (isNaN(pass) || pass < 1) pass = 1;
        var phase = collapseText(row.phase || '').toLowerCase();
        if (phase === 'pass_start') {
            var actionCount = parseInt(row.action_count, 10);
            if (isNaN(actionCount) || actionCount < 0) actionCount = 0;
            return trf('assistant_notice_collection_step_pass_start', {
                pass: pass,
                action_count: actionCount
            });
        }
        if (phase === 'pass_end') {
            var passResolved = parseInt(row.resolved_count, 10);
            if (isNaN(passResolved) || passResolved < 0) passResolved = 0;
            var passUnresolved = parseInt(row.unresolved_count, 10);
            if (isNaN(passUnresolved) || passUnresolved < 0) passUnresolved = 0;
            return trf('assistant_notice_collection_step_pass_end', {
                pass: pass,
                resolved: passResolved,
                unresolved: passUnresolved
            });
        }
        if (phase === 'retry_requested') {
            var hintCount = parseInt(row.hint_count, 10);
            if (isNaN(hintCount) || hintCount < 0) hintCount = 0;
            return trf('assistant_notice_collection_step_retry_requested', {
                pass: pass,
                hint_count: hintCount
            });
        }
        if (phase === 'retry_applied') {
            var nextCount = parseInt(row.next_action_count, 10);
            if (isNaN(nextCount) || nextCount < 0) nextCount = 0;
            return trf('assistant_notice_collection_step_retry_applied', {
                pass: pass,
                next_action_count: nextCount
            });
        }
        if (phase === 'retry_empty') {
            return trf('assistant_notice_collection_step_retry_empty', {
                pass: pass
            });
        }
        if (phase === 'retry_error') {
            return trf('assistant_notice_collection_step_retry_error', {
                pass: pass,
                error: truncateText(row.error || '', 100)
            });
        }
        if (phase === 'retry_skipped') {
            var skipReason = collapseText(row.reason || '');
            if (!skipReason) skipReason = 'no_retry_lines';
            return trf('assistant_notice_collection_step_retry_skipped', {
                pass: pass,
                reason: skipReason
            });
        }

        var menuText = actionPlanMenuText(row.menu_key || 'menu');
        var sourceText = actionPlanSourceText(row.source || '');
        var status = collapseText(row.status || '').toLowerCase();
        if (status === 'start') {
            return trf('assistant_notice_collection_step_item_start', {
                menu: menuText,
                source: sourceText
            });
        }
        if (status === 'resolved') {
            var chars = parseInt(row.context_chars, 10);
            if (isNaN(chars) || chars < 0) chars = 0;
            return trf('assistant_notice_collection_step_item_resolved', {
                menu: menuText,
                source: sourceText,
                chars: chars
            });
        }
        if (status === 'client_pending') {
            return trf('assistant_notice_collection_step_item_client_pending', {
                menu: menuText,
                source: sourceText
            });
        }
        if (status === 'unresolved') {
            var reasonText = actionPlanReasonText(row.reason || '');
            return trf('assistant_notice_collection_step_item_unresolved', {
                menu: menuText,
                source: sourceText,
                reason: reasonText
            });
        }
        return trf('assistant_notice_collection_step_item_progress', {
            menu: menuText,
            source: sourceText,
            status: (status || phase || 'processed')
        });
    }

    function buildLegacyServerProgressEnvelope(eventName, payload) {
        var name = collapseText(eventName || '').toLowerCase();
        var data = payload && typeof payload === 'object' ? payload : {};
        var envelope = {
            schema: 'assistant.progress.v1',
            id: 0,
            event: name || 'progress',
            type: 'info',
            phase: '',
            status: 'update',
            level: 'normal',
            message: '',
            timestamp: '',
            data: data
        };

        if (name === 'stage') {
            var stage = collapseText(data.stage || '').toLowerCase();
            envelope.type = 'stage';
            envelope.phase = stage;
            envelope.status = (stage === 'done') ? 'done' : 'start';
            envelope.message = collapseText(data.message || '');
            return envelope;
        }
        if (name === 'action_plan') {
            var actions = Array.isArray(data.actions) ? data.actions : [];
            envelope.type = 'action_plan';
            envelope.phase = 'planned';
            envelope.status = 'done';
            envelope.message = trf('assistant_notice_action_plan_confirmed', {
                count: actions.length
            });
            return envelope;
        }
        if (name === 'collection_step') {
            envelope.type = 'collection_step';
            envelope.phase = collapseText(data.phase || '').toLowerCase();
            envelope.status = collapseText(data.status || 'update').toLowerCase();
            envelope.message = buildCollectionStepLineText(data);
            return envelope;
        }
        if (name === 'collection_summary') {
            envelope.type = 'collection_summary';
            envelope.phase = 'collect';
            envelope.status = 'done';
            envelope.message = trf('assistant_notice_collection_summary', {
                passes: (parseInt(data.passes, 10) || 0),
                resolved: (parseInt(data.resolved_count, 10) || 0),
                unresolved: (parseInt(data.unresolved_count, 10) || 0)
            });
            return envelope;
        }
        if (name === 'error') {
            envelope.type = 'error';
            envelope.phase = 'error';
            envelope.status = 'error';
            envelope.level = 'minimal';
            envelope.message = collapseText(data.message || data.msg || '');
            return envelope;
        }

        envelope.message = collapseText(data.message || '');
        return envelope;
    }

    function normalizeServerProgressEnvelope(raw) {
        var row = raw && typeof raw === 'object' ? raw : {};
        var eventName = collapseText(row.event || '').toLowerCase();
        var envelopeRaw = null;

        if (eventName === 'progress') {
            envelopeRaw = row.data && typeof row.data === 'object' ? row.data : {};
        } else if (row.schema === 'assistant.progress.v1' && (row.type || row.event || row.message)) {
            envelopeRaw = row;
        } else if (eventName) {
            envelopeRaw = buildLegacyServerProgressEnvelope(eventName, row.data);
        } else if (row.type || row.phase || row.message) {
            envelopeRaw = row;
        }

        if (!envelopeRaw || typeof envelopeRaw !== 'object') return null;

        var data = envelopeRaw.data && typeof envelopeRaw.data === 'object' ? envelopeRaw.data : {};
        var normalized = {
            schema: collapseText(envelopeRaw.schema || 'assistant.progress.v1'),
            id: parseInt(envelopeRaw.id, 10) || 0,
            event: collapseText(envelopeRaw.event || '').toLowerCase(),
            type: collapseText(envelopeRaw.type || '').toLowerCase(),
            phase: collapseText(envelopeRaw.phase || '').toLowerCase(),
            status: collapseText(envelopeRaw.status || '').toLowerCase(),
            level: normalizeProgressVerbosity(envelopeRaw.level || 'normal'),
            message: collapseText(envelopeRaw.message || ''),
            timestamp: collapseText(envelopeRaw.timestamp || ''),
            data: data
        };

        if (!normalized.type) normalized.type = normalized.event || 'info';
        if (!normalized.event) normalized.event = normalized.type || 'progress';
        if (!normalized.status) normalized.status = 'update';
        if (!normalized.level) normalized.level = 'normal';

        return normalized;
    }

    function serverProgressPrefix(type) {
        var key = collapseText(type || '').toLowerCase();
        if (key === 'stage') return tr('assistant_notice_server_prefix_stage');
        if (key === 'action_plan') return tr('assistant_notice_server_prefix_action_plan');
        if (key === 'collection_step') return tr('assistant_notice_server_prefix_collection_step');
        if (key === 'collection_summary') return tr('assistant_notice_server_prefix_collection_summary');
        if (key === 'collection_route') return tr('assistant_notice_server_prefix_collection_route', '[서버 그룹화]');
        if (key === 'llm_request') return tr('assistant_notice_server_prefix_llm', '[LLM 요청]');
        if (key === 'mcp_trace') return '[MCP]';
        if (key === 'error') return tr('assistant_notice_server_prefix_error');
        return tr('assistant_notice_server_prefix_progress');
    }

    function supportsChatSseStream() {
        return !!(window.fetch && window.ReadableStream && typeof window.TextDecoder === 'function');
    }

    function requestChatViaSseStream(requestOptions, onEvent) {
        var options = requestOptions || {};
        options.headers = options.headers || {};
        options.headers.Accept = 'text/event-stream';

        return fetch(assistant2ApiBase + 'chat/stream', options)
            .then(function (response) {
                if (!response) throw new Error('No response');
                if (!response.ok) throw new Error('HTTP ' + response.status);
                if (!response.body || typeof response.body.getReader !== 'function' || typeof window.TextDecoder !== 'function') {
                    return response.json();
                }

                var reader = response.body.getReader();
                var decoder = new window.TextDecoder('utf-8');
                var buffer = '';
                var currentEvent = 'message';
                var dataLines = [];
                var resolved = false;
                var finalResult = null;

                function dispatchEvent() {
                    if (!dataLines.length) {
                        currentEvent = 'message';
                        return;
                    }
                    var raw = dataLines.join('\n');
                    dataLines = [];
                    var parsed = parseJsonSafely(raw);
                    var evt = {
                        event: currentEvent || 'message',
                        raw: raw,
                        data: parsed && typeof parsed === 'object' ? parsed : {}
                    };
                    currentEvent = 'message';
                    if (typeof onEvent === 'function') {
                        onEvent(evt);
                    }
                    if (evt.event === 'done') {
                        resolved = true;
                        finalResult = evt.data && evt.data.result && typeof evt.data.result === 'object'
                            ? evt.data.result
                            : (evt.data || {});
                    }
                }

                function processChunkText(text) {
                    buffer += text;
                    var lines = buffer.split(/\r?\n/);
                    buffer = lines.pop();
                    var i;
                    for (i = 0; i < lines.length; i++) {
                        var line = lines[i];
                        if (line === '') {
                            dispatchEvent();
                            continue;
                        }
                        if (line.charAt(0) === ':') continue;
                        if (line.indexOf('event:') === 0) {
                            currentEvent = collapseText(line.substring(6) || '') || 'message';
                            continue;
                        }
                        if (line.indexOf('data:') === 0) {
                            var chunk = line.substring(5);
                            if (chunk.charAt(0) === ' ') chunk = chunk.substring(1);
                            dataLines.push(chunk);
                        }
                    }
                }

                function readNext() {
                    return reader.read().then(function (chunk) {
                        if (chunk.done) {
                            if (buffer) {
                                processChunkText('\n');
                            } else {
                                dispatchEvent();
                            }
                            if (resolved) return finalResult || {};
                            return finalResult || { success: false, msg: 'stream ended without done event' };
                        }
                        var text = decoder.decode(chunk.value || new Uint8Array(), { stream: true });
                        processChunkText(text);
                        if (resolved) {
                            try {
                                reader.cancel();
                            } catch (cancelErr) {
                                // ignore reader cancel errors
                            }
                            return finalResult || {};
                        }
                        return readNext();
                    });
                }

                return readNext();
            });
    }

    function splitActionPlanActionsBySource(actions) {
        var rows = Array.isArray(actions) ? actions : [];
        var out = { browser: [], server: [] };
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var source = normalizeActionPlanSource(row.source || '', 'browser_ajax');
            if (source === 'browser_ajax' || isBrowserMcpActionRow(row)) {
                out.browser.push(row);
                continue;
            }
            out.server.push(row);
        }
        return out;
    }

    function resolveMcpServerHintFromActionRow(row) {
        var src = (row && typeof row === 'object') ? row : {};
        var params = (src.params && typeof src.params === 'object' && !Array.isArray(src.params)) ? src.params : {};
        var keys = ['mcp_server_id', 'mcpServerId', 'server_id', 'serverId', 'tool_server_id', 'toolServerId'];
        var i;
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = collapseText(params[key] || src[key] || '').toLowerCase();
            if (value) return value;
        }
        return '';
    }

    function isBrowserMcpActionRow(row) {
        var src = normalizeActionPlanSource((row && row.source) || '', 'browser_ajax');
        if (src !== 'mcp') return false;
        return resolveMcpServerHintFromActionRow(row) === 'browser';
    }

    function buildDiaryScopeCatalogContext(catalog) {
        var row = catalog && typeof catalog === 'object' ? catalog : {};
        var deptRows = Array.isArray(row.deptRows) ? row.deptRows : [];
        var treeRows = Array.isArray(row.treeNodes) ? row.treeNodes : [];
        var lines = [];
        lines.push('[Diary scope snapshot (업무일지 범위)]');
        lines.push('dept_rows=' + deptRows.length + '; tree_rows=' + treeRows.length);
        var names = [];
        var seen = {};
        var i;
        for (i = 0; i < treeRows.length; i++) {
            var name = collapseText((treeRows[i] && treeRows[i].name) || '');
            if (!name) continue;
            var key = name.toLowerCase();
            if (seen[key]) continue;
            seen[key] = true;
            names.push(name);
            if (names.length >= 12) break;
        }
        if (!names.length) {
            for (i = 0; i < deptRows.length; i++) {
                var deptName = collapseText((deptRows[i] && deptRows[i].name) || '');
                if (!deptName) continue;
                var deptKey = deptName.toLowerCase();
                if (seen[deptKey]) continue;
                seen[deptKey] = true;
                names.push(deptName);
                if (names.length >= 12) break;
            }
        }
        if (names.length) {
            lines.push('scopes=' + names.join(', '));
        }
        return lines.join('\n');
    }

    function firstNonEmptyText() {
        var i;
        for (i = 0; i < arguments.length; i++) {
            var text = collapseText(arguments[i] || '');
            if (text) return text;
        }
        return '';
    }

    function normalizeRowsContainerAny(payload) {
        if (!payload || typeof payload !== 'object') return [];
        var rows = payload.rows || payload.list || payload.data || payload.items || payload.result || payload.results || payload.tickets || null;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.rows)) rows = rows.rows;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.list)) rows = rows.list;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.items)) rows = rows.items;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.tickets)) rows = rows.tickets;
        if (rows && !Array.isArray(rows) && typeof rows === 'object') {
            rows = objectValuesArray(rows);
        }
        if (!rows || typeof rows.length !== 'number') return [];
        return rows;
    }

    function appendQueryParamsToUrl(url, query) {
        var base = String(url || '');
        if (!base || !query || typeof query !== 'object') return base;
        var parts = [];
        var key;
        for (key in query) {
            if (!Object.prototype.hasOwnProperty.call(query, key)) continue;
            var value = query[key];
            if (value === null || typeof value === 'undefined') continue;
            if (Array.isArray(value)) {
                var i;
                for (i = 0; i < value.length; i++) {
                    if (value[i] === null || typeof value[i] === 'undefined') continue;
                    parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value[i])));
                }
                continue;
            }
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
        }
        if (!parts.length) return base;
        return base + (base.indexOf('?') >= 0 ? '&' : '?') + parts.join('&');
    }

    function buildBrowserAjaxRequestOptions(method, body, headers, abortSignal) {
        var requestMethod = collapseText(method || 'GET').toUpperCase() || 'GET';
        var options = buildApiFetchOptions(abortSignal);
        options.method = requestMethod;
        var mergedHeaders = {};
        var key;
        if (options.headers && typeof options.headers === 'object') {
            for (key in options.headers) {
                if (!Object.prototype.hasOwnProperty.call(options.headers, key)) continue;
                mergedHeaders[key] = options.headers[key];
            }
        }
        if (headers && typeof headers === 'object') {
            for (key in headers) {
                if (!Object.prototype.hasOwnProperty.call(headers, key)) continue;
                mergedHeaders[key] = headers[key];
            }
        }
        options.headers = mergedHeaders;
        if (requestMethod !== 'GET' && requestMethod !== 'HEAD' && body !== null && typeof body !== 'undefined') {
            if (!options.headers['Content-Type'] && !options.headers['content-type']) {
                options.headers['Content-Type'] = 'application/json';
            }
            if (typeof body === 'string') {
                options.body = body;
            } else {
                options.body = JSON.stringify(body);
            }
        }
        return options;
    }

    function fetchMenuRawWithFallback(descriptor, abortSignal) {
        if (!window.fetch) return Promise.resolve(null);
        var desc = descriptor && typeof descriptor === 'object' ? descriptor : {};
        var path = collapseText(desc.path || desc.url || '');
        if (!path) return Promise.resolve(null);
        var urls = buildNgwApiUrls(path, collapseText(desc.preferredOrigin || ''));
        if (!urls.length) return Promise.resolve(null);
        var finalUrls = [];
        var i;
        for (i = 0; i < urls.length; i++) {
            finalUrls.push(appendQueryParamsToUrl(urls[i], desc.query || null));
        }
        var idx = 0;

        function tryNext(lastBundle) {
            var aborted = rejectIfAborted(abortSignal);
            if (aborted) return aborted;
            if (idx >= finalUrls.length) return Promise.resolve(lastBundle || null);
            var currentUrl = finalUrls[idx++];
            var options = buildBrowserAjaxRequestOptions(desc.method || 'GET', desc.body, desc.headers, abortSignal);
            return fetch(currentUrl, options)
                .then(function (response) {
                    return response.text().then(function (raw) {
                        return {
                            url: currentUrl,
                            status: response.status,
                            raw: raw || '',
                            payload: parseJsonSafely(raw)
                        };
                    });
                })
                .then(function (bundle) {
                    var hasPayload = !!(bundle.payload && typeof bundle.payload === 'object');
                    var hasRaw = !!collapseText(bundle.raw || '');
                    if ((bundle.status >= 200 && bundle.status < 300 && (hasPayload || hasRaw)) || hasPayload) {
                        return bundle;
                    }
                    return tryNext(lastBundle || bundle);
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext(lastBundle);
                });
        }

        return tryNext(null);
    }

    function fetchSearchRowsByRequests(requests, normalizeRowsFn, abortSignal) {
        var list = Array.isArray(requests) ? requests : [];
        if (!list.length || !window.fetch) {
            return Promise.resolve({ rows: [], sourceUrl: '', payload: null });
        }
        var index = 0;
        var normalize = (typeof normalizeRowsFn === 'function') ? normalizeRowsFn : function () { return []; };

        function tryNext(lastResult) {
            var aborted = rejectIfAborted(abortSignal);
            if (aborted) return aborted;
            if (index >= list.length) {
                return Promise.resolve(lastResult || { rows: [], sourceUrl: '', payload: null });
            }
            return fetchMenuRawWithFallback(list[index++], abortSignal)
                .then(function (bundle) {
                    if (!bundle) return tryNext(lastResult);
                    var rows = normalize(bundle.payload, bundle.url, bundle.raw);
                    var result = {
                        rows: Array.isArray(rows) ? rows : [],
                        sourceUrl: bundle.url || '',
                        payload: bundle.payload || null
                    };
                    if (result.rows.length) return result;
                    return tryNext(result);
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext(lastResult);
                });
        }

        return tryNext(null);
    }

    function normalizeCircularListType(type) {
        var text = collapseText(type || '').toLowerCase();
        if (!text) return '';
        if (text === 'received' || text === 'sent' || text === 'read' || text === 'folder') return text;
        if (text === 'recv' || text === 'receive' || text === 'inbox' || text === '수신') return 'received';
        if (text === 'send' || text === 'outbox' || text === '발신' || text === '보낸') return 'sent';
        if (text === 'cc' || text === 'refer' || text === 'reference' || text === '읽음' || text === '참조') return 'read';
        return '';
    }

    function resolveCircularSearchTypesFromPrompt(prompt) {
        var text = collapseText(prompt || '').toLowerCase();
        if (!text) return ['received', 'sent', 'read'];
        var out = [];
        function add(type) {
            var normalized = normalizeCircularListType(type);
            if (!normalized || out.indexOf(normalized) >= 0) return;
            out.push(normalized);
        }
        if (/(수신|받은|받음|received|inbox|receive)/i.test(text)) add('received');
        if (/(발신|보낸|sent|outbox|send)/i.test(text)) add('sent');
        if (/(열람|읽음|참조|read|cc)/i.test(text)) add('read');
        return out.length ? out : ['received', 'sent', 'read'];
    }

    function resolveWhisperBoxesFromPrompt(prompt) {
        var text = collapseText(prompt || '').toLowerCase();
        if (!text) return ['inbox', 'sentbox', 'reservedbox'];
        var out = [];
        function add(box) {
            if (!box || out.indexOf(box) >= 0) return;
            out.push(box);
        }
        if (/(수신|받은|받음|inbox|received|receive)/i.test(text)) add('inbox');
        if (/(발신|보낸|sent|outbox|send)/i.test(text)) add('sentbox');
        if (/(예약|reserved|reserve)/i.test(text)) add('reservedbox');
        if (!out.length) {
            add('inbox');
            add('sentbox');
            add('reservedbox');
        }
        return out;
    }

    function normalizeCircularSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var sourceType = normalizeCircularListType((parseUrlQueryMap(sourceUrl || {}).type || ''));
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var cdseq = firstNonEmptyText(row.cdseq, row.id, row.seq, row.no);
            if (!cdseq || seen[cdseq]) continue;
            seen[cdseq] = true;
            var boxType = normalizeCircularListType(firstNonEmptyText(row.box, row.type, row.lmenu, sourceType));
            if (!boxType) boxType = resolveCircularMenuType(row);
            out.push({
                cdseq: cdseq,
                box: boxType || sourceType || 'received',
                utype: firstNonEmptyText(row.utype, row.type),
                writer_id: firstNonEmptyText(row.writer_id, row.writerid),
                subject: firstNonEmptyText(row.subject, row.title, row.survey_title, row.content),
                writer: firstNonEmptyText(row.writer, row.regname, row.username, row.name),
                date: firstNonEmptyText(row.regdate, row.date, row.time),
                isSecure: !!(row.issecure || row.is_secure || row.secure)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeWhisperSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var sourceBox = firstNonEmptyText(
            (parseUrlQueryMap(sourceUrl || {}).type || ''),
            payload && payload.type ? payload.type : '',
            'inbox'
        ).toLowerCase();
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var uniqueId = firstNonEmptyText(row.unique_id, row.uniqueId, row.id, row.no, row.memo_no);
            if (!uniqueId) continue;
            var box = firstNonEmptyText(row.type, row.box, row.lmenu, sourceBox).toLowerCase();
            if (box !== 'inbox' && box !== 'sentbox' && box !== 'reservedbox' && box !== 'conversation') {
                box = sourceBox || 'inbox';
            }
            var key = box + '|' + uniqueId;
            if (seen[key]) continue;
            seen[key] = true;
            var fromRow = row.from && typeof row.from === 'object' ? row.from : {};
            out.push({
                uniqueId: uniqueId,
                box: box,
                subject: firstNonEmptyText(row.subject, row.title, row.memo_text, row.memo, row.message, row.content),
                writer: firstNonEmptyText(row.from_name, fromRow.name, fromRow.username, row.writer, row.regname, row.username, row.name),
                date: firstNonEmptyText(row.date, row.regdate, row.time, row.created_at)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function resolveSessionUserInfo() {
        var info = { sessionCn: '', sessionNo: '' };
        var root = window.userDataGlobal || {};
        var userData = window.user_data || {};
        var userConfig = root.user_config || root.userData || window.user_config || {};
        info.sessionCn = firstNonEmptyText(
            userConfig.session_cn,
            userConfig.cn,
            userData.session_cn,
            userData.cn
        );
        info.sessionNo = firstNonEmptyText(
            userConfig.session_no,
            userConfig.userno,
            userData.session_no,
            userData.userno
        );
        return info;
    }

    function resolveCircularMenuType(row) {
        var item = row || {};
        var writerId = collapseText(item.writer_id || item.writerId || '');
        var typeNumber = parseInt(item.utype, 10);
        var userInfo = resolveSessionUserInfo();
        if (writerId && userInfo.sessionCn && userInfo.sessionNo) {
            if (writerId === (userInfo.sessionCn + '_' + userInfo.sessionNo)) {
                return 'sent';
            }
        }
        if (!isNaN(typeNumber) && typeNumber === 1) return 'received';
        return 'read';
    }

    function normalizeTodoModeValue(mode) {
        var text = collapseText(mode || '').toLowerCase();
        if (!text) return '';
        if (text === 'my' || text === 'mine') return 'my';
        if (text === 'get' || text === 'recv' || text === 'received' || text === 'inbox') return 'get';
        if (text === 'send' || text === 'sent' || text === 'outbox') return 'send';
        if (text === 'read' || text === 'cc' || text === 'reference' || text === 'refer') return 'read';
        return '';
    }

    function resolveTodoSearchModesFromPrompt(prompt) {
        var text = collapseText(prompt || '').toLowerCase();
        if (!text) return ['my', 'get', 'send', 'read'];
        var out = [];
        function addMode(mode) {
            var normalized = normalizeTodoModeValue(mode);
            if (!normalized || out.indexOf(normalized) >= 0) return;
            out.push(normalized);
        }
        if (/(나의|내\s*todo|내\s*to-do|내\s*to do|내\s*할\s*일|my\s*todo|my\s*to-?do|my\s*tasks?)/i.test(text)) addMode('my');
        if (/(수신|받은|요청받|받아온|inbox|get\s*todo|received\s*todo|received\s*tasks?)/i.test(text)) addMode('get');
        if (/(보낸|발신|요청한|내가\s*보낸|sent\s*todo|send\s*todo|sent\s*tasks?)/i.test(text)) addMode('send');
        if (/(열람|읽음|읽은|참조|cc|read\s*todo|read\s*tasks?)/i.test(text)) addMode('read');
        return out.length ? out : ['my', 'get', 'send', 'read'];
    }

    function parseApprovalScopeFromSourceUrl(sourceUrl) {
        var url = String(sourceUrl || '');
        var m = url.match(/\/approval\/approval\/list\/([^\/?#]+)\/([^\/?#]+)/i);
        if (!m) return { type: '', id: '' };
        return {
            type: collapseText(decodeUriPart(m[1] || '')).toLowerCase(),
            id: collapseText(decodeUriPart(m[2] || '')).toLowerCase()
        };
    }

    function normalizeApprovalScopeType(value) {
        var text = collapseText(value || '').toLowerCase();
        if (!text) return '';
        if (text === 'progress' || text === 'my' || text === 'complete' || text === 'refer') {
            return text;
        }
        if (/(진행|결재|approval|aprv|approve)/i.test(text)) return 'progress';
        if (/(기안|draft|my)/i.test(text)) return 'my';
        if (/(완결|완료|종결|complete|done)/i.test(text)) return 'complete';
        if (/(참조|열람|cc|refer|view)/i.test(text)) return 'refer';
        return '';
    }

    function normalizeApprovalScopeId(type, value) {
        var scopeType = normalizeApprovalScopeType(type);
        var text = collapseText(value || '').toLowerCase();
        if (!scopeType) return '';
        if (scopeType === 'progress') {
            if (/^(iall|ialls|ireq|iwait|iwaitall|idone|ire|itemp|advance_payments)$/.test(text)) return text;
            if (/(결재\s*해야|결재\s*할|결재하기|승인\s*해야|승인\s*할|to\s*approve|need\s*approval|approve)/i.test(text)) return 'ireq';
            if (/(전단계|이전결재|before|previous|iwait)/i.test(text)) return 'iwait';
            if (/(기결|완료|승인완료|done|approved|idone)/i.test(text)) return 'idone';
            if (/(전체|all|iall)/i.test(text)) return 'iall';
            return '';
        }
        if (scopeType === 'my') {
            if (/^(default|draft|temp|itemp)$/.test(text)) return text;
            return 'default';
        }
        if (scopeType === 'complete') {
            if (/^(default|dlist)$/.test(text)) return text;
            return 'default';
        }
        if (scopeType === 'refer') {
            if (/^(rdocu|rview|rset)$/.test(text)) return text;
            if (/(열람|read|view|rview)/i.test(text)) return 'rview';
            if (/(부여|set|rset)/i.test(text)) return 'rset';
            return 'rdocu';
        }
        return '';
    }

    function normalizeApprovalScopeItem(item) {
        var row = item && typeof item === 'object' ? item : {};
        var type = normalizeApprovalScopeType(row.type || row.scope_type || '');
        var id = normalizeApprovalScopeId(type, row.id || row.scope_id || '');
        if (!type || !id) return null;
        return { type: type, id: id };
    }

    function inferApprovalScopesFromPrompt(prompt) {
        var text = collapseText(prompt || '').toLowerCase();
        if (!text) {
            return {
                strict: false,
                scopes: [{ type: 'progress', id: 'ireq' }]
            };
        }
        if (/(결재\s*해야|결재\s*할|결재하기|승인\s*해야|승인\s*할|approve|to\s*approve|need\s*approval)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'progress', id: 'ireq' }] };
        }
        if (/(전단계|이전결재|before|previous|iwait)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'progress', id: 'iwait' }] };
        }
        if (/(기결|결재완료|승인완료|already approved|idone)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'progress', id: 'idone' }] };
        }
        if (/(참조|cc|reference|refer|rdocu)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'refer', id: 'rdocu' }] };
        }
        if (/(열람|read|rview)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'refer', id: 'rview' }] };
        }
        if (/(완결|완료문서|complete|종결)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'complete', id: 'default' }] };
        }
        if (/(기안|draft|내가\s*쓴|내가\s*기안)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'my', id: 'default' }] };
        }
        if (/(진행전체|전체문서|전체\s*문서|all)/i.test(text)) {
            return { strict: true, scopes: [{ type: 'progress', id: 'iall' }] };
        }
        return {
            strict: false,
            scopes: [{ type: 'progress', id: 'ireq' }]
        };
    }

    function buildApprovalSearchScopes(params, prompt) {
        var row = params && typeof params === 'object' ? params : {};
        var out = [];
        var seen = {};
        var strict = false;
        var source = 'default';

        function pushScope(type, id) {
            var scopeType = normalizeApprovalScopeType(type);
            var scopeId = normalizeApprovalScopeId(scopeType, id);
            if (!scopeType || !scopeId) return;
            var hash = scopeType + '/' + scopeId;
            if (seen[hash]) return;
            seen[hash] = true;
            out.push({ type: scopeType, id: scopeId });
        }

        var inferred = inferApprovalScopesFromPrompt(prompt || '');
        if (inferred && inferred.strict && Array.isArray(inferred.scopes)) {
            var p;
            for (p = 0; p < inferred.scopes.length; p++) {
                var strictScope = inferred.scopes[p] || {};
                pushScope(strictScope.type, strictScope.id);
            }
            if (out.length) {
                return { scopes: out, strict: true, source: 'prompt' };
            }
        }

        if (Array.isArray(row.scopes)) {
            var i;
            for (i = 0; i < row.scopes.length; i++) {
                var scope = normalizeApprovalScopeItem(row.scopes[i]);
                if (!scope) continue;
                pushScope(scope.type, scope.id);
            }
            if (out.length) {
                strict = true;
                return { scopes: out, strict: strict, source: 'params' };
            }
        }

        var singleType = normalizeApprovalScopeType(row.scope_type || '');
        var singleId = normalizeApprovalScopeId(singleType, row.scope_id || '');
        if (singleType && singleId) {
            pushScope(singleType, singleId);
            strict = true;
            return { scopes: out, strict: strict, source: 'params' };
        }

        if (inferred && Array.isArray(inferred.scopes)) {
            var j;
            for (j = 0; j < inferred.scopes.length; j++) {
                var inferredScope = inferred.scopes[j] || {};
                pushScope(inferredScope.type, inferredScope.id);
            }
            if (out.length) {
                strict = !!inferred.strict;
                source = inferred.strict ? 'prompt' : 'default';
                return { scopes: out, strict: strict, source: source };
            }
        }

        pushScope('progress', 'ireq');
        return { scopes: out, strict: false, source: 'default' };
    }

    function normalizeApprovalSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var scope = parseApprovalScopeFromSourceUrl(sourceUrl || '');
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var docNo = firstNonEmptyText(
                row.docNo,
                row.doc_no,
                row.docno,
                row.docuNo,
                row.docu_no,
                row.id
            );
            if (!docNo && row.cn && row.no) docNo = String(row.cn) + '_' + String(row.no);
            var subject = firstNonEmptyText(row.subject, row.title);
            if (!docNo && !subject) continue;
            var key = docNo || subject;
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                docNo: docNo,
                subject: subject,
                writer: firstNonEmptyText(row.writer, row.regname, row.username, row.name, row.longname),
                date: firstNonEmptyText(row.draftday_formatted, row.draftday, row.date, row.regdate, row.time),
                secure: !!(row.secure || row.is_secure),
                scopeType: scope.type || '',
                scopeId: scope.id || ''
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeReportSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var sourceType = /\/diary\/diary\//i.test(String(sourceUrl || '')) ? 'diary' : 'report';
        var sourceMode = (parseUrlQueryMap(sourceUrl || {}).mode || '');
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var tdseq = firstNonEmptyText(row.id, row.tdseq, row.seqNo, row.seqno, row.reportNo, row.no);
            var mode = firstNonEmptyText(row.mode, row.mid, sourceMode, 'rdefault');
            var type = firstNonEmptyText(row.type, row.cat, sourceType, 'report').toLowerCase();
            if (type !== 'diary' && type !== 'report') type = 'report';
            if (!tdseq) continue;
            var key = type + '|' + mode + '|' + tdseq;
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                type: type,
                mode: mode,
                tdseq: tdseq,
                subject: firstNonEmptyText(row.subject, row.title, row.topic),
                writer: firstNonEmptyText(row.writer, row.regname, row.username, row.name),
                date: firstNonEmptyText(row.day, row.date, row.regdate, row.time, row.created_at),
                secure: !!(row.secure || row.is_secure)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeDiarySearchRows(payload, sourceUrl) {
        var rows = normalizeReportSearchRows(payload, sourceUrl);
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            if (collapseText(row.type || '').toLowerCase() !== 'diary') continue;
            var key = collapseText(row.mode || '') + '|' + collapseText(row.tdseq || '');
            if (!key || seen[key]) continue;
            seen[key] = true;
            out.push(row);
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeCalendarSearchRows(payload) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var calseq = firstNonEmptyText(row.calseq, row.cal_seq, row.id, row.seq);
            if (!calseq) continue;
            var ctype = firstNonEmptyText(row.ctype, row.type, row.calendar_type, 'mycal');
            var calcn = firstNonEmptyText(row.cn, row.calcn, row.cal_cn, row.ucn, '1');
            var ucn = firstNonEmptyText(row.ucn, row.cn, calcn, '1');
            var key = [ctype, calcn, calseq, ucn].join('|');
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                calseq: calseq,
                ctype: ctype,
                calcn: calcn,
                ucn: ucn,
                subject: firstNonEmptyText(row.title, row.subject, row.name),
                start: firstNonEmptyText(row.start, row.start_date, row.date, row.regdate),
                end: firstNonEmptyText(row.end, row.end_date)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeProjectSearchRows(payload) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var ptype = firstNonEmptyText(row.ptype, row.type, 'p').toLowerCase();
            var pseq = firstNonEmptyText(row.pseq, row.project_seq, row.projectNo);
            if (!pseq && ptype === 'p') pseq = firstNonEmptyText(row.seq_no, row.no);
            var id = firstNonEmptyText(row.id, row.folder_id, row.pid);
            var wseq = firstNonEmptyText(row.wseq, row.work_seq, row.wtseq);
            var tseq = firstNonEmptyText(row.tseq, row.taseq, row.task_seq, row.wtseq);
            var wrseq = firstNonEmptyText(row.wrseq, row.reference_seq, row.wtrseq);
            if (!pseq) continue;
            var key = [ptype, pseq, wseq, tseq, wrseq].join('|');
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                ptype: ptype,
                pseq: pseq,
                id: id,
                wseq: wseq,
                tseq: tseq,
                wrseq: wrseq,
                subject: firstNonEmptyText(row.subject, row.title, row.name, row.code_name),
                writer: firstNonEmptyText(row.writer, row.regname, row.username, row.incharge, row.incharge_name),
                date: firstNonEmptyText(row.date, row.regdate, row.time, row.updated_date, row.created_date)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeBoardSearchRows(payload) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var brdseq = collapseText(firstNonEmptyText(row.brdseq, row.bid));
            var ucn = collapseText(firstNonEmptyText(row.ucn, row.cn));
            var canonicalId = buildBoardCanonicalId(row);
            var btype = firstNonEmptyText(row.btype, row.folder);
            if (!canonicalId && brdseq) canonicalId = brdseq;
            if (!canonicalId || !btype) continue;
            if (!brdseq) brdseq = extractBoardShortId(canonicalId);
            var key = btype + '|' + canonicalId;
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                id: canonicalId,
                brdseq: brdseq,
                ucn: ucn,
                btype: btype,
                subject: firstNonEmptyText(row.subject, row.title),
                writer: firstNonEmptyText(row.writer, row.regname, row.username),
                date: firstNonEmptyText(row.date, row.regdate, row.time),
                isSecure: !!(row.is_secret || row.is_secure || row.secure)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeTodoSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var sourceMode = normalizeTodoModeValue((parseUrlQueryMap(sourceUrl || {}).mode || ''));
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var mode = normalizeTodoModeValue(firstNonEmptyText(row.mode, row.todo_type, row.id, sourceMode));
            var tdseq = firstNonEmptyText(row.rtdseq, row.tdseq, row.seqNo, row.seqno, row.no);
            if (!tdseq) continue;
            var key = (mode || sourceMode || 'my') + '|' + tdseq;
            if (seen[key]) continue;
            seen[key] = true;
            var parsedSeqCode = '';
            if (tdseq.indexOf('_') > -1) {
                var tdseqParts = tdseq.split('_');
                parsedSeqCode = tdseqParts.length > 1 ? tdseqParts[1] : '';
            }
            out.push({
                mode: mode || sourceMode || 'my',
                tdseq: tdseq,
                seqCode: firstNonEmptyText(row.seqCode, row.seq_code, row.cn, parsedSeqCode),
                subject: firstNonEmptyText(row.subject, row.title, row.todo_name),
                writer: firstNonEmptyText(row.writer, row.regname, row.username, row.name),
                date: firstNonEmptyText(row.zregdate, row.date, row.regdate, row.time)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeContactSearchRows(payload) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var seqno = firstNonEmptyText(row.seqno, row.seqNo, row.userno);
            if (!seqno) continue;
            var id = firstNonEmptyText(row.id, row.addrseq, row.atype);
            var cn = firstNonEmptyText(row.cn);
            var groupno = firstNonEmptyText(row.groupno, row.group_no);
            if (!id && cn && groupno) id = cn + '_' + groupno;
            if (!id) continue;
            var key = id + '|' + seqno;
            if (seen[key]) continue;
            seen[key] = true;
            out.push({
                id: id,
                seqno: seqno,
                cn: cn,
                groupno: groupno,
                name: firstNonEmptyText(row.username, row.name),
                position: firstNonEmptyText(row.position),
                groupName: firstNonEmptyText(row.groupname, row.group_name),
                mobile: firstNonEmptyText(row.mobile, row.cellphone),
                email: firstNonEmptyText(row.email),
                localPhone: firstNonEmptyText(row.localphone, row.phone)
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function normalizeHelpdeskSearchRows(payload, sourceUrl) {
        var rows = normalizeRowsContainerAny(payload);
        var out = [];
        var seen = {};
        var userInfo = resolveSessionUserInfo();
        var defaultCn = userInfo.sessionCn || '1';
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var ticketId = firstNonEmptyText(row.id, row.ticket_id, row.ticketId, row.tseq);
            if (!ticketId || seen[ticketId]) continue;
            seen[ticketId] = true;
            out.push({
                ticketId: ticketId,
                cn: firstNonEmptyText(row.cn, row.company_id, row.companyId, defaultCn),
                subject: firstNonEmptyText(row.subject, row.title),
                writer: firstNonEmptyText(row.author_name, row.author_name_text, row.author && row.author.name, row.author, row.writer),
                date: firstNonEmptyText(row.updated_at, row.regdate, row.created_at, row.date),
                status: firstNonEmptyText(row.status_name, row.status && row.status.name, row.status),
                priority: firstNonEmptyText(row.priority_name, row.priority && row.priority.name, row.priority),
                sourceUrl: sourceUrl || ''
            });
            if (out.length >= MAX_MENU_SEARCH_ROWS) break;
        }
        return out;
    }

    function buildMenuSnapshotLine(row, fieldDefs) {
        var fields = Array.isArray(fieldDefs) ? fieldDefs : [];
        var parts = [];
        var i;
        for (i = 0; i < fields.length; i++) {
            var field = fields[i] || {};
            var key = field.key || '';
            if (!key) continue;
            var value = collapseText(row && row[key] ? row[key] : '');
            if (!value) continue;
            var label = collapseText(field.label || key);
            parts.push(label + '=' + escapeTextForContext(value));
        }
        return parts.join('; ');
    }

    function buildGenericMenuListSnapshotContext(title, rows, keyword, sourceUrl, maxItems, fieldDefs) {
        var list = Array.isArray(rows) ? rows : [];
        var out = [];
        out.push('[' + title + ' list snapshot]');
        if (sourceUrl) out.push('source=' + escapeTextForContext(buildHumanReadableUrlLabel(sourceUrl)));
        if (keyword) out.push('keyword=' + escapeTextForContext(keyword));
        out.push('rows=' + list.length);
        if (!list.length) return out.join('\n');
        out.push('items:');
        var i;
        var limit = Math.min(list.length, maxItems);
        for (i = 0; i < limit; i++) {
            var line = buildMenuSnapshotLine(list[i], fieldDefs);
            if (!line) continue;
            out.push((i + 1) + '. ' + line);
        }
        return out.join('\n');
    }

    function fetchMenuDetailTextByDescriptors(descriptors, abortSignal) {
        var list = Array.isArray(descriptors) ? descriptors : [];
        if (!list.length) return Promise.resolve('');
        var idx = 0;
        function tryNext() {
            if (idx >= list.length) return Promise.resolve('');
            return fetchMenuRawWithFallback(list[idx++], abortSignal)
                .then(function (bundle) {
                    if (!bundle) return tryNext();
                    var text = extractMenuDetailText(bundle.payload, bundle.raw);
                    if (text) return text;
                    return tryNext();
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext();
                });
        }
        return tryNext();
    }

    function buildApprovalViewRequests(row) {
        var docNo = collapseText(row && row.docNo ? row.docNo : '');
        if (!docNo) return [];
        return [
            { path: 'approval/approval/info/' + encodeURIComponent(docNo), method: 'GET' },
            { path: 'approval/approval/info', method: 'GET', query: { id: docNo } }
        ];
    }

    function buildReportViewRequests(row) {
        var item = row || {};
        var type = firstNonEmptyText(item.type, 'report').toLowerCase();
        if (type !== 'diary' && type !== 'report') type = 'report';
        var seqNo = collapseText(item.tdseq || '');
        if (!seqNo) return [];
        return [{
            path: type + '/' + type + '/view',
            method: 'GET',
            query: {
                mode: firstNonEmptyText(item.mode, 'rdefault'),
                seqNo: seqNo,
                getComment: 1
            }
        }];
    }

    function buildCalendarViewRequests(row) {
        var item = row || {};
        var calseq = collapseText(item.calseq || '');
        if (!calseq) return [];
        var ctype = firstNonEmptyText(item.ctype, 'mycal');
        var calcn = firstNonEmptyText(item.calcn, '1');
        var ucn = firstNonEmptyText(item.ucn, calcn, '1');
        return [{
            path: 'calendar/main/info/ctype/'
                + encodeURIComponent(ctype)
                + '/calcn/' + encodeURIComponent(calcn)
                + '/calseq/' + encodeURIComponent(calseq)
                + '/ucn/' + encodeURIComponent(ucn)
                + '/mode/view',
            method: 'GET'
        }];
    }

    function buildProjectViewRequests(row) {
        var item = row || {};
        var ptype = firstNonEmptyText(item.ptype, 'p').toLowerCase();
        var pseq = collapseText(item.pseq || '');
        if (!pseq) return [];
        if (ptype === 'p') {
            return [
                { path: 'project/project/view/pseq/' + encodeURIComponent(pseq), method: 'GET' },
                { path: 'projectnew/project/detail', method: 'GET', query: { pseq: pseq } }
            ];
        }
        if (ptype === 'w') {
            var wseq = collapseText(firstNonEmptyText(item.wseq, item.tseq));
            if (!wseq) return [];
            return [{ path: 'project/work/view/pseq/' + encodeURIComponent(pseq) + '/wseq/' + encodeURIComponent(wseq), method: 'GET' }];
        }
        if (ptype === 't' || ptype === 'c') {
            var tseq = collapseText(firstNonEmptyText(item.tseq, item.wseq));
            if (!tseq) return [];
            return [{ path: 'project/ticket/view/pseq/' + encodeURIComponent(pseq) + '/tseq/' + encodeURIComponent(tseq), method: 'GET' }];
        }
        if (ptype === 'b') {
            var wseq2 = collapseText(firstNonEmptyText(item.wseq, item.tseq));
            var wrseq = collapseText(item.wrseq || '');
            if (!wseq2 || !wrseq) return [];
            return [{ path: 'project/pds/view/pseq/' + encodeURIComponent(pseq) + '/wseq/' + encodeURIComponent(wseq2) + '/wrseq/' + encodeURIComponent(wrseq), method: 'GET' }];
        }
        var taseq = collapseText(firstNonEmptyText(item.tseq, item.wseq));
        if (!taseq) return [];
        return [{ path: 'project/task/view/pseq/' + encodeURIComponent(pseq) + '/taseq/' + encodeURIComponent(taseq), method: 'GET' }];
    }

    function extractBoardShortId(value) {
        var text = collapseText(value || '');
        if (!text) return '';
        var parts = text.split('_');
        if (parts.length < 2) return text;
        return collapseText(parts[parts.length - 1] || '');
    }

    function extractBoardUcn(value) {
        var text = collapseText(value || '');
        if (!text) return '';
        var parts = text.split('_');
        if (parts.length < 2) return '';
        return collapseText(parts[0] || '');
    }

    function buildBoardCanonicalId(row) {
        var item = row || {};
        var explicitId = collapseText(firstNonEmptyText(item.id, item.bid));
        if (explicitId && explicitId.indexOf('_') > -1) return explicitId;
        var brdseq = collapseText(firstNonEmptyText(item.brdseq, item.bid, explicitId));
        var ucn = collapseText(firstNonEmptyText(item.ucn, item.cn));
        if (ucn && brdseq) return ucn + '_' + brdseq;
        return explicitId || brdseq;
    }

    function isMatchingBoardTargetId(targetId, row) {
        var target = collapseText(targetId || '');
        if (!target) return false;
        var canonicalId = buildBoardCanonicalId(row);
        if (canonicalId && canonicalId === target) return true;
        var targetShortId = extractBoardShortId(target);
        var rowShortId = extractBoardShortId(canonicalId || (row && row.brdseq) || '');
        return !!(targetShortId && rowShortId && targetShortId === rowShortId);
    }

    function resolveBoardTargetRow(params, rows) {
        var targetId = collapseText(params && params.id ? params.id : '');
        if (!targetId) return null;
        var targetFolder = collapseText(firstNonEmptyText(params && params.folder, params && params.btype));
        var list = Array.isArray(rows) ? rows : [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i] || {};
            if (!isMatchingBoardTargetId(targetId, row)) continue;
            if (targetFolder && collapseText(firstNonEmptyText(row.btype, row.folder)) !== targetFolder) continue;
            return {
                id: buildBoardCanonicalId(row),
                brdseq: extractBoardShortId(buildBoardCanonicalId(row) || row.brdseq),
                ucn: collapseText(firstNonEmptyText(row.ucn, row.cn, extractBoardUcn(buildBoardCanonicalId(row)))),
                btype: collapseText(firstNonEmptyText(row.btype, row.folder)),
                subject: firstNonEmptyText(row.subject, row.title),
                writer: firstNonEmptyText(row.writer, row.regname, row.username),
                date: firstNonEmptyText(row.date, row.regdate, row.time),
                isSecure: !!(row.isSecure || row.is_secret || row.is_secure || row.secure)
            };
        }
        if (!targetFolder) return null;
        return {
            id: buildBoardCanonicalId({ id: targetId }),
            brdseq: extractBoardShortId(targetId),
            ucn: extractBoardUcn(targetId),
            btype: targetFolder
        };
    }

    function buildBoardViewRequests(row) {
        var item = row || {};
        var folder = collapseText(firstNonEmptyText(item.btype, item.folder));
        var id = buildBoardCanonicalId(item);
        if (!folder || !id) return [];
        return [{
            path: 'board/board/view/',
            method: 'GET',
            query: {
                folder: folder,
                id: id,
                reply_tree: 'true',
                lazy_load_reply: '1'
            }
        }];
    }

    function buildTodoViewRequests(row) {
        var item = row || {};
        var mode = normalizeTodoModeValue(item.mode);
        var seqNo = collapseText(item.tdseq || '');
        if (!seqNo) return [];
        var seqCode = collapseText(item.seqCode || '');
        if (!seqCode && seqNo.indexOf('_') > -1) {
            var parts = seqNo.split('_');
            seqCode = parts.length > 1 ? collapseText(parts[1] || '') : '';
        }
        var modeCandidates = mode ? [mode] : ['my', 'get', 'send', 'read'];
        var out = [];
        var i;
        for (i = 0; i < modeCandidates.length; i++) {
            out.push({
                path: 'todo/todo/todo_view',
                method: 'GET',
                query: {
                    mode: modeCandidates[i],
                    seqNo: seqNo,
                    seqCode: seqCode,
                    lazyLoadTarget: 1
                }
            });
        }
        return out;
    }

    function buildContactViewRequests(row) {
        var item = row || {};
        var seqno = collapseText(item.seqno || '');
        if (!seqno) return [];
        var idCandidates = [];
        var seen = {};
        var userInfo = resolveSessionUserInfo();
        var defaultCn = userInfo.sessionCn || '1';
        var defaultIds = [
            firstNonEmptyText(item.id, item.addrseq, item.atype),
            firstNonEmptyText(item.cn, defaultCn) + '_' + firstNonEmptyText(item.groupno, item.group_no),
            'my_' + defaultCn,
            'comp_' + defaultCn,
            'share_' + defaultCn,
            'org_0'
        ];
        var i;
        for (i = 0; i < defaultIds.length; i++) {
            var id = collapseText(defaultIds[i] || '');
            if (!id || seen[id]) continue;
            seen[id] = true;
            idCandidates.push(id);
        }
        var out = [];
        for (i = 0; i < idCandidates.length; i++) {
            out.push({
                path: 'addrbook/contact/write/id/' + encodeURIComponent(idCandidates[i]) + '/seqno/' + encodeURIComponent(seqno) + '/mode/view',
                method: 'GET'
            });
        }
        return out;
    }

    function buildHelpdeskViewRequests(row) {
        var item = row || {};
        var ticketId = collapseText(item.ticketId || '');
        if (!ticketId) return [];
        var cn = firstNonEmptyText(item.cn, resolveSessionUserInfo().sessionCn, '1');
        return [{
            path: 'helpdesk/tickets/' + encodeURIComponent(cn) + '/' + encodeURIComponent(ticketId),
            method: 'GET'
        }];
    }

    function fetchMenuDetailFromBuilder(row, requestBuilder, abortSignal) {
        if (typeof requestBuilder !== 'function') return Promise.resolve('');
        return fetchMenuDetailTextByDescriptors(requestBuilder(row), abortSignal);
    }

    function fetchApprovalDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildApprovalViewRequests, abortSignal);
    }

    function fetchReportDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildReportViewRequests, abortSignal);
    }

    function fetchCalendarDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildCalendarViewRequests, abortSignal);
    }

    function fetchProjectDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildProjectViewRequests, abortSignal);
    }

    function fetchBoardDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildBoardViewRequests, abortSignal);
    }

    function fetchTodoDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildTodoViewRequests, abortSignal);
    }

    function fetchContactDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildContactViewRequests, abortSignal);
    }

    function fetchHelpdeskDetailText(row, abortSignal) {
        return fetchMenuDetailFromBuilder(row, buildHelpdeskViewRequests, abortSignal);
    }

    function buildGenericMenuContextResult(listTitle, detailTitle, fieldDefs, rows, keyword, sourceUrl, needDetail, maxItems, fetchDetailFn, abortSignal) {
        var list = Array.isArray(rows) ? rows : [];
        var listContext = buildGenericMenuListSnapshotContext(listTitle, list, keyword, sourceUrl, maxItems, fieldDefs);
        if (!needDetail || !list.length || typeof fetchDetailFn !== 'function') {
            return Promise.resolve({
                context: listContext,
                reason: list.length ? '' : 'no_context',
                stats: { keyword: keyword, customer_rows: list.length, activity_rows: 0 }
            });
        }
        return buildMenuDetailSnapshotContext(detailTitle, list, fetchDetailFn, abortSignal, Math.min(maxItems, MAX_MENU_DETAIL_ITEMS))
            .then(function (detailContext) {
                return {
                    context: detailContext ? (listContext + '\n\n' + detailContext) : listContext,
                    reason: list.length ? '' : 'no_context',
                    stats: {
                        keyword: keyword,
                        customer_rows: list.length,
                        activity_rows: detailContext ? Math.min(list.length, maxItems) : 0
                    }
                };
            });
    }

    function parseNonNegativeIntValue(rawValue, fallbackValue) {
        var parsed = parseInt(rawValue, 10);
        if (isNaN(parsed) || parsed < 0) return fallbackValue;
        return parsed;
    }

    function parsePositiveIntValue(rawValue, fallbackValue) {
        var parsed = parseInt(rawValue, 10);
        if (isNaN(parsed) || parsed < 1) return fallbackValue;
        return parsed;
    }

    function parseFirstPositiveIntFromKeys(obj, keys, fallbackValue) {
        var row = (obj && typeof obj === 'object' && !Array.isArray(obj)) ? obj : {};
        var names = Array.isArray(keys) ? keys : [];
        var i;
        for (i = 0; i < names.length; i++) {
            var key = names[i];
            if (!key || !Object.prototype.hasOwnProperty.call(row, key)) continue;
            var parsed = parseInt(row[key], 10);
            if (isNaN(parsed) || parsed < 1) continue;
            return parsed;
        }
        return fallbackValue;
    }

    function parseExplicitBooleanLike(rawValue) {
        if (typeof rawValue === 'boolean') return rawValue;
        if (typeof rawValue === 'number') {
            if (rawValue === 1) return true;
            if (rawValue === 0) return false;
            return null;
        }
        var text = collapseText(rawValue || '').toLowerCase();
        if (!text) return null;
        if (text === '1' || text === 'y' || text === 'yes' || text === 'true' || text === 't') return true;
        if (text === '0' || text === 'n' || text === 'no' || text === 'false' || text === 'f') return false;
        return null;
    }

    function resolveHasNextPageFromPayload(payload, currentPage, pageSize, currentOffset, rowsLength) {
        var out = {
            known: false,
            hasNext: false,
            inferred: false,
            totalPages: 0,
            totalItems: 0
        };
        if (!payload || typeof payload !== 'object') return out;

        var candidates = [];
        function addCandidate(value) {
            if (!value || typeof value !== 'object' || Array.isArray(value)) return;
            if (candidates.indexOf(value) >= 0) return;
            candidates.push(value);
        }

        addCandidate(payload);
        addCandidate(payload.pagination);
        addCandidate(payload.paging);
        addCandidate(payload.page_info);
        addCandidate(payload.pageInfo);
        addCandidate(payload.meta);
        addCandidate(payload.data);
        if (payload.data && typeof payload.data === 'object') {
            addCandidate(payload.data.pagination);
            addCandidate(payload.data.paging);
            addCandidate(payload.data.meta);
        }
        addCandidate(payload.result);
        if (payload.result && typeof payload.result === 'object') {
            addCandidate(payload.result.pagination);
            addCandidate(payload.result.paging);
            addCandidate(payload.result.meta);
        }

        var boolKeys = ['has_next', 'hasNext', 'has_more', 'hasMore', 'more', 'is_next', 'isNext'];
        var i;
        var j;
        for (i = 0; i < candidates.length; i++) {
            var row = candidates[i] || {};
            for (j = 0; j < boolKeys.length; j++) {
                var boolKey = boolKeys[j];
                if (!Object.prototype.hasOwnProperty.call(row, boolKey)) continue;
                var boolValue = parseExplicitBooleanLike(row[boolKey]);
                if (boolValue === null) continue;
                out.known = true;
                out.hasNext = boolValue;
                return out;
            }
        }

        var nextKeys = ['next_page', 'nextPage', 'next_page_url', 'nextPageUrl', 'next_url', 'nextUrl', 'next_cursor', 'nextCursor'];
        for (i = 0; i < candidates.length; i++) {
            row = candidates[i] || {};
            for (j = 0; j < nextKeys.length; j++) {
                var nextKey = nextKeys[j];
                if (!Object.prototype.hasOwnProperty.call(row, nextKey)) continue;
                var nextValue = collapseText(row[nextKey] || '');
                if (!nextValue) {
                    out.known = true;
                    out.hasNext = false;
                    return out;
                }
                if (nextValue === '0') {
                    out.known = true;
                    out.hasNext = false;
                    return out;
                }
                out.known = true;
                out.hasNext = true;
                return out;
            }
        }

        var pageKeys = ['current_page', 'currentPage', 'curPage', 'page', 'page_no', 'pageNo', 'pageno', 'now_page', 'nowPage'];
        var totalPagesKeys = ['total_page', 'total_pages', 'totalPage', 'totalPages', 'last_page', 'lastPage', 'max_page', 'maxPage', 'page_count', 'pageCount'];
        var totalItemsKeys = ['total', 'total_count', 'totalCount', 'recordsTotal', 'all_count', 'allCount'];
        var pageSizeKeys = ['per_page', 'perPage', 'limit', 'page_size', 'pageSize', 'num_page', 'to', 'rows', 'rownum'];
        var offsetKeys = ['offset', 'start', 'from', 'skip'];

        for (i = 0; i < candidates.length; i++) {
            row = candidates[i] || {};
            var totalPages = parseFirstPositiveIntFromKeys(row, totalPagesKeys, 0);
            var current = parseFirstPositiveIntFromKeys(row, pageKeys, currentPage);
            if (totalPages > 0 && current > 0) {
                out.known = true;
                out.hasNext = current < totalPages;
                out.totalPages = totalPages;
                return out;
            }
        }

        for (i = 0; i < candidates.length; i++) {
            row = candidates[i] || {};
            var totalItems = parseFirstPositiveIntFromKeys(row, totalItemsKeys, 0);
            if (totalItems < 1) continue;
            var perPage = parseFirstPositiveIntFromKeys(row, pageSizeKeys, pageSize > 0 ? pageSize : 0);
            if (perPage < 1) continue;
            current = parseFirstPositiveIntFromKeys(row, pageKeys, currentPage);
            if (current < 1) current = currentPage;
            if (current < 1) current = 1;
            out.known = true;
            out.hasNext = (current * perPage) < totalItems;
            out.totalItems = totalItems;
            return out;
        }

        for (i = 0; i < candidates.length; i++) {
            row = candidates[i] || {};
            totalItems = parseFirstPositiveIntFromKeys(row, totalItemsKeys, 0);
            if (totalItems < 1) continue;
            var offset = parseNonNegativeIntValue(
                firstNonEmptyText(
                    Object.prototype.hasOwnProperty.call(row, 'offset') ? row.offset : '',
                    Object.prototype.hasOwnProperty.call(row, 'start') ? row.start : '',
                    Object.prototype.hasOwnProperty.call(row, 'from') ? row.from : '',
                    Object.prototype.hasOwnProperty.call(row, 'skip') ? row.skip : ''
                ),
                currentOffset
            );
            if (offset < 0) offset = currentOffset;
            var consumed = offset + Math.max(parseNonNegativeIntValue(rowsLength, 0), 0);
            if (consumed < 0) consumed = 0;
            out.known = true;
            out.hasNext = consumed < totalItems;
            out.totalItems = totalItems;
            return out;
        }

        var normalizedPageSize = parsePositiveIntValue(pageSize, 0);
        var normalizedRowsLength = parseNonNegativeIntValue(rowsLength, 0);
        if (normalizedPageSize > 0 && normalizedRowsLength >= normalizedPageSize) {
            // Fallback heuristic: full page usually means there may be a next page.
            out.known = true;
            out.hasNext = true;
            out.inferred = true;
            return out;
        }

        return out;
    }

    function resolveBrowserPagedScanConfig(params, maxItems) {
        var row = (params && typeof params === 'object' && !Array.isArray(params)) ? params : {};
        var requestedLimit = firstNonEmptyText(
            row.limit,
            row.page_size,
            row.pageSize,
            row.per_page,
            row.num_page,
            row.to
        );
        var pageSize = parseInt(requestedLimit, 10);
        if (isNaN(pageSize) || pageSize < 1) pageSize = parseInt(maxItems, 10);
        if (isNaN(pageSize) || pageSize < 1) pageSize = 1;
        if (pageSize > 100) pageSize = 100;

        var rawStartPage = parseInt(row.page, 10);
        var rawStartOffset = parseInt(row.offset, 10);
        var startPage = 1;
        if (!isNaN(rawStartPage) && rawStartPage >= 1) {
            startPage = rawStartPage;
        } else if (!isNaN(rawStartOffset) && rawStartOffset >= 0) {
            startPage = Math.floor(rawStartOffset / pageSize) + 1;
        }

        var requestedMaxPages = parseInt(firstNonEmptyText(row.max_pages, row.maxPages), 10);
        var maxPages = DEFAULT_BROWSER_AUTO_SCAN_PAGES;
        if (!isNaN(requestedMaxPages) && requestedMaxPages > 0) {
            maxPages = requestedMaxPages;
        }
        if (startPage > 1 && (isNaN(requestedMaxPages) || requestedMaxPages < 1)) {
            maxPages = 1;
        }
        if (maxPages < 1) maxPages = 1;
        if (maxPages > MAX_BROWSER_AUTO_SCAN_PAGES) maxPages = MAX_BROWSER_AUTO_SCAN_PAGES;

        return {
            pageSize: pageSize,
            startPage: startPage,
            startOffset: (startPage - 1) * pageSize,
            maxPages: maxPages
        };
    }

    function fetchPagedRowsByRequests(buildRequestsForPage, normalizeRowsFn, params, maxItems, abortSignal, progress, menuLabel) {
        var buildRequests = (typeof buildRequestsForPage === 'function') ? buildRequestsForPage : function () { return []; };
        var normalize = (typeof normalizeRowsFn === 'function') ? normalizeRowsFn : function () { return []; };
        var config = resolveBrowserPagedScanConfig(params, maxItems);
        var pageIndex = 0;
        var lastSourceUrl = '';
        var lastPayload = null;
        var label = collapseText(menuLabel || actionPlanMenuText(''));

        progress(
            trf('assistant_notice_collection_ajax_list_start', {
                label: label,
                limit: config.pageSize,
                start_page: config.startPage,
                max_pages: config.maxPages
            }),
            'detailed'
        );

        function buildScanResult(rows, sourceUrl, payload, scannedPages, lastPage, lastOffset, paging) {
            var rowList = Array.isArray(rows) ? rows : [];
            var scanned = parseNonNegativeIntValue(scannedPages, 0);
            var finalPage = parsePositiveIntValue(lastPage, config.startPage);
            var finalOffset = parseNonNegativeIntValue(lastOffset, (finalPage - 1) * config.pageSize);
            var pageInfo = (paging && typeof paging === 'object') ? paging : {};
            return {
                rows: rowList,
                sourceUrl: sourceUrl || '',
                payload: payload || null,
                scannedPages: scanned,
                startPage: config.startPage,
                lastPage: finalPage,
                startOffset: config.startOffset,
                lastOffset: finalOffset,
                pageSize: config.pageSize,
                maxPages: config.maxPages,
                hasNextPageKnown: !!pageInfo.known,
                hasNextPage: !!pageInfo.hasNext,
                hasNextPageInferred: !!pageInfo.inferred,
                totalPages: parsePositiveIntValue(pageInfo.totalPages, 0),
                totalItems: parsePositiveIntValue(pageInfo.totalItems, 0)
            };
        }

        function runPageScan() {
            var aborted = rejectIfAborted(abortSignal);
            if (aborted) return aborted;

            if (pageIndex >= config.maxPages) {
                var maxLastPage = config.startPage + ((config.maxPages > 0 ? config.maxPages : 1) - 1);
                var maxLastOffset = (maxLastPage - 1) * config.pageSize;
                return Promise.resolve(buildScanResult([], lastSourceUrl, lastPayload, config.maxPages, maxLastPage, maxLastOffset, {
                    known: false,
                    hasNext: false,
                    totalPages: 0,
                    totalItems: 0
                }));
            }

            var currentPage = config.startPage + pageIndex;
            var currentOffset = (currentPage - 1) * config.pageSize;
            var requests = buildRequests(currentPage, config.pageSize, currentOffset);
            if (!Array.isArray(requests) || !requests.length) {
                var prevPage = currentPage > config.startPage ? currentPage - 1 : config.startPage;
                var prevOffset = (prevPage - 1) * config.pageSize;
                return Promise.resolve(buildScanResult([], lastSourceUrl, lastPayload, pageIndex, prevPage, prevOffset, {
                    known: false,
                    hasNext: false,
                    totalPages: 0,
                    totalItems: 0
                }));
            }

            progress(trf('assistant_notice_collection_page_scan', {
                label: label,
                page: currentPage,
                scan_index: pageIndex + 1,
                max_pages: config.maxPages,
                offset: currentOffset,
                limit: config.pageSize
            }), 'detailed');

            return fetchSearchRowsByRequests(requests, normalize, abortSignal).then(function (result) {
                var rows = Array.isArray(result && result.rows) ? result.rows : [];
                if (result && result.sourceUrl) lastSourceUrl = result.sourceUrl;
                if (result && result.payload) lastPayload = result.payload;
                var scannedPages = pageIndex + 1;
                var paging = resolveHasNextPageFromPayload(
                    result && result.payload,
                    currentPage,
                    config.pageSize,
                    currentOffset,
                    rows.length
                );
                if (rows.length) {
                    progress(trf('assistant_notice_collection_list_result', {
                        label: label,
                        rows: rows.length,
                        page: currentPage
                    }), 'detailed');
                    return buildScanResult(
                        rows,
                        (result && result.sourceUrl) ? result.sourceUrl : lastSourceUrl,
                        (result && result.payload) ? result.payload : lastPayload,
                        scannedPages,
                        currentPage,
                        currentOffset,
                        paging
                    );
                }
                progress(trf('assistant_notice_collection_page_empty', {
                    label: label,
                    page: currentPage,
                    offset: currentOffset
                }), 'detailed');
                if (!paging.known || !paging.hasNext) {
                    return buildScanResult(
                        [],
                        (result && result.sourceUrl) ? result.sourceUrl : lastSourceUrl,
                        (result && result.payload) ? result.payload : lastPayload,
                        scannedPages,
                        currentPage,
                        currentOffset,
                        paging
                    );
                }
                pageIndex += 1;
                return runPageScan();
            });
        }

        return runPageScan();
    }

    function attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanMeta) {
        var out = (ctxResult && typeof ctxResult === 'object') ? ctxResult : {
            context: '',
            reason: 'no_context',
            stats: { keyword: keyword || '', customer_rows: 0, activity_rows: 0 }
        };
        var list = Array.isArray(rows) ? rows : [];
        var scan = (scanMeta && typeof scanMeta === 'object') ? scanMeta : {};
        var pageSize = parseInt(scan.pageSize, 10);
        if (isNaN(pageSize) || pageSize < 1) pageSize = 1;
        var startPage = parseInt(scan.startPage, 10);
        if (isNaN(startPage) || startPage < 1) startPage = 1;
        var lastPage = parseInt(scan.lastPage, 10);
        if (isNaN(lastPage) || lastPage < startPage) lastPage = startPage;
        var startOffset = parseInt(scan.startOffset, 10);
        if (isNaN(startOffset) || startOffset < 0) startOffset = (startPage - 1) * pageSize;
        var lastOffset = parseInt(scan.lastOffset, 10);
        if (isNaN(lastOffset) || lastOffset < 0) lastOffset = (lastPage - 1) * pageSize;
        var scannedPages = parseInt(scan.scannedPages, 10);
        if (isNaN(scannedPages) || scannedPages < 0) scannedPages = 0;
        var maxPages = parseInt(scan.maxPages, 10);
        if (isNaN(maxPages) || maxPages < 1) maxPages = DEFAULT_BROWSER_AUTO_SCAN_PAGES;
        var totalPages = parseInt(scan.totalPages, 10);
        if (isNaN(totalPages) || totalPages < 1) totalPages = 0;
        var totalItems = parseInt(scan.totalItems, 10);
        if (isNaN(totalItems) || totalItems < 1) totalItems = 0;
        var hasNextKnown = !!scan.hasNextPageKnown;
        var hasNextPage = !!scan.hasNextPage;
        var hasNextInferred = !!scan.hasNextPageInferred;

        var stats = (out.stats && typeof out.stats === 'object' && !Array.isArray(out.stats)) ? out.stats : {};
        stats.scanned_pages = scannedPages;
        stats.start_page = startPage;
        stats.last_page = lastPage;
        stats.start_offset = startOffset;
        stats.last_offset = lastOffset;
        stats.page_size = pageSize;
        if (hasNextKnown) stats.has_next_page = hasNextPage ? 1 : 0;
        if (hasNextInferred) stats.has_next_inferred = 1;
        if (totalPages > 0) stats.total_pages = totalPages;
        if (totalItems > 0) stats.total_items = totalItems;
        out.stats = stats;

        var nextParams = {
            page: lastPage + 1,
            offset: lastOffset + pageSize,
            limit: pageSize,
            page_size: pageSize,
            max_pages: maxPages
        };
        if (keyword) nextParams.keyword = keyword;

        if (hasNextKnown && hasNextPage) {
            out.next_page_params = nextParams;
            if (!list.length) out.retry_params = nextParams;
        }

        if (!list.length) {
            if (!out.reason) out.reason = 'no_context';
        }

        return out;
    }

    function buildAddrbookSearchBody(scopeId, keyword, maxItems, page) {
        var cleanScopeId = collapseText(scopeId || '');
        var cleanKeyword = collapseText(keyword || '');
        var perPage = parseInt(maxItems, 10);
        if (isNaN(perPage) || perPage < 1) perPage = 10;
        var currentPage = parseInt(page, 10);
        if (isNaN(currentPage) || currentPage < 1) currentPage = 1;
        var parts = [];
        var fields = [
            'name',
            'email',
            'mobile',
            'company',
            'phone',
            'dept',
            'localphone',
            'profile',
            'position',
            'address',
            'homepage',
            'custom_fields'
        ];

        function addPair(key, value) {
            if (value === null || typeof value === 'undefined') return;
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }

        addPair('per_page', perPage);
        addPair('all', 0);
        addPair('id', cleanScopeId);
        addPair('page', currentPage);
        addPair('type', 'page');
        addPair('filter', '');

        if (cleanKeyword) {
            var i;
            for (i = 0; i < fields.length; i++) {
                addPair('search[' + i + '][name]', fields[i]);
                addPair('search[' + i + '][keyword]', cleanKeyword);
            }
        }
        return parts.join('&');
    }

    function resolveMenuRequestedItems(params, fallback, cap) {
        var parsed = parseFirstPositiveIntFromKeys(params, ['max_items', 'maxItems'], fallback);
        if (isNaN(parsed) || parsed <= 0) parsed = fallback;
        if (parsed > cap) parsed = cap;
        if (parsed < 1) parsed = 1;
        return parsed;
    }

    function buildWhisperListSnapshotContext(rows, keyword, sourceUrl, maxItems) {
        var list = Array.isArray(rows) ? rows : [];
        var out = [];
        out.push('[Whisper list snapshot (쪽지 목록)]');
        if (sourceUrl) out.push('source=' + escapeTextForContext(buildHumanReadableUrlLabel(sourceUrl)));
        if (keyword) out.push('keyword=' + escapeTextForContext(keyword));
        out.push('rows=' + list.length);
        if (!list.length) return out.join('\n');
        out.push('items:');
        var i;
        var limit = Math.min(list.length, maxItems);
        for (i = 0; i < limit; i++) {
            var row = list[i] || {};
            var line = (i + 1) + '. id=' + escapeTextForContext(row.uniqueId || '')
                + '; box=' + escapeTextForContext(row.box || '')
                + '; 제목=' + escapeTextForContext(row.subject || '(제목 없음)');
            if (row.writer) line += '; 작성자=' + escapeTextForContext(row.writer);
            if (row.date) line += '; 일시=' + escapeTextForContext(row.date);
            out.push(line);
        }
        return out.join('\n');
    }

    function buildCircularListSnapshotContext(rows, keyword, sourceUrl, maxItems) {
        var list = Array.isArray(rows) ? rows : [];
        var out = [];
        out.push('[Circular list snapshot (회람 목록)]');
        if (sourceUrl) out.push('source=' + escapeTextForContext(buildHumanReadableUrlLabel(sourceUrl)));
        if (keyword) out.push('keyword=' + escapeTextForContext(keyword));
        out.push('rows=' + list.length);
        if (!list.length) return out.join('\n');
        out.push('items:');
        var i;
        var limit = Math.min(list.length, maxItems);
        for (i = 0; i < limit; i++) {
            var row = list[i] || {};
            var line = (i + 1) + '. id=' + escapeTextForContext(row.cdseq || '')
                + '; box=' + escapeTextForContext(row.box || '')
                + '; 제목=' + escapeTextForContext(row.subject || '(제목 없음)');
            if (row.writer) line += '; 작성자=' + escapeTextForContext(row.writer);
            if (row.date) line += '; 일시=' + escapeTextForContext(row.date);
            out.push(line);
        }
        return out.join('\n');
    }

    function extractMenuDetailText(payload, rawText) {
        var row = payload && typeof payload === 'object' ? payload : {};
        var candidates = [
            row.content, row.contents, row.body, row.message, row.memo, row.text, row.msg,
            row.html, row.description,
            row.data && row.data.content, row.data && row.data.contents, row.data && row.data.body
        ];
        var i;
        for (i = 0; i < candidates.length; i++) {
            var text = normalizeCollectedBrowserContextText(candidates[i] || '');
            if (text) return truncateStructuredText(text, MAX_MENU_DETAIL_CHARS);
        }
        var raw = String(rawText || '');
        var plain = normalizeCollectedBrowserContextText(raw);
        return plain ? truncateStructuredText(plain, MAX_MENU_DETAIL_CHARS) : '';
    }

    function fetchWhisperDetailText(row, abortSignal) {
        var item = row || {};
        var uniqueId = collapseText(item.uniqueId || '');
        if (!uniqueId) return Promise.resolve('');
        var box = collapseText(item.box || 'inbox').toLowerCase();
        var descriptors = [
            { path: 'whisper/main/view', method: 'POST', body: { type: box, param: uniqueId, format: 'html' } },
            { path: 'whisper/main/view', method: 'POST', body: { type: box, param: uniqueId } },
            { path: 'whisper/main/view_target', method: 'POST', body: { type: box, param: uniqueId } }
        ];
        var idx = 0;
        function tryNext() {
            if (idx >= descriptors.length) return Promise.resolve('');
            return fetchMenuRawWithFallback(descriptors[idx++], abortSignal)
                .then(function (bundle) {
                    if (!bundle) return tryNext();
                    var text = extractMenuDetailText(bundle.payload, bundle.raw);
                    if (text) return text;
                    return tryNext();
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext();
                });
        }
        return tryNext();
    }

    function fetchCircularDetailText(row, abortSignal) {
        var item = row || {};
        var id = collapseText(item.cdseq || '');
        if (!id) return Promise.resolve('');
        var type = normalizeCircularListType(item.box || '') || 'received';
        var descriptor = {
            path: 'circular/main/view',
            method: 'POST',
            body: { type: type, id: id, folderId: '' }
        };
        return fetchMenuRawWithFallback(descriptor, abortSignal)
            .then(function (bundle) {
                if (!bundle) return '';
                return extractMenuDetailText(bundle.payload, bundle.raw);
            })
            .catch(function (err) {
                if (isAbortRequestError(err)) return Promise.reject(err);
                return '';
            });
    }

    function buildMenuDetailSnapshotContext(title, rows, fetchDetailFn, abortSignal, maxItems) {
        var list = Array.isArray(rows) ? rows.slice(0, maxItems) : [];
        if (!list.length || typeof fetchDetailFn !== 'function') return Promise.resolve('');
        return mapWithConcurrency(list, 3, function (row) {
            return fetchDetailFn(row, abortSignal).then(function (text) {
                return {
                    row: row || {},
                    text: normalizeCollectedBrowserContextText(text || '')
                };
            });
        }, abortSignal).then(function (details) {
            var out = [];
            var i;
            var count = 0;
            for (i = 0; i < details.length; i++) {
                var item = details[i] || {};
                if (!item.text) continue;
                count += 1;
                if (count === 1) out.push('[' + title + ' detail snapshot]');
                var row = item.row || {};
                var subject = escapeTextForContext(row.subject || '(제목 없음)');
                out.push(count + '. 제목=' + subject);
                out.push('내용:');
                out.push(item.text);
            }
            return out.join('\n');
        });
    }

    function pushWhisperListRequestVariants(out, box, keyword, limit, includeRelaxed, page) {
        var requests = Array.isArray(out) ? out : [];
        var kw = collapseText(keyword || '');
        var currentPage = parseInt(page, 10);
        if (isNaN(currentPage) || currentPage < 1) currentPage = 1;
        var i;
        var variants = [
            { query: null, includeBigdataFlags: false, unread: false },
            { query: { type: box }, includeBigdataFlags: false, unread: false },
            { query: null, includeBigdataFlags: true, unread: false }
        ];
        if (!kw) {
            variants.push({ query: null, includeBigdataFlags: false, unread: true });
        }
        if (includeRelaxed && kw) {
            variants.push({ query: null, includeBigdataFlags: false, unread: false, searchtext: '' });
            variants.push({ query: { type: box }, includeBigdataFlags: false, unread: false, searchtext: '' });
        }
        for (i = 0; i < variants.length; i++) {
            var variant = variants[i] || {};
            var searchText = typeof variant.searchtext === 'string' ? variant.searchtext : kw;
            var body = {
                type: box,
                page: currentPage,
                limit: limit,
                sortby: '',
                sorttype: '',
                searchtype: searchText ? 'all' : '',
                searchtext: searchText,
                startdate: '',
                enddate: '',
                unread: !!variant.unread,
                format: 'plain-text',
                favorite: false,
                has_file: false
            };
            if (variant.includeBigdataFlags) {
                body.not_count_unread = 1;
                body.not_prev_next = 1;
            }
            var descriptor = {
                path: 'whisper/main/list',
                method: 'POST',
                body: body
            };
            if (variant.query) descriptor.query = variant.query;
            requests.push(descriptor);
        }
    }

    function fetchWhisperMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 80);
        var boxes = resolveWhisperBoxesFromPrompt(prompt || '');
        var scanItems = Math.max(maxItems, 15);
        var scopeLabel = boxes.join(',');
        var menuLabel = actionPlanMenuText('whisper');
        progress(
            trf('assistant_notice_collection_scope_boxes', {
                label: menuLabel,
                boxes: scopeLabel,
                keyword: keyword || '(none)'
            }),
            'detailed'
        );
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                var fetchLimit = Math.max(pageSize, 15);
                for (i = 0; i < boxes.length; i++) {
                    pushWhisperListRequestVariants(requests, boxes[i], keyword, fetchLimit, true, pageNo);
                }
                return requests;
            },
            normalizeWhisperSearchRows,
            params,
            scanItems,
            abortSignal,
            progress,
            menuLabel
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            var listContext = buildWhisperListSnapshotContext(rows, keyword, sourceUrl, maxItems);
            if (!needDetail || !rows.length) {
                return attachPagedScanMetaToCollectionResult({
                    context: listContext,
                    reason: rows.length ? '' : 'no_context',
                    stats: { keyword: keyword, customer_rows: rows.length, activity_rows: 0 }
                }, rows, keyword, scanResult);
            }
            progress(trf('assistant_notice_collection_detail_fetch_start', {
                label: menuLabel,
                items: Math.min(rows.length, maxItems)
            }), 'detailed');
            return buildMenuDetailSnapshotContext('Whisper', rows, fetchWhisperDetailText, abortSignal, Math.min(maxItems, MAX_MENU_DETAIL_ITEMS))
                .then(function (detailContext) {
                    return attachPagedScanMetaToCollectionResult({
                        context: detailContext ? (listContext + '\n\n' + detailContext) : listContext,
                        reason: rows.length ? '' : 'no_context',
                        stats: {
                            keyword: keyword,
                            customer_rows: rows.length,
                            activity_rows: detailContext ? Math.min(rows.length, maxItems) : 0
                        }
                    }, rows, keyword, scanResult);
                });
        });
    }

    function fetchCircularMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 80);
        var types = resolveCircularSearchTypesFromPrompt(prompt || '');
        var menuLabel = actionPlanMenuText('circular');
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < types.length; i++) {
                    requests.push({
                        path: 'circular/main/list',
                        method: 'POST',
                        query: { type: types[i] },
                        body: {
                            type: types[i],
                            limit: pageSize,
                            curPage: pageNo,
                            keyword: keyword,
                            stdate: '',
                            eddate: '',
                            isread: '',
                            folderId: '',
                            sortby: 'regdate',
                            sorttype: 'desc'
                        }
                    });
                }
                return requests;
            },
            normalizeCircularSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            menuLabel
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            var listContext = buildCircularListSnapshotContext(rows, keyword, sourceUrl, maxItems);
            if (!needDetail || !rows.length) {
                return attachPagedScanMetaToCollectionResult({
                    context: listContext,
                    reason: rows.length ? '' : 'no_context',
                    stats: { keyword: keyword, customer_rows: rows.length, activity_rows: 0 }
                }, rows, keyword, scanResult);
            }
            progress(trf('assistant_notice_collection_detail_fetch_start', {
                label: menuLabel,
                items: Math.min(rows.length, maxItems)
            }), 'detailed');
            return buildMenuDetailSnapshotContext('Circular', rows, fetchCircularDetailText, abortSignal, Math.min(maxItems, MAX_MENU_DETAIL_ITEMS))
                .then(function (detailContext) {
                    return attachPagedScanMetaToCollectionResult({
                        context: detailContext ? (listContext + '\n\n' + detailContext) : listContext,
                        reason: rows.length ? '' : 'no_context',
                        stats: {
                            keyword: keyword,
                            customer_rows: rows.length,
                            activity_rows: detailContext ? Math.min(rows.length, maxItems) : 0
                        }
                    }, rows, keyword, scanResult);
                });
        });
    }

    function fetchApprovalMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var scopePlan = buildApprovalSearchScopes(params || {}, prompt || '');
        var scopes = scopePlan && Array.isArray(scopePlan.scopes) ? scopePlan.scopes : [];
        var strictScope = !!(scopePlan && scopePlan.strict);
        var scopeSource = scopePlan && scopePlan.source ? collapseText(scopePlan.source) : 'default';
        if (!scopes.length) {
            scopes = [{ type: 'progress', id: 'ireq' }];
        }
        var i;
        var scopeLabels = [];
        for (i = 0; i < scopes.length; i++) {
            scopeLabels.push(scopes[i].type + '/' + scopes[i].id);
        }
        progress(
            trf('assistant_notice_approval_ajax_list_start', {
                scopes: scopeLabels.join(', '),
                limit: maxItems,
                strict: strictScope ? 'yes' : 'no',
                source: scopeSource
            }),
            'detailed'
        );
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < scopes.length; i++) {
                    var scope = scopes[i];
                    requests.push({
                        path: 'approval/approval/list/' + scope.type + '/' + scope.id,
                        method: 'GET',
                        query: {
                            type: scope.type,
                            id: scope.id,
                            page: pageNo,
                            per_page: pageSize,
                            search: 'subject',
                            keyword: keyword,
                            term: 'and'
                        }
                    });
                }
                return requests;
            },
            normalizeApprovalSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('approval')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Approval (전자결재)',
                'Approval',
                [
                    { key: 'scopeType', label: 'scope_type' },
                    { key: 'scopeId', label: 'scope_id' },
                    { key: 'docNo', label: 'docNo' },
                    { key: 'subject', label: '제목' },
                    { key: 'writer', label: '기안자' },
                    { key: 'date', label: '일시' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchApprovalDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchReportMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var listTargets = [
            { module: 'report', mode: 'pdefault', type: 'my', id: 'default' },
            { module: 'report', mode: 'rdefault', type: 'recv', id: 'default' },
            { module: 'diary', mode: 'pdefault', type: 'my', id: 'default' },
            { module: 'diary', mode: 'gdefault', type: 'dept', id: 'default' }
        ];
        progress(trf('assistant_notice_collection_scope_count', {
            label: actionPlanMenuText('report'),
            scope: listTargets.length
        }), 'detailed');
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < listTargets.length; i++) {
                    var target = listTargets[i];
                    requests.push({
                        path: target.module + '/' + target.module + '/list/page/' + pageNo,
                        method: 'GET',
                        query: {
                            type: target.type,
                            id: target.id,
                            mode: target.mode,
                            keyword: keyword,
                            num_page: pageSize
                        }
                    });
                }
                return requests;
            },
            normalizeReportSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('report')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Report (업무보고)',
                'Report',
                [
                    { key: 'type', label: 'type' },
                    { key: 'mode', label: 'mode' },
                    { key: 'tdseq', label: 'seqNo' },
                    { key: 'subject', label: '제목' },
                    { key: 'writer', label: '작성자' },
                    { key: 'date', label: '일시' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchReportDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchScheduleMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                return [
                    {
                        path: 'calendar/view/calendar_search',
                        method: 'GET',
                        query: {
                            ctype: 'all',
                            keyword: keyword,
                            page: pageNo,
                            to: pageSize
                        }
                    },
                    {
                        path: 'calendar/view/calendar_search',
                        method: 'GET',
                        query: {
                            ctype: 'mycal',
                            keyword: keyword,
                            page: pageNo,
                            to: pageSize
                        }
                    }
                ];
            },
            normalizeCalendarSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('schedule')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Schedule (일정)',
                'Schedule',
                [
                    { key: 'calseq', label: 'calseq' },
                    { key: 'subject', label: '제목' },
                    { key: 'start', label: '시작' },
                    { key: 'end', label: '종료' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchCalendarDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchProjectMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                return [
                    {
                        path: 'project/project/search',
                        method: 'POST',
                        body: {
                            ptype: 'a',
                            keyword: keyword,
                            lable: '',
                            page: pageNo,
                            limit: pageSize
                        }
                    },
                    {
                        path: 'project/project/search',
                        method: 'POST',
                        body: {
                            ptype: 'p',
                            keyword: keyword,
                            lable: '',
                            page: pageNo,
                            limit: pageSize
                        }
                    },
                    {
                        path: 'projectnew/project/list',
                        method: 'POST',
                        body: {
                            page: pageNo,
                            limit: pageSize,
                            keyword: keyword
                        }
                    }
                ];
            },
            normalizeProjectSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('project')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Project (프로젝트)',
                'Project',
                [
                    { key: 'ptype', label: 'ptype' },
                    { key: 'pseq', label: 'pseq' },
                    { key: 'subject', label: '제목' },
                    { key: 'writer', label: '작성자' },
                    { key: 'date', label: '일시' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchProjectDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchBoardMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var targetId = collapseText(params && params.id ? params.id : '');
        var scanKeyword = targetId ? '' : keyword;
        var userInfo = resolveSessionUserInfo();
        var cn = userInfo.sessionCn || '1';
        var scopes = [
            { folder: 'comp_' + cn, type: 'comp' },
            { folder: 'my_' + cn, type: 'my' },
            { folder: 'share_' + cn, type: 'share' },
            { folder: 'dept_' + cn, type: 'dept' },
            { folder: 'dept_0', type: 'dept' }
        ];
        var i;
        progress(trf('assistant_notice_collection_scope_count', {
            label: actionPlanMenuText('board'),
            scope: scopes.length
        }), 'detailed');
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < scopes.length; i++) {
                    requests.push({
                        path: 'board/board/index',
                        method: 'GET',
                        query: {
                            folder: scopes[i].folder,
                            type: scopes[i].type,
                            page: pageNo,
                            limit: pageSize,
                            keyword: scanKeyword,
                            short_name: true,
                            type_view: 'list'
                        }
                    });
                }
                return requests;
            },
            normalizeBoardSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('board')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            var targetRow = resolveBoardTargetRow(params, rows);
            var contextRows = rows;
            var detailEnabled = needDetail;
            if (targetId) {
                contextRows = targetRow ? [targetRow] : [];
                detailEnabled = !!targetRow && needDetail;
            }
            return buildGenericMenuContextResult(
                'Board (게시판)',
                'Board',
                [
                    { key: 'btype', label: 'folder' },
                    { key: 'id', label: 'id' },
                    { key: 'subject', label: '제목' },
                    { key: 'writer', label: '작성자' },
                    { key: 'date', label: '일시' }
                ],
                contextRows,
                keyword,
                sourceUrl,
                detailEnabled,
                maxItems,
                fetchBoardDetailText,
                abortSignal
            ).then(function (ctxResult) {
                var result = attachPagedScanMetaToCollectionResult(ctxResult, contextRows, keyword, scanResult);
                if (targetId) {
                    result.stats = (result.stats && typeof result.stats === 'object') ? result.stats : {};
                    result.stats.target_id = targetRow && targetRow.id ? targetRow.id : targetId;
                    result.stats.target_resolved = targetRow ? 1 : 0;
                    if (!targetRow) result.reason = result.reason || 'no_context';
                }
                return result;
            });
        });
    }

    function fetchTodoMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var modes = resolveTodoSearchModesFromPrompt(prompt || '');
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < modes.length; i++) {
                    requests.push({
                        path: 'todo/todo/todo_list',
                        method: 'POST',
                        query: {
                            mode: modes[i]
                        },
                        body: {
                            mode: modes[i],
                            type: 'todo',
                            page: pageNo,
                            limit: pageSize,
                            search_keyword: keyword,
                            search_field: 'all',
                            status: '-1',
                            all: 1,
                            filter: '0,1,-1',
                            writerFilterKeyword: ''
                        }
                    });
                }
                return requests;
            },
            normalizeTodoSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('todo')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Todo (할일)',
                'Todo',
                [
                    { key: 'mode', label: 'mode' },
                    { key: 'tdseq', label: 'tdseq' },
                    { key: 'subject', label: '제목' },
                    { key: 'writer', label: '작성자' },
                    { key: 'date', label: '일시' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchTodoDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchAddrbookMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var userInfo = resolveSessionUserInfo();
        var cn = userInfo.sessionCn || '1';
        var scopes = ['comp_' + cn, 'my_' + cn, 'share_' + cn, 'org_0'];
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize) {
                var requests = [];
                var i;
                for (i = 0; i < scopes.length; i++) {
                    requests.push({
                        path: 'addrbook/contact/list',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        body: buildAddrbookSearchBody(scopes[i], keyword, pageSize, pageNo)
                    });
                }
                return requests;
            },
            normalizeContactSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('addrbook')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'AddressBook (주소록)',
                'AddressBook',
                [
                    { key: 'id', label: 'id' },
                    { key: 'seqno', label: 'seqno' },
                    { key: 'name', label: '이름' },
                    { key: 'groupName', label: '조직' },
                    { key: 'mobile', label: '휴대폰' },
                    { key: 'email', label: '이메일' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchContactDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchHelpdeskMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        var userInfo = resolveSessionUserInfo();
        var cn = userInfo.sessionCn || '1';
        var basePath = 'helpdesk/tickets_elastic/' + encodeURIComponent(cn);
        return fetchPagedRowsByRequests(
            function (pageNo, pageSize, currentOffset) {
                var query = {
                    offset: currentOffset,
                    limit: pageSize
                };
                if (keyword) query.keyword = keyword;
                return [
                    {
                        path: basePath,
                        method: 'GET',
                        query: query
                    }
                ];
            },
            normalizeHelpdeskSearchRows,
            params,
            maxItems,
            abortSignal,
            progress,
            actionPlanMenuText('helpdesk')
        ).then(function (scanResult) {
            var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
            var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
            return buildGenericMenuContextResult(
                'Helpdesk (헬프데스크)',
                'Helpdesk',
                [
                    { key: 'ticketId', label: 'ticket' },
                    { key: 'subject', label: '제목' },
                    { key: 'status', label: '상태' },
                    { key: 'priority', label: '우선순위' },
                    { key: 'writer', label: '작성자' },
                    { key: 'date', label: '일시' }
                ],
                rows,
                keyword,
                sourceUrl,
                needDetail,
                maxItems,
                fetchHelpdeskDetailText,
                abortSignal
            ).then(function (ctxResult) {
                return attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
            });
        });
    }

    function fetchCustomerMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeCustomerKeyword((params && params.keyword) || '');
        var issueKeyword = sanitizeCustomerIssueKeyword((params && (params.issue_keyword || params.issue)) || '');
        var activityTypes = normalizeCustomerActivityTypesCsv((params && (params.activity_types || params.activityTypes)) || '');
        var hasPeriod = toBooleanFlag(params && params.has_period);
        if (!keyword) {
            progress(tr('assistant_notice_customer_search_skip_no_keyword'), 'detailed');
            return Promise.resolve({
                context: '',
                reason: 'no_context',
                stats: { keyword: '', customer_rows: 0, activity_rows: 0 }
            });
        }
        progress(trf('assistant_notice_customer_search_api', {
            keyword: keyword
        }), 'detailed');
        return fetchCustomerSearchContext(keyword, abortSignal).then(function (searchRes) {
            var search = searchRes && typeof searchRes === 'object' ? searchRes : {};
            var contexts = [];
            if (search.context) contexts.push(search.context);
            var customers = Array.isArray(search.rows) ? search.rows : [];
            progress(trf('assistant_notice_customer_search_result', {
                rows: customers.length
            }), 'detailed');
            if (!customers.length || !issueKeyword) {
                if (!issueKeyword) {
                    progress(tr('assistant_notice_customer_activity_skip_no_keyword'), 'detailed');
                }
                return {
                    context: contexts.join('\n\n'),
                    reason: contexts.length ? '' : 'no_context',
                    stats: {
                        keyword: keyword,
                        customer_rows: customers.length,
                        activity_rows: 0
                    }
                };
            }
            var activityLimit = hasPeriod ? CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD : CUSTOMER_ACTIVITY_LIMIT;
            progress(trf('assistant_notice_customer_activity_api', {
                issue: issueKeyword,
                limit: activityLimit
            }), 'detailed');
            return fetchCustomerActivityContext(customers, issueKeyword, activityLimit, activityTypes, abortSignal)
                .then(function (activityRes) {
                    var activity = activityRes && typeof activityRes === 'object' ? activityRes : {};
                    if (activity.context) contexts.push(activity.context);
                    progress(
                        trf('assistant_notice_customer_activity_result', {
                            matched: (parseInt(activity.matchCount, 10) || 0),
                            total: (parseInt(activity.totalActivities, 10) || 0),
                            detail_fetched: (parseInt(activity.detailFetched, 10) || 0)
                        }),
                        'detailed'
                    );
                    return {
                        context: contexts.join('\n\n'),
                        reason: contexts.length ? '' : 'no_context',
                        stats: {
                            keyword: keyword,
                            customer_rows: customers.length,
                            activity_rows: parseInt(activity.matchCount, 10) || 0
                        }
                    };
                });
        });
    }

    function fetchDiaryMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeIntentKeyword((params && params.keyword) || '', 120);
        if (!keyword) {
            keyword = sanitizeWorklogKeyword(extractWorklogKeyword(prompt || ''));
        }
        progress(tr('assistant_notice_diary_scope_catalog_api'), 'detailed');
        return fetchDiaryScopeCatalog(abortSignal).then(function (catalog) {
            var deptRows = catalog && Array.isArray(catalog.deptRows) ? catalog.deptRows : [];
            var treeRows = catalog && Array.isArray(catalog.treeNodes) ? catalog.treeNodes : [];
            var deptCount = deptRows.length;
            var treeCount = treeRows.length;
            progress(trf('assistant_notice_diary_scope_result', {
                dept_rows: deptCount,
                tree_rows: treeCount
            }), 'detailed');

            var scopes = resolveDiaryScopesFromPrompt(prompt || '', deptRows, treeRows);
            if (!Array.isArray(scopes) || !scopes.length) scopes = [makeMyDiaryScope()];

            return fetchPagedRowsByRequests(
                function (pageNo, pageSize) {
                    var requests = [];
                    var i;
                    for (i = 0; i < scopes.length; i++) {
                        var scope = scopes[i] || makeMyDiaryScope();
                        var scopeType = collapseText(scope.type || 'my');
                        var scopeId = collapseText(scope.id || 'default');
                        var scopeMode = collapseText(scope.mode || (scopeType === 'my' ? 'pdefault' : 'gdefault'));
                        requests.push({
                            path: 'diary/diary/list/page/' + pageNo,
                            method: 'GET',
                            query: {
                                type: scopeType,
                                id: scopeId,
                                mode: scopeMode,
                                keyword: keyword,
                                num_page: pageSize,
                                order: collapseText(scope.order || 'date'),
                                sort_type: collapseText(scope.sortType || 'desc')
                            }
                        });
                    }
                    return requests;
                },
                normalizeDiarySearchRows,
                params,
                maxItems,
                abortSignal,
                progress,
                actionPlanMenuText('diary')
            ).then(function (scanResult) {
                var rows = Array.isArray(scanResult && scanResult.rows) ? scanResult.rows : [];
                var sourceUrl = (scanResult && scanResult.sourceUrl) ? scanResult.sourceUrl : '';
                return buildGenericMenuContextResult(
                    'Diary (업무일지)',
                    'Diary',
                    [
                        { key: 'mode', label: 'mode' },
                        { key: 'tdseq', label: 'seqNo' },
                        { key: 'subject', label: '제목' },
                        { key: 'writer', label: '작성자' },
                        { key: 'date', label: '일시' }
                    ],
                    rows,
                    keyword,
                    sourceUrl,
                    needDetail,
                    maxItems,
                    fetchReportDetailText,
                    abortSignal
                ).then(function (ctxResult) {
                    var out = attachPagedScanMetaToCollectionResult(ctxResult, rows, keyword, scanResult);
                    var extraContexts = [];
                    if (!rows.length) {
                        var scopeContext = buildDiaryScopeCatalogContext(catalog);
                        if (scopeContext) extraContexts.push(scopeContext);
                        var tableContext = extractWorklogTableContext();
                        if (tableContext) extraContexts.push(tableContext);
                    }
                    if (extraContexts.length) {
                        if (out.context) out.context += '\n\n' + extraContexts.join('\n\n');
                        else out.context = extraContexts.join('\n\n');
                    }
                    if (!out.stats || typeof out.stats !== 'object' || Array.isArray(out.stats)) {
                        out.stats = {};
                    }
                    out.stats.dept_rows = deptCount;
                    out.stats.tree_rows = treeCount;
                    return out;
                });
            });
        });
    }

    function collectSingleBrowserActionContext(action, prompt, abortSignal, onProgress) {
        var progress = (typeof onProgress === 'function') ? onProgress : function () {};
        var runtime = {
            normalizeCollectorMenuKey: normalizeCollectorMenuKey,
            sanitizeActionPlanOperation: sanitizeActionPlanOperation,
            normalizeActionPlanSource: normalizeActionPlanSource,
            toBooleanFlag: toBooleanFlag,
            resolveMenuRequestedItems: resolveMenuRequestedItems,
            addProgress: progress,
            actionPlanMenuText: actionPlanMenuText,
            actionPlanOperationText: actionPlanOperationText,
            actionPlanSourceText: actionPlanSourceText,
            translateKey: tr,
            formatKey: function (key, replacements, fallback) {
                return trff(key, fallback, replacements);
            },
            fetchCustomerMenuContext: fetchCustomerMenuContext,
            fetchDiaryMenuContext: fetchDiaryMenuContext,
            fetchMailMenuContext: fetchMailMenuContext,
            fetchApprovalMenuContext: fetchApprovalMenuContext,
            fetchReportMenuContext: fetchReportMenuContext,
            fetchScheduleMenuContext: fetchScheduleMenuContext,
            fetchProjectMenuContext: fetchProjectMenuContext,
            fetchBoardMenuContext: fetchBoardMenuContext,
            fetchTodoMenuContext: fetchTodoMenuContext,
            fetchWhisperMenuContext: fetchWhisperMenuContext,
            fetchCircularMenuContext: fetchCircularMenuContext,
            fetchAddrbookMenuContext: fetchAddrbookMenuContext,
            fetchHelpdeskMenuContext: fetchHelpdeskMenuContext
        };

        if (window.HBAIAssistant2Tools && typeof window.HBAIAssistant2Tools.executeSingleAction === 'function') {
            return window.HBAIAssistant2Tools.executeSingleAction(
                action || {},
                prompt || '',
                abortSignal || null,
                runtime
            );
        }

        progress(tr('assistant_notice_tools_module_unavailable'), 'minimal');
        return Promise.resolve({
            context: '',
            reason: 'tools_module_unavailable',
            stats: { keyword: '', customer_rows: 0, activity_rows: 0 }
        });
    }

    function collectBrowserAjaxContextFromActionPlan(actions, prompt, abortSignal, conversationId) {
        var rows = Array.isArray(actions) ? actions : [];
        var result = {
            context: '',
            sections: [],
            passes: rows.length ? 1 : 0,
            resolved_count: 0,
            unresolved_count: 0,
            unresolved: [],
            retry_candidates: [],
            errors: [],
            steps: []
        };
        if (!rows.length) return Promise.resolve(result);
        result.steps.push({
            pass: 1,
            phase: 'pass_start',
            action_count: rows.length
        });
        addProgressMessage(conversationId, trf('assistant_notice_internal_collection_total', {
            count: rows.length
        }), 'normal');

        var contextParts = [];
        var index = 0;
        function iterate() {
            var aborted = rejectIfAborted(abortSignal);
            if (aborted) return aborted;
            if (index >= rows.length) {
                result.sections = normalizeCollectionSections(result.sections, contextParts.join('\n\n'));
                result.context = buildCollectionContextFromSections(result.sections, 180000);
                if (!result.context) {
                    result.context = contextParts.join('\n\n').trim();
                }
                result.steps.push({
                    pass: 1,
                    phase: 'pass_end',
                    resolved_count: result.resolved_count,
                    unresolved_count: result.unresolved_count
                });
                return Promise.resolve(result);
            }

            var action = rows[index] || {};
            var actionIndex = index;
            var menuKey = normalizeCollectorMenuKey(action);
            var source = normalizeActionPlanSource(action.source || '', 'browser_ajax');
            var operation = sanitizeActionPlanOperation(action.operation || action.op || '');
            var menuLabel = actionPlanMenuText(menuKey);
            var operationLabel = actionPlanOperationText(operation);
            var sourceLabel = actionPlanSourceText(source);
            addProgressMessage(
                conversationId,
                trf('assistant_notice_internal_collection_progress', {
                    index: index + 1,
                    total: rows.length,
                    menu: menuLabel,
                    operation: operationLabel,
                    source: sourceLabel
                }),
                'normal'
            );
            index += 1;
            return collectSingleBrowserActionContext(action, prompt || '', abortSignal, function (message, level) {
                addProgressMessage(
                    conversationId,
                    trf('assistant_notice_internal_collection_detail', {
                        menu: menuLabel,
                        message: collapseText(message || '')
                    }),
                    level || 'detailed'
                );
            })
                .then(function (ctxRes) {
                    var rowRes = ctxRes && typeof ctxRes === 'object' ? ctxRes : {};
                    var contextText = collapseText(rowRes.context || '') ? String(rowRes.context || '') : '';
                    if (contextText) {
                        var sectionTitle = menuLabel + ' / ' + operationLabel + ' / ' + sourceLabel;
                        var sectionRows = normalizeCollectionSections([{
                            title: sectionTitle,
                            context: contextText,
                            source: source,
                            menu_key: menuKey,
                            operation: operation,
                            pass: 1,
                            action_index: actionIndex + 1
                        }], '');
                        if (sectionRows.length) {
                            result.sections = mergeCollectionSections(result.sections, sectionRows, 120, 14000);
                            result.context = buildCollectionContextFromSections(result.sections, 180000);
                        } else {
                            contextParts.push(contextText);
                        }
                        result.resolved_count += 1;
                        result.steps.push({
                            pass: 1,
                            phase: 'collect',
                            menu_key: menuKey,
                            operation: operation,
                            source: source,
                            status: 'resolved',
                            context_chars: contextText.length
                        });
                        var stats = rowRes.stats && typeof rowRes.stats === 'object' ? rowRes.stats : {};
                        var customerRows = parseInt(stats.customer_rows, 10);
                        if (isNaN(customerRows) || customerRows < 0) customerRows = 0;
                        var activityRows = parseInt(stats.activity_rows, 10);
                        if (isNaN(activityRows) || activityRows < 0) activityRows = 0;
                        addProgressMessage(
                            conversationId,
                            trf('assistant_notice_internal_collection_resolved', {
                                menu: menuLabel,
                                customer_rows: customerRows,
                                activity_rows: activityRows
                            }),
                            'normal'
                        );
                        if (rowRes.next_page_params && typeof rowRes.next_page_params === 'object' && !Array.isArray(rowRes.next_page_params)) {
                            var retryCandidate = {
                                menu_key: menuKey,
                                operation: operation,
                                reason: 'next_page_available',
                                params: rowRes.next_page_params
                            };
                            if (rowRes.stats && typeof rowRes.stats === 'object' && !Array.isArray(rowRes.stats)) {
                                retryCandidate.stats = rowRes.stats;
                            }
                            result.retry_candidates.push(retryCandidate);
                        }
                    } else {
                        var reason = collapseText(rowRes.reason || 'no_context');
                        if (reason === '') reason = 'no_context';
                        result.unresolved_count += 1;
                        var unresolvedRow = {
                            menu_key: menuKey,
                            operation: operation,
                            reason: reason
                        };
                        if (rowRes.retry_params && typeof rowRes.retry_params === 'object' && !Array.isArray(rowRes.retry_params)) {
                            unresolvedRow.params = rowRes.retry_params;
                        }
                        if (rowRes.stats && typeof rowRes.stats === 'object' && !Array.isArray(rowRes.stats)) {
                            unresolvedRow.stats = rowRes.stats;
                        }
                        result.unresolved.push(unresolvedRow);
                        result.steps.push({
                            pass: 1,
                            phase: 'collect',
                            menu_key: menuKey,
                            operation: operation,
                            source: source,
                            status: 'unresolved',
                            reason: reason
                        });
                        addProgressMessage(
                            conversationId,
                            trf('assistant_notice_internal_collection_deferred', {
                                menu: menuLabel,
                                reason: actionPlanReasonText(reason)
                            }),
                            'normal'
                        );
                    }
                    return iterate();
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    var message = collapseText((err && err.message) ? err.message : 'browser_ajax collection failed');
                    if (message && result.errors.indexOf(message) < 0) {
                        result.errors.push(message);
                    }
                    result.unresolved_count += 1;
                    result.unresolved.push({
                        menu_key: menuKey,
                        operation: operation,
                        reason: 'no_context'
                    });
                    result.steps.push({
                        pass: 1,
                        phase: 'collect',
                        menu_key: menuKey,
                        operation: operation,
                        source: source,
                        status: 'unresolved',
                        reason: 'no_context'
                    });
                    addProgressMessage(
                        conversationId,
                        trf('assistant_notice_internal_collection_error', {
                            menu: menuLabel,
                            message: truncateText(message, 100)
                        }),
                        'normal'
                    );
                    return iterate();
                });
        }

        return iterate();
    }

    function buildCollectionSectionHash(text) {
        var source = String(text == null ? '' : text);
        if (!source) return '';
        var hash = 2166136261;
        var i;
        for (i = 0; i < source.length; i++) {
            hash ^= source.charCodeAt(i);
            hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
            hash >>>= 0;
        }
        return 'h' + hash.toString(16) + '_' + source.length;
    }

    function splitCollectionContextByChars(text, maxChars) {
        var source = String(text == null ? '' : text).trim();
        if (!source) return [];
        var limit = parseInt(maxChars, 10);
        if (isNaN(limit) || limit < 1000) limit = 14000;
        if (source.length <= limit) return [source];

        var chunks = [];
        var paragraphs = source.split(/\n{2,}/);
        if (!paragraphs.length) paragraphs = [source];
        var current = '';
        var i;
        for (i = 0; i < paragraphs.length; i++) {
            var row = String(paragraphs[i] == null ? '' : paragraphs[i]).trim();
            if (!row) continue;
            var candidate = current ? (current + '\n\n' + row) : row;
            if (candidate.length <= limit) {
                current = candidate;
                continue;
            }
            if (current) {
                chunks.push(current);
                current = '';
            }
            if (row.length <= limit) {
                current = row;
                continue;
            }
            var offset = 0;
            while (offset < row.length) {
                chunks.push(row.substring(offset, offset + limit).trim());
                offset += limit;
            }
        }
        if (current) chunks.push(current);
        return chunks;
    }

    function normalizeCollectionSections(rawSections, fallbackContext, maxSections, maxSectionChars) {
        var limit = parseInt(maxSections, 10);
        if (isNaN(limit) || limit < 1) limit = 120;
        if (limit > 120) limit = 120;
        var chunkLimit = parseInt(maxSectionChars, 10);
        if (isNaN(chunkLimit) || chunkLimit < 1000) chunkLimit = 14000;

        var rows = Array.isArray(rawSections) ? rawSections.slice(0) : [];
        if (!rows.length) {
            var fallback = normalizeCollectedBrowserContextText(fallbackContext == null ? '' : fallbackContext);
            if (fallback) {
                rows.push({
                    title: 'reference',
                    context: fallback
                });
            }
        }

        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length && out.length < limit; i++) {
            var row = rows[i];
            if (!row || typeof row !== 'object') continue;
            var title = collapseText(row.title || row.label || '');
            if (!title) title = 'reference';
            var context = row.context;
            if (context == null && row.content != null) context = row.content;
            if (context == null && row.text != null) context = row.text;
            context = normalizeCollectedBrowserContextText(context == null ? '' : context);
            if (!context) continue;

            var chunks = splitCollectionContextByChars(context, chunkLimit);
            var chunkTotal = chunks.length;
            var c;
            for (c = 0; c < chunks.length && out.length < limit; c++) {
                var chunk = String(chunks[c] == null ? '' : chunks[c]).trim();
                if (!chunk) continue;
                var hash = collapseText(row.hash || '') || buildCollectionSectionHash(chunk);
                if (!hash) hash = buildCollectionSectionHash(chunk);
                if (seen[hash]) continue;
                seen[hash] = true;
                var sectionTitle = title;
                if (chunkTotal > 1) {
                    sectionTitle += ' (part ' + (c + 1) + ')';
                }
                var preview = collapseText(chunk);
                if (preview.length > 260) {
                    preview = preview.substring(0, 260) + '...';
                }
                var section = {
                    id: 'S' + (out.length + 1),
                    title: sectionTitle,
                    context: chunk,
                    chars: chunk.length,
                    token_estimate: Math.max(1, Math.ceil(chunk.length * 0.35)),
                    preview: preview,
                    hash: hash
                };
                var metaKeys = ['source', 'menu_key', 'operation', 'pass', 'action_index', 'uid'];
                var m;
                for (m = 0; m < metaKeys.length; m++) {
                    var key = metaKeys[m];
                    if (!Object.prototype.hasOwnProperty.call(row, key)) continue;
                    var value = row[key];
                    if (value == null) continue;
                    if (typeof value === 'string') value = collapseText(value);
                    if (value === '') continue;
                    section[key] = value;
                }
                out.push(section);
            }
        }
        return out;
    }

    function mergeCollectionSections(primary, secondary, maxSections, maxSectionChars) {
        var rows = [];
        if (Array.isArray(primary) && primary.length) rows = rows.concat(primary);
        if (Array.isArray(secondary) && secondary.length) rows = rows.concat(secondary);
        return normalizeCollectionSections(rows, '', maxSections, maxSectionChars);
    }

    function buildCollectionContextFromSections(sections, maxChars) {
        var rows = Array.isArray(sections) ? sections : [];
        if (!rows.length) return '';
        var parts = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var context = String(row.context == null ? '' : row.context).trim();
            if (!context) continue;
            var hash = collapseText(row.hash || '') || buildCollectionSectionHash(context);
            if (hash && seen[hash]) continue;
            if (hash) seen[hash] = true;
            var title = collapseText(row.title || '');
            if (title && context.indexOf('[' + title + ']') !== 0) {
                parts.push('[' + title + ']\n' + context);
            } else {
                parts.push(context);
            }
        }
        var merged = parts.join('\n\n').trim();
        if (!merged) return '';
        var limit = parseInt(maxChars, 10);
        if (isNaN(limit) || limit < 1) limit = 180000;
        if (merged.length > limit) merged = merged.substring(0, limit);
        return merged.trim();
    }

    function truncateProgressDetailByChars(text, maxChars) {
        var normalized = normalizeProgressDetailText(text || '');
        if (!normalized) return '';
        var limit = parseInt(maxChars, 10);
        if (isNaN(limit) || limit < 200) limit = 32000;
        if (normalized.length <= limit) return normalized;
        if (limit <= 3) return normalized.substring(0, limit);
        return normalized.substring(0, limit - 3).replace(/\s+$/g, '') + '...';
    }

    function buildCollectionBundleDebugDetail(bundle, maxSections, maxChars, maxSectionChars) {
        var normalized = normalizeCollectionBundle(bundle || {});
        var rows = Array.isArray(normalized.sections) ? normalized.sections : [];
        var sectionLimit = parseInt(maxSections, 10);
        if (isNaN(sectionLimit) || sectionLimit < 1) sectionLimit = 8;
        var totalLimit = parseInt(maxChars, 10);
        if (isNaN(totalLimit) || totalLimit < 200) totalLimit = 32000;
        var perSectionLimit = parseInt(maxSectionChars, 10);
        if (isNaN(perSectionLimit) || perSectionLimit < 200) perSectionLimit = 3500;

        if (!rows.length) {
            return truncateProgressDetailByChars(normalized.context || '', totalLimit);
        }

        var parts = [];
        var shown = 0;
        var i;
        for (i = 0; i < rows.length && shown < sectionLimit; i++) {
            var row = rows[i] || {};
            var title = collapseText(row.title || row.label || '');
            if (!title) title = 'reference';
            var body = normalizeProgressDetailText(row.context || row.content || row.text || row.preview || '');
            if (!body) continue;
            if (body.length > perSectionLimit) {
                body = body.substring(0, perSectionLimit).replace(/\s+$/g, '') + '\n...';
            }
            parts.push('[' + title + ']\n' + body);
            shown += 1;
        }
        if (!parts.length) {
            return truncateProgressDetailByChars(normalized.context || '', totalLimit);
        }
        if (rows.length > shown) {
            parts.push('... +' + (rows.length - shown) + ' sections');
        }
        return truncateProgressDetailByChars(parts.join('\n\n'), totalLimit);
    }

    function mergeCollectionBundles(serverCollection, browserCollection) {
        var merged = {
            context: '',
            sections: [],
            context_chars: 0,
            passes: 0,
            resolved_count: 0,
            unresolved_count: 0,
            unresolved: [],
            retry_candidates: [],
            errors: [],
            steps: []
        };
        var server = serverCollection && typeof serverCollection === 'object' ? serverCollection : {};
        var browser = browserCollection && typeof browserCollection === 'object' ? browserCollection : {};
        merged.passes = (parseInt(server.passes, 10) || 0) + (parseInt(browser.passes, 10) || 0);
        merged.resolved_count = (parseInt(server.resolved_count, 10) || 0) + (parseInt(browser.resolved_count, 10) || 0);
        merged.unresolved_count = (parseInt(server.unresolved_count, 10) || 0) + (parseInt(browser.unresolved_count, 10) || 0);
        merged.unresolved = (Array.isArray(browser.unresolved) ? browser.unresolved.slice(0) : [])
            .concat(Array.isArray(server.unresolved) ? server.unresolved : []);
        merged.retry_candidates = (Array.isArray(browser.retry_candidates) ? browser.retry_candidates.slice(0) : [])
            .concat(Array.isArray(server.retry_candidates) ? server.retry_candidates : []);
        merged.errors = (Array.isArray(browser.errors) ? browser.errors.slice(0) : [])
            .concat(Array.isArray(server.errors) ? server.errors : []);
        merged.steps = (Array.isArray(browser.steps) ? browser.steps.slice(0) : [])
            .concat(Array.isArray(server.steps) ? server.steps : []);
        merged.sections = mergeCollectionSections(
            Array.isArray(browser.sections) ? browser.sections : [],
            Array.isArray(server.sections) ? server.sections : [],
            120,
            14000
        );
        merged.context = buildCollectionContextFromSections(merged.sections, 180000);
        if (!merged.context) {
            var contextParts = [];
            if (browser && browser.context) contextParts.push(String(browser.context));
            if (server && server.context) contextParts.push(String(server.context));
            merged.context = contextParts.join('\n\n').trim();
        }
        merged.context_chars = merged.context.length;
        return merged;
    }

    function extractMailKeyword(prompt) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.extractMailKeyword === 'function') {
            return analyzer.extractMailKeyword(prompt);
        }
        return '';
    }

    function sanitizeMailKeyword(keyword) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.sanitizeMailKeyword === 'function') {
            return analyzer.sanitizeMailKeyword(keyword);
        }
        var text = collapseText(keyword || '');
        if (!text) return '';
        if (text.length > 80) text = text.substring(0, 80);
        return text;
    }

    function buildMailApiOrigins() {
        var out = [];
        var seen = {};
        function add(origin) {
            var value = collapseText(origin || '');
            if (!value) return;
            value = value.replace(/\/+$/, '');
            if (!value || seen[value]) return;
            seen[value] = true;
            out.push(value);
        }
        add(currentOrigin());
        add(extractOriginFromUrl(getBaseConfigApiUrl()));
        return out;
    }

    function buildMailApiUrlCandidatesByPath(path) {
        var cleanPath = collapseText(path || '');
        if (!cleanPath) return [];
        if (cleanPath.charAt(0) !== '/') cleanPath = '/' + cleanPath;
        var out = [];
        var seen = {};
        var origins = buildMailApiOrigins();
        var bp = normalizeBasePath(basePath);
        var i;

        function add(url) {
            var value = collapseText(url || '');
            if (!value) return;
            if (seen[value]) return;
            seen[value] = true;
            out.push(value);
        }

        for (i = 0; i < origins.length; i++) {
            add(origins[i] + cleanPath);
            if (bp && bp !== '/') {
                add(origins[i] + bp + cleanPath.replace(/^\/+/, ''));
            }
        }
        return out;
    }

    function buildMailListApiUrls(keyword, mailboxKey, offset, limit) {
        var clean = sanitizeMailKeyword(keyword || '');
        var boxKey = collapseText(mailboxKey || '');
        if (!boxKey) boxKey = 'all';
        var listOffset = parseInt(offset, 10);
        if (isNaN(listOffset) || listOffset < 0) listOffset = 0;
        var listLimit = parseInt(limit, 10);
        if (isNaN(listLimit) || listLimit < 1) listLimit = MAIL_LIST_PAGE_SIZE;
        if (listLimit > 200) listLimit = 200;
        var encodedBox = encodeURIComponent(boxKey);
        var params = [
            'acl=' + encodedBox,
            'mailsort=date',
            'msgsig=',
            'searchbox=' + encodedBox,
            'searchfild=s',
            'searchfield=s',
            'sortkind=0',
            'timemode=mobile',
            'titemmode=mobile',
            'viewcont=' + listOffset + ',' + listLimit
        ];
        if (clean) params.push('keyword=' + encodeURIComponent(clean));
        var query = params.join('&');
        return buildMailApiUrlCandidatesByPath('/email/list?act=maillist8&' + query)
            .concat(buildMailApiUrlCandidatesByPath('/email/list?act=maillist&' + query));
    }

    function buildMailViewUrlCandidates(mailId, mailboxKey) {
        var id = collapseText(mailId || '');
        if (!id) return [];
        var box = collapseText(mailboxKey || '');
        if (!box) box = 'Maildir';
        var path = '/email/' + encodeURIComponent(box) + '/' + encodeURIComponent(id);
        return buildMailApiUrlCandidatesByPath(path);
    }

    function buildMailBoxInfoUrls() {
        return buildMailApiUrlCandidatesByPath('/email/boxinfo/all');
    }

    function normalizeMailBoxRows(payload) {
        var list = payload && payload.mailbox;
        if (!list || typeof list.length !== 'number') return [];
        var rows = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i];
            if (!row || typeof row !== 'object') continue;
            var key = collapseText(row.key || row.box || '');
            var name = collapseText(row.name || row.boxname || '');
            if (!key && !name) continue;
            if (!key) key = name;
            if (!name) name = key;
            rows.push({
                key: key,
                name: name,
                total: parseInt(row.total, 10) || 0,
                fresh: parseInt(row.new, 10) || 0
            });
        }
        return rows;
    }

    function fetchMailBoxInfo(abortSignal) {
        if (!window.fetch) return Promise.resolve({ rows: [], sourceUrl: '' });
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;
        var urls = buildMailBoxInfoUrls();
        var idx = 0;

        function tryNext(lastResult) {
            var rejected = rejectIfAborted(abortSignal);
            if (rejected) return rejected;
            if (idx >= urls.length) return Promise.resolve(lastResult || { rows: [], sourceUrl: '' });
            var currentUrl = urls[idx++];
            return fetch(currentUrl, buildApiFetchOptions(abortSignal))
                .then(function (r) { return r.text(); })
                .then(function (raw) {
                    var payload = parseJsonSafely(raw);
                    var rows = normalizeMailBoxRows(payload);
                    var result = {
                        rows: rows,
                        sourceUrl: currentUrl
                    };
                    if (rows.length) return result;
                    return tryNext(result);
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext(lastResult);
                });
        }

        return tryNext(null);
    }

    function getMailLocationFromHref(href) {
        var raw = String(href || '');
        var m = raw.match(/\/email\/([^/?#"'&]+)\/([^/?#"'&]+)/i);
        if (!m || !m[1] || !m[2]) {
            return { boxKey: '', mailId: '' };
        }
        return {
            boxKey: decodeUriPart(m[1]),
            mailId: decodeUriPart(m[2])
        };
    }

    function normalizeMailHref(href) {
        var raw = collapseText(href || '');
        if (!raw) return '';
        if (/^https?:\/\//i.test(raw)) return raw;
        if (raw.charAt(0) === '/') return currentOrigin() + raw;
        return currentOrigin() + '/' + raw.replace(/^\/+/, '');
    }

    function parseMailListItemsFromHtml(html, defaultBoxKey) {
        var items = [];
        var seen = {};
        if (!html) return items;
        var defaultBox = collapseText(defaultBoxKey || '');
        if (defaultBox.toLowerCase() === 'all') defaultBox = '';

        try {
            var doc = new window.DOMParser().parseFromString(String(html), 'text/html');
            var links = doc.querySelectorAll('a[href*="/email/"]');
            var i;
            for (i = 0; i < links.length; i++) {
                var a = links[i];
                var href = a.getAttribute('href') || '';
                var loc = getMailLocationFromHref(href);
                var mailId = loc.mailId || '';
                var boxKey = loc.boxKey || defaultBox || 'Maildir';
                var uniq = boxKey + '|' + mailId;
                if (!mailId || seen[uniq]) continue;
                seen[uniq] = true;

                var tr = a.closest ? a.closest('tr') : null;
                var sender = '';
                var dateText = '';
                var rowSummary = '';
                if (tr) {
                    var cells = tr.querySelectorAll('td');
                    if (cells && cells.length > 0) {
                        sender = cells.length > 1 ? collapseText(cells[1].innerText || cells[1].textContent || '') : '';
                        dateText = cells.length > 0 ? collapseText(cells[cells.length - 1].innerText || cells[cells.length - 1].textContent || '') : '';
                    }
                    rowSummary = collapseText(tr.innerText || tr.textContent || '');
                }

                var subject = collapseText(a.innerText || a.textContent || '');
                if (!subject) subject = rowSummary;
                if (!subject) subject = '(제목 없음)';

                items.push({
                    id: mailId,
                    boxKey: boxKey,
                    href: normalizeMailHref(href),
                    subject: subject,
                    sender: sender,
                    date: dateText,
                    row: rowSummary
                });
                if (items.length >= MAX_MAIL_LIST_ITEMS) break;
            }
        } catch (e) {
            return [];
        }
        return items;
    }

    function parseMailListItemsFromJson(payload, defaultBoxKey) {
        var items = [];
        var seen = {};
        var rows = payload && (payload.maillist || payload.mail_list || payload.list || payload.rows || payload.data);
        if (rows && !Array.isArray(rows) && Array.isArray(rows.rows)) rows = rows.rows;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.list)) rows = rows.list;
        if (!rows || typeof rows.length !== 'number') return items;
        var defaultBox = collapseText(defaultBoxKey || '');
        if (defaultBox.toLowerCase() === 'all') defaultBox = '';

        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var mailId = row.mid || row.msg_uuid || row.uuid || row.id || row.mailid || '';
            var hrefLocation = getMailLocationFromHref(row.href || row.link || '');
            if (!mailId && hrefLocation.mailId) mailId = hrefLocation.mailId;
            mailId = collapseText(String(mailId || ''));
            var boxKey = collapseText(row.boxkey || row.mailbox || row.box || row.mailbox_key || row.acl || '');
            if (!boxKey) boxKey = hrefLocation.boxKey || defaultBox || 'Maildir';
            var uniq = boxKey + '|' + mailId;
            if (!mailId || seen[uniq]) continue;
            seen[uniq] = true;

            var subject = collapseText(row.subject || row.title || row.subj || row.name || '');
            var sender = collapseText(row.from_addr || row.fromaddr || row.from || row.addr || row.sender || '');
            var dateText = collapseText(row.date || row.rtime || row.regdate || row.time || row.senttime || '');
            var rowSummary = collapseText(row.summary || row.snippet || '');
            if (!rowSummary) {
                rowSummary = collapseText(('제목 ' + subject + ' 발신 ' + sender + ' 일시 ' + dateText));
            }
            if (!subject) subject = '(제목 없음)';

            items.push({
                id: mailId,
                boxKey: boxKey,
                href: normalizeMailHref(row.href || row.link || ''),
                subject: subject,
                sender: sender,
                date: dateText,
                row: rowSummary
            });
            if (items.length >= MAX_MAIL_LIST_ITEMS) break;
        }
        return items;
    }

    function buildMailListContext(items, keyword, sourceUrl, options, maxItems) {
        var list = Array.isArray(items) ? items : [];
        var limit = parseInt(maxItems, 10);
        if (isNaN(limit) || limit < 1) limit = MAX_MAIL_LIST_ITEMS;
        var opts = options || {};
        var lines = [];
        var i;
        for (i = 0; i < list.length && i < limit; i++) {
            var item = list[i];
            if (!item || !item.id) continue;
            var fields = [];
            fields.push('id=' + item.id);
            if (item.boxKey) fields.push('메일함=' + escapeTextForContext(item.boxKey));
            if (item.subject) fields.push('제목=' + escapeTextForContext(item.subject));
            if (item.sender) fields.push('발신=' + escapeTextForContext(item.sender));
            if (item.date) fields.push('일시=' + escapeTextForContext(item.date));
            lines.push((lines.length + 1) + '. ' + fields.join('; '));
        }

        var out = [];
        out.push('[Mail list snapshot (메일 목록)]');
        if (sourceUrl) out.push('source=' + escapeTextForContext(buildHumanReadableUrlLabel(sourceUrl)));
        if (opts.mailboxSourceUrl) out.push('mailbox_source=' + escapeTextForContext(buildHumanReadableUrlLabel(opts.mailboxSourceUrl)));
        if (!isNaN(parseInt(opts.mailboxTotal, 10))) out.push('mailboxes=' + parseInt(opts.mailboxTotal, 10));
        if (opts.selectedMailboxKey) {
            out.push('acl=' + opts.selectedMailboxKey);
            out.push('searchbox=' + opts.selectedMailboxKey);
            if (opts.selectedMailboxName) out.push('selected_mailbox=' + escapeTextForContext(opts.selectedMailboxName));
        } else {
            out.push('acl=all');
            out.push('searchbox=all');
        }
        var cleanKeyword = sanitizeMailKeyword(keyword);
        if (cleanKeyword) out.push('keyword=' + cleanKeyword);
        out.push('rows=' + list.length);
        if (lines.length) {
            out.push('items:');
            out.push(lines.join('\n'));
        }
        return out.join('\n');
    }

    function normalizeMailDetailText(text) {
        var value = normalizeCollectedBrowserContextText(text || '');
        if (!value) return '';
        if (value.length > MAX_MAIL_DETAIL_CHARS) {
            return value.substring(0, MAX_MAIL_DETAIL_CHARS) + '...';
        }
        return value;
    }

    function extractMailDetailFieldsFromJson(payload) {
        if (!payload || typeof payload !== 'object') return { detail: '', subject: '' };
        var candidates = [];
        var subject = '';
        var rows = payload.rows;
        var row = rows;
        if (Array.isArray(rows)) row = rows.length ? rows[0] : {};

        if (row && typeof row === 'object') {
            subject = collapseText(row.subject || row.title || row.subj || '');
            if (row.contents) candidates.push(row.contents);
            if (row.body) candidates.push(row.body);
            if (row.content) candidates.push(row.content);
            if (row.text) candidates.push(row.text);
            if (row.mailcontent) candidates.push(row.mailcontent);
            if (row.mailbody) candidates.push(row.mailbody);
            if (row.encoded && typeof row.encoded === 'object') {
                for (var encKey in row.encoded) {
                    if (!Object.prototype.hasOwnProperty.call(row.encoded, encKey)) continue;
                    if (row.encoded[encKey]) candidates.push(row.encoded[encKey]);
                }
            }
        }
        if (payload.contents) candidates.push(payload.contents);
        if (payload.body) candidates.push(payload.body);
        if (payload.content) candidates.push(payload.content);
        if (payload.text) candidates.push(payload.text);

        var best = '';
        var i;
        for (i = 0; i < candidates.length; i++) {
            var candidate = candidates[i];
            if (candidate == null) continue;
            var plain = normalizeCollectedBrowserContextText(candidate);
            if (plain.length > best.length) best = plain;
        }

        return {
            detail: normalizeMailDetailText(best),
            subject: subject
        };
    }

    function extractMailDetailText(html) {
        var source = html == null ? '' : String(html);
        if (!source) return '';
        try {
            var doc = new window.DOMParser().parseFromString(source, 'text/html');
            var badNodes = doc.querySelectorAll('script,style,noscript');
            var i;
            for (i = 0; i < badNodes.length; i++) {
                if (badNodes[i] && badNodes[i].parentNode) badNodes[i].parentNode.removeChild(badNodes[i]);
            }
            var candidates = [
                '.mail-view-content', '.mail-content', '.mail_body', '.mail-body',
                '#mailBody', '#viewMail', '.viewmail', 'article', 'body'
            ];
            var best = '';
            for (i = 0; i < candidates.length; i++) {
                var node = doc.querySelector(candidates[i]);
                if (!node) continue;
                var text = extractHtmlNodeMarkdown(node);
                if (text.length > best.length) best = text;
            }
            if (!best) best = normalizeCollectedBrowserContextText(source);
            return normalizeMailDetailText(best);
        } catch (e) {
            return normalizeMailDetailText(normalizeCollectedBrowserContextText(source));
        }
    }

    function fetchMailDetailTextByItem(row, abortSignal) {
        var item = row || {};
        var urls = [];
        var seen = {};
        function add(url) {
            var value = normalizeMailHref(url || '');
            if (!value || seen[value]) return;
            seen[value] = true;
            urls.push(value);
        }
        add(item.href || '');
        var generated = buildMailViewUrlCandidates(item.id || '', item.boxKey || '');
        var i;
        for (i = 0; i < generated.length; i++) add(generated[i]);
        if (!urls.length) return Promise.resolve('');

        var idx = 0;
        function tryNext() {
            if (idx >= urls.length) return Promise.resolve('');
            return fetch(urls[idx++], buildApiFetchOptions(abortSignal))
                .then(function (r) { return r.text(); })
                .then(function (raw) {
                    var payload = parseJsonSafely(raw);
                    var parsed = extractMailDetailFieldsFromJson(payload);
                    var detail = parsed.detail || extractMailDetailText(raw);
                    if (detail) return detail;
                    return tryNext();
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext();
                });
        }
        return tryNext();
    }

    function resolveMailBoxHint(params, prompt) {
        var row = params && typeof params === 'object' ? params : {};
        var explicit = collapseText(row.box || row.mailbox || row.searchbox || row.acl || '').toLowerCase();
        if (explicit) return explicit;
        var text = collapseText(prompt || '').toLowerCase();
        if (!text) return 'inbox';
        if (/(보낸|발신|sent|outbox)/i.test(text)) return 'sent';
        if (/(예약|reserved)/i.test(text)) return 'reserved';
        if (/(전체|all)/i.test(text)) return 'all';
        if (/(수신|받은|inbox|received)/i.test(text)) return 'inbox';
        return 'inbox';
    }

    function resolveMailBoxKeyCandidates(mailboxRows, hint) {
        var rows = Array.isArray(mailboxRows) ? mailboxRows : [];
        var rawHint = collapseText(hint || '').toLowerCase();
        var out = [];
        var seen = {};
        var i;

        function add(key) {
            var value = collapseText(key || '');
            if (!value) return;
            var lower = value.toLowerCase();
            if (seen[lower]) return;
            seen[lower] = true;
            out.push(value);
        }

        function addByToken(tokens) {
            var list = Array.isArray(tokens) ? tokens : [];
            for (i = 0; i < rows.length; i++) {
                var row = rows[i] || {};
                var keyText = collapseText(row.key || '').toLowerCase();
                var nameText = collapseText(row.name || '').toLowerCase();
                var j;
                for (j = 0; j < list.length; j++) {
                    var token = collapseText(list[j] || '').toLowerCase();
                    if (!token) continue;
                    if (keyText === token || keyText.indexOf(token) >= 0 || nameText.indexOf(token) >= 0) {
                        add(row.key || '');
                        break;
                    }
                }
            }
        }

        if (rawHint && rawHint !== 'all') {
            add(rawHint);
            addByToken([rawHint]);
        }
        if (rawHint === 'inbox' || rawHint === '') addByToken(['maildir', 'inbox', '받은', '수신']);
        if (rawHint === 'sent') addByToken(['sent', 'sentbox', '보낸', '발신']);
        if (rawHint === 'reserved') addByToken(['reserved', 'reservedbox', '예약']);

        add('all');
        for (i = 0; i < rows.length && i < 3; i++) add(rows[i] && rows[i].key ? rows[i].key : '');
        return out.length ? out : ['all'];
    }

    function fetchMailListByBoxCandidates(keyword, boxCandidates, abortSignal, progress, offset, limit) {
        var cleanKeyword = sanitizeMailKeyword(keyword || '');
        var candidates = Array.isArray(boxCandidates) && boxCandidates.length ? boxCandidates : ['all'];
        var startOffset = parseInt(offset, 10);
        if (isNaN(startOffset) || startOffset < 0) startOffset = 0;
        var pageSize = parseInt(limit, 10);
        if (isNaN(pageSize) || pageSize < 1) pageSize = MAIL_LIST_PAGE_SIZE;
        if (pageSize > 200) pageSize = 200;
        var boxIndex = 0;

        function tryBox() {
            if (boxIndex >= candidates.length) {
                return Promise.resolve({
                    items: [],
                    sourceUrl: '',
                    boxKey: '',
                    keyword: cleanKeyword,
                    payload: null,
                    offset: startOffset,
                    limit: pageSize
                });
            }
            var boxKey = candidates[boxIndex++];
            var urls = buildMailListApiUrls(cleanKeyword, boxKey, startOffset, pageSize);
            var idx = 0;

            function tryUrl(lastResult) {
                var aborted = rejectIfAborted(abortSignal);
                if (aborted) return aborted;
                if (idx >= urls.length) {
                    if (lastResult && Array.isArray(lastResult.items) && lastResult.items.length) return Promise.resolve(lastResult);
                    return tryBox();
                }
                var currentUrl = urls[idx++];
                progress(
                    trf('assistant_notice_mail_list_try', {
                        acl: boxKey,
                        offset: startOffset,
                        limit: pageSize,
                        url: buildHumanReadableUrlLabel(currentUrl)
                    }),
                    'detailed'
                );
                return fetch(currentUrl, buildApiFetchOptions(abortSignal))
                    .then(function (r) { return r.text(); })
                    .then(function (raw) {
                        var payload = parseJsonSafely(raw);
                        var items = parseMailListItemsFromJson(payload, boxKey);
                        if (!items.length) items = parseMailListItemsFromHtml(raw, boxKey);
                        var result = {
                            items: items,
                            sourceUrl: currentUrl,
                            boxKey: boxKey,
                            keyword: cleanKeyword,
                            payload: payload,
                            offset: startOffset,
                            limit: pageSize
                        };
                        if (items.length) return result;
                        return tryUrl(result);
                    })
                    .catch(function (err) {
                        if (isAbortRequestError(err)) return Promise.reject(err);
                        return tryUrl(lastResult);
                    });
            }
            return tryUrl(null);
        }

        return tryBox();
    }

    function fetchMailMenuContext(params, prompt, needDetail, maxItems, abortSignal, progress) {
        var keyword = sanitizeMailKeyword((params && params.keyword) || extractMailKeyword(prompt || ''));
        var hint = resolveMailBoxHint(params || {}, prompt || '');
        progress(tr('assistant_notice_mail_box_info_start'), 'detailed');
        return fetchMailBoxInfo(abortSignal).then(function (mailBoxInfo) {
            var mailboxRows = mailBoxInfo && Array.isArray(mailBoxInfo.rows) ? mailBoxInfo.rows : [];
            var boxCandidates = resolveMailBoxKeyCandidates(mailboxRows, hint);
            var scanItems = Math.max(maxItems, MAIL_LIST_PAGE_SIZE);
            var scanConfig = resolveBrowserPagedScanConfig(params, scanItems);
            progress(
                trf('assistant_notice_mail_list_start', {
                    boxes: boxCandidates.join(','),
                    limit: scanConfig.pageSize,
                    start_page: scanConfig.startPage,
                    max_pages: scanConfig.maxPages,
                    keyword: keyword || '(none)'
                }),
                'detailed'
            );

            function scanMailPages(searchKeyword) {
                var pageIndex = 0;
                var lastSourceUrl = '';
                var lastBoxKey = '';
                var lastPayload = null;

                function doneEmpty(scannedPages, lastPage, lastOffset, paging) {
                    var scanned = parseInt(scannedPages, 10);
                    if (isNaN(scanned) || scanned < 0) scanned = 0;
                    var finalPage = parseInt(lastPage, 10);
                    if (isNaN(finalPage) || finalPage < scanConfig.startPage) finalPage = scanConfig.startPage;
                    var finalOffset = parseInt(lastOffset, 10);
                    if (isNaN(finalOffset) || finalOffset < 0) finalOffset = (finalPage - 1) * scanConfig.pageSize;
                    var pageInfo = (paging && typeof paging === 'object') ? paging : {};
                    return Promise.resolve({
                        items: [],
                        sourceUrl: lastSourceUrl,
                        boxKey: lastBoxKey,
                        keyword: sanitizeMailKeyword(searchKeyword || ''),
                        payload: lastPayload,
                        scannedPages: scanned,
                        startPage: scanConfig.startPage,
                        lastPage: finalPage,
                        startOffset: scanConfig.startOffset,
                        lastOffset: finalOffset,
                        pageSize: scanConfig.pageSize,
                        maxPages: scanConfig.maxPages,
                        hasNextPageKnown: !!pageInfo.known,
                        hasNextPage: !!pageInfo.hasNext,
                        hasNextPageInferred: !!pageInfo.inferred,
                        totalPages: parsePositiveIntValue(pageInfo.totalPages, 0),
                        totalItems: parsePositiveIntValue(pageInfo.totalItems, 0)
                    });
                }

                function runPageScan() {
                    var aborted = rejectIfAborted(abortSignal);
                    if (aborted) return aborted;
                    if (pageIndex >= scanConfig.maxPages) {
                        var maxLastPage = scanConfig.startPage + ((scanConfig.maxPages > 0 ? scanConfig.maxPages : 1) - 1);
                        var maxLastOffset = (maxLastPage - 1) * scanConfig.pageSize;
                        return doneEmpty(scanConfig.maxPages, maxLastPage, maxLastOffset, {
                            known: false,
                            hasNext: false,
                            totalPages: 0,
                            totalItems: 0
                        });
                    }
                    var currentPage = scanConfig.startPage + pageIndex;
                    var currentOffset = (currentPage - 1) * scanConfig.pageSize;
                    progress(trf('assistant_notice_mail_page_scan', {
                        page: currentPage,
                        scan_index: pageIndex + 1,
                        max_pages: scanConfig.maxPages,
                        offset: currentOffset,
                        limit: scanConfig.pageSize
                    }), 'detailed');
                    return fetchMailListByBoxCandidates(searchKeyword, boxCandidates, abortSignal, progress, currentOffset, scanConfig.pageSize)
                        .then(function (listResult) {
                            var result = (listResult && typeof listResult === 'object') ? listResult : {};
                            var items = Array.isArray(result.items) ? result.items : [];
                            if (result.sourceUrl) lastSourceUrl = result.sourceUrl;
                            if (result.boxKey) lastBoxKey = result.boxKey;
                            if (result.payload && typeof result.payload === 'object') lastPayload = result.payload;
                            var scannedPages = pageIndex + 1;
                            var paging = resolveHasNextPageFromPayload(
                                result.payload,
                                currentPage,
                                scanConfig.pageSize,
                                currentOffset,
                                items.length
                            );
                            if (items.length) {
                                return {
                                    items: items,
                                    sourceUrl: result.sourceUrl || lastSourceUrl,
                                    boxKey: result.boxKey || lastBoxKey,
                                    keyword: sanitizeMailKeyword(searchKeyword || ''),
                                    payload: result.payload || lastPayload,
                                    scannedPages: scannedPages,
                                    startPage: scanConfig.startPage,
                                    lastPage: currentPage,
                                    startOffset: scanConfig.startOffset,
                                    lastOffset: currentOffset,
                                    pageSize: scanConfig.pageSize,
                                    maxPages: scanConfig.maxPages,
                                    hasNextPageKnown: !!paging.known,
                                    hasNextPage: !!paging.hasNext,
                                    hasNextPageInferred: !!paging.inferred,
                                    totalPages: parsePositiveIntValue(paging.totalPages, 0),
                                    totalItems: parsePositiveIntValue(paging.totalItems, 0)
                                };
                            }
                            if (!paging.known || !paging.hasNext) {
                                return doneEmpty(scannedPages, currentPage, currentOffset, paging);
                            }
                            pageIndex += 1;
                            return runPageScan();
                        });
                }

                return runPageScan();
            }

            return scanMailPages(keyword).then(function (primaryScan) {
                var primary = (primaryScan && typeof primaryScan === 'object') ? primaryScan : {};
                var primaryItems = Array.isArray(primary.items) ? primary.items : [];
                if (primaryItems.length || !keyword) return primary;
                progress(tr('assistant_notice_mail_keyword_retry_without_filter'), 'detailed');
                return scanMailPages('').then(function (fallbackScan) {
                    return (fallbackScan && typeof fallbackScan === 'object') ? fallbackScan : primary;
                });
            }).then(function (resolvedResult) {
                var result = (resolvedResult && typeof resolvedResult === 'object') ? resolvedResult : {};
                var items = Array.isArray(result.items) ? result.items : [];
                var contextKeyword = collapseText(result.keyword || keyword);
                progress(trf('assistant_notice_mail_list_result', {
                    rows: items.length
                }), 'detailed');
                var listContext = buildMailListContext(items, contextKeyword, result.sourceUrl || '', {
                    selectedMailboxKey: collapseText(result.boxKey || ''),
                    mailboxSourceUrl: mailBoxInfo && mailBoxInfo.sourceUrl ? mailBoxInfo.sourceUrl : '',
                    mailboxTotal: mailboxRows.length
                    }, maxItems);
                if (!needDetail || !items.length) {
                    return attachPagedScanMetaToCollectionResult({
                        context: listContext,
                        reason: items.length ? '' : 'no_context',
                        stats: { keyword: contextKeyword, customer_rows: items.length, activity_rows: 0 }
                    }, items, contextKeyword, result);
                }
                progress(trf('assistant_notice_mail_detail_fetch_start', {
                    items: Math.min(items.length, maxItems)
                }), 'detailed');
                return buildMenuDetailSnapshotContext('Mail', items, fetchMailDetailTextByItem, abortSignal, Math.min(maxItems, MAX_MAIL_DETAIL_ITEMS))
                    .then(function (detailContext) {
                        return attachPagedScanMetaToCollectionResult({
                            context: detailContext ? (listContext + '\n\n' + detailContext) : listContext,
                            reason: items.length ? '' : 'no_context',
                            stats: {
                                keyword: contextKeyword,
                                customer_rows: items.length,
                                activity_rows: detailContext ? Math.min(items.length, maxItems) : 0
                            }
                        }, items, contextKeyword, result);
                    });
            });
        });
    }

    function looksLikeWorklogPage() {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.looksLikeWorklogPage === 'function') {
            return analyzer.looksLikeWorklogPage({
                document: document
            });
        }
        return false;
    }

    function toCellTexts(nodeList) {
        var rows = [];
        var i;
        for (i = 0; i < nodeList.length; i++) {
            var txt = collapseText(nodeList[i].innerText || nodeList[i].textContent || '');
            if (txt) rows.push(txt);
        }
        return rows;
    }

    function findBestWorklogTable() {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.findBestWorklogTable === 'function') {
            return analyzer.findBestWorklogTable({
                document: document,
                toCellTexts: toCellTexts
            });
        }
        return null;
    }

    function resolveWorklogRowColumnCount(tr) {
        if (!tr || !tr.querySelectorAll) return 0;
        var cells = tr.querySelectorAll('td, th');
        if (!cells.length) return 0;
        var total = 0;
        var i;
        for (i = 0; i < cells.length; i++) {
            var span = parseInt(cells[i].getAttribute('colspan'), 10);
            if (isNaN(span) || span < 1) span = 1;
            total += span;
        }
        return total;
    }

    function isLikelyWorklogMetaRow(tr, values, headerCount) {
        if (!tr || !values || !values.length) return true;
        var headers = parseInt(headerCount, 10);
        if (isNaN(headers) || headers < 0) headers = 0;

        var rowCols = resolveWorklogRowColumnCount(tr);
        if (headers >= 3 && rowCols > 0 && rowCols < Math.max(2, Math.floor(headers / 2))) {
            return true;
        }

        var colspanCells = tr.querySelectorAll('td[colspan], th[colspan]');
        if (headers >= 3 && colspanCells.length) {
            var i;
            for (i = 0; i < colspanCells.length; i++) {
                var span = parseInt(colspanCells[i].getAttribute('colspan'), 10);
                if (isNaN(span) || span < 2) continue;
                if (span >= Math.max(2, headers - 1)) return true;
            }
        }

        if (headers >= 3 && values.length <= Math.max(1, Math.floor(headers / 2))) {
            var controls = tr.querySelectorAll('a, button, input, select');
            if (controls.length) return true;
        }

        if (values.length <= 1) {
            var interactive = tr.querySelectorAll('a, button, input, select');
            if (interactive.length >= 3) return true;
        }

        return false;
    }

    function extractWorklogTableContext() {
        if (!looksLikeWorklogPage()) return '';
        var table = findBestWorklogTable();
        if (!table) return '';

        var headers = toCellTexts(table.querySelectorAll('thead th, thead td'));
        var headerCount = headers.length;
        var bodyRows = table.querySelectorAll('tbody tr');
        var lines = [];
        var rowCount = 0;
        var i;
        for (i = 0; i < bodyRows.length; i++) {
            var tr = bodyRows[i];
            if (tr.offsetParent === null) continue;
            var values = toCellTexts(tr.querySelectorAll('td, th'));
            if (!values.length) continue;
            if (isLikelyWorklogMetaRow(tr, values, headerCount)) continue;

            var pairs = [];
            var c;
            for (c = 0; c < values.length; c++) {
                var key = headers[c] || ('col' + (c + 1));
                pairs.push(key + '=' + values[c]);
            }
            lines.push((rowCount + 1) + '. ' + pairs.join('; '));
            rowCount++;
            if (rowCount >= MAX_AUTO_WORKLOG_ROWS) break;
        }

        var capturedAt = new Date();
        var y = capturedAt.getFullYear();
        var m = ('0' + (capturedAt.getMonth() + 1)).slice(-2);
        var d = ('0' + capturedAt.getDate()).slice(-2);
        var hh = ('0' + capturedAt.getHours()).slice(-2);
        var mm = ('0' + capturedAt.getMinutes()).slice(-2);

        var result = [];
        result.push('[Worklog table snapshot]');
        result.push('captured_at=' + y + '-' + m + '-' + d + ' ' + hh + ':' + mm);
        result.push('visible_rows=' + rowCount);
        if (headers.length) result.push('columns=' + headers.join(', '));
        if (lines.length) {
            result.push('rows:');
            result.push(lines.join('\n'));
        }
        return result.join('\n');
    }

    function currentOrigin() {
        if (window.location && window.location.origin) return window.location.origin;
        return (window.location.protocol || 'https:') + '//' + (window.location.host || '');
    }

    function getBaseConfigApiUrl() {
        var candidates = [];
        if (window && window.baseConfig && window.baseConfig.apiUrl) {
            candidates.push(window.baseConfig.apiUrl);
        }
        if (window && window.GWCONF && typeof window.GWCONF === 'object') {
            candidates.push(window.GWCONF.apiUrl);
            candidates.push(window.GWCONF.api_url);
            candidates.push(window.GWCONF.groupwareApiUrl);
            candidates.push(window.GWCONF.groupware_api_url);
        }
        var i;
        for (i = 0; i < candidates.length; i++) {
            var value = collapseText(candidates[i] || '');
            if (!value) continue;
            return String(value).replace(/\/+$/, '');
        }
        return '';
    }

    function normalizeBasePath(value) {
        var path = String(value || '/');
        if (!path) path = '/';
        if (path === '/') {
            var currentPath = String((window.location && window.location.pathname) || '');
            if (currentPath.indexOf('/ngw/') >= 0) path = '/ngw/';
        }
        if (path.charAt(0) !== '/') path = '/' + path;
        if (path.charAt(path.length - 1) !== '/') path += '/';
        return path;
    }

    function buildNgwApiUrls(pathAndQuery, preferredOrigin) {
        var relativePath = String(pathAndQuery || '').replace(/^\/+/, '');
        var bp = normalizeBasePath(basePath);
        var relativeUrl = bp + relativePath;
        var urls = [];
        var seen = {};

        function canonicalUrlKey(url) {
            var value = String(url || '');
            if (!value) return '';
            try {
                var a = document.createElement('a');
                a.href = value;
                var protocol = a.protocol || window.location.protocol || 'https:';
                var host = a.host || window.location.host || '';
                var pathname = a.pathname || '/';
                var search = a.search || '';
                return protocol + '//' + host + pathname + search;
            } catch (e) {
                return value;
            }
        }

        function addUrl(url) {
            var value = String(url || '');
            if (!value) return;
            var key = canonicalUrlKey(value);
            if (!key || seen[key]) return;
            seen[key] = true;
            urls.push(value);
        }

        function addByOrigin(origin) {
            var host = collapseText(origin || '');
            if (!host) return;
            host = host.replace(/\/+$/, '');
            addUrl(host + relativeUrl);
        }

        addByOrigin(preferredOrigin);
        addByOrigin(currentOrigin());
        addByOrigin(extractOriginFromUrl(getBaseConfigApiUrl()));
        addUrl(relativeUrl);
        return urls;
    }

    function buildCurrentNgwApiUrl(pathAndQuery) {
        var relativePath = String(pathAndQuery || '').replace(/^\/+/, '');
        if (!relativePath) return '';
        var bp = normalizeBasePath(basePath);
        return bp + relativePath;
    }

    function extractOriginFromUrl(rawUrl) {
        var value = collapseText(rawUrl || '');
        if (!value) return '';
        try {
            var anchor = document.createElement('a');
            anchor.href = value;
            if (!anchor.protocol || !anchor.host) return '';
            return anchor.protocol + '//' + anchor.host;
        } catch (e) {
            return '';
        }
    }

    function parseUrlQueryMap(rawUrl) {
        var source = String(rawUrl || '');
        var map = {};
        var qPos = source.indexOf('?');
        if (qPos < 0) return map;
        var query = source.substring(qPos + 1);
        var hashPos = query.indexOf('#');
        if (hashPos >= 0) query = query.substring(0, hashPos);
        if (!query) return map;
        var parts = query.split('&');
        var i;
        for (i = 0; i < parts.length; i++) {
            var part = parts[i] || '';
            if (!part) continue;
            var sep = part.indexOf('=');
            var key = sep >= 0 ? part.substring(0, sep) : part;
            var value = sep >= 0 ? part.substring(sep + 1) : '';
            key = decodeUriPart(key);
            value = decodeUriPart(value);
            if (!key) continue;
            map[key] = value;
        }
        return map;
    }

    function decodeUrlEntitiesForDisplay(value) {
        var text = String(value || '');
        if (!text) return '';
        return text
            .replace(/&amp;/gi, '&')
            .replace(/&#x3d;/gi, '=')
            .replace(/&#61;/gi, '=')
            .replace(/&#x2f;/gi, '/')
            .replace(/&#47;/gi, '/');
    }

    function buildHumanReadableUrlLabel(rawUrl) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.buildHumanReadableUrlLabel === 'function') {
            return analyzer.buildHumanReadableUrlLabel(rawUrl, {
                document: document,
                decodeUrlEntitiesForDisplay: decodeUrlEntitiesForDisplay,
                parseUrlQueryMap: parseUrlQueryMap,
                truncateText: truncateText,
                decodeUriPart: decodeUriPart,
                extractUuidFromText: extractUuidFromText
            });
        }
        return collapseText(rawUrl || '');
    }

    function getDiaryViewMetaFromHref(href) {
        var query = parseUrlQueryMap(href);
        var seqNo = collapseText(query.seqNo || query.seqno || query.seq_no || '');
        var id = collapseText(query.id || '');
        var mode = collapseText(query.mode || '');
        var type = collapseText(query.type || '');
        var order = collapseText(query.order || '');
        var sortType = collapseText(query.sort_type || query.sortType || '');
        var numPage = collapseText(query.num_page || query.numPage || '');
        var dpage = collapseText(query.dpage || '');
        return {
            seqNo: seqNo,
            id: id,
            mode: mode,
            type: type,
            order: order,
            sortType: sortType,
            numPage: numPage,
            dpage: dpage
        };
    }

    function extractWorklogKeyword(prompt) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.extractWorklogKeyword === 'function') {
            return analyzer.extractWorklogKeyword(prompt);
        }
        return '';
    }

    function sanitizeWorklogKeyword(keyword) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.sanitizeWorklogKeyword === 'function') {
            return analyzer.sanitizeWorklogKeyword(keyword);
        }
        var text = collapseText(keyword || '');
        if (!text) return '';
        if (text.length > 80) text = text.substring(0, 80);
        return text;
    }

    function getPromptDomainAnalyzer() {
        var root = window.HBAiPromptAnalyzer || null;
        if (!root || typeof root !== 'object') return null;
        var analyzer = root.domain || null;
        if (!analyzer || typeof analyzer !== 'object') return null;
        return analyzer;
    }

    function getWorklogPromptAnalyzer() {
        var root = window.HBAiPromptAnalyzer || null;
        if (!root || typeof root !== 'object') return null;
        var analyzer = root.worklog || null;
        if (!analyzer || typeof analyzer !== 'object') return null;
        return analyzer;
    }

    function selectWorklogRowsForDetail(rows, prompt) {
        var analyzer = getWorklogPromptAnalyzer();
        if (analyzer && typeof analyzer.selectWorklogRowsForDetail === 'function') {
            return analyzer.selectWorklogRowsForDetail(rows, prompt, {
                fallbackItems: MAX_AUTO_WORKLOG_DETAIL_FALLBACK_ITEMS
            });
        }
        var list = Array.isArray(rows) ? rows : [];
        return list.slice(0);
    }

    function makeMyDiaryScope() {
        return {
            type: 'my',
            id: 'default',
            mode: 'pdefault',
            order: 'date',
            sortType: 'desc',
            numPage: MY_DIARY_PAGE_SIZE,
            scopeName: '내업무일지'
        };
    }

    function makeDeptDiaryScope(cn, no, name) {
        var cnText = collapseText(cn || '');
        var noText = collapseText(no || '');
        if (!cnText || !noText) return makeMyDiaryScope();
        return {
            type: 'dept',
            id: cnText + '_' + noText,
            mode: 'e' + cnText + '_' + noText,
            order: 'date',
            sortType: 'desc',
            numPage: DEPT_DIARY_PAGE_SIZE,
            cn: cnText,
            no: noText,
            scopeName: collapseText(name || '')
        };
    }

    function makeAbortError() {
        if (window.DOMException) {
            try {
                return new window.DOMException('Aborted', 'AbortError');
            } catch (e) {
                // fallback below
            }
        }
        var err = new Error('Aborted');
        err.name = 'AbortError';
        return err;
    }

    function isAbortRequestError(err) {
        return !!(err && (err.name === 'AbortError' || err.code === 20));
    }

    function isAbortSignalAborted(signal) {
        return !!(signal && signal.aborted);
    }

    function rejectIfAborted(signal) {
        if (isAbortSignalAborted(signal)) return Promise.reject(makeAbortError());
        return null;
    }

    function buildApiFetchOptions(signal) {
        var options = {
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };
        if (signal) options.signal = signal;
        return options;
    }

    function normalizeDiaryDeptRows(payload) {
        var list = payload && payload.rows;
        if (!list || typeof list.length !== 'number') return [];
        var out = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i];
            if (!row || typeof row !== 'object') continue;
            var cn = collapseText(row.cn || '');
            var no = collapseText(row.no || row.id || '');
            var name = collapseText(row.name || row.text || row.title || '');
            if (!cn || !no) continue;
            out.push({
                cn: cn,
                no: no,
                name: name,
                id: cn + '_' + no,
                mode: 'e' + cn + '_' + no
            });
        }
        return out;
    }

    function flattenDiaryTreeNodes(rows, out, seen) {
        var list = rows;
        if (!list || typeof list.length !== 'number') return;
        var i;
        for (i = 0; i < list.length; i++) {
            var node = list[i] || {};
            var nodeId = collapseText(node.id || node.index || '');
            var nodeIndex = collapseText(node.index || '');
            var nodeType = collapseText(node.type || node.label || '').toLowerCase();
            var cn = collapseText(node.cn || '');
            var no = collapseText(node.no || node.fldseq || '');

            var m = nodeId.match(/^e(\d+)_(\d+)$/i);
            if (!m && nodeIndex) m = nodeIndex.match(/^e(\d+)_(\d+)$/i);
            if (m) {
                if (!cn) cn = m[1];
                if (!no) no = m[2];
            }

            var isDept = (nodeType === 'dept') || /^e\d+_\d+$/i.test(nodeId) || /^e\d+_\d+$/i.test(nodeIndex);
            if (isDept && cn && no) {
                var key = cn + '_' + no;
                if (!seen[key]) {
                    seen[key] = true;
                    out.push({
                        key: key,
                        cn: cn,
                        no: no,
                        id: key,
                        mode: 'e' + key,
                        name: collapseText(node.name || node.text || node.title || key)
                    });
                }
            }
            if (node.children && typeof node.children.length === 'number') {
                flattenDiaryTreeNodes(node.children, out, seen);
            }
        }
    }

    function resolveDiaryScopesFromPrompt(prompt, deptRows, treeNodes) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.resolveDiaryScopesFromPrompt === 'function') {
            return analyzer.resolveDiaryScopesFromPrompt(prompt, deptRows, treeNodes, {
                diaryScopeAliasMap: DIARY_SCOPE_ALIAS_MAP,
                maxScopes: MAX_AUTO_WORKLOG_SCOPES,
                makeMyDiaryScope: makeMyDiaryScope,
                makeDeptDiaryScope: makeDeptDiaryScope
            });
        }
        return [makeMyDiaryScope()];
    }

    function fetchDiaryDeptInfo(abortSignal) {
        if (!window.fetch) return Promise.resolve({ rows: [], sourceUrl: '' });
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;
        var urls = buildNgwApiUrls('diary/diary/dept', '');
        var idx = 0;

        function tryNext(lastResult) {
            var rejected = rejectIfAborted(abortSignal);
            if (rejected) return rejected;
            if (idx >= urls.length) return Promise.resolve(lastResult || { rows: [], sourceUrl: '' });
            var currentUrl = urls[idx++];
            return fetch(currentUrl, buildApiFetchOptions(abortSignal))
                .then(function (r) { return r.text(); })
                .then(function (raw) {
                    var payload = parseJsonSafely(raw);
                    var rows = normalizeDiaryDeptRows(payload);
                    var result = { rows: rows, sourceUrl: currentUrl };
                    if (rows.length) return result;
                    return tryNext(result);
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext(lastResult);
                });
        }

        return tryNext(null);
    }

    function fetchDiaryTreeNodesForDept(deptRow, abortSignal) {
        var row = deptRow || {};
        var cn = collapseText(row.cn || '');
        var no = collapseText(row.no || '');
        if (!cn || !no || !window.fetch) return Promise.resolve({ rows: [], sourceUrl: '' });
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;
        var path = 'diary/tree/index/id/' + encodeURIComponent('e' + cn + '_' + no) + '/menu/ok/reverse/1';
        var urls = buildNgwApiUrls(path, '');
        var idx = 0;

        function tryNext(lastResult) {
            var rejected = rejectIfAborted(abortSignal);
            if (rejected) return rejected;
            if (idx >= urls.length) return Promise.resolve(lastResult || { rows: [], sourceUrl: '' });
            var currentUrl = urls[idx++];
            return fetch(currentUrl, buildApiFetchOptions(abortSignal))
                .then(function (r) { return r.text(); })
                .then(function (raw) {
                    var payload = parseJsonSafely(raw);
                    var nodes = [];
                    var seen = {};
                    flattenDiaryTreeNodes(payload && payload.rows, nodes, seen);
                    var result = { rows: nodes, sourceUrl: currentUrl };
                    if (nodes.length) return result;
                    return tryNext(result);
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return Promise.reject(err);
                    return tryNext(lastResult);
                });
        }

        return tryNext(null);
    }

    function fetchDiaryScopeCatalog(abortSignal) {
        if (!window.fetch) {
            return Promise.resolve({ deptRows: [], treeNodes: [], deptSourceUrl: '', treeSourceUrls: [] });
        }
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;
        if (state.diaryScopeCache && state.diaryScopeCache.data && state.diaryScopeCache.at) {
            if ((now() - state.diaryScopeCache.at) < DIARY_SCOPE_CACHE_TTL_MS) {
                return Promise.resolve(state.diaryScopeCache.data);
            }
        }
        return fetchDiaryDeptInfo(abortSignal).then(function (deptInfo) {
            var deptRows = Array.isArray(deptInfo.rows) ? deptInfo.rows : [];
            if (!deptRows.length) {
                var empty = { deptRows: [], treeNodes: [], deptSourceUrl: deptInfo.sourceUrl || '', treeSourceUrls: [] };
                state.diaryScopeCache = { at: now(), data: empty };
                return empty;
            }

            var tasks = [];
            var i;
            for (i = 0; i < deptRows.length; i++) {
                (function (deptRow) {
                    tasks.push(
                        fetchDiaryTreeNodesForDept(deptRow, abortSignal).catch(function (err) {
                            if (isAbortRequestError(err)) return Promise.reject(err);
                            return { rows: [], sourceUrl: '' };
                        })
                    );
                })(deptRows[i]);
            }

            return Promise.all(tasks).then(function (treeResults) {
                var mergedNodes = [];
                var seen = {};
                var treeSources = [];
                var idx;
                for (idx = 0; idx < treeResults.length; idx++) {
                    var r = treeResults[idx] || {};
                    if (r.sourceUrl) treeSources.push(r.sourceUrl);
                    var nodeRows = Array.isArray(r.rows) ? r.rows : [];
                    var j;
                    for (j = 0; j < nodeRows.length; j++) {
                        var node = nodeRows[j];
                        if (!node || !node.key || seen[node.key]) continue;
                        seen[node.key] = true;
                        mergedNodes.push(node);
                    }
                }

                for (i = 0; i < deptRows.length; i++) {
                    var dept = deptRows[i];
                    if (!dept || !dept.id || seen[dept.id]) continue;
                    seen[dept.id] = true;
                    mergedNodes.push({
                        key: dept.id,
                        cn: dept.cn,
                        no: dept.no,
                        id: dept.id,
                        mode: dept.mode,
                        name: dept.name
                    });
                }

                var catalog = {
                    deptRows: deptRows,
                    treeNodes: mergedNodes,
                    deptSourceUrl: deptInfo.sourceUrl || '',
                    treeSourceUrls: treeSources
                };
                state.diaryScopeCache = { at: now(), data: catalog };
                return catalog;
            });
        });
    }

    function resolveDiaryHref(rawHref, sourceUrl) {
        var href = String(rawHref || '');
        if (!href) return '';
        if (/^https?:\/\//i.test(href)) return href;
        var origin = extractOriginFromUrl(sourceUrl) || currentOrigin();
        if (href.charAt(0) === '/') return origin + href;
        var urls = buildNgwApiUrls(href, origin);
        return urls.length ? urls[0] : href;
    }

    function mergeDiaryRowData(primary, secondary) {
        var out = {};
        var key;
        var src1 = secondary || {};
        var src2 = primary || {};
        for (key in src1) {
            if (!Object.prototype.hasOwnProperty.call(src1, key)) continue;
            out[key] = src1[key];
        }
        for (key in src2) {
            if (!Object.prototype.hasOwnProperty.call(src2, key)) continue;
            out[key] = src2[key];
        }
        return out;
    }

    function normalizeDiarySeqNoText(value) {
        var text = collapseText(value || '');
        if (!text) return '';
        var prefixed = text.match(/^[a-z](\d+_\d+_\d+)$/i);
        if (prefixed && prefixed[1]) return prefixed[1];
        return text;
    }

    function normalizeDiaryListRowsContainer(payload) {
        if (!payload || typeof payload !== 'object') return [];
        var rows = payload.rows || payload.list || payload.data || payload.items || null;
        if (!rows && payload.hits && payload.hits.hits) rows = payload.hits.hits;
        if (!rows && payload.result && payload.result.hits && payload.result.hits.hits) rows = payload.result.hits.hits;
        if (!rows && payload.data && payload.data.hits && payload.data.hits.hits) rows = payload.data.hits.hits;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.rows)) rows = rows.rows;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.list)) rows = rows.list;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.items)) rows = rows.items;
        if (rows && !Array.isArray(rows) && typeof rows === 'object') {
            rows = objectValuesArray(rows);
        }
        if (!rows || typeof rows.length !== 'number') return [];
        return rows;
    }

    function normalizeDiaryListRowFromAny(row, scope, sourceUrl) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.normalizeDiaryListRowFromAny === 'function') {
            return analyzer.normalizeDiaryListRowFromAny(row, scope, sourceUrl, {
                mergeDiaryRowData: mergeDiaryRowData,
                getDiaryViewMetaFromHref: getDiaryViewMetaFromHref,
                normalizeDiarySeqNoText: normalizeDiarySeqNoText,
                resolveDiaryHref: resolveDiaryHref,
                extractOriginFromUrl: extractOriginFromUrl
            });
        }
        return null;
    }

    function parseDiaryListItemsFromJson(payload, scope, sourceUrl) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.parseDiaryListItemsFromJson === 'function') {
            return analyzer.parseDiaryListItemsFromJson(payload, scope, sourceUrl, {
                maxRows: MAX_AUTO_WORKLOG_ROWS,
                normalizeDiaryListRowsContainer: normalizeDiaryListRowsContainer,
                mergeDiaryRowData: mergeDiaryRowData,
                getDiaryViewMetaFromHref: getDiaryViewMetaFromHref,
                normalizeDiarySeqNoText: normalizeDiarySeqNoText,
                resolveDiaryHref: resolveDiaryHref,
                extractOriginFromUrl: extractOriginFromUrl
            });
        }
        return [];
    }

    function parseDiaryListItemsFromHtml(html, scope, sourceUrl) {
        var analyzer = getPromptDomainAnalyzer();
        if (analyzer && typeof analyzer.parseDiaryListItemsFromHtml === 'function') {
            return analyzer.parseDiaryListItemsFromHtml(html, scope, sourceUrl, {
                maxRows: MAX_AUTO_WORKLOG_ROWS,
                toCellTexts: toCellTexts,
                getDiaryViewMetaFromHref: getDiaryViewMetaFromHref,
                resolveDiaryHref: resolveDiaryHref,
                extractOriginFromUrl: extractOriginFromUrl
            });
        }
        return [];
    }

    function buildCustomerSearchApiPath(keyword) {
        var clean = sanitizeCustomerKeyword(keyword || '');
        if (!clean) return '';

        var params = [];
        var fields = ['name', 'tel', 'email', 'website', 'ip', 'address'];
        var i;
        for (i = 0; i < fields.length; i++) {
            params.push('combine_fields%5B%5D=' + encodeURIComponent(fields[i]));
        }
        params.push('combine_keyword=' + encodeURIComponent(clean));
        params.push('extra_opt=all');
        params.push('page=1');
        params.push('page_size=' + encodeURIComponent(MAX_CUSTOMER_SEARCH_ROWS));
        params.push('search_type=combine');
        params.push('sort_col=last_stage_date');
        params.push('sort_order=desc');
        params.push('stages%5B%5D=general');
        params.push('states%5B%5D=general');
        params.push('types%5B%5D=company');
        params.push('types%5B%5D=contact');
        return 'customer/search/advanced?' + params.join('&');
    }

    function resolveNgwAbsoluteHref(rawHref, sourceUrl) {
        var href = String(rawHref || '');
        if (!href) return '';
        if (/^https?:\/\//i.test(href)) return href;
        var origin = extractOriginFromUrl(sourceUrl) || currentOrigin();
        if (href.charAt(0) === '/') return origin + href;
        var urls = buildNgwApiUrls(href, origin);
        return urls.length ? urls[0] : '';
    }

    function buildCustomerViewUrl(row, sourceUrl) {
        var data = row || {};
        var direct = collapseText(data.view_url || data.viewUrl || data.href || data.link || data.url || '');
        if (direct) return resolveNgwAbsoluteHref(direct, sourceUrl);

        var code = collapseText(data.code || data.customer_code || data.customerCode || '');
        if (!code) return '';
        var cn = collapseText(data.cn || data.customer_cn || '1');
        var cateId = collapseText(data.cate_id || data.account_type || '400');
        if (!cn) cn = '1';
        if (!cateId) cateId = '400';
        var path = '_web/customer/customer_view/customer/management/customer/'
            + encodeURIComponent(code) + '/'
            + encodeURIComponent(cn) + '/'
            + encodeURIComponent(cateId) + '/view';
        var urls = buildNgwApiUrls(path, extractOriginFromUrl(sourceUrl));
        return urls.length ? urls[0] : '';
    }

    function normalizeCustomerSearchRows(payload, sourceUrl) {
        var rows = payload && (payload.rows || payload.list || payload.data || payload.items);
        if (rows && !Array.isArray(rows) && Array.isArray(rows.rows)) rows = rows.rows;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.items)) rows = rows.items;
        if (rows && !Array.isArray(rows) && typeof rows === 'object') rows = objectValuesArray(rows);
        if (!rows || typeof rows.length !== 'number') return [];

        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var customerId = collapseText(row.id || row.customer_id || row.customerId || row.idx || '');
            var code = collapseText(row.code || row.customer_code || row.customerCode || '');
            var name = collapseText(row.name || row.customer_name || row.customerName || '');
            if (!customerId && !code && !name) continue;
            var key = customerId || code || name;
            if (seen[key]) continue;
            seen[key] = true;

            var normalized = {
                id: customerId,
                code: code,
                name: name,
                cn: collapseText(row.cn || '1'),
                cateId: collapseText(row.cate_id || row.account_type || '400'),
                type: collapseText(row.type || ''),
                category: collapseText(row.category || ''),
                groupName: collapseText(row.group_name || row.groupName || ''),
                lastActivityDate: collapseText(row.last_activity_date || row.last_updated || row.regdate || ''),
                sourceUrl: sourceUrl || ''
            };
            normalized.viewUrl = buildCustomerViewUrl(row, sourceUrl);
            out.push(normalized);
            if (out.length >= MAX_CUSTOMER_SEARCH_ROWS) break;
        }
        return out;
    }

    function buildCustomerActivityApiPath(customerCode, cn, activityLimit, activityTypesCsv) {
        var code = collapseText(customerCode || '');
        if (!code) return '';
        var companyCn = collapseText(cn || '1');
        if (!companyCn) companyCn = '1';
        var limitValue = parseInt(activityLimit, 10);
        if (isNaN(limitValue) || limitValue < 1) limitValue = CUSTOMER_ACTIVITY_LIMIT;
        if (limitValue > CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD) limitValue = CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD;
        var typeCsv = collapseText(activityTypesCsv || '');
        if (!typeCsv) typeCsv = CUSTOMER_ACTIVITY_TYPES_ALL.join(',');

        var params = [];
        params.push('customer_code=' + encodeURIComponent(code));
        params.push('limit=' + encodeURIComponent(limitValue));
        params.push('offset=0');
        params.push('order=desc');
        params.push('sort=regdate');
        params.push('type=' + encodeURIComponent(typeCsv));
        return 'activity/search/' + encodeURIComponent(companyCn) + '?' + params.join('&');
    }

    function normalizeCustomerActivityType(value) {
        var text = collapseText(value || '').toLowerCase();
        if (!text) return '';
        if (text.indexOf('live') >= 0 && text.indexOf('chat') >= 0) return 'livechat';
        if (text.indexOf('ticket') >= 0 || text.indexOf('helpdesk') >= 0) return 'ticket';
        return text;
    }

    function extractUuidFromText(value) {
        var text = String(value || '');
        if (!text) return '';
        var m = text.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
        return m && m[0] ? m[0] : '';
    }

    function buildCrmMailViewUrl(timeuuid, sourceUrl) {
        var uuid = extractUuidFromText(timeuuid || '');
        if (!uuid) return '';
        var origin = extractOriginFromUrl(sourceUrl) || currentOrigin();
        if (!origin) return '';
        origin = origin.replace(/\/+$/, '');
        return origin + '/cgi-bin/NEW/mailTohtml5.do?act=crmmailview&timeuuid=' + encodeURIComponent(uuid);
    }

    function normalizeNumericText(value) {
        var text = collapseText(value || '');
        if (!text) return '';
        var numeric = text.replace(/[^0-9]/g, '');
        return numeric || '';
    }

    function extractTicketNoFromDetailUrl(url) {
        var text = collapseText(url || '');
        if (!text) return '';
        var m = text.match(/\/helpdesk\/tickets\/[^\/?#]+\/([^\/?#]+)/i);
        if (!m || !m[1]) return '';
        return normalizeNumericText(m[1]);
    }

    function buildTicketUserViewUrl(ticketNo) {
        var no = normalizeNumericText(ticketNo || '');
        if (!no) return '';
        var origin = currentOrigin();
        var bp = normalizeBasePath(basePath);
        return origin + bp + 'app/#/helpdesk/tickets/view/' + encodeURIComponent(no);
    }

    function toCustomerActivityDisplayUrl(fetchUrl, type) {
        var raw = collapseText(fetchUrl || '');
        if (!raw) return '';
        var normalizedType = normalizeCustomerActivityType(type || '');
        if (normalizedType === 'ticket') {
            var ticketNo = extractTicketNoFromDetailUrl(raw);
            var userUrl = buildTicketUserViewUrl(ticketNo);
            if (userUrl) return userUrl;
        }
        return raw;
    }

    function mapCustomerActivityTypeToDetailPath(value) {
        var type = normalizeCustomerActivityType(value || '');
        if (!type) return '';

        if (type === 'phone') return 'call';
        if (type === 'promise') return 'appointment';
        if (type === 'mail') return 'post';

        if (
            type === 'call' || type === 'task' || type === 'meeting'
            || type === 'appointment' || type === 'post'
            || type === 'fax' || type === 'sms'
        ) {
            return type;
        }
        return '';
    }

    function getCustomerActivityIdCandidate(row) {
        var data = row || {};
        var candidates = [
            data.id, data.activity_id, data.activityId,
            data.uuid, data.idx, data.no, data.seq, data.seq_no, data.log_id, data.logId
        ];
        var i;
        for (i = 0; i < candidates.length; i++) {
            var id = collapseText(candidates[i] || '');
            if (!id) continue;
            return id;
        }
        return '';
    }

    function buildCustomerActivityDetailUrl(row, type, customerCn, sourceUrl) {
        var data = row || {};
        var direct = collapseText(data.href || data.url || data.link || data.target_url || data.targetUrl || '');
        if (direct) return resolveNgwAbsoluteHref(direct, sourceUrl);

        var normalizedType = normalizeCustomerActivityType(type || data.type || data.activity_type || data.kind || '');
        var companyCn = collapseText(customerCn || data.cn || '1');
        if (!companyCn) companyCn = '1';

        if (normalizedType === 'email') {
            var mailUuid = extractUuidFromText(
                collapseText(
                    data.timeuuid || data.time_uuid || data.mail_uuid || data.mailUuid || data.uuid || data.id || ''
                )
                + ' ' + collapseText(data.content || '')
                + ' ' + collapseText(data.summary || '')
                + ' ' + collapseText(data.message || '')
            );
            var mailUrl = buildCrmMailViewUrl(mailUuid, sourceUrl);
            if (mailUrl) return mailUrl;
        }

        if (normalizedType === 'livechat') {
            var uuid = collapseText(
                data.uuid
                || data.chat_uuid
                || data.livechat_uuid
                || data.room_uuid
                || data.id
                || data.activity_id
                || data.activityId
                || ''
            );
            if (!uuid) {
                uuid = extractUuidFromText(
                    direct + ' '
                    + collapseText(data.content || '')
                    + ' ' + collapseText(data.message || '')
                    + ' ' + collapseText(data.summary || '')
                    + ' ' + collapseText(data.firstmsg || '')
                );
            }
            if (uuid) {
                var livePath = 'livechat/livechat/info?uuid=' + encodeURIComponent(uuid);
                var liveUrls = buildNgwApiUrls(livePath, extractOriginFromUrl(sourceUrl));
                if (liveUrls.length) return liveUrls[0];
            }
        }

        if (normalizedType === 'ticket') {
            var candidates = [
                data.ticket_no, data.ticketNo, data.ticket_id, data.ticketId,
                data.tid, data.sid, data.id, data.idx, data.no, data.seq
            ];
            var i;
            for (i = 0; i < candidates.length; i++) {
                var ticketNo = normalizeNumericText(candidates[i]);
                if (!ticketNo) continue;
                var ticketPath = 'helpdesk/tickets/' + encodeURIComponent(companyCn) + '/' + encodeURIComponent(ticketNo);
                var ticketUrls = buildNgwApiUrls(ticketPath, extractOriginFromUrl(sourceUrl));
                if (ticketUrls.length) return ticketUrls[0];
            }
        }

        var detailType = mapCustomerActivityTypeToDetailPath(normalizedType);
        if (detailType) {
            var activityId = getCustomerActivityIdCandidate(data);
            if (activityId) {
                var detailPath = 'activity/'
                    + encodeURIComponent(detailType) + '/'
                    + encodeURIComponent(companyCn) + '/'
                    + encodeURIComponent(activityId);
                var detailUrls = buildNgwApiUrls(detailPath, extractOriginFromUrl(sourceUrl));
                if (detailUrls.length) return detailUrls[0];
            }
        }

        return '';
    }

    function normalizeCustomerActivityRows(payload, customerRow, sourceUrl, maxItems) {
        var rows = payload && (payload.rows || payload.list || payload.data || payload.items);
        if (rows && !Array.isArray(rows) && Array.isArray(rows.rows)) rows = rows.rows;
        if (rows && !Array.isArray(rows) && Array.isArray(rows.items)) rows = rows.items;
        if (rows && !Array.isArray(rows) && typeof rows === 'object') rows = objectValuesArray(rows);
        if (!rows || typeof rows.length !== 'number') return [];
        var cap = parseInt(maxItems, 10);
        if (isNaN(cap) || cap < 1) cap = CUSTOMER_ACTIVITY_LIMIT;
        if (cap > CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD) cap = CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD;

        var out = [];
        var seen = {};
        var customerCn = customerRow && customerRow.cn ? customerRow.cn : '1';
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var type = normalizeCustomerActivityType(
                row.type || row.activity_type || row.activityType || row.kind || row.category || row.module || ''
            );
            var title = collapseText(
                row.title || row.subject || row.firstmsg || row.name || row.memo || row.summary || row.message || row.contents || row.content || ''
            );
            var date = collapseText(row.regdate || row.date || row.created || row.last_updated || '');
            var snippet = collapseText(row.contents || row.content || row.firstmsg || row.memo || row.message || row.summary || '');
            if (snippet.length > 180) snippet = snippet.substring(0, 180) + '...';
            var detailUrl = buildCustomerActivityDetailUrl(row, type, customerCn, sourceUrl);
            var livechatPreview = '';
            if (type === 'livechat') {
                livechatPreview = buildCustomerLivechatPreview(row.msg || row.messages || row.chatlog || [], MAX_CUSTOMER_LIVECHAT_PREVIEW_CHARS);
            }
            var uniq = [
                type,
                detailUrl,
                title,
                date,
                collapseText(row.id || row.idx || row.no || '')
            ].join('|');
            if (seen[uniq]) continue;
            seen[uniq] = true;

            out.push({
                type: type || 'activity',
                title: title || '(제목 없음)',
                date: date,
                snippet: snippet,
                detailUrl: toCustomerActivityDisplayUrl(detailUrl, type),
                detailFetchUrl: detailUrl,
                detailPreview: livechatPreview,
                detailStatus: livechatPreview ? 'inline' : ''
            });
            if (out.length >= cap) break;
        }
        return out;
    }

    function buildCustomerActivityCopy(row) {
        var src = row || {};
        return {
            type: src.type || '',
            title: src.title || '',
            date: src.date || '',
            snippet: src.snippet || '',
            detailUrl: src.detailUrl || '',
            detailFetchUrl: src.detailFetchUrl || src.detailUrl || '',
            detailStatus: src.detailStatus || '',
            detailHttp: src.detailHttp || 0,
            detailPreview: src.detailPreview || '',
            callRecordFile: src.callRecordFile || '',
            callRecordExt: src.callRecordExt || '',
            callRecordText: src.callRecordText || '',
            callRecordSummary: src.callRecordSummary || '',
            callFromNumber: src.callFromNumber || '',
            callToNumber: src.callToNumber || '',
            callDirection: src.callDirection || ''
        };
    }

    function normalizeCustomerCallRecordUrl(rawUrl, sourceUrl) {
        var raw = collapseText(rawUrl || '');
        if (!raw) return '';
        var resolved = resolveNgwAbsoluteHref(raw, sourceUrl);
        return resolved || raw;
    }

    function pickCustomerDetailObject(payload) {
        if (!payload || typeof payload !== 'object') return null;
        var candidates = [payload.rows, payload.row, payload.data, payload.item, payload.result];
        var i;
        for (i = 0; i < candidates.length; i++) {
            var row = candidates[i];
            if (row && typeof row === 'object' && !Array.isArray(row)) return row;
        }
        return payload;
    }

    function pickCustomerDetailMessage(payload) {
        if (!payload || typeof payload !== 'object') return '';
        var candidate = (
            payload.message
            || payload.msg
            || payload.error
            || payload.reason
            || payload.detail
            || ''
        );
        if (typeof candidate !== 'string' && typeof candidate !== 'number') return '';
        return collapseText(candidate);
    }

    function pickCustomerDetailContent(payload) {
        if (!payload || typeof payload !== 'object') return '';
        if (typeof payload.contents === 'string') return normalizeCollectedBrowserContextText(payload.contents);
        if (typeof payload.content === 'string') return normalizeCollectedBrowserContextText(payload.content);
        if (typeof payload.body === 'string') return normalizeCollectedBrowserContextText(payload.body);
        if (typeof payload.comment === 'string') return normalizeCollectedBrowserContextText(payload.comment);
        return '';
    }

    function pickCustomerLivechatMessages(payload, detailObj) {
        function pickFromObject(obj) {
            if (!obj || typeof obj !== 'object') return [];
            if (Array.isArray(obj.msg)) return obj.msg;
            if (Array.isArray(obj.messages)) return obj.messages;
            if (Array.isArray(obj.chatlog)) return obj.chatlog;
            return [];
        }

        var direct = pickFromObject(detailObj);
        if (direct.length) return direct;

        direct = pickFromObject(payload);
        if (direct.length) return direct;

        var rows = payload && payload.rows;
        if (!rows || typeof rows.length !== 'number') return [];
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row || typeof row !== 'object') continue;
            var rowMsg = pickFromObject(row);
            if (rowMsg.length) return rowMsg;
        }
        return [];
    }

    function buildCustomerLivechatPreview(messages, maxChars) {
        var rows = Array.isArray(messages) ? messages : [];
        if (!rows.length) return '';

        var lines = [];
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i] || {};
            var msgType = collapseText(row.type || '').toLowerCase();
            if (!msgType) msgType = 'msg';
            var sender = collapseText(row.name || row.user_name || row.user || '');
            var message = collapseText(row.msg || row.message || row.text || '');
            var line = '';

            if (msgType === 'msg') {
                if (!message) continue;
                line = (sender ? sender + ': ' : '') + message;
            } else if (msgType === 'file') {
                var filename = collapseText(row.filename || row.file_name || row.file || '');
                var fileLabel = filename || message || '(파일)';
                line = '[파일] ' + (sender ? sender + ': ' : '') + fileLabel;
            } else if (msgType === 'event') {
                var eventName = collapseText(row.event || message || '');
                if (!eventName) continue;
                line = '[이벤트] ' + (sender ? sender + ': ' : '') + eventName;
            } else {
                if (!message) continue;
                line = '[' + msgType + '] ' + (sender ? sender + ': ' : '') + message;
            }

            if (!line) continue;
            lines.push((lines.length + 1) + ') ' + line);
            if (lines.length >= MAX_CUSTOMER_LIVECHAT_PREVIEW_ITEMS) break;
        }

        if (!lines.length) return '';
        var preview = lines.join(' || ');
        var cap = parseInt(maxChars, 10);
        if (isNaN(cap) || cap < 1) cap = MAX_CUSTOMER_LIVECHAT_PREVIEW_CHARS;
        if (preview.length > cap) {
            preview = preview.substring(0, cap) + '...';
        }
        return preview;
    }

    function normalizeCustomerDetailPreview(rawText, activityType, sourceUrl) {
        var raw = rawText == null ? '' : String(rawText);
        var out = {
            preview: '',
            callRecordFile: '',
            callRecordExt: '',
            callRecordText: '',
            callRecordSummary: '',
            callFromNumber: '',
            callToNumber: '',
            callDirection: ''
        };
        if (!raw) return out;

        var payload = parseJsonSafely(raw);
        var text = '';
        var detailObj = null;
        var detailType = normalizeCustomerActivityType(activityType || '');

        if (payload && typeof payload === 'object') {
            detailObj = pickCustomerDetailObject(payload);
            text = pickCustomerDetailMessage(payload);
            if (!text) {
                text = pickCustomerDetailMessage(detailObj);
            }
            if (!text) {
                text = pickCustomerDetailContent(detailObj);
            }
            if (!text) {
                text = pickCustomerDetailContent(payload);
            }

            detailType = normalizeCustomerActivityType(
                (detailObj && (detailObj.type || detailObj.activity_type || detailObj.activityType || detailObj.kind || detailObj.module || ''))
                || detailType
            );
            if (detailType === 'livechat') {
                var messages = pickCustomerLivechatMessages(payload, detailObj);
                var livechatPreview = buildCustomerLivechatPreview(messages, MAX_CUSTOMER_LIVECHAT_PREVIEW_CHARS);
                if (livechatPreview) {
                    text = livechatPreview;
                } else if (!text) {
                    text = collapseText(
                        (detailObj && (detailObj.firstmsg || detailObj.subject || detailObj.content)) || ''
                    );
                }
            }
            if (detailType === 'call' && detailObj && typeof detailObj === 'object') {
                out.callRecordFile = normalizeCustomerCallRecordUrl(detailObj.record_file || detailObj.recordFile || '', sourceUrl || '');
                out.callRecordExt = collapseText(detailObj.record_ext || detailObj.recordExt || '');
                out.callRecordText = truncateText(detailObj.record_text || detailObj.recordText || '', MAX_CUSTOMER_CALL_RECORD_TEXT_CHARS);
                out.callRecordSummary = truncateText(detailObj.record_summary || detailObj.recordSummary || '', MAX_CUSTOMER_CALL_RECORD_SUMMARY_CHARS);
                out.callFromNumber = collapseText(detailObj.from_number || detailObj.fromNumber || '');
                out.callToNumber = collapseText(detailObj.to_number || detailObj.toNumber || '');
                out.callDirection = collapseText(detailObj.direction || '');
                if (!text) {
                    text = collapseText(
                        out.callRecordSummary
                        || out.callRecordText
                        || detailObj.subject
                        || detailObj.content
                        || ''
                    );
                }
            }
        }

        if (!text) {
            text = normalizeCollectedBrowserContextText(raw);
        }
        if (!text) text = '';
        var previewCap = (detailType === 'livechat')
            ? MAX_CUSTOMER_LIVECHAT_PREVIEW_CHARS
            : MAX_CUSTOMER_DETAIL_PREVIEW_CHARS;
        if (text.length > previewCap) {
            text = text.substring(0, previewCap) + '...';
        }
        out.preview = text;
        return out;
    }

    function fetchCustomerActivityDetailPreview(activity, abortSignal) {
        var base = buildCustomerActivityCopy(activity);
        var fetchUrl = base.detailFetchUrl || base.detailUrl || '';
        if (normalizeCustomerActivityType(base.type || '') === 'livechat' && base.detailPreview) {
            base.detailStatus = base.detailStatus || 'ok';
            return Promise.resolve(base);
        }
        if (!window.fetch || !fetchUrl) {
            base.detailStatus = base.detailStatus || 'not_fetched';
            return Promise.resolve(base);
        }
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        return fetch(fetchUrl, buildApiFetchOptions(abortSignal))
            .then(function (response) {
                var statusCode = response && typeof response.status === 'number' ? response.status : 0;
                return response.text().then(function (raw) {
                    var detailData = normalizeCustomerDetailPreview(raw, base.type || '', fetchUrl);
                    base.detailHttp = statusCode;
                    base.detailPreview = detailData.preview || '';
                    base.callRecordFile = detailData.callRecordFile || '';
                    base.callRecordExt = detailData.callRecordExt || '';
                    base.callRecordText = detailData.callRecordText || '';
                    base.callRecordSummary = detailData.callRecordSummary || '';
                    base.callFromNumber = detailData.callFromNumber || '';
                    base.callToNumber = detailData.callToNumber || '';
                    base.callDirection = detailData.callDirection || '';
                    if (statusCode >= 200 && statusCode < 300) {
                        base.detailStatus = 'ok';
                    } else if (statusCode >= 300 && statusCode < 400) {
                        base.detailStatus = 'redirect';
                    } else {
                        base.detailStatus = 'http_error';
                    }
                    return base;
                });
            })
            .catch(function (err) {
                if (isAbortRequestError(err)) return Promise.reject(err);
                base.detailStatus = 'fetch_error';
                base.detailHttp = 0;
                base.detailPreview = collapseText((err && err.message) ? err.message : 'request_failed');
                return base;
            });
    }

    function mapWithConcurrency(items, limit, worker, abortSignal) {
        var list = Array.isArray(items) ? items : [];
        if (!list.length) return Promise.resolve([]);

        var max = parseInt(limit, 10);
        if (isNaN(max) || max < 1) max = 1;

        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        return new Promise(function (resolve, reject) {
            var results = new Array(list.length);
            var nextIndex = 0;
            var active = 0;
            var done = 0;
            var settled = false;

            function resolveOnce(value) {
                if (settled) return;
                settled = true;
                resolve(value);
            }

            function rejectOnce(err) {
                if (settled) return;
                settled = true;
                reject(err);
            }

            function launchNext() {
                if (settled) return;
                if (isAbortSignalAborted(abortSignal)) {
                    rejectOnce(makeAbortError());
                    return;
                }
                if (done >= list.length) {
                    resolveOnce(results);
                    return;
                }
                while (active < max && nextIndex < list.length) {
                    (function (idx) {
                        active += 1;
                        Promise.resolve()
                            .then(function () {
                                if (isAbortSignalAborted(abortSignal)) throw makeAbortError();
                                return worker(list[idx], idx);
                            })
                            .then(function (value) { results[idx] = value; })
                            .catch(function (err) {
                                if (isAbortRequestError(err) || isAbortSignalAborted(abortSignal)) {
                                    rejectOnce(isAbortRequestError(err) ? err : makeAbortError());
                                    return;
                                }
                                results[idx] = null;
                            })
                            .then(function () {
                                active -= 1;
                                done += 1;
                                if (settled) return;
                                launchNext();
                            });
                    })(nextIndex);
                    nextIndex += 1;
                }
            }

            launchNext();
        });
    }

    function enrichCustomerActivitiesWithDetail(rows, abortSignal) {
        var list = Array.isArray(rows) ? rows : [];
        if (!list.length) return Promise.resolve([]);
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        var out = [];
        var idx;
        for (idx = 0; idx < list.length; idx++) {
            out.push(buildCustomerActivityCopy(list[idx]));
        }

        var targets = [];
        for (idx = 0; idx < out.length; idx++) {
            if (!out[idx] || !out[idx].detailUrl) {
                out[idx].detailStatus = out[idx].detailStatus || 'not_fetched';
                continue;
            }
            targets.push(idx);
        }

        if (!targets.length) return Promise.resolve(out);
        return mapWithConcurrency(targets, CUSTOMER_DETAIL_FETCH_CONCURRENCY, function (targetIndex) {
            var row = out[targetIndex];
            return fetchCustomerActivityDetailPreview(row, abortSignal).then(function (updated) {
                out[targetIndex] = updated;
                return updated;
            });
        }, abortSignal).then(function () { return out; });
    }

    function normalizeCustomerIssueToken(token) {
        var text = collapseText(token || '').toLowerCase();
        if (!text) return '';
        if (/(라이브\s*챗|live\s*chat|livechat|채팅)/i.test(text)) return 'livechat';
        if (/(티켓|ticket|helpdesk)/i.test(text)) return 'ticket';
        if (/(이메일|메일|email|e-mail)/i.test(text)) return 'email';
        if (/(전화|통화|콜|call|phone|녹음|녹취|recording|transcript)/i.test(text)) return 'call';
        return text;
    }

    function buildCustomerActivityTypeHintText(type) {
        var normalizedType = normalizeCustomerActivityType(type || '');
        switch (normalizedType) {
            case 'livechat':
                return 'livechat 라이브챗 라이브 채팅 chat 채팅';
            case 'ticket':
                return 'ticket 티켓 helpdesk 헬프데스크';
            case 'email':
                return 'email mail 이메일 메일';
            case 'call':
                return 'call phone 전화 통화 콜 녹음 녹취 recording transcript';
            case 'meeting':
                return 'meeting 미팅 회의';
            case 'appointment':
                return 'appointment 약속 일정';
            case 'task':
                return 'task 업무 할일';
            case 'post':
                return 'post 우편 메일';
            case 'fax':
                return 'fax 팩스';
            case 'sms':
                return 'sms 문자';
            default:
                return normalizedType;
        }
    }

    function filterCustomerActivitiesByIssue(rows, issueKeyword) {
        var list = Array.isArray(rows) ? rows : [];
        var keyword = sanitizeCustomerIssueKeyword(issueKeyword || '');
        if (!keyword) return list;

        var tokens = keyword.toLowerCase().split(/\s+/);
        var scored = [];
        var i;
        for (i = 0; i < list.length; i++) {
            var row = list[i] || {};
            var titleText = collapseText(row.title || '');
            var snippetText = collapseText(row.snippet || '');
            var detailText = collapseText(row.detailPreview || '');
            var recordSummaryText = collapseText(row.callRecordSummary || '');
            var recordText = collapseText(row.callRecordText || '');
            var typeHintText = buildCustomerActivityTypeHintText(row.type || '');
            var typeHintLower = typeHintText.toLowerCase();
            var titleLower = titleText.toLowerCase();
            var detailLower = detailText.toLowerCase();
            var summaryLower = recordSummaryText.toLowerCase();
            var recordLower = recordText.toLowerCase();
            var hay = [
                collapseText(row.type || ''),
                typeHintText,
                titleText,
                snippetText,
                detailText,
                recordSummaryText,
                recordText
            ].join(' ').toLowerCase();
            var score = 0;
            var j;
            for (j = 0; j < tokens.length; j++) {
                var rawToken = tokens[j];
                if (!rawToken || rawToken.length < 2) continue;
                var token = normalizeCustomerIssueToken(rawToken);
                if (!token || token.length < 2) continue;
                var tokenHit = (hay.indexOf(rawToken) >= 0) || (hay.indexOf(token) >= 0);
                if (!tokenHit) continue;
                score += 1;
                if (typeHintLower.indexOf(token) >= 0) score += 3;
                if (recordLower.indexOf(rawToken) >= 0 || recordLower.indexOf(token) >= 0) score += 3;
                else if (summaryLower.indexOf(rawToken) >= 0 || summaryLower.indexOf(token) >= 0) score += 2;
                else if (detailLower.indexOf(rawToken) >= 0 || detailLower.indexOf(token) >= 0) score += 2;
                else if (titleLower.indexOf(rawToken) >= 0 || titleLower.indexOf(token) >= 0) score += 1;
            }
            if (score > 0) scored.push({ row: row, score: score, idx: i });
        }
        if (!scored.length) return [];

        scored.sort(function (a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return a.idx - b.idx;
        });

        var filtered = [];
        for (i = 0; i < scored.length; i++) {
            filtered.push(scored[i].row);
        }
        return filtered;
    }

    function buildCustomerSearchContext(rows, keyword, sourceUrl) {
        var list = Array.isArray(rows) ? rows : [];
        var out = [];
        out.push('[Customer search snapshot (고객 검색)]');
        if (sourceUrl) out.push('source=' + escapeTextForContext(buildHumanReadableUrlLabel(sourceUrl)));
        if (keyword) out.push('combine_keyword=' + escapeTextForContext(keyword));
        out.push('rows=' + list.length);
        if (!list.length) return out.join('\n');

        out.push('customers:');
        var i;
        for (i = 0; i < list.length && i < MAX_CUSTOMER_SEARCH_ROWS; i++) {
            var row = list[i] || {};
            var fields = [];
            if (row.code) fields.push('code=' + escapeTextForContext(row.code));
            if (row.name) fields.push('name=' + escapeTextForContext(row.name));
            if (row.groupName) fields.push('group=' + escapeTextForContext(row.groupName));
            if (row.type) fields.push('type=' + escapeTextForContext(row.type));
            if (row.lastActivityDate) fields.push('last=' + escapeTextForContext(row.lastActivityDate));
            if (row.viewUrl) fields.push('view_url=' + row.viewUrl);
            out.push((i + 1) + '. ' + fields.join('; '));
        }
        return out.join('\n');
    }

    function fetchCustomerSearchContext(keyword, abortSignal) {
        var clean = sanitizeCustomerKeyword(keyword || '');
        if (!window.fetch || !clean) {
            return Promise.resolve({ context: '', rows: [], keyword: clean, sourceUrl: '' });
        }
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        var path = buildCustomerSearchApiPath(clean);
        if (!path) return Promise.resolve({ context: '', rows: [], keyword: clean, sourceUrl: '' });
        var currentUrl = buildCurrentNgwApiUrl(path);
        if (!currentUrl) {
            return Promise.resolve({ context: '', rows: [], keyword: clean, sourceUrl: '' });
        }
        return fetch(currentUrl, buildApiFetchOptions(abortSignal))
            .then(function (r) { return r.text(); })
            .then(function (raw) {
                var payload = parseJsonSafely(raw);
                var rows = normalizeCustomerSearchRows(payload, currentUrl);
                return {
                    context: buildCustomerSearchContext(rows, clean, currentUrl),
                    rows: rows,
                    keyword: clean,
                    sourceUrl: currentUrl
                };
            })
            .catch(function (err) {
                if (isAbortRequestError(err)) return Promise.reject(err);
                return { context: '', rows: [], keyword: clean, sourceUrl: currentUrl };
            });
    }

    function fetchCustomerActivityForCustomer(customerRow, issueKeyword, activityLimit, activityTypesCsv, abortSignal) {
        var row = customerRow || {};
        var code = collapseText(row.code || '');
        if (!window.fetch || !code) {
            return Promise.resolve({
                customer: row,
                sourceUrl: '',
                activities: [],
                matchedCount: 0,
                totalActivities: 0,
                detailFetchedCount: 0
            });
        }
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        var limitValue = parseInt(activityLimit, 10);
        if (isNaN(limitValue) || limitValue < 1) limitValue = CUSTOMER_ACTIVITY_LIMIT;
        if (limitValue > CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD) limitValue = CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD;

        var path = buildCustomerActivityApiPath(code, row.cn || '1', limitValue, activityTypesCsv);
        if (!path) {
            return Promise.resolve({
                customer: row,
                sourceUrl: '',
                activities: [],
                matchedCount: 0,
                totalActivities: 0,
                detailFetchedCount: 0
            });
        }
        var currentUrl = buildCurrentNgwApiUrl(path);
        if (!currentUrl) {
            return Promise.resolve({
                customer: row,
                sourceUrl: '',
                activities: [],
                matchedCount: 0,
                totalActivities: 0,
                detailFetchedCount: 0
            });
        }
        return fetch(currentUrl, buildApiFetchOptions(abortSignal))
            .then(function (r) { return r.text(); })
            .then(function (raw) {
                var payload = parseJsonSafely(raw);
                var normalized = normalizeCustomerActivityRows(payload, row, currentUrl, limitValue);
                var filtered = filterCustomerActivitiesByIssue(normalized, issueKeyword || '');
                return enrichCustomerActivitiesWithDetail(filtered, abortSignal).then(function (enriched) {
                    var detailFetched = 0;
                    var di;
                    for (di = 0; di < enriched.length; di++) {
                        if (enriched[di] && enriched[di].detailStatus && enriched[di].detailStatus !== 'not_fetched') {
                            detailFetched += 1;
                        }
                    }
                    return {
                        customer: row,
                        sourceUrl: currentUrl,
                        activities: enriched,
                        matchedCount: filtered.length,
                        totalActivities: normalized.length,
                        detailFetchedCount: detailFetched
                    };
                });
            })
            .catch(function (err) {
                if (isAbortRequestError(err)) return Promise.reject(err);
                return {
                    customer: row,
                    sourceUrl: currentUrl,
                    activities: [],
                    matchedCount: 0,
                    totalActivities: 0,
                    detailFetchedCount: 0
                };
            });
    }

    function buildCustomerActivityContext(results, issueKeyword) {
        var rows = Array.isArray(results) ? results : [];
        if (!rows.length) return '';
        var out = [];
        out.push('[Customer activity snapshot (고객 활동내역)]');
        var issue = sanitizeCustomerIssueKeyword(issueKeyword || '');
        if (issue) out.push('issue_keyword=' + escapeTextForContext(issue));

        var i;
        for (i = 0; i < rows.length; i++) {
            var entry = rows[i] || {};
            var customer = entry.customer || {};
            out.push('customer_code=' + escapeTextForContext(customer.code || '')
                + '; customer_name=' + escapeTextForContext(customer.name || '')
                + (customer.viewUrl ? '; customer_view=' + customer.viewUrl : '')
            );
            if (entry.sourceUrl) out.push('activity_source=' + escapeTextForContext(buildHumanReadableUrlLabel(entry.sourceUrl)));
            if (!isNaN(parseInt(entry.totalActivities, 10))) {
                out.push('activity_total=' + parseInt(entry.totalActivities, 10));
            }
            if (!isNaN(parseInt(entry.detailFetchedCount, 10))) {
                out.push('detail_fetched=' + parseInt(entry.detailFetchedCount, 10));
            }
            if (!isNaN(parseInt(entry.matchedCount, 10))) {
                out.push('issue_matched=' + parseInt(entry.matchedCount, 10));
            }

            var acts = Array.isArray(entry.activities) ? entry.activities : [];
            out.push('activity_rows=' + acts.length);
            if (!acts.length) continue;
            out.push('activities:');
            var j;
            for (j = 0; j < acts.length && j < MAX_CUSTOMER_ACTIVITY_ITEMS; j++) {
                var act = acts[j] || {};
                var fields = [];
                var detailPreview = normalizeStructuredTextBlock(act.detailPreview || '');
                if (act.type) fields.push('type=' + escapeTextForContext(act.type));
                if (act.date) fields.push('date=' + escapeTextForContext(act.date));
                if (act.title) fields.push('title=' + escapeTextForContext(act.title));
                if (act.snippet) fields.push('snippet=' + escapeTextForContext(act.snippet));
                if (act.detailUrl) fields.push('detail_url=' + act.detailUrl);
                if (act.detailStatus) fields.push('detail_status=' + escapeTextForContext(act.detailStatus));
                if (act.detailHttp) fields.push('detail_http=' + escapeTextForContext(act.detailHttp));
                if (detailPreview && detailPreview.indexOf('\n') < 0) fields.push('detail_preview=' + escapeTextForContext(detailPreview));
                if (act.callDirection) fields.push('call_direction=' + escapeTextForContext(act.callDirection));
                if (act.callFromNumber) fields.push('call_from=' + escapeTextForContext(act.callFromNumber));
                if (act.callToNumber) fields.push('call_to=' + escapeTextForContext(act.callToNumber));
                if (act.callRecordExt) fields.push('call_record_ext=' + escapeTextForContext(act.callRecordExt));
                if (act.callRecordFile) fields.push('call_record_file=' + escapeTextForContext(act.callRecordFile));
                if (act.callRecordSummary) fields.push('call_record_summary=' + escapeTextForContext(act.callRecordSummary));
                if (act.callRecordText) fields.push('call_record_text=' + escapeTextForContext(act.callRecordText));
                out.push((j + 1) + '. ' + fields.join('; '));
                if (detailPreview && detailPreview.indexOf('\n') >= 0) {
                    out.push('detail_preview_markdown=');
                    out.push(detailPreview);
                }
            }
        }
        return out.join('\n');
    }

    function fetchCustomerActivityContext(customers, issueKeyword, activityLimit, activityTypesCsv, abortSignal) {
        var list = Array.isArray(customers) ? customers.slice(0, MAX_CUSTOMER_ACTIVITY_CUSTOMERS) : [];
        if (!list.length) {
            return Promise.resolve({
                context: '',
                rows: [],
                matchCount: 0,
                totalActivities: 0,
                detailFetched: 0
            });
        }
        var aborted = rejectIfAborted(abortSignal);
        if (aborted) return aborted;

        var limitValue = parseInt(activityLimit, 10);
        if (isNaN(limitValue) || limitValue < 1) limitValue = CUSTOMER_ACTIVITY_LIMIT;
        if (limitValue > CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD) limitValue = CUSTOMER_ACTIVITY_LIMIT_WITH_PERIOD;

        return mapWithConcurrency(list, CUSTOMER_DETAIL_FETCH_CONCURRENCY, function (customerRow) {
            return fetchCustomerActivityForCustomer(customerRow, issueKeyword, limitValue, activityTypesCsv, abortSignal);
        }, abortSignal).then(function (results) {
            var rows = [];
            var i;
            for (i = 0; i < results.length; i++) {
                if (results[i]) rows.push(results[i]);
            }
            var matchCount = 0;
            var totalActivities = 0;
            var detailFetched = 0;
            for (i = 0; i < rows.length; i++) {
                matchCount += parseInt(rows[i].matchedCount, 10) || 0;
                totalActivities += parseInt(rows[i].totalActivities, 10) || 0;
                detailFetched += parseInt(rows[i].detailFetchedCount, 10) || 0;
            }
            return {
                context: buildCustomerActivityContext(rows, issueKeyword || ''),
                rows: rows,
                matchCount: matchCount,
                totalActivities: totalActivities,
                detailFetched: detailFetched
            };
        });
    }

    function normalizeConversationSummaryLine(value) {
        var raw = value == null ? '' : String(value);
        if (!raw) return '';
        var firstLine = raw.replace(/\r\n?/g, '\n').split('\n')[0] || '';
        var text = collapseText(firstLine.replace(/^\s*[-*]\s*/, ''));
        if (!text || /^\[[^\]]+\]$/.test(text)) return '';

        var matched = text.match(/^(user|assistant|u|a)\s*:\s*(.*)$/i);
        if (matched) {
            var roleToken = collapseText(matched[1] || '').toLowerCase();
            var role = (roleToken === 'assistant' || roleToken === 'a') ? 'assistant' : 'user';
            var content = truncateText(matched[2] || '', MAX_REQUEST_SUMMARY_LINE_CHARS);
            if (!content) return '';
            return '- ' + role + ': ' + content;
        }

        return '- ' + truncateText(text, MAX_REQUEST_SUMMARY_LINE_CHARS);
    }

    function extractConversationSummaryLines(text) {
        var raw = text == null ? '' : String(text);
        if (!raw) return [];
        var rows = raw.replace(/\r\n?/g, '\n').split('\n');
        var out = [];
        var i9;
        for (i9 = 0; i9 < rows.length; i9++) {
            var normalized = normalizeConversationSummaryLine(rows[i9]);
            if (!normalized) continue;
            out.push(normalized);
        }
        return out;
    }

    function dedupeConversationSummaryLines(lines) {
        if (!lines || typeof lines.length !== 'number' || !lines.length) return [];
        var seen = {};
        var out = [];
        var i9;
        for (i9 = lines.length - 1; i9 >= 0; i9--) {
            var line = normalizeConversationSummaryLine(lines[i9]);
            if (!line) continue;
            var key = collapseText(line).toLowerCase();
            if (!key || seen[key]) continue;
            seen[key] = true;
            out.unshift(line);
        }
        return out;
    }

    function clampConversationSummaryLines(lines) {
        var normalized = dedupeConversationSummaryLines(lines || []);
        if (!normalized.length) return [];

        if (normalized.length > MAX_REQUEST_SUMMARY_LINES) {
            var headCount = Math.min(MAX_REQUEST_SUMMARY_HEAD_LINES, Math.max(0, MAX_REQUEST_SUMMARY_LINES - 12));
            var tailCount = MAX_REQUEST_SUMMARY_LINES - headCount;
            if (tailCount < 0) tailCount = MAX_REQUEST_SUMMARY_LINES;
            var head = headCount > 0 ? normalized.slice(0, headCount) : [];
            var tailStart = normalized.length - tailCount;
            if (tailStart < head.length) tailStart = head.length;
            var tail = normalized.slice(tailStart);
            normalized = dedupeConversationSummaryLines(head.concat(tail));
        }

        while (normalized.length && normalized.join('\n').length > MAX_REQUEST_SUMMARY_CHARS) {
            if (normalized.length > MAX_REQUEST_SUMMARY_HEAD_LINES + 1) {
                normalized.splice(MAX_REQUEST_SUMMARY_HEAD_LINES, 1);
                continue;
            }
            normalized.shift();
        }
        return normalized;
    }

    function normalizeConversationSummaryText(text) {
        var lines = clampConversationSummaryLines(extractConversationSummaryLines(text));
        if (!lines.length) return '';
        return lines.join('\n');
    }

    function buildConversationSummaryFromMessages(sourceMessages) {
        if (!sourceMessages || typeof sourceMessages.length !== 'number' || !sourceMessages.length) return '';
        var lines = [];
        var i9;
        for (i9 = 0; i9 < sourceMessages.length; i9++) {
            var msg = sourceMessages[i9];
            if (!msg || typeof msg !== 'object') continue;
            var role = collapseText(msg.role || '').toLowerCase();
            if (role !== 'user' && role !== 'assistant') continue;
            var content = truncateText(msg.content || '', MAX_REQUEST_SUMMARY_LINE_CHARS);
            if (!content) continue;
            lines.push('- ' + role + ': ' + content);
        }
        if (!lines.length) return '';
        return clampConversationSummaryLines(lines).join('\n');
    }

    function mergeConversationSummaryText(baseSummary, extraSummary) {
        var merged = extractConversationSummaryLines(baseSummary).concat(extractConversationSummaryLines(extraSummary));
        merged = clampConversationSummaryLines(merged);
        if (!merged.length) return '';
        return merged.join('\n');
    }

    function foldConversationMessagesIntoSummary(conversation, sourceMessages) {
        if (!conversation || typeof conversation !== 'object') return '';
        var addition = buildConversationSummaryFromMessages(sourceMessages);
        conversation.summary = mergeConversationSummaryText(conversation.summary || '', addition);
        return conversation.summary || '';
    }

    function buildCompressedHistory(sourceMessages, persistedSummary) {
        var rows = [];
        var i9;

        for (i9 = 0; i9 < sourceMessages.length; i9++) {
            var msg = sourceMessages[i9];
            if (!msg || (msg.role !== 'user' && msg.role !== 'assistant')) continue;
            rows.push({ role: msg.role, content: msg.content });
        }

        if (rows.length <= MAX_REQUEST_HISTORY) {
            return {
                history: rows,
                summary: normalizeConversationSummaryText(persistedSummary || '')
            };
        }

        var recent = rows.slice(-MAX_REQUEST_HISTORY);
        var older = rows.slice(0, rows.length - MAX_REQUEST_HISTORY);
        return {
            history: recent,
            summary: mergeConversationSummaryText(persistedSummary || '', buildConversationSummaryFromMessages(older))
        };
    }

    function setSending(isSending) {
        state.sending = !!isSending;
        input.disabled = false;
        modelSelect.disabled = false;
        reasoningSelect.disabled = false;
        attachBtn.disabled = false;
        attachInput.disabled = false;
        updateSendButtonState();
        updateStopButtonState();
        renderAttachmentList();
        renderRequestQueue();
    }

    function updateSendButtonState() {
        var hasText = collapseText(String((input && input.value) || '')) !== '';
        sendBtn.disabled = !hasText;
        if (hasText) {
            removeClassName(sendBtn, 'is-disabled');
            sendBtn.title = tr('assistant.ui.send', 'Send');
            sendBtn.setAttribute('aria-label', tr('assistant.ui.send', 'Send'));
            return;
        }
        addClassName(sendBtn, 'is-disabled');
        sendBtn.title = tr('assistant.ui.send.disabled_no_text', 'Type a message to enable send');
        sendBtn.setAttribute('aria-label', tr('assistant.ui.send.disabled_no_text', 'Type a message to enable send'));
    }

    function updateStopButtonState() {
        if (!stopBtn) return;
        var enabled = hasActiveRequestForCurrentConversation();
        stopBtn.disabled = !enabled;
        if (enabled) {
            addClassName(stopBtn, 'is-active');
            stopBtn.title = tr('assistant.ui.stop.active', 'Stop current response');
            stopBtn.setAttribute('aria-label', tr('assistant.ui.stop.active', 'Stop current response'));
            return;
        }
        removeClassName(stopBtn, 'is-active');
        if (hasAnyActiveRequests()) {
            stopBtn.title = tr('assistant.ui.stop.disabled_other_conversation', 'Another conversation is running');
            stopBtn.setAttribute('aria-label', tr('assistant.ui.stop.disabled_other_conversation', 'Another conversation is running'));
            return;
        }
        stopBtn.title = tr('assistant.ui.stop.disabled_idle', 'No active request to stop');
        stopBtn.setAttribute('aria-label', tr('assistant.ui.stop.disabled_idle', 'No active request to stop'));
    }

    function stopCurrentRequest() {
        var conversationId = collapseText(state.activeConversationId || '');
        if (!conversationId) return;
        var stopped = interruptActiveRequest(
            tr('assistant.message.stop.interrupted', 'The current response was stopped by user request.'),
            conversationId
        );
        if (!stopped) {
            addConversationMessage('system', tr('assistant.message.stop.none', 'No active request to stop in this conversation.'), conversationId);
        }
    }

    function buildRequestQueueItem(payload) {
        var row = payload || {};
        return {
            id: makeId(),
            prompt: row.prompt || '',
            userViewText: row.userViewText || row.prompt || '',
            attachmentPayload: Array.isArray(row.attachmentPayload) ? row.attachmentPayload.slice(0) : [],
            userMessageId: row.userMessageId || '',
            conversationId: row.conversationId || '',
            provider: row.provider || '',
            model: row.model || '',
            modelKey: row.modelKey || '',
            reasoningEffort: row.reasoningEffort || '',
            history: row.history || [],
            digest: row.digest || '',
            includePageContext: !!row.includePageContext,
            steering: '',
            createdAt: now()
        };
    }

    function cloneRequestItem(item) {
        var row = item || {};
        return {
            id: row.id || makeId(),
            prompt: row.prompt || '',
            userViewText: row.userViewText || row.prompt || '',
            attachmentPayload: Array.isArray(row.attachmentPayload) ? row.attachmentPayload.slice(0) : [],
            userMessageId: row.userMessageId || '',
            conversationId: row.conversationId || '',
            provider: row.provider || '',
            model: row.model || '',
            modelKey: row.modelKey || '',
            reasoningEffort: row.reasoningEffort || '',
            history: Array.isArray(row.history) ? row.history.slice(0) : [],
            digest: row.digest || '',
            includePageContext: !!row.includePageContext,
            steering: row.steering || '',
            createdAt: row.createdAt || now()
        };
    }

    function mergeSteeringText(baseText, addText) {
        var base = collapseText(baseText || '');
        var add = collapseText(addText || '');
        if (!add) return base;
        if (!base) return add;
        return base + '\n' + add;
    }

    function buildMergedSteeringRequest(activeItem, steeringItem) {
        var merged = cloneRequestItem(activeItem);
        var steeringPrompt = steeringItem ? (steeringItem.prompt || steeringItem.userViewText || '') : '';
        merged.steering = mergeSteeringText(merged.steering, steeringPrompt);
        return merged;
    }

    function editQueuedRequestSteering(id) {
        var targetId = (id || '').toString();
        if (!targetId) return;

        var item = findQueuedRequestById(targetId);
        if (!item) return;

        item = removeQueuedRequestById(targetId);
        if (!item) return;
        renderRequestQueue();

        var activeForConversation = getActiveRequestByConversationId(item.conversationId);
        var activeItem = activeForConversation && activeForConversation.item ? activeForConversation.item : null;
        if (activeItem) {
            var mergedItem = buildMergedSteeringRequest(activeItem, item);
            var steeringSummary = collapseText(item.prompt || item.userViewText || '');

            interruptActiveRequest(tr('assistant.message.steering.interrupt_and_reprocess', 'Stopping current response and reprocessing with steering.'), mergedItem.conversationId);
            if (steeringSummary) {
                addConversationMessage(
                    'system',
                    trff('assistant.message.steering.applied', 'Steering applied: {text}', {
                        text: truncateText(steeringSummary, 120)
                    }),
                    mergedItem.conversationId
                );
            } else {
                addConversationMessage('system', tr('assistant.message.steering.reprocess', 'Reprocessing with steering applied.'), mergedItem.conversationId);
            }
            processRequestItem(mergedItem);
            return;
        }

        if (isConversationBusy(item.conversationId)) {
            state.requestQueue.unshift(item);
            renderRequestQueue();
            addConversationMessage('system', tr('assistant.message.queue.moved_to_top_busy', 'A request in this conversation is already running, so it was moved to the top of the queue.'), item.conversationId);
            processNextQueuedRequest();
            return;
        }

        addConversationMessage('system', tr('assistant.message.queue.process_immediately', 'Processing request immediately.'), item.conversationId);
        processRequestItem(item);
    }

    function deleteQueuedRequest(id) {
        var target = findQueuedRequestById(id);
        if (!target) return;
        if (!window.confirm(tr('assistant.confirm.delete_queued_request', 'Delete this request from queue?'))) return;
        removeQueuedRequestById(id);
        renderRequestQueue();
    }

    function enqueueRequestItem(item) {
        if (!item) return;
        state.requestQueue.push(item);
        renderRequestQueue();
    }

    function appendSteeringToContext(contextText, steeringText) {
        var steering = collapseText(steeringText || '');
        if (!steering) return contextText || '';
        if (contextText) {
            return contextText + '\n\n[Steering instruction]\n' + steering;
        }
        return '[Steering instruction]\n' + steering;
    }

    function beginActiveRequest(item) {
        state.requestSerial = (parseInt(state.requestSerial, 10) || 0) + 1;
        var conversationKey = requestConversationKey(item && item.conversationId ? item.conversationId : '');
        var active = {
            id: state.requestSerial,
            item: item || null,
            canceled: false,
            conversationKey: conversationKey,
            stage: 'working',
            controller: null,
            startedAt: now()
        };
        if (typeof window.AbortController === 'function') {
            try {
                active.controller = new window.AbortController();
            } catch (e) {
                active.controller = null;
            }
        }
        if (!state.activeRequests || typeof state.activeRequests !== 'object') {
            state.activeRequests = {};
        }
        state.activeRequests[conversationKey] = active;
        syncPrimaryActiveRequest();
        setSending(true);
        return active;
    }

    function isActiveRequest(active) {
        if (!active || active.canceled) return false;
        var key = active.conversationKey || requestConversationKey(active.item && active.item.conversationId ? active.item.conversationId : '');
        var current = state.activeRequests && state.activeRequests[key];
        return !!(current && current.id === active.id);
    }

    function completeActiveRequest(active) {
        if (!active) return;
        var key = active.conversationKey || requestConversationKey(active.item && active.item.conversationId ? active.item.conversationId : '');
        var current = state.activeRequests && state.activeRequests[key];
        if (!current || current.id !== active.id) return;
        delete state.activeRequests[key];
        syncPrimaryActiveRequest();
        setSending(hasAnyActiveRequests());
        processNextQueuedRequest();
    }

    function interruptActiveRequest(messageText, conversationId) {
        var active = conversationId ? getActiveRequestByConversationId(conversationId) : getAnyActiveRequest();
        if (!active) return false;
        active.canceled = true;
        if (active.controller && active.controller.abort) {
            try {
                active.controller.abort();
            } catch (e) {
                // ignore abort errors
            }
        }
        var key = active.conversationKey || requestConversationKey(active.item && active.item.conversationId ? active.item.conversationId : '');
        if (state.activeRequests && state.activeRequests[key] && state.activeRequests[key].id === active.id) {
            delete state.activeRequests[key];
        }
        syncPrimaryActiveRequest();
        setSending(hasAnyActiveRequests());
        if (messageText && active.item && active.item.conversationId) {
            addConversationMessage('system', messageText, active.item.conversationId);
        }
        return true;
    }

    function processRequestItem(item) {
        if (!item) return Promise.resolve();
        var requestConversation = item.conversationId ? getConversationById(item.conversationId) : null;
        if (!requestConversation) {
            requestConversation = ensureConversation();
            item.conversationId = requestConversation.id;
        }
        notifyQueuedModelSwitchIfNeeded(item);
        ensureConversationMessageIds(requestConversation);

        var trackedUserMessageId = collapseText(item.userMessageId || '');
        var historySource = [];
        if (requestConversation && requestConversation.messages && requestConversation.messages.length) {
            var iMsg;
            for (iMsg = 0; iMsg < requestConversation.messages.length; iMsg++) {
                var historyRow = requestConversation.messages[iMsg];
                if (!historyRow || typeof historyRow !== 'object') continue;
                if (trackedUserMessageId && collapseText(historyRow.id || '') === trackedUserMessageId) continue;
                historySource.push(historyRow);
            }
        }
        var compressed = buildCompressedHistory(historySource, requestConversation.summary || '');

        if (!trackedUserMessageId) {
            var userMeta = addConversationMessage('user', item.userViewText || item.prompt || '', item.conversationId);
            if (userMeta && userMeta.conversationId) {
                item.conversationId = userMeta.conversationId;
            }
            item.userMessageId = userMeta && userMeta.messageId ? userMeta.messageId : '';
        }

        if (!window.fetch) {
            addConversationMessage('system', tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'), item.conversationId);
            return Promise.resolve();
        }

        var active = beginActiveRequest(item);
        var requestAiMeta = null;
        setActiveRequestStage(active, 'plan');

        if (!supportsChatSseStream()) {
            addConversationMessage('system', tr('assistant.message.stream_not_supported', 'This browser does not support streaming responses required by AI assistant.'), item.conversationId);
            completeActiveRequest(active);
            return Promise.resolve();
        }

        var providerForRequest = collapseText(item.provider || state.selectedProviderId || '');
        if (!providerForRequest) providerForRequest = 'openai';

        var baseContextParts = [];
        if (item.includePageContext) {
            var pageContext = getPageContext();
            if (pageContext) {
                baseContextParts.push('[Current page text]\n' + pageContext);
            }
        }
        var baseContextText = baseContextParts.join('\n\n');

        requestAiMeta = {
            provider: providerForRequest,
            model: item.model || '',
            request: {
                promptChars: (item.prompt || '').length,
                contextChars: baseContextText.length,
                historyCount: Array.isArray(compressed.history) ? compressed.history.length : 0,
                summaryChars: (compressed.summary || '').length,
                attachmentCount: Array.isArray(item.attachmentPayload) ? item.attachmentPayload.length : 0,
                includePageContext: !!item.includePageContext
            }
        };

        var actionPlanBundle = { actions: [], intent: null, confidence: 0, notice: '' };
        var browserCollectionBundle = {
            context: '',
            sections: [],
            passes: 0,
            resolved_count: 0,
            unresolved_count: 0,
            unresolved: [],
            retry_candidates: [],
            errors: [],
            steps: []
        };
        var plannedBrowserActionCount = 0;
        var plannedServerActionCount = 0;
        var requestSignal = active.controller ? active.controller.signal : null;
        var serverWaitTimer = 0;
        var serverWaitTick = 0;
        var seenServerProgressIds = {};
        var serverPlanPreviewShown = false;
        var collectionStepNoticeShown = false;
        var serverCollectionStartNoticeShown = false;
        var lastServerStage = '';
        var serverWaitMergeKey = 'server_wait_pulse_' + String(active.id || '');
        var serverWorkSnapshotText = '';
        var serverActionHintQueue = [];
        var clientCollectionRequestState = {};
        var browserToolsRequestState = {};

        function addEphemeralSystemMessage(text, options) {
            var message = text == null ? '' : String(text);
            if (!message.trim()) return;
            var opts = options && typeof options === 'object' ? options : {};
            var nextOpts = {};
            var key;
            for (key in opts) {
                if (!Object.prototype.hasOwnProperty.call(opts, key)) continue;
                nextOpts[key] = opts[key];
            }
            nextOpts.progressEphemeral = true;
            addConversationMessage('system', message, item.conversationId, nextOpts);
        }

        function queueServerActionHints(actions) {
            var rows = Array.isArray(actions) ? actions : [];
            serverActionHintQueue = [];
            var i;
            for (i = 0; i < rows.length; i++) {
                var row = rows[i] || {};
                var menuKey = normalizeCollectorMenuKey(row);
                var operation = sanitizeActionPlanOperation(row.operation || row.op || '');
                var source = normalizeActionPlanSource(row.source || '', 'browser_ajax');
                if (source === 'browser_ajax') continue;
                serverActionHintQueue.push({
                    menu_key: menuKey,
                    operation: operation || 'search',
                    source: source,
                    params: (row.params && typeof row.params === 'object' && !Array.isArray(row.params)) ? row.params : {}
                });
            }
        }

        function popServerActionHint(menuKey, operation, source) {
            if (!serverActionHintQueue.length) return null;
            var menu = normalizeCollectorMenuKeyAlias(sanitizeActionPlanMenuKey(menuKey || '', []));
            var op = sanitizeActionPlanOperation(operation || '');
            var src = normalizeActionPlanSource(source || '', 'browser_ajax');
            var i;
            var row = null;
            for (i = 0; i < serverActionHintQueue.length; i++) {
                var item = serverActionHintQueue[i] || {};
                if (item.menu_key !== menu) continue;
                if (item.source !== src) continue;
                if (op && item.operation !== op) continue;
                row = serverActionHintQueue.splice(i, 1)[0];
                break;
            }
            if (row) return row;
            for (i = 0; i < serverActionHintQueue.length; i++) {
                item = serverActionHintQueue[i] || {};
                if (item.menu_key !== menu) continue;
                row = serverActionHintQueue.splice(i, 1)[0];
                break;
            }
            return row;
        }

        function buildServerActionHintText(paramsRaw) {
            var params = (paramsRaw && typeof paramsRaw === 'object' && !Array.isArray(paramsRaw)) ? paramsRaw : {};
            var hints = [];
            if (params.id) hints.push('id=' + sanitizeIntentKeyword(params.id, 80));
            if (params.keyword) hints.push('keyword=' + sanitizeIntentKeyword(params.keyword, 80));
            if (params.issue_keyword) hints.push('issue=' + sanitizeIntentKeyword(params.issue_keyword, 80));
            if (params.query) hints.push('query=' + sanitizeIntentKeyword(params.query, 80));
            if (params.target_board) hints.push('board=' + sanitizeIntentKeyword(params.target_board, 40));
            if (params.scope_type) hints.push('scope_type=' + collapseText(params.scope_type));
            if (params.scope_id) hints.push('scope_id=' + collapseText(params.scope_id));
            if (Array.isArray(params.scopes) && params.scopes.length) {
                var scopeLabels = [];
                var k;
                for (k = 0; k < params.scopes.length && k < 3; k++) {
                    var scopeRow = params.scopes[k] || {};
                    var scopeType = collapseText(scopeRow.type || scopeRow.scope_type || '').toLowerCase();
                    var scopeId = collapseText(scopeRow.id || scopeRow.scope_id || '').toLowerCase();
                    if (!scopeType) continue;
                    scopeLabels.push(scopeType + '/' + (scopeId || 'default'));
                }
                if (scopeLabels.length) hints.push('scopes=' + scopeLabels.join(','));
            }
            if (params.from_date) hints.push('from=' + collapseText(params.from_date));
            if (params.to_date) hints.push('to=' + collapseText(params.to_date));
            if (Object.prototype.hasOwnProperty.call(params, 'offset')) hints.push('offset=' + collapseText(params.offset));
            if (Object.prototype.hasOwnProperty.call(params, 'page')) hints.push('page=' + collapseText(params.page));
            if (Object.prototype.hasOwnProperty.call(params, 'limit')) hints.push('limit=' + collapseText(params.limit));
            if (Object.prototype.hasOwnProperty.call(params, 'page_size')) hints.push('page_size=' + collapseText(params.page_size));
            if (Object.prototype.hasOwnProperty.call(params, 'max_pages')) hints.push('max_pages=' + collapseText(params.max_pages));
            if (Object.prototype.hasOwnProperty.call(params, 'need_detail') && toBooleanFlag(params.need_detail)) {
                hints.push('detail=true');
            }
            return hints.join(', ');
        }

        function buildElapsedMsSuffix(value) {
            var elapsedMs = parseInt(value, 10);
            if (isNaN(elapsedMs) || elapsedMs < 0) return '';
            if (elapsedMs > 1000) {
                return ' (' + (elapsedMs / 1000).toFixed(2) + ' s)';
            }
            return ' (' + elapsedMs + ' ms)';
        }

        function buildCompactJsonText(value, maxLen) {
            if (value === null || typeof value === 'undefined') return '';
            var raw = '';
            try {
                raw = JSON.stringify(value);
            } catch (e) {
                raw = '';
            }
            if (!raw) raw = collapseText(value);
            if (!raw) return '';
            return truncateText(raw, maxLen || 240);
        }

        function appendMessageDetailText(message, detailText, elapsedText) {
            var text = collapseText(message || '');
            var detail = collapseText(detailText || '');
            var elapsed = elapsedText == null ? '' : String(elapsedText).replace(/\s+$/, '');
            if (!text) return '';
            if (detail) text += ' ' + detail;
            if (elapsed) text += elapsed;
            return text;
        }

        function buildMcpProgressDetailText(type, data, evt) {
            var eventType = collapseText(type || '').toLowerCase();
            var row = data && typeof data === 'object' ? data : {};
            var parts = [];
            var serverId = collapseText(row.server_id || row.serverId || evt.server_id || evt.serverId || '');
            if (serverId) parts.push('server=' + serverId);
            if (eventType === 'mcp_tools_call') {
                var toolName = collapseText(row.tool_name || row.toolName || '');
                if (toolName) parts.push('tool=' + toolName);
                var paramsText = buildCompactJsonText(row.arguments, 320);
                if (paramsText && paramsText !== '{}' && paramsText !== '[]') {
                    parts.push('params=' + paramsText);
                }
                var reasonText = collapseText(row.reason || evt.reason || '');
                if (reasonText) parts.push('reason=' + reasonText);
                var messageText = collapseText(row.message || evt.message_text || '');
                if (messageText) parts.push('message=' + truncateText(messageText, 180));
            } else if (eventType === 'mcp_tools_list') {
                if (Object.prototype.hasOwnProperty.call(row, 'tool_count')) {
                    parts.push('tool_count=' + collapseText(row.tool_count));
                }
            }
            return parts.join(', ');
        }

        function buildServerActionLabel(menuKey, operation, source, paramsRaw) {
            var menuText = actionPlanMenuText(menuKey || 'menu');
            var opText = actionPlanOperationText(operation || 'search');
            var srcText = actionPlanSourceText(source || '');
            var line = menuText + ' / ' + opText + ' / ' + srcText;
            var hintsText = buildServerActionHintText(paramsRaw);
            if (hintsText) line += ' / ' + hintsText;
            return line;
        }

        function formatCollectionRouteIds(ids, maxItems) {
            var rows = Array.isArray(ids) ? ids : [];
            var limit = parseInt(maxItems, 10);
            if (isNaN(limit) || limit < 1) limit = 4;
            var out = [];
            var i;
            for (i = 0; i < rows.length && out.length < limit; i++) {
                var idText = collapseText(rows[i] || '');
                if (!idText) continue;
                out.push(idText);
            }
            if (!out.length) return '';
            if (rows.length > out.length) {
                return out.join(', ') + ' ...';
            }
            return out.join(', ');
        }

        function buildCollectionRoutePlanText(data, evt) {
            var row = data && typeof data === 'object' ? data : {};
            var sectionCount = parseInt(row.section_count, 10);
            if (isNaN(sectionCount) || sectionCount < 0) sectionCount = 0;
            var bundleGroupCount = parseInt(row.bundle_group_count, 10);
            if (isNaN(bundleGroupCount) || bundleGroupCount < 0) bundleGroupCount = 0;
            var sequentialCount = parseInt(row.sequential_count, 10);
            if (isNaN(sequentialCount) || sequentialCount < 0) sequentialCount = 0;
            var plannerSource = collapseText(row.planner_source || evt.planner_source || '');
            if (!plannerSource) plannerSource = 'fallback';
            var lines = [];
            lines.push(trff(
                'assistant_notice_collection_route_plan',
                '전송 그룹화 계획: sections={section_count}, bundle_groups={bundle_group_count}, sequential={sequential_count}, planner={planner_source}',
                {
                    section_count: sectionCount,
                    bundle_group_count: bundleGroupCount,
                    sequential_count: sequentialCount,
                    planner_source: plannerSource
                }
            ));

            var groupPreview = Array.isArray(row.bundle_group_preview) ? row.bundle_group_preview : [];
            if (groupPreview.length) {
                var gi;
                for (gi = 0; gi < groupPreview.length && gi < 6; gi++) {
                    var gp = groupPreview[gi] || {};
                    var gIndex = parseInt(gp.group_index, 10);
                    if (isNaN(gIndex) || gIndex < 1) gIndex = gi + 1;
                    var gTitle = collapseText(gp.title || '');
                    var gIds = formatCollectionRouteIds(gp.ids, 4);
                    lines.push(trff(
                        'assistant_notice_collection_route_group_line',
                        '묶음 {index}: {title}{ids}',
                        {
                            index: gIndex,
                            title: gTitle || ('group_' + gIndex),
                            ids: gIds ? (' [' + gIds + ']') : ''
                        }
                    ));
                    var groupItems = Array.isArray(gp.items) ? gp.items : [];
                    if (groupItems.length) {
                        var detailRows = [];
                        var gk;
                        for (gk = 0; gk < groupItems.length && gk < 6; gk++) {
                            var gItem = groupItems[gk] || {};
                            var gid = collapseText(gItem.id || '');
                            var gitemTitle = collapseText(gItem.title || '');
                            if (!gid && !gitemTitle) continue;
                            if (gid && gitemTitle) {
                                detailRows.push(gid + ':' + gitemTitle);
                            } else {
                                detailRows.push(gid || gitemTitle);
                            }
                        }
                        if (detailRows.length) {
                            lines.push(trff(
                                'assistant_notice_collection_route_group_items_line',
                                '  - 대상: {items}',
                                { items: detailRows.join(' | ') }
                            ));
                        }
                    }
                }
            } else {
                var groupsRaw = Array.isArray(row.bundle_groups) ? row.bundle_groups : [];
                if (groupsRaw.length) {
                    var gj;
                    for (gj = 0; gj < groupsRaw.length && gj < 6; gj++) {
                        var gIdsRaw = Array.isArray(groupsRaw[gj]) ? groupsRaw[gj] : [];
                        var gIdsText = formatCollectionRouteIds(gIdsRaw, 4);
                        if (!gIdsText) continue;
                        lines.push(trff(
                            'assistant_notice_collection_route_group_ids_line',
                            '묶음 {index}: [{ids}]',
                            {
                                index: gj + 1,
                                ids: gIdsText
                            }
                        ));
                    }
                }
            }

            var seqPreview = Array.isArray(row.sequential_preview) ? row.sequential_preview : [];
            if (seqPreview.length) {
                var seqRows = [];
                var si;
                for (si = 0; si < seqPreview.length && si < 8; si++) {
                    var sp = seqPreview[si] || {};
                    var sid = collapseText(sp.id || '');
                    if (!sid) continue;
                    var stitle = collapseText(sp.title || '');
                    seqRows.push(stitle ? (sid + ':' + stitle) : sid);
                }
                if (seqRows.length) {
                    lines.push(trff(
                        'assistant_notice_collection_route_sequential_line',
                        '순차 처리: {ids}',
                        { ids: seqRows.join(' | ') }
                    ));
                }
            } else {
                var seqIds = Array.isArray(row.sequential_ids) ? row.sequential_ids : [];
                var seqIdsText = formatCollectionRouteIds(seqIds, 8);
                if (seqIdsText) {
                    lines.push(trff(
                        'assistant_notice_collection_route_sequential_ids_line',
                        '순차 처리: {ids}',
                        { ids: seqIdsText }
                    ));
                }
            }

            return lines.join('\n');
        }

        function buildCollectionRouteProgressText(data, evt) {
            var row = data && typeof data === 'object' ? data : {};
            var status = collapseText(row.status || evt.status || '').toLowerCase();
            if (status === 'planned') {
                return buildCollectionRoutePlanText(row, evt);
            }
            if (status === 'bundle_done') {
                var bundleIndex = parseInt(row.bundle_group_index, 10);
                if (isNaN(bundleIndex) || bundleIndex < 1) bundleIndex = 1;
                var bundleTotal = parseInt(row.bundle_group_count, 10);
                if (isNaN(bundleTotal) || bundleTotal < 1) bundleTotal = bundleIndex;
                var bundleTitle = collapseText(row.bundle_group_title || '');
                var bundleIdsText = formatCollectionRouteIds(row.bundle_group_ids, 4);
                return trff(
                    'assistant_notice_collection_route_bundle_done',
                    '묶음 전송 완료 {index}/{total}: {title}{ids}',
                    {
                        index: bundleIndex,
                        total: bundleTotal,
                        title: bundleTitle || ('group_' + bundleIndex),
                        ids: bundleIdsText ? (' [' + bundleIdsText + ']') : ''
                    }
                );
            }
            if (status === 'partial_done') {
                var sectionIds = Array.isArray(row.section_ids) ? row.section_ids : [];
                var sectionTitles = Array.isArray(row.section_titles) ? row.section_titles : [];
                if (sectionIds.length > 1) {
                    var seqBatchRows = [];
                    var sb;
                    for (sb = 0; sb < sectionIds.length && sb < 6; sb++) {
                        var seqIdText = collapseText(sectionIds[sb] || '');
                        if (!seqIdText) continue;
                        var seqTitleText = collapseText((sectionTitles[sb] || ''));
                        seqBatchRows.push(seqTitleText ? (seqIdText + ':' + seqTitleText) : seqIdText);
                    }
                    var batchIndex = parseInt(row.batch_index, 10);
                    var batchCount = parseInt(row.batch_count, 10);
                    var batchPrefix = '';
                    if (!isNaN(batchIndex) && batchIndex > 0 && !isNaN(batchCount) && batchCount > 0) {
                        batchPrefix = '[' + batchIndex + '/' + batchCount + '] ';
                    }
                    return trff(
                        'assistant_notice_collection_route_partial_done',
                        '순차 전송 완료: {section}',
                        {
                            section: batchPrefix + (seqBatchRows.length ? seqBatchRows.join(' | ') : '-')
                        }
                    );
                }
                var sectionId = collapseText(row.section_id || '');
                var sectionTitle = collapseText(row.section_title || '');
                return trff(
                    'assistant_notice_collection_route_partial_done',
                    '순차 전송 완료: {section}',
                    {
                        section: sectionTitle ? (sectionId + ':' + sectionTitle) : (sectionId || '-')
                    }
                );
            }
            if (status === 'done') {
                var processed = parseInt(row.processed_count, 10);
                if (isNaN(processed) || processed < 0) processed = 0;
                return trff(
                    'assistant_notice_collection_route_done',
                    '그룹/순차 전송 처리 완료 (processed={processed})',
                    { processed: processed }
                );
            }
            return '';
        }

        function buildLlmRequestLabel(data, evt) {
            var row = data && typeof data === 'object' ? data : {};
            var kind = collapseText(row.request_kind || evt.request_kind || '').toLowerCase();
            var label = '';
            if (kind === 'collection_route_bundle') {
                var bundleIndex = parseInt(row.bundle_group_index, 10);
                if (isNaN(bundleIndex) || bundleIndex < 1) bundleIndex = 1;
                var bundleTotal = parseInt(row.bundle_group_count, 10);
                if (isNaN(bundleTotal) || bundleTotal < 1) bundleTotal = bundleIndex;
                var bundleIdsText = formatCollectionRouteIds(row.bundle_group_ids, 4);
                label = trff(
                    'assistant_notice_llm_request_kind_route_bundle',
                    '묶음 분석 {index}/{total}{ids}',
                    {
                        index: bundleIndex,
                        total: bundleTotal,
                        ids: bundleIdsText ? (' [' + bundleIdsText + ']') : ''
                    }
                );
            } else if (kind === 'collection_route_sequential') {
                var seqSectionIds = Array.isArray(row.section_ids) ? row.section_ids : [];
                var seqSectionTitles = Array.isArray(row.section_titles) ? row.section_titles : [];
                if (seqSectionIds.length > 1) {
                    var seqLabelRows = [];
                    var sk;
                    for (sk = 0; sk < seqSectionIds.length && sk < 5; sk++) {
                        var seqId = collapseText(seqSectionIds[sk] || '');
                        if (!seqId) continue;
                        var seqTitle = collapseText((seqSectionTitles[sk] || ''));
                        seqLabelRows.push(seqTitle ? (seqId + ':' + seqTitle) : seqId);
                    }
                    var seqBatchIndex = parseInt(row.batch_index, 10);
                    var seqBatchCount = parseInt(row.batch_count, 10);
                    var seqBatchPrefix = '';
                    if (!isNaN(seqBatchIndex) && seqBatchIndex > 0 && !isNaN(seqBatchCount) && seqBatchCount > 0) {
                        seqBatchPrefix = '[' + seqBatchIndex + '/' + seqBatchCount + '] ';
                    }
                    label = trff(
                        'assistant_notice_llm_request_kind_route_sequential',
                        '순차 단건 분석: {section}',
                        {
                            section: seqBatchPrefix + (seqLabelRows.length ? seqLabelRows.join(' | ') : '-')
                        }
                    );
                } else {
                    var sectionId = collapseText(row.section_id || '');
                    var sectionTitle = collapseText(row.section_title || '');
                    label = trff(
                        'assistant_notice_llm_request_kind_route_sequential',
                        '순차 단건 분석: {section}',
                        {
                            section: sectionTitle ? (sectionId + ':' + sectionTitle) : (sectionId || '-')
                        }
                    );
                }
            } else if (kind === 'collection_route_integrate') {
                var draftCount = parseInt(row.draft_count, 10);
                if (isNaN(draftCount) || draftCount < 0) draftCount = 0;
                label = trff(
                    'assistant_notice_llm_request_kind_route_integrate',
                    '묶음/순차 결과 통합 (drafts={draft_count})',
                    { draft_count: draftCount }
                );
            } else if (kind === 'final_answer') {
                label = tr(
                    'assistant_notice_llm_request_kind_final_answer',
                    '최종 답변 생성'
                );
            } else if (kind === 'plan' || kind === 'planner') {
                label = tr('assistant_notice_llm_request_kind_plan');
            }

            if (!label) {
                label = collapseText(row.request_label || evt.request_label || '');
            }
            if (!label) {
                label = kind || '';
            }
            if (!label) {
                var providerName = collapseText(row.provider || '');
                var modelName = collapseText(row.model || '');
                if (providerName || modelName) {
                    label = providerName && modelName
                        ? (providerName + ':' + modelName)
                        : (providerName || modelName);
                }
            }
            if (!label) {
                label = tr('assistant_notice_llm_request_kind_request');
            }
            return label;
        }

        function buildLlmRequestProgressText(data, evt) {
            var row = data && typeof data === 'object' ? data : {};
            var status = collapseText(row.status || evt.status || '').toLowerCase();
            if (!status) status = 'start';
            var requestKind = collapseText(row.request_kind || evt.request_kind || '').toLowerCase();
            var requestLabel = buildLlmRequestLabel(row, evt);
            var elapsedText = buildElapsedMsSuffix(row.elapsed_ms || evt.elapsed_ms);
            var errorText = collapseText(row.error || '');
            var detailText = buildLlmRequestDetailText(row, evt);
            if (status === 'done') {
                return trf('assistant_notice_llm_request_done', {
                    request: requestLabel,
                    elapsed: elapsedText
                }) + detailText;
            }
            if (status === 'error') {
                var errorBaseText = trf('assistant_notice_llm_request_error', {
                    request: requestLabel,
                    error: errorText ? (' (' + errorText + ')') : ''
                });
                return errorBaseText + detailText;
            }
            var baseText = trf('assistant_notice_llm_request_start', {
                request: requestLabel
            }) + detailText;
            if (status === 'start' && requestKind === 'final_answer') {
                var contextPreview = row && row.context_preview != null ? String(row.context_preview) : '';
                if (contextPreview) {
                    return baseText + '\n' + contextPreview;
                }
            }
            return baseText;
        }

        function buildLlmRequestDetailText(data, evt) {
            var row = data && typeof data === 'object' ? data : {};
            var detailParts = [];
            var systemPromptChars = parseInt(row.system_prompt_chars, 10);
            if (!isNaN(systemPromptChars) && systemPromptChars > 0) detailParts.push('system=' + systemPromptChars);
            var userPromptChars = parseInt(row.user_prompt_chars, 10);
            if (!isNaN(userPromptChars) && userPromptChars > 0) detailParts.push('user=' + userPromptChars);
            var payloadChars = parseInt(row.payload_chars, 10);
            if (!isNaN(payloadChars) && payloadChars > 0) detailParts.push('total=' + payloadChars);
            var contextChars = parseInt(row.context_chars, 10);
            if (!isNaN(contextChars) && contextChars > 0) detailParts.push('context=' + contextChars);
            var reasoningChars = parseInt(row.reasoning_chars, 10);
            if (!isNaN(reasoningChars) && reasoningChars > 0) detailParts.push('reasoning=' + reasoningChars);
            var memoryChars = parseInt(row.memory_chars, 10);
            if (!isNaN(memoryChars) && memoryChars > 0) detailParts.push('memory=' + memoryChars);
            var actionCount = parseInt(row.plan_action_count, 10);
            if (!isNaN(actionCount) && actionCount > 0) detailParts.push('actions=' + actionCount);
            var contextFormat = collapseText(row.context_format || '');
            if (contextFormat) detailParts.push('context_format=' + contextFormat);
            var reasoningFormat = collapseText(row.reasoning_format || '');
            if (reasoningFormat) detailParts.push('reasoning_format=' + reasoningFormat);
            var payloadFormat = collapseText(row.payload_format || '');
            if (payloadFormat) detailParts.push('payload_format=' + payloadFormat);
            var outputChars = parseInt(row.output_chars || evt.output_chars, 10);
            if (!isNaN(outputChars) && outputChars > 0) detailParts.push('output=' + outputChars);
            return detailParts.length ? (' (' + truncateText(detailParts.join(', '), 240) + ')') : '';
        }

        function resolveServerWorkSnapshot(type, evt, data) {
            var eventType = collapseText(type || '').toLowerCase();
            var row = data && typeof data === 'object' ? data : {};
            if (eventType === 'collection_route') {
                return buildCollectionRouteProgressText(row, evt);
            }
            if (eventType === 'llm_request') {
                return buildLlmRequestProgressText(row, evt);
            }
            if (eventType === 'client_collection_required') {
                var requestedCount = parseInt(row.browser_action_count, 10);
                if (isNaN(requestedCount) || requestedCount < 0) {
                    requestedCount = Array.isArray(row.actions) ? row.actions.length : 0;
                }
                return trf('assistant_notice_browser_collection_requested', {
                    count: requestedCount
                });
            }
            if (eventType === 'client_collection_wait') {
                var waitStatus = collapseText(row.status || '').toLowerCase();
                if (waitStatus === 'server_collecting') {
                    return tr('assistant_notice_server_collection_started');
                }
                var waitSeconds = parseInt(row.wait_seconds, 10);
                if (isNaN(waitSeconds) || waitSeconds < 0) waitSeconds = 0;
                return trf('assistant_notice_browser_collection_waiting', {
                    seconds: waitSeconds
                });
            }
            if (eventType === 'client_collection_received') {
                var resolvedCountForClient = parseInt(row.resolved_count, 10);
                if (isNaN(resolvedCountForClient) || resolvedCountForClient < 0) resolvedCountForClient = 0;
                return trf('assistant_notice_browser_collection_received', {
                    resolved: resolvedCountForClient
                });
            }
            if (eventType === 'stage') {
                var stage = collapseText(evt.phase || row.stage || '').toLowerCase();
                var stageMessage = collapseText(evt.message || row.message || '');
                if (stageMessage) return stageMessage;
                if (stage === 'accepted') return tr('assistant_notice_stage_accepted');
                if (stage === 'plan') return tr('assistant_notice_stage_plan');
                if (stage === 'collect') return tr('assistant_notice_stage_collect');
                if (stage === 'generate') return tr('assistant_notice_stage_generate');
                if (stage === 'done') return tr('assistant_notice_stage_done');
                return '';
            }
            if (eventType !== 'collection_step') return '';

            var phase = collapseText(row.phase || evt.phase || '').toLowerCase();
            var pass = parseInt(row.pass, 10);
            if (isNaN(pass) || pass < 1) pass = 1;
            if (phase === 'pass_start') {
                var actionCount = parseInt(row.action_count, 10);
                if (isNaN(actionCount) || actionCount < 0) actionCount = 0;
                return trff('assistant_notice_collection_step_pass_start', 'pass {pass} start (actions={action_count})', {
                    pass: pass,
                    action_count: actionCount
                });
            }
            if (phase === 'pass_end') {
                var resolvedCount = parseInt(row.resolved_count, 10);
                if (isNaN(resolvedCount) || resolvedCount < 0) resolvedCount = 0;
                var unresolvedCount = parseInt(row.unresolved_count, 10);
                if (isNaN(unresolvedCount) || unresolvedCount < 0) unresolvedCount = 0;
                return trff('assistant_notice_collection_step_pass_end', 'pass {pass} end (resolved={resolved}, unresolved={unresolved})', {
                    pass: pass,
                    resolved: resolvedCount,
                    unresolved: unresolvedCount
                });
            }
            if (phase === 'retry_requested') {
                var hintCount = parseInt(row.hint_count, 10);
                if (isNaN(hintCount) || hintCount < 0) hintCount = 0;
                return trff('assistant_notice_collection_step_retry_requested', 'pass {pass} retry planning requested (hints={hint_count})', {
                    pass: pass,
                    hint_count: hintCount
                });
            }
            if (phase === 'retry_applied') {
                var nextActionCount = parseInt(row.next_action_count, 10);
                if (isNaN(nextActionCount) || nextActionCount < 0) nextActionCount = 0;
                return trff('assistant_notice_collection_step_retry_applied', 'pass {pass} retry plan applied (next_actions={next_action_count})', {
                    pass: pass,
                    next_action_count: nextActionCount
                });
            }
            if (phase === 'retry_empty') return trff('assistant_notice_collection_step_retry_empty', 'pass {pass} no retry result', { pass: pass });
            if (phase === 'retry_error') return trff('assistant_notice_collection_step_retry_error', 'pass {pass} retry error', { pass: pass });
            if (phase === 'retry_skipped') return trff('assistant_notice_collection_step_retry_skipped', 'pass {pass} retry skipped', { pass: pass });

            var menuKey = collapseText(row.menu_key || row.menuKey || '');
            var operation = collapseText(row.operation || row.op || '');
            var source = collapseText(row.source || '');
            var status = collapseText(row.status || evt.status || '').toLowerCase();
            var actionHint = null;
            if (status === 'start') {
                actionHint = popServerActionHint(menuKey, operation, source);
            }
            var paramsForLabel = actionHint && actionHint.params ? actionHint.params : {};
            var actionLabel = buildServerActionLabel(menuKey, operation, source, paramsForLabel);
            if (status === 'start') return trff('assistant.message.server_step.requesting', 'Requesting: {label}', { label: actionLabel });
            if (status === 'resolved') {
                var chars = parseInt(row.context_chars, 10);
                if (isNaN(chars) || chars < 0) chars = 0;
                return trff('assistant.message.server_step.resolved', 'Collected: {label} (chars={chars})', {
                    label: actionLabel,
                    chars: chars
                });
            }
            if (status === 'client_pending') return trff('assistant.message.server_step.client_pending', 'Waiting for browser collection: {label}', { label: actionLabel });
            if (status === 'unresolved') {
                var reasonText = actionPlanReasonText(row.reason || '');
                return trff('assistant.message.server_step.unresolved', 'Collection failed: {label}{reason}', {
                    label: actionLabel,
                    reason: reasonText ? (' (' + reasonText + ')') : ''
                });
            }
            return trff('assistant.message.server_step.progress', 'Collecting: {label}{status}', {
                label: actionLabel,
                status: status ? (' (' + status + ')') : ''
            });
        }

        function buildServerWaitPulseText(seconds, includeDetail) {
            var elapsed = parseInt(seconds, 10);
            if (isNaN(elapsed) || elapsed < 0) elapsed = 0;
            if (elapsed < 1 && serverWaitTimer) elapsed = 1;
            var baseText = trf('assistant_notice_progress_server_wait', {
                seconds: elapsed
            });
            var detail = includeDetail ? collapseText(serverWorkSnapshotText || '') : '';
            if (!detail) return baseText;
            return baseText + '\n' + tr('assistant_notice_progress_server_wait_detail_prefix', '[Server task] ') + truncateText(detail, 200);
        }

        function emitServerWaitPulse(includeDetail) {
            addProgressMessage(
                item.conversationId,
                buildServerWaitPulseText(serverWaitTick * (SERVER_WAIT_PULSE_INTERVAL_MS / 1000), includeDetail === true),
                'normal',
                { mergeKey: serverWaitMergeKey, progressPulse: true }
            );
        }

        function startServerWaitPulse() {
            stopServerWaitPulse();
            serverWaitTick = 0;
            serverWorkSnapshotText = '';
            serverWaitTimer = window.setInterval(function () {
                serverWaitTick += 1;
                emitServerWaitPulse(false);
            }, SERVER_WAIT_PULSE_INTERVAL_MS);
        }

        function stopServerWaitPulse() {
            if (!serverWaitTimer) return;
            try {
                window.clearInterval(serverWaitTimer);
            } catch (e) {
                // ignore timer clear errors
            }
            serverWaitTimer = 0;
            clearConversationProgressPulseMessages(item.conversationId);
        }

        function normalizeCollectionBundle(row) {
            var src = row && typeof row === 'object' ? row : {};
            var context = (src.context == null ? '' : String(src.context));
            if (!context && src.mcp_tool_loop && typeof src.mcp_tool_loop === 'object' && src.mcp_tool_loop.context != null) {
                context = String(src.mcp_tool_loop.context);
            }
            var sectionsRaw = [];
            if (Array.isArray(src.sections)) {
                sectionsRaw = src.sections.slice(0);
            } else if (src.mcp_tool_loop && typeof src.mcp_tool_loop === 'object' && Array.isArray(src.mcp_tool_loop.sections)) {
                sectionsRaw = src.mcp_tool_loop.sections.slice(0);
            }
            var sections = normalizeCollectionSections(sectionsRaw, context, 120, 14000);
            var contextFromSections = buildCollectionContextFromSections(sections, 180000);
            if (contextFromSections) {
                context = contextFromSections;
            }
            var contextChars = parseInt(src.context_chars, 10);
            if (!contextChars && context) contextChars = context.length;
            return {
                context: context,
                sections: sections,
                context_chars: contextChars || 0,
                passes: parseInt(src.passes, 10) || 0,
                resolved_count: parseInt(src.resolved_count, 10) || 0,
                unresolved_count: parseInt(src.unresolved_count, 10) || 0,
                unresolved: Array.isArray(src.unresolved) ? src.unresolved.slice(0) : [],
                retry_candidates: Array.isArray(src.retry_candidates) ? src.retry_candidates.slice(0) : [],
                errors: Array.isArray(src.errors) ? src.errors.slice(0) : [],
                steps: Array.isArray(src.steps) ? src.steps.slice(0) : []
            };
        }

        function buildChatRequestOptions(payload) {
            var options = {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload || {})
            };
            if (active.controller) {
                options.signal = active.controller.signal;
            }
            return options;
        }

        function buildClientCollectionMetaPayload(bundle) {
            var normalized = normalizeCollectionBundle(bundle || {});
            var unresolvedRows = Array.isArray(normalized.unresolved) ? normalized.unresolved.slice(0, 20) : [];
            var retryCandidateRows = Array.isArray(normalized.retry_candidates) ? normalized.retry_candidates.slice(0, 20) : [];
            var errorRows = Array.isArray(normalized.errors) ? normalized.errors.slice(0, 20) : [];
            return {
                provided: true,
                planned_browser_actions: plannedBrowserActionCount,
                planned_server_actions: plannedServerActionCount,
                passes: parseInt(normalized.passes, 10) || 0,
                resolved_count: parseInt(normalized.resolved_count, 10) || 0,
                unresolved_count: parseInt(normalized.unresolved_count, 10) || 0,
                section_count: Array.isArray(normalized.sections) ? normalized.sections.length : 0,
                unresolved: unresolvedRows,
                retry_candidate_count: retryCandidateRows.length,
                retry_candidates: retryCandidateRows,
                errors: errorRows
            };
        }

        function uploadStreamClientCollection(requestId, bundle) {
            var requestKey = collapseText(requestId || '');
            if (!requestKey) {
                return Promise.reject(new Error('missing request_id'));
            }
            var normalized = normalizeCollectionBundle(bundle || {});
            return uploadStreamBrowserMcp(requestKey, 'tools/call', {
                collection: normalized,
                client_collection: buildClientCollectionMetaPayload(normalized)
            });
        }

        function uploadStreamBrowserMcp(requestId, method, extraPayload) {
            var requestKey = collapseText(requestId || '');
            if (!requestKey) {
                return Promise.reject(new Error('missing request_id'));
            }
            var m = collapseText(method || '').toLowerCase();
            if (!m) {
                return Promise.reject(new Error('missing method'));
            }
            var payload = {
                request_id: requestKey,
                conversation_id: item.conversationId || '',
                method: m
            };
            var extras = (extraPayload && typeof extraPayload === 'object' && !Array.isArray(extraPayload))
                ? extraPayload
                : {};
            var key;
            for (key in extras) {
                if (!Object.prototype.hasOwnProperty.call(extras, key)) continue;
                payload[key] = extras[key];
            }
            var options = buildChatRequestOptions(payload);
            return fetch(assistant2ApiBase + 'chat/browser-mcp', options)
                .then(function (res) { return res.json(); })
                .then(function (row) {
                    if (!row || row.success === false) {
                        throw new Error((row && row.msg) ? String(row.msg) : 'browser mcp upload failed');
                    }
                    return row;
                });
        }

        function uploadStreamBrowserTools(requestId) {
            var requestKey = collapseText(requestId || '');
            if (!requestKey) {
                return Promise.reject(new Error('missing request_id'));
            }
            return uploadStreamBrowserMcp(requestKey, 'tools/list', {
                browser_tools: buildBrowserToolsPayload()
            });
        }

        function collectBrowserToolContextFromActionPlan(actions, promptText, abortSignal) {
            if (
                window.HBAIAssistant2Tools
                && typeof window.HBAIAssistant2Tools.collectActionPlanContext === 'function'
            ) {
                return window.HBAIAssistant2Tools.collectActionPlanContext({
                    actions: Array.isArray(actions) ? actions.slice(0) : [],
                    prompt: promptText || '',
                    abortSignal: abortSignal || null,
                    runtime: {
                        executeSingleAction: window.HBAIAssistant2Tools.executeSingleAction,
                        normalizeCollectorMenuKey: normalizeCollectorMenuKey,
                        sanitizeActionPlanOperation: sanitizeActionPlanOperation,
                        normalizeActionPlanSource: normalizeActionPlanSource,
                        toBooleanFlag: toBooleanFlag,
                        resolveMenuRequestedItems: resolveMenuRequestedItems,
                        fetchCustomerMenuContext: fetchCustomerMenuContext,
                        fetchDiaryMenuContext: fetchDiaryMenuContext,
                        fetchMailMenuContext: fetchMailMenuContext,
                        fetchApprovalMenuContext: fetchApprovalMenuContext,
                        fetchReportMenuContext: fetchReportMenuContext,
                        fetchScheduleMenuContext: fetchScheduleMenuContext,
                        fetchProjectMenuContext: fetchProjectMenuContext,
                        fetchBoardMenuContext: fetchBoardMenuContext,
                        fetchTodoMenuContext: fetchTodoMenuContext,
                        fetchWhisperMenuContext: fetchWhisperMenuContext,
                        fetchCircularMenuContext: fetchCircularMenuContext,
                        fetchAddrbookMenuContext: fetchAddrbookMenuContext,
                        fetchHelpdeskMenuContext: fetchHelpdeskMenuContext,
                        normalizeCollectionSections: normalizeCollectionSections,
                        buildCollectionContextFromSections: buildCollectionContextFromSections,
                        actionPlanMenuText: actionPlanMenuText,
                        actionPlanOperationText: actionPlanOperationText,
                        actionPlanSourceText: actionPlanSourceText,
                        translateKey: tr,
                        formatKey: function (key, replacements, fallback) {
                            return trff(key, fallback, replacements);
                        },
                        addProgress: function (message, level) {
                            addProgressMessage(
                                item.conversationId,
                                tr('assistant_notice_tool_execution_prefix') + collapseText(message || ''),
                                level || 'normal'
                            );
                        }
                    }
                });
            }

            return collectBrowserAjaxContextFromActionPlan(
                actions,
                promptText || '',
                abortSignal,
                item.conversationId
            );
        }

        function handleStreamClientCollectionRequired(data) {
            if (!isActiveRequest(active)) return;
            var row = data && typeof data === 'object' ? data : {};
            var requestId = collapseText(row.request_id || row.requestId || '');
            if (!requestId) return;
            if (clientCollectionRequestState[requestId]) return;
            clientCollectionRequestState[requestId] = 'running';
            setActiveRequestStage(active, 'collect');

            var actionsRaw = Array.isArray(row.actions) ? row.actions.slice(0) : [];
            if (actionsRaw.length) {
                actionPlanBundle.actions = actionsRaw.slice(0);
            }

            var split = splitActionPlanActionsBySource(actionsRaw);
            var browserActions = Array.isArray(split.browser) ? split.browser.slice(0) : [];
            var serverActions = Array.isArray(split.server) ? split.server.slice(0) : [];
            queueServerActionHints(serverActions);

            var browserCount = parseInt(row.browser_action_count, 10);
            if (isNaN(browserCount) || browserCount < 0) browserCount = browserActions.length;
            var serverCount = parseInt(row.server_action_count, 10);
            if (isNaN(serverCount) || serverCount < 0) serverCount = serverActions.length;
            plannedBrowserActionCount = browserCount;
            plannedServerActionCount = serverCount;
            requestAiMeta.plan = {
                count: actionsRaw.length,
                browserCount: browserCount,
                serverCount: serverCount,
                confidence: parseFloat(actionPlanBundle.confidence) || 0
            };

            var collectPromise;
            if (!browserActions.length) {
                collectPromise = Promise.resolve(normalizeCollectionBundle({}));
            } else {
                collectPromise = collectBrowserToolContextFromActionPlan(
                    browserActions,
                    item.prompt || '',
                    requestSignal
                );
            }

            collectPromise
                .then(function (bundle) {
                    if (!isActiveRequest(active)) return null;
                    var normalizedBundle = normalizeCollectionBundle(bundle || {});
                    browserCollectionBundle = mergeCollectionBundles(browserCollectionBundle, normalizedBundle);
                    var stepText = buildCollectionStepNoticeText(browserCollectionBundle);
                    if (stepText && !collectionStepNoticeShown) {
                        addEphemeralSystemMessage(stepText, { uiTone: 'subtle' });
                        collectionStepNoticeShown = true;
                    }
                    return uploadStreamClientCollection(requestId, normalizedBundle);
                })
                .then(function () {
                    if (!isActiveRequest(active)) return;
                    clientCollectionRequestState[requestId] = 'done';
                    addProgressMessage(
                        item.conversationId,
                        tr('assistant_notice_browser_collection_uploaded', '[브라우저 수집] 결과를 서버로 전달했습니다.'),
                        'normal'
                    );
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return;
                    clientCollectionRequestState[requestId] = 'error';
                    addProgressMessage(
                        item.conversationId,
                        trf('assistant_notice_browser_collection_upload_failed', {
                            message: truncateText((err && err.message) ? err.message : 'browser collection upload failed', 140)
                        }),
                        'minimal'
                    );
                });
        }

        function handleStreamBrowserToolsRequired(data) {
            if (!isActiveRequest(active)) return;
            var row = data && typeof data === 'object' ? data : {};
            var requestId = collapseText(row.request_id || row.requestId || '');
            if (!requestId) return;
            if (browserToolsRequestState[requestId]) return;
            browserToolsRequestState[requestId] = 'running';

            uploadStreamBrowserTools(requestId)
                .then(function () {
                    if (!isActiveRequest(active)) return;
                    browserToolsRequestState[requestId] = 'done';
                    addProgressMessage(
                        item.conversationId,
                        tr('assistant_notice_browser_tools_uploaded', '[브라우저 도구] tools/list 정보를 서버로 전달했습니다.'),
                        'normal'
                    );
                })
                .catch(function (err) {
                    if (isAbortRequestError(err)) return;
                    browserToolsRequestState[requestId] = 'error';
                    addProgressMessage(
                        item.conversationId,
                        trf('assistant_notice_browser_tools_upload_failed', {
                            message: truncateText((err && err.message) ? err.message : 'browser tools upload failed', 140)
                        }),
                        'minimal'
                    );
                });
        }

        function handleStreamBrowserMcpRequest(data) {
            var row = data && typeof data === 'object' ? data : {};
            var method = collapseText(row.method || '').toLowerCase();
            if (method === 'tools/list') {
                handleStreamBrowserToolsRequired(row);
                return;
            }
            if (method === 'tools/call') {
                handleStreamClientCollectionRequired(row);
                return;
            }
        }

        function emitServerProgressMessage(evt, type, data) {
            if (type === 'browser_tools_required' || type === 'browser_tools_wait' || type === 'browser_tools_received') {
                return;
            }
            var message = (type === 'llm_prompt_debug')
                ? ((evt.message == null) ? '' : String(evt.message))
                : collapseText(evt.message || '');
            var prefixType = type;
            if (type === 'stage') {
                var stageName = collapseText(evt.phase || data.stage || '').toLowerCase();
                if (stageName !== 'collect' || plannedServerActionCount < 1) {
                    return;
                }
                if (serverCollectionStartNoticeShown) {
                    return;
                }
                message = tr('assistant_notice_server_collection_started');
                serverCollectionStartNoticeShown = true;
                prefixType = 'progress';
            }
            if (message && message.indexOf('assistant_') === 0) {
                message = tr(message);
            }
            if (type === 'client_collection_wait') {
                var waitStatus = collapseText(data.status || evt.status || '').toLowerCase();
                if (waitStatus === 'server_collecting') {
                    if (serverCollectionStartNoticeShown) {
                        return;
                    }
                    message = tr('assistant_notice_server_collection_started');
                    serverCollectionStartNoticeShown = true;
                }
            }
            if (!message && type === 'collection_step') {
                message = buildCollectionStepLineText(data);
            }
            if (!message && type === 'collection_summary') {
                message = trf('assistant_notice_server_summary_fallback', {
                    passes: (parseInt(data.passes, 10) || 0),
                    resolved: (parseInt(data.resolved_count, 10) || 0),
                    unresolved: (parseInt(data.unresolved_count, 10) || 0)
                });
            }
            if (type === 'collection_route') {
                var routeMessage = buildCollectionRouteProgressText(data, evt);
                if (routeMessage) {
                    message = routeMessage;
                }
            }
            if (type === 'llm_request') {
                var llmRequestMessage = buildLlmRequestProgressText(data, evt);
                if (llmRequestMessage) {
                    message = llmRequestMessage;
                }
            }
            if (type === 'llm_prompt_debug') {
                prefixType = 'llm_request';
            }
            if (type === 'mcp_tools_call' || type === 'mcp_tools_list') {
                message = appendMessageDetailText(
                    message,
                    buildMcpProgressDetailText(type, data, evt),
                    buildElapsedMsSuffix(data.elapsed_ms || evt.elapsed_ms)
                );
            }
            if (!message && type === 'error') {
                message = collapseText(data.message || data.msg || '');
            }

            if (!message) return;
            if (type === 'collection_step' || type === 'client_collection_required' || type === 'client_collection_received') {
                return;
            }
            if (type === 'client_collection_wait') {
                var waitType = collapseText(data.status || evt.status || '').toLowerCase();
                if (waitType !== 'server_collecting') {
                    return;
                }
            }
            if (!message) {
                return;
            }
            var level = normalizeProgressVerbosity(evt.level || 'normal');
            var prefix = serverProgressPrefix(prefixType);
            if (prefix && prefix.charAt(prefix.length - 1) !== ' ') {
                prefix += ' ';
            }
            var text = prefix + message;
            if (type === 'error') {
                var errorPrefix = tr('assistant_notice_server_prefix_error');
                if (errorPrefix && errorPrefix.charAt(errorPrefix.length - 1) !== ' ') {
                    errorPrefix += ' ';
                }
                text = errorPrefix + truncateText(message, 140);
                level = 'minimal';
            }
            var progressMeta = {};
            if (type !== 'mcp_trace') {
                var mergeType = (type || 'info');
                if (type === 'collection_route') {
                    var routeStatusForMerge = collapseText(data.status || evt.status || 'update').toLowerCase();
                    if (!routeStatusForMerge) routeStatusForMerge = 'update';
                    mergeType = 'collection_route_' + routeStatusForMerge;
                } else if (type === 'llm_request') {
                    var llmStatusForMerge = collapseText(data.status || evt.status || 'update').toLowerCase();
                    if (!llmStatusForMerge) llmStatusForMerge = 'update';
                    var llmRequestKindForMerge = collapseText(data.request_kind || evt.request_kind || 'request').toLowerCase();
                    if (!llmRequestKindForMerge) llmRequestKindForMerge = 'request';
                    mergeType = 'llm_request_' + llmRequestKindForMerge + '_' + llmStatusForMerge;
                } else if (type === 'llm_prompt_debug') {
                    var promptKindForMerge = collapseText(data.prompt_kind || evt.prompt_kind || 'prompt').toLowerCase();
                    var promptRequestKindForMerge = collapseText(data.request_kind || evt.request_kind || 'request').toLowerCase();
                    if (!promptRequestKindForMerge) promptRequestKindForMerge = 'request';
                    mergeType = 'llm_prompt_debug_' + promptRequestKindForMerge + '_' + promptKindForMerge;
                } else if (type === 'mcp_tools_call' || type === 'mcp_tools_list') {
                    var mcpStatusForMerge = collapseText(data.status || evt.status || 'update').toLowerCase();
                    if (!mcpStatusForMerge) mcpStatusForMerge = 'update';
                    mergeType = type + '_' + mcpStatusForMerge;
                    var mcpServerForMerge = collapseText(data.server_id || data.serverId || '').toLowerCase();
                    if (mcpServerForMerge) {
                        mergeType += '_' + mcpServerForMerge;
                    }
                    var mcpToolForMerge = collapseText(data.tool_name || data.toolName || '').toLowerCase();
                    if (mcpToolForMerge) {
                        mergeType += '_' + mcpToolForMerge;
                    }
                } else if (/^browser_mcp_(request|wait|received)$/.test(type)) {
                    var browserMethodForMerge = collapseText(data.method || evt.method || 'request').toLowerCase();
                    if (!browserMethodForMerge) browserMethodForMerge = 'request';
                    var browserStatusForMerge = collapseText(data.status || evt.status || 'update').toLowerCase();
                    if (!browserStatusForMerge) browserStatusForMerge = 'update';
                    mergeType = type + '_' + browserMethodForMerge + '_' + browserStatusForMerge;
                }
                progressMeta.mergeKey = 'server_progress_' + mergeType + '_' + String(active.id || '');
            }
            if (type === 'llm_prompt_debug') {
                var debugParts = splitPromptDebugMessage(message || '');
                var debugTitle = collapseText(debugParts.title || '');
                var debugDetail = formatPromptDebugText(debugTitle, debugParts.detail);
                if (debugTitle && debugDetail) {
                    message = debugTitle;
                    text = prefix + message;
                    progressMeta.collapsibleTitle = debugTitle;
                    progressMeta.collapsibleDetail = debugDetail;
                    progressMeta.collapsibleCollapsed = false;
                }
            }
            if (state.mcpSseDebug && type === 'browser_mcp_received') {
                var browserMethod = collapseText(data.method || evt.method || '').toLowerCase();
                if (browserMethod === 'tools/call') {
                    var browserDebugDetail = buildCollectionBundleDebugDetail(browserCollectionBundle, 8, 32000, 3500);
                    if (browserDebugDetail) {
                        var browserSectionCount = (browserCollectionBundle && Array.isArray(browserCollectionBundle.sections))
                            ? browserCollectionBundle.sections.length
                            : 0;
                        var browserResolvedCount = parseInt(browserCollectionBundle && browserCollectionBundle.resolved_count, 10);
                        if (isNaN(browserResolvedCount) || browserResolvedCount < 0) browserResolvedCount = 0;
                        progressMeta.collapsibleTitle = tr('assistant_notice_browser_collected_context_title');
                        progressMeta.collapsibleDetail = browserDebugDetail;
                        progressMeta.collapsibleCollapsed = false;
                        text = prefix + trf('assistant_notice_browser_collected_context_meta', {
                            message: message,
                            resolved: browserResolvedCount,
                            sections: browserSectionCount
                        });
                    }
                }
            }
            addProgressMessage(item.conversationId, text, level, progressMeta);
        }

        function applyServerProgressEnvelope(envelope) {
            var evt = normalizeServerProgressEnvelope(envelope);
            if (!evt) return;
            if (evt.id > 0) {
                var key = String(evt.id);
                if (seenServerProgressIds[key]) return;
                seenServerProgressIds[key] = true;
            }

            var data = evt.data && typeof evt.data === 'object' ? evt.data : {};
            var type = collapseText(evt.type || evt.event || '').toLowerCase();
            var serverWorkSnapshot = resolveServerWorkSnapshot(type, evt, data);
            if (serverWorkSnapshot) {
                serverWorkSnapshotText = serverWorkSnapshot;
                if (serverWaitTimer) {
                    emitServerWaitPulse(true);
                }
            }

            if (type === 'stage') {
                var stage = collapseText(evt.phase || data.stage || '').toLowerCase();
                if (stage) {
                    lastServerStage = stage;
                    setActiveRequestStage(active, stage);
                }
            }

            if (type === 'action_plan') {
                var planActions = Array.isArray(data.actions) ? data.actions : [];
                if (planActions.length) {
                    actionPlanBundle.actions = planActions.slice(0);
                }
                actionPlanBundle.confidence = parseFloat(data.confidence) || actionPlanBundle.confidence || 0;
                var splitPlan = splitActionPlanActionsBySource(planActions);
                plannedBrowserActionCount = splitPlan.browser.length;
                plannedServerActionCount = splitPlan.server.length;
                queueServerActionHints(splitPlan.server);
                requestAiMeta.plan = {
                    count: planActions.length,
                    browserCount: plannedBrowserActionCount,
                    serverCount: plannedServerActionCount,
                    confidence: parseFloat(actionPlanBundle.confidence) || 0
                };

                if (planActions.length && !serverPlanPreviewShown) {
                    var serverPlanPreview = buildActionPlanPreviewText(planActions, tr('assistant_notice_collection_plan_title'));
                    if (serverPlanPreview) {
                        addEphemeralSystemMessage(serverPlanPreview, { uiTone: 'subtle' });
                        serverPlanPreviewShown = true;
                    }
                }
            }
            if (type === 'client_collection_required') {
                handleStreamClientCollectionRequired(data);
            }
            if (type === 'browser_tools_required') {
                handleStreamBrowserToolsRequired(data);
            }
            if (type === 'browser_mcp_request') {
                handleStreamBrowserMcpRequest(data);
            }
            if (type === 'client_collection_wait') {
                setActiveRequestStage(active, 'collect');
            }
            if (type === 'client_collection_received') {
                setActiveRequestStage(active, 'generate');
            }
            if (type === 'llm_request') {
                var llmStatus = collapseText(data.status || evt.status || '').toLowerCase();
                if (llmStatus === 'done') {
                    refreshUsageStatusForProvider(
                        providerForRequest || collapseText(data.provider || evt.provider || ''),
                        true,
                        item.conversationId || ''
                    );
                }
            }
            emitServerProgressMessage(evt, type, data);
        }

        function handleServerStreamEvent(evt) {
            applyServerProgressEnvelope(evt);
        }

        addProgressMessage(
            item.conversationId,
            trf('assistant_notice_info_request_accepted', {
                provider: providerForRequest,
                model: collapseText(item.model || '') || '-'
            }),
            'minimal',
            {
                persist: true,
                progressGroupHeader: true
            }
        );

        var initialContextWithSteering = appendSteeringToContext(baseContextText, item.steering);
        requestAiMeta.request.contextChars = initialContextWithSteering.length;
        var initialPayload = {
            provider: providerForRequest,
            model: item.model,
            prompt: item.prompt,
            history: compressed.history || [],
            conversation_summary: compressed.summary || '',
            context: initialContextWithSteering,
            conversation_id: item.conversationId || '',
            browser_orchestration: 1,
            mcp_debug_stream: 1
        };
        if (item.attachmentPayload && item.attachmentPayload.length) {
            initialPayload.attachments = item.attachmentPayload;
        }
        if (item.reasoningEffort) {
            initialPayload.reasoning_effort = item.reasoningEffort;
        }

        var initialRequestOptions = buildChatRequestOptions(initialPayload);
        seenServerProgressIds = {};
        lastServerStage = '';
        startServerWaitPulse();

        addProgressMessage(item.conversationId, tr('assistant_notice_info_stream_connected', '[안내] 서버와 연결되었습니다.'), 'normal');
        return requestChatViaSseStream(initialRequestOptions, handleServerStreamEvent)
            .then(function (res) {
                if (!isActiveRequest(active)) return null;
                stopServerWaitPulse();

                if (lastServerStage !== 'done') {
                    setActiveRequestStage(active, 'generate');
                }

                if (res && res.success) {
                    if ((!actionPlanBundle.actions || !actionPlanBundle.actions.length) && res.action_plan && Array.isArray(res.action_plan.actions) && res.action_plan.actions.length) {
                        var latePlanPreview = buildActionPlanPreviewText(res.action_plan.actions, tr('assistant_notice_collection_plan_title'));
                        if (latePlanPreview) {
                            addEphemeralSystemMessage(latePlanPreview, { uiTone: 'subtle' });
                        }
                    }

                    var mergedCollection = normalizeCollectionBundle(res.collection || {});
                    var mergedHasSections = Array.isArray(mergedCollection.sections) && mergedCollection.sections.length > 0;
                    var browserHasSections = browserCollectionBundle
                        && Array.isArray(browserCollectionBundle.sections)
                        && browserCollectionBundle.sections.length > 0;
                    if ((!mergedCollection.context && browserCollectionBundle && browserCollectionBundle.context)
                        || (!mergedHasSections && browserHasSections)) {
                        mergedCollection = mergeCollectionBundles(mergedCollection, browserCollectionBundle);
                    }
                    var mergedStepNotice = buildCollectionStepNoticeText(mergedCollection);
                    if (mergedStepNotice && !collectionStepNoticeShown) {
                        addEphemeralSystemMessage(mergedStepNotice, { uiTone: 'subtle' });
                        collectionStepNoticeShown = true;
                    }
                    if (res.quota && typeof res.quota === 'object') {
                        setQuotaStatusForProvider(providerForRequest || (res.provider || ''), res.quota);
                        if (res.quota.allowed === false && res.quota.message) {
                            addConversationMessage('system', res.quota.message, item.conversationId);
                        }
                    }
                    var answerText = appendArtifactLinksToAnswer(res.answer || '', res.artifacts || []);
                    if (answerText) {
                        var mergedAiMeta = requestAiMeta && typeof requestAiMeta === 'object' ? requestAiMeta : {};
                        mergedAiMeta.provider = mergedAiMeta.provider || (res.provider || providerForRequest || '');
                        mergedAiMeta.model = res.model || mergedAiMeta.model || item.model || '';
                        mergedAiMeta.usage = (res && res.usage && typeof res.usage === 'object') ? res.usage : {};
                        mergedAiMeta.autofetch = (res && res.telemetry && res.telemetry.autofetch && typeof res.telemetry.autofetch === 'object')
                            ? res.telemetry.autofetch
                            : {};
                        mergedAiMeta.telemetry = (res && res.telemetry && typeof res.telemetry === 'object') ? res.telemetry : {};
                        mergedAiMeta.collection = mergedCollection;
                        mergedAiMeta.recordedAt = now();
                        addConversationMessage('assistant', answerText, item.conversationId, {
                            durationMs: Math.max(0, now() - (parseInt(active.startedAt, 10) || now())),
                            aiMeta: mergedAiMeta
                        });
                        collapseConversationStepMessages(item.conversationId);
                        return;
                    }
                    addConversationMessage('system', tr('assistant_notice_response_unprocessable'), item.conversationId);
                    return;
                }

                addConversationMessage(
                    'system',
                    (res && res.msg) ? res.msg : tr('assistant_notice_response_unprocessable'),
                    item.conversationId
                );
            })
            .catch(function (err) {
                if (!isActiveRequest(active)) return;
                stopServerWaitPulse();
                if (isAbortRequestError(err)) return;
                addProgressMessage(item.conversationId, trf('assistant_notice_progress_exception', {
                    message: truncateText((err && err.message) ? err.message : '', 120)
                }), 'minimal');
                addConversationMessage('system', tr('assistant_notice_ai_server_error'), item.conversationId);
            })
            .then(function () {
                stopServerWaitPulse();
                clearEphemeralProgressMessages(item.conversationId);
                collapseConversationStepMessages(item.conversationId);
                completeActiveRequest(active);
            });
    }

    function processNextQueuedRequest() {
        if (!state.requestQueue.length) {
            renderRequestQueue();
            setSending(hasAnyActiveRequests());
            return;
        }

        var nextQueue = [];
        var runnable = [];
        var reserved = {};
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var row = state.requestQueue[i];
            if (!row) continue;
            var conversationKey = requestConversationKey(row.conversationId);
            if (getActiveRequestByConversationId(row.conversationId) || reserved[conversationKey]) {
                nextQueue.push(row);
                continue;
            }
            reserved[conversationKey] = true;
            runnable.push(row);
        }
        state.requestQueue = nextQueue;
        renderRequestQueue();

        if (!runnable.length) {
            setSending(hasAnyActiveRequests());
            return;
        }

        setSending(true);
        for (i = 0; i < runnable.length; i++) {
            processRequestItem(runnable[i]);
        }
    }

    function sortProviderIds(ids) {
        ids.sort(function (a, b) {
            var la = providerFamilyLabel(a).toLowerCase();
            var lb = providerFamilyLabel(b).toLowerCase();
            if (la < lb) return -1;
            if (la > lb) return 1;
            var ia = String(a || '').toLowerCase();
            var ib = String(b || '').toLowerCase();
            if (ia < ib) return -1;
            if (ia > ib) return 1;
            return 0;
        });
    }

    function isSettingsPriorityProvider(familyId) {
        return false;
    }

    function sortProviderIdsForSettings(ids) {
        sortProviderIds(ids);
    }

    function providerIdsForSettings() {
        var ids = [];
        var seen = {};
        for (var providerId in state.providers) {
            if (!Object.prototype.hasOwnProperty.call(state.providers, providerId)) continue;
            if (isCompanyProviderInfo(state.providers[providerId])) continue;
            var familyId = providerFamilyKey(providerId);
            if (!familyId || seen[familyId]) continue;
            seen[familyId] = true;
            ids.push(familyId);
        }
        sortProviderIdsForSettings(ids);
        return ids;
    }

    function renderSettingsMethodOptions(familyId) {
        settingsMethodSelect.innerHTML = '';
        var family = providerFamilyKey(familyId || '');
        if (!family) {
            settingsMethodSelect.disabled = true;
            return;
        }
        var rows = providerFamilyMethodRows(family);
        if (!rows.length) {
            settingsMethodSelect.disabled = true;
            return;
        }
        settingsMethodSelect.disabled = false;
        var i;
        for (i = 0; i < rows.length; i++) {
            var methodOption = document.createElement('option');
            methodOption.value = rows[i].mode;
            methodOption.textContent = providerMethodLabel(rows[i].mode);
            settingsMethodSelect.appendChild(methodOption);
        }
        var selectedMethod = resolveDefaultMethodForFamily(family);
        if (selectedMethod) {
            settingsMethodSelect.value = selectedMethod;
            state.settingsMethodByFamily[family] = selectedMethod;
        }
    }

    function populateSettingsProviderSelect() {
        var current = providerFamilyKey(state.selectedProviderId || settingsProviderSelect.value || '');
        var ids = providerIdsForSettings();
        settingsProviderSelect.innerHTML = '';
        if (!ids.length) {
            var empty = document.createElement('option');
            empty.value = '';
            empty.textContent = tr('assistant.ui.status.loading', 'loading');
            settingsProviderSelect.appendChild(empty);
            settingsProviderSelect.disabled = true;
            return;
        }
        settingsProviderSelect.disabled = false;
        var i;
        var hasPriority = false;
        var hasOthers = false;
        for (i = 0; i < ids.length; i++) {
            if (isSettingsPriorityProvider(ids[i])) hasPriority = true;
            else hasOthers = true;
        }
        for (i = 0; i < ids.length; i++) {
            var familyId = ids[i];
            var opt = document.createElement('option');
            opt.value = familyId;
            var label = providerFamilyLabel(familyId);
            if (!isProviderFamilyLinked(familyId)) label += ' (Not connected)';
            opt.textContent = label;
            if (!isProviderFamilyAvailable(familyId)) opt.disabled = true;
            settingsProviderSelect.appendChild(opt);
            if (
                hasPriority && hasOthers
                && isSettingsPriorityProvider(familyId)
                && i + 1 < ids.length
                && !isSettingsPriorityProvider(ids[i + 1])
            ) {
                var divider = document.createElement('option');
                divider.value = '';
                divider.textContent = '──────────';
                divider.disabled = true;
                settingsProviderSelect.appendChild(divider);
            }
        }
        if (current) {
            settingsProviderSelect.value = current;
        }
        if (!settingsProviderSelect.value && ids.length) {
            settingsProviderSelect.value = ids[0];
        }
    }

    function currentConnectionFamilyId() {
        if (settingsFlow.className.indexOf('open') >= 0) {
            var flowFamily = providerFamilyKey(settingsProviderSelect.value || '');
            if (flowFamily) return flowFamily;
        }
        var option = selectedModelOption();
        if (option && option.provider) return providerFamilyKey(option.provider);
        return providerFamilyKey(state.selectedProviderId || settingsProviderSelect.value || '');
    }

    function currentConnectionProviderId() {
        if (settingsFlow.className.indexOf('open') >= 0) {
            var flowFamily = providerFamilyKey(settingsProviderSelect.value || '');
            if (flowFamily) {
                var selectedMethod = collapseText(settingsMethodSelect.value || '');
                return resolveProviderForFamilyMethod(flowFamily, selectedMethod) || resolveProviderForFamilyDefault(flowFamily);
            }
        }
        var option = selectedModelOption();
        if (option && option.provider) return option.provider;
        var fallbackFamily = providerFamilyKey(state.selectedProviderId || settingsProviderSelect.value || '');
        if (!fallbackFamily) return '';
        return resolveProviderForFamilyDefault(fallbackFamily);
    }

    function setStatusTextWithProgress(text) {
        var base = collapseText(text || '');
        statusText.textContent = base;
        renderProcessingStatusIfNeeded();
    }

    function updateConnectionUi() {
        var familyId = currentConnectionFamilyId();
        renderSettingsMethodOptions(familyId);
        var providerId = currentConnectionProviderId();
        var displayLabel = providerFamilyLabel(familyId || providerFamilyKey(providerId));
        if (!displayLabel) displayLabel = providerLabel(providerId);
        if (!providerId) {
            setStatusTextWithProgress(tr('assistant.ui.status.select_model', 'Select a model.'));
            connectBtn.disabled = true;
            logoutBtn.disabled = true;
            connectBtn.textContent = tr('assistant.ui.connection_setup', 'Connection Setup');
            logoutBtn.style.display = 'none';
            return;
        }

        var info = providerInfo(providerId);
        if (!info) {
            setStatusTextWithProgress(displayLabel + ' ' + tr('assistant.ui.status.loading', 'loading'));
            connectBtn.disabled = true;
            logoutBtn.disabled = true;
            connectBtn.textContent = tr('assistant.ui.connection_setup', 'Connection Setup');
            logoutBtn.style.display = 'none';
            return;
        }

        var selectedMethod = settingsFlow.className.indexOf('open') >= 0
            ? collapseText(settingsMethodSelect.value || '')
            : collapseText(info.connect_mode || '');
        var modeRows = providerFamilyMethodRows(familyId);
        var selectedModeRow = null;
        for (var i = 0; i < modeRows.length; i++) {
            if (!modeRows[i] || modeRows[i].mode !== selectedMethod) continue;
            selectedModeRow = modeRows[i];
            break;
        }
        var modeAvailable = selectedModeRow ? !!selectedModeRow.available : !!info.available;
        var modeLinked = selectedModeRow ? !!selectedModeRow.linked : !!info.linked;

        if (!modeAvailable) {
            setStatusTextWithProgress(info.reason || providerFamilyUnavailableReason(familyId) || (displayLabel + ' ' + tr('assistant.ui.status.unavailable', 'unavailable')));
            connectBtn.disabled = true;
            logoutBtn.disabled = true;
            connectBtn.textContent = tr('assistant.ui.unavailable', 'Unavailable');
            logoutBtn.style.display = 'none';
            return;
        }

        logoutBtn.style.display = modeLinked ? '' : 'none';
        logoutBtn.disabled = !modeLinked;
        connectBtn.disabled = false;

        if (selectedMethod === 'local' || (!selectedMethod && isLocalProviderInfo(info))) {
            var currentBase = collapseText(info.base_url || '');
            setStatusTextWithProgress(modeLinked
                ? (displayLabel + ' ' + tr('assistant.ui.status.connected', 'connected') + (currentBase ? (' (' + currentBase + ')') : ''))
                : (displayLabel + ' ' + tr('assistant.ui.status.local_connect_required', 'requires local connection')));
            connectBtn.textContent = modeLinked ? tr('assistant.ui.reconfigure', 'Reconfigure') : tr('assistant.ui.connection_setup', 'Connection Setup');
            return;
        }

        if (selectedMethod === 'api_key' || (!selectedMethod && isApiKeyProviderInfo(info))) {
            var apiBase = collapseText(info.base_url || '');
            setStatusTextWithProgress(modeLinked
                ? (displayLabel + ' ' + tr('assistant.ui.status.connected', 'connected') + (apiBase ? (' (' + apiBase + ')') : ''))
                : (displayLabel + ' ' + tr('assistant.ui.status.connect_required', 'requires connection')));
            connectBtn.textContent = modeLinked ? tr('assistant.ui.reconfigure', 'Reconfigure') : tr('assistant.ui.connection_setup', 'Connection Setup');
            return;
        }

        if (selectedMethod === 'sigv4' || (!selectedMethod && isSigV4ProviderInfo(info))) {
            setStatusTextWithProgress(modeLinked
                ? (displayLabel + ' ' + tr('assistant.ui.status.connected', 'connected'))
                : (displayLabel + ' ' + tr('assistant.ui.status.connect_required', 'requires connection')));
            connectBtn.textContent = modeLinked ? tr('assistant.ui.reconfigure', 'Reconfigure') : tr('assistant.ui.connection_setup', 'Connection Setup');
            return;
        }

        if (!modeLinked && selectedMethod === 'oauth' && hasPendingOAuth(providerId)) {
            var modeFlow = collapseText(
                (selectedModeRow && selectedModeRow.info && selectedModeRow.info.oauth_flow)
                || (info && info.oauth_flow)
                || ''
            );
            if (modeFlow === 'device_code') {
                setStatusTextWithProgress(displayLabel + ' ' + tr('assistant.ui.status.oauth_device_pending', 'Complete browser verification and wait for approval.'));
                connectBtn.textContent = tr('assistant.ui.reconfigure', 'Reconfigure');
                return;
            }
            if (isManualOAuthProvider(info)) {
                setStatusTextWithProgress(displayLabel + ' ' + tr('assistant.ui.status.oauth_finish_hint', 'Paste localhost URL after login and finish.'));
                connectBtn.textContent = tr('assistant.ui.finish', 'Finish');
                return;
            }
        }

        setStatusTextWithProgress(modeLinked
            ? (displayLabel + ' ' + tr('assistant.ui.status.connected', 'connected'))
            : (displayLabel + ' ' + tr('assistant.ui.status.connect_required', 'requires connection')));
        connectBtn.textContent = modeLinked ? tr('assistant.ui.reconfigure', 'Reconfigure') : tr('assistant.ui.connection_setup', 'Connection Setup');
    }

    function openOAuthWindow(url) {
        var w = window.open(url, 'hb-ai-oauth', 'width=560,height=760,resizable=yes,scrollbars=yes');
        if (!w) {
            pushSystemMessage(tr('assistant.message.popup_blocked', 'Popup was blocked. Allow popups and retry.'));
            return false;
        }
        return true;
    }

    function runDeviceOAuthPoll(providerId, info) {
        var id = collapseText(providerId || '');
        if (!id || !hasPendingOAuth(id)) {
            clearDeviceOAuthPoller(id);
            return;
        }
        if (!window.fetch) {
            clearDeviceOAuthPoller(id);
            setPendingOAuth(id, false);
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            updateConnectionUi();
            return;
        }
        if (!info || !info.oauth_poll_url) {
            clearDeviceOAuthPoller(id);
            setPendingOAuth(id, false);
            pushSystemMessage(tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
            updateConnectionUi();
            return;
        }

        fetch(info.oauth_poll_url, { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (!hasPendingOAuth(id)) {
                    clearDeviceOAuthPoller(id);
                    return;
                }
                if (!res || !res.success) {
                    var failMsg = (res && res.msg) ? res.msg : tr('assistant.message.oauth_connect_failed', 'OAuth connection failed');
                    throw new Error(failMsg);
                }
                var status = collapseText((res.status || '').toLowerCase());
                if (!status || status === 'pending') {
                    var nextInterval = parseInt(res.interval, 10);
                    if (!isFinite(nextInterval) || nextInterval < 1) nextInterval = 5;
                    clearDeviceOAuthPoller(id);
                    state.deviceOAuthPollers[id] = {
                        provider: id,
                        timerId: window.setTimeout(function () {
                            runDeviceOAuthPoll(id, providerInfo(id) || info);
                        }, nextInterval * 1000)
                    };
                    return;
                }
                if (status === 'completed' || status === 'success') {
                    setPendingOAuth(id, false);
                    pushSystemMessage(res.msg || (providerLabel(id) + ' ' + tr('assistant.message.oauth_connected', 'OAuth connected')));
                    loadProviders(true).then(function () {
                        updateConnectionUi();
                    });
                    return;
                }
                throw new Error((res && res.msg) ? res.msg : tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
            })
            .catch(function (err) {
                clearDeviceOAuthPoller(id);
                setPendingOAuth(id, false);
                pushSystemMessage((err && err.message) ? err.message : tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
                updateConnectionUi();
            });
    }

    function connectDeviceCodeProvider(option, info) {
        if (!window.fetch) {
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            return;
        }
        var providerId = collapseText(option && option.provider ? option.provider : '');
        if (!providerId) return;
        if (!info || !info.oauth_start_url || !info.oauth_poll_url) {
            pushSystemMessage(tr('assistant.message.provider_unavailable', 'This provider is currently unavailable.'));
            return;
        }

        clearDeviceOAuthPoller(providerId);
        fetch(info.oauth_start_url, { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (!res || !res.success) {
                    pushSystemMessage((res && res.msg) ? res.msg : tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
                    return;
                }

                setPendingOAuth(providerId, true);
                updateConnectionUi();

                var verificationUrl = collapseText(
                    (res.verification_uri_complete || res.verification_uri || '')
                );
                var userCode = collapseText(res.user_code || '');
                var noticeText = providerLabel(providerId) + ' ' + tr('assistant.message.oauth_device_pending', 'device authorization started.');
                if (userCode) {
                    noticeText += ' ' + tr('assistant.message.oauth_device_user_code', 'Enter code: ') + userCode;
                }
                if (verificationUrl) {
                    noticeText += ' ' + verificationUrl;
                }
                pushSystemMessage(noticeText);

                if (verificationUrl) {
                    openOAuthWindow(verificationUrl);
                }

                var interval = parseInt(res.interval, 10);
                if (!isFinite(interval) || interval < 1) interval = 5;
                state.deviceOAuthPollers[providerId] = {
                    provider: providerId,
                    timerId: window.setTimeout(function () {
                        runDeviceOAuthPoll(providerId, providerInfo(providerId) || info);
                    }, interval * 1000)
                };
            })
            .catch(function () {
                clearDeviceOAuthPoller(providerId);
                setPendingOAuth(providerId, false);
                pushSystemMessage(providerLabel(providerId) + ' ' + tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
                updateConnectionUi();
            });
    }

    function connectLocalProvider(option, info) {
        if (!window.fetch) {
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            return;
        }

        var defaults = (info && info.local_defaults) ? info.local_defaults : {};
        var defaultBase = collapseText((info && info.base_url) || (defaults && defaults.base_url) || '');
        if (!defaultBase) {
            if (option.provider === 'ollama') defaultBase = 'http://127.0.0.1:11434';
            else if (option.provider === 'vllm') defaultBase = 'http://127.0.0.1:8000/v1';
            else defaultBase = 'http://127.0.0.1:1234/v1';
        }
        var baseUrl = window.prompt(providerLabel(option.provider) + ' ' + tr('assistant.prompt.base_url', 'Enter Base URL.'), defaultBase);
        if (baseUrl === null) return;
        baseUrl = String(baseUrl || '').trim();
        if (!baseUrl) {
            pushSystemMessage(tr('assistant.message.base_url_required', 'Base URL is required.'));
            return;
        }

        var apiKeyHint = (option.provider === 'ollama')
            ? tr('assistant.prompt.api_key_ollama', 'API key (optional, Ollama can usually be blank)')
            : tr('assistant.prompt.api_key_optional', 'API key (optional)');
        var apiKey = window.prompt(apiKeyHint, '');
        if (apiKey === null) return;
        apiKey = String(apiKey || '').trim();

        var defaultModel = collapseText((info && info.model) || option.model || '');
        var modelInput = window.prompt(tr('assistant.prompt.default_model_optional', 'Default model name (optional, leave empty for auto)'), defaultModel);
        if (modelInput === null) return;
        modelInput = String(modelInput || '').trim();

        fetch(apiBase + 'local_connect', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                provider: option.provider,
                connect_mode: 'local',
                base_url: baseUrl,
                api_key: apiKey,
                model: modelInput
            })
        })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res && res.success) {
                    var msg = providerLabel(option.provider) + ' ' + tr('assistant.message.local_connected', 'local connection completed');
                    if (res.model) msg += ' (model=' + res.model + ')';
                    pushSystemMessage(msg);
                    loadProviders(true);
                } else {
                    pushSystemMessage((res && res.msg) ? res.msg : (providerLabel(option.provider) + ' ' + tr('assistant.message.local_connect_failed', 'local connection failed')));
                }
            })
            .catch(function () {
                pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.local_connect_error', 'local connection error'));
            })
            .then(function () {
                updateConnectionUi();
            });
    }

    function connectApiKeyProvider(option, info) {
        if (!window.fetch) {
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            return;
        }

        var keyLabel = collapseText((info && info.api_key_label) || '') || 'API Key';
        var keyOptional = !!(info && info.api_key_optional);
        var canKeepExistingKey = !!(!keyOptional && info && info.linked && collapseText(info.connect_mode || '') === 'api_key');
        var keyPrompt = keyOptional
            ? (keyLabel + ' ' + tr('assistant.prompt.optional_suffix', '(optional)'))
            : (keyLabel + ' ' + tr('assistant.prompt.api_key_required', '(required)'));
        if (canKeepExistingKey) {
            keyPrompt = keyLabel + ' ' + tr('assistant.prompt.api_key_keep_existing', '(leave empty to keep current key)');
        }
        var apiKey = window.prompt(keyPrompt, '');
        if (apiKey === null) return;
        apiKey = String(apiKey || '').trim();
        if (!keyOptional && !apiKey && !canKeepExistingKey) {
            pushSystemMessage(keyLabel + ' ' + tr('assistant.message.api_key_required', 'is required.'));
            return;
        }

        var defaultBase = collapseText((info && info.base_url) || '');
        var baseUrl = window.prompt(
            tr('assistant.prompt.base_url_optional', 'Base URL (optional, leave empty to use provider default)'),
            defaultBase
        );
        if (baseUrl === null) return;
        baseUrl = String(baseUrl || '').trim();

        var defaultModel = collapseText((info && info.model) || option.model || '');
        var modelInput = window.prompt(tr('assistant.prompt.default_model_optional', 'Default model name (optional, leave empty for auto)'), defaultModel);
        if (modelInput === null) return;
        modelInput = String(modelInput || '').trim();

        fetch(apiBase + 'local_connect', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                provider: option.provider,
                connect_mode: 'api_key',
                api_key: apiKey,
                base_url: baseUrl,
                model: modelInput
            })
        })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res && res.success) {
                    var msg = providerLabel(option.provider) + ' ' + tr('assistant.message.connected', 'connection completed');
                    if (res.model) msg += ' (model=' + res.model + ')';
                    pushSystemMessage(msg);
                    loadProviders(true);
                } else {
                    pushSystemMessage((res && res.msg) ? res.msg : (providerLabel(option.provider) + ' ' + tr('assistant.message.connect_failed', 'connection failed')));
                }
            })
            .catch(function () {
                pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.connect_error', 'connection error'));
            })
            .then(function () {
                updateConnectionUi();
            });
    }

    function connectSigV4Provider(option, info) {
        if (!window.fetch) {
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            return;
        }

        var accessKeyId = window.prompt('Access Key ID', '');
        if (accessKeyId === null) return;
        accessKeyId = String(accessKeyId || '').trim();
        if (!accessKeyId) {
            pushSystemMessage('Access Key ID is required.');
            return;
        }

        var secretAccessKey = window.prompt('Secret Access Key', '');
        if (secretAccessKey === null) return;
        secretAccessKey = String(secretAccessKey || '').trim();
        if (!secretAccessKey) {
            pushSystemMessage('Secret Access Key is required.');
            return;
        }

        var region = window.prompt('AWS Region', 'us-east-1');
        if (region === null) return;
        region = String(region || '').trim();
        if (!region) {
            pushSystemMessage('Region is required.');
            return;
        }

        var sessionToken = window.prompt('Session Token (optional)', '');
        if (sessionToken === null) return;
        sessionToken = String(sessionToken || '').trim();

        var defaultModel = collapseText((info && info.model) || option.model || '');
        var modelInput = window.prompt(tr('assistant.prompt.default_model_optional', 'Default model name (optional, leave empty for auto)'), defaultModel);
        if (modelInput === null) return;
        modelInput = String(modelInput || '').trim();

        fetch(apiBase + 'local_connect', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                provider: option.provider,
                connect_mode: 'sigv4',
                access_key_id: accessKeyId,
                secret_access_key: secretAccessKey,
                region: region,
                session_token: sessionToken,
                model: modelInput
            })
        })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res && res.success) {
                    pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.connected', 'connection completed'));
                    loadProviders(true);
                } else {
                    pushSystemMessage((res && res.msg) ? res.msg : (providerLabel(option.provider) + ' ' + tr('assistant.message.connect_failed', 'connection failed')));
                }
            })
            .catch(function () {
                pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.connect_error', 'connection error'));
            })
            .then(function () {
                updateConnectionUi();
            });
    }

    function connectCurrentProvider(providerId) {
        if (!state.assistantEnabled) return;
        var selectedMethod = '';
        var resolvedProvider = '';
        if (settingsFlow.className.indexOf('open') >= 0) {
            var familyId = providerFamilyKey(providerId || settingsProviderSelect.value || '');
            if (familyId) {
                selectedMethod = collapseText(settingsMethodSelect.value || state.settingsMethodByFamily[familyId] || '');
                resolvedProvider = resolveProviderForFamilyMethod(familyId, selectedMethod) || resolveProviderForFamilyDefault(familyId);
            }
        } else {
            var rawProvider = collapseText(providerId || currentConnectionProviderId());
            if (rawProvider) {
                resolvedProvider = providerInfo(rawProvider)
                    ? rawProvider
                    : resolveProviderForFamilyDefault(providerFamilyKey(rawProvider));
            }
        }
        if (!resolvedProvider) return;
        var selected = selectedModelOption();
        var option = {
            provider: resolvedProvider,
            model: selected && selected.provider === resolvedProvider ? selected.model : ''
        };

        var info = providerInfo(option.provider);
        if (!info) {
            pushSystemMessage(tr('assistant.message.provider_loading_retry', 'Provider info is loading. Please try again shortly.'));
            return;
        }
        if (!info.available) {
            pushSystemMessage(info.reason || tr('assistant.message.provider_unavailable', 'This provider is currently unavailable.'));
            return;
        }
        var methodLinked = !!info.linked;
        if (selectedMethod && selectedMethod !== collapseText(info.connect_mode || '')) {
            methodLinked = false;
        }
        var effectiveMethod = collapseText(selectedMethod || info.connect_mode || '');
        var oauthFlow = collapseText((info && info.oauth_flow) || '');
        var oauthRiskWarning = collapseText((info && info.risk_warning) || '');

        if (selectedMethod === 'local') {
            connectLocalProvider(option, info);
            return;
        }
        if (selectedMethod === 'api_key') {
            connectApiKeyProvider(option, info);
            return;
        }
        if (selectedMethod === 'sigv4') {
            connectSigV4Provider(option, info);
            return;
        }
        if (selectedMethod === 'oauth') {
            // fall through to OAuth flow
        } else if (isLocalProviderInfo(info)) {
            connectLocalProvider(option, info);
            return;
        } else if (isApiKeyProviderInfo(info)) {
            connectApiKeyProvider(option, info);
            return;
        } else if (isSigV4ProviderInfo(info)) {
            connectSigV4Provider(option, info);
            return;
        }

        if (effectiveMethod === 'oauth' && oauthRiskWarning) {
            pushSystemMessage('Warning: ' + oauthRiskWarning);
        }

        if (effectiveMethod === 'oauth' && oauthFlow === 'device_code') {
            connectDeviceCodeProvider(option, info);
            return;
        }

        if (!methodLinked && isManualOAuthProvider(info)) {
            if (!hasPendingOAuth(option.provider)) {
                if (!openOAuthWindow(info.oauth_start_url)) return;
                setPendingOAuth(option.provider, true);
                updateConnectionUi();
                pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.oauth_manual_hint', 'After login, even localhost ERR_CONNECTION_REFUSED is expected. Copy full URL and press Finish.'));
                return;
            }

            var oauthInput = window.prompt(tr('assistant.prompt.oauth_input', 'Paste the full localhost callback URL.\nExample: http://localhost:1455/auth/callback?code=...&state=...'));
            if (!oauthInput) return;
            if (!window.fetch) {
                pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
                return;
            }

            fetch(apiBase + 'oauth_complete', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ provider: option.provider, oauth_input: oauthInput })
            })
                .then(function (r) { return r.json(); })
                .then(function (res) {
                    if (res && res.success) {
                        setPendingOAuth(option.provider, false);
                        pushSystemMessage(res.msg || (providerLabel(option.provider) + ' ' + tr('assistant.message.oauth_connected', 'OAuth connected')));
                        loadProviders(true);
                    } else {
                        pushSystemMessage((res && res.msg) ? res.msg : (providerLabel(option.provider) + ' ' + tr('assistant.message.oauth_complete_failed', 'OAuth completion failed')));
                    }
                })
                .catch(function () {
                    pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.oauth_complete_error', 'OAuth completion error'));
                })
                .then(function () {
                    updateConnectionUi();
                });
            return;
        }

        if (!info.oauth_start_url) {
            pushSystemMessage(tr('assistant.message.provider_unavailable', 'This provider is currently unavailable.'));
            return;
        }
        openOAuthWindow(info.oauth_start_url);
    }

    function logoutCurrentProvider(providerId) {
        if (!state.assistantEnabled) return;
        var resolvedProvider = '';
        if (settingsFlow.className.indexOf('open') >= 0) {
            var familyId = providerFamilyKey(providerId || settingsProviderSelect.value || '');
            if (familyId) {
                var selectedMethod = collapseText(settingsMethodSelect.value || state.settingsMethodByFamily[familyId] || '');
                resolvedProvider = resolveProviderForFamilyMethod(familyId, selectedMethod) || resolveProviderForFamilyDefault(familyId);
            }
        } else {
            var rawProvider = collapseText(providerId || currentConnectionProviderId());
            if (rawProvider) {
                resolvedProvider = providerInfo(rawProvider)
                    ? rawProvider
                    : resolveProviderForFamilyDefault(providerFamilyKey(rawProvider));
            }
        }
        if (!resolvedProvider) return;
        var option = { provider: resolvedProvider };
        var info = providerInfo(option.provider);
        if (!info || !info.linked) {
            pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.provider_not_connected', 'is not connected.'));
            return;
        }

        fetch(apiBase + 'disconnect', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ provider: option.provider })
        })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res && res.success) {
                    setPendingOAuth(option.provider, false);
                    pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.logout_done', 'logged out'));
                    loadProviders(true);
                } else {
                    pushSystemMessage((res && res.msg) ? res.msg : tr('assistant.message.logout_failed', 'Failed to log out.'));
                }
            })
            .catch(function () {
                pushSystemMessage(tr('assistant.message.logout_error', 'An error occurred while processing logout.'));
            })
            .then(function () {
                toggleSettings(false);
                updateConnectionUi();
            });
    }

    function applyAssistantEnableState(enabled) {
        state.assistantEnabled = !!enabled;
        state.bootstrapLoaded = true;
        state.quotaByProvider = {};
        state.usageRefreshSeqByFamily = {};
        state.selectedQuotaStatus = null;
        if (state.assistantEnabled) {
            fab.style.display = '';
            applyFabLayout();
            renderUsageQuotaStatus();
            return;
        }
        clearAllDeviceOAuthPollers();
        state.pendingOAuth = {};
        state.requestQueue = [];
        renderRequestQueue();
        state.diaryScopeCache = null;
        state.mcpToolLoopEnabled = false;
        state.domainContextEngine = null;
        state.domainContextEngineFactory = null;
        var activeMap = state.activeRequests || {};
        for (var activeKey in activeMap) {
            if (!Object.prototype.hasOwnProperty.call(activeMap, activeKey)) continue;
            var active = activeMap[activeKey];
            if (!active) continue;
            active.canceled = true;
            if (active.controller && active.controller.abort) {
                try {
                    active.controller.abort();
                } catch (e) {
                    // ignore abort errors
                }
            }
        }
        state.activeRequests = {};
        state.activeRequest = null;
        setSending(false);
        clearPendingAttachments();
        closePanel();
        releaseFabPointerState();
        fab.style.display = 'none';
        renderUsageQuotaStatus();
    }

    function loadBootstrapConfig(force) {
        if (state.bootstrapLoaded && !force) return Promise.resolve(state.assistantEnabled);
        if (!window.fetch) {
            applyAssistantEnableState(false);
            return Promise.resolve(false);
        }
        return fetch(apiBase + 'bootstrap', { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                var enabled = !!(res && res.success && res.enabled);
                state.mcpToolLoopEnabled = !!(enabled && res && (res.mcp_tool_loop_enabled || res.mcp_worklog_enabled));
                state.personalAiAllowed = !(res && res.personal_ai_allowed === false);
                state.assistantAdmin = !!(res && res.assistant_admin);
                state.domainContextEngine = null;
                state.domainContextEngineFactory = null;
                applyPersonalAiAllowedUi();
                applyAssistantEnableState(enabled);
                return enabled;
            })
            .catch(function () {
                state.mcpToolLoopEnabled = false;
                state.personalAiAllowed = true;
                state.assistantAdmin = false;
                state.domainContextEngine = null;
                state.domainContextEngineFactory = null;
                applyPersonalAiAllowedUi();
                applyAssistantEnableState(false);
                return false;
            });
    }

    function loadProviders(force) {
        if (!state.assistantEnabled) return Promise.resolve();
        if (state.providersLoaded && !force) return Promise.resolve();
        if (!window.fetch) return Promise.resolve();

        return fetch(apiBase + 'providers', { credentials: 'same-origin' })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                state.providersLoaded = true;
                state.providers = {};
                state.quotaByProvider = {};
                state.usageRefreshSeqByFamily = {};
                state.selectedQuotaStatus = null;
                if (res && Object.prototype.hasOwnProperty.call(res, 'personal_ai_allowed')) {
                    state.personalAiAllowed = !(res.personal_ai_allowed === false);
                    applyPersonalAiAllowedUi();
                }
                if (!res || !res.success || !res.rows) {
                    state.selectedProviderId = '';
                    state.settingsMethodByFamily = {};
                    MODEL_OPTIONS = BASE_MODEL_OPTIONS.slice(0);
                    populateSettingsProviderSelect();
                    populateModelSelect();
                    if (providerMenu.className.indexOf('open') >= 0) {
                        renderProviderMenu();
                    }
                    renderUsageQuotaStatus();
                    updateConnectionUi();
                    return;
                }

                for (var i10 = 0; i10 < res.rows.length; i10++) {
                    var row = res.rows[i10];
                    state.providers[row.id] = row;
                }

                for (var providerId in state.providers) {
                    if (!Object.prototype.hasOwnProperty.call(state.providers, providerId)) continue;
                    if (state.providers[providerId] && state.providers[providerId].linked) {
                        setPendingOAuth(providerId, false);
                    }
                }
                for (var pollerProviderId in state.deviceOAuthPollers) {
                    if (!Object.prototype.hasOwnProperty.call(state.deviceOAuthPollers, pollerProviderId)) continue;
                    if (!state.providers[pollerProviderId] || state.providers[pollerProviderId].linked) {
                        setPendingOAuth(pollerProviderId, false);
                    }
                }

                rebuildModelOptionsFromProviders();
                populateSettingsProviderSelect();
                if (!state.providerDefaultInitialized) {
                    state.selectedProviderId = '';
                    state.providerDefaultInitialized = true;
                }
                ensureSelectedProvider();
                populateModelSelect();
                if (providerMenu.className.indexOf('open') >= 0) {
                    renderProviderMenu();
                }
                refreshUsageStatusForSelectedProvider(true);
                updateConnectionUi();
            })
            .catch(function () {
                state.providersLoaded = true;
                state.providers = {};
                state.quotaByProvider = {};
                state.usageRefreshSeqByFamily = {};
                state.selectedQuotaStatus = null;
                state.selectedProviderId = '';
                state.settingsMethodByFamily = {};
                MODEL_OPTIONS = BASE_MODEL_OPTIONS.slice(0);
                populateSettingsProviderSelect();
                populateModelSelect();
                if (providerMenu.className.indexOf('open') >= 0) {
                    renderProviderMenu();
                }
                renderUsageQuotaStatus();
                setStatusTextWithProgress(tr('assistant.ui.status.provider_load_failed', 'Unable to load provider info.'));
                connectBtn.disabled = true;
                logoutBtn.disabled = true;
                logoutBtn.style.display = 'none';
                connectBtn.textContent = tr('assistant.ui.unavailable', 'Unavailable');
                pushSystemMessage(tr('assistant.message.provider_load_failed', 'Unable to load provider info.'));
            });
    }

    function send() {
        if (!state.assistantEnabled) return;
        var prompt = (input.value || '').trim();
        var attachmentSnapshot = state.pendingAttachments.slice(0);
        var attachmentPayload = buildAttachmentPayload(attachmentSnapshot);
        if (!prompt) return;

        if (isInsertIntoEditorIntent(prompt)) {
            input.value = '';
            updateAttachHintVisibility();
            resetInputRecallState();
            clearPendingAttachments();
            addConversationMessage('user', prompt);
            var insertConversation = ensureConversation();
            var lastAssistantText = findLastAssistantMessageText(insertConversation);
            if (!lastAssistantText) {
                addConversationMessage('assistant', tr('assistant.message.insert.no_recent_answer', 'There is no recent AI answer to insert. Ask for a summary first, then try again.'));
                return;
            }
            var insertResult = tryInsertIntoPageEditor(lastAssistantText);
            addConversationMessage('assistant', insertResult.msg);
            return;
        }

        var option = selectedModelOption();
        if (!option) {
            pushSystemMessage(tr('assistant.message.select_model', 'Select an AI model.'));
            return;
        }
        var info = providerInfo(option.provider);
        if (!info || !info.available) {
            pushSystemMessage((info && info.reason) ? info.reason : tr('assistant.message.provider_unavailable_selected', 'The selected provider is unavailable.'));
            return;
        }
        if (!info.linked) {
            pushSystemMessage(providerLabel(option.provider) + ' ' + tr('assistant.message.provider_connect_required', 'requires connection. Use Connect first.'));
            return;
        }
        if (isCompanyProviderInfo(info)) {
            var familyId = providerFamilyKey(option.provider);
            var quotaStatus = state.selectedQuotaStatus || (state.quotaByProvider ? state.quotaByProvider[familyId] : null);
            if (quotaStatus && quotaStatus.allowed === false) {
                pushSystemMessage(quotaStatus.message || tr('assistant.message.quota_exceeded', 'Token quota exceeded.'));
                renderUsageQuotaStatus();
                return;
            }
        }

        if (!window.fetch) {
            pushSystemMessage(tr('assistant.message.fetch_not_supported', 'This browser does not support fetch.'));
            return;
        }
        saveLastUsedModel(providerFamilyKey(option.provider), option.key);

        var userViewText = prompt;
        var attachmentSummary = buildAttachmentSummaryLine(attachmentSnapshot);
        if (attachmentSummary) {
            userViewText = userViewText ? (userViewText + '\n' + attachmentSummary) : attachmentSummary;
        }

        var requestConversation = ensureConversation();
        var requestConversationId = requestConversation.id;

        input.value = '';
        updateAttachHintVisibility();
        resetInputRecallState();
        clearPendingAttachments();
        var reasoningValue = resolveReasoningValue(option);
        if (reasoningValue) {
            state.modelReasoningSelections[option.key] = reasoningValue;
        }

        var requestItem = buildRequestQueueItem({
            prompt: prompt,
            userViewText: userViewText,
            attachmentPayload: attachmentPayload,
            userMessageId: '',
            conversationId: requestConversationId,
            provider: option.provider,
            model: option.model,
            modelKey: option.key,
            reasoningEffort: reasoningValue || '',
            history: [],
            digest: '',
            includePageContext: !!contextCheckbox.checked
        });

        if (isConversationBusy(requestConversationId)) {
            enqueueRequestItem(requestItem);
            processNextQueuedRequest();
            return;
        }

        setSending(true);
        processRequestItem(requestItem);
        processNextQueuedRequest();
    }

    function appendSteeringToQueuedRequest(conversationId, steeringText) {
        var key = requestConversationKey(conversationId);
        var i;
        for (i = 0; i < state.requestQueue.length; i++) {
            var row = state.requestQueue[i];
            if (!row) continue;
            if (requestConversationKey(row.conversationId) !== key) continue;
            row.steering = mergeSteeringText(row.steering, steeringText);
            renderRequestQueue();
            addConversationMessage('system', tr('assistant.message.steering.applied_to_queue', 'Steering was applied to the queued request.'), conversationId);
            return true;
        }
        return false;
    }

    function sendSteering() {
        if (!state.assistantEnabled) return;
        var steeringText = String(input.value || '').replace(/\r\n?/g, '\n').trim();
        if (!steeringText) return;

        var conversation = ensureConversation();
        var conversationId = conversation && conversation.id ? conversation.id : '';
        if (!conversationId) return;

        input.value = '';
        updateAttachHintVisibility();
        resetInputRecallState();

        var active = getActiveRequestByConversationId(conversationId);
        if (active && active.item) {
            var steeringItem = {
                prompt: steeringText,
                userViewText: steeringText,
                conversationId: conversationId
            };
            var mergedItem = buildMergedSteeringRequest(active.item, steeringItem);
            interruptActiveRequest(tr('assistant.message.steering.interrupt_and_reprocess', 'Stopping current response and reprocessing with steering.'), conversationId);
            addConversationMessage('system', trff('assistant.message.steering.applied', 'Steering applied: {text}', {
                text: truncateText(steeringText, 120)
            }), conversationId);
            processRequestItem(mergedItem);
            processNextQueuedRequest();
            return;
        }

        if (appendSteeringToQueuedRequest(conversationId, steeringText)) {
            return;
        }

        addConversationMessage('system', tr('assistant.message.steering.no_active_request', 'No active request in this conversation to apply steering.'), conversationId);
    }

    window.addEventListener('message', function (event) {
        var data = event && event.data ? event.data : {};
        if (data.type !== 'hb-ai-oauth') return;
        var doneProvider = remapLegacyProviderId(data.provider || '');

        if (data.status === 'success') {
            if (doneProvider) {
                setPendingOAuth(doneProvider, false);
            } else {
                setPendingOAuth('openai', false);
                setPendingOAuth('google', false);
            }
            pushSystemMessage(data.message || tr('assistant.message.oauth_connected', 'OAuth connected'));
            loadProviders(true);
        } else {
            if (doneProvider) {
                setPendingOAuth(doneProvider, false);
            }
            pushSystemMessage(data.message || tr('assistant.message.oauth_connect_failed', 'OAuth connection failed'));
            updateConnectionUi();
        }
    });

    window.addEventListener('hb-ai-setting-changed', function (event) {
        var enabled = !!(event && event.detail && event.detail.enabled);
        applyAssistantEnableState(enabled);
        if (enabled) {
            loadProviders(true);
            loadServerConversations(true);
        }
    });

    document.addEventListener('click', function (e) {
        if (!panel.contains(e.target)) {
            toggleSettings(false);
            closeProviderMenu();
            closeReasoningCompactMenu();
            return;
        }
        if (
            e.target === settingsBtn || settingsBtn.contains(e.target)
            || e.target === aiConnectBtn || aiConnectBtn.contains(e.target)
            || e.target === connectBtn || connectBtn.contains(e.target)
            || e.target === logoutBtn || logoutBtn.contains(e.target)
            || e.target === settingsProviderSelect || settingsProviderSelect.contains(e.target)
            || e.target === settingsMethodSelect || settingsMethodSelect.contains(e.target)
        ) {
            return;
        }
        if (settingsMenu.contains(e.target)) return;
        if (e.target === providerBtn || providerBtn.contains(e.target)) return;
        if (providerMenu.contains(e.target)) return;
        if (e.target === reasoningCompactBtn || reasoningCompactBtn.contains(e.target)) return;
        if (reasoningCompactMenu.contains(e.target)) return;
        toggleSettings(false);
        closeProviderMenu();
        closeReasoningCompactMenu();
    });

    historyBtn.addEventListener('click', function () {
        toggleHistoryPane();
    });

    historyCloseBtn.addEventListener('click', function () {
        toggleHistoryPane(false);
    });

    settingsBtn.addEventListener('click', function () {
        closeProviderMenu();
        toggleSettings();
    });

    newChatBtn.addEventListener('click', function () {
        newConversation();
    });

    closeBtn.addEventListener('click', function () {
        closePanel();
    });

    aiConnectBtn.addEventListener('click', function () {
        toggleSettingsFlow();
    });

    settingsProviderSelect.addEventListener('change', function () {
        var familyId = providerFamilyKey(settingsProviderSelect.value || '');
        if (familyId) {
            state.settingsMethodByFamily[familyId] = resolveDefaultMethodForFamily(familyId);
        }
        renderSettingsMethodOptions(familyId);
        updateConnectionUi();
    });

    settingsMethodSelect.addEventListener('change', function () {
        var familyId = providerFamilyKey(settingsProviderSelect.value || '');
        if (familyId) {
            state.settingsMethodByFamily[familyId] = collapseText(settingsMethodSelect.value || '');
        }
        updateConnectionUi();
    });

    logoutBtn.addEventListener('click', function () {
        logoutCurrentProvider(settingsProviderSelect.value || '');
    });

    connectBtn.addEventListener('click', function () {
        connectCurrentProvider(settingsProviderSelect.value || '');
    });

    providerBtn.addEventListener('click', function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        closeReasoningCompactMenu();
        toggleSettings(false);
        toggleProviderMenu();
    });

    usageToggleBtn.addEventListener('click', function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (usageToggleBtn.disabled) return;
        state.usagePanelOpen = !state.usagePanelOpen;
        if (state.usagePanelOpen) {
            refreshUsageStatusForSelectedProvider(true);
        } else {
            renderUsageQuotaStatus();
        }
    });

    usageRefreshBtn.addEventListener('click', function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (usageRefreshBtn.disabled) return;
        refreshUsageStatusForSelectedProvider(true);
    });

    reasoningCompactBtn.addEventListener('click', function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        closeProviderMenu();
        toggleSettings(false);
        var rows = reasoningOptionsForModel(selectedModelOption());
        if (!rows.length) return;
        rebuildReasoningCompactMenu(rows);
        if (reasoningCompactMenu.className.indexOf('open') >= 0) closeReasoningCompactMenu();
        else reasoningCompactMenu.className = 'hb-ai-option-compact-menu open';
    });

    historySearch.addEventListener('input', function () {
        state.historyKeyword = this.value || '';
        renderHistoryList();
    });

    head.addEventListener('mousedown', function (e) {
        var target = e && e.target ? e.target : null;
        if (!target) return;
        if (headActions.contains(target)) return;
        if (settingsMenu.contains(target)) return;
        var tag = ((target.tagName || '') + '').toLowerCase();
        if (tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea' || tag === 'a' || tag === 'label') return;
        startPanelPointer('drag', e);
    });

    resizeHandle.addEventListener('mousedown', function (e) {
        if (e) e.stopPropagation();
        startPanelPointer('resize', e);
    });

    modelSelect.addEventListener('change', function () {
        var conversation = ensureConversation();
        conversation.modelKey = modelSelect.value;
        var selected = selectedModelOption();
        if (selected && selected.provider) {
            state.selectedProviderId = providerFamilyKey(selected.provider);
        }
        conversation.updatedAt = now();
        saveConversations();
        renderHistoryList();
        updateReasoningVisibility();
        updateModelSelectTooltip();
        refreshUsageStatusForSelectedProvider(true);
        updateConnectionUi();
    });

    reasoningSelect.addEventListener('change', function () {
        var option = selectedModelOption();
        if (!option) return;
        var value = reasoningSelect.value || '';
        if (!value || !hasReasoningOption(option, value)) return;
        applyReasoningSelection(value);
        rebuildReasoningCompactMenu(reasoningOptionsForModel(option));
        setTimeout(updateBottomRowCompactMode, 0);
    });

    attachBtn.addEventListener('click', function () {
        attachInput.click();
    });

    attachInput.addEventListener('change', function () {
        if (!attachInput.files || !attachInput.files.length) return;
        handleAttachmentFiles(attachInput.files, 'file').then(function () {
            attachInput.value = '';
            setTimeout(function () { input.focus(); }, 0);
        });
    });

    input.addEventListener('paste', function (e) {
        var files = extractClipboardFiles(e);
        if (!files.length) return;
        e.preventDefault();
        handleAttachmentFiles(files, 'paste');
    });

    input.addEventListener('dragover', function (e) {
        if (e && e.dataTransfer) {
            e.preventDefault();
        }
    });

    input.addEventListener('drop', function (e) {
        if (!e || !e.dataTransfer || !e.dataTransfer.files || !e.dataTransfer.files.length) return;
        e.preventDefault();
        handleAttachmentFiles(e.dataTransfer.files, 'drop');
    });

    sendBtn.addEventListener('click', send);
    stopBtn.addEventListener('click', function () {
        stopCurrentRequest();
    });
    input.addEventListener('input', function () {
        updateAttachHintVisibility();
        if (state.inputRecallApplying) return;
        if (!state.inputRecall || state.inputRecall.conversationKey !== currentRecallConversationKey()) {
            resetInputRecallState();
            return;
        }
        state.inputRecall.index = -1;
        state.inputRecall.draft = String(input.value || '');
    });
    input.addEventListener('keydown', function (e) {
        if (!e) return;
        if (e.isComposing || e.keyCode === 229) return;

        if (e.keyCode === 38 || e.keyCode === 40) {
            if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
            if (!input) return;
            var currentValue = String(input.value || '');
            var selStart = typeof input.selectionStart === 'number' ? input.selectionStart : currentValue.length;
            var selEnd = typeof input.selectionEnd === 'number' ? input.selectionEnd : currentValue.length;
            var isUp = e.keyCode === 38;
            var isSingleLine = currentValue.indexOf('\n') < 0;
            var atBoundary = isSingleLine
                ? (selStart === selEnd)
                : (isUp ? (selStart === 0 && selEnd === 0) : (selStart === currentValue.length && selEnd === currentValue.length));
            if (!atBoundary) return;
            if (navigateInputRecall(isUp ? -1 : 1)) {
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }

        if (e.keyCode !== 13) return;
        if (e.shiftKey || e.altKey) return;

        e.preventDefault();
        e.stopPropagation();

        if (e.ctrlKey || e.metaKey) {
            sendSteering();
            return;
        }
        send();
    });

    window.addEventListener('resize', function () {
        releasePanelPointerState();
        releaseFabPointerState();
        closeReasoningCompactMenu();
        if (state.panelLayout) {
            var normalized = normalizePanelLayout(state.panelLayout);
            if (normalized) {
                state.panelLayout = normalized;
                savePanelLayout();
            }
        }
        if (state.fabLayout) {
            var normalizedFab = normalizeFabLayout(state.fabLayout);
            if (normalizedFab) {
                state.fabLayout = normalizedFab;
                saveFabLayout();
            }
        }
        if (state.open) {
            applyPanelLayout();
        }
        if (state.assistantEnabled) {
            applyFabLayout();
        }
        setTimeout(updateBottomRowCompactMode, 0);
    });

    fab.addEventListener('mousedown', function (e) {
        startFabPointer(e);
    });

    fab.addEventListener('click', function () {
        if (now() < fabIgnoreClickUntil) {
            return;
        }
        if (!state.assistantEnabled) return;
        if (state.open) {
            closePanel();
            return;
        }
        openPanel();
    });

    window.HBAiAssistant2SetProgressVerbosity = function (level) {
        var normalized = saveProgressVerbosity(level || '');
        state.progressVerbosity = normalized;
        return normalized;
    };

    window.HBAiAssistant2GetProgressVerbosity = function () {
        return state.progressVerbosity || 'detailed';
    };

    window.HBAiAssistant2SetMcpSseDebug = function (enabled) {
        var normalized = saveMcpSseDebugFlag(enabled);
        state.mcpSseDebug = normalized;
        return normalized;
    };

    window.HBAiAssistant2GetMcpSseDebug = function () {
        return !!state.mcpSseDebug;
    };

    // Initial setup
    loadPanelLayout();
    loadFabLayout();
    applyStaticUiTranslations();
    loadAssistantI18n();
    loadLastUsedModel();
    loadConversations();
    ensureConversation();
    populateModelSelect();
    renderAttachmentList();
    renderRequestQueue();
    renderUsageQuotaStatus();
    updateStopButtonState();
    setActiveConversation(state.activeConversationId);
    updateAttachHintVisibility();
    loadBootstrapConfig().then(function (enabled) {
        if (!enabled) return;
        loadProviders();
        loadServerConversations();
    });
})();

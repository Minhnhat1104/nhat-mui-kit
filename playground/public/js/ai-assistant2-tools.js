(function () {
    if (window.HBAIAssistant2Tools) return;

    function collapseText(value) {
        if (value == null) return '';
        return String(value).replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    }

    function normalizeMenuKey(value) {
        var key = collapseText(value || '').toLowerCase();
        if (key === 'calendar') return 'schedule';
        if (key === 'addressbook' || key === 'contact') return 'addrbook';
        if (key === 'work_report') return 'report';
        return key;
    }

    function normalizeOperation(value) {
        var op = collapseText(value || '').toLowerCase();
        if (op === 'view' || op === 'summary') return op;
        return 'search';
    }

    function normalizeSource(value) {
        var source = collapseText(value || '').toLowerCase();
        if (!source) return 'browser_ajax';
        return source;
    }

    function makeEmptyBundle() {
        return {
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
    }

    function isAbortError(err) {
        if (!err) return false;
        var name = collapseText(err.name || '').toLowerCase();
        if (name === 'aborterror') return true;
        var msg = collapseText(err.message || '').toLowerCase();
        return msg === 'aborted' || msg.indexOf('abort') >= 0;
    }

    function normalizeToolAction(raw) {
        var row = raw && typeof raw === 'object' ? raw : {};
        var params = (row.params && typeof row.params === 'object' && !Array.isArray(row.params)) ? row.params : {};
        return {
            menu_key: normalizeMenuKey(row.menu_key || row.menuKey || row.menu || row.module || ''),
            operation: normalizeOperation(row.operation || row.op || row.action || ''),
            source: normalizeSource(row.source || row.data_source || row.dataSource || ''),
            params: params,
            raw: row
        };
    }

    function buildSectionTitle(action, runtime) {
        var menuText = action.menu_key || 'menu';
        var opText = action.operation || 'search';
        var srcText = action.source || 'browser_ajax';

        if (runtime && typeof runtime.actionPlanMenuText === 'function') {
            menuText = runtime.actionPlanMenuText(action.menu_key || '');
        }
        if (runtime && typeof runtime.actionPlanOperationText === 'function') {
            opText = runtime.actionPlanOperationText(action.operation || '');
        }
        if (runtime && typeof runtime.actionPlanSourceText === 'function') {
            srcText = runtime.actionPlanSourceText(action.source || '');
        }

        return menuText + ' / ' + opText + ' / ' + srcText;
    }

    function buildBundleContext(bundle, runtime) {
        if (runtime && typeof runtime.normalizeCollectionSections === 'function') {
            bundle.sections = runtime.normalizeCollectionSections(bundle.sections, '', 120, 14000);
        }

        if (runtime && typeof runtime.buildCollectionContextFromSections === 'function') {
            bundle.context = runtime.buildCollectionContextFromSections(bundle.sections, 180000);
        }

        if (!bundle.context) {
            var parts = [];
            var i;
            for (i = 0; i < bundle.sections.length; i++) {
                var row = bundle.sections[i] || {};
                var context = collapseText(row.context || '');
                if (!context) continue;
                parts.push('[' + collapseText(row.title || 'reference') + ']\n' + context);
            }
            bundle.context = parts.join('\n\n');
        }

        bundle.context = String(bundle.context || '').replace(/^\s+|\s+$/g, '');
        bundle.context_chars = bundle.context.length;
        return bundle;
    }

    function addProgress(runtime, message, level) {
        if (!runtime || typeof runtime.addProgress !== 'function') return;
        runtime.addProgress(message, level || 'normal');
    }

    function replaceTextTokens(text, replacements) {
        var out = String(text == null ? '' : text);
        var map = replacements && typeof replacements === 'object' ? replacements : {};
        var name;
        for (name in map) {
            if (!Object.prototype.hasOwnProperty.call(map, name)) continue;
            var token = '{' + name + '}';
            var value = map[name];
            if (value == null) value = '';
            out = out.split(token).join(String(value));
        }
        return out;
    }

    function runtimeTranslate(runtime, key, fallback) {
        if (runtime && typeof runtime.translateKey === 'function') {
            return runtime.translateKey(key, fallback);
        }
        return collapseText(key || '');
    }

    function runtimeFormat(runtime, key, fallback, replacements) {
        if (runtime && typeof runtime.formatKey === 'function') {
            return runtime.formatKey(key, replacements, fallback);
        }
        return replaceTextTokens(runtimeTranslate(runtime, key, fallback), replacements);
    }

    function toBooleanFlag(value) {
        if (value === true) return true;
        if (value === false || value == null) return false;
        var text = collapseText(value).toLowerCase();
        return text === '1' || text === 'true' || text === 'yes' || text === 'y' || text === 'on';
    }

    function isDisabledBrowserMenuKey(menuKey) {
        return normalizeMenuKey(menuKey || '') === 'diary';
    }

    function resolveRuntimeMenuHandler(menuKey, runtime) {
        var key = normalizeMenuKey(menuKey || '');
        if (!runtime || typeof runtime !== 'object') return null;

        var handler = null;
        if (key === 'customer') handler = runtime.fetchCustomerMenuContext;
        else if (key === 'diary') handler = runtime.fetchDiaryMenuContext;
        else if (key === 'mail') handler = runtime.fetchMailMenuContext;
        else if (key === 'approval') handler = runtime.fetchApprovalMenuContext;
        else if (key === 'report') handler = runtime.fetchReportMenuContext;
        else if (key === 'schedule') handler = runtime.fetchScheduleMenuContext;
        else if (key === 'project') handler = runtime.fetchProjectMenuContext;
        else if (key === 'board') handler = runtime.fetchBoardMenuContext;
        else if (key === 'todo') handler = runtime.fetchTodoMenuContext;
        else if (key === 'whisper') handler = runtime.fetchWhisperMenuContext;
        else if (key === 'circular') handler = runtime.fetchCircularMenuContext;
        else if (key === 'addrbook') handler = runtime.fetchAddrbookMenuContext;
        else if (key === 'helpdesk') handler = runtime.fetchHelpdeskMenuContext;

        if (typeof handler === 'function') {
            return handler;
        }

        if (runtime.menuHandlers && typeof runtime.menuHandlers === 'object') {
            var fallback = runtime.menuHandlers[key];
            if (typeof fallback === 'function') return fallback;
        }
        return null;
    }

    function resolveMcpServerHint(action) {
        var row = action && typeof action === 'object' ? action : {};
        var params = (row.params && typeof row.params === 'object' && !Array.isArray(row.params)) ? row.params : {};
        var raw = collapseText(
            params.mcp_server_id
            || params.mcpServerId
            || params.server_id
            || params.serverId
            || params.tool_server_id
            || params.toolServerId
            || row.mcp_server_id
            || row.mcpServerId
            || row.server_id
            || row.serverId
            || ''
        ).toLowerCase();
        return raw;
    }

    function isBrowserExecutableAction(action) {
        var row = action && typeof action === 'object' ? action : {};
        if (row.source === 'browser_ajax') return true;
        if (row.source !== 'mcp') return false;
        return resolveMcpServerHint(row) === 'browser';
    }

    function executeSingleAction(rawAction, prompt, abortSignal, runtime) {
        if (abortSignal && abortSignal.aborted) {
            var abortErr = new Error('aborted');
            abortErr.name = 'AbortError';
            return Promise.reject(abortErr);
        }

        var row = rawAction && typeof rawAction === 'object' ? rawAction : {};
        var action = normalizeToolAction(row);
        var params = (row.params && typeof row.params === 'object' && !Array.isArray(row.params))
            ? row.params
            : {};
        action.params = params;

        if (runtime && typeof runtime.normalizeCollectorMenuKey === 'function') {
            action.menu_key = collapseText(runtime.normalizeCollectorMenuKey(row) || action.menu_key || '');
        }
        if (runtime && typeof runtime.sanitizeActionPlanOperation === 'function') {
            action.operation = collapseText(runtime.sanitizeActionPlanOperation(row.operation || row.op || '') || action.operation || 'search');
        }
        if (runtime && typeof runtime.normalizeActionPlanSource === 'function') {
            action.source = collapseText(runtime.normalizeActionPlanSource(row.source || row.data_source || row.dataSource || '', 'browser_ajax') || action.source || 'browser_ajax');
        }

        if (isDisabledBrowserMenuKey(action.menu_key)) {
            addProgress(runtime, runtimeFormat(runtime, 'assistant_notice_tool_menu_disabled', 'Browser tool for this menu ({menu}) is disabled.', {
                menu: action.menu_key || 'unknown'
            }), 'detailed');
            return Promise.resolve({
                context: '',
                reason: 'browser_tool_disabled'
            });
        }

        if (!isBrowserExecutableAction(action)) {
            return Promise.resolve({
                context: '',
                reason: 'source_not_browser'
            });
        }

        var boolFlag = (runtime && typeof runtime.toBooleanFlag === 'function')
            ? runtime.toBooleanFlag
            : toBooleanFlag;
        var resolveItems = (runtime && typeof runtime.resolveMenuRequestedItems === 'function')
            ? runtime.resolveMenuRequestedItems
            : function () { return 10; };

        var needDetail = boolFlag(params.need_detail) || action.operation === 'summary' || action.operation === 'view';
        var maxItems = parseInt(resolveItems(params, 10, 30), 10);
        if (isNaN(maxItems) || maxItems < 1) maxItems = 10;
        if (maxItems > 60) maxItems = 60;

        var handler = resolveRuntimeMenuHandler(action.menu_key, runtime);
        if (typeof handler !== 'function') {
            addProgress(runtime, runtimeFormat(runtime, 'assistant_notice_tool_collector_unavailable', 'No browser AJAX collector is available yet for this menu ({menu}).', {
                menu: action.menu_key || 'unknown'
            }), 'detailed');
            return Promise.resolve({
                context: '',
                reason: 'browser_collector_unavailable'
            });
        }

        var progress = function (message, level) {
            addProgress(runtime, message, level || 'normal');
        };

        return Promise.resolve(handler(params, prompt || '', needDetail, maxItems, abortSignal || null, progress))
            .then(function (rawResult) {
                var result = rawResult && typeof rawResult === 'object' ? rawResult : {};
                if (result.context == null) result.context = '';
                if (!result.reason && !collapseText(result.context)) {
                    result.reason = 'no_context';
                }
                return result;
            });
    }

    function collectActionPlanContext(options) {
        var input = options && typeof options === 'object' ? options : {};
        var runtime = input.runtime && typeof input.runtime === 'object' ? input.runtime : {};
        var actions = Array.isArray(input.actions) ? input.actions.slice(0) : [];
        var prompt = String(input.prompt || '');
        var abortSignal = input.abortSignal || null;
        var collectSingleAction = null;
        if (runtime && typeof runtime.executeSingleAction === 'function') {
            collectSingleAction = function (actionRow, toolPrompt, signal) {
                return runtime.executeSingleAction(actionRow, toolPrompt, signal, runtime);
            };
        } else if (runtime && typeof runtime.collectSingleAction === 'function') {
            collectSingleAction = runtime.collectSingleAction;
        } else {
            collectSingleAction = function (actionRow, toolPrompt, signal) {
                return executeSingleAction(actionRow, toolPrompt, signal, runtime);
            };
        }

        if (!collectSingleAction) {
            return Promise.reject(new Error('collectSingleAction runtime is required'));
        }

        var bundle = makeEmptyBundle();
        if (!actions.length) {
            return Promise.resolve(bundle);
        }
        bundle.passes = 1;
        bundle.steps.push({
            pass: 1,
            phase: 'pass_start',
            action_count: actions.length
        });

        var index = 0;

        function iterate() {
            if (abortSignal && abortSignal.aborted) {
                var abortErr = new Error('aborted');
                abortErr.name = 'AbortError';
                return Promise.reject(abortErr);
            }

            if (index >= actions.length) {
                bundle.steps.push({
                    pass: 1,
                    phase: 'pass_end',
                    resolved_count: bundle.resolved_count,
                    unresolved_count: bundle.unresolved_count
                });
                return Promise.resolve(buildBundleContext(bundle, runtime));
            }

            var actionIndex = index;
            var action = normalizeToolAction(actions[index]);
            index += 1;

            if (!isBrowserExecutableAction(action)) {
                return iterate();
            }

            var sectionTitle = buildSectionTitle(action, runtime);
            addProgress(runtime, runtimeFormat(runtime, 'assistant_notice_tool_execute', '{title} 실행', {
                title: sectionTitle
            }), 'normal');

            return collectSingleAction(action.raw || actions[actionIndex], prompt, abortSignal)
                .then(function (rawResult) {
                    var result = rawResult && typeof rawResult === 'object' ? rawResult : {};
                    var contextText = String(result.context == null ? '' : result.context).replace(/^\s+|\s+$/g, '');
                    if (contextText) {
                        bundle.resolved_count += 1;
                        bundle.sections.push({
                            title: sectionTitle,
                            context: contextText,
                            source: action.source,
                            menu_key: action.menu_key,
                            operation: action.operation,
                            pass: 1,
                            action_index: actionIndex + 1
                        });
                        bundle.steps.push({
                            pass: 1,
                            phase: 'collect',
                            menu_key: action.menu_key,
                            operation: action.operation,
                            source: action.source,
                            status: 'resolved',
                            context_chars: contextText.length
                        });
                        if (result.next_page_params && typeof result.next_page_params === 'object' && !Array.isArray(result.next_page_params)) {
                            bundle.retry_candidates.push({
                                menu_key: action.menu_key,
                                operation: action.operation,
                                reason: 'next_page_available',
                                params: result.next_page_params
                            });
                        }
                    } else {
                        var unresolvedReason = collapseText(result.reason || 'no_context');
                        if (!unresolvedReason) unresolvedReason = 'no_context';
                        bundle.unresolved_count += 1;
                        bundle.unresolved.push({
                            menu_key: action.menu_key,
                            operation: action.operation,
                            reason: unresolvedReason
                        });
                        bundle.steps.push({
                            pass: 1,
                            phase: 'collect',
                            menu_key: action.menu_key,
                            operation: action.operation,
                            source: action.source,
                            status: 'unresolved',
                            reason: unresolvedReason
                        });
                    }
                    return iterate();
                })
                .catch(function (err) {
                    if (isAbortError(err)) return Promise.reject(err);
                    var message = collapseText((err && err.message) ? err.message : 'tool execution failed');
                    bundle.errors.push(message || 'tool execution failed');
                    bundle.unresolved_count += 1;
                    bundle.unresolved.push({
                        menu_key: action.menu_key,
                        operation: action.operation,
                        reason: 'no_context'
                    });
                    bundle.steps.push({
                        pass: 1,
                        phase: 'collect',
                        menu_key: action.menu_key,
                        operation: action.operation,
                        source: action.source,
                        status: 'unresolved',
                        reason: 'no_context'
                    });
                    addProgress(runtime, runtimeFormat(runtime, 'assistant_notice_tool_error', '{title} - {message}', {
                        title: sectionTitle,
                        message: message
                    }), 'minimal');
                    return iterate();
                });
        }

        return iterate();
    }

    window.HBAIAssistant2Tools = {
        collectActionPlanContext: collectActionPlanContext,
        executeSingleAction: executeSingleAction
    };
})();

import { useTheme as lr, Box as Ie, CircularProgress as _r, Typography as yt, Chip as Bs, OutlinedInput as Fs, Stack as Ft, Select as Gs, MenuItem as Ys, IconButton as jt, Portal as Hs, Backdrop as Xs, StyledEngineProvider as Us, CssBaseline as qs, Tooltip as Ks } from "@mui/material";
import * as Te from "react";
import le, { useState as Me, useRef as de, useCallback as Pr, forwardRef as Gt, useEffect as Ge, useMemo as lo, useImperativeHandle as Js, useLayoutEffect as $n, createContext as co, useContext as Zs } from "react";
import { ChevronUp as Qs, ChevronDown as ea, X as uo, ChevronLeft as ta, ChevronRight as fo, ZoomIn as ra, ZoomOut as na, Download as ia, Minus as oa, Check as sa } from "react-feather";
import { ArrowDropUp as aa, ArrowDropDown as la } from "@mui/icons-material";
import ca, { merge as ua } from "lodash";
import { Global as da, ThemeContext as po } from "@emotion/react";
import "@emotion/styled";
function fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ho(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Cn = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function pa() {
  if (Jn) return Qt;
  Jn = 1;
  var e = le, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, s, l) {
    var p, d = {}, g = null, u = null;
    l !== void 0 && (g = "" + l), s.key !== void 0 && (g = "" + s.key), s.ref !== void 0 && (u = s.ref);
    for (p in s) n.call(s, p) && !o.hasOwnProperty(p) && (d[p] = s[p]);
    if (c && c.defaultProps) for (p in s = c.defaultProps, s) d[p] === void 0 && (d[p] = s[p]);
    return { $$typeof: t, type: c, key: g, ref: u, props: d, _owner: i.current };
  }
  return Qt.Fragment = r, Qt.jsx = a, Qt.jsxs = a, Qt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function ha() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = le, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), f = Symbol.iterator, v = "@@iterator";
    function S(b) {
      if (b === null || typeof b != "object")
        return null;
      var L = f && b[f] || b[v];
      return typeof L == "function" ? L : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(b) {
      {
        for (var L = arguments.length, H = new Array(L > 1 ? L - 1 : 0), Q = 1; Q < L; Q++)
          H[Q - 1] = arguments[Q];
        y("error", b, H);
      }
    }
    function y(b, L, H) {
      {
        var Q = h.ReactDebugCurrentFrame, oe = Q.getStackAddendum();
        oe !== "" && (L += "%s", H = H.concat([oe]));
        var ue = H.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + L), Function.prototype.apply.call(console[b], console, ue);
      }
    }
    var E = !1, x = !1, W = !1, z = !1, w = !1, I;
    I = Symbol.for("react.module.reference");
    function C(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === o || w || b === i || b === l || b === p || z || b === u || E || x || W || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === d || b.$$typeof === a || b.$$typeof === c || b.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === I || b.getModuleId !== void 0));
    }
    function _(b, L, H) {
      var Q = b.displayName;
      if (Q)
        return Q;
      var oe = L.displayName || L.name || "";
      return oe !== "" ? H + "(" + oe + ")" : H;
    }
    function k(b) {
      return b.displayName || "Context";
    }
    function A(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            var L = b;
            return k(L) + ".Consumer";
          case a:
            var H = b;
            return k(H._context) + ".Provider";
          case s:
            return _(b, b.render, "ForwardRef");
          case d:
            var Q = b.displayName || null;
            return Q !== null ? Q : A(b.type) || "Memo";
          case g: {
            var oe = b, ue = oe._payload, ne = oe._init;
            try {
              return A(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, G = 0, X, K, N, Z, M, $, q;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function T() {
      {
        if (G === 0) {
          X = console.log, K = console.info, N = console.warn, Z = console.error, M = console.group, $ = console.groupCollapsed, q = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        G++;
      }
    }
    function P() {
      {
        if (G--, G === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, b, {
              value: X
            }),
            info: B({}, b, {
              value: K
            }),
            warn: B({}, b, {
              value: N
            }),
            error: B({}, b, {
              value: Z
            }),
            group: B({}, b, {
              value: M
            }),
            groupCollapsed: B({}, b, {
              value: $
            }),
            groupEnd: B({}, b, {
              value: q
            })
          });
        }
        G < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = h.ReactCurrentDispatcher, F;
    function R(b, L, H) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (oe) {
            var Q = oe.stack.trim().match(/\n( *(at )?)/);
            F = Q && Q[1] || "";
          }
        return `
` + F + b;
      }
    }
    var V = !1, Y;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new J();
    }
    function j(b, L) {
      if (!b || V)
        return "";
      {
        var H = Y.get(b);
        if (H !== void 0)
          return H;
      }
      var Q;
      V = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = O.current, O.current = null, T();
      try {
        if (L) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (_e) {
              Q = _e;
            }
            Reflect.construct(b, [], ne);
          } else {
            try {
              ne.call();
            } catch (_e) {
              Q = _e;
            }
            b.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            Q = _e;
          }
          b();
        }
      } catch (_e) {
        if (_e && Q && typeof _e.stack == "string") {
          for (var te = _e.stack.split(`
`), Oe = Q.stack.split(`
`), ve = te.length - 1, xe = Oe.length - 1; ve >= 1 && xe >= 0 && te[ve] !== Oe[xe]; )
            xe--;
          for (; ve >= 1 && xe >= 0; ve--, xe--)
            if (te[ve] !== Oe[xe]) {
              if (ve !== 1 || xe !== 1)
                do
                  if (ve--, xe--, xe < 0 || te[ve] !== Oe[xe]) {
                    var We = `
` + te[ve].replace(" at new ", " at ");
                    return b.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", b.displayName)), typeof b == "function" && Y.set(b, We), We;
                  }
                while (ve >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        V = !1, O.current = ue, P(), Error.prepareStackTrace = oe;
      }
      var Tt = b ? b.displayName || b.name : "", ht = Tt ? R(Tt) : "";
      return typeof b == "function" && Y.set(b, ht), ht;
    }
    function re(b, L, H) {
      return j(b, !1);
    }
    function fe(b) {
      var L = b.prototype;
      return !!(L && L.isReactComponent);
    }
    function we(b, L, H) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return j(b, fe(b));
      if (typeof b == "string")
        return R(b);
      switch (b) {
        case l:
          return R("Suspense");
        case p:
          return R("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case s:
            return re(b.render);
          case d:
            return we(b.type, L, H);
          case g: {
            var Q = b, oe = Q._payload, ue = Q._init;
            try {
              return we(ue(oe), L, H);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, Re = {}, Ae = h.ReactDebugCurrentFrame;
    function De(b) {
      if (b) {
        var L = b._owner, H = we(b.type, b._source, L ? L.type : null);
        Ae.setExtraStackFrame(H);
      } else
        Ae.setExtraStackFrame(null);
    }
    function Ze(b, L, H, Q, oe) {
      {
        var ue = Function.call.bind(ze);
        for (var ne in b)
          if (ue(b, ne)) {
            var te = void 0;
            try {
              if (typeof b[ne] != "function") {
                var Oe = Error((Q || "React class") + ": " + H + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              te = b[ne](L, ne, Q, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              te = ve;
            }
            te && !(te instanceof Error) && (De(oe), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", H, ne, typeof te), De(null)), te instanceof Error && !(te.message in Re) && (Re[te.message] = !0, De(oe), m("Failed %s type: %s", H, te.message), De(null));
          }
      }
    }
    var ot = Array.isArray;
    function Ke(b) {
      return ot(b);
    }
    function st(b) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, H = L && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return H;
      }
    }
    function at(b) {
      try {
        return Qe(b), !1;
      } catch {
        return !0;
      }
    }
    function Qe(b) {
      return "" + b;
    }
    function je(b) {
      if (at(b))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", st(b)), Qe(b);
    }
    var lt = h.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ht, Xt;
    function fr(b) {
      if (ze.call(b, "ref")) {
        var L = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function pr(b) {
      if (ze.call(b, "key")) {
        var L = Object.getOwnPropertyDescriptor(b, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function hr(b, L) {
      typeof b.ref == "string" && lt.current;
    }
    function gr(b, L) {
      {
        var H = function() {
          Ht || (Ht = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function mr(b, L) {
      {
        var H = function() {
          Xt || (Xt = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        H.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var vr = function(b, L, H, Q, oe, ue, ne) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: L,
        ref: H,
        props: ne,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function yr(b, L, H, Q, oe) {
      {
        var ue, ne = {}, te = null, Oe = null;
        H !== void 0 && (je(H), te = "" + H), pr(L) && (je(L.key), te = "" + L.key), fr(L) && (Oe = L.ref, hr(L, oe));
        for (ue in L)
          ze.call(L, ue) && !Je.hasOwnProperty(ue) && (ne[ue] = L[ue]);
        if (b && b.defaultProps) {
          var ve = b.defaultProps;
          for (ue in ve)
            ne[ue] === void 0 && (ne[ue] = ve[ue]);
        }
        if (te || Oe) {
          var xe = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          te && gr(ne, xe), Oe && mr(ne, xe);
        }
        return vr(b, te, Oe, oe, Q, lt.current, ne);
      }
    }
    var St = h.ReactCurrentOwner, Ut = h.ReactDebugCurrentFrame;
    function et(b) {
      if (b) {
        var L = b._owner, H = we(b.type, b._source, L ? L.type : null);
        Ut.setExtraStackFrame(H);
      } else
        Ut.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function Et(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function qt() {
      {
        if (St.current) {
          var b = A(St.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function br(b) {
      return "";
    }
    var Kt = {};
    function xr(b) {
      {
        var L = qt();
        if (!L) {
          var H = typeof b == "string" ? b : b.displayName || b.name;
          H && (L = `

Check the top-level render call using <` + H + ">.");
        }
        return L;
      }
    }
    function Jt(b, L) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var H = xr(L);
        if (Kt[H])
          return;
        Kt[H] = !0;
        var Q = "";
        b && b._owner && b._owner !== St.current && (Q = " It was passed a child from " + A(b._owner.type) + "."), et(b), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, Q), et(null);
      }
    }
    function Zt(b, L) {
      {
        if (typeof b != "object")
          return;
        if (Ke(b))
          for (var H = 0; H < b.length; H++) {
            var Q = b[H];
            Et(Q) && Jt(Q, L);
          }
        else if (Et(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var oe = S(b);
          if (typeof oe == "function" && oe !== b.entries)
            for (var ue = oe.call(b), ne; !(ne = ue.next()).done; )
              Et(ne.value) && Jt(ne.value, L);
        }
      }
    }
    function Sr(b) {
      {
        var L = b.type;
        if (L == null || typeof L == "string")
          return;
        var H;
        if (typeof L == "function")
          H = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === d))
          H = L.propTypes;
        else
          return;
        if (H) {
          var Q = A(L);
          Ze(H, b.props, "prop", Q, b);
        } else if (L.PropTypes !== void 0 && !wt) {
          wt = !0;
          var oe = A(L);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(b) {
      {
        for (var L = Object.keys(b.props), H = 0; H < L.length; H++) {
          var Q = L[H];
          if (Q !== "children" && Q !== "key") {
            et(b), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), et(null);
            break;
          }
        }
        b.ref !== null && (et(b), m("Invalid attribute `ref` supplied to `React.Fragment`."), et(null));
      }
    }
    var qn = {};
    function Kn(b, L, H, Q, oe, ue) {
      {
        var ne = C(b);
        if (!ne) {
          var te = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = br();
          Oe ? te += Oe : te += qt();
          var ve;
          b === null ? ve = "null" : Ke(b) ? ve = "array" : b !== void 0 && b.$$typeof === t ? (ve = "<" + (A(b.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof b, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, te);
        }
        var xe = yr(b, L, H, oe, ue);
        if (xe == null)
          return xe;
        if (ne) {
          var We = L.children;
          if (We !== void 0)
            if (Q)
              if (Ke(We)) {
                for (var Tt = 0; Tt < We.length; Tt++)
                  Zt(We[Tt], b);
                Object.freeze && Object.freeze(We);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zt(We, b);
        }
        if (ze.call(L, "key")) {
          var ht = A(b), _e = Object.keys(L).filter(function(Vs) {
            return Vs !== "key";
          }), Zr = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qn[ht + Zr]) {
            var Ns = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zr, ht, Ns, ht), qn[ht + Zr] = !0;
          }
        }
        return b === n ? wr(xe) : Sr(xe), xe;
      }
    }
    function As(b, L, H) {
      return Kn(b, L, H, !0);
    }
    function Ds(b, L, H) {
      return Kn(b, L, H, !1);
    }
    var js = Ds, Ws = As;
    er.Fragment = n, er.jsx = js, er.jsxs = Ws;
  }()), er;
}
process.env.NODE_ENV === "production" ? Cn.exports = pa() : Cn.exports = ha();
var D = Cn.exports;
const gp = (e) => {
  const { sx: t, value: r, variant: n = "determinate" } = e, i = lr();
  return /* @__PURE__ */ D.jsxs(Ie, { sx: { position: "relative", width: "fit-content", ...t, height: 60 }, children: [
    /* @__PURE__ */ D.jsx(
      _r,
      {
        variant: "determinate",
        size: 60,
        sx: {
          color: i.palette.background.softGrey,
          ...i.applyStyles("dark", {
            color: i.palette.background.softGrey
          })
        },
        value: 100
      }
    ),
    /* @__PURE__ */ D.jsx(
      _r,
      {
        size: 60,
        variant: n,
        sx: {
          position: "absolute",
          left: 0
        },
        value: r
      }
    ),
    /* @__PURE__ */ D.jsx(
      yt,
      {
        variant: "caption",
        component: "div",
        sx: { color: "text.secondary", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        children: `${Math.round(r)}%`
      }
    )
  ] });
}, ga = "groupware-table-counter", mp = (e) => {
  const { label: t, color: r = "primary", size: n = "small", fontSize: i } = e, o = lr();
  return /* @__PURE__ */ D.jsx(
    Bs,
    {
      className: ga,
      label: t,
      size: n,
      sx: {
        p: 0,
        borderRadius: 99,
        height: "unset",
        flexShrink: 0,
        transition: "background-color 0.15s ease-in-out, color 0.15s ease-in-out",
        backgroundColor: r === "grey" ? o.palette.background.softGrey : "primary.lighter",
        color: r === "grey" ? o.palette.grey.main : "primary.main",
        "& .MuiChip-label": { py: 0.25, px: 0.875, fontSize: i }
      }
    }
  );
}, Qn = {
  small: 28,
  medium: 40
}, vp = (e) => {
  const { sx: t, fullHeight: r = !1, size: n = "medium", label: i } = e;
  return /* @__PURE__ */ D.jsxs(
    Ie,
    {
      alignItems: "center",
      justifyContent: "center",
      sx: {
        height: r ? "100%" : 350,
        ...t
      },
      children: [
        /* @__PURE__ */ D.jsx(
          _r,
          {
            size: n,
            style: { width: Qn[n], height: Qn[n] }
          }
        ),
        i && /* @__PURE__ */ D.jsx(
          yt,
          {
            noWrap: !0,
            color: "text.secondary",
            sx: { mt: 2, fontSize: n === "small" ? 12 : 13 },
            children: i
          }
        )
      ]
    }
  );
}, ei = (e) => {
  const {
    onLongPress: t,
    onClick: r,
    onClear: n,
    options: { shouldPreventDefault: i, delay: o, clearOnMouseLeave: a } = {
      shouldPreventDefault: !0,
      delay: 300,
      clearOnMouseLeave: !1
    }
  } = e, [c, s] = Me(!1), l = de(), p = de(), d = Pr(
    (u) => {
      i && u.target && (u.target.addEventListener("touchend", ti, {
        passive: !1
      }), p.current = u.target), l.current = setTimeout(() => {
        t(u), s(!0);
      }, o);
    },
    [t, o, i]
  ), g = Pr(
    (u, f = !0) => {
      l.current && clearTimeout(l.current), f && !c && r(), n(), s(!1), i && p.current && p.current.removeEventListener("touchend", ti);
    },
    [i, r, c]
  );
  return {
    onMouseDown: (u) => d(u),
    onTouchStart: (u) => d(u),
    onMouseUp: (u) => g(u),
    onMouseLeave: (u) => g(u, !1),
    onTouchEnd: (u) => g(u)
  };
}, ti = (e) => {
  if (!("touches" in e)) return;
  const t = e == null ? void 0 : e.touches;
  (t == null ? void 0 : t.length) < 2 && e.preventDefault && e.preventDefault();
}, ma = (e, t) => {
  const {
    value: r,
    onChange: n,
    min: i = 0,
    max: o = 999999999999999,
    endAdornment: a,
    sx: c
  } = e, s = lr(), l = Te.useRef({
    interval: null,
    value: 0
  }), [p, d] = Me(r);
  Te.useEffect(() => {
    d(r && typeof r == "number" ? r : 0);
  }, [r]);
  const g = (h) => {
    n(h), d(h);
  }, u = (h) => {
    d((m) => {
      const y = Number(m);
      return console.log("🚀 ~ nVal:", y), y && !isNaN(y) || y === 0 ? o && y < o ? (l.current.value = y + 1, h && h(y + 1), y + 1) : (l.current.value = o, h && h(o), o) : (l.current.value = 1, h && h(1), 1);
    });
  }, f = (h) => {
    d((m) => {
      const y = Number(m);
      return y && !isNaN(y) || y === 0 && i < y ? (l.current.value = y - 1, h && h(y - 1), y - 1) : (l.current.value = i, h && h(i), i);
    });
  }, v = ei({
    onClear: () => {
      var h, m, y;
      (h = l.current) != null && h.interval && (clearInterval((m = l.current) == null ? void 0 : m.interval), g((y = l.current) == null ? void 0 : y.value), l.current.interval = null);
    },
    onClick: () => u((h) => n(h)),
    onLongPress: () => {
      u(), l.current.interval = setInterval(u, 50);
    }
  }), S = ei({
    onClear: () => {
      var h, m, y;
      (h = l.current) != null && h.interval && (clearInterval((m = l.current) == null ? void 0 : m.interval), g((y = l.current) == null ? void 0 : y.value), l.current.interval = null);
    },
    onClick: () => f((h) => n(h)),
    onLongPress: () => {
      f(), l.current.interval = setInterval(f, 50);
    }
  });
  return /* @__PURE__ */ D.jsx(
    Fs,
    {
      value: p,
      onChange: (h) => {
        var y;
        const m = Number((y = h == null ? void 0 : h.target) == null ? void 0 : y.value);
        (m && !isNaN(m) || m === 0) && (i > m ? g(i) : o && m > o || g(m));
      },
      endAdornment: /* @__PURE__ */ D.jsxs(Ft, { direction: "row", alignItems: "center", spacing: 1, children: [
        a,
        /* @__PURE__ */ D.jsxs(Ft, { children: [
          /* @__PURE__ */ D.jsx(
            Ie,
            {
              ...v,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                background: s.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: s.border.light,
                borderBottom: "none",
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: s.palette.primary.main,
                  borderColor: s.palette.primary.main
                }
              },
              children: /* @__PURE__ */ D.jsx(Qs, { size: 12, style: { margin: "auto", flexShrink: 0 } })
            }
          ),
          /* @__PURE__ */ D.jsx(
            Ie,
            {
              ...S,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                background: s.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: s.border.light,
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: s.palette.primary.main,
                  borderColor: s.palette.primary.main
                }
              },
              children: /* @__PURE__ */ D.jsx(
                ea,
                {
                  size: 12,
                  style: { margin: "auto", flexShrink: 0 }
                }
              )
            }
          )
        ] })
      ] }),
      ref: t,
      sx: { ...c, pr: 1.25 }
    }
  );
}, yp = Gt(ma), bp = (e) => {
  const {
    value: t,
    onChange: r,
    options: n,
    size: i,
    sx: o,
    showIcon: a = !1,
    disablePortal: c = !1,
    useClear: s = !1,
    placeholder: l = "Select an item",
    fieldLabel: p = "label",
    fieldValue: d = "value",
    MenuProps: g = {},
    isLoading: u = !1,
    disabled: f = !1,
    fullWidth: v = !0,
    variant: S = "outlined",
    closeOnSelect: h = !1
  } = e, m = lr(), [y, E] = Me(""), [x, W] = Me(!1);
  Ge(() => {
    E(t ? t == null ? void 0 : t[d] : "");
  }, [t]);
  const z = (I) => {
    E(I);
    const C = n.find((_) => (_ == null ? void 0 : _[d]) === I);
    r && r(C), h && W(!1);
  }, w = (I) => {
    I == null || I.stopPropagation(), E(""), r && r(null);
  };
  return /* @__PURE__ */ D.jsx(
    Gs,
    {
      variant: S,
      disabled: f,
      fullWidth: v,
      displayEmpty: !0,
      inputProps: { "aria-label": "select" },
      size: i,
      value: y,
      open: x,
      onOpen: () => {
        W(!0);
      },
      onClose: () => {
        W(!1);
      },
      MenuProps: {
        disablePortal: c,
        // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
        PaperProps: {
          style: {
            maxHeight: "30vh"
          }
        },
        ...g
      },
      sx: {
        "&.MuiInputBase-root": {
          pr: 0.75,
          "& .MuiSelect-select": {
            pr: 2
          }
        },
        "&.MuiList-root .MuiMenu-list": {
          py: 0
        },
        ...o,
        "& .MuiSelect-iconOutlined": {
          display: s && y || u ? "none" : ""
        },
        "& .MuiSelect-icon": { display: "none" },
        "&.Mui-focused .MuiIconButton-root": { color: "primary.main" }
      },
      renderValue: (I) => {
        const C = n.find((_) => (_ == null ? void 0 : _[d]) === I);
        return I || I === 0 ? /* @__PURE__ */ D.jsxs(
          Ie,
          {
            sx: {
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              alignItems: "center"
            },
            children: [
              a && (C == null ? void 0 : C.icon) && (typeof (C == null ? void 0 : C.icon) == "function" || typeof (C == null ? void 0 : C.icon) == "object") && /* @__PURE__ */ D.jsx(C.icon, { ...C == null ? void 0 : C.iconProps }),
              /* @__PURE__ */ D.jsx(
                yt,
                {
                  sx: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" },
                  children: C == null ? void 0 : C[p]
                }
              ),
              a && (C == null ? void 0 : C.endIcon) && (typeof (C == null ? void 0 : C.endIcon) == "function" || typeof (C == null ? void 0 : C.endIcon) == "object") && /* @__PURE__ */ D.jsx(C.endIcon, { ...C == null ? void 0 : C.endIconProps })
            ]
          }
        ) : /* @__PURE__ */ D.jsx(
          yt,
          {
            color: "text.secondary",
            variant: "h5",
            fontWeight: m.typography.fontWeightRegular,
            children: "placeholder"
          }
        );
      },
      endAdornment: u ? /* @__PURE__ */ D.jsx(_r, { size: 18, sx: { mr: 0.5 } }) : /* @__PURE__ */ D.jsxs(
        Ft,
        {
          direction: "row",
          alignItems: "center",
          spacing: 0.5,
          onClick: f ? void 0 : () => W((I) => !I),
          sx: { cursor: f ? void 0 : "pointer" },
          children: [
            s && y && /* @__PURE__ */ D.jsx(
              jt,
              {
                size: "small",
                sx: {
                  visibility: y ? "visible" : "hidden",
                  color: m.palette.grey.main
                },
                onClick: w,
                variant: "light",
                color: "secondary",
                children: /* @__PURE__ */ D.jsx(uo, {})
              }
            ),
            x ? /* @__PURE__ */ D.jsx(aa, { sx: { color: m.palette.grey.main } }) : /* @__PURE__ */ D.jsx(la, { sx: { color: m.palette.grey.main } })
          ]
        }
      ),
      onChange: (I) => {
        const C = I.target.value;
        z(C);
      },
      children: n == null ? void 0 : n.filter(
        (I) => (I == null ? void 0 : I.isShow) || !(I != null && I.hasOwnProperty("isShow"))
      ).map((I, C) => {
        const _ = I == null ? void 0 : I.icon, k = I == null ? void 0 : I.endIcon;
        return /* @__PURE__ */ D.jsxs(
          Ys,
          {
            disabled: (I == null ? void 0 : I.disabled) || !1,
            value: I == null ? void 0 : I[d],
            sx: { display: "flex", alignItems: "center" },
            children: [
              a && _ && (typeof _ == "function" || typeof _ == "object") && /* @__PURE__ */ D.jsx(_, { ...I == null ? void 0 : I.iconProps }),
              /* @__PURE__ */ D.jsx(yt, { children: I == null ? void 0 : I[p] }),
              a && k && (typeof k == "function" || typeof k == "object") && /* @__PURE__ */ D.jsx(k, { ...I == null ? void 0 : I.endIconProps })
            ]
          },
          C
        );
      })
    }
  );
};
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wt.apply(null, arguments);
}
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ri, ni = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Qr, ii, oi, va = (ri || (ri = 1, Qr = ni, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = "", o = 0; o < arguments.length; o++) {
      var a = arguments[o];
      a && (i = n(i, r(a)));
    }
    return i;
  }
  function r(i) {
    if (typeof i == "string" || typeof i == "number") return i;
    if (typeof i != "object") return "";
    if (Array.isArray(i)) return t.apply(null, i);
    if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) return i.toString();
    var o = "";
    for (var a in i) e.call(i, a) && i[a] && (o = n(o, a));
    return o;
  }
  function n(i, o) {
    return o ? i ? i + " " + o : i + o : i;
  }
  Qr.exports ? (t.default = t, Qr.exports = t) : window.classNames = t;
}()), ni.exports), zn = cr(va), si, ai, ya = (oi || (oi = 1, ii = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var n, i, o;
    if (Array.isArray(t)) {
      if ((n = t.length) != r.length) return !1;
      for (i = n; i-- !== 0; ) if (!e(t[i], r[i])) return !1;
      return !0;
    }
    if (t instanceof Map && r instanceof Map) {
      if (t.size !== r.size) return !1;
      for (i of t.entries()) if (!r.has(i[0])) return !1;
      for (i of t.entries()) if (!e(i[1], r.get(i[0]))) return !1;
      return !0;
    }
    if (t instanceof Set && r instanceof Set) {
      if (t.size !== r.size) return !1;
      for (i of t.entries()) if (!r.has(i[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(r)) {
      if ((n = t.length) != r.length) return !1;
      for (i = n; i-- !== 0; ) if (t[i] !== r[i]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
    for (i = n; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
    for (i = n; i-- !== 0; ) {
      var a = o[i];
      if (!e(t[a], r[a])) return !1;
    }
    return !0;
  }
  return t != t && r != r;
}), ii), ba = cr(ya), li, ci, qe = cr(function() {
  if (ai) return si;
  ai = 1;
  var e = /^\s+|\s+$/g, t = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, n = /^0o[0-7]+$/i, i = parseInt, o = Object.prototype.toString;
  function a(s) {
    var l = typeof s;
    return !!s && (l == "object" || l == "function");
  }
  function c(s) {
    if (typeof s == "number") return s;
    if (function(d) {
      return typeof d == "symbol" || /* @__PURE__ */ function(g) {
        return !!g && typeof g == "object";
      }(d) && o.call(d) == "[object Symbol]";
    }(s)) return NaN;
    if (a(s)) {
      var l = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = a(l) ? l + "" : l;
    }
    if (typeof s != "string") return s === 0 ? s : +s;
    s = s.replace(e, "");
    var p = r.test(s);
    return p || n.test(s) ? i(s.slice(2), p ? 2 : 8) : t.test(s) ? NaN : +s;
  }
  return si = function(s, l, p) {
    return p === void 0 && (p = l, l = void 0), p !== void 0 && (p = (p = c(p)) == p ? p : 0), l !== void 0 && (l = (l = c(l)) == l ? l : 0), function(d, g, u) {
      return d == d && (u !== void 0 && (d = d <= u ? d : u), g !== void 0 && (d = d >= g ? d : g)), d;
    }(c(s), l, p);
  };
}()), xa = cr(function() {
  if (ci) return li;
  ci = 1;
  var e = /^\s+|\s+$/g, t = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, n = /^0o[0-7]+$/i, i = parseInt, o = typeof Er == "object" && Er && Er.Object === Object && Er, a = typeof self == "object" && self && self.Object === Object && self, c = o || a || Function("return this")(), s = Object.prototype.toString, l = Math.max, p = Math.min, d = function() {
    return c.Date.now();
  };
  function g(f) {
    var v = typeof f;
    return !!f && (v == "object" || v == "function");
  }
  function u(f) {
    if (typeof f == "number") return f;
    if (function(h) {
      return typeof h == "symbol" || /* @__PURE__ */ function(m) {
        return !!m && typeof m == "object";
      }(h) && s.call(h) == "[object Symbol]";
    }(f)) return NaN;
    if (g(f)) {
      var v = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = g(v) ? v + "" : v;
    }
    if (typeof f != "string") return f === 0 ? f : +f;
    f = f.replace(e, "");
    var S = r.test(f);
    return S || n.test(f) ? i(f.slice(2), S ? 2 : 8) : t.test(f) ? NaN : +f;
  }
  return li = function(f, v, S) {
    var h, m, y, E, x, W, z = 0, w = !1, I = !1, C = !0;
    if (typeof f != "function") throw new TypeError("Expected a function");
    function _(X) {
      var K = h, N = m;
      return h = m = void 0, z = X, E = f.apply(N, K);
    }
    function k(X) {
      var K = X - W;
      return W === void 0 || K >= v || K < 0 || I && X - z >= y;
    }
    function A() {
      var X = d();
      if (k(X)) return B(X);
      x = setTimeout(A, function(K) {
        var N = v - (K - W);
        return I ? p(N, y - (K - z)) : N;
      }(X));
    }
    function B(X) {
      return x = void 0, C && h ? _(X) : (h = m = void 0, E);
    }
    function G() {
      var X = d(), K = k(X);
      if (h = arguments, m = this, W = X, K) {
        if (x === void 0) return function(N) {
          return z = N, x = setTimeout(A, v), w ? _(N) : E;
        }(W);
        if (I) return x = setTimeout(A, v), _(W);
      }
      return x === void 0 && (x = setTimeout(A, v)), E;
    }
    return v = u(v) || 0, g(S) && (w = !!S.leading, y = (I = "maxWait" in S) ? l(u(S.maxWait) || 0, v) : y, C = "trailing" in S ? !!S.trailing : C), G.cancel = function() {
      x !== void 0 && clearTimeout(x), z = 0, h = W = m = x = void 0;
    }, G.flush = function() {
      return x === void 0 ? E : B(d());
    }, G;
  };
}()), ui = {
  width: void 0,
  height: void 0
};
function Sa(e) {
  const {
    ref: t,
    box: r = "content-box"
  } = e, [{
    width: n,
    height: i
  }, o] = Me(ui), a = function() {
    const l = de(!1);
    return Ge(() => (l.current = !0, () => {
      l.current = !1;
    }), []), Pr(() => l.current, []);
  }(), c = de(Wt({}, ui)), s = de(void 0);
  return s.current = e.onResize, Ge(() => {
    if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
    const l = new ResizeObserver(([p]) => {
      const d = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", g = di(p, d, "inlineSize"), u = di(p, d, "blockSize");
      if (c.current.width !== g || c.current.height !== u) {
        const f = {
          width: g,
          height: u
        };
        c.current.width = g, c.current.height = u, s.current ? s.current(f) : a() && o(f);
      }
    });
    return l.observe(t.current, {
      box: r
    }), () => {
      l.disconnect();
    };
  }, [r, t, a]), {
    width: n,
    height: i
  };
}
function di(e, t, r) {
  return e[t] ? Array.isArray(e[t]) ? e[t][0][r] : e[t][r] : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
var wa = "allotment-module_splitView__L-yRc", Ea = "allotment-module_sashContainer__fzwJF", Ta = "allotment-module_splitViewContainer__rQnVa", go = "allotment-module_splitViewView__MGZ6O", Ca = "allotment-module_vertical__WSwwa", za = "allotment-module_horizontal__7doS8", Ma = "allotment-module_separatorBorder__x-rDS";
let tr, mo = !1, vo = !1;
typeof navigator == "object" && (tr = navigator.userAgent, vo = tr.indexOf("Macintosh") >= 0, mo = (tr.indexOf("Macintosh") >= 0 || tr.indexOf("iPad") >= 0 || tr.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const yo = mo, Oa = vo, fi = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? $n : Ge;
class Ia {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(t) {
    this._size = t;
  }
}
function Tr(e, t) {
  const r = e.length, n = r - t.length;
  return n >= 0 && e.slice(n, r) === t;
}
var pi, hi = {
  exports: {}
}, _a = (pi || (pi = 1, function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  function i(s, l, p) {
    this.fn = s, this.context = l, this.once = p || !1;
  }
  function o(s, l, p, d, g) {
    if (typeof p != "function") throw new TypeError("The listener must be a function");
    var u = new i(p, d || s, g), f = r ? r + l : l;
    return s._events[f] ? s._events[f].fn ? s._events[f] = [s._events[f], u] : s._events[f].push(u) : (s._events[f] = u, s._eventsCount++), s;
  }
  function a(s, l) {
    --s._eventsCount === 0 ? s._events = new n() : delete s._events[l];
  }
  function c() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1)), c.prototype.eventNames = function() {
    var s, l, p = [];
    if (this._eventsCount === 0) return p;
    for (l in s = this._events) t.call(s, l) && p.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(s)) : p;
  }, c.prototype.listeners = function(s) {
    var l = r ? r + s : s, p = this._events[l];
    if (!p) return [];
    if (p.fn) return [p.fn];
    for (var d = 0, g = p.length, u = new Array(g); d < g; d++) u[d] = p[d].fn;
    return u;
  }, c.prototype.listenerCount = function(s) {
    var l = r ? r + s : s, p = this._events[l];
    return p ? p.fn ? 1 : p.length : 0;
  }, c.prototype.emit = function(s, l, p, d, g, u) {
    var f = r ? r + s : s;
    if (!this._events[f]) return !1;
    var v, S, h = this._events[f], m = arguments.length;
    if (h.fn) {
      switch (h.once && this.removeListener(s, h.fn, void 0, !0), m) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, l), !0;
        case 3:
          return h.fn.call(h.context, l, p), !0;
        case 4:
          return h.fn.call(h.context, l, p, d), !0;
        case 5:
          return h.fn.call(h.context, l, p, d, g), !0;
        case 6:
          return h.fn.call(h.context, l, p, d, g, u), !0;
      }
      for (S = 1, v = new Array(m - 1); S < m; S++) v[S - 1] = arguments[S];
      h.fn.apply(h.context, v);
    } else {
      var y, E = h.length;
      for (S = 0; S < E; S++) switch (h[S].once && this.removeListener(s, h[S].fn, void 0, !0), m) {
        case 1:
          h[S].fn.call(h[S].context);
          break;
        case 2:
          h[S].fn.call(h[S].context, l);
          break;
        case 3:
          h[S].fn.call(h[S].context, l, p);
          break;
        case 4:
          h[S].fn.call(h[S].context, l, p, d);
          break;
        default:
          if (!v) for (y = 1, v = new Array(m - 1); y < m; y++) v[y - 1] = arguments[y];
          h[S].fn.apply(h[S].context, v);
      }
    }
    return !0;
  }, c.prototype.on = function(s, l, p) {
    return o(this, s, l, p, !1);
  }, c.prototype.once = function(s, l, p) {
    return o(this, s, l, p, !0);
  }, c.prototype.removeListener = function(s, l, p, d) {
    var g = r ? r + s : s;
    if (!this._events[g]) return this;
    if (!l) return a(this, g), this;
    var u = this._events[g];
    if (u.fn) u.fn !== l || d && !u.once || p && u.context !== p || a(this, g);
    else {
      for (var f = 0, v = [], S = u.length; f < S; f++) (u[f].fn !== l || d && !u[f].once || p && u[f].context !== p) && v.push(u[f]);
      v.length ? this._events[g] = v.length === 1 ? v[0] : v : a(this, g);
    }
    return this;
  }, c.prototype.removeAllListeners = function(s) {
    var l;
    return s ? (l = r ? r + s : s, this._events[l] && a(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, e.exports = c;
}(hi)), hi.exports), Ln = cr(_a);
function gi(e, t) {
  const r = e.indexOf(t);
  r > -1 && (e.splice(r, 1), e.unshift(t));
}
function en(e, t) {
  const r = e.indexOf(t);
  r > -1 && (e.splice(r, 1), e.push(t));
}
function Ne(e, t, r = 1) {
  const n = Math.max(0, Math.ceil((t - e) / r)), i = new Array(n);
  let o = -1;
  for (; ++o < n; ) i[o] = e + o * r;
  return i;
}
var Pa = "sash-module_sash__K-9lB", ka = "sash-module_disabled__Hm-wx", $a = "sash-module_mac__Jf6OJ", mi = "sash-module_vertical__pB-rs", La = "sash-module_minimum__-UKxp", Ra = "sash-module_maximum__TCWxD", vi = "sash-module_horizontal__kFbiw", tn = "sash-module_hover__80W6I", rn = "sash-module_active__bJspD";
let Be = function(e) {
  return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
}({}), ke = function(e) {
  return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
}({}), bo = yo ? 20 : 8;
const xo = new Ln();
class yi extends Ln {
  get state() {
    return this._state;
  }
  set state(t) {
    this._state !== t && (this.el.classList.toggle(ka, t === ke.Disabled), this.el.classList.toggle("sash-disabled", t === ke.Disabled), this.el.classList.toggle(La, t === ke.Minimum), this.el.classList.toggle("sash-minimum", t === ke.Minimum), this.el.classList.toggle(Ra, t === ke.Maximum), this.el.classList.toggle("sash-maximum", t === ke.Maximum), this._state = t, this.emit("enablementChange", t));
  }
  constructor(t, r, n) {
    var i;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = xa((o) => o.classList.add("sash-hover", tn), this.hoverDelay), this._state = ke.Enabled, this.onPointerStart = (o) => {
      const a = o.pageX, c = o.pageY, s = {
        startX: a,
        currentX: a,
        startY: c,
        currentY: c
      };
      this.el.classList.add("sash-active", rn), this.emit("start", s), this.el.setPointerCapture(o.pointerId);
      const l = (d) => {
        d.preventDefault();
        const g = {
          startX: a,
          currentX: d.pageX,
          startY: c,
          currentY: d.pageY
        };
        this.emit("change", g);
      }, p = (d) => {
        d.preventDefault(), this.el.classList.remove("sash-active", rn), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(d.pointerId), window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", p);
      };
      window.addEventListener("pointermove", l), window.addEventListener("pointerup", p);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(rn) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", tn)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", tn);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", Pa), this.el.dataset.testid = "sash", t.append(this.el), Oa && this.el.classList.add("sash-mac", $a), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof n.size == "number" ? (this.size = n.size, n.orientation === Be.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = bo, xo.on("onDidChangeGlobalSize", (o) => {
      this.size = o, this.layout();
    })), this.layoutProvider = r, this.orientation = (i = n.orientation) != null ? i : Be.Vertical, this.orientation === Be.Horizontal ? (this.el.classList.add("sash-horizontal", vi), this.el.classList.remove("sash-vertical", mi)) : (this.el.classList.remove("sash-horizontal", vi), this.el.classList.add("sash-vertical", mi)), this.layout();
  }
  layout() {
    if (this.orientation === Be.Vertical) {
      const t = this.layoutProvider;
      this.el.style.left = t.getVerticalSashLeft(this) - this.size / 2 + "px", t.getVerticalSashTop && (this.el.style.top = t.getVerticalSashTop(this) + "px"), t.getVerticalSashHeight && (this.el.style.height = t.getVerticalSashHeight(this) + "px");
    } else {
      const t = this.layoutProvider;
      this.el.style.top = t.getHorizontalSashTop(this) - this.size / 2 + "px", t.getHorizontalSashLeft && (this.el.style.left = t.getHorizontalSashLeft(this) + "px"), t.getHorizontalSashWidth && (this.el.style.width = t.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let kr;
var nn;
(nn = kr || (kr = {})).Distribute = {
  type: "distribute"
}, nn.Split = function(e) {
  return {
    type: "split",
    index: e
  };
}, nn.Invisible = function(e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
let Ve = function(e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class So {
  constructor(t, r, n) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = t, this.view = r, this.container.classList.add("split-view-view", go), this.container.dataset.testid = "split-view-view", typeof n == "number" ? (this._size = n, this._cachedVisibleSize = void 0, t.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = n.cachedVisibleSize);
  }
  set size(t) {
    this._size = t;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return this._cachedVisibleSize === void 0;
  }
  setVisible(t, r) {
    t !== this.visible && (t ? (this.size = qe(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof r == "number" ? r : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", t), this.view.setVisible && this.view.setVisible(t));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(t) {
    this.container.style.pointerEvents = t ? "" : "none";
  }
  layout(t) {
    this.layoutContainer(t), this.view.layout(this.size, t);
  }
}
class Aa extends So {
  layoutContainer(t) {
    this.container.style.left = `${t}px`, this.container.style.width = `${this.size}px`;
  }
}
class Da extends So {
  layoutContainer(t) {
    this.container.style.top = `${t}px`, this.container.style.height = `${this.size}px`;
  }
}
class ja extends Ln {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(t) {
    this._startSnappingEnabled !== t && (this._startSnappingEnabled = t, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(t) {
    this._endSnappingEnabled !== t && (this._endSnappingEnabled = t, this.updateSashEnablement());
  }
  constructor(t, r = {}, n, i, o) {
    var a, c;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = (s) => {
      this.emit("sashchange", s), this.saveProportions();
      for (const l of this.viewItems) l.enabled = !0;
    }, this.orientation = (a = r.orientation) != null ? a : Be.Vertical, this.proportionalLayout = (c = r.proportionalLayout) != null ? c : !0, this.getSashOrthogonalSize = r.getSashOrthogonalSize, n && (this.onDidChange = n), i && (this.onDidDragStart = i), o && (this.onDidDragEnd = o), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", Ea), t.prepend(this.sashContainer), r.descriptor) {
      this.size = r.descriptor.size;
      for (const [s, l] of r.descriptor.views.entries()) {
        const p = l.size, d = l.container, g = l.view;
        this.addView(d, g, p, s, !0);
      }
      this.contentSize = this.viewItems.reduce((s, l) => s + l.size, 0), this.saveProportions();
    }
  }
  addView(t, r, n, i = this.viewItems.length, o) {
    let a;
    a = typeof n == "number" ? n : n.type === "split" ? this.getViewSize(n.index) / 2 : n.type === "invisible" ? {
      cachedVisibleSize: n.cachedVisibleSize
    } : r.minimumSize;
    const c = this.orientation === Be.Vertical ? new Da(t, r, a) : new Aa(t, r, a);
    if (this.viewItems.splice(i, 0, c), this.viewItems.length > 1) {
      const s = this.orientation === Be.Vertical ? new yi(this.sashContainer, {
        getHorizontalSashTop: (d) => this.getSashPosition(d),
        getHorizontalSashWidth: this.getSashOrthogonalSize
      }, {
        orientation: Be.Horizontal
      }) : new yi(this.sashContainer, {
        getVerticalSashLeft: (d) => this.getSashPosition(d),
        getVerticalSashHeight: this.getSashOrthogonalSize
      }, {
        orientation: Be.Vertical
      }), l = this.orientation === Be.Vertical ? (d) => ({
        sash: s,
        start: d.startY,
        current: d.currentY
      }) : (d) => ({
        sash: s,
        start: d.startX,
        current: d.currentX
      });
      s.on("start", (d) => {
        var g;
        this.emit("sashDragStart"), this.onSashStart(l(d));
        const u = this.viewItems.map((f) => f.size);
        (g = this.onDidDragStart) == null || g.call(this, u);
      }), s.on("change", (d) => this.onSashChange(l(d))), s.on("end", () => {
        var d;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((u) => u.sash === s));
        const g = this.viewItems.map((u) => u.size);
        (d = this.onDidDragEnd) == null || d.call(this, g);
      }), s.on("reset", () => {
        const d = this.sashItems.findIndex((S) => S.sash === s), g = Ne(d, -1, -1), u = Ne(d + 1, this.viewItems.length), f = this.findFirstSnapIndex(g), v = this.findFirstSnapIndex(u);
        (typeof f != "number" || this.viewItems[f].visible) && (typeof v != "number" || this.viewItems[v].visible) && this.emit("sashreset", d);
      });
      const p = {
        sash: s
      };
      this.sashItems.splice(i - 1, 0, p);
    }
    o || this.relayout(), o || typeof n == "number" || n.type !== "distribute" || this.distributeViewSizes();
  }
  removeView(t, r) {
    if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
    const n = this.viewItems.splice(t, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const i = Math.max(t - 1, 0);
      this.sashItems.splice(i, 1)[0].sash.dispose();
    }
    return this.relayout(), r && r.type === "distribute" && this.distributeViewSizes(), n;
  }
  moveView(t, r, n) {
    const i = this.getViewCachedVisibleSize(r), o = i === void 0 ? this.getViewSize(r) : kr.Invisible(i), a = this.removeView(r);
    this.addView(t, a, o, n);
  }
  getViewCachedVisibleSize(t) {
    if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[t].cachedVisibleSize;
  }
  layout(t = this.size) {
    const r = Math.max(this.size, this.contentSize);
    if (this.size = t, this.proportions) for (let n = 0; n < this.viewItems.length; n++) {
      const i = this.viewItems[n];
      i.size = qe(Math.round(this.proportions[n] * t), i.minimumSize, i.maximumSize);
    }
    else {
      const n = Ne(0, this.viewItems.length), i = n.filter((a) => this.viewItems[a].priority === Ve.Low), o = n.filter((a) => this.viewItems[a].priority === Ve.High);
      this.resize(this.viewItems.length - 1, t - r, void 0, i, o);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(t, r) {
    if (t < 0 || t >= this.viewItems.length) return;
    const n = Ne(0, this.viewItems.length).filter((c) => c !== t), i = [...n.filter((c) => this.viewItems[c].priority === Ve.Low), t], o = n.filter((c) => this.viewItems[c].priority === Ve.High), a = this.viewItems[t];
    r = Math.round(r), r = qe(r, a.minimumSize, Math.min(a.maximumSize, this.size)), a.size = r, this.relayout(i, o);
  }
  resizeViews(t) {
    for (let r = 0; r < t.length; r++) {
      const n = this.viewItems[r];
      let i = t[r];
      i = Math.round(i), i = qe(i, n.minimumSize, Math.min(n.maximumSize, this.size)), n.size = i;
    }
    this.contentSize = this.viewItems.reduce((r, n) => r + n.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(t) {
    return t < 0 || t >= this.viewItems.length ? -1 : this.viewItems[t].size;
  }
  isViewVisible(t) {
    if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[t].visible;
  }
  setViewVisible(t, r) {
    if (t < 0 || t >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[t].setVisible(r), this.distributeEmptySpace(t), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const t = [];
    let r = 0;
    for (const c of this.viewItems) c.maximumSize - c.minimumSize > 0 && (t.push(c), r += c.size);
    const n = Math.floor(r / t.length);
    for (const c of t) c.size = qe(n, c.minimumSize, c.maximumSize);
    const i = Ne(0, this.viewItems.length), o = i.filter((c) => this.viewItems[c].priority === Ve.Low), a = i.filter((c) => this.viewItems[c].priority === Ve.High);
    this.relayout(o, a);
  }
  dispose() {
    this.sashItems.forEach((t) => t.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(t, r) {
    const n = this.viewItems.reduce((i, o) => i + o.size, 0);
    this.resize(this.viewItems.length - 1, this.size - n, void 0, t, r), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: t,
    start: r
  }) {
    const n = this.sashItems.findIndex((i) => i.sash === t);
    ((i) => {
      const o = this.viewItems.map((m) => m.size);
      let a, c, s = Number.NEGATIVE_INFINITY, l = Number.POSITIVE_INFINITY;
      const p = Ne(n, -1, -1), d = Ne(n + 1, this.viewItems.length), g = p.reduce((m, y) => m + (this.viewItems[y].minimumSize - o[y]), 0), u = p.reduce((m, y) => m + (this.viewItems[y].viewMaximumSize - o[y]), 0), f = d.length === 0 ? Number.POSITIVE_INFINITY : d.reduce((m, y) => m + (o[y] - this.viewItems[y].minimumSize), 0), v = d.length === 0 ? Number.NEGATIVE_INFINITY : d.reduce((m, y) => m + (o[y] - this.viewItems[y].viewMaximumSize), 0);
      s = Math.max(g, v), l = Math.min(f, u);
      const S = this.findFirstSnapIndex(p), h = this.findFirstSnapIndex(d);
      if (typeof S == "number") {
        const m = this.viewItems[S], y = Math.floor(m.viewMinimumSize / 2);
        a = {
          index: S,
          limitDelta: m.visible ? s - y : s + y,
          size: m.size
        };
      }
      if (typeof h == "number") {
        const m = this.viewItems[h], y = Math.floor(m.viewMinimumSize / 2);
        c = {
          index: h,
          limitDelta: m.visible ? l + y : l - y,
          size: m.size
        };
      }
      this.sashDragState = {
        start: i,
        current: i,
        index: n,
        sizes: o,
        minDelta: s,
        maxDelta: l,
        snapBefore: a,
        snapAfter: c
      };
    })(r);
  }
  onSashChange({
    current: t
  }) {
    const {
      index: r,
      start: n,
      sizes: i,
      minDelta: o,
      maxDelta: a,
      snapBefore: c,
      snapAfter: s
    } = this.sashDragState;
    this.sashDragState.current = t;
    const l = t - n;
    this.resize(r, l, i, void 0, void 0, o, a, c, s), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(t) {
    let r = 0;
    for (let n = 0; n < this.sashItems.length; n++) if (r += this.viewItems[n].size, this.sashItems[n].sash === t) return r;
    return 0;
  }
  resize(t, r, n = this.viewItems.map((p) => p.size), i, o, a = Number.NEGATIVE_INFINITY, c = Number.POSITIVE_INFINITY, s, l) {
    if (t < 0 || t >= this.viewItems.length) return 0;
    const p = Ne(t, -1, -1), d = Ne(t + 1, this.viewItems.length);
    if (o) for (const z of o) gi(p, z), gi(d, z);
    if (i) for (const z of i) en(p, z), en(d, z);
    const g = p.map((z) => this.viewItems[z]), u = p.map((z) => n[z]), f = d.map((z) => this.viewItems[z]), v = d.map((z) => n[z]), S = p.reduce((z, w) => z + (this.viewItems[w].minimumSize - n[w]), 0), h = p.reduce((z, w) => z + (this.viewItems[w].maximumSize - n[w]), 0), m = d.length === 0 ? Number.POSITIVE_INFINITY : d.reduce((z, w) => z + (n[w] - this.viewItems[w].minimumSize), 0), y = d.length === 0 ? Number.NEGATIVE_INFINITY : d.reduce((z, w) => z + (n[w] - this.viewItems[w].maximumSize), 0), E = Math.max(S, y, a), x = Math.min(m, h, c);
    let W = !1;
    if (s) {
      const z = this.viewItems[s.index], w = r >= s.limitDelta;
      W = w !== z.visible, z.setVisible(w, s.size);
    }
    if (!W && l) {
      const z = this.viewItems[l.index], w = r < l.limitDelta;
      W = w !== z.visible, z.setVisible(w, l.size);
    }
    if (W) return this.resize(t, r, n, i, o, a, c);
    for (let z = 0, w = r = qe(r, E, x); z < g.length; z++) {
      const I = g[z], C = qe(u[z] + w, I.minimumSize, I.maximumSize);
      w -= C - u[z], I.size = C;
    }
    for (let z = 0, w = r; z < f.length; z++) {
      const I = f[z], C = qe(v[z] - w, I.minimumSize, I.maximumSize);
      w += C - v[z], I.size = C;
    }
    return r;
  }
  distributeEmptySpace(t) {
    const r = this.viewItems.reduce((l, p) => l + p.size, 0);
    let n = this.size - r;
    const i = Ne(0, this.viewItems.length), o = [], a = i.filter((l) => this.viewItems[l].priority === Ve.Low), c = i.filter((l) => this.viewItems[l].priority === Ve.Normal), s = i.filter((l) => this.viewItems[l].priority === Ve.High);
    o.push(...s, ...c, ...a), typeof t == "number" && en(o, t);
    for (let l = 0; n !== 0 && l < o.length; l++) {
      const p = this.viewItems[o[l]], d = qe(p.size + n, p.minimumSize, p.maximumSize);
      n -= d - p.size, p.size = d;
    }
  }
  layoutViews() {
    var t;
    this.contentSize = this.viewItems.reduce((n, i) => n + i.size, 0);
    let r = 0;
    for (const n of this.viewItems) n.layout(r), r += n.size;
    (t = this.onDidChange) != null && t.call(this, this.viewItems.map((n) => n.size)), this.sashItems.forEach((n) => n.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map((t) => t.size / this.contentSize));
  }
  updateSashEnablement() {
    let t = !1;
    const r = this.viewItems.map((s) => t = s.size - s.minimumSize > 0 || t);
    t = !1;
    const n = this.viewItems.map((s) => t = s.maximumSize - s.size > 0 || t), i = [...this.viewItems].reverse();
    t = !1;
    const o = i.map((s) => t = s.size - s.minimumSize > 0 || t).reverse();
    t = !1;
    const a = i.map((s) => t = s.maximumSize - s.size > 0 || t).reverse();
    let c = 0;
    for (let s = 0; s < this.sashItems.length; s++) {
      const {
        sash: l
      } = this.sashItems[s];
      c += this.viewItems[s].size;
      const p = !(r[s] && a[s + 1]), d = !(n[s] && o[s + 1]);
      if (p && d) {
        const g = Ne(s, -1, -1), u = Ne(s + 1, this.viewItems.length), f = this.findFirstSnapIndex(g), v = this.findFirstSnapIndex(u), S = typeof f == "number" && !this.viewItems[f].visible, h = typeof v == "number" && !this.viewItems[v].visible;
        S && o[s] && (c > 0 || this.startSnappingEnabled) ? l.state = ke.Minimum : h && r[s] && (c < this.contentSize || this.endSnappingEnabled) ? l.state = ke.Maximum : l.state = ke.Disabled;
      } else l.state = p && !d ? ke.Minimum : !p && d ? ke.Maximum : ke.Enabled;
    }
  }
  findFirstSnapIndex(t) {
    for (const r of t) {
      const n = this.viewItems[r];
      if (n.visible && n.snap) return r;
    }
    for (const r of t) {
      const n = this.viewItems[r];
      if (n.visible && n.maximumSize - n.minimumSize > 0) return;
      if (!n.visible && n.snap) return r;
    }
  }
}
class Ct {
  constructor(t) {
    this.size = void 0, this.size = t;
  }
  getPreferredSize() {
    return this.size;
  }
}
class bi {
  constructor(t, r) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = t, this.layoutService = r;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Cr {
  getPreferredSize() {
  }
}
class xi {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(t) {
    if (typeof t == "number") this.layoutStrategy = new Ct(t);
    else if (typeof t == "string") {
      const r = t.trim();
      if (Tr(r, "%")) {
        const n = Number(r.slice(0, -1)) / 100;
        this.layoutStrategy = new bi(n, this.layoutService);
      } else if (Tr(r, "px")) {
        const n = Number(r.slice(0, -2)) / 100;
        this.layoutStrategy = new Ct(n);
      } else if (typeof Number.parseFloat(r) == "number") {
        const n = Number.parseFloat(r);
        this.layoutStrategy = new Ct(n);
      } else this.layoutStrategy = new Cr();
    } else this.layoutStrategy = new Cr();
  }
  constructor(t, r) {
    var n;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = t, this.element = r.element, this.minimumSize = typeof r.minimumSize == "number" ? r.minimumSize : 30, this.maximumSize = typeof r.maximumSize == "number" ? r.maximumSize : Number.POSITIVE_INFINITY, typeof r.preferredSize == "number") this.layoutStrategy = new Ct(r.preferredSize);
    else if (typeof r.preferredSize == "string") {
      const i = r.preferredSize.trim();
      if (Tr(i, "%")) {
        const o = Number(i.slice(0, -1)) / 100;
        this.layoutStrategy = new bi(o, this.layoutService);
      } else if (Tr(i, "px")) {
        const o = Number(i.slice(0, -2));
        this.layoutStrategy = new Ct(o);
      } else if (typeof Number.parseFloat(i) == "number") {
        const o = Number.parseFloat(i);
        this.layoutStrategy = new Ct(o);
      } else this.layoutStrategy = new Cr();
    } else this.layoutStrategy = new Cr();
    this.priority = (n = r.priority) != null ? n : Ve.Normal, this.snap = typeof r.snap == "boolean" && r.snap;
  }
  layout(t) {
  }
}
function Si(e) {
  return e.minSize !== void 0 || e.maxSize !== void 0 || e.preferredSize !== void 0 || e.priority !== void 0 || e.visible !== void 0;
}
const Rn = Gt(({
  className: e,
  children: t
}, r) => le.createElement("div", {
  ref: r,
  className: zn("split-view-view", go, e)
}, t));
Rn.displayName = "Allotment.Pane";
const wo = Gt(({
  children: e,
  className: t,
  id: r,
  maxSize: n = 1 / 0,
  minSize: i = 30,
  proportionalLayout: o = !0,
  separator: a = !0,
  sizes: c,
  defaultSizes: s = c,
  snap: l = !1,
  vertical: p = !1,
  onChange: d,
  onReset: g,
  onVisibleChange: u,
  onDragStart: f,
  onDragEnd: v
}, S) => {
  const h = de(null), m = de([]), y = de(/* @__PURE__ */ new Map()), E = de(null), x = de(/* @__PURE__ */ new Map()), W = de(new Ia()), z = de([]), [w, I] = Me(!1);
  process.env.NODE_ENV !== "production" && c && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const C = lo(() => le.Children.toArray(e).filter(le.isValidElement), [e]), _ = Pr((k) => {
    var A, B;
    const G = (A = z.current) == null ? void 0 : A[k];
    return typeof (G == null ? void 0 : G.preferredSize) == "number" && ((B = E.current) != null && B.resizeView(k, Math.round(G.preferredSize)), !0);
  }, []);
  return Js(S, () => ({
    reset: () => {
      if (g) g();
      else {
        var k;
        (k = E.current) == null || k.distributeViewSizes();
        for (let A = 0; A < z.current.length; A++) _(A);
      }
    },
    resize: (k) => {
      var A;
      (A = E.current) == null || A.resizeViews(k);
    }
  })), fi(() => {
    let k = !0;
    s && x.current.size !== s.length && (k = !1, console.warn(`Expected ${s.length} children based on defaultSizes but found ${x.current.size}`)), k && s && (m.current = C.map((G) => G.key));
    const A = Wt({
      orientation: p ? Be.Vertical : Be.Horizontal,
      proportionalLayout: o
    }, k && s && {
      descriptor: {
        size: s.reduce((G, X) => G + X, 0),
        views: s.map((G, X) => {
          var K, N, Z, M;
          const $ = y.current.get(m.current[X]), q = new xi(W.current, Wt({
            element: document.createElement("div"),
            minimumSize: (K = $ == null ? void 0 : $.minSize) != null ? K : i,
            maximumSize: (N = $ == null ? void 0 : $.maxSize) != null ? N : n,
            priority: (Z = $ == null ? void 0 : $.priority) != null ? Z : Ve.Normal
          }, ($ == null ? void 0 : $.preferredSize) && {
            preferredSize: $ == null ? void 0 : $.preferredSize
          }, {
            snap: (M = $ == null ? void 0 : $.snap) != null ? M : l
          }));
          return z.current.push(q), {
            container: [...x.current.values()][X],
            size: G,
            view: q
          };
        })
      }
    });
    E.current = new ja(h.current, A, d, f, v), E.current.on("sashDragStart", () => {
      var G;
      (G = h.current) == null || G.classList.add("split-view-sash-dragging");
    }), E.current.on("sashDragEnd", () => {
      var G;
      (G = h.current) == null || G.classList.remove("split-view-sash-dragging");
    }), E.current.on("sashchange", (G) => {
      if (u && E.current) {
        const X = C.map((K) => K.key);
        for (let K = 0; K < X.length; K++) {
          const N = y.current.get(X[K]);
          (N == null ? void 0 : N.visible) !== void 0 && N.visible !== E.current.isViewVisible(K) && u(K, E.current.isViewVisible(K));
        }
      }
    }), E.current.on("sashreset", (G) => {
      if (g) g();
      else {
        var X;
        if (_(G) || _(G + 1)) return;
        (X = E.current) == null || X.distributeViewSizes();
      }
    });
    const B = E.current;
    return () => {
      B.dispose();
    };
  }, []), fi(() => {
    if (w) {
      const U = C.map((R) => R.key), T = [...m.current], P = U.filter((R) => !m.current.includes(R)), O = U.filter((R) => m.current.includes(R)), F = m.current.map((R) => !U.includes(R));
      for (let R = F.length - 1; R >= 0; R--) {
        var k;
        F[R] && ((k = E.current) != null && k.removeView(R), T.splice(R, 1), z.current.splice(R, 1));
      }
      for (const R of P) {
        var A, B, G, X, K;
        const V = y.current.get(R), Y = new xi(W.current, Wt({
          element: document.createElement("div"),
          minimumSize: (A = V == null ? void 0 : V.minSize) != null ? A : i,
          maximumSize: (B = V == null ? void 0 : V.maxSize) != null ? B : n,
          priority: (G = V == null ? void 0 : V.priority) != null ? G : Ve.Normal
        }, (V == null ? void 0 : V.preferredSize) && {
          preferredSize: V == null ? void 0 : V.preferredSize
        }, {
          snap: (X = V == null ? void 0 : V.snap) != null ? X : l
        }));
        (K = E.current) != null && K.addView(x.current.get(R), Y, kr.Distribute, U.findIndex((J) => J === R)), T.splice(U.findIndex((J) => J === R), 0, R), z.current.splice(U.findIndex((J) => J === R), 0, Y);
      }
      for (; !ba(U, T); ) for (const [R, V] of U.entries()) {
        const Y = T.findIndex((J) => J === V);
        if (Y !== R) {
          var N;
          (N = E.current) == null || N.moveView(x.current.get(V), Y, R);
          const J = T[Y];
          T.splice(Y, 1), T.splice(R, 0, J);
          break;
        }
      }
      for (const R of P) {
        var Z;
        const V = U.findIndex((J) => J === R), Y = z.current[V].preferredSize;
        Y !== void 0 && ((Z = E.current) == null || Z.resizeView(V, Y));
      }
      for (const R of [...P, ...O]) {
        var M, $;
        const V = y.current.get(R), Y = U.findIndex((J) => J === R);
        V && Si(V) && V.visible !== void 0 && ((M = E.current) == null ? void 0 : M.isViewVisible(Y)) !== V.visible && (($ = E.current) == null || $.setViewVisible(Y, V.visible));
      }
      for (const R of O) {
        const V = y.current.get(R), Y = U.findIndex((J) => J === R);
        if (V && Si(V)) {
          var q;
          V.preferredSize !== void 0 && z.current[Y].preferredSize !== V.preferredSize && (z.current[Y].preferredSize = V.preferredSize);
          let J = !1;
          V.minSize !== void 0 && z.current[Y].minimumSize !== V.minSize && (z.current[Y].minimumSize = V.minSize, J = !0), V.maxSize !== void 0 && z.current[Y].maximumSize !== V.maxSize && (z.current[Y].maximumSize = V.maxSize, J = !0), J && ((q = E.current) == null || q.layout());
        }
      }
      (P.length > 0 || F.length > 0) && (m.current = U);
    }
  }, [C, w, n, i, l]), Ge(() => {
    E.current && (E.current.onDidChange = d);
  }, [d]), Ge(() => {
    E.current && (E.current.onDidDragStart = f);
  }, [f]), Ge(() => {
    E.current && (E.current.onDidDragEnd = v);
  }, [v]), Sa({
    ref: h,
    onResize: ({
      width: k,
      height: A
    }) => {
      var B;
      k && A && ((B = E.current) != null && B.layout(p ? A : k), W.current.setSize(p ? A : k), I(!0));
    }
  }), Ge(() => {
    yo && Wa(20);
  }, []), le.createElement("div", {
    ref: h,
    className: zn("split-view", p ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": a
    }, wa, p ? Ca : za, {
      [Ma]: a
    }, t),
    id: r
  }, le.createElement("div", {
    className: zn("split-view-container", Ta)
  }, le.Children.toArray(e).map((k) => {
    if (!le.isValidElement(k)) return null;
    const A = k.key;
    return k.type.displayName === "Allotment.Pane" ? (y.current.set(A, k.props), le.cloneElement(k, {
      key: A,
      ref: (B) => {
        const G = k.ref;
        G && (G.current = B), B ? x.current.set(A, B) : x.current.delete(A);
      }
    })) : le.createElement(Rn, {
      key: A,
      ref: (B) => {
        B ? x.current.set(A, B) : x.current.delete(A);
      }
    }, k);
  })));
});
function Wa(e) {
  const t = qe(e, 4, 20), r = qe(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", t + "px"), document.documentElement.style.setProperty("--sash-hover-size", r + "px"), function(n) {
    bo = n, xo.emit("onDidChangeGlobalSize", n);
  }(t);
}
wo.displayName = "Allotment";
var on = Object.assign(wo, {
  Pane: Rn
});
let zr;
const Na = new Uint8Array(16);
function Va() {
  if (!zr && (zr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !zr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return zr(Na);
}
const Ee = [];
for (let e = 0; e < 256; ++e)
  Ee.push((e + 256).toString(16).slice(1));
function Ba(e, t = 0) {
  return Ee[e[t + 0]] + Ee[e[t + 1]] + Ee[e[t + 2]] + Ee[e[t + 3]] + "-" + Ee[e[t + 4]] + Ee[e[t + 5]] + "-" + Ee[e[t + 6]] + Ee[e[t + 7]] + "-" + Ee[e[t + 8]] + Ee[e[t + 9]] + "-" + Ee[e[t + 10]] + Ee[e[t + 11]] + Ee[e[t + 12]] + Ee[e[t + 13]] + Ee[e[t + 14]] + Ee[e[t + 15]];
}
const Fa = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wi = {
  randomUUID: Fa
};
function Ga(e, t, r) {
  if (wi.randomUUID && !e)
    return wi.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Va)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Ba(n);
}
const Ya = 500, Ha = 320, Ei = {
  height: "100%",
  overflow: "visible"
}, xp = (e) => {
  const {
    isView: t = !1,
    leftPane: r,
    rightPane: n,
    isSplitMode: i,
    leftInitSize: o = 360,
    leftMinSize: a = Ha,
    leftMaxSize: c = Ya,
    onDragEnd: s
  } = e, l = lr(), p = de(null), d = de(Ga());
  let g = !1, u = !1;
  return i || (t ? g = !0 : u = !0), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsx("style", { children: `
          :root {
            --focus-border: ${l.palette.primary.main};
            --separator-border: ${l.palette.border.light};
          }
        ` }),
    /* @__PURE__ */ D.jsx(
      Ie,
      {
        sx: {
          width: "100%",
          height: "100%",
          [`& #allotment-${d.current.toString()} > .sash-container`]: {
            display: i ? "block" : "none"
          }
        },
        children: /* @__PURE__ */ D.jsxs(
          on,
          {
            ref: p,
            onDragEnd: s,
            id: `allotment-${d.current}`,
            separator: i,
            children: [
              /* @__PURE__ */ D.jsx(
                on.Pane,
                {
                  minSize: i ? a : 0,
                  maxSize: i ? c : 1 / 0,
                  visible: !g,
                  preferredSize: o,
                  children: !g && /* @__PURE__ */ D.jsx(Ie, { sx: { ...Ei }, children: r })
                }
              ),
              /* @__PURE__ */ D.jsx(on.Pane, { minSize: 0, visible: !u, children: !u && /* @__PURE__ */ D.jsx(Ie, { sx: { ...Ei }, children: n }) })
            ]
          }
        )
      }
    )
  ] });
};
function Ti(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function An(e = {}, t = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : Ti(t[n]) && Ti(e[n]) && Object.keys(t[n]).length > 0 && An(e[n], t[n]);
  });
}
const Eo = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function dt() {
  const e = typeof document < "u" ? document : {};
  return An(e, Eo), e;
}
const Xa = {
  document: Eo,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function Ce() {
  const e = typeof window < "u" ? window : {};
  return An(e, Xa), e;
}
function Ua(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function qa(e) {
  const t = e;
  Object.keys(t).forEach((r) => {
    try {
      t[r] = null;
    } catch {
    }
    try {
      delete t[r];
    } catch {
    }
  });
}
function To(e, t = 0) {
  return setTimeout(e, t);
}
function $r() {
  return Date.now();
}
function Ka(e) {
  const t = Ce();
  let r;
  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function Mn(e, t = "x") {
  const r = Ce();
  let n, i, o;
  const a = Ka(e);
  return r.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((c) => c.replace(",", ".")).join(", ")), o = new r.WebKitCSSMatrix(i === "none" ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), t === "x" && (r.WebKitCSSMatrix ? i = o.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), t === "y" && (r.WebKitCSSMatrix ? i = o.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function Mr(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function Ja(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function $e(...e) {
  const t = Object(e[0]);
  for (let r = 1; r < e.length; r += 1) {
    const n = e[r];
    if (n != null && !Ja(n)) {
      const i = Object.keys(Object(n)).filter((o) => o !== "__proto__" && o !== "constructor" && o !== "prototype");
      for (let o = 0, a = i.length; o < a; o += 1) {
        const c = i[o], s = Object.getOwnPropertyDescriptor(n, c);
        s !== void 0 && s.enumerable && (Mr(t[c]) && Mr(n[c]) ? n[c].__swiper__ ? t[c] = n[c] : $e(t[c], n[c]) : !Mr(t[c]) && Mr(n[c]) ? (t[c] = {}, n[c].__swiper__ ? t[c] = n[c] : $e(t[c], n[c])) : t[c] = n[c]);
      }
    }
  }
  return t;
}
function zt(e, t, r) {
  e.style.setProperty(t, r);
}
function Co({
  swiper: e,
  targetPosition: t,
  side: r
}) {
  const n = Ce(), i = -e.translate;
  let o = null, a;
  const c = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const s = t > i ? "next" : "prev", l = (d, g) => s === "next" && d >= g || s === "prev" && d <= g, p = () => {
    a = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = a);
    const d = Math.max(Math.min((a - o) / c, 1), 0), g = 0.5 - Math.cos(d * Math.PI) / 2;
    let u = i + g * (t - i);
    if (l(u, t) && (u = t), e.wrapperEl.scrollTo({
      [r]: u
    }), l(u, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: u
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(p);
  };
  p();
}
function Ye(e, t = "") {
  const r = Ce(), n = [...e.children];
  return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((i) => i.matches(t)) : n;
}
function Za(e, t) {
  const r = [t];
  for (; r.length > 0; ) {
    const n = r.shift();
    if (e === n)
      return !0;
    r.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : []);
  }
}
function Qa(e, t) {
  const r = Ce();
  let n = t.contains(e);
  return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = Za(e, t))), n;
}
function Lr(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function Rr(e, t = []) {
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(t) ? t : Ua(t)), r;
}
function Ci(e) {
  const t = Ce(), r = dt(), n = e.getBoundingClientRect(), i = r.body, o = e.clientTop || i.clientTop || 0, a = e.clientLeft || i.clientLeft || 0, c = e === t ? t.scrollY : e.scrollTop, s = e === t ? t.scrollX : e.scrollLeft;
  return {
    top: n.top + c - o,
    left: n.left + s - a
  };
}
function el(e, t) {
  const r = [];
  for (; e.previousElementSibling; ) {
    const n = e.previousElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function tl(e, t) {
  const r = [];
  for (; e.nextElementSibling; ) {
    const n = e.nextElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function ct(e, t) {
  return Ce().getComputedStyle(e, null).getPropertyValue(t);
}
function Ar(e) {
  let t = e, r;
  if (t) {
    for (r = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (r += 1);
    return r;
  }
}
function ir(e, t) {
  const r = [];
  let n = e.parentElement;
  for (; n; )
    t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
  return r;
}
function On(e, t, r) {
  const n = Ce();
  return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
}
function tt(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function Dr(e, t = "") {
  typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (r) => r
  }).createHTML(t) : e.innerHTML = t;
}
function rl(e, t, r, n) {
  return e.params.createElements && Object.keys(n).forEach((i) => {
    if (!r[i] && r.auto === !0) {
      let o = Ye(e.el, `.${n[i]}`)[0];
      o || (o = Rr("div", n[i]), o.className = n[i], e.el.append(o)), r[i] = o, t[i] = o;
    }
  }), r;
}
function rr(e = "") {
  return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function nl({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let o, a = 0;
  function c() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function s(h, m) {
    const {
      bulletActiveClass: y
    } = e.params.pagination;
    h && (h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`], h && (h.classList.add(`${y}-${m}`), h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`], h && h.classList.add(`${y}-${m}-${m}`)));
  }
  function l(h, m, y) {
    if (h = h % y, m = m % y, m === h + 1)
      return "next";
    if (m === h - 1)
      return "previous";
  }
  function p(h) {
    const m = h.target.closest(rr(e.params.pagination.bulletClass));
    if (!m)
      return;
    h.preventDefault();
    const y = Ar(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === y) return;
      const E = l(e.realIndex, y, e.slides.length);
      E === "next" ? e.slideNext() : E === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function d() {
    const h = e.rtl, m = e.params.pagination;
    if (c()) return;
    let y = e.pagination.el;
    y = tt(y);
    let E, x;
    const W = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, z = e.params.loop ? Math.ceil(W / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (x = e.previousRealIndex || 0, E = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (E = e.snapIndex, x = e.previousSnapIndex) : (x = e.previousIndex || 0, E = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const w = e.pagination.bullets;
      let I, C, _;
      if (m.dynamicBullets && (o = On(w[0], e.isHorizontal() ? "width" : "height"), y.forEach((k) => {
        k.style[e.isHorizontal() ? "width" : "height"] = `${o * (m.dynamicMainBullets + 4)}px`;
      }), m.dynamicMainBullets > 1 && x !== void 0 && (a += E - (x || 0), a > m.dynamicMainBullets - 1 ? a = m.dynamicMainBullets - 1 : a < 0 && (a = 0)), I = Math.max(E - a, 0), C = I + (Math.min(w.length, m.dynamicMainBullets) - 1), _ = (C + I) / 2), w.forEach((k) => {
        const A = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((B) => `${m.bulletActiveClass}${B}`)].map((B) => typeof B == "string" && B.includes(" ") ? B.split(" ") : B).flat();
        k.classList.remove(...A);
      }), y.length > 1)
        w.forEach((k) => {
          const A = Ar(k);
          A === E ? k.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && k.setAttribute("part", "bullet"), m.dynamicBullets && (A >= I && A <= C && k.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), A === I && s(k, "prev"), A === C && s(k, "next"));
        });
      else {
        const k = w[E];
        if (k && k.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && w.forEach((A, B) => {
          A.setAttribute("part", B === E ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const A = w[I], B = w[C];
          for (let G = I; G <= C; G += 1)
            w[G] && w[G].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          s(A, "prev"), s(B, "next");
        }
      }
      if (m.dynamicBullets) {
        const k = Math.min(w.length, m.dynamicMainBullets + 4), A = (o * k - o) / 2 - _ * o, B = h ? "right" : "left";
        w.forEach((G) => {
          G.style[e.isHorizontal() ? B : "top"] = `${A}px`;
        });
      }
    }
    y.forEach((w, I) => {
      if (m.type === "fraction" && (w.querySelectorAll(rr(m.currentClass)).forEach((C) => {
        C.textContent = m.formatFractionCurrent(E + 1);
      }), w.querySelectorAll(rr(m.totalClass)).forEach((C) => {
        C.textContent = m.formatFractionTotal(z);
      })), m.type === "progressbar") {
        let C;
        m.progressbarOpposite ? C = e.isHorizontal() ? "vertical" : "horizontal" : C = e.isHorizontal() ? "horizontal" : "vertical";
        const _ = (E + 1) / z;
        let k = 1, A = 1;
        C === "horizontal" ? k = _ : A = _, w.querySelectorAll(rr(m.progressbarFillClass)).forEach((B) => {
          B.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${A})`, B.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (Dr(w, m.renderCustom(e, E + 1, z)), I === 0 && n("paginationRender", w)) : (I === 0 && n("paginationRender", w), n("paginationUpdate", w)), e.params.watchOverflow && e.enabled && w.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function g() {
    const h = e.params.pagination;
    if (c()) return;
    const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let y = e.pagination.el;
    y = tt(y);
    let E = "";
    if (h.type === "bullets") {
      let x = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && x > m && (x = m);
      for (let W = 0; W < x; W += 1)
        h.renderBullet ? E += h.renderBullet.call(e, W, h.bulletClass) : E += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
    }
    h.type === "fraction" && (h.renderFraction ? E = h.renderFraction.call(e, h.currentClass, h.totalClass) : E = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? E = h.renderProgressbar.call(e, h.progressbarFillClass) : E = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], y.forEach((x) => {
      h.type !== "custom" && Dr(x, E || ""), h.type === "bullets" && e.pagination.bullets.push(...x.querySelectorAll(rr(h.bulletClass)));
    }), h.type !== "custom" && n("paginationRender", y[0]);
  }
  function u() {
    e.params.pagination = rl(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const h = e.params.pagination;
    if (!h.el) return;
    let m;
    typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)), !m && typeof h.el == "string" && (m = [...document.querySelectorAll(h.el)]), m || (m = h.el), !(!m || m.length === 0) && (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(h.el)], m.length > 1 && (m = m.find((y) => ir(y, ".swiper")[0] === e.el))), Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), m = tt(m), m.forEach((y) => {
      h.type === "bullets" && h.clickable && y.classList.add(...(h.clickableClass || "").split(" ")), y.classList.add(h.modifierClass + h.type), y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (y.classList.add(`${h.modifierClass}${h.type}-dynamic`), a = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && y.classList.add(h.progressbarOppositeClass), h.clickable && y.addEventListener("click", p), e.enabled || y.classList.add(h.lockClass);
    }));
  }
  function f() {
    const h = e.params.pagination;
    if (c()) return;
    let m = e.pagination.el;
    m && (m = tt(m), m.forEach((y) => {
      y.classList.remove(h.hiddenClass), y.classList.remove(h.modifierClass + h.type), y.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (y.classList.remove(...(h.clickableClass || "").split(" ")), y.removeEventListener("click", p));
    })), e.pagination.bullets && e.pagination.bullets.forEach((y) => y.classList.remove(...h.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const h = e.params.pagination;
    let {
      el: m
    } = e.pagination;
    m = tt(m), m.forEach((y) => {
      y.classList.remove(h.horizontalClass, h.verticalClass), y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? S() : (u(), g(), d());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && d();
  }), r("snapIndexChange", () => {
    d();
  }), r("snapGridLengthChange", () => {
    g(), d();
  }), r("destroy", () => {
    f();
  }), r("enable disable", () => {
    let {
      el: h
    } = e.pagination;
    h && (h = tt(h), h.forEach((m) => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    d();
  }), r("click", (h, m) => {
    const y = m.target, E = tt(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && E && E.length > 0 && !y.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && y === e.navigation.nextEl || e.navigation.prevEl && y === e.navigation.prevEl)) return;
      const x = E[0].classList.contains(e.params.pagination.hiddenClass);
      n(x === !0 ? "paginationShow" : "paginationHide"), E.forEach((W) => W.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const v = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: h
    } = e.pagination;
    h && (h = tt(h), h.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))), u(), g(), d();
  }, S = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: h
    } = e.pagination;
    h && (h = tt(h), h.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), f();
  };
  Object.assign(e.pagination, {
    enable: v,
    disable: S,
    render: g,
    update: d,
    init: u,
    destroy: f
  });
}
function il({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = Ce();
  t({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: !1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), e.zoom = {
    enabled: !1
  };
  let o = 1, a = !1, c = !1, s = {
    x: 0,
    y: 0
  };
  const l = -3;
  let p, d;
  const g = [], u = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, f = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  }, v = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let S = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return S;
    },
    set(T) {
      if (S !== T) {
        const P = u.imageEl, O = u.slideEl;
        n("zoomChange", T, P, O);
      }
      S = T;
    }
  });
  function h() {
    if (g.length < 2) return 1;
    const T = g[0].pageX, P = g[0].pageY, O = g[1].pageX, F = g[1].pageY;
    return Math.sqrt((O - T) ** 2 + (F - P) ** 2);
  }
  function m() {
    const T = e.params.zoom, P = u.imageWrapEl.getAttribute("data-swiper-zoom") || T.maxRatio;
    if (T.limitToOriginalSize && u.imageEl && u.imageEl.naturalWidth) {
      const O = u.imageEl.naturalWidth / u.imageEl.offsetWidth;
      return Math.min(O, P);
    }
    return P;
  }
  function y() {
    if (g.length < 2) return {
      x: null,
      y: null
    };
    const T = u.imageEl.getBoundingClientRect();
    return [(g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - T.x - i.scrollX) / o, (g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - T.y - i.scrollY) / o];
  }
  function E() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function x(T) {
    const P = E();
    return !!(T.target.matches(P) || e.slides.filter((O) => O.contains(T.target)).length > 0);
  }
  function W(T) {
    const P = `.${e.params.zoom.containerClass}`;
    return !!(T.target.matches(P) || [...e.hostEl.querySelectorAll(P)].filter((O) => O.contains(T.target)).length > 0);
  }
  function z(T) {
    if (T.pointerType === "mouse" && g.splice(0, g.length), !x(T)) return;
    const P = e.params.zoom;
    if (p = !1, d = !1, g.push(T), !(g.length < 2)) {
      if (p = !0, u.scaleStart = h(), !u.slideEl) {
        u.slideEl = T.target.closest(`.${e.params.slideClass}, swiper-slide`), u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
        let O = u.slideEl.querySelector(`.${P.containerClass}`);
        if (O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = O, O ? u.imageWrapEl = ir(u.imageEl, `.${P.containerClass}`)[0] : u.imageWrapEl = void 0, !u.imageWrapEl) {
          u.imageEl = void 0;
          return;
        }
        u.maxRatio = m();
      }
      if (u.imageEl) {
        const [O, F] = y();
        u.originX = O, u.originY = F, u.imageEl.style.transitionDuration = "0ms";
      }
      a = !0;
    }
  }
  function w(T) {
    if (!x(T)) return;
    const P = e.params.zoom, O = e.zoom, F = g.findIndex((R) => R.pointerId === T.pointerId);
    F >= 0 && (g[F] = T), !(g.length < 2) && (d = !0, u.scaleMove = h(), u.imageEl && (O.scale = u.scaleMove / u.scaleStart * o, O.scale > u.maxRatio && (O.scale = u.maxRatio - 1 + (O.scale - u.maxRatio + 1) ** 0.5), O.scale < P.minRatio && (O.scale = P.minRatio + 1 - (P.minRatio - O.scale + 1) ** 0.5), u.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`));
  }
  function I(T) {
    if (!x(T) || T.pointerType === "mouse" && T.type === "pointerout") return;
    const P = e.params.zoom, O = e.zoom, F = g.findIndex((R) => R.pointerId === T.pointerId);
    F >= 0 && g.splice(F, 1), !(!p || !d) && (p = !1, d = !1, u.imageEl && (O.scale = Math.max(Math.min(O.scale, u.maxRatio), P.minRatio), u.imageEl.style.transitionDuration = `${e.params.speed}ms`, u.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`, o = O.scale, a = !1, O.scale > 1 && u.slideEl ? u.slideEl.classList.add(`${P.zoomedSlideClass}`) : O.scale <= 1 && u.slideEl && u.slideEl.classList.remove(`${P.zoomedSlideClass}`), O.scale === 1 && (u.originX = 0, u.originY = 0, u.slideEl = void 0)));
  }
  let C;
  function _() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function k() {
    clearTimeout(C), e.touchEventsData.preventTouchMoveFromPointerMove = !0, C = setTimeout(() => {
      e.destroyed || _();
    });
  }
  function A(T) {
    const P = e.device;
    if (!u.imageEl || f.isTouched) return;
    P.android && T.cancelable && T.preventDefault(), f.isTouched = !0;
    const O = g.length > 0 ? g[0] : T;
    f.touchesStart.x = O.pageX, f.touchesStart.y = O.pageY;
  }
  function B(T) {
    const O = T.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!x(T) || !W(T))
      return;
    const F = e.zoom;
    if (!u.imageEl)
      return;
    if (!f.isTouched || !u.slideEl) {
      O && K(T);
      return;
    }
    if (O) {
      K(T);
      return;
    }
    f.isMoved || (f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth, f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight, f.startX = Mn(u.imageWrapEl, "x") || 0, f.startY = Mn(u.imageWrapEl, "y") || 0, u.slideWidth = u.slideEl.offsetWidth, u.slideHeight = u.slideEl.offsetHeight, u.imageWrapEl.style.transitionDuration = "0ms");
    const R = f.width * F.scale, V = f.height * F.scale;
    if (f.minX = Math.min(u.slideWidth / 2 - R / 2, 0), f.maxX = -f.minX, f.minY = Math.min(u.slideHeight / 2 - V / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = g.length > 0 ? g[0].pageX : T.pageX, f.touchesCurrent.y = g.length > 0 ? g[0].pageY : T.pageY, Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (e.allowClick = !1), !f.isMoved && !a) {
      if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) {
        f.isTouched = !1, _();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) {
        f.isTouched = !1, _();
        return;
      }
    }
    T.cancelable && T.preventDefault(), T.stopPropagation(), k(), f.isMoved = !0;
    const J = (F.scale - o) / (u.maxRatio - e.params.zoom.minRatio), {
      originX: j,
      originY: re
    } = u;
    f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + J * (f.width - j * 2), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + J * (f.height - re * 2), f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8), v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (f.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (f.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = f.touchesCurrent.x, v.prevPositionY = f.touchesCurrent.y, v.prevTime = Date.now(), u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function G() {
    const T = e.zoom;
    if (g.length = 0, !u.imageEl) return;
    if (!f.isTouched || !f.isMoved) {
      f.isTouched = !1, f.isMoved = !1;
      return;
    }
    f.isTouched = !1, f.isMoved = !1;
    let P = 300, O = 300;
    const F = v.x * P, R = f.currentX + F, V = v.y * O, Y = f.currentY + V;
    v.x !== 0 && (P = Math.abs((R - f.currentX) / v.x)), v.y !== 0 && (O = Math.abs((Y - f.currentY) / v.y));
    const J = Math.max(P, O);
    f.currentX = R, f.currentY = Y;
    const j = f.width * T.scale, re = f.height * T.scale;
    f.minX = Math.min(u.slideWidth / 2 - j / 2, 0), f.maxX = -f.minX, f.minY = Math.min(u.slideHeight / 2 - re / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), u.imageWrapEl.style.transitionDuration = `${J}ms`, u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function X() {
    const T = e.zoom;
    u.slideEl && e.activeIndex !== e.slides.indexOf(u.slideEl) && (u.imageEl && (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"), u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), T.scale = 1, o = 1, u.slideEl = void 0, u.imageEl = void 0, u.imageWrapEl = void 0, u.originX = 0, u.originY = 0);
  }
  function K(T) {
    if (o <= 1 || !u.imageWrapEl || !x(T) || !W(T)) return;
    const P = i.getComputedStyle(u.imageWrapEl).transform, O = new i.DOMMatrix(P);
    if (!c) {
      c = !0, s.x = T.clientX, s.y = T.clientY, f.startX = O.e, f.startY = O.f, f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth, f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight, u.slideWidth = u.slideEl.offsetWidth, u.slideHeight = u.slideEl.offsetHeight;
      return;
    }
    const F = (T.clientX - s.x) * l, R = (T.clientY - s.y) * l, V = f.width * o, Y = f.height * o, J = u.slideWidth, j = u.slideHeight, re = Math.min(J / 2 - V / 2, 0), fe = -re, we = Math.min(j / 2 - Y / 2, 0), ze = -we, Re = Math.max(Math.min(f.startX + F, fe), re), Ae = Math.max(Math.min(f.startY + R, ze), we);
    u.imageWrapEl.style.transitionDuration = "0ms", u.imageWrapEl.style.transform = `translate3d(${Re}px, ${Ae}px, 0)`, s.x = T.clientX, s.y = T.clientY, f.startX = Re, f.startY = Ae, f.currentX = Re, f.currentY = Ae;
  }
  function N(T) {
    const P = e.zoom, O = e.params.zoom;
    if (!u.slideEl) {
      T && T.target && (u.slideEl = T.target.closest(`.${e.params.slideClass}, swiper-slide`)), u.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = Ye(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex]);
      let Je = u.slideEl.querySelector(`.${O.containerClass}`);
      Je && (Je = Je.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = Je, Je ? u.imageWrapEl = ir(u.imageEl, `.${O.containerClass}`)[0] : u.imageWrapEl = void 0;
    }
    if (!u.imageEl || !u.imageWrapEl) return;
    u.maxRatio = m(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.slideEl.classList.add(`${O.zoomedSlideClass}`);
    let F, R, V, Y, J, j, re, fe, we, ze, Re, Ae, De, Ze, ot, Ke, st, at;
    typeof f.touchesStart.x > "u" && T ? (F = T.pageX, R = T.pageY) : (F = f.touchesStart.x, R = f.touchesStart.y);
    const Qe = o, je = typeof T == "number" ? T : null;
    o === 1 && je && (F = void 0, R = void 0, f.touchesStart.x = void 0, f.touchesStart.y = void 0);
    const lt = m();
    P.scale = je || lt, o = je || lt, T && !(o === 1 && je) ? (st = u.slideEl.offsetWidth, at = u.slideEl.offsetHeight, V = Ci(u.slideEl).left + i.scrollX, Y = Ci(u.slideEl).top + i.scrollY, J = V + st / 2 - F, j = Y + at / 2 - R, we = u.imageEl.offsetWidth || u.imageEl.clientWidth, ze = u.imageEl.offsetHeight || u.imageEl.clientHeight, Re = we * P.scale, Ae = ze * P.scale, De = Math.min(st / 2 - Re / 2, 0), Ze = Math.min(at / 2 - Ae / 2, 0), ot = -De, Ke = -Ze, Qe > 0 && je && typeof f.currentX == "number" && typeof f.currentY == "number" ? (re = f.currentX * P.scale / Qe, fe = f.currentY * P.scale / Qe) : (re = J * P.scale, fe = j * P.scale), re < De && (re = De), re > ot && (re = ot), fe < Ze && (fe = Ze), fe > Ke && (fe = Ke)) : (re = 0, fe = 0), je && P.scale === 1 && (u.originX = 0, u.originY = 0), f.currentX = re, f.currentY = fe, u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = `translate3d(${re}px, ${fe}px,0)`, u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = `translate3d(0,0,0) scale(${P.scale})`;
  }
  function Z() {
    const T = e.zoom, P = e.params.zoom;
    if (!u.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = Ye(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex];
      let O = u.slideEl.querySelector(`.${P.containerClass}`);
      O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = O, O ? u.imageWrapEl = ir(u.imageEl, `.${P.containerClass}`)[0] : u.imageWrapEl = void 0;
    }
    !u.imageEl || !u.imageWrapEl || (u.maxRatio = m(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), T.scale = 1, o = 1, f.currentX = void 0, f.currentY = void 0, f.touchesStart.x = void 0, f.touchesStart.y = void 0, u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = "translate3d(0,0,0)", u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = "translate3d(0,0,0) scale(1)", u.slideEl.classList.remove(`${P.zoomedSlideClass}`), u.slideEl = void 0, u.originX = 0, u.originY = 0, e.params.zoom.panOnMouseMove && (s = {
      x: 0,
      y: 0
    }, c && (c = !1, f.startX = 0, f.startY = 0)));
  }
  function M(T) {
    const P = e.zoom;
    P.scale && P.scale !== 1 ? Z() : N(T);
  }
  function $() {
    const T = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, P = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: T,
      activeListenerWithCapture: P
    };
  }
  function q() {
    const T = e.zoom;
    if (T.enabled) return;
    T.enabled = !0;
    const {
      passiveListener: P,
      activeListenerWithCapture: O
    } = $();
    e.wrapperEl.addEventListener("pointerdown", z, P), e.wrapperEl.addEventListener("pointermove", w, O), ["pointerup", "pointercancel", "pointerout"].forEach((F) => {
      e.wrapperEl.addEventListener(F, I, P);
    }), e.wrapperEl.addEventListener("pointermove", B, O);
  }
  function U() {
    const T = e.zoom;
    if (!T.enabled) return;
    T.enabled = !1;
    const {
      passiveListener: P,
      activeListenerWithCapture: O
    } = $();
    e.wrapperEl.removeEventListener("pointerdown", z, P), e.wrapperEl.removeEventListener("pointermove", w, O), ["pointerup", "pointercancel", "pointerout"].forEach((F) => {
      e.wrapperEl.removeEventListener(F, I, P);
    }), e.wrapperEl.removeEventListener("pointermove", B, O);
  }
  r("init", () => {
    e.params.zoom.enabled && q();
  }), r("destroy", () => {
    U();
  }), r("touchStart", (T, P) => {
    e.zoom.enabled && A(P);
  }), r("touchEnd", (T, P) => {
    e.zoom.enabled && G();
  }), r("doubleTap", (T, P) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && M(P);
  }), r("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && X();
  }), r("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && X();
  }), Object.assign(e.zoom, {
    enable: q,
    disable: U,
    in: N,
    out: Z,
    toggle: M
  });
}
let sn;
function ol() {
  const e = Ce(), t = dt();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function zo() {
  return sn || (sn = ol()), sn;
}
let an;
function sl({
  userAgent: e
} = {}) {
  const t = zo(), r = Ce(), n = r.navigator.platform, i = e || r.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, a = r.screen.width, c = r.screen.height, s = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let l = i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const p = i.match(/(iPod)(.*OS\s([\d_]+))?/), d = !l && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = n === "Win32";
  let u = n === "MacIntel";
  const f = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !l && u && t.touch && f.indexOf(`${a}x${c}`) >= 0 && (l = i.match(/(Version)\/([\d.]+)/), l || (l = [0, 1, "13_0_0"]), u = !1), s && !g && (o.os = "android", o.android = !0), (l || d || p) && (o.os = "ios", o.ios = !0), o;
}
function Mo(e = {}) {
  return an || (an = sl(e)), an;
}
let ln;
function al() {
  const e = Ce(), t = Mo();
  let r = !1;
  function n() {
    const c = e.navigator.userAgent.toLowerCase();
    return c.indexOf("safari") >= 0 && c.indexOf("chrome") < 0 && c.indexOf("android") < 0;
  }
  if (n()) {
    const c = String(e.navigator.userAgent);
    if (c.includes("Version/")) {
      const [s, l] = c.split("Version/")[1].split(" ")[0].split(".").map((p) => Number(p));
      r = s < 16 || s === 16 && l < 2;
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), o = n(), a = o || i && t.ios;
  return {
    isSafari: r || o,
    needPerspectiveFix: r,
    need3dFix: a,
    isWebView: i
  };
}
function Oo() {
  return ln || (ln = al()), ln;
}
function ll({
  swiper: e,
  on: t,
  emit: r
}) {
  const n = Ce();
  let i = null, o = null;
  const a = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, c = () => {
    !e || e.destroyed || !e.initialized || (i = new ResizeObserver((p) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: d,
          height: g
        } = e;
        let u = d, f = g;
        p.forEach(({
          contentBoxSize: v,
          contentRect: S,
          target: h
        }) => {
          h && h !== e.el || (u = S ? S.width : (v[0] || v).inlineSize, f = S ? S.height : (v[0] || v).blockSize);
        }), (u !== d || f !== g) && a();
      });
    }), i.observe(e.el));
  }, s = () => {
    o && n.cancelAnimationFrame(o), i && i.unobserve && e.el && (i.unobserve(e.el), i = null);
  }, l = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      c();
      return;
    }
    n.addEventListener("resize", a), n.addEventListener("orientationchange", l);
  }), t("destroy", () => {
    s(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", l);
  });
}
function cl({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = [], o = Ce(), a = (l, p = {}) => {
    const d = o.MutationObserver || o.WebkitMutationObserver, g = new d((u) => {
      if (e.__preventObserver__) return;
      if (u.length === 1) {
        n("observerUpdate", u[0]);
        return;
      }
      const f = function() {
        n("observerUpdate", u[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(f) : o.setTimeout(f, 0);
    });
    g.observe(l, {
      attributes: typeof p.attributes > "u" ? !0 : p.attributes,
      childList: e.isElement || (typeof p.childList > "u" ? !0 : p).childList,
      characterData: typeof p.characterData > "u" ? !0 : p.characterData
    }), i.push(g);
  }, c = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const l = ir(e.hostEl);
        for (let p = 0; p < l.length; p += 1)
          a(l[p]);
      }
      a(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), a(e.wrapperEl, {
        attributes: !1
      });
    }
  }, s = () => {
    i.forEach((l) => {
      l.disconnect();
    }), i.splice(0, i.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", c), r("destroy", s);
}
var ul = {
  on(e, t, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    const i = r ? "unshift" : "push";
    return e.split(" ").forEach((o) => {
      n.eventsListeners[o] || (n.eventsListeners[o] = []), n.eventsListeners[o][i](t);
    }), n;
  },
  once(e, t, r) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
    function i(...o) {
      n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, o);
    }
    return i.__emitterProxy = t, n.on(e, i, r);
  },
  onAny(e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const n = t ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const r = t.eventsAnyListeners.indexOf(e);
    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
  },
  off(e, t) {
    const r = this;
    return !r.eventsListeners || r.destroyed || !r.eventsListeners || e.split(" ").forEach((n) => {
      typeof t > "u" ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].forEach((i, o) => {
        (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[n].splice(o, 1);
      });
    }), r;
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let r, n, i;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (r = e[0], n = e.slice(1, e.length), i = t) : (r = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i), (Array.isArray(r) ? r : r.split(" ")).forEach((a) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((c) => {
        c.apply(i, [a, ...n]);
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((c) => {
        c.apply(i, n);
      });
    }), t;
  }
};
function dl() {
  const e = this;
  let t, r;
  const n = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = n.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = n.clientHeight, !(t === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (t = t - parseInt(ct(n, "padding-left") || 0, 10) - parseInt(ct(n, "padding-right") || 0, 10), r = r - parseInt(ct(n, "padding-top") || 0, 10) - parseInt(ct(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: t,
    height: r,
    size: e.isHorizontal() ? t : r
  }));
}
function fl() {
  const e = this;
  function t(C, _) {
    return parseFloat(C.getPropertyValue(e.getDirectionLabel(_)) || 0);
  }
  const r = e.params, {
    wrapperEl: n,
    slidesEl: i,
    rtlTranslate: o,
    wrongRTL: a
  } = e, c = e.virtual && r.virtual.enabled, s = c ? e.virtual.slides.length : e.slides.length, l = Ye(i, `.${e.params.slideClass}, swiper-slide`), p = c ? e.virtual.slides.length : l.length;
  let d = [];
  const g = [], u = [];
  let f = r.slidesOffsetBefore;
  typeof f == "function" && (f = r.slidesOffsetBefore.call(e));
  let v = r.slidesOffsetAfter;
  typeof v == "function" && (v = r.slidesOffsetAfter.call(e));
  const S = e.snapGrid.length, h = e.slidesGrid.length, m = e.size - f - v;
  let y = r.spaceBetween, E = -f, x = 0, W = 0;
  if (typeof m > "u")
    return;
  typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * m : typeof y == "string" && (y = parseFloat(y)), e.virtualSize = -y - f - v, l.forEach((C) => {
    o ? C.style.marginLeft = "" : C.style.marginRight = "", C.style.marginBottom = "", C.style.marginTop = "";
  }), r.centeredSlides && r.cssMode && (zt(n, "--swiper-centered-offset-before", ""), zt(n, "--swiper-centered-offset-after", "")), r.cssMode && (zt(n, "--swiper-slides-offset-before", `${f}px`), zt(n, "--swiper-slides-offset-after", `${v}px`));
  const z = r.grid && r.grid.rows > 1 && e.grid;
  z ? e.grid.initSlides(l) : e.grid && e.grid.unsetSlides();
  let w;
  const I = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter((C) => typeof r.breakpoints[C].slidesPerView < "u").length > 0;
  for (let C = 0; C < p; C += 1) {
    w = 0;
    const _ = l[C];
    if (!(_ && (z && e.grid.updateSlide(C, _, l), ct(_, "display") === "none"))) {
      if (c && r.slidesPerView === "auto")
        r.virtual.slidesPerViewAutoSlideSize && (w = r.virtual.slidesPerViewAutoSlideSize), w && _ && (r.roundLengths && (w = Math.floor(w)), _.style[e.getDirectionLabel("width")] = `${w}px`);
      else if (r.slidesPerView === "auto") {
        I && (_.style[e.getDirectionLabel("width")] = "");
        const k = getComputedStyle(_), A = _.style.transform, B = _.style.webkitTransform;
        if (A && (_.style.transform = "none"), B && (_.style.webkitTransform = "none"), r.roundLengths)
          w = e.isHorizontal() ? On(_, "width") : On(_, "height");
        else {
          const G = t(k, "width"), X = t(k, "padding-left"), K = t(k, "padding-right"), N = t(k, "margin-left"), Z = t(k, "margin-right"), M = k.getPropertyValue("box-sizing");
          if (M && M === "border-box")
            w = G + N + Z;
          else {
            const {
              clientWidth: $,
              offsetWidth: q
            } = _;
            w = G + X + K + N + Z + (q - $);
          }
        }
        A && (_.style.transform = A), B && (_.style.webkitTransform = B), r.roundLengths && (w = Math.floor(w));
      } else
        w = (m - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (w = Math.floor(w)), _ && (_.style[e.getDirectionLabel("width")] = `${w}px`);
      _ && (_.swiperSlideSize = w), u.push(w), r.centeredSlides ? (E = E + w / 2 + x / 2 + y, x === 0 && C !== 0 && (E = E - m / 2 - y), C === 0 && (E = E - m / 2 - y), Math.abs(E) < 1 / 1e3 && (E = 0), r.roundLengths && (E = Math.floor(E)), W % r.slidesPerGroup === 0 && d.push(E), g.push(E)) : (r.roundLengths && (E = Math.floor(E)), (W - Math.min(e.params.slidesPerGroupSkip, W)) % e.params.slidesPerGroup === 0 && d.push(E), g.push(E), E = E + w + y), e.virtualSize += w + y, x = w, W += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, m) + v, o && a && (r.effect === "slide" || r.effect === "coverflow") && (n.style.width = `${e.virtualSize + y}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`), z && e.grid.updateWrapperSize(w, d), !r.centeredSlides) {
    const C = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0, _ = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || C);
    let k = d.length;
    if (_) {
      let B;
      if (r.slidesPerView === "auto") {
        B = 1;
        let G = 0;
        for (let X = u.length - 1; X >= 0 && (G += u[X] + (X < u.length - 1 ? y : 0), G <= m); X -= 1)
          B = u.length - X;
      } else
        B = Math.floor(r.slidesPerView);
      k = Math.max(p - B, 0);
    }
    const A = [];
    for (let B = 0; B < d.length; B += 1) {
      let G = d[B];
      r.roundLengths && (G = Math.floor(G)), _ ? B <= k && A.push(G) : d[B] <= e.virtualSize - m && A.push(G);
    }
    d = A, Math.floor(e.virtualSize - m) - Math.floor(d[d.length - 1]) > 1 && (_ || d.push(e.virtualSize - m));
  }
  if (c && r.loop) {
    const C = u[0] + y;
    if (r.slidesPerGroup > 1) {
      const _ = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), k = C * r.slidesPerGroup;
      for (let A = 0; A < _; A += 1)
        d.push(d[d.length - 1] + k);
    }
    for (let _ = 0; _ < e.virtual.slidesBefore + e.virtual.slidesAfter; _ += 1)
      r.slidesPerGroup === 1 && d.push(d[d.length - 1] + C), g.push(g[g.length - 1] + C), e.virtualSize += C;
  }
  if (d.length === 0 && (d = [0]), y !== 0) {
    const C = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    l.filter((_, k) => !r.cssMode || r.loop ? !0 : k !== l.length - 1).forEach((_) => {
      _.style[C] = `${y}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let C = 0;
    u.forEach((k) => {
      C += k + (y || 0);
    }), C -= y;
    const _ = C > m ? C - m : 0;
    d = d.map((k) => k <= 0 ? -f : k > _ ? _ + v : k);
  }
  if (r.centerInsufficientSlides) {
    let C = 0;
    if (u.forEach((_) => {
      C += _ + (y || 0);
    }), C -= y, C < m) {
      const _ = (m - C) / 2;
      d.forEach((k, A) => {
        d[A] = k - _;
      }), g.forEach((k, A) => {
        g[A] = k + _;
      });
    }
  }
  if (Object.assign(e, {
    slides: l,
    snapGrid: d,
    slidesGrid: g,
    slidesSizesGrid: u
  }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    zt(n, "--swiper-centered-offset-before", `${-d[0]}px`), zt(n, "--swiper-centered-offset-after", `${e.size / 2 - u[u.length - 1] / 2}px`);
    const C = -e.snapGrid[0], _ = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((k) => k + C), e.slidesGrid = e.slidesGrid.map((k) => k + _);
  }
  if (p !== s && e.emit("slidesLengthChange"), d.length !== S && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== h && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !c && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const C = `${r.containerModifierClass}backface-hidden`, _ = e.el.classList.contains(C);
    p <= r.maxBackfaceHiddenSlides ? _ || e.el.classList.add(C) : _ && e.el.classList.remove(C);
  }
}
function pl(e) {
  const t = this, r = [], n = t.virtual && t.params.virtual.enabled;
  let i = 0, o;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const a = (c) => n ? t.slides[t.getSlideIndexByData(c)] : t.slides[c];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((c) => {
        r.push(c);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const c = t.activeIndex + o;
        if (c > t.slides.length && !n) break;
        r.push(a(c));
      }
  else
    r.push(a(t.activeIndex));
  for (o = 0; o < r.length; o += 1)
    if (typeof r[o] < "u") {
      const c = r[o].offsetHeight;
      i = c > i ? c : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function hl() {
  const e = this, t = e.slides, r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment();
}
const zi = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function gl(e = this && this.translate || 0) {
  const t = this, r = t.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: o
  } = t;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let c = r.spaceBetween;
  typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * t.size : typeof c == "string" && (c = parseFloat(c));
  for (let s = 0; s < n.length; s += 1) {
    const l = n[s];
    let p = l.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (p -= n[0].swiperSlideOffset);
    const d = (a + (r.centeredSlides ? t.minTranslate() : 0) - p) / (l.swiperSlideSize + c), g = (a - o[0] + (r.centeredSlides ? t.minTranslate() : 0) - p) / (l.swiperSlideSize + c), u = -(a - p), f = u + t.slidesSizesGrid[s], v = u >= 0 && u <= t.size - t.slidesSizesGrid[s], S = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
    S && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(s)), zi(l, S, r.slideVisibleClass), zi(l, v, r.slideFullyVisibleClass), l.progress = i ? -d : d, l.originalProgress = i ? -g : g;
  }
}
function ml(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * p || 0;
  }
  const r = t.params, n = t.maxTranslate() - t.minTranslate();
  let {
    progress: i,
    isBeginning: o,
    isEnd: a,
    progressLoop: c
  } = t;
  const s = o, l = a;
  if (n === 0)
    i = 0, o = !0, a = !0;
  else {
    i = (e - t.minTranslate()) / n;
    const p = Math.abs(e - t.minTranslate()) < 1, d = Math.abs(e - t.maxTranslate()) < 1;
    o = p || i <= 0, a = d || i >= 1, p && (i = 0), d && (i = 1);
  }
  if (r.loop) {
    const p = t.getSlideIndexByData(0), d = t.getSlideIndexByData(t.slides.length - 1), g = t.slidesGrid[p], u = t.slidesGrid[d], f = t.slidesGrid[t.slidesGrid.length - 1], v = Math.abs(e);
    v >= g ? c = (v - g) / f : c = (v + f - u) / f, c > 1 && (c -= 1);
  }
  Object.assign(t, {
    progress: i,
    progressLoop: c,
    isBeginning: o,
    isEnd: a
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), o && !s && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (s && !o || l && !a) && t.emit("fromEdge"), t.emit("progress", i);
}
const cn = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function vl() {
  const e = this, {
    slides: t,
    params: r,
    slidesEl: n,
    activeIndex: i
  } = e, o = e.virtual && r.virtual.enabled, a = e.grid && r.grid && r.grid.rows > 1, c = (d) => Ye(n, `.${r.slideClass}${d}, swiper-slide${d}`)[0];
  let s, l, p;
  if (o)
    if (r.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d), d >= e.virtual.slides.length && (d -= e.virtual.slides.length), s = c(`[data-swiper-slide-index="${d}"]`);
    } else
      s = c(`[data-swiper-slide-index="${i}"]`);
  else
    a ? (s = t.find((d) => d.column === i), p = t.find((d) => d.column === i + 1), l = t.find((d) => d.column === i - 1)) : s = t[i];
  s && (a || (p = tl(s, `.${r.slideClass}, swiper-slide`)[0], r.loop && !p && (p = t[0]), l = el(s, `.${r.slideClass}, swiper-slide`)[0], r.loop && !l === 0 && (l = t[t.length - 1]))), t.forEach((d) => {
    cn(d, d === s, r.slideActiveClass), cn(d, d === p, r.slideNextClass), cn(d, d === l, r.slidePrevClass);
  }), e.emitSlidesClasses();
}
const Ir = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, n = t.closest(r());
  if (n) {
    let i = n.querySelector(`.${e.params.lazyPreloaderClass}`);
    !i && e.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      n.shadowRoot && (i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), i && !i.lazyPreloaderManaged && i.remove());
    })), i && !i.lazyPreloaderManaged && i.remove();
  }
}, un = (e, t) => {
  if (!e.slides[t]) return;
  const r = e.slides[t].querySelector('[loading="lazy"]');
  r && r.removeAttribute("loading");
}, In = (e) => {
  if (!e || e.destroyed || !e.params) return;
  let t = e.params.lazyPreloadPrevNext;
  const r = e.slides.length;
  if (!r || !t || t < 0) return;
  t = Math.min(t, r);
  const n = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const a = i, c = [a - t];
    c.push(...Array.from({
      length: t
    }).map((s, l) => a + n + l)), e.slides.forEach((s, l) => {
      c.includes(s.column) && un(e, l);
    });
    return;
  }
  const o = i + n - 1;
  if (e.params.rewind || e.params.loop)
    for (let a = i - t; a <= o + t; a += 1) {
      const c = (a % r + r) % r;
      (c < i || c > o) && un(e, c);
    }
  else
    for (let a = Math.max(i - t, 0); a <= Math.min(o + t, r - 1); a += 1)
      a !== i && (a > o || a < i) && un(e, a);
};
function yl(e) {
  const {
    slidesGrid: t,
    params: r
  } = e, n = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u" ? n >= t[o] && n < t[o + 1] - (t[o + 1] - t[o]) / 2 ? i = o : n >= t[o] && n < t[o + 1] && (i = o + 1) : n >= t[o] && (i = o);
  return r.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function bl(e) {
  const t = this, r = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: n,
    params: i,
    activeIndex: o,
    realIndex: a,
    snapIndex: c
  } = t;
  let s = e, l;
  const p = (u) => {
    let f = u - t.virtual.slidesBefore;
    return f < 0 && (f = t.virtual.slides.length + f), f >= t.virtual.slides.length && (f -= t.virtual.slides.length), f;
  };
  if (typeof s > "u" && (s = yl(t)), n.indexOf(r) >= 0)
    l = n.indexOf(r);
  else {
    const u = Math.min(i.slidesPerGroupSkip, s);
    l = u + Math.floor((s - u) / i.slidesPerGroup);
  }
  if (l >= n.length && (l = n.length - 1), s === o && !t.params.loop) {
    l !== c && (t.snapIndex = l, t.emit("snapIndexChange"));
    return;
  }
  if (s === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = p(s);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let g;
  if (t.virtual && i.virtual.enabled)
    i.loop ? g = p(s) : g = s;
  else if (d) {
    const u = t.slides.find((v) => v.column === s);
    let f = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(f) && (f = Math.max(t.slides.indexOf(u), 0)), g = Math.floor(f / i.grid.rows);
  } else if (t.slides[s]) {
    const u = t.slides[s].getAttribute("data-swiper-slide-index");
    u ? g = parseInt(u, 10) : g = s;
  } else
    g = s;
  Object.assign(t, {
    previousSnapIndex: c,
    snapIndex: l,
    previousRealIndex: a,
    realIndex: g,
    previousIndex: o,
    activeIndex: s
  }), t.initialized && In(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== g && t.emit("realIndexChange"), t.emit("slideChange"));
}
function xl(e, t) {
  const r = this, n = r.params;
  let i = e.closest(`.${n.slideClass}, swiper-slide`);
  !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((c) => {
    !i && c.matches && c.matches(`.${n.slideClass}, swiper-slide`) && (i = c);
  });
  let o = !1, a;
  if (i) {
    for (let c = 0; c < r.slides.length; c += 1)
      if (r.slides[c] === i) {
        o = !0, a = c;
        break;
      }
  }
  if (i && o)
    r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a;
  else {
    r.clickedSlide = void 0, r.clickedIndex = void 0;
    return;
  }
  n.slideToClickedSlide && r.clickedIndex !== void 0 && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide();
}
var Sl = {
  updateSize: dl,
  updateSlides: fl,
  updateAutoHeight: pl,
  updateSlidesOffset: hl,
  updateSlidesProgress: gl,
  updateProgress: ml,
  updateSlidesClasses: vl,
  updateActiveIndex: bl,
  updateClickedSlide: xl
};
function wl(e = this.isHorizontal() ? "x" : "y") {
  const t = this, {
    params: r,
    rtlTranslate: n,
    translate: i,
    wrapperEl: o
  } = t;
  if (r.virtualTranslate)
    return n ? -i : i;
  if (r.cssMode)
    return i;
  let a = Mn(o, e);
  return a += t.cssOverflowAdjustment(), n && (a = -a), a || 0;
}
function El(e, t) {
  const r = this, {
    rtlTranslate: n,
    params: i,
    wrapperEl: o,
    progress: a
  } = r;
  let c = 0, s = 0;
  const l = 0;
  r.isHorizontal() ? c = n ? -e : e : s = e, i.roundLengths && (c = Math.floor(c), s = Math.floor(s)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? c : s, i.cssMode ? o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -s : i.virtualTranslate || (r.isHorizontal() ? c -= r.cssOverflowAdjustment() : s -= r.cssOverflowAdjustment(), o.style.transform = `translate3d(${c}px, ${s}px, ${l}px)`);
  let p;
  const d = r.maxTranslate() - r.minTranslate();
  d === 0 ? p = 0 : p = (e - r.minTranslate()) / d, p !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t);
}
function Tl() {
  return -this.snapGrid[0];
}
function Cl() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function zl(e = 0, t = this.params.speed, r = !0, n = !0, i) {
  const o = this, {
    params: a,
    wrapperEl: c
  } = o;
  if (o.animating && a.preventInteractionOnTransition)
    return !1;
  const s = o.minTranslate(), l = o.maxTranslate();
  let p;
  if (n && e > s ? p = s : n && e < l ? p = l : p = e, o.updateProgress(p), a.cssMode) {
    const d = o.isHorizontal();
    if (t === 0)
      c[d ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!o.support.smoothScroll)
        return Co({
          swiper: o,
          targetPosition: -p,
          side: d ? "left" : "top"
        }), !0;
      c.scrollTo({
        [d ? "left" : "top"]: -p,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (o.setTransition(0), o.setTranslate(p), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(p), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(g) {
    !o || o.destroyed || g.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, r && o.emit("transitionEnd"));
  }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
}
var Ml = {
  getTranslate: wl,
  setTranslate: El,
  minTranslate: Tl,
  maxTranslate: Cl,
  translateTo: zl
};
function Ol(e, t) {
  const r = this;
  r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), r.emit("setTransition", e, t);
}
function Io({
  swiper: e,
  runCallbacks: t,
  direction: r,
  step: n
}) {
  const {
    activeIndex: i,
    previousIndex: o
  } = e;
  let a = r;
  a || (i > o ? a = "next" : i < o ? a = "prev" : a = "reset"), e.emit(`transition${n}`), t && a === "reset" ? e.emit(`slideResetTransition${n}`) : t && i !== o && (e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`));
}
function Il(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  n.cssMode || (n.autoHeight && r.updateAutoHeight(), Io({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function _l(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  r.animating = !1, !n.cssMode && (r.setTransition(0), Io({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
var Pl = {
  setTransition: Ol,
  transitionStart: Il,
  transitionEnd: _l
};
function kl(e = 0, t, r = !0, n, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: c,
    snapGrid: s,
    slidesGrid: l,
    previousIndex: p,
    activeIndex: d,
    rtlTranslate: g,
    wrapperEl: u,
    enabled: f
  } = o;
  if (!f && !n && !i || o.destroyed || o.animating && c.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = o.params.speed);
  const v = Math.min(o.params.slidesPerGroupSkip, a);
  let S = v + Math.floor((a - v) / o.params.slidesPerGroup);
  S >= s.length && (S = s.length - 1);
  const h = -s[S];
  if (c.normalizeSlideIndex)
    for (let z = 0; z < l.length; z += 1) {
      const w = -Math.floor(h * 100), I = Math.floor(l[z] * 100), C = Math.floor(l[z + 1] * 100);
      typeof l[z + 1] < "u" ? w >= I && w < C - (C - I) / 2 ? a = z : w >= I && w < C && (a = z + 1) : w >= I && (a = z);
    }
  if (o.initialized && a !== d && (!o.allowSlideNext && (g ? h > o.translate && h > o.minTranslate() : h < o.translate && h < o.minTranslate()) || !o.allowSlidePrev && h > o.translate && h > o.maxTranslate() && (d || 0) !== a))
    return !1;
  a !== (p || 0) && r && o.emit("beforeSlideChangeStart"), o.updateProgress(h);
  let m;
  a > d ? m = "next" : a < d ? m = "prev" : m = "reset";
  const y = o.virtual && o.params.virtual.enabled;
  if (!(y && i) && (g && -h === o.translate || !g && h === o.translate))
    return o.updateActiveIndex(a), c.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), c.effect !== "slide" && o.setTranslate(h), m !== "reset" && (o.transitionStart(r, m), o.transitionEnd(r, m)), !1;
  if (c.cssMode) {
    const z = o.isHorizontal(), w = g ? h : -h;
    if (t === 0)
      y && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), y && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        u[z ? "scrollLeft" : "scrollTop"] = w;
      })) : u[z ? "scrollLeft" : "scrollTop"] = w, y && requestAnimationFrame(() => {
        o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
      });
    else {
      if (!o.support.smoothScroll)
        return Co({
          swiper: o,
          targetPosition: w,
          side: z ? "left" : "top"
        }), !0;
      u.scrollTo({
        [z ? "left" : "top"]: w,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const W = Oo().isSafari;
  return y && !i && W && o.isElement && o.virtual.update(!1, !1, a), o.setTransition(t), o.setTranslate(h), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, n), o.transitionStart(r, m), t === 0 ? o.transitionEnd(r, m) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(w) {
    !o || o.destroyed || w.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(r, m));
  }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
}
function $l(e = 0, t, r = !0, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const o = i.grid && i.params.grid && i.params.grid.rows > 1;
  let a = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled)
      a = a + i.virtual.slidesBefore;
    else {
      let c;
      if (o) {
        const v = a * i.params.grid.rows;
        c = i.slides.find((S) => S.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        c = i.getSlideIndexByData(a);
      const s = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {
        centeredSlides: l,
        slidesOffsetBefore: p,
        slidesOffsetAfter: d
      } = i.params, g = l || !!p || !!d;
      let u = i.params.slidesPerView;
      u === "auto" ? u = i.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(i.params.slidesPerView, 10)), g && u % 2 === 0 && (u = u + 1));
      let f = s - c < u;
      if (g && (f = f || c < Math.ceil(u / 2)), n && g && i.params.slidesPerView !== "auto" && !o && (f = !1), f) {
        const v = g ? c < i.activeIndex ? "prev" : "next" : c - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? c + 1 : c - s + 1,
          slideRealIndex: v === "next" ? i.realIndex : void 0
        });
      }
      if (o) {
        const v = a * i.params.grid.rows;
        a = i.slides.find((S) => S.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        a = i.getSlideIndexByData(a);
    }
  return requestAnimationFrame(() => {
    i.slideTo(a, t, r, n);
  }), i;
}
function Ll(e, t = !0, r) {
  const n = this, {
    enabled: i,
    params: o,
    animating: a
  } = n;
  if (!i || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  let c = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (c = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const s = n.activeIndex < o.slidesPerGroupSkip ? 1 : c, l = n.virtual && o.virtual.enabled;
  if (o.loop) {
    if (a && !l && o.loopPreventsSliding) return !1;
    if (n.loopFix({
      direction: "next"
    }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && o.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(n.activeIndex + s, e, t, r);
      }), !0;
  }
  return o.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + s, e, t, r);
}
function Rl(e, t = !0, r) {
  const n = this, {
    params: i,
    snapGrid: o,
    slidesGrid: a,
    rtlTranslate: c,
    enabled: s,
    animating: l
  } = n;
  if (!s || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  const p = n.virtual && i.virtual.enabled;
  if (i.loop) {
    if (l && !p && i.loopPreventsSliding) return !1;
    n.loopFix({
      direction: "prev"
    }), n._clientLeft = n.wrapperEl.clientLeft;
  }
  const d = c ? n.translate : -n.translate;
  function g(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const u = g(d), f = o.map((m) => g(m)), v = i.freeMode && i.freeMode.enabled;
  let S = o[f.indexOf(u) - 1];
  if (typeof S > "u" && (i.cssMode || v)) {
    let m;
    o.forEach((y, E) => {
      u >= y && (m = E);
    }), typeof m < "u" && (S = v ? o[m] : o[m > 0 ? m - 1 : m]);
  }
  let h = 0;
  if (typeof S < "u" && (h = a.indexOf(S), h < 0 && (h = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && n.isBeginning) {
    const m = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(m, e, t, r);
  } else if (i.loop && n.activeIndex === 0 && i.cssMode)
    return requestAnimationFrame(() => {
      n.slideTo(h, e, t, r);
    }), !0;
  return n.slideTo(h, e, t, r);
}
function Al(e, t = !0, r) {
  const n = this;
  if (!n.destroyed)
    return typeof e > "u" && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r);
}
function Dl(e, t = !0, r, n = 0.5) {
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let o = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, o), c = a + Math.floor((o - a) / i.params.slidesPerGroup), s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[c]) {
    const l = i.snapGrid[c], p = i.snapGrid[c + 1];
    s - l > (p - l) * n && (o += i.params.slidesPerGroup);
  } else {
    const l = i.snapGrid[c - 1], p = i.snapGrid[c];
    s - l <= (p - l) * n && (o -= i.params.slidesPerGroup);
  }
  return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, r);
}
function jl() {
  const e = this;
  if (e.destroyed) return;
  const {
    params: t,
    slidesEl: r
  } = e, n = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.getSlideIndexWhenGrid(e.clickedIndex), o;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`, c = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating) return;
    o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(o) : i > (c ? (e.slides.length - n) / 2 - (e.params.grid.rows - 1) : e.slides.length - n) ? (e.loopFix(), i = e.getSlideIndex(Ye(r, `${a}[data-swiper-slide-index="${o}"]`)[0]), To(() => {
      e.slideTo(i);
    })) : e.slideTo(i);
  } else
    e.slideTo(i);
}
var Wl = {
  slideTo: kl,
  slideToLoop: $l,
  slideNext: Ll,
  slidePrev: Rl,
  slideReset: Al,
  slideToClosest: Dl,
  slideToClickedSlide: jl
};
function Nl(e, t) {
  const r = this, {
    params: n,
    slidesEl: i
  } = r;
  if (!n.loop || r.virtual && r.params.virtual.enabled) return;
  const o = () => {
    Ye(i, `.${n.slideClass}, swiper-slide`).forEach((f, v) => {
      f.setAttribute("data-swiper-slide-index", v);
    });
  }, a = () => {
    const u = Ye(i, `.${n.slideBlankClass}`);
    u.forEach((f) => {
      f.remove();
    }), u.length > 0 && (r.recalcSlides(), r.updateSlides());
  }, c = r.grid && n.grid && n.grid.rows > 1;
  n.loopAddBlankSlides && (n.slidesPerGroup > 1 || c) && a();
  const s = n.slidesPerGroup * (c ? n.grid.rows : 1), l = r.slides.length % s !== 0, p = c && r.slides.length % n.grid.rows !== 0, d = (u) => {
    for (let f = 0; f < u; f += 1) {
      const v = r.isElement ? Rr("swiper-slide", [n.slideBlankClass]) : Rr("div", [n.slideClass, n.slideBlankClass]);
      r.slidesEl.append(v);
    }
  };
  if (l) {
    if (n.loopAddBlankSlides) {
      const u = s - r.slides.length % s;
      d(u), r.recalcSlides(), r.updateSlides();
    } else
      Lr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else if (p) {
    if (n.loopAddBlankSlides) {
      const u = n.grid.rows - r.slides.length % n.grid.rows;
      d(u), r.recalcSlides(), r.updateSlides();
    } else
      Lr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else
    o();
  const g = n.centeredSlides || !!n.slidesOffsetBefore || !!n.slidesOffsetAfter;
  r.loopFix({
    slideRealIndex: e,
    direction: g ? void 0 : "next",
    initial: t
  });
}
function Vl({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: r,
  setTranslate: n,
  activeSlideIndex: i,
  initial: o,
  byController: a,
  byMousewheel: c
} = {}) {
  const s = this;
  if (!s.params.loop) return;
  s.emit("beforeLoopFix");
  const {
    slides: l,
    allowSlidePrev: p,
    allowSlideNext: d,
    slidesEl: g,
    params: u
  } = s, {
    centeredSlides: f,
    slidesOffsetBefore: v,
    slidesOffsetAfter: S,
    initialSlide: h
  } = u, m = f || !!v || !!S;
  if (s.allowSlidePrev = !0, s.allowSlideNext = !0, s.virtual && u.virtual.enabled) {
    t && (!m && s.snapIndex === 0 ? s.slideTo(s.virtual.slides.length, 0, !1, !0) : m && s.snapIndex < u.slidesPerView ? s.slideTo(s.virtual.slides.length + s.snapIndex, 0, !1, !0) : s.snapIndex === s.snapGrid.length - 1 && s.slideTo(s.virtual.slidesBefore, 0, !1, !0)), s.allowSlidePrev = p, s.allowSlideNext = d, s.emit("loopFix");
    return;
  }
  let y = u.slidesPerView;
  y === "auto" ? y = s.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(u.slidesPerView, 10)), m && y % 2 === 0 && (y = y + 1));
  const E = u.slidesPerGroupAuto ? y : u.slidesPerGroup;
  let x = m ? Math.max(E, Math.ceil(y / 2)) : E;
  x % E !== 0 && (x += E - x % E), x += u.loopAdditionalSlides, s.loopedSlides = x;
  const W = s.grid && u.grid && u.grid.rows > 1;
  l.length < y + x || s.params.effect === "cards" && l.length < y + x * 2 ? Lr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : W && u.grid.fill === "row" && Lr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const z = [], w = [], I = W ? Math.ceil(l.length / u.grid.rows) : l.length, C = o && I - h < y && !m;
  let _ = C ? h : s.activeIndex;
  typeof i > "u" ? i = s.getSlideIndex(l.find((N) => N.classList.contains(u.slideActiveClass))) : _ = i;
  const k = r === "next" || !r, A = r === "prev" || !r;
  let B = 0, G = 0;
  const K = (W ? l[i].column : i) + (m && typeof n > "u" ? -y / 2 + 0.5 : 0);
  if (K < x) {
    B = Math.max(x - K, E);
    for (let N = 0; N < x - K; N += 1) {
      const Z = N - Math.floor(N / I) * I;
      if (W) {
        const M = I - Z - 1;
        for (let $ = l.length - 1; $ >= 0; $ -= 1)
          l[$].column === M && z.push($);
      } else
        z.push(I - Z - 1);
    }
  } else if (K + y > I - x) {
    G = Math.max(K - (I - x * 2), E), C && (G = Math.max(G, y - I + h + 1));
    for (let N = 0; N < G; N += 1) {
      const Z = N - Math.floor(N / I) * I;
      W ? l.forEach((M, $) => {
        M.column === Z && w.push($);
      }) : w.push(Z);
    }
  }
  if (s.__preventObserver__ = !0, requestAnimationFrame(() => {
    s.__preventObserver__ = !1;
  }), s.params.effect === "cards" && l.length < y + x * 2 && (w.includes(i) && w.splice(w.indexOf(i), 1), z.includes(i) && z.splice(z.indexOf(i), 1)), A && z.forEach((N) => {
    l[N].swiperLoopMoveDOM = !0, g.prepend(l[N]), l[N].swiperLoopMoveDOM = !1;
  }), k && w.forEach((N) => {
    l[N].swiperLoopMoveDOM = !0, g.append(l[N]), l[N].swiperLoopMoveDOM = !1;
  }), s.recalcSlides(), u.slidesPerView === "auto" ? s.updateSlides() : W && (z.length > 0 && A || w.length > 0 && k) && s.slides.forEach((N, Z) => {
    s.grid.updateSlide(Z, N, s.slides);
  }), u.watchSlidesProgress && s.updateSlidesOffset(), t) {
    if (z.length > 0 && A) {
      if (typeof e > "u") {
        const N = s.slidesGrid[_], M = s.slidesGrid[_ + B] - N;
        c ? s.setTranslate(s.translate - M) : (s.slideTo(_ + Math.ceil(B), 0, !1, !0), n && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - M, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - M));
      } else if (n) {
        const N = W ? z.length / u.grid.rows : z.length;
        s.slideTo(s.activeIndex + N, 0, !1, !0), s.touchEventsData.currentTranslate = s.translate;
      }
    } else if (w.length > 0 && k)
      if (typeof e > "u") {
        const N = s.slidesGrid[_], M = s.slidesGrid[_ - G] - N;
        c ? s.setTranslate(s.translate - M) : (s.slideTo(_ - G, 0, !1, !0), n && (s.touchEventsData.startTranslate = s.touchEventsData.startTranslate - M, s.touchEventsData.currentTranslate = s.touchEventsData.currentTranslate - M));
      } else {
        const N = W ? w.length / u.grid.rows : w.length;
        s.slideTo(s.activeIndex - N, 0, !1, !0);
      }
  }
  if (s.allowSlidePrev = p, s.allowSlideNext = d, s.controller && s.controller.control && !a) {
    const N = {
      slideRealIndex: e,
      direction: r,
      setTranslate: n,
      activeSlideIndex: i,
      byController: !0
    };
    Array.isArray(s.controller.control) ? s.controller.control.forEach((Z) => {
      !Z.destroyed && Z.params.loop && Z.loopFix({
        ...N,
        slideTo: Z.params.slidesPerView === u.slidesPerView ? t : !1
      });
    }) : s.controller.control instanceof s.constructor && s.controller.control.params.loop && s.controller.control.loopFix({
      ...N,
      slideTo: s.controller.control.params.slidesPerView === u.slidesPerView ? t : !1
    });
  }
  s.emit("loopFix");
}
function Bl() {
  const e = this, {
    params: t,
    slidesEl: r
  } = e;
  if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const n = [];
  e.slides.forEach((i) => {
    const o = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    n[o] = i;
  }), e.slides.forEach((i) => {
    i.removeAttribute("data-swiper-slide-index");
  }), n.forEach((i) => {
    r.append(i);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var Fl = {
  loopCreate: Nl,
  loopFix: Vl,
  loopDestroy: Bl
};
function Gl(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const r = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Yl() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var Hl = {
  setGrabCursor: Gl,
  unsetGrabCursor: Yl
};
function Xl(e, t = this) {
  function r(n) {
    if (!n || n === dt() || n === Ce()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(e);
    return !i && !n.getRootNode ? null : i || r(n.getRootNode().host);
  }
  return r(t);
}
function Mi(e, t, r) {
  const n = Ce(), {
    params: i
  } = e, o = i.edgeSwipeDetection, a = i.edgeSwipeThreshold;
  return o && (r <= a || r >= n.innerWidth - a) ? o === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function Ul(e) {
  const t = this, r = dt();
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  const i = t.touchEventsData;
  if (n.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== n.pointerId)
      return;
    i.pointerId = n.pointerId;
  } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    Mi(t, n, n.targetTouches[0].pageX);
    return;
  }
  const {
    params: o,
    touches: a,
    enabled: c
  } = t;
  if (!c || !o.simulateTouch && n.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition)
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let s = n.target;
  if (o.touchEventsTarget === "wrapper" && !Qa(s, t.wrapperEl) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
  const l = !!o.noSwipingClass && o.noSwipingClass !== "", p = n.composedPath ? n.composedPath() : n.path;
  l && n.target && n.target.shadowRoot && p && (s = p[0]);
  const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, g = !!(n.target && n.target.shadowRoot);
  if (o.noSwiping && (g ? Xl(d, s) : s.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !s.closest(o.swipeHandler))
    return;
  a.currentX = n.pageX, a.currentY = n.pageY;
  const u = a.currentX, f = a.currentY;
  if (!Mi(t, n, u))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), a.startX = u, a.startY = f, i.touchStartTime = $r(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1);
  let v = !0;
  s.matches(i.focusableElements) && (v = !1, s.nodeName === "SELECT" && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== s && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !s.matches(i.focusableElements)) && r.activeElement.blur();
  const S = v && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || S) && !s.isContentEditable && n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n);
}
function ql(e) {
  const t = dt(), r = this, n = r.touchEventsData, {
    params: i,
    touches: o,
    rtlTranslate: a,
    enabled: c
  } = r;
  if (!c || !i.simulateTouch && e.pointerType === "mouse") return;
  let s = e;
  if (s.originalEvent && (s = s.originalEvent), s.type === "pointermove" && (n.touchId !== null || s.pointerId !== n.pointerId))
    return;
  let l;
  if (s.type === "touchmove") {
    if (l = [...s.changedTouches].find((x) => x.identifier === n.touchId), !l || l.identifier !== n.touchId) return;
  } else
    l = s;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", s);
    return;
  }
  const p = l.pageX, d = l.pageY;
  if (s.preventedByNestedSwiper) {
    o.startX = p, o.startY = d;
    return;
  }
  if (!r.allowTouchMove) {
    s.target.matches(n.focusableElements) || (r.allowClick = !1), n.isTouched && (Object.assign(o, {
      startX: p,
      startY: d,
      currentX: p,
      currentY: d
    }), n.touchStartTime = $r());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (r.isVertical()) {
      if (d < o.startY && r.translate <= r.maxTranslate() || d > o.startY && r.translate >= r.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else {
      if (a && (p > o.startX && -r.translate <= r.maxTranslate() || p < o.startX && -r.translate >= r.minTranslate()))
        return;
      if (!a && (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()))
        return;
    }
  if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== s.target && s.pointerType !== "mouse" && t.activeElement.blur(), t.activeElement && s.target === t.activeElement && s.target.matches(n.focusableElements)) {
    n.isMoved = !0, r.allowClick = !1;
    return;
  }
  n.allowTouchCallbacks && r.emit("touchMove", s), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = d;
  const g = o.currentX - o.startX, u = o.currentY - o.startY;
  if (r.params.threshold && Math.sqrt(g ** 2 + u ** 2) < r.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let x;
    r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : g * g + u * u >= 25 && (x = Math.atan2(Math.abs(u), Math.abs(g)) * 180 / Math.PI, n.isScrolling = r.isHorizontal() ? x > i.touchAngle : 90 - x > i.touchAngle);
  }
  if (n.isScrolling && r.emit("touchMoveOpposite", s), typeof n.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (n.startMoving = !0), n.isScrolling || s.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  r.allowClick = !1, !i.cssMode && s.cancelable && s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation();
  let f = r.isHorizontal() ? g : u, v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement && (f = Math.abs(f) * (a ? 1 : -1), v = Math.abs(v) * (a ? 1 : -1)), o.diff = f, f *= i.touchRatio, a && (f = -f, v = -v);
  const S = r.touchesDirection;
  r.swipeDirection = f > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
  const h = r.params.loop && !i.cssMode, m = r.touchesDirection === "next" && r.allowSlideNext || r.touchesDirection === "prev" && r.allowSlidePrev;
  if (!n.isMoved) {
    if (h && m && r.loopFix({
      direction: r.swipeDirection
    }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
      const x = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      r.wrapperEl.dispatchEvent(x);
    }
    n.allowMomentumBounce = !1, i.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", s);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), i._loopSwapReset !== !1 && n.isMoved && n.allowThresholdMove && S !== r.touchesDirection && h && m && Math.abs(f) >= 1) {
    Object.assign(o, {
      startX: p,
      startY: d,
      currentX: p,
      currentY: d,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
    return;
  }
  r.emit("sliderMove", s), n.isMoved = !0, n.currentTranslate = f + n.startTranslate;
  let y = !0, E = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (E = 0), f > 0 ? (h && m && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), n.currentTranslate > r.minTranslate() && (y = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + f) ** E))) : f < 0 && (h && m && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: r.slides.length - (i.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
  }), n.currentTranslate < r.maxTranslate() && (y = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - f) ** E))), y && (s.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(f) > i.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate));
}
function Kl(e) {
  const t = this, r = t.touchEventsData;
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  let i;
  if (n.type === "touchend" || n.type === "touchcancel") {
    if (i = [...n.changedTouches].find((x) => x.identifier === r.touchId), !i || i.identifier !== r.touchId) return;
  } else {
    if (r.touchId !== null || n.pointerId !== r.pointerId) return;
    i = n;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  r.pointerId = null, r.touchId = null;
  const {
    params: a,
    touches: c,
    rtlTranslate: s,
    slidesGrid: l,
    enabled: p
  } = t;
  if (!p || !a.simulateTouch && n.pointerType === "mouse") return;
  if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) {
    r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
    return;
  }
  a.grabCursor && r.isMoved && r.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = $r(), g = d - r.touchStartTime;
  if (t.allowClick) {
    const x = n.path || n.composedPath && n.composedPath();
    t.updateClickedSlide(x && x[0] || n.target, x), t.emit("tap click", n), g < 300 && d - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n);
  }
  if (r.lastClickTime = $r(), To(() => {
    t.destroyed || (t.allowClick = !0);
  }), !r.isTouched || !r.isMoved || !t.swipeDirection || c.diff === 0 && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
    return;
  }
  r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
  let u;
  if (a.followFinger ? u = s ? t.translate : -t.translate : u = -r.currentTranslate, a.cssMode)
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: u
    });
    return;
  }
  const f = u >= -t.maxTranslate() && !t.params.loop;
  let v = 0, S = t.slidesSizesGrid[0];
  for (let x = 0; x < l.length; x += x < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const W = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof l[x + W] < "u" ? (f || u >= l[x] && u < l[x + W]) && (v = x, S = l[x + W] - l[x]) : (f || u >= l[x]) && (v = x, S = l[l.length - 1] - l[l.length - 2]);
  }
  let h = null, m = null;
  a.rewind && (t.isBeginning ? m = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
  const y = (u - l[v]) / S, E = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (g > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (y >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? h : v + E) : t.slideTo(v)), t.swipeDirection === "prev" && (y > 1 - a.longSwipesRatio ? t.slideTo(v + E) : m !== null && y < 0 && Math.abs(y) > a.longSwipesRatio ? t.slideTo(m) : t.slideTo(v));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(v + E) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : v + E), t.swipeDirection === "prev" && t.slideTo(m !== null ? m : v));
  }
}
function Oi() {
  const e = this, {
    params: t,
    el: r
  } = e;
  if (r && r.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: n,
    allowSlidePrev: i,
    snapGrid: o
  } = e, a = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const c = a && t.loop;
  if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !c) {
    const s = a ? e.virtual.slides : e.slides;
    e.slideTo(s.length - 1, 0, !1, !0);
  } else
    e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function Jl(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Zl() {
  const e = this, {
    wrapperEl: t,
    rtlTranslate: r,
    enabled: n
  } = e;
  if (!n) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / o, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function Ql(e) {
  const t = this;
  Ir(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update();
}
function ec() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const _o = (e, t) => {
  const r = dt(), {
    params: n,
    el: i,
    wrapperEl: o,
    device: a
  } = e, c = !!n.nested, s = t === "on" ? "addEventListener" : "removeEventListener", l = t;
  !i || typeof i == "string" || (r[s]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: c
  }), i[s]("touchstart", e.onTouchStart, {
    passive: !1
  }), i[s]("pointerdown", e.onTouchStart, {
    passive: !1
  }), r[s]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: c
  }), r[s]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: c
  }), r[s]("touchend", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerup", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), r[s]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerout", e.onTouchEnd, {
    passive: !0
  }), r[s]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), r[s]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (n.preventClicks || n.preventClicksPropagation) && i[s]("click", e.onClick, !0), n.cssMode && o[s]("scroll", e.onScroll), n.updateOnWindowResize ? e[l](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Oi, !0) : e[l]("observerUpdate", Oi, !0), i[s]("load", e.onLoad, {
    capture: !0
  }));
};
function tc() {
  const e = this, {
    params: t
  } = e;
  e.onTouchStart = Ul.bind(e), e.onTouchMove = ql.bind(e), e.onTouchEnd = Kl.bind(e), e.onDocumentTouchStart = ec.bind(e), t.cssMode && (e.onScroll = Zl.bind(e)), e.onClick = Jl.bind(e), e.onLoad = Ql.bind(e), _o(e, "on");
}
function rc() {
  _o(this, "off");
}
var nc = {
  attachEvents: tc,
  detachEvents: rc
};
const Ii = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function ic() {
  const e = this, {
    realIndex: t,
    initialized: r,
    params: n,
    el: i
  } = e, o = n.breakpoints;
  if (!o || o && Object.keys(o).length === 0) return;
  const a = dt(), c = n.breakpointsBase === "window" || !n.breakpointsBase ? n.breakpointsBase : "container", s = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : a.querySelector(n.breakpointsBase), l = e.getBreakpoint(o, c, s);
  if (!l || e.currentBreakpoint === l) return;
  const d = (l in o ? o[l] : void 0) || e.originalParams, g = Ii(e, n), u = Ii(e, d), f = e.params.grabCursor, v = d.grabCursor, S = n.enabled;
  g && !u ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !g && u && (i.classList.add(`${n.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), f && !v ? e.unsetGrabCursor() : !f && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((W) => {
    if (typeof d[W] > "u") return;
    const z = n[W] && n[W].enabled, w = d[W] && d[W].enabled;
    z && !w && e[W].disable(), !z && w && e[W].enable();
  });
  const h = d.direction && d.direction !== n.direction, m = n.loop && (d.slidesPerView !== n.slidesPerView || h), y = n.loop;
  h && r && e.changeDirection(), $e(e.params, d);
  const E = e.params.enabled, x = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), S && !E ? e.disable() : !S && E && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), r && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && x ? (e.loopCreate(t), e.updateSlides()) : y && !x && e.loopDestroy()), e.emit("breakpoint", d);
}
function oc(e, t = "window", r) {
  if (!e || t === "container" && !r) return;
  let n = !1;
  const i = Ce(), o = t === "window" ? i.innerHeight : r.clientHeight, a = Object.keys(e).map((c) => {
    if (typeof c == "string" && c.indexOf("@") === 0) {
      const s = parseFloat(c.substr(1));
      return {
        value: o * s,
        point: c
      };
    }
    return {
      value: c,
      point: c
    };
  });
  a.sort((c, s) => parseInt(c.value, 10) - parseInt(s.value, 10));
  for (let c = 0; c < a.length; c += 1) {
    const {
      point: s,
      value: l
    } = a[c];
    t === "window" ? i.matchMedia(`(min-width: ${l}px)`).matches && (n = s) : l <= r.clientWidth && (n = s);
  }
  return n || "max";
}
var sc = {
  setBreakpoint: ic,
  getBreakpoint: oc
};
function ac(e, t) {
  const r = [];
  return e.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && r.push(t + i);
    }) : typeof n == "string" && r.push(t + n);
  }), r;
}
function lc() {
  const e = this, {
    classNames: t,
    params: r,
    rtl: n,
    el: i,
    device: o
  } = e, a = ac(["initialized", r.direction, {
    "free-mode": e.params.freeMode && r.freeMode.enabled
  }, {
    autoheight: r.autoHeight
  }, {
    rtl: n
  }, {
    grid: r.grid && r.grid.rows > 1
  }, {
    "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column"
  }, {
    android: o.android
  }, {
    ios: o.ios
  }, {
    "css-mode": r.cssMode
  }, {
    centered: r.cssMode && r.centeredSlides
  }, {
    "watch-progress": r.watchSlidesProgress
  }], r.containerModifierClass);
  t.push(...a), i.classList.add(...t), e.emitContainerClasses();
}
function cc() {
  const e = this, {
    el: t,
    classNames: r
  } = e;
  !t || typeof t == "string" || (t.classList.remove(...r), e.emitContainerClasses());
}
var uc = {
  addClasses: lc,
  removeClasses: cc
};
function dc() {
  const e = this, {
    isLocked: t,
    params: r
  } = e, {
    slidesOffsetBefore: n
  } = r;
  if (n) {
    const i = e.slides.length - 1, o = e.slidesGrid[i] + e.slidesSizesGrid[i] + n * 2;
    e.isLocked = e.size > o;
  } else
    e.isLocked = e.snapGrid.length === 1;
  r.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), r.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var fc = {
  checkOverflow: dc
}, _n = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function pc(e, t) {
  return function(n = {}) {
    const i = Object.keys(n)[0], o = n[i];
    if (typeof o != "object" || o === null) {
      $e(t, n);
      return;
    }
    if (e[i] === !0 && (e[i] = {
      enabled: !0
    }), i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), !(i in e && "enabled" in o)) {
      $e(t, n);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {
      enabled: !1
    }), $e(t, n);
  };
}
const dn = {
  eventsEmitter: ul,
  update: Sl,
  translate: Ml,
  transition: Pl,
  slide: Wl,
  loop: Fl,
  grabCursor: Hl,
  events: nc,
  breakpoints: sc,
  checkOverflow: fc,
  classes: uc
}, fn = {};
let Dn = class rt {
  constructor(...t) {
    let r, n;
    t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? n = t[0] : [r, n] = t, n || (n = {}), n = $e({}, n), r && !n.el && (n.el = r);
    const i = dt();
    if (n.el && typeof n.el == "string" && i.querySelectorAll(n.el).length > 1) {
      const s = [];
      return i.querySelectorAll(n.el).forEach((l) => {
        const p = $e({}, n, {
          el: l
        });
        s.push(new rt(p));
      }), s;
    }
    const o = this;
    o.__swiper__ = !0, o.support = zo(), o.device = Mo({
      userAgent: n.userAgent
    }), o.browser = Oo(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], n.modules && Array.isArray(n.modules) && n.modules.forEach((s) => {
      typeof s == "function" && o.modules.indexOf(s) < 0 && o.modules.push(s);
    });
    const a = {};
    o.modules.forEach((s) => {
      s({
        params: n,
        swiper: o,
        extendParams: pc(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o)
      });
    });
    const c = $e({}, _n, a);
    return o.params = $e({}, c, fn, n), o.originalParams = $e({}, o.params), o.passedParams = $e({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((s) => {
      o.on(s, o.params.on[s]);
    }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
      enabled: o.params.enabled,
      el: r,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return o.params.direction === "horizontal";
      },
      isVertical() {
        return o.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: o.params.allowSlideNext,
      allowSlidePrev: o.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: o.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: o.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), o.emit("_swiper"), o.params.init && o.init(), o;
  }
  getDirectionLabel(t) {
    return this.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[t];
  }
  getSlideIndex(t) {
    const {
      slidesEl: r,
      params: n
    } = this, i = Ye(r, `.${n.slideClass}, swiper-slide`), o = Ar(i[0]);
    return Ar(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.find((r) => r.getAttribute("data-swiper-slide-index") * 1 === t));
  }
  getSlideIndexWhenGrid(t) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? t = Math.floor(t / this.params.grid.rows) : this.params.grid.fill === "row" && (t = t % Math.ceil(this.slides.length / this.params.grid.rows))), t;
  }
  recalcSlides() {
    const t = this, {
      slidesEl: r,
      params: n
    } = t;
    t.slides = Ye(r, `.${n.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, r) {
    const n = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = n.minTranslate(), a = (n.maxTranslate() - i) * t + i;
    n.translateTo(a, typeof r > "u" ? 0 : r), n.updateActiveIndex(), n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = t.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(t) {
    const r = this;
    return r.destroyed ? "" : t.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(r.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = [];
    t.slides.forEach((n) => {
      const i = t.getSlideClasses(n);
      r.push({
        slideEl: n,
        classNames: i
      }), t.emit("_slideClass", n, i);
    }), t.emit("_slideClasses", r);
  }
  slidesPerViewDynamic(t = "current", r = !1) {
    const n = this, {
      params: i,
      slides: o,
      slidesGrid: a,
      slidesSizesGrid: c,
      size: s,
      activeIndex: l
    } = n;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = o[l] ? Math.ceil(o[l].swiperSlideSize) : 0, g;
      for (let u = l + 1; u < o.length; u += 1)
        o[u] && !g && (d += Math.ceil(o[u].swiperSlideSize), p += 1, d > s && (g = !0));
      for (let u = l - 1; u >= 0; u -= 1)
        o[u] && !g && (d += o[u].swiperSlideSize, p += 1, d > s && (g = !0));
    } else if (t === "current")
      for (let d = l + 1; d < o.length; d += 1)
        (r ? a[d] + c[d] - a[l] < s : a[d] - a[l] < s) && (p += 1);
    else
      for (let d = l - 1; d >= 0; d -= 1)
        a[l] - a[d] < s && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: r,
      params: n
    } = t;
    n.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
      a.complete && Ir(t, a);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate, c = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      i(), n.autoHeight && t.updateAutoHeight();
    else {
      if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && t.isEnd && !n.centeredSlides) {
        const a = t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(a.length - 1, 0, !1, !0);
      } else
        o = t.slideTo(t.activeIndex, 0, !1, !0);
      o || i();
    }
    n.watchOverflow && r !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, r = !0) {
    const n = this, i = n.params.direction;
    return t || (t = i === "horizontal" ? "vertical" : "horizontal"), t === i || t !== "horizontal" && t !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${t}`), n.emitContainerClasses(), n.params.direction = t, n.slides.forEach((o) => {
      t === "vertical" ? o.style.width = "" : o.style.height = "";
    }), n.emit("changeDirection"), r && n.update()), n;
  }
  changeLanguageDirection(t) {
    const r = this;
    r.rtl && t === "rtl" || !r.rtl && t === "ltr" || (r.rtl = t === "rtl", r.rtlTranslate = r.params.direction === "horizontal" && r.rtl, r.rtl ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`), r.el.dir = "rtl") : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`), r.el.dir = "ltr"), r.update());
  }
  mount(t) {
    const r = this;
    if (r.mounted) return !0;
    let n = t || r.params.el;
    if (typeof n == "string" && (n = document.querySelector(n)), !n)
      return !1;
    n.swiper = r, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === r.params.swiperElementNodeName.toUpperCase() && (r.isElement = !0);
    const i = () => `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : Ye(n, i())[0];
    return !a && r.params.createElements && (a = Rr("div", r.params.wrapperClass), n.append(a), Ye(n, `.${r.params.slideClass}`).forEach((c) => {
      a.append(c);
    })), Object.assign(r, {
      el: n,
      wrapperEl: a,
      slidesEl: r.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
      hostEl: r.isElement ? n.parentNode.host : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || ct(n, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || ct(n, "direction") === "rtl"),
      wrongRTL: ct(a, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const r = this;
    if (r.initialized || r.mount(t) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(void 0, !0), r.attachEvents();
    const i = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && i.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((o) => {
      o.complete ? Ir(r, o) : o.addEventListener("load", (a) => {
        Ir(r, a.target);
      });
    }), In(r), r.initialized = !0, In(r), r.emit("init"), r.emit("afterInit"), r;
  }
  destroy(t = !0, r = !0) {
    const n = this, {
      params: i,
      el: o,
      wrapperEl: a,
      slides: c
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), r && (n.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), a && a.removeAttribute("style"), c && c.length && c.forEach((s) => {
      s.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), s.removeAttribute("style"), s.removeAttribute("data-swiper-slide-index");
    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((s) => {
      n.off(s);
    }), t !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), qa(n)), n.destroyed = !0), null;
  }
  static extendDefaults(t) {
    $e(fn, t);
  }
  static get extendedDefaults() {
    return fn;
  }
  static get defaults() {
    return _n;
  }
  static installModule(t) {
    rt.prototype.__modules__ || (rt.prototype.__modules__ = []);
    const r = rt.prototype.__modules__;
    typeof t == "function" && r.indexOf(t) < 0 && r.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((r) => rt.installModule(r)), rt) : (rt.installModule(t), rt);
  }
};
Object.keys(dn).forEach((e) => {
  Object.keys(dn[e]).forEach((t) => {
    Dn.prototype[t] = dn[e][t];
  });
});
Dn.use([ll, cl]);
const Po = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_snapToSlideEdge",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function bt(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function Nt(e, t) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : bt(t[n]) && bt(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : Nt(e[n], t[n]) : e[n] = t[n];
  });
}
function ko(e = {}) {
  return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function $o(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function Lo(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function Ro(e = "") {
  const t = e.split(" ").map((n) => n.trim()).filter((n) => !!n), r = [];
  return t.forEach((n) => {
    r.indexOf(n) < 0 && r.push(n);
  }), r.join(" ");
}
function hc(e = "") {
  return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function gc({
  swiper: e,
  slides: t,
  passedParams: r,
  changedParams: n,
  nextEl: i,
  prevEl: o,
  scrollbarEl: a,
  paginationEl: c
}) {
  const s = n.filter((w) => w !== "children" && w !== "direction" && w !== "wrapperClass"), {
    params: l,
    pagination: p,
    navigation: d,
    scrollbar: g,
    virtual: u,
    thumbs: f
  } = e;
  let v, S, h, m, y, E, x, W;
  n.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && l.thumbs && (!l.thumbs.swiper || l.thumbs.swiper.destroyed) && (v = !0), n.includes("controller") && r.controller && r.controller.control && l.controller && !l.controller.control && (S = !0), n.includes("pagination") && r.pagination && (r.pagination.el || c) && (l.pagination || l.pagination === !1) && p && !p.el && (h = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (l.scrollbar || l.scrollbar === !1) && g && !g.el && (m = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || i) && (l.navigation || l.navigation === !1) && d && !d.prevEl && !d.nextEl && (y = !0);
  const z = (w) => {
    e[w] && (e[w].destroy(), w === "navigation" ? (e.isElement && (e[w].prevEl.remove(), e[w].nextEl.remove()), l[w].prevEl = void 0, l[w].nextEl = void 0, e[w].prevEl = void 0, e[w].nextEl = void 0) : (e.isElement && e[w].el.remove(), l[w].el = void 0, e[w].el = void 0));
  };
  n.includes("loop") && e.isElement && (l.loop && !r.loop ? E = !0 : !l.loop && r.loop ? x = !0 : W = !0), s.forEach((w) => {
    if (bt(l[w]) && bt(r[w]))
      Object.assign(l[w], r[w]), (w === "navigation" || w === "pagination" || w === "scrollbar") && "enabled" in r[w] && !r[w].enabled && z(w);
    else {
      const I = r[w];
      (I === !0 || I === !1) && (w === "navigation" || w === "pagination" || w === "scrollbar") ? I === !1 && z(w) : l[w] = r[w];
    }
  }), s.includes("controller") && !S && e.controller && e.controller.control && l.controller && l.controller.control && (e.controller.control = l.controller.control), n.includes("children") && t && u && l.virtual.enabled ? (u.slides = t, u.update(!0)) : n.includes("virtual") && u && l.virtual.enabled && (t && (u.slides = t), u.update(!0)), n.includes("children") && t && l.loop && (W = !0), v && f.init() && f.update(!0), S && (e.controller.control = l.controller.control), h && (e.isElement && (!c || typeof c == "string") && (c = document.createElement("div"), c.classList.add("swiper-pagination"), c.part.add("pagination"), e.el.appendChild(c)), c && (l.pagination.el = c), p.init(), p.render(), p.update()), m && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), e.el.appendChild(a)), a && (l.scrollbar.el = a), g.init(), g.updateSize(), g.setTranslate()), y && (e.isElement && ((!i || typeof i == "string") && (i = document.createElement("div"), i.classList.add("swiper-button-next"), Dr(i, e.navigation.arrowSvg), i.part.add("button-next"), e.el.appendChild(i)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), Dr(o, e.navigation.arrowSvg), o.part.add("button-prev"), e.el.appendChild(o))), i && (l.navigation.nextEl = i), o && (l.navigation.prevEl = o), d.init(), d.update()), n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && e.changeDirection(r.direction, !1), (E || W) && e.loopDestroy(), (x || W) && e.loopCreate(), e.update();
}
function mc(e = {}, t = !0) {
  const r = {
    on: {}
  }, n = {}, i = {};
  Nt(r, _n), r._emitClasses = !0, r.init = !1;
  const o = {}, a = Po.map((s) => s.replace(/_/, "")), c = Object.assign({}, e);
  return Object.keys(c).forEach((s) => {
    typeof e[s] > "u" || (a.indexOf(s) >= 0 ? bt(e[s]) ? (r[s] = {}, i[s] = {}, Nt(r[s], e[s]), Nt(i[s], e[s])) : (r[s] = e[s], i[s] = e[s]) : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function" ? t ? n[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : r.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : o[s] = e[s]);
  }), ["navigation", "pagination", "scrollbar"].forEach((s) => {
    r[s] === !0 && (r[s] = {}), r[s] === !1 && delete r[s];
  }), {
    params: r,
    passedParams: i,
    rest: o,
    events: n
  };
}
function vc({
  el: e,
  nextEl: t,
  prevEl: r,
  paginationEl: n,
  scrollbarEl: i,
  swiper: o
}, a) {
  ko(a) && t && r && (o.params.navigation.nextEl = t, o.originalParams.navigation.nextEl = t, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), $o(a) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), Lo(a) && i && (o.params.scrollbar.el = i, o.originalParams.scrollbar.el = i), o.init(e);
}
function yc(e, t, r, n, i) {
  const o = [];
  if (!t) return o;
  const a = (s) => {
    o.indexOf(s) < 0 && o.push(s);
  };
  if (r && n) {
    const s = n.map(i), l = r.map(i);
    s.join("") !== l.join("") && a("children"), n.length !== r.length && a("children");
  }
  return Po.filter((s) => s[0] === "_").map((s) => s.replace(/_/, "")).forEach((s) => {
    if (s in e && s in t)
      if (bt(e[s]) && bt(t[s])) {
        const l = Object.keys(e[s]), p = Object.keys(t[s]);
        l.length !== p.length ? a(s) : (l.forEach((d) => {
          e[s][d] !== t[s][d] && a(s);
        }), p.forEach((d) => {
          e[s][d] !== t[s][d] && a(s);
        }));
      } else e[s] !== t[s] && a(s);
  }), o;
}
const bc = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jr.apply(this, arguments);
}
function Ao(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function Do(e) {
  const t = [];
  return le.Children.toArray(e).forEach((r) => {
    Ao(r) ? t.push(r) : r.props && r.props.children && Do(r.props.children).forEach((n) => t.push(n));
  }), t;
}
function xc(e) {
  const t = [], r = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return le.Children.toArray(e).forEach((n) => {
    if (Ao(n))
      t.push(n);
    else if (n.props && n.props.slot && r[n.props.slot])
      r[n.props.slot].push(n);
    else if (n.props && n.props.children) {
      const i = Do(n.props.children);
      i.length > 0 ? i.forEach((o) => t.push(o)) : r["container-end"].push(n);
    } else
      r["container-end"].push(n);
  }), {
    slides: t,
    slots: r
  };
}
function Sc(e, t, r) {
  if (!r) return null;
  const n = (p) => {
    let d = p;
    return p < 0 ? d = t.length + p : d >= t.length && (d = d - t.length), d;
  }, i = e.isHorizontal() ? {
    [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
  } : {
    top: `${r.offset}px`
  }, {
    from: o,
    to: a
  } = r, c = e.params.loop ? -t.length : 0, s = e.params.loop ? t.length * 2 : t.length, l = [];
  for (let p = c; p < s; p += 1)
    p >= o && p <= a && l.push(t[n(p)]);
  return l.map((p, d) => /* @__PURE__ */ le.cloneElement(p, {
    swiper: e,
    style: i,
    key: p.props.virtualIndex || p.key || `slide-${d}`
  }));
}
function or(e, t) {
  return typeof window > "u" ? Ge(e, t) : $n(e, t);
}
const _i = /* @__PURE__ */ co(null), jo = /* @__PURE__ */ co(null), wc = () => Zs(jo), Wo = /* @__PURE__ */ Gt(({
  className: e,
  tag: t = "div",
  wrapperTag: r = "div",
  children: n,
  onSwiper: i,
  ...o
} = {}, a) => {
  let c = !1;
  const [s, l] = Me("swiper"), [p, d] = Me(null), [g, u] = Me(!1), f = de(!1), v = de(null), S = de(null), h = de(null), m = de(null), y = de(null), E = de(null), x = de(null), W = de(null), {
    params: z,
    passedParams: w,
    rest: I,
    events: C
  } = mc(o), {
    slides: _,
    slots: k
  } = xc(n), A = () => {
    u(!g);
  };
  Object.assign(z.on, {
    _containerClasses(N, Z) {
      l(Z);
    }
  });
  const B = () => {
    Object.assign(z.on, C), c = !0;
    const N = {
      ...z
    };
    if (delete N.wrapperClass, S.current = new Dn(N), S.current.virtual && S.current.params.virtual.enabled) {
      S.current.virtual.slides = _;
      const Z = {
        cache: !1,
        slides: _,
        renderExternal: d,
        renderExternalUpdate: !1
      };
      Nt(S.current.params.virtual, Z), Nt(S.current.originalParams.virtual, Z);
    }
  };
  v.current || B(), S.current && S.current.on("_beforeBreakpoint", A);
  const G = () => {
    c || !C || !S.current || Object.keys(C).forEach((N) => {
      S.current.on(N, C[N]);
    });
  }, X = () => {
    !C || !S.current || Object.keys(C).forEach((N) => {
      S.current.off(N, C[N]);
    });
  };
  Ge(() => () => {
    S.current && S.current.off("_beforeBreakpoint", A);
  }), Ge(() => {
    !f.current && S.current && (S.current.emitSlidesClasses(), f.current = !0);
  }), or(() => {
    if (a && (a.current = v.current), !!v.current)
      return S.current.destroyed && B(), vc({
        el: v.current,
        nextEl: y.current,
        prevEl: E.current,
        paginationEl: x.current,
        scrollbarEl: W.current,
        swiper: S.current
      }, z), i && !S.current.destroyed && i(S.current), () => {
        S.current && !S.current.destroyed && S.current.destroy(!0, !1);
      };
  }, []), or(() => {
    G();
    const N = yc(w, h.current, _, m.current, (Z) => Z.key);
    return h.current = w, m.current = _, N.length && S.current && !S.current.destroyed && gc({
      swiper: S.current,
      slides: _,
      passedParams: w,
      changedParams: N,
      nextEl: y.current,
      prevEl: E.current,
      scrollbarEl: W.current,
      paginationEl: x.current
    }), () => {
      X();
    };
  }), or(() => {
    bc(S.current);
  }, [p]);
  function K() {
    return z.virtual ? Sc(S.current, _, p) : _.map((N, Z) => /* @__PURE__ */ le.cloneElement(N, {
      swiper: S.current,
      swiperSlideIndex: Z
    }));
  }
  return /* @__PURE__ */ le.createElement(t, jr({
    ref: v,
    className: Ro(`${s}${e ? ` ${e}` : ""}`)
  }, I), /* @__PURE__ */ le.createElement(jo.Provider, {
    value: S.current
  }, k["container-start"], /* @__PURE__ */ le.createElement(r, {
    className: hc(z.wrapperClass)
  }, k["wrapper-start"], K(), k["wrapper-end"]), ko(z) && /* @__PURE__ */ le.createElement(le.Fragment, null, /* @__PURE__ */ le.createElement("div", {
    ref: E,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ le.createElement("div", {
    ref: y,
    className: "swiper-button-next"
  })), Lo(z) && /* @__PURE__ */ le.createElement("div", {
    ref: W,
    className: "swiper-scrollbar"
  }), $o(z) && /* @__PURE__ */ le.createElement("div", {
    ref: x,
    className: "swiper-pagination"
  }), k["container-end"]));
});
Wo.displayName = "Swiper";
const No = /* @__PURE__ */ Gt(({
  tag: e = "div",
  children: t,
  className: r = "",
  swiper: n,
  zoom: i,
  lazy: o,
  virtualIndex: a,
  swiperSlideIndex: c,
  ...s
} = {}, l) => {
  const p = de(null), [d, g] = Me("swiper-slide"), [u, f] = Me(!1);
  function v(y, E, x) {
    E === p.current && g(x);
  }
  or(() => {
    if (typeof c < "u" && (p.current.swiperSlideIndex = c), l && (l.current = p.current), !(!p.current || !n)) {
      if (n.destroyed) {
        d !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return n.on("_slideClass", v), () => {
        n && n.off("_slideClass", v);
      };
    }
  }), or(() => {
    n && p.current && !n.destroyed && g(n.getSlideClasses(p.current));
  }, [n]);
  const S = {
    isActive: d.indexOf("swiper-slide-active") >= 0,
    isVisible: d.indexOf("swiper-slide-visible") >= 0,
    isPrev: d.indexOf("swiper-slide-prev") >= 0,
    isNext: d.indexOf("swiper-slide-next") >= 0
  }, h = () => typeof t == "function" ? t(S) : t, m = () => {
    f(!0);
  };
  return /* @__PURE__ */ le.createElement(e, jr({
    ref: p,
    className: Ro(`${d}${r ? ` ${r}` : ""}`),
    "data-swiper-slide-index": a,
    onLoad: m
  }, s), i && /* @__PURE__ */ le.createElement(_i.Provider, {
    value: S
  }, /* @__PURE__ */ le.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof i == "number" ? i : void 0
  }, h(), o && !u && /* @__PURE__ */ le.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (y) => {
      y && (y.lazyPreloaderManaged = !0);
    }
  }))), !i && /* @__PURE__ */ le.createElement(_i.Provider, {
    value: S
  }, h(), o && !u && /* @__PURE__ */ le.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (y) => {
      y && (y.lazyPreloaderManaged = !0);
    }
  })));
});
No.displayName = "SwiperSlide";
const Pi = ({ type: e }) => {
  const t = wc();
  return /* @__PURE__ */ D.jsxs(
    jt,
    {
      onClick: () => e === "next" ? t.slideNext() : t.slidePrev(),
      size: "large",
      sx: {
        position: "absolute",
        top: "50%",
        ...e === "next" ? { right: 20 } : { left: 20 },
        zIndex: 1,
        transform: "translateY(-100%)"
      },
      children: [
        e === "prev" && /* @__PURE__ */ D.jsx(ta, {}),
        e === "next" && /* @__PURE__ */ D.jsx(fo, {})
      ]
    }
  );
}, Ec = ({ swiperRef: e, onClose: t, current: r, total: n, currentImage: i }, o) => /* @__PURE__ */ D.jsxs(
  Ft,
  {
    ref: o,
    slot: "container-start",
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: { background: "#000", px: 2, height: 68, width: 1 },
    children: [
      /* @__PURE__ */ D.jsx(yt, { variant: "h3", children: `${r} / ${n}` }),
      /* @__PURE__ */ D.jsxs(Ft, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ D.jsx(
          jt,
          {
            color: "secondary",
            onClick: () => {
              var a, c, s;
              return (s = (c = (a = e == null ? void 0 : e.current) == null ? void 0 : a.swiper) == null ? void 0 : c.zoom) == null ? void 0 : s.in();
            },
            children: /* @__PURE__ */ D.jsx(ra, { size: 24 })
          }
        ),
        /* @__PURE__ */ D.jsx(
          jt,
          {
            color: "secondary",
            onClick: () => {
              var a, c, s;
              return (s = (c = (a = e == null ? void 0 : e.current) == null ? void 0 : a.swiper) == null ? void 0 : c.zoom) == null ? void 0 : s.out();
            },
            children: /* @__PURE__ */ D.jsx(na, { size: 24 })
          }
        ),
        /* @__PURE__ */ D.jsx(
          jt,
          {
            color: "secondary",
            onClick: () => {
              const a = document.createElement("a");
              a.href = i == null ? void 0 : i.url, a.download = i == null ? void 0 : i.name, document.body.appendChild(a), a.click(), document.body.removeChild(a);
            },
            children: /* @__PURE__ */ D.jsx(ia, { size: 24 })
          }
        ),
        /* @__PURE__ */ D.jsx(
          jt,
          {
            color: "secondary",
            onClick: t,
            children: /* @__PURE__ */ D.jsx(uo, { size: 24 })
          }
        )
      ] })
    ]
  }
), Tc = Gt(Ec), Sp = ({
  items: e,
  isOpen: t,
  onClose: r,
  activeId: n
}) => {
  const i = de(null), [o, a] = Me(1), [c, s] = Me(0), l = e == null ? void 0 : e.findIndex((p) => (p == null ? void 0 : p.id) === n);
  return /* @__PURE__ */ D.jsx(Hs, { children: /* @__PURE__ */ D.jsx(
    Xs,
    {
      sx: (p) => ({ color: "#fff", zIndex: p.zIndex.drawer + 1 }),
      open: t,
      children: /* @__PURE__ */ D.jsxs(Ft, { width: 1, height: 1, children: [
        /* @__PURE__ */ D.jsx(
          Tc,
          {
            swiperRef: i,
            current: o,
            total: c,
            onClose: r,
            currentImage: e == null ? void 0 : e[o - 1]
          }
        ),
        /* @__PURE__ */ D.jsxs(
          Ie,
          {
            ref: i,
            component: Wo,
            style: {
              width: "100%",
              flex: 1,
              minHeight: 0,
              // '--swiper-navigation-color': '#fff',
              "--swiper-pagination-color": "#fff"
            },
            initialSlide: l,
            zoom: { toggle: !1 },
            navigation: !0,
            pagination: {
              clickable: !0
            },
            modules: [il, nl],
            className: "mySwiper",
            onSwiper: (p) => s(p.slides.length),
            onSlideChange: (p) => a(p.activeIndex + 1),
            sx: {
              "& .swiper-zoom-container": {
                cursor: "grab"
              },
              "& .swiper-zoom-container:active": {
                cursor: "grabbing"
              }
            },
            children: [
              e == null ? void 0 : e.map((p) => /* @__PURE__ */ D.jsx(No, { children: /* @__PURE__ */ D.jsx("div", { className: "swiper-zoom-container", children: /* @__PURE__ */ D.jsx(
                "img",
                {
                  alt: p == null ? void 0 : p.name,
                  src: p == null ? void 0 : p.url,
                  style: {
                    display: "block",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%"
                  }
                }
              ) }) }, p == null ? void 0 : p.id)),
              0 < c && o > 1 && /* @__PURE__ */ D.jsx(Pi, { type: "prev" }),
              0 < c && o < c && /* @__PURE__ */ D.jsx(Pi, { type: "next" })
            ]
          }
        )
      ] })
    }
  ) });
};
function xt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), ki = "$$material";
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ce.apply(null, arguments);
}
function ft(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function zc(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Mc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Oc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ic = /[A-Z]|^ms/g, _c = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vo = function(t) {
  return t.charCodeAt(1) === 45;
}, $i = function(t) {
  return t != null && typeof t != "boolean";
}, pn = /* @__PURE__ */ Oc(function(e) {
  return Vo(e) ? e : e.replace(Ic, "-$&").toLowerCase();
}), Li = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(_c, function(n, i, o) {
          return ut = {
            name: i,
            styles: o,
            next: ut
          }, i;
        });
  }
  return Mc[t] !== 1 && !Vo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Wr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return ut = {
          name: i.name,
          styles: i.styles,
          next: ut
        }, i.name;
      var o = r;
      if (o.styles !== void 0) {
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ut = {
              name: a.name,
              styles: a.styles,
              next: ut
            }, a = a.next;
        var c = o.styles + ";";
        return c;
      }
      return Pc(e, t, r);
    }
  }
  var s = r;
  return s;
}
function Pc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Wr(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object") {
        var c = a;
        $i(c) && (n += pn(o) + ":" + Li(o, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var s = 0; s < a.length; s++)
          $i(a[s]) && (n += pn(o) + ":" + Li(o, a[s]) + ";");
      else {
        var l = Wr(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += pn(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var Ri = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function kc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  ut = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, i += Wr(r, t, o);
  else {
    var a = o;
    i += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += Wr(r, t, e[c]), n) {
      var s = o;
      i += s[c];
    }
  Ri.lastIndex = 0;
  for (var l = "", p; (p = Ri.exec(i)) !== null; )
    l += "-" + p[1];
  var d = zc(i) + l;
  return {
    name: d,
    styles: i,
    next: ut
  };
}
var Pn = { exports: {} }, Or = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function $c() {
  if (Ai) return se;
  Ai = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, m = e ? Symbol.for("react.scope") : 60119;
  function y(x) {
    if (typeof x == "object" && x !== null) {
      var W = x.$$typeof;
      switch (W) {
        case t:
          switch (x = x.type, x) {
            case s:
            case l:
            case n:
            case o:
            case i:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case c:
                case p:
                case f:
                case u:
                case a:
                  return x;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function E(x) {
    return y(x) === l;
  }
  return se.AsyncMode = s, se.ConcurrentMode = l, se.ContextConsumer = c, se.ContextProvider = a, se.Element = t, se.ForwardRef = p, se.Fragment = n, se.Lazy = f, se.Memo = u, se.Portal = r, se.Profiler = o, se.StrictMode = i, se.Suspense = d, se.isAsyncMode = function(x) {
    return E(x) || y(x) === s;
  }, se.isConcurrentMode = E, se.isContextConsumer = function(x) {
    return y(x) === c;
  }, se.isContextProvider = function(x) {
    return y(x) === a;
  }, se.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, se.isForwardRef = function(x) {
    return y(x) === p;
  }, se.isFragment = function(x) {
    return y(x) === n;
  }, se.isLazy = function(x) {
    return y(x) === f;
  }, se.isMemo = function(x) {
    return y(x) === u;
  }, se.isPortal = function(x) {
    return y(x) === r;
  }, se.isProfiler = function(x) {
    return y(x) === o;
  }, se.isStrictMode = function(x) {
    return y(x) === i;
  }, se.isSuspense = function(x) {
    return y(x) === d;
  }, se.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === o || x === i || x === d || x === g || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === u || x.$$typeof === a || x.$$typeof === c || x.$$typeof === p || x.$$typeof === S || x.$$typeof === h || x.$$typeof === m || x.$$typeof === v);
  }, se.typeOf = y, se;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function Lc() {
  return Di || (Di = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, m = e ? Symbol.for("react.scope") : 60119;
    function y(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === l || j === o || j === i || j === d || j === g || typeof j == "object" && j !== null && (j.$$typeof === f || j.$$typeof === u || j.$$typeof === a || j.$$typeof === c || j.$$typeof === p || j.$$typeof === S || j.$$typeof === h || j.$$typeof === m || j.$$typeof === v);
    }
    function E(j) {
      if (typeof j == "object" && j !== null) {
        var re = j.$$typeof;
        switch (re) {
          case t:
            var fe = j.type;
            switch (fe) {
              case s:
              case l:
              case n:
              case o:
              case i:
              case d:
                return fe;
              default:
                var we = fe && fe.$$typeof;
                switch (we) {
                  case c:
                  case p:
                  case f:
                  case u:
                  case a:
                    return we;
                  default:
                    return re;
                }
            }
          case r:
            return re;
        }
      }
    }
    var x = s, W = l, z = c, w = a, I = t, C = p, _ = n, k = f, A = u, B = r, G = o, X = i, K = d, N = !1;
    function Z(j) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(j) || E(j) === s;
    }
    function M(j) {
      return E(j) === l;
    }
    function $(j) {
      return E(j) === c;
    }
    function q(j) {
      return E(j) === a;
    }
    function U(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function T(j) {
      return E(j) === p;
    }
    function P(j) {
      return E(j) === n;
    }
    function O(j) {
      return E(j) === f;
    }
    function F(j) {
      return E(j) === u;
    }
    function R(j) {
      return E(j) === r;
    }
    function V(j) {
      return E(j) === o;
    }
    function Y(j) {
      return E(j) === i;
    }
    function J(j) {
      return E(j) === d;
    }
    ae.AsyncMode = x, ae.ConcurrentMode = W, ae.ContextConsumer = z, ae.ContextProvider = w, ae.Element = I, ae.ForwardRef = C, ae.Fragment = _, ae.Lazy = k, ae.Memo = A, ae.Portal = B, ae.Profiler = G, ae.StrictMode = X, ae.Suspense = K, ae.isAsyncMode = Z, ae.isConcurrentMode = M, ae.isContextConsumer = $, ae.isContextProvider = q, ae.isElement = U, ae.isForwardRef = T, ae.isFragment = P, ae.isLazy = O, ae.isMemo = F, ae.isPortal = R, ae.isProfiler = V, ae.isStrictMode = Y, ae.isSuspense = J, ae.isValidElementType = y, ae.typeOf = E;
  }()), ae;
}
var ji;
function Bo() {
  return ji || (ji = 1, process.env.NODE_ENV === "production" ? Or.exports = $c() : Or.exports = Lc()), Or.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var hn, Wi;
function Rc() {
  if (Wi) return hn;
  Wi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var s = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        l[p] = p;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return hn = i() ? Object.assign : function(o, a) {
    for (var c, s = n(o), l, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var d in c)
        t.call(c, d) && (s[d] = c[d]);
      if (e) {
        l = e(c);
        for (var g = 0; g < l.length; g++)
          r.call(c, l[g]) && (s[l[g]] = c[l[g]]);
      }
    }
    return s;
  }, hn;
}
var gn, Ni;
function jn() {
  if (Ni) return gn;
  Ni = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gn = e, gn;
}
var mn, Vi;
function Fo() {
  return Vi || (Vi = 1, mn = Function.call.bind(Object.prototype.hasOwnProperty)), mn;
}
var vn, Bi;
function Ac() {
  if (Bi) return vn;
  Bi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jn(), r = {}, n = Fo();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, c, s, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (n(o, p)) {
          var d;
          try {
            if (typeof o[p] != "function") {
              var g = Error(
                (s || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            d = o[p](a, p, s, c, null, t);
          } catch (f) {
            d = f;
          }
          if (d && !(d instanceof Error) && e(
            (s || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var u = l ? l() : "";
            e(
              "Failed " + c + " type: " + d.message + (u ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, vn = i, vn;
}
var yn, Fi;
function Dc() {
  if (Fi) return yn;
  Fi = 1;
  var e = Bo(), t = Rc(), r = jn(), n = Fo(), i = Ac(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var s = "Warning: " + c;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return yn = function(c, s) {
    var l = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(M) {
      var $ = M && (l && M[l] || M[p]);
      if (typeof $ == "function")
        return $;
    }
    var g = "<<anonymous>>", u = {
      array: h("array"),
      bigint: h("bigint"),
      bool: h("boolean"),
      func: h("function"),
      number: h("number"),
      object: h("object"),
      string: h("string"),
      symbol: h("symbol"),
      any: m(),
      arrayOf: y,
      element: E(),
      elementType: x(),
      instanceOf: W,
      node: C(),
      objectOf: w,
      oneOf: z,
      oneOfType: I,
      shape: k,
      exact: A
    };
    function f(M, $) {
      return M === $ ? M !== 0 || 1 / M === 1 / $ : M !== M && $ !== $;
    }
    function v(M, $) {
      this.message = M, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function S(M) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, q = 0;
      function U(P, O, F, R, V, Y, J) {
        if (R = R || g, Y = Y || F, J !== r) {
          if (s) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = R + ":" + F;
            !$[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[re] = !0, q++);
          }
        }
        return O[F] == null ? P ? O[F] === null ? new v("The " + V + " `" + Y + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new v("The " + V + " `" + Y + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : M(O, F, R, V, Y);
      }
      var T = U.bind(null, !1);
      return T.isRequired = U.bind(null, !0), T;
    }
    function h(M) {
      function $(q, U, T, P, O, F) {
        var R = q[U], V = X(R);
        if (V !== M) {
          var Y = K(R);
          return new v(
            "Invalid " + P + " `" + O + "` of type " + ("`" + Y + "` supplied to `" + T + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return S($);
    }
    function m() {
      return S(a);
    }
    function y(M) {
      function $(q, U, T, P, O) {
        if (typeof M != "function")
          return new v("Property `" + O + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var F = q[U];
        if (!Array.isArray(F)) {
          var R = X(F);
          return new v("Invalid " + P + " `" + O + "` of type " + ("`" + R + "` supplied to `" + T + "`, expected an array."));
        }
        for (var V = 0; V < F.length; V++) {
          var Y = M(F, V, T, P, O + "[" + V + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return S($);
    }
    function E() {
      function M($, q, U, T, P) {
        var O = $[q];
        if (!c(O)) {
          var F = X(O);
          return new v("Invalid " + T + " `" + P + "` of type " + ("`" + F + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(M);
    }
    function x() {
      function M($, q, U, T, P) {
        var O = $[q];
        if (!e.isValidElementType(O)) {
          var F = X(O);
          return new v("Invalid " + T + " `" + P + "` of type " + ("`" + F + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(M);
    }
    function W(M) {
      function $(q, U, T, P, O) {
        if (!(q[U] instanceof M)) {
          var F = M.name || g, R = Z(q[U]);
          return new v("Invalid " + P + " `" + O + "` of type " + ("`" + R + "` supplied to `" + T + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return S($);
    }
    function z(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(q, U, T, P, O) {
        for (var F = q[U], R = 0; R < M.length; R++)
          if (f(F, M[R]))
            return null;
        var V = JSON.stringify(M, function(J, j) {
          var re = K(j);
          return re === "symbol" ? String(j) : j;
        });
        return new v("Invalid " + P + " `" + O + "` of value `" + String(F) + "` " + ("supplied to `" + T + "`, expected one of " + V + "."));
      }
      return S($);
    }
    function w(M) {
      function $(q, U, T, P, O) {
        if (typeof M != "function")
          return new v("Property `" + O + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var F = q[U], R = X(F);
        if (R !== "object")
          return new v("Invalid " + P + " `" + O + "` of type " + ("`" + R + "` supplied to `" + T + "`, expected an object."));
        for (var V in F)
          if (n(F, V)) {
            var Y = M(F, V, T, P, O + "." + V, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return S($);
    }
    function I(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < M.length; $++) {
        var q = M[$];
        if (typeof q != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(q) + " at index " + $ + "."
          ), a;
      }
      function U(T, P, O, F, R) {
        for (var V = [], Y = 0; Y < M.length; Y++) {
          var J = M[Y], j = J(T, P, O, F, R, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && V.push(j.data.expectedType);
        }
        var re = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new v("Invalid " + F + " `" + R + "` supplied to " + ("`" + O + "`" + re + "."));
      }
      return S(U);
    }
    function C() {
      function M($, q, U, T, P) {
        return B($[q]) ? null : new v("Invalid " + T + " `" + P + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return S(M);
    }
    function _(M, $, q, U, T) {
      return new v(
        (M || "React class") + ": " + $ + " type `" + q + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function k(M) {
      function $(q, U, T, P, O) {
        var F = q[U], R = X(F);
        if (R !== "object")
          return new v("Invalid " + P + " `" + O + "` of type `" + R + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var V in M) {
          var Y = M[V];
          if (typeof Y != "function")
            return _(T, P, O, V, K(Y));
          var J = Y(F, V, T, P, O + "." + V, r);
          if (J)
            return J;
        }
        return null;
      }
      return S($);
    }
    function A(M) {
      function $(q, U, T, P, O) {
        var F = q[U], R = X(F);
        if (R !== "object")
          return new v("Invalid " + P + " `" + O + "` of type `" + R + "` " + ("supplied to `" + T + "`, expected `object`."));
        var V = t({}, q[U], M);
        for (var Y in V) {
          var J = M[Y];
          if (n(M, Y) && typeof J != "function")
            return _(T, P, O, Y, K(J));
          if (!J)
            return new v(
              "Invalid " + P + " `" + O + "` key `" + Y + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(q[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var j = J(F, Y, T, P, O + "." + Y, r);
          if (j)
            return j;
        }
        return null;
      }
      return S($);
    }
    function B(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(B);
          if (M === null || c(M))
            return !0;
          var $ = d(M);
          if ($) {
            var q = $.call(M), U;
            if ($ !== M.entries) {
              for (; !(U = q.next()).done; )
                if (!B(U.value))
                  return !1;
            } else
              for (; !(U = q.next()).done; ) {
                var T = U.value;
                if (T && !B(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(M, $) {
      return M === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function X(M) {
      var $ = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : G($, M) ? "symbol" : $;
    }
    function K(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var $ = X(M);
      if ($ === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function N(M) {
      var $ = K(M);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function Z(M) {
      return !M.constructor || !M.constructor.name ? g : M.constructor.name;
    }
    return u.checkPropTypes = i, u.resetWarningCache = i.resetWarningCache, u.PropTypes = u, u;
  }, yn;
}
var bn, Gi;
function jc() {
  if (Gi) return bn;
  Gi = 1;
  var e = jn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bn = function() {
    function n(a, c, s, l, p, d) {
      if (d !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, bn;
}
if (process.env.NODE_ENV !== "production") {
  var Wc = Bo(), Nc = !0;
  Pn.exports = Dc()(Wc.isElement, Nc);
} else
  Pn.exports = jc()();
var Vc = Pn.exports;
const ee = /* @__PURE__ */ fa(Vc);
function Bc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Go(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(Bc(i) ? r : i) : t;
  return /* @__PURE__ */ D.jsx(da, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  defaultTheme: ee.object,
  styles: ee.oneOfType([ee.array, ee.string, ee.object, ee.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Yi = [];
function Fc(e) {
  return Yi[0] = e, kc(Yi);
}
function Dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Yo(e) {
  if (/* @__PURE__ */ Te.isValidElement(e) || !Dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Yo(e[r]);
  }), t;
}
function nt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? ce({}, e) : e;
  return Dt(e) && Dt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ Te.isValidElement(t[i]) ? n[i] = t[i] : Dt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Dt(e[i]) ? n[i] = nt(e[i], t[i], r) : r.clone ? n[i] = Dt(t[i]) ? Yo(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
const Gc = ["values", "unit", "step"], Yc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ce({}, r, {
    [n.key]: n.val
  }), {});
};
function Hc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, i = ft(e, Gc), o = Yc(t), a = Object.keys(o);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function s(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function l(g, u) {
    const f = a.indexOf(u);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(f !== -1 && typeof t[a[f]] == "number" ? t[a[f]] : u) - n / 100}${r})`;
  }
  function p(g) {
    return a.indexOf(g) + 1 < a.length ? l(g, a[a.indexOf(g) + 1]) : c(g);
  }
  function d(g) {
    const u = a.indexOf(g);
    return u === 0 ? c(a[1]) : u === a.length - 1 ? s(a[u]) : l(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return ce({
    keys: a,
    values: o,
    up: c,
    down: s,
    between: l,
    only: p,
    not: d,
    unit: r
  }, i);
}
const Xc = {
  borderRadius: 4
}, pt = process.env.NODE_ENV !== "production" ? ee.oneOfType([ee.number, ee.string, ee.object, ee.array]) : {};
function sr(e, t) {
  return t ? nt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Wn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Hi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wn[e]}px)`
};
function it(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || Hi;
    return t.reduce((a, c, s) => (a[o.up(o.keys[s])] = r(t[s]), a), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || Hi;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(o.values || Wn).indexOf(c) !== -1) {
        const s = o.up(c);
        a[s] = r(t[c], c);
      } else {
        const s = c;
        a[s] = t[s];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Uc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const o = e.up(i);
    return n[o] = {}, n;
  }, {})) || {};
}
function Xi(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Ho(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : xt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Nr(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Gr(e, r) || n, t && (i = t(i, n, e)), i;
}
function ye(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, o = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], s = a.theme, l = Gr(s, n) || {};
    return it(a, c, (d) => {
      let g = Nr(l, i, d);
      return d === g && typeof d == "string" && (g = Nr(l, i, `${t}${d === "default" ? "" : Ho(d)}`, d)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: pt
  } : {}, o.filterProps = [t], o;
}
function qc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Kc = {
  m: "margin",
  p: "padding"
}, Jc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ui = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zc = qc((e) => {
  if (e.length > 2)
    if (Ui[e])
      e = Ui[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Kc[t], i = Jc[r] || "";
  return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
}), Yr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Hr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qc = [...Yr, ...Hr];
function ur(e, t, r, n) {
  var i;
  const o = (i = Gr(e, t, !1)) != null ? i : r;
  return typeof o == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), o * a) : Array.isArray(o) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[a]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xo(e) {
  return ur(e, "spacing", 8, "spacing");
}
function dr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function eu(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = dr(t, r), n), {});
}
function tu(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = Zc(r), o = eu(i, n), a = e[r];
  return it(e, a, o);
}
function Uo(e, t) {
  const r = Xo(e.theme);
  return Object.keys(e).map((n) => tu(e, t, n, r)).reduce(sr, {});
}
function ge(e) {
  return Uo(e, Yr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Yr.reduce((e, t) => (e[t] = pt, e), {}) : {};
ge.filterProps = Yr;
function me(e) {
  return Uo(e, Hr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? Hr.reduce((e, t) => (e[t] = pt, e), {}) : {};
me.filterProps = Hr;
process.env.NODE_ENV !== "production" && Qc.reduce((e, t) => (e[t] = pt, e), {});
function ru(e = 8) {
  if (e.mui)
    return e;
  const t = Xo({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((o) => {
    const a = t(o);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Xr(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((o) => {
    n[o] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, o) => t[o] ? sr(i, t[o](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Xe(e, t) {
  return ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const nu = Xe("border", Fe), iu = Xe("borderTop", Fe), ou = Xe("borderRight", Fe), su = Xe("borderBottom", Fe), au = Xe("borderLeft", Fe), lu = Xe("borderColor"), cu = Xe("borderTopColor"), uu = Xe("borderRightColor"), du = Xe("borderBottomColor"), fu = Xe("borderLeftColor"), pu = Xe("outline", Fe), hu = Xe("outlineColor"), Ur = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ur(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: dr(t, n)
    });
    return it(e, e.borderRadius, r);
  }
  return null;
};
Ur.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pt
} : {};
Ur.filterProps = ["borderRadius"];
Xr(nu, iu, ou, su, au, lu, cu, uu, du, fu, Ur, pu, hu);
const qr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ur(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: dr(t, n)
    });
    return it(e, e.gap, r);
  }
  return null;
};
qr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pt
} : {};
qr.filterProps = ["gap"];
const Kr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ur(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: dr(t, n)
    });
    return it(e, e.columnGap, r);
  }
  return null;
};
Kr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pt
} : {};
Kr.filterProps = ["columnGap"];
const Jr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ur(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: dr(t, n)
    });
    return it(e, e.rowGap, r);
  }
  return null;
};
Jr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pt
} : {};
Jr.filterProps = ["rowGap"];
const gu = ye({
  prop: "gridColumn"
}), mu = ye({
  prop: "gridRow"
}), vu = ye({
  prop: "gridAutoFlow"
}), yu = ye({
  prop: "gridAutoColumns"
}), bu = ye({
  prop: "gridAutoRows"
}), xu = ye({
  prop: "gridTemplateColumns"
}), Su = ye({
  prop: "gridTemplateRows"
}), wu = ye({
  prop: "gridTemplateAreas"
}), Eu = ye({
  prop: "gridArea"
});
Xr(qr, Kr, Jr, gu, mu, vu, yu, bu, xu, Su, wu, Eu);
function Vt(e, t) {
  return t === "grey" ? t : e;
}
const Tu = ye({
  prop: "color",
  themeKey: "palette",
  transform: Vt
}), Cu = ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Vt
}), zu = ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Vt
});
Xr(Tu, Cu, zu);
function Le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Mu = ye({
  prop: "width",
  transform: Le
}), Nn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i;
      const o = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Wn[r];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Le(r)
      };
    };
    return it(e, e.maxWidth, t);
  }
  return null;
};
Nn.filterProps = ["maxWidth"];
const Ou = ye({
  prop: "minWidth",
  transform: Le
}), Iu = ye({
  prop: "height",
  transform: Le
}), _u = ye({
  prop: "maxHeight",
  transform: Le
}), Pu = ye({
  prop: "minHeight",
  transform: Le
});
ye({
  prop: "size",
  cssProperty: "width",
  transform: Le
});
ye({
  prop: "size",
  cssProperty: "height",
  transform: Le
});
const ku = ye({
  prop: "boxSizing"
});
Xr(Mu, Nn, Ou, Iu, _u, Pu, ku);
const Vn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ur
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Vt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Vt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Vt
  },
  // spacing
  p: {
    style: me
  },
  pt: {
    style: me
  },
  pr: {
    style: me
  },
  pb: {
    style: me
  },
  pl: {
    style: me
  },
  px: {
    style: me
  },
  py: {
    style: me
  },
  padding: {
    style: me
  },
  paddingTop: {
    style: me
  },
  paddingRight: {
    style: me
  },
  paddingBottom: {
    style: me
  },
  paddingLeft: {
    style: me
  },
  paddingX: {
    style: me
  },
  paddingY: {
    style: me
  },
  paddingInline: {
    style: me
  },
  paddingInlineStart: {
    style: me
  },
  paddingInlineEnd: {
    style: me
  },
  paddingBlock: {
    style: me
  },
  paddingBlockStart: {
    style: me
  },
  paddingBlockEnd: {
    style: me
  },
  m: {
    style: ge
  },
  mt: {
    style: ge
  },
  mr: {
    style: ge
  },
  mb: {
    style: ge
  },
  ml: {
    style: ge
  },
  mx: {
    style: ge
  },
  my: {
    style: ge
  },
  margin: {
    style: ge
  },
  marginTop: {
    style: ge
  },
  marginRight: {
    style: ge
  },
  marginBottom: {
    style: ge
  },
  marginLeft: {
    style: ge
  },
  marginX: {
    style: ge
  },
  marginY: {
    style: ge
  },
  marginInline: {
    style: ge
  },
  marginInlineStart: {
    style: ge
  },
  marginInlineEnd: {
    style: ge
  },
  marginBlock: {
    style: ge
  },
  marginBlockStart: {
    style: ge
  },
  marginBlockEnd: {
    style: ge
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: qr
  },
  rowGap: {
    style: Jr
  },
  columnGap: {
    style: Kr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Le
  },
  maxWidth: {
    style: Nn
  },
  minWidth: {
    transform: Le
  },
  height: {
    transform: Le
  },
  maxHeight: {
    transform: Le
  },
  minHeight: {
    transform: Le
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function $u(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Lu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ru() {
  function e(r, n, i, o) {
    const a = {
      [r]: n,
      theme: i
    }, c = o[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: s = r,
      themeKey: l,
      transform: p,
      style: d
    } = c;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = Gr(i, l) || {};
    return d ? d(a) : it(a, n, (f) => {
      let v = Nr(g, p, f);
      return f === v && typeof f == "string" && (v = Nr(g, p, `${r}${f === "default" ? "" : Ho(f)}`, f)), s === !1 ? v : {
        [s]: v
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: i,
      theme: o = {},
      nested: a
    } = r || {};
    if (!i)
      return null;
    const c = (n = o.unstable_sxConfig) != null ? n : Vn;
    function s(l) {
      let p = l;
      if (typeof l == "function")
        p = l(o);
      else if (typeof l != "object")
        return l;
      if (!p)
        return null;
      const d = Uc(o.breakpoints), g = Object.keys(d);
      let u = d;
      return Object.keys(p).forEach((f) => {
        const v = Lu(p[f], o);
        if (v != null)
          if (typeof v == "object")
            if (c[f])
              u = sr(u, e(f, v, o, c));
            else {
              const S = it({
                theme: o
              }, v, (h) => ({
                [f]: h
              }));
              $u(S, v) ? u[f] = t({
                sx: v,
                theme: o,
                nested: !0
              }) : u = sr(u, S);
            }
          else
            u = sr(u, e(f, v, o, c));
      }), !a && o.modularCssLayers ? {
        "@layer sx": Xi(g, u)
      } : Xi(g, u);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Bn = Ru();
Bn.filterProps = ["sx"];
function Au(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Du = ["breakpoints", "palette", "spacing", "shape"];
function qo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: o = {}
  } = e, a = ft(e, Du), c = Hc(r), s = ru(i);
  let l = nt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ce({
      mode: "light"
    }, n),
    spacing: s,
    shape: ce({}, Xc, o)
  }, a);
  return l.applyStyles = Au, l = t.reduce((p, d) => nt(p, d), l), l.unstable_sxConfig = ce({}, Vn, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(d) {
    return Bn({
      sx: d,
      theme: this
    });
  }, l;
}
function ju(e) {
  return Object.keys(e).length === 0;
}
function Fn(e = null) {
  const t = Te.useContext(po);
  return !t || ju(t) ? e : t;
}
const Wu = qo();
function Nu(e = Wu) {
  return Fn(e);
}
function xn(e) {
  const t = Fc(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Ko({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Nu(r), i = t && n[t] || n;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((a) => xn(typeof a == "function" ? a(i) : a)) : o = xn(o)), /* @__PURE__ */ D.jsx(Go, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: ee.object,
  /**
   * @ignore
   */
  styles: ee.oneOfType([ee.array, ee.func, ee.number, ee.object, ee.string, ee.bool]),
  /**
   * @ignore
   */
  themeId: ee.string
});
const qi = (e) => e, Vu = () => {
  let e = qi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = qi;
    }
  };
}, Bu = Vu(), Fu = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Gu(e, t, r = "Mui") {
  const n = Fu[t];
  return n ? `${r}-${n}` : `${Bu.generate(e)}-${t}`;
}
const Yu = typeof window < "u" ? Te.useLayoutEffect : Te.useEffect;
function Jo(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jo
}, Symbol.toStringTag, { value: "Module" }));
function Xu(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Jo(e, t, r);
}
function Uu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Zo(Uu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : xt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : xt(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function qu(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Se(e, t) {
  return e = Zo(e), t = Xu(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qu(e);
}
const Ku = "exact-prop: ​";
function Qo(e) {
  return process.env.NODE_ENV === "production" ? e : ce({}, e, {
    [Ku]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
let Ki = 0;
function Ju(e) {
  const [t, r] = Te.useState(e), n = e || t;
  return Te.useEffect(() => {
    t == null && (Ki += 1, r(`mui-${Ki}`));
  }, [t]), n;
}
const Ji = Te.useId;
function Zu(e) {
  return Ji !== void 0 ? Ji() : Ju(e);
}
const Gn = /* @__PURE__ */ Te.createContext(null);
process.env.NODE_ENV !== "production" && (Gn.displayName = "ThemeContext");
function es() {
  const e = Te.useContext(Gn);
  return process.env.NODE_ENV !== "production" && Te.useDebugValue(e), e;
}
const Qu = typeof Symbol == "function" && Symbol.for, ed = Qu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function td(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return ce({}, e, t);
}
function Vr(e) {
  const {
    children: t,
    theme: r
  } = e, n = es();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = Te.useMemo(() => {
    const o = n === null ? r : td(n, r);
    return o != null && (o[ed] = n !== null), o;
  }, [r, n]);
  return /* @__PURE__ */ D.jsx(Gn.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Vr.propTypes = {
  /**
   * Your component tree.
   */
  children: ee.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ee.oneOfType([ee.object, ee.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Vr.propTypes = Qo(Vr.propTypes));
const rd = ["value"], nd = /* @__PURE__ */ Te.createContext();
function ts(e) {
  let {
    value: t
  } = e, r = ft(e, rd);
  return /* @__PURE__ */ D.jsx(nd.Provider, ce({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (ts.propTypes = {
  children: ee.node,
  value: ee.bool
});
const id = /* @__PURE__ */ Te.createContext(void 0);
function rs({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ D.jsx(id.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (rs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: ee.node,
  /**
   * @ignore
   */
  value: ee.object
});
function od(e) {
  const t = Fn(), r = Zu() || "", {
    modularCssLayers: n
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? i = "" : typeof n == "string" ? i = n.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Yu(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const a = o.firstChild;
    if (i) {
      var c;
      if (a && (c = a.hasAttribute) != null && c.call(a, "data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === r)
        return;
      const l = document.createElement("style");
      l.setAttribute("data-mui-layer-order", r), l.textContent = i, o.prepend(l);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || s.remove();
    }
  }, [i, r]), i ? /* @__PURE__ */ D.jsx(Ko, {
    styles: i
  }) : null;
}
const Zi = {};
function Qi(e, t, r, n = !1) {
  return Te.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const o = r(i), a = e ? ce({}, t, {
        [e]: o
      }) : o;
      return n ? () => a : a;
    }
    return e ? ce({}, t, {
      [e]: r
    }) : ce({}, t, r);
  }, [e, t, r, n]);
}
function Br(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = Fn(Zi), o = es() || Zi;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Qi(n, i, r), c = Qi(n, o, r, !0), s = a.direction === "rtl", l = od(a);
  return /* @__PURE__ */ D.jsx(Vr, {
    theme: c,
    children: /* @__PURE__ */ D.jsx(po.Provider, {
      value: a,
      children: /* @__PURE__ */ D.jsx(ts, {
        value: s,
        children: /* @__PURE__ */ D.jsxs(rs, {
          value: a == null ? void 0 : a.components,
          children: [l, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: ee.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ee.oneOfType([ee.func, ee.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: ee.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Br.propTypes = Qo(Br.propTypes));
function sd(e, t) {
  return ce({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var be = {}, ns = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ns);
var ad = ns.exports;
const ld = /* @__PURE__ */ ho(Cc), cd = /* @__PURE__ */ ho(Hu);
var is = ad;
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.alpha = ls;
be.blend = Sd;
be.colorChannel = void 0;
var ud = be.darken = Hn;
be.decomposeColor = He;
be.emphasize = cs;
var eo = be.getContrastRatio = md;
be.getLuminance = Fr;
be.hexToRgb = os;
be.hslToRgb = as;
var dd = be.lighten = Xn;
be.private_safeAlpha = vd;
be.private_safeColorChannel = void 0;
be.private_safeDarken = yd;
be.private_safeEmphasize = xd;
be.private_safeLighten = bd;
be.recomposeColor = Yt;
be.rgbToHex = gd;
var to = is(ld), fd = is(cd);
function Yn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, fd.default)(e, t, r);
}
function os(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pd(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function He(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return He(os(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, to.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, to.default)(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const ss = (e) => {
  const t = He(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
be.colorChannel = ss;
const hd = (e, t) => {
  try {
    return ss(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
be.private_safeColorChannel = hd;
function Yt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function gd(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = He(e);
  return `#${t.map((r, n) => pd(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function as(e) {
  e = He(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, o = n * Math.min(i, 1 - i), a = (l, p = (l + r / 30) % 12) => i - o * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const s = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", s.push(t[3])), Yt({
    type: c,
    values: s
  });
}
function Fr(e) {
  e = He(e);
  let t = e.type === "hsl" || e.type === "hsla" ? He(as(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function md(e, t) {
  const r = Fr(e), n = Fr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ls(e, t) {
  return e = He(e), t = Yn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Yt(e);
}
function vd(e, t, r) {
  try {
    return ls(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Hn(e, t) {
  if (e = He(e), t = Yn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Yt(e);
}
function yd(e, t, r) {
  try {
    return Hn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xn(e, t) {
  if (e = He(e), t = Yn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Yt(e);
}
function bd(e, t, r) {
  try {
    return Xn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function cs(e, t = 0.15) {
  return Fr(e) > 0.5 ? Hn(e, t) : Xn(e, t);
}
function xd(e, t, r) {
  try {
    return cs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Sd(e, t, r, n = 1) {
  const i = (s, l) => Math.round((s ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), o = He(e), a = He(t), c = [i(o.values[0], a.values[0]), i(o.values[1], a.values[1]), i(o.values[2], a.values[2])];
  return Yt({
    type: "rgb",
    values: c
  });
}
const ar = {
  black: "#000",
  white: "#fff"
}, wd = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Mt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ot = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, nr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, It = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, _t = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Pt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ed = ["mode", "contrastThreshold", "tonalOffset"], ro = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ar.white,
    default: ar.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Sn = {
  text: {
    primary: ar.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ar.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function no(e, t, r, n) {
  const i = n.light || n, o = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = dd(e.main, i) : t === "dark" && (e.dark = ud(e.main, o)));
}
function Td(e = "light") {
  return e === "dark" ? {
    main: It[200],
    light: It[50],
    dark: It[400]
  } : {
    main: It[700],
    light: It[400],
    dark: It[800]
  };
}
function Cd(e = "light") {
  return e === "dark" ? {
    main: Mt[200],
    light: Mt[50],
    dark: Mt[400]
  } : {
    main: Mt[500],
    light: Mt[300],
    dark: Mt[700]
  };
}
function zd(e = "light") {
  return e === "dark" ? {
    main: Ot[500],
    light: Ot[300],
    dark: Ot[700]
  } : {
    main: Ot[700],
    light: Ot[400],
    dark: Ot[800]
  };
}
function Md(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: _t[700],
    light: _t[500],
    dark: _t[900]
  };
}
function Od(e = "light") {
  return e === "dark" ? {
    main: Pt[400],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: Pt[800],
    light: Pt[500],
    dark: Pt[900]
  };
}
function Id(e = "light") {
  return e === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: nr[500],
    dark: nr[900]
  };
}
function _d(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = ft(e, Ed), o = e.primary || Td(t), a = e.secondary || Cd(t), c = e.error || zd(t), s = e.info || Md(t), l = e.success || Od(t), p = e.warning || Id(t);
  function d(v) {
    const S = eo(v, Sn.text.primary) >= r ? Sn.text.primary : ro.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const h = eo(v, S);
      h < 3 && console.error([`MUI: The contrast ratio of ${h}:1 for ${S} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: v,
    name: S,
    mainShade: h = 500,
    lightShade: m = 300,
    darkShade: y = 700
  }) => {
    if (v = ce({}, v), !v.main && v[h] && (v.main = v[h]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${h}\` property.` : xt(11, S ? ` (${S})` : "", h));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : xt(12, S ? ` (${S})` : "", JSON.stringify(v.main)));
    return no(v, "light", m, n), no(v, "dark", y, n), v.contrastText || (v.contrastText = d(v.main)), v;
  }, u = {
    dark: Sn,
    light: ro
  };
  return process.env.NODE_ENV !== "production" && (u[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), nt(ce({
    // A collection of common colors.
    common: ce({}, ar),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: s,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: wd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, u[t]), i);
}
const Pd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function kd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const io = {
  textTransform: "uppercase"
}, oo = '"Roboto", "Helvetica", "Arial", sans-serif';
function $d(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = oo,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: d
  } = r, g = ft(r, Pd);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const u = i / 14, f = d || ((h) => `${h / l * u}rem`), v = (h, m, y, E, x) => ce({
    fontFamily: n,
    fontWeight: h,
    fontSize: f(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, n === oo ? {
    letterSpacing: `${kd(E / m)}em`
  } : {}, x, p), S = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(a, 48, 1.167, 0),
    h4: v(a, 34, 1.235, 0.25),
    h5: v(a, 24, 1.334, 0),
    h6: v(c, 20, 1.6, 0.15),
    subtitle1: v(a, 16, 1.75, 0.15),
    subtitle2: v(c, 14, 1.57, 0.1),
    body1: v(a, 16, 1.5, 0.15),
    body2: v(a, 14, 1.43, 0.15),
    button: v(c, 14, 1.75, 0.4, io),
    caption: v(a, 12, 1.66, 0.4),
    overline: v(a, 12, 2.66, 1, io),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return nt(ce({
    htmlFontSize: l,
    pxToRem: f,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: s
  }, S), g, {
    clone: !1
    // No need to clone deep
  });
}
const Ld = 0.2, Rd = 0.14, Ad = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ld})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Rd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ad})`].join(",");
}
const Dd = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], jd = ["duration", "easing", "delay"], Wd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Nd = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function so(e) {
  return `${Math.round(e)}ms`;
}
function Vd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Bd(e) {
  const t = ce({}, Wd, e.easing), r = ce({}, Nd, e.duration);
  return ce({
    getAutoHeightDuration: Vd,
    create: (i = ["all"], o = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: s = 0
      } = o, l = ft(o, jd);
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", d = (g) => !isNaN(parseFloat(g));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !d(s) && !p(s) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof a == "string" ? a : so(a)} ${c} ${typeof s == "string" ? s : so(s)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Fd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Gd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Yd(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: o = {}
  } = e, a = ft(e, Gd);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : xt(18));
  const c = _d(n), s = qo(e);
  let l = nt(s, {
    mixins: sd(s.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Dd.slice(),
    typography: $d(c, o),
    transitions: Bd(i),
    zIndex: ce({}, Fd)
  });
  if (l = nt(l, a), l = t.reduce((p, d) => nt(p, d), l), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (g, u) => {
      let f;
      for (f in g) {
        const v = g[f];
        if (p.indexOf(f) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = Gu("", f);
            console.error([`MUI: The \`${u}\` component increases the CSS specificity of the \`${f}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[f] = {};
        }
      }
    };
    Object.keys(l.components).forEach((g) => {
      const u = l.components[g].styleOverrides;
      u && g.indexOf("Mui") === 0 && d(u, g);
    });
  }
  return l.unstable_sxConfig = ce({}, Vn, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(d) {
    return Bn({
      sx: d,
      theme: this
    });
  }, l;
}
const Hd = ["theme"];
function us(e) {
  let {
    theme: t
  } = e, r = ft(e, Hd);
  const n = t[ki];
  let i = n || t;
  return typeof t != "function" && (n && !n.vars ? i = ce({}, n, {
    vars: null
  }) : t && !t.vars && (i = ce({}, t, {
    vars: null
  }))), /* @__PURE__ */ D.jsx(Br, ce({}, r, {
    themeId: n ? ki : void 0,
    theme: i
  }));
}
process.env.NODE_ENV !== "production" && (us.propTypes = {
  /**
   * Your component tree.
   */
  children: ee.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ee.oneOfType([ee.object, ee.func]).isRequired
});
function Xd(e) {
  return {
    MuiAccordion: {
      defaultProps: {
        disableGutters: !0,
        square: !0,
        elevation: 0
      },
      styleOverrides: {
        root: {
          border: `1px solid ${e.palette.border.main}`,
          background: "transparent",
          "&:not(:last-child)": {
            borderBottom: 0
          },
          "&:before": {
            display: "none"
          },
          "&.Mui-disabled": {
            backgroundColor: e.palette.secondary.lighter
          }
        }
      }
    }
  };
}
function Ud(e) {
  return {
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: e.spacing(2),
          borderTop: `1px solid ${e.palette.border.main}`
        }
      }
    }
  };
}
function qd(e) {
  const { palette: t, spacing: r } = e;
  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: /* @__PURE__ */ D.jsx(fo, { size: 20 })
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          flexDirection: "row",
          minHeight: 46
        },
        expandIconWrapper: {
          "&.Mui-expanded": {
            transform: "rotate(90deg)"
          }
        },
        content: {
          marginTop: r(1.25),
          marginBottom: r(1.25),
          marginLeft: r(1)
        }
      }
    }
  };
}
const Ue = (e, t) => {
  switch (t) {
    case "secondary":
      return e.palette.secondary;
    case "error":
      return e.palette.error;
    case "warning":
      return e.palette.warning;
    case "info":
      return e.palette.info;
    case "success":
      return e.palette.success;
    default:
      return e.palette.primary;
  }
};
function gt({ color: e, theme: t }) {
  const r = Ue(t, e), { lighter: n, light: i, main: o } = r;
  return {
    borderColor: Se(i, 0.5),
    backgroundColor: n,
    "& .MuiAlert-icon": {
      color: o
    }
  };
}
function Kd(e) {
  const t = gt({ color: "primary", theme: e });
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          color: e.palette.text.primary,
          fontSize: "0.875rem"
        },
        icon: {
          fontSize: "1rem"
        },
        message: {
          padding: 0,
          marginTop: 3
        },
        filled: {
          color: e.palette.grey[0]
        },
        border: {
          padding: "10px 16px",
          border: "1px solid",
          ...t,
          "&.MuiAlert-borderPrimary": gt({
            color: "primary",
            theme: e
          }),
          "&.MuiAlert-borderSecondary": gt({
            color: "secondary",
            theme: e
          }),
          "&.MuiAlert-borderError": gt({ color: "error", theme: e }),
          "&.MuiAlert-borderSuccess": gt({
            color: "success",
            theme: e
          }),
          "&.MuiAlert-borderInfo": gt({ color: "info", theme: e }),
          "&.MuiAlert-borderWarning": gt({
            color: "warning",
            theme: e
          })
        },
        action: {
          "& .MuiButton-root": {
            padding: 2,
            height: "auto",
            fontSize: "0.75rem",
            marginTop: -2
          },
          "& .MuiIconButton-root": {
            width: "auto",
            height: "auto",
            padding: 2,
            marginRight: 6,
            "& .MuiSvgIcon-root": {
              fontSize: "1rem"
            }
          }
        }
      }
    }
  };
}
function Jd() {
  return {
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: 4,
          marginTop: 0,
          fontWeight: 400
        }
      }
    }
  };
}
function Zd() {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: "3px 9px"
          }
        },
        popupIndicator: {
          width: "auto",
          height: "auto"
        },
        clearIndicator: {
          width: "auto",
          height: "auto"
        }
      }
    }
  };
}
function mt({ color: e, theme: t }) {
  const r = Ue(t, e), { lighter: n, main: i } = r;
  return {
    color: i,
    backgroundColor: n
  };
}
function Qd(e) {
  const t = mt({ color: "primary", theme: e });
  return {
    MuiBadge: {
      defaultProps: {
        variant: "light",
        max: 1 / 0
      },
      styleOverrides: {
        standard: {
          minWidth: e.spacing(2),
          height: e.spacing(2),
          padding: e.spacing(0.5)
        },
        light: {
          ...t,
          "&.MuiBadge-colorPrimary": mt({ color: "primary", theme: e }),
          "&.MuiBadge-colorSecondary": mt({
            color: "secondary",
            theme: e
          }),
          "&.MuiBadge-colorError": mt({ color: "error", theme: e }),
          "&.MuiBadge-colorInfo": mt({ color: "info", theme: e }),
          "&.MuiBadge-colorSuccess": mt({ color: "success", theme: e }),
          "&.MuiBadge-colorWarning": mt({ color: "warning", theme: e })
        },
        badge: {
          height: 16,
          minWidth: 16,
          fontSize: 9,
          padding: 4
        }
      }
    }
  };
}
const Un = (e, t) => {
  switch (t) {
    case "secondary":
      return e.customShadows.secondary;
    case "error":
      return e.customShadows.error;
    case "warning":
      return e.customShadows.warning;
    case "info":
      return e.customShadows.info;
    case "success":
      return e.customShadows.success;
    case "primaryButton":
      return e.customShadows.primaryButton;
    case "secondaryButton":
      return e.customShadows.secondaryButton;
    case "errorButton":
      return e.customShadows.errorButton;
    case "warningButton":
      return e.customShadows.warningButton;
    case "infoButton":
      return e.customShadows.infoButton;
    case "successButton":
      return e.customShadows.successButton;
    default:
      return e.customShadows.primary;
  }
};
function ie({ variant: e, color: t, theme: r }) {
  const n = Ue(r, t);
  let { lighter: i, main: o, dark: a, contrastText: c } = n;
  t === "secondary" && (i = r.palette.background.lightGrey || i, o = r.palette.grey.main, a = r.palette.grey.darker, c = "#fff");
  const s = `${t}Button`, l = Un(r, s), p = {
    "&::after": {
      boxShadow: `0 0 5px 5px ${Se(o, 0.9)}`
    },
    "&:active::after": {
      boxShadow: `0 0 0 0 ${Se(o, 0.9)}`
    },
    "&:focus-visible": {
      outline: `2px solid ${a}`,
      outlineOffset: 2
    }
  };
  switch (e) {
    case "contained":
      return {
        "&:hover": {
          backgroundColor: a
        },
        ...p
      };
    case "shadow":
      return {
        color: c,
        backgroundColor: o,
        boxShadow: l,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: a
        },
        ...p
      };
    case "outlined":
      return {
        color: t === "secondary" ? r.palette.grey.main : void 0,
        borderColor: t === "secondary" ? r.palette.border.main : o,
        backgroundColor: t === "secondary" ? r.palette.common.white : "transparent",
        "& svg": {
          color: "currentColor",
          strokeWidth: 2,
          transition: "color 0.5s"
        },
        "&:hover": {
          color: t === "secondary" ? r.palette.grey.dark : a,
          backgroundColor: t === "secondary" ? r.palette.background.lightGrey : "transparent",
          borderColor: t === "secondary" ? r.palette.grey.dark : a,
          "& svg": {
            color: "currentColor"
          }
        },
        "&.Mui-disabled": {
          border: `1px solid ${i}`,
          color: i
        },
        ...p
      };
    case "dashed":
      return {
        color: o,
        borderColor: o,
        backgroundColor: i,
        "&:hover": {
          color: a,
          borderColor: a
        },
        ...p
      };
    case "text":
      return {
        color: t === "secondary" ? r.palette.grey.main : void 0,
        "&:hover": {
          color: a,
          backgroundColor: i
        },
        ...p
      };
  }
}
function ef(e) {
  const t = ie({
    variant: "dashed",
    color: "primary",
    theme: e
  }), r = ie({
    variant: "shadow",
    color: "primary",
    theme: e
  }), n = (o) => {
    var a;
    return {
      "&.Mui-disabled": {
        backgroundColor: (a = Ue(e, o)) == null ? void 0 : a.lighter,
        color: e.palette.common.white
      }
    };
  }, i = {
    "&>*:nth-of-type(1)": {
      fontSize: "inherit"
    }
  };
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: !0
      },
      styleOverrides: {
        root: {
          fontSize: e.typography.h4.fontSize,
          fontWeight: e.typography.fontWeightRegular,
          "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 4,
            opacity: 0,
            transition: "all 0.5s"
          },
          "&:active::after": {
            position: "absolute",
            borderRadius: 4,
            left: 0,
            top: 0,
            opacity: 1,
            transition: "0s"
          }
        },
        sizeSmall: {
          height: 28
        },
        sizeMedium: {
          height: 32
        },
        sizeLarge: {
          height: 36
        },
        contained: ({ ownerState: o }) => ({
          ...n(o == null ? void 0 : o.color)
        }),
        outlined: ({ ownerState: o }) => ({
          ...ie({
            variant: "outlined",
            color: o == null ? void 0 : o.color,
            theme: e
          })
        }),
        text: ({ ownerState: o }) => ({
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          },
          ...(o == null ? void 0 : o.color) === "secondary" && {
            "&.Mui-disabled": {
              color: e.palette.grey.lighter
            }
          }
        }),
        greyLight: ({ ownerState: o }) => ({
          ...ie({ variant: "greyLight", color: "secondary", theme: e }),
          // ...getDisabledStyle(ownerState?.color),
          "&.Mui-disabled": {
            color: e.palette.grey.lighter,
            backgroundColor: e.palette.background.lightGrey
          }
        }),
        endIcon: {
          ...i
        },
        startIcon: {
          ...i
        },
        dashed: {
          border: "1px dashed",
          ...t,
          "&.MuiButton-dashedPrimary": ie({
            variant: "dashed",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-dashedSecondary": ie({
            variant: "dashed",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-dashedError": ie({
            variant: "dashed",
            color: "error",
            theme: e
          }),
          "&.MuiButton-dashedSuccess": ie({
            variant: "dashed",
            color: "success",
            theme: e
          }),
          "&.MuiButton-dashedInfo": ie({
            variant: "dashed",
            color: "info",
            theme: e
          }),
          "&.MuiButton-dashedWarning": ie({
            variant: "dashed",
            color: "warning",
            theme: e
          }),
          "&.Mui-disabled": {
            color: `${e.palette.grey[300]} !important`,
            borderColor: `${e.palette.grey[400]} !important`,
            backgroundColor: `${e.palette.grey[200]} !important`
          }
        },
        shadow: {
          ...r,
          "&.MuiButton-shadowPrimary": ie({
            variant: "shadow",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-shadowSecondary": ie({
            variant: "shadow",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-shadowError": ie({
            variant: "shadow",
            color: "error",
            theme: e
          }),
          "&.MuiButton-shadowSuccess": ie({
            variant: "shadow",
            color: "success",
            theme: e
          }),
          "&.MuiButton-shadowInfo": ie({
            variant: "shadow",
            color: "info",
            theme: e
          }),
          "&.MuiButton-shadowWarning": ie({
            variant: "shadow",
            color: "warning",
            theme: e
          }),
          "&.Mui-disabled": {
            color: `${e.palette.grey[300]} !important`,
            borderColor: `${e.palette.grey[400]} !important`,
            backgroundColor: `${e.palette.grey[200]} !important`
          }
        },
        containedPrimary: ie({
          variant: "contained",
          color: "primary",
          theme: e
        }),
        containedSecondary: ie({
          variant: "contained",
          color: "secondary",
          theme: e
        }),
        containedError: ie({
          variant: "contained",
          color: "error",
          theme: e
        }),
        containedSuccess: ie({
          variant: "contained",
          color: "success",
          theme: e
        }),
        containedInfo: ie({
          variant: "contained",
          color: "info",
          theme: e
        }),
        containedWarning: ie({
          variant: "contained",
          color: "warning",
          theme: e
        }),
        outlinedPrimary: ie({
          variant: "outlined",
          color: "primary",
          theme: e
        }),
        outlinedSecondary: ie({
          variant: "outlined",
          color: "secondary",
          theme: e
        }),
        outlinedError: ie({
          variant: "outlined",
          color: "error",
          theme: e
        }),
        outlinedSuccess: ie({
          variant: "outlined",
          color: "success",
          theme: e
        }),
        outlinedInfo: ie({
          variant: "outlined",
          color: "info",
          theme: e
        }),
        outlinedWarning: ie({
          variant: "outlined",
          color: "warning",
          theme: e
        }),
        textPrimary: ie({
          variant: "text",
          color: "primary",
          theme: e
        }),
        textSecondary: ie({
          variant: "text",
          color: "secondary",
          theme: e
        }),
        textError: ie({ variant: "text", color: "error", theme: e }),
        textSuccess: ie({
          variant: "text",
          color: "success",
          theme: e
        }),
        textInfo: ie({ variant: "text", color: "info", theme: e }),
        textWarning: ie({
          variant: "text",
          color: "warning",
          theme: e
        }),
        sizeExtraSmall: {
          minWidth: 56,
          fontSize: "0.625rem",
          padding: "2px 8px"
        }
      },
      variants: [
        ...Bt == null ? void 0 : Bt.map((o) => {
          const { darker: a, dark: c, main: s, light: l, lighter: p } = e.palette[o];
          return {
            props: { variant: "light", color: o },
            style: {
              color: s,
              backgroundColor: p,
              "&:hover": {
                color: c,
                backgroundColor: l
              },
              "&:active": {
                color: a,
                backgroundColor: s
              }
            }
          };
        }),
        {
          props: { variant: "greyLight" },
          style: {
            background: e.palette.background.lightGrey,
            color: e.palette.text.primary,
            "&:hover": {
              background: e.palette.background.softGrey,
              color: e.palette.text.primary
            },
            "&:active": {
              color: e.palette.text.primary,
              background: e.palette.grey.lighter
            }
          }
        }
      ]
    }
  };
}
function tf() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function rf() {
  return {
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function nf() {
  return {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 20,
          "&:last-child": {
            paddingBottom: 20
          }
        }
      }
    }
  };
}
function kt({ color: e, theme: t }) {
  const r = Ue(t, e), { lighter: n, main: i, dark: o } = r;
  return {
    "&:hover": {
      backgroundColor: "transparent",
      "& .icon": {
        borderColor: i
      }
    },
    "&.Mui-focusVisible": {
      outline: `2px solid ${o}`,
      outlineOffset: -4
    }
  };
}
function of(e) {
  switch (e) {
    case "small":
      return { size: 16, fontSize: 1, position: 1 };
    case "large":
      return { size: 24, fontSize: 1.6, position: 2 };
    case "medium":
    default:
      return { size: 20, fontSize: 1.35, position: 2 };
  }
}
function wn(e) {
  const t = of(e);
  return {
    "& .icon": {
      width: t.size,
      height: t.size,
      "& .filled": {
        fontSize: `${t.fontSize}rem`,
        top: -t.position,
        left: -t.position
      }
    }
  };
}
function sf(e) {
  const { palette: t } = e;
  return {
    MuiCheckbox: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ D.jsx(
          Ie,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: 0.5,
              backgroundColor: e.palette.common.white,
              "&:hover": {
                borderColor: t.secondary.main
              }
            }
          }
        ),
        checkedIcon: /* @__PURE__ */ D.jsx(
          Ie,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: 0.5,
              bgcolor: t.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                borderColor: t.secondary.main
              }
            },
            children: /* @__PURE__ */ D.jsx(
              sa,
              {
                width: "0.75rem",
                height: "0.75rem",
                color: t.common.white
              }
            )
          }
        ),
        indeterminateIcon: /* @__PURE__ */ D.jsx(
          Ie,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: 0.5,
              bgcolor: t.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                borderColor: t.secondary.main
              }
            },
            children: /* @__PURE__ */ D.jsx(
              oa,
              {
                width: "0.75rem",
                height: "0.75rem",
                color: t.common.white
              }
            )
          }
        )
      },
      styleOverrides: {
        root: {
          "&.Mui-disabled .icon": {
            backgroundColor: e.palette.border.light,
            borderColor: e.palette.border.light,
            "& svg": {
              stroke: e.palette.grey.main,
              strokeWidth: 3
            }
          },
          borderRadius: 0,
          color: t.text.secondary,
          "&.size-small": {
            ...wn("small")
          },
          "&.size-medium": {
            ...wn("medium")
          },
          "&.size-large": {
            ...wn("large")
          }
        },
        colorPrimary: kt({ color: "primary", theme: e }),
        colorSecondary: kt({ color: "secondary", theme: e }),
        colorSuccess: kt({ color: "success", theme: e }),
        colorWarning: kt({ color: "warning", theme: e }),
        colorInfo: kt({ color: "info", theme: e }),
        colorError: kt({ color: "error", theme: e })
      }
    }
  };
}
function $t({ color: e, theme: t }) {
  const r = Ue(t, e), { dark: n } = r;
  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${n}`,
      outlineOffset: 2
    }
  };
}
function Pe({ color: e, theme: t }) {
  const r = Ue(t, e), { light: n, lighter: i, main: o } = r;
  return {
    color: o,
    backgroundColor: i,
    borderColor: n,
    "& .MuiChip-deleteIcon": {
      color: o,
      "&:hover": {
        color: n
      }
    }
  };
}
function af(e) {
  const t = Pe({ color: "secondary", theme: e });
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          // fontSize: theme.typography.h6.fontSize,
          // fontWeight: theme.typography.h6.fontWeight,
          height: "unset",
          p: 0,
          borderRadius: 4,
          "&:active": {
            boxShadow: "none"
          },
          "&.MuiChip-colorPrimary": $t({ color: "primary", theme: e }),
          "&.MuiChip-colorSecondary": $t({ color: "secondary", theme: e }),
          "&.MuiChip-colorError": $t({ color: "error", theme: e }),
          "&.MuiChip-colorInfo": $t({ color: "info", theme: e }),
          "&.MuiChip-colorSuccess": $t({ color: "success", theme: e }),
          "&.MuiChip-colorWarning": $t({ color: "warning", theme: e })
        },
        sizeSmall: {
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 500,
          "& .MuiChip-label": {
            padding: "2px 8px"
          }
        },
        sizeMedium: {
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 400,
          "& .MuiChip-label": {
            padding: "4px 8px"
          }
        },
        sizeLarge: {
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 400,
          "& .MuiChip-label": {
            padding: "4px 12px"
          }
        },
        light: {
          ...t,
          "&.MuiChip-lightPrimary": Pe({ color: "primary", theme: e }),
          "&.MuiChip-lightSecondary": Pe({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-lightError": Pe({ color: "error", theme: e }),
          "&.MuiChip-lightInfo": Pe({ color: "info", theme: e }),
          "&.MuiChip-lightSuccess": Pe({ color: "success", theme: e }),
          "&.MuiChip-lightWarning": Pe({ color: "warning", theme: e })
        },
        combined: {
          border: "1px solid",
          ...t,
          "&.MuiChip-combinedPrimary": Pe({
            color: "primary",
            theme: e
          }),
          "&.MuiChip-combinedSecondary": Pe({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-combinedError": Pe({ color: "error", theme: e }),
          "&.MuiChip-combinedInfo": Pe({ color: "info", theme: e }),
          "&.MuiChip-combinedSuccess": Pe({
            color: "success",
            theme: e
          }),
          "&.MuiChip-combinedWarning": Pe({
            color: "warning",
            theme: e
          })
        }
      },
      variants: [
        {
          props: { variant: "greyLight" },
          style: {
            color: e.palette.text.primary,
            backgroundColor: e.palette.background.softGrey
          }
        }
      ]
    }
  };
}
function lf() {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialog-container": {
            alignItems: "flex-start"
          },
          "& .MuiBackdrop-root.MuiModal-backdrop": {
            backgroundColor: "rgba(15,21,32,0.2)"
          },
          zIndex: 1e3
        }
      }
    }
  };
}
function cf(e) {
  return {
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: e.palette.text.primary
        }
      }
    }
  };
}
function uf() {
  return {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 500
        }
      }
    }
  };
}
function df(e) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: e.palette.border.light
        }
      }
    }
  };
}
function Lt({ color: e, theme: t }) {
  const r = Ue(t, e), { main: n, dark: i, contrastText: o } = r, a = `${e}Button`, c = Un(t, a);
  return {
    color: o,
    backgroundColor: n,
    boxShadow: c,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: i
    },
    "&:focus-visible": {
      outline: `2px solid ${i}`,
      outlineOffset: 2
    },
    "&::after": {
      borderRadius: "50px",
      boxShadow: `0 0 5px 5px ${Se(n, 0.9)}`
    },
    "&:active::after": {
      borderRadius: "50px",
      boxShadow: `0 0 0 0 ${Se(n, 0.9)}`
    }
  };
}
function ff(e) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          "&.Mui-disabled": {
            backgroundColor: e.palette.grey[200]
          },
          "&.MuiFab-primary": Lt({ color: "primary", theme: e }),
          "&.MuiFab-secondary": Lt({ color: "secondary", theme: e }),
          "&.Mui-error": Lt({ color: "error", theme: e }),
          "&.MuiFab-success": Lt({ color: "success", theme: e }),
          "&.MuiFab-info": Lt({ color: "info", theme: e }),
          "&.MuiFab-warning": Lt({ color: "warning", theme: e }),
          "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 4,
            opacity: 0,
            transition: "all 0.5s"
          },
          "&:active::after": {
            position: "absolute",
            borderRadius: 4,
            left: 0,
            top: 0,
            opacity: 1,
            transition: "0s"
          }
        }
      }
    }
  };
}
function pf(e) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: e.typography.h5.fontSize,
          fontWeight: e.typography.fontWeightRegular
        }
      }
    }
  };
}
function hf(e) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4
        },
        sizeSmall: {
          width: 32,
          height: 32,
          "& svg": {
            flexShrink: 0,
            width: 14,
            height: 14
          }
        },
        sizeMedium: {
          width: 36,
          height: 36,
          "& svg": {
            flexShrink: 0,
            width: 16,
            height: 16
          }
        },
        sizeLarge: {
          width: 40,
          height: 40,
          "& svg": {
            flexShrink: 0,
            width: 18,
            height: 18
          }
        }
      },
      variants: [
        {
          props: { shape: "rounded" },
          style: {
            borderRadius: 999
          }
        },
        {
          props: { shape: "square" },
          style: {
            borderRadius: 4
          }
        }
      ]
    }
  };
}
function gf(e) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: e.typography.h5.fontSize,
          fontWeight: e.typography.fontWeightRegular,
          "&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: e.palette.border.light
          },
          background: e.palette.background.paper
        },
        sizeSmall: {
          fontSize: "0.75rem"
        }
      }
    }
  };
}
function mf(e) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: e.palette.grey[600]
        },
        outlined: {
          lineHeight: "0.8em",
          "&.MuiInputLabel-sizeSmall": {
            lineHeight: "1em"
          },
          "&.MuiInputLabel-shrink": {
            background: e.palette.background.paper,
            padding: "0 8px",
            marginLeft: -6,
            lineHeight: "1.4375em"
          }
        }
      }
    }
  };
}
function vf() {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 6,
          borderRadius: 100
        },
        bar: {
          borderRadius: 100
        }
      }
    }
  };
}
function yf() {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover"
      }
    }
  };
}
function bf(e) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: e.palette.primary.main,
            "& .MuiListItemIcon-root": {
              color: e.palette.primary.main
            }
          }
        }
      }
    }
  };
}
function xf(e) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 24,
          color: "inherit",
          "& svg": {
            width: 13,
            height: 13,
            color: "inherit",
            strokeWidth: 1.5
          }
        }
      }
    }
  };
}
function Sf(e) {
  const t = Bt == null ? void 0 : Bt.reduce((r, n) => {
    const { darker: i, dark: o, main: a, light: c, lighter: s } = e.palette[n];
    return r.push({
      props: { color: n },
      style: {
        "& .MuiLoadingButton-loadingIndicator": {
          color: a
        }
      }
    }), ["text", "light"].forEach((l) => {
      r.push({
        props: { color: n, variant: l, loading: !0 },
        style: {
          background: s
        }
      });
    }), ["contained"].forEach((l) => {
      r.push({
        props: { color: n, variant: l, loading: !0 },
        style: {
          "&.MuiLoadingButton-loading": {
            color: e.palette.common.white
          }
        }
      });
    }), r;
  }, []);
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          padding: "6px 16px",
          "&.MuiLoadingButton-loading": {
            opacity: 0.6,
            textShadow: "none"
          }
        }
      },
      variants: [
        ...t,
        {
          props: { variant: "greyLight" },
          style: {
            "& .MuiLoadingButton-loadingIndicator": {
              color: e.palette.secondary.main
            }
          }
        }
      ]
    }
  };
}
function vt({ variant: e, theme: t }) {
  const r = Ue(t, e), { light: n } = r;
  return Un(t, `${e}`), {
    "& .MuiOutlinedInput-notchedOutline": {
      transition: "border-color 0.1s ease-in-out",
      borderColor: t.palette.border.main
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: e === "error" ? t.palette.error.main : t.palette.border.dark
    },
    "&.Mui-focused": {
      // boxShadow: shadows,
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${e === "error" ? t.palette.error.main : t.palette.border.dark}`
      }
    }
  };
}
function wf(e) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10.5px 14px 10.5px 12px"
        },
        notchedOutline: {
          borderColor: e.palette.mode === "dark" ? e.palette.grey[200] : e.palette.border.light
        },
        root: {
          ...vt({ variant: "primary", theme: e }),
          "&.Mui-error": {
            ...vt({ variant: "error", theme: e })
          }
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px"
        },
        inputMultiline: {
          padding: 0
        },
        colorSecondary: vt({ variant: "secondary", theme: e }),
        colorError: vt({ variant: "error", theme: e }),
        colorWarning: vt({ variant: "warning", theme: e }),
        colorInfo: vt({ variant: "info", theme: e }),
        colorSuccess: vt({ variant: "success", theme: e })
      }
    }
  };
}
function Ef() {
  return {
    MuiPagination: {
      defaultProps: {
        shape: "rounded"
      }
    }
  };
}
function he({ variant: e, color: t, theme: r }) {
  const n = Ue(r, t), { lighter: i, light: o, dark: a, main: c, contrastText: s } = n, l = {
    "&:focus-visible": {
      outline: `2px solid ${a}`,
      outlineOffset: 2,
      ...e === "text" && {
        backgroundColor: r.palette.background.paper
      }
    }
  };
  switch (e) {
    case "combined":
    case "contained":
      return {
        color: s,
        backgroundColor: c,
        "&:hover": {
          backgroundColor: o
        },
        ...l
      };
    case "outlined":
      return {
        borderColor: c,
        "&:hover": {
          backgroundColor: i,
          borderColor: o
        },
        ...l
      };
    case "text":
    default:
      return {
        color: c,
        "&:hover": {
          backgroundColor: c,
          color: i
        },
        ...l
      };
  }
}
function Tf(e) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: `2px solid ${e.palette.secondary.dark}`,
            outlineOffset: 2
          }
        },
        text: {
          "&.Mui-selected": {
            backgroundColor: "transparent",
            fontSize: "1rem",
            fontWeight: 500,
            "&.MuiPaginationItem-textPrimary": he({
              variant: "text",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-textSecondary": he({
              variant: "text",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-textError": he({
              variant: "text",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-textSuccess": he({
              variant: "text",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-textInfo": he({
              variant: "text",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-textWarning": he({
              variant: "text",
              color: "warning",
              theme: e
            })
          }
        },
        contained: {
          "&.Mui-selected": {
            "&.MuiPaginationItem-containedPrimary": he({
              variant: "contained",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-containedSecondary": he({
              variant: "contained",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-containedError": he({
              variant: "contained",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-containedSuccess": he({
              variant: "contained",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-containedInfo": he({
              variant: "contained",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-containedWarning": he({
              variant: "contained",
              color: "warning",
              theme: e
            })
          }
        },
        combined: {
          border: "1px solid",
          borderColor: e.palette.border.light,
          "&.MuiPaginationItem-ellipsis": {
            border: "none"
          },
          "&.Mui-selected": {
            "&.MuiPaginationItem-combinedPrimary": he({
              variant: "combined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSecondary": he({
              variant: "combined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedError": he({
              variant: "combined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSuccess": he({
              variant: "combined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-combinedInfo": he({
              variant: "combined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-combinedWarning": he({
              variant: "combined",
              color: "warning",
              theme: e
            })
          }
        },
        outlined: {
          borderColor: e.palette.border.light,
          "&.Mui-selected": {
            backgroundColor: "transparent",
            "&.MuiPaginationItem-outlinedPrimary": he({
              variant: "outlined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSecondary": he({
              variant: "outlined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedError": he({
              variant: "outlined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSuccess": he({
              variant: "outlined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedInfo": he({
              variant: "outlined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedWarning": he({
              variant: "outlined",
              color: "warning",
              theme: e
            })
          }
        }
      }
    }
  };
}
function Cf(e) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: e.customShadows.popper
        }
      }
    }
  };
}
function Rt({ color: e, theme: t }) {
  const r = Ue(t, e), { lighter: n, main: i, dark: o } = r;
  return {
    "& .dot": {
      backgroundColor: i
    },
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&.Mui-focusVisible": {
      outline: `2px solid ${o}`,
      outlineOffset: -4
    }
  };
}
function zf(e) {
  switch (e) {
    case "small":
      return { size: 16, dotSize: 8, position: 3 };
    case "large":
      return { size: 24, dotSize: 12, position: 5 };
    case "medium":
    default:
      return { size: 20, dotSize: 10, position: 4 };
  }
}
function En(e) {
  const t = zf(e);
  return {
    "& .icon": {
      width: t.size,
      height: t.size,
      "& .dot": {
        width: t.dotSize,
        height: t.dotSize,
        top: t.position,
        left: t.position
      }
    }
  };
}
function Mf(e) {
  const { palette: t } = e;
  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ D.jsx(
          Ie,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: "50%"
            }
          }
        ),
        checkedIcon: /* @__PURE__ */ D.jsx(
          Ie,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: "50%",
              position: "relative"
            },
            children: /* @__PURE__ */ D.jsx(
              Ie,
              {
                className: "dot",
                sx: {
                  width: 8,
                  height: 8,
                  backgroundColor: "inherit",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 3,
                  left: 3
                }
              }
            )
          }
        )
      },
      styleOverrides: {
        root: {
          "& .icon": {
            backgroundColor: e.palette.common.white
          },
          color: t.secondary[300],
          "&.size-small": {
            ...En("small")
          },
          "&.size-medium": {
            ...En("medium")
          },
          "&.size-large": {
            ...En("large")
          }
        },
        colorPrimary: Rt({ color: "primary", theme: e }),
        colorSecondary: Rt({ color: "secondary", theme: e }),
        colorSuccess: Rt({ color: "success", theme: e }),
        colorWarning: Rt({ color: "warning", theme: e }),
        colorInfo: Rt({ color: "info", theme: e }),
        colorError: Rt({ color: "error", theme: e })
      }
    }
  };
}
function Of(e) {
  return {
    MuiSelect: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            color: e.palette.text.primary,
            backgroundColor: e.palette.background.lightGrey,
            borderBottom: "none",
            borderRadius: 4,
            "&.Mui-focused": {
              backgroundColor: e.palette.background.softGrey
            },
            "&:hover": {
              backgroundColor: e.palette.background.softGrey
            },
            "& .MuiSelect-select:focus": {
              backgroundColor: e.palette.background.softGrey
            },
            "& .MuiSelect-select": {
              borderRadius: 4,
              padding: "10.5px 32px 10.5px 12px",
              "&.MuiInputBase-inputSizeSmall": {
                padding: "8.5px 32px 8.5px 12px"
              }
            },
            ":before": {
              border: "none !important"
            },
            ":after": {
              border: "none !important"
            }
          }
        }
      ]
    }
  };
}
function At({ color: e, theme: t }) {
  const r = Ue(t, e), { main: n } = r;
  return {
    border: `2px solid ${n}`
  };
}
function If(e) {
  return {
    MuiSlider: {
      styleOverrides: {
        track: {
          height: "1px"
        },
        thumb: {
          width: 14,
          height: 14,
          border: `2px solid ${e.palette.primary.main}`,
          backgroundColor: e.palette.background.paper,
          "&.MuiSlider-thumbColorPrimary": At({
            color: "primary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSecondary": At({
            color: "secondary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSuccess": At({
            color: "success",
            theme: e
          }),
          "&.MuiSlider-thumbColorWarning": At({
            color: "warning",
            theme: e
          }),
          "&.MuiSlider-thumbColorInfo": At({ color: "info", theme: e }),
          "&.MuiSlider-thumbColorError": At({
            color: "error",
            theme: e
          })
        },
        mark: {
          width: 4,
          height: 4,
          borderRadius: "50%",
          border: `1px solid ${e.palette.secondary.light}`,
          backgroundColor: e.palette.background.paper,
          "&.MuiSlider-markActive": {
            opacity: 1,
            borderColor: "inherit",
            borderWidth: 2
          }
        },
        rail: {
          color: e.palette.secondary.light
        },
        root: {
          "&.Mui-disabled": {
            ".MuiSlider-rail": {
              opacity: 0.25
            },
            ".MuiSlider-track": {
              color: e.palette.secondary.lighter
            },
            ".MuiSlider-thumb": {
              border: `2px solid ${e.palette.secondary.lighter}`
            }
          }
        },
        valueLabel: {
          backgroundColor: e.palette.grey[600],
          color: e.palette.grey[0]
        }
      }
    }
  };
}
function _f(e) {
  switch (e) {
    case "small":
      return { width: 28, height: 16, base: 12, thumb: 10, trackRadius: 8 };
    case "large":
      return { width: 60, height: 28, base: 32, thumb: 22, trackRadius: 24 };
    case "medium":
    default:
      return { width: 44, height: 22, base: 22, thumb: 16, trackRadius: 16 };
  }
}
function Tn(e, t) {
  const r = _f(t);
  return {
    width: r.width,
    height: r.height,
    "& .MuiSwitch-switchBase": {
      padding: 3,
      "&.Mui-checked": {
        transform: `translateX(${r.base}px)`
      }
    },
    "& .MuiSwitch-thumb": {
      width: r.thumb,
      height: r.thumb
    },
    "& .MuiSwitch-track": {
      borderRadius: r.trackRadius
    }
  };
}
function Pf(e) {
  return {
    MuiSwitch: {
      styleOverrides: {
        track: {
          opacity: 1,
          backgroundColor: e.palette.grey.main,
          boxSizing: "border-box"
        },
        thumb: {
          borderRadius: "50%",
          transition: e.transitions.create(["width"], {
            duration: 200
          })
        },
        switchBase: {
          "&.Mui-checked": {
            color: "#fff",
            "& + .MuiSwitch-track": {
              opacity: 1
            },
            "&.Mui-disabled": {
              color: e.palette.background.paper
            }
          },
          "&.Mui-disabled": {
            color: e.palette.background.paper,
            "+.MuiSwitch-track": {
              opacity: 0.3
            }
          }
          // '&.Mui-focusVisible': {
          //   outline: `2px solid #000`,
          //   outlineOffset: -2
          // }
        },
        root: {
          color: e.palette.text.primary,
          padding: 0,
          margin: 8,
          display: "flex",
          "& ~ .MuiFormControlLabel-label": {
            margin: 6
          },
          ...Tn(e, "medium")
        },
        sizeLarge: { ...Tn(e, "large") },
        sizeSmall: {
          ...Tn(e, "small")
        }
      }
    }
  };
}
function kf(e) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: e.typography.h4.fontSize,
          fontWeight: e.typography.h4.fontWeight,
          minHeight: 46,
          color: e.palette.text.primary,
          borderRadius: 4,
          "&:hover": {
            backgroundColor: "transparent",
            color: e.palette.primary.main
          },
          "&:focus-visible": {
            borderRadius: 4,
            outline: `2px solid ${e.palette.secondary.dark}`,
            outlineOffset: -3
          }
        }
      }
    }
  };
}
function $f(e) {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          // boxShadow: `0px 2px 25px 0px ${alpha(theme.palette.common.black, 0.05)}`
        }
      }
    }
  };
}
function Lf(e) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
function Rf(e) {
  const t = {
    "&:not(:last-of-type)": {
      position: "relative",
      "&:after": {
        position: "absolute",
        content: '""',
        backgroundColor: e.palette.border.light,
        width: 1,
        height: "calc(100% - 30px)",
        right: 0,
        top: 16
      }
    }
  };
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          padding: 12,
          borderColor: e.palette.border.light
        },
        sizeSmall: {
          padding: 8
        },
        head: {
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          ...t
        },
        footer: {
          fontSize: "0.75rem",
          textTransform: "uppercase",
          ...t
        }
      }
    }
  };
}
function Af(e) {
  return {
    MuiTableFooter: {
      styleOverrides: {
        root: {
          backgroundColor: e.palette.grey[50],
          borderTop: `2px solid ${e.palette.border.light}`,
          borderBottom: `1px solid ${e.palette.border.light}`
        }
      }
    }
  };
}
function Df(e) {
  return {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: e.palette.grey[50],
          borderTop: `1px solid ${e.palette.border.light}`,
          borderBottom: `2px solid ${e.palette.border.light}`
        }
      }
    }
  };
}
function jf() {
  return {
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          fontSize: "0.875rem"
        },
        displayedRows: {
          fontSize: "0.875rem"
        }
      }
    }
  };
}
function Wf() {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-of-type": {
            "& .MuiTableCell-root": {
              borderBottom: "none"
            }
          },
          "& .MuiTableCell-root": {
            "&:last-of-type": {
              paddingRight: 24
            },
            "&:first-of-type": {
              paddingLeft: 24
            }
          }
        }
      }
    }
  };
}
function Nf() {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          overflow: "visible"
        }
      }
    }
  };
}
function Vf(e) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: e.typography.h4.fontSize,
          fontWeight: e.typography.fontWeightRegular,
          "&.Mui-disabled": {
            borderColor: e.palette.border.light,
            color: e.palette.text.disabled
          },
          "&:focus-visible": {
            outline: `2px solid ${e.palette.secondary.dark}`,
            outlineOffset: 2
          }
        }
      }
    }
  };
}
function Bf(e) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: e.palette.grey.darker
        },
        arrow: {
          color: e.palette.grey.darker
        }
      }
    }
  };
}
function Ff() {
  return {
    MuiTreeItem: {
      styleOverrides: {
        content: {
          padding: 8
        },
        iconContainer: {
          "& svg": {
            fontSize: "0.625rem"
          }
        }
      }
    }
  };
}
function Gf() {
  return {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 12
        },
        color: "textPrimary"
      }
    }
  };
}
function Yf(e) {
  return ua(
    Xd(e),
    Ud(e),
    qd(e),
    Kd(e),
    Jd(),
    Zd(),
    Qd(e),
    ef(e),
    tf(),
    rf(),
    nf(),
    sf(e),
    af(e),
    pf(e),
    lf(),
    cf(e),
    uf(),
    df(e),
    ff(e),
    hf(),
    gf(e),
    mf(e),
    vf(),
    yf(),
    bf(e),
    xf(),
    Sf(e),
    wf(e),
    Ef(),
    Tf(e),
    Cf(e),
    Mf(e),
    Of(e),
    If(e),
    Pf(e),
    kf(e),
    Lf(),
    Rf(e),
    Af(e),
    Df(e),
    jf(),
    Wf(),
    Nf(),
    Vf(e),
    Bf(e),
    Ff(),
    Gf(),
    $f()
  );
}
const Hf = (e) => {
  var s, l, p, d, g, u, f, v, S, h, m, y, E, x, W, z, w, I, C, _, k, A, B, G, X, K, N, Z, M, $, q, U, T, P, O, F, R, V, Y, J, j, re, fe, we, ze, Re, Ae, De, Ze, ot, Ke, st, at, Qe, je, lt, Je, Ht, Xt, fr, pr, hr, gr, mr, vr, yr, St, Ut, et, wt, Et, qt, br, Kt, xr, Jt, Zt, Sr, wr;
  let t = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000"
  ], r = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"], n = ["#fafafb", "#e6ebf1"];
  const i = [...t, ...r, ...n], o = {
    0: i[0],
    50: i[1],
    100: i[2],
    200: i[3],
    300: i[4],
    400: i[5],
    500: i[6],
    600: i[7],
    700: i[8],
    800: i[9],
    900: i[10],
    A50: i[15],
    A100: i[11],
    A200: i[12],
    A400: i[13],
    A700: i[14],
    A800: i[16],
    lighter: ((s = e == null ? void 0 : e.colors.grey) == null ? void 0 : s.lighter) || "#bebebe",
    light: ((l = e == null ? void 0 : e.colors.grey) == null ? void 0 : l.light) || "#a9a9a9",
    main: ((d = (p = e == null ? void 0 : e.colors) == null ? void 0 : p.grey) == null ? void 0 : d.main) || "#7f7f7f",
    dark: ((u = (g = e == null ? void 0 : e.colors) == null ? void 0 : g.grey) == null ? void 0 : u.dark) || "#6a6a6a",
    darker: ((v = (f = e == null ? void 0 : e.colors) == null ? void 0 : f.grey) == null ? void 0 : v.darker) || "#3f3f3f"
  }, a = "#fff", c = "#000";
  return {
    primary: {
      lighter: ((h = (S = e == null ? void 0 : e.colors) == null ? void 0 : S.primary) == null ? void 0 : h.lighter) || "#cce1fe",
      light: ((y = (m = e == null ? void 0 : e.colors) == null ? void 0 : m.primary) == null ? void 0 : y.light) || "#b3d2fe",
      main: ((x = (E = e == null ? void 0 : e.colors) == null ? void 0 : E.primary) == null ? void 0 : x.main) || "#0168fa",
      dark: ((z = (W = e == null ? void 0 : e.colors) == null ? void 0 : W.primary) == null ? void 0 : z.dark) || "#0158d5",
      darker: ((I = (w = e == null ? void 0 : e.colors) == null ? void 0 : w.primary) == null ? void 0 : I.darker) || "#0153c8",
      contrastText: ((_ = (C = e == null ? void 0 : e.colors) == null ? void 0 : C.primary) == null ? void 0 : _.contrastText) || a,
      disableColor: a
    },
    // secondary: {
    //   lighter: themeSetting?.colors?.secondary?.lighter || '#f5f6fa', // item hover
    //   light: themeSetting?.colors?.secondary?.light || '#eef0f7', // item active
    //   main: themeSetting?.colors?.secondary?.main || '#8392A5',
    //   dark: themeSetting?.colors?.secondary?.dark || '#8392A5', // icon color
    //   darker: themeSetting?.colors?.secondary?.darker || '#525f76',
    //   contrastText: themeSetting?.colors?.secondary?.contrastText || contrastText,
    //   disableColor: contrastText
    // },
    secondary: {
      lighter: ((A = (k = e == null ? void 0 : e.colors) == null ? void 0 : k.background) == null ? void 0 : A.softGrey) || "#bebebe",
      // item hover
      light: ((B = e == null ? void 0 : e.colors) == null ? void 0 : B.grey.lighter) || "#a9a9a9",
      // item active
      main: ((X = (G = e == null ? void 0 : e.colors) == null ? void 0 : G.grey) == null ? void 0 : X.main) || "#7f7f7f",
      dark: ((N = (K = e == null ? void 0 : e.colors) == null ? void 0 : K.grey) == null ? void 0 : N.dark) || "#6a6a6a",
      // icon color
      darker: ((M = (Z = e == null ? void 0 : e.colors) == null ? void 0 : Z.grey) == null ? void 0 : M.darker) || "#3f3f3f",
      contrastText: ((q = ($ = e == null ? void 0 : e.colors) == null ? void 0 : $.secondary) == null ? void 0 : q.contrastText) || a,
      disableColor: a
    },
    error: {
      lighter: ((T = (U = e == null ? void 0 : e.colors) == null ? void 0 : U.error) == null ? void 0 : T.lighter) || "#f8d7da",
      light: ((O = (P = e == null ? void 0 : e.colors) == null ? void 0 : P.error) == null ? void 0 : O.light) || "#f5c2c7",
      main: ((R = (F = e == null ? void 0 : e.colors) == null ? void 0 : F.error) == null ? void 0 : R.main) || "#dc3545",
      dark: ((Y = (V = e == null ? void 0 : e.colors) == null ? void 0 : V.error) == null ? void 0 : Y.dark) || "#bb2d3b",
      darker: ((j = (J = e == null ? void 0 : e.colors) == null ? void 0 : J.error) == null ? void 0 : j.darker) || "#b02a37",
      contrastText: a,
      disableColor: a
    },
    // warning: {
    //   lighter: themeSetting?.colors?.warning?.lighter || '#fff3cd',
    //   light: themeSetting?.colors?.warning?.light || '#ffecb5',
    //   main: themeSetting?.colors?.warning?.main || '#ffc107',
    //   dark: themeSetting?.colors?.warning?.dark || '#ffca2c',
    //   darker: themeSetting?.colors?.warning?.darker || '#ffcd39',
    //   contrastText: contrastText,
    //   disableColor
    warning: {
      lighter: "#fff8e1",
      // 50
      light: "#ffe082",
      // 200
      main: "#ffc107",
      // 500
      dark: "#ffa000",
      // 700
      darker: "#ff6f00",
      // 900
      contrastText: a,
      disableColor: c
    },
    info: {
      lighter: ((fe = (re = e == null ? void 0 : e.colors) == null ? void 0 : re.info) == null ? void 0 : fe.lighter) || "#ccf1f6",
      light: ((ze = (we = e == null ? void 0 : e.colors) == null ? void 0 : we.info) == null ? void 0 : ze.light) || "#b3eaf2",
      main: ((Ae = (Re = e == null ? void 0 : e.colors) == null ? void 0 : Re.info) == null ? void 0 : Ae.main) || "#00b8d4",
      dark: ((Ze = (De = e == null ? void 0 : e.colors) == null ? void 0 : De.info) == null ? void 0 : Ze.dark) || "#26c3da",
      darker: ((Ke = (ot = e == null ? void 0 : e.colors) == null ? void 0 : ot.info) == null ? void 0 : Ke.darker) || "#33c6dd",
      contrastText: a,
      disableColor: c
    },
    success: {
      lighter: ((at = (st = e == null ? void 0 : e.colors) == null ? void 0 : st.success) == null ? void 0 : at.lighter) || "#cee7d9",
      light: ((je = (Qe = e == null ? void 0 : e.colors) == null ? void 0 : Qe.success) == null ? void 0 : je.light) || "#b6dbc6",
      main: ((Je = (lt = e == null ? void 0 : e.colors) == null ? void 0 : lt.success) == null ? void 0 : Je.main) || "#0c8842",
      dark: ((Xt = (Ht = e == null ? void 0 : e.colors) == null ? void 0 : Ht.success) == null ? void 0 : Xt.dark) || "#0a7438",
      darker: ((pr = (fr = e == null ? void 0 : e.colors) == null ? void 0 : fr.success) == null ? void 0 : pr.darker) || "#0a6d35",
      contrastText: a,
      disableColor: a
    },
    light: {
      lighter: "#eeeff4",
      light: "#e3e7ed",
      main: "#f4f5f8",
      dark: "#cfd0d3",
      darker: "#c3c4c6",
      contrastText: "#000",
      disableColor: c
    },
    dark: {
      lighter: "#97a3b9",
      light: "#8e9bb3",
      main: "#1c273c",
      dark: "#3e4759",
      darker: "#495263",
      contrastText: a,
      disableColor: a
    },
    text: {
      primary: ((gr = (hr = e == null ? void 0 : e.colors) == null ? void 0 : hr.text) == null ? void 0 : gr.primary) || "#001737",
      secondary: ((vr = (mr = e == null ? void 0 : e.colors) == null ? void 0 : mr.text) == null ? void 0 : vr.secondary) || "#8392A5",
      disabled: ((St = (yr = e == null ? void 0 : e.colors) == null ? void 0 : yr.text) == null ? void 0 : St.disabled) || "#8392A5",
      dark: "#1B2E4B"
    },
    background: {
      paper: ((et = (Ut = e == null ? void 0 : e.colors) == null ? void 0 : Ut.background) == null ? void 0 : et.paper) || "#fff",
      default: ((Et = (wt = e == null ? void 0 : e.colors) == null ? void 0 : wt.background) == null ? void 0 : Et.default) || "#fff",
      card: "#F5F6FA",
      softGrey: (br = (qt = e == null ? void 0 : e.colors) == null ? void 0 : qt.background) == null ? void 0 : br.softGrey,
      darkGrey: "#ececec",
      lightGrey: (xr = (Kt = e == null ? void 0 : e.colors) == null ? void 0 : Kt.background) == null ? void 0 : xr.lightGrey
    },
    divider: ((Jt = e == null ? void 0 : e.colors) == null ? void 0 : Jt.divider) || "#D9D9D9",
    border: {
      light: "#F0F0F0",
      main: (Zt = e == null ? void 0 : e.colors) == null ? void 0 : Zt.divider,
      // "D9D9D9"
      dark: "#a1a1a1"
    },
    grey: o,
    header: i[2],
    link: ((wr = (Sr = e == null ? void 0 : e.colors) == null ? void 0 : Sr.primary) == null ? void 0 : wr.main) || "#0168fa"
  };
}, Xf = (e) => Hf(e), Uf = (e) => {
  var r, n;
  const t = Xf(e);
  return {
    common: {
      black: "#000",
      white: "#fff"
    },
    ...t,
    action: {
      disabled: (n = (r = e == null ? void 0 : e.colors) == null ? void 0 : r.text) == null ? void 0 : n.secondary
    }
  };
}, qf = (e) => {
  var t, r, n, i, o, a, c, s, l, p, d, g, u, f, v;
  return {
    rowHover: "inset 1px 0 0 rgb(218,220,224),inset -1px 0 0 rgb(218,220,224),0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
    popper: "0px 4px 80px 0px #00000033",
    button: "0 2px #0000000b",
    text: "0 -1px 0 rgb(0 0 0 / 12%)",
    z1: `0px 1px 4px ${Se(((t = e == null ? void 0 : e.grey) == null ? void 0 : t[900]) || "#d9d9d9", 0.08)}`,
    primary: `0 0 0 2px ${Se(((r = e == null ? void 0 : e.primary) == null ? void 0 : r.main) || "#d9d9d9", 0.2)}`,
    secondary: `0 0 0 2px ${Se(((n = e == null ? void 0 : e.secondary) == null ? void 0 : n.main) || "#d9d9d9", 0.2)}`,
    error: `0 0 0 2px ${Se(((i = e == null ? void 0 : e.error) == null ? void 0 : i.main) || "#d9d9d9", 0.2)}`,
    warning: `0 0 0 2px ${Se(((o = e == null ? void 0 : e.warning) == null ? void 0 : o.main) || "#d9d9d9", 0.2)}`,
    info: `0 0 0 2px ${Se(((a = e == null ? void 0 : e.info) == null ? void 0 : a.main) || "#d9d9d9", 0.2)}`,
    success: `0 0 0 2px ${Se(((c = e == null ? void 0 : e.success) == null ? void 0 : c.main) || "#d9d9d9", 0.2)}`,
    grey: `0 0 0 2px ${Se(((s = e == null ? void 0 : e.grey) == null ? void 0 : s[500]) || "#d9d9d9", 0.2)}`,
    primaryButton: `0 14px 12px ${Se(((l = e == null ? void 0 : e.primary) == null ? void 0 : l.main) || "#d9d9d9", 0.2)}`,
    secondaryButton: `0 14px 12px ${Se(((p = e == null ? void 0 : e.secondary) == null ? void 0 : p.main) || "#d9d9d9", 0.2)}`,
    errorButton: `0 14px 12px ${Se(((d = e == null ? void 0 : e.error) == null ? void 0 : d.main) || "#d9d9d9", 0.2)}`,
    warningButton: `0 14px 12px ${Se(((g = e == null ? void 0 : e.warning) == null ? void 0 : g.main) || "#d9d9d9", 0.2)}`,
    infoButton: `0 14px 12px ${Se(((u = e == null ? void 0 : e.info) == null ? void 0 : u.main) || "#d9d9d9", 0.2)}`,
    successButton: `0 14px 12px ${Se(((f = e == null ? void 0 : e.success) == null ? void 0 : f.main) || "#d9d9d9", 0.2)}`,
    greyButton: `0 14px 12px ${Se(((v = e == null ? void 0 : e.grey) == null ? void 0 : v[500]) || "#d9d9d9", 0.2)}`,
    // wrapper: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' // old used in new GW
    // wrapper: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)' // used in new GW
    wrapper: "rgba(0, 0, 0, 0.08) 0px 1px 4px"
    // mantis theme. Refer: https://mantisdashboard.io/login
  };
}, Kf = (e) => {
  var t, r, n, i, o, a, c, s, l, p, d, g, u, f, v, S, h, m, y, E, x, W, z, w, I, C, _, k, A, B, G, X, K, N, Z, M, $, q, U, T, P, O, F, R, V, Y, J, j, re, fe, we, ze;
  return {
    htmlFontSize: e != null && e.fontSize ? typeof (e == null ? void 0 : e.fontSize) == "string" ? +((t = e == null ? void 0 : e.fontSize) == null ? void 0 : t.replace("px", "")) : e == null ? void 0 : e.fontSize : 16,
    fontFamily: e != null && e.fontFamily ? `${e == null ? void 0 : e.fontFamily}, NotoSansKR, 'IBM Plex Sans', sans-serif` : "NotoSansKR, 'IBM Plex Sans', sans-serif",
    fontWeightLight: ((r = e == null ? void 0 : e.fontWeight) == null ? void 0 : r.light) ?? 300,
    fontWeightRegular: ((n = e == null ? void 0 : e.fontWeight) == null ? void 0 : n.regular) ?? 400,
    fontWeightMedium: ((i = e == null ? void 0 : e.fontWeight) == null ? void 0 : i.medium) ?? 500,
    fontWeightSemiBold: ((o = e == null ? void 0 : e.fontWeight) == null ? void 0 : o.semibold) ?? 600,
    fontWeightBold: ((a = e == null ? void 0 : e.fontWeight) == null ? void 0 : a.bold) ?? 700,
    h1: {
      fontWeight: ((s = (c = e == null ? void 0 : e.typography) == null ? void 0 : c.h1) == null ? void 0 : s.fontWeight) ?? 600,
      fontSize: ((p = (l = e == null ? void 0 : e.typography) == null ? void 0 : l.h1) == null ? void 0 : p.fontSize) ?? "2.375rem"
    },
    h2: {
      fontWeight: ((g = (d = e == null ? void 0 : e.typography) == null ? void 0 : d.h2) == null ? void 0 : g.fontWeight) ?? 600,
      fontSize: ((f = (u = e == null ? void 0 : e.typography) == null ? void 0 : u.h2) == null ? void 0 : f.fontSize) ?? "1.875rem"
    },
    h3: {
      fontWeight: ((S = (v = e == null ? void 0 : e.typography) == null ? void 0 : v.h3) == null ? void 0 : S.fontWeight) ?? 600,
      fontSize: ((m = (h = e == null ? void 0 : e.typography) == null ? void 0 : h.h3) == null ? void 0 : m.fontSize) ?? "1.313rem"
    },
    h4: {
      fontWeight: ((E = (y = e == null ? void 0 : e.typography) == null ? void 0 : y.h4) == null ? void 0 : E.fontWeight) ?? 600,
      fontSize: ((W = (x = e == null ? void 0 : e.typography) == null ? void 0 : x.h4) == null ? void 0 : W.fontSize) ?? "0.875rem"
    },
    h5: {
      fontWeight: ((w = (z = e == null ? void 0 : e.typography) == null ? void 0 : z.h5) == null ? void 0 : w.fontWeight) ?? 600,
      fontSize: ((C = (I = e == null ? void 0 : e.typography) == null ? void 0 : I.h5) == null ? void 0 : C.fontSize) ?? "0.813rem"
    },
    h6: {
      fontWeight: ((k = (_ = e == null ? void 0 : e.typography) == null ? void 0 : _.h6) == null ? void 0 : k.fontWeight) ?? 500,
      fontSize: ((B = (A = e == null ? void 0 : e.typography) == null ? void 0 : A.h6) == null ? void 0 : B.fontSize) ?? "0.625rem"
    },
    caption: {
      fontWeight: ((X = (G = e == null ? void 0 : e.typography) == null ? void 0 : G.caption) == null ? void 0 : X.fontWeight) ?? 500,
      fontSize: ((N = (K = e == null ? void 0 : e.typography) == null ? void 0 : K.caption) == null ? void 0 : N.fontSize) ?? "0.75rem"
    },
    body1: {
      fontWeight: ((M = (Z = e == null ? void 0 : e.typography) == null ? void 0 : Z.body1) == null ? void 0 : M.fontWeight) ?? 400,
      fontSize: ((q = ($ = e == null ? void 0 : e.typography) == null ? void 0 : $.body1) == null ? void 0 : q.fontSize) ?? "0.8125rem"
    },
    body2: {
      fontWeight: ((T = (U = e == null ? void 0 : e.typography) == null ? void 0 : U.body2) == null ? void 0 : T.fontWeight) ?? 400,
      fontSize: ((O = (P = e == null ? void 0 : e.typography) == null ? void 0 : P.body2) == null ? void 0 : O.fontSize) ?? "0.75rem"
    },
    subtitle1: {
      fontWeight: ((R = (F = e == null ? void 0 : e.typography) == null ? void 0 : F.subtitle1) == null ? void 0 : R.fontWeight) ?? 600,
      fontSize: ((Y = (V = e == null ? void 0 : e.typography) == null ? void 0 : V.subtitle1) == null ? void 0 : Y.fontSize) ?? "0.875rem"
    },
    subtitle2: {
      fontWeight: ((j = (J = e == null ? void 0 : e.typography) == null ? void 0 : J.subtitle2) == null ? void 0 : j.fontWeight) ?? 600,
      fontSize: ((fe = (re = e == null ? void 0 : e.typography) == null ? void 0 : re.subtitle2) == null ? void 0 : fe.fontSize) ?? "0.75rem"
    },
    overline: {
      lineHeight: ((ze = (we = e == null ? void 0 : e.typography) == null ? void 0 : we.overline) == null ? void 0 : ze.lineHeight) ?? 1.66
    },
    button: {
      textTransform: "capitalize"
    }
  };
}, ds = "Inter", fs = "13px", ps = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, hs = {
  primary: {
    lighter: "#cec8c1",
    light: "#cec8c1",
    main: "#827567",
    dark: "#342f29",
    darker: "#342f29",
    contrastText: "#fff"
  },
  secondary: {
    lighter: "#ffd0c0",
    light: "#ffd0c0",
    main: "#FF8961",
    dark: "#8d2400",
    darker: "#8d2400",
    contrastText: "#fff"
  },
  error: {
    lighter: "#ffebee",
    light: "#ef9a9a",
    main: "#ef5350",
    dark: "#d32f2f",
    darker: "#b71c1c",
    contrastText: "#fff"
  },
  warning: {
    lighter: "#fffde7",
    light: "#fff59d",
    main: "#ffee58",
    dark: "#fbc02d",
    darker: "#f57f17",
    contrastText: "#fff"
  },
  info: {
    lighter: "#e0f7fa",
    light: "#80deea",
    main: "#26c6da",
    dark: "#0097a7",
    darker: "#006064",
    contrastText: "#fff"
  },
  success: {
    lighter: "#e8f5e9",
    light: "#a5d6a7",
    main: "#66bb6a",
    dark: "#388e3c",
    darker: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#001737",
    secondary: "#8392a5",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fff",
    softGrey: "#F4F4F4",
    lightGrey: "#F9F9F9"
  },
  grey: {
    lighter: "#bebebe",
    light: "#a9a9a9",
    main: "#7f7f7f",
    dark: "#6a6a6a",
    darker: "#3f3f3f",
    contrastText: "#fff"
  },
  divider: "#D9D9D9"
}, gs = {
  h1: {
    fontWeight: 600,
    fontSize: "38px"
  },
  h2: {
    fontWeight: 600,
    fontSize: "24px"
  },
  h3: {
    fontWeight: 600,
    fontSize: "16px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "14px"
  },
  h5: {
    fontWeight: 600,
    fontSize: "13px"
  },
  h6: {
    fontWeight: 500,
    fontSize: "10px"
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px"
  },
  body1: {
    fontWeight: 400,
    fontSize: "13px"
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px"
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "12px",
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  }
}, Jf = {
  fontFamily: ds,
  fontSize: fs,
  fontWeight: ps,
  colors: hs,
  typography: gs
}, Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: hs,
  default: Jf,
  fontFamily: ds,
  fontSize: fs,
  fontWeight: ps,
  typography: gs
}, Symbol.toStringTag, { value: "Module" })), ms = "Inter", vs = "13px", ys = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, bs = {
  primary: {
    lighter: "#d9edfd",
    light: "#42a5f5",
    main: "#0080FE",
    dark: "#064476",
    darker: "#03223b",
    contrastText: "#fff"
  },
  secondary: {
    lighter: "#ced2e4",
    light: "#ced2e4",
    main: "#848FBB",
    dark: "#2d3552",
    darker: "#2d3552",
    contrastText: "#fff"
  },
  error: {
    lighter: "#ffebee",
    light: "#ef9a9a",
    main: "#ef5350",
    dark: "#d32f2f",
    darker: "#b71c1c",
    contrastText: "#fff"
  },
  warning: {
    lighter: "#fffde7",
    light: "#fff59d",
    main: "#ffee58",
    dark: "#fbc02d",
    darker: "#f57f17",
    contrastText: "#fff"
  },
  info: {
    lighter: "#e0f7fa",
    light: "#80deea",
    main: "#26c6da",
    dark: "#0097a7",
    darker: "#006064",
    contrastText: "#fff"
  },
  success: {
    lighter: "#e8f5e9",
    light: "#a5d6a7",
    main: "#66bb6a",
    dark: "#388e3c",
    darker: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#001737",
    secondary: "#8392a5",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fff",
    softGrey: "#F4F4F4",
    lightGrey: "#F9F9F9"
  },
  grey: {
    lighter: "#bebebe",
    light: "#a9a9a9",
    main: "#7f7f7f",
    dark: "#6a6a6a",
    darker: "#3f3f3f",
    contrastText: "#fff"
  },
  divider: "#D9D9D9"
}, xs = {
  h1: {
    fontWeight: 600,
    fontSize: "38px"
  },
  h2: {
    fontWeight: 600,
    fontSize: "24px"
  },
  h3: {
    fontWeight: 600,
    fontSize: "16px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "14px"
  },
  h5: {
    fontWeight: 600,
    fontSize: "13px"
  },
  h6: {
    fontWeight: 500,
    fontSize: "10px"
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px"
  },
  body1: {
    fontWeight: 400,
    fontSize: "13px"
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px"
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "12px",
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  }
}, Qf = {
  fontFamily: ms,
  fontSize: vs,
  fontWeight: ys,
  colors: bs,
  typography: xs
}, ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: bs,
  default: Qf,
  fontFamily: ms,
  fontSize: vs,
  fontWeight: ys,
  typography: xs
}, Symbol.toStringTag, { value: "Module" })), Ss = "Inter", ws = "13px", Es = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Ts = {
  primary: {
    lighter: "#cddec7",
    light: "#a7c69d",
    main: "#82AE73",
    dark: "#5b7950",
    darker: "#415739",
    contrastText: "#fff"
  },
  secondary: {
    lighter: "#d6b9c0",
    light: "#be8f9b",
    main: "#ae7382",
    dark: "#8b5c68",
    darker: "#573941",
    contrastText: "#fff"
  },
  error: {
    lighter: "#ffebee",
    light: "#ef9a9a",
    main: "#ef5350",
    dark: "#d32f2f",
    darker: "#b71c1c",
    contrastText: "#fff"
  },
  warning: {
    lighter: "#fffde7",
    light: "#fff59d",
    main: "#ffee58",
    dark: "#fbc02d",
    darker: "#f57f17",
    contrastText: "#fff"
  },
  info: {
    lighter: "#e0f7fa",
    light: "#80deea",
    main: "#26c6da",
    dark: "#0097a7",
    darker: "#006064",
    contrastText: "#fff"
  },
  success: {
    lighter: "#e8f5e9",
    light: "#a5d6a7",
    main: "#66bb6a",
    dark: "#388e3c",
    darker: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#001737",
    secondary: "#8392a5",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fff",
    softGrey: "#F4F4F4",
    lightGrey: "#F9F9F9"
  },
  grey: {
    lighter: "#bebebe",
    light: "#a9a9a9",
    main: "#7f7f7f",
    dark: "#6a6a6a",
    darker: "#3f3f3f",
    contrastText: "#fff"
  },
  divider: "#D9D9D9"
}, Cs = {
  h1: {
    fontWeight: 600,
    fontSize: "38px"
  },
  h2: {
    fontWeight: 600,
    fontSize: "24px"
  },
  h3: {
    fontWeight: 600,
    fontSize: "16px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "14px"
  },
  h5: {
    fontWeight: 600,
    fontSize: "13px"
  },
  h6: {
    fontWeight: 500,
    fontSize: "10px"
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px"
  },
  body1: {
    fontWeight: 400,
    fontSize: "13px"
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px"
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "12px",
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  }
}, tp = {
  fontFamily: Ss,
  fontSize: ws,
  fontWeight: Es,
  colors: Ts,
  typography: Cs
}, rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Ts,
  default: tp,
  fontFamily: Ss,
  fontSize: ws,
  fontWeight: Es,
  typography: Cs
}, Symbol.toStringTag, { value: "Module" })), zs = "Inter", Ms = "13px", Os = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Is = {
  primary: {
    lighter: "#d8aed3",
    light: "#af7ca9",
    main: "#8D4585",
    dark: "#70376a",
    darker: "#381c35",
    contrastText: "#fff"
  },
  secondary: {
    lighter: "#ced1b4",
    light: "#a9af7c",
    main: "#858d45",
    dark: "#6a7037",
    darker: "#4f5429",
    contrastText: "#fff"
  },
  error: {
    lighter: "#ffebee",
    light: "#ef9a9a",
    main: "#ef5350",
    dark: "#d32f2f",
    darker: "#b71c1c",
    contrastText: "#fff"
  },
  warning: {
    lighter: "#fffde7",
    light: "#fff59d",
    main: "#ffee58",
    dark: "#fbc02d",
    darker: "#f57f17",
    contrastText: "#fff"
  },
  info: {
    lighter: "#e0f7fa",
    light: "#80deea",
    main: "#26c6da",
    dark: "#0097a7",
    darker: "#006064",
    contrastText: "#fff"
  },
  success: {
    lighter: "#e8f5e9",
    light: "#a5d6a7",
    main: "#66bb6a",
    dark: "#388e3c",
    darker: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#001737",
    secondary: "#8392a5",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fff",
    softGrey: "#F4F4F4",
    lightGrey: "#F9F9F9"
  },
  grey: {
    lighter: "#bebebe",
    light: "#a9a9a9",
    main: "#7f7f7f",
    dark: "#6a6a6a",
    darker: "#3f3f3f",
    contrastText: "#fff"
  },
  divider: "#D9D9D9"
}, _s = {
  h1: {
    fontWeight: 600,
    fontSize: "38px"
  },
  h2: {
    fontWeight: 600,
    fontSize: "24px"
  },
  h3: {
    fontWeight: 600,
    fontSize: "16px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "14px"
  },
  h5: {
    fontWeight: 600,
    fontSize: "13px"
  },
  h6: {
    fontWeight: 500,
    fontSize: "10px"
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px"
  },
  body1: {
    fontWeight: 400,
    fontSize: "13px"
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px"
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "12px",
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  }
}, np = {
  fontFamily: zs,
  fontSize: Ms,
  fontWeight: Os,
  colors: Is,
  typography: _s
}, ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Is,
  default: np,
  fontFamily: zs,
  fontSize: Ms,
  fontWeight: Os,
  typography: _s
}, Symbol.toStringTag, { value: "Module" })), Ps = "Inter", ks = "13px", $s = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Ls = {
  primary: {
    lighter: "#dae6f0",
    light: "#b4cde2",
    main: "#4682B4",
    dark: "#1c3448",
    darker: "#152736",
    contrastText: "#fff"
  },
  secondary: {
    lighter: "#e1c9b5",
    light: "#caa07d",
    main: "#b47846",
    dark: "#906038",
    darker: "#5a3c23",
    contrastText: "#fff"
  },
  error: {
    lighter: "#ffebee",
    light: "#ef9a9a",
    main: "#ef5350",
    dark: "#d32f2f",
    darker: "#b71c1c",
    contrastText: "#fff"
  },
  warning: {
    lighter: "#fffde7",
    light: "#fff59d",
    main: "#ffee58",
    dark: "#fbc02d",
    darker: "#f57f17",
    contrastText: "#fff"
  },
  info: {
    lighter: "#e0f7fa",
    light: "#80deea",
    main: "#26c6da",
    dark: "#0097a7",
    darker: "#006064",
    contrastText: "#fff"
  },
  success: {
    lighter: "#e8f5e9",
    light: "#a5d6a7",
    main: "#66bb6a",
    dark: "#388e3c",
    darker: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#001737",
    secondary: "#8392a5",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fff",
    softGrey: "#F4F4F4",
    lightGrey: "#F9F9F9"
  },
  grey: {
    lighter: "#bebebe",
    light: "#a9a9a9",
    main: "#7f7f7f",
    dark: "#6a6a6a",
    darker: "#3f3f3f",
    contrastText: "#fff"
  },
  divider: "#D9D9D9"
}, Rs = {
  h1: {
    fontWeight: 600,
    fontSize: "38px"
  },
  h2: {
    fontWeight: 600,
    fontSize: "24px"
  },
  h3: {
    fontWeight: 600,
    fontSize: "16px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "14px"
  },
  h5: {
    fontWeight: 600,
    fontSize: "13px"
  },
  h6: {
    fontWeight: 500,
    fontSize: "10px"
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px"
  },
  body1: {
    fontWeight: 400,
    fontSize: "13px"
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px"
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: 600
  },
  subtitle2: {
    fontSize: "12px",
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  }
}, op = {
  fontFamily: Ps,
  fontSize: ks,
  fontWeight: $s,
  colors: Ls,
  typography: Rs
}, sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Ls,
  default: op,
  fontFamily: Ps,
  fontSize: ks,
  fontWeight: $s,
  typography: Rs
}, Symbol.toStringTag, { value: "Module" })), ao = /* @__PURE__ */ Object.assign({ "./themeJSON/coffee.json": Zf, "./themeJSON/default.json": ep, "./themeJSON/fern.json": rp, "./themeJSON/plum.json": ip, "./themeJSON/steel.json": sp }), kn = {};
for (const e in ao) {
  const r = e.split("/").pop().slice(0, -5);
  kn[r] = ao[e];
}
const Bt = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info"
], wp = ({ color: e, children: t }) => {
  const r = kn[e] || kn.default, n = lo(() => {
    var a, c, s;
    const i = Uf(r), o = Yd({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          // old GW:  768 (inclusive)
          md: 1024,
          // old GW: 992 (inclusive)
          lg: 1266,
          // old Gw: above 1290 (exclusive)
          xl: 1440
        }
      },
      // direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: i,
      customShadows: qf(i),
      typography: Kf(r),
      border: {
        dark: `1px solid ${(a = i == null ? void 0 : i.border) == null ? void 0 : a.dark}`,
        main: `1px solid ${(c = i == null ? void 0 : i.border) == null ? void 0 : c.main}`,
        light: `1px solid ${(s = i == null ? void 0 : i.border) == null ? void 0 : s.light}`
      }
    });
    return o.components = Yf(o), o;
  }, [r]);
  return /* @__PURE__ */ D.jsx(Us, { injectFirst: !0, children: /* @__PURE__ */ D.jsxs(us, { theme: n, children: [
    /* @__PURE__ */ D.jsx(qs, {}),
    t
  ] }) });
}, ap = (e, t) => {
  const [r, n] = Me(!1), [i, o] = Me(window.innerWidth);
  return $n(() => {
    const { current: a } = e;
    a && (() => {
      const s = a.scrollHeight > a.clientHeight;
      n(s), t && t(s);
    })();
  }, [e, i]), Ge(() => {
    const a = ca.debounce(() => {
      o(window.innerWidth);
    }, 500);
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), r;
}, Ep = ({
  children: e,
  sx: t,
  lines: r = 1
}) => {
  const n = de(null), [i, o] = Me(!1);
  return ap(n, (a) => o(a)), /* @__PURE__ */ D.jsx(
    Ks,
    {
      title: e,
      placement: "top",
      slotProps: {
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -12]
              }
            }
          ]
        }
      },
      disableFocusListener: !i,
      disableHoverListener: !i,
      disableInteractive: !i,
      disableTouchListener: !i,
      children: /* @__PURE__ */ D.jsx(
        yt,
        {
          ref: n,
          sx: {
            // ...ellipsisSx,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: r,
            // Điều chỉnh số dòng
            overflow: "hidden",
            ...t
          },
          children: e
        }
      )
    }
  );
};
export {
  gp as C,
  vp as L,
  bp as S,
  wp as T,
  mp as a,
  xp as b,
  Sp as c,
  Ep as d,
  yp as i
};

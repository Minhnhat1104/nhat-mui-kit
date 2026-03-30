import { useTheme as Qt, Box as ke, CircularProgress as yr, Typography as ft, Chip as Ho, OutlinedInput as Xo, Stack as At, Select as qo, MenuItem as Uo, IconButton as zt, Portal as Ko, Backdrop as Jo, StyledEngineProvider as Zo, CssBaseline as Qo, Tooltip as es } from "@mui/material";
import * as Ee from "react";
import me, { useState as Ie, useRef as Me, useCallback as kn, forwardRef as Pr, useEffect as Jt, useLayoutEffect as xi, createContext as Si, useContext as ts, useMemo as rs } from "react";
import { ChevronUp as ns, ChevronDown as is, X as Ti, ChevronLeft as os, ChevronRight as Ei, ZoomIn as ss, ZoomOut as as, Download as ls, Minus as cs, Check as ds } from "react-feather";
import { ArrowDropUp as us, ArrowDropDown as fs } from "@mui/icons-material";
import { Allotment as Dr } from "allotment";
import ps, { merge as gs } from "lodash";
import { Global as hs, ThemeContext as wi } from "@emotion/react";
import "@emotion/styled";
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ci(e) {
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
var sn = { exports: {} }, Vt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function ys() {
  if (Pn) return Vt;
  Pn = 1;
  var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, a, d) {
    var p, f = {}, h = null, l = null;
    d !== void 0 && (h = "" + d), a.key !== void 0 && (h = "" + a.key), a.ref !== void 0 && (l = a.ref);
    for (p in a) n.call(a, p) && !o.hasOwnProperty(p) && (f[p] = a[p]);
    if (c && c.defaultProps) for (p in a = c.defaultProps, a) f[p] === void 0 && (f[p] = a[p]);
    return { $$typeof: t, type: c, key: h, ref: l, props: f, _owner: i.current };
  }
  return Vt.Fragment = r, Vt.jsx = s, Vt.jsxs = s, Vt;
}
var Yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function vs() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), u = Symbol.iterator, v = "@@iterator";
    function T(m) {
      if (m === null || typeof m != "object")
        return null;
      var I = u && m[u] || m[v];
      return typeof I == "function" ? I : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(m) {
      {
        for (var I = arguments.length, W = new Array(I > 1 ? I - 1 : 0), q = 1; q < I; q++)
          W[q - 1] = arguments[q];
        b("error", m, W);
      }
    }
    function b(m, I, W) {
      {
        var q = g.ReactDebugCurrentFrame, ie = q.getStackAddendum();
        ie !== "" && (I += "%s", W = W.concat([ie]));
        var ce = W.map(function(ee) {
          return String(ee);
        });
        ce.unshift("Warning: " + I), Function.prototype.apply.call(console[m], console, ce);
      }
    }
    var C = !1, x = !1, j = !1, B = !1, E = !1, z;
    z = Symbol.for("react.module.reference");
    function w(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === o || E || m === i || m === d || m === p || B || m === l || C || x || j || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === f || m.$$typeof === s || m.$$typeof === c || m.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === z || m.getModuleId !== void 0));
    }
    function P(m, I, W) {
      var q = m.displayName;
      if (q)
        return q;
      var ie = I.displayName || I.name || "";
      return ie !== "" ? W + "(" + ie + ")" : W;
    }
    function A(m) {
      return m.displayName || "Context";
    }
    function G(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var I = m;
            return A(I) + ".Consumer";
          case s:
            var W = m;
            return A(W._context) + ".Provider";
          case a:
            return P(m, m.render, "ForwardRef");
          case f:
            var q = m.displayName || null;
            return q !== null ? q : G(m.type) || "Memo";
          case h: {
            var ie = m, ce = ie._payload, ee = ie._init;
            try {
              return G(ee(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, re, ae, D, K, M, R, Y;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function S() {
      {
        if (U === 0) {
          re = console.log, ae = console.info, D = console.warn, K = console.error, M = console.group, R = console.groupCollapsed, Y = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        U++;
      }
    }
    function k() {
      {
        if (U--, U === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, m, {
              value: re
            }),
            info: N({}, m, {
              value: ae
            }),
            warn: N({}, m, {
              value: D
            }),
            error: N({}, m, {
              value: K
            }),
            group: N({}, m, {
              value: M
            }),
            groupCollapsed: N({}, m, {
              value: R
            }),
            groupEnd: N({}, m, {
              value: Y
            })
          });
        }
        U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = g.ReactCurrentDispatcher, L;
    function F(m, I, W) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ie) {
            var q = ie.stack.trim().match(/\n( *(at )?)/);
            L = q && q[1] || "";
          }
        return `
` + L + m;
      }
    }
    var X = !1, V;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      V = new ne();
    }
    function $(m, I) {
      if (!m || X)
        return "";
      {
        var W = V.get(m);
        if (W !== void 0)
          return W;
      }
      var q;
      X = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = O.current, O.current = null, S();
      try {
        if (I) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Pe) {
              q = Pe;
            }
            Reflect.construct(m, [], ee);
          } else {
            try {
              ee.call();
            } catch (Pe) {
              q = Pe;
            }
            m.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            q = Pe;
          }
          m();
        }
      } catch (Pe) {
        if (Pe && q && typeof Pe.stack == "string") {
          for (var Z = Pe.stack.split(`
`), Oe = q.stack.split(`
`), he = Z.length - 1, be = Oe.length - 1; he >= 1 && be >= 0 && Z[he] !== Oe[be]; )
            be--;
          for (; he >= 1 && be >= 0; he--, be--)
            if (Z[he] !== Oe[be]) {
              if (he !== 1 || be !== 1)
                do
                  if (he--, be--, be < 0 || Z[he] !== Oe[be]) {
                    var We = `
` + Z[he].replace(" at new ", " at ");
                    return m.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", m.displayName)), typeof m == "function" && V.set(m, We), We;
                  }
                while (he >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        X = !1, O.current = ce, k(), Error.prepareStackTrace = ie;
      }
      var vt = m ? m.displayName || m.name : "", lt = vt ? F(vt) : "";
      return typeof m == "function" && V.set(m, lt), lt;
    }
    function Q(m, I, W) {
      return $(m, !1);
    }
    function de(m) {
      var I = m.prototype;
      return !!(I && I.isReactComponent);
    }
    function Se(m, I, W) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return $(m, de(m));
      if (typeof m == "string")
        return F(m);
      switch (m) {
        case d:
          return F("Suspense");
        case p:
          return F("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            return Q(m.render);
          case f:
            return Se(m.type, I, W);
          case h: {
            var q = m, ie = q._payload, ce = q._init;
            try {
              return Se(ce(ie), I, W);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Re = {}, Ae = g.ReactDebugCurrentFrame;
    function Le(m) {
      if (m) {
        var I = m._owner, W = Se(m.type, m._source, I ? I.type : null);
        Ae.setExtraStackFrame(W);
      } else
        Ae.setExtraStackFrame(null);
    }
    function He(m, I, W, q, ie) {
      {
        var ce = Function.call.bind(Ce);
        for (var ee in m)
          if (ce(m, ee)) {
            var Z = void 0;
            try {
              if (typeof m[ee] != "function") {
                var Oe = Error((q || "React class") + ": " + W + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              Z = m[ee](I, ee, q, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              Z = he;
            }
            Z && !(Z instanceof Error) && (Le(ie), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", W, ee, typeof Z), Le(null)), Z instanceof Error && !(Z.message in Re) && (Re[Z.message] = !0, Le(ie), y("Failed %s type: %s", W, Z.message), Le(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Ve(m) {
      return Qe(m);
    }
    function et(m) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, W = I && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return W;
      }
    }
    function tt(m) {
      try {
        return Xe(m), !1;
      } catch {
        return !0;
      }
    }
    function Xe(m) {
      return "" + m;
    }
    function je(m) {
      if (tt(m))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(m)), Xe(m);
    }
    var rt = g.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Wt;
    function rr(m) {
      if (Ce.call(m, "ref")) {
        var I = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function nr(m) {
      if (Ce.call(m, "key")) {
        var I = Object.getOwnPropertyDescriptor(m, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ir(m, I) {
      typeof m.ref == "string" && rt.current;
    }
    function or(m, I) {
      {
        var W = function() {
          jt || (jt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function sr(m, I) {
      {
        var W = function() {
          Wt || (Wt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var ar = function(m, I, W, q, ie, ce, ee) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: I,
        ref: W,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function lr(m, I, W, q, ie) {
      {
        var ce, ee = {}, Z = null, Oe = null;
        W !== void 0 && (je(W), Z = "" + W), nr(I) && (je(I.key), Z = "" + I.key), rr(I) && (Oe = I.ref, ir(I, ie));
        for (ce in I)
          Ce.call(I, ce) && !Ye.hasOwnProperty(ce) && (ee[ce] = I[ce]);
        if (m && m.defaultProps) {
          var he = m.defaultProps;
          for (ce in he)
            ee[ce] === void 0 && (ee[ce] = he[ce]);
        }
        if (Z || Oe) {
          var be = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Z && or(ee, be), Oe && sr(ee, be);
        }
        return ar(m, Z, Oe, ie, q, rt.current, ee);
      }
    }
    var ht = g.ReactCurrentOwner, Dt = g.ReactDebugCurrentFrame;
    function qe(m) {
      if (m) {
        var I = m._owner, W = Se(m.type, m._source, I ? I.type : null);
        Dt.setExtraStackFrame(W);
      } else
        Dt.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function yt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Bt() {
      {
        if (ht.current) {
          var m = G(ht.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function cr(m) {
      return "";
    }
    var Nt = {};
    function dr(m) {
      {
        var I = Bt();
        if (!I) {
          var W = typeof m == "string" ? m : m.displayName || m.name;
          W && (I = `

Check the top-level render call using <` + W + ">.");
        }
        return I;
      }
    }
    function Ft(m, I) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var W = dr(I);
        if (Nt[W])
          return;
        Nt[W] = !0;
        var q = "";
        m && m._owner && m._owner !== ht.current && (q = " It was passed a child from " + G(m._owner.type) + "."), qe(m), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, q), qe(null);
      }
    }
    function Gt(m, I) {
      {
        if (typeof m != "object")
          return;
        if (Ve(m))
          for (var W = 0; W < m.length; W++) {
            var q = m[W];
            yt(q) && Ft(q, I);
          }
        else if (yt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ie = T(m);
          if (typeof ie == "function" && ie !== m.entries)
            for (var ce = ie.call(m), ee; !(ee = ce.next()).done; )
              yt(ee.value) && Ft(ee.value, I);
        }
      }
    }
    function ur(m) {
      {
        var I = m.type;
        if (I == null || typeof I == "string")
          return;
        var W;
        if (typeof I == "function")
          W = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === f))
          W = I.propTypes;
        else
          return;
        if (W) {
          var q = G(I);
          He(W, m.props, "prop", q, m);
        } else if (I.PropTypes !== void 0 && !mt) {
          mt = !0;
          var ie = G(I);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(m) {
      {
        for (var I = Object.keys(m.props), W = 0; W < I.length; W++) {
          var q = I[W];
          if (q !== "children" && q !== "key") {
            qe(m), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), qe(null);
            break;
          }
        }
        m.ref !== null && (qe(m), y("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Mn = {};
    function On(m, I, W, q, ie, ce) {
      {
        var ee = w(m);
        if (!ee) {
          var Z = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = cr();
          Oe ? Z += Oe : Z += Bt();
          var he;
          m === null ? he = "null" : Ve(m) ? he = "array" : m !== void 0 && m.$$typeof === t ? (he = "<" + (G(m.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : he = typeof m, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, Z);
        }
        var be = lr(m, I, W, ie, ce);
        if (be == null)
          return be;
        if (ee) {
          var We = I.children;
          if (We !== void 0)
            if (q)
              if (Ve(We)) {
                for (var vt = 0; vt < We.length; vt++)
                  Gt(We[vt], m);
                Object.freeze && Object.freeze(We);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gt(We, m);
        }
        if (Ce.call(I, "key")) {
          var lt = G(m), Pe = Object.keys(I).filter(function(Yo) {
            return Yo !== "key";
          }), Wr = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mn[lt + Wr]) {
            var Vo = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Wr, lt, Vo, lt), Mn[lt + Wr] = !0;
          }
        }
        return m === n ? fr(be) : ur(be), be;
      }
    }
    function Bo(m, I, W) {
      return On(m, I, W, !0);
    }
    function No(m, I, W) {
      return On(m, I, W, !1);
    }
    var Fo = No, Go = Bo;
    Yt.Fragment = n, Yt.jsx = Fo, Yt.jsxs = Go;
  }()), Yt;
}
process.env.NODE_ENV === "production" ? sn.exports = ys() : sn.exports = vs();
var _ = sn.exports;
const Ku = (e) => {
  const { sx: t, value: r, variant: n = "determinate" } = e, i = Qt();
  return /* @__PURE__ */ _.jsxs(ke, { sx: { position: "relative", width: "fit-content", ...t, height: 60 }, children: [
    /* @__PURE__ */ _.jsx(
      yr,
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
    /* @__PURE__ */ _.jsx(
      yr,
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
    /* @__PURE__ */ _.jsx(
      ft,
      {
        variant: "caption",
        component: "div",
        sx: { color: "text.secondary", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        children: `${Math.round(r)}%`
      }
    )
  ] });
}, bs = "groupware-table-counter", Ju = (e) => {
  const { label: t, color: r = "primary", size: n = "small", fontSize: i } = e, o = Qt();
  return /* @__PURE__ */ _.jsx(
    Ho,
    {
      className: bs,
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
}, zn = {
  small: 28,
  medium: 40
}, Zu = (e) => {
  const { sx: t, fullHeight: r = !1, size: n = "medium", label: i } = e;
  return /* @__PURE__ */ _.jsxs(
    ke,
    {
      alignItems: "center",
      justifyContent: "center",
      sx: {
        height: r ? "100%" : 350,
        ...t
      },
      children: [
        /* @__PURE__ */ _.jsx(
          yr,
          {
            size: n,
            style: { width: zn[n], height: zn[n] }
          }
        ),
        i && /* @__PURE__ */ _.jsx(
          ft,
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
}, _n = (e) => {
  const {
    onLongPress: t,
    onClick: r,
    onClear: n,
    options: { shouldPreventDefault: i, delay: o, clearOnMouseLeave: s } = {
      shouldPreventDefault: !0,
      delay: 300,
      clearOnMouseLeave: !1
    }
  } = e, [c, a] = Ie(!1), d = Me(), p = Me(), f = kn(
    (l) => {
      i && l.target && (l.target.addEventListener("touchend", $n, {
        passive: !1
      }), p.current = l.target), d.current = setTimeout(() => {
        t(l), a(!0);
      }, o);
    },
    [t, o, i]
  ), h = kn(
    (l, u = !0) => {
      d.current && clearTimeout(d.current), u && !c && r(), n(), a(!1), i && p.current && p.current.removeEventListener("touchend", $n);
    },
    [i, r, c]
  );
  return {
    onMouseDown: (l) => f(l),
    onTouchStart: (l) => f(l),
    onMouseUp: (l) => h(l),
    onMouseLeave: (l) => h(l, !1),
    onTouchEnd: (l) => h(l)
  };
}, $n = (e) => {
  if (!("touches" in e)) return;
  const t = e == null ? void 0 : e.touches;
  (t == null ? void 0 : t.length) < 2 && e.preventDefault && e.preventDefault();
}, xs = (e, t) => {
  const {
    value: r,
    onChange: n,
    min: i = 0,
    max: o = 999999999999999,
    endAdornment: s,
    sx: c
  } = e, a = Qt(), d = Ee.useRef({
    interval: null,
    value: 0
  }), [p, f] = Ie(r);
  Ee.useEffect(() => {
    f(r && typeof r == "number" ? r : 0);
  }, [r]);
  const h = (g) => {
    n(g), f(g);
  }, l = (g) => {
    f((y) => {
      const b = Number(y);
      return console.log("🚀 ~ nVal:", b), b && !isNaN(b) || b === 0 ? o && b < o ? (d.current.value = b + 1, g && g(b + 1), b + 1) : (d.current.value = o, g && g(o), o) : (d.current.value = 1, g && g(1), 1);
    });
  }, u = (g) => {
    f((y) => {
      const b = Number(y);
      return b && !isNaN(b) || b === 0 && i < b ? (d.current.value = b - 1, g && g(b - 1), b - 1) : (d.current.value = i, g && g(i), i);
    });
  }, v = _n({
    onClear: () => {
      var g, y, b;
      (g = d.current) != null && g.interval && (clearInterval((y = d.current) == null ? void 0 : y.interval), h((b = d.current) == null ? void 0 : b.value), d.current.interval = null);
    },
    onClick: () => l((g) => n(g)),
    onLongPress: () => {
      l(), d.current.interval = setInterval(l, 50);
    }
  }), T = _n({
    onClear: () => {
      var g, y, b;
      (g = d.current) != null && g.interval && (clearInterval((y = d.current) == null ? void 0 : y.interval), h((b = d.current) == null ? void 0 : b.value), d.current.interval = null);
    },
    onClick: () => u((g) => n(g)),
    onLongPress: () => {
      u(), d.current.interval = setInterval(u, 50);
    }
  });
  return /* @__PURE__ */ _.jsx(
    Xo,
    {
      value: p,
      onChange: (g) => {
        var b;
        const y = Number((b = g == null ? void 0 : g.target) == null ? void 0 : b.value);
        (y && !isNaN(y) || y === 0) && (i > y ? h(i) : o && y > o || h(y));
      },
      endAdornment: /* @__PURE__ */ _.jsxs(At, { direction: "row", alignItems: "center", spacing: 1, children: [
        s,
        /* @__PURE__ */ _.jsxs(At, { children: [
          /* @__PURE__ */ _.jsx(
            ke,
            {
              ...v,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                background: a.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: a.border.light,
                borderBottom: "none",
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: a.palette.primary.main,
                  borderColor: a.palette.primary.main
                }
              },
              children: /* @__PURE__ */ _.jsx(ns, { size: 12, style: { margin: "auto", flexShrink: 0 } })
            }
          ),
          /* @__PURE__ */ _.jsx(
            ke,
            {
              ...T,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                background: a.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: a.border.light,
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: a.palette.primary.main,
                  borderColor: a.palette.primary.main
                }
              },
              children: /* @__PURE__ */ _.jsx(
                is,
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
}, Qu = Pr(xs), ef = (e) => {
  const {
    value: t,
    onChange: r,
    options: n,
    size: i,
    sx: o,
    showIcon: s = !1,
    disablePortal: c = !1,
    useClear: a = !1,
    placeholder: d = "Select an item",
    fieldLabel: p = "label",
    fieldValue: f = "value",
    MenuProps: h = {},
    isLoading: l = !1,
    disabled: u = !1,
    fullWidth: v = !0,
    variant: T = "outlined",
    closeOnSelect: g = !1
  } = e, y = Qt(), [b, C] = Ie(""), [x, j] = Ie(!1);
  Jt(() => {
    C(t ? t == null ? void 0 : t[f] : "");
  }, [t]);
  const B = (z) => {
    C(z);
    const w = n.find((P) => (P == null ? void 0 : P[f]) === z);
    r && r(w), g && j(!1);
  }, E = (z) => {
    z == null || z.stopPropagation(), C(""), r && r(null);
  };
  return /* @__PURE__ */ _.jsx(
    qo,
    {
      variant: T,
      disabled: u,
      fullWidth: v,
      displayEmpty: !0,
      inputProps: { "aria-label": "select" },
      size: i,
      value: b,
      open: x,
      onOpen: () => {
        j(!0);
      },
      onClose: () => {
        j(!1);
      },
      MenuProps: {
        disablePortal: c,
        // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
        PaperProps: {
          style: {
            maxHeight: "30vh"
          }
        },
        ...h
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
          display: a && b || l ? "none" : ""
        },
        "& .MuiSelect-icon": { display: "none" },
        "&.Mui-focused .MuiIconButton-root": { color: "primary.main" }
      },
      renderValue: (z) => {
        const w = n.find((P) => (P == null ? void 0 : P[f]) === z);
        return z || z === 0 ? /* @__PURE__ */ _.jsxs(
          ke,
          {
            sx: {
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              alignItems: "center"
            },
            children: [
              s && (w == null ? void 0 : w.icon) && (typeof (w == null ? void 0 : w.icon) == "function" || typeof (w == null ? void 0 : w.icon) == "object") && /* @__PURE__ */ _.jsx(w.icon, { ...w == null ? void 0 : w.iconProps }),
              /* @__PURE__ */ _.jsx(
                ft,
                {
                  sx: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" },
                  children: w == null ? void 0 : w[p]
                }
              ),
              s && (w == null ? void 0 : w.endIcon) && (typeof (w == null ? void 0 : w.endIcon) == "function" || typeof (w == null ? void 0 : w.endIcon) == "object") && /* @__PURE__ */ _.jsx(w.endIcon, { ...w == null ? void 0 : w.endIconProps })
            ]
          }
        ) : /* @__PURE__ */ _.jsx(
          ft,
          {
            color: "text.secondary",
            variant: "h5",
            fontWeight: y.typography.fontWeightRegular,
            children: "placeholder"
          }
        );
      },
      endAdornment: l ? /* @__PURE__ */ _.jsx(yr, { size: 18, sx: { mr: 0.5 } }) : /* @__PURE__ */ _.jsxs(
        At,
        {
          direction: "row",
          alignItems: "center",
          spacing: 0.5,
          onClick: u ? void 0 : () => j((z) => !z),
          sx: { cursor: u ? void 0 : "pointer" },
          children: [
            a && b && /* @__PURE__ */ _.jsx(
              zt,
              {
                size: "small",
                sx: {
                  visibility: b ? "visible" : "hidden",
                  color: y.palette.grey.main
                },
                onClick: E,
                variant: "light",
                color: "secondary",
                children: /* @__PURE__ */ _.jsx(Ti, {})
              }
            ),
            x ? /* @__PURE__ */ _.jsx(us, { sx: { color: y.palette.grey.main } }) : /* @__PURE__ */ _.jsx(fs, { sx: { color: y.palette.grey.main } })
          ]
        }
      ),
      onChange: (z) => {
        const w = z.target.value;
        B(w);
      },
      children: n == null ? void 0 : n.filter(
        (z) => (z == null ? void 0 : z.isShow) || !(z != null && z.hasOwnProperty("isShow"))
      ).map((z, w) => {
        const P = z == null ? void 0 : z.icon, A = z == null ? void 0 : z.endIcon;
        return /* @__PURE__ */ _.jsxs(
          Uo,
          {
            disabled: (z == null ? void 0 : z.disabled) || !1,
            value: z == null ? void 0 : z[f],
            sx: { display: "flex", alignItems: "center" },
            children: [
              s && P && (typeof P == "function" || typeof P == "object") && /* @__PURE__ */ _.jsx(P, { ...z == null ? void 0 : z.iconProps }),
              /* @__PURE__ */ _.jsx(ft, { children: z == null ? void 0 : z[p] }),
              s && A && (typeof A == "function" || typeof A == "object") && /* @__PURE__ */ _.jsx(A, { ...z == null ? void 0 : z.endIconProps })
            ]
          },
          w
        );
      })
    }
  );
};
let pr;
const Ss = new Uint8Array(16);
function Ts() {
  if (!pr && (pr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !pr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return pr(Ss);
}
const Te = [];
for (let e = 0; e < 256; ++e)
  Te.push((e + 256).toString(16).slice(1));
function Es(e, t = 0) {
  return Te[e[t + 0]] + Te[e[t + 1]] + Te[e[t + 2]] + Te[e[t + 3]] + "-" + Te[e[t + 4]] + Te[e[t + 5]] + "-" + Te[e[t + 6]] + Te[e[t + 7]] + "-" + Te[e[t + 8]] + Te[e[t + 9]] + "-" + Te[e[t + 10]] + Te[e[t + 11]] + Te[e[t + 12]] + Te[e[t + 13]] + Te[e[t + 14]] + Te[e[t + 15]];
}
const ws = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Rn = {
  randomUUID: ws
};
function Cs(e, t, r) {
  if (Rn.randomUUID && !e)
    return Rn.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Ts)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Es(n);
}
const Ms = 500, Os = 320, An = {
  height: "100%",
  overflow: "visible"
}, tf = (e) => {
  const {
    isView: t = !1,
    leftPane: r,
    rightPane: n,
    isSplitMode: i,
    leftInitSize: o = 360,
    leftMinSize: s = Os,
    leftMaxSize: c = Ms,
    onDragEnd: a
  } = e, d = Qt(), p = Me(null), f = Me(Cs());
  let h = !1, l = !1;
  return i || (t ? h = !0 : l = !0), /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx("style", { children: `
          :root {
            --focus-border: ${d.palette.primary.main};
            --separator-border: ${d.palette.border.light};
          }
        ` }),
    /* @__PURE__ */ _.jsx(
      ke,
      {
        sx: {
          width: "100%",
          height: "100%",
          [`& #allotment-${f.current.toString()} > .sash-container`]: {
            display: i ? "block" : "none"
          }
        },
        children: /* @__PURE__ */ _.jsxs(
          Dr,
          {
            ref: p,
            onDragEnd: a,
            id: `allotment-${f.current}`,
            separator: i,
            children: [
              /* @__PURE__ */ _.jsx(
                Dr.Pane,
                {
                  minSize: i ? s : 0,
                  maxSize: i ? c : 1 / 0,
                  visible: !h,
                  preferredSize: o,
                  children: !h && /* @__PURE__ */ _.jsx(ke, { sx: { ...An }, children: r })
                }
              ),
              /* @__PURE__ */ _.jsx(Dr.Pane, { minSize: 0, visible: !l, children: !l && /* @__PURE__ */ _.jsx(ke, { sx: { ...An }, children: n }) })
            ]
          }
        )
      }
    )
  ] });
};
function Ln(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function pn(e = {}, t = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : Ln(t[n]) && Ln(e[n]) && Object.keys(t[n]).length > 0 && pn(e[n], t[n]);
  });
}
const Mi = {
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
function ot() {
  const e = typeof document < "u" ? document : {};
  return pn(e, Mi), e;
}
const ks = {
  document: Mi,
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
function we() {
  const e = typeof window < "u" ? window : {};
  return pn(e, ks), e;
}
function Ps(e = "") {
  return e.trim().split(" ").filter((t) => !!t.trim());
}
function Is(e) {
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
function Oi(e, t = 0) {
  return setTimeout(e, t);
}
function vr() {
  return Date.now();
}
function zs(e) {
  const t = we();
  let r;
  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function an(e, t = "x") {
  const r = we();
  let n, i, o;
  const s = zs(e);
  return r.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((c) => c.replace(",", ".")).join(", ")), o = new r.WebKitCSSMatrix(i === "none" ? "" : i)) : (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = o.toString().split(",")), t === "x" && (r.WebKitCSSMatrix ? i = o.m41 : n.length === 16 ? i = parseFloat(n[12]) : i = parseFloat(n[4])), t === "y" && (r.WebKitCSSMatrix ? i = o.m42 : n.length === 16 ? i = parseFloat(n[13]) : i = parseFloat(n[5])), i || 0;
}
function gr(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function _s(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function _e(...e) {
  const t = Object(e[0]);
  for (let r = 1; r < e.length; r += 1) {
    const n = e[r];
    if (n != null && !_s(n)) {
      const i = Object.keys(Object(n)).filter((o) => o !== "__proto__" && o !== "constructor" && o !== "prototype");
      for (let o = 0, s = i.length; o < s; o += 1) {
        const c = i[o], a = Object.getOwnPropertyDescriptor(n, c);
        a !== void 0 && a.enumerable && (gr(t[c]) && gr(n[c]) ? n[c].__swiper__ ? t[c] = n[c] : _e(t[c], n[c]) : !gr(t[c]) && gr(n[c]) ? (t[c] = {}, n[c].__swiper__ ? t[c] = n[c] : _e(t[c], n[c])) : t[c] = n[c]);
      }
    }
  }
  return t;
}
function bt(e, t, r) {
  e.style.setProperty(t, r);
}
function ki({
  swiper: e,
  targetPosition: t,
  side: r
}) {
  const n = we(), i = -e.translate;
  let o = null, s;
  const c = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const a = t > i ? "next" : "prev", d = (f, h) => a === "next" && f >= h || a === "prev" && f <= h, p = () => {
    s = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = s);
    const f = Math.max(Math.min((s - o) / c, 1), 0), h = 0.5 - Math.cos(f * Math.PI) / 2;
    let l = i + h * (t - i);
    if (d(l, t) && (l = t), e.wrapperEl.scrollTo({
      [r]: l
    }), d(l, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: l
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(p);
  };
  p();
}
function Be(e, t = "") {
  const r = we(), n = [...e.children];
  return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((i) => i.matches(t)) : n;
}
function $s(e, t) {
  const r = [t];
  for (; r.length > 0; ) {
    const n = r.shift();
    if (e === n)
      return !0;
    r.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : []);
  }
}
function Rs(e, t) {
  const r = we();
  let n = t.contains(e);
  return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = $s(e, t))), n;
}
function br(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function xr(e, t = []) {
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(t) ? t : Ps(t)), r;
}
function jn(e) {
  const t = we(), r = ot(), n = e.getBoundingClientRect(), i = r.body, o = e.clientTop || i.clientTop || 0, s = e.clientLeft || i.clientLeft || 0, c = e === t ? t.scrollY : e.scrollTop, a = e === t ? t.scrollX : e.scrollLeft;
  return {
    top: n.top + c - o,
    left: n.left + a - s
  };
}
function As(e, t) {
  const r = [];
  for (; e.previousElementSibling; ) {
    const n = e.previousElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function Ls(e, t) {
  const r = [];
  for (; e.nextElementSibling; ) {
    const n = e.nextElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
  }
  return r;
}
function nt(e, t) {
  return we().getComputedStyle(e, null).getPropertyValue(t);
}
function Sr(e) {
  let t = e, r;
  if (t) {
    for (r = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (r += 1);
    return r;
  }
}
function qt(e, t) {
  const r = [];
  let n = e.parentElement;
  for (; n; )
    t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
  return r;
}
function ln(e, t, r) {
  const n = we();
  return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
}
function Ue(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function Tr(e, t = "") {
  typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (r) => r
  }).createHTML(t) : e.innerHTML = t;
}
function js(e, t, r, n) {
  return e.params.createElements && Object.keys(n).forEach((i) => {
    if (!r[i] && r.auto === !0) {
      let o = Be(e.el, `.${n[i]}`)[0];
      o || (o = xr("div", n[i]), o.className = n[i], e.el.append(o)), r[i] = o, t[i] = o;
    }
  }), r;
}
function Ht(e = "") {
  return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function Ws({
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
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
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
  let o, s = 0;
  function c() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function a(g, y) {
    const {
      bulletActiveClass: b
    } = e.params.pagination;
    g && (g = g[`${y === "prev" ? "previous" : "next"}ElementSibling`], g && (g.classList.add(`${b}-${y}`), g = g[`${y === "prev" ? "previous" : "next"}ElementSibling`], g && g.classList.add(`${b}-${y}-${y}`)));
  }
  function d(g, y, b) {
    if (g = g % b, y = y % b, y === g + 1)
      return "next";
    if (y === g - 1)
      return "previous";
  }
  function p(g) {
    const y = g.target.closest(Ht(e.params.pagination.bulletClass));
    if (!y)
      return;
    g.preventDefault();
    const b = Sr(y) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === b) return;
      const C = d(e.realIndex, b, e.slides.length);
      C === "next" ? e.slideNext() : C === "previous" ? e.slidePrev() : e.slideToLoop(b);
    } else
      e.slideTo(b);
  }
  function f() {
    const g = e.rtl, y = e.params.pagination;
    if (c()) return;
    let b = e.pagination.el;
    b = Ue(b);
    let C, x;
    const j = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, B = e.params.loop ? Math.ceil(j / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (x = e.previousRealIndex || 0, C = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (C = e.snapIndex, x = e.previousSnapIndex) : (x = e.previousIndex || 0, C = e.activeIndex || 0), y.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const E = e.pagination.bullets;
      let z, w, P;
      if (y.dynamicBullets && (o = ln(E[0], e.isHorizontal() ? "width" : "height"), b.forEach((A) => {
        A.style[e.isHorizontal() ? "width" : "height"] = `${o * (y.dynamicMainBullets + 4)}px`;
      }), y.dynamicMainBullets > 1 && x !== void 0 && (s += C - (x || 0), s > y.dynamicMainBullets - 1 ? s = y.dynamicMainBullets - 1 : s < 0 && (s = 0)), z = Math.max(C - s, 0), w = z + (Math.min(E.length, y.dynamicMainBullets) - 1), P = (w + z) / 2), E.forEach((A) => {
        const G = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((N) => `${y.bulletActiveClass}${N}`)].map((N) => typeof N == "string" && N.includes(" ") ? N.split(" ") : N).flat();
        A.classList.remove(...G);
      }), b.length > 1)
        E.forEach((A) => {
          const G = Sr(A);
          G === C ? A.classList.add(...y.bulletActiveClass.split(" ")) : e.isElement && A.setAttribute("part", "bullet"), y.dynamicBullets && (G >= z && G <= w && A.classList.add(...`${y.bulletActiveClass}-main`.split(" ")), G === z && a(A, "prev"), G === w && a(A, "next"));
        });
      else {
        const A = E[C];
        if (A && A.classList.add(...y.bulletActiveClass.split(" ")), e.isElement && E.forEach((G, N) => {
          G.setAttribute("part", N === C ? "bullet-active" : "bullet");
        }), y.dynamicBullets) {
          const G = E[z], N = E[w];
          for (let U = z; U <= w; U += 1)
            E[U] && E[U].classList.add(...`${y.bulletActiveClass}-main`.split(" "));
          a(G, "prev"), a(N, "next");
        }
      }
      if (y.dynamicBullets) {
        const A = Math.min(E.length, y.dynamicMainBullets + 4), G = (o * A - o) / 2 - P * o, N = g ? "right" : "left";
        E.forEach((U) => {
          U.style[e.isHorizontal() ? N : "top"] = `${G}px`;
        });
      }
    }
    b.forEach((E, z) => {
      if (y.type === "fraction" && (E.querySelectorAll(Ht(y.currentClass)).forEach((w) => {
        w.textContent = y.formatFractionCurrent(C + 1);
      }), E.querySelectorAll(Ht(y.totalClass)).forEach((w) => {
        w.textContent = y.formatFractionTotal(B);
      })), y.type === "progressbar") {
        let w;
        y.progressbarOpposite ? w = e.isHorizontal() ? "vertical" : "horizontal" : w = e.isHorizontal() ? "horizontal" : "vertical";
        const P = (C + 1) / B;
        let A = 1, G = 1;
        w === "horizontal" ? A = P : G = P, E.querySelectorAll(Ht(y.progressbarFillClass)).forEach((N) => {
          N.style.transform = `translate3d(0,0,0) scaleX(${A}) scaleY(${G})`, N.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      y.type === "custom" && y.renderCustom ? (Tr(E, y.renderCustom(e, C + 1, B)), z === 0 && n("paginationRender", E)) : (z === 0 && n("paginationRender", E), n("paginationUpdate", E)), e.params.watchOverflow && e.enabled && E.classList[e.isLocked ? "add" : "remove"](y.lockClass);
    });
  }
  function h() {
    const g = e.params.pagination;
    if (c()) return;
    const y = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let b = e.pagination.el;
    b = Ue(b);
    let C = "";
    if (g.type === "bullets") {
      let x = e.params.loop ? Math.ceil(y / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && x > y && (x = y);
      for (let j = 0; j < x; j += 1)
        g.renderBullet ? C += g.renderBullet.call(e, j, g.bulletClass) : C += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`;
    }
    g.type === "fraction" && (g.renderFraction ? C = g.renderFraction.call(e, g.currentClass, g.totalClass) : C = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? C = g.renderProgressbar.call(e, g.progressbarFillClass) : C = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], b.forEach((x) => {
      g.type !== "custom" && Tr(x, C || ""), g.type === "bullets" && e.pagination.bullets.push(...x.querySelectorAll(Ht(g.bulletClass)));
    }), g.type !== "custom" && n("paginationRender", b[0]);
  }
  function l() {
    e.params.pagination = js(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const g = e.params.pagination;
    if (!g.el) return;
    let y;
    typeof g.el == "string" && e.isElement && (y = e.el.querySelector(g.el)), !y && typeof g.el == "string" && (y = [...document.querySelectorAll(g.el)]), y || (y = g.el), !(!y || y.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(y) && y.length > 1 && (y = [...e.el.querySelectorAll(g.el)], y.length > 1 && (y = y.find((b) => qt(b, ".swiper")[0] === e.el))), Array.isArray(y) && y.length === 1 && (y = y[0]), Object.assign(e.pagination, {
      el: y
    }), y = Ue(y), y.forEach((b) => {
      g.type === "bullets" && g.clickable && b.classList.add(...(g.clickableClass || "").split(" ")), b.classList.add(g.modifierClass + g.type), b.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (b.classList.add(`${g.modifierClass}${g.type}-dynamic`), s = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && b.classList.add(g.progressbarOppositeClass), g.clickable && b.addEventListener("click", p), e.enabled || b.classList.add(g.lockClass);
    }));
  }
  function u() {
    const g = e.params.pagination;
    if (c()) return;
    let y = e.pagination.el;
    y && (y = Ue(y), y.forEach((b) => {
      b.classList.remove(g.hiddenClass), b.classList.remove(g.modifierClass + g.type), b.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (b.classList.remove(...(g.clickableClass || "").split(" ")), b.removeEventListener("click", p));
    })), e.pagination.bullets && e.pagination.bullets.forEach((b) => b.classList.remove(...g.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const g = e.params.pagination;
    let {
      el: y
    } = e.pagination;
    y = Ue(y), y.forEach((b) => {
      b.classList.remove(g.horizontalClass, g.verticalClass), b.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? T() : (l(), h(), f());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && f();
  }), r("snapIndexChange", () => {
    f();
  }), r("snapGridLengthChange", () => {
    h(), f();
  }), r("destroy", () => {
    u();
  }), r("enable disable", () => {
    let {
      el: g
    } = e.pagination;
    g && (g = Ue(g), g.forEach((y) => y.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    f();
  }), r("click", (g, y) => {
    const b = y.target, C = Ue(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && C && C.length > 0 && !b.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && b === e.navigation.nextEl || e.navigation.prevEl && b === e.navigation.prevEl)) return;
      const x = C[0].classList.contains(e.params.pagination.hiddenClass);
      n(x === !0 ? "paginationShow" : "paginationHide"), C.forEach((j) => j.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const v = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = Ue(g), g.forEach((y) => y.classList.remove(e.params.pagination.paginationDisabledClass))), l(), h(), f();
  }, T = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = Ue(g), g.forEach((y) => y.classList.add(e.params.pagination.paginationDisabledClass))), u();
  };
  Object.assign(e.pagination, {
    enable: v,
    disable: T,
    render: h,
    update: f,
    init: l,
    destroy: u
  });
}
function Ds({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = we();
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
  let o = 1, s = !1, c = !1, a = {
    x: 0,
    y: 0
  };
  const d = -3;
  let p, f;
  const h = [], l = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, u = {
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
  let T = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return T;
    },
    set(S) {
      if (T !== S) {
        const k = l.imageEl, O = l.slideEl;
        n("zoomChange", S, k, O);
      }
      T = S;
    }
  });
  function g() {
    if (h.length < 2) return 1;
    const S = h[0].pageX, k = h[0].pageY, O = h[1].pageX, L = h[1].pageY;
    return Math.sqrt((O - S) ** 2 + (L - k) ** 2);
  }
  function y() {
    const S = e.params.zoom, k = l.imageWrapEl.getAttribute("data-swiper-zoom") || S.maxRatio;
    if (S.limitToOriginalSize && l.imageEl && l.imageEl.naturalWidth) {
      const O = l.imageEl.naturalWidth / l.imageEl.offsetWidth;
      return Math.min(O, k);
    }
    return k;
  }
  function b() {
    if (h.length < 2) return {
      x: null,
      y: null
    };
    const S = l.imageEl.getBoundingClientRect();
    return [(h[0].pageX + (h[1].pageX - h[0].pageX) / 2 - S.x - i.scrollX) / o, (h[0].pageY + (h[1].pageY - h[0].pageY) / 2 - S.y - i.scrollY) / o];
  }
  function C() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function x(S) {
    const k = C();
    return !!(S.target.matches(k) || e.slides.filter((O) => O.contains(S.target)).length > 0);
  }
  function j(S) {
    const k = `.${e.params.zoom.containerClass}`;
    return !!(S.target.matches(k) || [...e.hostEl.querySelectorAll(k)].filter((O) => O.contains(S.target)).length > 0);
  }
  function B(S) {
    if (S.pointerType === "mouse" && h.splice(0, h.length), !x(S)) return;
    const k = e.params.zoom;
    if (p = !1, f = !1, h.push(S), !(h.length < 2)) {
      if (p = !0, l.scaleStart = g(), !l.slideEl) {
        l.slideEl = S.target.closest(`.${e.params.slideClass}, swiper-slide`), l.slideEl || (l.slideEl = e.slides[e.activeIndex]);
        let O = l.slideEl.querySelector(`.${k.containerClass}`);
        if (O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), l.imageEl = O, O ? l.imageWrapEl = qt(l.imageEl, `.${k.containerClass}`)[0] : l.imageWrapEl = void 0, !l.imageWrapEl) {
          l.imageEl = void 0;
          return;
        }
        l.maxRatio = y();
      }
      if (l.imageEl) {
        const [O, L] = b();
        l.originX = O, l.originY = L, l.imageEl.style.transitionDuration = "0ms";
      }
      s = !0;
    }
  }
  function E(S) {
    if (!x(S)) return;
    const k = e.params.zoom, O = e.zoom, L = h.findIndex((F) => F.pointerId === S.pointerId);
    L >= 0 && (h[L] = S), !(h.length < 2) && (f = !0, l.scaleMove = g(), l.imageEl && (O.scale = l.scaleMove / l.scaleStart * o, O.scale > l.maxRatio && (O.scale = l.maxRatio - 1 + (O.scale - l.maxRatio + 1) ** 0.5), O.scale < k.minRatio && (O.scale = k.minRatio + 1 - (k.minRatio - O.scale + 1) ** 0.5), l.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`));
  }
  function z(S) {
    if (!x(S) || S.pointerType === "mouse" && S.type === "pointerout") return;
    const k = e.params.zoom, O = e.zoom, L = h.findIndex((F) => F.pointerId === S.pointerId);
    L >= 0 && h.splice(L, 1), !(!p || !f) && (p = !1, f = !1, l.imageEl && (O.scale = Math.max(Math.min(O.scale, l.maxRatio), k.minRatio), l.imageEl.style.transitionDuration = `${e.params.speed}ms`, l.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`, o = O.scale, s = !1, O.scale > 1 && l.slideEl ? l.slideEl.classList.add(`${k.zoomedSlideClass}`) : O.scale <= 1 && l.slideEl && l.slideEl.classList.remove(`${k.zoomedSlideClass}`), O.scale === 1 && (l.originX = 0, l.originY = 0, l.slideEl = void 0)));
  }
  let w;
  function P() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function A() {
    clearTimeout(w), e.touchEventsData.preventTouchMoveFromPointerMove = !0, w = setTimeout(() => {
      e.destroyed || P();
    });
  }
  function G(S) {
    const k = e.device;
    if (!l.imageEl || u.isTouched) return;
    k.android && S.cancelable && S.preventDefault(), u.isTouched = !0;
    const O = h.length > 0 ? h[0] : S;
    u.touchesStart.x = O.pageX, u.touchesStart.y = O.pageY;
  }
  function N(S) {
    const O = S.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!x(S) || !j(S))
      return;
    const L = e.zoom;
    if (!l.imageEl)
      return;
    if (!u.isTouched || !l.slideEl) {
      O && ae(S);
      return;
    }
    if (O) {
      ae(S);
      return;
    }
    u.isMoved || (u.width = l.imageEl.offsetWidth || l.imageEl.clientWidth, u.height = l.imageEl.offsetHeight || l.imageEl.clientHeight, u.startX = an(l.imageWrapEl, "x") || 0, u.startY = an(l.imageWrapEl, "y") || 0, l.slideWidth = l.slideEl.offsetWidth, l.slideHeight = l.slideEl.offsetHeight, l.imageWrapEl.style.transitionDuration = "0ms");
    const F = u.width * L.scale, X = u.height * L.scale;
    if (u.minX = Math.min(l.slideWidth / 2 - F / 2, 0), u.maxX = -u.minX, u.minY = Math.min(l.slideHeight / 2 - X / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = h.length > 0 ? h[0].pageX : S.pageX, u.touchesCurrent.y = h.length > 0 ? h[0].pageY : S.pageY, Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (e.allowClick = !1), !u.isMoved && !s) {
      if (e.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) {
        u.isTouched = !1, P();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) {
        u.isTouched = !1, P();
        return;
      }
    }
    S.cancelable && S.preventDefault(), S.stopPropagation(), A(), u.isMoved = !0;
    const ne = (L.scale - o) / (l.maxRatio - e.params.zoom.minRatio), {
      originX: $,
      originY: Q
    } = l;
    u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + ne * (u.width - $ * 2), u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + ne * (u.height - Q * 2), u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** 0.8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** 0.8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** 0.8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** 0.8), v.prevPositionX || (v.prevPositionX = u.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = u.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (u.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (u.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(u.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(u.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = u.touchesCurrent.x, v.prevPositionY = u.touchesCurrent.y, v.prevTime = Date.now(), l.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
  }
  function U() {
    const S = e.zoom;
    if (h.length = 0, !l.imageEl) return;
    if (!u.isTouched || !u.isMoved) {
      u.isTouched = !1, u.isMoved = !1;
      return;
    }
    u.isTouched = !1, u.isMoved = !1;
    let k = 300, O = 300;
    const L = v.x * k, F = u.currentX + L, X = v.y * O, V = u.currentY + X;
    v.x !== 0 && (k = Math.abs((F - u.currentX) / v.x)), v.y !== 0 && (O = Math.abs((V - u.currentY) / v.y));
    const ne = Math.max(k, O);
    u.currentX = F, u.currentY = V;
    const $ = u.width * S.scale, Q = u.height * S.scale;
    u.minX = Math.min(l.slideWidth / 2 - $ / 2, 0), u.maxX = -u.minX, u.minY = Math.min(l.slideHeight / 2 - Q / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), l.imageWrapEl.style.transitionDuration = `${ne}ms`, l.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
  }
  function re() {
    const S = e.zoom;
    l.slideEl && e.activeIndex !== e.slides.indexOf(l.slideEl) && (l.imageEl && (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), l.imageWrapEl && (l.imageWrapEl.style.transform = "translate3d(0,0,0)"), l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), S.scale = 1, o = 1, l.slideEl = void 0, l.imageEl = void 0, l.imageWrapEl = void 0, l.originX = 0, l.originY = 0);
  }
  function ae(S) {
    if (o <= 1 || !l.imageWrapEl || !x(S) || !j(S)) return;
    const k = i.getComputedStyle(l.imageWrapEl).transform, O = new i.DOMMatrix(k);
    if (!c) {
      c = !0, a.x = S.clientX, a.y = S.clientY, u.startX = O.e, u.startY = O.f, u.width = l.imageEl.offsetWidth || l.imageEl.clientWidth, u.height = l.imageEl.offsetHeight || l.imageEl.clientHeight, l.slideWidth = l.slideEl.offsetWidth, l.slideHeight = l.slideEl.offsetHeight;
      return;
    }
    const L = (S.clientX - a.x) * d, F = (S.clientY - a.y) * d, X = u.width * o, V = u.height * o, ne = l.slideWidth, $ = l.slideHeight, Q = Math.min(ne / 2 - X / 2, 0), de = -Q, Se = Math.min($ / 2 - V / 2, 0), Ce = -Se, Re = Math.max(Math.min(u.startX + L, de), Q), Ae = Math.max(Math.min(u.startY + F, Ce), Se);
    l.imageWrapEl.style.transitionDuration = "0ms", l.imageWrapEl.style.transform = `translate3d(${Re}px, ${Ae}px, 0)`, a.x = S.clientX, a.y = S.clientY, u.startX = Re, u.startY = Ae, u.currentX = Re, u.currentY = Ae;
  }
  function D(S) {
    const k = e.zoom, O = e.params.zoom;
    if (!l.slideEl) {
      S && S.target && (l.slideEl = S.target.closest(`.${e.params.slideClass}, swiper-slide`)), l.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? l.slideEl = Be(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : l.slideEl = e.slides[e.activeIndex]);
      let Ye = l.slideEl.querySelector(`.${O.containerClass}`);
      Ye && (Ye = Ye.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), l.imageEl = Ye, Ye ? l.imageWrapEl = qt(l.imageEl, `.${O.containerClass}`)[0] : l.imageWrapEl = void 0;
    }
    if (!l.imageEl || !l.imageWrapEl) return;
    l.maxRatio = y(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), l.slideEl.classList.add(`${O.zoomedSlideClass}`);
    let L, F, X, V, ne, $, Q, de, Se, Ce, Re, Ae, Le, He, Qe, Ve, et, tt;
    typeof u.touchesStart.x > "u" && S ? (L = S.pageX, F = S.pageY) : (L = u.touchesStart.x, F = u.touchesStart.y);
    const Xe = o, je = typeof S == "number" ? S : null;
    o === 1 && je && (L = void 0, F = void 0, u.touchesStart.x = void 0, u.touchesStart.y = void 0);
    const rt = y();
    k.scale = je || rt, o = je || rt, S && !(o === 1 && je) ? (et = l.slideEl.offsetWidth, tt = l.slideEl.offsetHeight, X = jn(l.slideEl).left + i.scrollX, V = jn(l.slideEl).top + i.scrollY, ne = X + et / 2 - L, $ = V + tt / 2 - F, Se = l.imageEl.offsetWidth || l.imageEl.clientWidth, Ce = l.imageEl.offsetHeight || l.imageEl.clientHeight, Re = Se * k.scale, Ae = Ce * k.scale, Le = Math.min(et / 2 - Re / 2, 0), He = Math.min(tt / 2 - Ae / 2, 0), Qe = -Le, Ve = -He, Xe > 0 && je && typeof u.currentX == "number" && typeof u.currentY == "number" ? (Q = u.currentX * k.scale / Xe, de = u.currentY * k.scale / Xe) : (Q = ne * k.scale, de = $ * k.scale), Q < Le && (Q = Le), Q > Qe && (Q = Qe), de < He && (de = He), de > Ve && (de = Ve)) : (Q = 0, de = 0), je && k.scale === 1 && (l.originX = 0, l.originY = 0), u.currentX = Q, u.currentY = de, l.imageWrapEl.style.transitionDuration = "300ms", l.imageWrapEl.style.transform = `translate3d(${Q}px, ${de}px,0)`, l.imageEl.style.transitionDuration = "300ms", l.imageEl.style.transform = `translate3d(0,0,0) scale(${k.scale})`;
  }
  function K() {
    const S = e.zoom, k = e.params.zoom;
    if (!l.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? l.slideEl = Be(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : l.slideEl = e.slides[e.activeIndex];
      let O = l.slideEl.querySelector(`.${k.containerClass}`);
      O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), l.imageEl = O, O ? l.imageWrapEl = qt(l.imageEl, `.${k.containerClass}`)[0] : l.imageWrapEl = void 0;
    }
    !l.imageEl || !l.imageWrapEl || (l.maxRatio = y(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), S.scale = 1, o = 1, u.currentX = void 0, u.currentY = void 0, u.touchesStart.x = void 0, u.touchesStart.y = void 0, l.imageWrapEl.style.transitionDuration = "300ms", l.imageWrapEl.style.transform = "translate3d(0,0,0)", l.imageEl.style.transitionDuration = "300ms", l.imageEl.style.transform = "translate3d(0,0,0) scale(1)", l.slideEl.classList.remove(`${k.zoomedSlideClass}`), l.slideEl = void 0, l.originX = 0, l.originY = 0, e.params.zoom.panOnMouseMove && (a = {
      x: 0,
      y: 0
    }, c && (c = !1, u.startX = 0, u.startY = 0)));
  }
  function M(S) {
    const k = e.zoom;
    k.scale && k.scale !== 1 ? K() : D(S);
  }
  function R() {
    const S = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, k = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: S,
      activeListenerWithCapture: k
    };
  }
  function Y() {
    const S = e.zoom;
    if (S.enabled) return;
    S.enabled = !0;
    const {
      passiveListener: k,
      activeListenerWithCapture: O
    } = R();
    e.wrapperEl.addEventListener("pointerdown", B, k), e.wrapperEl.addEventListener("pointermove", E, O), ["pointerup", "pointercancel", "pointerout"].forEach((L) => {
      e.wrapperEl.addEventListener(L, z, k);
    }), e.wrapperEl.addEventListener("pointermove", N, O);
  }
  function H() {
    const S = e.zoom;
    if (!S.enabled) return;
    S.enabled = !1;
    const {
      passiveListener: k,
      activeListenerWithCapture: O
    } = R();
    e.wrapperEl.removeEventListener("pointerdown", B, k), e.wrapperEl.removeEventListener("pointermove", E, O), ["pointerup", "pointercancel", "pointerout"].forEach((L) => {
      e.wrapperEl.removeEventListener(L, z, k);
    }), e.wrapperEl.removeEventListener("pointermove", N, O);
  }
  r("init", () => {
    e.params.zoom.enabled && Y();
  }), r("destroy", () => {
    H();
  }), r("touchStart", (S, k) => {
    e.zoom.enabled && G(k);
  }), r("touchEnd", (S, k) => {
    e.zoom.enabled && U();
  }), r("doubleTap", (S, k) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && M(k);
  }), r("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && re();
  }), r("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && re();
  }), Object.assign(e.zoom, {
    enable: Y,
    disable: H,
    in: D,
    out: K,
    toggle: M
  });
}
let Br;
function Bs() {
  const e = we(), t = ot();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function Pi() {
  return Br || (Br = Bs()), Br;
}
let Nr;
function Ns({
  userAgent: e
} = {}) {
  const t = Pi(), r = we(), n = r.navigator.platform, i = e || r.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, s = r.screen.width, c = r.screen.height, a = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const p = i.match(/(iPod)(.*OS\s([\d_]+))?/), f = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = n === "Win32";
  let l = n === "MacIntel";
  const u = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && l && t.touch && u.indexOf(`${s}x${c}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), l = !1), a && !h && (o.os = "android", o.android = !0), (d || f || p) && (o.os = "ios", o.ios = !0), o;
}
function Ii(e = {}) {
  return Nr || (Nr = Ns(e)), Nr;
}
let Fr;
function Fs() {
  const e = we(), t = Ii();
  let r = !1;
  function n() {
    const c = e.navigator.userAgent.toLowerCase();
    return c.indexOf("safari") >= 0 && c.indexOf("chrome") < 0 && c.indexOf("android") < 0;
  }
  if (n()) {
    const c = String(e.navigator.userAgent);
    if (c.includes("Version/")) {
      const [a, d] = c.split("Version/")[1].split(" ")[0].split(".").map((p) => Number(p));
      r = a < 16 || a === 16 && d < 2;
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), o = n(), s = o || i && t.ios;
  return {
    isSafari: r || o,
    needPerspectiveFix: r,
    need3dFix: s,
    isWebView: i
  };
}
function zi() {
  return Fr || (Fr = Fs()), Fr;
}
function Gs({
  swiper: e,
  on: t,
  emit: r
}) {
  const n = we();
  let i = null, o = null;
  const s = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, c = () => {
    !e || e.destroyed || !e.initialized || (i = new ResizeObserver((p) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: f,
          height: h
        } = e;
        let l = f, u = h;
        p.forEach(({
          contentBoxSize: v,
          contentRect: T,
          target: g
        }) => {
          g && g !== e.el || (l = T ? T.width : (v[0] || v).inlineSize, u = T ? T.height : (v[0] || v).blockSize);
        }), (l !== f || u !== h) && s();
      });
    }), i.observe(e.el));
  }, a = () => {
    o && n.cancelAnimationFrame(o), i && i.unobserve && e.el && (i.unobserve(e.el), i = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      c();
      return;
    }
    n.addEventListener("resize", s), n.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    a(), n.removeEventListener("resize", s), n.removeEventListener("orientationchange", d);
  });
}
function Vs({
  swiper: e,
  extendParams: t,
  on: r,
  emit: n
}) {
  const i = [], o = we(), s = (d, p = {}) => {
    const f = o.MutationObserver || o.WebkitMutationObserver, h = new f((l) => {
      if (e.__preventObserver__) return;
      if (l.length === 1) {
        n("observerUpdate", l[0]);
        return;
      }
      const u = function() {
        n("observerUpdate", l[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(u) : o.setTimeout(u, 0);
    });
    h.observe(d, {
      attributes: typeof p.attributes > "u" ? !0 : p.attributes,
      childList: e.isElement || (typeof p.childList > "u" ? !0 : p).childList,
      characterData: typeof p.characterData > "u" ? !0 : p.characterData
    }), i.push(h);
  }, c = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = qt(e.hostEl);
        for (let p = 0; p < d.length; p += 1)
          s(d[p]);
      }
      s(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), s(e.wrapperEl, {
        attributes: !1
      });
    }
  }, a = () => {
    i.forEach((d) => {
      d.disconnect();
    }), i.splice(0, i.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", c), r("destroy", a);
}
var Ys = {
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
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (r = e[0], n = e.slice(1, e.length), i = t) : (r = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i), (Array.isArray(r) ? r : r.split(" ")).forEach((s) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((c) => {
        c.apply(i, [s, ...n]);
      }), t.eventsListeners && t.eventsListeners[s] && t.eventsListeners[s].forEach((c) => {
        c.apply(i, n);
      });
    }), t;
  }
};
function Hs() {
  const e = this;
  let t, r;
  const n = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = n.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = n.clientHeight, !(t === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (t = t - parseInt(nt(n, "padding-left") || 0, 10) - parseInt(nt(n, "padding-right") || 0, 10), r = r - parseInt(nt(n, "padding-top") || 0, 10) - parseInt(nt(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: t,
    height: r,
    size: e.isHorizontal() ? t : r
  }));
}
function Xs() {
  const e = this;
  function t(w, P) {
    return parseFloat(w.getPropertyValue(e.getDirectionLabel(P)) || 0);
  }
  const r = e.params, {
    wrapperEl: n,
    slidesEl: i,
    rtlTranslate: o,
    wrongRTL: s
  } = e, c = e.virtual && r.virtual.enabled, a = c ? e.virtual.slides.length : e.slides.length, d = Be(i, `.${e.params.slideClass}, swiper-slide`), p = c ? e.virtual.slides.length : d.length;
  let f = [];
  const h = [], l = [];
  let u = r.slidesOffsetBefore;
  typeof u == "function" && (u = r.slidesOffsetBefore.call(e));
  let v = r.slidesOffsetAfter;
  typeof v == "function" && (v = r.slidesOffsetAfter.call(e));
  const T = e.snapGrid.length, g = e.slidesGrid.length, y = e.size - u - v;
  let b = r.spaceBetween, C = -u, x = 0, j = 0;
  if (typeof y > "u")
    return;
  typeof b == "string" && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * y : typeof b == "string" && (b = parseFloat(b)), e.virtualSize = -b - u - v, d.forEach((w) => {
    o ? w.style.marginLeft = "" : w.style.marginRight = "", w.style.marginBottom = "", w.style.marginTop = "";
  }), r.centeredSlides && r.cssMode && (bt(n, "--swiper-centered-offset-before", ""), bt(n, "--swiper-centered-offset-after", "")), r.cssMode && (bt(n, "--swiper-slides-offset-before", `${u}px`), bt(n, "--swiper-slides-offset-after", `${v}px`));
  const B = r.grid && r.grid.rows > 1 && e.grid;
  B ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
  let E;
  const z = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter((w) => typeof r.breakpoints[w].slidesPerView < "u").length > 0;
  for (let w = 0; w < p; w += 1) {
    E = 0;
    const P = d[w];
    if (!(P && (B && e.grid.updateSlide(w, P, d), nt(P, "display") === "none"))) {
      if (c && r.slidesPerView === "auto")
        r.virtual.slidesPerViewAutoSlideSize && (E = r.virtual.slidesPerViewAutoSlideSize), E && P && (r.roundLengths && (E = Math.floor(E)), P.style[e.getDirectionLabel("width")] = `${E}px`);
      else if (r.slidesPerView === "auto") {
        z && (P.style[e.getDirectionLabel("width")] = "");
        const A = getComputedStyle(P), G = P.style.transform, N = P.style.webkitTransform;
        if (G && (P.style.transform = "none"), N && (P.style.webkitTransform = "none"), r.roundLengths)
          E = e.isHorizontal() ? ln(P, "width") : ln(P, "height");
        else {
          const U = t(A, "width"), re = t(A, "padding-left"), ae = t(A, "padding-right"), D = t(A, "margin-left"), K = t(A, "margin-right"), M = A.getPropertyValue("box-sizing");
          if (M && M === "border-box")
            E = U + D + K;
          else {
            const {
              clientWidth: R,
              offsetWidth: Y
            } = P;
            E = U + re + ae + D + K + (Y - R);
          }
        }
        G && (P.style.transform = G), N && (P.style.webkitTransform = N), r.roundLengths && (E = Math.floor(E));
      } else
        E = (y - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (E = Math.floor(E)), P && (P.style[e.getDirectionLabel("width")] = `${E}px`);
      P && (P.swiperSlideSize = E), l.push(E), r.centeredSlides ? (C = C + E / 2 + x / 2 + b, x === 0 && w !== 0 && (C = C - y / 2 - b), w === 0 && (C = C - y / 2 - b), Math.abs(C) < 1 / 1e3 && (C = 0), r.roundLengths && (C = Math.floor(C)), j % r.slidesPerGroup === 0 && f.push(C), h.push(C)) : (r.roundLengths && (C = Math.floor(C)), (j - Math.min(e.params.slidesPerGroupSkip, j)) % e.params.slidesPerGroup === 0 && f.push(C), h.push(C), C = C + E + b), e.virtualSize += E + b, x = E, j += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, y) + v, o && s && (r.effect === "slide" || r.effect === "coverflow") && (n.style.width = `${e.virtualSize + b}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + b}px`), B && e.grid.updateWrapperSize(E, f), !r.centeredSlides) {
    const w = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0, P = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || w);
    let A = f.length;
    if (P) {
      let N;
      if (r.slidesPerView === "auto") {
        N = 1;
        let U = 0;
        for (let re = l.length - 1; re >= 0 && (U += l[re] + (re < l.length - 1 ? b : 0), U <= y); re -= 1)
          N = l.length - re;
      } else
        N = Math.floor(r.slidesPerView);
      A = Math.max(p - N, 0);
    }
    const G = [];
    for (let N = 0; N < f.length; N += 1) {
      let U = f[N];
      r.roundLengths && (U = Math.floor(U)), P ? N <= A && G.push(U) : f[N] <= e.virtualSize - y && G.push(U);
    }
    f = G, Math.floor(e.virtualSize - y) - Math.floor(f[f.length - 1]) > 1 && (P || f.push(e.virtualSize - y));
  }
  if (c && r.loop) {
    const w = l[0] + b;
    if (r.slidesPerGroup > 1) {
      const P = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), A = w * r.slidesPerGroup;
      for (let G = 0; G < P; G += 1)
        f.push(f[f.length - 1] + A);
    }
    for (let P = 0; P < e.virtual.slidesBefore + e.virtual.slidesAfter; P += 1)
      r.slidesPerGroup === 1 && f.push(f[f.length - 1] + w), h.push(h[h.length - 1] + w), e.virtualSize += w;
  }
  if (f.length === 0 && (f = [0]), b !== 0) {
    const w = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    d.filter((P, A) => !r.cssMode || r.loop ? !0 : A !== d.length - 1).forEach((P) => {
      P.style[w] = `${b}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let w = 0;
    l.forEach((A) => {
      w += A + (b || 0);
    }), w -= b;
    const P = w > y ? w - y : 0;
    f = f.map((A) => A <= 0 ? -u : A > P ? P + v : A);
  }
  if (r.centerInsufficientSlides) {
    let w = 0;
    if (l.forEach((P) => {
      w += P + (b || 0);
    }), w -= b, w < y) {
      const P = (y - w) / 2;
      f.forEach((A, G) => {
        f[G] = A - P;
      }), h.forEach((A, G) => {
        h[G] = A + P;
      });
    }
  }
  if (Object.assign(e, {
    slides: d,
    snapGrid: f,
    slidesGrid: h,
    slidesSizesGrid: l
  }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    bt(n, "--swiper-centered-offset-before", `${-f[0]}px`), bt(n, "--swiper-centered-offset-after", `${e.size / 2 - l[l.length - 1] / 2}px`);
    const w = -e.snapGrid[0], P = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((A) => A + w), e.slidesGrid = e.slidesGrid.map((A) => A + P);
  }
  if (p !== a && e.emit("slidesLengthChange"), f.length !== T && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== g && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !c && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const w = `${r.containerModifierClass}backface-hidden`, P = e.el.classList.contains(w);
    p <= r.maxBackfaceHiddenSlides ? P || e.el.classList.add(w) : P && e.el.classList.remove(w);
  }
}
function qs(e) {
  const t = this, r = [], n = t.virtual && t.params.virtual.enabled;
  let i = 0, o;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const s = (c) => n ? t.slides[t.getSlideIndexByData(c)] : t.slides[c];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((c) => {
        r.push(c);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const c = t.activeIndex + o;
        if (c > t.slides.length && !n) break;
        r.push(s(c));
      }
  else
    r.push(s(t.activeIndex));
  for (o = 0; o < r.length; o += 1)
    if (typeof r[o] < "u") {
      const c = r[o].offsetHeight;
      i = c > i ? c : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Us() {
  const e = this, t = e.slides, r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment();
}
const Wn = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function Ks(e = this && this.translate || 0) {
  const t = this, r = t.params, {
    slides: n,
    rtlTranslate: i,
    snapGrid: o
  } = t;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let c = r.spaceBetween;
  typeof c == "string" && c.indexOf("%") >= 0 ? c = parseFloat(c.replace("%", "")) / 100 * t.size : typeof c == "string" && (c = parseFloat(c));
  for (let a = 0; a < n.length; a += 1) {
    const d = n[a];
    let p = d.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (p -= n[0].swiperSlideOffset);
    const f = (s + (r.centeredSlides ? t.minTranslate() : 0) - p) / (d.swiperSlideSize + c), h = (s - o[0] + (r.centeredSlides ? t.minTranslate() : 0) - p) / (d.swiperSlideSize + c), l = -(s - p), u = l + t.slidesSizesGrid[a], v = l >= 0 && l <= t.size - t.slidesSizesGrid[a], T = l >= 0 && l < t.size - 1 || u > 1 && u <= t.size || l <= 0 && u >= t.size;
    T && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(a)), Wn(d, T, r.slideVisibleClass), Wn(d, v, r.slideFullyVisibleClass), d.progress = i ? -f : f, d.originalProgress = i ? -h : h;
  }
}
function Js(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * p || 0;
  }
  const r = t.params, n = t.maxTranslate() - t.minTranslate();
  let {
    progress: i,
    isBeginning: o,
    isEnd: s,
    progressLoop: c
  } = t;
  const a = o, d = s;
  if (n === 0)
    i = 0, o = !0, s = !0;
  else {
    i = (e - t.minTranslate()) / n;
    const p = Math.abs(e - t.minTranslate()) < 1, f = Math.abs(e - t.maxTranslate()) < 1;
    o = p || i <= 0, s = f || i >= 1, p && (i = 0), f && (i = 1);
  }
  if (r.loop) {
    const p = t.getSlideIndexByData(0), f = t.getSlideIndexByData(t.slides.length - 1), h = t.slidesGrid[p], l = t.slidesGrid[f], u = t.slidesGrid[t.slidesGrid.length - 1], v = Math.abs(e);
    v >= h ? c = (v - h) / u : c = (v + u - l) / u, c > 1 && (c -= 1);
  }
  Object.assign(t, {
    progress: i,
    progressLoop: c,
    isBeginning: o,
    isEnd: s
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), o && !a && t.emit("reachBeginning toEdge"), s && !d && t.emit("reachEnd toEdge"), (a && !o || d && !s) && t.emit("fromEdge"), t.emit("progress", i);
}
const Gr = (e, t, r) => {
  t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r);
};
function Zs() {
  const e = this, {
    slides: t,
    params: r,
    slidesEl: n,
    activeIndex: i
  } = e, o = e.virtual && r.virtual.enabled, s = e.grid && r.grid && r.grid.rows > 1, c = (f) => Be(n, `.${r.slideClass}${f}, swiper-slide${f}`)[0];
  let a, d, p;
  if (o)
    if (r.loop) {
      let f = i - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f), f >= e.virtual.slides.length && (f -= e.virtual.slides.length), a = c(`[data-swiper-slide-index="${f}"]`);
    } else
      a = c(`[data-swiper-slide-index="${i}"]`);
  else
    s ? (a = t.find((f) => f.column === i), p = t.find((f) => f.column === i + 1), d = t.find((f) => f.column === i - 1)) : a = t[i];
  a && (s || (p = Ls(a, `.${r.slideClass}, swiper-slide`)[0], r.loop && !p && (p = t[0]), d = As(a, `.${r.slideClass}, swiper-slide`)[0], r.loop && !d === 0 && (d = t[t.length - 1]))), t.forEach((f) => {
    Gr(f, f === a, r.slideActiveClass), Gr(f, f === p, r.slideNextClass), Gr(f, f === d, r.slidePrevClass);
  }), e.emitSlidesClasses();
}
const mr = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, n = t.closest(r());
  if (n) {
    let i = n.querySelector(`.${e.params.lazyPreloaderClass}`);
    !i && e.isElement && (n.shadowRoot ? i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      n.shadowRoot && (i = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), i && !i.lazyPreloaderManaged && i.remove());
    })), i && !i.lazyPreloaderManaged && i.remove();
  }
}, Vr = (e, t) => {
  if (!e.slides[t]) return;
  const r = e.slides[t].querySelector('[loading="lazy"]');
  r && r.removeAttribute("loading");
}, cn = (e) => {
  if (!e || e.destroyed || !e.params) return;
  let t = e.params.lazyPreloadPrevNext;
  const r = e.slides.length;
  if (!r || !t || t < 0) return;
  t = Math.min(t, r);
  const n = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), i = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const s = i, c = [s - t];
    c.push(...Array.from({
      length: t
    }).map((a, d) => s + n + d)), e.slides.forEach((a, d) => {
      c.includes(a.column) && Vr(e, d);
    });
    return;
  }
  const o = i + n - 1;
  if (e.params.rewind || e.params.loop)
    for (let s = i - t; s <= o + t; s += 1) {
      const c = (s % r + r) % r;
      (c < i || c > o) && Vr(e, c);
    }
  else
    for (let s = Math.max(i - t, 0); s <= Math.min(o + t, r - 1); s += 1)
      s !== i && (s > o || s < i) && Vr(e, s);
};
function Qs(e) {
  const {
    slidesGrid: t,
    params: r
  } = e, n = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u" ? n >= t[o] && n < t[o + 1] - (t[o + 1] - t[o]) / 2 ? i = o : n >= t[o] && n < t[o + 1] && (i = o + 1) : n >= t[o] && (i = o);
  return r.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function ea(e) {
  const t = this, r = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: n,
    params: i,
    activeIndex: o,
    realIndex: s,
    snapIndex: c
  } = t;
  let a = e, d;
  const p = (l) => {
    let u = l - t.virtual.slidesBefore;
    return u < 0 && (u = t.virtual.slides.length + u), u >= t.virtual.slides.length && (u -= t.virtual.slides.length), u;
  };
  if (typeof a > "u" && (a = Qs(t)), n.indexOf(r) >= 0)
    d = n.indexOf(r);
  else {
    const l = Math.min(i.slidesPerGroupSkip, a);
    d = l + Math.floor((a - l) / i.slidesPerGroup);
  }
  if (d >= n.length && (d = n.length - 1), a === o && !t.params.loop) {
    d !== c && (t.snapIndex = d, t.emit("snapIndexChange"));
    return;
  }
  if (a === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = p(a);
    return;
  }
  const f = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled)
    i.loop ? h = p(a) : h = a;
  else if (f) {
    const l = t.slides.find((v) => v.column === a);
    let u = parseInt(l.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(u) && (u = Math.max(t.slides.indexOf(l), 0)), h = Math.floor(u / i.grid.rows);
  } else if (t.slides[a]) {
    const l = t.slides[a].getAttribute("data-swiper-slide-index");
    l ? h = parseInt(l, 10) : h = a;
  } else
    h = a;
  Object.assign(t, {
    previousSnapIndex: c,
    snapIndex: d,
    previousRealIndex: s,
    realIndex: h,
    previousIndex: o,
    activeIndex: a
  }), t.initialized && cn(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (s !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function ta(e, t) {
  const r = this, n = r.params;
  let i = e.closest(`.${n.slideClass}, swiper-slide`);
  !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((c) => {
    !i && c.matches && c.matches(`.${n.slideClass}, swiper-slide`) && (i = c);
  });
  let o = !1, s;
  if (i) {
    for (let c = 0; c < r.slides.length; c += 1)
      if (r.slides[c] === i) {
        o = !0, s = c;
        break;
      }
  }
  if (i && o)
    r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s;
  else {
    r.clickedSlide = void 0, r.clickedIndex = void 0;
    return;
  }
  n.slideToClickedSlide && r.clickedIndex !== void 0 && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide();
}
var ra = {
  updateSize: Hs,
  updateSlides: Xs,
  updateAutoHeight: qs,
  updateSlidesOffset: Us,
  updateSlidesProgress: Ks,
  updateProgress: Js,
  updateSlidesClasses: Zs,
  updateActiveIndex: ea,
  updateClickedSlide: ta
};
function na(e = this.isHorizontal() ? "x" : "y") {
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
  let s = an(o, e);
  return s += t.cssOverflowAdjustment(), n && (s = -s), s || 0;
}
function ia(e, t) {
  const r = this, {
    rtlTranslate: n,
    params: i,
    wrapperEl: o,
    progress: s
  } = r;
  let c = 0, a = 0;
  const d = 0;
  r.isHorizontal() ? c = n ? -e : e : a = e, i.roundLengths && (c = Math.floor(c), a = Math.floor(a)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? c : a, i.cssMode ? o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -a : i.virtualTranslate || (r.isHorizontal() ? c -= r.cssOverflowAdjustment() : a -= r.cssOverflowAdjustment(), o.style.transform = `translate3d(${c}px, ${a}px, ${d}px)`);
  let p;
  const f = r.maxTranslate() - r.minTranslate();
  f === 0 ? p = 0 : p = (e - r.minTranslate()) / f, p !== s && r.updateProgress(e), r.emit("setTranslate", r.translate, t);
}
function oa() {
  return -this.snapGrid[0];
}
function sa() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function aa(e = 0, t = this.params.speed, r = !0, n = !0, i) {
  const o = this, {
    params: s,
    wrapperEl: c
  } = o;
  if (o.animating && s.preventInteractionOnTransition)
    return !1;
  const a = o.minTranslate(), d = o.maxTranslate();
  let p;
  if (n && e > a ? p = a : n && e < d ? p = d : p = e, o.updateProgress(p), s.cssMode) {
    const f = o.isHorizontal();
    if (t === 0)
      c[f ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!o.support.smoothScroll)
        return ki({
          swiper: o,
          targetPosition: -p,
          side: f ? "left" : "top"
        }), !0;
      c.scrollTo({
        [f ? "left" : "top"]: -p,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (o.setTransition(0), o.setTranslate(p), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(p), r && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(h) {
    !o || o.destroyed || h.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, r && o.emit("transitionEnd"));
  }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
}
var la = {
  getTranslate: na,
  setTranslate: ia,
  minTranslate: oa,
  maxTranslate: sa,
  translateTo: aa
};
function ca(e, t) {
  const r = this;
  r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), r.emit("setTransition", e, t);
}
function _i({
  swiper: e,
  runCallbacks: t,
  direction: r,
  step: n
}) {
  const {
    activeIndex: i,
    previousIndex: o
  } = e;
  let s = r;
  s || (i > o ? s = "next" : i < o ? s = "prev" : s = "reset"), e.emit(`transition${n}`), t && s === "reset" ? e.emit(`slideResetTransition${n}`) : t && i !== o && (e.emit(`slideChangeTransition${n}`), s === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`));
}
function da(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  n.cssMode || (n.autoHeight && r.updateAutoHeight(), _i({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function ua(e = !0, t) {
  const r = this, {
    params: n
  } = r;
  r.animating = !1, !n.cssMode && (r.setTransition(0), _i({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
var fa = {
  setTransition: ca,
  transitionStart: da,
  transitionEnd: ua
};
function pa(e = 0, t, r = !0, n, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: c,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: f,
    rtlTranslate: h,
    wrapperEl: l,
    enabled: u
  } = o;
  if (!u && !n && !i || o.destroyed || o.animating && c.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = o.params.speed);
  const v = Math.min(o.params.slidesPerGroupSkip, s);
  let T = v + Math.floor((s - v) / o.params.slidesPerGroup);
  T >= a.length && (T = a.length - 1);
  const g = -a[T];
  if (c.normalizeSlideIndex)
    for (let B = 0; B < d.length; B += 1) {
      const E = -Math.floor(g * 100), z = Math.floor(d[B] * 100), w = Math.floor(d[B + 1] * 100);
      typeof d[B + 1] < "u" ? E >= z && E < w - (w - z) / 2 ? s = B : E >= z && E < w && (s = B + 1) : E >= z && (s = B);
    }
  if (o.initialized && s !== f && (!o.allowSlideNext && (h ? g > o.translate && g > o.minTranslate() : g < o.translate && g < o.minTranslate()) || !o.allowSlidePrev && g > o.translate && g > o.maxTranslate() && (f || 0) !== s))
    return !1;
  s !== (p || 0) && r && o.emit("beforeSlideChangeStart"), o.updateProgress(g);
  let y;
  s > f ? y = "next" : s < f ? y = "prev" : y = "reset";
  const b = o.virtual && o.params.virtual.enabled;
  if (!(b && i) && (h && -g === o.translate || !h && g === o.translate))
    return o.updateActiveIndex(s), c.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), c.effect !== "slide" && o.setTranslate(g), y !== "reset" && (o.transitionStart(r, y), o.transitionEnd(r, y)), !1;
  if (c.cssMode) {
    const B = o.isHorizontal(), E = h ? g : -g;
    if (t === 0)
      b && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), b && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        l[B ? "scrollLeft" : "scrollTop"] = E;
      })) : l[B ? "scrollLeft" : "scrollTop"] = E, b && requestAnimationFrame(() => {
        o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
      });
    else {
      if (!o.support.smoothScroll)
        return ki({
          swiper: o,
          targetPosition: E,
          side: B ? "left" : "top"
        }), !0;
      l.scrollTo({
        [B ? "left" : "top"]: E,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const j = zi().isSafari;
  return b && !i && j && o.isElement && o.virtual.update(!1, !1, s), o.setTransition(t), o.setTranslate(g), o.updateActiveIndex(s), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, n), o.transitionStart(r, y), t === 0 ? o.transitionEnd(r, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(E) {
    !o || o.destroyed || E.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(r, y));
  }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
}
function ga(e = 0, t, r = !0, n) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const o = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled)
      s = s + i.virtual.slidesBefore;
    else {
      let c;
      if (o) {
        const v = s * i.params.grid.rows;
        c = i.slides.find((T) => T.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        c = i.getSlideIndexByData(s);
      const a = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length, {
        centeredSlides: d,
        slidesOffsetBefore: p,
        slidesOffsetAfter: f
      } = i.params, h = d || !!p || !!f;
      let l = i.params.slidesPerView;
      l === "auto" ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), h && l % 2 === 0 && (l = l + 1));
      let u = a - c < l;
      if (h && (u = u || c < Math.ceil(l / 2)), n && h && i.params.slidesPerView !== "auto" && !o && (u = !1), u) {
        const v = h ? c < i.activeIndex ? "prev" : "next" : c - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? c + 1 : c - a + 1,
          slideRealIndex: v === "next" ? i.realIndex : void 0
        });
      }
      if (o) {
        const v = s * i.params.grid.rows;
        s = i.slides.find((T) => T.getAttribute("data-swiper-slide-index") * 1 === v).column;
      } else
        s = i.getSlideIndexByData(s);
    }
  return requestAnimationFrame(() => {
    i.slideTo(s, t, r, n);
  }), i;
}
function ha(e, t = !0, r) {
  const n = this, {
    enabled: i,
    params: o,
    animating: s
  } = n;
  if (!i || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  let c = o.slidesPerGroup;
  o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (c = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const a = n.activeIndex < o.slidesPerGroupSkip ? 1 : c, d = n.virtual && o.virtual.enabled;
  if (o.loop) {
    if (s && !d && o.loopPreventsSliding) return !1;
    if (n.loopFix({
      direction: "next"
    }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && o.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(n.activeIndex + a, e, t, r);
      }), !0;
  }
  return o.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + a, e, t, r);
}
function ma(e, t = !0, r) {
  const n = this, {
    params: i,
    snapGrid: o,
    slidesGrid: s,
    rtlTranslate: c,
    enabled: a,
    animating: d
  } = n;
  if (!a || n.destroyed) return n;
  typeof e > "u" && (e = n.params.speed);
  const p = n.virtual && i.virtual.enabled;
  if (i.loop) {
    if (d && !p && i.loopPreventsSliding) return !1;
    n.loopFix({
      direction: "prev"
    }), n._clientLeft = n.wrapperEl.clientLeft;
  }
  const f = c ? n.translate : -n.translate;
  function h(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const l = h(f), u = o.map((y) => h(y)), v = i.freeMode && i.freeMode.enabled;
  let T = o[u.indexOf(l) - 1];
  if (typeof T > "u" && (i.cssMode || v)) {
    let y;
    o.forEach((b, C) => {
      l >= b && (y = C);
    }), typeof y < "u" && (T = v ? o[y] : o[y > 0 ? y - 1 : y]);
  }
  let g = 0;
  if (typeof T < "u" && (g = s.indexOf(T), g < 0 && (g = n.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && n.isBeginning) {
    const y = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
    return n.slideTo(y, e, t, r);
  } else if (i.loop && n.activeIndex === 0 && i.cssMode)
    return requestAnimationFrame(() => {
      n.slideTo(g, e, t, r);
    }), !0;
  return n.slideTo(g, e, t, r);
}
function ya(e, t = !0, r) {
  const n = this;
  if (!n.destroyed)
    return typeof e > "u" && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r);
}
function va(e, t = !0, r, n = 0.5) {
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let o = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, o), c = s + Math.floor((o - s) / i.params.slidesPerGroup), a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[c]) {
    const d = i.snapGrid[c], p = i.snapGrid[c + 1];
    a - d > (p - d) * n && (o += i.params.slidesPerGroup);
  } else {
    const d = i.snapGrid[c - 1], p = i.snapGrid[c];
    a - d <= (p - d) * n && (o -= i.params.slidesPerGroup);
  }
  return o = Math.max(o, 0), o = Math.min(o, i.slidesGrid.length - 1), i.slideTo(o, e, t, r);
}
function ba() {
  const e = this;
  if (e.destroyed) return;
  const {
    params: t,
    slidesEl: r
  } = e, n = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.getSlideIndexWhenGrid(e.clickedIndex), o;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`, c = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating) return;
    o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(o) : i > (c ? (e.slides.length - n) / 2 - (e.params.grid.rows - 1) : e.slides.length - n) ? (e.loopFix(), i = e.getSlideIndex(Be(r, `${s}[data-swiper-slide-index="${o}"]`)[0]), Oi(() => {
      e.slideTo(i);
    })) : e.slideTo(i);
  } else
    e.slideTo(i);
}
var xa = {
  slideTo: pa,
  slideToLoop: ga,
  slideNext: ha,
  slidePrev: ma,
  slideReset: ya,
  slideToClosest: va,
  slideToClickedSlide: ba
};
function Sa(e, t) {
  const r = this, {
    params: n,
    slidesEl: i
  } = r;
  if (!n.loop || r.virtual && r.params.virtual.enabled) return;
  const o = () => {
    Be(i, `.${n.slideClass}, swiper-slide`).forEach((u, v) => {
      u.setAttribute("data-swiper-slide-index", v);
    });
  }, s = () => {
    const l = Be(i, `.${n.slideBlankClass}`);
    l.forEach((u) => {
      u.remove();
    }), l.length > 0 && (r.recalcSlides(), r.updateSlides());
  }, c = r.grid && n.grid && n.grid.rows > 1;
  n.loopAddBlankSlides && (n.slidesPerGroup > 1 || c) && s();
  const a = n.slidesPerGroup * (c ? n.grid.rows : 1), d = r.slides.length % a !== 0, p = c && r.slides.length % n.grid.rows !== 0, f = (l) => {
    for (let u = 0; u < l; u += 1) {
      const v = r.isElement ? xr("swiper-slide", [n.slideBlankClass]) : xr("div", [n.slideClass, n.slideBlankClass]);
      r.slidesEl.append(v);
    }
  };
  if (d) {
    if (n.loopAddBlankSlides) {
      const l = a - r.slides.length % a;
      f(l), r.recalcSlides(), r.updateSlides();
    } else
      br("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else if (p) {
    if (n.loopAddBlankSlides) {
      const l = n.grid.rows - r.slides.length % n.grid.rows;
      f(l), r.recalcSlides(), r.updateSlides();
    } else
      br("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    o();
  } else
    o();
  const h = n.centeredSlides || !!n.slidesOffsetBefore || !!n.slidesOffsetAfter;
  r.loopFix({
    slideRealIndex: e,
    direction: h ? void 0 : "next",
    initial: t
  });
}
function Ta({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: r,
  setTranslate: n,
  activeSlideIndex: i,
  initial: o,
  byController: s,
  byMousewheel: c
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: d,
    allowSlidePrev: p,
    allowSlideNext: f,
    slidesEl: h,
    params: l
  } = a, {
    centeredSlides: u,
    slidesOffsetBefore: v,
    slidesOffsetAfter: T,
    initialSlide: g
  } = l, y = u || !!v || !!T;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && l.virtual.enabled) {
    t && (!y && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : y && a.snapIndex < l.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = p, a.allowSlideNext = f, a.emit("loopFix");
    return;
  }
  let b = l.slidesPerView;
  b === "auto" ? b = a.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(l.slidesPerView, 10)), y && b % 2 === 0 && (b = b + 1));
  const C = l.slidesPerGroupAuto ? b : l.slidesPerGroup;
  let x = y ? Math.max(C, Math.ceil(b / 2)) : C;
  x % C !== 0 && (x += C - x % C), x += l.loopAdditionalSlides, a.loopedSlides = x;
  const j = a.grid && l.grid && l.grid.rows > 1;
  d.length < b + x || a.params.effect === "cards" && d.length < b + x * 2 ? br("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : j && l.grid.fill === "row" && br("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const B = [], E = [], z = j ? Math.ceil(d.length / l.grid.rows) : d.length, w = o && z - g < b && !y;
  let P = w ? g : a.activeIndex;
  typeof i > "u" ? i = a.getSlideIndex(d.find((D) => D.classList.contains(l.slideActiveClass))) : P = i;
  const A = r === "next" || !r, G = r === "prev" || !r;
  let N = 0, U = 0;
  const ae = (j ? d[i].column : i) + (y && typeof n > "u" ? -b / 2 + 0.5 : 0);
  if (ae < x) {
    N = Math.max(x - ae, C);
    for (let D = 0; D < x - ae; D += 1) {
      const K = D - Math.floor(D / z) * z;
      if (j) {
        const M = z - K - 1;
        for (let R = d.length - 1; R >= 0; R -= 1)
          d[R].column === M && B.push(R);
      } else
        B.push(z - K - 1);
    }
  } else if (ae + b > z - x) {
    U = Math.max(ae - (z - x * 2), C), w && (U = Math.max(U, b - z + g + 1));
    for (let D = 0; D < U; D += 1) {
      const K = D - Math.floor(D / z) * z;
      j ? d.forEach((M, R) => {
        M.column === K && E.push(R);
      }) : E.push(K);
    }
  }
  if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
    a.__preventObserver__ = !1;
  }), a.params.effect === "cards" && d.length < b + x * 2 && (E.includes(i) && E.splice(E.indexOf(i), 1), B.includes(i) && B.splice(B.indexOf(i), 1)), G && B.forEach((D) => {
    d[D].swiperLoopMoveDOM = !0, h.prepend(d[D]), d[D].swiperLoopMoveDOM = !1;
  }), A && E.forEach((D) => {
    d[D].swiperLoopMoveDOM = !0, h.append(d[D]), d[D].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), l.slidesPerView === "auto" ? a.updateSlides() : j && (B.length > 0 && G || E.length > 0 && A) && a.slides.forEach((D, K) => {
    a.grid.updateSlide(K, D, a.slides);
  }), l.watchSlidesProgress && a.updateSlidesOffset(), t) {
    if (B.length > 0 && G) {
      if (typeof e > "u") {
        const D = a.slidesGrid[P], M = a.slidesGrid[P + N] - D;
        c ? a.setTranslate(a.translate - M) : (a.slideTo(P + Math.ceil(N), 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - M, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - M));
      } else if (n) {
        const D = j ? B.length / l.grid.rows : B.length;
        a.slideTo(a.activeIndex + D, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
      }
    } else if (E.length > 0 && A)
      if (typeof e > "u") {
        const D = a.slidesGrid[P], M = a.slidesGrid[P - U] - D;
        c ? a.setTranslate(a.translate - M) : (a.slideTo(P - U, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - M, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - M));
      } else {
        const D = j ? E.length / l.grid.rows : E.length;
        a.slideTo(a.activeIndex - D, 0, !1, !0);
      }
  }
  if (a.allowSlidePrev = p, a.allowSlideNext = f, a.controller && a.controller.control && !s) {
    const D = {
      slideRealIndex: e,
      direction: r,
      setTranslate: n,
      activeSlideIndex: i,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((K) => {
      !K.destroyed && K.params.loop && K.loopFix({
        ...D,
        slideTo: K.params.slidesPerView === l.slidesPerView ? t : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...D,
      slideTo: a.controller.control.params.slidesPerView === l.slidesPerView ? t : !1
    });
  }
  a.emit("loopFix");
}
function Ea() {
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
var wa = {
  loopCreate: Sa,
  loopFix: Ta,
  loopDestroy: Ea
};
function Ca(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const r = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Ma() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var Oa = {
  setGrabCursor: Ca,
  unsetGrabCursor: Ma
};
function ka(e, t = this) {
  function r(n) {
    if (!n || n === ot() || n === we()) return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = n.closest(e);
    return !i && !n.getRootNode ? null : i || r(n.getRootNode().host);
  }
  return r(t);
}
function Dn(e, t, r) {
  const n = we(), {
    params: i
  } = e, o = i.edgeSwipeDetection, s = i.edgeSwipeThreshold;
  return o && (r <= s || r >= n.innerWidth - s) ? o === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function Pa(e) {
  const t = this, r = ot();
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  const i = t.touchEventsData;
  if (n.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== n.pointerId)
      return;
    i.pointerId = n.pointerId;
  } else n.type === "touchstart" && n.targetTouches.length === 1 && (i.touchId = n.targetTouches[0].identifier);
  if (n.type === "touchstart") {
    Dn(t, n, n.targetTouches[0].pageX);
    return;
  }
  const {
    params: o,
    touches: s,
    enabled: c
  } = t;
  if (!c || !o.simulateTouch && n.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition)
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let a = n.target;
  if (o.touchEventsTarget === "wrapper" && !Rs(a, t.wrapperEl) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || i.isTouched && i.isMoved) return;
  const d = !!o.noSwipingClass && o.noSwipingClass !== "", p = n.composedPath ? n.composedPath() : n.path;
  d && n.target && n.target.shadowRoot && p && (a = p[0]);
  const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, h = !!(n.target && n.target.shadowRoot);
  if (o.noSwiping && (h ? ka(f, a) : a.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !a.closest(o.swipeHandler))
    return;
  s.currentX = n.pageX, s.currentY = n.pageY;
  const l = s.currentX, u = s.currentY;
  if (!Dn(t, n, l))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), s.startX = l, s.startY = u, i.touchStartTime = vr(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (i.allowThresholdMove = !1);
  let v = !0;
  a.matches(i.focusableElements) && (v = !1, a.nodeName === "SELECT" && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== a && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !a.matches(i.focusableElements)) && r.activeElement.blur();
  const T = v && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || T) && !a.isContentEditable && n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n);
}
function Ia(e) {
  const t = ot(), r = this, n = r.touchEventsData, {
    params: i,
    touches: o,
    rtlTranslate: s,
    enabled: c
  } = r;
  if (!c || !i.simulateTouch && e.pointerType === "mouse") return;
  let a = e;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (n.touchId !== null || a.pointerId !== n.pointerId))
    return;
  let d;
  if (a.type === "touchmove") {
    if (d = [...a.changedTouches].find((x) => x.identifier === n.touchId), !d || d.identifier !== n.touchId) return;
  } else
    d = a;
  if (!n.isTouched) {
    n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", a);
    return;
  }
  const p = d.pageX, f = d.pageY;
  if (a.preventedByNestedSwiper) {
    o.startX = p, o.startY = f;
    return;
  }
  if (!r.allowTouchMove) {
    a.target.matches(n.focusableElements) || (r.allowClick = !1), n.isTouched && (Object.assign(o, {
      startX: p,
      startY: f,
      currentX: p,
      currentY: f
    }), n.touchStartTime = vr());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (r.isVertical()) {
      if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) {
        n.isTouched = !1, n.isMoved = !1;
        return;
      }
    } else {
      if (s && (p > o.startX && -r.translate <= r.maxTranslate() || p < o.startX && -r.translate >= r.minTranslate()))
        return;
      if (!s && (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()))
        return;
    }
  if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== a.target && a.pointerType !== "mouse" && t.activeElement.blur(), t.activeElement && a.target === t.activeElement && a.target.matches(n.focusableElements)) {
    n.isMoved = !0, r.allowClick = !1;
    return;
  }
  n.allowTouchCallbacks && r.emit("touchMove", a), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
  const h = o.currentX - o.startX, l = o.currentY - o.startY;
  if (r.params.threshold && Math.sqrt(h ** 2 + l ** 2) < r.params.threshold) return;
  if (typeof n.isScrolling > "u") {
    let x;
    r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : h * h + l * l >= 25 && (x = Math.atan2(Math.abs(l), Math.abs(h)) * 180 / Math.PI, n.isScrolling = r.isHorizontal() ? x > i.touchAngle : 90 - x > i.touchAngle);
  }
  if (n.isScrolling && r.emit("touchMoveOpposite", a), typeof n.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (n.startMoving = !0), n.isScrolling || a.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving)
    return;
  r.allowClick = !1, !i.cssMode && a.cancelable && a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let u = r.isHorizontal() ? h : l, v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement && (u = Math.abs(u) * (s ? 1 : -1), v = Math.abs(v) * (s ? 1 : -1)), o.diff = u, u *= i.touchRatio, s && (u = -u, v = -v);
  const T = r.touchesDirection;
  r.swipeDirection = u > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
  const g = r.params.loop && !i.cssMode, y = r.touchesDirection === "next" && r.allowSlideNext || r.touchesDirection === "prev" && r.allowSlidePrev;
  if (!n.isMoved) {
    if (g && y && r.loopFix({
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
    n.allowMomentumBounce = !1, i.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", a);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), i._loopSwapReset !== !1 && n.isMoved && n.allowThresholdMove && T !== r.touchesDirection && g && y && Math.abs(u) >= 1) {
    Object.assign(o, {
      startX: p,
      startY: f,
      currentX: p,
      currentY: f,
      startTranslate: n.currentTranslate
    }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
    return;
  }
  r.emit("sliderMove", a), n.isMoved = !0, n.currentTranslate = u + n.startTranslate;
  let b = !0, C = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (C = 0), u > 0 ? (g && y && n.allowThresholdMove && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), n.currentTranslate > r.minTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + u) ** C))) : u < 0 && (g && y && n.allowThresholdMove && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + (i.slidesPerView !== "auto" && r.slides.length - i.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: r.slides.length - (i.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
  }), n.currentTranslate < r.maxTranslate() && (b = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - u) ** C))), b && (a.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (n.currentTranslate = n.startTranslate), i.threshold > 0)
    if (Math.abs(u) > i.threshold || n.allowThresholdMove) {
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
function za(e) {
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
    params: s,
    touches: c,
    rtlTranslate: a,
    slidesGrid: d,
    enabled: p
  } = t;
  if (!p || !s.simulateTouch && n.pointerType === "mouse") return;
  if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) {
    r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
    return;
  }
  s.grabCursor && r.isMoved && r.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const f = vr(), h = f - r.touchStartTime;
  if (t.allowClick) {
    const x = n.path || n.composedPath && n.composedPath();
    t.updateClickedSlide(x && x[0] || n.target, x), t.emit("tap click", n), h < 300 && f - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n);
  }
  if (r.lastClickTime = vr(), Oi(() => {
    t.destroyed || (t.allowClick = !0);
  }), !r.isTouched || !r.isMoved || !t.swipeDirection || c.diff === 0 && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
    return;
  }
  r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
  let l;
  if (s.followFinger ? l = a ? t.translate : -t.translate : l = -r.currentTranslate, s.cssMode)
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: l
    });
    return;
  }
  const u = l >= -t.maxTranslate() && !t.params.loop;
  let v = 0, T = t.slidesSizesGrid[0];
  for (let x = 0; x < d.length; x += x < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
    const j = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof d[x + j] < "u" ? (u || l >= d[x] && l < d[x + j]) && (v = x, T = d[x + j] - d[x]) : (u || l >= d[x]) && (v = x, T = d[d.length - 1] - d[d.length - 2]);
  }
  let g = null, y = null;
  s.rewind && (t.isBeginning ? y = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
  const b = (l - d[v]) / T, C = v < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (h > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (b >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : v + C) : t.slideTo(v)), t.swipeDirection === "prev" && (b > 1 - s.longSwipesRatio ? t.slideTo(v + C) : y !== null && b < 0 && Math.abs(b) > s.longSwipesRatio ? t.slideTo(y) : t.slideTo(v));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl) ? n.target === t.navigation.nextEl ? t.slideTo(v + C) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : v + C), t.swipeDirection === "prev" && t.slideTo(y !== null ? y : v));
  }
}
function Bn() {
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
  } = e, s = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const c = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !c ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function _a(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function $a() {
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
function Ra(e) {
  const t = this;
  mr(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update();
}
function Aa() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const $i = (e, t) => {
  const r = ot(), {
    params: n,
    el: i,
    wrapperEl: o,
    device: s
  } = e, c = !!n.nested, a = t === "on" ? "addEventListener" : "removeEventListener", d = t;
  !i || typeof i == "string" || (r[a]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: c
  }), i[a]("touchstart", e.onTouchStart, {
    passive: !1
  }), i[a]("pointerdown", e.onTouchStart, {
    passive: !1
  }), r[a]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: c
  }), r[a]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: c
  }), r[a]("touchend", e.onTouchEnd, {
    passive: !0
  }), r[a]("pointerup", e.onTouchEnd, {
    passive: !0
  }), r[a]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), r[a]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), r[a]("pointerout", e.onTouchEnd, {
    passive: !0
  }), r[a]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), r[a]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (n.preventClicks || n.preventClicksPropagation) && i[a]("click", e.onClick, !0), n.cssMode && o[a]("scroll", e.onScroll), n.updateOnWindowResize ? e[d](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Bn, !0) : e[d]("observerUpdate", Bn, !0), i[a]("load", e.onLoad, {
    capture: !0
  }));
};
function La() {
  const e = this, {
    params: t
  } = e;
  e.onTouchStart = Pa.bind(e), e.onTouchMove = Ia.bind(e), e.onTouchEnd = za.bind(e), e.onDocumentTouchStart = Aa.bind(e), t.cssMode && (e.onScroll = $a.bind(e)), e.onClick = _a.bind(e), e.onLoad = Ra.bind(e), $i(e, "on");
}
function ja() {
  $i(this, "off");
}
var Wa = {
  attachEvents: La,
  detachEvents: ja
};
const Nn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Da() {
  const e = this, {
    realIndex: t,
    initialized: r,
    params: n,
    el: i
  } = e, o = n.breakpoints;
  if (!o || o && Object.keys(o).length === 0) return;
  const s = ot(), c = n.breakpointsBase === "window" || !n.breakpointsBase ? n.breakpointsBase : "container", a = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : s.querySelector(n.breakpointsBase), d = e.getBreakpoint(o, c, a);
  if (!d || e.currentBreakpoint === d) return;
  const f = (d in o ? o[d] : void 0) || e.originalParams, h = Nn(e, n), l = Nn(e, f), u = e.params.grabCursor, v = f.grabCursor, T = n.enabled;
  h && !l ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !h && l && (i.classList.add(`${n.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && n.grid.fill === "column") && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), u && !v ? e.unsetGrabCursor() : !u && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((j) => {
    if (typeof f[j] > "u") return;
    const B = n[j] && n[j].enabled, E = f[j] && f[j].enabled;
    B && !E && e[j].disable(), !B && E && e[j].enable();
  });
  const g = f.direction && f.direction !== n.direction, y = n.loop && (f.slidesPerView !== n.slidesPerView || g), b = n.loop;
  g && r && e.changeDirection(), _e(e.params, f);
  const C = e.params.enabled, x = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), T && !C ? e.disable() : !T && C && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", f), r && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && x ? (e.loopCreate(t), e.updateSlides()) : b && !x && e.loopDestroy()), e.emit("breakpoint", f);
}
function Ba(e, t = "window", r) {
  if (!e || t === "container" && !r) return;
  let n = !1;
  const i = we(), o = t === "window" ? i.innerHeight : r.clientHeight, s = Object.keys(e).map((c) => {
    if (typeof c == "string" && c.indexOf("@") === 0) {
      const a = parseFloat(c.substr(1));
      return {
        value: o * a,
        point: c
      };
    }
    return {
      value: c,
      point: c
    };
  });
  s.sort((c, a) => parseInt(c.value, 10) - parseInt(a.value, 10));
  for (let c = 0; c < s.length; c += 1) {
    const {
      point: a,
      value: d
    } = s[c];
    t === "window" ? i.matchMedia(`(min-width: ${d}px)`).matches && (n = a) : d <= r.clientWidth && (n = a);
  }
  return n || "max";
}
var Na = {
  setBreakpoint: Da,
  getBreakpoint: Ba
};
function Fa(e, t) {
  const r = [];
  return e.forEach((n) => {
    typeof n == "object" ? Object.keys(n).forEach((i) => {
      n[i] && r.push(t + i);
    }) : typeof n == "string" && r.push(t + n);
  }), r;
}
function Ga() {
  const e = this, {
    classNames: t,
    params: r,
    rtl: n,
    el: i,
    device: o
  } = e, s = Fa(["initialized", r.direction, {
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
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function Va() {
  const e = this, {
    el: t,
    classNames: r
  } = e;
  !t || typeof t == "string" || (t.classList.remove(...r), e.emitContainerClasses());
}
var Ya = {
  addClasses: Ga,
  removeClasses: Va
};
function Ha() {
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
var Xa = {
  checkOverflow: Ha
}, dn = {
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
function qa(e, t) {
  return function(n = {}) {
    const i = Object.keys(n)[0], o = n[i];
    if (typeof o != "object" || o === null) {
      _e(t, n);
      return;
    }
    if (e[i] === !0 && (e[i] = {
      enabled: !0
    }), i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), !(i in e && "enabled" in o)) {
      _e(t, n);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = {
      enabled: !1
    }), _e(t, n);
  };
}
const Yr = {
  eventsEmitter: Ys,
  update: ra,
  translate: la,
  transition: fa,
  slide: xa,
  loop: wa,
  grabCursor: Oa,
  events: Wa,
  breakpoints: Na,
  checkOverflow: Xa,
  classes: Ya
}, Hr = {};
let gn = class Ke {
  constructor(...t) {
    let r, n;
    t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? n = t[0] : [r, n] = t, n || (n = {}), n = _e({}, n), r && !n.el && (n.el = r);
    const i = ot();
    if (n.el && typeof n.el == "string" && i.querySelectorAll(n.el).length > 1) {
      const a = [];
      return i.querySelectorAll(n.el).forEach((d) => {
        const p = _e({}, n, {
          el: d
        });
        a.push(new Ke(p));
      }), a;
    }
    const o = this;
    o.__swiper__ = !0, o.support = Pi(), o.device = Ii({
      userAgent: n.userAgent
    }), o.browser = zi(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], n.modules && Array.isArray(n.modules) && n.modules.forEach((a) => {
      typeof a == "function" && o.modules.indexOf(a) < 0 && o.modules.push(a);
    });
    const s = {};
    o.modules.forEach((a) => {
      a({
        params: n,
        swiper: o,
        extendParams: qa(n, s),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o)
      });
    });
    const c = _e({}, dn, s);
    return o.params = _e({}, c, Hr, n), o.originalParams = _e({}, o.params), o.passedParams = _e({}, n), o.params && o.params.on && Object.keys(o.params.on).forEach((a) => {
      o.on(a, o.params.on[a]);
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
    } = this, i = Be(r, `.${n.slideClass}, swiper-slide`), o = Sr(i[0]);
    return Sr(t) - o;
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
    t.slides = Be(r, `.${n.slideClass}, swiper-slide`);
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
    const i = n.minTranslate(), s = (n.maxTranslate() - i) * t + i;
    n.translateTo(s, typeof r > "u" ? 0 : r), n.updateActiveIndex(), n.updateSlidesClasses();
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
      slidesGrid: s,
      slidesSizesGrid: c,
      size: a,
      activeIndex: d
    } = n;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = o[d] ? Math.ceil(o[d].swiperSlideSize) : 0, h;
      for (let l = d + 1; l < o.length; l += 1)
        o[l] && !h && (f += Math.ceil(o[l].swiperSlideSize), p += 1, f > a && (h = !0));
      for (let l = d - 1; l >= 0; l -= 1)
        o[l] && !h && (f += o[l].swiperSlideSize, p += 1, f > a && (h = !0));
    } else if (t === "current")
      for (let f = d + 1; f < o.length; f += 1)
        (r ? s[f] + c[f] - s[d] < a : s[f] - s[d] < a) && (p += 1);
    else
      for (let f = d - 1; f >= 0; f -= 1)
        s[d] - s[f] < a && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: r,
      params: n
    } = t;
    n.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
      s.complete && mr(t, s);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate, c = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (n.freeMode && n.freeMode.enabled && !n.cssMode)
      i(), n.autoHeight && t.updateAutoHeight();
    else {
      if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && t.isEnd && !n.centeredSlides) {
        const s = t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(s.length - 1, 0, !1, !0);
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
    let s = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(i()) : Be(n, i())[0];
    return !s && r.params.createElements && (s = xr("div", r.params.wrapperClass), n.append(s), Be(n, `.${r.params.slideClass}`).forEach((c) => {
      s.append(c);
    })), Object.assign(r, {
      el: n,
      wrapperEl: s,
      slidesEl: r.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : s,
      hostEl: r.isElement ? n.parentNode.host : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || nt(n, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || nt(n, "direction") === "rtl"),
      wrongRTL: nt(s, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const r = this;
    if (r.initialized || r.mount(t) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(void 0, !0), r.attachEvents();
    const i = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && i.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach((o) => {
      o.complete ? mr(r, o) : o.addEventListener("load", (s) => {
        mr(r, s.target);
      });
    }), cn(r), r.initialized = !0, cn(r), r.emit("init"), r.emit("afterInit"), r;
  }
  destroy(t = !0, r = !0) {
    const n = this, {
      params: i,
      el: o,
      wrapperEl: s,
      slides: c
    } = n;
    return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), r && (n.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), s && s.removeAttribute("style"), c && c.length && c.forEach((a) => {
      a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((a) => {
      n.off(a);
    }), t !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), Is(n)), n.destroyed = !0), null;
  }
  static extendDefaults(t) {
    _e(Hr, t);
  }
  static get extendedDefaults() {
    return Hr;
  }
  static get defaults() {
    return dn;
  }
  static installModule(t) {
    Ke.prototype.__modules__ || (Ke.prototype.__modules__ = []);
    const r = Ke.prototype.__modules__;
    typeof t == "function" && r.indexOf(t) < 0 && r.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((r) => Ke.installModule(r)), Ke) : (Ke.installModule(t), Ke);
  }
};
Object.keys(Yr).forEach((e) => {
  Object.keys(Yr[e]).forEach((t) => {
    gn.prototype[t] = Yr[e][t];
  });
});
gn.use([Gs, Vs]);
const Ri = [
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
function pt(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function _t(e, t) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((n) => r.indexOf(n) < 0).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : pt(t[n]) && pt(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : _t(e[n], t[n]) : e[n] = t[n];
  });
}
function Ai(e = {}) {
  return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function Li(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function ji(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function Wi(e = "") {
  const t = e.split(" ").map((n) => n.trim()).filter((n) => !!n), r = [];
  return t.forEach((n) => {
    r.indexOf(n) < 0 && r.push(n);
  }), r.join(" ");
}
function Ua(e = "") {
  return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function Ka({
  swiper: e,
  slides: t,
  passedParams: r,
  changedParams: n,
  nextEl: i,
  prevEl: o,
  scrollbarEl: s,
  paginationEl: c
}) {
  const a = n.filter((E) => E !== "children" && E !== "direction" && E !== "wrapperClass"), {
    params: d,
    pagination: p,
    navigation: f,
    scrollbar: h,
    virtual: l,
    thumbs: u
  } = e;
  let v, T, g, y, b, C, x, j;
  n.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && d.thumbs && (!d.thumbs.swiper || d.thumbs.swiper.destroyed) && (v = !0), n.includes("controller") && r.controller && r.controller.control && d.controller && !d.controller.control && (T = !0), n.includes("pagination") && r.pagination && (r.pagination.el || c) && (d.pagination || d.pagination === !1) && p && !p.el && (g = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || s) && (d.scrollbar || d.scrollbar === !1) && h && !h.el && (y = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || i) && (d.navigation || d.navigation === !1) && f && !f.prevEl && !f.nextEl && (b = !0);
  const B = (E) => {
    e[E] && (e[E].destroy(), E === "navigation" ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()), d[E].prevEl = void 0, d[E].nextEl = void 0, e[E].prevEl = void 0, e[E].nextEl = void 0) : (e.isElement && e[E].el.remove(), d[E].el = void 0, e[E].el = void 0));
  };
  n.includes("loop") && e.isElement && (d.loop && !r.loop ? C = !0 : !d.loop && r.loop ? x = !0 : j = !0), a.forEach((E) => {
    if (pt(d[E]) && pt(r[E]))
      Object.assign(d[E], r[E]), (E === "navigation" || E === "pagination" || E === "scrollbar") && "enabled" in r[E] && !r[E].enabled && B(E);
    else {
      const z = r[E];
      (z === !0 || z === !1) && (E === "navigation" || E === "pagination" || E === "scrollbar") ? z === !1 && B(E) : d[E] = r[E];
    }
  }), a.includes("controller") && !T && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), n.includes("children") && t && l && d.virtual.enabled ? (l.slides = t, l.update(!0)) : n.includes("virtual") && l && d.virtual.enabled && (t && (l.slides = t), l.update(!0)), n.includes("children") && t && d.loop && (j = !0), v && u.init() && u.update(!0), T && (e.controller.control = d.controller.control), g && (e.isElement && (!c || typeof c == "string") && (c = document.createElement("div"), c.classList.add("swiper-pagination"), c.part.add("pagination"), e.el.appendChild(c)), c && (d.pagination.el = c), p.init(), p.render(), p.update()), y && (e.isElement && (!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-scrollbar"), s.part.add("scrollbar"), e.el.appendChild(s)), s && (d.scrollbar.el = s), h.init(), h.updateSize(), h.setTranslate()), b && (e.isElement && ((!i || typeof i == "string") && (i = document.createElement("div"), i.classList.add("swiper-button-next"), Tr(i, e.navigation.arrowSvg), i.part.add("button-next"), e.el.appendChild(i)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), Tr(o, e.navigation.arrowSvg), o.part.add("button-prev"), e.el.appendChild(o))), i && (d.navigation.nextEl = i), o && (d.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && e.changeDirection(r.direction, !1), (C || j) && e.loopDestroy(), (x || j) && e.loopCreate(), e.update();
}
function Ja(e = {}, t = !0) {
  const r = {
    on: {}
  }, n = {}, i = {};
  _t(r, dn), r._emitClasses = !0, r.init = !1;
  const o = {}, s = Ri.map((a) => a.replace(/_/, "")), c = Object.assign({}, e);
  return Object.keys(c).forEach((a) => {
    typeof e[a] > "u" || (s.indexOf(a) >= 0 ? pt(e[a]) ? (r[a] = {}, i[a] = {}, _t(r[a], e[a]), _t(i[a], e[a])) : (r[a] = e[a], i[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : o[a] = e[a]);
  }), ["navigation", "pagination", "scrollbar"].forEach((a) => {
    r[a] === !0 && (r[a] = {}), r[a] === !1 && delete r[a];
  }), {
    params: r,
    passedParams: i,
    rest: o,
    events: n
  };
}
function Za({
  el: e,
  nextEl: t,
  prevEl: r,
  paginationEl: n,
  scrollbarEl: i,
  swiper: o
}, s) {
  Ai(s) && t && r && (o.params.navigation.nextEl = t, o.originalParams.navigation.nextEl = t, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), Li(s) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), ji(s) && i && (o.params.scrollbar.el = i, o.originalParams.scrollbar.el = i), o.init(e);
}
function Qa(e, t, r, n, i) {
  const o = [];
  if (!t) return o;
  const s = (a) => {
    o.indexOf(a) < 0 && o.push(a);
  };
  if (r && n) {
    const a = n.map(i), d = r.map(i);
    a.join("") !== d.join("") && s("children"), n.length !== r.length && s("children");
  }
  return Ri.filter((a) => a[0] === "_").map((a) => a.replace(/_/, "")).forEach((a) => {
    if (a in e && a in t)
      if (pt(e[a]) && pt(t[a])) {
        const d = Object.keys(e[a]), p = Object.keys(t[a]);
        d.length !== p.length ? s(a) : (d.forEach((f) => {
          e[a][f] !== t[a][f] && s(a);
        }), p.forEach((f) => {
          e[a][f] !== t[a][f] && s(a);
        }));
      } else e[a] !== t[a] && s(a);
  }), o;
}
const el = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function Di(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function Bi(e) {
  const t = [];
  return me.Children.toArray(e).forEach((r) => {
    Di(r) ? t.push(r) : r.props && r.props.children && Bi(r.props.children).forEach((n) => t.push(n));
  }), t;
}
function tl(e) {
  const t = [], r = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return me.Children.toArray(e).forEach((n) => {
    if (Di(n))
      t.push(n);
    else if (n.props && n.props.slot && r[n.props.slot])
      r[n.props.slot].push(n);
    else if (n.props && n.props.children) {
      const i = Bi(n.props.children);
      i.length > 0 ? i.forEach((o) => t.push(o)) : r["container-end"].push(n);
    } else
      r["container-end"].push(n);
  }), {
    slides: t,
    slots: r
  };
}
function rl(e, t, r) {
  if (!r) return null;
  const n = (p) => {
    let f = p;
    return p < 0 ? f = t.length + p : f >= t.length && (f = f - t.length), f;
  }, i = e.isHorizontal() ? {
    [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
  } : {
    top: `${r.offset}px`
  }, {
    from: o,
    to: s
  } = r, c = e.params.loop ? -t.length : 0, a = e.params.loop ? t.length * 2 : t.length, d = [];
  for (let p = c; p < a; p += 1)
    p >= o && p <= s && d.push(t[n(p)]);
  return d.map((p, f) => /* @__PURE__ */ me.cloneElement(p, {
    swiper: e,
    style: i,
    key: p.props.virtualIndex || p.key || `slide-${f}`
  }));
}
function Ut(e, t) {
  return typeof window > "u" ? Jt(e, t) : xi(e, t);
}
const Fn = /* @__PURE__ */ Si(null), Ni = /* @__PURE__ */ Si(null), nl = () => ts(Ni), Fi = /* @__PURE__ */ Pr(({
  className: e,
  tag: t = "div",
  wrapperTag: r = "div",
  children: n,
  onSwiper: i,
  ...o
} = {}, s) => {
  let c = !1;
  const [a, d] = Ie("swiper"), [p, f] = Ie(null), [h, l] = Ie(!1), u = Me(!1), v = Me(null), T = Me(null), g = Me(null), y = Me(null), b = Me(null), C = Me(null), x = Me(null), j = Me(null), {
    params: B,
    passedParams: E,
    rest: z,
    events: w
  } = Ja(o), {
    slides: P,
    slots: A
  } = tl(n), G = () => {
    l(!h);
  };
  Object.assign(B.on, {
    _containerClasses(D, K) {
      d(K);
    }
  });
  const N = () => {
    Object.assign(B.on, w), c = !0;
    const D = {
      ...B
    };
    if (delete D.wrapperClass, T.current = new gn(D), T.current.virtual && T.current.params.virtual.enabled) {
      T.current.virtual.slides = P;
      const K = {
        cache: !1,
        slides: P,
        renderExternal: f,
        renderExternalUpdate: !1
      };
      _t(T.current.params.virtual, K), _t(T.current.originalParams.virtual, K);
    }
  };
  v.current || N(), T.current && T.current.on("_beforeBreakpoint", G);
  const U = () => {
    c || !w || !T.current || Object.keys(w).forEach((D) => {
      T.current.on(D, w[D]);
    });
  }, re = () => {
    !w || !T.current || Object.keys(w).forEach((D) => {
      T.current.off(D, w[D]);
    });
  };
  Jt(() => () => {
    T.current && T.current.off("_beforeBreakpoint", G);
  }), Jt(() => {
    !u.current && T.current && (T.current.emitSlidesClasses(), u.current = !0);
  }), Ut(() => {
    if (s && (s.current = v.current), !!v.current)
      return T.current.destroyed && N(), Za({
        el: v.current,
        nextEl: b.current,
        prevEl: C.current,
        paginationEl: x.current,
        scrollbarEl: j.current,
        swiper: T.current
      }, B), i && !T.current.destroyed && i(T.current), () => {
        T.current && !T.current.destroyed && T.current.destroy(!0, !1);
      };
  }, []), Ut(() => {
    U();
    const D = Qa(E, g.current, P, y.current, (K) => K.key);
    return g.current = E, y.current = P, D.length && T.current && !T.current.destroyed && Ka({
      swiper: T.current,
      slides: P,
      passedParams: E,
      changedParams: D,
      nextEl: b.current,
      prevEl: C.current,
      scrollbarEl: j.current,
      paginationEl: x.current
    }), () => {
      re();
    };
  }), Ut(() => {
    el(T.current);
  }, [p]);
  function ae() {
    return B.virtual ? rl(T.current, P, p) : P.map((D, K) => /* @__PURE__ */ me.cloneElement(D, {
      swiper: T.current,
      swiperSlideIndex: K
    }));
  }
  return /* @__PURE__ */ me.createElement(t, Er({
    ref: v,
    className: Wi(`${a}${e ? ` ${e}` : ""}`)
  }, z), /* @__PURE__ */ me.createElement(Ni.Provider, {
    value: T.current
  }, A["container-start"], /* @__PURE__ */ me.createElement(r, {
    className: Ua(B.wrapperClass)
  }, A["wrapper-start"], ae(), A["wrapper-end"]), Ai(B) && /* @__PURE__ */ me.createElement(me.Fragment, null, /* @__PURE__ */ me.createElement("div", {
    ref: C,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ me.createElement("div", {
    ref: b,
    className: "swiper-button-next"
  })), ji(B) && /* @__PURE__ */ me.createElement("div", {
    ref: j,
    className: "swiper-scrollbar"
  }), Li(B) && /* @__PURE__ */ me.createElement("div", {
    ref: x,
    className: "swiper-pagination"
  }), A["container-end"]));
});
Fi.displayName = "Swiper";
const Gi = /* @__PURE__ */ Pr(({
  tag: e = "div",
  children: t,
  className: r = "",
  swiper: n,
  zoom: i,
  lazy: o,
  virtualIndex: s,
  swiperSlideIndex: c,
  ...a
} = {}, d) => {
  const p = Me(null), [f, h] = Ie("swiper-slide"), [l, u] = Ie(!1);
  function v(b, C, x) {
    C === p.current && h(x);
  }
  Ut(() => {
    if (typeof c < "u" && (p.current.swiperSlideIndex = c), d && (d.current = p.current), !(!p.current || !n)) {
      if (n.destroyed) {
        f !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return n.on("_slideClass", v), () => {
        n && n.off("_slideClass", v);
      };
    }
  }), Ut(() => {
    n && p.current && !n.destroyed && h(n.getSlideClasses(p.current));
  }, [n]);
  const T = {
    isActive: f.indexOf("swiper-slide-active") >= 0,
    isVisible: f.indexOf("swiper-slide-visible") >= 0,
    isPrev: f.indexOf("swiper-slide-prev") >= 0,
    isNext: f.indexOf("swiper-slide-next") >= 0
  }, g = () => typeof t == "function" ? t(T) : t, y = () => {
    u(!0);
  };
  return /* @__PURE__ */ me.createElement(e, Er({
    ref: p,
    className: Wi(`${f}${r ? ` ${r}` : ""}`),
    "data-swiper-slide-index": s,
    onLoad: y
  }, a), i && /* @__PURE__ */ me.createElement(Fn.Provider, {
    value: T
  }, /* @__PURE__ */ me.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof i == "number" ? i : void 0
  }, g(), o && !l && /* @__PURE__ */ me.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (b) => {
      b && (b.lazyPreloaderManaged = !0);
    }
  }))), !i && /* @__PURE__ */ me.createElement(Fn.Provider, {
    value: T
  }, g(), o && !l && /* @__PURE__ */ me.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (b) => {
      b && (b.lazyPreloaderManaged = !0);
    }
  })));
});
Gi.displayName = "SwiperSlide";
const Gn = ({ type: e }) => {
  const t = nl();
  return /* @__PURE__ */ _.jsxs(
    zt,
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
        e === "prev" && /* @__PURE__ */ _.jsx(os, {}),
        e === "next" && /* @__PURE__ */ _.jsx(Ei, {})
      ]
    }
  );
}, il = ({ swiperRef: e, onClose: t, current: r, total: n, currentImage: i }, o) => /* @__PURE__ */ _.jsxs(
  At,
  {
    ref: o,
    slot: "container-start",
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: { background: "#000", px: 2, height: 68, width: 1 },
    children: [
      /* @__PURE__ */ _.jsx(ft, { variant: "h3", children: `${r} / ${n}` }),
      /* @__PURE__ */ _.jsxs(At, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ _.jsx(
          zt,
          {
            color: "secondary",
            onClick: () => {
              var s, c, a;
              return (a = (c = (s = e == null ? void 0 : e.current) == null ? void 0 : s.swiper) == null ? void 0 : c.zoom) == null ? void 0 : a.in();
            },
            children: /* @__PURE__ */ _.jsx(ss, { size: 24 })
          }
        ),
        /* @__PURE__ */ _.jsx(
          zt,
          {
            color: "secondary",
            onClick: () => {
              var s, c, a;
              return (a = (c = (s = e == null ? void 0 : e.current) == null ? void 0 : s.swiper) == null ? void 0 : c.zoom) == null ? void 0 : a.out();
            },
            children: /* @__PURE__ */ _.jsx(as, { size: 24 })
          }
        ),
        /* @__PURE__ */ _.jsx(
          zt,
          {
            color: "secondary",
            onClick: () => {
              const s = document.createElement("a");
              s.href = i == null ? void 0 : i.url, s.download = i == null ? void 0 : i.name, document.body.appendChild(s), s.click(), document.body.removeChild(s);
            },
            children: /* @__PURE__ */ _.jsx(ls, { size: 24 })
          }
        ),
        /* @__PURE__ */ _.jsx(
          zt,
          {
            color: "secondary",
            onClick: t,
            children: /* @__PURE__ */ _.jsx(Ti, { size: 24 })
          }
        )
      ] })
    ]
  }
), ol = Pr(il), rf = ({
  items: e,
  isOpen: t,
  onClose: r,
  activeId: n
}) => {
  const i = Me(null), [o, s] = Ie(1), [c, a] = Ie(0), d = e == null ? void 0 : e.findIndex((p) => (p == null ? void 0 : p.id) === n);
  return /* @__PURE__ */ _.jsx(Ko, { children: /* @__PURE__ */ _.jsx(
    Jo,
    {
      sx: (p) => ({ color: "#fff", zIndex: p.zIndex.drawer + 1 }),
      open: t,
      children: /* @__PURE__ */ _.jsxs(At, { width: 1, height: 1, children: [
        /* @__PURE__ */ _.jsx(
          ol,
          {
            swiperRef: i,
            current: o,
            total: c,
            onClose: r,
            currentImage: e == null ? void 0 : e[o - 1]
          }
        ),
        /* @__PURE__ */ _.jsxs(
          ke,
          {
            ref: i,
            component: Fi,
            style: {
              width: "100%",
              flex: 1,
              minHeight: 0,
              // '--swiper-navigation-color': '#fff',
              "--swiper-pagination-color": "#fff"
            },
            initialSlide: d,
            zoom: { toggle: !1 },
            navigation: !0,
            pagination: {
              clickable: !0
            },
            modules: [Ds, Ws],
            className: "mySwiper",
            onSwiper: (p) => a(p.slides.length),
            onSlideChange: (p) => s(p.activeIndex + 1),
            sx: {
              "& .swiper-zoom-container": {
                cursor: "grab"
              },
              "& .swiper-zoom-container:active": {
                cursor: "grabbing"
              }
            },
            children: [
              e == null ? void 0 : e.map((p) => /* @__PURE__ */ _.jsx(Gi, { children: /* @__PURE__ */ _.jsx("div", { className: "swiper-zoom-container", children: /* @__PURE__ */ _.jsx(
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
              0 < c && o > 1 && /* @__PURE__ */ _.jsx(Gn, { type: "prev" }),
              0 < c && o < c && /* @__PURE__ */ _.jsx(Gn, { type: "next" })
            ]
          }
        )
      ] })
    }
  ) });
};
function gt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gt
}, Symbol.toStringTag, { value: "Module" })), Vn = "$$material";
function le() {
  return le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, le.apply(null, arguments);
}
function st(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function al(e) {
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
var ll = {
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
function cl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var dl = /[A-Z]|^ms/g, ul = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vi = function(t) {
  return t.charCodeAt(1) === 45;
}, Yn = function(t) {
  return t != null && typeof t != "boolean";
}, Xr = /* @__PURE__ */ cl(function(e) {
  return Vi(e) ? e : e.replace(dl, "-$&").toLowerCase();
}), Hn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ul, function(n, i, o) {
          return it = {
            name: i,
            styles: o,
            next: it
          }, i;
        });
  }
  return ll[t] !== 1 && !Vi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function wr(e, t, r) {
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
        return it = {
          name: i.name,
          styles: i.styles,
          next: it
        }, i.name;
      var o = r;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            it = {
              name: s.name,
              styles: s.styles,
              next: it
            }, s = s.next;
        var c = o.styles + ";";
        return c;
      }
      return fl(e, t, r);
    }
  }
  var a = r;
  return a;
}
function fl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += wr(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var s = r[o];
      if (typeof s != "object") {
        var c = s;
        Yn(c) && (n += Xr(o) + ":" + Hn(o, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var a = 0; a < s.length; a++)
          Yn(s[a]) && (n += Xr(o) + ":" + Hn(o, s[a]) + ";");
      else {
        var d = wr(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            n += Xr(o) + ":" + d + ";";
            break;
          }
          default:
            n += o + "{" + d + "}";
        }
      }
    }
  return n;
}
var Xn = /label:\s*([^\s;{]+)\s*(;|$)/g, it;
function pl(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, i = "";
  it = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, i += wr(r, t, o);
  else {
    var s = o;
    i += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (i += wr(r, t, e[c]), n) {
      var a = o;
      i += a[c];
    }
  Xn.lastIndex = 0;
  for (var d = "", p; (p = Xn.exec(i)) !== null; )
    d += "-" + p[1];
  var f = al(i) + d;
  return {
    name: f,
    styles: i,
    next: it
  };
}
var un = { exports: {} }, hr = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function gl() {
  if (qn) return oe;
  qn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, a = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function b(x) {
    if (typeof x == "object" && x !== null) {
      var j = x.$$typeof;
      switch (j) {
        case t:
          switch (x = x.type, x) {
            case a:
            case d:
            case n:
            case o:
            case i:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case c:
                case p:
                case u:
                case l:
                case s:
                  return x;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function C(x) {
    return b(x) === d;
  }
  return oe.AsyncMode = a, oe.ConcurrentMode = d, oe.ContextConsumer = c, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = p, oe.Fragment = n, oe.Lazy = u, oe.Memo = l, oe.Portal = r, oe.Profiler = o, oe.StrictMode = i, oe.Suspense = f, oe.isAsyncMode = function(x) {
    return C(x) || b(x) === a;
  }, oe.isConcurrentMode = C, oe.isContextConsumer = function(x) {
    return b(x) === c;
  }, oe.isContextProvider = function(x) {
    return b(x) === s;
  }, oe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, oe.isForwardRef = function(x) {
    return b(x) === p;
  }, oe.isFragment = function(x) {
    return b(x) === n;
  }, oe.isLazy = function(x) {
    return b(x) === u;
  }, oe.isMemo = function(x) {
    return b(x) === l;
  }, oe.isPortal = function(x) {
    return b(x) === r;
  }, oe.isProfiler = function(x) {
    return b(x) === o;
  }, oe.isStrictMode = function(x) {
    return b(x) === i;
  }, oe.isSuspense = function(x) {
    return b(x) === f;
  }, oe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === d || x === o || x === i || x === f || x === h || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === l || x.$$typeof === s || x.$$typeof === c || x.$$typeof === p || x.$$typeof === T || x.$$typeof === g || x.$$typeof === y || x.$$typeof === v);
  }, oe.typeOf = b, oe;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function hl() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, a = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function b($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === o || $ === i || $ === f || $ === h || typeof $ == "object" && $ !== null && ($.$$typeof === u || $.$$typeof === l || $.$$typeof === s || $.$$typeof === c || $.$$typeof === p || $.$$typeof === T || $.$$typeof === g || $.$$typeof === y || $.$$typeof === v);
    }
    function C($) {
      if (typeof $ == "object" && $ !== null) {
        var Q = $.$$typeof;
        switch (Q) {
          case t:
            var de = $.type;
            switch (de) {
              case a:
              case d:
              case n:
              case o:
              case i:
              case f:
                return de;
              default:
                var Se = de && de.$$typeof;
                switch (Se) {
                  case c:
                  case p:
                  case u:
                  case l:
                  case s:
                    return Se;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var x = a, j = d, B = c, E = s, z = t, w = p, P = n, A = u, G = l, N = r, U = o, re = i, ae = f, D = !1;
    function K($) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M($) || C($) === a;
    }
    function M($) {
      return C($) === d;
    }
    function R($) {
      return C($) === c;
    }
    function Y($) {
      return C($) === s;
    }
    function H($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function S($) {
      return C($) === p;
    }
    function k($) {
      return C($) === n;
    }
    function O($) {
      return C($) === u;
    }
    function L($) {
      return C($) === l;
    }
    function F($) {
      return C($) === r;
    }
    function X($) {
      return C($) === o;
    }
    function V($) {
      return C($) === i;
    }
    function ne($) {
      return C($) === f;
    }
    se.AsyncMode = x, se.ConcurrentMode = j, se.ContextConsumer = B, se.ContextProvider = E, se.Element = z, se.ForwardRef = w, se.Fragment = P, se.Lazy = A, se.Memo = G, se.Portal = N, se.Profiler = U, se.StrictMode = re, se.Suspense = ae, se.isAsyncMode = K, se.isConcurrentMode = M, se.isContextConsumer = R, se.isContextProvider = Y, se.isElement = H, se.isForwardRef = S, se.isFragment = k, se.isLazy = O, se.isMemo = L, se.isPortal = F, se.isProfiler = X, se.isStrictMode = V, se.isSuspense = ne, se.isValidElementType = b, se.typeOf = C;
  }()), se;
}
var Kn;
function Yi() {
  return Kn || (Kn = 1, process.env.NODE_ENV === "production" ? hr.exports = gl() : hr.exports = hl()), hr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qr, Jn;
function ml() {
  if (Jn) return qr;
  Jn = 1;
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var a = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (a.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qr = i() ? Object.assign : function(o, s) {
    for (var c, a = n(o), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var f in c)
        t.call(c, f) && (a[f] = c[f]);
      if (e) {
        d = e(c);
        for (var h = 0; h < d.length; h++)
          r.call(c, d[h]) && (a[d[h]] = c[d[h]]);
      }
    }
    return a;
  }, qr;
}
var Ur, Zn;
function hn() {
  if (Zn) return Ur;
  Zn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ur = e, Ur;
}
var Kr, Qn;
function Hi() {
  return Qn || (Qn = 1, Kr = Function.call.bind(Object.prototype.hasOwnProperty)), Kr;
}
var Jr, ei;
function yl() {
  if (ei) return Jr;
  ei = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = hn(), r = {}, n = Hi();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, c, a, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (n(o, p)) {
          var f;
          try {
            if (typeof o[p] != "function") {
              var h = Error(
                (a || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            f = o[p](s, p, a, c, null, t);
          } catch (u) {
            f = u;
          }
          if (f && !(f instanceof Error) && e(
            (a || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var l = d ? d() : "";
            e(
              "Failed " + c + " type: " + f.message + (l ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jr = i, Jr;
}
var Zr, ti;
function vl() {
  if (ti) return Zr;
  ti = 1;
  var e = Yi(), t = ml(), r = hn(), n = Hi(), i = yl(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var a = "Warning: " + c;
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Zr = function(c, a) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(M) {
      var R = M && (d && M[d] || M[p]);
      if (typeof R == "function")
        return R;
    }
    var h = "<<anonymous>>", l = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: y(),
      arrayOf: b,
      element: C(),
      elementType: x(),
      instanceOf: j,
      node: w(),
      objectOf: E,
      oneOf: B,
      oneOfType: z,
      shape: A,
      exact: G
    };
    function u(M, R) {
      return M === R ? M !== 0 || 1 / M === 1 / R : M !== M && R !== R;
    }
    function v(M, R) {
      this.message = M, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function T(M) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, Y = 0;
      function H(k, O, L, F, X, V, ne) {
        if (F = F || h, V = V || L, ne !== r) {
          if (a) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = F + ":" + L;
            !R[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Q] = !0, Y++);
          }
        }
        return O[L] == null ? k ? O[L] === null ? new v("The " + X + " `" + V + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new v("The " + X + " `" + V + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : M(O, L, F, X, V);
      }
      var S = H.bind(null, !1);
      return S.isRequired = H.bind(null, !0), S;
    }
    function g(M) {
      function R(Y, H, S, k, O, L) {
        var F = Y[H], X = re(F);
        if (X !== M) {
          var V = ae(F);
          return new v(
            "Invalid " + k + " `" + O + "` of type " + ("`" + V + "` supplied to `" + S + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return T(R);
    }
    function y() {
      return T(s);
    }
    function b(M) {
      function R(Y, H, S, k, O) {
        if (typeof M != "function")
          return new v("Property `" + O + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var L = Y[H];
        if (!Array.isArray(L)) {
          var F = re(L);
          return new v("Invalid " + k + " `" + O + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected an array."));
        }
        for (var X = 0; X < L.length; X++) {
          var V = M(L, X, S, k, O + "[" + X + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return T(R);
    }
    function C() {
      function M(R, Y, H, S, k) {
        var O = R[Y];
        if (!c(O)) {
          var L = re(O);
          return new v("Invalid " + S + " `" + k + "` of type " + ("`" + L + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(M);
    }
    function x() {
      function M(R, Y, H, S, k) {
        var O = R[Y];
        if (!e.isValidElementType(O)) {
          var L = re(O);
          return new v("Invalid " + S + " `" + k + "` of type " + ("`" + L + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(M);
    }
    function j(M) {
      function R(Y, H, S, k, O) {
        if (!(Y[H] instanceof M)) {
          var L = M.name || h, F = K(Y[H]);
          return new v("Invalid " + k + " `" + O + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return T(R);
    }
    function B(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function R(Y, H, S, k, O) {
        for (var L = Y[H], F = 0; F < M.length; F++)
          if (u(L, M[F]))
            return null;
        var X = JSON.stringify(M, function(ne, $) {
          var Q = ae($);
          return Q === "symbol" ? String($) : $;
        });
        return new v("Invalid " + k + " `" + O + "` of value `" + String(L) + "` " + ("supplied to `" + S + "`, expected one of " + X + "."));
      }
      return T(R);
    }
    function E(M) {
      function R(Y, H, S, k, O) {
        if (typeof M != "function")
          return new v("Property `" + O + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var L = Y[H], F = re(L);
        if (F !== "object")
          return new v("Invalid " + k + " `" + O + "` of type " + ("`" + F + "` supplied to `" + S + "`, expected an object."));
        for (var X in L)
          if (n(L, X)) {
            var V = M(L, X, S, k, O + "." + X, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return T(R);
    }
    function z(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var R = 0; R < M.length; R++) {
        var Y = M[R];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(Y) + " at index " + R + "."
          ), s;
      }
      function H(S, k, O, L, F) {
        for (var X = [], V = 0; V < M.length; V++) {
          var ne = M[V], $ = ne(S, k, O, L, F, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && X.push($.data.expectedType);
        }
        var Q = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new v("Invalid " + L + " `" + F + "` supplied to " + ("`" + O + "`" + Q + "."));
      }
      return T(H);
    }
    function w() {
      function M(R, Y, H, S, k) {
        return N(R[Y]) ? null : new v("Invalid " + S + " `" + k + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return T(M);
    }
    function P(M, R, Y, H, S) {
      return new v(
        (M || "React class") + ": " + R + " type `" + Y + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function A(M) {
      function R(Y, H, S, k, O) {
        var L = Y[H], F = re(L);
        if (F !== "object")
          return new v("Invalid " + k + " `" + O + "` of type `" + F + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var X in M) {
          var V = M[X];
          if (typeof V != "function")
            return P(S, k, O, X, ae(V));
          var ne = V(L, X, S, k, O + "." + X, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return T(R);
    }
    function G(M) {
      function R(Y, H, S, k, O) {
        var L = Y[H], F = re(L);
        if (F !== "object")
          return new v("Invalid " + k + " `" + O + "` of type `" + F + "` " + ("supplied to `" + S + "`, expected `object`."));
        var X = t({}, Y[H], M);
        for (var V in X) {
          var ne = M[V];
          if (n(M, V) && typeof ne != "function")
            return P(S, k, O, V, ae(ne));
          if (!ne)
            return new v(
              "Invalid " + k + " `" + O + "` key `" + V + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(Y[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var $ = ne(L, V, S, k, O + "." + V, r);
          if ($)
            return $;
        }
        return null;
      }
      return T(R);
    }
    function N(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(N);
          if (M === null || c(M))
            return !0;
          var R = f(M);
          if (R) {
            var Y = R.call(M), H;
            if (R !== M.entries) {
              for (; !(H = Y.next()).done; )
                if (!N(H.value))
                  return !1;
            } else
              for (; !(H = Y.next()).done; ) {
                var S = H.value;
                if (S && !N(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(M, R) {
      return M === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function re(M) {
      var R = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : U(R, M) ? "symbol" : R;
    }
    function ae(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var R = re(M);
      if (R === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function D(M) {
      var R = ae(M);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function K(M) {
      return !M.constructor || !M.constructor.name ? h : M.constructor.name;
    }
    return l.checkPropTypes = i, l.resetWarningCache = i.resetWarningCache, l.PropTypes = l, l;
  }, Zr;
}
var Qr, ri;
function bl() {
  if (ri) return Qr;
  ri = 1;
  var e = hn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qr = function() {
    function n(s, c, a, d, p, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Qr;
}
if (process.env.NODE_ENV !== "production") {
  var xl = Yi(), Sl = !0;
  un.exports = vl()(xl.isElement, Sl);
} else
  un.exports = bl()();
var Tl = un.exports;
const J = /* @__PURE__ */ ms(Tl);
function El(e) {
  return e == null || Object.keys(e).length === 0;
}
function Xi(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(El(i) ? r : i) : t;
  return /* @__PURE__ */ _.jsx(hs, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Xi.propTypes = {
  defaultTheme: J.object,
  styles: J.oneOfType([J.array, J.string, J.object, J.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ni = [];
function wl(e) {
  return ni[0] = e, pl(ni);
}
function It(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qi(e) {
  if (/* @__PURE__ */ Ee.isValidElement(e) || !It(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = qi(e[r]);
  }), t;
}
function Je(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? le({}, e) : e;
  return It(e) && It(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ Ee.isValidElement(t[i]) ? n[i] = t[i] : It(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && It(e[i]) ? n[i] = Je(e[i], t[i], r) : r.clone ? n[i] = It(t[i]) ? qi(t[i]) : t[i] : n[i] = t[i];
  }), n;
}
const Cl = ["values", "unit", "step"], Ml = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => le({}, r, {
    [n.key]: n.val
  }), {});
};
function Ol(e) {
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
  } = e, i = st(e, Cl), o = Ml(t), s = Object.keys(o);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function a(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, l) {
    const u = s.indexOf(l);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(u !== -1 && typeof t[s[u]] == "number" ? t[s[u]] : l) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function f(h) {
    const l = s.indexOf(h);
    return l === 0 ? c(s[1]) : l === s.length - 1 ? a(s[l]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return le({
    keys: s,
    values: o,
    up: c,
    down: a,
    between: d,
    only: p,
    not: f,
    unit: r
  }, i);
}
const kl = {
  borderRadius: 4
}, at = process.env.NODE_ENV !== "production" ? J.oneOfType([J.number, J.string, J.object, J.array]) : {};
function Kt(e, t) {
  return t ? Je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const mn = {
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
}, ii = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${mn[e]}px)`
};
function Ze(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || ii;
    return t.reduce((s, c, a) => (s[o.up(o.keys[a])] = r(t[a]), s), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || ii;
    return Object.keys(t).reduce((s, c) => {
      if (Object.keys(o.values || mn).indexOf(c) !== -1) {
        const a = o.up(c);
        s[a] = r(t[c], c);
      } else {
        const a = c;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Pl(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const o = e.up(i);
    return n[o] = {}, n;
  }, {})) || {};
}
function oi(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Ui(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : gt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ir(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Cr(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Ir(e, r) || n, t && (i = t(i, n, e)), i;
}
function ye(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, o = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], a = s.theme, d = Ir(a, n) || {};
    return Ze(s, c, (f) => {
      let h = Cr(d, i, f);
      return f === h && typeof f == "string" && (h = Cr(d, i, `${t}${f === "default" ? "" : Ui(f)}`, f)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: at
  } : {}, o.filterProps = [t], o;
}
function Il(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const zl = {
  m: "margin",
  p: "padding"
}, _l = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, si = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $l = Il((e) => {
  if (e.length > 2)
    if (si[e])
      e = si[e];
    else
      return [e];
  const [t, r] = e.split(""), n = zl[t], i = _l[r] || "";
  return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
}), zr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _r = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Rl = [...zr, ..._r];
function er(e, t, r, n) {
  var i;
  const o = (i = Ir(e, t, !1)) != null ? i : r;
  return typeof o == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), o * s) : Array.isArray(o) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[s]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ki(e) {
  return er(e, "spacing", 8, "spacing");
}
function tr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Al(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = tr(t, r), n), {});
}
function Ll(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = $l(r), o = Al(i, n), s = e[r];
  return Ze(e, s, o);
}
function Ji(e, t) {
  const r = Ki(e.theme);
  return Object.keys(e).map((n) => Ll(e, t, n, r)).reduce(Kt, {});
}
function pe(e) {
  return Ji(e, zr);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? zr.reduce((e, t) => (e[t] = at, e), {}) : {};
pe.filterProps = zr;
function ge(e) {
  return Ji(e, _r);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? _r.reduce((e, t) => (e[t] = at, e), {}) : {};
ge.filterProps = _r;
process.env.NODE_ENV !== "production" && Rl.reduce((e, t) => (e[t] = at, e), {});
function jl(e = 8) {
  if (e.mui)
    return e;
  const t = Ki({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((o) => {
    const s = t(o);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function $r(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((o) => {
    n[o] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, o) => t[o] ? Kt(i, t[o](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function De(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fe(e, t) {
  return ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Wl = Fe("border", De), Dl = Fe("borderTop", De), Bl = Fe("borderRight", De), Nl = Fe("borderBottom", De), Fl = Fe("borderLeft", De), Gl = Fe("borderColor"), Vl = Fe("borderTopColor"), Yl = Fe("borderRightColor"), Hl = Fe("borderBottomColor"), Xl = Fe("borderLeftColor"), ql = Fe("outline", De), Ul = Fe("outlineColor"), Rr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = er(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: tr(t, n)
    });
    return Ze(e, e.borderRadius, r);
  }
  return null;
};
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: at
} : {};
Rr.filterProps = ["borderRadius"];
$r(Wl, Dl, Bl, Nl, Fl, Gl, Vl, Yl, Hl, Xl, Rr, ql, Ul);
const Ar = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = er(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: tr(t, n)
    });
    return Ze(e, e.gap, r);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: at
} : {};
Ar.filterProps = ["gap"];
const Lr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = er(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: tr(t, n)
    });
    return Ze(e, e.columnGap, r);
  }
  return null;
};
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: at
} : {};
Lr.filterProps = ["columnGap"];
const jr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = er(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: tr(t, n)
    });
    return Ze(e, e.rowGap, r);
  }
  return null;
};
jr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: at
} : {};
jr.filterProps = ["rowGap"];
const Kl = ye({
  prop: "gridColumn"
}), Jl = ye({
  prop: "gridRow"
}), Zl = ye({
  prop: "gridAutoFlow"
}), Ql = ye({
  prop: "gridAutoColumns"
}), ec = ye({
  prop: "gridAutoRows"
}), tc = ye({
  prop: "gridTemplateColumns"
}), rc = ye({
  prop: "gridTemplateRows"
}), nc = ye({
  prop: "gridTemplateAreas"
}), ic = ye({
  prop: "gridArea"
});
$r(Ar, Lr, jr, Kl, Jl, Zl, Ql, ec, tc, rc, nc, ic);
function $t(e, t) {
  return t === "grey" ? t : e;
}
const oc = ye({
  prop: "color",
  themeKey: "palette",
  transform: $t
}), sc = ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: $t
}), ac = ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: $t
});
$r(oc, sc, ac);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const lc = ye({
  prop: "width",
  transform: $e
}), yn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i;
      const o = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || mn[r];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: $e(r)
      };
    };
    return Ze(e, e.maxWidth, t);
  }
  return null;
};
yn.filterProps = ["maxWidth"];
const cc = ye({
  prop: "minWidth",
  transform: $e
}), dc = ye({
  prop: "height",
  transform: $e
}), uc = ye({
  prop: "maxHeight",
  transform: $e
}), fc = ye({
  prop: "minHeight",
  transform: $e
});
ye({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
ye({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const pc = ye({
  prop: "boxSizing"
});
$r(lc, yn, cc, dc, uc, fc, pc);
const vn = {
  // borders
  border: {
    themeKey: "borders",
    transform: De
  },
  borderTop: {
    themeKey: "borders",
    transform: De
  },
  borderRight: {
    themeKey: "borders",
    transform: De
  },
  borderBottom: {
    themeKey: "borders",
    transform: De
  },
  borderLeft: {
    themeKey: "borders",
    transform: De
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
    transform: De
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Rr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: $t
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: $t
  },
  backgroundColor: {
    themeKey: "palette",
    transform: $t
  },
  // spacing
  p: {
    style: ge
  },
  pt: {
    style: ge
  },
  pr: {
    style: ge
  },
  pb: {
    style: ge
  },
  pl: {
    style: ge
  },
  px: {
    style: ge
  },
  py: {
    style: ge
  },
  padding: {
    style: ge
  },
  paddingTop: {
    style: ge
  },
  paddingRight: {
    style: ge
  },
  paddingBottom: {
    style: ge
  },
  paddingLeft: {
    style: ge
  },
  paddingX: {
    style: ge
  },
  paddingY: {
    style: ge
  },
  paddingInline: {
    style: ge
  },
  paddingInlineStart: {
    style: ge
  },
  paddingInlineEnd: {
    style: ge
  },
  paddingBlock: {
    style: ge
  },
  paddingBlockStart: {
    style: ge
  },
  paddingBlockEnd: {
    style: ge
  },
  m: {
    style: pe
  },
  mt: {
    style: pe
  },
  mr: {
    style: pe
  },
  mb: {
    style: pe
  },
  ml: {
    style: pe
  },
  mx: {
    style: pe
  },
  my: {
    style: pe
  },
  margin: {
    style: pe
  },
  marginTop: {
    style: pe
  },
  marginRight: {
    style: pe
  },
  marginBottom: {
    style: pe
  },
  marginLeft: {
    style: pe
  },
  marginX: {
    style: pe
  },
  marginY: {
    style: pe
  },
  marginInline: {
    style: pe
  },
  marginInlineStart: {
    style: pe
  },
  marginInlineEnd: {
    style: pe
  },
  marginBlock: {
    style: pe
  },
  marginBlockStart: {
    style: pe
  },
  marginBlockEnd: {
    style: pe
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
    style: Ar
  },
  rowGap: {
    style: jr
  },
  columnGap: {
    style: Lr
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
    transform: $e
  },
  maxWidth: {
    style: yn
  },
  minWidth: {
    transform: $e
  },
  height: {
    transform: $e
  },
  maxHeight: {
    transform: $e
  },
  minHeight: {
    transform: $e
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
function gc(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function hc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mc() {
  function e(r, n, i, o) {
    const s = {
      [r]: n,
      theme: i
    }, c = o[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: a = r,
      themeKey: d,
      transform: p,
      style: f
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Ir(i, d) || {};
    return f ? f(s) : Ze(s, n, (u) => {
      let v = Cr(h, p, u);
      return u === v && typeof u == "string" && (v = Cr(h, p, `${r}${u === "default" ? "" : Ui(u)}`, u)), a === !1 ? v : {
        [a]: v
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: i,
      theme: o = {},
      nested: s
    } = r || {};
    if (!i)
      return null;
    const c = (n = o.unstable_sxConfig) != null ? n : vn;
    function a(d) {
      let p = d;
      if (typeof d == "function")
        p = d(o);
      else if (typeof d != "object")
        return d;
      if (!p)
        return null;
      const f = Pl(o.breakpoints), h = Object.keys(f);
      let l = f;
      return Object.keys(p).forEach((u) => {
        const v = hc(p[u], o);
        if (v != null)
          if (typeof v == "object")
            if (c[u])
              l = Kt(l, e(u, v, o, c));
            else {
              const T = Ze({
                theme: o
              }, v, (g) => ({
                [u]: g
              }));
              gc(T, v) ? l[u] = t({
                sx: v,
                theme: o,
                nested: !0
              }) : l = Kt(l, T);
            }
          else
            l = Kt(l, e(u, v, o, c));
      }), !s && o.modularCssLayers ? {
        "@layer sx": oi(h, l)
      } : oi(h, l);
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const bn = mc();
bn.filterProps = ["sx"];
function yc(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const vc = ["breakpoints", "palette", "spacing", "shape"];
function Zi(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: o = {}
  } = e, s = st(e, vc), c = Ol(r), a = jl(i);
  let d = Je({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: le({
      mode: "light"
    }, n),
    spacing: a,
    shape: le({}, kl, o)
  }, s);
  return d.applyStyles = yc, d = t.reduce((p, f) => Je(p, f), d), d.unstable_sxConfig = le({}, vn, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(f) {
    return bn({
      sx: f,
      theme: this
    });
  }, d;
}
function bc(e) {
  return Object.keys(e).length === 0;
}
function xn(e = null) {
  const t = Ee.useContext(wi);
  return !t || bc(t) ? e : t;
}
const xc = Zi();
function Sc(e = xc) {
  return xn(e);
}
function en(e) {
  const t = wl(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Qi({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Sc(r), i = t && n[t] || n;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((s) => en(typeof s == "function" ? s(i) : s)) : o = en(o)), /* @__PURE__ */ _.jsx(Xi, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: J.object,
  /**
   * @ignore
   */
  styles: J.oneOfType([J.array, J.func, J.number, J.object, J.string, J.bool]),
  /**
   * @ignore
   */
  themeId: J.string
});
const ai = (e) => e, Tc = () => {
  let e = ai;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ai;
    }
  };
}, Ec = Tc(), wc = {
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
function Cc(e, t, r = "Mui") {
  const n = wc[t];
  return n ? `${r}-${n}` : `${Ec.generate(e)}-${t}`;
}
const Mc = typeof window < "u" ? Ee.useLayoutEffect : Ee.useEffect;
function eo(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eo
}, Symbol.toStringTag, { value: "Module" }));
function kc(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), eo(e, t, r);
}
function Pc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function to(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return to(Pc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : gt(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : gt(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function Ic(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function xe(e, t) {
  return e = to(e), t = kc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ic(e);
}
const zc = "exact-prop: ​";
function ro(e) {
  return process.env.NODE_ENV === "production" ? e : le({}, e, {
    [zc]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
let li = 0;
function _c(e) {
  const [t, r] = Ee.useState(e), n = e || t;
  return Ee.useEffect(() => {
    t == null && (li += 1, r(`mui-${li}`));
  }, [t]), n;
}
const ci = Ee.useId;
function $c(e) {
  return ci !== void 0 ? ci() : _c(e);
}
const Sn = /* @__PURE__ */ Ee.createContext(null);
process.env.NODE_ENV !== "production" && (Sn.displayName = "ThemeContext");
function no() {
  const e = Ee.useContext(Sn);
  return process.env.NODE_ENV !== "production" && Ee.useDebugValue(e), e;
}
const Rc = typeof Symbol == "function" && Symbol.for, Ac = Rc ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Lc(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return le({}, e, t);
}
function Mr(e) {
  const {
    children: t,
    theme: r
  } = e, n = no();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = Ee.useMemo(() => {
    const o = n === null ? r : Lc(n, r);
    return o != null && (o[Ac] = n !== null), o;
  }, [r, n]);
  return /* @__PURE__ */ _.jsx(Sn.Provider, {
    value: i,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  /**
   * Your component tree.
   */
  children: J.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: J.oneOfType([J.object, J.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Mr.propTypes = ro(Mr.propTypes));
const jc = ["value"], Wc = /* @__PURE__ */ Ee.createContext();
function io(e) {
  let {
    value: t
  } = e, r = st(e, jc);
  return /* @__PURE__ */ _.jsx(Wc.Provider, le({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (io.propTypes = {
  children: J.node,
  value: J.bool
});
const Dc = /* @__PURE__ */ Ee.createContext(void 0);
function oo({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ _.jsx(Dc.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: J.node,
  /**
   * @ignore
   */
  value: J.object
});
function Bc(e) {
  const t = xn(), r = $c() || "", {
    modularCssLayers: n
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? i = "" : typeof n == "string" ? i = n.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Mc(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const s = o.firstChild;
    if (i) {
      var c;
      if (s && (c = s.hasAttribute) != null && c.call(s, "data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === r)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", r), d.textContent = i, o.prepend(d);
    } else {
      var a;
      (a = o.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || a.remove();
    }
  }, [i, r]), i ? /* @__PURE__ */ _.jsx(Qi, {
    styles: i
  }) : null;
}
const di = {};
function ui(e, t, r, n = !1) {
  return Ee.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof r == "function") {
      const o = r(i), s = e ? le({}, t, {
        [e]: o
      }) : o;
      return n ? () => s : s;
    }
    return e ? le({}, t, {
      [e]: r
    }) : le({}, t, r);
  }, [e, t, r, n]);
}
function Or(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, i = xn(di), o = no() || di;
  process.env.NODE_ENV !== "production" && (i === null && typeof r == "function" || n && i && !i[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = ui(n, i, r), c = ui(n, o, r, !0), a = s.direction === "rtl", d = Bc(s);
  return /* @__PURE__ */ _.jsx(Mr, {
    theme: c,
    children: /* @__PURE__ */ _.jsx(wi.Provider, {
      value: s,
      children: /* @__PURE__ */ _.jsx(io, {
        value: a,
        children: /* @__PURE__ */ _.jsxs(oo, {
          value: s == null ? void 0 : s.components,
          children: [d, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: J.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: J.oneOfType([J.func, J.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: J.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Or.propTypes = ro(Or.propTypes));
function Nc(e, t) {
  return le({
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
var ve = {}, so = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(so);
var Fc = so.exports;
const Gc = /* @__PURE__ */ Ci(sl), Vc = /* @__PURE__ */ Ci(Oc);
var ao = Fc;
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.alpha = fo;
ve.blend = rd;
ve.colorChannel = void 0;
var Yc = ve.darken = En;
ve.decomposeColor = Ne;
ve.emphasize = po;
var fi = ve.getContrastRatio = Jc;
ve.getLuminance = kr;
ve.hexToRgb = lo;
ve.hslToRgb = uo;
var Hc = ve.lighten = wn;
ve.private_safeAlpha = Zc;
ve.private_safeColorChannel = void 0;
ve.private_safeDarken = Qc;
ve.private_safeEmphasize = td;
ve.private_safeLighten = ed;
ve.recomposeColor = Lt;
ve.rgbToHex = Kc;
var pi = ao(Gc), Xc = ao(Vc);
function Tn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Xc.default)(e, t, r);
}
function lo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qc(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ne(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ne(lo(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, pi.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, pi.default)(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const co = (e) => {
  const t = Ne(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
ve.colorChannel = co;
const Uc = (e, t) => {
  try {
    return co(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ve.private_safeColorChannel = Uc;
function Lt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Kc(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ne(e);
  return `#${t.map((r, n) => qc(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function uo(e) {
  e = Ne(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, o = n * Math.min(i, 1 - i), s = (d, p = (d + r / 30) % 12) => i - o * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", a.push(t[3])), Lt({
    type: c,
    values: a
  });
}
function kr(e) {
  e = Ne(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ne(uo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Jc(e, t) {
  const r = kr(e), n = kr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function fo(e, t) {
  return e = Ne(e), t = Tn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Lt(e);
}
function Zc(e, t, r) {
  try {
    return fo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function En(e, t) {
  if (e = Ne(e), t = Tn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Lt(e);
}
function Qc(e, t, r) {
  try {
    return En(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function wn(e, t) {
  if (e = Ne(e), t = Tn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Lt(e);
}
function ed(e, t, r) {
  try {
    return wn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function po(e, t = 0.15) {
  return kr(e) > 0.5 ? En(e, t) : wn(e, t);
}
function td(e, t, r) {
  try {
    return po(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function rd(e, t, r, n = 1) {
  const i = (a, d) => Math.round((a ** (1 / n) * (1 - r) + d ** (1 / n) * r) ** n), o = Ne(e), s = Ne(t), c = [i(o.values[0], s.values[0]), i(o.values[1], s.values[1]), i(o.values[2], s.values[2])];
  return Lt({
    type: "rgb",
    values: c
  });
}
const Zt = {
  black: "#000",
  white: "#fff"
}, nd = {
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
}, xt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, St = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Tt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Et = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, wt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, id = ["mode", "contrastThreshold", "tonalOffset"], gi = {
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
    paper: Zt.white,
    default: Zt.white
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
}, tn = {
  text: {
    primary: Zt.white,
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
    active: Zt.white,
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
function hi(e, t, r, n) {
  const i = n.light || n, o = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Hc(e.main, i) : t === "dark" && (e.dark = Yc(e.main, o)));
}
function od(e = "light") {
  return e === "dark" ? {
    main: Tt[200],
    light: Tt[50],
    dark: Tt[400]
  } : {
    main: Tt[700],
    light: Tt[400],
    dark: Tt[800]
  };
}
function sd(e = "light") {
  return e === "dark" ? {
    main: xt[200],
    light: xt[50],
    dark: xt[400]
  } : {
    main: xt[500],
    light: xt[300],
    dark: xt[700]
  };
}
function ad(e = "light") {
  return e === "dark" ? {
    main: St[500],
    light: St[300],
    dark: St[700]
  } : {
    main: St[700],
    light: St[400],
    dark: St[800]
  };
}
function ld(e = "light") {
  return e === "dark" ? {
    main: Et[400],
    light: Et[300],
    dark: Et[700]
  } : {
    main: Et[700],
    light: Et[500],
    dark: Et[900]
  };
}
function cd(e = "light") {
  return e === "dark" ? {
    main: wt[400],
    light: wt[300],
    dark: wt[700]
  } : {
    main: wt[800],
    light: wt[500],
    dark: wt[900]
  };
}
function dd(e = "light") {
  return e === "dark" ? {
    main: Xt[400],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xt[500],
    dark: Xt[900]
  };
}
function ud(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = st(e, id), o = e.primary || od(t), s = e.secondary || sd(t), c = e.error || ad(t), a = e.info || ld(t), d = e.success || cd(t), p = e.warning || dd(t);
  function f(v) {
    const T = fi(v, tn.text.primary) >= r ? tn.text.primary : gi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const g = fi(v, T);
      g < 3 && console.error([`MUI: The contrast ratio of ${g}:1 for ${T} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const h = ({
    color: v,
    name: T,
    mainShade: g = 500,
    lightShade: y = 300,
    darkShade: b = 700
  }) => {
    if (v = le({}, v), !v.main && v[g] && (v.main = v[g]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${g}\` property.` : gt(11, T ? ` (${T})` : "", g));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : gt(12, T ? ` (${T})` : "", JSON.stringify(v.main)));
    return hi(v, "light", y, n), hi(v, "dark", b, n), v.contrastText || (v.contrastText = f(v.main)), v;
  }, l = {
    dark: tn,
    light: gi
  };
  return process.env.NODE_ENV !== "production" && (l[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Je(le({
    // A collection of common colors.
    common: le({}, Zt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: nd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, l[t]), i);
}
const fd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function pd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mi = {
  textTransform: "uppercase"
}, yi = '"Roboto", "Helvetica", "Arial", sans-serif';
function gd(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = yi,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: f
  } = r, h = st(r, fd);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const l = i / 14, u = f || ((g) => `${g / d * l}rem`), v = (g, y, b, C, x) => le({
    fontFamily: n,
    fontWeight: g,
    fontSize: u(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: b
  }, n === yi ? {
    letterSpacing: `${pd(C / y)}em`
  } : {}, x, p), T = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(c, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(c, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(c, 14, 1.75, 0.4, mi),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, mi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Je(le({
    htmlFontSize: d,
    pxToRem: u,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: a
  }, T), h, {
    clone: !1
    // No need to clone deep
  });
}
const hd = 0.2, md = 0.14, yd = 0.12;
function ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${md})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yd})`].join(",");
}
const vd = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bd = ["duration", "easing", "delay"], xd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Sd = {
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
function vi(e) {
  return `${Math.round(e)}ms`;
}
function Td(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ed(e) {
  const t = le({}, xd, e.easing), r = le({}, Sd, e.duration);
  return le({
    getAutoHeightDuration: Td,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: a = 0
      } = o, d = st(o, bd);
      if (process.env.NODE_ENV !== "production") {
        const p = (h) => typeof h == "string", f = (h) => !isNaN(parseFloat(h));
        !p(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !f(a) && !p(a) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((p) => `${p} ${typeof s == "string" ? s : vi(s)} ${c} ${typeof a == "string" ? a : vi(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const wd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Cd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Md(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: o = {}
  } = e, s = st(e, Cd);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : gt(18));
  const c = ud(n), a = Zi(e);
  let d = Je(a, {
    mixins: Nc(a.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: vd.slice(),
    typography: gd(c, o),
    transitions: Ed(i),
    zIndex: le({}, wd)
  });
  if (d = Je(d, s), d = t.reduce((p, f) => Je(p, f), d), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (h, l) => {
      let u;
      for (u in h) {
        const v = h[u];
        if (p.indexOf(u) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Cc("", u);
            console.error([`MUI: The \`${l}\` component increases the CSS specificity of the \`${u}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[u] = {};
        }
      }
    };
    Object.keys(d.components).forEach((h) => {
      const l = d.components[h].styleOverrides;
      l && h.indexOf("Mui") === 0 && f(l, h);
    });
  }
  return d.unstable_sxConfig = le({}, vn, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(f) {
    return bn({
      sx: f,
      theme: this
    });
  }, d;
}
const Od = ["theme"];
function go(e) {
  let {
    theme: t
  } = e, r = st(e, Od);
  const n = t[Vn];
  let i = n || t;
  return typeof t != "function" && (n && !n.vars ? i = le({}, n, {
    vars: null
  }) : t && !t.vars && (i = le({}, t, {
    vars: null
  }))), /* @__PURE__ */ _.jsx(Or, le({}, r, {
    themeId: n ? Vn : void 0,
    theme: i
  }));
}
process.env.NODE_ENV !== "production" && (go.propTypes = {
  /**
   * Your component tree.
   */
  children: J.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: J.oneOfType([J.object, J.func]).isRequired
});
function kd(e) {
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
function Pd(e) {
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
function Id(e) {
  const { palette: t, spacing: r } = e;
  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: /* @__PURE__ */ _.jsx(Ei, { size: 20 })
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
const Ge = (e, t) => {
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
function ct({ color: e, theme: t }) {
  const r = Ge(t, e), { lighter: n, light: i, main: o } = r;
  return {
    borderColor: xe(i, 0.5),
    backgroundColor: n,
    "& .MuiAlert-icon": {
      color: o
    }
  };
}
function zd(e) {
  const t = ct({ color: "primary", theme: e });
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
          "&.MuiAlert-borderPrimary": ct({
            color: "primary",
            theme: e
          }),
          "&.MuiAlert-borderSecondary": ct({
            color: "secondary",
            theme: e
          }),
          "&.MuiAlert-borderError": ct({ color: "error", theme: e }),
          "&.MuiAlert-borderSuccess": ct({
            color: "success",
            theme: e
          }),
          "&.MuiAlert-borderInfo": ct({ color: "info", theme: e }),
          "&.MuiAlert-borderWarning": ct({
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
function _d() {
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
function $d() {
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
function dt({ color: e, theme: t }) {
  const r = Ge(t, e), { lighter: n, main: i } = r;
  return {
    color: i,
    backgroundColor: n
  };
}
function Rd(e) {
  const t = dt({ color: "primary", theme: e });
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
          "&.MuiBadge-colorPrimary": dt({ color: "primary", theme: e }),
          "&.MuiBadge-colorSecondary": dt({
            color: "secondary",
            theme: e
          }),
          "&.MuiBadge-colorError": dt({ color: "error", theme: e }),
          "&.MuiBadge-colorInfo": dt({ color: "info", theme: e }),
          "&.MuiBadge-colorSuccess": dt({ color: "success", theme: e }),
          "&.MuiBadge-colorWarning": dt({ color: "warning", theme: e })
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
const Cn = (e, t) => {
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
function te({ variant: e, color: t, theme: r }) {
  const n = Ge(r, t);
  let { lighter: i, main: o, dark: s, contrastText: c } = n;
  t === "secondary" && (i = r.palette.background.lightGrey || i, o = r.palette.grey.main, s = r.palette.grey.darker, c = "#fff");
  const a = `${t}Button`, d = Cn(r, a), p = {
    "&::after": {
      boxShadow: `0 0 5px 5px ${xe(o, 0.9)}`
    },
    "&:active::after": {
      boxShadow: `0 0 0 0 ${xe(o, 0.9)}`
    },
    "&:focus-visible": {
      outline: `2px solid ${s}`,
      outlineOffset: 2
    }
  };
  switch (e) {
    case "contained":
      return {
        "&:hover": {
          backgroundColor: s
        },
        ...p
      };
    case "shadow":
      return {
        color: c,
        backgroundColor: o,
        boxShadow: d,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: s
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
          color: t === "secondary" ? r.palette.grey.dark : s,
          backgroundColor: t === "secondary" ? r.palette.background.lightGrey : "transparent",
          borderColor: t === "secondary" ? r.palette.grey.dark : s,
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
          color: s,
          borderColor: s
        },
        ...p
      };
    case "text":
      return {
        color: t === "secondary" ? r.palette.grey.main : void 0,
        "&:hover": {
          color: s,
          backgroundColor: i
        },
        ...p
      };
  }
}
function Ad(e) {
  const t = te({
    variant: "dashed",
    color: "primary",
    theme: e
  }), r = te({
    variant: "shadow",
    color: "primary",
    theme: e
  }), n = (o) => {
    var s;
    return {
      "&.Mui-disabled": {
        backgroundColor: (s = Ge(e, o)) == null ? void 0 : s.lighter,
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
          ...te({
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
          ...te({ variant: "greyLight", color: "secondary", theme: e }),
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
          "&.MuiButton-dashedPrimary": te({
            variant: "dashed",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-dashedSecondary": te({
            variant: "dashed",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-dashedError": te({
            variant: "dashed",
            color: "error",
            theme: e
          }),
          "&.MuiButton-dashedSuccess": te({
            variant: "dashed",
            color: "success",
            theme: e
          }),
          "&.MuiButton-dashedInfo": te({
            variant: "dashed",
            color: "info",
            theme: e
          }),
          "&.MuiButton-dashedWarning": te({
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
          "&.MuiButton-shadowPrimary": te({
            variant: "shadow",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-shadowSecondary": te({
            variant: "shadow",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-shadowError": te({
            variant: "shadow",
            color: "error",
            theme: e
          }),
          "&.MuiButton-shadowSuccess": te({
            variant: "shadow",
            color: "success",
            theme: e
          }),
          "&.MuiButton-shadowInfo": te({
            variant: "shadow",
            color: "info",
            theme: e
          }),
          "&.MuiButton-shadowWarning": te({
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
        containedPrimary: te({
          variant: "contained",
          color: "primary",
          theme: e
        }),
        containedSecondary: te({
          variant: "contained",
          color: "secondary",
          theme: e
        }),
        containedError: te({
          variant: "contained",
          color: "error",
          theme: e
        }),
        containedSuccess: te({
          variant: "contained",
          color: "success",
          theme: e
        }),
        containedInfo: te({
          variant: "contained",
          color: "info",
          theme: e
        }),
        containedWarning: te({
          variant: "contained",
          color: "warning",
          theme: e
        }),
        outlinedPrimary: te({
          variant: "outlined",
          color: "primary",
          theme: e
        }),
        outlinedSecondary: te({
          variant: "outlined",
          color: "secondary",
          theme: e
        }),
        outlinedError: te({
          variant: "outlined",
          color: "error",
          theme: e
        }),
        outlinedSuccess: te({
          variant: "outlined",
          color: "success",
          theme: e
        }),
        outlinedInfo: te({
          variant: "outlined",
          color: "info",
          theme: e
        }),
        outlinedWarning: te({
          variant: "outlined",
          color: "warning",
          theme: e
        }),
        textPrimary: te({
          variant: "text",
          color: "primary",
          theme: e
        }),
        textSecondary: te({
          variant: "text",
          color: "secondary",
          theme: e
        }),
        textError: te({ variant: "text", color: "error", theme: e }),
        textSuccess: te({
          variant: "text",
          color: "success",
          theme: e
        }),
        textInfo: te({ variant: "text", color: "info", theme: e }),
        textWarning: te({
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
        ...Rt == null ? void 0 : Rt.map((o) => {
          const { darker: s, dark: c, main: a, light: d, lighter: p } = e.palette[o];
          return {
            props: { variant: "light", color: o },
            style: {
              color: a,
              backgroundColor: p,
              "&:hover": {
                color: c,
                backgroundColor: d
              },
              "&:active": {
                color: s,
                backgroundColor: a
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
function Ld() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function jd() {
  return {
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function Wd() {
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
function Ct({ color: e, theme: t }) {
  const r = Ge(t, e), { lighter: n, main: i, dark: o } = r;
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
function Dd(e) {
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
function rn(e) {
  const t = Dd(e);
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
function Bd(e) {
  const { palette: t } = e;
  return {
    MuiCheckbox: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ _.jsx(
          ke,
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
        checkedIcon: /* @__PURE__ */ _.jsx(
          ke,
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
            children: /* @__PURE__ */ _.jsx(
              ds,
              {
                width: "0.75rem",
                height: "0.75rem",
                color: t.common.white
              }
            )
          }
        ),
        indeterminateIcon: /* @__PURE__ */ _.jsx(
          ke,
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
            children: /* @__PURE__ */ _.jsx(
              cs,
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
            ...rn("small")
          },
          "&.size-medium": {
            ...rn("medium")
          },
          "&.size-large": {
            ...rn("large")
          }
        },
        colorPrimary: Ct({ color: "primary", theme: e }),
        colorSecondary: Ct({ color: "secondary", theme: e }),
        colorSuccess: Ct({ color: "success", theme: e }),
        colorWarning: Ct({ color: "warning", theme: e }),
        colorInfo: Ct({ color: "info", theme: e }),
        colorError: Ct({ color: "error", theme: e })
      }
    }
  };
}
function Mt({ color: e, theme: t }) {
  const r = Ge(t, e), { dark: n } = r;
  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${n}`,
      outlineOffset: 2
    }
  };
}
function ze({ color: e, theme: t }) {
  const r = Ge(t, e), { light: n, lighter: i, main: o } = r;
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
function Nd(e) {
  const t = ze({ color: "secondary", theme: e });
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
          "&.MuiChip-colorPrimary": Mt({ color: "primary", theme: e }),
          "&.MuiChip-colorSecondary": Mt({ color: "secondary", theme: e }),
          "&.MuiChip-colorError": Mt({ color: "error", theme: e }),
          "&.MuiChip-colorInfo": Mt({ color: "info", theme: e }),
          "&.MuiChip-colorSuccess": Mt({ color: "success", theme: e }),
          "&.MuiChip-colorWarning": Mt({ color: "warning", theme: e })
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
          "&.MuiChip-lightPrimary": ze({ color: "primary", theme: e }),
          "&.MuiChip-lightSecondary": ze({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-lightError": ze({ color: "error", theme: e }),
          "&.MuiChip-lightInfo": ze({ color: "info", theme: e }),
          "&.MuiChip-lightSuccess": ze({ color: "success", theme: e }),
          "&.MuiChip-lightWarning": ze({ color: "warning", theme: e })
        },
        combined: {
          border: "1px solid",
          ...t,
          "&.MuiChip-combinedPrimary": ze({
            color: "primary",
            theme: e
          }),
          "&.MuiChip-combinedSecondary": ze({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-combinedError": ze({ color: "error", theme: e }),
          "&.MuiChip-combinedInfo": ze({ color: "info", theme: e }),
          "&.MuiChip-combinedSuccess": ze({
            color: "success",
            theme: e
          }),
          "&.MuiChip-combinedWarning": ze({
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
function Fd() {
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
function Gd(e) {
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
function Vd() {
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
function Yd(e) {
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
function Ot({ color: e, theme: t }) {
  const r = Ge(t, e), { main: n, dark: i, contrastText: o } = r, s = `${e}Button`, c = Cn(t, s);
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
      boxShadow: `0 0 5px 5px ${xe(n, 0.9)}`
    },
    "&:active::after": {
      borderRadius: "50px",
      boxShadow: `0 0 0 0 ${xe(n, 0.9)}`
    }
  };
}
function Hd(e) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          "&.Mui-disabled": {
            backgroundColor: e.palette.grey[200]
          },
          "&.MuiFab-primary": Ot({ color: "primary", theme: e }),
          "&.MuiFab-secondary": Ot({ color: "secondary", theme: e }),
          "&.Mui-error": Ot({ color: "error", theme: e }),
          "&.MuiFab-success": Ot({ color: "success", theme: e }),
          "&.MuiFab-info": Ot({ color: "info", theme: e }),
          "&.MuiFab-warning": Ot({ color: "warning", theme: e }),
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
function Xd(e) {
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
function qd(e) {
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
function Ud(e) {
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
function Kd(e) {
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
function Jd() {
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
function Zd() {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover"
      }
    }
  };
}
function Qd(e) {
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
function eu(e) {
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
function tu(e) {
  const t = Rt == null ? void 0 : Rt.reduce((r, n) => {
    const { darker: i, dark: o, main: s, light: c, lighter: a } = e.palette[n];
    return r.push({
      props: { color: n },
      style: {
        "& .MuiLoadingButton-loadingIndicator": {
          color: s
        }
      }
    }), ["text", "light"].forEach((d) => {
      r.push({
        props: { color: n, variant: d, loading: !0 },
        style: {
          background: a
        }
      });
    }), ["contained"].forEach((d) => {
      r.push({
        props: { color: n, variant: d, loading: !0 },
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
function ut({ variant: e, theme: t }) {
  const r = Ge(t, e), { light: n } = r;
  return Cn(t, `${e}`), {
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
function ru(e) {
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
          ...ut({ variant: "primary", theme: e }),
          "&.Mui-error": {
            ...ut({ variant: "error", theme: e })
          }
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px"
        },
        inputMultiline: {
          padding: 0
        },
        colorSecondary: ut({ variant: "secondary", theme: e }),
        colorError: ut({ variant: "error", theme: e }),
        colorWarning: ut({ variant: "warning", theme: e }),
        colorInfo: ut({ variant: "info", theme: e }),
        colorSuccess: ut({ variant: "success", theme: e })
      }
    }
  };
}
function nu() {
  return {
    MuiPagination: {
      defaultProps: {
        shape: "rounded"
      }
    }
  };
}
function fe({ variant: e, color: t, theme: r }) {
  const n = Ge(r, t), { lighter: i, light: o, dark: s, main: c, contrastText: a } = n, d = {
    "&:focus-visible": {
      outline: `2px solid ${s}`,
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
        color: a,
        backgroundColor: c,
        "&:hover": {
          backgroundColor: o
        },
        ...d
      };
    case "outlined":
      return {
        borderColor: c,
        "&:hover": {
          backgroundColor: i,
          borderColor: o
        },
        ...d
      };
    case "text":
    default:
      return {
        color: c,
        "&:hover": {
          backgroundColor: c,
          color: i
        },
        ...d
      };
  }
}
function iu(e) {
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
            "&.MuiPaginationItem-textPrimary": fe({
              variant: "text",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-textSecondary": fe({
              variant: "text",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-textError": fe({
              variant: "text",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-textSuccess": fe({
              variant: "text",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-textInfo": fe({
              variant: "text",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-textWarning": fe({
              variant: "text",
              color: "warning",
              theme: e
            })
          }
        },
        contained: {
          "&.Mui-selected": {
            "&.MuiPaginationItem-containedPrimary": fe({
              variant: "contained",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-containedSecondary": fe({
              variant: "contained",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-containedError": fe({
              variant: "contained",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-containedSuccess": fe({
              variant: "contained",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-containedInfo": fe({
              variant: "contained",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-containedWarning": fe({
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
            "&.MuiPaginationItem-combinedPrimary": fe({
              variant: "combined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSecondary": fe({
              variant: "combined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedError": fe({
              variant: "combined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSuccess": fe({
              variant: "combined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-combinedInfo": fe({
              variant: "combined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-combinedWarning": fe({
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
            "&.MuiPaginationItem-outlinedPrimary": fe({
              variant: "outlined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSecondary": fe({
              variant: "outlined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedError": fe({
              variant: "outlined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSuccess": fe({
              variant: "outlined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedInfo": fe({
              variant: "outlined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedWarning": fe({
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
function ou(e) {
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
function kt({ color: e, theme: t }) {
  const r = Ge(t, e), { lighter: n, main: i, dark: o } = r;
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
function su(e) {
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
function nn(e) {
  const t = su(e);
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
function au(e) {
  const { palette: t } = e;
  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ _.jsx(
          ke,
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
        checkedIcon: /* @__PURE__ */ _.jsx(
          ke,
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
            children: /* @__PURE__ */ _.jsx(
              ke,
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
            ...nn("small")
          },
          "&.size-medium": {
            ...nn("medium")
          },
          "&.size-large": {
            ...nn("large")
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
function lu(e) {
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
function Pt({ color: e, theme: t }) {
  const r = Ge(t, e), { main: n } = r;
  return {
    border: `2px solid ${n}`
  };
}
function cu(e) {
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
          "&.MuiSlider-thumbColorPrimary": Pt({
            color: "primary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSecondary": Pt({
            color: "secondary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSuccess": Pt({
            color: "success",
            theme: e
          }),
          "&.MuiSlider-thumbColorWarning": Pt({
            color: "warning",
            theme: e
          }),
          "&.MuiSlider-thumbColorInfo": Pt({ color: "info", theme: e }),
          "&.MuiSlider-thumbColorError": Pt({
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
function du(e) {
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
function on(e, t) {
  const r = du(t);
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
function uu(e) {
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
          ...on(e, "medium")
        },
        sizeLarge: { ...on(e, "large") },
        sizeSmall: {
          ...on(e, "small")
        }
      }
    }
  };
}
function fu(e) {
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
function pu(e) {
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
function gu(e) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
function hu(e) {
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
function mu(e) {
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
function yu(e) {
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
function vu() {
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
function bu() {
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
function xu() {
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
function Su(e) {
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
function Tu(e) {
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
function Eu() {
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
function wu() {
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
function Cu(e) {
  return gs(
    kd(e),
    Pd(e),
    Id(e),
    zd(e),
    _d(),
    $d(),
    Rd(e),
    Ad(e),
    Ld(),
    jd(),
    Wd(),
    Bd(e),
    Nd(e),
    Xd(e),
    Fd(),
    Gd(e),
    Vd(),
    Yd(e),
    Hd(e),
    qd(),
    Ud(e),
    Kd(e),
    Jd(),
    Zd(),
    Qd(e),
    eu(),
    tu(e),
    ru(e),
    nu(),
    iu(e),
    ou(e),
    au(e),
    lu(e),
    cu(e),
    uu(e),
    fu(e),
    gu(),
    hu(e),
    mu(e),
    yu(e),
    vu(),
    bu(),
    xu(),
    Su(e),
    Tu(e),
    Eu(),
    wu(),
    pu()
  );
}
const Mu = (e) => {
  var a, d, p, f, h, l, u, v, T, g, y, b, C, x, j, B, E, z, w, P, A, G, N, U, re, ae, D, K, M, R, Y, H, S, k, O, L, F, X, V, ne, $, Q, de, Se, Ce, Re, Ae, Le, He, Qe, Ve, et, tt, Xe, je, rt, Ye, jt, Wt, rr, nr, ir, or, sr, ar, lr, ht, Dt, qe, mt, yt, Bt, cr, Nt, dr, Ft, Gt, ur, fr;
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
    lighter: ((a = e == null ? void 0 : e.colors.grey) == null ? void 0 : a.lighter) || "#bebebe",
    light: ((d = e == null ? void 0 : e.colors.grey) == null ? void 0 : d.light) || "#a9a9a9",
    main: ((f = (p = e == null ? void 0 : e.colors) == null ? void 0 : p.grey) == null ? void 0 : f.main) || "#7f7f7f",
    dark: ((l = (h = e == null ? void 0 : e.colors) == null ? void 0 : h.grey) == null ? void 0 : l.dark) || "#6a6a6a",
    darker: ((v = (u = e == null ? void 0 : e.colors) == null ? void 0 : u.grey) == null ? void 0 : v.darker) || "#3f3f3f"
  }, s = "#fff", c = "#000";
  return {
    primary: {
      lighter: ((g = (T = e == null ? void 0 : e.colors) == null ? void 0 : T.primary) == null ? void 0 : g.lighter) || "#cce1fe",
      light: ((b = (y = e == null ? void 0 : e.colors) == null ? void 0 : y.primary) == null ? void 0 : b.light) || "#b3d2fe",
      main: ((x = (C = e == null ? void 0 : e.colors) == null ? void 0 : C.primary) == null ? void 0 : x.main) || "#0168fa",
      dark: ((B = (j = e == null ? void 0 : e.colors) == null ? void 0 : j.primary) == null ? void 0 : B.dark) || "#0158d5",
      darker: ((z = (E = e == null ? void 0 : e.colors) == null ? void 0 : E.primary) == null ? void 0 : z.darker) || "#0153c8",
      contrastText: ((P = (w = e == null ? void 0 : e.colors) == null ? void 0 : w.primary) == null ? void 0 : P.contrastText) || s,
      disableColor: s
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
      lighter: ((G = (A = e == null ? void 0 : e.colors) == null ? void 0 : A.background) == null ? void 0 : G.softGrey) || "#bebebe",
      // item hover
      light: ((N = e == null ? void 0 : e.colors) == null ? void 0 : N.grey.lighter) || "#a9a9a9",
      // item active
      main: ((re = (U = e == null ? void 0 : e.colors) == null ? void 0 : U.grey) == null ? void 0 : re.main) || "#7f7f7f",
      dark: ((D = (ae = e == null ? void 0 : e.colors) == null ? void 0 : ae.grey) == null ? void 0 : D.dark) || "#6a6a6a",
      // icon color
      darker: ((M = (K = e == null ? void 0 : e.colors) == null ? void 0 : K.grey) == null ? void 0 : M.darker) || "#3f3f3f",
      contrastText: ((Y = (R = e == null ? void 0 : e.colors) == null ? void 0 : R.secondary) == null ? void 0 : Y.contrastText) || s,
      disableColor: s
    },
    error: {
      lighter: ((S = (H = e == null ? void 0 : e.colors) == null ? void 0 : H.error) == null ? void 0 : S.lighter) || "#f8d7da",
      light: ((O = (k = e == null ? void 0 : e.colors) == null ? void 0 : k.error) == null ? void 0 : O.light) || "#f5c2c7",
      main: ((F = (L = e == null ? void 0 : e.colors) == null ? void 0 : L.error) == null ? void 0 : F.main) || "#dc3545",
      dark: ((V = (X = e == null ? void 0 : e.colors) == null ? void 0 : X.error) == null ? void 0 : V.dark) || "#bb2d3b",
      darker: (($ = (ne = e == null ? void 0 : e.colors) == null ? void 0 : ne.error) == null ? void 0 : $.darker) || "#b02a37",
      contrastText: s,
      disableColor: s
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
      contrastText: s,
      disableColor: c
    },
    info: {
      lighter: ((de = (Q = e == null ? void 0 : e.colors) == null ? void 0 : Q.info) == null ? void 0 : de.lighter) || "#ccf1f6",
      light: ((Ce = (Se = e == null ? void 0 : e.colors) == null ? void 0 : Se.info) == null ? void 0 : Ce.light) || "#b3eaf2",
      main: ((Ae = (Re = e == null ? void 0 : e.colors) == null ? void 0 : Re.info) == null ? void 0 : Ae.main) || "#00b8d4",
      dark: ((He = (Le = e == null ? void 0 : e.colors) == null ? void 0 : Le.info) == null ? void 0 : He.dark) || "#26c3da",
      darker: ((Ve = (Qe = e == null ? void 0 : e.colors) == null ? void 0 : Qe.info) == null ? void 0 : Ve.darker) || "#33c6dd",
      contrastText: s,
      disableColor: c
    },
    success: {
      lighter: ((tt = (et = e == null ? void 0 : e.colors) == null ? void 0 : et.success) == null ? void 0 : tt.lighter) || "#cee7d9",
      light: ((je = (Xe = e == null ? void 0 : e.colors) == null ? void 0 : Xe.success) == null ? void 0 : je.light) || "#b6dbc6",
      main: ((Ye = (rt = e == null ? void 0 : e.colors) == null ? void 0 : rt.success) == null ? void 0 : Ye.main) || "#0c8842",
      dark: ((Wt = (jt = e == null ? void 0 : e.colors) == null ? void 0 : jt.success) == null ? void 0 : Wt.dark) || "#0a7438",
      darker: ((nr = (rr = e == null ? void 0 : e.colors) == null ? void 0 : rr.success) == null ? void 0 : nr.darker) || "#0a6d35",
      contrastText: s,
      disableColor: s
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
      contrastText: s,
      disableColor: s
    },
    text: {
      primary: ((or = (ir = e == null ? void 0 : e.colors) == null ? void 0 : ir.text) == null ? void 0 : or.primary) || "#001737",
      secondary: ((ar = (sr = e == null ? void 0 : e.colors) == null ? void 0 : sr.text) == null ? void 0 : ar.secondary) || "#8392A5",
      disabled: ((ht = (lr = e == null ? void 0 : e.colors) == null ? void 0 : lr.text) == null ? void 0 : ht.disabled) || "#8392A5",
      dark: "#1B2E4B"
    },
    background: {
      paper: ((qe = (Dt = e == null ? void 0 : e.colors) == null ? void 0 : Dt.background) == null ? void 0 : qe.paper) || "#fff",
      default: ((yt = (mt = e == null ? void 0 : e.colors) == null ? void 0 : mt.background) == null ? void 0 : yt.default) || "#fff",
      card: "#F5F6FA",
      softGrey: (cr = (Bt = e == null ? void 0 : e.colors) == null ? void 0 : Bt.background) == null ? void 0 : cr.softGrey,
      darkGrey: "#ececec",
      lightGrey: (dr = (Nt = e == null ? void 0 : e.colors) == null ? void 0 : Nt.background) == null ? void 0 : dr.lightGrey
    },
    divider: ((Ft = e == null ? void 0 : e.colors) == null ? void 0 : Ft.divider) || "#D9D9D9",
    border: {
      light: "#F0F0F0",
      main: (Gt = e == null ? void 0 : e.colors) == null ? void 0 : Gt.divider,
      // "D9D9D9"
      dark: "#a1a1a1"
    },
    grey: o,
    header: i[2],
    link: ((fr = (ur = e == null ? void 0 : e.colors) == null ? void 0 : ur.primary) == null ? void 0 : fr.main) || "#0168fa"
  };
}, Ou = (e) => Mu(e), ku = (e) => {
  var r, n;
  const t = Ou(e);
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
}, Pu = (e) => {
  var t, r, n, i, o, s, c, a, d, p, f, h, l, u, v;
  return {
    rowHover: "inset 1px 0 0 rgb(218,220,224),inset -1px 0 0 rgb(218,220,224),0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
    popper: "0px 4px 80px 0px #00000033",
    button: "0 2px #0000000b",
    text: "0 -1px 0 rgb(0 0 0 / 12%)",
    z1: `0px 1px 4px ${xe(((t = e == null ? void 0 : e.grey) == null ? void 0 : t[900]) || "#d9d9d9", 0.08)}`,
    primary: `0 0 0 2px ${xe(((r = e == null ? void 0 : e.primary) == null ? void 0 : r.main) || "#d9d9d9", 0.2)}`,
    secondary: `0 0 0 2px ${xe(((n = e == null ? void 0 : e.secondary) == null ? void 0 : n.main) || "#d9d9d9", 0.2)}`,
    error: `0 0 0 2px ${xe(((i = e == null ? void 0 : e.error) == null ? void 0 : i.main) || "#d9d9d9", 0.2)}`,
    warning: `0 0 0 2px ${xe(((o = e == null ? void 0 : e.warning) == null ? void 0 : o.main) || "#d9d9d9", 0.2)}`,
    info: `0 0 0 2px ${xe(((s = e == null ? void 0 : e.info) == null ? void 0 : s.main) || "#d9d9d9", 0.2)}`,
    success: `0 0 0 2px ${xe(((c = e == null ? void 0 : e.success) == null ? void 0 : c.main) || "#d9d9d9", 0.2)}`,
    grey: `0 0 0 2px ${xe(((a = e == null ? void 0 : e.grey) == null ? void 0 : a[500]) || "#d9d9d9", 0.2)}`,
    primaryButton: `0 14px 12px ${xe(((d = e == null ? void 0 : e.primary) == null ? void 0 : d.main) || "#d9d9d9", 0.2)}`,
    secondaryButton: `0 14px 12px ${xe(((p = e == null ? void 0 : e.secondary) == null ? void 0 : p.main) || "#d9d9d9", 0.2)}`,
    errorButton: `0 14px 12px ${xe(((f = e == null ? void 0 : e.error) == null ? void 0 : f.main) || "#d9d9d9", 0.2)}`,
    warningButton: `0 14px 12px ${xe(((h = e == null ? void 0 : e.warning) == null ? void 0 : h.main) || "#d9d9d9", 0.2)}`,
    infoButton: `0 14px 12px ${xe(((l = e == null ? void 0 : e.info) == null ? void 0 : l.main) || "#d9d9d9", 0.2)}`,
    successButton: `0 14px 12px ${xe(((u = e == null ? void 0 : e.success) == null ? void 0 : u.main) || "#d9d9d9", 0.2)}`,
    greyButton: `0 14px 12px ${xe(((v = e == null ? void 0 : e.grey) == null ? void 0 : v[500]) || "#d9d9d9", 0.2)}`,
    // wrapper: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' // old used in new GW
    // wrapper: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)' // used in new GW
    wrapper: "rgba(0, 0, 0, 0.08) 0px 1px 4px"
    // mantis theme. Refer: https://mantisdashboard.io/login
  };
}, Iu = (e) => {
  var t, r, n, i, o, s, c, a, d, p, f, h, l, u, v, T, g, y, b, C, x, j, B, E, z, w, P, A, G, N, U, re, ae, D, K, M, R, Y, H, S, k, O, L, F, X, V, ne, $, Q, de, Se, Ce;
  return {
    htmlFontSize: e != null && e.fontSize ? typeof (e == null ? void 0 : e.fontSize) == "string" ? +((t = e == null ? void 0 : e.fontSize) == null ? void 0 : t.replace("px", "")) : e == null ? void 0 : e.fontSize : 16,
    fontFamily: e != null && e.fontFamily ? `${e == null ? void 0 : e.fontFamily}, NotoSansKR, 'IBM Plex Sans', sans-serif` : "NotoSansKR, 'IBM Plex Sans', sans-serif",
    fontWeightLight: ((r = e == null ? void 0 : e.fontWeight) == null ? void 0 : r.light) ?? 300,
    fontWeightRegular: ((n = e == null ? void 0 : e.fontWeight) == null ? void 0 : n.regular) ?? 400,
    fontWeightMedium: ((i = e == null ? void 0 : e.fontWeight) == null ? void 0 : i.medium) ?? 500,
    fontWeightSemiBold: ((o = e == null ? void 0 : e.fontWeight) == null ? void 0 : o.semibold) ?? 600,
    fontWeightBold: ((s = e == null ? void 0 : e.fontWeight) == null ? void 0 : s.bold) ?? 700,
    h1: {
      fontWeight: ((a = (c = e == null ? void 0 : e.typography) == null ? void 0 : c.h1) == null ? void 0 : a.fontWeight) ?? 600,
      fontSize: ((p = (d = e == null ? void 0 : e.typography) == null ? void 0 : d.h1) == null ? void 0 : p.fontSize) ?? "2.375rem"
    },
    h2: {
      fontWeight: ((h = (f = e == null ? void 0 : e.typography) == null ? void 0 : f.h2) == null ? void 0 : h.fontWeight) ?? 600,
      fontSize: ((u = (l = e == null ? void 0 : e.typography) == null ? void 0 : l.h2) == null ? void 0 : u.fontSize) ?? "1.875rem"
    },
    h3: {
      fontWeight: ((T = (v = e == null ? void 0 : e.typography) == null ? void 0 : v.h3) == null ? void 0 : T.fontWeight) ?? 600,
      fontSize: ((y = (g = e == null ? void 0 : e.typography) == null ? void 0 : g.h3) == null ? void 0 : y.fontSize) ?? "1.313rem"
    },
    h4: {
      fontWeight: ((C = (b = e == null ? void 0 : e.typography) == null ? void 0 : b.h4) == null ? void 0 : C.fontWeight) ?? 600,
      fontSize: ((j = (x = e == null ? void 0 : e.typography) == null ? void 0 : x.h4) == null ? void 0 : j.fontSize) ?? "0.875rem"
    },
    h5: {
      fontWeight: ((E = (B = e == null ? void 0 : e.typography) == null ? void 0 : B.h5) == null ? void 0 : E.fontWeight) ?? 600,
      fontSize: ((w = (z = e == null ? void 0 : e.typography) == null ? void 0 : z.h5) == null ? void 0 : w.fontSize) ?? "0.813rem"
    },
    h6: {
      fontWeight: ((A = (P = e == null ? void 0 : e.typography) == null ? void 0 : P.h6) == null ? void 0 : A.fontWeight) ?? 500,
      fontSize: ((N = (G = e == null ? void 0 : e.typography) == null ? void 0 : G.h6) == null ? void 0 : N.fontSize) ?? "0.625rem"
    },
    caption: {
      fontWeight: ((re = (U = e == null ? void 0 : e.typography) == null ? void 0 : U.caption) == null ? void 0 : re.fontWeight) ?? 500,
      fontSize: ((D = (ae = e == null ? void 0 : e.typography) == null ? void 0 : ae.caption) == null ? void 0 : D.fontSize) ?? "0.75rem"
    },
    body1: {
      fontWeight: ((M = (K = e == null ? void 0 : e.typography) == null ? void 0 : K.body1) == null ? void 0 : M.fontWeight) ?? 400,
      fontSize: ((Y = (R = e == null ? void 0 : e.typography) == null ? void 0 : R.body1) == null ? void 0 : Y.fontSize) ?? "0.8125rem"
    },
    body2: {
      fontWeight: ((S = (H = e == null ? void 0 : e.typography) == null ? void 0 : H.body2) == null ? void 0 : S.fontWeight) ?? 400,
      fontSize: ((O = (k = e == null ? void 0 : e.typography) == null ? void 0 : k.body2) == null ? void 0 : O.fontSize) ?? "0.75rem"
    },
    subtitle1: {
      fontWeight: ((F = (L = e == null ? void 0 : e.typography) == null ? void 0 : L.subtitle1) == null ? void 0 : F.fontWeight) ?? 600,
      fontSize: ((V = (X = e == null ? void 0 : e.typography) == null ? void 0 : X.subtitle1) == null ? void 0 : V.fontSize) ?? "0.875rem"
    },
    subtitle2: {
      fontWeight: (($ = (ne = e == null ? void 0 : e.typography) == null ? void 0 : ne.subtitle2) == null ? void 0 : $.fontWeight) ?? 600,
      fontSize: ((de = (Q = e == null ? void 0 : e.typography) == null ? void 0 : Q.subtitle2) == null ? void 0 : de.fontSize) ?? "0.75rem"
    },
    overline: {
      lineHeight: ((Ce = (Se = e == null ? void 0 : e.typography) == null ? void 0 : Se.overline) == null ? void 0 : Ce.lineHeight) ?? 1.66
    },
    button: {
      textTransform: "capitalize"
    }
  };
}, ho = "Inter", mo = "13px", yo = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, vo = {
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
}, bo = {
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
}, zu = {
  fontFamily: ho,
  fontSize: mo,
  fontWeight: yo,
  colors: vo,
  typography: bo
}, _u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: vo,
  default: zu,
  fontFamily: ho,
  fontSize: mo,
  fontWeight: yo,
  typography: bo
}, Symbol.toStringTag, { value: "Module" })), xo = "Inter", So = "13px", To = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Eo = {
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
}, wo = {
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
}, $u = {
  fontFamily: xo,
  fontSize: So,
  fontWeight: To,
  colors: Eo,
  typography: wo
}, Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Eo,
  default: $u,
  fontFamily: xo,
  fontSize: So,
  fontWeight: To,
  typography: wo
}, Symbol.toStringTag, { value: "Module" })), Co = "Inter", Mo = "13px", Oo = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, ko = {
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
}, Po = {
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
}, Au = {
  fontFamily: Co,
  fontSize: Mo,
  fontWeight: Oo,
  colors: ko,
  typography: Po
}, Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: ko,
  default: Au,
  fontFamily: Co,
  fontSize: Mo,
  fontWeight: Oo,
  typography: Po
}, Symbol.toStringTag, { value: "Module" })), Io = "Inter", zo = "13px", _o = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, $o = {
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
}, Ro = {
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
}, ju = {
  fontFamily: Io,
  fontSize: zo,
  fontWeight: _o,
  colors: $o,
  typography: Ro
}, Wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: $o,
  default: ju,
  fontFamily: Io,
  fontSize: zo,
  fontWeight: _o,
  typography: Ro
}, Symbol.toStringTag, { value: "Module" })), Ao = "Inter", Lo = "13px", jo = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Wo = {
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
}, Do = {
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
}, Du = {
  fontFamily: Ao,
  fontSize: Lo,
  fontWeight: jo,
  colors: Wo,
  typography: Do
}, Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Wo,
  default: Du,
  fontFamily: Ao,
  fontSize: Lo,
  fontWeight: jo,
  typography: Do
}, Symbol.toStringTag, { value: "Module" })), bi = /* @__PURE__ */ Object.assign({ "./themeJSON/coffee.json": _u, "./themeJSON/default.json": Ru, "./themeJSON/fern.json": Lu, "./themeJSON/plum.json": Wu, "./themeJSON/steel.json": Bu }), fn = {};
for (const e in bi) {
  const r = e.split("/").pop().slice(0, -5);
  fn[r] = bi[e];
}
const Rt = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info"
], nf = ({ color: e, children: t }) => {
  const r = fn[e] || fn.default, n = rs(() => {
    var s, c, a;
    const i = ku(r), o = Md({
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
      customShadows: Pu(i),
      typography: Iu(r),
      border: {
        dark: `1px solid ${(s = i == null ? void 0 : i.border) == null ? void 0 : s.dark}`,
        main: `1px solid ${(c = i == null ? void 0 : i.border) == null ? void 0 : c.main}`,
        light: `1px solid ${(a = i == null ? void 0 : i.border) == null ? void 0 : a.light}`
      }
    });
    return o.components = Cu(o), o;
  }, [r]);
  return /* @__PURE__ */ _.jsx(Zo, { injectFirst: !0, children: /* @__PURE__ */ _.jsxs(go, { theme: n, children: [
    /* @__PURE__ */ _.jsx(Qo, {}),
    t
  ] }) });
}, Nu = (e, t) => {
  const [r, n] = Ie(!1), [i, o] = Ie(window.innerWidth);
  return xi(() => {
    const { current: s } = e;
    s && (() => {
      const a = s.scrollHeight > s.clientHeight;
      n(a), t && t(a);
    })();
  }, [e, i]), Jt(() => {
    const s = ps.debounce(() => {
      o(window.innerWidth);
    }, 500);
    return window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, []), r;
}, of = ({
  children: e,
  sx: t,
  lines: r = 1
}) => {
  const n = Me(null), [i, o] = Ie(!1);
  return Nu(n, (s) => o(s)), /* @__PURE__ */ _.jsx(
    es,
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
      children: /* @__PURE__ */ _.jsx(
        ft,
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
  Ku as C,
  Zu as L,
  ef as S,
  nf as T,
  Ju as a,
  tf as b,
  rf as c,
  of as d,
  Qu as i
};

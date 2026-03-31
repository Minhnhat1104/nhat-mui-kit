import { useTheme as ro, Box as Ht, CircularProgress as is, Typography as Wn, Chip as px, OutlinedInput as hx, Stack as Ei, Select as gx, MenuItem as mx, IconButton as yi, Portal as vx, Backdrop as yx, StyledEngineProvider as bx, CssBaseline as xx, Tooltip as Sx } from "@mui/material";
import * as Ie from "react";
import He, { useState as Ft, useRef as nt, useCallback as os, forwardRef as Ci, useEffect as _r, useMemo as Ld, useImperativeHandle as wx, useLayoutEffect as zl, createContext as kd, useContext as _x } from "react";
import { ChevronUp as Ex, ChevronDown as Cx, X as Dd, ChevronLeft as Tx, ChevronRight as Wd, ZoomIn as Mx, ZoomOut as Ix, Download as Ox, Minus as zx, Check as Ax } from "react-feather";
import { ArrowDropUp as Px, ArrowDropDown as Rx } from "@mui/icons-material";
import { Global as $x, ThemeContext as Nd } from "@emotion/react";
import "@emotion/styled";
var Gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yl = { exports: {} }, ji = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function Lx() {
  if (bf) return ji;
  bf = 1;
  var e = He, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, c, h) {
    var y, m = {}, w = null, d = null;
    h !== void 0 && (w = "" + h), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (d = c.ref);
    for (y in c) o.call(c, y) && !l.hasOwnProperty(y) && (m[y] = c[y]);
    if (p && p.defaultProps) for (y in c = p.defaultProps, c) m[y] === void 0 && (m[y] = c[y]);
    return { $$typeof: n, type: p, key: w, ref: d, props: m, _owner: s.current };
  }
  return ji.Fragment = r, ji.jsx = u, ji.jsxs = u, ji;
}
var Yi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function kx() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), g = Symbol.iterator, S = "@@iterator";
    function I(O) {
      if (O === null || typeof O != "object")
        return null;
      var ne = g && O[g] || O[S];
      return typeof ne == "function" ? ne : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(O) {
      {
        for (var ne = arguments.length, he = new Array(ne > 1 ? ne - 1 : 0), _e = 1; _e < ne; _e++)
          he[_e - 1] = arguments[_e];
        T("error", O, he);
      }
    }
    function T(O, ne, he) {
      {
        var _e = E.ReactDebugCurrentFrame, We = _e.getStackAddendum();
        We !== "" && (ne += "%s", he = he.concat([We]));
        var Fe = he.map(function($e) {
          return String($e);
        });
        Fe.unshift("Warning: " + ne), Function.prototype.apply.call(console[O], console, Fe);
      }
    }
    var R = !1, z = !1, j = !1, W = !1, P = !1, N;
    N = Symbol.for("react.module.reference");
    function k(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === o || O === l || P || O === s || O === h || O === y || W || O === d || R || z || j || typeof O == "object" && O !== null && (O.$$typeof === w || O.$$typeof === m || O.$$typeof === u || O.$$typeof === p || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === N || O.getModuleId !== void 0));
    }
    function B(O, ne, he) {
      var _e = O.displayName;
      if (_e)
        return _e;
      var We = ne.displayName || ne.name || "";
      return We !== "" ? he + "(" + We + ")" : he;
    }
    function b(O) {
      return O.displayName || "Context";
    }
    function V(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case p:
            var ne = O;
            return b(ne) + ".Consumer";
          case u:
            var he = O;
            return b(he._context) + ".Provider";
          case c:
            return B(O, O.render, "ForwardRef");
          case m:
            var _e = O.displayName || null;
            return _e !== null ? _e : V(O.type) || "Memo";
          case w: {
            var We = O, Fe = We._payload, $e = We._init;
            try {
              return V($e(Fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, Q = 0, ae, fe, ee, be, Y, Z, de;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function F() {
      {
        if (Q === 0) {
          ae = console.log, fe = console.info, ee = console.warn, be = console.error, Y = console.group, Z = console.groupCollapsed, de = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Q++;
      }
    }
    function q() {
      {
        if (Q--, Q === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, O, {
              value: ae
            }),
            info: D({}, O, {
              value: fe
            }),
            warn: D({}, O, {
              value: ee
            }),
            error: D({}, O, {
              value: be
            }),
            group: D({}, O, {
              value: Y
            }),
            groupCollapsed: D({}, O, {
              value: Z
            }),
            groupEnd: D({}, O, {
              value: de
            })
          });
        }
        Q < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = E.ReactCurrentDispatcher, le;
    function te(O, ne, he) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (We) {
            var _e = We.stack.trim().match(/\n( *(at )?)/);
            le = _e && _e[1] || "";
          }
        return `
` + le + O;
      }
    }
    var se = !1, ue;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ve();
    }
    function oe(O, ne) {
      if (!O || se)
        return "";
      {
        var he = ue.get(O);
        if (he !== void 0)
          return he;
      }
      var _e;
      se = !0;
      var We = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Fe;
      Fe = X.current, X.current = null, F();
      try {
        if (ne) {
          var $e = function() {
            throw Error();
          };
          if (Object.defineProperty($e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($e, []);
            } catch (Tt) {
              _e = Tt;
            }
            Reflect.construct(O, [], $e);
          } else {
            try {
              $e.call();
            } catch (Tt) {
              _e = Tt;
            }
            O.call($e.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            _e = Tt;
          }
          O();
        }
      } catch (Tt) {
        if (Tt && _e && typeof Tt.stack == "string") {
          for (var Pe = Tt.stack.split(`
`), Rt = _e.stack.split(`
`), ut = Pe.length - 1, dt = Rt.length - 1; ut >= 1 && dt >= 0 && Pe[ut] !== Rt[dt]; )
            dt--;
          for (; ut >= 1 && dt >= 0; ut--, dt--)
            if (Pe[ut] !== Rt[dt]) {
              if (ut !== 1 || dt !== 1)
                do
                  if (ut--, dt--, dt < 0 || Pe[ut] !== Rt[dt]) {
                    var Ut = `
` + Pe[ut].replace(" at new ", " at ");
                    return O.displayName && Ut.includes("<anonymous>") && (Ut = Ut.replace("<anonymous>", O.displayName)), typeof O == "function" && ue.set(O, Ut), Ut;
                  }
                while (ut >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        se = !1, X.current = Fe, q(), Error.prepareStackTrace = We;
      }
      var Ir = O ? O.displayName || O.name : "", Fr = Ir ? te(Ir) : "";
      return typeof O == "function" && ue.set(O, Fr), Fr;
    }
    function Te(O, ne, he) {
      return oe(O, !1);
    }
    function ze(O) {
      var ne = O.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function qe(O, ne, he) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return oe(O, ze(O));
      if (typeof O == "string")
        return te(O);
      switch (O) {
        case h:
          return te("Suspense");
        case y:
          return te("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return Te(O.render);
          case m:
            return qe(O.type, ne, he);
          case w: {
            var _e = O, We = _e._payload, Fe = _e._init;
            try {
              return qe(Fe(We), ne, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xt = Object.prototype.hasOwnProperty, it = {}, Et = E.ReactDebugCurrentFrame;
    function et(O) {
      if (O) {
        var ne = O._owner, he = qe(O.type, O._source, ne ? ne.type : null);
        Et.setExtraStackFrame(he);
      } else
        Et.setExtraStackFrame(null);
    }
    function St(O, ne, he, _e, We) {
      {
        var Fe = Function.call.bind(xt);
        for (var $e in O)
          if (Fe(O, $e)) {
            var Pe = void 0;
            try {
              if (typeof O[$e] != "function") {
                var Rt = Error((_e || "React class") + ": " + he + " type `" + $e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[$e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              Pe = O[$e](ne, $e, _e, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ut) {
              Pe = ut;
            }
            Pe && !(Pe instanceof Error) && (et(We), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", he, $e, typeof Pe), et(null)), Pe instanceof Error && !(Pe.message in it) && (it[Pe.message] = !0, et(We), C("Failed %s type: %s", he, Pe.message), et(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ft(O) {
      return Ze(O);
    }
    function Vt(O) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, he = ne && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return he;
      }
    }
    function Zt(O) {
      try {
        return Ot(O), !1;
      } catch {
        return !0;
      }
    }
    function Ot(O) {
      return "" + O;
    }
    function At(O) {
      if (Zt(O))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vt(O)), Ot(O);
    }
    var Pt = E.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, cr, tt;
    function Be(O) {
      if (xt.call(O, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Wt(O) {
      if (xt.call(O, "key")) {
        var ne = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Ct(O, ne) {
      typeof O.ref == "string" && Pt.current;
    }
    function _t(O, ne) {
      {
        var he = function() {
          cr || (cr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function $r(O, ne) {
      {
        var he = function() {
          tt || (tt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var tn = function(O, ne, he, _e, We, Fe, $e) {
      var Pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: O,
        key: ne,
        ref: he,
        props: $e,
        // Record the component responsible for creating this element.
        _owner: Fe
      };
      return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.defineProperty(Pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: We
      }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
    };
    function rn(O, ne, he, _e, We) {
      {
        var Fe, $e = {}, Pe = null, Rt = null;
        he !== void 0 && (At(he), Pe = "" + he), Wt(ne) && (At(ne.key), Pe = "" + ne.key), Be(ne) && (Rt = ne.ref, Ct(ne, We));
        for (Fe in ne)
          xt.call(ne, Fe) && !wt.hasOwnProperty(Fe) && ($e[Fe] = ne[Fe]);
        if (O && O.defaultProps) {
          var ut = O.defaultProps;
          for (Fe in ut)
            $e[Fe] === void 0 && ($e[Fe] = ut[Fe]);
        }
        if (Pe || Rt) {
          var dt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Pe && _t($e, dt), Rt && $r($e, dt);
        }
        return tn(O, Pe, Rt, We, _e, Pt.current, $e);
      }
    }
    var nn = E.ReactCurrentOwner, Sn = E.ReactDebugCurrentFrame;
    function Mr(O) {
      if (O) {
        var ne = O._owner, he = qe(O.type, O._source, ne ? ne.type : null);
        Sn.setExtraStackFrame(he);
      } else
        Sn.setExtraStackFrame(null);
    }
    var Nr;
    Nr = !1;
    function Br(O) {
      return typeof O == "object" && O !== null && O.$$typeof === n;
    }
    function wn() {
      {
        if (nn.current) {
          var O = V(nn.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Fn(O) {
      return "";
    }
    var _n = {};
    function Vn(O) {
      {
        var ne = wn();
        if (!ne) {
          var he = typeof O == "string" ? O : O.displayName || O.name;
          he && (ne = `

Check the top-level render call using <` + he + ">.");
        }
        return ne;
      }
    }
    function on(O, ne) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var he = Vn(ne);
        if (_n[he])
          return;
        _n[he] = !0;
        var _e = "";
        O && O._owner && O._owner !== nn.current && (_e = " It was passed a child from " + V(O._owner.type) + "."), Mr(O), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, _e), Mr(null);
      }
    }
    function En(O, ne) {
      {
        if (typeof O != "object")
          return;
        if (ft(O))
          for (var he = 0; he < O.length; he++) {
            var _e = O[he];
            Br(_e) && on(_e, ne);
          }
        else if (Br(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var We = I(O);
          if (typeof We == "function" && We !== O.entries)
            for (var Fe = We.call(O), $e; !($e = Fe.next()).done; )
              Br($e.value) && on($e.value, ne);
        }
      }
    }
    function Gn(O) {
      {
        var ne = O.type;
        if (ne == null || typeof ne == "string")
          return;
        var he;
        if (typeof ne == "function")
          he = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === m))
          he = ne.propTypes;
        else
          return;
        if (he) {
          var _e = V(ne);
          St(he, O.props, "prop", _e, O);
        } else if (ne.PropTypes !== void 0 && !Nr) {
          Nr = !0;
          var We = V(ne);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", We || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jn(O) {
      {
        for (var ne = Object.keys(O.props), he = 0; he < ne.length; he++) {
          var _e = ne[he];
          if (_e !== "children" && _e !== "key") {
            Mr(O), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), Mr(null);
            break;
          }
        }
        O.ref !== null && (Mr(O), C("Invalid attribute `ref` supplied to `React.Fragment`."), Mr(null));
      }
    }
    var Yn = {};
    function ao(O, ne, he, _e, We, Fe) {
      {
        var $e = k(O);
        if (!$e) {
          var Pe = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = Fn();
          Rt ? Pe += Rt : Pe += wn();
          var ut;
          O === null ? ut = "null" : ft(O) ? ut = "array" : O !== void 0 && O.$$typeof === n ? (ut = "<" + (V(O.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof O, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, Pe);
        }
        var dt = rn(O, ne, he, We, Fe);
        if (dt == null)
          return dt;
        if ($e) {
          var Ut = ne.children;
          if (Ut !== void 0)
            if (_e)
              if (ft(Ut)) {
                for (var Ir = 0; Ir < Ut.length; Ir++)
                  En(Ut[Ir], O);
                Object.freeze && Object.freeze(Ut);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              En(Ut, O);
        }
        if (xt.call(ne, "key")) {
          var Fr = V(O), Tt = Object.keys(ne).filter(function($s) {
            return $s !== "key";
          }), Mi = Tt.length > 0 ? "{key: someKey, " + Tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yn[Fr + Mi]) {
            var Rs = Tt.length > 0 ? "{" + Tt.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mi, Fr, Rs, Fr), Yn[Fr + Mi] = !0;
          }
        }
        return O === o ? jn(dt) : Gn(dt), dt;
      }
    }
    function Ti(O, ne, he) {
      return ao(O, ne, he, !0);
    }
    function zs(O, ne, he) {
      return ao(O, ne, he, !1);
    }
    var As = zs, Ps = Ti;
    Yi.Fragment = o, Yi.jsx = As, Yi.jsxs = Ps;
  }()), Yi;
}
process.env.NODE_ENV === "production" ? yl.exports = Lx() : yl.exports = kx();
var ie = yl.exports;
const HC = (e) => {
  const { sx: n, value: r, variant: o = "determinate" } = e, s = ro();
  return /* @__PURE__ */ ie.jsxs(Ht, { sx: { position: "relative", width: "fit-content", ...n, height: 60 }, children: [
    /* @__PURE__ */ ie.jsx(
      is,
      {
        variant: "determinate",
        size: 60,
        sx: {
          color: s.palette.background.softGrey,
          ...s.applyStyles("dark", {
            color: s.palette.background.softGrey
          })
        },
        value: 100
      }
    ),
    /* @__PURE__ */ ie.jsx(
      is,
      {
        size: 60,
        variant: o,
        sx: {
          position: "absolute",
          left: 0
        },
        value: r
      }
    ),
    /* @__PURE__ */ ie.jsx(
      Wn,
      {
        variant: "caption",
        component: "div",
        sx: { color: "text.secondary", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        children: `${Math.round(r)}%`
      }
    )
  ] });
}, Dx = "groupware-table-counter", UC = (e) => {
  const { label: n, color: r = "primary", size: o = "small", fontSize: s } = e, l = ro();
  return /* @__PURE__ */ ie.jsx(
    px,
    {
      className: Dx,
      label: n,
      size: o,
      sx: {
        p: 0,
        borderRadius: 99,
        height: "unset",
        flexShrink: 0,
        transition: "background-color 0.15s ease-in-out, color 0.15s ease-in-out",
        backgroundColor: r === "grey" ? l.palette.background.softGrey : "primary.lighter",
        color: r === "grey" ? l.palette.grey.main : "primary.main",
        "& .MuiChip-label": { py: 0.25, px: 0.875, fontSize: s }
      }
    }
  );
}, Sf = {
  small: 28,
  medium: 40
}, XC = (e) => {
  const { sx: n, fullHeight: r = !1, size: o = "medium", label: s } = e;
  return /* @__PURE__ */ ie.jsxs(
    Ht,
    {
      alignItems: "center",
      justifyContent: "center",
      sx: {
        height: r ? "100%" : 350,
        ...n
      },
      children: [
        /* @__PURE__ */ ie.jsx(
          is,
          {
            size: o,
            style: { width: Sf[o], height: Sf[o] }
          }
        ),
        s && /* @__PURE__ */ ie.jsx(
          Wn,
          {
            noWrap: !0,
            color: "text.secondary",
            sx: { mt: 2, fontSize: o === "small" ? 12 : 13 },
            children: s
          }
        )
      ]
    }
  );
}, wf = (e) => {
  const {
    onLongPress: n,
    onClick: r,
    onClear: o,
    options: { shouldPreventDefault: s, delay: l, clearOnMouseLeave: u } = {
      shouldPreventDefault: !0,
      delay: 300,
      clearOnMouseLeave: !1
    }
  } = e, [p, c] = Ft(!1), h = nt(), y = nt(), m = os(
    (d) => {
      s && d.target && (d.target.addEventListener("touchend", _f, {
        passive: !1
      }), y.current = d.target), h.current = setTimeout(() => {
        n(d), c(!0);
      }, l);
    },
    [n, l, s]
  ), w = os(
    (d, g = !0) => {
      h.current && clearTimeout(h.current), g && !p && r(), o(), c(!1), s && y.current && y.current.removeEventListener("touchend", _f);
    },
    [s, r, p]
  );
  return {
    onMouseDown: (d) => m(d),
    onTouchStart: (d) => m(d),
    onMouseUp: (d) => w(d),
    onMouseLeave: (d) => w(d, !1),
    onTouchEnd: (d) => w(d)
  };
}, _f = (e) => {
  if (!("touches" in e)) return;
  const n = e == null ? void 0 : e.touches;
  (n == null ? void 0 : n.length) < 2 && e.preventDefault && e.preventDefault();
}, Wx = (e, n) => {
  const {
    value: r,
    onChange: o,
    min: s = 0,
    max: l = 999999999999999,
    endAdornment: u,
    sx: p
  } = e, c = ro(), h = Ie.useRef({
    interval: null,
    value: 0
  }), [y, m] = Ft(r);
  Ie.useEffect(() => {
    m(r && typeof r == "number" ? r : 0);
  }, [r]);
  const w = (E) => {
    o(E), m(E);
  }, d = (E) => {
    m((C) => {
      const T = Number(C);
      return console.log("🚀 ~ nVal:", T), T && !isNaN(T) || T === 0 ? l && T < l ? (h.current.value = T + 1, E && E(T + 1), T + 1) : (h.current.value = l, E && E(l), l) : (h.current.value = 1, E && E(1), 1);
    });
  }, g = (E) => {
    m((C) => {
      const T = Number(C);
      return T && !isNaN(T) || T === 0 && s < T ? (h.current.value = T - 1, E && E(T - 1), T - 1) : (h.current.value = s, E && E(s), s);
    });
  }, S = wf({
    onClear: () => {
      var E, C, T;
      (E = h.current) != null && E.interval && (clearInterval((C = h.current) == null ? void 0 : C.interval), w((T = h.current) == null ? void 0 : T.value), h.current.interval = null);
    },
    onClick: () => d((E) => o(E)),
    onLongPress: () => {
      d(), h.current.interval = setInterval(d, 50);
    }
  }), I = wf({
    onClear: () => {
      var E, C, T;
      (E = h.current) != null && E.interval && (clearInterval((C = h.current) == null ? void 0 : C.interval), w((T = h.current) == null ? void 0 : T.value), h.current.interval = null);
    },
    onClick: () => g((E) => o(E)),
    onLongPress: () => {
      g(), h.current.interval = setInterval(g, 50);
    }
  });
  return /* @__PURE__ */ ie.jsx(
    hx,
    {
      value: y,
      onChange: (E) => {
        var T;
        const C = Number((T = E == null ? void 0 : E.target) == null ? void 0 : T.value);
        (C && !isNaN(C) || C === 0) && (s > C ? w(s) : l && C > l || w(C));
      },
      endAdornment: /* @__PURE__ */ ie.jsxs(Ei, { direction: "row", alignItems: "center", spacing: 1, children: [
        u,
        /* @__PURE__ */ ie.jsxs(Ei, { children: [
          /* @__PURE__ */ ie.jsx(
            Ht,
            {
              ...S,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                background: c.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: c.border.light,
                borderBottom: "none",
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: c.palette.primary.main,
                  borderColor: c.palette.primary.main
                }
              },
              children: /* @__PURE__ */ ie.jsx(Ex, { size: 12, style: { margin: "auto", flexShrink: 0 } })
            }
          ),
          /* @__PURE__ */ ie.jsx(
            Ht,
            {
              ...I,
              component: "button",
              type: "button",
              sx: {
                width: 16,
                height: 16,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                background: c.palette.background.softGrey,
                transition: "border-color,background 0.15s ease-in-out",
                display: "flex",
                border: c.border.light,
                cursor: "pointer",
                p: 0,
                "&:hover": {
                  color: "#fff",
                  background: c.palette.primary.main,
                  borderColor: c.palette.primary.main
                }
              },
              children: /* @__PURE__ */ ie.jsx(
                Cx,
                {
                  size: 12,
                  style: { margin: "auto", flexShrink: 0 }
                }
              )
            }
          )
        ] })
      ] }),
      ref: n,
      sx: { ...p, pr: 1.25 }
    }
  );
}, qC = Ci(Wx), KC = (e) => {
  const {
    value: n,
    onChange: r,
    options: o,
    size: s,
    sx: l,
    showIcon: u = !1,
    disablePortal: p = !1,
    useClear: c = !1,
    placeholder: h = "Select an item",
    fieldLabel: y = "label",
    fieldValue: m = "value",
    MenuProps: w = {},
    isLoading: d = !1,
    disabled: g = !1,
    fullWidth: S = !0,
    variant: I = "outlined",
    closeOnSelect: E = !1
  } = e, C = ro(), [T, R] = Ft(""), [z, j] = Ft(!1);
  _r(() => {
    R(n ? n == null ? void 0 : n[m] : "");
  }, [n]);
  const W = (N) => {
    R(N);
    const k = o.find((B) => (B == null ? void 0 : B[m]) === N);
    r && r(k), E && j(!1);
  }, P = (N) => {
    N == null || N.stopPropagation(), R(""), r && r(null);
  };
  return /* @__PURE__ */ ie.jsx(
    gx,
    {
      variant: I,
      disabled: g,
      fullWidth: S,
      displayEmpty: !0,
      inputProps: { "aria-label": "select" },
      size: s,
      value: T,
      open: z,
      onOpen: () => {
        j(!0);
      },
      onClose: () => {
        j(!1);
      },
      MenuProps: {
        disablePortal: p,
        // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
        PaperProps: {
          style: {
            maxHeight: "30vh"
          }
        },
        ...w
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
        ...l,
        "& .MuiSelect-iconOutlined": {
          display: c && T || d ? "none" : ""
        },
        "& .MuiSelect-icon": { display: "none" },
        "&.Mui-focused .MuiIconButton-root": { color: "primary.main" }
      },
      renderValue: (N) => {
        const k = o.find((B) => (B == null ? void 0 : B[m]) === N);
        return N || N === 0 ? /* @__PURE__ */ ie.jsxs(
          Ht,
          {
            sx: {
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              alignItems: "center"
            },
            children: [
              u && (k == null ? void 0 : k.icon) && (typeof (k == null ? void 0 : k.icon) == "function" || typeof (k == null ? void 0 : k.icon) == "object") && /* @__PURE__ */ ie.jsx(k.icon, { ...k == null ? void 0 : k.iconProps }),
              /* @__PURE__ */ ie.jsx(
                Wn,
                {
                  sx: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" },
                  children: k == null ? void 0 : k[y]
                }
              ),
              u && (k == null ? void 0 : k.endIcon) && (typeof (k == null ? void 0 : k.endIcon) == "function" || typeof (k == null ? void 0 : k.endIcon) == "object") && /* @__PURE__ */ ie.jsx(k.endIcon, { ...k == null ? void 0 : k.endIconProps })
            ]
          }
        ) : /* @__PURE__ */ ie.jsx(
          Wn,
          {
            color: "text.secondary",
            variant: "h5",
            fontWeight: C.typography.fontWeightRegular,
            children: "placeholder"
          }
        );
      },
      endAdornment: d ? /* @__PURE__ */ ie.jsx(is, { size: 18, sx: { mr: 0.5 } }) : /* @__PURE__ */ ie.jsxs(
        Ei,
        {
          direction: "row",
          alignItems: "center",
          spacing: 0.5,
          onClick: g ? void 0 : () => j((N) => !N),
          sx: { cursor: g ? void 0 : "pointer" },
          children: [
            c && T && /* @__PURE__ */ ie.jsx(
              yi,
              {
                size: "small",
                sx: {
                  visibility: T ? "visible" : "hidden",
                  color: C.palette.grey.main
                },
                onClick: P,
                variant: "light",
                color: "secondary",
                children: /* @__PURE__ */ ie.jsx(Dd, {})
              }
            ),
            z ? /* @__PURE__ */ ie.jsx(Px, { sx: { color: C.palette.grey.main } }) : /* @__PURE__ */ ie.jsx(Rx, { sx: { color: C.palette.grey.main } })
          ]
        }
      ),
      onChange: (N) => {
        const k = N.target.value;
        W(k);
      },
      children: o == null ? void 0 : o.filter(
        (N) => (N == null ? void 0 : N.isShow) || !(N != null && N.hasOwnProperty("isShow"))
      ).map((N, k) => {
        const B = N == null ? void 0 : N.icon, b = N == null ? void 0 : N.endIcon;
        return /* @__PURE__ */ ie.jsxs(
          mx,
          {
            disabled: (N == null ? void 0 : N.disabled) || !1,
            value: N == null ? void 0 : N[m],
            sx: { display: "flex", alignItems: "center" },
            children: [
              u && B && (typeof B == "function" || typeof B == "object") && /* @__PURE__ */ ie.jsx(B, { ...N == null ? void 0 : N.iconProps }),
              /* @__PURE__ */ ie.jsx(Wn, { children: N == null ? void 0 : N[y] }),
              u && b && (typeof b == "function" || typeof b == "object") && /* @__PURE__ */ ie.jsx(b, { ...N == null ? void 0 : N.endIconProps })
            ]
          },
          k
        );
      })
    }
  );
};
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, bi.apply(null, arguments);
}
var qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ef, Cf = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ya, Tf, Mf, Nx = (Ef || (Ef = 1, Ya = Cf, function() {
  var e = {}.hasOwnProperty;
  function n() {
    for (var s = "", l = 0; l < arguments.length; l++) {
      var u = arguments[l];
      u && (s = o(s, r(u)));
    }
    return s;
  }
  function r(s) {
    if (typeof s == "string" || typeof s == "number") return s;
    if (typeof s != "object") return "";
    if (Array.isArray(s)) return n.apply(null, s);
    if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) return s.toString();
    var l = "";
    for (var u in s) e.call(s, u) && s[u] && (l = o(l, u));
    return l;
  }
  function o(s, l) {
    return l ? s ? s + " " + l : s + l : s;
  }
  Ya.exports ? (n.default = n, Ya.exports = n) : window.classNames = n;
}()), Cf.exports), bl = no(Nx), If, Of, Bx = (Mf || (Mf = 1, Tf = function e(n, r) {
  if (n === r) return !0;
  if (n && r && typeof n == "object" && typeof r == "object") {
    if (n.constructor !== r.constructor) return !1;
    var o, s, l;
    if (Array.isArray(n)) {
      if ((o = n.length) != r.length) return !1;
      for (s = o; s-- !== 0; ) if (!e(n[s], r[s])) return !1;
      return !0;
    }
    if (n instanceof Map && r instanceof Map) {
      if (n.size !== r.size) return !1;
      for (s of n.entries()) if (!r.has(s[0])) return !1;
      for (s of n.entries()) if (!e(s[1], r.get(s[0]))) return !1;
      return !0;
    }
    if (n instanceof Set && r instanceof Set) {
      if (n.size !== r.size) return !1;
      for (s of n.entries()) if (!r.has(s[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(n) && ArrayBuffer.isView(r)) {
      if ((o = n.length) != r.length) return !1;
      for (s = o; s-- !== 0; ) if (n[s] !== r[s]) return !1;
      return !0;
    }
    if (n.constructor === RegExp) return n.source === r.source && n.flags === r.flags;
    if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === r.valueOf();
    if (n.toString !== Object.prototype.toString) return n.toString() === r.toString();
    if ((o = (l = Object.keys(n)).length) !== Object.keys(r).length) return !1;
    for (s = o; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, l[s])) return !1;
    for (s = o; s-- !== 0; ) {
      var u = l[s];
      if (!e(n[u], r[u])) return !1;
    }
    return !0;
  }
  return n != n && r != r;
}), Tf), Fx = no(Bx), zf, Af, Rr = no(function() {
  if (Of) return If;
  Of = 1;
  var e = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = Object.prototype.toString;
  function u(c) {
    var h = typeof c;
    return !!c && (h == "object" || h == "function");
  }
  function p(c) {
    if (typeof c == "number") return c;
    if (function(m) {
      return typeof m == "symbol" || /* @__PURE__ */ function(w) {
        return !!w && typeof w == "object";
      }(m) && l.call(m) == "[object Symbol]";
    }(c)) return NaN;
    if (u(c)) {
      var h = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = u(h) ? h + "" : h;
    }
    if (typeof c != "string") return c === 0 ? c : +c;
    c = c.replace(e, "");
    var y = r.test(c);
    return y || o.test(c) ? s(c.slice(2), y ? 2 : 8) : n.test(c) ? NaN : +c;
  }
  return If = function(c, h, y) {
    return y === void 0 && (y = h, h = void 0), y !== void 0 && (y = (y = p(y)) == y ? y : 0), h !== void 0 && (h = (h = p(h)) == h ? h : 0), function(m, w, d) {
      return m == m && (d !== void 0 && (m = m <= d ? m : d), w !== void 0 && (m = m >= w ? m : w)), m;
    }(p(c), h, y);
  };
}()), Vx = no(function() {
  if (Af) return zf;
  Af = 1;
  var e = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = typeof qo == "object" && qo && qo.Object === Object && qo, u = typeof self == "object" && self && self.Object === Object && self, p = l || u || Function("return this")(), c = Object.prototype.toString, h = Math.max, y = Math.min, m = function() {
    return p.Date.now();
  };
  function w(g) {
    var S = typeof g;
    return !!g && (S == "object" || S == "function");
  }
  function d(g) {
    if (typeof g == "number") return g;
    if (function(E) {
      return typeof E == "symbol" || /* @__PURE__ */ function(C) {
        return !!C && typeof C == "object";
      }(E) && c.call(E) == "[object Symbol]";
    }(g)) return NaN;
    if (w(g)) {
      var S = typeof g.valueOf == "function" ? g.valueOf() : g;
      g = w(S) ? S + "" : S;
    }
    if (typeof g != "string") return g === 0 ? g : +g;
    g = g.replace(e, "");
    var I = r.test(g);
    return I || o.test(g) ? s(g.slice(2), I ? 2 : 8) : n.test(g) ? NaN : +g;
  }
  return zf = function(g, S, I) {
    var E, C, T, R, z, j, W = 0, P = !1, N = !1, k = !0;
    if (typeof g != "function") throw new TypeError("Expected a function");
    function B(ae) {
      var fe = E, ee = C;
      return E = C = void 0, W = ae, R = g.apply(ee, fe);
    }
    function b(ae) {
      var fe = ae - j;
      return j === void 0 || fe >= S || fe < 0 || N && ae - W >= T;
    }
    function V() {
      var ae = m();
      if (b(ae)) return D(ae);
      z = setTimeout(V, function(fe) {
        var ee = S - (fe - j);
        return N ? y(ee, T - (fe - W)) : ee;
      }(ae));
    }
    function D(ae) {
      return z = void 0, k && E ? B(ae) : (E = C = void 0, R);
    }
    function Q() {
      var ae = m(), fe = b(ae);
      if (E = arguments, C = this, j = ae, fe) {
        if (z === void 0) return function(ee) {
          return W = ee, z = setTimeout(V, S), P ? B(ee) : R;
        }(j);
        if (N) return z = setTimeout(V, S), B(j);
      }
      return z === void 0 && (z = setTimeout(V, S)), R;
    }
    return S = d(S) || 0, w(I) && (P = !!I.leading, T = (N = "maxWait" in I) ? h(d(I.maxWait) || 0, S) : T, k = "trailing" in I ? !!I.trailing : k), Q.cancel = function() {
      z !== void 0 && clearTimeout(z), W = 0, E = j = C = z = void 0;
    }, Q.flush = function() {
      return z === void 0 ? R : D(m());
    }, Q;
  };
}()), Pf = {
  width: void 0,
  height: void 0
};
function Gx(e) {
  const {
    ref: n,
    box: r = "content-box"
  } = e, [{
    width: o,
    height: s
  }, l] = Ft(Pf), u = function() {
    const h = nt(!1);
    return _r(() => (h.current = !0, () => {
      h.current = !1;
    }), []), os(() => h.current, []);
  }(), p = nt(bi({}, Pf)), c = nt(void 0);
  return c.current = e.onResize, _r(() => {
    if (!n.current || typeof window > "u" || !("ResizeObserver" in window)) return;
    const h = new ResizeObserver(([y]) => {
      const m = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", w = Rf(y, m, "inlineSize"), d = Rf(y, m, "blockSize");
      if (p.current.width !== w || p.current.height !== d) {
        const g = {
          width: w,
          height: d
        };
        p.current.width = w, p.current.height = d, c.current ? c.current(g) : u() && l(g);
      }
    });
    return h.observe(n.current, {
      box: r
    }), () => {
      h.disconnect();
    };
  }, [r, n, u]), {
    width: o,
    height: s
  };
}
function Rf(e, n, r) {
  return e[n] ? Array.isArray(e[n]) ? e[n][0][r] : e[n][r] : n === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
var jx = "allotment-module_splitView__L-yRc", Yx = "allotment-module_sashContainer__fzwJF", Hx = "allotment-module_splitViewContainer__rQnVa", Fd = "allotment-module_splitViewView__MGZ6O", Ux = "allotment-module_vertical__WSwwa", Xx = "allotment-module_horizontal__7doS8", qx = "allotment-module_separatorBorder__x-rDS";
let Hi, Vd = !1, Gd = !1;
typeof navigator == "object" && (Hi = navigator.userAgent, Gd = Hi.indexOf("Macintosh") >= 0, Vd = (Hi.indexOf("Macintosh") >= 0 || Hi.indexOf("iPad") >= 0 || Hi.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const jd = Vd, Kx = Gd, $f = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zl : _r;
class Jx {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(n) {
    this._size = n;
  }
}
function Ko(e, n) {
  const r = e.length, o = r - n.length;
  return o >= 0 && e.slice(o, r) === n;
}
var Lf, kf = {
  exports: {}
}, Zx = (Lf || (Lf = 1, function(e) {
  var n = Object.prototype.hasOwnProperty, r = "~";
  function o() {
  }
  function s(c, h, y) {
    this.fn = c, this.context = h, this.once = y || !1;
  }
  function l(c, h, y, m, w) {
    if (typeof y != "function") throw new TypeError("The listener must be a function");
    var d = new s(y, m || c, w), g = r ? r + h : h;
    return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], d] : c._events[g].push(d) : (c._events[g] = d, c._eventsCount++), c;
  }
  function u(c, h) {
    --c._eventsCount === 0 ? c._events = new o() : delete c._events[h];
  }
  function p() {
    this._events = new o(), this._eventsCount = 0;
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (r = !1)), p.prototype.eventNames = function() {
    var c, h, y = [];
    if (this._eventsCount === 0) return y;
    for (h in c = this._events) n.call(c, h) && y.push(r ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(c)) : y;
  }, p.prototype.listeners = function(c) {
    var h = r ? r + c : c, y = this._events[h];
    if (!y) return [];
    if (y.fn) return [y.fn];
    for (var m = 0, w = y.length, d = new Array(w); m < w; m++) d[m] = y[m].fn;
    return d;
  }, p.prototype.listenerCount = function(c) {
    var h = r ? r + c : c, y = this._events[h];
    return y ? y.fn ? 1 : y.length : 0;
  }, p.prototype.emit = function(c, h, y, m, w, d) {
    var g = r ? r + c : c;
    if (!this._events[g]) return !1;
    var S, I, E = this._events[g], C = arguments.length;
    if (E.fn) {
      switch (E.once && this.removeListener(c, E.fn, void 0, !0), C) {
        case 1:
          return E.fn.call(E.context), !0;
        case 2:
          return E.fn.call(E.context, h), !0;
        case 3:
          return E.fn.call(E.context, h, y), !0;
        case 4:
          return E.fn.call(E.context, h, y, m), !0;
        case 5:
          return E.fn.call(E.context, h, y, m, w), !0;
        case 6:
          return E.fn.call(E.context, h, y, m, w, d), !0;
      }
      for (I = 1, S = new Array(C - 1); I < C; I++) S[I - 1] = arguments[I];
      E.fn.apply(E.context, S);
    } else {
      var T, R = E.length;
      for (I = 0; I < R; I++) switch (E[I].once && this.removeListener(c, E[I].fn, void 0, !0), C) {
        case 1:
          E[I].fn.call(E[I].context);
          break;
        case 2:
          E[I].fn.call(E[I].context, h);
          break;
        case 3:
          E[I].fn.call(E[I].context, h, y);
          break;
        case 4:
          E[I].fn.call(E[I].context, h, y, m);
          break;
        default:
          if (!S) for (T = 1, S = new Array(C - 1); T < C; T++) S[T - 1] = arguments[T];
          E[I].fn.apply(E[I].context, S);
      }
    }
    return !0;
  }, p.prototype.on = function(c, h, y) {
    return l(this, c, h, y, !1);
  }, p.prototype.once = function(c, h, y) {
    return l(this, c, h, y, !0);
  }, p.prototype.removeListener = function(c, h, y, m) {
    var w = r ? r + c : c;
    if (!this._events[w]) return this;
    if (!h) return u(this, w), this;
    var d = this._events[w];
    if (d.fn) d.fn !== h || m && !d.once || y && d.context !== y || u(this, w);
    else {
      for (var g = 0, S = [], I = d.length; g < I; g++) (d[g].fn !== h || m && !d[g].once || y && d[g].context !== y) && S.push(d[g]);
      S.length ? this._events[w] = S.length === 1 ? S[0] : S : u(this, w);
    }
    return this;
  }, p.prototype.removeAllListeners = function(c) {
    var h;
    return c ? (h = r ? r + c : c, this._events[h] && u(this, h)) : (this._events = new o(), this._eventsCount = 0), this;
  }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = r, p.EventEmitter = p, e.exports = p;
}(kf)), kf.exports), Al = no(Zx);
function Df(e, n) {
  const r = e.indexOf(n);
  r > -1 && (e.splice(r, 1), e.unshift(n));
}
function Ha(e, n) {
  const r = e.indexOf(n);
  r > -1 && (e.splice(r, 1), e.push(n));
}
function br(e, n, r = 1) {
  const o = Math.max(0, Math.ceil((n - e) / r)), s = new Array(o);
  let l = -1;
  for (; ++l < o; ) s[l] = e + l * r;
  return s;
}
var Qx = "sash-module_sash__K-9lB", eS = "sash-module_disabled__Hm-wx", tS = "sash-module_mac__Jf6OJ", Wf = "sash-module_vertical__pB-rs", rS = "sash-module_minimum__-UKxp", nS = "sash-module_maximum__TCWxD", Nf = "sash-module_horizontal__kFbiw", Ua = "sash-module_hover__80W6I", Xa = "sash-module_active__bJspD";
let Sr = function(e) {
  return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
}({}), sr = function(e) {
  return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
}({}), Yd = jd ? 20 : 8;
const Hd = new Al();
class Bf extends Al {
  get state() {
    return this._state;
  }
  set state(n) {
    this._state !== n && (this.el.classList.toggle(eS, n === sr.Disabled), this.el.classList.toggle("sash-disabled", n === sr.Disabled), this.el.classList.toggle(rS, n === sr.Minimum), this.el.classList.toggle("sash-minimum", n === sr.Minimum), this.el.classList.toggle(nS, n === sr.Maximum), this.el.classList.toggle("sash-maximum", n === sr.Maximum), this._state = n, this.emit("enablementChange", n));
  }
  constructor(n, r, o) {
    var s;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = Vx((l) => l.classList.add("sash-hover", Ua), this.hoverDelay), this._state = sr.Enabled, this.onPointerStart = (l) => {
      const u = l.pageX, p = l.pageY, c = {
        startX: u,
        currentX: u,
        startY: p,
        currentY: p
      };
      this.el.classList.add("sash-active", Xa), this.emit("start", c), this.el.setPointerCapture(l.pointerId);
      const h = (m) => {
        m.preventDefault();
        const w = {
          startX: u,
          currentX: m.pageX,
          startY: p,
          currentY: m.pageY
        };
        this.emit("change", w);
      }, y = (m) => {
        m.preventDefault(), this.el.classList.remove("sash-active", Xa), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(m.pointerId), window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", y);
      };
      window.addEventListener("pointermove", h), window.addEventListener("pointerup", y);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(Xa) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", Ua)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", Ua);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", Qx), this.el.dataset.testid = "sash", n.append(this.el), Kx && this.el.classList.add("sash-mac", tS), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof o.size == "number" ? (this.size = o.size, o.orientation === Sr.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = Yd, Hd.on("onDidChangeGlobalSize", (l) => {
      this.size = l, this.layout();
    })), this.layoutProvider = r, this.orientation = (s = o.orientation) != null ? s : Sr.Vertical, this.orientation === Sr.Horizontal ? (this.el.classList.add("sash-horizontal", Nf), this.el.classList.remove("sash-vertical", Wf)) : (this.el.classList.remove("sash-horizontal", Nf), this.el.classList.add("sash-vertical", Wf)), this.layout();
  }
  layout() {
    if (this.orientation === Sr.Vertical) {
      const n = this.layoutProvider;
      this.el.style.left = n.getVerticalSashLeft(this) - this.size / 2 + "px", n.getVerticalSashTop && (this.el.style.top = n.getVerticalSashTop(this) + "px"), n.getVerticalSashHeight && (this.el.style.height = n.getVerticalSashHeight(this) + "px");
    } else {
      const n = this.layoutProvider;
      this.el.style.top = n.getHorizontalSashTop(this) - this.size / 2 + "px", n.getHorizontalSashLeft && (this.el.style.left = n.getHorizontalSashLeft(this) + "px"), n.getHorizontalSashWidth && (this.el.style.width = n.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let ss;
var qa;
(qa = ss || (ss = {})).Distribute = {
  type: "distribute"
}, qa.Split = function(e) {
  return {
    type: "split",
    index: e
  };
}, qa.Invisible = function(e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
let xr = function(e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class Ud {
  constructor(n, r, o) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = n, this.view = r, this.container.classList.add("split-view-view", Fd), this.container.dataset.testid = "split-view-view", typeof o == "number" ? (this._size = o, this._cachedVisibleSize = void 0, n.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = o.cachedVisibleSize);
  }
  set size(n) {
    this._size = n;
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
  setVisible(n, r) {
    n !== this.visible && (n ? (this.size = Rr(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof r == "number" ? r : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", n), this.view.setVisible && this.view.setVisible(n));
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
  set enabled(n) {
    this.container.style.pointerEvents = n ? "" : "none";
  }
  layout(n) {
    this.layoutContainer(n), this.view.layout(this.size, n);
  }
}
class iS extends Ud {
  layoutContainer(n) {
    this.container.style.left = `${n}px`, this.container.style.width = `${this.size}px`;
  }
}
class oS extends Ud {
  layoutContainer(n) {
    this.container.style.top = `${n}px`, this.container.style.height = `${this.size}px`;
  }
}
class sS extends Al {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(n) {
    this._startSnappingEnabled !== n && (this._startSnappingEnabled = n, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(n) {
    this._endSnappingEnabled !== n && (this._endSnappingEnabled = n, this.updateSashEnablement());
  }
  constructor(n, r = {}, o, s, l) {
    var u, p;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.onSashEnd = (c) => {
      this.emit("sashchange", c), this.saveProportions();
      for (const h of this.viewItems) h.enabled = !0;
    }, this.orientation = (u = r.orientation) != null ? u : Sr.Vertical, this.proportionalLayout = (p = r.proportionalLayout) != null ? p : !0, this.getSashOrthogonalSize = r.getSashOrthogonalSize, o && (this.onDidChange = o), s && (this.onDidDragStart = s), l && (this.onDidDragEnd = l), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", Yx), n.prepend(this.sashContainer), r.descriptor) {
      this.size = r.descriptor.size;
      for (const [c, h] of r.descriptor.views.entries()) {
        const y = h.size, m = h.container, w = h.view;
        this.addView(m, w, y, c, !0);
      }
      this.contentSize = this.viewItems.reduce((c, h) => c + h.size, 0), this.saveProportions();
    }
  }
  addView(n, r, o, s = this.viewItems.length, l) {
    let u;
    u = typeof o == "number" ? o : o.type === "split" ? this.getViewSize(o.index) / 2 : o.type === "invisible" ? {
      cachedVisibleSize: o.cachedVisibleSize
    } : r.minimumSize;
    const p = this.orientation === Sr.Vertical ? new oS(n, r, u) : new iS(n, r, u);
    if (this.viewItems.splice(s, 0, p), this.viewItems.length > 1) {
      const c = this.orientation === Sr.Vertical ? new Bf(this.sashContainer, {
        getHorizontalSashTop: (m) => this.getSashPosition(m),
        getHorizontalSashWidth: this.getSashOrthogonalSize
      }, {
        orientation: Sr.Horizontal
      }) : new Bf(this.sashContainer, {
        getVerticalSashLeft: (m) => this.getSashPosition(m),
        getVerticalSashHeight: this.getSashOrthogonalSize
      }, {
        orientation: Sr.Vertical
      }), h = this.orientation === Sr.Vertical ? (m) => ({
        sash: c,
        start: m.startY,
        current: m.currentY
      }) : (m) => ({
        sash: c,
        start: m.startX,
        current: m.currentX
      });
      c.on("start", (m) => {
        var w;
        this.emit("sashDragStart"), this.onSashStart(h(m));
        const d = this.viewItems.map((g) => g.size);
        (w = this.onDidDragStart) == null || w.call(this, d);
      }), c.on("change", (m) => this.onSashChange(h(m))), c.on("end", () => {
        var m;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((d) => d.sash === c));
        const w = this.viewItems.map((d) => d.size);
        (m = this.onDidDragEnd) == null || m.call(this, w);
      }), c.on("reset", () => {
        const m = this.sashItems.findIndex((I) => I.sash === c), w = br(m, -1, -1), d = br(m + 1, this.viewItems.length), g = this.findFirstSnapIndex(w), S = this.findFirstSnapIndex(d);
        (typeof g != "number" || this.viewItems[g].visible) && (typeof S != "number" || this.viewItems[S].visible) && this.emit("sashreset", m);
      });
      const y = {
        sash: c
      };
      this.sashItems.splice(s - 1, 0, y);
    }
    l || this.relayout(), l || typeof o == "number" || o.type !== "distribute" || this.distributeViewSizes();
  }
  removeView(n, r) {
    if (n < 0 || n >= this.viewItems.length) throw new Error("Index out of bounds");
    const o = this.viewItems.splice(n, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const s = Math.max(n - 1, 0);
      this.sashItems.splice(s, 1)[0].sash.dispose();
    }
    return this.relayout(), r && r.type === "distribute" && this.distributeViewSizes(), o;
  }
  moveView(n, r, o) {
    const s = this.getViewCachedVisibleSize(r), l = s === void 0 ? this.getViewSize(r) : ss.Invisible(s), u = this.removeView(r);
    this.addView(n, u, l, o);
  }
  getViewCachedVisibleSize(n) {
    if (n < 0 || n >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[n].cachedVisibleSize;
  }
  layout(n = this.size) {
    const r = Math.max(this.size, this.contentSize);
    if (this.size = n, this.proportions) for (let o = 0; o < this.viewItems.length; o++) {
      const s = this.viewItems[o];
      s.size = Rr(Math.round(this.proportions[o] * n), s.minimumSize, s.maximumSize);
    }
    else {
      const o = br(0, this.viewItems.length), s = o.filter((u) => this.viewItems[u].priority === xr.Low), l = o.filter((u) => this.viewItems[u].priority === xr.High);
      this.resize(this.viewItems.length - 1, n - r, void 0, s, l);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(n, r) {
    if (n < 0 || n >= this.viewItems.length) return;
    const o = br(0, this.viewItems.length).filter((p) => p !== n), s = [...o.filter((p) => this.viewItems[p].priority === xr.Low), n], l = o.filter((p) => this.viewItems[p].priority === xr.High), u = this.viewItems[n];
    r = Math.round(r), r = Rr(r, u.minimumSize, Math.min(u.maximumSize, this.size)), u.size = r, this.relayout(s, l);
  }
  resizeViews(n) {
    for (let r = 0; r < n.length; r++) {
      const o = this.viewItems[r];
      let s = n[r];
      s = Math.round(s), s = Rr(s, o.minimumSize, Math.min(o.maximumSize, this.size)), o.size = s;
    }
    this.contentSize = this.viewItems.reduce((r, o) => r + o.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(n) {
    return n < 0 || n >= this.viewItems.length ? -1 : this.viewItems[n].size;
  }
  isViewVisible(n) {
    if (n < 0 || n >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[n].visible;
  }
  setViewVisible(n, r) {
    if (n < 0 || n >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[n].setVisible(r), this.distributeEmptySpace(n), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const n = [];
    let r = 0;
    for (const p of this.viewItems) p.maximumSize - p.minimumSize > 0 && (n.push(p), r += p.size);
    const o = Math.floor(r / n.length);
    for (const p of n) p.size = Rr(o, p.minimumSize, p.maximumSize);
    const s = br(0, this.viewItems.length), l = s.filter((p) => this.viewItems[p].priority === xr.Low), u = s.filter((p) => this.viewItems[p].priority === xr.High);
    this.relayout(l, u);
  }
  dispose() {
    this.sashItems.forEach((n) => n.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(n, r) {
    const o = this.viewItems.reduce((s, l) => s + l.size, 0);
    this.resize(this.viewItems.length - 1, this.size - o, void 0, n, r), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: n,
    start: r
  }) {
    const o = this.sashItems.findIndex((s) => s.sash === n);
    ((s) => {
      const l = this.viewItems.map((C) => C.size);
      let u, p, c = Number.NEGATIVE_INFINITY, h = Number.POSITIVE_INFINITY;
      const y = br(o, -1, -1), m = br(o + 1, this.viewItems.length), w = y.reduce((C, T) => C + (this.viewItems[T].minimumSize - l[T]), 0), d = y.reduce((C, T) => C + (this.viewItems[T].viewMaximumSize - l[T]), 0), g = m.length === 0 ? Number.POSITIVE_INFINITY : m.reduce((C, T) => C + (l[T] - this.viewItems[T].minimumSize), 0), S = m.length === 0 ? Number.NEGATIVE_INFINITY : m.reduce((C, T) => C + (l[T] - this.viewItems[T].viewMaximumSize), 0);
      c = Math.max(w, S), h = Math.min(g, d);
      const I = this.findFirstSnapIndex(y), E = this.findFirstSnapIndex(m);
      if (typeof I == "number") {
        const C = this.viewItems[I], T = Math.floor(C.viewMinimumSize / 2);
        u = {
          index: I,
          limitDelta: C.visible ? c - T : c + T,
          size: C.size
        };
      }
      if (typeof E == "number") {
        const C = this.viewItems[E], T = Math.floor(C.viewMinimumSize / 2);
        p = {
          index: E,
          limitDelta: C.visible ? h + T : h - T,
          size: C.size
        };
      }
      this.sashDragState = {
        start: s,
        current: s,
        index: o,
        sizes: l,
        minDelta: c,
        maxDelta: h,
        snapBefore: u,
        snapAfter: p
      };
    })(r);
  }
  onSashChange({
    current: n
  }) {
    const {
      index: r,
      start: o,
      sizes: s,
      minDelta: l,
      maxDelta: u,
      snapBefore: p,
      snapAfter: c
    } = this.sashDragState;
    this.sashDragState.current = n;
    const h = n - o;
    this.resize(r, h, s, void 0, void 0, l, u, p, c), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(n) {
    let r = 0;
    for (let o = 0; o < this.sashItems.length; o++) if (r += this.viewItems[o].size, this.sashItems[o].sash === n) return r;
    return 0;
  }
  resize(n, r, o = this.viewItems.map((y) => y.size), s, l, u = Number.NEGATIVE_INFINITY, p = Number.POSITIVE_INFINITY, c, h) {
    if (n < 0 || n >= this.viewItems.length) return 0;
    const y = br(n, -1, -1), m = br(n + 1, this.viewItems.length);
    if (l) for (const W of l) Df(y, W), Df(m, W);
    if (s) for (const W of s) Ha(y, W), Ha(m, W);
    const w = y.map((W) => this.viewItems[W]), d = y.map((W) => o[W]), g = m.map((W) => this.viewItems[W]), S = m.map((W) => o[W]), I = y.reduce((W, P) => W + (this.viewItems[P].minimumSize - o[P]), 0), E = y.reduce((W, P) => W + (this.viewItems[P].maximumSize - o[P]), 0), C = m.length === 0 ? Number.POSITIVE_INFINITY : m.reduce((W, P) => W + (o[P] - this.viewItems[P].minimumSize), 0), T = m.length === 0 ? Number.NEGATIVE_INFINITY : m.reduce((W, P) => W + (o[P] - this.viewItems[P].maximumSize), 0), R = Math.max(I, T, u), z = Math.min(C, E, p);
    let j = !1;
    if (c) {
      const W = this.viewItems[c.index], P = r >= c.limitDelta;
      j = P !== W.visible, W.setVisible(P, c.size);
    }
    if (!j && h) {
      const W = this.viewItems[h.index], P = r < h.limitDelta;
      j = P !== W.visible, W.setVisible(P, h.size);
    }
    if (j) return this.resize(n, r, o, s, l, u, p);
    for (let W = 0, P = r = Rr(r, R, z); W < w.length; W++) {
      const N = w[W], k = Rr(d[W] + P, N.minimumSize, N.maximumSize);
      P -= k - d[W], N.size = k;
    }
    for (let W = 0, P = r; W < g.length; W++) {
      const N = g[W], k = Rr(S[W] - P, N.minimumSize, N.maximumSize);
      P += k - S[W], N.size = k;
    }
    return r;
  }
  distributeEmptySpace(n) {
    const r = this.viewItems.reduce((h, y) => h + y.size, 0);
    let o = this.size - r;
    const s = br(0, this.viewItems.length), l = [], u = s.filter((h) => this.viewItems[h].priority === xr.Low), p = s.filter((h) => this.viewItems[h].priority === xr.Normal), c = s.filter((h) => this.viewItems[h].priority === xr.High);
    l.push(...c, ...p, ...u), typeof n == "number" && Ha(l, n);
    for (let h = 0; o !== 0 && h < l.length; h++) {
      const y = this.viewItems[l[h]], m = Rr(y.size + o, y.minimumSize, y.maximumSize);
      o -= m - y.size, y.size = m;
    }
  }
  layoutViews() {
    var n;
    this.contentSize = this.viewItems.reduce((o, s) => o + s.size, 0);
    let r = 0;
    for (const o of this.viewItems) o.layout(r), r += o.size;
    (n = this.onDidChange) != null && n.call(this, this.viewItems.map((o) => o.size)), this.sashItems.forEach((o) => o.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map((n) => n.size / this.contentSize));
  }
  updateSashEnablement() {
    let n = !1;
    const r = this.viewItems.map((c) => n = c.size - c.minimumSize > 0 || n);
    n = !1;
    const o = this.viewItems.map((c) => n = c.maximumSize - c.size > 0 || n), s = [...this.viewItems].reverse();
    n = !1;
    const l = s.map((c) => n = c.size - c.minimumSize > 0 || n).reverse();
    n = !1;
    const u = s.map((c) => n = c.maximumSize - c.size > 0 || n).reverse();
    let p = 0;
    for (let c = 0; c < this.sashItems.length; c++) {
      const {
        sash: h
      } = this.sashItems[c];
      p += this.viewItems[c].size;
      const y = !(r[c] && u[c + 1]), m = !(o[c] && l[c + 1]);
      if (y && m) {
        const w = br(c, -1, -1), d = br(c + 1, this.viewItems.length), g = this.findFirstSnapIndex(w), S = this.findFirstSnapIndex(d), I = typeof g == "number" && !this.viewItems[g].visible, E = typeof S == "number" && !this.viewItems[S].visible;
        I && l[c] && (p > 0 || this.startSnappingEnabled) ? h.state = sr.Minimum : E && r[c] && (p < this.contentSize || this.endSnappingEnabled) ? h.state = sr.Maximum : h.state = sr.Disabled;
      } else h.state = y && !m ? sr.Minimum : !y && m ? sr.Maximum : sr.Enabled;
    }
  }
  findFirstSnapIndex(n) {
    for (const r of n) {
      const o = this.viewItems[r];
      if (o.visible && o.snap) return r;
    }
    for (const r of n) {
      const o = this.viewItems[r];
      if (o.visible && o.maximumSize - o.minimumSize > 0) return;
      if (!o.visible && o.snap) return r;
    }
  }
}
class si {
  constructor(n) {
    this.size = void 0, this.size = n;
  }
  getPreferredSize() {
    return this.size;
  }
}
class Ff {
  constructor(n, r) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = n, this.layoutService = r;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Jo {
  getPreferredSize() {
  }
}
class Vf {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(n) {
    if (typeof n == "number") this.layoutStrategy = new si(n);
    else if (typeof n == "string") {
      const r = n.trim();
      if (Ko(r, "%")) {
        const o = Number(r.slice(0, -1)) / 100;
        this.layoutStrategy = new Ff(o, this.layoutService);
      } else if (Ko(r, "px")) {
        const o = Number(r.slice(0, -2)) / 100;
        this.layoutStrategy = new si(o);
      } else if (typeof Number.parseFloat(r) == "number") {
        const o = Number.parseFloat(r);
        this.layoutStrategy = new si(o);
      } else this.layoutStrategy = new Jo();
    } else this.layoutStrategy = new Jo();
  }
  constructor(n, r) {
    var o;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = n, this.element = r.element, this.minimumSize = typeof r.minimumSize == "number" ? r.minimumSize : 30, this.maximumSize = typeof r.maximumSize == "number" ? r.maximumSize : Number.POSITIVE_INFINITY, typeof r.preferredSize == "number") this.layoutStrategy = new si(r.preferredSize);
    else if (typeof r.preferredSize == "string") {
      const s = r.preferredSize.trim();
      if (Ko(s, "%")) {
        const l = Number(s.slice(0, -1)) / 100;
        this.layoutStrategy = new Ff(l, this.layoutService);
      } else if (Ko(s, "px")) {
        const l = Number(s.slice(0, -2));
        this.layoutStrategy = new si(l);
      } else if (typeof Number.parseFloat(s) == "number") {
        const l = Number.parseFloat(s);
        this.layoutStrategy = new si(l);
      } else this.layoutStrategy = new Jo();
    } else this.layoutStrategy = new Jo();
    this.priority = (o = r.priority) != null ? o : xr.Normal, this.snap = typeof r.snap == "boolean" && r.snap;
  }
  layout(n) {
  }
}
function Gf(e) {
  return e.minSize !== void 0 || e.maxSize !== void 0 || e.preferredSize !== void 0 || e.priority !== void 0 || e.visible !== void 0;
}
const Pl = Ci(({
  className: e,
  children: n
}, r) => He.createElement("div", {
  ref: r,
  className: bl("split-view-view", Fd, e)
}, n));
Pl.displayName = "Allotment.Pane";
const Xd = Ci(({
  children: e,
  className: n,
  id: r,
  maxSize: o = 1 / 0,
  minSize: s = 30,
  proportionalLayout: l = !0,
  separator: u = !0,
  sizes: p,
  defaultSizes: c = p,
  snap: h = !1,
  vertical: y = !1,
  onChange: m,
  onReset: w,
  onVisibleChange: d,
  onDragStart: g,
  onDragEnd: S
}, I) => {
  const E = nt(null), C = nt([]), T = nt(/* @__PURE__ */ new Map()), R = nt(null), z = nt(/* @__PURE__ */ new Map()), j = nt(new Jx()), W = nt([]), [P, N] = Ft(!1);
  process.env.NODE_ENV !== "production" && p && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const k = Ld(() => He.Children.toArray(e).filter(He.isValidElement), [e]), B = os((b) => {
    var V, D;
    const Q = (V = W.current) == null ? void 0 : V[b];
    return typeof (Q == null ? void 0 : Q.preferredSize) == "number" && ((D = R.current) != null && D.resizeView(b, Math.round(Q.preferredSize)), !0);
  }, []);
  return wx(I, () => ({
    reset: () => {
      if (w) w();
      else {
        var b;
        (b = R.current) == null || b.distributeViewSizes();
        for (let V = 0; V < W.current.length; V++) B(V);
      }
    },
    resize: (b) => {
      var V;
      (V = R.current) == null || V.resizeViews(b);
    }
  })), $f(() => {
    let b = !0;
    c && z.current.size !== c.length && (b = !1, console.warn(`Expected ${c.length} children based on defaultSizes but found ${z.current.size}`)), b && c && (C.current = k.map((Q) => Q.key));
    const V = bi({
      orientation: y ? Sr.Vertical : Sr.Horizontal,
      proportionalLayout: l
    }, b && c && {
      descriptor: {
        size: c.reduce((Q, ae) => Q + ae, 0),
        views: c.map((Q, ae) => {
          var fe, ee, be, Y;
          const Z = T.current.get(C.current[ae]), de = new Vf(j.current, bi({
            element: document.createElement("div"),
            minimumSize: (fe = Z == null ? void 0 : Z.minSize) != null ? fe : s,
            maximumSize: (ee = Z == null ? void 0 : Z.maxSize) != null ? ee : o,
            priority: (be = Z == null ? void 0 : Z.priority) != null ? be : xr.Normal
          }, (Z == null ? void 0 : Z.preferredSize) && {
            preferredSize: Z == null ? void 0 : Z.preferredSize
          }, {
            snap: (Y = Z == null ? void 0 : Z.snap) != null ? Y : h
          }));
          return W.current.push(de), {
            container: [...z.current.values()][ae],
            size: Q,
            view: de
          };
        })
      }
    });
    R.current = new sS(E.current, V, m, g, S), R.current.on("sashDragStart", () => {
      var Q;
      (Q = E.current) == null || Q.classList.add("split-view-sash-dragging");
    }), R.current.on("sashDragEnd", () => {
      var Q;
      (Q = E.current) == null || Q.classList.remove("split-view-sash-dragging");
    }), R.current.on("sashchange", (Q) => {
      if (d && R.current) {
        const ae = k.map((fe) => fe.key);
        for (let fe = 0; fe < ae.length; fe++) {
          const ee = T.current.get(ae[fe]);
          (ee == null ? void 0 : ee.visible) !== void 0 && ee.visible !== R.current.isViewVisible(fe) && d(fe, R.current.isViewVisible(fe));
        }
      }
    }), R.current.on("sashreset", (Q) => {
      if (w) w();
      else {
        var ae;
        if (B(Q) || B(Q + 1)) return;
        (ae = R.current) == null || ae.distributeViewSizes();
      }
    });
    const D = R.current;
    return () => {
      D.dispose();
    };
  }, []), $f(() => {
    if (P) {
      const pe = k.map((te) => te.key), F = [...C.current], q = pe.filter((te) => !C.current.includes(te)), X = pe.filter((te) => C.current.includes(te)), le = C.current.map((te) => !pe.includes(te));
      for (let te = le.length - 1; te >= 0; te--) {
        var b;
        le[te] && ((b = R.current) != null && b.removeView(te), F.splice(te, 1), W.current.splice(te, 1));
      }
      for (const te of q) {
        var V, D, Q, ae, fe;
        const se = T.current.get(te), ue = new Vf(j.current, bi({
          element: document.createElement("div"),
          minimumSize: (V = se == null ? void 0 : se.minSize) != null ? V : s,
          maximumSize: (D = se == null ? void 0 : se.maxSize) != null ? D : o,
          priority: (Q = se == null ? void 0 : se.priority) != null ? Q : xr.Normal
        }, (se == null ? void 0 : se.preferredSize) && {
          preferredSize: se == null ? void 0 : se.preferredSize
        }, {
          snap: (ae = se == null ? void 0 : se.snap) != null ? ae : h
        }));
        (fe = R.current) != null && fe.addView(z.current.get(te), ue, ss.Distribute, pe.findIndex((ve) => ve === te)), F.splice(pe.findIndex((ve) => ve === te), 0, te), W.current.splice(pe.findIndex((ve) => ve === te), 0, ue);
      }
      for (; !Fx(pe, F); ) for (const [te, se] of pe.entries()) {
        const ue = F.findIndex((ve) => ve === se);
        if (ue !== te) {
          var ee;
          (ee = R.current) == null || ee.moveView(z.current.get(se), ue, te);
          const ve = F[ue];
          F.splice(ue, 1), F.splice(te, 0, ve);
          break;
        }
      }
      for (const te of q) {
        var be;
        const se = pe.findIndex((ve) => ve === te), ue = W.current[se].preferredSize;
        ue !== void 0 && ((be = R.current) == null || be.resizeView(se, ue));
      }
      for (const te of [...q, ...X]) {
        var Y, Z;
        const se = T.current.get(te), ue = pe.findIndex((ve) => ve === te);
        se && Gf(se) && se.visible !== void 0 && ((Y = R.current) == null ? void 0 : Y.isViewVisible(ue)) !== se.visible && ((Z = R.current) == null || Z.setViewVisible(ue, se.visible));
      }
      for (const te of X) {
        const se = T.current.get(te), ue = pe.findIndex((ve) => ve === te);
        if (se && Gf(se)) {
          var de;
          se.preferredSize !== void 0 && W.current[ue].preferredSize !== se.preferredSize && (W.current[ue].preferredSize = se.preferredSize);
          let ve = !1;
          se.minSize !== void 0 && W.current[ue].minimumSize !== se.minSize && (W.current[ue].minimumSize = se.minSize, ve = !0), se.maxSize !== void 0 && W.current[ue].maximumSize !== se.maxSize && (W.current[ue].maximumSize = se.maxSize, ve = !0), ve && ((de = R.current) == null || de.layout());
        }
      }
      (q.length > 0 || le.length > 0) && (C.current = pe);
    }
  }, [k, P, o, s, h]), _r(() => {
    R.current && (R.current.onDidChange = m);
  }, [m]), _r(() => {
    R.current && (R.current.onDidDragStart = g);
  }, [g]), _r(() => {
    R.current && (R.current.onDidDragEnd = S);
  }, [S]), Gx({
    ref: E,
    onResize: ({
      width: b,
      height: V
    }) => {
      var D;
      b && V && ((D = R.current) != null && D.layout(y ? V : b), j.current.setSize(y ? V : b), N(!0));
    }
  }), _r(() => {
    jd && aS(20);
  }, []), He.createElement("div", {
    ref: E,
    className: bl("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": u
    }, jx, y ? Ux : Xx, {
      [qx]: u
    }, n),
    id: r
  }, He.createElement("div", {
    className: bl("split-view-container", Hx)
  }, He.Children.toArray(e).map((b) => {
    if (!He.isValidElement(b)) return null;
    const V = b.key;
    return b.type.displayName === "Allotment.Pane" ? (T.current.set(V, b.props), He.cloneElement(b, {
      key: V,
      ref: (D) => {
        const Q = b.ref;
        Q && (Q.current = D), D ? z.current.set(V, D) : z.current.delete(V);
      }
    })) : He.createElement(Pl, {
      key: V,
      ref: (D) => {
        D ? z.current.set(V, D) : z.current.delete(V);
      }
    }, b);
  })));
});
function aS(e) {
  const n = Rr(e, 4, 20), r = Rr(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", n + "px"), document.documentElement.style.setProperty("--sash-hover-size", r + "px"), function(o) {
    Yd = o, Hd.emit("onDidChangeGlobalSize", o);
  }(n);
}
Xd.displayName = "Allotment";
var Ka = Object.assign(Xd, {
  Pane: Pl
});
let Zo;
const lS = new Uint8Array(16);
function uS() {
  if (!Zo && (Zo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Zo))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Zo(lS);
}
const kt = [];
for (let e = 0; e < 256; ++e)
  kt.push((e + 256).toString(16).slice(1));
function cS(e, n = 0) {
  return kt[e[n + 0]] + kt[e[n + 1]] + kt[e[n + 2]] + kt[e[n + 3]] + "-" + kt[e[n + 4]] + kt[e[n + 5]] + "-" + kt[e[n + 6]] + kt[e[n + 7]] + "-" + kt[e[n + 8]] + kt[e[n + 9]] + "-" + kt[e[n + 10]] + kt[e[n + 11]] + kt[e[n + 12]] + kt[e[n + 13]] + kt[e[n + 14]] + kt[e[n + 15]];
}
const fS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), jf = {
  randomUUID: fS
};
function dS(e, n, r) {
  if (jf.randomUUID && !e)
    return jf.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || uS)();
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, cS(o);
}
const pS = 500, hS = 320, Yf = {
  height: "100%",
  overflow: "visible"
}, JC = (e) => {
  const {
    isView: n = !1,
    leftPane: r,
    rightPane: o,
    isSplitMode: s,
    leftInitSize: l = 360,
    leftMinSize: u = hS,
    leftMaxSize: p = pS,
    onDragEnd: c
  } = e, h = ro(), y = nt(null), m = nt(dS());
  let w = !1, d = !1;
  return s || (n ? w = !0 : d = !0), /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    /* @__PURE__ */ ie.jsx("style", { children: `
          :root {
            --focus-border: ${h.palette.primary.main};
            --separator-border: ${h.palette.border.light};
          }
        ` }),
    /* @__PURE__ */ ie.jsx(
      Ht,
      {
        sx: {
          width: "100%",
          height: "100%",
          [`& #allotment-${m.current.toString()} > .sash-container`]: {
            display: s ? "block" : "none"
          }
        },
        children: /* @__PURE__ */ ie.jsxs(
          Ka,
          {
            ref: y,
            onDragEnd: c,
            id: `allotment-${m.current}`,
            separator: s,
            children: [
              /* @__PURE__ */ ie.jsx(
                Ka.Pane,
                {
                  minSize: s ? u : 0,
                  maxSize: s ? p : 1 / 0,
                  visible: !w,
                  preferredSize: l,
                  children: !w && /* @__PURE__ */ ie.jsx(Ht, { sx: { ...Yf }, children: r })
                }
              ),
              /* @__PURE__ */ ie.jsx(Ka.Pane, { minSize: 0, visible: !d, children: !d && /* @__PURE__ */ ie.jsx(Ht, { sx: { ...Yf }, children: o }) })
            ]
          }
        )
      }
    )
  ] });
};
function Hf(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Rl(e = {}, n = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(n).filter((o) => r.indexOf(o) < 0).forEach((o) => {
    typeof e[o] > "u" ? e[o] = n[o] : Hf(n[o]) && Hf(e[o]) && Object.keys(n[o]).length > 0 && Rl(e[o], n[o]);
  });
}
const qd = {
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
function bn() {
  const e = typeof document < "u" ? document : {};
  return Rl(e, qd), e;
}
const gS = {
  document: qd,
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
function Dt() {
  const e = typeof window < "u" ? window : {};
  return Rl(e, gS), e;
}
function mS(e = "") {
  return e.trim().split(" ").filter((n) => !!n.trim());
}
function vS(e) {
  const n = e;
  Object.keys(n).forEach((r) => {
    try {
      n[r] = null;
    } catch {
    }
    try {
      delete n[r];
    } catch {
    }
  });
}
function Kd(e, n = 0) {
  return setTimeout(e, n);
}
function as() {
  return Date.now();
}
function yS(e) {
  const n = Dt();
  let r;
  return n.getComputedStyle && (r = n.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function xl(e, n = "x") {
  const r = Dt();
  let o, s, l;
  const u = yS(e);
  return r.WebKitCSSMatrix ? (s = u.transform || u.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((p) => p.replace(",", ".")).join(", ")), l = new r.WebKitCSSMatrix(s === "none" ? "" : s)) : (l = u.MozTransform || u.OTransform || u.MsTransform || u.msTransform || u.transform || u.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), o = l.toString().split(",")), n === "x" && (r.WebKitCSSMatrix ? s = l.m41 : o.length === 16 ? s = parseFloat(o[12]) : s = parseFloat(o[4])), n === "y" && (r.WebKitCSSMatrix ? s = l.m42 : o.length === 16 ? s = parseFloat(o[13]) : s = parseFloat(o[5])), s || 0;
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function bS(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ar(...e) {
  const n = Object(e[0]);
  for (let r = 1; r < e.length; r += 1) {
    const o = e[r];
    if (o != null && !bS(o)) {
      const s = Object.keys(Object(o)).filter((l) => l !== "__proto__" && l !== "constructor" && l !== "prototype");
      for (let l = 0, u = s.length; l < u; l += 1) {
        const p = s[l], c = Object.getOwnPropertyDescriptor(o, p);
        c !== void 0 && c.enumerable && (Qo(n[p]) && Qo(o[p]) ? o[p].__swiper__ ? n[p] = o[p] : ar(n[p], o[p]) : !Qo(n[p]) && Qo(o[p]) ? (n[p] = {}, o[p].__swiper__ ? n[p] = o[p] : ar(n[p], o[p])) : n[p] = o[p]);
      }
    }
  }
  return n;
}
function ai(e, n, r) {
  e.style.setProperty(n, r);
}
function Jd({
  swiper: e,
  targetPosition: n,
  side: r
}) {
  const o = Dt(), s = -e.translate;
  let l = null, u;
  const p = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(e.cssModeFrameID);
  const c = n > s ? "next" : "prev", h = (m, w) => c === "next" && m >= w || c === "prev" && m <= w, y = () => {
    u = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = u);
    const m = Math.max(Math.min((u - l) / p, 1), 0), w = 0.5 - Math.cos(m * Math.PI) / 2;
    let d = s + w * (n - s);
    if (h(d, n) && (d = n), e.wrapperEl.scrollTo({
      [r]: d
    }), h(d, n)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [r]: d
        });
      }), o.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = o.requestAnimationFrame(y);
  };
  y();
}
function Er(e, n = "") {
  const r = Dt(), o = [...e.children];
  return r.HTMLSlotElement && e instanceof HTMLSlotElement && o.push(...e.assignedElements()), n ? o.filter((s) => s.matches(n)) : o;
}
function xS(e, n) {
  const r = [n];
  for (; r.length > 0; ) {
    const o = r.shift();
    if (e === o)
      return !0;
    r.push(...o.children, ...o.shadowRoot ? o.shadowRoot.children : [], ...o.assignedElements ? o.assignedElements() : []);
  }
}
function SS(e, n) {
  const r = Dt();
  let o = n.contains(e);
  return !o && r.HTMLSlotElement && n instanceof HTMLSlotElement && (o = [...n.assignedElements()].includes(e), o || (o = xS(e, n))), o;
}
function ls(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function us(e, n = []) {
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(n) ? n : mS(n)), r;
}
function Uf(e) {
  const n = Dt(), r = bn(), o = e.getBoundingClientRect(), s = r.body, l = e.clientTop || s.clientTop || 0, u = e.clientLeft || s.clientLeft || 0, p = e === n ? n.scrollY : e.scrollTop, c = e === n ? n.scrollX : e.scrollLeft;
  return {
    top: o.top + p - l,
    left: o.left + c - u
  };
}
function wS(e, n) {
  const r = [];
  for (; e.previousElementSibling; ) {
    const o = e.previousElementSibling;
    n ? o.matches(n) && r.push(o) : r.push(o), e = o;
  }
  return r;
}
function _S(e, n) {
  const r = [];
  for (; e.nextElementSibling; ) {
    const o = e.nextElementSibling;
    n ? o.matches(n) && r.push(o) : r.push(o), e = o;
  }
  return r;
}
function mn(e, n) {
  return Dt().getComputedStyle(e, null).getPropertyValue(n);
}
function cs(e) {
  let n = e, r;
  if (n) {
    for (r = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (r += 1);
    return r;
  }
}
function Ji(e, n) {
  const r = [];
  let o = e.parentElement;
  for (; o; )
    n ? o.matches(n) && r.push(o) : r.push(o), o = o.parentElement;
  return r;
}
function Sl(e, n, r) {
  const o = Dt();
  return e[n === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(o.getComputedStyle(e, null).getPropertyValue(n === "width" ? "margin-right" : "margin-top")) + parseFloat(o.getComputedStyle(e, null).getPropertyValue(n === "width" ? "margin-left" : "margin-bottom"));
}
function Jr(e) {
  return (Array.isArray(e) ? e : [e]).filter((n) => !!n);
}
function fs(e, n = "") {
  typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (r) => r
  }).createHTML(n) : e.innerHTML = n;
}
function ES(e, n, r, o) {
  return e.params.createElements && Object.keys(o).forEach((s) => {
    if (!r[s] && r.auto === !0) {
      let l = Er(e.el, `.${o[s]}`)[0];
      l || (l = us("div", o[s]), l.className = o[s], e.el.append(l)), r[s] = l, n[s] = l;
    }
  }), r;
}
function Ui(e = "") {
  return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function CS({
  swiper: e,
  extendParams: n,
  on: r,
  emit: o
}) {
  const s = "swiper-pagination";
  n({
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
      formatFractionCurrent: (E) => E,
      formatFractionTotal: (E) => E,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let l, u = 0;
  function p() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function c(E, C) {
    const {
      bulletActiveClass: T
    } = e.params.pagination;
    E && (E = E[`${C === "prev" ? "previous" : "next"}ElementSibling`], E && (E.classList.add(`${T}-${C}`), E = E[`${C === "prev" ? "previous" : "next"}ElementSibling`], E && E.classList.add(`${T}-${C}-${C}`)));
  }
  function h(E, C, T) {
    if (E = E % T, C = C % T, C === E + 1)
      return "next";
    if (C === E - 1)
      return "previous";
  }
  function y(E) {
    const C = E.target.closest(Ui(e.params.pagination.bulletClass));
    if (!C)
      return;
    E.preventDefault();
    const T = cs(C) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === T) return;
      const R = h(e.realIndex, T, e.slides.length);
      R === "next" ? e.slideNext() : R === "previous" ? e.slidePrev() : e.slideToLoop(T);
    } else
      e.slideTo(T);
  }
  function m() {
    const E = e.rtl, C = e.params.pagination;
    if (p()) return;
    let T = e.pagination.el;
    T = Jr(T);
    let R, z;
    const j = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, W = e.params.loop ? Math.ceil(j / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (z = e.previousRealIndex || 0, R = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (R = e.snapIndex, z = e.previousSnapIndex) : (z = e.previousIndex || 0, R = e.activeIndex || 0), C.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const P = e.pagination.bullets;
      let N, k, B;
      if (C.dynamicBullets && (l = Sl(P[0], e.isHorizontal() ? "width" : "height"), T.forEach((b) => {
        b.style[e.isHorizontal() ? "width" : "height"] = `${l * (C.dynamicMainBullets + 4)}px`;
      }), C.dynamicMainBullets > 1 && z !== void 0 && (u += R - (z || 0), u > C.dynamicMainBullets - 1 ? u = C.dynamicMainBullets - 1 : u < 0 && (u = 0)), N = Math.max(R - u, 0), k = N + (Math.min(P.length, C.dynamicMainBullets) - 1), B = (k + N) / 2), P.forEach((b) => {
        const V = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((D) => `${C.bulletActiveClass}${D}`)].map((D) => typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
        b.classList.remove(...V);
      }), T.length > 1)
        P.forEach((b) => {
          const V = cs(b);
          V === R ? b.classList.add(...C.bulletActiveClass.split(" ")) : e.isElement && b.setAttribute("part", "bullet"), C.dynamicBullets && (V >= N && V <= k && b.classList.add(...`${C.bulletActiveClass}-main`.split(" ")), V === N && c(b, "prev"), V === k && c(b, "next"));
        });
      else {
        const b = P[R];
        if (b && b.classList.add(...C.bulletActiveClass.split(" ")), e.isElement && P.forEach((V, D) => {
          V.setAttribute("part", D === R ? "bullet-active" : "bullet");
        }), C.dynamicBullets) {
          const V = P[N], D = P[k];
          for (let Q = N; Q <= k; Q += 1)
            P[Q] && P[Q].classList.add(...`${C.bulletActiveClass}-main`.split(" "));
          c(V, "prev"), c(D, "next");
        }
      }
      if (C.dynamicBullets) {
        const b = Math.min(P.length, C.dynamicMainBullets + 4), V = (l * b - l) / 2 - B * l, D = E ? "right" : "left";
        P.forEach((Q) => {
          Q.style[e.isHorizontal() ? D : "top"] = `${V}px`;
        });
      }
    }
    T.forEach((P, N) => {
      if (C.type === "fraction" && (P.querySelectorAll(Ui(C.currentClass)).forEach((k) => {
        k.textContent = C.formatFractionCurrent(R + 1);
      }), P.querySelectorAll(Ui(C.totalClass)).forEach((k) => {
        k.textContent = C.formatFractionTotal(W);
      })), C.type === "progressbar") {
        let k;
        C.progressbarOpposite ? k = e.isHorizontal() ? "vertical" : "horizontal" : k = e.isHorizontal() ? "horizontal" : "vertical";
        const B = (R + 1) / W;
        let b = 1, V = 1;
        k === "horizontal" ? b = B : V = B, P.querySelectorAll(Ui(C.progressbarFillClass)).forEach((D) => {
          D.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${V})`, D.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      C.type === "custom" && C.renderCustom ? (fs(P, C.renderCustom(e, R + 1, W)), N === 0 && o("paginationRender", P)) : (N === 0 && o("paginationRender", P), o("paginationUpdate", P)), e.params.watchOverflow && e.enabled && P.classList[e.isLocked ? "add" : "remove"](C.lockClass);
    });
  }
  function w() {
    const E = e.params.pagination;
    if (p()) return;
    const C = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let T = e.pagination.el;
    T = Jr(T);
    let R = "";
    if (E.type === "bullets") {
      let z = e.params.loop ? Math.ceil(C / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && z > C && (z = C);
      for (let j = 0; j < z; j += 1)
        E.renderBullet ? R += E.renderBullet.call(e, j, E.bulletClass) : R += `<${E.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${E.bulletClass}"></${E.bulletElement}>`;
    }
    E.type === "fraction" && (E.renderFraction ? R = E.renderFraction.call(e, E.currentClass, E.totalClass) : R = `<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`), E.type === "progressbar" && (E.renderProgressbar ? R = E.renderProgressbar.call(e, E.progressbarFillClass) : R = `<span class="${E.progressbarFillClass}"></span>`), e.pagination.bullets = [], T.forEach((z) => {
      E.type !== "custom" && fs(z, R || ""), E.type === "bullets" && e.pagination.bullets.push(...z.querySelectorAll(Ui(E.bulletClass)));
    }), E.type !== "custom" && o("paginationRender", T[0]);
  }
  function d() {
    e.params.pagination = ES(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const E = e.params.pagination;
    if (!E.el) return;
    let C;
    typeof E.el == "string" && e.isElement && (C = e.el.querySelector(E.el)), !C && typeof E.el == "string" && (C = [...document.querySelectorAll(E.el)]), C || (C = E.el), !(!C || C.length === 0) && (e.params.uniqueNavElements && typeof E.el == "string" && Array.isArray(C) && C.length > 1 && (C = [...e.el.querySelectorAll(E.el)], C.length > 1 && (C = C.find((T) => Ji(T, ".swiper")[0] === e.el))), Array.isArray(C) && C.length === 1 && (C = C[0]), Object.assign(e.pagination, {
      el: C
    }), C = Jr(C), C.forEach((T) => {
      E.type === "bullets" && E.clickable && T.classList.add(...(E.clickableClass || "").split(" ")), T.classList.add(E.modifierClass + E.type), T.classList.add(e.isHorizontal() ? E.horizontalClass : E.verticalClass), E.type === "bullets" && E.dynamicBullets && (T.classList.add(`${E.modifierClass}${E.type}-dynamic`), u = 0, E.dynamicMainBullets < 1 && (E.dynamicMainBullets = 1)), E.type === "progressbar" && E.progressbarOpposite && T.classList.add(E.progressbarOppositeClass), E.clickable && T.addEventListener("click", y), e.enabled || T.classList.add(E.lockClass);
    }));
  }
  function g() {
    const E = e.params.pagination;
    if (p()) return;
    let C = e.pagination.el;
    C && (C = Jr(C), C.forEach((T) => {
      T.classList.remove(E.hiddenClass), T.classList.remove(E.modifierClass + E.type), T.classList.remove(e.isHorizontal() ? E.horizontalClass : E.verticalClass), E.clickable && (T.classList.remove(...(E.clickableClass || "").split(" ")), T.removeEventListener("click", y));
    })), e.pagination.bullets && e.pagination.bullets.forEach((T) => T.classList.remove(...E.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const E = e.params.pagination;
    let {
      el: C
    } = e.pagination;
    C = Jr(C), C.forEach((T) => {
      T.classList.remove(E.horizontalClass, E.verticalClass), T.classList.add(e.isHorizontal() ? E.horizontalClass : E.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? I() : (d(), w(), m());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && m();
  }), r("snapIndexChange", () => {
    m();
  }), r("snapGridLengthChange", () => {
    w(), m();
  }), r("destroy", () => {
    g();
  }), r("enable disable", () => {
    let {
      el: E
    } = e.pagination;
    E && (E = Jr(E), E.forEach((C) => C.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    m();
  }), r("click", (E, C) => {
    const T = C.target, R = Jr(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && R && R.length > 0 && !T.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && T === e.navigation.nextEl || e.navigation.prevEl && T === e.navigation.prevEl)) return;
      const z = R[0].classList.contains(e.params.pagination.hiddenClass);
      o(z === !0 ? "paginationShow" : "paginationHide"), R.forEach((j) => j.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const S = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: E
    } = e.pagination;
    E && (E = Jr(E), E.forEach((C) => C.classList.remove(e.params.pagination.paginationDisabledClass))), d(), w(), m();
  }, I = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: E
    } = e.pagination;
    E && (E = Jr(E), E.forEach((C) => C.classList.add(e.params.pagination.paginationDisabledClass))), g();
  };
  Object.assign(e.pagination, {
    enable: S,
    disable: I,
    render: w,
    update: m,
    init: d,
    destroy: g
  });
}
function TS({
  swiper: e,
  extendParams: n,
  on: r,
  emit: o
}) {
  const s = Dt();
  n({
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
  let l = 1, u = !1, p = !1, c = {
    x: 0,
    y: 0
  };
  const h = -3;
  let y, m;
  const w = [], d = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, g = {
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
  }, S = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let I = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return I;
    },
    set(F) {
      if (I !== F) {
        const q = d.imageEl, X = d.slideEl;
        o("zoomChange", F, q, X);
      }
      I = F;
    }
  });
  function E() {
    if (w.length < 2) return 1;
    const F = w[0].pageX, q = w[0].pageY, X = w[1].pageX, le = w[1].pageY;
    return Math.sqrt((X - F) ** 2 + (le - q) ** 2);
  }
  function C() {
    const F = e.params.zoom, q = d.imageWrapEl.getAttribute("data-swiper-zoom") || F.maxRatio;
    if (F.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
      const X = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
      return Math.min(X, q);
    }
    return q;
  }
  function T() {
    if (w.length < 2) return {
      x: null,
      y: null
    };
    const F = d.imageEl.getBoundingClientRect();
    return [(w[0].pageX + (w[1].pageX - w[0].pageX) / 2 - F.x - s.scrollX) / l, (w[0].pageY + (w[1].pageY - w[0].pageY) / 2 - F.y - s.scrollY) / l];
  }
  function R() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function z(F) {
    const q = R();
    return !!(F.target.matches(q) || e.slides.filter((X) => X.contains(F.target)).length > 0);
  }
  function j(F) {
    const q = `.${e.params.zoom.containerClass}`;
    return !!(F.target.matches(q) || [...e.hostEl.querySelectorAll(q)].filter((X) => X.contains(F.target)).length > 0);
  }
  function W(F) {
    if (F.pointerType === "mouse" && w.splice(0, w.length), !z(F)) return;
    const q = e.params.zoom;
    if (y = !1, m = !1, w.push(F), !(w.length < 2)) {
      if (y = !0, d.scaleStart = E(), !d.slideEl) {
        d.slideEl = F.target.closest(`.${e.params.slideClass}, swiper-slide`), d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
        let X = d.slideEl.querySelector(`.${q.containerClass}`);
        if (X && (X = X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = X, X ? d.imageWrapEl = Ji(d.imageEl, `.${q.containerClass}`)[0] : d.imageWrapEl = void 0, !d.imageWrapEl) {
          d.imageEl = void 0;
          return;
        }
        d.maxRatio = C();
      }
      if (d.imageEl) {
        const [X, le] = T();
        d.originX = X, d.originY = le, d.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function P(F) {
    if (!z(F)) return;
    const q = e.params.zoom, X = e.zoom, le = w.findIndex((te) => te.pointerId === F.pointerId);
    le >= 0 && (w[le] = F), !(w.length < 2) && (m = !0, d.scaleMove = E(), d.imageEl && (X.scale = d.scaleMove / d.scaleStart * l, X.scale > d.maxRatio && (X.scale = d.maxRatio - 1 + (X.scale - d.maxRatio + 1) ** 0.5), X.scale < q.minRatio && (X.scale = q.minRatio + 1 - (q.minRatio - X.scale + 1) ** 0.5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`));
  }
  function N(F) {
    if (!z(F) || F.pointerType === "mouse" && F.type === "pointerout") return;
    const q = e.params.zoom, X = e.zoom, le = w.findIndex((te) => te.pointerId === F.pointerId);
    le >= 0 && w.splice(le, 1), !(!y || !m) && (y = !1, m = !1, d.imageEl && (X.scale = Math.max(Math.min(X.scale, d.maxRatio), q.minRatio), d.imageEl.style.transitionDuration = `${e.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`, l = X.scale, u = !1, X.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${q.zoomedSlideClass}`) : X.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${q.zoomedSlideClass}`), X.scale === 1 && (d.originX = 0, d.originY = 0, d.slideEl = void 0)));
  }
  let k;
  function B() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function b() {
    clearTimeout(k), e.touchEventsData.preventTouchMoveFromPointerMove = !0, k = setTimeout(() => {
      e.destroyed || B();
    });
  }
  function V(F) {
    const q = e.device;
    if (!d.imageEl || g.isTouched) return;
    q.android && F.cancelable && F.preventDefault(), g.isTouched = !0;
    const X = w.length > 0 ? w[0] : F;
    g.touchesStart.x = X.pageX, g.touchesStart.y = X.pageY;
  }
  function D(F) {
    const X = F.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!z(F) || !j(F))
      return;
    const le = e.zoom;
    if (!d.imageEl)
      return;
    if (!g.isTouched || !d.slideEl) {
      X && fe(F);
      return;
    }
    if (X) {
      fe(F);
      return;
    }
    g.isMoved || (g.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, g.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, g.startX = xl(d.imageWrapEl, "x") || 0, g.startY = xl(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
    const te = g.width * le.scale, se = g.height * le.scale;
    if (g.minX = Math.min(d.slideWidth / 2 - te / 2, 0), g.maxX = -g.minX, g.minY = Math.min(d.slideHeight / 2 - se / 2, 0), g.maxY = -g.minY, g.touchesCurrent.x = w.length > 0 ? w[0].pageX : F.pageX, g.touchesCurrent.y = w.length > 0 ? w[0].pageY : F.pageY, Math.max(Math.abs(g.touchesCurrent.x - g.touchesStart.x), Math.abs(g.touchesCurrent.y - g.touchesStart.y)) > 5 && (e.allowClick = !1), !g.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(g.minX) === Math.floor(g.startX) && g.touchesCurrent.x < g.touchesStart.x || Math.floor(g.maxX) === Math.floor(g.startX) && g.touchesCurrent.x > g.touchesStart.x)) {
        g.isTouched = !1, B();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(g.minY) === Math.floor(g.startY) && g.touchesCurrent.y < g.touchesStart.y || Math.floor(g.maxY) === Math.floor(g.startY) && g.touchesCurrent.y > g.touchesStart.y)) {
        g.isTouched = !1, B();
        return;
      }
    }
    F.cancelable && F.preventDefault(), F.stopPropagation(), b(), g.isMoved = !0;
    const ve = (le.scale - l) / (d.maxRatio - e.params.zoom.minRatio), {
      originX: oe,
      originY: Te
    } = d;
    g.currentX = g.touchesCurrent.x - g.touchesStart.x + g.startX + ve * (g.width - oe * 2), g.currentY = g.touchesCurrent.y - g.touchesStart.y + g.startY + ve * (g.height - Te * 2), g.currentX < g.minX && (g.currentX = g.minX + 1 - (g.minX - g.currentX + 1) ** 0.8), g.currentX > g.maxX && (g.currentX = g.maxX - 1 + (g.currentX - g.maxX + 1) ** 0.8), g.currentY < g.minY && (g.currentY = g.minY + 1 - (g.minY - g.currentY + 1) ** 0.8), g.currentY > g.maxY && (g.currentY = g.maxY - 1 + (g.currentY - g.maxY + 1) ** 0.8), S.prevPositionX || (S.prevPositionX = g.touchesCurrent.x), S.prevPositionY || (S.prevPositionY = g.touchesCurrent.y), S.prevTime || (S.prevTime = Date.now()), S.x = (g.touchesCurrent.x - S.prevPositionX) / (Date.now() - S.prevTime) / 2, S.y = (g.touchesCurrent.y - S.prevPositionY) / (Date.now() - S.prevTime) / 2, Math.abs(g.touchesCurrent.x - S.prevPositionX) < 2 && (S.x = 0), Math.abs(g.touchesCurrent.y - S.prevPositionY) < 2 && (S.y = 0), S.prevPositionX = g.touchesCurrent.x, S.prevPositionY = g.touchesCurrent.y, S.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`;
  }
  function Q() {
    const F = e.zoom;
    if (w.length = 0, !d.imageEl) return;
    if (!g.isTouched || !g.isMoved) {
      g.isTouched = !1, g.isMoved = !1;
      return;
    }
    g.isTouched = !1, g.isMoved = !1;
    let q = 300, X = 300;
    const le = S.x * q, te = g.currentX + le, se = S.y * X, ue = g.currentY + se;
    S.x !== 0 && (q = Math.abs((te - g.currentX) / S.x)), S.y !== 0 && (X = Math.abs((ue - g.currentY) / S.y));
    const ve = Math.max(q, X);
    g.currentX = te, g.currentY = ue;
    const oe = g.width * F.scale, Te = g.height * F.scale;
    g.minX = Math.min(d.slideWidth / 2 - oe / 2, 0), g.maxX = -g.minX, g.minY = Math.min(d.slideHeight / 2 - Te / 2, 0), g.maxY = -g.minY, g.currentX = Math.max(Math.min(g.currentX, g.maxX), g.minX), g.currentY = Math.max(Math.min(g.currentY, g.maxY), g.minY), d.imageWrapEl.style.transitionDuration = `${ve}ms`, d.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`;
  }
  function ae() {
    const F = e.zoom;
    d.slideEl && e.activeIndex !== e.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), F.scale = 1, l = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0);
  }
  function fe(F) {
    if (l <= 1 || !d.imageWrapEl || !z(F) || !j(F)) return;
    const q = s.getComputedStyle(d.imageWrapEl).transform, X = new s.DOMMatrix(q);
    if (!p) {
      p = !0, c.x = F.clientX, c.y = F.clientY, g.startX = X.e, g.startY = X.f, g.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, g.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight;
      return;
    }
    const le = (F.clientX - c.x) * h, te = (F.clientY - c.y) * h, se = g.width * l, ue = g.height * l, ve = d.slideWidth, oe = d.slideHeight, Te = Math.min(ve / 2 - se / 2, 0), ze = -Te, qe = Math.min(oe / 2 - ue / 2, 0), xt = -qe, it = Math.max(Math.min(g.startX + le, ze), Te), Et = Math.max(Math.min(g.startY + te, xt), qe);
    d.imageWrapEl.style.transitionDuration = "0ms", d.imageWrapEl.style.transform = `translate3d(${it}px, ${Et}px, 0)`, c.x = F.clientX, c.y = F.clientY, g.startX = it, g.startY = Et, g.currentX = it, g.currentY = Et;
  }
  function ee(F) {
    const q = e.zoom, X = e.params.zoom;
    if (!d.slideEl) {
      F && F.target && (d.slideEl = F.target.closest(`.${e.params.slideClass}, swiper-slide`)), d.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = Er(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex]);
      let wt = d.slideEl.querySelector(`.${X.containerClass}`);
      wt && (wt = wt.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = wt, wt ? d.imageWrapEl = Ji(d.imageEl, `.${X.containerClass}`)[0] : d.imageWrapEl = void 0;
    }
    if (!d.imageEl || !d.imageWrapEl) return;
    d.maxRatio = C(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${X.zoomedSlideClass}`);
    let le, te, se, ue, ve, oe, Te, ze, qe, xt, it, Et, et, St, Ze, ft, Vt, Zt;
    typeof g.touchesStart.x > "u" && F ? (le = F.pageX, te = F.pageY) : (le = g.touchesStart.x, te = g.touchesStart.y);
    const Ot = l, At = typeof F == "number" ? F : null;
    l === 1 && At && (le = void 0, te = void 0, g.touchesStart.x = void 0, g.touchesStart.y = void 0);
    const Pt = C();
    q.scale = At || Pt, l = At || Pt, F && !(l === 1 && At) ? (Vt = d.slideEl.offsetWidth, Zt = d.slideEl.offsetHeight, se = Uf(d.slideEl).left + s.scrollX, ue = Uf(d.slideEl).top + s.scrollY, ve = se + Vt / 2 - le, oe = ue + Zt / 2 - te, qe = d.imageEl.offsetWidth || d.imageEl.clientWidth, xt = d.imageEl.offsetHeight || d.imageEl.clientHeight, it = qe * q.scale, Et = xt * q.scale, et = Math.min(Vt / 2 - it / 2, 0), St = Math.min(Zt / 2 - Et / 2, 0), Ze = -et, ft = -St, Ot > 0 && At && typeof g.currentX == "number" && typeof g.currentY == "number" ? (Te = g.currentX * q.scale / Ot, ze = g.currentY * q.scale / Ot) : (Te = ve * q.scale, ze = oe * q.scale), Te < et && (Te = et), Te > Ze && (Te = Ze), ze < St && (ze = St), ze > ft && (ze = ft)) : (Te = 0, ze = 0), At && q.scale === 1 && (d.originX = 0, d.originY = 0), g.currentX = Te, g.currentY = ze, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${Te}px, ${ze}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${q.scale})`;
  }
  function be() {
    const F = e.zoom, q = e.params.zoom;
    if (!d.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = Er(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex];
      let X = d.slideEl.querySelector(`.${q.containerClass}`);
      X && (X = X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = X, X ? d.imageWrapEl = Ji(d.imageEl, `.${q.containerClass}`)[0] : d.imageWrapEl = void 0;
    }
    !d.imageEl || !d.imageWrapEl || (d.maxRatio = C(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), F.scale = 1, l = 1, g.currentX = void 0, g.currentY = void 0, g.touchesStart.x = void 0, g.touchesStart.y = void 0, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${q.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0, e.params.zoom.panOnMouseMove && (c = {
      x: 0,
      y: 0
    }, p && (p = !1, g.startX = 0, g.startY = 0)));
  }
  function Y(F) {
    const q = e.zoom;
    q.scale && q.scale !== 1 ? be() : ee(F);
  }
  function Z() {
    const F = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, q = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: F,
      activeListenerWithCapture: q
    };
  }
  function de() {
    const F = e.zoom;
    if (F.enabled) return;
    F.enabled = !0;
    const {
      passiveListener: q,
      activeListenerWithCapture: X
    } = Z();
    e.wrapperEl.addEventListener("pointerdown", W, q), e.wrapperEl.addEventListener("pointermove", P, X), ["pointerup", "pointercancel", "pointerout"].forEach((le) => {
      e.wrapperEl.addEventListener(le, N, q);
    }), e.wrapperEl.addEventListener("pointermove", D, X);
  }
  function pe() {
    const F = e.zoom;
    if (!F.enabled) return;
    F.enabled = !1;
    const {
      passiveListener: q,
      activeListenerWithCapture: X
    } = Z();
    e.wrapperEl.removeEventListener("pointerdown", W, q), e.wrapperEl.removeEventListener("pointermove", P, X), ["pointerup", "pointercancel", "pointerout"].forEach((le) => {
      e.wrapperEl.removeEventListener(le, N, q);
    }), e.wrapperEl.removeEventListener("pointermove", D, X);
  }
  r("init", () => {
    e.params.zoom.enabled && de();
  }), r("destroy", () => {
    pe();
  }), r("touchStart", (F, q) => {
    e.zoom.enabled && V(q);
  }), r("touchEnd", (F, q) => {
    e.zoom.enabled && Q();
  }), r("doubleTap", (F, q) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && Y(q);
  }), r("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && ae();
  }), r("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && ae();
  }), Object.assign(e.zoom, {
    enable: de,
    disable: pe,
    in: ee,
    out: be,
    toggle: Y
  });
}
let Ja;
function MS() {
  const e = Dt(), n = bn();
  return {
    smoothScroll: n.documentElement && n.documentElement.style && "scrollBehavior" in n.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch)
  };
}
function Zd() {
  return Ja || (Ja = MS()), Ja;
}
let Za;
function IS({
  userAgent: e
} = {}) {
  const n = Zd(), r = Dt(), o = r.navigator.platform, s = e || r.navigator.userAgent, l = {
    ios: !1,
    android: !1
  }, u = r.screen.width, p = r.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let h = s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const y = s.match(/(iPod)(.*OS\s([\d_]+))?/), m = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = o === "Win32";
  let d = o === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !h && d && n.touch && g.indexOf(`${u}x${p}`) >= 0 && (h = s.match(/(Version)\/([\d.]+)/), h || (h = [0, 1, "13_0_0"]), d = !1), c && !w && (l.os = "android", l.android = !0), (h || m || y) && (l.os = "ios", l.ios = !0), l;
}
function Qd(e = {}) {
  return Za || (Za = IS(e)), Za;
}
let Qa;
function OS() {
  const e = Dt(), n = Qd();
  let r = !1;
  function o() {
    const p = e.navigator.userAgent.toLowerCase();
    return p.indexOf("safari") >= 0 && p.indexOf("chrome") < 0 && p.indexOf("android") < 0;
  }
  if (o()) {
    const p = String(e.navigator.userAgent);
    if (p.includes("Version/")) {
      const [c, h] = p.split("Version/")[1].split(" ")[0].split(".").map((y) => Number(y));
      r = c < 16 || c === 16 && h < 2;
    }
  }
  const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), l = o(), u = l || s && n.ios;
  return {
    isSafari: r || l,
    needPerspectiveFix: r,
    need3dFix: u,
    isWebView: s
  };
}
function ep() {
  return Qa || (Qa = OS()), Qa;
}
function zS({
  swiper: e,
  on: n,
  emit: r
}) {
  const o = Dt();
  let s = null, l = null;
  const u = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, p = () => {
    !e || e.destroyed || !e.initialized || (s = new ResizeObserver((y) => {
      l = o.requestAnimationFrame(() => {
        const {
          width: m,
          height: w
        } = e;
        let d = m, g = w;
        y.forEach(({
          contentBoxSize: S,
          contentRect: I,
          target: E
        }) => {
          E && E !== e.el || (d = I ? I.width : (S[0] || S).inlineSize, g = I ? I.height : (S[0] || S).blockSize);
        }), (d !== m || g !== w) && u();
      });
    }), s.observe(e.el));
  }, c = () => {
    l && o.cancelAnimationFrame(l), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
  }, h = () => {
    !e || e.destroyed || !e.initialized || r("orientationchange");
  };
  n("init", () => {
    if (e.params.resizeObserver && typeof o.ResizeObserver < "u") {
      p();
      return;
    }
    o.addEventListener("resize", u), o.addEventListener("orientationchange", h);
  }), n("destroy", () => {
    c(), o.removeEventListener("resize", u), o.removeEventListener("orientationchange", h);
  });
}
function AS({
  swiper: e,
  extendParams: n,
  on: r,
  emit: o
}) {
  const s = [], l = Dt(), u = (h, y = {}) => {
    const m = l.MutationObserver || l.WebkitMutationObserver, w = new m((d) => {
      if (e.__preventObserver__) return;
      if (d.length === 1) {
        o("observerUpdate", d[0]);
        return;
      }
      const g = function() {
        o("observerUpdate", d[0]);
      };
      l.requestAnimationFrame ? l.requestAnimationFrame(g) : l.setTimeout(g, 0);
    });
    w.observe(h, {
      attributes: typeof y.attributes > "u" ? !0 : y.attributes,
      childList: e.isElement || (typeof y.childList > "u" ? !0 : y).childList,
      characterData: typeof y.characterData > "u" ? !0 : y.characterData
    }), s.push(w);
  }, p = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const h = Ji(e.hostEl);
        for (let y = 0; y < h.length; y += 1)
          u(h[y]);
      }
      u(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), u(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    s.forEach((h) => {
      h.disconnect();
    }), s.splice(0, s.length);
  };
  n({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), r("init", p), r("destroy", c);
}
var PS = {
  on(e, n, r) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof n != "function") return o;
    const s = r ? "unshift" : "push";
    return e.split(" ").forEach((l) => {
      o.eventsListeners[l] || (o.eventsListeners[l] = []), o.eventsListeners[l][s](n);
    }), o;
  },
  once(e, n, r) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof n != "function") return o;
    function s(...l) {
      o.off(e, s), s.__emitterProxy && delete s.__emitterProxy, n.apply(o, l);
    }
    return s.__emitterProxy = n, o.on(e, s, r);
  },
  onAny(e, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const o = n ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[o](e), r;
  },
  offAny(e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsAnyListeners) return n;
    const r = n.eventsAnyListeners.indexOf(e);
    return r >= 0 && n.eventsAnyListeners.splice(r, 1), n;
  },
  off(e, n) {
    const r = this;
    return !r.eventsListeners || r.destroyed || !r.eventsListeners || e.split(" ").forEach((o) => {
      typeof n > "u" ? r.eventsListeners[o] = [] : r.eventsListeners[o] && r.eventsListeners[o].forEach((s, l) => {
        (s === n || s.__emitterProxy && s.__emitterProxy === n) && r.eventsListeners[o].splice(l, 1);
      });
    }), r;
  },
  emit(...e) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
    let r, o, s;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (r = e[0], o = e.slice(1, e.length), s = n) : (r = e[0].events, o = e[0].data, s = e[0].context || n), o.unshift(s), (Array.isArray(r) ? r : r.split(" ")).forEach((u) => {
      n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach((p) => {
        p.apply(s, [u, ...o]);
      }), n.eventsListeners && n.eventsListeners[u] && n.eventsListeners[u].forEach((p) => {
        p.apply(s, o);
      });
    }), n;
  }
};
function RS() {
  const e = this;
  let n, r;
  const o = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? n = e.params.width : n = o.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = o.clientHeight, !(n === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (n = n - parseInt(mn(o, "padding-left") || 0, 10) - parseInt(mn(o, "padding-right") || 0, 10), r = r - parseInt(mn(o, "padding-top") || 0, 10) - parseInt(mn(o, "padding-bottom") || 0, 10), Number.isNaN(n) && (n = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: n,
    height: r,
    size: e.isHorizontal() ? n : r
  }));
}
function $S() {
  const e = this;
  function n(k, B) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(B)) || 0);
  }
  const r = e.params, {
    wrapperEl: o,
    slidesEl: s,
    rtlTranslate: l,
    wrongRTL: u
  } = e, p = e.virtual && r.virtual.enabled, c = p ? e.virtual.slides.length : e.slides.length, h = Er(s, `.${e.params.slideClass}, swiper-slide`), y = p ? e.virtual.slides.length : h.length;
  let m = [];
  const w = [], d = [];
  let g = r.slidesOffsetBefore;
  typeof g == "function" && (g = r.slidesOffsetBefore.call(e));
  let S = r.slidesOffsetAfter;
  typeof S == "function" && (S = r.slidesOffsetAfter.call(e));
  const I = e.snapGrid.length, E = e.slidesGrid.length, C = e.size - g - S;
  let T = r.spaceBetween, R = -g, z = 0, j = 0;
  if (typeof C > "u")
    return;
  typeof T == "string" && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * C : typeof T == "string" && (T = parseFloat(T)), e.virtualSize = -T - g - S, h.forEach((k) => {
    l ? k.style.marginLeft = "" : k.style.marginRight = "", k.style.marginBottom = "", k.style.marginTop = "";
  }), r.centeredSlides && r.cssMode && (ai(o, "--swiper-centered-offset-before", ""), ai(o, "--swiper-centered-offset-after", "")), r.cssMode && (ai(o, "--swiper-slides-offset-before", `${g}px`), ai(o, "--swiper-slides-offset-after", `${S}px`));
  const W = r.grid && r.grid.rows > 1 && e.grid;
  W ? e.grid.initSlides(h) : e.grid && e.grid.unsetSlides();
  let P;
  const N = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter((k) => typeof r.breakpoints[k].slidesPerView < "u").length > 0;
  for (let k = 0; k < y; k += 1) {
    P = 0;
    const B = h[k];
    if (!(B && (W && e.grid.updateSlide(k, B, h), mn(B, "display") === "none"))) {
      if (p && r.slidesPerView === "auto")
        r.virtual.slidesPerViewAutoSlideSize && (P = r.virtual.slidesPerViewAutoSlideSize), P && B && (r.roundLengths && (P = Math.floor(P)), B.style[e.getDirectionLabel("width")] = `${P}px`);
      else if (r.slidesPerView === "auto") {
        N && (B.style[e.getDirectionLabel("width")] = "");
        const b = getComputedStyle(B), V = B.style.transform, D = B.style.webkitTransform;
        if (V && (B.style.transform = "none"), D && (B.style.webkitTransform = "none"), r.roundLengths)
          P = e.isHorizontal() ? Sl(B, "width") : Sl(B, "height");
        else {
          const Q = n(b, "width"), ae = n(b, "padding-left"), fe = n(b, "padding-right"), ee = n(b, "margin-left"), be = n(b, "margin-right"), Y = b.getPropertyValue("box-sizing");
          if (Y && Y === "border-box")
            P = Q + ee + be;
          else {
            const {
              clientWidth: Z,
              offsetWidth: de
            } = B;
            P = Q + ae + fe + ee + be + (de - Z);
          }
        }
        V && (B.style.transform = V), D && (B.style.webkitTransform = D), r.roundLengths && (P = Math.floor(P));
      } else
        P = (C - (r.slidesPerView - 1) * T) / r.slidesPerView, r.roundLengths && (P = Math.floor(P)), B && (B.style[e.getDirectionLabel("width")] = `${P}px`);
      B && (B.swiperSlideSize = P), d.push(P), r.centeredSlides ? (R = R + P / 2 + z / 2 + T, z === 0 && k !== 0 && (R = R - C / 2 - T), k === 0 && (R = R - C / 2 - T), Math.abs(R) < 1 / 1e3 && (R = 0), r.roundLengths && (R = Math.floor(R)), j % r.slidesPerGroup === 0 && m.push(R), w.push(R)) : (r.roundLengths && (R = Math.floor(R)), (j - Math.min(e.params.slidesPerGroupSkip, j)) % e.params.slidesPerGroup === 0 && m.push(R), w.push(R), R = R + P + T), e.virtualSize += P + T, z = P, j += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, C) + S, l && u && (r.effect === "slide" || r.effect === "coverflow") && (o.style.width = `${e.virtualSize + T}px`), r.setWrapperSize && (o.style[e.getDirectionLabel("width")] = `${e.virtualSize + T}px`), W && e.grid.updateWrapperSize(P, m), !r.centeredSlides) {
    const k = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0, B = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || k);
    let b = m.length;
    if (B) {
      let D;
      if (r.slidesPerView === "auto") {
        D = 1;
        let Q = 0;
        for (let ae = d.length - 1; ae >= 0 && (Q += d[ae] + (ae < d.length - 1 ? T : 0), Q <= C); ae -= 1)
          D = d.length - ae;
      } else
        D = Math.floor(r.slidesPerView);
      b = Math.max(y - D, 0);
    }
    const V = [];
    for (let D = 0; D < m.length; D += 1) {
      let Q = m[D];
      r.roundLengths && (Q = Math.floor(Q)), B ? D <= b && V.push(Q) : m[D] <= e.virtualSize - C && V.push(Q);
    }
    m = V, Math.floor(e.virtualSize - C) - Math.floor(m[m.length - 1]) > 1 && (B || m.push(e.virtualSize - C));
  }
  if (p && r.loop) {
    const k = d[0] + T;
    if (r.slidesPerGroup > 1) {
      const B = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), b = k * r.slidesPerGroup;
      for (let V = 0; V < B; V += 1)
        m.push(m[m.length - 1] + b);
    }
    for (let B = 0; B < e.virtual.slidesBefore + e.virtual.slidesAfter; B += 1)
      r.slidesPerGroup === 1 && m.push(m[m.length - 1] + k), w.push(w[w.length - 1] + k), e.virtualSize += k;
  }
  if (m.length === 0 && (m = [0]), T !== 0) {
    const k = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    h.filter((B, b) => !r.cssMode || r.loop ? !0 : b !== h.length - 1).forEach((B) => {
      B.style[k] = `${T}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let k = 0;
    d.forEach((b) => {
      k += b + (T || 0);
    }), k -= T;
    const B = k > C ? k - C : 0;
    m = m.map((b) => b <= 0 ? -g : b > B ? B + S : b);
  }
  if (r.centerInsufficientSlides) {
    let k = 0;
    if (d.forEach((B) => {
      k += B + (T || 0);
    }), k -= T, k < C) {
      const B = (C - k) / 2;
      m.forEach((b, V) => {
        m[V] = b - B;
      }), w.forEach((b, V) => {
        w[V] = b + B;
      });
    }
  }
  if (Object.assign(e, {
    slides: h,
    snapGrid: m,
    slidesGrid: w,
    slidesSizesGrid: d
  }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    ai(o, "--swiper-centered-offset-before", `${-m[0]}px`), ai(o, "--swiper-centered-offset-after", `${e.size / 2 - d[d.length - 1] / 2}px`);
    const k = -e.snapGrid[0], B = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((b) => b + k), e.slidesGrid = e.slidesGrid.map((b) => b + B);
  }
  if (y !== c && e.emit("slidesLengthChange"), m.length !== I && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), w.length !== E && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !p && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const k = `${r.containerModifierClass}backface-hidden`, B = e.el.classList.contains(k);
    y <= r.maxBackfaceHiddenSlides ? B || e.el.classList.add(k) : B && e.el.classList.remove(k);
  }
}
function LS(e) {
  const n = this, r = [], o = n.virtual && n.params.virtual.enabled;
  let s = 0, l;
  typeof e == "number" ? n.setTransition(e) : e === !0 && n.setTransition(n.params.speed);
  const u = (p) => o ? n.slides[n.getSlideIndexByData(p)] : n.slides[p];
  if (n.params.slidesPerView !== "auto" && n.params.slidesPerView > 1)
    if (n.params.centeredSlides)
      (n.visibleSlides || []).forEach((p) => {
        r.push(p);
      });
    else
      for (l = 0; l < Math.ceil(n.params.slidesPerView); l += 1) {
        const p = n.activeIndex + l;
        if (p > n.slides.length && !o) break;
        r.push(u(p));
      }
  else
    r.push(u(n.activeIndex));
  for (l = 0; l < r.length; l += 1)
    if (typeof r[l] < "u") {
      const p = r[l].offsetHeight;
      s = p > s ? p : s;
    }
  (s || s === 0) && (n.wrapperEl.style.height = `${s}px`);
}
function kS() {
  const e = this, n = e.slides, r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let o = 0; o < n.length; o += 1)
    n[o].swiperSlideOffset = (e.isHorizontal() ? n[o].offsetLeft : n[o].offsetTop) - r - e.cssOverflowAdjustment();
}
const Xf = (e, n, r) => {
  n && !e.classList.contains(r) ? e.classList.add(r) : !n && e.classList.contains(r) && e.classList.remove(r);
};
function DS(e = this && this.translate || 0) {
  const n = this, r = n.params, {
    slides: o,
    rtlTranslate: s,
    snapGrid: l
  } = n;
  if (o.length === 0) return;
  typeof o[0].swiperSlideOffset > "u" && n.updateSlidesOffset();
  let u = -e;
  s && (u = e), n.visibleSlidesIndexes = [], n.visibleSlides = [];
  let p = r.spaceBetween;
  typeof p == "string" && p.indexOf("%") >= 0 ? p = parseFloat(p.replace("%", "")) / 100 * n.size : typeof p == "string" && (p = parseFloat(p));
  for (let c = 0; c < o.length; c += 1) {
    const h = o[c];
    let y = h.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (y -= o[0].swiperSlideOffset);
    const m = (u + (r.centeredSlides ? n.minTranslate() : 0) - y) / (h.swiperSlideSize + p), w = (u - l[0] + (r.centeredSlides ? n.minTranslate() : 0) - y) / (h.swiperSlideSize + p), d = -(u - y), g = d + n.slidesSizesGrid[c], S = d >= 0 && d <= n.size - n.slidesSizesGrid[c], I = d >= 0 && d < n.size - 1 || g > 1 && g <= n.size || d <= 0 && g >= n.size;
    I && (n.visibleSlides.push(h), n.visibleSlidesIndexes.push(c)), Xf(h, I, r.slideVisibleClass), Xf(h, S, r.slideFullyVisibleClass), h.progress = s ? -m : m, h.originalProgress = s ? -w : w;
  }
}
function WS(e) {
  const n = this;
  if (typeof e > "u") {
    const y = n.rtlTranslate ? -1 : 1;
    e = n && n.translate && n.translate * y || 0;
  }
  const r = n.params, o = n.maxTranslate() - n.minTranslate();
  let {
    progress: s,
    isBeginning: l,
    isEnd: u,
    progressLoop: p
  } = n;
  const c = l, h = u;
  if (o === 0)
    s = 0, l = !0, u = !0;
  else {
    s = (e - n.minTranslate()) / o;
    const y = Math.abs(e - n.minTranslate()) < 1, m = Math.abs(e - n.maxTranslate()) < 1;
    l = y || s <= 0, u = m || s >= 1, y && (s = 0), m && (s = 1);
  }
  if (r.loop) {
    const y = n.getSlideIndexByData(0), m = n.getSlideIndexByData(n.slides.length - 1), w = n.slidesGrid[y], d = n.slidesGrid[m], g = n.slidesGrid[n.slidesGrid.length - 1], S = Math.abs(e);
    S >= w ? p = (S - w) / g : p = (S + g - d) / g, p > 1 && (p -= 1);
  }
  Object.assign(n, {
    progress: s,
    progressLoop: p,
    isBeginning: l,
    isEnd: u
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && n.updateSlidesProgress(e), l && !c && n.emit("reachBeginning toEdge"), u && !h && n.emit("reachEnd toEdge"), (c && !l || h && !u) && n.emit("fromEdge"), n.emit("progress", s);
}
const el = (e, n, r) => {
  n && !e.classList.contains(r) ? e.classList.add(r) : !n && e.classList.contains(r) && e.classList.remove(r);
};
function NS() {
  const e = this, {
    slides: n,
    params: r,
    slidesEl: o,
    activeIndex: s
  } = e, l = e.virtual && r.virtual.enabled, u = e.grid && r.grid && r.grid.rows > 1, p = (m) => Er(o, `.${r.slideClass}${m}, swiper-slide${m}`)[0];
  let c, h, y;
  if (l)
    if (r.loop) {
      let m = s - e.virtual.slidesBefore;
      m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), c = p(`[data-swiper-slide-index="${m}"]`);
    } else
      c = p(`[data-swiper-slide-index="${s}"]`);
  else
    u ? (c = n.find((m) => m.column === s), y = n.find((m) => m.column === s + 1), h = n.find((m) => m.column === s - 1)) : c = n[s];
  c && (u || (y = _S(c, `.${r.slideClass}, swiper-slide`)[0], r.loop && !y && (y = n[0]), h = wS(c, `.${r.slideClass}, swiper-slide`)[0], r.loop && !h === 0 && (h = n[n.length - 1]))), n.forEach((m) => {
    el(m, m === c, r.slideActiveClass), el(m, m === y, r.slideNextClass), el(m, m === h, r.slidePrevClass);
  }), e.emitSlidesClasses();
}
const ns = (e, n) => {
  if (!e || e.destroyed || !e.params) return;
  const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, o = n.closest(r());
  if (o) {
    let s = o.querySelector(`.${e.params.lazyPreloaderClass}`);
    !s && e.isElement && (o.shadowRoot ? s = o.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      o.shadowRoot && (s = o.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && !s.lazyPreloaderManaged && s.remove());
    })), s && !s.lazyPreloaderManaged && s.remove();
  }
}, tl = (e, n) => {
  if (!e.slides[n]) return;
  const r = e.slides[n].querySelector('[loading="lazy"]');
  r && r.removeAttribute("loading");
}, wl = (e) => {
  if (!e || e.destroyed || !e.params) return;
  let n = e.params.lazyPreloadPrevNext;
  const r = e.slides.length;
  if (!r || !n || n < 0) return;
  n = Math.min(n, r);
  const o = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), s = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const u = s, p = [u - n];
    p.push(...Array.from({
      length: n
    }).map((c, h) => u + o + h)), e.slides.forEach((c, h) => {
      p.includes(c.column) && tl(e, h);
    });
    return;
  }
  const l = s + o - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = s - n; u <= l + n; u += 1) {
      const p = (u % r + r) % r;
      (p < s || p > l) && tl(e, p);
    }
  else
    for (let u = Math.max(s - n, 0); u <= Math.min(l + n, r - 1); u += 1)
      u !== s && (u > l || u < s) && tl(e, u);
};
function BS(e) {
  const {
    slidesGrid: n,
    params: r
  } = e, o = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let l = 0; l < n.length; l += 1)
    typeof n[l + 1] < "u" ? o >= n[l] && o < n[l + 1] - (n[l + 1] - n[l]) / 2 ? s = l : o >= n[l] && o < n[l + 1] && (s = l + 1) : o >= n[l] && (s = l);
  return r.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function FS(e) {
  const n = this, r = n.rtlTranslate ? n.translate : -n.translate, {
    snapGrid: o,
    params: s,
    activeIndex: l,
    realIndex: u,
    snapIndex: p
  } = n;
  let c = e, h;
  const y = (d) => {
    let g = d - n.virtual.slidesBefore;
    return g < 0 && (g = n.virtual.slides.length + g), g >= n.virtual.slides.length && (g -= n.virtual.slides.length), g;
  };
  if (typeof c > "u" && (c = BS(n)), o.indexOf(r) >= 0)
    h = o.indexOf(r);
  else {
    const d = Math.min(s.slidesPerGroupSkip, c);
    h = d + Math.floor((c - d) / s.slidesPerGroup);
  }
  if (h >= o.length && (h = o.length - 1), c === l && !n.params.loop) {
    h !== p && (n.snapIndex = h, n.emit("snapIndexChange"));
    return;
  }
  if (c === l && n.params.loop && n.virtual && n.params.virtual.enabled) {
    n.realIndex = y(c);
    return;
  }
  const m = n.grid && s.grid && s.grid.rows > 1;
  let w;
  if (n.virtual && s.virtual.enabled)
    s.loop ? w = y(c) : w = c;
  else if (m) {
    const d = n.slides.find((S) => S.column === c);
    let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(n.slides.indexOf(d), 0)), w = Math.floor(g / s.grid.rows);
  } else if (n.slides[c]) {
    const d = n.slides[c].getAttribute("data-swiper-slide-index");
    d ? w = parseInt(d, 10) : w = c;
  } else
    w = c;
  Object.assign(n, {
    previousSnapIndex: p,
    snapIndex: h,
    previousRealIndex: u,
    realIndex: w,
    previousIndex: l,
    activeIndex: c
  }), n.initialized && wl(n), n.emit("activeIndexChange"), n.emit("snapIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && (u !== w && n.emit("realIndexChange"), n.emit("slideChange"));
}
function VS(e, n) {
  const r = this, o = r.params;
  let s = e.closest(`.${o.slideClass}, swiper-slide`);
  !s && r.isElement && n && n.length > 1 && n.includes(e) && [...n.slice(n.indexOf(e) + 1, n.length)].forEach((p) => {
    !s && p.matches && p.matches(`.${o.slideClass}, swiper-slide`) && (s = p);
  });
  let l = !1, u;
  if (s) {
    for (let p = 0; p < r.slides.length; p += 1)
      if (r.slides[p] === s) {
        l = !0, u = p;
        break;
      }
  }
  if (s && l)
    r.clickedSlide = s, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = u;
  else {
    r.clickedSlide = void 0, r.clickedIndex = void 0;
    return;
  }
  o.slideToClickedSlide && r.clickedIndex !== void 0 && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide();
}
var GS = {
  updateSize: RS,
  updateSlides: $S,
  updateAutoHeight: LS,
  updateSlidesOffset: kS,
  updateSlidesProgress: DS,
  updateProgress: WS,
  updateSlidesClasses: NS,
  updateActiveIndex: FS,
  updateClickedSlide: VS
};
function jS(e = this.isHorizontal() ? "x" : "y") {
  const n = this, {
    params: r,
    rtlTranslate: o,
    translate: s,
    wrapperEl: l
  } = n;
  if (r.virtualTranslate)
    return o ? -s : s;
  if (r.cssMode)
    return s;
  let u = xl(l, e);
  return u += n.cssOverflowAdjustment(), o && (u = -u), u || 0;
}
function YS(e, n) {
  const r = this, {
    rtlTranslate: o,
    params: s,
    wrapperEl: l,
    progress: u
  } = r;
  let p = 0, c = 0;
  const h = 0;
  r.isHorizontal() ? p = o ? -e : e : c = e, s.roundLengths && (p = Math.floor(p), c = Math.floor(c)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? p : c, s.cssMode ? l[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -p : -c : s.virtualTranslate || (r.isHorizontal() ? p -= r.cssOverflowAdjustment() : c -= r.cssOverflowAdjustment(), l.style.transform = `translate3d(${p}px, ${c}px, ${h}px)`);
  let y;
  const m = r.maxTranslate() - r.minTranslate();
  m === 0 ? y = 0 : y = (e - r.minTranslate()) / m, y !== u && r.updateProgress(e), r.emit("setTranslate", r.translate, n);
}
function HS() {
  return -this.snapGrid[0];
}
function US() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function XS(e = 0, n = this.params.speed, r = !0, o = !0, s) {
  const l = this, {
    params: u,
    wrapperEl: p
  } = l;
  if (l.animating && u.preventInteractionOnTransition)
    return !1;
  const c = l.minTranslate(), h = l.maxTranslate();
  let y;
  if (o && e > c ? y = c : o && e < h ? y = h : y = e, l.updateProgress(y), u.cssMode) {
    const m = l.isHorizontal();
    if (n === 0)
      p[m ? "scrollLeft" : "scrollTop"] = -y;
    else {
      if (!l.support.smoothScroll)
        return Jd({
          swiper: l,
          targetPosition: -y,
          side: m ? "left" : "top"
        }), !0;
      p.scrollTo({
        [m ? "left" : "top"]: -y,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return n === 0 ? (l.setTransition(0), l.setTranslate(y), r && (l.emit("beforeTransitionStart", n, s), l.emit("transitionEnd"))) : (l.setTransition(n), l.setTranslate(y), r && (l.emit("beforeTransitionStart", n, s), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(w) {
    !l || l.destroyed || w.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, r && l.emit("transitionEnd"));
  }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0;
}
var qS = {
  getTranslate: jS,
  setTranslate: YS,
  minTranslate: HS,
  maxTranslate: US,
  translateTo: XS
};
function KS(e, n) {
  const r = this;
  r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), r.emit("setTransition", e, n);
}
function tp({
  swiper: e,
  runCallbacks: n,
  direction: r,
  step: o
}) {
  const {
    activeIndex: s,
    previousIndex: l
  } = e;
  let u = r;
  u || (s > l ? u = "next" : s < l ? u = "prev" : u = "reset"), e.emit(`transition${o}`), n && u === "reset" ? e.emit(`slideResetTransition${o}`) : n && s !== l && (e.emit(`slideChangeTransition${o}`), u === "next" ? e.emit(`slideNextTransition${o}`) : e.emit(`slidePrevTransition${o}`));
}
function JS(e = !0, n) {
  const r = this, {
    params: o
  } = r;
  o.cssMode || (o.autoHeight && r.updateAutoHeight(), tp({
    swiper: r,
    runCallbacks: e,
    direction: n,
    step: "Start"
  }));
}
function ZS(e = !0, n) {
  const r = this, {
    params: o
  } = r;
  r.animating = !1, !o.cssMode && (r.setTransition(0), tp({
    swiper: r,
    runCallbacks: e,
    direction: n,
    step: "End"
  }));
}
var QS = {
  setTransition: KS,
  transitionStart: JS,
  transitionEnd: ZS
};
function e1(e = 0, n, r = !0, o, s) {
  typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let u = e;
  u < 0 && (u = 0);
  const {
    params: p,
    snapGrid: c,
    slidesGrid: h,
    previousIndex: y,
    activeIndex: m,
    rtlTranslate: w,
    wrapperEl: d,
    enabled: g
  } = l;
  if (!g && !o && !s || l.destroyed || l.animating && p.preventInteractionOnTransition)
    return !1;
  typeof n > "u" && (n = l.params.speed);
  const S = Math.min(l.params.slidesPerGroupSkip, u);
  let I = S + Math.floor((u - S) / l.params.slidesPerGroup);
  I >= c.length && (I = c.length - 1);
  const E = -c[I];
  if (p.normalizeSlideIndex)
    for (let W = 0; W < h.length; W += 1) {
      const P = -Math.floor(E * 100), N = Math.floor(h[W] * 100), k = Math.floor(h[W + 1] * 100);
      typeof h[W + 1] < "u" ? P >= N && P < k - (k - N) / 2 ? u = W : P >= N && P < k && (u = W + 1) : P >= N && (u = W);
    }
  if (l.initialized && u !== m && (!l.allowSlideNext && (w ? E > l.translate && E > l.minTranslate() : E < l.translate && E < l.minTranslate()) || !l.allowSlidePrev && E > l.translate && E > l.maxTranslate() && (m || 0) !== u))
    return !1;
  u !== (y || 0) && r && l.emit("beforeSlideChangeStart"), l.updateProgress(E);
  let C;
  u > m ? C = "next" : u < m ? C = "prev" : C = "reset";
  const T = l.virtual && l.params.virtual.enabled;
  if (!(T && s) && (w && -E === l.translate || !w && E === l.translate))
    return l.updateActiveIndex(u), p.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), p.effect !== "slide" && l.setTranslate(E), C !== "reset" && (l.transitionStart(r, C), l.transitionEnd(r, C)), !1;
  if (p.cssMode) {
    const W = l.isHorizontal(), P = w ? E : -E;
    if (n === 0)
      T && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), T && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        d[W ? "scrollLeft" : "scrollTop"] = P;
      })) : d[W ? "scrollLeft" : "scrollTop"] = P, T && requestAnimationFrame(() => {
        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1;
      });
    else {
      if (!l.support.smoothScroll)
        return Jd({
          swiper: l,
          targetPosition: P,
          side: W ? "left" : "top"
        }), !0;
      d.scrollTo({
        [W ? "left" : "top"]: P,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const j = ep().isSafari;
  return T && !s && j && l.isElement && l.virtual.update(!1, !1, u), l.setTransition(n), l.setTranslate(E), l.updateActiveIndex(u), l.updateSlidesClasses(), l.emit("beforeTransitionStart", n, o), l.transitionStart(r, C), n === 0 ? l.transitionEnd(r, C) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(P) {
    !l || l.destroyed || P.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(r, C));
  }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0;
}
function t1(e = 0, n, r = !0, o) {
  typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  if (s.destroyed) return;
  typeof n > "u" && (n = s.params.speed);
  const l = s.grid && s.params.grid && s.params.grid.rows > 1;
  let u = e;
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled)
      u = u + s.virtual.slidesBefore;
    else {
      let p;
      if (l) {
        const S = u * s.params.grid.rows;
        p = s.slides.find((I) => I.getAttribute("data-swiper-slide-index") * 1 === S).column;
      } else
        p = s.getSlideIndexByData(u);
      const c = l ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, {
        centeredSlides: h,
        slidesOffsetBefore: y,
        slidesOffsetAfter: m
      } = s.params, w = h || !!y || !!m;
      let d = s.params.slidesPerView;
      d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)), w && d % 2 === 0 && (d = d + 1));
      let g = c - p < d;
      if (w && (g = g || p < Math.ceil(d / 2)), o && w && s.params.slidesPerView !== "auto" && !l && (g = !1), g) {
        const S = w ? p < s.activeIndex ? "prev" : "next" : p - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({
          direction: S,
          slideTo: !0,
          activeSlideIndex: S === "next" ? p + 1 : p - c + 1,
          slideRealIndex: S === "next" ? s.realIndex : void 0
        });
      }
      if (l) {
        const S = u * s.params.grid.rows;
        u = s.slides.find((I) => I.getAttribute("data-swiper-slide-index") * 1 === S).column;
      } else
        u = s.getSlideIndexByData(u);
    }
  return requestAnimationFrame(() => {
    s.slideTo(u, n, r, o);
  }), s;
}
function r1(e, n = !0, r) {
  const o = this, {
    enabled: s,
    params: l,
    animating: u
  } = o;
  if (!s || o.destroyed) return o;
  typeof e > "u" && (e = o.params.speed);
  let p = l.slidesPerGroup;
  l.slidesPerView === "auto" && l.slidesPerGroup === 1 && l.slidesPerGroupAuto && (p = Math.max(o.slidesPerViewDynamic("current", !0), 1));
  const c = o.activeIndex < l.slidesPerGroupSkip ? 1 : p, h = o.virtual && l.virtual.enabled;
  if (l.loop) {
    if (u && !h && l.loopPreventsSliding) return !1;
    if (o.loopFix({
      direction: "next"
    }), o._clientLeft = o.wrapperEl.clientLeft, o.activeIndex === o.slides.length - 1 && l.cssMode)
      return requestAnimationFrame(() => {
        o.slideTo(o.activeIndex + c, e, n, r);
      }), !0;
  }
  return l.rewind && o.isEnd ? o.slideTo(0, e, n, r) : o.slideTo(o.activeIndex + c, e, n, r);
}
function n1(e, n = !0, r) {
  const o = this, {
    params: s,
    snapGrid: l,
    slidesGrid: u,
    rtlTranslate: p,
    enabled: c,
    animating: h
  } = o;
  if (!c || o.destroyed) return o;
  typeof e > "u" && (e = o.params.speed);
  const y = o.virtual && s.virtual.enabled;
  if (s.loop) {
    if (h && !y && s.loopPreventsSliding) return !1;
    o.loopFix({
      direction: "prev"
    }), o._clientLeft = o.wrapperEl.clientLeft;
  }
  const m = p ? o.translate : -o.translate;
  function w(C) {
    return C < 0 ? -Math.floor(Math.abs(C)) : Math.floor(C);
  }
  const d = w(m), g = l.map((C) => w(C)), S = s.freeMode && s.freeMode.enabled;
  let I = l[g.indexOf(d) - 1];
  if (typeof I > "u" && (s.cssMode || S)) {
    let C;
    l.forEach((T, R) => {
      d >= T && (C = R);
    }), typeof C < "u" && (I = S ? l[C] : l[C > 0 ? C - 1 : C]);
  }
  let E = 0;
  if (typeof I < "u" && (E = u.indexOf(I), E < 0 && (E = o.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (E = E - o.slidesPerViewDynamic("previous", !0) + 1, E = Math.max(E, 0))), s.rewind && o.isBeginning) {
    const C = o.params.virtual && o.params.virtual.enabled && o.virtual ? o.virtual.slides.length - 1 : o.slides.length - 1;
    return o.slideTo(C, e, n, r);
  } else if (s.loop && o.activeIndex === 0 && s.cssMode)
    return requestAnimationFrame(() => {
      o.slideTo(E, e, n, r);
    }), !0;
  return o.slideTo(E, e, n, r);
}
function i1(e, n = !0, r) {
  const o = this;
  if (!o.destroyed)
    return typeof e > "u" && (e = o.params.speed), o.slideTo(o.activeIndex, e, n, r);
}
function o1(e, n = !0, r, o = 0.5) {
  const s = this;
  if (s.destroyed) return;
  typeof e > "u" && (e = s.params.speed);
  let l = s.activeIndex;
  const u = Math.min(s.params.slidesPerGroupSkip, l), p = u + Math.floor((l - u) / s.params.slidesPerGroup), c = s.rtlTranslate ? s.translate : -s.translate;
  if (c >= s.snapGrid[p]) {
    const h = s.snapGrid[p], y = s.snapGrid[p + 1];
    c - h > (y - h) * o && (l += s.params.slidesPerGroup);
  } else {
    const h = s.snapGrid[p - 1], y = s.snapGrid[p];
    c - h <= (y - h) * o && (l -= s.params.slidesPerGroup);
  }
  return l = Math.max(l, 0), l = Math.min(l, s.slidesGrid.length - 1), s.slideTo(l, e, n, r);
}
function s1() {
  const e = this;
  if (e.destroyed) return;
  const {
    params: n,
    slidesEl: r
  } = e, o = n.slidesPerView === "auto" ? e.slidesPerViewDynamic() : n.slidesPerView;
  let s = e.getSlideIndexWhenGrid(e.clickedIndex), l;
  const u = e.isElement ? "swiper-slide" : `.${n.slideClass}`, p = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (n.loop) {
    if (e.animating) return;
    l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), n.centeredSlides ? e.slideToLoop(l) : s > (p ? (e.slides.length - o) / 2 - (e.params.grid.rows - 1) : e.slides.length - o) ? (e.loopFix(), s = e.getSlideIndex(Er(r, `${u}[data-swiper-slide-index="${l}"]`)[0]), Kd(() => {
      e.slideTo(s);
    })) : e.slideTo(s);
  } else
    e.slideTo(s);
}
var a1 = {
  slideTo: e1,
  slideToLoop: t1,
  slideNext: r1,
  slidePrev: n1,
  slideReset: i1,
  slideToClosest: o1,
  slideToClickedSlide: s1
};
function l1(e, n) {
  const r = this, {
    params: o,
    slidesEl: s
  } = r;
  if (!o.loop || r.virtual && r.params.virtual.enabled) return;
  const l = () => {
    Er(s, `.${o.slideClass}, swiper-slide`).forEach((g, S) => {
      g.setAttribute("data-swiper-slide-index", S);
    });
  }, u = () => {
    const d = Er(s, `.${o.slideBlankClass}`);
    d.forEach((g) => {
      g.remove();
    }), d.length > 0 && (r.recalcSlides(), r.updateSlides());
  }, p = r.grid && o.grid && o.grid.rows > 1;
  o.loopAddBlankSlides && (o.slidesPerGroup > 1 || p) && u();
  const c = o.slidesPerGroup * (p ? o.grid.rows : 1), h = r.slides.length % c !== 0, y = p && r.slides.length % o.grid.rows !== 0, m = (d) => {
    for (let g = 0; g < d; g += 1) {
      const S = r.isElement ? us("swiper-slide", [o.slideBlankClass]) : us("div", [o.slideClass, o.slideBlankClass]);
      r.slidesEl.append(S);
    }
  };
  if (h) {
    if (o.loopAddBlankSlides) {
      const d = c - r.slides.length % c;
      m(d), r.recalcSlides(), r.updateSlides();
    } else
      ls("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    l();
  } else if (y) {
    if (o.loopAddBlankSlides) {
      const d = o.grid.rows - r.slides.length % o.grid.rows;
      m(d), r.recalcSlides(), r.updateSlides();
    } else
      ls("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    l();
  } else
    l();
  const w = o.centeredSlides || !!o.slidesOffsetBefore || !!o.slidesOffsetAfter;
  r.loopFix({
    slideRealIndex: e,
    direction: w ? void 0 : "next",
    initial: n
  });
}
function u1({
  slideRealIndex: e,
  slideTo: n = !0,
  direction: r,
  setTranslate: o,
  activeSlideIndex: s,
  initial: l,
  byController: u,
  byMousewheel: p
} = {}) {
  const c = this;
  if (!c.params.loop) return;
  c.emit("beforeLoopFix");
  const {
    slides: h,
    allowSlidePrev: y,
    allowSlideNext: m,
    slidesEl: w,
    params: d
  } = c, {
    centeredSlides: g,
    slidesOffsetBefore: S,
    slidesOffsetAfter: I,
    initialSlide: E
  } = d, C = g || !!S || !!I;
  if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && d.virtual.enabled) {
    n && (!C && c.snapIndex === 0 ? c.slideTo(c.virtual.slides.length, 0, !1, !0) : C && c.snapIndex < d.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)), c.allowSlidePrev = y, c.allowSlideNext = m, c.emit("loopFix");
    return;
  }
  let T = d.slidesPerView;
  T === "auto" ? T = c.slidesPerViewDynamic() : (T = Math.ceil(parseFloat(d.slidesPerView, 10)), C && T % 2 === 0 && (T = T + 1));
  const R = d.slidesPerGroupAuto ? T : d.slidesPerGroup;
  let z = C ? Math.max(R, Math.ceil(T / 2)) : R;
  z % R !== 0 && (z += R - z % R), z += d.loopAdditionalSlides, c.loopedSlides = z;
  const j = c.grid && d.grid && d.grid.rows > 1;
  h.length < T + z || c.params.effect === "cards" && h.length < T + z * 2 ? ls("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : j && d.grid.fill === "row" && ls("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const W = [], P = [], N = j ? Math.ceil(h.length / d.grid.rows) : h.length, k = l && N - E < T && !C;
  let B = k ? E : c.activeIndex;
  typeof s > "u" ? s = c.getSlideIndex(h.find((ee) => ee.classList.contains(d.slideActiveClass))) : B = s;
  const b = r === "next" || !r, V = r === "prev" || !r;
  let D = 0, Q = 0;
  const fe = (j ? h[s].column : s) + (C && typeof o > "u" ? -T / 2 + 0.5 : 0);
  if (fe < z) {
    D = Math.max(z - fe, R);
    for (let ee = 0; ee < z - fe; ee += 1) {
      const be = ee - Math.floor(ee / N) * N;
      if (j) {
        const Y = N - be - 1;
        for (let Z = h.length - 1; Z >= 0; Z -= 1)
          h[Z].column === Y && W.push(Z);
      } else
        W.push(N - be - 1);
    }
  } else if (fe + T > N - z) {
    Q = Math.max(fe - (N - z * 2), R), k && (Q = Math.max(Q, T - N + E + 1));
    for (let ee = 0; ee < Q; ee += 1) {
      const be = ee - Math.floor(ee / N) * N;
      j ? h.forEach((Y, Z) => {
        Y.column === be && P.push(Z);
      }) : P.push(be);
    }
  }
  if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
    c.__preventObserver__ = !1;
  }), c.params.effect === "cards" && h.length < T + z * 2 && (P.includes(s) && P.splice(P.indexOf(s), 1), W.includes(s) && W.splice(W.indexOf(s), 1)), V && W.forEach((ee) => {
    h[ee].swiperLoopMoveDOM = !0, w.prepend(h[ee]), h[ee].swiperLoopMoveDOM = !1;
  }), b && P.forEach((ee) => {
    h[ee].swiperLoopMoveDOM = !0, w.append(h[ee]), h[ee].swiperLoopMoveDOM = !1;
  }), c.recalcSlides(), d.slidesPerView === "auto" ? c.updateSlides() : j && (W.length > 0 && V || P.length > 0 && b) && c.slides.forEach((ee, be) => {
    c.grid.updateSlide(be, ee, c.slides);
  }), d.watchSlidesProgress && c.updateSlidesOffset(), n) {
    if (W.length > 0 && V) {
      if (typeof e > "u") {
        const ee = c.slidesGrid[B], Y = c.slidesGrid[B + D] - ee;
        p ? c.setTranslate(c.translate - Y) : (c.slideTo(B + Math.ceil(D), 0, !1, !0), o && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - Y, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - Y));
      } else if (o) {
        const ee = j ? W.length / d.grid.rows : W.length;
        c.slideTo(c.activeIndex + ee, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate;
      }
    } else if (P.length > 0 && b)
      if (typeof e > "u") {
        const ee = c.slidesGrid[B], Y = c.slidesGrid[B - Q] - ee;
        p ? c.setTranslate(c.translate - Y) : (c.slideTo(B - Q, 0, !1, !0), o && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - Y, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - Y));
      } else {
        const ee = j ? P.length / d.grid.rows : P.length;
        c.slideTo(c.activeIndex - ee, 0, !1, !0);
      }
  }
  if (c.allowSlidePrev = y, c.allowSlideNext = m, c.controller && c.controller.control && !u) {
    const ee = {
      slideRealIndex: e,
      direction: r,
      setTranslate: o,
      activeSlideIndex: s,
      byController: !0
    };
    Array.isArray(c.controller.control) ? c.controller.control.forEach((be) => {
      !be.destroyed && be.params.loop && be.loopFix({
        ...ee,
        slideTo: be.params.slidesPerView === d.slidesPerView ? n : !1
      });
    }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
      ...ee,
      slideTo: c.controller.control.params.slidesPerView === d.slidesPerView ? n : !1
    });
  }
  c.emit("loopFix");
}
function c1() {
  const e = this, {
    params: n,
    slidesEl: r
  } = e;
  if (!n.loop || !r || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const o = [];
  e.slides.forEach((s) => {
    const l = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
    o[l] = s;
  }), e.slides.forEach((s) => {
    s.removeAttribute("data-swiper-slide-index");
  }), o.forEach((s) => {
    r.append(s);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var f1 = {
  loopCreate: l1,
  loopFix: u1,
  loopDestroy: c1
};
function d1(e) {
  const n = this;
  if (!n.params.simulateTouch || n.params.watchOverflow && n.isLocked || n.params.cssMode) return;
  const r = n.params.touchEventsTarget === "container" ? n.el : n.wrapperEl;
  n.isElement && (n.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", n.isElement && requestAnimationFrame(() => {
    n.__preventObserver__ = !1;
  });
}
function p1() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var h1 = {
  setGrabCursor: d1,
  unsetGrabCursor: p1
};
function g1(e, n = this) {
  function r(o) {
    if (!o || o === bn() || o === Dt()) return null;
    o.assignedSlot && (o = o.assignedSlot);
    const s = o.closest(e);
    return !s && !o.getRootNode ? null : s || r(o.getRootNode().host);
  }
  return r(n);
}
function qf(e, n, r) {
  const o = Dt(), {
    params: s
  } = e, l = s.edgeSwipeDetection, u = s.edgeSwipeThreshold;
  return l && (r <= u || r >= o.innerWidth - u) ? l === "prevent" ? (n.preventDefault(), !0) : !1 : !0;
}
function m1(e) {
  const n = this, r = bn();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  const s = n.touchEventsData;
  if (o.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== o.pointerId)
      return;
    s.pointerId = o.pointerId;
  } else o.type === "touchstart" && o.targetTouches.length === 1 && (s.touchId = o.targetTouches[0].identifier);
  if (o.type === "touchstart") {
    qf(n, o, o.targetTouches[0].pageX);
    return;
  }
  const {
    params: l,
    touches: u,
    enabled: p
  } = n;
  if (!p || !l.simulateTouch && o.pointerType === "mouse" || n.animating && l.preventInteractionOnTransition)
    return;
  !n.animating && l.cssMode && l.loop && n.loopFix();
  let c = o.target;
  if (l.touchEventsTarget === "wrapper" && !SS(c, n.wrapperEl) || "which" in o && o.which === 3 || "button" in o && o.button > 0 || s.isTouched && s.isMoved) return;
  const h = !!l.noSwipingClass && l.noSwipingClass !== "", y = o.composedPath ? o.composedPath() : o.path;
  h && o.target && o.target.shadowRoot && y && (c = y[0]);
  const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, w = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (w ? g1(m, c) : c.closest(m))) {
    n.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !c.closest(l.swipeHandler))
    return;
  u.currentX = o.pageX, u.currentY = o.pageY;
  const d = u.currentX, g = u.currentY;
  if (!qf(n, o, d))
    return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), u.startX = d, u.startY = g, s.touchStartTime = as(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, l.threshold > 0 && (s.allowThresholdMove = !1);
  let S = !0;
  c.matches(s.focusableElements) && (S = !1, c.nodeName === "SELECT" && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && (o.pointerType === "mouse" || o.pointerType !== "mouse" && !c.matches(s.focusableElements)) && r.activeElement.blur();
  const I = S && n.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || I) && !c.isContentEditable && o.preventDefault(), l.freeMode && l.freeMode.enabled && n.freeMode && n.animating && !l.cssMode && n.freeMode.onTouchStart(), n.emit("touchStart", o);
}
function v1(e) {
  const n = bn(), r = this, o = r.touchEventsData, {
    params: s,
    touches: l,
    rtlTranslate: u,
    enabled: p
  } = r;
  if (!p || !s.simulateTouch && e.pointerType === "mouse") return;
  let c = e;
  if (c.originalEvent && (c = c.originalEvent), c.type === "pointermove" && (o.touchId !== null || c.pointerId !== o.pointerId))
    return;
  let h;
  if (c.type === "touchmove") {
    if (h = [...c.changedTouches].find((z) => z.identifier === o.touchId), !h || h.identifier !== o.touchId) return;
  } else
    h = c;
  if (!o.isTouched) {
    o.startMoving && o.isScrolling && r.emit("touchMoveOpposite", c);
    return;
  }
  const y = h.pageX, m = h.pageY;
  if (c.preventedByNestedSwiper) {
    l.startX = y, l.startY = m;
    return;
  }
  if (!r.allowTouchMove) {
    c.target.matches(o.focusableElements) || (r.allowClick = !1), o.isTouched && (Object.assign(l, {
      startX: y,
      startY: m,
      currentX: y,
      currentY: m
    }), o.touchStartTime = as());
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop)
    if (r.isVertical()) {
      if (m < l.startY && r.translate <= r.maxTranslate() || m > l.startY && r.translate >= r.minTranslate()) {
        o.isTouched = !1, o.isMoved = !1;
        return;
      }
    } else {
      if (u && (y > l.startX && -r.translate <= r.maxTranslate() || y < l.startX && -r.translate >= r.minTranslate()))
        return;
      if (!u && (y < l.startX && r.translate <= r.maxTranslate() || y > l.startX && r.translate >= r.minTranslate()))
        return;
    }
  if (n.activeElement && n.activeElement.matches(o.focusableElements) && n.activeElement !== c.target && c.pointerType !== "mouse" && n.activeElement.blur(), n.activeElement && c.target === n.activeElement && c.target.matches(o.focusableElements)) {
    o.isMoved = !0, r.allowClick = !1;
    return;
  }
  o.allowTouchCallbacks && r.emit("touchMove", c), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = y, l.currentY = m;
  const w = l.currentX - l.startX, d = l.currentY - l.startY;
  if (r.params.threshold && Math.sqrt(w ** 2 + d ** 2) < r.params.threshold) return;
  if (typeof o.isScrolling > "u") {
    let z;
    r.isHorizontal() && l.currentY === l.startY || r.isVertical() && l.currentX === l.startX ? o.isScrolling = !1 : w * w + d * d >= 25 && (z = Math.atan2(Math.abs(d), Math.abs(w)) * 180 / Math.PI, o.isScrolling = r.isHorizontal() ? z > s.touchAngle : 90 - z > s.touchAngle);
  }
  if (o.isScrolling && r.emit("touchMoveOpposite", c), typeof o.startMoving > "u" && (l.currentX !== l.startX || l.currentY !== l.startY) && (o.startMoving = !0), o.isScrolling || c.type === "touchmove" && o.preventTouchMoveFromPointerMove) {
    o.isTouched = !1;
    return;
  }
  if (!o.startMoving)
    return;
  r.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
  let g = r.isHorizontal() ? w : d, S = r.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  s.oneWayMovement && (g = Math.abs(g) * (u ? 1 : -1), S = Math.abs(S) * (u ? 1 : -1)), l.diff = g, g *= s.touchRatio, u && (g = -g, S = -S);
  const I = r.touchesDirection;
  r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = S > 0 ? "prev" : "next";
  const E = r.params.loop && !s.cssMode, C = r.touchesDirection === "next" && r.allowSlideNext || r.touchesDirection === "prev" && r.allowSlidePrev;
  if (!o.isMoved) {
    if (E && C && r.loopFix({
      direction: r.swipeDirection
    }), o.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
      const z = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      r.wrapperEl.dispatchEvent(z);
    }
    o.allowMomentumBounce = !1, s.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", c);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), s._loopSwapReset !== !1 && o.isMoved && o.allowThresholdMove && I !== r.touchesDirection && E && C && Math.abs(g) >= 1) {
    Object.assign(l, {
      startX: y,
      startY: m,
      currentX: y,
      currentY: m,
      startTranslate: o.currentTranslate
    }), o.loopSwapReset = !0, o.startTranslate = o.currentTranslate;
    return;
  }
  r.emit("sliderMove", c), o.isMoved = !0, o.currentTranslate = g + o.startTranslate;
  let T = !0, R = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (R = 0), g > 0 ? (E && C && o.allowThresholdMove && o.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - (s.slidesPerView !== "auto" && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), o.currentTranslate > r.minTranslate() && (T = !1, s.resistance && (o.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + o.startTranslate + g) ** R))) : g < 0 && (E && C && o.allowThresholdMove && o.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + (s.slidesPerView !== "auto" && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: r.slides.length - (s.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
  }), o.currentTranslate < r.maxTranslate() && (T = !1, s.resistance && (o.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - o.startTranslate - g) ** R))), T && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (o.currentTranslate = o.startTranslate), s.threshold > 0)
    if (Math.abs(g) > s.threshold || o.allowThresholdMove) {
      if (!o.allowThresholdMove) {
        o.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, o.currentTranslate = o.startTranslate, l.diff = r.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
        return;
      }
    } else {
      o.currentTranslate = o.startTranslate;
      return;
    }
  !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(o.currentTranslate), r.setTranslate(o.currentTranslate));
}
function y1(e) {
  const n = this, r = n.touchEventsData;
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let s;
  if (o.type === "touchend" || o.type === "touchcancel") {
    if (s = [...o.changedTouches].find((z) => z.identifier === r.touchId), !s || s.identifier !== r.touchId) return;
  } else {
    if (r.touchId !== null || o.pointerId !== r.pointerId) return;
    s = o;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(o.type) && !(["pointercancel", "contextmenu"].includes(o.type) && (n.browser.isSafari || n.browser.isWebView)))
    return;
  r.pointerId = null, r.touchId = null;
  const {
    params: u,
    touches: p,
    rtlTranslate: c,
    slidesGrid: h,
    enabled: y
  } = n;
  if (!y || !u.simulateTouch && o.pointerType === "mouse") return;
  if (r.allowTouchCallbacks && n.emit("touchEnd", o), r.allowTouchCallbacks = !1, !r.isTouched) {
    r.isMoved && u.grabCursor && n.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
    return;
  }
  u.grabCursor && r.isMoved && r.isTouched && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!1);
  const m = as(), w = m - r.touchStartTime;
  if (n.allowClick) {
    const z = o.path || o.composedPath && o.composedPath();
    n.updateClickedSlide(z && z[0] || o.target, z), n.emit("tap click", o), w < 300 && m - r.lastClickTime < 300 && n.emit("doubleTap doubleClick", o);
  }
  if (r.lastClickTime = as(), Kd(() => {
    n.destroyed || (n.allowClick = !0);
  }), !r.isTouched || !r.isMoved || !n.swipeDirection || p.diff === 0 && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
    return;
  }
  r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
  let d;
  if (u.followFinger ? d = c ? n.translate : -n.translate : d = -r.currentTranslate, u.cssMode)
    return;
  if (u.freeMode && u.freeMode.enabled) {
    n.freeMode.onTouchEnd({
      currentPos: d
    });
    return;
  }
  const g = d >= -n.maxTranslate() && !n.params.loop;
  let S = 0, I = n.slidesSizesGrid[0];
  for (let z = 0; z < h.length; z += z < u.slidesPerGroupSkip ? 1 : u.slidesPerGroup) {
    const j = z < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup;
    typeof h[z + j] < "u" ? (g || d >= h[z] && d < h[z + j]) && (S = z, I = h[z + j] - h[z]) : (g || d >= h[z]) && (S = z, I = h[h.length - 1] - h[h.length - 2]);
  }
  let E = null, C = null;
  u.rewind && (n.isBeginning ? C = u.virtual && u.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1 : n.isEnd && (E = 0));
  const T = (d - h[S]) / I, R = S < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup;
  if (w > u.longSwipesMs) {
    if (!u.longSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.swipeDirection === "next" && (T >= u.longSwipesRatio ? n.slideTo(u.rewind && n.isEnd ? E : S + R) : n.slideTo(S)), n.swipeDirection === "prev" && (T > 1 - u.longSwipesRatio ? n.slideTo(S + R) : C !== null && T < 0 && Math.abs(T) > u.longSwipesRatio ? n.slideTo(C) : n.slideTo(S));
  } else {
    if (!u.shortSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.navigation && (o.target === n.navigation.nextEl || o.target === n.navigation.prevEl) ? o.target === n.navigation.nextEl ? n.slideTo(S + R) : n.slideTo(S) : (n.swipeDirection === "next" && n.slideTo(E !== null ? E : S + R), n.swipeDirection === "prev" && n.slideTo(C !== null ? C : S));
  }
}
function Kf() {
  const e = this, {
    params: n,
    el: r
  } = e;
  if (r && r.offsetWidth === 0) return;
  n.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: o,
    allowSlidePrev: s,
    snapGrid: l
  } = e, u = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const p = u && n.loop;
  if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !p) {
    const c = u ? e.virtual.slides : e.slides;
    e.slideTo(c.length - 1, 0, !1, !0);
  } else
    e.params.loop && !u ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
  e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = s, e.allowSlideNext = o, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function b1(e) {
  const n = this;
  n.enabled && (n.allowClick || (n.params.preventClicks && e.preventDefault(), n.params.preventClicksPropagation && n.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function x1() {
  const e = this, {
    wrapperEl: n,
    rtlTranslate: r,
    enabled: o
  } = e;
  if (!o) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -n.scrollLeft : e.translate = -n.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let s;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / l, s !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function S1(e) {
  const n = this;
  ns(n, e.target), !(n.params.cssMode || n.params.slidesPerView !== "auto" && !n.params.autoHeight) && n.update();
}
function w1() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const rp = (e, n) => {
  const r = bn(), {
    params: o,
    el: s,
    wrapperEl: l,
    device: u
  } = e, p = !!o.nested, c = n === "on" ? "addEventListener" : "removeEventListener", h = n;
  !s || typeof s == "string" || (r[c]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: p
  }), s[c]("touchstart", e.onTouchStart, {
    passive: !1
  }), s[c]("pointerdown", e.onTouchStart, {
    passive: !1
  }), r[c]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: p
  }), r[c]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: p
  }), r[c]("touchend", e.onTouchEnd, {
    passive: !0
  }), r[c]("pointerup", e.onTouchEnd, {
    passive: !0
  }), r[c]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), r[c]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), r[c]("pointerout", e.onTouchEnd, {
    passive: !0
  }), r[c]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), r[c]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (o.preventClicks || o.preventClicksPropagation) && s[c]("click", e.onClick, !0), o.cssMode && l[c]("scroll", e.onScroll), o.updateOnWindowResize ? e[h](u.ios || u.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Kf, !0) : e[h]("observerUpdate", Kf, !0), s[c]("load", e.onLoad, {
    capture: !0
  }));
};
function _1() {
  const e = this, {
    params: n
  } = e;
  e.onTouchStart = m1.bind(e), e.onTouchMove = v1.bind(e), e.onTouchEnd = y1.bind(e), e.onDocumentTouchStart = w1.bind(e), n.cssMode && (e.onScroll = x1.bind(e)), e.onClick = b1.bind(e), e.onLoad = S1.bind(e), rp(e, "on");
}
function E1() {
  rp(this, "off");
}
var C1 = {
  attachEvents: _1,
  detachEvents: E1
};
const Jf = (e, n) => e.grid && n.grid && n.grid.rows > 1;
function T1() {
  const e = this, {
    realIndex: n,
    initialized: r,
    params: o,
    el: s
  } = e, l = o.breakpoints;
  if (!l || l && Object.keys(l).length === 0) return;
  const u = bn(), p = o.breakpointsBase === "window" || !o.breakpointsBase ? o.breakpointsBase : "container", c = ["window", "container"].includes(o.breakpointsBase) || !o.breakpointsBase ? e.el : u.querySelector(o.breakpointsBase), h = e.getBreakpoint(l, p, c);
  if (!h || e.currentBreakpoint === h) return;
  const m = (h in l ? l[h] : void 0) || e.originalParams, w = Jf(e, o), d = Jf(e, m), g = e.params.grabCursor, S = m.grabCursor, I = o.enabled;
  w && !d ? (s.classList.remove(`${o.containerModifierClass}grid`, `${o.containerModifierClass}grid-column`), e.emitContainerClasses()) : !w && d && (s.classList.add(`${o.containerModifierClass}grid`), (m.grid.fill && m.grid.fill === "column" || !m.grid.fill && o.grid.fill === "column") && s.classList.add(`${o.containerModifierClass}grid-column`), e.emitContainerClasses()), g && !S ? e.unsetGrabCursor() : !g && S && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((j) => {
    if (typeof m[j] > "u") return;
    const W = o[j] && o[j].enabled, P = m[j] && m[j].enabled;
    W && !P && e[j].disable(), !W && P && e[j].enable();
  });
  const E = m.direction && m.direction !== o.direction, C = o.loop && (m.slidesPerView !== o.slidesPerView || E), T = o.loop;
  E && r && e.changeDirection(), ar(e.params, m);
  const R = e.params.enabled, z = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), I && !R ? e.disable() : !I && R && e.enable(), e.currentBreakpoint = h, e.emit("_beforeBreakpoint", m), r && (C ? (e.loopDestroy(), e.loopCreate(n), e.updateSlides()) : !T && z ? (e.loopCreate(n), e.updateSlides()) : T && !z && e.loopDestroy()), e.emit("breakpoint", m);
}
function M1(e, n = "window", r) {
  if (!e || n === "container" && !r) return;
  let o = !1;
  const s = Dt(), l = n === "window" ? s.innerHeight : r.clientHeight, u = Object.keys(e).map((p) => {
    if (typeof p == "string" && p.indexOf("@") === 0) {
      const c = parseFloat(p.substr(1));
      return {
        value: l * c,
        point: p
      };
    }
    return {
      value: p,
      point: p
    };
  });
  u.sort((p, c) => parseInt(p.value, 10) - parseInt(c.value, 10));
  for (let p = 0; p < u.length; p += 1) {
    const {
      point: c,
      value: h
    } = u[p];
    n === "window" ? s.matchMedia(`(min-width: ${h}px)`).matches && (o = c) : h <= r.clientWidth && (o = c);
  }
  return o || "max";
}
var I1 = {
  setBreakpoint: T1,
  getBreakpoint: M1
};
function O1(e, n) {
  const r = [];
  return e.forEach((o) => {
    typeof o == "object" ? Object.keys(o).forEach((s) => {
      o[s] && r.push(n + s);
    }) : typeof o == "string" && r.push(n + o);
  }), r;
}
function z1() {
  const e = this, {
    classNames: n,
    params: r,
    rtl: o,
    el: s,
    device: l
  } = e, u = O1(["initialized", r.direction, {
    "free-mode": e.params.freeMode && r.freeMode.enabled
  }, {
    autoheight: r.autoHeight
  }, {
    rtl: o
  }, {
    grid: r.grid && r.grid.rows > 1
  }, {
    "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column"
  }, {
    android: l.android
  }, {
    ios: l.ios
  }, {
    "css-mode": r.cssMode
  }, {
    centered: r.cssMode && r.centeredSlides
  }, {
    "watch-progress": r.watchSlidesProgress
  }], r.containerModifierClass);
  n.push(...u), s.classList.add(...n), e.emitContainerClasses();
}
function A1() {
  const e = this, {
    el: n,
    classNames: r
  } = e;
  !n || typeof n == "string" || (n.classList.remove(...r), e.emitContainerClasses());
}
var P1 = {
  addClasses: z1,
  removeClasses: A1
};
function R1() {
  const e = this, {
    isLocked: n,
    params: r
  } = e, {
    slidesOffsetBefore: o
  } = r;
  if (o) {
    const s = e.slides.length - 1, l = e.slidesGrid[s] + e.slidesSizesGrid[s] + o * 2;
    e.isLocked = e.size > l;
  } else
    e.isLocked = e.snapGrid.length === 1;
  r.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), r.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), n && n !== e.isLocked && (e.isEnd = !1), n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var $1 = {
  checkOverflow: R1
}, _l = {
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
function L1(e, n) {
  return function(o = {}) {
    const s = Object.keys(o)[0], l = o[s];
    if (typeof l != "object" || l === null) {
      ar(n, o);
      return;
    }
    if (e[s] === !0 && (e[s] = {
      enabled: !0
    }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in l)) {
      ar(n, o);
      return;
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = {
      enabled: !1
    }), ar(n, o);
  };
}
const rl = {
  eventsEmitter: PS,
  update: GS,
  translate: qS,
  transition: QS,
  slide: a1,
  loop: f1,
  grabCursor: h1,
  events: C1,
  breakpoints: I1,
  checkOverflow: $1,
  classes: P1
}, nl = {};
let $l = class Qr {
  constructor(...n) {
    let r, o;
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? o = n[0] : [r, o] = n, o || (o = {}), o = ar({}, o), r && !o.el && (o.el = r);
    const s = bn();
    if (o.el && typeof o.el == "string" && s.querySelectorAll(o.el).length > 1) {
      const c = [];
      return s.querySelectorAll(o.el).forEach((h) => {
        const y = ar({}, o, {
          el: h
        });
        c.push(new Qr(y));
      }), c;
    }
    const l = this;
    l.__swiper__ = !0, l.support = Zd(), l.device = Qd({
      userAgent: o.userAgent
    }), l.browser = ep(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], o.modules && Array.isArray(o.modules) && o.modules.forEach((c) => {
      typeof c == "function" && l.modules.indexOf(c) < 0 && l.modules.push(c);
    });
    const u = {};
    l.modules.forEach((c) => {
      c({
        params: o,
        swiper: l,
        extendParams: L1(o, u),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const p = ar({}, _l, u);
    return l.params = ar({}, p, nl, o), l.originalParams = ar({}, l.params), l.passedParams = ar({}, o), l.params && l.params.on && Object.keys(l.params.on).forEach((c) => {
      l.on(c, l.params.on[c]);
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
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
        return l.params.direction === "horizontal";
      },
      isVertical() {
        return l.params.direction === "vertical";
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
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
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
        focusableElements: l.params.focusableElements,
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
      allowTouchMove: l.params.allowTouchMove,
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
    }), l.emit("_swiper"), l.params.init && l.init(), l;
  }
  getDirectionLabel(n) {
    return this.isHorizontal() ? n : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[n];
  }
  getSlideIndex(n) {
    const {
      slidesEl: r,
      params: o
    } = this, s = Er(r, `.${o.slideClass}, swiper-slide`), l = cs(s[0]);
    return cs(n) - l;
  }
  getSlideIndexByData(n) {
    return this.getSlideIndex(this.slides.find((r) => r.getAttribute("data-swiper-slide-index") * 1 === n));
  }
  getSlideIndexWhenGrid(n) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? n = Math.floor(n / this.params.grid.rows) : this.params.grid.fill === "row" && (n = n % Math.ceil(this.slides.length / this.params.grid.rows))), n;
  }
  recalcSlides() {
    const n = this, {
      slidesEl: r,
      params: o
    } = n;
    n.slides = Er(r, `.${o.slideClass}, swiper-slide`);
  }
  enable() {
    const n = this;
    n.enabled || (n.enabled = !0, n.params.grabCursor && n.setGrabCursor(), n.emit("enable"));
  }
  disable() {
    const n = this;
    n.enabled && (n.enabled = !1, n.params.grabCursor && n.unsetGrabCursor(), n.emit("disable"));
  }
  setProgress(n, r) {
    const o = this;
    n = Math.min(Math.max(n, 0), 1);
    const s = o.minTranslate(), u = (o.maxTranslate() - s) * n + s;
    o.translateTo(u, typeof r > "u" ? 0 : r), o.updateActiveIndex(), o.updateSlidesClasses();
  }
  emitContainerClasses() {
    const n = this;
    if (!n.params._emitClasses || !n.el) return;
    const r = n.el.className.split(" ").filter((o) => o.indexOf("swiper") === 0 || o.indexOf(n.params.containerModifierClass) === 0);
    n.emit("_containerClasses", r.join(" "));
  }
  getSlideClasses(n) {
    const r = this;
    return r.destroyed ? "" : n.className.split(" ").filter((o) => o.indexOf("swiper-slide") === 0 || o.indexOf(r.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const n = this;
    if (!n.params._emitClasses || !n.el) return;
    const r = [];
    n.slides.forEach((o) => {
      const s = n.getSlideClasses(o);
      r.push({
        slideEl: o,
        classNames: s
      }), n.emit("_slideClass", o, s);
    }), n.emit("_slideClasses", r);
  }
  slidesPerViewDynamic(n = "current", r = !1) {
    const o = this, {
      params: s,
      slides: l,
      slidesGrid: u,
      slidesSizesGrid: p,
      size: c,
      activeIndex: h
    } = o;
    let y = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let m = l[h] ? Math.ceil(l[h].swiperSlideSize) : 0, w;
      for (let d = h + 1; d < l.length; d += 1)
        l[d] && !w && (m += Math.ceil(l[d].swiperSlideSize), y += 1, m > c && (w = !0));
      for (let d = h - 1; d >= 0; d -= 1)
        l[d] && !w && (m += l[d].swiperSlideSize, y += 1, m > c && (w = !0));
    } else if (n === "current")
      for (let m = h + 1; m < l.length; m += 1)
        (r ? u[m] + p[m] - u[h] < c : u[m] - u[h] < c) && (y += 1);
    else
      for (let m = h - 1; m >= 0; m -= 1)
        u[h] - u[m] < c && (y += 1);
    return y;
  }
  update() {
    const n = this;
    if (!n || n.destroyed) return;
    const {
      snapGrid: r,
      params: o
    } = n;
    o.breakpoints && n.setBreakpoint(), [...n.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
      u.complete && ns(n, u);
    }), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses();
    function s() {
      const u = n.rtlTranslate ? n.translate * -1 : n.translate, p = Math.min(Math.max(u, n.maxTranslate()), n.minTranslate());
      n.setTranslate(p), n.updateActiveIndex(), n.updateSlidesClasses();
    }
    let l;
    if (o.freeMode && o.freeMode.enabled && !o.cssMode)
      s(), o.autoHeight && n.updateAutoHeight();
    else {
      if ((o.slidesPerView === "auto" || o.slidesPerView > 1) && n.isEnd && !o.centeredSlides) {
        const u = n.virtual && o.virtual.enabled ? n.virtual.slides : n.slides;
        l = n.slideTo(u.length - 1, 0, !1, !0);
      } else
        l = n.slideTo(n.activeIndex, 0, !1, !0);
      l || s();
    }
    o.watchOverflow && r !== n.snapGrid && n.checkOverflow(), n.emit("update");
  }
  changeDirection(n, r = !0) {
    const o = this, s = o.params.direction;
    return n || (n = s === "horizontal" ? "vertical" : "horizontal"), n === s || n !== "horizontal" && n !== "vertical" || (o.el.classList.remove(`${o.params.containerModifierClass}${s}`), o.el.classList.add(`${o.params.containerModifierClass}${n}`), o.emitContainerClasses(), o.params.direction = n, o.slides.forEach((l) => {
      n === "vertical" ? l.style.width = "" : l.style.height = "";
    }), o.emit("changeDirection"), r && o.update()), o;
  }
  changeLanguageDirection(n) {
    const r = this;
    r.rtl && n === "rtl" || !r.rtl && n === "ltr" || (r.rtl = n === "rtl", r.rtlTranslate = r.params.direction === "horizontal" && r.rtl, r.rtl ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`), r.el.dir = "rtl") : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`), r.el.dir = "ltr"), r.update());
  }
  mount(n) {
    const r = this;
    if (r.mounted) return !0;
    let o = n || r.params.el;
    if (typeof o == "string" && (o = document.querySelector(o)), !o)
      return !1;
    o.swiper = r, o.parentNode && o.parentNode.host && o.parentNode.host.nodeName === r.params.swiperElementNodeName.toUpperCase() && (r.isElement = !0);
    const s = () => `.${(r.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let u = o && o.shadowRoot && o.shadowRoot.querySelector ? o.shadowRoot.querySelector(s()) : Er(o, s())[0];
    return !u && r.params.createElements && (u = us("div", r.params.wrapperClass), o.append(u), Er(o, `.${r.params.slideClass}`).forEach((p) => {
      u.append(p);
    })), Object.assign(r, {
      el: o,
      wrapperEl: u,
      slidesEl: r.isElement && !o.parentNode.host.slideSlots ? o.parentNode.host : u,
      hostEl: r.isElement ? o.parentNode.host : o,
      mounted: !0,
      // RTL
      rtl: o.dir.toLowerCase() === "rtl" || mn(o, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (o.dir.toLowerCase() === "rtl" || mn(o, "direction") === "rtl"),
      wrongRTL: mn(u, "display") === "-webkit-box"
    }), !0;
  }
  init(n) {
    const r = this;
    if (r.initialized || r.mount(n) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(void 0, !0), r.attachEvents();
    const s = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && s.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((l) => {
      l.complete ? ns(r, l) : l.addEventListener("load", (u) => {
        ns(r, u.target);
      });
    }), wl(r), r.initialized = !0, wl(r), r.emit("init"), r.emit("afterInit"), r;
  }
  destroy(n = !0, r = !0) {
    const o = this, {
      params: s,
      el: l,
      wrapperEl: u,
      slides: p
    } = o;
    return typeof o.params > "u" || o.destroyed || (o.emit("beforeDestroy"), o.initialized = !1, o.detachEvents(), s.loop && o.loopDestroy(), r && (o.removeClasses(), l && typeof l != "string" && l.removeAttribute("style"), u && u.removeAttribute("style"), p && p.length && p.forEach((c) => {
      c.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), c.removeAttribute("style"), c.removeAttribute("data-swiper-slide-index");
    })), o.emit("destroy"), Object.keys(o.eventsListeners).forEach((c) => {
      o.off(c);
    }), n !== !1 && (o.el && typeof o.el != "string" && (o.el.swiper = null), vS(o)), o.destroyed = !0), null;
  }
  static extendDefaults(n) {
    ar(nl, n);
  }
  static get extendedDefaults() {
    return nl;
  }
  static get defaults() {
    return _l;
  }
  static installModule(n) {
    Qr.prototype.__modules__ || (Qr.prototype.__modules__ = []);
    const r = Qr.prototype.__modules__;
    typeof n == "function" && r.indexOf(n) < 0 && r.push(n);
  }
  static use(n) {
    return Array.isArray(n) ? (n.forEach((r) => Qr.installModule(r)), Qr) : (Qr.installModule(n), Qr);
  }
};
Object.keys(rl).forEach((e) => {
  Object.keys(rl[e]).forEach((n) => {
    $l.prototype[n] = rl[e][n];
  });
});
$l.use([zS, AS]);
const np = [
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
function Nn(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function xi(e, n) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(n).filter((o) => r.indexOf(o) < 0).forEach((o) => {
    typeof e[o] > "u" ? e[o] = n[o] : Nn(n[o]) && Nn(e[o]) && Object.keys(n[o]).length > 0 ? n[o].__swiper__ ? e[o] = n[o] : xi(e[o], n[o]) : e[o] = n[o];
  });
}
function ip(e = {}) {
  return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function op(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function sp(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function ap(e = "") {
  const n = e.split(" ").map((o) => o.trim()).filter((o) => !!o), r = [];
  return n.forEach((o) => {
    r.indexOf(o) < 0 && r.push(o);
  }), r.join(" ");
}
function k1(e = "") {
  return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function D1({
  swiper: e,
  slides: n,
  passedParams: r,
  changedParams: o,
  nextEl: s,
  prevEl: l,
  scrollbarEl: u,
  paginationEl: p
}) {
  const c = o.filter((P) => P !== "children" && P !== "direction" && P !== "wrapperClass"), {
    params: h,
    pagination: y,
    navigation: m,
    scrollbar: w,
    virtual: d,
    thumbs: g
  } = e;
  let S, I, E, C, T, R, z, j;
  o.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && h.thumbs && (!h.thumbs.swiper || h.thumbs.swiper.destroyed) && (S = !0), o.includes("controller") && r.controller && r.controller.control && h.controller && !h.controller.control && (I = !0), o.includes("pagination") && r.pagination && (r.pagination.el || p) && (h.pagination || h.pagination === !1) && y && !y.el && (E = !0), o.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || u) && (h.scrollbar || h.scrollbar === !1) && w && !w.el && (C = !0), o.includes("navigation") && r.navigation && (r.navigation.prevEl || l) && (r.navigation.nextEl || s) && (h.navigation || h.navigation === !1) && m && !m.prevEl && !m.nextEl && (T = !0);
  const W = (P) => {
    e[P] && (e[P].destroy(), P === "navigation" ? (e.isElement && (e[P].prevEl.remove(), e[P].nextEl.remove()), h[P].prevEl = void 0, h[P].nextEl = void 0, e[P].prevEl = void 0, e[P].nextEl = void 0) : (e.isElement && e[P].el.remove(), h[P].el = void 0, e[P].el = void 0));
  };
  o.includes("loop") && e.isElement && (h.loop && !r.loop ? R = !0 : !h.loop && r.loop ? z = !0 : j = !0), c.forEach((P) => {
    if (Nn(h[P]) && Nn(r[P]))
      Object.assign(h[P], r[P]), (P === "navigation" || P === "pagination" || P === "scrollbar") && "enabled" in r[P] && !r[P].enabled && W(P);
    else {
      const N = r[P];
      (N === !0 || N === !1) && (P === "navigation" || P === "pagination" || P === "scrollbar") ? N === !1 && W(P) : h[P] = r[P];
    }
  }), c.includes("controller") && !I && e.controller && e.controller.control && h.controller && h.controller.control && (e.controller.control = h.controller.control), o.includes("children") && n && d && h.virtual.enabled ? (d.slides = n, d.update(!0)) : o.includes("virtual") && d && h.virtual.enabled && (n && (d.slides = n), d.update(!0)), o.includes("children") && n && h.loop && (j = !0), S && g.init() && g.update(!0), I && (e.controller.control = h.controller.control), E && (e.isElement && (!p || typeof p == "string") && (p = document.createElement("div"), p.classList.add("swiper-pagination"), p.part.add("pagination"), e.el.appendChild(p)), p && (h.pagination.el = p), y.init(), y.render(), y.update()), C && (e.isElement && (!u || typeof u == "string") && (u = document.createElement("div"), u.classList.add("swiper-scrollbar"), u.part.add("scrollbar"), e.el.appendChild(u)), u && (h.scrollbar.el = u), w.init(), w.updateSize(), w.setTranslate()), T && (e.isElement && ((!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-next"), fs(s, e.navigation.arrowSvg), s.part.add("button-next"), e.el.appendChild(s)), (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-prev"), fs(l, e.navigation.arrowSvg), l.part.add("button-prev"), e.el.appendChild(l))), s && (h.navigation.nextEl = s), l && (h.navigation.prevEl = l), m.init(), m.update()), o.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), o.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), o.includes("direction") && e.changeDirection(r.direction, !1), (R || j) && e.loopDestroy(), (z || j) && e.loopCreate(), e.update();
}
function W1(e = {}, n = !0) {
  const r = {
    on: {}
  }, o = {}, s = {};
  xi(r, _l), r._emitClasses = !0, r.init = !1;
  const l = {}, u = np.map((c) => c.replace(/_/, "")), p = Object.assign({}, e);
  return Object.keys(p).forEach((c) => {
    typeof e[c] > "u" || (u.indexOf(c) >= 0 ? Nn(e[c]) ? (r[c] = {}, s[c] = {}, xi(r[c], e[c]), xi(s[c], e[c])) : (r[c] = e[c], s[c] = e[c]) : c.search(/on[A-Z]/) === 0 && typeof e[c] == "function" ? n ? o[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : r.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : l[c] = e[c]);
  }), ["navigation", "pagination", "scrollbar"].forEach((c) => {
    r[c] === !0 && (r[c] = {}), r[c] === !1 && delete r[c];
  }), {
    params: r,
    passedParams: s,
    rest: l,
    events: o
  };
}
function N1({
  el: e,
  nextEl: n,
  prevEl: r,
  paginationEl: o,
  scrollbarEl: s,
  swiper: l
}, u) {
  ip(u) && n && r && (l.params.navigation.nextEl = n, l.originalParams.navigation.nextEl = n, l.params.navigation.prevEl = r, l.originalParams.navigation.prevEl = r), op(u) && o && (l.params.pagination.el = o, l.originalParams.pagination.el = o), sp(u) && s && (l.params.scrollbar.el = s, l.originalParams.scrollbar.el = s), l.init(e);
}
function B1(e, n, r, o, s) {
  const l = [];
  if (!n) return l;
  const u = (c) => {
    l.indexOf(c) < 0 && l.push(c);
  };
  if (r && o) {
    const c = o.map(s), h = r.map(s);
    c.join("") !== h.join("") && u("children"), o.length !== r.length && u("children");
  }
  return np.filter((c) => c[0] === "_").map((c) => c.replace(/_/, "")).forEach((c) => {
    if (c in e && c in n)
      if (Nn(e[c]) && Nn(n[c])) {
        const h = Object.keys(e[c]), y = Object.keys(n[c]);
        h.length !== y.length ? u(c) : (h.forEach((m) => {
          e[c][m] !== n[c][m] && u(c);
        }), y.forEach((m) => {
          e[c][m] !== n[c][m] && u(c);
        }));
      } else e[c] !== n[c] && u(c);
  }), l;
}
const F1 = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ds.apply(this, arguments);
}
function lp(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function up(e) {
  const n = [];
  return He.Children.toArray(e).forEach((r) => {
    lp(r) ? n.push(r) : r.props && r.props.children && up(r.props.children).forEach((o) => n.push(o));
  }), n;
}
function V1(e) {
  const n = [], r = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return He.Children.toArray(e).forEach((o) => {
    if (lp(o))
      n.push(o);
    else if (o.props && o.props.slot && r[o.props.slot])
      r[o.props.slot].push(o);
    else if (o.props && o.props.children) {
      const s = up(o.props.children);
      s.length > 0 ? s.forEach((l) => n.push(l)) : r["container-end"].push(o);
    } else
      r["container-end"].push(o);
  }), {
    slides: n,
    slots: r
  };
}
function G1(e, n, r) {
  if (!r) return null;
  const o = (y) => {
    let m = y;
    return y < 0 ? m = n.length + y : m >= n.length && (m = m - n.length), m;
  }, s = e.isHorizontal() ? {
    [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
  } : {
    top: `${r.offset}px`
  }, {
    from: l,
    to: u
  } = r, p = e.params.loop ? -n.length : 0, c = e.params.loop ? n.length * 2 : n.length, h = [];
  for (let y = p; y < c; y += 1)
    y >= l && y <= u && h.push(n[o(y)]);
  return h.map((y, m) => /* @__PURE__ */ He.cloneElement(y, {
    swiper: e,
    style: s,
    key: y.props.virtualIndex || y.key || `slide-${m}`
  }));
}
function Zi(e, n) {
  return typeof window > "u" ? _r(e, n) : zl(e, n);
}
const Zf = /* @__PURE__ */ kd(null), cp = /* @__PURE__ */ kd(null), j1 = () => _x(cp), fp = /* @__PURE__ */ Ci(({
  className: e,
  tag: n = "div",
  wrapperTag: r = "div",
  children: o,
  onSwiper: s,
  ...l
} = {}, u) => {
  let p = !1;
  const [c, h] = Ft("swiper"), [y, m] = Ft(null), [w, d] = Ft(!1), g = nt(!1), S = nt(null), I = nt(null), E = nt(null), C = nt(null), T = nt(null), R = nt(null), z = nt(null), j = nt(null), {
    params: W,
    passedParams: P,
    rest: N,
    events: k
  } = W1(l), {
    slides: B,
    slots: b
  } = V1(o), V = () => {
    d(!w);
  };
  Object.assign(W.on, {
    _containerClasses(ee, be) {
      h(be);
    }
  });
  const D = () => {
    Object.assign(W.on, k), p = !0;
    const ee = {
      ...W
    };
    if (delete ee.wrapperClass, I.current = new $l(ee), I.current.virtual && I.current.params.virtual.enabled) {
      I.current.virtual.slides = B;
      const be = {
        cache: !1,
        slides: B,
        renderExternal: m,
        renderExternalUpdate: !1
      };
      xi(I.current.params.virtual, be), xi(I.current.originalParams.virtual, be);
    }
  };
  S.current || D(), I.current && I.current.on("_beforeBreakpoint", V);
  const Q = () => {
    p || !k || !I.current || Object.keys(k).forEach((ee) => {
      I.current.on(ee, k[ee]);
    });
  }, ae = () => {
    !k || !I.current || Object.keys(k).forEach((ee) => {
      I.current.off(ee, k[ee]);
    });
  };
  _r(() => () => {
    I.current && I.current.off("_beforeBreakpoint", V);
  }), _r(() => {
    !g.current && I.current && (I.current.emitSlidesClasses(), g.current = !0);
  }), Zi(() => {
    if (u && (u.current = S.current), !!S.current)
      return I.current.destroyed && D(), N1({
        el: S.current,
        nextEl: T.current,
        prevEl: R.current,
        paginationEl: z.current,
        scrollbarEl: j.current,
        swiper: I.current
      }, W), s && !I.current.destroyed && s(I.current), () => {
        I.current && !I.current.destroyed && I.current.destroy(!0, !1);
      };
  }, []), Zi(() => {
    Q();
    const ee = B1(P, E.current, B, C.current, (be) => be.key);
    return E.current = P, C.current = B, ee.length && I.current && !I.current.destroyed && D1({
      swiper: I.current,
      slides: B,
      passedParams: P,
      changedParams: ee,
      nextEl: T.current,
      prevEl: R.current,
      scrollbarEl: j.current,
      paginationEl: z.current
    }), () => {
      ae();
    };
  }), Zi(() => {
    F1(I.current);
  }, [y]);
  function fe() {
    return W.virtual ? G1(I.current, B, y) : B.map((ee, be) => /* @__PURE__ */ He.cloneElement(ee, {
      swiper: I.current,
      swiperSlideIndex: be
    }));
  }
  return /* @__PURE__ */ He.createElement(n, ds({
    ref: S,
    className: ap(`${c}${e ? ` ${e}` : ""}`)
  }, N), /* @__PURE__ */ He.createElement(cp.Provider, {
    value: I.current
  }, b["container-start"], /* @__PURE__ */ He.createElement(r, {
    className: k1(W.wrapperClass)
  }, b["wrapper-start"], fe(), b["wrapper-end"]), ip(W) && /* @__PURE__ */ He.createElement(He.Fragment, null, /* @__PURE__ */ He.createElement("div", {
    ref: R,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ He.createElement("div", {
    ref: T,
    className: "swiper-button-next"
  })), sp(W) && /* @__PURE__ */ He.createElement("div", {
    ref: j,
    className: "swiper-scrollbar"
  }), op(W) && /* @__PURE__ */ He.createElement("div", {
    ref: z,
    className: "swiper-pagination"
  }), b["container-end"]));
});
fp.displayName = "Swiper";
const dp = /* @__PURE__ */ Ci(({
  tag: e = "div",
  children: n,
  className: r = "",
  swiper: o,
  zoom: s,
  lazy: l,
  virtualIndex: u,
  swiperSlideIndex: p,
  ...c
} = {}, h) => {
  const y = nt(null), [m, w] = Ft("swiper-slide"), [d, g] = Ft(!1);
  function S(T, R, z) {
    R === y.current && w(z);
  }
  Zi(() => {
    if (typeof p < "u" && (y.current.swiperSlideIndex = p), h && (h.current = y.current), !(!y.current || !o)) {
      if (o.destroyed) {
        m !== "swiper-slide" && w("swiper-slide");
        return;
      }
      return o.on("_slideClass", S), () => {
        o && o.off("_slideClass", S);
      };
    }
  }), Zi(() => {
    o && y.current && !o.destroyed && w(o.getSlideClasses(y.current));
  }, [o]);
  const I = {
    isActive: m.indexOf("swiper-slide-active") >= 0,
    isVisible: m.indexOf("swiper-slide-visible") >= 0,
    isPrev: m.indexOf("swiper-slide-prev") >= 0,
    isNext: m.indexOf("swiper-slide-next") >= 0
  }, E = () => typeof n == "function" ? n(I) : n, C = () => {
    g(!0);
  };
  return /* @__PURE__ */ He.createElement(e, ds({
    ref: y,
    className: ap(`${m}${r ? ` ${r}` : ""}`),
    "data-swiper-slide-index": u,
    onLoad: C
  }, c), s && /* @__PURE__ */ He.createElement(Zf.Provider, {
    value: I
  }, /* @__PURE__ */ He.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof s == "number" ? s : void 0
  }, E(), l && !d && /* @__PURE__ */ He.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (T) => {
      T && (T.lazyPreloaderManaged = !0);
    }
  }))), !s && /* @__PURE__ */ He.createElement(Zf.Provider, {
    value: I
  }, E(), l && !d && /* @__PURE__ */ He.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (T) => {
      T && (T.lazyPreloaderManaged = !0);
    }
  })));
});
dp.displayName = "SwiperSlide";
const Qf = ({ type: e }) => {
  const n = j1();
  return /* @__PURE__ */ ie.jsxs(
    yi,
    {
      onClick: () => e === "next" ? n.slideNext() : n.slidePrev(),
      size: "large",
      sx: {
        position: "absolute",
        top: "50%",
        ...e === "next" ? { right: 20 } : { left: 20 },
        zIndex: 1,
        transform: "translateY(-100%)"
      },
      children: [
        e === "prev" && /* @__PURE__ */ ie.jsx(Tx, {}),
        e === "next" && /* @__PURE__ */ ie.jsx(Wd, {})
      ]
    }
  );
}, Y1 = ({ swiperRef: e, onClose: n, current: r, total: o, currentImage: s }, l) => /* @__PURE__ */ ie.jsxs(
  Ei,
  {
    ref: l,
    slot: "container-start",
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: { background: "#000", px: 2, height: 68, width: 1 },
    children: [
      /* @__PURE__ */ ie.jsx(Wn, { variant: "h3", children: `${r} / ${o}` }),
      /* @__PURE__ */ ie.jsxs(Ei, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ ie.jsx(
          yi,
          {
            color: "secondary",
            onClick: () => {
              var u, p, c;
              return (c = (p = (u = e == null ? void 0 : e.current) == null ? void 0 : u.swiper) == null ? void 0 : p.zoom) == null ? void 0 : c.in();
            },
            children: /* @__PURE__ */ ie.jsx(Mx, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          yi,
          {
            color: "secondary",
            onClick: () => {
              var u, p, c;
              return (c = (p = (u = e == null ? void 0 : e.current) == null ? void 0 : u.swiper) == null ? void 0 : p.zoom) == null ? void 0 : c.out();
            },
            children: /* @__PURE__ */ ie.jsx(Ix, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          yi,
          {
            color: "secondary",
            onClick: () => {
              const u = document.createElement("a");
              u.href = s == null ? void 0 : s.url, u.download = s == null ? void 0 : s.name, document.body.appendChild(u), u.click(), document.body.removeChild(u);
            },
            children: /* @__PURE__ */ ie.jsx(Ox, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          yi,
          {
            color: "secondary",
            onClick: n,
            children: /* @__PURE__ */ ie.jsx(Dd, { size: 24 })
          }
        )
      ] })
    ]
  }
), H1 = Ci(Y1), ZC = ({
  items: e,
  isOpen: n,
  onClose: r,
  activeId: o
}) => {
  const s = nt(null), [l, u] = Ft(1), [p, c] = Ft(0), h = e == null ? void 0 : e.findIndex((y) => (y == null ? void 0 : y.id) === o);
  return /* @__PURE__ */ ie.jsx(vx, { children: /* @__PURE__ */ ie.jsx(
    yx,
    {
      sx: (y) => ({ color: "#fff", zIndex: y.zIndex.drawer + 1 }),
      open: n,
      children: /* @__PURE__ */ ie.jsxs(Ei, { width: 1, height: 1, children: [
        /* @__PURE__ */ ie.jsx(
          H1,
          {
            swiperRef: s,
            current: l,
            total: p,
            onClose: r,
            currentImage: e == null ? void 0 : e[l - 1]
          }
        ),
        /* @__PURE__ */ ie.jsxs(
          Ht,
          {
            ref: s,
            component: fp,
            style: {
              width: "100%",
              flex: 1,
              minHeight: 0,
              // '--swiper-navigation-color': '#fff',
              "--swiper-pagination-color": "#fff"
            },
            initialSlide: h,
            zoom: { toggle: !1 },
            navigation: !0,
            pagination: {
              clickable: !0
            },
            modules: [TS, CS],
            className: "mySwiper",
            onSwiper: (y) => c(y.slides.length),
            onSlideChange: (y) => u(y.activeIndex + 1),
            sx: {
              "& .swiper-zoom-container": {
                cursor: "grab"
              },
              "& .swiper-zoom-container:active": {
                cursor: "grabbing"
              }
            },
            children: [
              e == null ? void 0 : e.map((y) => /* @__PURE__ */ ie.jsx(dp, { children: /* @__PURE__ */ ie.jsx("div", { className: "swiper-zoom-container", children: /* @__PURE__ */ ie.jsx(
                "img",
                {
                  alt: y == null ? void 0 : y.name,
                  src: y == null ? void 0 : y.url,
                  style: {
                    display: "block",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%"
                  }
                }
              ) }) }, y == null ? void 0 : y.id)),
              0 < p && l > 1 && /* @__PURE__ */ ie.jsx(Qf, { type: "prev" }),
              0 < p && l < p && /* @__PURE__ */ ie.jsx(Qf, { type: "next" })
            ]
          }
        )
      ] })
    }
  ) });
};
function Bn(e, ...n) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return n.forEach((o) => r.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Si = "$$material";
function U1(e) {
  for (var n = 0, r, o = 0, s = e.length; s >= 4; ++o, s -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, n = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      n ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var X1 = {
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
function q1(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var K1 = /[A-Z]|^ms/g, J1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pp = function(n) {
  return n.charCodeAt(1) === 45;
}, ed = function(n) {
  return n != null && typeof n != "boolean";
}, il = /* @__PURE__ */ q1(function(e) {
  return pp(e) ? e : e.replace(K1, "-$&").toLowerCase();
}), td = function(n, r) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(J1, function(o, s, l) {
          return vn = {
            name: s,
            styles: l,
            next: vn
          }, s;
        });
  }
  return X1[n] !== 1 && !pp(n) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ps(e, n, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1)
        return vn = {
          name: s.name,
          styles: s.styles,
          next: vn
        }, s.name;
      var l = r;
      if (l.styles !== void 0) {
        var u = l.next;
        if (u !== void 0)
          for (; u !== void 0; )
            vn = {
              name: u.name,
              styles: u.styles,
              next: vn
            }, u = u.next;
        var p = l.styles + ";";
        return p;
      }
      return Z1(e, n, r);
    }
  }
  var c = r;
  return c;
}
function Z1(e, n, r) {
  var o = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++)
      o += ps(e, n, r[s]) + ";";
  else
    for (var l in r) {
      var u = r[l];
      if (typeof u != "object") {
        var p = u;
        ed(p) && (o += il(l) + ":" + td(l, p) + ";");
      } else if (Array.isArray(u) && typeof u[0] == "string" && n == null)
        for (var c = 0; c < u.length; c++)
          ed(u[c]) && (o += il(l) + ":" + td(l, u[c]) + ";");
      else {
        var h = ps(e, n, u);
        switch (l) {
          case "animation":
          case "animationName": {
            o += il(l) + ":" + h + ";";
            break;
          }
          default:
            o += l + "{" + h + "}";
        }
      }
    }
  return o;
}
var rd = /label:\s*([^\s;{]+)\s*(;|$)/g, vn;
function Q1(e, n, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, s = "";
  vn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    o = !1, s += ps(r, n, l);
  else {
    var u = l;
    s += u[0];
  }
  for (var p = 1; p < e.length; p++)
    if (s += ps(r, n, e[p]), o) {
      var c = l;
      s += c[p];
    }
  rd.lastIndex = 0;
  for (var h = "", y; (y = rd.exec(s)) !== null; )
    h += "-" + y[1];
  var m = U1(s) + h;
  return {
    name: m,
    styles: s,
    next: vn
  };
}
var El = { exports: {} }, es = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd;
function ew() {
  if (nd) return je;
  nd = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function T(z) {
    if (typeof z == "object" && z !== null) {
      var j = z.$$typeof;
      switch (j) {
        case n:
          switch (z = z.type, z) {
            case c:
            case h:
            case o:
            case l:
            case s:
            case m:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case p:
                case y:
                case g:
                case d:
                case u:
                  return z;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function R(z) {
    return T(z) === h;
  }
  return je.AsyncMode = c, je.ConcurrentMode = h, je.ContextConsumer = p, je.ContextProvider = u, je.Element = n, je.ForwardRef = y, je.Fragment = o, je.Lazy = g, je.Memo = d, je.Portal = r, je.Profiler = l, je.StrictMode = s, je.Suspense = m, je.isAsyncMode = function(z) {
    return R(z) || T(z) === c;
  }, je.isConcurrentMode = R, je.isContextConsumer = function(z) {
    return T(z) === p;
  }, je.isContextProvider = function(z) {
    return T(z) === u;
  }, je.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === n;
  }, je.isForwardRef = function(z) {
    return T(z) === y;
  }, je.isFragment = function(z) {
    return T(z) === o;
  }, je.isLazy = function(z) {
    return T(z) === g;
  }, je.isMemo = function(z) {
    return T(z) === d;
  }, je.isPortal = function(z) {
    return T(z) === r;
  }, je.isProfiler = function(z) {
    return T(z) === l;
  }, je.isStrictMode = function(z) {
    return T(z) === s;
  }, je.isSuspense = function(z) {
    return T(z) === m;
  }, je.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === o || z === h || z === l || z === s || z === m || z === w || typeof z == "object" && z !== null && (z.$$typeof === g || z.$$typeof === d || z.$$typeof === u || z.$$typeof === p || z.$$typeof === y || z.$$typeof === I || z.$$typeof === E || z.$$typeof === C || z.$$typeof === S);
  }, je.typeOf = T, je;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function tw() {
  return id || (id = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function T(oe) {
      return typeof oe == "string" || typeof oe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      oe === o || oe === h || oe === l || oe === s || oe === m || oe === w || typeof oe == "object" && oe !== null && (oe.$$typeof === g || oe.$$typeof === d || oe.$$typeof === u || oe.$$typeof === p || oe.$$typeof === y || oe.$$typeof === I || oe.$$typeof === E || oe.$$typeof === C || oe.$$typeof === S);
    }
    function R(oe) {
      if (typeof oe == "object" && oe !== null) {
        var Te = oe.$$typeof;
        switch (Te) {
          case n:
            var ze = oe.type;
            switch (ze) {
              case c:
              case h:
              case o:
              case l:
              case s:
              case m:
                return ze;
              default:
                var qe = ze && ze.$$typeof;
                switch (qe) {
                  case p:
                  case y:
                  case g:
                  case d:
                  case u:
                    return qe;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var z = c, j = h, W = p, P = u, N = n, k = y, B = o, b = g, V = d, D = r, Q = l, ae = s, fe = m, ee = !1;
    function be(oe) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Y(oe) || R(oe) === c;
    }
    function Y(oe) {
      return R(oe) === h;
    }
    function Z(oe) {
      return R(oe) === p;
    }
    function de(oe) {
      return R(oe) === u;
    }
    function pe(oe) {
      return typeof oe == "object" && oe !== null && oe.$$typeof === n;
    }
    function F(oe) {
      return R(oe) === y;
    }
    function q(oe) {
      return R(oe) === o;
    }
    function X(oe) {
      return R(oe) === g;
    }
    function le(oe) {
      return R(oe) === d;
    }
    function te(oe) {
      return R(oe) === r;
    }
    function se(oe) {
      return R(oe) === l;
    }
    function ue(oe) {
      return R(oe) === s;
    }
    function ve(oe) {
      return R(oe) === m;
    }
    Ye.AsyncMode = z, Ye.ConcurrentMode = j, Ye.ContextConsumer = W, Ye.ContextProvider = P, Ye.Element = N, Ye.ForwardRef = k, Ye.Fragment = B, Ye.Lazy = b, Ye.Memo = V, Ye.Portal = D, Ye.Profiler = Q, Ye.StrictMode = ae, Ye.Suspense = fe, Ye.isAsyncMode = be, Ye.isConcurrentMode = Y, Ye.isContextConsumer = Z, Ye.isContextProvider = de, Ye.isElement = pe, Ye.isForwardRef = F, Ye.isFragment = q, Ye.isLazy = X, Ye.isMemo = le, Ye.isPortal = te, Ye.isProfiler = se, Ye.isStrictMode = ue, Ye.isSuspense = ve, Ye.isValidElementType = T, Ye.typeOf = R;
  }()), Ye;
}
var od;
function hp() {
  return od || (od = 1, process.env.NODE_ENV === "production" ? es.exports = ew() : es.exports = tw()), es.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ol, sd;
function rw() {
  if (sd) return ol;
  sd = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function o(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var u = {}, p = 0; p < 10; p++)
        u["_" + String.fromCharCode(p)] = p;
      var c = Object.getOwnPropertyNames(u).map(function(y) {
        return u[y];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        h[y] = y;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ol = s() ? Object.assign : function(l, u) {
    for (var p, c = o(l), h, y = 1; y < arguments.length; y++) {
      p = Object(arguments[y]);
      for (var m in p)
        n.call(p, m) && (c[m] = p[m]);
      if (e) {
        h = e(p);
        for (var w = 0; w < h.length; w++)
          r.call(p, h[w]) && (c[h[w]] = p[h[w]]);
      }
    }
    return c;
  }, ol;
}
var sl, ad;
function Ll() {
  if (ad) return sl;
  ad = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sl = e, sl;
}
var al, ld;
function gp() {
  return ld || (ld = 1, al = Function.call.bind(Object.prototype.hasOwnProperty)), al;
}
var ll, ud;
function nw() {
  if (ud) return ll;
  ud = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Ll(), r = {}, o = gp();
    e = function(l) {
      var u = "Warning: " + l;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function s(l, u, p, c, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in l)
        if (o(l, y)) {
          var m;
          try {
            if (typeof l[y] != "function") {
              var w = Error(
                (c || "React class") + ": " + p + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            m = l[y](u, y, c, p, null, n);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + p + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var d = h ? h() : "";
            e(
              "Failed " + p + " type: " + m.message + (d ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ll = s, ll;
}
var ul, cd;
function iw() {
  if (cd) return ul;
  cd = 1;
  var e = hp(), n = rw(), r = Ll(), o = gp(), s = nw(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(p) {
    var c = "Warning: " + p;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return ul = function(p, c) {
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function m(Y) {
      var Z = Y && (h && Y[h] || Y[y]);
      if (typeof Z == "function")
        return Z;
    }
    var w = "<<anonymous>>", d = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: T,
      element: R(),
      elementType: z(),
      instanceOf: j,
      node: k(),
      objectOf: P,
      oneOf: W,
      oneOfType: N,
      shape: b,
      exact: V
    };
    function g(Y, Z) {
      return Y === Z ? Y !== 0 || 1 / Y === 1 / Z : Y !== Y && Z !== Z;
    }
    function S(Y, Z) {
      this.message = Y, this.data = Z && typeof Z == "object" ? Z : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function I(Y) {
      if (process.env.NODE_ENV !== "production")
        var Z = {}, de = 0;
      function pe(q, X, le, te, se, ue, ve) {
        if (te = te || w, ue = ue || le, ve !== r) {
          if (c) {
            var oe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw oe.name = "Invariant Violation", oe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = te + ":" + le;
            !Z[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            de < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + ue + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Z[Te] = !0, de++);
          }
        }
        return X[le] == null ? q ? X[le] === null ? new S("The " + se + " `" + ue + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new S("The " + se + " `" + ue + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : Y(X, le, te, se, ue);
      }
      var F = pe.bind(null, !1);
      return F.isRequired = pe.bind(null, !0), F;
    }
    function E(Y) {
      function Z(de, pe, F, q, X, le) {
        var te = de[pe], se = ae(te);
        if (se !== Y) {
          var ue = fe(te);
          return new S(
            "Invalid " + q + " `" + X + "` of type " + ("`" + ue + "` supplied to `" + F + "`, expected ") + ("`" + Y + "`."),
            { expectedType: Y }
          );
        }
        return null;
      }
      return I(Z);
    }
    function C() {
      return I(u);
    }
    function T(Y) {
      function Z(de, pe, F, q, X) {
        if (typeof Y != "function")
          return new S("Property `" + X + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var le = de[pe];
        if (!Array.isArray(le)) {
          var te = ae(le);
          return new S("Invalid " + q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + F + "`, expected an array."));
        }
        for (var se = 0; se < le.length; se++) {
          var ue = Y(le, se, F, q, X + "[" + se + "]", r);
          if (ue instanceof Error)
            return ue;
        }
        return null;
      }
      return I(Z);
    }
    function R() {
      function Y(Z, de, pe, F, q) {
        var X = Z[de];
        if (!p(X)) {
          var le = ae(X);
          return new S("Invalid " + F + " `" + q + "` of type " + ("`" + le + "` supplied to `" + pe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(Y);
    }
    function z() {
      function Y(Z, de, pe, F, q) {
        var X = Z[de];
        if (!e.isValidElementType(X)) {
          var le = ae(X);
          return new S("Invalid " + F + " `" + q + "` of type " + ("`" + le + "` supplied to `" + pe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(Y);
    }
    function j(Y) {
      function Z(de, pe, F, q, X) {
        if (!(de[pe] instanceof Y)) {
          var le = Y.name || w, te = be(de[pe]);
          return new S("Invalid " + q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + F + "`, expected ") + ("instance of `" + le + "`."));
        }
        return null;
      }
      return I(Z);
    }
    function W(Y) {
      if (!Array.isArray(Y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), u;
      function Z(de, pe, F, q, X) {
        for (var le = de[pe], te = 0; te < Y.length; te++)
          if (g(le, Y[te]))
            return null;
        var se = JSON.stringify(Y, function(ve, oe) {
          var Te = fe(oe);
          return Te === "symbol" ? String(oe) : oe;
        });
        return new S("Invalid " + q + " `" + X + "` of value `" + String(le) + "` " + ("supplied to `" + F + "`, expected one of " + se + "."));
      }
      return I(Z);
    }
    function P(Y) {
      function Z(de, pe, F, q, X) {
        if (typeof Y != "function")
          return new S("Property `" + X + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var le = de[pe], te = ae(le);
        if (te !== "object")
          return new S("Invalid " + q + " `" + X + "` of type " + ("`" + te + "` supplied to `" + F + "`, expected an object."));
        for (var se in le)
          if (o(le, se)) {
            var ue = Y(le, se, F, q, X + "." + se, r);
            if (ue instanceof Error)
              return ue;
          }
        return null;
      }
      return I(Z);
    }
    function N(Y) {
      if (!Array.isArray(Y))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var Z = 0; Z < Y.length; Z++) {
        var de = Y[Z];
        if (typeof de != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(de) + " at index " + Z + "."
          ), u;
      }
      function pe(F, q, X, le, te) {
        for (var se = [], ue = 0; ue < Y.length; ue++) {
          var ve = Y[ue], oe = ve(F, q, X, le, te, r);
          if (oe == null)
            return null;
          oe.data && o(oe.data, "expectedType") && se.push(oe.data.expectedType);
        }
        var Te = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new S("Invalid " + le + " `" + te + "` supplied to " + ("`" + X + "`" + Te + "."));
      }
      return I(pe);
    }
    function k() {
      function Y(Z, de, pe, F, q) {
        return D(Z[de]) ? null : new S("Invalid " + F + " `" + q + "` supplied to " + ("`" + pe + "`, expected a ReactNode."));
      }
      return I(Y);
    }
    function B(Y, Z, de, pe, F) {
      return new S(
        (Y || "React class") + ": " + Z + " type `" + de + "." + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function b(Y) {
      function Z(de, pe, F, q, X) {
        var le = de[pe], te = ae(le);
        if (te !== "object")
          return new S("Invalid " + q + " `" + X + "` of type `" + te + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var se in Y) {
          var ue = Y[se];
          if (typeof ue != "function")
            return B(F, q, X, se, fe(ue));
          var ve = ue(le, se, F, q, X + "." + se, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return I(Z);
    }
    function V(Y) {
      function Z(de, pe, F, q, X) {
        var le = de[pe], te = ae(le);
        if (te !== "object")
          return new S("Invalid " + q + " `" + X + "` of type `" + te + "` " + ("supplied to `" + F + "`, expected `object`."));
        var se = n({}, de[pe], Y);
        for (var ue in se) {
          var ve = Y[ue];
          if (o(Y, ue) && typeof ve != "function")
            return B(F, q, X, ue, fe(ve));
          if (!ve)
            return new S(
              "Invalid " + q + " `" + X + "` key `" + ue + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(de[pe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(Y), null, "  ")
            );
          var oe = ve(le, ue, F, q, X + "." + ue, r);
          if (oe)
            return oe;
        }
        return null;
      }
      return I(Z);
    }
    function D(Y) {
      switch (typeof Y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !Y;
        case "object":
          if (Array.isArray(Y))
            return Y.every(D);
          if (Y === null || p(Y))
            return !0;
          var Z = m(Y);
          if (Z) {
            var de = Z.call(Y), pe;
            if (Z !== Y.entries) {
              for (; !(pe = de.next()).done; )
                if (!D(pe.value))
                  return !1;
            } else
              for (; !(pe = de.next()).done; ) {
                var F = pe.value;
                if (F && !D(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(Y, Z) {
      return Y === "symbol" ? !0 : Z ? Z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Z instanceof Symbol : !1;
    }
    function ae(Y) {
      var Z = typeof Y;
      return Array.isArray(Y) ? "array" : Y instanceof RegExp ? "object" : Q(Z, Y) ? "symbol" : Z;
    }
    function fe(Y) {
      if (typeof Y > "u" || Y === null)
        return "" + Y;
      var Z = ae(Y);
      if (Z === "object") {
        if (Y instanceof Date)
          return "date";
        if (Y instanceof RegExp)
          return "regexp";
      }
      return Z;
    }
    function ee(Y) {
      var Z = fe(Y);
      switch (Z) {
        case "array":
        case "object":
          return "an " + Z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Z;
        default:
          return Z;
      }
    }
    function be(Y) {
      return !Y.constructor || !Y.constructor.name ? w : Y.constructor.name;
    }
    return d.checkPropTypes = s, d.resetWarningCache = s.resetWarningCache, d.PropTypes = d, d;
  }, ul;
}
var cl, fd;
function ow() {
  if (fd) return cl;
  fd = 1;
  var e = Ll();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, cl = function() {
    function o(u, p, c, h, y, m) {
      if (m !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var l = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, cl;
}
if (process.env.NODE_ENV !== "production") {
  var sw = hp(), aw = !0;
  El.exports = iw()(sw.isElement, aw);
} else
  El.exports = ow()();
var lw = El.exports;
const ye = /* @__PURE__ */ Bd(lw);
function uw(e) {
  return e == null || Object.keys(e).length === 0;
}
function kl(e) {
  const {
    styles: n,
    defaultTheme: r = {}
  } = e, o = typeof n == "function" ? (s) => n(uw(s) ? r : s) : n;
  return /* @__PURE__ */ ie.jsx($x, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (kl.propTypes = {
  defaultTheme: ye.object,
  styles: ye.oneOfType([ye.array, ye.string, ye.object, ye.func])
});
/**
 * @mui/styled-engine v7.3.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const dd = [];
function cw(e) {
  return dd[0] = e, Q1(dd);
}
var Cl = { exports: {} }, Ke = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;
function fw() {
  if (pd) return Ke;
  pd = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.for("react.view_transition"), d = Symbol.for("react.client.reference");
  function g(S) {
    if (typeof S == "object" && S !== null) {
      var I = S.$$typeof;
      switch (I) {
        case e:
          switch (S = S.type, S) {
            case r:
            case s:
            case o:
            case c:
            case h:
            case w:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case p:
                case m:
                case y:
                  return S;
                case l:
                  return S;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  return Ke.ContextConsumer = l, Ke.ContextProvider = u, Ke.Element = e, Ke.ForwardRef = p, Ke.Fragment = r, Ke.Lazy = m, Ke.Memo = y, Ke.Portal = n, Ke.Profiler = s, Ke.StrictMode = o, Ke.Suspense = c, Ke.SuspenseList = h, Ke.isContextConsumer = function(S) {
    return g(S) === l;
  }, Ke.isContextProvider = function(S) {
    return g(S) === u;
  }, Ke.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ke.isForwardRef = function(S) {
    return g(S) === p;
  }, Ke.isFragment = function(S) {
    return g(S) === r;
  }, Ke.isLazy = function(S) {
    return g(S) === m;
  }, Ke.isMemo = function(S) {
    return g(S) === y;
  }, Ke.isPortal = function(S) {
    return g(S) === n;
  }, Ke.isProfiler = function(S) {
    return g(S) === s;
  }, Ke.isStrictMode = function(S) {
    return g(S) === o;
  }, Ke.isSuspense = function(S) {
    return g(S) === c;
  }, Ke.isSuspenseList = function(S) {
    return g(S) === h;
  }, Ke.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === s || S === o || S === c || S === h || typeof S == "object" && S !== null && (S.$$typeof === m || S.$$typeof === y || S.$$typeof === u || S.$$typeof === l || S.$$typeof === p || S.$$typeof === d || S.getModuleId !== void 0);
  }, Ke.typeOf = g, Ke;
}
var Je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function dw() {
  return hd || (hd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(S) {
      if (typeof S == "object" && S !== null) {
        var I = S.$$typeof;
        switch (I) {
          case n:
            switch (S = S.type, S) {
              case o:
              case l:
              case s:
              case h:
              case y:
              case d:
                return S;
              default:
                switch (S = S && S.$$typeof, S) {
                  case p:
                  case c:
                  case w:
                  case m:
                    return S;
                  case u:
                    return S;
                  default:
                    return I;
                }
            }
          case r:
            return I;
        }
      }
    }
    var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), d = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Je.ContextConsumer = u, Je.ContextProvider = p, Je.Element = n, Je.ForwardRef = c, Je.Fragment = o, Je.Lazy = w, Je.Memo = m, Je.Portal = r, Je.Profiler = l, Je.StrictMode = s, Je.Suspense = h, Je.SuspenseList = y, Je.isContextConsumer = function(S) {
      return e(S) === u;
    }, Je.isContextProvider = function(S) {
      return e(S) === p;
    }, Je.isElement = function(S) {
      return typeof S == "object" && S !== null && S.$$typeof === n;
    }, Je.isForwardRef = function(S) {
      return e(S) === c;
    }, Je.isFragment = function(S) {
      return e(S) === o;
    }, Je.isLazy = function(S) {
      return e(S) === w;
    }, Je.isMemo = function(S) {
      return e(S) === m;
    }, Je.isPortal = function(S) {
      return e(S) === r;
    }, Je.isProfiler = function(S) {
      return e(S) === l;
    }, Je.isStrictMode = function(S) {
      return e(S) === s;
    }, Je.isSuspense = function(S) {
      return e(S) === h;
    }, Je.isSuspenseList = function(S) {
      return e(S) === y;
    }, Je.isValidElementType = function(S) {
      return typeof S == "string" || typeof S == "function" || S === o || S === l || S === s || S === h || S === y || typeof S == "object" && S !== null && (S.$$typeof === w || S.$$typeof === m || S.$$typeof === p || S.$$typeof === u || S.$$typeof === c || S.$$typeof === g || S.getModuleId !== void 0);
    }, Je.typeOf = e;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Cl.exports = fw() : Cl.exports = dw();
var mp = Cl.exports;
function gn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vp(e) {
  if (/* @__PURE__ */ Ie.isValidElement(e) || mp.isValidElementType(e) || !gn(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((r) => {
    n[r] = vp(e[r]);
  }), n;
}
function ur(e, n, r = {
  clone: !0
}) {
  const o = r.clone ? {
    ...e
  } : e;
  return gn(e) && gn(n) && Object.keys(n).forEach((s) => {
    /* @__PURE__ */ Ie.isValidElement(n[s]) || mp.isValidElementType(n[s]) ? o[s] = n[s] : gn(n[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && gn(e[s]) ? o[s] = ur(e[s], n[s], r) : r.clone ? o[s] = gn(n[s]) ? vp(n[s]) : n[s] : o[s] = n[s];
  }), o;
}
const pw = (e) => {
  const n = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return n.sort((r, o) => r.val - o.val), n.reduce((r, o) => ({
    ...r,
    [o.key]: o.val
  }), {});
};
function hw(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: n = {
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
    step: o = 5,
    ...s
  } = e, l = pw(n), u = Object.keys(l);
  function p(w) {
    return `@media (min-width:${typeof n[w] == "number" ? n[w] : w}${r})`;
  }
  function c(w) {
    return `@media (max-width:${(typeof n[w] == "number" ? n[w] : w) - o / 100}${r})`;
  }
  function h(w, d) {
    const g = u.indexOf(d);
    return `@media (min-width:${typeof n[w] == "number" ? n[w] : w}${r}) and (max-width:${(g !== -1 && typeof n[u[g]] == "number" ? n[u[g]] : d) - o / 100}${r})`;
  }
  function y(w) {
    return u.indexOf(w) + 1 < u.length ? h(w, u[u.indexOf(w) + 1]) : p(w);
  }
  function m(w) {
    const d = u.indexOf(w);
    return d === 0 ? p(u[1]) : d === u.length - 1 ? c(u[d]) : h(w, u[u.indexOf(w) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: u,
    values: l,
    up: p,
    down: c,
    between: h,
    only: y,
    not: m,
    unit: r,
    ...s
  };
}
function gd(e, n) {
  if (!e.containerQueries)
    return n;
  const r = Object.keys(n).filter((o) => o.startsWith("@container")).sort((o, s) => {
    var u, p;
    const l = /min-width:\s*([0-9.]+)/;
    return +(((u = o.match(l)) == null ? void 0 : u[1]) || 0) - +(((p = s.match(l)) == null ? void 0 : p[1]) || 0);
  });
  return r.length ? r.reduce((o, s) => {
    const l = n[s];
    return delete o[s], o[s] = l, o;
  }, {
    ...n
  }) : n;
}
function gw(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((r) => n.startsWith(`@${r}`)) || !!n.match(/^@\d/));
}
function mw(e, n) {
  const r = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${n})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, o, s] = r, l = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(s).up(l);
}
function vw(e) {
  const n = (l, u) => l.replace("@media", u ? `@container ${u}` : "@container");
  function r(l, u) {
    l.up = (...p) => n(e.breakpoints.up(...p), u), l.down = (...p) => n(e.breakpoints.down(...p), u), l.between = (...p) => n(e.breakpoints.between(...p), u), l.only = (...p) => n(e.breakpoints.only(...p), u), l.not = (...p) => {
      const c = n(e.breakpoints.not(...p), u);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, s = (l) => (r(o, l), o);
  return r(s), {
    ...e,
    containerQueries: s
  };
}
const yw = {
  borderRadius: 4
}, xn = process.env.NODE_ENV !== "production" ? ye.oneOfType([ye.number, ye.string, ye.object, ye.array]) : {};
function Qi(e, n) {
  return n ? ur(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const vs = {
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
}, md = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${vs[e]}px)`
}, bw = {
  containerQueries: (e) => ({
    up: (n) => {
      let r = typeof n == "number" ? n : vs[n] || n;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function en(e, n, r) {
  const o = e.theme || {};
  if (Array.isArray(n)) {
    const l = o.breakpoints || md;
    return n.reduce((u, p, c) => (u[l.up(l.keys[c])] = r(n[c]), u), {});
  }
  if (typeof n == "object") {
    const l = o.breakpoints || md;
    return Object.keys(n).reduce((u, p) => {
      if (gw(l.keys, p)) {
        const c = mw(o.containerQueries ? o : bw, p);
        c && (u[c] = r(n[p], p));
      } else if (Object.keys(l.values || vs).includes(p)) {
        const c = l.up(p);
        u[c] = r(n[p], p);
      } else {
        const c = p;
        u[c] = n[c];
      }
      return u;
    }, {});
  }
  return r(n);
}
function xw(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((o, s) => {
    const l = e.up(s);
    return o[l] = {}, o;
  }, {})) || {};
}
function vd(e, n) {
  return e.reduce((r, o) => {
    const s = r[o];
    return (!s || Object.keys(s).length === 0) && delete r[o], r;
  }, n);
}
function yp(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Bn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ys(e, n, r = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && r) {
    const o = `vars.${n}`.split(".").reduce((s, l) => s && s[l] ? s[l] : null, e);
    if (o != null)
      return o;
  }
  return n.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, e);
}
function hs(e, n, r, o = r) {
  let s;
  return typeof e == "function" ? s = e(r) : Array.isArray(e) ? s = e[r] || o : s = ys(e, r) || o, n && (s = n(s, o, e)), s;
}
function bt(e) {
  const {
    prop: n,
    cssProperty: r = e.prop,
    themeKey: o,
    transform: s
  } = e, l = (u) => {
    if (u[n] == null)
      return null;
    const p = u[n], c = u.theme, h = ys(c, o) || {};
    return en(u, p, (m) => {
      let w = hs(h, s, m);
      return m === w && typeof m == "string" && (w = hs(h, s, `${n}${m === "default" ? "" : yp(m)}`, m)), r === !1 ? w : {
        [r]: w
      };
    });
  };
  return l.propTypes = process.env.NODE_ENV !== "production" ? {
    [n]: xn
  } : {}, l.filterProps = [n], l;
}
function Sw(e) {
  const n = {};
  return (r) => (n[r] === void 0 && (n[r] = e(r)), n[r]);
}
const ww = {
  m: "margin",
  p: "padding"
}, _w = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, yd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ew = Sw((e) => {
  if (e.length > 2)
    if (yd[e])
      e = yd[e];
    else
      return [e];
  const [n, r] = e.split(""), o = ww[n], s = _w[r] || "";
  return Array.isArray(s) ? s.map((l) => o + l) : [o + s];
}), bs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Cw = [...bs, ...xs];
function io(e, n, r, o) {
  const s = ys(e, n, !0) ?? r;
  return typeof s == "number" || typeof s == "string" ? (l) => typeof l == "string" ? l : (process.env.NODE_ENV !== "production" && typeof l != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${l}.`), typeof s == "string" ? s.startsWith("var(") && l === 0 ? 0 : s.startsWith("var(") && l === 1 ? s : `calc(${l} * ${s})` : s * l) : Array.isArray(s) ? (l) => {
    if (typeof l == "string")
      return l;
    const u = Math.abs(l);
    process.env.NODE_ENV !== "production" && (Number.isInteger(u) ? u > s.length - 1 && console.error([`MUI: The value provided (${u}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${u} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${n}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${n}\` as a number.`].join(`
`)));
    const p = s[u];
    return l >= 0 ? p : typeof p == "number" ? -p : typeof p == "string" && p.startsWith("var(") ? `calc(-1 * ${p})` : `-${p}`;
  } : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${n}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Dl(e) {
  return io(e, "spacing", 8, "spacing");
}
function oo(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function Tw(e, n) {
  return (r) => e.reduce((o, s) => (o[s] = oo(n, r), o), {});
}
function Mw(e, n, r, o) {
  if (!n.includes(r))
    return null;
  const s = Ew(r), l = Tw(s, o), u = e[r];
  return en(e, u, l);
}
function bp(e, n) {
  const r = Dl(e.theme);
  return Object.keys(e).map((o) => Mw(e, n, o, r)).reduce(Qi, {});
}
function ht(e) {
  return bp(e, bs);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? bs.reduce((e, n) => (e[n] = xn, e), {}) : {};
ht.filterProps = bs;
function gt(e) {
  return bp(e, xs);
}
gt.propTypes = process.env.NODE_ENV !== "production" ? xs.reduce((e, n) => (e[n] = xn, e), {}) : {};
gt.filterProps = xs;
process.env.NODE_ENV !== "production" && Cw.reduce((e, n) => (e[n] = xn, e), {});
function xp(e = 8, n = Dl({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((l) => {
    const u = n(l);
    return typeof u == "number" ? `${u}px` : u;
  }).join(" "));
  return r.mui = !0, r;
}
function Ss(...e) {
  const n = e.reduce((o, s) => (s.filterProps.forEach((l) => {
    o[l] = s;
  }), o), {}), r = (o) => Object.keys(o).reduce((s, l) => n[l] ? Qi(s, n[l](o)) : s, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, s) => Object.assign(o, s.propTypes), {}) : {}, r.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []), r;
}
function wr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Cr(e, n) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: n
  });
}
const Iw = Cr("border", wr), Ow = Cr("borderTop", wr), zw = Cr("borderRight", wr), Aw = Cr("borderBottom", wr), Pw = Cr("borderLeft", wr), Rw = Cr("borderColor"), $w = Cr("borderTopColor"), Lw = Cr("borderRightColor"), kw = Cr("borderBottomColor"), Dw = Cr("borderLeftColor"), Ww = Cr("outline", wr), Nw = Cr("outlineColor"), ws = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = io(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (o) => ({
      borderRadius: oo(n, o)
    });
    return en(e, e.borderRadius, r);
  }
  return null;
};
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: xn
} : {};
ws.filterProps = ["borderRadius"];
Ss(Iw, Ow, zw, Aw, Pw, Rw, $w, Lw, kw, Dw, ws, Ww, Nw);
const _s = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = io(e.theme, "spacing", 8, "gap"), r = (o) => ({
      gap: oo(n, o)
    });
    return en(e, e.gap, r);
  }
  return null;
};
_s.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: xn
} : {};
_s.filterProps = ["gap"];
const Es = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = io(e.theme, "spacing", 8, "columnGap"), r = (o) => ({
      columnGap: oo(n, o)
    });
    return en(e, e.columnGap, r);
  }
  return null;
};
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: xn
} : {};
Es.filterProps = ["columnGap"];
const Cs = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = io(e.theme, "spacing", 8, "rowGap"), r = (o) => ({
      rowGap: oo(n, o)
    });
    return en(e, e.rowGap, r);
  }
  return null;
};
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: xn
} : {};
Cs.filterProps = ["rowGap"];
const Bw = bt({
  prop: "gridColumn"
}), Fw = bt({
  prop: "gridRow"
}), Vw = bt({
  prop: "gridAutoFlow"
}), Gw = bt({
  prop: "gridAutoColumns"
}), jw = bt({
  prop: "gridAutoRows"
}), Yw = bt({
  prop: "gridTemplateColumns"
}), Hw = bt({
  prop: "gridTemplateRows"
}), Uw = bt({
  prop: "gridTemplateAreas"
}), Xw = bt({
  prop: "gridArea"
});
Ss(_s, Es, Cs, Bw, Fw, Vw, Gw, jw, Yw, Hw, Uw, Xw);
function wi(e, n) {
  return n === "grey" ? n : e;
}
const qw = bt({
  prop: "color",
  themeKey: "palette",
  transform: wi
}), Kw = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wi
}), Jw = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wi
});
Ss(qw, Kw, Jw);
function lr(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Zw = bt({
  prop: "width",
  transform: lr
}), Wl = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (r) => {
      var s, l, u, p, c;
      const o = ((u = (l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.values) == null ? void 0 : u[r]) || vs[r];
      return o ? ((c = (p = e.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: lr(r)
      };
    };
    return en(e, e.maxWidth, n);
  }
  return null;
};
Wl.filterProps = ["maxWidth"];
const Qw = bt({
  prop: "minWidth",
  transform: lr
}), e_ = bt({
  prop: "height",
  transform: lr
}), t_ = bt({
  prop: "maxHeight",
  transform: lr
}), r_ = bt({
  prop: "minHeight",
  transform: lr
});
bt({
  prop: "size",
  cssProperty: "width",
  transform: lr
});
bt({
  prop: "size",
  cssProperty: "height",
  transform: lr
});
const n_ = bt({
  prop: "boxSizing"
});
Ss(Zw, Wl, Qw, e_, t_, r_, n_);
const Ts = {
  // borders
  border: {
    themeKey: "borders",
    transform: wr
  },
  borderTop: {
    themeKey: "borders",
    transform: wr
  },
  borderRight: {
    themeKey: "borders",
    transform: wr
  },
  borderBottom: {
    themeKey: "borders",
    transform: wr
  },
  borderLeft: {
    themeKey: "borders",
    transform: wr
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
    transform: wr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ws
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wi
  },
  // spacing
  p: {
    style: gt
  },
  pt: {
    style: gt
  },
  pr: {
    style: gt
  },
  pb: {
    style: gt
  },
  pl: {
    style: gt
  },
  px: {
    style: gt
  },
  py: {
    style: gt
  },
  padding: {
    style: gt
  },
  paddingTop: {
    style: gt
  },
  paddingRight: {
    style: gt
  },
  paddingBottom: {
    style: gt
  },
  paddingLeft: {
    style: gt
  },
  paddingX: {
    style: gt
  },
  paddingY: {
    style: gt
  },
  paddingInline: {
    style: gt
  },
  paddingInlineStart: {
    style: gt
  },
  paddingInlineEnd: {
    style: gt
  },
  paddingBlock: {
    style: gt
  },
  paddingBlockStart: {
    style: gt
  },
  paddingBlockEnd: {
    style: gt
  },
  m: {
    style: ht
  },
  mt: {
    style: ht
  },
  mr: {
    style: ht
  },
  mb: {
    style: ht
  },
  ml: {
    style: ht
  },
  mx: {
    style: ht
  },
  my: {
    style: ht
  },
  margin: {
    style: ht
  },
  marginTop: {
    style: ht
  },
  marginRight: {
    style: ht
  },
  marginBottom: {
    style: ht
  },
  marginLeft: {
    style: ht
  },
  marginX: {
    style: ht
  },
  marginY: {
    style: ht
  },
  marginInline: {
    style: ht
  },
  marginInlineStart: {
    style: ht
  },
  marginInlineEnd: {
    style: ht
  },
  marginBlock: {
    style: ht
  },
  marginBlockStart: {
    style: ht
  },
  marginBlockEnd: {
    style: ht
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
    style: _s
  },
  rowGap: {
    style: Cs
  },
  columnGap: {
    style: Es
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
    transform: lr
  },
  maxWidth: {
    style: Wl
  },
  minWidth: {
    transform: lr
  },
  height: {
    transform: lr
  },
  maxHeight: {
    transform: lr
  },
  minHeight: {
    transform: lr
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
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
function i_(...e) {
  const n = e.reduce((o, s) => o.concat(Object.keys(s)), []), r = new Set(n);
  return e.every((o) => r.size === Object.keys(o).length);
}
function o_(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function s_() {
  function e(r, o, s, l) {
    const u = {
      [r]: o,
      theme: s
    }, p = l[r];
    if (!p)
      return {
        [r]: o
      };
    const {
      cssProperty: c = r,
      themeKey: h,
      transform: y,
      style: m
    } = p;
    if (o == null)
      return null;
    if (h === "typography" && o === "inherit")
      return {
        [r]: o
      };
    const w = ys(s, h) || {};
    return m ? m(u) : en(u, o, (g) => {
      let S = hs(w, y, g);
      return g === S && typeof g == "string" && (S = hs(w, y, `${r}${g === "default" ? "" : yp(g)}`, g)), c === !1 ? S : {
        [c]: S
      };
    });
  }
  function n(r) {
    const {
      sx: o,
      theme: s = {},
      nested: l
    } = r || {};
    if (!o)
      return null;
    const u = s.unstable_sxConfig ?? Ts;
    function p(c) {
      let h = c;
      if (typeof c == "function")
        h = c(s);
      else if (typeof c != "object")
        return c;
      if (!h)
        return null;
      const y = xw(s.breakpoints), m = Object.keys(y);
      let w = y;
      return Object.keys(h).forEach((d) => {
        const g = o_(h[d], s);
        if (g != null)
          if (typeof g == "object")
            if (u[d])
              w = Qi(w, e(d, g, s, u));
            else {
              const S = en({
                theme: s
              }, g, (I) => ({
                [d]: I
              }));
              i_(S, g) ? w[d] = n({
                sx: g,
                theme: s,
                nested: !0
              }) : w = Qi(w, S);
            }
          else
            w = Qi(w, e(d, g, s, u));
      }), !l && s.modularCssLayers ? {
        "@layer sx": gd(s, vd(m, w))
      } : gd(s, vd(m, w));
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return n;
}
const so = s_();
so.filterProps = ["sx"];
function a_(e, n) {
  var o;
  const r = this;
  if (r.vars) {
    if (!((o = r.colorSchemes) != null && o[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let s = r.getColorSchemeSelector(e);
    return s === "&" ? n : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), {
      [s]: n
    });
  }
  return r.palette.mode === e ? n : {};
}
function Sp(e = {}, ...n) {
  const {
    breakpoints: r = {},
    palette: o = {},
    spacing: s,
    shape: l = {},
    ...u
  } = e, p = hw(r), c = xp(s);
  let h = ur({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...yw,
      ...l
    }
  }, u);
  return h = vw(h), h.applyStyles = a_, h = n.reduce((y, m) => ur(y, m), h), h.unstable_sxConfig = {
    ...Ts,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return so({
      sx: m,
      theme: this
    });
  }, h;
}
function l_(e) {
  return Object.keys(e).length === 0;
}
function Nl(e = null) {
  const n = Ie.useContext(Nd);
  return !n || l_(n) ? e : n;
}
const u_ = Sp();
function c_(e = u_) {
  return Nl(e);
}
function fl(e) {
  const n = cw(e);
  return e !== n && n.styles ? (n.styles.match(/^@layer\s+[^{]*$/) || (n.styles = `@layer global{${n.styles}}`), n) : e;
}
function wp({
  styles: e,
  themeId: n,
  defaultTheme: r = {}
}) {
  const o = c_(r), s = n && o[n] || o;
  let l = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(l) ? l = l.map((u) => fl(typeof u == "function" ? u(s) : u)) : l = fl(l)), /* @__PURE__ */ ie.jsx(kl, {
    styles: l
  });
}
process.env.NODE_ENV !== "production" && (wp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: ye.object,
  /**
   * @ignore
   */
  styles: ye.oneOfType([ye.array, ye.func, ye.number, ye.object, ye.string, ye.bool]),
  /**
   * @ignore
   */
  themeId: ye.string
});
const bd = (e) => e, f_ = () => {
  let e = bd;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = bd;
    }
  };
}, d_ = f_(), p_ = {
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
function h_(e, n, r = "Mui") {
  const o = p_[n];
  return o ? `${r}-${o}` : `${d_.generate(e)}-${n}`;
}
const _p = typeof window < "u" ? Ie.useLayoutEffect : Ie.useEffect;
function g_(e, n = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, r));
}
function Bl(e, n = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < n || e > r) && console.error(`MUI: The value provided ${e} is out of range [${n}, ${r}].`), g_(e, n, r);
}
function m_(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(n);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return yn(m_(e));
  const n = e.indexOf("("), r = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Bn(9, e));
  let o = e.substring(n + 1, e.length - 1), s;
  if (r === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Bn(10, s));
  } else
    o = o.split(",");
  return o = o.map((l) => parseFloat(l)), {
    type: r,
    values: o,
    colorSpace: s
  };
}
const v_ = (e) => {
  const n = yn(e);
  return n.values.slice(0, 3).map((r, o) => n.type.includes("hsl") && o !== 0 ? `${r}%` : r).join(" ");
}, qi = (e, n) => {
  try {
    return v_(e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
};
function Ms(e) {
  const {
    type: n,
    colorSpace: r
  } = e;
  let {
    values: o
  } = e;
  return n.includes("rgb") ? o = o.map((s, l) => l < 3 ? parseInt(s, 10) : s) : n.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), n.includes("color") ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${n}(${o})`;
}
function Ep(e) {
  e = yn(e);
  const {
    values: n
  } = e, r = n[0], o = n[1] / 100, s = n[2] / 100, l = o * Math.min(s, 1 - s), u = (h, y = (h + r / 30) % 12) => s - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let p = "rgb";
  const c = [Math.round(u(0) * 255), Math.round(u(8) * 255), Math.round(u(4) * 255)];
  return e.type === "hsla" && (p += "a", c.push(n[3])), Ms({
    type: p,
    values: c
  });
}
function Tl(e) {
  e = yn(e);
  let n = e.type === "hsl" || e.type === "hsla" ? yn(Ep(e)).values : e.values;
  return n = n.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function xd(e, n) {
  const r = Tl(e), o = Tl(n);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function mt(e, n) {
  return e = yn(e), n = Bl(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, Ms(e);
}
function $n(e, n, r) {
  try {
    return mt(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Is(e, n) {
  if (e = yn(e), n = Bl(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - n;
  return Ms(e);
}
function Ue(e, n, r) {
  try {
    return Is(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Os(e, n) {
  if (e = yn(e), n = Bl(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * n;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * n;
  return Ms(e);
}
function Xe(e, n, r) {
  try {
    return Os(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function y_(e, n = 0.15) {
  return Tl(e) > 0.5 ? Is(e, n) : Os(e, n);
}
function ts(e, n, r) {
  try {
    return y_(e, n);
  } catch {
    return e;
  }
}
const b_ = "exact-prop: ​";
function Cp(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [b_]: (n) => {
      const r = Object.keys(n).filter((o) => !e.hasOwnProperty(o));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Fl = /* @__PURE__ */ Ie.createContext(null);
process.env.NODE_ENV !== "production" && (Fl.displayName = "ThemeContext");
function Vl() {
  const e = Ie.useContext(Fl);
  return process.env.NODE_ENV !== "production" && Ie.useDebugValue(e), e;
}
const x_ = typeof Symbol == "function" && Symbol.for, S_ = x_ ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function w_(e, n) {
  if (typeof n == "function") {
    const r = n(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...n
  };
}
function gs(e) {
  const {
    children: n,
    theme: r
  } = e, o = Vl();
  process.env.NODE_ENV !== "production" && o === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Ie.useMemo(() => {
    const l = o === null ? {
      ...r
    } : w_(o, r);
    return l != null && (l[S_] = o !== null), l;
  }, [r, o]);
  return /* @__PURE__ */ ie.jsx(Fl.Provider, {
    value: s,
    children: n
  });
}
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  /**
   * Your component tree.
   */
  children: ye.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ye.oneOfType([ye.object, ye.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (gs.propTypes = Cp(gs.propTypes));
const __ = /* @__PURE__ */ Ie.createContext();
function Tp({
  value: e,
  ...n
}) {
  return /* @__PURE__ */ ie.jsx(__.Provider, {
    value: e ?? !0,
    ...n
  });
}
process.env.NODE_ENV !== "production" && (Tp.propTypes = {
  children: ye.node,
  value: ye.bool
});
const E_ = /* @__PURE__ */ Ie.createContext(void 0);
function Mp({
  value: e,
  children: n
}) {
  return /* @__PURE__ */ ie.jsx(E_.Provider, {
    value: e,
    children: n
  });
}
process.env.NODE_ENV !== "production" && (Mp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: ye.node,
  /**
   * @ignore
   */
  value: ye.object
});
let Sd = 0;
function C_(e) {
  const [n, r] = Ie.useState(e), o = e || n;
  return Ie.useEffect(() => {
    n == null && (Sd += 1, r(`mui-${Sd}`));
  }, [n]), o;
}
const T_ = {
  ...Ie
}, wd = T_.useId;
function M_(e) {
  return wd !== void 0 ? wd() : C_(e);
}
function I_(e) {
  const n = Nl(), r = M_() || "", {
    modularCssLayers: o
  } = e;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || n !== null ? s = "" : typeof o == "string" ? s = o.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, _p(() => {
    var p, c;
    const l = document.querySelector("head");
    if (!l)
      return;
    const u = l.firstChild;
    if (s) {
      if (u && ((p = u.hasAttribute) != null && p.call(u, "data-mui-layer-order")) && u.getAttribute("data-mui-layer-order") === r)
        return;
      const h = document.createElement("style");
      h.setAttribute("data-mui-layer-order", r), h.textContent = s, l.prepend(h);
    } else
      (c = l.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || c.remove();
  }, [s, r]), s ? /* @__PURE__ */ ie.jsx(wp, {
    styles: s
  }) : null;
}
const _d = {};
function Ed(e, n, r, o = !1) {
  return Ie.useMemo(() => {
    const s = e && n[e] || n;
    if (typeof r == "function") {
      const l = r(s), u = e ? {
        ...n,
        [e]: l
      } : l;
      return o ? () => u : u;
    }
    return e ? {
      ...n,
      [e]: r
    } : {
      ...n,
      ...r
    };
  }, [e, n, r, o]);
}
function eo(e) {
  const {
    children: n,
    theme: r,
    themeId: o
  } = e, s = Nl(_d), l = Vl() || _d;
  process.env.NODE_ENV !== "production" && (s === null && typeof r == "function" || o && s && !s[o] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const u = Ed(o, s, r), p = Ed(o, l, r, !0), c = (o ? u[o] : u).direction === "rtl", h = I_(u);
  return /* @__PURE__ */ ie.jsx(gs, {
    theme: p,
    children: /* @__PURE__ */ ie.jsx(Nd.Provider, {
      value: u,
      children: /* @__PURE__ */ ie.jsx(Tp, {
        value: c,
        children: /* @__PURE__ */ ie.jsxs(Mp, {
          value: o ? u[o].components : u.components,
          children: [h, n]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (eo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: ye.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ye.oneOfType([ye.func, ye.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: ye.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (eo.propTypes = Cp(eo.propTypes));
const Gl = "mode", jl = "color-scheme", O_ = "data-color-scheme";
function z_(e) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: s = Gl,
    colorSchemeStorageKey: l = jl,
    attribute: u = O_,
    colorSchemeNode: p = "document.documentElement",
    nonce: c
  } = e || {};
  let h = "", y = u;
  if (u === "class" && (y = ".%s"), u === "data" && (y = "[data-%s]"), y.startsWith(".")) {
    const w = y.substring(1);
    h += `${p}.classList.remove('${w}'.replace('%s', light), '${w}'.replace('%s', dark));
      ${p}.classList.add('${w}'.replace('%s', colorScheme));`;
  }
  const m = y.match(/\[([^[\]]+)\]/);
  if (m) {
    const [w, d] = m[1].split("=");
    d || (h += `${p}.removeAttribute('${w}'.replace('%s', light));
      ${p}.removeAttribute('${w}'.replace('%s', dark));`), h += `
      ${p}.setAttribute('${w}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else y !== ".%s" && (h += `${p}.setAttribute('${y}', colorScheme);`);
  return /* @__PURE__ */ ie.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? c : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${n}';
  const dark = localStorage.getItem('${l}-dark') || '${o}';
  const light = localStorage.getItem('${l}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function A_() {
}
const P_ = ({
  key: e,
  storageWindow: n
}) => (!n && typeof window < "u" && (n = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!n)
      return r;
    let o;
    try {
      o = n.localStorage.getItem(e);
    } catch {
    }
    return o || r;
  },
  set: (r) => {
    if (n)
      try {
        n.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!n)
      return A_;
    const o = (s) => {
      const l = s.newValue;
      s.key === e && r(l);
    };
    return n.addEventListener("storage", o), () => {
      n.removeEventListener("storage", o);
    };
  }
});
function dl() {
}
function Cd(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ip(e, n) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return n("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return n("dark");
}
function R_(e) {
  return Ip(e, (n) => {
    if (n === "light")
      return e.lightColorScheme;
    if (n === "dark")
      return e.darkColorScheme;
  });
}
function $_(e) {
  const {
    defaultMode: n = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: o,
    supportedColorSchemes: s = [],
    modeStorageKey: l = Gl,
    colorSchemeStorageKey: u = jl,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: c = P_,
    noSsr: h = !1
  } = e, y = s.join(","), m = s.length > 1, w = Ie.useMemo(() => c == null ? void 0 : c({
    key: l,
    storageWindow: p
  }), [c, l, p]), d = Ie.useMemo(() => c == null ? void 0 : c({
    key: `${u}-light`,
    storageWindow: p
  }), [c, u, p]), g = Ie.useMemo(() => c == null ? void 0 : c({
    key: `${u}-dark`,
    storageWindow: p
  }), [c, u, p]), [S, I] = Ie.useState(() => {
    const P = (w == null ? void 0 : w.get(n)) || n, N = (d == null ? void 0 : d.get(r)) || r, k = (g == null ? void 0 : g.get(o)) || o;
    return {
      mode: P,
      systemMode: Cd(P),
      lightColorScheme: N,
      darkColorScheme: k
    };
  }), [E, C] = Ie.useState(h || !m);
  Ie.useEffect(() => {
    C(!0);
  }, []);
  const T = R_(S), R = Ie.useCallback((P) => {
    I((N) => {
      if (P === N.mode)
        return N;
      const k = P ?? n;
      return w == null || w.set(k), {
        ...N,
        mode: k,
        systemMode: Cd(k)
      };
    });
  }, [w, n]), z = Ie.useCallback((P) => {
    P ? typeof P == "string" ? P && !y.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : I((N) => {
      const k = {
        ...N
      };
      return Ip(N, (B) => {
        B === "light" && (d == null || d.set(P), k.lightColorScheme = P), B === "dark" && (g == null || g.set(P), k.darkColorScheme = P);
      }), k;
    }) : I((N) => {
      const k = {
        ...N
      }, B = P.light === null ? r : P.light, b = P.dark === null ? o : P.dark;
      return B && (y.includes(B) ? (k.lightColorScheme = B, d == null || d.set(B)) : console.error(`\`${B}\` does not exist in \`theme.colorSchemes\`.`)), b && (y.includes(b) ? (k.darkColorScheme = b, g == null || g.set(b)) : console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`)), k;
    }) : I((N) => (d == null || d.set(r), g == null || g.set(o), {
      ...N,
      lightColorScheme: r,
      darkColorScheme: o
    }));
  }, [y, d, g, r, o]), j = Ie.useCallback((P) => {
    S.mode === "system" && I((N) => {
      const k = P != null && P.matches ? "dark" : "light";
      return N.systemMode === k ? N : {
        ...N,
        systemMode: k
      };
    });
  }, [S.mode]), W = Ie.useRef(j);
  return W.current = j, Ie.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const P = (...k) => W.current(...k), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(P), P(N), () => {
      N.removeListener(P);
    };
  }, [m]), Ie.useEffect(() => {
    if (m) {
      const P = (w == null ? void 0 : w.subscribe((B) => {
        (!B || ["light", "dark", "system"].includes(B)) && R(B || n);
      })) || dl, N = (d == null ? void 0 : d.subscribe((B) => {
        (!B || y.match(B)) && z({
          light: B
        });
      })) || dl, k = (g == null ? void 0 : g.subscribe((B) => {
        (!B || y.match(B)) && z({
          dark: B
        });
      })) || dl;
      return () => {
        P(), N(), k();
      };
    }
  }, [z, R, y, n, p, m, w, d, g]), {
    ...S,
    mode: E ? S.mode : void 0,
    systemMode: E ? S.systemMode : void 0,
    colorScheme: E ? T : void 0,
    setMode: R,
    setColorScheme: z
  };
}
const L_ = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function k_(e) {
  const {
    themeId: n,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: o = Gl,
    colorSchemeStorageKey: s = jl,
    disableTransitionOnChange: l = !1,
    defaultColorScheme: u,
    resolveTheme: p
  } = e, c = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, h = /* @__PURE__ */ Ie.createContext(void 0);
  process.env.NODE_ENV !== "production" && (h.displayName = "ColorSchemeContext");
  const y = () => Ie.useContext(h) || c, m = {}, w = {};
  function d(E) {
    var At, Pt, wt, cr;
    const {
      children: C,
      theme: T,
      modeStorageKey: R = o,
      colorSchemeStorageKey: z = s,
      disableTransitionOnChange: j = l,
      storageManager: W,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: k = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: B = !1,
      disableStyleSheetGeneration: b = !1,
      defaultMode: V = "system",
      forceThemeRerender: D = !1,
      noSsr: Q
    } = E, ae = Ie.useRef(!1), fe = Vl(), ee = Ie.useContext(h), be = !!ee && !B, Y = Ie.useMemo(() => T || (typeof r == "function" ? r() : r), [T]), Z = Y[n], de = Z || Y, {
      colorSchemes: pe = m,
      components: F = w,
      cssVarPrefix: q
    } = de, X = Object.keys(pe).filter((tt) => !!pe[tt]).join(","), le = Ie.useMemo(() => X.split(","), [X]), te = typeof u == "string" ? u : u.light, se = typeof u == "string" ? u : u.dark, ue = pe[te] && pe[se] ? V : ((Pt = (At = pe[de.defaultColorScheme]) == null ? void 0 : At.palette) == null ? void 0 : Pt.mode) || ((wt = de.palette) == null ? void 0 : wt.mode), {
      mode: ve,
      setMode: oe,
      systemMode: Te,
      lightColorScheme: ze,
      darkColorScheme: qe,
      colorScheme: xt,
      setColorScheme: it
    } = $_({
      supportedColorSchemes: le,
      defaultLightColorScheme: te,
      defaultDarkColorScheme: se,
      modeStorageKey: R,
      colorSchemeStorageKey: z,
      defaultMode: ue,
      storageManager: W,
      storageWindow: P,
      noSsr: Q
    });
    let Et = ve, et = xt;
    be && (Et = ee.mode, et = ee.colorScheme), process.env.NODE_ENV !== "production" && D && !de.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let St = et || de.defaultColorScheme;
    de.vars && !D && (St = de.defaultColorScheme);
    const Ze = Ie.useMemo(() => {
      var Wt;
      const tt = ((Wt = de.generateThemeVars) == null ? void 0 : Wt.call(de)) || de.vars, Be = {
        ...de,
        components: F,
        colorSchemes: pe,
        cssVarPrefix: q,
        vars: tt
      };
      if (typeof Be.generateSpacing == "function" && (Be.spacing = Be.generateSpacing()), St) {
        const Ct = pe[St];
        Ct && typeof Ct == "object" && Object.keys(Ct).forEach((_t) => {
          Ct[_t] && typeof Ct[_t] == "object" ? Be[_t] = {
            ...Be[_t],
            ...Ct[_t]
          } : Be[_t] = Ct[_t];
        });
      }
      return p ? p(Be) : Be;
    }, [de, St, F, pe, q]), ft = de.colorSchemeSelector;
    _p(() => {
      if (et && k && ft && ft !== "media") {
        const tt = ft;
        let Be = ft;
        if (tt === "class" && (Be = ".%s"), tt === "data" && (Be = "[data-%s]"), tt != null && tt.startsWith("data-") && !tt.includes("%s") && (Be = `[${tt}="%s"]`), Be.startsWith("."))
          k.classList.remove(...le.map((Wt) => Be.substring(1).replace("%s", Wt))), k.classList.add(Be.substring(1).replace("%s", et));
        else {
          const Wt = Be.replace("%s", et).match(/\[([^\]]+)\]/);
          if (Wt) {
            const [Ct, _t] = Wt[1].split("=");
            _t || le.forEach(($r) => {
              k.removeAttribute(Ct.replace(et, $r));
            }), k.setAttribute(Ct, _t ? _t.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(Be, et);
        }
      }
    }, [et, ft, k, le]), Ie.useEffect(() => {
      let tt;
      if (j && ae.current && N) {
        const Be = N.createElement("style");
        Be.appendChild(N.createTextNode(L_)), N.head.appendChild(Be), window.getComputedStyle(N.body), tt = setTimeout(() => {
          N.head.removeChild(Be);
        }, 1);
      }
      return () => {
        clearTimeout(tt);
      };
    }, [et, j, N]), Ie.useEffect(() => (ae.current = !0, () => {
      ae.current = !1;
    }), []);
    const Vt = Ie.useMemo(() => ({
      allColorSchemes: le,
      colorScheme: et,
      darkColorScheme: qe,
      lightColorScheme: ze,
      mode: Et,
      setColorScheme: it,
      setMode: process.env.NODE_ENV === "production" ? oe : (tt) => {
        Ze.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), oe(tt);
      },
      systemMode: Te
    }), [le, et, qe, ze, Et, it, oe, Te, Ze.colorSchemeSelector]);
    let Zt = !0;
    (b || de.cssVariables === !1 || be && (fe == null ? void 0 : fe.cssVarPrefix) === q) && (Zt = !1);
    const Ot = /* @__PURE__ */ ie.jsxs(Ie.Fragment, {
      children: [/* @__PURE__ */ ie.jsx(eo, {
        themeId: Z ? n : void 0,
        theme: Ze,
        children: C
      }), Zt && /* @__PURE__ */ ie.jsx(kl, {
        styles: ((cr = Ze.generateStyleSheets) == null ? void 0 : cr.call(Ze)) || []
      })]
    });
    return be ? Ot : /* @__PURE__ */ ie.jsx(h.Provider, {
      value: Vt,
      children: Ot
    });
  }
  process.env.NODE_ENV !== "production" && (d.propTypes = {
    /**
     * The component tree.
     */
    children: ye.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: ye.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: ye.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: ye.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: ye.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: ye.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: ye.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: ye.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: ye.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: ye.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: ye.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: ye.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: ye.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: ye.object
  });
  const g = typeof u == "string" ? u : u.light, S = typeof u == "string" ? u : u.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: y,
    getInitColorSchemeScript: (E) => z_({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: S,
      modeStorageKey: o,
      ...E
    })
  };
}
function D_(e = "") {
  function n(...o) {
    if (!o.length)
      return "";
    const s = o[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${n(...o.slice(1))})` : `, ${s}`;
  }
  return (o, ...s) => `var(--${e ? `${e}-` : ""}${o}${n(...s)})`;
}
const Td = (e, n, r, o = []) => {
  let s = e;
  n.forEach((l, u) => {
    u === n.length - 1 ? Array.isArray(s) ? s[Number(l)] = r : s && typeof s == "object" && (s[l] = r) : s && typeof s == "object" && (s[l] || (s[l] = o.includes(l) ? [] : {}), s = s[l]);
  });
}, W_ = (e, n, r) => {
  function o(s, l = [], u = []) {
    Object.entries(s).forEach(([p, c]) => {
      (!r || r && !r([...l, p])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...l, p], Array.isArray(c) ? [...u, p] : u) : n([...l, p], c, u));
    });
  }
  o(e);
}, N_ = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function pl(e, n) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: o
  } = n || {}, s = {}, l = {}, u = {};
  return W_(
    e,
    (p, c, h) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(p, c))) {
        const y = `--${r ? `${r}-` : ""}${p.join("-")}`, m = N_(p, c);
        Object.assign(s, {
          [y]: m
        }), Td(l, p, `var(${y})`, h), Td(u, p, `var(${y}, ${m})`, h);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: l,
    varsWithDefaults: u
  };
}
function B_(e, n = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: o,
    colorSchemeSelector: s,
    enableContrastVars: l
  } = n, {
    colorSchemes: u = {},
    components: p,
    defaultColorScheme: c = "light",
    ...h
  } = e, {
    vars: y,
    css: m,
    varsWithDefaults: w
  } = pl(h, n);
  let d = w;
  const g = {}, {
    [c]: S,
    ...I
  } = u;
  if (Object.entries(I || {}).forEach(([R, z]) => {
    const {
      vars: j,
      css: W,
      varsWithDefaults: P
    } = pl(z, n);
    d = ur(d, P), g[R] = {
      css: W,
      vars: j
    };
  }), S) {
    const {
      css: R,
      vars: z,
      varsWithDefaults: j
    } = pl(S, n);
    d = ur(d, j), g[c] = {
      css: R,
      vars: z
    };
  }
  function E(R, z) {
    var W, P;
    let j = s;
    if (s === "class" && (j = ".%s"), s === "data" && (j = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (j = `[${s}="%s"]`), R) {
      if (j === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((P = (W = u[R]) == null ? void 0 : W.palette) == null ? void 0 : P.mode) || R})`]: {
            ":root": z
          }
        };
      if (j)
        return e.defaultColorScheme === R ? `:root, ${j.replace("%s", String(R))}` : j.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let R = {
        ...y
      };
      return Object.entries(g).forEach(([, {
        vars: z
      }]) => {
        R = ur(R, z);
      }), R;
    },
    generateStyleSheets: () => {
      var N, k;
      const R = [], z = e.defaultColorScheme || "light";
      function j(B, b) {
        Object.keys(b).length && R.push(typeof B == "string" ? {
          [B]: {
            ...b
          }
        } : B);
      }
      j(r(void 0, {
        ...m
      }), m);
      const {
        [z]: W,
        ...P
      } = g;
      if (W) {
        const {
          css: B
        } = W, b = (k = (N = u[z]) == null ? void 0 : N.palette) == null ? void 0 : k.mode, V = !o && b ? {
          colorScheme: b,
          ...B
        } : {
          ...B
        };
        j(r(z, {
          ...V
        }), V);
      }
      return Object.entries(P).forEach(([B, {
        css: b
      }]) => {
        var Q, ae;
        const V = (ae = (Q = u[B]) == null ? void 0 : Q.palette) == null ? void 0 : ae.mode, D = !o && V ? {
          colorScheme: V,
          ...b
        } : {
          ...b
        };
        j(r(B, {
          ...D
        }), D);
      }), l && R.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), R;
    }
  };
}
function F_(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const to = {
  black: "#000",
  white: "#fff"
}, V_ = {
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
}, li = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ui = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, ci = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, fi = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, di = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Op() {
  return {
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
      paper: to.white,
      default: to.white
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
  };
}
const zp = Op();
function Ap() {
  return {
    text: {
      primary: to.white,
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
      active: to.white,
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
}
const Ml = Ap();
function Md(e, n, r, o) {
  const s = o.light || o, l = o.dark || o * 1.5;
  e[n] || (e.hasOwnProperty(r) ? e[n] = e[r] : n === "light" ? e.light = Os(e.main, s) : n === "dark" && (e.dark = Is(e.main, l)));
}
function Id(e, n, r, o, s) {
  const l = s.light || s, u = s.dark || s * 1.5;
  n[r] || (n.hasOwnProperty(o) ? n[r] = n[o] : r === "light" ? n.light = `color-mix(in ${e}, ${n.main}, #fff ${(l * 100).toFixed(0)}%)` : r === "dark" && (n.dark = `color-mix(in ${e}, ${n.main}, #000 ${(u * 100).toFixed(0)}%)`));
}
function G_(e = "light") {
  return e === "dark" ? {
    main: ci[200],
    light: ci[50],
    dark: ci[400]
  } : {
    main: ci[700],
    light: ci[400],
    dark: ci[800]
  };
}
function j_(e = "light") {
  return e === "dark" ? {
    main: li[200],
    light: li[50],
    dark: li[400]
  } : {
    main: li[500],
    light: li[300],
    dark: li[700]
  };
}
function Y_(e = "light") {
  return e === "dark" ? {
    main: ui[500],
    light: ui[300],
    dark: ui[700]
  } : {
    main: ui[700],
    light: ui[400],
    dark: ui[800]
  };
}
function H_(e = "light") {
  return e === "dark" ? {
    main: fi[400],
    light: fi[300],
    dark: fi[700]
  } : {
    main: fi[700],
    light: fi[500],
    dark: fi[900]
  };
}
function U_(e = "light") {
  return e === "dark" ? {
    main: di[400],
    light: di[300],
    dark: di[700]
  } : {
    main: di[800],
    light: di[500],
    dark: di[900]
  };
}
function X_(e = "light") {
  return e === "dark" ? {
    main: Xi[400],
    light: Xi[300],
    dark: Xi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xi[500],
    dark: Xi[900]
  };
}
function q_(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Yl(e) {
  const {
    mode: n = "light",
    contrastThreshold: r = 3,
    tonalOffset: o = 0.2,
    colorSpace: s,
    ...l
  } = e, u = e.primary || G_(n), p = e.secondary || j_(n), c = e.error || Y_(n), h = e.info || H_(n), y = e.success || U_(n), m = e.warning || X_(n);
  function w(I) {
    if (s)
      return q_(I);
    const E = xd(I, Ml.text.primary) >= r ? Ml.text.primary : zp.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = xd(I, E);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${E} on ${I}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: I,
    name: E,
    mainShade: C = 500,
    lightShade: T = 300,
    darkShade: R = 700
  }) => {
    if (I = {
      ...I
    }, !I.main && I[C] && (I.main = I[C]), !I.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Bn(11, E ? ` (${E})` : "", C));
    if (typeof I.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(I.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Bn(12, E ? ` (${E})` : "", JSON.stringify(I.main)));
    return s ? (Id(s, I, "light", T, o), Id(s, I, "dark", R, o)) : (Md(I, "light", T, o), Md(I, "dark", R, o)), I.contrastText || (I.contrastText = w(I.main)), I;
  };
  let g;
  return n === "light" ? g = Op() : n === "dark" && (g = Ap()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${n}\` is not supported.`)), ur({
    // A collection of common colors.
    common: {
      ...to
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: n,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: u,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: y,
      name: "success"
    }),
    // The grey colors.
    grey: V_,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: w,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...g
  }, l);
}
function K_(e) {
  const n = {};
  return Object.entries(e).forEach((o) => {
    const [s, l] = o;
    typeof l == "object" && (n[s] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), n;
}
function J_(e, n) {
  return {
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
    },
    ...n
  };
}
function Z_(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Od = {
  textTransform: "uppercase"
}, zd = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pp(e, n) {
  const {
    fontFamily: r = zd,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: y,
    ...m
  } = typeof n == "function" ? n(e) : n;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const w = o / 14, d = y || ((I) => `${I / c * w}rem`), g = (I, E, C, T, R) => ({
    fontFamily: r,
    fontWeight: I,
    fontSize: d(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === zd ? {
      letterSpacing: `${Z_(T / E)}em`
    } : {},
    ...R,
    ...h
  }), S = {
    h1: g(s, 96, 1.167, -1.5),
    h2: g(s, 60, 1.2, -0.5),
    h3: g(l, 48, 1.167, 0),
    h4: g(l, 34, 1.235, 0.25),
    h5: g(l, 24, 1.334, 0),
    h6: g(u, 20, 1.6, 0.15),
    subtitle1: g(l, 16, 1.75, 0.15),
    subtitle2: g(u, 14, 1.57, 0.1),
    body1: g(l, 16, 1.5, 0.15),
    body2: g(l, 14, 1.43, 0.15),
    button: g(u, 14, 1.75, 0.4, Od),
    caption: g(l, 12, 1.66, 0.4),
    overline: g(l, 12, 2.66, 1, Od),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ur({
    htmlFontSize: c,
    pxToRem: d,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: l,
    fontWeightMedium: u,
    fontWeightBold: p,
    ...S
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Q_ = 0.2, eE = 0.14, tE = 0.12;
function at(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Q_})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${eE})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tE})`].join(",");
}
const rE = ["none", at(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), at(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), at(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), at(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), at(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), at(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), at(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), at(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), at(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), at(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), at(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), at(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), at(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), at(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), at(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), at(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), at(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), at(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), at(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), at(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), at(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), at(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), at(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), at(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], nE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, iE = {
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
function Ad(e) {
  return `${Math.round(e)}ms`;
}
function oE(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function sE(e) {
  const n = {
    ...nE,
    ...e.easing
  }, r = {
    ...iE,
    ...e.duration
  };
  return {
    getAutoHeightDuration: oE,
    create: (s = ["all"], l = {}) => {
      const {
        duration: u = r.standard,
        easing: p = n.easeInOut,
        delay: c = 0,
        ...h
      } = l;
      if (process.env.NODE_ENV !== "production") {
        const y = (w) => typeof w == "string", m = (w) => !Number.isNaN(parseFloat(w));
        !y(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !m(u) && !y(u) && console.error(`MUI: Argument "duration" must be a number or a string but found ${u}.`), y(p) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !y(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof l != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof u == "string" ? u : Ad(u)} ${p} ${typeof c == "string" ? c : Ad(c)}`).join(",");
    },
    ...e,
    easing: n,
    duration: r
  };
}
const aE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function lE(e) {
  return gn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rp(e = {}) {
  const n = {
    ...e
  };
  function r(o) {
    const s = Object.entries(o);
    for (let l = 0; l < s.length; l++) {
      const [u, p] = s[l];
      !lE(p) || u.startsWith("unstable_") ? delete o[u] : gn(p) && (o[u] = {
        ...p
      }, r(o[u]));
    }
  }
  return r(n), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Pd(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const uE = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const n = e.match(/\d*\.?\d+/g);
  if (!n)
    return 0;
  let r = 0;
  for (let o = 0; o < n.length; o += 1)
    r += +n[o];
  return r;
};
function cE(e) {
  Object.assign(e, {
    alpha(n, r) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${n} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : o.vars ? `rgba(${n.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : mt(n, uE(r));
    },
    lighten(n, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${n}, #fff ${Pd(r)})` : Os(n, r);
    },
    darken(n, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${n}, #000 ${Pd(r)})` : Is(n, r);
    }
  });
}
function Il(e = {}, ...n) {
  const {
    breakpoints: r,
    mixins: o = {},
    spacing: s,
    palette: l = {},
    transitions: u = {},
    typography: p = {},
    shape: c,
    colorSpace: h,
    ...y
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Bn(20));
  const m = Yl({
    ...l,
    colorSpace: h
  }), w = Sp(e);
  let d = ur(w, {
    mixins: J_(w.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rE.slice(),
    typography: Pp(m, p),
    transitions: sE(u),
    zIndex: {
      ...aE
    }
  });
  if (d = ur(d, y), d = n.reduce((g, S) => ur(g, S), d), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (I, E) => {
      let C;
      for (C in I) {
        const T = I[C];
        if (g.includes(C) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = h_("", C);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(I, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          I[C] = {};
        }
      }
    };
    Object.keys(d.components).forEach((I) => {
      const E = d.components[I].styleOverrides;
      E && I.startsWith("Mui") && S(E, I);
    });
  }
  return d.unstable_sxConfig = {
    ...Ts,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, d.unstable_sx = function(S) {
    return so({
      sx: S,
      theme: this
    });
  }, d.toRuntimeSource = Rp, cE(d), d;
}
function fE(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const dE = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const r = fE(n);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function $p(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Lp(e) {
  return e === "dark" ? dE : [];
}
function pE(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: o,
    colorSpace: s,
    ...l
  } = e, u = Yl({
    ...n,
    colorSpace: s
  });
  return {
    palette: u,
    opacity: {
      ...$p(u.mode),
      ...r
    },
    overlays: o || Lp(u.mode),
    ...l
  };
}
function hE(e) {
  var n;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((n = e[1]) != null && n.match(/(mode|contrastThreshold|tonalOffset)/));
}
const gE = (e) => [...[...Array(25)].map((n, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], mE = (e) => (n, r) => {
  const o = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let l = s;
  if (s === "class" && (l = ".%s"), s === "data" && (l = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (l = `[${s}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const u = {};
      return gE(e.cssVarPrefix).forEach((p) => {
        u[p] = r[p], delete r[p];
      }), l === "media" ? {
        [o]: r,
        "@media (prefers-color-scheme: dark)": {
          [o]: u
        }
      } : l ? {
        [l.replace("%s", n)]: u,
        [`${o}, ${l.replace("%s", n)}`]: r
      } : {
        [o]: {
          ...r,
          ...u
        }
      };
    }
    if (l && l !== "media")
      return `${o}, ${l.replace("%s", String(n))}`;
  } else if (n) {
    if (l === "media")
      return {
        [`@media (prefers-color-scheme: ${String(n)})`]: {
          [o]: r
        }
      };
    if (l)
      return l.replace("%s", String(n));
  }
  return o;
};
function vE(e, n) {
  n.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function H(e, n, r) {
  !e[n] && r && (e[n] = r);
}
function Ki(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ep(e);
}
function Zr(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = qi(Ki(e[n]), `MUI: Can't create \`palette.${n}Channel\` because \`palette.${n}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${n}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function yE(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Wr = (e) => {
  try {
    return e();
  } catch {
  }
}, bE = (e = "mui") => D_(e);
function hl(e, n, r, o, s) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const l = s === "dark" ? "dark" : "light";
  if (!o) {
    n[s] = pE({
      ...r,
      palette: {
        mode: l,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: u,
    ...p
  } = Il({
    ...o,
    palette: {
      mode: l,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return n[s] = {
    ...r,
    palette: u,
    opacity: {
      ...$p(l),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Lp(l)
  }, p;
}
function xE(e = {}, ...n) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: s = !1,
    cssVarPrefix: l = "mui",
    nativeColor: u = !1,
    shouldSkipGeneratingVar: p = hE,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...y
  } = e, m = Object.keys(r)[0], w = o || (r.light && m !== "light" ? "light" : m), d = bE(l), {
    [w]: g,
    light: S,
    dark: I,
    ...E
  } = r, C = {
    ...E
  };
  let T = g;
  if ((w === "dark" && !("dark" in r) || w === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${w}\` option is either missing or invalid.` : Bn(21, w));
  let R;
  u && (R = "oklch");
  const z = hl(R, C, T, y, w);
  S && !C.light && hl(R, C, S, void 0, "light"), I && !C.dark && hl(R, C, I, void 0, "dark");
  let j = {
    defaultColorScheme: w,
    ...z,
    cssVarPrefix: l,
    colorSchemeSelector: c,
    rootSelector: h,
    getCssVar: d,
    colorSchemes: C,
    font: {
      ...K_(z.typography),
      ...z.font
    },
    spacing: yE(y.spacing)
  };
  Object.keys(j.colorSchemes).forEach((B) => {
    const b = j.colorSchemes[B].palette, V = (Q) => {
      const ae = Q.split("-"), fe = ae[1], ee = ae[2];
      return d(Q, b[fe][ee]);
    };
    b.mode === "light" && (H(b.common, "background", "#fff"), H(b.common, "onBackground", "#000")), b.mode === "dark" && (H(b.common, "background", "#000"), H(b.common, "onBackground", "#fff"));
    function D(Q, ae, fe) {
      if (R) {
        let ee;
        return Q === $n && (ee = `transparent ${((1 - fe) * 100).toFixed(0)}%`), Q === Ue && (ee = `#000 ${(fe * 100).toFixed(0)}%`), Q === Xe && (ee = `#fff ${(fe * 100).toFixed(0)}%`), `color-mix(in ${R}, ${ae}, ${ee})`;
      }
      return Q(ae, fe);
    }
    if (vE(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      H(b.Alert, "errorColor", D(Ue, u ? d("palette-error-light") : b.error.light, 0.6)), H(b.Alert, "infoColor", D(Ue, u ? d("palette-info-light") : b.info.light, 0.6)), H(b.Alert, "successColor", D(Ue, u ? d("palette-success-light") : b.success.light, 0.6)), H(b.Alert, "warningColor", D(Ue, u ? d("palette-warning-light") : b.warning.light, 0.6)), H(b.Alert, "errorFilledBg", V("palette-error-main")), H(b.Alert, "infoFilledBg", V("palette-info-main")), H(b.Alert, "successFilledBg", V("palette-success-main")), H(b.Alert, "warningFilledBg", V("palette-warning-main")), H(b.Alert, "errorFilledColor", Wr(() => b.getContrastText(b.error.main))), H(b.Alert, "infoFilledColor", Wr(() => b.getContrastText(b.info.main))), H(b.Alert, "successFilledColor", Wr(() => b.getContrastText(b.success.main))), H(b.Alert, "warningFilledColor", Wr(() => b.getContrastText(b.warning.main))), H(b.Alert, "errorStandardBg", D(Xe, u ? d("palette-error-light") : b.error.light, 0.9)), H(b.Alert, "infoStandardBg", D(Xe, u ? d("palette-info-light") : b.info.light, 0.9)), H(b.Alert, "successStandardBg", D(Xe, u ? d("palette-success-light") : b.success.light, 0.9)), H(b.Alert, "warningStandardBg", D(Xe, u ? d("palette-warning-light") : b.warning.light, 0.9)), H(b.Alert, "errorIconColor", V("palette-error-main")), H(b.Alert, "infoIconColor", V("palette-info-main")), H(b.Alert, "successIconColor", V("palette-success-main")), H(b.Alert, "warningIconColor", V("palette-warning-main")), H(b.AppBar, "defaultBg", V("palette-grey-100")), H(b.Avatar, "defaultBg", V("palette-grey-400")), H(b.Button, "inheritContainedBg", V("palette-grey-300")), H(b.Button, "inheritContainedHoverBg", V("palette-grey-A100")), H(b.Chip, "defaultBorder", V("palette-grey-400")), H(b.Chip, "defaultAvatarColor", V("palette-grey-700")), H(b.Chip, "defaultIconColor", V("palette-grey-700")), H(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), H(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), H(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), H(b.LinearProgress, "primaryBg", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), H(b.LinearProgress, "secondaryBg", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), H(b.LinearProgress, "errorBg", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), H(b.LinearProgress, "infoBg", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), H(b.LinearProgress, "successBg", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), H(b.LinearProgress, "warningBg", D(Xe, u ? d("palette-warning-light") : b.warning.main, 0.62)), H(b.Skeleton, "bg", R ? D($n, u ? d("palette-text-primary") : b.text.primary, 0.11) : `rgba(${V("palette-text-primaryChannel")} / 0.11)`), H(b.Slider, "primaryTrack", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), H(b.Slider, "secondaryTrack", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), H(b.Slider, "errorTrack", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), H(b.Slider, "infoTrack", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), H(b.Slider, "successTrack", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), H(b.Slider, "warningTrack", D(Xe, u ? d("palette-warning-main") : b.warning.main, 0.62));
      const Q = R ? D(Ue, u ? d("palette-background-default") : b.background.default, 0.6825) : ts(b.background.default, 0.8);
      H(b.SnackbarContent, "bg", Q), H(b.SnackbarContent, "color", Wr(() => R ? Ml.text.primary : b.getContrastText(Q))), H(b.SpeedDialAction, "fabHoverBg", ts(b.background.paper, 0.15)), H(b.StepConnector, "border", V("palette-grey-400")), H(b.StepContent, "border", V("palette-grey-400")), H(b.Switch, "defaultColor", V("palette-common-white")), H(b.Switch, "defaultDisabledColor", V("palette-grey-100")), H(b.Switch, "primaryDisabledColor", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), H(b.Switch, "secondaryDisabledColor", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), H(b.Switch, "errorDisabledColor", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), H(b.Switch, "infoDisabledColor", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), H(b.Switch, "successDisabledColor", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), H(b.Switch, "warningDisabledColor", D(Xe, u ? d("palette-warning-main") : b.warning.main, 0.62)), H(b.TableCell, "border", D(Xe, $n(u ? d("palette-divider") : b.divider, 1), 0.88)), H(b.Tooltip, "bg", D($n, u ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      H(b.Alert, "errorColor", D(Xe, u ? d("palette-error-light") : b.error.light, 0.6)), H(b.Alert, "infoColor", D(Xe, u ? d("palette-info-light") : b.info.light, 0.6)), H(b.Alert, "successColor", D(Xe, u ? d("palette-success-light") : b.success.light, 0.6)), H(b.Alert, "warningColor", D(Xe, u ? d("palette-warning-light") : b.warning.light, 0.6)), H(b.Alert, "errorFilledBg", V("palette-error-dark")), H(b.Alert, "infoFilledBg", V("palette-info-dark")), H(b.Alert, "successFilledBg", V("palette-success-dark")), H(b.Alert, "warningFilledBg", V("palette-warning-dark")), H(b.Alert, "errorFilledColor", Wr(() => b.getContrastText(b.error.dark))), H(b.Alert, "infoFilledColor", Wr(() => b.getContrastText(b.info.dark))), H(b.Alert, "successFilledColor", Wr(() => b.getContrastText(b.success.dark))), H(b.Alert, "warningFilledColor", Wr(() => b.getContrastText(b.warning.dark))), H(b.Alert, "errorStandardBg", D(Ue, u ? d("palette-error-light") : b.error.light, 0.9)), H(b.Alert, "infoStandardBg", D(Ue, u ? d("palette-info-light") : b.info.light, 0.9)), H(b.Alert, "successStandardBg", D(Ue, u ? d("palette-success-light") : b.success.light, 0.9)), H(b.Alert, "warningStandardBg", D(Ue, u ? d("palette-warning-light") : b.warning.light, 0.9)), H(b.Alert, "errorIconColor", V("palette-error-main")), H(b.Alert, "infoIconColor", V("palette-info-main")), H(b.Alert, "successIconColor", V("palette-success-main")), H(b.Alert, "warningIconColor", V("palette-warning-main")), H(b.AppBar, "defaultBg", V("palette-grey-900")), H(b.AppBar, "darkBg", V("palette-background-paper")), H(b.AppBar, "darkColor", V("palette-text-primary")), H(b.Avatar, "defaultBg", V("palette-grey-600")), H(b.Button, "inheritContainedBg", V("palette-grey-800")), H(b.Button, "inheritContainedHoverBg", V("palette-grey-700")), H(b.Chip, "defaultBorder", V("palette-grey-700")), H(b.Chip, "defaultAvatarColor", V("palette-grey-300")), H(b.Chip, "defaultIconColor", V("palette-grey-300")), H(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), H(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), H(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), H(b.LinearProgress, "primaryBg", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.5)), H(b.LinearProgress, "secondaryBg", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.5)), H(b.LinearProgress, "errorBg", D(Ue, u ? d("palette-error-main") : b.error.main, 0.5)), H(b.LinearProgress, "infoBg", D(Ue, u ? d("palette-info-main") : b.info.main, 0.5)), H(b.LinearProgress, "successBg", D(Ue, u ? d("palette-success-main") : b.success.main, 0.5)), H(b.LinearProgress, "warningBg", D(Ue, u ? d("palette-warning-main") : b.warning.main, 0.5)), H(b.Skeleton, "bg", R ? D($n, u ? d("palette-text-primary") : b.text.primary, 0.13) : `rgba(${V("palette-text-primaryChannel")} / 0.13)`), H(b.Slider, "primaryTrack", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.5)), H(b.Slider, "secondaryTrack", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.5)), H(b.Slider, "errorTrack", D(Ue, u ? d("palette-error-main") : b.error.main, 0.5)), H(b.Slider, "infoTrack", D(Ue, u ? d("palette-info-main") : b.info.main, 0.5)), H(b.Slider, "successTrack", D(Ue, u ? d("palette-success-main") : b.success.main, 0.5)), H(b.Slider, "warningTrack", D(Ue, u ? d("palette-warning-light") : b.warning.main, 0.5));
      const Q = R ? D(Xe, u ? d("palette-background-default") : b.background.default, 0.985) : ts(b.background.default, 0.98);
      H(b.SnackbarContent, "bg", Q), H(b.SnackbarContent, "color", Wr(() => R ? zp.text.primary : b.getContrastText(Q))), H(b.SpeedDialAction, "fabHoverBg", ts(b.background.paper, 0.15)), H(b.StepConnector, "border", V("palette-grey-600")), H(b.StepContent, "border", V("palette-grey-600")), H(b.Switch, "defaultColor", V("palette-grey-300")), H(b.Switch, "defaultDisabledColor", V("palette-grey-600")), H(b.Switch, "primaryDisabledColor", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.55)), H(b.Switch, "secondaryDisabledColor", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.55)), H(b.Switch, "errorDisabledColor", D(Ue, u ? d("palette-error-main") : b.error.main, 0.55)), H(b.Switch, "infoDisabledColor", D(Ue, u ? d("palette-info-main") : b.info.main, 0.55)), H(b.Switch, "successDisabledColor", D(Ue, u ? d("palette-success-main") : b.success.main, 0.55)), H(b.Switch, "warningDisabledColor", D(Ue, u ? d("palette-warning-light") : b.warning.main, 0.55)), H(b.TableCell, "border", D(Ue, $n(u ? d("palette-divider") : b.divider, 1), 0.68)), H(b.Tooltip, "bg", D($n, u ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    Zr(b.background, "default"), Zr(b.background, "paper"), Zr(b.common, "background"), Zr(b.common, "onBackground"), Zr(b, "divider"), Object.keys(b).forEach((Q) => {
      const ae = b[Q];
      Q !== "tonalOffset" && ae && typeof ae == "object" && (ae.main && H(b[Q], "mainChannel", qi(Ki(ae.main))), ae.light && H(b[Q], "lightChannel", qi(Ki(ae.light))), ae.dark && H(b[Q], "darkChannel", qi(Ki(ae.dark))), ae.contrastText && H(b[Q], "contrastTextChannel", qi(Ki(ae.contrastText))), Q === "text" && (Zr(b[Q], "primary"), Zr(b[Q], "secondary")), Q === "action" && (ae.active && Zr(b[Q], "active"), ae.selected && Zr(b[Q], "selected")));
    });
  }), j = n.reduce((B, b) => ur(B, b), j);
  const W = {
    prefix: l,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: p,
    getSelector: mE(j),
    enableContrastVars: u
  }, {
    vars: P,
    generateThemeVars: N,
    generateStyleSheets: k
  } = B_(j, W);
  return j.vars = P, Object.entries(j.colorSchemes[j.defaultColorScheme]).forEach(([B, b]) => {
    j[B] = b;
  }), j.generateThemeVars = N, j.generateStyleSheets = k, j.generateSpacing = function() {
    return xp(y.spacing, Dl(this));
  }, j.getColorSchemeSelector = F_(c), j.spacing = j.generateSpacing(), j.shouldSkipGeneratingVar = p, j.unstable_sxConfig = {
    ...Ts,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, j.unstable_sx = function(b) {
    return so({
      sx: b,
      theme: this
    });
  }, j.toRuntimeSource = Rp, j;
}
function Rd(e, n, r) {
  e.colorSchemes && r && (e.colorSchemes[n] = {
    ...r !== !0 && r,
    palette: Yl({
      ...r === !0 ? {} : r.palette,
      mode: n
    })
    // cast type to skip module augmentation test
  });
}
function kp(e = {}, ...n) {
  const {
    palette: r,
    cssVariables: o = !1,
    colorSchemes: s = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: l = r == null ? void 0 : r.mode,
    ...u
  } = e, p = l || "light", c = s == null ? void 0 : s[p], h = {
    ...s,
    ...r ? {
      [p]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Il(e, ...n);
    let y = r;
    "palette" in e || h[p] && (h[p] !== !0 ? y = h[p].palette : p === "dark" && (y = {
      mode: "dark"
    }));
    const m = Il({
      ...e,
      palette: y
    }, ...n);
    return m.defaultColorScheme = p, m.colorSchemes = h, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: m.palette
    }, Rd(m, "dark", h.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: m.palette
    }, Rd(m, "light", h.light)), m;
  }
  return !r && !("light" in h) && p === "light" && (h.light = !0), xE({
    ...u,
    colorSchemes: h,
    defaultColorScheme: p,
    ...typeof o != "boolean" && o
  }, ...n);
}
function SE({
  theme: e,
  ...n
}) {
  const r = Si in e ? e[Si] : void 0;
  return /* @__PURE__ */ ie.jsx(eo, {
    ...n,
    themeId: r ? Si : void 0,
    theme: r || e
  });
}
const rs = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (ye.string, ye.string, ye.string, ye.string, ye.string, ye.oneOf(["dark", "light", "system"]), ye.string, ye.string);
const {
  CssVarsProvider: wE
} = k_({
  themeId: Si,
  // @ts-ignore ignore module augmentation tests
  theme: () => kp({
    cssVariables: !0
  }),
  colorSchemeStorageKey: rs.colorSchemeStorageKey,
  modeStorageKey: rs.modeStorageKey,
  defaultColorScheme: {
    light: rs.defaultLightColorScheme,
    dark: rs.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const n = {
      ...e,
      typography: Pp(e.palette, e.typography)
    };
    return n.unstable_sx = function(o) {
      return so({
        sx: o,
        theme: this
      });
    }, n;
  }
}), _E = wE;
function EE({
  theme: e,
  ...n
}) {
  const r = Ie.useMemo(() => {
    if (typeof e == "function")
      return e;
    const o = Si in e ? e[Si] : e;
    return "colorSchemes" in o ? null : "vars" in o ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ ie.jsx(SE, {
    theme: r,
    ...n
  }) : /* @__PURE__ */ ie.jsx(_E, {
    theme: e,
    ...n
  });
}
var ms = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ms.exports;
(function(e, n) {
  (function() {
    var r, o = "4.17.23", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", p = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", h = 500, y = "__lodash_placeholder__", m = 1, w = 2, d = 4, g = 1, S = 2, I = 1, E = 2, C = 4, T = 8, R = 16, z = 32, j = 64, W = 128, P = 256, N = 512, k = 30, B = "...", b = 800, V = 16, D = 1, Q = 2, ae = 3, fe = 1 / 0, ee = 9007199254740991, be = 17976931348623157e292, Y = NaN, Z = 4294967295, de = Z - 1, pe = Z >>> 1, F = [
      ["ary", W],
      ["bind", I],
      ["bindKey", E],
      ["curry", T],
      ["curryRight", R],
      ["flip", N],
      ["partial", z],
      ["partialRight", j],
      ["rearg", P]
    ], q = "[object Arguments]", X = "[object Array]", le = "[object AsyncFunction]", te = "[object Boolean]", se = "[object Date]", ue = "[object DOMException]", ve = "[object Error]", oe = "[object Function]", Te = "[object GeneratorFunction]", ze = "[object Map]", qe = "[object Number]", xt = "[object Null]", it = "[object Object]", Et = "[object Promise]", et = "[object Proxy]", St = "[object RegExp]", Ze = "[object Set]", ft = "[object String]", Vt = "[object Symbol]", Zt = "[object Undefined]", Ot = "[object WeakMap]", At = "[object WeakSet]", Pt = "[object ArrayBuffer]", wt = "[object DataView]", cr = "[object Float32Array]", tt = "[object Float64Array]", Be = "[object Int8Array]", Wt = "[object Int16Array]", Ct = "[object Int32Array]", _t = "[object Uint8Array]", $r = "[object Uint8ClampedArray]", tn = "[object Uint16Array]", rn = "[object Uint32Array]", nn = /\b__p \+= '';/g, Sn = /\b(__p \+=) '' \+/g, Mr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Nr = /&(?:amp|lt|gt|quot|#39);/g, Br = /[&<>"']/g, wn = RegExp(Nr.source), Fn = RegExp(Br.source), _n = /<%-([\s\S]+?)%>/g, Vn = /<%([\s\S]+?)%>/g, on = /<%=([\s\S]+?)%>/g, En = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gn = /^\w*$/, jn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yn = /[\\^$.*+?()[\]{}|]/g, ao = RegExp(Yn.source), Ti = /^\s+/, zs = /\s/, As = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ps = /\{\n\/\* \[wrapped with (.+)\] \*/, O = /,? & /, ne = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, he = /[()=,{}\[\]\/\s]/, _e = /\\(\\)?/g, We = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fe = /\w*$/, $e = /^[-+]0x[0-9a-f]+$/i, Pe = /^0b[01]+$/i, Rt = /^\[object .+?Constructor\]$/, ut = /^0o[0-7]+$/i, dt = /^(?:0|[1-9]\d*)$/, Ut = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ir = /($^)/, Fr = /['\n\r\u2028\u2029\\]/g, Tt = "\\ud800-\\udfff", Mi = "\\u0300-\\u036f", Rs = "\\ufe20-\\ufe2f", $s = "\\u20d0-\\u20ff", Ul = Mi + Rs + $s, Xl = "\\u2700-\\u27bf", ql = "a-z\\xdf-\\xf6\\xf8-\\xff", uh = "\\xac\\xb1\\xd7\\xf7", ch = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fh = "\\u2000-\\u206f", dh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jl = "\\ufe0e\\ufe0f", Zl = uh + ch + fh + dh, Ls = "['’]", ph = "[" + Tt + "]", Ql = "[" + Zl + "]", lo = "[" + Ul + "]", eu = "\\d+", hh = "[" + Xl + "]", tu = "[" + ql + "]", ru = "[^" + Tt + Zl + eu + Xl + ql + Kl + "]", ks = "\\ud83c[\\udffb-\\udfff]", gh = "(?:" + lo + "|" + ks + ")", nu = "[^" + Tt + "]", Ds = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hn = "[" + Kl + "]", iu = "\\u200d", ou = "(?:" + tu + "|" + ru + ")", mh = "(?:" + Hn + "|" + ru + ")", su = "(?:" + Ls + "(?:d|ll|m|re|s|t|ve))?", au = "(?:" + Ls + "(?:D|LL|M|RE|S|T|VE))?", lu = gh + "?", uu = "[" + Jl + "]?", vh = "(?:" + iu + "(?:" + [nu, Ds, Ws].join("|") + ")" + uu + lu + ")*", yh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", bh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cu = uu + lu + vh, xh = "(?:" + [hh, Ds, Ws].join("|") + ")" + cu, Sh = "(?:" + [nu + lo + "?", lo, Ds, Ws, ph].join("|") + ")", wh = RegExp(Ls, "g"), _h = RegExp(lo, "g"), Ns = RegExp(ks + "(?=" + ks + ")|" + Sh + cu, "g"), Eh = RegExp([
      Hn + "?" + tu + "+" + su + "(?=" + [Ql, Hn, "$"].join("|") + ")",
      mh + "+" + au + "(?=" + [Ql, Hn + ou, "$"].join("|") + ")",
      Hn + "?" + ou + "+" + su,
      Hn + "+" + au,
      bh,
      yh,
      eu,
      xh
    ].join("|"), "g"), Ch = RegExp("[" + iu + Tt + Ul + Jl + "]"), Th = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Mh = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ih = -1, ot = {};
    ot[cr] = ot[tt] = ot[Be] = ot[Wt] = ot[Ct] = ot[_t] = ot[$r] = ot[tn] = ot[rn] = !0, ot[q] = ot[X] = ot[Pt] = ot[te] = ot[wt] = ot[se] = ot[ve] = ot[oe] = ot[ze] = ot[qe] = ot[it] = ot[St] = ot[Ze] = ot[ft] = ot[Ot] = !1;
    var rt = {};
    rt[q] = rt[X] = rt[Pt] = rt[wt] = rt[te] = rt[se] = rt[cr] = rt[tt] = rt[Be] = rt[Wt] = rt[Ct] = rt[ze] = rt[qe] = rt[it] = rt[St] = rt[Ze] = rt[ft] = rt[Vt] = rt[_t] = rt[$r] = rt[tn] = rt[rn] = !0, rt[ve] = rt[oe] = rt[Ot] = !1;
    var Oh = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, zh = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ah = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ph = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Rh = parseFloat, $h = parseInt, fu = typeof Gi == "object" && Gi && Gi.Object === Object && Gi, Lh = typeof self == "object" && self && self.Object === Object && self, $t = fu || Lh || Function("return this")(), Bs = n && !n.nodeType && n, Cn = Bs && !0 && e && !e.nodeType && e, du = Cn && Cn.exports === Bs, Fs = du && fu.process, fr = function() {
      try {
        var $ = Cn && Cn.require && Cn.require("util").types;
        return $ || Fs && Fs.binding && Fs.binding("util");
      } catch {
      }
    }(), pu = fr && fr.isArrayBuffer, hu = fr && fr.isDate, gu = fr && fr.isMap, mu = fr && fr.isRegExp, vu = fr && fr.isSet, yu = fr && fr.isTypedArray;
    function Qt($, U, G) {
      switch (G.length) {
        case 0:
          return $.call(U);
        case 1:
          return $.call(U, G[0]);
        case 2:
          return $.call(U, G[0], G[1]);
        case 3:
          return $.call(U, G[0], G[1], G[2]);
      }
      return $.apply(U, G);
    }
    function kh($, U, G, ge) {
      for (var Ee = -1, Ne = $ == null ? 0 : $.length; ++Ee < Ne; ) {
        var Mt = $[Ee];
        U(ge, Mt, G(Mt), $);
      }
      return ge;
    }
    function dr($, U) {
      for (var G = -1, ge = $ == null ? 0 : $.length; ++G < ge && U($[G], G, $) !== !1; )
        ;
      return $;
    }
    function Dh($, U) {
      for (var G = $ == null ? 0 : $.length; G-- && U($[G], G, $) !== !1; )
        ;
      return $;
    }
    function bu($, U) {
      for (var G = -1, ge = $ == null ? 0 : $.length; ++G < ge; )
        if (!U($[G], G, $))
          return !1;
      return !0;
    }
    function sn($, U) {
      for (var G = -1, ge = $ == null ? 0 : $.length, Ee = 0, Ne = []; ++G < ge; ) {
        var Mt = $[G];
        U(Mt, G, $) && (Ne[Ee++] = Mt);
      }
      return Ne;
    }
    function uo($, U) {
      var G = $ == null ? 0 : $.length;
      return !!G && Un($, U, 0) > -1;
    }
    function Vs($, U, G) {
      for (var ge = -1, Ee = $ == null ? 0 : $.length; ++ge < Ee; )
        if (G(U, $[ge]))
          return !0;
      return !1;
    }
    function st($, U) {
      for (var G = -1, ge = $ == null ? 0 : $.length, Ee = Array(ge); ++G < ge; )
        Ee[G] = U($[G], G, $);
      return Ee;
    }
    function an($, U) {
      for (var G = -1, ge = U.length, Ee = $.length; ++G < ge; )
        $[Ee + G] = U[G];
      return $;
    }
    function Gs($, U, G, ge) {
      var Ee = -1, Ne = $ == null ? 0 : $.length;
      for (ge && Ne && (G = $[++Ee]); ++Ee < Ne; )
        G = U(G, $[Ee], Ee, $);
      return G;
    }
    function Wh($, U, G, ge) {
      var Ee = $ == null ? 0 : $.length;
      for (ge && Ee && (G = $[--Ee]); Ee--; )
        G = U(G, $[Ee], Ee, $);
      return G;
    }
    function js($, U) {
      for (var G = -1, ge = $ == null ? 0 : $.length; ++G < ge; )
        if (U($[G], G, $))
          return !0;
      return !1;
    }
    var Nh = Ys("length");
    function Bh($) {
      return $.split("");
    }
    function Fh($) {
      return $.match(ne) || [];
    }
    function xu($, U, G) {
      var ge;
      return G($, function(Ee, Ne, Mt) {
        if (U(Ee, Ne, Mt))
          return ge = Ne, !1;
      }), ge;
    }
    function co($, U, G, ge) {
      for (var Ee = $.length, Ne = G + (ge ? 1 : -1); ge ? Ne-- : ++Ne < Ee; )
        if (U($[Ne], Ne, $))
          return Ne;
      return -1;
    }
    function Un($, U, G) {
      return U === U ? Qh($, U, G) : co($, Su, G);
    }
    function Vh($, U, G, ge) {
      for (var Ee = G - 1, Ne = $.length; ++Ee < Ne; )
        if (ge($[Ee], U))
          return Ee;
      return -1;
    }
    function Su($) {
      return $ !== $;
    }
    function wu($, U) {
      var G = $ == null ? 0 : $.length;
      return G ? Us($, U) / G : Y;
    }
    function Ys($) {
      return function(U) {
        return U == null ? r : U[$];
      };
    }
    function Hs($) {
      return function(U) {
        return $ == null ? r : $[U];
      };
    }
    function _u($, U, G, ge, Ee) {
      return Ee($, function(Ne, Mt, Qe) {
        G = ge ? (ge = !1, Ne) : U(G, Ne, Mt, Qe);
      }), G;
    }
    function Gh($, U) {
      var G = $.length;
      for ($.sort(U); G--; )
        $[G] = $[G].value;
      return $;
    }
    function Us($, U) {
      for (var G, ge = -1, Ee = $.length; ++ge < Ee; ) {
        var Ne = U($[ge]);
        Ne !== r && (G = G === r ? Ne : G + Ne);
      }
      return G;
    }
    function Xs($, U) {
      for (var G = -1, ge = Array($); ++G < $; )
        ge[G] = U(G);
      return ge;
    }
    function jh($, U) {
      return st(U, function(G) {
        return [G, $[G]];
      });
    }
    function Eu($) {
      return $ && $.slice(0, Iu($) + 1).replace(Ti, "");
    }
    function er($) {
      return function(U) {
        return $(U);
      };
    }
    function qs($, U) {
      return st(U, function(G) {
        return $[G];
      });
    }
    function Ii($, U) {
      return $.has(U);
    }
    function Cu($, U) {
      for (var G = -1, ge = $.length; ++G < ge && Un(U, $[G], 0) > -1; )
        ;
      return G;
    }
    function Tu($, U) {
      for (var G = $.length; G-- && Un(U, $[G], 0) > -1; )
        ;
      return G;
    }
    function Yh($, U) {
      for (var G = $.length, ge = 0; G--; )
        $[G] === U && ++ge;
      return ge;
    }
    var Hh = Hs(Oh), Uh = Hs(zh);
    function Xh($) {
      return "\\" + Ph[$];
    }
    function qh($, U) {
      return $ == null ? r : $[U];
    }
    function Xn($) {
      return Ch.test($);
    }
    function Kh($) {
      return Th.test($);
    }
    function Jh($) {
      for (var U, G = []; !(U = $.next()).done; )
        G.push(U.value);
      return G;
    }
    function Ks($) {
      var U = -1, G = Array($.size);
      return $.forEach(function(ge, Ee) {
        G[++U] = [Ee, ge];
      }), G;
    }
    function Mu($, U) {
      return function(G) {
        return $(U(G));
      };
    }
    function ln($, U) {
      for (var G = -1, ge = $.length, Ee = 0, Ne = []; ++G < ge; ) {
        var Mt = $[G];
        (Mt === U || Mt === y) && ($[G] = y, Ne[Ee++] = G);
      }
      return Ne;
    }
    function fo($) {
      var U = -1, G = Array($.size);
      return $.forEach(function(ge) {
        G[++U] = ge;
      }), G;
    }
    function Zh($) {
      var U = -1, G = Array($.size);
      return $.forEach(function(ge) {
        G[++U] = [ge, ge];
      }), G;
    }
    function Qh($, U, G) {
      for (var ge = G - 1, Ee = $.length; ++ge < Ee; )
        if ($[ge] === U)
          return ge;
      return -1;
    }
    function eg($, U, G) {
      for (var ge = G + 1; ge--; )
        if ($[ge] === U)
          return ge;
      return ge;
    }
    function qn($) {
      return Xn($) ? rg($) : Nh($);
    }
    function Or($) {
      return Xn($) ? ng($) : Bh($);
    }
    function Iu($) {
      for (var U = $.length; U-- && zs.test($.charAt(U)); )
        ;
      return U;
    }
    var tg = Hs(Ah);
    function rg($) {
      for (var U = Ns.lastIndex = 0; Ns.test($); )
        ++U;
      return U;
    }
    function ng($) {
      return $.match(Ns) || [];
    }
    function ig($) {
      return $.match(Eh) || [];
    }
    var og = function $(U) {
      U = U == null ? $t : Kn.defaults($t.Object(), U, Kn.pick($t, Mh));
      var G = U.Array, ge = U.Date, Ee = U.Error, Ne = U.Function, Mt = U.Math, Qe = U.Object, Js = U.RegExp, sg = U.String, pr = U.TypeError, po = G.prototype, ag = Ne.prototype, Jn = Qe.prototype, ho = U["__core-js_shared__"], go = ag.toString, Ve = Jn.hasOwnProperty, lg = 0, Ou = function() {
        var t = /[^.]+$/.exec(ho && ho.keys && ho.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), mo = Jn.toString, ug = go.call(Qe), cg = $t._, fg = Js(
        "^" + go.call(Ve).replace(Yn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), vo = du ? U.Buffer : r, un = U.Symbol, yo = U.Uint8Array, zu = vo ? vo.allocUnsafe : r, bo = Mu(Qe.getPrototypeOf, Qe), Au = Qe.create, Pu = Jn.propertyIsEnumerable, xo = po.splice, Ru = un ? un.isConcatSpreadable : r, Oi = un ? un.iterator : r, Tn = un ? un.toStringTag : r, So = function() {
        try {
          var t = An(Qe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), dg = U.clearTimeout !== $t.clearTimeout && U.clearTimeout, pg = ge && ge.now !== $t.Date.now && ge.now, hg = U.setTimeout !== $t.setTimeout && U.setTimeout, wo = Mt.ceil, _o = Mt.floor, Zs = Qe.getOwnPropertySymbols, gg = vo ? vo.isBuffer : r, $u = U.isFinite, mg = po.join, vg = Mu(Qe.keys, Qe), It = Mt.max, Nt = Mt.min, yg = ge.now, bg = U.parseInt, Lu = Mt.random, xg = po.reverse, Qs = An(U, "DataView"), zi = An(U, "Map"), ea = An(U, "Promise"), Zn = An(U, "Set"), Ai = An(U, "WeakMap"), Pi = An(Qe, "create"), Eo = Ai && new Ai(), Qn = {}, Sg = Pn(Qs), wg = Pn(zi), _g = Pn(ea), Eg = Pn(Zn), Cg = Pn(Ai), Co = un ? un.prototype : r, Ri = Co ? Co.valueOf : r, ku = Co ? Co.toString : r;
      function x(t) {
        if (pt(t) && !Ce(t) && !(t instanceof Le)) {
          if (t instanceof hr)
            return t;
          if (Ve.call(t, "__wrapped__"))
            return Dc(t);
        }
        return new hr(t);
      }
      var ei = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!ct(i))
            return {};
          if (Au)
            return Au(i);
          t.prototype = i;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function To() {
      }
      function hr(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      x.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: _n,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Vn,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: on,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: x
        }
      }, x.prototype = To.prototype, x.prototype.constructor = x, hr.prototype = ei(To.prototype), hr.prototype.constructor = hr;
      function Le(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Z, this.__views__ = [];
      }
      function Tg() {
        var t = new Le(this.__wrapped__);
        return t.__actions__ = Xt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Xt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Xt(this.__views__), t;
      }
      function Mg() {
        if (this.__filtered__) {
          var t = new Le(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Ig() {
        var t = this.__wrapped__.value(), i = this.__dir__, a = Ce(t), f = i < 0, v = a ? t.length : 0, _ = Bm(0, v, this.__views__), M = _.start, A = _.end, L = A - M, K = f ? A : M - 1, J = this.__iteratees__, re = J.length, ce = 0, me = Nt(L, this.__takeCount__);
        if (!a || !f && v == L && me == L)
          return sc(t, this.__actions__);
        var Se = [];
        e:
          for (; L-- && ce < me; ) {
            K += i;
            for (var Oe = -1, we = t[K]; ++Oe < re; ) {
              var Re = J[Oe], ke = Re.iteratee, nr = Re.type, Yt = ke(we);
              if (nr == Q)
                we = Yt;
              else if (!Yt) {
                if (nr == D)
                  continue e;
                break e;
              }
            }
            Se[ce++] = we;
          }
        return Se;
      }
      Le.prototype = ei(To.prototype), Le.prototype.constructor = Le;
      function Mn(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function Og() {
        this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
      }
      function zg(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function Ag(t) {
        var i = this.__data__;
        if (Pi) {
          var a = i[t];
          return a === c ? r : a;
        }
        return Ve.call(i, t) ? i[t] : r;
      }
      function Pg(t) {
        var i = this.__data__;
        return Pi ? i[t] !== r : Ve.call(i, t);
      }
      function Rg(t, i) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Pi && i === r ? c : i, this;
      }
      Mn.prototype.clear = Og, Mn.prototype.delete = zg, Mn.prototype.get = Ag, Mn.prototype.has = Pg, Mn.prototype.set = Rg;
      function Vr(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function $g() {
        this.__data__ = [], this.size = 0;
      }
      function Lg(t) {
        var i = this.__data__, a = Mo(i, t);
        if (a < 0)
          return !1;
        var f = i.length - 1;
        return a == f ? i.pop() : xo.call(i, a, 1), --this.size, !0;
      }
      function kg(t) {
        var i = this.__data__, a = Mo(i, t);
        return a < 0 ? r : i[a][1];
      }
      function Dg(t) {
        return Mo(this.__data__, t) > -1;
      }
      function Wg(t, i) {
        var a = this.__data__, f = Mo(a, t);
        return f < 0 ? (++this.size, a.push([t, i])) : a[f][1] = i, this;
      }
      Vr.prototype.clear = $g, Vr.prototype.delete = Lg, Vr.prototype.get = kg, Vr.prototype.has = Dg, Vr.prototype.set = Wg;
      function Gr(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function Ng() {
        this.size = 0, this.__data__ = {
          hash: new Mn(),
          map: new (zi || Vr)(),
          string: new Mn()
        };
      }
      function Bg(t) {
        var i = No(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function Fg(t) {
        return No(this, t).get(t);
      }
      function Vg(t) {
        return No(this, t).has(t);
      }
      function Gg(t, i) {
        var a = No(this, t), f = a.size;
        return a.set(t, i), this.size += a.size == f ? 0 : 1, this;
      }
      Gr.prototype.clear = Ng, Gr.prototype.delete = Bg, Gr.prototype.get = Fg, Gr.prototype.has = Vg, Gr.prototype.set = Gg;
      function In(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new Gr(); ++i < a; )
          this.add(t[i]);
      }
      function jg(t) {
        return this.__data__.set(t, c), this;
      }
      function Yg(t) {
        return this.__data__.has(t);
      }
      In.prototype.add = In.prototype.push = jg, In.prototype.has = Yg;
      function zr(t) {
        var i = this.__data__ = new Vr(t);
        this.size = i.size;
      }
      function Hg() {
        this.__data__ = new Vr(), this.size = 0;
      }
      function Ug(t) {
        var i = this.__data__, a = i.delete(t);
        return this.size = i.size, a;
      }
      function Xg(t) {
        return this.__data__.get(t);
      }
      function qg(t) {
        return this.__data__.has(t);
      }
      function Kg(t, i) {
        var a = this.__data__;
        if (a instanceof Vr) {
          var f = a.__data__;
          if (!zi || f.length < s - 1)
            return f.push([t, i]), this.size = ++a.size, this;
          a = this.__data__ = new Gr(f);
        }
        return a.set(t, i), this.size = a.size, this;
      }
      zr.prototype.clear = Hg, zr.prototype.delete = Ug, zr.prototype.get = Xg, zr.prototype.has = qg, zr.prototype.set = Kg;
      function Du(t, i) {
        var a = Ce(t), f = !a && Rn(t), v = !a && !f && hn(t), _ = !a && !f && !v && ii(t), M = a || f || v || _, A = M ? Xs(t.length, sg) : [], L = A.length;
        for (var K in t)
          (i || Ve.call(t, K)) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
          (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          v && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          _ && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
          Ur(K, L))) && A.push(K);
        return A;
      }
      function Wu(t) {
        var i = t.length;
        return i ? t[fa(0, i - 1)] : r;
      }
      function Jg(t, i) {
        return Bo(Xt(t), On(i, 0, t.length));
      }
      function Zg(t) {
        return Bo(Xt(t));
      }
      function ta(t, i, a) {
        (a !== r && !Ar(t[i], a) || a === r && !(i in t)) && jr(t, i, a);
      }
      function $i(t, i, a) {
        var f = t[i];
        (!(Ve.call(t, i) && Ar(f, a)) || a === r && !(i in t)) && jr(t, i, a);
      }
      function Mo(t, i) {
        for (var a = t.length; a--; )
          if (Ar(t[a][0], i))
            return a;
        return -1;
      }
      function Qg(t, i, a, f) {
        return cn(t, function(v, _, M) {
          i(f, v, a(v), M);
        }), f;
      }
      function Nu(t, i) {
        return t && kr(i, zt(i), t);
      }
      function em(t, i) {
        return t && kr(i, Kt(i), t);
      }
      function jr(t, i, a) {
        i == "__proto__" && So ? So(t, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[i] = a;
      }
      function ra(t, i) {
        for (var a = -1, f = i.length, v = G(f), _ = t == null; ++a < f; )
          v[a] = _ ? r : ka(t, i[a]);
        return v;
      }
      function On(t, i, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), i !== r && (t = t >= i ? t : i)), t;
      }
      function gr(t, i, a, f, v, _) {
        var M, A = i & m, L = i & w, K = i & d;
        if (a && (M = v ? a(t, f, v, _) : a(t)), M !== r)
          return M;
        if (!ct(t))
          return t;
        var J = Ce(t);
        if (J) {
          if (M = Vm(t), !A)
            return Xt(t, M);
        } else {
          var re = Bt(t), ce = re == oe || re == Te;
          if (hn(t))
            return uc(t, A);
          if (re == it || re == q || ce && !v) {
            if (M = L || ce ? {} : Ic(t), !A)
              return L ? Am(t, em(M, t)) : zm(t, Nu(M, t));
          } else {
            if (!rt[re])
              return v ? t : {};
            M = Gm(t, re, A);
          }
        }
        _ || (_ = new zr());
        var me = _.get(t);
        if (me)
          return me;
        _.set(t, M), nf(t) ? t.forEach(function(we) {
          M.add(gr(we, i, a, we, t, _));
        }) : tf(t) && t.forEach(function(we, Re) {
          M.set(Re, gr(we, i, a, Re, t, _));
        });
        var Se = K ? L ? wa : Sa : L ? Kt : zt, Oe = J ? r : Se(t);
        return dr(Oe || t, function(we, Re) {
          Oe && (Re = we, we = t[Re]), $i(M, Re, gr(we, i, a, Re, t, _));
        }), M;
      }
      function tm(t) {
        var i = zt(t);
        return function(a) {
          return Bu(a, t, i);
        };
      }
      function Bu(t, i, a) {
        var f = a.length;
        if (t == null)
          return !f;
        for (t = Qe(t); f--; ) {
          var v = a[f], _ = i[v], M = t[v];
          if (M === r && !(v in t) || !_(M))
            return !1;
        }
        return !0;
      }
      function Fu(t, i, a) {
        if (typeof t != "function")
          throw new pr(u);
        return Fi(function() {
          t.apply(r, a);
        }, i);
      }
      function Li(t, i, a, f) {
        var v = -1, _ = uo, M = !0, A = t.length, L = [], K = i.length;
        if (!A)
          return L;
        a && (i = st(i, er(a))), f ? (_ = Vs, M = !1) : i.length >= s && (_ = Ii, M = !1, i = new In(i));
        e:
          for (; ++v < A; ) {
            var J = t[v], re = a == null ? J : a(J);
            if (J = f || J !== 0 ? J : 0, M && re === re) {
              for (var ce = K; ce--; )
                if (i[ce] === re)
                  continue e;
              L.push(J);
            } else _(i, re, f) || L.push(J);
          }
        return L;
      }
      var cn = hc(Lr), Vu = hc(ia, !0);
      function rm(t, i) {
        var a = !0;
        return cn(t, function(f, v, _) {
          return a = !!i(f, v, _), a;
        }), a;
      }
      function Io(t, i, a) {
        for (var f = -1, v = t.length; ++f < v; ) {
          var _ = t[f], M = i(_);
          if (M != null && (A === r ? M === M && !rr(M) : a(M, A)))
            var A = M, L = _;
        }
        return L;
      }
      function nm(t, i, a, f) {
        var v = t.length;
        for (a = Me(a), a < 0 && (a = -a > v ? 0 : v + a), f = f === r || f > v ? v : Me(f), f < 0 && (f += v), f = a > f ? 0 : sf(f); a < f; )
          t[a++] = i;
        return t;
      }
      function Gu(t, i) {
        var a = [];
        return cn(t, function(f, v, _) {
          i(f, v, _) && a.push(f);
        }), a;
      }
      function Lt(t, i, a, f, v) {
        var _ = -1, M = t.length;
        for (a || (a = Ym), v || (v = []); ++_ < M; ) {
          var A = t[_];
          i > 0 && a(A) ? i > 1 ? Lt(A, i - 1, a, f, v) : an(v, A) : f || (v[v.length] = A);
        }
        return v;
      }
      var na = gc(), ju = gc(!0);
      function Lr(t, i) {
        return t && na(t, i, zt);
      }
      function ia(t, i) {
        return t && ju(t, i, zt);
      }
      function Oo(t, i) {
        return sn(i, function(a) {
          return Xr(t[a]);
        });
      }
      function zn(t, i) {
        i = dn(i, t);
        for (var a = 0, f = i.length; t != null && a < f; )
          t = t[Dr(i[a++])];
        return a && a == f ? t : r;
      }
      function Yu(t, i, a) {
        var f = i(t);
        return Ce(t) ? f : an(f, a(t));
      }
      function Gt(t) {
        return t == null ? t === r ? Zt : xt : Tn && Tn in Qe(t) ? Nm(t) : Zm(t);
      }
      function oa(t, i) {
        return t > i;
      }
      function im(t, i) {
        return t != null && Ve.call(t, i);
      }
      function om(t, i) {
        return t != null && i in Qe(t);
      }
      function sm(t, i, a) {
        return t >= Nt(i, a) && t < It(i, a);
      }
      function sa(t, i, a) {
        for (var f = a ? Vs : uo, v = t[0].length, _ = t.length, M = _, A = G(_), L = 1 / 0, K = []; M--; ) {
          var J = t[M];
          M && i && (J = st(J, er(i))), L = Nt(J.length, L), A[M] = !a && (i || v >= 120 && J.length >= 120) ? new In(M && J) : r;
        }
        J = t[0];
        var re = -1, ce = A[0];
        e:
          for (; ++re < v && K.length < L; ) {
            var me = J[re], Se = i ? i(me) : me;
            if (me = a || me !== 0 ? me : 0, !(ce ? Ii(ce, Se) : f(K, Se, a))) {
              for (M = _; --M; ) {
                var Oe = A[M];
                if (!(Oe ? Ii(Oe, Se) : f(t[M], Se, a)))
                  continue e;
              }
              ce && ce.push(Se), K.push(me);
            }
          }
        return K;
      }
      function am(t, i, a, f) {
        return Lr(t, function(v, _, M) {
          i(f, a(v), _, M);
        }), f;
      }
      function ki(t, i, a) {
        i = dn(i, t), t = Pc(t, i);
        var f = t == null ? t : t[Dr(vr(i))];
        return f == null ? r : Qt(f, t, a);
      }
      function Hu(t) {
        return pt(t) && Gt(t) == q;
      }
      function lm(t) {
        return pt(t) && Gt(t) == Pt;
      }
      function um(t) {
        return pt(t) && Gt(t) == se;
      }
      function Di(t, i, a, f, v) {
        return t === i ? !0 : t == null || i == null || !pt(t) && !pt(i) ? t !== t && i !== i : cm(t, i, a, f, Di, v);
      }
      function cm(t, i, a, f, v, _) {
        var M = Ce(t), A = Ce(i), L = M ? X : Bt(t), K = A ? X : Bt(i);
        L = L == q ? it : L, K = K == q ? it : K;
        var J = L == it, re = K == it, ce = L == K;
        if (ce && hn(t)) {
          if (!hn(i))
            return !1;
          M = !0, J = !1;
        }
        if (ce && !J)
          return _ || (_ = new zr()), M || ii(t) ? Cc(t, i, a, f, v, _) : Dm(t, i, L, a, f, v, _);
        if (!(a & g)) {
          var me = J && Ve.call(t, "__wrapped__"), Se = re && Ve.call(i, "__wrapped__");
          if (me || Se) {
            var Oe = me ? t.value() : t, we = Se ? i.value() : i;
            return _ || (_ = new zr()), v(Oe, we, a, f, _);
          }
        }
        return ce ? (_ || (_ = new zr()), Wm(t, i, a, f, v, _)) : !1;
      }
      function fm(t) {
        return pt(t) && Bt(t) == ze;
      }
      function aa(t, i, a, f) {
        var v = a.length, _ = v, M = !f;
        if (t == null)
          return !_;
        for (t = Qe(t); v--; ) {
          var A = a[v];
          if (M && A[2] ? A[1] !== t[A[0]] : !(A[0] in t))
            return !1;
        }
        for (; ++v < _; ) {
          A = a[v];
          var L = A[0], K = t[L], J = A[1];
          if (M && A[2]) {
            if (K === r && !(L in t))
              return !1;
          } else {
            var re = new zr();
            if (f)
              var ce = f(K, J, L, t, i, re);
            if (!(ce === r ? Di(J, K, g | S, f, re) : ce))
              return !1;
          }
        }
        return !0;
      }
      function Uu(t) {
        if (!ct(t) || Um(t))
          return !1;
        var i = Xr(t) ? fg : Rt;
        return i.test(Pn(t));
      }
      function dm(t) {
        return pt(t) && Gt(t) == St;
      }
      function pm(t) {
        return pt(t) && Bt(t) == Ze;
      }
      function hm(t) {
        return pt(t) && Ho(t.length) && !!ot[Gt(t)];
      }
      function Xu(t) {
        return typeof t == "function" ? t : t == null ? Jt : typeof t == "object" ? Ce(t) ? Ju(t[0], t[1]) : Ku(t) : vf(t);
      }
      function la(t) {
        if (!Bi(t))
          return vg(t);
        var i = [];
        for (var a in Qe(t))
          Ve.call(t, a) && a != "constructor" && i.push(a);
        return i;
      }
      function gm(t) {
        if (!ct(t))
          return Jm(t);
        var i = Bi(t), a = [];
        for (var f in t)
          f == "constructor" && (i || !Ve.call(t, f)) || a.push(f);
        return a;
      }
      function ua(t, i) {
        return t < i;
      }
      function qu(t, i) {
        var a = -1, f = qt(t) ? G(t.length) : [];
        return cn(t, function(v, _, M) {
          f[++a] = i(v, _, M);
        }), f;
      }
      function Ku(t) {
        var i = Ea(t);
        return i.length == 1 && i[0][2] ? zc(i[0][0], i[0][1]) : function(a) {
          return a === t || aa(a, t, i);
        };
      }
      function Ju(t, i) {
        return Ta(t) && Oc(i) ? zc(Dr(t), i) : function(a) {
          var f = ka(a, t);
          return f === r && f === i ? Da(a, t) : Di(i, f, g | S);
        };
      }
      function zo(t, i, a, f, v) {
        t !== i && na(i, function(_, M) {
          if (v || (v = new zr()), ct(_))
            mm(t, i, M, a, zo, f, v);
          else {
            var A = f ? f(Ia(t, M), _, M + "", t, i, v) : r;
            A === r && (A = _), ta(t, M, A);
          }
        }, Kt);
      }
      function mm(t, i, a, f, v, _, M) {
        var A = Ia(t, a), L = Ia(i, a), K = M.get(L);
        if (K) {
          ta(t, a, K);
          return;
        }
        var J = _ ? _(A, L, a + "", t, i, M) : r, re = J === r;
        if (re) {
          var ce = Ce(L), me = !ce && hn(L), Se = !ce && !me && ii(L);
          J = L, ce || me || Se ? Ce(A) ? J = A : vt(A) ? J = Xt(A) : me ? (re = !1, J = uc(L, !0)) : Se ? (re = !1, J = cc(L, !0)) : J = [] : Vi(L) || Rn(L) ? (J = A, Rn(A) ? J = af(A) : (!ct(A) || Xr(A)) && (J = Ic(L))) : re = !1;
        }
        re && (M.set(L, J), v(J, L, f, _, M), M.delete(L)), ta(t, a, J);
      }
      function Zu(t, i) {
        var a = t.length;
        if (a)
          return i += i < 0 ? a : 0, Ur(i, a) ? t[i] : r;
      }
      function Qu(t, i, a) {
        i.length ? i = st(i, function(_) {
          return Ce(_) ? function(M) {
            return zn(M, _.length === 1 ? _[0] : _);
          } : _;
        }) : i = [Jt];
        var f = -1;
        i = st(i, er(xe()));
        var v = qu(t, function(_, M, A) {
          var L = st(i, function(K) {
            return K(_);
          });
          return { criteria: L, index: ++f, value: _ };
        });
        return Gh(v, function(_, M) {
          return Om(_, M, a);
        });
      }
      function vm(t, i) {
        return ec(t, i, function(a, f) {
          return Da(t, f);
        });
      }
      function ec(t, i, a) {
        for (var f = -1, v = i.length, _ = {}; ++f < v; ) {
          var M = i[f], A = zn(t, M);
          a(A, M) && Wi(_, dn(M, t), A);
        }
        return _;
      }
      function ym(t) {
        return function(i) {
          return zn(i, t);
        };
      }
      function ca(t, i, a, f) {
        var v = f ? Vh : Un, _ = -1, M = i.length, A = t;
        for (t === i && (i = Xt(i)), a && (A = st(t, er(a))); ++_ < M; )
          for (var L = 0, K = i[_], J = a ? a(K) : K; (L = v(A, J, L, f)) > -1; )
            A !== t && xo.call(A, L, 1), xo.call(t, L, 1);
        return t;
      }
      function tc(t, i) {
        for (var a = t ? i.length : 0, f = a - 1; a--; ) {
          var v = i[a];
          if (a == f || v !== _) {
            var _ = v;
            Ur(v) ? xo.call(t, v, 1) : ha(t, v);
          }
        }
        return t;
      }
      function fa(t, i) {
        return t + _o(Lu() * (i - t + 1));
      }
      function bm(t, i, a, f) {
        for (var v = -1, _ = It(wo((i - t) / (a || 1)), 0), M = G(_); _--; )
          M[f ? _ : ++v] = t, t += a;
        return M;
      }
      function da(t, i) {
        var a = "";
        if (!t || i < 1 || i > ee)
          return a;
        do
          i % 2 && (a += t), i = _o(i / 2), i && (t += t);
        while (i);
        return a;
      }
      function Ae(t, i) {
        return Oa(Ac(t, i, Jt), t + "");
      }
      function xm(t) {
        return Wu(oi(t));
      }
      function Sm(t, i) {
        var a = oi(t);
        return Bo(a, On(i, 0, a.length));
      }
      function Wi(t, i, a, f) {
        if (!ct(t))
          return t;
        i = dn(i, t);
        for (var v = -1, _ = i.length, M = _ - 1, A = t; A != null && ++v < _; ) {
          var L = Dr(i[v]), K = a;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return t;
          if (v != M) {
            var J = A[L];
            K = f ? f(J, L, A) : r, K === r && (K = ct(J) ? J : Ur(i[v + 1]) ? [] : {});
          }
          $i(A, L, K), A = A[L];
        }
        return t;
      }
      var rc = Eo ? function(t, i) {
        return Eo.set(t, i), t;
      } : Jt, wm = So ? function(t, i) {
        return So(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Na(i),
          writable: !0
        });
      } : Jt;
      function _m(t) {
        return Bo(oi(t));
      }
      function mr(t, i, a) {
        var f = -1, v = t.length;
        i < 0 && (i = -i > v ? 0 : v + i), a = a > v ? v : a, a < 0 && (a += v), v = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var _ = G(v); ++f < v; )
          _[f] = t[f + i];
        return _;
      }
      function Em(t, i) {
        var a;
        return cn(t, function(f, v, _) {
          return a = i(f, v, _), !a;
        }), !!a;
      }
      function Ao(t, i, a) {
        var f = 0, v = t == null ? f : t.length;
        if (typeof i == "number" && i === i && v <= pe) {
          for (; f < v; ) {
            var _ = f + v >>> 1, M = t[_];
            M !== null && !rr(M) && (a ? M <= i : M < i) ? f = _ + 1 : v = _;
          }
          return v;
        }
        return pa(t, i, Jt, a);
      }
      function pa(t, i, a, f) {
        var v = 0, _ = t == null ? 0 : t.length;
        if (_ === 0)
          return 0;
        i = a(i);
        for (var M = i !== i, A = i === null, L = rr(i), K = i === r; v < _; ) {
          var J = _o((v + _) / 2), re = a(t[J]), ce = re !== r, me = re === null, Se = re === re, Oe = rr(re);
          if (M)
            var we = f || Se;
          else K ? we = Se && (f || ce) : A ? we = Se && ce && (f || !me) : L ? we = Se && ce && !me && (f || !Oe) : me || Oe ? we = !1 : we = f ? re <= i : re < i;
          we ? v = J + 1 : _ = J;
        }
        return Nt(_, de);
      }
      function nc(t, i) {
        for (var a = -1, f = t.length, v = 0, _ = []; ++a < f; ) {
          var M = t[a], A = i ? i(M) : M;
          if (!a || !Ar(A, L)) {
            var L = A;
            _[v++] = M === 0 ? 0 : M;
          }
        }
        return _;
      }
      function ic(t) {
        return typeof t == "number" ? t : rr(t) ? Y : +t;
      }
      function tr(t) {
        if (typeof t == "string")
          return t;
        if (Ce(t))
          return st(t, tr) + "";
        if (rr(t))
          return ku ? ku.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -fe ? "-0" : i;
      }
      function fn(t, i, a) {
        var f = -1, v = uo, _ = t.length, M = !0, A = [], L = A;
        if (a)
          M = !1, v = Vs;
        else if (_ >= s) {
          var K = i ? null : Lm(t);
          if (K)
            return fo(K);
          M = !1, v = Ii, L = new In();
        } else
          L = i ? [] : A;
        e:
          for (; ++f < _; ) {
            var J = t[f], re = i ? i(J) : J;
            if (J = a || J !== 0 ? J : 0, M && re === re) {
              for (var ce = L.length; ce--; )
                if (L[ce] === re)
                  continue e;
              i && L.push(re), A.push(J);
            } else v(L, re, a) || (L !== A && L.push(re), A.push(J));
          }
        return A;
      }
      function ha(t, i) {
        i = dn(i, t);
        var a = -1, f = i.length;
        if (!f)
          return !0;
        for (var v = t == null || typeof t != "object" && typeof t != "function"; ++a < f; ) {
          var _ = i[a];
          if (typeof _ == "string") {
            if (_ === "__proto__" && !Ve.call(t, "__proto__"))
              return !1;
            if (_ === "constructor" && a + 1 < f && typeof i[a + 1] == "string" && i[a + 1] === "prototype") {
              if (v && a === 0)
                continue;
              return !1;
            }
          }
        }
        var M = Pc(t, i);
        return M == null || delete M[Dr(vr(i))];
      }
      function oc(t, i, a, f) {
        return Wi(t, i, a(zn(t, i)), f);
      }
      function Po(t, i, a, f) {
        for (var v = t.length, _ = f ? v : -1; (f ? _-- : ++_ < v) && i(t[_], _, t); )
          ;
        return a ? mr(t, f ? 0 : _, f ? _ + 1 : v) : mr(t, f ? _ + 1 : 0, f ? v : _);
      }
      function sc(t, i) {
        var a = t;
        return a instanceof Le && (a = a.value()), Gs(i, function(f, v) {
          return v.func.apply(v.thisArg, an([f], v.args));
        }, a);
      }
      function ga(t, i, a) {
        var f = t.length;
        if (f < 2)
          return f ? fn(t[0]) : [];
        for (var v = -1, _ = G(f); ++v < f; )
          for (var M = t[v], A = -1; ++A < f; )
            A != v && (_[v] = Li(_[v] || M, t[A], i, a));
        return fn(Lt(_, 1), i, a);
      }
      function ac(t, i, a) {
        for (var f = -1, v = t.length, _ = i.length, M = {}; ++f < v; ) {
          var A = f < _ ? i[f] : r;
          a(M, t[f], A);
        }
        return M;
      }
      function ma(t) {
        return vt(t) ? t : [];
      }
      function va(t) {
        return typeof t == "function" ? t : Jt;
      }
      function dn(t, i) {
        return Ce(t) ? t : Ta(t, i) ? [t] : kc(Ge(t));
      }
      var Cm = Ae;
      function pn(t, i, a) {
        var f = t.length;
        return a = a === r ? f : a, !i && a >= f ? t : mr(t, i, a);
      }
      var lc = dg || function(t) {
        return $t.clearTimeout(t);
      };
      function uc(t, i) {
        if (i)
          return t.slice();
        var a = t.length, f = zu ? zu(a) : new t.constructor(a);
        return t.copy(f), f;
      }
      function ya(t) {
        var i = new t.constructor(t.byteLength);
        return new yo(i).set(new yo(t)), i;
      }
      function Tm(t, i) {
        var a = i ? ya(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function Mm(t) {
        var i = new t.constructor(t.source, Fe.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function Im(t) {
        return Ri ? Qe(Ri.call(t)) : {};
      }
      function cc(t, i) {
        var a = i ? ya(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function fc(t, i) {
        if (t !== i) {
          var a = t !== r, f = t === null, v = t === t, _ = rr(t), M = i !== r, A = i === null, L = i === i, K = rr(i);
          if (!A && !K && !_ && t > i || _ && M && L && !A && !K || f && M && L || !a && L || !v)
            return 1;
          if (!f && !_ && !K && t < i || K && a && v && !f && !_ || A && a && v || !M && v || !L)
            return -1;
        }
        return 0;
      }
      function Om(t, i, a) {
        for (var f = -1, v = t.criteria, _ = i.criteria, M = v.length, A = a.length; ++f < M; ) {
          var L = fc(v[f], _[f]);
          if (L) {
            if (f >= A)
              return L;
            var K = a[f];
            return L * (K == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function dc(t, i, a, f) {
        for (var v = -1, _ = t.length, M = a.length, A = -1, L = i.length, K = It(_ - M, 0), J = G(L + K), re = !f; ++A < L; )
          J[A] = i[A];
        for (; ++v < M; )
          (re || v < _) && (J[a[v]] = t[v]);
        for (; K--; )
          J[A++] = t[v++];
        return J;
      }
      function pc(t, i, a, f) {
        for (var v = -1, _ = t.length, M = -1, A = a.length, L = -1, K = i.length, J = It(_ - A, 0), re = G(J + K), ce = !f; ++v < J; )
          re[v] = t[v];
        for (var me = v; ++L < K; )
          re[me + L] = i[L];
        for (; ++M < A; )
          (ce || v < _) && (re[me + a[M]] = t[v++]);
        return re;
      }
      function Xt(t, i) {
        var a = -1, f = t.length;
        for (i || (i = G(f)); ++a < f; )
          i[a] = t[a];
        return i;
      }
      function kr(t, i, a, f) {
        var v = !a;
        a || (a = {});
        for (var _ = -1, M = i.length; ++_ < M; ) {
          var A = i[_], L = f ? f(a[A], t[A], A, a, t) : r;
          L === r && (L = t[A]), v ? jr(a, A, L) : $i(a, A, L);
        }
        return a;
      }
      function zm(t, i) {
        return kr(t, Ca(t), i);
      }
      function Am(t, i) {
        return kr(t, Tc(t), i);
      }
      function Ro(t, i) {
        return function(a, f) {
          var v = Ce(a) ? kh : Qg, _ = i ? i() : {};
          return v(a, t, xe(f, 2), _);
        };
      }
      function ti(t) {
        return Ae(function(i, a) {
          var f = -1, v = a.length, _ = v > 1 ? a[v - 1] : r, M = v > 2 ? a[2] : r;
          for (_ = t.length > 3 && typeof _ == "function" ? (v--, _) : r, M && jt(a[0], a[1], M) && (_ = v < 3 ? r : _, v = 1), i = Qe(i); ++f < v; ) {
            var A = a[f];
            A && t(i, A, f, _);
          }
          return i;
        });
      }
      function hc(t, i) {
        return function(a, f) {
          if (a == null)
            return a;
          if (!qt(a))
            return t(a, f);
          for (var v = a.length, _ = i ? v : -1, M = Qe(a); (i ? _-- : ++_ < v) && f(M[_], _, M) !== !1; )
            ;
          return a;
        };
      }
      function gc(t) {
        return function(i, a, f) {
          for (var v = -1, _ = Qe(i), M = f(i), A = M.length; A--; ) {
            var L = M[t ? A : ++v];
            if (a(_[L], L, _) === !1)
              break;
          }
          return i;
        };
      }
      function Pm(t, i, a) {
        var f = i & I, v = Ni(t);
        function _() {
          var M = this && this !== $t && this instanceof _ ? v : t;
          return M.apply(f ? a : this, arguments);
        }
        return _;
      }
      function mc(t) {
        return function(i) {
          i = Ge(i);
          var a = Xn(i) ? Or(i) : r, f = a ? a[0] : i.charAt(0), v = a ? pn(a, 1).join("") : i.slice(1);
          return f[t]() + v;
        };
      }
      function ri(t) {
        return function(i) {
          return Gs(gf(hf(i).replace(wh, "")), t, "");
        };
      }
      function Ni(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var a = ei(t.prototype), f = t.apply(a, i);
          return ct(f) ? f : a;
        };
      }
      function Rm(t, i, a) {
        var f = Ni(t);
        function v() {
          for (var _ = arguments.length, M = G(_), A = _, L = ni(v); A--; )
            M[A] = arguments[A];
          var K = _ < 3 && M[0] !== L && M[_ - 1] !== L ? [] : ln(M, L);
          if (_ -= K.length, _ < a)
            return Sc(
              t,
              i,
              $o,
              v.placeholder,
              r,
              M,
              K,
              r,
              r,
              a - _
            );
          var J = this && this !== $t && this instanceof v ? f : t;
          return Qt(J, this, M);
        }
        return v;
      }
      function vc(t) {
        return function(i, a, f) {
          var v = Qe(i);
          if (!qt(i)) {
            var _ = xe(a, 3);
            i = zt(i), a = function(A) {
              return _(v[A], A, v);
            };
          }
          var M = t(i, a, f);
          return M > -1 ? v[_ ? i[M] : M] : r;
        };
      }
      function yc(t) {
        return Hr(function(i) {
          var a = i.length, f = a, v = hr.prototype.thru;
          for (t && i.reverse(); f--; ) {
            var _ = i[f];
            if (typeof _ != "function")
              throw new pr(u);
            if (v && !M && Wo(_) == "wrapper")
              var M = new hr([], !0);
          }
          for (f = M ? f : a; ++f < a; ) {
            _ = i[f];
            var A = Wo(_), L = A == "wrapper" ? _a(_) : r;
            L && Ma(L[0]) && L[1] == (W | T | z | P) && !L[4].length && L[9] == 1 ? M = M[Wo(L[0])].apply(M, L[3]) : M = _.length == 1 && Ma(_) ? M[A]() : M.thru(_);
          }
          return function() {
            var K = arguments, J = K[0];
            if (M && K.length == 1 && Ce(J))
              return M.plant(J).value();
            for (var re = 0, ce = a ? i[re].apply(this, K) : J; ++re < a; )
              ce = i[re].call(this, ce);
            return ce;
          };
        });
      }
      function $o(t, i, a, f, v, _, M, A, L, K) {
        var J = i & W, re = i & I, ce = i & E, me = i & (T | R), Se = i & N, Oe = ce ? r : Ni(t);
        function we() {
          for (var Re = arguments.length, ke = G(Re), nr = Re; nr--; )
            ke[nr] = arguments[nr];
          if (me)
            var Yt = ni(we), ir = Yh(ke, Yt);
          if (f && (ke = dc(ke, f, v, me)), _ && (ke = pc(ke, _, M, me)), Re -= ir, me && Re < K) {
            var yt = ln(ke, Yt);
            return Sc(
              t,
              i,
              $o,
              we.placeholder,
              a,
              ke,
              yt,
              A,
              L,
              K - Re
            );
          }
          var Pr = re ? a : this, Kr = ce ? Pr[t] : t;
          return Re = ke.length, A ? ke = Qm(ke, A) : Se && Re > 1 && ke.reverse(), J && L < Re && (ke.length = L), this && this !== $t && this instanceof we && (Kr = Oe || Ni(Kr)), Kr.apply(Pr, ke);
        }
        return we;
      }
      function bc(t, i) {
        return function(a, f) {
          return am(a, t, i(f), {});
        };
      }
      function Lo(t, i) {
        return function(a, f) {
          var v;
          if (a === r && f === r)
            return i;
          if (a !== r && (v = a), f !== r) {
            if (v === r)
              return f;
            typeof a == "string" || typeof f == "string" ? (a = tr(a), f = tr(f)) : (a = ic(a), f = ic(f)), v = t(a, f);
          }
          return v;
        };
      }
      function ba(t) {
        return Hr(function(i) {
          return i = st(i, er(xe())), Ae(function(a) {
            var f = this;
            return t(i, function(v) {
              return Qt(v, f, a);
            });
          });
        });
      }
      function ko(t, i) {
        i = i === r ? " " : tr(i);
        var a = i.length;
        if (a < 2)
          return a ? da(i, t) : i;
        var f = da(i, wo(t / qn(i)));
        return Xn(i) ? pn(Or(f), 0, t).join("") : f.slice(0, t);
      }
      function $m(t, i, a, f) {
        var v = i & I, _ = Ni(t);
        function M() {
          for (var A = -1, L = arguments.length, K = -1, J = f.length, re = G(J + L), ce = this && this !== $t && this instanceof M ? _ : t; ++K < J; )
            re[K] = f[K];
          for (; L--; )
            re[K++] = arguments[++A];
          return Qt(ce, v ? a : this, re);
        }
        return M;
      }
      function xc(t) {
        return function(i, a, f) {
          return f && typeof f != "number" && jt(i, a, f) && (a = f = r), i = qr(i), a === r ? (a = i, i = 0) : a = qr(a), f = f === r ? i < a ? 1 : -1 : qr(f), bm(i, a, f, t);
        };
      }
      function Do(t) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = yr(i), a = yr(a)), t(i, a);
        };
      }
      function Sc(t, i, a, f, v, _, M, A, L, K) {
        var J = i & T, re = J ? M : r, ce = J ? r : M, me = J ? _ : r, Se = J ? r : _;
        i |= J ? z : j, i &= ~(J ? j : z), i & C || (i &= -4);
        var Oe = [
          t,
          i,
          v,
          me,
          re,
          Se,
          ce,
          A,
          L,
          K
        ], we = a.apply(r, Oe);
        return Ma(t) && Rc(we, Oe), we.placeholder = f, $c(we, t, i);
      }
      function xa(t) {
        var i = Mt[t];
        return function(a, f) {
          if (a = yr(a), f = f == null ? 0 : Nt(Me(f), 292), f && $u(a)) {
            var v = (Ge(a) + "e").split("e"), _ = i(v[0] + "e" + (+v[1] + f));
            return v = (Ge(_) + "e").split("e"), +(v[0] + "e" + (+v[1] - f));
          }
          return i(a);
        };
      }
      var Lm = Zn && 1 / fo(new Zn([, -0]))[1] == fe ? function(t) {
        return new Zn(t);
      } : Va;
      function wc(t) {
        return function(i) {
          var a = Bt(i);
          return a == ze ? Ks(i) : a == Ze ? Zh(i) : jh(i, t(i));
        };
      }
      function Yr(t, i, a, f, v, _, M, A) {
        var L = i & E;
        if (!L && typeof t != "function")
          throw new pr(u);
        var K = f ? f.length : 0;
        if (K || (i &= -97, f = v = r), M = M === r ? M : It(Me(M), 0), A = A === r ? A : Me(A), K -= v ? v.length : 0, i & j) {
          var J = f, re = v;
          f = v = r;
        }
        var ce = L ? r : _a(t), me = [
          t,
          i,
          a,
          f,
          v,
          J,
          re,
          _,
          M,
          A
        ];
        if (ce && Km(me, ce), t = me[0], i = me[1], a = me[2], f = me[3], v = me[4], A = me[9] = me[9] === r ? L ? 0 : t.length : It(me[9] - K, 0), !A && i & (T | R) && (i &= -25), !i || i == I)
          var Se = Pm(t, i, a);
        else i == T || i == R ? Se = Rm(t, i, A) : (i == z || i == (I | z)) && !v.length ? Se = $m(t, i, a, f) : Se = $o.apply(r, me);
        var Oe = ce ? rc : Rc;
        return $c(Oe(Se, me), t, i);
      }
      function _c(t, i, a, f) {
        return t === r || Ar(t, Jn[a]) && !Ve.call(f, a) ? i : t;
      }
      function Ec(t, i, a, f, v, _) {
        return ct(t) && ct(i) && (_.set(i, t), zo(t, i, r, Ec, _), _.delete(i)), t;
      }
      function km(t) {
        return Vi(t) ? r : t;
      }
      function Cc(t, i, a, f, v, _) {
        var M = a & g, A = t.length, L = i.length;
        if (A != L && !(M && L > A))
          return !1;
        var K = _.get(t), J = _.get(i);
        if (K && J)
          return K == i && J == t;
        var re = -1, ce = !0, me = a & S ? new In() : r;
        for (_.set(t, i), _.set(i, t); ++re < A; ) {
          var Se = t[re], Oe = i[re];
          if (f)
            var we = M ? f(Oe, Se, re, i, t, _) : f(Se, Oe, re, t, i, _);
          if (we !== r) {
            if (we)
              continue;
            ce = !1;
            break;
          }
          if (me) {
            if (!js(i, function(Re, ke) {
              if (!Ii(me, ke) && (Se === Re || v(Se, Re, a, f, _)))
                return me.push(ke);
            })) {
              ce = !1;
              break;
            }
          } else if (!(Se === Oe || v(Se, Oe, a, f, _))) {
            ce = !1;
            break;
          }
        }
        return _.delete(t), _.delete(i), ce;
      }
      function Dm(t, i, a, f, v, _, M) {
        switch (a) {
          case wt:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case Pt:
            return !(t.byteLength != i.byteLength || !_(new yo(t), new yo(i)));
          case te:
          case se:
          case qe:
            return Ar(+t, +i);
          case ve:
            return t.name == i.name && t.message == i.message;
          case St:
          case ft:
            return t == i + "";
          case ze:
            var A = Ks;
          case Ze:
            var L = f & g;
            if (A || (A = fo), t.size != i.size && !L)
              return !1;
            var K = M.get(t);
            if (K)
              return K == i;
            f |= S, M.set(t, i);
            var J = Cc(A(t), A(i), f, v, _, M);
            return M.delete(t), J;
          case Vt:
            if (Ri)
              return Ri.call(t) == Ri.call(i);
        }
        return !1;
      }
      function Wm(t, i, a, f, v, _) {
        var M = a & g, A = Sa(t), L = A.length, K = Sa(i), J = K.length;
        if (L != J && !M)
          return !1;
        for (var re = L; re--; ) {
          var ce = A[re];
          if (!(M ? ce in i : Ve.call(i, ce)))
            return !1;
        }
        var me = _.get(t), Se = _.get(i);
        if (me && Se)
          return me == i && Se == t;
        var Oe = !0;
        _.set(t, i), _.set(i, t);
        for (var we = M; ++re < L; ) {
          ce = A[re];
          var Re = t[ce], ke = i[ce];
          if (f)
            var nr = M ? f(ke, Re, ce, i, t, _) : f(Re, ke, ce, t, i, _);
          if (!(nr === r ? Re === ke || v(Re, ke, a, f, _) : nr)) {
            Oe = !1;
            break;
          }
          we || (we = ce == "constructor");
        }
        if (Oe && !we) {
          var Yt = t.constructor, ir = i.constructor;
          Yt != ir && "constructor" in t && "constructor" in i && !(typeof Yt == "function" && Yt instanceof Yt && typeof ir == "function" && ir instanceof ir) && (Oe = !1);
        }
        return _.delete(t), _.delete(i), Oe;
      }
      function Hr(t) {
        return Oa(Ac(t, r, Bc), t + "");
      }
      function Sa(t) {
        return Yu(t, zt, Ca);
      }
      function wa(t) {
        return Yu(t, Kt, Tc);
      }
      var _a = Eo ? function(t) {
        return Eo.get(t);
      } : Va;
      function Wo(t) {
        for (var i = t.name + "", a = Qn[i], f = Ve.call(Qn, i) ? a.length : 0; f--; ) {
          var v = a[f], _ = v.func;
          if (_ == null || _ == t)
            return v.name;
        }
        return i;
      }
      function ni(t) {
        var i = Ve.call(x, "placeholder") ? x : t;
        return i.placeholder;
      }
      function xe() {
        var t = x.iteratee || Ba;
        return t = t === Ba ? Xu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function No(t, i) {
        var a = t.__data__;
        return Hm(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Ea(t) {
        for (var i = zt(t), a = i.length; a--; ) {
          var f = i[a], v = t[f];
          i[a] = [f, v, Oc(v)];
        }
        return i;
      }
      function An(t, i) {
        var a = qh(t, i);
        return Uu(a) ? a : r;
      }
      function Nm(t) {
        var i = Ve.call(t, Tn), a = t[Tn];
        try {
          t[Tn] = r;
          var f = !0;
        } catch {
        }
        var v = mo.call(t);
        return f && (i ? t[Tn] = a : delete t[Tn]), v;
      }
      var Ca = Zs ? function(t) {
        return t == null ? [] : (t = Qe(t), sn(Zs(t), function(i) {
          return Pu.call(t, i);
        }));
      } : Ga, Tc = Zs ? function(t) {
        for (var i = []; t; )
          an(i, Ca(t)), t = bo(t);
        return i;
      } : Ga, Bt = Gt;
      (Qs && Bt(new Qs(new ArrayBuffer(1))) != wt || zi && Bt(new zi()) != ze || ea && Bt(ea.resolve()) != Et || Zn && Bt(new Zn()) != Ze || Ai && Bt(new Ai()) != Ot) && (Bt = function(t) {
        var i = Gt(t), a = i == it ? t.constructor : r, f = a ? Pn(a) : "";
        if (f)
          switch (f) {
            case Sg:
              return wt;
            case wg:
              return ze;
            case _g:
              return Et;
            case Eg:
              return Ze;
            case Cg:
              return Ot;
          }
        return i;
      });
      function Bm(t, i, a) {
        for (var f = -1, v = a.length; ++f < v; ) {
          var _ = a[f], M = _.size;
          switch (_.type) {
            case "drop":
              t += M;
              break;
            case "dropRight":
              i -= M;
              break;
            case "take":
              i = Nt(i, t + M);
              break;
            case "takeRight":
              t = It(t, i - M);
              break;
          }
        }
        return { start: t, end: i };
      }
      function Fm(t) {
        var i = t.match(Ps);
        return i ? i[1].split(O) : [];
      }
      function Mc(t, i, a) {
        i = dn(i, t);
        for (var f = -1, v = i.length, _ = !1; ++f < v; ) {
          var M = Dr(i[f]);
          if (!(_ = t != null && a(t, M)))
            break;
          t = t[M];
        }
        return _ || ++f != v ? _ : (v = t == null ? 0 : t.length, !!v && Ho(v) && Ur(M, v) && (Ce(t) || Rn(t)));
      }
      function Vm(t) {
        var i = t.length, a = new t.constructor(i);
        return i && typeof t[0] == "string" && Ve.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function Ic(t) {
        return typeof t.constructor == "function" && !Bi(t) ? ei(bo(t)) : {};
      }
      function Gm(t, i, a) {
        var f = t.constructor;
        switch (i) {
          case Pt:
            return ya(t);
          case te:
          case se:
            return new f(+t);
          case wt:
            return Tm(t, a);
          case cr:
          case tt:
          case Be:
          case Wt:
          case Ct:
          case _t:
          case $r:
          case tn:
          case rn:
            return cc(t, a);
          case ze:
            return new f();
          case qe:
          case ft:
            return new f(t);
          case St:
            return Mm(t);
          case Ze:
            return new f();
          case Vt:
            return Im(t);
        }
      }
      function jm(t, i) {
        var a = i.length;
        if (!a)
          return t;
        var f = a - 1;
        return i[f] = (a > 1 ? "& " : "") + i[f], i = i.join(a > 2 ? ", " : " "), t.replace(As, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Ym(t) {
        return Ce(t) || Rn(t) || !!(Ru && t && t[Ru]);
      }
      function Ur(t, i) {
        var a = typeof t;
        return i = i ?? ee, !!i && (a == "number" || a != "symbol" && dt.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function jt(t, i, a) {
        if (!ct(a))
          return !1;
        var f = typeof i;
        return (f == "number" ? qt(a) && Ur(i, a.length) : f == "string" && i in a) ? Ar(a[i], t) : !1;
      }
      function Ta(t, i) {
        if (Ce(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || rr(t) ? !0 : Gn.test(t) || !En.test(t) || i != null && t in Qe(i);
      }
      function Hm(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function Ma(t) {
        var i = Wo(t), a = x[i];
        if (typeof a != "function" || !(i in Le.prototype))
          return !1;
        if (t === a)
          return !0;
        var f = _a(a);
        return !!f && t === f[0];
      }
      function Um(t) {
        return !!Ou && Ou in t;
      }
      var Xm = ho ? Xr : ja;
      function Bi(t) {
        var i = t && t.constructor, a = typeof i == "function" && i.prototype || Jn;
        return t === a;
      }
      function Oc(t) {
        return t === t && !ct(t);
      }
      function zc(t, i) {
        return function(a) {
          return a == null ? !1 : a[t] === i && (i !== r || t in Qe(a));
        };
      }
      function qm(t) {
        var i = jo(t, function(f) {
          return a.size === h && a.clear(), f;
        }), a = i.cache;
        return i;
      }
      function Km(t, i) {
        var a = t[1], f = i[1], v = a | f, _ = v < (I | E | W), M = f == W && a == T || f == W && a == P && t[7].length <= i[8] || f == (W | P) && i[7].length <= i[8] && a == T;
        if (!(_ || M))
          return t;
        f & I && (t[2] = i[2], v |= a & I ? 0 : C);
        var A = i[3];
        if (A) {
          var L = t[3];
          t[3] = L ? dc(L, A, i[4]) : A, t[4] = L ? ln(t[3], y) : i[4];
        }
        return A = i[5], A && (L = t[5], t[5] = L ? pc(L, A, i[6]) : A, t[6] = L ? ln(t[5], y) : i[6]), A = i[7], A && (t[7] = A), f & W && (t[8] = t[8] == null ? i[8] : Nt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = v, t;
      }
      function Jm(t) {
        var i = [];
        if (t != null)
          for (var a in Qe(t))
            i.push(a);
        return i;
      }
      function Zm(t) {
        return mo.call(t);
      }
      function Ac(t, i, a) {
        return i = It(i === r ? t.length - 1 : i, 0), function() {
          for (var f = arguments, v = -1, _ = It(f.length - i, 0), M = G(_); ++v < _; )
            M[v] = f[i + v];
          v = -1;
          for (var A = G(i + 1); ++v < i; )
            A[v] = f[v];
          return A[i] = a(M), Qt(t, this, A);
        };
      }
      function Pc(t, i) {
        return i.length < 2 ? t : zn(t, mr(i, 0, -1));
      }
      function Qm(t, i) {
        for (var a = t.length, f = Nt(i.length, a), v = Xt(t); f--; ) {
          var _ = i[f];
          t[f] = Ur(_, a) ? v[_] : r;
        }
        return t;
      }
      function Ia(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var Rc = Lc(rc), Fi = hg || function(t, i) {
        return $t.setTimeout(t, i);
      }, Oa = Lc(wm);
      function $c(t, i, a) {
        var f = i + "";
        return Oa(t, jm(f, e0(Fm(f), a)));
      }
      function Lc(t) {
        var i = 0, a = 0;
        return function() {
          var f = yg(), v = V - (f - a);
          if (a = f, v > 0) {
            if (++i >= b)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function Bo(t, i) {
        var a = -1, f = t.length, v = f - 1;
        for (i = i === r ? f : i; ++a < i; ) {
          var _ = fa(a, v), M = t[_];
          t[_] = t[a], t[a] = M;
        }
        return t.length = i, t;
      }
      var kc = qm(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(jn, function(a, f, v, _) {
          i.push(v ? _.replace(_e, "$1") : f || a);
        }), i;
      });
      function Dr(t) {
        if (typeof t == "string" || rr(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -fe ? "-0" : i;
      }
      function Pn(t) {
        if (t != null) {
          try {
            return go.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function e0(t, i) {
        return dr(F, function(a) {
          var f = "_." + a[0];
          i & a[1] && !uo(t, f) && t.push(f);
        }), t.sort();
      }
      function Dc(t) {
        if (t instanceof Le)
          return t.clone();
        var i = new hr(t.__wrapped__, t.__chain__);
        return i.__actions__ = Xt(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function t0(t, i, a) {
        (a ? jt(t, i, a) : i === r) ? i = 1 : i = It(Me(i), 0);
        var f = t == null ? 0 : t.length;
        if (!f || i < 1)
          return [];
        for (var v = 0, _ = 0, M = G(wo(f / i)); v < f; )
          M[_++] = mr(t, v, v += i);
        return M;
      }
      function r0(t) {
        for (var i = -1, a = t == null ? 0 : t.length, f = 0, v = []; ++i < a; ) {
          var _ = t[i];
          _ && (v[f++] = _);
        }
        return v;
      }
      function n0() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = G(t - 1), a = arguments[0], f = t; f--; )
          i[f - 1] = arguments[f];
        return an(Ce(a) ? Xt(a) : [a], Lt(i, 1));
      }
      var i0 = Ae(function(t, i) {
        return vt(t) ? Li(t, Lt(i, 1, vt, !0)) : [];
      }), o0 = Ae(function(t, i) {
        var a = vr(i);
        return vt(a) && (a = r), vt(t) ? Li(t, Lt(i, 1, vt, !0), xe(a, 2)) : [];
      }), s0 = Ae(function(t, i) {
        var a = vr(i);
        return vt(a) && (a = r), vt(t) ? Li(t, Lt(i, 1, vt, !0), r, a) : [];
      });
      function a0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), mr(t, i < 0 ? 0 : i, f)) : [];
      }
      function l0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), i = f - i, mr(t, 0, i < 0 ? 0 : i)) : [];
      }
      function u0(t, i) {
        return t && t.length ? Po(t, xe(i, 3), !0, !0) : [];
      }
      function c0(t, i) {
        return t && t.length ? Po(t, xe(i, 3), !0) : [];
      }
      function f0(t, i, a, f) {
        var v = t == null ? 0 : t.length;
        return v ? (a && typeof a != "number" && jt(t, i, a) && (a = 0, f = v), nm(t, i, a, f)) : [];
      }
      function Wc(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = a == null ? 0 : Me(a);
        return v < 0 && (v = It(f + v, 0)), co(t, xe(i, 3), v);
      }
      function Nc(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = f - 1;
        return a !== r && (v = Me(a), v = a < 0 ? It(f + v, 0) : Nt(v, f - 1)), co(t, xe(i, 3), v, !0);
      }
      function Bc(t) {
        var i = t == null ? 0 : t.length;
        return i ? Lt(t, 1) : [];
      }
      function d0(t) {
        var i = t == null ? 0 : t.length;
        return i ? Lt(t, fe) : [];
      }
      function p0(t, i) {
        var a = t == null ? 0 : t.length;
        return a ? (i = i === r ? 1 : Me(i), Lt(t, i)) : [];
      }
      function h0(t) {
        for (var i = -1, a = t == null ? 0 : t.length, f = {}; ++i < a; ) {
          var v = t[i];
          f[v[0]] = v[1];
        }
        return f;
      }
      function Fc(t) {
        return t && t.length ? t[0] : r;
      }
      function g0(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = a == null ? 0 : Me(a);
        return v < 0 && (v = It(f + v, 0)), Un(t, i, v);
      }
      function m0(t) {
        var i = t == null ? 0 : t.length;
        return i ? mr(t, 0, -1) : [];
      }
      var v0 = Ae(function(t) {
        var i = st(t, ma);
        return i.length && i[0] === t[0] ? sa(i) : [];
      }), y0 = Ae(function(t) {
        var i = vr(t), a = st(t, ma);
        return i === vr(a) ? i = r : a.pop(), a.length && a[0] === t[0] ? sa(a, xe(i, 2)) : [];
      }), b0 = Ae(function(t) {
        var i = vr(t), a = st(t, ma);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === t[0] ? sa(a, r, i) : [];
      });
      function x0(t, i) {
        return t == null ? "" : mg.call(t, i);
      }
      function vr(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function S0(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var v = f;
        return a !== r && (v = Me(a), v = v < 0 ? It(f + v, 0) : Nt(v, f - 1)), i === i ? eg(t, i, v) : co(t, Su, v, !0);
      }
      function w0(t, i) {
        return t && t.length ? Zu(t, Me(i)) : r;
      }
      var _0 = Ae(Vc);
      function Vc(t, i) {
        return t && t.length && i && i.length ? ca(t, i) : t;
      }
      function E0(t, i, a) {
        return t && t.length && i && i.length ? ca(t, i, xe(a, 2)) : t;
      }
      function C0(t, i, a) {
        return t && t.length && i && i.length ? ca(t, i, r, a) : t;
      }
      var T0 = Hr(function(t, i) {
        var a = t == null ? 0 : t.length, f = ra(t, i);
        return tc(t, st(i, function(v) {
          return Ur(v, a) ? +v : v;
        }).sort(fc)), f;
      });
      function M0(t, i) {
        var a = [];
        if (!(t && t.length))
          return a;
        var f = -1, v = [], _ = t.length;
        for (i = xe(i, 3); ++f < _; ) {
          var M = t[f];
          i(M, f, t) && (a.push(M), v.push(f));
        }
        return tc(t, v), a;
      }
      function za(t) {
        return t == null ? t : xg.call(t);
      }
      function I0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (a && typeof a != "number" && jt(t, i, a) ? (i = 0, a = f) : (i = i == null ? 0 : Me(i), a = a === r ? f : Me(a)), mr(t, i, a)) : [];
      }
      function O0(t, i) {
        return Ao(t, i);
      }
      function z0(t, i, a) {
        return pa(t, i, xe(a, 2));
      }
      function A0(t, i) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Ao(t, i);
          if (f < a && Ar(t[f], i))
            return f;
        }
        return -1;
      }
      function P0(t, i) {
        return Ao(t, i, !0);
      }
      function R0(t, i, a) {
        return pa(t, i, xe(a, 2), !0);
      }
      function $0(t, i) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Ao(t, i, !0) - 1;
          if (Ar(t[f], i))
            return f;
        }
        return -1;
      }
      function L0(t) {
        return t && t.length ? nc(t) : [];
      }
      function k0(t, i) {
        return t && t.length ? nc(t, xe(i, 2)) : [];
      }
      function D0(t) {
        var i = t == null ? 0 : t.length;
        return i ? mr(t, 1, i) : [];
      }
      function W0(t, i, a) {
        return t && t.length ? (i = a || i === r ? 1 : Me(i), mr(t, 0, i < 0 ? 0 : i)) : [];
      }
      function N0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), i = f - i, mr(t, i < 0 ? 0 : i, f)) : [];
      }
      function B0(t, i) {
        return t && t.length ? Po(t, xe(i, 3), !1, !0) : [];
      }
      function F0(t, i) {
        return t && t.length ? Po(t, xe(i, 3)) : [];
      }
      var V0 = Ae(function(t) {
        return fn(Lt(t, 1, vt, !0));
      }), G0 = Ae(function(t) {
        var i = vr(t);
        return vt(i) && (i = r), fn(Lt(t, 1, vt, !0), xe(i, 2));
      }), j0 = Ae(function(t) {
        var i = vr(t);
        return i = typeof i == "function" ? i : r, fn(Lt(t, 1, vt, !0), r, i);
      });
      function Y0(t) {
        return t && t.length ? fn(t) : [];
      }
      function H0(t, i) {
        return t && t.length ? fn(t, xe(i, 2)) : [];
      }
      function U0(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? fn(t, r, i) : [];
      }
      function Aa(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = sn(t, function(a) {
          if (vt(a))
            return i = It(a.length, i), !0;
        }), Xs(i, function(a) {
          return st(t, Ys(a));
        });
      }
      function Gc(t, i) {
        if (!(t && t.length))
          return [];
        var a = Aa(t);
        return i == null ? a : st(a, function(f) {
          return Qt(i, r, f);
        });
      }
      var X0 = Ae(function(t, i) {
        return vt(t) ? Li(t, i) : [];
      }), q0 = Ae(function(t) {
        return ga(sn(t, vt));
      }), K0 = Ae(function(t) {
        var i = vr(t);
        return vt(i) && (i = r), ga(sn(t, vt), xe(i, 2));
      }), J0 = Ae(function(t) {
        var i = vr(t);
        return i = typeof i == "function" ? i : r, ga(sn(t, vt), r, i);
      }), Z0 = Ae(Aa);
      function Q0(t, i) {
        return ac(t || [], i || [], $i);
      }
      function ev(t, i) {
        return ac(t || [], i || [], Wi);
      }
      var tv = Ae(function(t) {
        var i = t.length, a = i > 1 ? t[i - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, Gc(t, a);
      });
      function jc(t) {
        var i = x(t);
        return i.__chain__ = !0, i;
      }
      function rv(t, i) {
        return i(t), t;
      }
      function Fo(t, i) {
        return i(t);
      }
      var nv = Hr(function(t) {
        var i = t.length, a = i ? t[0] : 0, f = this.__wrapped__, v = function(_) {
          return ra(_, t);
        };
        return i > 1 || this.__actions__.length || !(f instanceof Le) || !Ur(a) ? this.thru(v) : (f = f.slice(a, +a + (i ? 1 : 0)), f.__actions__.push({
          func: Fo,
          args: [v],
          thisArg: r
        }), new hr(f, this.__chain__).thru(function(_) {
          return i && !_.length && _.push(r), _;
        }));
      });
      function iv() {
        return jc(this);
      }
      function ov() {
        return new hr(this.value(), this.__chain__);
      }
      function sv() {
        this.__values__ === r && (this.__values__ = of(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function av() {
        return this;
      }
      function lv(t) {
        for (var i, a = this; a instanceof To; ) {
          var f = Dc(a);
          f.__index__ = 0, f.__values__ = r, i ? v.__wrapped__ = f : i = f;
          var v = f;
          a = a.__wrapped__;
        }
        return v.__wrapped__ = t, i;
      }
      function uv() {
        var t = this.__wrapped__;
        if (t instanceof Le) {
          var i = t;
          return this.__actions__.length && (i = new Le(this)), i = i.reverse(), i.__actions__.push({
            func: Fo,
            args: [za],
            thisArg: r
          }), new hr(i, this.__chain__);
        }
        return this.thru(za);
      }
      function cv() {
        return sc(this.__wrapped__, this.__actions__);
      }
      var fv = Ro(function(t, i, a) {
        Ve.call(t, a) ? ++t[a] : jr(t, a, 1);
      });
      function dv(t, i, a) {
        var f = Ce(t) ? bu : rm;
        return a && jt(t, i, a) && (i = r), f(t, xe(i, 3));
      }
      function pv(t, i) {
        var a = Ce(t) ? sn : Gu;
        return a(t, xe(i, 3));
      }
      var hv = vc(Wc), gv = vc(Nc);
      function mv(t, i) {
        return Lt(Vo(t, i), 1);
      }
      function vv(t, i) {
        return Lt(Vo(t, i), fe);
      }
      function yv(t, i, a) {
        return a = a === r ? 1 : Me(a), Lt(Vo(t, i), a);
      }
      function Yc(t, i) {
        var a = Ce(t) ? dr : cn;
        return a(t, xe(i, 3));
      }
      function Hc(t, i) {
        var a = Ce(t) ? Dh : Vu;
        return a(t, xe(i, 3));
      }
      var bv = Ro(function(t, i, a) {
        Ve.call(t, a) ? t[a].push(i) : jr(t, a, [i]);
      });
      function xv(t, i, a, f) {
        t = qt(t) ? t : oi(t), a = a && !f ? Me(a) : 0;
        var v = t.length;
        return a < 0 && (a = It(v + a, 0)), Uo(t) ? a <= v && t.indexOf(i, a) > -1 : !!v && Un(t, i, a) > -1;
      }
      var Sv = Ae(function(t, i, a) {
        var f = -1, v = typeof i == "function", _ = qt(t) ? G(t.length) : [];
        return cn(t, function(M) {
          _[++f] = v ? Qt(i, M, a) : ki(M, i, a);
        }), _;
      }), wv = Ro(function(t, i, a) {
        jr(t, a, i);
      });
      function Vo(t, i) {
        var a = Ce(t) ? st : qu;
        return a(t, xe(i, 3));
      }
      function _v(t, i, a, f) {
        return t == null ? [] : (Ce(i) || (i = i == null ? [] : [i]), a = f ? r : a, Ce(a) || (a = a == null ? [] : [a]), Qu(t, i, a));
      }
      var Ev = Ro(function(t, i, a) {
        t[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Cv(t, i, a) {
        var f = Ce(t) ? Gs : _u, v = arguments.length < 3;
        return f(t, xe(i, 4), a, v, cn);
      }
      function Tv(t, i, a) {
        var f = Ce(t) ? Wh : _u, v = arguments.length < 3;
        return f(t, xe(i, 4), a, v, Vu);
      }
      function Mv(t, i) {
        var a = Ce(t) ? sn : Gu;
        return a(t, Yo(xe(i, 3)));
      }
      function Iv(t) {
        var i = Ce(t) ? Wu : xm;
        return i(t);
      }
      function Ov(t, i, a) {
        (a ? jt(t, i, a) : i === r) ? i = 1 : i = Me(i);
        var f = Ce(t) ? Jg : Sm;
        return f(t, i);
      }
      function zv(t) {
        var i = Ce(t) ? Zg : _m;
        return i(t);
      }
      function Av(t) {
        if (t == null)
          return 0;
        if (qt(t))
          return Uo(t) ? qn(t) : t.length;
        var i = Bt(t);
        return i == ze || i == Ze ? t.size : la(t).length;
      }
      function Pv(t, i, a) {
        var f = Ce(t) ? js : Em;
        return a && jt(t, i, a) && (i = r), f(t, xe(i, 3));
      }
      var Rv = Ae(function(t, i) {
        if (t == null)
          return [];
        var a = i.length;
        return a > 1 && jt(t, i[0], i[1]) ? i = [] : a > 2 && jt(i[0], i[1], i[2]) && (i = [i[0]]), Qu(t, Lt(i, 1), []);
      }), Go = pg || function() {
        return $t.Date.now();
      };
      function $v(t, i) {
        if (typeof i != "function")
          throw new pr(u);
        return t = Me(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function Uc(t, i, a) {
        return i = a ? r : i, i = t && i == null ? t.length : i, Yr(t, W, r, r, r, r, i);
      }
      function Xc(t, i) {
        var a;
        if (typeof i != "function")
          throw new pr(u);
        return t = Me(t), function() {
          return --t > 0 && (a = i.apply(this, arguments)), t <= 1 && (i = r), a;
        };
      }
      var Pa = Ae(function(t, i, a) {
        var f = I;
        if (a.length) {
          var v = ln(a, ni(Pa));
          f |= z;
        }
        return Yr(t, f, i, a, v);
      }), qc = Ae(function(t, i, a) {
        var f = I | E;
        if (a.length) {
          var v = ln(a, ni(qc));
          f |= z;
        }
        return Yr(i, f, t, a, v);
      });
      function Kc(t, i, a) {
        i = a ? r : i;
        var f = Yr(t, T, r, r, r, r, r, i);
        return f.placeholder = Kc.placeholder, f;
      }
      function Jc(t, i, a) {
        i = a ? r : i;
        var f = Yr(t, R, r, r, r, r, r, i);
        return f.placeholder = Jc.placeholder, f;
      }
      function Zc(t, i, a) {
        var f, v, _, M, A, L, K = 0, J = !1, re = !1, ce = !0;
        if (typeof t != "function")
          throw new pr(u);
        i = yr(i) || 0, ct(a) && (J = !!a.leading, re = "maxWait" in a, _ = re ? It(yr(a.maxWait) || 0, i) : _, ce = "trailing" in a ? !!a.trailing : ce);
        function me(yt) {
          var Pr = f, Kr = v;
          return f = v = r, K = yt, M = t.apply(Kr, Pr), M;
        }
        function Se(yt) {
          return K = yt, A = Fi(Re, i), J ? me(yt) : M;
        }
        function Oe(yt) {
          var Pr = yt - L, Kr = yt - K, yf = i - Pr;
          return re ? Nt(yf, _ - Kr) : yf;
        }
        function we(yt) {
          var Pr = yt - L, Kr = yt - K;
          return L === r || Pr >= i || Pr < 0 || re && Kr >= _;
        }
        function Re() {
          var yt = Go();
          if (we(yt))
            return ke(yt);
          A = Fi(Re, Oe(yt));
        }
        function ke(yt) {
          return A = r, ce && f ? me(yt) : (f = v = r, M);
        }
        function nr() {
          A !== r && lc(A), K = 0, f = L = v = A = r;
        }
        function Yt() {
          return A === r ? M : ke(Go());
        }
        function ir() {
          var yt = Go(), Pr = we(yt);
          if (f = arguments, v = this, L = yt, Pr) {
            if (A === r)
              return Se(L);
            if (re)
              return lc(A), A = Fi(Re, i), me(L);
          }
          return A === r && (A = Fi(Re, i)), M;
        }
        return ir.cancel = nr, ir.flush = Yt, ir;
      }
      var Lv = Ae(function(t, i) {
        return Fu(t, 1, i);
      }), kv = Ae(function(t, i, a) {
        return Fu(t, yr(i) || 0, a);
      });
      function Dv(t) {
        return Yr(t, N);
      }
      function jo(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new pr(u);
        var a = function() {
          var f = arguments, v = i ? i.apply(this, f) : f[0], _ = a.cache;
          if (_.has(v))
            return _.get(v);
          var M = t.apply(this, f);
          return a.cache = _.set(v, M) || _, M;
        };
        return a.cache = new (jo.Cache || Gr)(), a;
      }
      jo.Cache = Gr;
      function Yo(t) {
        if (typeof t != "function")
          throw new pr(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function Wv(t) {
        return Xc(2, t);
      }
      var Nv = Cm(function(t, i) {
        i = i.length == 1 && Ce(i[0]) ? st(i[0], er(xe())) : st(Lt(i, 1), er(xe()));
        var a = i.length;
        return Ae(function(f) {
          for (var v = -1, _ = Nt(f.length, a); ++v < _; )
            f[v] = i[v].call(this, f[v]);
          return Qt(t, this, f);
        });
      }), Ra = Ae(function(t, i) {
        var a = ln(i, ni(Ra));
        return Yr(t, z, r, i, a);
      }), Qc = Ae(function(t, i) {
        var a = ln(i, ni(Qc));
        return Yr(t, j, r, i, a);
      }), Bv = Hr(function(t, i) {
        return Yr(t, P, r, r, r, i);
      });
      function Fv(t, i) {
        if (typeof t != "function")
          throw new pr(u);
        return i = i === r ? i : Me(i), Ae(t, i);
      }
      function Vv(t, i) {
        if (typeof t != "function")
          throw new pr(u);
        return i = i == null ? 0 : It(Me(i), 0), Ae(function(a) {
          var f = a[i], v = pn(a, 0, i);
          return f && an(v, f), Qt(t, this, v);
        });
      }
      function Gv(t, i, a) {
        var f = !0, v = !0;
        if (typeof t != "function")
          throw new pr(u);
        return ct(a) && (f = "leading" in a ? !!a.leading : f, v = "trailing" in a ? !!a.trailing : v), Zc(t, i, {
          leading: f,
          maxWait: i,
          trailing: v
        });
      }
      function jv(t) {
        return Uc(t, 1);
      }
      function Yv(t, i) {
        return Ra(va(i), t);
      }
      function Hv() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Ce(t) ? t : [t];
      }
      function Uv(t) {
        return gr(t, d);
      }
      function Xv(t, i) {
        return i = typeof i == "function" ? i : r, gr(t, d, i);
      }
      function qv(t) {
        return gr(t, m | d);
      }
      function Kv(t, i) {
        return i = typeof i == "function" ? i : r, gr(t, m | d, i);
      }
      function Jv(t, i) {
        return i == null || Bu(t, i, zt(i));
      }
      function Ar(t, i) {
        return t === i || t !== t && i !== i;
      }
      var Zv = Do(oa), Qv = Do(function(t, i) {
        return t >= i;
      }), Rn = Hu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Hu : function(t) {
        return pt(t) && Ve.call(t, "callee") && !Pu.call(t, "callee");
      }, Ce = G.isArray, ey = pu ? er(pu) : lm;
      function qt(t) {
        return t != null && Ho(t.length) && !Xr(t);
      }
      function vt(t) {
        return pt(t) && qt(t);
      }
      function ty(t) {
        return t === !0 || t === !1 || pt(t) && Gt(t) == te;
      }
      var hn = gg || ja, ry = hu ? er(hu) : um;
      function ny(t) {
        return pt(t) && t.nodeType === 1 && !Vi(t);
      }
      function iy(t) {
        if (t == null)
          return !0;
        if (qt(t) && (Ce(t) || typeof t == "string" || typeof t.splice == "function" || hn(t) || ii(t) || Rn(t)))
          return !t.length;
        var i = Bt(t);
        if (i == ze || i == Ze)
          return !t.size;
        if (Bi(t))
          return !la(t).length;
        for (var a in t)
          if (Ve.call(t, a))
            return !1;
        return !0;
      }
      function oy(t, i) {
        return Di(t, i);
      }
      function sy(t, i, a) {
        a = typeof a == "function" ? a : r;
        var f = a ? a(t, i) : r;
        return f === r ? Di(t, i, r, a) : !!f;
      }
      function $a(t) {
        if (!pt(t))
          return !1;
        var i = Gt(t);
        return i == ve || i == ue || typeof t.message == "string" && typeof t.name == "string" && !Vi(t);
      }
      function ay(t) {
        return typeof t == "number" && $u(t);
      }
      function Xr(t) {
        if (!ct(t))
          return !1;
        var i = Gt(t);
        return i == oe || i == Te || i == le || i == et;
      }
      function ef(t) {
        return typeof t == "number" && t == Me(t);
      }
      function Ho(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ee;
      }
      function ct(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function pt(t) {
        return t != null && typeof t == "object";
      }
      var tf = gu ? er(gu) : fm;
      function ly(t, i) {
        return t === i || aa(t, i, Ea(i));
      }
      function uy(t, i, a) {
        return a = typeof a == "function" ? a : r, aa(t, i, Ea(i), a);
      }
      function cy(t) {
        return rf(t) && t != +t;
      }
      function fy(t) {
        if (Xm(t))
          throw new Ee(l);
        return Uu(t);
      }
      function dy(t) {
        return t === null;
      }
      function py(t) {
        return t == null;
      }
      function rf(t) {
        return typeof t == "number" || pt(t) && Gt(t) == qe;
      }
      function Vi(t) {
        if (!pt(t) || Gt(t) != it)
          return !1;
        var i = bo(t);
        if (i === null)
          return !0;
        var a = Ve.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && go.call(a) == ug;
      }
      var La = mu ? er(mu) : dm;
      function hy(t) {
        return ef(t) && t >= -ee && t <= ee;
      }
      var nf = vu ? er(vu) : pm;
      function Uo(t) {
        return typeof t == "string" || !Ce(t) && pt(t) && Gt(t) == ft;
      }
      function rr(t) {
        return typeof t == "symbol" || pt(t) && Gt(t) == Vt;
      }
      var ii = yu ? er(yu) : hm;
      function gy(t) {
        return t === r;
      }
      function my(t) {
        return pt(t) && Bt(t) == Ot;
      }
      function vy(t) {
        return pt(t) && Gt(t) == At;
      }
      var yy = Do(ua), by = Do(function(t, i) {
        return t <= i;
      });
      function of(t) {
        if (!t)
          return [];
        if (qt(t))
          return Uo(t) ? Or(t) : Xt(t);
        if (Oi && t[Oi])
          return Jh(t[Oi]());
        var i = Bt(t), a = i == ze ? Ks : i == Ze ? fo : oi;
        return a(t);
      }
      function qr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = yr(t), t === fe || t === -fe) {
          var i = t < 0 ? -1 : 1;
          return i * be;
        }
        return t === t ? t : 0;
      }
      function Me(t) {
        var i = qr(t), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function sf(t) {
        return t ? On(Me(t), 0, Z) : 0;
      }
      function yr(t) {
        if (typeof t == "number")
          return t;
        if (rr(t))
          return Y;
        if (ct(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ct(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Eu(t);
        var a = Pe.test(t);
        return a || ut.test(t) ? $h(t.slice(2), a ? 2 : 8) : $e.test(t) ? Y : +t;
      }
      function af(t) {
        return kr(t, Kt(t));
      }
      function xy(t) {
        return t ? On(Me(t), -ee, ee) : t === 0 ? t : 0;
      }
      function Ge(t) {
        return t == null ? "" : tr(t);
      }
      var Sy = ti(function(t, i) {
        if (Bi(i) || qt(i)) {
          kr(i, zt(i), t);
          return;
        }
        for (var a in i)
          Ve.call(i, a) && $i(t, a, i[a]);
      }), lf = ti(function(t, i) {
        kr(i, Kt(i), t);
      }), Xo = ti(function(t, i, a, f) {
        kr(i, Kt(i), t, f);
      }), wy = ti(function(t, i, a, f) {
        kr(i, zt(i), t, f);
      }), _y = Hr(ra);
      function Ey(t, i) {
        var a = ei(t);
        return i == null ? a : Nu(a, i);
      }
      var Cy = Ae(function(t, i) {
        t = Qe(t);
        var a = -1, f = i.length, v = f > 2 ? i[2] : r;
        for (v && jt(i[0], i[1], v) && (f = 1); ++a < f; )
          for (var _ = i[a], M = Kt(_), A = -1, L = M.length; ++A < L; ) {
            var K = M[A], J = t[K];
            (J === r || Ar(J, Jn[K]) && !Ve.call(t, K)) && (t[K] = _[K]);
          }
        return t;
      }), Ty = Ae(function(t) {
        return t.push(r, Ec), Qt(uf, r, t);
      });
      function My(t, i) {
        return xu(t, xe(i, 3), Lr);
      }
      function Iy(t, i) {
        return xu(t, xe(i, 3), ia);
      }
      function Oy(t, i) {
        return t == null ? t : na(t, xe(i, 3), Kt);
      }
      function zy(t, i) {
        return t == null ? t : ju(t, xe(i, 3), Kt);
      }
      function Ay(t, i) {
        return t && Lr(t, xe(i, 3));
      }
      function Py(t, i) {
        return t && ia(t, xe(i, 3));
      }
      function Ry(t) {
        return t == null ? [] : Oo(t, zt(t));
      }
      function $y(t) {
        return t == null ? [] : Oo(t, Kt(t));
      }
      function ka(t, i, a) {
        var f = t == null ? r : zn(t, i);
        return f === r ? a : f;
      }
      function Ly(t, i) {
        return t != null && Mc(t, i, im);
      }
      function Da(t, i) {
        return t != null && Mc(t, i, om);
      }
      var ky = bc(function(t, i, a) {
        i != null && typeof i.toString != "function" && (i = mo.call(i)), t[i] = a;
      }, Na(Jt)), Dy = bc(function(t, i, a) {
        i != null && typeof i.toString != "function" && (i = mo.call(i)), Ve.call(t, i) ? t[i].push(a) : t[i] = [a];
      }, xe), Wy = Ae(ki);
      function zt(t) {
        return qt(t) ? Du(t) : la(t);
      }
      function Kt(t) {
        return qt(t) ? Du(t, !0) : gm(t);
      }
      function Ny(t, i) {
        var a = {};
        return i = xe(i, 3), Lr(t, function(f, v, _) {
          jr(a, i(f, v, _), f);
        }), a;
      }
      function By(t, i) {
        var a = {};
        return i = xe(i, 3), Lr(t, function(f, v, _) {
          jr(a, v, i(f, v, _));
        }), a;
      }
      var Fy = ti(function(t, i, a) {
        zo(t, i, a);
      }), uf = ti(function(t, i, a, f) {
        zo(t, i, a, f);
      }), Vy = Hr(function(t, i) {
        var a = {};
        if (t == null)
          return a;
        var f = !1;
        i = st(i, function(_) {
          return _ = dn(_, t), f || (f = _.length > 1), _;
        }), kr(t, wa(t), a), f && (a = gr(a, m | w | d, km));
        for (var v = i.length; v--; )
          ha(a, i[v]);
        return a;
      });
      function Gy(t, i) {
        return cf(t, Yo(xe(i)));
      }
      var jy = Hr(function(t, i) {
        return t == null ? {} : vm(t, i);
      });
      function cf(t, i) {
        if (t == null)
          return {};
        var a = st(wa(t), function(f) {
          return [f];
        });
        return i = xe(i), ec(t, a, function(f, v) {
          return i(f, v[0]);
        });
      }
      function Yy(t, i, a) {
        i = dn(i, t);
        var f = -1, v = i.length;
        for (v || (v = 1, t = r); ++f < v; ) {
          var _ = t == null ? r : t[Dr(i[f])];
          _ === r && (f = v, _ = a), t = Xr(_) ? _.call(t) : _;
        }
        return t;
      }
      function Hy(t, i, a) {
        return t == null ? t : Wi(t, i, a);
      }
      function Uy(t, i, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : Wi(t, i, a, f);
      }
      var ff = wc(zt), df = wc(Kt);
      function Xy(t, i, a) {
        var f = Ce(t), v = f || hn(t) || ii(t);
        if (i = xe(i, 4), a == null) {
          var _ = t && t.constructor;
          v ? a = f ? new _() : [] : ct(t) ? a = Xr(_) ? ei(bo(t)) : {} : a = {};
        }
        return (v ? dr : Lr)(t, function(M, A, L) {
          return i(a, M, A, L);
        }), a;
      }
      function qy(t, i) {
        return t == null ? !0 : ha(t, i);
      }
      function Ky(t, i, a) {
        return t == null ? t : oc(t, i, va(a));
      }
      function Jy(t, i, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : oc(t, i, va(a), f);
      }
      function oi(t) {
        return t == null ? [] : qs(t, zt(t));
      }
      function Zy(t) {
        return t == null ? [] : qs(t, Kt(t));
      }
      function Qy(t, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = yr(a), a = a === a ? a : 0), i !== r && (i = yr(i), i = i === i ? i : 0), On(yr(t), i, a);
      }
      function eb(t, i, a) {
        return i = qr(i), a === r ? (a = i, i = 0) : a = qr(a), t = yr(t), sm(t, i, a);
      }
      function tb(t, i, a) {
        if (a && typeof a != "boolean" && jt(t, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof t == "boolean" && (a = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = qr(t), i === r ? (i = t, t = 0) : i = qr(i)), t > i) {
          var f = t;
          t = i, i = f;
        }
        if (a || t % 1 || i % 1) {
          var v = Lu();
          return Nt(t + v * (i - t + Rh("1e-" + ((v + "").length - 1))), i);
        }
        return fa(t, i);
      }
      var rb = ri(function(t, i, a) {
        return i = i.toLowerCase(), t + (a ? pf(i) : i);
      });
      function pf(t) {
        return Wa(Ge(t).toLowerCase());
      }
      function hf(t) {
        return t = Ge(t), t && t.replace(Ut, Hh).replace(_h, "");
      }
      function nb(t, i, a) {
        t = Ge(t), i = tr(i);
        var f = t.length;
        a = a === r ? f : On(Me(a), 0, f);
        var v = a;
        return a -= i.length, a >= 0 && t.slice(a, v) == i;
      }
      function ib(t) {
        return t = Ge(t), t && Fn.test(t) ? t.replace(Br, Uh) : t;
      }
      function ob(t) {
        return t = Ge(t), t && ao.test(t) ? t.replace(Yn, "\\$&") : t;
      }
      var sb = ri(function(t, i, a) {
        return t + (a ? "-" : "") + i.toLowerCase();
      }), ab = ri(function(t, i, a) {
        return t + (a ? " " : "") + i.toLowerCase();
      }), lb = mc("toLowerCase");
      function ub(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? qn(t) : 0;
        if (!i || f >= i)
          return t;
        var v = (i - f) / 2;
        return ko(_o(v), a) + t + ko(wo(v), a);
      }
      function cb(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? qn(t) : 0;
        return i && f < i ? t + ko(i - f, a) : t;
      }
      function fb(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? qn(t) : 0;
        return i && f < i ? ko(i - f, a) + t : t;
      }
      function db(t, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), bg(Ge(t).replace(Ti, ""), i || 0);
      }
      function pb(t, i, a) {
        return (a ? jt(t, i, a) : i === r) ? i = 1 : i = Me(i), da(Ge(t), i);
      }
      function hb() {
        var t = arguments, i = Ge(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var gb = ri(function(t, i, a) {
        return t + (a ? "_" : "") + i.toLowerCase();
      });
      function mb(t, i, a) {
        return a && typeof a != "number" && jt(t, i, a) && (i = a = r), a = a === r ? Z : a >>> 0, a ? (t = Ge(t), t && (typeof i == "string" || i != null && !La(i)) && (i = tr(i), !i && Xn(t)) ? pn(Or(t), 0, a) : t.split(i, a)) : [];
      }
      var vb = ri(function(t, i, a) {
        return t + (a ? " " : "") + Wa(i);
      });
      function yb(t, i, a) {
        return t = Ge(t), a = a == null ? 0 : On(Me(a), 0, t.length), i = tr(i), t.slice(a, a + i.length) == i;
      }
      function bb(t, i, a) {
        var f = x.templateSettings;
        a && jt(t, i, a) && (i = r), t = Ge(t), i = Xo({}, i, f, _c);
        var v = Xo({}, i.imports, f.imports, _c), _ = zt(v), M = qs(v, _), A, L, K = 0, J = i.interpolate || Ir, re = "__p += '", ce = Js(
          (i.escape || Ir).source + "|" + J.source + "|" + (J === on ? We : Ir).source + "|" + (i.evaluate || Ir).source + "|$",
          "g"
        ), me = "//# sourceURL=" + (Ve.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ih + "]") + `
`;
        t.replace(ce, function(we, Re, ke, nr, Yt, ir) {
          return ke || (ke = nr), re += t.slice(K, ir).replace(Fr, Xh), Re && (A = !0, re += `' +
__e(` + Re + `) +
'`), Yt && (L = !0, re += `';
` + Yt + `;
__p += '`), ke && (re += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), K = ir + we.length, we;
        }), re += `';
`;
        var Se = Ve.call(i, "variable") && i.variable;
        if (!Se)
          re = `with (obj) {
` + re + `
}
`;
        else if (he.test(Se))
          throw new Ee(p);
        re = (L ? re.replace(nn, "") : re).replace(Sn, "$1").replace(Mr, "$1;"), re = "function(" + (Se || "obj") + `) {
` + (Se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + re + `return __p
}`;
        var Oe = mf(function() {
          return Ne(_, me + "return " + re).apply(r, M);
        });
        if (Oe.source = re, $a(Oe))
          throw Oe;
        return Oe;
      }
      function xb(t) {
        return Ge(t).toLowerCase();
      }
      function Sb(t) {
        return Ge(t).toUpperCase();
      }
      function wb(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return Eu(t);
        if (!t || !(i = tr(i)))
          return t;
        var f = Or(t), v = Or(i), _ = Cu(f, v), M = Tu(f, v) + 1;
        return pn(f, _, M).join("");
      }
      function _b(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return t.slice(0, Iu(t) + 1);
        if (!t || !(i = tr(i)))
          return t;
        var f = Or(t), v = Tu(f, Or(i)) + 1;
        return pn(f, 0, v).join("");
      }
      function Eb(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return t.replace(Ti, "");
        if (!t || !(i = tr(i)))
          return t;
        var f = Or(t), v = Cu(f, Or(i));
        return pn(f, v).join("");
      }
      function Cb(t, i) {
        var a = k, f = B;
        if (ct(i)) {
          var v = "separator" in i ? i.separator : v;
          a = "length" in i ? Me(i.length) : a, f = "omission" in i ? tr(i.omission) : f;
        }
        t = Ge(t);
        var _ = t.length;
        if (Xn(t)) {
          var M = Or(t);
          _ = M.length;
        }
        if (a >= _)
          return t;
        var A = a - qn(f);
        if (A < 1)
          return f;
        var L = M ? pn(M, 0, A).join("") : t.slice(0, A);
        if (v === r)
          return L + f;
        if (M && (A += L.length - A), La(v)) {
          if (t.slice(A).search(v)) {
            var K, J = L;
            for (v.global || (v = Js(v.source, Ge(Fe.exec(v)) + "g")), v.lastIndex = 0; K = v.exec(J); )
              var re = K.index;
            L = L.slice(0, re === r ? A : re);
          }
        } else if (t.indexOf(tr(v), A) != A) {
          var ce = L.lastIndexOf(v);
          ce > -1 && (L = L.slice(0, ce));
        }
        return L + f;
      }
      function Tb(t) {
        return t = Ge(t), t && wn.test(t) ? t.replace(Nr, tg) : t;
      }
      var Mb = ri(function(t, i, a) {
        return t + (a ? " " : "") + i.toUpperCase();
      }), Wa = mc("toUpperCase");
      function gf(t, i, a) {
        return t = Ge(t), i = a ? r : i, i === r ? Kh(t) ? ig(t) : Fh(t) : t.match(i) || [];
      }
      var mf = Ae(function(t, i) {
        try {
          return Qt(t, r, i);
        } catch (a) {
          return $a(a) ? a : new Ee(a);
        }
      }), Ib = Hr(function(t, i) {
        return dr(i, function(a) {
          a = Dr(a), jr(t, a, Pa(t[a], t));
        }), t;
      });
      function Ob(t) {
        var i = t == null ? 0 : t.length, a = xe();
        return t = i ? st(t, function(f) {
          if (typeof f[1] != "function")
            throw new pr(u);
          return [a(f[0]), f[1]];
        }) : [], Ae(function(f) {
          for (var v = -1; ++v < i; ) {
            var _ = t[v];
            if (Qt(_[0], this, f))
              return Qt(_[1], this, f);
          }
        });
      }
      function zb(t) {
        return tm(gr(t, m));
      }
      function Na(t) {
        return function() {
          return t;
        };
      }
      function Ab(t, i) {
        return t == null || t !== t ? i : t;
      }
      var Pb = yc(), Rb = yc(!0);
      function Jt(t) {
        return t;
      }
      function Ba(t) {
        return Xu(typeof t == "function" ? t : gr(t, m));
      }
      function $b(t) {
        return Ku(gr(t, m));
      }
      function Lb(t, i) {
        return Ju(t, gr(i, m));
      }
      var kb = Ae(function(t, i) {
        return function(a) {
          return ki(a, t, i);
        };
      }), Db = Ae(function(t, i) {
        return function(a) {
          return ki(t, a, i);
        };
      });
      function Fa(t, i, a) {
        var f = zt(i), v = Oo(i, f);
        a == null && !(ct(i) && (v.length || !f.length)) && (a = i, i = t, t = this, v = Oo(i, zt(i)));
        var _ = !(ct(a) && "chain" in a) || !!a.chain, M = Xr(t);
        return dr(v, function(A) {
          var L = i[A];
          t[A] = L, M && (t.prototype[A] = function() {
            var K = this.__chain__;
            if (_ || K) {
              var J = t(this.__wrapped__), re = J.__actions__ = Xt(this.__actions__);
              return re.push({ func: L, args: arguments, thisArg: t }), J.__chain__ = K, J;
            }
            return L.apply(t, an([this.value()], arguments));
          });
        }), t;
      }
      function Wb() {
        return $t._ === this && ($t._ = cg), this;
      }
      function Va() {
      }
      function Nb(t) {
        return t = Me(t), Ae(function(i) {
          return Zu(i, t);
        });
      }
      var Bb = ba(st), Fb = ba(bu), Vb = ba(js);
      function vf(t) {
        return Ta(t) ? Ys(Dr(t)) : ym(t);
      }
      function Gb(t) {
        return function(i) {
          return t == null ? r : zn(t, i);
        };
      }
      var jb = xc(), Yb = xc(!0);
      function Ga() {
        return [];
      }
      function ja() {
        return !1;
      }
      function Hb() {
        return {};
      }
      function Ub() {
        return "";
      }
      function Xb() {
        return !0;
      }
      function qb(t, i) {
        if (t = Me(t), t < 1 || t > ee)
          return [];
        var a = Z, f = Nt(t, Z);
        i = xe(i), t -= Z;
        for (var v = Xs(f, i); ++a < t; )
          i(a);
        return v;
      }
      function Kb(t) {
        return Ce(t) ? st(t, Dr) : rr(t) ? [t] : Xt(kc(Ge(t)));
      }
      function Jb(t) {
        var i = ++lg;
        return Ge(t) + i;
      }
      var Zb = Lo(function(t, i) {
        return t + i;
      }, 0), Qb = xa("ceil"), ex = Lo(function(t, i) {
        return t / i;
      }, 1), tx = xa("floor");
      function rx(t) {
        return t && t.length ? Io(t, Jt, oa) : r;
      }
      function nx(t, i) {
        return t && t.length ? Io(t, xe(i, 2), oa) : r;
      }
      function ix(t) {
        return wu(t, Jt);
      }
      function ox(t, i) {
        return wu(t, xe(i, 2));
      }
      function sx(t) {
        return t && t.length ? Io(t, Jt, ua) : r;
      }
      function ax(t, i) {
        return t && t.length ? Io(t, xe(i, 2), ua) : r;
      }
      var lx = Lo(function(t, i) {
        return t * i;
      }, 1), ux = xa("round"), cx = Lo(function(t, i) {
        return t - i;
      }, 0);
      function fx(t) {
        return t && t.length ? Us(t, Jt) : 0;
      }
      function dx(t, i) {
        return t && t.length ? Us(t, xe(i, 2)) : 0;
      }
      return x.after = $v, x.ary = Uc, x.assign = Sy, x.assignIn = lf, x.assignInWith = Xo, x.assignWith = wy, x.at = _y, x.before = Xc, x.bind = Pa, x.bindAll = Ib, x.bindKey = qc, x.castArray = Hv, x.chain = jc, x.chunk = t0, x.compact = r0, x.concat = n0, x.cond = Ob, x.conforms = zb, x.constant = Na, x.countBy = fv, x.create = Ey, x.curry = Kc, x.curryRight = Jc, x.debounce = Zc, x.defaults = Cy, x.defaultsDeep = Ty, x.defer = Lv, x.delay = kv, x.difference = i0, x.differenceBy = o0, x.differenceWith = s0, x.drop = a0, x.dropRight = l0, x.dropRightWhile = u0, x.dropWhile = c0, x.fill = f0, x.filter = pv, x.flatMap = mv, x.flatMapDeep = vv, x.flatMapDepth = yv, x.flatten = Bc, x.flattenDeep = d0, x.flattenDepth = p0, x.flip = Dv, x.flow = Pb, x.flowRight = Rb, x.fromPairs = h0, x.functions = Ry, x.functionsIn = $y, x.groupBy = bv, x.initial = m0, x.intersection = v0, x.intersectionBy = y0, x.intersectionWith = b0, x.invert = ky, x.invertBy = Dy, x.invokeMap = Sv, x.iteratee = Ba, x.keyBy = wv, x.keys = zt, x.keysIn = Kt, x.map = Vo, x.mapKeys = Ny, x.mapValues = By, x.matches = $b, x.matchesProperty = Lb, x.memoize = jo, x.merge = Fy, x.mergeWith = uf, x.method = kb, x.methodOf = Db, x.mixin = Fa, x.negate = Yo, x.nthArg = Nb, x.omit = Vy, x.omitBy = Gy, x.once = Wv, x.orderBy = _v, x.over = Bb, x.overArgs = Nv, x.overEvery = Fb, x.overSome = Vb, x.partial = Ra, x.partialRight = Qc, x.partition = Ev, x.pick = jy, x.pickBy = cf, x.property = vf, x.propertyOf = Gb, x.pull = _0, x.pullAll = Vc, x.pullAllBy = E0, x.pullAllWith = C0, x.pullAt = T0, x.range = jb, x.rangeRight = Yb, x.rearg = Bv, x.reject = Mv, x.remove = M0, x.rest = Fv, x.reverse = za, x.sampleSize = Ov, x.set = Hy, x.setWith = Uy, x.shuffle = zv, x.slice = I0, x.sortBy = Rv, x.sortedUniq = L0, x.sortedUniqBy = k0, x.split = mb, x.spread = Vv, x.tail = D0, x.take = W0, x.takeRight = N0, x.takeRightWhile = B0, x.takeWhile = F0, x.tap = rv, x.throttle = Gv, x.thru = Fo, x.toArray = of, x.toPairs = ff, x.toPairsIn = df, x.toPath = Kb, x.toPlainObject = af, x.transform = Xy, x.unary = jv, x.union = V0, x.unionBy = G0, x.unionWith = j0, x.uniq = Y0, x.uniqBy = H0, x.uniqWith = U0, x.unset = qy, x.unzip = Aa, x.unzipWith = Gc, x.update = Ky, x.updateWith = Jy, x.values = oi, x.valuesIn = Zy, x.without = X0, x.words = gf, x.wrap = Yv, x.xor = q0, x.xorBy = K0, x.xorWith = J0, x.zip = Z0, x.zipObject = Q0, x.zipObjectDeep = ev, x.zipWith = tv, x.entries = ff, x.entriesIn = df, x.extend = lf, x.extendWith = Xo, Fa(x, x), x.add = Zb, x.attempt = mf, x.camelCase = rb, x.capitalize = pf, x.ceil = Qb, x.clamp = Qy, x.clone = Uv, x.cloneDeep = qv, x.cloneDeepWith = Kv, x.cloneWith = Xv, x.conformsTo = Jv, x.deburr = hf, x.defaultTo = Ab, x.divide = ex, x.endsWith = nb, x.eq = Ar, x.escape = ib, x.escapeRegExp = ob, x.every = dv, x.find = hv, x.findIndex = Wc, x.findKey = My, x.findLast = gv, x.findLastIndex = Nc, x.findLastKey = Iy, x.floor = tx, x.forEach = Yc, x.forEachRight = Hc, x.forIn = Oy, x.forInRight = zy, x.forOwn = Ay, x.forOwnRight = Py, x.get = ka, x.gt = Zv, x.gte = Qv, x.has = Ly, x.hasIn = Da, x.head = Fc, x.identity = Jt, x.includes = xv, x.indexOf = g0, x.inRange = eb, x.invoke = Wy, x.isArguments = Rn, x.isArray = Ce, x.isArrayBuffer = ey, x.isArrayLike = qt, x.isArrayLikeObject = vt, x.isBoolean = ty, x.isBuffer = hn, x.isDate = ry, x.isElement = ny, x.isEmpty = iy, x.isEqual = oy, x.isEqualWith = sy, x.isError = $a, x.isFinite = ay, x.isFunction = Xr, x.isInteger = ef, x.isLength = Ho, x.isMap = tf, x.isMatch = ly, x.isMatchWith = uy, x.isNaN = cy, x.isNative = fy, x.isNil = py, x.isNull = dy, x.isNumber = rf, x.isObject = ct, x.isObjectLike = pt, x.isPlainObject = Vi, x.isRegExp = La, x.isSafeInteger = hy, x.isSet = nf, x.isString = Uo, x.isSymbol = rr, x.isTypedArray = ii, x.isUndefined = gy, x.isWeakMap = my, x.isWeakSet = vy, x.join = x0, x.kebabCase = sb, x.last = vr, x.lastIndexOf = S0, x.lowerCase = ab, x.lowerFirst = lb, x.lt = yy, x.lte = by, x.max = rx, x.maxBy = nx, x.mean = ix, x.meanBy = ox, x.min = sx, x.minBy = ax, x.stubArray = Ga, x.stubFalse = ja, x.stubObject = Hb, x.stubString = Ub, x.stubTrue = Xb, x.multiply = lx, x.nth = w0, x.noConflict = Wb, x.noop = Va, x.now = Go, x.pad = ub, x.padEnd = cb, x.padStart = fb, x.parseInt = db, x.random = tb, x.reduce = Cv, x.reduceRight = Tv, x.repeat = pb, x.replace = hb, x.result = Yy, x.round = ux, x.runInContext = $, x.sample = Iv, x.size = Av, x.snakeCase = gb, x.some = Pv, x.sortedIndex = O0, x.sortedIndexBy = z0, x.sortedIndexOf = A0, x.sortedLastIndex = P0, x.sortedLastIndexBy = R0, x.sortedLastIndexOf = $0, x.startCase = vb, x.startsWith = yb, x.subtract = cx, x.sum = fx, x.sumBy = dx, x.template = bb, x.times = qb, x.toFinite = qr, x.toInteger = Me, x.toLength = sf, x.toLower = xb, x.toNumber = yr, x.toSafeInteger = xy, x.toString = Ge, x.toUpper = Sb, x.trim = wb, x.trimEnd = _b, x.trimStart = Eb, x.truncate = Cb, x.unescape = Tb, x.uniqueId = Jb, x.upperCase = Mb, x.upperFirst = Wa, x.each = Yc, x.eachRight = Hc, x.first = Fc, Fa(x, function() {
        var t = {};
        return Lr(x, function(i, a) {
          Ve.call(x.prototype, a) || (t[a] = i);
        }), t;
      }(), { chain: !1 }), x.VERSION = o, dr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        x[t].placeholder = x;
      }), dr(["drop", "take"], function(t, i) {
        Le.prototype[t] = function(a) {
          a = a === r ? 1 : It(Me(a), 0);
          var f = this.__filtered__ && !i ? new Le(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = Nt(a, f.__takeCount__) : f.__views__.push({
            size: Nt(a, Z),
            type: t + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, Le.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), dr(["filter", "map", "takeWhile"], function(t, i) {
        var a = i + 1, f = a == D || a == ae;
        Le.prototype[t] = function(v) {
          var _ = this.clone();
          return _.__iteratees__.push({
            iteratee: xe(v, 3),
            type: a
          }), _.__filtered__ = _.__filtered__ || f, _;
        };
      }), dr(["head", "last"], function(t, i) {
        var a = "take" + (i ? "Right" : "");
        Le.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), dr(["initial", "tail"], function(t, i) {
        var a = "drop" + (i ? "" : "Right");
        Le.prototype[t] = function() {
          return this.__filtered__ ? new Le(this) : this[a](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(Jt);
      }, Le.prototype.find = function(t) {
        return this.filter(t).head();
      }, Le.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Le.prototype.invokeMap = Ae(function(t, i) {
        return typeof t == "function" ? new Le(this) : this.map(function(a) {
          return ki(a, t, i);
        });
      }), Le.prototype.reject = function(t) {
        return this.filter(Yo(xe(t)));
      }, Le.prototype.slice = function(t, i) {
        t = Me(t);
        var a = this;
        return a.__filtered__ && (t > 0 || i < 0) ? new Le(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), i !== r && (i = Me(i), a = i < 0 ? a.dropRight(-i) : a.take(i - t)), a);
      }, Le.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(Z);
      }, Lr(Le.prototype, function(t, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), f = /^(?:head|last)$/.test(i), v = x[f ? "take" + (i == "last" ? "Right" : "") : i], _ = f || /^find/.test(i);
        v && (x.prototype[i] = function() {
          var M = this.__wrapped__, A = f ? [1] : arguments, L = M instanceof Le, K = A[0], J = L || Ce(M), re = function(Re) {
            var ke = v.apply(x, an([Re], A));
            return f && ce ? ke[0] : ke;
          };
          J && a && typeof K == "function" && K.length != 1 && (L = J = !1);
          var ce = this.__chain__, me = !!this.__actions__.length, Se = _ && !ce, Oe = L && !me;
          if (!_ && J) {
            M = Oe ? M : new Le(this);
            var we = t.apply(M, A);
            return we.__actions__.push({ func: Fo, args: [re], thisArg: r }), new hr(we, ce);
          }
          return Se && Oe ? t.apply(this, A) : (we = this.thru(re), Se ? f ? we.value()[0] : we.value() : we);
        });
      }), dr(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = po[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
        x.prototype[t] = function() {
          var v = arguments;
          if (f && !this.__chain__) {
            var _ = this.value();
            return i.apply(Ce(_) ? _ : [], v);
          }
          return this[a](function(M) {
            return i.apply(Ce(M) ? M : [], v);
          });
        };
      }), Lr(Le.prototype, function(t, i) {
        var a = x[i];
        if (a) {
          var f = a.name + "";
          Ve.call(Qn, f) || (Qn[f] = []), Qn[f].push({ name: i, func: a });
        }
      }), Qn[$o(r, E).name] = [{
        name: "wrapper",
        func: r
      }], Le.prototype.clone = Tg, Le.prototype.reverse = Mg, Le.prototype.value = Ig, x.prototype.at = nv, x.prototype.chain = iv, x.prototype.commit = ov, x.prototype.next = sv, x.prototype.plant = lv, x.prototype.reverse = uv, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = cv, x.prototype.first = x.prototype.head, Oi && (x.prototype[Oi] = av), x;
    }, Kn = og();
    Cn ? ((Cn.exports = Kn)._ = Kn, Bs._ = Kn) : $t._ = Kn;
  }).call(Gi);
})(ms, ms.exports);
var Dp = ms.exports;
const CE = /* @__PURE__ */ Bd(Dp);
function TE(e) {
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
function ME(e) {
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
function IE(e) {
  const { palette: n, spacing: r } = e;
  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: /* @__PURE__ */ ie.jsx(Wd, { size: 20 })
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
const Tr = (e, n) => {
  switch (n) {
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
function Ln({ color: e, theme: n }) {
  const r = Tr(n, e), { lighter: o, light: s, main: l } = r;
  return {
    borderColor: mt(s, 0.5),
    backgroundColor: o,
    "& .MuiAlert-icon": {
      color: l
    }
  };
}
function OE(e) {
  const n = Ln({ color: "primary", theme: e });
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
          ...n,
          "&.MuiAlert-borderPrimary": Ln({
            color: "primary",
            theme: e
          }),
          "&.MuiAlert-borderSecondary": Ln({
            color: "secondary",
            theme: e
          }),
          "&.MuiAlert-borderError": Ln({ color: "error", theme: e }),
          "&.MuiAlert-borderSuccess": Ln({
            color: "success",
            theme: e
          }),
          "&.MuiAlert-borderInfo": Ln({ color: "info", theme: e }),
          "&.MuiAlert-borderWarning": Ln({
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
function zE() {
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
function AE() {
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
function kn({ color: e, theme: n }) {
  const r = Tr(n, e), { lighter: o, main: s } = r;
  return {
    color: s,
    backgroundColor: o
  };
}
function PE(e) {
  const n = kn({ color: "primary", theme: e });
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
          ...n,
          "&.MuiBadge-colorPrimary": kn({ color: "primary", theme: e }),
          "&.MuiBadge-colorSecondary": kn({
            color: "secondary",
            theme: e
          }),
          "&.MuiBadge-colorError": kn({ color: "error", theme: e }),
          "&.MuiBadge-colorInfo": kn({ color: "info", theme: e }),
          "&.MuiBadge-colorSuccess": kn({ color: "success", theme: e }),
          "&.MuiBadge-colorWarning": kn({ color: "warning", theme: e })
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
const Hl = (e, n) => {
  switch (n) {
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
function De({ variant: e, color: n, theme: r }) {
  const o = Tr(r, n);
  let { lighter: s, main: l, dark: u, contrastText: p } = o;
  n === "secondary" && (s = r.palette.background.lightGrey || s, l = r.palette.grey.main, u = r.palette.grey.darker, p = "#fff");
  const c = `${n}Button`, h = Hl(r, c), y = {
    "&::after": {
      boxShadow: `0 0 5px 5px ${mt(l, 0.9)}`
    },
    "&:active::after": {
      boxShadow: `0 0 0 0 ${mt(l, 0.9)}`
    },
    "&:focus-visible": {
      outline: `2px solid ${u}`,
      outlineOffset: 2
    }
  };
  switch (e) {
    case "contained":
      return {
        "&:hover": {
          backgroundColor: u
        },
        ...y
      };
    case "shadow":
      return {
        color: p,
        backgroundColor: l,
        boxShadow: h,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: u
        },
        ...y
      };
    case "outlined":
      return {
        color: n === "secondary" ? r.palette.grey.main : void 0,
        borderColor: n === "secondary" ? r.palette.border.main : l,
        backgroundColor: n === "secondary" ? r.palette.common.white : "transparent",
        "& svg": {
          color: "currentColor",
          strokeWidth: 2,
          transition: "color 0.5s"
        },
        "&:hover": {
          color: n === "secondary" ? r.palette.grey.dark : u,
          backgroundColor: n === "secondary" ? r.palette.background.lightGrey : "transparent",
          borderColor: n === "secondary" ? r.palette.grey.dark : u,
          "& svg": {
            color: "currentColor"
          }
        },
        "&.Mui-disabled": {
          border: `1px solid ${s}`,
          color: s
        },
        ...y
      };
    case "dashed":
      return {
        color: l,
        borderColor: l,
        backgroundColor: s,
        "&:hover": {
          color: u,
          borderColor: u
        },
        ...y
      };
    case "text":
      return {
        color: n === "secondary" ? r.palette.grey.main : void 0,
        "&:hover": {
          color: u,
          backgroundColor: s
        },
        ...y
      };
  }
}
function RE(e) {
  const n = De({
    variant: "dashed",
    color: "primary",
    theme: e
  }), r = De({
    variant: "shadow",
    color: "primary",
    theme: e
  }), o = (l) => {
    var u;
    return {
      "&.Mui-disabled": {
        backgroundColor: (u = Tr(e, l)) == null ? void 0 : u.lighter,
        color: e.palette.common.white
      }
    };
  }, s = {
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
        contained: ({ ownerState: l }) => ({
          ...o(l == null ? void 0 : l.color)
        }),
        outlined: ({ ownerState: l }) => ({
          ...De({
            variant: "outlined",
            color: l == null ? void 0 : l.color,
            theme: e
          })
        }),
        text: ({ ownerState: l }) => ({
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          },
          ...(l == null ? void 0 : l.color) === "secondary" && {
            "&.Mui-disabled": {
              color: e.palette.grey.lighter
            }
          }
        }),
        greyLight: ({ ownerState: l }) => ({
          ...De({ variant: "greyLight", color: "secondary", theme: e }),
          // ...getDisabledStyle(ownerState?.color),
          "&.Mui-disabled": {
            color: e.palette.grey.lighter,
            backgroundColor: e.palette.background.lightGrey
          }
        }),
        endIcon: {
          ...s
        },
        startIcon: {
          ...s
        },
        dashed: {
          border: "1px dashed",
          ...n,
          "&.MuiButton-dashedPrimary": De({
            variant: "dashed",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-dashedSecondary": De({
            variant: "dashed",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-dashedError": De({
            variant: "dashed",
            color: "error",
            theme: e
          }),
          "&.MuiButton-dashedSuccess": De({
            variant: "dashed",
            color: "success",
            theme: e
          }),
          "&.MuiButton-dashedInfo": De({
            variant: "dashed",
            color: "info",
            theme: e
          }),
          "&.MuiButton-dashedWarning": De({
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
          "&.MuiButton-shadowPrimary": De({
            variant: "shadow",
            color: "primary",
            theme: e
          }),
          "&.MuiButton-shadowSecondary": De({
            variant: "shadow",
            color: "secondary",
            theme: e
          }),
          "&.MuiButton-shadowError": De({
            variant: "shadow",
            color: "error",
            theme: e
          }),
          "&.MuiButton-shadowSuccess": De({
            variant: "shadow",
            color: "success",
            theme: e
          }),
          "&.MuiButton-shadowInfo": De({
            variant: "shadow",
            color: "info",
            theme: e
          }),
          "&.MuiButton-shadowWarning": De({
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
        containedPrimary: De({
          variant: "contained",
          color: "primary",
          theme: e
        }),
        containedSecondary: De({
          variant: "contained",
          color: "secondary",
          theme: e
        }),
        containedError: De({
          variant: "contained",
          color: "error",
          theme: e
        }),
        containedSuccess: De({
          variant: "contained",
          color: "success",
          theme: e
        }),
        containedInfo: De({
          variant: "contained",
          color: "info",
          theme: e
        }),
        containedWarning: De({
          variant: "contained",
          color: "warning",
          theme: e
        }),
        outlinedPrimary: De({
          variant: "outlined",
          color: "primary",
          theme: e
        }),
        outlinedSecondary: De({
          variant: "outlined",
          color: "secondary",
          theme: e
        }),
        outlinedError: De({
          variant: "outlined",
          color: "error",
          theme: e
        }),
        outlinedSuccess: De({
          variant: "outlined",
          color: "success",
          theme: e
        }),
        outlinedInfo: De({
          variant: "outlined",
          color: "info",
          theme: e
        }),
        outlinedWarning: De({
          variant: "outlined",
          color: "warning",
          theme: e
        }),
        textPrimary: De({
          variant: "text",
          color: "primary",
          theme: e
        }),
        textSecondary: De({
          variant: "text",
          color: "secondary",
          theme: e
        }),
        textError: De({ variant: "text", color: "error", theme: e }),
        textSuccess: De({
          variant: "text",
          color: "success",
          theme: e
        }),
        textInfo: De({ variant: "text", color: "info", theme: e }),
        textWarning: De({
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
        ..._i == null ? void 0 : _i.map((l) => {
          const { darker: u, dark: p, main: c, light: h, lighter: y } = e.palette[l];
          return {
            props: { variant: "light", color: l },
            style: {
              color: c,
              backgroundColor: y,
              "&:hover": {
                color: p,
                backgroundColor: h
              },
              "&:active": {
                color: u,
                backgroundColor: c
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
function $E() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function LE() {
  return {
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function kE() {
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
function pi({ color: e, theme: n }) {
  const r = Tr(n, e), { lighter: o, main: s, dark: l } = r;
  return {
    "&:hover": {
      backgroundColor: "transparent",
      "& .icon": {
        borderColor: s
      }
    },
    "&.Mui-focusVisible": {
      outline: `2px solid ${l}`,
      outlineOffset: -4
    }
  };
}
function DE(e) {
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
function gl(e) {
  const n = DE(e);
  return {
    "& .icon": {
      width: n.size,
      height: n.size,
      "& .filled": {
        fontSize: `${n.fontSize}rem`,
        top: -n.position,
        left: -n.position
      }
    }
  };
}
function WE(e) {
  const { palette: n } = e;
  return {
    MuiCheckbox: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ ie.jsx(
          Ht,
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
                borderColor: n.secondary.main
              }
            }
          }
        ),
        checkedIcon: /* @__PURE__ */ ie.jsx(
          Ht,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: 0.5,
              bgcolor: n.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                borderColor: n.secondary.main
              }
            },
            children: /* @__PURE__ */ ie.jsx(
              Ax,
              {
                width: "0.75rem",
                height: "0.75rem",
                color: n.common.white
              }
            )
          }
        ),
        indeterminateIcon: /* @__PURE__ */ ie.jsx(
          Ht,
          {
            className: "icon",
            sx: {
              width: 16,
              height: 16,
              border: "1px solid",
              borderColor: "inherit",
              borderRadius: 0.5,
              bgcolor: n.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                borderColor: n.secondary.main
              }
            },
            children: /* @__PURE__ */ ie.jsx(
              zx,
              {
                width: "0.75rem",
                height: "0.75rem",
                color: n.common.white
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
          color: n.text.secondary,
          "&.size-small": {
            ...gl("small")
          },
          "&.size-medium": {
            ...gl("medium")
          },
          "&.size-large": {
            ...gl("large")
          }
        },
        colorPrimary: pi({ color: "primary", theme: e }),
        colorSecondary: pi({ color: "secondary", theme: e }),
        colorSuccess: pi({ color: "success", theme: e }),
        colorWarning: pi({ color: "warning", theme: e }),
        colorInfo: pi({ color: "info", theme: e }),
        colorError: pi({ color: "error", theme: e })
      }
    }
  };
}
function hi({ color: e, theme: n }) {
  const r = Tr(n, e), { dark: o } = r;
  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${o}`,
      outlineOffset: 2
    }
  };
}
function or({ color: e, theme: n }) {
  const r = Tr(n, e), { light: o, lighter: s, main: l } = r;
  return {
    color: l,
    backgroundColor: s,
    borderColor: o,
    "& .MuiChip-deleteIcon": {
      color: l,
      "&:hover": {
        color: o
      }
    }
  };
}
function NE(e) {
  const n = or({ color: "secondary", theme: e });
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
          "&.MuiChip-colorPrimary": hi({ color: "primary", theme: e }),
          "&.MuiChip-colorSecondary": hi({ color: "secondary", theme: e }),
          "&.MuiChip-colorError": hi({ color: "error", theme: e }),
          "&.MuiChip-colorInfo": hi({ color: "info", theme: e }),
          "&.MuiChip-colorSuccess": hi({ color: "success", theme: e }),
          "&.MuiChip-colorWarning": hi({ color: "warning", theme: e })
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
          ...n,
          "&.MuiChip-lightPrimary": or({ color: "primary", theme: e }),
          "&.MuiChip-lightSecondary": or({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-lightError": or({ color: "error", theme: e }),
          "&.MuiChip-lightInfo": or({ color: "info", theme: e }),
          "&.MuiChip-lightSuccess": or({ color: "success", theme: e }),
          "&.MuiChip-lightWarning": or({ color: "warning", theme: e })
        },
        combined: {
          border: "1px solid",
          ...n,
          "&.MuiChip-combinedPrimary": or({
            color: "primary",
            theme: e
          }),
          "&.MuiChip-combinedSecondary": or({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-combinedError": or({ color: "error", theme: e }),
          "&.MuiChip-combinedInfo": or({ color: "info", theme: e }),
          "&.MuiChip-combinedSuccess": or({
            color: "success",
            theme: e
          }),
          "&.MuiChip-combinedWarning": or({
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
function BE() {
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
function FE(e) {
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
function VE() {
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
function GE(e) {
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
function gi({ color: e, theme: n }) {
  const r = Tr(n, e), { main: o, dark: s, contrastText: l } = r, u = `${e}Button`, p = Hl(n, u);
  return {
    color: l,
    backgroundColor: o,
    boxShadow: p,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: s
    },
    "&:focus-visible": {
      outline: `2px solid ${s}`,
      outlineOffset: 2
    },
    "&::after": {
      borderRadius: "50px",
      boxShadow: `0 0 5px 5px ${mt(o, 0.9)}`
    },
    "&:active::after": {
      borderRadius: "50px",
      boxShadow: `0 0 0 0 ${mt(o, 0.9)}`
    }
  };
}
function jE(e) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          "&.Mui-disabled": {
            backgroundColor: e.palette.grey[200]
          },
          "&.MuiFab-primary": gi({ color: "primary", theme: e }),
          "&.MuiFab-secondary": gi({ color: "secondary", theme: e }),
          "&.Mui-error": gi({ color: "error", theme: e }),
          "&.MuiFab-success": gi({ color: "success", theme: e }),
          "&.MuiFab-info": gi({ color: "info", theme: e }),
          "&.MuiFab-warning": gi({ color: "warning", theme: e }),
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
function YE(e) {
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
function HE(e) {
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
function UE(e) {
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
function XE(e) {
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
function qE() {
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
function KE() {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover"
      }
    }
  };
}
function JE(e) {
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
function ZE(e) {
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
function QE(e) {
  const n = _i == null ? void 0 : _i.reduce((r, o) => {
    const { darker: s, dark: l, main: u, light: p, lighter: c } = e.palette[o];
    return r.push({
      props: { color: o },
      style: {
        "& .MuiLoadingButton-loadingIndicator": {
          color: u
        }
      }
    }), ["text", "light"].forEach((h) => {
      r.push({
        props: { color: o, variant: h, loading: !0 },
        style: {
          background: c
        }
      });
    }), ["contained"].forEach((h) => {
      r.push({
        props: { color: o, variant: h, loading: !0 },
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
        ...n,
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
function Dn({ variant: e, theme: n }) {
  const r = Tr(n, e), { light: o } = r;
  return Hl(n, `${e}`), {
    "& .MuiOutlinedInput-notchedOutline": {
      transition: "border-color 0.1s ease-in-out",
      borderColor: n.palette.border.main
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: e === "error" ? n.palette.error.main : n.palette.border.dark
    },
    "&.Mui-focused": {
      // boxShadow: shadows,
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${e === "error" ? n.palette.error.main : n.palette.border.dark}`
      }
    }
  };
}
function eC(e) {
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
          ...Dn({ variant: "primary", theme: e }),
          "&.Mui-error": {
            ...Dn({ variant: "error", theme: e })
          }
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px"
        },
        inputMultiline: {
          padding: 0
        },
        colorSecondary: Dn({ variant: "secondary", theme: e }),
        colorError: Dn({ variant: "error", theme: e }),
        colorWarning: Dn({ variant: "warning", theme: e }),
        colorInfo: Dn({ variant: "info", theme: e }),
        colorSuccess: Dn({ variant: "success", theme: e })
      }
    }
  };
}
function tC() {
  return {
    MuiPagination: {
      defaultProps: {
        shape: "rounded"
      }
    }
  };
}
function lt({ variant: e, color: n, theme: r }) {
  const o = Tr(r, n), { lighter: s, light: l, dark: u, main: p, contrastText: c } = o, h = {
    "&:focus-visible": {
      outline: `2px solid ${u}`,
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
        color: c,
        backgroundColor: p,
        "&:hover": {
          backgroundColor: l
        },
        ...h
      };
    case "outlined":
      return {
        borderColor: p,
        "&:hover": {
          backgroundColor: s,
          borderColor: l
        },
        ...h
      };
    case "text":
    default:
      return {
        color: p,
        "&:hover": {
          backgroundColor: p,
          color: s
        },
        ...h
      };
  }
}
function rC(e) {
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
            "&.MuiPaginationItem-textPrimary": lt({
              variant: "text",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-textSecondary": lt({
              variant: "text",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-textError": lt({
              variant: "text",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-textSuccess": lt({
              variant: "text",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-textInfo": lt({
              variant: "text",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-textWarning": lt({
              variant: "text",
              color: "warning",
              theme: e
            })
          }
        },
        contained: {
          "&.Mui-selected": {
            "&.MuiPaginationItem-containedPrimary": lt({
              variant: "contained",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-containedSecondary": lt({
              variant: "contained",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-containedError": lt({
              variant: "contained",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-containedSuccess": lt({
              variant: "contained",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-containedInfo": lt({
              variant: "contained",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-containedWarning": lt({
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
            "&.MuiPaginationItem-combinedPrimary": lt({
              variant: "combined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSecondary": lt({
              variant: "combined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedError": lt({
              variant: "combined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSuccess": lt({
              variant: "combined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-combinedInfo": lt({
              variant: "combined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-combinedWarning": lt({
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
            "&.MuiPaginationItem-outlinedPrimary": lt({
              variant: "outlined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSecondary": lt({
              variant: "outlined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedError": lt({
              variant: "outlined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSuccess": lt({
              variant: "outlined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedInfo": lt({
              variant: "outlined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedWarning": lt({
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
function nC(e) {
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
function mi({ color: e, theme: n }) {
  const r = Tr(n, e), { lighter: o, main: s, dark: l } = r;
  return {
    "& .dot": {
      backgroundColor: s
    },
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&.Mui-focusVisible": {
      outline: `2px solid ${l}`,
      outlineOffset: -4
    }
  };
}
function iC(e) {
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
function ml(e) {
  const n = iC(e);
  return {
    "& .icon": {
      width: n.size,
      height: n.size,
      "& .dot": {
        width: n.dotSize,
        height: n.dotSize,
        top: n.position,
        left: n.position
      }
    }
  };
}
function oC(e) {
  const { palette: n } = e;
  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small",
        icon: /* @__PURE__ */ ie.jsx(
          Ht,
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
        checkedIcon: /* @__PURE__ */ ie.jsx(
          Ht,
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
            children: /* @__PURE__ */ ie.jsx(
              Ht,
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
          color: n.secondary[300],
          "&.size-small": {
            ...ml("small")
          },
          "&.size-medium": {
            ...ml("medium")
          },
          "&.size-large": {
            ...ml("large")
          }
        },
        colorPrimary: mi({ color: "primary", theme: e }),
        colorSecondary: mi({ color: "secondary", theme: e }),
        colorSuccess: mi({ color: "success", theme: e }),
        colorWarning: mi({ color: "warning", theme: e }),
        colorInfo: mi({ color: "info", theme: e }),
        colorError: mi({ color: "error", theme: e })
      }
    }
  };
}
function sC(e) {
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
function vi({ color: e, theme: n }) {
  const r = Tr(n, e), { main: o } = r;
  return {
    border: `2px solid ${o}`
  };
}
function aC(e) {
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
          "&.MuiSlider-thumbColorPrimary": vi({
            color: "primary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSecondary": vi({
            color: "secondary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSuccess": vi({
            color: "success",
            theme: e
          }),
          "&.MuiSlider-thumbColorWarning": vi({
            color: "warning",
            theme: e
          }),
          "&.MuiSlider-thumbColorInfo": vi({ color: "info", theme: e }),
          "&.MuiSlider-thumbColorError": vi({
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
function lC(e) {
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
function vl(e, n) {
  const r = lC(n);
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
function uC(e) {
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
          ...vl(e, "medium")
        },
        sizeLarge: { ...vl(e, "large") },
        sizeSmall: {
          ...vl(e, "small")
        }
      }
    }
  };
}
function cC(e) {
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
function fC(e) {
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
function dC(e) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
function pC(e) {
  const n = {
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
          ...n
        },
        footer: {
          fontSize: "0.75rem",
          textTransform: "uppercase",
          ...n
        }
      }
    }
  };
}
function hC(e) {
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
function gC(e) {
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
function mC() {
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
function vC() {
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
function yC() {
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
function bC(e) {
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
function xC(e) {
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
function SC() {
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
function wC() {
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
function _C(e) {
  return Dp.merge(
    TE(e),
    ME(e),
    IE(e),
    OE(e),
    zE(),
    AE(),
    PE(e),
    RE(e),
    $E(),
    LE(),
    kE(),
    WE(e),
    NE(e),
    YE(e),
    BE(),
    FE(e),
    VE(),
    GE(e),
    jE(e),
    HE(),
    UE(e),
    XE(e),
    qE(),
    KE(),
    JE(e),
    ZE(),
    QE(e),
    eC(e),
    tC(),
    rC(e),
    nC(e),
    oC(e),
    sC(e),
    aC(e),
    uC(e),
    cC(e),
    dC(),
    pC(e),
    hC(e),
    gC(e),
    mC(),
    vC(),
    yC(),
    bC(e),
    xC(e),
    SC(),
    wC(),
    fC()
  );
}
const EC = (e) => {
  var c, h, y, m, w, d, g, S, I, E, C, T, R, z, j, W, P, N, k, B, b, V, D, Q, ae, fe, ee, be, Y, Z, de, pe, F, q, X, le, te, se, ue, ve, oe, Te, ze, qe, xt, it, Et, et, St, Ze, ft, Vt, Zt, Ot, At, Pt, wt, cr, tt, Be, Wt, Ct, _t, $r, tn, rn, nn, Sn, Mr, Nr, Br, wn, Fn, _n, Vn, on, En, Gn, jn;
  let n = [
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
  ], r = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"], o = ["#fafafb", "#e6ebf1"];
  const s = [...n, ...r, ...o], l = {
    0: s[0],
    50: s[1],
    100: s[2],
    200: s[3],
    300: s[4],
    400: s[5],
    500: s[6],
    600: s[7],
    700: s[8],
    800: s[9],
    900: s[10],
    A50: s[15],
    A100: s[11],
    A200: s[12],
    A400: s[13],
    A700: s[14],
    A800: s[16],
    lighter: ((c = e == null ? void 0 : e.colors.grey) == null ? void 0 : c.lighter) || "#bebebe",
    light: ((h = e == null ? void 0 : e.colors.grey) == null ? void 0 : h.light) || "#a9a9a9",
    main: ((m = (y = e == null ? void 0 : e.colors) == null ? void 0 : y.grey) == null ? void 0 : m.main) || "#7f7f7f",
    dark: ((d = (w = e == null ? void 0 : e.colors) == null ? void 0 : w.grey) == null ? void 0 : d.dark) || "#6a6a6a",
    darker: ((S = (g = e == null ? void 0 : e.colors) == null ? void 0 : g.grey) == null ? void 0 : S.darker) || "#3f3f3f"
  }, u = "#fff", p = "#000";
  return {
    primary: {
      lighter: ((E = (I = e == null ? void 0 : e.colors) == null ? void 0 : I.primary) == null ? void 0 : E.lighter) || "#cce1fe",
      light: ((T = (C = e == null ? void 0 : e.colors) == null ? void 0 : C.primary) == null ? void 0 : T.light) || "#b3d2fe",
      main: ((z = (R = e == null ? void 0 : e.colors) == null ? void 0 : R.primary) == null ? void 0 : z.main) || "#0168fa",
      dark: ((W = (j = e == null ? void 0 : e.colors) == null ? void 0 : j.primary) == null ? void 0 : W.dark) || "#0158d5",
      darker: ((N = (P = e == null ? void 0 : e.colors) == null ? void 0 : P.primary) == null ? void 0 : N.darker) || "#0153c8",
      contrastText: ((B = (k = e == null ? void 0 : e.colors) == null ? void 0 : k.primary) == null ? void 0 : B.contrastText) || u,
      disableColor: u
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
      lighter: ((V = (b = e == null ? void 0 : e.colors) == null ? void 0 : b.background) == null ? void 0 : V.softGrey) || "#bebebe",
      // item hover
      light: ((D = e == null ? void 0 : e.colors) == null ? void 0 : D.grey.lighter) || "#a9a9a9",
      // item active
      main: ((ae = (Q = e == null ? void 0 : e.colors) == null ? void 0 : Q.grey) == null ? void 0 : ae.main) || "#7f7f7f",
      dark: ((ee = (fe = e == null ? void 0 : e.colors) == null ? void 0 : fe.grey) == null ? void 0 : ee.dark) || "#6a6a6a",
      // icon color
      darker: ((Y = (be = e == null ? void 0 : e.colors) == null ? void 0 : be.grey) == null ? void 0 : Y.darker) || "#3f3f3f",
      contrastText: ((de = (Z = e == null ? void 0 : e.colors) == null ? void 0 : Z.secondary) == null ? void 0 : de.contrastText) || u,
      disableColor: u
    },
    error: {
      lighter: ((F = (pe = e == null ? void 0 : e.colors) == null ? void 0 : pe.error) == null ? void 0 : F.lighter) || "#f8d7da",
      light: ((X = (q = e == null ? void 0 : e.colors) == null ? void 0 : q.error) == null ? void 0 : X.light) || "#f5c2c7",
      main: ((te = (le = e == null ? void 0 : e.colors) == null ? void 0 : le.error) == null ? void 0 : te.main) || "#dc3545",
      dark: ((ue = (se = e == null ? void 0 : e.colors) == null ? void 0 : se.error) == null ? void 0 : ue.dark) || "#bb2d3b",
      darker: ((oe = (ve = e == null ? void 0 : e.colors) == null ? void 0 : ve.error) == null ? void 0 : oe.darker) || "#b02a37",
      contrastText: u,
      disableColor: u
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
      contrastText: u,
      disableColor: p
    },
    info: {
      lighter: ((ze = (Te = e == null ? void 0 : e.colors) == null ? void 0 : Te.info) == null ? void 0 : ze.lighter) || "#ccf1f6",
      light: ((xt = (qe = e == null ? void 0 : e.colors) == null ? void 0 : qe.info) == null ? void 0 : xt.light) || "#b3eaf2",
      main: ((Et = (it = e == null ? void 0 : e.colors) == null ? void 0 : it.info) == null ? void 0 : Et.main) || "#00b8d4",
      dark: ((St = (et = e == null ? void 0 : e.colors) == null ? void 0 : et.info) == null ? void 0 : St.dark) || "#26c3da",
      darker: ((ft = (Ze = e == null ? void 0 : e.colors) == null ? void 0 : Ze.info) == null ? void 0 : ft.darker) || "#33c6dd",
      contrastText: u,
      disableColor: p
    },
    success: {
      lighter: ((Zt = (Vt = e == null ? void 0 : e.colors) == null ? void 0 : Vt.success) == null ? void 0 : Zt.lighter) || "#cee7d9",
      light: ((At = (Ot = e == null ? void 0 : e.colors) == null ? void 0 : Ot.success) == null ? void 0 : At.light) || "#b6dbc6",
      main: ((wt = (Pt = e == null ? void 0 : e.colors) == null ? void 0 : Pt.success) == null ? void 0 : wt.main) || "#0c8842",
      dark: ((tt = (cr = e == null ? void 0 : e.colors) == null ? void 0 : cr.success) == null ? void 0 : tt.dark) || "#0a7438",
      darker: ((Wt = (Be = e == null ? void 0 : e.colors) == null ? void 0 : Be.success) == null ? void 0 : Wt.darker) || "#0a6d35",
      contrastText: u,
      disableColor: u
    },
    light: {
      lighter: "#eeeff4",
      light: "#e3e7ed",
      main: "#f4f5f8",
      dark: "#cfd0d3",
      darker: "#c3c4c6",
      contrastText: "#000",
      disableColor: p
    },
    dark: {
      lighter: "#97a3b9",
      light: "#8e9bb3",
      main: "#1c273c",
      dark: "#3e4759",
      darker: "#495263",
      contrastText: u,
      disableColor: u
    },
    text: {
      primary: ((_t = (Ct = e == null ? void 0 : e.colors) == null ? void 0 : Ct.text) == null ? void 0 : _t.primary) || "#001737",
      secondary: ((tn = ($r = e == null ? void 0 : e.colors) == null ? void 0 : $r.text) == null ? void 0 : tn.secondary) || "#8392A5",
      disabled: ((nn = (rn = e == null ? void 0 : e.colors) == null ? void 0 : rn.text) == null ? void 0 : nn.disabled) || "#8392A5",
      dark: "#1B2E4B"
    },
    background: {
      paper: ((Mr = (Sn = e == null ? void 0 : e.colors) == null ? void 0 : Sn.background) == null ? void 0 : Mr.paper) || "#fff",
      default: ((Br = (Nr = e == null ? void 0 : e.colors) == null ? void 0 : Nr.background) == null ? void 0 : Br.default) || "#fff",
      card: "#F5F6FA",
      softGrey: (Fn = (wn = e == null ? void 0 : e.colors) == null ? void 0 : wn.background) == null ? void 0 : Fn.softGrey,
      darkGrey: "#ececec",
      lightGrey: (Vn = (_n = e == null ? void 0 : e.colors) == null ? void 0 : _n.background) == null ? void 0 : Vn.lightGrey
    },
    divider: ((on = e == null ? void 0 : e.colors) == null ? void 0 : on.divider) || "#D9D9D9",
    border: {
      light: "#F0F0F0",
      main: (En = e == null ? void 0 : e.colors) == null ? void 0 : En.divider,
      // "D9D9D9"
      dark: "#a1a1a1"
    },
    grey: l,
    header: s[2],
    link: ((jn = (Gn = e == null ? void 0 : e.colors) == null ? void 0 : Gn.primary) == null ? void 0 : jn.main) || "#0168fa"
  };
}, CC = (e) => EC(e), TC = (e) => {
  var r, o;
  const n = CC(e);
  return {
    common: {
      black: "#000",
      white: "#fff"
    },
    ...n,
    action: {
      disabled: (o = (r = e == null ? void 0 : e.colors) == null ? void 0 : r.text) == null ? void 0 : o.secondary
    }
  };
}, MC = (e) => {
  var n, r, o, s, l, u, p, c, h, y, m, w, d, g, S;
  return {
    rowHover: "inset 1px 0 0 rgb(218,220,224),inset -1px 0 0 rgb(218,220,224),0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)",
    popper: "0px 4px 80px 0px #00000033",
    button: "0 2px #0000000b",
    text: "0 -1px 0 rgb(0 0 0 / 12%)",
    z1: `0px 1px 4px ${mt(((n = e == null ? void 0 : e.grey) == null ? void 0 : n[900]) || "#d9d9d9", 0.08)}`,
    primary: `0 0 0 2px ${mt(((r = e == null ? void 0 : e.primary) == null ? void 0 : r.main) || "#d9d9d9", 0.2)}`,
    secondary: `0 0 0 2px ${mt(((o = e == null ? void 0 : e.secondary) == null ? void 0 : o.main) || "#d9d9d9", 0.2)}`,
    error: `0 0 0 2px ${mt(((s = e == null ? void 0 : e.error) == null ? void 0 : s.main) || "#d9d9d9", 0.2)}`,
    warning: `0 0 0 2px ${mt(((l = e == null ? void 0 : e.warning) == null ? void 0 : l.main) || "#d9d9d9", 0.2)}`,
    info: `0 0 0 2px ${mt(((u = e == null ? void 0 : e.info) == null ? void 0 : u.main) || "#d9d9d9", 0.2)}`,
    success: `0 0 0 2px ${mt(((p = e == null ? void 0 : e.success) == null ? void 0 : p.main) || "#d9d9d9", 0.2)}`,
    grey: `0 0 0 2px ${mt(((c = e == null ? void 0 : e.grey) == null ? void 0 : c[500]) || "#d9d9d9", 0.2)}`,
    primaryButton: `0 14px 12px ${mt(((h = e == null ? void 0 : e.primary) == null ? void 0 : h.main) || "#d9d9d9", 0.2)}`,
    secondaryButton: `0 14px 12px ${mt(((y = e == null ? void 0 : e.secondary) == null ? void 0 : y.main) || "#d9d9d9", 0.2)}`,
    errorButton: `0 14px 12px ${mt(((m = e == null ? void 0 : e.error) == null ? void 0 : m.main) || "#d9d9d9", 0.2)}`,
    warningButton: `0 14px 12px ${mt(((w = e == null ? void 0 : e.warning) == null ? void 0 : w.main) || "#d9d9d9", 0.2)}`,
    infoButton: `0 14px 12px ${mt(((d = e == null ? void 0 : e.info) == null ? void 0 : d.main) || "#d9d9d9", 0.2)}`,
    successButton: `0 14px 12px ${mt(((g = e == null ? void 0 : e.success) == null ? void 0 : g.main) || "#d9d9d9", 0.2)}`,
    greyButton: `0 14px 12px ${mt(((S = e == null ? void 0 : e.grey) == null ? void 0 : S[500]) || "#d9d9d9", 0.2)}`,
    // wrapper: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' // old used in new GW
    // wrapper: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)' // used in new GW
    wrapper: "rgba(0, 0, 0, 0.08) 0px 1px 4px"
    // mantis theme. Refer: https://mantisdashboard.io/login
  };
}, IC = (e) => {
  var n, r, o, s, l, u, p, c, h, y, m, w, d, g, S, I, E, C, T, R, z, j, W, P, N, k, B, b, V, D, Q, ae, fe, ee, be, Y, Z, de, pe, F, q, X, le, te, se, ue, ve, oe, Te, ze, qe, xt;
  return {
    htmlFontSize: e != null && e.fontSize ? typeof (e == null ? void 0 : e.fontSize) == "string" ? +((n = e == null ? void 0 : e.fontSize) == null ? void 0 : n.replace("px", "")) : e == null ? void 0 : e.fontSize : 16,
    fontFamily: e != null && e.fontFamily ? `${e == null ? void 0 : e.fontFamily}, NotoSansKR, 'IBM Plex Sans', sans-serif` : "NotoSansKR, 'IBM Plex Sans', sans-serif",
    fontWeightLight: ((r = e == null ? void 0 : e.fontWeight) == null ? void 0 : r.light) ?? 300,
    fontWeightRegular: ((o = e == null ? void 0 : e.fontWeight) == null ? void 0 : o.regular) ?? 400,
    fontWeightMedium: ((s = e == null ? void 0 : e.fontWeight) == null ? void 0 : s.medium) ?? 500,
    fontWeightSemiBold: ((l = e == null ? void 0 : e.fontWeight) == null ? void 0 : l.semibold) ?? 600,
    fontWeightBold: ((u = e == null ? void 0 : e.fontWeight) == null ? void 0 : u.bold) ?? 700,
    h1: {
      fontWeight: ((c = (p = e == null ? void 0 : e.typography) == null ? void 0 : p.h1) == null ? void 0 : c.fontWeight) ?? 600,
      fontSize: ((y = (h = e == null ? void 0 : e.typography) == null ? void 0 : h.h1) == null ? void 0 : y.fontSize) ?? "2.375rem"
    },
    h2: {
      fontWeight: ((w = (m = e == null ? void 0 : e.typography) == null ? void 0 : m.h2) == null ? void 0 : w.fontWeight) ?? 600,
      fontSize: ((g = (d = e == null ? void 0 : e.typography) == null ? void 0 : d.h2) == null ? void 0 : g.fontSize) ?? "1.875rem"
    },
    h3: {
      fontWeight: ((I = (S = e == null ? void 0 : e.typography) == null ? void 0 : S.h3) == null ? void 0 : I.fontWeight) ?? 600,
      fontSize: ((C = (E = e == null ? void 0 : e.typography) == null ? void 0 : E.h3) == null ? void 0 : C.fontSize) ?? "1.313rem"
    },
    h4: {
      fontWeight: ((R = (T = e == null ? void 0 : e.typography) == null ? void 0 : T.h4) == null ? void 0 : R.fontWeight) ?? 600,
      fontSize: ((j = (z = e == null ? void 0 : e.typography) == null ? void 0 : z.h4) == null ? void 0 : j.fontSize) ?? "0.875rem"
    },
    h5: {
      fontWeight: ((P = (W = e == null ? void 0 : e.typography) == null ? void 0 : W.h5) == null ? void 0 : P.fontWeight) ?? 600,
      fontSize: ((k = (N = e == null ? void 0 : e.typography) == null ? void 0 : N.h5) == null ? void 0 : k.fontSize) ?? "0.813rem"
    },
    h6: {
      fontWeight: ((b = (B = e == null ? void 0 : e.typography) == null ? void 0 : B.h6) == null ? void 0 : b.fontWeight) ?? 500,
      fontSize: ((D = (V = e == null ? void 0 : e.typography) == null ? void 0 : V.h6) == null ? void 0 : D.fontSize) ?? "0.625rem"
    },
    caption: {
      fontWeight: ((ae = (Q = e == null ? void 0 : e.typography) == null ? void 0 : Q.caption) == null ? void 0 : ae.fontWeight) ?? 500,
      fontSize: ((ee = (fe = e == null ? void 0 : e.typography) == null ? void 0 : fe.caption) == null ? void 0 : ee.fontSize) ?? "0.75rem"
    },
    body1: {
      fontWeight: ((Y = (be = e == null ? void 0 : e.typography) == null ? void 0 : be.body1) == null ? void 0 : Y.fontWeight) ?? 400,
      fontSize: ((de = (Z = e == null ? void 0 : e.typography) == null ? void 0 : Z.body1) == null ? void 0 : de.fontSize) ?? "0.8125rem"
    },
    body2: {
      fontWeight: ((F = (pe = e == null ? void 0 : e.typography) == null ? void 0 : pe.body2) == null ? void 0 : F.fontWeight) ?? 400,
      fontSize: ((X = (q = e == null ? void 0 : e.typography) == null ? void 0 : q.body2) == null ? void 0 : X.fontSize) ?? "0.75rem"
    },
    subtitle1: {
      fontWeight: ((te = (le = e == null ? void 0 : e.typography) == null ? void 0 : le.subtitle1) == null ? void 0 : te.fontWeight) ?? 600,
      fontSize: ((ue = (se = e == null ? void 0 : e.typography) == null ? void 0 : se.subtitle1) == null ? void 0 : ue.fontSize) ?? "0.875rem"
    },
    subtitle2: {
      fontWeight: ((oe = (ve = e == null ? void 0 : e.typography) == null ? void 0 : ve.subtitle2) == null ? void 0 : oe.fontWeight) ?? 600,
      fontSize: ((ze = (Te = e == null ? void 0 : e.typography) == null ? void 0 : Te.subtitle2) == null ? void 0 : ze.fontSize) ?? "0.75rem"
    },
    overline: {
      lineHeight: ((xt = (qe = e == null ? void 0 : e.typography) == null ? void 0 : qe.overline) == null ? void 0 : xt.lineHeight) ?? 1.66
    },
    button: {
      textTransform: "capitalize"
    }
  };
}, Wp = "Inter", Np = "13px", Bp = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Fp = {
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
}, Vp = {
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
}, OC = {
  fontFamily: Wp,
  fontSize: Np,
  fontWeight: Bp,
  colors: Fp,
  typography: Vp
}, zC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Fp,
  default: OC,
  fontFamily: Wp,
  fontSize: Np,
  fontWeight: Bp,
  typography: Vp
}, Symbol.toStringTag, { value: "Module" })), Gp = "Inter", jp = "13px", Yp = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Hp = {
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
}, Up = {
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
}, AC = {
  fontFamily: Gp,
  fontSize: jp,
  fontWeight: Yp,
  colors: Hp,
  typography: Up
}, PC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Hp,
  default: AC,
  fontFamily: Gp,
  fontSize: jp,
  fontWeight: Yp,
  typography: Up
}, Symbol.toStringTag, { value: "Module" })), Xp = "Inter", qp = "13px", Kp = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, Jp = {
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
}, Zp = {
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
}, RC = {
  fontFamily: Xp,
  fontSize: qp,
  fontWeight: Kp,
  colors: Jp,
  typography: Zp
}, $C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: Jp,
  default: RC,
  fontFamily: Xp,
  fontSize: qp,
  fontWeight: Kp,
  typography: Zp
}, Symbol.toStringTag, { value: "Module" })), Qp = "Inter", eh = "13px", th = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, rh = {
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
}, nh = {
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
}, LC = {
  fontFamily: Qp,
  fontSize: eh,
  fontWeight: th,
  colors: rh,
  typography: nh
}, kC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: rh,
  default: LC,
  fontFamily: Qp,
  fontSize: eh,
  fontWeight: th,
  typography: nh
}, Symbol.toStringTag, { value: "Module" })), ih = "Inter", oh = "13px", sh = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}, ah = {
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
}, lh = {
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
}, DC = {
  fontFamily: ih,
  fontSize: oh,
  fontWeight: sh,
  colors: ah,
  typography: lh
}, WC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colors: ah,
  default: DC,
  fontFamily: ih,
  fontSize: oh,
  fontWeight: sh,
  typography: lh
}, Symbol.toStringTag, { value: "Module" })), $d = /* @__PURE__ */ Object.assign({ "./themeJSON/coffee.json": zC, "./themeJSON/default.json": PC, "./themeJSON/fern.json": $C, "./themeJSON/plum.json": kC, "./themeJSON/steel.json": WC }), Ol = {};
for (const e in $d) {
  const r = e.split("/").pop().slice(0, -5);
  Ol[r] = $d[e];
}
const _i = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info"
], QC = ({ color: e, children: n }) => {
  const r = Ol[e] || Ol.default, o = Ld(() => {
    var u, p, c;
    const s = TC(r), l = kp({
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
      palette: s,
      customShadows: MC(s),
      typography: IC(r),
      border: {
        dark: `1px solid ${(u = s == null ? void 0 : s.border) == null ? void 0 : u.dark}`,
        main: `1px solid ${(p = s == null ? void 0 : s.border) == null ? void 0 : p.main}`,
        light: `1px solid ${(c = s == null ? void 0 : s.border) == null ? void 0 : c.light}`
      }
    });
    return l.components = _C(l), l;
  }, [r]);
  return /* @__PURE__ */ ie.jsx(bx, { injectFirst: !0, children: /* @__PURE__ */ ie.jsxs(EE, { theme: o, children: [
    /* @__PURE__ */ ie.jsx(xx, {}),
    n
  ] }) });
}, NC = (e, n) => {
  const [r, o] = Ft(!1), [s, l] = Ft(window.innerWidth);
  return zl(() => {
    const { current: u } = e;
    u && (() => {
      const c = u.scrollHeight > u.clientHeight;
      o(c), n && n(c);
    })();
  }, [e, s]), _r(() => {
    const u = CE.debounce(() => {
      l(window.innerWidth);
    }, 500);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), r;
}, eT = ({
  children: e,
  sx: n,
  lines: r = 1
}) => {
  const o = nt(null), [s, l] = Ft(!1);
  return NC(o, (u) => l(u)), /* @__PURE__ */ ie.jsx(
    Sx,
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
      disableFocusListener: !s,
      disableHoverListener: !s,
      disableInteractive: !s,
      disableTouchListener: !s,
      children: /* @__PURE__ */ ie.jsx(
        Wn,
        {
          ref: o,
          sx: {
            // ...ellipsisSx,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: r,
            // Điều chỉnh số dòng
            overflow: "hidden",
            ...n
          },
          children: e
        }
      )
    }
  );
};
export {
  HC as C,
  XC as L,
  KC as S,
  QC as T,
  UC as a,
  JC as b,
  ZC as c,
  eT as d,
  qC as i
};

import { useTheme as Ki, Box as Ht, CircularProgress as rs, Typography as Ln, Chip as Fb, OutlinedInput as Gb, Stack as hi, Select as Yb, MenuItem as jb, IconButton as li, Portal as Hb, Backdrop as Ub, StyledEngineProvider as Xb, CssBaseline as qb, Tooltip as Kb } from "@mui/material";
import * as Ie from "react";
import He, { useState as Vt, useRef as et, useCallback as ns, forwardRef as gi, useEffect as Tr, useMemo as $d, useImperativeHandle as Zb, useLayoutEffect as zl, createContext as kd, useContext as Jb } from "react";
import { ChevronUp as Qb, ChevronDown as eS, X as Dd, ChevronLeft as tS, ChevronRight as Bd, ZoomIn as rS, ZoomOut as nS, Download as iS, Minus as oS, Check as sS } from "react-feather";
import { ArrowDropUp as aS, ArrowDropDown as lS } from "@mui/icons-material";
import { Global as uS, ThemeContext as Nd } from "@emotion/react";
import "@emotion/styled";
var Di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sl = { exports: {} }, Bi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function cS() {
  if (Sf) return Bi;
  Sf = 1;
  var e = He, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, c, h) {
    var y, v = {}, E = null, d = null;
    h !== void 0 && (E = "" + h), c.key !== void 0 && (E = "" + c.key), c.ref !== void 0 && (d = c.ref);
    for (y in c) o.call(c, y) && !l.hasOwnProperty(y) && (v[y] = c[y]);
    if (p && p.defaultProps) for (y in c = p.defaultProps, c) v[y] === void 0 && (v[y] = c[y]);
    return { $$typeof: n, type: p, key: E, ref: d, props: v, _owner: s.current };
  }
  return Bi.Fragment = r, Bi.jsx = u, Bi.jsxs = u, Bi;
}
var Ni = {};
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
function fS() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), g = Symbol.iterator, x = "@@iterator";
    function I(O) {
      if (O === null || typeof O != "object")
        return null;
      var ne = g && O[g] || O[x];
      return typeof ne == "function" ? ne : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(O) {
      {
        for (var ne = arguments.length, de = new Array(ne > 1 ? ne - 1 : 0), _e = 1; _e < ne; _e++)
          de[_e - 1] = arguments[_e];
        M("error", O, de);
      }
    }
    function M(O, ne, de) {
      {
        var _e = _.ReactDebugCurrentFrame, Ne = _e.getStackAddendum();
        Ne !== "" && (ne += "%s", de = de.concat([Ne]));
        var Ve = de.map(function(Re) {
          return String(Re);
        });
        Ve.unshift("Warning: " + ne), Function.prototype.apply.call(console[O], console, Ve);
      }
    }
    var R = !1, A = !1, Y = !1, B = !1, P = !1, N;
    N = Symbol.for("react.module.reference");
    function k(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === o || O === l || P || O === s || O === h || O === y || B || O === d || R || A || Y || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === v || O.$$typeof === u || O.$$typeof === p || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === N || O.getModuleId !== void 0));
    }
    function W(O, ne, de) {
      var _e = O.displayName;
      if (_e)
        return _e;
      var Ne = ne.displayName || ne.name || "";
      return Ne !== "" ? de + "(" + Ne + ")" : de;
    }
    function b(O) {
      return O.displayName || "Context";
    }
    function G(O) {
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
            var de = O;
            return b(de._context) + ".Provider";
          case c:
            return W(O, O.render, "ForwardRef");
          case v:
            var _e = O.displayName || null;
            return _e !== null ? _e : G(O.type) || "Memo";
          case E: {
            var Ne = O, Ve = Ne._payload, Re = Ne._init;
            try {
              return G(Re(Ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, ee = 0, ae, pe, te, Ee, U, J, he;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function V() {
      {
        if (ee === 0) {
          ae = console.log, pe = console.info, te = console.warn, Ee = console.error, U = console.group, J = console.groupCollapsed, he = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        ee++;
      }
    }
    function Z() {
      {
        if (ee--, ee === 0) {
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
              value: pe
            }),
            warn: D({}, O, {
              value: te
            }),
            error: D({}, O, {
              value: Ee
            }),
            group: D({}, O, {
              value: U
            }),
            groupCollapsed: D({}, O, {
              value: J
            }),
            groupEnd: D({}, O, {
              value: he
            })
          });
        }
        ee < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = _.ReactCurrentDispatcher, le;
    function re(O, ne, de) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (Ne) {
            var _e = Ne.stack.trim().match(/\n( *(at )?)/);
            le = _e && _e[1] || "";
          }
        return `
` + le + O;
      }
    }
    var se = !1, fe;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new be();
    }
    function oe(O, ne) {
      if (!O || se)
        return "";
      {
        var de = fe.get(O);
        if (de !== void 0)
          return de;
      }
      var _e;
      se = !0;
      var Ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ve;
      Ve = X.current, X.current = null, V();
      try {
        if (ne) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (xt) {
              _e = xt;
            }
            Reflect.construct(O, [], Re);
          } else {
            try {
              Re.call();
            } catch (xt) {
              _e = xt;
            }
            O.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            _e = xt;
          }
          O();
        }
      } catch (xt) {
        if (xt && _e && typeof xt.stack == "string") {
          for (var ze = xt.stack.split(`
`), Ot = _e.stack.split(`
`), lt = ze.length - 1, dt = Ot.length - 1; lt >= 1 && dt >= 0 && ze[lt] !== Ot[dt]; )
            dt--;
          for (; lt >= 1 && dt >= 0; lt--, dt--)
            if (ze[lt] !== Ot[dt]) {
              if (lt !== 1 || dt !== 1)
                do
                  if (lt--, dt--, dt < 0 || ze[lt] !== Ot[dt]) {
                    var Kt = `
` + ze[lt].replace(" at new ", " at ");
                    return O.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", O.displayName)), typeof O == "function" && fe.set(O, Kt), Kt;
                  }
                while (lt >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        se = !1, X.current = Ve, Z(), Error.prepareStackTrace = Ne;
      }
      var Ar = O ? O.displayName || O.name : "", Gr = Ar ? re(Ar) : "";
      return typeof O == "function" && fe.set(O, Gr), Gr;
    }
    function $e(O, ne, de) {
      return oe(O, !1);
    }
    function Be(O) {
      var ne = O.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function ct(O, ne, de) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return oe(O, Be(O));
      if (typeof O == "string")
        return re(O);
      switch (O) {
        case h:
          return re("Suspense");
        case y:
          return re("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return $e(O.render);
          case v:
            return ct(O.type, ne, de);
          case E: {
            var _e = O, Ne = _e._payload, Ve = _e._init;
            try {
              return ct(Ve(Ne), ne, de);
            } catch {
            }
          }
        }
      return "";
    }
    var Ut = Object.prototype.hasOwnProperty, ft = {}, Lt = _.ReactDebugCurrentFrame;
    function st(O) {
      if (O) {
        var ne = O._owner, de = ct(O.type, O._source, ne ? ne.type : null);
        Lt.setExtraStackFrame(de);
      } else
        Lt.setExtraStackFrame(null);
    }
    function Tt(O, ne, de, _e, Ne) {
      {
        var Ve = Function.call.bind(Ut);
        for (var Re in O)
          if (Ve(O, Re)) {
            var ze = void 0;
            try {
              if (typeof O[Re] != "function") {
                var Ot = Error((_e || "React class") + ": " + de + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              ze = O[Re](ne, Re, _e, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (lt) {
              ze = lt;
            }
            ze && !(ze instanceof Error) && (st(Ne), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", de, Re, typeof ze), st(null)), ze instanceof Error && !(ze.message in ft) && (ft[ze.message] = !0, st(Ne), C("Failed %s type: %s", de, ze.message), st(null));
          }
      }
    }
    var rt = Array.isArray;
    function St(O) {
      return rt(O);
    }
    function pr(O) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, de = ne && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return de;
      }
    }
    function kr(O) {
      try {
        return Ft(O), !1;
      } catch {
        return !0;
      }
    }
    function Ft(O) {
      return "" + O;
    }
    function Xt(O) {
      if (kr(O))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(O)), Ft(O);
    }
    var qt = _.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, at;
    function Ze(O) {
      if (Ut.call(O, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function tr(O) {
      if (Ut.call(O, "key")) {
        var ne = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function $t(O, ne) {
      typeof O.ref == "string" && qt.current;
    }
    function It(O, ne) {
      {
        var de = function() {
          Fr || (Fr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Sn(O, ne) {
      {
        var de = function() {
          at || (at = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var mi = function(O, ne, de, _e, Ne, Ve, Re) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: O,
        key: ne,
        ref: de,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: Ve
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function vi(O, ne, de, _e, Ne) {
      {
        var Ve, Re = {}, ze = null, Ot = null;
        de !== void 0 && (Xt(de), ze = "" + de), tr(ne) && (Xt(ne.key), ze = "" + ne.key), Ze(ne) && (Ot = ne.ref, $t(ne, Ne));
        for (Ve in ne)
          Ut.call(ne, Ve) && !Mt.hasOwnProperty(Ve) && (Re[Ve] = ne[Ve]);
        if (O && O.defaultProps) {
          var lt = O.defaultProps;
          for (Ve in lt)
            Re[Ve] === void 0 && (Re[Ve] = lt[Ve]);
        }
        if (ze || Ot) {
          var dt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          ze && It(Re, dt), Ot && Sn(Re, dt);
        }
        return mi(O, ze, Ot, Ne, _e, qt.current, Re);
      }
    }
    var yi = _.ReactCurrentOwner, to = _.ReactDebugCurrentFrame;
    function nn(O) {
      if (O) {
        var ne = O._owner, de = ct(O.type, O._source, ne ? ne.type : null);
        to.setExtraStackFrame(de);
      } else
        to.setExtraStackFrame(null);
    }
    var Dn;
    Dn = !1;
    function Bn(O) {
      return typeof O == "object" && O !== null && O.$$typeof === n;
    }
    function ro() {
      {
        if (yi.current) {
          var O = G(yi.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Is(O) {
      return "";
    }
    var no = {};
    function Os(O) {
      {
        var ne = ro();
        if (!ne) {
          var de = typeof O == "string" ? O : O.displayName || O.name;
          de && (ne = `

Check the top-level render call using <` + de + ">.");
        }
        return ne;
      }
    }
    function bi(O, ne) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var de = Os(ne);
        if (no[de])
          return;
        no[de] = !0;
        var _e = "";
        O && O._owner && O._owner !== yi.current && (_e = " It was passed a child from " + G(O._owner.type) + "."), nn(O), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, _e), nn(null);
      }
    }
    function io(O, ne) {
      {
        if (typeof O != "object")
          return;
        if (St(O))
          for (var de = 0; de < O.length; de++) {
            var _e = O[de];
            Bn(_e) && bi(_e, ne);
          }
        else if (Bn(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Ne = I(O);
          if (typeof Ne == "function" && Ne !== O.entries)
            for (var Ve = Ne.call(O), Re; !(Re = Ve.next()).done; )
              Bn(Re.value) && bi(Re.value, ne);
        }
      }
    }
    function As(O) {
      {
        var ne = O.type;
        if (ne == null || typeof ne == "string")
          return;
        var de;
        if (typeof ne == "function")
          de = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === v))
          de = ne.propTypes;
        else
          return;
        if (de) {
          var _e = G(ne);
          Tt(de, O.props, "prop", _e, O);
        } else if (ne.PropTypes !== void 0 && !Dn) {
          Dn = !0;
          var Ne = G(ne);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ne || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zs(O) {
      {
        for (var ne = Object.keys(O.props), de = 0; de < ne.length; de++) {
          var _e = ne[de];
          if (_e !== "children" && _e !== "key") {
            nn(O), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), nn(null);
            break;
          }
        }
        O.ref !== null && (nn(O), C("Invalid attribute `ref` supplied to `React.Fragment`."), nn(null));
      }
    }
    var Nn = {};
    function oo(O, ne, de, _e, Ne, Ve) {
      {
        var Re = k(O);
        if (!Re) {
          var ze = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = Is();
          Ot ? ze += Ot : ze += ro();
          var lt;
          O === null ? lt = "null" : St(O) ? lt = "array" : O !== void 0 && O.$$typeof === n ? (lt = "<" + (G(O.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof O, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, ze);
        }
        var dt = vi(O, ne, de, Ne, Ve);
        if (dt == null)
          return dt;
        if (Re) {
          var Kt = ne.children;
          if (Kt !== void 0)
            if (_e)
              if (St(Kt)) {
                for (var Ar = 0; Ar < Kt.length; Ar++)
                  io(Kt[Ar], O);
                Object.freeze && Object.freeze(Kt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              io(Kt, O);
        }
        if (Ut.call(ne, "key")) {
          var Gr = G(O), xt = Object.keys(ne).filter(function(ks) {
            return ks !== "key";
          }), xi = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nn[Gr + xi]) {
            var $s = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xi, Gr, $s, Gr), Nn[Gr + xi] = !0;
          }
        }
        return O === o ? zs(dt) : As(dt), dt;
      }
    }
    function Si(O, ne, de) {
      return oo(O, ne, de, !0);
    }
    function Ps(O, ne, de) {
      return oo(O, ne, de, !1);
    }
    var Rs = Ps, Ls = Si;
    Ni.Fragment = o, Ni.jsx = Rs, Ni.jsxs = Ls;
  }()), Ni;
}
process.env.NODE_ENV === "production" ? Sl.exports = cS() : Sl.exports = fS();
var ie = Sl.exports;
const cC = (e) => {
  const { sx: n, value: r, variant: o = "determinate" } = e, s = Ki();
  return /* @__PURE__ */ ie.jsxs(Ht, { sx: { position: "relative", width: "fit-content", ...n, height: 60 }, children: [
    /* @__PURE__ */ ie.jsx(
      rs,
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
      rs,
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
      Ln,
      {
        variant: "caption",
        component: "div",
        sx: { color: "text.secondary", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
        children: `${Math.round(r)}%`
      }
    )
  ] });
}, dS = "groupware-table-counter", fC = (e) => {
  const { label: n, color: r = "primary", size: o = "small", fontSize: s } = e, l = Ki();
  return /* @__PURE__ */ ie.jsx(
    Fb,
    {
      className: dS,
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
}, wf = {
  small: 28,
  medium: 40
}, dC = (e) => {
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
          rs,
          {
            size: o,
            style: { width: wf[o], height: wf[o] }
          }
        ),
        s && /* @__PURE__ */ ie.jsx(
          Ln,
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
}, Ef = (e) => {
  const {
    onLongPress: n,
    onClick: r,
    onClear: o,
    options: { shouldPreventDefault: s, delay: l, clearOnMouseLeave: u } = {
      shouldPreventDefault: !0,
      delay: 300,
      clearOnMouseLeave: !1
    }
  } = e, [p, c] = Vt(!1), h = et(), y = et(), v = ns(
    (d) => {
      s && d.target && (d.target.addEventListener("touchend", _f, {
        passive: !1
      }), y.current = d.target), h.current = setTimeout(() => {
        n(d), c(!0);
      }, l);
    },
    [n, l, s]
  ), E = ns(
    (d, g = !0) => {
      h.current && clearTimeout(h.current), g && !p && r(), o(), c(!1), s && y.current && y.current.removeEventListener("touchend", _f);
    },
    [s, r, p]
  );
  return {
    onMouseDown: (d) => v(d),
    onTouchStart: (d) => v(d),
    onMouseUp: (d) => E(d),
    onMouseLeave: (d) => E(d, !1),
    onTouchEnd: (d) => E(d)
  };
}, _f = (e) => {
  if (!("touches" in e)) return;
  const n = e == null ? void 0 : e.touches;
  (n == null ? void 0 : n.length) < 2 && e.preventDefault && e.preventDefault();
}, pS = (e, n) => {
  const {
    value: r,
    onChange: o,
    min: s = 0,
    max: l = 999999999999999,
    endAdornment: u,
    sx: p
  } = e, c = Ki(), h = Ie.useRef({
    interval: null,
    value: 0
  }), [y, v] = Vt(r);
  Ie.useEffect(() => {
    v(r && typeof r == "number" ? r : 0);
  }, [r]);
  const E = (_) => {
    o(_), v(_);
  }, d = (_) => {
    v((C) => {
      const M = Number(C);
      return console.log("🚀 ~ nVal:", M), M && !isNaN(M) || M === 0 ? l && M < l ? (h.current.value = M + 1, _ && _(M + 1), M + 1) : (h.current.value = l, _ && _(l), l) : (h.current.value = 1, _ && _(1), 1);
    });
  }, g = (_) => {
    v((C) => {
      const M = Number(C);
      return M && !isNaN(M) || M === 0 && s < M ? (h.current.value = M - 1, _ && _(M - 1), M - 1) : (h.current.value = s, _ && _(s), s);
    });
  }, x = Ef({
    onClear: () => {
      var _, C, M;
      (_ = h.current) != null && _.interval && (clearInterval((C = h.current) == null ? void 0 : C.interval), E((M = h.current) == null ? void 0 : M.value), h.current.interval = null);
    },
    onClick: () => d((_) => o(_)),
    onLongPress: () => {
      d(), h.current.interval = setInterval(d, 50);
    }
  }), I = Ef({
    onClear: () => {
      var _, C, M;
      (_ = h.current) != null && _.interval && (clearInterval((C = h.current) == null ? void 0 : C.interval), E((M = h.current) == null ? void 0 : M.value), h.current.interval = null);
    },
    onClick: () => g((_) => o(_)),
    onLongPress: () => {
      g(), h.current.interval = setInterval(g, 50);
    }
  });
  return /* @__PURE__ */ ie.jsx(
    Gb,
    {
      value: y,
      onChange: (_) => {
        var M;
        const C = Number((M = _ == null ? void 0 : _.target) == null ? void 0 : M.value);
        (C && !isNaN(C) || C === 0) && (s > C ? E(s) : l && C > l || E(C));
      },
      endAdornment: /* @__PURE__ */ ie.jsxs(hi, { direction: "row", alignItems: "center", spacing: 1, children: [
        u,
        /* @__PURE__ */ ie.jsxs(hi, { children: [
          /* @__PURE__ */ ie.jsx(
            Ht,
            {
              ...x,
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
              children: /* @__PURE__ */ ie.jsx(Qb, { size: 12, style: { margin: "auto", flexShrink: 0 } })
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
                eS,
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
}, pC = gi(pS), hC = (e) => {
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
    fieldValue: v = "value",
    MenuProps: E = {},
    isLoading: d = !1,
    disabled: g = !1,
    fullWidth: x = !0,
    variant: I = "outlined",
    closeOnSelect: _ = !1
  } = e, C = Ki(), [M, R] = Vt(""), [A, Y] = Vt(!1);
  Tr(() => {
    R(n ? n == null ? void 0 : n[v] : "");
  }, [n]);
  const B = (N) => {
    R(N);
    const k = o.find((W) => (W == null ? void 0 : W[v]) === N);
    r && r(k), _ && Y(!1);
  }, P = (N) => {
    N == null || N.stopPropagation(), R(""), r && r(null);
  };
  return /* @__PURE__ */ ie.jsx(
    Yb,
    {
      variant: I,
      disabled: g,
      fullWidth: x,
      displayEmpty: !0,
      inputProps: { "aria-label": "select" },
      size: s,
      value: M,
      open: A,
      onOpen: () => {
        Y(!0);
      },
      onClose: () => {
        Y(!1);
      },
      MenuProps: {
        disablePortal: p,
        // If you use ClickAwayListener and don't have this option(true), It will run event of onClickAway
        PaperProps: {
          style: {
            maxHeight: "30vh"
          }
        },
        ...E
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
          display: c && M || d ? "none" : ""
        },
        "& .MuiSelect-icon": { display: "none" },
        "&.Mui-focused .MuiIconButton-root": { color: "primary.main" }
      },
      renderValue: (N) => {
        const k = o.find((W) => (W == null ? void 0 : W[v]) === N);
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
                Ln,
                {
                  sx: { minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" },
                  children: k == null ? void 0 : k[y]
                }
              ),
              u && (k == null ? void 0 : k.endIcon) && (typeof (k == null ? void 0 : k.endIcon) == "function" || typeof (k == null ? void 0 : k.endIcon) == "object") && /* @__PURE__ */ ie.jsx(k.endIcon, { ...k == null ? void 0 : k.endIconProps })
            ]
          }
        ) : /* @__PURE__ */ ie.jsx(
          Ln,
          {
            color: "text.secondary",
            variant: "h5",
            fontWeight: C.typography.fontWeightRegular,
            children: "placeholder"
          }
        );
      },
      endAdornment: d ? /* @__PURE__ */ ie.jsx(rs, { size: 18, sx: { mr: 0.5 } }) : /* @__PURE__ */ ie.jsxs(
        hi,
        {
          direction: "row",
          alignItems: "center",
          spacing: 0.5,
          onClick: g ? void 0 : () => Y((N) => !N),
          sx: { cursor: g ? void 0 : "pointer" },
          children: [
            c && M && /* @__PURE__ */ ie.jsx(
              li,
              {
                size: "small",
                sx: {
                  visibility: M ? "visible" : "hidden",
                  color: C.palette.grey.main
                },
                onClick: P,
                variant: "light",
                color: "secondary",
                children: /* @__PURE__ */ ie.jsx(Dd, {})
              }
            ),
            A ? /* @__PURE__ */ ie.jsx(aS, { sx: { color: C.palette.grey.main } }) : /* @__PURE__ */ ie.jsx(lS, { sx: { color: C.palette.grey.main } })
          ]
        }
      ),
      onChange: (N) => {
        const k = N.target.value;
        B(k);
      },
      children: o == null ? void 0 : o.filter(
        (N) => (N == null ? void 0 : N.isShow) || !(N != null && N.hasOwnProperty("isShow"))
      ).map((N, k) => {
        const W = N == null ? void 0 : N.icon, b = N == null ? void 0 : N.endIcon;
        return /* @__PURE__ */ ie.jsxs(
          jb,
          {
            disabled: (N == null ? void 0 : N.disabled) || !1,
            value: N == null ? void 0 : N[v],
            sx: { display: "flex", alignItems: "center" },
            children: [
              u && W && (typeof W == "function" || typeof W == "object") && /* @__PURE__ */ ie.jsx(W, { ...N == null ? void 0 : N.iconProps }),
              /* @__PURE__ */ ie.jsx(Ln, { children: N == null ? void 0 : N[y] }),
              u && b && (typeof b == "function" || typeof b == "object") && /* @__PURE__ */ ie.jsx(b, { ...N == null ? void 0 : N.endIconProps })
            ]
          },
          k
        );
      })
    }
  );
};
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ui.apply(null, arguments);
}
var Uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cf, Tf = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ua, Mf, If, hS = (Cf || (Cf = 1, Ua = Tf, function() {
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
  Ua.exports ? (n.default = n, Ua.exports = n) : window.classNames = n;
}()), Tf.exports), xl = Zi(hS), Of, Af, gS = (If || (If = 1, Mf = function e(n, r) {
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
}), Mf), mS = Zi(gS), zf, Pf, $r = Zi(function() {
  if (Af) return Of;
  Af = 1;
  var e = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = Object.prototype.toString;
  function u(c) {
    var h = typeof c;
    return !!c && (h == "object" || h == "function");
  }
  function p(c) {
    if (typeof c == "number") return c;
    if (function(v) {
      return typeof v == "symbol" || /* @__PURE__ */ function(E) {
        return !!E && typeof E == "object";
      }(v) && l.call(v) == "[object Symbol]";
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
  return Of = function(c, h, y) {
    return y === void 0 && (y = h, h = void 0), y !== void 0 && (y = (y = p(y)) == y ? y : 0), h !== void 0 && (h = (h = p(h)) == h ? h : 0), function(v, E, d) {
      return v == v && (d !== void 0 && (v = v <= d ? v : d), E !== void 0 && (v = v >= E ? v : E)), v;
    }(p(c), h, y);
  };
}()), vS = Zi(function() {
  if (Pf) return zf;
  Pf = 1;
  var e = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, l = typeof Uo == "object" && Uo && Uo.Object === Object && Uo, u = typeof self == "object" && self && self.Object === Object && self, p = l || u || Function("return this")(), c = Object.prototype.toString, h = Math.max, y = Math.min, v = function() {
    return p.Date.now();
  };
  function E(g) {
    var x = typeof g;
    return !!g && (x == "object" || x == "function");
  }
  function d(g) {
    if (typeof g == "number") return g;
    if (function(_) {
      return typeof _ == "symbol" || /* @__PURE__ */ function(C) {
        return !!C && typeof C == "object";
      }(_) && c.call(_) == "[object Symbol]";
    }(g)) return NaN;
    if (E(g)) {
      var x = typeof g.valueOf == "function" ? g.valueOf() : g;
      g = E(x) ? x + "" : x;
    }
    if (typeof g != "string") return g === 0 ? g : +g;
    g = g.replace(e, "");
    var I = r.test(g);
    return I || o.test(g) ? s(g.slice(2), I ? 2 : 8) : n.test(g) ? NaN : +g;
  }
  return zf = function(g, x, I) {
    var _, C, M, R, A, Y, B = 0, P = !1, N = !1, k = !0;
    if (typeof g != "function") throw new TypeError("Expected a function");
    function W(ae) {
      var pe = _, te = C;
      return _ = C = void 0, B = ae, R = g.apply(te, pe);
    }
    function b(ae) {
      var pe = ae - Y;
      return Y === void 0 || pe >= x || pe < 0 || N && ae - B >= M;
    }
    function G() {
      var ae = v();
      if (b(ae)) return D(ae);
      A = setTimeout(G, function(pe) {
        var te = x - (pe - Y);
        return N ? y(te, M - (pe - B)) : te;
      }(ae));
    }
    function D(ae) {
      return A = void 0, k && _ ? W(ae) : (_ = C = void 0, R);
    }
    function ee() {
      var ae = v(), pe = b(ae);
      if (_ = arguments, C = this, Y = ae, pe) {
        if (A === void 0) return function(te) {
          return B = te, A = setTimeout(G, x), P ? W(te) : R;
        }(Y);
        if (N) return A = setTimeout(G, x), W(Y);
      }
      return A === void 0 && (A = setTimeout(G, x)), R;
    }
    return x = d(x) || 0, E(I) && (P = !!I.leading, M = (N = "maxWait" in I) ? h(d(I.maxWait) || 0, x) : M, k = "trailing" in I ? !!I.trailing : k), ee.cancel = function() {
      A !== void 0 && clearTimeout(A), B = 0, _ = Y = C = A = void 0;
    }, ee.flush = function() {
      return A === void 0 ? R : D(v());
    }, ee;
  };
}()), Rf = {
  width: void 0,
  height: void 0
};
function yS(e) {
  const {
    ref: n,
    box: r = "content-box"
  } = e, [{
    width: o,
    height: s
  }, l] = Vt(Rf), u = function() {
    const h = et(!1);
    return Tr(() => (h.current = !0, () => {
      h.current = !1;
    }), []), ns(() => h.current, []);
  }(), p = et(ui({}, Rf)), c = et(void 0);
  return c.current = e.onResize, Tr(() => {
    if (!n.current || typeof window > "u" || !("ResizeObserver" in window)) return;
    const h = new ResizeObserver(([y]) => {
      const v = r === "border-box" ? "borderBoxSize" : r === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", E = Lf(y, v, "inlineSize"), d = Lf(y, v, "blockSize");
      if (p.current.width !== E || p.current.height !== d) {
        const g = {
          width: E,
          height: d
        };
        p.current.width = E, p.current.height = d, c.current ? c.current(g) : u() && l(g);
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
function Lf(e, n, r) {
  return e[n] ? Array.isArray(e[n]) ? e[n][0][r] : e[n][r] : n === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
var bS = "allotment-module_splitView__L-yRc", SS = "allotment-module_sashContainer__fzwJF", xS = "allotment-module_splitViewContainer__rQnVa", Vd = "allotment-module_splitViewView__MGZ6O", wS = "allotment-module_vertical__WSwwa", ES = "allotment-module_horizontal__7doS8", _S = "allotment-module_separatorBorder__x-rDS";
let Wi, Fd = !1, Gd = !1;
typeof navigator == "object" && (Wi = navigator.userAgent, Gd = Wi.indexOf("Macintosh") >= 0, Fd = (Wi.indexOf("Macintosh") >= 0 || Wi.indexOf("iPad") >= 0 || Wi.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const Yd = Fd, CS = Gd, $f = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zl : Tr;
class TS {
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
function Xo(e, n) {
  const r = e.length, o = r - n.length;
  return o >= 0 && e.slice(o, r) === n;
}
var kf, Df = {
  exports: {}
}, MS = (kf || (kf = 1, function(e) {
  var n = Object.prototype.hasOwnProperty, r = "~";
  function o() {
  }
  function s(c, h, y) {
    this.fn = c, this.context = h, this.once = y || !1;
  }
  function l(c, h, y, v, E) {
    if (typeof y != "function") throw new TypeError("The listener must be a function");
    var d = new s(y, v || c, E), g = r ? r + h : h;
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
    for (var v = 0, E = y.length, d = new Array(E); v < E; v++) d[v] = y[v].fn;
    return d;
  }, p.prototype.listenerCount = function(c) {
    var h = r ? r + c : c, y = this._events[h];
    return y ? y.fn ? 1 : y.length : 0;
  }, p.prototype.emit = function(c, h, y, v, E, d) {
    var g = r ? r + c : c;
    if (!this._events[g]) return !1;
    var x, I, _ = this._events[g], C = arguments.length;
    if (_.fn) {
      switch (_.once && this.removeListener(c, _.fn, void 0, !0), C) {
        case 1:
          return _.fn.call(_.context), !0;
        case 2:
          return _.fn.call(_.context, h), !0;
        case 3:
          return _.fn.call(_.context, h, y), !0;
        case 4:
          return _.fn.call(_.context, h, y, v), !0;
        case 5:
          return _.fn.call(_.context, h, y, v, E), !0;
        case 6:
          return _.fn.call(_.context, h, y, v, E, d), !0;
      }
      for (I = 1, x = new Array(C - 1); I < C; I++) x[I - 1] = arguments[I];
      _.fn.apply(_.context, x);
    } else {
      var M, R = _.length;
      for (I = 0; I < R; I++) switch (_[I].once && this.removeListener(c, _[I].fn, void 0, !0), C) {
        case 1:
          _[I].fn.call(_[I].context);
          break;
        case 2:
          _[I].fn.call(_[I].context, h);
          break;
        case 3:
          _[I].fn.call(_[I].context, h, y);
          break;
        case 4:
          _[I].fn.call(_[I].context, h, y, v);
          break;
        default:
          if (!x) for (M = 1, x = new Array(C - 1); M < C; M++) x[M - 1] = arguments[M];
          _[I].fn.apply(_[I].context, x);
      }
    }
    return !0;
  }, p.prototype.on = function(c, h, y) {
    return l(this, c, h, y, !1);
  }, p.prototype.once = function(c, h, y) {
    return l(this, c, h, y, !0);
  }, p.prototype.removeListener = function(c, h, y, v) {
    var E = r ? r + c : c;
    if (!this._events[E]) return this;
    if (!h) return u(this, E), this;
    var d = this._events[E];
    if (d.fn) d.fn !== h || v && !d.once || y && d.context !== y || u(this, E);
    else {
      for (var g = 0, x = [], I = d.length; g < I; g++) (d[g].fn !== h || v && !d[g].once || y && d[g].context !== y) && x.push(d[g]);
      x.length ? this._events[E] = x.length === 1 ? x[0] : x : u(this, E);
    }
    return this;
  }, p.prototype.removeAllListeners = function(c) {
    var h;
    return c ? (h = r ? r + c : c, this._events[h] && u(this, h)) : (this._events = new o(), this._eventsCount = 0), this;
  }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = r, p.EventEmitter = p, e.exports = p;
}(Df)), Df.exports), Pl = Zi(MS);
function Bf(e, n) {
  const r = e.indexOf(n);
  r > -1 && (e.splice(r, 1), e.unshift(n));
}
function Xa(e, n) {
  const r = e.indexOf(n);
  r > -1 && (e.splice(r, 1), e.push(n));
}
function wr(e, n, r = 1) {
  const o = Math.max(0, Math.ceil((n - e) / r)), s = new Array(o);
  let l = -1;
  for (; ++l < o; ) s[l] = e + l * r;
  return s;
}
var IS = "sash-module_sash__K-9lB", OS = "sash-module_disabled__Hm-wx", AS = "sash-module_mac__Jf6OJ", Nf = "sash-module_vertical__pB-rs", zS = "sash-module_minimum__-UKxp", PS = "sash-module_maximum__TCWxD", Wf = "sash-module_horizontal__kFbiw", qa = "sash-module_hover__80W6I", Ka = "sash-module_active__bJspD";
let _r = function(e) {
  return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
}({}), ur = function(e) {
  return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
}({}), jd = Yd ? 20 : 8;
const Hd = new Pl();
class Vf extends Pl {
  get state() {
    return this._state;
  }
  set state(n) {
    this._state !== n && (this.el.classList.toggle(OS, n === ur.Disabled), this.el.classList.toggle("sash-disabled", n === ur.Disabled), this.el.classList.toggle(zS, n === ur.Minimum), this.el.classList.toggle("sash-minimum", n === ur.Minimum), this.el.classList.toggle(PS, n === ur.Maximum), this.el.classList.toggle("sash-maximum", n === ur.Maximum), this._state = n, this.emit("enablementChange", n));
  }
  constructor(n, r, o) {
    var s;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = vS((l) => l.classList.add("sash-hover", qa), this.hoverDelay), this._state = ur.Enabled, this.onPointerStart = (l) => {
      const u = l.pageX, p = l.pageY, c = {
        startX: u,
        currentX: u,
        startY: p,
        currentY: p
      };
      this.el.classList.add("sash-active", Ka), this.emit("start", c), this.el.setPointerCapture(l.pointerId);
      const h = (v) => {
        v.preventDefault();
        const E = {
          startX: u,
          currentX: v.pageX,
          startY: p,
          currentY: v.pageY
        };
        this.emit("change", E);
      }, y = (v) => {
        v.preventDefault(), this.el.classList.remove("sash-active", Ka), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(v.pointerId), window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", y);
      };
      window.addEventListener("pointermove", h), window.addEventListener("pointerup", y);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(Ka) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", qa)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", qa);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", IS), this.el.dataset.testid = "sash", n.append(this.el), CS && this.el.classList.add("sash-mac", AS), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof o.size == "number" ? (this.size = o.size, o.orientation === _r.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = jd, Hd.on("onDidChangeGlobalSize", (l) => {
      this.size = l, this.layout();
    })), this.layoutProvider = r, this.orientation = (s = o.orientation) != null ? s : _r.Vertical, this.orientation === _r.Horizontal ? (this.el.classList.add("sash-horizontal", Wf), this.el.classList.remove("sash-vertical", Nf)) : (this.el.classList.remove("sash-horizontal", Wf), this.el.classList.add("sash-vertical", Nf)), this.layout();
  }
  layout() {
    if (this.orientation === _r.Vertical) {
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
let is;
var Za;
(Za = is || (is = {})).Distribute = {
  type: "distribute"
}, Za.Split = function(e) {
  return {
    type: "split",
    index: e
  };
}, Za.Invisible = function(e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
let Er = function(e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class Ud {
  constructor(n, r, o) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = n, this.view = r, this.container.classList.add("split-view-view", Vd), this.container.dataset.testid = "split-view-view", typeof o == "number" ? (this._size = o, this._cachedVisibleSize = void 0, n.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = o.cachedVisibleSize);
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
    n !== this.visible && (n ? (this.size = $r(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof r == "number" ? r : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", n), this.view.setVisible && this.view.setVisible(n));
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
class RS extends Ud {
  layoutContainer(n) {
    this.container.style.left = `${n}px`, this.container.style.width = `${this.size}px`;
  }
}
class LS extends Ud {
  layoutContainer(n) {
    this.container.style.top = `${n}px`, this.container.style.height = `${this.size}px`;
  }
}
class $S extends Pl {
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
    }, this.orientation = (u = r.orientation) != null ? u : _r.Vertical, this.proportionalLayout = (p = r.proportionalLayout) != null ? p : !0, this.getSashOrthogonalSize = r.getSashOrthogonalSize, o && (this.onDidChange = o), s && (this.onDidDragStart = s), l && (this.onDidDragEnd = l), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", SS), n.prepend(this.sashContainer), r.descriptor) {
      this.size = r.descriptor.size;
      for (const [c, h] of r.descriptor.views.entries()) {
        const y = h.size, v = h.container, E = h.view;
        this.addView(v, E, y, c, !0);
      }
      this.contentSize = this.viewItems.reduce((c, h) => c + h.size, 0), this.saveProportions();
    }
  }
  addView(n, r, o, s = this.viewItems.length, l) {
    let u;
    u = typeof o == "number" ? o : o.type === "split" ? this.getViewSize(o.index) / 2 : o.type === "invisible" ? {
      cachedVisibleSize: o.cachedVisibleSize
    } : r.minimumSize;
    const p = this.orientation === _r.Vertical ? new LS(n, r, u) : new RS(n, r, u);
    if (this.viewItems.splice(s, 0, p), this.viewItems.length > 1) {
      const c = this.orientation === _r.Vertical ? new Vf(this.sashContainer, {
        getHorizontalSashTop: (v) => this.getSashPosition(v),
        getHorizontalSashWidth: this.getSashOrthogonalSize
      }, {
        orientation: _r.Horizontal
      }) : new Vf(this.sashContainer, {
        getVerticalSashLeft: (v) => this.getSashPosition(v),
        getVerticalSashHeight: this.getSashOrthogonalSize
      }, {
        orientation: _r.Vertical
      }), h = this.orientation === _r.Vertical ? (v) => ({
        sash: c,
        start: v.startY,
        current: v.currentY
      }) : (v) => ({
        sash: c,
        start: v.startX,
        current: v.currentX
      });
      c.on("start", (v) => {
        var E;
        this.emit("sashDragStart"), this.onSashStart(h(v));
        const d = this.viewItems.map((g) => g.size);
        (E = this.onDidDragStart) == null || E.call(this, d);
      }), c.on("change", (v) => this.onSashChange(h(v))), c.on("end", () => {
        var v;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((d) => d.sash === c));
        const E = this.viewItems.map((d) => d.size);
        (v = this.onDidDragEnd) == null || v.call(this, E);
      }), c.on("reset", () => {
        const v = this.sashItems.findIndex((I) => I.sash === c), E = wr(v, -1, -1), d = wr(v + 1, this.viewItems.length), g = this.findFirstSnapIndex(E), x = this.findFirstSnapIndex(d);
        (typeof g != "number" || this.viewItems[g].visible) && (typeof x != "number" || this.viewItems[x].visible) && this.emit("sashreset", v);
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
    const s = this.getViewCachedVisibleSize(r), l = s === void 0 ? this.getViewSize(r) : is.Invisible(s), u = this.removeView(r);
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
      s.size = $r(Math.round(this.proportions[o] * n), s.minimumSize, s.maximumSize);
    }
    else {
      const o = wr(0, this.viewItems.length), s = o.filter((u) => this.viewItems[u].priority === Er.Low), l = o.filter((u) => this.viewItems[u].priority === Er.High);
      this.resize(this.viewItems.length - 1, n - r, void 0, s, l);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(n, r) {
    if (n < 0 || n >= this.viewItems.length) return;
    const o = wr(0, this.viewItems.length).filter((p) => p !== n), s = [...o.filter((p) => this.viewItems[p].priority === Er.Low), n], l = o.filter((p) => this.viewItems[p].priority === Er.High), u = this.viewItems[n];
    r = Math.round(r), r = $r(r, u.minimumSize, Math.min(u.maximumSize, this.size)), u.size = r, this.relayout(s, l);
  }
  resizeViews(n) {
    for (let r = 0; r < n.length; r++) {
      const o = this.viewItems[r];
      let s = n[r];
      s = Math.round(s), s = $r(s, o.minimumSize, Math.min(o.maximumSize, this.size)), o.size = s;
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
    for (const p of n) p.size = $r(o, p.minimumSize, p.maximumSize);
    const s = wr(0, this.viewItems.length), l = s.filter((p) => this.viewItems[p].priority === Er.Low), u = s.filter((p) => this.viewItems[p].priority === Er.High);
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
      const y = wr(o, -1, -1), v = wr(o + 1, this.viewItems.length), E = y.reduce((C, M) => C + (this.viewItems[M].minimumSize - l[M]), 0), d = y.reduce((C, M) => C + (this.viewItems[M].viewMaximumSize - l[M]), 0), g = v.length === 0 ? Number.POSITIVE_INFINITY : v.reduce((C, M) => C + (l[M] - this.viewItems[M].minimumSize), 0), x = v.length === 0 ? Number.NEGATIVE_INFINITY : v.reduce((C, M) => C + (l[M] - this.viewItems[M].viewMaximumSize), 0);
      c = Math.max(E, x), h = Math.min(g, d);
      const I = this.findFirstSnapIndex(y), _ = this.findFirstSnapIndex(v);
      if (typeof I == "number") {
        const C = this.viewItems[I], M = Math.floor(C.viewMinimumSize / 2);
        u = {
          index: I,
          limitDelta: C.visible ? c - M : c + M,
          size: C.size
        };
      }
      if (typeof _ == "number") {
        const C = this.viewItems[_], M = Math.floor(C.viewMinimumSize / 2);
        p = {
          index: _,
          limitDelta: C.visible ? h + M : h - M,
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
    const y = wr(n, -1, -1), v = wr(n + 1, this.viewItems.length);
    if (l) for (const B of l) Bf(y, B), Bf(v, B);
    if (s) for (const B of s) Xa(y, B), Xa(v, B);
    const E = y.map((B) => this.viewItems[B]), d = y.map((B) => o[B]), g = v.map((B) => this.viewItems[B]), x = v.map((B) => o[B]), I = y.reduce((B, P) => B + (this.viewItems[P].minimumSize - o[P]), 0), _ = y.reduce((B, P) => B + (this.viewItems[P].maximumSize - o[P]), 0), C = v.length === 0 ? Number.POSITIVE_INFINITY : v.reduce((B, P) => B + (o[P] - this.viewItems[P].minimumSize), 0), M = v.length === 0 ? Number.NEGATIVE_INFINITY : v.reduce((B, P) => B + (o[P] - this.viewItems[P].maximumSize), 0), R = Math.max(I, M, u), A = Math.min(C, _, p);
    let Y = !1;
    if (c) {
      const B = this.viewItems[c.index], P = r >= c.limitDelta;
      Y = P !== B.visible, B.setVisible(P, c.size);
    }
    if (!Y && h) {
      const B = this.viewItems[h.index], P = r < h.limitDelta;
      Y = P !== B.visible, B.setVisible(P, h.size);
    }
    if (Y) return this.resize(n, r, o, s, l, u, p);
    for (let B = 0, P = r = $r(r, R, A); B < E.length; B++) {
      const N = E[B], k = $r(d[B] + P, N.minimumSize, N.maximumSize);
      P -= k - d[B], N.size = k;
    }
    for (let B = 0, P = r; B < g.length; B++) {
      const N = g[B], k = $r(x[B] - P, N.minimumSize, N.maximumSize);
      P += k - x[B], N.size = k;
    }
    return r;
  }
  distributeEmptySpace(n) {
    const r = this.viewItems.reduce((h, y) => h + y.size, 0);
    let o = this.size - r;
    const s = wr(0, this.viewItems.length), l = [], u = s.filter((h) => this.viewItems[h].priority === Er.Low), p = s.filter((h) => this.viewItems[h].priority === Er.Normal), c = s.filter((h) => this.viewItems[h].priority === Er.High);
    l.push(...c, ...p, ...u), typeof n == "number" && Xa(l, n);
    for (let h = 0; o !== 0 && h < l.length; h++) {
      const y = this.viewItems[l[h]], v = $r(y.size + o, y.minimumSize, y.maximumSize);
      o -= v - y.size, y.size = v;
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
      const y = !(r[c] && u[c + 1]), v = !(o[c] && l[c + 1]);
      if (y && v) {
        const E = wr(c, -1, -1), d = wr(c + 1, this.viewItems.length), g = this.findFirstSnapIndex(E), x = this.findFirstSnapIndex(d), I = typeof g == "number" && !this.viewItems[g].visible, _ = typeof x == "number" && !this.viewItems[x].visible;
        I && l[c] && (p > 0 || this.startSnappingEnabled) ? h.state = ur.Minimum : _ && r[c] && (p < this.contentSize || this.endSnappingEnabled) ? h.state = ur.Maximum : h.state = ur.Disabled;
      } else h.state = y && !v ? ur.Minimum : !y && v ? ur.Maximum : ur.Enabled;
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
class ei {
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
class qo {
  getPreferredSize() {
  }
}
class Gf {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(n) {
    if (typeof n == "number") this.layoutStrategy = new ei(n);
    else if (typeof n == "string") {
      const r = n.trim();
      if (Xo(r, "%")) {
        const o = Number(r.slice(0, -1)) / 100;
        this.layoutStrategy = new Ff(o, this.layoutService);
      } else if (Xo(r, "px")) {
        const o = Number(r.slice(0, -2)) / 100;
        this.layoutStrategy = new ei(o);
      } else if (typeof Number.parseFloat(r) == "number") {
        const o = Number.parseFloat(r);
        this.layoutStrategy = new ei(o);
      } else this.layoutStrategy = new qo();
    } else this.layoutStrategy = new qo();
  }
  constructor(n, r) {
    var o;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = n, this.element = r.element, this.minimumSize = typeof r.minimumSize == "number" ? r.minimumSize : 30, this.maximumSize = typeof r.maximumSize == "number" ? r.maximumSize : Number.POSITIVE_INFINITY, typeof r.preferredSize == "number") this.layoutStrategy = new ei(r.preferredSize);
    else if (typeof r.preferredSize == "string") {
      const s = r.preferredSize.trim();
      if (Xo(s, "%")) {
        const l = Number(s.slice(0, -1)) / 100;
        this.layoutStrategy = new Ff(l, this.layoutService);
      } else if (Xo(s, "px")) {
        const l = Number(s.slice(0, -2));
        this.layoutStrategy = new ei(l);
      } else if (typeof Number.parseFloat(s) == "number") {
        const l = Number.parseFloat(s);
        this.layoutStrategy = new ei(l);
      } else this.layoutStrategy = new qo();
    } else this.layoutStrategy = new qo();
    this.priority = (o = r.priority) != null ? o : Er.Normal, this.snap = typeof r.snap == "boolean" && r.snap;
  }
  layout(n) {
  }
}
function Yf(e) {
  return e.minSize !== void 0 || e.maxSize !== void 0 || e.preferredSize !== void 0 || e.priority !== void 0 || e.visible !== void 0;
}
const Rl = gi(({
  className: e,
  children: n
}, r) => He.createElement("div", {
  ref: r,
  className: xl("split-view-view", Vd, e)
}, n));
Rl.displayName = "Allotment.Pane";
const Xd = gi(({
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
  onChange: v,
  onReset: E,
  onVisibleChange: d,
  onDragStart: g,
  onDragEnd: x
}, I) => {
  const _ = et(null), C = et([]), M = et(/* @__PURE__ */ new Map()), R = et(null), A = et(/* @__PURE__ */ new Map()), Y = et(new TS()), B = et([]), [P, N] = Vt(!1);
  process.env.NODE_ENV !== "production" && p && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const k = $d(() => He.Children.toArray(e).filter(He.isValidElement), [e]), W = ns((b) => {
    var G, D;
    const ee = (G = B.current) == null ? void 0 : G[b];
    return typeof (ee == null ? void 0 : ee.preferredSize) == "number" && ((D = R.current) != null && D.resizeView(b, Math.round(ee.preferredSize)), !0);
  }, []);
  return Zb(I, () => ({
    reset: () => {
      if (E) E();
      else {
        var b;
        (b = R.current) == null || b.distributeViewSizes();
        for (let G = 0; G < B.current.length; G++) W(G);
      }
    },
    resize: (b) => {
      var G;
      (G = R.current) == null || G.resizeViews(b);
    }
  })), $f(() => {
    let b = !0;
    c && A.current.size !== c.length && (b = !1, console.warn(`Expected ${c.length} children based on defaultSizes but found ${A.current.size}`)), b && c && (C.current = k.map((ee) => ee.key));
    const G = ui({
      orientation: y ? _r.Vertical : _r.Horizontal,
      proportionalLayout: l
    }, b && c && {
      descriptor: {
        size: c.reduce((ee, ae) => ee + ae, 0),
        views: c.map((ee, ae) => {
          var pe, te, Ee, U;
          const J = M.current.get(C.current[ae]), he = new Gf(Y.current, ui({
            element: document.createElement("div"),
            minimumSize: (pe = J == null ? void 0 : J.minSize) != null ? pe : s,
            maximumSize: (te = J == null ? void 0 : J.maxSize) != null ? te : o,
            priority: (Ee = J == null ? void 0 : J.priority) != null ? Ee : Er.Normal
          }, (J == null ? void 0 : J.preferredSize) && {
            preferredSize: J == null ? void 0 : J.preferredSize
          }, {
            snap: (U = J == null ? void 0 : J.snap) != null ? U : h
          }));
          return B.current.push(he), {
            container: [...A.current.values()][ae],
            size: ee,
            view: he
          };
        })
      }
    });
    R.current = new $S(_.current, G, v, g, x), R.current.on("sashDragStart", () => {
      var ee;
      (ee = _.current) == null || ee.classList.add("split-view-sash-dragging");
    }), R.current.on("sashDragEnd", () => {
      var ee;
      (ee = _.current) == null || ee.classList.remove("split-view-sash-dragging");
    }), R.current.on("sashchange", (ee) => {
      if (d && R.current) {
        const ae = k.map((pe) => pe.key);
        for (let pe = 0; pe < ae.length; pe++) {
          const te = M.current.get(ae[pe]);
          (te == null ? void 0 : te.visible) !== void 0 && te.visible !== R.current.isViewVisible(pe) && d(pe, R.current.isViewVisible(pe));
        }
      }
    }), R.current.on("sashreset", (ee) => {
      if (E) E();
      else {
        var ae;
        if (W(ee) || W(ee + 1)) return;
        (ae = R.current) == null || ae.distributeViewSizes();
      }
    });
    const D = R.current;
    return () => {
      D.dispose();
    };
  }, []), $f(() => {
    if (P) {
      const me = k.map((re) => re.key), V = [...C.current], Z = me.filter((re) => !C.current.includes(re)), X = me.filter((re) => C.current.includes(re)), le = C.current.map((re) => !me.includes(re));
      for (let re = le.length - 1; re >= 0; re--) {
        var b;
        le[re] && ((b = R.current) != null && b.removeView(re), V.splice(re, 1), B.current.splice(re, 1));
      }
      for (const re of Z) {
        var G, D, ee, ae, pe;
        const se = M.current.get(re), fe = new Gf(Y.current, ui({
          element: document.createElement("div"),
          minimumSize: (G = se == null ? void 0 : se.minSize) != null ? G : s,
          maximumSize: (D = se == null ? void 0 : se.maxSize) != null ? D : o,
          priority: (ee = se == null ? void 0 : se.priority) != null ? ee : Er.Normal
        }, (se == null ? void 0 : se.preferredSize) && {
          preferredSize: se == null ? void 0 : se.preferredSize
        }, {
          snap: (ae = se == null ? void 0 : se.snap) != null ? ae : h
        }));
        (pe = R.current) != null && pe.addView(A.current.get(re), fe, is.Distribute, me.findIndex((be) => be === re)), V.splice(me.findIndex((be) => be === re), 0, re), B.current.splice(me.findIndex((be) => be === re), 0, fe);
      }
      for (; !mS(me, V); ) for (const [re, se] of me.entries()) {
        const fe = V.findIndex((be) => be === se);
        if (fe !== re) {
          var te;
          (te = R.current) == null || te.moveView(A.current.get(se), fe, re);
          const be = V[fe];
          V.splice(fe, 1), V.splice(re, 0, be);
          break;
        }
      }
      for (const re of Z) {
        var Ee;
        const se = me.findIndex((be) => be === re), fe = B.current[se].preferredSize;
        fe !== void 0 && ((Ee = R.current) == null || Ee.resizeView(se, fe));
      }
      for (const re of [...Z, ...X]) {
        var U, J;
        const se = M.current.get(re), fe = me.findIndex((be) => be === re);
        se && Yf(se) && se.visible !== void 0 && ((U = R.current) == null ? void 0 : U.isViewVisible(fe)) !== se.visible && ((J = R.current) == null || J.setViewVisible(fe, se.visible));
      }
      for (const re of X) {
        const se = M.current.get(re), fe = me.findIndex((be) => be === re);
        if (se && Yf(se)) {
          var he;
          se.preferredSize !== void 0 && B.current[fe].preferredSize !== se.preferredSize && (B.current[fe].preferredSize = se.preferredSize);
          let be = !1;
          se.minSize !== void 0 && B.current[fe].minimumSize !== se.minSize && (B.current[fe].minimumSize = se.minSize, be = !0), se.maxSize !== void 0 && B.current[fe].maximumSize !== se.maxSize && (B.current[fe].maximumSize = se.maxSize, be = !0), be && ((he = R.current) == null || he.layout());
        }
      }
      (Z.length > 0 || le.length > 0) && (C.current = me);
    }
  }, [k, P, o, s, h]), Tr(() => {
    R.current && (R.current.onDidChange = v);
  }, [v]), Tr(() => {
    R.current && (R.current.onDidDragStart = g);
  }, [g]), Tr(() => {
    R.current && (R.current.onDidDragEnd = x);
  }, [x]), yS({
    ref: _,
    onResize: ({
      width: b,
      height: G
    }) => {
      var D;
      b && G && ((D = R.current) != null && D.layout(y ? G : b), Y.current.setSize(y ? G : b), N(!0));
    }
  }), Tr(() => {
    Yd && kS(20);
  }, []), He.createElement("div", {
    ref: _,
    className: xl("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": u
    }, bS, y ? wS : ES, {
      [_S]: u
    }, n),
    id: r
  }, He.createElement("div", {
    className: xl("split-view-container", xS)
  }, He.Children.toArray(e).map((b) => {
    if (!He.isValidElement(b)) return null;
    const G = b.key;
    return b.type.displayName === "Allotment.Pane" ? (M.current.set(G, b.props), He.cloneElement(b, {
      key: G,
      ref: (D) => {
        const ee = b.ref;
        ee && (ee.current = D), D ? A.current.set(G, D) : A.current.delete(G);
      }
    })) : He.createElement(Rl, {
      key: G,
      ref: (D) => {
        D ? A.current.set(G, D) : A.current.delete(G);
      }
    }, b);
  })));
});
function kS(e) {
  const n = $r(e, 4, 20), r = $r(e, 1, 8);
  document.documentElement.style.setProperty("--sash-size", n + "px"), document.documentElement.style.setProperty("--sash-hover-size", r + "px"), function(o) {
    jd = o, Hd.emit("onDidChangeGlobalSize", o);
  }(n);
}
Xd.displayName = "Allotment";
var Ja = Object.assign(Xd, {
  Pane: Rl
});
let Ko;
const DS = new Uint8Array(16);
function BS() {
  if (!Ko && (Ko = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ko))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ko(DS);
}
const Pt = [];
for (let e = 0; e < 256; ++e)
  Pt.push((e + 256).toString(16).slice(1));
function NS(e, n = 0) {
  return Pt[e[n + 0]] + Pt[e[n + 1]] + Pt[e[n + 2]] + Pt[e[n + 3]] + "-" + Pt[e[n + 4]] + Pt[e[n + 5]] + "-" + Pt[e[n + 6]] + Pt[e[n + 7]] + "-" + Pt[e[n + 8]] + Pt[e[n + 9]] + "-" + Pt[e[n + 10]] + Pt[e[n + 11]] + Pt[e[n + 12]] + Pt[e[n + 13]] + Pt[e[n + 14]] + Pt[e[n + 15]];
}
const WS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), jf = {
  randomUUID: WS
};
function VS(e, n, r) {
  if (jf.randomUUID && !e)
    return jf.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || BS)();
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, NS(o);
}
const FS = 500, GS = 320, Hf = {
  height: "100%",
  overflow: "visible"
}, gC = (e) => {
  const {
    isView: n = !1,
    leftPane: r,
    rightPane: o,
    isSplitMode: s,
    leftInitSize: l = 360,
    leftMinSize: u = GS,
    leftMaxSize: p = FS,
    onDragEnd: c
  } = e, h = Ki(), y = et(null), v = et(VS());
  let E = !1, d = !1;
  return s || (n ? E = !0 : d = !0), /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
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
          [`& #allotment-${v.current.toString()} > .sash-container`]: {
            display: s ? "block" : "none"
          }
        },
        children: /* @__PURE__ */ ie.jsxs(
          Ja,
          {
            ref: y,
            onDragEnd: c,
            id: `allotment-${v.current}`,
            separator: s,
            children: [
              /* @__PURE__ */ ie.jsx(
                Ja.Pane,
                {
                  minSize: s ? u : 0,
                  maxSize: s ? p : 1 / 0,
                  visible: !E,
                  preferredSize: l,
                  children: !E && /* @__PURE__ */ ie.jsx(Ht, { sx: { ...Hf }, children: r })
                }
              ),
              /* @__PURE__ */ ie.jsx(Ja.Pane, { minSize: 0, visible: !d, children: !d && /* @__PURE__ */ ie.jsx(Ht, { sx: { ...Hf }, children: o }) })
            ]
          }
        )
      }
    )
  ] });
};
function Uf(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Ll(e = {}, n = {}) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(n).filter((o) => r.indexOf(o) < 0).forEach((o) => {
    typeof e[o] > "u" ? e[o] = n[o] : Uf(n[o]) && Uf(e[o]) && Object.keys(n[o]).length > 0 && Ll(e[o], n[o]);
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
function yn() {
  const e = typeof document < "u" ? document : {};
  return Ll(e, qd), e;
}
const YS = {
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
function Rt() {
  const e = typeof window < "u" ? window : {};
  return Ll(e, YS), e;
}
function jS(e = "") {
  return e.trim().split(" ").filter((n) => !!n.trim());
}
function HS(e) {
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
function os() {
  return Date.now();
}
function US(e) {
  const n = Rt();
  let r;
  return n.getComputedStyle && (r = n.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r;
}
function wl(e, n = "x") {
  const r = Rt();
  let o, s, l;
  const u = US(e);
  return r.WebKitCSSMatrix ? (s = u.transform || u.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((p) => p.replace(",", ".")).join(", ")), l = new r.WebKitCSSMatrix(s === "none" ? "" : s)) : (l = u.MozTransform || u.OTransform || u.MsTransform || u.msTransform || u.transform || u.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), o = l.toString().split(",")), n === "x" && (r.WebKitCSSMatrix ? s = l.m41 : o.length === 16 ? s = parseFloat(o[12]) : s = parseFloat(o[4])), n === "y" && (r.WebKitCSSMatrix ? s = l.m42 : o.length === 16 ? s = parseFloat(o[13]) : s = parseFloat(o[5])), s || 0;
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function XS(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function cr(...e) {
  const n = Object(e[0]);
  for (let r = 1; r < e.length; r += 1) {
    const o = e[r];
    if (o != null && !XS(o)) {
      const s = Object.keys(Object(o)).filter((l) => l !== "__proto__" && l !== "constructor" && l !== "prototype");
      for (let l = 0, u = s.length; l < u; l += 1) {
        const p = s[l], c = Object.getOwnPropertyDescriptor(o, p);
        c !== void 0 && c.enumerable && (Zo(n[p]) && Zo(o[p]) ? o[p].__swiper__ ? n[p] = o[p] : cr(n[p], o[p]) : !Zo(n[p]) && Zo(o[p]) ? (n[p] = {}, o[p].__swiper__ ? n[p] = o[p] : cr(n[p], o[p])) : n[p] = o[p]);
      }
    }
  }
  return n;
}
function ti(e, n, r) {
  e.style.setProperty(n, r);
}
function Zd({
  swiper: e,
  targetPosition: n,
  side: r
}) {
  const o = Rt(), s = -e.translate;
  let l = null, u;
  const p = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(e.cssModeFrameID);
  const c = n > s ? "next" : "prev", h = (v, E) => c === "next" && v >= E || c === "prev" && v <= E, y = () => {
    u = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = u);
    const v = Math.max(Math.min((u - l) / p, 1), 0), E = 0.5 - Math.cos(v * Math.PI) / 2;
    let d = s + E * (n - s);
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
function Mr(e, n = "") {
  const r = Rt(), o = [...e.children];
  return r.HTMLSlotElement && e instanceof HTMLSlotElement && o.push(...e.assignedElements()), n ? o.filter((s) => s.matches(n)) : o;
}
function qS(e, n) {
  const r = [n];
  for (; r.length > 0; ) {
    const o = r.shift();
    if (e === o)
      return !0;
    r.push(...o.children, ...o.shadowRoot ? o.shadowRoot.children : [], ...o.assignedElements ? o.assignedElements() : []);
  }
}
function KS(e, n) {
  const r = Rt();
  let o = n.contains(e);
  return !o && r.HTMLSlotElement && n instanceof HTMLSlotElement && (o = [...n.assignedElements()].includes(e), o || (o = qS(e, n))), o;
}
function ss(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function as(e, n = []) {
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(n) ? n : jS(n)), r;
}
function Xf(e) {
  const n = Rt(), r = yn(), o = e.getBoundingClientRect(), s = r.body, l = e.clientTop || s.clientTop || 0, u = e.clientLeft || s.clientLeft || 0, p = e === n ? n.scrollY : e.scrollTop, c = e === n ? n.scrollX : e.scrollLeft;
  return {
    top: o.top + p - l,
    left: o.left + c - u
  };
}
function ZS(e, n) {
  const r = [];
  for (; e.previousElementSibling; ) {
    const o = e.previousElementSibling;
    n ? o.matches(n) && r.push(o) : r.push(o), e = o;
  }
  return r;
}
function JS(e, n) {
  const r = [];
  for (; e.nextElementSibling; ) {
    const o = e.nextElementSibling;
    n ? o.matches(n) && r.push(o) : r.push(o), e = o;
  }
  return r;
}
function gn(e, n) {
  return Rt().getComputedStyle(e, null).getPropertyValue(n);
}
function ls(e) {
  let n = e, r;
  if (n) {
    for (r = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (r += 1);
    return r;
  }
}
function ji(e, n) {
  const r = [];
  let o = e.parentElement;
  for (; o; )
    n ? o.matches(n) && r.push(o) : r.push(o), o = o.parentElement;
  return r;
}
function El(e, n, r) {
  const o = Rt();
  return e[n === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(o.getComputedStyle(e, null).getPropertyValue(n === "width" ? "margin-right" : "margin-top")) + parseFloat(o.getComputedStyle(e, null).getPropertyValue(n === "width" ? "margin-left" : "margin-bottom"));
}
function Qr(e) {
  return (Array.isArray(e) ? e : [e]).filter((n) => !!n);
}
function us(e, n = "") {
  typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (r) => r
  }).createHTML(n) : e.innerHTML = n;
}
function QS(e, n, r, o) {
  return e.params.createElements && Object.keys(o).forEach((s) => {
    if (!r[s] && r.auto === !0) {
      let l = Mr(e.el, `.${o[s]}`)[0];
      l || (l = as("div", o[s]), l.className = o[s], e.el.append(l)), r[s] = l, n[s] = l;
    }
  }), r;
}
function Vi(e = "") {
  return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
function ex({
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
      formatFractionCurrent: (_) => _,
      formatFractionTotal: (_) => _,
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
  function c(_, C) {
    const {
      bulletActiveClass: M
    } = e.params.pagination;
    _ && (_ = _[`${C === "prev" ? "previous" : "next"}ElementSibling`], _ && (_.classList.add(`${M}-${C}`), _ = _[`${C === "prev" ? "previous" : "next"}ElementSibling`], _ && _.classList.add(`${M}-${C}-${C}`)));
  }
  function h(_, C, M) {
    if (_ = _ % M, C = C % M, C === _ + 1)
      return "next";
    if (C === _ - 1)
      return "previous";
  }
  function y(_) {
    const C = _.target.closest(Vi(e.params.pagination.bulletClass));
    if (!C)
      return;
    _.preventDefault();
    const M = ls(C) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === M) return;
      const R = h(e.realIndex, M, e.slides.length);
      R === "next" ? e.slideNext() : R === "previous" ? e.slidePrev() : e.slideToLoop(M);
    } else
      e.slideTo(M);
  }
  function v() {
    const _ = e.rtl, C = e.params.pagination;
    if (p()) return;
    let M = e.pagination.el;
    M = Qr(M);
    let R, A;
    const Y = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, B = e.params.loop ? Math.ceil(Y / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (A = e.previousRealIndex || 0, R = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (R = e.snapIndex, A = e.previousSnapIndex) : (A = e.previousIndex || 0, R = e.activeIndex || 0), C.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const P = e.pagination.bullets;
      let N, k, W;
      if (C.dynamicBullets && (l = El(P[0], e.isHorizontal() ? "width" : "height"), M.forEach((b) => {
        b.style[e.isHorizontal() ? "width" : "height"] = `${l * (C.dynamicMainBullets + 4)}px`;
      }), C.dynamicMainBullets > 1 && A !== void 0 && (u += R - (A || 0), u > C.dynamicMainBullets - 1 ? u = C.dynamicMainBullets - 1 : u < 0 && (u = 0)), N = Math.max(R - u, 0), k = N + (Math.min(P.length, C.dynamicMainBullets) - 1), W = (k + N) / 2), P.forEach((b) => {
        const G = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((D) => `${C.bulletActiveClass}${D}`)].map((D) => typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
        b.classList.remove(...G);
      }), M.length > 1)
        P.forEach((b) => {
          const G = ls(b);
          G === R ? b.classList.add(...C.bulletActiveClass.split(" ")) : e.isElement && b.setAttribute("part", "bullet"), C.dynamicBullets && (G >= N && G <= k && b.classList.add(...`${C.bulletActiveClass}-main`.split(" ")), G === N && c(b, "prev"), G === k && c(b, "next"));
        });
      else {
        const b = P[R];
        if (b && b.classList.add(...C.bulletActiveClass.split(" ")), e.isElement && P.forEach((G, D) => {
          G.setAttribute("part", D === R ? "bullet-active" : "bullet");
        }), C.dynamicBullets) {
          const G = P[N], D = P[k];
          for (let ee = N; ee <= k; ee += 1)
            P[ee] && P[ee].classList.add(...`${C.bulletActiveClass}-main`.split(" "));
          c(G, "prev"), c(D, "next");
        }
      }
      if (C.dynamicBullets) {
        const b = Math.min(P.length, C.dynamicMainBullets + 4), G = (l * b - l) / 2 - W * l, D = _ ? "right" : "left";
        P.forEach((ee) => {
          ee.style[e.isHorizontal() ? D : "top"] = `${G}px`;
        });
      }
    }
    M.forEach((P, N) => {
      if (C.type === "fraction" && (P.querySelectorAll(Vi(C.currentClass)).forEach((k) => {
        k.textContent = C.formatFractionCurrent(R + 1);
      }), P.querySelectorAll(Vi(C.totalClass)).forEach((k) => {
        k.textContent = C.formatFractionTotal(B);
      })), C.type === "progressbar") {
        let k;
        C.progressbarOpposite ? k = e.isHorizontal() ? "vertical" : "horizontal" : k = e.isHorizontal() ? "horizontal" : "vertical";
        const W = (R + 1) / B;
        let b = 1, G = 1;
        k === "horizontal" ? b = W : G = W, P.querySelectorAll(Vi(C.progressbarFillClass)).forEach((D) => {
          D.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${G})`, D.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      C.type === "custom" && C.renderCustom ? (us(P, C.renderCustom(e, R + 1, B)), N === 0 && o("paginationRender", P)) : (N === 0 && o("paginationRender", P), o("paginationUpdate", P)), e.params.watchOverflow && e.enabled && P.classList[e.isLocked ? "add" : "remove"](C.lockClass);
    });
  }
  function E() {
    const _ = e.params.pagination;
    if (p()) return;
    const C = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let M = e.pagination.el;
    M = Qr(M);
    let R = "";
    if (_.type === "bullets") {
      let A = e.params.loop ? Math.ceil(C / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && A > C && (A = C);
      for (let Y = 0; Y < A; Y += 1)
        _.renderBullet ? R += _.renderBullet.call(e, Y, _.bulletClass) : R += `<${_.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${_.bulletClass}"></${_.bulletElement}>`;
    }
    _.type === "fraction" && (_.renderFraction ? R = _.renderFraction.call(e, _.currentClass, _.totalClass) : R = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`), _.type === "progressbar" && (_.renderProgressbar ? R = _.renderProgressbar.call(e, _.progressbarFillClass) : R = `<span class="${_.progressbarFillClass}"></span>`), e.pagination.bullets = [], M.forEach((A) => {
      _.type !== "custom" && us(A, R || ""), _.type === "bullets" && e.pagination.bullets.push(...A.querySelectorAll(Vi(_.bulletClass)));
    }), _.type !== "custom" && o("paginationRender", M[0]);
  }
  function d() {
    e.params.pagination = QS(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const _ = e.params.pagination;
    if (!_.el) return;
    let C;
    typeof _.el == "string" && e.isElement && (C = e.el.querySelector(_.el)), !C && typeof _.el == "string" && (C = [...document.querySelectorAll(_.el)]), C || (C = _.el), !(!C || C.length === 0) && (e.params.uniqueNavElements && typeof _.el == "string" && Array.isArray(C) && C.length > 1 && (C = [...e.el.querySelectorAll(_.el)], C.length > 1 && (C = C.find((M) => ji(M, ".swiper")[0] === e.el))), Array.isArray(C) && C.length === 1 && (C = C[0]), Object.assign(e.pagination, {
      el: C
    }), C = Qr(C), C.forEach((M) => {
      _.type === "bullets" && _.clickable && M.classList.add(...(_.clickableClass || "").split(" ")), M.classList.add(_.modifierClass + _.type), M.classList.add(e.isHorizontal() ? _.horizontalClass : _.verticalClass), _.type === "bullets" && _.dynamicBullets && (M.classList.add(`${_.modifierClass}${_.type}-dynamic`), u = 0, _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)), _.type === "progressbar" && _.progressbarOpposite && M.classList.add(_.progressbarOppositeClass), _.clickable && M.addEventListener("click", y), e.enabled || M.classList.add(_.lockClass);
    }));
  }
  function g() {
    const _ = e.params.pagination;
    if (p()) return;
    let C = e.pagination.el;
    C && (C = Qr(C), C.forEach((M) => {
      M.classList.remove(_.hiddenClass), M.classList.remove(_.modifierClass + _.type), M.classList.remove(e.isHorizontal() ? _.horizontalClass : _.verticalClass), _.clickable && (M.classList.remove(...(_.clickableClass || "").split(" ")), M.removeEventListener("click", y));
    })), e.pagination.bullets && e.pagination.bullets.forEach((M) => M.classList.remove(..._.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const _ = e.params.pagination;
    let {
      el: C
    } = e.pagination;
    C = Qr(C), C.forEach((M) => {
      M.classList.remove(_.horizontalClass, _.verticalClass), M.classList.add(e.isHorizontal() ? _.horizontalClass : _.verticalClass);
    });
  }), r("init", () => {
    e.params.pagination.enabled === !1 ? I() : (d(), E(), v());
  }), r("activeIndexChange", () => {
    typeof e.snapIndex > "u" && v();
  }), r("snapIndexChange", () => {
    v();
  }), r("snapGridLengthChange", () => {
    E(), v();
  }), r("destroy", () => {
    g();
  }), r("enable disable", () => {
    let {
      el: _
    } = e.pagination;
    _ && (_ = Qr(_), _.forEach((C) => C.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), r("lock unlock", () => {
    v();
  }), r("click", (_, C) => {
    const M = C.target, R = Qr(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && R && R.length > 0 && !M.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && M === e.navigation.nextEl || e.navigation.prevEl && M === e.navigation.prevEl)) return;
      const A = R[0].classList.contains(e.params.pagination.hiddenClass);
      o(A === !0 ? "paginationShow" : "paginationHide"), R.forEach((Y) => Y.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const x = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: _
    } = e.pagination;
    _ && (_ = Qr(_), _.forEach((C) => C.classList.remove(e.params.pagination.paginationDisabledClass))), d(), E(), v();
  }, I = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: _
    } = e.pagination;
    _ && (_ = Qr(_), _.forEach((C) => C.classList.add(e.params.pagination.paginationDisabledClass))), g();
  };
  Object.assign(e.pagination, {
    enable: x,
    disable: I,
    render: E,
    update: v,
    init: d,
    destroy: g
  });
}
function tx({
  swiper: e,
  extendParams: n,
  on: r,
  emit: o
}) {
  const s = Rt();
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
  let y, v;
  const E = [], d = {
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
  }, x = {
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
    set(V) {
      if (I !== V) {
        const Z = d.imageEl, X = d.slideEl;
        o("zoomChange", V, Z, X);
      }
      I = V;
    }
  });
  function _() {
    if (E.length < 2) return 1;
    const V = E[0].pageX, Z = E[0].pageY, X = E[1].pageX, le = E[1].pageY;
    return Math.sqrt((X - V) ** 2 + (le - Z) ** 2);
  }
  function C() {
    const V = e.params.zoom, Z = d.imageWrapEl.getAttribute("data-swiper-zoom") || V.maxRatio;
    if (V.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
      const X = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
      return Math.min(X, Z);
    }
    return Z;
  }
  function M() {
    if (E.length < 2) return {
      x: null,
      y: null
    };
    const V = d.imageEl.getBoundingClientRect();
    return [(E[0].pageX + (E[1].pageX - E[0].pageX) / 2 - V.x - s.scrollX) / l, (E[0].pageY + (E[1].pageY - E[0].pageY) / 2 - V.y - s.scrollY) / l];
  }
  function R() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function A(V) {
    const Z = R();
    return !!(V.target.matches(Z) || e.slides.filter((X) => X.contains(V.target)).length > 0);
  }
  function Y(V) {
    const Z = `.${e.params.zoom.containerClass}`;
    return !!(V.target.matches(Z) || [...e.hostEl.querySelectorAll(Z)].filter((X) => X.contains(V.target)).length > 0);
  }
  function B(V) {
    if (V.pointerType === "mouse" && E.splice(0, E.length), !A(V)) return;
    const Z = e.params.zoom;
    if (y = !1, v = !1, E.push(V), !(E.length < 2)) {
      if (y = !0, d.scaleStart = _(), !d.slideEl) {
        d.slideEl = V.target.closest(`.${e.params.slideClass}, swiper-slide`), d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
        let X = d.slideEl.querySelector(`.${Z.containerClass}`);
        if (X && (X = X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = X, X ? d.imageWrapEl = ji(d.imageEl, `.${Z.containerClass}`)[0] : d.imageWrapEl = void 0, !d.imageWrapEl) {
          d.imageEl = void 0;
          return;
        }
        d.maxRatio = C();
      }
      if (d.imageEl) {
        const [X, le] = M();
        d.originX = X, d.originY = le, d.imageEl.style.transitionDuration = "0ms";
      }
      u = !0;
    }
  }
  function P(V) {
    if (!A(V)) return;
    const Z = e.params.zoom, X = e.zoom, le = E.findIndex((re) => re.pointerId === V.pointerId);
    le >= 0 && (E[le] = V), !(E.length < 2) && (v = !0, d.scaleMove = _(), d.imageEl && (X.scale = d.scaleMove / d.scaleStart * l, X.scale > d.maxRatio && (X.scale = d.maxRatio - 1 + (X.scale - d.maxRatio + 1) ** 0.5), X.scale < Z.minRatio && (X.scale = Z.minRatio + 1 - (Z.minRatio - X.scale + 1) ** 0.5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`));
  }
  function N(V) {
    if (!A(V) || V.pointerType === "mouse" && V.type === "pointerout") return;
    const Z = e.params.zoom, X = e.zoom, le = E.findIndex((re) => re.pointerId === V.pointerId);
    le >= 0 && E.splice(le, 1), !(!y || !v) && (y = !1, v = !1, d.imageEl && (X.scale = Math.max(Math.min(X.scale, d.maxRatio), Z.minRatio), d.imageEl.style.transitionDuration = `${e.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${X.scale})`, l = X.scale, u = !1, X.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${Z.zoomedSlideClass}`) : X.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${Z.zoomedSlideClass}`), X.scale === 1 && (d.originX = 0, d.originY = 0, d.slideEl = void 0)));
  }
  let k;
  function W() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function b() {
    clearTimeout(k), e.touchEventsData.preventTouchMoveFromPointerMove = !0, k = setTimeout(() => {
      e.destroyed || W();
    });
  }
  function G(V) {
    const Z = e.device;
    if (!d.imageEl || g.isTouched) return;
    Z.android && V.cancelable && V.preventDefault(), g.isTouched = !0;
    const X = E.length > 0 ? E[0] : V;
    g.touchesStart.x = X.pageX, g.touchesStart.y = X.pageY;
  }
  function D(V) {
    const X = V.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!A(V) || !Y(V))
      return;
    const le = e.zoom;
    if (!d.imageEl)
      return;
    if (!g.isTouched || !d.slideEl) {
      X && pe(V);
      return;
    }
    if (X) {
      pe(V);
      return;
    }
    g.isMoved || (g.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, g.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, g.startX = wl(d.imageWrapEl, "x") || 0, g.startY = wl(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
    const re = g.width * le.scale, se = g.height * le.scale;
    if (g.minX = Math.min(d.slideWidth / 2 - re / 2, 0), g.maxX = -g.minX, g.minY = Math.min(d.slideHeight / 2 - se / 2, 0), g.maxY = -g.minY, g.touchesCurrent.x = E.length > 0 ? E[0].pageX : V.pageX, g.touchesCurrent.y = E.length > 0 ? E[0].pageY : V.pageY, Math.max(Math.abs(g.touchesCurrent.x - g.touchesStart.x), Math.abs(g.touchesCurrent.y - g.touchesStart.y)) > 5 && (e.allowClick = !1), !g.isMoved && !u) {
      if (e.isHorizontal() && (Math.floor(g.minX) === Math.floor(g.startX) && g.touchesCurrent.x < g.touchesStart.x || Math.floor(g.maxX) === Math.floor(g.startX) && g.touchesCurrent.x > g.touchesStart.x)) {
        g.isTouched = !1, W();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(g.minY) === Math.floor(g.startY) && g.touchesCurrent.y < g.touchesStart.y || Math.floor(g.maxY) === Math.floor(g.startY) && g.touchesCurrent.y > g.touchesStart.y)) {
        g.isTouched = !1, W();
        return;
      }
    }
    V.cancelable && V.preventDefault(), V.stopPropagation(), b(), g.isMoved = !0;
    const be = (le.scale - l) / (d.maxRatio - e.params.zoom.minRatio), {
      originX: oe,
      originY: $e
    } = d;
    g.currentX = g.touchesCurrent.x - g.touchesStart.x + g.startX + be * (g.width - oe * 2), g.currentY = g.touchesCurrent.y - g.touchesStart.y + g.startY + be * (g.height - $e * 2), g.currentX < g.minX && (g.currentX = g.minX + 1 - (g.minX - g.currentX + 1) ** 0.8), g.currentX > g.maxX && (g.currentX = g.maxX - 1 + (g.currentX - g.maxX + 1) ** 0.8), g.currentY < g.minY && (g.currentY = g.minY + 1 - (g.minY - g.currentY + 1) ** 0.8), g.currentY > g.maxY && (g.currentY = g.maxY - 1 + (g.currentY - g.maxY + 1) ** 0.8), x.prevPositionX || (x.prevPositionX = g.touchesCurrent.x), x.prevPositionY || (x.prevPositionY = g.touchesCurrent.y), x.prevTime || (x.prevTime = Date.now()), x.x = (g.touchesCurrent.x - x.prevPositionX) / (Date.now() - x.prevTime) / 2, x.y = (g.touchesCurrent.y - x.prevPositionY) / (Date.now() - x.prevTime) / 2, Math.abs(g.touchesCurrent.x - x.prevPositionX) < 2 && (x.x = 0), Math.abs(g.touchesCurrent.y - x.prevPositionY) < 2 && (x.y = 0), x.prevPositionX = g.touchesCurrent.x, x.prevPositionY = g.touchesCurrent.y, x.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`;
  }
  function ee() {
    const V = e.zoom;
    if (E.length = 0, !d.imageEl) return;
    if (!g.isTouched || !g.isMoved) {
      g.isTouched = !1, g.isMoved = !1;
      return;
    }
    g.isTouched = !1, g.isMoved = !1;
    let Z = 300, X = 300;
    const le = x.x * Z, re = g.currentX + le, se = x.y * X, fe = g.currentY + se;
    x.x !== 0 && (Z = Math.abs((re - g.currentX) / x.x)), x.y !== 0 && (X = Math.abs((fe - g.currentY) / x.y));
    const be = Math.max(Z, X);
    g.currentX = re, g.currentY = fe;
    const oe = g.width * V.scale, $e = g.height * V.scale;
    g.minX = Math.min(d.slideWidth / 2 - oe / 2, 0), g.maxX = -g.minX, g.minY = Math.min(d.slideHeight / 2 - $e / 2, 0), g.maxY = -g.minY, g.currentX = Math.max(Math.min(g.currentX, g.maxX), g.minX), g.currentY = Math.max(Math.min(g.currentY, g.maxY), g.minY), d.imageWrapEl.style.transitionDuration = `${be}ms`, d.imageWrapEl.style.transform = `translate3d(${g.currentX}px, ${g.currentY}px,0)`;
  }
  function ae() {
    const V = e.zoom;
    d.slideEl && e.activeIndex !== e.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), V.scale = 1, l = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0);
  }
  function pe(V) {
    if (l <= 1 || !d.imageWrapEl || !A(V) || !Y(V)) return;
    const Z = s.getComputedStyle(d.imageWrapEl).transform, X = new s.DOMMatrix(Z);
    if (!p) {
      p = !0, c.x = V.clientX, c.y = V.clientY, g.startX = X.e, g.startY = X.f, g.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, g.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight;
      return;
    }
    const le = (V.clientX - c.x) * h, re = (V.clientY - c.y) * h, se = g.width * l, fe = g.height * l, be = d.slideWidth, oe = d.slideHeight, $e = Math.min(be / 2 - se / 2, 0), Be = -$e, ct = Math.min(oe / 2 - fe / 2, 0), Ut = -ct, ft = Math.max(Math.min(g.startX + le, Be), $e), Lt = Math.max(Math.min(g.startY + re, Ut), ct);
    d.imageWrapEl.style.transitionDuration = "0ms", d.imageWrapEl.style.transform = `translate3d(${ft}px, ${Lt}px, 0)`, c.x = V.clientX, c.y = V.clientY, g.startX = ft, g.startY = Lt, g.currentX = ft, g.currentY = Lt;
  }
  function te(V) {
    const Z = e.zoom, X = e.params.zoom;
    if (!d.slideEl) {
      V && V.target && (d.slideEl = V.target.closest(`.${e.params.slideClass}, swiper-slide`)), d.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = Mr(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex]);
      let Mt = d.slideEl.querySelector(`.${X.containerClass}`);
      Mt && (Mt = Mt.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = Mt, Mt ? d.imageWrapEl = ji(d.imageEl, `.${X.containerClass}`)[0] : d.imageWrapEl = void 0;
    }
    if (!d.imageEl || !d.imageWrapEl) return;
    d.maxRatio = C(), e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${X.zoomedSlideClass}`);
    let le, re, se, fe, be, oe, $e, Be, ct, Ut, ft, Lt, st, Tt, rt, St, pr, kr;
    typeof g.touchesStart.x > "u" && V ? (le = V.pageX, re = V.pageY) : (le = g.touchesStart.x, re = g.touchesStart.y);
    const Ft = l, Xt = typeof V == "number" ? V : null;
    l === 1 && Xt && (le = void 0, re = void 0, g.touchesStart.x = void 0, g.touchesStart.y = void 0);
    const qt = C();
    Z.scale = Xt || qt, l = Xt || qt, V && !(l === 1 && Xt) ? (pr = d.slideEl.offsetWidth, kr = d.slideEl.offsetHeight, se = Xf(d.slideEl).left + s.scrollX, fe = Xf(d.slideEl).top + s.scrollY, be = se + pr / 2 - le, oe = fe + kr / 2 - re, ct = d.imageEl.offsetWidth || d.imageEl.clientWidth, Ut = d.imageEl.offsetHeight || d.imageEl.clientHeight, ft = ct * Z.scale, Lt = Ut * Z.scale, st = Math.min(pr / 2 - ft / 2, 0), Tt = Math.min(kr / 2 - Lt / 2, 0), rt = -st, St = -Tt, Ft > 0 && Xt && typeof g.currentX == "number" && typeof g.currentY == "number" ? ($e = g.currentX * Z.scale / Ft, Be = g.currentY * Z.scale / Ft) : ($e = be * Z.scale, Be = oe * Z.scale), $e < st && ($e = st), $e > rt && ($e = rt), Be < Tt && (Be = Tt), Be > St && (Be = St)) : ($e = 0, Be = 0), Xt && Z.scale === 1 && (d.originX = 0, d.originY = 0), g.currentX = $e, g.currentY = Be, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${$e}px, ${Be}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${Z.scale})`;
  }
  function Ee() {
    const V = e.zoom, Z = e.params.zoom;
    if (!d.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = Mr(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex];
      let X = d.slideEl.querySelector(`.${Z.containerClass}`);
      X && (X = X.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = X, X ? d.imageWrapEl = ji(d.imageEl, `.${Z.containerClass}`)[0] : d.imageWrapEl = void 0;
    }
    !d.imageEl || !d.imageWrapEl || (d.maxRatio = C(), e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), V.scale = 1, l = 1, g.currentX = void 0, g.currentY = void 0, g.touchesStart.x = void 0, g.touchesStart.y = void 0, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${Z.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0, e.params.zoom.panOnMouseMove && (c = {
      x: 0,
      y: 0
    }, p && (p = !1, g.startX = 0, g.startY = 0)));
  }
  function U(V) {
    const Z = e.zoom;
    Z.scale && Z.scale !== 1 ? Ee() : te(V);
  }
  function J() {
    const V = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, Z = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: V,
      activeListenerWithCapture: Z
    };
  }
  function he() {
    const V = e.zoom;
    if (V.enabled) return;
    V.enabled = !0;
    const {
      passiveListener: Z,
      activeListenerWithCapture: X
    } = J();
    e.wrapperEl.addEventListener("pointerdown", B, Z), e.wrapperEl.addEventListener("pointermove", P, X), ["pointerup", "pointercancel", "pointerout"].forEach((le) => {
      e.wrapperEl.addEventListener(le, N, Z);
    }), e.wrapperEl.addEventListener("pointermove", D, X);
  }
  function me() {
    const V = e.zoom;
    if (!V.enabled) return;
    V.enabled = !1;
    const {
      passiveListener: Z,
      activeListenerWithCapture: X
    } = J();
    e.wrapperEl.removeEventListener("pointerdown", B, Z), e.wrapperEl.removeEventListener("pointermove", P, X), ["pointerup", "pointercancel", "pointerout"].forEach((le) => {
      e.wrapperEl.removeEventListener(le, N, Z);
    }), e.wrapperEl.removeEventListener("pointermove", D, X);
  }
  r("init", () => {
    e.params.zoom.enabled && he();
  }), r("destroy", () => {
    me();
  }), r("touchStart", (V, Z) => {
    e.zoom.enabled && G(Z);
  }), r("touchEnd", (V, Z) => {
    e.zoom.enabled && ee();
  }), r("doubleTap", (V, Z) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && U(Z);
  }), r("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && ae();
  }), r("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && ae();
  }), Object.assign(e.zoom, {
    enable: he,
    disable: me,
    in: te,
    out: Ee,
    toggle: U
  });
}
let Qa;
function rx() {
  const e = Rt(), n = yn();
  return {
    smoothScroll: n.documentElement && n.documentElement.style && "scrollBehavior" in n.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && n instanceof e.DocumentTouch)
  };
}
function Jd() {
  return Qa || (Qa = rx()), Qa;
}
let el;
function nx({
  userAgent: e
} = {}) {
  const n = Jd(), r = Rt(), o = r.navigator.platform, s = e || r.navigator.userAgent, l = {
    ios: !1,
    android: !1
  }, u = r.screen.width, p = r.screen.height, c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let h = s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const y = s.match(/(iPod)(.*OS\s([\d_]+))?/), v = !h && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), E = o === "Win32";
  let d = o === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !h && d && n.touch && g.indexOf(`${u}x${p}`) >= 0 && (h = s.match(/(Version)\/([\d.]+)/), h || (h = [0, 1, "13_0_0"]), d = !1), c && !E && (l.os = "android", l.android = !0), (h || v || y) && (l.os = "ios", l.ios = !0), l;
}
function Qd(e = {}) {
  return el || (el = nx(e)), el;
}
let tl;
function ix() {
  const e = Rt(), n = Qd();
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
  return tl || (tl = ix()), tl;
}
function ox({
  swiper: e,
  on: n,
  emit: r
}) {
  const o = Rt();
  let s = null, l = null;
  const u = () => {
    !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
  }, p = () => {
    !e || e.destroyed || !e.initialized || (s = new ResizeObserver((y) => {
      l = o.requestAnimationFrame(() => {
        const {
          width: v,
          height: E
        } = e;
        let d = v, g = E;
        y.forEach(({
          contentBoxSize: x,
          contentRect: I,
          target: _
        }) => {
          _ && _ !== e.el || (d = I ? I.width : (x[0] || x).inlineSize, g = I ? I.height : (x[0] || x).blockSize);
        }), (d !== v || g !== E) && u();
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
function sx({
  swiper: e,
  extendParams: n,
  on: r,
  emit: o
}) {
  const s = [], l = Rt(), u = (h, y = {}) => {
    const v = l.MutationObserver || l.WebkitMutationObserver, E = new v((d) => {
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
    E.observe(h, {
      attributes: typeof y.attributes > "u" ? !0 : y.attributes,
      childList: e.isElement || (typeof y.childList > "u" ? !0 : y).childList,
      characterData: typeof y.characterData > "u" ? !0 : y.characterData
    }), s.push(E);
  }, p = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const h = ji(e.hostEl);
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
var ax = {
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
function lx() {
  const e = this;
  let n, r;
  const o = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? n = e.params.width : n = o.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = o.clientHeight, !(n === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (n = n - parseInt(gn(o, "padding-left") || 0, 10) - parseInt(gn(o, "padding-right") || 0, 10), r = r - parseInt(gn(o, "padding-top") || 0, 10) - parseInt(gn(o, "padding-bottom") || 0, 10), Number.isNaN(n) && (n = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: n,
    height: r,
    size: e.isHorizontal() ? n : r
  }));
}
function ux() {
  const e = this;
  function n(k, W) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(W)) || 0);
  }
  const r = e.params, {
    wrapperEl: o,
    slidesEl: s,
    rtlTranslate: l,
    wrongRTL: u
  } = e, p = e.virtual && r.virtual.enabled, c = p ? e.virtual.slides.length : e.slides.length, h = Mr(s, `.${e.params.slideClass}, swiper-slide`), y = p ? e.virtual.slides.length : h.length;
  let v = [];
  const E = [], d = [];
  let g = r.slidesOffsetBefore;
  typeof g == "function" && (g = r.slidesOffsetBefore.call(e));
  let x = r.slidesOffsetAfter;
  typeof x == "function" && (x = r.slidesOffsetAfter.call(e));
  const I = e.snapGrid.length, _ = e.slidesGrid.length, C = e.size - g - x;
  let M = r.spaceBetween, R = -g, A = 0, Y = 0;
  if (typeof C > "u")
    return;
  typeof M == "string" && M.indexOf("%") >= 0 ? M = parseFloat(M.replace("%", "")) / 100 * C : typeof M == "string" && (M = parseFloat(M)), e.virtualSize = -M - g - x, h.forEach((k) => {
    l ? k.style.marginLeft = "" : k.style.marginRight = "", k.style.marginBottom = "", k.style.marginTop = "";
  }), r.centeredSlides && r.cssMode && (ti(o, "--swiper-centered-offset-before", ""), ti(o, "--swiper-centered-offset-after", "")), r.cssMode && (ti(o, "--swiper-slides-offset-before", `${g}px`), ti(o, "--swiper-slides-offset-after", `${x}px`));
  const B = r.grid && r.grid.rows > 1 && e.grid;
  B ? e.grid.initSlides(h) : e.grid && e.grid.unsetSlides();
  let P;
  const N = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter((k) => typeof r.breakpoints[k].slidesPerView < "u").length > 0;
  for (let k = 0; k < y; k += 1) {
    P = 0;
    const W = h[k];
    if (!(W && (B && e.grid.updateSlide(k, W, h), gn(W, "display") === "none"))) {
      if (p && r.slidesPerView === "auto")
        r.virtual.slidesPerViewAutoSlideSize && (P = r.virtual.slidesPerViewAutoSlideSize), P && W && (r.roundLengths && (P = Math.floor(P)), W.style[e.getDirectionLabel("width")] = `${P}px`);
      else if (r.slidesPerView === "auto") {
        N && (W.style[e.getDirectionLabel("width")] = "");
        const b = getComputedStyle(W), G = W.style.transform, D = W.style.webkitTransform;
        if (G && (W.style.transform = "none"), D && (W.style.webkitTransform = "none"), r.roundLengths)
          P = e.isHorizontal() ? El(W, "width") : El(W, "height");
        else {
          const ee = n(b, "width"), ae = n(b, "padding-left"), pe = n(b, "padding-right"), te = n(b, "margin-left"), Ee = n(b, "margin-right"), U = b.getPropertyValue("box-sizing");
          if (U && U === "border-box")
            P = ee + te + Ee;
          else {
            const {
              clientWidth: J,
              offsetWidth: he
            } = W;
            P = ee + ae + pe + te + Ee + (he - J);
          }
        }
        G && (W.style.transform = G), D && (W.style.webkitTransform = D), r.roundLengths && (P = Math.floor(P));
      } else
        P = (C - (r.slidesPerView - 1) * M) / r.slidesPerView, r.roundLengths && (P = Math.floor(P)), W && (W.style[e.getDirectionLabel("width")] = `${P}px`);
      W && (W.swiperSlideSize = P), d.push(P), r.centeredSlides ? (R = R + P / 2 + A / 2 + M, A === 0 && k !== 0 && (R = R - C / 2 - M), k === 0 && (R = R - C / 2 - M), Math.abs(R) < 1 / 1e3 && (R = 0), r.roundLengths && (R = Math.floor(R)), Y % r.slidesPerGroup === 0 && v.push(R), E.push(R)) : (r.roundLengths && (R = Math.floor(R)), (Y - Math.min(e.params.slidesPerGroupSkip, Y)) % e.params.slidesPerGroup === 0 && v.push(R), E.push(R), R = R + P + M), e.virtualSize += P + M, A = P, Y += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, C) + x, l && u && (r.effect === "slide" || r.effect === "coverflow") && (o.style.width = `${e.virtualSize + M}px`), r.setWrapperSize && (o.style[e.getDirectionLabel("width")] = `${e.virtualSize + M}px`), B && e.grid.updateWrapperSize(P, v), !r.centeredSlides) {
    const k = r.slidesPerView !== "auto" && r.slidesPerView % 1 !== 0, W = r.snapToSlideEdge && !r.loop && (r.slidesPerView === "auto" || k);
    let b = v.length;
    if (W) {
      let D;
      if (r.slidesPerView === "auto") {
        D = 1;
        let ee = 0;
        for (let ae = d.length - 1; ae >= 0 && (ee += d[ae] + (ae < d.length - 1 ? M : 0), ee <= C); ae -= 1)
          D = d.length - ae;
      } else
        D = Math.floor(r.slidesPerView);
      b = Math.max(y - D, 0);
    }
    const G = [];
    for (let D = 0; D < v.length; D += 1) {
      let ee = v[D];
      r.roundLengths && (ee = Math.floor(ee)), W ? D <= b && G.push(ee) : v[D] <= e.virtualSize - C && G.push(ee);
    }
    v = G, Math.floor(e.virtualSize - C) - Math.floor(v[v.length - 1]) > 1 && (W || v.push(e.virtualSize - C));
  }
  if (p && r.loop) {
    const k = d[0] + M;
    if (r.slidesPerGroup > 1) {
      const W = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup), b = k * r.slidesPerGroup;
      for (let G = 0; G < W; G += 1)
        v.push(v[v.length - 1] + b);
    }
    for (let W = 0; W < e.virtual.slidesBefore + e.virtual.slidesAfter; W += 1)
      r.slidesPerGroup === 1 && v.push(v[v.length - 1] + k), E.push(E[E.length - 1] + k), e.virtualSize += k;
  }
  if (v.length === 0 && (v = [0]), M !== 0) {
    const k = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    h.filter((W, b) => !r.cssMode || r.loop ? !0 : b !== h.length - 1).forEach((W) => {
      W.style[k] = `${M}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let k = 0;
    d.forEach((b) => {
      k += b + (M || 0);
    }), k -= M;
    const W = k > C ? k - C : 0;
    v = v.map((b) => b <= 0 ? -g : b > W ? W + x : b);
  }
  if (r.centerInsufficientSlides) {
    let k = 0;
    if (d.forEach((W) => {
      k += W + (M || 0);
    }), k -= M, k < C) {
      const W = (C - k) / 2;
      v.forEach((b, G) => {
        v[G] = b - W;
      }), E.forEach((b, G) => {
        E[G] = b + W;
      });
    }
  }
  if (Object.assign(e, {
    slides: h,
    snapGrid: v,
    slidesGrid: E,
    slidesSizesGrid: d
  }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
    ti(o, "--swiper-centered-offset-before", `${-v[0]}px`), ti(o, "--swiper-centered-offset-after", `${e.size / 2 - d[d.length - 1] / 2}px`);
    const k = -e.snapGrid[0], W = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((b) => b + k), e.slidesGrid = e.slidesGrid.map((b) => b + W);
  }
  if (y !== c && e.emit("slidesLengthChange"), v.length !== I && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), E.length !== _ && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !p && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
    const k = `${r.containerModifierClass}backface-hidden`, W = e.el.classList.contains(k);
    y <= r.maxBackfaceHiddenSlides ? W || e.el.classList.add(k) : W && e.el.classList.remove(k);
  }
}
function cx(e) {
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
function fx() {
  const e = this, n = e.slides, r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let o = 0; o < n.length; o += 1)
    n[o].swiperSlideOffset = (e.isHorizontal() ? n[o].offsetLeft : n[o].offsetTop) - r - e.cssOverflowAdjustment();
}
const qf = (e, n, r) => {
  n && !e.classList.contains(r) ? e.classList.add(r) : !n && e.classList.contains(r) && e.classList.remove(r);
};
function dx(e = this && this.translate || 0) {
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
    const v = (u + (r.centeredSlides ? n.minTranslate() : 0) - y) / (h.swiperSlideSize + p), E = (u - l[0] + (r.centeredSlides ? n.minTranslate() : 0) - y) / (h.swiperSlideSize + p), d = -(u - y), g = d + n.slidesSizesGrid[c], x = d >= 0 && d <= n.size - n.slidesSizesGrid[c], I = d >= 0 && d < n.size - 1 || g > 1 && g <= n.size || d <= 0 && g >= n.size;
    I && (n.visibleSlides.push(h), n.visibleSlidesIndexes.push(c)), qf(h, I, r.slideVisibleClass), qf(h, x, r.slideFullyVisibleClass), h.progress = s ? -v : v, h.originalProgress = s ? -E : E;
  }
}
function px(e) {
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
    const y = Math.abs(e - n.minTranslate()) < 1, v = Math.abs(e - n.maxTranslate()) < 1;
    l = y || s <= 0, u = v || s >= 1, y && (s = 0), v && (s = 1);
  }
  if (r.loop) {
    const y = n.getSlideIndexByData(0), v = n.getSlideIndexByData(n.slides.length - 1), E = n.slidesGrid[y], d = n.slidesGrid[v], g = n.slidesGrid[n.slidesGrid.length - 1], x = Math.abs(e);
    x >= E ? p = (x - E) / g : p = (x + g - d) / g, p > 1 && (p -= 1);
  }
  Object.assign(n, {
    progress: s,
    progressLoop: p,
    isBeginning: l,
    isEnd: u
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && n.updateSlidesProgress(e), l && !c && n.emit("reachBeginning toEdge"), u && !h && n.emit("reachEnd toEdge"), (c && !l || h && !u) && n.emit("fromEdge"), n.emit("progress", s);
}
const rl = (e, n, r) => {
  n && !e.classList.contains(r) ? e.classList.add(r) : !n && e.classList.contains(r) && e.classList.remove(r);
};
function hx() {
  const e = this, {
    slides: n,
    params: r,
    slidesEl: o,
    activeIndex: s
  } = e, l = e.virtual && r.virtual.enabled, u = e.grid && r.grid && r.grid.rows > 1, p = (v) => Mr(o, `.${r.slideClass}${v}, swiper-slide${v}`)[0];
  let c, h, y;
  if (l)
    if (r.loop) {
      let v = s - e.virtual.slidesBefore;
      v < 0 && (v = e.virtual.slides.length + v), v >= e.virtual.slides.length && (v -= e.virtual.slides.length), c = p(`[data-swiper-slide-index="${v}"]`);
    } else
      c = p(`[data-swiper-slide-index="${s}"]`);
  else
    u ? (c = n.find((v) => v.column === s), y = n.find((v) => v.column === s + 1), h = n.find((v) => v.column === s - 1)) : c = n[s];
  c && (u || (y = JS(c, `.${r.slideClass}, swiper-slide`)[0], r.loop && !y && (y = n[0]), h = ZS(c, `.${r.slideClass}, swiper-slide`)[0], r.loop && !h === 0 && (h = n[n.length - 1]))), n.forEach((v) => {
    rl(v, v === c, r.slideActiveClass), rl(v, v === y, r.slideNextClass), rl(v, v === h, r.slidePrevClass);
  }), e.emitSlidesClasses();
}
const ts = (e, n) => {
  if (!e || e.destroyed || !e.params) return;
  const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, o = n.closest(r());
  if (o) {
    let s = o.querySelector(`.${e.params.lazyPreloaderClass}`);
    !s && e.isElement && (o.shadowRoot ? s = o.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      o.shadowRoot && (s = o.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && !s.lazyPreloaderManaged && s.remove());
    })), s && !s.lazyPreloaderManaged && s.remove();
  }
}, nl = (e, n) => {
  if (!e.slides[n]) return;
  const r = e.slides[n].querySelector('[loading="lazy"]');
  r && r.removeAttribute("loading");
}, _l = (e) => {
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
      p.includes(c.column) && nl(e, h);
    });
    return;
  }
  const l = s + o - 1;
  if (e.params.rewind || e.params.loop)
    for (let u = s - n; u <= l + n; u += 1) {
      const p = (u % r + r) % r;
      (p < s || p > l) && nl(e, p);
    }
  else
    for (let u = Math.max(s - n, 0); u <= Math.min(l + n, r - 1); u += 1)
      u !== s && (u > l || u < s) && nl(e, u);
};
function gx(e) {
  const {
    slidesGrid: n,
    params: r
  } = e, o = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let l = 0; l < n.length; l += 1)
    typeof n[l + 1] < "u" ? o >= n[l] && o < n[l + 1] - (n[l + 1] - n[l]) / 2 ? s = l : o >= n[l] && o < n[l + 1] && (s = l + 1) : o >= n[l] && (s = l);
  return r.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function mx(e) {
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
  if (typeof c > "u" && (c = gx(n)), o.indexOf(r) >= 0)
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
  const v = n.grid && s.grid && s.grid.rows > 1;
  let E;
  if (n.virtual && s.virtual.enabled)
    s.loop ? E = y(c) : E = c;
  else if (v) {
    const d = n.slides.find((x) => x.column === c);
    let g = parseInt(d.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(n.slides.indexOf(d), 0)), E = Math.floor(g / s.grid.rows);
  } else if (n.slides[c]) {
    const d = n.slides[c].getAttribute("data-swiper-slide-index");
    d ? E = parseInt(d, 10) : E = c;
  } else
    E = c;
  Object.assign(n, {
    previousSnapIndex: p,
    snapIndex: h,
    previousRealIndex: u,
    realIndex: E,
    previousIndex: l,
    activeIndex: c
  }), n.initialized && _l(n), n.emit("activeIndexChange"), n.emit("snapIndexChange"), (n.initialized || n.params.runCallbacksOnInit) && (u !== E && n.emit("realIndexChange"), n.emit("slideChange"));
}
function vx(e, n) {
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
var yx = {
  updateSize: lx,
  updateSlides: ux,
  updateAutoHeight: cx,
  updateSlidesOffset: fx,
  updateSlidesProgress: dx,
  updateProgress: px,
  updateSlidesClasses: hx,
  updateActiveIndex: mx,
  updateClickedSlide: vx
};
function bx(e = this.isHorizontal() ? "x" : "y") {
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
  let u = wl(l, e);
  return u += n.cssOverflowAdjustment(), o && (u = -u), u || 0;
}
function Sx(e, n) {
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
  const v = r.maxTranslate() - r.minTranslate();
  v === 0 ? y = 0 : y = (e - r.minTranslate()) / v, y !== u && r.updateProgress(e), r.emit("setTranslate", r.translate, n);
}
function xx() {
  return -this.snapGrid[0];
}
function wx() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ex(e = 0, n = this.params.speed, r = !0, o = !0, s) {
  const l = this, {
    params: u,
    wrapperEl: p
  } = l;
  if (l.animating && u.preventInteractionOnTransition)
    return !1;
  const c = l.minTranslate(), h = l.maxTranslate();
  let y;
  if (o && e > c ? y = c : o && e < h ? y = h : y = e, l.updateProgress(y), u.cssMode) {
    const v = l.isHorizontal();
    if (n === 0)
      p[v ? "scrollLeft" : "scrollTop"] = -y;
    else {
      if (!l.support.smoothScroll)
        return Zd({
          swiper: l,
          targetPosition: -y,
          side: v ? "left" : "top"
        }), !0;
      p.scrollTo({
        [v ? "left" : "top"]: -y,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return n === 0 ? (l.setTransition(0), l.setTranslate(y), r && (l.emit("beforeTransitionStart", n, s), l.emit("transitionEnd"))) : (l.setTransition(n), l.setTranslate(y), r && (l.emit("beforeTransitionStart", n, s), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(E) {
    !l || l.destroyed || E.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, r && l.emit("transitionEnd"));
  }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0;
}
var _x = {
  getTranslate: bx,
  setTranslate: Sx,
  minTranslate: xx,
  maxTranslate: wx,
  translateTo: Ex
};
function Cx(e, n) {
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
function Tx(e = !0, n) {
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
function Mx(e = !0, n) {
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
var Ix = {
  setTransition: Cx,
  transitionStart: Tx,
  transitionEnd: Mx
};
function Ox(e = 0, n, r = !0, o, s) {
  typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let u = e;
  u < 0 && (u = 0);
  const {
    params: p,
    snapGrid: c,
    slidesGrid: h,
    previousIndex: y,
    activeIndex: v,
    rtlTranslate: E,
    wrapperEl: d,
    enabled: g
  } = l;
  if (!g && !o && !s || l.destroyed || l.animating && p.preventInteractionOnTransition)
    return !1;
  typeof n > "u" && (n = l.params.speed);
  const x = Math.min(l.params.slidesPerGroupSkip, u);
  let I = x + Math.floor((u - x) / l.params.slidesPerGroup);
  I >= c.length && (I = c.length - 1);
  const _ = -c[I];
  if (p.normalizeSlideIndex)
    for (let B = 0; B < h.length; B += 1) {
      const P = -Math.floor(_ * 100), N = Math.floor(h[B] * 100), k = Math.floor(h[B + 1] * 100);
      typeof h[B + 1] < "u" ? P >= N && P < k - (k - N) / 2 ? u = B : P >= N && P < k && (u = B + 1) : P >= N && (u = B);
    }
  if (l.initialized && u !== v && (!l.allowSlideNext && (E ? _ > l.translate && _ > l.minTranslate() : _ < l.translate && _ < l.minTranslate()) || !l.allowSlidePrev && _ > l.translate && _ > l.maxTranslate() && (v || 0) !== u))
    return !1;
  u !== (y || 0) && r && l.emit("beforeSlideChangeStart"), l.updateProgress(_);
  let C;
  u > v ? C = "next" : u < v ? C = "prev" : C = "reset";
  const M = l.virtual && l.params.virtual.enabled;
  if (!(M && s) && (E && -_ === l.translate || !E && _ === l.translate))
    return l.updateActiveIndex(u), p.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), p.effect !== "slide" && l.setTranslate(_), C !== "reset" && (l.transitionStart(r, C), l.transitionEnd(r, C)), !1;
  if (p.cssMode) {
    const B = l.isHorizontal(), P = E ? _ : -_;
    if (n === 0)
      M && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), M && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        d[B ? "scrollLeft" : "scrollTop"] = P;
      })) : d[B ? "scrollLeft" : "scrollTop"] = P, M && requestAnimationFrame(() => {
        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1;
      });
    else {
      if (!l.support.smoothScroll)
        return Zd({
          swiper: l,
          targetPosition: P,
          side: B ? "left" : "top"
        }), !0;
      d.scrollTo({
        [B ? "left" : "top"]: P,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const Y = ep().isSafari;
  return M && !s && Y && l.isElement && l.virtual.update(!1, !1, u), l.setTransition(n), l.setTranslate(_), l.updateActiveIndex(u), l.updateSlidesClasses(), l.emit("beforeTransitionStart", n, o), l.transitionStart(r, C), n === 0 ? l.transitionEnd(r, C) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(P) {
    !l || l.destroyed || P.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(r, C));
  }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0;
}
function Ax(e = 0, n, r = !0, o) {
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
        const x = u * s.params.grid.rows;
        p = s.slides.find((I) => I.getAttribute("data-swiper-slide-index") * 1 === x).column;
      } else
        p = s.getSlideIndexByData(u);
      const c = l ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, {
        centeredSlides: h,
        slidesOffsetBefore: y,
        slidesOffsetAfter: v
      } = s.params, E = h || !!y || !!v;
      let d = s.params.slidesPerView;
      d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)), E && d % 2 === 0 && (d = d + 1));
      let g = c - p < d;
      if (E && (g = g || p < Math.ceil(d / 2)), o && E && s.params.slidesPerView !== "auto" && !l && (g = !1), g) {
        const x = E ? p < s.activeIndex ? "prev" : "next" : p - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({
          direction: x,
          slideTo: !0,
          activeSlideIndex: x === "next" ? p + 1 : p - c + 1,
          slideRealIndex: x === "next" ? s.realIndex : void 0
        });
      }
      if (l) {
        const x = u * s.params.grid.rows;
        u = s.slides.find((I) => I.getAttribute("data-swiper-slide-index") * 1 === x).column;
      } else
        u = s.getSlideIndexByData(u);
    }
  return requestAnimationFrame(() => {
    s.slideTo(u, n, r, o);
  }), s;
}
function zx(e, n = !0, r) {
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
function Px(e, n = !0, r) {
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
  const v = p ? o.translate : -o.translate;
  function E(C) {
    return C < 0 ? -Math.floor(Math.abs(C)) : Math.floor(C);
  }
  const d = E(v), g = l.map((C) => E(C)), x = s.freeMode && s.freeMode.enabled;
  let I = l[g.indexOf(d) - 1];
  if (typeof I > "u" && (s.cssMode || x)) {
    let C;
    l.forEach((M, R) => {
      d >= M && (C = R);
    }), typeof C < "u" && (I = x ? l[C] : l[C > 0 ? C - 1 : C]);
  }
  let _ = 0;
  if (typeof I < "u" && (_ = u.indexOf(I), _ < 0 && (_ = o.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (_ = _ - o.slidesPerViewDynamic("previous", !0) + 1, _ = Math.max(_, 0))), s.rewind && o.isBeginning) {
    const C = o.params.virtual && o.params.virtual.enabled && o.virtual ? o.virtual.slides.length - 1 : o.slides.length - 1;
    return o.slideTo(C, e, n, r);
  } else if (s.loop && o.activeIndex === 0 && s.cssMode)
    return requestAnimationFrame(() => {
      o.slideTo(_, e, n, r);
    }), !0;
  return o.slideTo(_, e, n, r);
}
function Rx(e, n = !0, r) {
  const o = this;
  if (!o.destroyed)
    return typeof e > "u" && (e = o.params.speed), o.slideTo(o.activeIndex, e, n, r);
}
function Lx(e, n = !0, r, o = 0.5) {
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
function $x() {
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
    l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), n.centeredSlides ? e.slideToLoop(l) : s > (p ? (e.slides.length - o) / 2 - (e.params.grid.rows - 1) : e.slides.length - o) ? (e.loopFix(), s = e.getSlideIndex(Mr(r, `${u}[data-swiper-slide-index="${l}"]`)[0]), Kd(() => {
      e.slideTo(s);
    })) : e.slideTo(s);
  } else
    e.slideTo(s);
}
var kx = {
  slideTo: Ox,
  slideToLoop: Ax,
  slideNext: zx,
  slidePrev: Px,
  slideReset: Rx,
  slideToClosest: Lx,
  slideToClickedSlide: $x
};
function Dx(e, n) {
  const r = this, {
    params: o,
    slidesEl: s
  } = r;
  if (!o.loop || r.virtual && r.params.virtual.enabled) return;
  const l = () => {
    Mr(s, `.${o.slideClass}, swiper-slide`).forEach((g, x) => {
      g.setAttribute("data-swiper-slide-index", x);
    });
  }, u = () => {
    const d = Mr(s, `.${o.slideBlankClass}`);
    d.forEach((g) => {
      g.remove();
    }), d.length > 0 && (r.recalcSlides(), r.updateSlides());
  }, p = r.grid && o.grid && o.grid.rows > 1;
  o.loopAddBlankSlides && (o.slidesPerGroup > 1 || p) && u();
  const c = o.slidesPerGroup * (p ? o.grid.rows : 1), h = r.slides.length % c !== 0, y = p && r.slides.length % o.grid.rows !== 0, v = (d) => {
    for (let g = 0; g < d; g += 1) {
      const x = r.isElement ? as("swiper-slide", [o.slideBlankClass]) : as("div", [o.slideClass, o.slideBlankClass]);
      r.slidesEl.append(x);
    }
  };
  if (h) {
    if (o.loopAddBlankSlides) {
      const d = c - r.slides.length % c;
      v(d), r.recalcSlides(), r.updateSlides();
    } else
      ss("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    l();
  } else if (y) {
    if (o.loopAddBlankSlides) {
      const d = o.grid.rows - r.slides.length % o.grid.rows;
      v(d), r.recalcSlides(), r.updateSlides();
    } else
      ss("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    l();
  } else
    l();
  const E = o.centeredSlides || !!o.slidesOffsetBefore || !!o.slidesOffsetAfter;
  r.loopFix({
    slideRealIndex: e,
    direction: E ? void 0 : "next",
    initial: n
  });
}
function Bx({
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
    allowSlideNext: v,
    slidesEl: E,
    params: d
  } = c, {
    centeredSlides: g,
    slidesOffsetBefore: x,
    slidesOffsetAfter: I,
    initialSlide: _
  } = d, C = g || !!x || !!I;
  if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && d.virtual.enabled) {
    n && (!C && c.snapIndex === 0 ? c.slideTo(c.virtual.slides.length, 0, !1, !0) : C && c.snapIndex < d.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)), c.allowSlidePrev = y, c.allowSlideNext = v, c.emit("loopFix");
    return;
  }
  let M = d.slidesPerView;
  M === "auto" ? M = c.slidesPerViewDynamic() : (M = Math.ceil(parseFloat(d.slidesPerView, 10)), C && M % 2 === 0 && (M = M + 1));
  const R = d.slidesPerGroupAuto ? M : d.slidesPerGroup;
  let A = C ? Math.max(R, Math.ceil(M / 2)) : R;
  A % R !== 0 && (A += R - A % R), A += d.loopAdditionalSlides, c.loopedSlides = A;
  const Y = c.grid && d.grid && d.grid.rows > 1;
  h.length < M + A || c.params.effect === "cards" && h.length < M + A * 2 ? ss("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : Y && d.grid.fill === "row" && ss("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const B = [], P = [], N = Y ? Math.ceil(h.length / d.grid.rows) : h.length, k = l && N - _ < M && !C;
  let W = k ? _ : c.activeIndex;
  typeof s > "u" ? s = c.getSlideIndex(h.find((te) => te.classList.contains(d.slideActiveClass))) : W = s;
  const b = r === "next" || !r, G = r === "prev" || !r;
  let D = 0, ee = 0;
  const pe = (Y ? h[s].column : s) + (C && typeof o > "u" ? -M / 2 + 0.5 : 0);
  if (pe < A) {
    D = Math.max(A - pe, R);
    for (let te = 0; te < A - pe; te += 1) {
      const Ee = te - Math.floor(te / N) * N;
      if (Y) {
        const U = N - Ee - 1;
        for (let J = h.length - 1; J >= 0; J -= 1)
          h[J].column === U && B.push(J);
      } else
        B.push(N - Ee - 1);
    }
  } else if (pe + M > N - A) {
    ee = Math.max(pe - (N - A * 2), R), k && (ee = Math.max(ee, M - N + _ + 1));
    for (let te = 0; te < ee; te += 1) {
      const Ee = te - Math.floor(te / N) * N;
      Y ? h.forEach((U, J) => {
        U.column === Ee && P.push(J);
      }) : P.push(Ee);
    }
  }
  if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
    c.__preventObserver__ = !1;
  }), c.params.effect === "cards" && h.length < M + A * 2 && (P.includes(s) && P.splice(P.indexOf(s), 1), B.includes(s) && B.splice(B.indexOf(s), 1)), G && B.forEach((te) => {
    h[te].swiperLoopMoveDOM = !0, E.prepend(h[te]), h[te].swiperLoopMoveDOM = !1;
  }), b && P.forEach((te) => {
    h[te].swiperLoopMoveDOM = !0, E.append(h[te]), h[te].swiperLoopMoveDOM = !1;
  }), c.recalcSlides(), d.slidesPerView === "auto" ? c.updateSlides() : Y && (B.length > 0 && G || P.length > 0 && b) && c.slides.forEach((te, Ee) => {
    c.grid.updateSlide(Ee, te, c.slides);
  }), d.watchSlidesProgress && c.updateSlidesOffset(), n) {
    if (B.length > 0 && G) {
      if (typeof e > "u") {
        const te = c.slidesGrid[W], U = c.slidesGrid[W + D] - te;
        p ? c.setTranslate(c.translate - U) : (c.slideTo(W + Math.ceil(D), 0, !1, !0), o && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - U, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - U));
      } else if (o) {
        const te = Y ? B.length / d.grid.rows : B.length;
        c.slideTo(c.activeIndex + te, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate;
      }
    } else if (P.length > 0 && b)
      if (typeof e > "u") {
        const te = c.slidesGrid[W], U = c.slidesGrid[W - ee] - te;
        p ? c.setTranslate(c.translate - U) : (c.slideTo(W - ee, 0, !1, !0), o && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - U, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - U));
      } else {
        const te = Y ? P.length / d.grid.rows : P.length;
        c.slideTo(c.activeIndex - te, 0, !1, !0);
      }
  }
  if (c.allowSlidePrev = y, c.allowSlideNext = v, c.controller && c.controller.control && !u) {
    const te = {
      slideRealIndex: e,
      direction: r,
      setTranslate: o,
      activeSlideIndex: s,
      byController: !0
    };
    Array.isArray(c.controller.control) ? c.controller.control.forEach((Ee) => {
      !Ee.destroyed && Ee.params.loop && Ee.loopFix({
        ...te,
        slideTo: Ee.params.slidesPerView === d.slidesPerView ? n : !1
      });
    }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
      ...te,
      slideTo: c.controller.control.params.slidesPerView === d.slidesPerView ? n : !1
    });
  }
  c.emit("loopFix");
}
function Nx() {
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
var Wx = {
  loopCreate: Dx,
  loopFix: Bx,
  loopDestroy: Nx
};
function Vx(e) {
  const n = this;
  if (!n.params.simulateTouch || n.params.watchOverflow && n.isLocked || n.params.cssMode) return;
  const r = n.params.touchEventsTarget === "container" ? n.el : n.wrapperEl;
  n.isElement && (n.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", n.isElement && requestAnimationFrame(() => {
    n.__preventObserver__ = !1;
  });
}
function Fx() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var Gx = {
  setGrabCursor: Vx,
  unsetGrabCursor: Fx
};
function Yx(e, n = this) {
  function r(o) {
    if (!o || o === yn() || o === Rt()) return null;
    o.assignedSlot && (o = o.assignedSlot);
    const s = o.closest(e);
    return !s && !o.getRootNode ? null : s || r(o.getRootNode().host);
  }
  return r(n);
}
function Kf(e, n, r) {
  const o = Rt(), {
    params: s
  } = e, l = s.edgeSwipeDetection, u = s.edgeSwipeThreshold;
  return l && (r <= u || r >= o.innerWidth - u) ? l === "prevent" ? (n.preventDefault(), !0) : !1 : !0;
}
function jx(e) {
  const n = this, r = yn();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  const s = n.touchEventsData;
  if (o.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== o.pointerId)
      return;
    s.pointerId = o.pointerId;
  } else o.type === "touchstart" && o.targetTouches.length === 1 && (s.touchId = o.targetTouches[0].identifier);
  if (o.type === "touchstart") {
    Kf(n, o, o.targetTouches[0].pageX);
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
  if (l.touchEventsTarget === "wrapper" && !KS(c, n.wrapperEl) || "which" in o && o.which === 3 || "button" in o && o.button > 0 || s.isTouched && s.isMoved) return;
  const h = !!l.noSwipingClass && l.noSwipingClass !== "", y = o.composedPath ? o.composedPath() : o.path;
  h && o.target && o.target.shadowRoot && y && (c = y[0]);
  const v = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, E = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (E ? Yx(v, c) : c.closest(v))) {
    n.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !c.closest(l.swipeHandler))
    return;
  u.currentX = o.pageX, u.currentY = o.pageY;
  const d = u.currentX, g = u.currentY;
  if (!Kf(n, o, d))
    return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), u.startX = d, u.startY = g, s.touchStartTime = os(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, l.threshold > 0 && (s.allowThresholdMove = !1);
  let x = !0;
  c.matches(s.focusableElements) && (x = !1, c.nodeName === "SELECT" && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && (o.pointerType === "mouse" || o.pointerType !== "mouse" && !c.matches(s.focusableElements)) && r.activeElement.blur();
  const I = x && n.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || I) && !c.isContentEditable && o.preventDefault(), l.freeMode && l.freeMode.enabled && n.freeMode && n.animating && !l.cssMode && n.freeMode.onTouchStart(), n.emit("touchStart", o);
}
function Hx(e) {
  const n = yn(), r = this, o = r.touchEventsData, {
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
    if (h = [...c.changedTouches].find((A) => A.identifier === o.touchId), !h || h.identifier !== o.touchId) return;
  } else
    h = c;
  if (!o.isTouched) {
    o.startMoving && o.isScrolling && r.emit("touchMoveOpposite", c);
    return;
  }
  const y = h.pageX, v = h.pageY;
  if (c.preventedByNestedSwiper) {
    l.startX = y, l.startY = v;
    return;
  }
  if (!r.allowTouchMove) {
    c.target.matches(o.focusableElements) || (r.allowClick = !1), o.isTouched && (Object.assign(l, {
      startX: y,
      startY: v,
      currentX: y,
      currentY: v
    }), o.touchStartTime = os());
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop)
    if (r.isVertical()) {
      if (v < l.startY && r.translate <= r.maxTranslate() || v > l.startY && r.translate >= r.minTranslate()) {
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
  o.allowTouchCallbacks && r.emit("touchMove", c), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = y, l.currentY = v;
  const E = l.currentX - l.startX, d = l.currentY - l.startY;
  if (r.params.threshold && Math.sqrt(E ** 2 + d ** 2) < r.params.threshold) return;
  if (typeof o.isScrolling > "u") {
    let A;
    r.isHorizontal() && l.currentY === l.startY || r.isVertical() && l.currentX === l.startX ? o.isScrolling = !1 : E * E + d * d >= 25 && (A = Math.atan2(Math.abs(d), Math.abs(E)) * 180 / Math.PI, o.isScrolling = r.isHorizontal() ? A > s.touchAngle : 90 - A > s.touchAngle);
  }
  if (o.isScrolling && r.emit("touchMoveOpposite", c), typeof o.startMoving > "u" && (l.currentX !== l.startX || l.currentY !== l.startY) && (o.startMoving = !0), o.isScrolling || c.type === "touchmove" && o.preventTouchMoveFromPointerMove) {
    o.isTouched = !1;
    return;
  }
  if (!o.startMoving)
    return;
  r.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation();
  let g = r.isHorizontal() ? E : d, x = r.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  s.oneWayMovement && (g = Math.abs(g) * (u ? 1 : -1), x = Math.abs(x) * (u ? 1 : -1)), l.diff = g, g *= s.touchRatio, u && (g = -g, x = -x);
  const I = r.touchesDirection;
  r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = x > 0 ? "prev" : "next";
  const _ = r.params.loop && !s.cssMode, C = r.touchesDirection === "next" && r.allowSlideNext || r.touchesDirection === "prev" && r.allowSlidePrev;
  if (!o.isMoved) {
    if (_ && C && r.loopFix({
      direction: r.swipeDirection
    }), o.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
      const A = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      r.wrapperEl.dispatchEvent(A);
    }
    o.allowMomentumBounce = !1, s.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", c);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), s._loopSwapReset !== !1 && o.isMoved && o.allowThresholdMove && I !== r.touchesDirection && _ && C && Math.abs(g) >= 1) {
    Object.assign(l, {
      startX: y,
      startY: v,
      currentX: y,
      currentY: v,
      startTranslate: o.currentTranslate
    }), o.loopSwapReset = !0, o.startTranslate = o.currentTranslate;
    return;
  }
  r.emit("sliderMove", c), o.isMoved = !0, o.currentTranslate = g + o.startTranslate;
  let M = !0, R = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (R = 0), g > 0 ? (_ && C && o.allowThresholdMove && o.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - (s.slidesPerView !== "auto" && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), o.currentTranslate > r.minTranslate() && (M = !1, s.resistance && (o.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + o.startTranslate + g) ** R))) : g < 0 && (_ && C && o.allowThresholdMove && o.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + (s.slidesPerView !== "auto" && r.slides.length - s.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: r.slides.length - (s.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
  }), o.currentTranslate < r.maxTranslate() && (M = !1, s.resistance && (o.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - o.startTranslate - g) ** R))), M && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (o.currentTranslate = o.startTranslate), s.threshold > 0)
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
function Ux(e) {
  const n = this, r = n.touchEventsData;
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let s;
  if (o.type === "touchend" || o.type === "touchcancel") {
    if (s = [...o.changedTouches].find((A) => A.identifier === r.touchId), !s || s.identifier !== r.touchId) return;
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
  const v = os(), E = v - r.touchStartTime;
  if (n.allowClick) {
    const A = o.path || o.composedPath && o.composedPath();
    n.updateClickedSlide(A && A[0] || o.target, A), n.emit("tap click", o), E < 300 && v - r.lastClickTime < 300 && n.emit("doubleTap doubleClick", o);
  }
  if (r.lastClickTime = os(), Kd(() => {
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
  let x = 0, I = n.slidesSizesGrid[0];
  for (let A = 0; A < h.length; A += A < u.slidesPerGroupSkip ? 1 : u.slidesPerGroup) {
    const Y = A < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup;
    typeof h[A + Y] < "u" ? (g || d >= h[A] && d < h[A + Y]) && (x = A, I = h[A + Y] - h[A]) : (g || d >= h[A]) && (x = A, I = h[h.length - 1] - h[h.length - 2]);
  }
  let _ = null, C = null;
  u.rewind && (n.isBeginning ? C = u.virtual && u.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1 : n.isEnd && (_ = 0));
  const M = (d - h[x]) / I, R = x < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup;
  if (E > u.longSwipesMs) {
    if (!u.longSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.swipeDirection === "next" && (M >= u.longSwipesRatio ? n.slideTo(u.rewind && n.isEnd ? _ : x + R) : n.slideTo(x)), n.swipeDirection === "prev" && (M > 1 - u.longSwipesRatio ? n.slideTo(x + R) : C !== null && M < 0 && Math.abs(M) > u.longSwipesRatio ? n.slideTo(C) : n.slideTo(x));
  } else {
    if (!u.shortSwipes) {
      n.slideTo(n.activeIndex);
      return;
    }
    n.navigation && (o.target === n.navigation.nextEl || o.target === n.navigation.prevEl) ? o.target === n.navigation.nextEl ? n.slideTo(x + R) : n.slideTo(x) : (n.swipeDirection === "next" && n.slideTo(_ !== null ? _ : x + R), n.swipeDirection === "prev" && n.slideTo(C !== null ? C : x));
  }
}
function Zf() {
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
function Xx(e) {
  const n = this;
  n.enabled && (n.allowClick || (n.params.preventClicks && e.preventDefault(), n.params.preventClicksPropagation && n.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function qx() {
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
function Kx(e) {
  const n = this;
  ts(n, e.target), !(n.params.cssMode || n.params.slidesPerView !== "auto" && !n.params.autoHeight) && n.update();
}
function Zx() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const rp = (e, n) => {
  const r = yn(), {
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
  }), (o.preventClicks || o.preventClicksPropagation) && s[c]("click", e.onClick, !0), o.cssMode && l[c]("scroll", e.onScroll), o.updateOnWindowResize ? e[h](u.ios || u.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Zf, !0) : e[h]("observerUpdate", Zf, !0), s[c]("load", e.onLoad, {
    capture: !0
  }));
};
function Jx() {
  const e = this, {
    params: n
  } = e;
  e.onTouchStart = jx.bind(e), e.onTouchMove = Hx.bind(e), e.onTouchEnd = Ux.bind(e), e.onDocumentTouchStart = Zx.bind(e), n.cssMode && (e.onScroll = qx.bind(e)), e.onClick = Xx.bind(e), e.onLoad = Kx.bind(e), rp(e, "on");
}
function Qx() {
  rp(this, "off");
}
var e1 = {
  attachEvents: Jx,
  detachEvents: Qx
};
const Jf = (e, n) => e.grid && n.grid && n.grid.rows > 1;
function t1() {
  const e = this, {
    realIndex: n,
    initialized: r,
    params: o,
    el: s
  } = e, l = o.breakpoints;
  if (!l || l && Object.keys(l).length === 0) return;
  const u = yn(), p = o.breakpointsBase === "window" || !o.breakpointsBase ? o.breakpointsBase : "container", c = ["window", "container"].includes(o.breakpointsBase) || !o.breakpointsBase ? e.el : u.querySelector(o.breakpointsBase), h = e.getBreakpoint(l, p, c);
  if (!h || e.currentBreakpoint === h) return;
  const v = (h in l ? l[h] : void 0) || e.originalParams, E = Jf(e, o), d = Jf(e, v), g = e.params.grabCursor, x = v.grabCursor, I = o.enabled;
  E && !d ? (s.classList.remove(`${o.containerModifierClass}grid`, `${o.containerModifierClass}grid-column`), e.emitContainerClasses()) : !E && d && (s.classList.add(`${o.containerModifierClass}grid`), (v.grid.fill && v.grid.fill === "column" || !v.grid.fill && o.grid.fill === "column") && s.classList.add(`${o.containerModifierClass}grid-column`), e.emitContainerClasses()), g && !x ? e.unsetGrabCursor() : !g && x && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((Y) => {
    if (typeof v[Y] > "u") return;
    const B = o[Y] && o[Y].enabled, P = v[Y] && v[Y].enabled;
    B && !P && e[Y].disable(), !B && P && e[Y].enable();
  });
  const _ = v.direction && v.direction !== o.direction, C = o.loop && (v.slidesPerView !== o.slidesPerView || _), M = o.loop;
  _ && r && e.changeDirection(), cr(e.params, v);
  const R = e.params.enabled, A = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), I && !R ? e.disable() : !I && R && e.enable(), e.currentBreakpoint = h, e.emit("_beforeBreakpoint", v), r && (C ? (e.loopDestroy(), e.loopCreate(n), e.updateSlides()) : !M && A ? (e.loopCreate(n), e.updateSlides()) : M && !A && e.loopDestroy()), e.emit("breakpoint", v);
}
function r1(e, n = "window", r) {
  if (!e || n === "container" && !r) return;
  let o = !1;
  const s = Rt(), l = n === "window" ? s.innerHeight : r.clientHeight, u = Object.keys(e).map((p) => {
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
var n1 = {
  setBreakpoint: t1,
  getBreakpoint: r1
};
function i1(e, n) {
  const r = [];
  return e.forEach((o) => {
    typeof o == "object" ? Object.keys(o).forEach((s) => {
      o[s] && r.push(n + s);
    }) : typeof o == "string" && r.push(n + o);
  }), r;
}
function o1() {
  const e = this, {
    classNames: n,
    params: r,
    rtl: o,
    el: s,
    device: l
  } = e, u = i1(["initialized", r.direction, {
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
function s1() {
  const e = this, {
    el: n,
    classNames: r
  } = e;
  !n || typeof n == "string" || (n.classList.remove(...r), e.emitContainerClasses());
}
var a1 = {
  addClasses: o1,
  removeClasses: s1
};
function l1() {
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
var u1 = {
  checkOverflow: l1
}, Cl = {
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
function c1(e, n) {
  return function(o = {}) {
    const s = Object.keys(o)[0], l = o[s];
    if (typeof l != "object" || l === null) {
      cr(n, o);
      return;
    }
    if (e[s] === !0 && (e[s] = {
      enabled: !0
    }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in l)) {
      cr(n, o);
      return;
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = {
      enabled: !1
    }), cr(n, o);
  };
}
const il = {
  eventsEmitter: ax,
  update: yx,
  translate: _x,
  transition: Ix,
  slide: kx,
  loop: Wx,
  grabCursor: Gx,
  events: e1,
  breakpoints: n1,
  checkOverflow: u1,
  classes: a1
}, ol = {};
let $l = class tn {
  constructor(...n) {
    let r, o;
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? o = n[0] : [r, o] = n, o || (o = {}), o = cr({}, o), r && !o.el && (o.el = r);
    const s = yn();
    if (o.el && typeof o.el == "string" && s.querySelectorAll(o.el).length > 1) {
      const c = [];
      return s.querySelectorAll(o.el).forEach((h) => {
        const y = cr({}, o, {
          el: h
        });
        c.push(new tn(y));
      }), c;
    }
    const l = this;
    l.__swiper__ = !0, l.support = Jd(), l.device = Qd({
      userAgent: o.userAgent
    }), l.browser = ep(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], o.modules && Array.isArray(o.modules) && o.modules.forEach((c) => {
      typeof c == "function" && l.modules.indexOf(c) < 0 && l.modules.push(c);
    });
    const u = {};
    l.modules.forEach((c) => {
      c({
        params: o,
        swiper: l,
        extendParams: c1(o, u),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const p = cr({}, Cl, u);
    return l.params = cr({}, p, ol, o), l.originalParams = cr({}, l.params), l.passedParams = cr({}, o), l.params && l.params.on && Object.keys(l.params.on).forEach((c) => {
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
    } = this, s = Mr(r, `.${o.slideClass}, swiper-slide`), l = ls(s[0]);
    return ls(n) - l;
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
    n.slides = Mr(r, `.${o.slideClass}, swiper-slide`);
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
      let v = l[h] ? Math.ceil(l[h].swiperSlideSize) : 0, E;
      for (let d = h + 1; d < l.length; d += 1)
        l[d] && !E && (v += Math.ceil(l[d].swiperSlideSize), y += 1, v > c && (E = !0));
      for (let d = h - 1; d >= 0; d -= 1)
        l[d] && !E && (v += l[d].swiperSlideSize, y += 1, v > c && (E = !0));
    } else if (n === "current")
      for (let v = h + 1; v < l.length; v += 1)
        (r ? u[v] + p[v] - u[h] < c : u[v] - u[h] < c) && (y += 1);
    else
      for (let v = h - 1; v >= 0; v -= 1)
        u[h] - u[v] < c && (y += 1);
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
      u.complete && ts(n, u);
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
    let u = o && o.shadowRoot && o.shadowRoot.querySelector ? o.shadowRoot.querySelector(s()) : Mr(o, s())[0];
    return !u && r.params.createElements && (u = as("div", r.params.wrapperClass), o.append(u), Mr(o, `.${r.params.slideClass}`).forEach((p) => {
      u.append(p);
    })), Object.assign(r, {
      el: o,
      wrapperEl: u,
      slidesEl: r.isElement && !o.parentNode.host.slideSlots ? o.parentNode.host : u,
      hostEl: r.isElement ? o.parentNode.host : o,
      mounted: !0,
      // RTL
      rtl: o.dir.toLowerCase() === "rtl" || gn(o, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (o.dir.toLowerCase() === "rtl" || gn(o, "direction") === "rtl"),
      wrongRTL: gn(u, "display") === "-webkit-box"
    }), !0;
  }
  init(n) {
    const r = this;
    if (r.initialized || r.mount(n) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(void 0, !0), r.attachEvents();
    const s = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && s.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((l) => {
      l.complete ? ts(r, l) : l.addEventListener("load", (u) => {
        ts(r, u.target);
      });
    }), _l(r), r.initialized = !0, _l(r), r.emit("init"), r.emit("afterInit"), r;
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
    }), n !== !1 && (o.el && typeof o.el != "string" && (o.el.swiper = null), HS(o)), o.destroyed = !0), null;
  }
  static extendDefaults(n) {
    cr(ol, n);
  }
  static get extendedDefaults() {
    return ol;
  }
  static get defaults() {
    return Cl;
  }
  static installModule(n) {
    tn.prototype.__modules__ || (tn.prototype.__modules__ = []);
    const r = tn.prototype.__modules__;
    typeof n == "function" && r.indexOf(n) < 0 && r.push(n);
  }
  static use(n) {
    return Array.isArray(n) ? (n.forEach((r) => tn.installModule(r)), tn) : (tn.installModule(n), tn);
  }
};
Object.keys(il).forEach((e) => {
  Object.keys(il[e]).forEach((n) => {
    $l.prototype[n] = il[e][n];
  });
});
$l.use([ox, sx]);
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
function $n(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function ci(e, n) {
  const r = ["__proto__", "constructor", "prototype"];
  Object.keys(n).filter((o) => r.indexOf(o) < 0).forEach((o) => {
    typeof e[o] > "u" ? e[o] = n[o] : $n(n[o]) && $n(e[o]) && Object.keys(n[o]).length > 0 ? n[o].__swiper__ ? e[o] = n[o] : ci(e[o], n[o]) : e[o] = n[o];
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
function f1(e = "") {
  return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function d1({
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
    navigation: v,
    scrollbar: E,
    virtual: d,
    thumbs: g
  } = e;
  let x, I, _, C, M, R, A, Y;
  o.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && h.thumbs && (!h.thumbs.swiper || h.thumbs.swiper.destroyed) && (x = !0), o.includes("controller") && r.controller && r.controller.control && h.controller && !h.controller.control && (I = !0), o.includes("pagination") && r.pagination && (r.pagination.el || p) && (h.pagination || h.pagination === !1) && y && !y.el && (_ = !0), o.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || u) && (h.scrollbar || h.scrollbar === !1) && E && !E.el && (C = !0), o.includes("navigation") && r.navigation && (r.navigation.prevEl || l) && (r.navigation.nextEl || s) && (h.navigation || h.navigation === !1) && v && !v.prevEl && !v.nextEl && (M = !0);
  const B = (P) => {
    e[P] && (e[P].destroy(), P === "navigation" ? (e.isElement && (e[P].prevEl.remove(), e[P].nextEl.remove()), h[P].prevEl = void 0, h[P].nextEl = void 0, e[P].prevEl = void 0, e[P].nextEl = void 0) : (e.isElement && e[P].el.remove(), h[P].el = void 0, e[P].el = void 0));
  };
  o.includes("loop") && e.isElement && (h.loop && !r.loop ? R = !0 : !h.loop && r.loop ? A = !0 : Y = !0), c.forEach((P) => {
    if ($n(h[P]) && $n(r[P]))
      Object.assign(h[P], r[P]), (P === "navigation" || P === "pagination" || P === "scrollbar") && "enabled" in r[P] && !r[P].enabled && B(P);
    else {
      const N = r[P];
      (N === !0 || N === !1) && (P === "navigation" || P === "pagination" || P === "scrollbar") ? N === !1 && B(P) : h[P] = r[P];
    }
  }), c.includes("controller") && !I && e.controller && e.controller.control && h.controller && h.controller.control && (e.controller.control = h.controller.control), o.includes("children") && n && d && h.virtual.enabled ? (d.slides = n, d.update(!0)) : o.includes("virtual") && d && h.virtual.enabled && (n && (d.slides = n), d.update(!0)), o.includes("children") && n && h.loop && (Y = !0), x && g.init() && g.update(!0), I && (e.controller.control = h.controller.control), _ && (e.isElement && (!p || typeof p == "string") && (p = document.createElement("div"), p.classList.add("swiper-pagination"), p.part.add("pagination"), e.el.appendChild(p)), p && (h.pagination.el = p), y.init(), y.render(), y.update()), C && (e.isElement && (!u || typeof u == "string") && (u = document.createElement("div"), u.classList.add("swiper-scrollbar"), u.part.add("scrollbar"), e.el.appendChild(u)), u && (h.scrollbar.el = u), E.init(), E.updateSize(), E.setTranslate()), M && (e.isElement && ((!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-next"), us(s, e.navigation.arrowSvg), s.part.add("button-next"), e.el.appendChild(s)), (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-prev"), us(l, e.navigation.arrowSvg), l.part.add("button-prev"), e.el.appendChild(l))), s && (h.navigation.nextEl = s), l && (h.navigation.prevEl = l), v.init(), v.update()), o.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), o.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), o.includes("direction") && e.changeDirection(r.direction, !1), (R || Y) && e.loopDestroy(), (A || Y) && e.loopCreate(), e.update();
}
function p1(e = {}, n = !0) {
  const r = {
    on: {}
  }, o = {}, s = {};
  ci(r, Cl), r._emitClasses = !0, r.init = !1;
  const l = {}, u = np.map((c) => c.replace(/_/, "")), p = Object.assign({}, e);
  return Object.keys(p).forEach((c) => {
    typeof e[c] > "u" || (u.indexOf(c) >= 0 ? $n(e[c]) ? (r[c] = {}, s[c] = {}, ci(r[c], e[c]), ci(s[c], e[c])) : (r[c] = e[c], s[c] = e[c]) : c.search(/on[A-Z]/) === 0 && typeof e[c] == "function" ? n ? o[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : r.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c] : l[c] = e[c]);
  }), ["navigation", "pagination", "scrollbar"].forEach((c) => {
    r[c] === !0 && (r[c] = {}), r[c] === !1 && delete r[c];
  }), {
    params: r,
    passedParams: s,
    rest: l,
    events: o
  };
}
function h1({
  el: e,
  nextEl: n,
  prevEl: r,
  paginationEl: o,
  scrollbarEl: s,
  swiper: l
}, u) {
  ip(u) && n && r && (l.params.navigation.nextEl = n, l.originalParams.navigation.nextEl = n, l.params.navigation.prevEl = r, l.originalParams.navigation.prevEl = r), op(u) && o && (l.params.pagination.el = o, l.originalParams.pagination.el = o), sp(u) && s && (l.params.scrollbar.el = s, l.originalParams.scrollbar.el = s), l.init(e);
}
function g1(e, n, r, o, s) {
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
      if ($n(e[c]) && $n(n[c])) {
        const h = Object.keys(e[c]), y = Object.keys(n[c]);
        h.length !== y.length ? u(c) : (h.forEach((v) => {
          e[c][v] !== n[c][v] && u(c);
        }), y.forEach((v) => {
          e[c][v] !== n[c][v] && u(c);
        }));
      } else e[c] !== n[c] && u(c);
  }), l;
}
const m1 = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, cs.apply(this, arguments);
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
function v1(e) {
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
function y1(e, n, r) {
  if (!r) return null;
  const o = (y) => {
    let v = y;
    return y < 0 ? v = n.length + y : v >= n.length && (v = v - n.length), v;
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
  return h.map((y, v) => /* @__PURE__ */ He.cloneElement(y, {
    swiper: e,
    style: s,
    key: y.props.virtualIndex || y.key || `slide-${v}`
  }));
}
function Hi(e, n) {
  return typeof window > "u" ? Tr(e, n) : zl(e, n);
}
const Qf = /* @__PURE__ */ kd(null), cp = /* @__PURE__ */ kd(null), b1 = () => Jb(cp), fp = /* @__PURE__ */ gi(({
  className: e,
  tag: n = "div",
  wrapperTag: r = "div",
  children: o,
  onSwiper: s,
  ...l
} = {}, u) => {
  let p = !1;
  const [c, h] = Vt("swiper"), [y, v] = Vt(null), [E, d] = Vt(!1), g = et(!1), x = et(null), I = et(null), _ = et(null), C = et(null), M = et(null), R = et(null), A = et(null), Y = et(null), {
    params: B,
    passedParams: P,
    rest: N,
    events: k
  } = p1(l), {
    slides: W,
    slots: b
  } = v1(o), G = () => {
    d(!E);
  };
  Object.assign(B.on, {
    _containerClasses(te, Ee) {
      h(Ee);
    }
  });
  const D = () => {
    Object.assign(B.on, k), p = !0;
    const te = {
      ...B
    };
    if (delete te.wrapperClass, I.current = new $l(te), I.current.virtual && I.current.params.virtual.enabled) {
      I.current.virtual.slides = W;
      const Ee = {
        cache: !1,
        slides: W,
        renderExternal: v,
        renderExternalUpdate: !1
      };
      ci(I.current.params.virtual, Ee), ci(I.current.originalParams.virtual, Ee);
    }
  };
  x.current || D(), I.current && I.current.on("_beforeBreakpoint", G);
  const ee = () => {
    p || !k || !I.current || Object.keys(k).forEach((te) => {
      I.current.on(te, k[te]);
    });
  }, ae = () => {
    !k || !I.current || Object.keys(k).forEach((te) => {
      I.current.off(te, k[te]);
    });
  };
  Tr(() => () => {
    I.current && I.current.off("_beforeBreakpoint", G);
  }), Tr(() => {
    !g.current && I.current && (I.current.emitSlidesClasses(), g.current = !0);
  }), Hi(() => {
    if (u && (u.current = x.current), !!x.current)
      return I.current.destroyed && D(), h1({
        el: x.current,
        nextEl: M.current,
        prevEl: R.current,
        paginationEl: A.current,
        scrollbarEl: Y.current,
        swiper: I.current
      }, B), s && !I.current.destroyed && s(I.current), () => {
        I.current && !I.current.destroyed && I.current.destroy(!0, !1);
      };
  }, []), Hi(() => {
    ee();
    const te = g1(P, _.current, W, C.current, (Ee) => Ee.key);
    return _.current = P, C.current = W, te.length && I.current && !I.current.destroyed && d1({
      swiper: I.current,
      slides: W,
      passedParams: P,
      changedParams: te,
      nextEl: M.current,
      prevEl: R.current,
      scrollbarEl: Y.current,
      paginationEl: A.current
    }), () => {
      ae();
    };
  }), Hi(() => {
    m1(I.current);
  }, [y]);
  function pe() {
    return B.virtual ? y1(I.current, W, y) : W.map((te, Ee) => /* @__PURE__ */ He.cloneElement(te, {
      swiper: I.current,
      swiperSlideIndex: Ee
    }));
  }
  return /* @__PURE__ */ He.createElement(n, cs({
    ref: x,
    className: ap(`${c}${e ? ` ${e}` : ""}`)
  }, N), /* @__PURE__ */ He.createElement(cp.Provider, {
    value: I.current
  }, b["container-start"], /* @__PURE__ */ He.createElement(r, {
    className: f1(B.wrapperClass)
  }, b["wrapper-start"], pe(), b["wrapper-end"]), ip(B) && /* @__PURE__ */ He.createElement(He.Fragment, null, /* @__PURE__ */ He.createElement("div", {
    ref: R,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ He.createElement("div", {
    ref: M,
    className: "swiper-button-next"
  })), sp(B) && /* @__PURE__ */ He.createElement("div", {
    ref: Y,
    className: "swiper-scrollbar"
  }), op(B) && /* @__PURE__ */ He.createElement("div", {
    ref: A,
    className: "swiper-pagination"
  }), b["container-end"]));
});
fp.displayName = "Swiper";
const dp = /* @__PURE__ */ gi(({
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
  const y = et(null), [v, E] = Vt("swiper-slide"), [d, g] = Vt(!1);
  function x(M, R, A) {
    R === y.current && E(A);
  }
  Hi(() => {
    if (typeof p < "u" && (y.current.swiperSlideIndex = p), h && (h.current = y.current), !(!y.current || !o)) {
      if (o.destroyed) {
        v !== "swiper-slide" && E("swiper-slide");
        return;
      }
      return o.on("_slideClass", x), () => {
        o && o.off("_slideClass", x);
      };
    }
  }), Hi(() => {
    o && y.current && !o.destroyed && E(o.getSlideClasses(y.current));
  }, [o]);
  const I = {
    isActive: v.indexOf("swiper-slide-active") >= 0,
    isVisible: v.indexOf("swiper-slide-visible") >= 0,
    isPrev: v.indexOf("swiper-slide-prev") >= 0,
    isNext: v.indexOf("swiper-slide-next") >= 0
  }, _ = () => typeof n == "function" ? n(I) : n, C = () => {
    g(!0);
  };
  return /* @__PURE__ */ He.createElement(e, cs({
    ref: y,
    className: ap(`${v}${r ? ` ${r}` : ""}`),
    "data-swiper-slide-index": u,
    onLoad: C
  }, c), s && /* @__PURE__ */ He.createElement(Qf.Provider, {
    value: I
  }, /* @__PURE__ */ He.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof s == "number" ? s : void 0
  }, _(), l && !d && /* @__PURE__ */ He.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (M) => {
      M && (M.lazyPreloaderManaged = !0);
    }
  }))), !s && /* @__PURE__ */ He.createElement(Qf.Provider, {
    value: I
  }, _(), l && !d && /* @__PURE__ */ He.createElement("div", {
    className: "swiper-lazy-preloader",
    ref: (M) => {
      M && (M.lazyPreloaderManaged = !0);
    }
  })));
});
dp.displayName = "SwiperSlide";
const ed = ({ type: e }) => {
  const n = b1();
  return /* @__PURE__ */ ie.jsxs(
    li,
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
        e === "prev" && /* @__PURE__ */ ie.jsx(tS, {}),
        e === "next" && /* @__PURE__ */ ie.jsx(Bd, {})
      ]
    }
  );
}, S1 = ({ swiperRef: e, onClose: n, current: r, total: o, currentImage: s }, l) => /* @__PURE__ */ ie.jsxs(
  hi,
  {
    ref: l,
    slot: "container-start",
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: { background: "#000", px: 2, height: 68, width: 1 },
    children: [
      /* @__PURE__ */ ie.jsx(Ln, { variant: "h3", children: `${r} / ${o}` }),
      /* @__PURE__ */ ie.jsxs(hi, { direction: "row", alignItems: "center", spacing: 1, children: [
        /* @__PURE__ */ ie.jsx(
          li,
          {
            color: "secondary",
            onClick: () => {
              var u, p, c;
              return (c = (p = (u = e == null ? void 0 : e.current) == null ? void 0 : u.swiper) == null ? void 0 : p.zoom) == null ? void 0 : c.in();
            },
            children: /* @__PURE__ */ ie.jsx(rS, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          li,
          {
            color: "secondary",
            onClick: () => {
              var u, p, c;
              return (c = (p = (u = e == null ? void 0 : e.current) == null ? void 0 : u.swiper) == null ? void 0 : p.zoom) == null ? void 0 : c.out();
            },
            children: /* @__PURE__ */ ie.jsx(nS, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          li,
          {
            color: "secondary",
            onClick: () => {
              const u = document.createElement("a");
              u.href = s == null ? void 0 : s.url, u.download = s == null ? void 0 : s.name, document.body.appendChild(u), u.click(), document.body.removeChild(u);
            },
            children: /* @__PURE__ */ ie.jsx(iS, { size: 24 })
          }
        ),
        /* @__PURE__ */ ie.jsx(
          li,
          {
            color: "secondary",
            onClick: n,
            children: /* @__PURE__ */ ie.jsx(Dd, { size: 24 })
          }
        )
      ] })
    ]
  }
), x1 = gi(S1), mC = ({
  items: e,
  isOpen: n,
  onClose: r,
  activeId: o
}) => {
  const s = et(null), [l, u] = Vt(1), [p, c] = Vt(0), h = e == null ? void 0 : e.findIndex((y) => (y == null ? void 0 : y.id) === o);
  return /* @__PURE__ */ ie.jsx(Hb, { children: /* @__PURE__ */ ie.jsx(
    Ub,
    {
      sx: (y) => ({ color: "#fff", zIndex: y.zIndex.drawer + 1 }),
      open: n,
      children: /* @__PURE__ */ ie.jsxs(hi, { width: 1, height: 1, children: [
        /* @__PURE__ */ ie.jsx(
          x1,
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
            modules: [tx, ex],
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
              0 < p && l > 1 && /* @__PURE__ */ ie.jsx(ed, { type: "prev" }),
              0 < p && l < p && /* @__PURE__ */ ie.jsx(ed, { type: "next" })
            ]
          }
        )
      ] })
    }
  ) });
};
function kn(e, ...n) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return n.forEach((o) => r.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const fi = "$$material";
function w1(e) {
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
var E1 = {
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
function _1(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var C1 = /[A-Z]|^ms/g, T1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pp = function(n) {
  return n.charCodeAt(1) === 45;
}, td = function(n) {
  return n != null && typeof n != "boolean";
}, sl = /* @__PURE__ */ _1(function(e) {
  return pp(e) ? e : e.replace(C1, "-$&").toLowerCase();
}), rd = function(n, r) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(T1, function(o, s, l) {
          return mn = {
            name: s,
            styles: l,
            next: mn
          }, s;
        });
  }
  return E1[n] !== 1 && !pp(n) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function fs(e, n, r) {
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
        return mn = {
          name: s.name,
          styles: s.styles,
          next: mn
        }, s.name;
      var l = r;
      if (l.styles !== void 0) {
        var u = l.next;
        if (u !== void 0)
          for (; u !== void 0; )
            mn = {
              name: u.name,
              styles: u.styles,
              next: mn
            }, u = u.next;
        var p = l.styles + ";";
        return p;
      }
      return M1(e, n, r);
    }
  }
  var c = r;
  return c;
}
function M1(e, n, r) {
  var o = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++)
      o += fs(e, n, r[s]) + ";";
  else
    for (var l in r) {
      var u = r[l];
      if (typeof u != "object") {
        var p = u;
        td(p) && (o += sl(l) + ":" + rd(l, p) + ";");
      } else if (Array.isArray(u) && typeof u[0] == "string" && n == null)
        for (var c = 0; c < u.length; c++)
          td(u[c]) && (o += sl(l) + ":" + rd(l, u[c]) + ";");
      else {
        var h = fs(e, n, u);
        switch (l) {
          case "animation":
          case "animationName": {
            o += sl(l) + ":" + h + ";";
            break;
          }
          default:
            o += l + "{" + h + "}";
        }
      }
    }
  return o;
}
var nd = /label:\s*([^\s;{]+)\s*(;|$)/g, mn;
function I1(e, n, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, s = "";
  mn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    o = !1, s += fs(r, n, l);
  else {
    var u = l;
    s += u[0];
  }
  for (var p = 1; p < e.length; p++)
    if (s += fs(r, n, e[p]), o) {
      var c = l;
      s += c[p];
    }
  nd.lastIndex = 0;
  for (var h = "", y; (y = nd.exec(s)) !== null; )
    h += "-" + y[1];
  var v = w1(s) + h;
  return {
    name: v,
    styles: s,
    next: mn
  };
}
var Tl = { exports: {} }, Jo = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function O1() {
  if (id) return Ye;
  id = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function M(A) {
    if (typeof A == "object" && A !== null) {
      var Y = A.$$typeof;
      switch (Y) {
        case n:
          switch (A = A.type, A) {
            case c:
            case h:
            case o:
            case l:
            case s:
            case v:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case p:
                case y:
                case g:
                case d:
                case u:
                  return A;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  function R(A) {
    return M(A) === h;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = h, Ye.ContextConsumer = p, Ye.ContextProvider = u, Ye.Element = n, Ye.ForwardRef = y, Ye.Fragment = o, Ye.Lazy = g, Ye.Memo = d, Ye.Portal = r, Ye.Profiler = l, Ye.StrictMode = s, Ye.Suspense = v, Ye.isAsyncMode = function(A) {
    return R(A) || M(A) === c;
  }, Ye.isConcurrentMode = R, Ye.isContextConsumer = function(A) {
    return M(A) === p;
  }, Ye.isContextProvider = function(A) {
    return M(A) === u;
  }, Ye.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }, Ye.isForwardRef = function(A) {
    return M(A) === y;
  }, Ye.isFragment = function(A) {
    return M(A) === o;
  }, Ye.isLazy = function(A) {
    return M(A) === g;
  }, Ye.isMemo = function(A) {
    return M(A) === d;
  }, Ye.isPortal = function(A) {
    return M(A) === r;
  }, Ye.isProfiler = function(A) {
    return M(A) === l;
  }, Ye.isStrictMode = function(A) {
    return M(A) === s;
  }, Ye.isSuspense = function(A) {
    return M(A) === v;
  }, Ye.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === o || A === h || A === l || A === s || A === v || A === E || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === d || A.$$typeof === u || A.$$typeof === p || A.$$typeof === y || A.$$typeof === I || A.$$typeof === _ || A.$$typeof === C || A.$$typeof === x);
  }, Ye.typeOf = M, Ye;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function A1() {
  return od || (od = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function M(oe) {
      return typeof oe == "string" || typeof oe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      oe === o || oe === h || oe === l || oe === s || oe === v || oe === E || typeof oe == "object" && oe !== null && (oe.$$typeof === g || oe.$$typeof === d || oe.$$typeof === u || oe.$$typeof === p || oe.$$typeof === y || oe.$$typeof === I || oe.$$typeof === _ || oe.$$typeof === C || oe.$$typeof === x);
    }
    function R(oe) {
      if (typeof oe == "object" && oe !== null) {
        var $e = oe.$$typeof;
        switch ($e) {
          case n:
            var Be = oe.type;
            switch (Be) {
              case c:
              case h:
              case o:
              case l:
              case s:
              case v:
                return Be;
              default:
                var ct = Be && Be.$$typeof;
                switch (ct) {
                  case p:
                  case y:
                  case g:
                  case d:
                  case u:
                    return ct;
                  default:
                    return $e;
                }
            }
          case r:
            return $e;
        }
      }
    }
    var A = c, Y = h, B = p, P = u, N = n, k = y, W = o, b = g, G = d, D = r, ee = l, ae = s, pe = v, te = !1;
    function Ee(oe) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(oe) || R(oe) === c;
    }
    function U(oe) {
      return R(oe) === h;
    }
    function J(oe) {
      return R(oe) === p;
    }
    function he(oe) {
      return R(oe) === u;
    }
    function me(oe) {
      return typeof oe == "object" && oe !== null && oe.$$typeof === n;
    }
    function V(oe) {
      return R(oe) === y;
    }
    function Z(oe) {
      return R(oe) === o;
    }
    function X(oe) {
      return R(oe) === g;
    }
    function le(oe) {
      return R(oe) === d;
    }
    function re(oe) {
      return R(oe) === r;
    }
    function se(oe) {
      return R(oe) === l;
    }
    function fe(oe) {
      return R(oe) === s;
    }
    function be(oe) {
      return R(oe) === v;
    }
    je.AsyncMode = A, je.ConcurrentMode = Y, je.ContextConsumer = B, je.ContextProvider = P, je.Element = N, je.ForwardRef = k, je.Fragment = W, je.Lazy = b, je.Memo = G, je.Portal = D, je.Profiler = ee, je.StrictMode = ae, je.Suspense = pe, je.isAsyncMode = Ee, je.isConcurrentMode = U, je.isContextConsumer = J, je.isContextProvider = he, je.isElement = me, je.isForwardRef = V, je.isFragment = Z, je.isLazy = X, je.isMemo = le, je.isPortal = re, je.isProfiler = se, je.isStrictMode = fe, je.isSuspense = be, je.isValidElementType = M, je.typeOf = R;
  }()), je;
}
var sd;
function hp() {
  return sd || (sd = 1, process.env.NODE_ENV === "production" ? Jo.exports = O1() : Jo.exports = A1()), Jo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var al, ad;
function z1() {
  if (ad) return al;
  ad = 1;
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
  return al = s() ? Object.assign : function(l, u) {
    for (var p, c = o(l), h, y = 1; y < arguments.length; y++) {
      p = Object(arguments[y]);
      for (var v in p)
        n.call(p, v) && (c[v] = p[v]);
      if (e) {
        h = e(p);
        for (var E = 0; E < h.length; E++)
          r.call(p, h[E]) && (c[h[E]] = p[h[E]]);
      }
    }
    return c;
  }, al;
}
var ll, ld;
function kl() {
  if (ld) return ll;
  ld = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ll = e, ll;
}
var ul, ud;
function gp() {
  return ud || (ud = 1, ul = Function.call.bind(Object.prototype.hasOwnProperty)), ul;
}
var cl, cd;
function P1() {
  if (cd) return cl;
  cd = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = kl(), r = {}, o = gp();
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
          var v;
          try {
            if (typeof l[y] != "function") {
              var E = Error(
                (c || "React class") + ": " + p + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            v = l[y](u, y, c, p, null, n);
          } catch (g) {
            v = g;
          }
          if (v && !(v instanceof Error) && e(
            (c || "React class") + ": type specification of " + p + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var d = h ? h() : "";
            e(
              "Failed " + p + " type: " + v.message + (d ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, cl = s, cl;
}
var fl, fd;
function R1() {
  if (fd) return fl;
  fd = 1;
  var e = hp(), n = z1(), r = kl(), o = gp(), s = P1(), l = function() {
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
  return fl = function(p, c) {
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function v(U) {
      var J = U && (h && U[h] || U[y]);
      if (typeof J == "function")
        return J;
    }
    var E = "<<anonymous>>", d = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: C(),
      arrayOf: M,
      element: R(),
      elementType: A(),
      instanceOf: Y,
      node: k(),
      objectOf: P,
      oneOf: B,
      oneOfType: N,
      shape: b,
      exact: G
    };
    function g(U, J) {
      return U === J ? U !== 0 || 1 / U === 1 / J : U !== U && J !== J;
    }
    function x(U, J) {
      this.message = U, this.data = J && typeof J == "object" ? J : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function I(U) {
      if (process.env.NODE_ENV !== "production")
        var J = {}, he = 0;
      function me(Z, X, le, re, se, fe, be) {
        if (re = re || E, fe = fe || le, be !== r) {
          if (c) {
            var oe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw oe.name = "Invariant Violation", oe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var $e = re + ":" + le;
            !J[$e] && // Avoid spamming the console because they are often not actionable except for lib authors
            he < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), J[$e] = !0, he++);
          }
        }
        return X[le] == null ? Z ? X[le] === null ? new x("The " + se + " `" + fe + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new x("The " + se + " `" + fe + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : U(X, le, re, se, fe);
      }
      var V = me.bind(null, !1);
      return V.isRequired = me.bind(null, !0), V;
    }
    function _(U) {
      function J(he, me, V, Z, X, le) {
        var re = he[me], se = ae(re);
        if (se !== U) {
          var fe = pe(re);
          return new x(
            "Invalid " + Z + " `" + X + "` of type " + ("`" + fe + "` supplied to `" + V + "`, expected ") + ("`" + U + "`."),
            { expectedType: U }
          );
        }
        return null;
      }
      return I(J);
    }
    function C() {
      return I(u);
    }
    function M(U) {
      function J(he, me, V, Z, X) {
        if (typeof U != "function")
          return new x("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var le = he[me];
        if (!Array.isArray(le)) {
          var re = ae(le);
          return new x("Invalid " + Z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an array."));
        }
        for (var se = 0; se < le.length; se++) {
          var fe = U(le, se, V, Z, X + "[" + se + "]", r);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return I(J);
    }
    function R() {
      function U(J, he, me, V, Z) {
        var X = J[he];
        if (!p(X)) {
          var le = ae(X);
          return new x("Invalid " + V + " `" + Z + "` of type " + ("`" + le + "` supplied to `" + me + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(U);
    }
    function A() {
      function U(J, he, me, V, Z) {
        var X = J[he];
        if (!e.isValidElementType(X)) {
          var le = ae(X);
          return new x("Invalid " + V + " `" + Z + "` of type " + ("`" + le + "` supplied to `" + me + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(U);
    }
    function Y(U) {
      function J(he, me, V, Z, X) {
        if (!(he[me] instanceof U)) {
          var le = U.name || E, re = Ee(he[me]);
          return new x("Invalid " + Z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected ") + ("instance of `" + le + "`."));
        }
        return null;
      }
      return I(J);
    }
    function B(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), u;
      function J(he, me, V, Z, X) {
        for (var le = he[me], re = 0; re < U.length; re++)
          if (g(le, U[re]))
            return null;
        var se = JSON.stringify(U, function(be, oe) {
          var $e = pe(oe);
          return $e === "symbol" ? String(oe) : oe;
        });
        return new x("Invalid " + Z + " `" + X + "` of value `" + String(le) + "` " + ("supplied to `" + V + "`, expected one of " + se + "."));
      }
      return I(J);
    }
    function P(U) {
      function J(he, me, V, Z, X) {
        if (typeof U != "function")
          return new x("Property `" + X + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var le = he[me], re = ae(le);
        if (re !== "object")
          return new x("Invalid " + Z + " `" + X + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an object."));
        for (var se in le)
          if (o(le, se)) {
            var fe = U(le, se, V, Z, X + "." + se, r);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return I(J);
    }
    function N(U) {
      if (!Array.isArray(U))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var J = 0; J < U.length; J++) {
        var he = U[J];
        if (typeof he != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(he) + " at index " + J + "."
          ), u;
      }
      function me(V, Z, X, le, re) {
        for (var se = [], fe = 0; fe < U.length; fe++) {
          var be = U[fe], oe = be(V, Z, X, le, re, r);
          if (oe == null)
            return null;
          oe.data && o(oe.data, "expectedType") && se.push(oe.data.expectedType);
        }
        var $e = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new x("Invalid " + le + " `" + re + "` supplied to " + ("`" + X + "`" + $e + "."));
      }
      return I(me);
    }
    function k() {
      function U(J, he, me, V, Z) {
        return D(J[he]) ? null : new x("Invalid " + V + " `" + Z + "` supplied to " + ("`" + me + "`, expected a ReactNode."));
      }
      return I(U);
    }
    function W(U, J, he, me, V) {
      return new x(
        (U || "React class") + ": " + J + " type `" + he + "." + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function b(U) {
      function J(he, me, V, Z, X) {
        var le = he[me], re = ae(le);
        if (re !== "object")
          return new x("Invalid " + Z + " `" + X + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var se in U) {
          var fe = U[se];
          if (typeof fe != "function")
            return W(V, Z, X, se, pe(fe));
          var be = fe(le, se, V, Z, X + "." + se, r);
          if (be)
            return be;
        }
        return null;
      }
      return I(J);
    }
    function G(U) {
      function J(he, me, V, Z, X) {
        var le = he[me], re = ae(le);
        if (re !== "object")
          return new x("Invalid " + Z + " `" + X + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        var se = n({}, he[me], U);
        for (var fe in se) {
          var be = U[fe];
          if (o(U, fe) && typeof be != "function")
            return W(V, Z, X, fe, pe(be));
          if (!be)
            return new x(
              "Invalid " + Z + " `" + X + "` key `" + fe + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(he[me], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(U), null, "  ")
            );
          var oe = be(le, fe, V, Z, X + "." + fe, r);
          if (oe)
            return oe;
        }
        return null;
      }
      return I(J);
    }
    function D(U) {
      switch (typeof U) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !U;
        case "object":
          if (Array.isArray(U))
            return U.every(D);
          if (U === null || p(U))
            return !0;
          var J = v(U);
          if (J) {
            var he = J.call(U), me;
            if (J !== U.entries) {
              for (; !(me = he.next()).done; )
                if (!D(me.value))
                  return !1;
            } else
              for (; !(me = he.next()).done; ) {
                var V = me.value;
                if (V && !D(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(U, J) {
      return U === "symbol" ? !0 : J ? J["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && J instanceof Symbol : !1;
    }
    function ae(U) {
      var J = typeof U;
      return Array.isArray(U) ? "array" : U instanceof RegExp ? "object" : ee(J, U) ? "symbol" : J;
    }
    function pe(U) {
      if (typeof U > "u" || U === null)
        return "" + U;
      var J = ae(U);
      if (J === "object") {
        if (U instanceof Date)
          return "date";
        if (U instanceof RegExp)
          return "regexp";
      }
      return J;
    }
    function te(U) {
      var J = pe(U);
      switch (J) {
        case "array":
        case "object":
          return "an " + J;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + J;
        default:
          return J;
      }
    }
    function Ee(U) {
      return !U.constructor || !U.constructor.name ? E : U.constructor.name;
    }
    return d.checkPropTypes = s, d.resetWarningCache = s.resetWarningCache, d.PropTypes = d, d;
  }, fl;
}
var dl, dd;
function L1() {
  if (dd) return dl;
  dd = 1;
  var e = kl();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, dl = function() {
    function o(u, p, c, h, y, v) {
      if (v !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
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
  }, dl;
}
if (process.env.NODE_ENV !== "production") {
  var $1 = hp(), k1 = !0;
  Tl.exports = R1()($1.isElement, k1);
} else
  Tl.exports = L1()();
var D1 = Tl.exports;
const ye = /* @__PURE__ */ Wd(D1);
function B1(e) {
  return e == null || Object.keys(e).length === 0;
}
function Dl(e) {
  const {
    styles: n,
    defaultTheme: r = {}
  } = e, o = typeof n == "function" ? (s) => n(B1(s) ? r : s) : n;
  return /* @__PURE__ */ ie.jsx(uS, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
const pd = [];
function N1(e) {
  return pd[0] = e, I1(pd);
}
var Ml = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function W1() {
  if (hd) return qe;
  hd = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.view_transition"), d = Symbol.for("react.client.reference");
  function g(x) {
    if (typeof x == "object" && x !== null) {
      var I = x.$$typeof;
      switch (I) {
        case e:
          switch (x = x.type, x) {
            case r:
            case s:
            case o:
            case c:
            case h:
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case u:
                case p:
                case v:
                case y:
                  return x;
                case l:
                  return x;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  return qe.ContextConsumer = l, qe.ContextProvider = u, qe.Element = e, qe.ForwardRef = p, qe.Fragment = r, qe.Lazy = v, qe.Memo = y, qe.Portal = n, qe.Profiler = s, qe.StrictMode = o, qe.Suspense = c, qe.SuspenseList = h, qe.isContextConsumer = function(x) {
    return g(x) === l;
  }, qe.isContextProvider = function(x) {
    return g(x) === u;
  }, qe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, qe.isForwardRef = function(x) {
    return g(x) === p;
  }, qe.isFragment = function(x) {
    return g(x) === r;
  }, qe.isLazy = function(x) {
    return g(x) === v;
  }, qe.isMemo = function(x) {
    return g(x) === y;
  }, qe.isPortal = function(x) {
    return g(x) === n;
  }, qe.isProfiler = function(x) {
    return g(x) === s;
  }, qe.isStrictMode = function(x) {
    return g(x) === o;
  }, qe.isSuspense = function(x) {
    return g(x) === c;
  }, qe.isSuspenseList = function(x) {
    return g(x) === h;
  }, qe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === s || x === o || x === c || x === h || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === y || x.$$typeof === u || x.$$typeof === l || x.$$typeof === p || x.$$typeof === d || x.getModuleId !== void 0);
  }, qe.typeOf = g, qe;
}
var Ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd;
function V1() {
  return gd || (gd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (typeof x == "object" && x !== null) {
        var I = x.$$typeof;
        switch (I) {
          case n:
            switch (x = x.type, x) {
              case o:
              case l:
              case s:
              case h:
              case y:
              case d:
                return x;
              default:
                switch (x = x && x.$$typeof, x) {
                  case p:
                  case c:
                  case E:
                  case v:
                    return x;
                  case u:
                    return x;
                  default:
                    return I;
                }
            }
          case r:
            return I;
        }
      }
    }
    var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), d = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Ke.ContextConsumer = u, Ke.ContextProvider = p, Ke.Element = n, Ke.ForwardRef = c, Ke.Fragment = o, Ke.Lazy = E, Ke.Memo = v, Ke.Portal = r, Ke.Profiler = l, Ke.StrictMode = s, Ke.Suspense = h, Ke.SuspenseList = y, Ke.isContextConsumer = function(x) {
      return e(x) === u;
    }, Ke.isContextProvider = function(x) {
      return e(x) === p;
    }, Ke.isElement = function(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }, Ke.isForwardRef = function(x) {
      return e(x) === c;
    }, Ke.isFragment = function(x) {
      return e(x) === o;
    }, Ke.isLazy = function(x) {
      return e(x) === E;
    }, Ke.isMemo = function(x) {
      return e(x) === v;
    }, Ke.isPortal = function(x) {
      return e(x) === r;
    }, Ke.isProfiler = function(x) {
      return e(x) === l;
    }, Ke.isStrictMode = function(x) {
      return e(x) === s;
    }, Ke.isSuspense = function(x) {
      return e(x) === h;
    }, Ke.isSuspenseList = function(x) {
      return e(x) === y;
    }, Ke.isValidElementType = function(x) {
      return typeof x == "string" || typeof x == "function" || x === o || x === l || x === s || x === h || x === y || typeof x == "object" && x !== null && (x.$$typeof === E || x.$$typeof === v || x.$$typeof === p || x.$$typeof === u || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
    }, Ke.typeOf = e;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Ml.exports = W1() : Ml.exports = V1();
var mp = Ml.exports;
function hn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vp(e) {
  if (/* @__PURE__ */ Ie.isValidElement(e) || mp.isValidElementType(e) || !hn(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((r) => {
    n[r] = vp(e[r]);
  }), n;
}
function dr(e, n, r = {
  clone: !0
}) {
  const o = r.clone ? {
    ...e
  } : e;
  return hn(e) && hn(n) && Object.keys(n).forEach((s) => {
    /* @__PURE__ */ Ie.isValidElement(n[s]) || mp.isValidElementType(n[s]) ? o[s] = n[s] : hn(n[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && hn(e[s]) ? o[s] = dr(e[s], n[s], r) : r.clone ? o[s] = hn(n[s]) ? vp(n[s]) : n[s] : o[s] = n[s];
  }), o;
}
const F1 = (e) => {
  const n = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return n.sort((r, o) => r.val - o.val), n.reduce((r, o) => ({
    ...r,
    [o.key]: o.val
  }), {});
};
function G1(e) {
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
  } = e, l = F1(n), u = Object.keys(l);
  function p(E) {
    return `@media (min-width:${typeof n[E] == "number" ? n[E] : E}${r})`;
  }
  function c(E) {
    return `@media (max-width:${(typeof n[E] == "number" ? n[E] : E) - o / 100}${r})`;
  }
  function h(E, d) {
    const g = u.indexOf(d);
    return `@media (min-width:${typeof n[E] == "number" ? n[E] : E}${r}) and (max-width:${(g !== -1 && typeof n[u[g]] == "number" ? n[u[g]] : d) - o / 100}${r})`;
  }
  function y(E) {
    return u.indexOf(E) + 1 < u.length ? h(E, u[u.indexOf(E) + 1]) : p(E);
  }
  function v(E) {
    const d = u.indexOf(E);
    return d === 0 ? p(u[1]) : d === u.length - 1 ? c(u[d]) : h(E, u[u.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: u,
    values: l,
    up: p,
    down: c,
    between: h,
    only: y,
    not: v,
    unit: r,
    ...s
  };
}
function md(e, n) {
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
function Y1(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((r) => n.startsWith(`@${r}`)) || !!n.match(/^@\d/));
}
function j1(e, n) {
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
function H1(e) {
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
const U1 = {
  borderRadius: 4
}, bn = process.env.NODE_ENV !== "production" ? ye.oneOfType([ye.number, ye.string, ye.object, ye.array]) : {};
function Ui(e, n) {
  return n ? dr(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const gs = {
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
}, vd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${gs[e]}px)`
}, X1 = {
  containerQueries: (e) => ({
    up: (n) => {
      let r = typeof n == "number" ? n : gs[n] || n;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function rn(e, n, r) {
  const o = e.theme || {};
  if (Array.isArray(n)) {
    const l = o.breakpoints || vd;
    return n.reduce((u, p, c) => (u[l.up(l.keys[c])] = r(n[c]), u), {});
  }
  if (typeof n == "object") {
    const l = o.breakpoints || vd;
    return Object.keys(n).reduce((u, p) => {
      if (Y1(l.keys, p)) {
        const c = j1(o.containerQueries ? o : X1, p);
        c && (u[c] = r(n[p], p));
      } else if (Object.keys(l.values || gs).includes(p)) {
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
function q1(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((o, s) => {
    const l = e.up(s);
    return o[l] = {}, o;
  }, {})) || {};
}
function yd(e, n) {
  return e.reduce((r, o) => {
    const s = r[o];
    return (!s || Object.keys(s).length === 0) && delete r[o], r;
  }, n);
}
function yp(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : kn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ms(e, n, r = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && r) {
    const o = `vars.${n}`.split(".").reduce((s, l) => s && s[l] ? s[l] : null, e);
    if (o != null)
      return o;
  }
  return n.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, e);
}
function ds(e, n, r, o = r) {
  let s;
  return typeof e == "function" ? s = e(r) : Array.isArray(e) ? s = e[r] || o : s = ms(e, r) || o, n && (s = n(s, o, e)), s;
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
    const p = u[n], c = u.theme, h = ms(c, o) || {};
    return rn(u, p, (v) => {
      let E = ds(h, s, v);
      return v === E && typeof v == "string" && (E = ds(h, s, `${n}${v === "default" ? "" : yp(v)}`, v)), r === !1 ? E : {
        [r]: E
      };
    });
  };
  return l.propTypes = process.env.NODE_ENV !== "production" ? {
    [n]: bn
  } : {}, l.filterProps = [n], l;
}
function K1(e) {
  const n = {};
  return (r) => (n[r] === void 0 && (n[r] = e(r)), n[r]);
}
const Z1 = {
  m: "margin",
  p: "padding"
}, J1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, bd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Q1 = K1((e) => {
  if (e.length > 2)
    if (bd[e])
      e = bd[e];
    else
      return [e];
  const [n, r] = e.split(""), o = Z1[n], s = J1[r] || "";
  return Array.isArray(s) ? s.map((l) => o + l) : [o + s];
}), vs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ew = [...vs, ...ys];
function Ji(e, n, r, o) {
  const s = ms(e, n, !0) ?? r;
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
function Bl(e) {
  return Ji(e, "spacing", 8, "spacing");
}
function Qi(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function tw(e, n) {
  return (r) => e.reduce((o, s) => (o[s] = Qi(n, r), o), {});
}
function rw(e, n, r, o) {
  if (!n.includes(r))
    return null;
  const s = Q1(r), l = tw(s, o), u = e[r];
  return rn(e, u, l);
}
function bp(e, n) {
  const r = Bl(e.theme);
  return Object.keys(e).map((o) => rw(e, n, o, r)).reduce(Ui, {});
}
function ht(e) {
  return bp(e, vs);
}
ht.propTypes = process.env.NODE_ENV !== "production" ? vs.reduce((e, n) => (e[n] = bn, e), {}) : {};
ht.filterProps = vs;
function gt(e) {
  return bp(e, ys);
}
gt.propTypes = process.env.NODE_ENV !== "production" ? ys.reduce((e, n) => (e[n] = bn, e), {}) : {};
gt.filterProps = ys;
process.env.NODE_ENV !== "production" && ew.reduce((e, n) => (e[n] = bn, e), {});
function Sp(e = 8, n = Bl({
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
function bs(...e) {
  const n = e.reduce((o, s) => (s.filterProps.forEach((l) => {
    o[l] = s;
  }), o), {}), r = (o) => Object.keys(o).reduce((s, l) => n[l] ? Ui(s, n[l](o)) : s, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, s) => Object.assign(o, s.propTypes), {}) : {}, r.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []), r;
}
function Cr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ir(e, n) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: n
  });
}
const nw = Ir("border", Cr), iw = Ir("borderTop", Cr), ow = Ir("borderRight", Cr), sw = Ir("borderBottom", Cr), aw = Ir("borderLeft", Cr), lw = Ir("borderColor"), uw = Ir("borderTopColor"), cw = Ir("borderRightColor"), fw = Ir("borderBottomColor"), dw = Ir("borderLeftColor"), pw = Ir("outline", Cr), hw = Ir("outlineColor"), Ss = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = Ji(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (o) => ({
      borderRadius: Qi(n, o)
    });
    return rn(e, e.borderRadius, r);
  }
  return null;
};
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: bn
} : {};
Ss.filterProps = ["borderRadius"];
bs(nw, iw, ow, sw, aw, lw, uw, cw, fw, dw, Ss, pw, hw);
const xs = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = Ji(e.theme, "spacing", 8, "gap"), r = (o) => ({
      gap: Qi(n, o)
    });
    return rn(e, e.gap, r);
  }
  return null;
};
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: bn
} : {};
xs.filterProps = ["gap"];
const ws = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = Ji(e.theme, "spacing", 8, "columnGap"), r = (o) => ({
      columnGap: Qi(n, o)
    });
    return rn(e, e.columnGap, r);
  }
  return null;
};
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: bn
} : {};
ws.filterProps = ["columnGap"];
const Es = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = Ji(e.theme, "spacing", 8, "rowGap"), r = (o) => ({
      rowGap: Qi(n, o)
    });
    return rn(e, e.rowGap, r);
  }
  return null;
};
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: bn
} : {};
Es.filterProps = ["rowGap"];
const gw = bt({
  prop: "gridColumn"
}), mw = bt({
  prop: "gridRow"
}), vw = bt({
  prop: "gridAutoFlow"
}), yw = bt({
  prop: "gridAutoColumns"
}), bw = bt({
  prop: "gridAutoRows"
}), Sw = bt({
  prop: "gridTemplateColumns"
}), xw = bt({
  prop: "gridTemplateRows"
}), ww = bt({
  prop: "gridTemplateAreas"
}), Ew = bt({
  prop: "gridArea"
});
bs(xs, ws, Es, gw, mw, vw, yw, bw, Sw, xw, ww, Ew);
function di(e, n) {
  return n === "grey" ? n : e;
}
const _w = bt({
  prop: "color",
  themeKey: "palette",
  transform: di
}), Cw = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: di
}), Tw = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: di
});
bs(_w, Cw, Tw);
function fr(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Mw = bt({
  prop: "width",
  transform: fr
}), Nl = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (r) => {
      var s, l, u, p, c;
      const o = ((u = (l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.values) == null ? void 0 : u[r]) || gs[r];
      return o ? ((c = (p = e.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: fr(r)
      };
    };
    return rn(e, e.maxWidth, n);
  }
  return null;
};
Nl.filterProps = ["maxWidth"];
const Iw = bt({
  prop: "minWidth",
  transform: fr
}), Ow = bt({
  prop: "height",
  transform: fr
}), Aw = bt({
  prop: "maxHeight",
  transform: fr
}), zw = bt({
  prop: "minHeight",
  transform: fr
});
bt({
  prop: "size",
  cssProperty: "width",
  transform: fr
});
bt({
  prop: "size",
  cssProperty: "height",
  transform: fr
});
const Pw = bt({
  prop: "boxSizing"
});
bs(Mw, Nl, Iw, Ow, Aw, zw, Pw);
const _s = {
  // borders
  border: {
    themeKey: "borders",
    transform: Cr
  },
  borderTop: {
    themeKey: "borders",
    transform: Cr
  },
  borderRight: {
    themeKey: "borders",
    transform: Cr
  },
  borderBottom: {
    themeKey: "borders",
    transform: Cr
  },
  borderLeft: {
    themeKey: "borders",
    transform: Cr
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
    transform: Cr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ss
  },
  // palette
  color: {
    themeKey: "palette",
    transform: di
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: di
  },
  backgroundColor: {
    themeKey: "palette",
    transform: di
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
    style: xs
  },
  rowGap: {
    style: Es
  },
  columnGap: {
    style: ws
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
    transform: fr
  },
  maxWidth: {
    style: Nl
  },
  minWidth: {
    transform: fr
  },
  height: {
    transform: fr
  },
  maxHeight: {
    transform: fr
  },
  minHeight: {
    transform: fr
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
function Rw(...e) {
  const n = e.reduce((o, s) => o.concat(Object.keys(s)), []), r = new Set(n);
  return e.every((o) => r.size === Object.keys(o).length);
}
function Lw(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function $w() {
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
      style: v
    } = p;
    if (o == null)
      return null;
    if (h === "typography" && o === "inherit")
      return {
        [r]: o
      };
    const E = ms(s, h) || {};
    return v ? v(u) : rn(u, o, (g) => {
      let x = ds(E, y, g);
      return g === x && typeof g == "string" && (x = ds(E, y, `${r}${g === "default" ? "" : yp(g)}`, g)), c === !1 ? x : {
        [c]: x
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
    const u = s.unstable_sxConfig ?? _s;
    function p(c) {
      let h = c;
      if (typeof c == "function")
        h = c(s);
      else if (typeof c != "object")
        return c;
      if (!h)
        return null;
      const y = q1(s.breakpoints), v = Object.keys(y);
      let E = y;
      return Object.keys(h).forEach((d) => {
        const g = Lw(h[d], s);
        if (g != null)
          if (typeof g == "object")
            if (u[d])
              E = Ui(E, e(d, g, s, u));
            else {
              const x = rn({
                theme: s
              }, g, (I) => ({
                [d]: I
              }));
              Rw(x, g) ? E[d] = n({
                sx: g,
                theme: s,
                nested: !0
              }) : E = Ui(E, x);
            }
          else
            E = Ui(E, e(d, g, s, u));
      }), !l && s.modularCssLayers ? {
        "@layer sx": md(s, yd(v, E))
      } : md(s, yd(v, E));
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return n;
}
const eo = $w();
eo.filterProps = ["sx"];
function kw(e, n) {
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
function xp(e = {}, ...n) {
  const {
    breakpoints: r = {},
    palette: o = {},
    spacing: s,
    shape: l = {},
    ...u
  } = e, p = G1(r), c = Sp(s);
  let h = dr({
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
      ...U1,
      ...l
    }
  }, u);
  return h = H1(h), h.applyStyles = kw, h = n.reduce((y, v) => dr(y, v), h), h.unstable_sxConfig = {
    ..._s,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return eo({
      sx: v,
      theme: this
    });
  }, h;
}
function Dw(e) {
  return Object.keys(e).length === 0;
}
function Wl(e = null) {
  const n = Ie.useContext(Nd);
  return !n || Dw(n) ? e : n;
}
const Bw = xp();
function Nw(e = Bw) {
  return Wl(e);
}
function pl(e) {
  const n = N1(e);
  return e !== n && n.styles ? (n.styles.match(/^@layer\s+[^{]*$/) || (n.styles = `@layer global{${n.styles}}`), n) : e;
}
function wp({
  styles: e,
  themeId: n,
  defaultTheme: r = {}
}) {
  const o = Nw(r), s = n && o[n] || o;
  let l = typeof e == "function" ? e(s) : e;
  return s.modularCssLayers && (Array.isArray(l) ? l = l.map((u) => pl(typeof u == "function" ? u(s) : u)) : l = pl(l)), /* @__PURE__ */ ie.jsx(Dl, {
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
const Sd = (e) => e, Ww = () => {
  let e = Sd;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = Sd;
    }
  };
}, Vw = Ww(), Fw = {
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
function Gw(e, n, r = "Mui") {
  const o = Fw[n];
  return o ? `${r}-${o}` : `${Vw.generate(e)}-${n}`;
}
const Ep = typeof window < "u" ? Ie.useLayoutEffect : Ie.useEffect;
function Yw(e, n = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, r));
}
function Vl(e, n = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < n || e > r) && console.error(`MUI: The value provided ${e} is out of range [${n}, ${r}].`), Yw(e, n, r);
}
function jw(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(n);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function vn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return vn(jw(e));
  const n = e.indexOf("("), r = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : kn(9, e));
  let o = e.substring(n + 1, e.length - 1), s;
  if (r === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : kn(10, s));
  } else
    o = o.split(",");
  return o = o.map((l) => parseFloat(l)), {
    type: r,
    values: o,
    colorSpace: s
  };
}
const Hw = (e) => {
  const n = vn(e);
  return n.values.slice(0, 3).map((r, o) => n.type.includes("hsl") && o !== 0 ? `${r}%` : r).join(" ");
}, Gi = (e, n) => {
  try {
    return Hw(e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
};
function Cs(e) {
  const {
    type: n,
    colorSpace: r
  } = e;
  let {
    values: o
  } = e;
  return n.includes("rgb") ? o = o.map((s, l) => l < 3 ? parseInt(s, 10) : s) : n.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), n.includes("color") ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${n}(${o})`;
}
function _p(e) {
  e = vn(e);
  const {
    values: n
  } = e, r = n[0], o = n[1] / 100, s = n[2] / 100, l = o * Math.min(s, 1 - s), u = (h, y = (h + r / 30) % 12) => s - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let p = "rgb";
  const c = [Math.round(u(0) * 255), Math.round(u(8) * 255), Math.round(u(4) * 255)];
  return e.type === "hsla" && (p += "a", c.push(n[3])), Cs({
    type: p,
    values: c
  });
}
function Il(e) {
  e = vn(e);
  let n = e.type === "hsl" || e.type === "hsla" ? vn(_p(e)).values : e.values;
  return n = n.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function xd(e, n) {
  const r = Il(e), o = Il(n);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function mt(e, n) {
  return e = vn(e), n = Vl(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, Cs(e);
}
function An(e, n, r) {
  try {
    return mt(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ts(e, n) {
  if (e = vn(e), n = Vl(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - n;
  return Cs(e);
}
function Ue(e, n, r) {
  try {
    return Ts(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ms(e, n) {
  if (e = vn(e), n = Vl(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * n;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * n;
  return Cs(e);
}
function Xe(e, n, r) {
  try {
    return Ms(e, n);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Uw(e, n = 0.15) {
  return Il(e) > 0.5 ? Ts(e, n) : Ms(e, n);
}
function Qo(e, n, r) {
  try {
    return Uw(e, n);
  } catch {
    return e;
  }
}
const Xw = "exact-prop: ​";
function Cp(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Xw]: (n) => {
      const r = Object.keys(n).filter((o) => !e.hasOwnProperty(o));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Fl = /* @__PURE__ */ Ie.createContext(null);
process.env.NODE_ENV !== "production" && (Fl.displayName = "ThemeContext");
function Gl() {
  const e = Ie.useContext(Fl);
  return process.env.NODE_ENV !== "production" && Ie.useDebugValue(e), e;
}
const qw = typeof Symbol == "function" && Symbol.for, Kw = qw ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Zw(e, n) {
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
function ps(e) {
  const {
    children: n,
    theme: r
  } = e, o = Gl();
  process.env.NODE_ENV !== "production" && o === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Ie.useMemo(() => {
    const l = o === null ? {
      ...r
    } : Zw(o, r);
    return l != null && (l[Kw] = o !== null), l;
  }, [r, o]);
  return /* @__PURE__ */ ie.jsx(Fl.Provider, {
    value: s,
    children: n
  });
}
process.env.NODE_ENV !== "production" && (ps.propTypes = {
  /**
   * Your component tree.
   */
  children: ye.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: ye.oneOfType([ye.object, ye.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ps.propTypes = Cp(ps.propTypes));
const Jw = /* @__PURE__ */ Ie.createContext();
function Tp({
  value: e,
  ...n
}) {
  return /* @__PURE__ */ ie.jsx(Jw.Provider, {
    value: e ?? !0,
    ...n
  });
}
process.env.NODE_ENV !== "production" && (Tp.propTypes = {
  children: ye.node,
  value: ye.bool
});
const Qw = /* @__PURE__ */ Ie.createContext(void 0);
function Mp({
  value: e,
  children: n
}) {
  return /* @__PURE__ */ ie.jsx(Qw.Provider, {
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
let wd = 0;
function eE(e) {
  const [n, r] = Ie.useState(e), o = e || n;
  return Ie.useEffect(() => {
    n == null && (wd += 1, r(`mui-${wd}`));
  }, [n]), o;
}
const tE = {
  ...Ie
}, Ed = tE.useId;
function rE(e) {
  return Ed !== void 0 ? Ed() : eE(e);
}
function nE(e) {
  const n = Wl(), r = rE() || "", {
    modularCssLayers: o
  } = e;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || n !== null ? s = "" : typeof o == "string" ? s = o.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, Ep(() => {
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
function Cd(e, n, r, o = !1) {
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
function Xi(e) {
  const {
    children: n,
    theme: r,
    themeId: o
  } = e, s = Wl(_d), l = Gl() || _d;
  process.env.NODE_ENV !== "production" && (s === null && typeof r == "function" || o && s && !s[o] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const u = Cd(o, s, r), p = Cd(o, l, r, !0), c = (o ? u[o] : u).direction === "rtl", h = nE(u);
  return /* @__PURE__ */ ie.jsx(ps, {
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
process.env.NODE_ENV !== "production" && (Xi.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Xi.propTypes = Cp(Xi.propTypes));
const Yl = "mode", jl = "color-scheme", iE = "data-color-scheme";
function oE(e) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: s = Yl,
    colorSchemeStorageKey: l = jl,
    attribute: u = iE,
    colorSchemeNode: p = "document.documentElement",
    nonce: c
  } = e || {};
  let h = "", y = u;
  if (u === "class" && (y = ".%s"), u === "data" && (y = "[data-%s]"), y.startsWith(".")) {
    const E = y.substring(1);
    h += `${p}.classList.remove('${E}'.replace('%s', light), '${E}'.replace('%s', dark));
      ${p}.classList.add('${E}'.replace('%s', colorScheme));`;
  }
  const v = y.match(/\[([^[\]]+)\]/);
  if (v) {
    const [E, d] = v[1].split("=");
    d || (h += `${p}.removeAttribute('${E}'.replace('%s', light));
      ${p}.removeAttribute('${E}'.replace('%s', dark));`), h += `
      ${p}.setAttribute('${E}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
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
function sE() {
}
const aE = ({
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
      return sE;
    const o = (s) => {
      const l = s.newValue;
      s.key === e && r(l);
    };
    return n.addEventListener("storage", o), () => {
      n.removeEventListener("storage", o);
    };
  }
});
function hl() {
}
function Td(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ip(e, n) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return n("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return n("dark");
}
function lE(e) {
  return Ip(e, (n) => {
    if (n === "light")
      return e.lightColorScheme;
    if (n === "dark")
      return e.darkColorScheme;
  });
}
function uE(e) {
  const {
    defaultMode: n = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: o,
    supportedColorSchemes: s = [],
    modeStorageKey: l = Yl,
    colorSchemeStorageKey: u = jl,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: c = aE,
    noSsr: h = !1
  } = e, y = s.join(","), v = s.length > 1, E = Ie.useMemo(() => c == null ? void 0 : c({
    key: l,
    storageWindow: p
  }), [c, l, p]), d = Ie.useMemo(() => c == null ? void 0 : c({
    key: `${u}-light`,
    storageWindow: p
  }), [c, u, p]), g = Ie.useMemo(() => c == null ? void 0 : c({
    key: `${u}-dark`,
    storageWindow: p
  }), [c, u, p]), [x, I] = Ie.useState(() => {
    const P = (E == null ? void 0 : E.get(n)) || n, N = (d == null ? void 0 : d.get(r)) || r, k = (g == null ? void 0 : g.get(o)) || o;
    return {
      mode: P,
      systemMode: Td(P),
      lightColorScheme: N,
      darkColorScheme: k
    };
  }), [_, C] = Ie.useState(h || !v);
  Ie.useEffect(() => {
    C(!0);
  }, []);
  const M = lE(x), R = Ie.useCallback((P) => {
    I((N) => {
      if (P === N.mode)
        return N;
      const k = P ?? n;
      return E == null || E.set(k), {
        ...N,
        mode: k,
        systemMode: Td(k)
      };
    });
  }, [E, n]), A = Ie.useCallback((P) => {
    P ? typeof P == "string" ? P && !y.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : I((N) => {
      const k = {
        ...N
      };
      return Ip(N, (W) => {
        W === "light" && (d == null || d.set(P), k.lightColorScheme = P), W === "dark" && (g == null || g.set(P), k.darkColorScheme = P);
      }), k;
    }) : I((N) => {
      const k = {
        ...N
      }, W = P.light === null ? r : P.light, b = P.dark === null ? o : P.dark;
      return W && (y.includes(W) ? (k.lightColorScheme = W, d == null || d.set(W)) : console.error(`\`${W}\` does not exist in \`theme.colorSchemes\`.`)), b && (y.includes(b) ? (k.darkColorScheme = b, g == null || g.set(b)) : console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`)), k;
    }) : I((N) => (d == null || d.set(r), g == null || g.set(o), {
      ...N,
      lightColorScheme: r,
      darkColorScheme: o
    }));
  }, [y, d, g, r, o]), Y = Ie.useCallback((P) => {
    x.mode === "system" && I((N) => {
      const k = P != null && P.matches ? "dark" : "light";
      return N.systemMode === k ? N : {
        ...N,
        systemMode: k
      };
    });
  }, [x.mode]), B = Ie.useRef(Y);
  return B.current = Y, Ie.useEffect(() => {
    if (typeof window.matchMedia != "function" || !v)
      return;
    const P = (...k) => B.current(...k), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(P), P(N), () => {
      N.removeListener(P);
    };
  }, [v]), Ie.useEffect(() => {
    if (v) {
      const P = (E == null ? void 0 : E.subscribe((W) => {
        (!W || ["light", "dark", "system"].includes(W)) && R(W || n);
      })) || hl, N = (d == null ? void 0 : d.subscribe((W) => {
        (!W || y.match(W)) && A({
          light: W
        });
      })) || hl, k = (g == null ? void 0 : g.subscribe((W) => {
        (!W || y.match(W)) && A({
          dark: W
        });
      })) || hl;
      return () => {
        P(), N(), k();
      };
    }
  }, [A, R, y, n, p, v, E, d, g]), {
    ...x,
    mode: _ ? x.mode : void 0,
    systemMode: _ ? x.systemMode : void 0,
    colorScheme: _ ? M : void 0,
    setMode: R,
    setColorScheme: A
  };
}
const cE = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function fE(e) {
  const {
    themeId: n,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: o = Yl,
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
  const y = () => Ie.useContext(h) || c, v = {}, E = {};
  function d(_) {
    var Xt, qt, Mt, Fr;
    const {
      children: C,
      theme: M,
      modeStorageKey: R = o,
      colorSchemeStorageKey: A = s,
      disableTransitionOnChange: Y = l,
      storageManager: B,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: k = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: W = !1,
      disableStyleSheetGeneration: b = !1,
      defaultMode: G = "system",
      forceThemeRerender: D = !1,
      noSsr: ee
    } = _, ae = Ie.useRef(!1), pe = Gl(), te = Ie.useContext(h), Ee = !!te && !W, U = Ie.useMemo(() => M || (typeof r == "function" ? r() : r), [M]), J = U[n], he = J || U, {
      colorSchemes: me = v,
      components: V = E,
      cssVarPrefix: Z
    } = he, X = Object.keys(me).filter((at) => !!me[at]).join(","), le = Ie.useMemo(() => X.split(","), [X]), re = typeof u == "string" ? u : u.light, se = typeof u == "string" ? u : u.dark, fe = me[re] && me[se] ? G : ((qt = (Xt = me[he.defaultColorScheme]) == null ? void 0 : Xt.palette) == null ? void 0 : qt.mode) || ((Mt = he.palette) == null ? void 0 : Mt.mode), {
      mode: be,
      setMode: oe,
      systemMode: $e,
      lightColorScheme: Be,
      darkColorScheme: ct,
      colorScheme: Ut,
      setColorScheme: ft
    } = uE({
      supportedColorSchemes: le,
      defaultLightColorScheme: re,
      defaultDarkColorScheme: se,
      modeStorageKey: R,
      colorSchemeStorageKey: A,
      defaultMode: fe,
      storageManager: B,
      storageWindow: P,
      noSsr: ee
    });
    let Lt = be, st = Ut;
    Ee && (Lt = te.mode, st = te.colorScheme), process.env.NODE_ENV !== "production" && D && !he.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Tt = st || he.defaultColorScheme;
    he.vars && !D && (Tt = he.defaultColorScheme);
    const rt = Ie.useMemo(() => {
      var tr;
      const at = ((tr = he.generateThemeVars) == null ? void 0 : tr.call(he)) || he.vars, Ze = {
        ...he,
        components: V,
        colorSchemes: me,
        cssVarPrefix: Z,
        vars: at
      };
      if (typeof Ze.generateSpacing == "function" && (Ze.spacing = Ze.generateSpacing()), Tt) {
        const $t = me[Tt];
        $t && typeof $t == "object" && Object.keys($t).forEach((It) => {
          $t[It] && typeof $t[It] == "object" ? Ze[It] = {
            ...Ze[It],
            ...$t[It]
          } : Ze[It] = $t[It];
        });
      }
      return p ? p(Ze) : Ze;
    }, [he, Tt, V, me, Z]), St = he.colorSchemeSelector;
    Ep(() => {
      if (st && k && St && St !== "media") {
        const at = St;
        let Ze = St;
        if (at === "class" && (Ze = ".%s"), at === "data" && (Ze = "[data-%s]"), at != null && at.startsWith("data-") && !at.includes("%s") && (Ze = `[${at}="%s"]`), Ze.startsWith("."))
          k.classList.remove(...le.map((tr) => Ze.substring(1).replace("%s", tr))), k.classList.add(Ze.substring(1).replace("%s", st));
        else {
          const tr = Ze.replace("%s", st).match(/\[([^\]]+)\]/);
          if (tr) {
            const [$t, It] = tr[1].split("=");
            It || le.forEach((Sn) => {
              k.removeAttribute($t.replace(st, Sn));
            }), k.setAttribute($t, It ? It.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(Ze, st);
        }
      }
    }, [st, St, k, le]), Ie.useEffect(() => {
      let at;
      if (Y && ae.current && N) {
        const Ze = N.createElement("style");
        Ze.appendChild(N.createTextNode(cE)), N.head.appendChild(Ze), window.getComputedStyle(N.body), at = setTimeout(() => {
          N.head.removeChild(Ze);
        }, 1);
      }
      return () => {
        clearTimeout(at);
      };
    }, [st, Y, N]), Ie.useEffect(() => (ae.current = !0, () => {
      ae.current = !1;
    }), []);
    const pr = Ie.useMemo(() => ({
      allColorSchemes: le,
      colorScheme: st,
      darkColorScheme: ct,
      lightColorScheme: Be,
      mode: Lt,
      setColorScheme: ft,
      setMode: process.env.NODE_ENV === "production" ? oe : (at) => {
        rt.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), oe(at);
      },
      systemMode: $e
    }), [le, st, ct, Be, Lt, ft, oe, $e, rt.colorSchemeSelector]);
    let kr = !0;
    (b || he.cssVariables === !1 || Ee && (pe == null ? void 0 : pe.cssVarPrefix) === Z) && (kr = !1);
    const Ft = /* @__PURE__ */ ie.jsxs(Ie.Fragment, {
      children: [/* @__PURE__ */ ie.jsx(Xi, {
        themeId: J ? n : void 0,
        theme: rt,
        children: C
      }), kr && /* @__PURE__ */ ie.jsx(Dl, {
        styles: ((Fr = rt.generateStyleSheets) == null ? void 0 : Fr.call(rt)) || []
      })]
    });
    return Ee ? Ft : /* @__PURE__ */ ie.jsx(h.Provider, {
      value: pr,
      children: Ft
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
  const g = typeof u == "string" ? u : u.light, x = typeof u == "string" ? u : u.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: y,
    getInitColorSchemeScript: (_) => oE({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: x,
      modeStorageKey: o,
      ..._
    })
  };
}
function dE(e = "") {
  function n(...o) {
    if (!o.length)
      return "";
    const s = o[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${n(...o.slice(1))})` : `, ${s}`;
  }
  return (o, ...s) => `var(--${e ? `${e}-` : ""}${o}${n(...s)})`;
}
const Md = (e, n, r, o = []) => {
  let s = e;
  n.forEach((l, u) => {
    u === n.length - 1 ? Array.isArray(s) ? s[Number(l)] = r : s && typeof s == "object" && (s[l] = r) : s && typeof s == "object" && (s[l] || (s[l] = o.includes(l) ? [] : {}), s = s[l]);
  });
}, pE = (e, n, r) => {
  function o(s, l = [], u = []) {
    Object.entries(s).forEach(([p, c]) => {
      (!r || r && !r([...l, p])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...l, p], Array.isArray(c) ? [...u, p] : u) : n([...l, p], c, u));
    });
  }
  o(e);
}, hE = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function gl(e, n) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: o
  } = n || {}, s = {}, l = {}, u = {};
  return pE(
    e,
    (p, c, h) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(p, c))) {
        const y = `--${r ? `${r}-` : ""}${p.join("-")}`, v = hE(p, c);
        Object.assign(s, {
          [y]: v
        }), Md(l, p, `var(${y})`, h), Md(u, p, `var(${y}, ${v})`, h);
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
function gE(e, n = {}) {
  const {
    getSelector: r = _,
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
    css: v,
    varsWithDefaults: E
  } = gl(h, n);
  let d = E;
  const g = {}, {
    [c]: x,
    ...I
  } = u;
  if (Object.entries(I || {}).forEach(([R, A]) => {
    const {
      vars: Y,
      css: B,
      varsWithDefaults: P
    } = gl(A, n);
    d = dr(d, P), g[R] = {
      css: B,
      vars: Y
    };
  }), x) {
    const {
      css: R,
      vars: A,
      varsWithDefaults: Y
    } = gl(x, n);
    d = dr(d, Y), g[c] = {
      css: R,
      vars: A
    };
  }
  function _(R, A) {
    var B, P;
    let Y = s;
    if (s === "class" && (Y = ".%s"), s === "data" && (Y = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (Y = `[${s}="%s"]`), R) {
      if (Y === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((P = (B = u[R]) == null ? void 0 : B.palette) == null ? void 0 : P.mode) || R})`]: {
            ":root": A
          }
        };
      if (Y)
        return e.defaultColorScheme === R ? `:root, ${Y.replace("%s", String(R))}` : Y.replace("%s", String(R));
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
        vars: A
      }]) => {
        R = dr(R, A);
      }), R;
    },
    generateStyleSheets: () => {
      var N, k;
      const R = [], A = e.defaultColorScheme || "light";
      function Y(W, b) {
        Object.keys(b).length && R.push(typeof W == "string" ? {
          [W]: {
            ...b
          }
        } : W);
      }
      Y(r(void 0, {
        ...v
      }), v);
      const {
        [A]: B,
        ...P
      } = g;
      if (B) {
        const {
          css: W
        } = B, b = (k = (N = u[A]) == null ? void 0 : N.palette) == null ? void 0 : k.mode, G = !o && b ? {
          colorScheme: b,
          ...W
        } : {
          ...W
        };
        Y(r(A, {
          ...G
        }), G);
      }
      return Object.entries(P).forEach(([W, {
        css: b
      }]) => {
        var ee, ae;
        const G = (ae = (ee = u[W]) == null ? void 0 : ee.palette) == null ? void 0 : ae.mode, D = !o && G ? {
          colorScheme: G,
          ...b
        } : {
          ...b
        };
        Y(r(W, {
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
function mE(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const qi = {
  black: "#000",
  white: "#fff"
}, ce = {
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
}, ri = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Bt = {
  50: "#ffebee",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c"
}, Fi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ct = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1"
}, Nt = {
  50: "#e1f5fe",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b"
}, Wt = {
  50: "#e8f5e9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
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
      paper: qi.white,
      default: qi.white
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
const Ap = Op();
function zp() {
  return {
    text: {
      primary: qi.white,
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
      active: qi.white,
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
const Ol = zp();
function Id(e, n, r, o) {
  const s = o.light || o, l = o.dark || o * 1.5;
  e[n] || (e.hasOwnProperty(r) ? e[n] = e[r] : n === "light" ? e.light = Ms(e.main, s) : n === "dark" && (e.dark = Ts(e.main, l)));
}
function Od(e, n, r, o, s) {
  const l = s.light || s, u = s.dark || s * 1.5;
  n[r] || (n.hasOwnProperty(o) ? n[r] = n[o] : r === "light" ? n.light = `color-mix(in ${e}, ${n.main}, #fff ${(l * 100).toFixed(0)}%)` : r === "dark" && (n.dark = `color-mix(in ${e}, ${n.main}, #000 ${(u * 100).toFixed(0)}%)`));
}
function vE(e = "light") {
  return e === "dark" ? {
    main: Ct[200],
    light: Ct[50],
    dark: Ct[400]
  } : {
    main: Ct[700],
    light: Ct[400],
    dark: Ct[800]
  };
}
function yE(e = "light") {
  return e === "dark" ? {
    main: ri[200],
    light: ri[50],
    dark: ri[400]
  } : {
    main: ri[500],
    light: ri[300],
    dark: ri[700]
  };
}
function bE(e = "light") {
  return e === "dark" ? {
    main: Bt[500],
    light: Bt[300],
    dark: Bt[700]
  } : {
    main: Bt[700],
    light: Bt[400],
    dark: Bt[800]
  };
}
function SE(e = "light") {
  return e === "dark" ? {
    main: Nt[400],
    light: Nt[300],
    dark: Nt[700]
  } : {
    main: Nt[700],
    light: Nt[500],
    dark: Nt[900]
  };
}
function xE(e = "light") {
  return e === "dark" ? {
    main: Wt[400],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: Wt[800],
    light: Wt[500],
    dark: Wt[900]
  };
}
function wE(e = "light") {
  return e === "dark" ? {
    main: Fi[400],
    light: Fi[300],
    dark: Fi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fi[500],
    dark: Fi[900]
  };
}
function EE(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Hl(e) {
  const {
    mode: n = "light",
    contrastThreshold: r = 3,
    tonalOffset: o = 0.2,
    colorSpace: s,
    ...l
  } = e, u = e.primary || vE(n), p = e.secondary || yE(n), c = e.error || bE(n), h = e.info || SE(n), y = e.success || xE(n), v = e.warning || wE(n);
  function E(I) {
    if (s)
      return EE(I);
    const _ = xd(I, Ol.text.primary) >= r ? Ol.text.primary : Ap.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = xd(I, _);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${_} on ${I}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return _;
  }
  const d = ({
    color: I,
    name: _,
    mainShade: C = 500,
    lightShade: M = 300,
    darkShade: R = 700
  }) => {
    if (I = {
      ...I
    }, !I.main && I[C] && (I.main = I[C]), !I.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${_ ? ` (${_})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : kn(11, _ ? ` (${_})` : "", C));
    if (typeof I.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${_ ? ` (${_})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(I.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : kn(12, _ ? ` (${_})` : "", JSON.stringify(I.main)));
    return s ? (Od(s, I, "light", M, o), Od(s, I, "dark", R, o)) : (Id(I, "light", M, o), Id(I, "dark", R, o)), I.contrastText || (I.contrastText = E(I.main)), I;
  };
  let g;
  return n === "light" ? g = Op() : n === "dark" && (g = zp()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${n}\` is not supported.`)), dr({
    // A collection of common colors.
    common: {
      ...qi
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
      color: v,
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
    grey: ce,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: E,
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
function _E(e) {
  const n = {};
  return Object.entries(e).forEach((o) => {
    const [s, l] = o;
    typeof l == "object" && (n[s] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), n;
}
function CE(e, n) {
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
function TE(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ad = {
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
    ...v
  } = typeof n == "function" ? n(e) : n;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, d = y || ((I) => `${I / c * E}rem`), g = (I, _, C, M, R) => ({
    fontFamily: r,
    fontWeight: I,
    fontSize: d(_),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === zd ? {
      letterSpacing: `${TE(M / _)}em`
    } : {},
    ...R,
    ...h
  }), x = {
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
    button: g(u, 14, 1.75, 0.4, Ad),
    caption: g(l, 12, 1.66, 0.4),
    overline: g(l, 12, 2.66, 1, Ad),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return dr({
    htmlFontSize: c,
    pxToRem: d,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: l,
    fontWeightMedium: u,
    fontWeightBold: p,
    ...x
  }, v, {
    clone: !1
    // No need to clone deep
  });
}
const ME = 0.2, IE = 0.14, OE = 0.12;
function it(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ME})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${IE})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${OE})`].join(",");
}
const AE = ["none", it(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), it(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), it(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), it(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), it(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), it(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), it(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), it(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), it(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), it(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), it(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), it(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), it(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), it(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), it(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), it(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), it(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), it(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), it(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), it(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), it(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), it(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), it(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), it(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, PE = {
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
function Pd(e) {
  return `${Math.round(e)}ms`;
}
function RE(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function LE(e) {
  const n = {
    ...zE,
    ...e.easing
  }, r = {
    ...PE,
    ...e.duration
  };
  return {
    getAutoHeightDuration: RE,
    create: (s = ["all"], l = {}) => {
      const {
        duration: u = r.standard,
        easing: p = n.easeInOut,
        delay: c = 0,
        ...h
      } = l;
      if (process.env.NODE_ENV !== "production") {
        const y = (E) => typeof E == "string", v = (E) => !Number.isNaN(parseFloat(E));
        !y(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !v(u) && !y(u) && console.error(`MUI: Argument "duration" must be a number or a string but found ${u}.`), y(p) || console.error('MUI: Argument "easing" must be a string.'), !v(c) && !y(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof l != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof u == "string" ? u : Pd(u)} ${p} ${typeof c == "string" ? c : Pd(c)}`).join(",");
    },
    ...e,
    easing: n,
    duration: r
  };
}
const $E = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function kE(e) {
  return hn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rp(e = {}) {
  const n = {
    ...e
  };
  function r(o) {
    const s = Object.entries(o);
    for (let l = 0; l < s.length; l++) {
      const [u, p] = s[l];
      !kE(p) || u.startsWith("unstable_") ? delete o[u] : hn(p) && (o[u] = {
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
function Rd(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const DE = (e) => {
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
function BE(e) {
  Object.assign(e, {
    alpha(n, r) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${n} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : o.vars ? `rgba(${n.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : mt(n, DE(r));
    },
    lighten(n, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${n}, #fff ${Rd(r)})` : Ms(n, r);
    },
    darken(n, r) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${n}, #000 ${Rd(r)})` : Ts(n, r);
    }
  });
}
function Al(e = {}, ...n) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : kn(20));
  const v = Hl({
    ...l,
    colorSpace: h
  }), E = xp(e);
  let d = dr(E, {
    mixins: CE(E.breakpoints, o),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: AE.slice(),
    typography: Pp(v, p),
    transitions: LE(u),
    zIndex: {
      ...$E
    }
  });
  if (d = dr(d, y), d = n.reduce((g, x) => dr(g, x), d), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (I, _) => {
      let C;
      for (C in I) {
        const M = I[C];
        if (g.includes(C) && Object.keys(M).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = Gw("", C);
            console.error([`MUI: The \`${_}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(I, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: M
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          I[C] = {};
        }
      }
    };
    Object.keys(d.components).forEach((I) => {
      const _ = d.components[I].styleOverrides;
      _ && I.startsWith("Mui") && x(_, I);
    });
  }
  return d.unstable_sxConfig = {
    ..._s,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, d.unstable_sx = function(x) {
    return eo({
      sx: x,
      theme: this
    });
  }, d.toRuntimeSource = Rp, BE(d), d;
}
function NE(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const WE = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const r = NE(n);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Lp(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function $p(e) {
  return e === "dark" ? WE : [];
}
function VE(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: o,
    colorSpace: s,
    ...l
  } = e, u = Hl({
    ...n,
    colorSpace: s
  });
  return {
    palette: u,
    opacity: {
      ...Lp(u.mode),
      ...r
    },
    overlays: o || $p(u.mode),
    ...l
  };
}
function FE(e) {
  var n;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((n = e[1]) != null && n.match(/(mode|contrastThreshold|tonalOffset)/));
}
const GE = (e) => [...[...Array(25)].map((n, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], YE = (e) => (n, r) => {
  const o = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let l = s;
  if (s === "class" && (l = ".%s"), s === "data" && (l = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (l = `[${s}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const u = {};
      return GE(e.cssVarPrefix).forEach((p) => {
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
function jE(e, n) {
  n.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function j(e, n, r) {
  !e[n] && r && (e[n] = r);
}
function Yi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : _p(e);
}
function en(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = Gi(Yi(e[n]), `MUI: Can't create \`palette.${n}Channel\` because \`palette.${n}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${n}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function HE(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Wr = (e) => {
  try {
    return e();
  } catch {
  }
}, UE = (e = "mui") => dE(e);
function ml(e, n, r, o, s) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const l = s === "dark" ? "dark" : "light";
  if (!o) {
    n[s] = VE({
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
  } = Al({
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
      ...Lp(l),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || $p(l)
  }, p;
}
function XE(e = {}, ...n) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: s = !1,
    cssVarPrefix: l = "mui",
    nativeColor: u = !1,
    shouldSkipGeneratingVar: p = FE,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...y
  } = e, v = Object.keys(r)[0], E = o || (r.light && v !== "light" ? "light" : v), d = UE(l), {
    [E]: g,
    light: x,
    dark: I,
    ..._
  } = r, C = {
    ..._
  };
  let M = g;
  if ((E === "dark" && !("dark" in r) || E === "light" && !("light" in r)) && (M = !0), !M)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${E}\` option is either missing or invalid.` : kn(21, E));
  let R;
  u && (R = "oklch");
  const A = ml(R, C, M, y, E);
  x && !C.light && ml(R, C, x, void 0, "light"), I && !C.dark && ml(R, C, I, void 0, "dark");
  let Y = {
    defaultColorScheme: E,
    ...A,
    cssVarPrefix: l,
    colorSchemeSelector: c,
    rootSelector: h,
    getCssVar: d,
    colorSchemes: C,
    font: {
      ..._E(A.typography),
      ...A.font
    },
    spacing: HE(y.spacing)
  };
  Object.keys(Y.colorSchemes).forEach((W) => {
    const b = Y.colorSchemes[W].palette, G = (ee) => {
      const ae = ee.split("-"), pe = ae[1], te = ae[2];
      return d(ee, b[pe][te]);
    };
    b.mode === "light" && (j(b.common, "background", "#fff"), j(b.common, "onBackground", "#000")), b.mode === "dark" && (j(b.common, "background", "#000"), j(b.common, "onBackground", "#fff"));
    function D(ee, ae, pe) {
      if (R) {
        let te;
        return ee === An && (te = `transparent ${((1 - pe) * 100).toFixed(0)}%`), ee === Ue && (te = `#000 ${(pe * 100).toFixed(0)}%`), ee === Xe && (te = `#fff ${(pe * 100).toFixed(0)}%`), `color-mix(in ${R}, ${ae}, ${te})`;
      }
      return ee(ae, pe);
    }
    if (jE(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      j(b.Alert, "errorColor", D(Ue, u ? d("palette-error-light") : b.error.light, 0.6)), j(b.Alert, "infoColor", D(Ue, u ? d("palette-info-light") : b.info.light, 0.6)), j(b.Alert, "successColor", D(Ue, u ? d("palette-success-light") : b.success.light, 0.6)), j(b.Alert, "warningColor", D(Ue, u ? d("palette-warning-light") : b.warning.light, 0.6)), j(b.Alert, "errorFilledBg", G("palette-error-main")), j(b.Alert, "infoFilledBg", G("palette-info-main")), j(b.Alert, "successFilledBg", G("palette-success-main")), j(b.Alert, "warningFilledBg", G("palette-warning-main")), j(b.Alert, "errorFilledColor", Wr(() => b.getContrastText(b.error.main))), j(b.Alert, "infoFilledColor", Wr(() => b.getContrastText(b.info.main))), j(b.Alert, "successFilledColor", Wr(() => b.getContrastText(b.success.main))), j(b.Alert, "warningFilledColor", Wr(() => b.getContrastText(b.warning.main))), j(b.Alert, "errorStandardBg", D(Xe, u ? d("palette-error-light") : b.error.light, 0.9)), j(b.Alert, "infoStandardBg", D(Xe, u ? d("palette-info-light") : b.info.light, 0.9)), j(b.Alert, "successStandardBg", D(Xe, u ? d("palette-success-light") : b.success.light, 0.9)), j(b.Alert, "warningStandardBg", D(Xe, u ? d("palette-warning-light") : b.warning.light, 0.9)), j(b.Alert, "errorIconColor", G("palette-error-main")), j(b.Alert, "infoIconColor", G("palette-info-main")), j(b.Alert, "successIconColor", G("palette-success-main")), j(b.Alert, "warningIconColor", G("palette-warning-main")), j(b.AppBar, "defaultBg", G("palette-grey-100")), j(b.Avatar, "defaultBg", G("palette-grey-400")), j(b.Button, "inheritContainedBg", G("palette-grey-300")), j(b.Button, "inheritContainedHoverBg", G("palette-grey-A100")), j(b.Chip, "defaultBorder", G("palette-grey-400")), j(b.Chip, "defaultAvatarColor", G("palette-grey-700")), j(b.Chip, "defaultIconColor", G("palette-grey-700")), j(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), j(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), j(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), j(b.LinearProgress, "primaryBg", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), j(b.LinearProgress, "secondaryBg", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), j(b.LinearProgress, "errorBg", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), j(b.LinearProgress, "infoBg", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), j(b.LinearProgress, "successBg", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), j(b.LinearProgress, "warningBg", D(Xe, u ? d("palette-warning-light") : b.warning.main, 0.62)), j(b.Skeleton, "bg", R ? D(An, u ? d("palette-text-primary") : b.text.primary, 0.11) : `rgba(${G("palette-text-primaryChannel")} / 0.11)`), j(b.Slider, "primaryTrack", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), j(b.Slider, "secondaryTrack", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), j(b.Slider, "errorTrack", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), j(b.Slider, "infoTrack", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), j(b.Slider, "successTrack", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), j(b.Slider, "warningTrack", D(Xe, u ? d("palette-warning-main") : b.warning.main, 0.62));
      const ee = R ? D(Ue, u ? d("palette-background-default") : b.background.default, 0.6825) : Qo(b.background.default, 0.8);
      j(b.SnackbarContent, "bg", ee), j(b.SnackbarContent, "color", Wr(() => R ? Ol.text.primary : b.getContrastText(ee))), j(b.SpeedDialAction, "fabHoverBg", Qo(b.background.paper, 0.15)), j(b.StepConnector, "border", G("palette-grey-400")), j(b.StepContent, "border", G("palette-grey-400")), j(b.Switch, "defaultColor", G("palette-common-white")), j(b.Switch, "defaultDisabledColor", G("palette-grey-100")), j(b.Switch, "primaryDisabledColor", D(Xe, u ? d("palette-primary-main") : b.primary.main, 0.62)), j(b.Switch, "secondaryDisabledColor", D(Xe, u ? d("palette-secondary-main") : b.secondary.main, 0.62)), j(b.Switch, "errorDisabledColor", D(Xe, u ? d("palette-error-main") : b.error.main, 0.62)), j(b.Switch, "infoDisabledColor", D(Xe, u ? d("palette-info-main") : b.info.main, 0.62)), j(b.Switch, "successDisabledColor", D(Xe, u ? d("palette-success-main") : b.success.main, 0.62)), j(b.Switch, "warningDisabledColor", D(Xe, u ? d("palette-warning-main") : b.warning.main, 0.62)), j(b.TableCell, "border", D(Xe, An(u ? d("palette-divider") : b.divider, 1), 0.88)), j(b.Tooltip, "bg", D(An, u ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      j(b.Alert, "errorColor", D(Xe, u ? d("palette-error-light") : b.error.light, 0.6)), j(b.Alert, "infoColor", D(Xe, u ? d("palette-info-light") : b.info.light, 0.6)), j(b.Alert, "successColor", D(Xe, u ? d("palette-success-light") : b.success.light, 0.6)), j(b.Alert, "warningColor", D(Xe, u ? d("palette-warning-light") : b.warning.light, 0.6)), j(b.Alert, "errorFilledBg", G("palette-error-dark")), j(b.Alert, "infoFilledBg", G("palette-info-dark")), j(b.Alert, "successFilledBg", G("palette-success-dark")), j(b.Alert, "warningFilledBg", G("palette-warning-dark")), j(b.Alert, "errorFilledColor", Wr(() => b.getContrastText(b.error.dark))), j(b.Alert, "infoFilledColor", Wr(() => b.getContrastText(b.info.dark))), j(b.Alert, "successFilledColor", Wr(() => b.getContrastText(b.success.dark))), j(b.Alert, "warningFilledColor", Wr(() => b.getContrastText(b.warning.dark))), j(b.Alert, "errorStandardBg", D(Ue, u ? d("palette-error-light") : b.error.light, 0.9)), j(b.Alert, "infoStandardBg", D(Ue, u ? d("palette-info-light") : b.info.light, 0.9)), j(b.Alert, "successStandardBg", D(Ue, u ? d("palette-success-light") : b.success.light, 0.9)), j(b.Alert, "warningStandardBg", D(Ue, u ? d("palette-warning-light") : b.warning.light, 0.9)), j(b.Alert, "errorIconColor", G("palette-error-main")), j(b.Alert, "infoIconColor", G("palette-info-main")), j(b.Alert, "successIconColor", G("palette-success-main")), j(b.Alert, "warningIconColor", G("palette-warning-main")), j(b.AppBar, "defaultBg", G("palette-grey-900")), j(b.AppBar, "darkBg", G("palette-background-paper")), j(b.AppBar, "darkColor", G("palette-text-primary")), j(b.Avatar, "defaultBg", G("palette-grey-600")), j(b.Button, "inheritContainedBg", G("palette-grey-800")), j(b.Button, "inheritContainedHoverBg", G("palette-grey-700")), j(b.Chip, "defaultBorder", G("palette-grey-700")), j(b.Chip, "defaultAvatarColor", G("palette-grey-300")), j(b.Chip, "defaultIconColor", G("palette-grey-300")), j(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), j(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), j(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), j(b.LinearProgress, "primaryBg", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.5)), j(b.LinearProgress, "secondaryBg", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.5)), j(b.LinearProgress, "errorBg", D(Ue, u ? d("palette-error-main") : b.error.main, 0.5)), j(b.LinearProgress, "infoBg", D(Ue, u ? d("palette-info-main") : b.info.main, 0.5)), j(b.LinearProgress, "successBg", D(Ue, u ? d("palette-success-main") : b.success.main, 0.5)), j(b.LinearProgress, "warningBg", D(Ue, u ? d("palette-warning-main") : b.warning.main, 0.5)), j(b.Skeleton, "bg", R ? D(An, u ? d("palette-text-primary") : b.text.primary, 0.13) : `rgba(${G("palette-text-primaryChannel")} / 0.13)`), j(b.Slider, "primaryTrack", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.5)), j(b.Slider, "secondaryTrack", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.5)), j(b.Slider, "errorTrack", D(Ue, u ? d("palette-error-main") : b.error.main, 0.5)), j(b.Slider, "infoTrack", D(Ue, u ? d("palette-info-main") : b.info.main, 0.5)), j(b.Slider, "successTrack", D(Ue, u ? d("palette-success-main") : b.success.main, 0.5)), j(b.Slider, "warningTrack", D(Ue, u ? d("palette-warning-light") : b.warning.main, 0.5));
      const ee = R ? D(Xe, u ? d("palette-background-default") : b.background.default, 0.985) : Qo(b.background.default, 0.98);
      j(b.SnackbarContent, "bg", ee), j(b.SnackbarContent, "color", Wr(() => R ? Ap.text.primary : b.getContrastText(ee))), j(b.SpeedDialAction, "fabHoverBg", Qo(b.background.paper, 0.15)), j(b.StepConnector, "border", G("palette-grey-600")), j(b.StepContent, "border", G("palette-grey-600")), j(b.Switch, "defaultColor", G("palette-grey-300")), j(b.Switch, "defaultDisabledColor", G("palette-grey-600")), j(b.Switch, "primaryDisabledColor", D(Ue, u ? d("palette-primary-main") : b.primary.main, 0.55)), j(b.Switch, "secondaryDisabledColor", D(Ue, u ? d("palette-secondary-main") : b.secondary.main, 0.55)), j(b.Switch, "errorDisabledColor", D(Ue, u ? d("palette-error-main") : b.error.main, 0.55)), j(b.Switch, "infoDisabledColor", D(Ue, u ? d("palette-info-main") : b.info.main, 0.55)), j(b.Switch, "successDisabledColor", D(Ue, u ? d("palette-success-main") : b.success.main, 0.55)), j(b.Switch, "warningDisabledColor", D(Ue, u ? d("palette-warning-light") : b.warning.main, 0.55)), j(b.TableCell, "border", D(Ue, An(u ? d("palette-divider") : b.divider, 1), 0.68)), j(b.Tooltip, "bg", D(An, u ? d("palette-grey-700") : b.grey[700], 0.92));
    }
    en(b.background, "default"), en(b.background, "paper"), en(b.common, "background"), en(b.common, "onBackground"), en(b, "divider"), Object.keys(b).forEach((ee) => {
      const ae = b[ee];
      ee !== "tonalOffset" && ae && typeof ae == "object" && (ae.main && j(b[ee], "mainChannel", Gi(Yi(ae.main))), ae.light && j(b[ee], "lightChannel", Gi(Yi(ae.light))), ae.dark && j(b[ee], "darkChannel", Gi(Yi(ae.dark))), ae.contrastText && j(b[ee], "contrastTextChannel", Gi(Yi(ae.contrastText))), ee === "text" && (en(b[ee], "primary"), en(b[ee], "secondary")), ee === "action" && (ae.active && en(b[ee], "active"), ae.selected && en(b[ee], "selected")));
    });
  }), Y = n.reduce((W, b) => dr(W, b), Y);
  const B = {
    prefix: l,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: p,
    getSelector: YE(Y),
    enableContrastVars: u
  }, {
    vars: P,
    generateThemeVars: N,
    generateStyleSheets: k
  } = gE(Y, B);
  return Y.vars = P, Object.entries(Y.colorSchemes[Y.defaultColorScheme]).forEach(([W, b]) => {
    Y[W] = b;
  }), Y.generateThemeVars = N, Y.generateStyleSheets = k, Y.generateSpacing = function() {
    return Sp(y.spacing, Bl(this));
  }, Y.getColorSchemeSelector = mE(c), Y.spacing = Y.generateSpacing(), Y.shouldSkipGeneratingVar = p, Y.unstable_sxConfig = {
    ..._s,
    ...y == null ? void 0 : y.unstable_sxConfig
  }, Y.unstable_sx = function(b) {
    return eo({
      sx: b,
      theme: this
    });
  }, Y.toRuntimeSource = Rp, Y;
}
function Ld(e, n, r) {
  e.colorSchemes && r && (e.colorSchemes[n] = {
    ...r !== !0 && r,
    palette: Hl({
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
      return Al(e, ...n);
    let y = r;
    "palette" in e || h[p] && (h[p] !== !0 ? y = h[p].palette : p === "dark" && (y = {
      mode: "dark"
    }));
    const v = Al({
      ...e,
      palette: y
    }, ...n);
    return v.defaultColorScheme = p, v.colorSchemes = h, v.palette.mode === "light" && (v.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: v.palette
    }, Ld(v, "dark", h.dark)), v.palette.mode === "dark" && (v.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: v.palette
    }, Ld(v, "light", h.light)), v;
  }
  return !r && !("light" in h) && p === "light" && (h.light = !0), XE({
    ...u,
    colorSchemes: h,
    defaultColorScheme: p,
    ...typeof o != "boolean" && o
  }, ...n);
}
function qE({
  theme: e,
  ...n
}) {
  const r = fi in e ? e[fi] : void 0;
  return /* @__PURE__ */ ie.jsx(Xi, {
    ...n,
    themeId: r ? fi : void 0,
    theme: r || e
  });
}
const es = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (ye.string, ye.string, ye.string, ye.string, ye.string, ye.oneOf(["dark", "light", "system"]), ye.string, ye.string);
const {
  CssVarsProvider: KE
} = fE({
  themeId: fi,
  // @ts-ignore ignore module augmentation tests
  theme: () => kp({
    cssVariables: !0
  }),
  colorSchemeStorageKey: es.colorSchemeStorageKey,
  modeStorageKey: es.modeStorageKey,
  defaultColorScheme: {
    light: es.defaultLightColorScheme,
    dark: es.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const n = {
      ...e,
      typography: Pp(e.palette, e.typography)
    };
    return n.unstable_sx = function(o) {
      return eo({
        sx: o,
        theme: this
      });
    }, n;
  }
}), ZE = KE;
function JE({
  theme: e,
  ...n
}) {
  const r = Ie.useMemo(() => {
    if (typeof e == "function")
      return e;
    const o = fi in e ? e[fi] : e;
    return "colorSchemes" in o ? null : "vars" in o ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ ie.jsx(qE, {
    theme: r,
    ...n
  }) : /* @__PURE__ */ ie.jsx(ZE, {
    theme: e,
    ...n
  });
}
var hs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
hs.exports;
(function(e, n) {
  (function() {
    var r, o = "4.17.23", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", p = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", h = 500, y = "__lodash_placeholder__", v = 1, E = 2, d = 4, g = 1, x = 2, I = 1, _ = 2, C = 4, M = 8, R = 16, A = 32, Y = 64, B = 128, P = 256, N = 512, k = 30, W = "...", b = 800, G = 16, D = 1, ee = 2, ae = 3, pe = 1 / 0, te = 9007199254740991, Ee = 17976931348623157e292, U = NaN, J = 4294967295, he = J - 1, me = J >>> 1, V = [
      ["ary", B],
      ["bind", I],
      ["bindKey", _],
      ["curry", M],
      ["curryRight", R],
      ["flip", N],
      ["partial", A],
      ["partialRight", Y],
      ["rearg", P]
    ], Z = "[object Arguments]", X = "[object Array]", le = "[object AsyncFunction]", re = "[object Boolean]", se = "[object Date]", fe = "[object DOMException]", be = "[object Error]", oe = "[object Function]", $e = "[object GeneratorFunction]", Be = "[object Map]", ct = "[object Number]", Ut = "[object Null]", ft = "[object Object]", Lt = "[object Promise]", st = "[object Proxy]", Tt = "[object RegExp]", rt = "[object Set]", St = "[object String]", pr = "[object Symbol]", kr = "[object Undefined]", Ft = "[object WeakMap]", Xt = "[object WeakSet]", qt = "[object ArrayBuffer]", Mt = "[object DataView]", Fr = "[object Float32Array]", at = "[object Float64Array]", Ze = "[object Int8Array]", tr = "[object Int16Array]", $t = "[object Int32Array]", It = "[object Uint8Array]", Sn = "[object Uint8ClampedArray]", mi = "[object Uint16Array]", vi = "[object Uint32Array]", yi = /\b__p \+= '';/g, to = /\b(__p \+=) '' \+/g, nn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Dn = /&(?:amp|lt|gt|quot|#39);/g, Bn = /[&<>"']/g, ro = RegExp(Dn.source), Is = RegExp(Bn.source), no = /<%-([\s\S]+?)%>/g, Os = /<%([\s\S]+?)%>/g, bi = /<%=([\s\S]+?)%>/g, io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, As = /^\w*$/, zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nn = /[\\^$.*+?()[\]{}|]/g, oo = RegExp(Nn.source), Si = /^\s+/, Ps = /\s/, Rs = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ls = /\{\n\/\* \[wrapped with (.+)\] \*/, O = /,? & /, ne = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, de = /[()=,{}\[\]\/\s]/, _e = /\\(\\)?/g, Ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ve = /\w*$/, Re = /^[-+]0x[0-9a-f]+$/i, ze = /^0b[01]+$/i, Ot = /^\[object .+?Constructor\]$/, lt = /^0o[0-7]+$/i, dt = /^(?:0|[1-9]\d*)$/, Kt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ar = /($^)/, Gr = /['\n\r\u2028\u2029\\]/g, xt = "\\ud800-\\udfff", xi = "\\u0300-\\u036f", $s = "\\ufe20-\\ufe2f", ks = "\\u20d0-\\u20ff", Xl = xi + $s + ks, ql = "\\u2700-\\u27bf", Kl = "a-z\\xdf-\\xf6\\xf8-\\xff", Bp = "\\xac\\xb1\\xd7\\xf7", Np = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Wp = "\\u2000-\\u206f", Vp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jl = "\\ufe0e\\ufe0f", Ql = Bp + Np + Wp + Vp, Ds = "['’]", Fp = "[" + xt + "]", eu = "[" + Ql + "]", so = "[" + Xl + "]", tu = "\\d+", Gp = "[" + ql + "]", ru = "[" + Kl + "]", nu = "[^" + xt + Ql + tu + ql + Kl + Zl + "]", Bs = "\\ud83c[\\udffb-\\udfff]", Yp = "(?:" + so + "|" + Bs + ")", iu = "[^" + xt + "]", Ns = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wn = "[" + Zl + "]", ou = "\\u200d", su = "(?:" + ru + "|" + nu + ")", jp = "(?:" + Wn + "|" + nu + ")", au = "(?:" + Ds + "(?:d|ll|m|re|s|t|ve))?", lu = "(?:" + Ds + "(?:D|LL|M|RE|S|T|VE))?", uu = Yp + "?", cu = "[" + Jl + "]?", Hp = "(?:" + ou + "(?:" + [iu, Ns, Ws].join("|") + ")" + cu + uu + ")*", Up = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Xp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", fu = cu + uu + Hp, qp = "(?:" + [Gp, Ns, Ws].join("|") + ")" + fu, Kp = "(?:" + [iu + so + "?", so, Ns, Ws, Fp].join("|") + ")", Zp = RegExp(Ds, "g"), Jp = RegExp(so, "g"), Vs = RegExp(Bs + "(?=" + Bs + ")|" + Kp + fu, "g"), Qp = RegExp([
      Wn + "?" + ru + "+" + au + "(?=" + [eu, Wn, "$"].join("|") + ")",
      jp + "+" + lu + "(?=" + [eu, Wn + su, "$"].join("|") + ")",
      Wn + "?" + su + "+" + au,
      Wn + "+" + lu,
      Xp,
      Up,
      tu,
      qp
    ].join("|"), "g"), eh = RegExp("[" + ou + xt + Xl + Jl + "]"), th = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rh = [
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
    ], nh = -1, tt = {};
    tt[Fr] = tt[at] = tt[Ze] = tt[tr] = tt[$t] = tt[It] = tt[Sn] = tt[mi] = tt[vi] = !0, tt[Z] = tt[X] = tt[qt] = tt[re] = tt[Mt] = tt[se] = tt[be] = tt[oe] = tt[Be] = tt[ct] = tt[ft] = tt[Tt] = tt[rt] = tt[St] = tt[Ft] = !1;
    var Qe = {};
    Qe[Z] = Qe[X] = Qe[qt] = Qe[Mt] = Qe[re] = Qe[se] = Qe[Fr] = Qe[at] = Qe[Ze] = Qe[tr] = Qe[$t] = Qe[Be] = Qe[ct] = Qe[ft] = Qe[Tt] = Qe[rt] = Qe[St] = Qe[pr] = Qe[It] = Qe[Sn] = Qe[mi] = Qe[vi] = !0, Qe[be] = Qe[oe] = Qe[Ft] = !1;
    var ih = {
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
    }, oh = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, sh = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, ah = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, lh = parseFloat, uh = parseInt, du = typeof Di == "object" && Di && Di.Object === Object && Di, ch = typeof self == "object" && self && self.Object === Object && self, At = du || ch || Function("return this")(), Fs = n && !n.nodeType && n, xn = Fs && !0 && e && !e.nodeType && e, pu = xn && xn.exports === Fs, Gs = pu && du.process, hr = function() {
      try {
        var L = xn && xn.require && xn.require("util").types;
        return L || Gs && Gs.binding && Gs.binding("util");
      } catch {
      }
    }(), hu = hr && hr.isArrayBuffer, gu = hr && hr.isDate, mu = hr && hr.isMap, vu = hr && hr.isRegExp, yu = hr && hr.isSet, bu = hr && hr.isTypedArray;
    function rr(L, H, F) {
      switch (F.length) {
        case 0:
          return L.call(H);
        case 1:
          return L.call(H, F[0]);
        case 2:
          return L.call(H, F[0], F[1]);
        case 3:
          return L.call(H, F[0], F[1], F[2]);
      }
      return L.apply(H, F);
    }
    function fh(L, H, F, ge) {
      for (var Ce = -1, We = L == null ? 0 : L.length; ++Ce < We; ) {
        var wt = L[Ce];
        H(ge, wt, F(wt), L);
      }
      return ge;
    }
    function gr(L, H) {
      for (var F = -1, ge = L == null ? 0 : L.length; ++F < ge && H(L[F], F, L) !== !1; )
        ;
      return L;
    }
    function dh(L, H) {
      for (var F = L == null ? 0 : L.length; F-- && H(L[F], F, L) !== !1; )
        ;
      return L;
    }
    function Su(L, H) {
      for (var F = -1, ge = L == null ? 0 : L.length; ++F < ge; )
        if (!H(L[F], F, L))
          return !1;
      return !0;
    }
    function on(L, H) {
      for (var F = -1, ge = L == null ? 0 : L.length, Ce = 0, We = []; ++F < ge; ) {
        var wt = L[F];
        H(wt, F, L) && (We[Ce++] = wt);
      }
      return We;
    }
    function ao(L, H) {
      var F = L == null ? 0 : L.length;
      return !!F && Vn(L, H, 0) > -1;
    }
    function Ys(L, H, F) {
      for (var ge = -1, Ce = L == null ? 0 : L.length; ++ge < Ce; )
        if (F(H, L[ge]))
          return !0;
      return !1;
    }
    function nt(L, H) {
      for (var F = -1, ge = L == null ? 0 : L.length, Ce = Array(ge); ++F < ge; )
        Ce[F] = H(L[F], F, L);
      return Ce;
    }
    function sn(L, H) {
      for (var F = -1, ge = H.length, Ce = L.length; ++F < ge; )
        L[Ce + F] = H[F];
      return L;
    }
    function js(L, H, F, ge) {
      var Ce = -1, We = L == null ? 0 : L.length;
      for (ge && We && (F = L[++Ce]); ++Ce < We; )
        F = H(F, L[Ce], Ce, L);
      return F;
    }
    function ph(L, H, F, ge) {
      var Ce = L == null ? 0 : L.length;
      for (ge && Ce && (F = L[--Ce]); Ce--; )
        F = H(F, L[Ce], Ce, L);
      return F;
    }
    function Hs(L, H) {
      for (var F = -1, ge = L == null ? 0 : L.length; ++F < ge; )
        if (H(L[F], F, L))
          return !0;
      return !1;
    }
    var hh = Us("length");
    function gh(L) {
      return L.split("");
    }
    function mh(L) {
      return L.match(ne) || [];
    }
    function xu(L, H, F) {
      var ge;
      return F(L, function(Ce, We, wt) {
        if (H(Ce, We, wt))
          return ge = We, !1;
      }), ge;
    }
    function lo(L, H, F, ge) {
      for (var Ce = L.length, We = F + (ge ? 1 : -1); ge ? We-- : ++We < Ce; )
        if (H(L[We], We, L))
          return We;
      return -1;
    }
    function Vn(L, H, F) {
      return H === H ? Ih(L, H, F) : lo(L, wu, F);
    }
    function vh(L, H, F, ge) {
      for (var Ce = F - 1, We = L.length; ++Ce < We; )
        if (ge(L[Ce], H))
          return Ce;
      return -1;
    }
    function wu(L) {
      return L !== L;
    }
    function Eu(L, H) {
      var F = L == null ? 0 : L.length;
      return F ? qs(L, H) / F : U;
    }
    function Us(L) {
      return function(H) {
        return H == null ? r : H[L];
      };
    }
    function Xs(L) {
      return function(H) {
        return L == null ? r : L[H];
      };
    }
    function _u(L, H, F, ge, Ce) {
      return Ce(L, function(We, wt, Je) {
        F = ge ? (ge = !1, We) : H(F, We, wt, Je);
      }), F;
    }
    function yh(L, H) {
      var F = L.length;
      for (L.sort(H); F--; )
        L[F] = L[F].value;
      return L;
    }
    function qs(L, H) {
      for (var F, ge = -1, Ce = L.length; ++ge < Ce; ) {
        var We = H(L[ge]);
        We !== r && (F = F === r ? We : F + We);
      }
      return F;
    }
    function Ks(L, H) {
      for (var F = -1, ge = Array(L); ++F < L; )
        ge[F] = H(F);
      return ge;
    }
    function bh(L, H) {
      return nt(H, function(F) {
        return [F, L[F]];
      });
    }
    function Cu(L) {
      return L && L.slice(0, Ou(L) + 1).replace(Si, "");
    }
    function nr(L) {
      return function(H) {
        return L(H);
      };
    }
    function Zs(L, H) {
      return nt(H, function(F) {
        return L[F];
      });
    }
    function wi(L, H) {
      return L.has(H);
    }
    function Tu(L, H) {
      for (var F = -1, ge = L.length; ++F < ge && Vn(H, L[F], 0) > -1; )
        ;
      return F;
    }
    function Mu(L, H) {
      for (var F = L.length; F-- && Vn(H, L[F], 0) > -1; )
        ;
      return F;
    }
    function Sh(L, H) {
      for (var F = L.length, ge = 0; F--; )
        L[F] === H && ++ge;
      return ge;
    }
    var xh = Xs(ih), wh = Xs(oh);
    function Eh(L) {
      return "\\" + ah[L];
    }
    function _h(L, H) {
      return L == null ? r : L[H];
    }
    function Fn(L) {
      return eh.test(L);
    }
    function Ch(L) {
      return th.test(L);
    }
    function Th(L) {
      for (var H, F = []; !(H = L.next()).done; )
        F.push(H.value);
      return F;
    }
    function Js(L) {
      var H = -1, F = Array(L.size);
      return L.forEach(function(ge, Ce) {
        F[++H] = [Ce, ge];
      }), F;
    }
    function Iu(L, H) {
      return function(F) {
        return L(H(F));
      };
    }
    function an(L, H) {
      for (var F = -1, ge = L.length, Ce = 0, We = []; ++F < ge; ) {
        var wt = L[F];
        (wt === H || wt === y) && (L[F] = y, We[Ce++] = F);
      }
      return We;
    }
    function uo(L) {
      var H = -1, F = Array(L.size);
      return L.forEach(function(ge) {
        F[++H] = ge;
      }), F;
    }
    function Mh(L) {
      var H = -1, F = Array(L.size);
      return L.forEach(function(ge) {
        F[++H] = [ge, ge];
      }), F;
    }
    function Ih(L, H, F) {
      for (var ge = F - 1, Ce = L.length; ++ge < Ce; )
        if (L[ge] === H)
          return ge;
      return -1;
    }
    function Oh(L, H, F) {
      for (var ge = F + 1; ge--; )
        if (L[ge] === H)
          return ge;
      return ge;
    }
    function Gn(L) {
      return Fn(L) ? zh(L) : hh(L);
    }
    function zr(L) {
      return Fn(L) ? Ph(L) : gh(L);
    }
    function Ou(L) {
      for (var H = L.length; H-- && Ps.test(L.charAt(H)); )
        ;
      return H;
    }
    var Ah = Xs(sh);
    function zh(L) {
      for (var H = Vs.lastIndex = 0; Vs.test(L); )
        ++H;
      return H;
    }
    function Ph(L) {
      return L.match(Vs) || [];
    }
    function Rh(L) {
      return L.match(Qp) || [];
    }
    var Lh = function L(H) {
      H = H == null ? At : Yn.defaults(At.Object(), H, Yn.pick(At, rh));
      var F = H.Array, ge = H.Date, Ce = H.Error, We = H.Function, wt = H.Math, Je = H.Object, Qs = H.RegExp, $h = H.String, mr = H.TypeError, co = F.prototype, kh = We.prototype, jn = Je.prototype, fo = H["__core-js_shared__"], po = kh.toString, Fe = jn.hasOwnProperty, Dh = 0, Au = function() {
        var t = /[^.]+$/.exec(fo && fo.keys && fo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ho = jn.toString, Bh = po.call(Je), Nh = At._, Wh = Qs(
        "^" + po.call(Fe).replace(Nn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), go = pu ? H.Buffer : r, ln = H.Symbol, mo = H.Uint8Array, zu = go ? go.allocUnsafe : r, vo = Iu(Je.getPrototypeOf, Je), Pu = Je.create, Ru = jn.propertyIsEnumerable, yo = co.splice, Lu = ln ? ln.isConcatSpreadable : r, Ei = ln ? ln.iterator : r, wn = ln ? ln.toStringTag : r, bo = function() {
        try {
          var t = Mn(Je, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Vh = H.clearTimeout !== At.clearTimeout && H.clearTimeout, Fh = ge && ge.now !== At.Date.now && ge.now, Gh = H.setTimeout !== At.setTimeout && H.setTimeout, So = wt.ceil, xo = wt.floor, ea = Je.getOwnPropertySymbols, Yh = go ? go.isBuffer : r, $u = H.isFinite, jh = co.join, Hh = Iu(Je.keys, Je), Et = wt.max, kt = wt.min, Uh = ge.now, Xh = H.parseInt, ku = wt.random, qh = co.reverse, ta = Mn(H, "DataView"), _i = Mn(H, "Map"), ra = Mn(H, "Promise"), Hn = Mn(H, "Set"), Ci = Mn(H, "WeakMap"), Ti = Mn(Je, "create"), wo = Ci && new Ci(), Un = {}, Kh = In(ta), Zh = In(_i), Jh = In(ra), Qh = In(Hn), eg = In(Ci), Eo = ln ? ln.prototype : r, Mi = Eo ? Eo.valueOf : r, Du = Eo ? Eo.toString : r;
      function S(t) {
        if (pt(t) && !Te(t) && !(t instanceof Le)) {
          if (t instanceof vr)
            return t;
          if (Fe.call(t, "__wrapped__"))
            return Bc(t);
        }
        return new vr(t);
      }
      var Xn = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!ut(i))
            return {};
          if (Pu)
            return Pu(i);
          t.prototype = i;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function _o() {
      }
      function vr(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      S.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: no,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Os,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: bi,
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
          _: S
        }
      }, S.prototype = _o.prototype, S.prototype.constructor = S, vr.prototype = Xn(_o.prototype), vr.prototype.constructor = vr;
      function Le(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
      }
      function tg() {
        var t = new Le(this.__wrapped__);
        return t.__actions__ = Zt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Zt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Zt(this.__views__), t;
      }
      function rg() {
        if (this.__filtered__) {
          var t = new Le(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function ng() {
        var t = this.__wrapped__.value(), i = this.__dir__, a = Te(t), f = i < 0, m = a ? t.length : 0, w = gm(0, m, this.__views__), T = w.start, z = w.end, $ = z - T, q = f ? z : T - 1, K = this.__iteratees__, Q = K.length, ue = 0, ve = kt($, this.__takeCount__);
        if (!a || !f && m == $ && ve == $)
          return ac(t, this.__actions__);
        var xe = [];
        e:
          for (; $-- && ue < ve; ) {
            q += i;
            for (var Oe = -1, we = t[q]; ++Oe < Q; ) {
              var Pe = K[Oe], ke = Pe.iteratee, sr = Pe.type, jt = ke(we);
              if (sr == ee)
                we = jt;
              else if (!jt) {
                if (sr == D)
                  continue e;
                break e;
              }
            }
            xe[ue++] = we;
          }
        return xe;
      }
      Le.prototype = Xn(_o.prototype), Le.prototype.constructor = Le;
      function En(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function ig() {
        this.__data__ = Ti ? Ti(null) : {}, this.size = 0;
      }
      function og(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function sg(t) {
        var i = this.__data__;
        if (Ti) {
          var a = i[t];
          return a === c ? r : a;
        }
        return Fe.call(i, t) ? i[t] : r;
      }
      function ag(t) {
        var i = this.__data__;
        return Ti ? i[t] !== r : Fe.call(i, t);
      }
      function lg(t, i) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Ti && i === r ? c : i, this;
      }
      En.prototype.clear = ig, En.prototype.delete = og, En.prototype.get = sg, En.prototype.has = ag, En.prototype.set = lg;
      function Yr(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function ug() {
        this.__data__ = [], this.size = 0;
      }
      function cg(t) {
        var i = this.__data__, a = Co(i, t);
        if (a < 0)
          return !1;
        var f = i.length - 1;
        return a == f ? i.pop() : yo.call(i, a, 1), --this.size, !0;
      }
      function fg(t) {
        var i = this.__data__, a = Co(i, t);
        return a < 0 ? r : i[a][1];
      }
      function dg(t) {
        return Co(this.__data__, t) > -1;
      }
      function pg(t, i) {
        var a = this.__data__, f = Co(a, t);
        return f < 0 ? (++this.size, a.push([t, i])) : a[f][1] = i, this;
      }
      Yr.prototype.clear = ug, Yr.prototype.delete = cg, Yr.prototype.get = fg, Yr.prototype.has = dg, Yr.prototype.set = pg;
      function jr(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++i < a; ) {
          var f = t[i];
          this.set(f[0], f[1]);
        }
      }
      function hg() {
        this.size = 0, this.__data__ = {
          hash: new En(),
          map: new (_i || Yr)(),
          string: new En()
        };
      }
      function gg(t) {
        var i = Do(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function mg(t) {
        return Do(this, t).get(t);
      }
      function vg(t) {
        return Do(this, t).has(t);
      }
      function yg(t, i) {
        var a = Do(this, t), f = a.size;
        return a.set(t, i), this.size += a.size == f ? 0 : 1, this;
      }
      jr.prototype.clear = hg, jr.prototype.delete = gg, jr.prototype.get = mg, jr.prototype.has = vg, jr.prototype.set = yg;
      function _n(t) {
        var i = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new jr(); ++i < a; )
          this.add(t[i]);
      }
      function bg(t) {
        return this.__data__.set(t, c), this;
      }
      function Sg(t) {
        return this.__data__.has(t);
      }
      _n.prototype.add = _n.prototype.push = bg, _n.prototype.has = Sg;
      function Pr(t) {
        var i = this.__data__ = new Yr(t);
        this.size = i.size;
      }
      function xg() {
        this.__data__ = new Yr(), this.size = 0;
      }
      function wg(t) {
        var i = this.__data__, a = i.delete(t);
        return this.size = i.size, a;
      }
      function Eg(t) {
        return this.__data__.get(t);
      }
      function _g(t) {
        return this.__data__.has(t);
      }
      function Cg(t, i) {
        var a = this.__data__;
        if (a instanceof Yr) {
          var f = a.__data__;
          if (!_i || f.length < s - 1)
            return f.push([t, i]), this.size = ++a.size, this;
          a = this.__data__ = new jr(f);
        }
        return a.set(t, i), this.size = a.size, this;
      }
      Pr.prototype.clear = xg, Pr.prototype.delete = wg, Pr.prototype.get = Eg, Pr.prototype.has = _g, Pr.prototype.set = Cg;
      function Bu(t, i) {
        var a = Te(t), f = !a && On(t), m = !a && !f && pn(t), w = !a && !f && !m && Jn(t), T = a || f || m || w, z = T ? Ks(t.length, $h) : [], $ = z.length;
        for (var q in t)
          (i || Fe.call(t, q)) && !(T && // Safari 9 has enumerable `arguments.length` in strict mode.
          (q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (q == "offset" || q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (q == "buffer" || q == "byteLength" || q == "byteOffset") || // Skip index properties.
          qr(q, $))) && z.push(q);
        return z;
      }
      function Nu(t) {
        var i = t.length;
        return i ? t[pa(0, i - 1)] : r;
      }
      function Tg(t, i) {
        return Bo(Zt(t), Cn(i, 0, t.length));
      }
      function Mg(t) {
        return Bo(Zt(t));
      }
      function na(t, i, a) {
        (a !== r && !Rr(t[i], a) || a === r && !(i in t)) && Hr(t, i, a);
      }
      function Ii(t, i, a) {
        var f = t[i];
        (!(Fe.call(t, i) && Rr(f, a)) || a === r && !(i in t)) && Hr(t, i, a);
      }
      function Co(t, i) {
        for (var a = t.length; a--; )
          if (Rr(t[a][0], i))
            return a;
        return -1;
      }
      function Ig(t, i, a, f) {
        return un(t, function(m, w, T) {
          i(f, m, a(m), T);
        }), f;
      }
      function Wu(t, i) {
        return t && Br(i, _t(i), t);
      }
      function Og(t, i) {
        return t && Br(i, Qt(i), t);
      }
      function Hr(t, i, a) {
        i == "__proto__" && bo ? bo(t, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[i] = a;
      }
      function ia(t, i) {
        for (var a = -1, f = i.length, m = F(f), w = t == null; ++a < f; )
          m[a] = w ? r : Ba(t, i[a]);
        return m;
      }
      function Cn(t, i, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), i !== r && (t = t >= i ? t : i)), t;
      }
      function yr(t, i, a, f, m, w) {
        var T, z = i & v, $ = i & E, q = i & d;
        if (a && (T = m ? a(t, f, m, w) : a(t)), T !== r)
          return T;
        if (!ut(t))
          return t;
        var K = Te(t);
        if (K) {
          if (T = vm(t), !z)
            return Zt(t, T);
        } else {
          var Q = Dt(t), ue = Q == oe || Q == $e;
          if (pn(t))
            return cc(t, z);
          if (Q == ft || Q == Z || ue && !m) {
            if (T = $ || ue ? {} : Oc(t), !z)
              return $ ? sm(t, Og(T, t)) : om(t, Wu(T, t));
          } else {
            if (!Qe[Q])
              return m ? t : {};
            T = ym(t, Q, z);
          }
        }
        w || (w = new Pr());
        var ve = w.get(t);
        if (ve)
          return ve;
        w.set(t, T), of(t) ? t.forEach(function(we) {
          T.add(yr(we, i, a, we, t, w));
        }) : rf(t) && t.forEach(function(we, Pe) {
          T.set(Pe, yr(we, i, a, Pe, t, w));
        });
        var xe = q ? $ ? _a : Ea : $ ? Qt : _t, Oe = K ? r : xe(t);
        return gr(Oe || t, function(we, Pe) {
          Oe && (Pe = we, we = t[Pe]), Ii(T, Pe, yr(we, i, a, Pe, t, w));
        }), T;
      }
      function Ag(t) {
        var i = _t(t);
        return function(a) {
          return Vu(a, t, i);
        };
      }
      function Vu(t, i, a) {
        var f = a.length;
        if (t == null)
          return !f;
        for (t = Je(t); f--; ) {
          var m = a[f], w = i[m], T = t[m];
          if (T === r && !(m in t) || !w(T))
            return !1;
        }
        return !0;
      }
      function Fu(t, i, a) {
        if (typeof t != "function")
          throw new mr(u);
        return $i(function() {
          t.apply(r, a);
        }, i);
      }
      function Oi(t, i, a, f) {
        var m = -1, w = ao, T = !0, z = t.length, $ = [], q = i.length;
        if (!z)
          return $;
        a && (i = nt(i, nr(a))), f ? (w = Ys, T = !1) : i.length >= s && (w = wi, T = !1, i = new _n(i));
        e:
          for (; ++m < z; ) {
            var K = t[m], Q = a == null ? K : a(K);
            if (K = f || K !== 0 ? K : 0, T && Q === Q) {
              for (var ue = q; ue--; )
                if (i[ue] === Q)
                  continue e;
              $.push(K);
            } else w(i, Q, f) || $.push(K);
          }
        return $;
      }
      var un = gc(Dr), Gu = gc(sa, !0);
      function zg(t, i) {
        var a = !0;
        return un(t, function(f, m, w) {
          return a = !!i(f, m, w), a;
        }), a;
      }
      function To(t, i, a) {
        for (var f = -1, m = t.length; ++f < m; ) {
          var w = t[f], T = i(w);
          if (T != null && (z === r ? T === T && !or(T) : a(T, z)))
            var z = T, $ = w;
        }
        return $;
      }
      function Pg(t, i, a, f) {
        var m = t.length;
        for (a = Me(a), a < 0 && (a = -a > m ? 0 : m + a), f = f === r || f > m ? m : Me(f), f < 0 && (f += m), f = a > f ? 0 : af(f); a < f; )
          t[a++] = i;
        return t;
      }
      function Yu(t, i) {
        var a = [];
        return un(t, function(f, m, w) {
          i(f, m, w) && a.push(f);
        }), a;
      }
      function zt(t, i, a, f, m) {
        var w = -1, T = t.length;
        for (a || (a = Sm), m || (m = []); ++w < T; ) {
          var z = t[w];
          i > 0 && a(z) ? i > 1 ? zt(z, i - 1, a, f, m) : sn(m, z) : f || (m[m.length] = z);
        }
        return m;
      }
      var oa = mc(), ju = mc(!0);
      function Dr(t, i) {
        return t && oa(t, i, _t);
      }
      function sa(t, i) {
        return t && ju(t, i, _t);
      }
      function Mo(t, i) {
        return on(i, function(a) {
          return Kr(t[a]);
        });
      }
      function Tn(t, i) {
        i = fn(i, t);
        for (var a = 0, f = i.length; t != null && a < f; )
          t = t[Nr(i[a++])];
        return a && a == f ? t : r;
      }
      function Hu(t, i, a) {
        var f = i(t);
        return Te(t) ? f : sn(f, a(t));
      }
      function Gt(t) {
        return t == null ? t === r ? kr : Ut : wn && wn in Je(t) ? hm(t) : Mm(t);
      }
      function aa(t, i) {
        return t > i;
      }
      function Rg(t, i) {
        return t != null && Fe.call(t, i);
      }
      function Lg(t, i) {
        return t != null && i in Je(t);
      }
      function $g(t, i, a) {
        return t >= kt(i, a) && t < Et(i, a);
      }
      function la(t, i, a) {
        for (var f = a ? Ys : ao, m = t[0].length, w = t.length, T = w, z = F(w), $ = 1 / 0, q = []; T--; ) {
          var K = t[T];
          T && i && (K = nt(K, nr(i))), $ = kt(K.length, $), z[T] = !a && (i || m >= 120 && K.length >= 120) ? new _n(T && K) : r;
        }
        K = t[0];
        var Q = -1, ue = z[0];
        e:
          for (; ++Q < m && q.length < $; ) {
            var ve = K[Q], xe = i ? i(ve) : ve;
            if (ve = a || ve !== 0 ? ve : 0, !(ue ? wi(ue, xe) : f(q, xe, a))) {
              for (T = w; --T; ) {
                var Oe = z[T];
                if (!(Oe ? wi(Oe, xe) : f(t[T], xe, a)))
                  continue e;
              }
              ue && ue.push(xe), q.push(ve);
            }
          }
        return q;
      }
      function kg(t, i, a, f) {
        return Dr(t, function(m, w, T) {
          i(f, a(m), w, T);
        }), f;
      }
      function Ai(t, i, a) {
        i = fn(i, t), t = Rc(t, i);
        var f = t == null ? t : t[Nr(Sr(i))];
        return f == null ? r : rr(f, t, a);
      }
      function Uu(t) {
        return pt(t) && Gt(t) == Z;
      }
      function Dg(t) {
        return pt(t) && Gt(t) == qt;
      }
      function Bg(t) {
        return pt(t) && Gt(t) == se;
      }
      function zi(t, i, a, f, m) {
        return t === i ? !0 : t == null || i == null || !pt(t) && !pt(i) ? t !== t && i !== i : Ng(t, i, a, f, zi, m);
      }
      function Ng(t, i, a, f, m, w) {
        var T = Te(t), z = Te(i), $ = T ? X : Dt(t), q = z ? X : Dt(i);
        $ = $ == Z ? ft : $, q = q == Z ? ft : q;
        var K = $ == ft, Q = q == ft, ue = $ == q;
        if (ue && pn(t)) {
          if (!pn(i))
            return !1;
          T = !0, K = !1;
        }
        if (ue && !K)
          return w || (w = new Pr()), T || Jn(t) ? Tc(t, i, a, f, m, w) : dm(t, i, $, a, f, m, w);
        if (!(a & g)) {
          var ve = K && Fe.call(t, "__wrapped__"), xe = Q && Fe.call(i, "__wrapped__");
          if (ve || xe) {
            var Oe = ve ? t.value() : t, we = xe ? i.value() : i;
            return w || (w = new Pr()), m(Oe, we, a, f, w);
          }
        }
        return ue ? (w || (w = new Pr()), pm(t, i, a, f, m, w)) : !1;
      }
      function Wg(t) {
        return pt(t) && Dt(t) == Be;
      }
      function ua(t, i, a, f) {
        var m = a.length, w = m, T = !f;
        if (t == null)
          return !w;
        for (t = Je(t); m--; ) {
          var z = a[m];
          if (T && z[2] ? z[1] !== t[z[0]] : !(z[0] in t))
            return !1;
        }
        for (; ++m < w; ) {
          z = a[m];
          var $ = z[0], q = t[$], K = z[1];
          if (T && z[2]) {
            if (q === r && !($ in t))
              return !1;
          } else {
            var Q = new Pr();
            if (f)
              var ue = f(q, K, $, t, i, Q);
            if (!(ue === r ? zi(K, q, g | x, f, Q) : ue))
              return !1;
          }
        }
        return !0;
      }
      function Xu(t) {
        if (!ut(t) || wm(t))
          return !1;
        var i = Kr(t) ? Wh : Ot;
        return i.test(In(t));
      }
      function Vg(t) {
        return pt(t) && Gt(t) == Tt;
      }
      function Fg(t) {
        return pt(t) && Dt(t) == rt;
      }
      function Gg(t) {
        return pt(t) && Yo(t.length) && !!tt[Gt(t)];
      }
      function qu(t) {
        return typeof t == "function" ? t : t == null ? er : typeof t == "object" ? Te(t) ? Ju(t[0], t[1]) : Zu(t) : yf(t);
      }
      function ca(t) {
        if (!Li(t))
          return Hh(t);
        var i = [];
        for (var a in Je(t))
          Fe.call(t, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Yg(t) {
        if (!ut(t))
          return Tm(t);
        var i = Li(t), a = [];
        for (var f in t)
          f == "constructor" && (i || !Fe.call(t, f)) || a.push(f);
        return a;
      }
      function fa(t, i) {
        return t < i;
      }
      function Ku(t, i) {
        var a = -1, f = Jt(t) ? F(t.length) : [];
        return un(t, function(m, w, T) {
          f[++a] = i(m, w, T);
        }), f;
      }
      function Zu(t) {
        var i = Ta(t);
        return i.length == 1 && i[0][2] ? zc(i[0][0], i[0][1]) : function(a) {
          return a === t || ua(a, t, i);
        };
      }
      function Ju(t, i) {
        return Ia(t) && Ac(i) ? zc(Nr(t), i) : function(a) {
          var f = Ba(a, t);
          return f === r && f === i ? Na(a, t) : zi(i, f, g | x);
        };
      }
      function Io(t, i, a, f, m) {
        t !== i && oa(i, function(w, T) {
          if (m || (m = new Pr()), ut(w))
            jg(t, i, T, a, Io, f, m);
          else {
            var z = f ? f(Aa(t, T), w, T + "", t, i, m) : r;
            z === r && (z = w), na(t, T, z);
          }
        }, Qt);
      }
      function jg(t, i, a, f, m, w, T) {
        var z = Aa(t, a), $ = Aa(i, a), q = T.get($);
        if (q) {
          na(t, a, q);
          return;
        }
        var K = w ? w(z, $, a + "", t, i, T) : r, Q = K === r;
        if (Q) {
          var ue = Te($), ve = !ue && pn($), xe = !ue && !ve && Jn($);
          K = $, ue || ve || xe ? Te(z) ? K = z : vt(z) ? K = Zt(z) : ve ? (Q = !1, K = cc($, !0)) : xe ? (Q = !1, K = fc($, !0)) : K = [] : ki($) || On($) ? (K = z, On(z) ? K = lf(z) : (!ut(z) || Kr(z)) && (K = Oc($))) : Q = !1;
        }
        Q && (T.set($, K), m(K, $, f, w, T), T.delete($)), na(t, a, K);
      }
      function Qu(t, i) {
        var a = t.length;
        if (a)
          return i += i < 0 ? a : 0, qr(i, a) ? t[i] : r;
      }
      function ec(t, i, a) {
        i.length ? i = nt(i, function(w) {
          return Te(w) ? function(T) {
            return Tn(T, w.length === 1 ? w[0] : w);
          } : w;
        }) : i = [er];
        var f = -1;
        i = nt(i, nr(Se()));
        var m = Ku(t, function(w, T, z) {
          var $ = nt(i, function(q) {
            return q(w);
          });
          return { criteria: $, index: ++f, value: w };
        });
        return yh(m, function(w, T) {
          return im(w, T, a);
        });
      }
      function Hg(t, i) {
        return tc(t, i, function(a, f) {
          return Na(t, f);
        });
      }
      function tc(t, i, a) {
        for (var f = -1, m = i.length, w = {}; ++f < m; ) {
          var T = i[f], z = Tn(t, T);
          a(z, T) && Pi(w, fn(T, t), z);
        }
        return w;
      }
      function Ug(t) {
        return function(i) {
          return Tn(i, t);
        };
      }
      function da(t, i, a, f) {
        var m = f ? vh : Vn, w = -1, T = i.length, z = t;
        for (t === i && (i = Zt(i)), a && (z = nt(t, nr(a))); ++w < T; )
          for (var $ = 0, q = i[w], K = a ? a(q) : q; ($ = m(z, K, $, f)) > -1; )
            z !== t && yo.call(z, $, 1), yo.call(t, $, 1);
        return t;
      }
      function rc(t, i) {
        for (var a = t ? i.length : 0, f = a - 1; a--; ) {
          var m = i[a];
          if (a == f || m !== w) {
            var w = m;
            qr(m) ? yo.call(t, m, 1) : ma(t, m);
          }
        }
        return t;
      }
      function pa(t, i) {
        return t + xo(ku() * (i - t + 1));
      }
      function Xg(t, i, a, f) {
        for (var m = -1, w = Et(So((i - t) / (a || 1)), 0), T = F(w); w--; )
          T[f ? w : ++m] = t, t += a;
        return T;
      }
      function ha(t, i) {
        var a = "";
        if (!t || i < 1 || i > te)
          return a;
        do
          i % 2 && (a += t), i = xo(i / 2), i && (t += t);
        while (i);
        return a;
      }
      function Ae(t, i) {
        return za(Pc(t, i, er), t + "");
      }
      function qg(t) {
        return Nu(Qn(t));
      }
      function Kg(t, i) {
        var a = Qn(t);
        return Bo(a, Cn(i, 0, a.length));
      }
      function Pi(t, i, a, f) {
        if (!ut(t))
          return t;
        i = fn(i, t);
        for (var m = -1, w = i.length, T = w - 1, z = t; z != null && ++m < w; ) {
          var $ = Nr(i[m]), q = a;
          if ($ === "__proto__" || $ === "constructor" || $ === "prototype")
            return t;
          if (m != T) {
            var K = z[$];
            q = f ? f(K, $, z) : r, q === r && (q = ut(K) ? K : qr(i[m + 1]) ? [] : {});
          }
          Ii(z, $, q), z = z[$];
        }
        return t;
      }
      var nc = wo ? function(t, i) {
        return wo.set(t, i), t;
      } : er, Zg = bo ? function(t, i) {
        return bo(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Va(i),
          writable: !0
        });
      } : er;
      function Jg(t) {
        return Bo(Qn(t));
      }
      function br(t, i, a) {
        var f = -1, m = t.length;
        i < 0 && (i = -i > m ? 0 : m + i), a = a > m ? m : a, a < 0 && (a += m), m = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var w = F(m); ++f < m; )
          w[f] = t[f + i];
        return w;
      }
      function Qg(t, i) {
        var a;
        return un(t, function(f, m, w) {
          return a = i(f, m, w), !a;
        }), !!a;
      }
      function Oo(t, i, a) {
        var f = 0, m = t == null ? f : t.length;
        if (typeof i == "number" && i === i && m <= me) {
          for (; f < m; ) {
            var w = f + m >>> 1, T = t[w];
            T !== null && !or(T) && (a ? T <= i : T < i) ? f = w + 1 : m = w;
          }
          return m;
        }
        return ga(t, i, er, a);
      }
      function ga(t, i, a, f) {
        var m = 0, w = t == null ? 0 : t.length;
        if (w === 0)
          return 0;
        i = a(i);
        for (var T = i !== i, z = i === null, $ = or(i), q = i === r; m < w; ) {
          var K = xo((m + w) / 2), Q = a(t[K]), ue = Q !== r, ve = Q === null, xe = Q === Q, Oe = or(Q);
          if (T)
            var we = f || xe;
          else q ? we = xe && (f || ue) : z ? we = xe && ue && (f || !ve) : $ ? we = xe && ue && !ve && (f || !Oe) : ve || Oe ? we = !1 : we = f ? Q <= i : Q < i;
          we ? m = K + 1 : w = K;
        }
        return kt(w, he);
      }
      function ic(t, i) {
        for (var a = -1, f = t.length, m = 0, w = []; ++a < f; ) {
          var T = t[a], z = i ? i(T) : T;
          if (!a || !Rr(z, $)) {
            var $ = z;
            w[m++] = T === 0 ? 0 : T;
          }
        }
        return w;
      }
      function oc(t) {
        return typeof t == "number" ? t : or(t) ? U : +t;
      }
      function ir(t) {
        if (typeof t == "string")
          return t;
        if (Te(t))
          return nt(t, ir) + "";
        if (or(t))
          return Du ? Du.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -pe ? "-0" : i;
      }
      function cn(t, i, a) {
        var f = -1, m = ao, w = t.length, T = !0, z = [], $ = z;
        if (a)
          T = !1, m = Ys;
        else if (w >= s) {
          var q = i ? null : cm(t);
          if (q)
            return uo(q);
          T = !1, m = wi, $ = new _n();
        } else
          $ = i ? [] : z;
        e:
          for (; ++f < w; ) {
            var K = t[f], Q = i ? i(K) : K;
            if (K = a || K !== 0 ? K : 0, T && Q === Q) {
              for (var ue = $.length; ue--; )
                if ($[ue] === Q)
                  continue e;
              i && $.push(Q), z.push(K);
            } else m($, Q, a) || ($ !== z && $.push(Q), z.push(K));
          }
        return z;
      }
      function ma(t, i) {
        i = fn(i, t);
        var a = -1, f = i.length;
        if (!f)
          return !0;
        for (var m = t == null || typeof t != "object" && typeof t != "function"; ++a < f; ) {
          var w = i[a];
          if (typeof w == "string") {
            if (w === "__proto__" && !Fe.call(t, "__proto__"))
              return !1;
            if (w === "constructor" && a + 1 < f && typeof i[a + 1] == "string" && i[a + 1] === "prototype") {
              if (m && a === 0)
                continue;
              return !1;
            }
          }
        }
        var T = Rc(t, i);
        return T == null || delete T[Nr(Sr(i))];
      }
      function sc(t, i, a, f) {
        return Pi(t, i, a(Tn(t, i)), f);
      }
      function Ao(t, i, a, f) {
        for (var m = t.length, w = f ? m : -1; (f ? w-- : ++w < m) && i(t[w], w, t); )
          ;
        return a ? br(t, f ? 0 : w, f ? w + 1 : m) : br(t, f ? w + 1 : 0, f ? m : w);
      }
      function ac(t, i) {
        var a = t;
        return a instanceof Le && (a = a.value()), js(i, function(f, m) {
          return m.func.apply(m.thisArg, sn([f], m.args));
        }, a);
      }
      function va(t, i, a) {
        var f = t.length;
        if (f < 2)
          return f ? cn(t[0]) : [];
        for (var m = -1, w = F(f); ++m < f; )
          for (var T = t[m], z = -1; ++z < f; )
            z != m && (w[m] = Oi(w[m] || T, t[z], i, a));
        return cn(zt(w, 1), i, a);
      }
      function lc(t, i, a) {
        for (var f = -1, m = t.length, w = i.length, T = {}; ++f < m; ) {
          var z = f < w ? i[f] : r;
          a(T, t[f], z);
        }
        return T;
      }
      function ya(t) {
        return vt(t) ? t : [];
      }
      function ba(t) {
        return typeof t == "function" ? t : er;
      }
      function fn(t, i) {
        return Te(t) ? t : Ia(t, i) ? [t] : Dc(Ge(t));
      }
      var em = Ae;
      function dn(t, i, a) {
        var f = t.length;
        return a = a === r ? f : a, !i && a >= f ? t : br(t, i, a);
      }
      var uc = Vh || function(t) {
        return At.clearTimeout(t);
      };
      function cc(t, i) {
        if (i)
          return t.slice();
        var a = t.length, f = zu ? zu(a) : new t.constructor(a);
        return t.copy(f), f;
      }
      function Sa(t) {
        var i = new t.constructor(t.byteLength);
        return new mo(i).set(new mo(t)), i;
      }
      function tm(t, i) {
        var a = i ? Sa(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function rm(t) {
        var i = new t.constructor(t.source, Ve.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function nm(t) {
        return Mi ? Je(Mi.call(t)) : {};
      }
      function fc(t, i) {
        var a = i ? Sa(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function dc(t, i) {
        if (t !== i) {
          var a = t !== r, f = t === null, m = t === t, w = or(t), T = i !== r, z = i === null, $ = i === i, q = or(i);
          if (!z && !q && !w && t > i || w && T && $ && !z && !q || f && T && $ || !a && $ || !m)
            return 1;
          if (!f && !w && !q && t < i || q && a && m && !f && !w || z && a && m || !T && m || !$)
            return -1;
        }
        return 0;
      }
      function im(t, i, a) {
        for (var f = -1, m = t.criteria, w = i.criteria, T = m.length, z = a.length; ++f < T; ) {
          var $ = dc(m[f], w[f]);
          if ($) {
            if (f >= z)
              return $;
            var q = a[f];
            return $ * (q == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function pc(t, i, a, f) {
        for (var m = -1, w = t.length, T = a.length, z = -1, $ = i.length, q = Et(w - T, 0), K = F($ + q), Q = !f; ++z < $; )
          K[z] = i[z];
        for (; ++m < T; )
          (Q || m < w) && (K[a[m]] = t[m]);
        for (; q--; )
          K[z++] = t[m++];
        return K;
      }
      function hc(t, i, a, f) {
        for (var m = -1, w = t.length, T = -1, z = a.length, $ = -1, q = i.length, K = Et(w - z, 0), Q = F(K + q), ue = !f; ++m < K; )
          Q[m] = t[m];
        for (var ve = m; ++$ < q; )
          Q[ve + $] = i[$];
        for (; ++T < z; )
          (ue || m < w) && (Q[ve + a[T]] = t[m++]);
        return Q;
      }
      function Zt(t, i) {
        var a = -1, f = t.length;
        for (i || (i = F(f)); ++a < f; )
          i[a] = t[a];
        return i;
      }
      function Br(t, i, a, f) {
        var m = !a;
        a || (a = {});
        for (var w = -1, T = i.length; ++w < T; ) {
          var z = i[w], $ = f ? f(a[z], t[z], z, a, t) : r;
          $ === r && ($ = t[z]), m ? Hr(a, z, $) : Ii(a, z, $);
        }
        return a;
      }
      function om(t, i) {
        return Br(t, Ma(t), i);
      }
      function sm(t, i) {
        return Br(t, Mc(t), i);
      }
      function zo(t, i) {
        return function(a, f) {
          var m = Te(a) ? fh : Ig, w = i ? i() : {};
          return m(a, t, Se(f, 2), w);
        };
      }
      function qn(t) {
        return Ae(function(i, a) {
          var f = -1, m = a.length, w = m > 1 ? a[m - 1] : r, T = m > 2 ? a[2] : r;
          for (w = t.length > 3 && typeof w == "function" ? (m--, w) : r, T && Yt(a[0], a[1], T) && (w = m < 3 ? r : w, m = 1), i = Je(i); ++f < m; ) {
            var z = a[f];
            z && t(i, z, f, w);
          }
          return i;
        });
      }
      function gc(t, i) {
        return function(a, f) {
          if (a == null)
            return a;
          if (!Jt(a))
            return t(a, f);
          for (var m = a.length, w = i ? m : -1, T = Je(a); (i ? w-- : ++w < m) && f(T[w], w, T) !== !1; )
            ;
          return a;
        };
      }
      function mc(t) {
        return function(i, a, f) {
          for (var m = -1, w = Je(i), T = f(i), z = T.length; z--; ) {
            var $ = T[t ? z : ++m];
            if (a(w[$], $, w) === !1)
              break;
          }
          return i;
        };
      }
      function am(t, i, a) {
        var f = i & I, m = Ri(t);
        function w() {
          var T = this && this !== At && this instanceof w ? m : t;
          return T.apply(f ? a : this, arguments);
        }
        return w;
      }
      function vc(t) {
        return function(i) {
          i = Ge(i);
          var a = Fn(i) ? zr(i) : r, f = a ? a[0] : i.charAt(0), m = a ? dn(a, 1).join("") : i.slice(1);
          return f[t]() + m;
        };
      }
      function Kn(t) {
        return function(i) {
          return js(mf(gf(i).replace(Zp, "")), t, "");
        };
      }
      function Ri(t) {
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
          var a = Xn(t.prototype), f = t.apply(a, i);
          return ut(f) ? f : a;
        };
      }
      function lm(t, i, a) {
        var f = Ri(t);
        function m() {
          for (var w = arguments.length, T = F(w), z = w, $ = Zn(m); z--; )
            T[z] = arguments[z];
          var q = w < 3 && T[0] !== $ && T[w - 1] !== $ ? [] : an(T, $);
          if (w -= q.length, w < a)
            return wc(
              t,
              i,
              Po,
              m.placeholder,
              r,
              T,
              q,
              r,
              r,
              a - w
            );
          var K = this && this !== At && this instanceof m ? f : t;
          return rr(K, this, T);
        }
        return m;
      }
      function yc(t) {
        return function(i, a, f) {
          var m = Je(i);
          if (!Jt(i)) {
            var w = Se(a, 3);
            i = _t(i), a = function(z) {
              return w(m[z], z, m);
            };
          }
          var T = t(i, a, f);
          return T > -1 ? m[w ? i[T] : T] : r;
        };
      }
      function bc(t) {
        return Xr(function(i) {
          var a = i.length, f = a, m = vr.prototype.thru;
          for (t && i.reverse(); f--; ) {
            var w = i[f];
            if (typeof w != "function")
              throw new mr(u);
            if (m && !T && ko(w) == "wrapper")
              var T = new vr([], !0);
          }
          for (f = T ? f : a; ++f < a; ) {
            w = i[f];
            var z = ko(w), $ = z == "wrapper" ? Ca(w) : r;
            $ && Oa($[0]) && $[1] == (B | M | A | P) && !$[4].length && $[9] == 1 ? T = T[ko($[0])].apply(T, $[3]) : T = w.length == 1 && Oa(w) ? T[z]() : T.thru(w);
          }
          return function() {
            var q = arguments, K = q[0];
            if (T && q.length == 1 && Te(K))
              return T.plant(K).value();
            for (var Q = 0, ue = a ? i[Q].apply(this, q) : K; ++Q < a; )
              ue = i[Q].call(this, ue);
            return ue;
          };
        });
      }
      function Po(t, i, a, f, m, w, T, z, $, q) {
        var K = i & B, Q = i & I, ue = i & _, ve = i & (M | R), xe = i & N, Oe = ue ? r : Ri(t);
        function we() {
          for (var Pe = arguments.length, ke = F(Pe), sr = Pe; sr--; )
            ke[sr] = arguments[sr];
          if (ve)
            var jt = Zn(we), ar = Sh(ke, jt);
          if (f && (ke = pc(ke, f, m, ve)), w && (ke = hc(ke, w, T, ve)), Pe -= ar, ve && Pe < q) {
            var yt = an(ke, jt);
            return wc(
              t,
              i,
              Po,
              we.placeholder,
              a,
              ke,
              yt,
              z,
              $,
              q - Pe
            );
          }
          var Lr = Q ? a : this, Jr = ue ? Lr[t] : t;
          return Pe = ke.length, z ? ke = Im(ke, z) : xe && Pe > 1 && ke.reverse(), K && $ < Pe && (ke.length = $), this && this !== At && this instanceof we && (Jr = Oe || Ri(Jr)), Jr.apply(Lr, ke);
        }
        return we;
      }
      function Sc(t, i) {
        return function(a, f) {
          return kg(a, t, i(f), {});
        };
      }
      function Ro(t, i) {
        return function(a, f) {
          var m;
          if (a === r && f === r)
            return i;
          if (a !== r && (m = a), f !== r) {
            if (m === r)
              return f;
            typeof a == "string" || typeof f == "string" ? (a = ir(a), f = ir(f)) : (a = oc(a), f = oc(f)), m = t(a, f);
          }
          return m;
        };
      }
      function xa(t) {
        return Xr(function(i) {
          return i = nt(i, nr(Se())), Ae(function(a) {
            var f = this;
            return t(i, function(m) {
              return rr(m, f, a);
            });
          });
        });
      }
      function Lo(t, i) {
        i = i === r ? " " : ir(i);
        var a = i.length;
        if (a < 2)
          return a ? ha(i, t) : i;
        var f = ha(i, So(t / Gn(i)));
        return Fn(i) ? dn(zr(f), 0, t).join("") : f.slice(0, t);
      }
      function um(t, i, a, f) {
        var m = i & I, w = Ri(t);
        function T() {
          for (var z = -1, $ = arguments.length, q = -1, K = f.length, Q = F(K + $), ue = this && this !== At && this instanceof T ? w : t; ++q < K; )
            Q[q] = f[q];
          for (; $--; )
            Q[q++] = arguments[++z];
          return rr(ue, m ? a : this, Q);
        }
        return T;
      }
      function xc(t) {
        return function(i, a, f) {
          return f && typeof f != "number" && Yt(i, a, f) && (a = f = r), i = Zr(i), a === r ? (a = i, i = 0) : a = Zr(a), f = f === r ? i < a ? 1 : -1 : Zr(f), Xg(i, a, f, t);
        };
      }
      function $o(t) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = xr(i), a = xr(a)), t(i, a);
        };
      }
      function wc(t, i, a, f, m, w, T, z, $, q) {
        var K = i & M, Q = K ? T : r, ue = K ? r : T, ve = K ? w : r, xe = K ? r : w;
        i |= K ? A : Y, i &= ~(K ? Y : A), i & C || (i &= -4);
        var Oe = [
          t,
          i,
          m,
          ve,
          Q,
          xe,
          ue,
          z,
          $,
          q
        ], we = a.apply(r, Oe);
        return Oa(t) && Lc(we, Oe), we.placeholder = f, $c(we, t, i);
      }
      function wa(t) {
        var i = wt[t];
        return function(a, f) {
          if (a = xr(a), f = f == null ? 0 : kt(Me(f), 292), f && $u(a)) {
            var m = (Ge(a) + "e").split("e"), w = i(m[0] + "e" + (+m[1] + f));
            return m = (Ge(w) + "e").split("e"), +(m[0] + "e" + (+m[1] - f));
          }
          return i(a);
        };
      }
      var cm = Hn && 1 / uo(new Hn([, -0]))[1] == pe ? function(t) {
        return new Hn(t);
      } : Ya;
      function Ec(t) {
        return function(i) {
          var a = Dt(i);
          return a == Be ? Js(i) : a == rt ? Mh(i) : bh(i, t(i));
        };
      }
      function Ur(t, i, a, f, m, w, T, z) {
        var $ = i & _;
        if (!$ && typeof t != "function")
          throw new mr(u);
        var q = f ? f.length : 0;
        if (q || (i &= -97, f = m = r), T = T === r ? T : Et(Me(T), 0), z = z === r ? z : Me(z), q -= m ? m.length : 0, i & Y) {
          var K = f, Q = m;
          f = m = r;
        }
        var ue = $ ? r : Ca(t), ve = [
          t,
          i,
          a,
          f,
          m,
          K,
          Q,
          w,
          T,
          z
        ];
        if (ue && Cm(ve, ue), t = ve[0], i = ve[1], a = ve[2], f = ve[3], m = ve[4], z = ve[9] = ve[9] === r ? $ ? 0 : t.length : Et(ve[9] - q, 0), !z && i & (M | R) && (i &= -25), !i || i == I)
          var xe = am(t, i, a);
        else i == M || i == R ? xe = lm(t, i, z) : (i == A || i == (I | A)) && !m.length ? xe = um(t, i, a, f) : xe = Po.apply(r, ve);
        var Oe = ue ? nc : Lc;
        return $c(Oe(xe, ve), t, i);
      }
      function _c(t, i, a, f) {
        return t === r || Rr(t, jn[a]) && !Fe.call(f, a) ? i : t;
      }
      function Cc(t, i, a, f, m, w) {
        return ut(t) && ut(i) && (w.set(i, t), Io(t, i, r, Cc, w), w.delete(i)), t;
      }
      function fm(t) {
        return ki(t) ? r : t;
      }
      function Tc(t, i, a, f, m, w) {
        var T = a & g, z = t.length, $ = i.length;
        if (z != $ && !(T && $ > z))
          return !1;
        var q = w.get(t), K = w.get(i);
        if (q && K)
          return q == i && K == t;
        var Q = -1, ue = !0, ve = a & x ? new _n() : r;
        for (w.set(t, i), w.set(i, t); ++Q < z; ) {
          var xe = t[Q], Oe = i[Q];
          if (f)
            var we = T ? f(Oe, xe, Q, i, t, w) : f(xe, Oe, Q, t, i, w);
          if (we !== r) {
            if (we)
              continue;
            ue = !1;
            break;
          }
          if (ve) {
            if (!Hs(i, function(Pe, ke) {
              if (!wi(ve, ke) && (xe === Pe || m(xe, Pe, a, f, w)))
                return ve.push(ke);
            })) {
              ue = !1;
              break;
            }
          } else if (!(xe === Oe || m(xe, Oe, a, f, w))) {
            ue = !1;
            break;
          }
        }
        return w.delete(t), w.delete(i), ue;
      }
      function dm(t, i, a, f, m, w, T) {
        switch (a) {
          case Mt:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case qt:
            return !(t.byteLength != i.byteLength || !w(new mo(t), new mo(i)));
          case re:
          case se:
          case ct:
            return Rr(+t, +i);
          case be:
            return t.name == i.name && t.message == i.message;
          case Tt:
          case St:
            return t == i + "";
          case Be:
            var z = Js;
          case rt:
            var $ = f & g;
            if (z || (z = uo), t.size != i.size && !$)
              return !1;
            var q = T.get(t);
            if (q)
              return q == i;
            f |= x, T.set(t, i);
            var K = Tc(z(t), z(i), f, m, w, T);
            return T.delete(t), K;
          case pr:
            if (Mi)
              return Mi.call(t) == Mi.call(i);
        }
        return !1;
      }
      function pm(t, i, a, f, m, w) {
        var T = a & g, z = Ea(t), $ = z.length, q = Ea(i), K = q.length;
        if ($ != K && !T)
          return !1;
        for (var Q = $; Q--; ) {
          var ue = z[Q];
          if (!(T ? ue in i : Fe.call(i, ue)))
            return !1;
        }
        var ve = w.get(t), xe = w.get(i);
        if (ve && xe)
          return ve == i && xe == t;
        var Oe = !0;
        w.set(t, i), w.set(i, t);
        for (var we = T; ++Q < $; ) {
          ue = z[Q];
          var Pe = t[ue], ke = i[ue];
          if (f)
            var sr = T ? f(ke, Pe, ue, i, t, w) : f(Pe, ke, ue, t, i, w);
          if (!(sr === r ? Pe === ke || m(Pe, ke, a, f, w) : sr)) {
            Oe = !1;
            break;
          }
          we || (we = ue == "constructor");
        }
        if (Oe && !we) {
          var jt = t.constructor, ar = i.constructor;
          jt != ar && "constructor" in t && "constructor" in i && !(typeof jt == "function" && jt instanceof jt && typeof ar == "function" && ar instanceof ar) && (Oe = !1);
        }
        return w.delete(t), w.delete(i), Oe;
      }
      function Xr(t) {
        return za(Pc(t, r, Vc), t + "");
      }
      function Ea(t) {
        return Hu(t, _t, Ma);
      }
      function _a(t) {
        return Hu(t, Qt, Mc);
      }
      var Ca = wo ? function(t) {
        return wo.get(t);
      } : Ya;
      function ko(t) {
        for (var i = t.name + "", a = Un[i], f = Fe.call(Un, i) ? a.length : 0; f--; ) {
          var m = a[f], w = m.func;
          if (w == null || w == t)
            return m.name;
        }
        return i;
      }
      function Zn(t) {
        var i = Fe.call(S, "placeholder") ? S : t;
        return i.placeholder;
      }
      function Se() {
        var t = S.iteratee || Fa;
        return t = t === Fa ? qu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Do(t, i) {
        var a = t.__data__;
        return xm(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function Ta(t) {
        for (var i = _t(t), a = i.length; a--; ) {
          var f = i[a], m = t[f];
          i[a] = [f, m, Ac(m)];
        }
        return i;
      }
      function Mn(t, i) {
        var a = _h(t, i);
        return Xu(a) ? a : r;
      }
      function hm(t) {
        var i = Fe.call(t, wn), a = t[wn];
        try {
          t[wn] = r;
          var f = !0;
        } catch {
        }
        var m = ho.call(t);
        return f && (i ? t[wn] = a : delete t[wn]), m;
      }
      var Ma = ea ? function(t) {
        return t == null ? [] : (t = Je(t), on(ea(t), function(i) {
          return Ru.call(t, i);
        }));
      } : ja, Mc = ea ? function(t) {
        for (var i = []; t; )
          sn(i, Ma(t)), t = vo(t);
        return i;
      } : ja, Dt = Gt;
      (ta && Dt(new ta(new ArrayBuffer(1))) != Mt || _i && Dt(new _i()) != Be || ra && Dt(ra.resolve()) != Lt || Hn && Dt(new Hn()) != rt || Ci && Dt(new Ci()) != Ft) && (Dt = function(t) {
        var i = Gt(t), a = i == ft ? t.constructor : r, f = a ? In(a) : "";
        if (f)
          switch (f) {
            case Kh:
              return Mt;
            case Zh:
              return Be;
            case Jh:
              return Lt;
            case Qh:
              return rt;
            case eg:
              return Ft;
          }
        return i;
      });
      function gm(t, i, a) {
        for (var f = -1, m = a.length; ++f < m; ) {
          var w = a[f], T = w.size;
          switch (w.type) {
            case "drop":
              t += T;
              break;
            case "dropRight":
              i -= T;
              break;
            case "take":
              i = kt(i, t + T);
              break;
            case "takeRight":
              t = Et(t, i - T);
              break;
          }
        }
        return { start: t, end: i };
      }
      function mm(t) {
        var i = t.match(Ls);
        return i ? i[1].split(O) : [];
      }
      function Ic(t, i, a) {
        i = fn(i, t);
        for (var f = -1, m = i.length, w = !1; ++f < m; ) {
          var T = Nr(i[f]);
          if (!(w = t != null && a(t, T)))
            break;
          t = t[T];
        }
        return w || ++f != m ? w : (m = t == null ? 0 : t.length, !!m && Yo(m) && qr(T, m) && (Te(t) || On(t)));
      }
      function vm(t) {
        var i = t.length, a = new t.constructor(i);
        return i && typeof t[0] == "string" && Fe.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function Oc(t) {
        return typeof t.constructor == "function" && !Li(t) ? Xn(vo(t)) : {};
      }
      function ym(t, i, a) {
        var f = t.constructor;
        switch (i) {
          case qt:
            return Sa(t);
          case re:
          case se:
            return new f(+t);
          case Mt:
            return tm(t, a);
          case Fr:
          case at:
          case Ze:
          case tr:
          case $t:
          case It:
          case Sn:
          case mi:
          case vi:
            return fc(t, a);
          case Be:
            return new f();
          case ct:
          case St:
            return new f(t);
          case Tt:
            return rm(t);
          case rt:
            return new f();
          case pr:
            return nm(t);
        }
      }
      function bm(t, i) {
        var a = i.length;
        if (!a)
          return t;
        var f = a - 1;
        return i[f] = (a > 1 ? "& " : "") + i[f], i = i.join(a > 2 ? ", " : " "), t.replace(Rs, `{
/* [wrapped with ` + i + `] */
`);
      }
      function Sm(t) {
        return Te(t) || On(t) || !!(Lu && t && t[Lu]);
      }
      function qr(t, i) {
        var a = typeof t;
        return i = i ?? te, !!i && (a == "number" || a != "symbol" && dt.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function Yt(t, i, a) {
        if (!ut(a))
          return !1;
        var f = typeof i;
        return (f == "number" ? Jt(a) && qr(i, a.length) : f == "string" && i in a) ? Rr(a[i], t) : !1;
      }
      function Ia(t, i) {
        if (Te(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || or(t) ? !0 : As.test(t) || !io.test(t) || i != null && t in Je(i);
      }
      function xm(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function Oa(t) {
        var i = ko(t), a = S[i];
        if (typeof a != "function" || !(i in Le.prototype))
          return !1;
        if (t === a)
          return !0;
        var f = Ca(a);
        return !!f && t === f[0];
      }
      function wm(t) {
        return !!Au && Au in t;
      }
      var Em = fo ? Kr : Ha;
      function Li(t) {
        var i = t && t.constructor, a = typeof i == "function" && i.prototype || jn;
        return t === a;
      }
      function Ac(t) {
        return t === t && !ut(t);
      }
      function zc(t, i) {
        return function(a) {
          return a == null ? !1 : a[t] === i && (i !== r || t in Je(a));
        };
      }
      function _m(t) {
        var i = Fo(t, function(f) {
          return a.size === h && a.clear(), f;
        }), a = i.cache;
        return i;
      }
      function Cm(t, i) {
        var a = t[1], f = i[1], m = a | f, w = m < (I | _ | B), T = f == B && a == M || f == B && a == P && t[7].length <= i[8] || f == (B | P) && i[7].length <= i[8] && a == M;
        if (!(w || T))
          return t;
        f & I && (t[2] = i[2], m |= a & I ? 0 : C);
        var z = i[3];
        if (z) {
          var $ = t[3];
          t[3] = $ ? pc($, z, i[4]) : z, t[4] = $ ? an(t[3], y) : i[4];
        }
        return z = i[5], z && ($ = t[5], t[5] = $ ? hc($, z, i[6]) : z, t[6] = $ ? an(t[5], y) : i[6]), z = i[7], z && (t[7] = z), f & B && (t[8] = t[8] == null ? i[8] : kt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = m, t;
      }
      function Tm(t) {
        var i = [];
        if (t != null)
          for (var a in Je(t))
            i.push(a);
        return i;
      }
      function Mm(t) {
        return ho.call(t);
      }
      function Pc(t, i, a) {
        return i = Et(i === r ? t.length - 1 : i, 0), function() {
          for (var f = arguments, m = -1, w = Et(f.length - i, 0), T = F(w); ++m < w; )
            T[m] = f[i + m];
          m = -1;
          for (var z = F(i + 1); ++m < i; )
            z[m] = f[m];
          return z[i] = a(T), rr(t, this, z);
        };
      }
      function Rc(t, i) {
        return i.length < 2 ? t : Tn(t, br(i, 0, -1));
      }
      function Im(t, i) {
        for (var a = t.length, f = kt(i.length, a), m = Zt(t); f--; ) {
          var w = i[f];
          t[f] = qr(w, a) ? m[w] : r;
        }
        return t;
      }
      function Aa(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var Lc = kc(nc), $i = Gh || function(t, i) {
        return At.setTimeout(t, i);
      }, za = kc(Zg);
      function $c(t, i, a) {
        var f = i + "";
        return za(t, bm(f, Om(mm(f), a)));
      }
      function kc(t) {
        var i = 0, a = 0;
        return function() {
          var f = Uh(), m = G - (f - a);
          if (a = f, m > 0) {
            if (++i >= b)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function Bo(t, i) {
        var a = -1, f = t.length, m = f - 1;
        for (i = i === r ? f : i; ++a < i; ) {
          var w = pa(a, m), T = t[w];
          t[w] = t[a], t[a] = T;
        }
        return t.length = i, t;
      }
      var Dc = _m(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(zs, function(a, f, m, w) {
          i.push(m ? w.replace(_e, "$1") : f || a);
        }), i;
      });
      function Nr(t) {
        if (typeof t == "string" || or(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -pe ? "-0" : i;
      }
      function In(t) {
        if (t != null) {
          try {
            return po.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Om(t, i) {
        return gr(V, function(a) {
          var f = "_." + a[0];
          i & a[1] && !ao(t, f) && t.push(f);
        }), t.sort();
      }
      function Bc(t) {
        if (t instanceof Le)
          return t.clone();
        var i = new vr(t.__wrapped__, t.__chain__);
        return i.__actions__ = Zt(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function Am(t, i, a) {
        (a ? Yt(t, i, a) : i === r) ? i = 1 : i = Et(Me(i), 0);
        var f = t == null ? 0 : t.length;
        if (!f || i < 1)
          return [];
        for (var m = 0, w = 0, T = F(So(f / i)); m < f; )
          T[w++] = br(t, m, m += i);
        return T;
      }
      function zm(t) {
        for (var i = -1, a = t == null ? 0 : t.length, f = 0, m = []; ++i < a; ) {
          var w = t[i];
          w && (m[f++] = w);
        }
        return m;
      }
      function Pm() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = F(t - 1), a = arguments[0], f = t; f--; )
          i[f - 1] = arguments[f];
        return sn(Te(a) ? Zt(a) : [a], zt(i, 1));
      }
      var Rm = Ae(function(t, i) {
        return vt(t) ? Oi(t, zt(i, 1, vt, !0)) : [];
      }), Lm = Ae(function(t, i) {
        var a = Sr(i);
        return vt(a) && (a = r), vt(t) ? Oi(t, zt(i, 1, vt, !0), Se(a, 2)) : [];
      }), $m = Ae(function(t, i) {
        var a = Sr(i);
        return vt(a) && (a = r), vt(t) ? Oi(t, zt(i, 1, vt, !0), r, a) : [];
      });
      function km(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), br(t, i < 0 ? 0 : i, f)) : [];
      }
      function Dm(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), i = f - i, br(t, 0, i < 0 ? 0 : i)) : [];
      }
      function Bm(t, i) {
        return t && t.length ? Ao(t, Se(i, 3), !0, !0) : [];
      }
      function Nm(t, i) {
        return t && t.length ? Ao(t, Se(i, 3), !0) : [];
      }
      function Wm(t, i, a, f) {
        var m = t == null ? 0 : t.length;
        return m ? (a && typeof a != "number" && Yt(t, i, a) && (a = 0, f = m), Pg(t, i, a, f)) : [];
      }
      function Nc(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var m = a == null ? 0 : Me(a);
        return m < 0 && (m = Et(f + m, 0)), lo(t, Se(i, 3), m);
      }
      function Wc(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var m = f - 1;
        return a !== r && (m = Me(a), m = a < 0 ? Et(f + m, 0) : kt(m, f - 1)), lo(t, Se(i, 3), m, !0);
      }
      function Vc(t) {
        var i = t == null ? 0 : t.length;
        return i ? zt(t, 1) : [];
      }
      function Vm(t) {
        var i = t == null ? 0 : t.length;
        return i ? zt(t, pe) : [];
      }
      function Fm(t, i) {
        var a = t == null ? 0 : t.length;
        return a ? (i = i === r ? 1 : Me(i), zt(t, i)) : [];
      }
      function Gm(t) {
        for (var i = -1, a = t == null ? 0 : t.length, f = {}; ++i < a; ) {
          var m = t[i];
          f[m[0]] = m[1];
        }
        return f;
      }
      function Fc(t) {
        return t && t.length ? t[0] : r;
      }
      function Ym(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var m = a == null ? 0 : Me(a);
        return m < 0 && (m = Et(f + m, 0)), Vn(t, i, m);
      }
      function jm(t) {
        var i = t == null ? 0 : t.length;
        return i ? br(t, 0, -1) : [];
      }
      var Hm = Ae(function(t) {
        var i = nt(t, ya);
        return i.length && i[0] === t[0] ? la(i) : [];
      }), Um = Ae(function(t) {
        var i = Sr(t), a = nt(t, ya);
        return i === Sr(a) ? i = r : a.pop(), a.length && a[0] === t[0] ? la(a, Se(i, 2)) : [];
      }), Xm = Ae(function(t) {
        var i = Sr(t), a = nt(t, ya);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === t[0] ? la(a, r, i) : [];
      });
      function qm(t, i) {
        return t == null ? "" : jh.call(t, i);
      }
      function Sr(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function Km(t, i, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var m = f;
        return a !== r && (m = Me(a), m = m < 0 ? Et(f + m, 0) : kt(m, f - 1)), i === i ? Oh(t, i, m) : lo(t, wu, m, !0);
      }
      function Zm(t, i) {
        return t && t.length ? Qu(t, Me(i)) : r;
      }
      var Jm = Ae(Gc);
      function Gc(t, i) {
        return t && t.length && i && i.length ? da(t, i) : t;
      }
      function Qm(t, i, a) {
        return t && t.length && i && i.length ? da(t, i, Se(a, 2)) : t;
      }
      function e0(t, i, a) {
        return t && t.length && i && i.length ? da(t, i, r, a) : t;
      }
      var t0 = Xr(function(t, i) {
        var a = t == null ? 0 : t.length, f = ia(t, i);
        return rc(t, nt(i, function(m) {
          return qr(m, a) ? +m : m;
        }).sort(dc)), f;
      });
      function r0(t, i) {
        var a = [];
        if (!(t && t.length))
          return a;
        var f = -1, m = [], w = t.length;
        for (i = Se(i, 3); ++f < w; ) {
          var T = t[f];
          i(T, f, t) && (a.push(T), m.push(f));
        }
        return rc(t, m), a;
      }
      function Pa(t) {
        return t == null ? t : qh.call(t);
      }
      function n0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (a && typeof a != "number" && Yt(t, i, a) ? (i = 0, a = f) : (i = i == null ? 0 : Me(i), a = a === r ? f : Me(a)), br(t, i, a)) : [];
      }
      function i0(t, i) {
        return Oo(t, i);
      }
      function o0(t, i, a) {
        return ga(t, i, Se(a, 2));
      }
      function s0(t, i) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Oo(t, i);
          if (f < a && Rr(t[f], i))
            return f;
        }
        return -1;
      }
      function a0(t, i) {
        return Oo(t, i, !0);
      }
      function l0(t, i, a) {
        return ga(t, i, Se(a, 2), !0);
      }
      function u0(t, i) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = Oo(t, i, !0) - 1;
          if (Rr(t[f], i))
            return f;
        }
        return -1;
      }
      function c0(t) {
        return t && t.length ? ic(t) : [];
      }
      function f0(t, i) {
        return t && t.length ? ic(t, Se(i, 2)) : [];
      }
      function d0(t) {
        var i = t == null ? 0 : t.length;
        return i ? br(t, 1, i) : [];
      }
      function p0(t, i, a) {
        return t && t.length ? (i = a || i === r ? 1 : Me(i), br(t, 0, i < 0 ? 0 : i)) : [];
      }
      function h0(t, i, a) {
        var f = t == null ? 0 : t.length;
        return f ? (i = a || i === r ? 1 : Me(i), i = f - i, br(t, i < 0 ? 0 : i, f)) : [];
      }
      function g0(t, i) {
        return t && t.length ? Ao(t, Se(i, 3), !1, !0) : [];
      }
      function m0(t, i) {
        return t && t.length ? Ao(t, Se(i, 3)) : [];
      }
      var v0 = Ae(function(t) {
        return cn(zt(t, 1, vt, !0));
      }), y0 = Ae(function(t) {
        var i = Sr(t);
        return vt(i) && (i = r), cn(zt(t, 1, vt, !0), Se(i, 2));
      }), b0 = Ae(function(t) {
        var i = Sr(t);
        return i = typeof i == "function" ? i : r, cn(zt(t, 1, vt, !0), r, i);
      });
      function S0(t) {
        return t && t.length ? cn(t) : [];
      }
      function x0(t, i) {
        return t && t.length ? cn(t, Se(i, 2)) : [];
      }
      function w0(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? cn(t, r, i) : [];
      }
      function Ra(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = on(t, function(a) {
          if (vt(a))
            return i = Et(a.length, i), !0;
        }), Ks(i, function(a) {
          return nt(t, Us(a));
        });
      }
      function Yc(t, i) {
        if (!(t && t.length))
          return [];
        var a = Ra(t);
        return i == null ? a : nt(a, function(f) {
          return rr(i, r, f);
        });
      }
      var E0 = Ae(function(t, i) {
        return vt(t) ? Oi(t, i) : [];
      }), _0 = Ae(function(t) {
        return va(on(t, vt));
      }), C0 = Ae(function(t) {
        var i = Sr(t);
        return vt(i) && (i = r), va(on(t, vt), Se(i, 2));
      }), T0 = Ae(function(t) {
        var i = Sr(t);
        return i = typeof i == "function" ? i : r, va(on(t, vt), r, i);
      }), M0 = Ae(Ra);
      function I0(t, i) {
        return lc(t || [], i || [], Ii);
      }
      function O0(t, i) {
        return lc(t || [], i || [], Pi);
      }
      var A0 = Ae(function(t) {
        var i = t.length, a = i > 1 ? t[i - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, Yc(t, a);
      });
      function jc(t) {
        var i = S(t);
        return i.__chain__ = !0, i;
      }
      function z0(t, i) {
        return i(t), t;
      }
      function No(t, i) {
        return i(t);
      }
      var P0 = Xr(function(t) {
        var i = t.length, a = i ? t[0] : 0, f = this.__wrapped__, m = function(w) {
          return ia(w, t);
        };
        return i > 1 || this.__actions__.length || !(f instanceof Le) || !qr(a) ? this.thru(m) : (f = f.slice(a, +a + (i ? 1 : 0)), f.__actions__.push({
          func: No,
          args: [m],
          thisArg: r
        }), new vr(f, this.__chain__).thru(function(w) {
          return i && !w.length && w.push(r), w;
        }));
      });
      function R0() {
        return jc(this);
      }
      function L0() {
        return new vr(this.value(), this.__chain__);
      }
      function $0() {
        this.__values__ === r && (this.__values__ = sf(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function k0() {
        return this;
      }
      function D0(t) {
        for (var i, a = this; a instanceof _o; ) {
          var f = Bc(a);
          f.__index__ = 0, f.__values__ = r, i ? m.__wrapped__ = f : i = f;
          var m = f;
          a = a.__wrapped__;
        }
        return m.__wrapped__ = t, i;
      }
      function B0() {
        var t = this.__wrapped__;
        if (t instanceof Le) {
          var i = t;
          return this.__actions__.length && (i = new Le(this)), i = i.reverse(), i.__actions__.push({
            func: No,
            args: [Pa],
            thisArg: r
          }), new vr(i, this.__chain__);
        }
        return this.thru(Pa);
      }
      function N0() {
        return ac(this.__wrapped__, this.__actions__);
      }
      var W0 = zo(function(t, i, a) {
        Fe.call(t, a) ? ++t[a] : Hr(t, a, 1);
      });
      function V0(t, i, a) {
        var f = Te(t) ? Su : zg;
        return a && Yt(t, i, a) && (i = r), f(t, Se(i, 3));
      }
      function F0(t, i) {
        var a = Te(t) ? on : Yu;
        return a(t, Se(i, 3));
      }
      var G0 = yc(Nc), Y0 = yc(Wc);
      function j0(t, i) {
        return zt(Wo(t, i), 1);
      }
      function H0(t, i) {
        return zt(Wo(t, i), pe);
      }
      function U0(t, i, a) {
        return a = a === r ? 1 : Me(a), zt(Wo(t, i), a);
      }
      function Hc(t, i) {
        var a = Te(t) ? gr : un;
        return a(t, Se(i, 3));
      }
      function Uc(t, i) {
        var a = Te(t) ? dh : Gu;
        return a(t, Se(i, 3));
      }
      var X0 = zo(function(t, i, a) {
        Fe.call(t, a) ? t[a].push(i) : Hr(t, a, [i]);
      });
      function q0(t, i, a, f) {
        t = Jt(t) ? t : Qn(t), a = a && !f ? Me(a) : 0;
        var m = t.length;
        return a < 0 && (a = Et(m + a, 0)), jo(t) ? a <= m && t.indexOf(i, a) > -1 : !!m && Vn(t, i, a) > -1;
      }
      var K0 = Ae(function(t, i, a) {
        var f = -1, m = typeof i == "function", w = Jt(t) ? F(t.length) : [];
        return un(t, function(T) {
          w[++f] = m ? rr(i, T, a) : Ai(T, i, a);
        }), w;
      }), Z0 = zo(function(t, i, a) {
        Hr(t, a, i);
      });
      function Wo(t, i) {
        var a = Te(t) ? nt : Ku;
        return a(t, Se(i, 3));
      }
      function J0(t, i, a, f) {
        return t == null ? [] : (Te(i) || (i = i == null ? [] : [i]), a = f ? r : a, Te(a) || (a = a == null ? [] : [a]), ec(t, i, a));
      }
      var Q0 = zo(function(t, i, a) {
        t[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function ev(t, i, a) {
        var f = Te(t) ? js : _u, m = arguments.length < 3;
        return f(t, Se(i, 4), a, m, un);
      }
      function tv(t, i, a) {
        var f = Te(t) ? ph : _u, m = arguments.length < 3;
        return f(t, Se(i, 4), a, m, Gu);
      }
      function rv(t, i) {
        var a = Te(t) ? on : Yu;
        return a(t, Go(Se(i, 3)));
      }
      function nv(t) {
        var i = Te(t) ? Nu : qg;
        return i(t);
      }
      function iv(t, i, a) {
        (a ? Yt(t, i, a) : i === r) ? i = 1 : i = Me(i);
        var f = Te(t) ? Tg : Kg;
        return f(t, i);
      }
      function ov(t) {
        var i = Te(t) ? Mg : Jg;
        return i(t);
      }
      function sv(t) {
        if (t == null)
          return 0;
        if (Jt(t))
          return jo(t) ? Gn(t) : t.length;
        var i = Dt(t);
        return i == Be || i == rt ? t.size : ca(t).length;
      }
      function av(t, i, a) {
        var f = Te(t) ? Hs : Qg;
        return a && Yt(t, i, a) && (i = r), f(t, Se(i, 3));
      }
      var lv = Ae(function(t, i) {
        if (t == null)
          return [];
        var a = i.length;
        return a > 1 && Yt(t, i[0], i[1]) ? i = [] : a > 2 && Yt(i[0], i[1], i[2]) && (i = [i[0]]), ec(t, zt(i, 1), []);
      }), Vo = Fh || function() {
        return At.Date.now();
      };
      function uv(t, i) {
        if (typeof i != "function")
          throw new mr(u);
        return t = Me(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function Xc(t, i, a) {
        return i = a ? r : i, i = t && i == null ? t.length : i, Ur(t, B, r, r, r, r, i);
      }
      function qc(t, i) {
        var a;
        if (typeof i != "function")
          throw new mr(u);
        return t = Me(t), function() {
          return --t > 0 && (a = i.apply(this, arguments)), t <= 1 && (i = r), a;
        };
      }
      var La = Ae(function(t, i, a) {
        var f = I;
        if (a.length) {
          var m = an(a, Zn(La));
          f |= A;
        }
        return Ur(t, f, i, a, m);
      }), Kc = Ae(function(t, i, a) {
        var f = I | _;
        if (a.length) {
          var m = an(a, Zn(Kc));
          f |= A;
        }
        return Ur(i, f, t, a, m);
      });
      function Zc(t, i, a) {
        i = a ? r : i;
        var f = Ur(t, M, r, r, r, r, r, i);
        return f.placeholder = Zc.placeholder, f;
      }
      function Jc(t, i, a) {
        i = a ? r : i;
        var f = Ur(t, R, r, r, r, r, r, i);
        return f.placeholder = Jc.placeholder, f;
      }
      function Qc(t, i, a) {
        var f, m, w, T, z, $, q = 0, K = !1, Q = !1, ue = !0;
        if (typeof t != "function")
          throw new mr(u);
        i = xr(i) || 0, ut(a) && (K = !!a.leading, Q = "maxWait" in a, w = Q ? Et(xr(a.maxWait) || 0, i) : w, ue = "trailing" in a ? !!a.trailing : ue);
        function ve(yt) {
          var Lr = f, Jr = m;
          return f = m = r, q = yt, T = t.apply(Jr, Lr), T;
        }
        function xe(yt) {
          return q = yt, z = $i(Pe, i), K ? ve(yt) : T;
        }
        function Oe(yt) {
          var Lr = yt - $, Jr = yt - q, bf = i - Lr;
          return Q ? kt(bf, w - Jr) : bf;
        }
        function we(yt) {
          var Lr = yt - $, Jr = yt - q;
          return $ === r || Lr >= i || Lr < 0 || Q && Jr >= w;
        }
        function Pe() {
          var yt = Vo();
          if (we(yt))
            return ke(yt);
          z = $i(Pe, Oe(yt));
        }
        function ke(yt) {
          return z = r, ue && f ? ve(yt) : (f = m = r, T);
        }
        function sr() {
          z !== r && uc(z), q = 0, f = $ = m = z = r;
        }
        function jt() {
          return z === r ? T : ke(Vo());
        }
        function ar() {
          var yt = Vo(), Lr = we(yt);
          if (f = arguments, m = this, $ = yt, Lr) {
            if (z === r)
              return xe($);
            if (Q)
              return uc(z), z = $i(Pe, i), ve($);
          }
          return z === r && (z = $i(Pe, i)), T;
        }
        return ar.cancel = sr, ar.flush = jt, ar;
      }
      var cv = Ae(function(t, i) {
        return Fu(t, 1, i);
      }), fv = Ae(function(t, i, a) {
        return Fu(t, xr(i) || 0, a);
      });
      function dv(t) {
        return Ur(t, N);
      }
      function Fo(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new mr(u);
        var a = function() {
          var f = arguments, m = i ? i.apply(this, f) : f[0], w = a.cache;
          if (w.has(m))
            return w.get(m);
          var T = t.apply(this, f);
          return a.cache = w.set(m, T) || w, T;
        };
        return a.cache = new (Fo.Cache || jr)(), a;
      }
      Fo.Cache = jr;
      function Go(t) {
        if (typeof t != "function")
          throw new mr(u);
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
      function pv(t) {
        return qc(2, t);
      }
      var hv = em(function(t, i) {
        i = i.length == 1 && Te(i[0]) ? nt(i[0], nr(Se())) : nt(zt(i, 1), nr(Se()));
        var a = i.length;
        return Ae(function(f) {
          for (var m = -1, w = kt(f.length, a); ++m < w; )
            f[m] = i[m].call(this, f[m]);
          return rr(t, this, f);
        });
      }), $a = Ae(function(t, i) {
        var a = an(i, Zn($a));
        return Ur(t, A, r, i, a);
      }), ef = Ae(function(t, i) {
        var a = an(i, Zn(ef));
        return Ur(t, Y, r, i, a);
      }), gv = Xr(function(t, i) {
        return Ur(t, P, r, r, r, i);
      });
      function mv(t, i) {
        if (typeof t != "function")
          throw new mr(u);
        return i = i === r ? i : Me(i), Ae(t, i);
      }
      function vv(t, i) {
        if (typeof t != "function")
          throw new mr(u);
        return i = i == null ? 0 : Et(Me(i), 0), Ae(function(a) {
          var f = a[i], m = dn(a, 0, i);
          return f && sn(m, f), rr(t, this, m);
        });
      }
      function yv(t, i, a) {
        var f = !0, m = !0;
        if (typeof t != "function")
          throw new mr(u);
        return ut(a) && (f = "leading" in a ? !!a.leading : f, m = "trailing" in a ? !!a.trailing : m), Qc(t, i, {
          leading: f,
          maxWait: i,
          trailing: m
        });
      }
      function bv(t) {
        return Xc(t, 1);
      }
      function Sv(t, i) {
        return $a(ba(i), t);
      }
      function xv() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Te(t) ? t : [t];
      }
      function wv(t) {
        return yr(t, d);
      }
      function Ev(t, i) {
        return i = typeof i == "function" ? i : r, yr(t, d, i);
      }
      function _v(t) {
        return yr(t, v | d);
      }
      function Cv(t, i) {
        return i = typeof i == "function" ? i : r, yr(t, v | d, i);
      }
      function Tv(t, i) {
        return i == null || Vu(t, i, _t(i));
      }
      function Rr(t, i) {
        return t === i || t !== t && i !== i;
      }
      var Mv = $o(aa), Iv = $o(function(t, i) {
        return t >= i;
      }), On = Uu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Uu : function(t) {
        return pt(t) && Fe.call(t, "callee") && !Ru.call(t, "callee");
      }, Te = F.isArray, Ov = hu ? nr(hu) : Dg;
      function Jt(t) {
        return t != null && Yo(t.length) && !Kr(t);
      }
      function vt(t) {
        return pt(t) && Jt(t);
      }
      function Av(t) {
        return t === !0 || t === !1 || pt(t) && Gt(t) == re;
      }
      var pn = Yh || Ha, zv = gu ? nr(gu) : Bg;
      function Pv(t) {
        return pt(t) && t.nodeType === 1 && !ki(t);
      }
      function Rv(t) {
        if (t == null)
          return !0;
        if (Jt(t) && (Te(t) || typeof t == "string" || typeof t.splice == "function" || pn(t) || Jn(t) || On(t)))
          return !t.length;
        var i = Dt(t);
        if (i == Be || i == rt)
          return !t.size;
        if (Li(t))
          return !ca(t).length;
        for (var a in t)
          if (Fe.call(t, a))
            return !1;
        return !0;
      }
      function Lv(t, i) {
        return zi(t, i);
      }
      function $v(t, i, a) {
        a = typeof a == "function" ? a : r;
        var f = a ? a(t, i) : r;
        return f === r ? zi(t, i, r, a) : !!f;
      }
      function ka(t) {
        if (!pt(t))
          return !1;
        var i = Gt(t);
        return i == be || i == fe || typeof t.message == "string" && typeof t.name == "string" && !ki(t);
      }
      function kv(t) {
        return typeof t == "number" && $u(t);
      }
      function Kr(t) {
        if (!ut(t))
          return !1;
        var i = Gt(t);
        return i == oe || i == $e || i == le || i == st;
      }
      function tf(t) {
        return typeof t == "number" && t == Me(t);
      }
      function Yo(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= te;
      }
      function ut(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function pt(t) {
        return t != null && typeof t == "object";
      }
      var rf = mu ? nr(mu) : Wg;
      function Dv(t, i) {
        return t === i || ua(t, i, Ta(i));
      }
      function Bv(t, i, a) {
        return a = typeof a == "function" ? a : r, ua(t, i, Ta(i), a);
      }
      function Nv(t) {
        return nf(t) && t != +t;
      }
      function Wv(t) {
        if (Em(t))
          throw new Ce(l);
        return Xu(t);
      }
      function Vv(t) {
        return t === null;
      }
      function Fv(t) {
        return t == null;
      }
      function nf(t) {
        return typeof t == "number" || pt(t) && Gt(t) == ct;
      }
      function ki(t) {
        if (!pt(t) || Gt(t) != ft)
          return !1;
        var i = vo(t);
        if (i === null)
          return !0;
        var a = Fe.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && po.call(a) == Bh;
      }
      var Da = vu ? nr(vu) : Vg;
      function Gv(t) {
        return tf(t) && t >= -te && t <= te;
      }
      var of = yu ? nr(yu) : Fg;
      function jo(t) {
        return typeof t == "string" || !Te(t) && pt(t) && Gt(t) == St;
      }
      function or(t) {
        return typeof t == "symbol" || pt(t) && Gt(t) == pr;
      }
      var Jn = bu ? nr(bu) : Gg;
      function Yv(t) {
        return t === r;
      }
      function jv(t) {
        return pt(t) && Dt(t) == Ft;
      }
      function Hv(t) {
        return pt(t) && Gt(t) == Xt;
      }
      var Uv = $o(fa), Xv = $o(function(t, i) {
        return t <= i;
      });
      function sf(t) {
        if (!t)
          return [];
        if (Jt(t))
          return jo(t) ? zr(t) : Zt(t);
        if (Ei && t[Ei])
          return Th(t[Ei]());
        var i = Dt(t), a = i == Be ? Js : i == rt ? uo : Qn;
        return a(t);
      }
      function Zr(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = xr(t), t === pe || t === -pe) {
          var i = t < 0 ? -1 : 1;
          return i * Ee;
        }
        return t === t ? t : 0;
      }
      function Me(t) {
        var i = Zr(t), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function af(t) {
        return t ? Cn(Me(t), 0, J) : 0;
      }
      function xr(t) {
        if (typeof t == "number")
          return t;
        if (or(t))
          return U;
        if (ut(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ut(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Cu(t);
        var a = ze.test(t);
        return a || lt.test(t) ? uh(t.slice(2), a ? 2 : 8) : Re.test(t) ? U : +t;
      }
      function lf(t) {
        return Br(t, Qt(t));
      }
      function qv(t) {
        return t ? Cn(Me(t), -te, te) : t === 0 ? t : 0;
      }
      function Ge(t) {
        return t == null ? "" : ir(t);
      }
      var Kv = qn(function(t, i) {
        if (Li(i) || Jt(i)) {
          Br(i, _t(i), t);
          return;
        }
        for (var a in i)
          Fe.call(i, a) && Ii(t, a, i[a]);
      }), uf = qn(function(t, i) {
        Br(i, Qt(i), t);
      }), Ho = qn(function(t, i, a, f) {
        Br(i, Qt(i), t, f);
      }), Zv = qn(function(t, i, a, f) {
        Br(i, _t(i), t, f);
      }), Jv = Xr(ia);
      function Qv(t, i) {
        var a = Xn(t);
        return i == null ? a : Wu(a, i);
      }
      var ey = Ae(function(t, i) {
        t = Je(t);
        var a = -1, f = i.length, m = f > 2 ? i[2] : r;
        for (m && Yt(i[0], i[1], m) && (f = 1); ++a < f; )
          for (var w = i[a], T = Qt(w), z = -1, $ = T.length; ++z < $; ) {
            var q = T[z], K = t[q];
            (K === r || Rr(K, jn[q]) && !Fe.call(t, q)) && (t[q] = w[q]);
          }
        return t;
      }), ty = Ae(function(t) {
        return t.push(r, Cc), rr(cf, r, t);
      });
      function ry(t, i) {
        return xu(t, Se(i, 3), Dr);
      }
      function ny(t, i) {
        return xu(t, Se(i, 3), sa);
      }
      function iy(t, i) {
        return t == null ? t : oa(t, Se(i, 3), Qt);
      }
      function oy(t, i) {
        return t == null ? t : ju(t, Se(i, 3), Qt);
      }
      function sy(t, i) {
        return t && Dr(t, Se(i, 3));
      }
      function ay(t, i) {
        return t && sa(t, Se(i, 3));
      }
      function ly(t) {
        return t == null ? [] : Mo(t, _t(t));
      }
      function uy(t) {
        return t == null ? [] : Mo(t, Qt(t));
      }
      function Ba(t, i, a) {
        var f = t == null ? r : Tn(t, i);
        return f === r ? a : f;
      }
      function cy(t, i) {
        return t != null && Ic(t, i, Rg);
      }
      function Na(t, i) {
        return t != null && Ic(t, i, Lg);
      }
      var fy = Sc(function(t, i, a) {
        i != null && typeof i.toString != "function" && (i = ho.call(i)), t[i] = a;
      }, Va(er)), dy = Sc(function(t, i, a) {
        i != null && typeof i.toString != "function" && (i = ho.call(i)), Fe.call(t, i) ? t[i].push(a) : t[i] = [a];
      }, Se), py = Ae(Ai);
      function _t(t) {
        return Jt(t) ? Bu(t) : ca(t);
      }
      function Qt(t) {
        return Jt(t) ? Bu(t, !0) : Yg(t);
      }
      function hy(t, i) {
        var a = {};
        return i = Se(i, 3), Dr(t, function(f, m, w) {
          Hr(a, i(f, m, w), f);
        }), a;
      }
      function gy(t, i) {
        var a = {};
        return i = Se(i, 3), Dr(t, function(f, m, w) {
          Hr(a, m, i(f, m, w));
        }), a;
      }
      var my = qn(function(t, i, a) {
        Io(t, i, a);
      }), cf = qn(function(t, i, a, f) {
        Io(t, i, a, f);
      }), vy = Xr(function(t, i) {
        var a = {};
        if (t == null)
          return a;
        var f = !1;
        i = nt(i, function(w) {
          return w = fn(w, t), f || (f = w.length > 1), w;
        }), Br(t, _a(t), a), f && (a = yr(a, v | E | d, fm));
        for (var m = i.length; m--; )
          ma(a, i[m]);
        return a;
      });
      function yy(t, i) {
        return ff(t, Go(Se(i)));
      }
      var by = Xr(function(t, i) {
        return t == null ? {} : Hg(t, i);
      });
      function ff(t, i) {
        if (t == null)
          return {};
        var a = nt(_a(t), function(f) {
          return [f];
        });
        return i = Se(i), tc(t, a, function(f, m) {
          return i(f, m[0]);
        });
      }
      function Sy(t, i, a) {
        i = fn(i, t);
        var f = -1, m = i.length;
        for (m || (m = 1, t = r); ++f < m; ) {
          var w = t == null ? r : t[Nr(i[f])];
          w === r && (f = m, w = a), t = Kr(w) ? w.call(t) : w;
        }
        return t;
      }
      function xy(t, i, a) {
        return t == null ? t : Pi(t, i, a);
      }
      function wy(t, i, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : Pi(t, i, a, f);
      }
      var df = Ec(_t), pf = Ec(Qt);
      function Ey(t, i, a) {
        var f = Te(t), m = f || pn(t) || Jn(t);
        if (i = Se(i, 4), a == null) {
          var w = t && t.constructor;
          m ? a = f ? new w() : [] : ut(t) ? a = Kr(w) ? Xn(vo(t)) : {} : a = {};
        }
        return (m ? gr : Dr)(t, function(T, z, $) {
          return i(a, T, z, $);
        }), a;
      }
      function _y(t, i) {
        return t == null ? !0 : ma(t, i);
      }
      function Cy(t, i, a) {
        return t == null ? t : sc(t, i, ba(a));
      }
      function Ty(t, i, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : sc(t, i, ba(a), f);
      }
      function Qn(t) {
        return t == null ? [] : Zs(t, _t(t));
      }
      function My(t) {
        return t == null ? [] : Zs(t, Qt(t));
      }
      function Iy(t, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = xr(a), a = a === a ? a : 0), i !== r && (i = xr(i), i = i === i ? i : 0), Cn(xr(t), i, a);
      }
      function Oy(t, i, a) {
        return i = Zr(i), a === r ? (a = i, i = 0) : a = Zr(a), t = xr(t), $g(t, i, a);
      }
      function Ay(t, i, a) {
        if (a && typeof a != "boolean" && Yt(t, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof t == "boolean" && (a = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = Zr(t), i === r ? (i = t, t = 0) : i = Zr(i)), t > i) {
          var f = t;
          t = i, i = f;
        }
        if (a || t % 1 || i % 1) {
          var m = ku();
          return kt(t + m * (i - t + lh("1e-" + ((m + "").length - 1))), i);
        }
        return pa(t, i);
      }
      var zy = Kn(function(t, i, a) {
        return i = i.toLowerCase(), t + (a ? hf(i) : i);
      });
      function hf(t) {
        return Wa(Ge(t).toLowerCase());
      }
      function gf(t) {
        return t = Ge(t), t && t.replace(Kt, xh).replace(Jp, "");
      }
      function Py(t, i, a) {
        t = Ge(t), i = ir(i);
        var f = t.length;
        a = a === r ? f : Cn(Me(a), 0, f);
        var m = a;
        return a -= i.length, a >= 0 && t.slice(a, m) == i;
      }
      function Ry(t) {
        return t = Ge(t), t && Is.test(t) ? t.replace(Bn, wh) : t;
      }
      function Ly(t) {
        return t = Ge(t), t && oo.test(t) ? t.replace(Nn, "\\$&") : t;
      }
      var $y = Kn(function(t, i, a) {
        return t + (a ? "-" : "") + i.toLowerCase();
      }), ky = Kn(function(t, i, a) {
        return t + (a ? " " : "") + i.toLowerCase();
      }), Dy = vc("toLowerCase");
      function By(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? Gn(t) : 0;
        if (!i || f >= i)
          return t;
        var m = (i - f) / 2;
        return Lo(xo(m), a) + t + Lo(So(m), a);
      }
      function Ny(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? Gn(t) : 0;
        return i && f < i ? t + Lo(i - f, a) : t;
      }
      function Wy(t, i, a) {
        t = Ge(t), i = Me(i);
        var f = i ? Gn(t) : 0;
        return i && f < i ? Lo(i - f, a) + t : t;
      }
      function Vy(t, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), Xh(Ge(t).replace(Si, ""), i || 0);
      }
      function Fy(t, i, a) {
        return (a ? Yt(t, i, a) : i === r) ? i = 1 : i = Me(i), ha(Ge(t), i);
      }
      function Gy() {
        var t = arguments, i = Ge(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var Yy = Kn(function(t, i, a) {
        return t + (a ? "_" : "") + i.toLowerCase();
      });
      function jy(t, i, a) {
        return a && typeof a != "number" && Yt(t, i, a) && (i = a = r), a = a === r ? J : a >>> 0, a ? (t = Ge(t), t && (typeof i == "string" || i != null && !Da(i)) && (i = ir(i), !i && Fn(t)) ? dn(zr(t), 0, a) : t.split(i, a)) : [];
      }
      var Hy = Kn(function(t, i, a) {
        return t + (a ? " " : "") + Wa(i);
      });
      function Uy(t, i, a) {
        return t = Ge(t), a = a == null ? 0 : Cn(Me(a), 0, t.length), i = ir(i), t.slice(a, a + i.length) == i;
      }
      function Xy(t, i, a) {
        var f = S.templateSettings;
        a && Yt(t, i, a) && (i = r), t = Ge(t), i = Ho({}, i, f, _c);
        var m = Ho({}, i.imports, f.imports, _c), w = _t(m), T = Zs(m, w), z, $, q = 0, K = i.interpolate || Ar, Q = "__p += '", ue = Qs(
          (i.escape || Ar).source + "|" + K.source + "|" + (K === bi ? Ne : Ar).source + "|" + (i.evaluate || Ar).source + "|$",
          "g"
        ), ve = "//# sourceURL=" + (Fe.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++nh + "]") + `
`;
        t.replace(ue, function(we, Pe, ke, sr, jt, ar) {
          return ke || (ke = sr), Q += t.slice(q, ar).replace(Gr, Eh), Pe && (z = !0, Q += `' +
__e(` + Pe + `) +
'`), jt && ($ = !0, Q += `';
` + jt + `;
__p += '`), ke && (Q += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), q = ar + we.length, we;
        }), Q += `';
`;
        var xe = Fe.call(i, "variable") && i.variable;
        if (!xe)
          Q = `with (obj) {
` + Q + `
}
`;
        else if (de.test(xe))
          throw new Ce(p);
        Q = ($ ? Q.replace(yi, "") : Q).replace(to, "$1").replace(nn, "$1;"), Q = "function(" + (xe || "obj") + `) {
` + (xe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (z ? ", __e = _.escape" : "") + ($ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
        var Oe = vf(function() {
          return We(w, ve + "return " + Q).apply(r, T);
        });
        if (Oe.source = Q, ka(Oe))
          throw Oe;
        return Oe;
      }
      function qy(t) {
        return Ge(t).toLowerCase();
      }
      function Ky(t) {
        return Ge(t).toUpperCase();
      }
      function Zy(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return Cu(t);
        if (!t || !(i = ir(i)))
          return t;
        var f = zr(t), m = zr(i), w = Tu(f, m), T = Mu(f, m) + 1;
        return dn(f, w, T).join("");
      }
      function Jy(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return t.slice(0, Ou(t) + 1);
        if (!t || !(i = ir(i)))
          return t;
        var f = zr(t), m = Mu(f, zr(i)) + 1;
        return dn(f, 0, m).join("");
      }
      function Qy(t, i, a) {
        if (t = Ge(t), t && (a || i === r))
          return t.replace(Si, "");
        if (!t || !(i = ir(i)))
          return t;
        var f = zr(t), m = Tu(f, zr(i));
        return dn(f, m).join("");
      }
      function eb(t, i) {
        var a = k, f = W;
        if (ut(i)) {
          var m = "separator" in i ? i.separator : m;
          a = "length" in i ? Me(i.length) : a, f = "omission" in i ? ir(i.omission) : f;
        }
        t = Ge(t);
        var w = t.length;
        if (Fn(t)) {
          var T = zr(t);
          w = T.length;
        }
        if (a >= w)
          return t;
        var z = a - Gn(f);
        if (z < 1)
          return f;
        var $ = T ? dn(T, 0, z).join("") : t.slice(0, z);
        if (m === r)
          return $ + f;
        if (T && (z += $.length - z), Da(m)) {
          if (t.slice(z).search(m)) {
            var q, K = $;
            for (m.global || (m = Qs(m.source, Ge(Ve.exec(m)) + "g")), m.lastIndex = 0; q = m.exec(K); )
              var Q = q.index;
            $ = $.slice(0, Q === r ? z : Q);
          }
        } else if (t.indexOf(ir(m), z) != z) {
          var ue = $.lastIndexOf(m);
          ue > -1 && ($ = $.slice(0, ue));
        }
        return $ + f;
      }
      function tb(t) {
        return t = Ge(t), t && ro.test(t) ? t.replace(Dn, Ah) : t;
      }
      var rb = Kn(function(t, i, a) {
        return t + (a ? " " : "") + i.toUpperCase();
      }), Wa = vc("toUpperCase");
      function mf(t, i, a) {
        return t = Ge(t), i = a ? r : i, i === r ? Ch(t) ? Rh(t) : mh(t) : t.match(i) || [];
      }
      var vf = Ae(function(t, i) {
        try {
          return rr(t, r, i);
        } catch (a) {
          return ka(a) ? a : new Ce(a);
        }
      }), nb = Xr(function(t, i) {
        return gr(i, function(a) {
          a = Nr(a), Hr(t, a, La(t[a], t));
        }), t;
      });
      function ib(t) {
        var i = t == null ? 0 : t.length, a = Se();
        return t = i ? nt(t, function(f) {
          if (typeof f[1] != "function")
            throw new mr(u);
          return [a(f[0]), f[1]];
        }) : [], Ae(function(f) {
          for (var m = -1; ++m < i; ) {
            var w = t[m];
            if (rr(w[0], this, f))
              return rr(w[1], this, f);
          }
        });
      }
      function ob(t) {
        return Ag(yr(t, v));
      }
      function Va(t) {
        return function() {
          return t;
        };
      }
      function sb(t, i) {
        return t == null || t !== t ? i : t;
      }
      var ab = bc(), lb = bc(!0);
      function er(t) {
        return t;
      }
      function Fa(t) {
        return qu(typeof t == "function" ? t : yr(t, v));
      }
      function ub(t) {
        return Zu(yr(t, v));
      }
      function cb(t, i) {
        return Ju(t, yr(i, v));
      }
      var fb = Ae(function(t, i) {
        return function(a) {
          return Ai(a, t, i);
        };
      }), db = Ae(function(t, i) {
        return function(a) {
          return Ai(t, a, i);
        };
      });
      function Ga(t, i, a) {
        var f = _t(i), m = Mo(i, f);
        a == null && !(ut(i) && (m.length || !f.length)) && (a = i, i = t, t = this, m = Mo(i, _t(i)));
        var w = !(ut(a) && "chain" in a) || !!a.chain, T = Kr(t);
        return gr(m, function(z) {
          var $ = i[z];
          t[z] = $, T && (t.prototype[z] = function() {
            var q = this.__chain__;
            if (w || q) {
              var K = t(this.__wrapped__), Q = K.__actions__ = Zt(this.__actions__);
              return Q.push({ func: $, args: arguments, thisArg: t }), K.__chain__ = q, K;
            }
            return $.apply(t, sn([this.value()], arguments));
          });
        }), t;
      }
      function pb() {
        return At._ === this && (At._ = Nh), this;
      }
      function Ya() {
      }
      function hb(t) {
        return t = Me(t), Ae(function(i) {
          return Qu(i, t);
        });
      }
      var gb = xa(nt), mb = xa(Su), vb = xa(Hs);
      function yf(t) {
        return Ia(t) ? Us(Nr(t)) : Ug(t);
      }
      function yb(t) {
        return function(i) {
          return t == null ? r : Tn(t, i);
        };
      }
      var bb = xc(), Sb = xc(!0);
      function ja() {
        return [];
      }
      function Ha() {
        return !1;
      }
      function xb() {
        return {};
      }
      function wb() {
        return "";
      }
      function Eb() {
        return !0;
      }
      function _b(t, i) {
        if (t = Me(t), t < 1 || t > te)
          return [];
        var a = J, f = kt(t, J);
        i = Se(i), t -= J;
        for (var m = Ks(f, i); ++a < t; )
          i(a);
        return m;
      }
      function Cb(t) {
        return Te(t) ? nt(t, Nr) : or(t) ? [t] : Zt(Dc(Ge(t)));
      }
      function Tb(t) {
        var i = ++Dh;
        return Ge(t) + i;
      }
      var Mb = Ro(function(t, i) {
        return t + i;
      }, 0), Ib = wa("ceil"), Ob = Ro(function(t, i) {
        return t / i;
      }, 1), Ab = wa("floor");
      function zb(t) {
        return t && t.length ? To(t, er, aa) : r;
      }
      function Pb(t, i) {
        return t && t.length ? To(t, Se(i, 2), aa) : r;
      }
      function Rb(t) {
        return Eu(t, er);
      }
      function Lb(t, i) {
        return Eu(t, Se(i, 2));
      }
      function $b(t) {
        return t && t.length ? To(t, er, fa) : r;
      }
      function kb(t, i) {
        return t && t.length ? To(t, Se(i, 2), fa) : r;
      }
      var Db = Ro(function(t, i) {
        return t * i;
      }, 1), Bb = wa("round"), Nb = Ro(function(t, i) {
        return t - i;
      }, 0);
      function Wb(t) {
        return t && t.length ? qs(t, er) : 0;
      }
      function Vb(t, i) {
        return t && t.length ? qs(t, Se(i, 2)) : 0;
      }
      return S.after = uv, S.ary = Xc, S.assign = Kv, S.assignIn = uf, S.assignInWith = Ho, S.assignWith = Zv, S.at = Jv, S.before = qc, S.bind = La, S.bindAll = nb, S.bindKey = Kc, S.castArray = xv, S.chain = jc, S.chunk = Am, S.compact = zm, S.concat = Pm, S.cond = ib, S.conforms = ob, S.constant = Va, S.countBy = W0, S.create = Qv, S.curry = Zc, S.curryRight = Jc, S.debounce = Qc, S.defaults = ey, S.defaultsDeep = ty, S.defer = cv, S.delay = fv, S.difference = Rm, S.differenceBy = Lm, S.differenceWith = $m, S.drop = km, S.dropRight = Dm, S.dropRightWhile = Bm, S.dropWhile = Nm, S.fill = Wm, S.filter = F0, S.flatMap = j0, S.flatMapDeep = H0, S.flatMapDepth = U0, S.flatten = Vc, S.flattenDeep = Vm, S.flattenDepth = Fm, S.flip = dv, S.flow = ab, S.flowRight = lb, S.fromPairs = Gm, S.functions = ly, S.functionsIn = uy, S.groupBy = X0, S.initial = jm, S.intersection = Hm, S.intersectionBy = Um, S.intersectionWith = Xm, S.invert = fy, S.invertBy = dy, S.invokeMap = K0, S.iteratee = Fa, S.keyBy = Z0, S.keys = _t, S.keysIn = Qt, S.map = Wo, S.mapKeys = hy, S.mapValues = gy, S.matches = ub, S.matchesProperty = cb, S.memoize = Fo, S.merge = my, S.mergeWith = cf, S.method = fb, S.methodOf = db, S.mixin = Ga, S.negate = Go, S.nthArg = hb, S.omit = vy, S.omitBy = yy, S.once = pv, S.orderBy = J0, S.over = gb, S.overArgs = hv, S.overEvery = mb, S.overSome = vb, S.partial = $a, S.partialRight = ef, S.partition = Q0, S.pick = by, S.pickBy = ff, S.property = yf, S.propertyOf = yb, S.pull = Jm, S.pullAll = Gc, S.pullAllBy = Qm, S.pullAllWith = e0, S.pullAt = t0, S.range = bb, S.rangeRight = Sb, S.rearg = gv, S.reject = rv, S.remove = r0, S.rest = mv, S.reverse = Pa, S.sampleSize = iv, S.set = xy, S.setWith = wy, S.shuffle = ov, S.slice = n0, S.sortBy = lv, S.sortedUniq = c0, S.sortedUniqBy = f0, S.split = jy, S.spread = vv, S.tail = d0, S.take = p0, S.takeRight = h0, S.takeRightWhile = g0, S.takeWhile = m0, S.tap = z0, S.throttle = yv, S.thru = No, S.toArray = sf, S.toPairs = df, S.toPairsIn = pf, S.toPath = Cb, S.toPlainObject = lf, S.transform = Ey, S.unary = bv, S.union = v0, S.unionBy = y0, S.unionWith = b0, S.uniq = S0, S.uniqBy = x0, S.uniqWith = w0, S.unset = _y, S.unzip = Ra, S.unzipWith = Yc, S.update = Cy, S.updateWith = Ty, S.values = Qn, S.valuesIn = My, S.without = E0, S.words = mf, S.wrap = Sv, S.xor = _0, S.xorBy = C0, S.xorWith = T0, S.zip = M0, S.zipObject = I0, S.zipObjectDeep = O0, S.zipWith = A0, S.entries = df, S.entriesIn = pf, S.extend = uf, S.extendWith = Ho, Ga(S, S), S.add = Mb, S.attempt = vf, S.camelCase = zy, S.capitalize = hf, S.ceil = Ib, S.clamp = Iy, S.clone = wv, S.cloneDeep = _v, S.cloneDeepWith = Cv, S.cloneWith = Ev, S.conformsTo = Tv, S.deburr = gf, S.defaultTo = sb, S.divide = Ob, S.endsWith = Py, S.eq = Rr, S.escape = Ry, S.escapeRegExp = Ly, S.every = V0, S.find = G0, S.findIndex = Nc, S.findKey = ry, S.findLast = Y0, S.findLastIndex = Wc, S.findLastKey = ny, S.floor = Ab, S.forEach = Hc, S.forEachRight = Uc, S.forIn = iy, S.forInRight = oy, S.forOwn = sy, S.forOwnRight = ay, S.get = Ba, S.gt = Mv, S.gte = Iv, S.has = cy, S.hasIn = Na, S.head = Fc, S.identity = er, S.includes = q0, S.indexOf = Ym, S.inRange = Oy, S.invoke = py, S.isArguments = On, S.isArray = Te, S.isArrayBuffer = Ov, S.isArrayLike = Jt, S.isArrayLikeObject = vt, S.isBoolean = Av, S.isBuffer = pn, S.isDate = zv, S.isElement = Pv, S.isEmpty = Rv, S.isEqual = Lv, S.isEqualWith = $v, S.isError = ka, S.isFinite = kv, S.isFunction = Kr, S.isInteger = tf, S.isLength = Yo, S.isMap = rf, S.isMatch = Dv, S.isMatchWith = Bv, S.isNaN = Nv, S.isNative = Wv, S.isNil = Fv, S.isNull = Vv, S.isNumber = nf, S.isObject = ut, S.isObjectLike = pt, S.isPlainObject = ki, S.isRegExp = Da, S.isSafeInteger = Gv, S.isSet = of, S.isString = jo, S.isSymbol = or, S.isTypedArray = Jn, S.isUndefined = Yv, S.isWeakMap = jv, S.isWeakSet = Hv, S.join = qm, S.kebabCase = $y, S.last = Sr, S.lastIndexOf = Km, S.lowerCase = ky, S.lowerFirst = Dy, S.lt = Uv, S.lte = Xv, S.max = zb, S.maxBy = Pb, S.mean = Rb, S.meanBy = Lb, S.min = $b, S.minBy = kb, S.stubArray = ja, S.stubFalse = Ha, S.stubObject = xb, S.stubString = wb, S.stubTrue = Eb, S.multiply = Db, S.nth = Zm, S.noConflict = pb, S.noop = Ya, S.now = Vo, S.pad = By, S.padEnd = Ny, S.padStart = Wy, S.parseInt = Vy, S.random = Ay, S.reduce = ev, S.reduceRight = tv, S.repeat = Fy, S.replace = Gy, S.result = Sy, S.round = Bb, S.runInContext = L, S.sample = nv, S.size = sv, S.snakeCase = Yy, S.some = av, S.sortedIndex = i0, S.sortedIndexBy = o0, S.sortedIndexOf = s0, S.sortedLastIndex = a0, S.sortedLastIndexBy = l0, S.sortedLastIndexOf = u0, S.startCase = Hy, S.startsWith = Uy, S.subtract = Nb, S.sum = Wb, S.sumBy = Vb, S.template = Xy, S.times = _b, S.toFinite = Zr, S.toInteger = Me, S.toLength = af, S.toLower = qy, S.toNumber = xr, S.toSafeInteger = qv, S.toString = Ge, S.toUpper = Ky, S.trim = Zy, S.trimEnd = Jy, S.trimStart = Qy, S.truncate = eb, S.unescape = tb, S.uniqueId = Tb, S.upperCase = rb, S.upperFirst = Wa, S.each = Hc, S.eachRight = Uc, S.first = Fc, Ga(S, function() {
        var t = {};
        return Dr(S, function(i, a) {
          Fe.call(S.prototype, a) || (t[a] = i);
        }), t;
      }(), { chain: !1 }), S.VERSION = o, gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        S[t].placeholder = S;
      }), gr(["drop", "take"], function(t, i) {
        Le.prototype[t] = function(a) {
          a = a === r ? 1 : Et(Me(a), 0);
          var f = this.__filtered__ && !i ? new Le(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = kt(a, f.__takeCount__) : f.__views__.push({
            size: kt(a, J),
            type: t + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, Le.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), gr(["filter", "map", "takeWhile"], function(t, i) {
        var a = i + 1, f = a == D || a == ae;
        Le.prototype[t] = function(m) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: Se(m, 3),
            type: a
          }), w.__filtered__ = w.__filtered__ || f, w;
        };
      }), gr(["head", "last"], function(t, i) {
        var a = "take" + (i ? "Right" : "");
        Le.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), gr(["initial", "tail"], function(t, i) {
        var a = "drop" + (i ? "" : "Right");
        Le.prototype[t] = function() {
          return this.__filtered__ ? new Le(this) : this[a](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(er);
      }, Le.prototype.find = function(t) {
        return this.filter(t).head();
      }, Le.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, Le.prototype.invokeMap = Ae(function(t, i) {
        return typeof t == "function" ? new Le(this) : this.map(function(a) {
          return Ai(a, t, i);
        });
      }), Le.prototype.reject = function(t) {
        return this.filter(Go(Se(t)));
      }, Le.prototype.slice = function(t, i) {
        t = Me(t);
        var a = this;
        return a.__filtered__ && (t > 0 || i < 0) ? new Le(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), i !== r && (i = Me(i), a = i < 0 ? a.dropRight(-i) : a.take(i - t)), a);
      }, Le.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(J);
      }, Dr(Le.prototype, function(t, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), f = /^(?:head|last)$/.test(i), m = S[f ? "take" + (i == "last" ? "Right" : "") : i], w = f || /^find/.test(i);
        m && (S.prototype[i] = function() {
          var T = this.__wrapped__, z = f ? [1] : arguments, $ = T instanceof Le, q = z[0], K = $ || Te(T), Q = function(Pe) {
            var ke = m.apply(S, sn([Pe], z));
            return f && ue ? ke[0] : ke;
          };
          K && a && typeof q == "function" && q.length != 1 && ($ = K = !1);
          var ue = this.__chain__, ve = !!this.__actions__.length, xe = w && !ue, Oe = $ && !ve;
          if (!w && K) {
            T = Oe ? T : new Le(this);
            var we = t.apply(T, z);
            return we.__actions__.push({ func: No, args: [Q], thisArg: r }), new vr(we, ue);
          }
          return xe && Oe ? t.apply(this, z) : (we = this.thru(Q), xe ? f ? we.value()[0] : we.value() : we);
        });
      }), gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = co[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
        S.prototype[t] = function() {
          var m = arguments;
          if (f && !this.__chain__) {
            var w = this.value();
            return i.apply(Te(w) ? w : [], m);
          }
          return this[a](function(T) {
            return i.apply(Te(T) ? T : [], m);
          });
        };
      }), Dr(Le.prototype, function(t, i) {
        var a = S[i];
        if (a) {
          var f = a.name + "";
          Fe.call(Un, f) || (Un[f] = []), Un[f].push({ name: i, func: a });
        }
      }), Un[Po(r, _).name] = [{
        name: "wrapper",
        func: r
      }], Le.prototype.clone = tg, Le.prototype.reverse = rg, Le.prototype.value = ng, S.prototype.at = P0, S.prototype.chain = R0, S.prototype.commit = L0, S.prototype.next = $0, S.prototype.plant = D0, S.prototype.reverse = B0, S.prototype.toJSON = S.prototype.valueOf = S.prototype.value = N0, S.prototype.first = S.prototype.head, Ei && (S.prototype[Ei] = k0), S;
    }, Yn = Lh();
    xn ? ((xn.exports = Yn)._ = Yn, Fs._ = Yn) : At._ = Yn;
  }).call(Di);
})(hs, hs.exports);
var Dp = hs.exports;
const QE = /* @__PURE__ */ Wd(Dp);
function e_(e) {
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
function t_(e) {
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
function r_(e) {
  const { palette: n, spacing: r } = e;
  return {
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: /* @__PURE__ */ ie.jsx(Bd, { size: 20 })
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
const Or = (e, n) => {
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
function zn({ color: e, theme: n }) {
  const r = Or(n, e), { lighter: o, light: s, main: l } = r;
  return {
    borderColor: mt(s, 0.5),
    backgroundColor: o,
    "& .MuiAlert-icon": {
      color: l
    }
  };
}
function n_(e) {
  const n = zn({ color: "primary", theme: e });
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
          "&.MuiAlert-borderPrimary": zn({
            color: "primary",
            theme: e
          }),
          "&.MuiAlert-borderSecondary": zn({
            color: "secondary",
            theme: e
          }),
          "&.MuiAlert-borderError": zn({ color: "error", theme: e }),
          "&.MuiAlert-borderSuccess": zn({
            color: "success",
            theme: e
          }),
          "&.MuiAlert-borderInfo": zn({ color: "info", theme: e }),
          "&.MuiAlert-borderWarning": zn({
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
function i_() {
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
function o_() {
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
function Pn({ color: e, theme: n }) {
  const r = Or(n, e), { lighter: o, main: s } = r;
  return {
    color: s,
    backgroundColor: o
  };
}
function s_(e) {
  const n = Pn({ color: "primary", theme: e });
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
          "&.MuiBadge-colorPrimary": Pn({ color: "primary", theme: e }),
          "&.MuiBadge-colorSecondary": Pn({
            color: "secondary",
            theme: e
          }),
          "&.MuiBadge-colorError": Pn({ color: "error", theme: e }),
          "&.MuiBadge-colorInfo": Pn({ color: "info", theme: e }),
          "&.MuiBadge-colorSuccess": Pn({ color: "success", theme: e }),
          "&.MuiBadge-colorWarning": Pn({ color: "warning", theme: e })
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
const Ul = (e, n) => {
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
  const o = Or(r, n);
  let { lighter: s, main: l, dark: u, contrastText: p } = o;
  n === "secondary" && (s = r.palette.background.lightGrey || s, l = r.palette.grey.main, u = r.palette.grey.darker, p = "#fff");
  const c = `${n}Button`, h = Ul(r, c), y = {
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
        "&:hover": {
          color: u,
          backgroundColor: "transparent",
          borderColor: u
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
function a_(e) {
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
        backgroundColor: (u = Or(e, l)) == null ? void 0 : u.lighter,
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
        ...pi == null ? void 0 : pi.map((l) => {
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
function l_() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function u_() {
  return {
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: !0
      }
    }
  };
}
function c_() {
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
function ni({ color: e, theme: n }) {
  const r = Or(n, e), { lighter: o, main: s, dark: l } = r;
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
function f_(e) {
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
function vl(e) {
  const n = f_(e);
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
function d_(e) {
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
              sS,
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
              oS,
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
            ...vl("small")
          },
          "&.size-medium": {
            ...vl("medium")
          },
          "&.size-large": {
            ...vl("large")
          }
        },
        colorPrimary: ni({ color: "primary", theme: e }),
        colorSecondary: ni({ color: "secondary", theme: e }),
        colorSuccess: ni({ color: "success", theme: e }),
        colorWarning: ni({ color: "warning", theme: e }),
        colorInfo: ni({ color: "info", theme: e }),
        colorError: ni({ color: "error", theme: e })
      }
    }
  };
}
function ii({ color: e, theme: n }) {
  const r = Or(n, e), { dark: o } = r;
  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${o}`,
      outlineOffset: 2
    }
  };
}
function lr({ color: e, theme: n }) {
  const r = Or(n, e), { light: o, lighter: s, main: l } = r;
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
function p_(e) {
  const n = lr({ color: "secondary", theme: e });
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
          "&.MuiChip-colorPrimary": ii({ color: "primary", theme: e }),
          "&.MuiChip-colorSecondary": ii({ color: "secondary", theme: e }),
          "&.MuiChip-colorError": ii({ color: "error", theme: e }),
          "&.MuiChip-colorInfo": ii({ color: "info", theme: e }),
          "&.MuiChip-colorSuccess": ii({ color: "success", theme: e }),
          "&.MuiChip-colorWarning": ii({ color: "warning", theme: e })
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
          "&.MuiChip-lightPrimary": lr({ color: "primary", theme: e }),
          "&.MuiChip-lightSecondary": lr({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-lightError": lr({ color: "error", theme: e }),
          "&.MuiChip-lightInfo": lr({ color: "info", theme: e }),
          "&.MuiChip-lightSuccess": lr({ color: "success", theme: e }),
          "&.MuiChip-lightWarning": lr({ color: "warning", theme: e })
        },
        combined: {
          border: "1px solid",
          ...n,
          "&.MuiChip-combinedPrimary": lr({
            color: "primary",
            theme: e
          }),
          "&.MuiChip-combinedSecondary": lr({
            color: "secondary",
            theme: e
          }),
          "&.MuiChip-combinedError": lr({ color: "error", theme: e }),
          "&.MuiChip-combinedInfo": lr({ color: "info", theme: e }),
          "&.MuiChip-combinedSuccess": lr({
            color: "success",
            theme: e
          }),
          "&.MuiChip-combinedWarning": lr({
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
function h_() {
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
function g_(e) {
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
function m_() {
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
function v_(e) {
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
function oi({ color: e, theme: n }) {
  const r = Or(n, e), { main: o, dark: s, contrastText: l } = r, u = `${e}Button`, p = Ul(n, u);
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
function y_(e) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          "&.Mui-disabled": {
            backgroundColor: e.palette.grey[200]
          },
          "&.MuiFab-primary": oi({ color: "primary", theme: e }),
          "&.MuiFab-secondary": oi({ color: "secondary", theme: e }),
          "&.Mui-error": oi({ color: "error", theme: e }),
          "&.MuiFab-success": oi({ color: "success", theme: e }),
          "&.MuiFab-info": oi({ color: "info", theme: e }),
          "&.MuiFab-warning": oi({ color: "warning", theme: e }),
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
function b_(e) {
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
function S_(e) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          // borderRadius: 4,
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
      defaultProps: {
        shape: "rounded"
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
function x_(e) {
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
function w_(e) {
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
function E_() {
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
function __() {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover"
      }
    }
  };
}
function C_(e) {
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
function T_(e) {
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
function M_(e) {
  const n = pi == null ? void 0 : pi.reduce((r, o) => {
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
function Rn({ variant: e, theme: n }) {
  const r = Or(n, e), { light: o } = r;
  return Ul(n, `${e}`), {
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
function I_(e) {
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
          ...Rn({ variant: "primary", theme: e }),
          "&.Mui-error": {
            ...Rn({ variant: "error", theme: e })
          }
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px"
        },
        inputMultiline: {
          padding: 0
        },
        colorSecondary: Rn({ variant: "secondary", theme: e }),
        colorError: Rn({ variant: "error", theme: e }),
        colorWarning: Rn({ variant: "warning", theme: e }),
        colorInfo: Rn({ variant: "info", theme: e }),
        colorSuccess: Rn({ variant: "success", theme: e })
      }
    }
  };
}
function O_() {
  return {
    MuiPagination: {
      defaultProps: {
        shape: "rounded"
      }
    }
  };
}
function ot({ variant: e, color: n, theme: r }) {
  const o = Or(r, n), { lighter: s, light: l, dark: u, main: p, contrastText: c } = o, h = {
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
function A_(e) {
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
            "&.MuiPaginationItem-textPrimary": ot({
              variant: "text",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-textSecondary": ot({
              variant: "text",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-textError": ot({
              variant: "text",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-textSuccess": ot({
              variant: "text",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-textInfo": ot({
              variant: "text",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-textWarning": ot({
              variant: "text",
              color: "warning",
              theme: e
            })
          }
        },
        contained: {
          "&.Mui-selected": {
            "&.MuiPaginationItem-containedPrimary": ot({
              variant: "contained",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-containedSecondary": ot({
              variant: "contained",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-containedError": ot({
              variant: "contained",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-containedSuccess": ot({
              variant: "contained",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-containedInfo": ot({
              variant: "contained",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-containedWarning": ot({
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
            "&.MuiPaginationItem-combinedPrimary": ot({
              variant: "combined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSecondary": ot({
              variant: "combined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-combinedError": ot({
              variant: "combined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-combinedSuccess": ot({
              variant: "combined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-combinedInfo": ot({
              variant: "combined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-combinedWarning": ot({
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
            "&.MuiPaginationItem-outlinedPrimary": ot({
              variant: "outlined",
              color: "primary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSecondary": ot({
              variant: "outlined",
              color: "secondary",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedError": ot({
              variant: "outlined",
              color: "error",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedSuccess": ot({
              variant: "outlined",
              color: "success",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedInfo": ot({
              variant: "outlined",
              color: "info",
              theme: e
            }),
            "&.MuiPaginationItem-outlinedWarning": ot({
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
function z_(e) {
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
function si({ color: e, theme: n }) {
  const r = Or(n, e), { lighter: o, main: s, dark: l } = r;
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
function P_(e) {
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
function yl(e) {
  const n = P_(e);
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
function R_(e) {
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
            ...yl("small")
          },
          "&.size-medium": {
            ...yl("medium")
          },
          "&.size-large": {
            ...yl("large")
          }
        },
        colorPrimary: si({ color: "primary", theme: e }),
        colorSecondary: si({ color: "secondary", theme: e }),
        colorSuccess: si({ color: "success", theme: e }),
        colorWarning: si({ color: "warning", theme: e }),
        colorInfo: si({ color: "info", theme: e }),
        colorError: si({ color: "error", theme: e })
      }
    }
  };
}
function L_(e) {
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
function ai({ color: e, theme: n }) {
  const r = Or(n, e), { main: o } = r;
  return {
    border: `2px solid ${o}`
  };
}
function $_(e) {
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
          "&.MuiSlider-thumbColorPrimary": ai({
            color: "primary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSecondary": ai({
            color: "secondary",
            theme: e
          }),
          "&.MuiSlider-thumbColorSuccess": ai({
            color: "success",
            theme: e
          }),
          "&.MuiSlider-thumbColorWarning": ai({
            color: "warning",
            theme: e
          }),
          "&.MuiSlider-thumbColorInfo": ai({ color: "info", theme: e }),
          "&.MuiSlider-thumbColorError": ai({
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
function k_(e) {
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
function bl(e, n) {
  const r = k_(n);
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
function D_(e) {
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
          ...bl(e, "medium")
        },
        sizeLarge: { ...bl(e, "large") },
        sizeSmall: {
          ...bl(e, "small")
        }
      }
    }
  };
}
function B_(e) {
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
function N_(e) {
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
function W_(e) {
  return {
    MuiTableBody: {
      styleOverrides: {
        root: {}
      }
    }
  };
}
function V_(e) {
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
function F_(e) {
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
function G_(e) {
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
function Y_() {
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
function j_() {
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
function H_() {
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
function U_(e) {
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
function X_(e) {
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
function q_() {
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
function K_() {
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
function Z_(e) {
  return Dp.merge(
    e_(e),
    t_(e),
    r_(e),
    n_(e),
    i_(),
    o_(),
    s_(e),
    a_(e),
    l_(),
    u_(),
    c_(),
    d_(e),
    p_(e),
    b_(e),
    h_(),
    g_(e),
    m_(),
    v_(e),
    y_(e),
    S_(),
    x_(e),
    w_(e),
    E_(),
    __(),
    C_(e),
    T_(),
    M_(e),
    I_(e),
    O_(),
    A_(e),
    z_(e),
    R_(e),
    L_(e),
    $_(e),
    D_(e),
    B_(e),
    W_(),
    V_(e),
    F_(e),
    G_(e),
    Y_(),
    j_(),
    H_(),
    U_(e),
    X_(e),
    q_(),
    K_(),
    N_()
  );
}
const Vr = {
  50: "#fff8e1",
  200: "#ffe082",
  400: "#ffca28",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00"
}, J_ = (e = "light") => {
  const n = {
    0: "#ffffff",
    50: ce[50],
    // #fafafa
    100: ce[100],
    // #f5f5f5
    200: ce[200],
    // #eeeeee
    300: ce[300],
    // #e0e0e0
    400: ce[400],
    // #bdbdbd
    500: ce[500],
    // #9e9e9e
    600: ce[600],
    // #757575
    700: ce[700],
    // #616161
    800: ce[800],
    // #424242
    900: ce[900],
    // #212121
    A50: ce[50],
    A100: ce[100],
    A200: ce[200],
    A400: ce[400],
    A700: ce[700],
    A800: ce[800],
    lighter: e === "light" ? ce[100] : ce[800],
    light: e === "light" ? ce[200] : ce[700],
    main: ce[500],
    dark: e === "light" ? ce[700] : ce[300],
    darker: e === "light" ? ce[900] : ce[100]
  }, r = e === "light" ? "#fff" : "#1D2125", o = ce[500];
  return {
    primary: {
      lighter: e === "light" ? Ct[50] : Ct[900],
      light: e === "light" ? Ct[200] : Ct[700],
      main: e === "light" ? Ct[600] : Ct[400],
      dark: e === "light" ? Ct[800] : Ct[200],
      darker: e === "light" ? Ct[900] : Ct[50],
      contrastText: r,
      disableColor: r
    },
    secondary: {
      lighter: e === "light" ? ce[100] : ce[800],
      light: e === "light" ? ce[200] : ce[700],
      main: e === "light" ? ce[600] : ce[400],
      dark: e === "light" ? ce[800] : ce[200],
      darker: e === "light" ? ce[900] : ce[100],
      contrastText: r,
      disableColor: r
    },
    error: {
      lighter: e === "light" ? Bt[50] : Bt[900],
      light: e === "light" ? Bt[200] : Bt[700],
      main: e === "light" ? Bt[600] : Bt[400],
      dark: e === "light" ? Bt[800] : Bt[200],
      darker: e === "light" ? Bt[900] : Bt[50],
      contrastText: r,
      disableColor: r
    },
    warning: {
      lighter: e === "light" ? Vr[50] : Vr[900],
      light: e === "light" ? Vr[200] : Vr[700],
      main: e === "light" ? Vr[600] : Vr[400],
      dark: e === "light" ? Vr[800] : Vr[200],
      darker: e === "light" ? Vr[900] : Vr[50],
      contrastText: ce[900],
      disableColor: o
    },
    info: {
      lighter: e === "light" ? Nt[50] : Nt[900],
      light: e === "light" ? Nt[200] : Nt[700],
      main: e === "light" ? Nt[600] : Nt[400],
      dark: e === "light" ? Nt[800] : Nt[200],
      darker: e === "light" ? Nt[900] : Nt[50],
      contrastText: r,
      disableColor: o
    },
    success: {
      lighter: e === "light" ? Wt[50] : Wt[900],
      light: e === "light" ? Wt[200] : Wt[700],
      main: e === "light" ? Wt[600] : Wt[400],
      dark: e === "light" ? Wt[800] : Wt[200],
      darker: e === "light" ? Wt[900] : Wt[50],
      contrastText: r,
      disableColor: r
    },
    light: {
      lighter: ce[50],
      light: ce[100],
      main: ce[200],
      dark: ce[300],
      darker: ce[400],
      contrastText: ce[900],
      disableColor: o
    },
    dark: {
      lighter: ce[500],
      light: ce[600],
      main: ce[700],
      dark: ce[800],
      darker: ce[900],
      contrastText: "#fff",
      disableColor: r
    },
    text: {
      primary: e === "light" ? ce[900] : ce[100],
      secondary: e === "light" ? ce[700] : ce[300],
      disabled: ce[500],
      dark: ce[900]
    },
    background: {
      paper: e === "light" ? "#FFFFFF" : ce[900],
      default: e === "light" ? "#FFFFFF" : "#121212",
      card: e === "light" ? ce[50] : ce[800],
      softGrey: e === "light" ? ce[100] : ce[800],
      darkGrey: e === "light" ? ce[200] : ce[700],
      lightGrey: e === "light" ? ce[50] : ce[900]
    },
    divider: e === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)",
    border: {
      light: e === "light" ? ce[200] : ce[700],
      main: e === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)",
      dark: e === "light" ? ce[400] : ce[500]
    },
    grey: n,
    header: ce[100],
    link: e === "light" ? Ct[600] : Ct[400]
  };
}, Q_ = (e = "light") => J_(e), eC = (e = "light") => {
  var r;
  const n = Q_(e);
  return {
    mode: e,
    common: {
      black: "#000",
      white: "#fff"
    },
    ...n,
    action: {
      disabled: (r = n == null ? void 0 : n.text) == null ? void 0 : r.disabled
    }
  };
}, tC = (e) => {
  var n, r, o, s, l, u, p, c, h, y, v, E, d, g, x;
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
    errorButton: `0 14px 12px ${mt(((v = e == null ? void 0 : e.error) == null ? void 0 : v.main) || "#d9d9d9", 0.2)}`,
    warningButton: `0 14px 12px ${mt(((E = e == null ? void 0 : e.warning) == null ? void 0 : E.main) || "#d9d9d9", 0.2)}`,
    infoButton: `0 14px 12px ${mt(((d = e == null ? void 0 : e.info) == null ? void 0 : d.main) || "#d9d9d9", 0.2)}`,
    successButton: `0 14px 12px ${mt(((g = e == null ? void 0 : e.success) == null ? void 0 : g.main) || "#d9d9d9", 0.2)}`,
    greyButton: `0 14px 12px ${mt(((x = e == null ? void 0 : e.grey) == null ? void 0 : x[500]) || "#d9d9d9", 0.2)}`,
    // wrapper: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' // old used in new GW
    // wrapper: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)' // used in new GW
    wrapper: "rgba(0, 0, 0, 0.08) 0px 1px 4px"
    // mantis theme. Refer: https://mantisdashboard.io/login
  };
}, rC = () => ({
  htmlFontSize: 16,
  fontFamily: "NotoSansKR, 'IBM Plex Sans', sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    fontSize: "2.375rem"
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem"
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.313rem"
  },
  h4: {
    fontWeight: 600,
    fontSize: "0.875rem"
  },
  h5: {
    fontWeight: 600,
    fontSize: "0.813rem"
  },
  h6: {
    fontWeight: 500,
    fontSize: "0.625rem"
  },
  caption: {
    fontWeight: 500,
    fontSize: "0.75rem"
  },
  body1: {
    fontWeight: 400,
    fontSize: "0.8125rem"
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.75rem"
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: "0.875rem"
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: "0.75rem"
  },
  overline: {
    lineHeight: 1.66
  },
  button: {
    textTransform: "capitalize"
  }
}), pi = [
  "primary",
  "secondary",
  "success",
  "error",
  "warning",
  "info"
], vC = ({ mode: e = "light", children: n }) => {
  const r = $d(() => {
    var l, u, p;
    const o = eC(e), s = kp({
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
      palette: o,
      customShadows: tC(o),
      typography: rC(),
      border: {
        dark: `1px solid ${(l = o == null ? void 0 : o.border) == null ? void 0 : l.dark}`,
        main: `1px solid ${(u = o == null ? void 0 : o.border) == null ? void 0 : u.main}`,
        light: `1px solid ${(p = o == null ? void 0 : o.border) == null ? void 0 : p.light}`
      }
    });
    return s.components = Z_(s), s;
  }, [e]);
  return /* @__PURE__ */ ie.jsx(Xb, { injectFirst: !0, children: /* @__PURE__ */ ie.jsxs(JE, { theme: r, children: [
    /* @__PURE__ */ ie.jsx(qb, {}),
    n
  ] }) });
}, nC = (e, n) => {
  const [r, o] = Vt(!1), [s, l] = Vt(window.innerWidth);
  return zl(() => {
    const { current: u } = e;
    u && (() => {
      const c = u.scrollHeight > u.clientHeight;
      o(c), n && n(c);
    })();
  }, [e, s]), Tr(() => {
    const u = QE.debounce(() => {
      l(window.innerWidth);
    }, 500);
    return window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, []), r;
}, yC = ({
  children: e,
  sx: n,
  lines: r = 1
}) => {
  const o = et(null), [s, l] = Vt(!1);
  return nC(o, (u) => l(u)), /* @__PURE__ */ ie.jsx(
    Kb,
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
        Ln,
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
  cC as C,
  dC as L,
  hC as S,
  vC as T,
  fC as a,
  gC as b,
  mC as c,
  yC as d,
  pC as i
};

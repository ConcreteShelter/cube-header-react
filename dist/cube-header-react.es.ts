import * as O from "react";
import we, { createContext as Vr, useContext as rr, useRef as Wr, useCallback as Br, useDebugValue as Hr, useState as Dt } from "react";
import "react-dom";
function zr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Yr() {
  if (Lt) return Pe;
  Lt = 1;
  var e = we, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, s, l) {
    var f, m = {}, h = null, g = null;
    l !== void 0 && (h = "" + l), s.key !== void 0 && (h = "" + s.key), s.ref !== void 0 && (g = s.ref);
    for (f in s) i.call(s, f) && !a.hasOwnProperty(f) && (m[f] = s[f]);
    if (c && c.defaultProps) for (f in s = c.defaultProps, s) m[f] === void 0 && (m[f] = s[f]);
    return { $$typeof: r, type: c, key: h, ref: g, props: m, _owner: o.current };
  }
  return Pe.Fragment = n, Pe.jsx = u, Pe.jsxs = u, Pe;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function Ur() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, E = "@@iterator";
    function d(t) {
      if (t === null || typeof t != "object")
        return null;
      var v = y && t[y] || t[E];
      return typeof v == "function" ? v : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(t) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), T = 1; T < v; T++)
          S[T - 1] = arguments[T];
        C("error", t, S);
      }
    }
    function C(t, v, S) {
      {
        var T = x.ReactDebugCurrentFrame, D = T.getStackAddendum();
        D !== "" && (v += "%s", S = S.concat([D]));
        var F = S.map(function(N) {
          return String(N);
        });
        F.unshift("Warning: " + v), Function.prototype.apply.call(console[t], console, F);
      }
    }
    var b = !1, p = !1, A = !1, k = !1, H = !1, ee;
    ee = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === a || H || t === o || t === l || t === f || k || t === g || b || p || A || typeof t == "object" && t !== null && (t.$$typeof === h || t.$$typeof === m || t.$$typeof === u || t.$$typeof === c || t.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ee || t.getModuleId !== void 0));
    }
    function oe(t, v, S) {
      var T = t.displayName;
      if (T)
        return T;
      var D = v.displayName || v.name || "";
      return D !== "" ? S + "(" + D + ")" : S;
    }
    function de(t) {
      return t.displayName || "Context";
    }
    function Y(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var v = t;
            return de(v) + ".Consumer";
          case u:
            var S = t;
            return de(S._context) + ".Provider";
          case s:
            return oe(t, t.render, "ForwardRef");
          case m:
            var T = t.displayName || null;
            return T !== null ? T : Y(t.type) || "Memo";
          case h: {
            var D = t, F = D._payload, N = D._init;
            try {
              return Y(N(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, J = 0, pe, ve, te, ae, ie, me, he;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ce() {
      {
        if (J === 0) {
          pe = console.log, ve = console.info, te = console.warn, ae = console.error, ie = console.group, me = console.groupCollapsed, he = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        J++;
      }
    }
    function xe() {
      {
        if (J--, J === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: pe
            }),
            info: X({}, t, {
              value: ve
            }),
            warn: X({}, t, {
              value: te
            }),
            error: X({}, t, {
              value: ae
            }),
            group: X({}, t, {
              value: ie
            }),
            groupCollapsed: X({}, t, {
              value: me
            }),
            groupEnd: X({}, t, {
              value: he
            })
          });
        }
        J < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = x.ReactCurrentDispatcher, se;
    function re(t, v, S) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (D) {
            var T = D.stack.trim().match(/\n( *(at )?)/);
            se = T && T[1] || "";
          }
        return `
` + se + t;
      }
    }
    var ce = !1, ne;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Oe();
    }
    function w(t, v) {
      if (!t || ce)
        return "";
      {
        var S = ne.get(t);
        if (S !== void 0)
          return S;
      }
      var T;
      ce = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = ue.current, ue.current = null, Ce();
      try {
        if (v) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (U) {
              T = U;
            }
            Reflect.construct(t, [], N);
          } else {
            try {
              N.call();
            } catch (U) {
              T = U;
            }
            t.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            T = U;
          }
          t();
        }
      } catch (U) {
        if (U && T && typeof U.stack == "string") {
          for (var P = U.stack.split(`
`), z = T.stack.split(`
`), V = P.length - 1, B = z.length - 1; V >= 1 && B >= 0 && P[V] !== z[B]; )
            B--;
          for (; V >= 1 && B >= 0; V--, B--)
            if (P[V] !== z[B]) {
              if (V !== 1 || B !== 1)
                do
                  if (V--, B--, B < 0 || P[V] !== z[B]) {
                    var G = `
` + P[V].replace(" at new ", " at ");
                    return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)), typeof t == "function" && ne.set(t, G), G;
                  }
                while (V >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ue.current = F, xe(), Error.prepareStackTrace = D;
      }
      var ge = t ? t.displayName || t.name : "", fe = ge ? re(ge) : "";
      return typeof t == "function" && ne.set(t, fe), fe;
    }
    function le(t, v, S) {
      return w(t, !1);
    }
    function _(t) {
      var v = t.prototype;
      return !!(v && v.isReactComponent);
    }
    function K(t, v, S) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return w(t, _(t));
      if (typeof t == "string")
        return re(t);
      switch (t) {
        case l:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            return le(t.render);
          case m:
            return K(t.type, v, S);
          case h: {
            var T = t, D = T._payload, F = T._init;
            try {
              return K(F(D), v, S);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, Te = {}, St = x.ReactDebugCurrentFrame;
    function Me(t) {
      if (t) {
        var v = t._owner, S = K(t.type, t._source, v ? v.type : null);
        St.setExtraStackFrame(S);
      } else
        St.setExtraStackFrame(null);
    }
    function yr(t, v, S, T, D) {
      {
        var F = Function.call.bind($);
        for (var N in t)
          if (F(t, N)) {
            var P = void 0;
            try {
              if (typeof t[N] != "function") {
                var z = Error((T || "React class") + ": " + S + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              P = t[N](v, N, T, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              P = V;
            }
            P && !(P instanceof Error) && (Me(D), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", S, N, typeof P), Me(null)), P instanceof Error && !(P.message in Te) && (Te[P.message] = !0, Me(D), R("Failed %s type: %s", S, P.message), Me(null));
          }
      }
    }
    var Er = Array.isArray;
    function Xe(t) {
      return Er(t);
    }
    function gr(t) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, S = v && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return S;
      }
    }
    function Sr(t) {
      try {
        return Rt(t), !1;
      } catch {
        return !0;
      }
    }
    function Rt(t) {
      return "" + t;
    }
    function bt(t) {
      if (Sr(t))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(t)), Rt(t);
    }
    var Ae = x.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, _t, Ke;
    Ke = {};
    function br(t) {
      if ($.call(t, "ref")) {
        var v = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function wr(t) {
      if ($.call(t, "key")) {
        var v = Object.getOwnPropertyDescriptor(t, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function _r(t, v) {
      if (typeof t.ref == "string" && Ae.current && v && Ae.current.stateNode !== v) {
        var S = Y(Ae.current.type);
        Ke[S] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Ae.current.type), t.ref), Ke[S] = !0);
      }
    }
    function Cr(t, v) {
      {
        var S = function() {
          wt || (wt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function xr(t, v) {
      {
        var S = function() {
          _t || (_t = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Or = function(t, v, S, T, D, F, N) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: v,
        ref: S,
        props: N,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Tr(t, v, S, T, D) {
      {
        var F, N = {}, P = null, z = null;
        S !== void 0 && (bt(S), P = "" + S), wr(v) && (bt(v.key), P = "" + v.key), br(v) && (z = v.ref, _r(v, D));
        for (F in v)
          $.call(v, F) && !Rr.hasOwnProperty(F) && (N[F] = v[F]);
        if (t && t.defaultProps) {
          var V = t.defaultProps;
          for (F in V)
            N[F] === void 0 && (N[F] = V[F]);
        }
        if (P || z) {
          var B = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Cr(N, B), z && xr(N, B);
        }
        return Or(t, P, z, D, T, Ae.current, N);
      }
    }
    var $e = x.ReactCurrentOwner, Ct = x.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var v = t._owner, S = K(t.type, t._source, v ? v.type : null);
        Ct.setExtraStackFrame(S);
      } else
        Ct.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function qe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function xt() {
      {
        if ($e.current) {
          var t = Y($e.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ar(t) {
      return "";
    }
    var Ot = {};
    function Pr(t) {
      {
        var v = xt();
        if (!v) {
          var S = typeof t == "string" ? t : t.displayName || t.name;
          S && (v = `

Check the top-level render call using <` + S + ">.");
        }
        return v;
      }
    }
    function Tt(t, v) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var S = Pr(v);
        if (Ot[S])
          return;
        Ot[S] = !0;
        var T = "";
        t && t._owner && t._owner !== $e.current && (T = " It was passed a child from " + Y(t._owner.type) + "."), Ee(t), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, T), Ee(null);
      }
    }
    function At(t, v) {
      {
        if (typeof t != "object")
          return;
        if (Xe(t))
          for (var S = 0; S < t.length; S++) {
            var T = t[S];
            qe(T) && Tt(T, v);
          }
        else if (qe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = d(t);
          if (typeof D == "function" && D !== t.entries)
            for (var F = D.call(t), N; !(N = F.next()).done; )
              qe(N.value) && Tt(N.value, v);
        }
      }
    }
    function Nr(t) {
      {
        var v = t.type;
        if (v == null || typeof v == "string")
          return;
        var S;
        if (typeof v == "function")
          S = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === m))
          S = v.propTypes;
        else
          return;
        if (S) {
          var T = Y(v);
          yr(S, t.props, "prop", T, t);
        } else if (v.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var D = Y(v);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(t) {
      {
        for (var v = Object.keys(t.props), S = 0; S < v.length; S++) {
          var T = v[S];
          if (T !== "children" && T !== "key") {
            Ee(t), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Ee(null);
            break;
          }
        }
        t.ref !== null && (Ee(t), R("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var Pt = {};
    function Nt(t, v, S, T, D, F) {
      {
        var N = q(t);
        if (!N) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Ar();
          z ? P += z : P += xt();
          var V;
          t === null ? V = "null" : Xe(t) ? V = "array" : t !== void 0 && t.$$typeof === r ? (V = "<" + (Y(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : V = typeof t, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, P);
        }
        var B = Tr(t, v, S, D, F);
        if (B == null)
          return B;
        if (N) {
          var G = v.children;
          if (G !== void 0)
            if (T)
              if (Xe(G)) {
                for (var ge = 0; ge < G.length; ge++)
                  At(G[ge], t);
                Object.freeze && Object.freeze(G);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              At(G, t);
        }
        if ($.call(v, "key")) {
          var fe = Y(t), U = Object.keys(v).filter(function(kr) {
            return kr !== "key";
          }), Je = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pt[fe + Je]) {
            var Fr = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, fe, Fr, fe), Pt[fe + Je] = !0;
          }
        }
        return t === i ? Dr(B) : Nr(B), B;
      }
    }
    function Lr(t, v, S) {
      return Nt(t, v, S, !0);
    }
    function Ir(t, v, S) {
      return Nt(t, v, S, !1);
    }
    var Mr = Ir, jr = Lr;
    Ne.Fragment = i, Ne.jsx = Mr, Ne.jsxs = jr;
  }()), Ne;
}
var Mt;
function Gr() {
  return Mt || (Mt = 1, process.env.NODE_ENV === "production" ? je.exports = Yr() : je.exports = Ur()), je.exports;
}
var Z = Gr(), ut = function() {
  return ut = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ut.apply(this, arguments);
};
function Xr(e) {
  return Vr(ut({ initialized: !1 }, e));
}
var Qe, jt;
function Kr() {
  if (jt) return Qe;
  jt = 1;
  var e = typeof Element < "u", r = typeof Map == "function", n = typeof Set == "function", i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function o(a, u) {
    if (a === u) return !0;
    if (a && u && typeof a == "object" && typeof u == "object") {
      if (a.constructor !== u.constructor) return !1;
      var c, s, l;
      if (Array.isArray(a)) {
        if (c = a.length, c != u.length) return !1;
        for (s = c; s-- !== 0; )
          if (!o(a[s], u[s])) return !1;
        return !0;
      }
      var f;
      if (r && a instanceof Map && u instanceof Map) {
        if (a.size !== u.size) return !1;
        for (f = a.entries(); !(s = f.next()).done; )
          if (!u.has(s.value[0])) return !1;
        for (f = a.entries(); !(s = f.next()).done; )
          if (!o(s.value[1], u.get(s.value[0]))) return !1;
        return !0;
      }
      if (n && a instanceof Set && u instanceof Set) {
        if (a.size !== u.size) return !1;
        for (f = a.entries(); !(s = f.next()).done; )
          if (!u.has(s.value[0])) return !1;
        return !0;
      }
      if (i && ArrayBuffer.isView(a) && ArrayBuffer.isView(u)) {
        if (c = a.length, c != u.length) return !1;
        for (s = c; s-- !== 0; )
          if (a[s] !== u[s]) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === u.source && a.flags === u.flags;
      if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf == "function" && typeof u.valueOf == "function") return a.valueOf() === u.valueOf();
      if (a.toString !== Object.prototype.toString && typeof a.toString == "function" && typeof u.toString == "function") return a.toString() === u.toString();
      if (l = Object.keys(a), c = l.length, c !== Object.keys(u).length) return !1;
      for (s = c; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(u, l[s])) return !1;
      if (e && a instanceof Element) return !1;
      for (s = c; s-- !== 0; )
        if (!((l[s] === "_owner" || l[s] === "__v" || l[s] === "__o") && a.$$typeof) && !o(a[l[s]], u[l[s]]))
          return !1;
      return !0;
    }
    return a !== a && u !== u;
  }
  return Qe = function(u, c) {
    try {
      return o(u, c);
    } catch (s) {
      if ((s.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw s;
    }
  }, Qe;
}
var $r = Kr();
const Zr = /* @__PURE__ */ zr($r);
var qr = /* @__PURE__ */ function() {
  var e = function(r, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
      i.__proto__ = o;
    } || function(i, o) {
      for (var a in o) o.hasOwnProperty(a) && (i[a] = o[a]);
    }, e(r, n);
  };
  return function(r, n) {
    e(r, n);
    function i() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
  };
}(), Se = function() {
  return Se = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Se.apply(this, arguments);
};
function Jr(e) {
  var r = {
    onLoad: "check-sso"
  }, n = {
    initialized: !1,
    isAuthenticated: !1,
    isLoading: !0
  };
  return (
    /** @class */
    function(i) {
      qr(o, i);
      function o() {
        var a = i !== null && i.apply(this, arguments) || this;
        return a.state = Se({}, n), a.onError = function(u) {
          return function(c) {
            var s = a.props.onEvent;
            s && s(u, c);
          };
        }, a.updateState = function(u) {
          return function() {
            var c = a.props, s = c.authClient, l = c.onEvent, f = c.onTokens, m = c.isLoadingCheck, h = a.state, g = h.initialized, y = h.isAuthenticated, E = h.isLoading;
            l && l(u);
            var d = m ? m(s) : !1, x = Qr(s);
            (!g || x !== y || d !== E) && a.setState({
              initialized: !0,
              isAuthenticated: x,
              isLoading: d
            });
            var R = s.idToken, C = s.refreshToken, b = s.token;
            f && f({
              idToken: R,
              refreshToken: C,
              token: b
            });
          };
        }, a.refreshToken = function(u) {
          return function() {
            var c = a.props, s = c.autoRefreshToken, l = c.authClient, f = c.onEvent;
            f && f(u), s !== !1 && l.updateToken(5);
          };
        }, a;
      }
      return o.prototype.componentDidMount = function() {
        this.init();
      }, o.prototype.componentDidUpdate = function(a) {
        var u = a.authClient, c = a.initOptions, s = this.props, l = s.initOptions, f = s.authClient;
        (f !== u || !Zr(l, c)) && (u.onReady = void 0, u.onAuthSuccess = void 0, u.onAuthError = void 0, u.onAuthRefreshSuccess = void 0, u.onAuthRefreshError = void 0, u.onAuthLogout = void 0, u.onTokenExpired = void 0, this.setState(Se({}, n)), this.init());
      }, o.prototype.init = function() {
        var a = this.props, u = a.initOptions, c = a.authClient;
        c.onReady = this.updateState("onReady"), c.onAuthSuccess = this.updateState("onAuthSuccess"), c.onAuthError = this.onError("onAuthError"), c.onAuthRefreshSuccess = this.updateState("onAuthRefreshSuccess"), c.onAuthRefreshError = this.onError("onAuthRefreshError"), c.onAuthLogout = this.updateState("onAuthLogout"), c.onTokenExpired = this.refreshToken("onTokenExpired"), c.init(Se(Se({}, r), u)).catch(this.onError("onInitError"));
      }, o.prototype.render = function() {
        var a = this.props, u = a.children, c = a.authClient, s = a.LoadingComponent, l = this.state, f = l.initialized, m = l.isLoading;
        return s && (!f || m) ? s : O.createElement(e.Provider, { value: { initialized: f, authClient: c } }, u);
      }, o;
    }(O.PureComponent)
  );
}
function Qr(e) {
  return !!e.idToken && !!e.token;
}
var dt = Xr();
dt.Consumer;
Jr(dt);
function en() {
  var e = rr(dt);
  if (!e)
    throw new Error("useKeycloak hook must be used inside ReactKeycloakProvider context");
  if (!e.authClient)
    throw new Error("authClient has not been assigned to ReactKeycloakProvider");
  var r = e.authClient, n = e.initialized;
  return {
    initialized: n,
    keycloak: r
  };
}
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, st.apply(this, arguments);
}
var Ft;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ft || (Ft = {}));
function W(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function De(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function ct(e) {
  let {
    pathname: r = "/",
    search: n = "",
    hash: i = ""
  } = e;
  return n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i), r;
}
function nr(e) {
  let r = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (r.hash = e.substr(n), e = e.substr(0, n));
    let i = e.indexOf("?");
    i >= 0 && (r.search = e.substr(i), e = e.substr(0, i)), e && (r.pathname = e);
  }
  return r;
}
var kt;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(kt || (kt = {}));
function Vt(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, i] = tn(e.path, e.caseSensitive, e.end), o = r.match(n);
  if (!o) return null;
  let a = o[0], u = a.replace(/(.)\/+$/, "$1"), c = o.slice(1);
  return {
    params: i.reduce((l, f, m) => {
      let {
        paramName: h,
        isOptional: g
      } = f;
      if (h === "*") {
        let E = c[m] || "";
        u = a.slice(0, a.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const y = c[m];
      return g && !y ? l[h] = void 0 : l[h] = (y || "").replace(/%2F/g, "/"), l;
    }, {}),
    pathname: a,
    pathnameBase: u,
    pattern: e
  };
}
function tn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !0), De(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let i = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, c, s) => (i.push({
    paramName: c,
    isOptional: s != null
  }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (i.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), i];
}
function Re(e, r) {
  if (r === "/") return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let n = r.endsWith("/") ? r.length - 1 : r.length, i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
function rn(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: n,
    search: i = "",
    hash: o = ""
  } = typeof e == "string" ? nr(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : nn(n, r) : r,
    search: an(i),
    hash: un(o)
  };
}
function nn(e, r) {
  let n = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function et(e, r, n, i) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function on(e) {
  return e.filter((r, n) => n === 0 || r.route.path && r.route.path.length > 0);
}
function or(e, r) {
  let n = on(e);
  return r ? n.map((i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
}
function ar(e, r, n, i) {
  i === void 0 && (i = !1);
  let o;
  typeof e == "string" ? o = nr(e) : (o = st({}, e), W(!o.pathname || !o.pathname.includes("?"), et("?", "pathname", "search", o)), W(!o.pathname || !o.pathname.includes("#"), et("#", "pathname", "hash", o)), W(!o.search || !o.search.includes("#"), et("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "", u = a ? "/" : o.pathname, c;
  if (u == null)
    c = n;
  else {
    let m = r.length - 1;
    if (!i && u.startsWith("..")) {
      let h = u.split("/");
      for (; h[0] === ".."; )
        h.shift(), m -= 1;
      o.pathname = h.join("/");
    }
    c = m >= 0 ? r[m] : "/";
  }
  let s = rn(o, c), l = u && u !== "/" && u.endsWith("/"), f = (a || u === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (l || f) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"), an = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, un = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ir = ["post", "put", "patch", "delete"];
new Set(ir);
const sn = ["get", ...ir];
new Set(sn);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, lt.apply(this, arguments);
}
const Ue = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (Ue.displayName = "DataRouter");
const ur = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (ur.displayName = "DataRouterState");
const cn = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (cn.displayName = "Await");
const Q = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (Q.displayName = "Navigation");
const vt = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (vt.displayName = "Location");
const _e = /* @__PURE__ */ O.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (_e.displayName = "Route");
const ln = /* @__PURE__ */ O.createContext(null);
process.env.NODE_ENV !== "production" && (ln.displayName = "RouteError");
function fn(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r;
  mt() || (process.env.NODE_ENV !== "production" ? W(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : W(!1));
  let {
    basename: i,
    navigator: o
  } = O.useContext(Q), {
    hash: a,
    pathname: u,
    search: c
  } = Ie(e, {
    relative: n
  }), s = u;
  return i !== "/" && (s = u === "/" ? i : pt([i, u])), o.createHref({
    pathname: s,
    search: c,
    hash: a
  });
}
function mt() {
  return O.useContext(vt) != null;
}
function Le() {
  return mt() || (process.env.NODE_ENV !== "production" ? W(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : W(!1)), O.useContext(vt).location;
}
const sr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function cr(e) {
  O.useContext(Q).static || O.useLayoutEffect(e);
}
function dn() {
  let {
    isDataRoute: e
  } = O.useContext(_e);
  return e ? yn() : pn();
}
function pn() {
  mt() || (process.env.NODE_ENV !== "production" ? W(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : W(!1));
  let e = O.useContext(Ue), {
    basename: r,
    future: n,
    navigator: i
  } = O.useContext(Q), {
    matches: o
  } = O.useContext(_e), {
    pathname: a
  } = Le(), u = JSON.stringify(or(o, n.v7_relativeSplatPath)), c = O.useRef(!1);
  return cr(() => {
    c.current = !0;
  }), O.useCallback(function(l, f) {
    if (f === void 0 && (f = {}), process.env.NODE_ENV !== "production" && De(c.current, sr), !c.current) return;
    if (typeof l == "number") {
      i.go(l);
      return;
    }
    let m = ar(l, JSON.parse(u), a, f.relative === "path");
    e == null && r !== "/" && (m.pathname = m.pathname === "/" ? r : pt([r, m.pathname])), (f.replace ? i.replace : i.push)(m, f.state, f);
  }, [r, i, u, a, e]);
}
function Ie(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r, {
    future: i
  } = O.useContext(Q), {
    matches: o
  } = O.useContext(_e), {
    pathname: a
  } = Le(), u = JSON.stringify(or(o, i.v7_relativeSplatPath));
  return O.useMemo(() => ar(e, JSON.parse(u), a, n === "path"), [e, u, a, n]);
}
var lr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(lr || {}), ht = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ht || {});
function fr(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function vn(e) {
  let r = O.useContext(Ue);
  return r || (process.env.NODE_ENV !== "production" ? W(!1, fr(e)) : W(!1)), r;
}
function mn(e) {
  let r = O.useContext(_e);
  return r || (process.env.NODE_ENV !== "production" ? W(!1, fr(e)) : W(!1)), r;
}
function dr(e) {
  let r = mn(e), n = r.matches[r.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? W(!1, e + ' can only be used on routes that contain a unique "id"') : W(!1)), n.route.id;
}
function hn() {
  return dr(ht.UseRouteId);
}
function yn() {
  let {
    router: e
  } = vn(lr.UseNavigateStable), r = dr(ht.UseNavigateStable), n = O.useRef(!1);
  return cr(() => {
    n.current = !0;
  }), O.useCallback(function(o, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && De(n.current, sr), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, lt({
      fromRouteId: r
    }, a)));
  }, [e, r]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function be() {
  return be = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, be.apply(this, arguments);
}
function yt(e, r) {
  if (e == null) return {};
  var n = {}, i = Object.keys(e), o, a;
  for (a = 0; a < i.length; a++)
    o = i[a], !(r.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const He = "get", ze = "application/x-www-form-urlencoded";
function Ge(e) {
  return e != null && typeof e.tagName == "string";
}
function En(e) {
  return Ge(e) && e.tagName.toLowerCase() === "button";
}
function gn(e) {
  return Ge(e) && e.tagName.toLowerCase() === "form";
}
function Sn(e) {
  return Ge(e) && e.tagName.toLowerCase() === "input";
}
function Rn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bn(e, r) {
  return e.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Rn(e);
}
let Fe = null;
function wn() {
  if (Fe === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Fe = !1;
    } catch {
      Fe = !0;
    }
  return Fe;
}
const _n = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function tt(e) {
  return e != null && !_n.has(e) ? (process.env.NODE_ENV !== "production" && De(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ze + '"')), null) : e;
}
function Cn(e, r) {
  let n, i, o, a, u;
  if (gn(e)) {
    let c = e.getAttribute("action");
    i = c ? Re(c, r) : null, n = e.getAttribute("method") || He, o = tt(e.getAttribute("enctype")) || ze, a = new FormData(e);
  } else if (En(e) || Sn(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = e.getAttribute("formaction") || c.getAttribute("action");
    if (i = s ? Re(s, r) : null, n = e.getAttribute("formmethod") || c.getAttribute("method") || He, o = tt(e.getAttribute("formenctype")) || tt(c.getAttribute("enctype")) || ze, a = new FormData(c, e), !wn()) {
      let {
        name: l,
        type: f,
        value: m
      } = e;
      if (f === "image") {
        let h = l ? l + "." : "";
        a.append(h + "x", "0"), a.append(h + "y", "0");
      } else l && a.append(l, m);
    }
  } else {
    if (Ge(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = He, i = null, o = ze, u = e;
  }
  return a && o === "text/plain" && (u = a, a = void 0), {
    action: i,
    method: n.toLowerCase(),
    encType: o,
    formData: a,
    body: u
  };
}
const xn = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], On = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], Tn = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], An = "6";
try {
  window.__reactRouterVersion = An;
} catch {
}
const pr = /* @__PURE__ */ O.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (pr.displayName = "ViewTransition");
const Pn = /* @__PURE__ */ O.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Pn.displayName = "Fetchers");
process.env.NODE_ENV;
const Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Et = /* @__PURE__ */ O.forwardRef(function(r, n) {
  let {
    onClick: i,
    relative: o,
    reloadDocument: a,
    replace: u,
    state: c,
    target: s,
    to: l,
    preventScrollReset: f,
    viewTransition: m
  } = r, h = yt(r, xn), {
    basename: g
  } = O.useContext(Q), y, E = !1;
  if (typeof l == "string" && Dn.test(l) && (y = l, Nn))
    try {
      let C = new URL(window.location.href), b = l.startsWith("//") ? new URL(C.protocol + l) : new URL(l), p = Re(b.pathname, g);
      b.origin === C.origin && p != null ? l = p + b.search + b.hash : E = !0;
    } catch {
      process.env.NODE_ENV !== "production" && De(!1, '<Link to="' + l + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let d = fn(l, {
    relative: o
  }), x = jn(l, {
    replace: u,
    state: c,
    target: s,
    preventScrollReset: f,
    relative: o,
    viewTransition: m
  });
  function R(C) {
    i && i(C), C.defaultPrevented || x(C);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ O.createElement("a", be({}, h, {
      href: y || d,
      onClick: E || a ? i : R,
      ref: n,
      target: s
    }))
  );
});
process.env.NODE_ENV !== "production" && (Et.displayName = "Link");
const Ln = /* @__PURE__ */ O.forwardRef(function(r, n) {
  let {
    "aria-current": i = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: u = !1,
    style: c,
    to: s,
    viewTransition: l,
    children: f
  } = r, m = yt(r, On), h = Ie(s, {
    relative: m.relative
  }), g = Le(), y = O.useContext(ur), {
    navigator: E,
    basename: d
  } = O.useContext(Q), x = y != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Hn(h) && l === !0, R = E.encodeLocation ? E.encodeLocation(h).pathname : h.pathname, C = g.pathname, b = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
  o || (C = C.toLowerCase(), b = b ? b.toLowerCase() : null, R = R.toLowerCase()), b && d && (b = Re(b, d) || b);
  const p = R !== "/" && R.endsWith("/") ? R.length - 1 : R.length;
  let A = C === R || !u && C.startsWith(R) && C.charAt(p) === "/", k = b != null && (b === R || !u && b.startsWith(R) && b.charAt(R.length) === "/"), H = {
    isActive: A,
    isPending: k,
    isTransitioning: x
  }, ee = A ? i : void 0, q;
  typeof a == "function" ? q = a(H) : q = [a, A ? "active" : null, k ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let oe = typeof c == "function" ? c(H) : c;
  return /* @__PURE__ */ O.createElement(Et, be({}, m, {
    "aria-current": ee,
    className: q,
    ref: n,
    style: oe,
    to: s,
    viewTransition: l
  }), typeof f == "function" ? f(H) : f);
});
process.env.NODE_ENV !== "production" && (Ln.displayName = "NavLink");
const In = /* @__PURE__ */ O.forwardRef((e, r) => {
  let {
    fetcherKey: n,
    navigate: i,
    reloadDocument: o,
    replace: a,
    state: u,
    method: c = He,
    action: s,
    onSubmit: l,
    relative: f,
    preventScrollReset: m,
    viewTransition: h
  } = e, g = yt(e, Tn), y = Wn(), E = Bn(s, {
    relative: f
  }), d = c.toLowerCase() === "get" ? "get" : "post", x = (R) => {
    if (l && l(R), R.defaultPrevented) return;
    R.preventDefault();
    let C = R.nativeEvent.submitter, b = (C == null ? void 0 : C.getAttribute("formmethod")) || c;
    y(C || R.currentTarget, {
      fetcherKey: n,
      method: b,
      navigate: i,
      replace: a,
      state: u,
      relative: f,
      preventScrollReset: m,
      viewTransition: h
    });
  };
  return /* @__PURE__ */ O.createElement("form", be({
    ref: r,
    method: d,
    action: E,
    onSubmit: o ? l : x
  }, g));
});
process.env.NODE_ENV !== "production" && (In.displayName = "Form");
process.env.NODE_ENV;
var Ye;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Ye || (Ye = {}));
var Wt;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Wt || (Wt = {}));
function Mn(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function vr(e) {
  let r = O.useContext(Ue);
  return r || (process.env.NODE_ENV !== "production" ? W(!1, Mn(e)) : W(!1)), r;
}
function jn(e, r) {
  let {
    target: n,
    replace: i,
    state: o,
    preventScrollReset: a,
    relative: u,
    viewTransition: c
  } = r === void 0 ? {} : r, s = dn(), l = Le(), f = Ie(e, {
    relative: u
  });
  return O.useCallback((m) => {
    if (bn(m, n)) {
      m.preventDefault();
      let h = i !== void 0 ? i : ct(l) === ct(f);
      s(e, {
        replace: h,
        state: o,
        preventScrollReset: a,
        relative: u,
        viewTransition: c
      });
    }
  }, [l, s, f, i, o, n, e, a, u, c]);
}
function Fn() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let kn = 0, Vn = () => "__" + String(++kn) + "__";
function Wn() {
  let {
    router: e
  } = vr(Ye.UseSubmit), {
    basename: r
  } = O.useContext(Q), n = hn();
  return O.useCallback(function(i, o) {
    o === void 0 && (o = {}), Fn();
    let {
      action: a,
      method: u,
      encType: c,
      formData: s,
      body: l
    } = Cn(i, r);
    if (o.navigate === !1) {
      let f = o.fetcherKey || Vn();
      e.fetch(f, n, o.action || a, {
        preventScrollReset: o.preventScrollReset,
        formData: s,
        body: l,
        formMethod: o.method || u,
        formEncType: o.encType || c,
        flushSync: o.flushSync
      });
    } else
      e.navigate(o.action || a, {
        preventScrollReset: o.preventScrollReset,
        formData: s,
        body: l,
        formMethod: o.method || u,
        formEncType: o.encType || c,
        replace: o.replace,
        state: o.state,
        fromRouteId: n,
        flushSync: o.flushSync,
        viewTransition: o.viewTransition
      });
  }, [e, r, n]);
}
function Bn(e, r) {
  let {
    relative: n
  } = r === void 0 ? {} : r, {
    basename: i
  } = O.useContext(Q), o = O.useContext(_e);
  o || (process.env.NODE_ENV !== "production" ? W(!1, "useFormAction must be used inside a RouteContext") : W(!1));
  let [a] = o.matches.slice(-1), u = be({}, Ie(e || ".", {
    relative: n
  })), c = Le();
  if (e == null) {
    u.search = c.search;
    let s = new URLSearchParams(u.search), l = s.getAll("index");
    if (l.some((m) => m === "")) {
      s.delete("index"), l.filter((h) => h).forEach((h) => s.append("index", h));
      let m = s.toString();
      u.search = m ? "?" + m : "";
    }
  }
  return (!e || e === ".") && a.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (u.pathname = u.pathname === "/" ? i : pt([i, u.pathname])), ct(u);
}
function Hn(e, r) {
  r === void 0 && (r = {});
  let n = O.useContext(pr);
  n == null && (process.env.NODE_ENV !== "production" ? W(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : W(!1));
  let {
    basename: i
  } = vr(Ye.useViewTransitionState), o = Ie(e, {
    relative: r.relative
  });
  if (!n.isTransitioning)
    return !1;
  let a = Re(n.currentLocation.pathname, i) || n.currentLocation.pathname, u = Re(n.nextLocation.pathname, i) || n.nextLocation.pathname;
  return Vt(o.pathname, u) != null || Vt(o.pathname, a) != null;
}
var ke = { exports: {} }, rt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function zn() {
  if (Bt) return rt;
  Bt = 1;
  var e = we;
  function r(m, h) {
    return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useState, o = e.useEffect, a = e.useLayoutEffect, u = e.useDebugValue;
  function c(m, h) {
    var g = h(), y = i({ inst: { value: g, getSnapshot: h } }), E = y[0].inst, d = y[1];
    return a(
      function() {
        E.value = g, E.getSnapshot = h, s(E) && d({ inst: E });
      },
      [m, g, h]
    ), o(
      function() {
        return s(E) && d({ inst: E }), m(function() {
          s(E) && d({ inst: E });
        });
      },
      [m]
    ), u(g), g;
  }
  function s(m) {
    var h = m.getSnapshot;
    m = m.value;
    try {
      var g = h();
      return !n(m, g);
    } catch {
      return !0;
    }
  }
  function l(m, h) {
    return h();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : c;
  return rt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, rt;
}
var nt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function Yn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, y) {
      return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
    }
    function r(g, y) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var E = y();
      if (!m) {
        var d = y();
        a(E, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), m = !0);
      }
      d = u({
        inst: { value: E, getSnapshot: y }
      });
      var x = d[0].inst, R = d[1];
      return s(
        function() {
          x.value = E, x.getSnapshot = y, n(x) && R({ inst: x });
        },
        [g, E, y]
      ), c(
        function() {
          return n(x) && R({ inst: x }), g(function() {
            n(x) && R({ inst: x });
          });
        },
        [g]
      ), l(E), E;
    }
    function n(g) {
      var y = g.getSnapshot;
      g = g.value;
      try {
        var E = y();
        return !a(g, E);
      } catch {
        return !0;
      }
    }
    function i(g, y) {
      return y();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = we, a = typeof Object.is == "function" ? Object.is : e, u = o.useState, c = o.useEffect, s = o.useLayoutEffect, l = o.useDebugValue, f = !1, m = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i : r;
    nt.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), nt;
}
var zt;
function gt() {
  return zt || (zt = 1, process.env.NODE_ENV === "production" ? ke.exports = zn() : ke.exports = Yn()), ke.exports;
}
gt();
var Ve = { exports: {} }, ot = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Un() {
  if (Yt) return ot;
  Yt = 1;
  var e = we, r = gt();
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var i = typeof Object.is == "function" ? Object.is : n, o = r.useSyncExternalStore, a = e.useRef, u = e.useEffect, c = e.useMemo, s = e.useDebugValue;
  return ot.useSyncExternalStoreWithSelector = function(l, f, m, h, g) {
    var y = a(null);
    if (y.current === null) {
      var E = { hasValue: !1, value: null };
      y.current = E;
    } else E = y.current;
    y = c(
      function() {
        function x(A) {
          if (!R) {
            if (R = !0, C = A, A = h(A), g !== void 0 && E.hasValue) {
              var k = E.value;
              if (g(k, A))
                return b = k;
            }
            return b = A;
          }
          if (k = b, i(C, A)) return k;
          var H = h(A);
          return g !== void 0 && g(k, H) ? (C = A, k) : (C = A, b = H);
        }
        var R = !1, C, b, p = m === void 0 ? null : m;
        return [
          function() {
            return x(f());
          },
          p === null ? void 0 : function() {
            return x(p());
          }
        ];
      },
      [f, m, h, g]
    );
    var d = o(l, y[0], y[1]);
    return u(
      function() {
        E.hasValue = !0, E.value = d;
      },
      [d]
    ), s(d), d;
  }, ot;
}
var at = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Gn() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, f) {
      return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var r = we, n = gt(), i = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, a = r.useRef, u = r.useEffect, c = r.useMemo, s = r.useDebugValue;
    at.useSyncExternalStoreWithSelector = function(l, f, m, h, g) {
      var y = a(null);
      if (y.current === null) {
        var E = { hasValue: !1, value: null };
        y.current = E;
      } else E = y.current;
      y = c(
        function() {
          function x(A) {
            if (!R) {
              if (R = !0, C = A, A = h(A), g !== void 0 && E.hasValue) {
                var k = E.value;
                if (g(k, A))
                  return b = k;
              }
              return b = A;
            }
            if (k = b, i(C, A))
              return k;
            var H = h(A);
            return g !== void 0 && g(k, H) ? (C = A, k) : (C = A, b = H);
          }
          var R = !1, C, b, p = m === void 0 ? null : m;
          return [
            function() {
              return x(f());
            },
            p === null ? void 0 : function() {
              return x(p());
            }
          ];
        },
        [f, m, h, g]
      );
      var d = o(l, y[0], y[1]);
      return u(
        function() {
          E.hasValue = !0, E.value = d;
        },
        [d]
      ), s(d), d;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), at;
}
var Gt;
function Xn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Ve.exports = Un() : Ve.exports = Gn()), Ve.exports;
}
var Kn = Xn();
const Xt = Symbol.for("react-redux-context"), Kt = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $n() {
  var e;
  if (!O.createContext) return {};
  const r = (e = Kt[Xt]) != null ? e : Kt[Xt] = /* @__PURE__ */ new Map();
  let n = r.get(O.createContext);
  return n || (n = O.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), r.set(O.createContext, n)), n;
}
const ft = /* @__PURE__ */ $n();
function mr(e = ft) {
  return function() {
    const n = rr(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return n;
  };
}
const Zn = /* @__PURE__ */ mr(), qn = () => {
  throw new Error("uSES not initialized!");
};
let hr = qn;
const Jn = (e) => {
  hr = e;
}, Qn = (e, r) => e === r;
function eo(e = ft) {
  const r = e === ft ? Zn : mr(e);
  return function(i, o = {}) {
    const {
      equalityFn: a = Qn,
      stabilityCheck: u = void 0,
      noopCheck: c = void 0
    } = typeof o == "function" ? {
      equalityFn: o
    } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error("You must pass a selector to useSelector");
      if (typeof i != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof a != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: s,
      subscription: l,
      getServerState: f,
      stabilityCheck: m,
      noopCheck: h
    } = r(), g = Wr(!0), y = Br({
      [i.name](d) {
        const x = i(d);
        if (process.env.NODE_ENV !== "production") {
          const R = typeof u > "u" ? m : u;
          if (R === "always" || R === "once" && g.current) {
            const b = i(d);
            if (!a(x, b)) {
              let p;
              try {
                throw new Error();
              } catch (A) {
                ({
                  stack: p
                } = A);
              }
              console.warn("Selector " + (i.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: d,
                selected: x,
                selected2: b,
                stack: p
              });
            }
          }
          const C = typeof c > "u" ? h : c;
          if ((C === "always" || C === "once" && g.current) && x === d) {
            let b;
            try {
              throw new Error();
            } catch (p) {
              ({
                stack: b
              } = p);
            }
            console.warn("Selector " + (i.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: b
            });
          }
          g.current && (g.current = !1);
        }
        return x;
      }
    }[i.name], [i, m, u]), E = hr(l.addNestedSub, s.getState, f || s.getState, y, a);
    return Hr(E), E;
  };
}
const to = /* @__PURE__ */ eo();
var We = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function ro() {
  if ($t) return L;
  $t = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(p) {
    if (typeof p == "object" && p !== null) {
      var A = p.$$typeof;
      switch (A) {
        case r:
          switch (p = p.type, p) {
            case s:
            case l:
            case i:
            case a:
            case o:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case f:
                case y:
                case g:
                case u:
                  return p;
                default:
                  return A;
              }
          }
        case n:
          return A;
      }
    }
  }
  function b(p) {
    return C(p) === l;
  }
  return L.AsyncMode = s, L.ConcurrentMode = l, L.ContextConsumer = c, L.ContextProvider = u, L.Element = r, L.ForwardRef = f, L.Fragment = i, L.Lazy = y, L.Memo = g, L.Portal = n, L.Profiler = a, L.StrictMode = o, L.Suspense = m, L.isAsyncMode = function(p) {
    return b(p) || C(p) === s;
  }, L.isConcurrentMode = b, L.isContextConsumer = function(p) {
    return C(p) === c;
  }, L.isContextProvider = function(p) {
    return C(p) === u;
  }, L.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, L.isForwardRef = function(p) {
    return C(p) === f;
  }, L.isFragment = function(p) {
    return C(p) === i;
  }, L.isLazy = function(p) {
    return C(p) === y;
  }, L.isMemo = function(p) {
    return C(p) === g;
  }, L.isPortal = function(p) {
    return C(p) === n;
  }, L.isProfiler = function(p) {
    return C(p) === a;
  }, L.isStrictMode = function(p) {
    return C(p) === o;
  }, L.isSuspense = function(p) {
    return C(p) === m;
  }, L.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === i || p === l || p === a || p === o || p === m || p === h || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === g || p.$$typeof === u || p.$$typeof === c || p.$$typeof === f || p.$$typeof === d || p.$$typeof === x || p.$$typeof === R || p.$$typeof === E);
  }, L.typeOf = C, L;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function no() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function C(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === i || w === l || w === a || w === o || w === m || w === h || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === u || w.$$typeof === c || w.$$typeof === f || w.$$typeof === d || w.$$typeof === x || w.$$typeof === R || w.$$typeof === E);
    }
    function b(w) {
      if (typeof w == "object" && w !== null) {
        var le = w.$$typeof;
        switch (le) {
          case r:
            var _ = w.type;
            switch (_) {
              case s:
              case l:
              case i:
              case a:
              case o:
              case m:
                return _;
              default:
                var K = _ && _.$$typeof;
                switch (K) {
                  case c:
                  case f:
                  case y:
                  case g:
                  case u:
                    return K;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var p = s, A = l, k = c, H = u, ee = r, q = f, oe = i, de = y, Y = g, X = n, J = a, pe = o, ve = m, te = !1;
    function ae(w) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(w) || b(w) === s;
    }
    function ie(w) {
      return b(w) === l;
    }
    function me(w) {
      return b(w) === c;
    }
    function he(w) {
      return b(w) === u;
    }
    function ye(w) {
      return typeof w == "object" && w !== null && w.$$typeof === r;
    }
    function Ce(w) {
      return b(w) === f;
    }
    function xe(w) {
      return b(w) === i;
    }
    function ue(w) {
      return b(w) === y;
    }
    function se(w) {
      return b(w) === g;
    }
    function re(w) {
      return b(w) === n;
    }
    function ce(w) {
      return b(w) === a;
    }
    function ne(w) {
      return b(w) === o;
    }
    function Oe(w) {
      return b(w) === m;
    }
    I.AsyncMode = p, I.ConcurrentMode = A, I.ContextConsumer = k, I.ContextProvider = H, I.Element = ee, I.ForwardRef = q, I.Fragment = oe, I.Lazy = de, I.Memo = Y, I.Portal = X, I.Profiler = J, I.StrictMode = pe, I.Suspense = ve, I.isAsyncMode = ae, I.isConcurrentMode = ie, I.isContextConsumer = me, I.isContextProvider = he, I.isElement = ye, I.isForwardRef = Ce, I.isFragment = xe, I.isLazy = ue, I.isMemo = se, I.isPortal = re, I.isProfiler = ce, I.isStrictMode = ne, I.isSuspense = Oe, I.isValidElementType = C, I.typeOf = b;
  }()), I;
}
var qt;
function oo() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? We.exports = ro() : We.exports = no()), We.exports;
}
var it, Jt;
function ao() {
  if (Jt) return it;
  Jt = 1;
  var e = oo(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, n = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, a = {};
  a[e.ForwardRef] = i, a[e.Memo] = o;
  function u(y) {
    return e.isMemo(y) ? o : a[y.$$typeof] || r;
  }
  var c = Object.defineProperty, s = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, h = Object.prototype;
  function g(y, E, d) {
    if (typeof E != "string") {
      if (h) {
        var x = m(E);
        x && x !== h && g(y, x, d);
      }
      var R = s(E);
      l && (R = R.concat(l(E)));
      for (var C = u(y), b = u(E), p = 0; p < R.length; ++p) {
        var A = R[p];
        if (!n[A] && !(d && d[A]) && !(b && b[A]) && !(C && C[A])) {
          var k = f(E, A);
          try {
            c(y, A, k);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return it = g, it;
}
ao();
var Be = { exports: {} }, M = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function io() {
  if (Qt) return M;
  Qt = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function E(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case n:
            case o:
            case i:
            case l:
            case f:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case u:
                case s:
                case h:
                case m:
                case a:
                  return d;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  return M.ContextConsumer = u, M.ContextProvider = a, M.Element = e, M.ForwardRef = s, M.Fragment = n, M.Lazy = h, M.Memo = m, M.Portal = r, M.Profiler = o, M.StrictMode = i, M.Suspense = l, M.SuspenseList = f, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(d) {
    return E(d) === u;
  }, M.isContextProvider = function(d) {
    return E(d) === a;
  }, M.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, M.isForwardRef = function(d) {
    return E(d) === s;
  }, M.isFragment = function(d) {
    return E(d) === n;
  }, M.isLazy = function(d) {
    return E(d) === h;
  }, M.isMemo = function(d) {
    return E(d) === m;
  }, M.isPortal = function(d) {
    return E(d) === r;
  }, M.isProfiler = function(d) {
    return E(d) === o;
  }, M.isStrictMode = function(d) {
    return E(d) === i;
  }, M.isSuspense = function(d) {
    return E(d) === l;
  }, M.isSuspenseList = function(d) {
    return E(d) === f;
  }, M.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === o || d === i || d === l || d === f || d === g || typeof d == "object" && d !== null && (d.$$typeof === h || d.$$typeof === m || d.$$typeof === a || d.$$typeof === u || d.$$typeof === s || d.$$typeof === y || d.getModuleId !== void 0);
  }, M.typeOf = E, M;
}
var j = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function uo() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, E = !1, d = !1, x = !1, R = !1, C;
    C = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || R || _ === i || _ === l || _ === f || x || _ === g || y || E || d || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === m || _.$$typeof === a || _.$$typeof === u || _.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === C || _.getModuleId !== void 0));
    }
    function p(_) {
      if (typeof _ == "object" && _ !== null) {
        var K = _.$$typeof;
        switch (K) {
          case e:
            var $ = _.type;
            switch ($) {
              case n:
              case o:
              case i:
              case l:
              case f:
                return $;
              default:
                var Te = $ && $.$$typeof;
                switch (Te) {
                  case c:
                  case u:
                  case s:
                  case h:
                  case m:
                  case a:
                    return Te;
                  default:
                    return K;
                }
            }
          case r:
            return K;
        }
      }
    }
    var A = u, k = a, H = e, ee = s, q = n, oe = h, de = m, Y = r, X = o, J = i, pe = l, ve = f, te = !1, ae = !1;
    function ie(_) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(_) {
      return ae || (ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(_) {
      return p(_) === u;
    }
    function ye(_) {
      return p(_) === a;
    }
    function Ce(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function xe(_) {
      return p(_) === s;
    }
    function ue(_) {
      return p(_) === n;
    }
    function se(_) {
      return p(_) === h;
    }
    function re(_) {
      return p(_) === m;
    }
    function ce(_) {
      return p(_) === r;
    }
    function ne(_) {
      return p(_) === o;
    }
    function Oe(_) {
      return p(_) === i;
    }
    function w(_) {
      return p(_) === l;
    }
    function le(_) {
      return p(_) === f;
    }
    j.ContextConsumer = A, j.ContextProvider = k, j.Element = H, j.ForwardRef = ee, j.Fragment = q, j.Lazy = oe, j.Memo = de, j.Portal = Y, j.Profiler = X, j.StrictMode = J, j.Suspense = pe, j.SuspenseList = ve, j.isAsyncMode = ie, j.isConcurrentMode = me, j.isContextConsumer = he, j.isContextProvider = ye, j.isElement = Ce, j.isForwardRef = xe, j.isFragment = ue, j.isLazy = se, j.isMemo = re, j.isPortal = ce, j.isProfiler = ne, j.isStrictMode = Oe, j.isSuspense = w, j.isSuspenseList = le, j.isValidElementType = b, j.typeOf = p;
  }()), j;
}
var tr;
function so() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? Be.exports = io() : Be.exports = uo()), Be.exports;
}
so();
Jn(Kn.useSyncExternalStoreWithSelector);
const co = "data:image/png;base64,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", lo = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
function vo() {
  Dt(!1), Dt(!1);
  const e = to((n) => n.user.value);
  en(), e && `${e.name || ""}${e.surname || ""}`;
  const r = () => {
    const n = lo;
    window.location.href = n.VITE_REDIRECT_PORTAL;
  };
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsxs("header", { className: "bg-black text-white shadow-md rounded px-4 flex items-center", children: [
    /* @__PURE__ */ Z.jsx("div", { className: "flex items-center justify-center lg:justify-start", children: /* @__PURE__ */ Z.jsx(
      "img",
      {
        src: co,
        alt: "Go to Cube Portal",
        onClick: r,
        style: {
          width: "40px",
          height: "40px",
          cursor: "pointer"
        }
      }
    ) }),
    /* @__PURE__ */ Z.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 w-full items-center", children: [
      /* @__PURE__ */ Z.jsx("div", { className: "flex justify-start" }),
      /* @__PURE__ */ Z.jsx("div", { className: "flex justify-center p-3", children: /* @__PURE__ */ Z.jsx(Et, { className: "flex justify-center items-center", to: "/" }) }),
      /* @__PURE__ */ Z.jsx("div", { className: "flex items-center justify-center lg:justify-end" })
    ] })
  ] }) });
}
export {
  vo as Header
};

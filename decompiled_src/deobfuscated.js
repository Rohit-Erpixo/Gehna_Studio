const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/AppLayout-DgGCk1so.js", "assets/svg-zvlgkrjqpg-62RLns3c.js", "assets/confirm-dialog-BO_-wtoB.js", "assets/button-DmV_w4RG.js", "assets/spinner-CaF1Mtcm.js", "assets/useModalBehaviour-Dv5XUrCi.js", "assets/HomePage-Cqnef8qL.js", "assets/plans-CkNUBpW0.js", "assets/LoginPage-DhUqSI9X.js", "assets/collapse-B2TExWm1.js", "assets/Dashboard-BHa4pJmE.js", "assets/CreditWarningBanner-BnRWOrrP.js", "assets/PhoneBonusCard-DBAVGPxA.js", "assets/imageVariants-jbAlJ6KT.js", "assets/skeleton-D9Lgo_Sm.js", "assets/Generator-BMUnqwzy.js", "assets/OfferCountdown-DbzlpXn2.js", "assets/compare-slider-DyF2FnMU.js", "assets/watchJobs-CEULmx-S.js", "assets/Gallery-4RzBWD2z.js", "assets/Settings-BH2J0Q6V.js", "assets/RefundRequestPanel-Bi7ZqxAH.js", "assets/AccountSettings-ByFlYTx6.js", "assets/PrivacyPolicy-BJ-fYufK.js", "assets/seo-TdR6TrDv.js", "assets/AdminPage-CbHMnXUD.js", "assets/StudioPage-DJ2Y9SrO.js", "assets/Terms-r6HTZghg.js"]) => i.map(i => d[i]);
var D0 = Object.defineProperty;
var gm = t => {
  throw TypeError(t);
};
var U0 = (t, e, n) => e in t ? D0(t, e, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: n
}) : t[e] = n;
var ym = (t, e, n) => U0(t, typeof e != "symbol" ? e + "" : e, n);
var gd = (t, e, n) => e.has(t) || gm("Cannot " + n);
var C = (t, e, n) => {
  gd(t, e, "read from private field");
  if (n) {
    return n.call(t);
  } else {
    return e.get(t);
  }
};
var Oe = (t, e, n) => e.has(t) ? gm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
var ue = (t, e, n, i) => {
  gd(t, e, "write to private field");
  if (i) {
    i.call(t, n);
  } else {
    e.set(t, n);
  }
  return n;
};
var qe = (t, e, n) => {
  gd(t, e, "access private method");
  return n;
};
var Kl = (t, e, n, i) => ({
  set _(a) {
    ue(t, e, a, n);
  },
  get _() {
    return C(t, e, i);
  }
});
function M0(t, e) {
  for (var n = 0; n < e.length; n++) {
    const i = e[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i) {
        if (a !== "default" && !(a in t)) {
          const l = Object.getOwnPropertyDescriptor(i, a);
          if (l) {
            Object.defineProperty(t, a, l.get ? l : {
              enumerable: true,
              get: () => i[a]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
  }));
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) {
    return;
  }
  for (const a of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    i(a);
  }
  new MutationObserver(a => {
    for (const l of a) {
      if (l.type === "childList") {
        for (const u of l.addedNodes) {
          if (u.tagName === "LINK" && u.rel === "modulepreload") {
            i(u);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function n(a) {
    const l = {};
    if (a.integrity) {
      l.integrity = a.integrity;
    }
    if (a.referrerPolicy) {
      l.referrerPolicy = a.referrerPolicy;
    }
    if (a.crossOrigin === "use-credentials") {
      l.credentials = "include";
    } else if (a.crossOrigin === "anonymous") {
      l.credentials = "omit";
    } else {
      l.credentials = "same-origin";
    }
    return l;
  }
  function i(a) {
    if (a.ep) {
      return;
    }
    a.ep = true;
    const l = n(a);
    fetch(a.href, l);
  }
})();
function gy(t) {
  if (t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")) {
    return t.default;
  } else {
    return t;
  }
}
var yd = {
  exports: {}
};
var ia = {};
var vd = {
  exports: {}
};
var Be = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vm;
function $0() {
  if (vm) {
    return Be;
  }
  vm = 1;
  var t = Symbol.for("react.element");
  var e = Symbol.for("react.portal");
  var n = Symbol.for("react.fragment");
  var i = Symbol.for("react.strict_mode");
  var a = Symbol.for("react.profiler");
  var l = Symbol.for("react.provider");
  var u = Symbol.for("react.context");
  var d = Symbol.for("react.forward_ref");
  var f = Symbol.for("react.suspense");
  var m = Symbol.for("react.memo");
  var y = Symbol.for("react.lazy");
  var g = Symbol.iterator;
  function b(R) {
    if (R === null || typeof R != "object") {
      return null;
    } else {
      R = g && R[g] || R["@@iterator"];
      if (typeof R == "function") {
        return R;
      } else {
        return null;
      }
    }
  }
  var w = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var _ = Object.assign;
  var k = {};
  function x(R, z, X) {
    this.props = R;
    this.context = z;
    this.refs = k;
    this.updater = X || w;
  }
  x.prototype.isReactComponent = {};
  x.prototype.setState = function (R, z) {
    if (typeof R != "object" && typeof R != "function" && R != null) {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, R, z, "setState");
  };
  x.prototype.forceUpdate = function (R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function I() {}
  I.prototype = x.prototype;
  function N(R, z, X) {
    this.props = R;
    this.context = z;
    this.refs = k;
    this.updater = X || w;
  }
  var L = N.prototype = new I();
  L.constructor = N;
  _(L, x.prototype);
  L.isPureReactComponent = true;
  var B = Array.isArray;
  var J = Object.prototype.hasOwnProperty;
  var Q = {
    current: null
  };
  var j = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function H(R, z, X) {
    var ie;
    var ve = {};
    var le = null;
    var xe = null;
    if (z != null) {
      if (z.ref !== undefined) {
        xe = z.ref;
      }
      if (z.key !== undefined) {
        le = "" + z.key;
      }
      for (ie in z) {
        if (J.call(z, ie) && !j.hasOwnProperty(ie)) {
          ve[ie] = z[ie];
        }
      }
    }
    var je = arguments.length - 2;
    if (je === 1) {
      ve.children = X;
    } else if (je > 1) {
      var We = Array(je);
      for (var nt = 0; nt < je; nt++) {
        We[nt] = arguments[nt + 2];
      }
      ve.children = We;
    }
    if (R && R.defaultProps) {
      je = R.defaultProps;
      for (ie in je) {
        if (ve[ie] === undefined) {
          ve[ie] = je[ie];
        }
      }
    }
    return {
      $$typeof: t,
      type: R,
      key: le,
      ref: xe,
      props: ve,
      _owner: Q.current
    };
  }
  function Z(R, z) {
    return {
      $$typeof: t,
      type: R.type,
      key: z,
      ref: R.ref,
      props: R.props,
      _owner: R._owner
    };
  }
  function be(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function Re(R) {
    var z = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + R.replace(/[=:]/g, function (X) {
      return z[X];
    });
  }
  var Le = /\/+/g;
  function He(R, z) {
    if (typeof R == "object" && R !== null && R.key != null) {
      return Re("" + R.key);
    } else {
      return z.toString(36);
    }
  }
  function Me(R, z, X, ie, ve) {
    var le = typeof R;
    if (le === "undefined" || le === "boolean") {
      R = null;
    }
    var xe = false;
    if (R === null) {
      xe = true;
    } else {
      switch (le) {
        case "string":
        case "number":
          xe = true;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case e:
              xe = true;
          }
      }
    }
    if (xe) {
      xe = R;
      ve = ve(xe);
      R = ie === "" ? "." + He(xe, 0) : ie;
      if (B(ve)) {
        X = "";
        if (R != null) {
          X = R.replace(Le, "$&/") + "/";
        }
        Me(ve, z, X, "", function (nt) {
          return nt;
        });
      } else if (ve != null) {
        if (be(ve)) {
          ve = Z(ve, X + (!ve.key || xe && xe.key === ve.key ? "" : ("" + ve.key).replace(Le, "$&/") + "/") + R);
        }
        z.push(ve);
      }
      return 1;
    }
    xe = 0;
    ie = ie === "" ? "." : ie + ":";
    if (B(R)) {
      for (var je = 0; je < R.length; je++) {
        le = R[je];
        var We = ie + He(le, je);
        xe += Me(le, z, X, We, ve);
      }
    } else {
      We = b(R);
      if (typeof We == "function") {
        R = We.call(R);
        je = 0;
        while (!(le = R.next()).done) {
          le = le.value;
          We = ie + He(le, je++);
          xe += Me(le, z, X, We, ve);
        }
      } else if (le === "object") {
        z = String(R);
        throw Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
      }
    }
    return xe;
  }
  function Ie(R, z, X) {
    if (R == null) {
      return R;
    }
    var ie = [];
    var ve = 0;
    Me(R, ie, "", "", function (le) {
      return z.call(X, le, ve++);
    });
    return ie;
  }
  function re(R) {
    if (R._status === -1) {
      var z = R._result;
      z = z();
      z.then(function (X) {
        if (R._status === 0 || R._status === -1) {
          R._status = 1;
          R._result = X;
        }
      }, function (X) {
        if (R._status === 0 || R._status === -1) {
          R._status = 2;
          R._result = X;
        }
      });
      if (R._status === -1) {
        R._status = 0;
        R._result = z;
      }
    }
    if (R._status === 1) {
      return R._result.default;
    }
    throw R._result;
  }
  var ye = {
    current: null
  };
  var U = {
    transition: null
  };
  var se = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: U,
    ReactCurrentOwner: Q
  };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Be.Children = {
    map: Ie,
    forEach: function (R, z, X) {
      Ie(R, function () {
        z.apply(this, arguments);
      }, X);
    },
    count: function (R) {
      var z = 0;
      Ie(R, function () {
        z++;
      });
      return z;
    },
    toArray: function (R) {
      return Ie(R, function (z) {
        return z;
      }) || [];
    },
    only: function (R) {
      if (!be(R)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return R;
    }
  };
  Be.Component = x;
  Be.Fragment = n;
  Be.Profiler = a;
  Be.PureComponent = N;
  Be.StrictMode = i;
  Be.Suspense = f;
  Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se;
  Be.act = Y;
  Be.cloneElement = function (R, z, X) {
    if (R == null) {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    }
    var ie = _({}, R.props);
    var ve = R.key;
    var le = R.ref;
    var xe = R._owner;
    if (z != null) {
      if (z.ref !== undefined) {
        le = z.ref;
        xe = Q.current;
      }
      if (z.key !== undefined) {
        ve = "" + z.key;
      }
      if (R.type && R.type.defaultProps) {
        var je = R.type.defaultProps;
      }
      for (We in z) {
        if (J.call(z, We) && !j.hasOwnProperty(We)) {
          ie[We] = z[We] === undefined && je !== undefined ? je[We] : z[We];
        }
      }
    }
    var We = arguments.length - 2;
    if (We === 1) {
      ie.children = X;
    } else if (We > 1) {
      je = Array(We);
      for (var nt = 0; nt < We; nt++) {
        je[nt] = arguments[nt + 2];
      }
      ie.children = je;
    }
    return {
      $$typeof: t,
      type: R.type,
      key: ve,
      ref: le,
      props: ie,
      _owner: xe
    };
  };
  Be.createContext = function (R) {
    R = {
      $$typeof: u,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    };
    R.Provider = {
      $$typeof: l,
      _context: R
    };
    return R.Consumer = R;
  };
  Be.createElement = H;
  Be.createFactory = function (R) {
    var z = H.bind(null, R);
    z.type = R;
    return z;
  };
  Be.createRef = function () {
    return {
      current: null
    };
  };
  Be.forwardRef = function (R) {
    return {
      $$typeof: d,
      render: R
    };
  };
  Be.isValidElement = be;
  Be.lazy = function (R) {
    return {
      $$typeof: y,
      _payload: {
        _status: -1,
        _result: R
      },
      _init: re
    };
  };
  Be.memo = function (R, z) {
    return {
      $$typeof: m,
      type: R,
      compare: z === undefined ? null : z
    };
  };
  Be.startTransition = function (R) {
    var z = U.transition;
    U.transition = {};
    try {
      R();
    } finally {
      U.transition = z;
    }
  };
  Be.unstable_act = Y;
  Be.useCallback = function (R, z) {
    return ye.current.useCallback(R, z);
  };
  Be.useContext = function (R) {
    return ye.current.useContext(R);
  };
  Be.useDebugValue = function () {};
  Be.useDeferredValue = function (R) {
    return ye.current.useDeferredValue(R);
  };
  Be.useEffect = function (R, z) {
    return ye.current.useEffect(R, z);
  };
  Be.useId = function () {
    return ye.current.useId();
  };
  Be.useImperativeHandle = function (R, z, X) {
    return ye.current.useImperativeHandle(R, z, X);
  };
  Be.useInsertionEffect = function (R, z) {
    return ye.current.useInsertionEffect(R, z);
  };
  Be.useLayoutEffect = function (R, z) {
    return ye.current.useLayoutEffect(R, z);
  };
  Be.useMemo = function (R, z) {
    return ye.current.useMemo(R, z);
  };
  Be.useReducer = function (R, z, X) {
    return ye.current.useReducer(R, z, X);
  };
  Be.useRef = function (R) {
    return ye.current.useRef(R);
  };
  Be.useState = function (R) {
    return ye.current.useState(R);
  };
  Be.useSyncExternalStore = function (R, z, X) {
    return ye.current.useSyncExternalStore(R, z, X);
  };
  Be.useTransition = function () {
    return ye.current.useTransition();
  };
  Be.version = "18.3.1";
  return Be;
}
var wm;
function xh() {
  if (!wm) {
    wm = 1;
    vd.exports = $0();
  }
  return vd.exports;
} /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var bm;
function F0() {
  if (bm) {
    return ia;
  }
  bm = 1;
  var t = xh();
  var e = Symbol.for("react.element");
  var n = Symbol.for("react.fragment");
  var i = Object.prototype.hasOwnProperty;
  var a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  var l = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function u(d, f, m) {
    var y;
    var g = {};
    var b = null;
    var w = null;
    if (m !== undefined) {
      b = "" + m;
    }
    if (f.key !== undefined) {
      b = "" + f.key;
    }
    if (f.ref !== undefined) {
      w = f.ref;
    }
    for (y in f) {
      if (i.call(f, y) && !l.hasOwnProperty(y)) {
        g[y] = f[y];
      }
    }
    if (d && d.defaultProps) {
      f = d.defaultProps;
      for (y in f) {
        if (g[y] === undefined) {
          g[y] = f[y];
        }
      }
    }
    return {
      $$typeof: e,
      type: d,
      key: b,
      ref: w,
      props: g,
      _owner: a.current
    };
  }
  ia.Fragment = n;
  ia.jsx = u;
  ia.jsxs = u;
  return ia;
}
var _m;
function z0() {
  if (!_m) {
    _m = 1;
    yd.exports = F0();
  }
  return yd.exports;
}
var q = z0();
var Gl = {};
var wd = {
  exports: {}
};
var cr = {};
var bd = {
  exports: {}
};
var _d = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sm;
function B0() {
  if (!Sm) {
    Sm = 1;
    (function (t) {
      function e(U, se) {
        var Y = U.length;
        U.push(se);
        e: while (Y > 0) {
          var R = Y - 1 >>> 1;
          var z = U[R];
          if (a(z, se) > 0) {
            U[R] = se;
            U[Y] = z;
            Y = R;
          } else {
            break e;
          }
        }
      }
      function n(U) {
        if (U.length === 0) {
          return null;
        } else {
          return U[0];
        }
      }
      function i(U) {
        if (U.length === 0) {
          return null;
        }
        var se = U[0];
        var Y = U.pop();
        if (Y !== se) {
          U[0] = Y;
          e: for (var R = 0, z = U.length, X = z >>> 1; R < X;) {
            var ie = (R + 1) * 2 - 1;
            var ve = U[ie];
            var le = ie + 1;
            var xe = U[le];
            if (a(ve, Y) < 0) {
              if (le < z && a(xe, ve) < 0) {
                U[R] = xe;
                U[le] = Y;
                R = le;
              } else {
                U[R] = ve;
                U[ie] = Y;
                R = ie;
              }
            } else if (le < z && a(xe, Y) < 0) {
              U[R] = xe;
              U[le] = Y;
              R = le;
            } else {
              break e;
            }
          }
        }
        return se;
      }
      function a(U, se) {
        var Y = U.sortIndex - se.sortIndex;
        if (Y !== 0) {
          return Y;
        } else {
          return U.id - se.id;
        }
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        t.unstable_now = function () {
          return l.now();
        };
      } else {
        var u = Date;
        var d = u.now();
        t.unstable_now = function () {
          return u.now() - d;
        };
      }
      var f = [];
      var m = [];
      var y = 1;
      var g = null;
      var b = 3;
      var w = false;
      var _ = false;
      var k = false;
      var x = typeof setTimeout == "function" ? setTimeout : null;
      var I = typeof clearTimeout == "function" ? clearTimeout : null;
      var N = typeof setImmediate !== "undefined" ? setImmediate : null;
      if (typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      }
      function L(U) {
        for (var se = n(m); se !== null;) {
          if (se.callback === null) {
            i(m);
          } else if (se.startTime <= U) {
            i(m);
            se.sortIndex = se.expirationTime;
            e(f, se);
          } else {
            break;
          }
          se = n(m);
        }
      }
      function B(U) {
        k = false;
        L(U);
        if (!_) {
          if (n(f) !== null) {
            _ = true;
            re(J);
          } else {
            var se = n(m);
            if (se !== null) {
              ye(B, se.startTime - U);
            }
          }
        }
      }
      function J(U, se) {
        _ = false;
        if (k) {
          k = false;
          I(H);
          H = -1;
        }
        w = true;
        var Y = b;
        try {
          L(se);
          g = n(f);
          while (g !== null && (!(g.expirationTime > se) || U && !Re())) {
            var R = g.callback;
            if (typeof R == "function") {
              g.callback = null;
              b = g.priorityLevel;
              var z = R(g.expirationTime <= se);
              se = t.unstable_now();
              if (typeof z == "function") {
                g.callback = z;
              } else if (g === n(f)) {
                i(f);
              }
              L(se);
            } else {
              i(f);
            }
            g = n(f);
          }
          if (g !== null) {
            var X = true;
          } else {
            var ie = n(m);
            if (ie !== null) {
              ye(B, ie.startTime - se);
            }
            X = false;
          }
          return X;
        } finally {
          g = null;
          b = Y;
          w = false;
        }
      }
      var Q = false;
      var j = null;
      var H = -1;
      var Z = 5;
      var be = -1;
      function Re() {
        return !(t.unstable_now() - be < Z);
      }
      function Le() {
        if (j !== null) {
          var U = t.unstable_now();
          be = U;
          var se = true;
          try {
            se = j(true, U);
          } finally {
            if (se) {
              He();
            } else {
              Q = false;
              j = null;
            }
          }
        } else {
          Q = false;
        }
      }
      var He;
      if (typeof N == "function") {
        He = function () {
          N(Le);
        };
      } else if (typeof MessageChannel !== "undefined") {
        var Me = new MessageChannel();
        var Ie = Me.port2;
        Me.port1.onmessage = Le;
        He = function () {
          Ie.postMessage(null);
        };
      } else {
        He = function () {
          x(Le, 0);
        };
      }
      function re(U) {
        j = U;
        if (!Q) {
          Q = true;
          He();
        }
      }
      function ye(U, se) {
        H = x(function () {
          U(t.unstable_now());
        }, se);
      }
      t.unstable_IdlePriority = 5;
      t.unstable_ImmediatePriority = 1;
      t.unstable_LowPriority = 4;
      t.unstable_NormalPriority = 3;
      t.unstable_Profiling = null;
      t.unstable_UserBlockingPriority = 2;
      t.unstable_cancelCallback = function (U) {
        U.callback = null;
      };
      t.unstable_continueExecution = function () {
        if (!_ && !w) {
          _ = true;
          re(J);
        }
      };
      t.unstable_forceFrameRate = function (U) {
        if (U < 0 || U > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        } else {
          Z = U > 0 ? Math.floor(1000 / U) : 5;
        }
      };
      t.unstable_getCurrentPriorityLevel = function () {
        return b;
      };
      t.unstable_getFirstCallbackNode = function () {
        return n(f);
      };
      t.unstable_next = function (U) {
        switch (b) {
          case 1:
          case 2:
          case 3:
            var se = 3;
            break;
          default:
            se = b;
        }
        var Y = b;
        b = se;
        try {
          return U();
        } finally {
          b = Y;
        }
      };
      t.unstable_pauseExecution = function () {};
      t.unstable_requestPaint = function () {};
      t.unstable_runWithPriority = function (U, se) {
        switch (U) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            U = 3;
        }
        var Y = b;
        b = U;
        try {
          return se();
        } finally {
          b = Y;
        }
      };
      t.unstable_scheduleCallback = function (U, se, Y) {
        var R = t.unstable_now();
        if (typeof Y == "object" && Y !== null) {
          Y = Y.delay;
          Y = typeof Y == "number" && Y > 0 ? R + Y : R;
        } else {
          Y = R;
        }
        switch (U) {
          case 1:
            var z = -1;
            break;
          case 2:
            z = 250;
            break;
          case 5:
            z = 1073741823;
            break;
          case 4:
            z = 10000;
            break;
          default:
            z = 5000;
        }
        z = Y + z;
        U = {
          id: y++,
          callback: se,
          priorityLevel: U,
          startTime: Y,
          expirationTime: z,
          sortIndex: -1
        };
        if (Y > R) {
          U.sortIndex = Y;
          e(m, U);
          if (n(f) === null && U === n(m)) {
            if (k) {
              I(H);
              H = -1;
            } else {
              k = true;
            }
            ye(B, Y - R);
          }
        } else {
          U.sortIndex = z;
          e(f, U);
          if (!_ && !w) {
            _ = true;
            re(J);
          }
        }
        return U;
      };
      t.unstable_shouldYield = Re;
      t.unstable_wrapCallback = function (U) {
        var se = b;
        return function () {
          var Y = b;
          b = se;
          try {
            return U.apply(this, arguments);
          } finally {
            b = Y;
          }
        };
      };
    })(_d);
  }
  return _d;
}
var km;
function H0() {
  if (!km) {
    km = 1;
    bd.exports = B0();
  }
  return bd.exports;
} /**
  * @license React
  * react-dom.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var Em;
function W0() {
  if (Em) {
    return cr;
  }
  Em = 1;
  var t = xh();
  var e = H0();
  function n(r) {
    var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + r;
    for (var o = 1; o < arguments.length; o++) {
      s += "&args[]=" + encodeURIComponent(arguments[o]);
    }
    return "Minified React error #" + r + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = new Set();
  var a = {};
  function l(r, s) {
    u(r, s);
    u(r + "Capture", s);
  }
  function u(r, s) {
    a[r] = s;
    r = 0;
    for (; r < s.length; r++) {
      i.add(s[r]);
    }
  }
  var d = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var f = Object.prototype.hasOwnProperty;
  var m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var y = {};
  var g = {};
  function b(r) {
    if (f.call(g, r)) {
      return true;
    } else if (f.call(y, r)) {
      return false;
    } else if (m.test(r)) {
      return g[r] = true;
    } else {
      y[r] = true;
      return false;
    }
  }
  function w(r, s, o, c) {
    if (o !== null && o.type === 0) {
      return false;
    }
    switch (typeof s) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (c) {
          return false;
        } else if (o !== null) {
          return !o.acceptsBooleans;
        } else {
          r = r.toLowerCase().slice(0, 5);
          return r !== "data-" && r !== "aria-";
        }
      default:
        return false;
    }
  }
  function _(r, s, o, c) {
    if (s === null || typeof s === "undefined" || w(r, s, o, c)) {
      return true;
    }
    if (c) {
      return false;
    }
    if (o !== null) {
      switch (o.type) {
        case 3:
          return !s;
        case 4:
          return s === false;
        case 5:
          return isNaN(s);
        case 6:
          return isNaN(s) || s < 1;
      }
    }
    return false;
  }
  function k(r, s, o, c, h, p, v) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4;
    this.attributeName = c;
    this.attributeNamespace = h;
    this.mustUseProperty = o;
    this.propertyName = r;
    this.type = s;
    this.sanitizeURL = p;
    this.removeEmptyString = v;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (r) {
    x[r] = new k(r, 0, false, r, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (r) {
    var s = r[0];
    x[s] = new k(s, 1, false, r[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (r) {
    x[r] = new k(r, 2, false, r.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (r) {
    x[r] = new k(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (r) {
    x[r] = new k(r, 3, false, r.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (r) {
    x[r] = new k(r, 3, true, r, null, false, false);
  });
  ["capture", "download"].forEach(function (r) {
    x[r] = new k(r, 4, false, r, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (r) {
    x[r] = new k(r, 6, false, r, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (r) {
    x[r] = new k(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var I = /[\-:]([a-z])/g;
  function N(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (r) {
    var s = r.replace(I, N);
    x[s] = new k(s, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (r) {
    var s = r.replace(I, N);
    x[s] = new k(s, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
    var s = r.replace(I, N);
    x[s] = new k(s, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function (r) {
    x[r] = new k(r, 1, false, r.toLowerCase(), null, false, false);
  });
  x.xlinkHref = new k("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function (r) {
    x[r] = new k(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function L(r, s, o, c) {
    var h = x.hasOwnProperty(s) ? x[s] : null;
    if (h !== null ? h.type !== 0 : c || !(s.length > 2) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") {
      if (_(s, o, h, c)) {
        o = null;
      }
      if (c || h === null) {
        if (b(s)) {
          if (o === null) {
            r.removeAttribute(s);
          } else {
            r.setAttribute(s, "" + o);
          }
        }
      } else if (h.mustUseProperty) {
        r[h.propertyName] = o === null ? h.type === 3 ? false : "" : o;
      } else {
        s = h.attributeName;
        c = h.attributeNamespace;
        if (o === null) {
          r.removeAttribute(s);
        } else {
          h = h.type;
          o = h === 3 || h === 4 && o === true ? "" : "" + o;
          if (c) {
            r.setAttributeNS(c, s, o);
          } else {
            r.setAttribute(s, o);
          }
        }
      }
    }
  }
  var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var J = Symbol.for("react.element");
  var Q = Symbol.for("react.portal");
  var j = Symbol.for("react.fragment");
  var H = Symbol.for("react.strict_mode");
  var Z = Symbol.for("react.profiler");
  var be = Symbol.for("react.provider");
  var Re = Symbol.for("react.context");
  var Le = Symbol.for("react.forward_ref");
  var He = Symbol.for("react.suspense");
  var Me = Symbol.for("react.suspense_list");
  var Ie = Symbol.for("react.memo");
  var re = Symbol.for("react.lazy");
  var ye = Symbol.for("react.offscreen");
  var U = Symbol.iterator;
  function se(r) {
    if (r === null || typeof r != "object") {
      return null;
    } else {
      r = U && r[U] || r["@@iterator"];
      if (typeof r == "function") {
        return r;
      } else {
        return null;
      }
    }
  }
  var Y = Object.assign;
  var R;
  function z(r) {
    if (R === undefined) {
      try {
        throw Error();
      } catch (o) {
        var s = o.stack.trim().match(/\n( *(at )?)/);
        R = s && s[1] || "";
      }
    }
    return `
${R}${r}`;
  }
  var X = false;
  function ie(r, s) {
    if (!r || X) {
      return "";
    }
    X = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      if (s) {
        s = function () {
          throw Error();
        };
        Object.defineProperty(s.prototype, "props", {
          set: function () {
            throw Error();
          }
        });
        if (typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(s, []);
          } catch (F) {
            var c = F;
          }
          Reflect.construct(r, [], s);
        } else {
          try {
            s.call();
          } catch (F) {
            c = F;
          }
          r.call(s.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (F) {
          c = F;
        }
        r();
      }
    } catch (F) {
      if (F && c && typeof F.stack == "string") {
        for (var h = F.stack.split(`
`), p = c.stack.split(`
`), v = h.length - 1, S = p.length - 1; v >= 1 && S >= 0 && h[v] !== p[S];) {
          S--;
        }
        for (; v >= 1 && S >= 0; v--, S--) {
          if (h[v] !== p[S]) {
            if (v !== 1 || S !== 1) {
              do {
                v--;
                S--;
                if (S < 0 || h[v] !== p[S]) {
                  var T = `
${h[v].replace(" at new ", " at ")}`;
                  if (r.displayName && T.includes("<anonymous>")) {
                    T = T.replace("<anonymous>", r.displayName);
                  }
                  return T;
                }
              } while (v >= 1 && S >= 0);
            }
            break;
          }
        }
      }
    } finally {
      X = false;
      Error.prepareStackTrace = o;
    }
    if (r = r ? r.displayName || r.name : "") {
      return z(r);
    } else {
      return "";
    }
  }
  function ve(r) {
    switch (r.tag) {
      case 5:
        return z(r.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        r = ie(r.type, false);
        return r;
      case 11:
        r = ie(r.type.render, false);
        return r;
      case 1:
        r = ie(r.type, true);
        return r;
      default:
        return "";
    }
  }
  function le(r) {
    if (r == null) {
      return null;
    }
    if (typeof r == "function") {
      return r.displayName || r.name || null;
    }
    if (typeof r == "string") {
      return r;
    }
    switch (r) {
      case j:
        return "Fragment";
      case Q:
        return "Portal";
      case Z:
        return "Profiler";
      case H:
        return "StrictMode";
      case He:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof r == "object") {
      switch (r.$$typeof) {
        case Re:
          return (r.displayName || "Context") + ".Consumer";
        case be:
          return (r._context.displayName || "Context") + ".Provider";
        case Le:
          var s = r.render;
          r = r.displayName;
          if (!r) {
            r = s.displayName || s.name || "";
            r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
          }
          return r;
        case Ie:
          s = r.displayName || null;
          if (s !== null) {
            return s;
          } else {
            return le(r.type) || "Memo";
          }
        case re:
          s = r._payload;
          r = r._init;
          try {
            return le(r(s));
          } catch {}
      }
    }
    return null;
  }
  function xe(r) {
    var s = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (s.displayName || "Context") + ".Consumer";
      case 10:
        return (s._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        r = s.render;
        r = r.displayName || r.name || "";
        return s.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return s;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(s);
      case 8:
        if (s === H) {
          return "StrictMode";
        } else {
          return "Mode";
        }
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof s == "function") {
          return s.displayName || s.name || null;
        }
        if (typeof s == "string") {
          return s;
        }
    }
    return null;
  }
  function je(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function We(r) {
    var s = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (s === "checkbox" || s === "radio");
  }
  function nt(r) {
    var s = We(r) ? "checked" : "value";
    var o = Object.getOwnPropertyDescriptor(r.constructor.prototype, s);
    var c = "" + r[s];
    if (!r.hasOwnProperty(s) && typeof o !== "undefined" && typeof o.get == "function" && typeof o.set == "function") {
      var h = o.get;
      var p = o.set;
      Object.defineProperty(r, s, {
        configurable: true,
        get: function () {
          return h.call(this);
        },
        set: function (v) {
          c = "" + v;
          p.call(this, v);
        }
      });
      Object.defineProperty(r, s, {
        enumerable: o.enumerable
      });
      return {
        getValue: function () {
          return c;
        },
        setValue: function (v) {
          c = "" + v;
        },
        stopTracking: function () {
          r._valueTracker = null;
          delete r[s];
        }
      };
    }
  }
  function Ar(r) {
    r._valueTracker ||= nt(r);
  }
  function rt(r) {
    if (!r) {
      return false;
    }
    var s = r._valueTracker;
    if (!s) {
      return true;
    }
    var o = s.getValue();
    var c = "";
    if (r) {
      c = We(r) ? r.checked ? "true" : "false" : r.value;
    }
    r = c;
    if (r !== o) {
      s.setValue(r);
      return true;
    } else {
      return false;
    }
  }
  function gr(r) {
    r = r || (typeof document !== "undefined" ? document : undefined);
    if (typeof r === "undefined") {
      return null;
    }
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function an(r, s) {
    var o = s.checked;
    return Y({}, s, {
      defaultChecked: undefined,
      defaultValue: undefined,
      value: undefined,
      checked: o ?? r._wrapperState.initialChecked
    });
  }
  function Ei(r, s) {
    var o = s.defaultValue == null ? "" : s.defaultValue;
    var c = s.checked ?? s.defaultChecked;
    o = je(s.value ?? o);
    r._wrapperState = {
      initialChecked: c,
      initialValue: o,
      controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
    };
  }
  function yr(r, s) {
    s = s.checked;
    if (s != null) {
      L(r, "checked", s, false);
    }
  }
  function Kr(r, s) {
    yr(r, s);
    var o = je(s.value);
    var c = s.type;
    if (o != null) {
      if (c === "number") {
        if (o === 0 && r.value === "" || r.value != o) {
          r.value = "" + o;
        }
      } else if (r.value !== "" + o) {
        r.value = "" + o;
      }
    } else if (c === "submit" || c === "reset") {
      r.removeAttribute("value");
      return;
    }
    if (s.hasOwnProperty("value")) {
      Ht(r, s.type, o);
    } else if (s.hasOwnProperty("defaultValue")) {
      Ht(r, s.type, je(s.defaultValue));
    }
    if (s.checked == null && s.defaultChecked != null) {
      r.defaultChecked = !!s.defaultChecked;
    }
  }
  function Fs(r, s, o) {
    if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
      var c = s.type;
      if ((c === "submit" || c === "reset") && (s.value === undefined || s.value === null)) {
        return;
      }
      s = "" + r._wrapperState.initialValue;
      if (!o && s !== r.value) {
        r.value = s;
      }
      r.defaultValue = s;
    }
    o = r.name;
    if (o !== "") {
      r.name = "";
    }
    r.defaultChecked = !!r._wrapperState.initialChecked;
    if (o !== "") {
      r.name = o;
    }
  }
  function Ht(r, s, o) {
    if (s !== "number" || gr(r.ownerDocument) !== r) {
      if (o == null) {
        r.defaultValue = "" + r._wrapperState.initialValue;
      } else if (r.defaultValue !== "" + o) {
        r.defaultValue = "" + o;
      }
    }
  }
  var On = Array.isArray;
  function ln(r, s, o, c) {
    r = r.options;
    if (s) {
      s = {};
      for (var h = 0; h < o.length; h++) {
        s["$" + o[h]] = true;
      }
      for (o = 0; o < r.length; o++) {
        h = s.hasOwnProperty("$" + r[o].value);
        if (r[o].selected !== h) {
          r[o].selected = h;
        }
        if (h && c) {
          r[o].defaultSelected = true;
        }
      }
    } else {
      o = "" + je(o);
      s = null;
      h = 0;
      for (; h < r.length; h++) {
        if (r[h].value === o) {
          r[h].selected = true;
          if (c) {
            r[h].defaultSelected = true;
          }
          return;
        }
        if (s === null && !r[h].disabled) {
          s = r[h];
        }
      }
      if (s !== null) {
        s.selected = true;
      }
    }
  }
  function Rt(r, s) {
    if (s.dangerouslySetInnerHTML != null) {
      throw Error(n(91));
    }
    return Y({}, s, {
      value: undefined,
      defaultValue: undefined,
      children: "" + r._wrapperState.initialValue
    });
  }
  function Gr(r, s) {
    var o = s.value;
    if (o == null) {
      o = s.children;
      s = s.defaultValue;
      if (o != null) {
        if (s != null) {
          throw Error(n(92));
        }
        if (On(o)) {
          if (o.length > 1) {
            throw Error(n(93));
          }
          o = o[0];
        }
        s = o;
      }
      if (s == null) {
        s = "";
      }
      o = s;
    }
    r._wrapperState = {
      initialValue: je(o)
    };
  }
  function Ir(r, s) {
    var o = je(s.value);
    var c = je(s.defaultValue);
    if (o != null) {
      o = "" + o;
      if (o !== r.value) {
        r.value = o;
      }
      if (s.defaultValue == null && r.defaultValue !== o) {
        r.defaultValue = o;
      }
    }
    if (c != null) {
      r.defaultValue = "" + c;
    }
  }
  function un(r) {
    var s = r.textContent;
    if (s === r._wrapperState.initialValue && s !== "" && s !== null) {
      r.value = s;
    }
  }
  function cn(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function An(r, s) {
    if (r == null || r === "http://www.w3.org/1999/xhtml") {
      return cn(s);
    } else if (r === "http://www.w3.org/2000/svg" && s === "foreignObject") {
      return "http://www.w3.org/1999/xhtml";
    } else {
      return r;
    }
  }
  var Ut;
  var Wt = function (r) {
    if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) {
      return function (s, o, c, h) {
        MSApp.execUnsafeLocalFunction(function () {
          return r(s, o, c, h);
        });
      };
    } else {
      return r;
    }
  }(function (r, s) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) {
      r.innerHTML = s;
    } else {
      Ut = Ut || document.createElement("div");
      Ut.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>";
      s = Ut.firstChild;
      while (r.firstChild) {
        r.removeChild(r.firstChild);
      }
      while (s.firstChild) {
        r.appendChild(s.firstChild);
      }
    }
  });
  function Yt(r, s) {
    if (s) {
      var o = r.firstChild;
      if (o && o === r.lastChild && o.nodeType === 3) {
        o.nodeValue = s;
        return;
      }
    }
    r.textContent = s;
  }
  var dn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var jr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(dn).forEach(function (r) {
    jr.forEach(function (s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1);
      dn[s] = dn[r];
    });
  });
  function xi(r, s, o) {
    if (s == null || typeof s == "boolean" || s === "") {
      return "";
    } else if (o || typeof s != "number" || s === 0 || dn.hasOwnProperty(r) && dn[r]) {
      return ("" + s).trim();
    } else {
      return s + "px";
    }
  }
  function nr(r, s) {
    r = r.style;
    for (var o in s) {
      if (s.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0;
        var h = xi(o, s[o], c);
        if (o === "float") {
          o = "cssFloat";
        }
        if (c) {
          r.setProperty(o, h);
        } else {
          r[o] = h;
        }
      }
    }
  }
  var zs = Y({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function In(r, s) {
    if (s) {
      if (zs[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) {
        throw Error(n(137, r));
      }
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) {
          throw Error(n(60));
        }
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) {
          throw Error(n(61));
        }
      }
      if (s.style != null && typeof s.style != "object") {
        throw Error(n(62));
      }
    }
  }
  function es(r, s) {
    if (r.indexOf("-") === -1) {
      return typeof s.is == "string";
    }
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var jn = null;
  function Xt(r) {
    r = r.target || r.srcElement || window;
    if (r.correspondingUseElement) {
      r = r.correspondingUseElement;
    }
    if (r.nodeType === 3) {
      return r.parentNode;
    } else {
      return r;
    }
  }
  var hn = null;
  var Jr = null;
  var vr = null;
  function Bs(r) {
    if (r = Wo(r)) {
      if (typeof hn != "function") {
        throw Error(n(280));
      }
      var s = r.stateNode;
      if (s) {
        s = ll(s);
        hn(r.stateNode, r.type, s);
      }
    }
  }
  function De(r) {
    if (Jr) {
      if (vr) {
        vr.push(r);
      } else {
        vr = [r];
      }
    } else {
      Jr = r;
    }
  }
  function ct() {
    if (Jr) {
      var r = Jr;
      var s = vr;
      vr = Jr = null;
      Bs(r);
      if (s) {
        for (r = 0; r < s.length; r++) {
          Bs(s[r]);
        }
      }
    }
  }
  function pt(r, s) {
    return r(s);
  }
  function wt() {}
  var wr = false;
  function dt(r, s, o) {
    if (wr) {
      return r(s, o);
    }
    wr = true;
    try {
      return pt(r, s, o);
    } finally {
      wr = false;
      if (Jr !== null || vr !== null) {
        wt();
        ct();
      }
    }
  }
  function St(r, s) {
    var o = r.stateNode;
    if (o === null) {
      return null;
    }
    var c = ll(o);
    if (c === null) {
      return null;
    }
    o = c[s];
    e: switch (s) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        if (!(c = !c.disabled)) {
          r = r.type;
          c = r !== "button" && r !== "input" && r !== "select" && r !== "textarea";
        }
        r = !c;
        break e;
      default:
        r = false;
    }
    if (r) {
      return null;
    }
    if (o && typeof o != "function") {
      throw Error(n(231, s, typeof o));
    }
    return o;
  }
  var fn = false;
  if (d) {
    try {
      var E = {};
      Object.defineProperty(E, "passive", {
        get: function () {
          fn = true;
        }
      });
      window.addEventListener("test", E, E);
      window.removeEventListener("test", E, E);
    } catch {
      fn = false;
    }
  }
  function P(r, s, o, c, h, p, v, S, T) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(o, F);
    } catch (K) {
      this.onError(K);
    }
  }
  var $ = false;
  var W = null;
  var te = false;
  var Se = null;
  var Te = {
    onError: function (r) {
      $ = true;
      W = r;
    }
  };
  function ce(r, s, o, c, h, p, v, S, T) {
    $ = false;
    W = null;
    P.apply(Te, arguments);
  }
  function he(r, s, o, c, h, p, v, S, T) {
    ce.apply(this, arguments);
    if ($) {
      if ($) {
        var F = W;
        $ = false;
        W = null;
      } else {
        throw Error(n(198));
      }
      if (!te) {
        te = true;
        Se = F;
      }
    }
  }
  function we(r) {
    var s = r;
    var o = r;
    if (r.alternate) {
      while (s.return) {
        s = s.return;
      }
    } else {
      r = s;
      do {
        s = r;
        if ((s.flags & 4098) !== 0) {
          o = s.return;
        }
        r = s.return;
      } while (r);
    }
    if (s.tag === 3) {
      return o;
    } else {
      return null;
    }
  }
  function Ue(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (s === null) {
        r = r.alternate;
        if (r !== null) {
          s = r.memoizedState;
        }
      }
      if (s !== null) {
        return s.dehydrated;
      }
    }
    return null;
  }
  function Ee(r) {
    if (we(r) !== r) {
      throw Error(n(188));
    }
  }
  function $e(r) {
    var s = r.alternate;
    if (!s) {
      s = we(r);
      if (s === null) {
        throw Error(n(188));
      }
      if (s !== r) {
        return null;
      } else {
        return r;
      }
    }
    var o = r;
    var c = s;
    while (true) {
      var h = o.return;
      if (h === null) {
        break;
      }
      var p = h.alternate;
      if (p === null) {
        c = h.return;
        if (c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (h.child === p.child) {
        for (p = h.child; p;) {
          if (p === o) {
            Ee(h);
            return r;
          }
          if (p === c) {
            Ee(h);
            return s;
          }
          p = p.sibling;
        }
        throw Error(n(188));
      }
      if (o.return !== c.return) {
        o = h;
        c = p;
      } else {
        var v = false;
        for (var S = h.child; S;) {
          if (S === o) {
            v = true;
            o = h;
            c = p;
            break;
          }
          if (S === c) {
            v = true;
            c = h;
            o = p;
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = p.child; S;) {
            if (S === o) {
              v = true;
              o = p;
              c = h;
              break;
            }
            if (S === c) {
              v = true;
              c = p;
              o = h;
              break;
            }
            S = S.sibling;
          }
          if (!v) {
            throw Error(n(189));
          }
        }
      }
      if (o.alternate !== c) {
        throw Error(n(190));
      }
    }
    if (o.tag !== 3) {
      throw Error(n(188));
    }
    if (o.stateNode.current === o) {
      return r;
    } else {
      return s;
    }
  }
  function Ve(r) {
    r = $e(r);
    if (r !== null) {
      return kt(r);
    } else {
      return null;
    }
  }
  function kt(r) {
    if (r.tag === 5 || r.tag === 6) {
      return r;
    }
    for (r = r.child; r !== null;) {
      var s = kt(r);
      if (s !== null) {
        return s;
      }
      r = r.sibling;
    }
    return null;
  }
  var bt = e.unstable_scheduleCallback;
  var At = e.unstable_cancelCallback;
  var Ye = e.unstable_shouldYield;
  var sr = e.unstable_requestPaint;
  var Ze = e.unstable_now;
  var Hs = e.unstable_getCurrentPriorityLevel;
  var Nr = e.unstable_ImmediatePriority;
  var br = e.unstable_UserBlockingPriority;
  var ts = e.unstable_NormalPriority;
  var Ws = e.unstable_LowPriority;
  var pn = e.unstable_IdlePriority;
  var Nn = null;
  var Zt = null;
  function Ke(r) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function") {
      try {
        Zt.onCommitFiberRoot(Nn, r, undefined, (r.current.flags & 128) === 128);
      } catch {}
    }
  }
  var tt = Math.clz32 ? Math.clz32 : lt;
  var rs = Math.log;
  var Ln = Math.LN2;
  function lt(r) {
    r >>>= 0;
    if (r === 0) {
      return 32;
    } else {
      return 31 - (rs(r) / Ln | 0) | 0;
    }
  }
  var Dn = 64;
  var Vs = 4194304;
  function qs(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function qa(r, s) {
    var o = r.pendingLanes;
    if (o === 0) {
      return 0;
    }
    var c = 0;
    var h = r.suspendedLanes;
    var p = r.pingedLanes;
    var v = o & 268435455;
    if (v !== 0) {
      var S = v & ~h;
      if (S !== 0) {
        c = qs(S);
      } else {
        p &= v;
        if (p !== 0) {
          c = qs(p);
        }
      }
    } else {
      v = o & ~h;
      if (v !== 0) {
        c = qs(v);
      } else if (p !== 0) {
        c = qs(p);
      }
    }
    if (c === 0) {
      return 0;
    }
    if (s !== 0 && s !== c && (s & h) === 0 && (h = c & -c, p = s & -s, h >= p || h === 16 && (p & 4194240) !== 0)) {
      return s;
    }
    if ((c & 4) !== 0) {
      c |= o & 16;
    }
    s = r.entangledLanes;
    if (s !== 0) {
      r = r.entanglements;
      s &= c;
      while (s > 0) {
        o = 31 - tt(s);
        h = 1 << o;
        c |= r[o];
        s &= ~h;
      }
    }
    return c;
  }
  function tw(r, s) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return s + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return s + 5000;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rw(r, s) {
    var o = r.suspendedLanes;
    var c = r.pingedLanes;
    var h = r.expirationTimes;
    for (var p = r.pendingLanes; p > 0;) {
      var v = 31 - tt(p);
      var S = 1 << v;
      var T = h[v];
      if (T === -1) {
        if ((S & o) === 0 || (S & c) !== 0) {
          h[v] = tw(S, s);
        }
      } else if (T <= s) {
        r.expiredLanes |= S;
      }
      p &= ~S;
    }
  }
  function Uu(r) {
    r = r.pendingLanes & -1073741825;
    if (r !== 0) {
      return r;
    } else if (r & 1073741824) {
      return 1073741824;
    } else {
      return 0;
    }
  }
  function qh() {
    var r = Dn;
    Dn <<= 1;
    if ((Dn & 4194240) === 0) {
      Dn = 64;
    }
    return r;
  }
  function Mu(r) {
    var s = [];
    for (var o = 0; o < 31; o++) {
      s.push(r);
    }
    return s;
  }
  function To(r, s, o) {
    r.pendingLanes |= s;
    if (s !== 536870912) {
      r.suspendedLanes = 0;
      r.pingedLanes = 0;
    }
    r = r.eventTimes;
    s = 31 - tt(s);
    r[s] = o;
  }
  function nw(r, s) {
    var o = r.pendingLanes & ~s;
    r.pendingLanes = s;
    r.suspendedLanes = 0;
    r.pingedLanes = 0;
    r.expiredLanes &= s;
    r.mutableReadLanes &= s;
    r.entangledLanes &= s;
    s = r.entanglements;
    var c = r.eventTimes;
    for (r = r.expirationTimes; o > 0;) {
      var h = 31 - tt(o);
      var p = 1 << h;
      s[h] = 0;
      c[h] = -1;
      r[h] = -1;
      o &= ~p;
    }
  }
  function $u(r, s) {
    var o = r.entangledLanes |= s;
    for (r = r.entanglements; o;) {
      var c = 31 - tt(o);
      var h = 1 << c;
      if (h & s | r[c] & s) {
        r[c] |= s;
      }
      o &= ~h;
    }
  }
  var et = 0;
  function Kh(r) {
    r &= -r;
    if (r > 1) {
      if (r > 4) {
        if ((r & 268435455) !== 0) {
          return 16;
        } else {
          return 536870912;
        }
      } else {
        return 4;
      }
    } else {
      return 1;
    }
  }
  var Gh;
  var Fu;
  var Jh;
  var Qh;
  var Yh;
  var zu = false;
  var Ka = [];
  var ns = null;
  var ss = null;
  var is = null;
  var Co = new Map();
  var Po = new Map();
  var os = [];
  var sw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xh(r, s) {
    switch (r) {
      case "focusin":
      case "focusout":
        ns = null;
        break;
      case "dragenter":
      case "dragleave":
        ss = null;
        break;
      case "mouseover":
      case "mouseout":
        is = null;
        break;
      case "pointerover":
      case "pointerout":
        Co.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Po.delete(s.pointerId);
    }
  }
  function Oo(r, s, o, c, h, p) {
    if (r === null || r.nativeEvent !== p) {
      r = {
        blockedOn: s,
        domEventName: o,
        eventSystemFlags: c,
        nativeEvent: p,
        targetContainers: [h]
      };
      if (s !== null) {
        s = Wo(s);
        if (s !== null) {
          Fu(s);
        }
      }
      return r;
    } else {
      r.eventSystemFlags |= c;
      s = r.targetContainers;
      if (h !== null && s.indexOf(h) === -1) {
        s.push(h);
      }
      return r;
    }
  }
  function iw(r, s, o, c, h) {
    switch (s) {
      case "focusin":
        ns = Oo(ns, r, s, o, c, h);
        return true;
      case "dragenter":
        ss = Oo(ss, r, s, o, c, h);
        return true;
      case "mouseover":
        is = Oo(is, r, s, o, c, h);
        return true;
      case "pointerover":
        var p = h.pointerId;
        Co.set(p, Oo(Co.get(p) || null, r, s, o, c, h));
        return true;
      case "gotpointercapture":
        p = h.pointerId;
        Po.set(p, Oo(Po.get(p) || null, r, s, o, c, h));
        return true;
    }
    return false;
  }
  function Zh(r) {
    var s = Ks(r.target);
    if (s !== null) {
      var o = we(s);
      if (o !== null) {
        s = o.tag;
        if (s === 13) {
          s = Ue(o);
          if (s !== null) {
            r.blockedOn = s;
            Yh(r.priority, function () {
              Jh(o);
            });
            return;
          }
        } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function Ga(r) {
    if (r.blockedOn !== null) {
      return false;
    }
    for (var s = r.targetContainers; s.length > 0;) {
      var o = Hu(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (o === null) {
        o = r.nativeEvent;
        var c = new o.constructor(o.type, o);
        jn = c;
        o.target.dispatchEvent(c);
        jn = null;
      } else {
        s = Wo(o);
        if (s !== null) {
          Fu(s);
        }
        r.blockedOn = o;
        return false;
      }
      s.shift();
    }
    return true;
  }
  function ef(r, s, o) {
    if (Ga(r)) {
      o.delete(s);
    }
  }
  function ow() {
    zu = false;
    if (ns !== null && Ga(ns)) {
      ns = null;
    }
    if (ss !== null && Ga(ss)) {
      ss = null;
    }
    if (is !== null && Ga(is)) {
      is = null;
    }
    Co.forEach(ef);
    Po.forEach(ef);
  }
  function Ao(r, s) {
    if (r.blockedOn === s) {
      r.blockedOn = null;
      if (!zu) {
        zu = true;
        e.unstable_scheduleCallback(e.unstable_NormalPriority, ow);
      }
    }
  }
  function Io(r) {
    function s(h) {
      return Ao(h, r);
    }
    if (Ka.length > 0) {
      Ao(Ka[0], r);
      for (var o = 1; o < Ka.length; o++) {
        var c = Ka[o];
        if (c.blockedOn === r) {
          c.blockedOn = null;
        }
      }
    }
    if (ns !== null) {
      Ao(ns, r);
    }
    if (ss !== null) {
      Ao(ss, r);
    }
    if (is !== null) {
      Ao(is, r);
    }
    Co.forEach(s);
    Po.forEach(s);
    o = 0;
    for (; o < os.length; o++) {
      c = os[o];
      if (c.blockedOn === r) {
        c.blockedOn = null;
      }
    }
    while (os.length > 0 && (o = os[0], o.blockedOn === null)) {
      Zh(o);
      if (o.blockedOn === null) {
        os.shift();
      }
    }
  }
  var Ri = B.ReactCurrentBatchConfig;
  var Ja = true;
  function aw(r, s, o, c) {
    var h = et;
    var p = Ri.transition;
    Ri.transition = null;
    try {
      et = 1;
      Bu(r, s, o, c);
    } finally {
      et = h;
      Ri.transition = p;
    }
  }
  function lw(r, s, o, c) {
    var h = et;
    var p = Ri.transition;
    Ri.transition = null;
    try {
      et = 4;
      Bu(r, s, o, c);
    } finally {
      et = h;
      Ri.transition = p;
    }
  }
  function Bu(r, s, o, c) {
    if (Ja) {
      var h = Hu(r, s, o, c);
      if (h === null) {
        oc(r, s, c, Qa, o);
        Xh(r, c);
      } else if (iw(h, r, s, o, c)) {
        c.stopPropagation();
      } else {
        Xh(r, c);
        if (s & 4 && sw.indexOf(r) > -1) {
          while (h !== null) {
            var p = Wo(h);
            if (p !== null) {
              Gh(p);
            }
            p = Hu(r, s, o, c);
            if (p === null) {
              oc(r, s, c, Qa, o);
            }
            if (p === h) {
              break;
            }
            h = p;
          }
          if (h !== null) {
            c.stopPropagation();
          }
        } else {
          oc(r, s, c, null, o);
        }
      }
    }
  }
  var Qa = null;
  function Hu(r, s, o, c) {
    Qa = null;
    r = Xt(c);
    r = Ks(r);
    if (r !== null) {
      s = we(r);
      if (s === null) {
        r = null;
      } else {
        o = s.tag;
        if (o === 13) {
          r = Ue(s);
          if (r !== null) {
            return r;
          }
          r = null;
        } else if (o === 3) {
          if (s.stateNode.current.memoizedState.isDehydrated) {
            if (s.tag === 3) {
              return s.stateNode.containerInfo;
            } else {
              return null;
            }
          }
          r = null;
        } else if (s !== r) {
          r = null;
        }
      }
    }
    Qa = r;
    return null;
  }
  function tf(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Hs()) {
          case Nr:
            return 1;
          case br:
            return 4;
          case ts:
          case Ws:
            return 16;
          case pn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var as = null;
  var Wu = null;
  var Ya = null;
  function rf() {
    if (Ya) {
      return Ya;
    }
    var r;
    var s = Wu;
    var o = s.length;
    var c;
    var h = "value" in as ? as.value : as.textContent;
    var p = h.length;
    for (r = 0; r < o && s[r] === h[r]; r++);
    var v = o - r;
    for (c = 1; c <= v && s[o - c] === h[p - c]; c++);
    return Ya = h.slice(r, c > 1 ? 1 - c : undefined);
  }
  function Xa(r) {
    var s = r.keyCode;
    if ("charCode" in r) {
      r = r.charCode;
      if (r === 0 && s === 13) {
        r = 13;
      }
    } else {
      r = s;
    }
    if (r === 10) {
      r = 13;
    }
    if (r >= 32 || r === 13) {
      return r;
    } else {
      return 0;
    }
  }
  function Za() {
    return true;
  }
  function nf() {
    return false;
  }
  function _r(r) {
    function s(o, c, h, p, v) {
      this._reactName = o;
      this._targetInst = h;
      this.type = c;
      this.nativeEvent = p;
      this.target = v;
      this.currentTarget = null;
      for (var S in r) {
        if (r.hasOwnProperty(S)) {
          o = r[S];
          this[S] = o ? o(p) : p[S];
        }
      }
      this.isDefaultPrevented = p.defaultPrevented ?? p.returnValue === false ? Za : nf;
      this.isPropagationStopped = nf;
      return this;
    }
    Y(s.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var o = this.nativeEvent;
        if (o) {
          if (o.preventDefault) {
            o.preventDefault();
          } else if (typeof o.returnValue != "unknown") {
            o.returnValue = false;
          }
          this.isDefaultPrevented = Za;
        }
      },
      stopPropagation: function () {
        var o = this.nativeEvent;
        if (o) {
          if (o.stopPropagation) {
            o.stopPropagation();
          } else if (typeof o.cancelBubble != "unknown") {
            o.cancelBubble = true;
          }
          this.isPropagationStopped = Za;
        }
      },
      persist: function () {},
      isPersistent: Za
    });
    return s;
  }
  var Ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Vu = _r(Ti);
  var jo = Y({}, Ti, {
    view: 0,
    detail: 0
  });
  var uw = _r(jo);
  var qu;
  var Ku;
  var No;
  var el = Y({}, jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function (r) {
      if (r.relatedTarget === undefined) {
        if (r.fromElement === r.srcElement) {
          return r.toElement;
        } else {
          return r.fromElement;
        }
      } else {
        return r.relatedTarget;
      }
    },
    movementX: function (r) {
      if ("movementX" in r) {
        return r.movementX;
      } else {
        if (r !== No) {
          if (No && r.type === "mousemove") {
            qu = r.screenX - No.screenX;
            Ku = r.screenY - No.screenY;
          } else {
            Ku = qu = 0;
          }
          No = r;
        }
        return qu;
      }
    },
    movementY: function (r) {
      if ("movementY" in r) {
        return r.movementY;
      } else {
        return Ku;
      }
    }
  });
  var sf = _r(el);
  var cw = Y({}, el, {
    dataTransfer: 0
  });
  var dw = _r(cw);
  var hw = Y({}, jo, {
    relatedTarget: 0
  });
  var Gu = _r(hw);
  var fw = Y({}, Ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var pw = _r(fw);
  var mw = Y({}, Ti, {
    clipboardData: function (r) {
      if ("clipboardData" in r) {
        return r.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  });
  var gw = _r(mw);
  var yw = Y({}, Ti, {
    data: 0
  });
  var of = _r(yw);
  var vw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  };
  var ww = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  var bw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _w(r) {
    var s = this.nativeEvent;
    if (s.getModifierState) {
      return s.getModifierState(r);
    } else if (r = bw[r]) {
      return !!s[r];
    } else {
      return false;
    }
  }
  function Ju() {
    return _w;
  }
  var Sw = Y({}, jo, {
    key: function (r) {
      if (r.key) {
        var s = vw[r.key] || r.key;
        if (s !== "Unidentified") {
          return s;
        }
      }
      if (r.type === "keypress") {
        r = Xa(r);
        if (r === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(r);
        }
      } else if (r.type === "keydown" || r.type === "keyup") {
        return ww[r.keyCode] || "Unidentified";
      } else {
        return "";
      }
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function (r) {
      if (r.type === "keypress") {
        return Xa(r);
      } else {
        return 0;
      }
    },
    keyCode: function (r) {
      if (r.type === "keydown" || r.type === "keyup") {
        return r.keyCode;
      } else {
        return 0;
      }
    },
    which: function (r) {
      if (r.type === "keypress") {
        return Xa(r);
      } else if (r.type === "keydown" || r.type === "keyup") {
        return r.keyCode;
      } else {
        return 0;
      }
    }
  });
  var kw = _r(Sw);
  var Ew = Y({}, el, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  });
  var af = _r(Ew);
  var xw = Y({}, jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  });
  var Rw = _r(xw);
  var Tw = Y({}, Ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  });
  var Cw = _r(Tw);
  var Pw = Y({}, el, {
    deltaX: function (r) {
      if ("deltaX" in r) {
        return r.deltaX;
      } else if ("wheelDeltaX" in r) {
        return -r.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (r) {
      if ("deltaY" in r) {
        return r.deltaY;
      } else if ("wheelDeltaY" in r) {
        return -r.wheelDeltaY;
      } else if ("wheelDelta" in r) {
        return -r.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Ow = _r(Pw);
  var Aw = [9, 13, 27, 32];
  var Qu = d && "CompositionEvent" in window;
  var Lo = null;
  if (d && "documentMode" in document) {
    Lo = document.documentMode;
  }
  var Iw = d && "TextEvent" in window && !Lo;
  var lf = d && (!Qu || Lo && Lo > 8 && Lo <= 11);
  var uf = " ";
  var cf = false;
  function df(r, s) {
    switch (r) {
      case "keyup":
        return Aw.indexOf(s.keyCode) !== -1;
      case "keydown":
        return s.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function hf(r) {
    r = r.detail;
    if (typeof r == "object" && "data" in r) {
      return r.data;
    } else {
      return null;
    }
  }
  var Ci = false;
  function jw(r, s) {
    switch (r) {
      case "compositionend":
        return hf(s);
      case "keypress":
        if (s.which !== 32) {
          return null;
        } else {
          cf = true;
          return uf;
        }
      case "textInput":
        r = s.data;
        if (r === uf && cf) {
          return null;
        } else {
          return r;
        }
      default:
        return null;
    }
  }
  function Nw(r, s) {
    if (Ci) {
      if (r === "compositionend" || !Qu && df(r, s)) {
        r = rf();
        Ya = Wu = as = null;
        Ci = false;
        return r;
      } else {
        return null;
      }
    }
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!s.ctrlKey && !s.altKey && !s.metaKey || s.ctrlKey && s.altKey) {
          if (s.char && s.char.length > 1) {
            return s.char;
          }
          if (s.which) {
            return String.fromCharCode(s.which);
          }
        }
        return null;
      case "compositionend":
        if (lf && s.locale !== "ko") {
          return null;
        } else {
          return s.data;
        }
      default:
        return null;
    }
  }
  var Lw = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function ff(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    if (s === "input") {
      return !!Lw[r.type];
    } else {
      return s === "textarea";
    }
  }
  function pf(r, s, o, c) {
    De(c);
    s = il(s, "onChange");
    if (s.length > 0) {
      o = new Vu("onChange", "change", null, o, c);
      r.push({
        event: o,
        listeners: s
      });
    }
  }
  var Do = null;
  var Uo = null;
  function Dw(r) {
    If(r, 0);
  }
  function tl(r) {
    var s = ji(r);
    if (rt(s)) {
      return r;
    }
  }
  function Uw(r, s) {
    if (r === "change") {
      return s;
    }
  }
  var mf = false;
  if (d) {
    var Yu;
    if (d) {
      var Xu = "oninput" in document;
      if (!Xu) {
        var gf = document.createElement("div");
        gf.setAttribute("oninput", "return;");
        Xu = typeof gf.oninput == "function";
      }
      Yu = Xu;
    } else {
      Yu = false;
    }
    mf = Yu && (!document.documentMode || document.documentMode > 9);
  }
  function yf() {
    if (Do) {
      Do.detachEvent("onpropertychange", vf);
      Uo = Do = null;
    }
  }
  function vf(r) {
    if (r.propertyName === "value" && tl(Uo)) {
      var s = [];
      pf(s, Uo, r, Xt(r));
      dt(Dw, s);
    }
  }
  function Mw(r, s, o) {
    if (r === "focusin") {
      yf();
      Do = s;
      Uo = o;
      Do.attachEvent("onpropertychange", vf);
    } else if (r === "focusout") {
      yf();
    }
  }
  function $w(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") {
      return tl(Uo);
    }
  }
  function Fw(r, s) {
    if (r === "click") {
      return tl(s);
    }
  }
  function zw(r, s) {
    if (r === "input" || r === "change") {
      return tl(s);
    }
  }
  function Bw(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var Qr = typeof Object.is == "function" ? Object.is : Bw;
  function Mo(r, s) {
    if (Qr(r, s)) {
      return true;
    }
    if (typeof r != "object" || r === null || typeof s != "object" || s === null) {
      return false;
    }
    var o = Object.keys(r);
    var c = Object.keys(s);
    if (o.length !== c.length) {
      return false;
    }
    for (c = 0; c < o.length; c++) {
      var h = o[c];
      if (!f.call(s, h) || !Qr(r[h], s[h])) {
        return false;
      }
    }
    return true;
  }
  function wf(r) {
    while (r && r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }
  function bf(r, s) {
    var o = wf(r);
    r = 0;
    var c;
    for (; o;) {
      if (o.nodeType === 3) {
        c = r + o.textContent.length;
        if (r <= s && c >= s) {
          return {
            node: o,
            offset: s - r
          };
        }
        r = c;
      }
      e: {
        while (o) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = undefined;
      }
      o = wf(o);
    }
  }
  function _f(r, s) {
    if (r && s) {
      if (r === s) {
        return true;
      } else if (r && r.nodeType === 3) {
        return false;
      } else if (s && s.nodeType === 3) {
        return _f(r, s.parentNode);
      } else if ("contains" in r) {
        return r.contains(s);
      } else if (r.compareDocumentPosition) {
        return !!(r.compareDocumentPosition(s) & 16);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function Sf() {
    for (var r = window, s = gr(); s instanceof r.HTMLIFrameElement;) {
      try {
        var o = typeof s.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o) {
        r = s.contentWindow;
      } else {
        break;
      }
      s = gr(r.document);
    }
    return s;
  }
  function Zu(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function Hw(r) {
    var s = Sf();
    var o = r.focusedElem;
    var c = r.selectionRange;
    if (s !== o && o && o.ownerDocument && _f(o.ownerDocument.documentElement, o)) {
      if (c !== null && Zu(o)) {
        s = c.start;
        r = c.end;
        if (r === undefined) {
          r = s;
        }
        if ("selectionStart" in o) {
          o.selectionStart = s;
          o.selectionEnd = Math.min(r, o.value.length);
        } else {
          r = (s = o.ownerDocument || document) && s.defaultView || window;
          if (r.getSelection) {
            r = r.getSelection();
            var h = o.textContent.length;
            var p = Math.min(c.start, h);
            c = c.end === undefined ? p : Math.min(c.end, h);
            if (!r.extend && p > c) {
              h = c;
              c = p;
              p = h;
            }
            h = bf(o, p);
            var v = bf(o, c);
            if (h && v && (r.rangeCount !== 1 || r.anchorNode !== h.node || r.anchorOffset !== h.offset || r.focusNode !== v.node || r.focusOffset !== v.offset)) {
              s = s.createRange();
              s.setStart(h.node, h.offset);
              r.removeAllRanges();
              if (p > c) {
                r.addRange(s);
                r.extend(v.node, v.offset);
              } else {
                s.setEnd(v.node, v.offset);
                r.addRange(s);
              }
            }
          }
        }
      }
      s = [];
      r = o;
      while (r = r.parentNode) {
        if (r.nodeType === 1) {
          s.push({
            element: r,
            left: r.scrollLeft,
            top: r.scrollTop
          });
        }
      }
      if (typeof o.focus == "function") {
        o.focus();
      }
      o = 0;
      for (; o < s.length; o++) {
        r = s[o];
        r.element.scrollLeft = r.left;
        r.element.scrollTop = r.top;
      }
    }
  }
  var Ww = d && "documentMode" in document && document.documentMode <= 11;
  var Pi = null;
  var ec = null;
  var $o = null;
  var tc = false;
  function kf(r, s, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    if (!tc && Pi != null && Pi === gr(c)) {
      c = Pi;
      if ("selectionStart" in c && Zu(c)) {
        c = {
          start: c.selectionStart,
          end: c.selectionEnd
        };
      } else {
        c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection();
        c = {
          anchorNode: c.anchorNode,
          anchorOffset: c.anchorOffset,
          focusNode: c.focusNode,
          focusOffset: c.focusOffset
        };
      }
      if (!$o || !Mo($o, c)) {
        $o = c;
        c = il(ec, "onSelect");
        if (c.length > 0) {
          s = new Vu("onSelect", "select", null, s, o);
          r.push({
            event: s,
            listeners: c
          });
          s.target = Pi;
        }
      }
    }
  }
  function rl(r, s) {
    var o = {};
    o[r.toLowerCase()] = s.toLowerCase();
    o["Webkit" + r] = "webkit" + s;
    o["Moz" + r] = "moz" + s;
    return o;
  }
  var Oi = {
    animationend: rl("Animation", "AnimationEnd"),
    animationiteration: rl("Animation", "AnimationIteration"),
    animationstart: rl("Animation", "AnimationStart"),
    transitionend: rl("Transition", "TransitionEnd")
  };
  var rc = {};
  var Ef = {};
  if (d) {
    Ef = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete Oi.animationend.animation;
      delete Oi.animationiteration.animation;
      delete Oi.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete Oi.transitionend.transition;
    }
  }
  function nl(r) {
    if (rc[r]) {
      return rc[r];
    }
    if (!Oi[r]) {
      return r;
    }
    var s = Oi[r];
    var o;
    for (o in s) {
      if (s.hasOwnProperty(o) && o in Ef) {
        return rc[r] = s[o];
      }
    }
    return r;
  }
  var xf = nl("animationend");
  var Rf = nl("animationiteration");
  var Tf = nl("animationstart");
  var Cf = nl("transitionend");
  var Pf = new Map();
  var Of = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ls(r, s) {
    Pf.set(r, s);
    l(s, [r]);
  }
  for (var nc = 0; nc < Of.length; nc++) {
    var sc = Of[nc];
    var Vw = sc.toLowerCase();
    var qw = sc[0].toUpperCase() + sc.slice(1);
    ls(Vw, "on" + qw);
  }
  ls(xf, "onAnimationEnd");
  ls(Rf, "onAnimationIteration");
  ls(Tf, "onAnimationStart");
  ls("dblclick", "onDoubleClick");
  ls("focusin", "onFocus");
  ls("focusout", "onBlur");
  ls(Cf, "onTransitionEnd");
  u("onMouseEnter", ["mouseout", "mouseover"]);
  u("onMouseLeave", ["mouseout", "mouseover"]);
  u("onPointerEnter", ["pointerout", "pointerover"]);
  u("onPointerLeave", ["pointerout", "pointerover"]);
  l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var Kw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));
  function Af(r, s, o) {
    var c = r.type || "unknown-event";
    r.currentTarget = o;
    he(c, s, undefined, r);
    r.currentTarget = null;
  }
  function If(r, s) {
    s = (s & 4) !== 0;
    for (var o = 0; o < r.length; o++) {
      var c = r[o];
      var h = c.event;
      c = c.listeners;
      e: {
        var p = undefined;
        if (s) {
          for (var v = c.length - 1; v >= 0; v--) {
            var S = c[v];
            var T = S.instance;
            var F = S.currentTarget;
            S = S.listener;
            if (T !== p && h.isPropagationStopped()) {
              break e;
            }
            Af(h, S, F);
            p = T;
          }
        } else {
          for (v = 0; v < c.length; v++) {
            S = c[v];
            T = S.instance;
            F = S.currentTarget;
            S = S.listener;
            if (T !== p && h.isPropagationStopped()) {
              break e;
            }
            Af(h, S, F);
            p = T;
          }
        }
      }
    }
    if (te) {
      r = Se;
      te = false;
      Se = null;
      throw r;
    }
  }
  function ot(r, s) {
    var o = s[hc];
    if (o === undefined) {
      o = s[hc] = new Set();
    }
    var c = r + "__bubble";
    if (!o.has(c)) {
      jf(s, r, 2, false);
      o.add(c);
    }
  }
  function ic(r, s, o) {
    var c = 0;
    if (s) {
      c |= 4;
    }
    jf(o, r, c, s);
  }
  var sl = "_reactListening" + Math.random().toString(36).slice(2);
  function zo(r) {
    if (!r[sl]) {
      r[sl] = true;
      i.forEach(function (o) {
        if (o !== "selectionchange") {
          if (!Kw.has(o)) {
            ic(o, false, r);
          }
          ic(o, true, r);
        }
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      if (s !== null && !s[sl]) {
        s[sl] = true;
        ic("selectionchange", false, s);
      }
    }
  }
  function jf(r, s, o, c) {
    switch (tf(s)) {
      case 1:
        var h = aw;
        break;
      case 4:
        h = lw;
        break;
      default:
        h = Bu;
    }
    o = h.bind(null, s, o, r);
    h = undefined;
    if (!!fn && (s === "touchstart" || s === "touchmove" || s === "wheel")) {
      h = true;
    }
    if (c) {
      if (h !== undefined) {
        r.addEventListener(s, o, {
          capture: true,
          passive: h
        });
      } else {
        r.addEventListener(s, o, true);
      }
    } else if (h !== undefined) {
      r.addEventListener(s, o, {
        passive: h
      });
    } else {
      r.addEventListener(s, o, false);
    }
  }
  function oc(r, s, o, c, h) {
    var p = c;
    if ((s & 1) === 0 && (s & 2) === 0 && c !== null) {
      e: while (true) {
        if (c === null) {
          return;
        }
        var v = c.tag;
        if (v === 3 || v === 4) {
          var S = c.stateNode.containerInfo;
          if (S === h || S.nodeType === 8 && S.parentNode === h) {
            break;
          }
          if (v === 4) {
            for (v = c.return; v !== null;) {
              var T = v.tag;
              if ((T === 3 || T === 4) && (T = v.stateNode.containerInfo, T === h || T.nodeType === 8 && T.parentNode === h)) {
                return;
              }
              v = v.return;
            }
          }
          while (S !== null) {
            v = Ks(S);
            if (v === null) {
              return;
            }
            T = v.tag;
            if (T === 5 || T === 6) {
              c = p = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        c = c.return;
      }
    }
    dt(function () {
      var F = p;
      var K = Xt(o);
      var G = [];
      e: {
        var V = Pf.get(r);
        if (V !== undefined) {
          var ae = Vu;
          var fe = r;
          switch (r) {
            case "keypress":
              if (Xa(o) === 0) {
                break e;
              }
            case "keydown":
            case "keyup":
              ae = kw;
              break;
            case "focusin":
              fe = "focus";
              ae = Gu;
              break;
            case "focusout":
              fe = "blur";
              ae = Gu;
              break;
            case "beforeblur":
            case "afterblur":
              ae = Gu;
              break;
            case "click":
              if (o.button === 2) {
                break e;
              }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = dw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = Rw;
              break;
            case xf:
            case Rf:
            case Tf:
              ae = pw;
              break;
            case Cf:
              ae = Cw;
              break;
            case "scroll":
              ae = uw;
              break;
            case "wheel":
              ae = Ow;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = gw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = af;
          }
          var _e = (s & 4) !== 0;
          var _t = !_e && r === "scroll";
          var D = _e ? V !== null ? V + "Capture" : null : V;
          _e = [];
          for (var O = F, M; O !== null;) {
            M = O;
            var ee = M.stateNode;
            if (M.tag === 5 && ee !== null) {
              M = ee;
              if (D !== null) {
                ee = St(O, D);
                if (ee != null) {
                  _e.push(Bo(O, ee, M));
                }
              }
            }
            if (_t) {
              break;
            }
            O = O.return;
          }
          if (_e.length > 0) {
            V = new ae(V, fe, null, o, K);
            G.push({
              event: V,
              listeners: _e
            });
          }
        }
      }
      if ((s & 7) === 0) {
        e: {
          V = r === "mouseover" || r === "pointerover";
          ae = r === "mouseout" || r === "pointerout";
          if (V && o !== jn && (fe = o.relatedTarget || o.fromElement) && (Ks(fe) || fe[Un])) {
            break e;
          }
          if ((ae || V) && (V = K.window === K ? K : (V = K.ownerDocument) ? V.defaultView || V.parentWindow : window, ae ? (fe = o.relatedTarget || o.toElement, ae = F, fe = fe ? Ks(fe) : null, fe !== null && (_t = we(fe), fe !== _t || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ae = null, fe = F), ae !== fe)) {
            _e = sf;
            ee = "onMouseLeave";
            D = "onMouseEnter";
            O = "mouse";
            if (r === "pointerout" || r === "pointerover") {
              _e = af;
              ee = "onPointerLeave";
              D = "onPointerEnter";
              O = "pointer";
            }
            _t = ae == null ? V : ji(ae);
            M = fe == null ? V : ji(fe);
            V = new _e(ee, O + "leave", ae, o, K);
            V.target = _t;
            V.relatedTarget = M;
            ee = null;
            if (Ks(K) === F) {
              _e = new _e(D, O + "enter", fe, o, K);
              _e.target = M;
              _e.relatedTarget = _t;
              ee = _e;
            }
            _t = ee;
            if (ae && fe) {
              t: {
                _e = ae;
                D = fe;
                O = 0;
                M = _e;
                for (; M; M = Ai(M)) {
                  O++;
                }
                M = 0;
                ee = D;
                for (; ee; ee = Ai(ee)) {
                  M++;
                }
                while (O - M > 0) {
                  _e = Ai(_e);
                  O--;
                }
                while (M - O > 0) {
                  D = Ai(D);
                  M--;
                }
                while (O--) {
                  if (_e === D || D !== null && _e === D.alternate) {
                    break t;
                  }
                  _e = Ai(_e);
                  D = Ai(D);
                }
                _e = null;
              }
            } else {
              _e = null;
            }
            if (ae !== null) {
              Nf(G, V, ae, _e, false);
            }
            if (fe !== null && _t !== null) {
              Nf(G, _t, fe, _e, true);
            }
          }
        }
        e: {
          V = F ? ji(F) : window;
          ae = V.nodeName && V.nodeName.toLowerCase();
          if (ae === "select" || ae === "input" && V.type === "file") {
            var ke = Uw;
          } else if (ff(V)) {
            if (mf) {
              ke = zw;
            } else {
              ke = $w;
              var Ce = Mw;
            }
          } else if ((ae = V.nodeName) && ae.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio")) {
            ke = Fw;
          }
          if (ke &&= ke(r, F)) {
            pf(G, ke, o, K);
            break e;
          }
          if (Ce) {
            Ce(r, V, F);
          }
          if (r === "focusout" && (Ce = V._wrapperState) && Ce.controlled && V.type === "number") {
            Ht(V, "number", V.value);
          }
        }
        Ce = F ? ji(F) : window;
        switch (r) {
          case "focusin":
            if (ff(Ce) || Ce.contentEditable === "true") {
              Pi = Ce;
              ec = F;
              $o = null;
            }
            break;
          case "focusout":
            $o = ec = Pi = null;
            break;
          case "mousedown":
            tc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = false;
            kf(G, o, K);
            break;
          case "selectionchange":
            if (Ww) {
              break;
            }
          case "keydown":
          case "keyup":
            kf(G, o, K);
        }
        var Pe;
        if (Qu) {
          e: {
            switch (r) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = undefined;
          }
        } else if (Ci) {
          if (df(r, o)) {
            Ne = "onCompositionEnd";
          }
        } else if (r === "keydown" && o.keyCode === 229) {
          Ne = "onCompositionStart";
        }
        if (Ne) {
          if (lf && o.locale !== "ko") {
            if (Ci || Ne !== "onCompositionStart") {
              if (Ne === "onCompositionEnd" && Ci) {
                Pe = rf();
              }
            } else {
              as = K;
              Wu = "value" in as ? as.value : as.textContent;
              Ci = true;
            }
          }
          Ce = il(F, Ne);
          if (Ce.length > 0) {
            Ne = new of(Ne, r, null, o, K);
            G.push({
              event: Ne,
              listeners: Ce
            });
            if (Pe) {
              Ne.data = Pe;
            } else {
              Pe = hf(o);
              if (Pe !== null) {
                Ne.data = Pe;
              }
            }
          }
        }
        if (Pe = Iw ? jw(r, o) : Nw(r, o)) {
          F = il(F, "onBeforeInput");
          if (F.length > 0) {
            K = new of("onBeforeInput", "beforeinput", null, o, K);
            G.push({
              event: K,
              listeners: F
            });
            K.data = Pe;
          }
        }
      }
      If(G, s);
    });
  }
  function Bo(r, s, o) {
    return {
      instance: r,
      listener: s,
      currentTarget: o
    };
  }
  function il(r, s) {
    var o = s + "Capture";
    var c = [];
    for (; r !== null;) {
      var h = r;
      var p = h.stateNode;
      if (h.tag === 5 && p !== null) {
        h = p;
        p = St(r, o);
        if (p != null) {
          c.unshift(Bo(r, p, h));
        }
        p = St(r, s);
        if (p != null) {
          c.push(Bo(r, p, h));
        }
      }
      r = r.return;
    }
    return c;
  }
  function Ai(r) {
    if (r === null) {
      return null;
    }
    do {
      r = r.return;
    } while (r && r.tag !== 5);
    return r || null;
  }
  function Nf(r, s, o, c, h) {
    var p = s._reactName;
    var v = [];
    for (; o !== null && o !== c;) {
      var S = o;
      var T = S.alternate;
      var F = S.stateNode;
      if (T !== null && T === c) {
        break;
      }
      if (S.tag === 5 && F !== null) {
        S = F;
        if (h) {
          T = St(o, p);
          if (T != null) {
            v.unshift(Bo(o, T, S));
          }
        } else if (!h) {
          T = St(o, p);
          if (T != null) {
            v.push(Bo(o, T, S));
          }
        }
      }
      o = o.return;
    }
    if (v.length !== 0) {
      r.push({
        event: s,
        listeners: v
      });
    }
  }
  var Gw = /\r\n?/g;
  var Jw = /\u0000|\uFFFD/g;
  function Lf(r) {
    return (typeof r == "string" ? r : "" + r).replace(Gw, `
`).replace(Jw, "");
  }
  function ol(r, s, o) {
    s = Lf(s);
    if (Lf(r) !== s && o) {
      throw Error(n(425));
    }
  }
  function al() {}
  var ac = null;
  var lc = null;
  function uc(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var cc = typeof setTimeout == "function" ? setTimeout : undefined;
  var Qw = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var Df = typeof Promise == "function" ? Promise : undefined;
  var Yw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Df !== "undefined" ? function (r) {
    return Df.resolve(null).then(r).catch(Xw);
  } : cc;
  function Xw(r) {
    setTimeout(function () {
      throw r;
    });
  }
  function dc(r, s) {
    var o = s;
    var c = 0;
    do {
      var h = o.nextSibling;
      r.removeChild(o);
      if (h && h.nodeType === 8) {
        o = h.data;
        if (o === "/$") {
          if (c === 0) {
            r.removeChild(h);
            Io(s);
            return;
          }
          c--;
        } else if (o === "$" || o === "$?" || o === "$!") {
          c++;
        }
      }
      o = h;
    } while (o);
    Io(s);
  }
  function us(r) {
    for (; r != null; r = r.nextSibling) {
      var s = r.nodeType;
      if (s === 1 || s === 3) {
        break;
      }
      if (s === 8) {
        s = r.data;
        if (s === "$" || s === "$!" || s === "$?") {
          break;
        }
        if (s === "/$") {
          return null;
        }
      }
    }
    return r;
  }
  function Uf(r) {
    r = r.previousSibling;
    var s = 0;
    for (; r;) {
      if (r.nodeType === 8) {
        var o = r.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (s === 0) {
            return r;
          }
          s--;
        } else if (o === "/$") {
          s++;
        }
      }
      r = r.previousSibling;
    }
    return null;
  }
  var Ii = Math.random().toString(36).slice(2);
  var mn = "__reactFiber$" + Ii;
  var Ho = "__reactProps$" + Ii;
  var Un = "__reactContainer$" + Ii;
  var hc = "__reactEvents$" + Ii;
  var Zw = "__reactListeners$" + Ii;
  var e0 = "__reactHandles$" + Ii;
  function Ks(r) {
    var s = r[mn];
    if (s) {
      return s;
    }
    for (var o = r.parentNode; o;) {
      if (s = o[Un] || o[mn]) {
        o = s.alternate;
        if (s.child !== null || o !== null && o.child !== null) {
          for (r = Uf(r); r !== null;) {
            if (o = r[mn]) {
              return o;
            }
            r = Uf(r);
          }
        }
        return s;
      }
      r = o;
      o = r.parentNode;
    }
    return null;
  }
  function Wo(r) {
    r = r[mn] || r[Un];
    if (!r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3) {
      return null;
    } else {
      return r;
    }
  }
  function ji(r) {
    if (r.tag === 5 || r.tag === 6) {
      return r.stateNode;
    }
    throw Error(n(33));
  }
  function ll(r) {
    return r[Ho] || null;
  }
  var fc = [];
  var Ni = -1;
  function cs(r) {
    return {
      current: r
    };
  }
  function at(r) {
    if (!(Ni < 0)) {
      r.current = fc[Ni];
      fc[Ni] = null;
      Ni--;
    }
  }
  function st(r, s) {
    Ni++;
    fc[Ni] = r.current;
    r.current = s;
  }
  var ds = {};
  var Vt = cs(ds);
  var ir = cs(false);
  var Gs = ds;
  function Li(r, s) {
    var o = r.type.contextTypes;
    if (!o) {
      return ds;
    }
    var c = r.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === s) {
      return c.__reactInternalMemoizedMaskedChildContext;
    }
    var h = {};
    var p;
    for (p in o) {
      h[p] = s[p];
    }
    if (c) {
      r = r.stateNode;
      r.__reactInternalMemoizedUnmaskedChildContext = s;
      r.__reactInternalMemoizedMaskedChildContext = h;
    }
    return h;
  }
  function or(r) {
    r = r.childContextTypes;
    return r != null;
  }
  function ul() {
    at(ir);
    at(Vt);
  }
  function Mf(r, s, o) {
    if (Vt.current !== ds) {
      throw Error(n(168));
    }
    st(Vt, s);
    st(ir, o);
  }
  function $f(r, s, o) {
    var c = r.stateNode;
    s = s.childContextTypes;
    if (typeof c.getChildContext != "function") {
      return o;
    }
    c = c.getChildContext();
    for (var h in c) {
      if (!(h in s)) {
        throw Error(n(108, xe(r) || "Unknown", h));
      }
    }
    return Y({}, o, c);
  }
  function cl(r) {
    r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || ds;
    Gs = Vt.current;
    st(Vt, r);
    st(ir, ir.current);
    return true;
  }
  function Ff(r, s, o) {
    var c = r.stateNode;
    if (!c) {
      throw Error(n(169));
    }
    if (o) {
      r = $f(r, s, Gs);
      c.__reactInternalMemoizedMergedChildContext = r;
      at(ir);
      at(Vt);
      st(Vt, r);
    } else {
      at(ir);
    }
    st(ir, o);
  }
  var Mn = null;
  var dl = false;
  var pc = false;
  function zf(r) {
    if (Mn === null) {
      Mn = [r];
    } else {
      Mn.push(r);
    }
  }
  function t0(r) {
    dl = true;
    zf(r);
  }
  function hs() {
    if (!pc && Mn !== null) {
      pc = true;
      var r = 0;
      var s = et;
      try {
        var o = Mn;
        for (et = 1; r < o.length; r++) {
          var c = o[r];
          do {
            c = c(true);
          } while (c !== null);
        }
        Mn = null;
        dl = false;
      } catch (h) {
        if (Mn !== null) {
          Mn = Mn.slice(r + 1);
        }
        bt(Nr, hs);
        throw h;
      } finally {
        et = s;
        pc = false;
      }
    }
    return null;
  }
  var Di = [];
  var Ui = 0;
  var hl = null;
  var fl = 0;
  var Lr = [];
  var Dr = 0;
  var Js = null;
  var $n = 1;
  var Fn = "";
  function Qs(r, s) {
    Di[Ui++] = fl;
    Di[Ui++] = hl;
    hl = r;
    fl = s;
  }
  function Bf(r, s, o) {
    Lr[Dr++] = $n;
    Lr[Dr++] = Fn;
    Lr[Dr++] = Js;
    Js = r;
    var c = $n;
    r = Fn;
    var h = 32 - tt(c) - 1;
    c &= ~(1 << h);
    o += 1;
    var p = 32 - tt(s) + h;
    if (p > 30) {
      var v = h - h % 5;
      p = (c & (1 << v) - 1).toString(32);
      c >>= v;
      h -= v;
      $n = 1 << 32 - tt(s) + h | o << h | c;
      Fn = p + r;
    } else {
      $n = 1 << p | o << h | c;
      Fn = r;
    }
  }
  function mc(r) {
    if (r.return !== null) {
      Qs(r, 1);
      Bf(r, 1, 0);
    }
  }
  function gc(r) {
    while (r === hl) {
      hl = Di[--Ui];
      Di[Ui] = null;
      fl = Di[--Ui];
      Di[Ui] = null;
    }
    while (r === Js) {
      Js = Lr[--Dr];
      Lr[Dr] = null;
      Fn = Lr[--Dr];
      Lr[Dr] = null;
      $n = Lr[--Dr];
      Lr[Dr] = null;
    }
  }
  var Sr = null;
  var kr = null;
  var ut = false;
  var Yr = null;
  function Hf(r, s) {
    var o = Fr(5, null, null, 0);
    o.elementType = "DELETED";
    o.stateNode = s;
    o.return = r;
    s = r.deletions;
    if (s === null) {
      r.deletions = [o];
      r.flags |= 16;
    } else {
      s.push(o);
    }
  }
  function Wf(r, s) {
    switch (r.tag) {
      case 5:
        var o = r.type;
        s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s;
        if (s !== null) {
          r.stateNode = s;
          Sr = r;
          kr = us(s.firstChild);
          return true;
        } else {
          return false;
        }
      case 6:
        s = r.pendingProps === "" || s.nodeType !== 3 ? null : s;
        if (s !== null) {
          r.stateNode = s;
          Sr = r;
          kr = null;
          return true;
        } else {
          return false;
        }
      case 13:
        s = s.nodeType !== 8 ? null : s;
        if (s !== null) {
          o = Js !== null ? {
            id: $n,
            overflow: Fn
          } : null;
          r.memoizedState = {
            dehydrated: s,
            treeContext: o,
            retryLane: 1073741824
          };
          o = Fr(18, null, null, 0);
          o.stateNode = s;
          o.return = r;
          r.child = o;
          Sr = r;
          kr = null;
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }
  function yc(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function vc(r) {
    if (ut) {
      var s = kr;
      if (s) {
        var o = s;
        if (!Wf(r, s)) {
          if (yc(r)) {
            throw Error(n(418));
          }
          s = us(o.nextSibling);
          var c = Sr;
          if (s && Wf(r, s)) {
            Hf(c, o);
          } else {
            r.flags = r.flags & -4097 | 2;
            ut = false;
            Sr = r;
          }
        }
      } else {
        if (yc(r)) {
          throw Error(n(418));
        }
        r.flags = r.flags & -4097 | 2;
        ut = false;
        Sr = r;
      }
    }
  }
  function Vf(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13;) {
      r = r.return;
    }
    Sr = r;
  }
  function pl(r) {
    if (r !== Sr) {
      return false;
    }
    if (!ut) {
      Vf(r);
      ut = true;
      return false;
    }
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5)) {
      s = r.type;
      s = s !== "head" && s !== "body" && !uc(r.type, r.memoizedProps);
    }
    if (s &&= kr) {
      if (yc(r)) {
        qf();
        throw Error(n(418));
      }
      while (s) {
        Hf(r, s);
        s = us(s.nextSibling);
      }
    }
    Vf(r);
    if (r.tag === 13) {
      r = r.memoizedState;
      r = r !== null ? r.dehydrated : null;
      if (!r) {
        throw Error(n(317));
      }
      e: {
        r = r.nextSibling;
        s = 0;
        while (r) {
          if (r.nodeType === 8) {
            var o = r.data;
            if (o === "/$") {
              if (s === 0) {
                kr = us(r.nextSibling);
                break e;
              }
              s--;
            } else if (o === "$" || o === "$!" || o === "$?") {
              s++;
            }
          }
          r = r.nextSibling;
        }
        kr = null;
      }
    } else {
      kr = Sr ? us(r.stateNode.nextSibling) : null;
    }
    return true;
  }
  function qf() {
    for (var r = kr; r;) {
      r = us(r.nextSibling);
    }
  }
  function Mi() {
    kr = Sr = null;
    ut = false;
  }
  function wc(r) {
    if (Yr === null) {
      Yr = [r];
    } else {
      Yr.push(r);
    }
  }
  var r0 = B.ReactCurrentBatchConfig;
  function Vo(r, s, o) {
    r = o.ref;
    if (r !== null && typeof r != "function" && typeof r != "object") {
      if (o._owner) {
        o = o._owner;
        if (o) {
          if (o.tag !== 1) {
            throw Error(n(309));
          }
          var c = o.stateNode;
        }
        if (!c) {
          throw Error(n(147, r));
        }
        var h = c;
        var p = "" + r;
        if (s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p) {
          return s.ref;
        } else {
          s = function (v) {
            var S = h.refs;
            if (v === null) {
              delete S[p];
            } else {
              S[p] = v;
            }
          };
          s._stringRef = p;
          return s;
        }
      }
      if (typeof r != "string") {
        throw Error(n(284));
      }
      if (!o._owner) {
        throw Error(n(290, r));
      }
    }
    return r;
  }
  function ml(r, s) {
    r = Object.prototype.toString.call(s);
    throw Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Kf(r) {
    var s = r._init;
    return s(r._payload);
  }
  function Gf(r) {
    function s(D, O) {
      if (r) {
        var M = D.deletions;
        if (M === null) {
          D.deletions = [O];
          D.flags |= 16;
        } else {
          M.push(O);
        }
      }
    }
    function o(D, O) {
      if (!r) {
        return null;
      }
      while (O !== null) {
        s(D, O);
        O = O.sibling;
      }
      return null;
    }
    function c(D, O) {
      for (D = new Map(); O !== null;) {
        if (O.key !== null) {
          D.set(O.key, O);
        } else {
          D.set(O.index, O);
        }
        O = O.sibling;
      }
      return D;
    }
    function h(D, O) {
      D = bs(D, O);
      D.index = 0;
      D.sibling = null;
      return D;
    }
    function p(D, O, M) {
      D.index = M;
      if (r) {
        M = D.alternate;
        if (M !== null) {
          M = M.index;
          if (M < O) {
            D.flags |= 2;
            return O;
          } else {
            return M;
          }
        } else {
          D.flags |= 2;
          return O;
        }
      } else {
        D.flags |= 1048576;
        return O;
      }
    }
    function v(D) {
      if (r && D.alternate === null) {
        D.flags |= 2;
      }
      return D;
    }
    function S(D, O, M, ee) {
      if (O === null || O.tag !== 6) {
        O = cd(M, D.mode, ee);
        O.return = D;
        return O;
      } else {
        O = h(O, M);
        O.return = D;
        return O;
      }
    }
    function T(D, O, M, ee) {
      var ke = M.type;
      if (ke === j) {
        return K(D, O, M.props.children, ee, M.key);
      } else if (O !== null && (O.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === re && Kf(ke) === O.type)) {
        ee = h(O, M.props);
        ee.ref = Vo(D, O, M);
        ee.return = D;
        return ee;
      } else {
        ee = $l(M.type, M.key, M.props, null, D.mode, ee);
        ee.ref = Vo(D, O, M);
        ee.return = D;
        return ee;
      }
    }
    function F(D, O, M, ee) {
      if (O === null || O.tag !== 4 || O.stateNode.containerInfo !== M.containerInfo || O.stateNode.implementation !== M.implementation) {
        O = dd(M, D.mode, ee);
        O.return = D;
        return O;
      } else {
        O = h(O, M.children || []);
        O.return = D;
        return O;
      }
    }
    function K(D, O, M, ee, ke) {
      if (O === null || O.tag !== 7) {
        O = si(M, D.mode, ee, ke);
        O.return = D;
        return O;
      } else {
        O = h(O, M);
        O.return = D;
        return O;
      }
    }
    function G(D, O, M) {
      if (typeof O == "string" && O !== "" || typeof O == "number") {
        O = cd("" + O, D.mode, M);
        O.return = D;
        return O;
      }
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case J:
            M = $l(O.type, O.key, O.props, null, D.mode, M);
            M.ref = Vo(D, null, O);
            M.return = D;
            return M;
          case Q:
            O = dd(O, D.mode, M);
            O.return = D;
            return O;
          case re:
            var ee = O._init;
            return G(D, ee(O._payload), M);
        }
        if (On(O) || se(O)) {
          O = si(O, D.mode, M, null);
          O.return = D;
          return O;
        }
        ml(D, O);
      }
      return null;
    }
    function V(D, O, M, ee) {
      var ke = O !== null ? O.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") {
        if (ke !== null) {
          return null;
        } else {
          return S(D, O, "" + M, ee);
        }
      }
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case J:
            if (M.key === ke) {
              return T(D, O, M, ee);
            } else {
              return null;
            }
          case Q:
            if (M.key === ke) {
              return F(D, O, M, ee);
            } else {
              return null;
            }
          case re:
            ke = M._init;
            return V(D, O, ke(M._payload), ee);
        }
        if (On(M) || se(M)) {
          if (ke !== null) {
            return null;
          } else {
            return K(D, O, M, ee, null);
          }
        }
        ml(D, M);
      }
      return null;
    }
    function ae(D, O, M, ee, ke) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
        D = D.get(M) || null;
        return S(O, D, "" + ee, ke);
      }
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case J:
            D = D.get(ee.key === null ? M : ee.key) || null;
            return T(O, D, ee, ke);
          case Q:
            D = D.get(ee.key === null ? M : ee.key) || null;
            return F(O, D, ee, ke);
          case re:
            var Ce = ee._init;
            return ae(D, O, M, Ce(ee._payload), ke);
        }
        if (On(ee) || se(ee)) {
          D = D.get(M) || null;
          return K(O, D, ee, ke, null);
        }
        ml(O, ee);
      }
      return null;
    }
    function fe(D, O, M, ee) {
      var ke = null;
      var Ce = null;
      for (var Pe = O, Ne = O = 0, Nt = null; Pe !== null && Ne < M.length; Ne++) {
        if (Pe.index > Ne) {
          Nt = Pe;
          Pe = null;
        } else {
          Nt = Pe.sibling;
        }
        var Qe = V(D, Pe, M[Ne], ee);
        if (Qe === null) {
          if (Pe === null) {
            Pe = Nt;
          }
          break;
        }
        if (r && Pe && Qe.alternate === null) {
          s(D, Pe);
        }
        O = p(Qe, O, Ne);
        if (Ce === null) {
          ke = Qe;
        } else {
          Ce.sibling = Qe;
        }
        Ce = Qe;
        Pe = Nt;
      }
      if (Ne === M.length) {
        o(D, Pe);
        if (ut) {
          Qs(D, Ne);
        }
        return ke;
      }
      if (Pe === null) {
        for (; Ne < M.length; Ne++) {
          Pe = G(D, M[Ne], ee);
          if (Pe !== null) {
            O = p(Pe, O, Ne);
            if (Ce === null) {
              ke = Pe;
            } else {
              Ce.sibling = Pe;
            }
            Ce = Pe;
          }
        }
        if (ut) {
          Qs(D, Ne);
        }
        return ke;
      }
      for (Pe = c(D, Pe); Ne < M.length; Ne++) {
        Nt = ae(Pe, D, Ne, M[Ne], ee);
        if (Nt !== null) {
          if (r && Nt.alternate !== null) {
            Pe.delete(Nt.key === null ? Ne : Nt.key);
          }
          O = p(Nt, O, Ne);
          if (Ce === null) {
            ke = Nt;
          } else {
            Ce.sibling = Nt;
          }
          Ce = Nt;
        }
      }
      if (r) {
        Pe.forEach(function (_s) {
          return s(D, _s);
        });
      }
      if (ut) {
        Qs(D, Ne);
      }
      return ke;
    }
    function _e(D, O, M, ee) {
      var ke = se(M);
      if (typeof ke != "function") {
        throw Error(n(150));
      }
      M = ke.call(M);
      if (M == null) {
        throw Error(n(151));
      }
      var Ce = ke = null;
      for (var Pe = O, Ne = O = 0, Nt = null, Qe = M.next(); Pe !== null && !Qe.done; Ne++, Qe = M.next()) {
        if (Pe.index > Ne) {
          Nt = Pe;
          Pe = null;
        } else {
          Nt = Pe.sibling;
        }
        var _s = V(D, Pe, Qe.value, ee);
        if (_s === null) {
          if (Pe === null) {
            Pe = Nt;
          }
          break;
        }
        if (r && Pe && _s.alternate === null) {
          s(D, Pe);
        }
        O = p(_s, O, Ne);
        if (Ce === null) {
          ke = _s;
        } else {
          Ce.sibling = _s;
        }
        Ce = _s;
        Pe = Nt;
      }
      if (Qe.done) {
        o(D, Pe);
        if (ut) {
          Qs(D, Ne);
        }
        return ke;
      }
      if (Pe === null) {
        for (; !Qe.done; Ne++, Qe = M.next()) {
          Qe = G(D, Qe.value, ee);
          if (Qe !== null) {
            O = p(Qe, O, Ne);
            if (Ce === null) {
              ke = Qe;
            } else {
              Ce.sibling = Qe;
            }
            Ce = Qe;
          }
        }
        if (ut) {
          Qs(D, Ne);
        }
        return ke;
      }
      for (Pe = c(D, Pe); !Qe.done; Ne++, Qe = M.next()) {
        Qe = ae(Pe, D, Ne, Qe.value, ee);
        if (Qe !== null) {
          if (r && Qe.alternate !== null) {
            Pe.delete(Qe.key === null ? Ne : Qe.key);
          }
          O = p(Qe, O, Ne);
          if (Ce === null) {
            ke = Qe;
          } else {
            Ce.sibling = Qe;
          }
          Ce = Qe;
        }
      }
      if (r) {
        Pe.forEach(function (L0) {
          return s(D, L0);
        });
      }
      if (ut) {
        Qs(D, Ne);
      }
      return ke;
    }
    function _t(D, O, M, ee) {
      if (typeof M == "object" && M !== null && M.type === j && M.key === null) {
        M = M.props.children;
      }
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case J:
            e: {
              var ke = M.key;
              for (var Ce = O; Ce !== null;) {
                if (Ce.key === ke) {
                  ke = M.type;
                  if (ke === j) {
                    if (Ce.tag === 7) {
                      o(D, Ce.sibling);
                      O = h(Ce, M.props.children);
                      O.return = D;
                      D = O;
                      break e;
                    }
                  } else if (Ce.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === re && Kf(ke) === Ce.type) {
                    o(D, Ce.sibling);
                    O = h(Ce, M.props);
                    O.ref = Vo(D, Ce, M);
                    O.return = D;
                    D = O;
                    break e;
                  }
                  o(D, Ce);
                  break;
                } else {
                  s(D, Ce);
                }
                Ce = Ce.sibling;
              }
              if (M.type === j) {
                O = si(M.props.children, D.mode, ee, M.key);
                O.return = D;
                D = O;
              } else {
                ee = $l(M.type, M.key, M.props, null, D.mode, ee);
                ee.ref = Vo(D, O, M);
                ee.return = D;
                D = ee;
              }
            }
            return v(D);
          case Q:
            e: {
              for (Ce = M.key; O !== null;) {
                if (O.key === Ce) {
                  if (O.tag === 4 && O.stateNode.containerInfo === M.containerInfo && O.stateNode.implementation === M.implementation) {
                    o(D, O.sibling);
                    O = h(O, M.children || []);
                    O.return = D;
                    D = O;
                    break e;
                  } else {
                    o(D, O);
                    break;
                  }
                } else {
                  s(D, O);
                }
                O = O.sibling;
              }
              O = dd(M, D.mode, ee);
              O.return = D;
              D = O;
            }
            return v(D);
          case re:
            Ce = M._init;
            return _t(D, O, Ce(M._payload), ee);
        }
        if (On(M)) {
          return fe(D, O, M, ee);
        }
        if (se(M)) {
          return _e(D, O, M, ee);
        }
        ml(D, M);
      }
      if (typeof M == "string" && M !== "" || typeof M == "number") {
        M = "" + M;
        if (O !== null && O.tag === 6) {
          o(D, O.sibling);
          O = h(O, M);
          O.return = D;
          D = O;
        } else {
          o(D, O);
          O = cd(M, D.mode, ee);
          O.return = D;
          D = O;
        }
        return v(D);
      } else {
        return o(D, O);
      }
    }
    return _t;
  }
  var $i = Gf(true);
  var Jf = Gf(false);
  var gl = cs(null);
  var yl = null;
  var Fi = null;
  var bc = null;
  function _c() {
    bc = Fi = yl = null;
  }
  function Sc(r) {
    var s = gl.current;
    at(gl);
    r._currentValue = s;
  }
  function kc(r, s, o) {
    while (r !== null) {
      var c = r.alternate;
      if ((r.childLanes & s) !== s) {
        r.childLanes |= s;
        if (c !== null) {
          c.childLanes |= s;
        }
      } else if (c !== null && (c.childLanes & s) !== s) {
        c.childLanes |= s;
      }
      if (r === o) {
        break;
      }
      r = r.return;
    }
  }
  function zi(r, s) {
    yl = r;
    bc = Fi = null;
    r = r.dependencies;
    if (r !== null && r.firstContext !== null) {
      if ((r.lanes & s) !== 0) {
        ar = true;
      }
      r.firstContext = null;
    }
  }
  function Ur(r) {
    var s = r._currentValue;
    if (bc !== r) {
      r = {
        context: r,
        memoizedValue: s,
        next: null
      };
      if (Fi === null) {
        if (yl === null) {
          throw Error(n(308));
        }
        Fi = r;
        yl.dependencies = {
          lanes: 0,
          firstContext: r
        };
      } else {
        Fi = Fi.next = r;
      }
    }
    return s;
  }
  var Ys = null;
  function Ec(r) {
    if (Ys === null) {
      Ys = [r];
    } else {
      Ys.push(r);
    }
  }
  function Qf(r, s, o, c) {
    var h = s.interleaved;
    if (h === null) {
      o.next = o;
      Ec(s);
    } else {
      o.next = h.next;
      h.next = o;
    }
    s.interleaved = o;
    return zn(r, c);
  }
  function zn(r, s) {
    r.lanes |= s;
    var o = r.alternate;
    if (o !== null) {
      o.lanes |= s;
    }
    o = r;
    r = r.return;
    while (r !== null) {
      r.childLanes |= s;
      o = r.alternate;
      if (o !== null) {
        o.childLanes |= s;
      }
      o = r;
      r = r.return;
    }
    if (o.tag === 3) {
      return o.stateNode;
    } else {
      return null;
    }
  }
  var fs = false;
  function xc(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Yf(r, s) {
    r = r.updateQueue;
    if (s.updateQueue === r) {
      s.updateQueue = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        effects: r.effects
      };
    }
  }
  function Bn(r, s) {
    return {
      eventTime: r,
      lane: s,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ps(r, s, o) {
    var c = r.updateQueue;
    if (c === null) {
      return null;
    }
    c = c.shared;
    if ((Je & 2) !== 0) {
      var h = c.pending;
      if (h === null) {
        s.next = s;
      } else {
        s.next = h.next;
        h.next = s;
      }
      c.pending = s;
      return zn(r, o);
    }
    h = c.interleaved;
    if (h === null) {
      s.next = s;
      Ec(c);
    } else {
      s.next = h.next;
      h.next = s;
    }
    c.interleaved = s;
    return zn(r, o);
  }
  function vl(r, s, o) {
    s = s.updateQueue;
    if (s !== null && (s = s.shared, (o & 4194240) !== 0)) {
      var c = s.lanes;
      c &= r.pendingLanes;
      o |= c;
      s.lanes = o;
      $u(r, o);
    }
  }
  function Xf(r, s) {
    var o = r.updateQueue;
    var c = r.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var h = null;
      var p = null;
      o = o.firstBaseUpdate;
      if (o !== null) {
        do {
          var v = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          };
          if (p === null) {
            h = p = v;
          } else {
            p = p.next = v;
          }
          o = o.next;
        } while (o !== null);
        if (p === null) {
          h = p = s;
        } else {
          p = p.next = s;
        }
      } else {
        h = p = s;
      }
      o = {
        baseState: c.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: p,
        shared: c.shared,
        effects: c.effects
      };
      r.updateQueue = o;
      return;
    }
    r = o.lastBaseUpdate;
    if (r === null) {
      o.firstBaseUpdate = s;
    } else {
      r.next = s;
    }
    o.lastBaseUpdate = s;
  }
  function wl(r, s, o, c) {
    var h = r.updateQueue;
    fs = false;
    var p = h.firstBaseUpdate;
    var v = h.lastBaseUpdate;
    var S = h.shared.pending;
    if (S !== null) {
      h.shared.pending = null;
      var T = S;
      var F = T.next;
      T.next = null;
      if (v === null) {
        p = F;
      } else {
        v.next = F;
      }
      v = T;
      var K = r.alternate;
      if (K !== null) {
        K = K.updateQueue;
        S = K.lastBaseUpdate;
        if (S !== v) {
          if (S === null) {
            K.firstBaseUpdate = F;
          } else {
            S.next = F;
          }
          K.lastBaseUpdate = T;
        }
      }
    }
    if (p !== null) {
      var G = h.baseState;
      v = 0;
      K = F = T = null;
      S = p;
      do {
        var V = S.lane;
        var ae = S.eventTime;
        if ((c & V) === V) {
          if (K !== null) {
            K = K.next = {
              eventTime: ae,
              lane: 0,
              tag: S.tag,
              payload: S.payload,
              callback: S.callback,
              next: null
            };
          }
          e: {
            var fe = r;
            var _e = S;
            V = s;
            ae = o;
            switch (_e.tag) {
              case 1:
                fe = _e.payload;
                if (typeof fe == "function") {
                  G = fe.call(ae, G, V);
                  break e;
                }
                G = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                fe = _e.payload;
                V = typeof fe == "function" ? fe.call(ae, G, V) : fe;
                if (V == null) {
                  break e;
                }
                G = Y({}, G, V);
                break e;
              case 2:
                fs = true;
            }
          }
          if (S.callback !== null && S.lane !== 0) {
            r.flags |= 64;
            V = h.effects;
            if (V === null) {
              h.effects = [S];
            } else {
              V.push(S);
            }
          }
        } else {
          ae = {
            eventTime: ae,
            lane: V,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          };
          if (K === null) {
            F = K = ae;
            T = G;
          } else {
            K = K.next = ae;
          }
          v |= V;
        }
        S = S.next;
        if (S === null) {
          S = h.shared.pending;
          if (S === null) {
            break;
          }
          V = S;
          S = V.next;
          V.next = null;
          h.lastBaseUpdate = V;
          h.shared.pending = null;
        }
      } while (true);
      if (K === null) {
        T = G;
      }
      h.baseState = T;
      h.firstBaseUpdate = F;
      h.lastBaseUpdate = K;
      s = h.shared.interleaved;
      if (s !== null) {
        h = s;
        do {
          v |= h.lane;
          h = h.next;
        } while (h !== s);
      } else if (p === null) {
        h.shared.lanes = 0;
      }
      ei |= v;
      r.lanes = v;
      r.memoizedState = G;
    }
  }
  function Zf(r, s, o) {
    r = s.effects;
    s.effects = null;
    if (r !== null) {
      for (s = 0; s < r.length; s++) {
        var c = r[s];
        var h = c.callback;
        if (h !== null) {
          c.callback = null;
          c = o;
          if (typeof h != "function") {
            throw Error(n(191, h));
          }
          h.call(c);
        }
      }
    }
  }
  var qo = {};
  var gn = cs(qo);
  var Ko = cs(qo);
  var Go = cs(qo);
  function Xs(r) {
    if (r === qo) {
      throw Error(n(174));
    }
    return r;
  }
  function Rc(r, s) {
    st(Go, s);
    st(Ko, r);
    st(gn, qo);
    r = s.nodeType;
    switch (r) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : An(null, "");
        break;
      default:
        r = r === 8 ? s.parentNode : s;
        s = r.namespaceURI || null;
        r = r.tagName;
        s = An(s, r);
    }
    at(gn);
    st(gn, s);
  }
  function Bi() {
    at(gn);
    at(Ko);
    at(Go);
  }
  function ep(r) {
    Xs(Go.current);
    var s = Xs(gn.current);
    var o = An(s, r.type);
    if (s !== o) {
      st(Ko, r);
      st(gn, o);
    }
  }
  function Tc(r) {
    if (Ko.current === r) {
      at(gn);
      at(Ko);
    }
  }
  var ht = cs(0);
  function bl(r) {
    for (var s = r; s !== null;) {
      if (s.tag === 13) {
        var o = s.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) {
          return s;
        }
      } else if (s.tag === 19 && s.memoizedProps.revealOrder !== undefined) {
        if ((s.flags & 128) !== 0) {
          return s;
        }
      } else if (s.child !== null) {
        s.child.return = s;
        s = s.child;
        continue;
      }
      if (s === r) {
        break;
      }
      while (s.sibling === null) {
        if (s.return === null || s.return === r) {
          return null;
        }
        s = s.return;
      }
      s.sibling.return = s.return;
      s = s.sibling;
    }
    return null;
  }
  var Cc = [];
  function Pc() {
    for (var r = 0; r < Cc.length; r++) {
      Cc[r]._workInProgressVersionPrimary = null;
    }
    Cc.length = 0;
  }
  var _l = B.ReactCurrentDispatcher;
  var Oc = B.ReactCurrentBatchConfig;
  var Zs = 0;
  var ft = null;
  var Tt = null;
  var It = null;
  var Sl = false;
  var Jo = false;
  var Qo = 0;
  var n0 = 0;
  function qt() {
    throw Error(n(321));
  }
  function Ac(r, s) {
    if (s === null) {
      return false;
    }
    for (var o = 0; o < s.length && o < r.length; o++) {
      if (!Qr(r[o], s[o])) {
        return false;
      }
    }
    return true;
  }
  function Ic(r, s, o, c, h, p) {
    Zs = p;
    ft = s;
    s.memoizedState = null;
    s.updateQueue = null;
    s.lanes = 0;
    _l.current = r === null || r.memoizedState === null ? a0 : l0;
    r = o(c, h);
    if (Jo) {
      p = 0;
      do {
        Jo = false;
        Qo = 0;
        if (p >= 25) {
          throw Error(n(301));
        }
        p += 1;
        It = Tt = null;
        s.updateQueue = null;
        _l.current = u0;
        r = o(c, h);
      } while (Jo);
    }
    _l.current = xl;
    s = Tt !== null && Tt.next !== null;
    Zs = 0;
    It = Tt = ft = null;
    Sl = false;
    if (s) {
      throw Error(n(300));
    }
    return r;
  }
  function jc() {
    var r = Qo !== 0;
    Qo = 0;
    return r;
  }
  function yn() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (It === null) {
      ft.memoizedState = It = r;
    } else {
      It = It.next = r;
    }
    return It;
  }
  function Mr() {
    if (Tt === null) {
      var r = ft.alternate;
      r = r !== null ? r.memoizedState : null;
    } else {
      r = Tt.next;
    }
    var s = It === null ? ft.memoizedState : It.next;
    if (s !== null) {
      It = s;
      Tt = r;
    } else {
      if (r === null) {
        throw Error(n(310));
      }
      Tt = r;
      r = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      };
      if (It === null) {
        ft.memoizedState = It = r;
      } else {
        It = It.next = r;
      }
    }
    return It;
  }
  function Yo(r, s) {
    if (typeof s == "function") {
      return s(r);
    } else {
      return s;
    }
  }
  function Nc(r) {
    var s = Mr();
    var o = s.queue;
    if (o === null) {
      throw Error(n(311));
    }
    o.lastRenderedReducer = r;
    var c = Tt;
    var h = c.baseQueue;
    var p = o.pending;
    if (p !== null) {
      if (h !== null) {
        var v = h.next;
        h.next = p.next;
        p.next = v;
      }
      c.baseQueue = h = p;
      o.pending = null;
    }
    if (h !== null) {
      p = h.next;
      c = c.baseState;
      var S = v = null;
      var T = null;
      var F = p;
      do {
        var K = F.lane;
        if ((Zs & K) === K) {
          if (T !== null) {
            T = T.next = {
              lane: 0,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
          }
          c = F.hasEagerState ? F.eagerState : r(c, F.action);
        } else {
          var G = {
            lane: K,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          if (T === null) {
            S = T = G;
            v = c;
          } else {
            T = T.next = G;
          }
          ft.lanes |= K;
          ei |= K;
        }
        F = F.next;
      } while (F !== null && F !== p);
      if (T === null) {
        v = c;
      } else {
        T.next = S;
      }
      if (!Qr(c, s.memoizedState)) {
        ar = true;
      }
      s.memoizedState = c;
      s.baseState = v;
      s.baseQueue = T;
      o.lastRenderedState = c;
    }
    r = o.interleaved;
    if (r !== null) {
      h = r;
      do {
        p = h.lane;
        ft.lanes |= p;
        ei |= p;
        h = h.next;
      } while (h !== r);
    } else if (h === null) {
      o.lanes = 0;
    }
    return [s.memoizedState, o.dispatch];
  }
  function Lc(r) {
    var s = Mr();
    var o = s.queue;
    if (o === null) {
      throw Error(n(311));
    }
    o.lastRenderedReducer = r;
    var c = o.dispatch;
    var h = o.pending;
    var p = s.memoizedState;
    if (h !== null) {
      o.pending = null;
      var v = h = h.next;
      do {
        p = r(p, v.action);
        v = v.next;
      } while (v !== h);
      if (!Qr(p, s.memoizedState)) {
        ar = true;
      }
      s.memoizedState = p;
      if (s.baseQueue === null) {
        s.baseState = p;
      }
      o.lastRenderedState = p;
    }
    return [p, c];
  }
  function tp() {}
  function rp(r, s) {
    var o = ft;
    var c = Mr();
    var h = s();
    var p = !Qr(c.memoizedState, h);
    if (p) {
      c.memoizedState = h;
      ar = true;
    }
    c = c.queue;
    Dc(ip.bind(null, o, c, r), [r]);
    if (c.getSnapshot !== s || p || It !== null && It.memoizedState.tag & 1) {
      o.flags |= 2048;
      Xo(9, sp.bind(null, o, c, h, s), undefined, null);
      if (jt === null) {
        throw Error(n(349));
      }
      if ((Zs & 30) === 0) {
        np(o, s, h);
      }
    }
    return h;
  }
  function np(r, s, o) {
    r.flags |= 16384;
    r = {
      getSnapshot: s,
      value: o
    };
    s = ft.updateQueue;
    if (s === null) {
      s = {
        lastEffect: null,
        stores: null
      };
      ft.updateQueue = s;
      s.stores = [r];
    } else {
      o = s.stores;
      if (o === null) {
        s.stores = [r];
      } else {
        o.push(r);
      }
    }
  }
  function sp(r, s, o, c) {
    s.value = o;
    s.getSnapshot = c;
    if (op(s)) {
      ap(r);
    }
  }
  function ip(r, s, o) {
    return o(function () {
      if (op(s)) {
        ap(r);
      }
    });
  }
  function op(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var o = s();
      return !Qr(r, o);
    } catch {
      return true;
    }
  }
  function ap(r) {
    var s = zn(r, 1);
    if (s !== null) {
      tn(s, r, 1, -1);
    }
  }
  function lp(r) {
    var s = yn();
    if (typeof r == "function") {
      r = r();
    }
    s.memoizedState = s.baseState = r;
    r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yo,
      lastRenderedState: r
    };
    s.queue = r;
    r = r.dispatch = o0.bind(null, ft, r);
    return [s.memoizedState, r];
  }
  function Xo(r, s, o, c) {
    r = {
      tag: r,
      create: s,
      destroy: o,
      deps: c,
      next: null
    };
    s = ft.updateQueue;
    if (s === null) {
      s = {
        lastEffect: null,
        stores: null
      };
      ft.updateQueue = s;
      s.lastEffect = r.next = r;
    } else {
      o = s.lastEffect;
      if (o === null) {
        s.lastEffect = r.next = r;
      } else {
        c = o.next;
        o.next = r;
        r.next = c;
        s.lastEffect = r;
      }
    }
    return r;
  }
  function up() {
    return Mr().memoizedState;
  }
  function kl(r, s, o, c) {
    var h = yn();
    ft.flags |= r;
    h.memoizedState = Xo(s | 1, o, undefined, c === undefined ? null : c);
  }
  function El(r, s, o, c) {
    var h = Mr();
    c = c === undefined ? null : c;
    var p = undefined;
    if (Tt !== null) {
      var v = Tt.memoizedState;
      p = v.destroy;
      if (c !== null && Ac(c, v.deps)) {
        h.memoizedState = Xo(s, o, p, c);
        return;
      }
    }
    ft.flags |= r;
    h.memoizedState = Xo(s | 1, o, p, c);
  }
  function cp(r, s) {
    return kl(8390656, 8, r, s);
  }
  function Dc(r, s) {
    return El(2048, 8, r, s);
  }
  function dp(r, s) {
    return El(4, 2, r, s);
  }
  function hp(r, s) {
    return El(4, 4, r, s);
  }
  function fp(r, s) {
    if (typeof s == "function") {
      r = r();
      s(r);
      return function () {
        s(null);
      };
    }
    if (s != null) {
      r = r();
      s.current = r;
      return function () {
        s.current = null;
      };
    }
  }
  function pp(r, s, o) {
    o = o != null ? o.concat([r]) : null;
    return El(4, 4, fp.bind(null, s, r), o);
  }
  function Uc() {}
  function mp(r, s) {
    var o = Mr();
    s = s === undefined ? null : s;
    var c = o.memoizedState;
    if (c !== null && s !== null && Ac(s, c[1])) {
      return c[0];
    } else {
      o.memoizedState = [r, s];
      return r;
    }
  }
  function gp(r, s) {
    var o = Mr();
    s = s === undefined ? null : s;
    var c = o.memoizedState;
    if (c !== null && s !== null && Ac(s, c[1])) {
      return c[0];
    } else {
      r = r();
      o.memoizedState = [r, s];
      return r;
    }
  }
  function yp(r, s, o) {
    if ((Zs & 21) === 0) {
      if (r.baseState) {
        r.baseState = false;
        ar = true;
      }
      return r.memoizedState = o;
    } else {
      if (!Qr(o, s)) {
        o = qh();
        ft.lanes |= o;
        ei |= o;
        r.baseState = true;
      }
      return s;
    }
  }
  function s0(r, s) {
    var o = et;
    et = o !== 0 && o < 4 ? o : 4;
    r(true);
    var c = Oc.transition;
    Oc.transition = {};
    try {
      r(false);
      s();
    } finally {
      et = o;
      Oc.transition = c;
    }
  }
  function vp() {
    return Mr().memoizedState;
  }
  function i0(r, s, o) {
    var c = vs(r);
    o = {
      lane: c,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (wp(r)) {
      bp(s, o);
    } else {
      o = Qf(r, s, o, c);
      if (o !== null) {
        var h = tr();
        tn(o, r, c, h);
        _p(o, s, c);
      }
    }
  }
  function o0(r, s, o) {
    var c = vs(r);
    var h = {
      lane: c,
      action: o,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (wp(r)) {
      bp(s, h);
    } else {
      var p = r.alternate;
      if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer, p !== null)) {
        try {
          var v = s.lastRenderedState;
          var S = p(v, o);
          h.hasEagerState = true;
          h.eagerState = S;
          if (Qr(S, v)) {
            var T = s.interleaved;
            if (T === null) {
              h.next = h;
              Ec(s);
            } else {
              h.next = T.next;
              T.next = h;
            }
            s.interleaved = h;
            return;
          }
        } catch {} finally {}
      }
      o = Qf(r, s, h, c);
      if (o !== null) {
        h = tr();
        tn(o, r, c, h);
        _p(o, s, c);
      }
    }
  }
  function wp(r) {
    var s = r.alternate;
    return r === ft || s !== null && s === ft;
  }
  function bp(r, s) {
    Jo = Sl = true;
    var o = r.pending;
    if (o === null) {
      s.next = s;
    } else {
      s.next = o.next;
      o.next = s;
    }
    r.pending = s;
  }
  function _p(r, s, o) {
    if ((o & 4194240) !== 0) {
      var c = s.lanes;
      c &= r.pendingLanes;
      o |= c;
      s.lanes = o;
      $u(r, o);
    }
  }
  var xl = {
    readContext: Ur,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useInsertionEffect: qt,
    useLayoutEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useMutableSource: qt,
    useSyncExternalStore: qt,
    useId: qt,
    unstable_isNewReconciler: false
  };
  var a0 = {
    readContext: Ur,
    useCallback: function (r, s) {
      yn().memoizedState = [r, s === undefined ? null : s];
      return r;
    },
    useContext: Ur,
    useEffect: cp,
    useImperativeHandle: function (r, s, o) {
      o = o != null ? o.concat([r]) : null;
      return kl(4194308, 4, fp.bind(null, s, r), o);
    },
    useLayoutEffect: function (r, s) {
      return kl(4194308, 4, r, s);
    },
    useInsertionEffect: function (r, s) {
      return kl(4, 2, r, s);
    },
    useMemo: function (r, s) {
      var o = yn();
      s = s === undefined ? null : s;
      r = r();
      o.memoizedState = [r, s];
      return r;
    },
    useReducer: function (r, s, o) {
      var c = yn();
      s = o !== undefined ? o(s) : s;
      c.memoizedState = c.baseState = s;
      r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: s
      };
      c.queue = r;
      r = r.dispatch = i0.bind(null, ft, r);
      return [c.memoizedState, r];
    },
    useRef: function (r) {
      var s = yn();
      r = {
        current: r
      };
      return s.memoizedState = r;
    },
    useState: lp,
    useDebugValue: Uc,
    useDeferredValue: function (r) {
      return yn().memoizedState = r;
    },
    useTransition: function () {
      var r = lp(false);
      var s = r[0];
      r = s0.bind(null, r[1]);
      yn().memoizedState = r;
      return [s, r];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (r, s, o) {
      var c = ft;
      var h = yn();
      if (ut) {
        if (o === undefined) {
          throw Error(n(407));
        }
        o = o();
      } else {
        o = s();
        if (jt === null) {
          throw Error(n(349));
        }
        if ((Zs & 30) === 0) {
          np(c, s, o);
        }
      }
      h.memoizedState = o;
      var p = {
        value: o,
        getSnapshot: s
      };
      h.queue = p;
      cp(ip.bind(null, c, p, r), [r]);
      c.flags |= 2048;
      Xo(9, sp.bind(null, c, p, o, s), undefined, null);
      return o;
    },
    useId: function () {
      var r = yn();
      var s = jt.identifierPrefix;
      if (ut) {
        var o = Fn;
        var c = $n;
        o = (c & ~(1 << 32 - tt(c) - 1)).toString(32) + o;
        s = ":" + s + "R" + o;
        o = Qo++;
        if (o > 0) {
          s += "H" + o.toString(32);
        }
        s += ":";
      } else {
        o = n0++;
        s = ":" + s + "r" + o.toString(32) + ":";
      }
      return r.memoizedState = s;
    },
    unstable_isNewReconciler: false
  };
  var l0 = {
    readContext: Ur,
    useCallback: mp,
    useContext: Ur,
    useEffect: Dc,
    useImperativeHandle: pp,
    useInsertionEffect: dp,
    useLayoutEffect: hp,
    useMemo: gp,
    useReducer: Nc,
    useRef: up,
    useState: function () {
      return Nc(Yo);
    },
    useDebugValue: Uc,
    useDeferredValue: function (r) {
      var s = Mr();
      return yp(s, Tt.memoizedState, r);
    },
    useTransition: function () {
      var r = Nc(Yo)[0];
      var s = Mr().memoizedState;
      return [r, s];
    },
    useMutableSource: tp,
    useSyncExternalStore: rp,
    useId: vp,
    unstable_isNewReconciler: false
  };
  var u0 = {
    readContext: Ur,
    useCallback: mp,
    useContext: Ur,
    useEffect: Dc,
    useImperativeHandle: pp,
    useInsertionEffect: dp,
    useLayoutEffect: hp,
    useMemo: gp,
    useReducer: Lc,
    useRef: up,
    useState: function () {
      return Lc(Yo);
    },
    useDebugValue: Uc,
    useDeferredValue: function (r) {
      var s = Mr();
      if (Tt === null) {
        return s.memoizedState = r;
      } else {
        return yp(s, Tt.memoizedState, r);
      }
    },
    useTransition: function () {
      var r = Lc(Yo)[0];
      var s = Mr().memoizedState;
      return [r, s];
    },
    useMutableSource: tp,
    useSyncExternalStore: rp,
    useId: vp,
    unstable_isNewReconciler: false
  };
  function Xr(r, s) {
    if (r && r.defaultProps) {
      s = Y({}, s);
      r = r.defaultProps;
      for (var o in r) {
        if (s[o] === undefined) {
          s[o] = r[o];
        }
      }
      return s;
    }
    return s;
  }
  function Mc(r, s, o, c) {
    s = r.memoizedState;
    o = o(c, s);
    o = o == null ? s : Y({}, s, o);
    r.memoizedState = o;
    if (r.lanes === 0) {
      r.updateQueue.baseState = o;
    }
  }
  var Rl = {
    isMounted: function (r) {
      if (r = r._reactInternals) {
        return we(r) === r;
      } else {
        return false;
      }
    },
    enqueueSetState: function (r, s, o) {
      r = r._reactInternals;
      var c = tr();
      var h = vs(r);
      var p = Bn(c, h);
      p.payload = s;
      if (o != null) {
        p.callback = o;
      }
      s = ps(r, p, h);
      if (s !== null) {
        tn(s, r, h, c);
        vl(s, r, h);
      }
    },
    enqueueReplaceState: function (r, s, o) {
      r = r._reactInternals;
      var c = tr();
      var h = vs(r);
      var p = Bn(c, h);
      p.tag = 1;
      p.payload = s;
      if (o != null) {
        p.callback = o;
      }
      s = ps(r, p, h);
      if (s !== null) {
        tn(s, r, h, c);
        vl(s, r, h);
      }
    },
    enqueueForceUpdate: function (r, s) {
      r = r._reactInternals;
      var o = tr();
      var c = vs(r);
      var h = Bn(o, c);
      h.tag = 2;
      if (s != null) {
        h.callback = s;
      }
      s = ps(r, h, c);
      if (s !== null) {
        tn(s, r, c, o);
        vl(s, r, c);
      }
    }
  };
  function Sp(r, s, o, c, h, p, v) {
    r = r.stateNode;
    if (typeof r.shouldComponentUpdate == "function") {
      return r.shouldComponentUpdate(c, p, v);
    } else if (s.prototype && s.prototype.isPureReactComponent) {
      return !Mo(o, c) || !Mo(h, p);
    } else {
      return true;
    }
  }
  function kp(r, s, o) {
    var c = false;
    var h = ds;
    var p = s.contextType;
    if (typeof p == "object" && p !== null) {
      p = Ur(p);
    } else {
      h = or(s) ? Gs : Vt.current;
      c = s.contextTypes;
      p = (c = c != null) ? Li(r, h) : ds;
    }
    s = new s(o, p);
    r.memoizedState = s.state ?? null;
    s.updater = Rl;
    r.stateNode = s;
    s._reactInternals = r;
    if (c) {
      r = r.stateNode;
      r.__reactInternalMemoizedUnmaskedChildContext = h;
      r.__reactInternalMemoizedMaskedChildContext = p;
    }
    return s;
  }
  function Ep(r, s, o, c) {
    r = s.state;
    if (typeof s.componentWillReceiveProps == "function") {
      s.componentWillReceiveProps(o, c);
    }
    if (typeof s.UNSAFE_componentWillReceiveProps == "function") {
      s.UNSAFE_componentWillReceiveProps(o, c);
    }
    if (s.state !== r) {
      Rl.enqueueReplaceState(s, s.state, null);
    }
  }
  function $c(r, s, o, c) {
    var h = r.stateNode;
    h.props = o;
    h.state = r.memoizedState;
    h.refs = {};
    xc(r);
    var p = s.contextType;
    if (typeof p == "object" && p !== null) {
      h.context = Ur(p);
    } else {
      p = or(s) ? Gs : Vt.current;
      h.context = Li(r, p);
    }
    h.state = r.memoizedState;
    p = s.getDerivedStateFromProps;
    if (typeof p == "function") {
      Mc(r, s, p, o);
      h.state = r.memoizedState;
    }
    if (typeof s.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function")) {
      s = h.state;
      if (typeof h.componentWillMount == "function") {
        h.componentWillMount();
      }
      if (typeof h.UNSAFE_componentWillMount == "function") {
        h.UNSAFE_componentWillMount();
      }
      if (s !== h.state) {
        Rl.enqueueReplaceState(h, h.state, null);
      }
      wl(r, o, h, c);
      h.state = r.memoizedState;
    }
    if (typeof h.componentDidMount == "function") {
      r.flags |= 4194308;
    }
  }
  function Hi(r, s) {
    try {
      var o = "";
      var c = s;
      do {
        o += ve(c);
        c = c.return;
      } while (c);
      var h = o;
    } catch (p) {
      h = `
Error generating stack: ${p.message}
${p.stack}`;
    }
    return {
      value: r,
      source: s,
      stack: h,
      digest: null
    };
  }
  function Fc(r, s, o) {
    return {
      value: r,
      source: null,
      stack: o ?? null,
      digest: s ?? null
    };
  }
  function zc(r, s) {
    try {
      console.error(s.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var c0 = typeof WeakMap == "function" ? WeakMap : Map;
  function xp(r, s, o) {
    o = Bn(-1, o);
    o.tag = 3;
    o.payload = {
      element: null
    };
    var c = s.value;
    o.callback = function () {
      if (!jl) {
        jl = true;
        rd = c;
      }
      zc(r, s);
    };
    return o;
  }
  function Rp(r, s, o) {
    o = Bn(-1, o);
    o.tag = 3;
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = s.value;
      o.payload = function () {
        return c(h);
      };
      o.callback = function () {
        zc(r, s);
      };
    }
    var p = r.stateNode;
    if (p !== null && typeof p.componentDidCatch == "function") {
      o.callback = function () {
        zc(r, s);
        if (typeof c != "function") {
          if (gs === null) {
            gs = new Set([this]);
          } else {
            gs.add(this);
          }
        }
        var v = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: v !== null ? v : ""
        });
      };
    }
    return o;
  }
  function Tp(r, s, o) {
    var c = r.pingCache;
    if (c === null) {
      c = r.pingCache = new c0();
      var h = new Set();
      c.set(s, h);
    } else {
      h = c.get(s);
      if (h === undefined) {
        h = new Set();
        c.set(s, h);
      }
    }
    if (!h.has(o)) {
      h.add(o);
      r = E0.bind(null, r, s, o);
      s.then(r, r);
    }
  }
  function Cp(r) {
    do {
      var s;
      if (s = r.tag === 13) {
        s = r.memoizedState;
        s = s !== null ? s.dehydrated !== null : true;
      }
      if (s) {
        return r;
      }
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Pp(r, s, o, c, h) {
    if ((r.mode & 1) === 0) {
      if (r === s) {
        r.flags |= 65536;
      } else {
        r.flags |= 128;
        o.flags |= 131072;
        o.flags &= -52805;
        if (o.tag === 1) {
          if (o.alternate === null) {
            o.tag = 17;
          } else {
            s = Bn(-1, 1);
            s.tag = 2;
            ps(o, s, 1);
          }
        }
        o.lanes |= 1;
      }
      return r;
    } else {
      r.flags |= 65536;
      r.lanes = h;
      return r;
    }
  }
  var d0 = B.ReactCurrentOwner;
  var ar = false;
  function er(r, s, o, c) {
    s.child = r === null ? Jf(s, null, o, c) : $i(s, r.child, o, c);
  }
  function Op(r, s, o, c, h) {
    o = o.render;
    var p = s.ref;
    zi(s, h);
    c = Ic(r, s, o, c, p, h);
    o = jc();
    if (r !== null && !ar) {
      s.updateQueue = r.updateQueue;
      s.flags &= -2053;
      r.lanes &= ~h;
      return Hn(r, s, h);
    } else {
      if (ut && o) {
        mc(s);
      }
      s.flags |= 1;
      er(r, s, c, h);
      return s.child;
    }
  }
  function Ap(r, s, o, c, h) {
    if (r === null) {
      var p = o.type;
      if (typeof p == "function" && !ud(p) && p.defaultProps === undefined && o.compare === null && o.defaultProps === undefined) {
        s.tag = 15;
        s.type = p;
        return Ip(r, s, p, c, h);
      } else {
        r = $l(o.type, null, c, s, s.mode, h);
        r.ref = s.ref;
        r.return = s;
        return s.child = r;
      }
    }
    p = r.child;
    if ((r.lanes & h) === 0) {
      var v = p.memoizedProps;
      o = o.compare;
      o = o !== null ? o : Mo;
      if (o(v, c) && r.ref === s.ref) {
        return Hn(r, s, h);
      }
    }
    s.flags |= 1;
    r = bs(p, c);
    r.ref = s.ref;
    r.return = s;
    return s.child = r;
  }
  function Ip(r, s, o, c, h) {
    if (r !== null) {
      var p = r.memoizedProps;
      if (Mo(p, c) && r.ref === s.ref) {
        ar = false;
        s.pendingProps = c = p;
        if ((r.lanes & h) !== 0) {
          if ((r.flags & 131072) !== 0) {
            ar = true;
          }
        } else {
          s.lanes = r.lanes;
          return Hn(r, s, h);
        }
      }
    }
    return Bc(r, s, o, c, h);
  }
  function jp(r, s, o) {
    var c = s.pendingProps;
    var h = c.children;
    var p = r !== null ? r.memoizedState : null;
    if (c.mode === "hidden") {
      if ((s.mode & 1) === 0) {
        s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        st(Vi, Er);
        Er |= o;
      } else {
        if ((o & 1073741824) === 0) {
          r = p !== null ? p.baseLanes | o : o;
          s.lanes = s.childLanes = 1073741824;
          s.memoizedState = {
            baseLanes: r,
            cachePool: null,
            transitions: null
          };
          s.updateQueue = null;
          st(Vi, Er);
          Er |= r;
          return null;
        }
        s.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        c = p !== null ? p.baseLanes : o;
        st(Vi, Er);
        Er |= c;
      }
    } else {
      if (p !== null) {
        c = p.baseLanes | o;
        s.memoizedState = null;
      } else {
        c = o;
      }
      st(Vi, Er);
      Er |= c;
    }
    er(r, s, h, o);
    return s.child;
  }
  function Np(r, s) {
    var o = s.ref;
    if (r === null && o !== null || r !== null && r.ref !== o) {
      s.flags |= 512;
      s.flags |= 2097152;
    }
  }
  function Bc(r, s, o, c, h) {
    var p = or(o) ? Gs : Vt.current;
    p = Li(s, p);
    zi(s, h);
    o = Ic(r, s, o, c, p, h);
    c = jc();
    if (r !== null && !ar) {
      s.updateQueue = r.updateQueue;
      s.flags &= -2053;
      r.lanes &= ~h;
      return Hn(r, s, h);
    } else {
      if (ut && c) {
        mc(s);
      }
      s.flags |= 1;
      er(r, s, o, h);
      return s.child;
    }
  }
  function Lp(r, s, o, c, h) {
    if (or(o)) {
      var p = true;
      cl(s);
    } else {
      p = false;
    }
    zi(s, h);
    if (s.stateNode === null) {
      Cl(r, s);
      kp(s, o, c);
      $c(s, o, c, h);
      c = true;
    } else if (r === null) {
      var v = s.stateNode;
      var S = s.memoizedProps;
      v.props = S;
      var T = v.context;
      var F = o.contextType;
      if (typeof F == "object" && F !== null) {
        F = Ur(F);
      } else {
        F = or(o) ? Gs : Vt.current;
        F = Li(s, F);
      }
      var K = o.getDerivedStateFromProps;
      var G = typeof K == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      if (!G && (typeof v.UNSAFE_componentWillReceiveProps == "function" || typeof v.componentWillReceiveProps == "function")) {
        if (S !== c || T !== F) {
          Ep(s, v, c, F);
        }
      }
      fs = false;
      var V = s.memoizedState;
      v.state = V;
      wl(s, c, v, h);
      T = s.memoizedState;
      if (S !== c || V !== T || ir.current || fs) {
        if (typeof K == "function") {
          Mc(s, o, K, c);
          T = s.memoizedState;
        }
        if (S = fs || Sp(s, o, S, c, V, T, F)) {
          if (!G && (typeof v.UNSAFE_componentWillMount == "function" || typeof v.componentWillMount == "function")) {
            if (typeof v.componentWillMount == "function") {
              v.componentWillMount();
            }
            if (typeof v.UNSAFE_componentWillMount == "function") {
              v.UNSAFE_componentWillMount();
            }
          }
          if (typeof v.componentDidMount == "function") {
            s.flags |= 4194308;
          }
        } else {
          if (typeof v.componentDidMount == "function") {
            s.flags |= 4194308;
          }
          s.memoizedProps = c;
          s.memoizedState = T;
        }
        v.props = c;
        v.state = T;
        v.context = F;
        c = S;
      } else {
        if (typeof v.componentDidMount == "function") {
          s.flags |= 4194308;
        }
        c = false;
      }
    } else {
      v = s.stateNode;
      Yf(r, s);
      S = s.memoizedProps;
      F = s.type === s.elementType ? S : Xr(s.type, S);
      v.props = F;
      G = s.pendingProps;
      V = v.context;
      T = o.contextType;
      if (typeof T == "object" && T !== null) {
        T = Ur(T);
      } else {
        T = or(o) ? Gs : Vt.current;
        T = Li(s, T);
      }
      var ae = o.getDerivedStateFromProps;
      if (!(K = typeof ae == "function" || typeof v.getSnapshotBeforeUpdate == "function") && (typeof v.UNSAFE_componentWillReceiveProps == "function" || typeof v.componentWillReceiveProps == "function")) {
        if (S !== G || V !== T) {
          Ep(s, v, c, T);
        }
      }
      fs = false;
      V = s.memoizedState;
      v.state = V;
      wl(s, c, v, h);
      var fe = s.memoizedState;
      if (S !== G || V !== fe || ir.current || fs) {
        if (typeof ae == "function") {
          Mc(s, o, ae, c);
          fe = s.memoizedState;
        }
        if (F = fs || Sp(s, o, F, c, V, fe, T) || false) {
          if (!K && (typeof v.UNSAFE_componentWillUpdate == "function" || typeof v.componentWillUpdate == "function")) {
            if (typeof v.componentWillUpdate == "function") {
              v.componentWillUpdate(c, fe, T);
            }
            if (typeof v.UNSAFE_componentWillUpdate == "function") {
              v.UNSAFE_componentWillUpdate(c, fe, T);
            }
          }
          if (typeof v.componentDidUpdate == "function") {
            s.flags |= 4;
          }
          if (typeof v.getSnapshotBeforeUpdate == "function") {
            s.flags |= 1024;
          }
        } else {
          if (typeof v.componentDidUpdate == "function" && (S !== r.memoizedProps || V !== r.memoizedState)) {
            s.flags |= 4;
          }
          if (typeof v.getSnapshotBeforeUpdate == "function" && (S !== r.memoizedProps || V !== r.memoizedState)) {
            s.flags |= 1024;
          }
          s.memoizedProps = c;
          s.memoizedState = fe;
        }
        v.props = c;
        v.state = fe;
        v.context = T;
        c = F;
      } else {
        if (typeof v.componentDidUpdate == "function" && (S !== r.memoizedProps || V !== r.memoizedState)) {
          s.flags |= 4;
        }
        if (typeof v.getSnapshotBeforeUpdate == "function" && (S !== r.memoizedProps || V !== r.memoizedState)) {
          s.flags |= 1024;
        }
        c = false;
      }
    }
    return Hc(r, s, o, c, p, h);
  }
  function Hc(r, s, o, c, h, p) {
    Np(r, s);
    var v = (s.flags & 128) !== 0;
    if (!c && !v) {
      if (h) {
        Ff(s, o, false);
      }
      return Hn(r, s, p);
    }
    c = s.stateNode;
    d0.current = s;
    var S = v && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    s.flags |= 1;
    if (r !== null && v) {
      s.child = $i(s, r.child, null, p);
      s.child = $i(s, null, S, p);
    } else {
      er(r, s, S, p);
    }
    s.memoizedState = c.state;
    if (h) {
      Ff(s, o, true);
    }
    return s.child;
  }
  function Dp(r) {
    var s = r.stateNode;
    if (s.pendingContext) {
      Mf(r, s.pendingContext, s.pendingContext !== s.context);
    } else if (s.context) {
      Mf(r, s.context, false);
    }
    Rc(r, s.containerInfo);
  }
  function Up(r, s, o, c, h) {
    Mi();
    wc(h);
    s.flags |= 256;
    er(r, s, o, c);
    return s.child;
  }
  var Wc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Vc(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function Mp(r, s, o) {
    var c = s.pendingProps;
    var h = ht.current;
    var p = false;
    var v = (s.flags & 128) !== 0;
    var S;
    if (!(S = v)) {
      S = r !== null && r.memoizedState === null ? false : (h & 2) !== 0;
    }
    if (S) {
      p = true;
      s.flags &= -129;
    } else if (r === null || r.memoizedState !== null) {
      h |= 1;
    }
    st(ht, h & 1);
    if (r === null) {
      vc(s);
      r = s.memoizedState;
      if (r !== null && (r = r.dehydrated, r !== null)) {
        if ((s.mode & 1) === 0) {
          s.lanes = 1;
        } else if (r.data === "$!") {
          s.lanes = 8;
        } else {
          s.lanes = 1073741824;
        }
        return null;
      } else {
        v = c.children;
        r = c.fallback;
        if (p) {
          c = s.mode;
          p = s.child;
          v = {
            mode: "hidden",
            children: v
          };
          if ((c & 1) === 0 && p !== null) {
            p.childLanes = 0;
            p.pendingProps = v;
          } else {
            p = Fl(v, c, 0, null);
          }
          r = si(r, c, o, null);
          p.return = s;
          r.return = s;
          p.sibling = r;
          s.child = p;
          s.child.memoizedState = Vc(o);
          s.memoizedState = Wc;
          return r;
        } else {
          return qc(s, v);
        }
      }
    }
    h = r.memoizedState;
    if (h !== null && (S = h.dehydrated, S !== null)) {
      return h0(r, s, v, c, S, h, o);
    }
    if (p) {
      p = c.fallback;
      v = s.mode;
      h = r.child;
      S = h.sibling;
      var T = {
        mode: "hidden",
        children: c.children
      };
      if ((v & 1) === 0 && s.child !== h) {
        c = s.child;
        c.childLanes = 0;
        c.pendingProps = T;
        s.deletions = null;
      } else {
        c = bs(h, T);
        c.subtreeFlags = h.subtreeFlags & 14680064;
      }
      if (S !== null) {
        p = bs(S, p);
      } else {
        p = si(p, v, o, null);
        p.flags |= 2;
      }
      p.return = s;
      c.return = s;
      c.sibling = p;
      s.child = c;
      c = p;
      p = s.child;
      v = r.child.memoizedState;
      v = v === null ? Vc(o) : {
        baseLanes: v.baseLanes | o,
        cachePool: null,
        transitions: v.transitions
      };
      p.memoizedState = v;
      p.childLanes = r.childLanes & ~o;
      s.memoizedState = Wc;
      return c;
    }
    p = r.child;
    r = p.sibling;
    c = bs(p, {
      mode: "visible",
      children: c.children
    });
    if ((s.mode & 1) === 0) {
      c.lanes = o;
    }
    c.return = s;
    c.sibling = null;
    if (r !== null) {
      o = s.deletions;
      if (o === null) {
        s.deletions = [r];
        s.flags |= 16;
      } else {
        o.push(r);
      }
    }
    s.child = c;
    s.memoizedState = null;
    return c;
  }
  function qc(r, s) {
    s = Fl({
      mode: "visible",
      children: s
    }, r.mode, 0, null);
    s.return = r;
    return r.child = s;
  }
  function Tl(r, s, o, c) {
    if (c !== null) {
      wc(c);
    }
    $i(s, r.child, null, o);
    r = qc(s, s.pendingProps.children);
    r.flags |= 2;
    s.memoizedState = null;
    return r;
  }
  function h0(r, s, o, c, h, p, v) {
    if (o) {
      if (s.flags & 256) {
        s.flags &= -257;
        c = Fc(Error(n(422)));
        return Tl(r, s, v, c);
      } else if (s.memoizedState !== null) {
        s.child = r.child;
        s.flags |= 128;
        return null;
      } else {
        p = c.fallback;
        h = s.mode;
        c = Fl({
          mode: "visible",
          children: c.children
        }, h, 0, null);
        p = si(p, h, v, null);
        p.flags |= 2;
        c.return = s;
        p.return = s;
        c.sibling = p;
        s.child = c;
        if ((s.mode & 1) !== 0) {
          $i(s, r.child, null, v);
        }
        s.child.memoizedState = Vc(v);
        s.memoizedState = Wc;
        return p;
      }
    }
    if ((s.mode & 1) === 0) {
      return Tl(r, s, v, null);
    }
    if (h.data === "$!") {
      c = h.nextSibling && h.nextSibling.dataset;
      if (c) {
        var S = c.dgst;
      }
      c = S;
      p = Error(n(419));
      c = Fc(p, c, undefined);
      return Tl(r, s, v, c);
    }
    S = (v & r.childLanes) !== 0;
    if (ar || S) {
      c = jt;
      if (c !== null) {
        switch (v & -v) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = (h & (c.suspendedLanes | v)) !== 0 ? 0 : h;
        if (h !== 0 && h !== p.retryLane) {
          p.retryLane = h;
          zn(r, h);
          tn(c, r, h, -1);
        }
      }
      ld();
      c = Fc(Error(n(421)));
      return Tl(r, s, v, c);
    }
    if (h.data === "$?") {
      s.flags |= 128;
      s.child = r.child;
      s = x0.bind(null, r);
      h._reactRetry = s;
      return null;
    } else {
      r = p.treeContext;
      kr = us(h.nextSibling);
      Sr = s;
      ut = true;
      Yr = null;
      if (r !== null) {
        Lr[Dr++] = $n;
        Lr[Dr++] = Fn;
        Lr[Dr++] = Js;
        $n = r.id;
        Fn = r.overflow;
        Js = s;
      }
      s = qc(s, c.children);
      s.flags |= 4096;
      return s;
    }
  }
  function $p(r, s, o) {
    r.lanes |= s;
    var c = r.alternate;
    if (c !== null) {
      c.lanes |= s;
    }
    kc(r.return, s, o);
  }
  function Kc(r, s, o, c, h) {
    var p = r.memoizedState;
    if (p === null) {
      r.memoizedState = {
        isBackwards: s,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: o,
        tailMode: h
      };
    } else {
      p.isBackwards = s;
      p.rendering = null;
      p.renderingStartTime = 0;
      p.last = c;
      p.tail = o;
      p.tailMode = h;
    }
  }
  function Fp(r, s, o) {
    var c = s.pendingProps;
    var h = c.revealOrder;
    var p = c.tail;
    er(r, s, c.children, o);
    c = ht.current;
    if ((c & 2) !== 0) {
      c = c & 1 | 2;
      s.flags |= 128;
    } else {
      if (r !== null && (r.flags & 128) !== 0) {
        e: for (r = s.child; r !== null;) {
          if (r.tag === 13) {
            if (r.memoizedState !== null) {
              $p(r, o, s);
            }
          } else if (r.tag === 19) {
            $p(r, o, s);
          } else if (r.child !== null) {
            r.child.return = r;
            r = r.child;
            continue;
          }
          if (r === s) {
            break e;
          }
          while (r.sibling === null) {
            if (r.return === null || r.return === s) {
              break e;
            }
            r = r.return;
          }
          r.sibling.return = r.return;
          r = r.sibling;
        }
      }
      c &= 1;
    }
    st(ht, c);
    if ((s.mode & 1) === 0) {
      s.memoizedState = null;
    } else {
      switch (h) {
        case "forwards":
          o = s.child;
          h = null;
          while (o !== null) {
            r = o.alternate;
            if (r !== null && bl(r) === null) {
              h = o;
            }
            o = o.sibling;
          }
          o = h;
          if (o === null) {
            h = s.child;
            s.child = null;
          } else {
            h = o.sibling;
            o.sibling = null;
          }
          Kc(s, false, h, o, p);
          break;
        case "backwards":
          o = null;
          h = s.child;
          s.child = null;
          while (h !== null) {
            r = h.alternate;
            if (r !== null && bl(r) === null) {
              s.child = h;
              break;
            }
            r = h.sibling;
            h.sibling = o;
            o = h;
            h = r;
          }
          Kc(s, true, o, null, p);
          break;
        case "together":
          Kc(s, false, null, null, undefined);
          break;
        default:
          s.memoizedState = null;
      }
    }
    return s.child;
  }
  function Cl(r, s) {
    if ((s.mode & 1) === 0 && r !== null) {
      r.alternate = null;
      s.alternate = null;
      s.flags |= 2;
    }
  }
  function Hn(r, s, o) {
    if (r !== null) {
      s.dependencies = r.dependencies;
    }
    ei |= s.lanes;
    if ((o & s.childLanes) === 0) {
      return null;
    }
    if (r !== null && s.child !== r.child) {
      throw Error(n(153));
    }
    if (s.child !== null) {
      r = s.child;
      o = bs(r, r.pendingProps);
      s.child = o;
      o.return = s;
      while (r.sibling !== null) {
        r = r.sibling;
        o = o.sibling = bs(r, r.pendingProps);
        o.return = s;
      }
      o.sibling = null;
    }
    return s.child;
  }
  function f0(r, s, o) {
    switch (s.tag) {
      case 3:
        Dp(s);
        Mi();
        break;
      case 5:
        ep(s);
        break;
      case 1:
        if (or(s.type)) {
          cl(s);
        }
        break;
      case 4:
        Rc(s, s.stateNode.containerInfo);
        break;
      case 10:
        var c = s.type._context;
        var h = s.memoizedProps.value;
        st(gl, c._currentValue);
        c._currentValue = h;
        break;
      case 13:
        c = s.memoizedState;
        if (c !== null) {
          if (c.dehydrated !== null) {
            st(ht, ht.current & 1);
            s.flags |= 128;
            return null;
          } else if ((o & s.child.childLanes) !== 0) {
            return Mp(r, s, o);
          } else {
            st(ht, ht.current & 1);
            r = Hn(r, s, o);
            if (r !== null) {
              return r.sibling;
            } else {
              return null;
            }
          }
        }
        st(ht, ht.current & 1);
        break;
      case 19:
        c = (o & s.childLanes) !== 0;
        if ((r.flags & 128) !== 0) {
          if (c) {
            return Fp(r, s, o);
          }
          s.flags |= 128;
        }
        h = s.memoizedState;
        if (h !== null) {
          h.rendering = null;
          h.tail = null;
          h.lastEffect = null;
        }
        st(ht, ht.current);
        if (c) {
          break;
        }
        return null;
      case 22:
      case 23:
        s.lanes = 0;
        return jp(r, s, o);
    }
    return Hn(r, s, o);
  }
  var zp;
  var Gc;
  var Bp;
  var Hp;
  zp = function (r, s) {
    for (var o = s.child; o !== null;) {
      if (o.tag === 5 || o.tag === 6) {
        r.appendChild(o.stateNode);
      } else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o;
        o = o.child;
        continue;
      }
      if (o === s) {
        break;
      }
      while (o.sibling === null) {
        if (o.return === null || o.return === s) {
          return;
        }
        o = o.return;
      }
      o.sibling.return = o.return;
      o = o.sibling;
    }
  };
  Gc = function () {};
  Bp = function (r, s, o, c) {
    var h = r.memoizedProps;
    if (h !== c) {
      r = s.stateNode;
      Xs(gn.current);
      var p = null;
      switch (o) {
        case "input":
          h = an(r, h);
          c = an(r, c);
          p = [];
          break;
        case "select":
          h = Y({}, h, {
            value: undefined
          });
          c = Y({}, c, {
            value: undefined
          });
          p = [];
          break;
        case "textarea":
          h = Rt(r, h);
          c = Rt(r, c);
          p = [];
          break;
        default:
          if (typeof h.onClick != "function" && typeof c.onClick == "function") {
            r.onclick = al;
          }
      }
      In(o, c);
      var v;
      o = null;
      for (F in h) {
        if (!c.hasOwnProperty(F) && h.hasOwnProperty(F) && h[F] != null) {
          if (F === "style") {
            var S = h[F];
            for (v in S) {
              if (S.hasOwnProperty(v)) {
                o ||= {};
                o[v] = "";
              }
            }
          } else if (F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus") {
            if (a.hasOwnProperty(F)) {
              p ||= [];
            } else {
              (p = p || []).push(F, null);
            }
          }
        }
      }
      for (F in c) {
        var T = c[F];
        S = h != null ? h[F] : undefined;
        if (c.hasOwnProperty(F) && T !== S && (T != null || S != null)) {
          if (F === "style") {
            if (S) {
              for (v in S) {
                if (!!S.hasOwnProperty(v) && (!T || !T.hasOwnProperty(v))) {
                  o ||= {};
                  o[v] = "";
                }
              }
              for (v in T) {
                if (T.hasOwnProperty(v) && S[v] !== T[v]) {
                  o ||= {};
                  o[v] = T[v];
                }
              }
            } else {
              if (!o) {
                p ||= [];
                p.push(F, o);
              }
              o = T;
            }
          } else if (F === "dangerouslySetInnerHTML") {
            T = T ? T.__html : undefined;
            S = S ? S.__html : undefined;
            if (T != null && S !== T) {
              (p = p || []).push(F, T);
            }
          } else if (F === "children") {
            if (typeof T == "string" || typeof T == "number") {
              (p = p || []).push(F, "" + T);
            }
          } else if (F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning") {
            if (a.hasOwnProperty(F)) {
              if (T != null && F === "onScroll") {
                ot("scroll", r);
              }
              if (!p && S !== T) {
                p = [];
              }
            } else {
              (p = p || []).push(F, T);
            }
          }
        }
      }
      if (o) {
        (p = p || []).push("style", o);
      }
      var F = p;
      if (s.updateQueue = F) {
        s.flags |= 4;
      }
    }
  };
  Hp = function (r, s, o, c) {
    if (o !== c) {
      s.flags |= 4;
    }
  };
  function Zo(r, s) {
    if (!ut) {
      switch (r.tailMode) {
        case "hidden":
          s = r.tail;
          var o = null;
          for (; s !== null;) {
            if (s.alternate !== null) {
              o = s;
            }
            s = s.sibling;
          }
          if (o === null) {
            r.tail = null;
          } else {
            o.sibling = null;
          }
          break;
        case "collapsed":
          o = r.tail;
          var c = null;
          for (; o !== null;) {
            if (o.alternate !== null) {
              c = o;
            }
            o = o.sibling;
          }
          if (c === null) {
            if (s || r.tail === null) {
              r.tail = null;
            } else {
              r.tail.sibling = null;
            }
          } else {
            c.sibling = null;
          }
      }
    }
  }
  function Kt(r) {
    var s = r.alternate !== null && r.alternate.child === r.child;
    var o = 0;
    var c = 0;
    if (s) {
      for (var h = r.child; h !== null;) {
        o |= h.lanes | h.childLanes;
        c |= h.subtreeFlags & 14680064;
        c |= h.flags & 14680064;
        h.return = r;
        h = h.sibling;
      }
    } else {
      for (h = r.child; h !== null;) {
        o |= h.lanes | h.childLanes;
        c |= h.subtreeFlags;
        c |= h.flags;
        h.return = r;
        h = h.sibling;
      }
    }
    r.subtreeFlags |= c;
    r.childLanes = o;
    return s;
  }
  function p0(r, s, o) {
    var c = s.pendingProps;
    gc(s);
    switch (s.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        Kt(s);
        return null;
      case 1:
        if (or(s.type)) {
          ul();
        }
        Kt(s);
        return null;
      case 3:
        c = s.stateNode;
        Bi();
        at(ir);
        at(Vt);
        Pc();
        if (c.pendingContext) {
          c.context = c.pendingContext;
          c.pendingContext = null;
        }
        if (r === null || r.child === null) {
          if (pl(s)) {
            s.flags |= 4;
          } else if (r !== null && (!r.memoizedState.isDehydrated || (s.flags & 256) !== 0)) {
            s.flags |= 1024;
            if (Yr !== null) {
              id(Yr);
              Yr = null;
            }
          }
        }
        Gc(r, s);
        Kt(s);
        return null;
      case 5:
        Tc(s);
        var h = Xs(Go.current);
        o = s.type;
        if (r !== null && s.stateNode != null) {
          Bp(r, s, o, c, h);
          if (r.ref !== s.ref) {
            s.flags |= 512;
            s.flags |= 2097152;
          }
        } else {
          if (!c) {
            if (s.stateNode === null) {
              throw Error(n(166));
            }
            Kt(s);
            return null;
          }
          r = Xs(gn.current);
          if (pl(s)) {
            c = s.stateNode;
            o = s.type;
            var p = s.memoizedProps;
            c[mn] = s;
            c[Ho] = p;
            r = (s.mode & 1) !== 0;
            switch (o) {
              case "dialog":
                ot("cancel", c);
                ot("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                ot("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < Fo.length; h++) {
                  ot(Fo[h], c);
                }
                break;
              case "source":
                ot("error", c);
                break;
              case "img":
              case "image":
              case "link":
                ot("error", c);
                ot("load", c);
                break;
              case "details":
                ot("toggle", c);
                break;
              case "input":
                Ei(c, p);
                ot("invalid", c);
                break;
              case "select":
                c._wrapperState = {
                  wasMultiple: !!p.multiple
                };
                ot("invalid", c);
                break;
              case "textarea":
                Gr(c, p);
                ot("invalid", c);
            }
            In(o, p);
            h = null;
            for (var v in p) {
              if (p.hasOwnProperty(v)) {
                var S = p[v];
                if (v === "children") {
                  if (typeof S == "string") {
                    if (c.textContent !== S) {
                      if (p.suppressHydrationWarning !== true) {
                        ol(c.textContent, S, r);
                      }
                      h = ["children", S];
                    }
                  } else if (typeof S == "number" && c.textContent !== "" + S) {
                    if (p.suppressHydrationWarning !== true) {
                      ol(c.textContent, S, r);
                    }
                    h = ["children", "" + S];
                  }
                } else if (a.hasOwnProperty(v) && S != null && v === "onScroll") {
                  ot("scroll", c);
                }
              }
            }
            switch (o) {
              case "input":
                Ar(c);
                Fs(c, p, true);
                break;
              case "textarea":
                Ar(c);
                un(c);
                break;
              case "select":
              case "option":
                break;
              default:
                if (typeof p.onClick == "function") {
                  c.onclick = al;
                }
            }
            c = h;
            s.updateQueue = c;
            if (c !== null) {
              s.flags |= 4;
            }
          } else {
            v = h.nodeType === 9 ? h : h.ownerDocument;
            if (r === "http://www.w3.org/1999/xhtml") {
              r = cn(o);
            }
            if (r === "http://www.w3.org/1999/xhtml") {
              if (o === "script") {
                r = v.createElement("div");
                r.innerHTML = "<script></script>";
                r = r.removeChild(r.firstChild);
              } else if (typeof c.is == "string") {
                r = v.createElement(o, {
                  is: c.is
                });
              } else {
                r = v.createElement(o);
                if (o === "select") {
                  v = r;
                  if (c.multiple) {
                    v.multiple = true;
                  } else if (c.size) {
                    v.size = c.size;
                  }
                }
              }
            } else {
              r = v.createElementNS(r, o);
            }
            r[mn] = s;
            r[Ho] = c;
            zp(r, s, false, false);
            s.stateNode = r;
            e: {
              v = es(o, c);
              switch (o) {
                case "dialog":
                  ot("cancel", r);
                  ot("close", r);
                  h = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ot("load", r);
                  h = c;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < Fo.length; h++) {
                    ot(Fo[h], r);
                  }
                  h = c;
                  break;
                case "source":
                  ot("error", r);
                  h = c;
                  break;
                case "img":
                case "image":
                case "link":
                  ot("error", r);
                  ot("load", r);
                  h = c;
                  break;
                case "details":
                  ot("toggle", r);
                  h = c;
                  break;
                case "input":
                  Ei(r, c);
                  h = an(r, c);
                  ot("invalid", r);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!c.multiple
                  };
                  h = Y({}, c, {
                    value: undefined
                  });
                  ot("invalid", r);
                  break;
                case "textarea":
                  Gr(r, c);
                  h = Rt(r, c);
                  ot("invalid", r);
                  break;
                default:
                  h = c;
              }
              In(o, h);
              S = h;
              for (p in S) {
                if (S.hasOwnProperty(p)) {
                  var T = S[p];
                  if (p === "style") {
                    nr(r, T);
                  } else if (p === "dangerouslySetInnerHTML") {
                    T = T ? T.__html : undefined;
                    if (T != null) {
                      Wt(r, T);
                    }
                  } else if (p === "children") {
                    if (typeof T == "string") {
                      if (o !== "textarea" || T !== "") {
                        Yt(r, T);
                      }
                    } else if (typeof T == "number") {
                      Yt(r, "" + T);
                    }
                  } else if (p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus") {
                    if (a.hasOwnProperty(p)) {
                      if (T != null && p === "onScroll") {
                        ot("scroll", r);
                      }
                    } else if (T != null) {
                      L(r, p, T, v);
                    }
                  }
                }
              }
              switch (o) {
                case "input":
                  Ar(r);
                  Fs(r, c, false);
                  break;
                case "textarea":
                  Ar(r);
                  un(r);
                  break;
                case "option":
                  if (c.value != null) {
                    r.setAttribute("value", "" + je(c.value));
                  }
                  break;
                case "select":
                  r.multiple = !!c.multiple;
                  p = c.value;
                  if (p != null) {
                    ln(r, !!c.multiple, p, false);
                  } else if (c.defaultValue != null) {
                    ln(r, !!c.multiple, c.defaultValue, true);
                  }
                  break;
                default:
                  if (typeof h.onClick == "function") {
                    r.onclick = al;
                  }
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = true;
                  break e;
                default:
                  c = false;
              }
            }
            if (c) {
              s.flags |= 4;
            }
          }
          if (s.ref !== null) {
            s.flags |= 512;
            s.flags |= 2097152;
          }
        }
        Kt(s);
        return null;
      case 6:
        if (r && s.stateNode != null) {
          Hp(r, s, r.memoizedProps, c);
        } else {
          if (typeof c != "string" && s.stateNode === null) {
            throw Error(n(166));
          }
          o = Xs(Go.current);
          Xs(gn.current);
          if (pl(s)) {
            c = s.stateNode;
            o = s.memoizedProps;
            c[mn] = s;
            if ((p = c.nodeValue !== o) && (r = Sr, r !== null)) {
              switch (r.tag) {
                case 3:
                  ol(c.nodeValue, o, (r.mode & 1) !== 0);
                  break;
                case 5:
                  if (r.memoizedProps.suppressHydrationWarning !== true) {
                    ol(c.nodeValue, o, (r.mode & 1) !== 0);
                  }
              }
            }
            if (p) {
              s.flags |= 4;
            }
          } else {
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c);
            c[mn] = s;
            s.stateNode = c;
          }
        }
        Kt(s);
        return null;
      case 13:
        at(ht);
        c = s.memoizedState;
        if (r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (ut && kr !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) {
            qf();
            Mi();
            s.flags |= 98560;
            p = false;
          } else {
            p = pl(s);
            if (c !== null && c.dehydrated !== null) {
              if (r === null) {
                if (!p) {
                  throw Error(n(318));
                }
                p = s.memoizedState;
                p = p !== null ? p.dehydrated : null;
                if (!p) {
                  throw Error(n(317));
                }
                p[mn] = s;
              } else {
                Mi();
                if ((s.flags & 128) === 0) {
                  s.memoizedState = null;
                }
                s.flags |= 4;
              }
              Kt(s);
              p = false;
            } else {
              if (Yr !== null) {
                id(Yr);
                Yr = null;
              }
              p = true;
            }
          }
          if (!p) {
            if (s.flags & 65536) {
              return s;
            } else {
              return null;
            }
          }
        }
        if ((s.flags & 128) !== 0) {
          s.lanes = o;
          return s;
        } else {
          c = c !== null;
          if (c !== (r !== null && r.memoizedState !== null) && c) {
            s.child.flags |= 8192;
            if ((s.mode & 1) !== 0) {
              if (r === null || (ht.current & 1) !== 0) {
                if (Ct === 0) {
                  Ct = 3;
                }
              } else {
                ld();
              }
            }
          }
          if (s.updateQueue !== null) {
            s.flags |= 4;
          }
          Kt(s);
          return null;
        }
      case 4:
        Bi();
        Gc(r, s);
        if (r === null) {
          zo(s.stateNode.containerInfo);
        }
        Kt(s);
        return null;
      case 10:
        Sc(s.type._context);
        Kt(s);
        return null;
      case 17:
        if (or(s.type)) {
          ul();
        }
        Kt(s);
        return null;
      case 19:
        at(ht);
        p = s.memoizedState;
        if (p === null) {
          Kt(s);
          return null;
        }
        c = (s.flags & 128) !== 0;
        v = p.rendering;
        if (v === null) {
          if (c) {
            Zo(p, false);
          } else {
            if (Ct !== 0 || r !== null && (r.flags & 128) !== 0) {
              for (r = s.child; r !== null;) {
                v = bl(r);
                if (v !== null) {
                  s.flags |= 128;
                  Zo(p, false);
                  c = v.updateQueue;
                  if (c !== null) {
                    s.updateQueue = c;
                    s.flags |= 4;
                  }
                  s.subtreeFlags = 0;
                  c = o;
                  o = s.child;
                  while (o !== null) {
                    p = o;
                    r = c;
                    p.flags &= 14680066;
                    v = p.alternate;
                    if (v === null) {
                      p.childLanes = 0;
                      p.lanes = r;
                      p.child = null;
                      p.subtreeFlags = 0;
                      p.memoizedProps = null;
                      p.memoizedState = null;
                      p.updateQueue = null;
                      p.dependencies = null;
                      p.stateNode = null;
                    } else {
                      p.childLanes = v.childLanes;
                      p.lanes = v.lanes;
                      p.child = v.child;
                      p.subtreeFlags = 0;
                      p.deletions = null;
                      p.memoizedProps = v.memoizedProps;
                      p.memoizedState = v.memoizedState;
                      p.updateQueue = v.updateQueue;
                      p.type = v.type;
                      r = v.dependencies;
                      p.dependencies = r === null ? null : {
                        lanes: r.lanes,
                        firstContext: r.firstContext
                      };
                    }
                    o = o.sibling;
                  }
                  st(ht, ht.current & 1 | 2);
                  return s.child;
                }
                r = r.sibling;
              }
            }
            if (p.tail !== null && Ze() > qi) {
              s.flags |= 128;
              c = true;
              Zo(p, false);
              s.lanes = 4194304;
            }
          }
        } else {
          if (!c) {
            r = bl(v);
            if (r !== null) {
              s.flags |= 128;
              c = true;
              o = r.updateQueue;
              if (o !== null) {
                s.updateQueue = o;
                s.flags |= 4;
              }
              Zo(p, true);
              if (p.tail === null && p.tailMode === "hidden" && !v.alternate && !ut) {
                Kt(s);
                return null;
              }
            } else if (Ze() * 2 - p.renderingStartTime > qi && o !== 1073741824) {
              s.flags |= 128;
              c = true;
              Zo(p, false);
              s.lanes = 4194304;
            }
          }
          if (p.isBackwards) {
            v.sibling = s.child;
            s.child = v;
          } else {
            o = p.last;
            if (o !== null) {
              o.sibling = v;
            } else {
              s.child = v;
            }
            p.last = v;
          }
        }
        if (p.tail !== null) {
          s = p.tail;
          p.rendering = s;
          p.tail = s.sibling;
          p.renderingStartTime = Ze();
          s.sibling = null;
          o = ht.current;
          st(ht, c ? o & 1 | 2 : o & 1);
          return s;
        } else {
          Kt(s);
          return null;
        }
      case 22:
      case 23:
        ad();
        c = s.memoizedState !== null;
        if (r !== null && r.memoizedState !== null !== c) {
          s.flags |= 8192;
        }
        if (c && (s.mode & 1) !== 0) {
          if ((Er & 1073741824) !== 0) {
            Kt(s);
            if (s.subtreeFlags & 6) {
              s.flags |= 8192;
            }
          }
        } else {
          Kt(s);
        }
        return null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function m0(r, s) {
    gc(s);
    switch (s.tag) {
      case 1:
        if (or(s.type)) {
          ul();
        }
        r = s.flags;
        if (r & 65536) {
          s.flags = r & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 3:
        Bi();
        at(ir);
        at(Vt);
        Pc();
        r = s.flags;
        if ((r & 65536) !== 0 && (r & 128) === 0) {
          s.flags = r & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 5:
        Tc(s);
        return null;
      case 13:
        at(ht);
        r = s.memoizedState;
        if (r !== null && r.dehydrated !== null) {
          if (s.alternate === null) {
            throw Error(n(340));
          }
          Mi();
        }
        r = s.flags;
        if (r & 65536) {
          s.flags = r & -65537 | 128;
          return s;
        } else {
          return null;
        }
      case 19:
        at(ht);
        return null;
      case 4:
        Bi();
        return null;
      case 10:
        Sc(s.type._context);
        return null;
      case 22:
      case 23:
        ad();
        return null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Pl = false;
  var Gt = false;
  var g0 = typeof WeakSet == "function" ? WeakSet : Set;
  var de = null;
  function Wi(r, s) {
    var o = r.ref;
    if (o !== null) {
      if (typeof o == "function") {
        try {
          o(null);
        } catch (c) {
          mt(r, s, c);
        }
      } else {
        o.current = null;
      }
    }
  }
  function Jc(r, s, o) {
    try {
      o();
    } catch (c) {
      mt(r, s, c);
    }
  }
  var Wp = false;
  function y0(r, s) {
    ac = Ja;
    r = Sf();
    if (Zu(r)) {
      if ("selectionStart" in r) {
        var o = {
          start: r.selectionStart,
          end: r.selectionEnd
        };
      } else {
        e: {
          o = (o = r.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var h = c.anchorOffset;
            var p = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType;
              p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var v = 0;
            var S = -1;
            var T = -1;
            var F = 0;
            var K = 0;
            var G = r;
            var V = null;
            t: while (true) {
              for (var ae; G !== o || h !== 0 && G.nodeType !== 3 || (S = v + h), G !== p || c !== 0 && G.nodeType !== 3 || (T = v + c), G.nodeType === 3 && (v += G.nodeValue.length), (ae = G.firstChild) !== null;) {
                V = G;
                G = ae;
              }
              while (true) {
                if (G === r) {
                  break t;
                }
                if (V === o && ++F === h) {
                  S = v;
                }
                if (V === p && ++K === c) {
                  T = v;
                }
                if ((ae = G.nextSibling) !== null) {
                  break;
                }
                G = V;
                V = G.parentNode;
              }
              G = ae;
            }
            o = S === -1 || T === -1 ? null : {
              start: S,
              end: T
            };
          } else {
            o = null;
          }
        }
      }
      o = o || {
        start: 0,
        end: 0
      };
    } else {
      o = null;
    }
    lc = {
      focusedElem: r,
      selectionRange: o
    };
    Ja = false;
    de = s;
    while (de !== null) {
      s = de;
      r = s.child;
      if ((s.subtreeFlags & 1028) !== 0 && r !== null) {
        r.return = s;
        de = r;
      } else {
        while (de !== null) {
          s = de;
          try {
            var fe = s.alternate;
            if ((s.flags & 1024) !== 0) {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (fe !== null) {
                    var _e = fe.memoizedProps;
                    var _t = fe.memoizedState;
                    var D = s.stateNode;
                    var O = D.getSnapshotBeforeUpdate(s.elementType === s.type ? _e : Xr(s.type, _e), _t);
                    D.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var M = s.stateNode.containerInfo;
                  if (M.nodeType === 1) {
                    M.textContent = "";
                  } else if (M.nodeType === 9 && M.documentElement) {
                    M.removeChild(M.documentElement);
                  }
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(n(163));
              }
            }
          } catch (ee) {
            mt(s, s.return, ee);
          }
          r = s.sibling;
          if (r !== null) {
            r.return = s.return;
            de = r;
            break;
          }
          de = s.return;
        }
      }
    }
    fe = Wp;
    Wp = false;
    return fe;
  }
  function ea(r, s, o) {
    var c = s.updateQueue;
    c = c !== null ? c.lastEffect : null;
    if (c !== null) {
      var h = c = c.next;
      do {
        if ((h.tag & r) === r) {
          var p = h.destroy;
          h.destroy = undefined;
          if (p !== undefined) {
            Jc(s, o, p);
          }
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function Ol(r, s) {
    s = s.updateQueue;
    s = s !== null ? s.lastEffect : null;
    if (s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var c = o.create;
          o.destroy = c();
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Qc(r) {
    var s = r.ref;
    if (s !== null) {
      var o = r.stateNode;
      switch (r.tag) {
        case 5:
          r = o;
          break;
        default:
          r = o;
      }
      if (typeof s == "function") {
        s(r);
      } else {
        s.current = r;
      }
    }
  }
  function Vp(r) {
    var s = r.alternate;
    if (s !== null) {
      r.alternate = null;
      Vp(s);
    }
    r.child = null;
    r.deletions = null;
    r.sibling = null;
    if (r.tag === 5) {
      s = r.stateNode;
      if (s !== null) {
        delete s[mn];
        delete s[Ho];
        delete s[hc];
        delete s[Zw];
        delete s[e0];
      }
    }
    r.stateNode = null;
    r.return = null;
    r.dependencies = null;
    r.memoizedProps = null;
    r.memoizedState = null;
    r.pendingProps = null;
    r.stateNode = null;
    r.updateQueue = null;
  }
  function qp(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Kp(r) {
    e: while (true) {
      while (r.sibling === null) {
        if (r.return === null || qp(r.return)) {
          return null;
        }
        r = r.return;
      }
      r.sibling.return = r.return;
      r = r.sibling;
      while (r.tag !== 5 && r.tag !== 6 && r.tag !== 18) {
        if (r.flags & 2 || r.child === null || r.tag === 4) {
          continue e;
        }
        r.child.return = r;
        r = r.child;
      }
      if (!(r.flags & 2)) {
        return r.stateNode;
      }
    }
  }
  function Yc(r, s, o) {
    var c = r.tag;
    if (c === 5 || c === 6) {
      r = r.stateNode;
      if (s) {
        if (o.nodeType === 8) {
          o.parentNode.insertBefore(r, s);
        } else {
          o.insertBefore(r, s);
        }
      } else {
        if (o.nodeType === 8) {
          s = o.parentNode;
          s.insertBefore(r, o);
        } else {
          s = o;
          s.appendChild(r);
        }
        o = o._reactRootContainer;
        if (o == null && s.onclick === null) {
          s.onclick = al;
        }
      }
    } else if (c !== 4 && (r = r.child, r !== null)) {
      Yc(r, s, o);
      r = r.sibling;
      while (r !== null) {
        Yc(r, s, o);
        r = r.sibling;
      }
    }
  }
  function Xc(r, s, o) {
    var c = r.tag;
    if (c === 5 || c === 6) {
      r = r.stateNode;
      if (s) {
        o.insertBefore(r, s);
      } else {
        o.appendChild(r);
      }
    } else if (c !== 4 && (r = r.child, r !== null)) {
      Xc(r, s, o);
      r = r.sibling;
      while (r !== null) {
        Xc(r, s, o);
        r = r.sibling;
      }
    }
  }
  var Mt = null;
  var Zr = false;
  function ms(r, s, o) {
    for (o = o.child; o !== null;) {
      Gp(r, s, o);
      o = o.sibling;
    }
  }
  function Gp(r, s, o) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function") {
      try {
        Zt.onCommitFiberUnmount(Nn, o);
      } catch {}
    }
    switch (o.tag) {
      case 5:
        if (!Gt) {
          Wi(o, s);
        }
      case 6:
        var c = Mt;
        var h = Zr;
        Mt = null;
        ms(r, s, o);
        Mt = c;
        Zr = h;
        if (Mt !== null) {
          if (Zr) {
            r = Mt;
            o = o.stateNode;
            if (r.nodeType === 8) {
              r.parentNode.removeChild(o);
            } else {
              r.removeChild(o);
            }
          } else {
            Mt.removeChild(o.stateNode);
          }
        }
        break;
      case 18:
        if (Mt !== null) {
          if (Zr) {
            r = Mt;
            o = o.stateNode;
            if (r.nodeType === 8) {
              dc(r.parentNode, o);
            } else if (r.nodeType === 1) {
              dc(r, o);
            }
            Io(r);
          } else {
            dc(Mt, o.stateNode);
          }
        }
        break;
      case 4:
        c = Mt;
        h = Zr;
        Mt = o.stateNode.containerInfo;
        Zr = true;
        ms(r, s, o);
        Mt = c;
        Zr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Gt && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          h = c = c.next;
          do {
            var p = h;
            var v = p.destroy;
            p = p.tag;
            if (v !== undefined && ((p & 2) !== 0 || (p & 4) !== 0)) {
              Jc(o, s, v);
            }
            h = h.next;
          } while (h !== c);
        }
        ms(r, s, o);
        break;
      case 1:
        if (!Gt && (Wi(o, s), c = o.stateNode, typeof c.componentWillUnmount == "function")) {
          try {
            c.props = o.memoizedProps;
            c.state = o.memoizedState;
            c.componentWillUnmount();
          } catch (S) {
            mt(o, s, S);
          }
        }
        ms(r, s, o);
        break;
      case 21:
        ms(r, s, o);
        break;
      case 22:
        if (o.mode & 1) {
          Gt = (c = Gt) || o.memoizedState !== null;
          ms(r, s, o);
          Gt = c;
        } else {
          ms(r, s, o);
        }
        break;
      default:
        ms(r, s, o);
    }
  }
  function Jp(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var o = r.stateNode;
      if (o === null) {
        o = r.stateNode = new g0();
      }
      s.forEach(function (c) {
        var h = R0.bind(null, r, c);
        if (!o.has(c)) {
          o.add(c);
          c.then(h, h);
        }
      });
    }
  }
  function en(r, s) {
    var o = s.deletions;
    if (o !== null) {
      for (var c = 0; c < o.length; c++) {
        var h = o[c];
        try {
          var p = r;
          var v = s;
          var S = v;
          e: while (S !== null) {
            switch (S.tag) {
              case 5:
                Mt = S.stateNode;
                Zr = false;
                break e;
              case 3:
                Mt = S.stateNode.containerInfo;
                Zr = true;
                break e;
              case 4:
                Mt = S.stateNode.containerInfo;
                Zr = true;
                break e;
            }
            S = S.return;
          }
          if (Mt === null) {
            throw Error(n(160));
          }
          Gp(p, v, h);
          Mt = null;
          Zr = false;
          var T = h.alternate;
          if (T !== null) {
            T.return = null;
          }
          h.return = null;
        } catch (F) {
          mt(h, s, F);
        }
      }
    }
    if (s.subtreeFlags & 12854) {
      for (s = s.child; s !== null;) {
        Qp(s, r);
        s = s.sibling;
      }
    }
  }
  function Qp(r, s) {
    var o = r.alternate;
    var c = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        en(s, r);
        vn(r);
        if (c & 4) {
          try {
            ea(3, r, r.return);
            Ol(3, r);
          } catch (_e) {
            mt(r, r.return, _e);
          }
          try {
            ea(5, r, r.return);
          } catch (_e) {
            mt(r, r.return, _e);
          }
        }
        break;
      case 1:
        en(s, r);
        vn(r);
        if (c & 512 && o !== null) {
          Wi(o, o.return);
        }
        break;
      case 5:
        en(s, r);
        vn(r);
        if (c & 512 && o !== null) {
          Wi(o, o.return);
        }
        if (r.flags & 32) {
          var h = r.stateNode;
          try {
            Yt(h, "");
          } catch (_e) {
            mt(r, r.return, _e);
          }
        }
        if (c & 4 && (h = r.stateNode, h != null)) {
          var p = r.memoizedProps;
          var v = o !== null ? o.memoizedProps : p;
          var S = r.type;
          var T = r.updateQueue;
          r.updateQueue = null;
          if (T !== null) {
            try {
              if (S === "input" && p.type === "radio" && p.name != null) {
                yr(h, p);
              }
              es(S, v);
              var F = es(S, p);
              for (v = 0; v < T.length; v += 2) {
                var K = T[v];
                var G = T[v + 1];
                if (K === "style") {
                  nr(h, G);
                } else if (K === "dangerouslySetInnerHTML") {
                  Wt(h, G);
                } else if (K === "children") {
                  Yt(h, G);
                } else {
                  L(h, K, G, F);
                }
              }
              switch (S) {
                case "input":
                  Kr(h, p);
                  break;
                case "textarea":
                  Ir(h, p);
                  break;
                case "select":
                  var V = h._wrapperState.wasMultiple;
                  h._wrapperState.wasMultiple = !!p.multiple;
                  var ae = p.value;
                  if (ae != null) {
                    ln(h, !!p.multiple, ae, false);
                  } else if (V !== !!p.multiple) {
                    if (p.defaultValue != null) {
                      ln(h, !!p.multiple, p.defaultValue, true);
                    } else {
                      ln(h, !!p.multiple, p.multiple ? [] : "", false);
                    }
                  }
              }
              h[Ho] = p;
            } catch (_e) {
              mt(r, r.return, _e);
            }
          }
        }
        break;
      case 6:
        en(s, r);
        vn(r);
        if (c & 4) {
          if (r.stateNode === null) {
            throw Error(n(162));
          }
          h = r.stateNode;
          p = r.memoizedProps;
          try {
            h.nodeValue = p;
          } catch (_e) {
            mt(r, r.return, _e);
          }
        }
        break;
      case 3:
        en(s, r);
        vn(r);
        if (c & 4 && o !== null && o.memoizedState.isDehydrated) {
          try {
            Io(s.containerInfo);
          } catch (_e) {
            mt(r, r.return, _e);
          }
        }
        break;
      case 4:
        en(s, r);
        vn(r);
        break;
      case 13:
        en(s, r);
        vn(r);
        h = r.child;
        if (h.flags & 8192) {
          p = h.memoizedState !== null;
          h.stateNode.isHidden = p;
          if (!!p && (h.alternate === null || h.alternate.memoizedState === null)) {
            td = Ze();
          }
        }
        if (c & 4) {
          Jp(r);
        }
        break;
      case 22:
        K = o !== null && o.memoizedState !== null;
        if (r.mode & 1) {
          Gt = (F = Gt) || K;
          en(s, r);
          Gt = F;
        } else {
          en(s, r);
        }
        vn(r);
        if (c & 8192) {
          F = r.memoizedState !== null;
          if ((r.stateNode.isHidden = F) && !K && (r.mode & 1) !== 0) {
            de = r;
            K = r.child;
            while (K !== null) {
              for (G = de = K; de !== null;) {
                V = de;
                ae = V.child;
                switch (V.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ea(4, V, V.return);
                    break;
                  case 1:
                    Wi(V, V.return);
                    var fe = V.stateNode;
                    if (typeof fe.componentWillUnmount == "function") {
                      c = V;
                      o = V.return;
                      try {
                        s = c;
                        fe.props = s.memoizedProps;
                        fe.state = s.memoizedState;
                        fe.componentWillUnmount();
                      } catch (_e) {
                        mt(c, o, _e);
                      }
                    }
                    break;
                  case 5:
                    Wi(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      Zp(G);
                      continue;
                    }
                }
                if (ae !== null) {
                  ae.return = V;
                  de = ae;
                } else {
                  Zp(G);
                }
              }
              K = K.sibling;
            }
          }
          K = null;
          G = r;
          e: while (true) {
            if (G.tag === 5) {
              if (K === null) {
                K = G;
                try {
                  h = G.stateNode;
                  if (F) {
                    p = h.style;
                    if (typeof p.setProperty == "function") {
                      p.setProperty("display", "none", "important");
                    } else {
                      p.display = "none";
                    }
                  } else {
                    S = G.stateNode;
                    T = G.memoizedProps.style;
                    v = T != null && T.hasOwnProperty("display") ? T.display : null;
                    S.style.display = xi("display", v);
                  }
                } catch (_e) {
                  mt(r, r.return, _e);
                }
              }
            } else if (G.tag === 6) {
              if (K === null) {
                try {
                  G.stateNode.nodeValue = F ? "" : G.memoizedProps;
                } catch (_e) {
                  mt(r, r.return, _e);
                }
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === r) && G.child !== null) {
              G.child.return = G;
              G = G.child;
              continue;
            }
            if (G === r) {
              break e;
            }
            while (G.sibling === null) {
              if (G.return === null || G.return === r) {
                break e;
              }
              if (K === G) {
                K = null;
              }
              G = G.return;
            }
            if (K === G) {
              K = null;
            }
            G.sibling.return = G.return;
            G = G.sibling;
          }
        }
        break;
      case 19:
        en(s, r);
        vn(r);
        if (c & 4) {
          Jp(r);
        }
        break;
      case 21:
        break;
      default:
        en(s, r);
        vn(r);
    }
  }
  function vn(r) {
    var s = r.flags;
    if (s & 2) {
      try {
        e: {
          for (var o = r.return; o !== null;) {
            if (qp(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(n(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            if (c.flags & 32) {
              Yt(h, "");
              c.flags &= -33;
            }
            var p = Kp(r);
            Xc(r, p, h);
            break;
          case 3:
          case 4:
            var v = c.stateNode.containerInfo;
            var S = Kp(r);
            Yc(r, S, v);
            break;
          default:
            throw Error(n(161));
        }
      } catch (T) {
        mt(r, r.return, T);
      }
      r.flags &= -3;
    }
    if (s & 4096) {
      r.flags &= -4097;
    }
  }
  function v0(r, s, o) {
    de = r;
    Yp(r);
  }
  function Yp(r, s, o) {
    var c = (r.mode & 1) !== 0;
    for (; de !== null;) {
      var h = de;
      var p = h.child;
      if (h.tag === 22 && c) {
        var v = h.memoizedState !== null || Pl;
        if (!v) {
          var S = h.alternate;
          var T = S !== null && S.memoizedState !== null || Gt;
          S = Pl;
          var F = Gt;
          Pl = v;
          if ((Gt = T) && !F) {
            for (de = h; de !== null;) {
              v = de;
              T = v.child;
              if (v.tag === 22 && v.memoizedState !== null) {
                em(h);
              } else if (T !== null) {
                T.return = v;
                de = T;
              } else {
                em(h);
              }
            }
          }
          while (p !== null) {
            de = p;
            Yp(p);
            p = p.sibling;
          }
          de = h;
          Pl = S;
          Gt = F;
        }
        Xp(r);
      } else if ((h.subtreeFlags & 8772) !== 0 && p !== null) {
        p.return = h;
        de = p;
      } else {
        Xp(r);
      }
    }
  }
  function Xp(r) {
    while (de !== null) {
      var s = de;
      if ((s.flags & 8772) !== 0) {
        var o = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) {
            switch (s.tag) {
              case 0:
              case 11:
              case 15:
                if (!Gt) {
                  Ol(5, s);
                }
                break;
              case 1:
                var c = s.stateNode;
                if (s.flags & 4 && !Gt) {
                  if (o === null) {
                    c.componentDidMount();
                  } else {
                    var h = s.elementType === s.type ? o.memoizedProps : Xr(s.type, o.memoizedProps);
                    c.componentDidUpdate(h, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                }
                var p = s.updateQueue;
                if (p !== null) {
                  Zf(s, p, c);
                }
                break;
              case 3:
                var v = s.updateQueue;
                if (v !== null) {
                  o = null;
                  if (s.child !== null) {
                    switch (s.child.tag) {
                      case 5:
                        o = s.child.stateNode;
                        break;
                      case 1:
                        o = s.child.stateNode;
                    }
                  }
                  Zf(s, v, o);
                }
                break;
              case 5:
                var S = s.stateNode;
                if (o === null && s.flags & 4) {
                  o = S;
                  var T = s.memoizedProps;
                  switch (s.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      if (T.autoFocus) {
                        o.focus();
                      }
                      break;
                    case "img":
                      if (T.src) {
                        o.src = T.src;
                      }
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (s.memoizedState === null) {
                  var F = s.alternate;
                  if (F !== null) {
                    var K = F.memoizedState;
                    if (K !== null) {
                      var G = K.dehydrated;
                      if (G !== null) {
                        Io(G);
                      }
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(n(163));
            }
          }
          if (!Gt) {
            if (s.flags & 512) {
              Qc(s);
            }
          }
        } catch (V) {
          mt(s, s.return, V);
        }
      }
      if (s === r) {
        de = null;
        break;
      }
      o = s.sibling;
      if (o !== null) {
        o.return = s.return;
        de = o;
        break;
      }
      de = s.return;
    }
  }
  function Zp(r) {
    while (de !== null) {
      var s = de;
      if (s === r) {
        de = null;
        break;
      }
      var o = s.sibling;
      if (o !== null) {
        o.return = s.return;
        de = o;
        break;
      }
      de = s.return;
    }
  }
  function em(r) {
    while (de !== null) {
      var s = de;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var o = s.return;
            try {
              Ol(4, s);
            } catch (T) {
              mt(s, o, T);
            }
            break;
          case 1:
            var c = s.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = s.return;
              try {
                c.componentDidMount();
              } catch (T) {
                mt(s, h, T);
              }
            }
            var p = s.return;
            try {
              Qc(s);
            } catch (T) {
              mt(s, p, T);
            }
            break;
          case 5:
            var v = s.return;
            try {
              Qc(s);
            } catch (T) {
              mt(s, v, T);
            }
        }
      } catch (T) {
        mt(s, s.return, T);
      }
      if (s === r) {
        de = null;
        break;
      }
      var S = s.sibling;
      if (S !== null) {
        S.return = s.return;
        de = S;
        break;
      }
      de = s.return;
    }
  }
  var w0 = Math.ceil;
  var Al = B.ReactCurrentDispatcher;
  var Zc = B.ReactCurrentOwner;
  var $r = B.ReactCurrentBatchConfig;
  var Je = 0;
  var jt = null;
  var Et = null;
  var $t = 0;
  var Er = 0;
  var Vi = cs(0);
  var Ct = 0;
  var ta = null;
  var ei = 0;
  var Il = 0;
  var ed = 0;
  var ra = null;
  var lr = null;
  var td = 0;
  var qi = Infinity;
  var Wn = null;
  var jl = false;
  var rd = null;
  var gs = null;
  var Nl = false;
  var ys = null;
  var Ll = 0;
  var na = 0;
  var nd = null;
  var Dl = -1;
  var Ul = 0;
  function tr() {
    if ((Je & 6) !== 0) {
      return Ze();
    } else if (Dl !== -1) {
      return Dl;
    } else {
      return Dl = Ze();
    }
  }
  function vs(r) {
    if ((r.mode & 1) === 0) {
      return 1;
    } else if ((Je & 2) !== 0 && $t !== 0) {
      return $t & -$t;
    } else if (r0.transition !== null) {
      if (Ul === 0) {
        Ul = qh();
      }
      return Ul;
    } else {
      r = et;
      if (r === 0) {
        r = window.event;
        r = r === undefined ? 16 : tf(r.type);
      }
      return r;
    }
  }
  function tn(r, s, o, c) {
    if (na > 50) {
      na = 0;
      nd = null;
      throw Error(n(185));
    }
    To(r, o, c);
    if ((Je & 2) === 0 || r !== jt) {
      if (r === jt) {
        if ((Je & 2) === 0) {
          Il |= o;
        }
        if (Ct === 4) {
          ws(r, $t);
        }
      }
      ur(r, c);
      if (o === 1 && Je === 0 && (s.mode & 1) === 0) {
        qi = Ze() + 500;
        if (dl) {
          hs();
        }
      }
    }
  }
  function ur(r, s) {
    var o = r.callbackNode;
    rw(r, s);
    var c = qa(r, r === jt ? $t : 0);
    if (c === 0) {
      if (o !== null) {
        At(o);
      }
      r.callbackNode = null;
      r.callbackPriority = 0;
    } else {
      s = c & -c;
      if (r.callbackPriority !== s) {
        if (o != null) {
          At(o);
        }
        if (s === 1) {
          if (r.tag === 0) {
            t0(rm.bind(null, r));
          } else {
            zf(rm.bind(null, r));
          }
          Yw(function () {
            if ((Je & 6) === 0) {
              hs();
            }
          });
          o = null;
        } else {
          switch (Kh(c)) {
            case 1:
              o = Nr;
              break;
            case 4:
              o = br;
              break;
            case 16:
              o = ts;
              break;
            case 536870912:
              o = pn;
              break;
            default:
              o = ts;
          }
          o = cm(o, tm.bind(null, r));
        }
        r.callbackPriority = s;
        r.callbackNode = o;
      }
    }
  }
  function tm(r, s) {
    Dl = -1;
    Ul = 0;
    if ((Je & 6) !== 0) {
      throw Error(n(327));
    }
    var o = r.callbackNode;
    if (Ki() && r.callbackNode !== o) {
      return null;
    }
    var c = qa(r, r === jt ? $t : 0);
    if (c === 0) {
      return null;
    }
    if ((c & 30) !== 0 || (c & r.expiredLanes) !== 0 || s) {
      s = Ml(r, c);
    } else {
      s = c;
      var h = Je;
      Je |= 2;
      var p = sm();
      if (jt !== r || $t !== s) {
        Wn = null;
        qi = Ze() + 500;
        ri(r, s);
      }
      do {
        try {
          S0();
          break;
        } catch (S) {
          nm(r, S);
        }
      } while (true);
      _c();
      Al.current = p;
      Je = h;
      if (Et !== null) {
        s = 0;
      } else {
        jt = null;
        $t = 0;
        s = Ct;
      }
    }
    if (s !== 0) {
      if (s === 2) {
        h = Uu(r);
        if (h !== 0) {
          c = h;
          s = sd(r, h);
        }
      }
      if (s === 1) {
        o = ta;
        ri(r, 0);
        ws(r, c);
        ur(r, Ze());
        throw o;
      }
      if (s === 6) {
        ws(r, c);
      } else {
        h = r.current.alternate;
        if ((c & 30) === 0 && !b0(h) && (s = Ml(r, c), s === 2 && (p = Uu(r), p !== 0 && (c = p, s = sd(r, p))), s === 1)) {
          o = ta;
          ri(r, 0);
          ws(r, c);
          ur(r, Ze());
          throw o;
        }
        r.finishedWork = h;
        r.finishedLanes = c;
        switch (s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            ni(r, lr, Wn);
            break;
          case 3:
            ws(r, c);
            if ((c & 130023424) === c && (s = td + 500 - Ze(), s > 10)) {
              if (qa(r, 0) !== 0) {
                break;
              }
              h = r.suspendedLanes;
              if ((h & c) !== c) {
                tr();
                r.pingedLanes |= r.suspendedLanes & h;
                break;
              }
              r.timeoutHandle = cc(ni.bind(null, r, lr, Wn), s);
              break;
            }
            ni(r, lr, Wn);
            break;
          case 4:
            ws(r, c);
            if ((c & 4194240) === c) {
              break;
            }
            s = r.eventTimes;
            h = -1;
            while (c > 0) {
              var v = 31 - tt(c);
              p = 1 << v;
              v = s[v];
              if (v > h) {
                h = v;
              }
              c &= ~p;
            }
            c = h;
            c = Ze() - c;
            c = (c < 120 ? 120 : c < 480 ? 480 : c < 1080 ? 1080 : c < 1920 ? 1920 : c < 3000 ? 3000 : c < 4320 ? 4320 : w0(c / 1960) * 1960) - c;
            if (c > 10) {
              r.timeoutHandle = cc(ni.bind(null, r, lr, Wn), c);
              break;
            }
            ni(r, lr, Wn);
            break;
          case 5:
            ni(r, lr, Wn);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    ur(r, Ze());
    if (r.callbackNode === o) {
      return tm.bind(null, r);
    } else {
      return null;
    }
  }
  function sd(r, s) {
    var o = ra;
    if (r.current.memoizedState.isDehydrated) {
      ri(r, s).flags |= 256;
    }
    r = Ml(r, s);
    if (r !== 2) {
      s = lr;
      lr = o;
      if (s !== null) {
        id(s);
      }
    }
    return r;
  }
  function id(r) {
    if (lr === null) {
      lr = r;
    } else {
      lr.push.apply(lr, r);
    }
  }
  function b0(r) {
    var s = r;
    for (;;) {
      if (s.flags & 16384) {
        var o = s.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) {
          for (var c = 0; c < o.length; c++) {
            var h = o[c];
            var p = h.getSnapshot;
            h = h.value;
            try {
              if (!Qr(p(), h)) {
                return false;
              }
            } catch {
              return false;
            }
          }
        }
      }
      o = s.child;
      if (s.subtreeFlags & 16384 && o !== null) {
        o.return = s;
        s = o;
      } else {
        if (s === r) {
          break;
        }
        while (s.sibling === null) {
          if (s.return === null || s.return === r) {
            return true;
          }
          s = s.return;
        }
        s.sibling.return = s.return;
        s = s.sibling;
      }
    }
    return true;
  }
  function ws(r, s) {
    s &= ~ed;
    s &= ~Il;
    r.suspendedLanes |= s;
    r.pingedLanes &= ~s;
    r = r.expirationTimes;
    while (s > 0) {
      var o = 31 - tt(s);
      var c = 1 << o;
      r[o] = -1;
      s &= ~c;
    }
  }
  function rm(r) {
    if ((Je & 6) !== 0) {
      throw Error(n(327));
    }
    Ki();
    var s = qa(r, 0);
    if ((s & 1) === 0) {
      ur(r, Ze());
      return null;
    }
    var o = Ml(r, s);
    if (r.tag !== 0 && o === 2) {
      var c = Uu(r);
      if (c !== 0) {
        s = c;
        o = sd(r, c);
      }
    }
    if (o === 1) {
      o = ta;
      ri(r, 0);
      ws(r, s);
      ur(r, Ze());
      throw o;
    }
    if (o === 6) {
      throw Error(n(345));
    }
    r.finishedWork = r.current.alternate;
    r.finishedLanes = s;
    ni(r, lr, Wn);
    ur(r, Ze());
    return null;
  }
  function od(r, s) {
    var o = Je;
    Je |= 1;
    try {
      return r(s);
    } finally {
      Je = o;
      if (Je === 0) {
        qi = Ze() + 500;
        if (dl) {
          hs();
        }
      }
    }
  }
  function ti(r) {
    if (ys !== null && ys.tag === 0 && (Je & 6) === 0) {
      Ki();
    }
    var s = Je;
    Je |= 1;
    var o = $r.transition;
    var c = et;
    try {
      $r.transition = null;
      et = 1;
      if (r) {
        return r();
      }
    } finally {
      et = c;
      $r.transition = o;
      Je = s;
      if ((Je & 6) === 0) {
        hs();
      }
    }
  }
  function ad() {
    Er = Vi.current;
    at(Vi);
  }
  function ri(r, s) {
    r.finishedWork = null;
    r.finishedLanes = 0;
    var o = r.timeoutHandle;
    if (o !== -1) {
      r.timeoutHandle = -1;
      Qw(o);
    }
    if (Et !== null) {
      for (o = Et.return; o !== null;) {
        var c = o;
        gc(c);
        switch (c.tag) {
          case 1:
            c = c.type.childContextTypes;
            if (c != null) {
              ul();
            }
            break;
          case 3:
            Bi();
            at(ir);
            at(Vt);
            Pc();
            break;
          case 5:
            Tc(c);
            break;
          case 4:
            Bi();
            break;
          case 13:
            at(ht);
            break;
          case 19:
            at(ht);
            break;
          case 10:
            Sc(c.type._context);
            break;
          case 22:
          case 23:
            ad();
        }
        o = o.return;
      }
    }
    jt = r;
    Et = r = bs(r.current, null);
    $t = Er = s;
    Ct = 0;
    ta = null;
    ed = Il = ei = 0;
    lr = ra = null;
    if (Ys !== null) {
      for (s = 0; s < Ys.length; s++) {
        o = Ys[s];
        c = o.interleaved;
        if (c !== null) {
          o.interleaved = null;
          var h = c.next;
          var p = o.pending;
          if (p !== null) {
            var v = p.next;
            p.next = h;
            c.next = v;
          }
          o.pending = c;
        }
      }
      Ys = null;
    }
    return r;
  }
  function nm(r, s) {
    do {
      var o = Et;
      try {
        _c();
        _l.current = xl;
        if (Sl) {
          for (var c = ft.memoizedState; c !== null;) {
            var h = c.queue;
            if (h !== null) {
              h.pending = null;
            }
            c = c.next;
          }
          Sl = false;
        }
        Zs = 0;
        It = Tt = ft = null;
        Jo = false;
        Qo = 0;
        Zc.current = null;
        if (o === null || o.return === null) {
          Ct = 1;
          ta = s;
          Et = null;
          break;
        }
        e: {
          var p = r;
          var v = o.return;
          var S = o;
          var T = s;
          s = $t;
          S.flags |= 32768;
          if (T !== null && typeof T == "object" && typeof T.then == "function") {
            var F = T;
            var K = S;
            var G = K.tag;
            if ((K.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var V = K.alternate;
              if (V) {
                K.updateQueue = V.updateQueue;
                K.memoizedState = V.memoizedState;
                K.lanes = V.lanes;
              } else {
                K.updateQueue = null;
                K.memoizedState = null;
              }
            }
            var ae = Cp(v);
            if (ae !== null) {
              ae.flags &= -257;
              Pp(ae, v, S, p, s);
              if (ae.mode & 1) {
                Tp(p, F, s);
              }
              s = ae;
              T = F;
              var fe = s.updateQueue;
              if (fe === null) {
                var _e = new Set();
                _e.add(T);
                s.updateQueue = _e;
              } else {
                fe.add(T);
              }
              break e;
            } else {
              if ((s & 1) === 0) {
                Tp(p, F, s);
                ld();
                break e;
              }
              T = Error(n(426));
            }
          } else if (ut && S.mode & 1) {
            var _t = Cp(v);
            if (_t !== null) {
              if ((_t.flags & 65536) === 0) {
                _t.flags |= 256;
              }
              Pp(_t, v, S, p, s);
              wc(Hi(T, S));
              break e;
            }
          }
          p = T = Hi(T, S);
          if (Ct !== 4) {
            Ct = 2;
          }
          if (ra === null) {
            ra = [p];
          } else {
            ra.push(p);
          }
          p = v;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536;
                s &= -s;
                p.lanes |= s;
                var D = xp(p, T, s);
                Xf(p, D);
                break e;
              case 1:
                S = T;
                var O = p.type;
                var M = p.stateNode;
                if ((p.flags & 128) === 0 && (typeof O.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (gs === null || !gs.has(M)))) {
                  p.flags |= 65536;
                  s &= -s;
                  p.lanes |= s;
                  var ee = Rp(p, S, s);
                  Xf(p, ee);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        om(o);
      } catch (ke) {
        s = ke;
        if (Et === o && o !== null) {
          Et = o = o.return;
        }
        continue;
      }
      break;
    } while (true);
  }
  function sm() {
    var r = Al.current;
    Al.current = xl;
    if (r === null) {
      return xl;
    } else {
      return r;
    }
  }
  function ld() {
    if (Ct === 0 || Ct === 3 || Ct === 2) {
      Ct = 4;
    }
    if (jt !== null && ((ei & 268435455) !== 0 || (Il & 268435455) !== 0)) {
      ws(jt, $t);
    }
  }
  function Ml(r, s) {
    var o = Je;
    Je |= 2;
    var c = sm();
    if (jt !== r || $t !== s) {
      Wn = null;
      ri(r, s);
    }
    do {
      try {
        _0();
        break;
      } catch (h) {
        nm(r, h);
      }
    } while (true);
    _c();
    Je = o;
    Al.current = c;
    if (Et !== null) {
      throw Error(n(261));
    }
    jt = null;
    $t = 0;
    return Ct;
  }
  function _0() {
    while (Et !== null) {
      im(Et);
    }
  }
  function S0() {
    while (Et !== null && !Ye()) {
      im(Et);
    }
  }
  function im(r) {
    var s = um(r.alternate, r, Er);
    r.memoizedProps = r.pendingProps;
    if (s === null) {
      om(r);
    } else {
      Et = s;
    }
    Zc.current = null;
  }
  function om(r) {
    var s = r;
    do {
      var o = s.alternate;
      r = s.return;
      if ((s.flags & 32768) === 0) {
        o = p0(o, s, Er);
        if (o !== null) {
          Et = o;
          return;
        }
      } else {
        o = m0(o, s);
        if (o !== null) {
          o.flags &= 32767;
          Et = o;
          return;
        }
        if (r !== null) {
          r.flags |= 32768;
          r.subtreeFlags = 0;
          r.deletions = null;
        } else {
          Ct = 6;
          Et = null;
          return;
        }
      }
      s = s.sibling;
      if (s !== null) {
        Et = s;
        return;
      }
      Et = s = r;
    } while (s !== null);
    if (Ct === 0) {
      Ct = 5;
    }
  }
  function ni(r, s, o) {
    var c = et;
    var h = $r.transition;
    try {
      $r.transition = null;
      et = 1;
      k0(r, s, o, c);
    } finally {
      $r.transition = h;
      et = c;
    }
    return null;
  }
  function k0(r, s, o, c) {
    do {
      Ki();
    } while (ys !== null);
    if ((Je & 6) !== 0) {
      throw Error(n(327));
    }
    o = r.finishedWork;
    var h = r.finishedLanes;
    if (o === null) {
      return null;
    }
    r.finishedWork = null;
    r.finishedLanes = 0;
    if (o === r.current) {
      throw Error(n(177));
    }
    r.callbackNode = null;
    r.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    nw(r, p);
    if (r === jt) {
      Et = jt = null;
      $t = 0;
    }
    if (((o.subtreeFlags & 2064) !== 0 || (o.flags & 2064) !== 0) && !Nl) {
      Nl = true;
      cm(ts, function () {
        Ki();
        return null;
      });
    }
    p = (o.flags & 15990) !== 0;
    if ((o.subtreeFlags & 15990) !== 0 || p) {
      p = $r.transition;
      $r.transition = null;
      var v = et;
      et = 1;
      var S = Je;
      Je |= 4;
      Zc.current = null;
      y0(r, o);
      Qp(o, r);
      Hw(lc);
      Ja = !!ac;
      lc = ac = null;
      r.current = o;
      v0(o);
      sr();
      Je = S;
      et = v;
      $r.transition = p;
    } else {
      r.current = o;
    }
    if (Nl) {
      Nl = false;
      ys = r;
      Ll = h;
    }
    p = r.pendingLanes;
    if (p === 0) {
      gs = null;
    }
    Ke(o.stateNode);
    ur(r, Ze());
    if (s !== null) {
      c = r.onRecoverableError;
      o = 0;
      for (; o < s.length; o++) {
        h = s[o];
        c(h.value, {
          componentStack: h.stack,
          digest: h.digest
        });
      }
    }
    if (jl) {
      jl = false;
      r = rd;
      rd = null;
      throw r;
    }
    if ((Ll & 1) !== 0 && r.tag !== 0) {
      Ki();
    }
    p = r.pendingLanes;
    if ((p & 1) !== 0) {
      if (r === nd) {
        na++;
      } else {
        na = 0;
        nd = r;
      }
    } else {
      na = 0;
    }
    hs();
    return null;
  }
  function Ki() {
    if (ys !== null) {
      var r = Kh(Ll);
      var s = $r.transition;
      var o = et;
      try {
        $r.transition = null;
        et = r < 16 ? 16 : r;
        if (ys === null) {
          var c = false;
        } else {
          r = ys;
          ys = null;
          Ll = 0;
          if ((Je & 6) !== 0) {
            throw Error(n(331));
          }
          var h = Je;
          Je |= 4;
          de = r.current;
          while (de !== null) {
            var p = de;
            var v = p.child;
            if ((de.flags & 16) !== 0) {
              var S = p.deletions;
              if (S !== null) {
                for (var T = 0; T < S.length; T++) {
                  var F = S[T];
                  for (de = F; de !== null;) {
                    var K = de;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ea(8, K, p);
                    }
                    var G = K.child;
                    if (G !== null) {
                      G.return = K;
                      de = G;
                    } else {
                      while (de !== null) {
                        K = de;
                        var V = K.sibling;
                        var ae = K.return;
                        Vp(K);
                        if (K === F) {
                          de = null;
                          break;
                        }
                        if (V !== null) {
                          V.return = ae;
                          de = V;
                          break;
                        }
                        de = ae;
                      }
                    }
                  }
                }
                var fe = p.alternate;
                if (fe !== null) {
                  var _e = fe.child;
                  if (_e !== null) {
                    fe.child = null;
                    do {
                      var _t = _e.sibling;
                      _e.sibling = null;
                      _e = _t;
                    } while (_e !== null);
                  }
                }
                de = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && v !== null) {
              v.return = p;
              de = v;
            } else {
              e: while (de !== null) {
                p = de;
                if ((p.flags & 2048) !== 0) {
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ea(9, p, p.return);
                  }
                }
                var D = p.sibling;
                if (D !== null) {
                  D.return = p.return;
                  de = D;
                  break e;
                }
                de = p.return;
              }
            }
          }
          var O = r.current;
          for (de = O; de !== null;) {
            v = de;
            var M = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && M !== null) {
              M.return = v;
              de = M;
            } else {
              e: for (v = O; de !== null;) {
                S = de;
                if ((S.flags & 2048) !== 0) {
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ol(9, S);
                    }
                  } catch (ke) {
                    mt(S, S.return, ke);
                  }
                }
                if (S === v) {
                  de = null;
                  break e;
                }
                var ee = S.sibling;
                if (ee !== null) {
                  ee.return = S.return;
                  de = ee;
                  break e;
                }
                de = S.return;
              }
            }
          }
          Je = h;
          hs();
          if (Zt && typeof Zt.onPostCommitFiberRoot == "function") {
            try {
              Zt.onPostCommitFiberRoot(Nn, r);
            } catch {}
          }
          c = true;
        }
        return c;
      } finally {
        et = o;
        $r.transition = s;
      }
    }
    return false;
  }
  function am(r, s, o) {
    s = Hi(o, s);
    s = xp(r, s, 1);
    r = ps(r, s, 1);
    s = tr();
    if (r !== null) {
      To(r, 1, s);
      ur(r, s);
    }
  }
  function mt(r, s, o) {
    if (r.tag === 3) {
      am(r, r, o);
    } else {
      while (s !== null) {
        if (s.tag === 3) {
          am(s, r, o);
          break;
        } else if (s.tag === 1) {
          var c = s.stateNode;
          if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (gs === null || !gs.has(c))) {
            r = Hi(o, r);
            r = Rp(s, r, 1);
            s = ps(s, r, 1);
            r = tr();
            if (s !== null) {
              To(s, 1, r);
              ur(s, r);
            }
            break;
          }
        }
        s = s.return;
      }
    }
  }
  function E0(r, s, o) {
    var c = r.pingCache;
    if (c !== null) {
      c.delete(s);
    }
    s = tr();
    r.pingedLanes |= r.suspendedLanes & o;
    if (jt === r && ($t & o) === o) {
      if (Ct === 4 || Ct === 3 && ($t & 130023424) === $t && Ze() - td < 500) {
        ri(r, 0);
      } else {
        ed |= o;
      }
    }
    ur(r, s);
  }
  function lm(r, s) {
    if (s === 0) {
      if ((r.mode & 1) === 0) {
        s = 1;
      } else {
        s = Vs;
        Vs <<= 1;
        if ((Vs & 130023424) === 0) {
          Vs = 4194304;
        }
      }
    }
    var o = tr();
    r = zn(r, s);
    if (r !== null) {
      To(r, s, o);
      ur(r, o);
    }
  }
  function x0(r) {
    var s = r.memoizedState;
    var o = 0;
    if (s !== null) {
      o = s.retryLane;
    }
    lm(r, o);
  }
  function R0(r, s) {
    var o = 0;
    switch (r.tag) {
      case 13:
        var c = r.stateNode;
        var h = r.memoizedState;
        if (h !== null) {
          o = h.retryLane;
        }
        break;
      case 19:
        c = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    if (c !== null) {
      c.delete(s);
    }
    lm(r, o);
  }
  var um;
  um = function (r, s, o) {
    if (r !== null) {
      if (r.memoizedProps !== s.pendingProps || ir.current) {
        ar = true;
      } else {
        if ((r.lanes & o) === 0 && (s.flags & 128) === 0) {
          ar = false;
          return f0(r, s, o);
        }
        ar = (r.flags & 131072) !== 0;
      }
    } else {
      ar = false;
      if (ut && (s.flags & 1048576) !== 0) {
        Bf(s, fl, s.index);
      }
    }
    s.lanes = 0;
    switch (s.tag) {
      case 2:
        var c = s.type;
        Cl(r, s);
        r = s.pendingProps;
        var h = Li(s, Vt.current);
        zi(s, o);
        h = Ic(null, s, c, r, h, o);
        var p = jc();
        s.flags |= 1;
        if (typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === undefined) {
          s.tag = 1;
          s.memoizedState = null;
          s.updateQueue = null;
          if (or(c)) {
            p = true;
            cl(s);
          } else {
            p = false;
          }
          s.memoizedState = h.state ?? null;
          xc(s);
          h.updater = Rl;
          s.stateNode = h;
          h._reactInternals = s;
          $c(s, c, r, o);
          s = Hc(null, s, c, true, p, o);
        } else {
          s.tag = 0;
          if (ut && p) {
            mc(s);
          }
          er(null, s, h, o);
          s = s.child;
        }
        return s;
      case 16:
        c = s.elementType;
        e: {
          Cl(r, s);
          r = s.pendingProps;
          h = c._init;
          c = h(c._payload);
          s.type = c;
          h = s.tag = C0(c);
          r = Xr(c, r);
          switch (h) {
            case 0:
              s = Bc(null, s, c, r, o);
              break e;
            case 1:
              s = Lp(null, s, c, r, o);
              break e;
            case 11:
              s = Op(null, s, c, r, o);
              break e;
            case 14:
              s = Ap(null, s, c, Xr(c.type, r), o);
              break e;
          }
          throw Error(n(306, c, ""));
        }
        return s;
      case 0:
        c = s.type;
        h = s.pendingProps;
        h = s.elementType === c ? h : Xr(c, h);
        return Bc(r, s, c, h, o);
      case 1:
        c = s.type;
        h = s.pendingProps;
        h = s.elementType === c ? h : Xr(c, h);
        return Lp(r, s, c, h, o);
      case 3:
        e: {
          Dp(s);
          if (r === null) {
            throw Error(n(387));
          }
          c = s.pendingProps;
          p = s.memoizedState;
          h = p.element;
          Yf(r, s);
          wl(s, c, null, o);
          var v = s.memoizedState;
          c = v.element;
          if (p.isDehydrated) {
            p = {
              element: c,
              isDehydrated: false,
              cache: v.cache,
              pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
              transitions: v.transitions
            };
            s.updateQueue.baseState = p;
            s.memoizedState = p;
            if (s.flags & 256) {
              h = Hi(Error(n(423)), s);
              s = Up(r, s, c, o, h);
              break e;
            } else if (c !== h) {
              h = Hi(Error(n(424)), s);
              s = Up(r, s, c, o, h);
              break e;
            } else {
              kr = us(s.stateNode.containerInfo.firstChild);
              Sr = s;
              ut = true;
              Yr = null;
              o = Jf(s, null, c, o);
              s.child = o;
              while (o) {
                o.flags = o.flags & -3 | 4096;
                o = o.sibling;
              }
            }
          } else {
            Mi();
            if (c === h) {
              s = Hn(r, s, o);
              break e;
            }
            er(r, s, c, o);
          }
          s = s.child;
        }
        return s;
      case 5:
        ep(s);
        if (r === null) {
          vc(s);
        }
        c = s.type;
        h = s.pendingProps;
        p = r !== null ? r.memoizedProps : null;
        v = h.children;
        if (uc(c, h)) {
          v = null;
        } else if (p !== null && uc(c, p)) {
          s.flags |= 32;
        }
        Np(r, s);
        er(r, s, v, o);
        return s.child;
      case 6:
        if (r === null) {
          vc(s);
        }
        return null;
      case 13:
        return Mp(r, s, o);
      case 4:
        Rc(s, s.stateNode.containerInfo);
        c = s.pendingProps;
        if (r === null) {
          s.child = $i(s, null, c, o);
        } else {
          er(r, s, c, o);
        }
        return s.child;
      case 11:
        c = s.type;
        h = s.pendingProps;
        h = s.elementType === c ? h : Xr(c, h);
        return Op(r, s, c, h, o);
      case 7:
        er(r, s, s.pendingProps, o);
        return s.child;
      case 8:
        er(r, s, s.pendingProps.children, o);
        return s.child;
      case 12:
        er(r, s, s.pendingProps.children, o);
        return s.child;
      case 10:
        e: {
          c = s.type._context;
          h = s.pendingProps;
          p = s.memoizedProps;
          v = h.value;
          st(gl, c._currentValue);
          c._currentValue = v;
          if (p !== null) {
            if (Qr(p.value, v)) {
              if (p.children === h.children && !ir.current) {
                s = Hn(r, s, o);
                break e;
              }
            } else {
              p = s.child;
              if (p !== null) {
                p.return = s;
              }
              while (p !== null) {
                var S = p.dependencies;
                if (S !== null) {
                  v = p.child;
                  for (var T = S.firstContext; T !== null;) {
                    if (T.context === c) {
                      if (p.tag === 1) {
                        T = Bn(-1, o & -o);
                        T.tag = 2;
                        var F = p.updateQueue;
                        if (F !== null) {
                          F = F.shared;
                          var K = F.pending;
                          if (K === null) {
                            T.next = T;
                          } else {
                            T.next = K.next;
                            K.next = T;
                          }
                          F.pending = T;
                        }
                      }
                      p.lanes |= o;
                      T = p.alternate;
                      if (T !== null) {
                        T.lanes |= o;
                      }
                      kc(p.return, o, s);
                      S.lanes |= o;
                      break;
                    }
                    T = T.next;
                  }
                } else if (p.tag === 10) {
                  v = p.type === s.type ? null : p.child;
                } else if (p.tag === 18) {
                  v = p.return;
                  if (v === null) {
                    throw Error(n(341));
                  }
                  v.lanes |= o;
                  S = v.alternate;
                  if (S !== null) {
                    S.lanes |= o;
                  }
                  kc(v, o, s);
                  v = p.sibling;
                } else {
                  v = p.child;
                }
                if (v !== null) {
                  v.return = p;
                } else {
                  for (v = p; v !== null;) {
                    if (v === s) {
                      v = null;
                      break;
                    }
                    p = v.sibling;
                    if (p !== null) {
                      p.return = v.return;
                      v = p;
                      break;
                    }
                    v = v.return;
                  }
                }
                p = v;
              }
            }
          }
          er(r, s, h.children, o);
          s = s.child;
        }
        return s;
      case 9:
        h = s.type;
        c = s.pendingProps.children;
        zi(s, o);
        h = Ur(h);
        c = c(h);
        s.flags |= 1;
        er(r, s, c, o);
        return s.child;
      case 14:
        c = s.type;
        h = Xr(c, s.pendingProps);
        h = Xr(c.type, h);
        return Ap(r, s, c, h, o);
      case 15:
        return Ip(r, s, s.type, s.pendingProps, o);
      case 17:
        c = s.type;
        h = s.pendingProps;
        h = s.elementType === c ? h : Xr(c, h);
        Cl(r, s);
        s.tag = 1;
        if (or(c)) {
          r = true;
          cl(s);
        } else {
          r = false;
        }
        zi(s, o);
        kp(s, c, h);
        $c(s, c, h, o);
        return Hc(null, s, c, true, r, o);
      case 19:
        return Fp(r, s, o);
      case 22:
        return jp(r, s, o);
    }
    throw Error(n(156, s.tag));
  };
  function cm(r, s) {
    return bt(r, s);
  }
  function T0(r, s, o, c) {
    this.tag = r;
    this.key = o;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = s;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = c;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Fr(r, s, o, c) {
    return new T0(r, s, o, c);
  }
  function ud(r) {
    r = r.prototype;
    return !!r && !!r.isReactComponent;
  }
  function C0(r) {
    if (typeof r == "function") {
      if (ud(r)) {
        return 1;
      } else {
        return 0;
      }
    }
    if (r != null) {
      r = r.$$typeof;
      if (r === Le) {
        return 11;
      }
      if (r === Ie) {
        return 14;
      }
    }
    return 2;
  }
  function bs(r, s) {
    var o = r.alternate;
    if (o === null) {
      o = Fr(r.tag, s, r.key, r.mode);
      o.elementType = r.elementType;
      o.type = r.type;
      o.stateNode = r.stateNode;
      o.alternate = r;
      r.alternate = o;
    } else {
      o.pendingProps = s;
      o.type = r.type;
      o.flags = 0;
      o.subtreeFlags = 0;
      o.deletions = null;
    }
    o.flags = r.flags & 14680064;
    o.childLanes = r.childLanes;
    o.lanes = r.lanes;
    o.child = r.child;
    o.memoizedProps = r.memoizedProps;
    o.memoizedState = r.memoizedState;
    o.updateQueue = r.updateQueue;
    s = r.dependencies;
    o.dependencies = s === null ? null : {
      lanes: s.lanes,
      firstContext: s.firstContext
    };
    o.sibling = r.sibling;
    o.index = r.index;
    o.ref = r.ref;
    return o;
  }
  function $l(r, s, o, c, h, p) {
    var v = 2;
    c = r;
    if (typeof r == "function") {
      if (ud(r)) {
        v = 1;
      }
    } else if (typeof r == "string") {
      v = 5;
    } else {
      e: switch (r) {
        case j:
          return si(o.children, h, p, s);
        case H:
          v = 8;
          h |= 8;
          break;
        case Z:
          r = Fr(12, o, s, h | 2);
          r.elementType = Z;
          r.lanes = p;
          return r;
        case He:
          r = Fr(13, o, s, h);
          r.elementType = He;
          r.lanes = p;
          return r;
        case Me:
          r = Fr(19, o, s, h);
          r.elementType = Me;
          r.lanes = p;
          return r;
        case ye:
          return Fl(o, h, p, s);
        default:
          if (typeof r == "object" && r !== null) {
            switch (r.$$typeof) {
              case be:
                v = 10;
                break e;
              case Re:
                v = 9;
                break e;
              case Le:
                v = 11;
                break e;
              case Ie:
                v = 14;
                break e;
              case re:
                v = 16;
                c = null;
                break e;
            }
          }
          throw Error(n(130, r == null ? r : typeof r, ""));
      }
    }
    s = Fr(v, o, s, h);
    s.elementType = r;
    s.type = c;
    s.lanes = p;
    return s;
  }
  function si(r, s, o, c) {
    r = Fr(7, r, c, s);
    r.lanes = o;
    return r;
  }
  function Fl(r, s, o, c) {
    r = Fr(22, r, c, s);
    r.elementType = ye;
    r.lanes = o;
    r.stateNode = {
      isHidden: false
    };
    return r;
  }
  function cd(r, s, o) {
    r = Fr(6, r, null, s);
    r.lanes = o;
    return r;
  }
  function dd(r, s, o) {
    s = Fr(4, r.children !== null ? r.children : [], r.key, s);
    s.lanes = o;
    s.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    };
    return s;
  }
  function P0(r, s, o, c, h) {
    this.tag = s;
    this.containerInfo = r;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Mu(0);
    this.expirationTimes = Mu(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Mu(0);
    this.identifierPrefix = c;
    this.onRecoverableError = h;
    this.mutableSourceEagerHydrationData = null;
  }
  function hd(r, s, o, c, h, p, v, S, T) {
    r = new P0(r, s, o, S, T);
    if (s === 1) {
      s = 1;
      if (p === true) {
        s |= 8;
      }
    } else {
      s = 0;
    }
    p = Fr(3, null, null, s);
    r.current = p;
    p.stateNode = r;
    p.memoizedState = {
      element: c,
      isDehydrated: o,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    xc(p);
    return r;
  }
  function O0(r, s, o, c = null) {
    return {
      $$typeof: Q,
      key: c == null ? null : "" + c,
      children: r,
      containerInfo: s,
      implementation: o
    };
  }
  function dm(r) {
    if (!r) {
      return ds;
    }
    r = r._reactInternals;
    e: {
      if (we(r) !== r || r.tag !== 1) {
        throw Error(n(170));
      }
      var s = r;
      do {
        switch (s.tag) {
          case 3:
            s = s.stateNode.context;
            break e;
          case 1:
            if (or(s.type)) {
              s = s.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        s = s.return;
      } while (s !== null);
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var o = r.type;
      if (or(o)) {
        return $f(r, o, s);
      }
    }
    return s;
  }
  function hm(r, s, o, c, h, p, v, S, T) {
    r = hd(o, c, true, r, h, p, v, S, T);
    r.context = dm(null);
    o = r.current;
    c = tr();
    h = vs(o);
    p = Bn(c, h);
    p.callback = s ?? null;
    ps(o, p, h);
    r.current.lanes = h;
    To(r, h, c);
    ur(r, c);
    return r;
  }
  function zl(r, s, o, c) {
    var h = s.current;
    var p = tr();
    var v = vs(h);
    o = dm(o);
    if (s.context === null) {
      s.context = o;
    } else {
      s.pendingContext = o;
    }
    s = Bn(p, v);
    s.payload = {
      element: r
    };
    c = c === undefined ? null : c;
    if (c !== null) {
      s.callback = c;
    }
    r = ps(h, s, v);
    if (r !== null) {
      tn(r, h, v, p);
      vl(r, h, v);
    }
    return v;
  }
  function Bl(r) {
    r = r.current;
    if (!r.child) {
      return null;
    }
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function fm(r, s) {
    r = r.memoizedState;
    if (r !== null && r.dehydrated !== null) {
      var o = r.retryLane;
      r.retryLane = o !== 0 && o < s ? o : s;
    }
  }
  function fd(r, s) {
    fm(r, s);
    if (r = r.alternate) {
      fm(r, s);
    }
  }
  function A0() {
    return null;
  }
  var pm = typeof reportError == "function" ? reportError : function (r) {
    console.error(r);
  };
  function pd(r) {
    this._internalRoot = r;
  }
  Hl.prototype.render = pd.prototype.render = function (r) {
    var s = this._internalRoot;
    if (s === null) {
      throw Error(n(409));
    }
    zl(r, s, null, null);
  };
  Hl.prototype.unmount = pd.prototype.unmount = function () {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      ti(function () {
        zl(null, r, null, null);
      });
      s[Un] = null;
    }
  };
  function Hl(r) {
    this._internalRoot = r;
  }
  Hl.prototype.unstable_scheduleHydration = function (r) {
    if (r) {
      var s = Qh();
      r = {
        blockedOn: null,
        target: r,
        priority: s
      };
      for (var o = 0; o < os.length && s !== 0 && s < os[o].priority; o++);
      os.splice(o, 0, r);
      if (o === 0) {
        Zh(r);
      }
    }
  };
  function md(r) {
    return !!r && (r.nodeType === 1 || r.nodeType === 9 || r.nodeType === 11);
  }
  function Wl(r) {
    return !!r && (r.nodeType === 1 || r.nodeType === 9 || r.nodeType === 11 || r.nodeType === 8 && r.nodeValue === " react-mount-point-unstable ");
  }
  function mm() {}
  function I0(r, s, o, c, h) {
    if (h) {
      if (typeof c == "function") {
        var p = c;
        c = function () {
          var F = Bl(v);
          p.call(F);
        };
      }
      var v = hm(s, c, r, 0, null, false, false, "", mm);
      r._reactRootContainer = v;
      r[Un] = v.current;
      zo(r.nodeType === 8 ? r.parentNode : r);
      ti();
      return v;
    }
    while (h = r.lastChild) {
      r.removeChild(h);
    }
    if (typeof c == "function") {
      var S = c;
      c = function () {
        var F = Bl(T);
        S.call(F);
      };
    }
    var T = hd(r, 0, false, null, null, false, false, "", mm);
    r._reactRootContainer = T;
    r[Un] = T.current;
    zo(r.nodeType === 8 ? r.parentNode : r);
    ti(function () {
      zl(s, T, o, c);
    });
    return T;
  }
  function Vl(r, s, o, c, h) {
    var p = o._reactRootContainer;
    if (p) {
      var v = p;
      if (typeof h == "function") {
        var S = h;
        h = function () {
          var T = Bl(v);
          S.call(T);
        };
      }
      zl(s, v, r, h);
    } else {
      v = I0(o, s, r, h, c);
    }
    return Bl(v);
  }
  Gh = function (r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var o = qs(s.pendingLanes);
          if (o !== 0) {
            $u(s, o | 1);
            ur(s, Ze());
            if ((Je & 6) === 0) {
              qi = Ze() + 500;
              hs();
            }
          }
        }
        break;
      case 13:
        ti(function () {
          var c = zn(r, 1);
          if (c !== null) {
            var h = tr();
            tn(c, r, 1, h);
          }
        });
        fd(r, 1);
    }
  };
  Fu = function (r) {
    if (r.tag === 13) {
      var s = zn(r, 134217728);
      if (s !== null) {
        var o = tr();
        tn(s, r, 134217728, o);
      }
      fd(r, 134217728);
    }
  };
  Jh = function (r) {
    if (r.tag === 13) {
      var s = vs(r);
      var o = zn(r, s);
      if (o !== null) {
        var c = tr();
        tn(o, r, s, c);
      }
      fd(r, s);
    }
  };
  Qh = function () {
    return et;
  };
  Yh = function (r, s) {
    var o = et;
    try {
      et = r;
      return s();
    } finally {
      et = o;
    }
  };
  hn = function (r, s, o) {
    switch (s) {
      case "input":
        Kr(r, o);
        s = o.name;
        if (o.type === "radio" && s != null) {
          for (o = r; o.parentNode;) {
            o = o.parentNode;
          }
          o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + "][type=\"radio\"]");
          s = 0;
          for (; s < o.length; s++) {
            var c = o[s];
            if (c !== r && c.form === r.form) {
              var h = ll(c);
              if (!h) {
                throw Error(n(90));
              }
              rt(c);
              Kr(c, h);
            }
          }
        }
        break;
      case "textarea":
        Ir(r, o);
        break;
      case "select":
        s = o.value;
        if (s != null) {
          ln(r, !!o.multiple, s, false);
        }
    }
  };
  pt = od;
  wt = ti;
  var j0 = {
    usingClientEntryPoint: false,
    Events: [Wo, ji, ll, De, ct, od]
  };
  var sa = {
    findFiberByHostInstance: Ks,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
  var N0 = {
    bundleType: sa.bundleType,
    version: sa.version,
    rendererPackageName: sa.rendererPackageName,
    rendererConfig: sa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: B.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (r) {
      r = Ve(r);
      if (r === null) {
        return null;
      } else {
        return r.stateNode;
      }
    },
    findFiberByHostInstance: sa.findFiberByHostInstance || A0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ql.isDisabled && ql.supportsFiber) {
      try {
        Nn = ql.inject(N0);
        Zt = ql;
      } catch {}
    }
  }
  cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j0;
  cr.createPortal = function (r, s, o = null) {
    if (!md(s)) {
      throw Error(n(200));
    }
    return O0(r, s, null, o);
  };
  cr.createRoot = function (r, s) {
    if (!md(r)) {
      throw Error(n(299));
    }
    var o = false;
    var c = "";
    var h = pm;
    if (s != null) {
      if (s.unstable_strictMode === true) {
        o = true;
      }
      if (s.identifierPrefix !== undefined) {
        c = s.identifierPrefix;
      }
      if (s.onRecoverableError !== undefined) {
        h = s.onRecoverableError;
      }
    }
    s = hd(r, 1, false, null, null, o, false, c, h);
    r[Un] = s.current;
    zo(r.nodeType === 8 ? r.parentNode : r);
    return new pd(s);
  };
  cr.findDOMNode = function (r) {
    if (r == null) {
      return null;
    }
    if (r.nodeType === 1) {
      return r;
    }
    var s = r._reactInternals;
    if (s === undefined) {
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    }
    r = Ve(s);
    r = r === null ? null : r.stateNode;
    return r;
  };
  cr.flushSync = function (r) {
    return ti(r);
  };
  cr.hydrate = function (r, s, o) {
    if (!Wl(s)) {
      throw Error(n(200));
    }
    return Vl(null, r, s, true, o);
  };
  cr.hydrateRoot = function (r, s, o) {
    if (!md(r)) {
      throw Error(n(405));
    }
    var c = o != null && o.hydratedSources || null;
    var h = false;
    var p = "";
    var v = pm;
    if (o != null) {
      if (o.unstable_strictMode === true) {
        h = true;
      }
      if (o.identifierPrefix !== undefined) {
        p = o.identifierPrefix;
      }
      if (o.onRecoverableError !== undefined) {
        v = o.onRecoverableError;
      }
    }
    s = hm(s, null, r, 1, o ?? null, h, false, p, v);
    r[Un] = s.current;
    zo(r);
    if (c) {
      for (r = 0; r < c.length; r++) {
        o = c[r];
        h = o._getVersion;
        h = h(o._source);
        if (s.mutableSourceEagerHydrationData == null) {
          s.mutableSourceEagerHydrationData = [o, h];
        } else {
          s.mutableSourceEagerHydrationData.push(o, h);
        }
      }
    }
    return new Hl(s);
  };
  cr.render = function (r, s, o) {
    if (!Wl(s)) {
      throw Error(n(200));
    }
    return Vl(null, r, s, false, o);
  };
  cr.unmountComponentAtNode = function (r) {
    if (!Wl(r)) {
      throw Error(n(40));
    }
    if (r._reactRootContainer) {
      ti(function () {
        Vl(null, null, r, false, function () {
          r._reactRootContainer = null;
          r[Un] = null;
        });
      });
      return true;
    } else {
      return false;
    }
  };
  cr.unstable_batchedUpdates = od;
  cr.unstable_renderSubtreeIntoContainer = function (r, s, o, c) {
    if (!Wl(o)) {
      throw Error(n(200));
    }
    if (r == null || r._reactInternals === undefined) {
      throw Error(n(38));
    }
    return Vl(r, s, o, false, c);
  };
  cr.version = "18.3.1-next-f1338f8080-20240426";
  return cr;
}
var xm;
function yy() {
  if (xm) {
    return wd.exports;
  }
  xm = 1;
  function t() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
    }
  }
  t();
  wd.exports = W0();
  return wd.exports;
}
var Rm;
function V0() {
  if (Rm) {
    return Gl;
  }
  Rm = 1;
  var t = yy();
  Gl.createRoot = t.createRoot;
  Gl.hydrateRoot = t.hydrateRoot;
  return Gl;
}
var q0 = V0();
var $a = class {
  constructor() {
    this.listeners = new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    this.listeners.add(t);
    this.onSubscribe();
    return () => {
      this.listeners.delete(t);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};
var fi;
var Ps;
var uo;
var oy;
oy = class extends $a {
  constructor() {
    super();
    Oe(this, fi);
    Oe(this, Ps);
    Oe(this, uo);
    ue(this, uo, e => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const n = () => e();
        window.addEventListener("visibilitychange", n, false);
        return () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    if (!C(this, Ps)) {
      this.setEventListener(C(this, uo));
    }
  }
  onUnsubscribe() {
    var e;
    if (!this.hasListeners()) {
      if ((e = C(this, Ps)) != null) {
        e.call(this);
      }
      ue(this, Ps, undefined);
    }
  }
  setEventListener(e) {
    var n;
    ue(this, uo, e);
    if ((n = C(this, Ps)) != null) {
      n.call(this);
    }
    ue(this, Ps, e(i => {
      if (typeof i == "boolean") {
        this.setFocused(i);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(e) {
    if (C(this, fi) !== e) {
      ue(this, fi, e);
      this.onFocus();
    }
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach(n => {
      n(e);
    });
  }
  isFocused() {
    var e;
    if (typeof C(this, fi) == "boolean") {
      return C(this, fi);
    } else {
      return ((e = globalThis.document) == null ? undefined : e.visibilityState) !== "hidden";
    }
  }
};
fi = new WeakMap();
Ps = new WeakMap();
uo = new WeakMap();
var K0 = oy;
var Rh = new K0();
var G0 = {
  setTimeout: (t, e) => setTimeout(t, e),
  clearTimeout: t => clearTimeout(t),
  setInterval: (t, e) => setInterval(t, e),
  clearInterval: t => clearInterval(t)
};
var Os;
var Eh;
var ay;
ay = class {
  constructor() {
    Oe(this, Os, G0);
    Oe(this, Eh, false);
  }
  setTimeoutProvider(t) {
    ue(this, Os, t);
  }
  setTimeout(t, e) {
    return C(this, Os).setTimeout(t, e);
  }
  clearTimeout(t) {
    C(this, Os).clearTimeout(t);
  }
  setInterval(t, e) {
    return C(this, Os).setInterval(t, e);
  }
  clearInterval(t) {
    C(this, Os).clearInterval(t);
  }
};
Os = new WeakMap();
Eh = new WeakMap();
var J0 = ay;
var ci = new J0();
function Q0(t) {
  setTimeout(t, 0);
}
var Y0 = typeof window === "undefined" || "Deno" in globalThis;
function mr() {}
function X0(t, e) {
  if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
function Md(t) {
  return typeof t == "number" && t >= 0 && t !== Infinity;
}
function vy(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Ms(t, e) {
  if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
function Rr(t, e) {
  if (typeof t == "function") {
    return t(e);
  } else {
    return t;
  }
}
function Tm(t, e) {
  const {
    type: n = "all",
    exact: i,
    fetchStatus: a,
    predicate: l,
    queryKey: u,
    stale: d
  } = t;
  if (u) {
    if (i) {
      if (e.queryHash !== Th(u, e.options)) {
        return false;
      }
    } else if (!Sa(e.queryKey, u)) {
      return false;
    }
  }
  if (n !== "all") {
    const f = e.isActive();
    if (n === "active" && !f || n === "inactive" && f) {
      return false;
    }
  }
  return (typeof d != "boolean" || e.isStale() === d) && (!a || a === e.state.fetchStatus) && (!l || !!l(e));
}
function Cm(t, e) {
  const {
    exact: n,
    status: i,
    predicate: a,
    mutationKey: l
  } = t;
  if (l) {
    if (!e.options.mutationKey) {
      return false;
    }
    if (n) {
      if (_a(e.options.mutationKey) !== _a(l)) {
        return false;
      }
    } else if (!Sa(e.options.mutationKey, l)) {
      return false;
    }
  }
  return (!i || e.state.status === i) && (!a || !!a(e));
}
function Th(t, e) {
  return ((e == null ? undefined : e.queryKeyHashFn) || _a)(t);
}
function _a(t) {
  return JSON.stringify(t, (e, n) => Fd(n) ? Object.keys(n).sort().reduce((i, a) => {
    i[a] = n[a];
    return i;
  }, {}) : n);
}
function Sa(t, e) {
  if (t === e) {
    return true;
  } else if (typeof t != typeof e) {
    return false;
  } else if (t && e && typeof t == "object" && typeof e == "object") {
    return Object.keys(e).every(n => Sa(t[n], e[n]));
  } else {
    return false;
  }
}
var Z0 = Object.prototype.hasOwnProperty;
function wy(t, e, n = 0) {
  if (t === e) {
    return t;
  }
  if (n > 500) {
    return e;
  }
  const i = Pm(t) && Pm(e);
  if (!i && (!Fd(t) || !Fd(e))) {
    return e;
  }
  const l = (i ? t : Object.keys(t)).length;
  const u = i ? e : Object.keys(e);
  const d = u.length;
  const f = i ? new Array(d) : {};
  let m = 0;
  for (let y = 0; y < d; y++) {
    const g = i ? y : u[y];
    const b = t[g];
    const w = e[g];
    if (b === w) {
      f[g] = b;
      if (i ? y < l : Z0.call(t, g)) {
        m++;
      }
      continue;
    }
    if (b === null || w === null || typeof b != "object" || typeof w != "object") {
      f[g] = w;
      continue;
    }
    const _ = wy(b, w, n + 1);
    f[g] = _;
    if (_ === b) {
      m++;
    }
  }
  if (l === d && m === l) {
    return t;
  } else {
    return f;
  }
}
function $d(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) {
    return false;
  }
  for (const n in t) {
    if (t[n] !== e[n]) {
      return false;
    }
  }
  return true;
}
function Pm(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Fd(t) {
  if (!Om(t)) {
    return false;
  }
  const e = t.constructor;
  if (e === undefined) {
    return true;
  }
  const n = e.prototype;
  return !!Om(n) && !!n.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype;
}
function Om(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function eb(t) {
  return new Promise(e => {
    ci.setTimeout(e, t);
  });
}
function zd(t, e, n) {
  if (typeof n.structuralSharing == "function") {
    return n.structuralSharing(t, e);
  } else if (n.structuralSharing !== false) {
    return wy(t, e);
  } else {
    return e;
  }
}
function tb(t, e, n = 0) {
  const i = [...t, e];
  if (n && i.length > n) {
    return i.slice(1);
  } else {
    return i;
  }
}
function rb(t, e, n = 0) {
  const i = [e, ...t];
  if (n && i.length > n) {
    return i.slice(0, -1);
  } else {
    return i;
  }
}
var Ch = Symbol();
function by(t, e) {
  if (!t.queryFn && e != null && e.initialPromise) {
    return () => e.initialPromise;
  } else if (!t.queryFn || t.queryFn === Ch) {
    return () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`));
  } else {
    return t.queryFn;
  }
}
function _y(t, e) {
  if (typeof t == "function") {
    return t(...e);
  } else {
    return !!t;
  }
}
function nb(t, e, n) {
  let i = false;
  let a;
  Object.defineProperty(t, "signal", {
    enumerable: true,
    get: () => {
      a ??= e();
      if (!i) {
        i = true;
        if (a.aborted) {
          n();
        } else {
          a.addEventListener("abort", n, {
            once: true
          });
        }
      }
      return a;
    }
  });
  return t;
}
var ka = (() => {
  let t = () => Y0;
  return {
    isServer() {
      return t();
    },
    setIsServer(e) {
      t = e;
    }
  };
})();
function Bd() {
  let t;
  let e;
  const n = new Promise((a, l) => {
    t = a;
    e = l;
  });
  n.status = "pending";
  n.catch(() => {});
  function i(a) {
    Object.assign(n, a);
    delete n.resolve;
    delete n.reject;
  }
  n.resolve = a => {
    i({
      status: "fulfilled",
      value: a
    });
    t(a);
  };
  n.reject = a => {
    i({
      status: "rejected",
      reason: a
    });
    e(a);
  };
  return n;
}
var sb = Q0;
function ib() {
  let t = [];
  let e = 0;
  let n = d => {
    d();
  };
  let i = d => {
    d();
  };
  let a = sb;
  const l = d => {
    if (e) {
      t.push(d);
    } else {
      a(() => {
        n(d);
      });
    }
  };
  const u = () => {
    const d = t;
    t = [];
    if (d.length) {
      a(() => {
        i(() => {
          d.forEach(f => {
            n(f);
          });
        });
      });
    }
  };
  return {
    batch: d => {
      let f;
      e++;
      try {
        f = d();
      } finally {
        e--;
        if (!e) {
          u();
        }
      }
      return f;
    },
    batchCalls: d => (...f) => {
      l(() => {
        d(...f);
      });
    },
    schedule: l,
    setNotifyFunction: d => {
      n = d;
    },
    setBatchNotifyFunction: d => {
      i = d;
    },
    setScheduler: d => {
      a = d;
    }
  };
}
var Bt = ib();
var co;
var As;
var ho;
var ly;
ly = class extends $a {
  constructor() {
    super();
    Oe(this, co, true);
    Oe(this, As);
    Oe(this, ho);
    ue(this, ho, e => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const n = () => e(true);
        const i = () => e(false);
        window.addEventListener("online", n, false);
        window.addEventListener("offline", i, false);
        return () => {
          window.removeEventListener("online", n);
          window.removeEventListener("offline", i);
        };
      }
    });
  }
  onSubscribe() {
    if (!C(this, As)) {
      this.setEventListener(C(this, ho));
    }
  }
  onUnsubscribe() {
    var e;
    if (!this.hasListeners()) {
      if ((e = C(this, As)) != null) {
        e.call(this);
      }
      ue(this, As, undefined);
    }
  }
  setEventListener(e) {
    var n;
    ue(this, ho, e);
    if ((n = C(this, As)) != null) {
      n.call(this);
    }
    ue(this, As, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    if (C(this, co) !== e) {
      ue(this, co, e);
      this.listeners.forEach(i => {
        i(e);
      });
    }
  }
  isOnline() {
    return C(this, co);
  }
};
co = new WeakMap();
As = new WeakMap();
ho = new WeakMap();
var ob = ly;
var yu = new ob();
function ab(t) {
  return Math.min(2 ** t * 1000, 30000);
}
function Sy(t) {
  if ((t ?? "online") === "online") {
    return yu.isOnline();
  } else {
    return true;
  }
}
var Hd = class extends Error {
  constructor(t) {
    super("CancelledError");
    this.revert = t == null ? undefined : t.revert;
    this.silent = t == null ? undefined : t.silent;
  }
};
function ky(t) {
  let e = false;
  let n = 0;
  let i;
  const a = Bd();
  const l = () => a.status !== "pending";
  const u = k => {
    var x;
    if (!l()) {
      const I = new Hd(k);
      b(I);
      if ((x = t.onCancel) != null) {
        x.call(t, I);
      }
    }
  };
  const d = () => {
    e = true;
  };
  const f = () => {
    e = false;
  };
  const m = () => Rh.isFocused() && (t.networkMode === "always" || yu.isOnline()) && t.canRun();
  const y = () => Sy(t.networkMode) && t.canRun();
  const g = k => {
    if (!l()) {
      if (i != null) {
        i();
      }
      a.resolve(k);
    }
  };
  const b = k => {
    if (!l()) {
      if (i != null) {
        i();
      }
      a.reject(k);
    }
  };
  const w = () => new Promise(k => {
    var x;
    i = I => {
      if (l() || m()) {
        k(I);
      }
    };
    if ((x = t.onPause) != null) {
      x.call(t);
    }
  }).then(() => {
    var k;
    i = undefined;
    if (!l() && (k = t.onContinue) != null) {
      k.call(t);
    }
  });
  const _ = () => {
    if (l()) {
      return;
    }
    let k;
    const x = n === 0 ? t.initialPromise : undefined;
    try {
      k = x ?? t.fn();
    } catch (I) {
      k = Promise.reject(I);
    }
    Promise.resolve(k).then(g).catch(I => {
      var Q;
      if (l()) {
        return;
      }
      const N = t.retry ?? (ka.isServer() ? 0 : 3);
      const L = t.retryDelay ?? ab;
      const B = typeof L == "function" ? L(n, I) : L;
      const J = N === true || typeof N == "number" && n < N || typeof N == "function" && N(n, I);
      if (e || !J) {
        b(I);
        return;
      }
      n++;
      if ((Q = t.onFail) != null) {
        Q.call(t, n, I);
      }
      eb(B).then(() => m() ? undefined : w()).then(() => {
        if (e) {
          b(I);
        } else {
          _();
        }
      });
    });
  };
  return {
    promise: a,
    status: () => a.status,
    cancel: u,
    continue: () => {
      if (i != null) {
        i();
      }
      return a;
    },
    cancelRetry: d,
    continueRetry: f,
    canStart: y,
    start: () => {
      if (y()) {
        _();
      } else {
        w().then(_);
      }
      return a;
    }
  };
}
var pi;
var uy;
uy = class {
  constructor() {
    Oe(this, pi);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (Md(this.gcTime)) {
      ue(this, pi, ci.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
  }
  updateGcTime(t) {
    this.gcTime = Math.max(this.gcTime || 0, t ?? (ka.isServer() ? Infinity : 300000));
  }
  clearGcTimeout() {
    if (C(this, pi) !== undefined) {
      ci.clearTimeout(C(this, pi));
      ue(this, pi, undefined);
    }
  }
};
pi = new WeakMap();
var Ey = uy;
function lb(t) {
  return {
    onFetch: (e, n) => {
      var y;
      var g;
      var b;
      var w;
      var _;
      const i = e.options;
      const a = (b = (g = (y = e.fetchOptions) == null ? undefined : y.meta) == null ? undefined : g.fetchMore) == null ? undefined : b.direction;
      const l = ((w = e.state.data) == null ? undefined : w.pages) || [];
      const u = ((_ = e.state.data) == null ? undefined : _.pageParams) || [];
      let d = {
        pages: [],
        pageParams: []
      };
      let f = 0;
      const m = async () => {
        let k = false;
        const x = L => {
          nb(L, () => e.signal, () => k = true);
        };
        const I = by(e.options, e.fetchOptions);
        const N = async (L, B, J) => {
          if (k) {
            return Promise.reject(e.signal.reason);
          }
          if (B == null && L.pages.length) {
            return Promise.resolve(L);
          }
          const j = (() => {
            const Re = {
              client: e.client,
              queryKey: e.queryKey,
              pageParam: B,
              direction: J ? "backward" : "forward",
              meta: e.options.meta
            };
            x(Re);
            return Re;
          })();
          const H = await I(j);
          const {
            maxPages: Z
          } = e.options;
          const be = J ? rb : tb;
          return {
            pages: be(L.pages, H, Z),
            pageParams: be(L.pageParams, B, Z)
          };
        };
        if (a && l.length) {
          const L = a === "backward";
          const B = L ? xy : Wd;
          const J = {
            pages: l,
            pageParams: u
          };
          const Q = B(i, J);
          d = await N(J, Q, L);
        } else {
          const L = t ?? l.length;
          do {
            const B = f === 0 ? u[0] ?? i.initialPageParam : Wd(i, d);
            if (f > 0 && B == null) {
              break;
            }
            d = await N(d, B);
            f++;
          } while (f < L);
        }
        return d;
      };
      if (e.options.persister) {
        e.fetchFn = () => {
          var k;
          var x;
          if ((x = (k = e.options).persister) == null) {
            return undefined;
          } else {
            return x.call(k, m, {
              client: e.client,
              queryKey: e.queryKey,
              meta: e.options.meta,
              signal: e.signal
            }, n);
          }
        };
      } else {
        e.fetchFn = m;
      }
    }
  };
}
function Wd(t, {
  pages: e,
  pageParams: n
}) {
  const i = e.length - 1;
  if (e.length > 0) {
    return t.getNextPageParam(e[i], e, n[i], n);
  } else {
    return undefined;
  }
}
function xy(t, {
  pages: e,
  pageParams: n
}) {
  var i;
  if (e.length > 0) {
    if ((i = t.getPreviousPageParam) == null) {
      return undefined;
    } else {
      return i.call(t, e[0], e, n[0], n);
    }
  } else {
    return undefined;
  }
}
function ub(t, e) {
  if (e) {
    return Wd(t, e) != null;
  } else {
    return false;
  }
}
function cb(t, e) {
  if (!e || !t.getPreviousPageParam) {
    return false;
  } else {
    return xy(t, e) != null;
  }
}
var fo;
var mi;
var po;
var Hr;
var gi;
var Dt;
var Na;
var yi;
var xr;
var Ry;
var Kn;
var cy;
cy = class extends Ey {
  constructor(e) {
    super();
    Oe(this, xr);
    Oe(this, fo);
    Oe(this, mi);
    Oe(this, po);
    Oe(this, Hr);
    Oe(this, gi);
    Oe(this, Dt);
    Oe(this, Na);
    Oe(this, yi);
    ue(this, yi, false);
    ue(this, Na, e.defaultOptions);
    this.setOptions(e.options);
    this.observers = [];
    ue(this, gi, e.client);
    ue(this, Hr, C(this, gi).getQueryCache());
    this.queryKey = e.queryKey;
    this.queryHash = e.queryHash;
    ue(this, mi, Im(this.options));
    this.state = e.state ?? C(this, mi);
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return C(this, fo);
  }
  get promise() {
    var e;
    if ((e = C(this, Dt)) == null) {
      return undefined;
    } else {
      return e.promise;
    }
  }
  setOptions(e) {
    this.options = {
      ...C(this, Na),
      ...e
    };
    if (e != null && e._type) {
      ue(this, fo, e._type);
    }
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === undefined) {
      const n = Im(this.options);
      if (n.data !== undefined) {
        this.setState(Am(n.data, n.dataUpdatedAt));
        ue(this, mi, n);
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      C(this, Hr).remove(this);
    }
  }
  setData(e, n) {
    const i = zd(this.state.data, e, this.options);
    qe(this, xr, Kn).call(this, {
      data: i,
      type: "success",
      dataUpdatedAt: n == null ? undefined : n.updatedAt,
      manual: n == null ? undefined : n.manual
    });
    return i;
  }
  setState(e) {
    qe(this, xr, Kn).call(this, {
      type: "setState",
      state: e
    });
  }
  cancel(e) {
    var i;
    var a;
    const n = (i = C(this, Dt)) == null ? undefined : i.promise;
    if ((a = C(this, Dt)) != null) {
      a.cancel(e);
    }
    if (n) {
      return n.then(mr).catch(mr);
    } else {
      return Promise.resolve();
    }
  }
  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }
  get resetState() {
    return C(this, mi);
  }
  reset() {
    this.destroy();
    this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some(e => Rr(e.options.enabled, this) !== false);
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    } else {
      return this.options.queryFn === Ch || !this.isFetched();
    }
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(e => Ms(e.options.staleTime, this) === "static");
    } else {
      return false;
    }
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(e => e.getCurrentResult().isStale);
    } else {
      return this.state.data === undefined || this.state.isInvalidated;
    }
  }
  isStaleByTime(e = 0) {
    if (this.state.data === undefined) {
      return true;
    } else if (e === "static") {
      return false;
    } else if (this.state.isInvalidated) {
      return true;
    } else {
      return !vy(this.state.dataUpdatedAt, e);
    }
  }
  onFocus() {
    var n;
    const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
    if (e != null) {
      e.refetch({
        cancelRefetch: false
      });
    }
    if ((n = C(this, Dt)) != null) {
      n.continue();
    }
  }
  onOnline() {
    var n;
    const e = this.observers.find(i => i.shouldFetchOnReconnect());
    if (e != null) {
      e.refetch({
        cancelRefetch: false
      });
    }
    if ((n = C(this, Dt)) != null) {
      n.continue();
    }
  }
  addObserver(e) {
    if (!this.observers.includes(e)) {
      this.observers.push(e);
      this.clearGcTimeout();
      C(this, Hr).notify({
        type: "observerAdded",
        query: this,
        observer: e
      });
    }
  }
  removeObserver(e) {
    if (this.observers.includes(e)) {
      this.observers = this.observers.filter(n => n !== e);
      if (!this.observers.length) {
        if (C(this, Dt)) {
          if (C(this, yi) || qe(this, xr, Ry).call(this)) {
            C(this, Dt).cancel({
              revert: true
            });
          } else {
            C(this, Dt).cancelRetry();
          }
        }
        this.scheduleGc();
      }
      C(this, Hr).notify({
        type: "observerRemoved",
        query: this,
        observer: e
      });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      qe(this, xr, Kn).call(this, {
        type: "invalidate"
      });
    }
  }
  async fetch(e, n) {
    var m;
    var y;
    var g;
    var b;
    var w;
    var _;
    var k;
    var x;
    var I;
    var N;
    var L;
    if (this.state.fetchStatus !== "idle" && ((m = C(this, Dt)) == null ? undefined : m.status()) !== "rejected") {
      if (this.state.data !== undefined && n != null && n.cancelRefetch) {
        this.cancel({
          silent: true
        });
      } else if (C(this, Dt)) {
        C(this, Dt).continueRetry();
        return C(this, Dt).promise;
      }
    }
    if (e) {
      this.setOptions(e);
    }
    if (!this.options.queryFn) {
      const B = this.observers.find(J => J.options.queryFn);
      if (B) {
        this.setOptions(B.options);
      }
    }
    const i = new AbortController();
    const a = B => {
      Object.defineProperty(B, "signal", {
        enumerable: true,
        get: () => {
          ue(this, yi, true);
          return i.signal;
        }
      });
    };
    const l = () => {
      const B = by(this.options, n);
      const Q = (() => {
        const j = {
          client: C(this, gi),
          queryKey: this.queryKey,
          meta: this.meta
        };
        a(j);
        return j;
      })();
      ue(this, yi, false);
      if (this.options.persister) {
        return this.options.persister(B, Q, this);
      } else {
        return B(Q);
      }
    };
    const d = (() => {
      const B = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        client: C(this, gi),
        state: this.state,
        fetchFn: l
      };
      a(B);
      return B;
    })();
    const f = C(this, fo) === "infinite" ? lb(this.options.pages) : this.options.behavior;
    if (f != null) {
      f.onFetch(d, this);
    }
    ue(this, po, this.state);
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((y = d.fetchOptions) == null ? undefined : y.meta)) {
      qe(this, xr, Kn).call(this, {
        type: "fetch",
        meta: (g = d.fetchOptions) == null ? undefined : g.meta
      });
    }
    ue(this, Dt, ky({
      initialPromise: n == null ? undefined : n.initialPromise,
      fn: d.fetchFn,
      onCancel: B => {
        if (B instanceof Hd && B.revert) {
          this.setState({
            ...C(this, po),
            fetchStatus: "idle"
          });
        }
        i.abort();
      },
      onFail: (B, J) => {
        qe(this, xr, Kn).call(this, {
          type: "failed",
          failureCount: B,
          error: J
        });
      },
      onPause: () => {
        qe(this, xr, Kn).call(this, {
          type: "pause"
        });
      },
      onContinue: () => {
        qe(this, xr, Kn).call(this, {
          type: "continue"
        });
      },
      retry: d.options.retry,
      retryDelay: d.options.retryDelay,
      networkMode: d.options.networkMode,
      canRun: () => true
    }));
    try {
      const B = await C(this, Dt).start();
      if (B === undefined) {
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(B);
      if ((w = (b = C(this, Hr).config).onSuccess) != null) {
        w.call(b, B, this);
      }
      if ((k = (_ = C(this, Hr).config).onSettled) != null) {
        k.call(_, B, this.state.error, this);
      }
      return B;
    } catch (B) {
      if (B instanceof Hd) {
        if (B.silent) {
          return C(this, Dt).promise;
        }
        if (B.revert) {
          if (this.state.data === undefined) {
            throw B;
          }
          return this.state.data;
        }
      }
      qe(this, xr, Kn).call(this, {
        type: "error",
        error: B
      });
      if ((I = (x = C(this, Hr).config).onError) != null) {
        I.call(x, B, this);
      }
      if ((L = (N = C(this, Hr).config).onSettled) != null) {
        L.call(N, this.state.data, B, this);
      }
      throw B;
    } finally {
      this.scheduleGc();
    }
  }
};
fo = new WeakMap();
mi = new WeakMap();
po = new WeakMap();
Hr = new WeakMap();
gi = new WeakMap();
Dt = new WeakMap();
Na = new WeakMap();
yi = new WeakMap();
xr = new WeakSet();
Ry = function () {
  return this.state.fetchStatus === "paused" && this.state.status === "pending";
};
Kn = function (e) {
  const n = i => {
    switch (e.type) {
      case "failed":
        return {
          ...i,
          fetchFailureCount: e.failureCount,
          fetchFailureReason: e.error
        };
      case "pause":
        return {
          ...i,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...i,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...i,
          ...Ty(i.data, this.options),
          fetchMeta: e.meta ?? null
        };
      case "success":
        const a = {
          ...i,
          ...Am(e.data, e.dataUpdatedAt),
          dataUpdateCount: i.dataUpdateCount + 1,
          ...(!e.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          })
        };
        ue(this, po, e.manual ? a : undefined);
        return a;
      case "error":
        const l = e.error;
        return {
          ...i,
          error: l,
          errorUpdateCount: i.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: i.fetchFailureCount + 1,
          fetchFailureReason: l,
          fetchStatus: "idle",
          status: "error",
          isInvalidated: true
        };
      case "invalidate":
        return {
          ...i,
          isInvalidated: true
        };
      case "setState":
        return {
          ...i,
          ...e.state
        };
    }
  };
  this.state = n(this.state);
  Bt.batch(() => {
    this.observers.forEach(i => {
      i.onQueryUpdate();
    });
    C(this, Hr).notify({
      query: this,
      type: "updated",
      action: e
    });
  });
};
var db = cy;
function Ty(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Sy(e.networkMode) ? "fetching" : "paused",
    ...(t === undefined && {
      error: null,
      status: "pending"
    })
  };
}
function Am(t, e) {
  return {
    data: t,
    dataUpdatedAt: e ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function Im(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData;
  const n = e !== undefined;
  const i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var fr;
var Ge;
var La;
var rr;
var vi;
var mo;
var Yn;
var Is;
var Da;
var go;
var yo;
var wi;
var bi;
var js;
var vo;
var Xe;
var ha;
var Vd;
var qd;
var Kd;
var Gd;
var Jd;
var Qd;
var Yd;
var Py;
var dy;
dy = class extends $a {
  constructor(e, n) {
    super();
    Oe(this, Xe);
    Oe(this, fr);
    Oe(this, Ge);
    Oe(this, La);
    Oe(this, rr);
    Oe(this, vi);
    Oe(this, mo);
    Oe(this, Yn);
    Oe(this, Is);
    Oe(this, Da);
    Oe(this, go);
    Oe(this, yo);
    Oe(this, wi);
    Oe(this, bi);
    Oe(this, js);
    Oe(this, vo, new Set());
    this.options = n;
    ue(this, fr, e);
    ue(this, Is, null);
    ue(this, Yn, Bd());
    this.bindMethods();
    this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      C(this, Ge).addObserver(this);
      if (jm(C(this, Ge), this.options)) {
        qe(this, Xe, ha).call(this);
      } else {
        this.updateResult();
      }
      qe(this, Xe, Gd).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return Xd(C(this, Ge), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Xd(C(this, Ge), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = new Set();
    qe(this, Xe, Jd).call(this);
    qe(this, Xe, Qd).call(this);
    C(this, Ge).removeObserver(this);
  }
  setOptions(e) {
    const n = this.options;
    const i = C(this, Ge);
    this.options = C(this, fr).defaultQueryOptions(e);
    if (this.options.enabled !== undefined && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Rr(this.options.enabled, C(this, Ge)) != "boolean") {
      throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    }
    qe(this, Xe, Yd).call(this);
    C(this, Ge).setOptions(this.options);
    if (n._defaulted && !$d(this.options, n)) {
      C(this, fr).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: C(this, Ge),
        observer: this
      });
    }
    const a = this.hasListeners();
    if (a && Nm(C(this, Ge), i, this.options, n)) {
      qe(this, Xe, ha).call(this);
    }
    this.updateResult();
    if (a && (C(this, Ge) !== i || Rr(this.options.enabled, C(this, Ge)) !== Rr(n.enabled, C(this, Ge)) || Ms(this.options.staleTime, C(this, Ge)) !== Ms(n.staleTime, C(this, Ge)))) {
      qe(this, Xe, Vd).call(this);
    }
    const l = qe(this, Xe, qd).call(this);
    if (a && (C(this, Ge) !== i || Rr(this.options.enabled, C(this, Ge)) !== Rr(n.enabled, C(this, Ge)) || l !== C(this, js))) {
      qe(this, Xe, Kd).call(this, l);
    }
  }
  getOptimisticResult(e) {
    const n = C(this, fr).getQueryCache().build(C(this, fr), e);
    const i = this.createResult(n, e);
    if (fb(this, i)) {
      ue(this, rr, i);
      ue(this, mo, this.options);
      ue(this, vi, C(this, Ge).state);
    }
    return i;
  }
  getCurrentResult() {
    return C(this, rr);
  }
  trackResult(e, n) {
    return new Proxy(e, {
      get: (i, a) => {
        this.trackProp(a);
        if (n != null) {
          n(a);
        }
        if (a === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && C(this, Yn).status === "pending") {
            C(this, Yn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
          }
        }
        return Reflect.get(i, a);
      }
    });
  }
  trackProp(e) {
    C(this, vo).add(e);
  }
  getCurrentQuery() {
    return C(this, Ge);
  }
  refetch({
    ...e
  } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const n = C(this, fr).defaultQueryOptions(e);
    const i = C(this, fr).getQueryCache().build(C(this, fr), n);
    return i.fetch().then(() => this.createResult(i, n));
  }
  fetch(e) {
    return qe(this, Xe, ha).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return C(this, rr);
    });
  }
  createResult(e, n) {
    var Z;
    const i = C(this, Ge);
    const a = this.options;
    const l = C(this, rr);
    const u = C(this, vi);
    const d = C(this, mo);
    const m = e !== i ? e.state : C(this, La);
    const {
      state: y
    } = e;
    let g = {
      ...y
    };
    let b = false;
    let w;
    if (n._optimisticResults) {
      const be = this.hasListeners();
      const Re = !be && jm(e, n);
      const Le = be && Nm(e, i, n, a);
      if (Re || Le) {
        g = {
          ...g,
          ...Ty(y.data, e.options)
        };
      }
      if (n._optimisticResults === "isRestoring") {
        g.fetchStatus = "idle";
      }
    }
    let {
      error: _,
      errorUpdatedAt: k,
      status: x
    } = g;
    w = g.data;
    let I = false;
    if (n.placeholderData !== undefined && w === undefined && x === "pending") {
      let be;
      if (l != null && l.isPlaceholderData && n.placeholderData === (d == null ? undefined : d.placeholderData)) {
        be = l.data;
        I = true;
      } else {
        be = typeof n.placeholderData == "function" ? n.placeholderData((Z = C(this, yo)) == null ? undefined : Z.state.data, C(this, yo)) : n.placeholderData;
      }
      if (be !== undefined) {
        x = "success";
        w = zd(l == null ? undefined : l.data, be, n);
        b = true;
      }
    }
    if (n.select && w !== undefined && !I) {
      if (l && w === (u == null ? undefined : u.data) && n.select === C(this, Da)) {
        w = C(this, go);
      } else {
        try {
          ue(this, Da, n.select);
          w = n.select(w);
          w = zd(l == null ? undefined : l.data, w, n);
          ue(this, go, w);
          ue(this, Is, null);
        } catch (be) {
          ue(this, Is, be);
        }
      }
    }
    if (C(this, Is)) {
      _ = C(this, Is);
      w = C(this, go);
      k = Date.now();
      x = "error";
    }
    const N = g.fetchStatus === "fetching";
    const L = x === "pending";
    const B = x === "error";
    const J = L && N;
    const Q = w !== undefined;
    const H = {
      status: x,
      fetchStatus: g.fetchStatus,
      isPending: L,
      isSuccess: x === "success",
      isError: B,
      isInitialLoading: J,
      isLoading: J,
      data: w,
      dataUpdatedAt: g.dataUpdatedAt,
      error: _,
      errorUpdatedAt: k,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: e.isFetched(),
      isFetchedAfterMount: g.dataUpdateCount > m.dataUpdateCount || g.errorUpdateCount > m.errorUpdateCount,
      isFetching: N,
      isRefetching: N && !L,
      isLoadingError: B && !Q,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: b,
      isRefetchError: B && Q,
      isStale: Ph(e, n),
      refetch: this.refetch,
      promise: C(this, Yn),
      isEnabled: Rr(n.enabled, e) !== false
    };
    if (this.options.experimental_prefetchInRender) {
      const be = H.data !== undefined;
      const Re = H.status === "error" && !be;
      const Le = Ie => {
        if (Re) {
          Ie.reject(H.error);
        } else if (be) {
          Ie.resolve(H.data);
        }
      };
      const He = () => {
        const Ie = ue(this, Yn, H.promise = Bd());
        Le(Ie);
      };
      const Me = C(this, Yn);
      switch (Me.status) {
        case "pending":
          if (e.queryHash === i.queryHash) {
            Le(Me);
          }
          break;
        case "fulfilled":
          if (Re || H.data !== Me.value) {
            He();
          }
          break;
        case "rejected":
          if (!Re || H.error !== Me.reason) {
            He();
          }
          break;
      }
    }
    return H;
  }
  updateResult() {
    const e = C(this, rr);
    const n = this.createResult(C(this, Ge), this.options);
    ue(this, vi, C(this, Ge).state);
    ue(this, mo, this.options);
    if (C(this, vi).data !== undefined) {
      ue(this, yo, C(this, Ge));
    }
    if ($d(n, e)) {
      return;
    }
    ue(this, rr, n);
    const i = () => {
      if (!e) {
        return true;
      }
      const {
        notifyOnChangeProps: a
      } = this.options;
      const l = typeof a == "function" ? a() : a;
      if (l === "all" || !l && !C(this, vo).size) {
        return true;
      }
      const u = new Set(l ?? C(this, vo));
      if (this.options.throwOnError) {
        u.add("error");
      }
      return Object.keys(C(this, rr)).some(d => {
        const f = d;
        return C(this, rr)[f] !== e[f] && u.has(f);
      });
    };
    qe(this, Xe, Py).call(this, {
      listeners: i()
    });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      qe(this, Xe, Gd).call(this);
    }
  }
};
fr = new WeakMap();
Ge = new WeakMap();
La = new WeakMap();
rr = new WeakMap();
vi = new WeakMap();
mo = new WeakMap();
Yn = new WeakMap();
Is = new WeakMap();
Da = new WeakMap();
go = new WeakMap();
yo = new WeakMap();
wi = new WeakMap();
bi = new WeakMap();
js = new WeakMap();
vo = new WeakMap();
Xe = new WeakSet();
ha = function (e) {
  qe(this, Xe, Yd).call(this);
  let n = C(this, Ge).fetch(this.options, e);
  if (e == null || !e.throwOnError) {
    n = n.catch(mr);
  }
  return n;
};
Vd = function () {
  qe(this, Xe, Jd).call(this);
  const e = Ms(this.options.staleTime, C(this, Ge));
  if (ka.isServer() || C(this, rr).isStale || !Md(e)) {
    return;
  }
  const i = vy(C(this, rr).dataUpdatedAt, e) + 1;
  ue(this, wi, ci.setTimeout(() => {
    if (!C(this, rr).isStale) {
      this.updateResult();
    }
  }, i));
};
qd = function () {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, Ge)) : this.options.refetchInterval) ?? false;
};
Kd = function (e) {
  qe(this, Xe, Qd).call(this);
  ue(this, js, e);
  if (!ka.isServer() && Rr(this.options.enabled, C(this, Ge)) !== false && !!Md(C(this, js)) && C(this, js) !== 0) {
    ue(this, bi, ci.setInterval(() => {
      if (this.options.refetchIntervalInBackground || Rh.isFocused()) {
        qe(this, Xe, ha).call(this);
      }
    }, C(this, js)));
  }
};
Gd = function () {
  qe(this, Xe, Vd).call(this);
  qe(this, Xe, Kd).call(this, qe(this, Xe, qd).call(this));
};
Jd = function () {
  if (C(this, wi) !== undefined) {
    ci.clearTimeout(C(this, wi));
    ue(this, wi, undefined);
  }
};
Qd = function () {
  if (C(this, bi) !== undefined) {
    ci.clearInterval(C(this, bi));
    ue(this, bi, undefined);
  }
};
Yd = function () {
  const e = C(this, fr).getQueryCache().build(C(this, fr), this.options);
  if (e === C(this, Ge)) {
    return;
  }
  const n = C(this, Ge);
  ue(this, Ge, e);
  ue(this, La, e.state);
  if (this.hasListeners()) {
    if (n != null) {
      n.removeObserver(this);
    }
    e.addObserver(this);
  }
};
Py = function (e) {
  Bt.batch(() => {
    if (e.listeners) {
      this.listeners.forEach(n => {
        n(C(this, rr));
      });
    }
    C(this, fr).getQueryCache().notify({
      query: C(this, Ge),
      type: "observerResultsUpdated"
    });
  });
};
var Cy = dy;
function hb(t, e) {
  return Rr(e.enabled, t) !== false && t.state.data === undefined && (t.state.status !== "error" || Rr(e.retryOnMount, t) !== false);
}
function jm(t, e) {
  return hb(t, e) || t.state.data !== undefined && Xd(t, e, e.refetchOnMount);
}
function Xd(t, e, n) {
  if (Rr(e.enabled, t) !== false && Ms(e.staleTime, t) !== "static") {
    const i = typeof n == "function" ? n(t) : n;
    return i === "always" || i !== false && Ph(t, e);
  }
  return false;
}
function Nm(t, e, n, i) {
  return (t !== e || Rr(i.enabled, t) === false) && (!n.suspense || t.state.status !== "error") && Ph(t, n);
}
function Ph(t, e) {
  return Rr(e.enabled, t) !== false && t.isStaleByTime(Ms(e.staleTime, t));
}
function fb(t, e) {
  return !$d(t.getCurrentResult(), e);
}
var pb = class extends Cy {
  constructor(t, e) {
    super(t, e);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(t) {
    t._type = "infinite";
    super.setOptions(t);
  }
  getOptimisticResult(t) {
    t._type = "infinite";
    return super.getOptimisticResult(t);
  }
  fetchNextPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: {
          direction: "forward"
        }
      }
    });
  }
  fetchPreviousPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: {
          direction: "backward"
        }
      }
    });
  }
  createResult(t, e) {
    var _;
    var k;
    const {
      state: n
    } = t;
    const i = super.createResult(t, e);
    const {
      isFetching: a,
      isRefetching: l,
      isError: u,
      isRefetchError: d
    } = i;
    const f = (k = (_ = n.fetchMeta) == null ? undefined : _.fetchMore) == null ? undefined : k.direction;
    const m = u && f === "forward";
    const y = a && f === "forward";
    const g = u && f === "backward";
    const b = a && f === "backward";
    return {
      ...i,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: ub(e, n.data),
      hasPreviousPage: cb(e, n.data),
      isFetchNextPageError: m,
      isFetchingNextPage: y,
      isFetchPreviousPageError: g,
      isFetchingPreviousPage: b,
      isRefetchError: d && !m && !g,
      isRefetching: l && !y && !b
    };
  }
};
var Ua;
var Sn;
var Jt;
var _i;
var kn;
var ks;
var hy;
hy = class extends Ey {
  constructor(e) {
    super();
    Oe(this, kn);
    Oe(this, Ua);
    Oe(this, Sn);
    Oe(this, Jt);
    Oe(this, _i);
    ue(this, Ua, e.client);
    this.mutationId = e.mutationId;
    ue(this, Jt, e.mutationCache);
    ue(this, Sn, []);
    this.state = e.state || gb();
    this.setOptions(e.options);
    this.scheduleGc();
  }
  setOptions(e) {
    this.options = e;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    if (!C(this, Sn).includes(e)) {
      C(this, Sn).push(e);
      this.clearGcTimeout();
      C(this, Jt).notify({
        type: "observerAdded",
        mutation: this,
        observer: e
      });
    }
  }
  removeObserver(e) {
    ue(this, Sn, C(this, Sn).filter(n => n !== e));
    this.scheduleGc();
    C(this, Jt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    if (!C(this, Sn).length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        C(this, Jt).remove(this);
      }
    }
  }
  continue() {
    var e;
    return ((e = C(this, _i)) == null ? undefined : e.continue()) ?? this.execute(this.state.variables);
  }
  async execute(e) {
    var u;
    var d;
    var f;
    var m;
    var y;
    var g;
    var b;
    var w;
    var _;
    var k;
    var x;
    var I;
    var N;
    var L;
    var B;
    var J;
    var Q;
    var j;
    const n = () => {
      qe(this, kn, ks).call(this, {
        type: "continue"
      });
    };
    const i = {
      client: C(this, Ua),
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    ue(this, _i, ky({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
      onFail: (H, Z) => {
        qe(this, kn, ks).call(this, {
          type: "failed",
          failureCount: H,
          error: Z
        });
      },
      onPause: () => {
        qe(this, kn, ks).call(this, {
          type: "pause"
        });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => C(this, Jt).canRun(this)
    }));
    const a = this.state.status === "pending";
    const l = !C(this, _i).canStart();
    try {
      if (a) {
        n();
      } else {
        qe(this, kn, ks).call(this, {
          type: "pending",
          variables: e,
          isPaused: l
        });
        if (C(this, Jt).config.onMutate) {
          await C(this, Jt).config.onMutate(e, this, i);
        }
        const Z = await ((d = (u = this.options).onMutate) == null ? undefined : d.call(u, e, i));
        if (Z !== this.state.context) {
          qe(this, kn, ks).call(this, {
            type: "pending",
            context: Z,
            variables: e,
            isPaused: l
          });
        }
      }
      const H = await C(this, _i).start();
      await ((m = (f = C(this, Jt).config).onSuccess) == null ? undefined : m.call(f, H, e, this.state.context, this, i));
      await ((g = (y = this.options).onSuccess) == null ? undefined : g.call(y, H, e, this.state.context, i));
      await ((w = (b = C(this, Jt).config).onSettled) == null ? undefined : w.call(b, H, null, this.state.variables, this.state.context, this, i));
      await ((k = (_ = this.options).onSettled) == null ? undefined : k.call(_, H, null, e, this.state.context, i));
      qe(this, kn, ks).call(this, {
        type: "success",
        data: H
      });
      return H;
    } catch (H) {
      try {
        await ((I = (x = C(this, Jt).config).onError) == null ? undefined : I.call(x, H, e, this.state.context, this, i));
      } catch (Z) {
        Promise.reject(Z);
      }
      try {
        await ((L = (N = this.options).onError) == null ? undefined : L.call(N, H, e, this.state.context, i));
      } catch (Z) {
        Promise.reject(Z);
      }
      try {
        await ((J = (B = C(this, Jt).config).onSettled) == null ? undefined : J.call(B, undefined, H, this.state.variables, this.state.context, this, i));
      } catch (Z) {
        Promise.reject(Z);
      }
      try {
        await ((j = (Q = this.options).onSettled) == null ? undefined : j.call(Q, undefined, H, e, this.state.context, i));
      } catch (Z) {
        Promise.reject(Z);
      }
      qe(this, kn, ks).call(this, {
        type: "error",
        error: H
      });
      throw H;
    } finally {
      C(this, Jt).runNext(this);
    }
  }
};
Ua = new WeakMap();
Sn = new WeakMap();
Jt = new WeakMap();
_i = new WeakMap();
kn = new WeakSet();
ks = function (e) {
  const n = i => {
    switch (e.type) {
      case "failed":
        return {
          ...i,
          failureCount: e.failureCount,
          failureReason: e.error
        };
      case "pause":
        return {
          ...i,
          isPaused: true
        };
      case "continue":
        return {
          ...i,
          isPaused: false
        };
      case "pending":
        return {
          ...i,
          context: e.context,
          data: undefined,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: e.isPaused,
          status: "pending",
          variables: e.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...i,
          data: e.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: false
        };
      case "error":
        return {
          ...i,
          data: undefined,
          error: e.error,
          failureCount: i.failureCount + 1,
          failureReason: e.error,
          isPaused: false,
          status: "error"
        };
    }
  };
  this.state = n(this.state);
  Bt.batch(() => {
    C(this, Sn).forEach(i => {
      i.onMutationUpdate(e);
    });
    C(this, Jt).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
};
var mb = hy;
function gb() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: undefined,
    submittedAt: 0
  };
}
var Xn;
var sn;
var Ma;
var fy;
fy = class extends $a {
  constructor(e = {}) {
    super();
    Oe(this, Xn);
    Oe(this, sn);
    Oe(this, Ma);
    this.config = e;
    ue(this, Xn, new Set());
    ue(this, sn, new Map());
    ue(this, Ma, 0);
  }
  build(e, n, i) {
    const a = new mb({
      client: e,
      mutationCache: this,
      mutationId: ++Kl(this, Ma)._,
      options: e.defaultMutationOptions(n),
      state: i
    });
    this.add(a);
    return a;
  }
  add(e) {
    C(this, Xn).add(e);
    const n = Jl(e);
    if (typeof n == "string") {
      const i = C(this, sn).get(n);
      if (i) {
        i.push(e);
      } else {
        C(this, sn).set(n, [e]);
      }
    }
    this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    if (C(this, Xn).delete(e)) {
      const n = Jl(e);
      if (typeof n == "string") {
        const i = C(this, sn).get(n);
        if (i) {
          if (i.length > 1) {
            const a = i.indexOf(e);
            if (a !== -1) {
              i.splice(a, 1);
            }
          } else if (i[0] === e) {
            C(this, sn).delete(n);
          }
        }
      }
    }
    this.notify({
      type: "removed",
      mutation: e
    });
  }
  canRun(e) {
    const n = Jl(e);
    if (typeof n == "string") {
      const i = C(this, sn).get(n);
      const a = i == null ? undefined : i.find(l => l.state.status === "pending");
      return !a || a === e;
    } else {
      return true;
    }
  }
  runNext(e) {
    var i;
    const n = Jl(e);
    if (typeof n == "string") {
      const a = (i = C(this, sn).get(n)) == null ? undefined : i.find(l => l !== e && l.state.isPaused);
      return (a == null ? undefined : a.continue()) ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    Bt.batch(() => {
      C(this, Xn).forEach(e => {
        this.notify({
          type: "removed",
          mutation: e
        });
      });
      C(this, Xn).clear();
      C(this, sn).clear();
    });
  }
  getAll() {
    return Array.from(C(this, Xn));
  }
  find(e) {
    const n = {
      exact: true,
      ...e
    };
    return this.getAll().find(i => Cm(n, i));
  }
  findAll(e = {}) {
    return this.getAll().filter(n => Cm(e, n));
  }
  notify(e) {
    Bt.batch(() => {
      this.listeners.forEach(n => {
        n(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter(n => n.state.isPaused);
    return Bt.batch(() => Promise.all(e.map(n => n.continue().catch(mr))));
  }
};
Xn = new WeakMap();
sn = new WeakMap();
Ma = new WeakMap();
var yb = fy;
function Jl(t) {
  var e;
  if ((e = t.options.scope) == null) {
    return undefined;
  } else {
    return e.id;
  }
}
var En;
var py;
py = class extends $a {
  constructor(e = {}) {
    super();
    Oe(this, En);
    this.config = e;
    ue(this, En, new Map());
  }
  build(e, n, i) {
    const a = n.queryKey;
    const l = n.queryHash ?? Th(a, n);
    let u = this.get(l);
    if (!u) {
      u = new db({
        client: e,
        queryKey: a,
        queryHash: l,
        options: e.defaultQueryOptions(n),
        state: i,
        defaultOptions: e.getQueryDefaults(a)
      });
      this.add(u);
    }
    return u;
  }
  add(e) {
    if (!C(this, En).has(e.queryHash)) {
      C(this, En).set(e.queryHash, e);
      this.notify({
        type: "added",
        query: e
      });
    }
  }
  remove(e) {
    const n = C(this, En).get(e.queryHash);
    if (n) {
      e.destroy();
      if (n === e) {
        C(this, En).delete(e.queryHash);
      }
      this.notify({
        type: "removed",
        query: e
      });
    }
  }
  clear() {
    Bt.batch(() => {
      this.getAll().forEach(e => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return C(this, En).get(e);
  }
  getAll() {
    return [...C(this, En).values()];
  }
  find(e) {
    const n = {
      exact: true,
      ...e
    };
    return this.getAll().find(i => Tm(n, i));
  }
  findAll(e = {}) {
    const n = this.getAll();
    if (Object.keys(e).length > 0) {
      return n.filter(i => Tm(e, i));
    } else {
      return n;
    }
  }
  notify(e) {
    Bt.batch(() => {
      this.listeners.forEach(n => {
        n(e);
      });
    });
  }
  onFocus() {
    Bt.batch(() => {
      this.getAll().forEach(e => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    Bt.batch(() => {
      this.getAll().forEach(e => {
        e.onOnline();
      });
    });
  }
};
En = new WeakMap();
var vb = py;
var gt;
var Ns;
var Ls;
var wo;
var bo;
var Ds;
var _o;
var So;
var my;
my = class {
  constructor(t = {}) {
    Oe(this, gt);
    Oe(this, Ns);
    Oe(this, Ls);
    Oe(this, wo);
    Oe(this, bo);
    Oe(this, Ds);
    Oe(this, _o);
    Oe(this, So);
    ue(this, gt, t.queryCache || new vb());
    ue(this, Ns, t.mutationCache || new yb());
    ue(this, Ls, t.defaultOptions || {});
    ue(this, wo, new Map());
    ue(this, bo, new Map());
    ue(this, Ds, 0);
  }
  mount() {
    Kl(this, Ds)._++;
    if (C(this, Ds) === 1) {
      ue(this, _o, Rh.subscribe(async t => {
        if (t) {
          await this.resumePausedMutations();
          C(this, gt).onFocus();
        }
      }));
      ue(this, So, yu.subscribe(async t => {
        if (t) {
          await this.resumePausedMutations();
          C(this, gt).onOnline();
        }
      }));
    }
  }
  unmount() {
    var t;
    var e;
    Kl(this, Ds)._--;
    if (C(this, Ds) === 0) {
      if ((t = C(this, _o)) != null) {
        t.call(this);
      }
      ue(this, _o, undefined);
      if ((e = C(this, So)) != null) {
        e.call(this);
      }
      ue(this, So, undefined);
    }
  }
  isFetching(t) {
    return C(this, gt).findAll({
      ...t,
      fetchStatus: "fetching"
    }).length;
  }
  isMutating(t) {
    return C(this, Ns).findAll({
      ...t,
      status: "pending"
    }).length;
  }
  getQueryData(t) {
    var n;
    const e = this.defaultQueryOptions({
      queryKey: t
    });
    if ((n = C(this, gt).get(e.queryHash)) == null) {
      return undefined;
    } else {
      return n.state.data;
    }
  }
  ensureQueryData(t) {
    const e = this.defaultQueryOptions(t);
    const n = C(this, gt).build(this, e);
    const i = n.state.data;
    if (i === undefined) {
      return this.fetchQuery(t);
    } else {
      if (t.revalidateIfStale && n.isStaleByTime(Ms(e.staleTime, n))) {
        this.prefetchQuery(e);
      }
      return Promise.resolve(i);
    }
  }
  getQueriesData(t) {
    return C(this, gt).findAll(t).map(({
      queryKey: e,
      state: n
    }) => {
      const i = n.data;
      return [e, i];
    });
  }
  setQueryData(t, e, n) {
    const i = this.defaultQueryOptions({
      queryKey: t
    });
    const a = C(this, gt).get(i.queryHash);
    const l = a == null ? undefined : a.state.data;
    const u = X0(e, l);
    if (u !== undefined) {
      return C(this, gt).build(this, i).setData(u, {
        ...n,
        manual: true
      });
    }
  }
  setQueriesData(t, e, n) {
    return Bt.batch(() => C(this, gt).findAll(t).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, e, n)]));
  }
  getQueryState(t) {
    var n;
    const e = this.defaultQueryOptions({
      queryKey: t
    });
    if ((n = C(this, gt).get(e.queryHash)) == null) {
      return undefined;
    } else {
      return n.state;
    }
  }
  removeQueries(t) {
    const e = C(this, gt);
    Bt.batch(() => {
      e.findAll(t).forEach(n => {
        e.remove(n);
      });
    });
  }
  resetQueries(t, e) {
    const n = C(this, gt);
    return Bt.batch(() => {
      n.findAll(t).forEach(i => {
        i.reset();
      });
      return this.refetchQueries({
        type: "active",
        ...t
      }, e);
    });
  }
  cancelQueries(t, e = {}) {
    const n = {
      revert: true,
      ...e
    };
    const i = Bt.batch(() => C(this, gt).findAll(t).map(a => a.cancel(n)));
    return Promise.all(i).then(mr).catch(mr);
  }
  invalidateQueries(t, e = {}) {
    return Bt.batch(() => {
      C(this, gt).findAll(t).forEach(n => {
        n.invalidate();
      });
      if ((t == null ? undefined : t.refetchType) === "none") {
        return Promise.resolve();
      } else {
        return this.refetchQueries({
          ...t,
          type: (t == null ? undefined : t.refetchType) ?? (t == null ? undefined : t.type) ?? "active"
        }, e);
      }
    });
  }
  refetchQueries(t, e = {}) {
    const n = {
      ...e,
      cancelRefetch: e.cancelRefetch ?? true
    };
    const i = Bt.batch(() => C(this, gt).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
      let l = a.fetch(undefined, n);
      if (!n.throwOnError) {
        l = l.catch(mr);
      }
      if (a.state.fetchStatus === "paused") {
        return Promise.resolve();
      } else {
        return l;
      }
    }));
    return Promise.all(i).then(mr);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    if (e.retry === undefined) {
      e.retry = false;
    }
    const n = C(this, gt).build(this, e);
    if (n.isStaleByTime(Ms(e.staleTime, n))) {
      return n.fetch(e);
    } else {
      return Promise.resolve(n.state.data);
    }
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(mr).catch(mr);
  }
  fetchInfiniteQuery(t) {
    t._type = "infinite";
    return this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(mr).catch(mr);
  }
  ensureInfiniteQueryData(t) {
    t._type = "infinite";
    return this.ensureQueryData(t);
  }
  resumePausedMutations() {
    if (yu.isOnline()) {
      return C(this, Ns).resumePausedMutations();
    } else {
      return Promise.resolve();
    }
  }
  getQueryCache() {
    return C(this, gt);
  }
  getMutationCache() {
    return C(this, Ns);
  }
  getDefaultOptions() {
    return C(this, Ls);
  }
  setDefaultOptions(t) {
    ue(this, Ls, t);
  }
  setQueryDefaults(t, e) {
    C(this, wo).set(_a(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...C(this, wo).values()];
    const n = {};
    e.forEach(i => {
      if (Sa(t, i.queryKey)) {
        Object.assign(n, i.defaultOptions);
      }
    });
    return n;
  }
  setMutationDefaults(t, e) {
    C(this, bo).set(_a(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...C(this, bo).values()];
    const n = {};
    e.forEach(i => {
      if (Sa(t, i.mutationKey)) {
        Object.assign(n, i.defaultOptions);
      }
    });
    return n;
  }
  defaultQueryOptions(t) {
    if (t._defaulted) {
      return t;
    }
    const e = {
      ...C(this, Ls).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: true
    };
    e.queryHash ||= Th(e.queryKey, e);
    if (e.refetchOnReconnect === undefined) {
      e.refetchOnReconnect = e.networkMode !== "always";
    }
    if (e.throwOnError === undefined) {
      e.throwOnError = !!e.suspense;
    }
    if (!e.networkMode && e.persister) {
      e.networkMode = "offlineFirst";
    }
    if (e.queryFn === Ch) {
      e.enabled = false;
    }
    return e;
  }
  defaultMutationOptions(t) {
    if (t != null && t._defaulted) {
      return t;
    } else {
      return {
        ...C(this, Ls).mutations,
        ...((t == null ? undefined : t.mutationKey) && this.getMutationDefaults(t.mutationKey)),
        ...t,
        _defaulted: true
      };
    }
  }
  clear() {
    C(this, gt).clear();
    C(this, Ns).clear();
  }
};
gt = new WeakMap();
Ns = new WeakMap();
Ls = new WeakMap();
wo = new WeakMap();
bo = new WeakMap();
Ds = new WeakMap();
_o = new WeakMap();
So = new WeakMap();
var wb = my;
var A = xh();
const ne = gy(A);
const bb = M0({
  __proto__: null,
  default: ne
}, [A]);
var Oy = A.createContext(undefined);
var _b = t => {
  const e = A.useContext(Oy);
  if (!e) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return e;
};
var Sb = ({
  client: t,
  children: e
}) => {
  A.useEffect(() => {
    t.mount();
    return () => {
      t.unmount();
    };
  }, [t]);
  return <Oy.Provider value={t}>{e}</Oy.Provider>;
};
var Ay = A.createContext(false);
var kb = () => A.useContext(Ay);
Ay.Provider;
function Eb() {
  let t = false;
  return {
    clearReset: () => {
      t = false;
    },
    reset: () => {
      t = true;
    },
    isReset: () => t
  };
}
var xb = A.createContext(Eb());
var Rb = () => A.useContext(xb);
var Tb = (t, e, n) => {
  const i = n != null && n.state.error && typeof t.throwOnError == "function" ? _y(t.throwOnError, [n.state.error, n]) : t.throwOnError;
  if (t.suspense || t.experimental_prefetchInRender || i) {
    if (!e.isReset()) {
      t.retryOnMount = false;
    }
  }
};
var Cb = t => {
  A.useEffect(() => {
    t.clearReset();
  }, [t]);
};
var Pb = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: n,
  query: i,
  suspense: a
}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === undefined || _y(n, [t.error, i]));
var Ob = t => {
  if (t.suspense) {
    const n = a => a === "static" ? a : Math.max(a ?? 1000, 1000);
    const i = t.staleTime;
    t.staleTime = typeof i == "function" ? (...a) => n(i(...a)) : n(i);
    if (typeof t.gcTime == "number") {
      t.gcTime = Math.max(t.gcTime, 1000);
    }
  }
};
var Ab = (t, e) => t.isLoading && t.isFetching && !e;
var Ib = (t, e) => (t == null ? undefined : t.suspense) && e.isPending;
var Lm = (t, e, n) => e.fetchOptimistic(t).catch(() => {
  n.clearReset();
});
function Iy(t, e, n) {
  var w;
  var _;
  var k;
  var x;
  const i = kb();
  const a = Rb();
  const l = _b();
  const u = l.defaultQueryOptions(t);
  if ((_ = (w = l.getDefaultOptions().queries) == null ? undefined : w._experimental_beforeQuery) != null) {
    _.call(w, u);
  }
  const d = l.getQueryCache().get(u.queryHash);
  const f = t.subscribed !== false;
  u._optimisticResults = i ? "isRestoring" : f ? "optimistic" : undefined;
  Ob(u);
  Tb(u, a, d);
  Cb(a);
  const m = !l.getQueryCache().get(u.queryHash);
  const [y] = A.useState(() => new e(l, u));
  const g = y.getOptimisticResult(u);
  const b = !i && f;
  A.useSyncExternalStore(A.useCallback(I => {
    const N = b ? y.subscribe(Bt.batchCalls(I)) : mr;
    y.updateResult();
    return N;
  }, [y, b]), () => y.getCurrentResult(), () => y.getCurrentResult());
  A.useEffect(() => {
    y.setOptions(u);
  }, [u, y]);
  if (Ib(u, g)) {
    throw Lm(u, y, a);
  }
  if (Pb({
    result: g,
    errorResetBoundary: a,
    throwOnError: u.throwOnError,
    query: d,
    suspense: u.suspense
  })) {
    throw g.error;
  }
  if ((x = (k = l.getDefaultOptions().queries) == null ? undefined : k._experimental_afterQuery) != null) {
    x.call(k, u, g);
  }
  if (u.experimental_prefetchInRender && !ka.isServer() && Ab(g, i)) {
    const I = m ? Lm(u, y, a) : d == null ? undefined : d.promise;
    if (I != null) {
      I.catch(mr).finally(() => {
        y.updateResult();
      });
    }
  }
  if (u.notifyOnChangeProps) {
    return g;
  } else {
    return y.trackResult(g);
  }
}
function Ru(t, e) {
  return Iy(t, Cy);
}
function jy(t, e) {
  return Iy(t, pb);
} /**
  * react-router v7.13.0
  *
  * Copyright (c) Remix Software Inc.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
var Ny = t => {
  throw TypeError(t);
};
var jb = (t, e, n) => e.has(t) || Ny("Cannot " + n);
var Sd = (t, e, n) => {
  jb(t, e, "read from private field");
  if (n) {
    return n.call(t);
  } else {
    return e.get(t);
  }
};
var Nb = (t, e, n) => e.has(t) ? Ny("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
var Dm = "popstate";
function Lb(t = {}) {
  function e(i, a) {
    let {
      pathname: l,
      search: u,
      hash: d
    } = i.location;
    return Ea("", {
      pathname: l,
      search: u,
      hash: d
    }, a.state && a.state.usr || null, a.state && a.state.key || "default");
  }
  function n(i, a) {
    if (typeof a == "string") {
      return a;
    } else {
      return Cn(a);
    }
  }
  return Ub(e, n, null, t);
}
function ze(t, e) {
  if (t === false || t === null || typeof t === "undefined") {
    throw new Error(e);
  }
}
function vt(t, e) {
  if (!t) {
    if (typeof console !== "undefined") {
      console.warn(e);
    }
    try {
      throw new Error(e);
    } catch {}
  }
}
function Db() {
  return Math.random().toString(36).substring(2, 10);
}
function Um(t, e) {
  return {
    usr: t.state,
    key: t.key,
    idx: e
  };
}
function Ea(t, e, n = null, i) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof e == "string" ? $s(e) : e),
    state: n,
    key: e && e.key || i || Db()
  };
}
function Cn({
  pathname: t = "/",
  search: e = "",
  hash: n = ""
}) {
  if (e && e !== "?") {
    t += e.charAt(0) === "?" ? e : "?" + e;
  }
  if (n && n !== "#") {
    t += n.charAt(0) === "#" ? n : "#" + n;
  }
  return t;
}
function $s(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    if (n >= 0) {
      e.hash = t.substring(n);
      t = t.substring(0, n);
    }
    let i = t.indexOf("?");
    if (i >= 0) {
      e.search = t.substring(i);
      t = t.substring(0, i);
    }
    if (t) {
      e.pathname = t;
    }
  }
  return e;
}
function Ub(t, e, n, i = {}) {
  let {
    window: a = document.defaultView,
    v5Compat: l = false
  } = i;
  let u = a.history;
  let d = "POP";
  let f = null;
  let m = y();
  if (m == null) {
    m = 0;
    u.replaceState({
      ...u.state,
      idx: m
    }, "");
  }
  function y() {
    return (u.state || {
      idx: null
    }).idx;
  }
  function g() {
    d = "POP";
    let x = y();
    let I = x == null ? null : x - m;
    m = x;
    if (f) {
      f({
        action: d,
        location: k.location,
        delta: I
      });
    }
  }
  function b(x, I) {
    d = "PUSH";
    let N = Ea(k.location, x, I);
    m = y() + 1;
    let L = Um(N, m);
    let B = k.createHref(N);
    try {
      u.pushState(L, "", B);
    } catch (J) {
      if (J instanceof DOMException && J.name === "DataCloneError") {
        throw J;
      }
      a.location.assign(B);
    }
    if (l && f) {
      f({
        action: d,
        location: k.location,
        delta: 1
      });
    }
  }
  function w(x, I) {
    d = "REPLACE";
    let N = Ea(k.location, x, I);
    m = y();
    let L = Um(N, m);
    let B = k.createHref(N);
    u.replaceState(L, "", B);
    if (l && f) {
      f({
        action: d,
        location: k.location,
        delta: 0
      });
    }
  }
  function _(x) {
    return Ly(x);
  }
  let k = {
    get action() {
      return d;
    },
    get location() {
      return t(a, u);
    },
    listen(x) {
      if (f) {
        throw new Error("A history only accepts one active listener");
      }
      a.addEventListener(Dm, g);
      f = x;
      return () => {
        a.removeEventListener(Dm, g);
        f = null;
      };
    },
    createHref(x) {
      return e(a, x);
    },
    createURL: _,
    encodeLocation(x) {
      let I = _(x);
      return {
        pathname: I.pathname,
        search: I.search,
        hash: I.hash
      };
    },
    push: b,
    replace: w,
    go(x) {
      return u.go(x);
    }
  };
  return k;
}
function Ly(t, e = false) {
  let n = "http://localhost";
  if (typeof window !== "undefined") {
    n = window.location.origin !== "null" ? window.location.origin : window.location.href;
  }
  ze(n, "No window.location.(origin|href) available to create URL");
  let i = typeof t == "string" ? t : Cn(t);
  i = i.replace(/ $/, "%20");
  if (!e && i.startsWith("//")) {
    i = n + i;
  }
  return new URL(i, n);
}
var fa;
var Mm = class {
  constructor(t) {
    Nb(this, fa, new Map());
    if (t) {
      for (let [e, n] of t) {
        this.set(e, n);
      }
    }
  }
  get(t) {
    if (Sd(this, fa).has(t)) {
      return Sd(this, fa).get(t);
    }
    if (t.defaultValue !== undefined) {
      return t.defaultValue;
    }
    throw new Error("No value found for context");
  }
  set(t, e) {
    Sd(this, fa).set(t, e);
  }
};
fa = new WeakMap();
var Mb = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function $b(t) {
  return Mb.has(t);
}
var Fb = new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
function zb(t) {
  return Fb.has(t);
}
function Bb(t) {
  return t.index === true;
}
function xa(t, e, n = [], i = {}, a = false) {
  return t.map((l, u) => {
    let d = [...n, String(u)];
    let f = typeof l.id == "string" ? l.id : d.join("-");
    ze(l.index !== true || !l.children, "Cannot specify children on an index route");
    ze(a || !i[f], `Found a route id collision on id "${f}".  Route id's must be globally unique within Data Router usages`);
    if (Bb(l)) {
      let m = {
        ...l,
        id: f
      };
      i[f] = $m(m, e(m));
      return m;
    } else {
      let m = {
        ...l,
        id: f,
        children: undefined
      };
      i[f] = $m(m, e(m));
      if (l.children) {
        m.children = xa(l.children, e, d, i, a);
      }
      return m;
    }
  });
}
function $m(t, e) {
  return Object.assign(t, {
    ...e,
    ...(typeof e.lazy == "object" && e.lazy != null ? {
      lazy: {
        ...t.lazy,
        ...e.lazy
      }
    } : {})
  });
}
function Es(t, e, n = "/") {
  return pa(t, e, n, false);
}
function pa(t, e, n, i) {
  let a = typeof e == "string" ? $s(e) : e;
  let l = Vr(a.pathname || "/", n);
  if (l == null) {
    return null;
  }
  let u = Dy(t);
  Wb(u);
  let d = null;
  for (let f = 0; d == null && f < u.length; ++f) {
    let m = t_(l);
    d = Zb(u[f], m, i);
  }
  return d;
}
function Hb(t, e) {
  let {
    route: n,
    pathname: i,
    params: a
  } = t;
  return {
    id: n.id,
    pathname: i,
    params: a,
    data: e[n.id],
    loaderData: e[n.id],
    handle: n.handle
  };
}
function Dy(t, e = [], n = [], i = "", a = false) {
  let l = (u, d, f = a, m) => {
    let y = {
      relativePath: m === undefined ? u.path || "" : m,
      caseSensitive: u.caseSensitive === true,
      childrenIndex: d,
      route: u
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(i) && f) {
        return;
      }
      ze(y.relativePath.startsWith(i), `Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
      y.relativePath = y.relativePath.slice(i.length);
    }
    let g = Tn([i, y.relativePath]);
    let b = n.concat(y);
    if (u.children && u.children.length > 0) {
      ze(u.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`);
      Dy(u.children, e, b, g, f);
    }
    if (u.path != null || !!u.index) {
      e.push({
        path: g,
        score: Yb(g, u.index),
        routesMeta: b
      });
    }
  };
  t.forEach((u, d) => {
    var f;
    if (u.path === "" || (f = u.path) == null || !f.includes("?")) {
      l(u, d);
    } else {
      for (let m of Uy(u.path)) {
        l(u, d, true, m);
      }
    }
  });
  return e;
}
function Uy(t) {
  let e = t.split("/");
  if (e.length === 0) {
    return [];
  }
  let [n, ...i] = e;
  let a = n.endsWith("?");
  let l = n.replace(/\?$/, "");
  if (i.length === 0) {
    if (a) {
      return [l, ""];
    } else {
      return [l];
    }
  }
  let u = Uy(i.join("/"));
  let d = [];
  d.push(...u.map(f => f === "" ? l : [l, f].join("/")));
  if (a) {
    d.push(...u);
  }
  return d.map(f => t.startsWith("/") && f === "" ? "/" : f);
}
function Wb(t) {
  t.sort((e, n) => e.score !== n.score ? n.score - e.score : Xb(e.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)));
}
var Vb = /^:[\w-]+$/;
var qb = 3;
var Kb = 2;
var Gb = 1;
var Jb = 10;
var Qb = -2;
var Fm = t => t === "*";
function Yb(t, e) {
  let n = t.split("/");
  let i = n.length;
  if (n.some(Fm)) {
    i += Qb;
  }
  if (e) {
    i += Kb;
  }
  return n.filter(a => !Fm(a)).reduce((a, l) => a + (Vb.test(l) ? qb : l === "" ? Gb : Jb), i);
}
function Xb(t, e) {
  if (t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a])) {
    return t[t.length - 1] - e[e.length - 1];
  } else {
    return 0;
  }
}
function Zb(t, e, n = false) {
  let {
    routesMeta: i
  } = t;
  let a = {};
  let l = "/";
  let u = [];
  for (let d = 0; d < i.length; ++d) {
    let f = i[d];
    let m = d === i.length - 1;
    let y = l === "/" ? e : e.slice(l.length) || "/";
    let g = vu({
      path: f.relativePath,
      caseSensitive: f.caseSensitive,
      end: m
    }, y);
    let b = f.route;
    if (!g && m && n && !i[i.length - 1].route.index) {
      g = vu({
        path: f.relativePath,
        caseSensitive: f.caseSensitive,
        end: false
      }, y);
    }
    if (!g) {
      return null;
    }
    Object.assign(a, g.params);
    u.push({
      params: a,
      pathname: Tn([l, g.pathname]),
      pathnameBase: s_(Tn([l, g.pathnameBase])),
      route: b
    });
    if (g.pathnameBase !== "/") {
      l = Tn([l, g.pathnameBase]);
    }
  }
  return u;
}
function vu(t, e) {
  if (typeof t == "string") {
    t = {
      path: t,
      caseSensitive: false,
      end: true
    };
  }
  let [n, i] = e_(t.path, t.caseSensitive, t.end);
  let a = e.match(n);
  if (!a) {
    return null;
  }
  let l = a[0];
  let u = l.replace(/(.)\/+$/, "$1");
  let d = a.slice(1);
  return {
    params: i.reduce((m, {
      paramName: y,
      isOptional: g
    }, b) => {
      if (y === "*") {
        let _ = d[b] || "";
        u = l.slice(0, l.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const w = d[b];
      if (g && !w) {
        m[y] = undefined;
      } else {
        m[y] = (w || "").replace(/%2F/g, "/");
      }
      return m;
    }, {}),
    pathname: l,
    pathnameBase: u,
    pattern: t
  };
}
function e_(t, e = false, n = true) {
  vt(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
  let i = [];
  let a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, f) => {
    i.push({
      paramName: d,
      isOptional: f != null
    });
    if (f) {
      return "/?([^\\/]+)?";
    } else {
      return "/([^\\/]+)";
    }
  }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (t.endsWith("*")) {
    i.push({
      paramName: "*"
    });
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (n) {
    a += "\\/*$";
  } else if (t !== "" && t !== "/") {
    a += "(?:(?=\\/|$))";
  }
  return [new RegExp(a, e ? undefined : "i"), i];
}
function t_(t) {
  try {
    return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
  } catch (e) {
    vt(false, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`);
    return t;
  }
}
function Vr(t, e) {
  if (e === "/") {
    return t;
  }
  if (!t.toLowerCase().startsWith(e.toLowerCase())) {
    return null;
  }
  let n = e.endsWith("/") ? e.length - 1 : e.length;
  let i = t.charAt(n);
  if (i && i !== "/") {
    return null;
  } else {
    return t.slice(n) || "/";
  }
}
function r_({
  basename: t,
  pathname: e
}) {
  if (e === "/") {
    return t;
  } else {
    return Tn([t, e]);
  }
}
var My = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Oh = t => My.test(t);
function n_(t, e = "/") {
  let {
    pathname: n,
    search: i = "",
    hash: a = ""
  } = typeof t == "string" ? $s(t) : t;
  let l;
  if (n) {
    n = n.replace(/\/\/+/g, "/");
    if (n.startsWith("/")) {
      l = zm(n.substring(1), "/");
    } else {
      l = zm(n, e);
    }
  } else {
    l = e;
  }
  return {
    pathname: l,
    search: i_(i),
    hash: o_(a)
  };
}
function zm(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  t.split("/").forEach(a => {
    if (a === "..") {
      if (n.length > 1) {
        n.pop();
      }
    } else if (a !== ".") {
      n.push(a);
    }
  });
  if (n.length > 1) {
    return n.join("/");
  } else {
    return "/";
  }
}
function kd(t, e, n, i) {
  return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $y(t) {
  return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0);
}
function Tu(t) {
  let e = $y(t);
  return e.map((n, i) => i === e.length - 1 ? n.pathname : n.pathnameBase);
}
function Cu(t, e, n, i = false) {
  let a;
  if (typeof t == "string") {
    a = $s(t);
  } else {
    a = {
      ...t
    };
    ze(!a.pathname || !a.pathname.includes("?"), kd("?", "pathname", "search", a));
    ze(!a.pathname || !a.pathname.includes("#"), kd("#", "pathname", "hash", a));
    ze(!a.search || !a.search.includes("#"), kd("#", "search", "hash", a));
  }
  let l = t === "" || a.pathname === "";
  let u = l ? "/" : a.pathname;
  let d;
  if (u == null) {
    d = n;
  } else {
    let g = e.length - 1;
    if (!i && u.startsWith("..")) {
      let b = u.split("/");
      while (b[0] === "..") {
        b.shift();
        g -= 1;
      }
      a.pathname = b.join("/");
    }
    d = g >= 0 ? e[g] : "/";
  }
  let f = n_(a, d);
  let m = u && u !== "/" && u.endsWith("/");
  let y = (l || u === ".") && n.endsWith("/");
  if (!f.pathname.endsWith("/") && (m || y)) {
    f.pathname += "/";
  }
  return f;
}
var Tn = t => t.join("/").replace(/\/\/+/g, "/");
var s_ = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
var i_ = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t;
var o_ = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
var Fa = class {
  constructor(t, e, n, i = false) {
    this.status = t;
    this.statusText = e || "";
    this.internal = i;
    if (n instanceof Error) {
      this.data = n.toString();
      this.error = n;
    } else {
      this.data = n;
    }
  }
};
function Ra(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
function za(t) {
  return t.map(e => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Fy = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function zy(t, e) {
  let n = t;
  if (typeof n != "string" || !My.test(n)) {
    return {
      absoluteURL: undefined,
      isExternal: false,
      to: n
    };
  }
  let i = n;
  let a = false;
  if (Fy) {
    try {
      let l = new URL(window.location.href);
      let u = n.startsWith("//") ? new URL(l.protocol + n) : new URL(n);
      let d = Vr(u.pathname, e);
      if (u.origin === l.origin && d != null) {
        n = d + u.search + u.hash;
      } else {
        a = true;
      }
    } catch {
      vt(false, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
  }
  return {
    absoluteURL: i,
    isExternal: a,
    to: n
  };
}
var Us = Symbol("Uninstrumented");
function a_(t, e) {
  let n = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  t.forEach(a => a({
    id: e.id,
    index: e.index,
    path: e.path,
    instrument(l) {
      let u = Object.keys(n);
      for (let d of u) {
        if (l[d]) {
          n[d].push(l[d]);
        }
      }
    }
  }));
  let i = {};
  if (typeof e.lazy == "function" && n.lazy.length > 0) {
    let a = io(n.lazy, e.lazy, () => {});
    if (a) {
      i.lazy = a;
    }
  }
  if (typeof e.lazy == "object") {
    let a = e.lazy;
    ["middleware", "loader", "action"].forEach(l => {
      let u = a[l];
      let d = n[`lazy.${l}`];
      if (typeof u == "function" && d.length > 0) {
        let f = io(d, u, () => {});
        if (f) {
          i.lazy = Object.assign(i.lazy || {}, {
            [l]: f
          });
        }
      }
    });
  }
  ["loader", "action"].forEach(a => {
    let l = e[a];
    if (typeof l == "function" && n[a].length > 0) {
      let u = l[Us] ?? l;
      let d = io(n[a], u, (...f) => Bm(f[0]));
      if (d) {
        if (a === "loader" && u.hydrate === true) {
          d.hydrate = true;
        }
        d[Us] = u;
        i[a] = d;
      }
    }
  });
  if (e.middleware && e.middleware.length > 0 && n.middleware.length > 0) {
    i.middleware = e.middleware.map(a => {
      let l = a[Us] ?? a;
      let u = io(n.middleware, l, (...d) => Bm(d[0]));
      if (u) {
        u[Us] = l;
        return u;
      } else {
        return a;
      }
    });
  }
  return i;
}
function l_(t, e) {
  let n = {
    navigate: [],
    fetch: []
  };
  e.forEach(i => i({
    instrument(a) {
      let l = Object.keys(a);
      for (let u of l) {
        if (a[u]) {
          n[u].push(a[u]);
        }
      }
    }
  }));
  if (n.navigate.length > 0) {
    let i = t.navigate[Us] ?? t.navigate;
    let a = io(n.navigate, i, (...l) => {
      let [u, d] = l;
      return {
        to: typeof u == "number" || typeof u == "string" ? u : u ? Cn(u) : ".",
        ...Hm(t, d ?? {})
      };
    });
    if (a) {
      a[Us] = i;
      t.navigate = a;
    }
  }
  if (n.fetch.length > 0) {
    let i = t.fetch[Us] ?? t.fetch;
    let a = io(n.fetch, i, (...l) => {
      let [u,, d, f] = l;
      return {
        href: d ?? ".",
        fetcherKey: u,
        ...Hm(t, f ?? {})
      };
    });
    if (a) {
      a[Us] = i;
      t.fetch = a;
    }
  }
  return t;
}
function io(t, e, n) {
  if (t.length === 0) {
    return null;
  } else {
    return async (...i) => {
      let a = await By(t, n(...i), () => e(...i), t.length - 1);
      if (a.type === "error") {
        throw a.value;
      }
      return a.value;
    };
  }
}
async function By(t, e, n, i) {
  let a = t[i];
  let l;
  if (a) {
    let u;
    let d = async () => {
      if (u) {
        console.error("You cannot call instrumented handlers more than once");
      } else {
        u = By(t, e, n, i - 1);
      }
      l = await u;
      ze(l, "Expected a result");
      if (l.type === "error" && l.value instanceof Error) {
        return {
          status: "error",
          error: l.value
        };
      } else {
        return {
          status: "success",
          error: undefined
        };
      }
    };
    try {
      await a(d, e);
    } catch (f) {
      console.error("An instrumentation function threw an error:", f);
    }
    if (!u) {
      await d();
    }
    await u;
  } else {
    try {
      l = {
        type: "success",
        value: await n()
      };
    } catch (u) {
      l = {
        type: "error",
        value: u
      };
    }
  }
  return l || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Bm(t) {
  let {
    request: e,
    context: n,
    params: i,
    unstable_pattern: a
  } = t;
  return {
    request: u_(e),
    params: {
      ...i
    },
    unstable_pattern: a,
    context: c_(n)
  };
}
function Hm(t, e) {
  return {
    currentUrl: Cn(t.state.location),
    ...("formMethod" in e ? {
      formMethod: e.formMethod
    } : {}),
    ...("formEncType" in e ? {
      formEncType: e.formEncType
    } : {}),
    ...("formData" in e ? {
      formData: e.formData
    } : {}),
    ...("body" in e ? {
      body: e.body
    } : {})
  };
}
function u_(t) {
  return {
    method: t.method,
    url: t.url,
    headers: {
      get: (...e) => t.headers.get(...e)
    }
  };
}
function c_(t) {
  if (h_(t)) {
    let e = {
      ...t
    };
    Object.freeze(e);
    return e;
  } else {
    return {
      get: e => t.get(e)
    };
  }
}
var d_ = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function h_(t) {
  if (t === null || typeof t != "object") {
    return false;
  }
  const e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null || Object.getOwnPropertyNames(e).sort().join("\0") === d_;
}
var Hy = ["POST", "PUT", "PATCH", "DELETE"];
var f_ = new Set(Hy);
var p_ = ["GET", ...Hy];
var m_ = new Set(p_);
var Wy = new Set([301, 302, 303, 307, 308]);
var g_ = new Set([307, 308]);
var Ed = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
var y_ = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
var oa = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
var v_ = t => ({
  hasErrorBoundary: !!t.hasErrorBoundary
});
var Vy = "remix-router-transitions";
var qy = Symbol("ResetLoaderData");
function w_(t) {
  const e = t.window ? t.window : typeof window !== "undefined" ? window : undefined;
  const n = typeof e !== "undefined" && typeof e.document !== "undefined" && typeof e.document.createElement !== "undefined";
  ze(t.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i = t.hydrationRouteProperties || [];
  let a = t.mapRouteProperties || v_;
  let l = a;
  if (t.unstable_instrumentations) {
    let E = t.unstable_instrumentations;
    l = P => ({
      ...a(P),
      ...a_(E.map($ => $.route).filter(Boolean), P)
    });
  }
  let u = {};
  let d = xa(t.routes, l, undefined, u);
  let f;
  let m = t.basename || "/";
  if (!m.startsWith("/")) {
    m = `/${m}`;
  }
  let y = t.dataStrategy || E_;
  let g = {
    ...t.future
  };
  let b = null;
  let w = new Set();
  let _ = null;
  let k = null;
  let x = null;
  let I = t.hydrationData != null;
  let N = Es(d, t.history.location, m);
  let L = false;
  let B = null;
  let J;
  if (N == null && !t.patchRoutesOnNavigation) {
    let E = Wr(404, {
      pathname: t.history.location.pathname
    });
    let {
      matches: P,
      route: $
    } = Ql(d);
    J = true;
    N = P;
    B = {
      [$.id]: E
    };
  } else {
    if (N && !t.hydrationData && wt(N, d, t.history.location.pathname).active) {
      N = null;
    }
    if (N) {
      if (N.some(E => E.route.lazy)) {
        J = false;
      } else if (!N.some(E => Ah(E.route))) {
        J = true;
      } else {
        let E = t.hydrationData ? t.hydrationData.loaderData : null;
        let P = t.hydrationData ? t.hydrationData.errors : null;
        if (P) {
          let $ = N.findIndex(W => P[W.route.id] !== undefined);
          J = N.slice(0, $ + 1).every(W => !eh(W.route, E, P));
        } else {
          J = N.every($ => !eh($.route, E, P));
        }
      }
    } else {
      J = false;
      N = [];
      let E = wt(null, d, t.history.location.pathname);
      if (E.active && E.matches) {
        L = true;
        N = E.matches;
      }
    }
  }
  let Q;
  let j = {
    historyAction: t.history.action,
    location: t.history.location,
    matches: N,
    initialized: J,
    navigation: Ed,
    restoreScrollPosition: t.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: t.hydrationData && t.hydrationData.loaderData || {},
    actionData: t.hydrationData && t.hydrationData.actionData || null,
    errors: t.hydrationData && t.hydrationData.errors || B,
    fetchers: new Map(),
    blockers: new Map()
  };
  let H = "POP";
  let Z = null;
  let be = false;
  let Re;
  let Le = false;
  let He = new Map();
  let Me = null;
  let Ie = false;
  let re = false;
  let ye = new Set();
  let U = new Map();
  let se = 0;
  let Y = -1;
  let R = new Map();
  let z = new Set();
  let X = new Map();
  let ie = new Map();
  let ve = new Set();
  let le = new Map();
  let xe;
  let je = null;
  function We() {
    b = t.history.listen(({
      action: E,
      location: P,
      delta: $
    }) => {
      if (xe) {
        xe();
        xe = undefined;
        return;
      }
      vt(le.size === 0 || $ != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let W = Jr({
        currentLocation: j.location,
        nextLocation: P,
        historyAction: E
      });
      if (W && $ != null) {
        let te = new Promise(Se => {
          xe = Se;
        });
        t.history.go($ * -1);
        hn(W, {
          state: "blocked",
          location: P,
          proceed() {
            hn(W, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location: P
            });
            te.then(() => t.history.go($));
          },
          reset() {
            let Se = new Map(j.blockers);
            Se.set(W, oa);
            rt({
              blockers: Se
            });
          }
        });
        if (Z != null) {
          Z.resolve();
        }
        Z = null;
        return;
      }
      return yr(E, P);
    });
    if (n) {
      B_(e, He);
      let E = () => H_(e, He);
      e.addEventListener("pagehide", E);
      Me = () => e.removeEventListener("pagehide", E);
    }
    if (!j.initialized) {
      yr("POP", j.location, {
        initialHydration: true
      });
    }
    return Q;
  }
  function nt() {
    if (b) {
      b();
    }
    if (Me) {
      Me();
    }
    w.clear();
    if (Re) {
      Re.abort();
    }
    j.fetchers.forEach((E, P) => jr(P));
    j.blockers.forEach((E, P) => Xt(P));
  }
  function Ar(E) {
    w.add(E);
    return () => w.delete(E);
  }
  function rt(E, P = {}) {
    E.matches &&= E.matches.map(te => {
      let Se = u[te.route.id];
      let Te = te.route;
      if (Te.element !== Se.element || Te.errorElement !== Se.errorElement || Te.hydrateFallbackElement !== Se.hydrateFallbackElement) {
        return {
          ...te,
          route: Se
        };
      } else {
        return te;
      }
    });
    j = {
      ...j,
      ...E
    };
    let $ = [];
    let W = [];
    j.fetchers.forEach((te, Se) => {
      if (te.state === "idle") {
        if (ve.has(Se)) {
          $.push(Se);
        } else {
          W.push(Se);
        }
      }
    });
    ve.forEach(te => {
      if (!j.fetchers.has(te) && !U.has(te)) {
        $.push(te);
      }
    });
    [...w].forEach(te => te(j, {
      deletedFetchers: $,
      newErrors: E.errors ?? null,
      viewTransitionOpts: P.viewTransitionOpts,
      flushSync: P.flushSync === true
    }));
    $.forEach(te => jr(te));
    W.forEach(te => j.fetchers.delete(te));
  }
  function gr(E, P, {
    flushSync: $
  } = {}) {
    var Ue;
    var Ee;
    let W = j.actionData != null && j.navigation.formMethod != null && Qt(j.navigation.formMethod) && j.navigation.state === "loading" && ((Ue = E.state) == null ? undefined : Ue._isRedirect) !== true;
    let te;
    if (P.actionData) {
      if (Object.keys(P.actionData).length > 0) {
        te = P.actionData;
      } else {
        te = null;
      }
    } else if (W) {
      te = j.actionData;
    } else {
      te = null;
    }
    let Se = P.loaderData ? Zm(j.loaderData, P.loaderData, P.matches || [], P.errors) : j.loaderData;
    let Te = j.blockers;
    if (Te.size > 0) {
      Te = new Map(Te);
      Te.forEach(($e, Ve) => Te.set(Ve, oa));
    }
    let ce = Ie ? false : pt(E, P.matches || j.matches);
    let he = be === true || j.navigation.formMethod != null && Qt(j.navigation.formMethod) && ((Ee = E.state) == null ? undefined : Ee._isRedirect) !== true;
    if (f) {
      d = f;
      f = undefined;
    }
    if (!Ie && H !== "POP") {
      if (H === "PUSH") {
        t.history.push(E, E.state);
      } else if (H === "REPLACE") {
        t.history.replace(E, E.state);
      }
    }
    let we;
    if (H === "POP") {
      let $e = He.get(j.location.pathname);
      if ($e && $e.has(E.pathname)) {
        we = {
          currentLocation: j.location,
          nextLocation: E
        };
      } else if (He.has(E.pathname)) {
        we = {
          currentLocation: E,
          nextLocation: j.location
        };
      }
    } else if (Le) {
      let $e = He.get(j.location.pathname);
      if ($e) {
        $e.add(E.pathname);
      } else {
        $e = new Set([E.pathname]);
        He.set(j.location.pathname, $e);
      }
      we = {
        currentLocation: j.location,
        nextLocation: E
      };
    }
    rt({
      ...P,
      actionData: te,
      loaderData: Se,
      historyAction: H,
      location: E,
      initialized: true,
      navigation: Ed,
      revalidation: "idle",
      restoreScrollPosition: ce,
      preventScrollReset: he,
      blockers: Te
    }, {
      viewTransitionOpts: we,
      flushSync: $ === true
    });
    H = "POP";
    be = false;
    Le = false;
    Ie = false;
    re = false;
    if (Z != null) {
      Z.resolve();
    }
    Z = null;
    if (je != null) {
      je.resolve();
    }
    je = null;
  }
  async function an(E, P) {
    if (Z != null) {
      Z.resolve();
    }
    Z = null;
    if (typeof E == "number") {
      Z ||= ng();
      let Ve = Z.promise;
      t.history.go(E);
      return Ve;
    }
    let $ = Zd(j.location, j.matches, m, E, P == null ? undefined : P.fromRouteId, P == null ? undefined : P.relative);
    let {
      path: W,
      submission: te,
      error: Se
    } = Wm(false, $, P);
    let Te = j.location;
    let ce = Ea(j.location, W, P && P.state);
    ce = {
      ...ce,
      ...t.history.encodeLocation(ce)
    };
    let he = P && P.replace != null ? P.replace : undefined;
    let we = "PUSH";
    if (he === true) {
      we = "REPLACE";
    } else if (he !== false) {
      if (te != null && Qt(te.formMethod) && te.formAction === j.location.pathname + j.location.search) {
        we = "REPLACE";
      }
    }
    let Ue = P && "preventScrollReset" in P ? P.preventScrollReset === true : undefined;
    let Ee = (P && P.flushSync) === true;
    let $e = Jr({
      currentLocation: Te,
      nextLocation: ce,
      historyAction: we
    });
    if ($e) {
      hn($e, {
        state: "blocked",
        location: ce,
        proceed() {
          hn($e, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: ce
          });
          an(E, P);
        },
        reset() {
          let Ve = new Map(j.blockers);
          Ve.set($e, oa);
          rt({
            blockers: Ve
          });
        }
      });
      return;
    }
    await yr(we, ce, {
      submission: te,
      pendingError: Se,
      preventScrollReset: Ue,
      replace: P && P.replace,
      enableViewTransition: P && P.viewTransition,
      flushSync: Ee,
      callSiteDefaultShouldRevalidate: P && P.unstable_defaultShouldRevalidate
    });
  }
  function Ei() {
    je ||= ng();
    An();
    rt({
      revalidation: "loading"
    });
    let E = je.promise;
    if (j.navigation.state === "submitting") {
      return E;
    } else if (j.navigation.state === "idle") {
      yr(j.historyAction, j.location, {
        startUninterruptedRevalidation: true
      });
      return E;
    } else {
      yr(H || j.historyAction, j.navigation.location, {
        overrideNavigation: j.navigation,
        enableViewTransition: Le === true
      });
      return E;
    }
  }
  async function yr(E, P, $) {
    if (Re) {
      Re.abort();
    }
    Re = null;
    H = E;
    Ie = ($ && $.startUninterruptedRevalidation) === true;
    ct(j.location, j.matches);
    be = ($ && $.preventScrollReset) === true;
    Le = ($ && $.enableViewTransition) === true;
    let W = f || d;
    let te = $ && $.overrideNavigation;
    let Se = $ != null && $.initialHydration && j.matches && j.matches.length > 0 && !L ? j.matches : Es(W, P, m);
    let Te = ($ && $.flushSync) === true;
    if (Se && j.initialized && !re && I_(j.location, P) && (!$ || !$.submission || !Qt($.submission.formMethod))) {
      gr(P, {
        matches: Se
      }, {
        flushSync: Te
      });
      return;
    }
    let ce = wt(Se, W, P.pathname);
    if (ce.active && ce.matches) {
      Se = ce.matches;
    }
    if (!Se) {
      let {
        error: bt,
        notFoundMatches: At,
        route: Ye
      } = vr(P.pathname);
      gr(P, {
        matches: At,
        loaderData: {},
        errors: {
          [Ye.id]: bt
        }
      }, {
        flushSync: Te
      });
      return;
    }
    Re = new AbortController();
    let he = eo(t.history, P, Re.signal, $ && $.submission);
    let we = t.getContext ? await t.getContext() : new Mm();
    let Ue;
    if ($ && $.pendingError) {
      Ue = [xs(Se).route.id, {
        type: "error",
        error: $.pendingError
      }];
    } else if ($ && $.submission && Qt($.submission.formMethod)) {
      let bt = await Kr(he, P, $.submission, Se, we, ce.active, $ && $.initialHydration === true, {
        replace: $.replace,
        flushSync: Te
      });
      if (bt.shortCircuited) {
        return;
      }
      if (bt.pendingActionResult) {
        let [At, Ye] = bt.pendingActionResult;
        if (Tr(Ye) && Ra(Ye.error) && Ye.error.status === 404) {
          Re = null;
          gr(P, {
            matches: bt.matches,
            loaderData: {},
            errors: {
              [At]: Ye.error
            }
          });
          return;
        }
      }
      Se = bt.matches || Se;
      Ue = bt.pendingActionResult;
      te = xd(P, $.submission);
      Te = false;
      ce.active = false;
      he = eo(t.history, he.url, he.signal);
    }
    let {
      shortCircuited: Ee,
      matches: $e,
      loaderData: Ve,
      errors: kt
    } = await Fs(he, P, Se, we, ce.active, te, $ && $.submission, $ && $.fetcherSubmission, $ && $.replace, $ && $.initialHydration === true, Te, Ue, $ && $.callSiteDefaultShouldRevalidate);
    if (!Ee) {
      Re = null;
      gr(P, {
        matches: $e || Se,
        ...eg(Ue),
        loaderData: Ve,
        errors: kt
      });
    }
  }
  async function Kr(E, P, $, W, te, Se, Te, ce = {}) {
    An();
    let he = F_(P, $);
    rt({
      navigation: he
    }, {
      flushSync: ce.flushSync === true
    });
    if (Se) {
      let Ee = await wr(W, P.pathname, E.signal);
      if (Ee.type === "aborted") {
        return {
          shortCircuited: true
        };
      }
      if (Ee.type === "error") {
        if (Ee.partialMatches.length === 0) {
          let {
            matches: Ve,
            route: kt
          } = Ql(d);
          return {
            matches: Ve,
            pendingActionResult: [kt.id, {
              type: "error",
              error: Ee.error
            }]
          };
        }
        let $e = xs(Ee.partialMatches).route.id;
        return {
          matches: Ee.partialMatches,
          pendingActionResult: [$e, {
            type: "error",
            error: Ee.error
          }]
        };
      } else if (Ee.matches) {
        W = Ee.matches;
      } else {
        let {
          notFoundMatches: $e,
          error: Ve,
          route: kt
        } = vr(P.pathname);
        return {
          matches: $e,
          pendingActionResult: [kt.id, {
            type: "error",
            error: Ve
          }]
        };
      }
    }
    let we;
    let Ue = du(W, P);
    if (!Ue.route.action && !Ue.route.lazy) {
      we = {
        type: "error",
        error: Wr(405, {
          method: E.method,
          pathname: P.pathname,
          routeId: Ue.route.id
        })
      };
    } else {
      let Ee = ao(l, u, E, W, Ue, Te ? [] : i, te);
      let $e = await un(E, Ee, te, null);
      we = $e[Ue.route.id];
      if (!we) {
        for (let Ve of W) {
          if ($e[Ve.route.id]) {
            we = $e[Ve.route.id];
            break;
          }
        }
      }
      if (E.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (di(we)) {
      let Ee;
      if (ce && ce.replace != null) {
        Ee = ce.replace;
      } else {
        Ee = Qm(we.response.headers.get("Location"), new URL(E.url), m, t.history) === j.location.pathname + j.location.search;
      }
      await Ir(E, we, true, {
        submission: $,
        replace: Ee
      });
      return {
        shortCircuited: true
      };
    }
    if (Tr(we)) {
      let Ee = xs(W, Ue.route.id);
      if ((ce && ce.replace) !== true) {
        H = "PUSH";
      }
      return {
        matches: W,
        pendingActionResult: [Ee.route.id, we, Ue.route.id]
      };
    }
    return {
      matches: W,
      pendingActionResult: [Ue.route.id, we]
    };
  }
  async function Fs(E, P, $, W, te, Se, Te, ce, he, we, Ue, Ee, $e) {
    let Ve = Se || xd(P, Te);
    let kt = Te || ce || rg(Ve);
    let bt = !Ie && !we;
    if (te) {
      if (bt) {
        let tt = Ht(Ee);
        rt({
          navigation: Ve,
          ...(tt !== undefined ? {
            actionData: tt
          } : {})
        }, {
          flushSync: Ue
        });
      }
      let Ke = await wr($, P.pathname, E.signal);
      if (Ke.type === "aborted") {
        return {
          shortCircuited: true
        };
      }
      if (Ke.type === "error") {
        if (Ke.partialMatches.length === 0) {
          let {
            matches: rs,
            route: Ln
          } = Ql(d);
          return {
            matches: rs,
            loaderData: {},
            errors: {
              [Ln.id]: Ke.error
            }
          };
        }
        let tt = xs(Ke.partialMatches).route.id;
        return {
          matches: Ke.partialMatches,
          loaderData: {},
          errors: {
            [tt]: Ke.error
          }
        };
      } else if (Ke.matches) {
        $ = Ke.matches;
      } else {
        let {
          error: tt,
          notFoundMatches: rs,
          route: Ln
        } = vr(P.pathname);
        return {
          matches: rs,
          loaderData: {},
          errors: {
            [Ln.id]: tt
          }
        };
      }
    }
    let At = f || d;
    let {
      dsMatches: Ye,
      revalidatingFetchers: sr
    } = Vm(E, W, l, u, t.history, j, $, kt, P, we ? [] : i, we === true, re, ye, ve, X, z, At, m, t.patchRoutesOnNavigation != null, Ee, $e);
    Y = ++se;
    if (!t.dataStrategy && !Ye.some(Ke => Ke.shouldLoad) && !Ye.some(Ke => Ke.route.middleware && Ke.route.middleware.length > 0) && sr.length === 0) {
      let Ke = In();
      gr(P, {
        matches: $,
        loaderData: {},
        errors: Ee && Tr(Ee[1]) ? {
          [Ee[0]]: Ee[1].error
        } : null,
        ...eg(Ee),
        ...(Ke ? {
          fetchers: new Map(j.fetchers)
        } : {})
      }, {
        flushSync: Ue
      });
      return {
        shortCircuited: true
      };
    }
    if (bt) {
      let Ke = {};
      if (!te) {
        Ke.navigation = Ve;
        let tt = Ht(Ee);
        if (tt !== undefined) {
          Ke.actionData = tt;
        }
      }
      if (sr.length > 0) {
        Ke.fetchers = On(sr);
      }
      rt(Ke, {
        flushSync: Ue
      });
    }
    sr.forEach(Ke => {
      nr(Ke.key);
      if (Ke.controller) {
        U.set(Ke.key, Ke.controller);
      }
    });
    let Ze = () => sr.forEach(Ke => nr(Ke.key));
    if (Re) {
      Re.signal.addEventListener("abort", Ze);
    }
    let {
      loaderResults: Hs,
      fetcherResults: Nr
    } = await cn(Ye, sr, E, W);
    if (E.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    if (Re) {
      Re.signal.removeEventListener("abort", Ze);
    }
    sr.forEach(Ke => U.delete(Ke.key));
    let br = Yl(Hs);
    if (br) {
      await Ir(E, br.result, true, {
        replace: he
      });
      return {
        shortCircuited: true
      };
    }
    br = Yl(Nr);
    if (br) {
      z.add(br.key);
      await Ir(E, br.result, true, {
        replace: he
      });
      return {
        shortCircuited: true
      };
    }
    let {
      loaderData: ts,
      errors: Ws
    } = Xm(j, $, Hs, Ee, sr, Nr);
    if (we && j.errors) {
      Ws = {
        ...j.errors,
        ...Ws
      };
    }
    let pn = In();
    let Nn = es(Y);
    let Zt = pn || Nn || sr.length > 0;
    return {
      matches: $,
      loaderData: ts,
      errors: Ws,
      ...(Zt ? {
        fetchers: new Map(j.fetchers)
      } : {})
    };
  }
  function Ht(E) {
    if (E && !Tr(E[1])) {
      return {
        [E[0]]: E[1].data
      };
    }
    if (j.actionData) {
      if (Object.keys(j.actionData).length === 0) {
        return null;
      } else {
        return j.actionData;
      }
    }
  }
  function On(E) {
    E.forEach(P => {
      let $ = j.fetchers.get(P.key);
      let W = aa(undefined, $ ? $.data : undefined);
      j.fetchers.set(P.key, W);
    });
    return new Map(j.fetchers);
  }
  async function ln(E, P, $, W) {
    nr(E);
    let te = (W && W.flushSync) === true;
    let Se = f || d;
    let Te = Zd(j.location, j.matches, m, $, P, W == null ? undefined : W.relative);
    let ce = Es(Se, Te, m);
    let he = wt(ce, Se, Te);
    if (he.active && he.matches) {
      ce = he.matches;
    }
    if (!ce) {
      Wt(E, P, Wr(404, {
        pathname: Te
      }), {
        flushSync: te
      });
      return;
    }
    let {
      path: we,
      submission: Ue,
      error: Ee
    } = Wm(true, Te, W);
    if (Ee) {
      Wt(E, P, Ee, {
        flushSync: te
      });
      return;
    }
    let $e = t.getContext ? await t.getContext() : new Mm();
    let Ve = (W && W.preventScrollReset) === true;
    if (Ue && Qt(Ue.formMethod)) {
      await Rt(E, P, we, ce, $e, he.active, te, Ve, Ue, W && W.unstable_defaultShouldRevalidate);
      return;
    }
    X.set(E, {
      routeId: P,
      path: we
    });
    await Gr(E, P, we, ce, $e, he.active, te, Ve, Ue);
  }
  async function Rt(E, P, $, W, te, Se, Te, ce, he, we) {
    An();
    X.delete(E);
    let Ue = j.fetchers.get(E);
    Ut(E, z_(he, Ue), {
      flushSync: Te
    });
    let Ee = new AbortController();
    let $e = eo(t.history, $, Ee.signal, he);
    if (Se) {
      let lt = await wr(W, new URL($e.url).pathname, $e.signal, E);
      if (lt.type === "aborted") {
        return;
      }
      if (lt.type === "error") {
        Wt(E, P, lt.error, {
          flushSync: Te
        });
        return;
      } else if (lt.matches) {
        W = lt.matches;
      } else {
        Wt(E, P, Wr(404, {
          pathname: $
        }), {
          flushSync: Te
        });
        return;
      }
    }
    let Ve = du(W, $);
    if (!Ve.route.action && !Ve.route.lazy) {
      let lt = Wr(405, {
        method: he.formMethod,
        pathname: $,
        routeId: P
      });
      Wt(E, P, lt, {
        flushSync: Te
      });
      return;
    }
    U.set(E, Ee);
    let kt = se;
    let bt = ao(l, u, $e, W, Ve, i, te);
    let At = await un($e, bt, te, E);
    let Ye = At[Ve.route.id];
    if (!Ye) {
      for (let lt of bt) {
        if (At[lt.route.id]) {
          Ye = At[lt.route.id];
          break;
        }
      }
    }
    if ($e.signal.aborted) {
      if (U.get(E) === Ee) {
        U.delete(E);
      }
      return;
    }
    if (ve.has(E)) {
      if (di(Ye) || Tr(Ye)) {
        Ut(E, Gn(undefined));
        return;
      }
    } else {
      if (di(Ye)) {
        U.delete(E);
        if (Y > kt) {
          Ut(E, Gn(undefined));
          return;
        } else {
          z.add(E);
          Ut(E, aa(he));
          return Ir($e, Ye, false, {
            fetcherSubmission: he,
            preventScrollReset: ce
          });
        }
      }
      if (Tr(Ye)) {
        Wt(E, P, Ye.error);
        return;
      }
    }
    let sr = j.navigation.location || j.location;
    let Ze = eo(t.history, sr, Ee.signal);
    let Hs = f || d;
    let Nr = j.navigation.state !== "idle" ? Es(Hs, j.navigation.location, m) : j.matches;
    ze(Nr, "Didn't find any matches after fetcher action");
    let br = ++se;
    R.set(E, br);
    let ts = aa(he, Ye.data);
    j.fetchers.set(E, ts);
    let {
      dsMatches: Ws,
      revalidatingFetchers: pn
    } = Vm(Ze, te, l, u, t.history, j, Nr, he, sr, i, false, re, ye, ve, X, z, Hs, m, t.patchRoutesOnNavigation != null, [Ve.route.id, Ye], we);
    pn.filter(lt => lt.key !== E).forEach(lt => {
      let Dn = lt.key;
      let Vs = j.fetchers.get(Dn);
      let qs = aa(undefined, Vs ? Vs.data : undefined);
      j.fetchers.set(Dn, qs);
      nr(Dn);
      if (lt.controller) {
        U.set(Dn, lt.controller);
      }
    });
    rt({
      fetchers: new Map(j.fetchers)
    });
    let Nn = () => pn.forEach(lt => nr(lt.key));
    Ee.signal.addEventListener("abort", Nn);
    let {
      loaderResults: Zt,
      fetcherResults: Ke
    } = await cn(Ws, pn, Ze, te);
    if (Ee.signal.aborted) {
      return;
    }
    Ee.signal.removeEventListener("abort", Nn);
    R.delete(E);
    U.delete(E);
    pn.forEach(lt => U.delete(lt.key));
    if (j.fetchers.has(E)) {
      let lt = Gn(Ye.data);
      j.fetchers.set(E, lt);
    }
    let tt = Yl(Zt);
    if (tt) {
      return Ir(Ze, tt.result, false, {
        preventScrollReset: ce
      });
    }
    tt = Yl(Ke);
    if (tt) {
      z.add(tt.key);
      return Ir(Ze, tt.result, false, {
        preventScrollReset: ce
      });
    }
    let {
      loaderData: rs,
      errors: Ln
    } = Xm(j, Nr, Zt, undefined, pn, Ke);
    es(br);
    if (j.navigation.state === "loading" && br > Y) {
      ze(H, "Expected pending action");
      if (Re) {
        Re.abort();
      }
      gr(j.navigation.location, {
        matches: Nr,
        loaderData: rs,
        errors: Ln,
        fetchers: new Map(j.fetchers)
      });
    } else {
      rt({
        errors: Ln,
        loaderData: Zm(j.loaderData, rs, Nr, Ln),
        fetchers: new Map(j.fetchers)
      });
      re = false;
    }
  }
  async function Gr(E, P, $, W, te, Se, Te, ce, he) {
    let we = j.fetchers.get(E);
    Ut(E, aa(he, we ? we.data : undefined), {
      flushSync: Te
    });
    let Ue = new AbortController();
    let Ee = eo(t.history, $, Ue.signal);
    if (Se) {
      let Ye = await wr(W, new URL(Ee.url).pathname, Ee.signal, E);
      if (Ye.type === "aborted") {
        return;
      }
      if (Ye.type === "error") {
        Wt(E, P, Ye.error, {
          flushSync: Te
        });
        return;
      } else if (Ye.matches) {
        W = Ye.matches;
      } else {
        Wt(E, P, Wr(404, {
          pathname: $
        }), {
          flushSync: Te
        });
        return;
      }
    }
    let $e = du(W, $);
    U.set(E, Ue);
    let Ve = se;
    let kt = ao(l, u, Ee, W, $e, i, te);
    let At = (await un(Ee, kt, te, E))[$e.route.id];
    if (U.get(E) === Ue) {
      U.delete(E);
    }
    if (!Ee.signal.aborted) {
      if (ve.has(E)) {
        Ut(E, Gn(undefined));
        return;
      }
      if (di(At)) {
        if (Y > Ve) {
          Ut(E, Gn(undefined));
          return;
        } else {
          z.add(E);
          await Ir(Ee, At, false, {
            preventScrollReset: ce
          });
          return;
        }
      }
      if (Tr(At)) {
        Wt(E, P, At.error);
        return;
      }
      Ut(E, Gn(At.data));
    }
  }
  async function Ir(E, P, $, {
    submission: W,
    fetcherSubmission: te,
    preventScrollReset: Se,
    replace: Te
  } = {}) {
    if (!$) {
      if (Z != null) {
        Z.resolve();
      }
      Z = null;
    }
    if (P.response.headers.has("X-Remix-Revalidate")) {
      re = true;
    }
    let ce = P.response.headers.get("Location");
    ze(ce, "Expected a Location header on the redirect Response");
    ce = Qm(ce, new URL(E.url), m, t.history);
    let he = Ea(j.location, ce, {
      _isRedirect: true
    });
    if (n) {
      let kt = false;
      if (P.response.headers.has("X-Remix-Reload-Document")) {
        kt = true;
      } else if (Oh(ce)) {
        const bt = Ly(ce, true);
        kt = bt.origin !== e.location.origin || Vr(bt.pathname, m) == null;
      }
      if (kt) {
        if (Te) {
          e.location.replace(ce);
        } else {
          e.location.assign(ce);
        }
        return;
      }
    }
    Re = null;
    let we = Te === true || P.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
    let {
      formMethod: Ue,
      formAction: Ee,
      formEncType: $e
    } = j.navigation;
    if (!W && !te && Ue && Ee && $e) {
      W = rg(j.navigation);
    }
    let Ve = W || te;
    if (g_.has(P.response.status) && Ve && Qt(Ve.formMethod)) {
      await yr(we, he, {
        submission: {
          ...Ve,
          formAction: ce
        },
        preventScrollReset: Se || be,
        enableViewTransition: $ ? Le : undefined
      });
    } else {
      let kt = xd(he, W);
      await yr(we, he, {
        overrideNavigation: kt,
        fetcherSubmission: te,
        preventScrollReset: Se || be,
        enableViewTransition: $ ? Le : undefined
      });
    }
  }
  async function un(E, P, $, W) {
    var Te;
    let te;
    let Se = {};
    try {
      te = await R_(y, E, P, W, $, false);
    } catch (ce) {
      P.filter(he => he.shouldLoad).forEach(he => {
        Se[he.route.id] = {
          type: "error",
          error: ce
        };
      });
      return Se;
    }
    if (E.signal.aborted) {
      return Se;
    }
    if (!Qt(E.method)) {
      for (let ce of P) {
        if (((Te = te[ce.route.id]) == null ? undefined : Te.type) === "error") {
          break;
        }
        if (!te.hasOwnProperty(ce.route.id) && !j.loaderData.hasOwnProperty(ce.route.id) && (!j.errors || !j.errors.hasOwnProperty(ce.route.id)) && ce.shouldCallHandler()) {
          te[ce.route.id] = {
            type: "error",
            result: new Error(`No result returned from dataStrategy for route ${ce.route.id}`)
          };
        }
      }
    }
    for (let [ce, he] of Object.entries(te)) {
      if (D_(he)) {
        let we = he.result;
        Se[ce] = {
          type: "redirect",
          response: O_(we, E, ce, P, m)
        };
      } else {
        Se[ce] = await P_(he);
      }
    }
    return Se;
  }
  async function cn(E, P, $, W) {
    let te = un($, E, W, null);
    let Se = Promise.all(P.map(async he => {
      if (he.matches && he.match && he.request && he.controller) {
        let Ue = (await un(he.request, he.matches, W, he.key))[he.match.route.id];
        return {
          [he.key]: Ue
        };
      } else {
        return Promise.resolve({
          [he.key]: {
            type: "error",
            error: Wr(404, {
              pathname: he.path
            })
          }
        });
      }
    }));
    let Te = await te;
    let ce = (await Se).reduce((he, we) => Object.assign(he, we), {});
    return {
      loaderResults: Te,
      fetcherResults: ce
    };
  }
  function An() {
    re = true;
    X.forEach((E, P) => {
      if (U.has(P)) {
        ye.add(P);
      }
      nr(P);
    });
  }
  function Ut(E, P, $ = {}) {
    j.fetchers.set(E, P);
    rt({
      fetchers: new Map(j.fetchers)
    }, {
      flushSync: ($ && $.flushSync) === true
    });
  }
  function Wt(E, P, $, W = {}) {
    let te = xs(j.matches, P);
    jr(E);
    rt({
      errors: {
        [te.route.id]: $
      },
      fetchers: new Map(j.fetchers)
    }, {
      flushSync: (W && W.flushSync) === true
    });
  }
  function Yt(E) {
    ie.set(E, (ie.get(E) || 0) + 1);
    if (ve.has(E)) {
      ve.delete(E);
    }
    return j.fetchers.get(E) || y_;
  }
  function dn(E, P) {
    nr(E, P == null ? undefined : P.reason);
    Ut(E, Gn(null));
  }
  function jr(E) {
    let P = j.fetchers.get(E);
    if (U.has(E) && (!P || P.state !== "loading" || !R.has(E))) {
      nr(E);
    }
    X.delete(E);
    R.delete(E);
    z.delete(E);
    ve.delete(E);
    ye.delete(E);
    j.fetchers.delete(E);
  }
  function xi(E) {
    let P = (ie.get(E) || 0) - 1;
    if (P <= 0) {
      ie.delete(E);
      ve.add(E);
    } else {
      ie.set(E, P);
    }
    rt({
      fetchers: new Map(j.fetchers)
    });
  }
  function nr(E, P) {
    let $ = U.get(E);
    if ($) {
      $.abort(P);
      U.delete(E);
    }
  }
  function zs(E) {
    for (let P of E) {
      let $ = Yt(P);
      let W = Gn($.data);
      j.fetchers.set(P, W);
    }
  }
  function In() {
    let E = [];
    let P = false;
    for (let $ of z) {
      let W = j.fetchers.get($);
      ze(W, `Expected fetcher: ${$}`);
      if (W.state === "loading") {
        z.delete($);
        E.push($);
        P = true;
      }
    }
    zs(E);
    return P;
  }
  function es(E) {
    let P = [];
    for (let [$, W] of R) {
      if (W < E) {
        let te = j.fetchers.get($);
        ze(te, `Expected fetcher: ${$}`);
        if (te.state === "loading") {
          nr($);
          R.delete($);
          P.push($);
        }
      }
    }
    zs(P);
    return P.length > 0;
  }
  function jn(E, P) {
    let $ = j.blockers.get(E) || oa;
    if (le.get(E) !== P) {
      le.set(E, P);
    }
    return $;
  }
  function Xt(E) {
    j.blockers.delete(E);
    le.delete(E);
  }
  function hn(E, P) {
    let $ = j.blockers.get(E) || oa;
    ze($.state === "unblocked" && P.state === "blocked" || $.state === "blocked" && P.state === "blocked" || $.state === "blocked" && P.state === "proceeding" || $.state === "blocked" && P.state === "unblocked" || $.state === "proceeding" && P.state === "unblocked", `Invalid blocker state transition: ${$.state} -> ${P.state}`);
    let W = new Map(j.blockers);
    W.set(E, P);
    rt({
      blockers: W
    });
  }
  function Jr({
    currentLocation: E,
    nextLocation: P,
    historyAction: $
  }) {
    if (le.size === 0) {
      return;
    }
    if (le.size > 1) {
      vt(false, "A router only supports one blocker at a time");
    }
    let W = Array.from(le.entries());
    let [te, Se] = W[W.length - 1];
    let Te = j.blockers.get(te);
    if ((!Te || Te.state !== "proceeding") && Se({
      currentLocation: E,
      nextLocation: P,
      historyAction: $
    })) {
      return te;
    }
  }
  function vr(E) {
    let P = Wr(404, {
      pathname: E
    });
    let $ = f || d;
    let {
      matches: W,
      route: te
    } = Ql($);
    return {
      notFoundMatches: W,
      route: te,
      error: P
    };
  }
  function Bs(E, P, $) {
    _ = E;
    x = P;
    k = $ || null;
    if (!I && j.navigation === Ed) {
      I = true;
      let W = pt(j.location, j.matches);
      if (W != null) {
        rt({
          restoreScrollPosition: W
        });
      }
    }
    return () => {
      _ = null;
      x = null;
      k = null;
    };
  }
  function De(E, P) {
    return k && k(E, P.map(W => Hb(W, j.loaderData))) || E.key;
  }
  function ct(E, P) {
    if (_ && x) {
      let $ = De(E, P);
      _[$] = x();
    }
  }
  function pt(E, P) {
    if (_) {
      let $ = De(E, P);
      let W = _[$];
      if (typeof W == "number") {
        return W;
      }
    }
    return null;
  }
  function wt(E, P, $) {
    if (t.patchRoutesOnNavigation) {
      if (E) {
        if (Object.keys(E[0].params).length > 0) {
          return {
            active: true,
            matches: pa(P, $, m, true)
          };
        }
      } else {
        return {
          active: true,
          matches: pa(P, $, m, true) || []
        };
      }
    }
    return {
      active: false,
      matches: null
    };
  }
  async function wr(E, P, $, W) {
    if (!t.patchRoutesOnNavigation) {
      return {
        type: "success",
        matches: E
      };
    }
    let te = E;
    while (true) {
      let Se = f == null;
      let Te = f || d;
      let ce = u;
      try {
        await t.patchRoutesOnNavigation({
          signal: $,
          path: P,
          matches: te,
          fetcherKey: W,
          patch: (Ue, Ee) => {
            if (!$.aborted) {
              qm(Ue, Ee, Te, ce, l, false);
            }
          }
        });
      } catch (Ue) {
        return {
          type: "error",
          error: Ue,
          partialMatches: te
        };
      } finally {
        if (Se && !$.aborted) {
          d = [...d];
        }
      }
      if ($.aborted) {
        return {
          type: "aborted"
        };
      }
      let he = Es(Te, P, m);
      let we = null;
      if (he) {
        if (Object.keys(he[0].params).length === 0) {
          return {
            type: "success",
            matches: he
          };
        }
        we = pa(Te, P, m, true);
        if (!we || !(te.length < we.length) || !dt(te, we.slice(0, te.length))) {
          return {
            type: "success",
            matches: he
          };
        }
      }
      we ||= pa(Te, P, m, true);
      if (!we || dt(te, we)) {
        return {
          type: "success",
          matches: null
        };
      }
      te = we;
    }
  }
  function dt(E, P) {
    return E.length === P.length && E.every(($, W) => $.route.id === P[W].route.id);
  }
  function St(E) {
    u = {};
    f = xa(E, l, undefined, u);
  }
  function fn(E, P, $ = false) {
    let W = f == null;
    qm(E, P, f || d, u, l, $);
    if (W) {
      d = [...d];
      rt({});
    }
  }
  Q = {
    get basename() {
      return m;
    },
    get future() {
      return g;
    },
    get state() {
      return j;
    },
    get routes() {
      return d;
    },
    get window() {
      return e;
    },
    initialize: We,
    subscribe: Ar,
    enableScrollRestoration: Bs,
    navigate: an,
    fetch: ln,
    revalidate: Ei,
    createHref: E => t.history.createHref(E),
    encodeLocation: E => t.history.encodeLocation(E),
    getFetcher: Yt,
    resetFetcher: dn,
    deleteFetcher: xi,
    dispose: nt,
    getBlocker: jn,
    deleteBlocker: Xt,
    patchRoutes: fn,
    _internalFetchControllers: U,
    _internalSetRoutes: St,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(E) {
      rt(E);
    }
  };
  if (t.unstable_instrumentations) {
    Q = l_(Q, t.unstable_instrumentations.map(E => E.router).filter(Boolean));
  }
  return Q;
}
function b_(t) {
  return t != null && ("formData" in t && t.formData != null || "body" in t && t.body !== undefined);
}
function Zd(t, e, n, i, a, l) {
  let u;
  let d;
  if (a) {
    u = [];
    for (let m of e) {
      u.push(m);
      if (m.route.id === a) {
        d = m;
        break;
      }
    }
  } else {
    u = e;
    d = e[e.length - 1];
  }
  let f = Cu(i || ".", Tu(u), Vr(t.pathname, n) || t.pathname, l === "path");
  if (i == null) {
    f.search = t.search;
    f.hash = t.hash;
  }
  if ((i == null || i === "" || i === ".") && d) {
    let m = jh(f.search);
    if (d.route.index && !m) {
      f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
    } else if (!d.route.index && m) {
      let y = new URLSearchParams(f.search);
      let g = y.getAll("index");
      y.delete("index");
      g.filter(w => w).forEach(w => y.append("index", w));
      let b = y.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  if (n !== "/") {
    f.pathname = r_({
      basename: n,
      pathname: f.pathname
    });
  }
  return Cn(f);
}
function Wm(t, e, n) {
  if (!n || !b_(n)) {
    return {
      path: e
    };
  }
  if (n.formMethod && !$_(n.formMethod)) {
    return {
      path: e,
      error: Wr(405, {
        method: n.formMethod
      })
    };
  }
  let i = () => ({
    path: e,
    error: Wr(400, {
      type: "invalid-body"
    })
  });
  let l = (n.formMethod || "get").toUpperCase();
  let u = Xy(e);
  if (n.body !== undefined) {
    if (n.formEncType === "text/plain") {
      if (!Qt(l)) {
        return i();
      }
      let g = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((b, [w, _]) => `${b}${w}=${_}
`, "") : String(n.body);
      return {
        path: e,
        submission: {
          formMethod: l,
          formAction: u,
          formEncType: n.formEncType,
          formData: undefined,
          json: undefined,
          text: g
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!Qt(l)) {
        return i();
      }
      try {
        let g = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: e,
          submission: {
            formMethod: l,
            formAction: u,
            formEncType: n.formEncType,
            formData: undefined,
            json: g,
            text: undefined
          }
        };
      } catch {
        return i();
      }
    }
  }
  ze(typeof FormData == "function", "FormData is not available in this environment");
  let d;
  let f;
  if (n.formData) {
    d = rh(n.formData);
    f = n.formData;
  } else if (n.body instanceof FormData) {
    d = rh(n.body);
    f = n.body;
  } else if (n.body instanceof URLSearchParams) {
    d = n.body;
    f = Ym(d);
  } else if (n.body == null) {
    d = new URLSearchParams();
    f = new FormData();
  } else {
    try {
      d = new URLSearchParams(n.body);
      f = Ym(d);
    } catch {
      return i();
    }
  }
  let m = {
    formMethod: l,
    formAction: u,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: f,
    json: undefined,
    text: undefined
  };
  if (Qt(m.formMethod)) {
    return {
      path: e,
      submission: m
    };
  }
  let y = $s(e);
  if (t && y.search && jh(y.search)) {
    d.append("index", "");
  }
  y.search = `?${d}`;
  return {
    path: Cn(y),
    submission: m
  };
}
function Vm(t, e, n, i, a, l, u, d, f, m, y, g, b, w, _, k, x, I, N, L, B) {
  var Ie;
  let J = L ? Tr(L[1]) ? L[1].error : L[1].data : undefined;
  let Q = a.createURL(l.location);
  let j = a.createURL(f);
  let H;
  if (y && l.errors) {
    let re = Object.keys(l.errors)[0];
    H = u.findIndex(ye => ye.route.id === re);
  } else if (L && Tr(L[1])) {
    let re = L[0];
    H = u.findIndex(ye => ye.route.id === re) - 1;
  }
  let Z = L ? L[1].statusCode : undefined;
  let be = Z && Z >= 400;
  let Re = {
    currentUrl: Q,
    currentParams: ((Ie = l.matches[0]) == null ? undefined : Ie.params) || {},
    nextUrl: j,
    nextParams: u[0].params,
    ...d,
    actionResult: J,
    actionStatus: Z
  };
  let Le = za(u);
  let He = u.map((re, ye) => {
    let {
      route: U
    } = re;
    let se = null;
    if (H != null && ye > H) {
      se = false;
    } else if (U.lazy) {
      se = true;
    } else if (Ah(U)) {
      if (y) {
        se = eh(U, l.loaderData, l.errors);
      } else if (__(l.loaderData, l.matches[ye], re)) {
        se = true;
      }
    } else {
      se = false;
    }
    if (se !== null) {
      return th(n, i, t, Le, re, m, e, se);
    }
    let Y = false;
    if (typeof B == "boolean") {
      Y = B;
    } else if (be) {
      Y = false;
    } else if (g || Q.pathname + Q.search === j.pathname + j.search || Q.search !== j.search || S_(l.matches[ye], re)) {
      Y = true;
    }
    let R = {
      ...Re,
      defaultShouldRevalidate: Y
    };
    let z = ya(re, R);
    return th(n, i, t, Le, re, m, e, z, R, B);
  });
  let Me = [];
  _.forEach((re, ye) => {
    if (y || !u.some(ve => ve.route.id === re.routeId) || w.has(ye)) {
      return;
    }
    let U = l.fetchers.get(ye);
    let se = U && U.state !== "idle" && U.data === undefined;
    let Y = Es(x, re.path, I);
    if (!Y) {
      if (N && se) {
        return;
      }
      Me.push({
        key: ye,
        routeId: re.routeId,
        path: re.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (k.has(ye)) {
      return;
    }
    let R = du(Y, re.path);
    let z = new AbortController();
    let X = eo(a, re.path, z.signal);
    let ie = null;
    if (b.has(ye)) {
      b.delete(ye);
      ie = ao(n, i, X, Y, R, m, e);
    } else if (se) {
      if (g) {
        ie = ao(n, i, X, Y, R, m, e);
      }
    } else {
      let ve;
      if (typeof B == "boolean") {
        ve = B;
      } else if (be) {
        ve = false;
      } else {
        ve = g;
      }
      let le = {
        ...Re,
        defaultShouldRevalidate: ve
      };
      if (ya(R, le)) {
        ie = ao(n, i, X, Y, R, m, e, le);
      }
    }
    if (ie) {
      Me.push({
        key: ye,
        routeId: re.routeId,
        path: re.path,
        matches: ie,
        match: R,
        request: X,
        controller: z
      });
    }
  });
  return {
    dsMatches: He,
    revalidatingFetchers: Me
  };
}
function Ah(t) {
  return t.loader != null || t.middleware != null && t.middleware.length > 0;
}
function eh(t, e, n) {
  if (t.lazy) {
    return true;
  }
  if (!Ah(t)) {
    return false;
  }
  let i = e != null && t.id in e;
  let a = n != null && n[t.id] !== undefined;
  if (!i && a) {
    return false;
  } else if (typeof t.loader == "function" && t.loader.hydrate === true) {
    return true;
  } else {
    return !i && !a;
  }
}
function __(t, e, n) {
  let i = !e || n.route.id !== e.route.id;
  let a = !t.hasOwnProperty(n.route.id);
  return i || a;
}
function S_(t, e) {
  let n = t.route.path;
  return t.pathname !== e.pathname || n != null && n.endsWith("*") && t.params["*"] !== e.params["*"];
}
function ya(t, e) {
  if (t.route.shouldRevalidate) {
    let n = t.route.shouldRevalidate(e);
    if (typeof n == "boolean") {
      return n;
    }
  }
  return e.defaultShouldRevalidate;
}
function qm(t, e, n, i, a, l) {
  let u;
  if (t) {
    let m = i[t];
    ze(m, `No route found to patch children into: routeId = ${t}`);
    m.children ||= [];
    u = m.children;
  } else {
    u = n;
  }
  let d = [];
  let f = [];
  e.forEach(m => {
    let y = u.find(g => Ky(m, g));
    if (y) {
      f.push({
        existingRoute: y,
        newRoute: m
      });
    } else {
      d.push(m);
    }
  });
  if (d.length > 0) {
    let m = xa(d, a, [t || "_", "patch", String((u == null ? undefined : u.length) || "0")], i);
    u.push(...m);
  }
  if (l && f.length > 0) {
    for (let m = 0; m < f.length; m++) {
      let {
        existingRoute: y,
        newRoute: g
      } = f[m];
      let b = y;
      let [w] = xa([g], a, [], {}, true);
      Object.assign(b, {
        element: w.element ? w.element : b.element,
        errorElement: w.errorElement ? w.errorElement : b.errorElement,
        hydrateFallbackElement: w.hydrateFallbackElement ? w.hydrateFallbackElement : b.hydrateFallbackElement
      });
    }
  }
}
function Ky(t, e) {
  if ("id" in t && "id" in e && t.id === e.id) {
    return true;
  } else if (t.index === e.index && t.path === e.path && t.caseSensitive === e.caseSensitive) {
    if ((!t.children || t.children.length === 0) && (!e.children || e.children.length === 0)) {
      return true;
    } else {
      return t.children.every((n, i) => {
        var a;
        if ((a = e.children) == null) {
          return undefined;
        } else {
          return a.some(l => Ky(n, l));
        }
      });
    }
  } else {
    return false;
  }
}
var Km = new WeakMap();
var Gy = ({
  key: t,
  route: e,
  manifest: n,
  mapRouteProperties: i
}) => {
  let a = n[e.id];
  ze(a, "No route found in manifest");
  if (!a.lazy || typeof a.lazy != "object") {
    return;
  }
  let l = a.lazy[t];
  if (!l) {
    return;
  }
  let u = Km.get(a);
  if (!u) {
    u = {};
    Km.set(a, u);
  }
  let d = u[t];
  if (d) {
    return d;
  }
  let f = (async () => {
    let m = $b(t);
    let g = a[t] !== undefined && t !== "hasErrorBoundary";
    if (m) {
      vt(!m, "Route property " + t + " is not a supported lazy route property. This property will be ignored.");
      u[t] = Promise.resolve();
    } else if (g) {
      vt(false, `Route "${a.id}" has a static property "${t}" defined. The lazy property will be ignored.`);
    } else {
      let b = await l();
      if (b != null) {
        Object.assign(a, {
          [t]: b
        });
        Object.assign(a, i(a));
      }
    }
    if (typeof a.lazy == "object") {
      a.lazy[t] = undefined;
      if (Object.values(a.lazy).every(b => b === undefined)) {
        a.lazy = undefined;
      }
    }
  })();
  u[t] = f;
  return f;
};
var Gm = new WeakMap();
function k_(t, e, n, i, a) {
  let l = n[t.id];
  ze(l, "No route found in manifest");
  if (!t.lazy) {
    return {
      lazyRoutePromise: undefined,
      lazyHandlerPromise: undefined
    };
  }
  if (typeof t.lazy == "function") {
    let y = Gm.get(l);
    if (y) {
      return {
        lazyRoutePromise: y,
        lazyHandlerPromise: y
      };
    }
    let g = (async () => {
      ze(typeof t.lazy == "function", "No lazy route function found");
      let b = await t.lazy();
      let w = {};
      for (let _ in b) {
        let k = b[_];
        if (k === undefined) {
          continue;
        }
        let x = zb(_);
        let N = l[_] !== undefined && _ !== "hasErrorBoundary";
        if (x) {
          vt(!x, "Route property " + _ + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
        } else if (N) {
          vt(!N, `Route "${l.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`);
        } else {
          w[_] = k;
        }
      }
      Object.assign(l, w);
      Object.assign(l, {
        ...i(l),
        lazy: undefined
      });
    })();
    Gm.set(l, g);
    g.catch(() => {});
    return {
      lazyRoutePromise: g,
      lazyHandlerPromise: g
    };
  }
  let u = Object.keys(t.lazy);
  let d = [];
  let f;
  for (let y of u) {
    if (a && a.includes(y)) {
      continue;
    }
    let g = Gy({
      key: y,
      route: t,
      manifest: n,
      mapRouteProperties: i
    });
    if (g) {
      d.push(g);
      if (y === e) {
        f = g;
      }
    }
  }
  let m = d.length > 0 ? Promise.all(d).then(() => {}) : undefined;
  if (m != null) {
    m.catch(() => {});
  }
  if (f != null) {
    f.catch(() => {});
  }
  return {
    lazyRoutePromise: m,
    lazyHandlerPromise: f
  };
}
async function Jm(t) {
  let e = t.matches.filter(a => a.shouldLoad);
  let n = {};
  (await Promise.all(e.map(a => a.resolve()))).forEach((a, l) => {
    n[e[l].route.id] = a;
  });
  return n;
}
async function E_(t) {
  if (t.matches.some(e => e.route.middleware)) {
    return Jy(t, () => Jm(t));
  } else {
    return Jm(t);
  }
}
function Jy(t, e) {
  return x_(t, e, i => {
    if (M_(i)) {
      throw i;
    }
    return i;
  }, N_, n);
  function n(i, a, l) {
    if (l) {
      return Promise.resolve(Object.assign(l.value, {
        [a]: {
          type: "error",
          result: i
        }
      }));
    }
    {
      let {
        matches: u
      } = t;
      let d = Math.min(Math.max(u.findIndex(m => m.route.id === a), 0), Math.max(u.findIndex(m => m.shouldCallHandler()), 0));
      let f = xs(u, u[d].route.id).route.id;
      return Promise.resolve({
        [f]: {
          type: "error",
          result: i
        }
      });
    }
  }
}
async function x_(t, e, n, i, a) {
  let {
    matches: l,
    request: u,
    params: d,
    context: f,
    unstable_pattern: m
  } = t;
  let y = l.flatMap(b => b.route.middleware ? b.route.middleware.map(w => [b.route.id, w]) : []);
  return await Qy({
    request: u,
    params: d,
    context: f,
    unstable_pattern: m
  }, y, e, n, i, a);
}
async function Qy(t, e, n, i, a, l, u = 0) {
  let {
    request: d
  } = t;
  if (d.signal.aborted) {
    throw d.signal.reason ?? new Error(`Request aborted: ${d.method} ${d.url}`);
  }
  let f = e[u];
  if (!f) {
    return await n();
  }
  let [m, y] = f;
  let g;
  let b = async () => {
    if (g) {
      throw new Error("You may only call `next()` once per middleware");
    }
    try {
      g = {
        value: await Qy(t, e, n, i, a, l, u + 1)
      };
      return g.value;
    } catch (w) {
      g = {
        value: await l(w, m, g)
      };
      return g.value;
    }
  };
  try {
    let w = await y(t, b);
    let _ = w != null ? i(w) : undefined;
    if (a(_)) {
      return _;
    } else if (g) {
      return _ ?? g.value;
    } else {
      g = {
        value: await b()
      };
      return g.value;
    }
  } catch (w) {
    return await l(w, m, g);
  }
}
function Yy(t, e, n, i, a) {
  let l = Gy({
    key: "middleware",
    route: i.route,
    manifest: e,
    mapRouteProperties: t
  });
  let u = k_(i.route, Qt(n.method) ? "action" : "loader", e, t, a);
  return {
    middleware: l,
    route: u.lazyRoutePromise,
    handler: u.lazyHandlerPromise
  };
}
function th(t, e, n, i, a, l, u, d, f = null, m) {
  let y = false;
  let g = Yy(t, e, n, a, l);
  return {
    ...a,
    _lazyPromises: g,
    shouldLoad: d,
    shouldRevalidateArgs: f,
    shouldCallHandler(b) {
      y = true;
      if (f) {
        if (typeof m == "boolean") {
          return ya(a, {
            ...f,
            defaultShouldRevalidate: m
          });
        } else if (typeof b == "boolean") {
          return ya(a, {
            ...f,
            defaultShouldRevalidate: b
          });
        } else {
          return ya(a, f);
        }
      } else {
        return d;
      }
    },
    resolve(b) {
      let {
        lazy: w,
        loader: _,
        middleware: k
      } = a.route;
      let x = y || d || b && !Qt(n.method) && (w || _);
      let I = k && k.length > 0 && !_ && !w;
      if (x && (Qt(n.method) || !I)) {
        return T_({
          request: n,
          unstable_pattern: i,
          match: a,
          lazyHandlerPromise: g == null ? undefined : g.handler,
          lazyRoutePromise: g == null ? undefined : g.route,
          handlerOverride: b,
          scopedContext: u
        });
      } else {
        return Promise.resolve({
          type: "data",
          result: undefined
        });
      }
    }
  };
}
function ao(t, e, n, i, a, l, u, d = null) {
  return i.map(f => f.route.id !== a.route.id ? {
    ...f,
    shouldLoad: false,
    shouldRevalidateArgs: d,
    shouldCallHandler: () => false,
    _lazyPromises: Yy(t, e, n, f, l),
    resolve: () => Promise.resolve({
      type: "data",
      result: undefined
    })
  } : th(t, e, n, za(i), f, l, u, true, d));
}
async function R_(t, e, n, i, a, l) {
  if (n.some(m => {
    var y;
    if ((y = m._lazyPromises) == null) {
      return undefined;
    } else {
      return y.middleware;
    }
  })) {
    await Promise.all(n.map(m => {
      var y;
      if ((y = m._lazyPromises) == null) {
        return undefined;
      } else {
        return y.middleware;
      }
    }));
  }
  let u = {
    request: e,
    unstable_pattern: za(n),
    params: n[0].params,
    context: a,
    matches: n
  };
  let f = await t({
    ...u,
    fetcherKey: i,
    runClientMiddleware: m => {
      let y = u;
      return Jy(y, () => m({
        ...y,
        fetcherKey: i,
        runClientMiddleware: () => {
          throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
        }
      }));
    }
  });
  try {
    await Promise.all(n.flatMap(m => {
      var y;
      var g;
      return [(y = m._lazyPromises) == null ? undefined : y.handler, (g = m._lazyPromises) == null ? undefined : g.route];
    }));
  } catch {}
  return f;
}
async function T_({
  request: t,
  unstable_pattern: e,
  match: n,
  lazyHandlerPromise: i,
  lazyRoutePromise: a,
  handlerOverride: l,
  scopedContext: u
}) {
  let d;
  let f;
  let m = Qt(t.method);
  let y = m ? "action" : "loader";
  let g = b => {
    let w;
    let _ = new Promise((I, N) => w = N);
    f = () => w();
    t.signal.addEventListener("abort", f);
    let k = I => typeof b != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${n.route.id}]`)) : b({
      request: t,
      unstable_pattern: e,
      params: n.params,
      context: u
    }, ...(I !== undefined ? [I] : []));
    let x = (async () => {
      try {
        return {
          type: "data",
          result: await (l ? l(N => k(N)) : k())
        };
      } catch (I) {
        return {
          type: "error",
          result: I
        };
      }
    })();
    return Promise.race([x, _]);
  };
  try {
    let b = m ? n.route.action : n.route.loader;
    if (i || a) {
      if (b) {
        let w;
        let [_] = await Promise.all([g(b).catch(k => {
          w = k;
        }), i, a]);
        if (w !== undefined) {
          throw w;
        }
        d = _;
      } else {
        await i;
        let w = m ? n.route.action : n.route.loader;
        if (w) {
          [d] = await Promise.all([g(w), a]);
        } else if (y === "action") {
          let _ = new URL(t.url);
          let k = _.pathname + _.search;
          throw Wr(405, {
            method: t.method,
            pathname: k,
            routeId: n.route.id
          });
        } else {
          return {
            type: "data",
            result: undefined
          };
        }
      }
    } else if (b) {
      d = await g(b);
    } else {
      let w = new URL(t.url);
      let _ = w.pathname + w.search;
      throw Wr(404, {
        pathname: _
      });
    }
  } catch (b) {
    return {
      type: "error",
      result: b
    };
  } finally {
    if (f) {
      t.signal.removeEventListener("abort", f);
    }
  }
  return d;
}
async function C_(t) {
  let e = t.headers.get("Content-Type");
  if (e && /\bapplication\/json\b/.test(e)) {
    if (t.body == null) {
      return null;
    } else {
      return t.json();
    }
  } else {
    return t.text();
  }
}
async function P_(t) {
  var i;
  var a;
  var l;
  var u;
  var d;
  let {
    result: e,
    type: n
  } = t;
  if (Ih(e)) {
    let f;
    try {
      f = await C_(e);
    } catch (m) {
      return {
        type: "error",
        error: m
      };
    }
    if (n === "error") {
      return {
        type: "error",
        error: new Fa(e.status, e.statusText, f),
        statusCode: e.status,
        headers: e.headers
      };
    } else {
      return {
        type: "data",
        data: f,
        statusCode: e.status,
        headers: e.headers
      };
    }
  }
  if (n === "error") {
    if (tg(e)) {
      if (e.data instanceof Error) {
        return {
          type: "error",
          error: e.data,
          statusCode: (i = e.init) == null ? undefined : i.status,
          headers: (a = e.init) != null && a.headers ? new Headers(e.init.headers) : undefined
        };
      } else {
        return {
          type: "error",
          error: j_(e),
          statusCode: Ra(e) ? e.status : undefined,
          headers: (l = e.init) != null && l.headers ? new Headers(e.init.headers) : undefined
        };
      }
    } else {
      return {
        type: "error",
        error: e,
        statusCode: Ra(e) ? e.status : undefined
      };
    }
  } else if (tg(e)) {
    return {
      type: "data",
      data: e.data,
      statusCode: (u = e.init) == null ? undefined : u.status,
      headers: (d = e.init) != null && d.headers ? new Headers(e.init.headers) : undefined
    };
  } else {
    return {
      type: "data",
      data: e
    };
  }
}
function O_(t, e, n, i, a) {
  let l = t.headers.get("Location");
  ze(l, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!Oh(l)) {
    let u = i.slice(0, i.findIndex(d => d.route.id === n) + 1);
    l = Zd(new URL(e.url), u, a, l);
    t.headers.set("Location", l);
  }
  return t;
}
function Qm(t, e, n, i) {
  let a = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
  if (Oh(t)) {
    let l = t;
    let u = l.startsWith("//") ? new URL(e.protocol + l) : new URL(l);
    if (a.includes(u.protocol)) {
      throw new Error("Invalid redirect location");
    }
    let d = Vr(u.pathname, n) != null;
    if (u.origin === e.origin && d) {
      return u.pathname + u.search + u.hash;
    }
  }
  try {
    let l = i.createURL(t);
    if (a.includes(l.protocol)) {
      throw new Error("Invalid redirect location");
    }
  } catch {}
  return t;
}
function eo(t, e, n, i) {
  let a = t.createURL(Xy(e)).toString();
  let l = {
    signal: n
  };
  if (i && Qt(i.formMethod)) {
    let {
      formMethod: u,
      formEncType: d
    } = i;
    l.method = u.toUpperCase();
    if (d === "application/json") {
      l.headers = new Headers({
        "Content-Type": d
      });
      l.body = JSON.stringify(i.json);
    } else if (d === "text/plain") {
      l.body = i.text;
    } else if (d === "application/x-www-form-urlencoded" && i.formData) {
      l.body = rh(i.formData);
    } else {
      l.body = i.formData;
    }
  }
  return new Request(a, l);
}
function rh(t) {
  let e = new URLSearchParams();
  for (let [n, i] of t.entries()) {
    e.append(n, typeof i == "string" ? i : i.name);
  }
  return e;
}
function Ym(t) {
  let e = new FormData();
  for (let [n, i] of t.entries()) {
    e.append(n, i);
  }
  return e;
}
function A_(t, e, n, i = false, a = false) {
  let l = {};
  let u = null;
  let d;
  let f = false;
  let m = {};
  let y = n && Tr(n[1]) ? n[1].error : undefined;
  t.forEach(g => {
    if (!(g.route.id in e)) {
      return;
    }
    let b = g.route.id;
    let w = e[b];
    ze(!di(w), "Cannot handle redirect results in processLoaderData");
    if (Tr(w)) {
      let _ = w.error;
      if (y !== undefined) {
        _ = y;
        y = undefined;
      }
      u = u || {};
      if (a) {
        u[b] = _;
      } else {
        let k = xs(t, b);
        if (u[k.route.id] == null) {
          u[k.route.id] = _;
        }
      }
      if (!i) {
        l[b] = qy;
      }
      if (!f) {
        f = true;
        d = Ra(w.error) ? w.error.status : 500;
      }
      if (w.headers) {
        m[b] = w.headers;
      }
    } else {
      l[b] = w.data;
      if (w.statusCode && w.statusCode !== 200 && !f) {
        d = w.statusCode;
      }
      if (w.headers) {
        m[b] = w.headers;
      }
    }
  });
  if (y !== undefined && n) {
    u = {
      [n[0]]: y
    };
    if (n[2]) {
      l[n[2]] = undefined;
    }
  }
  return {
    loaderData: l,
    errors: u,
    statusCode: d || 200,
    loaderHeaders: m
  };
}
function Xm(t, e, n, i, a, l) {
  let {
    loaderData: u,
    errors: d
  } = A_(e, n, i);
  a.filter(f => !f.matches || f.matches.some(m => m.shouldLoad)).forEach(f => {
    let {
      key: m,
      match: y,
      controller: g
    } = f;
    if (g && g.signal.aborted) {
      return;
    }
    let b = l[m];
    ze(b, "Did not find corresponding fetcher result");
    if (Tr(b)) {
      let w = xs(t.matches, y == null ? undefined : y.route.id);
      if (!d || !d[w.route.id]) {
        d = {
          ...d,
          [w.route.id]: b.error
        };
      }
      t.fetchers.delete(m);
    } else if (di(b)) {
      ze(false, "Unhandled fetcher revalidation redirect");
    } else {
      let w = Gn(b.data);
      t.fetchers.set(m, w);
    }
  });
  return {
    loaderData: u,
    errors: d
  };
}
function Zm(t, e, n, i) {
  let a = Object.entries(e).filter(([, l]) => l !== qy).reduce((l, [u, d]) => {
    l[u] = d;
    return l;
  }, {});
  for (let l of n) {
    let u = l.route.id;
    if (!e.hasOwnProperty(u) && t.hasOwnProperty(u) && l.route.loader) {
      a[u] = t[u];
    }
    if (i && i.hasOwnProperty(u)) {
      break;
    }
  }
  return a;
}
function eg(t) {
  if (t) {
    if (Tr(t[1])) {
      return {
        actionData: {}
      };
    } else {
      return {
        actionData: {
          [t[0]]: t[1].data
        }
      };
    }
  } else {
    return {};
  }
}
function xs(t, e) {
  return (e ? t.slice(0, t.findIndex(i => i.route.id === e) + 1) : [...t]).reverse().find(i => i.route.hasErrorBoundary === true) || t[0];
}
function Ql(t) {
  let e = t.length === 1 ? t[0] : t.find(n => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: e
    }],
    route: e
  };
}
function Wr(t, {
  pathname: e,
  routeId: n,
  method: i,
  type: a,
  message: l
} = {}) {
  let u = "Unknown Server Error";
  let d = "Unknown @remix-run/router error";
  if (t === 400) {
    u = "Bad Request";
    if (i && e && n) {
      d = `You made a ${i} request to "${e}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`;
    } else if (a === "invalid-body") {
      d = "Unable to encode submission body";
    }
  } else if (t === 403) {
    u = "Forbidden";
    d = `Route "${n}" does not match URL "${e}"`;
  } else if (t === 404) {
    u = "Not Found";
    d = `No route matches URL "${e}"`;
  } else if (t === 405) {
    u = "Method Not Allowed";
    if (i && e && n) {
      d = `You made a ${i.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`;
    } else if (i) {
      d = `Invalid request method "${i.toUpperCase()}"`;
    }
  }
  return new Fa(t || 500, u, new Error(d), true);
}
function Yl(t) {
  let e = Object.entries(t);
  for (let n = e.length - 1; n >= 0; n--) {
    let [i, a] = e[n];
    if (di(a)) {
      return {
        key: i,
        result: a
      };
    }
  }
}
function Xy(t) {
  let e = typeof t == "string" ? $s(t) : t;
  return Cn({
    ...e,
    hash: ""
  });
}
function I_(t, e) {
  if (t.pathname !== e.pathname || t.search !== e.search) {
    return false;
  } else if (t.hash === "") {
    return e.hash !== "";
  } else if (t.hash === e.hash) {
    return true;
  } else {
    return e.hash !== "";
  }
}
function j_(t) {
  var e;
  var n;
  return new Fa(((e = t.init) == null ? undefined : e.status) ?? 500, ((n = t.init) == null ? undefined : n.statusText) ?? "Internal Server Error", t.data);
}
function N_(t) {
  return t != null && typeof t == "object" && Object.entries(t).every(([e, n]) => typeof e == "string" && L_(n));
}
function L_(t) {
  return t != null && typeof t == "object" && "type" in t && "result" in t && (t.type === "data" || t.type === "error");
}
function D_(t) {
  return Ih(t.result) && Wy.has(t.result.status);
}
function Tr(t) {
  return t.type === "error";
}
function di(t) {
  return (t && t.type) === "redirect";
}
function tg(t) {
  return typeof t == "object" && t != null && "type" in t && "data" in t && "init" in t && t.type === "DataWithResponseInit";
}
function Ih(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body !== "undefined";
}
function U_(t) {
  return Wy.has(t);
}
function M_(t) {
  return Ih(t) && U_(t.status) && t.headers.has("Location");
}
function $_(t) {
  return m_.has(t.toUpperCase());
}
function Qt(t) {
  return f_.has(t.toUpperCase());
}
function jh(t) {
  return new URLSearchParams(t).getAll("index").some(e => e === "");
}
function du(t, e) {
  let n = typeof e == "string" ? $s(e).search : e.search;
  if (t[t.length - 1].route.index && jh(n || "")) {
    return t[t.length - 1];
  }
  let i = $y(t);
  return i[i.length - 1];
}
function rg(t) {
  let {
    formMethod: e,
    formAction: n,
    formEncType: i,
    text: a,
    formData: l,
    json: u
  } = t;
  if (!!e && !!n && !!i) {
    if (a != null) {
      return {
        formMethod: e,
        formAction: n,
        formEncType: i,
        formData: undefined,
        json: undefined,
        text: a
      };
    }
    if (l != null) {
      return {
        formMethod: e,
        formAction: n,
        formEncType: i,
        formData: l,
        json: undefined,
        text: undefined
      };
    }
    if (u !== undefined) {
      return {
        formMethod: e,
        formAction: n,
        formEncType: i,
        formData: undefined,
        json: u,
        text: undefined
      };
    }
  }
}
function xd(t, e) {
  if (e) {
    return {
      state: "loading",
      location: t,
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text
    };
  } else {
    return {
      state: "loading",
      location: t,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
  }
}
function F_(t, e) {
  return {
    state: "submitting",
    location: t,
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text
  };
}
function aa(t, e) {
  if (t) {
    return {
      state: "loading",
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text,
      data: e
    };
  } else {
    return {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data: e
    };
  }
}
function z_(t, e) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: e ? e.data : undefined
  };
}
function Gn(t) {
  return {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data: t
  };
}
function B_(t, e) {
  try {
    let n = t.sessionStorage.getItem(Vy);
    if (n) {
      let i = JSON.parse(n);
      for (let [a, l] of Object.entries(i || {})) {
        if (l && Array.isArray(l)) {
          e.set(a, new Set(l || []));
        }
      }
    }
  } catch {}
}
function H_(t, e) {
  if (e.size > 0) {
    let n = {};
    for (let [i, a] of e) {
      n[i] = [...a];
    }
    try {
      t.sessionStorage.setItem(Vy, JSON.stringify(n));
    } catch (i) {
      vt(false, `Failed to save applied view transitions in sessionStorage (${i}).`);
    }
  }
}
function ng() {
  let t;
  let e;
  let n = new Promise((i, a) => {
    t = async l => {
      i(l);
      try {
        await n;
      } catch {}
    };
    e = async l => {
      a(l);
      try {
        await n;
      } catch {}
    };
  });
  return {
    promise: n,
    resolve: t,
    reject: e
  };
}
var ki = A.createContext(null);
ki.displayName = "DataRouter";
var Ba = A.createContext(null);
Ba.displayName = "DataRouterState";
var Zy = A.createContext(false);
function W_() {
  return A.useContext(Zy);
}
var Nh = A.createContext({
  isTransitioning: false
});
Nh.displayName = "ViewTransition";
var ev = A.createContext(new Map());
ev.displayName = "Fetchers";
var V_ = A.createContext(null);
V_.displayName = "Await";
var Pr = A.createContext(null);
Pr.displayName = "Navigation";
var Pu = A.createContext(null);
Pu.displayName = "Location";
var qr = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
qr.displayName = "Route";
var Lh = A.createContext(null);
Lh.displayName = "RouteError";
var tv = "REACT_ROUTER_ERROR";
var q_ = "REDIRECT";
var K_ = "ROUTE_ERROR_RESPONSE";
function G_(t) {
  if (t.startsWith(`${tv}:${q_}:{`)) {
    try {
      let e = JSON.parse(t.slice(28));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.location == "string" && typeof e.reloadDocument == "boolean" && typeof e.replace == "boolean") {
        return e;
      }
    } catch {}
  }
}
function J_(t) {
  if (t.startsWith(`${tv}:${K_}:{`)) {
    try {
      let e = JSON.parse(t.slice(40));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string") {
        return new Fa(e.status, e.statusText, e.data);
      }
    } catch {}
  }
}
function Q_(t, {
  relative: e
} = {}) {
  ze(ko(), "useHref() may be used only in the context of a <Router> component.");
  let {
    basename: n,
    navigator: i
  } = A.useContext(Pr);
  let {
    hash: a,
    pathname: l,
    search: u
  } = Wa(t, {
    relative: e
  });
  let d = l;
  if (n !== "/") {
    d = l === "/" ? n : Tn([n, l]);
  }
  return i.createHref({
    pathname: d,
    search: u,
    hash: a
  });
}
function ko() {
  return A.useContext(Pu) != null;
}
function Pn() {
  ze(ko(), "useLocation() may be used only in the context of a <Router> component.");
  return A.useContext(Pu).location;
}
var rv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function nv(t) {
  if (!A.useContext(Pr).static) {
    A.useLayoutEffect(t);
  }
}
function Ha() {
  let {
    isDataRoute: t
  } = A.useContext(qr);
  if (t) {
    return cS();
  } else {
    return Y_();
  }
}
function Y_() {
  ze(ko(), "useNavigate() may be used only in the context of a <Router> component.");
  let t = A.useContext(ki);
  let {
    basename: e,
    navigator: n
  } = A.useContext(Pr);
  let {
    matches: i
  } = A.useContext(qr);
  let {
    pathname: a
  } = Pn();
  let l = JSON.stringify(Tu(i));
  let u = A.useRef(false);
  nv(() => {
    u.current = true;
  });
  return A.useCallback((f, m = {}) => {
    vt(u.current, rv);
    if (!u.current) {
      return;
    }
    if (typeof f == "number") {
      n.go(f);
      return;
    }
    let y = Cu(f, JSON.parse(l), a, m.relative === "path");
    if (t == null && e !== "/") {
      y.pathname = y.pathname === "/" ? e : Tn([e, y.pathname]);
    }
    (m.replace ? n.replace : n.push)(y, m.state, m);
  }, [e, n, l, a, t]);
}
var X_ = A.createContext(null);
function Z_(t) {
  let e = A.useContext(qr).outlet;
  return A.useMemo(() => e && A.createElement(X_.Provider, {
    value: t
  }, e), [e, t]);
}
function pT() {
  let {
    matches: t
  } = A.useContext(qr);
  let e = t[t.length - 1];
  if (e) {
    return e.params;
  } else {
    return {};
  }
}
function Wa(t, {
  relative: e
} = {}) {
  let {
    matches: n
  } = A.useContext(qr);
  let {
    pathname: i
  } = Pn();
  let a = JSON.stringify(Tu(n));
  return A.useMemo(() => Cu(t, JSON.parse(a), i, e === "path"), [t, a, i, e]);
}
function eS(t, e, n, i, a) {
  ze(ko(), "useRoutes() may be used only in the context of a <Router> component.");
  let {
    navigator: l
  } = A.useContext(Pr);
  let {
    matches: u
  } = A.useContext(qr);
  let d = u[u.length - 1];
  let f = d ? d.params : {};
  let m = d ? d.pathname : "/";
  let y = d ? d.pathnameBase : "/";
  let g = d && d.route;
  {
    let N = g && g.path || "";
    ov(m, !g || N.endsWith("*") || N.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N === "/" ? "*" : `${N}/*`}">.`);
  }
  let b = Pn();
  let w;
  w = b;
  let _ = w.pathname || "/";
  let k = _;
  if (y !== "/") {
    let N = y.replace(/^\//, "").split("/");
    k = "/" + _.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let x = Es(t, {
    pathname: k
  });
  vt(g || x != null, `No routes matched location "${w.pathname}${w.search}${w.hash}" `);
  vt(x == null || x[x.length - 1].route.element !== undefined || x[x.length - 1].route.Component !== undefined || x[x.length - 1].route.lazy !== undefined, `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  return iS(x && x.map(N => Object.assign({}, N, {
    params: Object.assign({}, f, N.params),
    pathname: Tn([y, l.encodeLocation ? l.encodeLocation(N.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : N.pathname]),
    pathnameBase: N.pathnameBase === "/" ? y : Tn([y, l.encodeLocation ? l.encodeLocation(N.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : N.pathnameBase])
  })), u, n, i, a);
}
function tS() {
  let t = iv();
  let e = Ra(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t);
  let n = t instanceof Error ? t.stack : null;
  let i = "rgba(200,200,200, 0.5)";
  let a = {
    padding: "0.5rem",
    backgroundColor: i
  };
  let l = {
    padding: "2px 4px",
    backgroundColor: i
  };
  let u = null;
  console.error("Error handled by React Router default ErrorBoundary:", t);
  u = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
    style: l
  }, "ErrorBoundary"), " or", " ", A.createElement("code", {
    style: l
  }, "errorElement"), " prop on your route."));
  return A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), n ? A.createElement("pre", {
    style: a
  }, n) : null, u);
}
var rS = A.createElement(tS, null);
var sv = class extends A.Component {
  constructor(t) {
    super(t);
    this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, e) {
    if (e.location !== t.location || e.revalidation !== "idle" && t.revalidation === "idle") {
      return {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      };
    } else {
      return {
        error: t.error !== undefined ? t.error : e.error,
        location: e.location,
        revalidation: t.revalidation || e.revalidation
      };
    }
  }
  componentDidCatch(t, e) {
    if (this.props.onError) {
      this.props.onError(t, e);
    } else {
      console.error("React Router caught the following error during render", t);
    }
  }
  render() {
    let t = this.state.error;
    if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      const n = J_(t.digest);
      if (n) {
        t = n;
      }
    }
    let e = t !== undefined ? A.createElement(qr.Provider, {
      value: this.props.routeContext
    }, A.createElement(Lh.Provider, {
      value: t,
      children: this.props.component
    })) : this.props.children;
    if (this.context) {
      return A.createElement(nS, {
        error: t
      }, e);
    } else {
      return e;
    }
  }
};
sv.contextType = Zy;
var Rd = new WeakMap();
function nS({
  children: t,
  error: e
}) {
  let {
    basename: n
  } = A.useContext(Pr);
  if (typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
    let i = G_(e.digest);
    if (i) {
      let a = Rd.get(e);
      if (a) {
        throw a;
      }
      let l = zy(i.location, n);
      if (Fy && !Rd.get(e)) {
        if (l.isExternal || i.reloadDocument) {
          window.location.href = l.absoluteURL || l.to;
        } else {
          const u = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(l.to, {
            replace: i.replace
          }));
          Rd.set(e, u);
          throw u;
        }
      }
      return A.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${l.absoluteURL || l.to}`
      });
    }
  }
  return t;
}
function sS({
  routeContext: t,
  match: e,
  children: n
}) {
  let i = A.useContext(ki);
  if (i && i.static && i.staticContext && (e.route.errorElement || e.route.ErrorBoundary)) {
    i.staticContext._deepestRenderedBoundaryId = e.route.id;
  }
  return A.createElement(qr.Provider, {
    value: t
  }, n);
}
function iS(t, e = [], n = null, i = null, a = null) {
  if (t == null) {
    if (!n) {
      return null;
    }
    if (n.errors) {
      t = n.matches;
    } else if (e.length === 0 && !n.initialized && n.matches.length > 0) {
      t = n.matches;
    } else {
      return null;
    }
  }
  let l = t;
  let u = n == null ? undefined : n.errors;
  if (u != null) {
    let y = l.findIndex(g => g.route.id && (u == null ? undefined : u[g.route.id]) !== undefined);
    ze(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`);
    l = l.slice(0, Math.min(l.length, y + 1));
  }
  let d = false;
  let f = -1;
  if (n) {
    for (let y = 0; y < l.length; y++) {
      let g = l[y];
      if (g.route.HydrateFallback || g.route.hydrateFallbackElement) {
        f = y;
      }
      if (g.route.id) {
        let {
          loaderData: b,
          errors: w
        } = n;
        let _ = g.route.loader && !b.hasOwnProperty(g.route.id) && (!w || w[g.route.id] === undefined);
        if (g.route.lazy || _) {
          d = true;
          if (f >= 0) {
            l = l.slice(0, f + 1);
          } else {
            l = [l[0]];
          }
          break;
        }
      }
    }
  }
  let m = n && i ? (y, g) => {
    var b;
    var w;
    i(y, {
      location: n.location,
      params: ((w = (b = n.matches) == null ? undefined : b[0]) == null ? undefined : w.params) ?? {},
      unstable_pattern: za(n.matches),
      errorInfo: g
    });
  } : undefined;
  return l.reduceRight((y, g, b) => {
    let w;
    let _ = false;
    let k = null;
    let x = null;
    if (n) {
      w = u && g.route.id ? u[g.route.id] : undefined;
      k = g.route.errorElement || rS;
      if (d) {
        if (f < 0 && b === 0) {
          ov("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          _ = true;
          x = null;
        } else if (f === b) {
          _ = true;
          x = g.route.hydrateFallbackElement || null;
        }
      }
    }
    let I = e.concat(l.slice(0, b + 1));
    let N = () => {
      let L;
      if (w) {
        L = k;
      } else if (_) {
        L = x;
      } else if (g.route.Component) {
        L = A.createElement(g.route.Component, null);
      } else if (g.route.element) {
        L = g.route.element;
      } else {
        L = y;
      }
      return A.createElement(sS, {
        match: g,
        routeContext: {
          outlet: y,
          matches: I,
          isDataRoute: n != null
        },
        children: L
      });
    };
    if (n && (g.route.ErrorBoundary || g.route.errorElement || b === 0)) {
      return A.createElement(sv, {
        location: n.location,
        revalidation: n.revalidation,
        component: k,
        error: w,
        children: N(),
        routeContext: {
          outlet: null,
          matches: I,
          isDataRoute: true
        },
        onError: m
      });
    } else {
      return N();
    }
  }, null);
}
function Dh(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function oS(t) {
  let e = A.useContext(ki);
  ze(e, Dh(t));
  return e;
}
function aS(t) {
  let e = A.useContext(Ba);
  ze(e, Dh(t));
  return e;
}
function lS(t) {
  let e = A.useContext(qr);
  ze(e, Dh(t));
  return e;
}
function Uh(t) {
  let e = lS(t);
  let n = e.matches[e.matches.length - 1];
  ze(n.route.id, `${t} can only be used on routes that contain a unique "id"`);
  return n.route.id;
}
function uS() {
  return Uh("useRouteId");
}
function iv() {
  var i;
  let t = A.useContext(Lh);
  let e = aS("useRouteError");
  let n = Uh("useRouteError");
  if (t !== undefined) {
    return t;
  } else if ((i = e.errors) == null) {
    return undefined;
  } else {
    return i[n];
  }
}
function cS() {
  let {
    router: t
  } = oS("useNavigate");
  let e = Uh("useNavigate");
  let n = A.useRef(false);
  nv(() => {
    n.current = true;
  });
  return A.useCallback(async (a, l = {}) => {
    vt(n.current, rv);
    if (n.current) {
      if (typeof a == "number") {
        await t.navigate(a);
      } else {
        await t.navigate(a, {
          fromRouteId: e,
          ...l
        });
      }
    }
  }, [t, e]);
}
var sg = {};
function ov(t, e, n) {
  if (!e && !sg[t]) {
    sg[t] = true;
    vt(false, n);
  }
}
var ig = {};
function og(t, e) {
  if (!t && !ig[e]) {
    ig[e] = true;
    console.warn(e);
  }
}
var dS = "useOptimistic";
var ag = bb[dS];
var hS = () => {};
function fS(t) {
  if (ag) {
    return ag(t);
  } else {
    return [t, hS];
  }
}
function pS(t) {
  let e = {
    hasErrorBoundary: t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null
  };
  if (t.Component) {
    if (t.element) {
      vt(false, "You should not include both `Component` and `element` on your route - `Component` will be used.");
    }
    Object.assign(e, {
      element: A.createElement(t.Component),
      Component: undefined
    });
  }
  if (t.HydrateFallback) {
    if (t.hydrateFallbackElement) {
      vt(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.");
    }
    Object.assign(e, {
      hydrateFallbackElement: A.createElement(t.HydrateFallback),
      HydrateFallback: undefined
    });
  }
  if (t.ErrorBoundary) {
    if (t.errorElement) {
      vt(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.");
    }
    Object.assign(e, {
      errorElement: A.createElement(t.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return e;
}
var mS = ["HydrateFallback", "hydrateFallbackElement"];
var gS = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((e, n) => {
      this.resolve = i => {
        if (this.status === "pending") {
          this.status = "resolved";
          e(i);
        }
      };
      this.reject = i => {
        if (this.status === "pending") {
          this.status = "rejected";
          n(i);
        }
      };
    });
  }
};
function _Component16({
  router: t,
  flushSync: e,
  onError: n,
  unstable_useTransitions: i
}) {
  i = W_() || i;
  let [l, u] = A.useState(t.state);
  let [d, f] = fS(l);
  let [m, y] = A.useState();
  let [g, b] = A.useState({
    isTransitioning: false
  });
  let [w, _] = A.useState();
  let [k, x] = A.useState();
  let [I, N] = A.useState();
  let L = A.useRef(new Map());
  let B = A.useCallback((H, {
    deletedFetchers: Z,
    newErrors: be,
    flushSync: Re,
    viewTransitionOpts: Le
  }) => {
    if (be && n) {
      Object.values(be).forEach(Me => {
        var Ie;
        return n(Me, {
          location: H.location,
          params: ((Ie = H.matches[0]) == null ? undefined : Ie.params) ?? {},
          unstable_pattern: za(H.matches)
        });
      });
    }
    H.fetchers.forEach((Me, Ie) => {
      if (Me.data !== undefined) {
        L.current.set(Ie, Me.data);
      }
    });
    Z.forEach(Me => L.current.delete(Me));
    og(Re === false || e != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
    let He = t.window != null && t.window.document != null && typeof t.window.document.startViewTransition == "function";
    og(Le == null || He, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
    if (!Le || !He) {
      if (e && Re) {
        e(() => u(H));
      } else if (i === false) {
        u(H);
      } else {
        A.startTransition(() => {
          if (i === true) {
            f(Me => lg(Me, H));
          }
          u(H);
        });
      }
      return;
    }
    if (e && Re) {
      e(() => {
        if (k) {
          if (w != null) {
            w.resolve();
          }
          k.skipTransition();
        }
        b({
          isTransitioning: true,
          flushSync: true,
          currentLocation: Le.currentLocation,
          nextLocation: Le.nextLocation
        });
      });
      let Me = t.window.document.startViewTransition(() => {
        e(() => u(H));
      });
      Me.finished.finally(() => {
        e(() => {
          _(undefined);
          x(undefined);
          y(undefined);
          b({
            isTransitioning: false
          });
        });
      });
      e(() => x(Me));
      return;
    }
    if (k) {
      if (w != null) {
        w.resolve();
      }
      k.skipTransition();
      N({
        state: H,
        currentLocation: Le.currentLocation,
        nextLocation: Le.nextLocation
      });
    } else {
      y(H);
      b({
        isTransitioning: true,
        flushSync: false,
        currentLocation: Le.currentLocation,
        nextLocation: Le.nextLocation
      });
    }
  }, [t.window, e, k, w, i, f, n]);
  A.useLayoutEffect(() => t.subscribe(B), [t, B]);
  A.useEffect(() => {
    if (g.isTransitioning && !g.flushSync) {
      _(new gS());
    }
  }, [g]);
  A.useEffect(() => {
    if (w && m && t.window) {
      let H = m;
      let Z = w.promise;
      let be = t.window.document.startViewTransition(async () => {
        if (i === false) {
          u(H);
        } else {
          A.startTransition(() => {
            if (i === true) {
              f(Re => lg(Re, H));
            }
            u(H);
          });
        }
        await Z;
      });
      be.finished.finally(() => {
        _(undefined);
        x(undefined);
        y(undefined);
        b({
          isTransitioning: false
        });
      });
      x(be);
    }
  }, [m, w, t.window, i, f]);
  A.useEffect(() => {
    if (w && m && d.location.key === m.location.key) {
      w.resolve();
    }
  }, [w, k, d.location, m]);
  A.useEffect(() => {
    if (!g.isTransitioning && I) {
      y(I.state);
      b({
        isTransitioning: true,
        flushSync: false,
        currentLocation: I.currentLocation,
        nextLocation: I.nextLocation
      });
      N(undefined);
    }
  }, [g.isTransitioning, I]);
  let J = A.useMemo(() => ({
    createHref: t.createHref,
    encodeLocation: t.encodeLocation,
    go: H => t.navigate(H),
    push: (H, Z, be) => t.navigate(H, {
      state: Z,
      preventScrollReset: be == null ? undefined : be.preventScrollReset
    }),
    replace: (H, Z, be) => t.navigate(H, {
      replace: true,
      state: Z,
      preventScrollReset: be == null ? undefined : be.preventScrollReset
    })
  }), [t]);
  let Q = t.basename || "/";
  let j = A.useMemo(() => ({
    router: t,
    navigator: J,
    static: false,
    basename: Q,
    onError: n
  }), [t, J, Q, n]);
  return A.createElement(A.Fragment, null, A.createElement(ki.Provider, {
    value: j
  }, A.createElement(Ba.Provider, {
    value: d
  }, A.createElement(ev.Provider, {
    value: L.current
  }, A.createElement(Nh.Provider, {
    value: g
  }, A.createElement(SS, {
    basename: Q,
    location: d.location,
    navigationType: d.historyAction,
    navigator: J,
    unstable_useTransitions: i
  }, A.createElement(vS, {
    routes: t.routes,
    future: t.future,
    state: d,
    onError: n
  })))))), null);
}
function lg(t, e) {
  return {
    ...t,
    navigation: e.navigation.state !== "idle" ? e.navigation : t.navigation,
    revalidation: e.revalidation !== "idle" ? e.revalidation : t.revalidation,
    actionData: e.navigation.state !== "submitting" ? e.actionData : t.actionData,
    fetchers: e.fetchers
  };
}
var vS = A.memo(wS);
function wS({
  routes: t,
  future: e,
  state: n,
  onError: i
}) {
  return eS(t, undefined, n, i, e);
}
function _Component({
  to: t,
  replace: e,
  state: n,
  relative: i
}) {
  ze(ko(), "<Navigate> may be used only in the context of a <Router> component.");
  let {
    static: a
  } = A.useContext(Pr);
  vt(!a, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: l
  } = A.useContext(qr);
  let {
    pathname: u
  } = Pn();
  let d = Ha();
  let f = Cu(t, Tu(l), u, i === "path");
  let m = JSON.stringify(f);
  A.useEffect(() => {
    d(JSON.parse(m), {
      replace: e,
      state: n,
      relative: i
    });
  }, [d, m, i, e, n]);
  return null;
}
function _S(t) {
  return Z_(t.context);
}
function SS({
  basename: t = "/",
  children: e = null,
  location: n,
  navigationType: i = "POP",
  navigator: a,
  static: l = false,
  unstable_useTransitions: u
}) {
  ze(!ko(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let d = t.replace(/^\/*/, "/");
  let f = A.useMemo(() => ({
    basename: d,
    navigator: a,
    static: l,
    unstable_useTransitions: u,
    future: {}
  }), [d, a, l, u]);
  if (typeof n == "string") {
    n = $s(n);
  }
  let {
    pathname: m = "/",
    search: y = "",
    hash: g = "",
    state: b = null,
    key: w = "default"
  } = n;
  let _ = A.useMemo(() => {
    let k = Vr(m, d);
    if (k == null) {
      return null;
    } else {
      return {
        location: {
          pathname: k,
          search: y,
          hash: g,
          state: b,
          key: w
        },
        navigationType: i
      };
    }
  }, [d, m, y, g, b, w, i]);
  vt(_ != null, `<Router basename="${d}"> is not able to match the URL "${m}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`);
  if (_ == null) {
    return null;
  } else {
    return A.createElement(Pr.Provider, {
      value: f
    }, A.createElement(Pu.Provider, {
      children: e,
      value: _
    }));
  }
}
var hu = "get";
var fu = "application/x-www-form-urlencoded";
function Ou(t) {
  return typeof HTMLElement !== "undefined" && t instanceof HTMLElement;
}
function kS(t) {
  return Ou(t) && t.tagName.toLowerCase() === "button";
}
function ES(t) {
  return Ou(t) && t.tagName.toLowerCase() === "form";
}
function xS(t) {
  return Ou(t) && t.tagName.toLowerCase() === "input";
}
function RS(t) {
  return !!t.metaKey || !!t.altKey || !!t.ctrlKey || !!t.shiftKey;
}
function TS(t, e) {
  return t.button === 0 && (!e || e === "_self") && !RS(t);
}
function nh(t = "") {
  return new URLSearchParams(typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams ? t : Object.keys(t).reduce((e, n) => {
    let i = t[n];
    return e.concat(Array.isArray(i) ? i.map(a => [n, a]) : [[n, i]]);
  }, []));
}
function CS(t, e) {
  let n = nh(t);
  if (e) {
    e.forEach((i, a) => {
      if (!n.has(a)) {
        e.getAll(a).forEach(l => {
          n.append(a, l);
        });
      }
    });
  }
  return n;
}
var Xl = null;
function PS() {
  if (Xl === null) {
    try {
      new FormData(document.createElement("form"), 0);
      Xl = false;
    } catch {
      Xl = true;
    }
  }
  return Xl;
}
var OS = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Td(t) {
  if (t != null && !OS.has(t)) {
    vt(false, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`);
    return null;
  } else {
    return t;
  }
}
function AS(t, e) {
  let n;
  let i;
  let a;
  let l;
  let u;
  if (ES(t)) {
    let d = t.getAttribute("action");
    i = d ? Vr(d, e) : null;
    n = t.getAttribute("method") || hu;
    a = Td(t.getAttribute("enctype")) || fu;
    l = new FormData(t);
  } else if (kS(t) || xS(t) && (t.type === "submit" || t.type === "image")) {
    let d = t.form;
    if (d == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    let f = t.getAttribute("formaction") || d.getAttribute("action");
    i = f ? Vr(f, e) : null;
    n = t.getAttribute("formmethod") || d.getAttribute("method") || hu;
    a = Td(t.getAttribute("formenctype")) || Td(d.getAttribute("enctype")) || fu;
    l = new FormData(d, t);
    if (!PS()) {
      let {
        name: m,
        type: y,
        value: g
      } = t;
      if (y === "image") {
        let b = m ? `${m}.` : "";
        l.append(`${b}x`, "0");
        l.append(`${b}y`, "0");
      } else if (m) {
        l.append(m, g);
      }
    }
  } else {
    if (Ou(t)) {
      throw new Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
    }
    n = hu;
    i = null;
    a = fu;
    u = t;
  }
  if (l && a === "text/plain") {
    u = l;
    l = undefined;
  }
  return {
    action: i,
    method: n.toLowerCase(),
    encType: a,
    formData: l,
    body: u
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Mh(t, e) {
  if (t === false || t === null || typeof t === "undefined") {
    throw new Error(e);
  }
}
function IS(t, e, n, i) {
  let a = typeof t == "string" ? new URL(t, typeof window === "undefined" ? "server://singlefetch/" : window.location.origin) : t;
  if (n) {
    if (a.pathname.endsWith("/")) {
      a.pathname = `${a.pathname}_.${i}`;
    } else {
      a.pathname = `${a.pathname}.${i}`;
    }
  } else if (a.pathname === "/") {
    a.pathname = `_root.${i}`;
  } else if (e && Vr(a.pathname, e) === "/") {
    a.pathname = `${e.replace(/\/$/, "")}/_root.${i}`;
  } else {
    a.pathname = `${a.pathname.replace(/\/$/, "")}.${i}`;
  }
  return a;
}
async function jS(t, e) {
  if (t.id in e) {
    return e[t.id];
  }
  try {
    let n = await import(t.module);
    e[t.id] = n;
    return n;
  } catch (n) {
    console.error(`Error loading route module \`${t.module}\`, reloading page...`);
    console.error(n);
    if (window.__reactRouterContext) {
      window.__reactRouterContext.isSpaMode;
    }
    window.location.reload();
    return new Promise(() => {});
  }
}
function NS(t) {
  if (t == null) {
    return false;
  } else if (t.href == null) {
    return t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string";
  } else {
    return typeof t.rel == "string" && typeof t.href == "string";
  }
}
async function LS(t, e, n) {
  let i = await Promise.all(t.map(async a => {
    let l = e.routes[a.route.id];
    if (l) {
      let u = await jS(l, n);
      if (u.links) {
        return u.links();
      } else {
        return [];
      }
    }
    return [];
  }));
  return $S(i.flat(1).filter(NS).filter(a => a.rel === "stylesheet" || a.rel === "preload").map(a => a.rel === "stylesheet" ? {
    ...a,
    rel: "prefetch",
    as: "style"
  } : {
    ...a,
    rel: "prefetch"
  }));
}
function ug(t, e, n, i, a, l) {
  let u = (f, m) => n[m] ? f.route.id !== n[m].route.id : true;
  let d = (f, m) => {
    var y;
    return n[m].pathname !== f.pathname || ((y = n[m].route.path) == null ? undefined : y.endsWith("*")) && n[m].params["*"] !== f.params["*"];
  };
  if (l === "assets") {
    return e.filter((f, m) => u(f, m) || d(f, m));
  } else if (l === "data") {
    return e.filter((f, m) => {
      var g;
      let y = i.routes[f.route.id];
      if (!y || !y.hasLoader) {
        return false;
      }
      if (u(f, m) || d(f, m)) {
        return true;
      }
      if (f.route.shouldRevalidate) {
        let b = f.route.shouldRevalidate({
          currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
          currentParams: ((g = n[0]) == null ? undefined : g.params) || {},
          nextUrl: new URL(t, window.origin),
          nextParams: f.params,
          defaultShouldRevalidate: true
        });
        if (typeof b == "boolean") {
          return b;
        }
      }
      return true;
    });
  } else {
    return [];
  }
}
function DS(t, e, {
  includeHydrateFallback: n
} = {}) {
  return US(t.map(i => {
    let a = e.routes[i.route.id];
    if (!a) {
      return [];
    }
    let l = [a.module];
    if (a.clientActionModule) {
      l = l.concat(a.clientActionModule);
    }
    if (a.clientLoaderModule) {
      l = l.concat(a.clientLoaderModule);
    }
    if (n && a.hydrateFallbackModule) {
      l = l.concat(a.hydrateFallbackModule);
    }
    if (a.imports) {
      l = l.concat(a.imports);
    }
    return l;
  }).flat(1));
}
function US(t) {
  return [...new Set(t)];
}
function MS(t) {
  let e = {};
  let n = Object.keys(t).sort();
  for (let i of n) {
    e[i] = t[i];
  }
  return e;
}
function $S(t, e) {
  let n = new Set();
  new Set(e);
  return t.reduce((i, a) => {
    let l = JSON.stringify(MS(a));
    if (!n.has(l)) {
      n.add(l);
      i.push({
        key: l,
        link: a
      });
    }
    return i;
  }, []);
}
function av() {
  let t = A.useContext(ki);
  Mh(t, "You must render this element inside a <DataRouterContext.Provider> element");
  return t;
}
function FS() {
  let t = A.useContext(Ba);
  Mh(t, "You must render this element inside a <DataRouterStateContext.Provider> element");
  return t;
}
var $h = A.createContext(undefined);
$h.displayName = "FrameworkContext";
function lv() {
  let t = A.useContext($h);
  Mh(t, "You must render this element inside a <HydratedRouter> element");
  return t;
}
function zS(t, e) {
  let n = A.useContext($h);
  let [i, a] = A.useState(false);
  let [l, u] = A.useState(false);
  let {
    onFocus: d,
    onBlur: f,
    onMouseEnter: m,
    onMouseLeave: y,
    onTouchStart: g
  } = e;
  let b = A.useRef(null);
  A.useEffect(() => {
    if (t === "render") {
      u(true);
    }
    if (t === "viewport") {
      let k = I => {
        I.forEach(N => {
          u(N.isIntersecting);
        });
      };
      let x = new IntersectionObserver(k, {
        threshold: 0.5
      });
      if (b.current) {
        x.observe(b.current);
      }
      return () => {
        x.disconnect();
      };
    }
  }, [t]);
  A.useEffect(() => {
    if (i) {
      let k = setTimeout(() => {
        u(true);
      }, 100);
      return () => {
        clearTimeout(k);
      };
    }
  }, [i]);
  let w = () => {
    a(true);
  };
  let _ = () => {
    a(false);
    u(false);
  };
  if (n) {
    if (t !== "intent") {
      return [l, b, {}];
    } else {
      return [l, b, {
        onFocus: la(d, w),
        onBlur: la(f, _),
        onMouseEnter: la(m, w),
        onMouseLeave: la(y, _),
        onTouchStart: la(g, w)
      }];
    }
  } else {
    return [false, b, {}];
  }
}
function la(t, e) {
  return n => {
    if (t) {
      t(n);
    }
    if (!n.defaultPrevented) {
      e(n);
    }
  };
}
function BS({
  page: t,
  ...e
}) {
  let {
    router: n
  } = av();
  let i = A.useMemo(() => Es(n.routes, t, n.basename), [n.routes, t, n.basename]);
  if (i) {
    return A.createElement(WS, {
      page: t,
      matches: i,
      ...e
    });
  } else {
    return null;
  }
}
function HS(t) {
  let {
    manifest: e,
    routeModules: n
  } = lv();
  let [i, a] = A.useState([]);
  A.useEffect(() => {
    let l = false;
    LS(t, e, n).then(u => {
      if (!l) {
        a(u);
      }
    });
    return () => {
      l = true;
    };
  }, [t, e, n]);
  return i;
}
function WS({
  page: t,
  matches: e,
  ...n
}) {
  let i = Pn();
  let {
    future: a,
    manifest: l,
    routeModules: u
  } = lv();
  let {
    basename: d
  } = av();
  let {
    loaderData: f,
    matches: m
  } = FS();
  let y = A.useMemo(() => ug(t, e, m, l, i, "data"), [t, e, m, l, i]);
  let g = A.useMemo(() => ug(t, e, m, l, i, "assets"), [t, e, m, l, i]);
  let b = A.useMemo(() => {
    if (t === i.pathname + i.search + i.hash) {
      return [];
    }
    let k = new Set();
    let x = false;
    e.forEach(N => {
      var B;
      let L = l.routes[N.route.id];
      if (!!L && !!L.hasLoader) {
        if (!y.some(J => J.route.id === N.route.id) && N.route.id in f && (B = u[N.route.id]) != null && B.shouldRevalidate || L.hasClientLoader) {
          x = true;
        } else {
          k.add(N.route.id);
        }
      }
    });
    if (k.size === 0) {
      return [];
    }
    let I = IS(t, d, a.unstable_trailingSlashAwareDataRequests, "data");
    if (x && k.size > 0) {
      I.searchParams.set("_routes", e.filter(N => k.has(N.route.id)).map(N => N.route.id).join(","));
    }
    return [I.pathname + I.search];
  }, [d, a.unstable_trailingSlashAwareDataRequests, f, i, l, y, e, t, u]);
  let w = A.useMemo(() => DS(g, l), [g, l]);
  let _ = HS(g);
  return A.createElement(A.Fragment, null, b.map(k => A.createElement("link", {
    key: k,
    rel: "prefetch",
    as: "fetch",
    href: k,
    ...n
  })), w.map(k => A.createElement("link", {
    key: k,
    rel: "modulepreload",
    href: k,
    ...n
  })), _.map(({
    key: k,
    link: x
  }) => A.createElement("link", {
    key: k,
    nonce: n.nonce,
    ...x,
    crossOrigin: x.crossOrigin ?? n.crossOrigin
  })));
}
function VS(...t) {
  return e => {
    t.forEach(n => {
      if (typeof n == "function") {
        n(e);
      } else if (n != null) {
        n.current = e;
      }
    });
  };
}
var qS = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (qS) {
    window.__reactRouterVersion = "7.13.0";
  }
} catch {}
function KS(t, e) {
  return w_({
    basename: e == null ? undefined : e.basename,
    getContext: e == null ? undefined : e.getContext,
    future: e == null ? undefined : e.future,
    history: Lb({
      window: e == null ? undefined : e.window
    }),
    hydrationData: GS(),
    routes: t,
    mapRouteProperties: pS,
    hydrationRouteProperties: mS,
    dataStrategy: e == null ? undefined : e.dataStrategy,
    patchRoutesOnNavigation: e == null ? undefined : e.patchRoutesOnNavigation,
    window: e == null ? undefined : e.window,
    unstable_instrumentations: e == null ? undefined : e.unstable_instrumentations
  }).initialize();
}
function GS() {
  let t = window == null ? undefined : window.__staticRouterHydrationData;
  if (t && t.errors) {
    t = {
      ...t,
      errors: JS(t.errors)
    };
  }
  return t;
}
function JS(t) {
  if (!t) {
    return null;
  }
  let e = Object.entries(t);
  let n = {};
  for (let [i, a] of e) {
    if (a && a.__type === "RouteErrorResponse") {
      n[i] = new Fa(a.status, a.statusText, a.data, a.internal === true);
    } else if (a && a.__type === "Error") {
      if (a.__subType) {
        let l = window[a.__subType];
        if (typeof l == "function") {
          try {
            let u = new l(a.message);
            u.stack = "";
            n[i] = u;
          } catch {}
        }
      }
      if (n[i] == null) {
        let l = new Error(a.message);
        l.stack = "";
        n[i] = l;
      }
    } else {
      n[i] = a;
    }
  }
  return n;
}
var uv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Fh = A.forwardRef(function ({
  onClick: e,
  discover: n = "render",
  prefetch: i = "none",
  relative: a,
  reloadDocument: l,
  replace: u,
  state: d,
  target: f,
  to: m,
  preventScrollReset: y,
  viewTransition: g,
  unstable_defaultShouldRevalidate: b,
  ...w
}, _) {
  let {
    basename: k,
    unstable_useTransitions: x
  } = A.useContext(Pr);
  let I = typeof m == "string" && uv.test(m);
  let N = zy(m, k);
  m = N.to;
  let L = Q_(m, {
    relative: a
  });
  let [B, J, Q] = zS(i, w);
  let j = ZS(m, {
    replace: u,
    state: d,
    target: f,
    preventScrollReset: y,
    relative: a,
    viewTransition: g,
    unstable_defaultShouldRevalidate: b,
    unstable_useTransitions: x
  });
  function H(be) {
    if (e) {
      e(be);
    }
    if (!be.defaultPrevented) {
      j(be);
    }
  }
  let Z = A.createElement("a", {
    ...w,
    ...Q,
    href: N.absoluteURL || L,
    onClick: N.isExternal || l ? e : H,
    ref: VS(_, J),
    target: f,
    "data-discover": !I && n === "render" ? "true" : undefined
  });
  if (B && !I) {
    return A.createElement(A.Fragment, null, Z, A.createElement(BS, {
      page: L
    }));
  } else {
    return Z;
  }
});
Fh.displayName = "Link";
var QS = A.forwardRef(function ({
  "aria-current": e = "page",
  caseSensitive: n = false,
  className: i = "",
  end: a = false,
  style: l,
  to: u,
  viewTransition: d,
  children: f,
  ...m
}, y) {
  let g = Wa(u, {
    relative: m.relative
  });
  let b = Pn();
  let w = A.useContext(Ba);
  let {
    navigator: _,
    basename: k
  } = A.useContext(Pr);
  let x = w != null && ik(g) && d === true;
  let I = _.encodeLocation ? _.encodeLocation(g).pathname : g.pathname;
  let N = b.pathname;
  let L = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  if (!n) {
    N = N.toLowerCase();
    L = L ? L.toLowerCase() : null;
    I = I.toLowerCase();
  }
  if (L && k) {
    L = Vr(L, k) || L;
  }
  const B = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let J = N === I || !a && N.startsWith(I) && N.charAt(B) === "/";
  let Q = L != null && (L === I || !a && L.startsWith(I) && L.charAt(I.length) === "/");
  let j = {
    isActive: J,
    isPending: Q,
    isTransitioning: x
  };
  let H = J ? e : undefined;
  let Z;
  if (typeof i == "function") {
    Z = i(j);
  } else {
    Z = [i, J ? "active" : null, Q ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let be = typeof l == "function" ? l(j) : l;
  return A.createElement(Fh, {
    ...m,
    "aria-current": H,
    className: Z,
    ref: y,
    style: be,
    to: u,
    viewTransition: d
  }, typeof f == "function" ? f(j) : f);
});
QS.displayName = "NavLink";
var YS = A.forwardRef(({
  discover: t = "render",
  fetcherKey: e,
  navigate: n,
  reloadDocument: i,
  replace: a,
  state: l,
  method: u = hu,
  action: d,
  onSubmit: f,
  relative: m,
  preventScrollReset: y,
  viewTransition: g,
  unstable_defaultShouldRevalidate: b,
  ...w
}, _) => {
  let {
    unstable_useTransitions: k
  } = A.useContext(Pr);
  let x = nk();
  let I = sk(d, {
    relative: m
  });
  let N = u.toLowerCase() === "get" ? "get" : "post";
  let L = typeof d == "string" && uv.test(d);
  let B = J => {
    if (f) {
      f(J);
    }
    if (J.defaultPrevented) {
      return;
    }
    J.preventDefault();
    let Q = J.nativeEvent.submitter;
    let j = (Q == null ? undefined : Q.getAttribute("formmethod")) || u;
    let H = () => x(Q || J.currentTarget, {
      fetcherKey: e,
      method: j,
      navigate: n,
      replace: a,
      state: l,
      relative: m,
      preventScrollReset: y,
      viewTransition: g,
      unstable_defaultShouldRevalidate: b
    });
    if (k && n !== false) {
      A.startTransition(() => H());
    } else {
      H();
    }
  };
  return A.createElement("form", {
    ref: _,
    method: N,
    action: I,
    onSubmit: i ? f : B,
    ...w,
    "data-discover": !L && t === "render" ? "true" : undefined
  });
});
YS.displayName = "Form";
function XS(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cv(t) {
  let e = A.useContext(ki);
  ze(e, XS(t));
  return e;
}
function ZS(t, {
  target: e,
  replace: n,
  state: i,
  preventScrollReset: a,
  relative: l,
  viewTransition: u,
  unstable_defaultShouldRevalidate: d,
  unstable_useTransitions: f
} = {}) {
  let m = Ha();
  let y = Pn();
  let g = Wa(t, {
    relative: l
  });
  return A.useCallback(b => {
    if (TS(b, e)) {
      b.preventDefault();
      let w = n !== undefined ? n : Cn(y) === Cn(g);
      let _ = () => m(t, {
        replace: w,
        state: i,
        preventScrollReset: a,
        relative: l,
        viewTransition: u,
        unstable_defaultShouldRevalidate: d
      });
      if (f) {
        A.startTransition(() => _());
      } else {
        _();
      }
    }
  }, [y, m, g, n, i, e, t, a, l, u, d, f]);
}
function ek(t) {
  vt(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let e = A.useRef(nh(t));
  let n = A.useRef(false);
  let i = Pn();
  let a = A.useMemo(() => CS(i.search, n.current ? null : e.current), [i.search]);
  let l = Ha();
  let u = A.useCallback((d, f) => {
    const m = nh(typeof d == "function" ? d(new URLSearchParams(a)) : d);
    n.current = true;
    l("?" + m, f);
  }, [l, a]);
  return [a, u];
}
var tk = 0;
var rk = () => `__${String(++tk)}__`;
function nk() {
  let {
    router: t
  } = cv("useSubmit");
  let {
    basename: e
  } = A.useContext(Pr);
  let n = uS();
  let i = t.fetch;
  let a = t.navigate;
  return A.useCallback(async (l, u = {}) => {
    let {
      action: d,
      method: f,
      encType: m,
      formData: y,
      body: g
    } = AS(l, e);
    if (u.navigate === false) {
      let b = u.fetcherKey || rk();
      await i(b, n, u.action || d, {
        unstable_defaultShouldRevalidate: u.unstable_defaultShouldRevalidate,
        preventScrollReset: u.preventScrollReset,
        formData: y,
        body: g,
        formMethod: u.method || f,
        formEncType: u.encType || m,
        flushSync: u.flushSync
      });
    } else {
      await a(u.action || d, {
        unstable_defaultShouldRevalidate: u.unstable_defaultShouldRevalidate,
        preventScrollReset: u.preventScrollReset,
        formData: y,
        body: g,
        formMethod: u.method || f,
        formEncType: u.encType || m,
        replace: u.replace,
        state: u.state,
        fromRouteId: n,
        flushSync: u.flushSync,
        viewTransition: u.viewTransition
      });
    }
  }, [i, a, e, n]);
}
function sk(t, {
  relative: e
} = {}) {
  let {
    basename: n
  } = A.useContext(Pr);
  let i = A.useContext(qr);
  ze(i, "useFormAction must be used inside a RouteContext");
  let [a] = i.matches.slice(-1);
  let l = {
    ...Wa(t || ".", {
      relative: e
    })
  };
  let u = Pn();
  if (t == null) {
    l.search = u.search;
    let d = new URLSearchParams(l.search);
    let f = d.getAll("index");
    if (f.some(y => y === "")) {
      d.delete("index");
      f.filter(g => g).forEach(g => d.append("index", g));
      let y = d.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  if ((!t || t === ".") && a.route.index) {
    l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
  }
  if (n !== "/") {
    l.pathname = l.pathname === "/" ? n : Tn([n, l.pathname]);
  }
  return Cn(l);
}
function ik(t, {
  relative: e
} = {}) {
  let n = A.useContext(Nh);
  ze(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: i
  } = cv("useViewTransitionState");
  let a = Wa(t, {
    relative: e
  });
  if (!n.isTransitioning) {
    return false;
  }
  let l = Vr(n.currentLocation.pathname, i) || n.currentLocation.pathname;
  let u = Vr(n.nextLocation.pathname, i) || n.nextLocation.pathname;
  return vu(a.pathname, u) != null || vu(a.pathname, l) != null;
}
function Au(t, e) {
  var n = {};
  for (var i in t) {
    if (Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0) {
      n[i] = t[i];
    }
  }
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var a = 0, i = Object.getOwnPropertySymbols(t); a < i.length; a++) {
      if (e.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[a])) {
        n[i[a]] = t[i[a]];
      }
    }
  }
  return n;
}
function ok(t, e, n, i) {
  function a(l) {
    if (l instanceof n) {
      return l;
    } else {
      return new n(function (u) {
        u(l);
      });
    }
  }
  return new (n ||= Promise)(function (l, u) {
    function d(y) {
      try {
        m(i.next(y));
      } catch (g) {
        u(g);
      }
    }
    function f(y) {
      try {
        m(i.throw(y));
      } catch (g) {
        u(g);
      }
    }
    function m(y) {
      if (y.done) {
        l(y.value);
      } else {
        a(y.value).then(d, f);
      }
    }
    m((i = i.apply(t, e || [])).next());
  });
}
const ak = t => t ? (...e) => t(...e) : (...e) => fetch(...e);
class zh extends Error {
  constructor(e, n = "FunctionsError", i) {
    super(e);
    this.name = n;
    this.context = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class lk extends zh {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class cg extends zh {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class dg extends zh {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var sh;
(function (t) {
  t.Any = "any";
  t.ApNortheast1 = "ap-northeast-1";
  t.ApNortheast2 = "ap-northeast-2";
  t.ApSouth1 = "ap-south-1";
  t.ApSoutheast1 = "ap-southeast-1";
  t.ApSoutheast2 = "ap-southeast-2";
  t.CaCentral1 = "ca-central-1";
  t.EuCentral1 = "eu-central-1";
  t.EuWest1 = "eu-west-1";
  t.EuWest2 = "eu-west-2";
  t.EuWest3 = "eu-west-3";
  t.SaEast1 = "sa-east-1";
  t.UsEast1 = "us-east-1";
  t.UsWest1 = "us-west-1";
  t.UsWest2 = "us-west-2";
})(sh ||= {});
class uk {
  constructor(e, {
    headers: n = {},
    customFetch: i,
    region: a = sh.Any
  } = {}) {
    this.url = e;
    this.headers = n;
    this.region = a;
    this.fetch = ak(i);
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return ok(this, arguments, undefined, function* (n, i = {}) {
      let l;
      let u;
      try {
        const {
          headers: d,
          method: f,
          body: m,
          signal: y,
          timeout: g
        } = i;
        let b = {};
        let {
          region: w
        } = i;
        w ||= this.region;
        const _ = new URL(`${this.url}/${n}`);
        if (w && w !== "any") {
          b["x-region"] = w;
          _.searchParams.set("forceFunctionRegion", w);
        }
        let k;
        if (m && (d && !Object.prototype.hasOwnProperty.call(d, "Content-Type") || !d)) {
          if (typeof Blob !== "undefined" && m instanceof Blob || m instanceof ArrayBuffer) {
            b["Content-Type"] = "application/octet-stream";
            k = m;
          } else if (typeof m == "string") {
            b["Content-Type"] = "text/plain";
            k = m;
          } else if (typeof FormData !== "undefined" && m instanceof FormData) {
            k = m;
          } else {
            b["Content-Type"] = "application/json";
            k = JSON.stringify(m);
          }
        } else if (m && typeof m != "string" && (typeof Blob === "undefined" || !(m instanceof Blob)) && !(m instanceof ArrayBuffer) && (typeof FormData === "undefined" || !(m instanceof FormData))) {
          k = JSON.stringify(m);
        } else {
          k = m;
        }
        let x = y;
        if (g) {
          u = new AbortController();
          l = setTimeout(() => u.abort(), g);
          if (y) {
            x = u.signal;
            y.addEventListener("abort", () => u.abort());
          } else {
            x = u.signal;
          }
        }
        const I = yield this.fetch(_.toString(), {
          method: f || "POST",
          headers: Object.assign(Object.assign(Object.assign({}, b), this.headers), d),
          body: k,
          signal: x
        }).catch(J => {
          throw new lk(J);
        });
        const N = I.headers.get("x-relay-error");
        if (N && N === "true") {
          throw new cg(I);
        }
        if (!I.ok) {
          throw new dg(I);
        }
        let L = (I.headers.get("Content-Type") ?? "text/plain").split(";")[0].trim();
        let B;
        if (L === "application/json") {
          B = yield I.json();
        } else if (L === "application/octet-stream" || L === "application/pdf") {
          B = yield I.blob();
        } else if (L === "text/event-stream") {
          B = I;
        } else if (L === "multipart/form-data") {
          B = yield I.formData();
        } else {
          B = yield I.text();
        }
        return {
          data: B,
          error: null,
          response: I
        };
      } catch (d) {
        return {
          data: null,
          error: d,
          response: d instanceof dg || d instanceof cg ? d.context : undefined
        };
      } finally {
        if (l) {
          clearTimeout(l);
        }
      }
    });
  }
}
const dv = 3;
const hg = t => Math.min(2 ** t * 1000, 30000);
const ck = [520, 503];
const hv = ["GET", "HEAD", "OPTIONS"];
var dk = class extends Error {
  constructor(t) {
    super(t.message);
    this.name = "PostgrestError";
    this.details = t.details;
    this.hint = t.hint;
    this.code = t.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
function fg(t, e) {
  return new Promise(n => {
    if (e != null && e.aborted) {
      n();
      return;
    }
    const i = setTimeout(() => {
      if (e != null) {
        e.removeEventListener("abort", a);
      }
      n();
    }, t);
    function a() {
      clearTimeout(i);
      n();
    }
    if (e != null) {
      e.addEventListener("abort", a);
    }
  });
}
function hk(t, e, n, i) {
  return !!i && !(n >= dv) && !!hv.includes(t) && !!ck.includes(e);
}
var fk = class {
  constructor(t) {
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = t.method;
    this.url = t.url;
    this.headers = new Headers(t.headers);
    this.schema = t.schema;
    this.body = t.body;
    this.shouldThrowOnError = t.shouldThrowOnError ?? false;
    this.signal = t.signal;
    this.isMaybeSingle = t.isMaybeSingle ?? false;
    this.shouldStripNulls = t.shouldStripNulls ?? false;
    this.urlLengthLimit = t.urlLengthLimit ?? 8000;
    this.retryEnabled = t.retry ?? true;
    if (t.fetch) {
      this.fetch = t.fetch;
    } else {
      this.fetch = fetch;
    }
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") {
      throw new Error("stripNulls() cannot be used with csv()");
    }
    this.shouldStripNulls = true;
    return this;
  }
  setHeader(t, e) {
    this.headers = new Headers(this.headers);
    this.headers.set(t, e);
    return this;
  }
  retry(t) {
    this.retryEnabled = t;
    return this;
  }
  then(t, e) {
    var n = this;
    if (this.schema !== undefined) {
      if (["GET", "HEAD"].includes(this.method)) {
        this.headers.set("Accept-Profile", this.schema);
      } else {
        this.headers.set("Content-Profile", this.schema);
      }
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers.set("Content-Type", "application/json");
    }
    if (this.shouldStripNulls) {
      const u = this.headers.get("Accept");
      if (u === "application/vnd.pgrst.object+json") {
        this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped");
      } else if (!u || u === "application/json") {
        this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
      }
    }
    const i = this.fetch;
    let l = (async () => {
      let u = 0;
      while (true) {
        const m = new Headers(n.headers);
        if (u > 0) {
          m.set("X-Retry-Count", String(u));
        }
        let y;
        try {
          y = await i(n.url.toString(), {
            method: n.method,
            headers: m,
            body: JSON.stringify(n.body, (g, b) => typeof b == "bigint" ? b.toString() : b),
            signal: n.signal
          });
        } catch (g) {
          if ((g == null ? undefined : g.name) === "AbortError" || (g == null ? undefined : g.code) === "ABORT_ERR" || !hv.includes(n.method)) {
            throw g;
          }
          if (n.retryEnabled && u < dv) {
            const b = hg(u);
            u++;
            await fg(b, n.signal);
            continue;
          }
          throw g;
        }
        if (hk(n.method, y.status, u, n.retryEnabled)) {
          var f;
          const g = ((f = y.headers) === null || f === undefined ? undefined : f.get("Retry-After")) ?? null;
          const b = g !== null ? Math.max(0, parseInt(g, 10) || 0) * 1000 : hg(u);
          await y.text();
          u++;
          await fg(b, n.signal);
          continue;
        }
        return await n.processResponse(y);
      }
    })();
    if (!this.shouldThrowOnError) {
      l = l.catch(u => {
        let f = "";
        let m = "";
        let y = "";
        const g = u == null ? undefined : u.cause;
        if (g) {
          const N = (g == null ? undefined : g.message) ?? "";
          const L = (g == null ? undefined : g.code) ?? "";
          f = `${(u == null ? undefined : u.name) ?? "FetchError"}: ${u == null ? undefined : u.message}`;
          f += `

Caused by: ${(g == null ? undefined : g.name) ?? "Error"}: ${N}`;
          if (L) {
            f += ` (${L})`;
          }
          if (g != null && g.stack) {
            f += `
${g.stack}`;
          }
        } else {
          f = (u == null ? undefined : u.stack) ?? "";
        }
        const I = this.url.toString().length;
        if ((u == null ? undefined : u.name) === "AbortError" || (u == null ? undefined : u.code) === "ABORT_ERR") {
          y = "";
          m = "Request was aborted (timeout or manual cancellation)";
          if (I > this.urlLengthLimit) {
            m += `. Note: Your request URL is ${I} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if ((g == null ? undefined : g.name) === "HeadersOverflowError" || (g == null ? undefined : g.code) === "UND_ERR_HEADERS_OVERFLOW") {
          y = "";
          m = "HTTP headers exceeded server limits (typically 16KB)";
          if (I > this.urlLengthLimit) {
            m += `. Your request URL is ${I} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          success: false,
          error: {
            message: `${(u == null ? undefined : u.name) ?? "FetchError"}: ${u == null ? undefined : u.message}`,
            details: f,
            hint: m,
            code: y
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return l.then(t, e);
  }
  async processResponse(t) {
    var e = this;
    let n = null;
    let i = null;
    let a = null;
    let l = t.status;
    let u = t.statusText;
    if (t.ok) {
      var d;
      var f;
      if (e.method !== "HEAD") {
        var m;
        const b = await t.text();
        if (b !== "") {
          if (e.headers.get("Accept") === "text/csv" || e.headers.get("Accept") && (m = e.headers.get("Accept")) !== null && m !== undefined && m.includes("application/vnd.pgrst.plan+text")) {
            i = b;
          } else {
            i = JSON.parse(b);
          }
        }
      }
      const y = (d = e.headers.get("Prefer")) === null || d === undefined ? undefined : d.match(/count=(exact|planned|estimated)/);
      const g = (f = t.headers.get("content-range")) === null || f === undefined ? undefined : f.split("/");
      if (y && g && g.length > 1) {
        a = parseInt(g[1]);
      }
      if (e.isMaybeSingle && Array.isArray(i)) {
        if (i.length > 1) {
          n = {
            code: "PGRST116",
            details: `Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          };
          i = null;
          a = null;
          l = 406;
          u = "Not Acceptable";
        } else if (i.length === 1) {
          i = i[0];
        } else {
          i = null;
        }
      }
    } else {
      const y = await t.text();
      try {
        n = JSON.parse(y);
        if (Array.isArray(n) && t.status === 404) {
          i = [];
          n = null;
          l = 200;
          u = "OK";
        }
      } catch {
        if (t.status === 404 && y === "") {
          l = 204;
          u = "No Content";
        } else {
          n = {
            message: y
          };
        }
      }
      if (n && e.shouldThrowOnError) {
        throw new dk(n);
      }
    }
    return {
      success: n === null,
      error: n,
      data: i,
      count: a,
      status: l,
      statusText: u
    };
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var pk = class extends fk {
  select(t) {
    let e = false;
    const n = (t ?? "*").split("").map(i => /\s/.test(i) && !e ? "" : (i === "\"" && (e = !e), i)).join("");
    this.url.searchParams.set("select", n);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  order(t, {
    ascending: e = true,
    nullsFirst: n,
    foreignTable: i,
    referencedTable: a = i
  } = {}) {
    const l = a ? `${a}.order` : "order";
    const u = this.url.searchParams.get(l);
    this.url.searchParams.set(l, `${u ? `${u},` : ""}${t}.${e ? "asc" : "desc"}${n === undefined ? "" : n ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  limit(t, {
    foreignTable: e,
    referencedTable: n = e
  } = {}) {
    const i = typeof n === "undefined" ? "limit" : `${n}.limit`;
    this.url.searchParams.set(i, `${t}`);
    return this;
  }
  range(t, e, {
    foreignTable: n,
    referencedTable: i = n
  } = {}) {
    const a = typeof i === "undefined" ? "offset" : `${i}.offset`;
    const l = typeof i === "undefined" ? "limit" : `${i}.limit`;
    this.url.searchParams.set(a, `${t}`);
    this.url.searchParams.set(l, `${e - t + 1}`);
    return this;
  }
  abortSignal(t) {
    this.signal = t;
    return this;
  }
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  explain({
    analyze: t = false,
    verbose: e = false,
    settings: n = false,
    buffers: i = false,
    wal: a = false,
    format: l = "text"
  } = {}) {
    const d = [t ? "analyze" : null, e ? "verbose" : null, n ? "settings" : null, i ? "buffers" : null, a ? "wal" : null].filter(Boolean).join("|");
    const f = this.headers.get("Accept") ?? "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${l}; for="${f}"; options=${d};`);
    if (l === "json") {
      return this;
    } else {
      return this;
    }
  }
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(t) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${t}`);
    return this;
  }
};
const pg = new RegExp("[,()]");
var to = class extends pk {
  eq(t, e) {
    this.url.searchParams.append(t, `eq.${e}`);
    return this;
  }
  neq(t, e) {
    this.url.searchParams.append(t, `neq.${e}`);
    return this;
  }
  gt(t, e) {
    this.url.searchParams.append(t, `gt.${e}`);
    return this;
  }
  gte(t, e) {
    this.url.searchParams.append(t, `gte.${e}`);
    return this;
  }
  lt(t, e) {
    this.url.searchParams.append(t, `lt.${e}`);
    return this;
  }
  lte(t, e) {
    this.url.searchParams.append(t, `lte.${e}`);
    return this;
  }
  like(t, e) {
    this.url.searchParams.append(t, `like.${e}`);
    return this;
  }
  likeAllOf(t, e) {
    this.url.searchParams.append(t, `like(all).{${e.join(",")}}`);
    return this;
  }
  likeAnyOf(t, e) {
    this.url.searchParams.append(t, `like(any).{${e.join(",")}}`);
    return this;
  }
  ilike(t, e) {
    this.url.searchParams.append(t, `ilike.${e}`);
    return this;
  }
  ilikeAllOf(t, e) {
    this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`);
    return this;
  }
  ilikeAnyOf(t, e) {
    this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`);
    return this;
  }
  regexMatch(t, e) {
    this.url.searchParams.append(t, `match.${e}`);
    return this;
  }
  regexIMatch(t, e) {
    this.url.searchParams.append(t, `imatch.${e}`);
    return this;
  }
  is(t, e) {
    this.url.searchParams.append(t, `is.${e}`);
    return this;
  }
  isDistinct(t, e) {
    this.url.searchParams.append(t, `isdistinct.${e}`);
    return this;
  }
  in(t, e) {
    const n = Array.from(new Set(e)).map(i => typeof i == "string" && pg.test(i) ? `"${i}"` : `${i}`).join(",");
    this.url.searchParams.append(t, `in.(${n})`);
    return this;
  }
  notIn(t, e) {
    const n = Array.from(new Set(e)).map(i => typeof i == "string" && pg.test(i) ? `"${i}"` : `${i}`).join(",");
    this.url.searchParams.append(t, `not.in.(${n})`);
    return this;
  }
  contains(t, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(t, `cs.${e}`);
    } else if (Array.isArray(e)) {
      this.url.searchParams.append(t, `cs.{${e.join(",")}}`);
    } else {
      this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`);
    }
    return this;
  }
  containedBy(t, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(t, `cd.${e}`);
    } else if (Array.isArray(e)) {
      this.url.searchParams.append(t, `cd.{${e.join(",")}}`);
    } else {
      this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`);
    }
    return this;
  }
  rangeGt(t, e) {
    this.url.searchParams.append(t, `sr.${e}`);
    return this;
  }
  rangeGte(t, e) {
    this.url.searchParams.append(t, `nxl.${e}`);
    return this;
  }
  rangeLt(t, e) {
    this.url.searchParams.append(t, `sl.${e}`);
    return this;
  }
  rangeLte(t, e) {
    this.url.searchParams.append(t, `nxr.${e}`);
    return this;
  }
  rangeAdjacent(t, e) {
    this.url.searchParams.append(t, `adj.${e}`);
    return this;
  }
  overlaps(t, e) {
    if (typeof e == "string") {
      this.url.searchParams.append(t, `ov.${e}`);
    } else {
      this.url.searchParams.append(t, `ov.{${e.join(",")}}`);
    }
    return this;
  }
  textSearch(t, e, {
    config: n,
    type: i
  } = {}) {
    let a = "";
    if (i === "plain") {
      a = "pl";
    } else if (i === "phrase") {
      a = "ph";
    } else if (i === "websearch") {
      a = "w";
    }
    const l = n === undefined ? "" : `(${n})`;
    this.url.searchParams.append(t, `${a}fts${l}.${e}`);
    return this;
  }
  match(t) {
    Object.entries(t).filter(([e, n]) => n !== undefined).forEach(([e, n]) => {
      this.url.searchParams.append(e, `eq.${n}`);
    });
    return this;
  }
  not(t, e, n) {
    this.url.searchParams.append(t, `not.${e}.${n}`);
    return this;
  }
  or(t, {
    foreignTable: e,
    referencedTable: n = e
  } = {}) {
    const i = n ? `${n}.or` : "or";
    this.url.searchParams.append(i, `(${t})`);
    return this;
  }
  filter(t, e, n) {
    this.url.searchParams.append(t, `${e}.${n}`);
    return this;
  }
};
var mk = class {
  constructor(t, {
    headers: e = {},
    schema: n,
    fetch: i,
    urlLengthLimit: a = 8000,
    retry: l
  }) {
    this.url = t;
    this.headers = new Headers(e);
    this.schema = n;
    this.fetch = i;
    this.urlLengthLimit = a;
    this.retry = l;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(t, e) {
    const {
      head: n = false,
      count: i
    } = e ?? {};
    const a = n ? "HEAD" : "GET";
    let l = false;
    const u = (t ?? "*").split("").map(m => /\s/.test(m) && !l ? "" : (m === "\"" && (l = !l), m)).join("");
    const {
      url: d,
      headers: f
    } = this.cloneRequestState();
    d.searchParams.set("select", u);
    if (i) {
      f.append("Prefer", `count=${i}`);
    }
    return new to({
      method: a,
      url: d,
      headers: f,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  insert(t, {
    count: e,
    defaultToNull: n = true
  } = {}) {
    const a = "POST";
    const {
      url: l,
      headers: u
    } = this.cloneRequestState();
    if (e) {
      u.append("Prefer", `count=${e}`);
    }
    if (!n) {
      u.append("Prefer", "missing=default");
    }
    if (Array.isArray(t)) {
      const d = t.reduce((f, m) => f.concat(Object.keys(m)), []);
      if (d.length > 0) {
        const f = [...new Set(d)].map(m => `"${m}"`);
        l.searchParams.set("columns", f.join(","));
      }
    }
    return new to({
      method: a,
      url: l,
      headers: u,
      schema: this.schema,
      body: t,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  upsert(t, {
    onConflict: e,
    ignoreDuplicates: n = false,
    count: i,
    defaultToNull: a = true
  } = {}) {
    const u = "POST";
    const {
      url: d,
      headers: f
    } = this.cloneRequestState();
    f.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`);
    if (e !== undefined) {
      d.searchParams.set("on_conflict", e);
    }
    if (i) {
      f.append("Prefer", `count=${i}`);
    }
    if (!a) {
      f.append("Prefer", "missing=default");
    }
    if (Array.isArray(t)) {
      const m = t.reduce((y, g) => y.concat(Object.keys(g)), []);
      if (m.length > 0) {
        const y = [...new Set(m)].map(g => `"${g}"`);
        d.searchParams.set("columns", y.join(","));
      }
    }
    return new to({
      method: u,
      url: d,
      headers: f,
      schema: this.schema,
      body: t,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  update(t, {
    count: e
  } = {}) {
    const i = "PATCH";
    const {
      url: a,
      headers: l
    } = this.cloneRequestState();
    if (e) {
      l.append("Prefer", `count=${e}`);
    }
    return new to({
      method: i,
      url: a,
      headers: l,
      schema: this.schema,
      body: t,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  delete({
    count: t
  } = {}) {
    const n = "DELETE";
    const {
      url: i,
      headers: a
    } = this.cloneRequestState();
    if (t) {
      a.append("Prefer", `count=${t}`);
    }
    return new to({
      method: n,
      url: i,
      headers: a,
      schema: this.schema,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function Ta(t) {
  "@babel/helpers - typeof";

  Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return Ta(t);
}
function gk(t, e) {
  if (Ta(t) != "object" || !t) {
    return t;
  }
  var n = t[Symbol.toPrimitive];
  if (n !== undefined) {
    var i = n.call(t, e);
    if (Ta(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function yk(t) {
  var e = gk(t, "string");
  if (Ta(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function vk(t, e, n) {
  if ((e = yk(e)) in t) {
    Object.defineProperty(t, e, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    t[e] = n;
  }
  return t;
}
function mg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    if (e) {
      i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      });
    }
    n.push.apply(n, i);
  }
  return n;
}
function Zl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] ?? {};
    if (e % 2) {
      mg(Object(n), true).forEach(function (i) {
        vk(t, i, n[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    } else {
      mg(Object(n)).forEach(function (i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
  }
  return t;
}
var wk = class fv {
  constructor(e, {
    headers: n = {},
    schema: i,
    fetch: a,
    timeout: l,
    urlLengthLimit: u = 8000,
    retry: d
  } = {}) {
    this.url = e;
    this.headers = new Headers(n);
    this.schemaName = i;
    this.urlLengthLimit = u;
    const f = a ?? globalThis.fetch;
    if (l !== undefined && l > 0) {
      this.fetch = (m, y) => {
        const g = new AbortController();
        const b = setTimeout(() => g.abort(), l);
        const w = y == null ? undefined : y.signal;
        if (w) {
          if (w.aborted) {
            clearTimeout(b);
            return f(m, y);
          }
          const _ = () => {
            clearTimeout(b);
            g.abort();
          };
          w.addEventListener("abort", _, {
            once: true
          });
          return f(m, Zl(Zl({}, y), {}, {
            signal: g.signal
          })).finally(() => {
            clearTimeout(b);
            w.removeEventListener("abort", _);
          });
        }
        return f(m, Zl(Zl({}, y), {}, {
          signal: g.signal
        })).finally(() => clearTimeout(b));
      };
    } else {
      this.fetch = f;
    }
    this.retry = d;
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") {
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    }
    return new mk(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  schema(e) {
    return new fv(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  rpc(e, n = {}, {
    head: i = false,
    get: a = false,
    count: l
  } = {}) {
    let d;
    const f = new URL(`${this.url}/rpc/${e}`);
    let m;
    const y = w => w !== null && typeof w == "object" && (!Array.isArray(w) || w.some(y));
    const g = i && Object.values(n).some(y);
    if (g) {
      d = "POST";
      m = n;
    } else if (i || a) {
      d = i ? "HEAD" : "GET";
      Object.entries(n).filter(([w, _]) => _ !== undefined).map(([w, _]) => [w, Array.isArray(_) ? `{${_.join(",")}}` : `${_}`]).forEach(([w, _]) => {
        f.searchParams.append(w, _);
      });
    } else {
      d = "POST";
      m = n;
    }
    const b = new Headers(this.headers);
    if (g) {
      b.set("Prefer", l ? `count=${l},return=minimal` : "return=minimal");
    } else if (l) {
      b.set("Prefer", `count=${l}`);
    }
    return new to({
      method: d,
      url: f,
      headers: b,
      schema: this.schemaName,
      body: m,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class bk {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: WebSocket
      };
    }
    const n = globalThis;
    if (typeof globalThis !== "undefined" && typeof n.WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: n.WebSocket
      };
    }
    const i = typeof global !== "undefined" ? global : undefined;
    if (i && typeof i.WebSocket !== "undefined") {
      return {
        type: "native",
        wsConstructor: i.WebSocket
      };
    }
    if (typeof globalThis !== "undefined" && typeof n.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    }
    if (typeof globalThis !== "undefined" && n.EdgeRuntime || typeof navigator !== "undefined" && (e = navigator.userAgent) !== null && e !== undefined && e.includes("Vercel-Edge")) {
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    }
    const a = globalThis.process;
    if (a) {
      const l = a.versions;
      if (l && l.node) {
        const u = l.node;
        const d = parseInt(u.replace(/^v/, "").split(".")[0]);
        if (d >= 22) {
          if (typeof globalThis.WebSocket !== "undefined") {
            return {
              type: "native",
              wsConstructor: globalThis.WebSocket
            };
          } else {
            return {
              type: "unsupported",
              error: `Node.js ${d} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
        } else {
          return {
            type: "unsupported",
            error: `Node.js ${d} detected without native WebSocket support.`,
            workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
          };
        }
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor) {
      return e.wsConstructor;
    }
    let n = e.error || "WebSocket not supported in this environment.";
    if (e.workaround) {
      n += `

Suggested solution: ${e.workaround}`;
    }
    throw new Error(n);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return false;
    }
  }
}
const _k = "2.106.0";
const Sk = `realtime-js/${_k}`;
const kk = "1.0.0";
const pv = "2.0.0";
const Ek = pv;
const xk = 10000;
const Rk = 100;
const Rs = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
const mv = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
};
const ih = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class Tk {
  constructor(e) {
    this.HEADER_LENGTH = 1;
    this.USER_BROADCAST_PUSH_META_LENGTH = 6;
    this.KINDS = {
      userBroadcastPush: 3,
      userBroadcast: 4
    };
    this.BINARY_ENCODING = 0;
    this.JSON_ENCODING = 1;
    this.BROADCAST_EVENT = "broadcast";
    this.allowedMetadataKeys = [];
    this.allowedMetadataKeys = e ?? [];
  }
  encode(e, n) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string") {
      return n(this._binaryEncodeUserBroadcastPush(e));
    }
    let i = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return n(JSON.stringify(i));
  }
  _binaryEncodeUserBroadcastPush(e) {
    if (this._isArrayBuffer(e.payload?.payload)) {
      return this._encodeBinaryUserBroadcastPush(e);
    } else {
      return this._encodeJsonUserBroadcastPush(e);
    }
  }
  _encodeBinaryUserBroadcastPush(e) {
    const a = e.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, a);
  }
  _encodeJsonUserBroadcastPush(e) {
    const a = e.payload?.payload ?? {};
    const u = new TextEncoder().encode(JSON.stringify(a)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, u);
  }
  _encodeUserBroadcastPush(e, n, i) {
    const u = e.topic;
    const d = e.ref ?? "";
    const f = e.join_ref ?? "";
    const m = e.payload.event;
    const y = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {};
    const g = Object.keys(y).length === 0 ? "" : JSON.stringify(y);
    if (f.length > 255) {
      throw new Error(`joinRef length ${f.length} exceeds maximum of 255`);
    }
    if (d.length > 255) {
      throw new Error(`ref length ${d.length} exceeds maximum of 255`);
    }
    if (u.length > 255) {
      throw new Error(`topic length ${u.length} exceeds maximum of 255`);
    }
    if (m.length > 255) {
      throw new Error(`userEvent length ${m.length} exceeds maximum of 255`);
    }
    if (g.length > 255) {
      throw new Error(`metadata length ${g.length} exceeds maximum of 255`);
    }
    const b = this.USER_BROADCAST_PUSH_META_LENGTH + f.length + d.length + u.length + m.length + g.length;
    const w = new ArrayBuffer(this.HEADER_LENGTH + b);
    let _ = new DataView(w);
    let k = 0;
    _.setUint8(k++, this.KINDS.userBroadcastPush);
    _.setUint8(k++, f.length);
    _.setUint8(k++, d.length);
    _.setUint8(k++, u.length);
    _.setUint8(k++, m.length);
    _.setUint8(k++, g.length);
    _.setUint8(k++, n);
    Array.from(f, I => _.setUint8(k++, I.charCodeAt(0)));
    Array.from(d, I => _.setUint8(k++, I.charCodeAt(0)));
    Array.from(u, I => _.setUint8(k++, I.charCodeAt(0)));
    Array.from(m, I => _.setUint8(k++, I.charCodeAt(0)));
    Array.from(g, I => _.setUint8(k++, I.charCodeAt(0)));
    var x = new Uint8Array(w.byteLength + i.byteLength);
    x.set(new Uint8Array(w), 0);
    x.set(new Uint8Array(i), w.byteLength);
    return x.buffer;
  }
  decode(e, n) {
    if (this._isArrayBuffer(e)) {
      let i = this._binaryDecode(e);
      return n(i);
    }
    if (typeof e == "string") {
      const i = JSON.parse(e);
      const [a, l, u, d, f] = i;
      return n({
        join_ref: a,
        ref: l,
        topic: u,
        event: d,
        payload: f
      });
    }
    return n({});
  }
  _binaryDecode(e) {
    const n = new DataView(e);
    const i = n.getUint8(0);
    const a = new TextDecoder();
    switch (i) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, n, a);
    }
  }
  _decodeUserBroadcast(e, n, i) {
    const a = n.getUint8(1);
    const l = n.getUint8(2);
    const u = n.getUint8(3);
    const d = n.getUint8(4);
    let f = this.HEADER_LENGTH + 4;
    const m = i.decode(e.slice(f, f + a));
    f = f + a;
    const y = i.decode(e.slice(f, f + l));
    f = f + l;
    const g = i.decode(e.slice(f, f + u));
    f = f + u;
    const b = e.slice(f, e.byteLength);
    const w = d === this.JSON_ENCODING ? JSON.parse(i.decode(b)) : b;
    const _ = {
      type: this.BROADCAST_EVENT,
      event: y,
      payload: w
    };
    if (u > 0) {
      _.meta = JSON.parse(g);
    }
    return {
      join_ref: null,
      ref: null,
      topic: m,
      event: this.BROADCAST_EVENT,
      payload: _
    };
  }
  _isArrayBuffer(e) {
    return e instanceof ArrayBuffer || (e == null ? undefined : e.constructor)?.name === "ArrayBuffer";
  }
  _pick(e, n) {
    if (!e || typeof e != "object") {
      return {};
    } else {
      return Object.fromEntries(Object.entries(e).filter(([i]) => n.includes(i)));
    }
  }
}
var it;
(function (t) {
  t.abstime = "abstime";
  t.bool = "bool";
  t.date = "date";
  t.daterange = "daterange";
  t.float4 = "float4";
  t.float8 = "float8";
  t.int2 = "int2";
  t.int4 = "int4";
  t.int4range = "int4range";
  t.int8 = "int8";
  t.int8range = "int8range";
  t.json = "json";
  t.jsonb = "jsonb";
  t.money = "money";
  t.numeric = "numeric";
  t.oid = "oid";
  t.reltime = "reltime";
  t.text = "text";
  t.time = "time";
  t.timestamp = "timestamp";
  t.timestamptz = "timestamptz";
  t.timetz = "timetz";
  t.tsrange = "tsrange";
  t.tstzrange = "tstzrange";
})(it ||= {});
const gg = (t, e, n = {}) => {
  const a = n.skipTypes ?? [];
  if (e) {
    return Object.keys(e).reduce((l, u) => {
      l[u] = Ck(u, t, e, a);
      return l;
    }, {});
  } else {
    return {};
  }
};
const Ck = (t, e, n, i) => {
  const a = e.find(d => d.name === t);
  const l = a == null ? undefined : a.type;
  const u = n[t];
  if (l && !i.includes(l)) {
    return gv(l, u);
  } else {
    return oh(u);
  }
};
const gv = (t, e) => {
  if (t.charAt(0) === "_") {
    const n = t.slice(1, t.length);
    return Ik(e, n);
  }
  switch (t) {
    case it.bool:
      return Pk(e);
    case it.float4:
    case it.float8:
    case it.int2:
    case it.int4:
    case it.int8:
    case it.numeric:
    case it.oid:
      return Ok(e);
    case it.json:
    case it.jsonb:
      return Ak(e);
    case it.timestamp:
      return jk(e);
    case it.abstime:
    case it.date:
    case it.daterange:
    case it.int4range:
    case it.int8range:
    case it.money:
    case it.reltime:
    case it.text:
    case it.time:
    case it.timestamptz:
    case it.timetz:
    case it.tsrange:
    case it.tstzrange:
      return oh(e);
    default:
      return oh(e);
  }
};
const oh = t => t;
const Pk = t => {
  switch (t) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return t;
  }
};
const Ok = t => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e)) {
      return e;
    }
  }
  return t;
};
const Ak = t => {
  if (typeof t == "string") {
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  return t;
};
const Ik = (t, e) => {
  if (typeof t != "string") {
    return t;
  }
  const n = t.length - 1;
  const i = t[n];
  if (t[0] === "{" && i === "}") {
    let l;
    const u = t.slice(1, n);
    try {
      l = JSON.parse("[" + u + "]");
    } catch {
      l = u ? u.split(",") : [];
    }
    return l.map(d => gv(e, d));
  }
  return t;
};
const jk = t => typeof t == "string" ? t.replace(" ", "T") : t;
const yv = t => {
  const e = new URL(t);
  e.protocol = e.protocol.replace(/^ws/i, "http");
  e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
  if (e.pathname === "" || e.pathname === "/") {
    e.pathname = "/api/broadcast";
  } else {
    e.pathname = e.pathname + "/api/broadcast";
  }
  return e.href;
};
var va = t => typeof t == "function" ? t : function () {
  return t;
};
var Nk = typeof self !== "undefined" ? self : null;
var ro = typeof window !== "undefined" ? window : null;
var _n = Nk || ro || globalThis;
var Lk = "2.0.0";
var Dk = 10000;
var Uk = 1000;
var xn = {
  connecting: 0,
  open: 1,
  closing: 2,
  closed: 3
};
var dr = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var Jn = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var ah = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var Mk = {
  complete: 4
};
var lh = "base64url.bearer.phx.";
var eu = class {
  constructor(t, e, n, i) {
    this.channel = t;
    this.event = e;
    this.payload = n || function () {
      return {};
    };
    this.receivedResp = null;
    this.timeout = i;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
    this.ref = undefined;
  }
  resend(t) {
    this.timeout = t;
    this.reset();
    this.send();
  }
  send() {
    if (!this.hasReceived("timeout")) {
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
  }
  receive(t, e) {
    if (this.hasReceived(t)) {
      e(this.receivedResp.response);
    }
    this.recHooks.push({
      status: t,
      callback: e
    });
    return this;
  }
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  destroy() {
    this.cancelRefEvent();
    this.cancelTimeout();
  }
  matchReceive({
    status: t,
    response: e,
    _ref: n
  }) {
    this.recHooks.filter(i => i.status === t).forEach(i => i.callback(e));
  }
  cancelRefEvent() {
    if (this.refEvent) {
      this.channel.off(this.refEvent);
    }
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, t => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = t;
      this.matchReceive(t);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
  trigger(t, e) {
    this.channel.trigger(this.refEvent, {
      status: t,
      response: e
    });
  }
};
var vv = class {
  constructor(t, e) {
    this.callback = t;
    this.timerCalc = e;
    this.timer = undefined;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var $k = class {
  constructor(t, e, n) {
    this.state = dr.closed;
    this.topic = t;
    this.params = va(e || {});
    this.socket = n;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new eu(this, Jn.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new vv(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive("ok", () => {
      this.state = dr.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach(i => i.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", i => {
      this.state = dr.errored;
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `error ${this.topic}`, i);
      }
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `close ${this.topic}`);
      }
      this.state = dr.closed;
      this.socket.remove(this);
    });
    this.onError(i => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `error ${this.topic}`, i);
      }
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = dr.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      }
      new eu(this, Jn.leave, va({}), this.timeout).send();
      this.state = dr.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(Jn.reply, (i, a) => {
      this.trigger(this.replyEventName(a), i);
    });
  }
  join(t = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    }
    this.timeout = t;
    this.joinedOnce = true;
    this.rejoin();
    return this.joinPush;
  }
  teardown() {
    this.pushBuffer.forEach(t => t.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = dr.closed;
    this.bindings = [];
  }
  onClose(t) {
    this.on(Jn.close, t);
  }
  onError(t) {
    return this.on(Jn.error, e => t(e));
  }
  on(t, e) {
    let n = this.bindingRef++;
    this.bindings.push({
      event: t,
      ref: n,
      callback: e
    });
    return n;
  }
  off(t, e) {
    this.bindings = this.bindings.filter(n => n.event !== t || typeof e !== "undefined" && e !== n.ref);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(t, e, n = this.timeout) {
    e = e || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let i = new eu(this, t, function () {
      return e;
    }, n);
    if (this.canPush()) {
      i.send();
    } else {
      i.startTimeout();
      this.pushBuffer.push(i);
    }
    return i;
  }
  leave(t = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = dr.leaving;
    let e = () => {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", `leave ${this.topic}`);
      }
      this.trigger(Jn.close, "leave");
    };
    let n = new eu(this, Jn.leave, va({}), t);
    n.receive("ok", () => e()).receive("timeout", () => e());
    n.send();
    if (!this.canPush()) {
      n.trigger("ok", {});
    }
    return n;
  }
  onMessage(t, e, n) {
    return e;
  }
  filterBindings(t, e, n) {
    return true;
  }
  isMember(t, e, n, i) {
    if (this.topic !== t) {
      return false;
    } else if (i && i !== this.joinRef()) {
      if (this.socket.hasLogger()) {
        this.socket.log("channel", "dropping outdated message", {
          topic: t,
          event: e,
          payload: n,
          joinRef: i
        });
      }
      return false;
    } else {
      return true;
    }
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(t = this.timeout) {
    if (!this.isLeaving()) {
      this.socket.leaveOpenTopic(this.topic);
      this.state = dr.joining;
      this.joinPush.resend(t);
    }
  }
  trigger(t, e, n, i) {
    let a = this.onMessage(t, e, n, i);
    if (e && !a) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let l = this.bindings.filter(u => u.event === t && this.filterBindings(u, e, n));
    for (let u = 0; u < l.length; u++) {
      l[u].callback(a, n, i || this.joinRef());
    }
  }
  replyEventName(t) {
    return `chan_reply_${t}`;
  }
  isClosed() {
    return this.state === dr.closed;
  }
  isErrored() {
    return this.state === dr.errored;
  }
  isJoined() {
    return this.state === dr.joined;
  }
  isJoining() {
    return this.state === dr.joining;
  }
  isLeaving() {
    return this.state === dr.leaving;
  }
};
var wu = class {
  static request(t, e, n, i, a, l, u) {
    if (_n.XDomainRequest) {
      let d = new _n.XDomainRequest();
      return this.xdomainRequest(d, t, e, i, a, l, u);
    } else if (_n.XMLHttpRequest) {
      let d = new _n.XMLHttpRequest();
      return this.xhrRequest(d, t, e, n, i, a, l, u);
    } else {
      if (_n.fetch && _n.AbortController) {
        return this.fetchRequest(t, e, n, i, a, l, u);
      }
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(t, e, n, i, a, l, u) {
    let d = {
      method: t,
      headers: n,
      body: i
    };
    let f = null;
    if (a) {
      f = new AbortController();
      setTimeout(() => f.abort(), a);
      d.signal = f.signal;
    }
    _n.fetch(e, d).then(m => m.text()).then(m => this.parseJSON(m)).then(m => u && u(m)).catch(m => {
      if (m.name === "AbortError" && l) {
        l();
      } else if (u) {
        u(null);
      }
    });
    return f;
  }
  static xdomainRequest(t, e, n, i, a, l, u) {
    t.timeout = a;
    t.open(e, n);
    t.onload = () => {
      let d = this.parseJSON(t.responseText);
      if (u) {
        u(d);
      }
    };
    if (l) {
      t.ontimeout = l;
    }
    t.onprogress = () => {};
    t.send(i);
    return t;
  }
  static xhrRequest(t, e, n, i, a, l, u, d) {
    t.open(e, n, true);
    t.timeout = l;
    for (let [f, m] of Object.entries(i)) {
      t.setRequestHeader(f, m);
    }
    t.onerror = () => d && d(null);
    t.onreadystatechange = () => {
      if (t.readyState === Mk.complete && d) {
        let f = this.parseJSON(t.responseText);
        d(f);
      }
    };
    if (u) {
      t.ontimeout = u;
    }
    t.send(a);
    return t;
  }
  static parseJSON(t) {
    if (!t || t === "") {
      return null;
    }
    try {
      return JSON.parse(t);
    } catch {
      if (console) {
        console.log("failed to parse JSON response", t);
      }
      return null;
    }
  }
  static serialize(t, e) {
    let n = [];
    for (var i in t) {
      if (!Object.prototype.hasOwnProperty.call(t, i)) {
        continue;
      }
      let a = e ? `${e}[${i}]` : i;
      let l = t[i];
      if (typeof l == "object") {
        n.push(this.serialize(l, a));
      } else {
        n.push(encodeURIComponent(a) + "=" + encodeURIComponent(l));
      }
    }
    return n.join("&");
  }
  static appendParams(t, e) {
    if (Object.keys(e).length === 0) {
      return t;
    }
    let n = t.match(/\?/) ? "&" : "?";
    return `${t}${n}${this.serialize(e)}`;
  }
};
var Fk = t => {
  let e = "";
  let n = new Uint8Array(t);
  let i = n.byteLength;
  for (let a = 0; a < i; a++) {
    e += String.fromCharCode(n[a]);
  }
  return btoa(e);
};
var Gi = class {
  constructor(t, e) {
    if (e && e.length === 2 && e[1].startsWith(lh)) {
      this.authToken = atob(e[1].slice(lh.length));
    }
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function () {};
    this.onerror = function () {};
    this.onmessage = function () {};
    this.onclose = function () {};
    this.pollEndpoint = this.normalizeEndpoint(t);
    this.readyState = xn.connecting;
    setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(t) {
    return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + ah.websocket), "$1/" + ah.longpoll);
  }
  endpointURL() {
    return wu.appendParams(this.pollEndpoint, {
      token: this.token
    });
  }
  closeAndRetry(t, e, n) {
    this.close(t, e, n);
    this.readyState = xn.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry(1005, "timeout", false);
  }
  isActive() {
    return this.readyState === xn.open || this.readyState === xn.connecting;
  }
  poll() {
    const t = {
      Accept: "application/json"
    };
    if (this.authToken) {
      t["X-Phoenix-AuthToken"] = this.authToken;
    }
    this.ajax("GET", t, null, () => this.ontimeout(), e => {
      if (e) {
        var {
          status: n,
          token: i,
          messages: a
        } = e;
        if (n === 410 && this.token !== null) {
          this.onerror(410);
          this.closeAndRetry(3410, "session_gone", false);
          return;
        }
        this.token = i;
      } else {
        n = 0;
      }
      switch (n) {
        case 200:
          a.forEach(l => {
            setTimeout(() => this.onmessage({
              data: l
            }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = xn.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, "forbidden", false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${n}`);
      }
    });
  }
  send(t) {
    if (typeof t != "string") {
      t = Fk(t);
    }
    if (this.currentBatch) {
      this.currentBatch.push(t);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(t);
    } else {
      this.currentBatch = [t];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(t) {
    this.awaitingBatchAck = true;
    this.ajax("POST", {
      "Content-Type": "application/x-ndjson"
    }, t.join(`
`), () => this.onerror("timeout"), e => {
      this.awaitingBatchAck = false;
      if (!e || e.status !== 200) {
        this.onerror(e && e.status);
        this.closeAndRetry(1011, "internal server error", false);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      }
    });
  }
  close(t, e, n) {
    for (let a of this.reqs) {
      a.abort();
    }
    this.readyState = xn.closed;
    let i = Object.assign({
      code: 1000,
      reason: undefined,
      wasClean: true
    }, {
      code: t,
      reason: e,
      wasClean: n
    });
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent !== "undefined") {
      this.onclose(new CloseEvent("close", i));
    } else {
      this.onclose(i);
    }
  }
  ajax(t, e, n, i, a) {
    let l;
    let u = () => {
      this.reqs.delete(l);
      i();
    };
    l = wu.request(t, this.endpointURL(), e, n, this.timeout, u, d => {
      this.reqs.delete(l);
      if (this.isActive()) {
        a(d);
      }
    });
    this.reqs.add(l);
  }
};
var zk = class ma {
  constructor(e, n = {}) {
    let i = n.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.state = {};
    this.pendingDiffs = [];
    this.channel = e;
    this.joinRef = null;
    this.caller = {
      onJoin: function () {},
      onLeave: function () {},
      onSync: function () {}
    };
    this.channel.on(i.state, a => {
      let {
        onJoin: l,
        onLeave: u,
        onSync: d
      } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = ma.syncState(this.state, a, l, u);
      this.pendingDiffs.forEach(f => {
        this.state = ma.syncDiff(this.state, f, l, u);
      });
      this.pendingDiffs = [];
      d();
    });
    this.channel.on(i.diff, a => {
      let {
        onJoin: l,
        onLeave: u,
        onSync: d
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(a);
      } else {
        this.state = ma.syncDiff(this.state, a, l, u);
        d();
      }
    });
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  list(e) {
    return ma.list(this.state, e);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  static syncState(e, n, i, a) {
    let l = this.clone(e);
    let u = {};
    let d = {};
    this.map(l, (f, m) => {
      if (!n[f]) {
        d[f] = m;
      }
    });
    this.map(n, (f, m) => {
      let y = l[f];
      if (y) {
        let g = m.metas.map(k => k.phx_ref);
        let b = y.metas.map(k => k.phx_ref);
        let w = m.metas.filter(k => b.indexOf(k.phx_ref) < 0);
        let _ = y.metas.filter(k => g.indexOf(k.phx_ref) < 0);
        if (w.length > 0) {
          u[f] = m;
          u[f].metas = w;
        }
        if (_.length > 0) {
          d[f] = this.clone(y);
          d[f].metas = _;
        }
      } else {
        u[f] = m;
      }
    });
    return this.syncDiff(l, {
      joins: u,
      leaves: d
    }, i, a);
  }
  static syncDiff(e, n, i, a) {
    let {
      joins: l,
      leaves: u
    } = this.clone(n);
    i ||= function () {};
    a ||= function () {};
    this.map(l, (d, f) => {
      let m = e[d];
      e[d] = this.clone(f);
      if (m) {
        let y = e[d].metas.map(b => b.phx_ref);
        let g = m.metas.filter(b => y.indexOf(b.phx_ref) < 0);
        e[d].metas.unshift(...g);
      }
      i(d, m, f);
    });
    this.map(u, (d, f) => {
      let m = e[d];
      if (!m) {
        return;
      }
      let y = f.metas.map(g => g.phx_ref);
      m.metas = m.metas.filter(g => y.indexOf(g.phx_ref) < 0);
      a(d, m, f);
      if (m.metas.length === 0) {
        delete e[d];
      }
    });
    return e;
  }
  static list(e, n) {
    n ||= function (i, a) {
      return a;
    };
    return this.map(e, (i, a) => n(i, a));
  }
  static map(e, n) {
    return Object.getOwnPropertyNames(e).map(i => n(i, e[i]));
  }
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
};
var tu = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: {
    push: 0,
    reply: 1,
    broadcast: 2
  },
  encode(t, e) {
    if (t.payload.constructor === ArrayBuffer) {
      return e(this.binaryEncode(t));
    }
    {
      let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
      return e(JSON.stringify(n));
    }
  },
  decode(t, e) {
    if (t.constructor === ArrayBuffer) {
      return e(this.binaryDecode(t));
    }
    {
      let [n, i, a, l, u] = JSON.parse(t);
      return e({
        join_ref: n,
        ref: i,
        topic: a,
        event: l,
        payload: u
      });
    }
  },
  binaryEncode(t) {
    let {
      join_ref: e,
      ref: n,
      event: i,
      topic: a,
      payload: l
    } = t;
    let u = this.META_LENGTH + e.length + n.length + a.length + i.length;
    let d = new ArrayBuffer(this.HEADER_LENGTH + u);
    let f = new DataView(d);
    let m = 0;
    f.setUint8(m++, this.KINDS.push);
    f.setUint8(m++, e.length);
    f.setUint8(m++, n.length);
    f.setUint8(m++, a.length);
    f.setUint8(m++, i.length);
    Array.from(e, g => f.setUint8(m++, g.charCodeAt(0)));
    Array.from(n, g => f.setUint8(m++, g.charCodeAt(0)));
    Array.from(a, g => f.setUint8(m++, g.charCodeAt(0)));
    Array.from(i, g => f.setUint8(m++, g.charCodeAt(0)));
    var y = new Uint8Array(d.byteLength + l.byteLength);
    y.set(new Uint8Array(d), 0);
    y.set(new Uint8Array(l), d.byteLength);
    return y.buffer;
  },
  binaryDecode(t) {
    let e = new DataView(t);
    let n = e.getUint8(0);
    let i = new TextDecoder();
    switch (n) {
      case this.KINDS.push:
        return this.decodePush(t, e, i);
      case this.KINDS.reply:
        return this.decodeReply(t, e, i);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(t, e, i);
    }
  },
  decodePush(t, e, n) {
    let i = e.getUint8(1);
    let a = e.getUint8(2);
    let l = e.getUint8(3);
    let u = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let d = n.decode(t.slice(u, u + i));
    u = u + i;
    let f = n.decode(t.slice(u, u + a));
    u = u + a;
    let m = n.decode(t.slice(u, u + l));
    u = u + l;
    let y = t.slice(u, t.byteLength);
    return {
      join_ref: d,
      ref: null,
      topic: f,
      event: m,
      payload: y
    };
  },
  decodeReply(t, e, n) {
    let i = e.getUint8(1);
    let a = e.getUint8(2);
    let l = e.getUint8(3);
    let u = e.getUint8(4);
    let d = this.HEADER_LENGTH + this.META_LENGTH;
    let f = n.decode(t.slice(d, d + i));
    d = d + i;
    let m = n.decode(t.slice(d, d + a));
    d = d + a;
    let y = n.decode(t.slice(d, d + l));
    d = d + l;
    let g = n.decode(t.slice(d, d + u));
    d = d + u;
    let b = t.slice(d, t.byteLength);
    let w = {
      status: g,
      response: b
    };
    return {
      join_ref: f,
      ref: m,
      topic: y,
      event: Jn.reply,
      payload: w
    };
  },
  decodeBroadcast(t, e, n) {
    let i = e.getUint8(1);
    let a = e.getUint8(2);
    let l = this.HEADER_LENGTH + 2;
    let u = n.decode(t.slice(l, l + i));
    l = l + i;
    let d = n.decode(t.slice(l, l + a));
    l = l + a;
    let f = t.slice(l, t.byteLength);
    return {
      join_ref: null,
      ref: null,
      topic: u,
      event: d,
      payload: f
    };
  }
};
var Bk = class {
  constructor(t, e = {}) {
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.fallbackRef = null;
    this.timeout = e.timeout || Dk;
    this.transport = e.transport || _n.WebSocket || Gi;
    this.conn = undefined;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = e.longPollFallbackMs;
    this.fallbackTimer = null;
    let n = null;
    try {
      n = _n && _n.sessionStorage;
    } catch {}
    this.sessionStore = e.sessionStorage || n;
    this.establishedConnections = 0;
    this.defaultEncoder = tu.encode.bind(tu);
    this.defaultDecoder = tu.decode.bind(tu);
    this.closeWasClean = true;
    this.disconnecting = false;
    this.binaryType = e.binaryType || "arraybuffer";
    this.connectClock = 1;
    this.pageHidden = false;
    this.encode = undefined;
    this.decode = undefined;
    if (this.transport !== Gi) {
      this.encode = e.encode || this.defaultEncoder;
      this.decode = e.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let i = null;
    if (ro && ro.addEventListener) {
      ro.addEventListener("pagehide", a => {
        if (this.conn) {
          this.disconnect();
          i = this.connectClock;
        }
      });
      ro.addEventListener("pageshow", a => {
        if (i === this.connectClock) {
          i = null;
          this.connect();
        }
      });
      ro.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.pageHidden = true;
        } else {
          this.pageHidden = false;
          if (!this.isConnected() && !this.closeWasClean) {
            this.teardown(() => this.connect());
          }
        }
      });
    }
    this.heartbeatIntervalMs = e.heartbeatIntervalMs || 30000;
    this.autoSendHeartbeat = e.autoSendHeartbeat ?? true;
    this.heartbeatCallback = e.heartbeatCallback ?? (() => {});
    this.rejoinAfterMs = a => e.rejoinAfterMs ? e.rejoinAfterMs(a) : [1000, 2000, 5000][a - 1] || 10000;
    this.reconnectAfterMs = a => e.reconnectAfterMs ? e.reconnectAfterMs(a) : [10, 50, 100, 150, 200, 250, 500, 1000, 2000][a - 1] || 5000;
    this.logger = e.logger || null;
    if (!this.logger && e.debug) {
      this.logger = (a, l, u) => {
        console.log(`${a}: ${l}`, u);
      };
    }
    this.longpollerTimeout = e.longpollerTimeout || 20000;
    this.params = va(e.params || {});
    this.endPoint = `${t}/${ah.websocket}`;
    this.vsn = e.vsn || Lk;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.heartbeatSentAt = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new vv(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!");
        this.teardown();
        return;
      }
      this.teardown(async () => {
        if (e.beforeReconnect) {
          await e.beforeReconnect();
        }
        this.connect();
      });
    }, this.reconnectAfterMs);
    this.authToken = e.authToken;
  }
  getLongPollTransport() {
    return Gi;
  }
  replaceTransport(t) {
    this.connectClock++;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
    this.transport = t;
  }
  protocol() {
    if (location.protocol.match(/^https/)) {
      return "wss";
    } else {
      return "ws";
    }
  }
  endPointURL() {
    let t = wu.appendParams(wu.appendParams(this.endPoint, this.params()), {
      vsn: this.vsn
    });
    if (t.charAt(0) !== "/") {
      return t;
    } else if (t.charAt(1) === "/") {
      return `${this.protocol()}:${t}`;
    } else {
      return `${this.protocol()}://${location.host}${t}`;
    }
  }
  disconnect(t, e, n) {
    this.connectClock++;
    this.disconnecting = true;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.teardown(() => {
      this.disconnecting = false;
      if (t) {
        t();
      }
    }, e, n);
  }
  connect(t) {
    if (t) {
      if (console) {
        console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      }
      this.params = va(t);
    }
    if (!this.conn || !!this.disconnecting) {
      if (this.longPollFallbackMs && this.transport !== Gi) {
        this.connectWithFallback(Gi, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
  }
  log(t, e, n) {
    if (this.logger) {
      this.logger(t, e, n);
    }
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(t) {
    let e = this.makeRef();
    this.stateChangeCallbacks.open.push([e, t]);
    return e;
  }
  onClose(t) {
    let e = this.makeRef();
    this.stateChangeCallbacks.close.push([e, t]);
    return e;
  }
  onError(t) {
    let e = this.makeRef();
    this.stateChangeCallbacks.error.push([e, t]);
    return e;
  }
  onMessage(t) {
    let e = this.makeRef();
    this.stateChangeCallbacks.message.push([e, t]);
    return e;
  }
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  ping(t) {
    if (!this.isConnected()) {
      return false;
    }
    let e = this.makeRef();
    let n = Date.now();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: e
    });
    let i = this.onMessage(a => {
      if (a.ref === e) {
        this.off([i]);
        t(Date.now() - n);
      }
    });
    return true;
  }
  transportName(t) {
    switch (t) {
      case Gi:
        return "LongPoll";
      default:
        return t.name;
    }
  }
  transportConnect() {
    this.connectClock++;
    this.closeWasClean = false;
    let t;
    if (this.authToken) {
      t = ["phoenix", `${lh}${btoa(this.authToken).replace(/=/g, "")}`];
    }
    this.conn = new this.transport(this.endPointURL(), t);
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = e => this.onConnError(e);
    this.conn.onmessage = e => this.onConnMessage(e);
    this.conn.onclose = e => this.onConnClose(e);
  }
  getSession(t) {
    return this.sessionStore && this.sessionStore.getItem(t);
  }
  storeSession(t, e) {
    if (this.sessionStore) {
      this.sessionStore.setItem(t, e);
    }
  }
  connectWithFallback(t, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let n = false;
    let i = true;
    let a;
    let l;
    let u = this.transportName(t);
    let d = f => {
      this.log("transport", `falling back to ${u}...`, f);
      this.off([a, l]);
      i = false;
      this.replaceTransport(t);
      this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${u}`)) {
      return d("memorized");
    }
    this.fallbackTimer = setTimeout(d, e);
    l = this.onError(f => {
      this.log("transport", "error", f);
      if (i && !n) {
        clearTimeout(this.fallbackTimer);
        d(f);
      }
    });
    if (this.fallbackRef) {
      this.off([this.fallbackRef]);
    }
    this.fallbackRef = this.onOpen(() => {
      n = true;
      if (!i) {
        let f = this.transportName(t);
        if (!this.primaryPassedHealthCheck) {
          this.storeSession(`phx:fallback:${f}`, "true");
        }
        return this.log("transport", `established ${f} fallback`);
      }
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = setTimeout(d, e);
      this.ping(f => {
        this.log("transport", "connected to primary after", f);
        this.primaryPassedHealthCheck = true;
        clearTimeout(this.fallbackTimer);
      });
    });
    this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger()) {
      this.log("transport", `connected to ${this.endPointURL()}`);
    }
    this.closeWasClean = false;
    this.disconnecting = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    if (this.autoSendHeartbeat) {
      this.resetHeartbeat();
    }
    this.triggerStateCallbacks("open");
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.heartbeatSentAt = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      try {
        this.heartbeatCallback("timeout");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this.triggerChanError(new Error("heartbeat timeout"));
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), Uk, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (!this.conn || !this.conn.skipHeartbeat) {
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
  }
  teardown(t, e, n) {
    if (!this.conn) {
      return t && t();
    }
    const i = this.conn;
    this.waitForBufferDone(i, () => {
      if (e) {
        i.close(e, n || "");
      } else {
        i.close();
      }
      this.waitForSocketClosed(i, () => {
        if (this.conn === i) {
          this.conn.onopen = function () {};
          this.conn.onerror = function () {};
          this.conn.onmessage = function () {};
          this.conn.onclose = function () {};
          this.conn = null;
        }
        if (t) {
          t();
        }
      });
    });
  }
  waitForBufferDone(t, e, n = 1) {
    if (n === 5 || !t.bufferedAmount) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(t, e, n + 1);
    }, n * 150);
  }
  waitForSocketClosed(t, e, n = 1) {
    if (n === 5 || t.readyState === xn.closed) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(t, e, n + 1);
    }, n * 150);
  }
  onConnClose(t) {
    if (this.conn) {
      this.conn.onclose = () => {};
    }
    if (this.hasLogger()) {
      this.log("transport", "close", t);
    }
    this.triggerChanError(t);
    this.clearHeartbeats();
    if (!this.closeWasClean) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.triggerStateCallbacks("close", t);
  }
  onConnError(t) {
    if (this.hasLogger()) {
      this.log("transport", "error", t);
    }
    let e = this.transport;
    let n = this.establishedConnections;
    this.triggerStateCallbacks("error", t, e, n);
    if (e === this.transport || n > 0) {
      this.triggerChanError(t);
    }
  }
  triggerChanError(t) {
    this.channels.forEach(e => {
      if (!e.isErrored() && !e.isLeaving() && !e.isClosed()) {
        e.trigger(Jn.error, t);
      }
    });
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case xn.connecting:
        return "connecting";
      case xn.open:
        return "open";
      case xn.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  isConnected() {
    return this.connectionState() === "open";
  }
  remove(t) {
    this.off(t.stateChangeRefs);
    this.channels = this.channels.filter(e => e !== t);
  }
  off(t) {
    for (let e in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([n]) => t.indexOf(n) === -1);
    }
  }
  channel(t, e = {}) {
    let n = new $k(t, e, this);
    this.channels.push(n);
    return n;
  }
  push(t) {
    if (this.hasLogger()) {
      let {
        topic: e,
        event: n,
        payload: i,
        ref: a,
        join_ref: l
      } = t;
      this.log("push", `${e} ${n} (${l}, ${a})`, i);
    }
    if (this.isConnected()) {
      this.encode(t, e => this.conn.send(e));
    } else {
      this.sendBuffer.push(() => this.encode(t, e => this.conn.send(e)));
    }
  }
  makeRef() {
    let t = this.ref + 1;
    if (t === this.ref) {
      this.ref = 0;
    } else {
      this.ref = t;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.heartbeatSentAt = Date.now();
    this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach(t => t());
      this.sendBuffer = [];
    }
  }
  onConnMessage(t) {
    this.decode(t.data, e => {
      let {
        topic: n,
        event: i,
        payload: a,
        ref: l,
        join_ref: u
      } = e;
      if (l && l === this.pendingHeartbeatRef) {
        const d = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : undefined;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(a.status === "ok" ? "ok" : "error", d);
        } catch (f) {
          this.log("error", "error in heartbeat callback", f);
        }
        this.pendingHeartbeatRef = null;
        this.heartbeatSentAt = null;
        if (this.autoSendHeartbeat) {
          this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
      }
      if (this.hasLogger()) {
        this.log("receive", `${a.status || ""} ${n} ${i} ${l && "(" + l + ")" || ""}`.trim(), a);
      }
      for (let d = 0; d < this.channels.length; d++) {
        const f = this.channels[d];
        if (f.isMember(n, i, a, u)) {
          f.trigger(i, a, l, u);
        }
      }
      this.triggerStateCallbacks("message", e);
    });
  }
  triggerStateCallbacks(t, ...e) {
    try {
      this.stateChangeCallbacks[t].forEach(([n, i]) => {
        try {
          i(...e);
        } catch (a) {
          this.log("error", `error in ${t} callback`, a);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  leaveOpenTopic(t) {
    let e = this.channels.find(n => n.topic === t && (n.isJoined() || n.isJoining()));
    if (e) {
      if (this.hasLogger()) {
        this.log("transport", `leaving duplicate topic "${t}"`);
      }
      e.leave();
    }
  }
};
class wa {
  constructor(e, n) {
    const i = Wk(n);
    this.presence = new zk(e.getChannel(), i);
    this.presence.onJoin((a, l, u) => {
      const d = wa.onJoinPayload(a, l, u);
      e.getChannel().trigger("presence", d);
    });
    this.presence.onLeave((a, l, u) => {
      const d = wa.onLeavePayload(a, l, u);
      e.getChannel().trigger("presence", d);
    });
    this.presence.onSync(() => {
      e.getChannel().trigger("presence", {
        event: "sync"
      });
    });
  }
  get state() {
    return wa.transformState(this.presence.state);
  }
  static transformState(e) {
    e = Hk(e);
    return Object.getOwnPropertyNames(e).reduce((n, i) => {
      const a = e[i];
      n[i] = pu(a);
      return n;
    }, {});
  }
  static onJoinPayload(e, n, i) {
    const a = yg(n);
    const l = pu(i);
    return {
      event: "join",
      key: e,
      currentPresences: a,
      newPresences: l
    };
  }
  static onLeavePayload(e, n, i) {
    const a = yg(n);
    const l = pu(i);
    return {
      event: "leave",
      key: e,
      currentPresences: a,
      leftPresences: l
    };
  }
}
function pu(t) {
  return t.metas.map(e => {
    e.presence_ref = e.phx_ref;
    delete e.phx_ref;
    delete e.phx_ref_prev;
    return e;
  });
}
function Hk(t) {
  return JSON.parse(JSON.stringify(t));
}
function Wk(t) {
  return (t == null ? undefined : t.events) && {
    events: t.events
  };
}
function yg(t) {
  if (t != null && t.metas) {
    return pu(t);
  } else {
    return [];
  }
}
var vg;
(function (t) {
  t.SYNC = "sync";
  t.JOIN = "join";
  t.LEAVE = "leave";
})(vg ||= {});
class Vk {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, n) {
    this.channel = e;
    this.presenceAdapter = new wa(this.channel.channelAdapter, n);
  }
}
function qk(t) {
  if (t instanceof Error) {
    return t;
  }
  if (typeof t == "string") {
    return new Error(t);
  }
  if (t && typeof t == "object") {
    const e = t;
    if (typeof e.code == "number") {
      const n = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${n}`, {
        cause: t
      });
    }
    return new Error("channel error: transport failure", {
      cause: t
    });
  }
  return new Error("channel error: connection lost");
}
class Kk {
  constructor(e, n, i) {
    const a = Gk(i);
    this.channel = e.getSocket().channel(n, a);
    this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, n) {
    return this.channel.on(e, n);
  }
  off(e, n) {
    this.channel.off(e, n);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, n, i) {
    let a;
    try {
      a = this.channel.push(e, n, i);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > Rk) {
      const l = this.channel.pushBuffer.shift();
      l.cancelTimeout();
      this.socket.log("channel", `discarded push due to buffer overflow: ${l.event}`, l.payload());
    }
    return a;
  }
  updateJoinPayload(e) {
    const n = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, n), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Rs.joined;
  }
  isJoined() {
    return this.state === Rs.joined;
  }
  isJoining() {
    return this.state === Rs.joining;
  }
  isClosed() {
    return this.state === Rs.closed;
  }
  isLeaving() {
    return this.state === Rs.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
}
function Gk(t) {
  return {
    config: Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, t.config)
  };
}
var wg;
(function (t) {
  t.ALL = "*";
  t.INSERT = "INSERT";
  t.UPDATE = "UPDATE";
  t.DELETE = "DELETE";
})(wg ||= {});
var oo;
(function (t) {
  t.BROADCAST = "broadcast";
  t.PRESENCE = "presence";
  t.POSTGRES_CHANGES = "postgres_changes";
  t.SYSTEM = "system";
})(oo ||= {});
var Qn;
(function (t) {
  t.SUBSCRIBED = "SUBSCRIBED";
  t.TIMED_OUT = "TIMED_OUT";
  t.CLOSED = "CLOSED";
  t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Qn ||= {});
class ba {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(e, n = {
    config: {}
  }, i) {
    var l;
    this.topic = e;
    this.params = n;
    this.socket = i;
    this.bindings = {};
    this.subTopic = e.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, n.config);
    this.channelAdapter = new Kk(this.socket.socketAdapter, e, this.params);
    this.presence = new Vk(this);
    this._onClose(() => {
      this.socket._remove(this);
    });
    this._updateFilterTransform();
    this.broadcastEndpointURL = yv(this.socket.socketAdapter.endPointURL());
    this.private = this.params.config.private || false;
    if (!this.private && (l = this.params.config?.broadcast) !== null && l !== undefined && l.replay) {
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
    }
  }
  subscribe(e, n = this.timeout) {
    var i;
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.channelAdapter.isClosed()) {
      const {
        config: {
          broadcast: u,
          presence: d,
          private: f
        }
      } = this.params;
      const m = ((i = this.bindings.postgres_changes) === null || i === undefined ? undefined : i.map(w => w.filter)) ?? [];
      const y = !!this.bindings[oo.PRESENCE] && this.bindings[oo.PRESENCE].length > 0 || this.params.config.presence?.enabled === true;
      const g = {};
      const b = {
        broadcast: u,
        presence: Object.assign(Object.assign({}, d), {
          enabled: y
        }),
        postgres_changes: m,
        private: f
      };
      if (this.socket.accessTokenValue) {
        g.access_token = this.socket.accessTokenValue;
      }
      this._onError(w => {
        if (e != null) {
          e(Qn.CHANNEL_ERROR, qk(w));
        }
      });
      this._onClose(() => e == null ? undefined : e(Qn.CLOSED));
      this.updateJoinPayload(Object.assign({
        config: b
      }, g));
      this._updateFilterMessage();
      this.channelAdapter.subscribe(n).receive("ok", async ({
        postgres_changes: w
      }) => {
        if (!this.socket._isManualToken()) {
          this.socket.setAuth();
        }
        if (w === undefined) {
          if (e != null) {
            e(Qn.SUBSCRIBED);
          }
          return;
        }
        this._updatePostgresBindings(w, e);
      }).receive("error", w => {
        this.state = Rs.errored;
        const _ = Object.values(w).join(", ") || "error";
        if (e != null) {
          e(Qn.CHANNEL_ERROR, new Error(_, {
            cause: w
          }));
        }
      }).receive("timeout", () => {
        if (e != null) {
          e(Qn.TIMED_OUT);
        }
      });
    }
    return this;
  }
  _updatePostgresBindings(e, n) {
    const a = this.bindings.postgres_changes;
    const l = (a == null ? undefined : a.length) ?? 0;
    const u = [];
    for (let d = 0; d < l; d++) {
      const f = a[d];
      const {
        filter: {
          event: m,
          schema: y,
          table: g,
          filter: b
        }
      } = f;
      const w = e && e[d];
      if (w && w.event === m && ba.isFilterValueEqual(w.schema, y) && ba.isFilterValueEqual(w.table, g) && ba.isFilterValueEqual(w.filter, b)) {
        u.push(Object.assign(Object.assign({}, f), {
          id: w.id
        }));
      } else {
        this.unsubscribe();
        this.state = Rs.errored;
        if (n != null) {
          n(Qn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        }
        return;
      }
    }
    this.bindings.postgres_changes = u;
    if (this.state != Rs.errored && n) {
      n(Qn.SUBSCRIBED);
    }
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, n = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, n.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, n, i) {
    const a = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
    const l = e === oo.PRESENCE || e === oo.POSTGRES_CHANGES;
    if (a && l) {
      this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      throw new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    }
    return this._on(e, n, i);
  }
  async httpSend(e, n, i = {}) {
    if (n == null) {
      return Promise.reject(new Error("Payload is required for httpSend()"));
    }
    const l = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    if (this.socket.accessTokenValue) {
      l.Authorization = `Bearer ${this.socket.accessTokenValue}`;
    }
    const u = {
      method: "POST",
      headers: l,
      body: JSON.stringify({
        messages: [{
          topic: this.subTopic,
          event: e,
          payload: n,
          private: this.private
        }]
      })
    };
    const d = await this._fetchWithTimeout(this.broadcastEndpointURL, u, i.timeout ?? this.timeout);
    if (d.status === 202) {
      return {
        success: true
      };
    }
    let f = d.statusText;
    try {
      const m = await d.json();
      f = m.error || m.message || f;
    } catch {}
    return Promise.reject(new Error(f));
  }
  async send(e, n = {}) {
    var a;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const {
        event: l,
        payload: u
      } = e;
      const d = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        d.Authorization = `Bearer ${this.socket.accessTokenValue}`;
      }
      const f = {
        method: "POST",
        headers: d,
        body: JSON.stringify({
          messages: [{
            topic: this.subTopic,
            event: l,
            payload: u,
            private: this.private
          }]
        })
      };
      try {
        const m = await this._fetchWithTimeout(this.broadcastEndpointURL, f, n.timeout ?? this.timeout);
        await ((a = m.body) === null || a === undefined ? undefined : a.cancel());
        if (m.ok) {
          return "ok";
        } else {
          return "error";
        }
      } catch (m) {
        if (m instanceof Error && m.name === "AbortError") {
          return "timed out";
        } else {
          return "error";
        }
      }
    } else {
      return new Promise(l => {
        var f;
        const m = this.channelAdapter.push(e.type, e, n.timeout || this.timeout);
        if (e.type === "broadcast" && ((f = this.params?.config?.broadcast) === null || f === undefined || !f.ack)) {
          l("ok");
        }
        m.receive("ok", () => l("ok"));
        m.receive("error", () => l("error"));
        m.receive("timeout", () => l("timed out"));
      });
    }
  }
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  async unsubscribe(e = this.timeout) {
    return new Promise(n => {
      this.channelAdapter.unsubscribe(e).receive("ok", () => n("ok")).receive("timeout", () => n("timed out")).receive("error", () => n("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e, n, i) {
    const a = new AbortController();
    const l = setTimeout(() => a.abort(), i);
    const u = await this.socket.fetch(e, Object.assign(Object.assign({}, n), {
      signal: a.signal
    }));
    clearTimeout(l);
    return u;
  }
  _on(e, n, i) {
    const a = e.toLocaleLowerCase();
    const l = this.channelAdapter.on(e, i);
    const u = {
      type: a,
      filter: n,
      callback: i,
      ref: l
    };
    if (this.bindings[a]) {
      this.bindings[a].push(u);
    } else {
      this.bindings[a] = [u];
    }
    this._updateFilterMessage();
    return this;
  }
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, n, i) => {
      var a;
      var u;
      var d;
      var m;
      var y;
      const g = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(g, i)) {
        return false;
      }
      const b = (a = this.bindings[g]) === null || a === undefined ? undefined : a.find(w => w.ref === e.ref);
      if (!b) {
        return true;
      }
      if (["broadcast", "presence", "postgres_changes"].includes(g)) {
        if ("id" in b) {
          const w = b.id;
          const _ = b.filter?.event;
          return w && ((u = n.ids) === null || u === undefined ? undefined : u.includes(w)) && (_ === "*" || (_ == null ? undefined : _.toLocaleLowerCase()) === ((d = n.data) === null || d === undefined ? undefined : d.type.toLocaleLowerCase()));
        } else {
          const w = (m = (b == null ? undefined : b.filter)?.event) === null || m === undefined ? undefined : m.toLocaleLowerCase();
          return w === "*" || w === ((y = n == null ? undefined : n.event) === null || y === undefined ? undefined : y.toLocaleLowerCase());
        }
      } else {
        return b.type.toLocaleLowerCase() === g;
      }
    });
  }
  _notThisChannelEvent(e, n) {
    const {
      close: i,
      error: a,
      leave: l,
      join: u
    } = mv;
    return n && [i, a, l, u].includes(e) && n !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, n, i) => {
      if (typeof n == "object" && "ids" in n) {
        const a = n.data;
        const {
          schema: l,
          table: u,
          commit_timestamp: d,
          type: f,
          errors: m
        } = a;
        return Object.assign(Object.assign({}, {
          schema: l,
          table: u,
          commit_timestamp: d,
          eventType: f,
          new: {},
          old: {},
          errors: m
        }), this._getPayloadRecords(a));
      }
      return n;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce) {
      throw new Error("cannot copy bindings into joined channel");
    }
    for (const n in e.bindings) {
      for (const i of e.bindings[n]) {
        this._on(i.type, i.filter, i.callback);
      }
    }
  }
  static isFilterValueEqual(e, n) {
    return (e ?? undefined) === (n ?? undefined);
  }
  _getPayloadRecords(e) {
    const n = {
      new: {},
      old: {}
    };
    if (e.type === "INSERT" || e.type === "UPDATE") {
      n.new = gg(e.columns, e.record);
    }
    if (e.type === "UPDATE" || e.type === "DELETE") {
      n.old = gg(e.columns, e.old_record);
    }
    return n;
  }
}
class Jk {
  constructor(e, n) {
    this.socket = new Bk(e, n);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, n, i, a = 10000) {
    return new Promise(l => {
      setTimeout(() => l("timeout"), a);
      this.socket.disconnect(() => {
        e();
        l("ok");
      }, n, i);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, n, i) {
    this.socket.log(e, n, i);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == ih.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == ih.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const bg = {
  HEARTBEAT_INTERVAL: 25000
};
const Qk = [1000, 2000, 5000, 10000];
const Yk = 10000;
function Xk() {
  const t = new Map();
  return {
    get length() {
      return t.size;
    },
    clear() {
      t.clear();
    },
    getItem(e) {
      if (t.has(e)) {
        return t.get(e);
      } else {
        return null;
      }
    },
    key(e) {
      return Array.from(t.keys())[e] ?? null;
    },
    removeItem(e) {
      t.delete(e);
    },
    setItem(e, n) {
      t.set(e, String(n));
    }
  };
}
function Zk() {
  try {
    if (typeof globalThis !== "undefined" && globalThis.sessionStorage) {
      return globalThis.sessionStorage;
    }
  } catch {}
  return Xk();
}
const eE = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class tE {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    if (this.worker) {
      return this._workerHeartbeatTimer;
    } else {
      return this.socketAdapter.heartbeatTimer;
    }
  }
  get pendingHeartbeatRef() {
    if (this.worker) {
      return this._pendingWorkerHeartbeatRef;
    } else {
      return this.socketAdapter.pendingHeartbeatRef;
    }
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(e, n) {
    var i;
    this.channels = new Array();
    this.accessTokenValue = null;
    this.accessToken = null;
    this.apiKey = null;
    this.httpEndpoint = "";
    this.headers = {};
    this.params = {};
    this.ref = 0;
    this.serializer = new Tk();
    this._manuallySetToken = false;
    this._authPromise = null;
    this._workerHeartbeatTimer = undefined;
    this._pendingWorkerHeartbeatRef = null;
    this._pendingDisconnectTimer = null;
    this._disconnectOnEmptyChannelsAfterMs = 0;
    this._resolveFetch = l => l ? (...u) => l(...u) : (...u) => fetch(...u);
    if ((i = n == null ? undefined : n.params) === null || i === undefined || !i.apikey) {
      throw new Error("API key is required to connect to Realtime");
    }
    this.apiKey = n.params.apikey;
    const a = this._initializeOptions(n);
    this.socketAdapter = new Jk(e, a);
    this.httpEndpoint = yv(e);
    this.fetch = this._resolveFetch(n == null ? undefined : n.fetch);
  }
  connect() {
    if (!this.isConnecting() && !this.isDisconnecting() && !this.isConnected()) {
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const n = e.message;
        throw n.includes("Node.js") ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${n}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e, n) {
    this._cancelPendingDisconnect();
    if (this.isDisconnecting()) {
      return "ok";
    } else {
      return await this.socketAdapter.disconnect(() => {
        clearInterval(this._workerHeartbeatTimer);
        this._terminateWorker();
      }, e, n);
    }
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const n = await e.unsubscribe();
    if (n === "ok") {
      e.teardown();
    }
    return n;
  }
  async removeAllChannels() {
    const e = this.channels.map(async i => {
      const a = await i.unsubscribe();
      i.teardown();
      return a;
    });
    const n = await Promise.all(e);
    await this.disconnect();
    return n;
  }
  log(e, n, i) {
    this.socketAdapter.log(e, n, i);
  }
  connectionState() {
    return this.socketAdapter.connectionState() || ih.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(e, n = {
    config: {}
  }) {
    const i = `realtime:${e}`;
    const a = this.getChannels().find(l => l.topic === i);
    if (a) {
      return a;
    }
    {
      const l = new ba(`realtime:${e}`, n, this);
      this._cancelPendingDisconnect();
      this.channels.push(l);
      return l;
    }
  }
  push(e) {
    this.socketAdapter.push(e);
  }
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(e) {
    this.channels = this.channels.filter(n => n.topic !== e.topic);
    if (this.channels.length === 0) {
      this.log("transport", "no channels remaining, scheduling disconnect");
      this._schedulePendingDisconnect();
    }
  }
  _schedulePendingDisconnect() {
    this._cancelPendingDisconnect();
    if (this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels");
      this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null;
      if (this.channels.length === 0) {
        this.log("transport", "deferred disconnect fired - no channels, disconnecting");
        this.disconnect();
      }
    }, this._disconnectOnEmptyChannelsAfterMs);
    this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  _cancelPendingDisconnect() {
    if (this._pendingDisconnectTimer !== null) {
      this.log("transport", "pending disconnect cancelled - channel activity detected");
      clearTimeout(this._pendingDisconnectTimer);
      this._pendingDisconnectTimer = null;
    }
  }
  async _performAuth(e = null) {
    let n;
    let i = false;
    if (e) {
      n = e;
      i = true;
    } else if (this.accessToken) {
      try {
        n = await this.accessToken();
      } catch (a) {
        this.log("error", "Error fetching access token from callback", a);
        n = this.accessTokenValue;
      }
    } else {
      n = this.accessTokenValue;
    }
    if (i) {
      this._manuallySetToken = true;
    } else if (this.accessToken) {
      this._manuallySetToken = false;
    }
    if (this.accessTokenValue != n) {
      this.accessTokenValue = n;
      this.channels.forEach(a => {
        const l = {
          access_token: n,
          version: Sk
        };
        if (n) {
          a.updateJoinPayload(l);
        }
        if (a.joinedOnce && a.channelAdapter.isJoined()) {
          a.channelAdapter.push(mv.access_token, {
            access_token: n
          });
        }
      });
    }
  }
  async _waitForAuthIfNeeded() {
    if (this._authPromise) {
      await this._authPromise;
    }
  }
  _setAuthSafely(e = "general") {
    if (!this._isManualToken()) {
      this.setAuth().catch(n => {
        this.log("error", `Error setting auth in ${e}`, n);
      });
    }
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(n => {
        this.log("error", "error waiting for auth on connect", n);
      });
      if (this.worker && !this.workerRef) {
        this._startWorkerHeartbeat();
      }
    });
    this.socketAdapter.onClose(() => {
      if (this.worker && this.workerRef) {
        this._terminateWorker();
      }
    });
    this.socketAdapter.onMessage(e => {
      if (e.ref && e.ref === this._pendingWorkerHeartbeatRef) {
        this._pendingWorkerHeartbeatRef = null;
      }
    });
  }
  _handleNodeJsRaceCondition() {
    if (this.socketAdapter.isConnected()) {
      this.socketAdapter.getSocket().onConnOpen();
    }
  }
  _wrapHeartbeatCallback(e) {
    return (n, i) => {
      if (n == "sent") {
        this._setAuthSafely();
      }
      if (e) {
        e(n, i);
      }
    };
  }
  _startWorkerHeartbeat() {
    if (this.workerUrl) {
      this.log("worker", `starting worker for from ${this.workerUrl}`);
    } else {
      this.log("worker", "starting default worker");
    }
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e);
    this.workerRef.onerror = n => {
      this.log("worker", "worker error", n.message);
      this._terminateWorker();
      this.disconnect();
    };
    this.workerRef.onmessage = n => {
      if (n.data.event === "keepAlive") {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  _terminateWorker() {
    if (this.workerRef) {
      this.log("worker", "terminating worker");
      this.workerRef.terminate();
      this.workerRef = undefined;
    }
  }
  _workerObjectUrl(e) {
    let n;
    if (e) {
      n = e;
    } else {
      const i = new Blob([eE], {
        type: "application/javascript"
      });
      n = URL.createObjectURL(i);
    }
    return n;
  }
  _initializeOptions(e) {
    this.worker = (e == null ? undefined : e.worker) ?? false;
    this.accessToken = (e == null ? undefined : e.accessToken) ?? null;
    const _ = {
      timeout: (e == null ? undefined : e.timeout) ?? xk,
      heartbeatIntervalMs: (e == null ? undefined : e.heartbeatIntervalMs) ?? bg.HEARTBEAT_INTERVAL
    };
    this._disconnectOnEmptyChannelsAfterMs = (e == null ? undefined : e.disconnectOnEmptyChannelsAfterMs) ?? ((e == null ? undefined : e.heartbeatIntervalMs) ?? bg.HEARTBEAT_INTERVAL) * 2;
    _.transport = (e == null ? undefined : e.transport) ?? bk.getWebSocketConstructor();
    _.params = e == null ? undefined : e.params;
    _.logger = e == null ? undefined : e.logger;
    _.heartbeatCallback = this._wrapHeartbeatCallback(e == null ? undefined : e.heartbeatCallback);
    _.sessionStorage = (e == null ? undefined : e.sessionStorage) ?? Zk();
    _.reconnectAfterMs = (e == null ? undefined : e.reconnectAfterMs) ?? (N => Qk[N - 1] || Yk);
    let k;
    let x;
    const I = (e == null ? undefined : e.vsn) ?? Ek;
    switch (I) {
      case kk:
        k = (N, L) => L(JSON.stringify(N));
        x = (N, L) => L(JSON.parse(N));
        break;
      case pv:
        k = this.serializer.encode.bind(this.serializer);
        x = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${_.vsn}`);
    }
    _.vsn = I;
    _.encode = (e == null ? undefined : e.encode) ?? k;
    _.decode = (e == null ? undefined : e.decode) ?? x;
    _.beforeReconnect = this._reconnectAuth.bind(this);
    if (e != null && e.logLevel || e != null && e.log_level) {
      this.logLevel = e.logLevel || e.log_level;
      _.params = Object.assign(Object.assign({}, _.params), {
        log_level: this.logLevel
      });
    }
    if (this.worker) {
      if (typeof window !== "undefined" && !window.Worker) {
        throw new Error("Web Worker is not supported");
      }
      this.workerUrl = e == null ? undefined : e.workerUrl;
      _.autoSendHeartbeat = !this.worker;
    }
    return _;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded();
    if (!this.isConnected()) {
      this.connect();
    }
  }
}
var Ca = class extends Error {
  constructor(t, e) {
    var n;
    super(t);
    this.name = "IcebergError";
    this.status = e.status;
    this.icebergType = e.icebergType;
    this.icebergCode = e.icebergCode;
    this.details = e.details;
    this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && ((n = e.icebergType) == null ? undefined : n.includes("CommitState")) === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function rE(t, e, n) {
  const i = new URL(e, t);
  if (n) {
    for (const [a, l] of Object.entries(n)) {
      if (l !== undefined) {
        i.searchParams.set(a, l);
      }
    }
  }
  return i.toString();
}
async function nE(t) {
  if (!t || t.type === "none") {
    return {};
  } else if (t.type === "bearer") {
    return {
      Authorization: `Bearer ${t.token}`
    };
  } else if (t.type === "header") {
    return {
      [t.name]: t.value
    };
  } else if (t.type === "custom") {
    return await t.getHeaders();
  } else {
    return {};
  }
}
function sE(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: n,
      path: i,
      query: a,
      body: l,
      headers: u
    }) {
      const d = rE(t.baseUrl, i, a);
      const f = await nE(t.auth);
      const m = await e(d, {
        method: n,
        headers: {
          ...(l ? {
            "Content-Type": "application/json"
          } : {}),
          ...f,
          ...u
        },
        body: l ? JSON.stringify(l) : undefined
      });
      const y = await m.text();
      const g = (m.headers.get("content-type") || "").includes("application/json");
      const b = g && y ? JSON.parse(y) : y;
      if (!m.ok) {
        const w = g ? b : undefined;
        const _ = w == null ? undefined : w.error;
        throw new Ca((_ == null ? undefined : _.message) ?? `Request failed with status ${m.status}`, {
          status: m.status,
          icebergType: _ == null ? undefined : _.type,
          icebergCode: _ == null ? undefined : _.code,
          details: w
        });
      }
      return {
        status: m.status,
        headers: m.headers,
        data: b
      };
    }
  };
}
function ru(t) {
  return t.join("");
}
var iE = class {
  constructor(t, e = "") {
    this.client = t;
    this.prefix = e;
  }
  async listNamespaces(t) {
    const e = t ? {
      parent: ru(t.namespace)
    } : undefined;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map(i => ({
      namespace: i
    }));
  }
  async createNamespace(t, e) {
    const n = {
      namespace: t.namespace,
      properties: e == null ? undefined : e.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: n
    })).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${ru(t.namespace)}`
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${ru(t.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(t) {
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${ru(t.namespace)}`
      });
      return true;
    } catch (e) {
      if (e instanceof Ca && e.status === 404) {
        return false;
      }
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (n) {
      if (n instanceof Ca && n.status === 409) {
        return;
      }
      throw n;
    }
  }
};
function Ji(t) {
  return t.join("");
}
var oE = class {
  constructor(t, e = "", n) {
    this.client = t;
    this.prefix = e;
    this.accessDelegation = n;
  }
  async listTables(t) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(t, e) {
    const n = {};
    if (this.accessDelegation) {
      n["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables`,
      body: e,
      headers: n
    })).data.metadata;
  }
  async updateTable(t, e) {
    const n = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables/${t.name}`,
      body: e
    });
    return {
      "metadata-location": n.data["metadata-location"],
      metadata: n.data.metadata
    };
  }
  async dropTable(t, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables/${t.name}`,
      query: {
        purgeRequested: String((e == null ? undefined : e.purge) ?? false)
      }
    });
  }
  async loadTable(t) {
    const e = {};
    if (this.accessDelegation) {
      e["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables/${t.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(t) {
    const e = {};
    if (this.accessDelegation) {
      e["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Ji(t.namespace)}/tables/${t.name}`,
        headers: e
      });
      return true;
    } catch (n) {
      if (n instanceof Ca && n.status === 404) {
        return false;
      }
      throw n;
    }
  }
  async createTableIfNotExists(t, e) {
    try {
      return await this.createTable(t, e);
    } catch (n) {
      if (n instanceof Ca && n.status === 409) {
        return await this.loadTable({
          namespace: t.namespace,
          name: e.name
        });
      }
      throw n;
    }
  }
};
var aE = class {
  constructor(t) {
    var i;
    let e = "v1";
    if (t.catalogName) {
      e += `/${t.catalogName}`;
    }
    const n = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
    this.client = sE({
      baseUrl: n,
      auth: t.auth,
      fetchImpl: t.fetch
    });
    this.accessDelegation = (i = t.accessDelegation) == null ? undefined : i.join(",");
    this.namespaceOps = new iE(this.client, e);
    this.tableOps = new oE(this.client, e, this.accessDelegation);
  }
  async listNamespaces(t) {
    return this.namespaceOps.listNamespaces(t);
  }
  async createNamespace(t, e) {
    return this.namespaceOps.createNamespace(t, e);
  }
  async dropNamespace(t) {
    await this.namespaceOps.dropNamespace(t);
  }
  async loadNamespaceMetadata(t) {
    return this.namespaceOps.loadNamespaceMetadata(t);
  }
  async listTables(t) {
    return this.tableOps.listTables(t);
  }
  async createTable(t, e) {
    return this.tableOps.createTable(t, e);
  }
  async updateTable(t, e) {
    return this.tableOps.updateTable(t, e);
  }
  async dropTable(t, e) {
    await this.tableOps.dropTable(t, e);
  }
  async loadTable(t) {
    return this.tableOps.loadTable(t);
  }
  async namespaceExists(t) {
    return this.namespaceOps.namespaceExists(t);
  }
  async tableExists(t) {
    return this.tableOps.tableExists(t);
  }
  async createNamespaceIfNotExists(t, e) {
    return this.namespaceOps.createNamespaceIfNotExists(t, e);
  }
  async createTableIfNotExists(t, e) {
    return this.tableOps.createTableIfNotExists(t, e);
  }
};
function Pa(t) {
  "@babel/helpers - typeof";

  Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return Pa(t);
}
function lE(t, e) {
  if (Pa(t) != "object" || !t) {
    return t;
  }
  var n = t[Symbol.toPrimitive];
  if (n !== undefined) {
    var i = n.call(t, e);
    if (Pa(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function uE(t) {
  var e = lE(t, "string");
  if (Pa(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function cE(t, e, n) {
  if ((e = uE(e)) in t) {
    Object.defineProperty(t, e, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    t[e] = n;
  }
  return t;
}
function _g(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    if (e) {
      i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      });
    }
    n.push.apply(n, i);
  }
  return n;
}
function Ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] ?? {};
    if (e % 2) {
      _g(Object(n), true).forEach(function (i) {
        cE(t, i, n[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    } else {
      _g(Object(n)).forEach(function (i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
  }
  return t;
}
var Iu = class extends Error {
  constructor(t, e = "storage", n, i) {
    super(t);
    this.__isStorageError = true;
    this.namespace = e;
    this.name = e === "vectors" ? "StorageVectorsError" : "StorageError";
    this.status = n;
    this.statusCode = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function ju(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var uh = class extends Iu {
  constructor(t, e, n, i = "storage") {
    super(t, i, e, n);
    this.name = i === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
    this.status = e;
    this.statusCode = n;
  }
  toJSON() {
    return Ae({}, super.toJSON());
  }
};
var wv = class extends Iu {
  constructor(t, e, n = "storage") {
    super(t, n);
    this.name = n === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
    this.originalError = e;
  }
};
function bu(t, e, n) {
  const i = Ae({}, t);
  const a = e.toLowerCase();
  for (const l of Object.keys(i)) {
    if (l.toLowerCase() === a) {
      delete i[l];
    }
  }
  i[a] = n;
  return i;
}
function dE(t) {
  const e = {};
  for (const [n, i] of Object.entries(t)) {
    e[n.toLowerCase()] = i;
  }
  return e;
}
const hE = t => t ? (...e) => t(...e) : (...e) => fetch(...e);
const fE = t => {
  if (typeof t != "object" || t === null) {
    return false;
  }
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
};
const ch = t => {
  if (Array.isArray(t)) {
    return t.map(n => ch(n));
  }
  if (typeof t == "function" || t !== Object(t)) {
    return t;
  }
  const e = {};
  Object.entries(t).forEach(([n, i]) => {
    const a = n.replace(/([-_][a-z])/gi, l => l.toUpperCase().replace(/[-_]/g, ""));
    e[a] = ch(i);
  });
  return e;
};
const pE = t => !t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? false : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t);
const Sg = t => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string") {
      return e.msg;
    }
    if (typeof e.message == "string") {
      return e.message;
    }
    if (typeof e.error_description == "string") {
      return e.error_description;
    }
    if (typeof e.error == "string") {
      return e.error;
    }
    if (typeof e.error == "object" && e.error !== null) {
      const n = e.error;
      if (typeof n.message == "string") {
        return n.message;
      }
    }
  }
  return JSON.stringify(t);
};
const mE = async (t, e, n, i) => {
  if (t !== null && typeof t == "object" && "json" in t && typeof t.json == "function") {
    const a = t;
    let l = parseInt(String(a.status), 10);
    if (!Number.isFinite(l)) {
      l = 500;
    }
    a.json().then(u => {
      const d = (u == null ? undefined : u.statusCode) || (u == null ? undefined : u.code) || l + "";
      e(new uh(Sg(u), l, d, i));
    }).catch(() => {
      const u = l + "";
      e(new uh(a.statusText || `HTTP ${l} error`, l, u, i));
    });
  } else {
    e(new wv(Sg(t), t, i));
  }
};
const gE = (t, e, n, i) => {
  const a = {
    method: t,
    headers: (e == null ? undefined : e.headers) || {}
  };
  if (t === "GET" || t === "HEAD" || !i) {
    return Ae(Ae({}, a), n);
  }
  if (fE(i)) {
    const u = (e == null ? undefined : e.headers) || {};
    let d;
    for (const [f, m] of Object.entries(u)) {
      if (f.toLowerCase() === "content-type") {
        d = m;
      }
    }
    a.headers = bu(u, "Content-Type", d ?? "application/json");
    a.body = JSON.stringify(i);
  } else {
    a.body = i;
  }
  if (e != null && e.duplex) {
    a.duplex = e.duplex;
  }
  return Ae(Ae({}, a), n);
};
async function ua(t, e, n, i, a, l, u) {
  return new Promise((d, f) => {
    t(n, gE(e, i, a, l)).then(m => {
      if (!m.ok) {
        throw m;
      }
      if (i != null && i.noResolveJson) {
        return m;
      }
      if (u === "vectors") {
        const y = m.headers.get("content-type");
        if (m.headers.get("content-length") === "0" || m.status === 204) {
          return {};
        }
        if (!y || !y.includes("application/json")) {
          return {};
        }
      }
      return m.json();
    }).then(m => d(m)).catch(m => mE(m, f, i, u));
  });
}
function bv(t = "storage") {
  return {
    get: async (e, n, i, a) => ua(e, "GET", n, i, a, undefined, t),
    post: async (e, n, i, a, l) => ua(e, "POST", n, a, l, i, t),
    put: async (e, n, i, a, l) => ua(e, "PUT", n, a, l, i, t),
    head: async (e, n, i, a) => ua(e, "HEAD", n, Ae(Ae({}, i), {}, {
      noResolveJson: true
    }), a, undefined, t),
    remove: async (e, n, i, a, l) => ua(e, "DELETE", n, a, l, i, t)
  };
}
const yE = bv("storage");
const {
  get: Oa,
  post: nn,
  put: dh,
  head: vE,
  remove: Bh
} = yE;
const Cr = bv("vectors");
var Eo = class {
  constructor(t, e = {}, n, i = "storage") {
    this.shouldThrowOnError = false;
    this.url = t;
    this.headers = dE(e);
    this.fetch = hE(n);
    this.namespace = i;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(t, e) {
    this.headers = bu(this.headers, t, e);
    return this;
  }
  async handleOperation(t) {
    var e = this;
    try {
      return {
        data: await t(),
        error: null
      };
    } catch (n) {
      if (e.shouldThrowOnError) {
        throw n;
      }
      if (ju(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
};
let _v;
_v = Symbol.toStringTag;
var wE = class {
  constructor(t, e) {
    this.downloadFn = t;
    this.shouldThrowOnError = e;
    this[_v] = "StreamDownloadBuilder";
    this.promise = null;
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: (await t.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) {
        throw e;
      }
      if (ju(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
let Sv;
Sv = Symbol.toStringTag;
var bE = class {
  constructor(t, e) {
    this.downloadFn = t;
    this.shouldThrowOnError = e;
    this[Sv] = "BlobDownloadBuilder";
    this.promise = null;
  }
  asStream() {
    return new wE(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: await (await t.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) {
        throw e;
      }
      if (ju(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
const _E = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
const kg = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var SE = class extends Eo {
  constructor(t, e = {}, n, i) {
    super(t, e, i, "storage");
    this.bucketId = n;
  }
  async uploadOrUpdate(t, e, n, i) {
    var a = this;
    return a.handleOperation(async () => {
      let l;
      const u = Ae(Ae({}, kg), i);
      let d = Ae(Ae({}, a.headers), t === "POST" && {
        "x-upsert": String(u.upsert)
      });
      const f = u.metadata;
      if (typeof Blob !== "undefined" && n instanceof Blob) {
        l = new FormData();
        l.append("cacheControl", u.cacheControl);
        if (f) {
          l.append("metadata", a.encodeMetadata(f));
        }
        l.append("", n);
      } else if (typeof FormData !== "undefined" && n instanceof FormData) {
        l = n;
        if (!l.has("cacheControl")) {
          l.append("cacheControl", u.cacheControl);
        }
        if (f && !l.has("metadata")) {
          l.append("metadata", a.encodeMetadata(f));
        }
      } else {
        l = n;
        d["cache-control"] = `max-age=${u.cacheControl}`;
        d["content-type"] = u.contentType;
        if (f) {
          d["x-metadata"] = a.toBase64(a.encodeMetadata(f));
        }
        if ((typeof ReadableStream !== "undefined" && l instanceof ReadableStream || l && typeof l == "object" && "pipe" in l && typeof l.pipe == "function") && !u.duplex) {
          u.duplex = "half";
        }
      }
      if (i != null && i.headers) {
        for (const [b, w] of Object.entries(i.headers)) {
          d = bu(d, b, w);
        }
      }
      const m = a._removeEmptyFolders(e);
      const y = a._getFinalPath(m);
      const g = await (t == "PUT" ? dh : nn)(a.fetch, `${a.url}/object/${y}`, l, Ae({
        headers: d
      }, u != null && u.duplex ? {
        duplex: u.duplex
      } : {}));
      return {
        path: m,
        id: g.Id,
        fullPath: g.Key
      };
    });
  }
  async upload(t, e, n) {
    return this.uploadOrUpdate("POST", t, e, n);
  }
  async uploadToSignedUrl(t, e, n, i) {
    var a = this;
    const l = a._removeEmptyFolders(t);
    const u = a._getFinalPath(l);
    const d = new URL(`${a.url}/object/upload/sign/${u}`);
    d.searchParams.set("token", e);
    return a.handleOperation(async () => {
      let f;
      const m = Ae(Ae({}, kg), i);
      let y = Ae(Ae({}, a.headers), {
        "x-upsert": String(m.upsert)
      });
      const g = m.metadata;
      if (typeof Blob !== "undefined" && n instanceof Blob) {
        f = new FormData();
        f.append("cacheControl", m.cacheControl);
        if (g) {
          f.append("metadata", a.encodeMetadata(g));
        }
        f.append("", n);
      } else if (typeof FormData !== "undefined" && n instanceof FormData) {
        f = n;
        if (!f.has("cacheControl")) {
          f.append("cacheControl", m.cacheControl);
        }
        if (g && !f.has("metadata")) {
          f.append("metadata", a.encodeMetadata(g));
        }
      } else {
        f = n;
        y["cache-control"] = `max-age=${m.cacheControl}`;
        y["content-type"] = m.contentType;
        if (g) {
          y["x-metadata"] = a.toBase64(a.encodeMetadata(g));
        }
        if ((typeof ReadableStream !== "undefined" && f instanceof ReadableStream || f && typeof f == "object" && "pipe" in f && typeof f.pipe == "function") && !m.duplex) {
          m.duplex = "half";
        }
      }
      if (i != null && i.headers) {
        for (const [b, w] of Object.entries(i.headers)) {
          y = bu(y, b, w);
        }
      }
      return {
        path: l,
        fullPath: (await dh(a.fetch, d.toString(), f, Ae({
          headers: y
        }, m != null && m.duplex ? {
          duplex: m.duplex
        } : {}))).Key
      };
    });
  }
  async createSignedUploadUrl(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      let i = n._getFinalPath(t);
      const a = Ae({}, n.headers);
      if (e != null && e.upsert) {
        a["x-upsert"] = "true";
      }
      const l = await nn(n.fetch, `${n.url}/object/upload/sign/${i}`, {}, {
        headers: a
      });
      const u = new URL(n.url + l.url);
      const d = u.searchParams.get("token");
      if (!d) {
        throw new Iu("No token returned by API");
      }
      return {
        signedUrl: u.toString(),
        path: t,
        token: d
      };
    });
  }
  async update(t, e, n) {
    return this.uploadOrUpdate("PUT", t, e, n);
  }
  async move(t, e, n) {
    var i = this;
    return i.handleOperation(async () => await nn(i.fetch, `${i.url}/object/move`, {
      bucketId: i.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: n == null ? undefined : n.destinationBucket
    }, {
      headers: i.headers
    }));
  }
  async copy(t, e, n) {
    var i = this;
    return i.handleOperation(async () => ({
      path: (await nn(i.fetch, `${i.url}/object/copy`, {
        bucketId: i.bucketId,
        sourceKey: t,
        destinationKey: e,
        destinationBucket: n == null ? undefined : n.destinationBucket
      }, {
        headers: i.headers
      })).Key
    }));
  }
  async createSignedUrl(t, e, n) {
    var i = this;
    return i.handleOperation(async () => {
      let a = i._getFinalPath(t);
      const l = typeof (n == null ? undefined : n.transform) == "object" && n.transform !== null && Object.keys(n.transform).length > 0;
      let u = await nn(i.fetch, `${i.url}/object/sign/${a}`, Ae({
        expiresIn: e
      }, l ? {
        transform: n.transform
      } : {}), {
        headers: i.headers
      });
      const d = new URLSearchParams();
      if (n != null && n.download) {
        d.set("download", n.download === true ? "" : n.download);
      }
      if ((n == null ? undefined : n.cacheNonce) != null) {
        d.set("cacheNonce", String(n.cacheNonce));
      }
      const f = d.toString();
      return {
        signedUrl: encodeURI(`${i.url}${u.signedURL}${f ? `&${f}` : ""}`)
      };
    });
  }
  async createSignedUrls(t, e, n) {
    var i = this;
    return i.handleOperation(async () => {
      const a = await nn(i.fetch, `${i.url}/object/sign/${i.bucketId}`, {
        expiresIn: e,
        paths: t
      }, {
        headers: i.headers
      });
      const l = new URLSearchParams();
      if (n != null && n.download) {
        l.set("download", n.download === true ? "" : n.download);
      }
      if ((n == null ? undefined : n.cacheNonce) != null) {
        l.set("cacheNonce", String(n.cacheNonce));
      }
      const u = l.toString();
      return a.map(d => Ae(Ae({}, d), {}, {
        signedUrl: d.signedURL ? encodeURI(`${i.url}${d.signedURL}${u ? `&${u}` : ""}`) : null
      }));
    });
  }
  download(t, e, n) {
    const i = typeof (e == null ? undefined : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object";
    const a = new URLSearchParams();
    if (e != null && e.transform) {
      this.applyTransformOptsToQuery(a, e.transform);
    }
    if ((e == null ? undefined : e.cacheNonce) != null) {
      a.set("cacheNonce", String(e.cacheNonce));
    }
    const l = a.toString();
    const u = this._getFinalPath(t);
    const d = () => Oa(this.fetch, `${this.url}/${i}/${u}${l ? `?${l}` : ""}`, {
      headers: this.headers,
      noResolveJson: true
    }, n);
    return new bE(d, this.shouldThrowOnError);
  }
  async info(t) {
    var e = this;
    const n = e._getFinalPath(t);
    return e.handleOperation(async () => ch(await Oa(e.fetch, `${e.url}/object/info/${n}`, {
      headers: e.headers
    })));
  }
  async exists(t) {
    var e = this;
    const n = e._getFinalPath(t);
    try {
      await vE(e.fetch, `${e.url}/object/${n}`, {
        headers: e.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (a) {
      if (e.shouldThrowOnError) {
        throw a;
      }
      if (ju(a)) {
        const l = a instanceof uh ? a.status : a instanceof wv ? a.originalError?.status : undefined;
        if (l !== undefined && [400, 404].includes(l)) {
          return {
            data: false,
            error: a
          };
        }
      }
      throw a;
    }
  }
  getPublicUrl(t, e) {
    const n = this._getFinalPath(t);
    const i = new URLSearchParams();
    if (e != null && e.download) {
      i.set("download", e.download === true ? "" : e.download);
    }
    if (e != null && e.transform) {
      this.applyTransformOptsToQuery(i, e.transform);
    }
    if ((e == null ? undefined : e.cacheNonce) != null) {
      i.set("cacheNonce", String(e.cacheNonce));
    }
    const a = i.toString();
    const l = typeof (e == null ? undefined : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${l}/public/${n}`) + (a ? `?${a}` : "")
      }
    };
  }
  async remove(t) {
    var e = this;
    return e.handleOperation(async () => await Bh(e.fetch, `${e.url}/object/${e.bucketId}`, {
      prefixes: t
    }, {
      headers: e.headers
    }));
  }
  async list(t, e, n) {
    var i = this;
    return i.handleOperation(async () => {
      const a = Ae(Ae(Ae({}, _E), e), {}, {
        prefix: t || ""
      });
      return await nn(i.fetch, `${i.url}/object/list/${i.bucketId}`, a, {
        headers: i.headers
      }, n);
    });
  }
  async listV2(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      const i = Ae({}, t);
      return await nn(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, i, {
        headers: n.headers
      }, e);
    });
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(t).toString("base64");
    } else {
      return btoa(t);
    }
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(t, e) {
    if (e.width) {
      t.set("width", e.width.toString());
    }
    if (e.height) {
      t.set("height", e.height.toString());
    }
    if (e.resize) {
      t.set("resize", e.resize);
    }
    if (e.format) {
      t.set("format", e.format);
    }
    if (e.quality) {
      t.set("quality", e.quality.toString());
    }
    return t;
  }
};
const kE = "2.106.0";
const Va = {
  "X-Client-Info": `storage-js/${kE}`
};
var EE = class extends Eo {
  constructor(t, e = {}, n, i) {
    const a = new URL(t);
    if (i != null && i.useNewHostname && /supabase\.(co|in|red)$/.test(a.hostname) && !a.hostname.includes("storage.supabase.")) {
      a.hostname = a.hostname.replace("supabase.", "storage.supabase.");
    }
    const l = a.href.replace(/\/$/, "");
    const u = Ae(Ae({}, Va), e);
    super(l, u, n, "storage");
  }
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const n = e.listBucketOptionsToQueryString(t);
      return await Oa(e.fetch, `${e.url}/bucket${n}`, {
        headers: e.headers
      });
    });
  }
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Oa(e.fetch, `${e.url}/bucket/${t}`, {
      headers: e.headers
    }));
  }
  async createBucket(t, e = {
    public: false
  }) {
    var n = this;
    return n.handleOperation(async () => await nn(n.fetch, `${n.url}/bucket`, {
      id: t,
      name: t,
      type: e.type,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, {
      headers: n.headers
    }));
  }
  async updateBucket(t, e) {
    var n = this;
    return n.handleOperation(async () => await dh(n.fetch, `${n.url}/bucket/${t}`, {
      id: t,
      name: t,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes
    }, {
      headers: n.headers
    }));
  }
  async emptyBucket(t) {
    var e = this;
    return e.handleOperation(async () => await nn(e.fetch, `${e.url}/bucket/${t}/empty`, {}, {
      headers: e.headers
    }));
  }
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Bh(e.fetch, `${e.url}/bucket/${t}`, {}, {
      headers: e.headers
    }));
  }
  listBucketOptionsToQueryString(t) {
    const e = {};
    if (t) {
      if ("limit" in t) {
        e.limit = String(t.limit);
      }
      if ("offset" in t) {
        e.offset = String(t.offset);
      }
      if (t.search) {
        e.search = t.search;
      }
      if (t.sortColumn) {
        e.sortColumn = t.sortColumn;
      }
      if (t.sortOrder) {
        e.sortOrder = t.sortOrder;
      }
    }
    if (Object.keys(e).length > 0) {
      return "?" + new URLSearchParams(e).toString();
    } else {
      return "";
    }
  }
};
var xE = class extends Eo {
  constructor(t, e = {}, n) {
    const i = t.replace(/\/$/, "");
    const a = Ae(Ae({}, Va), e);
    super(i, a, n, "storage");
  }
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await nn(e.fetch, `${e.url}/bucket`, {
      name: t
    }, {
      headers: e.headers
    }));
  }
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const n = new URLSearchParams();
      if ((t == null ? undefined : t.limit) !== undefined) {
        n.set("limit", t.limit.toString());
      }
      if ((t == null ? undefined : t.offset) !== undefined) {
        n.set("offset", t.offset.toString());
      }
      if (t != null && t.sortColumn) {
        n.set("sortColumn", t.sortColumn);
      }
      if (t != null && t.sortOrder) {
        n.set("sortOrder", t.sortOrder);
      }
      if (t != null && t.search) {
        n.set("search", t.search);
      }
      const i = n.toString();
      const a = i ? `${e.url}/bucket?${i}` : `${e.url}/bucket`;
      return await Oa(e.fetch, a, {
        headers: e.headers
      });
    });
  }
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Bh(e.fetch, `${e.url}/bucket/${t}`, {}, {
      headers: e.headers
    }));
  }
  from(t) {
    var e = this;
    if (!pE(t)) {
      throw new Iu("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    }
    const n = new aE({
      baseUrl: this.url,
      catalogName: t,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    });
    const i = this.shouldThrowOnError;
    return new Proxy(n, {
      get(a, l) {
        const u = a[l];
        if (typeof u != "function") {
          return u;
        } else {
          return async (...d) => {
            try {
              return {
                data: await u.apply(a, d),
                error: null
              };
            } catch (f) {
              if (i) {
                throw f;
              }
              return {
                data: null,
                error: f
              };
            }
          };
        }
      }
    });
  }
};
var RE = class extends Eo {
  constructor(t, e = {}, n) {
    const i = t.replace(/\/$/, "");
    const a = Ae(Ae({}, Va), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, a, n, "vectors");
  }
  async createIndex(t) {
    var e = this;
    return e.handleOperation(async () => (await Cr.post(e.fetch, `${e.url}/CreateIndex`, t, {
      headers: e.headers
    })) || {});
  }
  async getIndex(t, e) {
    var n = this;
    return n.handleOperation(async () => await Cr.post(n.fetch, `${n.url}/GetIndex`, {
      vectorBucketName: t,
      indexName: e
    }, {
      headers: n.headers
    }));
  }
  async listIndexes(t) {
    var e = this;
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/ListIndexes`, t, {
      headers: e.headers
    }));
  }
  async deleteIndex(t, e) {
    var n = this;
    return n.handleOperation(async () => (await Cr.post(n.fetch, `${n.url}/DeleteIndex`, {
      vectorBucketName: t,
      indexName: e
    }, {
      headers: n.headers
    })) || {});
  }
};
var TE = class extends Eo {
  constructor(t, e = {}, n) {
    const i = t.replace(/\/$/, "");
    const a = Ae(Ae({}, Va), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, a, n, "vectors");
  }
  async putVectors(t) {
    var e = this;
    if (t.vectors.length < 1 || t.vectors.length > 500) {
      throw new Error("Vector batch size must be between 1 and 500 items");
    }
    return e.handleOperation(async () => (await Cr.post(e.fetch, `${e.url}/PutVectors`, t, {
      headers: e.headers
    })) || {});
  }
  async getVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/GetVectors`, t, {
      headers: e.headers
    }));
  }
  async listVectors(t) {
    var e = this;
    if (t.segmentCount !== undefined) {
      if (t.segmentCount < 1 || t.segmentCount > 16) {
        throw new Error("segmentCount must be between 1 and 16");
      }
      if (t.segmentIndex !== undefined && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)) {
        throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
      }
    }
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/ListVectors`, t, {
      headers: e.headers
    }));
  }
  async queryVectors(t) {
    var e = this;
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/QueryVectors`, t, {
      headers: e.headers
    }));
  }
  async deleteVectors(t) {
    var e = this;
    if (t.keys.length < 1 || t.keys.length > 500) {
      throw new Error("Keys batch size must be between 1 and 500 items");
    }
    return e.handleOperation(async () => (await Cr.post(e.fetch, `${e.url}/DeleteVectors`, t, {
      headers: e.headers
    })) || {});
  }
};
var CE = class extends Eo {
  constructor(t, e = {}, n) {
    const i = t.replace(/\/$/, "");
    const a = Ae(Ae({}, Va), {}, {
      "Content-Type": "application/json"
    }, e);
    super(i, a, n, "vectors");
  }
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => (await Cr.post(e.fetch, `${e.url}/CreateVectorBucket`, {
      vectorBucketName: t
    }, {
      headers: e.headers
    })) || {});
  }
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/GetVectorBucket`, {
      vectorBucketName: t
    }, {
      headers: e.headers
    }));
  }
  async listBuckets(t = {}) {
    var e = this;
    return e.handleOperation(async () => await Cr.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
      headers: e.headers
    }));
  }
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => (await Cr.post(e.fetch, `${e.url}/DeleteVectorBucket`, {
      vectorBucketName: t
    }, {
      headers: e.headers
    })) || {});
  }
};
var PE = class extends CE {
  constructor(t, e = {}) {
    super(t, e.headers || {}, e.fetch);
  }
  from(t) {
    return new OE(this.url, this.headers, t, this.fetch);
  }
  async createBucket(t) {
    var e = () => super.createBucket;
    var n = this;
    return e().call(n, t);
  }
  async getBucket(t) {
    var e = () => super.getBucket;
    var n = this;
    return e().call(n, t);
  }
  async listBuckets(t = {}) {
    var e = () => super.listBuckets;
    var n = this;
    return e().call(n, t);
  }
  async deleteBucket(t) {
    var e = () => super.deleteBucket;
    var n = this;
    return e().call(n, t);
  }
};
var OE = class extends RE {
  constructor(t, e, n, i) {
    super(t, e, i);
    this.vectorBucketName = n;
  }
  async createIndex(t) {
    var e = () => super.createIndex;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName
    }));
  }
  async listIndexes(t = {}) {
    var e = () => super.listIndexes;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName
    }));
  }
  async getIndex(t) {
    var e = () => super.getIndex;
    var n = this;
    return e().call(n, n.vectorBucketName, t);
  }
  async deleteIndex(t) {
    var e = () => super.deleteIndex;
    var n = this;
    return e().call(n, n.vectorBucketName, t);
  }
  index(t) {
    return new AE(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
};
var AE = class extends TE {
  constructor(t, e, n, i, a) {
    super(t, e, a);
    this.vectorBucketName = n;
    this.indexName = i;
  }
  async putVectors(t) {
    var e = () => super.putVectors;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  async getVectors(t) {
    var e = () => super.getVectors;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  async listVectors(t = {}) {
    var e = () => super.listVectors;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  async queryVectors(t) {
    var e = () => super.queryVectors;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  async deleteVectors(t) {
    var e = () => super.deleteVectors;
    var n = this;
    return e().call(n, Ae(Ae({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
};
var IE = class extends EE {
  constructor(t, e = {}, n, i) {
    super(t, e, n, i);
  }
  from(t) {
    return new SE(this.url, this.headers, t, this.fetch);
  }
  get vectors() {
    return new PE(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new xE(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const kv = "2.106.0";
const no = 30000;
const hh = 3;
const Cd = hh * no;
const jE = "http://localhost:9999";
const NE = "supabase.auth.token";
const LE = {
  "X-Client-Info": `gotrue-js/${kv}`
};
const fh = "X-Supabase-Api-Version";
const Ev = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
const DE = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
const UE = 600000;
class Aa extends Error {
  constructor(e, n, i) {
    super(e);
    this.__isAuthError = true;
    this.name = "AuthError";
    this.status = n;
    this.code = i;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function oe(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class ME extends Aa {
  constructor(e, n, i) {
    super(e, n, i);
    this.name = "AuthApiError";
    this.status = n;
    this.code = i;
  }
}
function $E(t) {
  return oe(t) && t.name === "AuthApiError";
}
class on extends Aa {
  constructor(e, n) {
    super(e);
    this.name = "AuthUnknownError";
    this.originalError = n;
  }
}
class Zn extends Aa {
  constructor(e, n, i, a) {
    super(e, i, a);
    this.name = n;
    this.status = i;
  }
}
class Lt extends Zn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
  }
}
function nu(t) {
  return oe(t) && t.name === "AuthSessionMissingError";
}
class Qi extends Zn {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
  }
}
class su extends Zn {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, undefined);
  }
}
class iu extends Zn {
  constructor(e, n = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, undefined);
    this.details = null;
    this.details = n;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details
    });
  }
}
function FE(t) {
  return oe(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Eg extends Zn {
  constructor(e, n = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, undefined);
    this.details = null;
    this.details = n;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details
    });
  }
}
class zE extends Zn {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class ph extends Zn {
  constructor(e, n) {
    super(e, "AuthRetryableFetchError", n, undefined);
  }
}
function Pd(t) {
  return oe(t) && t.name === "AuthRetryableFetchError";
}
class xg extends Zn {
  constructor(e, n, i) {
    super(e, "AuthWeakPasswordError", n, "weak_password");
    this.reasons = i;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reasons: this.reasons
    });
  }
}
class mh extends Zn {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const _u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
const Rg = ` 	
\r=`.split("");
const BE = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1) {
    t[e] = -1;
  }
  for (let e = 0; e < Rg.length; e += 1) {
    t[Rg[e].charCodeAt(0)] = -2;
  }
  for (let e = 0; e < _u.length; e += 1) {
    t[_u[e].charCodeAt(0)] = e;
  }
  return t;
})();
function Tg(t, e, n) {
  if (t !== null) {
    e.queue = e.queue << 8 | t;
    e.queuedBits += 8;
    while (e.queuedBits >= 6) {
      const i = e.queue >> e.queuedBits - 6 & 63;
      n(_u[i]);
      e.queuedBits -= 6;
    }
  } else if (e.queuedBits > 0) {
    e.queue = e.queue << 6 - e.queuedBits;
    e.queuedBits = 6;
    while (e.queuedBits >= 6) {
      const i = e.queue >> e.queuedBits - 6 & 63;
      n(_u[i]);
      e.queuedBits -= 6;
    }
  }
}
function xv(t, e, n) {
  const i = BE[t];
  if (i > -1) {
    e.queue = e.queue << 6 | i;
    e.queuedBits += 6;
    while (e.queuedBits >= 8) {
      n(e.queue >> e.queuedBits - 8 & 255);
      e.queuedBits -= 8;
    }
  } else {
    if (i === -2) {
      return;
    }
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Cg(t) {
  const e = [];
  const n = u => {
    e.push(String.fromCodePoint(u));
  };
  const i = {
    utf8seq: 0,
    codepoint: 0
  };
  const a = {
    queue: 0,
    queuedBits: 0
  };
  const l = u => {
    VE(u, i, n);
  };
  for (let u = 0; u < t.length; u += 1) {
    xv(t.charCodeAt(u), a, l);
  }
  return e.join("");
}
function HE(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(t >> 6 | 192);
    e(t & 63 | 128);
    return;
  } else if (t <= 65535) {
    e(t >> 12 | 224);
    e(t >> 6 & 63 | 128);
    e(t & 63 | 128);
    return;
  } else if (t <= 1114111) {
    e(t >> 18 | 240);
    e(t >> 12 & 63 | 128);
    e(t >> 6 & 63 | 128);
    e(t & 63 | 128);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function WE(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let i = t.charCodeAt(n);
    if (i > 55295 && i <= 56319) {
      const a = (i - 55296) * 1024 & 65535;
      i = (t.charCodeAt(n + 1) - 56320 & 65535 | a) + 65536;
      n += 1;
    }
    HE(i, e);
  }
}
function VE(t, e, n) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      n(t);
      return;
    }
    for (let i = 1; i < 6; i += 1) {
      if ((t >> 7 - i & 1) === 0) {
        e.utf8seq = i;
        break;
      }
    }
    if (e.utf8seq === 2) {
      e.codepoint = t & 31;
    } else if (e.utf8seq === 3) {
      e.codepoint = t & 15;
    } else if (e.utf8seq === 4) {
      e.codepoint = t & 7;
    } else {
      throw new Error("Invalid UTF-8 sequence");
    }
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127) {
      throw new Error("Invalid UTF-8 sequence");
    }
    e.codepoint = e.codepoint << 6 | t & 63;
    e.utf8seq -= 1;
    if (e.utf8seq === 0) {
      n(e.codepoint);
    }
  }
}
function lo(t) {
  const e = [];
  const n = {
    queue: 0,
    queuedBits: 0
  };
  const i = a => {
    e.push(a);
  };
  for (let a = 0; a < t.length; a += 1) {
    xv(t.charCodeAt(a), n, i);
  }
  return new Uint8Array(e);
}
function qE(t) {
  const e = [];
  WE(t, n => e.push(n));
  return new Uint8Array(e);
}
function hi(t) {
  const e = [];
  const n = {
    queue: 0,
    queuedBits: 0
  };
  const i = a => {
    e.push(a);
  };
  t.forEach(a => Tg(a, n, i));
  Tg(null, n, i);
  return e.join("");
}
function KE(t) {
  return Math.round(Date.now() / 1000) + t;
}
function GE() {
  return Symbol("auth-callback");
}
const zt = () => typeof window !== "undefined" && typeof document !== "undefined";
const ii = {
  tested: false,
  writable: false
};
const Rv = () => {
  if (!zt()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage != "object") {
      return false;
    }
  } catch {
    return false;
  }
  if (ii.tested) {
    return ii.writable;
  }
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t);
    globalThis.localStorage.removeItem(t);
    ii.tested = true;
    ii.writable = true;
  } catch {
    ii.tested = true;
    ii.writable = false;
  }
  return ii.writable;
};
function JE(t) {
  const e = {};
  const n = new URL(t);
  if (n.hash && n.hash[0] === "#") {
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((a, l) => {
        e[l] = a;
      });
    } catch {}
  }
  n.searchParams.forEach((i, a) => {
    e[a] = i;
  });
  return e;
}
const Tv = t => t ? (...e) => t(...e) : (...e) => fetch(...e);
const QE = t => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function";
const so = async (t, e, n) => {
  await t.setItem(e, JSON.stringify(n));
};
const oi = async (t, e) => {
  const n = await t.getItem(e);
  if (!n) {
    return null;
  }
  try {
    return JSON.parse(n);
  } catch {
    return null;
  }
};
const Ft = async (t, e) => {
  await t.removeItem(e);
};
class Nu {
  constructor() {
    this.promise = new Nu.promiseConstructor((e, n) => {
      this.resolve = e;
      this.reject = n;
    });
  }
}
Nu.promiseConstructor = Promise;
function ou(t) {
  const e = t.split(".");
  if (e.length !== 3) {
    throw new mh("Invalid JWT structure");
  }
  for (let i = 0; i < e.length; i++) {
    if (!DE.test(e[i])) {
      throw new mh("JWT not in base64url format");
    }
  }
  return {
    header: JSON.parse(Cg(e[0])),
    payload: JSON.parse(Cg(e[1])),
    signature: lo(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function YE(t) {
  return await new Promise(e => {
    setTimeout(() => e(null), t);
  });
}
function XE(t, e) {
  return new Promise((i, a) => {
    (async () => {
      for (let l = 0; l < Infinity; l++) {
        try {
          const u = await t(l);
          if (!e(l, null, u)) {
            i(u);
            return;
          }
        } catch (u) {
          if (!e(l, u)) {
            a(u);
            return;
          }
        }
      }
    })();
  });
}
function ZE(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function ex() {
  const e = new Uint32Array(56);
  if (typeof crypto === "undefined") {
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    const i = n.length;
    let a = "";
    for (let l = 0; l < 56; l++) {
      a += n.charAt(Math.floor(Math.random() * i));
    }
    return a;
  }
  crypto.getRandomValues(e);
  return Array.from(e, ZE).join("");
}
async function tx(t) {
  const n = new TextEncoder().encode(t);
  const i = await crypto.subtle.digest("SHA-256", n);
  const a = new Uint8Array(i);
  return Array.from(a).map(l => String.fromCharCode(l)).join("");
}
async function rx(t) {
  if (typeof crypto === "undefined" || typeof crypto.subtle === "undefined" || typeof TextEncoder === "undefined") {
    console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
    return t;
  }
  const n = await tx(t);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Yi(t, e, n = false) {
  const i = ex();
  let a = i;
  if (n) {
    a += "/recovery";
  }
  await so(t, `${e}-code-verifier`, a);
  const l = await rx(i);
  return [l, i === l ? "plain" : "s256"];
}
const nx = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function sx(t) {
  const e = t.headers.get(fh);
  if (!e || !e.match(nx)) {
    return null;
  }
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function ix(t) {
  if (!t) {
    throw new Error("Missing exp claim");
  }
  const e = Math.floor(Date.now() / 1000);
  if (t <= e) {
    throw new Error("JWT has expired");
  }
}
function ox(t) {
  switch (t) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: {
          name: "SHA-256"
        }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const ax = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Vn(t) {
  if (!ax.test(t)) {
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
  }
}
function rn(t) {
  if (!t.passkey) {
    throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).");
  }
}
function Od() {
  const t = {};
  return new Proxy(t, {
    get: (e, n) => {
      if (n === "__isUserNotAvailableProxy") {
        return true;
      }
      if (typeof n == "symbol") {
        const i = n.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)") {
          return;
        }
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, n) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, n) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function lx(t, e) {
  return new Proxy(t, {
    get: (n, i, a) => {
      if (i === "__isInsecureUserWarningProxy") {
        return true;
      }
      if (typeof i == "symbol") {
        const l = i.toString();
        if (l === "Symbol(Symbol.toPrimitive)" || l === "Symbol(Symbol.toStringTag)" || l === "Symbol(util.inspect.custom)" || l === "Symbol(nodejs.util.inspect.custom)") {
          return Reflect.get(n, i, a);
        }
      }
      if (!e.value && typeof i == "string") {
        console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
        e.value = true;
      }
      return Reflect.get(n, i, a);
    }
  });
}
function Pg(t) {
  return JSON.parse(JSON.stringify(t));
}
const ui = t => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string") {
      return e.msg;
    }
    if (typeof e.message == "string") {
      return e.message;
    }
    if (typeof e.error_description == "string") {
      return e.error_description;
    }
    if (typeof e.error == "string") {
      return e.error;
    }
  }
  return JSON.stringify(t);
};
const ux = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function Og(t) {
  if (!QE(t)) {
    throw new ph(ui(t), 0);
  }
  if (ux.includes(t.status)) {
    throw new ph(ui(t), t.status);
  }
  let n;
  try {
    n = await t.json();
  } catch (l) {
    throw new on(ui(l), l);
  }
  let i;
  const a = sx(t);
  if (a && a.getTime() >= Ev["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string") {
    i = n.code;
  } else if (typeof n == "object" && n && typeof n.error_code == "string") {
    i = n.error_code;
  }
  if (i) {
    if (i === "weak_password") {
      throw new xg(ui(n), t.status, n.weak_password?.reasons || []);
    }
    if (i === "session_not_found") {
      throw new Lt();
    }
  } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce((l, u) => l && typeof u == "string", true)) {
    throw new xg(ui(n), t.status, n.weak_password.reasons);
  }
  throw new ME(ui(n), t.status || 500, i);
}
const cx = (t, e, n, i) => {
  const a = {
    method: t,
    headers: (e == null ? undefined : e.headers) || {}
  };
  if (t === "GET") {
    return a;
  } else {
    a.headers = Object.assign({
      "Content-Type": "application/json;charset=UTF-8"
    }, e == null ? undefined : e.headers);
    a.body = JSON.stringify(i);
    return Object.assign(Object.assign({}, a), n);
  }
};
async function ge(t, e, n, i) {
  const l = Object.assign({}, i == null ? undefined : i.headers);
  l[fh] ||= Ev["2024-01-01"].name;
  if (i != null && i.jwt) {
    l.Authorization = `Bearer ${i.jwt}`;
  }
  const u = (i == null ? undefined : i.query) ?? {};
  if (i != null && i.redirectTo) {
    u.redirect_to = i.redirectTo;
  }
  const d = Object.keys(u).length ? "?" + new URLSearchParams(u).toString() : "";
  const f = await dx(t, e, n + d, {
    headers: l,
    noResolveJson: i == null ? undefined : i.noResolveJson
  }, {}, i == null ? undefined : i.body);
  if (i != null && i.xform) {
    if (i == null) {
      return undefined;
    } else {
      return i.xform(f);
    }
  } else {
    return {
      data: Object.assign({}, f),
      error: null
    };
  }
}
async function dx(t, e, n, i, a, l) {
  const u = cx(e, i, a, l);
  let d;
  try {
    d = await t(n, Object.assign({}, u));
  } catch (f) {
    console.error(f);
    throw new ph(ui(f), 0);
  }
  if (!d.ok) {
    await Og(d);
  }
  if (i != null && i.noResolveJson) {
    return d;
  }
  try {
    return await d.json();
  } catch (f) {
    await Og(f);
  }
}
function Br(t) {
  let n = null;
  if (px(t)) {
    n = Object.assign({}, t);
    if (!t.expires_at) {
      n.expires_at = KE(t.expires_in);
    }
  }
  const i = t.user ?? null;
  return {
    data: {
      session: n,
      user: i
    },
    error: null
  };
}
function Ag(t) {
  const e = Br(t);
  if (!e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((n, i) => n && typeof i == "string", true)) {
    e.data.weak_password = t.weak_password;
  }
  return e;
}
function Ts(t) {
  return {
    data: {
      user: t.user ?? t
    },
    error: null
  };
}
function hx(t) {
  return {
    data: t,
    error: null
  };
}
function fx(t) {
  const {
    action_link: e,
    email_otp: n,
    hashed_token: i,
    redirect_to: a,
    verification_type: l
  } = t;
  const u = Au(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  const d = {
    action_link: e,
    email_otp: n,
    hashed_token: i,
    redirect_to: a,
    verification_type: l
  };
  const f = Object.assign({}, u);
  return {
    data: {
      properties: d,
      user: f
    },
    error: null
  };
}
function Ig(t) {
  return t;
}
function px(t) {
  return !!t.access_token && !!t.refresh_token && !!t.expires_in;
}
const Ad = ["global", "local", "others"];
class mx {
  constructor({
    url: e = "",
    headers: n = {},
    fetch: i,
    experimental: a
  }) {
    this.url = e;
    this.headers = n;
    this.fetch = Tv(i);
    this.experimental = a ?? {};
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
    this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
    this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    };
    this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  async signOut(e, n = Ad[0]) {
    if (Ad.indexOf(n) < 0) {
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ad.join(", ")}`);
    }
    try {
      await ge(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (i) {
      if (oe(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async inviteUserByEmail(e, n = {}) {
    try {
      return await ge(this.fetch, "POST", `${this.url}/invite`, {
        body: {
          email: e,
          data: n.data
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: Ts
      });
    } catch (i) {
      if (oe(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async generateLink(e) {
    try {
      const {
        options: n
      } = e;
      const i = Au(e, ["options"]);
      const a = Object.assign(Object.assign({}, i), n);
      if ("newEmail" in i) {
        a.new_email = i == null ? undefined : i.newEmail;
        delete a.newEmail;
      }
      return await ge(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: a,
        headers: this.headers,
        xform: fx,
        redirectTo: n == null ? undefined : n.redirectTo
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error: n
        };
      }
      throw n;
    }
  }
  async createUser(e) {
    try {
      return await ge(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Ts
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: {
            user: null
          },
          error: n
        };
      }
      throw n;
    }
  }
  async listUsers(e) {
    var n;
    var a;
    var d;
    try {
      const m = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const y = await ge(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((n = e == null ? undefined : e.page) === null || n === undefined ? undefined : n.toString()) ?? "",
          per_page: ((a = e == null ? undefined : e.perPage) === null || a === undefined ? undefined : a.toString()) ?? ""
        },
        xform: Ig
      });
      if (y.error) {
        throw y.error;
      }
      const g = await y.json();
      const b = y.headers.get("x-total-count") ?? 0;
      const w = ((d = y.headers.get("link")) === null || d === undefined ? undefined : d.split(",")) ?? [];
      if (w.length > 0) {
        w.forEach(_ => {
          const k = parseInt(_.split(";")[0].split("=")[1].substring(0, 1));
          const x = JSON.parse(_.split(";")[1].split("=")[1]);
          m[`${x}Page`] = k;
        });
        m.total = parseInt(b);
      }
      return {
        data: Object.assign(Object.assign({}, g), m),
        error: null
      };
    } catch (m) {
      if (oe(m)) {
        return {
          data: {
            users: []
          },
          error: m
        };
      }
      throw m;
    }
  }
  async getUserById(e) {
    Vn(e);
    try {
      return await ge(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Ts
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: {
            user: null
          },
          error: n
        };
      }
      throw n;
    }
  }
  async updateUserById(e, n) {
    Vn(e);
    try {
      return await ge(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: n,
        headers: this.headers,
        xform: Ts
      });
    } catch (i) {
      if (oe(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async deleteUser(e, n = false) {
    Vn(e);
    try {
      return await ge(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: n
        },
        xform: Ts
      });
    } catch (i) {
      if (oe(i)) {
        return {
          data: {
            user: null
          },
          error: i
        };
      }
      throw i;
    }
  }
  async _listFactors(e) {
    Vn(e.userId);
    try {
      const {
        data: n,
        error: i
      } = await ge(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: a => ({
          data: {
            factors: a
          },
          error: null
        })
      });
      return {
        data: n,
        error: i
      };
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _deleteFactor(e) {
    Vn(e.userId);
    Vn(e.id);
    try {
      return {
        data: await ge(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
          headers: this.headers
        }),
        error: null
      };
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _listOAuthClients(e) {
    var n;
    var a;
    var d;
    try {
      const m = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const y = await ge(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((n = e == null ? undefined : e.page) === null || n === undefined ? undefined : n.toString()) ?? "",
          per_page: ((a = e == null ? undefined : e.perPage) === null || a === undefined ? undefined : a.toString()) ?? ""
        },
        xform: Ig
      });
      if (y.error) {
        throw y.error;
      }
      const g = await y.json();
      const b = y.headers.get("x-total-count") ?? 0;
      const w = ((d = y.headers.get("link")) === null || d === undefined ? undefined : d.split(",")) ?? [];
      if (w.length > 0) {
        w.forEach(_ => {
          const k = parseInt(_.split(";")[0].split("=")[1].substring(0, 1));
          const x = JSON.parse(_.split(";")[1].split("=")[1]);
          m[`${x}Page`] = k;
        });
        m.total = parseInt(b);
      }
      return {
        data: Object.assign(Object.assign({}, g), m),
        error: null
      };
    } catch (m) {
      if (oe(m)) {
        return {
          data: {
            clients: []
          },
          error: m
        };
      }
      throw m;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await ge(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await ge(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _updateOAuthClient(e, n) {
    try {
      return await ge(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: n,
        headers: this.headers,
        xform: i => ({
          data: i,
          error: null
        })
      });
    } catch (i) {
      if (oe(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      await ge(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await ge(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _listCustomProviders(e) {
    try {
      const n = {};
      if (e != null && e.type) {
        n.type = e.type;
      }
      return await ge(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: n,
        xform: i => {
          return {
            data: {
              providers: (i == null ? undefined : i.providers) ?? []
            },
            error: null
          };
        }
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: {
            providers: []
          },
          error: n
        };
      }
      throw n;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await ge(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await ge(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _updateCustomProvider(e, n) {
    try {
      return await ge(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
        body: n,
        headers: this.headers,
        xform: i => ({
          data: i,
          error: null
        })
      });
    } catch (i) {
      if (oe(i)) {
        return {
          data: null,
          error: i
        };
      }
      throw i;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      await ge(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _adminListPasskeys(e) {
    rn(this.experimental);
    Vn(e.userId);
    try {
      return await ge(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, {
        headers: this.headers,
        xform: n => ({
          data: n,
          error: null
        })
      });
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
  async _adminDeletePasskey(e) {
    rn(this.experimental);
    Vn(e.userId);
    Vn(e.passkeyId);
    try {
      await ge(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (n) {
      if (oe(n)) {
        return {
          data: null,
          error: n
        };
      }
      throw n;
    }
  }
}
function jg(t = {}) {
  return {
    getItem: e => t[e] || null,
    setItem: (e, n) => {
      t[e] = n;
    },
    removeItem: e => {
      delete t[e];
    }
  };
}
const wn = {
  debug: !!globalThis && !!Rv() && !!globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
};
class Cv extends Error {
  constructor(e) {
    super(e);
    this.isAcquireTimeout = true;
  }
}
class Ng extends Cv {}
async function gx(t, e, n) {
  if (wn.debug) {
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  }
  const i = new globalThis.AbortController();
  let a;
  if (e > 0) {
    a = setTimeout(() => {
      i.abort();
      if (wn.debug) {
        console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
      }
    }, e);
  }
  await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(t, e === 0 ? {
      mode: "exclusive",
      ifAvailable: true
    } : {
      mode: "exclusive",
      signal: i.signal
    }, async l => {
      if (l) {
        clearTimeout(a);
        if (wn.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: acquired", t, l.name);
        }
        try {
          return await n();
        } finally {
          if (wn.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: released", t, l.name);
          }
        }
      } else {
        if (e === 0) {
          if (wn.debug) {
            console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t);
          }
          throw new Ng(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
        }
        if (wn.debug) {
          try {
            const u = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(u, null, "  "));
          } catch (u) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", u);
          }
        }
        console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
        clearTimeout(a);
        return await n();
      }
    });
  } catch (l) {
    if (e > 0) {
      clearTimeout(a);
    }
    if (l !== null && typeof l == "object" && "name" in l && l.name === "AbortError" && e > 0) {
      if (i.signal.aborted) {
        if (wn.debug) {
          console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", t);
        }
        console.warn(`@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`);
        return await Promise.resolve().then(() => globalThis.navigator.locks.request(t, {
          mode: "exclusive",
          steal: true
        }, async u => {
          if (u) {
            if (wn.debug) {
              console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", t, u.name);
            }
            try {
              return await n();
            } finally {
              if (wn.debug) {
                console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", t, u.name);
              }
            }
          } else {
            console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true");
            return await n();
          }
        }));
      }
      if (wn.debug) {
        console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", t);
      }
      throw new Ng(`Lock "${t}" was released because another request stole it`);
    }
    throw l;
  }
}
function yx() {
  if (typeof globalThis != "object") {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch {
      if (typeof self !== "undefined") {
        self.globalThis = self;
      }
    }
  }
}
function Pv(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t)) {
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  }
  return t.toLowerCase();
}
function vx(t) {
  return parseInt(t, 16);
}
function wx(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, i => i.toString(16).padStart(2, "0")).join("");
}
function bx(t) {
  var e;
  const {
    chainId: n,
    domain: i,
    expirationTime: a,
    issuedAt: l = new Date(),
    nonce: u,
    notBefore: d,
    requestId: f,
    resources: m,
    scheme: y,
    uri: g,
    version: b
  } = t;
  {
    if (!Number.isInteger(n)) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`);
    }
    if (!i) {
      throw new Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
    }
    if (u && u.length < 8) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${u}`);
    }
    if (!g) {
      throw new Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
    }
    if (b !== "1") {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${b}`);
    }
    if ((e = t.statement) !== null && e !== undefined && e.includes(`
`)) {
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`);
    }
  }
  const w = Pv(t.address);
  const _ = y ? `${y}://${i}` : i;
  const k = t.statement ? `${t.statement}
` : "";
  const x = `${_} wants you to sign in with your Ethereum account:
${w}

${k}`;
  let I = `URI: ${g}
Version: ${b}
Chain ID: ${n}${u ? `
Nonce: ${u}` : ""}
Issued At: ${l.toISOString()}`;
  if (a) {
    I += `
Expiration Time: ${a.toISOString()}`;
  }
  if (d) {
    I += `
Not Before: ${d.toISOString()}`;
  }
  if (f) {
    I += `
Request ID: ${f}`;
  }
  if (m) {
    let N = `
Resources:`;
    for (const L of m) {
      if (!L || typeof L != "string") {
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${L}`);
      }
      N += `
- ${L}`;
    }
    I += N;
  }
  return `${x}
${I}`;
}
class xt extends Error {
  constructor({
    message: e,
    code: n,
    cause: i,
    name: a
  }) {
    super(e, {
      cause: i
    });
    this.__isWebAuthnError = true;
    this.name = a ?? (i instanceof Error ? i.name : undefined) ?? "Unknown Error";
    this.code = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class Su extends xt {
  constructor(e, n) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: e
    });
    this.name = "WebAuthnUnknownError";
    this.originalError = n;
  }
}
function _x({
  error: t,
  options: e
}) {
  const {
    publicKey: l
  } = e;
  if (!l) {
    throw Error("options was missing required publicKey property");
  }
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal) {
      return new xt({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
    }
  } else if (t.name === "ConstraintError") {
    if (l.authenticatorSelection?.requireResidentKey === true) {
      return new xt({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t
      });
    }
    if (e.mediation === "conditional" && l.authenticatorSelection?.userVerification === "required") {
      return new xt({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t
      });
    }
    if (l.authenticatorSelection?.userVerification === "required") {
      return new xt({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t
      });
    }
  } else {
    if (t.name === "InvalidStateError") {
      return new xt({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t
      });
    }
    if (t.name === "NotAllowedError") {
      return new xt({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    }
    if (t.name === "NotSupportedError") {
      if (l.pubKeyCredParams.filter(d => d.type === "public-key").length === 0) {
        return new xt({
          message: "No entry in pubKeyCredParams was of type \"public-key\"",
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: t
        });
      } else {
        return new xt({
          message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
          code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
          cause: t
        });
      }
    }
    if (t.name === "SecurityError") {
      const u = window.location.hostname;
      if (Ov(u)) {
        if (l.rp.id !== u) {
          return new xt({
            message: `The RP ID "${l.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
        }
      } else {
        return new xt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t
        });
      }
    } else if (t.name === "TypeError") {
      if (l.user.id.byteLength < 1 || l.user.id.byteLength > 64) {
        return new xt({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t
        });
      }
    } else if (t.name === "UnknownError") {
      return new xt({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
    }
  }
  return new xt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
function Sx({
  error: t,
  options: e
}) {
  const {
    publicKey: n
  } = e;
  if (!n) {
    throw Error("options was missing required publicKey property");
  }
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal) {
      return new xt({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
    }
  } else {
    if (t.name === "NotAllowedError") {
      return new xt({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    }
    if (t.name === "SecurityError") {
      const i = window.location.hostname;
      if (Ov(i)) {
        if (n.rpId !== i) {
          return new xt({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
        }
      } else {
        return new xt({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t
        });
      }
    } else if (t.name === "UnknownError") {
      return new xt({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
    }
  }
  return new xt({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
class kx {
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      n.name = "AbortError";
      this.controller.abort(n);
    }
    const e = new AbortController();
    this.controller = e;
    return e.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError";
      this.controller.abort(e);
      this.controller = undefined;
    }
  }
}
const gh = new kx();
function Lg(t) {
  if (!t) {
    throw new Error("Credential creation options are required");
  }
  if (typeof PublicKeyCredential !== "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") {
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  }
  const {
    challenge: e,
    user: n,
    excludeCredentials: i
  } = t;
  const a = Au(t, ["challenge", "user", "excludeCredentials"]);
  const l = lo(e).buffer;
  const u = Object.assign(Object.assign({}, n), {
    id: lo(n.id).buffer
  });
  const d = Object.assign(Object.assign({}, a), {
    challenge: l,
    user: u
  });
  if (i && i.length > 0) {
    d.excludeCredentials = new Array(i.length);
    for (let f = 0; f < i.length; f++) {
      const m = i[f];
      d.excludeCredentials[f] = Object.assign(Object.assign({}, m), {
        id: lo(m.id).buffer,
        type: m.type || "public-key",
        transports: m.transports
      });
    }
  }
  return d;
}
function Dg(t) {
  if (!t) {
    throw new Error("Credential request options are required");
  }
  if (typeof PublicKeyCredential !== "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") {
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  }
  const {
    challenge: e,
    allowCredentials: n
  } = t;
  const i = Au(t, ["challenge", "allowCredentials"]);
  const a = lo(e).buffer;
  const l = Object.assign(Object.assign({}, i), {
    challenge: a
  });
  if (n && n.length > 0) {
    l.allowCredentials = new Array(n.length);
    for (let u = 0; u < n.length; u++) {
      const d = n[u];
      l.allowCredentials[u] = Object.assign(Object.assign({}, d), {
        id: lo(d.id).buffer,
        type: d.type || "public-key",
        transports: d.transports
      });
    }
  }
  return l;
}
function Ug(t) {
  if ("toJSON" in t && typeof t.toJSON == "function") {
    return t.toJSON();
  }
  const n = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: hi(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: hi(new Uint8Array(t.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    authenticatorAttachment: n.authenticatorAttachment ?? undefined
  };
}
function Mg(t) {
  if ("toJSON" in t && typeof t.toJSON == "function") {
    return t.toJSON();
  }
  const n = t;
  const i = t.getClientExtensionResults();
  const a = t.response;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      authenticatorData: hi(new Uint8Array(a.authenticatorData)),
      clientDataJSON: hi(new Uint8Array(a.clientDataJSON)),
      signature: hi(new Uint8Array(a.signature)),
      userHandle: a.userHandle ? hi(new Uint8Array(a.userHandle)) : undefined
    },
    type: "public-key",
    clientExtensionResults: i,
    authenticatorAttachment: n.authenticatorAttachment ?? undefined
  };
}
function Ov(t) {
  return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t);
}
function ku() {
  return !!zt() && !!("PublicKeyCredential" in window) && !!window.PublicKeyCredential && !!("credentials" in navigator) && typeof (navigator == null ? undefined : navigator.credentials)?.create == "function" && typeof (navigator == null ? undefined : navigator.credentials)?.get == "function";
}
async function Av(t) {
  try {
    const e = await navigator.credentials.create(t);
    if (e) {
      if (e instanceof PublicKeyCredential) {
        return {
          data: e,
          error: null
        };
      } else {
        return {
          data: null,
          error: new Su("Browser returned unexpected credential type", e)
        };
      }
    } else {
      return {
        data: null,
        error: new Su("Empty credential response", e)
      };
    }
  } catch (e) {
    return {
      data: null,
      error: _x({
        error: e,
        options: t
      })
    };
  }
}
async function Iv(t) {
  try {
    const e = await navigator.credentials.get(t);
    if (e) {
      if (e instanceof PublicKeyCredential) {
        return {
          data: e,
          error: null
        };
      } else {
        return {
          data: null,
          error: new Su("Browser returned unexpected credential type", e)
        };
      }
    } else {
      return {
        data: null,
        error: new Su("Empty credential response", e)
      };
    }
  } catch (e) {
    return {
      data: null,
      error: Sx({
        error: e,
        options: t
      })
    };
  }
}
const Ex = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: false,
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
};
const xx = {
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Eu(...t) {
  const e = a => a !== null && typeof a == "object" && !Array.isArray(a);
  const n = a => a instanceof ArrayBuffer || ArrayBuffer.isView(a);
  const i = {};
  for (const a of t) {
    if (a) {
      for (const l in a) {
        const u = a[l];
        if (u !== undefined) {
          if (Array.isArray(u)) {
            i[l] = u;
          } else if (n(u)) {
            i[l] = u;
          } else if (e(u)) {
            const d = i[l];
            if (e(d)) {
              i[l] = Eu(d, u);
            } else {
              i[l] = Eu(u);
            }
          } else {
            i[l] = u;
          }
        }
      }
    }
  }
  return i;
}
function Rx(t, e) {
  return Eu(Ex, t, e || {});
}
function Tx(t, e) {
  return Eu(xx, t, e || {});
}
class Cx {
  constructor(e) {
    this.client = e;
    this.enroll = this._enroll.bind(this);
    this.challenge = this._challenge.bind(this);
    this.verify = this._verify.bind(this);
    this.authenticate = this._authenticate.bind(this);
    this.register = this._register.bind(this);
  }
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
      factorType: "webauthn"
    }));
  }
  async _challenge({
    factorId: e,
    webauthn: n,
    friendlyName: i,
    signal: a
  }, l) {
    try {
      const {
        data: d,
        error: f
      } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: n
      });
      if (!d) {
        return {
          data: null,
          error: f
        };
      }
      const m = a ?? gh.createNewAbortSignal();
      if (d.webauthn.type === "create") {
        const {
          user: y
        } = d.webauthn.credential_options.publicKey;
        if (!y.name) {
          const g = i;
          if (g) {
            y.name = `${y.id}:${g}`;
          } else {
            const w = (await this.client.getUser()).data.user;
            const _ = (w == null ? undefined : w.user_metadata)?.name || (w == null ? undefined : w.email) || (w == null ? undefined : w.id) || "User";
            y.name = `${y.id}:${_}`;
          }
        }
        y.displayName ||= y.name;
      }
      switch (d.webauthn.type) {
        case "create":
          {
            const y = Rx(d.webauthn.credential_options.publicKey, l == null ? undefined : l.create);
            const {
              data: g,
              error: b
            } = await Av({
              publicKey: y,
              signal: m
            });
            if (g) {
              return {
                data: {
                  factorId: e,
                  challengeId: d.id,
                  webauthn: {
                    type: d.webauthn.type,
                    credential_response: g
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: b
              };
            }
          }
        case "request":
          {
            const y = Tx(d.webauthn.credential_options.publicKey, l == null ? undefined : l.request);
            const {
              data: g,
              error: b
            } = await Iv(Object.assign(Object.assign({}, d.webauthn.credential_options), {
              publicKey: y,
              signal: m
            }));
            if (g) {
              return {
                data: {
                  factorId: e,
                  challengeId: d.id,
                  webauthn: {
                    type: d.webauthn.type,
                    credential_response: g
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: b
              };
            }
          }
      }
    } catch (d) {
      if (oe(d)) {
        return {
          data: null,
          error: d
        };
      } else {
        return {
          data: null,
          error: new on("Unexpected error in challenge", d)
        };
      }
    }
  }
  async _verify({
    challengeId: e,
    factorId: n,
    webauthn: i
  }) {
    return this.client.mfa.verify({
      factorId: n,
      challengeId: e,
      webauthn: i
    });
  }
  async _authenticate({
    factorId: e,
    webauthn: {
      rpId: n = typeof window !== "undefined" ? window.location.hostname : undefined,
      rpOrigins: i = typeof window !== "undefined" ? [window.location.origin] : undefined,
      signal: a
    } = {}
  }, l) {
    if (!n) {
      return {
        data: null,
        error: new Aa("rpId is required for WebAuthn authentication")
      };
    }
    try {
      if (!ku()) {
        return {
          data: null,
          error: new on("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: u,
        error: d
      } = await this.challenge({
        factorId: e,
        webauthn: {
          rpId: n,
          rpOrigins: i
        },
        signal: a
      }, {
        request: l
      });
      if (!u) {
        return {
          data: null,
          error: d
        };
      }
      const {
        webauthn: f
      } = u;
      return this._verify({
        factorId: e,
        challengeId: u.challengeId,
        webauthn: {
          type: f.type,
          rpId: n,
          rpOrigins: i,
          credential_response: f.credential_response
        }
      });
    } catch (u) {
      if (oe(u)) {
        return {
          data: null,
          error: u
        };
      } else {
        return {
          data: null,
          error: new on("Unexpected error in authenticate", u)
        };
      }
    }
  }
  async _register({
    friendlyName: e,
    webauthn: {
      rpId: n = typeof window !== "undefined" ? window.location.hostname : undefined,
      rpOrigins: i = typeof window !== "undefined" ? [window.location.origin] : undefined,
      signal: a
    } = {}
  }, l) {
    if (!n) {
      return {
        data: null,
        error: new Aa("rpId is required for WebAuthn registration")
      };
    }
    try {
      if (!ku()) {
        return {
          data: null,
          error: new on("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: u,
        error: d
      } = await this._enroll({
        friendlyName: e
      });
      if (!u) {
        await this.client.mfa.listFactors().then(y => {
          var g;
          if ((g = y.data) === null || g === undefined) {
            return undefined;
          } else {
            return g.all.find(b => b.factor_type === "webauthn" && b.friendly_name === e && b.status !== "unverified");
          }
        }).then(y => y ? this.client.mfa.unenroll({
          factorId: y == null ? undefined : y.id
        }) : undefined);
        return {
          data: null,
          error: d
        };
      }
      const {
        data: f,
        error: m
      } = await this._challenge({
        factorId: u.id,
        friendlyName: u.friendly_name,
        webauthn: {
          rpId: n,
          rpOrigins: i
        },
        signal: a
      }, {
        create: l
      });
      if (f) {
        return this._verify({
          factorId: u.id,
          challengeId: f.challengeId,
          webauthn: {
            rpId: n,
            rpOrigins: i,
            type: f.webauthn.type,
            credential_response: f.webauthn.credential_response
          }
        });
      } else {
        return {
          data: null,
          error: m
        };
      }
    } catch (u) {
      if (oe(u)) {
        return {
          data: null,
          error: u
        };
      } else {
        return {
          data: null,
          error: new on("Unexpected error in register", u)
        };
      }
    }
  }
}
yx();
const Px = {
  url: jE,
  storageKey: NE,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: LE,
  flowType: "implicit",
  debug: false,
  hasCustomAuthorizationHeader: false,
  throwOnError: false,
  lockAcquireTimeout: 5000,
  skipAutoInitialize: false,
  experimental: {}
};
async function $g(t, e, n) {
  return await n();
}
const Xi = {};
class Ia {
  get jwks() {
    return Xi[this.storageKey]?.jwks ?? {
      keys: []
    };
  }
  set jwks(e) {
    Xi[this.storageKey] = Object.assign(Object.assign({}, Xi[this.storageKey]), {
      jwks: e
    });
  }
  get jwks_cached_at() {
    return Xi[this.storageKey]?.cachedAt ?? Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Xi[this.storageKey] = Object.assign(Object.assign({}, Xi[this.storageKey]), {
      cachedAt: e
    });
  }
  constructor(e) {
    var a;
    var l;
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = new Map();
    this.autoRefreshTicker = null;
    this.autoRefreshTickTimeout = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.initializePromise = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    const u = Object.assign(Object.assign({}, Px), e);
    this.storageKey = u.storageKey;
    this.instanceID = Ia.nextInstanceID[this.storageKey] ?? 0;
    Ia.nextInstanceID[this.storageKey] = this.instanceID + 1;
    this.logDebugMessages = !!u.debug;
    if (typeof u.debug == "function") {
      this.logger = u.debug;
    }
    if (this.instanceID > 0 && zt()) {
      const d = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(d);
      if (this.logDebugMessages) {
        console.trace(d);
      }
    }
    this.persistSession = u.persistSession;
    this.autoRefreshToken = u.autoRefreshToken;
    this.experimental = u.experimental ?? {};
    this.admin = new mx({
      url: u.url,
      headers: u.headers,
      fetch: u.fetch,
      experimental: this.experimental
    });
    this.url = u.url;
    this.headers = u.headers;
    this.fetch = Tv(u.fetch);
    this.lock = u.lock || $g;
    this.detectSessionInUrl = u.detectSessionInUrl;
    this.flowType = u.flowType;
    this.hasCustomAuthorizationHeader = u.hasCustomAuthorizationHeader;
    this.throwOnError = u.throwOnError;
    this.lockAcquireTimeout = u.lockAcquireTimeout;
    if (u.lock) {
      this.lock = u.lock;
    } else if (this.persistSession && zt() && (a = globalThis == null ? undefined : globalThis.navigator) !== null && a !== undefined && a.locks) {
      this.lock = gx;
    } else {
      this.lock = $g;
    }
    if (!this.jwks) {
      this.jwks = {
        keys: []
      };
      this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Cx(this)
    };
    this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    };
    this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    };
    if (this.persistSession) {
      if (u.storage) {
        this.storage = u.storage;
      } else if (Rv()) {
        this.storage = globalThis.localStorage;
      } else {
        this.memoryStorage = {};
        this.storage = jg(this.memoryStorage);
      }
      if (u.userStorage) {
        this.userStorage = u.userStorage;
      }
    } else {
      this.memoryStorage = {};
      this.storage = jg(this.memoryStorage);
    }
    if (zt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (d) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", d);
      }
      if ((l = this.broadcastChannel) !== null && l !== undefined) {
        l.addEventListener("message", async d => {
          this._debug("received broadcast notification from other tab or client", d);
          try {
            await this._notifyAllSubscribers(d.data.event, d.data.session, false);
          } catch (f) {
            this._debug("#broadcastChannel", "error", f);
          }
        });
      }
    }
    if (!u.skipAutoInitialize) {
      this.initialize().catch(d => {
        this._debug("#initialize()", "error", d);
      });
    }
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) {
      throw e.error;
    }
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${kv}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    if (this.logDebugMessages) {
      this.logger(this._logPrefix(), ...e);
    }
    return this;
  }
  async initialize() {
    if (this.initializePromise) {
      return await this.initializePromise;
    } else {
      this.initializePromise = (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))();
      return await this.initializePromise;
    }
  }
  async _initialize() {
    try {
      let n = {};
      let i = "none";
      if (zt()) {
        n = JE(window.location.href);
        if (this._isImplicitGrantCallback(n)) {
          i = "implicit";
        } else if (await this._isPKCECallback(n)) {
          i = "pkce";
        }
      }
      if (zt() && this.detectSessionInUrl && i !== "none") {
        const {
          data: a,
          error: l
        } = await this._getSessionFromURL(n, i);
        if (l) {
          this._debug("#_initialize()", "error detecting session from URL", l);
          if (FE(l)) {
            const f = l.details?.code;
            if (f === "identity_already_exists" || f === "identity_not_found" || f === "single_identity_not_deletable") {
              return {
                error: l
              };
            }
          }
          return {
            error: l
          };
        }
        const {
          session: u,
          redirectType: d
        } = a;
        this._debug("#_initialize()", "detected session in URL", u, "redirect type", d);
        await this._saveSession(u);
        setTimeout(async () => {
          if (d === "recovery") {
            await this._notifyAllSubscribers("PASSWORD_RECOVERY", u);
          } else {
            await this._notifyAllSubscribers("SIGNED_IN", u);
          }
        }, 0);
        return {
          error: null
        };
      }
      await this._recoverAndRefresh();
      return {
        error: null
      };
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          error: n
        });
      } else {
        return this._returnResult({
          error: new on("Unexpected error during initialization", n)
        });
      }
    } finally {
      await this._handleVisibilityChange();
      this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(e) {
    try {
      const l = await ge(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (e == null ? undefined : e.options)?.data ?? {},
          gotrue_meta_security: {
            captcha_token: (e == null ? undefined : e.options)?.captchaToken
          }
        },
        xform: Br
      });
      const {
        data: u,
        error: d
      } = l;
      if (d || !u) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: d
        });
      }
      const f = u.session;
      const m = u.user;
      if (u.session) {
        await this._saveSession(u.session);
        await this._notifyAllSubscribers("SIGNED_IN", f);
      }
      return this._returnResult({
        data: {
          user: m,
          session: f
        },
        error: null
      });
    } catch (l) {
      if (oe(l)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  async signUp(e) {
    try {
      let l;
      if ("email" in e) {
        const {
          email: y,
          password: g,
          options: b
        } = e;
        let w = null;
        let _ = null;
        if (this.flowType === "pkce") {
          [w, _] = await Yi(this.storage, this.storageKey);
        }
        l = await ge(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: b == null ? undefined : b.emailRedirectTo,
          body: {
            email: y,
            password: g,
            data: (b == null ? undefined : b.data) ?? {},
            gotrue_meta_security: {
              captcha_token: b == null ? undefined : b.captchaToken
            },
            code_challenge: w,
            code_challenge_method: _
          },
          xform: Br
        });
      } else if ("phone" in e) {
        const {
          phone: y,
          password: g,
          options: b
        } = e;
        l = await ge(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: y,
            password: g,
            data: (b == null ? undefined : b.data) ?? {},
            channel: (b == null ? undefined : b.channel) ?? "sms",
            gotrue_meta_security: {
              captcha_token: b == null ? undefined : b.captchaToken
            }
          },
          xform: Br
        });
      } else {
        throw new su("You must provide either an email or phone number and a password");
      }
      const {
        data: u,
        error: d
      } = l;
      if (d || !u) {
        await Ft(this.storage, `${this.storageKey}-code-verifier`);
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: d
        });
      }
      const f = u.session;
      const m = u.user;
      if (u.session) {
        await this._saveSession(u.session);
        await this._notifyAllSubscribers("SIGNED_IN", f);
      }
      return this._returnResult({
        data: {
          user: m,
          session: f
        },
        error: null
      });
    } catch (l) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(l)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  async signInWithPassword(e) {
    try {
      let n;
      if ("email" in e) {
        const {
          email: l,
          password: u,
          options: d
        } = e;
        n = await ge(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: l,
            password: u,
            gotrue_meta_security: {
              captcha_token: d == null ? undefined : d.captchaToken
            }
          },
          xform: Ag
        });
      } else if ("phone" in e) {
        const {
          phone: l,
          password: u,
          options: d
        } = e;
        n = await ge(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: l,
            password: u,
            gotrue_meta_security: {
              captcha_token: d == null ? undefined : d.captchaToken
            }
          },
          xform: Ag
        });
      } else {
        throw new su("You must provide either an email or phone number and a password");
      }
      const {
        data: i,
        error: a
      } = n;
      if (a) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      }
      if (!i || !i.session || !i.user) {
        const l = new Qi();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      if (i.session) {
        await this._saveSession(i.session);
        await this._notifyAllSubscribers("SIGNED_IN", i.session);
      }
      return this._returnResult({
        data: Object.assign({
          user: i.user,
          session: i.session
        }, i.weak_password ? {
          weakPassword: i.weak_password
        } : null),
        error: a
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async signInWithOAuth(e) {
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: e.options?.redirectTo,
      scopes: e.options?.scopes,
      queryParams: e.options?.queryParams,
      skipBrowserRedirect: e.options?.skipBrowserRedirect
    });
  }
  async exchangeCodeForSession(e) {
    await this.initializePromise;
    return this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e));
  }
  async signInWithWeb3(e) {
    const {
      chain: n
    } = e;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(e) {
    var g;
    let w;
    let _;
    if ("message" in e) {
      w = e.message;
      _ = e.signature;
    } else {
      const {
        chain: k,
        wallet: x,
        statement: I,
        options: N
      } = e;
      let L;
      if (zt()) {
        if (typeof x == "object") {
          L = x;
        } else {
          const Z = window;
          if ("ethereum" in Z && typeof Z.ethereum == "object" && "request" in Z.ethereum && typeof Z.ethereum.request == "function") {
            L = Z.ethereum;
          } else {
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
          }
        }
      } else {
        if (typeof x != "object" || N == null || !N.url) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        L = x;
      }
      const B = new URL((N == null ? undefined : N.url) ?? window.location.href);
      const J = await L.request({
        method: "eth_requestAccounts"
      }).then(Z => Z).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!J || J.length === 0) {
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      }
      const Q = Pv(J[0]);
      let j = (N == null ? undefined : N.signInWithEthereum)?.chainId;
      if (!j) {
        const Z = await L.request({
          method: "eth_chainId"
        });
        j = vx(Z);
      }
      const H = {
        domain: B.host,
        address: Q,
        statement: I,
        uri: B.href,
        version: "1",
        chainId: j,
        nonce: (N == null ? undefined : N.signInWithEthereum)?.nonce,
        issuedAt: (N == null ? undefined : N.signInWithEthereum)?.issuedAt ?? new Date(),
        expirationTime: (N == null ? undefined : N.signInWithEthereum)?.expirationTime,
        notBefore: (N == null ? undefined : N.signInWithEthereum)?.notBefore,
        requestId: (N == null ? undefined : N.signInWithEthereum)?.requestId,
        resources: (N == null ? undefined : N.signInWithEthereum)?.resources
      };
      w = bx(H);
      _ = await L.request({
        method: "personal_sign",
        params: [wx(w), Q]
      });
    }
    try {
      const {
        data: k,
        error: x
      } = await ge(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: w,
          signature: _
        }, (g = e.options) !== null && g !== undefined && g.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: Br
      });
      if (x) {
        throw x;
      }
      if (!k || !k.session || !k.user) {
        const I = new Qi();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: I
        });
      }
      if (k.session) {
        await this._saveSession(k.session);
        await this._notifyAllSubscribers("SIGNED_IN", k.session);
      }
      return this._returnResult({
        data: Object.assign({}, k),
        error: x
      });
    } catch (k) {
      if (oe(k)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: k
        });
      }
      throw k;
    }
  }
  async signInWithSolana(e) {
    var l;
    var u;
    var d;
    var f;
    var m;
    var g;
    var b;
    let _;
    let k;
    if ("message" in e) {
      _ = e.message;
      k = e.signature;
    } else {
      const {
        chain: x,
        wallet: I,
        statement: N,
        options: L
      } = e;
      let B;
      if (zt()) {
        if (typeof I == "object") {
          B = I;
        } else {
          const Q = window;
          if ("solana" in Q && typeof Q.solana == "object" && ("signIn" in Q.solana && typeof Q.solana.signIn == "function" || "signMessage" in Q.solana && typeof Q.solana.signMessage == "function")) {
            B = Q.solana;
          } else {
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
          }
        }
      } else {
        if (typeof I != "object" || L == null || !L.url) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        B = I;
      }
      const J = new URL((L == null ? undefined : L.url) ?? window.location.href);
      if ("signIn" in B && B.signIn) {
        const Q = await B.signIn(Object.assign(Object.assign(Object.assign({
          issuedAt: new Date().toISOString()
        }, L == null ? undefined : L.signInWithSolana), {
          version: "1",
          domain: J.host,
          uri: J.href
        }), N ? {
          statement: N
        } : null));
        let j;
        if (Array.isArray(Q) && Q[0] && typeof Q[0] == "object") {
          j = Q[0];
        } else if (Q && typeof Q == "object" && "signedMessage" in Q && "signature" in Q) {
          j = Q;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        }
        if ("signedMessage" in j && "signature" in j && (typeof j.signedMessage == "string" || j.signedMessage instanceof Uint8Array) && j.signature instanceof Uint8Array) {
          _ = typeof j.signedMessage == "string" ? j.signedMessage : new TextDecoder().decode(j.signedMessage);
          k = j.signature;
        } else {
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
        }
      } else {
        if (!("signMessage" in B) || typeof B.signMessage != "function" || !("publicKey" in B) || typeof B != "object" || !B.publicKey || !("toBase58" in B.publicKey) || typeof B.publicKey.toBase58 != "function") {
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        }
        _ = [`${J.host} wants you to sign in with your Solana account:`, B.publicKey.toBase58(), ...(N ? ["", N, ""] : [""]), "Version: 1", `URI: ${J.href}`, `Issued At: ${(L == null ? undefined : L.signInWithSolana)?.issuedAt ?? new Date().toISOString()}`, ...((l = L == null ? undefined : L.signInWithSolana) !== null && l !== undefined && l.notBefore ? [`Not Before: ${L.signInWithSolana.notBefore}`] : []), ...((u = L == null ? undefined : L.signInWithSolana) !== null && u !== undefined && u.expirationTime ? [`Expiration Time: ${L.signInWithSolana.expirationTime}`] : []), ...((d = L == null ? undefined : L.signInWithSolana) !== null && d !== undefined && d.chainId ? [`Chain ID: ${L.signInWithSolana.chainId}`] : []), ...((f = L == null ? undefined : L.signInWithSolana) !== null && f !== undefined && f.nonce ? [`Nonce: ${L.signInWithSolana.nonce}`] : []), ...((m = L == null ? undefined : L.signInWithSolana) !== null && m !== undefined && m.requestId ? [`Request ID: ${L.signInWithSolana.requestId}`] : []), ...((g = (L == null ? undefined : L.signInWithSolana)?.resources) !== null && g !== undefined && g.length ? ["Resources", ...L.signInWithSolana.resources.map(j => `- ${j}`)] : [])].join(`
`);
        const Q = await B.signMessage(new TextEncoder().encode(_), "utf8");
        if (!Q || !(Q instanceof Uint8Array)) {
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        }
        k = Q;
      }
    }
    try {
      const {
        data: x,
        error: I
      } = await ge(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "solana",
          message: _,
          signature: hi(k)
        }, (b = e.options) !== null && b !== undefined && b.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: Br
      });
      if (I) {
        throw I;
      }
      if (!x || !x.session || !x.user) {
        const N = new Qi();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: N
        });
      }
      if (x.session) {
        await this._saveSession(x.session);
        await this._notifyAllSubscribers("SIGNED_IN", x.session);
      }
      return this._returnResult({
        data: Object.assign({}, x),
        error: I
      });
    } catch (x) {
      if (oe(x)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: x
        });
      }
      throw x;
    }
  }
  async _exchangeCodeForSession(e) {
    const n = await oi(this.storage, `${this.storageKey}-code-verifier`);
    const [i, a] = (n ?? "").split("/");
    try {
      if (!i && this.flowType === "pkce") {
        throw new zE();
      }
      const {
        data: l,
        error: u
      } = await ge(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: i
        },
        xform: Br
      });
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (u) {
        throw u;
      }
      if (!l || !l.session || !l.user) {
        const d = new Qi();
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: d
        });
      }
      if (l.session) {
        await this._saveSession(l.session);
        await this._notifyAllSubscribers(a === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l.session);
      }
      return this._returnResult({
        data: Object.assign(Object.assign({}, l), {
          redirectType: a ?? null
        }),
        error: u
      });
    } catch (l) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(l)) {
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: l
        });
      }
      throw l;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
        options: n,
        provider: i,
        token: a,
        access_token: l,
        nonce: u
      } = e;
      const d = await ge(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: i,
          id_token: a,
          access_token: l,
          nonce: u,
          gotrue_meta_security: {
            captcha_token: n == null ? undefined : n.captchaToken
          }
        },
        xform: Br
      });
      const {
        data: f,
        error: m
      } = d;
      if (m) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: m
        });
      }
      if (!f || !f.session || !f.user) {
        const y = new Qi();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: y
        });
      }
      if (f.session) {
        await this._saveSession(f.session);
        await this._notifyAllSubscribers("SIGNED_IN", f.session);
      }
      return this._returnResult({
        data: f,
        error: m
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async signInWithOtp(e) {
    try {
      if ("email" in e) {
        const {
          email: d,
          options: f
        } = e;
        let m = null;
        let y = null;
        if (this.flowType === "pkce") {
          [m, y] = await Yi(this.storage, this.storageKey);
        }
        const {
          error: g
        } = await ge(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: d,
            data: (f == null ? undefined : f.data) ?? {},
            create_user: (f == null ? undefined : f.shouldCreateUser) ?? true,
            gotrue_meta_security: {
              captcha_token: f == null ? undefined : f.captchaToken
            },
            code_challenge: m,
            code_challenge_method: y
          },
          redirectTo: f == null ? undefined : f.emailRedirectTo
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: g
        });
      }
      if ("phone" in e) {
        const {
          phone: d,
          options: f
        } = e;
        const {
          data: m,
          error: y
        } = await ge(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: d,
            data: (f == null ? undefined : f.data) ?? {},
            create_user: (f == null ? undefined : f.shouldCreateUser) ?? true,
            gotrue_meta_security: {
              captcha_token: f == null ? undefined : f.captchaToken
            },
            channel: (f == null ? undefined : f.channel) ?? "sms"
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: m == null ? undefined : m.message_id
          },
          error: y
        });
      }
      throw new su("You must provide either an email or phone number.");
    } catch (d) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(d)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: d
        });
      }
      throw d;
    }
  }
  async verifyOtp(e) {
    try {
      let a;
      let l;
      if ("options" in e) {
        a = e.options?.redirectTo;
        l = e.options?.captchaToken;
      }
      const {
        data: u,
        error: d
      } = await ge(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), {
          gotrue_meta_security: {
            captcha_token: l
          }
        }),
        redirectTo: a,
        xform: Br
      });
      if (d) {
        throw d;
      }
      if (!u) {
        throw new Error("An error occurred on token verification.");
      }
      const f = u.session;
      const m = u.user;
      if (f != null && f.access_token) {
        await this._saveSession(f);
        await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", f);
      }
      return this._returnResult({
        data: {
          user: m,
          session: f
        },
        error: null
      });
    } catch (a) {
      if (oe(a)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      }
      throw a;
    }
  }
  async signInWithSSO(e) {
    var a;
    var l;
    var u;
    try {
      let d = null;
      let f = null;
      if (this.flowType === "pkce") {
        [d, f] = await Yi(this.storage, this.storageKey);
      }
      const m = await ge(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
          provider_id: e.providerId
        } : null), "domain" in e ? {
          domain: e.domain
        } : null), {
          redirect_to: e.options?.redirectTo ?? undefined
        }), (a = e == null ? undefined : e.options) !== null && a !== undefined && a.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options.captchaToken
          }
        } : null), {
          skip_http_redirect: true,
          code_challenge: d,
          code_challenge_method: f
        }),
        headers: this.headers,
        xform: hx
      });
      if ((l = m.data) !== null && l !== undefined && l.url && zt() && ((u = e.options) === null || u === undefined || !u.skipBrowserRedirect)) {
        window.location.assign(m.data.url);
      }
      return this._returnResult(m);
    } catch (d) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(d)) {
        return this._returnResult({
          data: null,
          error: d
        });
      }
      throw d;
    }
  }
  async reauthenticate() {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: n
          },
          error: i
        } = e;
        if (i) {
          throw i;
        }
        if (!n) {
          throw new Lt();
        }
        const {
          error: a
        } = await ge(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: n.access_token
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      });
    } catch (e) {
      if (oe(e)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      throw e;
    }
  }
  async resend(e) {
    try {
      const n = `${this.url}/resend`;
      if ("email" in e) {
        const {
          email: i,
          type: a,
          options: l
        } = e;
        const {
          error: u
        } = await ge(this.fetch, "POST", n, {
          headers: this.headers,
          body: {
            email: i,
            type: a,
            gotrue_meta_security: {
              captcha_token: l == null ? undefined : l.captchaToken
            }
          },
          redirectTo: l == null ? undefined : l.emailRedirectTo
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: u
        });
      } else if ("phone" in e) {
        const {
          phone: i,
          type: a,
          options: l
        } = e;
        const {
          data: u,
          error: d
        } = await ge(this.fetch, "POST", n, {
          headers: this.headers,
          body: {
            phone: i,
            type: a,
            gotrue_meta_security: {
              captcha_token: l == null ? undefined : l.captchaToken
            }
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? undefined : u.message_id
          },
          error: d
        });
      }
      throw new su("You must provide either an email or phone number and a type");
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async getSession() {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async n => n));
  }
  async _acquireLock(e, n) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const i = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        const a = (async () => {
          await i;
          return await n();
        })();
        this.pendingInLock.push((async () => {
          try {
            await a;
          } catch {}
        })());
        return a;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = true;
          const i = n();
          this.pendingInLock.push((async () => {
            try {
              await i;
            } catch {}
          })());
          await i;
          while (this.pendingInLock.length) {
            const a = [...this.pendingInLock];
            await Promise.all(a);
            this.pendingInLock.splice(0, a.length);
          }
          return await i;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await e(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin");
    if (!this.lockAcquired) {
      this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    }
    try {
      let e = null;
      const n = await oi(this.storage, this.storageKey);
      this._debug("#getSession()", "session from storage", n);
      if (n !== null) {
        if (this._isValidSession(n)) {
          e = n;
        } else {
          this._debug("#getSession()", "session from storage is not valid");
          await this._removeSession();
        }
      }
      if (!e) {
        return {
          data: {
            session: null
          },
          error: null
        };
      }
      const i = e.expires_at ? e.expires_at * 1000 - Date.now() < Cd : false;
      this._debug("#__loadSession()", `session has${i ? "" : " not"} expired`, "expires_at", e.expires_at);
      if (!i) {
        if (this.userStorage) {
          const u = await oi(this.userStorage, this.storageKey + "-user");
          if (u != null && u.user) {
            e.user = u.user;
          } else {
            e.user = Od();
          }
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const u = {
            value: this.suppressGetSessionWarning
          };
          e.user = lx(e.user, u);
          if (u.value) {
            this.suppressGetSessionWarning = true;
          }
        }
        return {
          data: {
            session: e
          },
          error: null
        };
      }
      const {
        data: a,
        error: l
      } = await this._callRefreshToken(e.refresh_token);
      if (l) {
        return this._returnResult({
          data: {
            session: null
          },
          error: l
        });
      } else {
        return this._returnResult({
          data: {
            session: a
          },
          error: null
        });
      }
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) {
      return await this._getUser(e);
    }
    await this.initializePromise;
    const n = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    if (n.data.user) {
      this.suppressGetSessionWarning = true;
    }
    return n;
  }
  async _getUser(e) {
    try {
      if (e) {
        return await ge(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: e,
          xform: Ts
        });
      } else {
        return await this._useSession(async n => {
          var i;
          const {
            data: u,
            error: d
          } = n;
          if (d) {
            throw d;
          }
          if (((i = u.session) === null || i === undefined || !i.access_token) && !this.hasCustomAuthorizationHeader) {
            return {
              data: {
                user: null
              },
              error: new Lt()
            };
          } else {
            return await ge(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: u.session?.access_token ?? undefined,
              xform: Ts
            });
          }
        });
      }
    } catch (n) {
      if (oe(n)) {
        if (nu(n)) {
          await this._removeSession();
          await Ft(this.storage, `${this.storageKey}-code-verifier`);
        }
        return this._returnResult({
          data: {
            user: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async updateUser(e, n = {}) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, n));
  }
  async _updateUser(e, n = {}) {
    try {
      return await this._useSession(async i => {
        const {
          data: a,
          error: l
        } = i;
        if (l) {
          throw l;
        }
        if (!a.session) {
          throw new Lt();
        }
        const u = a.session;
        let d = null;
        let f = null;
        if (this.flowType === "pkce" && e.email != null) {
          [d, f] = await Yi(this.storage, this.storageKey);
        }
        const {
          data: m,
          error: y
        } = await ge(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: n == null ? undefined : n.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), {
            code_challenge: d,
            code_challenge_method: f
          }),
          jwt: u.access_token,
          xform: Ts
        });
        if (y) {
          throw y;
        }
        u.user = m.user;
        await this._saveSession(u);
        await this._notifyAllSubscribers("USER_UPDATED", u);
        return this._returnResult({
          data: {
            user: u.user
          },
          error: null
        });
      });
    } catch (i) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(i)) {
        return this._returnResult({
          data: {
            user: null
          },
          error: i
        });
      }
      throw i;
    }
  }
  async setSession(e) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) {
        throw new Lt();
      }
      const n = Date.now() / 1000;
      let i = n;
      let a = true;
      let l = null;
      const {
        payload: u
      } = ou(e.access_token);
      if (u.exp) {
        i = u.exp;
        a = i <= n;
      }
      if (a) {
        const {
          data: d,
          error: f
        } = await this._callRefreshToken(e.refresh_token);
        if (f) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: f
          });
        }
        if (!d) {
          return {
            data: {
              user: null,
              session: null
            },
            error: null
          };
        }
        l = d;
      } else {
        const {
          data: d,
          error: f
        } = await this._getUser(e.access_token);
        if (f) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: f
          });
        }
        l = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: d.user,
          token_type: "bearer",
          expires_in: i - n,
          expires_at: i
        };
        await this._saveSession(l);
        await this._notifyAllSubscribers("SIGNED_IN", l);
      }
      return this._returnResult({
        data: {
          user: l.user,
          session: l
        },
        error: null
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async refreshSession(e) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async n => {
        if (!e) {
          const {
            data: u,
            error: d
          } = n;
          if (d) {
            throw d;
          }
          e = u.session ?? undefined;
        }
        if (e == null || !e.refresh_token) {
          throw new Lt();
        }
        const {
          data: a,
          error: l
        } = await this._callRefreshToken(e.refresh_token);
        if (l) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: l
          });
        } else if (a) {
          return this._returnResult({
            data: {
              user: a.user,
              session: a
            },
            error: null
          });
        } else {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: null
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async _getSessionFromURL(e, n) {
    try {
      if (!zt()) {
        throw new iu("No browser detected.");
      }
      if (e.error || e.error_description || e.error_code) {
        throw new iu(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      }
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce") {
            throw new Eg("Not a valid PKCE flow url.");
          }
          break;
        case "pkce":
          if (this.flowType === "implicit") {
            throw new iu("Not a valid implicit grant flow url.");
          }
          break;
        default:
      }
      if (n === "pkce") {
        this._debug("#_initialize()", "begin", "is PKCE flow", true);
        if (!e.code) {
          throw new Eg("No code detected.");
        }
        const {
          data: L,
          error: B
        } = await this._exchangeCodeForSession(e.code);
        if (B) {
          throw B;
        }
        const J = new URL(window.location.href);
        J.searchParams.delete("code");
        window.history.replaceState(window.history.state, "", J.toString());
        return {
          data: {
            session: L.session,
            redirectType: L.redirectType ?? null
          },
          error: null
        };
      }
      const {
        provider_token: a,
        provider_refresh_token: l,
        access_token: u,
        refresh_token: d,
        expires_in: f,
        expires_at: m,
        token_type: y
      } = e;
      if (!u || !f || !d || !y) {
        throw new iu("No session defined in URL");
      }
      const g = Math.round(Date.now() / 1000);
      const b = parseInt(f);
      let w = g + b;
      if (m) {
        w = parseInt(m);
      }
      const _ = w - g;
      if (_ * 1000 <= no) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${_}s, should have been closer to ${b}s`);
      }
      const k = w - b;
      if (g - k >= 120) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", k, w, g);
      } else if (g - k < 0) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", k, w, g);
      }
      const {
        data: x,
        error: I
      } = await this._getUser(u);
      if (I) {
        throw I;
      }
      const N = {
        provider_token: a,
        provider_refresh_token: l,
        access_token: u,
        expires_in: b,
        expires_at: w,
        refresh_token: d,
        token_type: y,
        user: x.user
      };
      window.location.hash = "";
      this._debug("#_getSessionFromURL()", "clearing window.location.hash");
      return this._returnResult({
        data: {
          session: N,
          redirectType: e.type
        },
        error: null
      });
    } catch (a) {
      if (oe(a)) {
        return this._returnResult({
          data: {
            session: null,
            redirectType: null
          },
          error: a
        });
      }
      throw a;
    }
  }
  _isImplicitGrantCallback(e) {
    if (typeof this.detectSessionInUrl == "function") {
      return this.detectSessionInUrl(new URL(window.location.href), e);
    } else {
      return !!e.access_token || !!e.error_description;
    }
  }
  async _isPKCECallback(e) {
    const n = await oi(this.storage, `${this.storageKey}-code-verifier`);
    return !!e.code && !!n;
  }
  async signOut(e = {
    scope: "global"
  }) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
  }
  async _signOut({
    scope: e
  } = {
    scope: "global"
  }) {
    return await this._useSession(async n => {
      const {
        data: a,
        error: l
      } = n;
      if (l && !nu(l)) {
        return this._returnResult({
          error: l
        });
      }
      const u = a.session?.access_token;
      if (u) {
        const {
          error: d
        } = await this.admin.signOut(u, e);
        if (d && (!$E(d) || d.status !== 404 && d.status !== 401 && d.status !== 403) && !nu(d)) {
          return this._returnResult({
            error: d
          });
        }
      }
      if (e !== "others") {
        await this._removeSession();
        await Ft(this.storage, `${this.storageKey}-code-verifier`);
      }
      return this._returnResult({
        error: null
      });
    });
  }
  onAuthStateChange(e) {
    const n = GE();
    const i = {
      id: n,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", n);
        this.stateChangeEmitters.delete(n);
      }
    };
    this._debug("#onAuthStateChange()", "registered callback with id", n);
    this.stateChangeEmitters.set(n, i);
    (async () => {
      await this.initializePromise;
      return await this._acquireLock(this.lockAcquireTimeout, async () => {
        this._emitInitialSession(n);
      });
    })();
    return {
      data: {
        subscription: i
      }
    };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async n => {
      var i;
      var a;
      try {
        const {
          data: {
            session: l
          },
          error: u
        } = n;
        if (u) {
          throw u;
        }
        await ((i = this.stateChangeEmitters.get(e)) === null || i === undefined ? undefined : i.callback("INITIAL_SESSION", l));
        this._debug("INITIAL_SESSION", "callback id", e, "session", l);
      } catch (l) {
        await ((a = this.stateChangeEmitters.get(e)) === null || a === undefined ? undefined : a.callback("INITIAL_SESSION", null));
        this._debug("INITIAL_SESSION", "callback id", e, "error", l);
        if (nu(l)) {
          console.warn(l);
        } else {
          console.error(l);
        }
      }
    });
  }
  async resetPasswordForEmail(e, n = {}) {
    let i = null;
    let a = null;
    if (this.flowType === "pkce") {
      [i, a] = await Yi(this.storage, this.storageKey, true);
    }
    try {
      return await ge(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: i,
          code_challenge_method: a,
          gotrue_meta_security: {
            captcha_token: n.captchaToken
          }
        },
        headers: this.headers,
        redirectTo: n.redirectTo
      });
    } catch (l) {
      await Ft(this.storage, `${this.storageKey}-code-verifier`);
      if (oe(l)) {
        return this._returnResult({
          data: null,
          error: l
        });
      }
      throw l;
    }
  }
  async getUserIdentities() {
    try {
      const {
        data: n,
        error: i
      } = await this.getUser();
      if (i) {
        throw i;
      }
      return this._returnResult({
        data: {
          identities: n.user.identities ?? []
        },
        error: null
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async linkIdentity(e) {
    if ("token" in e) {
      return this.linkIdentityIdToken(e);
    } else {
      return this.linkIdentityOAuth(e);
    }
  }
  async linkIdentityOAuth(e) {
    var n;
    try {
      const {
        data: i,
        error: a
      } = await this._useSession(async l => {
        const {
          data: g,
          error: b
        } = l;
        if (b) {
          throw b;
        }
        const w = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: e.options?.redirectTo,
          scopes: e.options?.scopes,
          queryParams: e.options?.queryParams,
          skipBrowserRedirect: true
        });
        return await ge(this.fetch, "GET", w, {
          headers: this.headers,
          jwt: g.session?.access_token ?? undefined
        });
      });
      if (a) {
        throw a;
      }
      if (zt() && ((n = e.options) === null || n === undefined || !n.skipBrowserRedirect)) {
        window.location.assign(i == null ? undefined : i.url);
      }
      return this._returnResult({
        data: {
          provider: e.provider,
          url: i == null ? undefined : i.url
        },
        error: null
      });
    } catch (i) {
      if (oe(i)) {
        return this._returnResult({
          data: {
            provider: e.provider,
            url: null
          },
          error: i
        });
      }
      throw i;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async n => {
      try {
        const {
          error: a,
          data: {
            session: l
          }
        } = n;
        if (a) {
          throw a;
        }
        const {
          options: u,
          provider: d,
          token: f,
          access_token: m,
          nonce: y
        } = e;
        const g = await ge(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (l == null ? undefined : l.access_token) ?? undefined,
          body: {
            provider: d,
            id_token: f,
            access_token: m,
            nonce: y,
            link_identity: true,
            gotrue_meta_security: {
              captcha_token: u == null ? undefined : u.captchaToken
            }
          },
          xform: Br
        });
        const {
          data: b,
          error: w
        } = g;
        if (w) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: w
          });
        } else if (!b || !b.session || !b.user) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: new Qi()
          });
        } else {
          if (b.session) {
            await this._saveSession(b.session);
            await this._notifyAllSubscribers("USER_UPDATED", b.session);
          }
          return this._returnResult({
            data: b,
            error: w
          });
        }
      } catch (a) {
        await Ft(this.storage, `${this.storageKey}-code-verifier`);
        if (oe(a)) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: a
          });
        }
        throw a;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async n => {
        const {
          data: l,
          error: u
        } = n;
        if (u) {
          throw u;
        }
        return await ge(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: l.session?.access_token ?? undefined
        });
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _refreshAccessToken(e) {
    const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const i = Date.now();
      return await XE(async a => {
        if (a > 0) {
          await YE(Math.pow(2, a - 1) * 200);
        }
        this._debug(n, "refreshing attempt", a);
        return await ge(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
          body: {
            refresh_token: e
          },
          headers: this.headers,
          xform: Br
        });
      }, (a, l) => {
        const u = Math.pow(2, a) * 200;
        return l && Pd(l) && Date.now() + u - i < no;
      });
    } catch (i) {
      this._debug(n, "error", i);
      if (oe(i)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: i
        });
      }
      throw i;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, n) {
    const i = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams
    });
    this._debug("#_handleProviderSignIn()", "provider", e, "options", n, "url", i);
    if (zt() && !n.skipBrowserRedirect) {
      window.location.assign(i);
    }
    return {
      data: {
        provider: e,
        url: i
      },
      error: null
    };
  }
  async _recoverAndRefresh() {
    const i = "#_recoverAndRefresh()";
    this._debug(i, "begin");
    try {
      const a = await oi(this.storage, this.storageKey);
      if (a && this.userStorage) {
        let u = await oi(this.userStorage, this.storageKey + "-user");
        if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !u) {
          u = {
            user: a.user
          };
          await so(this.userStorage, this.storageKey + "-user", u);
        }
        a.user = (u == null ? undefined : u.user) ?? Od();
      } else if (a && !a.user && !a.user) {
        const u = await oi(this.storage, this.storageKey + "-user");
        if (u && u != null && u.user) {
          a.user = u.user;
          await Ft(this.storage, this.storageKey + "-user");
          await so(this.storage, this.storageKey, a);
        } else {
          a.user = Od();
        }
      }
      this._debug(i, "session from storage", a);
      if (!this._isValidSession(a)) {
        this._debug(i, "session is not valid");
        if (a !== null) {
          await this._removeSession();
        }
        return;
      }
      const l = (a.expires_at ?? Infinity) * 1000 - Date.now() < Cd;
      this._debug(i, `session has${l ? "" : " not"} expired with margin of ${Cd}s`);
      if (l) {
        if (this.autoRefreshToken && a.refresh_token) {
          const {
            error: u
          } = await this._callRefreshToken(a.refresh_token);
          if (u) {
            console.error(u);
            if (!Pd(u)) {
              this._debug(i, "refresh failed with a non-retryable error, removing the session", u);
              await this._removeSession();
            }
          }
        }
      } else if (a.user && a.user.__isUserNotAvailableProxy === true) {
        try {
          const {
            data: u,
            error: d
          } = await this._getUser(a.access_token);
          if (!d && u != null && u.user) {
            a.user = u.user;
            await this._saveSession(a);
            await this._notifyAllSubscribers("SIGNED_IN", a);
          } else {
            this._debug(i, "could not get user data, skipping SIGNED_IN notification");
          }
        } catch (u) {
          console.error("Error getting user data:", u);
          this._debug(i, "error getting user data, skipping SIGNED_IN notification", u);
        }
      } else {
        await this._notifyAllSubscribers("SIGNED_IN", a);
      }
    } catch (a) {
      this._debug(i, "error", a);
      console.error(a);
      return;
    } finally {
      this._debug(i, "end");
    }
  }
  async _callRefreshToken(e) {
    var n;
    var i;
    if (!e) {
      throw new Lt();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    const a = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(a, "begin");
    try {
      this.refreshingDeferred = new Nu();
      const {
        data: l,
        error: u
      } = await this._refreshAccessToken(e);
      if (u) {
        throw u;
      }
      if (!l.session) {
        throw new Lt();
      }
      await this._saveSession(l.session);
      await this._notifyAllSubscribers("TOKEN_REFRESHED", l.session);
      const d = {
        data: l.session,
        error: null
      };
      this.refreshingDeferred.resolve(d);
      return d;
    } catch (l) {
      this._debug(a, "error", l);
      if (oe(l)) {
        const u = {
          data: null,
          error: l
        };
        if (!Pd(l)) {
          await this._removeSession();
        }
        if ((n = this.refreshingDeferred) !== null && n !== undefined) {
          n.resolve(u);
        }
        return u;
      }
      if ((i = this.refreshingDeferred) !== null && i !== undefined) {
        i.reject(l);
      }
      throw l;
    } finally {
      this.refreshingDeferred = null;
      this._debug(a, "end");
    }
  }
  async _notifyAllSubscribers(e, n, i = true) {
    const a = `#_notifyAllSubscribers(${e})`;
    this._debug(a, "begin", n, `broadcast = ${i}`);
    try {
      if (this.broadcastChannel && i) {
        this.broadcastChannel.postMessage({
          event: e,
          session: n
        });
      }
      const l = [];
      const u = Array.from(this.stateChangeEmitters.values()).map(async d => {
        try {
          await d.callback(e, n);
        } catch (f) {
          l.push(f);
        }
      });
      await Promise.all(u);
      if (l.length > 0) {
        for (let d = 0; d < l.length; d += 1) {
          console.error(l[d]);
        }
        throw l[0];
      }
    } finally {
      this._debug(a, "end");
    }
  }
  async _saveSession(e) {
    this._debug("#_saveSession()", e);
    this.suppressGetSessionWarning = true;
    await Ft(this.storage, `${this.storageKey}-code-verifier`);
    const n = Object.assign({}, e);
    const i = n.user && n.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!i && n.user) {
        await so(this.userStorage, this.storageKey + "-user", {
          user: n.user
        });
      }
      const a = Object.assign({}, n);
      delete a.user;
      const l = Pg(a);
      await so(this.storage, this.storageKey, l);
    } else {
      const a = Pg(n);
      await so(this.storage, this.storageKey, a);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()");
    this.suppressGetSessionWarning = false;
    await Ft(this.storage, this.storageKey);
    await Ft(this.storage, this.storageKey + "-code-verifier");
    await Ft(this.storage, this.storageKey + "-user");
    if (this.userStorage) {
      await Ft(this.userStorage, this.storageKey + "-user");
    }
    await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (e && zt() && window != null && window.removeEventListener) {
        window.removeEventListener("visibilitychange", e);
      }
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), no);
    this.autoRefreshTicker = e;
    if (e && typeof e == "object" && typeof e.unref == "function") {
      e.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(e);
    }
    const n = setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = n;
    if (n && typeof n == "object" && typeof n.unref == "function") {
      n.unref();
    } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(n);
    }
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (e) {
      clearInterval(e);
    }
    const n = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null;
    if (n) {
      clearTimeout(n);
    }
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async n => {
              const {
                data: {
                  session: i
                }
              } = n;
              if (!i || !i.refresh_token || !i.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const a = Math.floor((i.expires_at * 1000 - e) / no);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${a} ticks, a tick lasts ${no}ms, refresh threshold is ${hh} ticks`);
              if (a <= hh) {
                await this._callRefreshToken(i.refresh_token);
              }
            });
          } catch (n) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", n);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e instanceof Cv) {
        this._debug("auto refresh token tick lock not available");
      } else {
        throw e;
      }
    }
  }
  async _handleVisibilityChange() {
    this._debug("#_handleVisibilityChange()");
    if (!zt() || window == null || !window.addEventListener) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(false);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      };
      if (window != null) {
        window.addEventListener("visibilitychange", this.visibilityChangedCallback);
      }
      await this._onVisibilityChanged(true);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const n = `#_onVisibilityChanged(${e})`;
    this._debug(n, "visibilityState", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!e) {
        await this.initializePromise;
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          if (document.visibilityState !== "visible") {
            this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
            return;
          }
          await this._recoverAndRefresh();
        });
      }
    } else if (document.visibilityState === "hidden" && this.autoRefreshToken) {
      this._stopAutoRefresh();
    }
  }
  async _getUrlForProvider(e, n, i) {
    const a = [`provider=${encodeURIComponent(n)}`];
    if (i != null && i.redirectTo) {
      a.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`);
    }
    if (i != null && i.scopes) {
      a.push(`scopes=${encodeURIComponent(i.scopes)}`);
    }
    if (this.flowType === "pkce") {
      const [l, u] = await Yi(this.storage, this.storageKey);
      const d = new URLSearchParams({
        code_challenge: `${encodeURIComponent(l)}`,
        code_challenge_method: `${encodeURIComponent(u)}`
      });
      a.push(d.toString());
    }
    if (i != null && i.queryParams) {
      const l = new URLSearchParams(i.queryParams);
      a.push(l.toString());
    }
    if (i != null && i.skipBrowserRedirect) {
      a.push(`skip_http_redirect=${i.skipBrowserRedirect}`);
    }
    return `${e}?${a.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async n => {
        const {
          data: a,
          error: l
        } = n;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else {
          return await ge(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
            headers: this.headers,
            jwt: (a == null ? undefined : a.session)?.access_token
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async n => {
        var a;
        const {
          data: l,
          error: u
        } = n;
        if (u) {
          return this._returnResult({
            data: null,
            error: u
          });
        }
        const d = Object.assign({
          friendly_name: e.friendlyName,
          factor_type: e.factorType
        }, e.factorType === "phone" ? {
          phone: e.phone
        } : e.factorType === "totp" ? {
          issuer: e.issuer
        } : {});
        const {
          data: f,
          error: m
        } = await ge(this.fetch, "POST", `${this.url}/factors`, {
          body: d,
          headers: this.headers,
          jwt: (l == null ? undefined : l.session)?.access_token
        });
        if (m) {
          return this._returnResult({
            data: null,
            error: m
          });
        } else {
          if (e.factorType === "totp" && f.type === "totp" && (a = f == null ? undefined : f.totp) !== null && a !== undefined && a.qr_code) {
            f.totp.qr_code = `data:image/svg+xml;utf-8,${f.totp.qr_code}`;
          }
          return this._returnResult({
            data: f,
            error: null
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async n => {
          const {
            data: a,
            error: l
          } = n;
          if (l) {
            return this._returnResult({
              data: null,
              error: l
            });
          }
          const u = Object.assign({
            challenge_id: e.challengeId
          }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), {
              credential_response: e.webauthn.type === "create" ? Ug(e.webauthn.credential_response) : Mg(e.webauthn.credential_response)
            })
          } : {
            code: e.code
          });
          const {
            data: d,
            error: f
          } = await ge(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: u,
            headers: this.headers,
            jwt: (a == null ? undefined : a.session)?.access_token
          });
          if (f) {
            return this._returnResult({
              data: null,
              error: f
            });
          } else {
            await this._saveSession(Object.assign({
              expires_at: Math.round(Date.now() / 1000) + d.expires_in
            }, d));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d);
            return this._returnResult({
              data: d,
              error: f
            });
          }
        });
      } catch (n) {
        if (oe(n)) {
          return this._returnResult({
            data: null,
            error: n
          });
        }
        throw n;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async n => {
          const {
            data: a,
            error: l
          } = n;
          if (l) {
            return this._returnResult({
              data: null,
              error: l
            });
          }
          const u = await ge(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (a == null ? undefined : a.session)?.access_token
          });
          if (u.error) {
            return u;
          }
          const {
            data: d
          } = u;
          if (d.type !== "webauthn") {
            return {
              data: d,
              error: null
            };
          }
          switch (d.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, d), {
                  webauthn: Object.assign(Object.assign({}, d.webauthn), {
                    credential_options: Object.assign(Object.assign({}, d.webauthn.credential_options), {
                      publicKey: Lg(d.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, d), {
                  webauthn: Object.assign(Object.assign({}, d.webauthn), {
                    credential_options: Object.assign(Object.assign({}, d.webauthn.credential_options), {
                      publicKey: Dg(d.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
          }
        });
      } catch (n) {
        if (oe(n)) {
          return this._returnResult({
            data: null,
            error: n
          });
        }
        throw n;
      }
    });
  }
  async _challengeAndVerify(e) {
    const {
      data: n,
      error: i
    } = await this._challenge({
      factorId: e.factorId
    });
    if (i) {
      return this._returnResult({
        data: null,
        error: i
      });
    } else {
      return await this._verify({
        factorId: e.factorId,
        challengeId: n.id,
        code: e.code
      });
    }
  }
  async _listFactors() {
    const {
      data: {
        user: n
      },
      error: i
    } = await this.getUser();
    if (i) {
      return {
        data: null,
        error: i
      };
    }
    const a = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const l of (n == null ? undefined : n.factors) ?? []) {
      a.all.push(l);
      if (l.status === "verified") {
        a[l.factor_type].push(l);
      }
    }
    return {
      data: a,
      error: null
    };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var n;
    var a;
    if (e) {
      try {
        const {
          payload: w
        } = ou(e);
        let _ = null;
        if (w.aal) {
          _ = w.aal;
        }
        let k = _;
        const {
          data: {
            user: x
          },
          error: I
        } = await this.getUser(e);
        if (I) {
          return this._returnResult({
            data: null,
            error: I
          });
        }
        if ((((n = x == null ? undefined : x.factors) === null || n === undefined ? undefined : n.filter(B => B.status === "verified")) ?? []).length > 0) {
          k = "aal2";
        }
        const L = w.amr || [];
        return {
          data: {
            currentLevel: _,
            nextLevel: k,
            currentAuthenticationMethods: L
          },
          error: null
        };
      } catch (w) {
        if (oe(w)) {
          return this._returnResult({
            data: null,
            error: w
          });
        }
        throw w;
      }
    }
    const {
      data: {
        session: u
      },
      error: d
    } = await this.getSession();
    if (d) {
      return this._returnResult({
        data: null,
        error: d
      });
    }
    if (!u) {
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: []
        },
        error: null
      };
    }
    const {
      payload: f
    } = ou(u.access_token);
    let m = null;
    if (f.aal) {
      m = f.aal;
    }
    let y = m;
    if ((((a = u.user.factors) === null || a === undefined ? undefined : a.filter(w => w.status === "verified")) ?? []).length > 0) {
      y = "aal2";
    }
    const b = f.amr || [];
    return {
      data: {
        currentLevel: m,
        nextLevel: y,
        currentAuthenticationMethods: b
      },
      error: null
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async n => {
        const {
          data: {
            session: i
          },
          error: a
        } = n;
        if (a) {
          return this._returnResult({
            data: null,
            error: a
          });
        } else if (i) {
          return await ge(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
            headers: this.headers,
            jwt: i.access_token,
            xform: l => ({
              data: l,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _approveAuthorization(e, n) {
    try {
      return await this._useSession(async i => {
        const {
          data: {
            session: a
          },
          error: l
        } = i;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        if (!a) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const u = await ge(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: a.access_token,
          body: {
            action: "approve"
          },
          xform: d => ({
            data: d,
            error: null
          })
        });
        if (u.data && u.data.redirect_url && zt() && (n == null || !n.skipBrowserRedirect)) {
          window.location.assign(u.data.redirect_url);
        }
        return u;
      });
    } catch (i) {
      if (oe(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _denyAuthorization(e, n) {
    try {
      return await this._useSession(async i => {
        const {
          data: {
            session: a
          },
          error: l
        } = i;
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        }
        if (!a) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const u = await ge(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: a.access_token,
          body: {
            action: "deny"
          },
          xform: d => ({
            data: d,
            error: null
          })
        });
        if (u.data && u.data.redirect_url && zt() && (n == null || !n.skipBrowserRedirect)) {
          window.location.assign(u.data.redirect_url);
        }
        return u;
      });
    } catch (i) {
      if (oe(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: n
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        } else if (n) {
          return await ge(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: n.access_token,
            xform: a => ({
              data: a,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
      });
    } catch (e) {
      if (oe(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async n => {
        const {
          data: {
            session: i
          },
          error: a
        } = n;
        if (a) {
          return this._returnResult({
            data: null,
            error: a
          });
        } else if (i) {
          await ge(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: i.access_token,
            query: {
              client_id: e.clientId
            },
            noResolveJson: true
          });
          return {
            data: {},
            error: null
          };
        } else {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async fetchJwk(e, n = {
    keys: []
  }) {
    let i = n.keys.find(d => d.kid === e);
    if (i) {
      return i;
    }
    const a = Date.now();
    i = this.jwks.keys.find(d => d.kid === e);
    if (i && this.jwks_cached_at + UE > a) {
      return i;
    }
    const {
      data: l,
      error: u
    } = await ge(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (u) {
      throw u;
    }
    if (!l.keys || l.keys.length === 0 || (this.jwks = l, this.jwks_cached_at = a, i = l.keys.find(d => d.kid === e), !i)) {
      return null;
    } else {
      return i;
    }
  }
  async getClaims(e, n = {}) {
    try {
      let i = e;
      if (!i) {
        const {
          data: w,
          error: _
        } = await this.getSession();
        if (_ || !w.session) {
          return this._returnResult({
            data: null,
            error: _
          });
        }
        i = w.session.access_token;
      }
      const {
        header: a,
        payload: l,
        signature: u,
        raw: {
          header: d,
          payload: f
        }
      } = ou(i);
      if (n == null || !n.allowExpired) {
        ix(l.exp);
      }
      const m = !a.alg || a.alg.startsWith("HS") || !a.kid || !("crypto" in globalThis) || !("subtle" in globalThis.crypto) ? null : await this.fetchJwk(a.kid, n != null && n.keys ? {
        keys: n.keys
      } : n == null ? undefined : n.jwks);
      if (!m) {
        const {
          error: w
        } = await this.getUser(i);
        if (w) {
          throw w;
        }
        return {
          data: {
            claims: l,
            header: a,
            signature: u
          },
          error: null
        };
      }
      const y = ox(a.alg);
      const g = await crypto.subtle.importKey("jwk", m, y, true, ["verify"]);
      if (!(await crypto.subtle.verify(y, g, u, qE(`${d}.${f}`)))) {
        throw new mh("Invalid JWT signature");
      }
      return {
        data: {
          claims: l,
          header: a,
          signature: u
        },
        error: null
      };
    } catch (i) {
      if (oe(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async signInWithPasskey(e) {
    rn(this.experimental);
    try {
      if (!ku()) {
        return this._returnResult({
          data: null,
          error: new on("Browser does not support WebAuthn", null)
        });
      }
      const {
        data: l,
        error: u
      } = await this._startPasskeyAuthentication({
        options: {
          captchaToken: (e == null ? undefined : e.options)?.captchaToken
        }
      });
      if (u || !l) {
        return this._returnResult({
          data: null,
          error: u
        });
      }
      const d = Dg(l.options);
      const f = (e == null ? undefined : e.options)?.signal ?? gh.createNewAbortSignal();
      const {
        data: m,
        error: y
      } = await Iv({
        publicKey: d,
        signal: f
      });
      if (y || !m) {
        return this._returnResult({
          data: null,
          error: y ?? new on("WebAuthn ceremony failed", null)
        });
      }
      const g = Mg(m);
      return this._verifyPasskeyAuthentication({
        challengeId: l.challenge_id,
        credential: g
      });
    } catch (l) {
      if (oe(l)) {
        return this._returnResult({
          data: null,
          error: l
        });
      }
      throw l;
    }
  }
  async registerPasskey(e) {
    rn(this.experimental);
    try {
      if (!ku()) {
        return this._returnResult({
          data: null,
          error: new on("Browser does not support WebAuthn", null)
        });
      }
      const {
        data: a,
        error: l
      } = await this._startPasskeyRegistration();
      if (l || !a) {
        return this._returnResult({
          data: null,
          error: l
        });
      }
      const u = Lg(a.options);
      const d = (e == null ? undefined : e.options)?.signal ?? gh.createNewAbortSignal();
      const {
        data: f,
        error: m
      } = await Av({
        publicKey: u,
        signal: d
      });
      if (m || !f) {
        return this._returnResult({
          data: null,
          error: m ?? new on("WebAuthn ceremony failed", null)
        });
      }
      const y = Ug(f);
      return this._verifyPasskeyRegistration({
        challengeId: a.challenge_id,
        credential: y
      });
    } catch (a) {
      if (oe(a)) {
        return this._returnResult({
          data: null,
          error: a
        });
      }
      throw a;
    }
  }
  async _startPasskeyRegistration() {
    rn(this.experimental);
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: n
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        if (!n) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const {
          data: a,
          error: l
        } = await ge(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: n.access_token,
          body: {}
        });
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else {
          return this._returnResult({
            data: a,
            error: null
          });
        }
      });
    } catch (e) {
      if (oe(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _verifyPasskeyRegistration(e) {
    rn(this.experimental);
    try {
      return await this._useSession(async n => {
        const {
          data: {
            session: i
          },
          error: a
        } = n;
        if (a) {
          return this._returnResult({
            data: null,
            error: a
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const {
          data: l,
          error: u
        } = await ge(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: i.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        if (u) {
          return this._returnResult({
            data: null,
            error: u
          });
        } else {
          return this._returnResult({
            data: l,
            error: null
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _startPasskeyAuthentication(e) {
    rn(this.experimental);
    try {
      const {
        data: i,
        error: a
      } = await ge(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: {
            captcha_token: (e == null ? undefined : e.options)?.captchaToken
          }
        }
      });
      if (a) {
        return this._returnResult({
          data: null,
          error: a
        });
      } else {
        return this._returnResult({
          data: i,
          error: null
        });
      }
    } catch (i) {
      if (oe(i)) {
        return this._returnResult({
          data: null,
          error: i
        });
      }
      throw i;
    }
  }
  async _verifyPasskeyAuthentication(e) {
    rn(this.experimental);
    try {
      const {
        data: n,
        error: i
      } = await ge(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: Br
      });
      if (i) {
        return this._returnResult({
          data: null,
          error: i
        });
      } else {
        if (n.session) {
          await this._saveSession(n.session);
          await this._notifyAllSubscribers("SIGNED_IN", n.session);
        }
        return this._returnResult({
          data: n,
          error: null
        });
      }
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _listPasskeys() {
    rn(this.experimental);
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: n
          },
          error: i
        } = e;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        if (!n) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const {
          data: a,
          error: l
        } = await ge(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: u => ({
            data: u,
            error: null
          })
        });
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else {
          return this._returnResult({
            data: a,
            error: null
          });
        }
      });
    } catch (e) {
      if (oe(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _updatePasskey(e) {
    rn(this.experimental);
    try {
      return await this._useSession(async n => {
        const {
          data: {
            session: i
          },
          error: a
        } = n;
        if (a) {
          return this._returnResult({
            data: null,
            error: a
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const {
          data: l,
          error: u
        } = await ge(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: i.access_token,
          body: {
            friendly_name: e.friendlyName
          }
        });
        if (u) {
          return this._returnResult({
            data: null,
            error: u
          });
        } else {
          return this._returnResult({
            data: l,
            error: null
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async _deletePasskey(e) {
    rn(this.experimental);
    try {
      return await this._useSession(async n => {
        const {
          data: {
            session: i
          },
          error: a
        } = n;
        if (a) {
          return this._returnResult({
            data: null,
            error: a
          });
        }
        if (!i) {
          return this._returnResult({
            data: null,
            error: new Lt()
          });
        }
        const {
          error: l
        } = await ge(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: i.access_token,
          noResolveJson: true
        });
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else {
          return this._returnResult({
            data: null,
            error: null
          });
        }
      });
    } catch (n) {
      if (oe(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
}
Ia.nextInstanceID = {};
const Ox = Ia;
const Ax = "2.106.0";
let ga = "";
if (typeof Deno !== "undefined") {
  ga = "deno";
} else if (typeof document !== "undefined") {
  ga = "web";
} else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
  ga = "react-native";
} else {
  ga = "node";
}
const Ix = {
  "X-Client-Info": `supabase-js-${ga}/${Ax}`
};
const jx = {
  headers: Ix
};
const Nx = {
  schema: "public"
};
const Lx = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
const Dx = {};
const Ux = {
  enabled: false,
  respectSamplingDecision: true
};
function Mx(t, e, n, i) {
  function a(l) {
    if (l instanceof n) {
      return l;
    } else {
      return new n(function (u) {
        u(l);
      });
    }
  }
  return new (n ||= Promise)(function (l, u) {
    function d(y) {
      try {
        m(i.next(y));
      } catch (g) {
        u(g);
      }
    }
    function f(y) {
      try {
        m(i.throw(y));
      } catch (g) {
        u(g);
      }
    }
    function m(y) {
      if (y.done) {
        l(y.value);
      } else {
        a(y.value).then(d, f);
      }
    }
    m((i = i.apply(t, [])).next());
  });
}
let Id = null;
const $x = "@opentelemetry/api";
function Fx() {
  if (Id === null) {
    Id = import($x).catch(() => null);
  }
  return Id;
}
function zx() {
  return Mx(this, undefined, undefined, function* () {
    try {
      const t = yield Fx();
      if (!t || !t.propagation || !t.context) {
        return null;
      }
      const e = {};
      t.propagation.inject(t.context.active(), e);
      const n = e.traceparent;
      if (n) {
        return {
          traceparent: n,
          tracestate: e.tracestate,
          baggage: e.baggage
        };
      } else {
        return null;
      }
    } catch {
      return null;
    }
  });
}
function Bx(t) {
  if (!t || typeof t != "string") {
    return null;
  }
  const e = t.split("-");
  if (e.length !== 4) {
    return null;
  }
  const [n, i, a, l] = e;
  if (n.length !== 2 || i.length !== 32 || a.length !== 16 || l.length !== 2) {
    return null;
  }
  const u = /^[0-9a-f]+$/i;
  if (!u.test(n) || !u.test(i) || !u.test(a) || !u.test(l) || i === "00000000000000000000000000000000" || a === "0000000000000000") {
    return null;
  } else {
    return {
      version: n,
      traceId: i,
      parentId: a,
      traceFlags: l,
      isSampled: (parseInt(l, 16) & 1) === 1
    };
  }
}
function Hx(t, e) {
  if (!t || !e || e.length === 0) {
    return false;
  }
  let n;
  if (t instanceof URL) {
    n = t;
  } else {
    try {
      n = new URL(t);
    } catch {
      return false;
    }
  }
  for (const i of e) {
    try {
      if (typeof i == "string") {
        if (Wx(n.hostname, i)) {
          return true;
        }
      } else if (i instanceof RegExp) {
        if (i.test(n.hostname)) {
          return true;
        }
      } else if (typeof i == "function" && i(n)) {
        return true;
      }
    } catch {
      continue;
    }
  }
  return false;
}
function Wx(t, e) {
  if (e === t) {
    return true;
  }
  if (e.startsWith("*.")) {
    const n = e.slice(2);
    if (t.endsWith(n) && (t === n || t.endsWith("." + n))) {
      return true;
    }
  }
  return false;
}
function Vx(t) {
  const e = [];
  try {
    const n = new URL(t);
    e.push(n.hostname);
  } catch {}
  e.push("*.supabase.co", "*.supabase.in");
  e.push("localhost", "127.0.0.1", "[::1]");
  return e;
}
function ja(t) {
  "@babel/helpers - typeof";

  ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  return ja(t);
}
function qx(t, e) {
  if (ja(t) != "object" || !t) {
    return t;
  }
  var n = t[Symbol.toPrimitive];
  if (n !== undefined) {
    var i = n.call(t, e);
    if (ja(i) != "object") {
      return i;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Kx(t) {
  var e = qx(t, "string");
  if (ja(e) == "symbol") {
    return e;
  } else {
    return e + "";
  }
}
function Gx(t, e, n) {
  if ((e = Kx(e)) in t) {
    Object.defineProperty(t, e, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    t[e] = n;
  }
  return t;
}
function Fg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    if (e) {
      i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      });
    }
    n.push.apply(n, i);
  }
  return n;
}
function yt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] ?? {};
    if (e % 2) {
      Fg(Object(n), true).forEach(function (i) {
        Gx(t, i, n[i]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    } else {
      Fg(Object(n)).forEach(function (i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
  }
  return t;
}
const Jx = t => t ? (...e) => t(...e) : (...e) => fetch(...e);
const Qx = () => Headers;
const Yx = (t, e, n, i, a) => {
  const l = Jx(i);
  const u = Qx();
  const d = (a == null ? undefined : a.enabled) === true;
  const f = (a == null ? undefined : a.respectSamplingDecision) !== false;
  const m = d ? Vx(e) : null;
  return async (y, g) => {
    const w = (await n()) ?? t;
    let _ = new u(g == null ? undefined : g.headers);
    if (!_.has("apikey")) {
      _.set("apikey", t);
    }
    if (!_.has("Authorization")) {
      _.set("Authorization", `Bearer ${w}`);
    }
    if (m) {
      const k = await Xx(y, m, f);
      if (k) {
        if (k.traceparent && !_.has("traceparent")) {
          _.set("traceparent", k.traceparent);
        }
        if (k.tracestate && !_.has("tracestate")) {
          _.set("tracestate", k.tracestate);
        }
        if (k.baggage && !_.has("baggage")) {
          _.set("baggage", k.baggage);
        }
      }
    }
    return l(y, yt(yt({}, g), {}, {
      headers: _
    }));
  };
};
async function Xx(t, e, n) {
  if (!Hx(typeof t == "string" || t instanceof URL ? t : t.url, e)) {
    return null;
  }
  const i = await zx();
  if (!i || !i.traceparent) {
    return null;
  }
  if (n) {
    const a = Bx(i.traceparent);
    if (a && !a.isSampled) {
      return null;
    }
  }
  return i;
}
function zg(t) {
  if (typeof t == "boolean") {
    return {
      enabled: t
    };
  } else {
    return t;
  }
}
function Zx(t) {
  if (t.endsWith("/")) {
    return t;
  } else {
    return t + "/";
  }
}
function eR(t, e) {
  const {
    db: f,
    auth: m,
    realtime: y,
    global: g
  } = t;
  const {
    db: b,
    auth: w,
    realtime: _,
    global: k
  } = e;
  const x = zg(t.tracePropagation);
  const I = zg(e.tracePropagation);
  const N = {
    db: yt(yt({}, b), f),
    auth: yt(yt({}, w), m),
    realtime: yt(yt({}, _), y),
    storage: {},
    global: yt(yt(yt({}, k), g), {}, {
      headers: yt(yt({}, (k == null ? undefined : k.headers) ?? {}), (g == null ? undefined : g.headers) ?? {})
    }),
    tracePropagation: {
      enabled: (x == null ? undefined : x.enabled) ?? (I == null ? undefined : I.enabled) ?? false,
      respectSamplingDecision: (x == null ? undefined : x.respectSamplingDecision) ?? (I == null ? undefined : I.respectSamplingDecision) ?? true
    },
    accessToken: async () => ""
  };
  if (t.accessToken) {
    N.accessToken = t.accessToken;
  } else {
    delete N.accessToken;
  }
  return N;
}
function tR(t) {
  const e = t == null ? undefined : t.trim();
  if (!e) {
    throw new Error("supabaseUrl is required.");
  }
  if (!e.match(/^https?:\/\//i)) {
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  }
  try {
    return new URL(Zx(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var rR = class extends Ox {
  constructor(t) {
    super(t);
  }
};
var nR = class {
  constructor(t, e, n) {
    this.supabaseUrl = t;
    this.supabaseKey = e;
    const l = tR(t);
    if (!e) {
      throw new Error("supabaseKey is required.");
    }
    this.realtimeUrl = new URL("realtime/v1", l);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", l);
    this.storageUrl = new URL("storage/v1", l);
    this.functionsUrl = new URL("functions/v1", l);
    const u = `sb-${l.hostname.split(".")[0]}-auth-token`;
    const d = {
      db: Nx,
      realtime: Dx,
      auth: yt(yt({}, Lx), {}, {
        storageKey: u
      }),
      global: jx,
      tracePropagation: Ux
    };
    const f = eR(n ?? {}, d);
    this.settings = f;
    this.storageKey = f.auth.storageKey ?? "";
    this.headers = f.global.headers ?? {};
    if (f.accessToken) {
      this.accessToken = f.accessToken;
      this.auth = new Proxy({}, {
        get: (y, g) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(g)} is not possible`);
        }
      });
    } else {
      this.auth = this._initSupabaseAuthClient(f.auth ?? {}, this.headers, f.global.fetch);
    }
    this.fetch = Yx(e, t, this._getAccessToken.bind(this), f.global.fetch, f.tracePropagation);
    this.realtime = this._initRealtimeClient(yt({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, f.realtime));
    if (this.accessToken) {
      Promise.resolve(this.accessToken()).then(y => this.realtime.setAuth(y)).catch(y => console.warn("Failed to set initial Realtime auth token:", y));
    }
    this.rest = new wk(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: f.db.schema,
      fetch: this.fetch,
      timeout: f.db.timeout,
      urlLengthLimit: f.db.urlLengthLimit
    });
    this.storage = new IE(this.storageUrl.href, this.headers, this.fetch, n == null ? undefined : n.storage);
    if (!f.accessToken) {
      this._listenForAuthEvents();
    }
  }
  get functions() {
    return new uk(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, e = {}, n = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(t, e, n);
  }
  channel(t, e = {
    config: {}
  }) {
    return this.realtime.channel(t, e);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var t = this;
    if (t.accessToken) {
      return await t.accessToken();
    }
    const {
      data: i
    } = await t.auth.getSession();
    return i.session?.access_token ?? t.supabaseKey;
  }
  _initSupabaseAuthClient({
    autoRefreshToken: t,
    persistSession: e,
    detectSessionInUrl: n,
    storage: i,
    userStorage: a,
    storageKey: l,
    flowType: u,
    lock: d,
    debug: f,
    throwOnError: m,
    experimental: y,
    lockAcquireTimeout: g,
    skipAutoInitialize: b
  }, w, _) {
    const k = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new rR({
      url: this.authUrl.href,
      headers: yt(yt({}, k), w),
      storageKey: l,
      autoRefreshToken: t,
      persistSession: e,
      detectSessionInUrl: n,
      storage: i,
      userStorage: a,
      flowType: u,
      lock: d,
      debug: f,
      throwOnError: m,
      experimental: y,
      fetch: _,
      lockAcquireTimeout: g,
      skipAutoInitialize: b,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some(x => x.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new tE(this.realtimeUrl.href, yt(yt({}, t), {}, {
      params: yt(yt({}, {
        apikey: this.supabaseKey
      }), t == null ? undefined : t.params)
    }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, e) => {
      this._handleTokenChanged(t, "CLIENT", e == null ? undefined : e.access_token);
    });
  }
  _handleTokenChanged(t, e, n) {
    if ((t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== n) {
      this.changedAccessToken = n;
      this.realtime.setAuth(n);
    } else if (t === "SIGNED_OUT") {
      this.realtime.setAuth();
      if (e == "STORAGE") {
        this.auth.signOut();
      }
      this.changedAccessToken = undefined;
    }
  }
};
const sR = (t, e, n) => new nR(t, e, n);
function iR() {
  if (typeof window !== "undefined") {
    return false;
  }
  const t = globalThis.process;
  if (!t) {
    return false;
  }
  const e = t.version;
  if (e == null) {
    return false;
  }
  const n = e.match(/^v(\d+)\./);
  if (n) {
    return parseInt(n[1], 10) <= 18;
  } else {
    return false;
  }
}
if (iR()) {
  console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
}
const oR = "https://ziltypukycqqngrjlkwg.supabase.co";
const jv = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbHR5cHVreWNxcW5ncmpsa3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0Mzc1NjcsImV4cCI6MjA5MjAxMzU2N30.J0l_ogscL5Yo8-VVyvseP8gbPAqR51trkin0t35hz-0
`;
const xu = !!jv;
const aR = {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: "implicit"
  }
};
const Cs = xu ? sR(oR, jv, aR) : null;
var Nv = yy();
const lR = gy(Nv);
function uR(t) {
  if (typeof document === "undefined") {
    return;
  }
  let e = document.head || document.getElementsByTagName("head")[0];
  let n = document.createElement("style");
  n.type = "text/css";
  e.appendChild(n);
  if (n.styleSheet) {
    n.styleSheet.cssText = t;
  } else {
    n.appendChild(document.createTextNode(t));
  }
}
const cR = t => {
  switch (t) {
    case "success":
      return fR;
    case "info":
      return mR;
    case "warning":
      return pR;
    case "error":
      return gR;
    default:
      return null;
  }
};
const dR = Array(12).fill(0);
const hR = ({
  visible: t,
  className: e
}) => ne.createElement("div", {
  className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
  "data-visible": t
}, ne.createElement("div", {
  className: "sonner-spinner"
}, dR.map((n, i) => ne.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${i}`
}))));
const fR = ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, ne.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
}));
const pR = ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, ne.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
}));
const mR = ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, ne.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
}));
const gR = ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, ne.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
}));
const yR = ne.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, ne.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), ne.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const vR = () => {
  const [t, e] = ne.useState(document.hidden);
  ne.useEffect(() => {
    const n = () => {
      e(document.hidden);
    };
    document.addEventListener("visibilitychange", n);
    return () => window.removeEventListener("visibilitychange", n);
  }, []);
  return t;
};
let yh = 1;
class wR {
  constructor() {
    this.subscribe = e => {
      this.subscribers.push(e);
      return () => {
        const n = this.subscribers.indexOf(e);
        this.subscribers.splice(n, 1);
      };
    };
    this.publish = e => {
      this.subscribers.forEach(n => n(e));
    };
    this.addToast = e => {
      this.publish(e);
      this.toasts = [...this.toasts, e];
    };
    this.create = e => {
      var n;
      const {
        message: i,
        ...a
      } = e;
      const l = typeof (e == null ? undefined : e.id) == "number" || ((n = e.id) == null ? undefined : n.length) > 0 ? e.id : yh++;
      const u = this.toasts.find(f => f.id === l);
      const d = e.dismissible === undefined ? true : e.dismissible;
      if (this.dismissedToasts.has(l)) {
        this.dismissedToasts.delete(l);
      }
      if (u) {
        this.toasts = this.toasts.map(f => f.id === l ? (this.publish({
          ...f,
          ...e,
          id: l,
          title: i
        }), {
          ...f,
          ...e,
          id: l,
          dismissible: d,
          title: i
        }) : f);
      } else {
        this.addToast({
          title: i,
          ...a,
          dismissible: d,
          id: l
        });
      }
      return l;
    };
    this.dismiss = e => {
      if (e) {
        this.dismissedToasts.add(e);
        requestAnimationFrame(() => this.subscribers.forEach(n => n({
          id: e,
          dismiss: true
        })));
      } else {
        this.toasts.forEach(n => {
          this.subscribers.forEach(i => i({
            id: n.id,
            dismiss: true
          }));
        });
      }
      return e;
    };
    this.message = (e, n) => this.create({
      ...n,
      message: e
    });
    this.error = (e, n) => this.create({
      ...n,
      message: e,
      type: "error"
    });
    this.success = (e, n) => this.create({
      ...n,
      type: "success",
      message: e
    });
    this.info = (e, n) => this.create({
      ...n,
      type: "info",
      message: e
    });
    this.warning = (e, n) => this.create({
      ...n,
      type: "warning",
      message: e
    });
    this.loading = (e, n) => this.create({
      ...n,
      type: "loading",
      message: e
    });
    this.promise = (e, n) => {
      if (!n) {
        return;
      }
      let i;
      if (n.loading !== undefined) {
        i = this.create({
          ...n,
          promise: e,
          type: "loading",
          message: n.loading,
          description: typeof n.description != "function" ? n.description : undefined
        });
      }
      const a = Promise.resolve(e instanceof Function ? e() : e);
      let l = i !== undefined;
      let u;
      const d = a.then(async m => {
        u = ["resolve", m];
        if (ne.isValidElement(m)) {
          l = false;
          this.create({
            id: i,
            type: "default",
            message: m
          });
        } else if (_R(m) && !m.ok) {
          l = false;
          const g = typeof n.error == "function" ? await n.error(`HTTP error! status: ${m.status}`) : n.error;
          const b = typeof n.description == "function" ? await n.description(`HTTP error! status: ${m.status}`) : n.description;
          const _ = typeof g == "object" && !ne.isValidElement(g) ? g : {
            message: g
          };
          this.create({
            id: i,
            type: "error",
            description: b,
            ..._
          });
        } else if (m instanceof Error) {
          l = false;
          const g = typeof n.error == "function" ? await n.error(m) : n.error;
          const b = typeof n.description == "function" ? await n.description(m) : n.description;
          const _ = typeof g == "object" && !ne.isValidElement(g) ? g : {
            message: g
          };
          this.create({
            id: i,
            type: "error",
            description: b,
            ..._
          });
        } else if (n.success !== undefined) {
          l = false;
          const g = typeof n.success == "function" ? await n.success(m) : n.success;
          const b = typeof n.description == "function" ? await n.description(m) : n.description;
          const _ = typeof g == "object" && !ne.isValidElement(g) ? g : {
            message: g
          };
          this.create({
            id: i,
            type: "success",
            description: b,
            ..._
          });
        }
      }).catch(async m => {
        u = ["reject", m];
        if (n.error !== undefined) {
          l = false;
          const y = typeof n.error == "function" ? await n.error(m) : n.error;
          const g = typeof n.description == "function" ? await n.description(m) : n.description;
          const w = typeof y == "object" && !ne.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: i,
            type: "error",
            description: g,
            ...w
          });
        }
      }).finally(() => {
        if (l) {
          this.dismiss(i);
          i = undefined;
        }
        if (n.finally != null) {
          n.finally.call(n);
        }
      });
      const f = () => new Promise((m, y) => d.then(() => u[0] === "reject" ? y(u[1]) : m(u[1])).catch(y));
      if (typeof i != "string" && typeof i != "number") {
        return {
          unwrap: f
        };
      } else {
        return Object.assign(i, {
          unwrap: f
        });
      }
    };
    this.custom = (e, n) => {
      const i = (n == null ? undefined : n.id) || yh++;
      this.create({
        jsx: e(i),
        id: i,
        ...n
      });
      return i;
    };
    this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id));
    this.subscribers = [];
    this.toasts = [];
    this.dismissedToasts = new Set();
  }
}
const pr = new wR();
const bR = (t, e) => {
  const n = (e == null ? undefined : e.id) || yh++;
  pr.addToast({
    title: t,
    ...e,
    id: n
  });
  return n;
};
const _R = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
const SR = bR;
const kR = () => pr.toasts;
const ER = () => pr.getActiveToasts();
const xR = Object.assign(SR, {
  success: pr.success,
  info: pr.info,
  warning: pr.warning,
  error: pr.error,
  custom: pr.custom,
  message: pr.message,
  promise: pr.promise,
  dismiss: pr.dismiss,
  loading: pr.loading
}, {
  getHistory: kR,
  getToasts: ER
});
uR("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function au(t) {
  return t.label !== undefined;
}
const RR = 3;
const TR = "24px";
const CR = "16px";
const Bg = 4000;
const PR = 356;
const OR = 14;
const AR = 45;
const IR = 200;
function bn(...t) {
  return t.filter(Boolean).join(" ");
}
function jR(t) {
  const [e, n] = t.split("-");
  const i = [];
  if (e) {
    i.push(e);
  }
  if (n) {
    i.push(n);
  }
  return i;
}
const NR = t => {
  var e;
  var n;
  var i;
  var a;
  var l;
  var u;
  var d;
  var f;
  var m;
  const {
    invert: y,
    toast: g,
    unstyled: b,
    interacting: w,
    setHeights: _,
    visibleToasts: k,
    heights: x,
    index: I,
    toasts: N,
    expanded: L,
    removeToast: B,
    defaultRichColors: J,
    closeButton: Q,
    style: j,
    cancelButtonStyle: H,
    actionButtonStyle: Z,
    className: be = "",
    descriptionClassName: Re = "",
    duration: Le,
    position: He,
    gap: Me,
    expandByDefault: Ie,
    classNames: re,
    icons: ye,
    closeButtonAriaLabel: U = "Close toast"
  } = t;
  const [se, Y] = ne.useState(null);
  const [R, z] = ne.useState(null);
  const [X, ie] = ne.useState(false);
  const [ve, le] = ne.useState(false);
  const [xe, je] = ne.useState(false);
  const [We, nt] = ne.useState(false);
  const [Ar, rt] = ne.useState(false);
  const [gr, an] = ne.useState(0);
  const [Ei, yr] = ne.useState(0);
  const Kr = ne.useRef(g.duration || Le || Bg);
  const Fs = ne.useRef(null);
  const Ht = ne.useRef(null);
  const On = I === 0;
  const ln = I + 1 <= k;
  const Rt = g.type;
  const Gr = g.dismissible !== false;
  const Ir = g.className || "";
  const un = g.descriptionClassName || "";
  const cn = ne.useMemo(() => x.findIndex(De => De.toastId === g.id) || 0, [x, g.id]);
  const An = ne.useMemo(() => {
    return g.closeButton ?? Q;
  }, [g.closeButton, Q]);
  const Ut = ne.useMemo(() => g.duration || Le || Bg, [g.duration, Le]);
  const Wt = ne.useRef(0);
  const Yt = ne.useRef(0);
  const dn = ne.useRef(0);
  const jr = ne.useRef(null);
  const [xi, nr] = He.split("-");
  const zs = ne.useMemo(() => x.reduce((De, ct, pt) => pt >= cn ? De : De + ct.height, 0), [x, cn]);
  const In = vR();
  const es = g.invert || y;
  const jn = Rt === "loading";
  Yt.current = ne.useMemo(() => cn * Me + zs, [cn, zs]);
  ne.useEffect(() => {
    Kr.current = Ut;
  }, [Ut]);
  ne.useEffect(() => {
    ie(true);
  }, []);
  ne.useEffect(() => {
    const De = Ht.current;
    if (De) {
      const ct = De.getBoundingClientRect().height;
      yr(ct);
      _(pt => [{
        toastId: g.id,
        height: ct,
        position: g.position
      }, ...pt]);
      return () => _(pt => pt.filter(wt => wt.toastId !== g.id));
    }
  }, [_, g.id]);
  ne.useLayoutEffect(() => {
    if (!X) {
      return;
    }
    const De = Ht.current;
    const ct = De.style.height;
    De.style.height = "auto";
    const pt = De.getBoundingClientRect().height;
    De.style.height = ct;
    yr(pt);
    _(wt => wt.find(dt => dt.toastId === g.id) ? wt.map(dt => dt.toastId === g.id ? {
      ...dt,
      height: pt
    } : dt) : [{
      toastId: g.id,
      height: pt,
      position: g.position
    }, ...wt]);
  }, [X, g.title, g.description, _, g.id]);
  const Xt = ne.useCallback(() => {
    le(true);
    an(Yt.current);
    _(De => De.filter(ct => ct.toastId !== g.id));
    setTimeout(() => {
      B(g);
    }, IR);
  }, [g, B, _, Yt]);
  ne.useEffect(() => {
    if (g.promise && Rt === "loading" || g.duration === Infinity || g.type === "loading") {
      return;
    }
    let De;
    if (L || w || In) {
      (() => {
        if (dn.current < Wt.current) {
          const wt = new Date().getTime() - Wt.current;
          Kr.current = Kr.current - wt;
        }
        dn.current = new Date().getTime();
      })();
    } else {
      (() => {
        if (Kr.current !== Infinity) {
          Wt.current = new Date().getTime();
          De = setTimeout(() => {
            if (g.onAutoClose != null) {
              g.onAutoClose.call(g, g);
            }
            Xt();
          }, Kr.current);
        }
      })();
    }
    return () => clearTimeout(De);
  }, [L, w, g, Rt, In, Xt]);
  ne.useEffect(() => {
    if (g.delete) {
      Xt();
    }
  }, [Xt, g.delete]);
  function hn() {
    var De;
    if (ye != null && ye.loading) {
      var ct;
      return ne.createElement("div", {
        className: bn(re == null ? undefined : re.loader, g == null || (ct = g.classNames) == null ? undefined : ct.loader, "sonner-loader"),
        "data-visible": Rt === "loading"
      }, ye.loading);
    }
    return ne.createElement(hR, {
      className: bn(re == null ? undefined : re.loader, g == null || (De = g.classNames) == null ? undefined : De.loader),
      visible: Rt === "loading"
    });
  }
  const Jr = g.icon || (ye == null ? undefined : ye[Rt]) || cR(Rt);
  return ne.createElement("li", {
    tabIndex: 0,
    ref: Ht,
    className: bn(be, Ir, re == null ? undefined : re.toast, g == null || (e = g.classNames) == null ? undefined : e.toast, re == null ? undefined : re.default, re == null ? undefined : re[Rt], g == null || (n = g.classNames) == null ? undefined : n[Rt]),
    "data-sonner-toast": "",
    "data-rich-colors": g.richColors ?? J,
    "data-styled": !g.jsx && !g.unstyled && !b,
    "data-mounted": X,
    "data-promise": !!g.promise,
    "data-swiped": Ar,
    "data-removed": ve,
    "data-visible": ln,
    "data-y-position": xi,
    "data-x-position": nr,
    "data-index": I,
    "data-front": On,
    "data-swiping": xe,
    "data-dismissible": Gr,
    "data-type": Rt,
    "data-invert": es,
    "data-swipe-out": We,
    "data-swipe-direction": R,
    "data-expanded": !!L || !!Ie && !!X,
    style: {
      "--index": I,
      "--toasts-before": I,
      "--z-index": N.length - I,
      "--offset": `${ve ? gr : Yt.current}px`,
      "--initial-height": Ie ? "auto" : `${Ei}px`,
      ...j,
      ...g.style
    },
    onDragEnd: () => {
      je(false);
      Y(null);
      jr.current = null;
    },
    onPointerDown: De => {
      if (!jn && !!Gr) {
        Fs.current = new Date();
        an(Yt.current);
        De.target.setPointerCapture(De.pointerId);
        if (De.target.tagName !== "BUTTON") {
          je(true);
          jr.current = {
            x: De.clientX,
            y: De.clientY
          };
        }
      }
    },
    onPointerUp: () => {
      var De;
      var ct;
      var pt;
      if (We || !Gr) {
        return;
      }
      jr.current = null;
      const wt = Number(((De = Ht.current) == null ? undefined : De.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
      const wr = Number(((ct = Ht.current) == null ? undefined : ct.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
      const dt = new Date().getTime() - ((pt = Fs.current) == null ? undefined : pt.getTime());
      const St = se === "x" ? wt : wr;
      const fn = Math.abs(St) / dt;
      if (Math.abs(St) >= AR || fn > 0.11) {
        an(Yt.current);
        if (g.onDismiss != null) {
          g.onDismiss.call(g, g);
        }
        z(se === "x" ? wt > 0 ? "right" : "left" : wr > 0 ? "down" : "up");
        Xt();
        nt(true);
        return;
      } else {
        var E;
        var P;
        if ((E = Ht.current) != null) {
          E.style.setProperty("--swipe-amount-x", "0px");
        }
        if ((P = Ht.current) != null) {
          P.style.setProperty("--swipe-amount-y", "0px");
        }
      }
      rt(false);
      je(false);
      Y(null);
    },
    onPointerMove: De => {
      var ct;
      var pt;
      var wt;
      if (!jr.current || !Gr || ((ct = window.getSelection()) == null ? undefined : ct.toString().length) > 0) {
        return;
      }
      const dt = De.clientY - jr.current.y;
      const St = De.clientX - jr.current.x;
      const E = t.swipeDirections ?? jR(He);
      if (!se && (Math.abs(St) > 1 || Math.abs(dt) > 1)) {
        Y(Math.abs(St) > Math.abs(dt) ? "x" : "y");
      }
      let P = {
        x: 0,
        y: 0
      };
      const $ = W => 1 / (1.5 + Math.abs(W) / 20);
      if (se === "y") {
        if (E.includes("top") || E.includes("bottom")) {
          if (E.includes("top") && dt < 0 || E.includes("bottom") && dt > 0) {
            P.y = dt;
          } else {
            const W = dt * $(dt);
            P.y = Math.abs(W) < Math.abs(dt) ? W : dt;
          }
        }
      } else if (se === "x" && (E.includes("left") || E.includes("right"))) {
        if (E.includes("left") && St < 0 || E.includes("right") && St > 0) {
          P.x = St;
        } else {
          const W = St * $(St);
          P.x = Math.abs(W) < Math.abs(St) ? W : St;
        }
      }
      if (Math.abs(P.x) > 0 || Math.abs(P.y) > 0) {
        rt(true);
      }
      if ((pt = Ht.current) != null) {
        pt.style.setProperty("--swipe-amount-x", `${P.x}px`);
      }
      if ((wt = Ht.current) != null) {
        wt.style.setProperty("--swipe-amount-y", `${P.y}px`);
      }
    }
  }, An && !g.jsx && Rt !== "loading" ? ne.createElement("button", {
    "aria-label": U,
    "data-disabled": jn,
    "data-close-button": true,
    onClick: jn || !Gr ? () => {} : () => {
      Xt();
      if (g.onDismiss != null) {
        g.onDismiss.call(g, g);
      }
    },
    className: bn(re == null ? undefined : re.closeButton, g == null || (i = g.classNames) == null ? undefined : i.closeButton)
  }, (ye == null ? undefined : ye.close) ?? yR) : null, (Rt || g.icon || g.promise) && g.icon !== null && ((ye == null ? undefined : ye[Rt]) !== null || g.icon) ? ne.createElement("div", {
    "data-icon": "",
    className: bn(re == null ? undefined : re.icon, g == null || (a = g.classNames) == null ? undefined : a.icon)
  }, g.promise || g.type === "loading" && !g.icon ? g.icon || hn() : null, g.type !== "loading" ? Jr : null) : null, ne.createElement("div", {
    "data-content": "",
    className: bn(re == null ? undefined : re.content, g == null || (l = g.classNames) == null ? undefined : l.content)
  }, ne.createElement("div", {
    "data-title": "",
    className: bn(re == null ? undefined : re.title, g == null || (u = g.classNames) == null ? undefined : u.title)
  }, g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title), g.description ? ne.createElement("div", {
    "data-description": "",
    className: bn(Re, un, re == null ? undefined : re.description, g == null || (d = g.classNames) == null ? undefined : d.description)
  }, typeof g.description == "function" ? g.description() : g.description) : null), ne.isValidElement(g.cancel) ? g.cancel : g.cancel && au(g.cancel) ? ne.createElement("button", {
    "data-button": true,
    "data-cancel": true,
    style: g.cancelButtonStyle || H,
    onClick: De => {
      if (au(g.cancel) && Gr) {
        if (g.cancel.onClick != null) {
          g.cancel.onClick.call(g.cancel, De);
        }
        Xt();
      }
    },
    className: bn(re == null ? undefined : re.cancelButton, g == null || (f = g.classNames) == null ? undefined : f.cancelButton)
  }, g.cancel.label) : null, ne.isValidElement(g.action) ? g.action : g.action && au(g.action) ? ne.createElement("button", {
    "data-button": true,
    "data-action": true,
    style: g.actionButtonStyle || Z,
    onClick: De => {
      if (au(g.action)) {
        if (g.action.onClick != null) {
          g.action.onClick.call(g.action, De);
        }
        if (!De.defaultPrevented) {
          Xt();
        }
      }
    },
    className: bn(re == null ? undefined : re.actionButton, g == null || (m = g.classNames) == null ? undefined : m.actionButton)
  }, g.action.label) : null);
};
function Hg() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "ltr";
  }
  const t = document.documentElement.getAttribute("dir");
  if (t === "auto" || !t) {
    return window.getComputedStyle(document.documentElement).direction;
  } else {
    return t;
  }
}
function LR(t, e) {
  const n = {};
  [t, e].forEach((i, a) => {
    const l = a === 1;
    const u = l ? "--mobile-offset" : "--offset";
    const d = l ? CR : TR;
    function f(m) {
      ["top", "right", "bottom", "left"].forEach(y => {
        n[`${u}-${y}`] = typeof m == "number" ? `${m}px` : m;
      });
    }
    if (typeof i == "number" || typeof i == "string") {
      f(i);
    } else if (typeof i == "object") {
      ["top", "right", "bottom", "left"].forEach(m => {
        if (i[m] === undefined) {
          n[`${u}-${m}`] = d;
        } else {
          n[`${u}-${m}`] = typeof i[m] == "number" ? `${i[m]}px` : i[m];
        }
      });
    } else {
      f(d);
    }
  });
  return n;
}
const DR = ne.forwardRef(function (e, n) {
  const {
    invert: i,
    position: a = "bottom-right",
    hotkey: l = ["altKey", "KeyT"],
    expand: u,
    closeButton: d,
    className: f,
    offset: m,
    mobileOffset: y,
    theme: g = "light",
    richColors: b,
    duration: w,
    style: _,
    visibleToasts: k = RR,
    toastOptions: x,
    dir: I = Hg(),
    gap: N = OR,
    icons: L,
    containerAriaLabel: B = "Notifications"
  } = e;
  const [J, Q] = ne.useState([]);
  const j = ne.useMemo(() => Array.from(new Set([a].concat(J.filter(R => R.position).map(R => R.position)))), [J, a]);
  const [H, Z] = ne.useState([]);
  const [be, Re] = ne.useState(false);
  const [Le, He] = ne.useState(false);
  const [Me, Ie] = ne.useState(g !== "system" ? g : typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const re = ne.useRef(null);
  const ye = l.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  const U = ne.useRef(null);
  const se = ne.useRef(false);
  const Y = ne.useCallback(R => {
    Q(z => {
      var X;
      if ((X = z.find(ie => ie.id === R.id)) == null || !X.delete) {
        pr.dismiss(R.id);
      }
      return z.filter(({
        id: ie
      }) => ie !== R.id);
    });
  }, []);
  ne.useEffect(() => pr.subscribe(R => {
    if (R.dismiss) {
      requestAnimationFrame(() => {
        Q(z => z.map(X => X.id === R.id ? {
          ...X,
          delete: true
        } : X));
      });
      return;
    }
    setTimeout(() => {
      lR.flushSync(() => {
        Q(z => {
          const X = z.findIndex(ie => ie.id === R.id);
          if (X !== -1) {
            return [...z.slice(0, X), {
              ...z[X],
              ...R
            }, ...z.slice(X + 1)];
          } else {
            return [R, ...z];
          }
        });
      });
    });
  }), [J]);
  ne.useEffect(() => {
    if (g !== "system") {
      Ie(g);
      return;
    }
    if (g === "system") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        Ie("dark");
      } else {
        Ie("light");
      }
    }
    if (typeof window === "undefined") {
      return;
    }
    const R = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      R.addEventListener("change", ({
        matches: z
      }) => {
        Ie(z ? "dark" : "light");
      });
    } catch {
      R.addListener(({
        matches: X
      }) => {
        try {
          Ie(X ? "dark" : "light");
        } catch (ie) {
          console.error(ie);
        }
      });
    }
  }, [g]);
  ne.useEffect(() => {
    if (J.length <= 1) {
      Re(false);
    }
  }, [J]);
  ne.useEffect(() => {
    const R = z => {
      var X;
      if (l.every(le => z[le] || z.code === le)) {
        var ve;
        Re(true);
        if ((ve = re.current) != null) {
          ve.focus();
        }
      }
      if (z.code === "Escape" && (document.activeElement === re.current || (X = re.current) != null && X.contains(document.activeElement))) {
        Re(false);
      }
    };
    document.addEventListener("keydown", R);
    return () => document.removeEventListener("keydown", R);
  }, [l]);
  ne.useEffect(() => {
    if (re.current) {
      return () => {
        if (U.current) {
          U.current.focus({
            preventScroll: true
          });
          U.current = null;
          se.current = false;
        }
      };
    }
  }, [re.current]);
  return ne.createElement("section", {
    ref: n,
    "aria-label": `${B} ${ye}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: true
  }, j.map((R, z) => {
    var X;
    const [ie, ve] = R.split("-");
    if (J.length) {
      return ne.createElement("ol", {
        key: R,
        dir: I === "auto" ? Hg() : I,
        tabIndex: -1,
        ref: re,
        className: f,
        "data-sonner-toaster": true,
        "data-sonner-theme": Me,
        "data-y-position": ie,
        "data-lifted": be && J.length > 1 && !u,
        "data-x-position": ve,
        style: {
          "--front-toast-height": `${((X = H[0]) == null ? undefined : X.height) || 0}px`,
          "--width": `${PR}px`,
          "--gap": `${N}px`,
          ..._,
          ...LR(m, y)
        },
        onBlur: le => {
          if (se.current && !le.currentTarget.contains(le.relatedTarget)) {
            se.current = false;
            if (U.current) {
              U.current.focus({
                preventScroll: true
              });
              U.current = null;
            }
          }
        },
        onFocus: le => {
          if ((!(le.target instanceof HTMLElement) || le.target.dataset.dismissible !== "false") && !se.current) {
            se.current = true;
            U.current = le.relatedTarget;
          }
        },
        onMouseEnter: () => Re(true),
        onMouseMove: () => Re(true),
        onMouseLeave: () => {
          if (!Le) {
            Re(false);
          }
        },
        onDragEnd: () => Re(false),
        onPointerDown: le => {
          if (!(le.target instanceof HTMLElement) || le.target.dataset.dismissible !== "false") {
            He(true);
          }
        },
        onPointerUp: () => He(false)
      }, J.filter(le => !le.position && z === 0 || le.position === R).map((le, xe) => {
        return ne.createElement(NR, {
          key: le.id,
          icons: L,
          index: xe,
          toast: le,
          defaultRichColors: b,
          duration: (x == null ? undefined : x.duration) ?? w,
          className: x == null ? undefined : x.className,
          descriptionClassName: x == null ? undefined : x.descriptionClassName,
          invert: i,
          visibleToasts: k,
          closeButton: (x == null ? undefined : x.closeButton) ?? d,
          interacting: Le,
          position: R,
          style: x == null ? undefined : x.style,
          unstyled: x == null ? undefined : x.unstyled,
          classNames: x == null ? undefined : x.classNames,
          cancelButtonStyle: x == null ? undefined : x.cancelButtonStyle,
          actionButtonStyle: x == null ? undefined : x.actionButtonStyle,
          closeButtonAriaLabel: x == null ? undefined : x.closeButtonAriaLabel,
          removeToast: Y,
          toasts: J.filter(nt => nt.position == le.position),
          heights: H.filter(nt => nt.position == le.position),
          setHeights: Z,
          expandByDefault: u,
          gap: N,
          expanded: be,
          swipeDirections: e.swipeDirections
        });
      }));
    } else {
      return null;
    }
  }));
});
function UR(t) {
  return <DR theme="light" position="top-center" duration={5000} gap={10} offset={16} mobileOffset={{
    top: 69,
    left: 12,
    right: 12
  }} visibleToasts={3} toastOptions={{
    classNames: {
      toast: ["group", "!rounded-xs !border !border-line !bg-canvas", "!shadow-[0_2px_28px_rgba(47,51,49,0.10)]", "!font-sans !text-[13px] !text-ink", "!gap-3 !px-4 !py-3.5"].join(" "),
      title: "!font-sans !text-[13px] !font-medium !text-ink",
      description: "!font-sans !text-[12px] !font-light !text-ink-soft",
      actionButton: "!bg-gold-dark !text-canvas !rounded-none !text-[10px] !uppercase !tracking-[1.5px] !font-bold",
      cancelButton: "!bg-transparent !text-ink-muted !rounded-none !text-[10px] !uppercase !tracking-[1.5px]",
      closeButton: "!border-line !bg-canvas !text-ink-muted",
      success: "!border-gold [&_[data-icon]]:!text-gold-dark",
      error: "!border-destructive/40 [&_[data-icon]]:!text-destructive",
      loading: "[&_[data-icon]]:!text-gold-dark"
    }
  }} {...t} />;
}
class vh extends Error {
  constructor(n, i) {
    super(i);
    ym(this, "status");
    this.name = "ApiError";
    this.status = n;
  }
  get isNetworkError() {
    return this.status === 0;
  }
}
const wh = "gp_return_to";
const Wg = "/dashboard";
const MR = new Set(["/", "/login", "/auth/callback"]);
function Lv(t) {
  try {
    const e = t.split("?")[0].split("#")[0];
    if (!e.startsWith("/") || e.startsWith("//") || MR.has(e)) {
      return;
    }
    sessionStorage.setItem(wh, t);
  } catch {}
}
function $R() {
  try {
    const t = sessionStorage.getItem(wh);
    sessionStorage.removeItem(wh);
    if (t && t.startsWith("/") && !t.startsWith("//")) {
      return t;
    } else {
      return Wg;
    }
  } catch {
    return Wg;
  }
}
const FR = "https://catalogai-4cjp.onrender.com";
function zR() {
  return localStorage.getItem("access_token");
}
function BR() {
  if (window.location.pathname !== "/login") {
    Lv(window.location.pathname + window.location.search);
    xR.error("Your session expired", {
      description: "Please sign in again to pick up where you left off."
    });
    window.history.pushState({}, "", "/login");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
}
async function Ot(t, e = {}) {
  const n = zR();
  const i = {
    ...e.headers
  };
  if (n) {
    i.Authorization = `Bearer ${n}`;
  }
  if (!(e.body instanceof FormData)) {
    i["Content-Type"] = "application/json";
  }
  let a;
  try {
    a = await fetch(`${FR}${t}`, {
      ...e,
      headers: i
    });
  } catch (l) {
    throw new vh(0, l instanceof Error && l.message ? `Network request failed: ${l.message}` : "Network request failed");
  }
  if (!a.ok) {
    if (a.status === 401 && !t.startsWith("/api/auth/")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("auth_user");
      BR();
    }
    const l = await a.json().catch(() => ({}));
    const u = (l == null ? undefined : l.detail) ?? `HTTP ${a.status}`;
    throw new vh(a.status, u);
  }
  if (a.status !== 204) {
    return a.json();
  }
}
const Dv = {
  me: () => Ot("/api/users/me"),
  addPhone: t => Ot("/api/users/me/phone", {
    method: "POST",
    body: JSON.stringify({
      phone: t
    })
  }),
  updateWhatsApp: t => Ot("/api/users/me/whatsapp", {
    method: "PATCH",
    body: JSON.stringify({
      whatsapp_number: t
    })
  })
};
const Uv = {
  upload: async t => {
    const e = new FormData();
    e.append("file", t);
    return Ot("/api/image-jobs/upload", {
      method: "POST",
      body: e
    });
  },
  create: t => Ot("/api/image-jobs", {
    method: "POST",
    body: JSON.stringify(t)
  }),
  list: (t = 20, e = 0) => Ot(`/api/image-jobs?limit=${t}&offset=${e}`),
  statusBatch: t => Ot(`/api/image-jobs/status?ids=${encodeURIComponent(t.join(","))}`),
  queueStatus: () => Ot("/api/image-jobs/queue"),
  downloadUrl: (t, e) => Ot(`/api/image-jobs/download-url?url=${encodeURIComponent(t)}&filename=${encodeURIComponent(e)}`)
};
const Mv = {
  packages: () => Ot("/api/credits/packages"),
  createOrder: t => Ot("/api/credits/orders", {
    method: "POST",
    body: JSON.stringify({
      credits: t
    })
  }),
  verifyPayment: t => Ot("/api/credits/verify", {
    method: "POST",
    body: JSON.stringify(t)
  }),
  history: () => Ot("/api/credits/history")
};
const gT = {
  create: (t, e) => Ot("/api/refund-tickets", {
    method: "POST",
    body: JSON.stringify({
      message: t,
      items: e
    })
  }),
  mine: () => Ot("/api/refund-tickets")
};
const yT = {
  get: t => Ot(`/api/studio/${encodeURIComponent(t)}`),
  mine: () => Ot("/api/studio/mine"),
  createJob: (t, e, n) => Ot(`/api/studio/${encodeURIComponent(t)}/jobs`, {
    method: "POST",
    body: JSON.stringify({
      input_image_url: e,
      prompt_id: n
    })
  }),
  jobs: (t, e = 30, n = 0) => Ot(`/api/studio/${encodeURIComponent(t)}/jobs?limit=${e}&offset=${n}`)
};
const mu = new wb({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 120000,
      gcTime: 600000,
      refetchOnWindowFocus: false
    }
  }
});
const Si = {
  user: ["user", "me"],
  imageJobsInfinite: t => ["image-jobs", "infinite", t],
  queueStatus: ["image-jobs", "queue"],
  creditPackages: ["credits", "packages"],
  creditHistory: ["credits", "history"]
};
function vT() {
  return Ru({
    queryKey: Si.user,
    queryFn: Dv.me,
    staleTime: 300000,
    gcTime: 600000
  });
}
const lu = 20;
function $v() {
  return {
    queryKey: Si.imageJobsInfinite(lu),
    queryFn: ({
      pageParam: t
    }) => Uv.list(lu, t),
    initialPageParam: 0,
    getNextPageParam: (t, e) => {
      if (!(t.length < lu)) {
        return e.length * lu;
      }
    },
    staleTime: 60000,
    gcTime: 300000
  };
}
function wT() {
  return jy($v());
}
function bT(t) {
  return jy({
    ...$v(),
    select: e => e.pages.flat().slice(0, t)
  });
}
const HR = 4000;
const WR = 45000;
const VR = 300000;
const qR = 3000;
let jd = null;
let gu = 0;
function _T() {
  gu += 1;
  let t = false;
  return () => {
    if (!t) {
      t = true;
      gu = Math.max(0, gu - 1);
    }
  };
}
function ST(t) {
  return Ru({
    queryKey: Si.queueStatus,
    queryFn: async () => {
      const e = await Uv.queueStatus();
      if (e.active > 0) {
        jd = Date.now();
      }
      return e;
    },
    enabled: t,
    refetchInterval: e => {
      var n;
      if (gu > 0) {
        return false;
      } else if ((((n = e.state.data) == null ? undefined : n.active) ?? 0) > 0) {
        return HR;
      } else if (jd !== null && Date.now() - jd < VR) {
        return WR;
      } else {
        return false;
      }
    },
    refetchOnWindowFocus: true,
    staleTime: qR,
    gcTime: 60000
  });
}
function kT() {
  return Ru({
    queryKey: Si.creditPackages,
    queryFn: Mv.packages,
    staleTime: 600000,
    gcTime: 1800000
  });
}
function ET() {
  return Ru({
    queryKey: Si.creditHistory,
    queryFn: Mv.history,
    staleTime: 30000,
    gcTime: 300000
  });
}
const KR = "modulepreload";
const GR = function (t) {
  return "/" + t;
};
const Vg = {};
const hr = function (e, n, i) {
  let a = Promise.resolve();
  if (n && n.length > 0) {
    let u = function (m) {
      return Promise.all(m.map(y => Promise.resolve(y).then(g => ({
        status: "fulfilled",
        value: g
      }), g => ({
        status: "rejected",
        reason: g
      }))));
    };
    document.getElementsByTagName("link");
    const d = document.querySelector("meta[property=csp-nonce]");
    const f = (d == null ? undefined : d.nonce) || (d == null ? undefined : d.getAttribute("nonce"));
    a = u(n.map(m => {
      m = GR(m);
      if (m in Vg) {
        return;
      }
      Vg[m] = true;
      const y = m.endsWith(".css");
      const g = y ? "[rel=\"stylesheet\"]" : "";
      if (document.querySelector(`link[href="${m}"]${g}`)) {
        return;
      }
      const b = document.createElement("link");
      b.rel = y ? "stylesheet" : KR;
      if (!y) {
        b.as = "script";
      }
      b.crossOrigin = "";
      b.href = m;
      if (f) {
        b.setAttribute("nonce", f);
      }
      document.head.appendChild(b);
      if (y) {
        return new Promise((w, _) => {
          b.addEventListener("load", w);
          b.addEventListener("error", () => _(new Error(`Unable to preload CSS for ${m}`)));
        });
      }
    }));
  }
  function l(u) {
    const d = new Event("vite:preloadError", {
      cancelable: true
    });
    d.payload = u;
    window.dispatchEvent(d);
    if (!d.defaultPrevented) {
      throw u;
    }
  }
  return a.then(u => {
    for (const d of u || []) {
      if (d.status === "rejected") {
        l(d.reason);
      }
    }
    return e().catch(l);
  });
};
const Fv = "phc_qVnroqF5WtqKDkYQtTHV4HytkeSiYg3CYjHtXFYGiuou";
const JR = "https://us.i.posthog.com";
const Hh = !!Fv;
const QR = ["/admin"];
function Lu(t = window.location.pathname) {
  return QR.some(e => t === e || t.startsWith(e + "/"));
}
const YR = "data-ph-mask";
const XR = {
  maskAllInputs: true,
  blockSelector: "img, video, canvas, picture",
  maskTextSelector: `[${YR}]`
};
let Rn = null;
let ca = null;
const zv = [];
function bh() {
  if (Hh) {
    if (Rn) {
      return Promise.resolve(Rn);
    } else {
      return ca || (ca = Promise.all([hr(() => import("./module.slim-DBJBlMub.js"), []), hr(() => import("./extension-bundles-C-oDDSBf.js"), [])]).then(([{
        default: t
      }, {
        SessionReplayExtensions: e
      }]) => {
        t.init(Fv, {
          api_host: JR,
          __extensionClasses: {
            ...e
          },
          capture_pageview: false,
          capture_pageleave: false,
          disable_session_recording: false,
          session_recording: XR,
          autocapture: false,
          opt_out_useragent_filter: false,
          persistence: "localStorage+cookie",
          before_send: n => n && Lu() ? null : n
        });
        Rn = t;
        for (const n of zv.splice(0)) {
          n();
        }
        return Rn;
      }).catch(() => {
        ca = null;
        return null;
      }), ca);
    }
  } else {
    return Promise.resolve(null);
  }
}
function ZR() {
  if (!Hh || Lu()) {
    return;
  }
  const t = window.requestIdleCallback;
  if (typeof t == "function") {
    t(() => void bh(), {
      timeout: 4000
    });
  } else {
    window.setTimeout(() => void bh(), 1500);
  }
}
function Du(t) {
  if (!!Hh && !Lu()) {
    if (Rn) {
      t(Rn);
      return;
    }
    zv.push(() => Rn && t(Rn));
    bh();
  }
}
function e1(t, e = {}) {
  Du(n => n.identify(t, e));
}
function t1() {
  Du(t => t.reset());
}
function xT(t, e = {}) {
  Du(n => n.capture(t, e));
}
let qg = null;
function Kg() {
  const t = window.location.pathname;
  if (t !== qg) {
    qg = t;
    if (Lu(t)) {
      if (Rn) {
        Rn.stopSessionRecording();
      }
      return;
    }
    Du(e => {
      e.capture("$pageview");
      e.startSessionRecording();
    });
  }
}
const Bv = A.createContext(null);
function Gg(t) {
  localStorage.setItem("access_token", t);
}
function Nd() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("auth_user");
}
function Jg() {
  try {
    if (!localStorage.getItem("access_token")) {
      return null;
    }
    const t = localStorage.getItem("auth_user");
    if (!t) {
      return null;
    }
    const e = JSON.parse(t);
    if (typeof (e == null ? undefined : e.user_id) != "string" || typeof (e == null ? undefined : e.email) != "string") {
      return null;
    } else {
      return {
        user_id: e.user_id,
        email: e.email,
        credits: typeof e.credits == "number" ? e.credits : 0
      };
    }
  } catch {
    return null;
  }
}
function _Component19({
  children: t
}) {
  const [e, n] = A.useState(Jg);
  const [i, a] = A.useState(() => Jg() === null);
  const l = A.useRef(null);
  const u = A.useRef(null);
  function d(w, {
    force: _ = false
  } = {}) {
    if (!_ && l.current === w) {
      return Promise.resolve();
    }
    if (u.current) {
      return u.current;
    }
    const k = (async () => {
      try {
        const x = await mu.fetchQuery({
          queryKey: Si.user,
          queryFn: Dv.me,
          staleTime: 0
        });
        const I = {
          user_id: x.id,
          email: x.email,
          credits: x.credits,
          has_purchased: x.has_purchased,
          phone_bonus_available: x.phone_bonus_available,
          phone: x.whatsapp_number,
          restricted: x.restricted,
          free_credits_blocked: x.free_credits_blocked
        };
        l.current = w;
        n(I);
        e1(x.id, {
          email: x.email,
          credits: x.credits
        });
        localStorage.setItem("auth_user", JSON.stringify(I));
      } catch (x) {
        if (x instanceof vh && x.status === 401) {
          Nd();
          l.current = null;
          n(null);
          Cs.auth.signOut({
            scope: "local"
          });
        }
      } finally {
        a(false);
        u.current = null;
      }
    })();
    u.current = k;
    return k;
  }
  A.useEffect(() => {
    if (!xu) {
      a(false);
      return;
    }
    const {
      data: {
        subscription: w
      }
    } = Cs.auth.onAuthStateChange(async (_, k) => {
      const x = k == null ? undefined : k.access_token;
      if (!x) {
        Nd();
        l.current = null;
        n(null);
        a(false);
        return;
      }
      Gg(x);
      if (_ === "TOKEN_REFRESHED") {
        if (l.current !== null) {
          l.current = x;
        }
        return;
      }
      if (_ === "SIGNED_IN" || _ === "INITIAL_SESSION") {
        await d(x);
      } else if (_ === "USER_UPDATED") {
        await d(x, {
          force: true
        });
      }
    });
    return () => w.unsubscribe();
  }, []);
  const f = async () => {
    const {
      error: w
    } = await Cs.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
    if (w) {
      throw new Error(w.message);
    }
  };
  const m = async () => {
    t1();
    await Cs.auth.signOut();
    Nd();
    l.current = null;
    n(null);
    mu.clear();
  };
  A.useEffect(() => {
    if (e) {
      localStorage.setItem("auth_user", JSON.stringify(e));
      mu.setQueryData(Si.user, w => w && {
        ...w,
        credits: e.credits
      });
    }
  }, [e]);
  const y = w => {
    n(_ => _ && {
      ..._,
      credits: Math.max(0, w)
    });
  };
  const g = w => {
    n(_ => _ && {
      ..._,
      credits: Math.max(0, _.credits + w)
    });
  };
  const b = async () => {
    if (!xu) {
      return;
    }
    const {
      data: {
        session: w
      }
    } = await Cs.auth.getSession();
    if (w != null && w.access_token) {
      Gg(w.access_token);
      if (!e) {
        a(true);
      }
      await d(w.access_token, {
        force: true
      });
    }
  };
  return <Bv.Provider value={{
    user: e,
    isLoading: i,
    loginWithGoogle: f,
    logout: m,
    updateCredits: y,
    adjustCredits: g,
    refreshUser: b
  }}>{t}</Bv.Provider>;
}
function n1() {
  const t = A.useContext(Bv);
  if (!t) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return t;
}
const Or = {
  "/app": () => hr(() => import("./AppLayout-DgGCk1so.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
  "/": () => hr(() => import("./HomePage-Cqnef8qL.js"), __vite__mapDeps([6, 7])),
  "/login": () => hr(() => import("./LoginPage-DhUqSI9X.js"), __vite__mapDeps([8, 9, 4])),
  "/dashboard": () => hr(() => import("./Dashboard-BHa4pJmE.js"), __vite__mapDeps([10, 11, 3, 4, 9, 12, 1, 13, 14])),
  "/generator": () => hr(() => import("./Generator-BMUnqwzy.js"), __vite__mapDeps([15, 11, 3, 4, 9, 16, 12, 17, 18, 13, 14, 5])),
  "/gallery": () => hr(() => import("./Gallery-4RzBWD2z.js"), __vite__mapDeps([19, 3, 4, 13, 14, 5])),
  "/settings": () => hr(() => import("./Settings-BH2J0Q6V.js"), __vite__mapDeps([20, 16, 12, 3, 4, 21, 9, 13, 14, 7])),
  "/account": () => hr(() => import("./AccountSettings-ByFlYTx6.js"), __vite__mapDeps([22, 2, 3, 4, 14])),
  "/privacy": () => hr(() => import("./PrivacyPolicy-BJ-fYufK.js"), __vite__mapDeps([23, 24])),
  "/admin": () => hr(() => import("./AdminPage-CbHMnXUD.js"), __vite__mapDeps([25, 3, 4, 9, 17, 14, 5])),
  "/studio": () => hr(() => import("./StudioPage-DJ2Y9SrO.js"), __vite__mapDeps([26, 21, 3, 4, 9, 13, 14, 17, 18, 5])),
  "/terms": () => hr(() => import("./Terms-r6HTZghg.js"), __vite__mapDeps([27, 24]))
};
const Ld = new Set();
function s1(t) {
  if (Ld.has(t)) {
    return;
  }
  const e = Or[t];
  if (e) {
    Ld.add(t);
    e().catch(() => Ld.delete(t));
  }
}
function RT() {
  const t = ["/app", "/dashboard", "/generator", "/gallery", "/settings", "/account"];
  const e = () => t.forEach(s1);
  if (typeof window === "undefined") {
    return () => {};
  }
  const n = window.requestIdleCallback;
  if (typeof n == "function") {
    const a = n.call(window, e, {
      timeout: 3000
    });
    return () => window.cancelIdleCallback(a);
  }
  const i = window.setTimeout(e, 1500);
  return () => window.clearTimeout(i);
}
function Wh({
  delay: t = 200,
  label: e = "Loading",
  message: n
}) {
  const [i, a] = A.useState(false);
  A.useEffect(() => {
    const l = window.setTimeout(() => a(true), t);
    return () => window.clearTimeout(l);
  }, [t]);
  return <div className="min-h-screen bg-canvas flex items-center justify-center" role="status" aria-live="polite" aria-busy="true"><div className={`flex flex-col items-center gap-5 transition-opacity duration-300 ease-enter ${i ? "opacity-100" : "opacity-0"}`}><span className="font-serif text-[22px] font-bold tracking-tight text-gold-dark">Gehna <span className="font-light">Photo</span></span><span data-motion="essential" className="h-px w-24 overflow-hidden bg-line"><span className="block h-full w-1/3 bg-gold-dark animate-[gp-sweep_1.2s_var(--ease-move)_infinite]" /></span>{n ? <p className="font-sans text-[13px] font-light tracking-[1px] text-ink-muted">{n}</p> : null}<span className="sr-only">{e}</span></div></div>;
}
function i1(t) {
  if (!(t instanceof Error)) {
    return false;
  }
  const e = t.message.toLowerCase();
  return e.includes("failed to fetch dynamically imported module") || e.includes("loading chunk") || e.includes("loading css chunk") || e.includes("dynamically imported module");
}
function _Component4() {
  const t = iv();
  const e = Ha();
  const n = i1(t);
  return <div className="min-h-screen bg-[#ffffff] flex items-center justify-center px-6"><div className="text-center space-y-6 max-w-md"><div className="w-16 h-16 border border-[#B6A663] flex items-center justify-center mx-auto"><span className="text-[#7a6b2e] text-2xl font-['Cormorant_Garamond',serif] font-bold">{n ? "↻" : "!"}</span></div><h1 className="font-['Cormorant_Garamond',serif] font-bold text-[28px] text-[#7a6b2e]">{n ? "App Updated" : "Something went wrong"}</h1><p className="font-['Inter',sans-serif] text-[14px] text-[#5c605d] leading-relaxed">{n ? "A newer version of Gehna Photo is available. Refresh the page to continue." : "An unexpected error occurred. Try refreshing the page or go back home."}</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><button onClick={() => window.location.reload()} className="bg-[#7a6b2e] text-[#ffffff] px-10 py-4 text-[12px] tracking-[1.2px] uppercase font-bold hover:bg-[#5c5022] transition-colors">Refresh Page</button><button onClick={() => e("/", {
          replace: true
        })} className="border border-[#B6A663] text-[#7a6b2e] px-10 py-4 text-[12px] tracking-[1.2px] uppercase font-bold hover:bg-[#7a6b2e] hover:text-white transition-colors">Go Home</button></div></div></div>;
}
const _Component6 = A.lazy(Or["/app"]);
const _Component2 = A.lazy(Or["/"]);
const _Component5 = A.lazy(Or["/login"]);
const _Component7 = A.lazy(Or["/dashboard"]);
const _Component8 = A.lazy(Or["/generator"]);
const _Component9 = A.lazy(Or["/gallery"]);
const _Component0 = A.lazy(Or["/settings"]);
const _Component1 = A.lazy(Or["/account"]);
const _Component12 = A.lazy(Or["/privacy"]);
const _Component11 = A.lazy(Or["/admin"]);
const _Component10 = A.lazy(Or["/studio"]);
const _Component13 = A.lazy(Or["/terms"]);
function _Component3({
  children: t
}) {
  return <A.Suspense fallback={<Wh />}>{t}</A.Suspense>;
}
function Qg({
  children: t
}) {
  const {
    user: e,
    isLoading: n
  } = n1();
  const i = Pn();
  if (n && !e) {
    return <Wh />;
  } else if (e) {
    return <q.Fragment>{t ?? <_S />}</q.Fragment>;
  } else {
    Lv(i.pathname + i.search);
    return <_Component to="/login" replace={true} />;
  }
}
function v1() {
  const t = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const e = new URLSearchParams(window.location.search);
  const n = t.get("error_code") ?? e.get("error_code");
  const i = t.get("error") ?? e.get("error");
  if (!n && !i) {
    return null;
  } else if (n === "otp_expired" || i === "access_denied") {
    return "This login link has expired or has already been used. Please request a new one.";
  } else {
    return t.get("error_description") ?? e.get("error_description") ?? "We could not sign you in. Please request a new link.";
  }
}
function w1() {
  const t = Ha();
  const [e] = ek();
  const [n, i] = A.useState(null);
  A.useEffect(() => {
    let a;
    let l = null;
    function u() {
      if (l) {
        l();
      }
      clearTimeout(a);
      t($R(), {
        replace: true
      });
    }
    function d(m) {
      if (l) {
        l();
      }
      clearTimeout(a);
      i(m);
    }
    async function f() {
      const {
        data: {
          subscription: m
        }
      } = Cs.auth.onAuthStateChange((_, k) => {
        if (k && (_ === "SIGNED_IN" || _ === "INITIAL_SESSION")) {
          u();
        }
      });
      l = () => m.unsubscribe();
      const y = v1();
      if (y) {
        d(y);
        return;
      }
      const g = e.get("token");
      const b = e.get("type");
      if (g && b) {
        const {
          error: _
        } = await Cs.auth.verifyOtp({
          token_hash: g,
          type: b
        });
        if (_) {
          d("This login link has expired or is invalid. Please request a new one.");
          return;
        }
        return;
      }
      const {
        data: {
          session: w
        }
      } = await Cs.auth.getSession();
      if (w) {
        u();
        return;
      }
      a = setTimeout(() => {
        d("Login is taking too long. Please request a new link.");
      }, 15000);
    }
    f();
    return () => {
      if (l) {
        l();
      }
      clearTimeout(a);
    };
  }, [t, e]);
  if (n) {
    return <div className="min-h-screen bg-[#ffffff] flex items-center justify-center px-6"><div className="text-center space-y-6 max-w-md"><div className="w-16 h-16 border-2 border-[#e6e9e6] flex items-center justify-center mx-auto"><span className="text-[#7a6b2e] text-2xl font-['Cormorant_Garamond',serif] font-bold">!</span></div><h1 className="font-['Cormorant_Garamond',serif] font-bold text-[28px] text-[#7a6b2e]">Login Failed</h1><p className="font-['Inter',sans-serif] text-[14px] text-[#5c605d]">{n}</p><button onClick={() => t("/login")} className="bg-[#7a6b2e] text-[#ffffff] px-10 py-4 text-[12px] tracking-[1.2px] uppercase font-bold hover:bg-[#5c5022] transition-colors">Back to Login</button></div></div>;
  } else {
    return <Wh delay={0} message="Signing you in…" label="Signing you in" />;
  }
}
const Yg = KS([{
  path: "/",
  element: <_Component3><_Component2 /></_Component3>,
  errorElement: <_Component4 />
}, {
  path: "/login",
  element: <_Component3><_Component5 /></_Component3>,
  errorElement: <_Component4 />
}, {
  path: "/auth/callback",
  Component: w1,
  errorElement: <_Component4 />
}, {
  element: <Qg><_Component3><_Component6 /></_Component3></Qg>,
  errorElement: <_Component4 />,
  children: [{
    path: "/dashboard",
    element: <_Component3><_Component7 /></_Component3>
  }, {
    path: "/generator",
    element: <_Component3><_Component8 /></_Component3>
  }, {
    path: "/gallery",
    element: <_Component3><_Component9 /></_Component3>
  }, {
    path: "/settings",
    element: <_Component3><_Component0 /></_Component3>
  }, {
    path: "/account",
    element: <_Component3><_Component1 /></_Component3>
  }]
}, {
  path: "/studio/:slug",
  element: <Qg><_Component3><_Component10 /></_Component3></Qg>,
  errorElement: <_Component4 />
}, {
  path: "/admin",
  element: <_Component3><_Component11 /></_Component3>,
  errorElement: <_Component4 />
}, {
  path: "/privacy",
  element: <_Component3><_Component12 /></_Component3>
}, {
  path: "/terms",
  element: <_Component3><_Component13 /></_Component3>
}, {
  path: "*",
  errorElement: <_Component4 />,
  Component: () => <div className="min-h-screen flex items-center justify-center bg-[#ffffff]"><div className="text-center"><h1 className="font-['Cormorant_Garamond',serif] font-bold text-[48px] text-[#7a6b2e] mb-4">404</h1><p className="font-['Inter',sans-serif] text-[16px] text-[#5c605d] mb-8">Page not found</p><Fh to="/" className="inline-block bg-[#7a6b2e] text-[#ffffff] px-10 py-5 text-[12px] tracking-[1.2px] uppercase font-bold hover:bg-[#5c5022] transition-colors">GO HOME</Fh></div></div>
}]);
function _Component15() {
  return <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xs focus:bg-gold-dark focus:px-5 focus:py-3 focus:text-[11px] focus:font-bold focus:uppercase focus:tracking-[1.5px] focus:text-canvas">Skip to content</a>;
}
const _1 = {
  queue: 1,
  create: 2,
  whatsapp: 3
};
const Xg = "gp-fab-stack";
const Zg = "--gp-fab-inset";
const TT = "4.25rem";
const S1 = ["fixed z-30 flex flex-col items-end", "gap-2 sm:gap-2.5 [@media(max-height:480px)]:gap-1.5", "right-[max(1rem,calc(env(safe-area-inset-right)+1rem))]", "sm:right-[max(1.5rem,calc(env(safe-area-inset-right)+1.5rem))]", "md:right-[max(2rem,calc(env(safe-area-inset-right)+2rem))]", "bottom-[calc(max(1rem,calc(env(safe-area-inset-bottom)+1rem))+var(--gp-fab-inset,0px))]", "lg:bottom-[max(1rem,calc(env(safe-area-inset-bottom)+1rem))]", "pointer-events-none"].join(" ");
const ey = (() => {
  if (typeof document === "undefined") {
    return null;
  }
  const t = document.getElementById(Xg);
  if (t) {
    return t;
  }
  const e = document.createElement("div");
  e.id = Xg;
  e.className = S1;
  document.body.appendChild(e);
  return e;
})();
function _Component14({
  order: t,
  children: e
}) {
  if (ey) {
    return Nv.createPortal(<div style={{
      order: t
    }} className="pointer-events-auto">{e}</div>, ey);
  } else {
    return null;
  }
}
function CT(t) {
  A.useEffect(() => {
    const e = document.documentElement.style;
    e.setProperty(Zg, t);
    return () => {
      e.removeProperty(Zg);
    };
  }, [t]);
}
const E1 = ["group inline-flex min-h-11 items-center rounded-xs", "shadow-[0_1px_2px_rgba(47,51,49,0.06),0_8px_24px_-8px_rgba(47,51,49,0.25)]", "transition-[background-color,border-color,color,transform,box-shadow]", "duration-150 ease-move", "hover:-translate-y-px hover:shadow-[0_1px_2px_rgba(47,51,49,0.08),0_12px_28px_-8px_rgba(47,51,49,0.3)]", "active:translate-y-0 active:shadow-[0_1px_2px_rgba(47,51,49,0.06)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"].join(" ");
const x1 = "text-[10px] font-medium uppercase tracking-[1.5px]";
function Hv(t) {
  var e;
  var n;
  var i = "";
  if (typeof t == "string" || typeof t == "number") {
    i += t;
  } else if (typeof t == "object") {
    if (Array.isArray(t)) {
      var a = t.length;
      for (e = 0; e < a; e++) {
        if (t[e] && (n = Hv(t[e]))) {
          if (i) {
            i += " ";
          }
          i += n;
        }
      }
    } else {
      for (n in t) {
        if (t[n]) {
          if (i) {
            i += " ";
          }
          i += n;
        }
      }
    }
  }
  return i;
}
function R1() {
  var t;
  var e;
  for (var n = 0, i = "", a = arguments.length; n < a; n++) {
    if ((t = arguments[n]) && (e = Hv(t))) {
      if (i) {
        i += " ";
      }
      i += e;
    }
  }
  return i;
}
const Vh = "-";
const T1 = t => {
  const e = P1(t);
  const {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: u => {
      const d = u.split(Vh);
      if (d[0] === "" && d.length !== 1) {
        d.shift();
      }
      return Wv(d, e) || C1(u);
    },
    getConflictingClassGroupIds: (u, d) => {
      const f = n[u] || [];
      if (d && i[u]) {
        return [...f, ...i[u]];
      } else {
        return f;
      }
    }
  };
};
const Wv = (t, e) => {
  var u;
  if (t.length === 0) {
    return e.classGroupId;
  }
  const n = t[0];
  const i = e.nextPart.get(n);
  const a = i ? Wv(t.slice(1), i) : undefined;
  if (a) {
    return a;
  }
  if (e.validators.length === 0) {
    return;
  }
  const l = t.join(Vh);
  if ((u = e.validators.find(({
    validator: d
  }) => d(l))) == null) {
    return undefined;
  } else {
    return u.classGroupId;
  }
};
const ty = /^\[(.+)\]$/;
const C1 = t => {
  if (ty.test(t)) {
    const e = ty.exec(t)[1];
    const n = e == null ? undefined : e.substring(0, e.indexOf(":"));
    if (n) {
      return "arbitrary.." + n;
    }
  }
};
const P1 = t => {
  const {
    theme: e,
    classGroups: n
  } = t;
  const i = {
    nextPart: new Map(),
    validators: []
  };
  for (const a in n) {
    _h(n[a], i, a, e);
  }
  return i;
};
const _h = (t, e, n, i) => {
  t.forEach(a => {
    if (typeof a == "string") {
      const l = a === "" ? e : ry(e, a);
      l.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (O1(a)) {
        _h(a(i), e, n, i);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([l, u]) => {
      _h(u, ry(e, l), n, i);
    });
  });
};
const ry = (t, e) => {
  let n = t;
  e.split(Vh).forEach(i => {
    if (!n.nextPart.has(i)) {
      n.nextPart.set(i, {
        nextPart: new Map(),
        validators: []
      });
    }
    n = n.nextPart.get(i);
  });
  return n;
};
const O1 = t => t.isThemeGetter;
const A1 = t => {
  if (t < 1) {
    return {
      get: () => {},
      set: () => {}
    };
  }
  let e = 0;
  let n = new Map();
  let i = new Map();
  const a = (l, u) => {
    n.set(l, u);
    e++;
    if (e > t) {
      e = 0;
      i = n;
      n = new Map();
    }
  };
  return {
    get(l) {
      let u = n.get(l);
      if (u !== undefined) {
        return u;
      }
      if ((u = i.get(l)) !== undefined) {
        a(l, u);
        return u;
      }
    },
    set(l, u) {
      if (n.has(l)) {
        n.set(l, u);
      } else {
        a(l, u);
      }
    }
  };
};
const Sh = "!";
const kh = ":";
const I1 = kh.length;
const j1 = t => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let i = a => {
    const l = [];
    let u = 0;
    let d = 0;
    let f = 0;
    let m;
    for (let _ = 0; _ < a.length; _++) {
      let k = a[_];
      if (u === 0 && d === 0) {
        if (k === kh) {
          l.push(a.slice(f, _));
          f = _ + I1;
          continue;
        }
        if (k === "/") {
          m = _;
          continue;
        }
      }
      if (k === "[") {
        u++;
      } else if (k === "]") {
        u--;
      } else if (k === "(") {
        d++;
      } else if (k === ")") {
        d--;
      }
    }
    const y = l.length === 0 ? a : a.substring(f);
    const g = N1(y);
    const b = g !== y;
    const w = m && m > f ? m - f : undefined;
    return {
      modifiers: l,
      hasImportantModifier: b,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
  if (e) {
    const a = e + kh;
    const l = i;
    i = u => u.startsWith(a) ? l(u.substring(a.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: u,
      maybePostfixModifierPosition: undefined
    };
  }
  if (n) {
    const a = i;
    i = l => n({
      className: l,
      parseClassName: a
    });
  }
  return i;
};
const N1 = t => t.endsWith(Sh) ? t.substring(0, t.length - 1) : t.startsWith(Sh) ? t.substring(1) : t;
const L1 = t => {
  const e = Object.fromEntries(t.orderSensitiveModifiers.map(i => [i, true]));
  return i => {
    if (i.length <= 1) {
      return i;
    }
    const a = [];
    let l = [];
    i.forEach(u => {
      if (u[0] === "[" || e[u]) {
        a.push(...l.sort(), u);
        l = [];
      } else {
        l.push(u);
      }
    });
    a.push(...l.sort());
    return a;
  };
};
const D1 = t => ({
  cache: A1(t.cacheSize),
  parseClassName: j1(t),
  sortModifiers: L1(t),
  ...T1(t)
});
const U1 = /\s+/;
const M1 = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: i,
    getConflictingClassGroupIds: a,
    sortModifiers: l
  } = e;
  const u = [];
  const d = t.trim().split(U1);
  let f = "";
  for (let m = d.length - 1; m >= 0; m -= 1) {
    const y = d[m];
    const {
      isExternal: g,
      modifiers: b,
      hasImportantModifier: w,
      baseClassName: _,
      maybePostfixModifierPosition: k
    } = n(y);
    if (g) {
      f = y + (f.length > 0 ? " " + f : f);
      continue;
    }
    let x = !!k;
    let I = i(x ? _.substring(0, k) : _);
    if (!I) {
      if (!x) {
        f = y + (f.length > 0 ? " " + f : f);
        continue;
      }
      I = i(_);
      if (!I) {
        f = y + (f.length > 0 ? " " + f : f);
        continue;
      }
      x = false;
    }
    const N = l(b).join(":");
    const L = w ? N + Sh : N;
    const B = L + I;
    if (u.includes(B)) {
      continue;
    }
    u.push(B);
    const J = a(I, x);
    for (let Q = 0; Q < J.length; ++Q) {
      const j = J[Q];
      u.push(L + j);
    }
    f = y + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function $1() {
  let t = 0;
  let e;
  let n;
  let i = "";
  while (t < arguments.length) {
    if ((e = arguments[t++]) && (n = Vv(e))) {
      if (i) {
        i += " ";
      }
      i += n;
    }
  }
  return i;
}
const Vv = t => {
  if (typeof t == "string") {
    return t;
  }
  let e;
  let n = "";
  for (let i = 0; i < t.length; i++) {
    if (t[i] && (e = Vv(t[i]))) {
      if (n) {
        n += " ";
      }
      n += e;
    }
  }
  return n;
};
function F1(t, ...e) {
  let n;
  let i;
  let a;
  let l = u;
  function u(f) {
    const m = e.reduce((y, g) => g(y), t());
    n = D1(m);
    i = n.cache.get;
    a = n.cache.set;
    l = d;
    return d(f);
  }
  function d(f) {
    const m = i(f);
    if (m) {
      return m;
    }
    const y = M1(f, n);
    a(f, y);
    return y;
  }
  return function () {
    return l($1.apply(null, arguments));
  };
}
const Pt = t => {
  const e = n => n[t] || [];
  e.isThemeGetter = true;
  return e;
};
const qv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const Kv = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const z1 = /^\d+\/\d+$/;
const B1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const H1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const W1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const V1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const q1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const Zi = t => z1.test(t);
const Fe = t => !!t && !Number.isNaN(Number(t));
const Ss = t => !!t && Number.isInteger(Number(t));
const Dd = t => t.endsWith("%") && Fe(t.slice(0, -1));
const qn = t => B1.test(t);
const K1 = () => true;
const G1 = t => H1.test(t) && !W1.test(t);
const Gv = () => false;
const J1 = t => V1.test(t);
const Q1 = t => q1.test(t);
const Y1 = t => !pe(t) && !me(t);
const X1 = t => xo(t, Yv, Gv);
const pe = t => qv.test(t);
const li = t => xo(t, Xv, G1);
const Ud = t => xo(t, nT, Fe);
const ny = t => xo(t, Jv, Gv);
const Z1 = t => xo(t, Qv, Q1);
const uu = t => xo(t, Zv, J1);
const me = t => Kv.test(t);
const da = t => Ro(t, Xv);
const eT = t => Ro(t, sT);
const sy = t => Ro(t, Jv);
const tT = t => Ro(t, Yv);
const rT = t => Ro(t, Qv);
const cu = t => Ro(t, Zv, true);
const xo = (t, e, n) => {
  const i = qv.exec(t);
  if (i) {
    if (i[1]) {
      return e(i[1]);
    } else {
      return n(i[2]);
    }
  } else {
    return false;
  }
};
const Ro = (t, e, n = false) => {
  const i = Kv.exec(t);
  if (i) {
    if (i[1]) {
      return e(i[1]);
    } else {
      return n;
    }
  } else {
    return false;
  }
};
const Jv = t => t === "position" || t === "percentage";
const Qv = t => t === "image" || t === "url";
const Yv = t => t === "length" || t === "size" || t === "bg-size";
const Xv = t => t === "length";
const nT = t => t === "number";
const sT = t => t === "family-name";
const Zv = t => t === "shadow";
const iT = () => {
  const t = Pt("color");
  const e = Pt("font");
  const n = Pt("text");
  const i = Pt("font-weight");
  const a = Pt("tracking");
  const l = Pt("leading");
  const u = Pt("breakpoint");
  const d = Pt("container");
  const f = Pt("spacing");
  const m = Pt("radius");
  const y = Pt("shadow");
  const g = Pt("inset-shadow");
  const b = Pt("text-shadow");
  const w = Pt("drop-shadow");
  const _ = Pt("blur");
  const k = Pt("perspective");
  const x = Pt("aspect");
  const I = Pt("ease");
  const N = Pt("animate");
  const L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const B = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"];
  const J = () => [...B(), me, pe];
  const Q = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const j = () => ["auto", "contain", "none"];
  const H = () => [me, pe, f];
  const Z = () => [Zi, "full", "auto", ...H()];
  const be = () => [Ss, "none", "subgrid", me, pe];
  const Re = () => ["auto", {
    span: ["full", Ss, me, pe]
  }, Ss, me, pe];
  const Le = () => [Ss, "auto", me, pe];
  const He = () => ["auto", "min", "max", "fr", me, pe];
  const Me = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const Ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const re = () => ["auto", ...H()];
  const ye = () => [Zi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()];
  const U = () => [t, me, pe];
  const se = () => [...B(), sy, ny, {
    position: [me, pe]
  }];
  const Y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const R = () => ["auto", "cover", "contain", tT, X1, {
    size: [me, pe]
  }];
  const z = () => [Dd, da, li];
  const X = () => ["", "none", "full", m, me, pe];
  const ie = () => ["", Fe, da, li];
  const ve = () => ["solid", "dashed", "dotted", "double"];
  const le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const xe = () => [Fe, Dd, sy, ny];
  const je = () => ["", "none", _, me, pe];
  const We = () => ["none", Fe, me, pe];
  const nt = () => ["none", Fe, me, pe];
  const Ar = () => [Fe, me, pe];
  const rt = () => [Zi, "full", ...H()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qn],
      breakpoint: [qn],
      color: [K1],
      container: [qn],
      "drop-shadow": [qn],
      ease: ["in", "out", "in-out"],
      font: [Y1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qn],
      shadow: [qn],
      spacing: ["px", Fe],
      text: [qn],
      "text-shadow": [qn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", Zi, pe, me, x]
      }],
      container: ["container"],
      columns: [{
        columns: [Fe, pe, me, d]
      }],
      "break-after": [{
        "break-after": L()
      }],
      "break-before": [{
        "break-before": L()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      sr: ["sr-only", "not-sr-only"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: J()
      }],
      overflow: [{
        overflow: Q()
      }],
      "overflow-x": [{
        "overflow-x": Q()
      }],
      "overflow-y": [{
        "overflow-y": Q()
      }],
      overscroll: [{
        overscroll: j()
      }],
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: Z()
      }],
      "inset-x": [{
        "inset-x": Z()
      }],
      "inset-y": [{
        "inset-y": Z()
      }],
      start: [{
        start: Z()
      }],
      end: [{
        end: Z()
      }],
      top: [{
        top: Z()
      }],
      right: [{
        right: Z()
      }],
      bottom: [{
        bottom: Z()
      }],
      left: [{
        left: Z()
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [Ss, "auto", me, pe]
      }],
      basis: [{
        basis: [Zi, "full", "auto", d, ...H()]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      flex: [{
        flex: [Fe, Zi, "auto", "initial", "none", pe]
      }],
      grow: [{
        grow: ["", Fe, me, pe]
      }],
      shrink: [{
        shrink: ["", Fe, me, pe]
      }],
      order: [{
        order: [Ss, "first", "last", "none", me, pe]
      }],
      "grid-cols": [{
        "grid-cols": be()
      }],
      "col-start-end": [{
        col: Re()
      }],
      "col-start": [{
        "col-start": Le()
      }],
      "col-end": [{
        "col-end": Le()
      }],
      "grid-rows": [{
        "grid-rows": be()
      }],
      "row-start-end": [{
        row: Re()
      }],
      "row-start": [{
        "row-start": Le()
      }],
      "row-end": [{
        "row-end": Le()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": He()
      }],
      "auto-rows": [{
        "auto-rows": He()
      }],
      gap: [{
        gap: H()
      }],
      "gap-x": [{
        "gap-x": H()
      }],
      "gap-y": [{
        "gap-y": H()
      }],
      "justify-content": [{
        justify: [...Me(), "normal"]
      }],
      "justify-items": [{
        "justify-items": [...Ie(), "normal"]
      }],
      "justify-self": [{
        "justify-self": ["auto", ...Ie()]
      }],
      "align-content": [{
        content: ["normal", ...Me()]
      }],
      "align-items": [{
        items: [...Ie(), {
          baseline: ["", "last"]
        }]
      }],
      "align-self": [{
        self: ["auto", ...Ie(), {
          baseline: ["", "last"]
        }]
      }],
      "place-content": [{
        "place-content": Me()
      }],
      "place-items": [{
        "place-items": [...Ie(), "baseline"]
      }],
      "place-self": [{
        "place-self": ["auto", ...Ie()]
      }],
      p: [{
        p: H()
      }],
      px: [{
        px: H()
      }],
      py: [{
        py: H()
      }],
      ps: [{
        ps: H()
      }],
      pe: [{
        pe: H()
      }],
      pt: [{
        pt: H()
      }],
      pr: [{
        pr: H()
      }],
      pb: [{
        pb: H()
      }],
      pl: [{
        pl: H()
      }],
      m: [{
        m: re()
      }],
      mx: [{
        mx: re()
      }],
      my: [{
        my: re()
      }],
      ms: [{
        ms: re()
      }],
      me: [{
        me: re()
      }],
      mt: [{
        mt: re()
      }],
      mr: [{
        mr: re()
      }],
      mb: [{
        mb: re()
      }],
      ml: [{
        ml: re()
      }],
      "space-x": [{
        "space-x": H()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": H()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [{
        size: ye()
      }],
      w: [{
        w: [d, "screen", ...ye()]
      }],
      "min-w": [{
        "min-w": [d, "screen", "none", ...ye()]
      }],
      "max-w": [{
        "max-w": [d, "screen", "none", "prose", {
          screen: [u]
        }, ...ye()]
      }],
      h: [{
        h: ["screen", ...ye()]
      }],
      "min-h": [{
        "min-h": ["screen", "none", ...ye()]
      }],
      "max-h": [{
        "max-h": ["screen", ...ye()]
      }],
      "font-size": [{
        text: ["base", n, da, li]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: [i, me, Ud]
      }],
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Dd, pe]
      }],
      "font-family": [{
        font: [eT, pe, e]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: [a, me, pe]
      }],
      "line-clamp": [{
        "line-clamp": [Fe, "none", me, Ud]
      }],
      leading: [{
        leading: [l, ...H()]
      }],
      "list-image": [{
        "list-image": ["none", me, pe]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "list-style-type": [{
        list: ["disc", "decimal", "none", me, pe]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "placeholder-color": [{
        placeholder: U()
      }],
      "text-color": [{
        text: U()
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...ve(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: [Fe, "from-font", "auto", me, li]
      }],
      "text-decoration-color": [{
        decoration: U()
      }],
      "underline-offset": [{
        "underline-offset": [Fe, "auto", me, pe]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: H()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", me, pe]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", me, pe]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: se()
      }],
      "bg-repeat": [{
        bg: Y()
      }],
      "bg-size": [{
        bg: R()
      }],
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ss, me, pe],
          radial: ["", me, pe],
          conic: [Ss, me, pe]
        }, rT, Z1]
      }],
      "bg-color": [{
        bg: U()
      }],
      "gradient-from-pos": [{
        from: z()
      }],
      "gradient-via-pos": [{
        via: z()
      }],
      "gradient-to-pos": [{
        to: z()
      }],
      "gradient-from": [{
        from: U()
      }],
      "gradient-via": [{
        via: U()
      }],
      "gradient-to": [{
        to: U()
      }],
      rounded: [{
        rounded: X()
      }],
      "rounded-s": [{
        "rounded-s": X()
      }],
      "rounded-e": [{
        "rounded-e": X()
      }],
      "rounded-t": [{
        "rounded-t": X()
      }],
      "rounded-r": [{
        "rounded-r": X()
      }],
      "rounded-b": [{
        "rounded-b": X()
      }],
      "rounded-l": [{
        "rounded-l": X()
      }],
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      "rounded-se": [{
        "rounded-se": X()
      }],
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      "rounded-es": [{
        "rounded-es": X()
      }],
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      "rounded-br": [{
        "rounded-br": X()
      }],
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      "border-w": [{
        border: ie()
      }],
      "border-w-x": [{
        "border-x": ie()
      }],
      "border-w-y": [{
        "border-y": ie()
      }],
      "border-w-s": [{
        "border-s": ie()
      }],
      "border-w-e": [{
        "border-e": ie()
      }],
      "border-w-t": [{
        "border-t": ie()
      }],
      "border-w-r": [{
        "border-r": ie()
      }],
      "border-w-b": [{
        "border-b": ie()
      }],
      "border-w-l": [{
        "border-l": ie()
      }],
      "divide-x": [{
        "divide-x": ie()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": ie()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [{
        border: [...ve(), "hidden", "none"]
      }],
      "divide-style": [{
        divide: [...ve(), "hidden", "none"]
      }],
      "border-color": [{
        border: U()
      }],
      "border-color-x": [{
        "border-x": U()
      }],
      "border-color-y": [{
        "border-y": U()
      }],
      "border-color-s": [{
        "border-s": U()
      }],
      "border-color-e": [{
        "border-e": U()
      }],
      "border-color-t": [{
        "border-t": U()
      }],
      "border-color-r": [{
        "border-r": U()
      }],
      "border-color-b": [{
        "border-b": U()
      }],
      "border-color-l": [{
        "border-l": U()
      }],
      "divide-color": [{
        divide: U()
      }],
      "outline-style": [{
        outline: [...ve(), "none", "hidden"]
      }],
      "outline-offset": [{
        "outline-offset": [Fe, me, pe]
      }],
      "outline-w": [{
        outline: ["", Fe, da, li]
      }],
      "outline-color": [{
        outline: U()
      }],
      shadow: [{
        shadow: ["", "none", y, cu, uu]
      }],
      "shadow-color": [{
        shadow: U()
      }],
      "inset-shadow": [{
        "inset-shadow": ["none", g, cu, uu]
      }],
      "inset-shadow-color": [{
        "inset-shadow": U()
      }],
      "ring-w": [{
        ring: ie()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: U()
      }],
      "ring-offset-w": [{
        "ring-offset": [Fe, li]
      }],
      "ring-offset-color": [{
        "ring-offset": U()
      }],
      "inset-ring-w": [{
        "inset-ring": ie()
      }],
      "inset-ring-color": [{
        "inset-ring": U()
      }],
      "text-shadow": [{
        "text-shadow": ["none", b, cu, uu]
      }],
      "text-shadow-color": [{
        "text-shadow": U()
      }],
      opacity: [{
        opacity: [Fe, me, pe]
      }],
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      "bg-blend": [{
        "bg-blend": le()
      }],
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      "mask-image-linear-pos": [{
        "mask-linear": [Fe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": xe()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": xe()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": U()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": xe()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": xe()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": U()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": xe()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": xe()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": U()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": xe()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": xe()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": U()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": xe()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": xe()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": U()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": xe()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": xe()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": U()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": xe()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": xe()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": U()
      }],
      "mask-image-radial": [{
        "mask-radial": [me, pe]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": xe()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": xe()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": B()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Fe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": xe()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": xe()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": U()
      }],
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      "mask-position": [{
        mask: se()
      }],
      "mask-repeat": [{
        mask: Y()
      }],
      "mask-size": [{
        mask: R()
      }],
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      "mask-image": [{
        mask: ["none", me, pe]
      }],
      filter: [{
        filter: ["", "none", me, pe]
      }],
      blur: [{
        blur: je()
      }],
      brightness: [{
        brightness: [Fe, me, pe]
      }],
      contrast: [{
        contrast: [Fe, me, pe]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", w, cu, uu]
      }],
      "drop-shadow-color": [{
        "drop-shadow": U()
      }],
      grayscale: [{
        grayscale: ["", Fe, me, pe]
      }],
      "hue-rotate": [{
        "hue-rotate": [Fe, me, pe]
      }],
      invert: [{
        invert: ["", Fe, me, pe]
      }],
      saturate: [{
        saturate: [Fe, me, pe]
      }],
      sepia: [{
        sepia: ["", Fe, me, pe]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none", me, pe]
      }],
      "backdrop-blur": [{
        "backdrop-blur": je()
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [Fe, me, pe]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [Fe, me, pe]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Fe, me, pe]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Fe, me, pe]
      }],
      "backdrop-invert": [{
        "backdrop-invert": ["", Fe, me, pe]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [Fe, me, pe]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [Fe, me, pe]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Fe, me, pe]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": H()
      }],
      "border-spacing-x": [{
        "border-spacing-x": H()
      }],
      "border-spacing-y": [{
        "border-spacing-y": H()
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", me, pe]
      }],
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      duration: [{
        duration: [Fe, "initial", me, pe]
      }],
      ease: [{
        ease: ["linear", "initial", I, me, pe]
      }],
      delay: [{
        delay: [Fe, me, pe]
      }],
      animate: [{
        animate: ["none", N, me, pe]
      }],
      backface: [{
        backface: ["hidden", "visible"]
      }],
      perspective: [{
        perspective: [k, me, pe]
      }],
      "perspective-origin": [{
        "perspective-origin": J()
      }],
      rotate: [{
        rotate: We()
      }],
      "rotate-x": [{
        "rotate-x": We()
      }],
      "rotate-y": [{
        "rotate-y": We()
      }],
      "rotate-z": [{
        "rotate-z": We()
      }],
      scale: [{
        scale: nt()
      }],
      "scale-x": [{
        "scale-x": nt()
      }],
      "scale-y": [{
        "scale-y": nt()
      }],
      "scale-z": [{
        "scale-z": nt()
      }],
      "scale-3d": ["scale-3d"],
      skew: [{
        skew: Ar()
      }],
      "skew-x": [{
        "skew-x": Ar()
      }],
      "skew-y": [{
        "skew-y": Ar()
      }],
      transform: [{
        transform: [me, pe, "", "none", "gpu", "cpu"]
      }],
      "transform-origin": [{
        origin: J()
      }],
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      translate: [{
        translate: rt()
      }],
      "translate-x": [{
        "translate-x": rt()
      }],
      "translate-y": [{
        "translate-y": rt()
      }],
      "translate-z": [{
        "translate-z": rt()
      }],
      "translate-none": ["translate-none"],
      accent: [{
        accent: U()
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      "caret-color": [{
        caret: U()
      }],
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", me, pe]
      }],
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": H()
      }],
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      "scroll-my": [{
        "scroll-my": H()
      }],
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      "scroll-me": [{
        "scroll-me": H()
      }],
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      "scroll-p": [{
        "scroll-p": H()
      }],
      "scroll-px": [{
        "scroll-px": H()
      }],
      "scroll-py": [{
        "scroll-py": H()
      }],
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      "scroll-pl": [{
        "scroll-pl": H()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", me, pe]
      }],
      fill: [{
        fill: ["none", ...U()]
      }],
      "stroke-w": [{
        stroke: [Fe, da, li, Ud]
      }],
      stroke: [{
        stroke: ["none", ...U()]
      }],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
const oT = F1(iT);
function iy(...t) {
  return oT(R1(t));
}
const aT = "918796418998";
function lT(t) {
  return `https://wa.me/${aT}?text=${encodeURIComponent(t)}`;
}
const ew = "dNgm56lQyYw";
const PT = `https://www.youtube.com/watch?v=${ew}`;
const OT = `https://img.youtube.com/vi/${ew}/hqdefault.jpg`;
const uT = lT("Hi! I'd like to know more about Gehna Photo.");
function _Component17() {
  if (window.location.pathname.startsWith("/admin")) {
    return null;
  } else {
    return <_Component14 order={_1.whatsapp}><a href={uT} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={iy(E1, "justify-center gap-2.5 border border-line bg-canvas text-ink-soft", "min-w-11 px-0 sm:min-w-0 sm:px-4", "hover:border-[#25D366] hover:bg-[#25D366] hover:text-canvas")}><svg className="size-[18px] shrink-0 text-[#25D366] transition-colors duration-150 ease-move group-hover:text-canvas" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A10.05 10.05 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.34 5L2 22l5.13-1.34A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.68-1.04-5.2-2.95-7.09ZM12 20.13a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.05.8.81-2.97-.19-.31A8.13 8.13 0 1 1 20.13 12 8.14 8.14 0 0 1 12 20.13Zm4.47-6.1c-.25-.12-1.45-.71-1.68-.79-.22-.08-.39-.12-.55.12-.16.25-.62.79-.76.95-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" /></svg><span className={iy(x1, "hidden sm:inline")}>WhatsApp</span></a></_Component14>;
  }
}
function _Component18() {
  A.useEffect(() => {
    Kg();
    return Yg.subscribe(() => Kg());
  }, []);
  return <q.Fragment><_Component15 /><_Component16 router={Yg} /><_Component17 /><UR /></q.Fragment>;
}
function _Component20() {
  return <div className="min-h-screen bg-[#ffffff] flex items-center justify-center p-8"><div className="max-w-md text-center space-y-4"><h1 className="font-['Cormorant_Garamond',serif] font-bold text-[28px] text-[#7a6b2e]">Setup required</h1><p className="font-['Inter',sans-serif] text-[14px] text-[#5c605d] leading-relaxed">Add these environment variables in your hosting dashboard (Vercel → Settings → Environment Variables), then redeploy:</p><ul className="font-['Inter',sans-serif] text-[13px] text-[#2f3331] text-left list-disc pl-6 space-y-1"><li><code>VITE_SUPABASE_URL</code></li><li><code>VITE_SUPABASE_KEY</code></li><li><code>VITE_API_URL</code> (your backend URL)</li><li><code>VITE_RAZORPAY_KEY_ID</code> (for payments)</li></ul></div></div>;
}
ZR();
q0.createRoot(document.getElementById("root")).render(xu ? <Sb client={mu}><_Component19><_Component18 /></_Component19></Sb> : <_Component20 />);
export { vh as A, ek as B, CT as C, Mv as D, Dv as E, _Component14 as F, ET as G, pT as H, _b as I, Ru as J, yT as K, Fh as L, TT as M, gT as N, _S as O, R1 as P, Si as Q, PT as T, Pn as a, n1 as b, iy as c, ST as d, RT as e, _1 as f, x1 as g, E1 as h, xu as i, q as j, kT as k, $R as l, vT as m, bT as n, OT as o, s1 as p, Uv as q, A as r, Cs as s, xT as t, Ha as u, mu as v, lT as w, _T as x, wT as y, xR as z };
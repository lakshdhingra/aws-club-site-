import { n as e, r as t, t as n } from "./index-DTYg07Cs.js";
var r = t(e(), 1);
function i(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function a(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var o = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: { lineHeight: `` },
  },
  s = { duration: 0.5, overwrite: !1, delay: 0 },
  c,
  l,
  u,
  d = 1e8,
  f = 1 / d,
  p = Math.PI * 2,
  m = p / 4,
  h = 0,
  g = Math.sqrt,
  _ = Math.cos,
  v = Math.sin,
  y = function (e) {
    return typeof e == `string`;
  },
  b = function (e) {
    return typeof e == `function`;
  },
  x = function (e) {
    return typeof e == `number`;
  },
  S = function (e) {
    return e === void 0;
  },
  C = function (e) {
    return typeof e == `object`;
  },
  w = function (e) {
    return e !== !1;
  },
  T = function () {
    return typeof window < `u`;
  },
  E = function (e) {
    return b(e) || y(e);
  },
  D =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  O = Array.isArray,
  k = /random\([^)]+\)/g,
  ee = /,\s*/g,
  A = /(?:-?\.?\d|\.)+/gi,
  j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  M = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ne = /[+-]=-?[.\d]+/,
  re = /[^,'"\[\]\s]+/gi,
  ie = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  N,
  ae,
  P,
  oe,
  se = {},
  ce = {},
  le,
  ue = function (e) {
    return (ce = Be(e, se)) && ir;
  },
  de = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  fe = function (e, t) {
    return !t && console.warn(e);
  },
  pe = function (e, t) {
    return (e && (se[e] = t) && ce && (ce[e] = t)) || se;
  },
  me = function () {
    return 0;
  },
  he = { suppressEvents: !0, isStart: !0, kill: !1 },
  ge = { suppressEvents: !0, kill: !1 },
  _e = { suppressEvents: !0 },
  ve = {},
  ye = [],
  be = {},
  xe,
  Se = {},
  Ce = {},
  we = 30,
  Te = [],
  Ee = ``,
  De = function (e) {
    var t = e[0],
      n,
      r;
    if ((C(t) || b(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Te.length; r-- && !Te[r].targetTest(t););
      n = Te[r];
    }
    for (r = e.length; r--;)
      (e[r] && (e[r]._gsap || (e[r]._gsap = new mn(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  Oe = function (e) {
    return e._gsap || De(Ct(e))[0]._gsap;
  },
  ke = function (e, t, n) {
    return (n = e[t]) && b(n)
      ? e[t]()
      : (S(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Ae = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  F = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  I = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  je = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  Me = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
    return r < n;
  },
  Ne = function () {
    var e = ye.length,
      t = ye.slice(0),
      n,
      r;
    for (be = {}, ye.length = 0, n = 0; n < e; n++)
      ((r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  Pe = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  Fe = function (e, t, n, r) {
    (ye.length && !l && Ne(),
      e.render(t, n, r || !!(l && t < 0 && Pe(e))),
      ye.length && !l && Ne());
  },
  Ie = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(re).length < 2
      ? t
      : y(e)
        ? e.trim()
        : e;
  },
  Le = function (e) {
    return e;
  },
  Re = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  ze = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  Be = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Ve = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = C(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  He = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  Ue = function (e) {
    var t = e.parent || N,
      n = e.keyframes ? ze(O(e.keyframes)) : Re;
    if (w(e.inherit))
      for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  We = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
    return n < 0;
  },
  Ge = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  Ke = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  qe = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  Je = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  Ye = function (e) {
    for (var t = e.parent; t && t.parent;)
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  Xe = function (e, t, n, r) {
    return (
      e._startAt &&
      (l
        ? e._startAt.revert(ge)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  Ze = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  Qe = function (e) {
    return e._repeat ? $e(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  $e = function (e, t) {
    var n = Math.floor((e = I(e / t)));
    return e && n === e ? n - 1 : n;
  },
  et = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  tt = function (e) {
    return (e._end = I(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || f) || 0),
    ));
  },
  nt = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = I(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        tt(e),
        n._dirty || Je(n, e)),
      e
    );
  },
  rt = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = et(e.rawTime(), t)),
        (!t._dur || _t(0, t.totalDuration(), n) - t._tTime > f) &&
          t.render(n, !0)),
      Je(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;)
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -f;
    }
  },
  it = function (e, t, n, r) {
    return (
      t.parent && qe(t),
      (t._start = I(
        (x(n) ? n : n || e !== N ? mt(e, n, t) : e._time) + t._delay,
      )),
      (t._end = I(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      Ge(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      ct(t) || (e._recent = t),
      r || rt(e, t),
      e._ts < 0 && nt(e, e._tTime),
      e
    );
  },
  at = function (e, t) {
    return (
      (se.ScrollTrigger || de(`scrollTrigger`, t)) &&
      se.ScrollTrigger.create(t, e)
    );
  },
  ot = function (e, t, n, r, i) {
    if ((Cn(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !l &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      xe !== en.frame
    )
      return (ye.push(e), (e._lazy = [i, r]), 1);
  },
  st = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  ct = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  lt = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && st(e) && !(!e._initted && ct(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !ct(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      u,
      d;
    if (
      (o &&
        e._repeat &&
        ((s = _t(0, e._tDur, t)),
        (u = $e(s, o)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== $e(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== i || l || r || e._zTime === f || (!t && e._zTime))
    ) {
      if (!e._initted && ot(e, t, r, n, s)) return;
      for (
        d = e._zTime,
          e._zTime = t || (n ? f : 0),
          n ||= t && !d,
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = s,
          c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && Xe(e, t, n, !0),
        e._onUpdate && !n && Bt(e, `onUpdate`),
        s && e._repeat && !n && e.parent && Bt(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && qe(e, 1),
          !n &&
            !l &&
            (Bt(e, a ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  ut = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n;) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n;) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  dt = function (e, t, n, r) {
    var i = e._repeat,
      a = I(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : I(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && nt(e, (e._tTime = e._tDur * o)),
      e.parent && tt(e),
      n || Je(e.parent, e),
      e
    );
  },
  ft = function (e) {
    return e instanceof gn ? Je(e) : dt(e, e._dur);
  },
  pt = { _start: 0, endTime: me, totalDuration: me },
  mt = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || pt,
      o = t.duration() >= d ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return y(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
            ? (n in i || (i[n] = o), i[n])
            : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
              l && r && (c = (c / 100) * (O(r) ? r[0] : r).totalDuration()),
              s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
        ? o
        : +n;
  },
  ht = function (e, t, n) {
    var r = x(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o);)
        ((o = s.vars.defaults || {}), (s = w(s.vars.inherit) && s.parent));
      ((a.immediateRender = w(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new An(t[0], a, t[i + 1]);
  },
  gt = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  _t = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  vt = function (e, t) {
    return !y(e) || !(t = ie.exec(e)) ? `` : t[1];
  },
  yt = function (e, t, n) {
    return gt(n, function (n) {
      return _t(e, t, n);
    });
  },
  bt = [].slice,
  xt = function (e, t) {
    return (
      e &&
      C(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && C(e[0]))) &&
      !e.nodeType &&
      e !== ae
    );
  },
  St = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (y(e) && !t) || xt(e, 1)
          ? (r = n).push.apply(r, Ct(e))
          : n.push(e);
      }) || n
    );
  },
  Ct = function (e, t, n) {
    return u && !t && u.selector
      ? u.selector(e)
      : y(e) && !n && (P || !tn())
        ? bt.call((t || oe).querySelectorAll(e), 0)
        : O(e)
          ? St(e, n)
          : xt(e)
            ? bt.call(e, 0)
            : e
              ? [e]
              : [];
  },
  wt = function (e) {
    return (
      (e = Ct(e)[0] || fe(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Ct(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? fe(`Invalid scope`) || oe.createElement(`div`)
              : e,
        );
      }
    );
  },
  Tt = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Et = function (e) {
    if (b(e)) return e;
    var t = C(e) ? e : { each: e },
      n = ln(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      y(r)
        ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, f) {
        var p = (f || t).length,
          m = a[p],
          h,
          _,
          v,
          y,
          b,
          x,
          S,
          C,
          w;
        if (!m) {
          if (((w = t.grid === `auto` ? 0 : (t.grid || [1, d])[1]), !w)) {
            for (
              S = -d;
              S < (S = f[w++].getBoundingClientRect().left) && w < p;
            );
            w < p && w--;
          }
          for (
            m = a[p] = [],
              h = s ? Math.min(w, p) * l - 0.5 : r % w,
              _ = w === d ? 0 : s ? (p * u) / w - 0.5 : (r / w) | 0,
              S = 0,
              C = d,
              x = 0;
            x < p;
            x++
          )
            ((v = (x % w) - h),
              (y = _ - ((x / w) | 0)),
              (m[x] = b = c ? Math.abs(c === `y` ? y : v) : g(v * v + y * y)),
              b > S && (S = b),
              b < C && (C = b));
          (r === `random` && Tt(m),
            (m.max = S - C),
            (m.min = C),
            (m.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > p
                    ? p - 1
                    : c
                      ? c === `y`
                        ? p / w
                        : w
                      : Math.max(w, p / w)) ||
                0) * (r === `edges` ? -1 : 1)),
            (m.b = p < 0 ? i - p : i),
            (m.u = vt(t.amount || t.each) || 0),
            (n = n && p < 0 ? cn(n) : n));
        }
        return (
          (p = (m[e] - m.min) / m.max || 0),
          I(m.b + (n ? n(p) : p) * m.v) + m.u
        );
      }
    );
  },
  Dt = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = I(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (x(n) ? 0 : vt(n));
    };
  },
  Ot = function (e, t) {
    var n = O(e),
      r,
      i;
    return (
      !n &&
        C(e) &&
        ((r = n = e.radius || d),
        e.values
          ? ((e = Ct(e.values)), (i = !x(e[0])) && (r *= r))
          : (e = Dt(e.increment))),
      gt(
        t,
        n
          ? b(e)
            ? function (t) {
                return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = d,
                    s = 0,
                    c = e.length,
                    l,
                    u;
                  c--;
                )
                  (i
                    ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                    : (l = Math.abs(e[c] - n)),
                    l < o && ((o = l), (s = c)));
                return (
                  (s = !r || o <= r ? e[s] : t),
                  i || s === t || x(t) ? s : s + vt(t)
                );
              }
          : Dt(e),
      )
    );
  },
  kt = function (e, t, n, r) {
    return gt(O(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return O(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r,
            ) / r;
    });
  },
  At = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  jt = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || vt(n));
    };
  },
  Mt = function (e, t, n) {
    return Lt(e, t, 0, 1, n);
  },
  Nt = function (e, t, n) {
    return gt(n, function (n) {
      return e[~~t(n)];
    });
  },
  Pt = function e(t, n, r) {
    var i = n - t;
    return O(t)
      ? Nt(t, e(0, t.length), n)
      : gt(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  Ft = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return O(t)
      ? Nt(t, e(0, t.length - 1), n)
      : gt(r, function (e) {
          return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
        });
  },
  It = function (e) {
    return e.replace(k, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(ee);
      return kt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  Lt = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return gt(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  Rt = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = y(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((t = { p: t }), (n = { p: n }));
      else if (O(t) && !O(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = Be(O(t) ? [] : {}, t));
      if (!u) {
        for (c in n) vn.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return zn(e, s) || (o ? t.p : t);
        };
      }
    }
    return gt(r, a);
  },
  zt = function (e, t, n) {
    var r = e.labels,
      i = d,
      a,
      o,
      s;
    for (a in r)
      ((o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
    return s;
  },
  Bt = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = u,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && ye.length && Ne(),
        o && (u = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (u = a),
        l
      );
  },
  Vt = function (e) {
    return (
      qe(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!l),
      e.progress() < 1 && Bt(e, `onInterrupt`),
      e
    );
  },
  Ht,
  Ut = [],
  Wt = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), T() || e.headless)) {
        var t = e.name,
          n = b(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: me,
            render: zn,
            add: vn,
            kill: Vn,
            modifier: Bn,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Fn,
            aliases: {},
            register: 0,
          };
        if ((tn(), e !== r)) {
          if (Se[t]) return;
          (Re(r, Re(He(e, i), a)),
            Be(r.prototype, Be(i, He(e, a))),
            (Se[(r.prop = t)] = r),
            e.targetTest && (Te.push(r), (ve[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`));
        }
        (pe(t, r), e.register && e.register(ir, r, Wn));
      } else Ut.push(e);
  },
  L = 255,
  Gt = {
    aqua: [0, L, L],
    lime: [0, L, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, L],
    navy: [0, 0, 128],
    white: [L, L, L],
    olive: [128, 128, 0],
    yellow: [L, L, 0],
    orange: [L, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [L, 0, 0],
    pink: [L, 192, 203],
    cyan: [0, L, L],
    transparent: [L, L, L, 0],
  },
  Kt = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        L +
        0.5) |
        0
    );
  },
  qt = function (e, t, n) {
    var r = e ? (x(e) ? [e >> 16, (e >> 8) & L, e & L] : 0) : Gt.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), Gt[e]))
        r = Gt[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              `#` +
              i +
              i +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & L, r & L, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & L, e & L]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(A)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Kt(s + 1 / 3, i, a)),
            (r[1] = Kt(s, i, a)),
            (r[2] = Kt(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`))
          return ((r = e.match(j)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(A) || Gt.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / L),
        (a = r[1] / L),
        (o = r[2] / L),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Jt = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(Xt).forEach(function (e) {
        var i = e.match(M) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  Yt = function (e, t, n) {
    var r = ``,
      i = (e + r).match(Xt),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = qt(e, t, 1)) &&
          a +
            (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
            `)`
        );
      })),
      n && ((l = Jt(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(Xt, `1`).split(M), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(Xt), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  Xt = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in Gt) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  Zt = /hsl[a]?\(/,
  Qt = function (e) {
    var t = e.join(` `),
      n;
    if (((Xt.lastIndex = 0), Xt.test(t)))
      return (
        (n = Zt.test(t)),
        (e[1] = Yt(e[1], n)),
        (e[0] = Yt(e[0], n, Jt(e[1]))),
        !0
      );
  },
  $t,
  en = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          le &&
            (!P &&
              T() &&
              ((ae = P = window),
              (oe = ae.document || {}),
              (se.gsap = ir),
              (ae.gsapVersions || (ae.gsapVersions = [])).push(ir.version),
              ue(ce || ae.GreenSockGlobals || (!ae.gsap && ae) || {}),
              Ut.forEach(Wt)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            ($t = 1),
            m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), ($t = 0), (l = me));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                (e(t, n, i, a), d.remove(r));
              }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), tn(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  tn = function () {
    return !$t && en.wake();
  },
  R = {},
  nn = /^[\d.\-M][\d.\-,\s]/,
  rn = /["']/g,
  an = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(`:`),
        r = n[0],
        i = 1,
        a = n.length,
        o,
        s,
        c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(rn, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  on = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  sn = function (e) {
    var t = (e + ``).split(`(`),
      n = R[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf(`{`) ? [an(t[1])] : on(e).split(`,`).map(Ie),
        )
      : R._CE && nn.test(e)
        ? R._CE(``, e)
        : n;
  },
  cn = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  ln = function (e, t) {
    return (e && (b(e) ? e : R[e] || sn(e))) || t;
  },
  un = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      Ae(e, function (e) {
        for (var t in ((R[e] = se[e] = i), (R[(a = e.toLowerCase())] = n), i))
          R[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = R[e + `.` + t] = i[t];
      }),
      i
    );
  },
  dn = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  fn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / p) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * v((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
                return 1 - s(1 - e);
              }
            : dn(s);
    return (
      (a = p / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  pn = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
                return 1 - r(1 - e);
              }
            : dn(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(Ae(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  un(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (R.Linear.easeNone = R.none = R.Linear.easeIn),
  un(`Elastic`, fn(`in`), fn(`out`), fn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    un(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  un(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  un(`Circ`, function (e) {
    return -(g(1 - e * e) - 1);
  }),
  un(`Sine`, function (e) {
    return e === 1 ? 1 : -_(e * m) + 1;
  }),
  un(`Back`, pn(`in`), pn(`out`), pn()),
  (R.SteppedEase =
    R.steps =
    se.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - f;
          return function (e) {
            return (((r * _t(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (s.ease = R[`quad.out`]),
  Ae(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (Ee += e + `,` + e + `Params,`);
    },
  ));
var mn = function (e, t) {
    ((this.id = h++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : ke),
      (this.set = t ? t.getSetter : Fn));
  },
  hn = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        dt(this, +e.duration, 1, 1),
        (this.data = e.data),
        u && ((this._ctx = u), u.data.push(this)),
        $t || en.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            dt(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((tn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (nt(this, e), !n._dp || n.parent || rt(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            it(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === f) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), Fe(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + Qe(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                Qe(this),
              t,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? $e(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -f ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? et(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -f ? 0 : this._rts),
          this.totalTime(
            _t(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1,
          ),
          tt(this),
          Ye(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (tn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== f &&
                      (this._tTime -= f),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = I(e);
          var t = this.parent || this._dp;
          return (
            t &&
              (t._sort || !this.parent) &&
              it(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (w(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? et(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = _e);
        var t = l;
        return (
          (l = e),
          Pe(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (l = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), ft(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), ft(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(mt(this, e), w(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, w(t)),
          this._dur || (this._zTime = -f),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -f : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -f), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - f)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + `Params`] = n),
                e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = b(e) ? e : Le,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                b(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        Vt(this);
      }),
      e
    );
  })();
Re(hn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -f,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var gn = (function (e) {
  a(t, e);
  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = w(t.sortChildren)),
      N && it(t.parent || N, i(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && at(i(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return (ht(0, arguments, this), this);
    }),
    (n.from = function (e, t, n) {
      return (ht(1, arguments, this), this);
    }),
    (n.fromTo = function (e, t, n, r) {
      return (ht(2, arguments, this), this);
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        Ue(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new An(e, t, mt(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return it(this, An.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new An(e, n, mt(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (Ue(n).immediateRender = w(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (Ue(r).immediateRender = w(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : I(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        u,
        d,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x;
      if (
        (this !== N && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)
      ) {
        if (
          (r !== this._time &&
            a &&
            ((o += this._time - r), (e += this._time - r)),
          (c = o),
          (v = this._start),
          (_ = this._ts),
          (h = !_),
          s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((b = this._yoyo),
            (m = a + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(m * 100 + e, t, n);
          if (
            ((c = I(o % m)),
            o === i
              ? ((p = this._repeat), (c = a))
              : ((y = I(o / m)),
                (p = ~~y),
                p && p === y && ((c = a), p--),
                c > a && (c = a)),
            (y = $e(this._tTime, m)),
            !r &&
              this._tTime &&
              y !== p &&
              this._tTime - y * m - this._dur <= 0 &&
              (y = p),
            b && p & 1 && ((c = a - c), (x = 1)),
            p !== y && !this._lock)
          ) {
            var S = b && y & 1,
              C = S === (b && p & 1);
            if (
              (p < y && (S = !S),
              (r = S ? 0 : o % a ? a : o),
              (this._lock = 1),
              (this.render(r || (x ? 0 : I(p * m)), t, !a)._lock = 0),
              (this._tTime = o),
              !t && this.parent && Bt(this, `onRepeat`),
              this.vars.repeatRefresh &&
                !x &&
                ((this.invalidate()._lock = 1), (y = p)),
              (r && r !== this._time) ||
                h !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                (i = this._tDur),
                C &&
                  ((this._lock = 2),
                  (r = S ? a : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !h))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((g = ut(this, I(r), I(c))), g && (o -= c - (c = g._start))),
          (this._tTime = o),
          (this._time = c),
          (this._act = !!_),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && o && a && !t && !y && (Bt(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (u = this._first; u;) {
            if (
              ((d = u._next), (u._act || c >= u._start) && u._ts && g !== u)
            ) {
              if (u.parent !== this) return this.render(e, t, n);
              if (
                (u.render(
                  u._ts > 0
                    ? (c - u._start) * u._ts
                    : (u._dirty ? u.totalDuration() : u._tDur) +
                        (c - u._start) * u._ts,
                  t,
                  n,
                ),
                c !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), d && (o += this._zTime = -f));
                break;
              }
            }
            u = d;
          }
        else {
          u = this._last;
          for (var w = e < 0 ? e : c; u;) {
            if (((d = u._prev), (u._act || w <= u._end) && u._ts && g !== u)) {
              if (u.parent !== this) return this.render(e, t, n);
              if (
                (u.render(
                  u._ts > 0
                    ? (w - u._start) * u._ts
                    : (u._dirty ? u.totalDuration() : u._tDur) +
                        (w - u._start) * u._ts,
                  t,
                  n || (l && Pe(u)),
                ),
                c !== this._time || (!this._ts && !h))
              ) {
                ((g = 0), d && (o += this._zTime = w ? -f : f));
                break;
              }
            }
            u = d;
          }
        }
        if (
          g &&
          !t &&
          (this.pause(),
          (g.render(c >= r ? 0 : -f)._zTime = c >= r ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), tt(this), this.render(e, t, n));
        (this._onUpdate && !t && Bt(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
            (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !a) &&
                ((o === i && this._ts > 0) || (!o && this._ts < 0)) &&
                qe(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (o || r || !i) &&
                (Bt(
                  this,
                  o === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                  !0,
                ),
                this._prom &&
                  !(o < i && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((x(t) || (t = mt(this, t, e)), !(e instanceof hn))) {
        if (O(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (y(e)) return this.addLabel(e, t);
        if (b(e)) e = An.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : it(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -d));
      for (var i = [], a = this._first; a;)
        (a._start >= r &&
          (a instanceof An
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return y(e)
        ? this.removeLabel(e)
        : b(e)
          ? this.killTweensOf(e)
          : (e.parent === this && Ke(this, e),
            e === this._recent && (this._recent = this._last),
            Je(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = I(
              en.time -
                (this._ts > 0
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts),
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return ((this.labels[e] = mt(this, t)), this);
    }),
    (n.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (n.addPause = function (e, t, n) {
      var r = An.delayedCall(0, t || me, n);
      return (
        (r.data = `isPause`),
        (this._hasPause = 1),
        it(this, r, mt(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = mt(this, e); t;)
        (t._start === e && t.data === `isPause` && qe(t), (t = t._next));
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--;)
        xn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = Ct(e), i = this._first, a = x(t), o; i;)
        (i instanceof An
          ? Me(i._targets, r) &&
            (a
              ? (!xn || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = mt(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = An.to(
          n,
          Re(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale(),
                ) ||
                f,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                        n.timeScale(),
                    );
                  (u._dur !== e && dt(u, e, 0, 1).render(u._time, !0, !0),
                    (l = 1));
                }
                o && o.apply(u, s || []);
              },
            },
            t,
          ),
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, Re({ startAt: { time: mt(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), zt(this, mt(this, e)));
    }),
    (n.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), zt(this, mt(this, e), 1));
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + f);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = I(e); r;)
        (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return Je(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t;) ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        Je(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = d,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (s = n.parent; r;)
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (it(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                ((n._start += I(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (dt(n, n === N && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((N._ts && (Fe(N, et(e, N)), (xe = en.frame)), en.frame >= we)) {
        we += o.autoSleep || 120;
        var t = N._first;
        if ((!t || !t._ts) && o.autoSleep && en._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || en.sleep();
        }
      }
    }),
    t
  );
})(hn);
Re(gn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var _n = function (e, t, n, r, i, a, o) {
    var s = new Wn(this._pt, e, t, 0, 1, Rn, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = It(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(te) || [];
      (u = te.exec(r));
    )
      ((p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? je(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = te.lastIndex)));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (ne.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  vn = function (e, t, n, r, i, a, s, c, l, u) {
    b(r) && (r = r(i || 0, e, a));
    var d = e[t],
      f =
        n === `get`
          ? b(d)
            ? l
              ? e[
                  t.indexOf(`set`) || !b(e[`get` + t.substr(3)])
                    ? t
                    : `get` + t.substr(3)
                ](l)
              : e[t]()
            : d
          : n,
      p = b(d) ? (l ? Nn : Mn) : jn,
      m;
    if (
      (y(r) &&
        (~r.indexOf(`random(`) && (r = It(r)),
        r.charAt(1) === `=` &&
          ((m = je(f, r) + (vt(f) || 0)), (m || m === 0) && (r = m))),
      !u || f !== r || Sn)
    )
      return !isNaN(f * r) && r !== ``
        ? ((m = new Wn(
            this._pt,
            e,
            t,
            +f || 0,
            r - (f || 0),
            typeof d == `boolean` ? Ln : In,
            0,
            p,
          )),
          l && (m.fp = l),
          s && m.modifier(s, this, e),
          (this._pt = m))
        : (!d && !(t in e) && de(t, r),
          _n.call(this, e, t, f, r, p, c || o.stringFilter, l));
  },
  yn = function (e, t, n, r, i) {
    if (
      (b(e) && (e = Dn(e, i, t, n, r)),
      !C(e) || (e.style && e.nodeType) || O(e) || D(e))
    )
      return y(e) ? Dn(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = Dn(e[o], i, t, n, r);
    return a;
  },
  bn = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      Se[e] &&
      (o = new Se[e]()).init(
        i,
        o.rawVars ? t[e] : yn(t[e], r, i, a, n),
        n,
        r,
        a,
      ) !== !1 &&
      ((n._pt = s = new Wn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
      n !== Ht)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
        c[o._props[l]] = s;
    return o;
  },
  xn,
  Sn,
  Cn = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      u = i.immediateRender,
      p = i.lazy,
      m = i.onUpdate,
      h = i.runBackwards,
      g = i.yoyoEase,
      _ = i.keyframes,
      v = i.autoRevert,
      y = t._dur,
      b = t._startAt,
      x = t._targets,
      S = t.parent,
      C = S && S.data === `nested` ? S.vars.targets : x,
      T = t._overwrite === `auto` && !c,
      E = t.timeline,
      D = i.easeReverse || g,
      O,
      k,
      ee,
      A,
      j,
      M,
      te,
      ne,
      re,
      ie,
      ae,
      P,
      oe;
    if (
      (E && (!_ || !a) && (a = `none`),
      (t._ease = ln(a, s.ease)),
      (t._rEase = D && (ln(D) || t._ease)),
      (t._from = !E && !!i.runBackwards),
      t._from && (t.ratio = 1),
      !E || (_ && !i.stagger))
    ) {
      if (
        ((ne = x[0] ? Oe(x[0]).harness : 0),
        (P = ne && i[ne.prop]),
        (O = He(i, ve)),
        b &&
          (b._zTime < 0 && b.progress(1),
          n < 0 && h && u && !v ? b.render(-1, !0) : b.revert(h && y ? ge : he),
          (b._lazy = 0)),
        o)
      ) {
        if (
          (qe(
            (t._startAt = An.set(
              x,
              Re(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: S,
                  immediateRender: !0,
                  lazy: !b && w(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return Bt(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (l || (!u && !v)) && t._startAt.revert(ge),
          u && y && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (h && y && !b) {
        if (
          (n && (u = !1),
          (ee = Re(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: u && !b && w(p),
              immediateRender: u,
              stagger: 0,
              parent: S,
            },
            O,
          )),
          P && (ee[ne.prop] = P),
          qe((t._startAt = An.set(x, ee))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (l ? t._startAt.revert(ge) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !u)
        )
          e(t._startAt, f, f);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, p = (y && w(p)) || (p && !y), k = 0;
        k < x.length;
        k++
      ) {
        if (
          ((j = x[k]),
          (te = j._gsap || De(x)[k]._gsap),
          (t._ptLookup[k] = ie = {}),
          be[te.id] && ye.length && Ne(),
          (ae = C === x ? k : C.indexOf(j)),
          ne &&
            (re = new ne()).init(j, P || O, t, ae, C) !== !1 &&
            ((t._pt = A =
              new Wn(t._pt, j, re.name, 0, 1, re.render, re, 0, re.priority)),
            re._props.forEach(function (e) {
              ie[e] = A;
            }),
            re.priority && (M = 1)),
          !ne || P)
        )
          for (ee in O)
            Se[ee] && (re = bn(ee, O, t, ae, j, C))
              ? re.priority && (M = 1)
              : (ie[ee] = A =
                  vn.call(t, j, ee, `get`, O[ee], ae, C, 0, i.stringFilter));
        (t._op && t._op[k] && t.kill(j, t._op[k]),
          T &&
            t._pt &&
            ((xn = t),
            N.killTweensOf(j, ie, t.globalTime(n)),
            (oe = !t.parent),
            (xn = 0)),
          t._pt && p && (be[te.id] = 1));
      }
      (M && Un(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = m),
      (t._initted = (!t._op || t._pt) && !oe),
      _ && n <= 0 && E.render(d, !0, !0));
  },
  wn = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
        if (!l)
          return (
            (Sn = 1),
            (e.vars[t] = `+=0`),
            Cn(e, o),
            (Sn = 0),
            s
              ? fe(
                  t +
                    ` not eligible for reset. Try splitting into individual properties`,
                )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        u.e && (u.e = F(n) + vt(u.e)),
        u.b && (u.b = l.s + vt(u.b)));
  },
  Tn = function (e, t) {
    var n = e[0] ? Oe(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = Be({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--;) i[s[o]] = i[a];
    return i;
  },
  En = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (O(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  Dn = function (e, t, n, r, i) {
    return b(e)
      ? e.call(t, n, r, i)
      : y(e) && ~e.indexOf(`random(`)
        ? It(e)
        : e;
  },
  On =
    Ee +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  kn = {};
Ae(On + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (kn[e] = 1);
});
var An = (function (e) {
  a(t, e);
  function t(t, n, r, a) {
    var s;
    (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (s = e.call(this, a ? n : Ue(n)) || this));
    var l = s.vars,
      u = l.duration,
      d = l.delay,
      p = l.immediateRender,
      m = l.stagger,
      h = l.overwrite,
      g = l.keyframes,
      _ = l.defaults,
      v = l.scrollTrigger,
      y = n.parent || N,
      b = (O(t) || D(t) ? x(t[0]) : `length` in n) ? [t] : Ct(t),
      S,
      T,
      k,
      ee,
      A,
      j,
      M,
      te;
    if (
      ((s._targets = b.length
        ? De(b)
        : fe(
            `GSAP target ` + t + ` not found. https://gsap.com`,
            !o.nullTargetWarn,
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = h),
      g || m || E(u) || E(d))
    ) {
      n = s.vars;
      var ne = n.easeReverse || n.yoyoEase;
      if (
        ((S = s.timeline =
          new gn({
            data: `nested`,
            defaults: _ || {},
            targets: y && y.data === `nested` ? y.vars.targets : b,
          })),
        S.kill(),
        (S.parent = S._dp = i(s)),
        (S._start = 0),
        m || E(u) || E(d))
      ) {
        if (((ee = b.length), (M = m && Et(m)), C(m)))
          for (A in m) ~On.indexOf(A) && ((te ||= {}), (te[A] = m[A]));
        for (T = 0; T < ee; T++)
          ((k = He(n, kn)),
            (k.stagger = 0),
            ne && (k.easeReverse = ne),
            te && Be(k, te),
            (j = b[T]),
            (k.duration = +Dn(u, i(s), T, j, b)),
            (k.delay = (+Dn(d, i(s), T, j, b) || 0) - s._delay),
            !m &&
              ee === 1 &&
              k.delay &&
              ((s._delay = d = k.delay), (s._start += d), (k.delay = 0)),
            S.to(j, k, M ? M(T, j, b) : 0),
            (S._ease = R.none));
        S.duration() ? (u = d = 0) : (s.timeline = 0);
      } else if (g) {
        (Ue(Re(S.vars.defaults, { ease: `none` })),
          (S._ease = ln(g.ease || n.ease || `none`)));
        var re = 0,
          ie,
          ae,
          P;
        if (O(g))
          (g.forEach(function (e) {
            return S.to(b, e, `>`);
          }),
            S.duration());
        else {
          for (A in ((k = {}), g))
            A === `ease` || A === `easeEach` || En(A, g[A], k, g.easeEach);
          for (A in k)
            for (
              ie = k[A].sort(function (e, t) {
                return e.t - t.t;
              }),
                re = 0,
                T = 0;
              T < ie.length;
              T++
            )
              ((ae = ie[T]),
                (P = {
                  ease: ae.e,
                  duration: ((ae.t - (T ? ie[T - 1].t : 0)) / 100) * u,
                }),
                (P[A] = ae.v),
                S.to(b, P, re),
                (re += P.duration));
          S.duration() < u && S.to({}, { duration: u - S.duration() });
        }
      }
      u || s.duration((u = S.duration()));
    } else s.timeline = 0;
    return (
      h === !0 && !c && ((xn = i(s)), N.killTweensOf(b), (xn = 0)),
      it(y, i(s), r),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      (p ||
        (!u &&
          !g &&
          s._start === I(y._time) &&
          w(p) &&
          Ze(i(s)) &&
          y.data !== `nested`)) &&
        ((s._tTime = -f), s.render(Math.max(0, -d) || 0)),
      v && at(i(s), v),
      s
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - f && !o ? i : e < f ? 0 : e,
        c,
        l,
        u,
        d,
        p,
        m,
        h,
        g;
      if (!a) lt(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (g = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = I(s % d)),
            s === i
              ? ((u = this._repeat), (c = a))
              : ((p = I(s / d)),
                (u = ~~p),
                u && u === p ? ((c = a), u--) : c > a && (c = a)),
            (m = this._yoyo && u & 1),
            m && (c = a - c),
            (p = $e(this._tTime, d)),
            c === r && !n && this._initted && u === p)
          )
            return ((this._tTime = s), this);
          u !== p &&
            this.vars.repeatRefresh &&
            !m &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1),
            (this.render(I(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (ot(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== p))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var _ = c < r;
          if (_ !== this._inv) {
            var v = _ ? r : a - r;
            ((this._inv = _),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = v ? (_ ? -1 : 1) / v : 0),
              (this._invScale = _ ? -this.ratio : 1 - this.ratio),
              (this._invEase = _ ? this._rEase : this._ease));
          }
          this.ratio = h =
            this._invRatio +
            this._invScale *
              this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = h = this._ease(c / a);
        if (
          (this._from && (this.ratio = h = 1 - h),
          (this._tTime = s),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !p && (Bt(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l;) (l.r(h, l.d), (l = l._next));
        ((g && g.render(e < 0 ? e : g._dur * g._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
            !t &&
            (o && Xe(this, e, t, n), Bt(this, `onUpdate`)),
          this._repeat &&
            u !== p &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            Bt(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && Xe(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              qe(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || m) &&
              (Bt(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      ($t || en.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || Cn(this, a),
        (o = this._ease(a / this._dur)),
        wn(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (nt(this, 0),
            this.parent ||
              Ge(
                this._dp,
                this,
                `_first`,
                `_last`,
                this._dp._sort ? `_start` : 0,
              ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Vt(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!l),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, xn && xn.vars.overwrite !== !0)
            ._first || Vt(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            dt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? Ct(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        u,
        d,
        f,
        p,
        m;
      if ((!t || t === `all`) && We(r, i))
        return (t === `all` && (this._pt = 0), Vt(this));
      for (
        s = this._op = this._op || [],
          t !== `all` &&
            (y(t) &&
              ((f = {}),
              Ae(t, function (e) {
                return (f[e] = 1);
              }),
              (t = f)),
            (t = Tn(r, t))),
          m = r.length;
        m--;
      )
        if (~i.indexOf(r[m]))
          for (f in ((c = a[m]),
          t === `all`
            ? ((s[m] = t), (d = c), (u = {}))
            : ((u = s[m] = s[m] || {}), (d = t)),
          d))
            ((p = c && c[f]),
              p &&
                ((!(`kill` in p.d) || p.d.kill(f) === !0) && Ke(this, p, `_pt`),
                delete c[f]),
              u !== `all` && (u[f] = 1));
      return (this._initted && !this._pt && o && Vt(this), this);
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return ht(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return ht(2, arguments);
    }),
    (t.set = function (e, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
    }),
    (t.killTweensOf = function (e, t, n) {
      return N.killTweensOf(e, t, n);
    }),
    t
  );
})(hn);
(Re(An.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Ae(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    An[e] = function () {
      var t = new gn(),
        n = bt.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var jn = function (e, t, n) {
    return (e[t] = n);
  },
  Mn = function (e, t, n) {
    return e[t](n);
  },
  Nn = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  Pn = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Fn = function (e, t) {
    return b(e[t]) ? Mn : S(e[t]) && e.setAttribute ? Pn : jn;
  },
  In = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Ln = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Rn = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n;)
        ((r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  zn = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  Bn = function (e, t, n, r) {
    for (var i = this._pt, a; i;)
      ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  Vn = function (e) {
    for (var t = this._pt, n, r; t;)
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Ke(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  Hn = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  Un = function (e) {
    for (var t = e._pt, n, r, i, a; t;) {
      for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  Wn = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || In),
        (this.d = o || this),
        (this.set = s || jn),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = Hn),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(Ae(
  Ee +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (ve[e] = 1);
  },
),
  (se.TweenMax = se.TweenLite = An),
  (se.TimelineLite = se.TimelineMax = gn),
  (N = new gn({
    sortChildren: !1,
    defaults: s,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (o.stringFilter = Qt));
var Gn = [],
  Kn = {},
  qn = [],
  Jn = 0,
  Yn = 0,
  Xn = function (e) {
    return (Kn[e] || qn).map(function (e) {
      return e();
    });
  },
  Zn = function () {
    var e = Date.now(),
      t = [];
    e - Jn > 2 &&
      (Xn(`matchMediaInit`),
      Gn.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          ((i = ae.matchMedia(n[a]).matches),
            i && (o = 1),
            i !== r[a] && ((r[a] = i), (s = 1)));
        s && (e.revert(), o && t.push(e));
      }),
      Xn(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Jn = e),
      Xn(`matchMedia`));
  },
  Qn = (function () {
    function e(e, t) {
      ((this.selector = t && wt(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Yn++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        b(e) && ((n = t), (t = e), (e = b));
        var r = this,
          i = function () {
            var e = u,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = wt(n)),
              (u = r),
              (a = t.apply(r, arguments)),
              b(a) && r._r.push(a),
              (u = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === b
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = u;
        ((u = null), e(this), (u = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof An &&
                  !(n.parent && n.parent.data === `nested`) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--;)
                  ((i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      })));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;
                )
                  ((i = n.data[r]),
                    i instanceof gn
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof An) && i.revert && i.revert(e));
                (n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = Gn.length; r--;) Gn[r].id === this.id && Gn.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  $n = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), u && u.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        C(e) || (e = { matches: e });
        var r = new Qn(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (u && !r.selector && (r.selector = u.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          o === `all`
            ? (s = 1)
            : ((a = ae.matchMedia(e[o])),
              a &&
                (Gn.indexOf(r) < 0 && Gn.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener
                  ? a.addListener(Zn)
                  : a.addEventListener(`change`, Zn)));
        return (
          s &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  er = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return Wt(e);
      });
    },
    timeline: function (e) {
      return new gn(e);
    },
    getTweensOf: function (e, t) {
      return N.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      y(e) && (e = Ct(e)[0]);
      var i = Oe(e || {}).get,
        a = n ? Le : Ie;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((Se[t] && Se[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((Se[t] && Se[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Ct(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return ir.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--;) r[t](e);
        };
      }
      e = e[0] || {};
      var a = Se[t],
        o = Oe(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ((Ht._pt = 0),
                r.init(e, n ? t + n : t, Ht, 0, [e]),
                r.render(1, r),
                Ht._pt && zn(1, Ht));
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = ir.to(
          e,
          Re(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {},
          ),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return N.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = ln(e.ease, s.ease)), Ve(s, e || {}));
    },
    config: function (e) {
      return Ve(o, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return (
          e && !Se[e] && !se[e] && fe(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (Ce[t] = function (e, t, r) {
          return n(Ct(e), Re(t || {}, i), r);
        }),
        a &&
          (gn.prototype[t] = function (e, n, r) {
            return this.add(Ce[t](e, C(n) ? n : (r = n) && {}, this), r);
          }));
    },
    registerEase: function (e, t) {
      R[e] = ln(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? ln(e, t) : R;
    },
    getById: function (e) {
      return N.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new gn(e),
        r,
        i;
      for (
        n.smoothChildTiming = w(e.smoothChildTiming),
          N.remove(n),
          n._dp = 0,
          n._time = n._tTime = N._time,
          r = N._first;
        r;
      )
        ((i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof An &&
              r.vars.onComplete === r._targets[0]
            )) &&
            it(n, r, r._start - r._delay),
          (r = i));
      return (it(N, n, 0), n);
    },
    context: function (e, t) {
      return e ? new Qn(e, t) : u;
    },
    matchMedia: function (e) {
      return new $n(e);
    },
    matchMediaRefresh: function () {
      return (
        Gn.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || Zn()
      );
    },
    addEventListener: function (e, t) {
      var n = Kn[e] || (Kn[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Kn[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: Pt,
      wrapYoyo: Ft,
      distribute: Et,
      random: kt,
      snap: Ot,
      normalize: Mt,
      getUnit: vt,
      clamp: yt,
      splitColor: qt,
      toArray: Ct,
      selector: wt,
      mapRange: Lt,
      pipe: At,
      unitize: jt,
      interpolate: Rt,
      shuffle: Tt,
    },
    install: ue,
    effects: Ce,
    ticker: en,
    updateRoot: gn.updateRoot,
    plugins: Se,
    globalTimeline: N,
    core: {
      PropTween: Wn,
      globals: pe,
      Tween: An,
      Timeline: gn,
      Animation: hn,
      getCache: Oe,
      _removeLinkedListItem: Ke,
      reverting: function () {
        return l;
      },
      context: function (e) {
        return (e && u && (u.data.push(e), (e._ctx = u)), u);
      },
      suppressOverwrites: function (e) {
        return (c = e);
      },
    },
  };
(Ae(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (er[e] = An[e]);
}),
  en.add(gn.updateRoot),
  (Ht = er.to({}, { duration: 0 })));
var tr = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;)
      n = n._next;
    return n;
  },
  nr = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--;)
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = tr(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  rr = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (y(n) &&
              ((r = {}),
              Ae(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          nr(e, n);
        };
      },
    };
  },
  ir =
    er.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;)
            (l ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;)
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      rr(`roundProps`, Dt),
      rr(`modifiers`),
      rr(`snap`, Ot),
    ) || er;
((An.version = gn.version = ir.version = `3.15.0`),
  (le = 1),
  T() && tn(),
  R.Power0,
  R.Power1,
  R.Power2,
  R.Power3,
  R.Power4,
  R.Linear,
  R.Quad,
  R.Cubic,
  R.Quart,
  R.Quint,
  R.Strong,
  R.Elastic,
  R.Back,
  R.SteppedEase,
  R.Bounce,
  R.Sine,
  R.Expo,
  R.Circ);
var ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr = function () {
    return typeof window < `u`;
  },
  pr = {},
  mr = 180 / Math.PI,
  hr = Math.PI / 180,
  gr = Math.atan2,
  _r = 1e8,
  vr = /([A-Z])/g,
  yr = /(left|right|width|margin|padding|x)/i,
  br = /[\s,\(]\S/,
  xr = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  Sr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Cr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  wr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  Tr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  Er = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Dr = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Or = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  kr = function (e, t, n) {
    return (e.style[t] = n);
  },
  Ar = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  jr = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  Mr = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Nr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  Pr = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  z = `transform`,
  Fr = z + `Origin`,
  Ir = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in pr && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = xr[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = ti(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : ti(i, t)),
          t === Fr && (this.tfm.zOrigin = o.zOrigin));
      else
        return xr.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(z) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
        this.props.push(Fr, n, ``)),
        (t = z));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  Lr = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
      e.removeProperty(`scale`),
      e.removeProperty(`rotate`));
  },
  Rr = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
              e[i].substr(0, 2) === `--`
                ? e[i]
                : e[i].replace(vr, `-$1`).toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg &&
        (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = dr()),
        (!i || !i.isStart) &&
          !n[z] &&
          (Lr(n),
          r.zOrigin &&
            n[Fr] &&
            ((n[Fr] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  zr = function (e, t) {
    var n = { target: e, props: [], revert: Rr, save: Ir };
    return (
      e._gsap || ir.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  Br,
  Vr = function (e, t) {
    var n = or.createElementNS
      ? or.createElementNS(
          (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
          e,
        )
      : or.createElement(e);
    return n && n.style ? n : or.createElement(e);
  },
  Hr = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(vr, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, Wr(n) || n, 1)) ||
      ``
    );
  },
  Ur = `O,Moz,ms,Ms,Webkit`.split(`,`),
  Wr = function (e, t, n) {
    var r = (t || lr).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(Ur[i] + e in r);
    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Ur[i] : ``) + e;
  },
  Gr = function () {
    fr() &&
      window.document &&
      ((ar = window),
      (or = ar.document),
      (sr = or.documentElement),
      (lr = Vr(`div`) || { style: {} }),
      Vr(`div`),
      (z = Wr(z)),
      (Fr = z + `Origin`),
      (lr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (Br = !!Wr(`perspective`)),
      (dr = ir.core.reverting),
      (cr = 1));
  },
  Kr = function (e) {
    var t = e.ownerSVGElement,
      n = Vr(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`,
      ),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), sr.appendChild(n));
    try {
      i = r.getBBox();
    } catch {}
    return (n.removeChild(r), sr.removeChild(n), i);
  },
  qr = function (e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Jr = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = Kr(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = Kr(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +qr(e, [`x`, `cx`, `x1`]) || 0,
            y: +qr(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Yr = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Jr(e));
  },
  Xr = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in pr && t !== Fr && (t = z),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(vr, `-$1`).toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  Zr = function (e, t, n, r, i, a) {
    var o = new Wn(e._pt, t, n, 0, 1, a ? Or : Dr);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  Qr = { deg: 1, rad: 1, turn: 1 },
  $r = { grid: 1, flex: 1 },
  ei = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = lr.style,
      c = yr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || Qr[i] || Qr[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && Yr(t)),
      (p || o === `%`) && (pr[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        F(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) ||
        (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === or || !h.appendChild) && (h = or.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === en.time && !g.uncache)
    )
      return F((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : Xr(t, n));
    } else
      ((p || o === `%`) &&
        !$r[Hr(h, `display`)] &&
        (s.position = Hr(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(lr),
        (m = lr[u]),
        h.removeChild(lr),
        (s.position = `absolute`));
    return (
      c && p && ((g = Oe(h)), (g.time = en.time), (g.width = h[u])),
      F(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  ti = function (e, t, n, r) {
    var i;
    return (
      cr || Gr(),
      t in xr &&
        t !== `transform` &&
        ((t = xr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      pr[t] && t !== `transform`
        ? ((i = pi(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : mi(Hr(e, Fr)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i =
              (oi[t] && oi[t](e, t, n)) ||
              Hr(e, t) ||
              ke(e, t) ||
              +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? ei(e, t, i, n) + n : i
    );
  },
  ni = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = Wr(t, e, 1),
        a = i && Hr(e, i, 1);
      a && a !== n
        ? ((t = i), (n = a))
        : t === `borderColor` && (n = Hr(e, `borderTopColor`));
    }
    var s = new Wn(this._pt, e.style, t, 0, 1, Rn),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x;
    if (
      ((s.b = n),
      (s.e = r),
      (n += ``),
      (r += ``),
      r.substring(0, 6) === `var(--` &&
        (r = Hr(e, r.substring(4, r.indexOf(`)`)))),
      r === `auto` &&
        ((h = e.style[t]),
        (e.style[t] = r),
        (r = Hr(e, t) || r),
        h ? (e.style[t] = h) : Xr(e, t)),
      (u = [n, r]),
      Qt(u),
      (n = u[0]),
      (r = u[1]),
      (f = n.match(M) || []),
      (x = r.match(M) || []),
      x.length)
    ) {
      for (; (d = M.exec(r));)
        ((g = d[0]),
          (v = r.substring(c, d.index)),
          m
            ? (m = (m + 1) % 5)
            : (v.substr(-5) === `rgba(` || v.substr(-5) === `hsla(`) && (m = 1),
          g !== (h = f[l++] || ``) &&
            ((p = parseFloat(h) || 0),
            (b = h.substr((p + ``).length)),
            g.charAt(1) === `=` && (g = je(p, g) + b),
            (_ = parseFloat(g)),
            (y = g.substr((_ + ``).length)),
            (c = M.lastIndex - y.length),
            y ||
              ((y = y || o.units[t] || b),
              c === r.length && ((r += y), (s.e += y))),
            b !== y && (p = ei(e, t, h, y) || 0),
            (s._pt = {
              _next: s._pt,
              p: v || l === 1 ? v : `,`,
              s: p,
              c: _ - p,
              m: (m && m < 4) || t === `zIndex` ? Math.round : 0,
            })));
      s.c = c < r.length ? r.substring(c, r.length) : ``;
    } else s.r = t === `display` && r === `none` ? Or : Dr;
    return (ne.test(r) && (s.e = 0), (this._pt = s), s);
  },
  ri = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  ii = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = ri[n] || n),
      (t[1] = ri[r] || r),
      t.join(` `)
    );
  },
  ai = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1;)
          ((o = i[c]),
            pr[o] && ((s = 1), (o = o === `transformOrigin` ? Fr : z)),
            Xr(n, o));
      s &&
        (Xr(n, z),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          pi(n, 1),
          (a.uncache = 1),
          Lr(r)));
    }
  },
  oi = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new Wn(e._pt, t, n, 0, 0, ai));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  si = [1, 0, 0, 1, 0, 0],
  ci = {},
  li = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  ui = function (e) {
    var t = Hr(e, z);
    return li(t) ? si : t.substr(7).match(j).map(F);
  },
  di = function (e, t) {
    var n = e._gsap || Oe(e),
      r = e.style,
      i = ui(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? si : i)
      : (i === si &&
          !e.offsetParent &&
          e !== sr &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), sr.appendChild(e)),
          (i = ui(e)),
          s ? (r.display = s) : Xr(e, `display`),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
                ? a.appendChild(e)
                : sr.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  fi = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || di(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== si &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = Jr(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[Fr] = `0px 0px`),
      a &&
        (Zr(a, o, `xOrigin`, c, y),
        Zr(a, o, `yOrigin`, l, b),
        Zr(a, o, `xOffset`, u, o.xOffset),
        Zr(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  pi = function (e, t) {
    var n = e._gsap || new mn(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      s = `deg`,
      c = getComputedStyle(e),
      l = Hr(e, Fr) || `0`,
      u = (d = f = h = g = _ = v = y = b = 0),
      d,
      f,
      p = (m = 1),
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      ee,
      A,
      j,
      M,
      te,
      ne,
      re,
      ie,
      N,
      ae,
      P,
      oe;
    return (
      (n.svg = !!(e.getCTM && Yr(e))),
      c.translate &&
        ((c.translate !== `none` ||
          c.scale !== `none` ||
          c.rotate !== `none`) &&
          (r[z] =
            (c.translate === `none`
              ? ``
              : `translate3d(` +
                (c.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                `) `) +
            (c.rotate === `none` ? `` : `rotate(` + c.rotate + `) `) +
            (c.scale === `none`
              ? ``
              : `scale(` + c.scale.split(` `).join(`,`) + `) `) +
            (c[z] === `none` ? `` : c[z])),
        (r.scale = r.rotate = r.translate = `none`)),
      (C = di(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((te = e.getBBox()),
            (l = n.xOrigin - te.x + `px ` + (n.yOrigin - te.y) + `px`),
            (M = ``))
          : (M = !t && e.getAttribute(`data-svg-origin`)),
        fi(e, M || l, !!M || n.originIsAbsolute, n.smooth !== !1, C)),
      (x = n.xOrigin || 0),
      (S = n.yOrigin || 0),
      C !== si &&
        ((D = C[0]),
        (O = C[1]),
        (k = C[2]),
        (ee = C[3]),
        (u = A = C[4]),
        (d = j = C[5]),
        C.length === 6
          ? ((p = Math.sqrt(D * D + O * O)),
            (m = Math.sqrt(ee * ee + k * k)),
            (h = D || O ? gr(O, D) * mr : 0),
            (v = k || ee ? gr(k, ee) * mr + h : 0),
            v && (m *= Math.abs(Math.cos(v * hr))),
            n.svg && ((u -= x - (x * D + S * k)), (d -= S - (x * O + S * ee))))
          : ((oe = C[6]),
            (ae = C[7]),
            (re = C[8]),
            (ie = C[9]),
            (N = C[10]),
            (P = C[11]),
            (u = C[12]),
            (d = C[13]),
            (f = C[14]),
            (w = gr(oe, N)),
            (g = w * mr),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (M = A * T + re * E),
              (te = j * T + ie * E),
              (ne = oe * T + N * E),
              (re = A * -E + re * T),
              (ie = j * -E + ie * T),
              (N = oe * -E + N * T),
              (P = ae * -E + P * T),
              (A = M),
              (j = te),
              (oe = ne)),
            (w = gr(-k, N)),
            (_ = w * mr),
            w &&
              ((T = Math.cos(-w)),
              (E = Math.sin(-w)),
              (M = D * T - re * E),
              (te = O * T - ie * E),
              (ne = k * T - N * E),
              (P = ee * E + P * T),
              (D = M),
              (O = te),
              (k = ne)),
            (w = gr(O, D)),
            (h = w * mr),
            w &&
              ((T = Math.cos(w)),
              (E = Math.sin(w)),
              (M = D * T + O * E),
              (te = A * T + j * E),
              (O = O * T - D * E),
              (j = j * T - A * E),
              (D = M),
              (A = te)),
            g &&
              Math.abs(g) + Math.abs(h) > 359.9 &&
              ((g = h = 0), (_ = 180 - _)),
            (p = F(Math.sqrt(D * D + O * O + k * k))),
            (m = F(Math.sqrt(j * j + oe * oe))),
            (w = gr(A, j)),
            (v = Math.abs(w) > 2e-4 ? w * mr : 0),
            (b = P ? 1 / (P < 0 ? -P : P) : 0)),
        n.svg &&
          ((M = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !li(Hr(e, z))),
          M && e.setAttribute(`transform`, M))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (i
          ? ((p *= -1), (v += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((m *= -1), (v += v <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        d -
        ((n.yPercent =
          d &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = f + a),
      (n.scaleX = F(p)),
      (n.scaleY = F(m)),
      (n.rotation = F(h) + s),
      (n.rotationX = F(g) + s),
      (n.rotationY = F(_) + s),
      (n.skewX = v + s),
      (n.skewY = y + s),
      (n.transformPerspective = b + a),
      (n.zOrigin = parseFloat(l.split(` `)[2]) || (!t && n.zOrigin) || 0) &&
        (r[Fr] = mi(l)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = o.force3D),
      (n.renderTransform = n.svg ? xi : Br ? bi : gi),
      (n.uncache = 0),
      n
    );
  },
  mi = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  hi = function (e, t, n) {
    var r = vt(t);
    return F(parseFloat(t) + parseFloat(ei(e, `x`, n + `px`, r))) + r;
  },
  gi = function (e, t) {
    ((t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      bi(e, t));
  },
  _i = `0deg`,
  vi = `0px`,
  yi = `) `,
  bi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== _i || l !== _i)) {
      var x = parseFloat(l) * hr,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * hr),
        (w = Math.cos(x)),
        (a = hi(_, a, S * w * -v)),
        (o = hi(_, o, -Math.sin(x) * -v)),
        (s = hi(_, s, C * w * -v + v)));
    }
    (h !== vi && (y += `perspective(` + h + yi),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== vi || o !== vi || s !== vi) &&
        (y +=
          s !== vi || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + yi),
      c !== _i && (y += `rotate(` + c + yi),
      l !== _i && (y += `rotateY(` + l + yi),
      u !== _i && (y += `rotateX(` + u + yi),
      (d !== _i || f !== _i) && (y += `skew(` + d + `, ` + f + yi),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + yi),
      (_.style[z] = y || `translate(0, 0)`));
  },
  xi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= hr),
          (c *= hr),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= hr),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = F(b)),
          (x = F(x)),
          (S = F(S)),
          (C = F(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = ei(f, `x`, a, `px`)), (y = ei(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = F(v + p - (p * b + m * S) + h)),
        (y = F(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()),
        (v = F(v + (r / 100) * w.width)),
        (y = F(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[z] = w));
  },
  Si = function (e, t, n, r, i) {
    var a = 360,
      o = y(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? mr : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * _r) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * _r) % a) - ~~(s / a) * a)),
      (e._pt = u = new Wn(e._pt, t, n, r, s, Cr)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  Ci = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  wi = function (e, t, n) {
    var r = Ci({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[z] = t),
        (o = pi(n, 1)),
        Xr(n, z),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[z]), (a[z] = t), (o = pi(n, 1)), (a[z] = c)),
    pr))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = vt(c)),
          (p = vt(l)),
          (u = f === p ? parseFloat(c) : ei(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new Wn(e._pt, o, s, u, d - u, Sr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    Ci(o, r);
  };
Ae(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  oi[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return ti(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var Ti = {
  name: `css`,
  register: Gr,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      s = e.style,
      c = n.vars.startAt,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      b,
      x,
      S,
      C,
      w,
      T,
      E;
    for (h in (cr || Gr(),
    (this.styles = this.styles || zr(e)),
    (T = this.styles.props),
    (this.tween = n),
    t))
      if (h !== `autoRound` && ((u = t[h]), !(Se[h] && bn(h, t, n, r, e, i)))) {
        if (
          ((p = typeof u),
          (m = oi[h]),
          p === `function` && ((u = u.call(n, r, e, i)), (p = typeof u)),
          p === `string` && ~u.indexOf(`random(`) && (u = It(u)),
          m)
        )
          m(this, e, h, u, n) && (w = 1);
        else if (h.substr(0, 2) === `--`)
          ((l = (getComputedStyle(e).getPropertyValue(h) + ``).trim()),
            (u += ``),
            (Xt.lastIndex = 0),
            Xt.test(l) ||
              ((g = vt(l)),
              (_ = vt(u)),
              _ ? g !== _ && (l = ei(e, h, l, _) + _) : g && (u += g)),
            this.add(s, `setProperty`, l, u, r, i, 0, 0, h),
            a.push(h),
            T.push(h, 0, s[h]));
        else if (p !== `undefined`) {
          if (
            (c && h in c
              ? ((l = typeof c[h] == `function` ? c[h].call(n, r, e, i) : c[h]),
                y(l) && ~l.indexOf(`random(`) && (l = It(l)),
                vt(l + ``) ||
                  l === `auto` ||
                  (l += o.units[h] || vt(ti(e, h)) || ``),
                (l + ``).charAt(1) === `=` && (l = ti(e, h)))
              : (l = ti(e, h)),
            (f = parseFloat(l)),
            (v = p === `string` && u.charAt(1) === `=` && u.substr(0, 2)),
            v && (u = u.substr(2)),
            (d = parseFloat(u)),
            h in xr &&
              (h === `autoAlpha` &&
                (f === 1 && ti(e, `visibility`) === `hidden` && d && (f = 0),
                T.push(`visibility`, 0, s.visibility),
                Zr(
                  this,
                  s,
                  `visibility`,
                  f ? `inherit` : `hidden`,
                  d ? `inherit` : `hidden`,
                  !d,
                )),
              h !== `scale` &&
                h !== `transform` &&
                ((h = xr[h]), ~h.indexOf(`,`) && (h = h.split(`,`)[0]))),
            (b = h in pr),
            b)
          ) {
            if (
              (this.styles.save(h),
              (E = u),
              p === `string` && u.substring(0, 6) === `var(--`)
            ) {
              if (
                ((u = Hr(e, u.substring(4, u.indexOf(`)`)))),
                u.substring(0, 5) === `calc(`)
              ) {
                var D = e.style.perspective;
                ((e.style.perspective = u),
                  (u = Hr(e, `perspective`)),
                  D ? (e.style.perspective = D) : Xr(e, `perspective`));
              }
              d = parseFloat(u);
            }
            if (
              (x ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  pi(e, t.parseTransform),
                (C = t.smoothOrigin !== !1 && S.smooth),
                (x = this._pt =
                  new Wn(this._pt, s, z, 0, 1, S.renderTransform, S, 0, -1)),
                (x.dep = 1)),
              h === `scale`)
            )
              ((this._pt = new Wn(
                this._pt,
                S,
                `scaleY`,
                S.scaleY,
                (v ? je(S.scaleY, v + d) : d) - S.scaleY || 0,
                Sr,
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, h),
                (h += `X`));
            else if (h === `transformOrigin`) {
              (T.push(Fr, 0, s[Fr]),
                (u = ii(u)),
                S.svg
                  ? fi(e, u, 0, C, 0, this)
                  : ((_ = parseFloat(u.split(` `)[2]) || 0),
                    _ !== S.zOrigin && Zr(this, S, `zOrigin`, S.zOrigin, _),
                    Zr(this, s, h, mi(l), mi(u))));
              continue;
            } else if (h === `svgOrigin`) {
              fi(e, u, 1, C, 0, this);
              continue;
            } else if (h in ci) {
              Si(this, S, h, f, v ? je(f, v + u) : u);
              continue;
            } else if (h === `smoothOrigin`) {
              Zr(this, S, `smooth`, S.smooth, u);
              continue;
            } else if (h === `force3D`) {
              S[h] = u;
              continue;
            } else if (h === `transform`) {
              wi(this, u, e);
              continue;
            }
          } else h in s || (h = Wr(h) || h);
          if (b || ((d || d === 0) && (f || f === 0) && !br.test(u) && h in s))
            ((g = (l + ``).substr((f + ``).length)),
              (d ||= 0),
              (_ = vt(u) || (h in o.units ? o.units[h] : g)),
              g !== _ && (f = ei(e, h, l, _)),
              (this._pt = new Wn(
                this._pt,
                b ? S : s,
                h,
                f,
                (v ? je(f, v + d) : d) - f,
                !b && (_ === `px` || h === `zIndex`) && t.autoRound !== !1
                  ? Er
                  : Sr,
              )),
              (this._pt.u = _ || 0),
              b && E !== u
                ? ((this._pt.b = l), (this._pt.e = E), (this._pt.r = Tr))
                : g !== _ &&
                  _ !== `%` &&
                  ((this._pt.b = l), (this._pt.r = wr)));
          else if (h in s) ni.call(this, e, h, l, v ? v + u : u);
          else if (h in e) this.add(e, h, l || e[h], v ? v + u : u, r, i);
          else if (h !== `parseTransform`) {
            de(h, u);
            continue;
          }
          (b ||
            (h in s
              ? T.push(h, 0, s[h])
              : typeof e[h] == `function`
                ? T.push(h, 2, e[h]())
                : T.push(h, 1, l || e[h])),
            a.push(h));
        }
      }
    w && Un(this);
  },
  render: function (e, t) {
    if (t.tween._time || !dr())
      for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: ti,
  aliases: xr,
  getSetter: function (e, t, n) {
    var r = xr[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in pr && t !== Fr && (e._gsap.x || ti(e, `x`))
        ? n && ur === n
          ? t === `scale`
            ? Mr
            : jr
          : (ur = n || {}) && (t === `scale` ? Nr : Pr)
        : e.style && !S(e.style[t])
          ? kr
          : ~t.indexOf(`-`)
            ? Ar
            : Fn(e, t)
    );
  },
  core: { _removeProperty: Xr, _getMatrix: di },
};
((ir.utils.checkPrefix = Wr),
  (ir.core.getStyleSaver = zr),
  (function (e, t, n, r) {
    var i = Ae(e + `,` + t + `,` + n, function (e) {
      pr[e] = 1;
    });
    (Ae(t, function (e) {
      ((o.units[e] = `deg`), (ci[e] = 1));
    }),
      (xr[i[13]] = e + `,` + t),
      Ae(r, function (e) {
        var t = e.split(`:`);
        xr[t[1]] = i[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  Ae(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      o.units[e] = `px`;
    },
  ),
  ir.registerPlugin(Ti));
var Ei = ir.registerPlugin(Ti) || ir;
Ei.core.Tween;
var Di = {
    name: `AWS Bennett University`,
    tagline: `Learn. Build. Deploy. Scale.`,
    email: `[CLUB EMAIL]`,
    address: [
      `AWS Bennett University`,
      `Bennett University`,
      `Greater Noida, Uttar Pradesh, India`,
    ],
    socials: {
      instagram: `#replace-instagram-url`,
      linkedin: `#replace-linkedin-url`,
      github: `#replace-github-url`,
      email: `mailto:replace@example.com`,
    },
  },
  Oi = [
    { value: 100, suffix: `+`, label: `Members` },
    { value: 20, suffix: `+`, label: `Events` },
    { value: 15, suffix: `+`, label: `Projects` },
    { value: 500, suffix: `+`, label: `Students reached` },
  ],
  ki = [
    { id: `home`, label: `Home` },
    { id: `about`, label: `About` },
    { id: `team`, label: `Team` },
    { id: `events`, label: `Events` },
    { id: `projects`, label: `Projects` },
    { id: `achievements`, label: `Achievements` },
    { id: `contact`, label: `Contact` },
  ],
  Ai = (0, r.createContext)({});
function ji(e) {
  let t = (0, r.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var Mi = typeof window < `u` ? r.useLayoutEffect : r.useEffect,
  Ni = (0, r.createContext)(null);
function Pi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Fi(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Ii = (e, t, n) => (n > t ? t : n < e ? e : n),
  Li = {},
  Ri = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  zi = (e) => typeof e == `object` && !!e,
  Bi = (e) => /^0[^.\s]+$/u.test(e);
function Vi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Hi = (e) => e,
  Ui = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  Wi = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  Gi = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (Pi(this.subscriptions, e), () => this.remove(e));
    }
    remove(e) {
      Fi(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  Ki = (e) => e * 1e3,
  qi = (e) => e / 1e3,
  Ji = (e, t) => (t ? (1e3 / t) * e : 0),
  Yi = (e, t, n) => {
    let r = t - e;
    return ((((n - e) % r) + r) % r) + e;
  },
  Xi = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Zi = 1e-7,
  Qi = 12;
function $i(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = Xi(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > Zi && ++s < Qi);
  return o;
}
function ea(e, t, n, r) {
  if (e === t && n === r) return Hi;
  let i = (t) => $i(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Xi(i(e), t, r));
}
var ta = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  na = (e) => (t) => 1 - e(1 - t),
  ra = ea(0.33, 1.53, 0.69, 0.99),
  ia = na(ra),
  aa = ta(ia),
  oa = (e) =>
    e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * ia(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))),
  sa = (e) => 1 - Math.sin(Math.acos(e)),
  ca = na(sa),
  la = ta(sa),
  ua = ea(0.42, 0, 1, 1),
  da = ea(0, 0, 0.58, 1),
  fa = ea(0.42, 0, 0.58, 1),
  pa = (e) => Array.isArray(e) && typeof e[0] != `number`;
function ma(e, t) {
  return pa(e) ? e[Yi(0, e.length, t)] : e;
}
var ha = (e) => Array.isArray(e) && typeof e[0] == `number`,
  ga = {
    linear: Hi,
    easeIn: ua,
    easeInOut: fa,
    easeOut: da,
    circIn: sa,
    circInOut: la,
    circOut: ca,
    backIn: ia,
    backInOut: aa,
    backOut: ra,
    anticipate: oa,
  },
  _a = (e) => typeof e == `string`,
  va = (e) => {
    if (ha(e)) {
      e.length;
      let [t, n, r, i] = e;
      return ea(t, n, r, i);
    }
    return _a(e) ? (ga[e], `${e}`, ga[e]) : e;
  },
  ya = { delta: 0, timestamp: 0, isProcessing: !1 },
  ba;
function xa() {
  ba = void 0;
}
var Sa = {
    now: () => (
      ba === void 0 &&
        Sa.set(
          ya.isProcessing || Li.useManualTiming
            ? ya.timestamp
            : performance.now(),
        ),
      ba
    ),
    set: (e) => {
      ((ba = e), queueMicrotask(xa));
    },
  },
  Ca = (e) => Math.round(e * 1e5) / 1e5,
  wa = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Ta = wa(`--`),
  Ea = wa(`var(--`),
  Da = (e) => (Ea(e) ? Oa.test(e.split(`/*`)[0].trim()) : !1),
  Oa =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ka(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var Aa = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  ja = { ...Aa, transform: (e) => Ii(0, 1, e) },
  Ma = { ...Aa, default: 1 },
  Na = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Pa(e) {
  return e == null;
}
var Fa =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ia = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Fa.test(n) && n.startsWith(e)) ||
      (t && !Pa(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  La = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Na);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Ra = (e) => Ii(0, 255, e),
  za = { ...Aa, transform: (e) => Math.round(Ra(e)) },
  Ba = {
    test: Ia(`rgb`, `red`),
    parse: La(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      za.transform(e) +
      `, ` +
      za.transform(t) +
      `, ` +
      za.transform(n) +
      `, ` +
      Ca(ja.transform(r)) +
      `)`,
  };
function Va(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Ha = { test: Ia(`#`), parse: Va, transform: Ba.transform },
  Ua = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Wa = Ua(`deg`),
  Ga = Ua(`%`),
  B = Ua(`px`),
  Ka = Ua(`vh`),
  qa = Ua(`vw`),
  Ja = {
    ...Ga,
    parse: (e) => Ga.parse(e) / 100,
    transform: (e) => Ga.transform(e * 100),
  },
  Ya = {
    test: Ia(`hsl`, `hue`),
    parse: La(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Ga.transform(Ca(t)) +
      `, ` +
      Ga.transform(Ca(n)) +
      `, ` +
      Ca(ja.transform(r)) +
      `)`,
  },
  Xa = {
    test: (e) => Ba.test(e) || Ha.test(e) || Ya.test(e),
    parse: (e) =>
      Ba.test(e) ? Ba.parse(e) : Ya.test(e) ? Ya.parse(e) : Ha.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? Ba.transform(e)
          : Ya.transform(e),
    getAnimatableNone: (e) => {
      let t = Xa.parse(e);
      return ((t.alpha = 0), Xa.transform(t));
    },
  },
  Za =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  Qa = new RegExp(Na.source),
  $a = new RegExp(Za.source, `i`);
function eo(e) {
  return isNaN(e) && typeof e == `string` && (Qa.test(e) || $a.test(e));
}
var to = `number`,
  no = `color`,
  ro = `var`,
  io = `var(`,
  ao = "${}",
  oo =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function so(e) {
  let t = e.toString();
  return Qa.test(t) || $a.test(t);
}
function co(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        oo,
        (e) => (
          Xa.test(e)
            ? (r.color.push(a), i.push(no), n.push(Xa.parse(e)))
            : e.startsWith(io)
              ? (r.var.push(a), i.push(ro), n.push(e))
              : (r.number.push(a), i.push(to), n.push(parseFloat(e))),
          ++a,
          ao
        ),
      )
      .split(ao),
    indexes: r,
    types: i,
  };
}
function lo(e) {
  return co(e).values;
}
function uo({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === to ? Ca(r[a]) : e === no ? Xa.transform(r[a]) : r[a];
      }
    return i;
  };
}
function fo(e) {
  return uo(co(e));
}
var po = (e) =>
    typeof e == `number` ? 0 : Xa.test(e) ? Xa.getAnimatableNone(e) : e,
  mo = (e, t) =>
    typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : po(e);
function ho(e) {
  let t = co(e);
  return uo(t)(t.values.map((e, n) => mo(e, t.split[n])));
}
var go = { test: eo, parse: lo, createTransformer: fo, getAnimatableNone: ho };
function _o(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function vo({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = _o(s, r, e + 1 / 3)), (a = _o(s, r, e)), (o = _o(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function yo(e, t) {
  return (n) => (n > 0 ? t : e);
}
var V = (e, t, n) => e + (t - e) * n,
  bo = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  xo = [Ha, Ba, Ya],
  So = (e) => xo.find((t) => t.test(e));
function Co(e) {
  let t = So(e);
  if (!t) return (`${e}`, !1);
  let n = t.parse(e);
  return (t === Ya && (n = vo(n)), n);
}
var wo = (e, t) => {
    let n = Co(e),
      r = Co(t);
    if (!n || !r) return yo(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = bo(n.red, r.red, e)),
      (i.green = bo(n.green, r.green, e)),
      (i.blue = bo(n.blue, r.blue, e)),
      (i.alpha = V(n.alpha, r.alpha, e)),
      Ba.transform(i)
    );
  },
  To = new Set([`none`, `hidden`]);
function Eo(e, t) {
  return To.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Do(e, t) {
  return (n) => V(e, t, n);
}
function Oo(e) {
  return typeof e == `number`
    ? Do
    : typeof e == `string`
      ? Da(e)
        ? yo
        : Xa.test(e)
          ? wo
          : Mo
      : Array.isArray(e)
        ? ko
        : typeof e == `object`
          ? Xa.test(e)
            ? wo
            : Ao
          : yo;
}
function ko(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Oo(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Ao(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Oo(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function jo(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var Mo = (e, t) => {
    let n = go.createTransformer(t),
      r = co(e),
      i = co(t);
    return r.indexes.var.length === i.indexes.var.length &&
      r.indexes.color.length === i.indexes.color.length &&
      r.indexes.number.length >= i.indexes.number.length
      ? (To.has(e) && !i.values.length) || (To.has(t) && !r.values.length)
        ? Eo(e, t)
        : Ui(ko(jo(r, i), i.values), n)
      : (`${e}${t}`, yo(e, t));
  },
  No = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Po(e, t) {
  let n = No.exec(e);
  if (!n) return;
  let r = No.exec(t);
  if (!r || n[2] !== r[2]) return;
  let i = n[2],
    a = parseFloat(n[1]),
    o = parseFloat(r[1]);
  return (e) => Ca(V(a, o, e)) + i;
}
function Fo(e, t, n) {
  if (typeof e == `number` && typeof t == `number` && typeof n == `number`)
    return V(e, t, n);
  if (typeof e == `string` && typeof t == `string`) {
    let n = Po(e, t);
    if (n) return n;
  }
  return Oo(e)(e, t);
}
var Io = [
  `setup`,
  `read`,
  `resolveKeyframes`,
  `preUpdate`,
  `update`,
  `preRender`,
  `render`,
  `postRender`,
];
function Lo(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new Set(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (n.add(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n),
        (n = a),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Ro = 40;
function zo(e, t, n = { delta: 0, timestamp: 0, isProcessing: !1 }) {
  let r = !1,
    i = !0,
    a = () => (r = !0),
    o = Io.reduce((e, t) => ((e[t] = Lo(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = Li.useManualTiming,
        o = a ? n.timestamp : performance.now();
      ((r = !1),
        a ||
          (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, Ro), 1)),
        (n.timestamp = o),
        (n.isProcessing = !0),
        s.process(n),
        c.process(n),
        l.process(n),
        u.process(n),
        d.process(n),
        f.process(n),
        p.process(n),
        m.process(n),
        (n.isProcessing = !1),
        r && t && ((i = !1), e(h)));
    },
    g = () => {
      ((r = !0), (i = !0), n.isProcessing || e(h));
    };
  return {
    schedule: Io.reduce((e, t) => {
      let n = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (r || g(), n.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Io.length; t++) o[Io[t]].cancel(e);
    },
    state: n,
    steps: o,
  };
}
var {
    schedule: H,
    cancel: Bo,
    steps: Vo,
  } = zo(
    typeof requestAnimationFrame < `u` ? requestAnimationFrame : Hi,
    !0,
    ya,
  ),
  Ho = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => H.update(t, e),
      stop: () => Bo(t),
      now: () => (ya.isProcessing ? ya.timestamp : Sa.now()),
    };
  },
  Uo = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Wo = 2e4;
function Go(e, t = 50, n = Wo, r) {
  let i = 0,
    a = e.next(i);
  for (r?.push(a.value); !a.done && i < n;)
    ((i += t), (a = e.next(i)), r?.push(a.value));
  return i >= n ? 1 / 0 : i;
}
function Ko(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Go(r), Wo);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: qi(i),
  };
}
var qo = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
  },
  Jo = (e) =>
    e < 0 ? 1 / Math.max(1 + e, qo.minDamping) : Math.max(1 - e, qo.minDamping);
function Yo(e, t) {
  if (!(e > 1)) return 1;
  let n = Math.sqrt(e * e - 1),
    r = e - n,
    i = e + n,
    a = 2 * n * Math.exp(-t) * (1 + t);
  return (
    Qo(
      (e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a,
      (e) => Math.exp(-i * e) - Math.exp(-r * e),
      t,
    ) / t
  );
}
function Xo(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Zo = 12;
function Qo(e, t, n) {
  let r = n;
  for (let n = 1; n < Zo; n++) r -= e(r) / t(r);
  return r;
}
var $o = 0.001;
function es({ duration: e = qo.duration, bounce: t = qo.bounce }) {
  let n, r;
  qo.maxDuration;
  let i = Jo(t);
  ((e = Ii(qo.minDuration, qo.maxDuration, qi(e))),
    i < 1
      ? ((n = (t) => {
          let n = t * i,
            r = n * e,
            a = Xo(t, i),
            o = Math.exp(-r);
          return $o - (n / a) * o;
        }),
        (r = (t) => {
          let r = t * i * e,
            a = i * i * t * t * e,
            o = Math.exp(-r),
            s = Xo(t * t, i);
          return ((-n(t) + $o > 0 ? -1 : 1) * -a * o) / s;
        }))
      : ((n = (t) => -0.001 + Math.exp(-t * e) * (t * e + 1)),
        (r = (t) => Math.exp(-t * e) * (-t * (e * e)))));
  let a = 5 / e,
    o = Qo(n, r, a),
    s = o * Yo(i, o * e),
    c = s * s;
  return { stiffness: c, damping: i * 2 * Math.sqrt(c), duration: Ki(e) };
}
var ts = (e, t) => (t ? e >= 0 : e > 0) && e < 1 / 0;
function ns(e, t) {
  if (ts(e, t)) return e;
}
function rs(e) {
  let t = ns(e.stiffness),
    n = ns(e.damping, !0),
    r = ns(e.mass),
    i = {
      ...e,
      stiffness: t ?? qo.stiffness,
      damping: n ?? qo.damping,
      mass: r ?? qo.mass,
      isResolvedFromDuration: !1,
      isTimeDefined:
        (t ?? n ?? r) === void 0 &&
        (e.duration !== void 0 || e.bounce !== void 0),
    };
  if (i.isTimeDefined) {
    if (e.visualDuration) {
      let t = Jo(e.bounce || 0),
        n =
          ((2 * Math.PI) / (e.visualDuration * 1.2)) *
          Yo(t, (2 * Math.PI) / 1.2);
      ((i.stiffness = n * n), (i.damping = 2 * t * Math.sqrt(i.stiffness)));
    } else (Object.assign(i, es(i)), (i.isResolvedFromDuration = !0));
    (!ts(i.stiffness) || !ts(i.damping, !0)) &&
      ((i.stiffness = qo.stiffness), (i.damping = qo.damping));
  }
  return i;
}
function is(e = qo.visualDuration, t = qo.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    r = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: r },
    {
      stiffness: o,
      damping: s,
      mass: c,
      duration: l,
      isResolvedFromDuration: u,
      isTimeDefined: d,
    } = rs({ ...n }),
    f = (e) => (d ? 0 : -qi(e)),
    p = s / (2 * Math.sqrt(o * c)),
    m = qi(Math.sqrt(o / c)),
    h = p * m,
    g = {
      target: i,
      delta: i - r,
      velocity: f(n.velocity || 0) || 0,
      restSpeed: 0,
      restDelta: 0,
    },
    _ = () => {
      let e = Math.abs(g.delta) < 5;
      ((g.restSpeed =
        n.restSpeed || (e ? qo.restSpeed.granular : qo.restSpeed.default)),
        (g.restDelta =
          n.restDelta || (e ? qo.restDelta.granular : qo.restDelta.default)));
    };
  _();
  let v, y, b;
  if (p < 1) {
    let e = Xo(m, p),
      t = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    b = () => {
      ((t.A = (g.velocity + h * g.delta) / e),
        (t.sinC = h * t.A + g.delta * e),
        (t.cosC = h * g.delta - t.A * e));
    };
    let n = (n) => {
      n !== t.t &&
        ((t.t = n),
        (t.env = Math.exp(-h * n)),
        (t.sin = Math.sin(e * n)),
        (t.cos = Math.cos(e * n)));
    };
    ((v = (e) => (n(e), g.target - t.env * (t.A * t.sin + g.delta * t.cos))),
      (y = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos))));
  } else if (p === 1) {
    v = (e) =>
      g.target - Math.exp(-m * e) * (g.delta + (g.velocity + m * g.delta) * e);
    let e = { C: 0 };
    ((b = () => {
      e.C = g.velocity + m * g.delta;
    }),
      (y = (t) => Math.exp(-m * t) * (m * e.C * t - g.velocity)));
  } else {
    let e = m * Math.sqrt(p * p - 1),
      t = h - e,
      n = h + e,
      r = d ? 1 / 0 : 300 / e,
      i = (e, t) => Math.exp(t > r ? -e * r - h * (t - r) : -e * t),
      a = { S: 0, F: 0 };
    ((b = () => {
      let t = (g.velocity + h * g.delta) / e;
      ((a.S = (g.delta + t) / 2), (a.F = (g.delta - t) / 2));
    }),
      (v = (e) => g.target - a.S * i(t, e) - a.F * i(n, e)),
      (y = (e) => t * a.S * i(t, e) + n * a.F * i(n, e)));
  }
  b();
  let x = (u && l) || null,
    S = {
      calculatedDuration: x,
      retarget: (e, t) => {
        ((g.target = e[e.length - 1]),
          (g.delta = g.target - e[0]),
          (g.velocity = f(t)),
          (n.restSpeed && n.restDelta) || _(),
          (S.calculatedDuration = x),
          (a.done = !1),
          b());
      },
      velocity: (e) => Ki(y(e)),
      next: (e) => {
        let t = v(e);
        if (u) a.done = e >= l;
        else {
          let n = Ki(y(e));
          a.done =
            Math.abs(n) <= g.restSpeed && Math.abs(g.target - t) <= g.restDelta;
        }
        return ((a.value = a.done ? g.target : t), a);
      },
      toString: () => {
        let e = Math.min(Go(S), Wo),
          t = Uo((t) => S.next(e * t).value, e, 30);
        return e + `ms ` + t;
      },
      toTransition: () => {},
    };
  return S;
}
is.applyToOptions = (e) => {
  let t = Ko(e, 100, is);
  return (
    (e.ease = t.ease),
    (e.duration = Ki(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
function as({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => e < s || e > c,
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => {
      let t = v(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : _ + t));
    },
    b,
    x,
    S = (e) => {
      p(f.value) &&
        ((b = e),
        (x = is({
          keyframes: [f.value, m(f.value)],
          velocity: (-v(e) / r) * 1e3,
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !x && b === void 0 && ((t = !0), y(e), S(e)),
          b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f)
        );
      },
    }
  );
}
function os(e, t, n) {
  let r = [],
    i = n || Li.mix || Fo,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = Ui(Array.isArray(t) ? t[n] || Hi : t, a)), r.push(a));
  }
  return r;
}
function ss(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = os(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Wi(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Ii(e[0], e[a - 1], t)) : l;
}
function cs(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Wi(0, t, r);
    e.push(V(n, 1, i));
  }
}
function ls(e) {
  let t = [0];
  return (cs(t, e.length - 1), t);
}
function us(e, t) {
  return e.map((e) => e * t);
}
function ds(e, t) {
  return e.map(() => t || fa).splice(0, e.length - 1);
}
function fs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = pa(r) ? r.map(va) : va(r) || fa,
    a = { done: !1, value: t[0] };
  if (
    t.length === 2 &&
    !Array.isArray(i) &&
    (!n || n.length !== 2 || (n[0] === 0 && n[1] === 1))
  ) {
    let [n, r] = t,
      o = n === r ? void 0 : (Li.mix || Fo)(n, r);
    return {
      calculatedDuration: e,
      next: (t) => (
        (a.value = o ? o(i(e > 0 ? Ii(0, 1, t / e) : 1)) : r),
        (a.done = t >= e),
        a
      ),
    };
  }
  let o = ss(us(n && n.length === t.length ? n : ls(t), e), t, {
    ease: Array.isArray(i) ? i : ds(t, i),
  });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var ps = 5;
function ms(e, t, n) {
  let r = Math.max(t - ps, 0);
  return Ji(n - e(r), t - r);
}
function hs(e, t, n = 0) {
  return t <= 0
    ? n
    : e.velocity
      ? e.velocity(t)
      : ms((t) => e.next(t).value, t, e.next(t).value);
}
var gs = (e) => e !== null;
function _s(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(gs),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var vs = { decay: as, inertia: as, tween: fs, keyframes: fs, spring: is };
function ys(e) {
  typeof e.type == `string` && (e.type = vs[e.type]);
}
function bs(e, t) {
  return {
    kind: e,
    animation: t,
    timestamp: Sa.now(),
    frameTimestamp: ya.timestamp,
    frameIsProcessing: ya.isProcessing,
  };
}
function xs(e, t, n) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({ ...bs(`animation-start`, e), options: n ? { ...t, ...n } : t });
    } catch {}
}
function Ss(e, t) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n)
    try {
      n({ ...bs(`layout-animation-start`, e), node: t });
    } catch {}
}
var Cs = class {
    constructor() {
      this.isResolved = !1;
    }
    get finished() {
      return (
        (this._finished ||= this.isResolved
          ? Promise.resolve()
          : new Promise((e) => {
              this._resolve = e;
            })),
        this._finished
      );
    }
    updateFinished() {
      ((this._finished = this._resolve = void 0), (this.isResolved = !1));
    }
    notifyFinished() {
      ((this.isResolved = !0), this._resolve?.());
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  ws = (e) => e / 100,
  Ts = class extends Cs {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== Sa.now() && this.tick(Sa.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause(),
        xs(this, this.options));
    }
    initAnimation() {
      let { options: e } = this;
      ys(e);
      let {
          type: t = fs,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || fs;
      s !== fs &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = Ui(ws, Fo(o[0], o[1]))), (o = [0, 100]));
      let c = s(o === e.keyframes ? e : { ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({
          ...e,
          keyframes: [...o].reverse(),
          velocity: -a,
        })),
        c.calculatedDuration === null && (c.calculatedDuration = Go(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.currentTime = this.holdTime === null ? t : this.holdTime;
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (y = a)),
          (v = Ii(0, 1, n) * o));
      }
      let b;
      (_
        ? ((this.delayState.value = l[0]), (b = this.delayState))
        : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)));
      let { done: x } = b;
      !_ &&
        s !== null &&
        (x =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && p !== as && (b.value = _s(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return qi(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + qi(e);
    }
    get time() {
      return qi(this.currentTime);
    }
    set time(e) {
      ((e = Ki(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      return hs(this.generator, this.currentTime, this.options.velocity);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(Sa.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = qi(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Ho, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(Sa.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  },
  Es = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Ds(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Na) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Es.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var Os = /\b([a-z-]*)\(.*?\)/gu,
  ks = {
    ...go,
    getAnimatableNone: (e) => {
      let t = e.match(Os);
      return t ? t.map(Ds).join(` `) : e;
    },
  },
  As = {
    ...go,
    getAnimatableNone: (e) => {
      let t = go.parse(e);
      return go.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? { ...e, alpha: 1 }
              : e,
        ),
      );
    },
  },
  js = { ...Aa, transform: Math.round },
  Ms = {
    rotate: Wa,
    pathRotation: Wa,
    rotateX: Wa,
    rotateY: Wa,
    rotateZ: Wa,
    scale: Ma,
    scaleX: Ma,
    scaleY: Ma,
    scaleZ: Ma,
    skew: Wa,
    skewX: Wa,
    skewY: Wa,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: ja,
    originX: Ja,
    originY: Ja,
    originZ: B,
  },
  Ns = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    inset: B,
    insetBlock: B,
    insetBlockStart: B,
    insetBlockEnd: B,
    insetInline: B,
    insetInlineStart: B,
    insetInlineEnd: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    paddingBlock: B,
    paddingBlockStart: B,
    paddingBlockEnd: B,
    paddingInline: B,
    paddingInlineStart: B,
    paddingInlineEnd: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    marginBlock: B,
    marginBlockStart: B,
    marginBlockEnd: B,
    marginInline: B,
    marginInlineStart: B,
    marginInlineEnd: B,
    fontSize: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
    ...Ms,
    zIndex: js,
    fillOpacity: ja,
    strokeOpacity: ja,
    numOctaves: js,
  },
  Ps = {
    ...Ns,
    color: Xa,
    backgroundColor: Xa,
    outlineColor: Xa,
    fill: Xa,
    stroke: Xa,
    borderColor: Xa,
    borderTopColor: Xa,
    borderRightColor: Xa,
    borderBottomColor: Xa,
    borderLeftColor: Xa,
    filter: ks,
    WebkitFilter: ks,
    mask: As,
    WebkitMask: As,
  },
  Fs = (e) => Ps[e],
  Is = new Set([ks, As]);
function Ls(e, t) {
  let n = Fs(e);
  return (
    Is.has(n) || (n = go),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function Rs(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var zs = (e) => (e * 180) / Math.PI,
  Bs = (e) => Hs(zs(Math.atan2(e[1], e[0]))),
  Vs = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Bs,
    rotateZ: Bs,
    skewX: (e) => zs(Math.atan(e[1])),
    skewY: (e) => zs(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Hs = (e) => ((e %= 360), e < 0 && (e += 360), e),
  Us = Bs,
  Ws = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Gs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Ks = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ws,
    scaleY: Gs,
    scale: (e) => (Ws(e) + Gs(e)) / 2,
    rotateX: (e) => Hs(zs(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Hs(zs(Math.atan2(-e[2], e[0]))),
    rotateZ: Us,
    rotate: Us,
    skewX: (e) => zs(Math.atan(e[4])),
    skewY: (e) => zs(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function qs(e) {
  return +!!e.includes(`scale`);
}
function Js(e, t) {
  if (!e || e === `none`) return qs(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Ks), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Vs), (i = t));
  }
  if (!i) return qs(t);
  let a = r[t],
    o = i[1].split(`,`).map(Xs);
  return typeof a == `function` ? a(o) : o[a];
}
var Ys = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return Js(n, t);
};
function Xs(e) {
  return parseFloat(e.trim());
}
var Zs = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Qs = new Set([...Zs, `pathRotation`]),
  $s = (e) => e === Aa || e === B,
  ec = new Set([`x`, `y`, `z`]),
  tc = Zs.filter((e) => !ec.has(e));
function nc(e) {
  let t = [];
  return (
    tc.forEach((n) => {
      let r = e.getValue(n);
      if (r !== void 0) {
        let e = r.get(),
          i = +!!n.startsWith(`scale`);
        if (e === i) return;
        (t.push([n, e]), r.set(i));
      }
    }),
    t
  );
}
var rc = new Set([`bottom`, `right`]);
function ic(e, t, n, r, i, a) {
  let o = parseFloat(e);
  if (!isNaN(o)) return o;
  let { min: s, max: c } = t()[n],
    l = c - s;
  return a === `border-box` ? l : l - parseFloat(r) - parseFloat(i);
}
var ac = {
  width: (
    { width: e, paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
    i,
  ) => ic(e, i, `x`, t, n, r),
  height: (
    { height: e, paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
    i,
  ) => ic(e, i, `y`, t, n, r),
  top: ({ top: e }) => parseFloat(e),
  left: ({ left: e }) => parseFloat(e),
  bottom: ({ top: e }, t) => {
    let { y: n } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  right: ({ left: e }, t) => {
    let { x: n } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  x: ({ transform: e }) => Js(e, `x`),
  y: ({ transform: e }) => Js(e, `y`),
};
((ac.translateX = ac.x), (ac.translateY = ac.y));
var oc = new Set(),
  sc = !1,
  cc = !1,
  lc = !1;
function uc() {
  if (cc) {
    let e = [],
      t = new Set(),
      n = new Set();
    oc.forEach((r) => {
      r.needsMeasurement &&
        (e.push(r), t.add(r.element), rc.has(r.name) && n.add(r.element));
    });
    let r = new Map();
    (n.forEach((e) => {
      let t = nc(e);
      t.length && (r.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = r.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((cc = !1), (sc = !1), oc.forEach((e) => e.complete(lc)), oc.clear());
}
function dc() {
  oc.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (cc = !0));
  });
}
function fc() {
  ((lc = !0), dc(), uc(), (lc = !1));
}
function pc(e, t, n) {
  if (typeof e == `string`) {
    if (Ri(e) || Bi(e)) return parseFloat(e);
    if (!go.test(e) && go.test(n)) return Ls(t, n);
  }
  return e ?? void 0;
}
var mc = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (oc.add(this),
            sc || ((sc = !0), H.read(dc), H.resolveKeyframes(uc)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = pc(n.readValue(t, a), t, a);
          r !== void 0 && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      Rs(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        oc.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (oc.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  hc = (e) => e.startsWith(`--`);
function gc(e, t, n) {
  hc(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var _c = {};
function vc(e, t) {
  let n = Vi(e);
  return () => _c[t] ?? n();
}
var yc = vc(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  bc = vc(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  xc = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Sc = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: xc([0, 0.65, 0.55, 1]),
    circOut: xc([0.55, 0, 1, 0.45]),
    backIn: xc([0.31, 0.01, 0.66, -0.59]),
    backOut: xc([0.33, 1.53, 0.69, 0.99]),
  };
function Cc(e, t) {
  if (e)
    return typeof e == `function`
      ? bc()
        ? Uo(e, t)
        : `ease-out`
      : ha(e)
        ? xc(e)
        : Array.isArray(e)
          ? e.map((e) => Cc(e, t) || Sc.easeOut)
          : Sc[e];
}
function wc(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Cc(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function Tc(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Ec({ type: e, ...t }) {
  return Tc(e) && bc()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var Dc = class extends Cs {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = Ec(e);
      ((this.animation = wc(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = _s(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              gc(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }),
        xs(this, e, c));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e !== `idle` &&
        e !== `finished` &&
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement &&
        e?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return qi(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + qi(e);
    }
    get time() {
      return qi(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = Ki(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, onAttach: t, observe: n, ...r }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && yc()
          ? ((this.animation.timeline = e),
            Object.assign(this.animation, r),
            t?.(this.animation),
            Hi)
          : n(this)
      );
    }
  },
  Oc = { anticipate: oa, backInOut: aa, circInOut: la };
function kc(e) {
  return e in Oc;
}
function Ac(e) {
  typeof e.ease == `string` && kc(e.ease) && (e.ease = Oc[e.ease]);
}
var jc = 10,
  Mc = class extends Dc {
    constructor(e) {
      (Ac(e),
        ys(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new Ts({ ...a, autoplay: !1 }),
        s = Math.max(jc, Sa.now() - this.startTime),
        c = Ii(0, jc, s - jc),
        l = o.sample(s).value,
        { name: u } = this.options;
      (i && u && gc(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop());
    }
  },
  Nc = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (go.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function Pc(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Fc(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Nc(i, t),
    s = Nc(a, t);
  return !o || !s
    ? (o !== s && `${t}${i}${a}${o ? a : i}`, !1)
    : Pc(e) || ((n === `spring` || Tc(n)) && r);
}
function Ic(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var Lc = new Set([
    `opacity`,
    `clipPath`,
    `filter`,
    `transform`,
    `backgroundColor`,
  ]),
  Rc = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zc(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && Rc.test(e[t])) return !0;
  return !1;
}
var Bc = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  Vc = Vi(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function Hc(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!n || !(Lc.has(n) || Bc.has(n))) return !1;
  let c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    Vc() &&
    (Lc.has(n) || (Bc.has(n) && zc(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var Uc = 40,
  Wc = class extends Cs {
    constructor(e) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = Sa.now()));
      let { keyframes: t, name: n, motionValue: r, element: i } = e,
        a = e;
      ((a.autoplay ??= !0),
        (a.delay ??= 0),
        (a.type ??= `keyframes`),
        (a.repeat ??= 0),
        (a.repeatDelay ??= 0),
        (a.repeatType ??= `loop`));
      let o = i?.KeyframeResolver || mc;
      ((this.keyframeResolver = new o(
        t,
        (e, t, n) => this.onKeyframesResolved(e, t, a, !n),
        n,
        r,
        i,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l,
      } = n;
      this.resolvedAt = Sa.now();
      let u = !0;
      Fc(e, i, a, o) ||
        ((u = !1),
        (Li.instantAnimations || !s) && l?.(_s(e, n, t)),
        (e[0] = e[e.length - 1]),
        Ic(n),
        (n.repeat = 0));
      let d = r
          ? this.resolvedAt && this.resolvedAt - this.createdAt > Uc
            ? this.resolvedAt
            : this.createdAt
          : void 0,
        { onComplete: f } = n;
      ((n.startTime ??= d),
        (n.finalKeyframe = t),
        (n.keyframes = e),
        (n.onComplete = () => {
          (f?.(), this.notifyFinished());
        }));
      let p = u && !c && Hc(n),
        m;
      if (p) {
        n.element = n.motionValue?.owner?.current;
        try {
          m = new Mc(n);
        } catch {
          m = new Ts(n);
        }
      } else m = new Ts(n);
      ((this.pendingTimeline &&=
        ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)), void 0)),
        (this._animation = m));
    }
    get finished() {
      return this._animation ? this._animation.finished : super.finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), fc()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  },
  Gc = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(this.animations.map((e) => e.finished));
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((t) => t.attachTimeline(e));
      return () => {
        t.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get state() {
      return this.getAll(`state`);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      return Kc(this.animations, `duration`);
    }
    get iterationDuration() {
      return Kc(this.animations, `iterationDuration`);
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  };
function Kc(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
var qc = class extends Gc {
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
};
function Jc(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var Yc = 30,
  Xc = (e) => !isNaN(parseFloat(e)),
  Zc = { current: void 0 },
  Qc = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = Sa.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.notifyChange(), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = Sa.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Xc(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      var n;
      return e === `change`
        ? this.onChangeSubscribe(t)
        : ((n = this.events)[e] || (n[e] = new Gi())).add(t);
    }
    onChangeSubscribe(e) {
      let { events: t } = this;
      return (
        !t.change && !this.changeSubscriber
          ? (this.changeSubscriber = e)
          : (t.change ||
              ((t.change = new Gi()),
              t.change.add(this.changeSubscriber),
              (this.changeSubscriber = void 0)),
            t.change.add(e)),
        () => {
          (this.changeSubscriber === e
            ? (this.changeSubscriber = void 0)
            : t.change?.remove(e),
            this.stopIfUnobserved());
        }
      );
    }
    stopIfUnobserved() {
      H.read(() => {
        !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
      });
    }
    clearListeners() {
      this.changeSubscriber = void 0;
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.notifyChange();
    }
    notifyChange() {
      let { current: e, changeSubscriber: t } = this;
      t ? t(e) : this.events.change?.notify(e);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (Zc.current && Zc.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Sa.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > Yc
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Yc);
      return Ji(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          this.hasAnimated = !0;
          let n = !1,
            r;
          ((r = e(() => {
            ((n = !0),
              this.events.animationComplete?.notify(),
              this.animation === r && this.clearAnimation(),
              t());
          })),
            n || (this.animation = r),
            this.events.animationStart?.notify());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      this.animation = void 0;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function $c(e, t) {
  return new Qc(e, t);
}
function el(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function tl(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : el(n, e);
}
var nl = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  rl = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  il = { type: `keyframes`, duration: 0.8 },
  al = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ol = (e, { keyframes: t }) =>
    t.length > 2
      ? il
      : Qs.has(e)
        ? e.startsWith(`scale`)
          ? rl(t[1])
          : nl
        : al,
  sl = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function cl(e) {
  for (let t in e) if (!sl.has(t)) return !0;
  return !1;
}
var ll =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let s = tl(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r;
      l -= Ki(c);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: `easeOut`,
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      (cl(s) || Object.assign(u, ol(e, u)),
        (u.duration &&= Ki(u.duration)),
        (u.repeatDelay &&= Ki(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (Ic(u), u.delay === 0 && (d = !0)),
        (Li.instantAnimations ||
          Li.skipAnimations ||
          i?.shouldSkipAnimations ||
          s.skipAnimations) &&
          ((d = !0), Ic(u), (u.delay = 0)),
        (u.allowFlatten = !s.type && !s.ease),
        d && !a && t.get() !== void 0)
      ) {
        let e = _s(u.keyframes, s);
        if (e !== void 0) {
          H.update(() => {
            (u.onUpdate(e), u.onComplete());
          });
          return;
        }
      }
      return s.isSync ? new Ts(u) : new Wc(u);
    },
  ul = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function dl(e) {
  let t = ul.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function fl(e, t, n = 1) {
  `${e}`;
  let [r, i] = dl(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Ri(e) ? parseFloat(e) : e;
  }
  return Da(i) ? fl(i, t, n + 1) : i;
}
function pl(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function ml(e, t, n, r) {
  let i = (t) =>
    typeof t == `function` ? t(n === void 0 ? e.custom : n, ...pl(r)) : t;
  return (
    (t = i(t)),
    typeof t == `string` && (t = e.variants && e.variants[t]),
    i(t)
  );
}
function hl(e, t, n) {
  return ml(e.getProps(), t, n, e);
}
var gl = (e, t) => (t === `exit` ? e.presenceContext?.custom : void 0),
  _l = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Zs]),
  vl = (e) => Array.isArray(e);
function yl(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $c(n));
}
function bl(e) {
  return vl(e) ? e[e.length - 1] || 0 : e;
}
function xl(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = hl(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) yl(e, t, bl(i[t]));
}
var Sl = (e) => !!(e && e.getVelocity);
function Cl(e) {
  return !!(Sl(e) && e.add);
}
function wl(e, t) {
  let n = e.getValue(`willChange`);
  if (Cl(n)) return n.add(t);
  if (!n && Li.WillChange) {
    let n = new Li.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Tl(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var El = `data-` + Tl(`framerAppearId`);
function Dl(e) {
  return e.props[El];
}
var Ol = typeof window < `u`;
function kl({ protectedKeys: e, needsAnimating: t }, n) {
  let r = n in e && !t[n];
  return ((t[n] = !1), r);
}
function Al(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? el(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState?.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && kl(f, t))) continue;
    let o = { delay: n, ...tl(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      H.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (Ol && window.MotionHandoffAnimation) {
      let n = Dl(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, H);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    wl(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(ll(t, r, i, m && _l.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      H.update(() => {
        o && xl(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function jl(e, t, n = {}) {
  let r = hl(e, t, gl(e, n.type)),
    i =
      n.transitionOverride ||
      (r?.transition ?? (e.getDefaultTransition() || {})),
    a = () => Promise.all(r ? Al(e, r, n) : []),
    o = (r = 0) => {
      let { variantChildren: a } = e,
        { delayChildren: o = 0, staggerChildren: s, staggerDirection: c } = i,
        l = [];
      return (
        a?.forEach((e) => {
          (e.notify(`AnimationStart`, t),
            l.push(
              jl(e, t, {
                ...n,
                delay: r + (typeof o == `function` ? 0 : o) + Jc(a, e, o, s, c),
              }).then(() => e.notify(`AnimationComplete`, t)),
            ));
        }),
        Promise.all(l)
      );
    },
    { when: s } = i;
  return s
    ? s === `beforeChildren`
      ? a().then(() => o())
      : o().then(a)
    : Promise.all([a(), o(n.delay)]);
}
function Ml(e, t, n = {}) {
  return (
    e.notify(`AnimationStart`, t),
    (Array.isArray(t)
      ? Promise.all(t.map((t) => jl(e, t, n)))
      : typeof t == `string`
        ? jl(e, t, n)
        : Promise.all(Al(e, hl(e, t, n.custom), n))
    ).then(() => {
      e.notify(`AnimationComplete`, t);
    })
  );
}
var Nl = { test: (e) => e === `auto`, parse: (e) => e },
  Pl = (e) => (t) => t.test(e),
  Fl = [Aa, B, Ga, Wa, qa, Ka, Nl],
  Il = (e) => Fl.find(Pl(e));
function Ll(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || Bi(e);
}
var Rl = new Set([`auto`, `none`, `0`]);
function zl(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Rl.has(t) && so(t) && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] !== i && (e[r] = Ls(n, i));
}
var Bl = class extends mc {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Da(r))) {
          let i = fl(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !_l.has(n) || e.length !== 2)) return;
      let [r, i] = e;
      if (typeof r == `number` && typeof i == `number`) return;
      let a = Il(r),
        o = Il(i);
      if (ka(r) !== ka(i) && ac[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o)
        if ($s(a) && $s(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else ac[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++)
        (e[t] === null || Ll(e[t])) && n.push(t);
      n.length && zl(e, n, t);
    }
    measure() {
      let { element: e, name: t } = this;
      return ac[t](window.getComputedStyle(e.current), () =>
        e.measureViewportBox(),
      );
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = this.measure()),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && this.motionValue?.jump(r, !1);
    }
    measureEndState() {
      let { element: e, unresolvedKeyframes: t } = this;
      if (!e || !e.current) return;
      this.motionValue?.jump(this.measuredOrigin, !1);
      let n = t.length - 1,
        r = t[n];
      ((t[n] = this.measure()),
        r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Vl = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomRightRadius`,
    `borderBottomLeftRadius`,
  ],
  Hl = [];
function Ul(e) {
  (typeof e.test == `function` && e.read, Wl(e), Hl.unshift(e));
}
function Wl(e) {
  Fi(Hl, e);
}
function Gl(e) {
  return Hl.find((t) => t.test(e));
}
function Kl(e, t, n = {}, r) {
  let i = [],
    { velocity: a } = n,
    o = n.reduceMotion ?? r?.shouldReduceMotion;
  for (let s in t) {
    if (s === `transition` || s === `transitionEnd`) continue;
    let c = t[s];
    if (c === void 0) continue;
    let l = e(s),
      u = l.get();
    if (
      u !== void 0 &&
      !l.isAnimating() &&
      !Array.isArray(c) &&
      c === u &&
      !a
    ) {
      H.update(() => l.set(c));
      continue;
    }
    (l.start(ll(s, l, c, o && _l.has(s) ? { type: !1 } : n, r)),
      l.animation && i.push(l.animation));
  }
  let { transitionEnd: s } = t;
  if (s) {
    let t = () =>
      H.update(() => {
        for (let t in s) e(t).set(s[t]);
      });
    i.length ? Promise.all(i).then(t) : t();
  }
  return i;
}
function ql(e, t, n, r, i) {
  return Kl(
    (r) => {
      let a = e.get(t, r);
      if (!a) {
        let o;
        if (!i) {
          let i = n[r];
          ((o = Jl(i) ?? e.read(t, r, i)), `${r}`);
        }
        ((a = $c(o, { owner: i })), e(t, { [r]: a }));
      }
      return a;
    },
    n,
    r,
    i,
  );
}
function Jl(e) {
  let t = Array.isArray(e) ? e[0] : void 0;
  return t === null ? void 0 : t;
}
function Yl(e) {
  return zi(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function Xl(e) {
  return zi(e) && `ownerSVGElement` in e;
}
var Zl = (e, t) => (t && typeof e == `number` ? t.transform(e) : e);
function Ql(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var $l = class {
  constructor(e = H.render) {
    ((this.step = e),
      (this.values = new Map()),
      (this.pending = []),
      (this.numPending = 0),
      (this.flush = () => {
        let { pending: e, numPending: t } = this;
        this.numPending = 0;
        for (let n = 0; n < t; n++) e[n]();
      }));
  }
  set(e, t, n, r) {
    if ((this.values.get(e)?.onRemove(), r))
      for (let e of this.values.values()) e.value === r && (n = e.render);
    let i = () => n && this.schedule(n);
    t.get() !== void 0 && i();
    let a = t.on(`change`, i),
      o = () => {
        (a(),
          n && !r && this.cancel(n),
          this.values.get(e)?.onRemove === o && this.values.delete(e));
      };
    return (
      this.values.set(e, { value: t, render: r ? void 0 : n, onRemove: o }),
      o
    );
  }
  get(e) {
    return this.values.get(e)?.value;
  }
  release() {
    let e = new Map();
    return (
      this.values.forEach((t, n) => {
        (e.set(n, t.value), t.onRemove());
      }),
      (this.transformKeys = this.transformValues = void 0),
      e
    );
  }
  schedule(e) {
    let { pending: t, numPending: n } = this;
    for (let r = 0; r < n; r++) if (t[r] === e) return;
    (n || this.step(this.flush), (t[this.numPending++] = e));
  }
  cancel(e) {
    let { pending: t } = this;
    for (let n = 0; n < this.numPending; n++)
      if (t[n] === e) {
        t[n] = t[--this.numPending];
        return;
      }
  }
};
function eu(e, { step: t, ...n } = {}) {
  let r = new WeakMap();
  return Object.assign(
    (n, i) => {
      let a = r.get(n) ?? new $l(t);
      r.set(n, a);
      let o = [];
      for (let t in i) {
        let r = i[t],
          s = e(n, a, t, r);
        o.push(s);
      }
      return () => {
        for (let e of o) e();
      };
    },
    n,
    {
      get: (e, t) => r.get(e)?.get(t),
      flush: (e) => r.get(e)?.flush(),
      state: (e) => r.get(e),
    },
  );
}
var tu = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  nu = {};
function ru(e) {
  let t = ``,
    { transformKeys: n = [], transformValues: r = {} } = e;
  for (let e = 0; e < n.length; e++) {
    let i = n[e],
      a = r[i].get();
    a !== void 0 &&
      (typeof a == `number` ? a : parseFloat(a)) !== +!!i.startsWith(`scale`) &&
      (t +=
        (t && ` `) +
        (nu[i] || (nu[i] = (tu[i] || i) + `(`)) +
        Zl(a, Ms[i]) +
        `)`);
  }
  let i = e.get(`pathRotation`)?.get();
  return (
    i && (t += (t && ` `) + `rotate(` + Zl(i, Ms.pathRotation) + `)`),
    t || `none`
  );
}
var iu = new Set([`originX`, `originY`, `originZ`]),
  au = (e, t) => Zl(e.get(t)?.get(), Ns[t]),
  ou = (e, t, n, r) => {
    let i, a;
    if (Qs.has(n)) {
      if (n !== `pathRotation`) {
        let e = (t.transformKeys ??= []);
        (((t.transformValues ??= {})[n] = r),
          e.includes(n) ||
            (e.push(n), e.sort((e, t) => Zs.indexOf(e) - Zs.indexOf(t))));
      }
      (t.get(`transform`) ||
        (!Yl(e) &&
          !t.get(`transformBox`) &&
          ou(e, t, `transformBox`, new Qc(`fill-box`)),
        t.set(`transform`, new Qc(`none`), () => {
          e.style.transform = ru(t);
        })),
        (a = t.get(`transform`)));
    } else
      iu.has(n)
        ? (t.get(`transformOrigin`) ||
            t.set(`transformOrigin`, new Qc(``), () => {
              let n = au(t, `originX`) ?? `50%`,
                r = au(t, `originY`) ?? `50%`,
                i = au(t, `originZ`) ?? 0;
              e.style.transformOrigin = `${n} ${r} ${i}`;
            }),
          (a = t.get(`transformOrigin`)))
        : (i = hc(n)
            ? () => {
                e.style.setProperty(n, r.get());
              }
            : () => {
                e.style[n] = Zl(r.get(), Ns[n]);
              });
    return t.set(n, r, i, a);
  },
  su = (e) => Yl(e) || Xl(e),
  cu = (e, t) => {
    if (Qs.has(t)) return Ys(e, t);
    let n = getComputedStyle(e),
      r = hc(t) ? n.getPropertyValue(t) : n[t];
    return (typeof r == `string` && r.trim()) || 0;
  },
  lu = eu(ou, { test: su, read: cu }),
  uu = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  du = Zs.length;
function fu(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < du; a++) {
    let o = Zs[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = Zl(s, Ns[o]);
      if (!c) {
        i = !1;
        let t = uu[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${Zl(a, Ns.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function pu(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Qs.has(e)) {
      o = !0;
      continue;
    }
    if (Ta(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = Zl(n, Ns[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = fu(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var mu = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  hu = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function gu(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? mu : hu;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var _u = [
  `transform`,
  `opacity`,
  `offsetDistance`,
  `offsetPath`,
  `offsetRotate`,
  `offsetAnchor`,
];
function vu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if ((pu(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  for (let e of _u) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  ((f.transform || d.transformOrigin) &&
    ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
    delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && gu(d, i, a, o, !1));
}
function yu(e, t) {
  if (!(t in e)) return !1;
  let n =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) ||
    Object.getOwnPropertyDescriptor(e, t);
  return n && typeof n.set == `function`;
}
var bu = (e, t, n, r, i = n) => {
  let a = yu(e, i);
  !a && (i.startsWith(`data`) || i.startsWith(`aria`)) && (i = Tl(i));
  let o = Ns[n] || Ns[i],
    s = a
      ? () => {
          e[i] = Zl(r.get(), Ns[n]);
        }
      : () => {
          let t = Zl(r.get(), o);
          t == null ? e.removeAttribute(i) : e.setAttribute(i, String(t));
        };
  return t.set(n, r, s);
};
function xu(e, t, n, r) {
  return (
    H.render(() => e.setAttribute(`pathLength`, `1`)),
    n === `pathOffset`
      ? t.set(n, r, () => {
          let t = r.get();
          e.setAttribute(`stroke-dashoffset`, `${-t}`);
        })
      : (t.get(`stroke-dasharray`) ||
          t.set(`stroke-dasharray`, new Qc(`1 1`), () => {
            let n = t.get(`pathLength`)?.get() ?? 1,
              r = t.get(`pathSpacing`)?.get();
            e.setAttribute(`stroke-dasharray`, `${n} ${r ?? 1 - Number(n)}`);
          }),
        t.set(n, r, void 0, t.get(`stroke-dasharray`)))
  );
}
var Su = eu(
  (e, t, n, r) =>
    n.startsWith(`path`)
      ? xu(e, t, n, r)
      : n.startsWith(`attr`)
        ? bu(e, t, n, r, Cu(n))
        : (Qs.has(n) || iu.has(n) || hc(n) || n in e.style ? ou : bu)(
            e,
            t,
            n,
            r,
          ),
  {
    test: Xl,
    read: (e, t) =>
      Qs.has(t)
        ? Ns[t]?.default || 0
        : hc(t) || _u.includes(t)
          ? cu(e, t) || e.getAttribute(Tl(t)) || 0
          : ((t = Cu(t)), e.getAttribute(Tl(t)) ?? e.getAttribute(t) ?? void 0),
  },
);
function Cu(e) {
  return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
function wu({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Tu({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Eu(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Du(e) {
  return e === void 0 || e === 1;
}
function Ou({ scale: e, scaleX: t, scaleY: n }) {
  return !Du(e) || !Du(t) || !Du(n);
}
function ku(e) {
  return (
    Ou(e) ||
    Au(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Au(e) {
  return ju(e.x) || ju(e.y);
}
function ju(e) {
  return e && e !== `0%`;
}
function Mu(e, t, n) {
  return n + t * (e - n);
}
function Nu(e, t, n, r, i) {
  return (i !== void 0 && (e = Mu(e, i, r)), Mu(e, n, r) + t);
}
function Pu(e, t = 0, n = 1, r, i) {
  ((e.min = Nu(e.min, t, n, r, i)), (e.max = Nu(e.max, t, n, r, i)));
}
function Fu(e, { x: t, y: n }) {
  (Pu(e.x, t.translate, t.scale, t.originPoint),
    Pu(e.y, n.translate, n.scale, n.originPoint));
}
var Iu = 0.999999999999,
  Lu = 1.0000000000001;
function Ru(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (zu(e.x, -a.scroll.offset.x), zu(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Fu(e, o)),
      r && ku(a.latestValues) && Hu(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < Lu && t.x > Iu && (t.x = 1), t.y < Lu && t.y > Iu && (t.y = 1));
}
function zu(e, t) {
  ((e.min += t), (e.max += t));
}
function Bu(e, t, n, r, i = 0.5) {
  Pu(e, t, n, V(e.min, e.max, i), r);
}
function Vu(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Hu(e, t, n) {
  let r = n ?? e;
  (Bu(e.x, Vu(t.x, r.x), t.scaleX, t.scale, t.originX),
    Bu(e.y, Vu(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Uu(e, t) {
  return wu(Eu(e.getBoundingClientRect(), t));
}
function Wu(e, t, n) {
  let r = Uu(e, n),
    { scroll: i } = t;
  return (i && (zu(r.x, i.offset.x), zu(r.y, i.offset.y)), r);
}
var Gu = {},
  Ku = (e) => (Xl(e) ? Su : lu),
  qu = class {
    constructor(e, t) {
      ((this.effect = e), (this.current = t), (this.KeyframeResolver = Bl));
    }
    getValue(e) {
      return this.effect.get(this.current, e);
    }
    readValue(e, t) {
      return this.effect.read(this.current, e, t);
    }
    render() {
      this.effect.flush(this.current);
    }
    measureViewportBox() {
      return Uu(this.current);
    }
    getProps() {
      return Gu;
    }
  };
function Ju(e, t, n, r) {
  if (r) return Kl((e) => r.getValue(e, null), t, n, r);
  let i = Ku(e);
  return ql(i, e, t, n, new qu(i, e));
}
var Yu = eu(
    (e, t, n, r) =>
      t.set(n, r, () => {
        e[n] = r.get();
      }),
    {
      test: (e) => zi(e),
      read: (e, t) => {
        let n = e[t];
        return typeof n == `string` || typeof n == `number` ? n : void 0;
      },
    },
  ),
  { schedule: Xu, cancel: Zu } = zo(queueMicrotask, !1),
  Qu = { x: !1, y: !1 };
function $u() {
  return Qu.x || Qu.y;
}
function ed(e) {
  return e === `x` || e === `y`
    ? Qu[e]
      ? null
      : ((Qu[e] = !0),
        () => {
          Qu[e] = !1;
        })
    : Qu.x || Qu.y
      ? null
      : ((Qu.x = Qu.y = !0),
        () => {
          Qu.x = Qu.y = !1;
        });
}
function td(e, t) {
  let n = Ql(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function nd(e) {
  return !(e.pointerType === `touch` || $u());
}
function rd(e, t, n = {}) {
  let [r, i, a] = td(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!nd(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
var id = (e, t) => (t ? e === t || id(e, t.parentElement) : !1),
  ad = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  od = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function sd(e) {
  return od.has(e.tagName) || e.isContentEditable === !0;
}
var cd = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function ld(e) {
  return cd.has(e.tagName) || e.isContentEditable === !0;
}
var ud = new WeakSet();
function dd(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function fd(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var pd = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = dd(() => {
    if (ud.has(n)) return;
    fd(n, `down`);
    let e = dd(() => {
      fd(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => fd(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function md(e) {
  return ad(e) && !$u();
}
var hd = new WeakSet();
function gd(e, t, n = {}) {
  let [r, i, a] = td(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!md(e) || hd.has(e)) return;
      (ud.add(r), n.stopPropagation && hd.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (window.removeEventListener(`pointerup`, c, o),
            window.removeEventListener(`pointercancel`, l, o),
            ud.has(r) && ud.delete(r),
            md(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(
            e,
            r === window ||
              r === document ||
              n.useGlobalTarget ||
              id(r, e.target),
          );
        },
        l = (e) => {
          s(e, !1);
        };
      (window.addEventListener(`pointerup`, c, o),
        window.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        Yl(e) &&
          (e.addEventListener(`focus`, (e) => pd(e, i)),
          !sd(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
var _d = new WeakMap(),
  vd,
  yd = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + `Size`]
      : Xl(r) && `getBBox` in r
        ? r.getBBox()[t]
        : r[n],
  bd = yd(`inline`, `width`, `offsetWidth`),
  xd = yd(`block`, `height`, `offsetHeight`);
function Sd({ target: e, borderBoxSize: t }) {
  _d.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return bd(e, t);
      },
      get height() {
        return xd(e, t);
      },
    });
  });
}
function Cd(e) {
  e.forEach(Sd);
}
function wd() {
  typeof ResizeObserver > `u` || (vd = new ResizeObserver(Cd));
}
function Td(e, t) {
  vd || wd();
  let n = Ql(e);
  return (
    n.forEach((e) => {
      let n = _d.get(e);
      (n || ((n = new Set()), _d.set(e, n)), n.add(t), vd?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = _d.get(e);
        (n?.delete(t), n?.size || vd?.unobserve(e));
      });
    }
  );
}
var Ed = new Set(),
  Dd;
function Od() {
  ((Dd = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Ed.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, Dd));
}
function kd(e) {
  return (
    Ed.add(e),
    Dd || Od(),
    () => {
      (Ed.delete(e),
        !Ed.size &&
          typeof Dd == `function` &&
          (window.removeEventListener(`resize`, Dd), (Dd = void 0)));
    }
  );
}
function Ad(e, t) {
  return typeof e == `function` ? kd(e) : Td(e, t);
}
var jd = { value: null, addProjectionMetrics: null };
function Md(e) {
  return Xl(e) && e.tagName === `svg`;
}
var Nd = (e) => (typeof e == `number` ? e : parseFloat(e)),
  Pd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fd = () => ({ x: Pd(), y: Pd() }),
  Id = () => ({ min: 0, max: 0 }),
  Ld = () => ({ x: Id(), y: Id() }),
  Rd = new WeakMap();
function zd(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Bd(e) {
  return typeof e == `string` || Array.isArray(e);
}
var Vd = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Hd = [`initial`, ...Vd];
function Ud(e) {
  if (zd(e.animate)) return !0;
  for (let t = 0; t < Hd.length; t++) if (Bd(e[Hd[t]])) return !0;
  return !1;
}
function Wd(e) {
  return !!(Ud(e) || e.variants);
}
function Gd(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (Sl(i)) e.addValue(r, i);
    else if (Sl(a)) e.addValue(r, $c(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, $c(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var Kd = { current: null },
  qd = { current: !1 },
  Jd = typeof window < `u`;
function Yd() {
  if (((qd.current = !0), Jd))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Kd.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Kd.current = !1;
}
var Xd = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Zd = {};
function Qd(e) {
  Zd = e;
}
function $d() {
  return Zd;
}
var ef = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = mc),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = Sa.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), H.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = Ud(t)),
        (this.isVariantNode = Wd(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && Sl(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      if (
        ((this.current = e),
        Rd.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.isVariantNode && !this.isControllingVariants)
      ) {
        let e = this;
        do e = e.props.inherit !== !1 && e.parent;
        while (e && !e.isVariantNode);
        if (e) {
          let { variantChildren: t } = e;
          (t.add(this), (this.removeFromVariantTree = () => t.delete(this)));
        }
      }
      (this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (qd.current || Yd(), (this.shouldReduceMotion = Kd.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        Bo(this.notifyUpdate),
        Bo(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        (this.enteringChildren ??= new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && Lc.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new Dc({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: Ki(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = Qs.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && H.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !e.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Zd) {
        let t = Zd[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Ld();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < Xd.length; t++) {
        let n = Xd[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = Gd(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    addValue(e, t) {
      let n = this.values.get(e);
      if (t !== n) {
        (n && this.removeValue(e),
          this.bindToMotionValue(e, t),
          this.values.set(e, t));
        let r = t.get();
        r !== void 0 && (this.latestValues[e] = r);
      }
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = $c(t ?? this.getDefaultValue?.(e), { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (Ri(n) || Bi(n))
            ? (n = parseFloat(n))
            : typeof n != `number` &&
              !go.test(n) &&
              go.test(t) &&
              (n = Ls(e, t)),
          this.setBaseTarget(e, Sl(n) ? n.get() : n)),
        Sl(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new Gi()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      Xu.render(this.render);
    }
  },
  tf = class extends ef {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Bl));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Sl(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  nf = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  };
function rf(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
var af = {};
function of(e, { layout: t, layoutId: n }) {
  return (
    Qs.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!af[e] || e === `opacity`))
  );
}
function sf(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (Sl(r[t]) ||
      (i && Sl(i[t])) ||
      of(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function cf(e) {
  return window.getComputedStyle(e);
}
var lf = class extends tf {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = rf));
    }
    mount(e) {
      (e.style, super.mount(e));
    }
    readValueFromInstance(e, t) {
      if (Qs.has(t)) return this.projection?.isProjecting ? qs(t) : Ys(e, t);
      {
        let n = cf(e),
          r = (Ta(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Uu(e, t);
    }
    build(e, t, n) {
      pu(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return sf(e, t, n);
    }
  },
  uf = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  df = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function ff(e, t, n, r) {
  rf(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(uf.has(n) ? n : Tl(n), t.attrs[n]);
}
function pf(e, t, n) {
  let r = sf(e, t, n);
  for (let n in e)
    if (Sl(e[n]) || Sl(t[n])) {
      let t =
        Zs.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var mf = class extends tf {
  constructor() {
    (super(...arguments),
      (this.type = `svg`),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ld));
  }
  getBaseTargetFromProps(e, t) {
    return Qs.has(t) ? (super.getBaseTargetFromProps(e, t) ?? qs(t)) : e[t];
  }
  getDefaultValue(e) {
    return Qs.has(e) ? (this.latestValues[e] ?? qs(e)) : void 0;
  }
  readValueFromInstance(e, t) {
    if (Qs.has(t)) {
      let e = Fs(t);
      return (e && e.default) || 0;
    }
    if (_u.includes(t)) {
      let n = getComputedStyle(e)[t];
      if (typeof n == `string` && n) return n.trim();
    }
    return ((t = uf.has(t) ? t : Tl(t)), e.getAttribute(t));
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return pf(e, t, n);
  }
  build(e, t, n) {
    vu(e, t, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, t, n, r) {
    ff(e, t, n, r);
  }
  mount(e) {
    ((this.isSVGTag = df(e.tagName)), super.mount(e));
  }
};
function hf(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var gf = [...Vd].reverse();
function _f(e) {
  let t = (t) =>
      Promise.all(t.map(({ animation: t, options: n }) => Ml(e, t, n))),
    n = yf(),
    r = !0,
    i = !1;
  function a(a) {
    let { props: o, parent: s, manuallyAnimateOnMount: c } = e,
      l = r || i,
      u = [],
      d = new Set(),
      f = {},
      p = 1 / 0,
      m = e;
    do m = m.props.inherit !== !1 && m.parent;
    while (m && !m.isControllingVariants);
    if (
      (gf.forEach((t, r) => {
        let i = n[t],
          h = o[t],
          g = m && m.props[t],
          _ = h === void 0 ? (Bd(g) || g === !1 ? g : void 0) : h,
          v = Bd(_),
          y = t === a ? i.isActive : null;
        y === !1 && (p = r);
        let b = v && h === void 0 && !(l && c);
        if (
          ((i.protectedKeys = { ...f }),
          (!i.isActive && y === null) ||
            (!_ && !i.prevProp) ||
            zd(_) ||
            typeof _ == `boolean`)
        )
          return;
        if (t === `exit` && i.isActive && y !== !0) {
          f = { ...f, ...i.prevResolvedValues };
          return;
        }
        let x = vf(i.prevProp, _),
          S = x || (v && ((y && !b) || r > p)),
          C = !1,
          w = Array.isArray(_) ? _ : [_],
          T = {};
        if (y !== !1)
          for (let n of w) {
            let {
              transition: r,
              transitionEnd: i,
              ...a
            } = hl(e, n, gl(e, t)) || {};
            T = { ...T, ...a, ...i };
          }
        let { prevResolvedValues: E } = i;
        for (let t in { ...E, ...T }) {
          if (t in f) continue;
          let n = T[t],
            r = E[t],
            a = Array.isArray(n) && Array.isArray(r) ? !hf(n, r) || x : n !== r;
          if (a && n == null) d.add(t);
          else if (a || (n !== void 0 && d.has(t))) {
            ((S = !0), d.delete(t) && (C = !0), (i.needsAnimating[t] = !0));
            let n = e.getValue(t);
            n && (n.liveStyle = !1);
          } else i.protectedKeys[t] = !0;
        }
        if (
          ((i.prevProp = _),
          (i.prevResolvedValues = T),
          i.isActive && (f = { ...f, ...T }),
          S && (!(b && x) || C))
        )
          for (let n of w) {
            let r = { type: t };
            if (typeof n == `string` && l && c && s?.enteringChildren) {
              let t = hl(s, n)?.transition?.delayChildren;
              r.delay = Jc(s.enteringChildren, e, t);
            }
            u.push({ animation: n, options: r });
          }
      }),
      d.size)
    ) {
      let { initial: t } = o,
        n = {},
        r =
          typeof t != `boolean` &&
          hl(e, Array.isArray(t) ? t[0] : t, e.presenceContext?.custom);
      (r && r.transition && (n.transition = r.transition),
        d.forEach((i) => {
          let a = e.getValue(i);
          a && (a.liveStyle = !0);
          let s = r && !Array.isArray(t) ? r[i] : void 0,
            c = e.getBaseTargetFromProps(o, i);
          n[i] =
            (s === void 0
              ? c !== void 0 && !Sl(c)
                ? c
                : e.initialValues[i] === void 0
                  ? e.baseTarget[i]
                  : void 0
              : s) ?? null;
        }),
        u.push({ animation: n }));
    }
    let h =
      (l && e.blockInitialAnimation) ||
      (r && !c && (o.initial === !1 || o.initial === o.animate));
    return ((r = i = !1), !h && u.length ? t(u) : Promise.resolve());
  }
  function o(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let i = a(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: (n) => {
      t = n(e);
    },
    getState: () => n,
    reset: () => {
      ((n = yf()), (i = !0));
    },
  };
}
function vf(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !hf(t, e) : !1;
}
function yf() {
  let e = {};
  for (let t of Vd)
    e[t] = {
      isActive: t === `animate`,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  return e;
}
function bf(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function xf(e, t) {
  (bf(e.x, t.x), bf(e.y, t.y));
}
function Sf(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
var Cf = 0.9999,
  wf = 1.0001,
  Tf = -0.01,
  Ef = 0.01;
function Df(e) {
  return e.max - e.min;
}
function Of(e, t, n) {
  return Math.abs(e - t) <= n;
}
function kf(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = V(t.min, t.max, e.origin)),
    (e.scale = Df(n) / Df(t)),
    (e.translate = V(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Cf && e.scale <= wf) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Tf && e.translate <= Ef) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Af(e, t, n, r) {
  (kf(e.x, t.x, n.x, r ? r.originX : void 0),
    kf(e.y, t.y, n.y, r ? r.originY : void 0));
}
function jf(e, t, n, r = 0) {
  ((e.min = (r ? V(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + Df(t)));
}
function Mf(e, t, n, r) {
  (jf(e.x, t.x, n.x, r?.x), jf(e.y, t.y, n.y, r?.y));
}
function Nf(e, t, n, r = 0) {
  let i = r ? V(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + Df(t)));
}
function Pf(e, t, n, r) {
  (Nf(e.x, t.x, n.x, r?.x), Nf(e.y, t.y, n.y, r?.y));
}
function Ff(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Mu(e, 1 / n, r)),
    i !== void 0 && (e = Mu(e, 1 / i, r)),
    e
  );
}
function If(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Ga.test(t) &&
      ((t = parseFloat(t)), (t = V(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = V(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = Ff(e.min, t, n, s, i)),
    (e.max = Ff(e.max, t, n, s, i)));
}
function Lf(e, t, [n, r, i], a, o) {
  If(e, t[n], t[r], t[i], t.scale, a, o);
}
var Rf = [`x`, `scaleX`, `originX`],
  zf = [`y`, `scaleY`, `originY`];
function Bf(e, t, n, r) {
  (Lf(e.x, t, Rf, n ? n.x : void 0, r ? r.x : void 0),
    Lf(e.y, t, zf, n ? n.y : void 0, r ? r.y : void 0));
}
function Vf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Hf(e) {
  return Vf(e.x) && Vf(e.y);
}
function Uf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Wf(e, t) {
  return Uf(e.x, t.x) && Uf(e.y, t.y);
}
function Gf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Kf(e, t) {
  return Gf(e.x, t.x) && Gf(e.y, t.y);
}
function qf(e) {
  return Df(e.x) / Df(e.y);
}
function Jf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Yf(e) {
  return [e(`x`), e(`y`)];
}
function Xf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Zf = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (B.test(e)) e = parseFloat(e);
        else return e;
      return `${Xf(e, t.target.x)}% ${Xf(e, t.target.y)}%`;
    },
  },
  Qf = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = go.parse(e);
      if (i.length > 5) return r;
      let a = go.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = V(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  };
function $f(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var ep = Vl.length,
  tp = (e) => typeof e == `number` || B.test(e);
function np(e, t, n, r, i, a) {
  i
    ? ((e.opacity = V(0, n.opacity ?? 1, ip(r))),
      (e.opacityExit = V(t.opacity ?? 1, 0, ap(r))))
    : a && (e.opacity = V(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < ep; i++) {
    let a = Vl[i],
      o = rp(t, a),
      s = rp(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || tp(o) === tp(s)
        ? ((e[a] = Math.max(V(Nd(o), Nd(s), r), 0)),
          (Ga.test(s) || Ga.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = V(t.rotate || 0, n.rotate || 0, r));
}
function rp(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var ip = op(0, 0.5, ca),
  ap = op(0.5, 0.95, Hi);
function op(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Wi(e, t, r)));
}
function sp(e, t, n) {
  let r = Sl(e) ? e : $c(e);
  return (r.start(ll(``, r, t, n)), r.animation);
}
function cp(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
var lp = (e, t) => e.depth - t.depth,
  up = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (Pi(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (Fi(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(lp),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function dp(e, t) {
  let n = Sa.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Bo(r), e(a - t));
    };
  return (H.setup(r, !0), () => Bo(r));
}
function fp(e) {
  return Sl(e) ? e.get() : e;
}
var pp = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      Pi(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (!r || r.isConnected === !1) &&
          !n.snapshot &&
          (Fi(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (
        (Fi(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
        let e = this.members[t];
        if (e.isPresent !== !1 && e.instance?.isConnected !== !1)
          return (this.promote(e), !0);
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        (n.updateSnapshot(), e.scheduleRender());
        let { layoutDependency: r } = n.options,
          { layoutDependency: i } = e.options;
        ((r === void 0 || r !== i) &&
          ((e.resumeFrom = n),
          t && (n.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root?.isUpdating && (e.isLayoutDirty = !0)),
          e.options.crossfade === !1 && n.hide());
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        (e.options.onExitComplete?.(),
          e.resumingFrom?.options.onExitComplete?.());
      });
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  },
  mp = {
    borderRadius: { ...Zf, applyTo: [...Vl] },
    borderTopLeftRadius: Zf,
    borderTopRightRadius: Zf,
    borderBottomLeftRadius: Zf,
    borderBottomRightRadius: Zf,
    boxShadow: Qf,
  },
  hp = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
Object.assign(af, { ...mp, ...af });
var gp = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  _p = [``, `X`, `Y`, `Z`],
  vp = 1e3,
  yp = 0;
function bp(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xp(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Dl(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, H, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xp(r);
}
function Sp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = yp++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            jd.value &&
              (gp.nodes =
                gp.calculatedTargetDeltas =
                gp.calculatedProjections =
                  0),
            this.nodes.forEach(Tp),
            this.nodes.forEach(Fp),
            this.nodes.forEach(Ip),
            this.nodes.forEach(Ep),
            jd.addProjectionMetrics && jd.addProjectionMetrics(gp));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new up());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Gi()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Xl(t) && !Md(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (H.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = dp(i, 250)),
              hp.hasAnimatedSinceResize &&
                ((hp.hasAnimatedSinceResize = !1), this.nodes.forEach(Pp)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Up,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !Kf(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...tl(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || Pp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Bo(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Lp),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          xp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` ||
            typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(kp),
          this.nodes.forEach(Op));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ap);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(jp),
            this.nodes.forEach(Mp),
            this.nodes.forEach(Np),
            this.nodes.forEach(Cp),
            this.nodes.forEach(wp))
          : this.nodes.forEach(Ap),
        this.clearAllSnapshots());
      let e = Sa.now();
      ((ya.delta = Ii(0, 1e3 / 60, e - ya.timestamp)),
        (ya.timestamp = e),
        (ya.isProcessing = !0),
        Vo.update.process(ya),
        Vo.preRender.process(ya),
        Vo.render.process(ya),
        (ya.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Dp), this.sharedNodes.forEach(Rp));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Df(this.snapshot.measuredBox.x) &&
          !Df(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected ||= Ld()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Hf(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || ku(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        qp(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return Ld();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Yp))) {
        let { scroll: e } = this.root;
        e && (zu(t.x, e.offset.x), zu(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = Ld();
      if ((xf(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && xf(t, e), zu(t.x, i.offset.x), zu(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || Ld();
      xf(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (zu(r.x, -n.scroll.offset.x), zu(r.y, -n.scroll.offset.y)),
          ku(n.latestValues) && Hu(r, n.latestValues, n.layout?.layoutBox));
      }
      return (
        ku(this.latestValues) &&
          Hu(r, this.latestValues, this.layout?.layoutBox),
        r
      );
    }
    removeTransform(e) {
      let t = Ld();
      xf(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!ku(n.latestValues)) continue;
        let r;
        (n.instance &&
          (Ou(n.latestValues) && n.updateSnapshot(),
          (r = Ld()),
          xf(r, n.measurePageBox())),
          Bf(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (ku(this.latestValues) && Bf(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ya.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = ya.timestamp;
      let a = this.getClosestProjectingParent();
      (!this.targetDelta &&
        !this.relativeTarget &&
        (this.options.layoutAnchor !== !1 && a && a.layout
          ? this.createRelativeTarget(
              a,
              this.layout.layoutBox,
              a.layout.layoutBox,
            )
          : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ld()), (this.targetWithTransforms = Ld())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Mf(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : xf(this.target, this.layout.layoutBox),
                Fu(this.target, this.targetDelta))
              : xf(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          jd.value && gp.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        Ou(this.parent.latestValues) ||
        Au(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ld()),
        (this.relativeTargetOrigin = Ld()),
        Pf(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0,
        ),
        xf(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === ya.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      xf(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (Ru(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Ld())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Sf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Sf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Af(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Jf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Jf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        jd.value && gp.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Fd()),
        (this.projectionDelta = Fd()),
        (this.projectionDeltaWithTransform = Fd()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = Fd();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = Ld(),
        c =
          (r ? r.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Hp));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = V(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = V(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (zp(o.x, e.x, n), zp(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pf(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Vp(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && Wf(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= Ld()),
            xf(f, this.relativeTarget)),
          c &&
            ((this.animationValues = a), np(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a),
            (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (Bo(this.pendingAnimation), void 0)),
        (this.pendingAnimation = H.update(() => {
          ((hp.hasAnimatedSinceResize = !0),
            (this.motionValue ||= $c(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = sp(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            Ss(this.currentAnimation, this),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vp),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, layout: n, latestValues: r } = e,
        { target: i } = e;
      if (!(!t || !i || !n)) {
        if (
          this !== e &&
          this.layout &&
          n &&
          Jp(this.options.animationType, this.layout.layoutBox, n.layoutBox)
        ) {
          i = this.target || Ld();
          let t = Df(this.layout.layoutBox.x);
          ((i.x.min = e.target.x.min), (i.x.max = i.x.min + t));
          let n = Df(this.layout.layoutBox.y);
          ((i.y.min = e.target.y.min), (i.y.max = i.y.min + n));
        }
        (xf(t, i),
          Hu(t, r),
          Af(this.projectionDeltaWithTransform, this.layoutCorrected, t, r));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new pp()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && bp(`z`, e, r, this.animationValues);
      for (let t = 0; t < _p.length; t++)
        (bp(`rotate${_p[t]}`, e, r, this.animationValues),
          bp(`skew${_p[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = fp(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = fp(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !ku(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = $f(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        (e.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let t in af) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = af[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents = r === this ? fp(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Op),
        this.root.sharedNodes.clear());
    }
  };
}
function Cp(e) {
  e.updateLayout();
}
function wp(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      Yf((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = Df(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      bf(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      Jp(i, t.layoutBox, n) &&
        Yf((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Df(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Fd();
    Af(o, n, t.layoutBox);
    let s = Fd();
    a ? Af(s, e.applyTransform(r, !0), t.measuredBox) : Af(s, n, t.layoutBox);
    let c = !Hf(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = Ld();
          Pf(s, t.layoutBox, i.layoutBox, o);
          let c = Ld();
          (Pf(c, n, a.layoutBox, o),
            Kf(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c),
              (e.relativeTargetOrigin = s),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Tp(e) {
  (jd.value && gp.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Ep(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Dp(e) {
  e.clearSnapshot();
}
function Op(e) {
  e.clearMeasurements();
}
function kp(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function Ap(e) {
  e.isLayoutDirty = !1;
}
function jp(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Mp(e) {
  e.relativeTarget &&
    e.relativeParent?.isLayoutDirty &&
    (e.currentAnimation
      ? (e.isLayoutDirty = !0)
      : ((e.targetDelta = void 0), e.removeRelativeTarget()));
}
function Np(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Pp(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Fp(e) {
  e.resolveTargetDelta();
}
function Ip(e) {
  e.calcProjection();
}
function Lp(e) {
  e.resetSkewAndRotation();
}
function Rp(e) {
  e.removeLeadSnapshot();
}
function zp(e, t, n) {
  ((e.translate = V(t.translate, 0, n)),
    (e.scale = V(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Bp(e, t, n, r) {
  ((e.min = V(t.min, n.min, r)), (e.max = V(t.max, n.max, r)));
}
function Vp(e, t, n, r) {
  (Bp(e.x, t.x, n.x, r), Bp(e.y, t.y, n.y, r));
}
function Hp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Up = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Wp = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Gp = Wp(`applewebkit/`) && !Wp(`chrome/`) ? Math.round : Hi;
function Kp(e) {
  ((e.min = Gp(e.min)), (e.max = Gp(e.max)));
}
function qp(e) {
  (Kp(e.x), Kp(e.y));
}
function Jp(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Of(qf(t), qf(n), 0.2))
  );
}
function Yp(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var Xp = Sp({
    attachResizeListener: (e, t) => cp(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Zp = { current: void 0 },
  Qp = Sp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Zp.current) {
        let e = new Xp({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Zp.current = e));
      }
      return Zp.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  $p = (0, r.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function em(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function tm(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = em(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : em(e[t], null);
        }
      };
  };
}
function nm(...e) {
  return r.useCallback(tm(...e), e);
}
var U = n(),
  rm = class extends r.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (
        Yl(t) &&
        e.isPresent &&
        !this.props.isPresent &&
        this.props.pop !== !1
      ) {
        let e = t.offsetParent,
          n = (Yl(e) && e.offsetWidth) || 0,
          r = (Yl(e) && e.offsetHeight) || 0,
          i = getComputedStyle(t),
          a = this.props.sizeRef.current;
        ((a.height = parseFloat(i.height)),
          (a.width = parseFloat(i.width)),
          (a.top = t.offsetTop),
          (a.left = t.offsetLeft),
          (a.right = n - a.width - a.left),
          (a.bottom = r - a.height - a.top),
          (a.direction = i.direction));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function im({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: i,
  root: a,
  pop: o,
}) {
  let s = (0, r.useId)(),
    c = (0, r.useRef)(null),
    l = (0, r.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: `ltr`,
    }),
    { nonce: u } = (0, r.useContext)($p),
    d = nm(c, o === !1 ? void 0 : (e.props?.ref ?? e?.ref));
  return (
    (0, r.useInsertionEffect)(() => {
      let {
        width: e,
        height: r,
        top: d,
        left: f,
        right: p,
        bottom: m,
        direction: h,
      } = l.current;
      if (t || o === !1 || !c.current || !e || !r) return;
      let g = h === `rtl`,
        _ =
          n === `left`
            ? g
              ? `right: ${p}`
              : `left: ${f}`
            : g
              ? `left: ${f}`
              : `right: ${p}`,
        v = i === `bottom` ? `bottom: ${m}` : `top: ${d}`;
      c.current.dataset.motionPopId = s;
      let y = document.createElement(`style`);
      u && (y.nonce = u);
      let b = a ?? document.head;
      return (
        b.appendChild(y),
        y.sheet &&
          y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),
        () => {
          (c.current?.removeAttribute(`data-motion-pop-id`),
            b.contains(y) && b.removeChild(y));
        }
      );
    }, [t]),
    (0, U.jsx)(rm, {
      isPresent: t,
      childRef: c,
      sizeRef: l,
      pop: o,
      children: o === !1 ? e : r.cloneElement(e, { ref: d }),
    })
  );
}
var am = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: i,
  custom: a,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: c,
  anchorY: l,
  root: u,
}) => {
  let d = ji(om),
    f = (0, r.useId)(),
    p = (0, r.useRef)(n),
    m = (0, r.useRef)(i);
  Mi(() => {
    ((p.current = n), (m.current = i));
  });
  let h = !0,
    g = (0, r.useMemo)(
      () => (
        (h = !1),
        {
          id: f,
          initial: t,
          isPresent: n,
          custom: a,
          onExitComplete: (e) => {
            d.set(e, !0);
            for (let e of d.values()) if (!e) return;
            i && i();
          },
          register: (e) => (
            d.set(e, !1),
            () => {
              (d.delete(e), !p.current && !d.size && m.current?.());
            }
          ),
        }
      ),
      [n, d, i],
    );
  return (
    o && h && (g = { ...g }),
    (0, r.useMemo)(() => {
      d.forEach((e, t) => d.set(t, !1));
    }, [n]),
    r.useEffect(() => {
      !n && !d.size && i && i();
    }, [n]),
    (e = (0, U.jsx)(im, {
      pop: s === `popLayout`,
      isPresent: n,
      anchorX: c,
      anchorY: l,
      root: u,
      children: e,
    })),
    (0, U.jsx)(Ni.Provider, { value: g, children: e })
  );
};
function om() {
  return new Map();
}
function sm(e = !0) {
  let t = (0, r.useContext)(Ni);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: i, register: a } = t,
    o = (0, r.useId)();
  (0, r.useEffect)(() => {
    if (e) return a(o);
  }, [e]);
  let s = (0, r.useCallback)(() => e && i && i(o), [o, i, e]);
  return !n && i ? [!1, s] : [!0];
}
var cm = (e) => e.key || ``;
function lm(e) {
  let t = [];
  return (
    r.Children.forEach(e, (e) => {
      (0, r.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var um = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: i,
    presenceAffectsLayout: a = !0,
    mode: o = `sync`,
    propagate: s = !1,
    anchorX: c = `left`,
    anchorY: l = `top`,
    root: u,
  }) => {
    let [d, f] = sm(s),
      p = (0, r.useMemo)(() => lm(e), [e]),
      m = s && !d ? [] : p.map(cm),
      h = (0, r.useRef)(!0),
      g = ji(() => new Map()),
      _ = (0, r.useRef)(new Set()),
      [v, y] = (0, r.useState)(p),
      [b, x] = (0, r.useState)(p);
    (Mi(() => {
      s && !d && !b.length && f?.();
    }, [d, s, b.length, f]),
      Mi(() => {
        h.current = !1;
        for (let e = 0; e < b.length; e++) {
          let t = cm(b[e]);
          m.includes(t)
            ? (g.delete(t), _.current.delete(t))
            : g.get(t) !== !0 && g.set(t, !1);
        }
      }, [b, m.length, m.join(`-`)]));
    let S = [];
    if (p !== v) {
      let e = [...p],
        t = 0;
      for (let n of b) {
        let r = m.indexOf(cm(n));
        r === -1 ? (e.splice(t++, 0, n), S.push(n)) : (t = r + S.length + 1);
      }
      return (
        S.every((e) => g.get(cm(e))) ? (e = p) : o === `wait` && (e = S),
        x(lm(e)),
        y(p),
        null
      );
    }
    let { forceRender: C } = (0, r.useContext)(Ai);
    return (0, U.jsx)(U.Fragment, {
      children: b.map((e) => {
        let r = cm(e),
          v = s && !d ? !1 : p === b || m.includes(r);
        return (0, U.jsx)(
          am,
          {
            isPresent: v,
            initial: !h.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: a,
            mode: o,
            root: u,
            onExitComplete: v
              ? void 0
              : () => {
                  if (_.current.has(r)) return;
                  if (g.has(r)) (_.current.add(r), g.set(r, !0));
                  else return;
                  let e = !0;
                  (g.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (C?.(), y([]), s && f?.(), i && i()));
                },
            anchorX: c,
            anchorY: l,
            children: e,
          },
          r,
        );
      }),
    });
  },
  dm = (0, r.createContext)({ strict: !1 }),
  fm = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  pm = !1;
function mm() {
  if (pm) return;
  let e = {};
  for (let t in fm) e[t] = { isEnabled: (e) => fm[t].some((t) => !!e[t]) };
  (Qd(e), (pm = !0));
}
function hm() {
  return (mm(), $d());
}
function gm(e) {
  let t = hm();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  Qd(t);
}
var _m = (0, r.createContext)({});
function vm(e, t) {
  if (Ud(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || Bd(t) ? t : void 0,
      animate: Bd(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function ym(e) {
  let { initial: t, animate: n } = vm(e, (0, r.useContext)(_m));
  return (0, r.useMemo)(() => ({ initial: t, animate: n }), [bm(t), bm(n)]);
}
function bm(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var xm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Sm(e, t, n) {
  for (let r in t) !Sl(t[r]) && !of(r, n) && (e[r] = t[r]);
}
function Cm({ transformTemplate: e }, t) {
  return (0, r.useMemo)(() => {
    let n = xm();
    return (pu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function wm(e, t) {
  let n = e.style || {},
    r = {};
  return (Sm(r, n, e), Object.assign(r, Cm(e, t)), r);
}
function Tm(e, t) {
  let n = {},
    r = wm(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var Em = () => ({ ...xm(), attrs: {} });
function Dm(e, t, n, i) {
  let a = (0, r.useMemo)(() => {
    let n = Em();
    return (
      vu(n, t, df(i), e.transformTemplate, e.style),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (Sm(t, e.style, e), (a.style = { ...t, ...a.style }));
  }
  return a;
}
var Om = new Set(
  `animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function km(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Om.has(e)
  );
}
function Am(e, t) {
  return e.startsWith(`on`) ? !km(e) : (t?.(e) ?? !km(e));
}
function jm(e, t, n, r) {
  let i = {};
  for (let a in e)
    (a !== `values` || typeof e.values != `object`) &&
      (Sl(e[a]) ||
        ((Am(a, r) ||
          (n === !0 && km(a)) ||
          (!t && !km(a)) ||
          (e.draggable && a.startsWith(`onDrag`))) &&
          (i[a] = e[a])));
  return i;
}
var Mm = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function Nm(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(Mm.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Pm(e, t, n, { latestValues: i }, a, o = !1, s, c) {
  let l = ((s ?? Nm(e)) ? Dm : Tm)(t, i, a, e),
    u = jm(t, typeof e == `string`, o, c),
    d = e === r.Fragment ? {} : { ...u, ...l, ref: n },
    { children: f } = t,
    p = (0, r.useMemo)(() => (Sl(f) ? f.get() : f), [f]);
  return (0, r.createElement)(e, { ...d, children: p });
}
function Fm({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: Im(n, r, i, e), renderState: t() };
}
function Im(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = fp(a[e]);
  let { initial: o, animate: s } = e,
    c = Ud(e),
    l = Wd(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !zd(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = ml(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Lm = (e) => (t, n) => {
    let i = (0, r.useContext)(_m),
      a = (0, r.useContext)(Ni),
      o = () => Fm(e, t, i, a);
    return n ? o() : ji(o);
  },
  Rm = Lm({ scrapeMotionValuesFromProps: sf, createRenderState: xm }),
  zm = Lm({ scrapeMotionValuesFromProps: pf, createRenderState: Em }),
  Bm = Symbol.for(`motionComponentSymbol`);
function Vm(e, t, n) {
  let i = (0, r.useRef)(n);
  (0, r.useInsertionEffect)(() => {
    i.current = n;
  });
  let a = (0, r.useRef)(null);
  return (0, r.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let r = i.current;
      if (typeof r == `function`)
        if (n) {
          let e = r(n);
          typeof e == `function` && (a.current = e);
        } else a.current ? (a.current(), (a.current = null)) : r(n);
      else r && (r.current = n);
    },
    [t],
  );
}
var Hm = (0, r.createContext)({});
function Um(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function Wm(e, t, n, i, a, o) {
  let { visualElement: s } = (0, r.useContext)(_m),
    c = (0, r.useContext)(dm),
    l = (0, r.useContext)(Ni),
    u = (0, r.useContext)($p),
    d = u.reducedMotion,
    f = u.skipAnimations,
    p = (0, r.useRef)(null),
    m = (0, r.useRef)(!1);
  ((i ||= c.renderer),
    !p.current &&
      i &&
      ((p.current = i(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: d,
        skipAnimations: f,
        isSVG: o,
      })),
      m.current && p.current && (p.current.manuallyAnimateOnMount = !0)));
  let h = p.current,
    g = (0, r.useContext)(Hm);
  h &&
    !h.projection &&
    a &&
    (h.type === `html` || h.type === `svg`) &&
    Gm(p.current, n, a, g);
  let _ = (0, r.useRef)(!1);
  (0, r.useInsertionEffect)(() => {
    h && _.current && h.update(n, l);
  });
  let v = n[El],
    y = (0, r.useRef)(
      !!v &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(v) &&
        window.MotionHasOptimisedAnimation?.(v),
    );
  return (
    Mi(() => {
      !m.current ||
        !h ||
        (h.animationState?.animateChanges(), (h.enteringChildren = void 0));
    }, []),
    Mi(() => {
      ((m.current = !0),
        h &&
          ((_.current = !0),
          (window.MotionIsMounted = !0),
          h.updateFeatures(),
          h.scheduleRenderMicrotask(),
          y.current && h.animationState && h.animationState.animateChanges()));
    }),
    (0, r.useEffect)(() => {
      h &&
        (!y.current && h.animationState && h.animationState.animateChanges(),
        (y.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(v);
          }),
          !1)),
        (h.enteringChildren = void 0));
    }),
    h
  );
}
function Gm(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : Km(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Um(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function Km(e) {
  if (e) return e.options.allowProjection === !1 ? Km(e.parent) : e.projection;
}
function qm(e, { forwardMotionProps: t = !1, type: n } = {}, i, a) {
  i && gm(i);
  let o = n ? n === `svg` : Nm(e),
    s = o ? zm : Rm;
  function c(n, c) {
    let l,
      u = { ...(0, r.useContext)($p), ...n, layoutId: Jm(n) },
      { isStatic: d, isValidProp: f } = u,
      p = ym(n),
      m = s(n, d);
    if (!d && typeof window < `u`) {
      Ym(u, i);
      let t = Xm(u);
      ((l = t.MeasureLayout),
        (p.visualElement = Wm(e, m, u, a, t.ProjectionNode, o)));
    }
    return (0, U.jsxs)(_m.Provider, {
      value: p,
      children: [
        l && p.visualElement
          ? (0, U.jsx)(l, { visualElement: p.visualElement, ...u })
          : null,
        Pm(e, n, Vm(m, p.visualElement, c), m, d, t, o, f),
      ],
    });
  }
  c.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let l = (0, r.forwardRef)(c);
  return ((l[Bm] = e), l);
}
function Jm({ layoutId: e }) {
  let t = (0, r.useContext)(Ai).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Ym(e, t) {
  (0, r.useContext)(dm).strict;
}
function Xm(e) {
  let { drag: t, layout: n } = hm();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Zm(e, t) {
  if (typeof Proxy > `u`) return qm;
  let n = new Map(),
    r = (n, r) => qm(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, qm(a, void 0, e, t)), n.get(a)),
  });
}
var Qm = (e, t) =>
    (t.isSVG ?? Nm(e))
      ? new mf(t)
      : new lf(t, { allowProjection: e !== r.Fragment }),
  $m = class extends nf {
    constructor(e) {
      (super(e), (e.animationState ||= _f(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      zd(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  },
  eh = 0,
  th = {
    animation: { Feature: $m },
    exit: {
      Feature: class extends nf {
        constructor() {
          (super(...arguments), (this.id = eh++));
        }
        update() {
          let {
            presenceContext: e,
            prevPresenceContext: t,
            animationState: n,
          } = this.node;
          if (!e || !n) return;
          let { isPresent: r, onExitComplete: i } = e,
            a = t?.isPresent;
          if (r === a) return;
          if (r && a === !1) {
            if (this.exit === !0) {
              let { initial: e } = this.node.getProps();
              if (e && !Array.isArray(e)) {
                let {
                  transition: t,
                  transitionEnd: n,
                  ...r
                } = hl(this.node, e) || {};
                for (let e in r) this.node.getValue(e)?.jump(r[e]);
              }
              ((this.node.blockInitialAnimation = !1),
                n.reset(),
                n.animateChanges());
            } else n.setActive(`exit`, !1);
            this.exit = void 0;
            return;
          }
          let o = (this.exit = n.setActive(`exit`, !r));
          i &&
            !r &&
            o.then(() => {
              this.exit === o && ((this.exit = !0), i(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function nh(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var rh = (e) => (t) => ad(t) && e(t, nh(t));
function ih(e, t, n, r) {
  return cp(e, t, rh(n), r);
}
var ah = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  oh = (e, t) => Math.abs(e - t);
function sh(e, t) {
  let n = oh(e.x, t.x),
    r = oh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var ch = new Set([`auto`, `scroll`]),
  lh = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          ((this.hasPendingMove = !1),
            this.lastRawMoveEventInfo &&
              (this.lastMoveEventInfo = uh(
                this.lastRawMoveEventInfo,
                this.transformPagePoint,
              )));
          let e = fh(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = sh(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e;
          this.history.push({ ...r, timestamp: Sa.now() });
          let { onStart: i, onMove: a } = this.handlers;
          (t ||
            (i && i(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            a && a(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = uh(t, this.transformPagePoint)),
            (this.hasPendingMove = !0),
            H.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          (this.hasPendingMove && this.updatePoint(), this.end());
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = fh(
            e.type === `pointercancel`
              ? this.lastMoveEventInfo
              : uh(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !ad(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = uh(nh(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = ya;
      this.history = [{ ...c, timestamp: l }];
      let { onSessionStart: u } = t;
      u && u(e, fh(s, this.history));
      let d = { passive: !0, capture: !0 };
      ((this.removeListeners = Ui(
        ih(this.contextWindow, `pointermove`, this.handlePointerMove, d),
        ih(this.contextWindow, `pointerup`, this.handlePointerUp, d),
        ih(this.contextWindow, `pointercancel`, this.handlePointerUp, d),
      )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t;) {
        let e = getComputedStyle(t);
        ((ch.has(e.overflowX) || ch.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener(`scroll`, this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n
          ? { x: window.scrollX, y: window.scrollY }
          : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x !== 0 || i.y !== 0) &&
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x),
            (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        H.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Bo(this.updatePoint));
    }
  };
function uh(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fh({ point: e }, t) {
  return {
    point: e,
    delta: dh(e, mh(t)),
    offset: dh(e, ph(t)),
    velocity: hh(t, 0.1),
  };
}
function ph(e) {
  return e[0];
}
function mh(e) {
  return e[e.length - 1];
}
function hh(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = mh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ki(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Ki(t) * 2 &&
    (r = e[1]);
  let a = qi(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function gh(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? V(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? V(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function _h(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function vh(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: _h(e.x, n, i), y: _h(e.y, t, r) };
}
function yh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function bh(e, t) {
  return { x: yh(e.x, t.x), y: yh(e.y, t.y) };
}
function xh(e, t) {
  let n = 0.5,
    r = Df(e),
    i = Df(t);
  return (
    i > r
      ? (n = Wi(t.min, t.max - r, e.min))
      : r > i && (n = Wi(e.min, e.max - i, t.min)),
    Ii(0, 1, n)
  );
}
function Sh(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Ch = 0.35;
function wh(e = Ch) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ch),
    { x: Th(e, `left`, `right`), y: Th(e, `top`, `bottom`) }
  );
}
function Th(e, t, n) {
  return { min: Eh(e, t), max: Eh(e, n) };
}
function Eh(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var Dh = new WeakMap(),
  Oh = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Ld()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(e), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ed(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Yf((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Ga.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Df(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && H.update(() => i(e, t), !1, !0),
            wl(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Mh(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && H.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new lh(
        e,
        {
          onSessionStart: i,
          onStart: a,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: c,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: ah(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && H.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !jh(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = gh(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && Um(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? vh(n.layoutBox, e) : !1),
        (this.elastic = wh(t)),
        r !== this.constraints &&
          !Um(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Yf((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Sh(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Um(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && ((r.root.scroll = void 0), r.root.updateScroll());
      let i = Wu(n, r.root, this.visualElement.getTransformPagePoint()),
        a = bh(r.layout.layoutBox, i);
      if (t) {
        let e = t(Tu(a));
        ((this.hasMutatedConstraints = !!e), e && (a = wu(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Yf((o) => {
          if (!jh(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        wl(this.visualElement, e),
        n.start(ll(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Yf((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return (
        this.visualElement.getProps()[t] ||
        this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
      );
    }
    snapToCursor({ clientX: e, clientY: t }) {
      let { drag: n } = this.getProps(),
        r = { x: e, y: t },
        i = this.visualElement.getTransformPagePoint()?.(r) || r,
        a = this.visualElement.measureViewportBox();
      Yf((e) => {
        if (!jh(e, n, this.currentDirection)) return;
        let t = this.getAxisMotionValue(e),
          { min: r, max: o } = a[e];
        t.set((t.get() || 0) + i[e] - V(r, o, 0.5));
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Um(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = this.constraints,
        i = { x: 0, y: 0 };
      Yf((e) => {
        let t = this.getAxisMotionValue(e).get();
        i[e] = xh({ min: t, max: t }, r[e]);
      });
      let { transformTemplate: a } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = a ? a({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        Yf((t) => {
          let n = this.getAxisMotionValue(t);
          if (!jh(t, e, null) || !n.get()) return;
          let { min: r, max: a } = this.constraints[t];
          n.set(V(r, a, i[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Dh.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = ih(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && ld(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          Um(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= Ah(e, t.current, () =>
              this.scalePositionWithinConstraints(),
            )));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        H.read(r));
      let o = cp(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (Yf((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Ch,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function kh(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function Ah(e, t, n) {
  let r = Ad(e, kh(n)),
    i = Ad(t, kh(n));
  return () => {
    (r(), i());
  };
}
function jh(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Mh(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Nh = class extends nf {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = Hi),
        (this.removeListeners = Hi),
        (this.controls = new Oh(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Hi));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  Ph = (e) => (t, n) => {
    e && H.update(() => e(t, n), !1, !0);
  },
  Fh = class extends nf {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = Hi));
    }
    onPointerDown(e) {
      this.session = new lh(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: ah(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Ph(e),
        onStart: Ph(t),
        onMove: Ph(n),
        onEnd: (e, t) => {
          (delete this.session, r && H.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = ih(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  Ih = !1,
  Lh = class extends r.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        Ih && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (hp.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        { projection: a } = n;
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t &&
            a.setOptions({ ...a.options, layoutDependency: t }),
          (Ih = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                H.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        Xu.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      ((Ih = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Rh(e) {
  let [t, n] = sm(),
    i = (0, r.useContext)(Ai);
  return (0, U.jsx)(Lh, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: (0, r.useContext)(Hm),
    isPresent: t,
    safeToRemove: n,
  });
}
var zh = {
  pan: { Feature: Fh },
  drag: { Feature: Nh, ProjectionNode: Qp, MeasureLayout: Rh },
};
function Bh(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && H.postRender(() => i(t, nh(t)));
}
var Vh = class extends nf {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = rd(
          e,
          (e, t) => (Bh(this.node, t, `Start`), (e) => Bh(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  Hh = class extends nf {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Ui(
        cp(this.node.current, `focus`, () => this.onFocus()),
        cp(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function Uh(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && H.postRender(() => i(t, nh(t)));
}
var Wh = class extends nf {
    mount() {
      let { current: e } = this.node;
      if (!e) return;
      let { globalTapTarget: t, propagate: n } = this.node.props;
      this.unmount = gd(
        e,
        (e, t) => (
          Uh(this.node, t, `Start`),
          (e, { success: t }) => Uh(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
      );
    }
    unmount() {}
  },
  Gh = new WeakMap(),
  Kh = new WeakMap(),
  qh = (e) => {
    let t = Gh.get(e.target);
    t && t(e);
  },
  Jh = (e) => {
    e.forEach(qh);
  };
function Yh({ root: e, ...t }) {
  let n = e || document;
  Kh.has(n) || Kh.set(n, {});
  let r = Kh.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(Jh, { root: e, ...t })),
    r[i]
  );
}
function Xh(e, t, n) {
  let r = Yh(t);
  return (
    Gh.set(e, n),
    r.observe(e),
    () => {
      (Gh.delete(e), r.unobserve(e));
    }
  );
}
var Zh = { some: 0, all: 1 },
  Qh = class extends nf {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : Zh[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e;
          if (
            this.isInView === t ||
            ((this.isInView = t), i && !t && this.hasEnteredView)
          )
            return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = Xh(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some($h(e, t)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function $h({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var eg = {
    inView: { Feature: Qh },
    tap: { Feature: Wh },
    focus: { Feature: Hh },
    hover: { Feature: Vh },
  },
  tg = { layout: { ProjectionNode: Qp, MeasureLayout: Rh } },
  ng = Zm({ ...th, ...eg, ...zh, ...tg }, Qm);
function rg(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function ig(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && rg(t)
      ? Ql(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function ag(e, t, n) {
  return e * (t + 1) + n * t;
}
function og(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function sg(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (Fi(e, i), r--);
  }
}
function cg(e, t, n, r, i, a) {
  sg(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: V(i, a, r[o]), easing: ma(n, o) });
}
function lg(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function ug(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var dg = `easeInOut`,
  fg = 20;
function pg(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    }
    if (!Array.isArray(o)) {
      l.set(o.name, og(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = og(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = gg(e),
          {
            delay: l = 0,
            times: u = ls(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = Tc(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && yg(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = Ki(b));
          let r = Ko(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if (
          (T > 0 && cs(u, T),
          c.length === 1 && c.unshift(null),
          m && `${m}${fg}`,
          m && m < fg)
        ) {
          let e = b > 0 ? _ / b : 0;
          b = ag(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r]
                .reverse()
                .map((e) => (typeof e == `function` ? na(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)),
              c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : ma(f, e - 1)));
          }
          lg(u, m, e);
        }
        let E = w + b;
        (cg(r, c, y, u, w, E), (g = Math.max(x + b, g)), (f = Math.max(E, f)));
      };
    if (Sl(p)) {
      let e = mg(p, s);
      _(m, h, hg(`default`, e));
    } else {
      let e = ig(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = mg(r, s);
        for (let e in m) _(m[e], _g(h, e), hg(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(ug);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(Wi(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(dg)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function mg(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function hg(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function gg(e) {
  return Array.isArray(e) ? e : [e];
}
function _g(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var vg = (e) => typeof e == `number`,
  yg = (e) => e.every(vg);
function bg(e, t) {
  return Sl(e) || typeof e == `number` || (typeof e == `string` && !rg(t));
}
function xg(e, t, n, r) {
  let i = [];
  if (bg(e, t)) i.push(sp(e, (rg(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = ig(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = { ...n };
      (`delay` in s &&
        typeof s.delay == `function` &&
        (s.delay = s.delay(e, o)),
        r instanceof Element
          ? i.push(...Ju(r, t, s, Rd.get(r)))
          : i.push(...ql(Gl(r) ?? Yu, r, t, s)));
    }
  }
  return i;
}
function Sg(e, t, n) {
  let r = [];
  return (
    pg(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = $c(0);
          return (
            n.on(`change`, t),
            e.length === 1
              ? [n, [0, 1]]
              : e.length === 2
                ? [n, [0, 1], e[1]]
                : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: is },
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...xg(n, e, t));
    }),
    r
  );
}
function Cg(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function wg(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if (
      (n !== void 0 && (c.reduceMotion = n),
      r !== void 0 && (c.skipAnimations = r),
      Cg(e))
    ) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = Sg(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = xg(e, i, { ...c, ...r }, t)));
    }
    let l = new qc(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          Fi(t.animations, l);
        })),
      l
    );
  }
  return i;
}
var Tg = Object.assign(wg(), { addEffect: Ul, removeEffect: Wl }),
  Eg = { some: 0, all: 1 };
function Dg(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = Ql(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function`
                ? o.set(e.target, n)
                : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : Eg[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Og(
  e,
  { root: t, margin: n, amount: i, once: a = !1, initial: o = !1 } = {},
) {
  let [s, c] = (0, r.useState)(o);
  return (
    (0, r.useEffect)(() => {
      if (!e.current || (a && s)) return;
      let r = () => (c(!0), a ? void 0 : () => c(!1)),
        o = { root: (t && t.current) || void 0, margin: n, amount: i };
      return Dg(e.current, r, o);
    }, [t, e, n, a, i]),
    s
  );
}
function kg({ children: e, delay: t = 0, className: n }) {
  return (0, U.jsx)(ng.div, {
    className: n,
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: `-80px` },
    transition: { duration: 0.7, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
function Ag({ index: e, eyebrow: t, title: n, intro: r }) {
  return (0, U.jsxs)(`div`, {
    className: `mb-14 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end`,
    children: [
      (0, U.jsxs)(`div`, {
        children: [
          (0, U.jsx)(kg, {
            children: (0, U.jsxs)(`p`, {
              className: `eyebrow mb-4`,
              children: [
                (0, U.jsxs)(`span`, {
                  className: `text-muted-foreground`,
                  children: [e, ` /`],
                }),
                ` `,
                t,
              ],
            }),
          }),
          (0, U.jsx)(ng.h2, {
            initial: { opacity: 0, y: 30, filter: `blur(6px)` },
            whileInView: { opacity: 1, y: 0, filter: `blur(0px)` },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: `text-4xl font-bold uppercase leading-[0.95] sm:text-5xl lg:text-6xl text-foreground`,
            children: n,
          }),
        ],
      }),
      r &&
        (0, U.jsx)(kg, {
          delay: 0.15,
          children: (0, U.jsx)(`p`, {
            className: `max-w-lg text-muted-foreground md:ml-auto`,
            children: r,
          }),
        }),
    ],
  });
}
function jg({ to: e, suffix: t = `` }) {
  let n = (0, r.useRef)(null),
    i = Og(n, { once: !0 }),
    [a, o] = (0, r.useState)(0);
  return (
    (0, r.useEffect)(() => {
      if (!i) return;
      let t = Tg(0, e, {
        duration: 1.8,
        ease: `easeOut`,
        onUpdate: (e) => o(Math.round(e)),
      });
      return () => t.stop();
    }, [i, e]),
    (0, U.jsxs)(`span`, { ref: n, children: [a, t] })
  );
}
function Mg() {
  return (0, U.jsx)(`div`, {
    className: `flex items-center`,
    children: (0, U.jsx)(`img`, {
      src: `/aws-bennett-logo.jpg`,
      alt: `AWS Bennett University`,
      className: `h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105`,
    }),
  });
}
var Ng = {
  linkedin: `M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z`,
  github: `M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z`,
  instagram: `M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z`,
};
function Pg({ name: e, className: t = `h-4 w-4` }) {
  return (0, U.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    className: t,
    "aria-hidden": !0,
    children: (0, U.jsx)(`path`, { d: Ng[e] }),
  });
}
var Fg = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function Ig(e, t, n = []) {
  if (t == null)
    throw Error(`[lucide]: iconNode is required when icon name is used`);
  return {
    name: Fg(e),
    size: 24,
    node: t,
    ...(n.length > 0 ? { aliases: n } : {}),
  };
}
var Lg = (e) => {
    let t = ``,
      n = !1;
    for (let r of e) {
      if (r === `-` || r === `_` || r <= ` `) {
        n = t.length > 0;
        continue;
      }
      (t.length === 0 ? (t += r.toLowerCase()) : (t += n ? r.toUpperCase() : r),
        (n = !1));
    }
    return t;
  },
  Rg = (e) => {
    let t = Lg(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  zg = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Bg = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": 2,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
  };
function Vg(e) {
  return e != null;
}
function Hg(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? Bg.width,
    a = e.size ?? e.height ?? Bg.height,
    o =
      e.aliases
        ?.filter((e) => typeof e == `string` && e.trim() !== ``)
        .map((e) => `lucide-${e}`) ?? [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? zg(...c) : zg(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? Bg[`stroke-width`]) *
          Number(e.size ?? e.width ?? Bg.width)) /
        Number(t.size ?? t.width ?? Bg.width)
      : (t.strokeWidth ?? Bg[`stroke-width`]);
  return [
    `svg`,
    {
      ...Object.entries(Bg).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t &&
        Vg(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && Vg(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && Vg(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke
          ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i }
          : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
function Ug(e, t = {}) {
  return Hg(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: `className`,
      "stroke-width": `strokeWidth`,
      "stroke-linecap": `strokeLinecap`,
      "stroke-linejoin": `strokeLinejoin`,
      "vector-effect": `vectorEffect`,
    },
  });
}
var Wg = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Gg = (0, r.createContext)({}),
  Kg = () => (0, r.useContext)(Gg),
  qg = (0, r.forwardRef)(
    (
      {
        color: e,
        size: t,
        width: n,
        height: i,
        strokeWidth: a,
        absoluteStrokeWidth: o,
        nonScalingStroke: s,
        className: c = ``,
        children: l,
        iconNode: u = [],
        icon: d = { node: u, aliases: [], size: 24 },
        ...f
      },
      p,
    ) => {
      let {
          size: m = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          nonScalingStroke: _ = !1,
          color: v = `currentColor`,
          className: y = ``,
        } = Kg() ?? {},
        b = !!l || Wg(f),
        [x, S, C = []] = Ug(d, {
          color: e ?? v,
          width: n ?? t ?? m,
          height: i ?? t ?? m,
          strokeWidth: a ?? h,
          absoluteStrokeWidth: o ?? g,
          nonScalingStroke: s ?? _,
          className: zg(y, c),
          hasA11yProp: b,
          attributes: f,
        });
      return (0, r.createElement)(x, { ref: p, ...S }, [
        ...C.map(([e, t]) => (0, r.createElement)(e, t)),
        ...(Array.isArray(l) ? l : [l]),
      ]);
    },
  );
function W(e, t = [], n = []) {
  let i = typeof e == `string` ? Ig(e, t, n) : e,
    a = (0, r.forwardRef)(({ className: e, ...t }, n) =>
      (0, r.createElement)(qg, { ref: n, icon: i, className: e, ...t }),
    );
  return (i.name && (a.displayName = Rg(i.name)), a);
}
var Jg = {
  name: `arrow-right`,
  size: 24,
  node: [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ],
};
Jg.node;
var Yg = W(Jg),
  Xg = {
    name: `arrow-up-right`,
    size: 24,
    node: [
      [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
      [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
    ],
  };
Xg.node;
var Zg = W(Xg),
  Qg = {
    name: `award`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,
          key: `1yiouv`,
        },
      ],
      [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }],
    ],
  };
Qg.node;
var $g = W(Qg),
  e_ = {
    name: `book-open`,
    size: 24,
    node: [
      [`path`, { d: `M12 5v16`, key: `1f6ucr` }],
      [
        `path`,
        {
          d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
          key: `1fyvmf`,
        },
      ],
    ],
  };
e_.node;
var t_ = W(e_),
  n_ = {
    name: `calendar`,
    size: 24,
    node: [
      [`path`, { d: `M8 2v3`, key: `1ioesn` }],
      [`path`, { d: `M16 2v3`, key: `otl347` }],
      [
        `rect`,
        { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, key: `h1oib` },
      ],
      [`path`, { d: `M3 9h18`, key: `1pudct` }],
    ],
  };
n_.node;
var r_ = W(n_),
  i_ = {
    name: `camera`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
          key: `18u6gg`,
        },
      ],
      [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
    ],
  };
i_.node;
var a_ = W(i_),
  o_ = {
    name: `chevron-down`,
    size: 24,
    node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
  };
o_.node;
var s_ = W(o_),
  c_ = {
    name: `circle-alert`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
      [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
    ],
    aliases: [`alert-circle`],
  };
c_.node;
var l_ = W(c_),
  u_ = {
    name: `circle-check`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
    ],
    aliases: [`check-circle-2`],
  };
u_.node;
var d_ = W(u_),
  f_ = {
    name: `clock`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
    ],
  };
f_.node;
var p_ = W(f_),
  m_ = {
    name: `cloud`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,
          key: `p7xjir`,
        },
      ],
    ],
  };
m_.node;
var h_ = W(m_),
  g_ = {
    name: `code-xml`,
    size: 24,
    node: [
      [`path`, { d: `m18 16 4-4-4-4`, key: `1inbqp` }],
      [`path`, { d: `m6 8-4 4 4 4`, key: `15zrgr` }],
      [`path`, { d: `m14.5 4-5 16`, key: `e7oirm` }],
    ],
    aliases: [`code-2`],
  };
g_.node;
var __ = W(g_),
  v_ = {
    name: `external-link`,
    size: 24,
    node: [
      [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
      [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
      [
        `path`,
        {
          d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
          key: `a6xqqp`,
        },
      ],
    ],
  };
v_.node;
var y_ = W(v_),
  b_ = {
    name: `folder-git-2`,
    size: 24,
    node: [
      [`path`, { d: `M18 19a5 5 0 0 1-5-5v8`, key: `sz5oeg` }],
      [
        `path`,
        {
          d: `M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5`,
          key: `1w6njk`,
        },
      ],
      [`circle`, { cx: `13`, cy: `12`, r: `2`, key: `1j92g6` }],
      [`circle`, { cx: `20`, cy: `19`, r: `2`, key: `1obnsp` }],
    ],
  };
b_.node;
var x_ = W(b_),
  S_ = {
    name: `loader-circle`,
    size: 24,
    node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
    aliases: [`loader-2`],
  };
S_.node;
var C_ = W(S_),
  w_ = {
    name: `mail`,
    size: 24,
    node: [
      [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
      [
        `rect`,
        { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
      ],
    ],
  };
w_.node;
var T_ = W(w_),
  E_ = {
    name: `map-pin`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
          key: `1r0f0z`,
        },
      ],
      [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
    ],
  };
E_.node;
var D_ = W(E_),
  O_ = {
    name: `menu`,
    size: 24,
    node: [
      [`path`, { d: `M4 5h16`, key: `1tepv9` }],
      [`path`, { d: `M4 12h16`, key: `1lakjw` }],
      [`path`, { d: `M4 19h16`, key: `1djgab` }],
    ],
  };
O_.node;
var k_ = W(O_),
  A_ = {
    name: `mic`,
    size: 24,
    node: [
      [`path`, { d: `M12 19v3`, key: `npa21l` }],
      [`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2`, key: `1vc78b` }],
      [
        `rect`,
        { x: `9`, y: `2`, width: `6`, height: `13`, rx: `3`, key: `s6n7sd` },
      ],
    ],
  };
A_.node;
var j_ = W(A_),
  M_ = {
    name: `moon`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
          key: `kfwtm`,
        },
      ],
    ],
  };
M_.node;
var N_ = W(M_),
  P_ = {
    name: `rocket`,
    size: 24,
    node: [
      [`path`, { d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`, key: `qeys4` }],
      [
        `path`,
        {
          d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`,
          key: `u4xsad`,
        },
      ],
      [
        `path`,
        {
          d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`,
          key: `676m9`,
        },
      ],
      [
        `path`,
        { d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`, key: `92ym6u` },
      ],
    ],
  };
P_.node;
var F_ = W(P_),
  I_ = {
    name: `sun`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
      [`path`, { d: `M12 2v2`, key: `tus03m` }],
      [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
      [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
      [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
      [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
      [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
      [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
      [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
    ],
  };
I_.node;
var L_ = W(I_),
  R_ = {
    name: `trending-up`,
    size: 24,
    node: [
      [`path`, { d: `M16 7h6v6`, key: `box55l` }],
      [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
    ],
  };
R_.node;
var z_ = W(R_),
  B_ = {
    name: `trophy`,
    size: 24,
    node: [
      [
        `path`,
        { d: `M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`, key: `pwuv1l` },
      ],
      [
        `path`,
        { d: `M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`, key: `1y54w1` },
      ],
      [
        `path`,
        {
          d: `M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,
          key: `e30mpu`,
        },
      ],
      [`path`, { d: `M4 22h16`, key: `57wxv0` }],
      [
        `path`,
        {
          d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,
          key: `1mhfuq`,
        },
      ],
      [
        `path`,
        {
          d: `M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,
          key: `i0yafy`,
        },
      ],
    ],
  };
B_.node;
var V_ = W(B_),
  H_ = {
    name: `user-check`,
    size: 24,
    node: [
      [`path`, { d: `m16 11 2 2 4-4`, key: `9rsbq5` }],
      [
        `path`,
        { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
      ],
      [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    ],
  };
H_.node;
var U_ = W(H_),
  W_ = {
    name: `users`,
    size: 24,
    node: [
      [
        `path`,
        { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
      ],
      [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
      [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
      [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    ],
  };
W_.node;
var G_ = W(W_),
  K_ = {
    name: `x`,
    size: 24,
    node: [
      [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
      [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
    ],
  };
K_.node;
var q_ = W(K_);
function J_() {
  let [e, t] = (0, r.useState)(`dark`),
    [n, i] = (0, r.useState)(!1);
  (0, r.useEffect)(() => {
    i(!0);
    let e = localStorage.getItem(`theme`);
    if (e === `light` || e === `dark`) (t(e), a(e));
    else {
      let e = window.matchMedia(`(prefers-color-scheme: light)`).matches
        ? `light`
        : `dark`;
      (t(e), a(e));
    }
  }, []);
  let a = (e) => {
    let t = document.documentElement;
    e === `light`
      ? (t.classList.add(`light`), t.classList.remove(`dark`))
      : (t.classList.add(`dark`), t.classList.remove(`light`));
  };
  return n
    ? (0, U.jsx)(`button`, {
        type: `button`,
        onClick: () => {
          let n = e === `dark` ? `light` : `dark`;
          (t(n), localStorage.setItem(`theme`, n), a(n));
        },
        "aria-label":
          e === `dark` ? `Switch to light theme` : `Switch to dark theme`,
        title: e === `dark` ? `Switch to light theme` : `Switch to dark theme`,
        className: `relative flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`,
        children:
          e === `dark`
            ? (0, U.jsx)(L_, {
                className: `h-4 w-4 transition-transform duration-300 hover:rotate-45`,
              })
            : (0, U.jsx)(N_, {
                className: `h-4 w-4 transition-transform duration-300 hover:-rotate-12`,
              }),
      })
    : (0, U.jsx)(`div`, {
        className: `h-9 w-9 rounded-md border border-border bg-surface opacity-50`,
        "aria-hidden": `true`,
      });
}
function Y_({ onJoin: e }) {
  let [t, n] = (0, r.useState)(!1),
    [i, a] = (0, r.useState)(`home`),
    [o, s] = (0, r.useState)(!1),
    c = (0, r.useRef)(null),
    l = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      let e = () => n(window.scrollY > 30);
      (e(), window.addEventListener(`scroll`, e, { passive: !0 }));
      let t = new IntersectionObserver(
        (e) => e.forEach((e) => e.isIntersecting && a(e.target.id)),
        { rootMargin: `-40% 0px -50% 0px` },
      );
      return (
        ki.forEach((e) => {
          let n = document.getElementById(e.id);
          n && t.observe(n);
        }),
        !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches &&
          c.current &&
          Ei.fromTo(
            c.current,
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: `power2.out` },
          ),
        () => {
          (window.removeEventListener(`scroll`, e), t.disconnect());
        }
      );
    }, []),
    (0, r.useEffect)(() => {
      if (!l.current) return;
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
      o
        ? e
          ? Ei.set(l.current, { opacity: 1, display: `flex` })
          : Ei.fromTo(
              l.current,
              { opacity: 0, y: -15, display: `flex` },
              { opacity: 1, y: 0, duration: 0.35, ease: `power2.out` },
            )
        : e
          ? Ei.set(l.current, { opacity: 0, display: `none` })
          : Ei.to(l.current, {
              opacity: 0,
              y: -15,
              duration: 0.25,
              ease: `power2.in`,
              onComplete: () => {
                l.current && (l.current.style.display = `none`);
              },
            });
    }, [o]),
    (0, U.jsxs)(`header`, {
      ref: c,
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${t ? `border-b border-border bg-background/85 backdrop-blur-md shadow-sm` : `border-b border-transparent bg-transparent`}`,
      children: [
        (0, U.jsxs)(`nav`, {
          className: `mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8`,
          children: [
            (0, U.jsx)(`a`, {
              href: `#home`,
              "aria-label": `AWS Bennett University home page`,
              className: `flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm`,
              children: (0, U.jsx)(Mg, {}),
            }),
            (0, U.jsxs)(`div`, {
              className: `flex items-center gap-4`,
              children: [
                (0, U.jsx)(`ul`, {
                  className: `hidden items-center gap-1 lg:flex`,
                  children: ki.map((e) =>
                    (0, U.jsx)(
                      `li`,
                      {
                        children: (0, U.jsxs)(`a`, {
                          href: `#${e.id}`,
                          className: `relative px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${i === e.id ? `text-foreground font-semibold` : `text-muted-foreground hover:text-foreground`}`,
                          children: [
                            e.label,
                            i === e.id &&
                              (0, U.jsx)(`span`, {
                                className: `absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary rounded-full`,
                              }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, U.jsx)(J_, {}),
                (0, U.jsx)(`button`, {
                  type: `button`,
                  "aria-label": o ? `Close menu` : `Open navigation menu`,
                  "aria-expanded": o,
                  onClick: () => s((e) => !e),
                  className: `flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden`,
                  children: o
                    ? (0, U.jsx)(q_, { className: `h-5 w-5` })
                    : (0, U.jsx)(k_, { className: `h-5 w-5` }),
                }),
              ],
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          ref: l,
          style: { display: `none` },
          className: `fixed inset-x-0 top-16 bottom-0 z-40 flex-col bg-background/95 backdrop-blur-xl px-6 pt-6 pb-12 lg:hidden overflow-y-auto border-t border-border`,
          children: [
            (0, U.jsx)(`div`, {
              className: `flex flex-col space-y-1`,
              children: ki.map((e, t) =>
                (0, U.jsxs)(
                  `a`,
                  {
                    href: `#${e.id}`,
                    onClick: () => s(!1),
                    className: `flex items-center justify-between border-b border-border/60 py-3.5 font-display text-xl font-semibold uppercase text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`,
                    children: [
                      (0, U.jsx)(`span`, { children: e.label }),
                      (0, U.jsxs)(`span`, {
                        className: `font-mono text-xs text-primary font-normal`,
                        children: [`0`, t + 1],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, U.jsx)(`div`, {
              className: `mt-8 pt-4 border-t border-border flex flex-col gap-4`,
              children: (0, U.jsxs)(`div`, {
                className: `flex items-center justify-between text-xs font-mono text-muted-foreground`,
                children: [
                  (0, U.jsx)(`span`, { children: `THEME` }),
                  (0, U.jsx)(J_, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
var X_ = [
    { id: `EC2`, x: 14, y: 30 },
    { id: `S3`, x: 30, y: 70 },
    { id: `Lambda`, x: 52, y: 22 },
    { id: `DynamoDB`, x: 70, y: 64 },
    { id: `CloudFront`, x: 86, y: 28 },
    { id: `API Gateway`, x: 60, y: 86 },
  ],
  Z_ = [
    [0, 2],
    [2, 4],
    [2, 3],
    [0, 1],
    [1, 3],
    [3, 5],
    [4, 3],
    [1, 5],
  ];
function Q_() {
  return (0, U.jsxs)(`div`, {
    className: `absolute inset-0`,
    children: [
      (0, U.jsx)(`div`, {
        className: `grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]`,
      }),
      (0, U.jsxs)(`div`, {
        className: `absolute inset-[-4%]`,
        children: [
          (0, U.jsx)(`svg`, {
            viewBox: `0 0 100 100`,
            preserveAspectRatio: `none`,
            className: `absolute inset-0 h-full w-full opacity-60`,
            children: Z_.map(([e, t], n) => {
              let r = X_[e],
                i = X_[t];
              return (0, U.jsx)(
                `line`,
                {
                  x1: r.x,
                  y1: r.y,
                  x2: i.x,
                  y2: i.y,
                  className: `flow-line stroke-primary/70`,
                  strokeWidth: `0.15`,
                  vectorEffect: `non-scaling-stroke`,
                  style: { strokeWidth: 1, animationDelay: `${n * 0.2}s` },
                },
                n,
              );
            }),
          }),
          X_.map((e, t) =>
            (0, U.jsx)(
              `div`,
              {
                className: `absolute -translate-x-1/2 -translate-y-1/2`,
                style: { left: `${e.x}%`, top: `${e.y}%` },
                children: (0, U.jsxs)(`div`, {
                  className: `flex items-center gap-2 border border-border-strong bg-surface/80 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-muted-foreground backdrop-blur rounded`,
                  children: [
                    (0, U.jsxs)(`span`, {
                      className: `relative flex h-1.5 w-1.5`,
                      children: [
                        (0, U.jsx)(`span`, {
                          className: `absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60`,
                        }),
                        (0, U.jsx)(`span`, {
                          className: `relative h-1.5 w-1.5 rounded-full bg-primary`,
                        }),
                      ],
                    }),
                    e.id,
                  ],
                }),
              },
              e.id,
            ),
          ),
        ],
      }),
      (0, U.jsx)(`div`, {
        className: `absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]`,
      }),
    ],
  });
}
function $_() {
  let e = [`BUILD.`, `DEPLOY.`, `SCALE.`],
    t = (0, r.useRef)(null),
    n = (0, r.useRef)(null),
    i = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let e = Ei.context(() => {
        Ei.timeline({ defaults: { ease: `power3.out` } })
          .from(n.current, { y: 40, opacity: 0, duration: 0.9, delay: 0.2 })
          .from(
            `.hero-word`,
            { y: 35, opacity: 0, stagger: 0.12, duration: 0.8 },
            `-=0.5`,
          )
          .from(i.current, { y: 20, opacity: 0, duration: 0.6 }, `-=0.4`);
      }, t);
      return () => e.revert();
    }, []),
    (0, U.jsxs)(`section`, {
      id: `home`,
      ref: t,
      className: `relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16`,
      children: [
        (0, U.jsx)(`div`, {
          className: `pointer-events-auto absolute inset-0 opacity-70 md:opacity-100`,
          children: (0, U.jsx)(Q_, {}),
        }),
        (0, U.jsxs)(`div`, {
          className: `pointer-events-none relative mx-auto w-full max-w-7xl px-5 lg:px-8`,
          children: [
            (0, U.jsx)(`div`, {
              className: `mb-4`,
              children: (0, U.jsxs)(`span`, {
                className: `eyebrow flex items-center gap-2`,
                children: [
                  (0, U.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-primary`,
                  }),
                  `Student Cloud Technology Community, Bennett University`,
                ],
              }),
            }),
            (0, U.jsx)(`div`, {
              className: `mb-3 overflow-hidden`,
              children: (0, U.jsx)(`h1`, {
                ref: n,
                className: `aws-bennett-shine font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none text-foreground`,
                children: `AWS BENNETT`,
              }),
            }),
            (0, U.jsx)(`h2`, {
              className: `font-display text-[clamp(2.5rem,8.5vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground/90`,
              children: e.map((e, t) =>
                (0, U.jsx)(
                  `span`,
                  {
                    className: `hero-word inline-block mr-3 sm:mr-5`,
                    children: (0, U.jsx)(`span`, {
                      className: t === 2 ? `text-gradient` : ``,
                      children: e,
                    }),
                  },
                  e,
                ),
              ),
            }),
            (0, U.jsxs)(`div`, {
              className: `pointer-events-auto mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between`,
              children: [
                (0, U.jsx)(`p`, {
                  ref: i,
                  className: `max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed`,
                  children: `We are Bennett University's student-led AWS cloud community. Together, we explore serverless architectures, build real-world software, and launch cloud careers.`,
                }),
                (0, U.jsx)(`div`, {
                  className: `flex items-center gap-3`,
                  children: (0, U.jsxs)(`a`, {
                    href: `#about`,
                    className: `btn-ghost text-xs`,
                    children: [
                      `Explore Our Work `,
                      (0, U.jsx)(Yg, { className: `h-3.5 w-3.5 ml-1` }),
                    ],
                  }),
                }),
              ],
            }),
            (0, U.jsx)(`div`, {
              className: `pointer-events-auto mt-16 grid grid-cols-2 border-t border-border md:grid-cols-4`,
              children: Oi.map((e, t) =>
                (0, U.jsxs)(
                  `div`,
                  {
                    className: `py-6 ${t > 0 ? `md:border-l md:border-border md:pl-6` : ``} ${t % 2 ? `border-l border-border pl-6 md:pl-6` : ``}`,
                    children: [
                      (0, U.jsx)(`div`, {
                        className: `font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground`,
                        children: (0, U.jsx)(jg, {
                          to: e.value,
                          suffix: e.suffix,
                        }),
                      }),
                      (0, U.jsx)(`div`, {
                        className: `mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground`,
                        children: e.label,
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
var ev = [
  {
    label: `Join Us`,
    icon: U_,
    desc: `Step into a community of curious builders and cloud enthusiasts.`,
  },
  {
    label: `Learn`,
    icon: t_,
    desc: `Master AWS fundamentals, DevOps, and cloud architecture hands-on.`,
  },
  {
    label: `Build`,
    icon: __,
    desc: `Collaborate on real campus projects using modern tech stacks.`,
  },
  {
    label: `Deploy`,
    icon: F_,
    desc: `Launch applications to production on AWS infrastructure.`,
  },
  {
    label: `Scale`,
    icon: z_,
    desc: `Earn certifications and stand out to top engineering teams.`,
  },
];
function tv() {
  let e = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let t = Ei.context(() => {
        Ei.from(`.pipeline-step`, {
          opacity: 0,
          x: -20,
          stagger: 0.12,
          duration: 0.6,
          ease: `power2.out`,
          scrollTrigger: { trigger: e.current, start: `top 80%` },
        });
      }, e);
      return () => t.revert();
    }, []),
    (0, U.jsx)(`section`, {
      id: `about`,
      ref: e,
      className: `relative border-t border-border py-24 lg:py-32 bg-background`,
      children: (0, U.jsxs)(`div`, {
        className: `mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8 lg:items-center`,
        children: [
          (0, U.jsxs)(`div`, {
            children: [
              (0, U.jsx)(kg, {
                children: (0, U.jsxs)(`p`, {
                  className: `eyebrow mb-4`,
                  children: [
                    (0, U.jsx)(`span`, {
                      className: `text-muted-foreground`,
                      children: `01 /`,
                    }),
                    ` About us`,
                  ],
                }),
              }),
              (0, U.jsx)(kg, {
                delay: 0.05,
                children: (0, U.jsxs)(`h2`, {
                  className: `text-4xl font-bold uppercase leading-[0.95] sm:text-6xl text-foreground`,
                  children: [
                    `More than `,
                    (0, U.jsx)(`br`, {}),
                    (0, U.jsx)(`span`, {
                      className: `text-gradient`,
                      children: `a student club.`,
                    }),
                  ],
                }),
              }),
              (0, U.jsx)(kg, {
                delay: 0.15,
                children: (0, U.jsx)(`p`, {
                  className: `mt-6 text-base sm:text-lg text-foreground/90 leading-relaxed`,
                  children: `We are a team of student builders at Bennett University passionate about cloud computing and modern software engineering. We turn raw ideas into live, scalable cloud applications.`,
                }),
              }),
              (0, U.jsx)(kg, {
                delay: 0.2,
                children: (0, U.jsx)(`p`, {
                  className: `mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed`,
                  children: `Whether you are writing your first line of code or deploying complex microservices on AWS, our community provides the mentorship, hackathons, and resources to help you succeed.`,
                }),
              }),
            ],
          }),
          (0, U.jsxs)(`div`, {
            className: `relative border border-border bg-surface p-6 sm:p-8 rounded-sm shadow-sm`,
            children: [
              (0, U.jsxs)(`div`, {
                className: `mb-6 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-3`,
                children: [
                  (0, U.jsx)(`span`, { children: `PIPELINE: STUDENT JOURNEY` }),
                  (0, U.jsxs)(`span`, {
                    className: `text-success flex items-center gap-1.5`,
                    children: [
                      (0, U.jsx)(`span`, {
                        className: `h-1.5 w-1.5 rounded-full bg-success animate-ping`,
                      }),
                      `ACTIVE`,
                    ],
                  }),
                ],
              }),
              (0, U.jsx)(`div`, {
                className: `space-y-4`,
                children: ev.map((e, t) =>
                  (0, U.jsxs)(
                    `div`,
                    {
                      className: `pipeline-step flex items-start gap-4 p-3 rounded border border-transparent hover:border-border hover:bg-background transition-colors`,
                      children: [
                        (0, U.jsx)(`div`, {
                          className: `flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border-strong bg-background text-primary`,
                          children: (0, U.jsx)(e.icon, {
                            className: `h-4 w-4`,
                          }),
                        }),
                        (0, U.jsxs)(`div`, {
                          children: [
                            (0, U.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, U.jsxs)(`span`, {
                                  className: `font-mono text-xs text-primary font-semibold`,
                                  children: [`0`, t + 1],
                                }),
                                (0, U.jsx)(`span`, {
                                  className: `font-display text-lg font-semibold uppercase text-foreground`,
                                  children: e.label,
                                }),
                              ],
                            }),
                            (0, U.jsx)(`p`, {
                              className: `mt-0.5 text-xs text-muted-foreground leading-normal`,
                              children: e.desc,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var nv = [
  {
    title: `Cloud Workshops`,
    desc: `Hands-on sessions covering AWS and cloud technologies.`,
    icon: h_,
  },
  {
    title: `Hackathons`,
    desc: `Build real-world solutions with technology and teamwork.`,
    icon: V_,
  },
  {
    title: `Projects`,
    desc: `Develop and deploy practical applications using cloud infrastructure.`,
    icon: x_,
  },
  {
    title: `Certifications`,
    desc: `Help students explore AWS certifications and cloud careers.`,
    icon: $g,
  },
  {
    title: `Technical Sessions`,
    desc: `Learn from students, professionals and industry experts.`,
    icon: j_,
  },
  {
    title: `Community`,
    desc: `Meet builders, developers and cloud enthusiasts.`,
    icon: G_,
  },
];
function rv() {
  return (0, U.jsx)(`section`, {
    className: `border-t border-border py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `02`,
          eyebrow: `What we do`,
          title: `Six ways to ship.`,
          intro: `From your first EC2 instance to your first production deploy, every track is hands-on.`,
        }),
        (0, U.jsx)(`div`, {
          className: `grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3`,
          children: nv.map((e, t) =>
            (0, U.jsxs)(
              ng.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { delay: t * 0.07, duration: 0.6 },
                whileHover: { y: -4 },
                className: `group relative overflow-hidden bg-background p-8 sm:p-10`,
                children: [
                  (0, U.jsx)(`div`, {
                    className: `grid-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100`,
                  }),
                  (0, U.jsx)(`div`, {
                    className: `absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100`,
                  }),
                  (0, U.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, U.jsxs)(`div`, {
                        className: `mb-14 flex items-start justify-between`,
                        children: [
                          (0, U.jsx)(e.icon, {
                            className: `h-7 w-7 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`,
                            strokeWidth: 1.5,
                          }),
                          (0, U.jsxs)(`span`, {
                            className: `font-mono text-xs text-muted-foreground`,
                            children: [`0`, t + 1],
                          }),
                        ],
                      }),
                      (0, U.jsx)(`h3`, {
                        className: `text-xl font-semibold uppercase`,
                        children: e.title,
                      }),
                      (0, U.jsx)(`p`, {
                        className: `mt-3 text-muted-foreground transition-colors duration-300 group-hover:text-foreground`,
                        children: e.desc,
                      }),
                    ],
                  }),
                ],
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  });
}
var iv = [
    {
      id: `User`,
      x: 8,
      y: 50,
      desc: `Requests originate from browsers and mobile apps.`,
      tag: `Client`,
    },
    {
      id: `CloudFront`,
      x: 26,
      y: 50,
      desc: `Global content delivery with low latency at the edge.`,
      tag: `Networking`,
    },
    {
      id: `S3`,
      x: 26,
      y: 15,
      desc: `Object storage designed for scalability and durability.`,
      tag: `Storage`,
    },
    {
      id: `API Gateway`,
      x: 46,
      y: 50,
      desc: `Create, publish and secure APIs at any scale.`,
      tag: `Networking`,
    },
    {
      id: `Lambda`,
      x: 66,
      y: 50,
      desc: `Run code without managing servers.`,
      tag: `Compute`,
    },
    {
      id: `EC2`,
      x: 66,
      y: 85,
      desc: `Scalable virtual servers in the cloud.`,
      tag: `Compute`,
    },
    {
      id: `DynamoDB`,
      x: 88,
      y: 50,
      desc: `Fast, flexible NoSQL database at any scale.`,
      tag: `Database`,
    },
  ],
  av = [
    [`User`, `CloudFront`],
    [`CloudFront`, `S3`],
    [`CloudFront`, `API Gateway`],
    [`API Gateway`, `Lambda`],
    [`API Gateway`, `EC2`],
    [`Lambda`, `DynamoDB`],
    [`EC2`, `DynamoDB`],
  ],
  ov = (e) => iv.find((t) => t.id === e);
function sv() {
  let [e, t] = (0, r.useState)(`Lambda`),
    n = (t, n) => e === t || e === n,
    i = ov(e);
  return (0, U.jsx)(`section`, {
    className: `relative border-t border-border bg-surface py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `03`,
          eyebrow: `Architecture`,
          title: `See the cloud in action.`,
          intro: `Hover any service to trace how a request travels through a real serverless stack.`,
        }),
        (0, U.jsxs)(`div`, {
          className: `grid gap-6 lg:grid-cols-[1fr_300px]`,
          children: [
            (0, U.jsxs)(`div`, {
              className: `relative hidden aspect-[16/8] border border-border bg-background md:block`,
              children: [
                (0, U.jsx)(`div`, { className: `grid-bg absolute inset-0` }),
                (0, U.jsx)(`span`, {
                  className: `absolute left-4 top-3 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground`,
                  children: `REGION: ap-south-1`,
                }),
                (0, U.jsx)(`svg`, {
                  viewBox: `0 0 100 100`,
                  preserveAspectRatio: `none`,
                  className: `absolute inset-0 h-full w-full`,
                  children: av.map(([e, t]) => {
                    let r = ov(e),
                      i = ov(t),
                      a = n(e, t),
                      o = `M${r.x} ${r.y} L${r.x + (i.x - r.x) / 2} ${r.y} L${r.x + (i.x - r.x) / 2} ${i.y} L${i.x} ${i.y}`;
                    return (0, U.jsx)(
                      `path`,
                      {
                        d:
                          r.y === i.y || r.x === i.x
                            ? `M${r.x} ${r.y} L${i.x} ${i.y}`
                            : o,
                        fill: `none`,
                        vectorEffect: `non-scaling-stroke`,
                        className: `flow-line transition-all duration-300 ${a ? `stroke-primary` : `stroke-border-strong`}`,
                        style: { strokeWidth: a ? 2 : 1 },
                      },
                      e + t,
                    );
                  }),
                }),
                iv.map((n) => {
                  let r =
                    e === n.id ||
                    av.some(
                      ([t, r]) =>
                        (t === e && r === n.id) || (r === e && t === n.id),
                    );
                  return (0, U.jsx)(
                    `button`,
                    {
                      onMouseEnter: () => t(n.id),
                      onFocus: () => t(n.id),
                      className: `absolute -translate-x-1/2 -translate-y-1/2`,
                      style: { left: `${n.x}%`, top: `${n.y}%` },
                      children: (0, U.jsxs)(ng.div, {
                        animate: { scale: e === n.id ? 1.08 : 1 },
                        className: `border px-3 py-2.5 text-left transition-colors duration-300 ${e === n.id ? `border-primary bg-accent shadow-glow` : r ? `border-primary/50 bg-surface` : `border-border-strong bg-surface`}`,
                        children: [
                          (0, U.jsx)(`div`, {
                            className: `font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground`,
                            children: n.tag,
                          }),
                          (0, U.jsx)(`div`, {
                            className: `font-display text-sm font-semibold`,
                            children: n.id,
                          }),
                        ],
                      }),
                    },
                    n.id,
                  );
                }),
              ],
            }),
            (0, U.jsx)(`div`, {
              className: `flex flex-col gap-2 md:hidden`,
              children: [
                `User`,
                `CloudFront`,
                `API Gateway`,
                `Lambda`,
                `DynamoDB`,
                `S3`,
                `EC2`,
              ].map((n, r) =>
                (0, U.jsxs)(
                  `button`,
                  {
                    onClick: () => t(n),
                    className: `flex items-center justify-between border px-4 py-3 text-left ${e === n ? `border-primary bg-accent` : `border-border bg-background`}`,
                    children: [
                      (0, U.jsx)(`span`, {
                        className: `font-display font-semibold`,
                        children: n,
                      }),
                      (0, U.jsxs)(`span`, {
                        className: `font-mono text-[0.6rem] text-muted-foreground`,
                        children: [r < 4 ? `↓` : `◆`, ` `, ov(n).tag],
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
            (0, U.jsxs)(`div`, {
              className: `border border-border bg-background p-6`,
              children: [
                (0, U.jsx)(`p`, {
                  className: `eyebrow mb-6`,
                  children: `Service inspector`,
                }),
                (0, U.jsx)(um, {
                  mode: `wait`,
                  children: (0, U.jsxs)(
                    ng.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.25 },
                      children: [
                        (0, U.jsx)(`div`, {
                          className: `font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground`,
                          children: i.tag,
                        }),
                        (0, U.jsx)(`h3`, {
                          className: `mt-2 text-3xl font-bold`,
                          children: i.id,
                        }),
                        (0, U.jsxs)(`p`, {
                          className: `mt-4 text-foreground/80`,
                          children: [`“`, i.desc, `”`],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `mt-8 border-t border-border pt-4 font-mono text-[0.7rem] text-muted-foreground`,
                          children: [
                            (0, U.jsx)(`div`, {
                              className: `mb-2 uppercase tracking-[0.2em]`,
                              children: `Connections`,
                            }),
                            av
                              .filter(([e, t]) => e === i.id || t === i.id)
                              .map(([e, t]) =>
                                (0, U.jsxs)(
                                  `div`,
                                  {
                                    className: `py-1`,
                                    children: [
                                      (0, U.jsx)(`span`, {
                                        className: `text-primary`,
                                        children: `→`,
                                      }),
                                      ` `,
                                      e === i.id ? t : e,
                                    ],
                                  },
                                  e + t,
                                ),
                              ),
                          ],
                        }),
                      ],
                    },
                    i.id,
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var cv = [
  {
    name: `Amit Kumar`,
    role: `Chairperson`,
    bio: `Building the next generation of cloud developers.`,
  },
  {
    name: `[Member Name]`,
    role: `Vice Chairperson`,
    bio: `Driving the club's vision and partnerships.`,
  },
  {
    name: `[Member Name]`,
    role: `Technical Lead`,
    bio: `Architecting hands-on cloud workshops.`,
  },
  {
    name: `[Member Name]`,
    role: `Cloud Lead`,
    bio: `Turning AWS services into real projects.`,
  },
  {
    name: `[Member Name]`,
    role: `DevOps Lead`,
    bio: `Pipelines, containers and automation.`,
  },
  {
    name: `[Member Name]`,
    role: `AI/ML Lead`,
    bio: `Shipping models on managed infrastructure.`,
  },
  {
    name: `[Member Name]`,
    role: `Web Lead`,
    bio: `Frontends that deploy in minutes.`,
  },
  {
    name: `[Member Name]`,
    role: `Events Lead`,
    bio: `Workshops, hack nights and bootcamps.`,
  },
  {
    name: `[Member Name]`,
    role: `Design Lead`,
    bio: `Visual identity for the community.`,
  },
  {
    name: `[Member Name]`,
    role: `Content Lead`,
    bio: `Stories, docs and social presence.`,
  },
  {
    name: `[Member Name]`,
    role: `Outreach Lead`,
    bio: `Connecting students with industry.`,
  },
  {
    name: `[Member Name]`,
    role: `Operations Lead`,
    bio: `Keeping everything running smoothly.`,
  },
].map((e) => ({ ...e, linkedin: `#`, instagram: `#`, github: `#` }));
function lv({ m: e, index: t }) {
  let n = (0, r.useRef)(null),
    i = (0, r.useRef)(null),
    a = e.name.startsWith(`[`)
      ? `BU`
      : e.name
          .split(` `)
          .map((e) => e[0])
          .join(``);
  return (
    (0, r.useEffect)(() => {
      let e = n.current;
      if (!e || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
        return;
      let t = (t) => {
          let n = e.getBoundingClientRect(),
            r = (t.clientX - n.left) / n.width - 0.5,
            a = (t.clientY - n.top) / n.height - 0.5;
          (Ei.to(e, {
            rotationY: r * 12,
            rotationX: -a * 12,
            transformPerspective: 800,
            duration: 0.4,
            ease: `power1.out`,
          }),
            i.current &&
              Ei.to(i.current, {
                x: r * 10,
                y: a * 10,
                scale: 1.04,
                duration: 0.4,
                ease: `power1.out`,
              }));
        },
        r = () => {
          (Ei.to(e, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: `power2.out`,
          }),
            i.current &&
              Ei.to(i.current, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: `power2.out`,
              }));
        };
      return (
        e.addEventListener(`mousemove`, t),
        e.addEventListener(`mouseleave`, r),
        () => {
          (e.removeEventListener(`mousemove`, t),
            e.removeEventListener(`mouseleave`, r));
        }
      );
    }, []),
    (0, U.jsxs)(`div`, {
      ref: n,
      className: `group relative border border-border bg-surface p-4 transition-all duration-300 hover:border-primary/60 hover:shadow-lg rounded-sm overflow-hidden`,
      children: [
        (0, U.jsxs)(`div`, {
          className: `absolute top-2 right-3 z-10 pointer-events-none font-mono text-[0.6rem] tracking-[0.2em] text-primary/70 uppercase`,
          children: [String(t + 1).padStart(2, `0`), ` // BUILDER`],
        }),
        (0, U.jsxs)(`div`, {
          ref: i,
          className: `relative aspect-[4/5] overflow-hidden bg-surface-2 border border-border/50 rounded-sm`,
          children: [
            e.image
              ? (0, U.jsx)(`img`, {
                  src: e.image,
                  alt: e.name,
                  loading: `lazy`,
                  className: `h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105`,
                })
              : (0, U.jsxs)(`div`, {
                  className: `grid-bg flex h-full w-full flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105`,
                  children: [
                    (0, U.jsx)(`span`, {
                      className: `font-display text-4xl font-extrabold text-muted-foreground/60 tracking-wider`,
                      children: a,
                    }),
                    (0, U.jsx)(`span`, {
                      className: `mt-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-primary/80`,
                      children: `AWS Builder`,
                    }),
                  ],
                }),
            (0, U.jsx)(`div`, {
              className: `absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-background/90 p-3 transition-transform duration-300 group-hover:translate-y-0`,
              children: [`linkedin`, `instagram`, `github`].map((t) =>
                (0, U.jsx)(
                  `a`,
                  {
                    href: e[t],
                    "aria-label": `${e.name} ${t}`,
                    className: `flex h-8 w-8 items-center justify-center border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm`,
                    children: (0, U.jsx)(Pg, { name: t }),
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          className: `px-1 pb-1 pt-4`,
          children: [
            (0, U.jsx)(`div`, {
              className: `font-mono text-[0.62rem] uppercase tracking-[0.18em] text-primary font-semibold`,
              children: e.role,
            }),
            (0, U.jsx)(`h3`, {
              className: `mt-1 text-lg font-bold text-foreground`,
              children: e.name,
            }),
            (0, U.jsxs)(`p`, {
              className: `mt-1 text-xs text-muted-foreground leading-relaxed`,
              children: [`"`, e.bio, `"`],
            }),
          ],
        }),
      ],
    })
  );
}
function uv() {
  let e = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let t = Ei.context(() => {
        Ei.from(`.builder-card`, {
          opacity: 0,
          y: 35,
          stagger: 0.08,
          duration: 0.7,
          ease: `power2.out`,
          scrollTrigger: { trigger: e.current, start: `top 75%` },
        });
      }, e);
      return () => t.revert();
    }, []),
    (0, U.jsx)(`section`, {
      id: `team`,
      ref: e,
      className: `border-t border-border py-24 lg:py-32 bg-background`,
      children: (0, U.jsxs)(`div`, {
        className: `mx-auto max-w-7xl px-5 lg:px-8`,
        children: [
          (0, U.jsx)(Ag, {
            index: `04`,
            eyebrow: `Meet the builders`,
            title: `The core team.`,
            intro: `Student developers, architects, and designers leading cloud workshops, projects, and events.`,
          }),
          (0, U.jsx)(`div`, {
            className: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`,
            children: cv.map((e, t) =>
              (0, U.jsx)(
                `div`,
                {
                  className: `builder-card`,
                  children: (0, U.jsx)(lv, { m: e, index: t }),
                },
                t,
              ),
            ),
          }),
        ],
      }),
    })
  );
}
var dv = {
    title: `AWS Cloud Workshop`,
    tagline: `Learn. Build. Deploy.`,
    dateISO: `2026-10-15T14:00:00+05:30`,
    dateLabel: `[DD MONTH YYYY]`,
    timeLabel: `[00:00 PM]`,
    venue: `[BENNETT UNIVERSITY / VENUE]`,
    description: `A hands-on session exploring cloud computing, AWS services and real-world deployment.`,
    registerUrl: `#register`,
  },
  fv = [
    {
      title: `AWS Cloud Workshop`,
      date: `15 OCT 2026`,
      venue: `PHL-101`,
      type: `Workshop`,
      description: `Launch your first EC2 instance and host a site on S3.`,
      registerUrl: `#`,
    },
    {
      title: `Cloud Computing Bootcamp`,
      date: `22 OCT 2026`,
      venue: `Bennett University`,
      type: `Bootcamp`,
      description: `Three days of serverless, databases and IAM fundamentals.`,
      registerUrl: `#`,
    },
    {
      title: `AWS Hack Night`,
      date: `05 NOV 2026`,
      venue: `Innovation Lab`,
      type: `Hackathon`,
      description: `Overnight build sprint. Ship something on AWS by sunrise.`,
      registerUrl: `#`,
    },
    {
      title: `Certification Prep Session`,
      date: `19 NOV 2026`,
      venue: `[VENUE]`,
      type: `Session`,
      description: `A guided walkthrough of the Cloud Practitioner exam.`,
      registerUrl: `#`,
    },
  ],
  pv = [
    {
      title: `[Past Event Title]`,
      date: `[MON YYYY]`,
      description: `Replace with a short recap of what happened.`,
      participants: 120,
      photos: 48,
    },
    {
      title: `[Past Event Title]`,
      date: `[MON YYYY]`,
      description: `Replace with a short recap of what happened.`,
      participants: 80,
      photos: 32,
    },
    {
      title: `[Past Event Title]`,
      date: `[MON YYYY]`,
      description: `Replace with a short recap of what happened.`,
      participants: 200,
      photos: 76,
    },
  ];
function mv(e) {
  let [t, n] = (0, r.useState)(null);
  (0, r.useEffect)(() => {
    n(Date.now());
    let e = setInterval(() => n(Date.now()), 1e3);
    return () => clearInterval(e);
  }, []);
  let i = t === null ? 0 : Math.max(0, new Date(e).getTime() - t);
  return [
    [`Days`, Math.floor(i / 864e5)],
    [`Hours`, Math.floor(i / 36e5) % 24],
    [`Min`, Math.floor(i / 6e4) % 60],
    [`Sec`, Math.floor(i / 1e3) % 60],
  ];
}
function hv() {
  let e = mv(dv.dateISO);
  return (0, U.jsxs)(`section`, {
    className: `relative overflow-hidden border-t border-border py-28 lg:py-36`,
    children: [
      (0, U.jsx)(`div`, {
        className: `absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]`,
      }),
      (0, U.jsxs)(`div`, {
        className: `relative mx-auto max-w-7xl px-5 lg:px-8`,
        children: [
          (0, U.jsx)(kg, {
            children: (0, U.jsxs)(`p`, {
              className: `eyebrow mb-4`,
              children: [
                (0, U.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `05 /`,
                }),
                ` Next on the cloud`,
              ],
            }),
          }),
          (0, U.jsxs)(`div`, {
            className: `grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end`,
            children: [
              (0, U.jsxs)(`div`, {
                children: [
                  (0, U.jsx)(kg, {
                    delay: 0.05,
                    children: (0, U.jsx)(`h2`, {
                      className: `text-5xl font-bold uppercase leading-[0.9] sm:text-7xl lg:text-8xl`,
                      children: dv.title,
                    }),
                  }),
                  (0, U.jsx)(kg, {
                    delay: 0.1,
                    children: (0, U.jsx)(`p`, {
                      className: `mt-4 font-display text-2xl text-primary`,
                      children: dv.tagline,
                    }),
                  }),
                  (0, U.jsx)(kg, {
                    delay: 0.15,
                    children: (0, U.jsx)(`p`, {
                      className: `mt-6 max-w-lg text-muted-foreground`,
                      children: dv.description,
                    }),
                  }),
                  (0, U.jsx)(kg, {
                    delay: 0.2,
                    children: (0, U.jsxs)(`div`, {
                      className: `mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm`,
                      children: [
                        (0, U.jsxs)(`span`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, U.jsx)(r_, {
                              className: `h-4 w-4 text-primary`,
                            }),
                            dv.dateLabel,
                          ],
                        }),
                        (0, U.jsxs)(`span`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, U.jsx)(p_, {
                              className: `h-4 w-4 text-primary`,
                            }),
                            dv.timeLabel,
                          ],
                        }),
                        (0, U.jsxs)(`span`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, U.jsx)(D_, {
                              className: `h-4 w-4 text-primary`,
                            }),
                            dv.venue,
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, U.jsx)(kg, {
                    delay: 0.25,
                    children: (0, U.jsx)(`a`, {
                      href: dv.registerUrl,
                      className: `btn-primary mt-10`,
                      children: `Register Now`,
                    }),
                  }),
                ],
              }),
              (0, U.jsx)(kg, {
                delay: 0.2,
                children: (0, U.jsx)(`div`, {
                  className: `grid grid-cols-4 border border-border bg-surface`,
                  children: e.map(([e, t], n) =>
                    (0, U.jsxs)(
                      `div`,
                      {
                        className: `p-4 text-center sm:p-6 ${n ? `border-l border-border` : ``}`,
                        children: [
                          (0, U.jsx)(`div`, {
                            className: `font-display text-3xl font-bold tabular-nums sm:text-5xl`,
                            children: String(t).padStart(2, `0`),
                          }),
                          (0, U.jsx)(`div`, {
                            className: `mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground`,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gv() {
  let [e, t] = (0, r.useState)(`up`);
  return (0, U.jsx)(`section`, {
    id: `events`,
    className: `border-t border-border bg-surface py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `06`,
          eyebrow: `Events`,
          title: `On the calendar.`,
        }),
        (0, U.jsx)(`div`, {
          className: `mb-10 inline-flex border border-border`,
          children: [
            [`up`, `Upcoming`],
            [`past`, `Past Events`],
          ].map(([n, r]) =>
            (0, U.jsxs)(
              `button`,
              {
                onClick: () => t(n),
                className: `relative px-5 py-3 font-mono text-xs uppercase tracking-[0.16em]`,
                children: [
                  e === n &&
                    (0, U.jsx)(ng.span, {
                      layoutId: `tab`,
                      className: `absolute inset-0 bg-primary`,
                    }),
                  (0, U.jsx)(`span`, {
                    className: `relative ${e === n ? `text-primary-foreground` : `text-muted-foreground`}`,
                    children: r,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
        (0, U.jsx)(um, {
          mode: `wait`,
          children:
            e === `up`
              ? (0, U.jsx)(
                  ng.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: `divide-y divide-border border-y border-border`,
                    children: fv.map((e, t) =>
                      (0, U.jsxs)(
                        ng.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: t * 0.07 },
                          className: `group grid items-center gap-4 py-6 transition-colors hover:bg-background md:grid-cols-[140px_1fr_200px_auto] md:px-4`,
                          children: [
                            (0, U.jsx)(`div`, {
                              className: `font-mono text-sm text-primary`,
                              children: e.date,
                            }),
                            (0, U.jsxs)(`div`, {
                              children: [
                                (0, U.jsx)(`div`, {
                                  className: `font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground`,
                                  children: e.type,
                                }),
                                (0, U.jsx)(`h3`, {
                                  className: `mt-1 text-2xl font-semibold uppercase transition-transform duration-300 group-hover:translate-x-2`,
                                  children: e.title,
                                }),
                                (0, U.jsx)(`p`, {
                                  className: `mt-1 text-sm text-muted-foreground`,
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, U.jsxs)(`div`, {
                              className: `flex items-center gap-2 font-mono text-xs text-muted-foreground`,
                              children: [
                                (0, U.jsx)(D_, { className: `h-3.5 w-3.5` }),
                                e.venue,
                              ],
                            }),
                            (0, U.jsxs)(`a`, {
                              href: e.registerUrl,
                              className: `btn-ghost !py-2.5`,
                              children: [
                                `Register `,
                                (0, U.jsx)(Zg, { className: `h-3.5 w-3.5` }),
                              ],
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  },
                  `up`,
                )
              : (0, U.jsx)(
                  ng.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: `grid gap-4 md:grid-cols-3`,
                    children: pv.map((e, t) =>
                      (0, U.jsxs)(
                        ng.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: t * 0.08 },
                          className: `group relative aspect-[4/5] overflow-hidden border border-border bg-background`,
                          children: [
                            e.image
                              ? (0, U.jsx)(`img`, {
                                  src: e.image,
                                  alt: e.title,
                                  className: `absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110`,
                                })
                              : (0, U.jsx)(`div`, {
                                  className: `grid-bg absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110`,
                                  children: (0, U.jsx)(`span`, {
                                    className: `font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground`,
                                    children: `Event photo placeholder`,
                                  }),
                                }),
                            (0, U.jsx)(`div`, {
                              className: `absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent`,
                            }),
                            (0, U.jsxs)(`div`, {
                              className: `absolute inset-x-0 bottom-0 p-6`,
                              children: [
                                (0, U.jsx)(`div`, {
                                  className: `font-mono text-xs text-primary`,
                                  children: e.date,
                                }),
                                (0, U.jsx)(`h3`, {
                                  className: `mt-1 text-xl font-semibold`,
                                  children: e.title,
                                }),
                                (0, U.jsx)(`div`, {
                                  className: `grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]`,
                                  children: (0, U.jsxs)(`div`, {
                                    className: `overflow-hidden`,
                                    children: [
                                      (0, U.jsx)(`p`, {
                                        className: `mt-3 text-sm text-muted-foreground`,
                                        children: e.description,
                                      }),
                                      (0, U.jsxs)(`div`, {
                                        className: `mt-3 flex gap-4 font-mono text-xs text-muted-foreground`,
                                        children: [
                                          (0, U.jsxs)(`span`, {
                                            className: `flex items-center gap-1.5`,
                                            children: [
                                              (0, U.jsx)(G_, {
                                                className: `h-3.5 w-3.5`,
                                              }),
                                              e.participants,
                                            ],
                                          }),
                                          (0, U.jsxs)(`span`, {
                                            className: `flex items-center gap-1.5`,
                                            children: [
                                              (0, U.jsx)(a_, {
                                                className: `h-3.5 w-3.5`,
                                              }),
                                              e.photos,
                                              ` photos`,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  },
                  `past`,
                ),
        }),
      ],
    }),
  });
}
var _v = [`ALL`, `WEB`, `MOBILE`, `AI/ML`, `CLOUD`],
  vv = [
    {
      name: `[Campus Events Portal]`,
      description: `Serverless event registration with real-time seat counts.`,
      category: `WEB`,
      tech: [`React`, `Node.js`],
      aws: [`Lambda`, `DynamoDB`, `S3`],
      github: `#`,
      demo: `#`,
    },
    {
      name: `[Attendance App]`,
      description: `Mobile check-ins with QR codes and cloud sync.`,
      category: `MOBILE`,
      tech: [`Flutter`],
      aws: [`API Gateway`, `DynamoDB`],
      github: `#`,
      demo: `#`,
    },
    {
      name: `[Notes Summarizer]`,
      description: `Upload lecture notes, get AI summaries in seconds.`,
      category: `AI/ML`,
      tech: [`Python`],
      aws: [`S3`, `Lambda`],
      github: `#`,
      demo: `#`,
    },
    {
      name: `[Infra Templates]`,
      description: `Reusable IaC templates for student deployments.`,
      category: `CLOUD`,
      tech: [`Python`],
      aws: [`EC2`, `RDS`, `S3`],
      github: `#`,
      demo: `#`,
    },
    {
      name: `[Club Website]`,
      description: `This site, deployed globally on a CDN.`,
      category: `WEB`,
      tech: [`React`],
      aws: [`CloudFront`, `S3`],
      github: `#`,
      demo: `#`,
    },
    {
      name: `[Cost Monitor]`,
      description: `Dashboard that alerts students before free-tier limits.`,
      category: `CLOUD`,
      tech: [`Node.js`],
      aws: [`Lambda`, `EC2`],
      github: `#`,
      demo: `#`,
    },
  ];
function yv() {
  let [e, t] = (0, r.useState)(`ALL`),
    n = vv.filter((t) => e === `ALL` || t.category === e);
  return (0, U.jsx)(`section`, {
    id: `projects`,
    className: `border-t border-border py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `07`,
          eyebrow: `Projects`,
          title: `Built by the community.`,
          intro: `Real applications, designed and deployed by members on AWS infrastructure.`,
        }),
        (0, U.jsx)(`div`, {
          className: `mb-10 flex flex-wrap gap-2`,
          children: _v.map((n) =>
            (0, U.jsx)(
              `button`,
              {
                onClick: () => t(n),
                className: `border px-4 py-2 font-mono text-xs tracking-[0.14em] transition-colors ${e === n ? `border-primary bg-primary text-primary-foreground` : `border-border text-muted-foreground hover:border-border-strong hover:text-foreground`}`,
                children: n,
              },
              n,
            ),
          ),
        }),
        (0, U.jsx)(ng.div, {
          layout: !0,
          className: `grid gap-4 md:grid-cols-2 lg:grid-cols-3`,
          children: (0, U.jsx)(um, {
            mode: `popLayout`,
            children: n.map((e) =>
              (0, U.jsxs)(
                ng.article,
                {
                  layout: !0,
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.35 },
                  className: `group flex flex-col border border-border bg-surface transition-colors hover:border-primary/50`,
                  children: [
                    (0, U.jsxs)(`div`, {
                      className: `relative aspect-video overflow-hidden border-b border-border bg-surface-2`,
                      children: [
                        e.image
                          ? (0, U.jsx)(`img`, {
                              src: e.image,
                              alt: e.name,
                              className: `h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`,
                            })
                          : (0, U.jsx)(`div`, {
                              className: `grid-bg flex h-full items-center justify-center transition-transform duration-700 group-hover:scale-105`,
                              children: (0, U.jsx)(`span`, {
                                className: `font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground`,
                                children: `Project screenshot`,
                              }),
                            }),
                        (0, U.jsx)(`span`, {
                          className: `absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-primary`,
                          children: e.category,
                        }),
                      ],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: `flex flex-1 flex-col p-6`,
                      children: [
                        (0, U.jsx)(`h3`, {
                          className: `text-xl font-semibold`,
                          children: e.name,
                        }),
                        (0, U.jsx)(`p`, {
                          className: `mt-2 flex-1 text-sm text-muted-foreground`,
                          children: e.description,
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `mt-5 flex flex-wrap gap-1.5`,
                          children: [
                            e.tech.map((e) =>
                              (0, U.jsx)(
                                `span`,
                                {
                                  className: `border border-border px-2 py-0.5 font-mono text-[0.65rem]`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                            e.aws.map((e) =>
                              (0, U.jsx)(
                                `span`,
                                {
                                  className: `bg-accent px-2 py-0.5 font-mono text-[0.65rem] text-accent-foreground`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          ],
                        }),
                        (0, U.jsxs)(`div`, {
                          className: `mt-6 flex gap-4 border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.14em]`,
                          children: [
                            (0, U.jsxs)(`a`, {
                              href: e.github,
                              className: `flex items-center gap-1.5 text-muted-foreground hover:text-primary`,
                              children: [
                                (0, U.jsx)(Pg, {
                                  name: `github`,
                                  className: `h-3.5 w-3.5`,
                                }),
                                `GitHub`,
                              ],
                            }),
                            (0, U.jsxs)(`a`, {
                              href: e.demo,
                              className: `flex items-center gap-1.5 text-muted-foreground hover:text-primary`,
                              children: [
                                (0, U.jsx)(y_, { className: `h-3.5 w-3.5` }),
                                `Live demo`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.name,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
var bv = [
  {
    year: `[2025]`,
    category: `Hackathon Win`,
    title: `[Hackathon Name]`,
    description: `Replace with team, placement and project built.`,
  },
  {
    year: `[2025]`,
    category: `AWS Certifications`,
    title: `[XX] members certified`,
    description: `Replace with certification counts and levels.`,
  },
  {
    year: `[2025]`,
    category: `Tech Competitions`,
    title: `[Competition Name]`,
    description: `Replace with result and highlights.`,
  },
  {
    year: `[2026]`,
    category: `Community Milestone`,
    title: `[XXX] members`,
    description: `Replace with the milestone the club reached.`,
  },
  {
    year: `[2026]`,
    category: `Industry Collaboration`,
    title: `[Partner Name]`,
    description: `Replace with the collaboration details.`,
  },
];
function xv() {
  return (0, U.jsx)(`section`, {
    id: `achievements`,
    className: `border-t border-border bg-surface py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `08`,
          eyebrow: `Achievements`,
          title: `Building impact.`,
        }),
        (0, U.jsxs)(`div`, {
          className: `relative mt-8`,
          children: [
            (0, U.jsx)(`div`, {
              className: `absolute left-0 right-0 top-3 hidden h-px bg-border lg:block`,
            }),
            (0, U.jsx)(`div`, {
              className: `grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4`,
              children: bv.map((e, t) =>
                (0, U.jsxs)(
                  ng.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { delay: t * 0.1, duration: 0.6 },
                    className: `relative flex flex-col`,
                    children: [
                      (0, U.jsxs)(`span`, {
                        className: `relative hidden h-6 w-6 items-center justify-center lg:flex mb-4`,
                        children: [
                          (0, U.jsx)(`span`, {
                            className: `h-3.5 w-3.5 border border-primary bg-background`,
                          }),
                          (0, U.jsx)(`span`, {
                            className: `absolute h-1.5 w-1.5 bg-primary`,
                          }),
                        ],
                      }),
                      (0, U.jsxs)(`div`, {
                        className: `flex-1 border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-sm`,
                        children: [
                          (0, U.jsxs)(`div`, {
                            className: `flex items-center justify-between font-mono text-xs`,
                            children: [
                              (0, U.jsx)(`span`, {
                                className: `text-primary font-semibold`,
                                children: e.year,
                              }),
                              (0, U.jsx)(`span`, {
                                className: `uppercase tracking-[0.16em] text-muted-foreground text-[0.65rem]`,
                                children: e.category,
                              }),
                            ],
                          }),
                          (0, U.jsx)(`h3`, {
                            className: `mt-4 text-xl font-semibold text-foreground`,
                            children: e.title,
                          }),
                          (0, U.jsx)(`p`, {
                            className: `mt-2 text-sm text-muted-foreground leading-relaxed`,
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
var G;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) =>
            typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) =>
      typeof t == `bigint` ? t.toString() : t));
})((G ||= {}));
var Sv;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((Sv ||= {}));
var K = G.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  Cv = (e) => {
    switch (typeof e) {
      case `undefined`:
        return K.undefined;
      case `string`:
        return K.string;
      case `number`:
        return Number.isNaN(e) ? K.nan : K.number;
      case `boolean`:
        return K.boolean;
      case `function`:
        return K.function;
      case `bigint`:
        return K.bigint;
      case `symbol`:
        return K.symbol;
      case `object`:
        return Array.isArray(e)
          ? K.array
          : e === null
            ? K.null
            : e.then &&
                typeof e.then == `function` &&
                e.catch &&
                typeof e.catch == `function`
              ? K.promise
              : typeof Map < `u` && e instanceof Map
                ? K.map
                : typeof Set < `u` && e instanceof Set
                  ? K.set
                  : typeof Date < `u` && e instanceof Date
                    ? K.date
                    : K.object;
      default:
        return K.unknown;
    }
  },
  q = G.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  wv = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf
        ? Object.setPrototypeOf(this, t)
        : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length;) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, G.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
wv.create = (e) => new wv(e);
var Tv = (e, t) => {
    let n;
    switch (e.code) {
      case q.invalid_type:
        n =
          e.received === K.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case q.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, G.jsonStringifyReplacer)}`;
        break;
      case q.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${G.joinValues(e.keys, `, `)}`;
        break;
      case q.invalid_union:
        n = `Invalid input`;
        break;
      case q.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${G.joinValues(e.options)}`;
        break;
      case q.invalid_enum_value:
        n = `Invalid enum value. Expected ${G.joinValues(e.options)}, received '${e.received}'`;
        break;
      case q.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case q.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case q.invalid_date:
        n = `Invalid date`;
        break;
      case q.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : G.assertNever(e.validation)
          : (n =
              e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case q.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case q.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case q.custom:
        n = `Invalid input`;
        break;
      case q.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case q.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case q.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), G.assertNever(e));
    }
    return { message: n };
  },
  Ev = Tv;
function Dv() {
  return Ev;
}
var Ov = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function J(e, t) {
  let n = Dv(),
    r = Ov({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === Tv ? void 0 : Tv,
      ].filter((e) => !!e),
    });
  e.common.issues.push(r);
}
var kv = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return Y;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return Y;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` &&
            (i.value !== void 0 || r.alwaysSet) &&
            (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  Y = Object.freeze({ status: `aborted` }),
  Av = (e) => ({ status: `dirty`, value: e }),
  jv = (e) => ({ status: `valid`, value: e }),
  Mv = (e) => e.status === `aborted`,
  Nv = (e) => e.status === `dirty`,
  Pv = (e) => e.status === `valid`,
  Fv = (e) => typeof Promise < `u` && e instanceof Promise,
  X;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((X ||= {}));
var Iv = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Lv = (e, t) => {
    if (Pv(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length)
      throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new wv(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function Z(e) {
  if (!e) return {};
  let {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var Q = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return Cv(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: Cv(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new kv(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: Cv(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (Fv(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Cv(e),
      };
      return Lv(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Cv(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return Pv(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) &&
            (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        Pv(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Cv(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return Lv(n, await (Fv(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0
          ? { message: t }
          : typeof t == `function`
            ? t(e)
            : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: q.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new By({
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = {
          version: 1,
          vendor: `zod`,
          validate: (e) => this[`~validate`](e),
        }));
    }
    optional() {
      return Vy.create(this, this._def);
    }
    nullable() {
      return Hy.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return xy.create(this);
    }
    promise() {
      return zy.create(this, this._def);
    }
    or(e) {
      return wy.create([this, e], this._def);
    }
    and(e) {
      return Oy.create(this, e, this._def);
    }
    transform(e) {
      return new By({
        ...Z(this._def),
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Uy({
        ...Z(this._def),
        innerType: this,
        defaultValue: t,
        typeName: $.ZodDefault,
      });
    }
    brand() {
      return new Ky({ typeName: $.ZodBranded, type: this, ...Z(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Wy({
        ...Z(this._def),
        innerType: this,
        catchValue: t,
        typeName: $.ZodCatch,
      });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return qy.create(this, e);
    }
    readonly() {
      return Jy.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  Rv = /^c[^\s-]{8,}$/i,
  zv = /^[0-9a-z]+$/,
  Bv = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Vv =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Hv = /^[a-z0-9_-]{21}$/i,
  Uv = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Wv =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Gv =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Kv = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  qv,
  Jv =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Yv =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Xv =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Zv =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Qv = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  $v = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  ey = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  ty = RegExp(`^${ey}$`);
function ny(e) {
  let t = `[0-5]\\d`;
  e.precision
    ? (t = `${t}\\.\\d{${e.precision}}`)
    : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function ry(e) {
  return RegExp(`^${ny(e)}$`);
}
function iy(e) {
  let t = `${ey}T${ny(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function ay(e, t) {
  return !!(
    ((t === `v4` || !t) && Jv.test(e)) ||
    ((t === `v6` || !t) && Xv.test(e))
  );
}
function oy(e, t) {
  if (!Uv.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function sy(e, t) {
  return !!(
    ((t === `v4` || !t) && Yv.test(e)) ||
    ((t === `v6` || !t) && Zv.test(e))
  );
}
var cy = class e extends Q {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== K.string)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.string,
          received: t.parsedType,
        }),
        Y
      );
    }
    let t = new kv(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? J(n, {
                code: q.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              J(n, {
                code: q.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        Gv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `email`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((qv ||= new RegExp(Kv, `u`)),
          qv.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            J(n, {
              validation: `emoji`,
              code: q.invalid_string,
              message: r.message,
            }),
            t.dirty()));
      else if (r.kind === `uuid`)
        Vv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `uuid`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `nanoid`)
        Hv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `nanoid`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid`)
        Rv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `cuid`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `cuid2`)
        zv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `cuid2`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `ulid`)
        Bv.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            validation: `ulid`,
            code: q.invalid_string,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            J(n, {
              validation: `url`,
              code: q.invalid_string,
              message: r.message,
            }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              J(n, {
                validation: `regex`,
                code: q.invalid_string,
                message: r.message,
              }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                J(n, {
                  code: q.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      J(n, {
                        code: q.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        J(n, {
                          code: q.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? iy(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          J(n, {
                            code: q.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? ty.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            J(n, {
                              code: q.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? ry(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              J(n, {
                                code: q.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? Wv.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                J(n, {
                                  validation: `duration`,
                                  code: q.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? ay(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  J(n, {
                                    validation: `ip`,
                                    code: q.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? oy(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    J(n, {
                                      validation: `jwt`,
                                      code: q.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? sy(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      J(n, {
                                        validation: `cidr`,
                                        code: q.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? Qv.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        J(n, {
                                          validation: `base64`,
                                          code: q.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? $v.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          J(n, {
                                            validation: `base64url`,
                                            code: q.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : G.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: q.invalid_string,
      ...X.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...X.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...X.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...X.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...X.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...X.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...X.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...X.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...X.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...X.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...X.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...X.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...X.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...X.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({
          kind: `datetime`,
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...X.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...X.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...X.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...X.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...X.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...X.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...X.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...X.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...X.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...X.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, X.errToObj(e));
  }
  trim() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `trim` }],
    });
  }
  toLowerCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toLowerCase` }],
    });
  }
  toUpperCase() {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: `toUpperCase` }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
cy.create = (e) =>
  new cy({
    checks: [],
    typeName: $.ZodString,
    coerce: e?.coerce ?? !1,
    ...Z(e),
  });
function ly(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var uy = class e extends Q {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== K.number)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.number,
          received: t.parsedType,
        }),
        Y
      );
    }
    let t,
      n = new kv();
    for (let r of this._def.checks)
      r.kind === `int`
        ? G.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          J(t, {
            code: q.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            J(t, {
              code: q.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              J(t, {
                code: q.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? ly(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                J(t, {
                  code: q.not_multiple_of,
                  multipleOf: r.value,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  J(t, { code: q.not_finite, message: r.message }),
                  n.dirty())
                : G.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, X.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: X.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: X.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !1,
      message: X.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !1,
      message: X.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: 0,
      inclusive: !0,
      message: X.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: 0,
      inclusive: !0,
      message: X.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: X.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: X.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: X.toString(e),
    })._addCheck({
      kind: `max`,
      inclusive: !0,
      value: 2 ** 53 - 1,
      message: X.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === `int` || (e.kind === `multipleOf` && G.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`)
        return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
uy.create = (e) =>
  new uy({
    checks: [],
    typeName: $.ZodNumber,
    coerce: e?.coerce || !1,
    ...Z(e),
  });
var dy = class e extends Q {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== K.bigint) return this._getInvalidInput(e);
    let t,
      n = new kv();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          J(t, {
            code: q.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            J(t, {
              code: q.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              J(t, {
                code: q.not_multiple_of,
                multipleOf: r.value,
                message: r.message,
              }),
              n.dirty())
            : G.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (
      J(t, {
        code: q.invalid_type,
        expected: K.bigint,
        received: t.parsedType,
      }),
      Y
    );
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, X.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: X.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !1,
      message: X.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: `max`,
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: `min`,
      value: BigInt(0),
      inclusive: !0,
      message: X.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: `multipleOf`,
      value: e,
      message: X.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
dy.create = (e) =>
  new dy({
    checks: [],
    typeName: $.ZodBigInt,
    coerce: e?.coerce ?? !1,
    ...Z(e),
  });
var fy = class extends Q {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== K.boolean)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.boolean,
          received: t.parsedType,
        }),
        Y
      );
    }
    return jv(e.data);
  }
};
fy.create = (e) =>
  new fy({ typeName: $.ZodBoolean, coerce: e?.coerce || !1, ...Z(e) });
var py = class e extends Q {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== K.date)
    ) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.date,
          received: t.parsedType,
        }),
        Y
      );
    }
    if (Number.isNaN(e.data.getTime()))
      return (J(this._getOrReturnCtx(e), { code: q.invalid_date }), Y);
    let t = new kv(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            J(n, {
              code: q.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : G.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({
      kind: `min`,
      value: e.getTime(),
      message: X.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: `max`,
      value: e.getTime(),
      message: X.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
py.create = (e) =>
  new py({ checks: [], coerce: e?.coerce || !1, typeName: $.ZodDate, ...Z(e) });
var my = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.symbol) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.symbol,
          received: t.parsedType,
        }),
        Y
      );
    }
    return jv(e.data);
  }
};
my.create = (e) => new my({ typeName: $.ZodSymbol, ...Z(e) });
var hy = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.undefined,
          received: t.parsedType,
        }),
        Y
      );
    }
    return jv(e.data);
  }
};
hy.create = (e) => new hy({ typeName: $.ZodUndefined, ...Z(e) });
var gy = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.null) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.null,
          received: t.parsedType,
        }),
        Y
      );
    }
    return jv(e.data);
  }
};
gy.create = (e) => new gy({ typeName: $.ZodNull, ...Z(e) });
var _y = class extends Q {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return jv(e.data);
  }
};
_y.create = (e) => new _y({ typeName: $.ZodAny, ...Z(e) });
var vy = class extends Q {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return jv(e.data);
  }
};
vy.create = (e) => new vy({ typeName: $.ZodUnknown, ...Z(e) });
var yy = class extends Q {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (
      J(t, { code: q.invalid_type, expected: K.never, received: t.parsedType }),
      Y
    );
  }
};
yy.create = (e) => new yy({ typeName: $.ZodNever, ...Z(e) });
var by = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.void,
          received: t.parsedType,
        }),
        Y
      );
    }
    return jv(e.data);
  }
};
by.create = (e) => new by({ typeName: $.ZodVoid, ...Z(e) });
var xy = class e extends Q {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== K.array)
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.array,
          received: t.parsedType,
        }),
        Y
      );
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (J(t, {
          code: e ? q.too_big : q.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (J(t, {
          code: q.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (J(t, {
          code: q.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new Iv(t, e, t.path, n))),
      ).then((e) => kv.mergeArray(n, e));
    let i = [...t.data].map((e, n) =>
      r.type._parseSync(new Iv(t, e, t.path, n)),
    );
    return kv.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({
      ...this._def,
      minLength: { value: t, message: X.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxLength: { value: t, message: X.toString(n) },
    });
  }
  length(t, n) {
    return new e({
      ...this._def,
      exactLength: { value: t, message: X.toString(n) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
xy.create = (e, t) =>
  new xy({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...Z(t),
  });
function Sy(e) {
  if (e instanceof Cy) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = Vy.create(Sy(r));
    }
    return new Cy({ ...e._def, shape: () => t });
  }
  return e instanceof xy
    ? new xy({ ...e._def, type: Sy(e.element) })
    : e instanceof Vy
      ? Vy.create(Sy(e.unwrap()))
      : e instanceof Hy
        ? Hy.create(Sy(e.unwrap()))
        : e instanceof ky
          ? ky.create(e.items.map((e) => Sy(e)))
          : e;
}
var Cy = class e extends Q {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = G.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== K.object) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          code: q.invalid_type,
          expected: K.object,
          received: t.parsedType,
        }),
        Y
      );
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (!(
      this._def.catchall instanceof yy && this._def.unknownKeys === `strip`
    ))
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new Iv(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof yy) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 &&
          (J(n, { code: q.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`)
        throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new Iv(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => kv.mergeObjectSync(t, e))
      : kv.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      X.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: X.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: $.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of G.objectKeys(t))
      t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return Sy(this);
  }
  partial(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape)) {
      let r = this.shape[e];
      n[e] = t && !t[e] ? r : r.optional();
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof Vy;) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return Iy(G.objectKeys(this.shape));
  }
};
((Cy.create = (e, t) =>
  new Cy({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: yy.create(),
    typeName: $.ZodObject,
    ...Z(t),
  })),
  (Cy.strictCreate = (e, t) =>
    new Cy({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: yy.create(),
      typeName: $.ZodObject,
      ...Z(t),
    })),
  (Cy.lazycreate = (e, t) =>
    new Cy({
      shape: e,
      unknownKeys: `strip`,
      catchall: yy.create(),
      typeName: $.ZodObject,
      ...Z(t),
    })));
var wy = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new wv(e.ctx.common.issues));
      return (J(t, { code: q.invalid_union, unionErrors: n }), Y);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await e._parseAsync({
              data: t.data,
              path: t.path,
              parent: n,
            }),
            ctx: n,
          };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new wv(e));
      return (J(t, { code: q.invalid_union, unionErrors: i }), Y);
    }
  }
  get options() {
    return this._def.options;
  }
};
wy.create = (e, t) => new wy({ options: e, typeName: $.ZodUnion, ...Z(t) });
var Ty = (e) =>
    e instanceof Py
      ? Ty(e.schema)
      : e instanceof By
        ? Ty(e.innerType())
        : e instanceof Fy
          ? [e.value]
          : e instanceof Ly
            ? e.options
            : e instanceof Ry
              ? G.objectValues(e.enum)
              : e instanceof Uy
                ? Ty(e._def.innerType)
                : e instanceof hy
                  ? [void 0]
                  : e instanceof gy
                    ? [null]
                    : e instanceof Vy
                      ? [void 0, ...Ty(e.unwrap())]
                      : e instanceof Hy
                        ? [null, ...Ty(e.unwrap())]
                        : e instanceof Ky || e instanceof Jy
                          ? Ty(e.unwrap())
                          : e instanceof Wy
                            ? Ty(e._def.innerType)
                            : [],
  Ey = class e extends Q {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== K.object)
        return (
          J(t, {
            code: q.invalid_type,
            expected: K.object,
            received: t.parsedType,
          }),
          Y
        );
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (J(t, {
            code: q.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          Y);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = Ty(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(
              `Discriminator property ${String(t)} has duplicate value ${String(r)}`,
            );
          i.set(r, e);
        }
      }
      return new e({
        typeName: $.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...Z(r),
      });
    }
  };
function Dy(e, t) {
  let n = Cv(e),
    r = Cv(t);
  if (e === t) return { valid: !0, data: e };
  if (n === K.object && r === K.object) {
    let n = G.objectKeys(t),
      r = G.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Dy(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (n === K.array && r === K.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = Dy(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return n === K.date && r === K.date && +e == +t
    ? { valid: !0, data: e }
    : { valid: !1 };
}
var Oy = class extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (Mv(e) || Mv(r)) return Y;
        let i = Dy(e.value, r.value);
        return i.valid
          ? ((Nv(e) || Nv(r)) && t.dirty(), { status: t.value, value: i.data })
          : (J(n, { code: q.invalid_intersection_types }), Y);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
Oy.create = (e, t, n) =>
  new Oy({ left: e, right: t, typeName: $.ZodIntersection, ...Z(n) });
var ky = class e extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.array)
      return (
        J(n, {
          code: q.invalid_type,
          expected: K.array,
          received: n.parsedType,
        }),
        Y
      );
    if (n.data.length < this._def.items.length)
      return (
        J(n, {
          code: q.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        Y
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (J(n, {
        code: q.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new Iv(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async
      ? Promise.all(r).then((e) => kv.mergeArray(t, e))
      : kv.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
ky.create = (e, t) => {
  if (!Array.isArray(e))
    throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new ky({ items: e, typeName: $.ZodTuple, rest: null, ...Z(t) });
};
var Ay = class e extends Q {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== K.object)
        return (
          J(n, {
            code: q.invalid_type,
            expected: K.object,
            received: n.parsedType,
          }),
          Y
        );
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new Iv(n, e, n.path, e)),
          value: a._parse(new Iv(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async
        ? kv.mergeObjectAsync(t, r)
        : kv.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof Q
        ? new e({ keyType: t, valueType: n, typeName: $.ZodRecord, ...Z(r) })
        : new e({
            keyType: cy.create(),
            valueType: t,
            typeName: $.ZodRecord,
            ...Z(n),
          });
    }
  },
  jy = class extends Q {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== K.map)
        return (
          J(n, {
            code: q.invalid_type,
            expected: K.map,
            received: n.parsedType,
          }),
          Y
        );
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new Iv(n, e, n.path, [a, `key`])),
          value: i._parse(new Iv(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return Y;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
              e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      }
      {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return Y;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(),
            e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
jy.create = (e, t, n) =>
  new jy({ valueType: t, keyType: e, typeName: $.ZodMap, ...Z(n) });
var My = class e extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.set)
      return (
        J(n, { code: q.invalid_type, expected: K.set, received: n.parsedType }),
        Y
      );
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (J(n, {
        code: q.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (J(n, {
          code: q.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return Y;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) =>
      i._parse(new Iv(n, e, n.path, t)),
    );
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({
      ...this._def,
      minSize: { value: t, message: X.toString(n) },
    });
  }
  max(t, n) {
    return new e({
      ...this._def,
      maxSize: { value: t, message: X.toString(n) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
My.create = (e, t) =>
  new My({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: $.ZodSet,
    ...Z(t),
  });
var Ny = class e extends Q {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== K.function)
        return (
          J(t, {
            code: q.invalid_type,
            expected: K.function,
            received: t.parsedType,
          }),
          Y
        );
      function n(e, n) {
        return Ov({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Dv(),
            Tv,
          ].filter((e) => !!e),
          issueData: { code: q.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return Ov({
          data: e,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            Dv(),
            Tv,
          ].filter((e) => !!e),
          issueData: { code: q.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof zy) {
        let e = this;
        return jv(async function (...t) {
          let o = new wv([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      }
      {
        let e = this;
        return jv(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new wv([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new wv([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: ky.create(t).rest(vy.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || ky.create([]).rest(vy.create()),
        returns: n || vy.create(),
        typeName: $.ZodFunction,
        ...Z(r),
      });
    }
  },
  Py = class extends Q {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: t.data, path: t.path, parent: t });
    }
  };
Py.create = (e, t) => new Py({ getter: e, typeName: $.ZodLazy, ...Z(t) });
var Fy = class extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, {
          received: t.data,
          code: q.invalid_literal,
          expected: this._def.value,
        }),
        Y
      );
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Fy.create = (e, t) => new Fy({ value: e, typeName: $.ZodLiteral, ...Z(t) });
function Iy(e, t) {
  return new Ly({ values: e, typeName: $.ZodEnum, ...Z(t) });
}
var Ly = class e extends Q {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        J(t, {
          expected: G.joinValues(n),
          received: t.parsedType,
          code: q.invalid_type,
        }),
        Y
      );
    }
    if (
      ((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))
    ) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        J(t, { received: t.data, code: q.invalid_enum_value, options: n }),
        Y
      );
    }
    return jv(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
Ly.create = Iy;
var Ry = class extends Q {
  _parse(e) {
    let t = G.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== K.string && n.parsedType !== K.number) {
      let e = G.objectValues(t);
      return (
        J(n, {
          expected: G.joinValues(e),
          received: n.parsedType,
          code: q.invalid_type,
        }),
        Y
      );
    }
    if (
      ((this._cache ||= new Set(G.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      let e = G.objectValues(t);
      return (
        J(n, { received: n.data, code: q.invalid_enum_value, options: e }),
        Y
      );
    }
    return jv(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
Ry.create = (e, t) => new Ry({ values: e, typeName: $.ZodNativeEnum, ...Z(t) });
var zy = class extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== K.promise && t.common.async === !1
      ? (J(t, {
          code: q.invalid_type,
          expected: K.promise,
          received: t.parsedType,
        }),
        Y)
      : jv(
          (t.parsedType === K.promise ? t.data : Promise.resolve(t.data)).then(
            (e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              }),
          ),
        );
  }
};
zy.create = (e, t) => new zy({ type: e, typeName: $.ZodPromise, ...Z(t) });
var By = class extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (J(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return Y;
          let r = await this._def.schema._parseAsync({
            data: e,
            path: n.path,
            parent: n,
          });
          return r.status === `aborted`
            ? Y
            : r.status === `dirty` || t.value === `dirty`
              ? Av(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return Y;
        let r = this._def.schema._parseSync({
          data: e,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? Y
          : r.status === `dirty` || t.value === `dirty`
            ? Av(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return r.status === `aborted`
          ? Y
          : (r.status === `dirty` && t.dirty(),
            e(r.value),
            { status: t.value, value: r.value });
      }
      return this._def.schema
        ._parseAsync({ data: n.data, path: n.path, parent: n })
        .then((n) =>
          n.status === `aborted`
            ? Y
            : (n.status === `dirty` && t.dirty(),
              e(n.value).then(() => ({ status: t.value, value: n.value }))),
        );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!Pv(e)) return Y;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((e) =>
            Pv(e)
              ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                  status: t.value,
                  value: e,
                }))
              : Y,
          );
    G.assertNever(r);
  }
};
((By.create = (e, t, n) =>
  new By({ schema: e, typeName: $.ZodEffects, effect: t, ...Z(n) })),
  (By.createWithPreprocess = (e, t, n) =>
    new By({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: $.ZodEffects,
      ...Z(n),
    })));
var Vy = class extends Q {
  _parse(e) {
    return this._getType(e) === K.undefined
      ? jv(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Vy.create = (e, t) =>
  new Vy({ innerType: e, typeName: $.ZodOptional, ...Z(t) });
var Hy = class extends Q {
  _parse(e) {
    return this._getType(e) === K.null
      ? jv(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Hy.create = (e, t) =>
  new Hy({ innerType: e, typeName: $.ZodNullable, ...Z(t) });
var Uy = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === K.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Uy.create = (e, t) =>
  new Uy({
    innerType: e,
    typeName: $.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...Z(t),
  });
var Wy = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return Fv(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new wv(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new wv(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Wy.create = (e, t) =>
  new Wy({
    innerType: e,
    typeName: $.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...Z(t),
  });
var Gy = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.nan) {
      let t = this._getOrReturnCtx(e);
      return (
        J(t, { code: q.invalid_type, expected: K.nan, received: t.parsedType }),
        Y
      );
    }
    return { status: `valid`, value: e.data };
  }
};
Gy.create = (e) => new Gy({ typeName: $.ZodNaN, ...Z(e) });
var Ky = class extends Q {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  qy = class e extends Q {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          });
          return e.status === `aborted`
            ? Y
            : e.status === `dirty`
              ? (t.dirty(), Av(e.value))
              : this._def.out._parseAsync({
                  data: e.value,
                  path: n.path,
                  parent: n,
                });
        })();
      {
        let e = this._def.in._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return e.status === `aborted`
          ? Y
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({
                data: e.value,
                path: n.path,
                parent: n,
              });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: $.ZodPipeline });
    }
  },
  Jy = class extends Q {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (Pv(e) && (e.value = Object.freeze(e.value)), e);
      return Fv(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((Jy.create = (e, t) =>
  new Jy({ innerType: e, typeName: $.ZodReadonly, ...Z(t) })),
  Cy.lazycreate);
var $;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})(($ ||= {}));
var Yy = cy.create;
(uy.create,
  Gy.create,
  dy.create,
  fy.create,
  py.create,
  my.create,
  hy.create,
  gy.create,
  _y.create,
  vy.create,
  yy.create,
  by.create,
  xy.create);
var Xy = Cy.create;
(Cy.strictCreate,
  wy.create,
  Ey.create,
  Oy.create,
  ky.create,
  Ay.create,
  jy.create,
  My.create,
  Ny.create,
  Py.create,
  Fy.create,
  Ly.create,
  Ry.create,
  zy.create,
  By.create,
  Vy.create,
  Hy.create,
  By.createWithPreprocess,
  qy.create);
var Zy = Xy({
  name: Yy().trim().min(2, `Enter your name`).max(100),
  email: Yy().trim().email(`Enter a valid email`).max(255),
  message: Yy().trim().min(10, `Message is too short`).max(1e3),
});
async function Qy(e) {
  await new Promise((e) => setTimeout(e, 800));
}
function $y() {
  let [e, t] = (0, r.useState)({ name: ``, email: ``, message: `` }),
    [n, i] = (0, r.useState)({}),
    [a, o] = (0, r.useState)(`idle`),
    s = async (n) => {
      n.preventDefault();
      let r = Zy.safeParse(e);
      if (!r.success) {
        let e = {};
        (r.error.issues.forEach((t) => (e[String(t.path[0])] ??= t.message)),
          i(e));
        return;
      }
      (i({}), o(`loading`));
      try {
        (await Qy(r.data), o(`sent`), t({ name: ``, email: ``, message: `` }));
      } catch {
        o(`error`);
      }
    },
    c = [
      {
        k: `instagram`,
        label: `Instagram`,
        href: Di.socials.instagram,
        v: `[INSTAGRAM URL]`,
      },
      {
        k: `linkedin`,
        label: `LinkedIn`,
        href: Di.socials.linkedin,
        v: `[LINKEDIN URL]`,
      },
      {
        k: `github`,
        label: `GitHub`,
        href: Di.socials.github,
        v: `[GITHUB URL]`,
      },
    ];
  return (0, U.jsx)(`section`, {
    id: `contact`,
    className: `border-t border-border bg-surface py-28 lg:py-36`,
    children: (0, U.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsx)(Ag, {
          index: `09`,
          eyebrow: `Contact`,
          title: `Let's connect.`,
        }),
        (0, U.jsxs)(`div`, {
          className: `grid gap-12 lg:grid-cols-2`,
          children: [
            (0, U.jsx)(kg, {
              children: (0, U.jsxs)(`div`, {
                className: `space-y-px bg-border`,
                children: [
                  (0, U.jsxs)(`div`, {
                    className: `flex gap-4 bg-surface p-6`,
                    children: [
                      (0, U.jsx)(D_, {
                        className: `h-5 w-5 shrink-0 text-primary`,
                      }),
                      (0, U.jsx)(`div`, {
                        children: Di.address.map((e) =>
                          (0, U.jsx)(`div`, { children: e }, e),
                        ),
                      }),
                    ],
                  }),
                  (0, U.jsxs)(`a`, {
                    href: Di.socials.email,
                    className: `flex items-center gap-4 bg-surface p-6 transition-colors hover:bg-background`,
                    children: [
                      (0, U.jsx)(T_, { className: `h-5 w-5 text-primary` }),
                      (0, U.jsx)(`span`, {
                        className: `font-mono text-sm`,
                        children: Di.email,
                      }),
                    ],
                  }),
                  c.map((e) =>
                    (0, U.jsxs)(
                      `a`,
                      {
                        href: e.href,
                        className: `group flex items-center justify-between bg-surface p-6 transition-colors hover:bg-background`,
                        children: [
                          (0, U.jsxs)(`span`, {
                            className: `flex items-center gap-4`,
                            children: [
                              (0, U.jsx)(Pg, {
                                name: e.k,
                                className: `h-5 w-5 text-primary`,
                              }),
                              (0, U.jsx)(`span`, {
                                className: `font-display text-lg font-semibold uppercase`,
                                children: e.label,
                              }),
                            ],
                          }),
                          (0, U.jsx)(`span`, {
                            className: `font-mono text-xs text-muted-foreground group-hover:text-primary`,
                            children: e.v,
                          }),
                        ],
                      },
                      e.k,
                    ),
                  ),
                ],
              }),
            }),
            (0, U.jsx)(kg, {
              delay: 0.1,
              children: (0, U.jsxs)(`form`, {
                onSubmit: s,
                noValidate: !0,
                className: `space-y-5 border border-border bg-background p-6 sm:p-8`,
                children: [
                  [`name`, `email`].map((r) =>
                    (0, U.jsxs)(
                      `label`,
                      {
                        className: `block`,
                        children: [
                          (0, U.jsx)(`span`, {
                            className: `mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground`,
                            children: r,
                          }),
                          (0, U.jsx)(`input`, {
                            type: r === `email` ? `email` : `text`,
                            className: `field`,
                            value: e[r],
                            onChange: (n) => t({ ...e, [r]: n.target.value }),
                          }),
                          n[r] &&
                            (0, U.jsx)(`p`, {
                              className: `mt-1 text-xs text-destructive`,
                              children: n[r],
                            }),
                        ],
                      },
                      r,
                    ),
                  ),
                  (0, U.jsxs)(`label`, {
                    className: `block`,
                    children: [
                      (0, U.jsx)(`span`, {
                        className: `mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground`,
                        children: `Message`,
                      }),
                      (0, U.jsx)(`textarea`, {
                        rows: 5,
                        className: `field resize-none`,
                        value: e.message,
                        onChange: (n) => t({ ...e, message: n.target.value }),
                      }),
                      n.message &&
                        (0, U.jsx)(`p`, {
                          className: `mt-1 text-xs text-destructive`,
                          children: n.message,
                        }),
                    ],
                  }),
                  (0, U.jsx)(`button`, {
                    type: `submit`,
                    disabled: a === `loading`,
                    className: `btn-primary w-full disabled:opacity-60`,
                    children: a === `loading` ? `Sending…` : `Send Message`,
                  }),
                  a === `sent` &&
                    (0, U.jsx)(`p`, {
                      className: `text-sm text-success`,
                      children: `Message sent. We will get back to you soon.`,
                    }),
                  a === `error` &&
                    (0, U.jsx)(`p`, {
                      className: `text-sm text-destructive`,
                      children: `Couldn't send. Please try again.`,
                    }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function eb() {
  let e = ki.filter((e) => e.id !== `achievements`);
  return (0, U.jsx)(`footer`, {
    className: `relative overflow-hidden border-t border-border pt-16 pb-8 bg-surface`,
    children: (0, U.jsxs)(`div`, {
      className: `relative mx-auto max-w-7xl px-5 lg:px-8`,
      children: [
        (0, U.jsxs)(`div`, {
          className: `grid gap-10 md:grid-cols-[2fr_1fr_1fr]`,
          children: [
            (0, U.jsxs)(`div`, {
              children: [
                (0, U.jsx)(Mg, {}),
                (0, U.jsx)(`p`, {
                  className: `mt-4 font-display text-2xl font-semibold text-foreground`,
                  children: Di.tagline,
                }),
                (0, U.jsx)(`p`, {
                  className: `mt-3 max-w-sm text-xs text-muted-foreground leading-relaxed`,
                  children: `Student-led technology community at Bennett University, Greater Noida.`,
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              children: [
                (0, U.jsx)(`p`, {
                  className: `eyebrow mb-4`,
                  children: `Quick links`,
                }),
                (0, U.jsx)(`ul`, {
                  className: `space-y-2 text-xs font-mono`,
                  children: e.map((e) =>
                    (0, U.jsx)(
                      `li`,
                      {
                        children: (0, U.jsx)(`a`, {
                          href: `#${e.id}`,
                          className: `text-muted-foreground transition-colors hover:text-primary`,
                          children: e.label,
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              children: [
                (0, U.jsx)(`p`, {
                  className: `eyebrow mb-4`,
                  children: `Connect with us`,
                }),
                (0, U.jsx)(`div`, {
                  className: `flex gap-2`,
                  children: [`instagram`, `linkedin`, `github`].map((e) =>
                    (0, U.jsx)(
                      `a`,
                      {
                        href: Di.socials[e],
                        "aria-label": e,
                        className: `flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary rounded-sm`,
                        children: (0, U.jsx)(Pg, { name: e }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          className: `mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row`,
          children: [
            (0, U.jsx)(`span`, {
              children: `© 2026 AWS Bennett University. All rights reserved.`,
            }),
            (0, U.jsx)(`span`, {
              children: `Bennett University, Greater Noida, UP, India`,
            }),
          ],
        }),
      ],
    }),
  });
}
var tb = [
    `Computer Science & Engineering (CSE)`,
    `CSE - Artificial Intelligence`,
    `CSE - Data Science`,
    `Electronics & Communication (ECE)`,
    `Biotechnology`,
    `Mechanical Engineering`,
    `Civil Engineering`,
    `BCA / MCA`,
    `Other Branch`,
  ],
  nb = Xy({
    fullName: Yy()
      .trim()
      .min(1, `Full name is required`)
      .min(2, `Full name must be at least 2 characters`)
      .max(100, `Full name is too long`),
    email: Yy()
      .trim()
      .min(1, `University email is required`)
      .email(`Enter a valid email address`)
      .max(255)
      .refine(
        (e) => /@bennett\.edu\.in$/i.test(e),
        `Please enter your official Bennett University email (@bennett.edu.in)`,
      ),
    enrollment: Yy()
      .trim()
      .min(1, `Enrollment number is required`)
      .min(4, `Enter a valid enrollment number`)
      .max(30),
    year: Yy().min(1, `Please select your year of study`),
    branch: Yy().min(1, `Please select your branch`),
    phone: Yy()
      .trim()
      .min(1, `Phone number is required`)
      .regex(/^[+]?[0-9\s-]{10,15}$/, `Enter a valid 10-digit phone number`),
  }),
  rb = {
    fullName: ``,
    email: ``,
    enrollment: ``,
    year: ``,
    branch: ``,
    phone: ``,
  };
function ib() {
  try {
    let e = localStorage.getItem(`aws_bennett_registrations`);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
}
function ab(e) {
  try {
    let t = ib();
    return (
      !t.some(
        (t) =>
          t.email.toLowerCase() === e.email.toLowerCase() ||
          t.enrollment.toLowerCase() === e.enrollment.toLowerCase(),
      ) &&
      (t.push({
        email: e.email.toLowerCase(),
        enrollment: e.enrollment.toLowerCase(),
      }),
      localStorage.setItem(`aws_bennett_registrations`, JSON.stringify(t)),
      !0)
    );
  } catch {
    return !0;
  }
}
async function ob(e) {
  let t = {
    BASE_URL: `/`,
    DEV: !1,
    MODE: `production`,
    PROD: !0,
    SSR: !1,
    TSS_DEV_SERVER: `false`,
    TSS_DEV_SSR_STYLES_BASEPATH: `/`,
    TSS_DEV_SSR_STYLES_ENABLED: `true`,
    TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
    TSS_INLINE_CSS_ENABLED: `false`,
    TSS_ROUTER_BASEPATH: ``,
    TSS_SERVER_FN_BASE: `/_serverFn/`,
  }.VITE_REGISTRATION_API_URL;
  if (t)
    try {
      let n = await fetch(t, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(e),
      });
      return n.ok
        ? { success: !0 }
        : {
            success: !1,
            message:
              (await n.json().catch(() => ({}))).message ||
              `Failed to submit registration to server.`,
          };
    } catch {
      return {
        success: !1,
        message: `Network error connecting to registration backend.`,
      };
    }
  return (
    await new Promise((e) => setTimeout(e, 700)),
    ab(e)
      ? { success: !0 }
      : {
          success: !1,
          duplicate: !0,
          message: `This email or enrollment number is already registered.`,
        }
  );
}
function sb({ open: e, onClose: t }) {
  let [n, i] = (0, r.useState)(rb),
    [a, o] = (0, r.useState)({}),
    [s, c] = (0, r.useState)({}),
    [l, u] = (0, r.useState)(`idle`),
    [d, f] = (0, r.useState)(``);
  (0, r.useEffect)(() => {
    if (!e) return;
    document.body.style.overflow = `hidden`;
    let n = (e) => e.key === `Escape` && t();
    return (
      window.addEventListener(`keydown`, n),
      () => {
        ((document.body.style.overflow = ``),
          window.removeEventListener(`keydown`, n));
      }
    );
  }, [e, t]);
  let p = (e, t) => {
      (i((n) => ({ ...n, [e]: t })),
        c((t) => ({ ...t, [e]: !0 })),
        a[e] &&
          o((t) => {
            let n = { ...t };
            return (delete n[e], n);
          }));
    },
    m = async (e) => {
      (e.preventDefault(), f(``));
      let t = nb.safeParse(n);
      if (!t.success) {
        let e = {},
          n = {};
        (t.error.issues.forEach((t) => {
          let r = t.path[0];
          ((e[r] ??= t.message), (n[r] = !0));
        }),
          o(e),
          c(n));
        return;
      }
      (o({}), u(`loading`));
      try {
        let e = await ob(t.data);
        e.success
          ? (u(`success`), i(rb), c({}))
          : (u(`error`),
            f(e.message || `An error occurred during submission.`));
      } catch {
        (u(`error`),
          f(
            `Something went wrong. Please check your connection and try again.`,
          ));
      }
    },
    h = () => {
      (t(),
        setTimeout(() => {
          (u(`idle`), o({}), c({}), f(``));
        }, 300));
    },
    g = ({ k: e }) =>
      a[e] && s[e]
        ? (0, U.jsxs)(`p`, {
            className: `mt-1 flex items-center gap-1 text-xs text-destructive`,
            children: [
              (0, U.jsx)(l_, { className: `h-3 w-3 shrink-0` }),
              (0, U.jsx)(`span`, { children: a[e] }),
            ],
          })
        : null,
    _ = ({ children: e }) =>
      (0, U.jsxs)(`span`, {
        className: `mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground`,
        children: [
          e,
          ` `,
          (0, U.jsx)(`span`, { className: `text-primary`, children: `*` }),
        ],
      });
  return (0, U.jsx)(um, {
    children:
      e &&
      (0, U.jsx)(ng.div, {
        className: `fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm`,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: h,
        children: (0, U.jsxs)(ng.div, {
          role: `dialog`,
          "aria-modal": `true`,
          "aria-labelledby": `registration-title`,
          onClick: (e) => e.stopPropagation(),
          initial: { y: 30, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: 30, opacity: 0 },
          transition: { ease: [0.22, 1, 0.36, 1], duration: 0.35 },
          className: `relative max-h-[92vh] w-full max-w-xl overflow-y-auto border border-border-strong bg-popover shadow-2xl rounded-sm`,
          children: [
            (0, U.jsx)(`div`, {
              className: `absolute inset-x-0 top-0 h-1 bg-primary`,
            }),
            (0, U.jsx)(`button`, {
              onClick: h,
              "aria-label": `Close registration modal`,
              className: `absolute right-4 top-4 z-10 p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded`,
              children: (0, U.jsx)(q_, { className: `h-5 w-5` }),
            }),
            l === `success`
              ? (0, U.jsx)(`div`, {
                  className: `p-8 text-center sm:p-12`,
                  children: (0, U.jsxs)(ng.div, {
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.4 },
                    children: [
                      (0, U.jsx)(d_, {
                        className: `mx-auto h-14 w-14 text-success`,
                        strokeWidth: 1.5,
                      }),
                      (0, U.jsx)(`h2`, {
                        className: `mt-5 text-2xl sm:text-3xl font-bold uppercase text-foreground`,
                        children: `REGISTRATION SUCCESSFUL`,
                      }),
                      (0, U.jsx)(`p`, {
                        className: `mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed`,
                        children: `Thank you for registering. We'll reach out to your university email with event schedules and updates.`,
                      }),
                      (0, U.jsx)(`button`, {
                        onClick: h,
                        className: `btn-primary mt-8 min-w-[130px]`,
                        children: `Done`,
                      }),
                    ],
                  }),
                })
              : (0, U.jsxs)(`form`, {
                  onSubmit: m,
                  noValidate: !0,
                  className: `p-6 sm:p-10`,
                  children: [
                    (0, U.jsx)(`p`, {
                      className: `eyebrow mb-1`,
                      children: `Student Community`,
                    }),
                    (0, U.jsx)(`h2`, {
                      id: `registration-title`,
                      className: `mb-2 text-2xl font-bold uppercase sm:text-3xl text-foreground`,
                      children: `REGISTRATION`,
                    }),
                    (0, U.jsx)(`p`, {
                      className: `mb-6 text-xs text-muted-foreground font-mono`,
                      children: `Please fill out your university details below.`,
                    }),
                    (0, U.jsxs)(`div`, {
                      className: `grid gap-5 sm:grid-cols-2`,
                      children: [
                        (0, U.jsxs)(`label`, {
                          className: `sm:col-span-2`,
                          children: [
                            (0, U.jsx)(_, { children: `Full name` }),
                            (0, U.jsx)(`input`, {
                              className: `field`,
                              placeholder: `e.g. Rahul Sharma`,
                              disabled: l === `loading`,
                              value: n.fullName,
                              onChange: (e) => p(`fullName`, e.target.value),
                            }),
                            (0, U.jsx)(g, { k: `fullName` }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `sm:col-span-2`,
                          children: [
                            (0, U.jsx)(_, { children: `University email` }),
                            (0, U.jsx)(`input`, {
                              type: `email`,
                              className: `field`,
                              placeholder: `name@bennett.edu.in`,
                              disabled: l === `loading`,
                              value: n.email,
                              onChange: (e) => p(`email`, e.target.value),
                            }),
                            (0, U.jsx)(g, { k: `email` }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          children: [
                            (0, U.jsx)(_, { children: `Enrollment number` }),
                            (0, U.jsx)(`input`, {
                              className: `field`,
                              placeholder: `e.g. E22CSE001`,
                              disabled: l === `loading`,
                              value: n.enrollment,
                              onChange: (e) => p(`enrollment`, e.target.value),
                            }),
                            (0, U.jsx)(g, { k: `enrollment` }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          children: [
                            (0, U.jsx)(_, { children: `Year of study` }),
                            (0, U.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, U.jsxs)(`select`, {
                                  className: `field appearance-none pr-8 cursor-pointer`,
                                  disabled: l === `loading`,
                                  value: n.year,
                                  onChange: (e) => p(`year`, e.target.value),
                                  children: [
                                    (0, U.jsx)(`option`, {
                                      value: ``,
                                      children: `Select year…`,
                                    }),
                                    [
                                      `1st Year`,
                                      `2nd Year`,
                                      `3rd Year`,
                                      `4th Year`,
                                      `5th Year`,
                                    ].map((e) =>
                                      (0, U.jsx)(
                                        `option`,
                                        { value: e, children: e },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                                (0, U.jsx)(s_, {
                                  className: `absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none`,
                                }),
                              ],
                            }),
                            (0, U.jsx)(g, { k: `year` }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `sm:col-span-2`,
                          children: [
                            (0, U.jsx)(_, { children: `Branch` }),
                            (0, U.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, U.jsxs)(`select`, {
                                  className: `field appearance-none pr-8 cursor-pointer`,
                                  disabled: l === `loading`,
                                  value: n.branch,
                                  onChange: (e) => p(`branch`, e.target.value),
                                  children: [
                                    (0, U.jsx)(`option`, {
                                      value: ``,
                                      children: `Select your branch…`,
                                    }),
                                    tb.map((e) =>
                                      (0, U.jsx)(
                                        `option`,
                                        { value: e, children: e },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                                (0, U.jsx)(s_, {
                                  className: `absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none`,
                                }),
                              ],
                            }),
                            (0, U.jsx)(g, { k: `branch` }),
                          ],
                        }),
                        (0, U.jsxs)(`label`, {
                          className: `sm:col-span-2`,
                          children: [
                            (0, U.jsx)(_, { children: `Phone number` }),
                            (0, U.jsx)(`input`, {
                              type: `tel`,
                              className: `field`,
                              placeholder: `e.g. 9876543210`,
                              disabled: l === `loading`,
                              value: n.phone,
                              onChange: (e) => p(`phone`, e.target.value),
                            }),
                            (0, U.jsx)(g, { k: `phone` }),
                          ],
                        }),
                      ],
                    }),
                    l === `error` &&
                      (0, U.jsxs)(`div`, {
                        className: `mt-6 flex items-start gap-3 border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive rounded-sm`,
                        children: [
                          (0, U.jsx)(l_, {
                            className: `h-5 w-5 shrink-0 mt-0.5`,
                          }),
                          (0, U.jsxs)(`div`, {
                            children: [
                              (0, U.jsx)(`p`, {
                                className: `font-semibold`,
                                children: `Submission failed`,
                              }),
                              (0, U.jsx)(`p`, {
                                className: `mt-0.5 text-xs opacity-90`,
                                children: d,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, U.jsx)(`button`, {
                      type: `submit`,
                      disabled: l === `loading`,
                      className: `btn-primary mt-8 w-full disabled:opacity-60 disabled:cursor-not-allowed`,
                      children:
                        l === `loading`
                          ? (0, U.jsxs)(U.Fragment, {
                              children: [
                                (0, U.jsx)(C_, {
                                  className: `h-4 w-4 animate-spin mr-2`,
                                }),
                                `Submitting Registration…`,
                              ],
                            })
                          : `SUBMIT REGISTRATION`,
                    }),
                  ],
                }),
          ],
        }),
      }),
  });
}
function cb() {
  let [e, t] = (0, r.useState)(!0),
    [n, i] = (0, r.useState)(!1),
    a = (0, r.useRef)(null),
    o = (0, r.useRef)(null),
    s = (0, r.useRef)(null);
  return (
    (0, r.useEffect)(() => {
      i(!0);
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        n = () => {
          if (e) {
            t(!1);
            return;
          }
          let n = Ei.context(() => {
            let e = Ei.timeline({ onComplete: () => t(!1) });
            e.to(s.current, {
              opacity: 0,
              y: -20,
              duration: 0.35,
              ease: `power2.inOut`,
            });
            let n = o.current?.children;
            n &&
              n.length > 0 &&
              e.to(
                n,
                {
                  yPercent: -100,
                  duration: 0.65,
                  stagger: 0.07,
                  ease: `power3.inOut`,
                },
                `-=0.1`,
              );
          }, a);
          return () => n.revert();
        },
        r;
      if (document.readyState === `complete`) r = setTimeout(n, 500);
      else {
        let e = () => {
          r = setTimeout(n, 400);
        };
        window.addEventListener(`load`, e);
        let t = setTimeout(n, 1e3);
        return () => {
          (window.removeEventListener(`load`, e),
            clearTimeout(r),
            clearTimeout(t));
        };
      }
      return () => clearTimeout(r);
    }, []),
    !n || !e
      ? null
      : (0, U.jsxs)(`div`, {
          ref: a,
          className: `fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-auto overflow-hidden`,
          children: [
            (0, U.jsxs)(`div`, {
              ref: s,
              className: `relative z-10 flex flex-col items-center text-center px-4`,
              children: [
                (0, U.jsx)(`div`, {
                  className: `relative mb-5 flex items-center justify-center`,
                  children: (0, U.jsx)(`img`, {
                    src: `/aws-bennett-logo.jpg`,
                    alt: `AWS Bennett University Logo`,
                    className: `h-16 sm:h-20 w-auto object-contain shadow-glow rounded-md`,
                  }),
                }),
                (0, U.jsx)(`h2`, {
                  className: `font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-foreground`,
                  children: `AWS BENNETT`,
                }),
                (0, U.jsx)(`p`, {
                  className: `mt-2 font-mono text-xs uppercase tracking-[0.22em] text-primary`,
                  children: `BUILD · DEPLOY · SCALE`,
                }),
                (0, U.jsx)(`div`, {
                  className: `mt-8 h-1 w-44 overflow-hidden rounded-full bg-surface-2 border border-border`,
                  children: (0, U.jsx)(`div`, {
                    className: `h-full w-full bg-primary animate-pulse`,
                  }),
                }),
              ],
            }),
            (0, U.jsx)(`div`, {
              ref: o,
              className: `absolute inset-0 pointer-events-none flex z-20`,
              children: Array.from({ length: 5 }).map((e, t) =>
                (0, U.jsx)(
                  `div`,
                  {
                    className: `h-full flex-1 bg-surface-2 border-r border-border/20 last:border-r-0`,
                  },
                  t,
                ),
              ),
            }),
          ],
        })
  );
}
function lb() {
  let [e, t] = (0, r.useState)(!1);
  return (0, U.jsxs)(`main`, {
    className: `relative min-h-screen`,
    children: [
      (0, U.jsx)(cb, {}),
      (0, U.jsx)(Y_, { onJoin: () => t(!0) }),
      (0, U.jsx)($_, {}),
      (0, U.jsx)(tv, {}),
      (0, U.jsx)(rv, {}),
      (0, U.jsx)(sv, {}),
      (0, U.jsx)(uv, {}),
      (0, U.jsx)(hv, {}),
      (0, U.jsx)(gv, {}),
      (0, U.jsx)(yv, {}),
      (0, U.jsx)(xv, {}),
      (0, U.jsx)($y, {}),
      (0, U.jsx)(eb, {}),
      (0, U.jsx)(sb, { open: e, onClose: () => t(!1) }),
    ],
  });
}
export { lb as component };

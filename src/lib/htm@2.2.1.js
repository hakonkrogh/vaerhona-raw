var n = function(t, r, u, e) {
    for (var p = 1; p < r.length; p++) {
      var s = r[p],
        h = 'number' == typeof s ? u[s] : s,
        a = r[++p];
      1 === a
        ? (e[0] = h)
        : 3 === a
        ? (e[1] = Object.assign(e[1] || {}, h))
        : 5 === a
        ? ((e[1] = e[1] || {})[r[++p]] = h)
        : 6 === a
        ? (e[1][r[++p]] += h + '')
        : e.push(a ? t.apply(null, n(t, h, u, ['', null])) : h);
    }
    return e;
  },
  t = function(n) {
    for (
      var t,
        r,
        u = 1,
        e = '',
        p = '',
        s = [0],
        h = function(n) {
          1 === u && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
            ? s.push(n || e, 0)
            : 3 === u && (n || e)
            ? (s.push(n || e, 1), (u = 2))
            : 2 === u && '...' === e && n
            ? s.push(n, 3)
            : 2 === u && e && !n
            ? s.push(!0, 5, e)
            : u >= 5 &&
              ((e || (!n && 5 === u)) && (s.push(e, u, r), (u = 6)),
              n && (s.push(n, u, r), (u = 6))),
            (e = '');
        },
        a = 0;
      a < n.length;
      a++
    ) {
      a && (1 === u && h(), h(a));
      for (var f = 0; f < n[a].length; f++)
        (t = n[a][f]),
          1 === u
            ? '<' === t
              ? (h(), (s = [s]), (u = 3))
              : (e += t)
            : 4 === u
            ? '--' === e && '>' === t
              ? ((u = 1), (e = ''))
              : (e = t + e[0])
            : p
            ? t === p
              ? (p = '')
              : (e += t)
            : '"' === t || "'" === t
            ? (p = t)
            : '>' === t
            ? (h(), (u = 1))
            : u &&
              ('=' === t
                ? ((u = 5), (r = e), (e = ''))
                : '/' === t && (u < 5 || '>' === n[a][f + 1])
                ? (h(), 3 === u && (s = s[0]), (u = s), (s = s[0]).push(u, 2), (u = 0))
                : ' ' === t || '\t' === t || '\n' === t || '\r' === t
                ? (h(), (u = 2))
                : (e += t)),
          3 === u && '!--' === e && ((u = 4), (s = s[0]));
    }
    return h(), s;
  },
  r = 'function' == typeof Map,
  u = r ? new Map() : {},
  e = r
    ? function(n) {
        var r = u.get(n);
        return r || u.set(n, (r = t(n))), r;
      }
    : function(n) {
        for (var r = '', e = 0; e < n.length; e++) r += n[e].length + '-' + n[e];
        return u[r] || (u[r] = t(n));
      };
export default function(t) {
  var r = n(this, e(t), arguments, []);
  return r.length > 1 ? r : r[0];
}

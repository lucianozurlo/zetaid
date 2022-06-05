"use strict";
function checkEnvironment() {
    checkDropletsComponents();
}
function checkDropletsComponents() {
    var e = document.getElementById("zoom"),
        t = e.getBoundingClientRect();
    e.setAttribute("data-x", t.x), e.setAttribute("data-y", t.y);
    var n = "#zoom .zoom-",
        r = document.querySelectorAll(n),
        u = document.querySelectorAll(n + "img-zoom");
    r.length,
        u.length && enableImgZoom(u);
}

function enableImgZoom(e) {
    Array.prototype.forEach.call(e, function (e) {
        var t = e.querySelector("img"),
            n = document.createElement("div");
        n.classList.add("magnify"),
            (n.style.backgroundImage = 'url(../../projects/qlic/qlic-04-zoom.jpg)'),
            e.appendChild(n),
            e.addEventListener("mousemove", function (e) {
                var r = new Image();
                (r.src = t.src), t.setAttribute("data-width", r.width), t.setAttribute("data-height", r.height);
                var i = t.getAttribute("data-width"),
                    o = t.getAttribute("data-height"),
                    a = document.getElementById("zoom"),
                    s = Number(a.getAttribute("data-x")),
                    l = Number(a.getAttribute("data-y")),
                    c = e.pageX - s - this.offsetLeft,
                    u = e.pageY - l - this.offsetTop;
                if (c < this.offsetWidth && u < this.offsetHeight && c > 0 && u > 0) {
                    n.classList.add("show");
                    var d = -1 * Math.round((c / t.offsetWidth) * i - n.offsetWidth / 2),
                        f = -1 * Math.round((u / t.offsetHeight) * o - n.offsetHeight / 2);
                    (n.style.left = c - n.offsetWidth / 2 + "px"), (n.style.top = u - n.offsetHeight / 2 + "px"), (n.style.backgroundPosition = d + "px " + f + "px");
                } else n.classList.remove("show");
            });
    });
}

function isImgFigCombo(e) {
    var t = 0,
        n = 0;
    return (
        Array.prototype.forEach.call(e, function (e) {
            "IMG" === e.nodeName ? t++ : "FIGURE" === e.nodeName && n++;
        }),
        t >= 1 && n >= 1 && t > n
    );
}
function selectImage(e, t) {
    t.innerHTML = "";
    var n = document.createElement("img"),
        r = document.createElement("p");
    if ("IMG" === e.nodeName) (n.src = e.src), r.classList.add("caption"), (r.innerHTML = e.getAttribute("alt"));
    else if ("FIGURE" === e.nodeName) {
        var i = e.querySelector("img"),
            o = e.querySelector("figcaption");
        (n.src = i.src), r.classList.add("caption"), (r.innerHTML = o ? o.innerHTML : i.getAttribute("alt"));
    }
    t.appendChild(n), t.appendChild(r);
}

function onCanvasContentPage(e) {
    return !!location.pathname.match(e);
}
function loadCodeHighlight() {
    var e = document.querySelectorAll("pre");
    Array.prototype.forEach.call(e, function (t, n) {
        hljs.highlightBlock(e[n]);
    });
}
function isVisible(e) {
    return "block" === e.style.display;
}
function mobileNav() {
    var e = document.getElementById("mobile-nav"),
        t = document.getElementById("mobile-jump");
    t
}
function init() {
    loadCodeHighlight(), mobileNav();
}
!(function (e, t, n) {
    function r(e, t) {
        return typeof e === t;
    }
    function i() {
        var e, t, n, i, o, a, s;
        for (var l in L)
            if (L.hasOwnProperty(l)) {
                if (((e = []), (t = L[l]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
                    (a = e[o]), (s = a.split(".")), 1 === s.length ? (A[s[0]] = i) : (!A[s[0]] || A[s[0]] instanceof Boolean || (A[s[0]] = new Boolean(A[s[0]])), (A[s[0]][s[1]] = i)), y.push((i ? "" : "no-") + s.join("-"));
            }
    }
    function o(e) {
        var t = x.className,
            n = A._config.classPrefix || "";
        if ((w && (t = t.baseVal), A._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        A._config.enableClasses && ((t += " " + n + e.join(" " + n)), w ? (x.className.baseVal = t) : (x.className = t));
    }
    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function s(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    function l(e, t, n) {
        var i;
        for (var o in e) if (e[o] in t) return !1 === n ? e[o] : ((i = t[e[o]]), r(i, "function") ? s(i, n || t) : i);
        return !1;
    }
    function c(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function u(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function d(e) {
        return e
            .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function f(t, n, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else if (o) {
                var a = o.error ? "error" : "log";
                o[a].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else i = !n && t.currentStyle && t.currentStyle[r];
        return i;
    }
    function p() {
        var e = t.body;
        return e || ((e = a(w ? "svg" : "body")), (e.fake = !0)), e;
    }
    function h(e, n, r, i) {
        var o,
            s,
            l,
            c,
            u = "modernizr",
            d = a("div"),
            f = p();
        if (parseInt(r, 10)) for (; r--;) (l = a("div")), (l.id = i ? i[r] : u + (r + 1)), d.appendChild(l);
        return (
            (o = a("style")),
            (o.type = "text/css"),
            (o.id = "s" + u),
            (f.fake ? f : d).appendChild(o),
            f.appendChild(d),
            o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(t.createTextNode(e)),
            (d.id = u),
            f.fake && ((f.style.background = ""), (f.style.overflow = "hidden"), (c = x.style.overflow), (x.style.overflow = "hidden"), x.appendChild(f)),
            (s = n(d, e)),
            f.fake ? (f.parentNode.removeChild(f), (x.style.overflow = c), x.offsetHeight) : d.parentNode.removeChild(d),
            !!s
        );
    }
    function m(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;) if (e.CSS.supports(d(t[i]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + d(t[i]) + ":" + r + ")");
            return (
                (o = o.join(" or ")),
                h("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == f(e, null, "position");
                })
            );
        }
        return n;
    }
    function v(e, t, i, o) {
        function s() {
            d && (delete R.style, delete R.modElem);
        }
        if (((o = !r(o, "undefined") && o), !r(i, "undefined"))) {
            var l = m(e, i);
            if (!r(l, "undefined")) return l;
        }
        for (var d, f, p, h, v, g = ["modernizr", "tspan", "samp"]; !R.style && g.length;) (d = !0), (R.modElem = a(g.shift())), (R.style = R.modElem.style);
        for (p = e.length, f = 0; p > f; f++)
            if (((h = e[f]), (v = R.style[h]), c(h, "-") && (h = u(h)), R.style[h] !== n)) {
                if (o || r(i, "undefined")) return s(), "pfx" != t || h;
                try {
                    R.style[h] = i;
                } catch (e) { }
                if (R.style[h] != v) return s(), "pfx" != t || h;
            }
        return s(), !1;
    }
    function g(e, t, n, i, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + S.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? v(s, t, i, o) : ((s = (e + " " + k.join(a + " ") + a).split(" ")), l(s, t, n));
    }
    function b(e, t, r) {
        return g(e, n, n, t, r);
    }
    var y = [],
        L = [],
        E = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e]);
                }, 0);
            },
            addTest: function (e, t, n) {
                L.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
                L.push({ name: null, fn: e });
            },
        },
        A = function () { };
    (A.prototype = E), (A = new A());
    var x = t.documentElement,
        w = "svg" === x.nodeName.toLowerCase(),
        C = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    (E._prefixes = C),
        A.addTest("csspositionsticky", function () {
            var e = "position:",
                t = "sticky",
                n = a("a"),
                r = n.style;
            return (r.cssText = e + C.join(t + ";" + e).slice(0, -e.length)), -1 !== r.position.indexOf(t);
        });
    var N = "Moz O ms Webkit",
        k = E._config.usePrefixes ? N.toLowerCase().split(" ") : [];
    E._domPrefixes = k;
    var S = E._config.usePrefixes ? N.split(" ") : [];
    E._cssomPrefixes = S;
    var I = { elem: a("modernizr") };
    A._q.push(function () {
        delete I.elem;
    });
    var R = { style: I.elem.style };
    A._q.unshift(function () {
        delete R.style;
    }),
        (E.testAllProps = g),
        (E.testAllProps = b),
        A.addTest("cssgridlegacy", b("grid-columns", "10px", !0)),
        A.addTest("cssgrid", b("grid-template-rows", "none", !0)),
        i(),
        o(y),
        delete E.addTest,
        delete E.addAsyncTest;
    for (var T = 0; T < A._q.length; T++) A._q[T]();
    e.Modernizr = A;
})(window, document),
    (function (e) {
        var t = ("object" == typeof window && window) || ("object" == typeof self && self);
        "undefined" != typeof exports
            ? e(exports)
            : t &&
            ((t.hljs = e({})),
                "function" == typeof define &&
                define.amd &&
                define([], function () {
                    return t.hljs;
                }));
    })(function (e) {
        function t(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function n(e) {
            return e.nodeName.toLowerCase();
        }
        function r(e, t) {
            var n = e && e.exec(t);
            return n && 0 === n.index;
        }
        function i(e) {
            return N.test(e);
        }
        function o(e) {
            var t,
                n,
                r,
                o,
                a = e.className + " ";
            if (((a += e.parentNode ? e.parentNode.className : ""), (n = k.exec(a)))) return E(n[1]) ? n[1] : "no-highlight";
            for (a = a.split(/\s+/), t = 0, r = a.length; r > t; t++) if (((o = a[t]), i(o) || E(o))) return o;
        }
        function a(e) {
            var t,
                n = {},
                r = Array.prototype.slice.call(arguments, 1);
            for (t in e) n[t] = e[t];
            return (
                r.forEach(function (e) {
                    for (t in e) n[t] = e[t];
                }),
                n
            );
        }
        function s(e) {
            var t = [];
            return (
                (function e(r, i) {
                    for (var o = r.firstChild; o; o = o.nextSibling)
                        3 === o.nodeType ? (i += o.nodeValue.length) : 1 === o.nodeType && (t.push({ event: "start", offset: i, node: o }), (i = e(o, i)), n(o).match(/br|hr|img|input/) || t.push({ event: "stop", offset: i, node: o }));
                    return i;
                })(e, 0),
                t
            );
        }
        function l(e, r, i) {
            function o() {
                return e.length && r.length ? (e[0].offset !== r[0].offset ? (e[0].offset < r[0].offset ? e : r) : "start" === r[0].event ? e : r) : e.length ? e : r;
            }
            function a(e) {
                function r(e) {
                    return " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"';
                }
                u += "<" + n(e) + A.map.call(e.attributes, r).join("") + ">";
            }
            function s(e) {
                u += "</" + n(e) + ">";
            }
            function l(e) {
                ("start" === e.event ? a : s)(e.node);
            }
            for (var c = 0, u = "", d = []; e.length || r.length;) {
                var f = o();
                if (((u += t(i.substring(c, f[0].offset))), (c = f[0].offset), f === e)) {
                    d.reverse().forEach(s);
                    do {
                        l(f.splice(0, 1)[0]), (f = o());
                    } while (f === e && f.length && f[0].offset === c);
                    d.reverse().forEach(a);
                } else "start" === f[0].event ? d.push(f[0].node) : d.pop(), l(f.splice(0, 1)[0]);
            }
            return u + t(i.substr(c));
        }
        function c(e) {
            return (
                e.v &&
                !e.cached_variants &&
                (e.cached_variants = e.v.map(function (t) {
                    return a(e, { v: null }, t);
                })),
                e.cached_variants || (e.eW && [a(e)]) || [e]
            );
        }
        function u(e) {
            function t(e) {
                return (e && e.source) || e;
            }
            function n(n, r) {
                return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
            }
            function r(i, o) {
                if (!i.compiled) {
                    if (((i.compiled = !0), (i.k = i.k || i.bK), i.k)) {
                        var a = {},
                            s = function (t, n) {
                                e.cI && (n = n.toLowerCase()),
                                    n.split(" ").forEach(function (e) {
                                        var n = e.split("|");
                                        a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                                    });
                            };
                        "string" == typeof i.k
                            ? s("keyword", i.k)
                            : x(i.k).forEach(function (e) {
                                s(e, i.k[e]);
                            }),
                            (i.k = a);
                    }
                    (i.lR = n(i.l || /\w+/, !0)),
                        o &&
                        (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"),
                            i.b || (i.b = /\B|\b/),
                            (i.bR = n(i.b)),
                            i.e || i.eW || (i.e = /\B|\b/),
                            i.e && (i.eR = n(i.e)),
                            (i.tE = t(i.e) || ""),
                            i.eW && o.tE && (i.tE += (i.e ? "|" : "") + o.tE)),
                        i.i && (i.iR = n(i.i)),
                        null == i.r && (i.r = 1),
                        i.c || (i.c = []),
                        (i.c = Array.prototype.concat.apply(
                            [],
                            i.c.map(function (e) {
                                return c("self" === e ? i : e);
                            })
                        )),
                        i.c.forEach(function (e) {
                            r(e, i);
                        }),
                        i.starts && r(i.starts, o);
                    var l = i.c
                        .map(function (e) {
                            return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
                        })
                        .concat([i.tE, i.i])
                        .map(t)
                        .filter(Boolean);
                    i.t = l.length
                        ? n(l.join("|"), !0)
                        : {
                            exec: function () {
                                return null;
                            },
                        };
                }
            }
            r(e);
        }
        function d(e, n, i, o) {
            function a(e, t) {
                var n, i;
                for (n = 0, i = t.c.length; i > n; n++) if (r(t.c[n].bR, e)) return t.c[n];
            }
            function s(e, t) {
                if (r(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e;
                }
                return e.eW ? s(e.parent, t) : void 0;
            }
            function l(e, t) {
                return !i && r(t.iR, e);
            }
            function c(e, t) {
                var n = y.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(n) && e.k[n];
            }
            function p(e, t, n, r) {
                var i = r ? "" : R.classPrefix,
                    o = '<span class="' + i,
                    a = n ? "" : I;
                return (o += e + '">') + t + a;
            }
            function h() {
                var e, n, r, i;
                if (!A.k) return t(N);
                for (i = "", n = 0, A.lR.lastIndex = 0, r = A.lR.exec(N); r;) (i += t(N.substring(n, r.index))), (e = c(A, r)), e ? ((k += e[1]), (i += p(e[0], t(r[0])))) : (i += t(r[0])), (n = A.lR.lastIndex), (r = A.lR.exec(N));
                return i + t(N.substr(n));
            }
            function m() {
                var e = "string" == typeof A.sL;
                if (e && !w[A.sL]) return t(N);
                var n = e ? d(A.sL, N, !0, x[A.sL]) : f(N, A.sL.length ? A.sL : void 0);
                return A.r > 0 && (k += n.r), e && (x[A.sL] = n.top), p(n.language, n.value, !1, !0);
            }
            function v() {
                (C += null != A.sL ? m() : h()), (N = "");
            }
            function g(e) {
                (C += e.cN ? p(e.cN, "", !0) : ""), (A = Object.create(e, { parent: { value: A } }));
            }
            function b(e, t) {
                if (((N += e), null == t)) return v(), 0;
                var n = a(t, A);
                if (n) return n.skip ? (N += t) : (n.eB && (N += t), v(), n.rB || n.eB || (N = t)), g(n, t), n.rB ? 0 : t.length;
                var r = s(A, t);
                if (r) {
                    var i = A;
                    i.skip ? (N += t) : (i.rE || i.eE || (N += t), v(), i.eE && (N = t));
                    do {
                        A.cN && (C += I), A.skip || (k += A.r), (A = A.parent);
                    } while (A !== r.parent);
                    return r.starts && g(r.starts, ""), i.rE ? 0 : t.length;
                }
                if (l(t, A)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (A.cN || "<unnamed>") + '"');
                return (N += t), t.length || 1;
            }
            var y = E(e);
            if (!y) throw new Error('Unknown language: "' + e + '"');
            u(y);
            var L,
                A = o || y,
                x = {},
                C = "";
            for (L = A; L !== y; L = L.parent) L.cN && (C = p(L.cN, "", !0) + C);
            var N = "",
                k = 0;
            try {
                for (var S, T, M = 0; (A.t.lastIndex = M), (S = A.t.exec(n));) (T = b(n.substring(M, S.index), S[0])), (M = S.index + T);
                for (b(n.substr(M)), L = A; L.parent; L = L.parent) L.cN && (C += I);
                return { r: k, value: C, language: e, top: A };
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal")) return { r: 0, value: t(n) };
                throw e;
            }
        }
        function f(e, n) {
            n = n || R.languages || x(w);
            var r = { r: 0, value: t(e) },
                i = r;
            return (
                n.filter(E).forEach(function (t) {
                    var n = d(t, e, !1);
                    (n.language = t), n.r > i.r && (i = n), n.r > r.r && ((i = r), (r = n));
                }),
                i.language && (r.second_best = i),
                r
            );
        }
        function p(e) {
            return R.tabReplace || R.useBR
                ? e.replace(S, function (e, t) {
                    return R.useBR && "\n" === e ? "<br>" : R.tabReplace ? t.replace(/\t/g, R.tabReplace) : "";
                })
                : e;
        }
        function h(e, t, n) {
            var r = t ? C[t] : n,
                i = [e.trim()];
            return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(r) && i.push(r), i.join(" ").trim();
        }
        function m(e) {
            var t,
                n,
                r,
                a,
                c,
                u = o(e);
            i(u) ||
                (R.useBR ? ((t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")), (t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n"))) : (t = e),
                    (c = t.textContent),
                    (r = u ? d(u, c, !0) : f(c)),
                    (n = s(t)),
                    n.length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")), (a.innerHTML = r.value), (r.value = l(n, s(a), c))),
                    (r.value = p(r.value)),
                    (e.innerHTML = r.value),
                    (e.className = h(e.className, u, r.language)),
                    (e.result = { language: r.language, re: r.r }),
                    r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r }));
        }
        function v(e) {
            R = a(R, e);
        }
        function g() {
            if (!g.called) {
                g.called = !0;
                var e = document.querySelectorAll("pre code");
                A.forEach.call(e, m);
            }
        }
        function b() {
            addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1);
        }
        function y(t, n) {
            var r = (w[t] = n(e));
            r.aliases &&
                r.aliases.forEach(function (e) {
                    C[e] = t;
                });
        }
        function L() {
            return x(w);
        }
        function E(e) {
            return (e = (e || "").toLowerCase()), w[e] || w[C[e]];
        }
        var A = [],
            x = Object.keys,
            w = {},
            C = {},
            N = /^(no-?highlight|plain|text)$/i,
            k = /\blang(?:uage)?-([\w-]+)\b/i,
            S = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            I = "</span>",
            R = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 };
        return (
            (e.highlight = d),
            (e.highlightAuto = f),
            (e.fixMarkup = p),
            (e.highlightBlock = m),
            (e.configure = v),
            (e.initHighlighting = g),
            (e.initHighlightingOnLoad = b),
            (e.registerLanguage = y),
            (e.listLanguages = L),
            (e.getLanguage = E),
            (e.inherit = a),
            (e.IR = "[a-zA-Z]\\w*"),
            (e.UIR = "[a-zA-Z_]\\w*"),
            (e.NR = "\\b\\d+(\\.\\d+)?"),
            (e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
            (e.BNR = "\\b(0b[01]+)"),
            (e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
            (e.BE = { b: "\\\\[\\s\\S]", r: 0 }),
            (e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }),
            (e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }),
            (e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }),
            (e.C = function (t, n, r) {
                var i = e.inherit({ cN: "comment", b: t, e: n, c: [] }, r || {});
                return i.c.push(e.PWM), i.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), i;
            }),
            (e.CLCM = e.C("//", "$")),
            (e.CBCM = e.C("/\\*", "\\*/")),
            (e.HCM = e.C("#", "$")),
            (e.NM = { cN: "number", b: e.NR, r: 0 }),
            (e.CNM = { cN: "number", b: e.CNR, r: 0 }),
            (e.BNM = { cN: "number", b: e.BNR, r: 0 }),
            (e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }),
            (e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }),
            (e.TM = { cN: "title", b: e.IR, r: 0 }),
            (e.UTM = { cN: "title", b: e.UIR, r: 0 }),
            (e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }),
            e
        );
    }),
    hljs.registerLanguage("xml", function (e) {
        var t = "[A-Za-z0-9\\._:-]+",
            n = {
                eW: !0,
                i: /</,
                r: 0,
                c: [
                    { cN: "attr", b: t, r: 0 },
                    { b: /=\s*/, r: 0, c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] },
                ],
            };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            cI: !0,
            c: [
                { cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] },
                e.C("<!--", "-->", { r: 10 }),
                { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
                { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }] },
                { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { name: "style" }, c: [n], starts: { e: "</style>", rE: !0, sL: ["css", "xml"] } },
                { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { name: "script" }, c: [n], starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] } },
                {
                    cN: "meta",
                    v: [
                        { b: /<\?xml/, e: /\?>/, r: 10 },
                        { b: /<\?\w+/, e: /\?>/ },
                    ],
                },
                { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, n] },
            ],
        };
    }),
    (function e(t) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : document.addEventListener("DOMContentLoaded", checkEnvironment);
    })(checkEnvironment),
    (function e(t) {
        (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t);
    })(init);

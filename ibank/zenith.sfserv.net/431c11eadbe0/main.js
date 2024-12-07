(function() {
    var J = window,
        be = document,
        Be, ie = [],
        de, ne = "0675093f-5fa8-7e1b-8000-b7132666e4bc",
        he = "sf431c11eadbe0",
        Ae = {
            id: "431c11eadbe0",
            key: "431c11eadbe0",
            allowedHosts: ["zenithbank.com"]
        },
        ae = function() {
            var i = "__st431c11eadbe0",
                d = {},
                c = J.sessionStorage ? J.sessionStorage : J.localStorage;

            function l(y, I) {
                return d[y] || I
            }

            function s(y, I) {
                d[y] = I, T()
            }

            function p(y) {
                d = y, T()
            }

            function e() {
                d = c.getItem(i), d ? d = JSON.parse(d) : d = {}
            }

            function T() {
                c.setItem(i, JSON.stringify(d))
            }

            function O(y, I) {
                var g = l(y);
                I || (I = 1), g || (g = 0), g += I, s(y, g)
            }
            return {
                getItem: l,
                setItem: s,
                load: e,
                save: T,
                inc: O,
                set: p
            }
        }(),
        _ = new function() {
            var i = window,
                d = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }];

            function c() {
                for (var n = !1, r = 0; r < d.length; r++) try {
                    return n = d[r](), n
                } catch (f) {
                    continue
                }
                return n
            }

            function l(n, r) {
                var f, m, E;
                for (f = 0, m = n.length; f < m; f++)
                    if (E = n[f], r(E)) return E
            }

            function s(n, r) {
                var f = [],
                    m, E;
                for (m = 0, E = n.length; m < E; m++) f.push(r(n[m]));
                return n
            }

            function p(n, r) {
                var f, m;
                for (f = 0, m = n.length; f < m; f++) r(n[f])
            }

            function e(n) {
                var r, f, m = [];
                for (r in n) m.push(n[r]);
                f = Math.max.apply(null, m);
                for (r in n)
                    if (n[r] === f) return r
            }

            function T(n, r) {
                var f, m, E, N = [];
                for (f = 0, m = n.length; f < m; f++) E = n[f], r(E) || N.push(E);
                return N
            }

            function O(n, r) {
                try {
                    var f = c();
                    f.open("POST", n, !0), f.setRequestHeader("Content-Type", "application/json"), f.send(JSON.stringify(r))
                } catch (m) {}
            }

            function y(n) {
                n || (n = 8);
                var r = [],
                    f = n;
                if (r.push(Math.random().toString(16).substring(2, 15)), n > 13)
                    for (; f > 0;) r.push(Math.random().toString(16).substring(2, 15)), f -= 13;
                return r = r.join(""), r.substring(0, n)
            }

            function I() {
                var n = i.location.host;
                return "." + n
            }

            function g(n, r, f) {
                n.addEventListener ? n.addEventListener(r, f, !1) : n.attachEvent("on" + r, function() {
                    return f.call(n, window.event)
                })
            }

            function h(n, r, f) {
                var m = c(),
                    E = JSON.stringify(r),
                    N = "sf" + Ae.key,
                    v = {},
                    B = "",
                    R = "GET";
                v.d = btoa(E), v.f = "b", v.v = "152", n += "?" + N + "=" + ne + "&ts=" + new Date().getTime(), B = M(v), B.length > 1024 ? R = "POST" : (n += "&" + B, B = null), m.withCredentials = !0, m.open(R, n, !0), R === "POST" && m.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), m.onreadystatechange = function() {
                    if (m.readyState == 3, m.readyState == 4) try {
                        var X = JSON.parse(m.response);
                        f(X)
                    } catch (ee) {}
                }, m.send(B)
            }

            function M(n) {
                var r = [];
                for (var f in n) r.push(f + "=" + encodeURIComponent(n[f]));
                return r.join("&")
            }

            function b() {
                for (var n = {}, r, f = /\+/g, m = /([^&=]+)=?([^&]*)/g, E = function(v) {
                        return decodeURIComponent(v.replace(f, " "))
                    }, N = i.location.search.substring(1); r = m.exec(N);) E(r[1]) in n ? (Array.isArray(n[E(r[1])]) || (n[E(r[1])] = [n[E(r[1])]]), n[E(r[1])].push(E(r[2]))) : n[E(r[1])] = E(r[2]);
                return n
            }

            function G(n) {
                for (var r = [], f = 0, m = n.length; f < m; f++) r.indexOf(n[f]) === -1 && n[f] !== "" && r.push(n[f]);
                return r
            }

            function P() {
                return new Date().getTime()
            }

            function U(n, r) {
                var f = {},
                    m;
                for (m in n) f[m] = n[m];
                for (m in r) f[m] = r[m];
                return f
            }

            function D(n) {
                return n && Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype
            }

            function w(n) {
                try {
                    var r = n.match(/^(([^/]*?:)\/*((?:([^:]+):([^@]+)@)?([^/:]{2,}|\[[\w:]+])(:\d*)?(?=\/|$))?)?((.*?\/)?(([^/]*?)(\.[^/.]+?)?))(\?.*?)?(#.*)?$/);
                    return r ? {
                        origin: r[1],
                        protocol: r[2],
                        host: r[3],
                        username: r[4],
                        password: r[5],
                        hostname: r[6],
                        port: r[7],
                        path: r[8],
                        folders: r[9],
                        file: r[10],
                        filename: r[11],
                        fileext: r[12],
                        search: r[13],
                        hash: r[14]
                    } : {}
                } catch (f) {
                    return {}
                }
            }

            function H(n) {
                var r = document;
                r.readyState !== "loading" ? n() : r.addEventListener ? r.addEventListener("DOMContentLoaded", n) : r.attachEvent("onreadystatechange", function() {
                    r.readyState === "complete" && n()
                })
            }

            function z(n, r) {
                return n.substring(0, r.length) === r
            }

            function x(n, r) {
                return n.indexOf(r, n.length - r.length) !== -1
            }

            function F(n) {
                var r = [];
                if (Array.isArray(n)) {
                    for (var f = 0, m = n.length; f < m; f++) r[f] = F(n[f]);
                    return r.join("|")
                } else {
                    if (n === !0) return 1;
                    if (n === !1) return 0
                }
                return n
            }
            return {
                fetch: h,
                encode: M,
                cast: F,
                endsWith: x,
                startsWith: z,
                randomString: y,
                onReady: H,
                parseURI: w,
                isEmptyObject: D,
                merge: U,
                getTime: P,
                unique: G,
                getQueryParams: b,
                findOne: l,
                getCurrentHost: I,
                map: s,
                each: p,
                max: e,
                bind: g,
                post: O,
                reject: T
            }
        };

    function C(i) {
        return i === !0 ? 1 : i === !1 ? 0 : parseInt(i)
    }

    function we(i, d) {
        for (var c = 0, l = 0, s = i.length; l < s; l++) d(i[l]) && (c += 1);
        return c
    }

    function Y(i) {
        return we(i, function(d) {
            return d === !0
        })
    }
    var re = function() {
            var i = window,
                d = document,
                c = navigator,
                l = !1,
                s = null;

            function p(v) {
                return v === eval.toString().length
            }

            function e() {
                var v = c.userAgent;
                return v.match(/Chrome/) ? c.brave !== void 0 ? "brave" : v.match(/Edg/) ? "edge" : v.match(/OPR/) ? "opera" : "chrome" : "chromium"
            }

            function T() {
                var v = c.vendor;
                return v !== void 0 && v.indexOf("Apple") === 0 && p(37)
            }

            function O() {
                var v = c.vendor;
                return v !== void 0 && v.indexOf("Google") === 0 && p(33)
            }

            function y() {
                return d.documentElement !== void 0 && d.documentElement.style.MozAppearance !== void 0 && p(37)
            }

            function I() {
                return c.msSaveBlob !== void 0 && p(39)
            }

            function g() {
                return i.performance !== void 0 && i.performance.memory !== void 0 && i.performance.memory.jsHeapSizeLimit !== void 0 ? i.performance.memory.jsHeapSizeLimit : 1073741824
            }

            function h() {
                try {
                    var v = indexedDB.open("test");
                    v.onerror = function() {
                        l = !0
                    }
                } catch (B) {
                    l = !0
                }
            }

            function M() {
                i.indexedDB === void 0 && (l = !0);
                try {
                    !i.indexedDB && (i.PointerEvent || i.MSPointerEvent) && (l = !0)
                } catch (v) {}
            }

            function b() {
                var v = "temp_" + Math.random().toString();
                try {
                    var B = window.indexedDB.open(v, 1);
                    B.onupgradeneeded = function(R) {
                        var ce, ue;
                        var X = (ce = R.target) == null ? void 0 : ce.result;
                        try {
                            X.createObjectStore("a_test", {
                                autoIncrement: !0
                            }).put(new Blob), l = !1
                        } catch (te) {
                            var ee = te;
                            te instanceof Error && (ee = (ue = te.message) != null ? ue : te), typeof ee != "string" && (l = !1);
                            var me = ee.match(/BlobURLs are not yet supported/);
                            l = !!me
                        } finally {
                            X.close(), i.indexedDB.deleteDatabase(v)
                        }
                    }
                } catch (R) {}
            }

            function G() {
                var v = i.openDatabase,
                    B = i.localStorage;
                try {
                    v(null, null, null, null)
                } catch (R) {
                    l = !0
                }
                try {
                    B.setItem("a_test", "2"), B.removeItem("a_test")
                } catch (R) {
                    l = !0
                }
            }

            function P() {
                c.maxTouchPoints !== void 0 ? b() : G()
            }

            function U() {
                c.webkitTemporaryStorage.queryUsageAndQuota(function(v, B) {
                    var R = Math.round(B / 1048576),
                        X = Math.round(g() / (1024 * 1024)) * 2;
                    l = R < X
                }, function(v) {
                    reject()
                })
            }

            function D() {
                var v = i.webkitRequestFileSystem,
                    B = function() {
                        l = !1
                    },
                    R = function() {
                        l = !0
                    };
                v(0, 1, B, R)
            }

            function w() {
                Promise !== void 0 && Promise.allSettled !== void 0 ? U() : D()
            }

            function H() {
                return s === "Trident"
            }

            function z() {
                return s === "edge_html"
            }

            function x() {
                return s === "Chromium"
            }

            function F() {
                return s === "Webkit"
            }

            function n() {
                return s === "Gecko"
            }

            function r() {
                if (x()) {
                    var v = new Audio;
                    return Y([i.SharedWorker === void 0, i.connection && i.connection.ontypechange, !v.sinkId]) >= 2
                }
                return n() ? Y([i.onorientationchange !== void 0, i.orientation !== void 0, /android/i.test(c.appVersion)]) >= 2 : !1
            }

            function f() {
                var v, B;
                Y(["buildID" in c, "MozAppearance" in ((B = (v = d.documentElement) == null ? void 0 : v.style) != null ? B : {}), "onmozfullscreenchange" in i, "mozInnerScreenX" in i, "CSSMozDocumentRule" in i, "CanvasCaptureMediaStream" in i]) > 3 && (s = "Gecko"), Y(["ApplePayError" in i, "CSSPrimitiveValue" in i, "Counter" in i, "WebKitMediaKeys" in i, "getStorageUpdates" in c, c.vendor.indexOf("Apple") === 0]) > 3 && (s = "WebKit"), Y(["BatteryManager" in i, "webkitMediaStream" in i, "webkitSpeechGrammar" in i, "webkitPersistentStorage" in c, "webkitTemporaryStorage" in c, c.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL" in i]) > 4 && (s = "Blink"), Y(["MSCSSMatrix" in i, "msSetImmediate" in i, "msIndexedDB" in i, "msMaxTouchPoints" in c, "msPointerEnabled" in c]) > 3 && (s = "Trident"), Y(["msWriteProfilerMark" in i, "MSStream" in i, "msLaunchUri" in c, "msSaveBlob" in c]) > 2 && !H() && (s = "EdgeHTML")
            }

            function m() {
                return s
            }

            function E() {
                return l
            }

            function N() {
                f(), y() ? h() : I() ? M() : T() ? P() : O() && w()
            }
            return N(), {
                isSafari: T,
                isChrome: O,
                isMSIE: I,
                isFirefox: y,
                isGecko: n,
                isWebKit: F,
                isAndroid: r,
                getPrivateBrowsing: E,
                getEngine: m
            }
        }(),
        ve = new function() {
            var i = document;

            function d(l, s, p) {
                var e = "",
                    T;
                p && (T = new Date, T.setTime(T.getTime() + p * 24 * 60 * 60 * 1e3), e = "; expires=" + T.toUTCString()), i.cookie = l + "=" + encodeURIComponent(s || "") + e + "; path=/;"
            }

            function c(l) {
                var s, p, e, T = i.cookie.split("; ");
                for (p = 0, e = T.length; p < e; p++)
                    if (s = T[p].split("="), s[0] == l) return decodeURIComponent(s[1])
            }
            return {
                set: d,
                get: c
            }
        },
        le = new function() {
            var i = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                d = String.fromCharCode(128);

            function c(g, h) {
                return h >>> g | h << 32 - g
            }

            function l(g) {
                return c(2, g) ^ c(13, g) ^ c(22, g)
            }

            function s(g) {
                return c(6, g) ^ c(11, g) ^ c(25, g)
            }

            function p(g) {
                return c(7, g) ^ c(18, g) ^ g >>> 3
            }

            function e(g) {
                return c(17, g) ^ c(19, g) ^ g >>> 10
            }

            function T(g, h, M) {
                return g & h ^ ~g & M
            }

            function O(g, h, M) {
                return g & h ^ g & M ^ h & M
            }

            function y(g) {
                var h = [],
                    M, b;
                for (M = 0, b = g.length; M < b; M++) h.push(("00000000" + g[M].toString(16)).slice(-8));
                return h.join("")
            }

            function I(g) {
                g = encodeURIComponent(g), g += d;
                var h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                    M, b, G, P, U, D, w, H, z, x, F, n, r, f, m, E, N, v, B, R, X = g.length;
                for (M = X / 4 + 2, b = Math.ceil(M / 16), G = new Array(b), P = 0; P < b; P++)
                    for (G[P] = new Array(16), U = 0; U < 16; U++) v = P * 64, B = U * 4, G[P][U] = g.charCodeAt(v + B + 0) << 24 | g.charCodeAt(v + B + 1) << 16 | g.charCodeAt(v + B + 2) << 8 | g.charCodeAt(v + B + 3) << 0;
                for (R = (X - 1) * 8, G[b - 1][14] = Math.floor(R / Math.pow(2, 32)), G[b - 1][15] = R >>> 0, P = 0; P < b; P++) {
                    for (D = new Array(64), w = 0; w < 16; w++) D[w] = G[P][w];
                    for (w = 16; w < 64; w++) D[w] = e(D[w - 2]) + D[w - 7] + p(D[w - 15]) + D[w - 16] >>> 0;
                    for (H = h[0], z = h[1], x = h[2], F = h[3], n = h[4], r = h[5], f = h[6], m = h[7], w = 0; w < 64; w++) E = m + s(n) + T(n, r, f) + i[w] + D[w], N = l(H) + O(H, z, x), m = f, f = r, r = n, n = F + E >>> 0, F = x, x = z, z = H, H = E + N >>> 0;
                    h[0] = h[0] + H, h[1] = h[1] + z, h[2] = h[2] + x, h[3] = h[3] + F, h[4] = h[4] + n, h[5] = h[5] + r, h[6] = h[6] + f, h[7] = h[7] + m
                }
                return y(h)
            }
            return {
                hash: I
            }
        },
        ye = function() {
            var i = {},
                d = {};

            function c(p, e) {
                i[p] = e
            }

            function l(p, e) {
                var T = p + "." + e;
                d[T] ? d[T] += 1 : (_.fetch(de + "/r", {
                    59: p,
                    60: e
                }, function(O) {
                    console.log("report confirmed")
                }), d[T] = 1)
            }

            function s(p) {
                var e, T, O, y = p.c.s;
                if (!!y)
                    for (e = 0, O = y.length; e < O; e++) T = y[e], i[T] && i[T]()
            }
            return {
                notify: s
            }
        },
        gt = ye(),
        mt = function() {
            var i = _.parseURI(window.location.href).host,
                d = /\.()$/i;

            function c(l) {
                if (_.startsWith(l, i)) return !0;
                var s = _.parseURI(l);
                return !!(s && s.host && d.test("." + s.host))
            }
            return {
                e: c
            }
        }(),
        Me = function() {
            var i = "__sfec431c11eadbe0",
                d;

            function c() {
                if (window.localStorage) return window.localStorage.getItem(i)
            }

            function l() {
                if (window.localStorage) return window.sessionStorage.getItem(i)
            }

            function s() {
                var T = document.cookie.match(i + "=(.[^;]+)");
                return T ? T[1] : null
            }

            function p() {
                var T = new Date;
                T.setTime(T.getTime() + 10 * 365 * 24 * 60 * 60), document.cookie = i + "=" + d + "; path=/; expires=" + T.toGMTString() + ";SameSite=Lax; Secure; Partitioned", window.localStorage && window.localStorage.setItem(i, d), window.sessionStorage && window.sessionStorage.setItem(i, d)
            }

            function e() {
                return d = c(), d || (d = s()), d || (d = l()), d || (d = "27nBLT3uXneHLBViANxoRUT8e6htiGfn"), p(), d
            }
            return {
                get: e,
                set: p
            }
        }();
    (function() {
        var d, c = window,
            l = document,
            s = c.navigator,
            p = null,
            e = {};

        function T() {
            var o = document,
                u = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF", "Inconsolata", "Abadi MT Condensed Light", "Albertus Extra Bold", "Albertus Medium", "Antique Olive", "Arial", "Arial Black", "Arial MT", "Arial Narrow", "Bazooka", "Book Antiqua", "Bookman Old Style", "Boulder", "Calisto MT", "Calligrapher", "Century Schoolbook", "Cezanne", "CG Omega", "CG Times", "Charlesworth", "Chaucer", "Clarendon Condensed", "Comic Sans MS", "Copperplate Gothic Bold", "Copperplate Gothic Light", "Cornerstone", "Coronet", "Courier", "Courier New", "Cuckoo", "Dauphin", "Denmark", "Fransiscan", "Garamond", "Geneva", "Heather", "Helvetica", "Herald", "Impact", "Jester", "Lithograph", "Lithograph Light", "Long Island", "Lucida Console", "Lucida Handwriting", "Lucida Sans Unicode", "Marigold", "Market", "Matisse ITC", "MS LineDraw", "News GothicMT", "OCR A Extended", "Old Century", "Pegasus", "Pickwick", "Poster", "Pythagoras", "Sceptre", "Sherwood", "Signboard", "Socket", "Steamer", "Storybook", "Subway", "Tahoma", "Technical", "Teletype", "Tempus Sans ITC", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Tristan", "Tubular", "Unicorn", "Univers", "Univers Condensed", "Vagabond", "Verdana", "Amazone BT", "AmerType Md BT", "Arrus BT", "Aurora Cn BT", "AvantGarde Md BT", "Benguiat Bk BT", "BernhardFashion BT", "BernhardMod BT", "BinnerD", "Bremen Bd BT", "CaslonOpnface BT", "Charter Bd BT", "Charter BT", "ChelthmITC Bk BT", "CloisterBlack BT", "CopperplGoth Bd BT", "English 111 Vivace BT", "EngraversGothic BT", "Exotc350 Bd BT", "Freefrm721 Blk BT", "FrnkGothITC Bk BT", "Futura Lt BT", "Futura ZBlk BT", "FuturaBlack BT", "Galliard BT", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "GoudyHandtooled BT", "GoudyOLSt BT", "Humanst 521 Cn BT", "Humanst521 Lt BT", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "Informal011 BT", "Kabel Bk BT", "Kabel Ult BT", "Kaufmann Bd BT", "Kaufmann BT", "Korinna BT", "Lydian BT", "NewsGoth BT", "Onyx BT", "OzHandicraft BT", "PosterBodoni BT", "PTBarnum BT", "Ribbon131 Bd BT", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Souvenir Lt BT", "Swis721 BlkEx BT", "Swiss911 XCm BT", "TypoUpright BT", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zurich BlkEx BT", "Zurich Ex BT"],
                a = ["monospace", "sans-serif", "serif"],
                t = "VDbax4pGj@eiwthyaCw-k628o_fEb-hm",
                S = "72px",
                V = {},
                j = {},
                k = [],
                K = document.getElementsByTagName("body")[0],
                A;
            return _.each(a, function(q) {
                A = document.createElement("span"), A.style.fontSize = S, A.innerHTML = t, A.style.fontFamily = q, K.appendChild(A), V[q] = A.offsetWidth, j[q] = A.offsetHeight, K.removeChild(A)
            }), _.each(u, function(q) {
                var $ = !1;
                _.each(a, function(L) {
                    A.style.fontFamily = `${q},${L}`, K.appendChild(A);
                    var fe = A.offsetWidth !== V[L] || A.offsetHeight !== j[L];
                    $ = $ || fe, K.removeChild(A)
                }), $ && k.push(q)
            }), k
        }
        var O = "inverted-colors",
            y = "prefers-reduced-motion",
            I = "prefers-reduced-transparency",
            g = "dynamic-range",
            h = "color-gamut",
            M = "pointer";

        function b(o, u) {
            return c.matchMedia("(" + o + ": " + u + ")").matches
        }

        function G() {
            var o = b(O, "inverted"),
                u = b(O, "none");
            o ? e[129] = 1 : u ? e[129] = 2 : e[129] = -1
        }

        function P() {
            var o = b(y, "reduce"),
                u = b(y, "no-preference");
            o ? e[130] = 1 : u ? e[130] = 2 : e[130] = -1
        }

        function U() {
            var o = b(I, "reduce"),
                u = b(I, "no-preference");
            o ? e[131] = 1 : u ? e[131] = 2 : e[131] = -1
        }

        function D() {
            var o = b(g, "high"),
                u = b(g, "standard");
            o ? e[132] = 1 : u ? e[132] = 2 : e[132] = -1
        }

        function w() {
            var o = b(h, "srgb"),
                u = b(h, "p3"),
                a = b(h, "rec2020");
            o ? e[133] = 1 : u ? e[133] = 2 : a ? e[133] = 3 : e[133] = -1
        }

        function H() {
            var o = b(M, "srgb"),
                u = b(M, "p3"),
                a = b(M, "rec2020");
            o ? e[134] = 1 : u ? e[134] = 2 : a ? e[134] = 3 : e[134] = -1
        }

        function z() {
            if (!re.isAndroid() && !re.isWebKit()) e[135] = -2;
            else if (!c.AudioContext) e[135] = -1;
            else {
                var o = new AudioContext;
                e[135] = o.baseLatency
            }
        }

        function x(o, u) {
            return s[o] ? s[o] : u
        }

        function F() {
            var o;
            try {
                o = Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (u) {}
            e[29] = o
        }

        function n() {
            e[23] = c.devicePixelRatio || -1
        }

        function r() {
            e[24] = c.screen.colorDepth || -1
        }

        function f() {
            e[136] = x("userAgent")
        }

        function m() {
            e[1] = x("language")
        }

        function E() {
            e[27] = x("hardwareConcurrency", -1)
        }

        function N() {
            e[28] = x("deviceMemory", -1)
        }

        function v() {
            e[68] = x("appCodeName")
        }

        function B() {
            e[70] = x("appVersion")
        }

        function R() {
            e[69] = x("appName")
        }

        function X() {
            e[73] = C(x("pdfViewerEnabled", !1))
        }

        function ee() {
            var o = x("plugins"),
                u = [];
            _.each(o, function(a) {
                u.push(a.name)
            }), e[71] = u
        }

        function me() {
            e[4] = new Date().getTimezoneOffset()
        }

        function ce() {
            if (p) return [p.audio, p.video];
            p = {
                video: 0,
                audio: 0
            }, s.mediaDevices && s.mediaDevices.enumerateDevices().then(function(o) {
                var u = {},
                    a;
                o = _.reject(o, function(S) {
                    return S.deviceId === "default"
                }), _.each(o, function(S) {
                    u[S.kind + "_" + S.deviceId] = S.kind
                });
                for (var t in u) a = u[t].replace(/input|output/, ""), p[a] += 1;
                e[87] = p.audio, e[88] = p.video
            }).catch(function(o) {})
        }

        function ue() {
            var o = c.screen;
            o.height > o.width ? e[77] = "p" : e[77] = "l", e[78] = C(o.height), e[79] = C(o.width), o.availWidth && o.availHeight && (e[81] = C(o.availWidth), e[80] = C(o.availHeight))
        }

        function te() {
            e[85] = C(!!c.sessionStorage)
        }

        function Le() {
            e[84] = C(!!c.localStorage)
        }

        function De() {
            e[86] = C(!!c.indexedDB)
        }

        function ke() {
            e[8] = x("cpuClass")
        }

        function Ne() {
            e[9] = x("platform")
        }

        function Ge() {
            var o = 0,
                u = !1,
                a = "ontouchstart" in window;
            typeof s.maxTouchPoints < "u" ? o = s.maxTouchPoints : typeof s.msMaxTouchPoints < "u" && (o = s.msMaxTouchPoints);
            try {
                l.createEvent("TouchEvent"), u = !0
            } catch (t) {}
            e[74] = o, e[75] = C(u), e[76] = C(a)
        }

        function He() {
            e[11] = x("doNotTrack")
        }

        function Ue() {
            var o = l.createElement("div");
            o.innerHTML = "", o.id = "ads-" + _.randomString(8), o.className = "adwords";
            var u = !1;
            try {
                l.body.appendChild(o), u = c.getComputedStyle(o).display === "none", l.body.removeChild(o)
            } catch (a) {
                u = !1
            }
            e[67] = C(u)
        }

        function Fe() {
            var o = l.createElement("canvas"),
                u = !!(o.getContext && o.getContext("2d"));
            e[13] = C(u)
        }

        function Xe() {
            var o = l.createElement("canvas"),
                u = o.getContext && (o.getContext("webgl") || o.getContext("experimental-webgl"));
            e[122] = "", e[14] = 0;
            var a = !!c.WebGLRenderingContext && !!u;
            if (a) {
                e[14] = 1, e[124] = u.getParameter(u.VERSION), e[123] = "";
                var t = re.isGecko() ? null : u.getExtension("WEBGL_debug_renderer_info");
                t ? (e[123] = u.getParameter(t.UNMASKED_VENDOR_WEBGL) || "", e[122] = u.getParameter(t.UNMASKED_RENDERER_WEBGL) || "") : (e[123] = u.getParameter(u.VENDOR) || "", e[122] = u.getParameter(u.RENDERER) || "")
            } else e[14] = 0
        }

        function Ve() {
            var o = l.createElement("canvas"),
                u = [];
            o.width = 120, o.height = 80, o.style.display = "inline";
            var a = o.getContext("2d");
            a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), e[89] = a.isPointInPath(5, 5, "evenodd") === !1 ? 1 : 0, a.textBaseline = "alphabetic", a.fillStyle = "#f20", a.fillRect(125, 1, 62, 20), a.fillStyle = "#042", a.font = "11pt no-real-font-123", a.fillText("Cwm fjord-bank glyphs vext quiz \u{1F601}", 3, 16), a.fillStyle = "rgba(102, 200, 0, 0.6)", a.font = "14pt Arial", a.fillText("Cwm fjord-bank glyphs vext quiz \u{1F601}", 8, 40), u.push(o.toDataURL()), o.width = 400, o.height = 200, a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, Math.PI * 2, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, Math.PI * 2, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, Math.PI * 2, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, Math.PI * 2, !0), a.arc(75, 75, 25, 0, Math.PI * 2, !0), a.fill("evenodd"), u.push(o.toDataURL());
            var t = le.hash(u.join("#"));
            e[15] = t
        }

        function We() {
            var o = function(Z) {
                    return t.clearColor(0, 0, 0, 1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), "[" + Z[0] + ", " + Z[1] + "]"
                },
                u = function(Z) {
                    var se, Ee = Z.getExtension("EXT_texture_filter_anisotropic") || Z.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || Z.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return Ee ? (se = Z.getParameter(Ee.MAX_TEXTURE_MAX_ANISOTROPY_EXT), se === 0 && (se = 2), se) : null
                },
                a = document.createElement("canvas"),
                t = null,
                S = Array(62);
            try {
                t = a.getContext("webgl") || a.getContext("experimental-webgl")
            } catch (Z) {}
            if (!t) return S;
            var V = "attribute vec2 attrVertex;attribute vec4 attrColor;varying vec4 varyinColor;uniform mat4 transform;void main(){varyinColor=attrColor;gl_Position=transform*vec4(attrVertex,0,1);}",
                j = "precision mediump float;varying vec4 varyinColor;void main(){gl_FragColor=varyinColor;}",
                k = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, k);
            var K = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            t.bufferData(t.ARRAY_BUFFER, K, t.STATIC_DRAW), k.itemSize = 3, k.numItems = 3;
            var A = t.createProgram(),
                q = t.createShader(t.VERTEX_SHADER);
            t.shaderSource(q, V), t.compileShader(q);
            var $ = t.createShader(t.FRAGMENT_SHADER);
            t.shaderSource($, j), t.compileShader($), t.attachShader(A, q), t.attachShader(A, $), t.linkProgram(A), t.useProgram(A), A.vertexPosAttrib = t.getAttribLocation(A, "attrVertex"), A.offsetUniform = t.getUniformLocation(A, "uniformOffset"), t.enableVertexAttribArray(A.vertexPosArray), t.vertexAttribPointer(A.vertexPosAttrib, k.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(A.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, k.numItems), t.canvas != null && S.push(le.hash(t.canvas.toDataURL().replace("data:image/png;base64,", "")));
            var L = 0;
            S[L++] = t.getSupportedExtensions().join(";"), S[L++] = u(t), S[L++] = t.getContextAttributes().antialias;
            for (var fe = ["ALPHA_BITS", "BLUE_BITS", "DEPTH_BITS", "GREEN_BITS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "RED_BITS", "RENDERER", "SHADING_LANGUAGE_VERSION", "STENCIL_BITS", "VENDOR", "VERSION"], Se = ["MAX_VIEWPORT_DIMS", "ALIASED_POINT_SIZE_RANGE", "ALIASED_LINE_WIDTH_RANGE"], W = 0, dt = fe.length; W < dt; W++) S[L++] = t.getParameter(t[fe[W]]);
            for (W = 0; W < Se.length; W++) S[L++] = o(t.getParameter(t[Se[W]]));
            var lt = !!t.getShaderPrecisionFormat,
                xe = ["HIGH_FLOAT", "MEDIUM_FLOAT", "LOW_FLOAT", "HIGH_INT", "MEDIUM_INT", "LOW_INT"],
                Q;
            for (W = 0; W < xe.length; W++) Q = xe[W], lt && (S[L++] = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t[Q]).precision, S[L++] = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t[Q]).rangeMin, S[L++] = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t[Q]).rangeMax, S[L++] = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t[Q]).precision, S[L++] = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t[Q]).rangeMin, S[L++] = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t[Q]).rangeMax);
            e[16] = le.hash(S.join("|"))
        }

        function ze() {
            for (var o = s.userAgent.toLowerCase(), u = (s.oscpu || "").toLowerCase(), a = s.platform.toLowerCase(), t = "na", S = ["windows phone", "win", "android", "linux", "iphone", "ipad", "mac"], V = 0, j = S.length; V < j; V++)
                if (o.indexOf(S[V]) >= 0) {
                    t = S[V];
                    break
                }(t === "ipad" || t === "iphone") && (t = "ios");
            var k = "ontouchstart" in window || s.maxTouchPoints > 0 || s.msMaxTouchPoints > 0;
            if (k && t !== "win" && t !== "windows phone" && t !== "android" && t !== "ios" && t !== "na") {
                e[17] = 1;
                return
            }
            if (typeof u < "u") {
                if (u.indexOf("win") >= 0 && t !== "win" && t !== "windows phone") {
                    e[17] = 1;
                    return
                } else if (u.indexOf("linux") >= 0 && t !== "linux" && t !== "android") {
                    e[17] = 1;
                    return
                } else if (u.indexOf("mac") >= 0 && t !== "mac" && t !== "ios") {
                    e[17] = 1;
                    return
                } else if (u.indexOf("win") === 0 && u.indexOf("linux") === 0 && u.indexOf("mac") >= 0 && t !== "na") {
                    e[17] = 1;
                    return
                }
            }
            if (a.indexOf("win") >= 0 && t !== "win" && t !== "windows Phone") {
                e[17] = 1;
                return
            } else if ((a.indexOf("linux") >= 0 || a.indexOf("android") >= 0 || a.indexOf("pike") >= 0) && t !== "linux" && t !== "android") {
                e[17] = 1;
                return
            } else if ((a.indexOf("mac") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0 || a.indexOf("iphone") >= 0) && t !== "mac" && t !== "ios") {
                e[17] = 1;
                return
            } else if (a.indexOf("win") === 0 && a.indexOf("linux") === 0 && a.indexOf("mac") >= 0 && t !== "other") {
                e[17] = 1;
                return
            }
            if (typeof s.plugins > "u" && t !== "win" && t !== "windows phone") {
                e[17] = 1;
                return
            }
            e[17] = 0
        }

        function je() {
            for (var o = x("userAgent"), u = x("productSub"), a = "other", t = ["firefox", "opera", "opr", "chrome", "safari", "trident"], S = 0, V = t.length; S < V; S++)
                if (o.indexOf(t[S]) >= 0) {
                    a = t[S];
                    break
                }
            if ((a === "opera" || a === "opr") && (a = "opera"), (a === "chrome" || a === "safari" || a === "opera") && u !== "20030107") {
                e[18] = 1;
                return
            }
            var j = eval.toString().length;
            if (j === 37 && a !== "safari" && a !== "firefox" && a !== "other") {
                e[18] = 1;
                return
            } else if (j === 39 && a !== "trident" && a !== "other") {
                e[18] = 1;
                return
            } else if (j === 33 && a !== "chrome" && a !== "opera" && a !== "other") {
                e[18] = 1;
                return
            }
            var k;
            try {
                throw "a"
            } catch (K) {
                try {
                    K.toSource(), k = !0
                } catch (A) {
                    k = !1
                }
            }
            if (k && a !== "firefox" && a !== "other") {
                e[18] = 1;
                return
            }
            e[18] = 0
        }

        function qe() {
            e[19] = C(!!document.body.addBehavior)
        }

        function Ke() {
            e[20] = C(!!c.openDatabase)
        }

        function Ze() {
            e[26] = s.languages
        }

        function Je() {
            if (typeof s.languages < "u") try {
                var o = s.languages[0].substr(0, 2);
                o !== s.language.substr(0, 2) ? e[21] = 1 : e[21] = 0
            } catch (u) {
                e[21] = 1
            } else e[21] = 0
        }

        function Ye() {
            screen.width < screen.availWidth || screen.height < screen.availHeight ? e[22] = 1 : e[22] = 0
        }

        function $e() {
            var o = Me.get();
            e[72] = o
        }

        function Qe() {
            e[65] = C(re.getPrivateBrowsing())
        }

        function et() {
            e[90] = re.getEngine()
        }

        function tt() {
            e[121] = C(x("webdriver", !1))
        }

        function nt() {
            e[117] = C(x("cookieEnabled", !1))
        }

        function rt() {
            e[116] = C(s.javaEnabled())
        }

        function it() {
            e[118] = x("buildId")
        }

        function at() {
            e[119] = x("product")
        }

        function ot() {
            e[120] = x("vendor")
        }

        function ct() {
            e[125] = T()
        }

        function ut() {
            e[126] = c.location.toString()
        }

        function ft(o) {
            d = o, ce(), setTimeout(st, 500)
        }
        var Te = [f, m, F, n, r, E, N, v, B, R, X, ee, me, ue, te, Le, De, ke, Ne, Ge, He, Ue, Fe, Xe, Ve, We, ze, je, qe, Ke, Ze, Je, Ye, $e, Qe, et, tt, nt, rt, it, at, ot, ct, ut, P, U, G, D, w, H, z];

        function st() {
            for (var o = 0, u = Te.length; o < u; o++) try {
                Te[o]()
            } catch (a) {}
            d && d(e)
        }
        ie && ie.push(["fp", ft])
    })();

    function Ce() {
        ae.load(), _e(), startTimestamp = new Date().getTime(), Be = setInterval(Pe, 250);
        var i = ve.get(he);
        i ? ne = i : ve.set(he, ne)
    }
    J.sfGetSessionId = function() {
        return ne
    }, J.sfGetDeviceId = function() {
        return ae.getItem("128")
    };

    function Re() {
        var i = ae.getItem("128");
        J.sfCallback && J.sfCallback(ne, i)
    }
    var oe = [],
        ge = !1;

    function Ie(i) {
        oe.push(i)
    }

    function Pe() {
        var i = {},
            d = oe.length;
        if (!(ge || d === 0)) {
            ge = !0;
            for (var c = 0; c < d; c++) i = _.merge(i, oe[c]);
            _.fetch(de + "/c", i, function(l) {
                ae.set(l), oe.splice(0, d), ge = !1, Re()
            })
        }
    }

    function ht(i, d) {}

    function _e() {
        var i = be.getElementsByTagName("script"),
            d = new RegExp("(.+431c11eadbe0)/main.js"),
            c;
        _.each(i, function(l) {
            l.src && (c = l.src.match(d), c && (de = c[1]))
        })
    }
    var pe = !1;

    function Oe() {
        if (!pe) {
            pe = !0, Ce();
            for (var i = 0, d = ie.length; i < d; i++)(function(c) {
                c[1](function(l) {
                    var s = {};
                    s[c[0]] = l, Ie(s)
                })
            })(ie[i])
        }
    }
    _.onReady(Oe)
})();
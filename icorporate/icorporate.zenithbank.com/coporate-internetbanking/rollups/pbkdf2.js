var CryptoJS = CryptoJS || function(g, j) {
    var e = {},
        d = e.lib = {},
        m = function() {},
        n = d.Base = {
            extend: function(a) {
                m.prototype = this;
                var c = new m;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        q = d.WordArray = n.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != j ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || l).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    p = a.words,
                    f = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (f % 4)
                    for (var b = 0; b < a; b++) c[f + b >>> 2] |= (p[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((f + b) % 4);
                else if (65535 < p.length)
                    for (b = 0; b < a; b += 4) c[f + b >>> 2] = p[b >>> 2];
                else c.push.apply(c, p);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = g.ceil(c / 4)
            },
            clone: function() {
                var a = n.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * g.random() | 0);
                return new q.init(c, a)
            }
        }),
        b = e.enc = {},
        l = b.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], f = 0; f < a; f++) {
                    var d = c[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                    b.push((d >>> 4).toString(16));
                    b.push((d & 15).toString(16))
                }
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], f = 0; f < c; f += 2) b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << 24 - 4 * (f % 8);
                return new q.init(b, c / 2)
            }
        },
        k = b.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var b = [], f = 0; f < a; f++) b.push(String.fromCharCode(c[f >>> 2] >>> 24 - 8 * (f % 4) & 255));
                return b.join("")
            },
            parse: function(a) {
                for (var c = a.length, b = [], f = 0; f < c; f++) b[f >>> 2] |= (a.charCodeAt(f) & 255) << 24 - 8 * (f % 4);
                return new q.init(b, c)
            }
        },
        h = b.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(k.stringify(a)))
                } catch (b) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return k.parse(unescape(encodeURIComponent(a)))
            }
        },
        u = d.BufferedBlockAlgorithm = n.extend({
            reset: function() {
                this._data = new q.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = h.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var b = this._data,
                    d = b.words,
                    f = b.sigBytes,
                    l = this.blockSize,
                    e = f / (4 * l),
                    e = a ? g.ceil(e) : g.max((e | 0) - this._minBufferSize, 0);
                a = e * l;
                f = g.min(4 * a, f);
                if (a) {
                    for (var h = 0; h < a; h += l) this._doProcessBlock(d, h);
                    h = d.splice(0, a);
                    b.sigBytes -= f
                }
                return new q.init(h, f)
            },
            clone: function() {
                var a = n.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    d.Hasher = u.extend({
        cfg: n.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            u.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, d) {
                return (new a.init(d)).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, d) {
                return (new w.HMAC.init(a, d)).finalize(b)
            }
        }
    });
    var w = e.algo = {};
    return e
}(Math);
(function() {
    var g = CryptoJS,
        j = g.lib,
        e = j.WordArray,
        d = j.Hasher,
        m = [],
        j = g.algo.SHA1 = d.extend({
            _doReset: function() {
                this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(d, e) {
                for (var b = this._hash.words, l = b[0], k = b[1], h = b[2], g = b[3], j = b[4], a = 0; 80 > a; a++) {
                    if (16 > a) m[a] = d[e + a] | 0;
                    else {
                        var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
                        m[a] = c << 1 | c >>> 31
                    }
                    c = (l << 5 | l >>> 27) + j + m[a];
                    c = 20 > a ? c + ((k & h | ~k & g) + 1518500249) : 40 > a ? c + ((k ^ h ^ g) + 1859775393) : 60 > a ? c + ((k & h | k & g | h & g) - 1894007588) : c + ((k ^ h ^ g) - 899497514);
                    j = g;
                    g = h;
                    h = k << 30 | k >>> 2;
                    k = l;
                    l = c
                }
                b[0] = b[0] + l | 0;
                b[1] = b[1] + k | 0;
                b[2] = b[2] + h | 0;
                b[3] = b[3] + g | 0;
                b[4] = b[4] + j | 0
            },
            _doFinalize: function() {
                var d = this._data,
                    e = d.words,
                    b = 8 * this._nDataBytes,
                    l = 8 * d.sigBytes;
                e[l >>> 5] |= 128 << 24 - l % 32;
                e[(l + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
                e[(l + 64 >>> 9 << 4) + 15] = b;
                d.sigBytes = 4 * e.length;
                this._process();
                return this._hash
            },
            clone: function() {
                var e = d.clone.call(this);
                e._hash = this._hash.clone();
                return e
            }
        });
    g.SHA1 = d._createHelper(j);
    g.HmacSHA1 = d._createHmacHelper(j)
})();
(function() {
    var g = CryptoJS,
        j = g.enc.Utf8;
    g.algo.HMAC = g.lib.Base.extend({
        init: function(e, d) {
            e = this._hasher = new e.init;
            "string" == typeof d && (d = j.parse(d));
            var g = e.blockSize,
                n = 4 * g;
            d.sigBytes > n && (d = e.finalize(d));
            d.clamp();
            for (var q = this._oKey = d.clone(), b = this._iKey = d.clone(), l = q.words, k = b.words, h = 0; h < g; h++) l[h] ^= 1549556828, k[h] ^= 909522486;
            q.sigBytes = b.sigBytes = n;
            this.reset()
        },
        reset: function() {
            var e = this._hasher;
            e.reset();
            e.update(this._iKey)
        },
        update: function(e) {
            this._hasher.update(e);
            return this
        },
        finalize: function(e) {
            var d = this._hasher;
            e = d.finalize(e);
            d.reset();
            return d.finalize(this._oKey.clone().concat(e))
        }
    })
})();
(function() {
    var g = CryptoJS,
        j = g.lib,
        e = j.Base,
        d = j.WordArray,
        j = g.algo,
        m = j.HMAC,
        n = j.PBKDF2 = e.extend({
            cfg: e.extend({
                keySize: 4,
                hasher: j.SHA1,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(e, b) {
                for (var g = this.cfg, k = m.create(g.hasher, e), h = d.create(), j = d.create([1]), n = h.words, a = j.words, c = g.keySize, g = g.iterations; n.length < c;) {
                    var p = k.update(b).finalize(j);
                    k.reset();
                    for (var f = p.words, v = f.length, s = p, t = 1; t < g; t++) {
                        s = k.finalize(s);
                        k.reset();
                        for (var x = s.words, r = 0; r < v; r++) f[r] ^= x[r]
                    }
                    h.concat(p);
                    a[0]++
                }
                h.sigBytes = 4 * c;
                return h
            }
        });
    g.PBKDF2 = function(d, b, e) {
        return n.create(e).compute(d, b)
    }
})();
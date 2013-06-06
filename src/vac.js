/*
         __                            ___             
        /\ \                     __  /'___\            
        \ \ \         __     __ /\_\/\ \__/  __  __    
         \ \ \  __  /'__`\ /'_ `\/\ \ \ ,__\/\ \/\ \   
          \ \ \L\ \/\  __//\ \L\ \ \ \ \ \_/\ \ \_\ \  
           \ \____/\ \____\ \____ \ \_\ \_\  \/`____ \ 
            \/___/  \/____/\/___L\ \/_/\/_/   `/___/> \
                             /\____/             /\___/
                             \_/__/              \/__/

        Copyright (c) 2013 by Legify UG. All Rights Reserved.

        [Portions] Copyright (c) Francois-Guillaume Ribreau
        [Portions] Copyright (c) Ruslan Zavackiy
 
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
 
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
 
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
*/

'use strict';

var meta = require("./lib/meta"),
        _vac = meta._vac,
        _engine = require("./lib/engine"),
        ISO639 = require("./lib/639"),
        langDb = _vac["trigram"],
        unicodeMap = _vac["trigram-unicodemap"];

var vac = module.exports = new(function(languageType) {
        this.threshold = 300;
        this.useUnicodeNarrowing = true;
        this.languageType = languageType || null;

        this.getLanguageCount = function() {
                return this.getLanguages().length
        };

        this.setLanguageType = function(type) {
                return this.languageType = type
        };

        this.getLanguages = function() {
                return Object.keys(langDb)
        };

        this.distance = function(d, e) {
                var c = 0, b = Object.keys(e), a;
                for (a = b.length; a--;) c += d[b[a]] ? Math.abs(e[b[a]] - d[b[a]]) : this.threshold;
                return c
        };

        this.normalizeScore = function(score, baseCount) {
                return 1 - score / (baseCount || this.threshold) / this.threshold
        };

        // v=require("./src/vac"); v.languageType = "iso2"; v.detect("This is a test.", 1, .3)
        this.detect = function (g, c, t) {
                !t && (t=0);
                if ( !t && c < 1 ) t = c, c = 0;
                if ( t && c < 1 && t > 1 ) (c ^= t), (t ^= c), (c ^= t);
                if ( t && t < 1 && c > 1 ) (t ^= c), (c ^= t), (t ^= c);
                c = +c || 0; var b = [];
                if ("" == g && 3 > g.length) return [];
                var a = new _engine(g);
                a.setPadStart(!0), a.analyze();
                var d = a.getTrigramRanks(), j = Object.keys(d).length;
                if (0 == j) return [];
                var e = [];
                if (this.useUnicodeNarrowing)
                        for (var a = a.getUnicodeBlocks(), h = Object.keys(a), a = h.length; a--;) {
                                if (unicodeMap[h[a]])
                                        for (var f in unicodeMap[h[a]])~ e.indexOf(f) || e.push(f)
                } else e = this.getLanguages();
                for (a = e.length; a--;)(f = this.normalizeScore(this.distance(langDb[e[a]], d), j)) && b.push([e[a], f]);
                b.sort(function (a,
                        b) {
                        return b[1] - a[1]
                });
                if (!b.length) return [];
                b = 0 < c ? b.slice(0, c) : b;
                d = b.length;

                if ( this.languageType == "iso2" )
                                for (a = d; a--;)
                                        b[a][0] = ISO639.gC2(b[a][0])

                if ( this.languageType == "iso3" )
                                for (a = d; a--;)
                                        b[a][0] = ISO639.gC3(b[a][0])

                var z = {}; for ( a in b ) b[a][0] != null && (b[a][1] >= t) && (z[b[a][0]] = b[a][1])

                return z
        };
})
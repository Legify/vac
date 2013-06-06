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

var _vac = require("./lib/meta/_vac.json"),
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
        this.detect = function (a, b, c) {
            !c && (c = 0);
            !c && 1 > b && (c = b, b = 0);
            c && 1 > b && 1 < c && (b ^= c, c ^= b, b ^= c);
            c && 1 > c && 1 < b && (c ^= b, b ^= c, c ^= b);
            b = +b || 0;
            var d = [];
            if ("" == a && 3 > a.length) return [];
            a = new _engine(a);
            a.setPadStart(!0);
            a.analyze();
            var f = a.getTrigramRanks(),
                    j = Object.keys(f).length;
            if (0 == j) return [];
            var e = [];
            if (this.useUnicodeNarrowing) {
                    a = a.getUnicodeBlocks();
                    var h = Object.keys(a);
                    for (a = h.length; a--;)
                            if (unicodeMap[h[a]])
                                    for (var g in unicodeMap[h[a]])~ e.indexOf(g) || e.push(g)
            } else e = this.getLanguages();
            for (a = e.length; a--;)(g = this.normalizeScore(this.distance(langDb[e[a]],
                                    f), j)) && d.push([e[a], g]);
            d.sort(function (a, b) {
                    return b[1] - a[1]
            });
            if (!d.length) return [];
            d = 0 < b ? d.slice(0, b) : d;
            f = d.length;
            if ("iso2" == this.languageType)
                    for (a = f; a--;) d[a][0] = ISO639.gC2(d[a][0]);
            if ("iso3" == this.languageType)
                    for (a = f; a--;) d[a][0] = ISO639.gC3(d[a][0]);
            b = {};
            for (a in d) null != d[a][0] && d[a][1] >= c && (b[d[a][0]] = d[a][1]);
            return b
    };
})
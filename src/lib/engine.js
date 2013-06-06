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

var dbUnicodeBlocks = require("./meta/_blocks.json");
var _vac = module.exports = function (string) {
        this.threshold = 300;
        this.trigramRanks = {};
        this.compileTrigram = true;
        this.compileUnicode = true;
        this.unicodeSkipAscii = true;
        this.unicodeBlocks = {};
        this.trigramPadStart = false;
        this.trigram = {};
        this.string = string ? string.replace(/[~!@#$%^&*()_|+\-=?;:",.<>\{\}\[\]\\\/]/g, " ") : ""
};
_vac.prototype = {
        setPadStart: function (bool) {
                this.trigramPadStart = bool || true
        },
        getTrigramRanks: function () {
                return this.trigramRanks
        },
        getBlockCount: function () {
                return dbUnicodeBlocks.length
        },
        getUnicodeBlocks: function () {
                return this.unicodeBlocks
        },
        analyze: function () {
                var len = this.string.length,
                        byteCounter = 0,
                        a = " ",
                        b = " ",
                        dropone, c;
                if (this.compileUnicode) var blocksCount = dbUnicodeBlocks.length;
                if (this.compileTrigram) {
                        a = " ";
                        b = " ";
                        if (!this.trigramPadStart) {
                                a = this.string.charAt(byteCounter++).toLowerCase();
                                if (a !=
                                        " ") {
                                        b = this.string.charAt(byteCounter).toLowerCase();
                                        dropone = " " + a + b
                                }
                                byteCounter = 0;
                                a = " ";
                                b = " "
                        }
                }
                var skippedCount = 0;
                var unicodeChars = {};
                while (byteCounter < len) {
                        c = this.string.charAt(byteCounter++).toLowerCase();
                        if (this.compileTrigram) {
                                if (!(b == " " && (a == " " || c == " "))) {
                                        var abc = a + b + c;
                                        this.trigram[abc] = this.trigram[abc] ? this.trigram[abc] += 1 : 1
                                }
                                a = b;
                                b = c
                        }
                        if (this.compileUnicode) {
                                var charCode = c.charCodeAt(0);
                                if (this.unicodeSkipAscii && c.match(/[a-z ]/i) && (charCode < 65 || charCode > 122 || charCode > 90 && charCode < 97) && c !=
                                        "'") {
                                        skippedCount++;
                                        continue
                                }
                                unicodeChars[c] = unicodeChars[c] ? unicodeChars[c] += 1 : 1
                        }
                }
                this.unicodeBlocks = {};
                if (this.compileUnicode) {
                        var keys = Object.keys(unicodeChars),
                                keysLength = keys.length;
                        for (var i = keysLength; i--;) {
                                var unicode = keys[i].charCodeAt(0),
                                        count = unicodeChars[keys[i]],
                                        search = this.unicodeBlockName(unicode, blocksCount),
                                        blockName = search != -1 ? search[2] : "[Malformatted]";
                                this.unicodeBlocks[blockName] = this.unicodeBlocks[blockName] ? this.unicodeBlocks[blockName] += count : count
                        }
                }
                if (this.compileTrigram) {
                        if (b !=
                                " ") {
                                var ab = a + b + " ";
                                this.trigram[ab] = this.trigram[ab] ? this.trigram[ab] += 1 : 1
                        }
                        if (typeof dropone != "undefined" && this.trigram[dropone] == 1) delete this.trigram[dropone];
                        if (this.trigram && Object.keys(this.trigram).length > 0) this.trigramRanks = this.arrRank(this.trigram);
                        else this.trigramRanks = {}
                }
        },
        bubleSort: function (arr) {
                var combined = [];
                for (var key in arr) combined.push([key, arr[key]]);
                combined = combined.sort(this.sortFunc);
                var replacement = {};
                var length = combined.length;
                for (var i = 0; i < length; i++) replacement[combined[i][0]] =
                        combined[i][1];
                return replacement
        },
        sortFunc: function (a, b) {
                var aKey = a[0],
                        aValue = a[1],
                        bKey = b[0],
                        bValue = b[1];
                if (aValue == bValue) return aKey.localeCompare(bKey);
                else return aValue > bValue ? -1 : 1
        },
        arrRank: function (a) {
                a = this.bubleSort(a);
                var b = {}, c = 0,
                        d;
                for (d in a)
                        if (b[d] = c++, c >= this.threshold) break;
                return b
        },
        unicodeBlockName: function (b, e) {
                if (b <= dbUnicodeBlocks[0][1]) return dbUnicodeBlocks[0];
                for (var c = e ? e - 1 : dbUnicodeBlocks.length, d = 1, a; d <= c;)
                        if (a = Math.floor((d + c) / 2), b < dbUnicodeBlocks[a][0]) c = a - 1;
                        else if (b > dbUnicodeBlocks[a][1]) d = a + 1;
                else return dbUnicodeBlocks[a];
                return -1
        }
};
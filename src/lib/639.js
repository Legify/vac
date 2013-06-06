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

var _639 = module.exports = {
        gC2: function(lang) {
                return _639.n2c2[String(lang).toLowerCase()] || null;
        },

        gC3: function(lang) {
                return _639.n2c3[String(lang).toLowerCase()] || null;
        },

        gN2: function(c) {
                return _639.c22n[String(c).toLowerCase()] || null;
        },

        gN3: function(c) {
                return _639.c32n[String(c).toLowerCase()] || null;
        },

        n2c2: {
                'albanian': 'sq',
                'arabic': 'ar',
                'azeri': 'az',
                'bengali': 'bn',
                'bulgarian': 'bg',
                'cebuano': null,
                'croatian': 'hr',
                'czech': 'cs',
                'danish': 'da',
                'dutch': 'nl',
                'english': 'en',
                'estonian': 'et',
                'farsi': 'fa',
                'finnish': 'fi',
                'french': 'fr',
                'german': 'de',
                'hausa': 'ha',
                'hawaiian': null,
                'hindi': 'hi',
                'hungarian': 'hu',
                'icelandic': 'is',
                'indonesian': 'id',
                'italian': 'it',
                'kazakh': 'kk',
                'kyrgyz': 'ky',
                'latin': 'la',
                'latvian': 'lv',
                'lithuanian': 'lt',
                'macedonian': 'mk',
                'mongolian': 'mn',
                'nepali': 'ne',
                'norwegian': 'no',
                'pashto': 'ps',
                'pidgin': null,
                'polish': 'pl',
                'portuguese': 'pt',
                'romanian': 'ro',
                'russian': 'ru',
                'serbian': 'sr',
                'slovak': 'sk',
                'slovene': 'sl',
                'somali': 'so',
                'spanish': 'es',
                'swahili': 'sw',
                'swedish': 'sv',
                'tagalog': 'tl',
                'turkish': 'tr',
                'ukrainian': 'uk',
                'urdu': 'ur',
                'uzbek': 'uz',
                'vietnamese': 'vi',
                'welsh': 'cy'
        },

        n2c3: {
                'albanian': 'sqi',
                'arabic': 'ara',
                'azeri': 'aze',
                'bengali': 'ben',
                'bulgarian': 'bul',
                'cebuano': 'ceb',
                'croatian': 'hrv',
                'czech': 'ces',
                'danish': 'dan',
                'dutch': 'nld',
                'english': 'eng',
                'estonian': 'est',
                'farsi': 'fas',
                'finnish': 'fin',
                'french': 'fra',
                'german': 'deu',
                'hausa': 'hau',
                'hawaiian': 'haw',
                'hindi': 'hin',
                'hungarian': 'hun',
                'icelandic': 'isl',
                'indonesian': 'ind',
                'italian': 'ita',
                'kazakh': 'kaz',
                'kyrgyz': 'kir',
                'latin': 'lat',
                'latvian': 'lav',
                'lithuanian': 'lit',
                'macedonian': 'mkd',
                'mongolian': 'mon',
                'nepali': 'nep',
                'norwegian': 'nor',
                'pashto': 'pus',
                'pidgin': 'crp',
                'polish': 'pol',
                'portuguese': 'por',
                'romanian': 'ron',
                'russian': 'rus',
                'serbian': 'srp',
                'slovak': 'slk',
                'slovene': 'slv',
                'somali': 'som',
                'spanish': 'spa',
                'swahili': 'swa',
                'swedish': 'swe',
                'tagalog': 'tgl',
                'turkish': 'tur',
                'ukrainian': 'ukr',
                'urdu': 'urd',
                'uzbek': 'uzb',
                'vietnamese': 'vie',
                'welsh': 'cym'
        },
        c22n: {
                'ar': 'arabic',
                'az': 'azeri',
                'bg': 'bulgarian',
                'bn': 'bengali',
                'cs': 'czech',
                'cy': 'welsh',
                'da': 'danish',
                'de': 'german',
                'en': 'english',
                'es': 'spanish',
                'et': 'estonian',
                'fa': 'farsi',
                'fi': 'finnish',
                'fr': 'french',
                'ha': 'hausa',
                'hi': 'hindi',
                'hr': 'croatian',
                'hu': 'hungarian',
                'id': 'indonesian',
                'is': 'icelandic',
                'it': 'italian',
                'kk': 'kazakh',
                'ky': 'kyrgyz',
                'la': 'latin',
                'lt': 'lithuanian',
                'lv': 'latvian',
                'mk': 'macedonian',
                'mn': 'mongolian',
                'ne': 'nepali',
                'nl': 'dutch',
                'no': 'norwegian',
                'pl': 'polish',
                'ps': 'pashto',
                'pt': 'portuguese',
                'ro': 'romanian',
                'ru': 'russian',
                'sk': 'slovak',
                'sl': 'slovene',
                'so': 'somali',
                'sq': 'albanian',
                'sr': 'serbian',
                'sv': 'swedish',
                'sw': 'swahili',
                'tl': 'tagalog',
                'tr': 'turkish',
                'uk': 'ukrainian',
                'ur': 'urdu',
                'uz': 'uzbek',
                'vi': 'vietnamese'
        },

        c32n: {
                'ara': 'arabic',
                'aze': 'azeri',
                'ben': 'bengali',
                'bul': 'bulgarian',
                'ceb': 'cebuano',
                'ces': 'czech',
                'crp': 'pidgin',
                'cym': 'welsh',
                'dan': 'danish',
                'deu': 'german',
                'eng': 'english',
                'est': 'estonian',
                'fas': 'farsi',
                'fin': 'finnish',
                'fra': 'french',
                'hau': 'hausa',
                'haw': 'hawaiian',
                'hin': 'hindi',
                'hrv': 'croatian',
                'hun': 'hungarian',
                'ind': 'indonesian',
                'isl': 'icelandic',
                'ita': 'italian',
                'kaz': 'kazakh',
                'kir': 'kyrgyz',
                'lat': 'latin',
                'lav': 'latvian',
                'lit': 'lithuanian',
                'mkd': 'macedonian',
                'mon': 'mongolian',
                'nep': 'nepali',
                'nld': 'dutch',
                'nor': 'norwegian',
                'pol': 'polish',
                'por': 'portuguese',
                'pus': 'pashto',
                'rom': 'romanian',
                'rus': 'russian',
                'slk': 'slovak',
                'slv': 'slovene',
                'som': 'somali',
                'spa': 'spanish',
                'sqi': 'albanian',
                'srp': 'serbian',
                'swa': 'swahili',
                'swe': 'swedish',
                'tgl': 'tagalog',
                'tur': 'turkish',
                'ukr': 'ukrainian',
                'urd': 'urdu',
                'uzb': 'uzbek',
                'vie': 'vietnamese'
        }
};
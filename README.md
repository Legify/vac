Vac
===

A language detection library named after the hindu goddess of communications and words Vāc.

Issues [![Build Status](https://travis-ci.org/Legify/vac.png)](https://travis-ci.org/Legify/vac)
------------

Feel free to open an issue if you think anything specific to this fork should be discussed. PRs are welcome.

Installation
------------

  `npm install vac`

Usage
------------

        var vac = require('vac');

        // default: english, iso2: en, iso3: eng
                vac.languageType = "iso2";

        // ( text, max (=maximum returned matches), treshold (=float lt 1; will omit any match < treshold) )
        vac.detect("A language detection library named after the hindu goddess of communications and words", 1, .3)
                // = { en: 0.34011904761904754 }

        // Usuallly, any value above .3 is a good match.

License
------------

Copyright (c) 2013 by Legify UG. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

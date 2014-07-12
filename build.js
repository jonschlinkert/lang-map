/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var languages = require('language-map');

var obj = {};
for (var lang in languages) {
  var key = lang.toLowerCase();
  obj[key] = languages[lang].extensions.map(function (ext) {
    return ext.replace(/\./, '');
  });
}

fs.writeFileSync('lang.json', JSON.stringify(obj, null, 2));
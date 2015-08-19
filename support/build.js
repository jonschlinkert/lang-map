/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var languages = require('language-map');

function resolve(fp) {
  return path.join(__dirname, '../lib/', fp);
}

function generate(languages) {
  var inverted = {}, exts = {};
  var lang = {};

  for (var language in languages) {
    var key = language.toLowerCase();
    var extensions = languages[language].extensions;
    if (!extensions) continue;

    exts[key] = extensions.map(function (ext) {
      ext = ext.charAt(0 === '.') ? ext.slice(1) : ext;
      lang[ext] = lang[ext] || [];
      lang[ext].push(key);
      return ext;
    });
  }

  var res = {};
  res.exts = JSON.stringify(exts, null, 2);
  res.lang = JSON.stringify(lang, null, 2);
  return res;
}

var mappings = generate(languages);

fs.writeFileSync(resolve('lang.json'), mappings.lang);
fs.writeFileSync(resolve('exts.json'), mappings.exts);
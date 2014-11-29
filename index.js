/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var languages = module.exports = require('./lang.json');
var keys = Object.keys(languages);


function language(ext) {
  if (ext[0] === '.') {
    ext = ext.slice(1);
  }

  var len = keys.length;
  var i = 0;

  if (languages.hasOwnProperty(ext)) {
    return ext;
  }

  while (i < len) {
    var key = keys[i++];
    var langs = languages[key];
    if (key === ext) {
      return key;
    }

    if (langs.indexOf(ext) !== -1) {
      return key;
    }
  }
}

function extension(lang) {
  lang = lang.toLowerCase();
  return languages[lang] || lang;
}


languages.lang = language;
languages.ext = extension;
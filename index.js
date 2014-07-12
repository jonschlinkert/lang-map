/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var languages = require('./lang.json');


module.exports = function (extension) {
  extension = extension.replace(/\./, '');
  for (var lang in languages) {
    var ext = languages[lang];
    if (ext.indexOf(extension) !== -1) {
      return lang;
    }
  }
  return null;
};

module.exports.ext = function (lang) {
  lang = lang.toLowerCase();
  return languages[lang];
};


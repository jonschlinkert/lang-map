/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var languages = require('./lang.json');

/**
 * Expose languages module
 */

module.exports = languages;

/**
 * Get the list of extensions mapped to the
 * given `lang`
 *
 * @param  {String} `lang`
 * @return {String}
 */

languages.ext = function extension(lang) {
  lang = lang.toLowerCase();
  return languages.hasOwnProperty(lang)
    ? languages[lang]
    : lang;
};

/**
 * Get the language mapped to the given `ext`
 *
 * @param  {String} `ext`
 * @return {String}
 */

languages.lang = function lang(ext) {
  if (ext[0] === '.') ext = ext.slice(1);
  if (languages.hasOwnProperty(ext)) {
    return ext;
  }

  var keys = Object.keys(languages);
  var len = keys.length;
  var i = 0;

  while (i < len) {
    var key = keys[i++];
    if (key === ext) {
      return key;
    }

    var langs = languages[key];
    if (langs.indexOf(ext) !== -1) {
      return key;
    }
  }
};

/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

// Lazy-load and cache extensions and languages
function map() {
  var cache = {};
  if (!cache.extensions) cache.extensions = require('./lib/exts.json');
  if (!cache.languages) cache.languages = require('./lib/lang.json');
  return cache;
}

/**
 * Get the list of extensions mapped to the given `language`
 *
 * @param  {String} `language`
 * @return {Array}
 */

map.extensions = function extensions(lang) {
  lang = normalize(lang);
  var langs = map().languages;
  var exts = map().extensions;
  return exts[lang] || exts[langs[lang]] || [lang];
};

/**
 * Get the languages mapped to the given `ext`
 *
 * @param  {String} `ext`
 * @return {String}
 */

map.languages = function languages(ext) {
  ext = normalize(ext);
  var langs = map().languages;
  var exts = map().extensions;
  return langs[ext] || langs[exts[ext]] || [ext];
};

/**
 * Normalize the given language or extension
 */

function normalize(str) {
  if (str.charAt(0) === '.') {
    str = str.slice(1);
  }
  return str.toLowerCase();
}

/**
 * Expose `langMap`
 */

module.exports = map;

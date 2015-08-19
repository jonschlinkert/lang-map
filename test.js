/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var map = require('./');
var assert = require('assert');

function containEqual(a, b) {
  var len = a.length;
  while (len--) if (!~b.indexOf(a[len])) return false;
  return true;
}

describe('lang-map', function () {
  it('should return the full list of languages.', function () {
    var languages = map().languages;
    assert.equal(typeof languages, 'object');
  });

  it('should return the extensions matching the given language.', function () {
    assert(containEqual(['asciidoc', 'adoc', 'asc'], map.extensions('asciidoc')));
    assert(containEqual(['py','gyp','lmi','pyde','pyp','pyt','pyw','wsgi','xpy'], map.extensions('python')));
    assert(containEqual(['md','markdown','mkd','mkdn','mkdown','ron'], map.extensions('markdown')));
  });

  it('should return the language matching the given extension.', function () {
    assert.deepEqual(map.languages('.md'), ['markdown']);
    assert.deepEqual(map.languages('markdown'), ['markdown']);
    assert.deepEqual(map.languages('md'), ['markdown']);
    assert.deepEqual(map.languages('mkd'), ['markdown']);
    assert.deepEqual(map.languages('ron'), ['markdown']);
    assert.deepEqual(map.languages('py'), ['python']);
    assert.deepEqual(map.languages('js'), ['javascript']);
    assert.deepEqual(map.languages('hbs'), ['handlebars']);
    assert.deepEqual(map.languages('.js'), ['javascript']);
  });
});
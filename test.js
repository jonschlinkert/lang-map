/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var languages = require('./');
var assert = require('assert');

describe('lang-map', function () {

  it('should return the full list of languages.', function () {
    assert.equal(typeof languages, 'object');
  });

  it('should return the language matching the given extension.', function () {
    assert.equal(languages.lang('js'), 'javascript');
    assert.equal(languages.lang('.js'), 'javascript');
    assert.equal(languages.lang('py'), 'python');
  });

  it('should return the extensions matching the given language.', function () {
    assert.deepEqual(languages.ext('asciidoc'), ["asciidoc", "adoc", "asc"]);
    assert.deepEqual(languages.ext('python'), ["py", "gyp", "lmi", "pyde", "pyt", "pyw", "wsgi", "xpy"]);
  });
});
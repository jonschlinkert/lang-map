/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var language = require('./');
var assert = require('assert');

describe('lang-map', function () {
  it('should return the language matching the given extension.', function () {
    assert.equal(language('js'), 'javascript');
    assert.equal(language('.js'), 'javascript');
    assert.equal(language('py'), 'python');
  });

  it('should return the extensions matching the given language.', function () {
    assert.deepEqual(language.ext('asciidoc'), ["asciidoc", "adoc", "asc"]);
    assert.deepEqual(language.ext('python'), ["py", "gyp", "lmi", "pyde", "pyt", "pyw", "wsgi", "xpy"]);
  });
});
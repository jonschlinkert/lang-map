/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var languages = require('./');
var assert = require('assert');

describe('lang-map', function () {

  it('should return the full list of languages.', function () {
    assert.equal(typeof languages, 'object');
  });

  it('should return the extensions matching the given language.', function () {
    assert.deepEqual(languages.ext('asciidoc'), ['asciidoc', 'adoc', 'asc']);
    assert.deepEqual(languages.ext('python'), ['py', 'gyp', 'lmi', 'pyde', 'pyp', 'pyt', 'pyw', 'wsgi', 'xpy']);
    assert.deepEqual(languages.ext('markdown'), ['md','markdown','mkd','mkdn','mkdown','ron']);
  });

  it('should return the language matching the given extension.', function () {
    assert.equal(languages.lang('.md'), 'markdown');
    assert.equal(languages.lang('md'), 'markdown');
    assert.equal(languages.lang('mkd'), 'markdown');
    assert.equal(languages.lang('ron'), 'markdown');
    assert.equal(languages.lang('py'), 'python');
    assert.equal(languages.lang('js'), 'javascript');
    assert.equal(languages.lang('hbs'), 'handlebars');
    assert.equal(languages.lang('.js'), 'javascript');
  });
});
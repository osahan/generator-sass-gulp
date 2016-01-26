'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-sass-gulp:app', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true, force: true })
      .withPrompts({
        appName: 'sass-test-project',
        version: '1.1.1',
        description: 'test project',
        author: 'osahan'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'README.md',
      'package.json'
    ]);
  });
});

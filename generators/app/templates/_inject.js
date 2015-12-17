'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();

var inject = function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
};

gulp.task('inject', ['scripts', 'styles'], inject);
gulp.task('inject:build', ['scripts', 'styles:build'], inject);

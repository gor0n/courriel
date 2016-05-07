'use strict';

// ==================================================
// Load modules
// ==================================================

var gulp        = require('gulp'),
    fileinclude = require('gulp-file-include'),
    inlineCss   = require('gulp-inline-css');

// ==================================================
// Load configurations
// ==================================================

var paths = require('../configs/paths');

// ==================================================
// Tasks
// ==================================================

gulp.task('template:copy', function() {
  return gulp.src(paths.src.templates + '*.html')
    .pipe(gulp.dest(paths.dist.templates));
});

gulp.task('template', ['template:copy'], function() {
  return gulp.src(paths.dist.templates + '*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@root'
    }))
    .pipe(inlineCss({
      applyWidthAttributes: true,
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest(paths.dist.templates));
});

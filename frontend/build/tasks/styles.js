'use strict';

// ==================================================
// Load modules
// ==================================================

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    del             = require('del'),
    gutil           = require('gulp-util'),
    notify          = require('gulp-notify');

// ==================================================
// Load configurations
// ==================================================

var paths         = require('../configs/paths'),
    project       = require('../configs/project'),
    notifications = require('../configs/notifications');

// ==================================================
// Tasks
// ==================================================

gulp.task('styles', function() {
  return gulp.src(paths.src.styles + '**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .on('error', notifications.enabled ? notify.onError({
      sound: notifications.mute ? false : notifications.soundEr,
      message: function(file) {
        project.hasError = true;
        return file.file.split("/").pop() + ' failed SASS compilation';
      }
    }) : function() { gutil.noop(); })
    .pipe(gulp.dest(paths.dist.styles));
});

gulp.task('styles:clean', function () {
  return del(paths.dist.styles);
});

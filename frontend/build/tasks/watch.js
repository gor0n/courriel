'use strict';

// ==================================================
// Load modules
// ==================================================

var gulp   = require('gulp'),
    notify = require('gulp-notify');

// ==================================================
// Load configurations
// ==================================================

var paths         = require('../configs/paths'),
    project       = require('../configs/project'),
    notifications = require('../configs/notifications');

// ==================================================
// Tasks
// ==================================================

gulp.task('watch', function() {
  // Images
  if (styles.enabled) {
    gulp.watch(paths.src.images + '**/*.{'+ images.extensions +'}', ['images', function() {
      if (notifications.enabled) {
        gulp.src('.').pipe(notify({
          sound: notifications.mute ? false : notifications.sound,
          icon: './node_modules/gulp-notify/assets/gulp.png',
          message: 'Images copied',
        }));
      }
    }]);
  }

  // Styles
  gulp.watch(paths.src.styles + '**/*.scss',  function() {
    runSequence('styles', 'template', 'styles:clean', function() {
      if (notifications.enabled && !project.hasError) {
        gulp.src('.').pipe(notify({
          sound: notifications.mute ? false : notifications.sound,
          icon: './node_modules/gulp-notify/assets/gulp.png',
          message: 'SASS files compiled',
        }));
      }

      project.hasError = false;  // reinit variable before next watch task
    });
  });

  // Template
  gulp.watch(paths.src.templates + '*.html',  function() {
    runSequence('styles', 'template', 'styles:clean', function() {
      if (notifications.enabled && !project.hasError) {
        gulp.src('.').pipe(notify({
          sound: notifications.mute ? false : notifications.sound,
          icon: './node_modules/gulp-notify/assets/gulp.png',
          message: 'Template generated',
        }));
      }

      project.hasError = false;  // reinit variable before next watch task
    });
  });
});

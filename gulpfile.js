'use strict';

// ==================================================
// Load modules
// ==================================================

var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    notify      = require('gulp-notify');

// ==================================================
// Load configurations
// ==================================================

var build = './frontend/build/';

var paths         = require(build + 'configs/paths'),
    project       = require(build + 'configs/project'),
    notifications = require(build + 'configs/notifications');

// ==================================================
// Individual tasks
// ==================================================

require(build + 'tasks/images');
require(build + 'tasks/styles');
require(build + 'tasks/templates');

// ==================================================
// Bundle tasks
// ==================================================

gulp.task('default', ['images'], function() {
  runSequence('styles', 'template', 'styles:clean', function() {
    if (!project.hasError && notifications.enabled) {
      gulp.src('.').pipe(notify({
        sound: notifications.mute ? false : notifications.sound,
        icon: './node_modules/gulp-notify/assets/gulp.png',
        message: 'Dev tasks completed with success'
      }));
    }
  });
});

require(build + 'tasks/watch');
require(build + 'tasks/live');

'use strict';

// ==================================================
// Load modules
// ==================================================

var gulp       = require('gulp'),
    livereload = require('gulp-livereload'),
    notify     = require('gulp-notify');

// ==================================================
// Load configurations
// ==================================================

var paths         = require('../configs/paths'),
    notifications = require('../configs/notifications');

// ==================================================
// Tasks
// ==================================================

gulp.task('live', ['watch'], function() {
  gulp.watch(paths.dist.templates + '*.html', function(file) {
    var filename = file.path.split("/").pop();

    livereload.changed(filename);

    if (notifications.enabled) {
      gulp.src('.').pipe(notify({
        sound: notifications.mute ? false : notifications.sound,
        icon: './node_modules/gulp-notify/assets/gulp.png',
        message: filename + ' reloaded',
      }));
    }
  });

  livereload.listen();
});

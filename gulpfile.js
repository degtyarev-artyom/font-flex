const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const gulp_browser_sync = require('browser-sync').create();
const gulp_del = require('del');
const gulp_notify = require('gulp-notify');
const gulp_plumber = require('gulp-plumber');

function html() {
  return gulp.src(`./src/font-flex/index.html`)
    .pipe(gulp_plumber({
      errorHandler: gulp_notify.onError(function (error) {
        return {
          title: 'html',
          message: error.message
        }
      })
    }))
    .pipe(gulp.dest('./dist'));
}

function reload() {
  gulp_browser_sync.reload();
}

function styles() {
  return gulp.src(`./src/font-flex/index.scss`)
    .pipe(gulp_plumber({
      errorHandler: gulp_notify.onError(function (error) {
        return {
          title: 'styles',
          message: error.message
        }
      })
    }))
    .pipe(gulp_sass())
    .pipe(gulp.dest('./dist'))
    .pipe(gulp_browser_sync.stream());
}

function del() {
  return gulp_del('./dist');
}

gulp.task('build', gulp.series(del, gulp.parallel(html, styles)));

gulp.task('watch', function() {

  gulp_browser_sync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false
  });

  gulp.watch(`./src/font-flex/index.html}`).on('change', gulp.series(html, reload));
  gulp.watch(`./src/font-flex/index.scss`).on('change', gulp.series(styles));

});

gulp.task('dev', gulp.series('build', 'watch'));

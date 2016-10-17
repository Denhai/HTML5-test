var gulp = require('gulp')
var sass = require('gulp-sass')
var bs = require('browser-sync')
var uncss = require('gulp-uncss');

var paths = {
  html: 'src/**/*.html',
  styles: 'src/styles/**/*.scss',
  scripts: 'src/scripts/**/*.js'
}

gulp.task('browser-sync', ['html', 'styles'], function () {
  bs({
    server: {
      baseDir: "./dist"
    }
  })
})

gulp.task('bs-reload', function () {
  bs.reload()
})

gulp.task('styles', function () {
  gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(bs.reload({ stream: true }))
})

gulp.task('html', function() {
  gulp.src(paths.html)
    .pipe(gulp.dest('dist'))
    .pipe(bs.reload({ stream: true }))
})

gulp.task('uncss', function() {
  gulp.src('dist/**/*.css')
  .pipe(uncss({
    html: ['dist/**/*.html']
  }))
  .pipe(gulp.dest('dist'))
})

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(paths.styles, ['styles'])
  // gulp.watch(paths.scripts, ['scripts'])
  gulp.watch(paths.html, ['html'])
})
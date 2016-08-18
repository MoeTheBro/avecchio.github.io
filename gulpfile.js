var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');
var jshint = require('gulp-jshint');
var scsslint = require('gulp-scss-lint');
var sasslint = require('gulp-sass-lint');
var csslint = require('gulp-csslint')

gulp.task('coffee-lint', function() {
  gulp.src([
    './assets/coffee/*.coffee',
  ]).pipe(coffeelint())
    .pipe(coffeelint.reporter())
});

gulp.task('js-lint', function() {
  return gulp.src([
    './assets/js/*.js',
  ]).pipe(jshint());
});

gulp.task('scss-lint', function() {
  return gulp.src([
    './assets/css/*.scss',
    './_sass/*.scss'
  ]).pipe(scsslint());
});

gulp.task('sass-lint', function() {
  gulp.src([
    './assets/css/*.sass',
    './_sass/*.sass'
  ]).pipe(sasslint());
});

gulp.task('css-lint', function() {
  gulp.src([
    './assets/css/*.css',
  ]).pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('watch', function() {
  gulp.watch(['./assets/coffee/*.coffee'],['coffee-lint']);
  gulp.watch(['./assets/js/*.js','./lib/assets/javascripts/*.js'],['js-lint']);
  gulp.watch(['./assets/css/*.scss'],['scss-lint']);
  gulp.watch(['./assets/css/*.sass', './_sass/*.sass'],['sass-lint']);
  gulp.watch(['./assets/css/*.css'],['css-lint']);
  gulp.watch(['./config/*.yml'],['yaml']);
});

gulp.task('default', ['watch', 'coffee-lint', 'js-lint', 'scss-lint', 'sass-lint', 'css-lint']);

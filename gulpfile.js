
var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

gulp.task('watch', function (cb) {
    gulp.watch('./styl/*',  ['styl']);

});
gulp.task('styl', function () {
    gulp.src('./styl/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./bulid/css/'))
        .pipe(rename({
            suffix: '.min'//给文件添加.min后缀
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./bulid/css/'))

});





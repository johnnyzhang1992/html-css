/**
 * Created by zq199 on 2016/10/9.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),//livereload
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload');
var $ = require('gulp-load-plugins')();
var htmlSrc = '**/*.html';
// var htmlDist = 'dist';
var cssSrc = '**/*.css';
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});
//定义html任务
gulp.task('html', function () {
    gulp.src(htmlSrc)
        .pipe(connect.reload());
});
//定义css任务
gulp.task('css', function () {
    gulp.src(cssSrc)
        .pipe(connect.reload());
});
gulp.task('serve',  function() {

    browserSync.init({
        server: "./css-layout/flex/"
    });

    gulp.watch("/css-layout/flex/index.html").on('change', browserSync.reload)
});
gulp.task('watch', function () {
    livereload.listen(); //要在这里调用listen()方法
    // $.watch(htmlSrc)
    //     .pipe($.connect.reload());
    // $.watch(cssSrc)
    //     .pipe($.connect.reload());
    gulp.watch('**/*.html', ['html']).on('change', browserSync.reload);
    gulp.watch('**/*.css', ['css']).on('change', browserSync.reload);
});
gulp.task('default',['watch','serve']);
'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins')();

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false })
        .pipe($.clean());
});

gulp.task('build', ['clean'], function() {
    gulp.start();
});

//监听
gulp.task("watch", function () {
    gulp.watch("app/css/**/*.css");
    gulp.watch(['app/js/**/*.js','app/app.js']);
    gulp.watch("app/**/*.html").on("change",browserSync.reload);
});

//服务
gulp.task('server',["watch"], function() {
    var files = [
        './app/**/*.html',
        './app/css/**/*.css',
        './app/partials/**/*.html',
        './app/js/**/*.js',
        './app/app.js'
    ];
    browserSync.init(files,{
        proxy: "localhost:63342/angular-gulp-bower/app"

    });

});

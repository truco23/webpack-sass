var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

const src = {
    index: './src',
    sass: './src/scss/**/*.scss',
    css: './src/_css',
    controller: './src/controllers',
    model: './src/models',
    view: './src/views',
    main: './src/main'
};

const watch = {
    html: src.index + '/**/*.html',
    sass: src.sass,
    css: src.css + '/**/*.css',
    controller: src.controller + '/**/*.js',
    model: src.model + '/**/*.js',
    view: src.view + '/**/*.js',
    main: src.main + '/**/*.js',
}


gulp.task('sass', function () {
    return gulp.src(src.sass)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(src.css));
});

gulp.task('serve', ['compile'], function() {

    browserSync.init({
        server: src.index
    });

    gulp.watch(src.sass, ['sass'])
    gulp.watch([
        watch.html,
        watch.css,
        watch.controller,
        watch.model,
        watch.view,
        watch.main,
    ]).on('change', browserSync.reload);
});

gulp.task('compile', ['sass'])
gulp.task('default', ['serve']);
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var pixrem = require('gulp-pixrem');
var merge = require('merge-stream');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;

gulp.task('sass', function() {
       var fromSass = gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // convert sass to css with gulp-sass
        .pipe(plumber()) // Checks for errors
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(pixrem())
        .pipe(gulp.dest('app/css'));
       var toConcat = gulp.src([ 
                'app/css/normalize.css',
                'app/css/main.css'])
        .pipe(concat("styles.css"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
                stream: true
        }));

        return merge(fromSass, toConcat);
});


gulp.task('scripts', function() {
       var fromUncompressed = gulp.src('app/js/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('app/js'));
       var toConcat = gulp.src([ 
                'app/js/main.js'])
        .pipe(concat("main.js"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
        return merge(fromUncompressed, toConcat);
});


gulp.task('browserSync', function() {
        browserSync.init({
                server: {
                        baseDir: 'app'
                },
        })
})


gulp.task('watch', ['browserSync', 'sass'], function(){
        gulp.watch('app/scss/**/*.scss', ['sass']);
        gulp.watch('app/**/*.html', browserSync.reload);
        gulp.watch('app/js/**/*.js', browserSync.reload);
})

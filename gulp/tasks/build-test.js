var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var build_test = function () {
    return browserify()
        .add('./spec/main.ts')
        .plugin(tsify)
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(source('test.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./spec/compiled/'));
}

gulp.task('build-test', build_test);
module.exports = build_test;
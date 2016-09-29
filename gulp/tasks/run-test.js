var gulp = require('gulp');
const mocha = require('gulp-mocha');

var run_test = function () {
    return gulp.src('spec/compiled/test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}))
        .once('error', function () {
            process.exit();
        })
        .once('end', function () {

            process.exit();
        })
}

gulp.task('run-test', run_test);
module.exports =  run_test;
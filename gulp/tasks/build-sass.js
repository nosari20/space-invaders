var gulp = require('gulp'); 
var source = require('vinyl-source-stream');  
var sass = require('gulp-sass');

var build_sass = function(file){    
    return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
}

gulp.task('build-sass', build_sass);
module.exports = build_sass;
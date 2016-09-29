var gulp = require('gulp'); 
var source = require('vinyl-source-stream');  

var copy = function(){
    
    return gulp.src(['src/**/*.html', 'src/resources/**/*.*'])
          .pipe(gulp.dest('./build'));
}

gulp.task('copyl', copy);
module.exports = copy;
var gulp = require('./gulp')([
    'build-ts',
    'build-sass',
    'copy',
    'live',
    'build-test',
    'run-test'
]);
 
/* Building */
gulp.task('build', ['build-ts', 'build-sass', 'copy']);
gulp.task('build:ts', ['build-ts']);
gulp.task('build:sass', ['build-sass']);


/*  Watching */
gulp.task('server', ['build'], function(){
    gulp.start('live');
});

gulp.task('watch', function(){
    ts_watcher = gulp.watch('src/**/*.ts', ['build-ts']);
    ts_watcher.on('change', function(event) {
        console.log('File [TypeScript]' + event.path + ' was ' + event.type + ', running tasks...');
    });
    copy_watcher = gulp.watch(['src/**/*.html', 'src/resources/**/*.*'],['copy']);
    copy_watcher.on('change', function(event) {
        console.log('File [HTML/Resources] ' + event.path + ' was ' + event.type + ', running tasks...');
    });
    sass_watcher = gulp.watch('src/**/*.scss',['build-sass']);
    sass_watcher.on('change', function(event) {
        console.log('File [SCSS] ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


/* Testing */
gulp.task('test:build', ['build-test']);

gulp.task('test', ['build-test'], function(){
    gulp.start('run-test');
});
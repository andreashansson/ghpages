var gulp = require("gulp");
var ghPages = require('gulp-gh-pages');

gulp.task('test', function() {

  console.log("dsf");
  // place code for your default task here
});

gulp.task('deploy', function() {
  return gulp.src('../ghpages/**/*')
    .pipe(ghPages());
});

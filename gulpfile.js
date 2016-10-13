var gulp = require("gulp");
var ghPages = require('gulp-gh-pages');

gulp.task('taskName', function() {

  console.log("hej");
  // place code for your default task here
});

gulp.task('deploy', function() {
  return gulp.src('../testFloat/**/*')
    .pipe(ghPages());
});

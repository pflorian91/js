// import `babel-polyfill`;

var gulp = require("gulp");
var babel = require("gulp-babel");
var polyfill = require("babel-polyfill");

gulp.task("default", function () {
  return gulp.src("js/*.js", polyfill)
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', ['default'], function () {

    gulp.watch("js/*.js", ['default']);

});

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

gulp.task('compress', function (cb) {
  pump([
      gulp.src('dist/state-odb.js'),
      uglify(),
      rename("state-odb.min.js"),
      gulp.dest("dist")
    ],
    cb
  );
});
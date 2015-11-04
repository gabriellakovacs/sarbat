// Gulpfile.js

var gulp = require("gulp"),
    // uglify = require("gulp-uglify"),
    // concat = require("gulp-concat"),
    sass = require('gulp-sass');
 

 //compile sass files
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 

//compile sass files on the go
gulp.task('sasswatch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


//concatenate and minify css files
gulp.task("minify", function() {
  return gulp.src("./src/css/*.css")
    .pipe(concat("all.css"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});

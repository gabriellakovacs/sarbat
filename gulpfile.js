// Gulpfile.js

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');
 

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
gulp.task("conmin", function() {
  return gulp.src("./css/*.css")
    .pipe(concat("all.css"))
    .pipe(uglify())
    .pipe(gulp.dest("./css/"));
});

//compress images
gulp.task("image", function() {
  return gulp.src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./img_compressed"));
});
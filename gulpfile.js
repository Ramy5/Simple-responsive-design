const autoPrefixer = require("gulp-autoprefixer");

let gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass")(require("sass")),
  prefix = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  notify = require("gulp-notify"),
  plumber = require("gulp-plumber"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  zip = require("gulp-zip"),
  livereload = require("gulp-livereload");


// Html tasks 
gulp.task("html", async function () {
  return gulp.src("./project/pug/index.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("dist/client"))
    .pipe(notify("Html file has been changed🙋"))
    .pipe(livereload())
})

// css tasks 
gulp.task("css", async function () {
  return gulp.src("./project/css/main.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(prefix("last 2 version"))
    .pipe(concat("all.css")) // this is not important
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/client/css"))
    .pipe(notify("Css file has been changed🙋"))
})

// js task 
gulp.task("js", async function () {
  return gulp.src("./project/js/*.js")
    .pipe(plumber())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/client/js"))
    .pipe(notify("Js file hass been changed🙋"))
})

// compress task 
gulp.task("compress", async function () {
  return gulp.src("dist/client/**/*.*")
    .pipe(zip("Site.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Congratilation you project compressed"))
})

// watch task 
gulp.task("watch", async function () {
  livereload.listen()
  gulp.watch("project/pug/**/*.pug", gulp.series("html"))
  gulp.watch("project/css/**/*.scss", gulp.series("css"))
  gulp.watch("project/js/*.js", gulp.series("js"))
  gulp.watch("dist/client/**/*.*", gulp.series("compress"))
})

// default task
gulp.task("default", gulp.series("watch"));
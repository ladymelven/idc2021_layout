const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

const server = require('browser-sync').create();
const plumber = require('gulp-plumber');
const del = require('del');

const path = {
  build: {
    html: "build/",
    js: "build/",
    style: "build/",
    images: "build/assets/images/",
    fonts: "build/assets/fonts/",
    svg: "build/assets/svg/",
    data: "build/data/",
    libs: "build/libs/"
  },
  src: {
    html: "src/*.html",
    js: "src/js/*.js",
    style: "src/scss/*.scss",
    images: "src/assets/images/**/*.*",
    fonts: "src/assets/fonts/*.*",
    data: "src/data/*.json",
    svg: "src/assets/svg/*.*"
  },
  watch: {
    html: "src/*.html",
    js: "src/js/*.js",
    style: "src/scss/**/*.scss",
    images: "src/assets/images/**/*.*",
    fonts: "src/assets/fonts/*.*",
    data: "src/data/*.json",
    svg: "src/assets/svg/*.svg"
  },
  clean: "build"
};

function clean() {
  return del(path.build.html);
}

function html(cb) {
  gulp
    .src(path.src.html)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.html));
  cb();
}

function style(cb) {
  gulp
    .src(path.src.style)
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(path.build.style));
  cb();
}

function buildStyle(cb) {
  gulp
    .src(path.src.style)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ browsers: ["last 5 version", "IE 11", "> 1%"] }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.build.style));
  cb();
}

function js(cb) {
  gulp
    .src(path.src.js)
    .pipe(gulp.dest(path.build.js));
  cb();
}

function buildJs(cb) {
  gulp
    .src(path.src.js)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(terser())
    .pipe(rename('stories.js'))
    .pipe(gulp.dest(path.build.js));
  cb();
}

function images(cb) {
  gulp
    .src(path.src.images)
    .pipe(gulp.dest(path.build.images));
  cb();
}

function fonts(cb) {
  gulp
    .src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
  cb();
}

function data(cb) {
  gulp
    .src(path.src.data)
    .pipe(gulp.dest(path.build.data));
  cb();
}

function svg(cb) {
  gulp
    .src(path.src.svg)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(path.build.svg));
  cb();
}

module.exports.default = gulp.series(clean, gulp.parallel(html, style, js, images, fonts, data, svg));
module.exports.build = gulp.series(clean, gulp.parallel(html, buildStyle, buildJs, images, fonts, data, svg));
module.exports.serve = function serve () {
  server.init({
    server: path.build.html,
    watch: true,
    notify: false,
    open: true,
    cors: true,
    port: 8080
  });

  gulp.series(clean, gulp.parallel(html, style, js, images, fonts, svg));

  gulp.watch(path.watch.html, gulp.series(html)).on('change', server.reload);
  gulp.watch(path.watch.style, gulp.series(style)).on('change', server.reload);
  gulp.watch(path.watch.js, gulp.series(js)).on('change', server.reload);
  gulp.watch(path.watch.images, gulp.series(images)).on('change', server.reload);
  gulp.watch(path.watch.fonts, gulp.series(fonts)).on('change', server.reload);
  gulp.watch(path.watch.data, gulp.series(data)).on('change', server.reload);
  gulp.watch(path.watch.svg, gulp.series(svg)).on('change', server.reload);
}

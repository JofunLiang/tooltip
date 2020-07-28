const { src, dest, watch, series, parallel } = require("gulp");
const clean = require('gulp-clean')
const miniCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const connect = require('gulp-connect')

function cleanDist () {
  return src('dist', {read: false, allowEmpty: true})
    .pipe(clean())
}

const sources = 'src/tooltip.scss'

function minifyCSS () {
  return src(sources)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest("dist"))
    .pipe(miniCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest("dist"))
    .pipe(connect.reload());
}

function webServer () {
  return connect.server({
    livereload: true,
    port: 3000,
    index: 'example.html'
  })
}

function watcher () {
  return watch(['src/*.scss'], series(minifyCSS));
}

exports.default = series(cleanDist, parallel(webServer, minifyCSS, watcher));
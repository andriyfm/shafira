const { series, parallel, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const clean = require('gulp-clean')
const image = require('gulp-image')

function cleanTask () {
  return src('dist/*', { read: false })
    .pipe(clean())
}

function pugTask () {
  return src([
    'src/pug/index.pug',
  ])
  .pipe(pug({ pretty: true }))
  .pipe(dest('dist/'))
}

function sassTask () {
  return src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(dest('dist/css/'))
}

function scssTask () {
  return src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css/'))
}

function imageTask () {
  return src('src/img/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
    }))
    .pipe(dest('dist/img/'))
}

function cssTask () {
  return src('src/css/**/*.css')
    .pipe(dest('dist/css/'))
}

function jsTask () {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js/'))
}

function watchTask () {
  return watch(
    [
      'src/sass/**/*.sass',
      'src/sass/**/*.scss',
      'src/pug/index.pug'
    ],
    series(cleanTask, imageTask, pugTask, sassTask, jsTask, cssTask, scssTask)
  )
}

exports.watch = series(watchTask)
exports.default = series(cleanTask, imageTask, pugTask, sassTask, jsTask, cssTask, scssTask)
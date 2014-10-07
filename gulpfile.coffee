gulp = require 'gulp'
plumber = require 'gulp-plumber'
coffee = require 'gulp-coffee'
coffeelint = require 'gulp-coffeelint'
notify = require 'gulp-notify'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
bump = require 'gulp-bump'
browserSync = require 'browser-sync'

gulp.task 'coffee', ->
  gulp.src 'src/chopper.coffee'
    .pipe plumber(
      errorHandler: notify.onError '<%= error.message %>'
    )
    .pipe coffeelint()
    .pipe coffee()
    .pipe gulp.dest('dest/')

gulp.task 'serve', ->
  browserSync(
    server:
      baseDir: './'
      index: 'demo/index.html'
  )

gulp.task 'default', ['serve'], ->
  gulp.watch ['src/chopper.coffee'], ['coffee', browserSync.reload]
  return

gulp.task 'major', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'major'
    )
    .pipe gulp.dest('./')
  return

gulp.task 'minor', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'minor'
    )
    .pipe gulp.dest('./')
  return

gulp.task 'patch', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'patch'
    )
    .pipe gulp.dest('./')
  return

gulp.task 'build', ->
  gulp.src 'src/chopper.coffee'
    .pipe coffeelint()
    .pipe coffee()
    .pipe uglify(
      preserveComments: 'some'
    )
    .pipe rename(
      extname: '.min.js'
    )
    .pipe gulp.dest('dest/')
  return

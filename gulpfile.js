var gulp = require('gulp')
var livereload = require('gulp-livereload')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('live', ['build', 'server'])
gulp.task('dev', ['build', 'server', 'watch'])
gulp.task('build', ['browserify'])
gulp.task('default', ['dev'])

gulp.task('server', function() {
  var express = require('express')
  var app = express()

  app
    .use(express.static(__dirname + '/app'))
    .listen(8080, function() {
      console.log('server listening on port 8080') 
    })
})

gulp.task('watch', function() {
  var server = livereload()

  gulp.watch(['app/**', 'app/js/**']).on('change', function(file) {
    server.changed(file.path)
  })
})

gulp.task('browserify', function() {
  var bundler = watchify('./src/main.js')

  bundler.transform('brfs')

  bundler.on('update', rebundle)

  function rebundle() {
    return bundler
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./app/js'))
  }

  return rebundle()
})

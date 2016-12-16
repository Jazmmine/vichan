//traer dependencias
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('vicchan', function () {
  gulp.src(['assets/js/verndors/*.js','assets/js/*.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
});


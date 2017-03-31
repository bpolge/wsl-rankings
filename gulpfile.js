const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const util = require('gulp-util');

const dirs = {
  build: './dist',
  bower: './bower_components',
};

const files = {
  js: './server/**/*.js',
  htm: './frontend/**/+(*.html|*.htm)',
};

const config = {
  output: dirs.build,
  www: `${dirs.build}/public`,
};

gulp.task('html', () => {
  gulp.src(files.htm)
  .pipe(gulp.dest(config.www));
});

gulp.task('libs', () => {
  gulp.src(`${dirs.bower}/**`)
  .pipe(gulp.dest(`${config.www}/lib`));
});

gulp.task('babel', () => {
  gulp.src(files.js)
  .pipe(babel().on('error', util.log))
  .pipe(gulp.dest(config.output));
});

gulp.task('clean', () => {
  gulp.src(config.output, { read: false })
  .pipe(clean());
});

gulp.task('www', ['html', 'libs']);
gulp.task('server', ['babel']);
gulp.task('build', ['www', 'server']);
gulp.task('default', ['build']);

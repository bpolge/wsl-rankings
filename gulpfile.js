const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

const dirs = {
  build: './dist',
  bower: './bower_components',
};

const files = {
  js: './server/**/*.js',
  scripts: './frontend/**/*.js',
  css: './frontend/sass/**/*.scss',
  htm: './frontend/**/+(*.html|*.htm)',
};

const config = {
  output: dirs.build,
  www: `${dirs.build}/public`,
};

gulp.task('css', () => {
  gulp.src(files.css)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(`${config.www}/css`));
});

gulp.task('html', () => {
  gulp.src(files.htm)
  .pipe(gulp.dest(config.www));
});

gulp.task('libs', () => {
  gulp.src(`${dirs.bower}/**`)
  .pipe(gulp.dest(`${config.www}/lib`));
});

gulp.task('scripts', () => {
  gulp.src(files.scripts)
  .pipe(gulp.dest(config.www));
});

gulp.task('babel', () => {
  gulp.src(files.js)
  .pipe(babel())
  .pipe(gulp.dest(config.output));
});

gulp.task('clean', () => {
  gulp.src(config.buildDir, { read: false })
  .pipe(clean());
});

gulp.task('www', ['html', 'css', 'scripts', 'libs']);
gulp.task('server', ['babel']);
gulp.task('build', ['www', 'server']);
gulp.task('default', ['build']);

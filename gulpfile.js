const del = require('del');
const gulp = require('gulp');
const lambda = require('gulp-awslambda');
const webpack = require('webpack-stream');
const zip = require('gulp-zip');

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('package', ['clean'], () => {
  return gulp.src('lamda/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['package'], () => {
  return gulp.src('dist/lamda.js')
    .pipe(zip('lamda.zip'))
    .pipe(lambda({
      FunctionName: 'php-react-lamda-example',
      Role: 'arn:aws:iam::993918587179:role/lamda',
      Handler: 'lamda.handler'
    }, {
      region: 'eu-west-1',
    }));
});

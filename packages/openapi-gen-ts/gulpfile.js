const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');
const through = require('through2');
const tsconfig = require('../tsconfig.base.json');

function clean() {
  return del('./lib/**');
}

function buildCJS() {
  return gulp
    .src(['lib/es/**/*.js'])
    .pipe(
      babel({
        plugins: [
          '@babel/plugin-proposal-dynamic-import',
          '@babel/plugin-transform-modules-commonjs',
        ],
      }),
    )
    .pipe(gulp.dest('lib/cjs/'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
  });
  return gulp.src(['src/**/*.{ts,tsx}']).pipe(tsProject).pipe(gulp.dest('lib/es/'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ESNext',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'])
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'));
}

function copyMetaFiles() {
  gulp.src(['./README.md', 'LICENSE', './bin*/**', './docs*/**']).pipe(gulp.dest('./lib/'));
  return gulp
    .src(['./src/gen*/custom-data-template*/**'])
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'));
}

function generateCliPackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        parsed.main = parsed.main.replace('./lib/', './');
        parsed.module = parsed.module.replace('./lib/', './');
        parsed.types = parsed.types.replace('./lib/', './');
        parsed.typings = parsed.typings.replace('./lib/', './');
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      }),
    )
    .pipe(gulp.dest('lib/'));
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  buildDeclaration,
  copyMetaFiles,
  generateCliPackageJSON,
);

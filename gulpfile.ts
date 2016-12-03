/// <reference path="./typings/index.d.ts" />

"use strict";

const gulp = require("gulp"),
    del = require("del"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    gulpTypings = require("gulp-typings");

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Build Express server
 */
gulp.task('build:server', function () {
    var tsProject = tsc.createProject('src/server/tsconfig.json');
    var tsResult = gulp.src('src/server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: __dirname + '/src/server' }))
        .pipe(gulp.dest('dist/server'));
});

gulp.task('build:client', function () {
    var tsProject = tsc.createProject('src/client/tsconfig.json');
    var tsResult = gulp.src('src/client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/client'));
});

gulp.task('build:shared', function () {
    var tsProject = tsc.createProject('src/shared/tsconfig.json');
    var tsResult = gulp.src('src/shared/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/shared'));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/client/app/**/*.ts")
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report());
});

/**
 * Copy all resources that are not TypeScript files into build directory. e.g. index.html, css, images
 */
gulp.task("clientResources", () => {
    return gulp.src(["src/client/**/*", "!**/*.ts", "!src/client/typings", "!src/client/typings/**", "!src/client/*.json"])
        .pipe(gulp.dest("dist/client"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/*',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'systemjs/dist/system.src.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("dist/client/libs"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("css", () => {
    return gulp.src([
        'bootstrap/dist/css/*',
        'bootstrap/dist/fonts/*',
        'bootstrap/dist/js/*'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("dist/client/css"));
});


/**
 * Install typings for server and client.
 */
gulp.task("installTypings", function () {
    var stream = gulp.src(["./src/server/typings.json", "./src/client/typings.json"])
        .pipe(gulpTypings(null)); //will install all typingsfiles in pipeline.
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});

/**
 * Start the express server with nodemon
 */
gulp.task('start', function () {
    nodemon({
        script: 'dist/server/index.js'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['tslint']
    })
        .on('restart', function () {
            console.log('restarted!');
        });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build", function (callback) {
    runSequence('clean', 'build:shared', 'build:server', 'build:client', 'clientResources', 'libs', 'css', callback);
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/client/**/*.ts"], ['build:client']).on('change', function (e) {
        console.log(`TypeScript file ${e.path} has been changed. Compiling.`);
    });

    gulp.watch(["src/client/**/*.html", "src/client/**/*.css"], ['clientResources']).on('change', function (e) {
        console.log(`Resource file ${e.path} has been changed. Updating.`);
    });

    gulp.watch(["src/shared/**/*.ts"], ['build:shared']).on('change', function (e) {
        console.log(`Typescript file ${e.path} has changed. Compiling.`);
    });

    gulp.watch(["src/server/**/*.ts"], ['build:server']).on('change', function (e) {
        console.log(`TypeScript file ${e.path} has been changed. Compiling.`);
    });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build", function (callback) {
    runSequence('clean', 'build:shared', 'build:server', 'build:client', 'clientResources', 'libs', 'css', callback);
});

gulp.task('default', function () {
    runSequence('build:shared', 'build:server', 'build:client', 'clientResources', 'libs', 'css', 'watch', 'start');
});

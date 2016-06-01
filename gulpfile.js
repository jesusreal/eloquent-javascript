var gulp = require('gulp'),
	changed = require('gulp-changed'),
	connect = require('gulp-connect'),
	browserify = require("browserify"),
	babelify = require("babelify"),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence'),
	eslint = require('gulp-eslint'),
    nightwatch = require('gulp-nightwatch'),
    server = require('karma').Server,
	less = require('gulp-less');

var DEST = "./dist";


// Watch changes
gulp.task('watch', function(){
	gulp.watch(['./app/**/*.html'], ['reloadHtml']);
	gulp.watch(['./app/**/*.js'], ['reloadJs']);
	gulp.watch(['./app/**/*.css'], ['reloadStyles']);
});


// Reload
gulp.task('reloadHtml', ['buildHtml'], function() {
	return gulp.src(DEST+'/**/*.html')
		.pipe(connect.reload());
});

gulp.task('reloadJs', ['buildJs'], function() {
   	return gulp.src(DEST+'/src/**/*.js')
		 .pipe(connect.reload());
});

gulp.task('reloadStyles', ['buildStyles'], function() {
	return gulp.src(DEST+'/styles/*.css')
		.pipe(connect.reload());
});


// Build
gulp.task('buildJs', function() {
	return gulp.src('./app/src/**/*.js', {base: 'app'})
		.pipe(changed(DEST))
		.pipe(gulp.dest(DEST));
	// return browserify({
	// 	entries: './app/src/app.module.js',
	// 	debug: true
	// })
	// .transform(babelify)
	// .bundle()
	// .pipe(source('bundle.js'))
 //  	.pipe(buffer())
	// .pipe(sourcemaps.init({loadMaps: true}))
 //  	.pipe(sourcemaps.write('./'))
	// .pipe(gulp.dest(DEST+'/src'));
});

gulp.task("buildHtml", function () {
	return gulp.src(['./app/**/*.html'])
		.pipe(changed(DEST))
		.pipe(gulp.dest(DEST));
});

gulp.task("buildStyles", function () {
	return gulp.src('./app/styles/**/*.css', {base: 'app'})
		.pipe(less())
		.pipe(changed(DEST))
		.pipe(gulp.dest(DEST));
});


// Server
gulp.task('connect', function() {
  connect.server({
    root: DEST,
    livereload: true
  });
});


// Quality check

gulp.task('lint', function () {
	return gulp.src(['app/src/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('unitTest', function() {
    var runner =  new Server({
        configFile: 'test/karma.conf.js',
        singleRun: true
    }, done);
    return gulp.src(unitTestFiles)
        .pipe(runner.start())
        .on('error', function(err) {
              // Make sure failed tests cause gulp to exit non-zero
              throw err;
        });
});

gulp.task('e2eTest', function(){
  return gulp.src('test/e2e-nightwatch/*.js')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json'
      // cliArgs: [ '--env chrome', '--tag sandbox' ]
    }));
});


// Bundle tasks

gulp.task('qualityCheck', function() {
	runSequence("lint", "unitTest", "e2eTest");
});

gulp.task('build', ['buildJs', 'buildHtml', 'buildStyles']);

gulp.task('reload', ['reloadJs', 'reloadHtml', 'reloadStyles']);

gulp.task('default', ['watch'], function() {
	runSequence('build', 'connect');
});

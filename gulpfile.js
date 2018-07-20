//https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js#

var gulp = require('gulp');
var gUtil = require('gulp-util');
var nodemon = require('gulp-nodemon');

gulp.task('dev', function() {
	gUtil.log('Gulp dev started');

//Start and watch server.js. Watch any extra files added in the future.
	var stream = nodemon({
		script: 'server.js'
	});
	stream
		.on('restart', function(){
			gUtil.log('Restarted server.js');
		})
		.on('crash', function(){
			gUtil.log('Server.js crashed!\n');
			stream.emit('restart', 10);
		})
});


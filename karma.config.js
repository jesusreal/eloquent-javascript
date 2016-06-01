module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'src/**/*.js',
      'spec/**/*.js'
    ],

 
	exclude: [
    ],

    preprocessors: {
		'src/**/*.js': ['browserify'],
		'spec/**/*.js': ['browserify']
	},

	browserify: {
		debug: true,
		transform: [ 'babelify' ]
	},  

    frameworks: ['browserify', 'jasmine'],

    browsers : ['Chrome'],

    /*plugins : [
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-jasmine'
	],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }*/

  });
};
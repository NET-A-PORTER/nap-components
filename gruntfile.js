'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-vulcanize');

	grunt.initConfig({

	  	vulcanize: {
		    default: {
				options: {
					excludes: {
						imports: [
							'polymer.html'
						]
			        },
			        'strip-excludes': false,
			        inline: true,
			        strip: true
				},
				files: {
					'components.min.html': 'components.html'
				}
		    },
		}

	});

	grunt.registerTask('default', [
		'vulcanize'
	]);
};
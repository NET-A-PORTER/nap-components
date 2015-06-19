'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-vulcanize');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('web-component-tester');

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
		},

		replace: {
		    bowerPath: {
			    src: ['components.min.html'],
			    overwrite: true,
			    replacements: [{
			        from: /href="bower_components\//g,
			        to: 'href="../'
			    }]
		    }
		}

	});

	grunt.registerTask('default', [
		'vulcanize',
		'replace'
	]);
};
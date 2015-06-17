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
					'components/components.min.html': 'components/components.html'
				}
		    },
		}

	});

	grunt.registerTask('move', function(){
		grunt.file.copy('components/components.min.html', 'components.min.html');
		grunt.file.delete('components/components.min.html');
	})

	grunt.registerTask('default', [
		'vulcanize',
		'move'
	])
};
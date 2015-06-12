'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-filerev');

	grunt.initConfig({

		clean: {
			elements: ['elements*.html']
		},
	  
	  	concat: {
		    dist: {
		      	src: [
		      		'polymer.html',
		      		'components/nap-product.html'
	  			],
		      	dest: 'elements.html',
		    },
	  	},

	  	filerev: {
	  		options: {
	            algorithm: 'md5',
	            length: 16
			},
			elements: {
	            src: ['elements.html'],
	            dest: '.'
			}
	  	}

	});

	grunt.registerTask('default', [
		'clean',
		'concat',
		'filerev'
	])
};
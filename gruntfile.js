'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({

	  	concat: {
		    dist: {
		      	src: [
		      		'polymer.html',
		      		'components/nap-product.html'
	  			],
		      	dest: 'elements.html',
		    },
	  	},

	});

	grunt.registerTask('default', [
		'concat'
	])
};
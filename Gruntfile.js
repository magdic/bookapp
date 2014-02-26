'use strict';

/*global module:false*/
module.exports = function(grunt) {

	var config = {
    app:  'app',
    dist: 'dist',
    test: '.'
  };

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.

    sass: {
	      dist: {
	        files: {
	          'app/css/base.css' : 'bower_components/skeleton-sass/sass/base.scss',
	          'app/css/skeleton.css' : 'bower_components/skeleton-sass/sass/skeleton.scss',
	          'app/css/custom.css' : 'bower_components/skeleton-sass/sass/custom.scss'
	          //'css/fonts.css' : 'sass/fonts.scss',
	        }
	      }
	    },

	'bower-install': {

		  target: {

		    // Point to the files that should be updated when
		    // you run `grunt bower-install`
		    src: ['index.html'],

		    // Optional:
		    // ---------
		    cwd: '',
		    ignorePath: '',
		    exclude: [],
		    fileTypes: {}
		  }
		},

	cssmin: {
	  	minify: {
	    expand: true,
	    cwd: 'app/css',
	    src: ['*.css', '!*.min.css'],
	    dest: 'app/css/',
	    ext: '.min.css'
  		}
	}



  });

   grunt.loadNpmTasks('grunt-bower-install');
   grunt.loadNpmTasks('grunt-contrib-sass');   
   grunt.loadNpmTasks('grunt-contrib-cssmin');


   grunt.registerTask('build', ['sass','bower-install', 'cssmin']);



};
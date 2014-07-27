module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Start a server for running tests
    connect : {
      test : {
        options : {
          port: 9000,
          livereload: true
        }
      }
    },

    // Re-run tests on any change to source or spec files
    watch : {
      test : {
        files : [
          'Gruntfile.js',
          'src/**/*.js',
          'spec/**/*.js'
        ],
        options: {
          atBegin: true,
        },
        tasks: ['jasmine']
      }
    },

    // Run Jasmine tests on the connect server
    jasmine : {
      src : 'src/**/*.js',
      options : {
        version: '2.0.1',
        specs: 'spec/**/*.js',
        host: 'http://0.0.0.0:9000'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect:test', 'watch:test']);

};

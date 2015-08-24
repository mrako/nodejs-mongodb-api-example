'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    express: {
      options: {
        background: true,
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: './server.js'
        }
      }
    },
    watch: {
      express: {
        files:  [ '*.js', 'app/**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>/offers'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/**/*.js',
        'db/**/*.js'
      ]
    },
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('serve', ['express:dev', 'watch']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerTask('test:e2e', ['karma:e2e']);
};

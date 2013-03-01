/*global module:false*/
var fs = require('fs'),
    jshintOptions = JSON.parse(fs.readFileSync('./.jshintrc'));

module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
  grunt.initConfig({

    lint: {
      files: [
        'grunt.js',
        'app/**/*.js',
        'test/app/**/*.js'
      ]
    },

    watch: {
      files: ['<config:lint.files>', 'assets/css/app/*.less'],
      tasks: 'lint'
    },

    jshint: {
      options: jshintOptions
    },

    shell: {
      test: {
        command: 'node node_modules/testem/testem.js ci',
        stdout: true
      }
    },

    requirejs: {
      js: {
        almond: true,
        replaceRequireScript: [{
          files: ['prod/app/index.html'],
          module: 'main',
          modulePath: 'prod/app/main'
        }],
        insertRequire: ['main'],
        baseUrl: "app/",
        optimizeCss: "none",
        optimize: "uglify",
        uglify: {
          "beautify": false,
          "no-dead-code": true,
          "reserved-names": "require"
        },
        inlineText: true,
        useStrict: true,
        findNestedDependencies: true,
        optimizeAllPluginResources: true,
        paths: {
          lib:           '../lib/',
          app:           '.'
        },
        out: "prod/app/main.js",
        name: "main"
      }
    }

  });
  // Default task.
  grunt.registerTask('test', 'lint shell:test');
  grunt.registerTask('build', 'lint requirejs:js');

};

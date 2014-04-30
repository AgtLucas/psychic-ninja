'use strict';

module.exports = function (grunt) {

  grunt.registerTask('compass', function () {
    require('./tasks/compass.js')(grunt);
  })

};
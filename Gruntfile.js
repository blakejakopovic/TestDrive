module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
          platforms: ['osx'],
          buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
          version: '0.10.1'
      },
      src: ['./resources/public/**/*'] // Path to node-webkit app
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);
};

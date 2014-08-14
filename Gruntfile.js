module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
          platforms: ['osx'],
          buildDir: './build', // Where the build version of my node-webkit app is saved
          version: '0.10.2',
          mac_icns: 'resources/dashboard-512.icns'
      },
      src: ['./resources/public/**/*'] // Path to node-webkit app
    },

    clean: {
      build: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('build', ['clean', 'nodewebkit']);
  grunt.registerTask('default', ['build']);
};

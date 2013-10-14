module.exports = function(grunt) {

  grunt.initConfig({

    // serve documentation
    connect: {
      doc: {
        options: {
          port: 8111,
          hostname: '*',
          base: 'tmp/doc',
          directory: 'tmp/doc',
          open: true,
          livereload: 35830
        }
      }
    },
    watch: {
      src: {
        files: ['dspace.js', 'models/*.js', 'collections/*.js'],
        tasks: ['jshint']
      },
      doc: {
        files: 'README.md',
        tasks:['markdown'],
        options: {
          livereload: 35830
        },
      }
    },
    markdown: {
      doc: {
        files: [
          {
            src: 'README.md',
            dest: 'tmp/doc/README.md.html'
          }
        ]
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'dspace.js', 'models/*.js', 'collections/*.js']
    }
  });


  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'watch:src']);
  grunt.registerTask('doc', ['markdown', 'connect:doc', 'watch:doc']);

};

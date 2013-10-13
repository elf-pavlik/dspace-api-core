module.exports = function(grunt) {

  grunt.initConfig({

    // serve documentation
    connect: {
      doc: {
        options: {
          port: 8011,
          hostname: "*",
          base: 'tmp',
          livereload: 35830
        }
      }
    },
    watch: {
      src: {
        files: "src/**",
        tasks: ["jshint"]
      },
      doc: {
        files: "README.md",
        tasks:["markdown"],
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
            dest: 'tmp/README.md.html'
          }
        ]
      }
    },
    jshint: {
      all: ["Gruntfile.js", "src/**"]
    },
    browserify: {
      test: {
        src: ['models/*.js', 'collections/*.js'],
        dest: 'test/bundle.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['markdown', 'jshint', 'browserify', 'connect', 'watch']);

};

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['style.less', "style.css"],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },
    less: {
      development: {
        options: {
          paths: [""]
        },
        files: {
          "style.css" : "style.less"
        },
      }
    }
  })
};

module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {              
                    sassDir: 'css',
                    cssDir: 'css'
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },
        watch: {
            css: {
                files: ['css/*.scss', 'css/base/*.scss', 'css/components/*.scss', 'css/layout/*.scss', 'css/sections/*.scss'],
                tasks: ['compass', 'cssmin'],
            },
        },
        
    });

    // 4. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 5. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
};

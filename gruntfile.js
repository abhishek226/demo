module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            js: ['min-safe/js/*', 'min/*.js'],
            css: ['min-safe/css/*', 'min/*.css', 'assets/css/demo.css']
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            js: {
                files: {
                    './min-safe/js/ss1.js': ['./assets/js/*.js'],
                    './min-safe/js/ss2.js': [
                        './app/app.route.js',
                        './app/components/app.ctrl.js',
                        './app/shared/ssDirectives.js',
                        './app/shared/ssFilters.js',
                        './app/shared/ssServices.js',
                        './app/shared/config.service.js'
                    ]
                }
            }
        },
        sass: {
            dist: {                              // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './assets/css/demo.css': './assets/scss/demo.scss'      // 'destination': 'source'
                }
            }
        },
        concat: {
            js: {
                src: ['./min-safe/js/*.js'],
                dest: './min/app.js'
            },
            css: {
                src: ['./assets/css/*.css'],
                dest: './min-safe/css/demo.css'
            }
        },
        uglify: {
            options:{
            },
            js: {
                src: ['./min/app.js'],
                dest: './min/app.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            files: {                
                expand: true,
                cwd: './min-safe/css/',
                src: ['demo.css'],
                dest: './min/',
                ext: '.min.css'
            }
        },
        watch: {
            css: {
                files: ['./assets/scss/demo.scss'],
                tasks : ['clean:css', 'sass', 'concat:css', 'cssmin']
            },
            js: {
                files: [
                    './assets/js/*.js',
                    './app/app.route.js',
                    './app/components/app.ctrl.js',
                    './app/shared/ssDirectives.js',
                    './app/shared/ssFilters.js',
                    './app/shared/ssServices.js',
                    './app/shared/config.service.js'
                ],
                tasks : ['clean:js', 'ngAnnotate', 'concat:js', 'uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //register grunt default task
    grunt.registerTask('default', ['clean', 'ngAnnotate', 'sass', 'concat', 'uglify', 'cssmin', 'watch']);
};
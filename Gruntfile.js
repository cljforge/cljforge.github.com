module.exports = function (grunt) {

    var js = function (file) {
        return 'assets/js/' + file + '.js';
    };

    var ctrl = function (ctrl) {
        return js('application/controllers/' + ctrl);
    };

    var css = 'assets/css/';

    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    js('application/features'),
                    js('application'),
                    ctrl('mainCtrl'),
                    ctrl('wrapperCtrl'),
                    ctrl('headerCtrl'),
                    js('routes')],
                dest: 'dist/built.js'
            }
        },
        uglify :{
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/scss',
                    src: ['*.scss'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },
        watch:{
            scripts: {
                files: ['**/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false
                }
            },
            scss : {
                files : ['assets/css/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat','uglify']);
    grunt.registerTask('js', ['concat','uglify']);
};
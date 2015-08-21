/****************************************************************************************
*
*  @author Erin Bamberger
*  @version (.1)
*  @date (2015)
*
*  1.) COMMAND LINE REFERENCES ___________ @cmdLineRef
*  2.) CONCATENATION _____________________ @concatenation
*  3.) MINIFY/OPTIMIZE ___________________ @minifyOptimize
*  4.) BACKGROUND TASKS __________________ @backgroundTasks
*  5.) REGISTER TASKS ____________________ @registerTasks
*
*****************************************************************************************/

/*************************************************
 * COMMAND LINE REFERENCES             @cmdLineRef
 *
 * $ grunt 
 *   - runs default task which creates a lightweight
 *     static server
 *
 * $ grunt dev 
 *   - run while developing, this compiles LESS
 *
 * $ grunt test
 *   - this will run the tasks for test
 *
 * $ grunt production
 *   - this will run the tasks for production
 *
 *************************************************/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                src: 'public/<%= pkg.name %>.js', 
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        /*************************************************
         * MINIFY/OPTIMIZE                 @minifyOptimize
         *************************************************/
        cssmin: {
            production: {
                files: {
                    'production/css/animate.css': ['public/css/animate.css'], 
                    'production/css/base.css': ['public/css/base.css'],
                    'production/css/bootstrap.3.3.4.min.css': ['public/css/bootstrap.3.3.4.min.css'],
                    'production/css/font-awesome.css': ['public/css/font-awesome.css'],
                    'production/css/main.css': ['public/css/main.css'], 
                    'production/css/views.css': ['public/css/views.css']
                }
            },
            test: {
                files: {
                    'test/css/animate.css': ['public/css/animate.css'], 
                    'test/css/base.css': ['public/css/base.css'],
                    'test/css/bootstrap.3.3.4.min.css': ['public/css/bootstrap.3.3.4.min.css'],
                    'test/css/font-awesome.css': ['public/css/font-awesome.css'],
                    'test/css/main.css': ['public/css/main.css'], 
                    'test/css/views.css': ['public/css/views.css']
                }
            }
        },
        htmlmin: {
            production: {                                     
                options: {                                
                    removeComments: true,
                    collapseWhitespace: true,
                    removeEmptyAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeRedundantAttributes: true,
                    collapseBooleanAttributes: true
                },
                files: {                                 
                    'production/index.html': ['public/index.html'],                                   
                    'production/404.html': ['public/404.html'],   
                    'production/views/404-sidebar.html': ['public/views/404-sidebar.html'],
                    'production/views/contact.html': ['public/views/contact.html'],
                    'production/views/home.html': ['public/views/home.html'],
                    'production/views/resume.html': ['public/views/resume.html'],
                    'production/views/sidebar.html': ['public/views/sidebar.html'],
                    'production/views/work.html': ['public/views/work.html'],
                    'production/views/resume-content/about-me.html': ['public/views/resume-content/about-me.html'],
                    'production/views/resume-content/assignment-history.html': ['public/views/resume-content/assignment-history.html'],
                    'production/views/resume-content/key-skills.html': ['public/views/resume-content/key-skills.html'],
                    'production/views/resume-content/professional-experience.html': ['public/views/resume-content/professional-experience.html'],
                    'production/views/resume-content/recognition.html': ['public/views/resume-content/recognition.html']
                }
            },
            test: {                                                                        
                files: {                                
                    'test/index.html': ['public/index.html'],                                   
                    'test/404.html': ['public/404.html'],   
                    'test/views/404-sidebar.html': ['public/views/404-sidebar.html'],
                    'test/views/contact.html': ['public/views/contact.html'],
                    'test/views/home.html': ['public/views/home.html'],
                    'test/views/resume.html': ['public/views/resume.html'],
                    'test/views/sidebar.html': ['public/views/sidebar.html'],
                    'test/views/work.html': ['public/views/work.html'],
                    'test/views/resume-content/about-me.html': ['public/views/resume-content/about-me.html'],
                    'test/views/resume-content/assignment-history.html': ['public/views/resume-content/assignment-history.html'],
                    'test/views/resume-content/key-skills.html': ['public/views/resume-content/key-skills.html'],
                    'test/views/resume-content/professional-experience.html': ['public/views/resume-content/professional-experience.html'],
                    'test/views/resume-content/recognition.html': ['public/views/resume-content/recognition.html']
                }
            }
        },
        uglify: {
            production: {
                files: [
                    //controllers
                    {src: 'public/js/controllers/404Ctrl.js', dest: 'production/js/controllers/404Ctrl.js'},
                    {src: 'public/js/controllers/contactCtrl.js', dest: 'production/js/controllers/contactCtrl.js'},
                    {src: 'public/js/controllers/index.js', dest: 'production/js/controllers/index.js'},
                    {src: 'public/js/controllers/mainCtrl.js', dest: 'production/js/controllers/mainCtrl.js'},
                    {src: 'public/js/controllers/module.js', dest: 'production/js/controllers/module.js'},
                    {src: 'public/js/controllers/sidebarCtrl.js', dest: 'production/js/controllers/sidebarCtrl.js'},
                    {src: 'public/js/controllers/workCtrl.js', dest: 'production/js/controllers/workCtrl.js'},
                    //directives
                    {src: 'public/js/directives/hoverAnimationDirective.js', dest: 'production/js/directives/hoverAnimationDirective.js'},
                    {src: 'public/js/directives/index.js', dest: 'production/js/directives/index.js'},
                    {src: 'public/js/directives/module.js', dest: 'production/js/directives/module.js'},
                    {src: 'public/js/directives/resizeDirective.js', dest: 'production/js/directives/resizeDirective.js'},
                    //factories
                    {src: 'public/js/factories/index.js', dest: 'production/js/factories/index.js'},
                    {src: 'public/js/factories/module.js', dest: 'production/js/factories/module.js'},
                    {src: 'public/js/factories/worksFactory.js', dest: 'production/js/factories/worksFactory.js'},
                    //lib
                    {src: 'public/js/lib/angular-ui-router.min.js', dest: 'production/js/lib/angular-ui-router.min.js'},
                    {src: 'public/js/lib/angular.min.js', dest: 'production/js/lib/angular.min.js'},
                    {src: 'public/js/lib/app.js', dest: 'production/js/lib/app.js'},
                    {src: 'public/js/lib/bootstrap-ie9.js', dest: 'production/js/lib/bootstrap-ie9.js'},
                    {src: 'public/js/lib/bootstrap.js', dest: 'production/js/lib/bootstrap.js'},
                    {src: 'public/js/lib/countdown-timer.js', dest: 'production/js/lib/countdown-timer.js'},
                    {src: 'public/js/lib/jquery-1.11.3.min.js', dest: 'production/js/lib/jquery-1.11.3.min.js'},
                    {src: 'public/js/lib/less.min.js', dest: 'production/js/lib/less.min.js'},
                    {src: 'public/js/lib/main-ie9.js', dest: 'production/js/lib/main-ie9.js'},
                    {src: 'public/js/lib/main.js', dest: 'production/js/lib/main.js'},
                    {src: 'public/js/lib/modernizr.2.8.3.min.js', dest: 'production/js/lib/modernizr.2.8.3.min.js'},
                    {src: 'public/js/lib/ng-polymer-elements.js', dest: 'production/js/lib/ng-polymer-elements.js'},
                    {src: 'public/js/lib/require.min.js', dest: 'production/js/lib/require.min.js'},
                    {src: 'public/js/lib/requirejs-domready.min.js', dest: 'production/js/lib/requirejs-domready.min.js'},
                    {src: 'public/js/lib/routes.js', dest: 'production/js/lib/routes.js'},
                    {src: 'public/js/lib/ui-bootstrap-0.13.0.min.js', dest: 'production/js/lib/ui-bootstrap-0.13.0.min.js'},
                    {src: 'public/js/lib/webcomponents.min.js', dest: 'production/js/lib/webcomponents.min.js'}
                ],
            },
            test: {
                files: [
                    //controllers
                    {src: 'public/js/controllers/404Ctrl.js', dest: 'test/js/controllers/404Ctrl.js'},
                    {src: 'public/js/controllers/contactCtrl.js', dest: 'test/js/controllers/contactCtrl.js'},
                    {src: 'public/js/controllers/index.js', dest: 'test/js/controllers/index.js'},
                    {src: 'public/js/controllers/mainCtrl.js', dest: 'test/js/controllers/mainCtrl.js'},
                    {src: 'public/js/controllers/module.js', dest: 'test/js/controllers/module.js'},
                    {src: 'public/js/controllers/sidebarCtrl.js', dest: 'test/js/controllers/sidebarCtrl.js'},
                    {src: 'public/js/controllers/workCtrl.js', dest: 'test/js/controllers/workCtrl.js'},
                    //directives
                    {src: 'public/js/directives/hoverAnimationDirective.js', dest: 'test/js/directives/hoverAnimationDirective.js'},
                    {src: 'public/js/directives/index.js', dest: 'test/js/directives/index.js'},
                    {src: 'public/js/directives/module.js', dest: 'test/js/directives/module.js'},
                    {src: 'public/js/directives/resizeDirective.js', dest: 'test/js/directives/resizeDirective.js'},
                    //factories
                    {src: 'public/js/factories/index.js', dest: 'test/js/factories/index.js'},
                    {src: 'public/js/factories/module.js', dest: 'test/js/factories/module.js'},
                    {src: 'public/js/factories/worksFactory.js', dest: 'test/js/factories/worksFactory.js'},
                    //lib
                    {src: 'public/js/lib/angular-ui-router.min.js', dest: 'test/js/lib/angular-ui-router.min.js'},
                    {src: 'public/js/lib/angular.min.js', dest: 'test/js/lib/angular.min.js'},
                    {src: 'public/js/lib/app.js', dest: 'test/js/lib/app.js'},
                    {src: 'public/js/lib/bootstrap-ie9.js', dest: 'test/js/lib/bootstrap-ie9.js'},
                    {src: 'public/js/lib/bootstrap.js', dest: 'test/js/lib/bootstrap.js'},
                    {src: 'public/js/lib/countdown-timer.js', dest: 'test/js/lib/countdown-timer.js'},
                    {src: 'public/js/lib/jquery-1.11.3.min.js', dest: 'test/js/lib/jquery-1.11.3.min.js'},
                    {src: 'public/js/lib/less.min.js', dest: 'test/js/lib/less.min.js'},
                    {src: 'public/js/lib/main-ie9.js', dest: 'test/js/lib/main-ie9.js'},
                    {src: 'public/js/lib/main.js', dest: 'test/js/lib/main.js'},
                    {src: 'public/js/lib/modernizr.2.8.3.min.js', dest: 'test/js/lib/modernizr.2.8.3.min.js'},
                    {src: 'public/js/lib/ng-polymer-elements.js', dest: 'test/js/lib/ng-polymer-elements.js'},
                    {src: 'public/js/lib/require.min.js', dest: 'test/js/lib/require.min.js'},
                    {src: 'public/js/lib/requirejs-domready.min.js', dest: 'test/js/lib/requirejs-domready.min.js'},
                    {src: 'public/js/lib/routes.js', dest: 'test/js/lib/routes.js'},
                    {src: 'public/js/lib/ui-bootstrap-0.13.0.min.js', dest: 'test/js/lib/ui-bootstrap-0.13.0.min.js'},
                    {src: 'public/js/lib/webcomponents.min.js', dest: 'test/js/lib/webcomponents.min.js'}
                ],
            }
        },
        imagemin: {
            production: {
                files: [{
                    expand: true,
                    cwd: 'public/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'production/images/'
                }],
                options: {
                    cache: false
                }
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'public/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'test/images/'
                }],
                options: {
                    cache: false
                }
            }
        },
        /*************************************************
         * BACKGROUND TASKS               @backgroundTasks
         *************************************************/
        less: {
            compile: {
                options : {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files : {
                    'public/css/main.css': 'public/less/main.less',
                    'public/css/views.css': 'public/less/views.less'
                }
            }
        },
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: '*',
                    base: 'public',
                    livereload: true,
                    open: true,
                    debug: true,
                    keepalive: true
                }
            }
        },
        watch: {
            files: ['public/**/*'],
            tasks: [],
            styles: {
                files: ['public/less/**/*.less'],
                tasks: ['less'],
            },
            options: {
                nospawn: true,
                livereload: true
            }
        }
    });
    /*************************************************
     * LOAD TASKS                           @loadTasks
     *************************************************/
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*************************************************
     * REGISTER TASKS                   @registerTasks
     *************************************************/
    grunt.registerTask('default',['connect']);
    grunt.registerTask('dev', ['less','watch']);
    grunt.registerTask('test',['cssmin:test','htmlmin:test','uglify:test','imagemin:test:png','imagemin:test:jpg','imagemin:test:gif']);
    grunt.registerTask('production',['cssmin:production','htmlmin:production','uglify:production','imagemin:production:png','imagemin:production:jpg','imagemin:production:gif']);
};
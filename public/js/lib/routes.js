 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./app'], function (app) {
 	'use strict';
 	return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
 		$urlRouterProvider.otherwise('/home');
 		$stateProvider
 		.state('home', {
 			url: '/home',
 			activetab: 'home',
 			views: {
 				'content': {
					templateUrl : './views/home.html'
 				},
 				'sidebar': {
 					templateUrl : './views/sidebar.html'
 				}
 			}
		})
 		.state('404', {
 			url: '/404',
 			activetab: '404',
 			views: {
 				'content': {
					templateUrl : './404.html'
 				},
 				'sidebar': {
 					templateUrl : './views/404-sidebar.html'
 				}
 			}
		})
		.state('work', {
			url: '/work',
 			activetab: 'work',
 			views: {
 				'content': {
					templateUrl : './views/work.html',
					controller  : 'workCtrl'
 				},
 				'sidebar': {
 					templateUrl : './views/sidebar.html'
 				}
 			}
		})
		.state('resume', {
			abstract: true,
 			activetab: 'resume',
 			views: {
 				'content': {
					templateUrl : './views/resume.html'
 				},
 				'sidebar': {
 					templateUrl : './views/sidebar.html'
 				}
 			}
		})
		.state('resume.about-me', {
			url: '/resume/about-me',
			parent: 'resume',
 			activetab: 'about-me',
 			views: {
 				'resume-content': {
					templateUrl : './views/resume-content/about-me.html'
 				}
 			}
		})
		.state('resume.key-skills', {
            url: '/key-skills',
			parent: 'resume',
 			activetab: 'key-skills',
 			views: {
 				'resume-content': {
					templateUrl : './views/resume-content/key-skills.html'
 				}
 			}
		})
		.state('resume.professional-experience', {
            url: '/professional-experience',
			parent: 'resume',
 			activetab: 'professional-experience',
 			views: {
 				'resume-content': {
					templateUrl : './views/resume-content/professional-experience.html'
 				}
 			}
		})
		.state('resume.assignment-history', {
            url: '/assignment-history',
			parent: 'resume',
 			activetab: 'assignment-history',
 			views: {
 				'resume-content': {
					templateUrl : './views/resume-content/assignment-history.html'
 				}
 			}
		})
		.state('resume.recognition', {
            url: '/recognition',
			parent: 'resume',
 			activetab: 'recognition',
 			views: {
 				'resume-content': {
					templateUrl : './views/resume-content/recognition.html'
 				}
 			}
		})
		.state('contact', {
			url: '/contact',
 			activetab: 'contact',
 			views: {
 				'content': {
					templateUrl : './views/contact.html',
					controller  : 'contactCtrl'
 				},
 				'sidebar': {
 					templateUrl : './views/sidebar.html'
 				}
 			}
		});
 	}]);
 });
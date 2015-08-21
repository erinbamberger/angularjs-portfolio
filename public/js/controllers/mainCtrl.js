 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
 	controllers.controller('mainCtrl', ['$scope','$rootScope','$state','$location','$window','$anchorScroll','$timeout', 
 		function ($scope,$rootScope,$state,$location,$window,$anchorScroll,$timeout) {
 		$scope.state = $state;
 		$scope.currentPath = $location.path();
 		$scope.regEx = /([/])+/g;
 		$scope.pageTitle = $scope.currentPath.replace($scope.regEx,'');
 		$scope.skyactiveInfo = false;
 		$scope.skillLevels = [
 			{ range: 'beginner' },
 			{ range: 'intermediate' },
 			{ range: 'advanced' }
 		];
 		// TODO: add Chart.js
        $scope.keySkills = [
        	{ name: 'ExpressJS', percent: '5%', level: 'low-level' },
        	{ name: 'MongoDB', percent: '10%', level: 'low-level' },
        	{ name: 'PHP', percent: '15%', level: 'low-level' },
        	{ name: 'NodeJS', percent: '25%', level: 'low-level' },
        	{ name: 'WAI-ARIA', percent: '35%', level: 'medium-level' },
        	{ name: 'JavaScript', percent: '45%', level: 'medium-level' },
        	{ name: 'Database Management', percent: '50%', level: 'medium-level' },
        	{ name: 'AngularJS', percent: '55%', level: 'medium-level' },
        	{ name: 'MySQL', percent: '65%', level: 'medium-level' },
        	{ name: 'jQuery', percent: '70%', level: 'high-level' },
        	{ name: 'LESS', percent: '70%', level: 'high-level' },
        	{ name: 'HTML5', percent: '70%', level: 'high-level' },
        	{ name: 'CSS3', percent: '75%', level: 'high-level' },
        	{ name: 'Bootstrap', percent: '85%', level: 'high-level' },
        	{ name: 'CSS', percent: '100%', level: 'high-level' },
        	{ name: 'HTML', percent: '100%', level: 'high-level' },
        	{ name: 'Responsive Web Development', percent: '100%', level: 'high-level' },
        	{ name: 'Cross-Browser Testing and Compatibility', percent: '100%', level: 'high-level' },
        	{ name: 'Interpreting Graphic Mockups in HTML/CSS/JavaScript', percent: '100%', level: 'high-level' }
        ];
 		//console welcome message
 		var msg1 = '%cWelcome to my website!\n';
 		var msg1CSS = 'font-size:1.25em;color:#e521b0;font-weight:bold;';
 		var msg2 = '%ctake a look around\n';
 		var msg2CSS = 'color:#ab10e5;font-size:1em;';
 		var msg3 = '%c( ͡° ͜ʖ ͡°)';
 		var msg3CSS = 'color:#000;font-size:1em;font-weight:bold;';
		console && console.log(msg1+msg2+msg3,msg1CSS,msg2CSS,msg3CSS);
		//end console welcome message
 		var win = angular.element($window);
		var rtime = new Date(1,1,2000,12,0,0);
		var timeout = false;
		var delta = 200;
		//anchor hash linking
		$scope.scrollTo = function(id) {
      		$location.hash(id);
      		$anchorScroll();
   		};
 		//menu toggle function
		$scope.toggleMenu = function () {
	 		$scope.slideMenu = !$scope.slideMenu; 
		 	$scope.slideNavBar = !$scope.slideNavBar;
		 	$scope.sidebarOpen = !$scope.sidebarOpen;
	 	};
		// catch when resize ends: when user is dragging
		// and dropping the entire browser instead of manually 
		// dragging the side/corner of browser for window resize
		win.bind('resize', function () {
		    rtime = new Date();
		    if (timeout === false) {
		        timeout = true;
		        setTimeout(resizeend, delta);
		    }
		    $scope.$apply();
		});
		function resizeend () {
		    if (new Date() - rtime < delta) {
		        setTimeout(resizeend, delta);
		    } else {
		        timeout = false;
			 	// rebuild the scrollbar
		  		$scope.$broadcast('rebuild:me');
		    }               
		};
 	}]);
 });
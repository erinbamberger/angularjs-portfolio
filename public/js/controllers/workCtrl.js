 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
 	controllers.controller('workCtrl', ['$scope','$rootScope','worksFactory','$modal','$log','$timeout', 
 		function ($scope,$rootScope,worksFactory,$modal,$log,$timeout) {
 		/**************************************
 		*  WORKS DATA SECTION                            
 		***************************************/
 		var promise = worksFactory.workDetails();
 		promise.then(function (data) {
 			$scope.workDetails = data;
 		});
 	}]);
 });
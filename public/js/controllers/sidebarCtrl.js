 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
 	controllers.controller('sidebarCtrl', ['$scope','$rootScope','$state','$location', function ($scope,$rootScope,$state,$location) {
 		$rootScope.$state = $state;
 		$scope.currentPath = $location.path();
 		$scope.regEx = /([/])+/g;
 		$scope.pageTitle = $scope.currentPath.replace($scope.regEx,'');
 	}]);
 });
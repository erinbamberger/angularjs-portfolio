 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
 	controllers.controller('404Ctrl', ['$scope','$state', function ($scope,$state) {
        $scope.$state = $state;
        $scope.goHome = function () {
        	$state.go('home');
        };
 	}]);
 });
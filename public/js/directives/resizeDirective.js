 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (directives) {
    'use strict';
    directives.directive('resize', ['$window', function ($window) {
        return function ($scope,element) {
            $scope.closeMobileMenu = function (el) {
                var activeClass = angular.element(document.querySelector('.active-menu'));
                var breadcrumb = angular.element(document.querySelector('#mobileHamburger'));
                if (activeClass.length) {
                    breadcrumb.triggerHandler('click');
                }
            };
            $scope.initializeWindowSize = function() {
                return $scope.windowWidth = $window.innerWidth;
            };
            $scope.initializeWindowSize();
            return angular.element($window).bind('resize', function() {
                $scope.initializeWindowSize();
                if ($scope.windowWidth > 1024) {
                    $scope.closeMobileMenu(element);
                }
                return $scope.$apply();
            });
        };
    }]);
 });
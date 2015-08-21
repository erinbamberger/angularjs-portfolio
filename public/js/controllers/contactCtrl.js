 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
 	controllers.controller('contactCtrl', ['$scope','$rootScope','$http','$log','$timeout','$state', 
        function ($scope,$rootScope,$http,$log,$timeout,$state) {
        $scope.message = 'Contact Me';
        $rootScope.resultMessage;
        $scope.formData;
        $scope.submitted = false; 
        $rootScope.sendingMail = false;
        $rootScope.showMsg = false;
        $scope.invalidEmail = false;
        // close overlay message
        $rootScope.closeMsg = function() {
            if ($scope.invalidEmail === true) {
                var elem = angular.element(document.querySelector('#contact-email input'));
                $scope.formData.inputEmail = '';
                elem.focus();
                $rootScope.showMsg = false;
            } else {
                $rootScope.showMsg = false;
                $state.go('contact', {}, {reload: true});
            }
        };
        // submit contact form
        $scope.submit = function(contactform) {
            $scope.submitted = true;
            $rootScope.sendingMail = true;
            if ($scope.contactform.$valid) {
                $http({
                    method  : 'POST',
                    url     : 'contact-form.php',
                    data    : $.param($scope.formData), 
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
                }).success(function(data,status,headers,config) {
                    if (data.success) { 
                        $scope.contactform.$setPristine();
                        $scope.contactForm = $scope.formData;
                        $rootScope.sendingMail = false;
                        $scope.result = true;
                        $rootScope.showMsg = true;
                        $scope.invalidEmail = false;
                        $rootScope.user = $scope.formData.inputName;
                        $rootScope.resultMessage = 'Thanks ' + $rootScope.user + ', we have received your message.';
                    } else {
                        $rootScope.sendingMail = false;
                        $scope.result = false;
                        $rootScope.showMsg = true;
                        $scope.invalidEmail = true;
                        $rootScope.resultMessage = 'Message could not be sent. The following email address must contain a valid domain.';
                        $rootScope.emailListed = $scope.formData.inputEmail;
                    }
                });
            } else {
                $rootScope.sendingMail = false;
                $scope.result = false;
                $rootScope.showMsg = true;
                $rootScope.resultMessage = 'Message failed to send. Please fill out all the fields.';
            }
        }
 	}]);
 });
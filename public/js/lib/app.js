 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define([
 	'angular',
 	'angular-ui-router',
 	'ui-bootstrap',
 	'../controllers/index',
 	'../directives/index',
 	'../factories/index'
 ], function (angular) {
 	'use strict';
 	return angular.module('app', [
 		'ui.router',
 		'ui.bootstrap',
 		'app.controllers',
 		'app.directives',
 		'app.factories'
 	]);
 });
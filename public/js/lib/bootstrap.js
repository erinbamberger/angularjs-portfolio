 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define([
 	'require',
 	'angular',
 	'app',
 	'routes'
 ], function (require,angular) {
 	'use strict';
 	require(['domReady!'], function (document) {
 		angular.bootstrap(wrap(document.body), ['app']);
 	});
 });
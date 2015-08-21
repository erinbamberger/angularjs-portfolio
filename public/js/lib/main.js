 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 require.config({
 	paths: {
 		'angular':'angular.min',
 		'angular-ui-router':'angular-ui-router.min',
 		'domReady':'requirejs-domready.min',
 		'ui-bootstrap':'ui-bootstrap-0.13.0.min'
 	},
 	shim: {
 		'angular': {
 			exports: 'angular'
 		},
 		'angular-ui-router': {
 			deps: ['angular']
 		},
 		'ui-bootstrap': {
 			deps: ['angular']
 		}
 	},
 	priority: [
 		'angular'
 	],
 	// start application
 	deps: ['bootstrap']
 });
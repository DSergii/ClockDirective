;(function(){
	'use strict'

	angular
		.module('ngClock', ['ui.router', 'ngClock.watch'])
		.config(crudConfig);

	/** @ngInject */
	function crudConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
	}

})();

;(function(){
	'use strict'

	angular
		.module('ngClock.watch', [])
		.directive('myWatch', function(){
			return function(scope,element,attrs){



			}

		});
})();
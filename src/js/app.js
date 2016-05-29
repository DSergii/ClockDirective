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

;(function(){
	'use strict'

	angular
		.module('ngClock', [
			'ui.router',
			'ngClock.main',
			'ngClock.watch'
		])
		.config(clockConfig);

	function clockConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
	}

})();

;(function(){
	'use strict'

	angular
		.module('ngClock.watch', [])
		.directive('myWatch', function($interval){
			return {
				restrict: 'E',
				templateUrl: 'app/directives/clock.tmpl.html',
				scope: true,
				scope: {
					showDigital: '=showDigital'
				},
				link: function(scope, element, attrs){

        			var hours,
        				minutes,
        				seconds;

        			var clock = element.children();
        			var hourArrow = clock[0].querySelector('.hour');
        			var minutArrow = clock[0].querySelector('.minut');
        			var secondArrow = clock[0].querySelector('.second');
        			var digital = clock[0].querySelector('.digital');

					updateTime();

			        function updateTime() {

			        	$interval(function(){
			        		var date = new Date();
			        		hours = date.getHours() % 12 || 12;
			        		minutes = date.getMinutes();
			        		seconds = date.getSeconds();

							secondArrow.style.webkitTransform = 'rotate('+((seconds * 6)  )+'deg)';
							minutArrow.style.webkitTransform = 'rotate('+((minutes * 6) + seconds / 10 )+'deg)';
							hourArrow.style.webkitTransform = 'rotate('+((hours * 30)  + minutes / 2 )+'deg)';

 							hours = (hours.toString().length == 1) ? '0' + hours : hours;
 							minutes = (minutes.toString().length == 1) ? '0' + minutes : minutes;
 							seconds = (seconds.toString().length == 1) ? '0' + seconds : seconds;

							scope.time = (hours +' : '+ minutes +' : '+ seconds);

						}, 1000);
			        }

			        scope.$watch('showDigital', function(value) {
			          console.log(value, 888);
			        });
				}
			}
		});
})();
;(function(){
	'use strict'

	angular
		.module('ngClock.main', [])
		.controller('mainCtrl', mainCtrl);

	function mainCtrl($scope){

		var vm = this;
		vm.digital = false;

	}

})();
;(function (){
	'use strict'

	angular
		.module('ngClock.main')
		.config(routerConfig);

	function routerConfig($stateProvider){
		$stateProvider.state('main',{
			url: '/main',
			security: true,
			templateUrl: 'app/main/main.tmpl.html',
			controller: 'mainCtrl',
			controllerAs: 'mc'
		});
	}
	
})();
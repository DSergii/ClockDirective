;(function(){
	'use strict'

	angular
		.module('ngClock.watch', [])
		.directive('myWatch', function($interval){
			return {
				restrict: 'E',
				templateUrl: 'app/directives/clock.tmpl.html',
				scope: true,
				link: function(scope, element, attrs){
					
					scope.loading = true;

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

							scope.digitalTime = (hours +' : '+ minutes +' : '+ seconds);

							scope.loading = false;

						}, 1000);
			        }

			        scope.$watch('digital', function(value) {
			        	scope.digital = value;
			        });
				}
			}
		});
})();
(function(angular){
	var app=angular.module('DemoApp',['ngRoute','LocalStorageModule']);

    app.run(['$window', '$rootScope', function ($window, $rootScope) {
        $rootScope.online = navigator.onLine;
        $window.addEventListener("offline", function () {
            $rootScope.$apply(function () {
                $rootScope.online = false;
                document.body.style.overflowX = "hidden";
                document.body.style.overflowY = "hidden";
            });
        }, false);
        $window.addEventListener("online", function () {
            $rootScope.$apply(function () {
                $rootScope.online = true;
                document.body.style.overflowY = "auto";
            });
        }, false);
    }]);
    
	app.config(['$routeProvider', '$locationProvider', 'localStorageServiceProvider', function($routeProvider, $locationProvider,  localStorageServiceProvider){  //$mdThemingProvider,
		/*localStorageServiceProvider.setPrefix(ss).setStorageType('localStorage');*/
		/*$mdThemingProvider.theme('poolBasic')
                .primaryPalette('grey', {
                    'default': '500',
                    'hue-1': '400',
                    'hue-2': '300',
                    'hue-3': '200'
                })
                .accentPalette('red', {
                    'default': 'A400',
                    'hue-1': 'A200',
                    'hue-2': 'A100',
                    'hue-3': 'A100'
                })
                .warnPalette('orange', {
                    'default': '800',
                    'hue-1': '400',
                    'hue-2': '500',
                    'hue-3': 'A100'
                });*/
        /*$mdThemingProvider.setDefaultTheme('poolBasic');*/

		$routeProvider
        .when('/landing',{
            templateUrl:'app/components/1.html',
            controller:"LandingPageController"
        }) 
		.when('/',{
			templateUrl:'app/components/demo.html',
			controller:"DemoController"
		})        
	}])
}(window.angular));

(function (angular) {
	'use strict';
	angular.module('DemoApp')
	.controller('AppController',['$scope',function($scope){

	}])
	.controller('DemoController',['$scope',function($scope){

	}])
	.controller('LandingPageController',['$scope',function($scope){

	}])
}(window.angular));
(function(angular){

}(window.angular));
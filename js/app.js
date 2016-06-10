var deps = [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'mdl',
    'ngIntercom',
    'ngStorage',
    'MinecraftlyAppControllers',
    'MinecraftlyAppServices'
];
angular.module("MinecraftlyAppControllers", []);
angular.module("MinecraftlyAppServices", []);
angular.module('MinecraftlyApp', deps)
        .run(function ($window) {
        })
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, IntercomProvider) {// $mdThemingProvider, $mdIconProvider, 
            IntercomProvider.init('t02jhyr0');
//            $mdThemingProvider.theme('MinecraftlyTheme')
//                    .primaryPalette('blue')
//                    .accentPalette('purple')
//                    .warnPalette('deep-purple');
//            $mdThemingProvider.setDefaultTheme('MinecraftlyTheme');
//            $mdIconProvider
//                    .defaultIconSet('/img/mdi.svg');
//            $locationProvider.html5Mode(true);
            $stateProvider
                    .state('app', {
                        url: "",
                        abstract: true,
                        templateUrl: "templates/app.html",
                        controller: 'AppCtrl'
                    })
                    .state('app.home', {
                        cache: false,
                        url: "/home",
                        views: {
                            'appContent': {
                                templateUrl: "templates/home.html",
                                controller: 'HomeCtrl'
                            }
                        }
                    })
		    .state('app.features', {
                        cache: false,
                        url: "/features",
                        views: {
                            'appContent': {
                                templateUrl: "templates/features.html",
                                controller: 'FeaturesCtrl'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/home');
		    .state('app.play', {
                        cache: false,
                        url: "/play",
                        views: {
                            'appContent': {
                                templateUrl: "templates/play.html",
                                controller: 'PlayCtrl'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/home');
        });
        

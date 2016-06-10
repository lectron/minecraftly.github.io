angular.module('MinecraftlyAppControllers')
        .controller('AppCtrl', function ($scope, $rootScope, API, $localStorage, Intercom, $mdDialog, $mdMedia) {
            $scope.$storage = $localStorage;
            $scope.logout = function () {
                $localStorage.loggedIn = 0;
                $localStorage.user = {};
            };
            $localStorage.loading = 0;
            $scope.showLogin = function (ev) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                $mdDialog.show({
                    controller: function ($scope, $localStorage, $rootScope, $mdDialog) {
                        $scope.user = {};
                        $scope.login = function () {
                            $localStorage.loading = 1;
                            API.login($scope.user.email, $scope.user.password).then(function (resp) {
                                $localStorage.loading = 0;
                                if (resp.data.availableProfiles.length > 0) {
                                    $localStorage.loggedIn = 1;
                                    $localStorage.user.uuid = resp.data.availableProfiles[0].id;
                                    $localStorage.user.name = resp.data.availableProfiles[0].name;
                                    $localStorage.user.email = $scope.user.email;
                                    $mdDialog.cancel();
                                    Intercom.boot({
                                        name: $localStorage.user.name,
                                        email: $localStorage.user.email,
                                        user_id: $localStorage.user.uuid,
                                        created_at: Date.now()
                                    });
                                } else {

                                }

                            }, function (j, t, a) {
                                $localStorage.loading = 0;

                                $mdDialog.show(
                                        $mdDialog.alert()
                                        .parent(angular.element(document.querySelector('body')))
                                        .clickOutsideToClose(true)
                                        .title('Login failed!')
                                        .textContent('Incorrect username and/or password.')
                                        .ariaLabel('Login failed!')
                                        .ok('OK')
                                        .targetEvent(ev)
                                        );
                            });

                        };
                    },
                    templateUrl: 'templates/login.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                        .then(function (answer) {
                        }, function () {
                        });
                $scope.$watch(function () {
                    return $mdMedia('xs') || $mdMedia('sm');
                }, function (wantsFullScreen) {
                    $scope.customFullscreen = (wantsFullScreen === true);
                });
            };
            if ($localStorage.loggedIn == 1) {
                Intercom.boot({
                    name: $localStorage.user.name,
                    email: $localStorage.user.email,
                    created_at: Date.now()
                });
            }

        })
        .controller('HomeCtrl', function ($scope) {

        })
        .controller('FeaturesCtrl', function ($scope) {
		
		})
        .controller('AboutCtrl', function ($scope) {
		
		})
        .controller('PlayCtrl', function ($scope) {
		
		})
        .controller('VoteCtrl', function ($scope) {
		
		})
        .controller('TeamCtrl', function ($scope) {
		
		})
        .controller('TermsCtrl', function ($scope) {
		
		})
        .controller('PrivacyCtrl', function ($scope) {
		
		})
        .controller('JobsCtrl', function ($scope) {
		
		})
        .controller('EducationCtrl', function ($scope) {

        });

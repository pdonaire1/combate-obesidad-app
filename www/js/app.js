// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

        .config(function($stateProvider,$urlRouterProvider){
          $stateProvider
          .state('tab',{
              url: '/tab',
              abstract: true,
              templateUrl: 'templates/tab.html'
          })
         .state('tab.home',{
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'templates/home.html'
                }
            }                      
         })
         .state('tab.contacto',{
            url: '/contacto',
            views: {
                'tab-contacto': {
                    templateUrl: 'templates/contacto.html'
                }
            }                      
         })
          .state('tab.info',{
            url: '/info',
            views: {
                'tab-info': {
                    templateUrl: 'templates/info.html'
                }
            }                      
         }) .state('tab.galeria',{
            url: '/galeria',
            views: {
                'tab-galeria': {
                    templateUrl: 'templates/galeria.html'
                }
            }                      
         }) .state('tab.cita',{
            url: '/cita',
            views: {
                'tab-cita': {
                    templateUrl: 'templates/cita.html'
                }
            }                      
         }) 
            .state('tab.login', {
                url: '/login',
                views: {
                    'tab-login': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }             
            }).state('tab.admin', {
                url: '/admin',
                views: {
                    'tab-login': {
                        templateUrl: 'templates/admin.html'
                        
                    }
                }             
            })
            .state('tab.comunidad', {
                url: '/comunidad',
                views: {
                    'tab-comunidad': {
                        templateUrl: 'templates/comunidad.html',
                        controller: 'ComunidadCtrl'
                    }
                }             
            })
            .state('tab.user', {
                  url: '/user/:id',
                  views: {
                    'tab-user': {
                      templateUrl: 'templates/user.html',
                      controller: 'UserCtrl'
                    }
                  }
                })

 $urlRouterProvider.otherwise('/tab/home');     
        })
.controller('ComunidadCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json')
  .success(function(data){
    $scope.usuarios = data.usuarios;
  });
}]) 

.controller('UserCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json')
  .success(function(data){
    $scope.data = data.usuarios[$state.params.id];
  });
}])

        
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})



.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                location.href = '#/tab/admin';
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
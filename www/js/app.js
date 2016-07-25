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

        .config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider){
          $ionicConfigProvider.tabs.position("bottom");
          $ionicConfigProvider.navBar.alignTitle("center");
          $stateProvider
          .state('tab',{
              url: '/tab',
              abstract: true,
              templateUrl: 'templates/tab.html'
          })
         .state('home',{
            url: '/home',
            templateUrl: 'templates/home.html'                         
         })
         .state('bienvenido',{
            url: '/bienvenido',              
            templateUrl: 'templates/bienvenido.html'                                            
         })
          .state('tusPasos2',{
            url: '/tusPasos2',        
            templateUrl: 'templates/tusPasos2.html'                                 
         })
          .state('calcular',{
            url: '/calcular',
            templateUrl: 'templates/calcular.html'                                
         })

          .state('conoce',{
            url: '/conoce',
            templateUrl: 'templates/conoce.html'
         })            
          .state('tusPasos3', {
                url: '/tusPasos3',             
                templateUrl: 'templates/tusPasos3.html'                            
            })
            .state('tusPasos1', {
                url: '/tusPasos1',            
                templateUrl: 'templates/tusPasos1.html',                       
            })
            .state('tips', {
                  url: '/tips/',
                  templateUrl: 'templates/tips.html',
            })

          $urlRouterProvider.otherwise('/home');     
        })
.controller('prueba', ['$scope', function($scope) {
    console.log("prueba");
    var sevilla = new google.maps.LatLng(37.377222, -5.986944);  
var buenos_aires = new google.maps.LatLng(-34.608333, -58.371944);  
var distancia = google.maps.geometry.spherical.computeDistanceBetween(sevilla, buenos_aires);


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
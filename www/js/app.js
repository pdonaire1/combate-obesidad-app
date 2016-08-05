// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app')

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
         .state('bienvenido2',{
            url: '/bienvenido2',              
            templateUrl: 'templates/bienvenido2.html'                                            
         })
         .state('nutricion',{
            url: '/nutricion',              
            templateUrl: 'templates/nutricion.html'                                            
         })

         .state('alimentacion',{
            url: '/alimentacion',              
            templateUrl: 'templates/alimentacion.html'                                            
         })

         .state('grafica',{
            url: '/grafica',              
            templateUrl: 'templates/grafica.html'                                            
         })
         
         .state('grupos',{
            url: '/grupos',              
            templateUrl: 'templates/grupos.html'                                            
         })

         .state('frutas',{
            url: '/frutas',              
            templateUrl: 'templates/grupos/frutas.html'                                            
         })

         .state('verduras',{
            url: '/verduras',              
            templateUrl: 'templates/grupos/verduras.html'                                            
         })

          .state('cereales',{
            url: '/cereales',              
            templateUrl: 'templates/grupos/cereales.html'                                            
         })
           .state('animal',{
            url: '/animal',              
            templateUrl: 'templates/grupos/animal.html'                                            
         })

          .state('leche',{
            url: '/leche',              
            templateUrl: 'templates/grupos/leche.html'                                            
         })

          .state('grasas',{
            url: '/grasas',              
            templateUrl: 'templates/grupos/grasas.html'                                            
         }) 

          
          .state('tusPasos2',{
            url: '/tusPasos2',        
            templateUrl: 'templates/tusPasos2.html'                                 
         })
          .state('calcular',{
            url: '/calcular/{indice}',
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

        .state('psicologia', {
            url: '/psicologia',
            templateUrl: 'templates/psicologia/psicologia.html',
          })

         .state('dia1', {
            url: '/dia1',
            templateUrl: 'templates/psicologia/dia1.html',
          })

         .state('dia2', {
            url: '/dia2',
            templateUrl: 'templates/psicologia/dia2.html',
          })

         .state('dia3', {
            url: '/dia3',
            templateUrl: 'templates/psicologia/dia3.html',
          })

         .state('dia4', {
            url: '/dia4',
            templateUrl: 'templates/psicologia/dia4.html',
          })

         .state('dia5', {
            url: '/dia5',
            templateUrl: 'templates/psicologia/dia5.html',
          })

         .state('ejercicio', {
            url: '/ejercicio',
            templateUrl: 'templates/ejercicio/ejercicio.html',
          })
        

         .state('nivel1', {
            url: '/nivel1',
            templateUrl: 'templates/ejercicio/nivel1/nivel1.html',
          })

         .state('ciclos', {
            url: '/ciclos',
            templateUrl: 'templates/ejercicio/nivel1/ciclos.html',
          })

         .state('fin', {
            url: '/fin',
            templateUrl: 'templates/ejercicio/nivel1/fin.html',
          })

         .state('nivel2', {
            url: '/nivel2',
            templateUrl: 'templates/ejercicio/nivel2/nivel2.html',
          })

          .state('ciclos2', {
            url: '/ciclos2',
            templateUrl: 'templates/ejercicio/nivel2/ciclos2.html',
          })

          .state('sentadillas', {
            url: '/sentadillas',
            templateUrl: 'templates/ejercicio/nivel2/sentadillas.html',
          })

          .state('desplantes', {
            url: '/desplantes',
            templateUrl: 'templates/ejercicio/nivel2/desplantes.html',
          })

           .state('lagartijas', {
            url: '/lagartijas',
            templateUrl: 'templates/ejercicio/nivel2/lagartijas.html',
          })

            .state('fondo', {
            url: '/fondo',
            templateUrl: 'templates/ejercicio/nivel2/fondo.html',
          })

            .state('abdo', {
            url: '/abdo',
            templateUrl: 'templates/ejercicio/nivel2/abdo.html',
          })

              .state('reverencia', {
            url: '/reverencia',
            templateUrl: 'templates/ejercicio/nivel2/reverencia.html',
          })

          .state('fin2', {
            url: '/fin2',
            templateUrl: 'templates/ejercicio/nivel2/fin2.html',
          })

           .state('fin3', {
            url: '/fin3',
            templateUrl: 'templates/ejercicio/nivel3/fin3.html',
          })

            .state('ciclos3', {
            url: '/ciclos3',
            templateUrl: 'templates/ejercicio/nivel3/ciclos3.html',
          })

             .state('nivel3', {
            url: '/nivel3',
            templateUrl: 'templates/ejercicio/nivel3/nivel3.html',
          })


          .state('sentadillas2', {
            url: '/sentadillas2',
            templateUrl: 'templates/ejercicio/nivel3/sentadillas2.html',
          })

          .state('desplantes2', {
            url: '/desplantes2',
            templateUrl: 'templates/ejercicio/nivel3/desplantes2.html',
          })

           .state('lagartijas2', {
            url: '/lagartijas2',
            templateUrl: 'templates/ejercicio/nivel3/lagartijas2.html',
          })

            .state('fondo2', {
            url: '/fondo2',
            templateUrl: 'templates/ejercicio/nivel3/fondo2.html',
          })

            .state('abdo2', {
            url: '/abdo2',
            templateUrl: 'templates/ejercicio/nivel3/abdo2.html',
          })

              .state('reverencia2', {
            url: '/reverencia2',
            templateUrl: 'templates/ejercicio/nivel3/reverencia2.html',
          })
          
          $urlRouterProvider.otherwise('/home');     
        })
angular.module('app.Controllers').controller('prueba', ['$scope','$ionicLoading','$ionicPopup','$state','localStorageService', function($scope,$ionicLoading,$ionicPopup,$state,localStorageService) {
    
    var origen = {};
    var destino = {}
    var prueba= {};
    $scope.ubicacion = function() {
            
            $ionicLoading.show({});

            navigator.geolocation.getCurrentPosition(function(pos) {

                
                
                  origen.lat= pos.coords.latitude;
                  origen.lng= pos.coords.longitude;
                  localStorageService.set('origen', origen);
                  
                  
                  
                $ionicLoading.hide();

            }, function(error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error de localización',
                    template: error.message,
                    okType: 'button-assertive'
                });
            })
            
            $state.go('tusPasos2');
    }

    $scope.llegada = function() {
        $ionicLoading.show({});

            navigator.geolocation.getCurrentPosition(function(pos) {

                destino.lat = parseFloat(8.59518361387541);
                destino.lng = parseFloat(-71.15875571966171);

                localStorageService.set('destino', destino);

                $ionicLoading.hide();

            }, function(error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error de localización',
                    template: error.message,
                    okType: 'button-assertive'
                });
            })
            $scope.distancia();
    }


    $scope.distancia = function() {

        var service  = new google.maps.DistanceMatrixService();

        service.getDistanceMatrix({
           origins:[localStorageService.get("origen")],
            destinations:[localStorageService.get("destino")],
           travelMode: google.maps.TravelMode.WALKING,    
        }, callback);
        function callback(response, status) {
          
            localStorageService.set('suma', response.rows[0].elements[0].distance.text);
            console.log(localStorageService.get("suma"))
          // See Parsing the Results for
          // the basics of a callback function.
        }
    }
}]) 

angular.module('app.Controllers').controller('UserCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json')
  .success(function(data){
    $scope.data = data.usuarios[$state.params.id];
  });
}])

        
angular.module('app.Controllers').controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('bienvenido2');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Usuario fallido!',
                template: 'Por favor intente de nuevo!'
            });
        });
    }
})

angular.module('app.Controllers').controller('IndiceCtrl', function($scope, $ionicPopup, $state) {
    $scope.estatura;
    $scope.peso;
    

    $scope.indice = function(estatura,peso) {
      
      var indi = peso /estatura;
      
        
        
        $state.go('calcular',{ indice: indi});

    }
})

angular.module('app.Controllers').controller('MyCtrl', function($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];



})

angular.module('app.Controllers').controller('ciclos', function($scope,$timeout,$state) {
   
    $scope.counter = 0;
    $scope.minutos = 0;
    $scope.ciclos = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);

        if($scope.counter==60){  
            $scope.minutos++;
            $scope.counter=0
        }

        if($scope.minutos==4){ 
          $scope.minutos=0  
          $scope.ciclos++
        }
        if($scope.ciclos==8){ 
          stop();
          $state.go('fin');
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }

})

angular.module('app.Controllers').controller('ciclos2', function($scope,$timeout,$state) {
   
    $scope.counter = 0;
    $scope.minutos = 0;
    $scope.ciclos = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);

        if($scope.counter==60){  
            $scope.minutos++;
            $scope.counter=0
        }

        if($scope.minutos==5){ 
          $scope.minutos=0  
          $scope.ciclos++
        }
        if($scope.ciclos==9){ 
          stop();
          $state.go('fin2');
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }

})

angular.module('app.Controllers').controller('ciclos3', function($scope,$timeout,$state) {
   
    $scope.counter = 0;
    $scope.minutos = 0;
    $scope.ciclos = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);

        if($scope.counter==60){  
            $scope.minutos++;
            $scope.counter=0
        }

        if($scope.minutos==10){ 
          $scope.minutos=0  
          $scope.ciclos++
        }
        if($scope.ciclos==6){ 
          stop();
          $state.go('fin3');
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }

})



angular.module('app.Controllers').controller('CalcularCtrl', function($stateParams,$scope, $ionicPopup, $state) {
     valor2decimales=Math.round($stateParams.indice*100) / 100; 
    $scope.calculo = valor2decimales;
})


angular.module('app.Services').service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                location.href = '#/bienvenido2';
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



angular.module('app.Services').service('StorageService',  function($q) {

function StorageService($localStorage) {
  
    var _getAll = function () {
    return $localStorage;
  };
  var _add = function (thing) {
    $localStorage.things.push(thing);
  }
  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  }
  return {
      getAll: _getAll,
      add: _add,
      remove: _remove
    };
  
}

})
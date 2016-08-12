(function () {
    'use strict';
angular.module('app.Services')

.service('ejercicioService', ejercicioService);

ejercicioService.$inject = ['$http', '$q', 'constants']

function ejercicioService($http, $q,constants) {
    var self = this;
    self.send1 = onSend1;
    self.send2 = onSend2;
   

    function onSend1(params){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.ejercicio.send();

            $http.post(url,params)
              .success(function(data) {
                if(data) {
                  deferred.resolve(data);
                }
                else {
                  deferred.reject(data);
                }
              }).error(function(data) {
                  deferred.reject(data);
            });
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

    function onSend2(token){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.psi.send2();

            $http.get(url+token)
              .success(function(data) {
                if(data) {
                  deferred.resolve(data);
                }
                else {
                  deferred.reject(data);
                }
              }).error(function(data) {
                  deferred.reject(data);
            });
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

})()

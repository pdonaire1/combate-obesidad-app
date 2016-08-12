(function () {
    'use strict';
angular.module('app.Services')

.service('graficaService', graficaService);

graficaService.$inject = ['$http', '$q', 'constants']

function graficaService($http, $q,constants) {
    var self = this;
    self.send = onSend;
    


    function onSend(params){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.grafica.send();

            $http.get(url+"?access_token="+params)
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

  /*


     function onSGet2(token){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.psi.get2();

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
  */
}

})()

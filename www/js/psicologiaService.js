(function () {
    'use strict';
angular.module('app.Services')

.service('psicologiaService', psicologiaService);

psicologiaService.$inject = ['$http', '$q', 'constants']

function psicologiaService($http, $q,constants) {
    var self = this;
    self.send = onSend;
    self.obtener = onObtener;
    


    function onSend(params){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.psicologia.send();

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

    function onObtener(token){
        var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.psicologia.get();

            $http.get(url+"?access_token="+token)
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

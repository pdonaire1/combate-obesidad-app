(function () {
    'use strict';
angular.module('app.Services')

.service('registerService', registerService);

registerService.$inject = ['$http', '$q', 'constants']

function registerService($http, $q,constants) {
	var self = this;
	self.register = onRegister
  

    function onRegister(parametros){
    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
          
            console.log(parametros)
            var url= constants.register.register();
            $http.post(url, parametros).success(function(data){
              if(data) {
                deferred.resolve(data);
                deferred.resolve('Welcome ' + name + '!');
              } 
              else {
                deferred.reject(data);
                deferred.reject('Wrong credentials.');
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



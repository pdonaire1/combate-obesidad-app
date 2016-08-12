(function () {
    'use strict';
angular.module('app.Services')
.service('constants', constantsService);

function constantsService() {
    var self = this;
    var URL_BASE='http://app.combateobesidad.com/rest/v1/';
    self.login = {};
    self.register = {};
    self.psi = {};
    self.ejercicio = {};
    self.psicologia = {};
    self.grafica = {};
    self.comidas = {};
    /* URL to Providers */

    self.login.getToken = function () {
        var url = URL_BASE + 'site/login';
        return url;
    };

    self.register.register = function () {
        var url = URL_BASE + 'site/register';
        return url;
    };
    
    self.ejercicio.send = function () {
        var url = URL_BASE + 'evaluaciones/create';
        return url;
    };

     self.ejercicio.send = function () {
        var url = URL_BASE + 'evaluaciones/create';
        return url;
    };

    self.grafica.send = function () {
        var url = URL_BASE + 'consumption/consumographrest';
        return url;
    };

    self.comidas.send = function () {
        var url = URL_BASE + 'consumption/create';
        return url;
    };


    
    
    
}

})()

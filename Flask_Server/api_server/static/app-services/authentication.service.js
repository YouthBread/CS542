﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http'];
    function AuthenticationService($http) {
        var service = {};

        service.isLogged = false;
        service.isAdmin = false;

        service.Login = Login;

        return service;

        function Login(username, password, callback) {
            $http.post('/api/authenticate', {username: username, password: password})
                .then(function successCallback(response) {
                        callback(response.data);
                    },
                    function errorCallback(response) {
                        console.log(response.data);
                    });
        }

    };

})();
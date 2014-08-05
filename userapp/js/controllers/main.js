"use strict"
require([], function () {
    window.userApp = angular.module('userApp', ['ngResource', 'ngRoute']);
    userApp.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$location',
        function ($routeProvider,
            $controllerProvider, $compileProvider, $filterProvider, $provide, $location) {
            debugger
            userApp.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            $routeProvider
                .when('/users/list', {
                    templateUrl: '../templates/users.html'
                });
            $location.path('/users/list');
        }]);
    debugger
    angular.bootstrap(document.getElementById('userApp'), ['userApp']);
    return userApp;
});
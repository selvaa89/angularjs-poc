'use strict';

define([], function () {
    var app = angular.module('eventsApp', ['routeResolverServices', 'ngResource', 'ngRoute']);
    window.eventsApp = app;
    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/newEvent', route.resolve('EditEventController', 'templates/NewEvent.html'))
                .when('/events', route.resolve('EventsListController', 'templates/EventsList.html'))
                .when('/event/:eventId', route.resolve('EventController', 'templates/EventDetails.html'))
                .when('/sample-directive', route.resolve('SampleDirectiveController', 'templates/SampleDirective.html'))
                .otherwise({ redirectTo: '/events' });
        }]);
    return app;
});

/*var eventsApp = angular.module("eventsApp", ['ngResource', 'ngRoute']).
    config(function($routeProvider) {
        $routeProvider.when('/newEvent',{
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events', {
            templateUrl: 'templates/EventsList.html',
            controller: 'EventsListController'
        });

        $routeProvider.when('/event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                event: function($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });

        $routeProvider.when('/user-profile', {
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        });

        $routeProvider.when('/sample-directive', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });

        $routeProvider.otherwise({redirectTo: '/events'});
    });
*/

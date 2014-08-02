'use strict';

define([], function () {
    window.eventsApp = angular.module('eventsApp', ['routeResolverServices', 'ngResource', 'ngRoute']);
    eventsApp.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            eventsApp.register =
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
    return eventsApp;
});

'use strict';

var eventsApp = angular.module("eventsApp", ['ngResource', 'ngRoute']).
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

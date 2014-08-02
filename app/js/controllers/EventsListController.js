'use strict';

define(['services/EventData', 'directives/EventThumbnail', 'directives/collapsible'], function () {
    eventsApp.controller('EventsListController', function ($scope, eventData) {
        $scope.events = eventData.getAllEvents();

        $scope.getAllEvents = function () {
            $scope.events = eventData.getAllEvents();
        };

        $scope.navigateToDetails = function (event) {
            $location.url('/event/' + event.id);
        };
    });
});
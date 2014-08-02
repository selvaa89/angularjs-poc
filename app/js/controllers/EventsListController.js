'use strict';

eventsApp.controller('EventsListController', function ($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();

    $scope.getAllEvents = function () {
        $scope.events = eventData.getAllEvents();
    };

    $scope.navigateToDetails = function (event) {
        $location.url('/event/' + event.id);
    };
});
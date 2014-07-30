'use strict';

define(['services/EventData'], function () {
    eventsApp.register.controller('EventsListController', function($scope, eventData) {
        $scope.events =  eventData.getAllEvents();
    });
});
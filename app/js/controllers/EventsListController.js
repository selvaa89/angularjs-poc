'use strict';

define(['services/EventData', 'directives/EventThumbnail', 'directives/collapsible'], function () {
    eventsApp.register.controller('EventsListController', function($scope, eventData) {
        $scope.events =  eventData.getAllEvents();
    });
});
'use strict';

eventsApp.controller('EditEventController', function($scope, eventData){
    $scope.cancelEdit = function () {
        window.location = '../../templates/EventDetails.html';
    };

    $scope.submitEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
            eventData.save(event);
        }
    };
});
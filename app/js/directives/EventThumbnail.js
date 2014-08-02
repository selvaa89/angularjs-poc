'use strict';

eventsApp.register.directive('eventThumbnail', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/EventThumbnail.html',
        scope: {
            event: "="
        }
    };
});

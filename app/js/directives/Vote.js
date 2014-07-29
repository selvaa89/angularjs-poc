'use strict';

eventsApp.directive('vote', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/vote.html',
        scope: {
            upvote: '&',
            downvote: '&',
            count: '='
        }
    };
});
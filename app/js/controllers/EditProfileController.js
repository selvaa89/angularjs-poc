'use strict';

eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder) {
    $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
   };
});
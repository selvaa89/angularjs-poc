'use strict';

eventsApp.factory('UserResource', function ($resource) {
    var userResource = $resource('/data/user/:username', {userName: '@userName'});

    return {
        getUser: function (userName) {
            return userResource.get({userName:userName});
        },

        save: function(user) {
            userResource.save(user);
        },

        users: function() {
            return userResource.query();
        }
    };
});
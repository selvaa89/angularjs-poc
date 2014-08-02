'use strict';

eventsApp.factory('UserData', ['UserResource', function (userResource) {
    return {
        getUser: function (username, callback) {
            return userResource.get({ userName: username }, function (user) {
                if (callback) {
                    callback(user);
                }
            });
        },

        save: function (user) {
            userResource.save(user);
        },

        users: function () {
            return userResource.queryAll(function (users) {
                return users;
            });
        }
    };
}]);
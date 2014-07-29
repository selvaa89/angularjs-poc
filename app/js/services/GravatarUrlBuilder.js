'use strict';

eventsApp.factory('gravatarUrlBuilder', function() {
    return {
        buildGravatarUrl: function(email) {
            var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if ((email !== null || email !== 'undefined') && !(regex.test(email))) {
                return defaultGravatarUrl;
            }

            return "http://www.gravatar.com/avatar/" + md5(email) + "?s=200&r=g";
        }
    };
});
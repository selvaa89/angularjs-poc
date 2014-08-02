'use strict';

eventsApp.register.filter('eventName', function() {
    return function(eventName) {
        switch(eventName) {
            case null:
            case undefined:
            case '':
                return 'New Event';
                break;
            default:
                return eventName;
        }
    }
})
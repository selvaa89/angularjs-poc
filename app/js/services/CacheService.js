'use strict';

eventsApp.register.factory('eventsAppCacheService', function($cacheFactory) {
    return $cacheFactory('eventsAppCache', {capacity: 3});
});
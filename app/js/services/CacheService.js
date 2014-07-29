'use strict';

eventsApp.factory('eventsAppCacheService', function($cacheFactory) {
    return $cacheFactory('eventsAppCache', {capacity: 3});
});
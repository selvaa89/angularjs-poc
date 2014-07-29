'use strict';

eventsApp.controller('CacheController', function($scope, eventsAppCacheService){
    $scope.keys = [];
    $scope.addToCache = function(key, value) {
        eventsAppCacheService.put(key, value);
        this.keys.push(key);
    };

    $scope.getFromCache = function(key) {
        return eventsAppCacheService.get(key);
    };

    $scope.cacheInfo = function() {
        return eventsAppCacheService.info();
    };
});
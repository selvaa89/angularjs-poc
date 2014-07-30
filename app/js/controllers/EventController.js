"use strict";

eventsApp.register.controller('EventController', function($scope, eventData, $routeParams, $route) {
    $scope.sortField = 'name';
    $scope.ascOrDsc = '+';
    $scope.sortorder = '+name';
    $scope.difficultyLevel = '';

    $scope.event = $route.current.locals.event;

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.toggleSortField = function(sortField) {
        this.sortField = sortField;
        this.sortorder = this.ascOrDsc + this.sortField;
    };

    $scope.isSelectedSortField = function(sortField) {
        return this.sortField === sortField;
    };

    $scope.isSelectedAscOrDsc = function(ascOrDsc) {
        return this.ascOrDsc == ascOrDsc;
    };

    $scope.toggleAscOrDsc = function(ascOrDsc) {
        this.ascOrDsc = ascOrDsc;
        this.sortorder = this.ascOrDsc + this.sortField;
    };

    $scope.setDifficultyLevel = function(level) {
        this.difficultyLevel = level;
    };

    $scope.isSelectedDifficultyLevel = function(level) {
        return this.difficultyLevel === level;
    };
});
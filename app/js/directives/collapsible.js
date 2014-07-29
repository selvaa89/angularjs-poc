'use strict';

eventsApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        template: '<div><h4 class="list-group-item-heading" ng-click="toggleVisiblity()">{{title}}</h4><div ng-show="visible" ng-transclude></div> </div>',
        scope: {
            title: '@'
        },
        controller: function($scope) {
            $scope.visible = true;
            $scope.toggleVisiblity = function() {
                this.visible = !this.visible;
            };
        }
    };
});

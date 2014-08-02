'use strict';

eventsApp.register.directive('myDirective', function($compile) {
    return {
        restrict: 'E',
        link: function($scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>";

            angular.element(element).html($compile(markup)($scope));
        }
    }
});
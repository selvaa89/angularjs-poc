'use strict';

describe('EventListController', function () {
    var scope, $controllerConstructor;
    var mockEventData;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function(){}});
        $controllerConstructor = $controller;
    }));

    it("Should set the scope events to the results of eventData.getAllEvents", function () {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);

        var ctrl = $controllerConstructor("EventsListController", {
            $scope: scope, eventData: mockEventData
        });

        expect(scope.events).toBe(mockEvents);
    });
});



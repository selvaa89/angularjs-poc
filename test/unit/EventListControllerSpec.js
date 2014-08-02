'use strict';

describe("EventListController", function () {

    var $controllerConstructor, scope, mockEventDataSvc;

    beforeEach(module('eventsApp'));

    beforeEach(inject(function ($controller, $rootScope, $location) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();

        mockEventDataSvc = sinon.stub({
            getAllEvents: function(){}});
    }));

    xit("should get all the events from eventsData server", function () {
        var mockEventData = {
            id: 5,
            name: 'AngularJS Boot camp'
        };

        mockEventDataSvc.getAllEvents.returns(mockEventData);
        var mockEventListsController = $controllerConstructor('EventsListController', {
            $scope: scope, $location: {}, eventData: mockEventDataSvc
        })

        expect(scope.events).toBe(mockEventData);
    });

    it("should call navigateToDetails with event id of 23", function () {
        var mockEvent = {
            id: 24
        };

        var mockLocation = sinon.stub({url: function () {}});

        var mockEventsListController = $controllerConstructor('EventsListController', {
            $scope: scope, $location: mockLocation, eventData: mockEventDataSvc
        });

        scope.navigateToDetails(mockEvent);

        expect(mockLocation.url.calledWith('/event/24')).toBe(true);
    });
});




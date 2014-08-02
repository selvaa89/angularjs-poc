'use strict';

describe('UserData', function () {
    var mockUserResource, userDataSvc;

    beforeEach(module('eventsApp'));


    beforeEach(function () {
        mockUserResource = sinon.stub({
            get: function () { },
            save: function() {}
        });

        module(function ($provide) {
            $provide.value('UserResource', mockUserResource);
        });
    });

    beforeEach(inject(function (UserData) {
        console.log(UserData);
        userDataSvc = UserData;
    }));

    it('should test getUser method', function () {
        var user = userDataSvc.getUser('mram');

        expect(mockUserResource.get.args[0][0]).toEqual({'userName': 'mram'});
    });

    it('should retun "angular rocks" when getUser is called', function () {
        mockUserResource.get.returns("Angular Rocks");

        var resp = userDataSvc.getUser('mram');
        expect(resp).toBe('Angular Rocks');
    });

    it('should pass the same object as its param to userResource service', function () {
        userDataSvc.save('Angular Rocks');
        expect(mockUserResource.save.args[0][0]).toBe('Angular Rocks');
    });
});
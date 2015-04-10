'use strict';

describe('Controller: SavePostCtrl', function () {

  // load the controller's module
  beforeEach(module('blogpostApp'));

  var SavePostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SavePostCtrl = $controller('SavePostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

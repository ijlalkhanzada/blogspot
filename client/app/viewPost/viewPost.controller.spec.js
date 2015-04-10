'use strict';

describe('Controller: ViewPostCtrl', function () {

  // load the controller's module
  beforeEach(module('blogpostApp'));

  var ViewPostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewPostCtrl = $controller('ViewPostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

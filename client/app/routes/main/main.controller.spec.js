'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a greeting', function() {
    expect(MainCtrl.greeting).toEqual('Hi there!');
  });
});

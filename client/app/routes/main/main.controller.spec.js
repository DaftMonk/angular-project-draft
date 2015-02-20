describe('Controller: MainCtrl', function() {

  var MainCtrl, scope;

  beforeEach(module('testApp'));

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

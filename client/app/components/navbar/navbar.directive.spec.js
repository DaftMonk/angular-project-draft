import App from '../../app.module';

describe('Directive: navbar', function () {

  var element, scope;

  beforeEach(module(App.name));
  beforeEach(module('components/navbar/navbar.directive.html'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navbar></navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the navbar directive');
  }));
});
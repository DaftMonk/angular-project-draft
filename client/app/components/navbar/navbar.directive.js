angular
  .module('testApp')
  .directive('navbar', navbar);

function navbar() {
  var directive = {
    link: link,
    templateUrl: 'client/app/components/navbar/navbar.directive.html',
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
  }
}
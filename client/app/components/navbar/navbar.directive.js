/* @ngInject */
function navbar() {
  var directive = {
    link: link,
    templateUrl: 'components/navbar/navbar.directive.html',
    restrict: 'EA'
  };
  return directive;

  function link(scope, element, attrs) {
  }
}

export default navbar;
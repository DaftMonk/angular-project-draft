angular
  .module('testApp')
  .config(mainRouteConfig);

function mainRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'client/app/routes/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
    });
}

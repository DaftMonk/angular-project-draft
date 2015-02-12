function mainRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'routes/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
    });
}

export default mainRouteConfig;
import navbar from './components/navbar/navbar.directive.js';
import example from './services/example/example.service.js';
import MainCtrl from './routes/main/main.controller.js';

var ngApp = angular.module('testApp', ['ngRoute']);

ngApp
  .directive('navbar', navbar)
  .service('example', example)
  .controller('MainCtrl', MainCtrl);

export default ngApp;
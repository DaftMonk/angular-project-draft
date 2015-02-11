angular
  .module('testApp')
  .controller('MainCtrl', MainCtrl);

function MainCtrl() {
  this.greeting = 'Hi there!';
}
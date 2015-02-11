angular
  .module('app')
  .service('example', example);

function example() {
  this.saySomething = function() {
    return 'something';
  };
}
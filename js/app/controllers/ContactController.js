function ContactController() {
  var vm = this;

  vm.name = "Steve Jobs";
  vm.email = 'steve@apple.com';
  vm.phone = "8008008001";

  this.changeName = function() {
    vm.name = "Bill Gates";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)

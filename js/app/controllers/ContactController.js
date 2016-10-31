function ContactController() {
  var vm = this;

  vm.name = "Steve Jobs";
  vm.email = 'steve@apple.com';
  vm.phone = "8008008001";

  this.changeName = function() {
    vm.name = "Bill Gates";
  }

  this.changeEmail = function() {
    vm.email = 'bill@microsoft.com';
  }

  this.changePhone = function() {
    vm.phone = '80055551234';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)

function StaffController() {
  var vm = this;

  vm.name = "John Doe";
  vm.email = 'john@apple.com';
  vm.phone = "8008008001";
}

angular
  .module('app')
  .controller('StaffController', StaffController)

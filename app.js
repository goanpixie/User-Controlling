function UserListController() {
    var vm = this;
    vm.user = {};
    vm.userList = [];

    function resetObj() {
        for (var key in vm.user) {
            vm.user[key] = '';
        }
    }

    vm.createUser = function() {
        vm.userList.push({
            firstName: vm.user.firstName,
            lastName: vm.user.lastName,
            FavLang: vm.user.FavLang
        });

        resetObj();
    }
   vm.deleteUser = function($index){
     vm.userList.splice($index,1)
   }
}

angular.module('userManagement', [])
    .controller('UserListController', UserListController);

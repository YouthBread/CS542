/**
 * Created by you on 2017/4/4.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('MyPostController', MyPostController);

    MyPostController.$inject = ['CurrencyService', 'FlashService', 'AuthenticationService', '$location', '$rootScope'];
    function MyPostController(CurrencyService, FlashService, AuthenticationService, $location, $rootScope) {
        var vm = this;
        vm.isAdmin = AuthenticationService.isAdmin;
        vm.pre = true;
        vm.index1 = 0;

        vm.update = update;
        vm.update1 = update1;
        vm.Delete = Delete;
        vm.logout = logout;
        vm.createObj = createObj;

        function Delete(index) {
            var tid = $rootScope.myposts[index].tid;
            CurrencyService.Delete(tid)
                .then(function (response) {
                    if (response.delete_post_status == "Success") {
                        FlashService.Success('Delete successful', true);
                        $rootScope.myposts.splice(index, 1);
                        //use response to update page
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function update() {
            var utid = $rootScope.myposts[vm.index1].tid;
            var temp = createObj(vm.updater);
            CurrencyService.Update(vm.updater, utid)
                .then(function (response) {
                    if (response.post_update_status) {
                        FlashService.Success('Update successful', true);
                        vm.pre = true;
                        $rootScope.myposts[vm.index1].name = temp.name;
                        $rootScope.myposts[vm.index1].c1_item = temp.c1_item;
                        $rootScope.myposts[vm.index1].c1_number = temp.c1_number;
                        $rootScope.myposts[vm.index1].c2_item = temp.c2_item;
                        $rootScope.myposts[vm.index1].c2_number = temp.c2_number;
                        $rootScope.myposts[vm.index1].league = temp.league;
                        //use response to update page
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function update1(index) {
            vm.pre = false;
            vm.index1 = index;
        }

        function logout() {
            AuthenticationService.isLogged = false;
            AuthenticationService.isAdmin = false;
            delete localStorage.token;
            $location.path("/");
        }

        function createObj(ob) {
            var obj = new Object();

            obj.name = ob.user_name;
            obj.c1_item = ob.c1_item;
            obj.c1_number = ob.c1_number;
            obj.c2_item = ob.c2_item;
            obj.c2_number = ob.c2_number;
            obj.league = ob.league;

            return obj;
        }
    }


})();
/**
 * Created by you on 2017/3/30.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('ItemResultService', ItemResultService);

    ItemResultService.$inject = ['$rootScope'];
    function ItemResultService($rootScope) {
        var service = {};
        service.items=[];

        // service.SetItem = SetItem;
        // service.GetItem = GetItem;

        return service;

        // function GetItem() {
        //     return service.item;
        // }
        //
        // function SetItem(item) {
        //     service.item=item;
        //     //console(service.item[1]._id);
        // }

    }

})();

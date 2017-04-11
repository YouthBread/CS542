﻿(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
             .when('/', {
                controller: 'HomeController',
                templateUrl: '/static/home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/item_search', {
                controller: 'itemController',
                templateUrl: '/static/item/item_search.view.html',
                controllerAs: 'vm'
            })

             .when('/item_result', {
                controller: 'ItemResultController',
                templateUrl: '/static/item/item_result.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: '/static/user/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: '/static/user/register.view.html',
                controllerAs: 'vm'
            })
             .when('/currency_search', {
                controller: 'CurrencySearchController',
                templateUrl: '/static/currency/currency_search.view.html',
                controllerAs: 'vm'
            })

             .when('/currency_result', {
                controller: 'CurrencyResultController',
                templateUrl: '/static/currency/currency_result.view.html',
                controllerAs: 'vm'
            })

             .when('/currency_post', {
                controller: 'CurrencyPostController',
                templateUrl: '/static/currency/currency_post.view.html',
                controllerAs: 'vm'
            })

            .when('/history', {
                controller: 'HistoryController',
                templateUrl: '/static/item/history.view.html',
                controllerAs: 'vm'
            })

            .when('/my_post', {
                controller: 'MyPostController',
                templateUrl: '/static/currency/my_post.view.html',
                controllerAs: 'vm'
            })

            .when('/manage_post', {
                controller: 'ManagePostController',
                templateUrl: '/static/currency/manage.view.html',
                controllerAs: 'vm'
            })

             .when('/update_info', {
                controller: 'UpdateController',
                templateUrl: '/static/user/update.view.html',
                controllerAs: 'vm'
            })

            .otherwise({redirectTo: '/'});
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to user page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/history', '/item_result', '/item_search', '/']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }

})();
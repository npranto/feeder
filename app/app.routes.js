angular.module('feeder')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home-view.html',
                controller: 'homeController'
            })

    });
// angular.module('feeder')
//     .config(function ($stateProvider, $urlRouterProvider) {
//
//         $urlRouterProvider.otherwise('/');
//
//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 templateUrl: 'app/components/home/home-view.html',
//                 controller: 'homeController'
//             })
//
//     });

import './components/home/home-view.html';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: homeView,
            controller: 'homeController',
            controllerAs: 'home'
        })
}
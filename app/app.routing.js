// angular.module('feeder')
//     .config(function ($stateProvider, $urlRouterProvider) {

//         $urlRouterProvider.otherwise('/');

//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 templateUrl: 'app/components/home/home-view.html',
//                 controller: 'homeController'
//             })

//     });

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {

   $locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
   });


   $urlRouterProvider.otherwise('/');

   // $stateProvider
   //      .state('home', {
   //          url: '/',
   //          templateUrl: 'app/components/home/home-view.html',
   //          controller: 'homeController'
   //      })

}

angular.module('feeder')
    .service('homeServices', function ($http) {
        this.getLatestNews = function (latestNewsRoute) {
            console.log(latestNewsRoute);
            return $http.get(latestNewsRoute);
        }
    })

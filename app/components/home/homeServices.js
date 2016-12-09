angular.module('feeder')
    .service('homeServices', function ($http) {

        this.getNewsSourceInfo = function () {
            return $http.get('assets/sources/news-sources.json');
        }

        this.getLatestNews = function (latestNewsRoute) {
            console.log(latestNewsRoute);
            return $http.get(latestNewsRoute);
        }

    })

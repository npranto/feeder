angular.module('feeder')
    .service('homeServices', function ($http) {

        this.getNewsSourceInfo = function () {
            $http.get('assets/data/news-sources.json').success(function(response) {
                console.log(response);
                return response;
            });
        }

        this.getLatestNews = function (latestNewsRoute) {
            console.log(latestNewsRoute);
            return $http.get(latestNewsRoute);
        }

    })

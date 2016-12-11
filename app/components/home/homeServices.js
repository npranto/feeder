angular.module('feeder')
    .service('homeServices', function ($http, _) {

        this.getAllNewsSources = function () {
            return $http.get('assets/sources/news-sources.json');
        }

        this.getLatestNews = function (latestNewsRoute) {
            console.log(latestNewsRoute);
            return $http.get(latestNewsRoute);
        }

        this.getNewsBySourceId = function (sourceId){
            let newsSourceJSON = [];
            return this.getAllNewsSources().then(function (response) {

                newsSourceJSON = response.data.newsSources;

                _.map(newsSourceJSON, function (newsSourceObj) {
                    if(newsSourceObj.sourceId === sourceId){
                        console.log(newsSourceObj);
                        return newsSourceObj;
                    }
                })

            })
        }


    })

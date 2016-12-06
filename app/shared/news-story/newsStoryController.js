angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog, newsAPI, homeServices) {

        $scope.changeReactionStatus = function(reaction){
            if(reaction === "heart"){
                console.log($scope.content);
                $scope.disableHeart = !$scope.disableHeart;
                $scope.disableDislike = false;
            }else{
                $scope.disableDislike = !$scope.disableDislike;
                $scope.disableHeart = false;
            }
        };
        $scope.changeActionStatus = function(action){
            if(action === "interesting"){
                $scope.showInterest = !$scope.showInterest;
            }else{
                $scope.saveNewsStory = !$scope.saveNewsStory;
            }
        };

        function getLatestNews(){
            let route = newsAPI.article.endpoint +
                        newsAPI.article.source +
                        "the-next-web" +
                        newsAPI.and +
                        newsAPI.article.sortBy.latest +
                        newsAPI.and +
                        newsAPI.apiKey;
            homeServices.getLatestNews(route)
            .then(function (response) {
                $scope.latestNews = response.data.articles;
            })
        }

        function getLatestNews(){
            let data = homeServices.getNewsSourceInfo()
            console.log(data);
        }

        getLatestNews();
        // getLatestNews();

    })

angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog, newsAPI, homeServices) {

        $scope.changeReactionStatus = function(reaction){
            if(reaction === "heart"){
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
            console.log("Getting News...");
            homeServices.getLatestNews(newsAPI.articleExample)
            .then(function (response) {
                console.log(response);
                $scope.latestNews = response.data.articles;
            })
        }

        console.log("Done!");

        // getLatestNews();

    })

angular.module('feeder')
    .controller('homeController', function ($scope, $mdDialog, $rootScope, homeServices, _) {
    	// navigation newscategories
    	$scope.newsCategories = ["Business", "Entertainment", "Gaming", "General", "Music", "Science & Nature", "Sport", "Technology"];

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


        // function getLatestNews(){
        //     let route = newsAPI.article.endpoint +
        //         newsAPI.article.source +
        //         "cnn" +
        //         newsAPI.and +
        //         newsAPI.article.sortBy.top +
        //         newsAPI.and +
        //         newsAPI.apiKey;
        //
        //     homeServices.getLatestNews(route)
        //         .then(function (response) {
        //             $scope.latestNews = response.data.articles;
        //         })
        // }


    	$scope.alterTLPGalleryDisplay = function (sourceId) {
            $scope.showNewsSourcesGallery = !$scope.showNewsSourcesGallery;
            getNewsBySourceId(sourceId);
        }
        
        function getNewsBySourceId(sourceId) {
            homeServices.getAllNewsSources()
            .then(function(response) {
                let newsSources = response.data.newsSources;
                _.map(newsSources, function (newsSourceObj) {
                    if(newsSourceObj.sourceId === sourceId){
                        console.log(newsSourceObj);
                        homeServices.getNewsFromSource(newsSourceObj.newsSourceFormat)
                            .then(function (response) {
                                console.log(response);
                            })
                    }
                })
            })
        }

    	function getAllNewsSources(){
            homeServices.getAllNewsSources()
            .then(function(response) {
                $scope.newsSources = response.data.newsSources;
                console.log($scope.newsSources);
            })
        }

        // getNewsBySourceId();
        getAllNewsSources();
    })
angular.module('feeder')
    .controller('homeController', function ($scope, homeServices, _) {
    	// navigation newscategories
    	$scope.newsCategories = ["Business", "Entertainment", "Gaming", "General", "Music", "Science & Nature", "Sport", "Technology"];

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
                        homeServices.getNewsBySource(newsSourceObj.newsSourceFormat)
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

        getAllNewsSources();

    })
angular.module('feeder')
    .controller('homeController', function ($scope, homeServices) {
    	// navigation newscategories
    	$scope.newsCategories = ["Business", "Entertainment", "Gaming", "General", "Music", "Science & Nature", "Sport", "Technology"];

    	$scope.showNewsSourcesGallery = false;

    	$scope.alterTLPGalleryDisplay = function () {
            $scope.showNewsSourcesGallery = !$scope.showNewsSourcesGallery;
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
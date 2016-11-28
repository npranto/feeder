angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog) {


        $scope.changeReactionStatus = function(keyword){
            if(keyword === "heart"){
                $scope.disableHeart = !$scope.disableHeart;
                $scope.disableDislike = false;
            }else{
                $scope.disableDislike = !$scope.disableDislike;
                $scope.disableHeart = false;
            }
        };

    })
angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog) {

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

    })

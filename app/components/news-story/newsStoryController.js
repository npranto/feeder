angular.module('feeder')
    .controller("newsStoryController", function ($scope) {
        $scope.topDirections = ['left', 'up'];
        $scope.bottomDirections = ['down', 'right'];

        $scope.isOpen = false;

        $scope.availableModes = ['md-fling', 'md-scale'];
        $scope.selectedMode = 'md-fling';

        $scope.availableDirections = ['up', 'down', 'left', 'right'];
        $scope.selectedDirection = 'up';
    })
angular.module('feeder')
    .controller('homeController', function ($scope, $mdDialog, $rootScope, homeServices, _) {
        // navigation newscategories
        $scope.newsCategories = ["Business", "Entertainment", "Gaming", "General", "Music", "Science & Nature", "Sport", "Technology"];


        $scope.changeReactionStatus = function (reaction) {
            if (reaction === "heart") {
                console.log($scope.content);
                $scope.disableHeart = !$scope.disableHeart;
                $scope.disableDislike = false;
            } else {
                $scope.disableDislike = !$scope.disableDislike;
                $scope.disableHeart = false;
            }
        };
        $scope.changeActionStatus = function (action) {
            if (action === "interesting") {
                $scope.showInterest = !$scope.showInterest;
            } else {
                $scope.saveNewsStory = !$scope.saveNewsStory;
            }
        };


        $scope.alterTLPGalleryDisplay = function (sourceId) {
            $scope.showNewsSourcesGallery = !$scope.showNewsSourcesGallery;
            getNewsBySourceId(sourceId);
        }

        function getNewsBySourceId(sourceId) {
            setTimeout(function () {
                homeServices.getAllNewsSources()
                    .then(function (response) {
                        let newsSources = response.data.newsSources;
                        _.map(newsSources, function (newsSourceObj) {
                            if (newsSourceObj.sourceId === sourceId) {
                                console.log(newsSourceObj);
                                $scope.newsSource = newsSourceObj;
                                homeServices.getNewsFromSource(newsSourceObj.newsSourceFormat)
                                    .then(function (response) {
                                        $scope.articles = response.data.articles;
                                        // $scope.articles = formatNewsStoryDescriptions($scope.articles);
                                        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>", $scope.articles);
                                    })
                            }
                        })
                    })
            }, 1500);
        }

        // function formatNewsStoryDescriptions(articles) {
        //     return _.map(articles, function (story) {
        //         let currDescription = story.description;
        //         currDescription = _.trimEnd(currDescription, '...');
        //         currDescription = _.trimEnd(currDescription, '.');
        //         currDescription = currDescription + "... ";
        //         story.description = currDescription;
        //     })
        // }

        function getAllNewsSources() {
            homeServices.getAllNewsSources()
                .then(function (response) {
                    $scope.newsSources = response.data.newsSources;
                    console.log($scope.newsSources);
                })
        }

        getAllNewsSources();

    })





HomeController.$inject = [$scope, $mdDialog, $rootScope, homeServices, _];

export default class HomeController {
    constructor() {
        this.newsCategories = [
            "Business",
            "Entertainment",
            "Gaming",
            "General",
            "Music",
            "Science & Nature",
            "Sport",
            "Technology"
        ],
        this.changeReactionStatus = changeReactionStatus,

        $scope.changeActionStatus = function (action) {
            if (action === "interesting") {
                $scope.showInterest = !$scope.showInterest;
            } else {
                $scope.saveNewsStory = !$scope.saveNewsStory;
            }
        };



    }

    changeReactionStatus (reaction) {
        if (reaction === "heart") {
            console.log($scope.content);
            $scope.disableHeart = !$scope.disableHeart;
            $scope.disableDislike = false;
        } else {
            $scope.disableDislike = !$scope.disableDislike;
            $scope.disableHeart = false;
        }
    };

    changeName() {
        this.name = 'angular-tips';
    }
}
angular.module('feeder')
    .directive('newsStoryDirective', function () {
        return{
            templateUrl: "app/shared/news-story/news-story.html",
            controller: "homeController"
        }
    })
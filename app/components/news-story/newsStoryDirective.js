angular.module('feeder')
    .directive('newsStoryDirective', function () {
        return{
            templateUrl: "app/components/news-story/news-story.html",
            controller: "newsStoryController"
        }
    })
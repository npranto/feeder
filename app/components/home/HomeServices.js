// angular.module('feeder')
//     .service('homeServices', function ($http, _, newsAPI) {
//
//         this.getAllNewsSources = function () {
//             return $http.get('assets/sources/news-sources.json');
//         }
//
//         this.getLatestNews = function (latestNewsRoute) {
//             console.log(latestNewsRoute);
//             return $http.get(latestNewsRoute);
//         }
//
//         this.getNewsFromSource = function (newsSourceFormat) {
//             let route = newsAPI.article.endpoint +
//                 newsAPI.article.source +
//                 newsSourceFormat +
//                 newsAPI.and +
//                 newsAPI.article.sortBy.top +
//                 newsAPI.and +
//                 newsAPI.apiKey;
//             return $http.get(route);
//         }
//
//     })


export default class HomeServices {
	constructor($http) {
		this.$http = $http;
	}

	getAllNewsSources() {
		return this.$http.get('assets/sources/news-sources.json');
	}

	getLatestNews(latestNewsRoute) {
		// console.log(latestNewsRoute);
		// return this.$http.get(latestNewsRoute);
	}

	getNewsFromSource (newsSourceFormat) {
		// let route = newsAPI.article.endpoint +
		// 	newsAPI.article.source +
		// 	newsSourceFormat +
		// 	newsAPI.and +
		// 	newsAPI.article.sortBy.top +
		// 	newsAPI.and +
		// 	newsAPI.apiKey;
		// return this.$http.get(route);
	}
}

HomeServices.$inject = ['$http'];
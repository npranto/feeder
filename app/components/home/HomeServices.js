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
	constructor($http, NewsAPI) {
		this.$http = $http;
		this.NewsAPI = NewsAPI;
	}

	getAllNewsSources() {
		return this.$http.get('assets/sources/news-sources.json');
	}

	getLatestNews(latestNewsRoute) {
		console.log(latestNewsRoute);
		return this.$http.get(latestNewsRoute);
	}

	getNewsFromSource (newsSourceFormat) {
		let route = this.NewsAPI.article.endpoint +
			this.NewsAPI.article.source +
			newsSourceFormat +
			this.NewsAPI.and +
			this.NewsAPI.article.sortBy.top +
			this.NewsAPI.and +
			this.NewsAPI.apiKey;
		return this.$http.get(route);
	}
}

HomeServices.$inject = ['$http', 'NewsAPI'];
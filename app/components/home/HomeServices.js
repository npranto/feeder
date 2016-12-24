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
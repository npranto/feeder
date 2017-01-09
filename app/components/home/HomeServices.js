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

	getNewsFromSource (newsSourceFormat, sortBy) {
		let route = this.NewsAPI.article.endpoint +
			this.NewsAPI.article.source +
			newsSourceFormat +
			this.NewsAPI.and +
			this.NewsAPI.article.sortBy +
			sortBy +
			this.NewsAPI.and +
			this.NewsAPI.apiKey;
			console.log("ROUTE: ", route);
		return this.$http.get(route);
	}

    getNewsByCategory(category){
		let route = this.NewsAPI.source.endpoint +
				this.NewsAPI.source.category +
            	category;
        return this.$http.get(route);
	}

	getTopNews(route){
        return this.$http.get(route);
    }
}

HomeServices.$inject = ['$http', 'NewsAPI'];

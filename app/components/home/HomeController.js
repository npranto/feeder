export default class HomeController {

	constructor(HomeServices) {
		this.HomeServices = HomeServices;
		this.newsCategories = [
			"Business",
			"Entertainment",
			"Gaming",
			"General",
			"Music",
			"Science & Nature",
			"Sport",
			"Technology"
		];
		this.getAllNewsSources();
	}

	changeReactionStatus(reaction) {
		if (reaction === "heart") {
			this.disableHeart = !this.disableHeart;
			this.disableDislike = false;
		} else {
			this.disableDislike = !this.disableDislike;
			this.disableHeart = false;
		}
	}

	changeActionStatus(action) {
		if (action === "interesting") {
			this.showInterest = !this.showInterest;
		} else {
			this.saveNewsStory = !this.saveNewsStory;
		}
	};


	alterTLPGalleryDisplay(sourceId) {
		this.showNewsSourcesGallery = !this.showNewsSourcesGallery;
		this.getNewsBySourceId(sourceId);
	}

	getNewsBySourceId(sourceId) {
		setTimeout(() => {
			this.HomeServices.getAllNewsSources()
			.then((response) => {
				let newsSources = response.data.newsSources;
				_.map(newsSources, (newsSourceObj) => {
					if (newsSourceObj.sourceId === sourceId) {
						// console.log(newsSourceObj);
						this.newsSource = newsSourceObj;
						console.log(this.newsSource);

						this.HomeServices.getNewsFromSource(newsSourceObj.newsSourceFormat)
						.then((response) => {
							console.log(response);
							this.articles = response.data.articles;
							console.log(this.articles);
						})
					}
				})

			})
		}, 1500);
	}

	getAllNewsSources() {
		this.HomeServices.getAllNewsSources()
		.then((response) => {
			this.newsSources = response.data.newsSources;
		})
	}

}

HomeController.$inject = ['HomeServices'];

























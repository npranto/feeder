export default class NewsStoryDirective {

	constructor($interval) {
		this.template = require('html!./news-story.html');
		this.$interval = $interval;
	}

}


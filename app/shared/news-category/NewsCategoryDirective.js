export default class NewsCategoryDirective {

	constructor($interval) {
		this.template = require('html!./news-category.html');
		this.$interval = $interval;
	}

}


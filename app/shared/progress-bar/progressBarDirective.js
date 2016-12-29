export default class ProgressBarDirective {

	constructor($interval) {
		this.template = require('html!./progress-bar.html');
		this.$interval = $interval;
	}

}

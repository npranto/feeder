import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './homeRoutes';
import HomeServices from './HomeServices';
import NewsStoryDirective from './../../shared/news-story/NewsStoryDirective';
import HomeController from './HomeController';

export default angular.module('feeder.home', [uiRouter])
	.config(routes)
	.controller('HomeController', HomeController)
	.service('HomeServices', HomeServices)
	.directive('newsStoryDirective', () => new NewsStoryDirective())
	.name



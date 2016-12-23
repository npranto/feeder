import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './homeRoutes';
import HomeServices from './HomeServices';
import NewsAPI from './../../APIs/news-api/NewsAPI';
import NewsStoryDirective from './../../shared/news-story/NewsStoryDirective';
import HomeController from './HomeController';

export default angular.module('feeder.home', [uiRouter])
	.config(routes)
	.controller('HomeController', HomeController)
	.service('HomeServices', HomeServices)
	.factory('NewsAPI', () => new NewsAPI())
	.directive('newsStoryDirective', () => new NewsStoryDirective())
	.name



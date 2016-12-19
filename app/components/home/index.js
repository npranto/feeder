import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './homeRoutes';
import HomeController from './HomeController'

export default angular.module('feeder.home', [uiRouter])
	.config(routes)
	.controller('HomeController', HomeController)
	.name

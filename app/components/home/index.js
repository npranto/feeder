import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './homeRoutes';
import HomeServices from './HomeServices';
import HomeController from './HomeController';

export default angular.module('feeder.home', [uiRouter])
	.config(routes)
	.service('HomeServices', HomeServices)
	.controller('HomeController', HomeController)
	.name


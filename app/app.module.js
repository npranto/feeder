import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.config.js';
import ex from './components/ex';

angular.module('feeder', [uiRouter, 'ngMaterial', ex])
	.config(routes);




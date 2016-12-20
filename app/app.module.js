import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './app.config';
import ex from './components/ex';
import home from './components/home'

angular.module('feeder', [uiRouter, 'ngMaterial', home])
	.config(routes);




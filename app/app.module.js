import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.routing.js';
import ex from './components/ex';

angular.module('feeder', [uiRouter, 'ngMaterial', ex])
	.config(routing);




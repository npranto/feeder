import angular from 'angular';
import uiRouter from 'angular-ui-router'

import routing from './app.routes';


angular.module('feeder', [uiRouter, 'ngMaterial'])
    .config(routing);

// angular.module('feeder', ['ui.router', 'ngMaterial']);



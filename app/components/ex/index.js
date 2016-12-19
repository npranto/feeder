import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './ex.routes';
import ExController from './ex.controller';

export default angular.module('app.ex', [uirouter])
  .config(routing)
  .controller('ExController', ExController)
  .name;
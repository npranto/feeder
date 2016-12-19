import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './ex.routes';
import ExController from './ex.controller';

export default angular.module('feeder.ex', [uiRouter])
  .config(routes)
  .controller('ExController', ExController)
  .name;
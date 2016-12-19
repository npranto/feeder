routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('ex', {
      url: '/',
      template: require('html!./ex.html'),
      controller: 'ExController',
      controllerAs: 'ex'
    });
}
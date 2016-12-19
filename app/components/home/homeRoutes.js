routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('home', {
			url: 'home',
			template: require('html!./home-view.html'),
			controller: 'HomeController',
			controllerAs: 'home'
		})
}
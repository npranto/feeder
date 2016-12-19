routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			template: require('html!./home.html'),
			controller: 'HomeController',
			controllerAs: 'home'
		})
}
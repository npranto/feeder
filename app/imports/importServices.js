let angular = require('angular');
let homeServices = require('./../components/home/homeServices');

angular.module('feeder')
	.service('homeServices', homeServices);





module.exports = homeServices

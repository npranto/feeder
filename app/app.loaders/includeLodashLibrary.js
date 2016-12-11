function includeLodashLibrary($window) {
    if(!$window._){
        console.log("Could not find '_'(lodash) in app module");
    }
    return $window._;
}

// Define dependencies
includeLodashLibrary.$inject = ['$window'];

// Register factory
angular.module('feeder')
    .factory('_', includeLodashLibrary);
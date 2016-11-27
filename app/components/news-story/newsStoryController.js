angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog) {

    	// news-story reactions status
    	


















    	// share options dialog box
    	$scope.shareOptions = ["Facebook", "Twitter", "Google+", "LinkedIn"];
    	var originatorEv;
	    this.openMenu = function($mdOpenMenu, ev) {
	      originatorEv = ev;
	      $mdOpenMenu(ev);
	    };
	    this.announceClick = function(index) {
	      $mdDialog.show(
	        $mdDialog.alert()
	          .title('Google+')
	          .textContent('The news has been shared on Google+')
	          .ok('Ok')
	          .targetEvent(originatorEv)
	      );
	      originatorEv = null;
	    };

    })
angular.module('feeder')
    .controller("newsStoryController", function ($scope, $mdDialog) {
    	var originatorEv;
    	$scope.options = [
    		{
    			
    		}
    	]

	    this.openMenu = function($mdOpenMenu, ev) {
	      originatorEv = ev;
	      $mdOpenMenu(ev);
	    };

	    this.announceClick = function(index) {
	      $mdDialog.show(
	        $mdDialog.alert()
	          .title('You clicked!')
	          .textContent('You clicked the menu item at index ' + index)
	          .ok('Nice')
	          .targetEvent(originatorEv)
	      );
	      originatorEv = null;
	    };
    })
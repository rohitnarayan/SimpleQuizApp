"use strict";
(function(){
	angular.module("app")
		.controller('mainController', ["$rootScope","questionService",'$scope',"$log", function($rootScope,questionService,$scope,$log){
			var vm = this;

			$rootScope.disableIt = false;

			vm.reset = function() {
				$rootScope.disableIt = false;
			}

			vm.disableButton = function() {
				$rootScope.disableIt = true;
			}
		}]);
})();
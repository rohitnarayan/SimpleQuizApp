"use strict";
(function(){
	angular.module("app")
		.controller('questionController', ["questionService",'$rootScope','$scope',"$log", function(questionService,$rootScope,$scope,$log){
			var vm = this;

			// $rootScope.disableIt = false;
			vm.score = questionService.score;
			vm.questions = [
				"Where is Taj Mahal located ?",
				"Where is Qutb Minar located ?",
				"Where is Ooty in India located ?",
				"Where is Burj Khalifa located ?",
				"Where is BHU located ?"
			];

			vm.options = [
				[
					{option : "Kolkata",id:1},
					{option:"Agra",id:2},
					{option:"Mumbai",id:3},
					{option:"Jaipur",id:4}
				],
				[
					{option : "Delhi",id:1},
					{option:"Agra",id:2},
					{option:"Mumbai",id:3},
					{option:"Jaipur",id:4}
				],
				[
					{option : "Kolkata",id:1},
					{option:"Agra",id:2},
					{option:"Kerala",id:3},
					{option:"Jaipur",id:4}
				],
				[
					{option : "Kolkata",id:1},
					{option:"Dubai",id:2},
					{option:"Mumbai",id:3},
					{option:"Banaras",id:4}
				],
				[
					{option : "Kolkata",id:1},
					{option:"Agra",id:2},
					{option:"Mumbai",id:3},
					{option:"Banaras",id:4}
				]
			];

			vm.nextButton=true;
			vm.toggleNext = function() {
				vm.nextButton=false;
			}
			vm.eval = function(data,qno) {
				vm.score = questionService.eval(data,qno);
			}
			vm.reset = function() {
				questionService.reset();
			}
		}]);
})();
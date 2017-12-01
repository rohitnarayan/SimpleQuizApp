
angular.module("app")
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state("home",{
			url:"/home",
			templateUrl:"views/home.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("ques1",{
			url:"/ques1",
			templateUrl:"views/ques1.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("ques2",{
			url:"/ques2",
			templateUrl:"views/ques2.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("ques3",{
			url:"/ques3",
			templateUrl:"views/ques3.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("ques4",{
			url:"/ques4",
			templateUrl:"views/ques4.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("ques5",{
			url:"/ques5",
			templateUrl:"views/ques5.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
		.state("results",{
			url:"/results",
			templateUrl:"views/results.html",
			controller:"questionController",
			controllerAs:"qCtrl"
		})
}])
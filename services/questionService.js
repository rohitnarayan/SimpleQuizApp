"use strict";
angular.module("app")
	.service('questionService', function($log,$location){
		this.correct = ["Agra","Delhi","Kerala","Dubai","Banaras"];
		this.score = 0;

		this.disableIt = false;

		this.reset = function() {
			this.score = 0;
		}

		this.eval = function(data,qno)
		{
			$log.log(data);
			if(this.correct[qno] == data)
			{
				this.score+=1;
			}
		}
	});
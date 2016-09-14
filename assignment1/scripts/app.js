(function(){
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		$scope.inputList = "";
		$scope.message = "";
		$scope.checkInputList = function (){
			if($scope.inputList.length <= 0)
			{
				$scope.message = "Please enter data first";
				return;
			}
			
			var itemCount = $scope.inputList.split(',').length;
			$scope.message = itemCount <= 3 ? "Enjoy!" : "Too much!";
			console.log($scope.inputList.length);
		};
	};
	
})();
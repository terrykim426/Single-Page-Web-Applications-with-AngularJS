(function(){
	'use strict';
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', foundItemsDirective);
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var ctrl = this;
		
		ctrl.searchTerm = "";
		ctrl.found = [];
		
		ctrl.search = function(){
			MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
			.then(function(result){
				ctrl.found = result;
			});
		};
		
		ctrl.remove = function(index){
			ctrl.found.splice(index, 1);
		};
	};
	
	MenuSearchService.$inject = ['$http', '$filter', 'ApiBasePath'];
	function MenuSearchService($http, $filter, ApiBasePath){
		var service = this;
		
		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			})
			.then(function (result) {
				if(searchTerm == "")
				{
					return [];
				}
				
				var foundItems = $filter('filter')(result.data.menu_items, {description: searchTerm});
				
				return foundItems;
			});
		};
	}
	
	function foundItemsDirective(){
		var ddo = {
			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			transclude: true
		};
		
		return ddo;
	}
	
})();
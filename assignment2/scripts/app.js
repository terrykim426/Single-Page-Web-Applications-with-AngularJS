(function(){
	'use strict';
	
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var ItemsTobuy = this;
		
		ItemsTobuy.items = ShoppingListCheckOffService.GetItemToBuy();
		ItemsTobuy.buyItem = function(index){
			ShoppingListCheckOffService.BuyItem(index);
		}
	};
	
	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var ItemsBrought = this;
		
		ItemsBrought.items = ShoppingListCheckOffService.GetItemBrought();
	};
	
	function ShoppingListCheckOffService(){
		var service = this;
		
		var itemsTobuy = [
		{ name: "cookies", quantity: 10 },
		{ name: "ice-cream", quantity: 4 },
		{ name: "soda", quantity: 6 },
		{ name: "milk", quantity: 2 },
		{ name: "chocolate", quantity: 5 }
		];
		
		var itemsBrought = []
		
		service.GetItemToBuy = function(){
			return itemsTobuy;
		};
		
		service.GetItemBrought = function(){
			return itemsBrought;
		};
		
		service.BuyItem = function(index){
			var item = itemsTobuy.splice(index, 1);
			itemsBrought.push(item[0])
		}
	}
	
})();
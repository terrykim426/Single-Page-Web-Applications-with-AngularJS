(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items', 'category'];
	function ItemsController(items, category) {
		var ctrl = this;
		ctrl.items = items;
		ctrl.category = category;
	}
})();
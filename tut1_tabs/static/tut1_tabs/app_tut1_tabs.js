(function (){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products=gems;
	});

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(tabToSet){
			this.tab = tabToSet;
		};
		
		this.isTabSet = function(tabToCheck){
			return this.tab === tabToCheck;
		};
	});

	var gems = [
		{name: 'Dodecahedron',
		price: 2.95,
		description: 'The dodecahedron gem'},
		{name: 'Other gem 1',
		price: 3.5,
		description: 'Other gem'},
		{name: 'Other gem 2',
		price: 4,
		description: 'Another gem'}
		]
		
})();

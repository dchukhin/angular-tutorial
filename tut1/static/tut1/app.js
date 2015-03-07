(function (){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products=gems;
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

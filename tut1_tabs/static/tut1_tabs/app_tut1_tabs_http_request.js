(function (){
	var app = angular.module('store', ['store-directives']);

	app.controller('StoreController', ['$http', '$log', function($http,$log){
		/*Initialize store variable and store.products as empty array so that 
 		* initial page load does not create errors. */
		var store = this;
		store.products = [];

		$http.get('store-products').success(function(data){
			store.products = data;
			console.log('data is: ', data);
			console.log('store.products is: ', store.products);
		});
	}]);

	/*Our review controller takes the current product as the only parameter.
    *Then it adds the current review to the end of the product reviews.*/
	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			/*Now clear the review form so that it is blank for next review.*/
			this.review = {};
		};
	});
	
	var gems = [
		{name: 'Dodecahedron',
		price: 2.95,
		description: 'The dodecahedron gem',
		reviews: [
			{stars:5, 
			body: 'Great gem!', 
			author: 'person@email.com'},
			{stars:1,
			body: 'Bad gem!',
			author: 'other_person@email.com'}] 
		},
		{name: 'Other gem 1',
		price: 3.5,
		description: 'Other gem',
		reviews: [{
			stars: 3,
			body: "Eh, it's ok",
			author: 'someone@here.com'}]
		},
		{name: 'Other gem 2',
		price: 4,
		description: 'Another gem'}
		]
		
})();

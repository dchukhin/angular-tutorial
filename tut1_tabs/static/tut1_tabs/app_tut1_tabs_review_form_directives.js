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

	app.directive('productDescription', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-description'
		};
	});

	app.directive('productReviews', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-reviews'
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

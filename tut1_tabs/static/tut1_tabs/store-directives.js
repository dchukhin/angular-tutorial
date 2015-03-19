(function (){
    var app = angular.module('store-directives', []);

    app.directive('productTabs', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-tabs',
		controller: function(){
			this.tab = 1;

		    this.setTab = function(tabToSet){
        	this.tab = tabToSet;
		    };

        		this.isTabSet = function(tabToCheck){
		            return this.tab === tabToCheck;
        		};
			},
			controllerAs: 'tab'
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

})();

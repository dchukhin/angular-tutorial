(function(){
	var app = angular.module('stats', []);

	app.controller('DayController', function(){
		this.days = days;
	});

	app.controller('TabController', function(){
		/*Tab defined as 1(Monday) at beginning.*/
		this.tab=1;

		/*Method to set the current tab. Used when user clicks on a tab.*/
		this.setTab = function(tabToSet){
			this.tab = tabToSet;
		};

		/*Method to check if the current tab is set. Used to display/highlight
 		the current tab.*/
		this.isTabSet = function(tabToCheck){
			return this.tab === tabToCheck;
		};
	});

	var days = [
	{day: 'Monday',
	people: 200},
	{day: 'Tuesday',
    people: 250},
	{day: 'Wednesday',
    people: 200},
	{day: 'Thursday',
    people: 100},
	{day: 'Friday',
    people: 300},
	{day: 'Saturay',
    people: 400},
	{day: 'Sunday',
    people: 200}]

})();

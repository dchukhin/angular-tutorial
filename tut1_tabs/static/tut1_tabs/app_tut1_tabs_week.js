(function(){
	var app = angular.module('stats', []);

	app.controller('DayController', function(){
		this.days = days;
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

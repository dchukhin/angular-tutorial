from django.shortcuts import render

def tabs(request):
	return render(request, 'tabs.html')

def tabs_week(request):
	return render(request, 'tabs_week.html')

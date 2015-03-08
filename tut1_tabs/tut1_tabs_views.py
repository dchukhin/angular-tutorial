from django.shortcuts import render

def tabs(request):
	return render(request, 'tabs.html')

from django.shortcuts import render

def tabs(request):
	return render(request, 'tabs.html')

def tabs_week(request):
	return render(request, 'tabs_week.html')

def tabs_review_form(request):
	return render(request, 'tabs_review_form.html')

def tabs_review_form_directives(request):
	return render(request, 'tabs_review_form_directives.html')

def product_description(request):
	return render(request, 'product_description.html')

def product_reviews(request):
	return render(request, 'product_reviews.html')

def product_tabs(request):
	return render(request, 'product_tabs.html')

def tabs_http_request(request):
	return render(request, 'tabs_http_request.html')

def store_products(request):
	return render(request, 'store-products.json')

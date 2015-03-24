from django.conf.urls import patterns, include, url
from django.contrib import admin
from tut1 import tut1_views
from tut1_tabs import tut1_tabs_views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'anglr1.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', tut1_views.index),
	url(r'^tabs/$', tut1_tabs_views.tabs),
	url(r'^tabs_week$', tut1_tabs_views.tabs_week),
	url(r'^tabs_review_form$', tut1_tabs_views.tabs_review_form),
	url(r'^tabs_review_form_directives$', tut1_tabs_views.tabs_review_form_directives),
	url(r'^product-description$', tut1_tabs_views.product_description),
	url(r'^product-reviews$', tut1_tabs_views.product_reviews),
	url(r'^product-tabs$', tut1_tabs_views.product_tabs),
	url(r'^tabs_http_request$', tut1_tabs_views.tabs_http_request),
	url(r'^store-products$', tut1_tabs_views.store_products),
)

from django.conf.urls import patterns, include, url
from django.contrib import admin
from tut1 import tut1_views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'anglr1.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', tut1_views.index),
)

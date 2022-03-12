from django.contrib import admin
from django.urls import path, include
from blog_api import urls as blog_api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls', namespace='blog')),
    path('api/', include(blog_api_urls, namespace='blog_api'))
]

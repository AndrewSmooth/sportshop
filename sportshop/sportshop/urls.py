from django.contrib import admin
from django.urls import path
from backend.views import items, ItemView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('item/<int:pk>', ItemView.as_view(), name='item'),
    path('items/<str:url_tags>/<str:ordering>', items, name='items')
]


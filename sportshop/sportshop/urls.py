from django.contrib import admin
from django.urls import path
from backend.views import items, ItemView, ItemsView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('item/<int:pk>', ItemView.as_view(), name='item'),
    # path('items/<str:url_tags>/<str:ordering>', items, name='items')
    path('items/<str:url_tags>/<str:ordering>', ItemsView.as_view(), name='items')
]


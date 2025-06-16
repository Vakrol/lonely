from django.urls import path, include
from .views import register_view
from .views import index
from .views import RegisterView
from .views import login_view, logout_view, user_view


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('register/', RegisterView.as_view(), name='register'),
    path('', index, name='vue-index'),
    path('api/logout/', logout_view),
    path('api/user/', user_view),
]

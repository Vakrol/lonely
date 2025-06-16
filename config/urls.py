from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from frontend import views
from rest_framework.authtoken.views import obtain_auth_token
from users.views import CustomObtainAuthToken

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/login/', CustomObtainAuthToken.as_view(), name='api_token_auth'),
    path('', views.index, name='index'),

]

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(BASE_DIR, 'frontend/dist'))
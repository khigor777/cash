from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^side_editor$','home.views.side_editor'),
    url(r'^', 'home.views.index', name='index')

]

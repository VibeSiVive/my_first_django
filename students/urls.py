# path() is a function that connects the url and views
from django.urls import path
# import views from the directory itself
from . import views 

urlpatterns = [
    # / access it through slash
    path('', views.students, name='students.index')
]
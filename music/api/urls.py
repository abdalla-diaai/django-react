from django.urls import path
from . import views
from .views import *

app = 'api'

urlpatterns = [
    path('room', views.RoomView.as_view(), name='room'),
    path('create-room', views.CreateRoomView.as_view(), name='create-room'),
    path('get-room', views.GetRoom.as_view(), name='get-room'),
    path('join-room', views.JoinRoom.as_view(), name='join-room'),

]
from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('countries', CountryViewset, basename='countries')
router.register('leagues', LeagueViewset, basename='leagues')
router.register('characteristics', CharacteristicViewset, basename='characteristics')



urlpatterns = router.urls
from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
# Create your views here.

class CountryViewset(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [permissions.AllowAny]

def list(self, request):
    queryset = Country.objects.all()
    serializer = CountrySerializer(queryset, many=True)
    return Response(serializer.data)

class LeagueViewset(viewsets.ModelViewSet):
    queryset = League.objects.all()
    serializer_class = LeagueSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = League.objects.all()
        serializer = LeagueSerializer(queryset, many=True)
        return Response(serializer.data)

class CharacteristicViewset(viewsets.ModelViewSet):
    queryset = Characteristic.objects.all()
    serializer_class = CharacteristicSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializer = CharacteristicSerializer(queryset, many=True)
        return Response(serializer.data)
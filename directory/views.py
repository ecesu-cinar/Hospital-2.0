from django.shortcuts import render
from rest_framework import generics
from .models import MedicalUnit, Doctor, Keyword, News, GalleryImage
from .serializers import MedicalUnitSerializer, DetailedMedicalUnitSerializer, DoctorSerializer, DetailedDoctorSerializer, NewsSerializer, DetailedNewsSerializer, GalleryImageSerializer

# Create your views here

class MedicalUnitListView(generics.ListAPIView):
    queryset = MedicalUnit.objects.all()
    serializer_class = MedicalUnitSerializer

class DetailedMedicalUnitView(generics.RetrieveAPIView):
    queryset = MedicalUnit.objects.all()
    serializer_class = DetailedMedicalUnitSerializer

class DoctorListView(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DetailedDoctorView(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DetailedDoctorSerializer

class DoctorsByUnitView(generics.ListAPIView):
    serializer_class = DetailedDoctorSerializer

    def get_queryset(self):
        unit_id = self.kwargs['unit_id']
        return Doctor.objects.filter(unit_id = unit_id)

class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class DetailedNewsView(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = DetailedNewsSerializer

class GalleryImageListView(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer 


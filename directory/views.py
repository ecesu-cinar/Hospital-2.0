from django.shortcuts import render
from rest_framework import generics
from .models import MedicalUnit, Doctor, Keyword, News, GalleryImage
from .serializers import MedicalUnitSerializer, DetailedMedicalUnitSerializer, DoctorSerializer, DetailedDoctorSerializer, NewsSerializer, DetailedNewsSerializer, GalleryImageSerializer,  UserSerializer
from rest_framework.permissions import IsAdminUser
from django.contrib.auth.models import User
from rest_framework.response import Response
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer

# Create your views here

# Costumer side

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

#Admin side

class AdminMedicalUnitListView(generics.ListCreateAPIView):
    queryset = MedicalUnit.objects.all()
    serializer_class = MedicalUnitSerializer
    permission_classes = [IsAdminUser] 

class AdminDetailedMedicalUnitView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MedicalUnit.objects.all()
    serializer_class = DetailedMedicalUnitSerializer
    permission_classes = [IsAdminUser] 

class AdminDoctorListView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAdminUser] 

class AdminDetailedDoctorView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DetailedDoctorSerializer
    permission_classes = [IsAdminUser] 

class AdminNewsListView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [IsAdminUser] 

class AdminDetailedNewsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = DetailedNewsSerializer
    permission_classes = [IsAdminUser] 

class AdminGalleryImageListView(generics.ListCreateAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAdminUser] 

class AdminDetailedGalleryImageView(generics.RetrieveUpdateDestroyAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAdminUser] 

#for super-user whatever that means

class SuperAdminUserListView(generics.ListCreateAPIView):
    queryset = User.objects.filter(is_staff=True)  
    serializer_class = UserSerializer  
    permission_classes = [IsAdminUser]  
    
    def get(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can view admin accounts"}, status=403)
        return super().get(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can create admin accounts"}, status=403)
        return super().post(request, *args, **kwargs)


class SuperAdminUserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.filter(is_staff=True)
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
    
    def get(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can view admin details"}, status=403)
        return super().get(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can update admin accounts"}, status=403)
        return super().put(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({"error": "Only superusers can delete admin accounts"}, status=403)
        return super().delete(request, *args, **kwargs)
    

@method_decorator(ratelimit(key='ip', rate='5/15m', method='POST'), name='post')
class RateLimitedTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer  # Add this line

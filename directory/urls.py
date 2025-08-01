from django.urls import path
from .views import MedicalUnitListView, DetailedMedicalUnitView, DoctorListView, DetailedDoctorView, DoctorsByUnitView, NewsListView, DetailedNewsView, GalleryImageListView 

urlpatterns = [

    path('medical-units/', MedicalUnitListView.as_view(), name = 'all-medical-units'),
    path('medical-units/<int:pk>/', DetailedMedicalUnitView.as_view(), name = 'medical-units-detail'),

    path('doctors/', DoctorListView.as_view(), name='all-doctors'),
    path('doctors/<int:pk>/', DetailedDoctorView.as_view(), name='doctor-detail'),
    
    path('medical-units/<int:unit_id>/doctors/', DoctorsByUnitView.as_view(), name = 'medical-unit-doctor-list'),
    
    path('news/', NewsListView.as_view(), name = 'all-news'),
    path('news/<int:pk>/', DetailedNewsView.as_view(), name = 'news-detail'),

    path('gallery-images/',  GalleryImageListView.as_view(), name = 'all-gallery-images')

]
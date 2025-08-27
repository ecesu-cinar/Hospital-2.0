from django.urls import path
from .views import (
    # Customer views
    MedicalUnitListView, DetailedMedicalUnitView, DoctorListView, DetailedDoctorView, 
    DoctorsByUnitView, NewsListView, DetailedNewsView, GalleryImageListView,
    # Admin views
    AdminMedicalUnitListView, AdminDetailedMedicalUnitView,
    AdminDoctorListView, AdminDetailedDoctorView,
    AdminNewsListView, AdminDetailedNewsView,
    AdminGalleryImageListView, AdminDetailedGalleryImageView,
    SuperAdminUserListView, SuperAdminUserDetailView
)

urlpatterns = [

    # costumer urls (public access)

    path('medical-units/', MedicalUnitListView.as_view(), name = 'all-medical-units'),
    path('medical-units/<int:pk>/', DetailedMedicalUnitView.as_view(), name = 'medical-units-detail'),

    path('doctors/', DoctorListView.as_view(), name='all-doctors'),
    path('doctors/<int:pk>/', DetailedDoctorView.as_view(), name='doctor-detail'),
    
    path('medical-units/<int:unit_id>/doctors/', DoctorsByUnitView.as_view(), name = 'medical-unit-doctor-list'),
    
    path('news/', NewsListView.as_view(), name = 'all-news'),
    path('news/<int:pk>/', DetailedNewsView.as_view(), name = 'news-detail'),

    path('gallery-images/',  GalleryImageListView.as_view(), name = 'all-gallery-images'),

    #admin urls

    path('dashboard/medical-units/', AdminMedicalUnitListView.as_view(), name='admin-medical-units'),
    path('dashboard/medical-units/<int:pk>/', AdminDetailedMedicalUnitView.as_view(), name='admin-medical-units-detail'),
    path('dashboard/doctors/', AdminDoctorListView.as_view(), name='admin-doctors'),
    path('dashboard/doctors/<int:pk>/', AdminDetailedDoctorView.as_view(), name='admin-doctors-detail'),
    path('dashboard/news/', AdminNewsListView.as_view(), name='admin-news'),
    path('dashboard/news/<int:pk>/', AdminDetailedNewsView.as_view(), name='admin-news-detail'),
    path('dashboard/gallery-images/', AdminGalleryImageListView.as_view(), name='admin-gallery-images'),
    path('dashboard/gallery-images/<int:pk>/', AdminDetailedGalleryImageView.as_view(), name='admin-gallery-images-detail'),

    # Super-admin urls wahtever that means

    path('dashboard/users/', SuperAdminUserListView.as_view(), name='admin-users'),
    path('dashboard/users/<int:pk>/', SuperAdminUserDetailView.as_view(), name='admin-users-detail'),

]
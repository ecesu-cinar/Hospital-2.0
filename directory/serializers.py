from rest_framework import serializers
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage

class MedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = ['id' , 'name' , 'image']

class DetailedMedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id' , 'name' , 'image']
    
class DetailedDoctorSerializer(serializers.ModelSerializer):
    unit = MedicalUnitSerializer(read_only=True)

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'education', 'experience', 'language', 'image', 'unit']
    
class NewsSerializer(serializers.ModelSerializer):
    keywords = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
     
    class Meta:
        model = News
        fields = ['id' , 'title' , 'main_image' , 'summary' , 'keywords']


class DetailedNewsSerializer(serializers.ModelSerializer):
    keywords = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
    
    class Meta:
        model = News
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

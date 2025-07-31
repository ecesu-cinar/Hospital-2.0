from rest_framework import serializers
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage

class MedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = ['id' , 'name' , 'image_url']

class DetailedMedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id' , 'name' , 'image_url']
    
class DetailedDoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
    
class NewsSerializer(serializers.ModelSerializer):
    keywords = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
     
    class Meta:
        model = News
        fields = ['id' , 'title' , 'main_image_url' , 'summary' , 'keywords']


class DetailedNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

#not sure about keywords since idk I only want them in news
#also not sure about news ımage
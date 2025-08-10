from rest_framework import serializers
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage
import requests

class MedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = ['id' , 'name' , 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try: 
            response = requests.head(data['image'])
            if response.status_code != 200:
                instance.delete()
                return None
        except:
            instance.delete()
            return None
        
        return data
    

class DetailedMedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try: 
            response = requests.head(data['image'])
            if response.status_code != 200:
                instance.delete()
                return None
        except:
            instance.delete()
            return None
        
        return data

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id' , 'name' , 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try: 
            response = requests.head(data['image'])
            if response.status_code != 200:
                instance.delete()
                return None
        except:
            instance.delete()
            return None
        
        return data
    
class DetailedDoctorSerializer(serializers.ModelSerializer):
    unit = MedicalUnitSerializer(read_only=True)

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'education', 'experience', 'language', 'image', 'unit']
    
    def to_representation(self, instance):
        data = super().to_representation(instance)

        try: 
            response = requests.head(data['image'])
            if response.status_code != 200:
                instance.delete()
                return None
        except:
            instance.delete()
            return None
        
        return data
    
class NewsSerializer(serializers.ModelSerializer):
    keywords = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )
    
    class Meta:
        model = News
        fields = ['id' , 'title' , 'main_image' , 'summary' , 'keywords']

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try: 
            response = requests.head(data['main_image'])
            if response.status_code != 200:
                instance.delete()
                return None
        except:
            instance.delete()
            return None
        
        return data

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

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try:
            response = requests.head(data['image'])
            
            if response.status_code != 200:
                instance.delete()
                return None
            
        except:
            instance.delete()
            return None
        
        return data

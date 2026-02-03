from rest_framework import serializers
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage
import requests
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MedicalUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalUnit
        fields = ['id' , 'name' , 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)

        image_url = data.get('image')
        
        if image_url:
            try:
                response = requests.head(image_url)
                if response.status_code != 200:
                    # Image URL exists but is broken — mark it as missing
                    data['image'] = None
            except:
                data['image'] = None
        else:
            
            data['image'] = None
        
        return data
    

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id' , 'name' , 'image']

    def to_representation(self, instance):
        data = super().to_representation(instance)

        image_url = data.get('image')

        if image_url:
            try:
                response = requests.head(image_url)
                if response.status_code != 200:
                    # Image URL exists but is broken — mark it as missing
                    data['image'] = None
            except:
                data['image'] = None
        else:
            
            data['image'] = None

        return data

class DetailedMedicalUnitSerializer(serializers.ModelSerializer):
    doctors = DoctorSerializer(source='doctor_set', many=True, read_only=True)
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

    medical_unit = MedicalUnitSerializer(read_only=True)
    author = DoctorSerializer(read_only=True)
    
    class Meta:
        model = News
        fields = [
            'id',
            'title',
            'main_image',
            'summary',
            'content',
            'keywords',
            'medical_unit',
            'author',
        ]

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

#for super user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'is_superuser']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # Add custom claims to the token
        token['is_superuser'] = user.is_superuser
        token['is_staff'] = user.is_staff
        token['username'] = user.username
        token['user_id'] = user.id
        
        return token
    
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add extra user info to the response (optional, but helpful)
        data['user'] = {
            'id': self.user.id,
            'username': self.user.username,
            'is_superuser': self.user.is_superuser,
            'is_staff': self.user.is_staff,
        }
        
        return data


from django.contrib import admin
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Register your models here.

admin.site.register(MedicalUnit)
admin.site.register(Doctor)

@admin.register(Keyword)
class KeywordAdmin(admin.ModelAdmin): 
    search_fields = ['name']  

@admin.register(News)
class NewsEditor(admin.ModelAdmin):
    autocomplete_fields = ['keywords']


admin.site.register(GalleryImage)

admin.site.unregister(User)
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    # What fields to show when creating a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_superuser'),
        }),
    )
from django.contrib import admin
from .models import MedicalUnit , Doctor , Keyword , News , GalleryImage

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

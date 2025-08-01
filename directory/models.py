from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class MedicalUnit(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank = True)
    image = models.ImageField(blank=True, upload_to='medical_units/')

    def __str__(self):
        return self.name
    
class Doctor(models.Model):
    name = models.CharField(max_length = 100)
    education = models.TextField(blank = True)
    experience = models.TextField(blank = True)
    language = models.TextField(blank = True)
    image = models.ImageField(blank=True, upload_to='doctors/')
    unit = models.ForeignKey(MedicalUnit, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Keyword(models.Model):
    name = models.CharField(max_length = 50, unique = True)   

    def __str__(self):
        return self.name

class News(models.Model):
    title = models.CharField(max_length=100)
    main_image = models.ImageField(blank=False, upload_to='news_main_images/')
    summary = models.CharField(max_length= 250, blank = False)
    content = RichTextField(blank = False)
    author = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)
    medical_unit = models.ForeignKey(MedicalUnit, on_delete=models.SET_NULL, null=True, blank=True)
    keywords = models.ManyToManyField(Keyword, blank = True)

    class Meta:
        verbose_name_plural = "News"

    def __str__(self):
        return self.title
    
class GalleryImage(models.Model):
    description = models.CharField(max_length = 100, blank = False)
    image =  models.ImageField(blank=False, upload_to='gallery/')
    uploaded_at = models.DateTimeField(auto_now_add = True)
    alt_text = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.description
from django.db import models
from django.utils.timezone import make_aware
from django.utils import timezone


class Student(models.Model):

    full_name = models.CharField(max_length=100)
    mail = models.EmailField(max_length=200, default=None)
    profile_photo = models.ImageField(upload_to='photos/%Y%m%d', default=None)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


class Curator(models.Model):

    full_name = models.CharField(max_length=100)
    mail = models.EmailField(max_length=200, default=None)
    profile_photo = models.ImageField(upload_to='photos/%Y%m%d', default=None)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=1000)
    price = models.IntegerField(default=None)
    rating = models.IntegerField(default=None)

    def __str__(self):
        return self.full_name


class Lesson(models.Model):

    lesson_name = models.CharField(max_length=1000)
    curator_id = models.ForeignKey(Curator, on_delete=models.CASCADE, related_name='Curator')
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='Student')
    date = models.CharField(max_length=1000)

    def __str__(self):
        return self.lesson_name

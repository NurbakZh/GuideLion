from django.contrib import admin
from .models import Student
from .models import Curator
from .models import Lesson
# Register your models here.

admin.site.register(Student)
admin.site.register(Curator)
admin.site.register(Lesson)

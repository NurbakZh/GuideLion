from .models import Student
from .models import Curator
from .models import Lesson
from rest_framework import serializers


class StudentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'full_name', 'mail', 'profile_photo', 'password', 'created_at')


class StudentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class CuratorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curator
        fields = ('id', 'full_name', 'mail', 'profile_photo', 'password', 'created_at', 'category', 'price', 'rating')


class CuratorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curator
        fields = '__all__'


class LessonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'lesson_name', 'curator_id', 'student_id', 'date')


class LessonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('lesson_name', 'curator_id', 'student_id', 'date')

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['student_id'] = StudentListSerializer(instance.student_id).data
        response['curator_id'] = CuratorListSerializer(instance.curator_id).data

        return response

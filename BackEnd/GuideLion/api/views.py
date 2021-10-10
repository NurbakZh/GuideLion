from django.shortcuts import get_object_or_404
from .models import Lesson
from .models import Student
from .models import Curator
from rest_framework import viewsets, status
from rest_framework import permissions
from .serializer import StudentListSerializer, StudentDetailSerializer, CuratorDetailSerializer, LessonListSerializer
from.serializer import CuratorListSerializer
from django.db import models
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response


class StudentViewSet(viewsets.ViewSet):

    def ListAllStudents(self, request):
        queryset = Student.objects.all()
        serializer_class = StudentListSerializer(queryset, many=True)
        permission_classes = [permissions.IsAuthenticated]

        return Response(serializer_class.data)

    def RetrieveStudent(self, request, pk=None):
        queryset = Student.objects.all()
        student = get_object_or_404(queryset, pk=pk)
        serializer = StudentDetailSerializer(student)
        return Response(serializer.data)

    def GetStudentLessons(self, request, pk=None):
        queryset = Lesson.objects.filter(student_id__pk=pk)
        serializer = LessonListSerializer(queryset, many=True)
        return Response(serializer.data)

    def CreateStudent(self, request, format=None):
        serializer = StudentListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CuratorViewSet(viewsets.ViewSet):

    def ListAllCurators(self, request):
        queryset = Curator.objects.all()
        serializer_class = CuratorListSerializer(queryset, many=True)
        permission_classes = [permissions.IsAuthenticated]

        return Response(serializer_class.data)

    def ListBestCurators(self, request):
        queryset = Curator.objects.order_by('-rating')[:5]
        serializer_class = CuratorListSerializer(queryset, many=True)
        permission_classes = [permissions.IsAuthenticated]

        return Response(serializer_class.data)

    def RetrieveCurator(self, request, pk=None):
        queryset = Curator.objects.all()
        curator = get_object_or_404(queryset, pk=pk)
        serializer = CuratorDetailSerializer(curator)
        return Response(serializer.data)

    def CreateCurator(self, request, format=None):
        serializer = CuratorListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def GetCuratorLessons(self, request, pk=None):
        queryset = Lesson.objects.filter(curator_id__pk=pk)
        serializer = LessonListSerializer(queryset, many=True)
        return Response(serializer.data)


class LessonViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def CreateLesson(self, request, format=None):
        serializer = LessonListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



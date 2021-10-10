from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
#
#router = routers.DefaultRouter()
#router.register(r'student', views.StudentViewSet.as_view({'get': 'ListAllStudents'}))
#router.register(r'curator', views.CuratorViewSet)



urlpatterns = [
    #path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('student/', views.StudentViewSet.as_view({'get': 'ListAllStudents'})),
    path('student/<int:pk>', views.StudentViewSet.as_view({'get': 'RetrieveStudent'})),
    path('student/<int:pk>/lessons', views.StudentViewSet.as_view({'get': 'GetStudentLessons'})),
    path('student/create', views.StudentViewSet.as_view({'post': 'CreateStudent'})),

    path('curator/', views.CuratorViewSet.as_view({'get': 'ListAllCurators'})),
    path('curator/<int:pk>', views.CuratorViewSet.as_view({'get': 'RetrieveCurator'})),
    path('curator/<int:pk>/lessons', views.CuratorViewSet.as_view({'get': 'GetCuratorLessons'})),
    path('curator/create', views.CuratorViewSet.as_view({'post': 'CreateCurator'})),
    path('curator/best/', views.CuratorViewSet.as_view({'get': 'ListBestCurators'})),
    path('lesson/create', views.LessonViewSet.as_view({'post': 'CreateLesson'}))
]
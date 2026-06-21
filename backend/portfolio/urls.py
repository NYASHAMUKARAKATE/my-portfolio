from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProjectViewSet, FeaturedProjectViewSet,
    SkillViewSet, ExperienceViewSet,
    PostViewSet, ContactMessageViewSet,
)

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'projects-featured', FeaturedProjectViewSet, basename='project-featured')
router.register(r'skills', SkillViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'posts', PostViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

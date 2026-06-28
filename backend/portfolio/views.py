from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from .models import Project, Skill, Experience, Post, ContactMessage
from .serializers import (
    ProjectListSerializer, ProjectDetailSerializer,
    SkillSerializer, ExperienceSerializer,
    PostListSerializer, PostDetailSerializer,
    ContactMessageSerializer,
)
from .throttles import ContactRateThrottle


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectListSerializer


class FeaturedProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.filter(featured=True)
    serializer_class = ProjectListSerializer


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.filter(is_draft=False)
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PostDetailSerializer
        return PostListSerializer


class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ContactMessage.objects.none()
    serializer_class = ContactMessageSerializer
    throttle_classes = [ContactRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {'detail': 'Message sent successfully.'},
            status=status.HTTP_201_CREATED,
        )

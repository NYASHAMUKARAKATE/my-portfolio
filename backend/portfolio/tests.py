from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from portfolio.models import Project, Skill, Experience, Post, ContactMessage


class ProjectAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.project = Project.objects.create(
            title='Test Project',
            slug='test-project',
            description='A test project',
            tech_stack=['Python', 'Django'],
            github_url='https://github.com/test/test',
        )

    def test_list_projects(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_retrieve_project_by_slug(self):
        response = self.client.get(f'/api/projects/{self.project.slug}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Test Project')

    def test_projects_are_read_only(self):
        response = self.client.post('/api/projects/', {'title': 'Hacked'})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_featured_projects_filter(self):
        self.project.featured = True
        self.project.save()
        response = self.client.get('/api/projects-featured/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)


class SkillAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Skill.objects.create(name='Python', category='backend', proficiency=90)

    def test_list_skills(self):
        response = self.client.get('/api/skills/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)

    def test_skills_are_read_only(self):
        response = self.client.post('/api/skills/', {'name': 'Hacked'})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)


class ExperienceAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Experience.objects.create(
            job_title='Developer',
            company='TestCo',
            start_date='2024-01-01',
            description='Built things',
        )

    def test_list_experience(self):
        response = self.client.get('/api/experience/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)

    def test_experience_is_read_only(self):
        response = self.client.post('/api/experience/', {'job_title': 'Hacked'})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)


class PostAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Post.objects.create(
            title='Published Post',
            slug='published-post',
            content='Hello world',
            is_draft=False,
            published_date='2024-06-01T12:00:00Z',
        )
        Post.objects.create(
            title='Draft Post',
            slug='draft-post',
            content='Not visible',
            is_draft=True,
        )

    def test_list_only_published_posts(self):
        response = self.client.get('/api/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 1)
        self.assertEqual(response.data['results'][0]['title'], 'Published Post')

    def test_draft_not_accessible_by_slug(self):
        response = self.client.get('/api/posts/draft-post/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class ContactMessageAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_submit_contact_message(self):
        data = {
            'name': 'Jane Doe',
            'email': 'jane@example.com',
            'message': 'Hello, great portfolio!',
        }
        response = self.client.post('/api/contact/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)

    def test_contact_rejects_invalid_email(self):
        data = {
            'name': 'Jane',
            'email': 'not-an-email',
            'message': 'Hello',
        }
        response = self.client.post('/api/contact/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_contact_rejects_missing_fields(self):
        response = self.client.post('/api/contact/', {}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_contact_is_create_only(self):
        response = self.client.get('/api/contact/')
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

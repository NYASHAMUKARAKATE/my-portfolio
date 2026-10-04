import os
import sys
import django

# Set up Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Project

def seed_projects():
    print("Clearing existing projects...")
    Project.objects.all().delete()
    
    projects_data = [
        {
            "title": "Java Development Repository",
            "description": "A monorepo containing various Java projects, demonstrating concepts ranging from standard Object-Oriented console applications to full-stack Spring Boot REST APIs. Includes Queueless (a Smart Queue Management system) and NyashaMoney Bank.",
            "tech_stack": ["Java", "Spring Boot", "REST API", "JavaScript", "HTML/CSS"],
            "github_url": "https://github.com/NYASHAMUKARAKATE/java_dev",
            "live_url": "",
            "featured": True,
            "order": 1
        },
        {
            "title": "To-Do App",
            "description": "A fast and secure full-stack To-Do application built with a Python FastAPI backend and a React/TypeScript frontend. Features secure JWT authentication, task management, and a modern dark theme with glassmorphism effects.",
            "tech_stack": ["Python", "FastAPI", "React", "TypeScript", "JWT"],
            "github_url": "https://github.com/NYASHAMUKARAKATE/to_do_app",
            "live_url": "",
            "featured": True,
            "order": 2
        },
        {
            "title": "LocalConnect",
            "description": "A community commerce platform connecting residents with local shops, facilitated by ambassadors. Features a FastAPI backend and a React/Vite frontend.",
            "tech_stack": ["Python", "FastAPI", "React", "Node.js", "Vite"],
            "github_url": "https://github.com/NYASHAMUKARAKATE/LocalConnect",
            "live_url": "",
            "featured": True,
            "order": 3
        },
        {
            "title": "Campus News",
            "description": "A modern, high-performance Flutter application designed to keep students informed. It serves as a centralized hub for real-time campus updates, featuring categorized content, smart search, offline bookmarks, and a dedicated admin dashboard.",
            "tech_stack": ["Flutter", "Dart", "Firebase", "Riverpod", "Firestore"],
            "github_url": "https://github.com/Musawenkosi-Moyo/Campus-News",
            "live_url": "",
            "featured": True,
            "order": 4
        }
    ]

    for data in projects_data:
        Project.objects.create(**data)
        print(f"Created project: {data['title']}")
        
    print("Seeding complete!")

if __name__ == '__main__':
    seed_projects()

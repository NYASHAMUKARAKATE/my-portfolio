from django.contrib import admin
from .models import Project, Skill, Experience, Post, ContactMessage


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'featured', 'order', 'created_at']
    list_filter = ['featured']
    list_editable = ['featured', 'order']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'order']
    list_filter = ['category']
    list_editable = ['proficiency', 'order']
    search_fields = ['name']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['job_title', 'company', 'start_date', 'end_date', 'is_current', 'order']
    list_filter = ['is_current']
    list_editable = ['order']
    search_fields = ['job_title', 'company']


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_draft', 'published_date', 'updated_at']
    list_filter = ['is_draft']
    list_editable = ['is_draft']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'is_read', 'created_at']
    list_filter = ['is_read']
    list_editable = ['is_read']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['name', 'email', 'message', 'created_at']

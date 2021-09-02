from django.contrib import admin
from .models import Bookmark, Category, Tag

admin.site.register(Bookmark)
admin.site.register(Category)
admin.site.register(Tag)

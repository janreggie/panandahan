from rest_framework import viewsets

from .serializers import BookmarkSerializer, CategorySerializer, TagSerializer
from .models import Bookmark, Category, Tag


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all().order_by("title")
    serializer_class = BookmarkSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by("name")
    serializer_class = TagSerializer

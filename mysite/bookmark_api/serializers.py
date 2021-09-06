from rest_framework import serializers

from .models import Bookmark, Category, Tag


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class BookmarkSerializer(serializers.HyperlinkedModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    tag = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Bookmark
        fields = ["id", "link", "caption", "title", "categories", "tag"]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["categories"] = CategorySerializer(
            instance.categories.all(), many=True
        ).data
        rep["tags"] = TagSerializer(instance.tags.all(), many=True).data
        return rep

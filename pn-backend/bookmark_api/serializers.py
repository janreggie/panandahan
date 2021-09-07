from rest_framework import serializers

from .models import Bookmark, Category, Tag


# TODO: How do I display bookmarks in the Tags and Categories?


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
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Bookmark
        fields = ["id", "link", "caption", "title", "categories", "tags"]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["categories"] = [
            {"id": entry["id"], "name": entry["name"]}
            for entry in CategorySerializer(instance.categories.all(), many=True).data
        ]
        rep["tags"] = [
            {"id": entry["id"], "name": entry["name"]}
            for entry in TagSerializer(instance.tags.all(), many=True).data
        ]

        return rep

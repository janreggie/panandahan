from rest_framework import serializers

from .models import Bookmark, Category, Tag


# TODO: How do I display bookmarks in the Tags and Categories?


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["count"] = len(instance.bookmark_set.all())
        rep["bookmarks"] = [
            {
                "id": entry.id,
                "title": entry.title,
                "caption": entry.caption,
                "link": entry.link,
            }
            for entry in instance.bookmark_set.all()
        ]
        return rep


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["count"] = len(instance.bookmark_set.all())
        rep["bookmarks"] = [
            {
                "id": entry.id,
                "title": entry.title,
                "caption": entry.caption,
                "link": entry.link,
            }
            for entry in instance.bookmark_set.all()
        ]
        return rep


class BookmarkSerializer(serializers.HyperlinkedModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Bookmark
        fields = ["id", "link", "caption", "title", "categories", "tags"]

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["categories"] = [
            {"id": entry["id"], "name": entry["name"], "count": entry["count"]}
            for entry in CategorySerializer(instance.categories.all(), many=True).data
        ]
        rep["tags"] = [
            {"id": entry["id"], "name": entry["name"], "count": entry["count"]}
            for entry in TagSerializer(instance.tags.all(), many=True).data
        ]

        return rep

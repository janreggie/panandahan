from django.db import models

from .Category import Category
from .Tag import Tag


class Bookmark(models.Model):
    link = models.TextField(unique=True)
    caption = models.TextField(null=True, blank=True)
    title = models.TextField()
    categories = models.ManyToManyField(Category, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)

    def __str__(self) -> str:
        return f"{self.title} (<{self.link}>)"

    def __repr__(self) -> str:
        return f"{self.title} (<{self.link}>)"

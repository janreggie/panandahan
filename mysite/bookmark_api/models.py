from django.db import models


class Bookmark(models.Model):
    link = models.TextField(unique=True)
    caption = models.TextField(null=True)
    title = models.TextField()

    def __str__(self):
        return f"{self.title} (<{self.link}>)"


class Category(models.Model):
    name = models.TextField(unique=True)
    uses = models.ManyToManyField(Bookmark)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.TextField(unique=True)
    uses = models.ManyToManyField(Bookmark)

    def __str__(self):
        return self.name

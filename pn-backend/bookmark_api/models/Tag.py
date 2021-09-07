from django.db import models


class Tag(models.Model):
    name = models.TextField(unique=True)

    def __str__(self) -> str:
        return self.name

    def __repr__(self) -> str:
        return self.name

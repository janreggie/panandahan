from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"bookmarks", views.BookmarkViewSet)
router.register(r"categories", views.CategoryViewSet)
router.register(r"tags", views.TagViewSet)

# Wire up our API using automatic URL routing.
# Additionally, include login URLs for browseable API
urlpatterns = [
    path("", include(router.urls)),
]

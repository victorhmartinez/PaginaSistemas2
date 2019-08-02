from django_filters import rest_framework as filters
from .models import *

class CategoryFilter(filters.FilterSet):
    class Meta:
        model = Category
        fields = ['nameCategory']


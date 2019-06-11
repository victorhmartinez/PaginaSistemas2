from rest_framework import serializers
from . import models
from login.models import Category, ItemCategory, Persons, Persons_departaments, Persons_role, Persons_media, Persons_Contacts, Subject_matter, Pre_requirements, Site, Info_site, Content, Content_media, Content_info, Menu, SubMenu

class CategorySerializer (serializers.ModelSerializer):

    class Meta:
        model = models.Category
        fields = "__all__"  

class ItemCategorySerializer(serializers.ModelSerializer):
    
    category = serializers.PrimaryKeyRelatedField(queryset=models.Category.objects.all())

    class Meta:
        model = models.ItemCategory
        fields = "__all__"   

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Users
        fields = "__all__"

class PersonsSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Persons
        fields = "__all__"

class Persons_depaSerializer (serializers.ModelSerializer):
    
    item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    universitycareer = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=models.Persons.objects.all())

    class Meta:
        model = models.Persons_departaments
        fields = "__all__"

class Persons_roleSerializer (serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=models.Persons.objects.all())

    class Meta: 
        model = models.Persons_role
        fields = "__all__"

class Persons_mediaSerializer (serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=models.Persons.objects.all())

    class Meta:
        model = models.Persons_media
        fields = "__all__"

class Persons_ContactSerializer(serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=models.Persons.objects.all())

    class Meta:
        model = models.Persons_Contacts
        fields = "__all__"

class Subject_matter_Serializer (serializers.ModelSerializer):

    universitycareer = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())

    class Meta:
        model = models.Subject_matter
        fields = "__all__"

class Pre_requirements_Serializer (serializers.ModelSerializer):

    subject_matter_id_id = serializers.PrimaryKeyRelatedField(queryset=models.Subject_matter.objects.all())
    subject_matter_requeriment_id = serializers.PrimaryKeyRelatedField(queryset=models.Subject_matter.objects.all())

    class Meta:
        model = models.Pre_requirements
        fields = "__all__"

class Site_Serializer (serializers.ModelSerializer):
    class Meta:
        model = models.Site
        fields = "__all__"

class Info_site_Serializer (serializers.ModelSerializer):

    type_info = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    site_site_id = serializers.PrimaryKeyRelatedField(queryset=models.Site.objects.all())

    class Meta:
        model = models.Info_site
        fields = "__all__"

class Content_Serializer (serializers.ModelSerializer):

    type_event = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    academic_period = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    content_universitycareer = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    
    class Meta:
        model = models.Content
        fields = "__all__"

class Content_media_Serializer (serializers.ModelSerializer):

    item_category_item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())
    content_content_id = serializers.PrimaryKeyRelatedField(queryset=models.Content.objects.all())

    class Meta: 
        model = models.Content_media
        fields = "__all__"

class Content_info_Serializer (serializers.ModelSerializer):

    content_content_id = serializers.PrimaryKeyRelatedField(queryset=models.Content.objects.all())

    class Meta:
        model = models.Content_info
        fields = "__all__"

class Menu_Serializer (serializers.ModelSerializer):

    item_category_item_category_id = serializers.PrimaryKeyRelatedField(queryset=models.ItemCategory.objects.all())

    class Meta:
        model = models.Menu
        fields = "__all__"

class SubMenu_Serializer (serializers.ModelSerializer):

    menu_menu_id = serializers.PrimaryKeyRelatedField(queryset=models.Menu.objects.all())

    class Meta:
        model = models.SubMenu
        fields = "__all__"
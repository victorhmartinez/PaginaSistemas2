from login.models import *
from rest_framework import routers, serializers, viewsets
from rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth.models import User
from allauth.account import app_settings as allauth_settings
#from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
#from allauth.account.utils import setup_user_email

class RegistrationSerializer (RegisterSerializer):

    person_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())
    def get_cleaned_data(self):
        return {
            'person_id': self.validated_data.get('person_id', ''),
            'email': self.validated_data.get('email', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request.data)
        user.person_id = Persons(person_id=request.data['person_id'])
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        user.save()
        return user 

class UsersSerializer (serializers.ModelSerializer):

    person_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())

    class Meta:
        model = Users
        fields = "__all__"

class PersonsSerializer (serializers.ModelSerializer):

    class Meta:
        model = Persons
        fields = "__all__"

class CategorySerializer (serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"  

class ItemCategorySerializer(serializers.ModelSerializer):
    
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = ItemCategory
        fields = "__all__"   

class Persons_depaSerializer (serializers.ModelSerializer):
    
    item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    universitycareer = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())

    class Meta:
        model = Persons_departaments
        fields = "__all__"

class Persons_roleSerializer (serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())

    class Meta: 
        model = Persons_role
        fields = "__all__"

class Persons_mediaSerializer (serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())

    class Meta:
        model = Persons_media
        fields = "__all__"

class Persons_ContactSerializer(serializers.ModelSerializer):

    item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    persons_id = serializers.PrimaryKeyRelatedField(queryset=Persons.objects.all())

    class Meta:
        model = Persons_Contacts
        fields = "__all__"

class Subject_matter_Serializer (serializers.ModelSerializer):

    universitycareer = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())

    class Meta:
        model = Subject_matter
        fields = "__all__"

class Pre_requirements_Serializer (serializers.ModelSerializer):

    subject_matter_id_id = serializers.PrimaryKeyRelatedField(queryset=Subject_matter.objects.all())
    subject_matter_requeriment_id = serializers.PrimaryKeyRelatedField(queryset=Subject_matter.objects.all())

    class Meta:
        model = Pre_requirements
        fields = "__all__"

class Site_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = "__all__"

class Info_site_Serializer (serializers.ModelSerializer):

    type_info = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    site_site_id = serializers.PrimaryKeyRelatedField(queryset=Site.objects.all())

    class Meta:
        model = Info_site
        fields = "__all__"

class Content_Serializer (serializers.ModelSerializer):

    type_event = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    academic_period = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    content_universitycareer = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    
    class Meta:
        model = Content
        fields = ['content_id','title','description','type_event','academic_period','content_universitycareer']

class Content_media_Serializer (serializers.ModelSerializer):

    item_category_item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())
    content_content_id = serializers.PrimaryKeyRelatedField(queryset=Content.objects.all())

    class Meta: 
        model = Content_media
        fields = "__all__"

class Content_info_Serializer (serializers.ModelSerializer):

    content_content_id = serializers.PrimaryKeyRelatedField(queryset=Content.objects.all())

    class Meta:
        model = Content_info
        fields = "__all__"

class Menu_Serializer (serializers.ModelSerializer):

    item_category_item_category_id = serializers.PrimaryKeyRelatedField(queryset=ItemCategory.objects.all())

    class Meta:
        model = Menu
        fields = "__all__"
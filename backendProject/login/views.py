from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_200_OK)
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets, status
from . import models
from . import serializers


from rest_framework.permissions import IsAuthenticated
from login.models import Category, ItemCategory, Persons, Persons_departaments, Persons_role, Persons_media, Persons_Contacts, Subject_matter, Pre_requirements, Site, Info_site, Content, Content_media, Content_info, Menu, SubMenu
from login.serializers import CategorySerializer, ItemCategorySerializer, PersonsSerializer, Persons_depaSerializer, Persons_roleSerializer, Persons_mediaSerializer, Persons_ContactSerializer, Subject_matter_Serializer, Pre_requirements_Serializer, Site_Serializer, Info_site_Serializer, Content_Serializer, Content_media_Serializer, Content_info_Serializer, Menu_Serializer, SubMenu_Serializer

@permission_classes((AllowAny,))
class ItemCategoryRolList (generics.ListAPIView):
    try:
        categoryRol = models.Category.objects.get(nameCategory="rol usuario")
        queryset = models.ItemCategory.objects.filter(category=categoryRol)
        serializer_class = ItemCategorySerializer
    except ObjectDoesNotExist:
        queryset = models.ItemCategory.objects.none()
        serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryTitulacionList (generics.ListAPIView):
    try:
        categoryTitulacion = models.Category.objects.get(nameCategory="titulación")
        queryset = models.ItemCategory.objects.filter(category=categoryTitulacion)
        serializer_class = ItemCategorySerializer
    except ObjectDoesNotExist:
        queryset = models.ItemCategory.objects.none()
        serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryAcademicPeriodList (generics.ListAPIView):
    try:
        categoryAcademicPeriod = models.Category.objects.get(nameCategory="periodo academico")
        queryset = models.ItemCategory.objects.filter(category=categoryAcademicPeriod)
        serializer_class = ItemCategorySerializer
    except ObjectDoesNotExist:
        queryset = models.ItemCategory.objects.none()
        serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryTypeContentList (generics.ListAPIView):
    try:
        categoryTypeContent = models.Category.objects.get(nameCategory="tipo contenido")
        queryset = models.ItemCategory.objects.filter(category=categoryTypeContent)
        serializer_class = ItemCategorySerializer
    except ObjectDoesNotExist:
        queryset = models.ItemCategory.objects.none()
        serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryTypeEventList (generics.ListAPIView):
    try:
        categoryTypeEvent = models.Category.objects.get(nameCategory="tipo evento")
        queryset = models.ItemCategory.objects.filter(category=categoryTypeEvent)
        serializer_class = ItemCategorySerializer
    except ObjectDoesNotExist:
        queryset = models.ItemCategory.objects.none()
        serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class CategoryList (generics.ListCreateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = CategorySerializer

@permission_classes((AllowAny,))
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Category.objects.all()
    serializer_class = CategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryList(generics.ListCreateAPIView):
    queryset = models.ItemCategory.objects.all()
    serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class ItemCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ItemCategory.objects.all()
    serializer_class = ItemCategorySerializer

@permission_classes((AllowAny,))
class PersonsList (generics.ListCreateAPIView):
    queryset = models.Persons.objects.all()
    serializer_class = PersonsSerializer

@permission_classes((AllowAny,))
class PersonsDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Persons.objects.all()
    serializer_class = PersonsSerializer

@permission_classes((AllowAny,))
class Persons_departamentsList (generics.ListCreateAPIView):
    queryset = models.Persons_departaments.objects.all()
    serializer_class = Persons_depaSerializer

@permission_classes((AllowAny,))
class Persons_departamentsDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Persons_departaments.objects.all()
    serializer_class = Persons_depaSerializer

@permission_classes((AllowAny,))
class Persons_roleList (generics.ListCreateAPIView):
    queryset = models.Persons_role.objects.all()
    serializer_class = Persons_roleSerializer

@permission_classes((AllowAny,))
class Persons_roleDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Persons_role.objects.all()
    serializer_class = Persons_roleSerializer

@permission_classes((AllowAny,))
class Persons_mediaList (generics.ListCreateAPIView):
    queryset = models.Persons_media.objects.all()
    serializer_class = Persons_mediaSerializer

@permission_classes((AllowAny,))
class Persons_mediaDetail (generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Persons_media.objects.all()
    serializer_class = Persons_mediaSerializer

@permission_classes((AllowAny,))
class Persons_ContactsList(generics.ListCreateAPIView):
    queryset = models.Persons_Contacts.objects.all()
    serializer_class = Persons_ContactSerializer

@permission_classes((AllowAny,))
class Persons_ContactsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Persons_Contacts.objects.all()
    serializer_class = Persons_ContactSerializer

@permission_classes((AllowAny,))
class Subject_matterList(generics.ListCreateAPIView):
    queryset = models.Subject_matter.objects.all()
    serializer_class = Subject_matter_Serializer

@permission_classes((AllowAny,))
class Subject_matterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Subject_matter.objects.all()
    serializer_class = Subject_matter_Serializer

@permission_classes((AllowAny,))
class Pre_requirementsList(generics.ListCreateAPIView):
    queryset = models.Pre_requirements.objects.all()
    serializer_class = Pre_requirements_Serializer

@permission_classes((AllowAny,))
class Pre_requirementsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Pre_requirements.objects.all()
    serializer_class = Pre_requirements_Serializer

@permission_classes((AllowAny,))
class SiteList(generics.ListCreateAPIView):
    queryset = models.Site.objects.all()
    serializer_class = Site_Serializer

@permission_classes((AllowAny,))
class SiteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Site.objects.all()
    serializer_class = Site_Serializer

@permission_classes ((AllowAny,))
class Info_siteList(generics.ListCreateAPIView):
    queryset = models.Info_site.objects.all()
    serializer_class = Info_site_Serializer

@permission_classes ((AllowAny,))
class Info_siteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Info_site.objects.all()
    serializer_class = Info_site_Serializer

@permission_classes ((AllowAny,))
class ContentList(generics.ListCreateAPIView):
    queryset = models.Content.objects.all()
    serializer_class = Content_Serializer

@permission_classes ((AllowAny,))
class ContentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Content.objects.all()
    serializer_class = Content_Serializer

@permission_classes ((AllowAny,))
class Content_mediaList(generics.ListCreateAPIView):
    queryset = models.Content_media.objects.all()
    serializer_class = Content_media_Serializer

@permission_classes ((AllowAny,))
class Content_mediaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Content_media.objects.all()
    serializer_class = Content_media_Serializer

@permission_classes ((AllowAny,))
class Content_infoList(generics.ListCreateAPIView):
    queryset = models.Content_info.objects.all()
    serializer_class = Content_info_Serializer

@permission_classes ((AllowAny,))
class Content_infoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Content_info.objects.all()
    serializer_class = Content_info_Serializer

@permission_classes ((AllowAny,))
class MenuList(generics.ListCreateAPIView):
    queryset = models.Menu.objects.all()
    serializer_class = Menu_Serializer

@permission_classes ((AllowAny,))
class MenuDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Menu.objects.all()
    serializer_class = Menu_Serializer

@permission_classes ((AllowAny,))
class SubMenuList(generics.ListCreateAPIView):
    queryset = models.SubMenu.objects.all()
    serializer_class = SubMenu_Serializer

@permission_classes ((AllowAny,))
class SubMenuDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.SubMenu.objects.all()
    serializer_class = SubMenu_Serializer

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'}, status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'}, status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=HTTP_200_OK)

@csrf_exempt
@api_view(["GET"])
@permission_classes((IsAuthenticated,))
def usuario(request):
    if request.method == 'GET':
        users = models.Users.objects.all()
        serializer = serializers.UserSerializer(users, many=True)
        return Response(serializer.data)

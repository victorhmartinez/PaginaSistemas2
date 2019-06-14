from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone

class Category (models.Model):
    idCategory = models.AutoField(primary_key=True)
    nameCategory = models.CharField(max_length= 255)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.nameCategory

class ItemCategory (models.Model):
    idItemCategory = models.AutoField(primary_key=True) 
    nameItemCategory = models.CharField(max_length= 255)
    active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)

    def __str__(self):
        return self.nameItemCategory

class Persons(models.Model):
    person_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    second_name = models.CharField(max_length=255)
    first_last_name = models.CharField(max_length=255)
    second_last_name = models.CharField(max_length=255)

    def __str__(self):
        return self.first_name +" "+ self.first_last_name

class Persons_departaments (models.Model):
    persons_departaments_id = models.AutoField(primary_key=True)
    persons_id = models.ForeignKey(Persons, on_delete = models.CASCADE)
    item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE,null=True, related_name="item_category_id")
    universitycareer = models.ForeignKey(ItemCategory, on_delete = models.CASCADE, null=True,related_name="universitycareer")

class Persons_role (models.Model):
    persons_role_id = models.AutoField(primary_key=True)
    item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)
    persons_id = models.ForeignKey(Persons, on_delete = models.CASCADE)

class Persons_media (models.Model):
    persons_media_id = models.AutoField(primary_key=True)
    path = models.CharField(max_length=255)
    item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)
    persons_id = models.ForeignKey(Persons, on_delete = models.CASCADE)

class Persons_Contacts (models.Model):
    contact_info_id = models.AutoField(primary_key=True)
    item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)
    persons_id = models.ForeignKey(Persons, on_delete = models.CASCADE)

class Subject_matter (models.Model):
    subject_matter_id = models.AutoField(primary_key=True)
    name_subject_matter = models.CharField(max_length=255)
    universitycareer = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)

    def __str__(self):
        return self.name_subject_matter

class Pre_requirements (models.Model):
    pre_requirements_id = models.AutoField(primary_key=True)
    subject_matter_id_id = models.ForeignKey('Subject_matter', on_delete=models.CASCADE, related_name='subject_matter_id_id')
    subject_matter_requeriment_id = models.ForeignKey('Subject_matter', on_delete=models.CASCADE, related_name='subject_matter_requeriment_id')

class Site (models.Model):
    site_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45, null=False)
    icon = models.CharField(max_length=45, null=False)
    favicon = models.CharField(max_length=45, null=False)

    def __str__(self):
        return self.title

class Info_site (models.Model):
    info_site_id = models.AutoField(primary_key=True)
    site_site_id = models.ForeignKey(Site, on_delete = models.CASCADE)
    description = models.CharField(max_length=45, null=False)
    type_info = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)

class Content (models.Model):
    content_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45, null = False)
    description = models.CharField(max_length=500, null=False)
    update_time = models.DateTimeField(default=timezone.now, null=False, blank=False)
    create_time = models.DateTimeField(default=timezone.now, null=False, blank=False)
    type_event = models.ForeignKey('ItemCategory', on_delete=models.CASCADE, related_name='type_event')
    academic_period = models.ForeignKey('ItemCategory', on_delete=models.CASCADE, related_name='academic_period')
    content_universitycareer = models.ForeignKey('ItemCategory', on_delete=models.CASCADE, related_name='content_universitycareer')

    def __str__(self):
        return self.title

class Content_media (models.Model):
    content_media_id = models.AutoField(primary_key=True)
    path = models.CharField(max_length=500)
    item_category_item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)
    content_content_id = models.ForeignKey(Content, on_delete = models.CASCADE)

class Content_info (models.Model):
    content_info_id = models.AutoField(primary_key=True)
    date = models.DateTimeField(default=timezone.now)
    place = models.CharField(max_length=45, null=False)
    link_form = models.CharField(max_length=200, null=False)
    url = models.CharField(max_length=200, null=False)
    content_content_id = models.ForeignKey(Content, on_delete = models.CASCADE)

class Menu (models.Model):
    menu_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, null=False)
    orden = models.IntegerField(null=False)
    item_category_item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)

class SubMenu (models.Model):
    idSubMenu = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, null=False)
    orden = models.IntegerField(null=False)
    url = models.CharField(max_length=200, null=False)
    menu_menu_id = models.ForeignKey(Menu, on_delete = models.CASCADE)


class UserManager(BaseUserManager):
    def create_superuser(self, person_id, username, email, password):
        person_id = Persons.objects.get(person_id=person_id)
        user = self.model(username = username, email = email, person_id = person_id)
        email = self.normalize_email(email)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def get_by_natural_key(self, username):
        return self.get(username=username)

class Users(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=15, unique=True, null=False)
    email = models.EmailField(max_length=100, unique=True, null=False)
    is_admin = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    update_time = models.DateTimeField(default=timezone.now)
    create_time = models.DateTimeField(default=timezone.now)
    person_id = models.ForeignKey(Persons, on_delete = models.CASCADE)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','person_id']

    class Meta:
        verbose_name = ('User')
        verbose_name_plural = ('Users')

    objects = UserManager()


    def has_perm(self, perm, obj=None):
        return True
        
    def has_module_perms(self, app_label):
        return True

    def is_staff(self):
        return self.is_staff

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
    Persons_role = models.ManyToManyField(ItemCategory)

    def __str__(self):
        return self.first_name +" "+ self.first_last_name

class Persons_departaments (models.Model):
    persons_departaments_id = models.AutoField(primary_key=True)
    item_category_id = models.ForeignKey(ItemCategory, on_delete = models.CASCADE)
    persons_id = models.ForeignKey(Persons, on_delete = models.CASCADE)

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

from django.conf.urls import url, include
from login import views
from rest_framework.authtoken import views as viewsToken
#from rest_framework.urlpatterns import format_sufifix_patterns

urlpatterns=[
    #url(r'login/', views.login, name="login" ),
    url(r'^login$', views.login),
    url(r'^usuario$', views.usuario),
    #url(r'api-token-auth/', viewsToken.obtain_auth_token, name="api-token-auth" ),    
    url(r'^category/(?P<pk>[0-9]+)/$', views.CategoryDetail.as_view()),
    url(r'^category/$',views.CategoryList.as_view()),
    #url(r'^itemcategoryRol/$',views.ItemCategoryRolList.as_view()),
    url(r'^itemcategory/(?P<pk>[0-9]+)/$', views.ItemCategoryDetail.as_view()),
    url(r'^itemcategory/$',views.ItemCategoryList.as_view()),

      
    url(r'^persons/$',views.PersonsList.as_view()),
    url(r'^persons/(?P<pk>[0-9]+)/$', views.PersonsDetail.as_view()),
    url(r'^personsDepartments/$',views.Persons_departamentsList.as_view()),
    url(r'^personsDepartments/(?P<pk>[0-9]+)/$', views.Persons_departamentsDetail.as_view()),
    url(r'^personsRole/$',views.Persons_roleList.as_view()),
    url(r'^personsRole/(?P<pk>[0-9]+)/$', views.Persons_roleDetail.as_view()),
    url(r'^personsMedia/$',views.Persons_mediaList.as_view()),
    url(r'^personsMedia/(?P<pk>[0-9]+)/$', views.Persons_mediaDetail.as_view()),
    url(r'^personsContact/$',views.Persons_ContactsList.as_view()),
    url(r'^personsContact/(?P<pk>[0-9]+)/$', views.Persons_ContactsDetail.as_view()),
]
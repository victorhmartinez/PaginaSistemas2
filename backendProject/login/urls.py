from django.conf.urls import url, include
from login import views
from rest_framework.authtoken import views as viewsToken
#from rest_framework.urlpatterns import format_sufifix_patterns

urlpatterns=[
    #url(r'login/', views.login, name="login" ),
    url(r'^login$', views.login),
    url(r'^usuario$', views.usuario),
    url(r'api-token-auth/', viewsToken.obtain_auth_token, name="api-token-auth" ),    
    url(r'^category/(?P<pk>[0-9]+)/$', views.CategoryDetail.as_view()),
    url(r'^category/$',views.CategoryList.as_view()),
    url(r'^itemcategoryRol/$',views.ItemCategoryRolList.as_view()),
    url(r'^itemcategoryTitulacion/$',views.ItemCategoryTitulacionList.as_view()),
    url(r'^itemcategoryAcademicPeriod/$',views.ItemCategoryAcademicPeriodList.as_view()),
    url(r'^itemcategoryTyeEvent/$',views.ItemCategoryTypeEventList.as_view()),
    url(r'^itemcategoryTypeContent/$',views.ItemCategoryTypeContentList.as_view()),

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
    url(r'^subjectMatter/$',views.Subject_matterList.as_view()),
    url(r'^subjectMatter/(?P<pk>[0-9]+)/$', views.Subject_matterDetail.as_view()),
    url(r'^preRequirements/$',views.Pre_requirementsList.as_view()),
    url(r'^preRequirements/(?P<pk>[0-9]+)/$', views.Pre_requirementsDetail.as_view()),
    url(r'^site/$',views.SiteList.as_view()),
    url(r'^site/(?P<pk>[0-9]+)/$', views.SiteDetail.as_view()),
    url(r'^infoSite/$',views.Info_siteList.as_view()),
    url(r'^infoSite/(?P<pk>[0-9]+)/$', views.Info_siteDetail.as_view()),
    url(r'^content/$',views.ContentList.as_view()),
    url(r'^content/(?P<pk>[0-9]+)/$', views.ContentDetail.as_view()),
    url(r'^contentMedia/$',views.Content_mediaList.as_view()),
    url(r'^contentMedia/(?P<pk>[0-9]+)/$', views.Content_mediaDetail.as_view()),
    url(r'^contentInfo/$',views.Content_infoList.as_view()),
    url(r'^contentInfo/(?P<pk>[0-9]+)/$', views.Content_infoDetail.as_view()),
    url(r'^menu/$',views.MenuList.as_view()),
    url(r'^menu/(?P<pk>[0-9]+)/$', views.MenuDetail.as_view()),
    url(r'^subMenu/$',views.SubMenuList.as_view()),
    url(r'^subMenu/(?P<pk>[0-9]+)/$', views.SubMenuDetail.as_view())
]
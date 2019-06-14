import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CategoryComponent } from './components/category/category.component'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ItemcategoryComponent } from './components/itemcategory/itemcategory.component';

import { PersonsroleComponent } from './components/personsrole/personsrole.component';
import { PersonComponent } from './components/person/person.component';
import { PersonsmediaComponent } from './components/personsmedia/personsmedia.component';
import { PersoncontactsComponent } from './components/personcontacts/personcontacts.component';
import { PersonDepartamentComponent } from './components/person-departament/person-departament.component';
import { ContentComponent } from './components/content/content.component';
import { ContentMediaComponent } from './components/content-media/content-media.component';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { SiteComponent } from './components/site/site.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { InfositeComponent } from './components/infosite/infosite.component';
import { SubjectMatterComponent } from './components/subject-matter/subject-matter.component';
import { PreRequirementsComponent } from './components/pre-requirements/pre-requirements.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CategoryComponent,
    ItemcategoryComponent,
    PersonsroleComponent,
    PersonComponent,
    PersonsmediaComponent,
    PersoncontactsComponent,
    PersonDepartamentComponent,
    ContentComponent,
    ContentMediaComponent,
    ContentInfoComponent,
    SiteComponent,
    MenuComponent,
    SubmenuComponent,
    InfositeComponent,
    SubjectMatterComponent,
    PreRequirementsComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

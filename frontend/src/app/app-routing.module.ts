import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ItemcategoryComponent } from './components/itemcategory/itemcategory.component';
import { PersonComponent } from './components/person/person.component';
import { PersonsroleComponent } from './components/personsrole/personsrole.component';
import { PersonsmediaComponent } from './components/personsmedia/personsmedia.component';
import { PersoncontactsComponent } from './components/personcontacts/personcontacts.component';
import { SiteComponent } from './components/site/site.component';
import { InfositeComponent } from './components/infosite/infosite.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubmenuComponent } from './components/submenu/submenu.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'itemcategory', component: ItemcategoryComponent },
  { path: 'person', component: PersonComponent },
  { path: 'personsrole', component: PersonsroleComponent },
  { path: 'personsmedia', component: PersonsmediaComponent },
  { path: 'personcontact', component: PersoncontactsComponent },
  { path: 'site', component: SiteComponent },
  { path: 'infosite', component: InfositeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'subMenu', component: SubmenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

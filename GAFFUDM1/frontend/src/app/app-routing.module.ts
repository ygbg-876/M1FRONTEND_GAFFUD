import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'edit/:id', component: EditItemComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
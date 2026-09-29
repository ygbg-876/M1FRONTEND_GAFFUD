import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    ItemDetailComponent,
    AddItemComponent,
    EditItemComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
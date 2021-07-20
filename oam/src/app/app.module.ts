import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMedicineComponent } from './admin/medicines/add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './admin/medicines/view-medicine/view-medicine.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminsComponent } from './admin/users/admins/admins.component';
import { CustomersComponent } from './admin/users/customers/customers.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './shop/order/order.component';
import { ViewOrderComponent } from './shop/order/view-order/view-order.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MedicinesComponent,
    AddMedicineComponent,
    ViewMedicineComponent,
    UsersComponent,
    AdminsComponent,
    CustomersComponent,
    LoginComponent,
    ShopComponent,
    OrderComponent,
    ViewOrderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

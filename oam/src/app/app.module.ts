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
<<<<<<< HEAD
import { AddAdminComponent } from './admin/users/admins/add-admin/add-admin.component';
import { AddcustomerComponent } from './admin/users/customers/addcustomer/addcustomer.component';
import { ViewCustomerComponent } from './admin/users/customers/view-customer/view-customer.component';
import { ViewAdminComponent } from './admin/users/admins/view-admin/view-admin.component';
=======
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './shop/order/order.component';
import { ViewOrderComponent } from './shop/order/view-order/view-order.component';  
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8

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
<<<<<<< HEAD
    AddAdminComponent,
    AddcustomerComponent,
    ViewCustomerComponent,
    ViewAdminComponent,
=======
    LoginComponent,
    ShopComponent,
    OrderComponent,
    ViewOrderComponent
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

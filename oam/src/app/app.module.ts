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

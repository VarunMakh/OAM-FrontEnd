<<<<<<< HEAD
import { AddcustomerComponent } from './admin/users/customers/addcustomer/addcustomer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { AddAdminComponent } from './admin/users/admins/add-admin/add-admin.component';
import { AdminsComponent } from './admin/users/admins/admins.component';
import { CustomersComponent } from './admin/users/customers/customers.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/admins', component: AdminsComponent },
  { path: 'admin/users/customers', component: CustomersComponent },
  { path : 'admin/medicines', component: MedicinesComponent},
  { path : 'admin/users/admins/add-admin', component: AddAdminComponent},
  { path : 'admin/users/customers/addcustomer', component: AddcustomerComponent}
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { AdminsComponent } from './admin/users/admins/admins.component';
import { CustomersComponent } from './admin/users/customers/customers.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './shop/order/order.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/order', component: OrderComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/admins', component: AdminsComponent },
  { path: 'admin/users/customers', component: CustomersComponent },
  { path: 'admin/medicines', component: MedicinesComponent}
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

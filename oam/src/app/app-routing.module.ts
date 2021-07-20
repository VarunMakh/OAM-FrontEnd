import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { AdminsComponent } from './admin/users/admins/admins.component';
import { CustomersComponent } from './admin/users/customers/customers.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './shop/order/order.component';
import { ShopComponent } from './shop/shop.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/order', component: OrderComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/admins', component: AdminsComponent },
  { path: 'admin/users/customers', component: CustomersComponent },
  { path: 'admin/medicines', component: MedicinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

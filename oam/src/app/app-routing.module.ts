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
import { AuthGuardService } from './service/auth-guard.service';
import { OrdersComponent } from './admin/orders/orders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent, canActivate:[AuthGuardService] },
  { path: 'shop/order', component: OrderComponent, canActivate:[AuthGuardService] },
  { path: 'admin/users', component: UsersComponent, canActivate:[AuthGuardService] },
  { path: 'admin/orders', component: OrdersComponent, canActivate:[AuthGuardService] },
  { path: 'admin/users/admins', component: AdminsComponent, canActivate:[AuthGuardService] },
  { path: 'admin/users/customers', component: CustomersComponent, canActivate:[AuthGuardService] },
  { path: 'admin/medicines', component: MedicinesComponent, canActivate:[AuthGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

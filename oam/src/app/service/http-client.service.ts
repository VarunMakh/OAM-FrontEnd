import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/Medicine';
import { User } from '../model/User';
import { Admin } from '../model/Admin';
import { Customer } from '../model/Customer';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/UserDTO';
import { PlaceOrder } from '../model/PlaceOrder';
import { CustomerOrder } from '../model/CustomerOrder';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  loginUser(userDetails: any): Observable<any> {
    return this.httpClient.post<UserDTO>('http://localhost:8090/users/login', userDetails);
  }

  getMedicines(){
    return this.httpClient.get<Medicine[]>('http://localhost:8090/medicines/showAll');
  }

  addMedicine(newMedicine: Medicine) {
    return this.httpClient.post<Medicine>('http://localhost:8090/medicines/add', newMedicine);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8090/medicines/update', updatedMedicine);
  }

  deleteMedicine(id) {
    return this.httpClient.delete<Medicine>('http://localhost:8090/medicines/delete/' + id);
  }

  getOrders() {
    return this.httpClient.get<Order[]>('http://localhost:8090/orders/showAllOrders');
  }

  getOrdersByCustomer(userCustomer: CustomerOrder) {
    return this.httpClient.post<Order[]>('http://localhost:8090/orders/showAllByCustomer',userCustomer);
  }

  addOrder(newOrder: PlaceOrder) {
    return this.httpClient.post<Order>('http://localhost:8090/orders/add', newOrder);
  }

  deleteOrder(id) {
    return this.httpClient.delete<Order>('http://localhost:8090/orders/cancel/' + id);
  }

  getUsers() {
    return this.httpClient.get<UserDTO[]>('http://localhost:8090/users/showAll');
  }

  getAdmins() {
    return this.httpClient.get<Admin[]>('http://localhost:8090/admins/showAll');
  }

  addAdmin(newAdmin: Admin) {
    return this.httpClient.post<Admin>('http://localhost:8090/admins/add', newAdmin);
  }

  updateAdmin(updatedAdmin: Admin) {
    return this.httpClient.put<Admin>('http://localhost:8090/admin/update', updatedAdmin);
  }

  deleteAdmin(id) {
    return this.httpClient.delete<Admin>('http://localhost:8090/admins/delete/' + id);
  }

  getCustomers() {
    return this.httpClient.get<Customer[]>('http://localhost:8090/customers/showAll');
  }

  addCustomer(newCustomer: Customer) {
    return this.httpClient.post<Customer>('http://localhost:8090/customers/add', newCustomer);
  }

  updateCustomer(newCustomer: Customer) {
    return this.httpClient.post<Customer>('http://localhost:8090/customers/update', newCustomer);
  }

  deleteCustomer(id) {
    return this.httpClient.delete<Customer>('http://localhost:8090/customers/delete/' + id);
  }

}

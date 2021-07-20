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

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers()
  {
    return this.httpClient.get<UserDTO[]>('http://localhost:8090/users/showAll');
  }

  getOrders()
  {
    return this.httpClient.get<Order[]>('http://localhost:8090/orders/showAllOrders');
  }

  getAdmins()
  {
    return this.httpClient.get<Admin[]>('http://localhost:8090/admins/showAll');
  }

  getCustomers()
  {
    return this.httpClient.get<Customer[]>('http://localhost:8090/customers/showAll');
  }

  getMedicines(){
    return this.httpClient.get<Medicine[]>('http://localhost:8090/medicines/showAll');
  }

  addMedicine(newMedicine: Medicine) {
    return this.httpClient.post<Medicine>('http://localhost:8090/medicines/add', newMedicine);
  }

  addAdmin(newAdmin: User) {
    return this.httpClient.post<User>('http://localhost:8090/admins/add', newAdmin);
  }

  addCustomer(newCustomer: User) {
    return this.httpClient.post<User>('http://localhost:8090/customers/add', newCustomer);
  }

  deleteMedicine(id) {
    return this.httpClient.delete<Medicine>('http://localhost:8090/medicines/delete/' + id);
  }

  deleteOrder(id) {
    return this.httpClient.delete<Order>('http://localhost:8090/orders/cancel/' + id);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8090/medicines/update', updatedMedicine);
  }

  loginUser(userDetails: any): Observable<any> {
    return this.httpClient.post<UserDTO>('http://localhost:8090/users/login', userDetails);
  }

  addOrder(newOrder: PlaceOrder) {
    return this.httpClient.post<Order>('http://localhost:8090/orders/add', newOrder);
  }

}

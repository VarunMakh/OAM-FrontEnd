<<<<<<< HEAD

import { Admin } from 'src/app/model/Admin';
=======
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/Medicine';
import { User } from '../model/User';
<<<<<<< HEAD

import { Customer } from '../model/Customer';
=======
import { Admin } from '../model/Admin';
import { Customer } from '../model/Customer';
import { Login } from '../model/Login';
import { Order } from '../model/Order';
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers()
  {
<<<<<<< HEAD
    return this.httpClient.get<User[]>('http://localhost:8092/users/showAll');
=======
    return this.httpClient.get<User[]>('http://localhost:8090/users/showAll');
  }

  getOrders()
  {
    return this.httpClient.get<Order[]>('http://localhost:8090/orders/showAllOrders');
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  }

  getAdmins()
  {
<<<<<<< HEAD
    return this.httpClient.get<Admin[]>('http://localhost:8092/admins/showAll');
=======
    return this.httpClient.get<Admin[]>('http://localhost:8090/admins/showAll');
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  }

  getCustomers()
  {
<<<<<<< HEAD
    return this.httpClient.get<Customer[]>('http://localhost:8092/customers/showAll');
  }

  getMedicines(){
    return this.httpClient.get<Medicine[]>('http://localhost:8092/medicines/showAll');
  }

  addMedicine(newMedicine: Medicine) {
    return this.httpClient.post<Medicine>('http://localhost:8092/medicines/add', newMedicine);
  }

  addAdmin(newAdmin: Admin) {
    return this.httpClient.post<Admin>('http://localhost:8092/admins/add', newAdmin);
  }

  addCustomer(newCustomer: Customer) {
    return this.httpClient.post<Customer>('http://localhost:8092/customers/add', newCustomer);
  }
  updateCustomer(newCustomer: Customer) {
    return this.httpClient.post<Customer>('http://localhost:8092/customers/update', newCustomer);
  }
  deleteAdmin(id) {
    return this.httpClient.delete<Admin>('http://localhost:8092/admins/delete/' + id);
  }
  deleteCustomer(id) {
    return this.httpClient.delete<Customer>('http://localhost:8092/customers/delete/' + id);
=======
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
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  }

  // viewMedicine(id) {
  //   return this.httpClient.get<Medicine>('http://localhost:8090/medicines/view/' + id);
  // }

  deleteMedicine(id) {
<<<<<<< HEAD
    return this.httpClient.delete<Medicine>('http://localhost:8092/medicines/delete/' + id);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8092/medicines/update', updatedMedicine);
  }
  updateAdmin(updatedAdmin: Admin) {
    return this.httpClient.put<Admin>('http://localhost:8092/admin/update', updatedAdmin);
=======
    return this.httpClient.delete<Medicine>('http://localhost:8090/medicines/delete/' + id);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8090/medicines/update', updatedMedicine);
  }

  loginUser(userDetails: Login) {
    return this.httpClient.post<User>('http://localhost:8090/users/login', userDetails);
>>>>>>> da0dba5a4cdbb7f9229c4d01af6f879b98a753a8
  }

}

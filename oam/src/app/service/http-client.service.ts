
import { Admin } from 'src/app/model/Admin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/Medicine';
import { User } from '../model/User';

import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8092/users/showAll');
  }

  getAdmins()
  {
    return this.httpClient.get<Admin[]>('http://localhost:8092/admins/showAll');
  }

  getCustomers()
  {
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
  }

  // viewMedicine(id) {
  //   return this.httpClient.get<Medicine>('http://localhost:8090/medicines/view/' + id);
  // }

  deleteMedicine(id) {
    return this.httpClient.delete<Medicine>('http://localhost:8092/medicines/delete/' + id);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8092/medicines/update', updatedMedicine);
  }
  updateAdmin(updatedAdmin: Admin) {
    return this.httpClient.put<Admin>('http://localhost:8092/admin/update', updatedAdmin);
  }

}

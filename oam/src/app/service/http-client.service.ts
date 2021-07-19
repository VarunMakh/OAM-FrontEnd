import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/Medicine';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getMedicines(){
    return this.httpClient.get<Medicine[]>('http://localhost:8090/medicines/showAll');
  }

  addMedicine(newMedicine: Medicine) {
    return this.httpClient.post<Medicine>('http://localhost:8090/medicines/add', newMedicine);
  }

  viewMedicine(id) {
    return this.httpClient.get<Medicine>('http://localhost:8090/medicines/view/' + id);
  }

  deleteMedicine(id) {
    return this.httpClient.delete<Medicine>('http://localhost:8090/medicines/delete/' + id);
  }

}

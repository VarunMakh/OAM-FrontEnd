import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {

  constructor() { }

  isLoggedIn(){
    if(sessionStorage.getItem('loginStatus') === "true"){
      return true;
    }
    return false;
  }

  logOut() {
    sessionStorage.clear;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    if(sessionStorage.getItem('loginStatus') === "true"){
      return true;
    }
    return false;
  }

  isAdmin(){
    if(sessionStorage.getItem('userType') === "admin"){
      return true;
    }
    return false;
  }

  isCustomer(){
    if(sessionStorage.getItem('userType') === "customer"){
      return true;
    }
    return false;
  }

  logOut() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userType');
    sessionStorage.setItem('loginStatus',"false");
  }
}

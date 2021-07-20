import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { HttpClientService } from '../service/http-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private toastr: ToastrService,
  ) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  checkLogin() {
    this.httpClientService.loginUser(this.user).subscribe(
      result => {
          sessionStorage.setItem('userId',result.userId);
          sessionStorage.setItem('userName',result.userName);
          sessionStorage.setItem('userType',result.userType);
          sessionStorage.setItem('loginStatus',"true");
          this.toastr.success("Login "+sessionStorage.getItem('userType')+"!");
          if(sessionStorage.getItem('userType') === "customer"){
            this.router.navigate(['shop']);
          } else if(sessionStorage.getItem('userType') === "admin"){
            this.router.navigate(['admin', 'medicines']);
          }
      },(error) => {
        console.log(error)
        this.toastr.error('Invalid Credentials, please try again!');
      }
    );
  }

}

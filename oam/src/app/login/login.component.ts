import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/Login';
import { User } from '../model/User';
import { HttpClientService } from '../service/http-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails:Login;
  user:User;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  checkLogin() {
    this.httpClientService.loginUser(this.loginDetails).subscribe(
      result => {
        if(result.userId){
          sessionStorage.setItem('userId',""+result.userId);
          sessionStorage.setItem('userName',result.userName);
          sessionStorage.setItem('userType',result.userType);
          this.router.navigate(['admin', 'medicines']);
          this.toastr.success("Login Successful!");
        } else {
          this.router.navigate(['login']);
          this.toastr.error("Login Failed!");
        }
      }
    );
  }

  // loginProcess() {
  //   this.submitted = true;
  //   console.log("LOGIN PROCESS");
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(
  //       result => {

  //         sessionStorage.setItem('token', result.token);
  //         sessionStorage.setItem('userId', result.id);
  //         sessionStorage.setItem('userType', result.userType);
  //         this.authService.loggedIn.next(true)
  //         this.toastr.success('Login Success');
  //         console.log(sessionStorage.getItem('token'))
  //         if (sessionStorage.getItem('userType') === "3") {
  //           this.router.navigate(['/home']);
  //         } else {
  //           this.router.navigate(['/admin/dashboard']);
  //         }

  //       }, (error) => {
  //         console.log(error)
  //         this.toastr.error('Invalid Cridential');

  //       }

  //     )
  //   }
  // }

}

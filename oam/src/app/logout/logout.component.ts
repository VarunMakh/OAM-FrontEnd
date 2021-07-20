import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutServiceService } from '../service/logout-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private logoutService:LogoutServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.logoutService.logOut();
    this.router.navigate(['login']);
  }

}

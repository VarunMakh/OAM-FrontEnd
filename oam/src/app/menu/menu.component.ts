import { Component, OnInit } from '@angular/core';
import { LogoutServiceService } from '../service/logout-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public logoutService:LogoutServiceService
  ) { }

  ngOnInit(): void {
  }

}

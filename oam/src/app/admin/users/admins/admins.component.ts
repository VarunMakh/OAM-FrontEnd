import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/Admin';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Array<Admin>;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getAdmins().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Admin[]) {
    this.admins = response;  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from 'src/app/model/UserDTO';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserDTO>;

  constructor(
    private httpClientService: HttpClientService
    ) {}

  ngOnInit() {

    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }

  handleSuccessfulResponse(response: UserDTO[]) {
    this.users = response;  
  }

}

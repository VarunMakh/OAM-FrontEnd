import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/Admin';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Array<Admin>;
  selectedUser: Admin;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshData();
    this.httpClientService.getAdmins().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
      }
    );
  }

  
  addAdmin() {
    this.selectedUser = new Admin();
    this.router.navigate(['admin','users','admins'], { queryParams: { action: 'add' } });
  }

  refreshData() {
    this.httpClientService.getAdmins().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.admins.find(admin => admin.adminId === +selectedUserId);
        }
      }
    );
  }

  viewAdmin(id: number) {
    this.router.navigate(['admin','users','admins'], {queryParams : {id, action: 'view'}});
  }

  handleSuccessfulResponse(response) {
    this.admins = response;
    console.log(this.admins);
  }

}

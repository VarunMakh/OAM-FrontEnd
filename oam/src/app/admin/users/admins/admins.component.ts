import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Array<Admin>;
  selectedAdmin: Admin;
  action: string;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.admins = [];
  }

  ngOnInit() {

    this.refreshData();

  }

  refreshData() {
    this.httpClientService.getAdmins().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const id = params['id'];
        if (id) {
          this.selectedAdmin = this.admins.find(admin => {
            return admin.adminId === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response: Admin[]) {
    this.admins = response;  
  }

  addAdmin() {
    this.selectedAdmin = new Admin();
    this.router.navigate(['admin','users','admins'], { queryParams: { action: 'add' } });
  }

  viewAdmin(id: number) {
    this.router.navigate(['admin','users','admins'], {queryParams : {id, action: 'view'} });
  }

}

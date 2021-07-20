import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  @Input()
  admin: Admin

  @Output()
  adminDeletedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeAdmin() {
    this.httpClientService.deleteAdmin(this.admin.adminId).subscribe(
      (admin) => {
        this.adminDeletedEvent.emit();
        this.router.navigate(['admin', 'users','admins']);
      }
    );
  }

  editAdmin() {
    this.router.navigate(['admin', 'users', 'admins'], { queryParams: { action: 'edit', id: this.admin.adminId } });
  }

}

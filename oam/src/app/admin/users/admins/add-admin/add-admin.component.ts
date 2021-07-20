import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/Admin';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  @Input()
  admin:Admin;

  @Output()
  adminAddedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public saveAdmin() {
    if(this.admin.adminId == null){
    this.httpClientService.addAdmin(this.admin).subscribe(
      (admin) => {
        this.adminAddedEvent.emit();
        this.router.navigate(['admin', 'users', 'admins']);
      }
    );
    } else{
      this.httpClientService.updateAdmin(this.admin).subscribe(
        (admin) => {
          this.adminAddedEvent.emit();
          this.router.navigate(['admin', 'users', 'admins']);
        }
      );
    }
  }

}

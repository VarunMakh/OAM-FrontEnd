import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  

  selectedUser: Customer;
  action: string;


  customers:Array<Customer>;

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshData();
    this.httpClientService.getCustomers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.customers.find(customer => customer.customerId === +selectedUserId);
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.customers = response;
    console.log(this.customers);
  }

  addCustomer() {
    this.selectedUser = new Customer();
    this.router.navigate(['admin','users','customers'], { queryParams: { action: 'add' } });
  }

  viewCustomer(id: number) {
    this.router.navigate(['admin','users','customers'], {queryParams : {id, action: 'view'}});
  }
  refreshData() {
    this.httpClientService.getCustomers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
      }
    );
  }
}

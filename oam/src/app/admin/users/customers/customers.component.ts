import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Array<Customer>;
  selectedCustomer: Customer;
  action: string;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.customers = [];
  }

  ngOnInit() {

    this.refreshData();

  }

  refreshData() {
    this.httpClientService.getCustomers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const id = params['id'];
        if (id) {
          this.selectedCustomer = this.customers.find(customer => {
            return customer.customerId === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response: Customer[]) {
    this.customers = response;  
  }

  addCustomer() {
    this.selectedCustomer = new Customer();
    this.router.navigate(['admin','users','customers'], { queryParams: { action: 'add' } });
  }

  viewCustomer(id: number) {
    this.router.navigate(['admin','users','customers'], {queryParams: {id, action: 'view'} });
  }

}

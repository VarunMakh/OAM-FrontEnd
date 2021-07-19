import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Array<Customer>;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getCustomers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Customer[]) {
    this.customers = response;  
  }

}

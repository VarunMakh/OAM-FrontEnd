import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  @Input()
  customer:Customer;

  @Output()
  customerAddedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public saveCustomer() {
    if(this.customer.customerId == null){
    this.httpClientService.addCustomer(this.customer).subscribe(
      (customer) => {
        this.customerAddedEvent.emit();
        this.router.navigate(['admin', 'users', 'customers']);
      }
    );
    } else{
      this.httpClientService.updateCustomer(this.customer).subscribe(
        (customer) => {
          this.customerAddedEvent.emit();
          this.router.navigate(['admin', 'users', 'customers']);
        }
      );
    }
  }

}

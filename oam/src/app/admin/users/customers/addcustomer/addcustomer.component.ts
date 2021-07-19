import { Customer } from 'src/app/model/Customer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {


  @Input()
  customer: Customer

  @Output()
  customerAddedEvent = new EventEmitter();
  
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addCustomer() {
    if(this.customer.customerId == null){
    this.httpClientService.addCustomer(this.customer).subscribe(
      (customer) => {
        this.customerAddedEvent.emit();
        this.router.navigate(['admin', 'users','customers']);
      }
    );
  }else{
    this.httpClientService.updateCustomer(this.customer).subscribe(
      (customer) => {
        this.customerAddedEvent.emit();
        this.router.navigate(['admin', 'users','customers']);

  });
  }


}
}

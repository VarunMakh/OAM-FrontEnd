import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  @Input()
  customer: Customer

  @Output()
  customerDeletedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeCustomer() {
    this.httpClientService.deleteCustomer(this.customer.customerId).subscribe(
      (customer) => {
        this.customerDeletedEvent.emit();
        this.router.navigate(['admin', 'users','customers']);
      }
    );
  }

  editCustomer() {
    this.router.navigate(['admin', 'users', 'customers'], { queryParams: { action: 'edit', id: this.customer.customerId } });
  }

}

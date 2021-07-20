import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  @Input()
  order:Order;

  @Output()
  orderDeletedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  removeOrder() {
    this.httpClientService.deleteOrder(this.order.orderId).subscribe(
      (order) => {
        this.orderDeletedEvent.emit();
        this.router.navigate(['shop', 'order']);
      }
    );
  }

}

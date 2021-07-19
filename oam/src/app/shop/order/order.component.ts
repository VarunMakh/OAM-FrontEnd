import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Array<Order>;
  selectedOrder:Order;
  action: string;

  constructor(
    private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.orders = [];
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getOrders().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      	const id = params['id'];
        if (id) {
          this.selectedOrder = this.orders.find(order => {
            return order.orderId === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response: Order[]) {
    this.orders = response;
  }

  viewOrder(id: number) {
    this.router.navigate(['shop', 'order'], { queryParams: { id, action: 'view' } });
  }

}

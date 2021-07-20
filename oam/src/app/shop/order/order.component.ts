import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerOrder } from 'src/app/model/CustomerOrder';
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
  action:string;
  customer:CustomerOrder;

  constructor(
    private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.orders = [];
    this.customer = new CustomerOrder();
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.customer.userId = +sessionStorage.getItem('userId');
    this.httpClientService.getOrdersByCustomer(this.customer).subscribe(
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

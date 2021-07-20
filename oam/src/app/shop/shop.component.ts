import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../model/Medicine';
import { PlaceOrder } from '../model/PlaceOrder';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  medicines: Array<Medicine>;

  order: PlaceOrder;

  cartMedicines: any;

  constructor(
    private router: Router, 
    private httpClientService: HttpClientService,
  ) {
    this.medicines = [];
    this.order = new PlaceOrder();
   }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartMedicines = JSON.parse(data);
    } else {
      this.cartMedicines = [];
    }
  }

  handleSuccessfulResponse(response: Medicine[]) {
    this.medicines = response;
  }

  addToCart(medicineId) {

    let medicine = this.medicines.find(medicine => {
      return medicine.medicineId === +medicineId;
    });

    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(medicine);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    medicine.isAdded = true;

  }

  updateCartData(cartData) {
    this.cartMedicines = cartData;
  }

  placeOrder() {
    this.order.medicineList = this.cartMedicines;
    this.order.customer.userId = +sessionStorage.getItem('userId');
    this.order.status = "PLACED";
    this.httpClientService.addOrder(this.order).subscribe(
      (order) => {
        this.router.navigate(['shop','order']);
      }
    );
  }

  emptyCart() {
    this.refreshData();
    this.cartMedicines = [];
    localStorage.clear();
  }

}
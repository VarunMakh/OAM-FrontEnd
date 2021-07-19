import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../model/Medicine';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  medicines: Array<Medicine>;

  cartMedicines: any;

  constructor(
    private router: Router, 
    private httpClientService: HttpClientService,
  ) {
    this.medicines = [];
   }

  ngOnInit() {
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

  addOrder() {
    this.router.navigate(['cart']);
  }

  emptyCart() {
    this.cartMedicines = [];
    localStorage.clear();
  }

}
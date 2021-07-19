import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})

export class MedicinesComponent implements OnInit {

  medicines: Array<Medicine>;
  selectedMedicine: Medicine;
  action: string;

  constructor(
    private httpClientService: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.medicines = [];
  }

  ngOnInit() {

    this.refreshData();

  }

  refreshData() {
    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const id = params['id'];
        if (id) {
          this.selectedMedicine = this.medicines.find(medicine => {
            return medicine.medicineId === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response: Medicine[]) {
    this.medicines = response;
  }

  addMedicine() {
    this.selectedMedicine = new Medicine();
    this.router.navigate(['admin', 'medicines'], { queryParams: { action: 'add' } });
  }

  viewMedicine(id: number) {
    this.router.navigate(['admin', 'medicines'], { queryParams: { id, action: 'view' } });
  }

}

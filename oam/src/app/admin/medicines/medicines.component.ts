import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})

export class MedicinesComponent implements OnInit {

  medicines: Array<Medicine>;

  constructor(
    private httpClientService: HttpClientService
  ) { 
    this.medicines = [];
  }

  ngOnInit(): void {

    this.httpClientService.getMedicines().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: Medicine[]) {
    this.medicines = response;
  }



}

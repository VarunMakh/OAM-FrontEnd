import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  @Input()
  medicine: Medicine;

  @Output()
  medicineAddedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public saveMedicine() {
    this.httpClientService.addMedicine(this.medicine).subscribe(
      (medicine) => {
        this.medicineAddedEvent.emit();
        this.router.navigate(['admin', 'medicines']);
      }
    );
  }

}

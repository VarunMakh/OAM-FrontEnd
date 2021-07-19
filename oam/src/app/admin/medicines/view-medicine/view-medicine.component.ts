import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/model/Medicine';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {

  @Input()
  medicine: Medicine;

  @Output()
  medicineDeletedEvent = new EventEmitter();

  constructor(
    private httpClientService: HttpClientService, 
    private router: Router
  ) { }

  ngOnInit() {}

  // getMedicine() {
  //   this.httpClientService.viewMedicine(this.medicine.medicineId).subscribe(
  //     (medicine) => {
  //       this.router.navigate(['admin', 'medicines']);
  //     }
  //   );
  // }

  deleteMedicine() {
    this.httpClientService.deleteMedicine(this.medicine.medicineId).subscribe(
      (medicine) => {
        this.medicineDeletedEvent.emit();
        this.router.navigate(['admin', 'medicines']);
      }
    );
  }

  editMedicine() {
    this.router.navigate(['admin', 'medicines'], { queryParams: { action: 'edit', id: this.medicine.medicineId } });
  }

}

import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  wares = [];
  constructor(
    private wareHouseService: WarehouseService
  ) {
    this.getWare();
  }

  getWare() {
    this.wareHouseService.getAll().subscribe( result => {
        if (!result ) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error in get Warehouses',
            timer: 3000
          });
        } else {
          this.wares = result.json();
        }
    });
  }

  ngOnInit(): void {
  }

}

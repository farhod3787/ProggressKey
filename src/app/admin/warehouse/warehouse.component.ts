import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  wares = [];
  ware: any = [];
  products: any = [];
  constructor(
    private wareHouseService: WarehouseService,
    private productService: ProductService
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
          const ware = result.json();
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < ware.length; i++) {
              if (ware[i].filialId !== localStorage.getItem('_id')) {
                  this.wares.push(ware[i]);
              }
          }
        }
    });
    this.wareHouseService.getFilial().subscribe( resu => {
      this.ware = resu.json();
      for (let i = 0; i <= this.ware.products.length - 1; i++) {
        this.productService.getProduct(this.ware.products[i]).subscribe( res => {
          this.products[i] = res.json();
        });
      }
    });
  }

  ngOnInit(): void {
  }

}

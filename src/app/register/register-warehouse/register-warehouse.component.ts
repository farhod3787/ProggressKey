import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/shared/service/productsService';

@Component({
  selector: 'app-register-warehouse',
  templateUrl: './register-warehouse.component.html',
  styleUrls: ['./register-warehouse.component.css']
})
export class RegisterWarehouseComponent implements OnInit {

  ware: any;
  status = true;
  products = [];
  constructor(
    private wareHouseService: WarehouseService,
    private productService: ProductService
  ) {
    this.get();
   }

   get() {
      this.wareHouseService.getFilial().subscribe( result => {
        if (result.json().length === 0) {
          this.status = false;
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Ombor ro\'yhatga olinmagan'
          });
        } else {
          this.ware = result.json();
          for (let i = 0; i <= this.ware.products.length - 1; i++) {
            this.productService.getProduct(this.ware.products[i]).subscribe( res => {
              this.products[i] = res.json();
            });
          }
        }
      });
   }

  ngOnInit(): void {
  }

}

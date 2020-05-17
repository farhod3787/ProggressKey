import { Component, OnInit } from '@angular/core';
import { SendProdService } from 'src/app/shared/service/sendProductService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchased-product',
  templateUrl: './purchased-product.component.html',
  styleUrls: ['./purchased-product.component.css']
})
export class PurchasedProductComponent implements OnInit {

  products = [];
  constructor(
    private sendProdService: SendProdService
  ) {
    this.getProds();
  }

  getProds() {
    this.sendProdService.getWithUser().subscribe( result => {
        if (result.json()) {
          this.products = result.json();
          console.log(this.products);

        } else  {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Products not found'
          });
        }
      });
  }
  ngOnInit(): void {
  }

}

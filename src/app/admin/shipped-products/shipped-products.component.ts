import { Component, OnInit } from '@angular/core';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipped-products',
  templateUrl: './shipped-products.component.html',
  styleUrls: ['./shipped-products.component.css']
})
export class ShippedProductsComponent implements OnInit {

  products = [];
  status = false;
  constructor(
    private reqProdService: ReqProdService,

  ) {
    this.get();
  }

  get() {
    this.reqProdService.getAdmin().subscribe( result => {
      this.products = result.json();
      console.log(this.products);
    });
  }

  ngOnInit(): void {
  }

}

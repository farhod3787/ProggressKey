import { Component, OnInit } from '@angular/core';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipped-products',
  templateUrl: './shipped-products.component.html',
  styleUrls: ['./shipped-products.component.css']
})
export class ShippedProductsComponent implements OnInit {

  requests = [];
  status = false;
  constructor(
    private reqProdService: ReqProdService
  ) {
    this.getSuccess();
  }

  getSuccess() {
    this.reqProdService.getSuccess().subscribe( result => {
      this.requests = result.json();
      if (this.requests.length === 0) {
        this.status = true;
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Requested Products not yet',
          timer: 3000
        });
      }
    })
  }

  ngOnInit(): void {
  }

}

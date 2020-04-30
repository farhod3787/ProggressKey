import { Component, OnInit } from '@angular/core';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requested-products',
  templateUrl: './requested-products.component.html',
  styleUrls: ['./requested-products.component.css']
})
export class RequestedProductsComponent implements OnInit {

  reqProds: any = [];
  status = false;
  constructor(
    private ReqProdService: ReqProdService
  ) {
    this.getReqs();
  }

  getReqs() {
    this.ReqProdService.getAll().subscribe( result => {
      this.reqProds = result.json();
      console.log( this.reqProds );
      if (this.reqProds.length === 0) {
        this.status = true;
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Requested Products not yet',
          timer: 3000
        });
      }
    });
  }
  ngOnInit(): void {
  }

}

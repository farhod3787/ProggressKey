import { Component, OnInit } from '@angular/core';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import Swal from 'sweetalert2';
import { ResgistrarService } from 'src/app/shared/service/registrarService';

@Component({
  selector: 'app-requested-products',
  templateUrl: './requested-products.component.html',
  styleUrls: ['./requested-products.component.css']
})
export class RequestedProductsComponent implements OnInit {

  reqProds: any = [];
  registrar = [];
  status = false;
  constructor(
    private reqProdService: ReqProdService,
    private RegistrarService: ResgistrarService
  ) {
    this.getReqs();
  }

  getReqs() {
    this.reqProdService.getAll().subscribe( result => {
      this.reqProds = result.json();
      if (this.reqProds.length === 0) {
        this.status = true;
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Requested Products not yet',
          timer: 3000
        });
      }
      for (let i = 0; i <= this.reqProds.length - 1; i++) {
      this.RegistrarService.getId(this.reqProds[i].registrarId).subscribe( res => {
        this.registrar[i] = res.json();
      });
    }
    });
  }
  ngOnInit(): void {
  }

}

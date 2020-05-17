import { Component, OnInit } from '@angular/core';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-accepted-prod',
  templateUrl: './register-accepted-prod.component.html',
  styleUrls: ['./register-accepted-prod.component.css']
})
export class RegisterAcceptedProdComponent implements OnInit {

  products = [];

  constructor(
    private reqProdService: ReqProdService
  ) {
    this.getProds();
  }

  getProds() {
    this.reqProdService.getReg().subscribe( result => {
      console.log(result.json());
      if (result.json()) {
        this.products = result.json();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Products Not found'
        });
      }
    });
  }

  ngOnInit(): void {
  }

}

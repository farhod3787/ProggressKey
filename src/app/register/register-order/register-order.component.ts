import { Component, OnInit } from '@angular/core';
import { SendProdService } from 'src/app/shared/service/sendProductService';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {
  selected = 'option2';
  registrars: any = [];

  products = [];
  constructor(
    private sendProdService: SendProdService
  ) {
    this.get();
  }

  get() {
    this.sendProdService.getWithReg().subscribe( result => {
      this.products = result.json();
      // console.log(this.products);
    });
  }

  ngOnInit(): void {
  }

}

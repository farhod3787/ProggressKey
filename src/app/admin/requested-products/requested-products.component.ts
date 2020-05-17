import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/productsService';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import { SendProdService } from 'src/app/shared/service/sendProductService';
import { UserService } from 'src/app/shared/service/userService';
import Swal from 'sweetalert2';
import { ReqProdService } from 'src/app/shared/service/reqProdService';
import { ResgistrarService } from 'src/app/shared/service/registrarService';

@Component({
  selector: 'app-requested-products',
  templateUrl: './requested-products.component.html',
  styleUrls: ['./requested-products.component.css']
})
export class RequestedProductsComponent implements OnInit {


  dynamicForm: FormGroup;
  submitted = false;
  products = [];
  users = [];
  quant = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private wareHouseService: WarehouseService,
    private reqProdService: ReqProdService,
    private regService: ResgistrarService
    ) {
      this.getProducts();
      this.getUsers();
    }

    getUsers() {
      this.regService.getAll().subscribe( use => {
        this.users = use.json();
        console.log(this.users);

      });
    }

    getProducts() {
      this.wareHouseService.getFilial().subscribe( result => {
        const resu = result.json();
        const res = resu[0];
        console.log(result.json());

        this.quant = res.quantity;
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < res.products.length; i++) {
              this.productService.getProduct(res.products[i]).subscribe( res => {
                this.products.push(res.json());
              });
              }
      });
    }


  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      user: ['', Validators.required],
      tickets: new FormArray([]),
      tickets2: new FormArray([])
  });
  }

    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.tickets as FormArray; }
    get t2() { return this.f.tickets2 as FormArray; }

    onChangeTickets(e) {
      const numberOfTickets = e.target.value || 0;
      if (this.t.length < numberOfTickets) {
          for (let i = this.t.length; i < numberOfTickets; i++) {
              this.t.push(this.formBuilder.group({
                  product: ['', Validators.required]
              })
              );
              this.t2.push(this.formBuilder.group({
                number: ['', Validators.required]
              }));
          }
      } else {
          for (let i = this.t.length; i >= numberOfTickets; i--) {
              this.t.removeAt(i);
          }
      }
  }

  onSubmit() {

    this.reqProdService.post(
      this.dynamicForm.value.tickets,
      this.dynamicForm.value.tickets2,
      this.dynamicForm.value.user
    ).subscribe( res => {
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Send products saved'
        });
        this.dynamicForm.reset();
        this.t.clear();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error in Send products'
        });
      }
    });
    this.submitted = true;
    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
        return;
    }
}
onReset() {
  // reset whole form back to initial state
  this.submitted = false;
  this.dynamicForm.reset();
  this.t.clear();
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/service/productsService';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import Swal from 'sweetalert2';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  products = [];
  users = [];
  quant = [];
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private wareHouseService: WarehouseService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([]),
      tickets2: new FormArray([])
  });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.id = paramMap.get('id');
        // this.wareService.getWareHouse(this.id).subscribe( result => {
        //     this.ware = result.json();
        //     console.log(this.ware);

        // });
      } else {
        this.id = null;
      }
    });
  }


  getProducts() {
    this.wareHouseService.getFilial().subscribe( result => {
      const res = result.json();
      this.quant = res.quantity;
      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < res.products.length; i++) {
            this.productService.getProduct(res.products[i]).subscribe( res => {
              this.products.push(res.json());
            });
            }
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
  this.wareHouseService.update(
    this.id,
    this.dynamicForm.value.tickets,
    this.dynamicForm.value.tickets2 )
    .subscribe( resp => {
      if (resp.ok) {
        Swal.fire(
          'Success',
          'Omborga yangi maxsulot qo\'shildi',
          'success'
        );
        this.router.navigate(['admin']);
       } else {
        Swal.fire(
          'Error',
          'Maxsulot qo\'shishda xatolik',
          'error'
        );
       }
    });
}



onReset() {
// reset whole form back to initial state
this.submitted = false;
this.dynamicForm.reset();
this.t.clear();
}

}

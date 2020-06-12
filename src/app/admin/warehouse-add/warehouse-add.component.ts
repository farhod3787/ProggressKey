import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/service/wareHouse';
import { ProductService } from 'src/app/shared/service/productsService';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ResgistrarService } from 'src/app/shared/service/registrarService';

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.css']
})
export class WarehouseAddComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  products = [];
  registers = [];
  users = [];
  quant = [];
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private registerService: ResgistrarService,
    private wareHouseService: WarehouseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProducts();
    this.getRegisters();

   }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      name: ['', Validators.required],
      filialId: ['', Validators.required],
      tickets: new FormArray([]),
      tickets2: new FormArray([])
  });

  }

  getRegisters() {
    this.registerService.getAll().subscribe( res => {
        if ( res.ok) {
          this.registers = res.json();
        } else {
          Swal.fire(
            'Error',
            'Registerlar topilmadi',
            'error'
          );
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
  console.log(
    this.dynamicForm.value.tickets,
    this.dynamicForm.value.tickets2,
    this.dynamicForm.value.name,
    this.dynamicForm.value.filialId,
);

  this.wareHouseService.post(
    this.dynamicForm.value.name,
    this.dynamicForm.value.filialId,
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

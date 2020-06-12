import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/productsService';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-product-add',
  templateUrl: './manager-product-add.component.html',
  styleUrls: ['./manager-product-add.component.css']
})
export class ManagerProductAddComponent implements OnInit {

  products = [];
  form: FormGroup;
  imagePreview: any;
  imageview = true;
  constructor(
    private productService: ProductService
  ) {
    this.getProduct();
  }

  getProduct() {
      this.productService.getAll().subscribe( result => {
        if (result.ok) {
          this.products = result.json();
          console.log(this.products);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Maxsulot hali qo\'shilmagan'
          });
        }
      })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameUz: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nameRu: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      nameEn: new FormControl(null, { validators: [Validators.required] }),
      descriptionUz: new FormControl(null, { validators: [Validators.required] }),
      descriptionRu: new FormControl(null, { validators: [Validators.required] }),
      descriptionEn: new FormControl(null, { validators: [Validators.required] }),
      category: new FormControl(null, { validators: [Validators.required] }),
      quantity: new FormControl(null, { validators: [Validators.required] }),
      price: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required] }),
      configuration: new FormControl(null, { validators: [Validators.required] })
    });
  }

  save() {
    this.productService.post(
      this.form.value.nameUz,
      this.form.value.nameRu,
      this.form.value.nameEn,
      this.form.value.descriptionUz,
      this.form.value.descriptionRu,
      this.form.value.descriptionEn,
      this.form.value.image,
      this.form.value.category,
      this.form.value.quantity,
      this.form.value.configuration,
      this.form.value.price
    ).subscribe( result => {
      console.log(result.json());
    });
  }

  onInputChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader()  ;
    reader.onload = () => {
    this.imagePreview = reader.result;                   // rasm tanlanganda ko'rsatish
    this.imageview = true;
    };
    reader.readAsDataURL(file);
  }

}

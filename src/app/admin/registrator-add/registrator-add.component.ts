import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import Swal from 'sweetalert2';
import { FilialService } from 'src/app/shared/service/filialService';
import { WarehouseService } from 'src/app/shared/service/wareHouse';

@Component({
  selector: 'app-registrator-add',
  templateUrl: './registrator-add.component.html',
  styleUrls: ['./registrator-add.component.css']
})
export class RegistratorAddComponent implements OnInit {


  imagePreview: any;
  imageview = true;
  filials = [];
  wareHouses = [];
  constructor(
    private registrarService: ResgistrarService,
    private filialService: FilialService,
    private wareHouseService: WarehouseService
  ) {
    this.getFilials();
    this.getWareHouses();
  }
  getFilials() {
    this.filialService.getAll().subscribe( result => {
      this.filials = result.json();
    });
  }

  getWareHouses() {
    this.wareHouseService.getAll().subscribe( result => {
      this.wareHouses = result.json();
    });
  }


  form: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      filialId: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      login: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      image: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
      fullName: new FormControl(null, { validators: [Validators.required] }),
      warehouseId: new FormControl(null, { validators: [Validators.required] })
    });
  }
  save() {
    this.registrarService.post(
      this.form.value.filialId,
      this.form.value.login,
      this.form.value.image,
      this.form.value.password,
      this.form.value.fullName,
      this.form.value.warehouseId
    ).subscribe( result => {
      console.log(result);
      if (result.ok) {
        Swal.fire(
          'Good job!',
          'New Product Saved!',
          'success'
        );
        this.form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error in Save New Product',
          timer: 3000
        });
      }
    })
    console.log(this.form.value.filialId);
    console.log(this.form.value.login);
    console.log(this.form.value.password);
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

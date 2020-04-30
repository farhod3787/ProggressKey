import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrator-add',
  templateUrl: './registrator-add.component.html',
  styleUrls: ['./registrator-add.component.css']
})
export class RegistratorAddComponent implements OnInit {

  constructor(
    private registrarService: ResgistrarService
  ) { }

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


}

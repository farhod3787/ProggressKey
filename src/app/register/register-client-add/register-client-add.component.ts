import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-client-add',
  templateUrl: './register-client-add.component.html',
  styleUrls: ['./register-client-add.component.css']
})
export class RegisterClientAddComponent implements OnInit {


  form: FormGroup;
  disable = false;
  imagePreview: any;
  imageview = true;
  users = [];
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, {validators: [Validators.required]}),
      // type: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      login: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      fullName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      telNumber: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      firstBalance: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      whoAdd: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      whoBottom: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }
  getUsers() {
    this.userService.getAll().subscribe( result => {
      this.users = result.json();
      if (this.users.length === 0) {
        this.users[0] = {
          login:  'Null'
        };
      }
    });
  }

  verify() {
      const login = this.form.value.login;
      this.userService.verifyLogin(login).subscribe( result => {
        if (result.json()) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Login band'
          });
         } else {
          this.disable = true;
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Davom ettiring'
          });
         }
      });
  }

  save() {
    let type = '';
    if (this.form.value.firstBalance >= 500000 && this.form.value.firstBalance <= 1000000 ) { type = 'Iste\'molchi'; }
    if (this.form.value.firstBalance > 1000000 && this.form.value.firstBalance < 3000000 ) { type = 'Console'; }
    if (this.form.value.firstBalance >= 3000000 ) { type = 'Leader'; }
    this.userService.post(
      this.form.value.image,
      type,
      this.form.value.login,
      this.form.value.password,
      this.form.value.fullName,
      this.form.value.telNumber,
      localStorage.getItem('_id'),
      this.form.value.firstBalance,
      this.form.value.whoAdd,
      this.form.value.whoBottom
    ).subscribe( result => {
      if ( result.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'User saqlandi'
        });
        this.form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'User ni saqlashda xatolik'
        });
      }
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

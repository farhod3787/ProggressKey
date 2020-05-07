import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagerService } from 'src/app/shared/service/managerService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-site-management',
  templateUrl: './site-management.component.html',
  styleUrls: ['./site-management.component.css']
})
export class SiteManagementComponent implements OnInit {

  form: FormGroup;
  managers = [];
  status = false;
  constructor(
    private managerService: ManagerService
  ) {
    this.getManagers();
   }

   ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      login: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      image: new FormControl(null, { validators: [Validators.required] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
  }


   getManagers() {
     this.managerService.getAll().subscribe( result => {
        this.managers = result.json();
        if (this.managers.length === 0) {
          this.status = true;
          Swal.fire({
            icon: 'success',
            title: 'Information',
            text: 'Managers not yet',
            timer: 3000
          });
        }
    });
   }

  saveManager() {
    this.managerService.post(
      this.form.value.login,
      this.form.value.image,
      this.form.value.password,
      this.form.value.fullName
      ).subscribe( result => {
      if ( result.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Nnew Manager Successfully saved'
        });
        this.getManagers();
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error in save new Manager',
        timer: 3000
      });
     }

    });
  }

  delete(id) {
    this.managerService.delete(id).subscribe( result => {
      if (result.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Manager Deleted'
        });
        this.getManagers();
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error in delete Manager'
      });
     }
    });
  }

}

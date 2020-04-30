import { Component, OnInit } from '@angular/core';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.css']
})
export class RegistratorComponent implements OnInit {
  selected = 'option2';
  registrars: any = [];

  constructor(
    private registerService: ResgistrarService
    ) {
      this.getRegistrar()
    }

    getRegistrar() {
        this.registerService.getAll().subscribe( result => {
          if (result.json().length > 0) {
            this.registrars = result.json();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error in Get Registrars',
              timer: 3000
            });
          }
        });
    }

    delete(id) {
      this.registerService.delete(id).subscribe( result => {
        if(result.ok) {
          Swal.fire(
            'Good job!',
            'Registrar deleted',
            'success'
          );
          this.getRegistrar();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error in delete',
            timer: 3000
          });
        }
      });
    }

  ngOnInit(): void {
  }

}

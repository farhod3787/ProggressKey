import { Component, OnInit } from '@angular/core';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-sign',
  templateUrl: './register-sign.component.html',
  styleUrls: ['./register-sign.component.css']
})
export class RegisterSignComponent implements OnInit {

  register: any = {};
  constructor(
    private registerService: ResgistrarService,
    private route: Router
  ) {
    this.verifyOfRegistrar();

  }

  ngOnInit(): void {
  }
  verifyOfRegistrar() {
    let token = localStorage.getItem('token');
    if (token) {
    this.registerService.verify().subscribe( result => {
      const obj = result.json();
      if (obj.isRegistrar) {
        this.registerService.getId(obj.userId).subscribe( res => {
            this.register = res.json();
        });
        this.route.navigate(['register']);
      } else {
        this.route.navigate(['register-sign']);
      }
    });
  } else {
    this.route.navigate(['register-sign']);
  }

  }

  sign(login, pass) {
    this.registerService.sign(login, pass).subscribe( result => {
     const obj = result.json();
     if (obj.isRegistrar) {
       localStorage.setItem('token', obj.token);
       localStorage.setItem('_id', obj.id);
       this.route.navigate(['/register']);
       Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'Welcome'
      });
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Login or password is defined'
      });
     }
    });
  }
}

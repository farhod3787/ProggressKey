import { Component, OnInit } from '@angular/core';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/userService';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any = {};
  constructor(
    private registrarService: ResgistrarService,
    private route: Router,
  ) {
    this.verifyOfRegistrar();
  }

  verifyOfRegistrar() {
    let token = localStorage.getItem('token');
    if (token) {
    this.registrarService.verify().subscribe( result => {
      const obj = result.json();
      if (obj.isRegistrar) {
        this.registrarService.getId(obj.userId).subscribe( res => {
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



  ngOnInit(): void {
            // tslint:disable-next-line: only-arrow-functions
            $( function () {
              $('[data-toggle="offcanvas"]').on('click', function () {
                $('.sidebar-offcanvas').toggleClass('active');
              });
            });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    this.verifyOfRegistrar();
  }
}

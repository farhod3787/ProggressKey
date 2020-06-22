import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/adminService';
import { Router } from '@angular/router';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(
    private adminService: AdminService,
    private route: Router,
  ) {
    this.verifyOfAdmin();
  }

  verifyOfAdmin() {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token) {

    this.adminService.verify().subscribe( result => {
      const object = result.json();
      console.log(object);

      if ( object.isAdmin ) {
        this.route.navigate(['admin']);
      } else {
        this.route.navigate(['admin-sign']);
      }
    });
  } else {
    this.route.navigate(['admin-sign']);
  }
  }


  logOut() {
    localStorage.removeItem('token');
    this.verifyOfAdmin();
  }

  ngOnInit(): void {

        // tslint:disable-next-line: only-arrow-functions
        $( function () {
          $('[data-toggle="offcanvas"]').on('click', function () {
            $('.sidebar-offcanvas').toggleClass('active');
          });
        });
  }




}

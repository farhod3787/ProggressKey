import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/adminService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-sign',
  templateUrl: './admin-sign.component.html',
  styleUrls: ['./admin-sign.component.css']
})
export class AdminSignComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {
    this.verifyOfAdmin();
  }

  verifyOfAdmin() {
    this.adminService.verify().subscribe( result => {
      const object = result.json();
      if ( object.isAdmin ) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['admin-sign']);
      }
   });
   }

  sign(login, password) {
    this.adminService.sign(login, password).subscribe( result => {
      const object = result.json();
      if ( object.isAdmin) {
        Swal.fire(
          'Good job!',
          'It\'s Good!',
          'success'
        );
        this.router.navigate(['admin']);
        localStorage.setItem('token', object.token);
      } else  {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Login or password is defined'
        });
      }

     });
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/adminService';
import { UserService } from 'src/app/shared/service/userService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private router: Router

  ) {
    this.verifyOfUser();
   }

   verifyOfUser() {
     this.userService.verify().subscribe( result => {
        const object = result.json();
        if ( object.isUser ) {
          this.router.navigate(['user']);
        } else {
          this.router.navigate(['sign']);
        }
     });
   }



   sign(login, password) {
      this.userService.sign(login, password).subscribe( result => {
        const object = result.json();
        if ( object.isUser) {
          Swal.fire(
            'Good job!',
            'It\'s Good!',
            'success'
          );
          this.router.navigate(['user']);
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

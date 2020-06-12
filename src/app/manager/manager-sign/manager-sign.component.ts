import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/service/managerService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-sign',
  templateUrl: './manager-sign.component.html',
  styleUrls: ['./manager-sign.component.css']
})
export class ManagerSignComponent implements OnInit {

  constructor(
    private managerService: ManagerService,
    private route: Router
  ) {
    this.verifyManager();
   }

  ngOnInit(): void {
  }

verifyManager() {
  this.managerService.verify().subscribe( result => {
    const object = result.json();
    if (object.isManager) {
      this.route.navigate(['manager']);
    } else {
      this.route.navigate(['manager-sign']);
    }
  });
}

sign(login, password) {

  this.managerService.sign(login, password).subscribe( result => {
    const object = result.json();
    if ( object.isManager) {
      Swal.fire(
        'Good job!',
        'It\'s Good!',
        'success'
      );
      this.route.navigate(['manager']);
      localStorage.setItem('token', object.token);
      localStorage.setItem('_id', object.adminId);
    } else  {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Login or password is defined'
      });
    }

   });
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/userService';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.verifyOfUser();
  }
  verifyOfUser() {
    this.userService.verify().subscribe( result => {
      const object = result.json();
      if ( object.isUser ) {
        this.userService.getId(object.userId).subscribe( res => {
          this.user = res.json();
        });
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['sign']);
      }
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $( function () {
      $('[data-toggle="offcanvas"]').on('click', function () {
        $('.sidebar-offcanvas').toggleClass('active');
      });
    });
  }

}

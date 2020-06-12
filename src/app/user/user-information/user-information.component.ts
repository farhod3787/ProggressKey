import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user: any = {};
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.getInformation();
  }

  getInformation() {
    this.userService.getInformation().subscribe( result => {
      this.user = result.json();
    });
  }

  updateInformation(fullName, newPassword) {
    console.log(fullName, newPassword);
  }

  delete() {
    this.userService.delete().subscribe( result => {
      if (result.ok) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
  }

}

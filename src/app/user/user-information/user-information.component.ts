import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user: any = {};
  constructor(
    private userService: UserService
  ) {
    this.getInformation();
  }

  getInformation() {
    this.userService.getInformation().subscribe( result => {
      this.user = result.json();
    });
  }
  ngOnInit() {
  }

}

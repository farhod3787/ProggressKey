import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  users = [];
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getTeam().subscribe( result => {
      this.users = result.json();
      console.log(this.users);

    });
  }

  ngOnInit() {
  }

}

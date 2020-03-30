import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-team',
  templateUrl: './user-team.component.html',
  styleUrls: ['./user-team.component.css']
})
export class UserTeamComponent implements OnInit {

  users: any = [];
  constructor(
    private userService: UserService
  ) {
    this.getTeam();
  }
  getTeam() {
    this.userService.getTeam().subscribe( result => {
      this.users = result.json();
      // this.testTime = new Date();
      // console.log(this.testTime);
    });
  }

  ngOnInit() {
  }

}

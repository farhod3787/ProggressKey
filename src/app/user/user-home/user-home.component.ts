import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  users = [];
  testTime: any;
  testTime2: any;
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getTeam().subscribe( result => {
      this.users = result.json();
      this.testTime = new Date();
      console.log(this.testTime);
    });
  }
  test() {
    this.testTime2 = new Date();
    console.log(this.testTime);
    console.log(this.testTime2);
    const time = this.testTime2 - this.testTime;
    const secund = time / 1000;
    const min = secund / 60;
    const hour = min / 60;
    console.log('Time ' + time);
    console.log('Secund ' + secund);
    console.log('Min ' + min);
    console.log('Hour ' + hour);
  }

  ngOnInit() {
  }

}

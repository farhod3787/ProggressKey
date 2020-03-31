import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  users = [];
  user: any = {};
  testTime: any;
  testTime2: any;
  status: any;
  generalBal: any;
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
    this.getInformation();
  }

  getUsers() {
    this.userService.getTeam().subscribe( result => {
      this.users = result.json();
    });
  }

  getInformation() {
    this.userService.getInformation().subscribe( result => {
      this.user = result.json();
      // this.generalBal = this.user.ballOfBinar + this.user.ballOfInvite +
      //                   this.user.ballOfCheck + this.user.ballOfWeek + this.user.ballOfMonth;
      if (this.user.firstBalance >= 500 && this.user.firstBalance <= 1000 && this.user.firstBalance <= 3000) {
        this.status = 'Oddiy';
      }
      if (this.user.firstBalance >= 1000 && this.user.firstBalance <= 3000) {
        this.status = 'O\'rta';
      }
      if (this.user.firstBalance >= 3000) {
        this.status = 'Lider';
      }
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

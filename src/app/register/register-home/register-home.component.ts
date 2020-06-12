import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';
import { ResgistrarService } from 'src/app/shared/service/registrarService';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  users = [];

  constructor(
    private userService: UserService,
    private registrarService: ResgistrarService,
  ) {
    this.getUsers();
   }

  ngOnInit(): void {
  }

  getUsers() {
    this.registrarService.getTeam(localStorage.getItem('_id')).subscribe( result => {
        if (result.ok) {
          this.users = result.json();
        } else {
          console.log('Team topilmadi');
        }
    });
    // this.registrarService.getId(localStorage.getItem('_id')).subscribe( result => {
      // console.log(result.json());

      // if ( result) {
      //   const id = result.json().registerUserId;
      //   for (let i = 0; i <= id.length - 1; i++) {
      //     this.userService.getId(id[i]).subscribe( res => {
      //       console.log(res.json());

      //       this.users[i] = res.json();
      //     });
      //   }
      //   console.log(this.users);
      // } else {
      //   console.log('Error');
      // }
      // console.log(this.users);
    // });
  }

}

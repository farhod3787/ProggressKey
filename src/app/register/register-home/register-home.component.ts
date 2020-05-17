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
    this.registrarService.getId(localStorage.getItem('_id')).subscribe( result => {
      if ( result) {
        const id = result.json().registerUserId;
        for (let i = 0; i <= id.length - 1; i++) {
          this.userService.getId(id[i]).subscribe( res => {
            this.users[i] = res.json();
          });
        }
      } else {
        console.log('Error');
      }
      // console.log(this.users);
    });
  }

}

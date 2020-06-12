import { Component, OnInit } from '@angular/core';
import { ResgistrarService } from 'src/app/shared/service/registrarService';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  regs = [];
  users = [];
  constructor(
    private registerService: ResgistrarService,
    private userService: UserService

  ) {
    this.getRegs();
    this.getUsers();
   }

  ngOnInit(): void {
  }

  getRegs() {
    this.registerService.getAll().subscribe( result => {
      if (result.ok) {
        if (result.json().length > 0 ) {
          this.regs = result.json();
        } else {
          console.log('Registerlar hali yo\'q');
        }
      } else {
        console.log('Error in get Registers');

      }

    });
  }

  getUsers() {
    this.userService.getWithAdmin().subscribe( result => {
      if (result.ok) {
        if (result.json().length > 0) {
          this.users = result.json();
          console.log(this.users);

        } else {
          console.log('Hali Userlar yo\'q');
        }
      } else {
        console.log('Error in get User');
      }

    });
  }

}

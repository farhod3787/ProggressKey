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
        this.regs = result.json();
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe( result => {
      this.users = result.json();
    });
  }

}

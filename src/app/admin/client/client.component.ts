import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  users = [];
  liders = 0;
  consols = 0;
  cunsomers = 0;
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
  }

  getUsers() {
      this.userService.getAllUsers().subscribe( result => {
        this.users = result.json();
        for (let i = 0; i <= this.users.length - 1; i++) {
          if (this.users[i].type === 'Leader') {
              this.liders++;
          }
          if (this.users[i].type === 'Console') {
            this.consols++;
          }
          if (this.users[i].type === 'Iste\'molchi') {
          this.cunsomers++;
          }
        }
      });


  }

  ngOnInit(): void {
  }

}

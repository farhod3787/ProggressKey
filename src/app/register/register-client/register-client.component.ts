import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  users: any = [];
  status = false;
  liders = 0;
  consols = 0;
  cunsomers = 0;
  constructor(
    private userService: UserService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe( result => {
      this.users = result.json();
      if (this.users.length === 0) {
        this.status = true;
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Mijozlar hali qo\'shilmagan'
        });
      }
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

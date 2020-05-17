import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/shared/service/transferService';
import { UserService } from 'src/app/shared/service/userService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer-about',
  templateUrl: './transfer-about.component.html',
  styleUrls: ['./transfer-about.component.css']
})
export class TransferAboutComponent implements OnInit {

  users = [];
  user: any;
  limit: any;
  constructor(
    private transferService: TransferService,
    private userService: UserService
  ) {
    this.getUsers();
    this.getInform();
   }

   getUsers() {
      this.userService.getAllUsers().subscribe( result => {
        this.users = result.json();
      });
   }

   getInform() {
     this.userService.getInformation().subscribe( result => {
      if (result.json()) {
        this.user = result.json();
        this.limit = this.user.genaralBall;
        console.log(this.user.genaralBall);

      } else {
        console.log('Error');
      }
     });
   }

   sendTransfer(to, howMuch) {
     this.transferService.post(to, howMuch).subscribe( result => {
       console.log(result.json());
     });
   }
  ngOnInit(): void {
  }

}

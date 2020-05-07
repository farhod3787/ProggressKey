import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/shared/service/transferService';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-transfer-about',
  templateUrl: './transfer-about.component.html',
  styleUrls: ['./transfer-about.component.css']
})
export class TransferAboutComponent implements OnInit {

  users = [];
  constructor(
    private transferService: TransferService,
    private userService: UserService
  ) {
    this.getUsers();
   }

   getUsers() {
      this.userService.getAllUsers().subscribe( result => {
        this.users = result.json();
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

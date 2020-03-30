import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/shared/service/transferService';

@Component({
  selector: 'app-transfer-about',
  templateUrl: './transfer-about.component.html',
  styleUrls: ['./transfer-about.component.css']
})
export class TransferAboutComponent implements OnInit {

  constructor(
    private transferService: TransferService
  ) {
   }

   sendTransfer(to, howMuch) {
     this.transferService.post(to, howMuch).subscribe( result => {
       console.log(result.json());
     });
   }
  ngOnInit(): void {
  }

}

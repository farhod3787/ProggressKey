import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/shared/service/transferService';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit {

  transfers: any = [];
  constructor(
    private transferService: TransferService
  ) {
    this.getHisTransfer();
   }

   getHisTransfer() {
    this.transferService.getHisTransfers().subscribe( result => {
      this.transfers = result.json();
      console.log(this.transfers);
    });
   }

  ngOnInit(): void {
  }

}

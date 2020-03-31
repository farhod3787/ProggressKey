import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/shared/service/transferService';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit {

  transfers: any = [];
  himTransfers: any = [];
  constructor(
    private transferService: TransferService
  ) {
    this.getHisTransfer();
    this.getHimTransfer();
   }

   getHisTransfer() {
    this.transferService.getHisTransfers().subscribe( result => {
      this.transfers = result.json();
    });
   }

   getHimTransfer() {
    this.transferService.getHimTransfers().subscribe( result => {
      this.himTransfers = result.json();
    });
   }

  ngOnInit(): void {
  }

}

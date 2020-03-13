import { Component, OnInit } from '@angular/core';
import { FilialService } from 'src/app/shared/service/filialService';

@Component({
  selector: 'app-department-stores',
  templateUrl: './department-stores.component.html',
  styleUrls: ['./department-stores.component.css']
})
export class DepartmentStoresComponent implements OnInit {

  filials: any = [];
  constructor(
    private filialService: FilialService
  ) {
    this.getFilial();
  }
  getFilial() {
    this.filialService.getAll().subscribe( result => {
      this.filials = result.json();
      console.log(this.filials);

    });
  }

  ngOnInit() {
  }

}

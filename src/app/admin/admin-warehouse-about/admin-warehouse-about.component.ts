import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WarehouseService } from 'src/app/shared/service/wareHouse';

@Component({
  selector: 'app-admin-warehouse-about',
  templateUrl: './admin-warehouse-about.component.html',
  styleUrls: ['./admin-warehouse-about.component.css']
})
export class AdminWarehouseAboutComponent implements OnInit {

  ware: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private wareService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.id = paramMap.get('id');
        this.wareService.getWareHouse(this.id).subscribe( result => {
            this.ware = result.json();
            console.log(this.ware);

        });
      } else {
        this.id = null;
      }
    });
  }

}

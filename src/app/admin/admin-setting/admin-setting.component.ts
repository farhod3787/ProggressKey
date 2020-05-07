import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/adminService';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {

  admin = {};
  constructor(
    private adminService: AdminService
  ) {
    this.get();
  }

  get() {
    this.adminService.getId().subscribe( result => {
      this.admin = result.json();
    });
  }
  ngOnInit(): void {
  }

}

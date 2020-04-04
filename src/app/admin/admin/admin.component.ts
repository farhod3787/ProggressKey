import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/adminService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private route: Router
  ) {
    this.verifyOfAdmin();
  }

  verifyOfAdmin() {
    this.adminService.verify().subscribe( result => {
      const object = result.json();
      if ( object.isAdmin ) {
        this.route.navigate(['admin']);
      } else {
        this.route.navigate(['admin-sign']);
      }
    });
  }


  ngOnInit(): void {
  }

}

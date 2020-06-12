import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/shared/service/managerService';
declare var $: any;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(
    private route: Router,
    private managerService: ManagerService
) {
  this.verifyManager();
}

verifyManager() {
  this.managerService.verify().subscribe( result => {
    const object = result.json();
    if (object.isManager) {
      this.route.navigate(['manager']);
    } else {
      this.route.navigate(['manager-sign']);
    }
  });
}

  ngOnInit(): void {
            // tslint:disable-next-line: only-arrow-functions
            $( function () {
              $('[data-toggle="offcanvas"]').on('click', function () {
                $('.sidebar-offcanvas').toggleClass('active');
              });
            });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    // this.route.navigate(['manager']);
    this.verifyManager();
  }

}

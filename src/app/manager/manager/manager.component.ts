import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
            // tslint:disable-next-line: only-arrow-functions
            $( function () {
              $('[data-toggle="offcanvas"]').on('click', function () {
                $('.sidebar-offcanvas').toggleClass('active');
              });
            });
  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

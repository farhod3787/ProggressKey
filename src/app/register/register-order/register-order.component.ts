import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {
  selected = 'option2';
  registrars: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}

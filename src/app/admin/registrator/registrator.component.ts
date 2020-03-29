import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.css']
})
export class RegistratorComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}

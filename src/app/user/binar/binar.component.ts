import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/userService';

@Component({
  selector: 'app-binar',
  templateUrl: './binar.component.html',
  styleUrls: ['./binar.component.css']
})
export class BinarComponent implements OnInit {

  users = [];
  user: any = {};
  constructor(
    private userService: UserService
  ) {

  }




  ngOnInit() {

  }

}

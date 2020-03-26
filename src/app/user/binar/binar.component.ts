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
    this.getUsers();
    this.testStorage();
    this.verify();
  }

  verify() {
    this.userService.verify().subscribe( result => {
      const id = result.json().userId;
      this.userService.getId(id).subscribe( res => {
        this.user = res.json();
        console.log(res.json());
      });
      // console.log(result.json());
    });
  }

  testStorage() {
    localStorage.setItem('token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IlVzZXIgMSIsInBhc3N3b3JkIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SndZWE56ZDI5eVpDSTZJbkJoYzNOM2IzSmtJaXdpYVdGMElqb3hOVGcwT1RnMU5UUTFmUS4zR0JZVTdpUG1GbjI4Wm5kM3FWYVFUbEhNcTU5QlEwM18yOG1sYWxTd3RNIiwiaWF0IjoxNTg0OTg1NTQ1fQ.qbmmudET8FS-0M9pavKLvu6u1vU5osqDl_FMNHLJtOI');
  }

  getUser() {
    this.userService.verify().subscribe( result => {
      console.log(result.json());
    });
  }
  getUsers() {
    this.userService.getAll().subscribe( result => {
      this.users = result.json();
      console.log(this.users);
    });
  }

  ngOnInit() {

  }

}

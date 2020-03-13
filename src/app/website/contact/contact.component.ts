import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/service/contactService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService
  ) {
  }

  send(name, phone, message) {
    this.contactService.post(name, phone, message).subscribe( result => {
      if(result.ok) {
        Swal.fire(
          'Good job!',
          'Text Sended',
          'success'
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error in Send message',
          timer: 3000
        });
      }
    })
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class SendProdService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/sendProduct/';

  getAll() {
    return this.http.get(this.api + 'getall');
  }

  getWithReg() {
    return this.http.get(this.api + 'getReg/' + localStorage.getItem('_id'));
  }


  getWithUser() {
    return this.http.get(this.api + 'getUser/' + localStorage.getItem('token'));
  }

  post(
    products: any,
    quantity: any,
    userId: string
  ) {
    const body = {
      products,
      quantity,
      userId
    };

    return this.http.post(this.api +  localStorage.getItem('token'), body);
  }

  getRequest(id) {
    return this.http.get(this.api + id );
  }

 updateStatus(id) {
     return this.http.get(this.api + 'updateStatus/' + id + '/' + localStorage.getItem('token'));
 }

}

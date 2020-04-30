import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ReqProdService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/reqProducts/';

  getAll() {
    return this.http.get(this.api + 'getall');
  }

  post(
    products: any,
    quantity: any,
    registrarId: string
  ) {
    const body = {
      products,
      quantity,
      registrarId
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

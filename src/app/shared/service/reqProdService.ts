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

  getAdmin() {
    return this.http.get(this.api + 'getAdmin/' + localStorage.getItem('token'));
  }

  getReg() {
    return this.http.get(this.api + 'getReg/' + localStorage.getItem('_id'));
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
    console.log(body);

    return this.http.post(this.api +  localStorage.getItem('token'), body);
  }

  getRequest(id) {
    return this.http.get(this.api + id );
  }


}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { url } from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/transfers/';

  getAll() {
    return this.http.get(this.api + 'getall');
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  post(to, howMuch: Number ) {
    const body = {
      to,
      howMuch
    };
    return this.http.post(this.api + localStorage.getItem('token'), body);
  }

  getTransfer(id) {
    return this.http.get(this.api + id);
  }

  getHisTransfers() {
    return this.http.get(this.api + 'getHisTransfers/' + localStorage.getItem('token'));
  }

  getHimTransfers() {
    return this.http.get(this.api + 'getHimTransfers/' + localStorage.getItem('token'));
  }

}

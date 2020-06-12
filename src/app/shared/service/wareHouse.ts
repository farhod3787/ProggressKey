import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { url } from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/warehouse/';

  getAll() {
    return this.http.get(this.api + 'getall');
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  getFilial() {
    return this.http.get(this.api + 'filial/' + localStorage.getItem('_id'));
  }

  post(
    name: string,
    filialId: string,
    // nameEn: string,
    products: string[],
    quantity: string[]
  ) {
    const body = {
       name,
       filialId,
       products,
       quantity
    };
    return this.http.post(this.api + localStorage.getItem('token'), body);
  }

  getWareHouse(id) {
    return this.http.get(this.api + id);
  }

  update(
    id: string,
    products: [],
    quantity: []
  ) {
    const body = {
       products,
       quantity,
    };

    return this.http.patch(this.api + id + '/' + localStorage.getItem('token'), body);
  }



}

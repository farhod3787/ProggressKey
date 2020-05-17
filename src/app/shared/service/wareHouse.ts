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
    // nameRu: string,
    // nameEn: string,
    products: string[],
    quantity: string[]
  ) {
    const body = {
      'name ': name,
      // 'nameRu ': nameRu,
      // 'nameEn ': nameEn,
      'products ': products,
      'quantity ': quantity
    };
    return this.http.post(this.api + localStorage.getItem('token'), body);
  }

  getWareHouse(id) {
    return this.http.get(this.api + id);
  }

  update(
    id: string,
    nameUz: string,
    nameRu: string,
    nameEn: string,
    products: string[]
  ) {
    const body = {
      'nameUz ': nameUz,
      'nameRu ': nameRu,
      'nameEn ': nameEn,
      'products ': products
    };

    return this.http.patch(this.api + id + '/' + localStorage.getItem('token'), body);
  }



}

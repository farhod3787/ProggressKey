import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { url } from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/filial/';

  getAll() {
    return this.http.get(this.api + 'getall');
  }

  getFilial(id) {
    return this.http.get( this.api + 'getFilial/' + id);
  }

  post(
    province: string,
    region: string,
    name: string
  ) {
    const body = {
                  'province ': province,
                  'region ': region,
                  'name ': name
    };
    return this.http.post(this.api + localStorage.getItem('token'), body);
  }

  patch(
    id: string,
    province: string,
    region: string,
    name: string
  ) {
    const body = {
      'province ': province,
      'region ': region,
      'name ': name
    };
    return this.http.patch(this.api  + id + '/' + localStorage.getItem('token'), body);
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }


}

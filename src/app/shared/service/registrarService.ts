
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ResgistrarService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/registrar/';


  post(
    filialId: string,
    login: string,
    image: File,
    password: string,
    // registerUserId: string[], // aslida array
    fullName: string,
    warehouseId: string
) {
  const Registrar = new FormData();
  Registrar.append('filialId', filialId);
  Registrar.append('image', image);
  Registrar.append('login', login);
  Registrar.append('password', password);
  Registrar.append('fullName', fullName);
  Registrar.append('warehouseId', warehouseId);

  return this.http.post(this.api + localStorage.getItem('token'), Registrar);
}

  getAll() {
    return this.http.get(this.api);
  }

  getId(id) {
    return this.http.get(this.api + id);
  }

  getTeam(id) {
    return this.http.get(this.api + '/team/' + id);
  }

  sign(login, password) {
    const body = {
      login,
      password
    };
    return this.http.post( this.api, body);
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  update(
    id: string,
    filialId: string,
    login: string,
    image: File,
    password: string,
    registerUserId: string, // Array
    fullName: string,
    warehouseId: string
    ) {
    const body = {
        'filialId ': filialId,
        'image ' : image,
        'login ': login,
        'password ': password,
        'fullName ': fullName,
        'registerUserId ': registerUserId,
        'warehouseId ': warehouseId
    };

    return this.http.patch(this.api + id, body);
  }

  verify() {
    return this.http.get(this.api + 'verifyRegistrar/' +  localStorage.getItem('token'));
  }

}

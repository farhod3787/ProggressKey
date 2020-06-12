
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Http } from '@angular/http';

import {url} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/manager/';


  post(
    login: string,
    image: File,
    password: string,
    fullName: string,
) {
  const Manager = new FormData();
  Manager.append('image', image);
  Manager.append('login', login);
  Manager.append('password', password);
  Manager.append('fullName', fullName);
  // const body = {
  //   'filialId ': filialId,
  //   'image ' : image,
  //   'login ': login,
  //   'password ': password,
  //   'fullName ': fullName,
  //   // 'registerUserId ': registerUserId,
  //   'warehouseId ': warehouseId
  // };

  return this.http.post(this.api + localStorage.getItem('token'), Manager);
}

  getAll() {
    return this.http.get(this.api);
  }

  getId(id) {
    return this.http.get(this.api + id);
  }

  sign(login, password) {
    const body = {
      login,
      password
    };

    return this.http.post( this.api , body);
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  update(
    id: string,
    login: string,
    image: File,
    password: string,
    fullName: string
    ) {
    const body = {
        'image ' : image,
        'login ': login,
        'password ': password,
        'fullName ': fullName,
    };

    return this.http.patch(this.api + 'updateManager/' + id + localStorage.getItem('token'), body);
  }

  verify() {
    return this.http.get(this.api + 'verifyManager/' +  localStorage.getItem('token'));
  }

}

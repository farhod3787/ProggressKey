
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Http } from '@angular/http';

import {url} from '../../url/url';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  url = url.url;
  api = this.url + '/api/users/';


  post(
    image: File,
    type: string,
    login: string,
    password: string,
    fullName: string,
    telNumber: string,
    filialId: string,
    firstBalance: string,
    whoAdd: string,
    whoBottom: string,
    ball: any
) {
  const User: any = new FormData();
  User.append('image', image);
  User.append('type', type);
  User.append('login', login);
  User.append('password', password);
  User.append('fullName', fullName);
  User.append('telNumber', telNumber);
  User.append('filialId', filialId);
  User.append('firstBalance', firstBalance);
  User.append('whoAdd', whoAdd);
  User.append('whoBottom', whoBottom);
  User.append('ball', ball);

  return this.http.post(this.api + localStorage.getItem('_id') , User);
}

  getAll() {
    return this.http.get(this.api + localStorage.getItem('_id'));
  }

  getAllUsers() {
    return this.http.get(this.api);
  }

  getId(id) {
    return this.http.get(this.api + 'me/' + id);
  }

  getTeam() {
    return this.http.get(this.api + 'team/' + localStorage.getItem('token'))
  }

  getEmptyUsers() {
    return this.http.get(this.api + 'emptyUsers');
  }

  getInformation() {
    return this.http.get(this.api + 'user/Information/' + localStorage.getItem('token'));
  }

  sign(login, password) {
    const body = {
       login,
       password
    };
    return this.http.post( this.api + 'sign/home', body);
  }

  delete(id) {
    return this.http.delete(this.api + id + '/' + localStorage.getItem('token'));
  }

  update(
    id: string,
    image: File,
    type: string,
    login: string,
    password: string,
    fullName: string,
    telNumber: string,
    filialId: string,
    firstBalance: string,
    whoAdd: string,
    whoBottom: string
    ) {
    const body = {
      'image ': image,
      'type ' : type,
      'login ': login,
      'password ': password,
      'fullName ': fullName,
      'telNumber ': telNumber,
      'filialId ': filialId,
      'firstBalance ': firstBalance,
      'whoAdd ': whoAdd,
      'whoBottom ' : whoBottom
    };

    return this.http.patch(this.api + id, body);
  }

  verify() {
    return this.http.get(this.api + 'verify/User/' +  localStorage.getItem('token'));
  }

  verifyLogin(login) {
    return this.http.get(this.api + 'verifyLogin/' + login);
  }

}

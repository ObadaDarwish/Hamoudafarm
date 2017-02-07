import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Headers, RequestOptions} from "@angular/http";
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }



  PostLogin(username, password) {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    var body = JSON.stringify({
      username: username,
      password: password
    });
    return this.http.post(`http://localhost:8000/Login`, body, options)
      .map(response => {
        return response;
      });
  }







}

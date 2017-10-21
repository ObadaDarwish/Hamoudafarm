import { Injectable } from '@angular/core';
import {RequestOptions,Http} from '@angular/http'
@Injectable()
export class LandingPageService {

  constructor(private http:Http) { }




postContactUs(first_name,last_name,email,message,date){
    let body={
      first_name:first_name,
      email:email,
      last_name:last_name,
      message:message,
      created_at:date

    };
    return this.http.post('http://localhost:8000/contactUs',body)
      .map(response => {
        return response;
      });

  }
}

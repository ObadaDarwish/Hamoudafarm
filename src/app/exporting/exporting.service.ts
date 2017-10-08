import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ExportingService {

  constructor(private http: Http) { }


  postExportingRequest(name,email,product,date,details,quantity){
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    let body={
      name:name,
      email:email,
      product:product,
      date:date,
      details:details,
      quantity:quantity

    };
     return this.http.post('http://localhost:8000/exportingRequest',body)
      .map(response => {
      return response;
    });

  }
}

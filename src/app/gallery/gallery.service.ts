import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }


  getGallery(): Observable <any> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8000/getGallery')
      .map(response => {
        return response.json().Gallery;
      });

  }


}

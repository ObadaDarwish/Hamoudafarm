import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AdminPanelService {
  responseData: any;

  constructor(private router: Router, private http: Http) {
    this.http = http;
  }


  postImage(file:any) {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'multipart/form-data');
    var body = {
      image:file,
    };
    return this.http.post('http://localhost:8000/fileupload', body, options /*{headers: headers}*/)
      .map(response => {
        return response;
      });

  }
  // xhrPostImage( postData: any, files: File[]){
  //   let headers = new Headers();
  //   let formData:FormData = new FormData();
  //   formData.append('files', files[0], files[0].name);
  //   // For multiple files
  //   // for (let i = 0; i < files.length; i++) {
  //   //     formData.append(`files[]`, files[i], files[i].name);
  //   // }
  //
  //   if(postData !=="" && postData !== undefined && postData !==null){
  //     for (var property in postData) {
  //       if (postData.hasOwnProperty(property)) {
  //         formData.append(property, postData[property]);
  //       }
  //     }
  //   }
  //   var returnReponse = new Promise((resolve, reject) => {
  //     this.http.post('http://localhost:8000/fileupload', formData, {
  //       headers: headers
  //     }).subscribe(
  //       res => {
  //         this.responseData = res.json();
  //         resolve(this.responseData);
  //       },
  //       error => {
  //         this.router.navigate(['/login']);
  //         reject(error);
  //       }
  //     );
  //   });
  //   return returnReponse;
  // }




}

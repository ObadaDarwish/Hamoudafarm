/**
 * Created by ObadaDarwish on 04/11/2017.
 */

import {Headers, RequestOptions} from "@angular/http";
import {environment} from "../environments/environment";
export class AppSettings {



  public static get API_ENDPOINT(): string {
    if (!environment.production)
      return 'http://localhost:8000';
    else
      return '';
  }


  // public static getRequestOptions() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('api_key', AppSettings.API_KEY);
  //   headers.append('api_secret', AppSettings.API_SECRET);
  //   headers.append('time_zone', AppSettings.timeZone);
  //   return new RequestOptions({headers: headers});
  // }
  //
  // public static getUploadOptions() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('api_key', AppSettings.API_KEY);
  //   headers.append('api_secret', AppSettings.API_SECRET);
  //   headers.append('time_zone', AppSettings.timeZone);
  //   return new RequestOptions({headers: headers});
  // }
}

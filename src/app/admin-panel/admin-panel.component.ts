import {Component, OnInit, ElementRef} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AdminPanelService} from './admin-panel.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8000/fileupload';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {
  public Admin: FormGroup;
  image: any;
  fileList: FileList;

  constructor(private http: Http, private fb: FormBuilder, private admin: AdminPanelService, private el: ElementRef) {
    this.Admin = fb.group({
      images: ['']
    });
  }

  ngOnInit() {
  }


  fileChange(event) {
    this.fileList = event.target.files;
    console.log(this.fileList);
  }


  postImage() {
    if (this.fileList.length > 0) {
      let formData: FormData = new FormData();
      for (var x = 0; x < this.fileList.length; x++) {
        formData.append('images[]', this.fileList[x], this.fileList[x].name);
      }

      let headers = new Headers();
      let options = new RequestOptions({headers: headers});
      this.http.post(`http://localhost:8000/fileupload`, formData, options)
        .map(res => res)
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        )
    }

  }


}

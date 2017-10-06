import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AdminPanelService} from '../admin-panel.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  public Admin: FormGroup;
  image: any;
  fileList: FileList;

  constructor(private notify: NotificationsService, private loading: SlimLoadingBarService, private http: Http, private fb: FormBuilder, private admin: AdminPanelService) {
    this.Admin = fb.group({
      video: [''],
      title: [''],
      description: ['']
    });
    this.fileList = null;
  }

  ngOnInit() {
  }

  fileChange(event) {
    this.fileList = event.target.files;
    console.log(this.fileList);
  }


  postNewPost(form) {
    if (form.title == '') {
      this.notify.error('Error','No title found');
    }
    else {
      this.loading.start(()=> {
        console.log('loading');
      });
      let formData: FormData = new FormData();

      if (this.fileList) {
        if (this.fileList.length > 0) {

          for (var x = 0; x < this.fileList.length; x++) {
            formData.append('images[]', this.fileList[x], this.fileList[x].name);
          }
        }
      }
      formData.append('title', form.title);
      formData.append('video', form.video);
      formData.append('description', form.description);

      let headers = new Headers();
      let options = new RequestOptions({headers: headers});
      this.http.post(`http://localhost:8000/newPost`, formData, options)
        .map(res => res)
        .catch(error => Observable.throw(error))
        .subscribe(
          data => {
            console.log(data)
            this.loading.complete();
            this.notify.success('Success', 'Posted successfully');
          },
          error => {
            console.log(error)
            this.loading.complete();
            this.notify.error('Error', 'Post can not be submitted');
          }
        )


    }
  }
}

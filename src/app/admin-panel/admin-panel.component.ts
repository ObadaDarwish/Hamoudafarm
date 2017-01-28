import {Component, OnInit, ElementRef} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AdminPanelService} from './admin-panel.service';
import {FileUploader, FileSelectDirective} from 'ng2-file-upload';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {
  public Admin: FormGroup;
  image: any;

  constructor(private fb: FormBuilder, private admin: AdminPanelService, private el: ElementRef) {
    this.Admin = fb.group({
      images: ['']
    });
  }

  ngOnInit() {
  }
  // public uploader:FileUploader = new FileUploader({url: 'http://localhost:8000/fileupload',
  // 'Access-Control-Allow-Headers':'X-Requested-With,content-type',
  // 'Access-Control-Allow-Credentials':true,
  // 'Access-Control-Allow-Origin':'http://localhost:4200'});

  // fileChangeEvent(event: any) {
  //   this.image = event.srcElement.files;
  //   console.log(this.image);
  // }

  // postImage() {
  //   this.admin.postImage(this.image[0]).subscribe(
  //     (response)=> {
  //       console.log("image uploaded : " + response);
  //     }
  //     , (error)=> {
  //       console.log("Can not upload image : " + error);
  //     });
  //
  // }
  // postImage(){
  //   this.admin.xhrPostImage([], this.image).then(result => {
  //     console.log(result);
  //   });
  //
  // }

}

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


  fileChangeEvent(event: any) {
    this.image = event.srcElement.files;
    console.log(this.image);
  }



}

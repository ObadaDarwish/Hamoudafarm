import {Component, OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
import {ExportingService} from './exporting.service';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
@Component({
  selector: 'app-exporting',
  templateUrl: './exporting.component.html',
  styleUrls: ['./exporting.component.css']
})
export class ExportingComponent implements OnInit {
  exportingform: FormGroup;
  products: any;

  constructor(private fb: FormBuilder, private loading: SlimLoadingBarService, private notify: NotificationsService, private exporting: ExportingService) {
    this.exportingform = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'product': ['', Validators.required],
      'quantity': ['', Validators.required],
      'details': [''],
      'date': ['', Validators.required]
    })
  }

  minDate = new Date();
  isloading: boolean = false;

  ngOnInit() {
    this.exporting.getProducts().subscribe(
      (products)=> {
        this.products = products;
      }
      , (error)=> {
        console.log("Can not load products : " + error);
      }
    );
  }

  ExportRequest(value, valid) {
    this.isloading = true;
    this.loading.start(()=> {
      console.log('Loading');
    });
    if (valid) {
      this.exporting.postExportingRequest(this.exportingform.value.name, this.exportingform.value.email, this.exportingform.value.product,
        this.exportingform.value.date, this.exportingform.value.details, this.exportingform.value.quantity,
        this.minDate).subscribe(
        response=> {
          this.loading.complete();
          this.notify.success('Success', 'Exporting request has been sent');
          this.isloading = false;
          this.exportingform.reset();
        },
        error=> {
          this.loading.complete();
          this.notify.error('Error', 'Can not send request');
          this.isloading = false;
        }
      );
    }
    else {
      this.notify.error('Error', '* fields are required');
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
import {ExportingService} from './exporting.service';

@Component({
  selector: 'app-exporting',
  templateUrl: './exporting.component.html',
  styleUrls: ['./exporting.component.css']
})
export class ExportingComponent implements OnInit {

  constructor(private loading: SlimLoadingBarService, private notify: NotificationsService, private exporting: ExportingService) {
  }

  date: any;
  name: any;
  email: any;
  product: any;
  quantity: any;
  details: any;
  minDate = new Date();
  products: any;
  ExtraDay: any;

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

  ExpoertRequest() {
    this.loading.start(()=> {
      console.log('Loading');
    });
    this.ExtraDay = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();
    if (this.date && this.name && this.email && this.product && this.quantity && this.details) {
      this.exporting.postExportingRequest(this.name, this.email, this.product, this.ExtraDay, this.details, this.quantity, this.minDate).subscribe(
        response=> {
          this.loading.complete();
          this.notify.success('Success', 'Exporting request has been sent');
          console.log(response);
          this.name = "";
          this.email = "";
          this.product = "";
          this.date = "";
          this.details = "";
          this.quantity = "";

        },
        error=> {
          this.loading.complete();
          this.notify.error('Error', 'Can not send request');
          console.log(error);
        }
      );
    }
    else {
      this.notify.error('Error', 'All fields are required');
    }
  }

}

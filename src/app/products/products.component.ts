import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {GlobalService} from '../global.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  spinner: boolean;

  constructor(public globalService: GlobalService, private loading: SlimLoadingBarService, private product: ProductsService) {
    this.spinner = true;
  }

  ngOnInit() {
    this.loading.start(()=> {
      console.log('loading')
    });
    this.globalService.loadingIndicator = true;
    this.product.getProducts().subscribe(
      (products)=> {
        this.products = products;
        console.log(this.products);
        this.loading.complete();
        this.globalService.loadingIndicator = false;
      }
      , (error)=> {
        console.log("Can not load products : " + error);
        this.loading.complete();
        this.globalService.loadingIndicator = false;
      }
    );
  }

  onLoad() {
    this.spinner = false;
  }
}

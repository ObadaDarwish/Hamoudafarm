import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
  spinner: boolean;
  constructor(private loading:SlimLoadingBarService,private product:ProductsService) {
    this.spinner = true;
  }

  ngOnInit() {
    this.loading.start(()=>{console.log('loading')});
    this.product.getProducts().subscribe(
      (products)=> {
      this.products=products;
        this.loading.complete();
      }
      , (error)=> {
        console.log("Can not load products : " + error);
        this.loading.complete();
      }
    );
  }
  onLoad(){
    this.spinner = false;
  }
}

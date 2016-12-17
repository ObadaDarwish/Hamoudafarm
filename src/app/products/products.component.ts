import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
  constructor(private product:ProductsService) { }

  ngOnInit() {
    this.product.getProducts().subscribe(
      (products)=> {
      this.products=products;
        console.log(this.products);
      }
      , (error)=> {
        console.log("Can not load products : " + error);
      }
    );
  }

}

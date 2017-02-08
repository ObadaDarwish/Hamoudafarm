import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {MainRouting} from '../app.routes';
import {ProductsService} from './products.service';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
  ],
  declarations: [ProductsComponent],
  exports:[ProductsComponent],
  providers:[ProductsService]
})
export class ProductsModule { }

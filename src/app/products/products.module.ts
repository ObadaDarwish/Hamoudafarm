import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {MainRouting} from '../app.routes';
import {ProductsService} from './products.service';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    LoadingIndicatorModule
  ],
  declarations: [ProductsComponent],
  exports:[ProductsComponent],
  providers:[ProductsService]
})
export class ProductsModule { }

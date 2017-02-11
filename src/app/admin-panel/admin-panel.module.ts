import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import {MainRouting} from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminPanelService} from './admin-panel.service';
import { NewPostComponent } from './new-post/new-post.component';
import { NewProductComponent } from './new-product/new-product.component';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule
  ],
  declarations: [AdminPanelComponent, NewPostComponent, NewProductComponent],
  exports:[AdminPanelComponent],
  providers:[AdminPanelService]
})
export class AdminPanelModule { }

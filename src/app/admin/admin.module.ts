import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {MainRouting} from '../app.routes';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {AdminService} from './admin.service';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent],
  providers:[AdminService]
})
export class AdminModule { }

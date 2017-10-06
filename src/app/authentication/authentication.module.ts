import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import {MainRouting} from '../app.routes';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {GlobalService} from '../global.service';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule,

  ],
  declarations: [AuthenticationComponent, LoginComponent],
  providers:[AuthenticationService,GlobalService]
})
export class AuthenticationModule { }

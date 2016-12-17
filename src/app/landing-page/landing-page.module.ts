import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {MainRouting} from '../app.routes';
@NgModule({
  imports: [
    CommonModule,
    MainRouting

  ],
  declarations: [LandingPageComponent],
  exports:[LandingPageComponent]
})
export class LandingPageModule { }

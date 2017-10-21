import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {MainRouting} from '../app.routes';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {LandingPageService} from './landing-page.service';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MainRouting
    , SlimLoadingBarModule
  ],
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  providers:[LandingPageService]
})
export class LandingPageModule {
}

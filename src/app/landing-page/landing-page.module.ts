import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {MainRouting} from '../app.routes';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


@NgModule({
  imports: [
    CommonModule,
    MainRouting
    , SlimLoadingBarModule
  ],
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent]
})
export class LandingPageModule {
}

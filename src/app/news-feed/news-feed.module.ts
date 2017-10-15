import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed.component';
import {MainRouting} from '../app.routes';
import {NewsFeedService}from './news-feed.service';
import {SafePipe} from '../pipes/safeUrl';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SlimLoadingBarModule,
    LoadingIndicatorModule
  ],
  declarations: [NewsFeedComponent,SafePipe],
  exports:[NewsFeedComponent],
  providers:[NewsFeedService]
})
export class NewsFeedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed.component';
import {MainRouting} from '../app.routes';
import {NewsFeedService}from './news-feed.service';
import {PipeSharedModule} from '../pipes/pipe-shared.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
import { MomentModule } from 'angular2-moment';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SlimLoadingBarModule,
    LoadingIndicatorModule,
    MomentModule,
    PipeSharedModule
  ],
  declarations: [NewsFeedComponent],
  exports:[NewsFeedComponent],
  providers:[NewsFeedService]
})
export class NewsFeedModule { }

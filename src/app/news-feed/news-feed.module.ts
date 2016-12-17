import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed.component';
import {MainRouting} from '../app.routes';
import {NewsFeedService}from './news-feed.service';
import {SafePipe} from '../pipes/safeUrl';
@NgModule({
  imports: [
    CommonModule,
    MainRouting
  ],
  declarations: [NewsFeedComponent,SafePipe],
  exports:[NewsFeedComponent],
  providers:[NewsFeedService]
})
export class NewsFeedModule { }

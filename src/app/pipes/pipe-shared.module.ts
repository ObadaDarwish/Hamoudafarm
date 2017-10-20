import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafePipe} from './safeUrl';
import {sortNewsFeed} from './sort-news-feed';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    sortNewsFeed,
    SafePipe],
  exports:[sortNewsFeed,SafePipe]
})
export class PipeSharedModule { }

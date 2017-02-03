import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from './gallery.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule
  ],
  declarations: [GalleryComponent],
  exports:[GalleryComponent],
  providers:[GalleryService]
})
export class GalleryModule { }

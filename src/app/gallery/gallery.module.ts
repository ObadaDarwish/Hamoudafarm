import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from './gallery.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleryComponent],
  exports:[GalleryComponent],
  providers:[GalleryService]
})
export class GalleryModule { }

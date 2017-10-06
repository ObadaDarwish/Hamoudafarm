import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from './gallery.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ModalModule} from 'ng2-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule,
    ModalModule.forRoot()
  ],
  declarations: [GalleryComponent],
  exports:[GalleryComponent],
  providers:[GalleryService]
})
export class GalleryModule { }

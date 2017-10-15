import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from './gallery.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {ModalModule} from 'ng2-bootstrap';
import {LoadingIndicatorModule} from '../loading-indicator/loading-indicator.module';
@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule,
    ModalModule.forRoot(),
    LoadingIndicatorModule
  ],
  declarations: [GalleryComponent],
  exports:[GalleryComponent],
  providers:[GalleryService]
})
export class GalleryModule { }

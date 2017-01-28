import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import {MainRouting} from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminPanelService} from './admin-panel.service';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations: [AdminPanelComponent],
  exports:[AdminPanelComponent],
  providers:[AdminPanelService]
})
export class AdminPanelModule { }

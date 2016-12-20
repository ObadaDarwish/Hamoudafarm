import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import {MainRouting} from '../app.routes';
@NgModule({
  imports: [
    CommonModule,
    MainRouting
  ],
  declarations: [AdminPanelComponent],
  exports:[AdminPanelComponent]
})
export class AdminPanelModule { }

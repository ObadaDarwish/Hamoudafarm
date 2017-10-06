import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LandingPageModule} from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NewsFeedModule} from './news-feed/news-feed.module';
import {MainRouting} from './app.routes';
import {ProductsModule} from './products/products.module';
import {GalleryModule} from './gallery/gallery.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AuthenticationModule} from './authentication/authentication.module';
import {loginGuard} from './guards/login';
import { LostComponent } from './lost/lost.component';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
import {ModalModule} from 'ng2-bootstrap';
import { ExportingComponent } from './exporting/exporting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule } from 'ng2-bootstrap';
import {DatepickerModule} from 'ng2-bootstrap';
import {ExportingService} from './exporting/exporting.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LostComponent,
    ExportingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LandingPageModule,
    NewsFeedModule,
    ProductsModule,
    GalleryModule,
    BrowserAnimationsModule,
    AdminPanelModule,
    MainRouting,
    SlimLoadingBarModule,
    AuthenticationModule,
    SimpleNotificationsModule,
    ModalModule.forRoot(),
    BsDropdownModule,
    DatepickerModule,

  ],
  providers: [loginGuard,NotificationsService,ExportingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {FileUploadModule} from 'ng2-file-upload';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AuthenticationModule} from './authentication/authentication.module';
import {loginGuard} from './guards/login';
import { LostComponent } from './lost/lost.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LostComponent,
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
    AdminPanelModule,
    MainRouting,
    FileUploadModule,
    SlimLoadingBarModule,
    AuthenticationModule
  ],
  providers: [loginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

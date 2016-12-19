import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LandingPageModule} from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NewsFeedModule} from './news-feed/news-feed.module';
import {MainRouting} from './app.routes';
import {ProductsModule} from './products/products.module';
import {GalleryModule} from './gallery/gallery.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LandingPageModule,
    NewsFeedModule,
    ProductsModule,
    GalleryModule,
    MainRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

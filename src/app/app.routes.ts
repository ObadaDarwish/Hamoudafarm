/**
 * Created by ObadaDarwish on 13/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {ProductsComponent} from './products/products.component';
const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:LandingPageComponent },
  {path: 'NewsFeed', component:NewsFeedComponent},
  {path: 'Products', component:ProductsComponent}




];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);





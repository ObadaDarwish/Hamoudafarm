/**
 * Created by ObadaDarwish on 13/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';

const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:LandingPageComponent },
  {path: 'NewsFeed', component:NewsFeedComponent}




];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);





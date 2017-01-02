/**
 * Created by ObadaDarwish on 13/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {ProductsComponent} from './products/products.component';
import  {GalleryComponent} from './gallery/gallery.component';
import {AdminComponent} from './admin/admin.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:LandingPageComponent },
  {path: 'NewsFeed', component:NewsFeedComponent},
  {path: 'Products', component:ProductsComponent},
  {path: 'Gallery', component:GalleryComponent},
  {path: 'HamoudaAdminLogin', component:AdminComponent},
  {path: 'HamoudaPanel', component:AdminPanelComponent}




];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);





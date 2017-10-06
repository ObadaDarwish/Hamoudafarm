/**
 * Created by ObadaDarwish on 13/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {ProductsComponent} from './products/products.component';
import  {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './authentication/login/login.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {loginGuard} from './guards/login';
import {LostComponent}  from './lost/lost.component';
import {NewPostComponent} from './admin-panel/new-post/new-post.component';
import {NewProductComponent} from './admin-panel/new-product/new-product.component';
import {ExportingComponent} from './exporting/exporting.component';
const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:LandingPageComponent },
  {path: 'NewsFeed', component:NewsFeedComponent},
  {path: 'Products', component:ProductsComponent},
  {path: 'Gallery', component:GalleryComponent},
  {path: 'Exporting', component:ExportingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'AdminPanel', component:AdminPanelComponent, canActivate: [loginGuard],
    children: [
      /*  admin tools  */
      {path: '', redirectTo: 'newpost', pathMatch: 'full'},
      {path:'newpost',component:NewPostComponent},
      {path:'newproduct',component:NewProductComponent}
      ]},
  // ,canActivate: [loginGuard]
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path: '404', component: LostComponent},


];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);





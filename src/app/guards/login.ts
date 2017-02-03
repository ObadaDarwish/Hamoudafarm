/**
 * Created by ObadaDarwish on 03/02/2017.
 */
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {GlobalService} from '../global.service';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable()
export class loginGuard implements CanActivate {

  constructor(private router: Router, private  globalservice: GlobalService, private authserice: AuthenticationService) {
  }


  canActivate() {

    if (this.globalservice.getCookie('loginToken')!='') {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}

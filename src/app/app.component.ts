import {Component} from '@angular/core';
import {GlobalService} from './global.service';
import {AppSettings} from './app.settings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public globalService: GlobalService) {
    this.globalService.globalDomain = AppSettings.API_ENDPOINT;
  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
  }
}

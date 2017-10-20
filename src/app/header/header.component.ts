import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../global.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public globalService: GlobalService) {
  }

  ngOnInit() {
  }

  Adminlogin() {
    window.open(this.globalService.globalDomain + '/admin', "_blank");
  }

  Contact() {
    window.scroll(0, 100000);
  }
}

import {Component, OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [trigger('Firstmoto', [
    state('inactive',style({'margin-left':'-150%'})),
    state('active',style({'margin-left':'14%'})),
    transition('inactive => active', animate('700ms ease-in')),
    transition('active => inactive', animate('700ms ease-out'))
  ]),
    trigger('Secondmoto', [
      state('inactive',style({'margin-left':'-150%'})),
      state('active',style({'margin-left':'14%'})),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ]),
    trigger('Thirdmoto', [
      state('inactive',style({'margin-left':'-150%'})),
      state('active',style({'margin-left':'14%'})),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ]),
  ]
})
export class LandingPageComponent implements OnInit {

  constructor(private loading: SlimLoadingBarService) {
  }

  public moto1: string = 'inactive';
  public moto2: string = 'inactive';
  public moto3: string = 'inactive';

  ngOnInit() {
    setTimeout(()=> {
      this.moto1 = 'active';
    }, 500);
    setTimeout(()=> {
      this.moto2 = 'active';
    }, 650);
    setTimeout(()=> {
      this.moto3 = 'active';
    }, 800);
  }

}

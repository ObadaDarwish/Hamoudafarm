import {Component, OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {FormGroup, FormBuilder, Validators}from '@angular/forms';
import {LandingPageService} from './landing-page.service';
import {NotificationsService} from 'angular2-notifications/src/simple-notifications/services/notifications.service';
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
    state('inactive', style({'margin-left': '-150%'})),
    state('active', style({'margin-left': '14%'})),
    transition('inactive => active', animate('700ms ease-in')),
    transition('active => inactive', animate('700ms ease-out'))
  ]),
    trigger('Secondmoto', [
      state('inactive', style({'margin-left': '-150%'})),
      state('active', style({'margin-left': '14%'})),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ]),
    trigger('Thirdmoto', [
      state('inactive', style({'margin-left': '-150%'})),
      state('active', style({'margin-left': '14%'})),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ]),
  ]
})

export class LandingPageComponent implements OnInit {
  contact_us_form: FormGroup;
  isloading: boolean = false;
  minDate = new Date();

  constructor(private notify: NotificationsService, private landingService: LandingPageService, private fb: FormBuilder, private loading: SlimLoadingBarService) {
    this.contact_us_form = fb.group({
      'first_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15}( )*?)$')])],
      'last_name': ['', Validators.required],
      'message': ['', Validators.required],
    })
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

  contactUs(value, valid) {
    this.isloading = true;
    this.landingService.postContactUs(this.contact_us_form.value.first_name, this.contact_us_form.value.last_name, this.contact_us_form.value.email
      , this.contact_us_form.value.message, this.minDate
  ).subscribe(
      response=> {
        this.loading.complete();
        this.notify.success('Success', ' request had been sent');
        this.isloading = false;
        this.contact_us_form.reset();
      },
      error=> {
        this.loading.complete();
        this.notify.error('Error', 'Can not send request');
        this.isloading = false;
      }
    );
  }
}

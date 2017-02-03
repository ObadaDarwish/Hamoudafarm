import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from '@angular/router'
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  loginGroup: FormGroup;
  constructor( private fb:FormBuilder, private  authenticate:AuthenticationService,private router:Router) {
    this.loginGroup = fb.group({
      'username': [''],
      'password': [''],
    });
  }

  ngOnInit() {
  }


  login(value){
    this.authenticate.PostLogin(value.username,value.password).subscribe(
      (response)=> {
        var date = new Date();
        this.setCookie('loginToken',response,0.04);
        this.router.navigateByUrl('/AdminPanel');

      },
      (error)=> {
        console.log('Cannot login', error);
      }
    );

  }


  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminService} from './admin.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 loginGroup: FormGroup;
  constructor( private fb:FormBuilder, private  adminsevice:AdminService,private router:Router) {
    this.loginGroup = fb.group({
      'username': [''],
      'password': [''],
    });
  }

  ngOnInit() {
  }


  login(value){
    this.adminsevice.PostLogin(value.username,value.password).subscribe(
      (response)=> {
        console.log('login Post completed ', response);
        this.router.navigateByUrl('/HamoudaPanel');
      },
      (error)=> {
        console.log('Cannot login', error);
      }
    );


  }

}

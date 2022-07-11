import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router , RouterModule} from '@angular/router';
import * as PouchDB from 'pouchdb';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'aem-angular-electron';
  pouchdb: any;

  model = {
    username: 'user@aemenersol.com',
    password: 'Test@123'
  };

  constructor( private router: Router) {
    // this.pouchdb = new PouchDB('myDB');
  }

  ngOnInit(): void {
    // console.log(this.db.allDocs())
    // console.log('asdsa');
  }

  onSubmit(userLogin: NgForm) {
    console.log(userLogin.value);
    this.router.navigateByUrl('dashboard');
  }

}

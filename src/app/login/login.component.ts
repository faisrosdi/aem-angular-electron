import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router , RouterModule} from '@angular/router';
// import * as PouchDB from 'pouchdb';
import { UserService } from '../shared/user.service';
import * as PouchDB from 'pouchdb';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    username: 'user@aemenersol.com',
    password: 'Test@123'
  };

  constructor( private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onSubmit(userLogin: NgForm) {
    
    console.log(userLogin.value);
    this.userService.login(userLogin.value).subscribe(
      res => {
        // this.router.navigateByUrl('dashboard');
      },
      err => {
        if(err.status == '401'){
          console.log('dekat sini buat checking pouchdb')
        }
      }
    )

  }

}

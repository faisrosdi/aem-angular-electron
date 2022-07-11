import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , RouterModule} from '@angular/router';
// import * as PouchDb from 'pouchdb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aem-angular-electron';

  // db = new PouchDb('myDB');
  model = {
    username: 'user@aemenersol.com',
    password: 'Test@123'
  };

  constructor(
    private router: Router
  ) {}

  onSubmit(userLogin: NgForm) {
    
    console.log(userLogin.value);
    // this.router.navigateByUrl('dashboard');
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = ' ';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser()
  {
     this._service.registerUserFromRemote(this.user).subscribe(
       data => {
         console.log("Registration Success");
         localStorage.setItem("username",this.user.username);
         this._router.navigate(['/registrationsuccess']);
       },
       error => {
         console.log("Registration Failed");
         console.log(error.error);
         this.msg = "User with "+this.user.email+" already exists !!!";
       }
     )
  }

}

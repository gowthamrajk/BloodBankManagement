import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-requesthistoryfromuser',
  templateUrl: './requesthistoryfromuser.component.html',
  styleUrls: ['./requesthistoryfromuser.component.css']
})
export class RequesthistoryfromuserComponent implements OnInit {

  loggedUser = '';
  tempUser = '';
  msg = '';
  title = '';
  requests : Observable<any> | undefined;
  
  constructor(private _router : Router, private donorService: DonorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.tempUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    if (this.tempUser.charAt(0) === '"' && this.tempUser.charAt(this.tempUser.length -1) === '"')
    {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length-2);
    }   
    this.loggedUser = this.tempUser;
    this.msg = '';
    if(this.loggedUser === "admin@gmail.com"){
      this.title = "Admin Dashboard";
    }
    else{
      this.title = "User Dashboard";
    }
    this.reloadData();
  }

  navigateHome()
  {
    if(this.loggedUser === "admin@gmail.com"){
      this.title = "Admin Dashboard";
      this._router.navigate(['/loginsuccess']);
    }
    else{
      this.title = "User Dashboard";
      this._router.navigate(['/userdashboard']);
    }
  }

  reloadData() 
  {
      this.requests = this.donorService.getRequestHistoryByEmail(this.loggedUser);
      console.log(this.requests);
  }

  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}

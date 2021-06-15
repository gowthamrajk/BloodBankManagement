import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  loggedUser = '';
  tempUser = '';
  bloodDetails : Observable<any[]> | undefined;

  constructor(private _router: Router, private donorService: DonorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit()
  {
    this.tempUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    if (this.tempUser.charAt(0) === '"' && this.tempUser.charAt(this.tempUser.length -1) === '"')
    {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length-2);
    }   
    this.loggedUser = this.tempUser;

    this.getBloodDetails();
  }

  getBloodDetails()
  {
    this.bloodDetails = this.donorService.getBloodDetails();
  }

  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})
export class DonorlistComponent implements OnInit {

  loggedUser = '';
  tempUser = '';
  title = '';
  donors : Observable<Donor[]> | undefined;
  
  constructor(private donorService: DonorService, private activatedRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void 
  {
    this.tempUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    if (this.tempUser.charAt(0) === '"' && this.tempUser.charAt(this.tempUser.length -1) === '"')
    {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length-2);
    }   
    this.loggedUser = this.tempUser;

    this.reloadData();

    if(this.loggedUser === "admin@gmail.com"){
      this.title = "Admin Dashboard";
    }
    else{
      this.title = "User Dashboard";
    }
  }

  reloadData() {
    this.donors = this.donorService.getDonorList();
    console.log(this.donors);
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

  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}

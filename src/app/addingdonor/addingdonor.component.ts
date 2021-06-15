import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-addingdonor',
  templateUrl: './addingdonor.component.html',
  styleUrls: ['./addingdonor.component.css']
})
export class AddingdonorComponent implements OnInit {

  loggedUser = '';
  tempUser = '';
  donor = new Donor();
  
  constructor(private _service : DonorService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(document).ready( function()
    {
    	  var now = new Date();
    	  var day = ("0" + now.getDate()).slice(-2);
    	  var month = ("0" + (now.getMonth() + 1)).slice(-2);
    	  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    	  $('#date').val(today);
    });
    this.tempUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    if (this.tempUser.charAt(0) === '"' && this.tempUser.charAt(this.tempUser.length -1) === '"')
    {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length-2);
    }   
    this.loggedUser = this.tempUser;
  }

  navigateHome()
  {
    if(this.loggedUser === 'admin@gmail.com')
    {
      this._router.navigate(['/loginsuccess']);
    }
    else
    this._router.navigate(['/userdashboard']);
  }

  addDonor()
  {
    this._service.addDonorFromRemote(this.donor).subscribe(
      data => {
        console.log("Donor added Successfully");
        this._router.navigate(['/loginsuccess']);
      },
      error => {
        console.log("process Failed");
        console.log(error.error);
      }
    )
  }
}

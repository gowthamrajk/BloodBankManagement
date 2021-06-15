import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  loggedUser = '';
  tempUser = '';
  users : Observable<any[]> | undefined;

  constructor(private _router:Router, private donorService: DonorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.tempUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    if (this.tempUser.charAt(0) === '"' && this.tempUser.charAt(this.tempUser.length -1) === '"')
    {
      this.tempUser = this.tempUser.substr(1, this.tempUser.length-2);
    }   
    this.loggedUser = this.tempUser;

    this.reloadData();
  }

  reloadData() {
    this.users = this.donorService.getUserList();
  }

  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/login']);
  }

}

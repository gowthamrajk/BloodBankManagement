import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from './donor';
import { Requesting } from './requesting';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  
  user = new User();
  
  public getDonorList(): Observable<any>
  {
    return this._http.get<any>("http://localhost:8080/donorlist");
  }

  public getRequestHistory(): Observable<any>
  {
    return this._http.get<any>("http://localhost:8080/requestHistory");
  }

  public getRequestHistoryByEmail(loggedUser:string): Observable<any>
  {
    return this._http.get<any>("http://localhost:8080/requestHistory/"+loggedUser);
  }

  public getUserList(): Observable<any>
  {
    return this._http.get<any>("http://localhost:8080/userlist");
  }

  constructor(private _http : HttpClient) { }

  public addDonorFromRemote(donor:Donor):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/addDonor",donor);
  }

  public requestForBlood(request:Requesting):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/requestblood",request);
  }

  public requestForAddingDonor(donor:Donor):Observable<any>
  {
    return this._http.post<any>("http://localhost:8080/addAsDonor",donor);
  }

  public getBloodDetails() : Observable<any>
  {
    return this._http.get<any>("http://localhost:8080/bloodDetails");
  }

  public getProfileDetails(loggedUser : string) : Observable<any>
  {
    return this._http.get("http://localhost:8080/profileDetails/"+loggedUser);
  }
  
  public UpdateUserProfile(user:any):Observable<any>
  {
    return this._http.put<any>("http://localhost:8080/updateuser",user)
  }
  
  public acceptRequestForBlood(loggedUser : string) : Observable<any>
  {
    return this._http.get("http://localhost:8080/acceptstatus/"+loggedUser);
  }

  public rejectRequestForBlood(loggedUser : string) : Observable<any>
  {
    return this._http.get("http://localhost:8080/rejectstatus/"+loggedUser)
  }

  public getTotalDonors() : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalDonors");
  }

  public getTotalUsers() : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalUsers");
  }

  public getTotalBloodGroups() : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalBloodGroups");
  }

  public getTotalUnits() : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalUnits");
  }

  public getTotalRequests(loggedUser : string) : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalRequests/"+loggedUser);
  }

  public getTotalDonationCount(loggedUser : string) : Observable<any>
  {
    return this._http.get("http://localhost:8080/getTotalDonationCount/"+loggedUser);
  }

}

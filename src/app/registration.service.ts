import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from "rxjs/operators";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user = new User();

  constructor(private _http : HttpClient) { }

  // public loginUserFromRemote(email:string,password:string)
  // {
  //     sessionStorage.setItem('user', this.user.username);
  //     return JSON.stringify(this._http.post<any>(`${NAV_URL}/authenticate`,{email,password}));
  // }

public loginUserFromRemote(email:string, password:string)
{
  return this._http.post<any>(`${NAV_URL}/login`,{email,password}).pipe(
    map(
      data => {
        localStorage.setItem('USER', email);
        localStorage.setItem('ROLE', 'ADMIN');
        localStorage.setItem('TOKEN', `Bearer ${data.token}`);
        console.log(data);
        return data;
      }
    )
  );        
}

isUserLoggedIn()
{
  let user = sessionStorage.getItem('USER');
  if(user === null || user.length === 0) 
  {
      return false;
  }
  return true;
}

getAuthenticatedToken() {
  return sessionStorage.getItem('TOKEN');
}

getAuthenticatedUser() {
  return sessionStorage.getItem('USER');
}

userType() 
{
    return sessionStorage.getItem('ROLE');
  }

public adminLoginFromRemote(email: string, password: string)
{
  if(email === 'admin@gmail.com' && password === 'admin123') 
  {
    sessionStorage.setItem('user', email);
    sessionStorage.setItem('role', "admin");
    return true;
  }
  return false;
}

public registerUserFromRemote(user:User):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/register`,user)
}

}

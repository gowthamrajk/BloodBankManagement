import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate 
{
  constructor(private router: Router, private _service:RegistrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this._service.isUserLoggedIn() && this._service.userType() === 'user') 
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}

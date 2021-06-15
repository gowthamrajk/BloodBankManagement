import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate 
{
  
  constructor(private router: Router, private _service:RegistrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  {
    if (this._service.isUserLoggedIn() && this._service.userType() === 'admin') 
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}

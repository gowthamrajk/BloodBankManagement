import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _service: RegistrationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    let basicAuthHeaderString = this._service.getAuthenticatedToken();
    let username = this._service.getAuthenticatedUser()

    if(basicAuthHeaderString && username) 
    {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        })
    }
    return next.handle(request);
  }
}
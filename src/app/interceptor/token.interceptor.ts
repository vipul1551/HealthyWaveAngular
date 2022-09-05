import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../service/auth-token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authTokenService:AuthTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let authToken = localStorage.getItem("authToken") as string
    console.log("HTTP METHOD : => ");
    console.log(request.method)
    let authToken = this.authTokenService.authToken as string
    console.log("auth Token interceptor....."+authToken)
    return next.handle(request.clone({ setHeaders: { authToken } }));
  }
}

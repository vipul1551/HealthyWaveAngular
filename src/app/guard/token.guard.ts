import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../service/auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private authTokenService :AuthTokenService,private router:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("authTokenGuard call...");
    if(this.authTokenService.authToken == undefined || this.authTokenService.authToken == ""){
      this.router.navigateByUrl("/login")
      this.toastr.success("Please Login Again")
    }
    
      return true;
  }
  
}

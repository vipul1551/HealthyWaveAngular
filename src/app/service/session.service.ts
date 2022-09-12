import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http :HttpClient) { }

  loginApi(user: any): Observable<any> {
    return this.http.post(environment.url + "public/login", user)
  }

  signupApi(user: any): Observable<any> {
    return this.http.post(environment.url + "public/signup", user)
  }

  // deleteAuthtokenApi(userId:any): Observable<any>{
  //   return this.http.post(environment.url + "public/logout/"+userId,userId)
  // }
  emailVeryfyApi(email:any):Observable<any>{
    return this.http.post(environment.url + "public/sendotp", email)
  }

  verifyOtp(otp:any):Observable<any>{
    return this.http.post(environment.url + "public/verifyotp",otp)
  }

  updatePassword(user:any):Observable<any>{
    return this.http.put(environment.url + "public/updatepassword",user)
  }
}

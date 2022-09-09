import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http :HttpClient) { }

  loginApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9996/public/login", user)
  }

  signupApi(user: any): Observable<any> {
    return this.http.post("http://localhost:9996/public/signup", user)
  }

  deleteAuthtokenApi(userId:any): Observable<any>{
    return this.http.post("http://localhost:9996/public/logout/"+userId,userId)
  }
  emailVeryfyApi(email:any):Observable<any>{
    return this.http.post("http://localhost:9996/public/sendotp", email)
  }

  verifyOtp(otp:any):Observable<any>{
    return this.http.post("http://localhost:9996/public/verifyotp",otp)
  }

  updatePassword(user:any):Observable<any>{
    return this.http.put("http://localhost:9996/public/updatepassword",user)
  }
}

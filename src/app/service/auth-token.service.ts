import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  authToken:String = ""
  userId: any ="" 
  constructor() { }
}

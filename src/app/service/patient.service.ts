import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  // stateList():Observable<any>{
  //   return this.http.get("http://localhost:9996/public/state")
  // }
}

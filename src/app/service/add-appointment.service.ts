import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentService {

  constructor(private http :HttpClient) { }

  addAppointment(patient:any):Observable<any>{
    return this.http.post("http://localhost:9996/public/appointment",patient)
  }

}

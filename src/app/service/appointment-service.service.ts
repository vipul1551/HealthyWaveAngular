import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http:HttpClient) { }

  appointmentById(Id:any):Observable<any>{
    return this.http.get(environment.url + "staff/appointment/"+Id)
  } 

  appointmentList():Observable<any>{
    return this.http.get(environment.url + "staff/appointment")
  }
  approveAppointment(appointment:any):Observable<any>{
    return this.http.put(environment.url + "staff/approveappointment",appointment)
  }
  declineAppointment(appointment:any):Observable<any>{
    return this.http.put(environment.url + "staff/declineappointment",appointment)
  }
}

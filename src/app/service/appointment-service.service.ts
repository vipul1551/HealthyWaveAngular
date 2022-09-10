import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http:HttpClient) { }

  appointmentById(Id:any):Observable<any>{
    return this.http.get("http://localhost:9996/staff/appointment/"+Id)
  } 

  appointmentList():Observable<any>{
    return this.http.get("http://localhost:9996/staff/appointment")
  }
  approveAppointment(appointment:any):Observable<any>{
    return this.http.put("http://localhost:9996/staff/approveappointment",appointment)
  }
  declineAppointment(id:any):Observable<any>{
    return this.http.get("http://localhost:9996/staff/declineappointment/"+id)
  }
}

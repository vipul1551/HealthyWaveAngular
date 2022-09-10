import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http:HttpClient) { }

  appointmentList():Observable<any>{
    return this.http.get("http://localhost:9996/staff/appointment")
  }
  approveAppointment(id:any):Observable<any>{
    return this.http.delete("http://localhost:9996/appointment/approve/"+id)
  }
  declineAppointment(id:any):Observable<any>{
    return this.http.delete("http://localhost:9996/appointment/decline/"+id)
  }
}

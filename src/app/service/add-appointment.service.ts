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
  getAllState():Observable<any>{
    return this.http.get("http://localhost:9996/public/state")  
  }
  getAllCityByState(id:any):Observable<any>{
    return this.http.get("http://localhost:9996/public/city/"+id)  
  }
  getSlotsByDateDoctor(map:any):Observable<any>{
    return this.http.post("http://localhost:9996/public/slots",map)
  }

}

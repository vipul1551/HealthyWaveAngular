import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAppointmentService {

  constructor(private http :HttpClient) { }

  addAppointment(patient:any):Observable<any>{
    return this.http.post(environment.url + "public/appointment",patient)
  }
  getAllState():Observable<any>{
    return this.http.get(environment.url + "public/state")  
  }
  getAllCityByState(id:any):Observable<any>{
    return this.http.get(environment.url + "public/city/"+id)  
  }
  getSlotsByDateDoctor(map:any):Observable<any>{
    return this.http.post(environment.url + "public/slots",map)
  }

}

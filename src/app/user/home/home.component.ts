import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctorsApi().subscribe(res=>{
      console.log(res.data);
      
    })
  }

}

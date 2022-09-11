import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddAppointmentService } from 'src/app/service/add-appointment.service';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  states:Array<any> = []
  cities:Array<any> = []
  doctorId : any = ''
  date : any = ''
  slots:Array<any> = []
  value : any = ''
  doctors:Array<any> = []
  appointmentForm: FormGroup
  constructor(private router: Router, private toastr: ToastrService, private appointmentService: AddAppointmentService,private doctorService:DoctorService) {
    this.appointmentForm = new FormGroup({
      patientName: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      doctor: new FormControl('', [Validators.required]),
      state: new FormControl(this.states, [Validators.required]),
      city: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.appointmentService.getAllState().subscribe(resp=>{
      this.states = resp.data
    },err=>{
      this.toastr.error(err.msg)
    })

    this.doctorService.getAllDoctorsApi().subscribe(resp=>{
      console.log(resp.data);
      this.doctors = resp.data
    })
  }

  

  getCityByState(event:any){
    this.value  = event.target.value
    console.log(this.value);
    // console.log(event);

    this.appointmentService.getAllCityByState(this.value).subscribe(resp=>{
      this.cities = resp.data
    },err=>{
      this.toastr.error(err.msg)
    })
  }

  getDoctorId(event:any){
    this.doctorId  = event.target.value
    console.log(this.doctorId);
  }

  getSlotByDateDoctor(event:any){
    this.date = event.target.value   
    console.log( this.date);
  let map = new Map([['doctorId',this.doctorId],['date',this.date]])
   console.log(map);
   
    this.appointmentService.getSlotsByDateDoctor(map).subscribe(resp=>{
      this.slots = resp.data
      console.log(resp);
      
    },err=>{
      this.toastr.error(err.msg)
    })
  }

  addAppointment() {
    console.log(this.appointmentForm.value);
    console.log(this.appointmentForm.valid);
    if (this.appointmentForm.valid == false) {
      this.toastr.error("Please Details Fill Properly")
    } else {
      this.appointmentService.addAppointment(this.appointmentForm.value).subscribe(res => {
        this.toastr.success("Your Appointment Submitted Successfuly...")
        this.router.navigateByUrl("")
      }, err => {
        this.toastr.error("SMW Please Contact Admin", "444")
      })
    }
  }

}

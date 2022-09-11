import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddAppointmentService } from 'src/app/service/add-appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointmentForm: FormGroup
  constructor(private router: Router, private toastr: ToastrService, private appointmentService: AddAppointmentService) {
    this.appointmentForm = new FormGroup({
      patientName: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      patientRelativeName: new FormControl('', [Validators.required]),
      patientRelativeContact: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      dateTime: new FormControl('', [Validators.required]),
      slot: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
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

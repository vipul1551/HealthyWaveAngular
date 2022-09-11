import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentServiceService } from 'src/app/service/appointment-service.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
})
export class AppointmentListComponent implements OnInit {
  appointments: Array<any> = []
  appointment: any = ""
  appointmentId: String = ""
  caseNumber: String = ""
  patientName: String = ""
  contact: String = ""
  email: String = ""
  patientRelativeName: String = ""
  patientRelativeContact: String = ""
  gender: String = ""
  dateTime: String = ""
  reason: String = ""
  isApproved: Boolean = false
  appointmentDate = ''
  currentDate = new Date();
  todayDate = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  constructor(private appointmentService: AppointmentServiceService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentService.appointmentList().subscribe(res => {
      for (let i = 0; i < res.data.length; i++) {
        this.dateTime = res.data[i].dateTime
        this.appointmentDate =this.dateTime.substring(0,10)
        console.log(this.appointmentDate);
        console.log(this.appointmentDate == this.todayDate);
        
        if(this.appointmentDate == this.todayDate){
          console.log("data match....");
          this.appointment = res.data[i]
          this.appointments.push(this.appointment)
        }
      }
      console.log(this.todayDate);
      console.log(res.data[0].dateTime);

    }, err => {

    })
  }

  getById(id: any) {
    this.appointmentService.appointmentById(id).subscribe(res => {
      console.log("res of get by appointment Id");
      this.appointment = res.data
      console.log(res.data.isApproved);

      console.log(this.appointment);
      if (res.data.isApproved == false) {
        this.approveAppointment(this.appointment)
        console.log("approved call...");

      } else {
        this.declineAppointment(this.appointment)
        console.log("decline call...");

      }

    }, err => {

    })
  }



  approveAppointment(appointment: any) {
    this.appointmentService.approveAppointment(appointment).subscribe(resp => {
      this.toastr.success(resp.msg)
      console.log(resp);
      this.appointmentService.appointmentList().subscribe(res => {
        this.appointments = []
        for (let i = 0; i < res.data.length; i++) {
          this.dateTime = res.data[i].dateTime
          this.appointmentDate =this.dateTime.substring(0,10)
          console.log(this.appointmentDate);
          console.log(this.appointmentDate == this.todayDate);
          
          if(this.appointmentDate == this.todayDate){
            console.log("data match....");
            this.appointment = res.data[i]
            this.appointments.push(this.appointment)
          }
        }
      })
    }, err => {
      console.log(err);
      this.toastr.error(err)
    })
  }


  declineAppointment(appointment: any) {

    this.appointmentService.declineAppointment(appointment).subscribe(resp => {
      this.toastr.error(resp.msg)
      console.log(resp);
      this.router.navigateByUrl("staff/appointmentlist")
      this.appointmentService.appointmentList().subscribe(res => {
        this.appointments = []
        for (let i = 0; i < res.data.length; i++) {
          this.dateTime = res.data[i].dateTime
          this.appointmentDate =this.dateTime.substring(0,10)
          console.log(this.appointmentDate);
          console.log(this.appointmentDate == this.todayDate);
          
          if(this.appointmentDate == this.todayDate){
            console.log("data match....");
            this.appointment = res.data[i]
            this.appointments.push(this.appointment)
          }
        }
      })
    }, err => {
      this.toastr.error(err.msg);

    })
  }

}

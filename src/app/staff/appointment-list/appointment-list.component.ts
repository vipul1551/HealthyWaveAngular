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
  constructor(private appointmentService: AppointmentServiceService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.appointmentService.appointmentList().subscribe(res => {
      this.appointments = res.data
      this.router.navigateByUrl("/staff/appointmentlist")
    },err =>{

    })
  }

  getById(id:any){
    this.appointmentService.appointmentById(id).subscribe(res => {
      console.log("res of get by appointment Id");
      console.log(res.data);
      this.appointment = res.data
      console.log(this.appointment);
      this.approveAppointment(this.appointment)
     
    },err =>{

    })
  }

 

  approveAppointment(appointment: any) {
    this.appointmentService.approveAppointment(appointment).subscribe(resp => {
      this.toastr.success(resp.msg)
      console.log(resp);
 this.appointmentService.appointmentList().subscribe(res => {
        this.appointments = res.data
      })
      // this.appointments = this.appointments.filter(a => a.appointmentId != id)
    }, err => {
      console.log(err);
      this.toastr.error(err)
    })
 }
 

  // declineAppointment(id:any){
  
  //   this.appointmentService.declineAppointment(id).subscribe(resp=>{
  //     this.toastr.success(resp.msg)
  //     console.log(resp);console.log("ID is :"+id);
  //     this.router.navigateByUrl("staff/appointmentlist")
  //   },err=>{
  //     this.toastr.error(err.msg);
      
  //   })
  //   }

}

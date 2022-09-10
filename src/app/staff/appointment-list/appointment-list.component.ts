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

  approveAppointment(id:any){
  
    this.appointmentService.approveAppointment(id).subscribe(resp=>{
      this.toastr.success(resp.msg)
      
      this.router.navigateByUrl("/staff/appointmentlist")
    },err=>{
      this.toastr.error(err.msg)
    })

  }

  declineAppointment(id:any){
  
    this.appointmentService.declineAppointment(id).subscribe(resp=>{
      this.toastr.success(resp.msg)
      console.log(resp);console.log("ID is :"+id);
      this.router.navigateByUrl("staff/appointmentlist")
    },err=>{
      this.toastr.error(err.msg);
      
    })

  }

}

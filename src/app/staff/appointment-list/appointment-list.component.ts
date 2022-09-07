import { Component, OnInit } from '@angular/core';
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
  appointments:Array<any> = []
  appointmentId :String=""
  caseNumber:String=""
  patientName:String=""
  contact:String=""
  email:String=""
  patientRelativeName:String=""
  patientRelativeContact:String=""
  gender:String=""
  dateTime:String=""
  reason:String=""
  submitted: boolean=false;
  productDialog: boolean =false;
  constructor(private appointmentService:AppointmentServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.appointmentService.appointmentList().subscribe(res=>{
      this.appointments = res.data
      console.log(this.appointments);
      
      console.log(res ,"appointmentList...");
      
    },err =>{

    })
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
}

}

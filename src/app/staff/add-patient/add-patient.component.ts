import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  // appointments: Array<any> = []
  // appointment: any = ""
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
  constructor() { }

  ngOnInit(): void {
    
  }

}

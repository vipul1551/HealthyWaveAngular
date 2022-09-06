import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup
  constructor(private router:Router,private toastr:ToastrService,private sessionService:SessionService) {
    this.signupForm = new FormGroup({
      firstName : new FormControl('',[Validators.required]),
      middleName : new FormControl('',[Validators.required]),
      lastName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      gender : new FormControl('',[Validators.required]),
      contactNum : new FormControl('',[Validators.required]),
      role : new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  addUser(){console.log(this.signupForm.value);
  
    this.sessionService.signupApi(this.signupForm.value).subscribe(resp =>{
    
      this.toastr.success("Sign Up Done...")
      this.toastr.success("Please Wait For Some Time ")
      this.router.navigateByUrl("/login")
 

  }, err => {
    this.toastr.error(err)
  })
  }

}

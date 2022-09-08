import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css']
})
export class ForgotEmailComponent implements OnInit {

  email:String = ""
  firstName:String =""
  display = false;
  forgotForm:FormGroup
  updatePassForm :FormGroup
  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) {
    this.forgotForm = new FormGroup({
      otp:new FormControl('',[Validators.required]),
      email:new FormControl()
    })
    this.updatePassForm = new FormGroup({
      Password:new FormControl('',[Validators.required]),
      email:new FormControl()
    })
    this.updatePassForm.controls['email'].setValue(localStorage.getItem("email"))
   }
   
   ngOnInit(): void {
     
  }


  verifyOTP(){
    if(this.forgotForm.valid == false){
      this.toastr.error("Please Enter OTP")
    }else{
      this.sessionService.verifyOtp(this.forgotForm.value).subscribe(res =>{
        this.toastr.success("otp match successfully...")
    }
   ,err =>{

    })
  }
}
  updatePassword(){
    console.log("updateForm...");
    console.log("email"+this.email);
    console.log(this.updatePassForm.value);
    
     if(this.updatePassForm.valid == false){
      this.toastr.error("Please Enter Password")
    }else{
  //     this.sessionService.verifyOtp(this.updatePassForm.value).subscribe(res =>{
       
  //       this.toastr.success("password update successfully...")
  //       this.router.navigateByUrl("login")
  //   }
  //  ,err =>{

  //   })
  }
    
  }

  updatePasswordForm(){
    this.display = true
  }
}

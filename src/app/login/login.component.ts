import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../service/auth-token.service';
import { SessionService } from '../service/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup
  constructor( private router:Router,private toastr:ToastrService,private sessionService:SessionService,private authTokenService:AuthTokenService) {
    this.loginForm = new FormGroup({
      email : new  FormControl('',[Validators.required]),
      password :new FormControl('',[Validators.required,Validators.minLength(6)])
    })
   }

  ngOnInit(): void {
  }


  authenticate(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    this.sessionService.loginApi(this.loginForm.value).subscribe(resp => {

      //json 
      console.log(resp.data);
      let authToken = resp.data.authToken

      localStorage.setItem("authToken", authToken)
      localStorage.setItem("userId",resp.data.userId)
      localStorage.setItem("email",resp.data.email)
      localStorage.setItem("firstName",resp.data.firstName)
      // this.toastr.success("Login done"+resp.data.authToken)

      this.authTokenService.authToken = resp.data.authToken
      this.authTokenService.userId = resp.data.userId 
      
      if (resp.data.role.roleName == "staff") {

        this.toastr.error(resp.data.msg, "200")
        this.router.navigateByUrl("")
      } else if (resp.data.role.roleName == "admin") {

        this.router.navigateByUrl("/dashboard")
      }
// hii bro

    }, err => {
      this.toastr.error("Invalid Credentials....", "401")
    })
     
  }
}

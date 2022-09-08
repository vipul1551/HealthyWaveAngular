import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-veryfy-email',
  templateUrl: './veryfy-email.component.html',
  styleUrls: ['./veryfy-email.component.css']
})
export class VeryfyEmailComponent implements OnInit {

  emailForm:FormGroup

  constructor(private route : Router,private toastr:ToastrService,private sessionService:SessionService) { 
    this.emailForm = new FormGroup({
      email : new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  veryfyEmail(){
    console.log(this.emailForm.value);
    console.log(this.emailForm.valid);
    this.sessionService.emailVeryfyApi(this.emailForm.value).subscribe(res =>{
      console.log("res");
      console.log(res);
      localStorage.setItem("email",res.email)
      
      this.route.navigateByUrl("/forgotemail")
      this.toastr.success("Please check your mail... ")
    },err =>{
      console.log(err);
    })
    
    
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from '../service/auth-token.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private router:Router,private toastr:ToastrService,private sessionService:SessionService,private authtokenService:AuthTokenService) { }

  ngOnInit(): void {
    this.authtokenService.authToken = ""
   
      this.router.navigateByUrl("/login")
      this.toastr.success("Logout Successfully")
  }

}

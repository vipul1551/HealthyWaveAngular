import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddAppointmentComponent } from './user/add-appointment/add-appointment.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { StaffLayoutComponent } from './staff/staff-layout/staff-layout.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorLayoutComponent } from './doctor/doctor-layout/doctor-layout.component';
import { AppointmentListComponent } from './staff/appointment-list/appointment-list.component';
import { VeryfyEmailComponent } from './user/veryfy-email/veryfy-email.component';
import { ForgotEmailComponent } from './user/forgot-email/forgot-email.component';
const routes: Routes = [
  {
    component: UserLayoutComponent, path: "", children: [
      { component: HomeComponent, path: "" },
      { component: LoginComponent, path: "login" },
      { component: SignupComponent, path: "signup"},
    {component:AddAppointmentComponent,path:"addappointment"},
  {component:VeryfyEmailComponent,path:"emailveryfy"},
{component:ForgotEmailComponent,path:"forgotemail"}]
      
    
  },
  {
    component:DoctorLayoutComponent,path:"doctor",children:[
      { component: DoctorDashboardComponent, path: "dashboard" }]
    
  },
  {
    component:StaffLayoutComponent,path:"staff",children:[
      { component: StaffDashboardComponent, path: "dashboard" },
      {component:AppointmentListComponent,path:"appointmentlist"}
    ]
    
  },
  {
    component: AdminLayoutComponent, path: "admin", children: [
      { component: HomeComponent, path: "" },
     ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

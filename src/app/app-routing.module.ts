import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddAppointmentComponent } from './user/add-appointment/add-appointment.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
const routes: Routes = [
  {
    component: UserLayoutComponent, path: "", children: [
      { component: HomeComponent, path: "" },
      { component: LoginComponent, path: "login" },
      { component: SignupComponent, path: "signup"},
    {component:AddAppointmentComponent,path:"addappointment"}]
      
  },
  {
    component: AdminLayoutComponent, path: "admin", children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

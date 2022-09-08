import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { HomeComponent } from './user/home/home.component';
import { TopBarComponent } from './user/top-bar/top-bar.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { StaffLayoutComponent } from './staff/staff-layout/staff-layout.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { DoctorLayoutComponent } from './doctor/doctor-layout/doctor-layout.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { AddAppointmentComponent } from './user/add-appointment/add-appointment.component';
import { SignupComponent } from './signup/signup.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { StaffFooterComponent } from './staff/staff-footer/staff-footer.component';
import { StaffHeaderComponent } from './staff/staff-header/staff-header.component';
import { AppointmentListComponent } from './staff/appointment-list/appointment-list.component';
import { VeryfyEmailComponent } from './user/veryfy-email/veryfy-email.component';
import { ForgotEmailComponent } from './user/forgot-email/forgot-email.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminDashboardComponent,
    StaffLayoutComponent,
    StaffDashboardComponent,
    DoctorLayoutComponent,
    DoctorDashboardComponent,
    AddAppointmentComponent,
    SignupComponent,
    StaffFooterComponent,
    StaffHeaderComponent,
    AppointmentListComponent,
    VeryfyEmailComponent,
    ForgotEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

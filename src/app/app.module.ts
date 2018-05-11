import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialFlexModule } from './module/material-flex.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { DayPilotModule } from "daypilot-pro-angular";
import {NgxMaskModule} from 'ngx-mask';

import { PhoneFormat } from "./shared/phone-format.pipe"
import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EditProfileComponent } from './dashboard/patient-dashboard/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FindDoctorComponent,
    DoctorDetailComponent,
    MakeAppointmentComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    EditProfileComponent,
    PhoneFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialFlexModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    DayPilotModule,
    NgxMaskModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

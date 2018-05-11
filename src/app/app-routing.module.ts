import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { EditProfileComponent } from './dashboard/patient-dashboard/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'find-doctor',
    component: FindDoctorComponent
  },
  {
    path: 'doctor-detail',
    component: DoctorDetailComponent
  },
  {
    path: 'make-appointment',
    component: MakeAppointmentComponent
  },
  {
    path: 'patient-dashboard',
    component: PatientDashboardComponent
  },
  {
    path: 'patient-dashboard-edit',
    component: EditProfileComponent
  },
  {
    path: 'doctor-dashboard',
    component: DoctorDashboardComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

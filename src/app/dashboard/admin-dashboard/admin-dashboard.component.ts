import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    public as: AuthService
  ) { }

  ngOnInit() {
  }

  displayedColumns1 = ['id', 'name', 'gender', 'specialties','location','appointments','actions'];
  displayedColumns2 = ['id', 'name', 'gender', 'age','appointments', 'actions'];
  dataSource1 = DOCTOR_DATA;
  dataSource2 = PATIENT_DATA;
}

const DOCTOR_DATA: Doctor[] = [
  {id: 1, name: 'Gary A. Aaronson, D.O.', gender: 'male', specialties: 'Family Medicine', location: 'Philadelphia, PA', appointments: 20},
  {id: 2, name: 'Anthony J. Abbruzzi, D.O.', gender: 'male', specialties: 'Family Medicine', location: 'Philadelphia, PA', appointments: 18},
  {id: 3, name: 'Amy Abouzied, M.D., F.A.C.O.G.', gender: 'female', specialties: 'Gynecology', location: 'Langhorne, PA', appointments: 12},
  {id: 4, name: 'Jamie Adamski, D.O.', gender: 'male', specialties: 'Emergency Medicine', location: 'Philadelphia, PA', appointments: 10},
  {id: 5, name: 'Ronald W. Adelman, M.D.', gender: 'male', specialties: 'Radiology', location: 'Philadelphia, PA', appointments: 15},
  {id: 6, name: 'Patrick M. Adler, D.O.', gender: 'male', specialties: 'Family Medicine', location: 'Yardley, PA', appointments: 15},
  {id: 7, name: 'Mitul Afiniwala, M.D.', gender: 'male', specialties: 'Cardiology', location: 'Philadelphia, PA', appointments: 13},
  {id: 8, name: 'Masood Ahmed, M.D.', gender: 'male', specialties: 'Hospital Medicine', location: 'Philadelphia, PA', appointments: 8},
];

const PATIENT_DATA: Patient[] = [
  {id: 1, name: 'Frederick A.', gender: 'male', age:35, appointments: 10},
  {id: 2, name: 'Howard G.', gender: 'male', age:41, appointments: 3},
  {id: 3, name: 'Elizabeth K.', gender: 'female', age:27, appointments: 4},
  {id: 4, name: 'Andrew B.', gender: 'male', age:29, appointments: 7},
  {id: 5, name: 'Steven P.', gender: 'male', age:34, appointments: 1},
  {id: 6, name: 'Christopher M.', gender: 'male', age:36, appointments: 2},
  {id: 7, name: 'Arthur R.', gender: 'male', age:56, appointments: 5},
  {id: 8, name: 'Mandy B.', gender: 'female', age:67, appointments: 6},
  {id: 9, name: 'Geoffrey L.', gender: 'male', age:62, appointments: 14},
  {id: 10, name: 'Katherine Li', gender: 'female', age:25, appointments: 1},
];

export interface Doctor {
  id: number;
  name: string;
  gender: string;
  specialties: string;
  location: string;
  appointments: number;
}

export interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  appointments: number;
}


 
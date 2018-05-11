import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent implements OnInit {

  constructor(
    public as: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  onMakeAppointment() {
    this.router.navigate(['/make-appointment']);
  }

}

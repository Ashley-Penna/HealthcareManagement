import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public as: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  onRegister() {
    this.router.navigate(['/register']);
  }
  onHome() {
    this.router.navigate(['/home']);
  }
  onPatientDashboard() {
    this.router.navigate(['/patient-dashboard']);
  }
  onDoctorDashboard() {
    this.router.navigate(['/doctor-dashboard']);
  }
  onAdminDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }


  logout() {
    this.as.userSubject.next(null);
    this.router.navigate(['/home']);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
//import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {

  // currentUser: Subject<any> = new BehaviorSubject<any>(null);
  err: boolean = false;

  constructor(
    public as: AuthService,
    private router: Router
  ) { }

  onEditProfile(){
    this.router.navigate(['/patient-dashboard-edit']);
  }

  ngOnInit() {
    this.as.getCurrentUser()
    .subscribe(res => { 
      //console.log(res);
      //console.log(this.as.userSubject.getValue());
      if (res&&res.success) {
        this.router.navigate(['/patient-dashboard']);
      } else {
        this.err = true;
      }
    });
   // console.log((this.as.userSubject.appointments[0]);

  }
}

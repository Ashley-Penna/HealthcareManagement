import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss']
})
export class MakeAppointmentComponent implements OnInit {

  appointmentFormGroup: FormGroup;

  appdate = new FormControl(new Date());
  myControl: FormControl = new FormControl();

  options = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
   ];

  constructor(
    private as: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.appointmentFormGroup = this.fb.group({
      appdate: '',
      apptime: '',
      reason: ''
    });
  }

  onSubmit() {
    if (this.appointmentFormGroup.valid){
      this.as.addAppointment(this.appointmentFormGroup.value)
        .subscribe(res => {
          if(res.success) {
            this.router.navigate(['/patient-dashboard']);
          } else {
            // show error text.
          }
        });
    } else {
      return false;
    }
  }

}

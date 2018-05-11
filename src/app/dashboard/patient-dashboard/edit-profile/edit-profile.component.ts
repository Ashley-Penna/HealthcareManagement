import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editProfileFormGroup: FormGroup;
  isDisabled: boolean;
  // currentUsername: Subject<any> = new BehaviorSubject<any>(null);;
  //user: User;

  constructor(
    public as: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {  }

  ngOnInit() {
    // need to be changed later for default values
    this.editProfileFormGroup = this.fb.group({
      phone: '',
      addr1: '',
      addr2:'',
      city:'',
      state:'',
      zip:'',
      insurance:''
    });

    // this.as.getCurrentUser().subscribe(data => {
    //   //console.log(data);
    //   //console.log(data.user);
    // });
    this.isDisabled = true;
  }

  onPatientDashboard(){
    this.router.navigate(['/patient-dashboard']);
  }

  onSubmit() {
    if (this.editProfileFormGroup.valid){
      this.as.updateUser(this.editProfileFormGroup.value)
        .subscribe(res => {
          if(res.success) {
            this.as.userSubject.next(res.user);
            this.router.navigate(['/patient-dashboard']);
          } else {
            // show error text.
          }
        });
    } else {
      return false;
    }
  }

  states = [
    {value: 'AL', viewValue: 'Alabama'},
    {value: 'AK', viewValue: 'Alaska'},
    {value: 'AZ', viewValue: 'Arizona'},
    {value: 'AR', viewValue: 'Arkansas'},
    {value: 'CA', viewValue: 'California'},
    {value: 'CO', viewValue: 'Colorado'},
    {value: 'CT', viewValue: 'Connecticut'},
    {value: 'DE', viewValue: 'Delaware'},
    {value: 'FL', viewValue: 'Florida'},
    {value: 'GA', viewValue: 'Georgia'},
    {value: 'HI', viewValue: 'Hawaii'},
    {value: 'ID', viewValue: 'Idaho'},
    {value: 'IL', viewValue: 'Illinois'},
    {value: 'IN', viewValue: 'Indiana'},
    {value: 'IA', viewValue: 'Iowa'},
    {value: 'KS', viewValue: 'Kansas'},
    {value: 'KY', viewValue: 'Kentucky'},
    {value: 'LA', viewValue: 'Louisiana'},
    {value: 'ME', viewValue: 'Maine'},
    {value: 'MD', viewValue: 'Maryland'},
    {value: 'MA', viewValue: 'Massachusetts'},
    {value: 'MI', viewValue: 'Michigan'},
    {value: 'MN', viewValue: 'Minnesota'},
    {value: 'MS', viewValue: 'Mississippi'},
    {value: 'MO', viewValue: 'Missouri'},
    {value: 'MT', viewValue: 'Montana'},
    {value: 'NE', viewValue: 'Nebraska'},
    {value: 'NV', viewValue: 'Nevada'},
    {value: 'NH', viewValue: 'New Hampshire'},
    {value: 'NJ', viewValue: 'New Jersey'},
    {value: 'NM', viewValue: 'New Mexico'},
    {value: 'NY', viewValue: 'New York'},
    {value: 'NC', viewValue: 'North Carolina'},
    {value: 'ND', viewValue: 'North Dakota'},
    {value: 'OH', viewValue: 'Ohio'},
    {value: 'OK', viewValue: 'Oklahoma'},
    {value: 'OR', viewValue: 'Oregon'},
    {value: 'PA', viewValue: 'Pennsylvania'},
    {value: 'RI', viewValue: 'Rhode Island'},
    {value: 'SC', viewValue: 'South Carolina'},
    {value: 'SD', viewValue: 'South Dakota'},
    {value: 'TN', viewValue: 'Tennessee'},
    {value: 'TX', viewValue: 'Texas'},
    {value: 'UT', viewValue: 'Utah'},
    {value: 'VT', viewValue: 'Vermont'},
    {value: 'VA', viewValue: 'Virginia'},
    {value: 'WA', viewValue: 'Washington'},
    {value: 'WV', viewValue: 'West Virginia'},
    {value: 'WI', viewValue: 'Wisconsin'},
    {value: 'WY', viewValue: 'Wyoming'}
  ];
}



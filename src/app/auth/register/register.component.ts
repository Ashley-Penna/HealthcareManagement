import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerFormGroup: FormGroup;
  err: boolean = false;
  startDate = new Date(1990, 0, 1);

  constructor(
    public as: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      username: ["", [Validators.email]], 
      password: '',
      firstname: '',
      lastname: '',
      gender: '',
      birthday: '',
      phone: ''
    });
  }
  
  onLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.registerFormGroup.valid){
      this.as.register(this.registerFormGroup.value)
        .subscribe(res => {
          if(res.success) {
            this.router.navigate(['/login']);
          } else {
            this.err = true;
          }
        });
    } else {
      return false;
    }
  }

}

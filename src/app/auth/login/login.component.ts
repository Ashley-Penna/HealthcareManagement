import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  err: boolean = false;

  constructor(
    public as: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit() {
     if (this.loginFormGroup.valid){
       this.as.login(this.loginFormGroup.value)
         .subscribe(res => {
           //console.log(res);
           if(res.success) {
             this.router.navigate(['/home']);
           } else {
             this.err = true;
           }
         });
     } else {
       return false;
     }
   }

  onRegister() {
    this.router.navigate(['/register']);
  }

  updateErr(){
    if (this.err){
      this.err = true;
    }
  }

}

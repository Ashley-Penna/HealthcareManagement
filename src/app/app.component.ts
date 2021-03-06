import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public as: AuthService,
    private router: Router
  ) {}

  logout() {
    this.as.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}

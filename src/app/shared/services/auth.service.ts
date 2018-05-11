import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
// import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

@Injectable()
export class AuthService {

  private AUTH_API_URL = `${environment.API_URL}`;
  userSubject: Subject<any> = new BehaviorSubject<any>(null);
  loginMessage: Subject<any> = new BehaviorSubject<any>(null);
  registerMessage: Subject<any> = new BehaviorSubject<any>(null);

  // private currentUserSubject = new BehaviorSubject<User>({} as User);
  // public currentUser: Subject<any> = new BehaviorSubject<any>(null);
  // currentUsername: Subject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) { }

  login(user: any): Observable<{ success: boolean, user: any }> {
    // form url encoded data.
    let httpParams = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.http.post<{ success: boolean, user: any }>(`${this.AUTH_API_URL}/login`, httpParams, {withCredentials: true})
      .pipe(
        map((res: { success: boolean, user: any }) => {
          if (res && res.success) {
            this.userSubject.next(user);
          }
          this.loginMessage.next(res);
          return res;
        })
      ).switchMap(() => {
        return this.http.get<{ success: boolean, user: any }>(`${this.AUTH_API_URL}/user`, {withCredentials: true})
        .pipe(
          map((res: { success: boolean, user: any }) => {
            //console.log(res);
            if (res && res.success) { 
              //console.log(res);
              this.userSubject.next(res.user);
              // this.currentUsername.next(res.user.username);
              // console.log(this.userProfileInfoSubject.getValue()); 
              // console.log(this.userSubject.getValue());
            }
            return res;
          })
        )
      }); //switchMap -> switch to another observable to get user 
  }

  register(user: User): Observable<{success: boolean}> {
    return this.http.post<{success: boolean}>(`${this.AUTH_API_URL}/users`, user)
    .pipe(
      map((res:any) => {
        console.log(res);
        this.registerMessage.next(res);
        // this.registerMessage.getValue();
        return res;
      })
    );
  }

  addAppointment(appointment: Appointment): Observable<{success: boolean}> {
    // let httpParams = new HttpParams()
    // .append('appdate', appointment.appdate.toString())
    // .append('apptime', appointment.apptime)
    // .append('reason', appointment.reason);
    // console.log(httpParams);
    return this.http.post<{success: boolean}>(`${this.AUTH_API_URL}/add-appointment`, appointment, {withCredentials: true});
  }


  // getUserInfo(): Observable<{ success: boolean, user: User }> {
  //   return this.http.get<{ success: boolean, user: User }>(`${this.AUTH_API_URL}/user-info/${this.userProfileName}`);
  // }

  updateUser(user: User): Observable<{success: boolean, user:any}> {
    return this.http.put<{ success: boolean, user: any }>(`${this.AUTH_API_URL}/users`, user, {withCredentials: true});
  }

  getCurrentUser(): Observable<{success: boolean, user: any}> {
    return this.http.get<{ success: boolean, user: any }>(`${this.AUTH_API_URL}/user`, {withCredentials: true})
    .pipe(
      map((res: { success: boolean, user: any }) => {
        console.log(res);
        if (res && res.success) {   
          this.userSubject.next(res.user);
        }
        return res;
      })
    )
  }
}

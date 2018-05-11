import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {DayPilot} from 'daypilot-pro-angular';

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: "1",
      resource: "R1",
      start: "2018-04-21T09:00:00",
      end: "2018-04-21T10:00:00",
      text: "Appointment with Katherine Li"
    }
  ];

  constructor(private http : Http){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 0);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString()).map((response:Response) => response.json());
  }

}
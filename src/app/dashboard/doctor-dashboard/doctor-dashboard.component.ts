import { Component, AfterViewInit, ViewChild} from '@angular/core';
import {DayPilot} from "daypilot-pro-angular";
import {DayPilotCalendarComponent} from "daypilot-pro-angular";
import {DataService} from "../../shared/services/data.service";

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements AfterViewInit {

  @ViewChild("calendar")
  calendar: DayPilotCalendarComponent;

  events: any[] = [];

  config: any = {
    viewType: "Week",
    startDate: "2018-04-15",
  };

  constructor(
    public ds: DataService
  ) {}

  ngAfterViewInit(): void {
    var from = this.calendar.control.visibleStart();
    var to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

}
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarDataService } from '../services/calendar-data.service.service';
import { DndDay } from '../models/dnd-day';

@Component({
  selector: 'app-dnd-calendar-week',
  templateUrl: './dnd-calendar-week.component.html',
  styleUrls: ['./dnd-calendar-week.component.css']
})
export class DndCalendarWeekComponent implements OnInit {
  days: DndDay[];
  navigateDays: number = 0;
  takeDays: number = 14;
  filterBy: string = 'PostCode';
  constructor(private calendarDataService: CalendarDataService) {

  }

  ngOnInit() {
    this.days = [];
    this.retrieveDays();
  }
  retrieveDays() {
    this.days = this.calendarDataService.getDays(this.navigateDays, this.takeDays);
    console.log('days', this.days);
  }

  navigateToDay(daysAdd: number) {
    console.log('daysAdd:', daysAdd);
    this.navigateDays = (daysAdd == 0) ? 0 : this.navigateDays + daysAdd;
    this.retrieveDays();
  }

  setTakeDays(takeDays: number) {
    console.log('takeDays:', takeDays);
    this.takeDays = takeDays;
    this.retrieveDays();
  }

  takeDaysClickedHandler(author) {
    console.log(author);
    this.setTakeDays(Number(author));
  }

  navigationDaysClickedHandler(author) {
    console.log(author);
    this.navigateToDay(Number(author));
  }

}

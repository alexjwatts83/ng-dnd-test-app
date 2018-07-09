import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { CalendarDataService } from '../services/calendar-data.service.service';
import { CalendarDataObservableService } from '../services/calendar-data-observable.service';
import { DndDay } from '../models/dnd-day';
import { Subscription,Observable } from 'rxjs';

@Component({
  selector: 'app-dnd-calendar-week',
  templateUrl: './dnd-calendar-week.component.html',
  styleUrls: ['./dnd-calendar-week.component.css']
})
export class DndCalendarWeekComponent implements OnInit, OnDestroy {
  days: DndDay[];
  responses: Observable<DndDay[]>;
  navigateDays: number = 0;
  takeDays: number = 14;
  filterBy: string = 'PostCode';
  subscription: Subscription;
  constructor(private calendarDataService: CalendarDataService,private calendarDataObservableService: CalendarDataObservableService) {

  }

  ngOnInit() {
    this.days = [];
    this.retrieveDays();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  retrieveDays() {
    // this.days = this.calendarDataService.getDays(this.navigateDays, this.takeDays);
    //console.log('days', this.days);
    this.calendarDataObservableService.loadAll(this.navigateDays, this.takeDays);
    this.responses = this.calendarDataObservableService.todos;
    
    //console.log('responses', this.responses);
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

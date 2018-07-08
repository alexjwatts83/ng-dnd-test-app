import { Component, OnInit } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';
import { CalendarDataService } from '../services/calendar-data.service.service';

@Component({
  selector: 'app-dnd-calendar',
  templateUrl: './dnd-calendar.component.html',
  styleUrls: ['./dnd-calendar.component.css']
})

export class DndCalendarComponent implements OnInit {
  private _selectCustomer: DndCustomer;
  private _selectedTimeSlot: DndTimeSlot;
  private _selectedDay: DndDay;

  days: DndDay[];
  filterBy: string = 'Suburb';

  navigateDays: number;
  takeDays: number;
  showConfirmationModal: boolean = false;
  showFilterPanel: boolean = true;

  get SelectedTimeSlot(): DndTimeSlot {
    if (this._selectedTimeSlot != null) {
      return this._selectedTimeSlot;
    }
    return null;
  }
  get SelectedCustomer(): DndCustomer {
    if (this._selectCustomer != null) {
      return this._selectCustomer;
    }
    return null;
  }
  get SelectedDay(): DndDay {
    if (this._selectedDay != null) {
      return this._selectedDay;
    }
    return null;
  }

  constructor(
    private calendarDataService: CalendarDataService) {

  }

  ngOnInit() {
    this.showFilterPanel = true;
    let index = this.calendarDataService.navigationDaysOptions.findIndex(x => x == 0);
    this.navigateDays = this.calendarDataService.navigationDaysOptions[index];
    this.takeDays = this.calendarDataService.takeDaysOptions[0];
    this.takeDays = this.calendarDataService.takeDaysOptions[1];
    this.getDays();
  }

  toggleCustomerClicked(event: any, customer: DndCustomer) {
    this._selectCustomer = customer;
  }

  closePoorMansModal() {
    this._selectCustomer = null;
  }

  navigateToDay(daysAdd: number) {
    console.log('daysAdd:', daysAdd);
    this.navigateDays = (daysAdd == 0) ? 0 : this.navigateDays + daysAdd;
    this.getDays();
  }

  setTakeDays(takeDays: number) {
    console.log('takeDays:', takeDays);
    this.takeDays = takeDays;
    this.getDays();
  }

  takeDaysClickedHandler(author) {
    console.log(author);
    this.setTakeDays(Number(author));
  }

  navigationDaysClickedHandler(author) {
    console.log(author);
    this.navigateToDay(Number(author));
  }

  dayClickedHandler(day: any) {
    console.log(day);
    this._selectedDay = day;
  }

  timeslotClickedHandler(timeslot: any) {
    console.log(timeslot);
    this._selectedTimeSlot = timeslot;
  }

  customerClickedHandler(customer: any) {
    console.log(customer);
    this._selectCustomer = customer;
  }

  getDays(): void {
    if (this._selectedTimeSlot != null) {
      this.SelectedTimeSlot.OpenCustomers = false;
    }

    this._selectedTimeSlot = null;
    this._selectedDay = null;

    if (this._selectCustomer != null) {
      this._selectCustomer = null;
    }

    this.days = this.calendarDataService.getDays(this.navigateDays, this.takeDays);
  }

  action: string;

  saveChanges() {
    this.action = 'Save';
    this.showConfirmationModal = true;
  }

  discardChanges() {
    this.action = 'Discard';
    this.showConfirmationModal = true;
  }

  closePoorMansModal2() {
    this.showConfirmationModal = false;
  }

  cancelClicked() {
    this.closePoorMansModal2();
  }

  okClicked() {
    this.closePoorMansModal2();
    this.getDays();
  }
}

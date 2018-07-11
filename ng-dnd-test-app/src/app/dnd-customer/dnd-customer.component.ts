import { Component, OnInit, Input } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndDay } from '../models/dnd-day';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { CalendarDataObservableService } from '../services/calendar-data-observable.service';

@Component({
  selector: 'app-dnd-customer',
  templateUrl: './dnd-customer.component.html',
  styleUrls: ['./dnd-customer.component.css']
})
export class DndCustomerComponent implements OnInit {
  @Input()
  customer: DndCustomer;

  @Input()
  day: DndDay;

  @Input()
  timeslot: DndTimeSlot;

  constructor(private calendarService: CalendarDataObservableService) { }

  ngOnInit() {
  }
  toggleCustomerClicked(event: any, customer: DndCustomer){
    this.calendarService.showModal =true;
    this.calendarService.selectedCustomer = customer;
  }
}

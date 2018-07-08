import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DndDay } from '../models/dnd-day';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndCustomer } from '../models/dnd-customer';
import { CalendarDataService, ITransferCustomerData } from '../services/calendar-data.service.service';

@Component({
  selector: 'app-dnd-day',
  templateUrl: './dnd-day.component.html',
  styleUrls: ['./dnd-day.component.css']
})
export class DndDayComponent implements OnInit {
  @Input()
  day: DndDay;

  @Input()
  filterBy: string;

  @Output()
  dayClick: EventEmitter<DndDay> = new EventEmitter<DndDay>();

  // @Output()
  // transferDataEvent: EventEmitter<ITransferCustomerData> = new EventEmitter<ITransferCustomerData>();

  //simpleDrop: any = null;

  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit() {
  }

  dayClicked(event: any, day: DndDay) {
    this.dayClick.emit(day); //emmiting the event.
  }
}

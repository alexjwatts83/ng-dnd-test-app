import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DndDay } from '../models/dnd-day';
import { CalendarDataService } from '../services/calendar-data.service.service';

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

  @Input()
  showDay: boolean;

  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit() {
  }

  dayClicked(event: any, day: DndDay) {
    this.dayClick.emit(day); //emmiting the event.
  }
}

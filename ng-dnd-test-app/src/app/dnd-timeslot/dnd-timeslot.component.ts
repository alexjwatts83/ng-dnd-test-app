import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDataService } from '../services/calendar-data.service.service';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';

@Component({
  selector: 'app-dnd-timeslot',
  templateUrl: './dnd-timeslot.component.html',
  styleUrls: ['./dnd-timeslot.component.css']
})
export class DndTimeslotComponent implements OnInit {
  @Input()
  timeslot: DndTimeSlot;

  @Input()
  filterBy: string;

  simpleDrop:any;
  
  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit() {
    this.simpleDrop = null;
  }

  timeslotClicked(timeslot: DndTimeSlot) {
    timeslot.OpenCustomers = true;
  }

  transferDataSuccess($event: any, day: DndDay, timeslot: DndTimeSlot) {
    console.log('called transferDataSuccess');
    this.simpleDrop = $event;
    // console.log(`simpleDrop:`, this.simpleDrop);
    // console.log(`day:`, day);
    // console.log(`timeslot:`, timeslot);

    // check if job is already in list
    let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
    let filterView = [];
    let selectedSlotIndex = -1;

    timeslot.Customers.forEach((element, index) => {
      if (element.JobNumber === droppedJobNumber) {
        selectedSlotIndex = index;
      } else {
        filterView.push(element);
      }
    });

    console.log(`selectedSlotIndex:`, selectedSlotIndex);
    if (selectedSlotIndex > -1) {
      console.log(`Job ${droppedJobNumber} already in list`);
      return;
    }

    let data = {
      customer: this.simpleDrop.dragData.customer,
      fromTimeSlot: this.simpleDrop.dragData.timeslot,
      fromDay: this.simpleDrop.dragData.day,
      toTimeSlot: timeslot,
      toDay: day
    }
    console.log('transferDataSuccess', data);
    this.calendarDataService.transferDataEventHandler(data);
  }
}

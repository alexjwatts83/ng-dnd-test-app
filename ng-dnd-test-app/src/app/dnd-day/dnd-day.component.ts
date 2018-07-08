import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DndDay } from '../models/dnd-day';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndCustomer } from '../models/dnd-customer';

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

  simpleDrop: any = null;

  constructor() { }

  ngOnInit() {
  }

  dayClicked(event: any, day: DndDay){
    this.dayClick.emit(day); //emmiting the event.
  }

  timeslotClicked(event: any, day: DndDay, timeslot: DndTimeSlot) {
    timeslot.OpenCustomers = true;
  }

  transferDataSuccess($event: any, droppedCustomerList: DndCustomer[]) {
    console.log('called transferDataSuccess');
    this.simpleDrop = $event;
    console.log(`simpleDrop:`,this.simpleDrop);
    console.log(`droppedCustomerList:`,droppedCustomerList);
    // console.log(`droppedDayIndex: ${droppedDayIndex}`);
    // console.log(`_selectedDayIndex: ${this._selectedDayIndex}`);
    // console.log(`droppedTimeslotIndex: ${droppedTimeslotIndex}`);
    // console.log(`_selectedTimeSlotIndex: ${this._selectedTimeSlotIndex}`);

    // let droppedOnSameDay = droppedDayIndex === this._selectedDayIndex;
    // let droppedOnSameTimeSlot = droppedTimeslotIndex === this._selectedTimeSlotIndex;

    // if (droppedOnSameDay && droppedOnSameTimeSlot) {
    //   console.log('Dropped on same day and time slot, do nothing');
    // }
    // else {
    //   let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
    //   let filterView = [];
    //   let selectedSlotIndex = -1;
    //   this.SelectedTimeSlot.Customers.forEach((element, index) => {
    //     if (element.JobNumber === droppedJobNumber) {
    //       selectedSlotIndex = index;
    //     } else {
    //       filterView.push(element);
    //     }
    //   });

    //   console.log("selectedSlotIndex:", selectedSlotIndex);
    //   let concat = this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
    //   console.log("concat:", concat);
    //   this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;
    //   console.log("dropped customer:", this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers[selectedSlotIndex]);
    //   console.log("filterView:", filterView);
    //   this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;
    // }
  }
}

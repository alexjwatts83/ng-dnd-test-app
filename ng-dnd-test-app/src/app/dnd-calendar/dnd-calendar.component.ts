import { Component, OnInit } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';

@Component({
  selector: 'app-dnd-calendar',
  templateUrl: './dnd-calendar.component.html',
  styleUrls: ['./dnd-calendar.component.css']
})

export class DndCalendarComponent implements OnInit {
  Days: DndDay[];
  UnschduledJobs: DndCustomer[] = [];

  _selectedTimeSlotIndex: number = -1;
  _selectedCustomerIndex: number = -1;
  _selectedDayIndex: number = -1;

  get SelectedTimeSlot(): DndTimeSlot {
    if (this._selectedTimeSlotIndex > -1) {
      return this.SelectedDay.TimeSlots[this._selectedTimeSlotIndex];
    }
    return null;
  }
  get SelectedCustomer(): DndCustomer {
    if (this._selectedCustomerIndex > -1) {
      return this.SelectedTimeSlot.Customers[this._selectedCustomerIndex];
    }
    return null;
  }
  get SelectedDay(): DndDay {
    if (this._selectedDayIndex > -1) {
      return this.Days[this._selectedDayIndex];
    }
    return null;
  }
  simpleDrop: any = null;
  constructor() { }

  createCustomer(startingPoint: number, postCode: string): DndCustomer {
    let cust = new DndCustomer('cust ' + (startingPoint + 1), 'job ' + (startingPoint + 1), 'comment ' + (startingPoint + 1), 'link' + (startingPoint + 1), postCode);

    return cust;
  }

  createDay(weekNumber: number, dayName: string, startingPoint: number): DndDay {
    let cust1 = this.createCustomer(startingPoint + 0, '1000');
    let cust2 = this.createCustomer(startingPoint + 1, '2000');
    let cust3 = this.createCustomer(startingPoint + 2, '2000');
    let cust4 = this.createCustomer(startingPoint + 3, '3000');
    let cust5 = this.createCustomer(startingPoint + 4, '3000');
    let cust6 = this.createCustomer(startingPoint + 5, '3000');
    let cust7 = this.createCustomer(startingPoint + 6, '2000');

    let timeslot1 = new DndTimeSlot('10am', 10, [cust1, cust2]);
    let timeslot2 = new DndTimeSlot('2pm', 5, [cust3, cust4, cust7]);
    let timeslot3 = new DndTimeSlot('7pm', 7, [cust5, cust6]);

    let day = new DndDay(weekNumber, dayName, [timeslot1, timeslot2, timeslot3]);

    return day;
  }

  ngOnInit() {
    let mockDays = [
      {
        name: 'MON',
        startingPoint: 0
      },
      {
        name: 'TUE',
        startingPoint: 7
      },
      {
        name: 'WED',
        startingPoint: 14
      },
      {
        name: 'THU',
        startingPoint: 21
      },
      {
        name: 'FRI',
        startingPoint: 28
      },
      {
        name: 'SAT',
        startingPoint: 35
      }
    ];

    this.Days = [];
    for (let i = 0; i < mockDays.length; i++) {
      let mockDay = mockDays[i];
      this.Days.push(this.createDay(1, mockDay.name, mockDay.startingPoint));
    }

    console.log(this.Days);
  }

  transferDataSuccess($event: any, droppedDayIndex: number, droppedTimeslotIndex: number) {
    console.log('called transferDataSuccess');
    this.simpleDrop = $event;
    console.log(`droppedDayIndex: ${droppedDayIndex}`);
    console.log(`_selectedDayIndex: ${this._selectedDayIndex}`);
    console.log(`droppedTimeslotIndex: ${droppedTimeslotIndex}`);
    console.log(`_selectedTimeSlotIndex: ${this._selectedTimeSlotIndex}`);

    if(this.simpleDrop.dragData.fromUnscheduled){
      console.log('from unscheduled');
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.UnschduledJobs.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });
      // add to unscheduled
      let concat = this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers .concat(this.UnschduledJobs[selectedSlotIndex]);
      console.log("concat:", concat);
      this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;

      // and remove from scheduled
      this.UnschduledJobs = filterView;

      return;
    }
    if(droppedDayIndex==-1 && droppedTimeslotIndex ==-1){
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.SelectedTimeSlot.Customers.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });
      // add to unscheduled
      let concat = this.UnschduledJobs.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.UnschduledJobs = concat;

      // and remove from scheduled
      this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;

      // maybe display modal
      return;
    }

    let droppedOnSameDay = droppedDayIndex === this._selectedDayIndex;
    let droppedOnSameTimeSlot = droppedTimeslotIndex === this._selectedTimeSlotIndex;

    if (droppedOnSameDay && droppedOnSameTimeSlot) {
      console.log('Dropped on same day and time slot, do nothing');
    }
    else {
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.SelectedTimeSlot.Customers.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });

      console.log("selectedSlotIndex:", selectedSlotIndex);
      let concat = this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;
      console.log("dropped customer:", this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers[selectedSlotIndex]);
      console.log("filterView:", filterView);
      this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;
    }
  }

  TimeslotClicked(event: any, dayIndex: number, timeslotIndex: number) {
    console.log(event);
    // console.log(`timeslot.Time: ${timeslot.Time}`);
    // console.log(`day.DayName: ${day.DayName}`);

    // if (this._selectedCustomerIndex == -1) {
    //   this._selectedTimeSlotIndex = timeslotIndex;
    //   this._selectedDayIndex = dayIndex;
    //   this._selectedCustomerIndex = -1;
    //   console.log('day slot selected because empty');
    //   return;
    // }

    // console.log(`SelectedDay.Time: ${this.SelectedTimeSlot.Time}`);
    // console.log(`SelectedDay.DayName: ${this.SelectedDay.DayName}`);
    if (this._selectedDayIndex > -1) {
      this.SelectedTimeSlot.OpenCustomers = false;
    }
    if ((this._selectedDayIndex != dayIndex)
      || (this._selectedTimeSlotIndex != timeslotIndex)) {
      this._selectedTimeSlotIndex = timeslotIndex;
      this._selectedDayIndex = dayIndex;
      this._selectedCustomerIndex = -1;
      console.log('day slot selected because different');
    } else {
      console.log('day slot remain same');
    }
    this.SelectedTimeSlot.OpenCustomers = true;
  }

  ToggleCustomerClicked(event: any, customerIndex: number) {
    // console.log(event);
    // console.log(customer);
    this._selectedCustomerIndex = customerIndex;
  }

  closePoorMansModal(){
    this._selectedCustomerIndex = -1;
  }
}

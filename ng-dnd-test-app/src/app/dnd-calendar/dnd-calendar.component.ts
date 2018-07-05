import { Component, OnInit } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';
// import { start } from 'repl';
import { FormGroup, FormControl } from '@angular/forms';
import { CalendarDataService } from '../services/calendar-data.service.service';

@Component({
  selector: 'app-dnd-calendar',
  templateUrl: './dnd-calendar.component.html',
  styleUrls: ['./dnd-calendar.component.css']
})

export class DndCalendarComponent implements OnInit {
  private _selectCustomer: DndCustomer;
  private _selectedTimeSlotIndex: number = -1;
  private _selectedDayIndex: number = -1;

  days: DndDay[];
  unschduledJobs: DndCustomer[] = [];
  showUnscheduled: boolean = false;
  filterBy: string = 'Suburb';
  model: any = {};
  heroForm: any;
  simpleDrop: any = null;
  navigateDays: number = 0;
  takeDays: number = 5;
  navigationDaysOptions: number[] = [
    -14,-7,-1,0,1,7,14
  ];

  get SelectedTimeSlot(): DndTimeSlot {
    if (this._selectedTimeSlotIndex > -1) {
      return this.SelectedDay.TimeSlots[this._selectedTimeSlotIndex];
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
    if (this._selectedDayIndex > -1) {
      return this.days[this._selectedDayIndex];
    }
    return null;
  }

  constructor(
    private calendarDataService: CalendarDataService) {

  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  ngOnInit() {
    this.model = {
      filterBy: this.filterBy
    };

    this.days = this.calendarDataService.getDays(this.navigateDays, this.takeDays);

    let startingPoint = 41;
    this.unschduledJobs = [];
    // if (this.showUnscheduled) {
    // }
  }

  formatDays(days: number): string{
    if(days == 0){
      return 'This week';
    }
    if(days == -1 || days == 1){
      return `${days} Day`;
    }
    return `${days} Days`;
  }
  //todo: refactor and move to service
  transferDataSuccess($event: any, droppedDayIndex: number, droppedTimeslotIndex: number) {
    console.log('called transferDataSuccess');
    this.simpleDrop = $event;
    console.log(`droppedDayIndex: ${droppedDayIndex}`);
    console.log(`_selectedDayIndex: ${this._selectedDayIndex}`);
    console.log(`droppedTimeslotIndex: ${droppedTimeslotIndex}`);
    console.log(`_selectedTimeSlotIndex: ${this._selectedTimeSlotIndex}`);

    if (this.simpleDrop.dragData.fromUnscheduled) {
      console.log('from unscheduled');
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.unschduledJobs.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });
      // add to unscheduled
      let concat = this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.unschduledJobs[selectedSlotIndex]);
      console.log("concat:", concat);
      this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;

      // and remove from scheduled
      this.unschduledJobs = filterView;

      return;
    }
    if (droppedDayIndex == -1 && droppedTimeslotIndex == -1) {
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
      let concat = this.unschduledJobs.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.unschduledJobs = concat;

      // and remove from scheduled
      this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;

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
      let concat = this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;
      console.log("dropped customer:", this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers[selectedSlotIndex]);
      console.log("filterView:", filterView);
      this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;
    }
  }

  timeslotClicked(event: any, dayIndex: number, timeslotIndex: number) {
    if (this._selectedDayIndex > -1) {
      this.SelectedTimeSlot.OpenCustomers = false;
    }
    if ((this._selectedDayIndex != dayIndex)
      || (this._selectedTimeSlotIndex != timeslotIndex)) {
      this._selectedTimeSlotIndex = timeslotIndex;
      this._selectedDayIndex = dayIndex;
      this._selectCustomer = null;
      console.log('day slot selected because different');
    } else {
      console.log('day slot remain same');
    }
    this.SelectedTimeSlot.OpenCustomers = true;
  }

  toggleCustomerClicked(event: any, customer: DndCustomer) {
    this._selectCustomer = customer;
  }

  closePoorMansModal() {
    this._selectCustomer = null;
  }

  navigateToDay(daysAdd: number){
    console.log('daysAdd:',daysAdd);
    if(this._selectedTimeSlotIndex != -1){
      this.SelectedTimeSlot.OpenCustomers = false;
    }
    this._selectedTimeSlotIndex = -1;
    this._selectedDayIndex = -1;
    
    if(this._selectCustomer!= null){
      
      this._selectCustomer = null;
    }

    this.navigateDays = (daysAdd==0) ? 0 : this.navigateDays + daysAdd;
    this.days = this.calendarDataService.getDays(this.navigateDays, this.takeDays);
  }
}

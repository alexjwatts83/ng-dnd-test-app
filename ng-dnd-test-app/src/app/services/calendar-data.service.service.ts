import { Injectable } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';
import { MockNameService } from '../services/mock-name.service';

@Injectable()
export class CalendarDataService {
  private _days: DndDay[];
  private _currentStartFrom: number;

  brands: string[] = ['All', 'Other', 'Freedom', 'Wholesale', 'Sydney', 'The Good Guys', 'Wholesale Kitchens (CS)', 'Kinsman Kitchens'];
  states: string[] = ['All', 'NSW', 'QLD', 'VIC', 'ACT', 'SA', 'NT', 'TAS', 'WA'];
  takeDaysOptions: number[] = [7, 14];
  navigationDaysOptions: number[] = [
    -14, -7, -1, 0, 1, 7, 14
  ];

  constructor(private mockNameService: MockNameService) {
    this._days = [];
    this._currentStartFrom = 0;
  }

  public getDays(startFrom: number, take: number): DndDay[] {
    this._days = [];
    let startFromDate = this.getMonday(new Date());
    if (startFrom == 0) {
      this._currentStartFrom = 0;
    } else {
      startFromDate = new Date(startFromDate);
      startFromDate.setDate(startFromDate.getDate() + startFrom);
    }

    for (let i = 0; i < take; i++) {
      let date = new Date(startFromDate);
      date.setDate(date.getDate() + i);
      this._days.push(this.createDay(((i + 1) * take), date));
    }

    return this._days;
  }

  public createCustomer(startingPoint: number, suburb: string, postcode: string): DndCustomer {
    let firstName = this.mockNameService.firstNames[(startingPoint + 1)];
    let lastName = this.mockNameService.lastNames[(startingPoint + 1)];
    let showRoom = this.mockNameService.getShowroom(suburb);
    let consultant = this.mockNameService.getConsultant();
    let designer = this.mockNameService.getDesigner();
    let dateAppointed = new Date();
    const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
    let cust = new DndCustomer(firstName, lastName, 'job ' + (startingPoint + 1), comment, 'link' + (startingPoint + 1), suburb, postcode, 'lead ' + (startingPoint + 1)
      , showRoom, consultant, dateAppointed, designer);

    return cust;
  }

  private createDay(startingPoint: number, date: Date): DndDay {
    let cust1 = this.createCustomer(startingPoint + 0, 'Gosford', '2250');
    let cust2 = this.createCustomer(startingPoint + 1, 'Erina', '2250');
    let cust3 = this.createCustomer(startingPoint + 2, 'Erina', '2250');
    let cust4 = this.createCustomer(startingPoint + 3, 'Newcastle', '2300');
    let cust5 = this.createCustomer(startingPoint + 4, 'Newcastle', '2300');
    let cust6 = this.createCustomer(startingPoint + 5, 'Newcastle', '2300');
    let cust7 = this.createCustomer(startingPoint + 6, 'Erina', '2250');
    let cust8 = this.createCustomer(startingPoint + 7, 'Maitland', '2200');

    let timeslot1 = new DndTimeSlot('10AM', 3, [cust1, cust2]);
    let timeslot2 = new DndTimeSlot('2PM', 5, [cust3, cust4, cust7, cust8]);
    let timeslot3 = new DndTimeSlot('7PM', 7, [cust5, cust6]);

    let day = new DndDay([timeslot1, timeslot2, timeslot3], date);

    return day;
  }

  private getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1)
      date.setHours(-24 * (day - 1));
    return date;
  }

  transferDataEventHandler(data: ITransferCustomerData) {
    console.log('transferDataEventHandler');
    console.log('data', data);
    let droppedJobNumber = data.customer.JobNumber;
    let filterView = [];
    let selectedSlotIndex = -1;

    data.fromTimeSlot.Customers.forEach((element, index) => {
      if (element.JobNumber === droppedJobNumber) {
        selectedSlotIndex = index;
      } else {
        filterView.push(element);
      }
    });

    console.log("selectedSlotIndex:", selectedSlotIndex);
    //let concat = this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
    let concat = data.toTimeSlot.Customers.concat(data.customer);
    console.log("concat:", concat);
    //this.days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;
    data.toTimeSlot.Customers = concat;
    // console.log("dropped customer:", this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers[selectedSlotIndex]);
    console.log("filterView:", filterView);
    // this.days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;
    data.fromTimeSlot.Customers = filterView;
  }
}

export interface ITransferCustomerData {
  customer: DndCustomer;
  fromTimeSlot: DndTimeSlot;
  fromDay: DndDay;
  toTimeSlot: DndTimeSlot;
  toDay: DndDay;
}
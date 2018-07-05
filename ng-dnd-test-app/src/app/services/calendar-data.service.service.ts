import { Injectable } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';
import { MockNameService } from '../services/mock-name.service';

@Injectable()
export class CalendarDataService {
  private _days: DndDay[];

  constructor(private mockNameService: MockNameService) {
    this._days = [];
  }

  public getDays(): DndDay[] {
    let monday = this.getMonday(new Date());
    for (let i = 0; i < 7; i++) {
      let date = new Date(monday);
      date.setDate(date.getDate() + i);
      this._days.push(this.createDay(((i + 1) * 7), date));
    }

    return this._days;
  }

  public createCustomer(startingPoint: number, suburb: string, postcode: string): DndCustomer {
    let firstName = this.mockNameService.firstNames[(startingPoint + 1)];
    let lastName = this.mockNameService.lastNames[(startingPoint + 1)];
    let showRoom = this.mockNameService.getShowroom();
    let consultant = this.mockNameService.getConsultant();
    let designer = this.mockNameService.getDesigner();
    let dateAppointed = new Date();
    const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
    let cust = new DndCustomer(firstName, lastName, 'job ' + (startingPoint + 1), comment, 'link' + (startingPoint + 1), suburb, postcode,'lead ' + (startingPoint + 1)
    ,showRoom,consultant,dateAppointed,designer);

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

    let timeslot1 = new DndTimeSlot('10am', 10, [cust1, cust2]);
    let timeslot2 = new DndTimeSlot('2pm', 5, [cust3, cust4, cust7]);
    let timeslot3 = new DndTimeSlot('7pm', 7, [cust5, cust6]);

    let day = new DndDay([timeslot1, timeslot2, timeslot3], date);

    return day;
  }

  private getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1)
      date.setHours(-24 * (day - 1));
    return date;
  }


}


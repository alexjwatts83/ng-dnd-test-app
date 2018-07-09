import { DndTimeSlot } from './dnd-time-slot';
import * as moment from 'moment';
export interface IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
    week: number;
}

export class DndDay implements IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
    get week(): number{
        return moment(this.Date).week();
    }
    get IsToday(): boolean{
        let d = new Date();
        return d.toDateString() == this.Date.toDateString();
    }
    get IsSunday(): boolean{
        return this.Date.getDay() ==0;
    }
    constructor(timeSlots: DndTimeSlot[], date: Date) {
        this.TimeSlots = timeSlots;
        this.Date = date;
    }
}
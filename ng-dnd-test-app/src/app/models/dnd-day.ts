import { DndTimeSlot } from './dnd-time-slot';

export interface IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
}

export class DndDay implements IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
    get IsToday(): boolean{
        let d = new Date();
        return d.toDateString() == this.Date.toDateString();
    }
    constructor(timeSlots: DndTimeSlot[], date: Date) {
        this.TimeSlots = timeSlots;
        this.Date = date;
    }
}
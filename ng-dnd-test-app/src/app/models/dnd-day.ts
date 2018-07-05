import { DndTimeSlot } from './dnd-time-slot';

export interface IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
}

export class DndDay implements IDndDay {
    TimeSlots: DndTimeSlot[];
    Date: Date;
    constructor(timeSlots: DndTimeSlot[], date: Date) {
        this.TimeSlots = timeSlots;
        this.Date = date;
    }
}
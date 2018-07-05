import { DndTimeSlot } from './dnd-time-slot';

export interface IDndDay {
    WeekNumber: number;
    DayName: string;
    TimeSlots: DndTimeSlot[];
    Date: Date;
}

export class DndDay implements IDndDay {
    WeekNumber: number;
    DayName: string;
    TimeSlots: DndTimeSlot[];
    Date: Date;
    constructor(weekNumber: number, dayName: string, timeSlots: DndTimeSlot[], date: Date) {
        this.WeekNumber = weekNumber;
        this.DayName = dayName;
        this.TimeSlots = timeSlots;
        this.Date = date;
    }
}
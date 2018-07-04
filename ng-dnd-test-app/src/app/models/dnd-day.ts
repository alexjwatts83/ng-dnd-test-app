import { DndTimeSlot } from './dnd-time-slot';

export interface IDndDay {
    WeekNumber: number;
    DayName: string;
    TimeSlots: DndTimeSlot[];
}

export class DndDay implements IDndDay {
    WeekNumber: number;
    DayName: string;
    TimeSlots: DndTimeSlot[];

    constructor(weekNumber: number, dayName: string, timeSlots: DndTimeSlot[]) {
        this.WeekNumber = weekNumber;
        this.DayName = dayName;
        this.TimeSlots = timeSlots;
    }
}
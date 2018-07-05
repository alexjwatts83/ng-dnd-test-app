import { DndCustomer } from './dnd-customer';

export interface IDndTimeSlot {
    Time: string;
    TimeSlotsAllocated: number;
    TimeSlotsTotal: number;
    Customers: DndCustomer[];
    // PostCodeDisplay: IDndPostCodeDisplay[];
    OpenCustomers: boolean;
}

export class DndTimeSlot implements IDndTimeSlot {
    Time: string;
    Customers: DndCustomer[];
    OpenCustomers: boolean;
    TimeSlotsTotal: number;
    
    get TimeSlotsAllocated(): number {
        return this.Customers.length;
    }
    
    constructor(time: string, timeSlotsTotal: number, customers: DndCustomer[]) {
        this.Time = time;
        this.Customers = customers;
        this.TimeSlotsTotal = timeSlotsTotal;
    }
}
import { DndCustomer } from './dnd-customer';
export interface IDndPostCodeDisplay {
    PostCode: string,
    NumberOfCustomers: number;
}

export interface IDndTimeSlot {
    Time: string;
    TimeSlotsAllocated: number;
    TimeSlotsTotal: number;
    Customers: DndCustomer[];
    PostCodeDisplay: IDndPostCodeDisplay[];
    OpenCustomers: boolean;
}

export class DndTimeSlot implements IDndTimeSlot {
    Time: string;
    Customers: DndCustomer[];
    OpenCustomers: boolean;
    get TimeSlotsAllocated(): number {
        return this.Customers.length;
    }
    get PostCodeDisplay(): IDndPostCodeDisplay[] {
        let postCodeDisplay: IDndPostCodeDisplay[] = [];
        this.Customers.forEach(x => {
            let postCodeInList = false;
            postCodeDisplay.forEach(y => {
                if (x.PostCode === y.PostCode) {
                    postCodeInList = true;
                    y.NumberOfCustomers = y.NumberOfCustomers + 1;
                    return;
                }
                if (postCodeInList) {
                    return;
                }
            });
            if (!postCodeInList) {
                postCodeDisplay.push({
                    PostCode: x.PostCode,
                    NumberOfCustomers: 1
                });
            }
        });
        return postCodeDisplay;
    }
    TimeSlotsTotal: number;
    constructor(time: string, timeSlotsTotal: number, customers: DndCustomer[]) {
        this.Time = time;
        this.Customers = customers;
        this.TimeSlotsTotal = timeSlotsTotal;
    }
}
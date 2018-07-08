import { Component, OnInit, Input } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndDay } from '../models/dnd-day';
import { DndTimeSlot } from '../models/dnd-time-slot';

@Component({
  selector: 'app-dnd-customer',
  templateUrl: './dnd-customer.component.html',
  styleUrls: ['./dnd-customer.component.css']
})
export class DndCustomerComponent implements OnInit {
  @Input()
  customer: DndCustomer;

  @Input()
  day: DndDay;

  @Input()
  timeslot: DndTimeSlot;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { DndCustomer } from '../../models/dnd-customer';

@Component({
  selector: 'app-poor-mans-modal',
  templateUrl: './poor-mans-modal.component.html',
  styleUrls: ['./poor-mans-modal.component.css']
})
export class PoorMansModalComponent implements OnInit {
  @Input()
  selectedCustomer: DndCustomer;

  @Input()
  showModal: Boolean;

  @Output()
  closeModalClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  closePoorMansModal() {
    this.closeModalClick.emit(false);
  }
}

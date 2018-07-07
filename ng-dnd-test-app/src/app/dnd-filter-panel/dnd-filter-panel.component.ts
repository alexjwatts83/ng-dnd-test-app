import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDataService } from '../services/calendar-data.service.service';

@Component({
  selector: 'dnd-filter-panel',
  templateUrl: './dnd-filter-panel.component.html',
  styleUrls: ['./dnd-filter-panel.component.css']
})
export class DndFilterPanelComponent implements OnInit {
  @Input()
  showFilterPanel: boolean;

  @Output() filterByChange = new EventEmitter();

  private _filterBy: string;

  @Input()
  get filterBy() {
    return this._filterBy;
  }

  set filterBy(val) {
    this._filterBy = val;
    this.filterByChange.emit(this._filterBy);
  }

  brands:string[];
  states:string[];

  constructor(private calendarDataService: CalendarDataService) { 
    this.brands = this.calendarDataService.brands;
    this.states = this.calendarDataService.states;
  }

  ngOnInit() {
    
  }

}

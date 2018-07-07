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

  @Input()
  takeDays: number;

  @Output() filterByChange = new EventEmitter();

  @Output()
  takeDaysClick: EventEmitter<String> = new EventEmitter<String>();

  @Output()
  navigationDaysClick: EventEmitter<String> = new EventEmitter<String>();

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
  takeDaysOptions: number[];
  navigationDaysOptions: number[];
  constructor(private calendarDataService: CalendarDataService) { 
    this.brands = this.calendarDataService.brands;
    this.states = this.calendarDataService.states;
    this.takeDaysOptions = this.calendarDataService.takeDaysOptions;
    this.navigationDaysOptions = this.calendarDataService.navigationDaysOptions;
  }
  
  ngOnInit() {
    
  }

  takeDaysClicked(event, takeDays){
    this.takeDaysClick.emit(takeDays); //emmiting the event.
  }

  navigationDaysClicked(event, navigationDays){
    this.navigationDaysClick.emit(navigationDays); //emmiting the event.
  }

  formatDays(days: number): string {
    if (days == 0) {
      return 'This week';
    }
    if (days == -1 || days == 1) {
      return `${days} Day`;
    }
    return `${days} Days`;
  }

}

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
  takeDaysOptions: number[] = [7, 14];

  constructor(private calendarDataService: CalendarDataService) { 
    this.brands = this.calendarDataService.brands;
    this.states = this.calendarDataService.states;
  }

  ngOnInit() {
    
  }
  @Output()
  takeDaysClick: EventEmitter<String> = new EventEmitter<String>();

  takeDaysClicked(event, takeDays){
    this.takeDaysClick.emit(takeDays); //emmiting the event.
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

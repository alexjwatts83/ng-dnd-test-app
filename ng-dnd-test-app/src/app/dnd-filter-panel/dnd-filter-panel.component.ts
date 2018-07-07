import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}

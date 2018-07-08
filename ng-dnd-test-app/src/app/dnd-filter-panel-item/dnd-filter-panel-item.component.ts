import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'dnd-filter-panel-item',
  templateUrl: './dnd-filter-panel-item.component.html',
  styleUrls: ['./dnd-filter-panel-item.component.css']
})
export class DndFilterPanelItemComponent implements OnInit {
  @Input() itemClass: string = 'filter-panel-item';

  constructor() { }

  ngOnInit() {
  }

}

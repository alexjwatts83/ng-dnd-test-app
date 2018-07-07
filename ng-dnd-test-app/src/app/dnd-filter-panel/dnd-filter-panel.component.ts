import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnd-filter-panel',
  templateUrl: './dnd-filter-panel.component.html',
  styleUrls: ['./dnd-filter-panel.component.css']
})
export class DndFilterPanelComponent implements OnInit {
  @Input() 
  showFilterPanel: boolean;
  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndModule } from 'ng2-dnd';
import { DndCalendarComponent } from './dnd-calendar/dnd-calendar.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { FormsModule } from '@angular/forms';
import { CalendarDataService } from '../app/services/calendar-data.service.service';
import { MockNameService } from '../app/services/mock-name.service';
import { DndFilterPanelComponent } from './dnd-filter-panel/dnd-filter-panel.component';
import { DndFilterPanelItemComponent } from './dnd-filter-panel-item/dnd-filter-panel-item.component';

@NgModule({
   declarations: [
      AppComponent,
      DndCalendarComponent,
      GroupByPipe,
      DndFilterPanelComponent,
      DndFilterPanelItemComponent
   ],
   imports: [
      BrowserModule,
      DndModule.forRoot(),
    FormsModule
  ],
  providers: [
    CalendarDataService
    , MockNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

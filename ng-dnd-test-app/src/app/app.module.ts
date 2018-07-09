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
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { DndDayComponent } from './dnd-day/dnd-day.component';
import { DndCustomerComponent } from './dnd-customer/dnd-customer.component';
import { DndTimeslotComponent } from './dnd-timeslot/dnd-timeslot.component';
import { DndCalendarWeekComponent } from './dnd-calendar-week/dnd-calendar-week.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CalendarDataObservableService } from './services/calendar-data-observable.service';

@NgModule({
  declarations: [
    AppComponent,
    DndCalendarComponent,
    GroupByPipe,
    DndFilterPanelComponent,
    DndFilterPanelItemComponent,
    EscapeHtmlPipe,
    DndDayComponent,
    DndCustomerComponent,
    DndTimeslotComponent,
    DndCalendarWeekComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    // Http,
    HttpClientModule
  ],
  providers: [
    CalendarDataService
    , MockNameService,
    CalendarDataObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

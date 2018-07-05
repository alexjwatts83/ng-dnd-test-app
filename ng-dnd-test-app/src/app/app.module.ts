import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndModule } from 'ng2-dnd';
import { DndCalendarComponent } from './dnd-calendar/dnd-calendar.component';
import { GroupByPipe } from './pipes/group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DndCalendarComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
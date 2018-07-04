import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndModule } from 'ng2-dnd';
import { DndCalendarComponent } from './dnd-calendar/dnd-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DndCalendarComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

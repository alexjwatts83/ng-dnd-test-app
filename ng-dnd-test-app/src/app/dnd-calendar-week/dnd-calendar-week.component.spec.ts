/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DndCalendarWeekComponent } from './dnd-calendar-week.component';

describe('DndCalendarWeekComponent', () => {
  let component: DndCalendarWeekComponent;
  let fixture: ComponentFixture<DndCalendarWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndCalendarWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndCalendarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
